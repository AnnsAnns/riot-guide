---
title: api-drivers_at24mac.md
description: api-drivers_at24mac.md
---
# group `drivers_at24mac` 

Device driver interface for the AT24MAC I2C chip.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`AT24MAC_ID_LEN`](#group__drivers__at24mac_1ga337dc6739630f2b5de9d03147a41d7c8)            | Length of ID128.
`enum `[`at24mac_type_t`](#group__drivers__at24mac_1gacebdbf2a8239327a8b3c160232bc9b82)            | Type of the AT24Mac device.
`public int `[`at24mac_get_eui48`](#group__drivers__at24mac_1gac241776cab9519b57be394294f59bb83)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev,`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)`            | Get the unique EUI48 address from a AT24MAC4xx chip.
`public int `[`at24mac_get_eui64`](#group__drivers__at24mac_1ga02d43da5e144dbcdcc77ab5d016a1dcf)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)`            | Get the unique EUI64 address from a AT24MAC6xx chip.
`public int `[`at24mac_get_id128`](#group__drivers__at24mac_1ga25cba75c347f7c5a91fbaf2a068cd9d2)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev,void * dst)`            | Get the unique ID from a AT24MACxxx chip.
`public `[`at24mac_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gacebdbf2a8239327a8b3c160232bc9b82)` `[`at24mac_get_type`](#group__drivers__at24mac_1ga05ee88e5d42ddd9196415790a79a5847)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev)`            | Get the type of a AT24MACxxx chip.
`struct `[`at24mac_params_t`](#structat24mac__params__t) | struct holding all params needed for device communication

## Members

#### `define `[`AT24MAC_ID_LEN`](#group__drivers__at24mac_1ga337dc6739630f2b5de9d03147a41d7c8) 

Length of ID128.

#### `enum `[`at24mac_type_t`](#group__drivers__at24mac_1gacebdbf2a8239327a8b3c160232bc9b82) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
AT24MAC4XX            | provides EUI-48
AT24MAC6XX            | provides EUI-64

Type of the AT24Mac device.

#### `public int `[`at24mac_get_eui48`](#group__drivers__at24mac_1gac241776cab9519b57be394294f59bb83)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev,`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)` 

Get the unique EUI48 address from a AT24MAC4xx chip.

#### Parameters
* `dev` Index of the AT24Mac chip in the at24mac_params array. 

* `addr` memory location to copy the address into.

#### Returns
0 on success, error otherwise.

#### `public int `[`at24mac_get_eui64`](#group__drivers__at24mac_1ga02d43da5e144dbcdcc77ab5d016a1dcf)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)` 

Get the unique EUI64 address from a AT24MAC6xx chip.

#### Parameters
* `dev` Index of the AT24Mac chip in the at24mac_params array. 

* `addr` memory location to copy the address into.

#### Returns
0 on success, error otherwise.

#### `public int `[`at24mac_get_id128`](#group__drivers__at24mac_1ga25cba75c347f7c5a91fbaf2a068cd9d2)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev,void * dst)` 

Get the unique ID from a AT24MACxxx chip.

#### Parameters
* `dev` Index of the AT24MAC chip in the at24mac_params array. 

* `dst` memory location to copy the ID into. Must be able to hold at least [AT24MAC_ID_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1ga337dc6739630f2b5de9d03147a41d7c8) bytes.

#### Returns
0 on success, error otherwise.

#### `public `[`at24mac_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gacebdbf2a8239327a8b3c160232bc9b82)` `[`at24mac_get_type`](#group__drivers__at24mac_1ga05ee88e5d42ddd9196415790a79a5847)`(`[`at24mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gaa7a52789467d291a64324ec3154dbcb9)` dev)` 

Get the type of a AT24MACxxx chip.

#### Parameters
* `dev` Index of the AT24MAC chip in the at24mac_params array.

#### Returns
The type of the device (AT24MAC4XX or AT24MAC6XX)

# struct `at24mac_params_t` 

struct holding all params needed for device communication

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structat24mac__params__t_1a8e7453b090ad2e135d7eecf230b55b7b) | I2C device
`public uint8_t `[`i2c_addr`](#structat24mac__params__t_1a71237e951192ed13ef98ab001cd6f886) | I2C address
`public `[`at24mac_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gacebdbf2a8239327a8b3c160232bc9b82)` `[`type`](#structat24mac__params__t_1abe013d1fa7ae2b6aab0ebb31e0408ac8) | Device type

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structat24mac__params__t_1a8e7453b090ad2e135d7eecf230b55b7b) 

I2C device

#### `public uint8_t `[`i2c_addr`](#structat24mac__params__t_1a71237e951192ed13ef98ab001cd6f886) 

I2C address

#### `public `[`at24mac_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac_1gacebdbf2a8239327a8b3c160232bc9b82)` `[`type`](#structat24mac__params__t_1abe013d1fa7ae2b6aab0ebb31e0408ac8) 

Device type

