---
title: api-drivers_soft_uart.md
description: api-drivers_soft_uart.md
---
# group `drivers_soft_uart` 

Software implemented UART.

This module provides a software implemented Universal Asynchronous Receiver Transmitter. It is intended to be used in situation where hardware UART is not available. The signatures of the functions are similar to the functions declared in uart.h

Currently sending and receiving is not possible at the same time, so loopback operation is not possible.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SOFT_UART_FLAG_INVERT_TX`](#group__drivers__soft__uart_1ga8fb21fc0aba48b0416b8af2eca4235e9)            | invert the level of the TX signal
`define `[`SOFT_UART_FLAG_INVERT_RX`](#group__drivers__soft__uart_1gaf51871ffadc3eade0c9a6e6cf69f780d)            | invert the level of the RX signal
`public int `[`soft_uart_init`](#group__drivers__soft__uart_1gaf91cf7627ff099073f61b5c5a5924a83)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart,uint32_t baudrate,`[`uart_rx_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gac4baa58903938817c0b1690a41463df0)` rx_cb,void * arg)`            | Initialize a given UART device.
`public int `[`soft_uart_mode`](#group__drivers__soft__uart_1ga69ba124857fe720f7c0b34808d5b2aba)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart,`[`uart_data_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1adc68b8fd9ded3990f84129df23fee798)` data_bits,`[`uart_parity_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6bcc37e31dd40c204b4ac6f6189e8878)` parity,`[`uart_stop_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6da57a73bbdbf830b845d4116f8341d7)` stop_bits)`            | Setup parity, data and stop bits for a given UART device.
`public void `[`soft_uart_write`](#group__drivers__soft__uart_1ga244347f38788459d8addc6c2e708e022)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart,const uint8_t * data,size_t len)`            | Write data from the given buffer to the specified UART device.
`public void `[`soft_uart_poweron`](#group__drivers__soft__uart_1gacd45995b801c9003df76a50346ba99a1)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart)`            | Power on the given UART device.
`public void `[`soft_uart_poweroff`](#group__drivers__soft__uart_1ga6e792cc1b9bdf1f6dfd6ebcec4864b32)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart)`            | Power off the given UART device.
`struct `[`soft_uart_conf_t`](#structsoft__uart__conf__t) | Software UART port descriptor.

## Members

#### `define `[`SOFT_UART_FLAG_INVERT_TX`](#group__drivers__soft__uart_1ga8fb21fc0aba48b0416b8af2eca4235e9) 

invert the level of the TX signal

#### `define `[`SOFT_UART_FLAG_INVERT_RX`](#group__drivers__soft__uart_1gaf51871ffadc3eade0c9a6e6cf69f780d) 

invert the level of the RX signal

#### `public int `[`soft_uart_init`](#group__drivers__soft__uart_1gaf91cf7627ff099073f61b5c5a5924a83)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart,uint32_t baudrate,`[`uart_rx_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gac4baa58903938817c0b1690a41463df0)` rx_cb,void * arg)` 

Initialize a given UART device.

The UART device will be initialized with the following configuration:

* 8 data bits

* no parity

* 1 stop bit

* baudrate as given

If no callback parameter is given (rx_cb := NULL), the UART will be initialized in TX only mode.

#### Parameters
* `uart` UART device to initialize 

* `baudrate` desired symbol rate in baud 

* `rx_cb` receive callback, executed in interrupt context once for every byte that is received (RX buffer filled), set to NULL for TX only mode 

* `arg` optional context passed to the callback functions

#### Returns
UART_OK on success 

#### Returns
UART_NODEV on invalid UART device 

#### Returns
UART_NOBAUD on inapplicable baudrate 

#### Returns
UART_INTERR on other errors

#### `public int `[`soft_uart_mode`](#group__drivers__soft__uart_1ga69ba124857fe720f7c0b34808d5b2aba)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart,`[`uart_data_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1adc68b8fd9ded3990f84129df23fee798)` data_bits,`[`uart_parity_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6bcc37e31dd40c204b4ac6f6189e8878)` parity,`[`uart_stop_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6da57a73bbdbf830b845d4116f8341d7)` stop_bits)` 

Setup parity, data and stop bits for a given UART device.

#### Parameters
* `uart` UART device to configure 

* `data_bits` number of data bits in a UART frame 

* `parity` parity mode 

* `stop_bits` number of stop bits in a UART frame

#### Returns
UART_OK on success 

#### Returns
UART_NOMODE on other errors

#### `public void `[`soft_uart_write`](#group__drivers__soft__uart_1ga244347f38788459d8addc6c2e708e022)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart,const uint8_t * data,size_t len)` 

Write data from the given buffer to the specified UART device.

This function is blocking, as it will only return after `len` bytes from the given buffer have been send. The way this data is send is up to the implementation: active waiting, interrupt driven, DMA, etc.

#### Parameters
* `uart` UART device to use for transmission 

* `data` data buffer to send 

* `len` number of bytes to send

#### `public void `[`soft_uart_poweron`](#group__drivers__soft__uart_1gacd45995b801c9003df76a50346ba99a1)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart)` 

Power on the given UART device.

#### Parameters
* `uart` the UART device to power on

#### `public void `[`soft_uart_poweroff`](#group__drivers__soft__uart_1ga6e792cc1b9bdf1f6dfd6ebcec4864b32)`(`[`soft_uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__uart_1ga000c523ac2ad48f6fd3031dc77af9663)` uart)` 

Power off the given UART device.

#### Parameters
* `uart` the UART device to power off

# struct `soft_uart_conf_t` 

Software UART port descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rx_pin`](#structsoft__uart__conf__t_1a6670d291e3fa67f6425fd998ce08f964) | RX pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tx_pin`](#structsoft__uart__conf__t_1a3325afa2575222da71cd7d16ee4a2817) | TX pin.
`public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`rx_timer`](#structsoft__uart__conf__t_1a738c9843961402df1c72f18d38feeb46) | Hardware timer used for RX.
`public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`tx_timer`](#structsoft__uart__conf__t_1aa1c10d03c402733eb4176ec57795627f) | Hardware timer used for TX.
`public uint32_t `[`timer_freq`](#structsoft__uart__conf__t_1a699c95e571e8020223343a56f16962ec) | Operating frequency of the timer.
`public uint8_t `[`flags`](#structsoft__uart__conf__t_1acb3c0137a003ac3e0370ea5fc09cb676) | Soft UART flags.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rx_pin`](#structsoft__uart__conf__t_1a6670d291e3fa67f6425fd998ce08f964) 

RX pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tx_pin`](#structsoft__uart__conf__t_1a3325afa2575222da71cd7d16ee4a2817) 

TX pin.

#### `public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`rx_timer`](#structsoft__uart__conf__t_1a738c9843961402df1c72f18d38feeb46) 

Hardware timer used for RX.

#### `public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`tx_timer`](#structsoft__uart__conf__t_1aa1c10d03c402733eb4176ec57795627f) 

Hardware timer used for TX.

#### `public uint32_t `[`timer_freq`](#structsoft__uart__conf__t_1a699c95e571e8020223343a56f16962ec) 

Operating frequency of the timer.

Should be a multiple of baudrate

#### `public uint8_t `[`flags`](#structsoft__uart__conf__t_1acb3c0137a003ac3e0370ea5fc09cb676) 

Soft UART flags.

