---
title: api-ble_bluetil_addr.md
description: api-ble_bluetil_addr.md
---
# group `ble_bluetil_addr` 

Generic BLE address handling functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BLUETIL_ADDR_STRLEN`](#group__ble__bluetil__addr_1ga2fb443194cf1525e99088c7b26a63515)            | The length of a BLE address string in bytes (including '\0')
`define `[`BLUETIL_IPV6_IID_STRLEN`](#group__ble__bluetil__addr_1ga39eacc228a5bccddd836267beecc7c59)            | The length of an IPv6 IID string in bytes (including '\0')
`public void `[`bluetil_addr_swapped_cp`](#group__ble__bluetil__addr_1gabf9bb07ea4d19ddfc3c148c9f764d863)`(const uint8_t * src,uint8_t * dst)`            | Copy address and swap the byte order in the target buffer.
`public void `[`bluetil_addr_sprint`](#group__ble__bluetil__addr_1gaffddaf526afa43984e1d0f6d44ff2ef1)`(char * out,const uint8_t * addr)`            | Convert the given BLE address to a human readable string.
`public void `[`bluetil_addr_print`](#group__ble__bluetil__addr_1ga8eaca2f4226d89538645f563621d7f61)`(const uint8_t * addr)`            | Print the given BLE address to STDOUT.
`public uint8_t * `[`bluetil_addr_from_str`](#group__ble__bluetil__addr_1ga8bc6cd560e075b5858a279e5a299dae6)`(uint8_t * addr,const char * addr_str)`            | Parse a BLE address from the given string.
`public void `[`bluetil_addr_ipv6_l2ll_sprint`](#group__ble__bluetil__addr_1ga2e5f56254549550577e68a7ce5138851)`(char * out,const uint8_t * addr)`            | Get a string representation of the given BLE addresses IID-based link local address.
`public void `[`bluetil_addr_ipv6_l2ll_print`](#group__ble__bluetil__addr_1ga4cfad7c3d8742669a45d0c0e1830ded5)`(const uint8_t * addr)`            | Dump the given BLE addresses IPv6 IID-based link local address to STDIO.

## Members

#### `define `[`BLUETIL_ADDR_STRLEN`](#group__ble__bluetil__addr_1ga2fb443194cf1525e99088c7b26a63515) 

The length of a BLE address string in bytes (including '\0')

#### `define `[`BLUETIL_IPV6_IID_STRLEN`](#group__ble__bluetil__addr_1ga39eacc228a5bccddd836267beecc7c59) 

The length of an IPv6 IID string in bytes (including '\0')

#### `public void `[`bluetil_addr_swapped_cp`](#group__ble__bluetil__addr_1gabf9bb07ea4d19ddfc3c148c9f764d863)`(const uint8_t * src,uint8_t * dst)` 

Copy address and swap the byte order in the target buffer.

#### Parameters
* `src` buffer with source address, *must* hold [BLE_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1ga466729c9ee7357f9989ffb4e0d4ff6e3) bytes 

* `dst` target buffer, *must* be able to hold [BLE_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1ga466729c9ee7357f9989ffb4e0d4ff6e3) bytes

#### `public void `[`bluetil_addr_sprint`](#group__ble__bluetil__addr_1gaffddaf526afa43984e1d0f6d44ff2ef1)`(char * out,const uint8_t * addr)` 

Convert the given BLE address to a human readable string.

The address is expected to be in network byte order

#### Parameters
* `out` '\0' terminated address string, *must* be able to hold [BLUETIL_ADDR_STRLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__bluetil__addr_1ga2fb443194cf1525e99088c7b26a63515) bytes 

* `addr` address buffer, *must* hold [BLE_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1ga466729c9ee7357f9989ffb4e0d4ff6e3) bytes

#### `public void `[`bluetil_addr_print`](#group__ble__bluetil__addr_1ga8eaca2f4226d89538645f563621d7f61)`(const uint8_t * addr)` 

Print the given BLE address to STDOUT.

The address is expected to be in network byte order

#### Parameters
* `addr` address to print, is expected to hold [BLE_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1ga466729c9ee7357f9989ffb4e0d4ff6e3) bytes

#### `public uint8_t * `[`bluetil_addr_from_str`](#group__ble__bluetil__addr_1ga8bc6cd560e075b5858a279e5a299dae6)`(uint8_t * addr,const char * addr_str)` 

Parse a BLE address from the given string.

The address is expected most significant byte first and is written to `addr` in network byte order

#### Parameters
* `addr` buffer to write the BLE address, *must* be able to hold [BLE_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1ga466729c9ee7357f9989ffb4e0d4ff6e3) bytes 

* `addr_str` address string, must be at least of length ([BLUETIL_ADDR_STRLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__bluetil__addr_1ga2fb443194cf1525e99088c7b26a63515) - 1)

#### Returns
a pointer to the resulting address on success 

#### Returns
NULL on parsing error

#### `public void `[`bluetil_addr_ipv6_l2ll_sprint`](#group__ble__bluetil__addr_1ga2e5f56254549550577e68a7ce5138851)`(char * out,const uint8_t * addr)` 

Get a string representation of the given BLE addresses IID-based link local address.

The address is expected to be in network byte order

#### Parameters
* `out` '\0' terminated string, *must* be able to hold [BLUETIL_IPV6_IID_STRLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__bluetil__addr_1ga39eacc228a5bccddd836267beecc7c59) bytes 

* `addr` address to convert, , *must* hold [BLE_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1ga466729c9ee7357f9989ffb4e0d4ff6e3) bytes

#### `public void `[`bluetil_addr_ipv6_l2ll_print`](#group__ble__bluetil__addr_1ga4cfad7c3d8742669a45d0c0e1830ded5)`(const uint8_t * addr)` 

Dump the given BLE addresses IPv6 IID-based link local address to STDIO.

The address is expected to be in network byte order

#### Parameters
* `addr` generate IID for this address

