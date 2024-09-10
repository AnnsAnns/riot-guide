---
title: api-drivers_mtd_sdcard.md
description: api-drivers_mtd_sdcard.md
---
# group `drivers_mtd_sdcard` 

Driver for SPI SD Cards using the MTD interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`mtd_sdcard_t`](#structmtd__sdcard__t) | Device descriptor for mtd_sdcard device.

# struct `mtd_sdcard_t` 

Device descriptor for mtd_sdcard device.

This is an extension of the `[mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__sdcard__t_1a5031f36eda4f6a2d654e525fde1e63f6) | inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object
`public `[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * `[`sd_card`](#structmtd__sdcard__t_1a9a4ad97f8f094b7dd7805394513be394) | sdcard_spi dev descriptor
`public const `[`sdcard_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__params__t)` * `[`params`](#structmtd__sdcard__t_1a074fdf961968bd58642c821c23ab26c8) | params for sdcard_spi init

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__sdcard__t_1a5031f36eda4f6a2d654e525fde1e63f6) 

inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object

#### `public `[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` * `[`sd_card`](#structmtd__sdcard__t_1a9a4ad97f8f094b7dd7805394513be394) 

sdcard_spi dev descriptor

#### `public const `[`sdcard_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__params__t)` * `[`params`](#structmtd__sdcard__t_1a074fdf961968bd58642c821c23ab26c8) 

params for sdcard_spi init

