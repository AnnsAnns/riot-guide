---
title: api-sys_checksum_crc32.md
description: api-sys_checksum_crc32.md
---
# group `sys_checksum_crc32` 

CRC32 checksum algorithm implementation according to IEEE standards.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`crc32`](#group__sys__checksum__crc32_1gae1ce21755b99c89f626605a5814419d4)`(const void * buf,size_t size)`            | CRC-32 checksum.

## Members

#### `public uint32_t `[`crc32`](#group__sys__checksum__crc32_1gae1ce21755b99c89f626605a5814419d4)`(const void * buf,size_t size)` 

CRC-32 checksum.

Uses the `0xedb88320` polynomial

enable the `crc32_fast` module for a look-up table based implementation that trades code size for speed.

#### Parameters
* `buf` The data to checksum 

* `size` Length of the data in bytes

#### Returns
32 bit sized hash in the interval [0..2^32]

