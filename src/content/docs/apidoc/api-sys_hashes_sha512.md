---
title: api-sys_hashes_sha512.md
description: api-sys_hashes_sha512.md
---
# group `sys_hashes_sha512` 

Implementation of the SHA-512 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA512_DIGEST_LENGTH`](#group__sys__hashes__sha512_1ga5a8416d0f8e1af6d7525114ef09be118)            | Length of SHA512 digests in bytes.
`define `[`SHA512_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha512_1gada766633c7c6c8246f566e17fdb44ce1)            | 1024 Bit (128 Byte) internally used block size for sha512
`public void `[`sha512_init`](#group__sys__hashes__sha512_1ga55517dfcb8da550c5f9b1cfe03deb829)`(`[`sha512_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512_1gad89a060af622053494225d40806feec8)` * ctx)`            | SHA-512 initialization.
`public inline static void `[`sha512_update`](#group__sys__hashes__sha512_1ga7977687dd5ba57f8f88f6c49ae7ed538)`(`[`sha512_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512_1gad89a060af622053494225d40806feec8)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public inline static void `[`sha512_final`](#group__sys__hashes__sha512_1ga770075c9abf78ef2c605d5bed0b0d12a)`(`[`sha512_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512_1gad89a060af622053494225d40806feec8)` * ctx,void * digest)`            | SHA-512 finalization.
`public void `[`sha512`](#group__sys__hashes__sha512_1ga729f85896a8e9093de629d0692472848)`(const void * data,size_t len,void * digest)`            | A wrapper function to simplify the generation of a hash.

## Members

#### `define `[`SHA512_DIGEST_LENGTH`](#group__sys__hashes__sha512_1ga5a8416d0f8e1af6d7525114ef09be118) 

Length of SHA512 digests in bytes.

#### `define `[`SHA512_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha512_1gada766633c7c6c8246f566e17fdb44ce1) 

1024 Bit (128 Byte) internally used block size for sha512

#### `public void `[`sha512_init`](#group__sys__hashes__sha512_1ga55517dfcb8da550c5f9b1cfe03deb829)`(`[`sha512_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512_1gad89a060af622053494225d40806feec8)` * ctx)` 

SHA-512 initialization.

Begins a SHA-512 operation.

#### Parameters
* `ctx` sha512_context_t handle to init, must not be NULL

#### `public inline static void `[`sha512_update`](#group__sys__hashes__sha512_1ga7977687dd5ba57f8f88f6c49ae7ed538)`(`[`sha512_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512_1gad89a060af622053494225d40806feec8)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` sha512_context_t handle to use, must not be NULL 

* `data` Input data 

* `len` Length of `data`

#### `public inline static void `[`sha512_final`](#group__sys__hashes__sha512_1ga770075c9abf78ef2c605d5bed0b0d12a)`(`[`sha512_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512_1gad89a060af622053494225d40806feec8)` * ctx,void * digest)` 

SHA-512 finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` sha512_context_t handle to use, must not be NULL 

* `digest` pointer to resulting digest, this is the hash of all the bytes. Length must be at least SHA512_DIGEST_LENGTH

#### `public void `[`sha512`](#group__sys__hashes__sha512_1ga729f85896a8e9093de629d0692472848)`(const void * data,size_t len,void * digest)` 

A wrapper function to simplify the generation of a hash.

This is useful for generating sha512 for one single buffer in a single step.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` optional pointer to an array for the result, length must be SHA512_DIGEST_LENGTH

