---
title: api-drivers_mtd_sam0_sdhc.md
description: api-drivers_mtd_sam0_sdhc.md
---
# group `drivers_mtd_sam0_sdhc` 

Driver for SD Cards connected to the SAM0 SDHC peripheral using the MTD interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`mtd_sam0_sdhc_t`](#structmtd__sam0__sdhc__t) | Device descriptor for mtd_sdcard device.

# struct `mtd_sam0_sdhc_t` 

Device descriptor for mtd_sdcard device.

This is an extension of the `[mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__sam0__sdhc__t_1a745cf60c9293e62e8b6a7482b107649f) | inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object
`public `[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` `[`state`](#structmtd__sam0__sdhc__t_1a3dba1220fe8f50e01f5da67f49984af9) | sdcard_spi dev descriptor

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__sam0__sdhc__t_1a745cf60c9293e62e8b6a7482b107649f) 

inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object

#### `public `[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` `[`state`](#structmtd__sam0__sdhc__t_1a3dba1220fe8f50e01f5da67f49984af9) 

sdcard_spi dev descriptor

