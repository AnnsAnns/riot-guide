---
title: api-sys_littlefs.md
description: api-sys_littlefs.md
---
# group `sys_littlefs` 

RIOT integration of littlefs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`littlefs_desc_t`](#structlittlefs__desc__t) | littlefs descriptor for vfs integration

# struct `littlefs_desc_t` 

littlefs descriptor for vfs integration

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public lfs_t `[`fs`](#structlittlefs__desc__t_1a02b53131c0ff70a7b08aa745f2cb9c71) | littlefs descriptor
`public struct lfs_config `[`config`](#structlittlefs__desc__t_1a98885a85a888f22cd75cea0232c9d980) | littlefs config
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structlittlefs__desc__t_1a994c3d3fe3bf612dec572f7c1a6b7d6c) | mtd device to use
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlittlefs__desc__t_1aabd528286119e1c7780d0c406f4e6cfe) | mutex
`public uint32_t `[`base_addr`](#structlittlefs__desc__t_1ac01d5640194e4296b35060ad8586b619) | first block number to use, total number of block is defined in `config`.
`public uint8_t `[`file_buf`](#structlittlefs__desc__t_1aa83c7a168d678aa334134395890eb3fd) | file buffer to use internally if LITTLEFS_FILE_BUFFER_SIZE is set
`public uint8_t `[`read_buf`](#structlittlefs__desc__t_1ac51262d8335f16b094b81689dc59aa00) | read buffer to use internally if LITTLEFS_READ_BUFFER_SIZE is set
`public uint8_t `[`prog_buf`](#structlittlefs__desc__t_1a3252238c74d645ecccbb512cd911b910) | prog buffer to use internally if LITTLEFS_PROG_BUFFER_SIZE is set
`public uint8_t `[`lookahead_buf`](#structlittlefs__desc__t_1aa8e4dbf12ac1adaf40148363c97ebe14) | lookahead buffer to use internally
`public uint16_t `[`sectors_per_block`](#structlittlefs__desc__t_1a8fae9b5bccbd5d8df4cac051153141f0) | number of sectors per block

## Members

#### `public lfs_t `[`fs`](#structlittlefs__desc__t_1a02b53131c0ff70a7b08aa745f2cb9c71) 

littlefs descriptor

#### `public struct lfs_config `[`config`](#structlittlefs__desc__t_1a98885a85a888f22cd75cea0232c9d980) 

littlefs config

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structlittlefs__desc__t_1a994c3d3fe3bf612dec572f7c1a6b7d6c) 

mtd device to use

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlittlefs__desc__t_1aabd528286119e1c7780d0c406f4e6cfe) 

mutex

#### `public uint32_t `[`base_addr`](#structlittlefs__desc__t_1ac01d5640194e4296b35060ad8586b619) 

first block number to use, total number of block is defined in `config`.

if set to 0, the total number of sectors from the mtd is used

#### `public uint8_t `[`file_buf`](#structlittlefs__desc__t_1aa83c7a168d678aa334134395890eb3fd) 

file buffer to use internally if LITTLEFS_FILE_BUFFER_SIZE is set

#### `public uint8_t `[`read_buf`](#structlittlefs__desc__t_1ac51262d8335f16b094b81689dc59aa00) 

read buffer to use internally if LITTLEFS_READ_BUFFER_SIZE is set

#### `public uint8_t `[`prog_buf`](#structlittlefs__desc__t_1a3252238c74d645ecccbb512cd911b910) 

prog buffer to use internally if LITTLEFS_PROG_BUFFER_SIZE is set

#### `public uint8_t `[`lookahead_buf`](#structlittlefs__desc__t_1aa8e4dbf12ac1adaf40148363c97ebe14) 

lookahead buffer to use internally

#### `public uint16_t `[`sectors_per_block`](#structlittlefs__desc__t_1a8fae9b5bccbd5d8df4cac051153141f0) 

number of sectors per block

