---
title: api-drivers_mtd_sdcard_config.md
description: api-drivers_mtd_sdcard_config.md
---
# group `drivers_mtd_sdcard_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_MTD_SDCARD_ERASE`](#group__drivers__mtd__sdcard__config_1ga9507b7d33583e17a0d3e844ff2d10ea6)            | Enable SDCard Erase.

## Members

#### `define `[`CONFIG_MTD_SDCARD_ERASE`](#group__drivers__mtd__sdcard__config_1ga9507b7d33583e17a0d3e844ff2d10ea6) 

Enable SDCard Erase.

SDCards handle sector erase internally so it's possible to directly write to the card without erasing the sector first. Attention: an erase call will therefore NOT touch the content, so enable this feature to ensure overriding the data.

This feature requires the `mtd_write_page` module.

