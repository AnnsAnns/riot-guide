---
title: api-drivers_can_trx.md
description: api-drivers_can_trx.md
---
# group `drivers_can_trx` 

CAN generic transceiver interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`can_trx_mode_t`](#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)            | trx transceiver mode
`public int `[`can_trx_init`](#group__drivers__can__trx_1ga78c08322ee22d9f5196ed93dd7656467)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev)`            | initialize a transceiver
`public int `[`can_trx_set_mode`](#group__drivers__can__trx_1gaaf266a3969c380739acf2cc8fcddf419)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev,`[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` mode)`            | transceiver set mode
`struct `[`can_trx`](#structcan__trx) | Generic transceiver descriptor.
`struct `[`trx_driver`](#structtrx__driver) | Generic transceiver driver.

## Members

#### `enum `[`can_trx_mode_t`](#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TRX_NORMAL_MODE            | 
TRX_SILENT_MODE            | 
TRX_SLEEP_MODE            | 
TRX_HIGH_SPEED_MODE            | 
TRX_HIGH_VOLTAGE_WAKE_UP_MODE            | 

trx transceiver mode

#### `public int `[`can_trx_init`](#group__drivers__can__trx_1ga78c08322ee22d9f5196ed93dd7656467)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev)` 

initialize a transceiver

#### Parameters
* `dev` Transceiver to initialize

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public int `[`can_trx_set_mode`](#group__drivers__can__trx_1gaaf266a3969c380739acf2cc8fcddf419)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev,`[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` mode)` 

transceiver set mode

#### Parameters
* `dev` Transceiver to set 

* `mode` Mode to set

#### Returns
0 on success 

#### Returns
< 0 on error

# struct `can_trx` 

Generic transceiver descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`trx_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga84e89e88f30b803765fefef46507718d)` * `[`driver`](#structcan__trx_1af5cb534e3e8f510688cbccf167307049) | driver
`public `[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` `[`mode`](#structcan__trx_1a25134c00920e957822948548c74bedad) | current mode

## Members

#### `public const `[`trx_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga84e89e88f30b803765fefef46507718d)` * `[`driver`](#structcan__trx_1af5cb534e3e8f510688cbccf167307049) 

driver

#### `public `[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` `[`mode`](#structcan__trx_1a25134c00920e957822948548c74bedad) 

current mode

# struct `trx_driver` 

Generic transceiver driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`init`](#structtrx__driver_1a0399babc5293a078c69c8d9d93080f33) | initialize the trx device
`public int(* `[`set_mode`](#structtrx__driver_1adb14dc45ea1c547968203cb8dd7a2a54) | set mode interface

## Members

#### `public int(* `[`init`](#structtrx__driver_1a0399babc5293a078c69c8d9d93080f33) 

initialize the trx device

#### Parameters
* `dev` Transceiver to initialize

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public int(* `[`set_mode`](#structtrx__driver_1adb14dc45ea1c547968203cb8dd7a2a54) 

set mode interface

#### Parameters
* `dev` Transceiver to set 

* `mode` Mode to set

#### Returns
0 on success 

#### Returns
< 0 on error

