---
title: api-sys_checksum_fletcher16.md
description: api-sys_checksum_fletcher16.md
---
# group `sys_checksum_fletcher16` 

Fletcher16 checksum algorithm.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`fletcher16`](#group__sys__checksum__fletcher16_1ga011191e63f23ad149885dfcb9ef68dcc)`(const uint8_t * buf,size_t bytes)`            | Fletcher's 16 bit checksum .
`public void `[`fletcher16_init`](#group__sys__checksum__fletcher16_1gae0a51079436de4473f05a28640e18a28)`(`[`fletcher16_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher16.md#structfletcher16__ctx__t)` * ctx)`            | Initialize a fletcher16 context.
`public void `[`fletcher16_update`](#group__sys__checksum__fletcher16_1ga23fb1a228adaa68491aac4d80f160a74)`(`[`fletcher16_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher16.md#structfletcher16__ctx__t)` * ctx,const uint8_t * data,size_t len)`            | Update the fletcher16 context with new data.
`public uint16_t `[`fletcher16_finish`](#group__sys__checksum__fletcher16_1ga5ccb78d9e2fe7d294f6f075cb2e93ab0)`(`[`fletcher16_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher16.md#structfletcher16__ctx__t)` * ctx)`            | Finalize the checksum operation and return the checksum.
`struct `[`fletcher16_ctx_t`](#structfletcher16__ctx__t) | Fletcher's 16 bit checksum context struct.

## Members

#### `public uint16_t `[`fletcher16`](#group__sys__checksum__fletcher16_1ga011191e63f23ad149885dfcb9ef68dcc)`(const uint8_t * buf,size_t bytes)` 

Fletcher's 16 bit checksum .

found on [http://en.wikipedia.org/w/index.php?title=Fletcher%27s_checksum&oldid=661273016#Optimizations](http://en.wikipedia.org/w/index.php?title=Fletcher%27s_checksum&oldid=661273016#Optimizations)

the returned sum is never 0

#### Parameters
* `buf` input buffer to hash 

* `bytes` length of buffer, in bytes 

#### Returns
16 bit sized hash in the interval [1..65535]

#### `public void `[`fletcher16_init`](#group__sys__checksum__fletcher16_1gae0a51079436de4473f05a28640e18a28)`(`[`fletcher16_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher16.md#structfletcher16__ctx__t)` * ctx)` 

Initialize a fletcher16 context.

Multi-part version of [fletcher16_full](#group__sys__checksum__fletcher16_1fletcher16_full).

#### Parameters
* `ctx` fletcher16 context to initialize

#### `public void `[`fletcher16_update`](#group__sys__checksum__fletcher16_1ga23fb1a228adaa68491aac4d80f160a74)`(`[`fletcher16_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher16.md#structfletcher16__ctx__t)` * ctx,const uint8_t * data,size_t len)` 

Update the fletcher16 context with new data.

#### Parameters
* `ctx` fletcher16 context 

* `data` Data to add to the context 

* `len` Length of the data

#### `public uint16_t `[`fletcher16_finish`](#group__sys__checksum__fletcher16_1ga5ccb78d9e2fe7d294f6f075cb2e93ab0)`(`[`fletcher16_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_checksum_fletcher16.md#structfletcher16__ctx__t)` * ctx)` 

Finalize the checksum operation and return the checksum.

#### Parameters
* `ctx` fletcher16 context

#### Returns
Checksum of the data

# struct `fletcher16_ctx_t` 

Fletcher's 16 bit checksum context struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`sum1`](#structfletcher16__ctx__t_1a71c6fd313115e3686b7168e261fc85d3) | First sum of the checksum.
`public uint16_t `[`sum2`](#structfletcher16__ctx__t_1a251e62073dbad495f7db3906bf42fdc0) | Second sum of the checksum.

## Members

#### `public uint16_t `[`sum1`](#structfletcher16__ctx__t_1a71c6fd313115e3686b7168e261fc85d3) 

First sum of the checksum.

#### `public uint16_t `[`sum2`](#structfletcher16__ctx__t_1a251e62073dbad495f7db3906bf42fdc0) 

Second sum of the checksum.

