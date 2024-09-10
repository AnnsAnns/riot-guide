---
title: api-drivers_eeprom_native.md
description: api-drivers_eeprom_native.md
---
# group `drivers_eeprom_native` 

Implementation of EEPROM buffer persistence in file.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`EEPROM_FILEPATH_MAX_LEN`](#group__drivers__eeprom__native_1ga995886705770e079ba074d34b9df5d30)            | Maximum path len to store the EEPROM filepath.
`public void `[`eeprom_native_read`](#group__drivers__eeprom__native_1ga3a708bf0185cb83447dcd1d2b06e5cc9)`(void)`            | Read the configured file containing the EEPROM content.

## Members

#### `define `[`EEPROM_FILEPATH_MAX_LEN`](#group__drivers__eeprom__native_1ga995886705770e079ba074d34b9df5d30) 

Maximum path len to store the EEPROM filepath.

#### `public void `[`eeprom_native_read`](#group__drivers__eeprom__native_1ga3a708bf0185cb83447dcd1d2b06e5cc9)`(void)` 

Read the configured file containing the EEPROM content.

This function is called once during the native instance startup.

The file can be configured in a macro `EPPROM_FILE` via CFLAGS.

