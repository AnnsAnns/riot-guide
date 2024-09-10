---
title: api-sys_chunk_buffer.md
description: api-sys_chunk_buffer.md
---
# group `sys_chunk_buffer` 

Implementation of a Ringbuffer to store chunks of data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_CHUNK_NUM_MAX`](#group__sys__chunk__buffer_1gac83eacacced8653559d6e5c70566b9a4)            | The maximum number of chunks that can be stored in a Chunked Ringbuffer.
`public void `[`crb_init`](#group__sys__chunk__buffer_1ga730fe7ecaea764daade91e9aed603079)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,void * buffer,size_t len)`            | Initialize a Chunked Ringbuffer.
`public inline static bool `[`crb_start_chunk`](#group__sys__chunk__buffer_1ga74dafcd78d88413f472d5d121ec2c917)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb)`            | Start a new chunk on the ringbuffer.
`public inline static bool `[`crb_add_byte`](#group__sys__chunk__buffer_1ga5895a7cb734942de23dc193054e9eedc)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,uint8_t b)`            | Insert a byte into the current chunk.
`public bool `[`crb_add_bytes`](#group__sys__chunk__buffer_1ga9970295a8f8e5be127e8cdf533c58eea)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,const void * data,size_t len)`            | Insert a number of bytes into the current chunk.
`public bool `[`crb_end_chunk`](#group__sys__chunk__buffer_1ga0e704fb61c3dd8752cb7e7407f419e91)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,bool valid)`            | Close the current chunk.
`public bool `[`crb_add_chunk`](#group__sys__chunk__buffer_1gabfe625905db57c1bd3c09c053f02a8d5)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,const void * data,size_t len)`            | Add a complete chunk to the Ringbuffer.
`public bool `[`crb_get_chunk_size`](#group__sys__chunk__buffer_1gab65948834e1bd15502aba37f7041c6e7)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,size_t * len)`            | Get the size of the first valid chunk.
`public bool `[`crb_peek_bytes`](#group__sys__chunk__buffer_1ga4976327b8fe874dc9c49e378777b2780)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,void * dst,size_t offset,size_t len)`            | Get a number of bytes from the first valid chunk without consuming it.
`public bool `[`crb_consume_chunk`](#group__sys__chunk__buffer_1gad9986c707254e1bbc2fa688005a93051)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,void * dst,size_t len)`            | Remove a chunk from the valid chunk array.
`public bool `[`crb_chunk_foreach`](#group__sys__chunk__buffer_1gadbc4c9903ad5383ed418b95cbda243b6)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,`[`crb_foreach_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__chunk__buffer_1ga8716d8bf3a6d5344636596027bdeaeda)` func,void * ctx)`            | Execute a callback for each byte in the first valid chunk The callback function may be called twice if the chunk is non-continuous.
`struct `[`chunk_ringbuf_t`](#structchunk__ringbuf__t) | A chunked ringbuffer.

## Members

#### `define `[`CONFIG_CHUNK_NUM_MAX`](#group__sys__chunk__buffer_1gac83eacacced8653559d6e5c70566b9a4) 

The maximum number of chunks that can be stored in a Chunked Ringbuffer.

#### `public void `[`crb_init`](#group__sys__chunk__buffer_1ga730fe7ecaea764daade91e9aed603079)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,void * buffer,size_t len)` 

Initialize a Chunked Ringbuffer.

#### Parameters
* `rb` The Ringbuffer to work on 

* `buffer` The Ringbuffer work area 

* `len` Size of the Ringbuffer work area

#### `public inline static bool `[`crb_start_chunk`](#group__sys__chunk__buffer_1ga74dafcd78d88413f472d5d121ec2c917)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb)` 

Start a new chunk on the ringbuffer.

This function is expected to be called in ISR context / with interrupts disabled.

#### Parameters
* `rb` The Ringbuffer to work on

#### Returns
true If a new chunk could be started 

#### Returns
false If the ringbuffer is full

#### `public inline static bool `[`crb_add_byte`](#group__sys__chunk__buffer_1ga5895a7cb734942de23dc193054e9eedc)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,uint8_t b)` 

Insert a byte into the current chunk.

This function is expected to be called in ISR context / with interrupts disabled.

A new chunk has been started with [crb_start_chunk](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__chunk__buffer_1ga74dafcd78d88413f472d5d121ec2c917)

#### Parameters
* `rb` The Ringbuffer to work on 

* `b` The byte to write

#### Returns
true If the byte could be written 

#### Returns
false If the ringbuffer is full

#### `public bool `[`crb_add_bytes`](#group__sys__chunk__buffer_1ga9970295a8f8e5be127e8cdf533c58eea)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,const void * data,size_t len)` 

Insert a number of bytes into the current chunk.

This function is expected to be called in ISR context / with interrupts disabled.

A new chunk has been started with [crb_start_chunk](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__chunk__buffer_1ga74dafcd78d88413f472d5d121ec2c917)

#### Parameters
* `rb` The Ringbuffer to work on 

* `data` The data to write 

* `len` Size of data

#### Returns
true If the bytes could be written 

#### Returns
false If the ringbuffer is full

#### `public bool `[`crb_end_chunk`](#group__sys__chunk__buffer_1ga0e704fb61c3dd8752cb7e7407f419e91)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,bool valid)` 

Close the current chunk.

This function is expected to be called in ISR context / with interrupts disabled.

#### Parameters
* `rb` The Ringbuffer to work on 

* `valid` True if the chunk is valid and should be stored False if the current chunk should be discarded

#### Returns
true If the chunk could be stored in the valid chunk array 

#### Returns
false If there is no more space in the valid chunk array

#### `public bool `[`crb_add_chunk`](#group__sys__chunk__buffer_1gabfe625905db57c1bd3c09c053f02a8d5)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,const void * data,size_t len)` 

Add a complete chunk to the Ringbuffer.

This function is expected to be called in ISR context / with interrupts disabled.

This is a convenience function that combines [crb_start_chunk](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__chunk__buffer_1ga74dafcd78d88413f472d5d121ec2c917), [crb_add_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__chunk__buffer_1ga9970295a8f8e5be127e8cdf533c58eea) and [crb_end_chunk](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__chunk__buffer_1ga0e704fb61c3dd8752cb7e7407f419e91)

#### Parameters
* `rb` The Ringbuffer to work on 

* `data` The data to write 

* `len` Size of data

#### Returns
true If the chunk could be added to the valid chunk array 

#### Returns
false There was not enough space and the chunk was discarded

#### `public bool `[`crb_get_chunk_size`](#group__sys__chunk__buffer_1gab65948834e1bd15502aba37f7041c6e7)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,size_t * len)` 

Get the size of the first valid chunk.

#### Parameters
* `rb` The Ringbuffer to work on 

* `len` Pointer to store the size of the first valid chunk

#### Returns
true If a valid chunk exists and `size` was written 

#### Returns
false If no valid chunk exists

#### `public bool `[`crb_peek_bytes`](#group__sys__chunk__buffer_1ga4976327b8fe874dc9c49e378777b2780)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,void * dst,size_t offset,size_t len)` 

Get a number of bytes from the first valid chunk without consuming it.

#### Parameters
* `rb` The Ringbuffer to work on 

* `dst` Destination buffer 

* `offset` Offset to the start of the chunk 

* `len` Number of bytes to read

#### Returns
true If the data could be read 

#### Returns
false If no valid chunk exists or the bytes could not be read

#### `public bool `[`crb_consume_chunk`](#group__sys__chunk__buffer_1gad9986c707254e1bbc2fa688005a93051)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,void * dst,size_t len)` 

Remove a chunk from the valid chunk array.

#### Parameters
* `rb` The Ringbuffer to work on 

* `dst` Destination where the chunk contents should be copied to. May be NULL, then the chunk is just discarded. 

* `len` Max number of bytes to read. If there are bytes left in the chunk beyond that, they will be discarded

#### Returns
true If a chunk was consumed 

#### Returns
false If no valid chunk did exist

#### `public bool `[`crb_chunk_foreach`](#group__sys__chunk__buffer_1gadbc4c9903ad5383ed418b95cbda243b6)`(`[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` * rb,`[`crb_foreach_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__chunk__buffer_1ga8716d8bf3a6d5344636596027bdeaeda)` func,void * ctx)` 

Execute a callback for each byte in the first valid chunk The callback function may be called twice if the chunk is non-continuous.

This function will not consume the chunk.

#### Parameters
* `rb` The Ringbuffer to work on 

* `func` The function to call for each byte 

* `ctx` Optional function argument

#### Returns
true If a valid chunk exits on which the function was executed 

#### Returns
false If no valid chunk exists

# struct `chunk_ringbuf_t` 

A chunked ringbuffer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`buffer`](#structchunk__ringbuf__t_1a48f93a5d080e7bacbf2b78801fe0cc08) | pointer to the memory to hold the data
`public uint8_t * `[`buffer_end`](#structchunk__ringbuf__t_1a1cd3e5578395f27309d24591450d2cae) | last data element
`public uint8_t * `[`cur`](#structchunk__ringbuf__t_1a72a2f04fb626ecddf37e3d8cdac56997) | current write pointer
`public uint8_t * `[`cur_start`](#structchunk__ringbuf__t_1a130c7500ab67152b9aa6144f0caaba69) | start of the currently written chunk
`public uint8_t * `[`protect`](#structchunk__ringbuf__t_1ab1992df44560b203052056ec83ccaa35) | start of the first valid chunk
`public uint8_t * `[`chunk_start`](#structchunk__ringbuf__t_1a493ef595decfacd9dc7d6bba67447799) | Array to hold start of done chunks.
`public uint16_t `[`chunk_len`](#structchunk__ringbuf__t_1a264755425a9b86791210a79b88722dc2) | Length of valid chunks.
`public uint8_t `[`chunk_cur`](#structchunk__ringbuf__t_1a0a6390ea337e690b80e7d7e11bb63ab1) | Index of the first valid chunk.

## Members

#### `public uint8_t * `[`buffer`](#structchunk__ringbuf__t_1a48f93a5d080e7bacbf2b78801fe0cc08) 

pointer to the memory to hold the data

#### `public uint8_t * `[`buffer_end`](#structchunk__ringbuf__t_1a1cd3e5578395f27309d24591450d2cae) 

last data element

#### `public uint8_t * `[`cur`](#structchunk__ringbuf__t_1a72a2f04fb626ecddf37e3d8cdac56997) 

current write pointer

#### `public uint8_t * `[`cur_start`](#structchunk__ringbuf__t_1a130c7500ab67152b9aa6144f0caaba69) 

start of the currently written chunk

#### `public uint8_t * `[`protect`](#structchunk__ringbuf__t_1ab1992df44560b203052056ec83ccaa35) 

start of the first valid chunk

#### `public uint8_t * `[`chunk_start`](#structchunk__ringbuf__t_1a493ef595decfacd9dc7d6bba67447799) 

Array to hold start of done chunks.

#### `public uint16_t `[`chunk_len`](#structchunk__ringbuf__t_1a264755425a9b86791210a79b88722dc2) 

Length of valid chunks.

#### `public uint8_t `[`chunk_cur`](#structchunk__ringbuf__t_1a0a6390ea337e690b80e7d7e11bb63ab1) 

Index of the first valid chunk.

