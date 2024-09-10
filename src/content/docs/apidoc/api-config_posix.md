---
title: api-config_posix.md
description: api-config_posix.md
---
# group `config_posix` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_POSIX_FD_SET_SIZE`](#group__config__posix_1ga17dafc65c7c0270db741e474184b45fc)            | Maximum number of file descriptors in an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` structure.

## Members

#### `define `[`CONFIG_POSIX_FD_SET_SIZE`](#group__config__posix_1ga17dafc65c7c0270db741e474184b45fc) 

Maximum number of file descriptors in an `[fd_set](./doc/starlight-docs/src/content/docs/apidoc/api-posix_select.md#structfd__set)` structure.

Should have at least the same value as VFS_MAX_OPEN_FILES.

Config-exposed version

