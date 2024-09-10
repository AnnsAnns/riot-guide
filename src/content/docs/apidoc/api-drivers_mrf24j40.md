---
title: api-drivers_mrf24j40.md
description: api-drivers_mrf24j40.md
---
# group `drivers_mrf24j40` 

This module contains drivers for radio devices in Microchip MRF24J40 series.

The driver is aimed to work with all devices of this series.

This driver doesn't handle the wake pin. As of now, it is required that the wake pin is high prior to the initialization (e.g. by connecting it to VCC in the board design). 

A PR extending [mrf24j40_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mrf24j40_1ga85a02a43d89b44cc45c213e5f511f900) to contain the wake pin and adding appropriate handling of the wake pin to the driver logic would be a welcome addition.

Default TX power is 0dBm.

TX power mapping:

* 0 -> -36dB

* 1 -> -35dB

* 2 -> -34dB

* 3 -> -33dB

* 4 -> -32dB

* 5 -> -31dB

* 6 -> -30dB

* 7 -> -30dB

* 8 -> -26dB

* 9 -> -25dB

* 10 -> -24dB

* 11 -> -23dB

* 12 -> -22dB

* 13 -> -21dB

* 14 -> -20dB

* 15 -> -20dB

* 16 -> -16dB

* 17 -> -15dB

* 18 -> -14dB

* 19 -> -13dB

* 20 -> -12dB

* 21 -> -11dB

* 22 -> -10dB

* 23 -> -10dB

* 24 -> -6dB

* 25 -> -5dB

* 26 -> -4dB

* 27 -> -3dB

* 28 -> -2dB

* 29 -> -1dB

* 30 -> -0dB

* 31 -> -0dB

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MRF24J40_TASK_TX_DONE`](#group__drivers__mrf24j40_1gaf1cf7f4253e339608cc84d27f3a07327)            | TX operation is done.
`define `[`MRF24J40_TASK_TX_READY`](#group__drivers__mrf24j40_1ga15570e22c86018e9fe748718b69a9367)            | TX operation results ready for processing.
`define `[`MRF24J40_TASK_RX_READY`](#group__drivers__mrf24j40_1gadcfaee277331c308c7474fe832eede2b)            | RX processing needed.
`define `[`MRF24J40_MAX_FRAME_RETRIES`](#group__drivers__mrf24j40_1ga84ab808cc5700e412a84c97fabe7d534)            | Number of frame retries (fixed)
`define `[`MRF24J40_MAX_MINBE`](#group__drivers__mrf24j40_1gaa834e5f930f726e6ad53b9ef6bbfc541)            | Maximum value of minimum exponential backoff.
`define `[`MRF24J40_MIN_TXPOWER`](#group__drivers__mrf24j40_1ga7d43f48e76a5d8dc863593d6589bf4e5)            | Minimum transmission power (dBm)
`define `[`MRF24J40_MAX_TXPOWER`](#group__drivers__mrf24j40_1gac6e7be6071967ef84ede5df812ff52f8)            | Maximum transmission power (dBm)
`public int `[`mrf24j40_reset`](#group__drivers__mrf24j40_1gaaead3f046c789ebeaa75d48145032bc2)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Trigger a hardware reset and configure radio with default values.
`public void `[`mrf24j40_set_addr_short`](#group__drivers__mrf24j40_1gaec173376dad8734c3dafd61812a43738)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint16_t addr)`            | Set the short address of the given device.
`public void `[`mrf24j40_set_addr_long`](#group__drivers__mrf24j40_1ga532f01019a7be05c7b04276ed3cdc0af)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,const uint8_t * addr)`            | Set the long address of the given device.
`public uint8_t `[`mrf24j40_get_chan`](#group__drivers__mrf24j40_1ga751b0453c8f398505141d8f6ba80940a)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Get the configured channel number of the given device.
`public void `[`mrf24j40_set_chan`](#group__drivers__mrf24j40_1gae41cdb300aa8fa8c814e48daf9307145)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t chan)`            | Set the channel number of the given device.
`public uint16_t `[`mrf24j40_get_pan`](#group__drivers__mrf24j40_1ga31df59ab4275cf91bd149211a71d93b1)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Get the configured PAN ID of the given device.
`public void `[`mrf24j40_set_pan`](#group__drivers__mrf24j40_1gab882597e281c5284096308c5a3304492)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint16_t pan)`            | Set the PAN ID of the given device.
`public void `[`mrf24j40_set_txpower`](#group__drivers__mrf24j40_1ga4a46456d0f6d2ad7e650339ae49a149f)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,int16_t txpower)`            | Set the transmission power of the given device [in dBm].
`public void `[`mrf24j40_set_csma_max_retries`](#group__drivers__mrf24j40_1ga0da995a94f7f38f677f288c9be8f5331)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,int8_t retries)`            | Set the maximum number of channel access attempts per frame (CSMA)
`public void `[`mrf24j40_set_csma_backoff_exp`](#group__drivers__mrf24j40_1ga67a57cb0f06873c41e43ef582911f514)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t min,uint8_t max)`            | Set the min and max backoff exponent for CSMA/CA.
`public void `[`mrf24j40_set_cca_threshold`](#group__drivers__mrf24j40_1ga858128e8ba01e9bb985463a9f007e05c)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,int8_t value)`            | Set the CCA threshold value.
`public void `[`mrf24j40_set_option`](#group__drivers__mrf24j40_1ga023db35ebc5374b8d88e684f74e79cfd)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint16_t option,bool state)`            | Enable or disable driver specific options.
`public void `[`mrf24j40_set_state`](#group__drivers__mrf24j40_1gab5ee971408a8b2d3dbd0ecf5db44dab1)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t state)`            | Set the state of the given device (trigger a state change)
`public void `[`mrf24j40_set_turbo`](#group__drivers__mrf24j40_1gad143fd43458223d4f9fc78fbe86c1405)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,bool enable)`            | Enable or disable proprietary Turbo Mode.
`public void `[`mrf24j40_sleep`](#group__drivers__mrf24j40_1ga2f3d1e5efaea54dc69419b4362227e93)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Put in sleep mode.
`public void `[`mrf24j40_wake_up`](#group__drivers__mrf24j40_1gac412f62517a91ed3b88d0fe4511b61b6)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Wake up from sleep mode.
`public void `[`mrf24j40_reset_state_machine`](#group__drivers__mrf24j40_1gaa6ab2d895608a3f7c89575394b8a76e7)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Reset the internal state machine to TRX_OFF mode.
`public void `[`mrf24j40_software_reset`](#group__drivers__mrf24j40_1ga93de08128de3421f1a65edf058316fbc)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Software Reset.
`public int8_t `[`mrf24j40_dbm_from_reg`](#group__drivers__mrf24j40_1ga80322d719b89cdc3317ef20d09e5b22b)`(uint8_t value)`            | Convert scalar from mrf24j40 RSSI to dBm.
`public void `[`mrf24j40_tx_prepare`](#group__drivers__mrf24j40_1ga81d51122b1b4e529ed56ae7c48b116ae)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Prepare for sending of data.
`public size_t `[`mrf24j40_tx_load`](#group__drivers__mrf24j40_1ga824897a444ed6b544edc8466f79b1326)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t * data,size_t len,size_t offset)`            | Load chunks of data into the transmit buffer of the given device.
`public void `[`mrf24j40_tx_exec`](#group__drivers__mrf24j40_1gab13d481a9e61f055b65380022af04c69)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)`            | Trigger sending of data previously loaded into transmit buffer.
`public void `[`mrf24j40_radio_irq_handler`](#group__drivers__mrf24j40_1ga91e9155cbf0988b5bead4227af1f7d3e)`(void * dev)`            | IRQ Handler for the MRF24J40 device.
`public int `[`mrf24j40_init`](#group__drivers__mrf24j40_1ga0ef9392aa73c283a605baed196f0f69f)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,const `[`mrf24j40_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mrf24j40_1ga85a02a43d89b44cc45c213e5f511f900)` * params,`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * ctx)`            | Initialize the given MRF24J40 device.
`struct `[`mrf24j40_params`](#structmrf24j40__params) | struct holding all params needed for device initialization
`struct `[`mrf24j40_t`](#structmrf24j40__t) | Device descriptor for MRF24J40 radio devices.

## Members

#### `define `[`MRF24J40_TASK_TX_DONE`](#group__drivers__mrf24j40_1gaf1cf7f4253e339608cc84d27f3a07327) 

TX operation is done.

#### `define `[`MRF24J40_TASK_TX_READY`](#group__drivers__mrf24j40_1ga15570e22c86018e9fe748718b69a9367) 

TX operation results ready for processing.

#### `define `[`MRF24J40_TASK_RX_READY`](#group__drivers__mrf24j40_1gadcfaee277331c308c7474fe832eede2b) 

RX processing needed.

#### `define `[`MRF24J40_MAX_FRAME_RETRIES`](#group__drivers__mrf24j40_1ga84ab808cc5700e412a84c97fabe7d534) 

Number of frame retries (fixed)

#### `define `[`MRF24J40_MAX_MINBE`](#group__drivers__mrf24j40_1gaa834e5f930f726e6ad53b9ef6bbfc541) 

Maximum value of minimum exponential backoff.

#### `define `[`MRF24J40_MIN_TXPOWER`](#group__drivers__mrf24j40_1ga7d43f48e76a5d8dc863593d6589bf4e5) 

Minimum transmission power (dBm)

#### `define `[`MRF24J40_MAX_TXPOWER`](#group__drivers__mrf24j40_1gac6e7be6071967ef84ede5df812ff52f8) 

Maximum transmission power (dBm)

#### `public int `[`mrf24j40_reset`](#group__drivers__mrf24j40_1gaaead3f046c789ebeaa75d48145032bc2)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Trigger a hardware reset and configure radio with default values.

#### Parameters
* `dev` device to reset

#### Returns
0 on success, error otherwise

#### `public void `[`mrf24j40_set_addr_short`](#group__drivers__mrf24j40_1gaec173376dad8734c3dafd61812a43738)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint16_t addr)` 

Set the short address of the given device.

#### Parameters
* `dev` device to write to 

* `addr` (2-byte) short address to set

#### `public void `[`mrf24j40_set_addr_long`](#group__drivers__mrf24j40_1ga532f01019a7be05c7b04276ed3cdc0af)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,const uint8_t * addr)` 

Set the long address of the given device.

#### Parameters
* `dev` device to write to 

* `addr` (8-byte) long address to set

#### `public uint8_t `[`mrf24j40_get_chan`](#group__drivers__mrf24j40_1ga751b0453c8f398505141d8f6ba80940a)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Get the configured channel number of the given device.

#### Parameters
* `dev` device to read from

#### Returns
the currently set channel number

#### `public void `[`mrf24j40_set_chan`](#group__drivers__mrf24j40_1gae41cdb300aa8fa8c814e48daf9307145)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t chan)` 

Set the channel number of the given device.

#### Parameters
* `dev` device to write to 

* `chan` channel number to set

#### `public uint16_t `[`mrf24j40_get_pan`](#group__drivers__mrf24j40_1ga31df59ab4275cf91bd149211a71d93b1)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Get the configured PAN ID of the given device.

#### Parameters
* `dev` device to read from

#### Returns
the currently set PAN ID

#### `public void `[`mrf24j40_set_pan`](#group__drivers__mrf24j40_1gab882597e281c5284096308c5a3304492)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint16_t pan)` 

Set the PAN ID of the given device.

#### Parameters
* `dev` device to write to 

* `pan` PAN ID to set

#### `public void `[`mrf24j40_set_txpower`](#group__drivers__mrf24j40_1ga4a46456d0f6d2ad7e650339ae49a149f)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,int16_t txpower)` 

Set the transmission power of the given device [in dBm].

If the device does not support the exact dBm value given, it will set a value as close as possible to the given value. If the given value is larger or lower then the maximal or minimal possible value, the min or max value is set, respectively.

#### Parameters
* `dev` device to write to 

* `txpower` transmission power in dBm

#### `public void `[`mrf24j40_set_csma_max_retries`](#group__drivers__mrf24j40_1ga0da995a94f7f38f677f288c9be8f5331)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,int8_t retries)` 

Set the maximum number of channel access attempts per frame (CSMA)

This setting specifies the number of attempts to access the channel to transmit a frame. If the channel is busy `retries` times, then frame transmission fails. Valid values: 0 to 5, -1 means CSMA disabled

#### Parameters
* `dev` device to write to 

* `retries` the maximum number of retries

#### `public void `[`mrf24j40_set_csma_backoff_exp`](#group__drivers__mrf24j40_1ga67a57cb0f06873c41e43ef582911f514)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t min,uint8_t max)` 

Set the min and max backoff exponent for CSMA/CA.

* Maximum BE: 0 - 8

* Minimum BE: 0 - [max]

#### Parameters
* `dev` device to write to 

* `min` the minimum BE 

* `max` the maximum BE

#### `public void `[`mrf24j40_set_cca_threshold`](#group__drivers__mrf24j40_1ga858128e8ba01e9bb985463a9f007e05c)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,int8_t value)` 

Set the CCA threshold value.

#### Parameters
* `dev` device to write to 

* `value` the new CCA threshold value

#### `public void `[`mrf24j40_set_option`](#group__drivers__mrf24j40_1ga023db35ebc5374b8d88e684f74e79cfd)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint16_t option,bool state)` 

Enable or disable driver specific options.

#### Parameters
* `dev` device to set/clear option flag for 

* `option` option to enable/disable 

* `state` true for enable, false for disable

#### `public void `[`mrf24j40_set_state`](#group__drivers__mrf24j40_1gab5ee971408a8b2d3dbd0ecf5db44dab1)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t state)` 

Set the state of the given device (trigger a state change)

#### Parameters
* `dev` device to change state of 

* `state` the targeted new state

#### `public void `[`mrf24j40_set_turbo`](#group__drivers__mrf24j40_1gad143fd43458223d4f9fc78fbe86c1405)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,bool enable)` 

Enable or disable proprietary Turbo Mode.

Turbo mode is only compatible with other mrf24j40 chips.

turbo off: 250 kbit/s (IEEE mode) turbo on: 625 kbit/s

#### Parameters
* `dev` device to change state of 

* `enable` turbo mode control

#### `public void `[`mrf24j40_sleep`](#group__drivers__mrf24j40_1ga2f3d1e5efaea54dc69419b4362227e93)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Put in sleep mode.

#### Parameters
* `dev` device to put to sleep

#### `public void `[`mrf24j40_wake_up`](#group__drivers__mrf24j40_1gac412f62517a91ed3b88d0fe4511b61b6)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Wake up from sleep mode.

#### Parameters
* `dev` device to eventually wake up

#### `public void `[`mrf24j40_reset_state_machine`](#group__drivers__mrf24j40_1gaa6ab2d895608a3f7c89575394b8a76e7)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Reset the internal state machine to TRX_OFF mode.

This will force a transition to TRX_OFF regardless of whether the transceiver is currently busy sending or receiving. This function is used to get back to a known state during driver initialization.

#### Parameters
* `dev` device to operate on

#### `public void `[`mrf24j40_software_reset`](#group__drivers__mrf24j40_1ga93de08128de3421f1a65edf058316fbc)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Software Reset.

This will force the power management circuitry, the baseband circuitry and the MAC circuitry to be reset

#### Parameters
* `dev` device to operate on

#### `public int8_t `[`mrf24j40_dbm_from_reg`](#group__drivers__mrf24j40_1ga80322d719b89cdc3317ef20d09e5b22b)`(uint8_t value)` 

Convert scalar from mrf24j40 RSSI to dBm.

#### Parameters
* `value` value to convert to dBm 

#### Returns
converted value in dBm

#### `public void `[`mrf24j40_tx_prepare`](#group__drivers__mrf24j40_1ga81d51122b1b4e529ed56ae7c48b116ae)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Prepare for sending of data.

This function puts the given device into the TX state, so no receiving of data is possible after it was called.

#### Parameters
* `dev` device to prepare for sending

#### `public size_t `[`mrf24j40_tx_load`](#group__drivers__mrf24j40_1ga824897a444ed6b544edc8466f79b1326)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,uint8_t * data,size_t len,size_t offset)` 

Load chunks of data into the transmit buffer of the given device.

#### Parameters
* `dev` device to write data to 

* `data` buffer containing the data to load 

* `len` number of bytes in `buffer`

* `offset` offset used when writing data to internal buffer

#### Returns
offset + number of bytes written

#### `public void `[`mrf24j40_tx_exec`](#group__drivers__mrf24j40_1gab13d481a9e61f055b65380022af04c69)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev)` 

Trigger sending of data previously loaded into transmit buffer.

#### Parameters
* `dev` device to trigger

#### `public void `[`mrf24j40_radio_irq_handler`](#group__drivers__mrf24j40_1ga91e9155cbf0988b5bead4227af1f7d3e)`(void * dev)` 

IRQ Handler for the MRF24J40 device.

#### Parameters
* `dev` pointer to the IEEE 802.15.4 Radio HAL descriptor

#### `public int `[`mrf24j40_init`](#group__drivers__mrf24j40_1ga0ef9392aa73c283a605baed196f0f69f)`(`[`mrf24j40_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mrf24j40.md#structmrf24j40__t)` * dev,const `[`mrf24j40_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mrf24j40_1ga85a02a43d89b44cc45c213e5f511f900)` * params,`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * ctx)` 

Initialize the given MRF24J40 device.

#### Parameters
* `dev` device descriptor 

* `params` parameters for device initialization 

* `hal` pointer to IEEE 802.15.4 Radio HAL descriptor 

* `cb` ISR callback 

* `ctx` context pointer handed to isr

#### Returns
0 on success 

#### Returns
<0 on error

# struct `mrf24j40_params` 

struct holding all params needed for device initialization

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structmrf24j40__params_1a64b3a95e750885910a06d8c7652445c8) | SPI bus the device is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structmrf24j40__params_1aafd68a29a6e4e5545ccc1c9d859fa5a0) | SPI speed to use.
`public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structmrf24j40__params_1a7bf31ed518e5885748973a4855e52f7d) | GPIO pin connected to chip select.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structmrf24j40__params_1adc443c0afb19f0767761aebed15f8ddd) | GPIO pin connected to the interrupt pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structmrf24j40__params_1af3d27be658ce5422e370256a717b9ce3) | GPIO pin connected to the reset pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structmrf24j40__params_1a64b3a95e750885910a06d8c7652445c8) 

SPI bus the device is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structmrf24j40__params_1aafd68a29a6e4e5545ccc1c9d859fa5a0) 

SPI speed to use.

#### `public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structmrf24j40__params_1a7bf31ed518e5885748973a4855e52f7d) 

GPIO pin connected to chip select.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structmrf24j40__params_1adc443c0afb19f0767761aebed15f8ddd) 

GPIO pin connected to the interrupt pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structmrf24j40__params_1af3d27be658ce5422e370256a717b9ce3) 

GPIO pin connected to the reset pin.

# struct `mrf24j40_t` 

Device descriptor for MRF24J40 radio devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`mrf24j40_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mrf24j40_1ga85a02a43d89b44cc45c213e5f511f900)` * `[`params`](#structmrf24j40__t_1a72478edfb14739d380e545c251a4be35) | parameters for initialization
`public uint8_t `[`fcf_low`](#structmrf24j40__t_1af0743350725c76c4206474a1aed426b6) | Low 8 FCF bits of the current TX frame.
`public uint8_t `[`pending`](#structmrf24j40__t_1affaccd70781367026305ce6ec34c752a) | Flags for pending tasks.
`public bool `[`tx_pending`](#structmrf24j40__t_1ae0616dc69affc599b811b42afa02ec34) | Whether a transmission is pending or not.

## Members

#### `public const `[`mrf24j40_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mrf24j40_1ga85a02a43d89b44cc45c213e5f511f900)` * `[`params`](#structmrf24j40__t_1a72478edfb14739d380e545c251a4be35) 

parameters for initialization

#### `public uint8_t `[`fcf_low`](#structmrf24j40__t_1af0743350725c76c4206474a1aed426b6) 

Low 8 FCF bits of the current TX frame.

#### `public uint8_t `[`pending`](#structmrf24j40__t_1affaccd70781367026305ce6ec34c752a) 

Flags for pending tasks.

#### `public bool `[`tx_pending`](#structmrf24j40__t_1ae0616dc69affc599b811b42afa02ec34) 

Whether a transmission is pending or not.

