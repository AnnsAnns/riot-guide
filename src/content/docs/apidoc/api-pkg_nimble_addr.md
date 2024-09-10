---
title: api-pkg_nimble_addr.md
description: api-pkg_nimble_addr.md
---
# group `pkg_nimble_addr` 

NimBLE specific helper functions for handling addresses.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NIMBLE_ADDR_STRLEN`](#group__pkg__nimble__addr_1gae775c7e1093c0a37eec7ecfe880a878e)            | Length of an address string in byte, including `\0` termination.
`public void `[`nimble_addr_print`](#group__pkg__nimble__addr_1gaa5ecbb0d534f301b3a7153d307cd5769)`(const ble_addr_t * addr)`            | Print the given address on STDIO.
`public void `[`nimble_addr_sprint`](#group__pkg__nimble__addr_1ga3cf1206c10e9d1b153d4632e78fc7907)`(char * buf,const ble_addr_t * addr)`            | Write the string representation of the given address into a buffer.

## Members

#### `define `[`NIMBLE_ADDR_STRLEN`](#group__pkg__nimble__addr_1gae775c7e1093c0a37eec7ecfe880a878e) 

Length of an address string in byte, including `\0` termination.

#### `public void `[`nimble_addr_print`](#group__pkg__nimble__addr_1gaa5ecbb0d534f301b3a7153d307cd5769)`(const ble_addr_t * addr)` 

Print the given address on STDIO.

#### Parameters
* `addr` address to print

#### `public void `[`nimble_addr_sprint`](#group__pkg__nimble__addr_1ga3cf1206c10e9d1b153d4632e78fc7907)`(char * buf,const ble_addr_t * addr)` 

Write the string representation of the given address into a buffer.

The resulting string written to `buf` is `\0` terminated and is always 28 bytes (NIMBLE_ADDR_STRLEN) long.

#### Parameters
* `buf` buffer 

* `addr` addre to convert

