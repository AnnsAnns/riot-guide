---
title: api-sys_hashes_sha512_224.md
description: api-sys_hashes_sha512_224.md
---
# group `sys_hashes_sha512_224` 

Implementation of the SHA-512/224 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA512_224_DIGEST_LENGTH`](#group__sys__hashes__sha512__224_1ga851e87d65fb4c958e56623631bac5996)            | Length of SHA512_224 digests in bytes.
`define `[`SHA512_224_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha512__224_1ga6ea5cd9fbe709988fa36ddf548876a7f)            | 1024 Bit (128 Byte) internally used block size for sha512_224
`public void `[`sha512_224_init`](#group__sys__hashes__sha512__224_1ga6416d9d0aadabc51fdc0601f2763a419)`(`[`sha512_224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__224_1ga736c0c8de61b094fd53a0a351decc22c)` * ctx)`            | SHA-512/224 initialization.
`public inline static void `[`sha512_224_update`](#group__sys__hashes__sha512__224_1gae3387344571f0988fbcb2908f88e0cb9)`(`[`sha512_224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__224_1ga736c0c8de61b094fd53a0a351decc22c)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public inline static void `[`sha512_224_final`](#group__sys__hashes__sha512__224_1ga72059d41310e3c92f3d7e95973094ded)`(`[`sha512_224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__224_1ga736c0c8de61b094fd53a0a351decc22c)` * ctx,void * digest)`            | SHA-512/224 finalization.
`public void `[`sha512_224`](#group__sys__hashes__sha512__224_1ga6a1632a934b89e690349aadf322b9df4)`(const void * data,size_t len,void * digest)`            | A wrapper function to simplify the generation of a hash.

## Members

#### `define `[`SHA512_224_DIGEST_LENGTH`](#group__sys__hashes__sha512__224_1ga851e87d65fb4c958e56623631bac5996) 

Length of SHA512_224 digests in bytes.

#### `define `[`SHA512_224_INTERNAL_BLOCK_SIZE`](#group__sys__hashes__sha512__224_1ga6ea5cd9fbe709988fa36ddf548876a7f) 

1024 Bit (128 Byte) internally used block size for sha512_224

#### `public void `[`sha512_224_init`](#group__sys__hashes__sha512__224_1ga6416d9d0aadabc51fdc0601f2763a419)`(`[`sha512_224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__224_1ga736c0c8de61b094fd53a0a351decc22c)` * ctx)` 

SHA-512/224 initialization.

Begins a SHA-512/224 operation.

#### Parameters
* `ctx` sha512_224_context_t handle to init, must not be NULL

#### `public inline static void `[`sha512_224_update`](#group__sys__hashes__sha512__224_1gae3387344571f0988fbcb2908f88e0cb9)`(`[`sha512_224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__224_1ga736c0c8de61b094fd53a0a351decc22c)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` sha512_224_context_t handle to use, must not be NULL 

* `data` Input data 

* `len` Length of `data`

#### `public inline static void `[`sha512_224_final`](#group__sys__hashes__sha512__224_1ga72059d41310e3c92f3d7e95973094ded)`(`[`sha512_224_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha512__224_1ga736c0c8de61b094fd53a0a351decc22c)` * ctx,void * digest)` 

SHA-512/224 finalization.

Pads the input data, exports the hash value, and clears the context state.

#### Parameters
* `ctx` sha512_224_context_t handle to use, must not be NULL 

* `digest` pointer to resulting digest, this is the hash of all the bytes. Length must be at least SHA512_224_DIGEST_LENGTH

#### `public void `[`sha512_224`](#group__sys__hashes__sha512__224_1ga6a1632a934b89e690349aadf322b9df4)`(const void * data,size_t len,void * digest)` 

A wrapper function to simplify the generation of a hash.

This is useful for generating sha512_224 for one single buffer in a single step.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` optional pointer to an array for the result, length must be at least SHA512_224_DIGEST_LENGTH

