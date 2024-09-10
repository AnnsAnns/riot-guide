---
title: api-drivers_mtd_flashpage.md
description: api-drivers_mtd_flashpage.md
---
# group `drivers_mtd_flashpage` 

Driver for internal flash devices implementing flashpage interface.

The MTD device created by [MTD_FLASHPAGE_INIT_VAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd__flashpage_1gac612c25d229e8d1c380a24e206b7259f) spans the complete accessible flash page memory. To expose merely an area of that as a single MTD partition, the [MTD address mapper](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd__mapper) can be used.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MTD_FLASHPAGE_INIT_VAL`](#group__drivers__mtd__flashpage_1gac612c25d229e8d1c380a24e206b7259f)            | Macro helper to initialize a mtd_t with flashpage driver.
`define `[`MTD_FLASHPAGE_AUX_INIT_VAL`](#group__drivers__mtd__flashpage_1gacd28a962f9b05bf326031226456286b4)            | Macro helper to initialize a mtd_t with a portion of the flash.
`define `[`CONFIG_SLOT_AUX_LEN`](#group__drivers__mtd__flashpage_1gaf7cc18f5b279714c72f40372344160c9)            | Size of the auxiliary slot on the internal flash Must align with the flash page size.
`define `[`CONFIG_SLOT_AUX_MTD_OFFSET`](#group__drivers__mtd__flashpage_1gab1f34903fa71682993c81e41546581d3)            | Default MTD offset for the AUX slot.
`struct `[`mtd_flashpage_t`](#structmtd__flashpage__t) | MTD flashpage descriptor.

## Members

#### `define `[`MTD_FLASHPAGE_INIT_VAL`](#group__drivers__mtd__flashpage_1gac612c25d229e8d1c380a24e206b7259f) 

Macro helper to initialize a mtd_t with flashpage driver.

#### `define `[`MTD_FLASHPAGE_AUX_INIT_VAL`](#group__drivers__mtd__flashpage_1gacd28a962f9b05bf326031226456286b4) 

Macro helper to initialize a mtd_t with a portion of the flash.

#### Parameters
* `start` Start address of the flash section 

* `len` Size of the flash section in bytes

#### `define `[`CONFIG_SLOT_AUX_LEN`](#group__drivers__mtd__flashpage_1gaf7cc18f5b279714c72f40372344160c9) 

Size of the auxiliary slot on the internal flash Must align with the flash page size.

Don't set this config value directly! Instead set `SLOT_AUX_LEN` in the board's `Makefile.include`

This value is fixed and can not be changed in the field / via firmware updates. Changing this value requires re-flashing of riotboot.

#### `define `[`CONFIG_SLOT_AUX_MTD_OFFSET`](#group__drivers__mtd__flashpage_1gab1f34903fa71682993c81e41546581d3) 

Default MTD offset for the AUX slot.

# struct `mtd_flashpage_t` 

MTD flashpage descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__flashpage__t_1a2c38b40b03850bab920d69898cb671a5) | MTD generic device.
`public uint32_t `[`offset`](#structmtd__flashpage__t_1aebc47f190b0f89f47e039de6c63cde99) | Offset in terms of MTD pages, which must comprise a whole number of sectors from the start of the flash.

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__flashpage__t_1a2c38b40b03850bab920d69898cb671a5) 

MTD generic device.

#### `public uint32_t `[`offset`](#structmtd__flashpage__t_1aebc47f190b0f89f47e039de6c63cde99) 

Offset in terms of MTD pages, which must comprise a whole number of sectors from the start of the flash.

