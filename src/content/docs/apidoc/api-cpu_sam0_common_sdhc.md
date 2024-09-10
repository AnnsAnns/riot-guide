---
title: api-cpu_sam0_common_sdhc.md
description: api-cpu_sam0_common_sdhc.md
---
# group `cpu_sam0_common_sdhc` 

SD card interface functions for sam0 class devices.

This driver is deprecated. Use the `sdmmc` driver module instead. You can refer to the `same54-xpro´ board as an example on how to use it.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SD_MMC_BLOCK_SIZE`](#group__cpu__sam0__common__sdhc_1gab6ff7ea8e66efbfd90d8b809fefff1e4)            | This SD stack uses the maximum block size authorized (512 bytes)
`define `[`SDHC_SLOW_CLOCK_HZ`](#group__cpu__sam0__common__sdhc_1ga67b30f54001ffe32553fe18a6d35c44f)            | Clock frequency on init.
`define `[`SDHC_FAST_CLOCK_HZ`](#group__cpu__sam0__common__sdhc_1ga10c50bd3a30fbef93cb9db33e4f56df9)            | Clock frequency after init.
`public int `[`sdhc_init`](#group__cpu__sam0__common__sdhc_1gae81f68e7e32cb426b01798a868fa89fe)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state)`            | Initialize the SD host controller.
`public bool `[`sdhc_send_cmd`](#group__cpu__sam0__common__sdhc_1gabfa4f7812d0fc37dc529e90d0f0c24a2)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t cmd,uint32_t arg)`            | Send a command to the SD card.
`public int `[`sdhc_read_blocks`](#group__cpu__sam0__common__sdhc_1gafafab6bb494bfdc5a2ec02674fb5be7c)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t block,void * dst,uint16_t num)`            | Read blocks from the SD card into memory.
`public int `[`sdhc_write_blocks`](#group__cpu__sam0__common__sdhc_1ga0a0badb145e55ecc3c3a694a4f32f7b5)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t block,const void * src,uint16_t num)`            | Write memory to SD card blocks.
`public int `[`sdhc_erase_blocks`](#group__cpu__sam0__common__sdhc_1gacecfff5aff12ab20695252e1648b1b56)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t block,uint16_t num)`            | Erase memory from SD card blocks.
`struct `[`sdhc_state_t`](#structsdhc__state__t) | SD Card driver context.

## Members

#### `define `[`SD_MMC_BLOCK_SIZE`](#group__cpu__sam0__common__sdhc_1gab6ff7ea8e66efbfd90d8b809fefff1e4) 

This SD stack uses the maximum block size authorized (512 bytes)

SD card block size

#### `define `[`SDHC_SLOW_CLOCK_HZ`](#group__cpu__sam0__common__sdhc_1ga67b30f54001ffe32553fe18a6d35c44f) 

Clock frequency on init.

#### `define `[`SDHC_FAST_CLOCK_HZ`](#group__cpu__sam0__common__sdhc_1ga10c50bd3a30fbef93cb9db33e4f56df9) 

Clock frequency after init.

#### `public int `[`sdhc_init`](#group__cpu__sam0__common__sdhc_1gae81f68e7e32cb426b01798a868fa89fe)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state)` 

Initialize the SD host controller.

#### Parameters
* `state` driver context

#### Returns
int 0 on success, error otherwise

#### `public bool `[`sdhc_send_cmd`](#group__cpu__sam0__common__sdhc_1gabfa4f7812d0fc37dc529e90d0f0c24a2)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t cmd,uint32_t arg)` 

Send a command to the SD card.

#### Parameters
* `state` driver context 

* `cmd` the command code 

* `arg` command argument

#### Returns
true command was successful 

#### Returns
false command returned error

#### `public int `[`sdhc_read_blocks`](#group__cpu__sam0__common__sdhc_1gafafab6bb494bfdc5a2ec02674fb5be7c)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t block,void * dst,uint16_t num)` 

Read blocks from the SD card into memory.

Reads n 512 byte blocks from the SD card

#### Parameters
* `state` driver context 

* `block` block number to read from 

* `dst` destination address 

* `num` number of blocks to read

#### Returns
0 if success, negative error if failed

#### `public int `[`sdhc_write_blocks`](#group__cpu__sam0__common__sdhc_1ga0a0badb145e55ecc3c3a694a4f32f7b5)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t block,const void * src,uint16_t num)` 

Write memory to SD card blocks.

Writes n 512 bytes blocks on the SD card

#### Parameters
* `state` driver context 

* `block` block number to write to 

* `src` pointer to memory to write 

* `num` number of blocks to write

#### Returns
0 if success, negative error if failed

#### `public int `[`sdhc_erase_blocks`](#group__cpu__sam0__common__sdhc_1gacecfff5aff12ab20695252e1648b1b56)`(`[`sdhc_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_sam0_common_sdhc.md#structsdhc__state__t)` * state,uint32_t block,uint16_t num)` 

Erase memory from SD card blocks.

Erases n 512 byte blocks on the SD card

#### Parameters
* `state` driver context 

* `block` first block number to erase 

* `num` number of blocks to erase

#### Returns
0 if success, negative error if failed

# struct `sdhc_state_t` 

SD Card driver context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public Sdhc * `[`dev`](#structsdhc__state__t_1adc8d71244c278bfdae9d3871ec13f24b) | SDHC instance
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cd`](#structsdhc__state__t_1abae54377b31f8ff7b399a3e75470c14e) | Card detect pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`wp`](#structsdhc__state__t_1aa50f8c2dfac9455122edd7383498b8e8) | Write Protect pin
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structsdhc__state__t_1ae74b39bf935dafe2419bf438c94ccd06) | Ensure thread-safe access
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`sync`](#structsdhc__state__t_1abf145746a15fa98a79f37846e7489dce) | ISR mutex
`public uint32_t `[`sectors`](#structsdhc__state__t_1ab42f196860c278d9c3b0c74041cd8677) | Capacity in bytes
`public uint32_t `[`clock`](#structsdhc__state__t_1ace80dc58e87fc653835d8db4e8a04bf5) | Accepted Cloc Rate in Hz
`public uint16_t `[`rca`](#structsdhc__state__t_1ac476c29fe5d29a049e4ac134171300ff) | Relative Card Address
`public uint16_t `[`error`](#structsdhc__state__t_1a16754e2f5f1c8c01dd41ec35bb2796eb) | Last error state
`public uint8_t `[`type`](#structsdhc__state__t_1a437eda1159b788e7d7c606e5f9d5415c) | Type of Card
`public uint8_t `[`version`](#structsdhc__state__t_1a72604505671ec13a5aa898a678f6ae4a) | Version of Card
`public uint8_t `[`bus_width`](#structsdhc__state__t_1a706478a31bca8e8144e06c806e2582ca) | Acceptable Bus Width (1 or 4)
`public bool `[`high_speed`](#structsdhc__state__t_1af3243bddb2b38865686b749d1a78060d) | Turbo mode
`public bool `[`need_init`](#structsdhc__state__t_1a1788ab6f4fead51bf646959b64ea9d96) | Card installed but not initialized if true.

## Members

#### `public Sdhc * `[`dev`](#structsdhc__state__t_1adc8d71244c278bfdae9d3871ec13f24b) 

SDHC instance

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cd`](#structsdhc__state__t_1abae54377b31f8ff7b399a3e75470c14e) 

Card detect pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`wp`](#structsdhc__state__t_1aa50f8c2dfac9455122edd7383498b8e8) 

Write Protect pin

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structsdhc__state__t_1ae74b39bf935dafe2419bf438c94ccd06) 

Ensure thread-safe access

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`sync`](#structsdhc__state__t_1abf145746a15fa98a79f37846e7489dce) 

ISR mutex

#### `public uint32_t `[`sectors`](#structsdhc__state__t_1ab42f196860c278d9c3b0c74041cd8677) 

Capacity in bytes

#### `public uint32_t `[`clock`](#structsdhc__state__t_1ace80dc58e87fc653835d8db4e8a04bf5) 

Accepted Cloc Rate in Hz

#### `public uint16_t `[`rca`](#structsdhc__state__t_1ac476c29fe5d29a049e4ac134171300ff) 

Relative Card Address

#### `public uint16_t `[`error`](#structsdhc__state__t_1a16754e2f5f1c8c01dd41ec35bb2796eb) 

Last error state

#### `public uint8_t `[`type`](#structsdhc__state__t_1a437eda1159b788e7d7c606e5f9d5415c) 

Type of Card

#### `public uint8_t `[`version`](#structsdhc__state__t_1a72604505671ec13a5aa898a678f6ae4a) 

Version of Card

#### `public uint8_t `[`bus_width`](#structsdhc__state__t_1a706478a31bca8e8144e06c806e2582ca) 

Acceptable Bus Width (1 or 4)

#### `public bool `[`high_speed`](#structsdhc__state__t_1af3243bddb2b38865686b749d1a78060d) 

Turbo mode

#### `public bool `[`need_init`](#structsdhc__state__t_1a1788ab6f4fead51bf646959b64ea9d96) 

Card installed but not initialized if true.

