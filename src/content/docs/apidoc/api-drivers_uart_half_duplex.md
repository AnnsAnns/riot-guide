---
title: api-drivers_uart_half_duplex.md
description: api-drivers_uart_half_duplex.md
---
# group `drivers_uart_half_duplex` 

This module contains drivers for UART half-duplex communication bus.

It needs to manage the communication direction by enabling or disabling TX.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`UART_HALF_DUPLEX_DEFAULT_TIMEOUT_US`](#group__drivers__uart__half__duplex_1ga2ec50ee8446d5cc8ac5282462f1a54a0)            | Default recv timeout (in microseconds)
`define `[`UART_HALF_DUPLEX_DIR_NONE`](#group__drivers__uart__half__duplex_1gade7dc7cb52563519e76b61fa153d8133)            | Don't manage direction.
`enum `[`@311`](#group__drivers__uart__half__duplex_1ga2215bf270a4991ca057bb6efb294846b)            | Possible UART_HALF_DUPLEX return values.
`public int `[`uart_half_duplex_init`](#group__drivers__uart__half__duplex_1ga29460cedcb1b766a6646fc6d5b6f9b7f)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev,uint8_t * buffer,size_t buffer_max_size,const `[`uart_half_duplex_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__params__t)` * params)`            | Initialize the half-duplex UART bus to communicate with devices.
`public inline static void `[`uart_half_duplex_set_tx`](#group__drivers__uart__half__duplex_1ga01645c69feabd37a905cd7dce0070711)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev)`            | Set the half-duplex UART bus in TX mode.
`public inline static void `[`uart_half_duplex_set_rx`](#group__drivers__uart__half__duplex_1gab1b040d8ecc4095c40eb0c5e24e188ce)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev)`            | Set the half-duplex UART bus in RX mode.
`public size_t `[`uart_half_duplex_send`](#group__drivers__uart__half__duplex_1ga71f19a77d467b45dfad792a4f8a1eefa)`(const `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev,size_t size)`            | Send the data contained in the driver's buffer.
`public size_t `[`uart_half_duplex_recv`](#group__drivers__uart__half__duplex_1ga530d4578b29ae53a240eb448cad7ea7f)`(const `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev,size_t size)`            | Recv data an fill the driver's buffer.
`struct `[`uart_half_duplex_dir_t`](#structuart__half__duplex__dir__t) | half-duplex UART direction management method type
`struct `[`uart_half_duplex_params_t`](#structuart__half__duplex__params__t) | Configuration for half-duplex UART.
`struct `[`uart_half_duplex_t`](#structuart__half__duplex__t) | Descriptor struct for half-duplex UART.

## Members

#### `define `[`UART_HALF_DUPLEX_DEFAULT_TIMEOUT_US`](#group__drivers__uart__half__duplex_1ga2ec50ee8446d5cc8ac5282462f1a54a0) 

Default recv timeout (in microseconds)

#### `define `[`UART_HALF_DUPLEX_DIR_NONE`](#group__drivers__uart__half__duplex_1gade7dc7cb52563519e76b61fa153d8133) 

Don't manage direction.

#### `enum `[`@311`](#group__drivers__uart__half__duplex_1ga2215bf270a4991ca057bb6efb294846b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UART_HALF_DUPLEX_OK            | everything in order
UART_HALF_DUPLEX_NODEV            | invalid UART device given
UART_HALF_DUPLEX_NOBAUD            | given baudrate is not applicable
UART_HALF_DUPLEX_INTERR            | all other internal errors
UART_HALF_DUPLEX_NOMODE            | given mode is not applicable
UART_HALF_DUPLEX_NOBUFF            | invalid buffer given

Possible UART_HALF_DUPLEX return values.

#### `public int `[`uart_half_duplex_init`](#group__drivers__uart__half__duplex_1ga29460cedcb1b766a6646fc6d5b6f9b7f)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev,uint8_t * buffer,size_t buffer_max_size,const `[`uart_half_duplex_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__params__t)` * params)` 

Initialize the half-duplex UART bus to communicate with devices.

#### Parameters
* `dev` the device 

* `buffer` the buffer used for TX and RX 

* `buffer_max_size` the buffer size 

* `params` the initialization parameters

#### Returns
UART_HALF_DUPLEX_OK if everything is in order 

#### Returns
UART_HALF_DUPLEX_NODEV if invalid UART device was given 

#### Returns
UART_HALF_DUPLEX_NOBAUD if given baudrate is not applicable 

#### Returns
UART_HALF_DUPLEX_INTERR if an other internal error occurred 

#### Returns
UART_HALF_DUPLEX_NOMODE if the given mode is not applicable 

#### Returns
UART_HALF_DUPLEX_NOBUFF if an invalid buffer was given

#### `public inline static void `[`uart_half_duplex_set_tx`](#group__drivers__uart__half__duplex_1ga01645c69feabd37a905cd7dce0070711)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev)` 

Set the half-duplex UART bus in TX mode.

#### Parameters
* `dev` the device

#### `public inline static void `[`uart_half_duplex_set_rx`](#group__drivers__uart__half__duplex_1gab1b040d8ecc4095c40eb0c5e24e188ce)`(`[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev)` 

Set the half-duplex UART bus in RX mode.

#### Parameters
* `dev` the device

#### `public size_t `[`uart_half_duplex_send`](#group__drivers__uart__half__duplex_1ga71f19a77d467b45dfad792a4f8a1eefa)`(const `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev,size_t size)` 

Send the data contained in the driver's buffer.

#### Parameters
* `dev` the device 

* `size` the number of characters to send

#### Returns
the number of characters actually sent

#### `public size_t `[`uart_half_duplex_recv`](#group__drivers__uart__half__duplex_1ga530d4578b29ae53a240eb448cad7ea7f)`(const `[`uart_half_duplex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__t)` * dev,size_t size)` 

Recv data an fill the driver's buffer.

#### Parameters
* `dev` the device 

* `size` the number of characters to receive

#### Returns
the number of characters actually received

# struct `uart_half_duplex_dir_t` 

half-duplex UART direction management method type

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`init`](#structuart__half__duplex__dir__t_1a01cbd285ae191224128dd750089ddc36) | function initializing direction management method
`public void(* `[`enable_tx`](#structuart__half__duplex__dir__t_1aa881d93e5c68eba78abe6034056ed203) | function enabling TX
`public void(* `[`disable_tx`](#structuart__half__duplex__dir__t_1a597d9e5c3b557c1c14f500beb367bdd5) | function disabling TX

## Members

#### `public void(* `[`init`](#structuart__half__duplex__dir__t_1a01cbd285ae191224128dd750089ddc36) 

function initializing direction management method

#### `public void(* `[`enable_tx`](#structuart__half__duplex__dir__t_1aa881d93e5c68eba78abe6034056ed203) 

function enabling TX

#### `public void(* `[`disable_tx`](#structuart__half__duplex__dir__t_1a597d9e5c3b557c1c14f500beb367bdd5) 

function disabling TX

# struct `uart_half_duplex_params_t` 

Configuration for half-duplex UART.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structuart__half__duplex__params__t_1a5ac403f064230ab509812cd260b7e8c6) | the half-duplex UART bus to use
`public uint32_t `[`baudrate`](#structuart__half__duplex__params__t_1ad68b61bf5c82451726dce7b497275ef7) | the baudrate to use
`public `[`uart_half_duplex_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__dir__t)` `[`dir`](#structuart__half__duplex__params__t_1aa9ba02b09be3852e4b44e3a53250c03b) | the direction management method

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structuart__half__duplex__params__t_1a5ac403f064230ab509812cd260b7e8c6) 

the half-duplex UART bus to use

#### `public uint32_t `[`baudrate`](#structuart__half__duplex__params__t_1ad68b61bf5c82451726dce7b497275ef7) 

the baudrate to use

#### `public `[`uart_half_duplex_dir_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__dir__t)` `[`dir`](#structuart__half__duplex__params__t_1aa9ba02b09be3852e4b44e3a53250c03b) 

the direction management method

# struct `uart_half_duplex_t` 

Descriptor struct for half-duplex UART.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`buffer`](#structuart__half__duplex__t_1a12b08ca1510ad7d6a646dc462ddbf53e) | the buffer used for TX and RX
`public size_t `[`size`](#structuart__half__duplex__t_1a4413651718505d5e46a9ffbe65245fe3) | the number of available elements for TX/RX
`public size_t `[`buffer_max_size`](#structuart__half__duplex__t_1adabc45e6b625e9bbcb6bff2975446be2) | the buffer size
`public uint32_t `[`timeout_us`](#structuart__half__duplex__t_1aa94a56024536192e7c2732cb0293eeba) | the maximum duration (in microseconds) for waiting data
`public `[`uart_half_duplex_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__params__t)` `[`params`](#structuart__half__duplex__t_1a45eca12f676374026277f9f9f00b67bb) | the half-duplex UART configuration

## Members

#### `public uint8_t * `[`buffer`](#structuart__half__duplex__t_1a12b08ca1510ad7d6a646dc462ddbf53e) 

the buffer used for TX and RX

#### `public size_t `[`size`](#structuart__half__duplex__t_1a4413651718505d5e46a9ffbe65245fe3) 

the number of available elements for TX/RX

#### `public size_t `[`buffer_max_size`](#structuart__half__duplex__t_1adabc45e6b625e9bbcb6bff2975446be2) 

the buffer size

#### `public uint32_t `[`timeout_us`](#structuart__half__duplex__t_1aa94a56024536192e7c2732cb0293eeba) 

the maximum duration (in microseconds) for waiting data

#### `public `[`uart_half_duplex_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_uart_half_duplex.md#structuart__half__duplex__params__t)` `[`params`](#structuart__half__duplex__t_1a45eca12f676374026277f9f9f00b67bb) 

the half-duplex UART configuration

