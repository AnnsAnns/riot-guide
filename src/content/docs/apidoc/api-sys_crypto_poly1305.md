---
title: api-sys_crypto_poly1305.md
description: api-sys_crypto_poly1305.md
---
# group `sys_crypto_poly1305` 

Poly1305 one-time message authentication code.

Poly1305 is a one-time authenticator designed by D.J. Bernstein. It uses a 32-byte one-time key and a message and produces a 16-byte tag.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`POLY1305_BLOCK_SIZE`](#group__sys__crypto__poly1305_1gab612069fc7106b90c6731c74834ee499)            | Poly1305 block size.
`public void `[`poly1305_init`](#group__sys__crypto__poly1305_1ga1d9dc853bafc335591437dd2596e269b)`(`[`poly1305_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_crypto_poly1305.md#structpoly1305__ctx__t)` * ctx,const uint8_t * key)`            | Initialize a poly1305 context.
`public void `[`poly1305_update`](#group__sys__crypto__poly1305_1ga54dd0886c3c30143e3229aded2e477b1)`(`[`poly1305_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_crypto_poly1305.md#structpoly1305__ctx__t)` * ctx,const uint8_t * data,size_t len)`            | Update the poly1305 context with a block of message.
`public void `[`poly1305_finish`](#group__sys__crypto__poly1305_1ga143bb5a05883efe0771951b7fdb14476)`(`[`poly1305_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_crypto_poly1305.md#structpoly1305__ctx__t)` * ctx,uint8_t * mac)`            | Finish the poly1305 operation.
`public void `[`poly1305_auth`](#group__sys__crypto__poly1305_1gaed25d289797233b406d1d5b75e901898)`(uint8_t * mac,const uint8_t * data,size_t len,const uint8_t * key)`            | Calculate a single poly1305 tag.
`struct `[`poly1305_ctx_t`](#structpoly1305__ctx__t) | Poly1305 context.

## Members

#### `define `[`POLY1305_BLOCK_SIZE`](#group__sys__crypto__poly1305_1gab612069fc7106b90c6731c74834ee499) 

Poly1305 block size.

#### `public void `[`poly1305_init`](#group__sys__crypto__poly1305_1ga1d9dc853bafc335591437dd2596e269b)`(`[`poly1305_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_crypto_poly1305.md#structpoly1305__ctx__t)` * ctx,const uint8_t * key)` 

Initialize a poly1305 context.

#### Parameters
* `ctx` Poly1305 context 

* `key` 32 byte key

#### `public void `[`poly1305_update`](#group__sys__crypto__poly1305_1ga54dd0886c3c30143e3229aded2e477b1)`(`[`poly1305_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_crypto_poly1305.md#structpoly1305__ctx__t)` * ctx,const uint8_t * data,size_t len)` 

Update the poly1305 context with a block of message.

#### Parameters
* `ctx` poly1305 context 

* `data` ptr to the message 

* `len` length of the message

#### `public void `[`poly1305_finish`](#group__sys__crypto__poly1305_1ga143bb5a05883efe0771951b7fdb14476)`(`[`poly1305_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_crypto_poly1305.md#structpoly1305__ctx__t)` * ctx,uint8_t * mac)` 

Finish the poly1305 operation.

#### Parameters
* `ctx` poly1305 context 

* `mac` 16 byte buffer for the tag

#### `public void `[`poly1305_auth`](#group__sys__crypto__poly1305_1gaed25d289797233b406d1d5b75e901898)`(uint8_t * mac,const uint8_t * data,size_t len,const uint8_t * key)` 

Calculate a single poly1305 tag.

#### Parameters
* `mac` 16 byte buffer for the tag 

* `data` ptr to the message 

* `len` length of the message 

* `key` 32 byte key

# struct `poly1305_ctx_t` 

Poly1305 context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`r`](#structpoly1305__ctx__t_1a67e6c5134ee04567c844566b26cde88f) | first key part
`public uint32_t `[`pad`](#structpoly1305__ctx__t_1a155ec295b4c2cfa6390a130976a8ad1a) | Second key part
`public uint32_t `[`h`](#structpoly1305__ctx__t_1a7d2a3521313ff5782a825584ae7306b8) | Hash
`public uint32_t `[`c`](#structpoly1305__ctx__t_1a050de36e95564e83d318ec9d2f38683f) | Message chunk
`public size_t `[`c_idx`](#structpoly1305__ctx__t_1ae4915acb131cbf792f6eb757ed087b1c) | Chunk length

## Members

#### `public uint32_t `[`r`](#structpoly1305__ctx__t_1a67e6c5134ee04567c844566b26cde88f) 

first key part

#### `public uint32_t `[`pad`](#structpoly1305__ctx__t_1a155ec295b4c2cfa6390a130976a8ad1a) 

Second key part

#### `public uint32_t `[`h`](#structpoly1305__ctx__t_1a7d2a3521313ff5782a825584ae7306b8) 

Hash

#### `public uint32_t `[`c`](#structpoly1305__ctx__t_1a050de36e95564e83d318ec9d2f38683f) 

Message chunk

#### `public size_t `[`c_idx`](#structpoly1305__ctx__t_1ae4915acb131cbf792f6eb757ed087b1c) 

Chunk length

