---
title: api-drivers_mtd_emulated.md
description: api-drivers_mtd_emulated.md
---
# group `drivers_mtd_emulated` 

MTD device that is emulated in RAM for test purposes.

Helpers for using emulated MTDs.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MTD_EMULATED_DEV`](#group__drivers__mtd__emulated_1gadd9c83e5bbb8813796af3b210feddea6)            | Macro to define an emulated MTD.
`define `[`MTD_EMULATED_DEV_FS`](#group__drivers__mtd__emulated_1ga4e69ecbc2bbd2cb0a2acfd142e6d4f20)            | Macro to define an automatic VFS mount point for an emulated MTD.
`struct `[`mtd_emulated_t`](#structmtd__emulated__t) | Device descriptor for a MTD device that is emulated in RAM.

## Members

#### `define `[`MTD_EMULATED_DEV`](#group__drivers__mtd__emulated_1gadd9c83e5bbb8813796af3b210feddea6) 

Macro to define an emulated MTD.

This macro creates a MTD device that is emulated in RAM. For example, using 
```cpp
MTD_EMULATED_DEV(0, 16, 4, 64)
```
 creates the emulated MTD device `mtd_emulated_dev0` with 16 sectors, 4 pages per sector and a page size of 64 bytes. The write size is always 1 byte.

The emulated devices are added to the XFA of MTD device pointers [mtd_dev_xfa](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mtd_1ga290552e29a4074f1b34c0067e39886df) with priority 99 to place them at the end of the XFA.

#### Parameters
* `n` index of the emulated MTD (results into symbol `mtd_emulated_dev<n>`) 

* `sc` sectors of the emulated MTD 

* `pps` pages per sector of the emulated MTD 

* `ps` page size in bytes

#### `define `[`MTD_EMULATED_DEV_FS`](#group__drivers__mtd__emulated_1ga4e69ecbc2bbd2cb0a2acfd142e6d4f20) 

Macro to define an automatic VFS mount point for an emulated MTD.

For example, using 
```cpp
MTD_EMULATED_DEV_FS(0, 2, fatfs);
```
 automatically mounts the emulated MTD `mtd_emulated_dev0` with FAT file system under mount point `/mtde0` with unique index 2.

#### Parameters
* `n` index of the emulated MTD (symbol `mtd_emulated_dev<n>`, mount point `/mtde0`) 

* `m` unique overall index of VFS mount point 

* `fs` filesystem type used

# struct `mtd_emulated_t` 

Device descriptor for a MTD device that is emulated in RAM.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__emulated__t_1a2eb017615eb92d8fd1af12be694cfe0b) | inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object
`public size_t `[`size`](#structmtd__emulated__t_1a7305a1e3297d549bf92163efa3d2b267) | total size of the MTD device in bytes
`public uint8_t * `[`memory`](#structmtd__emulated__t_1ab6db6f2abb8d8d8af97618e1b4b368cb) | RAM that is used for the emulated MTD device.
`public bool `[`init_done`](#structmtd__emulated__t_1a2696bfb56afedaf933db38c74ce56e3c) | indicates whether initialization is already done

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__emulated__t_1a2eb017615eb92d8fd1af12be694cfe0b) 

inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object

#### `public size_t `[`size`](#structmtd__emulated__t_1a7305a1e3297d549bf92163efa3d2b267) 

total size of the MTD device in bytes

#### `public uint8_t * `[`memory`](#structmtd__emulated__t_1ab6db6f2abb8d8d8af97618e1b4b368cb) 

RAM that is used for the emulated MTD device.

#### `public bool `[`init_done`](#structmtd__emulated__t_1a2696bfb56afedaf933db38c74ce56e3c) 

indicates whether initialization is already done

