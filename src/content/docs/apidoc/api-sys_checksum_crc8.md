---
title: api-sys_checksum_crc8.md
description: api-sys_checksum_crc8.md
---
# group `sys_checksum_crc8` 

CRC-8 checksum algorithms.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`crc8`](#group__sys__checksum__crc8_1gabefdc526b1396faf2185bf58bd675109)`(const uint8_t * data,size_t len,uint8_t poly,uint8_t seed)`            | Calculate CRC-8.

## Members

#### `public uint8_t `[`crc8`](#group__sys__checksum__crc8_1gabefdc526b1396faf2185bf58bd675109)`(const uint8_t * data,size_t len,uint8_t poly,uint8_t seed)` 

Calculate CRC-8.

#### Parameters
* `data` Start of memory area to checksum 

* `len` Number of bytes in `buf` to calculate checksum for 

* `poly` The generator polynomial for the checksum 

* `seed` The seed (starting value) for the checksum

Reflected inputs or outputs and final XOR must be realized by the caller if needed.

#### Returns
Checksum of the specified memory area.

