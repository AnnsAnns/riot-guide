---
title: api-sys_tsrb.md
description: api-sys_tsrb.md
---
# group `sys_tsrb` 

Thread-safe ringbuffer implementation.

> Buffer size must be a power of two!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`TSRB_INIT`](#group__sys__tsrb_1gacdfccc0e546ce7c53b1058f64a7ba6cc)            | Static initializer.
`public inline static void `[`tsrb_init`](#group__sys__tsrb_1gaf0b0224423e199ecfb4af72eaef6fda1)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t * buffer,unsigned bufsize)`            | Initialize a tsrb.
`public inline static void `[`tsrb_clear`](#group__sys__tsrb_1gab47b19d7967789ccddabac6159f9036e)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)`            | Clear a tsrb.
`public inline static int `[`tsrb_empty`](#group__sys__tsrb_1gaff1ac63e9384bbaf8ac7cc7c6b031a44)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)`            | Test if the tsrb is empty.
`public inline static unsigned int `[`tsrb_avail`](#group__sys__tsrb_1ga84672d08611d40b66635e495a712e8b9)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)`            | Get number of bytes available for reading.
`public inline static int `[`tsrb_full`](#group__sys__tsrb_1gaf7a98b968396a27cf0d1f6ca4d3bd24a)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)`            | Test if the tsrb is full.
`public inline static unsigned int `[`tsrb_free`](#group__sys__tsrb_1ga78852ef6f10c21c849caf4e5e8a8bb5a)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)`            | Get free space in ringbuffer.
`public int `[`tsrb_get_one`](#group__sys__tsrb_1ga9433f8aa0248805b30691d26c4de6839)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)`            | Get a byte from ringbuffer.
`public int `[`tsrb_peek_one`](#group__sys__tsrb_1gac1279999b882e457a466ad3a3f1e75c6)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)`            | Get a byte from ringbuffer, without removing it.
`public int `[`tsrb_get`](#group__sys__tsrb_1ga2d4140916e8c49f620d394d3dfe18d46)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t * dst,size_t n)`            | Get bytes from ringbuffer.
`public int `[`tsrb_peek`](#group__sys__tsrb_1ga2199068e091600006162b99b02ddb6fe)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t * dst,size_t n)`            | Get bytes from ringbuffer, without removing them.
`public int `[`tsrb_drop`](#group__sys__tsrb_1ga43d290de08163c75841ac1d0ae040579)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,size_t n)`            | Drop bytes from ringbuffer.
`public int `[`tsrb_add_one`](#group__sys__tsrb_1gab5bf6b621dc83f1aad693bbe8dafc530)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t c)`            | Add a byte to ringbuffer.
`public int `[`tsrb_add`](#group__sys__tsrb_1ga3ed2139c5c657a62830f0633f9f72693)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,const uint8_t * src,size_t n)`            | Add bytes to ringbuffer.
`struct `[`tsrb`](#structtsrb) | thread-safe ringbuffer struct

## Members

#### `define `[`TSRB_INIT`](#group__sys__tsrb_1gacdfccc0e546ce7c53b1058f64a7ba6cc) 

Static initializer.

#### `public inline static void `[`tsrb_init`](#group__sys__tsrb_1gaf0b0224423e199ecfb4af72eaef6fda1)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t * buffer,unsigned bufsize)` 

Initialize a tsrb.

#### Parameters
* `rb` Datum to initialize. 

* `buffer` Buffer to use by tsrb. 

* `bufsize` `sizeof (buffer)`, must be power of 2.

#### `public inline static void `[`tsrb_clear`](#group__sys__tsrb_1gab47b19d7967789ccddabac6159f9036e)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)` 

Clear a tsrb.

#### Parameters
* `rb` Ringbuffer to operate on

#### `public inline static int `[`tsrb_empty`](#group__sys__tsrb_1gaff1ac63e9384bbaf8ac7cc7c6b031a44)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)` 

Test if the tsrb is empty.

#### Parameters
* `rb` Ringbuffer to operate on 

#### Returns
0 if not empty 

#### Returns
1 otherwise

#### `public inline static unsigned int `[`tsrb_avail`](#group__sys__tsrb_1ga84672d08611d40b66635e495a712e8b9)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)` 

Get number of bytes available for reading.

#### Parameters
* `rb` Ringbuffer to operate on 

#### Returns
nr of available bytes

#### `public inline static int `[`tsrb_full`](#group__sys__tsrb_1gaf7a98b968396a27cf0d1f6ca4d3bd24a)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)` 

Test if the tsrb is full.

#### Parameters
* `rb` Ringbuffer to operate on 

#### Returns
0 if not full 

#### Returns
1 otherwise

#### `public inline static unsigned int `[`tsrb_free`](#group__sys__tsrb_1ga78852ef6f10c21c849caf4e5e8a8bb5a)`(const `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)` 

Get free space in ringbuffer.

#### Parameters
* `rb` Ringbuffer to operate on 

#### Returns
nr of available bytes

#### `public int `[`tsrb_get_one`](#group__sys__tsrb_1ga9433f8aa0248805b30691d26c4de6839)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)` 

Get a byte from ringbuffer.

#### Parameters
* `rb` Ringbuffer to operate on 

#### Returns
>=0 byte that has been read 

#### Returns
-1 if no byte available

#### `public int `[`tsrb_peek_one`](#group__sys__tsrb_1gac1279999b882e457a466ad3a3f1e75c6)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb)` 

Get a byte from ringbuffer, without removing it.

#### Parameters
* `rb` Ringbuffer to operate on 

#### Returns
>=0 byte that has been read 

#### Returns
-1 if no byte available

#### `public int `[`tsrb_get`](#group__sys__tsrb_1ga2d4140916e8c49f620d394d3dfe18d46)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t * dst,size_t n)` 

Get bytes from ringbuffer.

#### Parameters
* `rb` Ringbuffer to operate on 

* `dst` buffer to write to 

* `n` max number of bytes to write to `dst`

#### Returns
nr of bytes written to `dst`

#### `public int `[`tsrb_peek`](#group__sys__tsrb_1ga2199068e091600006162b99b02ddb6fe)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t * dst,size_t n)` 

Get bytes from ringbuffer, without removing them.

#### Parameters
* `rb` Ringbuffer to operate on 

* `dst` buffer to write to 

* `n` max number of bytes to write to `dst`

#### Returns
nr of bytes written to `dst`

#### `public int `[`tsrb_drop`](#group__sys__tsrb_1ga43d290de08163c75841ac1d0ae040579)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,size_t n)` 

Drop bytes from ringbuffer.

#### Parameters
* `rb` Ringbuffer to operate on 

* `n` max number of bytes to drop 

#### Returns
nr of bytes dropped

#### `public int `[`tsrb_add_one`](#group__sys__tsrb_1gab5bf6b621dc83f1aad693bbe8dafc530)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,uint8_t c)` 

Add a byte to ringbuffer.

#### Parameters
* `rb` Ringbuffer to operate on 

* `c` Character to add to ringbuffer 

#### Returns
0 on success 

#### Returns
-1 if no space available

#### `public int `[`tsrb_add`](#group__sys__tsrb_1ga3ed2139c5c657a62830f0633f9f72693)`(`[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` * rb,const uint8_t * src,size_t n)` 

Add bytes to ringbuffer.

#### Parameters
* `rb` Ringbuffer to operate on 

* `src` buffer to read from 

* `n` max number of bytes to read from `src`

#### Returns
nr of bytes read from `src`

# struct `tsrb` 

thread-safe ringbuffer struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`buf`](#structtsrb_1ac3faf4b21db4d3e2c8845e854db60fb5) | Buffer to operate on.
`public unsigned int `[`size`](#structtsrb_1af7c14acd3b2f78b2f0b30ee7038731a0) | Size of buffer, must be power of 2.
`public unsigned `[`reads`](#structtsrb_1a8b3aca9fc911652acdcbc430fcf8609c) | total number of reads
`public unsigned `[`writes`](#structtsrb_1a0ae70b962d53fc2012357f7c2c5903c1) | total number of writes

## Members

#### `public uint8_t * `[`buf`](#structtsrb_1ac3faf4b21db4d3e2c8845e854db60fb5) 

Buffer to operate on.

#### `public unsigned int `[`size`](#structtsrb_1af7c14acd3b2f78b2f0b30ee7038731a0) 

Size of buffer, must be power of 2.

#### `public unsigned `[`reads`](#structtsrb_1a8b3aca9fc911652acdcbc430fcf8609c) 

total number of reads

#### `public unsigned `[`writes`](#structtsrb_1a0ae70b962d53fc2012357f7c2c5903c1) 

total number of writes

