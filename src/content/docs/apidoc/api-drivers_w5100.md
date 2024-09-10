---
title: api-drivers_w5100.md
description: api-drivers_w5100.md
---
# group `drivers_w5100` 

Driver for W5100 ethernet devices.

This device driver only exposes the MACRAW mode of W5100 devices, so it does not offer any support for the on-chip IPv4, UDP, and TCP capabilities of these chips. In connection with RIOT we are only interested in the RAW Ethernet packets, which we can use through netdev with any software network stack provided by RIOT (e.g. GNRC). This enables W5100 devices to communicate via IPv6, enables unlimited connections, and more...

This driver expects to be triggered by the external interrupt line of the W5100 device. On some Arduino shields this is not enabled by default, you have to close the corresponding solder bridge to make it work...

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@282`](#group__drivers__w5100_1ga981a6142498d6bd59cd78e93a36a0d11)            | W5100 error codes.
`public void `[`w5100_setup`](#group__drivers__w5100_1gae756483c845f496ee7d8b347cbbd8430)`(`[`w5100_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5100.md#structw5100__t)` * dev,const `[`w5100_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5100.md#structw5100__params__t)` * params,uint8_t index)`            | So the initial device setup.
`struct `[`w5100_params_t`](#structw5100__params__t) | W5100 device descriptor.
`struct `[`w5100_t`](#structw5100__t) | Device descriptor for W5100 devices.

## Members

#### `enum `[`@282`](#group__drivers__w5100_1ga981a6142498d6bd59cd78e93a36a0d11) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
W5100_ERR_BUS            | 

W5100 error codes.

#### `public void `[`w5100_setup`](#group__drivers__w5100_1gae756483c845f496ee7d8b347cbbd8430)`(`[`w5100_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5100.md#structw5100__t)` * dev,const `[`w5100_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5100.md#structw5100__params__t)` * params,uint8_t index)` 

So the initial device setup.

This function pre-initializes the netdev structure, saves the configuration parameters and finally initializes the SPI bus and the used GPIO pins.

#### Parameters
* `dev` the handle of the device to initialize 

* `params` parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

# struct `w5100_params_t` 

W5100 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structw5100__params__t_1a065005d423edacb5129548254e5bc5a6) | SPI bus used.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structw5100__params__t_1a3f2009c72aece731e35bd8eaf09aee0d) | clock speed used on the selected SPI bus
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structw5100__params__t_1a17832caf2cc82a12a1545e8b4db7cd2a) | pin connected to the chip select line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`evt`](#structw5100__params__t_1a795de21e62c5bc34d145d0f659927d42) | pin connected to the INT line

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structw5100__params__t_1a065005d423edacb5129548254e5bc5a6) 

SPI bus used.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structw5100__params__t_1a3f2009c72aece731e35bd8eaf09aee0d) 

clock speed used on the selected SPI bus

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structw5100__params__t_1a17832caf2cc82a12a1545e8b4db7cd2a) 

pin connected to the chip select line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`evt`](#structw5100__params__t_1a795de21e62c5bc34d145d0f659927d42) 

pin connected to the INT line

# struct `w5100_t` 

Device descriptor for W5100 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`nd`](#structw5100__t_1a2f5ee41f53e3b85cc4152e711a82efca) | extends the netdev structure
`public `[`w5100_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5100.md#structw5100__params__t)` `[`p`](#structw5100__t_1ac13b514047cf11f0911ba64690de2cee) | device configuration parameters

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`nd`](#structw5100__t_1a2f5ee41f53e3b85cc4152e711a82efca) 

extends the netdev structure

#### `public `[`w5100_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5100.md#structw5100__params__t)` `[`p`](#structw5100__t_1ac13b514047cf11f0911ba64690de2cee) 

device configuration parameters

