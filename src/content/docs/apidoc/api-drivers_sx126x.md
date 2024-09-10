---
title: api-drivers_sx126x.md
description: api-drivers_sx126x.md
---
# group `drivers_sx126x` 

Driver for the SX1261/2/8 and LLCC68 LoRa radio device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SX126X_SINGLE`](#group__drivers__sx126x_1gaaacf3e7d858bcd6a3fcf7fb7f705c907)            | Whether there's only one variant of this driver at compile time or not.
`enum `[`sx126x_rf_mode_t`](#group__drivers__sx126x_1gacaadc1f1b5900369a978064592169b14)            | RF switch states.
`enum `[`sx126x_type_t`](#group__drivers__sx126x_1ga6ae7dc7e3f165bfb6ced346719b10f31)            | Used to identify if its a generic SPI module.
`public void `[`sx126x_setup`](#group__drivers__sx126x_1ga71e972ac094658e744f1c4c8188e38ef)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,const `[`sx126x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx126x.md#structsx126x__params__t)` * params,uint8_t index)`            | Setup the radio device.
`public int `[`sx126x_init`](#group__drivers__sx126x_1ga036d88ad1a53f92efa1a1907911c5418)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Initialize the given device.
`public inline static int `[`sx126x_symbol_to_msec`](#group__drivers__sx126x_1gaa56b597a646bc23e8181c22f35aebc22)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint16_t symbols)`            | Converts symbol value to time in milliseconds.
`public uint32_t `[`sx126x_get_channel`](#group__drivers__sx126x_1gad00ba8ffe6e57402c09c827bbc355412)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Gets the channel RF frequency.
`public void `[`sx126x_set_channel`](#group__drivers__sx126x_1gac5253a0ddffb9a931c3180f588687407)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint32_t freq)`            | Sets the channel RF frequency.
`public uint8_t `[`sx126x_get_bandwidth`](#group__drivers__sx126x_1gacbb32cad3c0ef88dbc46d9d13736a4a7)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Gets the LoRa bandwidth.
`public void `[`sx126x_set_bandwidth`](#group__drivers__sx126x_1ga13d6d07ba4a70b19fe71df655ed2bf39)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t bandwidth)`            | Sets the LoRa bandwidth.
`public uint8_t `[`sx126x_get_spreading_factor`](#group__drivers__sx126x_1gaa27ce422fe7cd706fc5bb26f2c5fb248)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Gets the LoRa spreading factor.
`public void `[`sx126x_set_spreading_factor`](#group__drivers__sx126x_1ga0a1a611c164abda1fb0768d6b0f04405)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t sf)`            | Sets the LoRa spreading factor.
`public uint8_t `[`sx126x_get_coding_rate`](#group__drivers__sx126x_1gab3bcafffa472481910f290afc275c6a1)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Gets the LoRa coding rate.
`public void `[`sx126x_set_coding_rate`](#group__drivers__sx126x_1ga2e6c9b9b0a1fa5a624f5f68674163226)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t cr)`            | Sets the LoRa coding rate.
`public uint8_t `[`sx126x_get_lora_payload_length`](#group__drivers__sx126x_1gae9f5650cd310d0a2a94f410dd7b992dc)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Gets the payload length.
`public void `[`sx126x_set_lora_payload_length`](#group__drivers__sx126x_1ga887888c826f798f5e9ff98e23cc832fd)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t len)`            | Sets the payload length.
`public bool `[`sx126x_get_lora_crc`](#group__drivers__sx126x_1gae4340803a0ad98c20b1e3f609347d98c)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Checks if CRC verification mode is enabled.
`public void `[`sx126x_set_lora_crc`](#group__drivers__sx126x_1ga5a0d831a0e6d031c5088369187de8c53)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,bool crc)`            | Enable/Disable CRC verification mode.
`public bool `[`sx126x_get_lora_implicit_header`](#group__drivers__sx126x_1gadcee482dd2f75dbc3ab980b9af3702ad)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Gets the LoRa implicit header mode.
`public void `[`sx126x_set_lora_implicit_header`](#group__drivers__sx126x_1ga1719d8abf9501fe836488ab411738ba5)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,bool mode)`            | Sets LoRa implicit header mode.
`public uint16_t `[`sx126x_get_lora_preamble_length`](#group__drivers__sx126x_1ga2d565f4920e2652cedaa906e76ecf9f2)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Gets the LoRa preamble length.
`public void `[`sx126x_set_lora_preamble_length`](#group__drivers__sx126x_1ga78943089a3608efc1260a1c9b5cfb802)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint16_t preamble)`            | Sets the LoRa preamble length.
`public bool `[`sx126x_get_lora_iq_invert`](#group__drivers__sx126x_1gafb5d32e266b4a37cdcd6d91c3d504acd)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)`            | Checks if the LoRa inverted IQ mode is enabled/disabled.
`public void `[`sx126x_set_lora_iq_invert`](#group__drivers__sx126x_1ga27aa4e2779c1592dfe7e4248f6a0b561)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,bool iq_invert)`            | Enable/disable the LoRa IQ inverted mode.
`struct `[`sx126x_params_t`](#structsx126x__params__t) | Device initialization parameters.
`struct `[`sx126x`](#structsx126x) | Device descriptor for the driver.

## Members

#### `define `[`SX126X_SINGLE`](#group__drivers__sx126x_1gaaacf3e7d858bcd6a3fcf7fb7f705c907) 

Whether there's only one variant of this driver at compile time or not.

#### `enum `[`sx126x_rf_mode_t`](#group__drivers__sx126x_1gacaadc1f1b5900369a978064592169b14) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SX126X_RF_MODE_RX            | 
SX126X_RF_MODE_TX_LPA            | 
SX126X_RF_MODE_TX_HPA            | 

RF switch states.

#### `enum `[`sx126x_type_t`](#group__drivers__sx126x_1ga6ae7dc7e3f165bfb6ced346719b10f31) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SX126X_TYPE_SX1261            | 
SX126X_TYPE_SX1262            | 
SX126X_TYPE_SX1268            | 
SX126X_TYPE_LLCC68            | 
SX126X_TYPE_STM32WL            | 

Used to identify if its a generic SPI module.

Variant of the SX126x driver.

#### `public void `[`sx126x_setup`](#group__drivers__sx126x_1ga71e972ac094658e744f1c4c8188e38ef)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,const `[`sx126x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx126x.md#structsx126x__params__t)` * params,uint8_t index)` 

Setup the radio device.

#### Parameters
* `dev` Device descriptor 

* `params` Parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### `public int `[`sx126x_init`](#group__drivers__sx126x_1ga036d88ad1a53f92efa1a1907911c5418)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
0 on success

#### `public inline static int `[`sx126x_symbol_to_msec`](#group__drivers__sx126x_1gaa56b597a646bc23e8181c22f35aebc22)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint16_t symbols)` 

Converts symbol value to time in milliseconds.

#### Parameters
* `dev` Device descriptor of the driver 

* `symbols` Symbols

#### Returns
Time for symbol(s) in milliseconds

#### `public uint32_t `[`sx126x_get_channel`](#group__drivers__sx126x_1gad00ba8ffe6e57402c09c827bbc355412)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Gets the channel RF frequency.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
The channel frequency

#### `public void `[`sx126x_set_channel`](#group__drivers__sx126x_1gac5253a0ddffb9a931c3180f588687407)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint32_t freq)` 

Sets the channel RF frequency.

#### Parameters
* `dev` Device descriptor of the driver 

* `freq` Channel RF frequency

#### `public uint8_t `[`sx126x_get_bandwidth`](#group__drivers__sx126x_1gacbb32cad3c0ef88dbc46d9d13736a4a7)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Gets the LoRa bandwidth.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the bandwidth

#### `public void `[`sx126x_set_bandwidth`](#group__drivers__sx126x_1ga13d6d07ba4a70b19fe71df655ed2bf39)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t bandwidth)` 

Sets the LoRa bandwidth.

#### Parameters
* `dev` Device descriptor of the driver 

* `bandwidth` The new bandwidth

#### `public uint8_t `[`sx126x_get_spreading_factor`](#group__drivers__sx126x_1gaa27ce422fe7cd706fc5bb26f2c5fb248)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Gets the LoRa spreading factor.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the spreading factor

#### `public void `[`sx126x_set_spreading_factor`](#group__drivers__sx126x_1ga0a1a611c164abda1fb0768d6b0f04405)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t sf)` 

Sets the LoRa spreading factor.

#### Parameters
* `dev` Device descriptor of the driver 

* `sf` The spreading factor

#### `public uint8_t `[`sx126x_get_coding_rate`](#group__drivers__sx126x_1gab3bcafffa472481910f290afc275c6a1)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Gets the LoRa coding rate.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the current LoRa coding rate

#### `public void `[`sx126x_set_coding_rate`](#group__drivers__sx126x_1ga2e6c9b9b0a1fa5a624f5f68674163226)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t cr)` 

Sets the LoRa coding rate.

#### Parameters
* `dev` Device descriptor of the driver 

* `cr` The LoRa coding rate

#### `public uint8_t `[`sx126x_get_lora_payload_length`](#group__drivers__sx126x_1gae9f5650cd310d0a2a94f410dd7b992dc)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Gets the payload length.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the payload length

#### `public void `[`sx126x_set_lora_payload_length`](#group__drivers__sx126x_1ga887888c826f798f5e9ff98e23cc832fd)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint8_t len)` 

Sets the payload length.

#### Parameters
* `dev` Device descriptor of the driver 

* `len` The payload len

#### `public bool `[`sx126x_get_lora_crc`](#group__drivers__sx126x_1gae4340803a0ad98c20b1e3f609347d98c)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Checks if CRC verification mode is enabled.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the LoRa single mode

#### `public void `[`sx126x_set_lora_crc`](#group__drivers__sx126x_1ga5a0d831a0e6d031c5088369187de8c53)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,bool crc)` 

Enable/Disable CRC verification mode.

#### Parameters
* `dev` Device descriptor of the driver 

* `crc` The CRC check mode

#### `public bool `[`sx126x_get_lora_implicit_header`](#group__drivers__sx126x_1gadcee482dd2f75dbc3ab980b9af3702ad)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Gets the LoRa implicit header mode.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the LoRa implicit mode

#### `public void `[`sx126x_set_lora_implicit_header`](#group__drivers__sx126x_1ga1719d8abf9501fe836488ab411738ba5)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,bool mode)` 

Sets LoRa implicit header mode.

#### Parameters
* `dev` Device descriptor of the driver 

* `mode` The header mode

#### `public uint16_t `[`sx126x_get_lora_preamble_length`](#group__drivers__sx126x_1ga2d565f4920e2652cedaa906e76ecf9f2)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Gets the LoRa preamble length.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the preamble length

#### `public void `[`sx126x_set_lora_preamble_length`](#group__drivers__sx126x_1ga78943089a3608efc1260a1c9b5cfb802)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,uint16_t preamble)` 

Sets the LoRa preamble length.

#### Parameters
* `dev` Device descriptor of the driver 

* `preamble` The LoRa preamble length

#### `public bool `[`sx126x_get_lora_iq_invert`](#group__drivers__sx126x_1gafb5d32e266b4a37cdcd6d91c3d504acd)`(const `[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev)` 

Checks if the LoRa inverted IQ mode is enabled/disabled.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the LoRa IQ inverted mode

#### `public void `[`sx126x_set_lora_iq_invert`](#group__drivers__sx126x_1ga27aa4e2779c1592dfe7e4248f6a0b561)`(`[`sx126x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1gae3bb9098ad5443272bf137dfeac9aa39)` * dev,bool iq_invert)` 

Enable/disable the LoRa IQ inverted mode.

#### Parameters
* `dev` Device descriptor of the driver 

* `iq_invert` The LoRa IQ inverted mode

# struct `sx126x_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structsx126x__params__t_1a22fb06666274435ef65509d6677788d6) | SPI device.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structsx126x__params__t_1a0d661f5c0ff22ed225a40dc8df7c24fa) | SPI NSS pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structsx126x__params__t_1af0ee314e0a6460b11e4ef1a4e3226147) | Reset pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`busy_pin`](#structsx126x__params__t_1a217358b6254c2f423b3ea27026489db1) | Busy pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio1_pin`](#structsx126x__params__t_1a652592cb091d3a51ec53f0d09aad7333) | Dio1 pin.
`public sx126x_reg_mod_t `[`regulator`](#structsx126x__params__t_1ae67c70ef6cae03d49c34a0370c258305) | Power regulator mode.
`public `[`sx126x_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1ga6ae7dc7e3f165bfb6ced346719b10f31)` `[`type`](#structsx126x__params__t_1adc9cf083b645559269c500b03b05488a) | Variant of [sx126x](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx126x.md#structsx126x).

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structsx126x__params__t_1a22fb06666274435ef65509d6677788d6) 

SPI device.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structsx126x__params__t_1a0d661f5c0ff22ed225a40dc8df7c24fa) 

SPI NSS pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structsx126x__params__t_1af0ee314e0a6460b11e4ef1a4e3226147) 

Reset pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`busy_pin`](#structsx126x__params__t_1a217358b6254c2f423b3ea27026489db1) 

Busy pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio1_pin`](#structsx126x__params__t_1a652592cb091d3a51ec53f0d09aad7333) 

Dio1 pin.

#### `public sx126x_reg_mod_t `[`regulator`](#structsx126x__params__t_1ae67c70ef6cae03d49c34a0370c258305) 

Power regulator mode.

#### `public `[`sx126x_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx126x_1ga6ae7dc7e3f165bfb6ced346719b10f31)` `[`type`](#structsx126x__params__t_1adc9cf083b645559269c500b03b05488a) 

Variant of [sx126x](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx126x.md#structsx126x).

# struct `sx126x` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structsx126x_1ab46294c4c86eb3b4059b2d49bfb166b4) | Netdev parent struct.
`public `[`sx126x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx126x.md#structsx126x__params__t)` * `[`params`](#structsx126x_1abed9b00b4177f2958fcabe970df7b193) | Initialization parameters.
`public sx126x_pkt_params_lora_t `[`pkt_params`](#structsx126x_1a9e4338511ed0c5daa6a6afc12b3e860f) | Lora packet parameters.
`public sx126x_mod_params_lora_t `[`mod_params`](#structsx126x_1a8adcccd979be770db0552cef70793dc8) | Lora modulation parameters.
`public uint32_t `[`channel`](#structsx126x_1a2d952f2a869d9f16d07185f97fce131e) | Current channel frequency (in Hz)
`public uint16_t `[`rx_timeout`](#structsx126x_1ab641a5036ebda680d55b434442c8d285) | Rx Timeout in terms of symbols.
`public bool `[`radio_sleep`](#structsx126x_1a412c5e3f8ace684d230152d2c2f3e228) | Radio sleep status.

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structsx126x_1ab46294c4c86eb3b4059b2d49bfb166b4) 

Netdev parent struct.

#### `public `[`sx126x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx126x.md#structsx126x__params__t)` * `[`params`](#structsx126x_1abed9b00b4177f2958fcabe970df7b193) 

Initialization parameters.

#### `public sx126x_pkt_params_lora_t `[`pkt_params`](#structsx126x_1a9e4338511ed0c5daa6a6afc12b3e860f) 

Lora packet parameters.

#### `public sx126x_mod_params_lora_t `[`mod_params`](#structsx126x_1a8adcccd979be770db0552cef70793dc8) 

Lora modulation parameters.

#### `public uint32_t `[`channel`](#structsx126x_1a2d952f2a869d9f16d07185f97fce131e) 

Current channel frequency (in Hz)

#### `public uint16_t `[`rx_timeout`](#structsx126x_1ab641a5036ebda680d55b434442c8d285) 

Rx Timeout in terms of symbols.

#### `public bool `[`radio_sleep`](#structsx126x_1a412c5e3f8ace684d230152d2c2f3e228) 

Radio sleep status.

