---
title: api-sys_crypto_chacha20poly1305.md
description: api-sys_crypto_chacha20poly1305.md
---
# group `sys_crypto_chacha20poly1305` 

Provides RFC 8439 style chacha20poly1305.

This module provides the chacha20poly1305 AEAD symmetric cipher following [rfc 8439](https://tools.ietf.org/html/rfc8439).

Nonces must be unique per message for a single key. They are allowed to be predictable, e.g. a message counter and are allowed to be visible during transmission.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CHACHA20POLY1305_KEY_BYTES`](#group__sys__crypto__chacha20poly1305_1ga92d514630de3cb544a30b836ded7e6fd)            | Key length in bytes.
`define `[`CHACHA20POLY1305_NONCE_BYTES`](#group__sys__crypto__chacha20poly1305_1gac11f6a5cb41e6cc64f2e6e98d1ff24bc)            | Nonce length in bytes.
`define `[`CHACHA20POLY1305_TAG_BYTES`](#group__sys__crypto__chacha20poly1305_1ga48cc85348123f580dc6ef04332159c75)            | Tag length in bytes.
`public void `[`chacha20poly1305_encrypt`](#group__sys__crypto__chacha20poly1305_1ga835da70a8adeba98ddc56213112c1267)`(uint8_t * cipher,const uint8_t * msg,size_t msglen,const uint8_t * aad,size_t aadlen,const uint8_t * key,const uint8_t * nonce)`            | Encrypt a plaintext to ciphertext and append a tag to protect the ciphertext and additional data.
`public int `[`chacha20poly1305_decrypt`](#group__sys__crypto__chacha20poly1305_1ga3fd50f2cd3bdf4d4401632cc2aae5c7f)`(const uint8_t * cipher,size_t cipherlen,uint8_t * msg,size_t * msglen,const uint8_t * aad,size_t aadlen,const uint8_t * key,const uint8_t * nonce)`            | Verify the tag and decrypt a ciphertext to plaintext.
`union `[`chacha20poly1305_ctx_t`](#unionchacha20poly1305__ctx__t) | Chacha20poly1305 state struct.

## Members

#### `define `[`CHACHA20POLY1305_KEY_BYTES`](#group__sys__crypto__chacha20poly1305_1ga92d514630de3cb544a30b836ded7e6fd) 

Key length in bytes.

#### `define `[`CHACHA20POLY1305_NONCE_BYTES`](#group__sys__crypto__chacha20poly1305_1gac11f6a5cb41e6cc64f2e6e98d1ff24bc) 

Nonce length in bytes.

#### `define `[`CHACHA20POLY1305_TAG_BYTES`](#group__sys__crypto__chacha20poly1305_1ga48cc85348123f580dc6ef04332159c75) 

Tag length in bytes.

#### `public void `[`chacha20poly1305_encrypt`](#group__sys__crypto__chacha20poly1305_1ga835da70a8adeba98ddc56213112c1267)`(uint8_t * cipher,const uint8_t * msg,size_t msglen,const uint8_t * aad,size_t aadlen,const uint8_t * key,const uint8_t * nonce)` 

Encrypt a plaintext to ciphertext and append a tag to protect the ciphertext and additional data.

It is allowed to have cipher == msg as long as there is [CHACHA20POLY1305_TAG_BYTES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__crypto__chacha20poly1305_1ga48cc85348123f580dc6ef04332159c75) space left to hold the authentication tag

#### Parameters
* `cipher` resulting ciphertext, is CHACHA20POLY1305_TAG_BYTES longer than the message length 

* `msg` message to encrypt 

* `msglen` length in bytes of the message 

* `aad` additional authenticated data to protect 

* `aadlen` length of the additional authenticated data 

* `key` key to encrypt with, must be CHACHA20POLY1305_KEY_BYTES long 

* `nonce` Nonce to use. Must be CHACHA20POLY1305_NONCE_BYTES long

#### `public int `[`chacha20poly1305_decrypt`](#group__sys__crypto__chacha20poly1305_1ga3fd50f2cd3bdf4d4401632cc2aae5c7f)`(const uint8_t * cipher,size_t cipherlen,uint8_t * msg,size_t * msglen,const uint8_t * aad,size_t aadlen,const uint8_t * key,const uint8_t * nonce)` 

Verify the tag and decrypt a ciphertext to plaintext.

It is allowed to have cipher == msg

#### Parameters
* `cipher` resulting ciphertext, is CHACHA20POLY1305_TAG_BYTES longer than the message length 

* `cipherlen` length of the ciphertext 

* `msg` message to encrypt 

* `msglen` resulting length in bytes of the message 

* `aad` additional authenticated data to verify 

* `aadlen` length of the additional authenticated data 

* `key` key to decrypt with, must be CHACHA20POLY1305_KEY_BYTES long 

* `nonce` Nonce to use. Must be CHACHA20POLY1305_NONCE_BYTES long

