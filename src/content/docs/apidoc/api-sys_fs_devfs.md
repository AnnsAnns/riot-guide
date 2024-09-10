---
title: api-sys_fs_devfs.md
description: api-sys_fs_devfs.md
---
# group `sys_fs_devfs` 

Dynamic device file system.

This file system implementation allows devices to register file names for easier access to device drivers from shell commands etc.

The idea is similar to the /dev directory on Unix.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`devfs_register`](#group__sys__fs__devfs_1ga1e0f77661e8bdf3bf2a5f9325104c4a9)`(`[`devfs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__fs__devfs_1ga4f347349dd1c23bd43518b0af20b3754)` * node)`            | Register a node in DevFS.
`public int `[`devfs_unregister`](#group__sys__fs__devfs_1ga307941df64e6e9a4a5b62d85cbb768c0)`(`[`devfs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__fs__devfs_1ga4f347349dd1c23bd43518b0af20b3754)` * node)`            | Remove a registration from DevFS.
`struct `[`devfs`](#structdevfs) | A device "file" consists of a file name and an opaque pointer to device driver private data.

## Members

#### `public int `[`devfs_register`](#group__sys__fs__devfs_1ga1e0f77661e8bdf3bf2a5f9325104c4a9)`(`[`devfs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__fs__devfs_1ga4f347349dd1c23bd43518b0af20b3754)` * node)` 

Register a node in DevFS.

The node will immediately become available to `vfs_open`, if DevFS is already mounted somewhere.

If DevFS is not mounted, the node will be registered and will become available to `vfs_open` when DevFS is mounted.

#### Parameters
* `node` DevFS node to register

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`devfs_unregister`](#group__sys__fs__devfs_1ga307941df64e6e9a4a5b62d85cbb768c0)`(`[`devfs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__fs__devfs_1ga4f347349dd1c23bd43518b0af20b3754)` * node)` 

Remove a registration from DevFS.

The node will no longer be available to `vfs_open`, but any already opened FDs will remain open.

#### Parameters
* `node` DevFS node to unregister

#### Returns
0 on success 

#### Returns
<0 on error

# struct `devfs` 

A device "file" consists of a file name and an opaque pointer to device driver private data.

The file system is implemented as a linked list.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_entry`](#structdevfs_1af0779c5931bc06bab20154d59eb109ce) | List item entry.
`public const char * `[`path`](#structdevfs_1accee9ad266163e072cd40fc0413b9d99) | File system relative path to this node.
`public const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * `[`f_op`](#structdevfs_1ade6e5078051cae68faab99b7086975a0) | Pointer to file operations table for this device.
`public void * `[`private_data`](#structdevfs_1a50757d0ccef0e9304b8daa54f029201d) | Pointer to device driver specific data.

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_entry`](#structdevfs_1af0779c5931bc06bab20154d59eb109ce) 

List item entry.

#### `public const char * `[`path`](#structdevfs_1accee9ad266163e072cd40fc0413b9d99) 

File system relative path to this node.

#### `public const `[`vfs_file_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__vfs_1gaae22046871c456cbbd1bca6298766b68)` * `[`f_op`](#structdevfs_1ade6e5078051cae68faab99b7086975a0) 

Pointer to file operations table for this device.

#### `public void * `[`private_data`](#structdevfs_1a50757d0ccef0e9304b8daa54f029201d) 

Pointer to device driver specific data.

