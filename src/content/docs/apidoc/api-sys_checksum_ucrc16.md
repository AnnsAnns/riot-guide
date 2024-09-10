---
title: api-sys_checksum_ucrc16.md
description: api-sys_checksum_ucrc16.md
---
# group `sys_checksum_ucrc16` 

Lightweight CRC16 checksum algorithms.

This CRC16 implementation does not use pre-calculated lookup tables and is thus very lightweight (memory-wise), but as a caveat slower (about factor 8) than the version with pre-calculated lookup tables.

Additionally compared to [CRC16-CCITT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt) this is a generalized implementation. One can easily exchange generator polynomials and starting seeds.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`ucrc16_calc_be`](#group__sys__checksum__ucrc16_1gad3bad50551be283fc86ecad312f02bba)`(const uint8_t * buf,size_t len,uint16_t poly,uint16_t seed)`            | Calculate CRC16 (big-endian version)
`public uint16_t `[`ucrc16_calc_le`](#group__sys__checksum__ucrc16_1gab797e0e7deed14186860a02639196710)`(const uint8_t * buf,size_t len,uint16_t poly,uint16_t seed)`            | Calculate CRC16 (little-endian version)

## Members

#### `public uint16_t `[`ucrc16_calc_be`](#group__sys__checksum__ucrc16_1gad3bad50551be283fc86ecad312f02bba)`(const uint8_t * buf,size_t len,uint16_t poly,uint16_t seed)` 

Calculate CRC16 (big-endian version)

#### Parameters
* `buf` Start of memory are to checksum 

* `len` Number of bytes in `buf` to calculate checksum for 

* `poly` The generator polynomial for the checksum 

* `seed` The seed (starting value) for the checksum

#### Returns
Checksum of the specified memory area based on `seed` and `poly`

The return value is not the complement of the sum but the sum itself

#### `public uint16_t `[`ucrc16_calc_le`](#group__sys__checksum__ucrc16_1gab797e0e7deed14186860a02639196710)`(const uint8_t * buf,size_t len,uint16_t poly,uint16_t seed)` 

Calculate CRC16 (little-endian version)

#### Parameters
* `buf` Start of memory are to checksum 

* `len` Number of bytes in `buf` to calculate checksum for 

* `poly` The generator polynomial for the checksum 

* `seed` The seed (starting value) for the checksum

#### Returns
Checksum of the specified memory area based on `seed` and `poly`

The return value is not the complement of the sum but the sum itself

