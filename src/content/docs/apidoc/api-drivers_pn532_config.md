---
title: api-drivers_pn532_config.md
description: api-drivers_pn532_config.md
---
# group `drivers_pn532_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_PN532_BUFFER_LEN`](#group__drivers__pn532__config_1ga360b169524c8dc0d5579640ee412ab8b)            | Internal buffer size.

## Members

#### `define `[`CONFIG_PN532_BUFFER_LEN`](#group__drivers__pn532__config_1ga360b169524c8dc0d5579640ee412ab8b) 

Internal buffer size.

A small buffer size is enough for most applications, however if large NDEF files are to be written this size shall be increased. Otherwise the files can be written in chunks.

