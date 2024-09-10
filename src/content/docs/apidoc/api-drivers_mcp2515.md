---
title: api-drivers_mcp2515.md
description: api-drivers_mcp2515.md
---
# group `drivers_mcp2515` 

Driver for the Microchip MCP2515 can controller.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CANDEV_MCP2515_DEFAULT_BITRATE`](#group__drivers__mcp2515_1ga41135fd3d385722206a093ee9433424a)            | Default CAN bitrate.
`define `[`CANDEV_MCP2515_DEFAULT_SPT`](#group__drivers__mcp2515_1gada5c8077c95cb56aee7127836b38a67b)            | Default sampling point setup.
`define `[`MCP2515_TX_MAILBOXES`](#group__drivers__mcp2515_1ga5b8ba40b7b8a6dbfb1b692cc0cf5cd6a)            | Number of transmit mailboxes.
`public void `[`candev_mcp2515_init`](#group__drivers__mcp2515_1ga68ae2e18b1e40d534ec5df27993c4006)`(`[`candev_mcp2515_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp2515_1gaeacbd724734462b1e460f9a2452d0c6c)` * dev,const `[`candev_mcp2515_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp2515_1ga89a43ec7c95848d7544a51c03a51f684)` * conf)`            | Initialize a mcp2515 device by assigning a `timing` and an SPI configuration `conf`.
`struct `[`candev_mcp2515_conf`](#structcandev__mcp2515__conf) | MCP2515 configuration descriptor.
`struct `[`candev_mcp2515`](#structcandev__mcp2515) | MCP2515 device descriptor.

## Members

#### `define `[`CANDEV_MCP2515_DEFAULT_BITRATE`](#group__drivers__mcp2515_1ga41135fd3d385722206a093ee9433424a) 

Default CAN bitrate.

#### `define `[`CANDEV_MCP2515_DEFAULT_SPT`](#group__drivers__mcp2515_1gada5c8077c95cb56aee7127836b38a67b) 

Default sampling point setup.

#### `define `[`MCP2515_TX_MAILBOXES`](#group__drivers__mcp2515_1ga5b8ba40b7b8a6dbfb1b692cc0cf5cd6a) 

Number of transmit mailboxes.

#### `public void `[`candev_mcp2515_init`](#group__drivers__mcp2515_1ga68ae2e18b1e40d534ec5df27993c4006)`(`[`candev_mcp2515_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp2515_1gaeacbd724734462b1e460f9a2452d0c6c)` * dev,const `[`candev_mcp2515_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp2515_1ga89a43ec7c95848d7544a51c03a51f684)` * conf)` 

Initialize a mcp2515 device by assigning a `timing` and an SPI configuration `conf`.

#### Parameters
* `dev` mcp2515 device descriptor 

* `conf` mcp2515 configuration

# struct `candev_mcp2515_conf` 

MCP2515 configuration descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structcandev__mcp2515__conf_1a9c84adef77810b9cec532ce8332f2b06) | SPI bus.
`public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`spi_mode`](#structcandev__mcp2515__conf_1accc953baaed67bf5587a7112bc86fcbe) | SPI mode.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structcandev__mcp2515__conf_1a8e021908ca3dc890227f75fb67da25a4) | SPI clock speed.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structcandev__mcp2515__conf_1a09968e55eac446c12c634a2e1c5e857f) | Slave select pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structcandev__mcp2515__conf_1a5c0e59ce6c57d104c5be3c0a862974f8) | Reset pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structcandev__mcp2515__conf_1aa892120358487e9a4ec17a4f5590f9d0) | Interrupt pin.
`public uint32_t `[`clk`](#structcandev__mcp2515__conf_1a1b0fb7df869e4cd7790ac525d1fdd129) | External clock frequency.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structcandev__mcp2515__conf_1a9c84adef77810b9cec532ce8332f2b06) 

SPI bus.

#### `public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`spi_mode`](#structcandev__mcp2515__conf_1accc953baaed67bf5587a7112bc86fcbe) 

SPI mode.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structcandev__mcp2515__conf_1a8e021908ca3dc890227f75fb67da25a4) 

SPI clock speed.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structcandev__mcp2515__conf_1a09968e55eac446c12c634a2e1c5e857f) 

Slave select pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structcandev__mcp2515__conf_1a5c0e59ce6c57d104c5be3c0a862974f8) 

Reset pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structcandev__mcp2515__conf_1aa892120358487e9a4ec17a4f5590f9d0) 

Interrupt pin.

#### `public uint32_t `[`clk`](#structcandev__mcp2515__conf_1a1b0fb7df869e4cd7790ac525d1fdd129) 

External clock frequency.

# struct `candev_mcp2515` 

MCP2515 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`candev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1gabd7879dd8db04809ca794f5e5ae83f4a)` `[`candev`](#structcandev__mcp2515_1a54a3b158cc005c465b63e6c1c3cc97c1) | candev driver
`public const `[`candev_mcp2515_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp2515_1ga89a43ec7c95848d7544a51c03a51f684)` * `[`conf`](#structcandev__mcp2515_1a84c5effdc54cd8aea7d44e928e410866) | driver configuration
`public const struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * `[`tx_mailbox`](#structcandev__mcp2515_1aa673ecae2265a8c589283589019e9563) | tx mailboxes local copy
`public struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` `[`rx_buf`](#structcandev__mcp2515_1a29ddfe58999c6f4239fd4275a64dc9c9) | rx mailboxes local copy
`public uint32_t `[`masks`](#structcandev__mcp2515_1ace2673df999900dc52379c8a86eaa477) | masks list
`public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`filter_ids`](#structcandev__mcp2515_1a4389102700cf30f40d8b58476bb2cb2e) | filters list
`public int `[`wakeup_src`](#structcandev__mcp2515_1a77e933f168a8eb9829655e5cceec80a8) | wakeup source

## Members

#### `public `[`candev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1gabd7879dd8db04809ca794f5e5ae83f4a)` `[`candev`](#structcandev__mcp2515_1a54a3b158cc005c465b63e6c1c3cc97c1) 

candev driver

#### `public const `[`candev_mcp2515_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mcp2515_1ga89a43ec7c95848d7544a51c03a51f684)` * `[`conf`](#structcandev__mcp2515_1a84c5effdc54cd8aea7d44e928e410866) 

driver configuration

#### `public const struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * `[`tx_mailbox`](#structcandev__mcp2515_1aa673ecae2265a8c589283589019e9563) 

tx mailboxes local copy

#### `public struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` `[`rx_buf`](#structcandev__mcp2515_1a29ddfe58999c6f4239fd4275a64dc9c9) 

rx mailboxes local copy

#### `public uint32_t `[`masks`](#structcandev__mcp2515_1ace2673df999900dc52379c8a86eaa477) 

masks list

#### `public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`filter_ids`](#structcandev__mcp2515_1a4389102700cf30f40d8b58476bb2cb2e) 

filters list

#### `public int `[`wakeup_src`](#structcandev__mcp2515_1a77e933f168a8eb9829655e5cceec80a8) 

wakeup source

