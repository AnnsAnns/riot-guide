---
title: api-drivers_sx127x.md
description: api-drivers_sx127x.md
---
# group `drivers_sx127x` 

Driver for Semtech SX1272 and SX1276 radios.

This module contains the driver for radio devices of the Semtech SX127x series (SX1272 and SX1276). Only LoRa long range modem is supported at the moment.

SX127x modules are designed to be used in the ISM radio frequency (RF) band. This RF band depends on different regional regulations worldwide. Be careful to configure the device to use a RF frequency allowed in your region. Here is the list of allowed frequencies for your region (see [LoRaWAN regional parameters document available online](https://www.lora-alliance.org/for-developers)):

* Europe has 2 allowed bands (ETSI):

* EU863-870

* EU433 (from 433.175MHZ to 434.665MHZ exactly)

* US is US902-928

* China has 2 allowed bands:

* CN779-787 (from 779.5MHz to 786.5MHz exactly)

* CN470-510 (from 470.3MHz to 509.7MHz exactly)

* Australia is AU915-928

* South asia, AS923:

* Bruneï [923-925 MHz]

* Cambodia [923-925 MHz]

* Hong Kong [920-925 MHz]

* Indonesia [923-925 MHz]

* Japan [920-928 MHz]

* Laos [923-925 MHz]

* New Zealand [915-928 MHz]

* Singapore [920-925 MHz]

* Taiwan [922-928 MHz]

* Thailand [920-925 MHz]

* Vietnam [920-925 MHz]

* South Korea: KR920-923 (from 920.9MHz to 923.3MHz exactly)

For more information on Semtech SX1272 and SX1276 modules see:

* [SX1272/73 datasheet](https://semtech.my.salesforce.com/sfc/p/E0000000JelG/a/440000001NCE/v_VBhk1IolDgxwwnOpcS_vTFxPfSEPQbuneK3mWsXlU)

* [SX1276/77/78/79 datasheet](https://semtech.my.salesforce.com/sfc/p/E0000000JelG/a/2R0000001OKs/Bs97dmPXeatnbdoJNVMIDaKDlQz8q1N_gxDcgqi7g2o)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@268`](#group__drivers__sx127x_1ga18efc29f05f292310db38a8c7e81dcda)            | SX127X initialization result.
`enum `[`@269`](#group__drivers__sx127x_1gad86178b9def692404403c1e6ef728ced)            | Radio driver supported modems.
`enum `[`@270`](#group__drivers__sx127x_1gabd4fc2111b94dec34e056f8ef38c38e5)            | Radio driver internal state machine states definition.
`enum `[`@271`](#group__drivers__sx127x_1gad63d52f2a7873cd40a13c4ce18552e27)            | Event types.
`enum `[`@272`](#group__drivers__sx127x_1ga5fb54519fb8dc889cce6aeafd34ab647)            | Power amplifier modes.
`public void `[`sx127x_setup`](#group__drivers__sx127x_1ga3ce82b52f5d8307b62988ddcd6288f9b)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,const `[`sx127x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__params__t)` * params,uint8_t index)`            | Setup the SX127X.
`public int `[`sx127x_reset`](#group__drivers__sx127x_1gadd07935143494694bf8ac1dd72045787)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Resets the SX127X.
`public int `[`sx127x_init`](#group__drivers__sx127x_1ga45f749d0fbc4d504feb35659061fa02c)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Initializes the transceiver.
`public void `[`sx127x_init_radio_settings`](#group__drivers__sx127x_1gafc5ce0785004f2c3cce13e77869d379e)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Initialize radio settings with default values.
`public uint32_t `[`sx127x_random`](#group__drivers__sx127x_1ga364791b9c18784a6e6889440a341d68c)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Generates 32 bits random value based on the RSSI readings.
`public void `[`sx127x_start_cad`](#group__drivers__sx127x_1ga965ad403786573f82f57022c7f6ba856)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Start a channel activity detection.
`public bool `[`sx127x_is_channel_free`](#group__drivers__sx127x_1ga13228b9d2316962f642e4c3a7c3d3572)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t freq,int16_t rssi_threshold)`            | Checks that channel is free with specified RSSI threshold.
`public int16_t `[`sx127x_read_rssi`](#group__drivers__sx127x_1ga67d0a274e3258ea77317bf70a08b72e4)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Reads the current RSSI value.
`public uint8_t `[`sx127x_get_state`](#group__drivers__sx127x_1ga970e6940195f08ada4a82e6db1d813a6)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets current state of transceiver.
`public void `[`sx127x_set_state`](#group__drivers__sx127x_1gaa4b0a7b1754e0c19a87fd243958299f7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t state)`            | Sets current state of transceiver.
`public void `[`sx127x_set_modem`](#group__drivers__sx127x_1ga85eccbdab635723805f8a4fc343e66b7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t modem)`            | Configures the radio with the given modem.
`public uint8_t `[`sx127x_get_syncword`](#group__drivers__sx127x_1gad433c17ee0ce4641f89b133a47f74683)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the synchronization word.
`public void `[`sx127x_set_syncword`](#group__drivers__sx127x_1gab44f84bfa3d7272c4a0f86b391b9acdf)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t syncword)`            | Sets the synchronization word.
`public uint32_t `[`sx127x_get_channel`](#group__drivers__sx127x_1gabb0a25f0d0c5699f80e93ba67cd82944)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the channel RF frequency.
`public void `[`sx127x_set_channel`](#group__drivers__sx127x_1ga5df4d694914e0fe575c7a11a25f787be)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t freq)`            | Sets the channel RF frequency.
`public uint32_t `[`sx127x_get_time_on_air`](#group__drivers__sx127x_1ga4d152119c0f3adf16d58afbcb9707b41)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t pkt_len)`            | Computes the packet time on air in milliseconds.
`public void `[`sx127x_set_sleep`](#group__drivers__sx127x_1ga2a25fcded58ade68a5f698e7935d9efe)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Sets the radio in sleep mode.
`public void `[`sx127x_set_standby`](#group__drivers__sx127x_1gae1c3729874c5c9be8811b581d78eeb50)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Sets the radio in stand-by mode.
`public void `[`sx127x_set_rx`](#group__drivers__sx127x_1ga043fee1354fc53f8566d8d0c36498683)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Sets the radio in reception mode.
`public void `[`sx127x_set_tx`](#group__drivers__sx127x_1gab4c03c229891e7da6f0a86e19fe1dbd2)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Sets the radio in transmission mode.
`public uint8_t `[`sx127x_get_max_payload_len`](#group__drivers__sx127x_1ga29c8e5346d8f04698a60058349d75b0e)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the maximum payload length.
`public void `[`sx127x_set_max_payload_len`](#group__drivers__sx127x_1ga86bed3f2b554372139ec23a5db59c5a7)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t maxlen)`            | Sets the maximum payload length.
`public uint8_t `[`sx127x_get_op_mode`](#group__drivers__sx127x_1ga0ecaa2c92b624f31cccf45a819a8dbc7)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X operating mode.
`public void `[`sx127x_set_op_mode`](#group__drivers__sx127x_1gaa17ed3631833d7493c6ef4220dbd7d44)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t op_mode)`            | Sets the SX127X operating mode.
`public uint8_t `[`sx127x_get_bandwidth`](#group__drivers__sx127x_1gac531e9d2fadd2b460f81df0476416e08)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X bandwidth.
`public void `[`sx127x_set_bandwidth`](#group__drivers__sx127x_1ga2bcfe83c6be1b881076848c3f74b82f7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t bandwidth)`            | Sets the SX127X bandwidth.
`public uint8_t `[`sx127x_get_spreading_factor`](#group__drivers__sx127x_1gaf14f7bea1913a4297a158858c7368315)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X LoRa spreading factor.
`public void `[`sx127x_set_spreading_factor`](#group__drivers__sx127x_1ga914d1b76403ef35846d15397a256b4b9)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t sf)`            | Sets the SX127X LoRa spreading factor.
`public uint8_t `[`sx127x_get_coding_rate`](#group__drivers__sx127x_1ga04abdff6e899085024d9502a30fc58b8)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X LoRa coding rate.
`public void `[`sx127x_set_coding_rate`](#group__drivers__sx127x_1ga2c59a9d58e8e9649119671184e5d48bd)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t coderate)`            | Sets the SX127X LoRa coding rate.
`public bool `[`sx127x_get_rx_single`](#group__drivers__sx127x_1gab14f0b6479bf81d602113c702a765830)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Checks if the SX127X LoRa RX single mode is enabled/disabled.
`public void `[`sx127x_set_rx_single`](#group__drivers__sx127x_1gaf9e0bc0d583ff9a594d779bb3142cb9f)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool single)`            | Enable/disable the SX127X LoRa RX single mode.
`public bool `[`sx127x_get_crc`](#group__drivers__sx127x_1gafe12bc9ce3483e4083e0661cefa4f619)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Checks if the SX127X CRC verification mode is enabled.
`public void `[`sx127x_set_crc`](#group__drivers__sx127x_1ga4de9bd505caf9844f39e050091dd39a7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool crc)`            | Enable/Disable the SX127X CRC verification mode.
`public uint8_t `[`sx127x_get_hop_period`](#group__drivers__sx127x_1ga7f7fe67fdf93ed60af98a7ff31ca3238)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X frequency hopping period.
`public void `[`sx127x_set_hop_period`](#group__drivers__sx127x_1ga94bc1a56ca58375b2b1257a1f35a16ca)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t hop_period)`            | Sets the SX127X frequency hopping period.
`public bool `[`sx127x_get_fixed_header_len_mode`](#group__drivers__sx127x_1gadbcfc1469f8d7a726587f5e95f8afe15)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X LoRa fixed header length mode.
`public void `[`sx127x_set_fixed_header_len_mode`](#group__drivers__sx127x_1ga96f41bdafa2185acf034f30f3610963d)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool mode)`            | Sets the SX127X to fixed header length mode (explicit mode)
`public uint8_t `[`sx127x_get_payload_length`](#group__drivers__sx127x_1gab98bfe46a2fad05e5ff2bbeb5724160b)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X payload length.
`public void `[`sx127x_set_payload_length`](#group__drivers__sx127x_1ga3588af3e06e743e6fd9890a0463a61ac)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t len)`            | Sets the SX127X payload length.
`public uint8_t `[`sx127x_get_tx_power`](#group__drivers__sx127x_1ga39cf41f87a17182fe8e52380630e4c2e)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X TX radio power.
`public void `[`sx127x_set_tx_power`](#group__drivers__sx127x_1ga2697a95d69ec4b5d8df5dcee69bdad82)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,int8_t power)`            | Sets the SX127X transmission power.
`public uint16_t `[`sx127x_get_preamble_length`](#group__drivers__sx127x_1ga0ed16445f25549d3f91d3487458c20e6)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Gets the SX127X preamble length.
`public void `[`sx127x_set_preamble_length`](#group__drivers__sx127x_1gacea6f56fd5943b207554431c12c36dde)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint16_t preamble)`            | Sets the SX127X LoRa preamble length.
`public void `[`sx127x_set_symbol_timeout`](#group__drivers__sx127x_1gab950ef661f08a3f935450a6912cc51bf)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint16_t timeout)`            | Sets the SX127X LoRa symbol timeout.
`public void `[`sx127x_set_rx_timeout`](#group__drivers__sx127x_1ga4901c8967c79dbb32ee7c033f429d889)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t timeout)`            | Sets the SX127X RX timeout.
`public void `[`sx127x_set_tx_timeout`](#group__drivers__sx127x_1gaf919fb59e3219177a54a5e11721c95b6)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t timeout)`            | Sets the SX127X TX timeout.
`public bool `[`sx127x_get_iq_invert`](#group__drivers__sx127x_1ga24116eaed95b1386e67454b2cca17165)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)`            | Checks if the SX127X LoRa inverted IQ mode is enabled/disabled.
`public void `[`sx127x_set_iq_invert`](#group__drivers__sx127x_1ga3b728bcd65bf0375022d3d5aab107a01)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool iq_invert)`            | Enable/disable the SX127X LoRa IQ inverted mode.
`public void `[`sx127x_set_freq_hop`](#group__drivers__sx127x_1gafd2627993cb3a9f4f91f5affecb90bec)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool freq_hop_on)`            | Sets the SX127X LoRa frequency hopping mode.
`struct `[`sx127x_lora_settings_t`](#structsx127x__lora__settings__t) | LoRa configuration structure.
`struct `[`sx127x_radio_settings_t`](#structsx127x__radio__settings__t) | Radio settings.
`struct `[`sx127x_internal_t`](#structsx127x__internal__t) | SX127X internal data.
`struct `[`sx127x_params_t`](#structsx127x__params__t) | SX127X hardware and global parameters.
`struct `[`sx127x_t`](#structsx127x__t) | SX127X device descriptor.

## Members

#### `enum `[`@268`](#group__drivers__sx127x_1ga18efc29f05f292310db38a8c7e81dcda) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SX127X_INIT_OK            | Initialization was successful.
SX127X_ERR_SPI            | Failed to initialize SPI bus or CS line.
SX127X_ERR_GPIOS            | Failed to initialize GPIOs.
SX127X_ERR_NODEV            | No valid device version found.

SX127X initialization result.

#### `enum `[`@269`](#group__drivers__sx127x_1gad86178b9def692404403c1e6ef728ced) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SX127X_MODEM_FSK            | FSK modem driver.
SX127X_MODEM_LORA            | LoRa modem driver.

Radio driver supported modems.

#### `enum `[`@270`](#group__drivers__sx127x_1gabd4fc2111b94dec34e056f8ef38c38e5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SX127X_RF_IDLE            | Idle state.
SX127X_RF_RX_RUNNING            | Sending state.
SX127X_RF_TX_RUNNING            | Receiving state.
SX127X_RF_CAD            | Channel activity detection state.

Radio driver internal state machine states definition.

#### `enum `[`@271`](#group__drivers__sx127x_1gad63d52f2a7873cd40a13c4ce18552e27) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SX127X_RX_DONE            | Receiving complete.
SX127X_TX_DONE            | Sending complete.
SX127X_RX_TIMEOUT            | Receiving timeout.
SX127X_TX_TIMEOUT            | Sending timeout.
SX127X_RX_ERROR_CRC            | Receiving CRC error.
SX127X_FHSS_CHANGE_CHANNEL            | Channel change.
SX127X_CAD_DONE            | Channel activity detection complete.

Event types.

#### `enum `[`@272`](#group__drivers__sx127x_1ga5fb54519fb8dc889cce6aeafd34ab647) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SX127X_PA_RFO            | RFO HF or RFO LF.
SX127X_PA_BOOST            | Power amplifier boost (high power)

Power amplifier modes.

Default value is SX127X_PA_RFO.

The power amplifier mode depends on the module hardware configuration.

#### `public void `[`sx127x_setup`](#group__drivers__sx127x_1ga3ce82b52f5d8307b62988ddcd6288f9b)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,const `[`sx127x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__params__t)` * params,uint8_t index)` 

Setup the SX127X.

#### Parameters
* `dev` Device descriptor 

* `params` Parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### `public int `[`sx127x_reset`](#group__drivers__sx127x_1gadd07935143494694bf8ac1dd72045787)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Resets the SX127X.

#### Parameters
* `dev` The sx127x device descriptor

#### `public int `[`sx127x_init`](#group__drivers__sx127x_1ga45f749d0fbc4d504feb35659061fa02c)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Initializes the transceiver.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
result of initialization

#### `public void `[`sx127x_init_radio_settings`](#group__drivers__sx127x_1gafc5ce0785004f2c3cce13e77869d379e)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Initialize radio settings with default values.

#### Parameters
* `dev` The sx127x device pointer

#### `public uint32_t `[`sx127x_random`](#group__drivers__sx127x_1ga364791b9c18784a6e6889440a341d68c)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Generates 32 bits random value based on the RSSI readings.

> This function sets the radio in LoRa mode and disables all interrupts from it. After calling this function either sx127x_set_rx_config or sx127x_set_tx_config functions must be called.

#### Parameters
* `dev` The sx127x device structure pointer

#### Returns
random 32 bits value

#### `public void `[`sx127x_start_cad`](#group__drivers__sx127x_1ga965ad403786573f82f57022c7f6ba856)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Start a channel activity detection.

#### Parameters
* `dev` The sx127x device descriptor

#### `public bool `[`sx127x_is_channel_free`](#group__drivers__sx127x_1ga13228b9d2316962f642e4c3a7c3d3572)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t freq,int16_t rssi_threshold)` 

Checks that channel is free with specified RSSI threshold.

#### Parameters
* `dev` The sx127x device structure pointer 

* `freq` channel RF frequency 

* `rssi_threshold` RSSI threshold

#### Returns
true if channel is free, false otherwise

#### `public int16_t `[`sx127x_read_rssi`](#group__drivers__sx127x_1ga67d0a274e3258ea77317bf70a08b72e4)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Reads the current RSSI value.

#### Parameters
* `dev` The sx127x device structure pointer

#### Returns
the current value of RSSI (in dBm)

#### `public uint8_t `[`sx127x_get_state`](#group__drivers__sx127x_1ga970e6940195f08ada4a82e6db1d813a6)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets current state of transceiver.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
radio state [RF_IDLE, RF_RX_RUNNING, RF_TX_RUNNING]

#### `public void `[`sx127x_set_state`](#group__drivers__sx127x_1gaa4b0a7b1754e0c19a87fd243958299f7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t state)` 

Sets current state of transceiver.

#### Parameters
* `dev` The sx127x device descriptor 

* `state` The new radio state

#### Returns
radio state [RF_IDLE, RF_RX_RUNNING, RF_TX_RUNNING]

#### `public void `[`sx127x_set_modem`](#group__drivers__sx127x_1ga85eccbdab635723805f8a4fc343e66b7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t modem)` 

Configures the radio with the given modem.

#### Parameters
* `dev` The sx127x device descriptor 

* `modem` Modem to be used [0: FSK, 1: LoRa]

#### `public uint8_t `[`sx127x_get_syncword`](#group__drivers__sx127x_1gad433c17ee0ce4641f89b133a47f74683)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the synchronization word.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
The synchronization word

#### `public void `[`sx127x_set_syncword`](#group__drivers__sx127x_1gab44f84bfa3d7272c4a0f86b391b9acdf)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t syncword)` 

Sets the synchronization word.

#### Parameters
* `dev` The sx127x device descriptor 

* `syncword` The synchronization word

#### `public uint32_t `[`sx127x_get_channel`](#group__drivers__sx127x_1gabb0a25f0d0c5699f80e93ba67cd82944)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the channel RF frequency.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
The channel frequency

#### `public void `[`sx127x_set_channel`](#group__drivers__sx127x_1ga5df4d694914e0fe575c7a11a25f787be)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t freq)` 

Sets the channel RF frequency.

#### Parameters
* `dev` The sx127x device descriptor 

* `freq` Channel RF frequency

#### `public uint32_t `[`sx127x_get_time_on_air`](#group__drivers__sx127x_1ga4d152119c0f3adf16d58afbcb9707b41)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t pkt_len)` 

Computes the packet time on air in milliseconds.

Can only be called if sx127x_init_radio_settings has already been called.

#### Parameters
* `dev` The sx127x device descriptor 

* `pkt_len` The received packet payload length

#### Returns
computed air time (ms) for the given packet payload length

#### `public void `[`sx127x_set_sleep`](#group__drivers__sx127x_1ga2a25fcded58ade68a5f698e7935d9efe)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Sets the radio in sleep mode.

#### Parameters
* `dev` The sx127x device descriptor

#### `public void `[`sx127x_set_standby`](#group__drivers__sx127x_1gae1c3729874c5c9be8811b581d78eeb50)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Sets the radio in stand-by mode.

#### Parameters
* `dev` The sx127x device descriptor

#### `public void `[`sx127x_set_rx`](#group__drivers__sx127x_1ga043fee1354fc53f8566d8d0c36498683)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Sets the radio in reception mode.

#### Parameters
* `dev` The sx127x device descriptor

#### `public void `[`sx127x_set_tx`](#group__drivers__sx127x_1gab4c03c229891e7da6f0a86e19fe1dbd2)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Sets the radio in transmission mode.

#### Parameters
* `dev` The sx127x device descriptor

#### `public uint8_t `[`sx127x_get_max_payload_len`](#group__drivers__sx127x_1ga29c8e5346d8f04698a60058349d75b0e)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the maximum payload length.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
The maximum payload length

#### `public void `[`sx127x_set_max_payload_len`](#group__drivers__sx127x_1ga86bed3f2b554372139ec23a5db59c5a7)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t maxlen)` 

Sets the maximum payload length.

#### Parameters
* `dev` The sx127x device descriptor 

* `maxlen` Maximum payload length in bytes

#### `public uint8_t `[`sx127x_get_op_mode`](#group__drivers__sx127x_1ga0ecaa2c92b624f31cccf45a819a8dbc7)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X operating mode.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
The actual operating mode

#### `public void `[`sx127x_set_op_mode`](#group__drivers__sx127x_1gaa17ed3631833d7493c6ef4220dbd7d44)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t op_mode)` 

Sets the SX127X operating mode.

#### Parameters
* `dev` The sx127x device descriptor 

* `op_mode` The new operating mode

#### `public uint8_t `[`sx127x_get_bandwidth`](#group__drivers__sx127x_1gac531e9d2fadd2b460f81df0476416e08)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X bandwidth.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the bandwidth

#### `public void `[`sx127x_set_bandwidth`](#group__drivers__sx127x_1ga2bcfe83c6be1b881076848c3f74b82f7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t bandwidth)` 

Sets the SX127X bandwidth.

#### Parameters
* `dev` The sx127x device descriptor 

* `bandwidth` The new bandwidth

#### `public uint8_t `[`sx127x_get_spreading_factor`](#group__drivers__sx127x_1gaf14f7bea1913a4297a158858c7368315)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X LoRa spreading factor.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the spreading factor

#### `public void `[`sx127x_set_spreading_factor`](#group__drivers__sx127x_1ga914d1b76403ef35846d15397a256b4b9)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t sf)` 

Sets the SX127X LoRa spreading factor.

#### Parameters
* `dev` The sx127x device descriptor 

* `sf` The spreading factor

#### `public uint8_t `[`sx127x_get_coding_rate`](#group__drivers__sx127x_1ga04abdff6e899085024d9502a30fc58b8)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X LoRa coding rate.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the current LoRa coding rate

#### `public void `[`sx127x_set_coding_rate`](#group__drivers__sx127x_1ga2c59a9d58e8e9649119671184e5d48bd)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t coderate)` 

Sets the SX127X LoRa coding rate.

#### Parameters
* `dev` The sx127x device descriptor 

* `coderate` The LoRa coding rate

#### `public bool `[`sx127x_get_rx_single`](#group__drivers__sx127x_1gab14f0b6479bf81d602113c702a765830)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Checks if the SX127X LoRa RX single mode is enabled/disabled.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the LoRa single mode

#### `public void `[`sx127x_set_rx_single`](#group__drivers__sx127x_1gaf9e0bc0d583ff9a594d779bb3142cb9f)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool single)` 

Enable/disable the SX127X LoRa RX single mode.

#### Parameters
* `dev` The sx127x device descriptor 

* `single` The LoRa RX single mode

#### `public bool `[`sx127x_get_crc`](#group__drivers__sx127x_1gafe12bc9ce3483e4083e0661cefa4f619)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Checks if the SX127X CRC verification mode is enabled.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the LoRa single mode

#### `public void `[`sx127x_set_crc`](#group__drivers__sx127x_1ga4de9bd505caf9844f39e050091dd39a7)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool crc)` 

Enable/Disable the SX127X CRC verification mode.

#### Parameters
* `dev` The sx127x device descriptor 

* `crc` The CRC check mode

#### `public uint8_t `[`sx127x_get_hop_period`](#group__drivers__sx127x_1ga7f7fe67fdf93ed60af98a7ff31ca3238)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X frequency hopping period.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the frequency hopping period

#### `public void `[`sx127x_set_hop_period`](#group__drivers__sx127x_1ga94bc1a56ca58375b2b1257a1f35a16ca)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t hop_period)` 

Sets the SX127X frequency hopping period.

#### Parameters
* `dev` The sx127x device descriptor 

* `hop_period` The frequency hopping period

#### `public bool `[`sx127x_get_fixed_header_len_mode`](#group__drivers__sx127x_1gadbcfc1469f8d7a726587f5e95f8afe15)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X LoRa fixed header length mode.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the LoRa implicit mode

#### `public void `[`sx127x_set_fixed_header_len_mode`](#group__drivers__sx127x_1ga96f41bdafa2185acf034f30f3610963d)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool mode)` 

Sets the SX127X to fixed header length mode (explicit mode)

#### Parameters
* `dev` The sx127x device descriptor 

* `mode` The header mode

#### `public uint8_t `[`sx127x_get_payload_length`](#group__drivers__sx127x_1gab98bfe46a2fad05e5ff2bbeb5724160b)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X payload length.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the payload length

#### `public void `[`sx127x_set_payload_length`](#group__drivers__sx127x_1ga3588af3e06e743e6fd9890a0463a61ac)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint8_t len)` 

Sets the SX127X payload length.

#### Parameters
* `dev` The sx127x device descriptor 

* `len` The payload len

#### `public uint8_t `[`sx127x_get_tx_power`](#group__drivers__sx127x_1ga39cf41f87a17182fe8e52380630e4c2e)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X TX radio power.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the radio power

#### `public void `[`sx127x_set_tx_power`](#group__drivers__sx127x_1ga2697a95d69ec4b5d8df5dcee69bdad82)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,int8_t power)` 

Sets the SX127X transmission power.

#### Parameters
* `dev` The sx127x device descriptor 

* `power` The TX power

#### `public uint16_t `[`sx127x_get_preamble_length`](#group__drivers__sx127x_1ga0ed16445f25549d3f91d3487458c20e6)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Gets the SX127X preamble length.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the preamble length

#### `public void `[`sx127x_set_preamble_length`](#group__drivers__sx127x_1gacea6f56fd5943b207554431c12c36dde)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint16_t preamble)` 

Sets the SX127X LoRa preamble length.

#### Parameters
* `dev` The sx127x device descriptor 

* `preamble` The LoRa preamble length

#### `public void `[`sx127x_set_symbol_timeout`](#group__drivers__sx127x_1gab950ef661f08a3f935450a6912cc51bf)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint16_t timeout)` 

Sets the SX127X LoRa symbol timeout.

#### Parameters
* `dev` The sx127x device descriptor 

* `timeout` The LoRa symbol timeout

#### `public void `[`sx127x_set_rx_timeout`](#group__drivers__sx127x_1ga4901c8967c79dbb32ee7c033f429d889)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t timeout)` 

Sets the SX127X RX timeout.

#### Parameters
* `dev` The sx127x device descriptor 

* `timeout` The RX timeout

#### `public void `[`sx127x_set_tx_timeout`](#group__drivers__sx127x_1gaf919fb59e3219177a54a5e11721c95b6)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,uint32_t timeout)` 

Sets the SX127X TX timeout.

#### Parameters
* `dev` The sx127x device descriptor 

* `timeout` The TX timeout

#### `public bool `[`sx127x_get_iq_invert`](#group__drivers__sx127x_1ga24116eaed95b1386e67454b2cca17165)`(const `[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev)` 

Checks if the SX127X LoRa inverted IQ mode is enabled/disabled.

#### Parameters
* `dev` The sx127x device descriptor

#### Returns
the LoRa IQ inverted mode

#### `public void `[`sx127x_set_iq_invert`](#group__drivers__sx127x_1ga3b728bcd65bf0375022d3d5aab107a01)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool iq_invert)` 

Enable/disable the SX127X LoRa IQ inverted mode.

#### Parameters
* `dev` The sx127x device descriptor 

* `iq_invert` The LoRa IQ inverted mode

#### `public void `[`sx127x_set_freq_hop`](#group__drivers__sx127x_1gafd2627993cb3a9f4f91f5affecb90bec)`(`[`sx127x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__t)` * dev,bool freq_hop_on)` 

Sets the SX127X LoRa frequency hopping mode.

#### Parameters
* `dev` The sx127x device descriptor 

* `freq_hop_on` The LoRa frequency hopping mode

# struct `sx127x_lora_settings_t` 

LoRa configuration structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`preamble_len`](#structsx127x__lora__settings__t_1af4c190800cbd30e40c90093dfbed1ccb) | Length of preamble header.
`public int8_t `[`power`](#structsx127x__lora__settings__t_1a941d917d3ca1c7e1772785d619cfe427) | Signal power.
`public uint8_t `[`bandwidth`](#structsx127x__lora__settings__t_1a33d92bfea40037cd7542d6f8614c892f) | Signal bandwidth.
`public uint8_t `[`datarate`](#structsx127x__lora__settings__t_1a06afaa80d9b5c50618d0a76c94bbed91) | Spreading factor rate, e.g datarate.
`public uint8_t `[`coderate`](#structsx127x__lora__settings__t_1ab19976f4c4bd6a67a58a536bef217894) | Error coding rate.
`public uint8_t `[`freq_hop_period`](#structsx127x__lora__settings__t_1a3b5ab9e42d8e9059c211c280780053c7) | Frequency hop period.
`public uint8_t `[`flags`](#structsx127x__lora__settings__t_1a82fa13440cd192dc0b45fa48200d0670) | Boolean flags.
`public uint32_t `[`rx_timeout`](#structsx127x__lora__settings__t_1a2346cf283deab02ee2aeea5a51090a77) | RX timeout in milliseconds.
`public uint32_t `[`tx_timeout`](#structsx127x__lora__settings__t_1afa5e806785c8cf7a78578a3693e9b9d1) | TX timeout in milliseconds.

## Members

#### `public uint16_t `[`preamble_len`](#structsx127x__lora__settings__t_1af4c190800cbd30e40c90093dfbed1ccb) 

Length of preamble header.

#### `public int8_t `[`power`](#structsx127x__lora__settings__t_1a941d917d3ca1c7e1772785d619cfe427) 

Signal power.

#### `public uint8_t `[`bandwidth`](#structsx127x__lora__settings__t_1a33d92bfea40037cd7542d6f8614c892f) 

Signal bandwidth.

#### `public uint8_t `[`datarate`](#structsx127x__lora__settings__t_1a06afaa80d9b5c50618d0a76c94bbed91) 

Spreading factor rate, e.g datarate.

#### `public uint8_t `[`coderate`](#structsx127x__lora__settings__t_1ab19976f4c4bd6a67a58a536bef217894) 

Error coding rate.

#### `public uint8_t `[`freq_hop_period`](#structsx127x__lora__settings__t_1a3b5ab9e42d8e9059c211c280780053c7) 

Frequency hop period.

#### `public uint8_t `[`flags`](#structsx127x__lora__settings__t_1a82fa13440cd192dc0b45fa48200d0670) 

Boolean flags.

#### `public uint32_t `[`rx_timeout`](#structsx127x__lora__settings__t_1a2346cf283deab02ee2aeea5a51090a77) 

RX timeout in milliseconds.

#### `public uint32_t `[`tx_timeout`](#structsx127x__lora__settings__t_1afa5e806785c8cf7a78578a3693e9b9d1) 

TX timeout in milliseconds.

# struct `sx127x_radio_settings_t` 

Radio settings.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`channel`](#structsx127x__radio__settings__t_1af529136e3756a3bf1394b7f3e7fb3624) | Radio channel.
`public uint8_t `[`state`](#structsx127x__radio__settings__t_1afb8eea20ab47bd89a87a3ae98278dc57) | Radio state.
`public uint8_t `[`modem`](#structsx127x__radio__settings__t_1aca81ab67c7c711baa1ab1c940d81d47d) | Driver model (FSK or LoRa)
`public `[`sx127x_lora_settings_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__lora__settings__t)` `[`lora`](#structsx127x__radio__settings__t_1a3eea9e74193696802dc0ddf3d4f7c3e7) | LoRa settings.

## Members

#### `public uint32_t `[`channel`](#structsx127x__radio__settings__t_1af529136e3756a3bf1394b7f3e7fb3624) 

Radio channel.

#### `public uint8_t `[`state`](#structsx127x__radio__settings__t_1afb8eea20ab47bd89a87a3ae98278dc57) 

Radio state.

#### `public uint8_t `[`modem`](#structsx127x__radio__settings__t_1aca81ab67c7c711baa1ab1c940d81d47d) 

Driver model (FSK or LoRa)

#### `public `[`sx127x_lora_settings_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__lora__settings__t)` `[`lora`](#structsx127x__radio__settings__t_1a3eea9e74193696802dc0ddf3d4f7c3e7) 

LoRa settings.

# struct `sx127x_internal_t` 

SX127X internal data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`tx_timeout_timer`](#structsx127x__internal__t_1a91fcabde90681a93dc6eaae75eb26b78) | TX operation timeout timer.
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`rx_timeout_timer`](#structsx127x__internal__t_1ac5ec0383ad56ef03cf8e1132d1e0fbea) | RX operation timeout timer.
`public uint32_t `[`last_channel`](#structsx127x__internal__t_1a4089c099e31aab5b5839ecee414ae95a) | Last channel in frequency hopping sequence.
`public bool `[`is_last_cad_success`](#structsx127x__internal__t_1a40ab53e69d3376e2c789c4b124b6ced0) | Sign of success of last CAD operation (activity detected)

## Members

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`tx_timeout_timer`](#structsx127x__internal__t_1a91fcabde90681a93dc6eaae75eb26b78) 

TX operation timeout timer.

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`rx_timeout_timer`](#structsx127x__internal__t_1ac5ec0383ad56ef03cf8e1132d1e0fbea) 

RX operation timeout timer.

#### `public uint32_t `[`last_channel`](#structsx127x__internal__t_1a4089c099e31aab5b5839ecee414ae95a) 

Last channel in frequency hopping sequence.

#### `public bool `[`is_last_cad_success`](#structsx127x__internal__t_1a40ab53e69d3376e2c789c4b124b6ced0) 

Sign of success of last CAD operation (activity detected)

# struct `sx127x_params_t` 

SX127X hardware and global parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structsx127x__params__t_1aa0caacdcef3c2f3dfe9eb45981223f7c) | SPI device.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structsx127x__params__t_1a6bedfc252994c4913b1c20e4d1006aed) | SPI NSS pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structsx127x__params__t_1ad884dd3526c1754c210269a3532d45a4) | Reset pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio0_pin`](#structsx127x__params__t_1ab33ff3ef8e1733f681424c2814990e88) | Interrupt line DIO0 (Tx done)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio1_pin`](#structsx127x__params__t_1a7228e79863cf73b13582252fde7a36d8) | Interrupt line DIO1 (Rx timeout)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio2_pin`](#structsx127x__params__t_1af24bc74e2fd99bf7595fefb610332d10) | Interrupt line DIO2 (FHSS channel change)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio3_pin`](#structsx127x__params__t_1aa24176b18416e9e175d74f8f5bc8fe4f) | Interrupt line DIO3 (CAD done)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio4_pin`](#structsx127x__params__t_1a9757bb30318b9eb7a2f8d481b7965d1f) | Interrupt line DIO4 (not used)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio5_pin`](#structsx127x__params__t_1aea86da898f2db3328febb39c6bb6f15c) | Interrupt line DIO5 (not used)
`public uint8_t `[`paselect`](#structsx127x__params__t_1a100597127685988bf605cb30bd793a85) | Power amplifier mode (RFO or PABOOST)

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structsx127x__params__t_1aa0caacdcef3c2f3dfe9eb45981223f7c) 

SPI device.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structsx127x__params__t_1a6bedfc252994c4913b1c20e4d1006aed) 

SPI NSS pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structsx127x__params__t_1ad884dd3526c1754c210269a3532d45a4) 

Reset pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio0_pin`](#structsx127x__params__t_1ab33ff3ef8e1733f681424c2814990e88) 

Interrupt line DIO0 (Tx done)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio1_pin`](#structsx127x__params__t_1a7228e79863cf73b13582252fde7a36d8) 

Interrupt line DIO1 (Rx timeout)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio2_pin`](#structsx127x__params__t_1af24bc74e2fd99bf7595fefb610332d10) 

Interrupt line DIO2 (FHSS channel change)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio3_pin`](#structsx127x__params__t_1aa24176b18416e9e175d74f8f5bc8fe4f) 

Interrupt line DIO3 (CAD done)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio4_pin`](#structsx127x__params__t_1a9757bb30318b9eb7a2f8d481b7965d1f) 

Interrupt line DIO4 (not used)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio5_pin`](#structsx127x__params__t_1aea86da898f2db3328febb39c6bb6f15c) 

Interrupt line DIO5 (not used)

#### `public uint8_t `[`paselect`](#structsx127x__params__t_1a100597127685988bf605cb30bd793a85) 

Power amplifier mode (RFO or PABOOST)

# struct `sx127x_t` 

```
struct sx127x_t
  : public netdev
```  

SX127X device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structsx127x__t_1a5b0deb5a07ccabd121a653c49bab7a8a) | Netdev parent struct.
`public `[`sx127x_radio_settings_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__radio__settings__t)` `[`settings`](#structsx127x__t_1a2c1e470f0b6d78e32da366791523ca16) | Radio settings.
`public `[`sx127x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__params__t)` `[`params`](#structsx127x__t_1a0063ae239b008cc32ff82906c08a2321) | Device driver parameters.
`public `[`sx127x_internal_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__internal__t)` `[`_internal`](#structsx127x__t_1a6fe2c187243e572d1157092a3b8333d3) | Internal sx127x data used within the driver.
`public `[`sx127x_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx127x_1ga9346021be4d9ac0dfd27f3307e19509f)` `[`irq`](#structsx127x__t_1aa7c29fde4299a7c895d43eba0b361640) | Device IRQ flags.

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structsx127x__t_1a5b0deb5a07ccabd121a653c49bab7a8a) 

Netdev parent struct.

#### `public `[`sx127x_radio_settings_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__radio__settings__t)` `[`settings`](#structsx127x__t_1a2c1e470f0b6d78e32da366791523ca16) 

Radio settings.

#### `public `[`sx127x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__params__t)` `[`params`](#structsx127x__t_1a0063ae239b008cc32ff82906c08a2321) 

Device driver parameters.

#### `public `[`sx127x_internal_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx127x.md#structsx127x__internal__t)` `[`_internal`](#structsx127x__t_1a6fe2c187243e572d1157092a3b8333d3) 

Internal sx127x data used within the driver.

#### `public `[`sx127x_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx127x_1ga9346021be4d9ac0dfd27f3307e19509f)` `[`irq`](#structsx127x__t_1aa7c29fde4299a7c895d43eba0b361640) 

Device IRQ flags.

