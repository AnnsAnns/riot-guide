---
title: api-sys_lwext4.md
description: api-sys_lwext4.md
---
# group `sys_lwext4` 

RIOT integration of lwEXT4.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`lwext4_desc_t`](#structlwext4__desc__t) | lwext4 descriptor for vfs integration

# struct `lwext4_desc_t` 

lwext4 descriptor for vfs integration

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct ext4_mountpoint `[`mp`](#structlwext4__desc__t_1aff0812a07dc5e1072d937adc81f102a9) | lwext4 mountpoint struct
`public struct ext4_blockdev `[`bdev`](#structlwext4__desc__t_1a29f42d62242291c62288b098e76de963) | lwext4 block device struct
`public struct ext4_blockdev_iface `[`iface`](#structlwext4__desc__t_1a86806457f75cf244f8d72c1633ad65c6) | lwext4 block device interface
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structlwext4__desc__t_1a696eaf9efb7b69456c141e2ce9c7584c) | mtd device to use
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlwext4__desc__t_1a44bd9e739770217d8b113f6c1ba3368d) | mutex

## Members

#### `public struct ext4_mountpoint `[`mp`](#structlwext4__desc__t_1aff0812a07dc5e1072d937adc81f102a9) 

lwext4 mountpoint struct

#### `public struct ext4_blockdev `[`bdev`](#structlwext4__desc__t_1a29f42d62242291c62288b098e76de963) 

lwext4 block device struct

#### `public struct ext4_blockdev_iface `[`iface`](#structlwext4__desc__t_1a86806457f75cf244f8d72c1633ad65c6) 

lwext4 block device interface

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` * `[`dev`](#structlwext4__desc__t_1a696eaf9efb7b69456c141e2ce9c7584c) 

mtd device to use

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlwext4__desc__t_1a44bd9e739770217d8b113f6c1ba3368d) 

mutex

