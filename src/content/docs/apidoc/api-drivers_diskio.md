---
title: api-drivers_diskio.md
description: api-drivers_diskio.md
---
# group `drivers_diskio` 

Low level disk interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`diskio_result_t`](#group__drivers__diskio_1ga1df4ff09a0b97fc244a8d4998d70f953)            | Results of Disk Functions.
`enum `[`diskio_sta_t`](#group__drivers__diskio_1ga881fb901d99e0dbaf5f6d4e154caeddb)            | Disk Status Bits.
`public void `[`copy_al2un`](#group__drivers__diskio_1ga7e3aeb67a5bbb66430df525a4edb4634)`(unsigned char * dst,const unsigned long * src,int count)`            | Copy aligned to unaligned.
`public void `[`copy_un2al`](#group__drivers__diskio_1ga16fd36d1e6aef59217f0b3703543aa93)`(unsigned long * dst,const unsigned char * src,int count)`            | Copy unaligned to aligned.

## Members

#### `enum `[`diskio_result_t`](#group__drivers__diskio_1ga1df4ff09a0b97fc244a8d4998d70f953) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DISKIO_RES_OK            | 0: Successful
DISKIO_RES_ERROR            | 1: R/W Error
DISKIO_RES_WRPRT            | 2: Write Protected
DISKIO_RES_NOTRDY            | 3: Not Ready
DISKIO_RES_PARERR            | 4: Invalid Parameter

Results of Disk Functions.

#### `enum `[`diskio_sta_t`](#group__drivers__diskio_1ga881fb901d99e0dbaf5f6d4e154caeddb) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DISKIO_STA_NOINIT            | Drive not initialized.
DISKIO_STA_NODISK            | No medium in the drive.
DISKIO_STA_PROTECT            | Write protected.

Disk Status Bits.

#### `public void `[`copy_al2un`](#group__drivers__diskio_1ga7e3aeb67a5bbb66430df525a4edb4634)`(unsigned char * dst,const unsigned long * src,int count)` 

Copy aligned to unaligned.

#### Parameters
* `dst` Pointer to unaligned destination address 

* `src` Pointer to aligned source address 

* `count` Number of bytes to copy

#### `public void `[`copy_un2al`](#group__drivers__diskio_1ga16fd36d1e6aef59217f0b3703543aa93)`(unsigned long * dst,const unsigned char * src,int count)` 

Copy unaligned to aligned.

#### Parameters
* `dst` Pointer to unaligned destination address 

* `src` Pointer to aligned source address 

* `count` Number of bytes to copy

