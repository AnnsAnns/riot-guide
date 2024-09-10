---
title: api-sys_hashes_sha1.md
description: api-sys_hashes_sha1.md
---
# group `sys_hashes_sha1` 

Implementation of the SHA-1 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA1_DIGEST_LENGTH`](#group__sys__hashes__sha1_1ga341f900ed2019f4da21d6970417f9efc)            | Length of SHA-1 digests in byte.
`define `[`SHA1_BLOCK_LENGTH`](#group__sys__hashes__sha1_1ga0dbc209bf3c6c0d9b0059cd24417f64c)            | Length of SHA-1 block in byte.
`public void `[`sha1_init`](#group__sys__hashes__sha1_1ga6a50e52c911aec6602113502a65eeb51)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx)`            | Initialize SHA-1 message digest context.
`public void `[`sha1_update`](#group__sys__hashes__sha1_1ga6025f14f5642317b61afe57b4b785af6)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,const void * data,size_t len)`            | Update the SHA-1 context with a portion of the message being hashed.
`public void `[`sha1_final`](#group__sys__hashes__sha1_1ga9e99263e15d4f37669036cd7301d21f8)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,void * digest)`            | Finalizes the SHA-1 message digest.
`public void `[`sha1`](#group__sys__hashes__sha1_1ga765ef8040c2b88fd32a2d014606feac0)`(void * digest,const void * data,size_t len)`            | Calculate a SHA1 hash from the given data.
`public void `[`sha1_init_hmac`](#group__sys__hashes__sha1_1gaebec0a07688f1b976f20b70e46da8ae2)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,const void * key,size_t key_length)`            | Initialize SHA-1 message digest context with MAC.
`public void `[`sha1_final_hmac`](#group__sys__hashes__sha1_1ga3f6fef5f35a0b4cd62a7e4b58617edd7)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,void * digest)`            | Finalizes the SHA-1 message digest with MAC.
`struct `[`sha1_context`](#structsha1__context) | SHA-1 algorithm context.

## Members

#### `define `[`SHA1_DIGEST_LENGTH`](#group__sys__hashes__sha1_1ga341f900ed2019f4da21d6970417f9efc) 

Length of SHA-1 digests in byte.

#### `define `[`SHA1_BLOCK_LENGTH`](#group__sys__hashes__sha1_1ga0dbc209bf3c6c0d9b0059cd24417f64c) 

Length of SHA-1 block in byte.

#### `public void `[`sha1_init`](#group__sys__hashes__sha1_1ga6a50e52c911aec6602113502a65eeb51)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx)` 

Initialize SHA-1 message digest context.

#### Parameters
* `ctx` Pointer to the SHA-1 context to initialize

#### `public void `[`sha1_update`](#group__sys__hashes__sha1_1ga6025f14f5642317b61afe57b4b785af6)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,const void * data,size_t len)` 

Update the SHA-1 context with a portion of the message being hashed.

#### Parameters
* `ctx` Pointer to the SHA-1 context to update 

* `data` Input data 

* `len` Length of `data`

#### `public void `[`sha1_final`](#group__sys__hashes__sha1_1ga9e99263e15d4f37669036cd7301d21f8)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,void * digest)` 

Finalizes the SHA-1 message digest.

#### Parameters
* `ctx` Pointer to the SHA-1 context 

* `digest` Result location, must be 20 byte

#### `public void `[`sha1`](#group__sys__hashes__sha1_1ga765ef8040c2b88fd32a2d014606feac0)`(void * digest,const void * data,size_t len)` 

Calculate a SHA1 hash from the given data.

#### Parameters
* `digest` Result location, must be 20 byte 

* `data` Input data 

* `len` Length of `buf`

#### `public void `[`sha1_init_hmac`](#group__sys__hashes__sha1_1gaebec0a07688f1b976f20b70e46da8ae2)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,const void * key,size_t key_length)` 

Initialize SHA-1 message digest context with MAC.

#### Parameters
* `ctx` Pointer to the SHA-1 context to initialize 

* `key` Key used in the HMAC-SHA1 computation 

* `key_length` The size in bytes of `key`

#### `public void `[`sha1_final_hmac`](#group__sys__hashes__sha1_1ga3f6fef5f35a0b4cd62a7e4b58617edd7)`(`[`sha1_context`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha1.md#structsha1__context)` * ctx,void * digest)` 

Finalizes the SHA-1 message digest with MAC.

#### Parameters
* `ctx` Pointer to the SHA-1 context 

* `digest` Result location, must be 20 byte

# struct `sha1_context` 

SHA-1 algorithm context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`buffer`](#structsha1__context_1a97384ed5525449bd366c90f83eed5df4) | internal buffer
`public uint32_t `[`state`](#structsha1__context_1a645116228a81668ef202d0fb488fc976) | buffering current state of hashing
`public uint32_t `[`byte_count`](#structsha1__context_1a6792b74bd0980157f5fd1fab27ba012c) | already processed bytes
`public uint8_t `[`buffer_offset`](#structsha1__context_1ae8051e33577bcb0290f65b92324b8d67) | internal state variable to keep track if the buffer is filled before proceeding to hash this block
`public uint8_t `[`key_buffer`](#structsha1__context_1a5da178272a6fb1933696dbd4ae61ee0b) | internal state of the key buffer
`public uint8_t `[`inner_hash`](#structsha1__context_1adc01f44cb4567d13087558ea4190b3b9) | temporary buffer for the inner hashing

## Members

#### `public uint32_t `[`buffer`](#structsha1__context_1a97384ed5525449bd366c90f83eed5df4) 

internal buffer

#### `public uint32_t `[`state`](#structsha1__context_1a645116228a81668ef202d0fb488fc976) 

buffering current state of hashing

#### `public uint32_t `[`byte_count`](#structsha1__context_1a6792b74bd0980157f5fd1fab27ba012c) 

already processed bytes

#### `public uint8_t `[`buffer_offset`](#structsha1__context_1ae8051e33577bcb0290f65b92324b8d67) 

internal state variable to keep track if the buffer is filled before proceeding to hash this block

#### `public uint8_t `[`key_buffer`](#structsha1__context_1a5da178272a6fb1933696dbd4ae61ee0b) 

internal state of the key buffer

#### `public uint8_t `[`inner_hash`](#structsha1__context_1adc01f44cb4567d13087558ea4190b3b9) 

temporary buffer for the inner hashing

