---
title: api-sys_hashes_md5.md
description: api-sys_hashes_md5.md
---
# group `sys_hashes_md5` 

Implementation of the MD5 hashing function.

None of this will make any sense unless you're studying RFC 1321 as you read the code.

There are three primary motivations for this particular implementation. 1) Programmer's pride. I wanted to be able to say I'd done it, and I wanted to learn from the experience. 2) Portability. I wanted an implementation that I knew to be portable to a reasonable number of platforms. In particular, the algorithm is designed with little-endian platforms in mind, but I wanted an endian-agnostic implementation. 3) Compactness. While not an overriding goal, I thought it worth-while to see if I could reduce the overall size of the result. This is in keeping with my hopes that this library will be suitable for use in some embedded environments. Beyond that, cleanliness and clarity are always worth pursuing.

As mentioned above, the code really only makes sense if you are familiar with the MD5 algorithm or are using RFC 1321 as a guide. This code is quirky, however, so you'll want to be reading carefully.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MD5_DIGEST_LENGTH`](#group__sys__hashes__md5_1ga09a4f4b2f28cbe522d9b80153666029c)            | Length of MD5 digests in byte.
`public void `[`md5_init`](#group__sys__hashes__md5_1ga7b23bc124682da7474a6039455bcad8f)`(`[`md5_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_md5.md#structmd5__ctx__t)` * ctx)`            | Initialize the MD5 calculation context.
`public void `[`md5_update`](#group__sys__hashes__md5_1gaa3980fff6e5395d93369f36e01876ce6)`(`[`md5_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_md5.md#structmd5__ctx__t)` * ctx,const void * data,size_t len)`            | Build an MD5 Message Digest within the given context.
`public void `[`md5_final`](#group__sys__hashes__md5_1gad5aa369e5fb573c695b9b2e507b0bee6)`(`[`md5_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_md5.md#structmd5__ctx__t)` * ctx,void * digest)`            | Finish up the current MD5 hash calculation generate the final hash.
`public void `[`md5`](#group__sys__hashes__md5_1ga34b9c4858990c1331a504cfd3db50da2)`(void * digest,const void * data,size_t len)`            | Calculate a MD5 hash from the given data.
`struct `[`md5_ctx_t`](#structmd5__ctx__t) | MD5 calculation context.

## Members

#### `define `[`MD5_DIGEST_LENGTH`](#group__sys__hashes__md5_1ga09a4f4b2f28cbe522d9b80153666029c) 

Length of MD5 digests in byte.

#### `public void `[`md5_init`](#group__sys__hashes__md5_1ga7b23bc124682da7474a6039455bcad8f)`(`[`md5_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_md5.md#structmd5__ctx__t)` * ctx)` 

Initialize the MD5 calculation context.

#### Parameters
* `ctx` Pointer to the context to be initialized

The purpose of the context is to make it possible to generate an MD5 Message Digest in stages, rather than having to pass a single large block to a single MD5 function. The context structure keeps track of various bits of state information.

Once the context is initialized, the blocks of message data are passed to the <[md5_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__md5_1gaa3980fff6e5395d93369f36e01876ce6)> function. Once the final bit of data has been handed to <[md5_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__md5_1gaa3980fff6e5395d93369f36e01876ce6)> the context can be closed out by calling <[md5_final()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__md5_1gad5aa369e5fb573c695b9b2e507b0bee6)>, which also calculates the final MD5 result. Don't forget to free an allocated context structure when you've finished using it.

#### `public void `[`md5_update`](#group__sys__hashes__md5_1gaa3980fff6e5395d93369f36e01876ce6)`(`[`md5_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_md5.md#structmd5__ctx__t)` * ctx,const void * data,size_t len)` 

Build an MD5 Message Digest within the given context.

#### Parameters
* `ctx` Context of the current calculation 

* `data` Input data 

* `len` Length of `data`

#### `public void `[`md5_final`](#group__sys__hashes__md5_1gad5aa369e5fb573c695b9b2e507b0bee6)`(`[`md5_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_md5.md#structmd5__ctx__t)` * ctx,void * digest)` 

Finish up the current MD5 hash calculation generate the final hash.

#### Parameters
* `ctx` Context of the current calculation 

* `digest` Result location, must be 16 byte

#### `public void `[`md5`](#group__sys__hashes__md5_1ga34b9c4858990c1331a504cfd3db50da2)`(void * digest,const void * data,size_t len)` 

Calculate a MD5 hash from the given data.

#### Parameters
* `digest` Result location, must be 16 byte 

* `data` Input data 

* `len` Length of `src`

# struct `md5_ctx_t` 

MD5 calculation context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`len`](#structmd5__ctx__t_1a9b7f023a99e4a7daee88b23c1423d155) | overall number of bytes processed
`public uint32_t `[`abcd`](#structmd5__ctx__t_1aedb7541bae88c27ed91876d0d0685332) | virtual registers for hash calculation
`public int `[`b_used`](#structmd5__ctx__t_1ab5569685872c12fd21f62cb6b4d5d197) | number of bytes used in the current block
`public uint8_t `[`block`](#structmd5__ctx__t_1a679e7f2230135c28a93261dcb4145a94) | one block is calculated at a time

## Members

#### `public uint32_t `[`len`](#structmd5__ctx__t_1a9b7f023a99e4a7daee88b23c1423d155) 

overall number of bytes processed

#### `public uint32_t `[`abcd`](#structmd5__ctx__t_1aedb7541bae88c27ed91876d0d0685332) 

virtual registers for hash calculation

#### `public int `[`b_used`](#structmd5__ctx__t_1ab5569685872c12fd21f62cb6b4d5d197) 

number of bytes used in the current block

#### `public uint8_t `[`block`](#structmd5__ctx__t_1a679e7f2230135c28a93261dcb4145a94) 

one block is calculated at a time

