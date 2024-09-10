---
title: api-sys_fs_constfs.md
description: api-sys_fs_constfs.md
---
# group `sys_fs_constfs` 

Constant file system resident in arrays.

This is an example of how to implement a simple file system driver for the RIOT VFS layer. The implementation uses an array of `[constfs_file_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_fs_constfs.md#structconstfs__file__t)` objects as its storage back-end.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`constfs_file_t`](#structconstfs__file__t) | A file in ConstFS (file name + contents)
`struct `[`constfs_t`](#structconstfs__t) | ConstFS file system superblock.

# struct `constfs_file_t` 

A file in ConstFS (file name + contents)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`path`](#structconstfs__file__t_1a6edcfa68f1a79db62249b3a074f1a153) | file system relative path to file
`public const size_t `[`size`](#structconstfs__file__t_1add5411b496fc42ec9af06a580b3bee9e) | length of `data`
`public const void * `[`data`](#structconstfs__file__t_1a16e1b7533a247a4fb49e2e295947665b) | pointer to file contents

## Members

#### `public const char * `[`path`](#structconstfs__file__t_1a6edcfa68f1a79db62249b3a074f1a153) 

file system relative path to file

#### `public const size_t `[`size`](#structconstfs__file__t_1add5411b496fc42ec9af06a580b3bee9e) 

length of `data`

#### `public const void * `[`data`](#structconstfs__file__t_1a16e1b7533a247a4fb49e2e295947665b) 

pointer to file contents

# struct `constfs_t` 

ConstFS file system superblock.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const size_t `[`nfiles`](#structconstfs__t_1a5f5d696514406f949adf2a2ea6d3c7ce) | Number of files.
`public const `[`constfs_file_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_fs_constfs.md#structconstfs__file__t)` * `[`files`](#structconstfs__t_1ad85440345f84f9a4ba0e1dede1a523c0) | Files array.

## Members

#### `public const size_t `[`nfiles`](#structconstfs__t_1a5f5d696514406f949adf2a2ea6d3c7ce) 

Number of files.

#### `public const `[`constfs_file_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_fs_constfs.md#structconstfs__file__t)` * `[`files`](#structconstfs__t_1ad85440345f84f9a4ba0e1dede1a523c0) 

Files array.

