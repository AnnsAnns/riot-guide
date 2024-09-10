---
title: api-isr_pipe.md
description: api-isr_pipe.md
---
# group `isr_pipe` 

ISR -> userspace pipe.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ISRPIPE_INIT`](#group__isr__pipe_1gac661f2340ee284fb4e84dc3ce31ab08b)            | Static initializer for irspipe.
`public void `[`isrpipe_init`](#group__isr__pipe_1ga5dda327596b4de5a207cb034c1aeae01)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t bufsize)`            | Initialisation function for isrpipe.
`public int `[`isrpipe_write_one`](#group__isr__pipe_1ga37b1c7a749bd59b64d8c4a3f21d1688b)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t c)`            | Put one byte into the isrpipe's buffer.
`public int `[`isrpipe_write`](#group__isr__pipe_1gaf619bdd8493413e608cd34a360bda00f)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,const uint8_t * buf,size_t n)`            | Put number of bytes into the isrpipe's buffer.
`public int `[`isrpipe_read`](#group__isr__pipe_1gaf066dd71aef275a690ed0ed8419e3332)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t count)`            | Read data from isrpipe (blocking)
`struct `[`isrpipe_t`](#structisrpipe__t) | Context structure for isrpipe.

## Members

#### `define `[`ISRPIPE_INIT`](#group__isr__pipe_1gac661f2340ee284fb4e84dc3ce31ab08b) 

Static initializer for irspipe.

#### `public void `[`isrpipe_init`](#group__isr__pipe_1ga5dda327596b4de5a207cb034c1aeae01)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t bufsize)` 

Initialisation function for isrpipe.

#### Parameters
* `isrpipe` isrpipe object to initialize 

* `buf` buffer to use as ringbuffer (must be power of two sized!) 

* `bufsize` size of `buf`

#### `public int `[`isrpipe_write_one`](#group__isr__pipe_1ga37b1c7a749bd59b64d8c4a3f21d1688b)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t c)` 

Put one byte into the isrpipe's buffer.

#### Parameters
* `isrpipe` isrpipe object to operate on 

* `c` byte to add to isrpipe buffer

#### Returns
0 if byte could be added 

#### Returns
-1 if buffer was full

#### `public int `[`isrpipe_write`](#group__isr__pipe_1gaf619bdd8493413e608cd34a360bda00f)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,const uint8_t * buf,size_t n)` 

Put number of bytes into the isrpipe's buffer.

#### Parameters
* `isrpipe` isrpipe object to operate on 

* `buf` bytes to add to isrpipe buffer 

* `n` number of bytes to add from buf to isrpipe's buffer

#### Returns
number of bytes that could be added 

#### Returns
-1 if buffer was full

#### `public int `[`isrpipe_read`](#group__isr__pipe_1gaf066dd71aef275a690ed0ed8419e3332)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t count)` 

Read data from isrpipe (blocking)

#### Parameters
* `isrpipe` isrpipe object to operate on 

* `buf` buffer to write to 

* `count` number of bytes to read

#### Returns
number of bytes read

# struct `isrpipe_t` 

Context structure for isrpipe.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` `[`tsrb`](#structisrpipe__t_1abd3f6a6d99fa0a541ca81f37b38a0350) | isrpipe thread safe ringbuffer
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structisrpipe__t_1aeac6eaefa066e74900a8e2b755fe3422) | isrpipe mutex

## Members

#### `public `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` `[`tsrb`](#structisrpipe__t_1abd3f6a6d99fa0a541ca81f37b38a0350) 

isrpipe thread safe ringbuffer

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structisrpipe__t_1aeac6eaefa066e74900a8e2b755fe3422) 

isrpipe mutex

