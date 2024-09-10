---
title: api-drivers_cc110x.md
description: api-drivers_cc110x.md
---
# group `drivers_cc110x` 

This module contains the driver for the TI CC1100/CC110e/CC1101 Sub-GHz transceivers.

How the CC1100/CC1101 operate can be configured quite sophistically. This has the drawback, that configurations breaking laws and rules are complete possible. Please make sure that the configured output power, duty cycle, frequency range, etc. conform to the rules, standards and laws that apply in your use case.

Supported Hardware and how to obtainThis driver has been developed for the CC1101 and the older CC1100 transceiver and tested for both. However, it should work with the CC1100e as well - but this has *NOT* been tested at all.

It is suggested to go for the CC1101 when considering to buy one of the supported transceivers. The easiest way is to obtain CC1101 break out boards with a complete antenna circuit & antenna that can be connected via jumper wires using an 8 pin DIP pin header. These are sold in various flavours start from less than 2€ at quantity one at your favourite Far East store. Beware that while the CC1101 chip can operate a various base frequencies, the antenna circuit will only work for a single frequency band. Most break out boards will operate at 433 MHz, which is license free in many countries (but verify that for your country before buying!). EU citizens might prefer the 868 MHz band over the 433 MHz, as more license free bandwidth is available in the 868 MHz band in the EU. (But when deploying only a few dozens of devices, the 433 MHz band is also fine for EU citizens.) US citizens should go for the 900 MHz band (as 868 MHz is not license free in the USA), which even contains more bandwidth than the 868 MHz band. (However, the 900 MHz band has not been tested, as using it would be illegal in the EU.)

Packet Format
```cpp
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Preamble (4 bytes, handled by hardware, see MDMCFG1)      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Sync Word (4 bytes, handled by hardware, see MDMCFG2)     |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Length Field  |  Destination  |    Source     |  Payload...
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 ... (see Length Field)         |  CRC (handled by hardware)    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

Field   |Description
--------- | ---------
Preamble   |4 bytes, handled by hardware
Sync Word   |4 bytes, handled by hardware
Length Field   |Handled by software & hardware, length of payload + 2
Destination   |Handled by software & hardware, destination MAC address
Source   |Handled by software only, source MAC address
Payload   |Handled by software only, the payload to send
CRC   |2 bytes, handled by hardware

The Length Field contains the length of the driver supplied data in bytes, not counting the Length Field. Thus, it contains the length of the payload plus the length of the Destination and Source address.

Layer-2 AddressesThe layer 2 addresses of the CC110x transceivers is a single byte long and the special value `0x00` for the destination address is used in broadcast transmissions. The transceiver is configured by this driver to ignore all packets unless the destination address matches the address of the transceiver or the destination address is `0x00`.

Please note that the layer 2 address by default is derived from the CPU ID. Due to the birthday paradox with only 20 devices the probability of a collision is already bigger than 50%. Thus, manual address assignment is supported by providing an implementation of [cc1xxx_eui_get](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc1xxx_1ga8bac248ae45d469607592d9e4f4c95d2).

Base Band, Data Rate, Channel Bandwidth and Channel Map ConfigurationThis driver allows to configure the base band, the data rate and the channel bandwidth using an [cc110x_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t) data structure. Default configurations are supplied and name using the following scheme: `cc110x_config_<BASE-BAND>_<DATA-RATE>_<CHANNEL-BANDWIDTH>`. (E.g. [cc110x_config_868mhz_250kbps_300khz](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc110x__settings_8h_1a622ee6ea5cfbacb26baa67ce04683c5b) is the default configuration used by the MSB-A2 and the MSB-IoT boards.)

Using the [cc110x_chanmap_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t) data structure the channel layout can be defined. This map contains 8 entries, each defines the offset from the base frequency defined in the [cc110x_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t) data structure for each channel in steps of 50kHz. E.g. [cc110x_chanmap_868mhz_lora](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc110x__settings_8h_1a521cfee46deee83e4f87dcd33433603d) provides the LoRa channels 10 to 17 in the 868MHz band. (The RIOT channel numbers will always start from 0, and currently only up to eight channels are supported. A special value of 255 as offset from the base frequency in the channel map is used mark the channel as disabled. This can be used if less than 8 non-overlapping channels are possible in the license free band.)

Please note that the channel map ([cc110x_chanmap_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t)) must match the base configuration ([cc110x_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t)), as the channel map is relative to the configured base frequency. Also, the distance between the channels in the channel map should match the channel bandwidth of the configuration, as otherwise channels could overlap.

Both configuration and matching channel map can be applied using [cc110x_apply_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1gab625dd7ec2f9a7e44dbe3f61d766af5c). Please consider this as a slow operation, as the transceiver needs to be calibrated for each channel in the channel map.

Calibration of the Frequency GeneratorThe CC110x transceivers use a voltage controlled oscillator (VCO) and a phase locked loop (PLL) for frequency generation. However, they need to be calibrated to work correctly with the given supply voltage and the current temperature. The driver will perform this calibration during startup, but when the supply voltage or the temperature is not stable, a recalibration is required whenever the supply voltage of temperature has changed too much since the last calibration. This can be done by calling [cc110x_full_calibration](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga190d929cb3da4b8c22699a8e60eb839b). It is left to the application developer to perform this calibration when needed. During a test of about 2 hours of operation in an in-door environment with a stable temperature the CC1101 has worked reliable without any calibration at all (except for the automatic calibration at start up). So there are use cases which do not require any recalibration at all.

TroubleshootingThe Driver Does Not Initialize ProperlySet `ENABLE_DEBUG` in `cc110x_netdev.c` to `1` to get debug output, which will likely tell you what is going wrong. There are basically two things that can fail:

Upon initialization the driver will read out the part number and version of the transceiver. If those do not match the ones expected for the CC1100, CC1100E, or the CC1101 the driver will refuse to initialize. If this fails, most likely incorrect values are read out and the SPI communication does not work correctly. However, future revisions of the CC110X transceivers might be produced and might have different values for the part number or version. If this should happen and they remain compatible with the driver, their part number & revision needs to be added to the driver.

After uploading the configuration, the driver will read back the configuration to verify it. If the SPI communication is not reliable (e.g. sporadically bits flip), this will fail from time to time. E.g. on the MSB-IoT boards this is the case when the SPI interface operates at a clock of 5MHz, but it becomes reliable when clocked at 1MHz.

The Driver Initializes, but Communication Is ImpossibleIf two transceivers are too close to each other and TX power is at maximum, the signal is just too strong to be received correctly. Reducing TX power or increasing the distance (about half a meter should be fine) will solve this issue.

While the chips can operate at any base frequency offered by the driver, the circuit the chip is connected to and the antenna are build for a single base band. Check if your configuration matches the frequency range the board is build for. E.g. most break out boards operate at 433MHz, but there are also boards for 868MHz.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CC110X_MAX_FRAME_SIZE`](#group__drivers__cc110x_1ga2f9855cabc5979533613ecd64a3bf1cb)            | Length of a layer 2 frame.
`define `[`CC110X_MAX_PAYLOAD_SIZE`](#group__drivers__cc110x_1gae9151a25d890471ac0497aef91ff1ce1)            | Maximum (layer 2) payload size supported by the driver.
`define `[`CC110X_MAX_CHANNELS`](#group__drivers__cc110x_1ga1df415ced3184c2c273ce9a8d6740ab3)            | Maximum number of channels supported by the driver.
`define `[`CC110X_DEFAULT_PROTOCOL`](#group__drivers__cc110x_1gaa97ff5d3385664955a8b321dca54b7ff)            | Default protocol for data that is coming in.
`enum `[`cc110x_state_t`](#group__drivers__cc110x_1ga11315ca57b89a5c68af4c57d9f92a547)            | The state of the CC1100/CC1101 transceiver.
`enum `[`cc110x_tx_power_t`](#group__drivers__cc110x_1ga1928e3385efe9717d9b4d256d4ee5ac9)            | Enumeration over the possible TX power settings the driver offers.
`public int `[`cc110x_setup`](#group__drivers__cc110x_1gab67fdf32d1764bbef2fa7e8c6ec6242b)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,const `[`cc110x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__params__t)` * params,uint8_t index)`            | Setup the CC1100/CC1101 driver, but perform no initialization.
`public int `[`cc110x_apply_config`](#group__drivers__cc110x_1gab625dd7ec2f9a7e44dbe3f61d766af5c)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,const `[`cc110x_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t)` * conf,const `[`cc110x_chanmap_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t)` * chanmap,uint8_t channel)`            | Apply the given configuration and the given channel map and performs a recalibration.
`public int `[`cc110x_full_calibration`](#group__drivers__cc110x_1ga190d929cb3da4b8c22699a8e60eb839b)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev)`            | Perform a calibration of the frequency generator for each supported channel.
`public int `[`cc110x_set_channel`](#group__drivers__cc110x_1ga119902c5d0c8f41cfc79dffbfcb2530e)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,uint8_t channel)`            | Hops to the specified channel.
`public int `[`cc110x_set_tx_power`](#group__drivers__cc110x_1ga8fb5879cb246ecdb66384187dd288e3c)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,`[`cc110x_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga1928e3385efe9717d9b4d256d4ee5ac9)` power)`            | Set the TX power to the specified value.
`public int `[`cc110x_wakeup`](#group__drivers__cc110x_1gaf5ab6b59e99b246e1664d46215a88769)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev)`            | Wakes the transceiver from SLEEP mode and enters RX mode.
`public void `[`cc110x_sleep`](#group__drivers__cc110x_1gab66a6bd8e228e67b1b80d8f53dffc6c6)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev)`            | Sets the transceiver into SLEEP mode.
`struct `[`cc110x_patable_t`](#structcc110x__patable__t) | Structure that holds the PATABLE, which allows to configure the 8 available output power levels using a magic number for each level.
`struct `[`cc110x_config_t`](#structcc110x__config__t) | Configuration of the transceiver to use.
`struct `[`cc110x_chanmap_t`](#structcc110x__chanmap__t) | Structure to hold mapping between virtual and physical channel numbers.
`struct `[`cc110x_params_t`](#structcc110x__params__t) | Structure holding all parameter for driver initialization.
`struct `[`cc110x_fs_calibration_t`](#structcc110x__fs__calibration__t) | Structure holding the calibration data of the frequency synthesizer.
`struct `[`cc110x_framebuf_t`](#structcc110x__framebuf__t) | Buffer to temporary store incoming/outgoing packet.
`struct `[`cc110x_t`](#structcc110x__t) | Device descriptor for CC1100/CC1101 transceivers.

## Members

#### `define `[`CC110X_MAX_FRAME_SIZE`](#group__drivers__cc110x_1ga2f9855cabc5979533613ecd64a3bf1cb) 

Length of a layer 2 frame.

This does not include the preamble, sync word, CRC field, and length field.

#### `define `[`CC110X_MAX_PAYLOAD_SIZE`](#group__drivers__cc110x_1gae9151a25d890471ac0497aef91ff1ce1) 

Maximum (layer 2) payload size supported by the driver.

#### `define `[`CC110X_MAX_CHANNELS`](#group__drivers__cc110x_1ga1df415ced3184c2c273ce9a8d6740ab3) 

Maximum number of channels supported by the driver.

#### `define `[`CC110X_DEFAULT_PROTOCOL`](#group__drivers__cc110x_1gaa97ff5d3385664955a8b321dca54b7ff) 

Default protocol for data that is coming in.

#### `enum `[`cc110x_state_t`](#group__drivers__cc110x_1ga11315ca57b89a5c68af4c57d9f92a547) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CC110X_STATE_IDLE            | IDLE state.
CC110X_STATE_FRAME_READY            | Frame received, waiting for upper layer to retrieve it.
CC110X_STATE_OFF            | Devices is powered down.
CC110X_STATE_RX_MODE            | Listening for frames.
CC110X_STATE_RECEIVING            | Receiving a frame just now.
CC110X_STATE_TX_MODE            | Transmit mode.
CC110X_STATE_TX_COMPLETING            | Waiting for transceiver to complete outgoing transmission.
CC110X_STATE_FSTXON            | Fast TX ready.
CC110X_STATE_CALIBRATE            | Device is calibrating.
CC110X_STATE_SETTLING            | PLL is settling.
CC110X_STATE_RXFIFO_OVERFLOW            | RX FIFO overflown.
CC110X_STATE_TXFIFO_UNDERFLOW            | TX FIFO underflown.

The state of the CC1100/CC1101 transceiver.

The three least significant bytes match the representation of the matching transceiver state given in the status byte of the hardware. See Table 32 on page 31 in the data sheet for the possible states in the status byte.

#### `enum `[`cc110x_tx_power_t`](#group__drivers__cc110x_1ga1928e3385efe9717d9b4d256d4ee5ac9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CC110X_TX_POWER_MINUS_30_DBM            | -30 dBm
CC110X_TX_POWER_MINUS_20_DBM            | -20 dBm
CC110X_TX_POWER_MINUS_15_DBM            | -15 dBm
CC110X_TX_POWER_MINUS_10_DBM            | -10 dBm
CC110X_TX_POWER_0_DBM            | 0 dBm
CC110X_TX_POWER_PLUS_5_DBM            | 5 dBm
CC110X_TX_POWER_PLUS_7_DBM            | 7 dBm
CC110X_TX_POWER_PLUS_10_DBM            | 10 dBm
CC110X_TX_POWER_NUMOF            | Number of TX power options.

Enumeration over the possible TX power settings the driver offers.

#### `public int `[`cc110x_setup`](#group__drivers__cc110x_1gab67fdf32d1764bbef2fa7e8c6ec6242b)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,const `[`cc110x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__params__t)` * params,uint8_t index)` 

Setup the CC1100/CC1101 driver, but perform no initialization.

[netdev_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ae9c8aa7e8b6ef4b7b4acfcb0ae84209a) can be used after this call to initialize the transceiver.

#### Parameters
* `dev` Device descriptor to use 

* `params` Parameter of the device to setup 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### Parameters
* `0` Device successfully set up 

* `-EINVAL` `dev` or `params` is `NULL`, or `params` is invalid

#### `public int `[`cc110x_apply_config`](#group__drivers__cc110x_1gab625dd7ec2f9a7e44dbe3f61d766af5c)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,const `[`cc110x_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t)` * conf,const `[`cc110x_chanmap_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t)` * chanmap,uint8_t channel)` 

Apply the given configuration and the given channel map and performs a recalibration.

#### Parameters
* `dev` Device descriptor of the transceiver 

* `conf` Configuration to apply or `NULL` to only change channel map 

* `chanmap` Channel map to apply (must be compatible with `conf`) 

* `channel` The channel to tune in after applying the config

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid argument 

* `-EIO` Communication with the transceiver failed 

* `-ERANGE` Channel out of range or not supported by channel map

The application developer checked in the documentation that the channel map in `chanmap` is compatible with the configuration in `conf`

Because the configuration (potentially) changes the channel bandwidth, the old channel map is rendered invalid. This API therefore asks for both to make sure an application developer does not forget to update the channel map. Because the old calibration data is also rendered invalid, [cc110x_full_calibration](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga190d929cb3da4b8c22699a8e60eb839b) is called to update it.

#### `public int `[`cc110x_full_calibration`](#group__drivers__cc110x_1ga190d929cb3da4b8c22699a8e60eb839b)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev)` 

Perform a calibration of the frequency generator for each supported channel.

#### Parameters
* `dev` Device descriptor of the transceiver

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid argument 

* `-EAGAIN` Current state prevents deliberate calibration 

* `-EIO` Communication with the transceiver failed

Tunes in each supported channel and calibrates the transceiver. The calibration data is stored so that [cc110x_set_channel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga119902c5d0c8f41cfc79dffbfcb2530e) can skip the calibration phase and use the stored calibration data instead.

#### `public int `[`cc110x_set_channel`](#group__drivers__cc110x_1ga119902c5d0c8f41cfc79dffbfcb2530e)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,uint8_t channel)` 

Hops to the specified channel.

#### Parameters
* `dev` Device descriptor of the transceiver 

* `channel` Channel to hop to

#### Parameters
* `0` Success 

* `-EINVAL` Called with `NULL` as `dev`

* `-ERANGE` Channel out of range or not supported by channel map 

* `-EAGAIN` Currently in a state that does not allow hopping, e.g. sending/receiving a packet, calibrating or handling transmission errors 

* `-EIO` Communication with the transceiver failed

This function implements the fact channel hopping approach outlined in section 28.2 on page 64 in the data sheet, which skips the calibration phase by storing the calibration date for each channel in the driver.

#### `public int `[`cc110x_set_tx_power`](#group__drivers__cc110x_1ga8fb5879cb246ecdb66384187dd288e3c)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev,`[`cc110x_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga1928e3385efe9717d9b4d256d4ee5ac9)` power)` 

Set the TX power to the specified value.

#### Parameters
* `dev` Device descriptor of the transceiver 

* `power` Output power to apply

#### Parameters
* `0` Success 

* `-EINVAL` Called with `NULL` as `dev`

* `-ERANGE` Called with an invalid value for `power`

* `-EAGAIN` Changing the TX power is in the current state not possible 

* `-EIO` Communication with the transceiver failed

#### `public int `[`cc110x_wakeup`](#group__drivers__cc110x_1gaf5ab6b59e99b246e1664d46215a88769)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev)` 

Wakes the transceiver from SLEEP mode and enters RX mode.

#### Parameters
* `0` Success 

* `-EIO` Communication with the transceiver failed

#### `public void `[`cc110x_sleep`](#group__drivers__cc110x_1gab66a6bd8e228e67b1b80d8f53dffc6c6)`(`[`cc110x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__t)` * dev)` 

Sets the transceiver into SLEEP mode.

Only [cc110x_wakeup](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1gaf5ab6b59e99b246e1664d46215a88769) can awake the device again.

# struct `cc110x_patable_t` 

Structure that holds the PATABLE, which allows to configure the 8 available output power levels using a magic number for each level.

See Section "24 Output Power Programming" on page 59ff in the data sheet. The values suggested in Table 39 on page 60 in the data sheet are already available by this driver, but will only be linked in (8 bytes of ROM size) when they are referenced.

**See also**: [cc110x_patable_433mhz](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc110x__settings_8h_1abcd2a6fd28da795cad5edc4702d236ab)

**See also**: [cc110x_patable_868mhz](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc110x__settings_8h_1a4524107126329e412f8ce97a8aca65d3)

**See also**: [cc110x_patable_915mhz](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc110x__settings_8h_1a6b043be07763d32d96da8de867388b1b)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`data`](#structcc110x__patable__t_1a8be026dc5c5a027e22995d7db9375655) | Magic number to store in the configuration register.

## Members

#### `public uint8_t `[`data`](#structcc110x__patable__t_1a8be026dc5c5a027e22995d7db9375655) 

Magic number to store in the configuration register.

# struct `cc110x_config_t` 

Configuration of the transceiver to use.

Two transceivers with different configurations will be unable to communicate.

The data uploaded into configuration registers are stored in [cc110x_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc110x__settings_8h_1a0204d58a7479f32890a720c3235c5432). Most of them cannot be changed, as the driver relies on their values. However, the base frequency, the symbol rate (which equals the bit rate for the chosen modulation and error correction) and the channel bandwidth can be configured using this data structure.

Please note that while the CC1100/CC1101 chip is compatible with a huge frequency range (300 MHz - 928 MHz), the complete circuit is optimized to a narrow frequency band. So make sure the configured base frequency is within that frequency band that is compatible with that circuit. (Most break out board will operate at the 433 MHz band. In the EU the 868 MHz band would be more interesting, but 433 MHz is license free as well. In the USA the 915 MHz band is license free.

Please verify that the driver is configured in a way that allows legal operation according to rules and laws that apply for you.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`base_freq`](#structcc110x__config__t_1a099e89a5553c0b554dec9e6396fe793d) | Base frequency to use.
`public uint8_t `[`fsctrl1`](#structcc110x__config__t_1a9d14a7ba3bb113f8a39cab73df41538a) | FSCTRL1 configuration register value that affects the intermediate frequency of the transceiver to use.
`public uint8_t `[`mdmcfg4`](#structcc110x__config__t_1a41913962c53f53f76aa08027b8824f22) | MDMCFG4 configuration register value that affects channel filter bandwidth and the data rate.
`public uint8_t `[`mdmcfg3`](#structcc110x__config__t_1ae1a86c94454bee5c9126808e7bd276a1) | MDMCFG3 configuration register value that affects the data rate.
`public uint8_t `[`deviatn`](#structcc110x__config__t_1a92a4d7d617ecd5df5f81c118799634a9) | DEVIANT configuration register that affects the amount by which the radio frequency is shifted in FSK/GFSK modulation.

## Members

#### `public uint8_t `[`base_freq`](#structcc110x__config__t_1a099e89a5553c0b554dec9e6396fe793d) 

Base frequency to use.

#### `public uint8_t `[`fsctrl1`](#structcc110x__config__t_1a9d14a7ba3bb113f8a39cab73df41538a) 

FSCTRL1 configuration register value that affects the intermediate frequency of the transceiver to use.

The 4 most significant bits have to be 0.

Assuming a 26 MHz crystal the IF is calculated as follows (in kHz):

```cpp
double intermediate_frequency = 26000 / 1024 * fsctrl1;
```

#### `public uint8_t `[`mdmcfg4`](#structcc110x__config__t_1a41913962c53f53f76aa08027b8824f22) 

MDMCFG4 configuration register value that affects channel filter bandwidth and the data rate.

See page 76 in the data sheet.

Assuming a 26 MHz crystal the channel filter bandwidth is calculated as follows (in kHz):

```cpp
uint8_t exponent = mdmcfg4 >> 6;
uint8_t mantissa = (mdmcfg4 >> 4) & 0x03;
double bandwidth = 26000.0 / (8 * (4 + mantissa) * (1L << exponent));
```

#### `public uint8_t `[`mdmcfg3`](#structcc110x__config__t_1ae1a86c94454bee5c9126808e7bd276a1) 

MDMCFG3 configuration register value that affects the data rate.

**See also**: [cc110x_config_t::mdmcfg4](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t_1a41913962c53f53f76aa08027b8824f22)

See page 76 in the data sheet.

Assuming a 26 MHz crystal the symbol rate of the transceiver is calculated as follows (in kBaud): 
```cpp
uint8_t exponent = mdmcfg4 & 0x0f;
int32_t mantissa = mdmcfg3;
double baudrate = (256 + mantissa) * 26000.0 / (1L << (28 - exponent));
```

#### `public uint8_t `[`deviatn`](#structcc110x__config__t_1a92a4d7d617ecd5df5f81c118799634a9) 

DEVIANT configuration register that affects the amount by which the radio frequency is shifted in FSK/GFSK modulation.

**See also**: [cc110x_config_t::mdmcfg4](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t_1a41913962c53f53f76aa08027b8824f22)

See page 79 in the data sheet.

In an ideal world the channel bandwidth would be twice the channel deviation. In the real world the used channel bandwidth is higher. Assuming a 26 MHz crystal and GFSK modulation (the driver will configure the transceiver to use GFSK) the deviation

```cpp
uint8_t exponent = (deviatn >> 4) & 0x07;
int32_t mantissa = deviatn & 0x07;
double deviation = (8 + mantissa) * 26000.0 / (1L << (17 - exponent));
```

For reliable operation at high symbol rates, the deviation has to be increased as well.

# struct `cc110x_chanmap_t` 

Structure to hold mapping between virtual and physical channel numbers.

This driver will provide "virtual" channel numbers 0 to 7, which will be translated to "physical" channel numbers before being send to the transceiver. This is used to overcome the following limitations:

* The transceiver does not support channel maps with varying distance between channels. However, e.g. the LoRa channels 10 - 16 in the 868 MHz band have a distance of 300 kHz, but channel 16 and 17 have a distance of 1 MHz.

* The transceiver does not supports channel distances higher than 405.46 kHz.

This mapping overcomes both limitations be using 50kHz physical channel spacing and use the map to translate to the correct physical channel. This also allows to keep the same MDMCFG1 and MDMCFG0 configuration register values for all channel layouts. Finally, different channel sets can be used by different groups of IoT device in the same environment to limit collisions between those groups - assuming that enough non-overlapping channels are available.

The "virtual" channel (the channel number presented to RIOT) will be used as index in [cc110x_chanmap_t::map](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t_1a8a84aac2bec120175998426f5f8f2dde), the value in there will give the corresponding "physical" channel number, or 255 if this virtual channel number is not available.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`map`](#structcc110x__chanmap__t_1a8a84aac2bec120175998426f5f8f2dde) | "Physical" channel numbers

## Members

#### `public uint8_t `[`map`](#structcc110x__chanmap__t_1a8a84aac2bec120175998426f5f8f2dde) 

"Physical" channel numbers

# struct `cc110x_params_t` 

Structure holding all parameter for driver initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`cc110x_patable_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__patable__t)` * `[`patable`](#structcc110x__params__t_1a735da7d3d77e678f6527831009552c1a) | Pointer to the PATABLE to use.
`public const `[`cc110x_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t)` * `[`config`](#structcc110x__params__t_1a4006cd0984743367ba7a77d0a06d42d2) | Pointer to the configuration of the base frequency, data rate and channel bandwidth; or `NULL` to keep the default.
`public const `[`cc110x_chanmap_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t)` * `[`channels`](#structcc110x__params__t_1a50700c2d1d8682388b2269e847ab407e) | Pointer to the default channel map.
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structcc110x__params__t_1a6bb85fb7b04c635fd31e4d0b8c935fca) | SPI bus connected to the device.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structcc110x__params__t_1a8114c6ef63b96667d30b9a5cc10672f0) | SPI clock to use (max 6.5 MHz)
`public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs`](#structcc110x__params__t_1a830ec0abb4a6e6821889bd430a72fb92) | GPIO pin connected to chip select.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gdo0`](#structcc110x__params__t_1aacd5491c340adf25f95040edec3f6660) | GPIO pin connected to GDO0.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gdo2`](#structcc110x__params__t_1a7f53dadb25ed1fa96081526c269fd749) | GPIO pin connected to GDO2.

## Members

#### `public const `[`cc110x_patable_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__patable__t)` * `[`patable`](#structcc110x__params__t_1a735da7d3d77e678f6527831009552c1a) 

Pointer to the PATABLE to use.

#### `public const `[`cc110x_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__config__t)` * `[`config`](#structcc110x__params__t_1a4006cd0984743367ba7a77d0a06d42d2) 

Pointer to the configuration of the base frequency, data rate and channel bandwidth; or `NULL` to keep the default.

#### `public const `[`cc110x_chanmap_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t)` * `[`channels`](#structcc110x__params__t_1a50700c2d1d8682388b2269e847ab407e) 

Pointer to the default channel map.

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structcc110x__params__t_1a6bb85fb7b04c635fd31e4d0b8c935fca) 

SPI bus connected to the device.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structcc110x__params__t_1a8114c6ef63b96667d30b9a5cc10672f0) 

SPI clock to use (max 6.5 MHz)

#### `public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs`](#structcc110x__params__t_1a830ec0abb4a6e6821889bd430a72fb92) 

GPIO pin connected to chip select.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gdo0`](#structcc110x__params__t_1aacd5491c340adf25f95040edec3f6660) 

GPIO pin connected to GDO0.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gdo2`](#structcc110x__params__t_1a7f53dadb25ed1fa96081526c269fd749) 

GPIO pin connected to GDO2.

# struct `cc110x_fs_calibration_t` 

Structure holding the calibration data of the frequency synthesizer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char `[`fscal1`](#structcc110x__fs__calibration__t_1a84a13fedf8dc7017e2a2218f0dd23cd6) | VCO capacitance calibration, which depends on the frequency and, thus, has to be stored for each channel.
`public char `[`fscal2`](#structcc110x__fs__calibration__t_1a202ac512148be568de45d199053bf9fc) | VCO current calibration, independent of channel.
`public char `[`fscal3`](#structcc110x__fs__calibration__t_1a96275ced1c67e7474476400a17133a10) | charge pump current calibration, independent of channel

## Members

#### `public char `[`fscal1`](#structcc110x__fs__calibration__t_1a84a13fedf8dc7017e2a2218f0dd23cd6) 

VCO capacitance calibration, which depends on the frequency and, thus, has to be stored for each channel.

#### `public char `[`fscal2`](#structcc110x__fs__calibration__t_1a202ac512148be568de45d199053bf9fc) 

VCO current calibration, independent of channel.

#### `public char `[`fscal3`](#structcc110x__fs__calibration__t_1a96275ced1c67e7474476400a17133a10) 

charge pump current calibration, independent of channel

# struct `cc110x_framebuf_t` 

Buffer to temporary store incoming/outgoing packet.

The CC1100/CC1101 transceiver's FIFO sadly is only 64 bytes in size. To support frames bigger than that, chunks of the frame have to be transferred between the MCU and the CC1100/CC1101 transceiver while the frame is in transit.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`len`](#structcc110x__framebuf__t_1a8b64c3e7ddd51ed3aa7837c39816532e) | Length of the frame in bytes.
`public uint8_t `[`data`](#structcc110x__framebuf__t_1a976f6073f7d9ff910c8a1dbdbf8d3752) | The payload data of the frame.
`public uint8_t `[`pos`](#structcc110x__framebuf__t_1a4a3e9c04c090a57cfe57e2c37e6cefa8) | Index of the next [cc110x_framebuf_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__framebuf__t_1a976f6073f7d9ff910c8a1dbdbf8d3752) element to transfer.

## Members

#### `public uint8_t `[`len`](#structcc110x__framebuf__t_1a8b64c3e7ddd51ed3aa7837c39816532e) 

Length of the frame in bytes.

#### `public uint8_t `[`data`](#structcc110x__framebuf__t_1a976f6073f7d9ff910c8a1dbdbf8d3752) 

The payload data of the frame.

#### `public uint8_t `[`pos`](#structcc110x__framebuf__t_1a4a3e9c04c090a57cfe57e2c37e6cefa8) 

Index of the next [cc110x_framebuf_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__framebuf__t_1a976f6073f7d9ff910c8a1dbdbf8d3752) element to transfer.

In RX mode: Index of the next [cc110x_framebuf_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__framebuf__t_1a976f6073f7d9ff910c8a1dbdbf8d3752) element to store data read from the RX-FIFO into.

In TX mode: Index of the next [cc110x_framebuf_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__framebuf__t_1a976f6073f7d9ff910c8a1dbdbf8d3752) element to write to the TX-FIFO.

# struct `cc110x_t` 

Device descriptor for CC1100/CC1101 transceivers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structcc110x__t_1a558b9029e0c53e4ec3f30e3f84218e5b) | RIOT's interface to this driver.
`public uint8_t `[`addr`](#structcc110x__t_1a8eb4c8abd204e6c3c59886bb51019096) | Layer 2 address of this device.
`public `[`cc110x_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga11315ca57b89a5c68af4c57d9f92a547)` `[`state`](#structcc110x__t_1a381e194902b171113480ed4ebe361655) | State of the transceiver.
`public `[`cc110x_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga1928e3385efe9717d9b4d256d4ee5ac9)` `[`tx_power`](#structcc110x__t_1a8356e4d5444e0ea1be7e28556b0e24ec) | TX power of the receiver.
`public uint8_t `[`channel`](#structcc110x__t_1a8cfeb729613c074c35fe7ea31fbacece) | Currently tuned (virtual) channel.
`public const `[`cc110x_chanmap_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t)` * `[`channels`](#structcc110x__t_1a5443f8eb2cad7603adaa76aa87d03545) | Pointer to the channel map to use.
`public `[`cc110x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__params__t)` `[`params`](#structcc110x__t_1af1e740a02688acf764c4615cd8553428) | Configuration of the driver.
`public `[`cc110x_framebuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__framebuf__t)` `[`buf`](#structcc110x__t_1acd59893e0c1ddd6793bf8c2caba64555) | Temporary frame buffer.
`public `[`cc1xxx_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc1xxx_1ga2305ccd7cecf7bc66e818690450fc563)` `[`rx_info`](#structcc110x__t_1a67e88116051852205c510adc2f170b3a) | RSSI and LQI of the last received frame.
`public `[`cc110x_fs_calibration_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__fs__calibration__t)` `[`fscal`](#structcc110x__t_1accf2931db1f8b3b8371769ab170c9a31) | Frequency synthesizer calibration data.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`isr_signal`](#structcc110x__t_1a256203a83483007c430f9abe72bcd5c6) | Use mutex to block during TX and unblock from ISR when ISR needs to be handled from thread-context.
`public uint8_t `[`rssi_offset`](#structcc110x__t_1ae6c23e7d8bd97fb75614189f5f7b1d52) | dBm to subtract from raw RSSI data

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structcc110x__t_1a558b9029e0c53e4ec3f30e3f84218e5b) 

RIOT's interface to this driver.

#### `public uint8_t `[`addr`](#structcc110x__t_1a8eb4c8abd204e6c3c59886bb51019096) 

Layer 2 address of this device.

#### `public `[`cc110x_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga11315ca57b89a5c68af4c57d9f92a547)` `[`state`](#structcc110x__t_1a381e194902b171113480ed4ebe361655) 

State of the transceiver.

#### `public `[`cc110x_tx_power_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x_1ga1928e3385efe9717d9b4d256d4ee5ac9)` `[`tx_power`](#structcc110x__t_1a8356e4d5444e0ea1be7e28556b0e24ec) 

TX power of the receiver.

#### `public uint8_t `[`channel`](#structcc110x__t_1a8cfeb729613c074c35fe7ea31fbacece) 

Currently tuned (virtual) channel.

#### `public const `[`cc110x_chanmap_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__chanmap__t)` * `[`channels`](#structcc110x__t_1a5443f8eb2cad7603adaa76aa87d03545) 

Pointer to the channel map to use.

#### `public `[`cc110x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__params__t)` `[`params`](#structcc110x__t_1af1e740a02688acf764c4615cd8553428) 

Configuration of the driver.

#### `public `[`cc110x_framebuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__framebuf__t)` `[`buf`](#structcc110x__t_1acd59893e0c1ddd6793bf8c2caba64555) 

Temporary frame buffer.

#### `public `[`cc1xxx_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc1xxx_1ga2305ccd7cecf7bc66e818690450fc563)` `[`rx_info`](#structcc110x__t_1a67e88116051852205c510adc2f170b3a) 

RSSI and LQI of the last received frame.

#### `public `[`cc110x_fs_calibration_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cc110x.md#structcc110x__fs__calibration__t)` `[`fscal`](#structcc110x__t_1accf2931db1f8b3b8371769ab170c9a31) 

Frequency synthesizer calibration data.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`isr_signal`](#structcc110x__t_1a256203a83483007c430f9abe72bcd5c6) 

Use mutex to block during TX and unblock from ISR when ISR needs to be handled from thread-context.

Blocking during TX within the driver prevents the upper layers from calling [netdev_driver_t::send](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) while already transmitting a frame.

#### `public uint8_t `[`rssi_offset`](#structcc110x__t_1ae6c23e7d8bd97fb75614189f5f7b1d52) 

dBm to subtract from raw RSSI data

