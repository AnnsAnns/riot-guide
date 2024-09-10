---
title: api-isr_pipe_read_timeout.md
description: api-isr_pipe_read_timeout.md
---
# group `isr_pipe_read_timeout` 

ISR -> userspace pipe with timeout.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`isrpipe_read_timeout`](#group__isr__pipe__read__timeout_1ga5d26043d8420d2d9fc4bbeef804319a0)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t count,uint32_t timeout)`            | Read data from isrpipe (with timeout, blocking)
`public int `[`isrpipe_read_all_timeout`](#group__isr__pipe__read__timeout_1ga817ca3657f003769dba0d882a7eb76f7)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t count,uint32_t timeout)`            | Read data from isrpipe (with timeout, blocking, wait until all read)

## Members

#### `public int `[`isrpipe_read_timeout`](#group__isr__pipe__read__timeout_1ga5d26043d8420d2d9fc4bbeef804319a0)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t count,uint32_t timeout)` 

Read data from isrpipe (with timeout, blocking)

Currently, the timeout parameter is applied on every underlying read, which might be *per single byte*.

This function might return less than `count` bytes

#### Parameters
* `isrpipe` isrpipe object to operate on 

* `buf` buffer to write to 

* `count` number of bytes to read 

* `timeout` timeout in microseconds

#### Returns
number of bytes read 

#### Returns
-ETIMEDOUT on timeout

#### `public int `[`isrpipe_read_all_timeout`](#group__isr__pipe__read__timeout_1ga817ca3657f003769dba0d882a7eb76f7)`(`[`isrpipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-isr_pipe.md#structisrpipe__t)` * isrpipe,uint8_t * buf,size_t count,uint32_t timeout)` 

Read data from isrpipe (with timeout, blocking, wait until all read)

This function is like [isrpipe_read_timeout](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__isr__pipe__read__timeout_1ga5d26043d8420d2d9fc4bbeef804319a0), but will only return on timeout or when `count` bytes have been received.

#### Parameters
* `isrpipe` isrpipe object to operate on 

* `buf` buffer to write to 

* `count` number of bytes to read 

* `timeout` timeout in microseconds

#### Returns
number of bytes read 

#### Returns
-ETIMEDOUT on timeout

