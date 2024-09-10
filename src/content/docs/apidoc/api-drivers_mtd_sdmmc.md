---
title: api-drivers_mtd_sdmmc.md
description: api-drivers_mtd_sdmmc.md
---
# group `drivers_mtd_sdmmc` 

Driver for SD Memory Cards and MMCs/eMMCs using the MTD interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`mtd_sdmmc_t`](#structmtd__sdmmc__t) | Device descriptor for a mtd_sdmmc device.

# struct `mtd_sdmmc_t` 

Device descriptor for a mtd_sdmmc device.

This is an extension of the `[mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__sdmmc__t_1a5618c99c788f1430a8bead86f989d9fb) | inherit [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object
`public `[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * `[`sdmmc`](#structmtd__sdmmc__t_1a4480226d4754e01efc29cff49b92fb66) | SD/MMC device descriptor.
`public uint8_t `[`sdmmc_idx`](#structmtd__sdmmc__t_1a398c69c7db498bb1398ef9cfad3030a1) | SD/MMC peripheral index

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__sdmmc__t_1a5618c99c788f1430a8bead86f989d9fb) 

inherit [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object

#### `public `[`sdmmc_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sdmmc_1ga4206719a0d914bba965b44c5e3aac18c)` * `[`sdmmc`](#structmtd__sdmmc__t_1a4480226d4754e01efc29cff49b92fb66) 

SD/MMC device descriptor.

#### `public uint8_t `[`sdmmc_idx`](#structmtd__sdmmc__t_1a398c69c7db498bb1398ef9cfad3030a1) 

SD/MMC peripheral index

