---
title: api-drivers_sx1280.md
description: api-drivers_sx1280.md
---
# group `drivers_sx1280` 

Driver for the [sx1280](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx1280.md#structsx1280) LoRa radio device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`sx1280_setup`](#group__drivers__sx1280_1ga1763e828a432796cf1ea1472107d65ab)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,const `[`sx1280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx1280.md#structsx1280__params__t)` * params,uint8_t index)`            | Setup the radio device.
`public int `[`sx1280_init`](#group__drivers__sx1280_1gab5eec7782ab77c1d0806af7b1fac5eb7)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Initialize the given device.
`public uint32_t `[`sx1280_get_channel`](#group__drivers__sx1280_1ga0e4f87d095278d9a959e1393f1ef00ac)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets the channel RF frequency.
`public uint32_t `[`sx1280_random`](#group__drivers__sx1280_1ga2409604d3c5214bffee625ffce8cb24a)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets a random number.
`public void `[`sx1280_set_channel`](#group__drivers__sx1280_1ga2017d768d2b55b8561453442dd7a75db)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint32_t freq)`            | Sets the channel RF frequency.
`public uint32_t `[`sx1280_get_bandwidth`](#group__drivers__sx1280_1ga0b8c4ac14b8fc5c76de2f2bd723285db)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets the LoRa bandwidth.
`public void `[`sx1280_set_bandwidth`](#group__drivers__sx1280_1ga541224d8562376ce9b9d94c34ca12c8a)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint16_t bandwidth)`            | Sets the LoRa bandwidth.
`public uint8_t `[`sx1280_get_spreading_factor`](#group__drivers__sx1280_1ga9b7507cca6c2fb929e9e2f5efbaccd15)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets the LoRa spreading factor.
`public void `[`sx1280_set_spreading_factor`](#group__drivers__sx1280_1gab82fadcf819462e9f8ff3ffbc472c383)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint8_t sf)`            | Sets the LoRa spreading factor.
`public uint8_t `[`sx1280_get_coding_rate`](#group__drivers__sx1280_1ga8b409e03cddea2a3443e45eb040f174b)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets the LoRa coding rate.
`public void `[`sx1280_set_coding_rate`](#group__drivers__sx1280_1gadc22b0ad1ca034195c2f7b9c123e8085)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint8_t cr)`            | Sets the LoRa coding rate.
`public uint8_t `[`sx1280_get_lora_payload_length`](#group__drivers__sx1280_1ga28a0385115ba32b77720eaadddbbedd2)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets the payload length.
`public void `[`sx1280_set_lora_payload_length`](#group__drivers__sx1280_1ga3d8d85aa69d43c8f58e144c09fe0f742)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint8_t len)`            | Sets the payload length.
`public bool `[`sx1280_get_lora_crc`](#group__drivers__sx1280_1ga1dee78ce376382d7bc71fa5dc8678743)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Checks if CRC verification mode is enabled.
`public void `[`sx1280_set_lora_crc`](#group__drivers__sx1280_1gabd0438b00cbe6f09454e6f8668ae4413)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,bool crc)`            | Enable/Disable CRC verification mode.
`public bool `[`sx1280_get_lora_implicit_header`](#group__drivers__sx1280_1ga65799fb87c2e05da4e2cf12450fbee16)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets the LoRa implicit header mode.
`public void `[`sx1280_set_lora_implicit_header`](#group__drivers__sx1280_1gac3cb28d45b0c7f4f244ca2ea55bfce88)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,bool mode)`            | Sets LoRa implicit header mode.
`public uint16_t `[`sx1280_get_lora_preamble_length`](#group__drivers__sx1280_1gadfb2862b1c5f93b1ceb18bc19685ec4d)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Gets the LoRa preamble length.
`public void `[`sx1280_set_lora_preamble_length`](#group__drivers__sx1280_1ga88beab9fae3c69089af7ac07a8cc36ca)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint16_t preamble)`            | Sets the LoRa preamble length.
`public bool `[`sx1280_get_lora_iq_invert`](#group__drivers__sx1280_1ga0fdf0cdc0010deaa633556dc663698bb)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)`            | Checks if the LoRa inverted IQ mode is enabled/disabled.
`public void `[`sx1280_set_lora_iq_invert`](#group__drivers__sx1280_1gaaf0785f37f8f219ee35cb99e7409e893)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,bool iq_invert)`            | Enable/disable the LoRa IQ inverted mode.
`struct `[`sx1280_params_t`](#structsx1280__params__t) | Device initialization parameters.
`struct `[`sx1280`](#structsx1280) | Device descriptor for the driver.

## Members

#### `public void `[`sx1280_setup`](#group__drivers__sx1280_1ga1763e828a432796cf1ea1472107d65ab)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,const `[`sx1280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx1280.md#structsx1280__params__t)` * params,uint8_t index)` 

Setup the radio device.

#### Parameters
* `dev` Device descriptor 

* `params` Parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### `public int `[`sx1280_init`](#group__drivers__sx1280_1gab5eec7782ab77c1d0806af7b1fac5eb7)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
0 on success

#### `public uint32_t `[`sx1280_get_channel`](#group__drivers__sx1280_1ga0e4f87d095278d9a959e1393f1ef00ac)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets the channel RF frequency.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
The channel frequency

#### `public uint32_t `[`sx1280_random`](#group__drivers__sx1280_1ga2409604d3c5214bffee625ffce8cb24a)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets a random number.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
a random number

#### `public void `[`sx1280_set_channel`](#group__drivers__sx1280_1ga2017d768d2b55b8561453442dd7a75db)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint32_t freq)` 

Sets the channel RF frequency.

#### Parameters
* `dev` Device descriptor of the driver 

* `freq` Channel RF frequency

#### `public uint32_t `[`sx1280_get_bandwidth`](#group__drivers__sx1280_1ga0b8c4ac14b8fc5c76de2f2bd723285db)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets the LoRa bandwidth.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the bandwidth

#### `public void `[`sx1280_set_bandwidth`](#group__drivers__sx1280_1ga541224d8562376ce9b9d94c34ca12c8a)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint16_t bandwidth)` 

Sets the LoRa bandwidth.

#### Parameters
* `dev` Device descriptor of the driver 

* `bandwidth` The new bandwidth

#### `public uint8_t `[`sx1280_get_spreading_factor`](#group__drivers__sx1280_1ga9b7507cca6c2fb929e9e2f5efbaccd15)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets the LoRa spreading factor.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the spreading factor

#### `public void `[`sx1280_set_spreading_factor`](#group__drivers__sx1280_1gab82fadcf819462e9f8ff3ffbc472c383)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint8_t sf)` 

Sets the LoRa spreading factor.

#### Parameters
* `dev` Device descriptor of the driver 

* `sf` The spreading factor

#### `public uint8_t `[`sx1280_get_coding_rate`](#group__drivers__sx1280_1ga8b409e03cddea2a3443e45eb040f174b)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets the LoRa coding rate.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the current LoRa coding rate

#### `public void `[`sx1280_set_coding_rate`](#group__drivers__sx1280_1gadc22b0ad1ca034195c2f7b9c123e8085)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint8_t cr)` 

Sets the LoRa coding rate.

#### Parameters
* `dev` Device descriptor of the driver 

* `cr` The LoRa coding rate

#### `public uint8_t `[`sx1280_get_lora_payload_length`](#group__drivers__sx1280_1ga28a0385115ba32b77720eaadddbbedd2)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets the payload length.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the payload length

#### `public void `[`sx1280_set_lora_payload_length`](#group__drivers__sx1280_1ga3d8d85aa69d43c8f58e144c09fe0f742)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint8_t len)` 

Sets the payload length.

#### Parameters
* `dev` Device descriptor of the driver 

* `len` The payload len

#### `public bool `[`sx1280_get_lora_crc`](#group__drivers__sx1280_1ga1dee78ce376382d7bc71fa5dc8678743)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Checks if CRC verification mode is enabled.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the LoRa single mode

#### `public void `[`sx1280_set_lora_crc`](#group__drivers__sx1280_1gabd0438b00cbe6f09454e6f8668ae4413)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,bool crc)` 

Enable/Disable CRC verification mode.

#### Parameters
* `dev` Device descriptor of the driver 

* `crc` The CRC check mode

#### `public bool `[`sx1280_get_lora_implicit_header`](#group__drivers__sx1280_1ga65799fb87c2e05da4e2cf12450fbee16)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets the LoRa implicit header mode.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the LoRa implicit mode

#### `public void `[`sx1280_set_lora_implicit_header`](#group__drivers__sx1280_1gac3cb28d45b0c7f4f244ca2ea55bfce88)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,bool mode)` 

Sets LoRa implicit header mode.

#### Parameters
* `dev` Device descriptor of the driver 

* `mode` The header mode

#### `public uint16_t `[`sx1280_get_lora_preamble_length`](#group__drivers__sx1280_1gadfb2862b1c5f93b1ceb18bc19685ec4d)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Gets the LoRa preamble length.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the preamble length

#### `public void `[`sx1280_set_lora_preamble_length`](#group__drivers__sx1280_1ga88beab9fae3c69089af7ac07a8cc36ca)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,uint16_t preamble)` 

Sets the LoRa preamble length.

#### Parameters
* `dev` Device descriptor of the driver 

* `preamble` The LoRa preamble length

#### `public bool `[`sx1280_get_lora_iq_invert`](#group__drivers__sx1280_1ga0fdf0cdc0010deaa633556dc663698bb)`(const `[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev)` 

Checks if the LoRa inverted IQ mode is enabled/disabled.

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
the LoRa IQ inverted mode

#### `public void `[`sx1280_set_lora_iq_invert`](#group__drivers__sx1280_1gaaf0785f37f8f219ee35cb99e7409e893)`(`[`sx1280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx1280_1ga110541846354c09ca5175f24dc2ce70f)` * dev,bool iq_invert)` 

Enable/disable the LoRa IQ inverted mode.

#### Parameters
* `dev` Device descriptor of the driver 

* `iq_invert` The LoRa IQ inverted mode

# struct `sx1280_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structsx1280__params__t_1a2c9df9d3c9e562e0d42e1a7bd37c7ee8) | SPI device.
`public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`spi_mode`](#structsx1280__params__t_1ad0968c9bd7ad042adcce6c03fa7cc585) | SPI mode.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structsx1280__params__t_1a613117c587728c4996307c8f188219de) | SPI clk.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structsx1280__params__t_1a657c62aacc239cd3bee2c3f958b988e9) | SPI NSS pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structsx1280__params__t_1aba01d5c3ccb1b7a9f2e77f13b6efb26c) | Reset pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`busy_pin`](#structsx1280__params__t_1a0b8b7c32fc65f7e9c4e13cb1a90a2111) | Busy pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio0_pin`](#structsx1280__params__t_1a88b7bf13e4f863461d16fdb57bda8574) | Dio0 pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio1_pin`](#structsx1280__params__t_1aa7e9450b5415cf9af7190557b453d86a) | Dio1 pin.
`public sx1280_reg_mod_t `[`regulator`](#structsx1280__params__t_1a23c644c2a93ba0fbbf824380d415d3a4) | Power regulator mode.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structsx1280__params__t_1a2c9df9d3c9e562e0d42e1a7bd37c7ee8) 

SPI device.

#### `public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`spi_mode`](#structsx1280__params__t_1ad0968c9bd7ad042adcce6c03fa7cc585) 

SPI mode.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structsx1280__params__t_1a613117c587728c4996307c8f188219de) 

SPI clk.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structsx1280__params__t_1a657c62aacc239cd3bee2c3f958b988e9) 

SPI NSS pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structsx1280__params__t_1aba01d5c3ccb1b7a9f2e77f13b6efb26c) 

Reset pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`busy_pin`](#structsx1280__params__t_1a0b8b7c32fc65f7e9c4e13cb1a90a2111) 

Busy pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio0_pin`](#structsx1280__params__t_1a88b7bf13e4f863461d16fdb57bda8574) 

Dio0 pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dio1_pin`](#structsx1280__params__t_1aa7e9450b5415cf9af7190557b453d86a) 

Dio1 pin.

#### `public sx1280_reg_mod_t `[`regulator`](#structsx1280__params__t_1a23c644c2a93ba0fbbf824380d415d3a4) 

Power regulator mode.

# struct `sx1280` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structsx1280_1acd985a67f930da9f3849365c62defb9f) | Netdev parent struct.
`public ral_t `[`ral`](#structsx1280_1a6c84faa673db817365e35c4f7e9078a4) | Radio abstraction.
`public ral_params_lora_t `[`ral_params_lora`](#structsx1280_1a64c4a6b4e10e738e522822889e218b39) | LoRa modulation parameters.
`public `[`sx1280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx1280.md#structsx1280__params__t)` * `[`params`](#structsx1280_1a0e825c4ad5dbba55515e3f6a88c35ad8) | Initialization parameters.
`public sx1280_hal_operating_mode_t `[`mode`](#structsx1280_1a5ed18292ad6db8974e13842688740ba2) | Operating Mode.

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structsx1280_1acd985a67f930da9f3849365c62defb9f) 

Netdev parent struct.

#### `public ral_t `[`ral`](#structsx1280_1a6c84faa673db817365e35c4f7e9078a4) 

Radio abstraction.

#### `public ral_params_lora_t `[`ral_params_lora`](#structsx1280_1a64c4a6b4e10e738e522822889e218b39) 

LoRa modulation parameters.

#### `public `[`sx1280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sx1280.md#structsx1280__params__t)` * `[`params`](#structsx1280_1a0e825c4ad5dbba55515e3f6a88c35ad8) 

Initialization parameters.

#### `public sx1280_hal_operating_mode_t `[`mode`](#structsx1280_1a5ed18292ad6db8974e13842688740ba2) 

Operating Mode.

