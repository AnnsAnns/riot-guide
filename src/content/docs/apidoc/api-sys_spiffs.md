---
title: api-sys_spiffs.md
description: api-sys_spiffs.md
---
# group `sys_spiffs` 

RIOT integration of SPIFFS.

The RIOT integration of SPIFFS follows the SPIFFS wiki: [https://github.com/pellepl/spiffs/wiki/Integrate-spiffs#integrating-spiffs](https://github.com/pellepl/spiffs/wiki/Integrate-spiffs#integrating-spiffs)

The RIOT integration uses by default the `SPIFFS_HAL_CALLBACK_EXTRA` option and needs a `mtd` device, passed as [spiffs_desc_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-sys_spiffs.md#structspiffs__desc_1a82ba16935f182e8e8a972b5bd3d8a42d).

If one disable `SPIFFS_HAL_CALLBACK_EXTRA`, the mtd device is passed through the `SPIFFS_MTD_DEV` macro as a `[mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` pointer.

Note that only one filesystem can be used if `SPIFFS_HAL_CALLBACK_EXTRA` is disabled.

`SPIFFS_SINGLETON` is disabled by default, the memory layout is retrieved from the `mtd` device used. If `SPIFFS_SINGLETON` is enabled, the proper SPIFFS variables must be set (see [spiffs_config.h](#spiffs__config_8h_source) from SPIFFS).

The default integration enable `SPIFFS_CACHE` and uses the macro `SPIFFS_FS_CACHE_SIZE` as cache size.

`SPIFFS_LOCK` and `SPIFFS_UNLOCK` are also defined in the RIOT custom [spiffs_config.h](#spiffs__config_8h_source) to use `[spiffs_lock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__spiffs_1ga825caad82600bd5a02a01b09f20b8e6d)` and `[spiffs_unlock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__spiffs_1gadf1fb61c4f6825eff1ea40682ccd7759)`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SPIFFS_DIR_SIZE`](#group__sys__spiffs_1gadb48720cea9c2f4bbfcf800cda113461)            | Size of the buffer needed for directory.
`public void `[`spiffs_lock`](#group__sys__spiffs_1ga825caad82600bd5a02a01b09f20b8e6d)`(struct spiffs_t * fs)`            | SPIFFS lock function.
`public void `[`spiffs_unlock`](#group__sys__spiffs_1gadf1fb61c4f6825eff1ea40682ccd7759)`(struct spiffs_t * fs)`            | SPIFFS unlock function.
`struct `[`spiffs_desc`](#structspiffs__desc) | This contains everything needed to run an instance of SPIFFS.

## Members

#### `define `[`SPIFFS_DIR_SIZE`](#group__sys__spiffs_1gadb48720cea9c2f4bbfcf800cda113461) 

Size of the buffer needed for directory.

#### `public void `[`spiffs_lock`](#group__sys__spiffs_1ga825caad82600bd5a02a01b09f20b8e6d)`(struct spiffs_t * fs)` 

SPIFFS lock function.

This function must be used by `SPIFFS_LOCK` to lock the file system using the [spiffs_desc_t::lock](./doc/starlight-docs/src/content/docs/apidoc/api-sys_spiffs.md#structspiffs__desc_1a1c104774625a85222529e2054890772b).

#### Parameters
* `fs` spiffs descriptor

#### `public void `[`spiffs_unlock`](#group__sys__spiffs_1gadf1fb61c4f6825eff1ea40682ccd7759)`(struct spiffs_t * fs)` 

SPIFFS unlock function.

This function must be used by `SPIFFS_UNLOCK` to lock the file system using the [spiffs_desc_t::lock](./doc/starlight-docs/src/content/docs/apidoc/api-sys_spiffs.md#structspiffs__desc_1a1c104774625a85222529e2054890772b).

#### Parameters
* `fs` spiffs descriptor

# struct `spiffs_desc` 

This contains everything needed to run an instance of SPIFFS.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public spiffs `[`fs`](#structspiffs__desc_1a93a1b3e5cfcbf48446c612b1bf25181b) | The SPIFFS struct.
`public uint8_t `[`work`](#structspiffs__desc_1a3dd15fdbb67fda86a8b4004fda5d3a23) | SPIFFS work buffer.
`public uint8_t `[`fd_space`](#structspiffs__desc_1ad19efa5f75d512c0fbbb628980a55eb1) | SPIFFS file descriptor cache.
`public uint8_t `[`cache`](#structspiffs__desc_1a80f08615d012ea1c0d695b0820df093f) | SPIFFS cache.
`public spiffs_config `[`config`](#structspiffs__desc_1a2509a59949d0c2084579f98a76fb4325) | SPIFFS config, filled at mount time depending on the underlying mtdi_dev_t `dev`.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structspiffs__desc_1a1c104774625a85222529e2054890772b) | A lock for SPIFFS internal use.
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structspiffs__desc_1a82ba16935f182e8e8a972b5bd3d8a42d) | The underlying mtd device, must be set by user.
`public uint32_t `[`base_addr`](#structspiffs__desc_1acb1d5219db11e4dc5f30243af4f40a72) | Base address of partition.
`public uint32_t `[`block_count`](#structspiffs__desc_1a67c83ad71abc46e644218950bda1116d) | Number of blocks in current partition, if 0, the mtd number of sector is used.

## Members

#### `public spiffs `[`fs`](#structspiffs__desc_1a93a1b3e5cfcbf48446c612b1bf25181b) 

The SPIFFS struct.

#### `public uint8_t `[`work`](#structspiffs__desc_1a3dd15fdbb67fda86a8b4004fda5d3a23) 

SPIFFS work buffer.

#### `public uint8_t `[`fd_space`](#structspiffs__desc_1ad19efa5f75d512c0fbbb628980a55eb1) 

SPIFFS file descriptor cache.

#### `public uint8_t `[`cache`](#structspiffs__desc_1a80f08615d012ea1c0d695b0820df093f) 

SPIFFS cache.

#### `public spiffs_config `[`config`](#structspiffs__desc_1a2509a59949d0c2084579f98a76fb4325) 

SPIFFS config, filled at mount time depending on the underlying mtdi_dev_t `dev`.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structspiffs__desc_1a1c104774625a85222529e2054890772b) 

A lock for SPIFFS internal use.

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structspiffs__desc_1a82ba16935f182e8e8a972b5bd3d8a42d) 

The underlying mtd device, must be set by user.

#### `public uint32_t `[`base_addr`](#structspiffs__desc_1acb1d5219db11e4dc5f30243af4f40a72) 

Base address of partition.

#### `public uint32_t `[`block_count`](#structspiffs__desc_1a67c83ad71abc46e644218950bda1116d) 

Number of blocks in current partition, if 0, the mtd number of sector is used.

