---
title: api-sys_pipe.md
description: api-sys_pipe.md
---
# group `sys_pipe` 

Generic pipe implementation.

This pipe implementation is a tight wrapper around a ringbuffer. It sends the calling thread to sleep if the ringbuffer is full or empty, respectively. It can be used in ISRs, too.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PIPE_BUF`](#group__sys__pipe_1gad2c1c798d36bdba42d5f4d50da5ae200)            | Size of a dynamically malloc'd pipe.
`public void `[`pipe_init`](#group__sys__pipe_1ga9a26cc475116e269fed19b58f95064a3)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * pipe,`[`ringbuffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structringbuffer__t)` * rb,void(*)(void *) free)`            | Initialize a pipe.
`public ssize_t `[`pipe_read`](#group__sys__pipe_1ga3d2c7c839aad4b96d208738889af248b)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * pipe,void * buf,size_t n)`            | Read from a pipe.
`public ssize_t `[`pipe_write`](#group__sys__pipe_1ga94240cdae3a1ed82001b052d177b79f5)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * pipe,const void * buf,size_t n)`            | Write to a pipe.
`public `[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * `[`pipe_malloc`](#group__sys__pipe_1ga135b26ce0f921946d95eb999aecc550f)`(unsigned size)`            | Dynamically allocate a pipe with room for `size` bytes.
`public void `[`pipe_free`](#group__sys__pipe_1ga7d8d028467cbe4f562bb3699dfabad63)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * rp)`            | Free a pipe.
`struct `[`riot_pipe`](#structriot__pipe) | A generic pipe.

## Members

#### `define `[`PIPE_BUF`](#group__sys__pipe_1gad2c1c798d36bdba42d5f4d50da5ae200) 

Size of a dynamically malloc'd pipe.

#### `public void `[`pipe_init`](#group__sys__pipe_1ga9a26cc475116e269fed19b58f95064a3)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * pipe,`[`ringbuffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structringbuffer__t)` * rb,void(*)(void *) free)` 

Initialize a pipe.

#### Parameters
* `pipe` Datum to initialize. 

* `rb` Ringbuffer to use. Needs to be initialized! 

* `free` Function to call by [pipe_free()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga7d8d028467cbe4f562bb3699dfabad63). Used like `pipe->free(pipe)`. Should be `NULL` for statically allocated pipes.

#### `public ssize_t `[`pipe_read`](#group__sys__pipe_1ga3d2c7c839aad4b96d208738889af248b)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * pipe,void * buf,size_t n)` 

Read from a pipe.

Only one thread may access the pipe readingly at once. If the pipe is empty, then the current thread is send sleeping. It gets woken up once there is data ready in the pipe. In an ISR ([irq_is_in()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1gaf61b61eb6e077631e2b12e233f6e3ba2)) 0 will returned if the pipe is empty. 
#### Parameters
* `pipe` Pipe to read from. 

* `buf` Buffer to write into 

* `n` Size of buffer. 

#### Returns
`> 0` if data could be read. `== 0` if the pipe is empty and isISR().

#### `public ssize_t `[`pipe_write`](#group__sys__pipe_1ga94240cdae3a1ed82001b052d177b79f5)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * pipe,const void * buf,size_t n)` 

Write to a pipe.

Only one thread may access the pipe writingly at once. If the pipe is full, then the current thread is send sleeping. It gets woken up once there is room again in the pipe. In an ISR ([irq_is_in()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1gaf61b61eb6e077631e2b12e233f6e3ba2)) 0 will returned if the pipe is full. 
#### Parameters
* `pipe` Pipe to write to. 

* `buf` Buffer to read from. 

* `n` Size of buffer. 

#### Returns
`> 0` if data could be written. `== 0` if the pipe is full and isISR().

#### `public `[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * `[`pipe_malloc`](#group__sys__pipe_1ga135b26ce0f921946d95eb999aecc550f)`(unsigned size)` 

Dynamically allocate a pipe with room for `size` bytes.

This function uses `[malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392)` and may break real-time behaviors. Try not to use this function. 
#### Parameters
* `size` Size of the underlying ringbuffer to allocate. 

#### Returns
Newly allocated pipe. NULL if the memory is exhausted.

#### `public void `[`pipe_free`](#group__sys__pipe_1ga7d8d028467cbe4f562bb3699dfabad63)`(`[`pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga8dd4d1469513fb7231b49cfe74c66f37)` * rp)` 

Free a pipe.

On statically allocated pipes you do not have to call this function. Most likely you will only need this function in junction with [pipe_malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga135b26ce0f921946d95eb999aecc550f). 
#### Parameters
* `rp` Pipe to free.

# struct `riot_pipe` 

A generic pipe.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ringbuffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structringbuffer__t)` * `[`rb`](#structriot__pipe_1ab2f08503e480d41236db0aee4a088b39) | Wrapped ringbuffer.
`public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`read_blocked`](#structriot__pipe_1a42c4b11877f09bc9a6c81a2959b97215) | A thread that wants to write to this full pipe.
`public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`write_blocked`](#structriot__pipe_1ad3588bc795b16cb94d54ea81d48f2410) | A thread that wants to read from this empty pipe.
`public void(* `[`free`](#structriot__pipe_1abe09d91209eb2389a7d7838ce29e874d) | Function to call by [pipe_free()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga7d8d028467cbe4f562bb3699dfabad63).

## Members

#### `public `[`ringbuffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structringbuffer__t)` * `[`rb`](#structriot__pipe_1ab2f08503e480d41236db0aee4a088b39) 

Wrapped ringbuffer.

#### `public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`read_blocked`](#structriot__pipe_1a42c4b11877f09bc9a6c81a2959b97215) 

A thread that wants to write to this full pipe.

#### `public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`write_blocked`](#structriot__pipe_1ad3588bc795b16cb94d54ea81d48f2410) 

A thread that wants to read from this empty pipe.

#### `public void(* `[`free`](#structriot__pipe_1abe09d91209eb2389a7d7838ce29e874d) 

Function to call by [pipe_free()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pipe_1ga7d8d028467cbe4f562bb3699dfabad63).

Used like `pipe->free(pipe)`.

