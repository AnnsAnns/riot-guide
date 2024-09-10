---
title: api-sys_checksum_fletcher32.md
description: api-sys_checksum_fletcher32.md
---
# group `sys_checksum_fletcher32` 

Fletcher32 checksum algorithm.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`fletcher32`](#group__sys__checksum__fletcher32_1ga9c24368528c0ea427d08d09ae6007be2)`(const uint16_t * buf,size_t words)`            | Fletcher's 32 bit checksum.
`public void `[`fletcher32_init`](#group__sys__checksum__fletcher32_1ga97e4c2acdb63cc6ce1d80a772cde5a28)`(`[`fletcher32_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher32.md#structfletcher32__ctx__t)` * ctx)`            | Initialize a fletcher32 context.
`public void `[`fletcher32_update`](#group__sys__checksum__fletcher32_1ga9d078f1d31a454e9fb4b11cc2fd6d5df)`(`[`fletcher32_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher32.md#structfletcher32__ctx__t)` * ctx,const void * data,size_t words)`            | Incrementally update the fletcher32 context with new data.
`public uint32_t `[`fletcher32_finish`](#group__sys__checksum__fletcher32_1ga26b53f40b1744514332bca2f23c07055)`(`[`fletcher32_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher32.md#structfletcher32__ctx__t)` * ctx)`            | Finalize the checksum operation and return the checksum.
`struct `[`fletcher32_ctx_t`](#structfletcher32__ctx__t) | Fletcher's 32 bit checksum context struct.

## Members

#### `public uint32_t `[`fletcher32`](#group__sys__checksum__fletcher32_1ga9c24368528c0ea427d08d09ae6007be2)`(const uint16_t * buf,size_t words)` 

Fletcher's 32 bit checksum.

found on [http://en.wikipedia.org/w/index.php?title=Fletcher%27s_checksum&oldid=661273016#Optimizations](http://en.wikipedia.org/w/index.php?title=Fletcher%27s_checksum&oldid=661273016#Optimizations)

the returned sum is never 0 

pay attention to the `words` parameter buffer containing 16 bit words, not bytes.

#### Parameters
* `buf` input buffer to hash 

* `words` length of buffer, in 16 bit words 

#### Returns
32 bit sized hash in the interval [1..2^32]

#### `public void `[`fletcher32_init`](#group__sys__checksum__fletcher32_1ga97e4c2acdb63cc6ce1d80a772cde5a28)`(`[`fletcher32_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher32.md#structfletcher32__ctx__t)` * ctx)` 

Initialize a fletcher32 context.

Multi-part version of [fletcher32](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__fletcher32_1ga9c24368528c0ea427d08d09ae6007be2).

#### Parameters
* `ctx` fletcher32 context to initialize

#### `public void `[`fletcher32_update`](#group__sys__checksum__fletcher32_1ga9d078f1d31a454e9fb4b11cc2fd6d5df)`(`[`fletcher32_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher32.md#structfletcher32__ctx__t)` * ctx,const void * data,size_t words)` 

Incrementally update the fletcher32 context with new data.

Can be an arbitrary amount of times with new data to checksum.

`words` is the number of 16 bit words in the buffer 

`data` should contain an integer number of 16 bit words

#### Parameters
* `ctx` fletcher32 context 

* `data` Data to add to the context 

* `words` Length of the data in 16 bit words

#### `public uint32_t `[`fletcher32_finish`](#group__sys__checksum__fletcher32_1ga26b53f40b1744514332bca2f23c07055)`(`[`fletcher32_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher32.md#structfletcher32__ctx__t)` * ctx)` 

Finalize the checksum operation and return the checksum.

#### Parameters
* `ctx` fletcher32 context

#### Returns
32 bit sized hash in the interval [1..2^32]

# struct `fletcher32_ctx_t` 

Fletcher's 32 bit checksum context struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`sum1`](#structfletcher32__ctx__t_1a7a72fb91ef433fcd1d17c6da273495fc) | First sum of the checksum.
`public uint32_t `[`sum2`](#structfletcher32__ctx__t_1a09837a69d5ecc0371343616743f89bf8) | Second sum of the checksum.

## Members

#### `public uint32_t `[`sum1`](#structfletcher32__ctx__t_1a7a72fb91ef433fcd1d17c6da273495fc) 

First sum of the checksum.

#### `public uint32_t `[`sum2`](#structfletcher32__ctx__t_1a09837a69d5ecc0371343616743f89bf8) 

Second sum of the checksum.

