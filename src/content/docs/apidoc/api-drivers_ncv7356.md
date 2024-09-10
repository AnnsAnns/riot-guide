---
title: api-drivers_ncv7356.md
description: api-drivers_ncv7356.md
---
# group `drivers_ncv7356` 

Device driver for the NCV7356 Single Wire CAN Transceiver.

The NCV7356 is a physical layer device for a single wire data connection such as Bosch's Controller Area [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) (CAN) protocol. The device is capable of transmissions of up to 100 kbps and operates in a voltage range of 5 to 27 V. All logic inputs are compatible with 3.3 V and 5 V supply systems. The pins MODE0 and MODE1 indicate the mode of the transceiver, with the transceiver being initially in sleep mode. An example application circuitry for the 8 pin package can be found at page 15 of [https://www.onsemi.com/pub/Collateral/NCV7356-D.PDF](https://www.onsemi.com/pub/Collateral/NCV7356-D.PDF).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`ncv7356_trx_set_mode`](#group__drivers__ncv7356_1ga19de02ef380c65f681f98a445d4e1df4)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev,`[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` mode)`            | Set mode interface.
`public int `[`ncv7356_trx_init`](#group__drivers__ncv7356_1ga84281887defe8be2dc1e7683814e016c)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev)`            | Initialize the given ncv7356.
`struct `[`ncv7356_trx`](#structncv7356__trx) | ncv7356 trx descriptor

## Members

#### `public int `[`ncv7356_trx_set_mode`](#group__drivers__ncv7356_1ga19de02ef380c65f681f98a445d4e1df4)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev,`[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` mode)` 

Set mode interface.

#### Parameters
* `dev` Pointer to the ncv7356 descriptor 

* `mode` mode to set

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`ncv7356_trx_init`](#group__drivers__ncv7356_1ga84281887defe8be2dc1e7683814e016c)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev)` 

Initialize the given ncv7356.

#### Parameters
* `dev` Pointer to the ncv7356 descriptor

#### Returns
0 on success 

#### Returns
-1 on error

# struct `ncv7356_trx` 

ncv7356 trx descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` `[`trx`](#structncv7356__trx_1ac1253317a34f52b6111dd6666662ed02) | set mode interface
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mode0_pin`](#structncv7356__trx_1a5d104861bd2ec533c0841881dc995de7) | Mode 0 pin of ncv7356 device.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mode1_pin`](#structncv7356__trx_1a304d8489119ad06b54d2d9bd42391ed2) | Mode 1 pin of ncv7356 device.

## Members

#### `public `[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` `[`trx`](#structncv7356__trx_1ac1253317a34f52b6111dd6666662ed02) 

set mode interface

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mode0_pin`](#structncv7356__trx_1a5d104861bd2ec533c0841881dc995de7) 

Mode 0 pin of ncv7356 device.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mode1_pin`](#structncv7356__trx_1a304d8489119ad06b54d2d9bd42391ed2) 

Mode 1 pin of ncv7356 device.

