---
title: api-drivers_edbg_eui.md
description: api-drivers_edbg_eui.md
---
# group `drivers_edbg_eui` 

Device driver interface for the AT24MAC I2C chip.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`edbg_get_eui64`](#group__drivers__edbg__eui_1gaf7fdaf013b857000e35fe3c57a74bbfc)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)`            | Get the unique EUI64 address from a Atmel EDBG debugger.

## Members

#### `public int `[`edbg_get_eui64`](#group__drivers__edbg__eui_1gaf7fdaf013b857000e35fe3c57a74bbfc)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)` 

Get the unique EUI64 address from a Atmel EDBG debugger.

The EDBG firmware may take a while to start up, so on cold boot this function can return error when called to soon.

#### Parameters
* `addr` memory location to copy the address into.

#### Returns
0 on success, error otherwise.

