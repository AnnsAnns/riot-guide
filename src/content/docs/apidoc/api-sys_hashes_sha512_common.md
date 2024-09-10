---
title: api-sys_hashes_sha512_common.md
description: api-sys_hashes_sha512_common.md
---
# group `sys_hashes_sha512_common` 

Implementation of common functionality for SHA-512 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`sha512_common_pad`](#group__sys__hashes__sha512__common_1ga14f8247ad8fcd0e0b6d7d7dec3003465)`(`[`sha512_common_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t)` * ctx)`            | SHA-512 initialization.
`public void `[`sha512_common_update`](#group__sys__hashes__sha512__common_1ga30cf0643e914ab1be173d82b8673090a)`(`[`sha512_common_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public void `[`sha512_common_final`](#group__sys__hashes__sha512__common_1ga4005adf1f25e1f491d28f1b289815fb0)`(`[`sha512_common_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t)` * ctx,void * digest,size_t dig_len)`            | SHA-512 finalization.
`struct `[`sha512_common_context_t`](#structsha512__common__context__t) | Structure to hold the SHA-512 context.

## Members

#### `public void `[`sha512_common_pad`](#group__sys__hashes__sha512__common_1ga14f8247ad8fcd0e0b6d7d7dec3003465)`(`[`sha512_common_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t)` * ctx)` 

SHA-512 initialization.

Begins a SHA-512 operation.

#### Parameters
* `ctx` [sha512_common_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t) handle to init, must not be NULL

#### `public void `[`sha512_common_update`](#group__sys__hashes__sha512__common_1ga30cf0643e914ab1be173d82b8673090a)`(`[`sha512_common_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` [sha512_common_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t) handle to use, must not be NULL 

* `data` Input data 

* `len` Length of `data`

#### `public void `[`sha512_common_final`](#group__sys__hashes__sha512__common_1ga4005adf1f25e1f491d28f1b289815fb0)`(`[`sha512_common_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t)` * ctx,void * digest,size_t dig_len)` 

SHA-512 finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` [sha512_common_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha512_common.md#structsha512__common__context__t) handle to use, must not be NULL 

* `digest` resulting digest, this is the hash of all the bytes 

* `dig_len` Length of `digest`

# struct `sha512_common_context_t` 

Structure to hold the SHA-512 context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint64_t `[`state`](#structsha512__common__context__t_1a90886d2a81dc468ff150b61a50372cf1) | global state
`public uint64_t `[`count`](#structsha512__common__context__t_1a5f8c35d1f58ab44a6bed63ecee54fa35) | processed bits counter
`public unsigned char `[`buf`](#structsha512__common__context__t_1a269f54acc6ad44039f5eb3fa79dbd70c) | data buffer

## Members

#### `public uint64_t `[`state`](#structsha512__common__context__t_1a90886d2a81dc468ff150b61a50372cf1) 

global state

#### `public uint64_t `[`count`](#structsha512__common__context__t_1a5f8c35d1f58ab44a6bed63ecee54fa35) 

processed bits counter

#### `public unsigned char `[`buf`](#structsha512__common__context__t_1a269f54acc6ad44039f5eb3fa79dbd70c) 

data buffer

