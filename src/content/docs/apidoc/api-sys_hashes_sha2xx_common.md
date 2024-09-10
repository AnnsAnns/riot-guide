---
title: api-sys_hashes_sha2xx_common.md
description: api-sys_hashes_sha2xx_common.md
---
# group `sys_hashes_sha2xx_common` 

Implementation of common functionality for SHA-224/256 hashing functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`sha2xx_pad`](#group__sys__hashes__sha2xx__common_1ga5a006a449f72812b8e82122b560d4118)`(`[`sha2xx_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t)` * ctx)`            | SHA-2XX initialization.
`public void `[`sha2xx_update`](#group__sys__hashes__sha2xx__common_1ga9eaa53ba5f0912bfb409c482149ea2c4)`(`[`sha2xx_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public void `[`sha2xx_final`](#group__sys__hashes__sha2xx__common_1ga7c06b16cd80a746360e4a7d3dc48d83c)`(`[`sha2xx_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t)` * ctx,void * digest,size_t dig_len)`            | SHA-2XX finalization.
`struct `[`sha2xx_context_t`](#structsha2xx__context__t) | Structure to hold the SHA-2XX context.

## Members

#### `public void `[`sha2xx_pad`](#group__sys__hashes__sha2xx__common_1ga5a006a449f72812b8e82122b560d4118)`(`[`sha2xx_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t)` * ctx)` 

SHA-2XX initialization.

Begins a SHA-2XX operation.

#### Parameters
* `ctx` [sha2xx_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t) handle to init

#### `public void `[`sha2xx_update`](#group__sys__hashes__sha2xx__common_1ga9eaa53ba5f0912bfb409c482149ea2c4)`(`[`sha2xx_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` [sha2xx_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t) handle to use 

* `data` Input data 

* `len` Length of `data`

#### `public void `[`sha2xx_final`](#group__sys__hashes__sha2xx__common_1ga7c06b16cd80a746360e4a7d3dc48d83c)`(`[`sha2xx_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t)` * ctx,void * digest,size_t dig_len)` 

SHA-2XX finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` [sha2xx_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha2xx_common.md#structsha2xx__context__t) handle to use 

* `digest` resulting digest, this is the hash of all the bytes 

* `dig_len` Length of `digest`

# struct `sha2xx_context_t` 

Structure to hold the SHA-2XX context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`state`](#structsha2xx__context__t_1a95315cb9cf68d68766bee8ca46459619) | global state
`public uint32_t `[`count`](#structsha2xx__context__t_1af06946e61f18372af4c638706d32340c) | processed bits counter
`public unsigned char `[`buf`](#structsha2xx__context__t_1a579056ac9b516908bcd342a7349997bb) | data buffer

## Members

#### `public uint32_t `[`state`](#structsha2xx__context__t_1a95315cb9cf68d68766bee8ca46459619) 

global state

#### `public uint32_t `[`count`](#structsha2xx__context__t_1af06946e61f18372af4c638706d32340c) 

processed bits counter

#### `public unsigned char `[`buf`](#structsha2xx__context__t_1a579056ac9b516908bcd342a7349997bb) 

data buffer

