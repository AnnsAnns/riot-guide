---
title: api-sys_hashes_aes128_cmac.md
description: api-sys_hashes_aes128_cmac.md
---
# group `sys_hashes_aes128_cmac` 

Implementation of the AES128 CMAC hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`AES128_CMAC_BLOCK_SIZE`](#group__sys__hashes__aes128__cmac_1gaa98c019186db3c6eceb5b16b9d23c140)            | Length of AES128_CMAC block in bytes.
`public int `[`aes128_cmac_init`](#group__sys__hashes__aes128__cmac_1ga0ecfa1fc93fa2fb8453b32003175c079)`(`[`aes128_cmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_aes128_cmac.md#structaes128__cmac__context__t)` * ctx,const uint8_t * key,uint8_t key_size)`            | Initialize AES128 CMAC message digest context.
`public void `[`aes128_cmac_update`](#group__sys__hashes__aes128__cmac_1ga899f0b6eee8a37fdff65c1cde61ae97a)`(`[`aes128_cmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_aes128_cmac.md#structaes128__cmac__context__t)` * ctx,const void * data,size_t len)`            | Update the AES128 CMAC context with a portion of the message being hashed.
`public void `[`aes128_cmac_final`](#group__sys__hashes__aes128__cmac_1ga69c48c93982e5806127784d4bf2f8ea7)`(`[`aes128_cmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_aes128_cmac.md#structaes128__cmac__context__t)` * ctx,void * digest)`            | Finalizes the CMAC message digest.
`struct `[`aes128_cmac_context_t`](#structaes128__cmac__context__t) | AES128_CMAC calculation context.

## Members

#### `define `[`AES128_CMAC_BLOCK_SIZE`](#group__sys__hashes__aes128__cmac_1gaa98c019186db3c6eceb5b16b9d23c140) 

Length of AES128_CMAC block in bytes.

#### `public int `[`aes128_cmac_init`](#group__sys__hashes__aes128__cmac_1ga0ecfa1fc93fa2fb8453b32003175c079)`(`[`aes128_cmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_aes128_cmac.md#structaes128__cmac__context__t)` * ctx,const uint8_t * key,uint8_t key_size)` 

Initialize AES128 CMAC message digest context.

#### Parameters
* `ctx` Pointer to the AES128 CMAC context to initialize 

* `key` Key to be set 

* `key_size` Size of the key

#### Returns
CIPHER_INIT_SUCCESS if the initialization was successful. CIPHER_ERR_INVALID_KEY_SIZE if the key size is not valid.

#### `public void `[`aes128_cmac_update`](#group__sys__hashes__aes128__cmac_1ga899f0b6eee8a37fdff65c1cde61ae97a)`(`[`aes128_cmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_aes128_cmac.md#structaes128__cmac__context__t)` * ctx,const void * data,size_t len)` 

Update the AES128 CMAC context with a portion of the message being hashed.

#### Parameters
* `ctx` Pointer to the AES128 CMAC context to update 

* `data` Input data 

* `len` Length of `data`

#### `public void `[`aes128_cmac_final`](#group__sys__hashes__aes128__cmac_1ga69c48c93982e5806127784d4bf2f8ea7)`(`[`aes128_cmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_aes128_cmac.md#structaes128__cmac__context__t)` * ctx,void * digest)` 

Finalizes the CMAC message digest.

#### Parameters
* `ctx` Pointer to the AES128 CMAC context 

* `digest` Result location

# struct `aes128_cmac_context_t` 

AES128_CMAC calculation context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cipher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcipher__t)` `[`aes128_ctx`](#structaes128__cmac__context__t_1ace7a9022144161793c11e7693e3ed8b7) | AES128 context.
`public uint8_t `[`X`](#structaes128__cmac__context__t_1aae37bb5812c4abdc938631f92bfa9288) | auxiliary array for CMAC calculations
`public uint8_t `[`M_last`](#structaes128__cmac__context__t_1acc81dfc841e16b2db6bb4e613c372299) | current last block
`public uint32_t `[`M_n`](#structaes128__cmac__context__t_1a5ffe6902e880d37946cb6d1ac973d43b) | last byte in last block

## Members

#### `public `[`cipher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcipher__t)` `[`aes128_ctx`](#structaes128__cmac__context__t_1ace7a9022144161793c11e7693e3ed8b7) 

AES128 context.

#### `public uint8_t `[`X`](#structaes128__cmac__context__t_1aae37bb5812c4abdc938631f92bfa9288) 

auxiliary array for CMAC calculations

#### `public uint8_t `[`M_last`](#structaes128__cmac__context__t_1acc81dfc841e16b2db6bb4e613c372299) 

current last block

#### `public uint32_t `[`M_n`](#structaes128__cmac__context__t_1a5ffe6902e880d37946cb6d1ac973d43b) 

last byte in last block

