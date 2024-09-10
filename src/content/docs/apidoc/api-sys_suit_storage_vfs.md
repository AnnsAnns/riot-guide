---
title: api-sys_suit_storage_vfs.md
description: api-sys_suit_storage_vfs.md
---
# group `sys_suit_storage_vfs` 

SUIT riotboot firmware storage backend.

VFS storage can service different files mounted on the filesystem. Serviceable FILES must be registered:

```cpp
#include "suit/storage/vfs.h"
#include "xfa.h"

XFA_USE(char*, suit_storage_files_reg);
XFA(suit_storage_files_reg, 0) char* _firmware_0 = VFS_DEFAULT_DATA "/FW0.TXT";
```

Once registered its content may be securely updated via SUIT by specifying the "install-id" as the filepath.

riotboot vfs storage backend functions for SUIT manifests Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SUIT_STORAGE_MOUNT_POINT`](#group__sys__suit__storage__vfs_1gabfd7837598cf8938d445bbe81201f2c5)            | Storage location string separators.
`define `[`CONFIG_SUIT_STORAGE_SEQ_NO_LOCATION`](#group__sys__suit__storage__vfs_1gad9501f16242d609c55dc4f4f20a1a253)            | Storage location string separators.
`struct `[`suit_storage_vfs_t`](#structsuit__storage__vfs__t) | riotboot vfs SUIT storage context

## Members

#### `define `[`CONFIG_SUIT_STORAGE_MOUNT_POINT`](#group__sys__suit__storage__vfs_1gabfd7837598cf8938d445bbe81201f2c5) 

Storage location string separators.

#### `define `[`CONFIG_SUIT_STORAGE_SEQ_NO_LOCATION`](#group__sys__suit__storage__vfs_1gad9501f16242d609c55dc4f4f20a1a253) 

Storage location string separators.

# struct `suit_storage_vfs_t` 

riotboot vfs SUIT storage context

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` `[`storage`](#structsuit__storage__vfs__t_1abda7238c9430610f0ac1d07e43490fc6) | parent struct
`public const char ** `[`files`](#structsuit__storage__vfs__t_1a7f0c5431dc20cfc8cb4faa022443e9a2) | storage file array
`public uint8_t `[`active_region`](#structsuit__storage__vfs__t_1aee826aa892d084485c613a351c44b54f) | Active file idx to write to.

## Members

#### `public `[`suit_storage_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit__storage_1ga03298711d23f61d14c2a44095fc9c3d0)` `[`storage`](#structsuit__storage__vfs__t_1abda7238c9430610f0ac1d07e43490fc6) 

parent struct

#### `public const char ** `[`files`](#structsuit__storage__vfs__t_1a7f0c5431dc20cfc8cb4faa022443e9a2) 

storage file array

#### `public uint8_t `[`active_region`](#structsuit__storage__vfs__t_1aee826aa892d084485c613a351c44b54f) 

Active file idx to write to.

