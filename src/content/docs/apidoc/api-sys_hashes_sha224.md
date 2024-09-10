---
title: api-sys_hashes_sha224.md
description: api-sys_hashes_sha224.md
---
# group `sys_hashes_sha224` 

Implementation of the SHA-224 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA224_DIGEST_LENGTH`](#group__sys__hashes__sha224_1gaac41b7686fc19eaf23d716838478de35)            | Length of SHA224 digests in bytes.
`define `[`SHA224_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha224_1gae504385170a925c0fa86190df864e79b)            | 512 Bit (64 Byte) internally used block size for sha224
`public void `[`sha224_init`](#group__sys__hashes__sha224_1ga701bb647a67f07ab93232a0eda36ff9f)`(`[`sha224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha224_1ga2df301811fc6ef789735700a08415b1e)` * ctx)`            | SHA-224 initialization.
`public inline static void `[`sha224_update`](#group__sys__hashes__sha224_1ga8514dd3599c2318c0377347b5870c8fb)`(`[`sha224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha224_1ga2df301811fc6ef789735700a08415b1e)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public inline static void `[`sha224_final`](#group__sys__hashes__sha224_1ga90018212c3b2f46c90d1a4950dc05886)`(`[`sha224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha224_1ga2df301811fc6ef789735700a08415b1e)` * ctx,void * digest)`            | SHA-224 finalization.
`public void `[`sha224`](#group__sys__hashes__sha224_1gacb177632f18d1622726ac4d7a26be10a)`(const void * data,size_t len,void * digest)`            | A wrapper function to simplify the generation of a hash, this is useful for generating sha224 for one buffer.

## Members

#### `define `[`SHA224_DIGEST_LENGTH`](#group__sys__hashes__sha224_1gaac41b7686fc19eaf23d716838478de35) 

Length of SHA224 digests in bytes.

#### `define `[`SHA224_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha224_1gae504385170a925c0fa86190df864e79b) 

512 Bit (64 Byte) internally used block size for sha224

#### `public void `[`sha224_init`](#group__sys__hashes__sha224_1ga701bb647a67f07ab93232a0eda36ff9f)`(`[`sha224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha224_1ga2df301811fc6ef789735700a08415b1e)` * ctx)` 

SHA-224 initialization.

Begins a SHA-224 operation.

#### Parameters
* `ctx` sha224_context_t handle to init

#### `public inline static void `[`sha224_update`](#group__sys__hashes__sha224_1ga8514dd3599c2318c0377347b5870c8fb)`(`[`sha224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha224_1ga2df301811fc6ef789735700a08415b1e)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` sha224_context_t handle to use 

* `data` Input data 

* `len` Length of `data`

#### `public inline static void `[`sha224_final`](#group__sys__hashes__sha224_1ga90018212c3b2f46c90d1a4950dc05886)`(`[`sha224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha224_1ga2df301811fc6ef789735700a08415b1e)` * ctx,void * digest)` 

SHA-224 finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` sha224_context_t handle to use 

* `digest` resulting digest, this is the hash of all the bytes

#### `public void `[`sha224`](#group__sys__hashes__sha224_1gacb177632f18d1622726ac4d7a26be10a)`(const void * data,size_t len,void * digest)` 

A wrapper function to simplify the generation of a hash, this is useful for generating sha224 for one buffer.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` Pointer to an array for the result, length must be SHA224_DIGEST_LENGTH

