---
title: api-sys_littlefs2.md
description: api-sys_littlefs2.md
---
# group `sys_littlefs2` 

RIOT integration of littlefs version 2.x.y.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`littlefs2_desc_t`](#structlittlefs2__desc__t) | littlefs descriptor for vfs integration

# struct `littlefs2_desc_t` 

littlefs descriptor for vfs integration

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public lfs_t `[`fs`](#structlittlefs2__desc__t_1a636dffb47265d6947365b3d4f64e88a6) | littlefs descriptor
`public struct lfs_config `[`config`](#structlittlefs2__desc__t_1a62f8b085686e515cf417d0d67595e9a1) | littlefs config
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structlittlefs2__desc__t_1a1dc904f21404271f070b1b8a1d3ef1a6) | mtd device to use
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlittlefs2__desc__t_1ad8ce97dc3ff7670c6d340594843cef65) | mutex
`public uint32_t `[`base_addr`](#structlittlefs2__desc__t_1aa5cf39c2d21c6b32e601b65fe55dc930) | first block number to use, total number of block is defined in `config`.
`public uint8_t `[`file_buf`](#structlittlefs2__desc__t_1adced5d1963c08527abb5612941e4e355) | file buffer to use internally if CONFIG_LITTLEFS2_FILE_BUFFER_SIZE is set
`public uint8_t `[`read_buf`](#structlittlefs2__desc__t_1a9e09e14f5e5d141f8bcf0eb31b46e487) | read buffer to use internally if CONFIG_LITTLEFS2_READ_BUFFER_SIZE is set
`public uint8_t `[`prog_buf`](#structlittlefs2__desc__t_1ad68830a3535b76235a3ccaee44f67436) | prog buffer to use internally if CONFIG_LITTLEFS2_PROG_BUFFER_SIZE is set
`public uint8_t `[`lookahead_buf`](#structlittlefs2__desc__t_1a0ecc6f8c50fc344b5595419fd4203ac7) | lookahead buffer to use internally
`public uint16_t `[`sectors_per_block`](#structlittlefs2__desc__t_1a3e719b4d47661028fe0ab0f16ca3a826) | number of sectors per block

## Members

#### `public lfs_t `[`fs`](#structlittlefs2__desc__t_1a636dffb47265d6947365b3d4f64e88a6) 

littlefs descriptor

#### `public struct lfs_config `[`config`](#structlittlefs2__desc__t_1a62f8b085686e515cf417d0d67595e9a1) 

littlefs config

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structlittlefs2__desc__t_1a1dc904f21404271f070b1b8a1d3ef1a6) 

mtd device to use

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlittlefs2__desc__t_1ad8ce97dc3ff7670c6d340594843cef65) 

mutex

#### `public uint32_t `[`base_addr`](#structlittlefs2__desc__t_1aa5cf39c2d21c6b32e601b65fe55dc930) 

first block number to use, total number of block is defined in `config`.

if set to 0, the total number of sectors from the mtd is used

#### `public uint8_t `[`file_buf`](#structlittlefs2__desc__t_1adced5d1963c08527abb5612941e4e355) 

file buffer to use internally if CONFIG_LITTLEFS2_FILE_BUFFER_SIZE is set

#### `public uint8_t `[`read_buf`](#structlittlefs2__desc__t_1a9e09e14f5e5d141f8bcf0eb31b46e487) 

read buffer to use internally if CONFIG_LITTLEFS2_READ_BUFFER_SIZE is set

#### `public uint8_t `[`prog_buf`](#structlittlefs2__desc__t_1ad68830a3535b76235a3ccaee44f67436) 

prog buffer to use internally if CONFIG_LITTLEFS2_PROG_BUFFER_SIZE is set

#### `public uint8_t `[`lookahead_buf`](#structlittlefs2__desc__t_1a0ecc6f8c50fc344b5595419fd4203ac7) 

lookahead buffer to use internally

#### `public uint16_t `[`sectors_per_block`](#structlittlefs2__desc__t_1a3e719b4d47661028fe0ab0f16ca3a826) 

number of sectors per block

