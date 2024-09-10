---
title: api-sys_hashes_sha384.md
description: api-sys_hashes_sha384.md
---
# group `sys_hashes_sha384` 

Implementation of the SHA-384 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA384_DIGEST_LENGTH`](#group__sys__hashes__sha384_1ga5f90d25a54e963a3ae3d800fffddaa31)            | Length of SHA384 digests in bytes.
`define `[`SHA384_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha384_1ga3b6e8f1257eed1ca840bbe1600d54c6a)            | 1024 Bit (128 Byte) internally used block size for sha384
`public void `[`sha384_init`](#group__sys__hashes__sha384_1ga86fbbfbc5db8b01875bd552a856a5494)`(`[`sha384_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha384_1gac287505efa34e1bf32797840855b844d)` * ctx)`            | SHA-384 initialization.
`public inline static void `[`sha384_update`](#group__sys__hashes__sha384_1ga6c9519d1c30ec632dabd33eb1f269a70)`(`[`sha384_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha384_1gac287505efa34e1bf32797840855b844d)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public inline static void `[`sha384_final`](#group__sys__hashes__sha384_1ga570054ce6c75635691e4018d737cd1f1)`(`[`sha384_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha384_1gac287505efa34e1bf32797840855b844d)` * ctx,void * digest)`            | SHA-384 finalization.
`public void `[`sha384`](#group__sys__hashes__sha384_1gaa474e1acfe8ff64cca3ce93d12caebc7)`(const void * data,size_t len,void * digest)`            | A wrapper function to simplify the generation of a hash.

## Members

#### `define `[`SHA384_DIGEST_LENGTH`](#group__sys__hashes__sha384_1ga5f90d25a54e963a3ae3d800fffddaa31) 

Length of SHA384 digests in bytes.

#### `define `[`SHA384_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha384_1ga3b6e8f1257eed1ca840bbe1600d54c6a) 

1024 Bit (128 Byte) internally used block size for sha384

#### `public void `[`sha384_init`](#group__sys__hashes__sha384_1ga86fbbfbc5db8b01875bd552a856a5494)`(`[`sha384_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha384_1gac287505efa34e1bf32797840855b844d)` * ctx)` 

SHA-384 initialization.

Begins a SHA-384 operation.

#### Parameters
* `ctx` sha384_context_t handle to init, must not be NULL

#### `public inline static void `[`sha384_update`](#group__sys__hashes__sha384_1ga6c9519d1c30ec632dabd33eb1f269a70)`(`[`sha384_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha384_1gac287505efa34e1bf32797840855b844d)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` sha384_context_t handle to use, must not be NULL 

* `data` Input data 

* `len` Length of `data`

#### `public inline static void `[`sha384_final`](#group__sys__hashes__sha384_1ga570054ce6c75635691e4018d737cd1f1)`(`[`sha384_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha384_1gac287505efa34e1bf32797840855b844d)` * ctx,void * digest)` 

SHA-384 finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` sha384_context_t handle to use, must not be NULL 

* `digest` pointer to resulting digest, this is the hash of all the bytes. Length must be at least SHA384_DIGEST_LENGTH

#### `public void `[`sha384`](#group__sys__hashes__sha384_1gaa474e1acfe8ff64cca3ce93d12caebc7)`(const void * data,size_t len,void * digest)` 

A wrapper function to simplify the generation of a hash.

This is useful for generating sha384 for one single buffer in a single step.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` optional pointer to an array for the result, length must be at least SHA384_DIGEST_LENGTH

