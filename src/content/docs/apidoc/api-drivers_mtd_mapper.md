---
title: api-drivers_mtd_mapper.md
description: api-drivers_mtd_mapper.md
---
# group `drivers_mtd_mapper` 

Driver for address remap for flash devices.

This MTD module allows for remapping multiple different regions on a single MTD device and present them as separate MTD devices. This is similar to partitions on a hard drive, although this system only allows hardcoded partitions and lacks a partition table.

The use case for this module is to be able to split a single MTD device, for example a SPI NOR flash chip into multiple separate regions which all can contain their own content or file systems.

UsageTo use this module include it in your makefile:

```cpp
USEMODULE += mtd_mapper
```

To define new regions with an existing MTD device the following is required:

```cpp
mtd_mapper_parent_t parent = MTD_PARENT_INIT(MTD_0);

mtd_mapper_region_t region1 = {
    .mtd = {
        .driver = &mtd_mapper_driver,
        .sector_count = SECTOR_COUNT / 2,
        .pages_per_sector = PAGE_PER_SECTOR,
        .page_size = PAGE_SIZE,
        .write_size = WRITE_SIZE,
    },
    .parent = &parent,
    .sector = SECTOR_COUNT / 2
};

mtd_dev_t *dev = &region.mtd;
```
 The snippet here defines a region within an existing `MTD_0` device of half the size of `MTD_0` and starting in the middle of the device.

Please ensure that the different configured regions do not overlap.

Interface definitions for mtd mapper support

Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MTD_PARENT_INIT`](#group__drivers__mtd__mapper_1ga35f0f9dde0c457059a8b2d2f27b7a9c2)            | Shortcut macro for initializing the members of an [mtd_mapper_parent_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_mapper.md#structmtd__mapper__parent__t) struct.
`struct `[`mtd_mapper_parent_t`](#structmtd__mapper__parent__t) | MTD mapper backing device context.
`struct `[`mtd_mapper_region_t`](#structmtd__mapper__region__t) | MTD mapped region.

## Members

#### `define `[`MTD_PARENT_INIT`](#group__drivers__mtd__mapper_1ga35f0f9dde0c457059a8b2d2f27b7a9c2) 

Shortcut macro for initializing the members of an [mtd_mapper_parent_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_mapper.md#structmtd__mapper__parent__t) struct.

# struct `mtd_mapper_parent_t` 

MTD mapper backing device context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`mtd`](#structmtd__mapper__parent__t_1a6eebd917d225cc69a08d58b12afe3e09) | Parent MTD device.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structmtd__mapper__parent__t_1a2d49e3fc62a91aeec11e24377eb5d2ac) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for guarding the backing device access.
`public bool `[`init`](#structmtd__mapper__parent__t_1a970e062970b71ec6bc851edf887111bd) | Initialization flag.

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`mtd`](#structmtd__mapper__parent__t_1a6eebd917d225cc69a08d58b12afe3e09) 

Parent MTD device.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structmtd__mapper__parent__t_1a2d49e3fc62a91aeec11e24377eb5d2ac) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for guarding the backing device access.

#### `public bool `[`init`](#structmtd__mapper__parent__t_1a970e062970b71ec6bc851edf887111bd) 

Initialization flag.

# struct `mtd_mapper_region_t` 

MTD mapped region.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`mtd`](#structmtd__mapper__region__t_1a9edb672928d4f2d89ad18c8a03f389b1) | MTD context
`public `[`mtd_mapper_parent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_mapper.md#structmtd__mapper__parent__t)` * `[`parent`](#structmtd__mapper__region__t_1a5dacd4a9d652d854a10004b0bc558fa6) | MTD mapper parent device
`public uint32_t `[`sector`](#structmtd__mapper__region__t_1af913e85e666d40bcdbc758baec8bc0e9) | first sector of the region

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`mtd`](#structmtd__mapper__region__t_1a9edb672928d4f2d89ad18c8a03f389b1) 

MTD context

#### `public `[`mtd_mapper_parent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd_mapper.md#structmtd__mapper__parent__t)` * `[`parent`](#structmtd__mapper__region__t_1a5dacd4a9d652d854a10004b0bc558fa6) 

MTD mapper parent device

#### `public uint32_t `[`sector`](#structmtd__mapper__region__t_1af913e85e666d40bcdbc758baec8bc0e9) 

first sector of the region

