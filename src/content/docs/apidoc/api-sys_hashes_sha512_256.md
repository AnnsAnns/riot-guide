---
title: api-sys_hashes_sha512_256.md
description: api-sys_hashes_sha512_256.md
---
# group `sys_hashes_sha512_256` 

Implementation of the SHA-512/256 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA512_256_DIGEST_LENGTH`](#group__sys__hashes__sha512__256_1ga512e530b8f6ead4070d991ed1a6297e5)            | Length of SHA512_256 digests in bytes.
`define `[`SHA512_256_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha512__256_1ga17788f8a8a1e9ae36085d899ad1b0f9e)            | 1024 Bit (128 Byte) internally used block size for sha512_256
`public void `[`sha512_256_init`](#group__sys__hashes__sha512__256_1ga117b582cddb8e5397221346ebfaa2ee7)`(`[`sha512_256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__256_1ga3c1b4a9cbfcc05c344c25cd12fdafc57)` * ctx)`            | SHA-512/256 initialization.
`public inline static void `[`sha512_256_update`](#group__sys__hashes__sha512__256_1gafb754df11607637c798c85aaefabb28c)`(`[`sha512_256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__256_1ga3c1b4a9cbfcc05c344c25cd12fdafc57)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public inline static void `[`sha512_256_final`](#group__sys__hashes__sha512__256_1ga75ea459ee9a974b864fd36ec41ddb6bc)`(`[`sha512_256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__256_1ga3c1b4a9cbfcc05c344c25cd12fdafc57)` * ctx,void * digest)`            | SHA-512/256 finalization.
`public void `[`sha512_256`](#group__sys__hashes__sha512__256_1ga03970a0c47fd4ebdb2e9a25fc4579eaa)`(const void * data,size_t len,void * digest)`            | A wrapper function to simplify the generation of a hash.

## Members

#### `define `[`SHA512_256_DIGEST_LENGTH`](#group__sys__hashes__sha512__256_1ga512e530b8f6ead4070d991ed1a6297e5) 

Length of SHA512_256 digests in bytes.

#### `define `[`SHA512_256_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha512__256_1ga17788f8a8a1e9ae36085d899ad1b0f9e) 

1024 Bit (128 Byte) internally used block size for sha512_256

#### `public void `[`sha512_256_init`](#group__sys__hashes__sha512__256_1ga117b582cddb8e5397221346ebfaa2ee7)`(`[`sha512_256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__256_1ga3c1b4a9cbfcc05c344c25cd12fdafc57)` * ctx)` 

SHA-512/256 initialization.

Begins a SHA-512/256 operation.

#### Parameters
* `ctx` sha512_256_context_t handle to init, must not be NULL

#### `public inline static void `[`sha512_256_update`](#group__sys__hashes__sha512__256_1gafb754df11607637c798c85aaefabb28c)`(`[`sha512_256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__256_1ga3c1b4a9cbfcc05c344c25cd12fdafc57)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` sha512_256_context_t handle to use, must not be NULL 

* `data` Input data 

* `len` Length of `data`

#### `public inline static void `[`sha512_256_final`](#group__sys__hashes__sha512__256_1ga75ea459ee9a974b864fd36ec41ddb6bc)`(`[`sha512_256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__256_1ga3c1b4a9cbfcc05c344c25cd12fdafc57)` * ctx,void * digest)` 

SHA-512/256 finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` sha512_256_context_t handle to use, must not be NULL 

* `digest` pointer to resulting digest, this is the hash of all the bytes. Length must be at least SHA512_256_DIGEST_LENGTH

#### `public void `[`sha512_256`](#group__sys__hashes__sha512__256_1ga03970a0c47fd4ebdb2e9a25fc4579eaa)`(const void * data,size_t len,void * digest)` 

A wrapper function to simplify the generation of a hash.

This is useful for generating sha512_256 for one single buffer in a single step.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` optional pointer to an array for the result, length must be at least SHA512_256_DIGEST_LENGTH

