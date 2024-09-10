---
title: api-drivers_tja1042.md
description: api-drivers_tja1042.md
---
# group `drivers_tja1042` 

tja1042 High Speed CAN transceiver driver

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`tja1042_trx_set_mode`](#group__drivers__tja1042_1gac6a1909845eb244f77ad1102e7fe9fb6)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev,`[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` mode)`            | Set mode interface.
`public int `[`tja1042_trx_init`](#group__drivers__tja1042_1ga196b407b88993e1c05b91cdf7ebaf8d6)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev)`            | Initialize the given tja1042.
`struct `[`tja1042_trx`](#structtja1042__trx) | tja1042 CAN trx descriptor

## Members

#### `public int `[`tja1042_trx_set_mode`](#group__drivers__tja1042_1gac6a1909845eb244f77ad1102e7fe9fb6)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev,`[`can_trx_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1ga5cb1cf6e503df156a726a4ff71e7ca40)` mode)` 

Set mode interface.

#### Parameters
* `dev` Pointer to the tja1042 descriptor 

* `mode` mode to set

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`tja1042_trx_init`](#group__drivers__tja1042_1ga196b407b88993e1c05b91cdf7ebaf8d6)`(`[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` * dev)` 

Initialize the given tja1042.

#### Parameters
* `dev` Pointer to the tja1042 descriptor

#### Returns
0 on success 

#### Returns
-1 on error

# struct `tja1042_trx` 

tja1042 CAN trx descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` `[`trx`](#structtja1042__trx_1a745bf82433cc5e34ee8240274f710a6d) | set mode interface
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`stb_pin`](#structtja1042__trx_1af93bd53f01642c5ad9c130e3ebeae507) | Mode pin of tja1042 device.

## Members

#### `public `[`can_trx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__can__trx_1gab557f49a8a0d48ad84459cd0565fefee)` `[`trx`](#structtja1042__trx_1a745bf82433cc5e34ee8240274f710a6d) 

set mode interface

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`stb_pin`](#structtja1042__trx_1af93bd53f01642c5ad9c130e3ebeae507) 

Mode pin of tja1042 device.

