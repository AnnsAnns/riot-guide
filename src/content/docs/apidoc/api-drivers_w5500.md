---
title: api-drivers_w5500.md
description: api-drivers_w5500.md
---
# group `drivers_w5500` 

Driver for W5500 ethernet devices.

This device driver only exposes the MACRAW mode of W5500 devices, so it does not offer any support for the on-chip IPv4, UDP, and TCP capabilities of these chips. In connection with RIOT we are only interested in the RAW Ethernet packets, which we can use through netdev with any software network stack provided by RIOT (e.g. GNRC). This enables W5500 devices to communicate via IPv6, enables unlimited connections, and more...

This driver can be used in polling or interrupt mode. On some shields the interrupt line is not enabled by default, you have to close the corresponding solder bridge to make the interrupt mode work...

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`w5500_setup`](#group__drivers__w5500_1ga8dd830f1909f636afe38eca3616fb731)`(`[`w5500_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__w5500_1gac9c9d13e1c1cac9063bb3b56a90ac777)` * dev,const `[`w5500_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5500.md#structw5500__params__t)` * params,uint8_t index)`            | So the initial device setup.
`struct `[`w5500_params_t`](#structw5500__params__t) | W5500 device descriptor.
`struct `[`w5500`](#structw5500) | Device descriptor for W5500 devices.

## Members

#### `public void `[`w5500_setup`](#group__drivers__w5500_1ga8dd830f1909f636afe38eca3616fb731)`(`[`w5500_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__w5500_1gac9c9d13e1c1cac9063bb3b56a90ac777)` * dev,const `[`w5500_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5500.md#structw5500__params__t)` * params,uint8_t index)` 

So the initial device setup.

This function pre-initializes the netdev structure, saves the configuration parameters and finally initializes the SPI bus and the used GPIO pins.

#### Parameters
* `dev` the handle of the device to initialize 

* `params` parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

# struct `w5500_params_t` 

W5500 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structw5500__params__t_1a8b5438f44d9d7eb6f460a001d36eaf33) | SPI bus used.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structw5500__params__t_1aa22bb7901d45665517f0952165e5998d) | clock speed used on the selected SPI bus
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structw5500__params__t_1a06b0e231a453a7f9ac65382f23caed5f) | pin connected to the chip select line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structw5500__params__t_1a31d1da273d3af6b02509cd6b9ac77b76) | pin connected to the INT line
`public uint32_t `[`polling_interval_ms`](#structw5500__params__t_1a153da2a1fb9730867c7100b1a21e89e8) | interval for polling, 0 if interrupt mode

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structw5500__params__t_1a8b5438f44d9d7eb6f460a001d36eaf33) 

SPI bus used.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structw5500__params__t_1aa22bb7901d45665517f0952165e5998d) 

clock speed used on the selected SPI bus

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structw5500__params__t_1a06b0e231a453a7f9ac65382f23caed5f) 

pin connected to the chip select line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structw5500__params__t_1a31d1da273d3af6b02509cd6b9ac77b76) 

pin connected to the INT line

#### `public uint32_t `[`polling_interval_ms`](#structw5500__params__t_1a153da2a1fb9730867c7100b1a21e89e8) 

interval for polling, 0 if interrupt mode

# struct `w5500` 

Device descriptor for W5500 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structw5500_1ac9a1ff0ab3a25a5dadad37f9a9ab9612) | extends the netdev structure
`public `[`w5500_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5500.md#structw5500__params__t)` `[`p`](#structw5500_1a2d5d794dd494686d3ac4e62b90b0b913) | device configuration parameters
`public uint16_t `[`frame_size`](#structw5500_1ad47d7398ebebf396a52ae75a5c972e45) | size of the frame which has been send
`public bool `[`link_up`](#structw5500_1a4762e7a9c912ceb6c6c64526400472e8) | used to prevent sending the same LINK event twice
`public bool `[`frame_sent`](#structw5500_1aa6849e90f45781a7e08f6ed396b98e8f) | indicates that the frame has been transmitted
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timerInstance`](#structw5500_1aea1df990770779620a06755c7beb1332) | stores the polling interval timer in polling mode

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structw5500_1ac9a1ff0ab3a25a5dadad37f9a9ab9612) 

extends the netdev structure

#### `public `[`w5500_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_w5500.md#structw5500__params__t)` `[`p`](#structw5500_1a2d5d794dd494686d3ac4e62b90b0b913) 

device configuration parameters

#### `public uint16_t `[`frame_size`](#structw5500_1ad47d7398ebebf396a52ae75a5c972e45) 

size of the frame which has been send

#### `public bool `[`link_up`](#structw5500_1a4762e7a9c912ceb6c6c64526400472e8) 

used to prevent sending the same LINK event twice

#### `public bool `[`frame_sent`](#structw5500_1aa6849e90f45781a7e08f6ed396b98e8f) 

indicates that the frame has been transmitted

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timerInstance`](#structw5500_1aea1df990770779620a06755c7beb1332) 

stores the polling interval timer in polling mode

