---
title: api-drivers_mtd_at24cxxx.md
description: api-drivers_mtd_at24cxxx.md
---
# group `drivers_mtd_at24cxxx` 

MTD wrapper for AT24XXX I2C based EEPROMs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MTD_AT24CXXX_INIT`](#group__drivers__mtd__at24cxxx_1ga017b510477909b49f8bf8bad45e7e20b)            | Shortcut initializer for [mtd_at24cxxx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_at24cxxx.md#structmtd__at24cxxx__t).
`struct `[`mtd_at24cxxx_t`](#structmtd__at24cxxx__t) | Device descriptor for mtd at24cxxx device.

## Members

#### `define `[`MTD_AT24CXXX_INIT`](#group__drivers__mtd__at24cxxx_1ga017b510477909b49f8bf8bad45e7e20b) 

Shortcut initializer for [mtd_at24cxxx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_at24cxxx.md#structmtd__at24cxxx__t).

# struct `mtd_at24cxxx_t` 

Device descriptor for mtd at24cxxx device.

This is an extension of the `[mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__at24cxxx__t_1a022906e2acbf4eab3c313b473701402a) | inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object
`public `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * `[`at24cxxx_eeprom`](#structmtd__at24cxxx__t_1afa660146d9dbb97b9d0a7eb975acd031) | at24cxxx device descriptor
`public const `[`at24cxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1ga590c703d3d9df73aeef6782fe7f2f251)` * `[`params`](#structmtd__at24cxxx__t_1a836544bd7405a5cec663170a6671a1f9) | at24cxxx parameters

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__at24cxxx__t_1a022906e2acbf4eab3c313b473701402a) 

inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object

#### `public `[`at24cxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at24cxxx.md#structat24cxxx__t)` * `[`at24cxxx_eeprom`](#structmtd__at24cxxx__t_1afa660146d9dbb97b9d0a7eb975acd031) 

at24cxxx device descriptor

#### `public const `[`at24cxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24cxxx_1ga590c703d3d9df73aeef6782fe7f2f251)` * `[`params`](#structmtd__at24cxxx__t_1a836544bd7405a5cec663170a6671a1f9) 

at24cxxx parameters

