---
title: api-pkg_mbedtls_entropy.md
description: api-pkg_mbedtls_entropy.md
---
# group `pkg_mbedtls_entropy` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`entropy_mbedtls_riot_init`](#group__pkg__mbedtls__entropy_1ga083deee4cf6ed7d861a3c90e9f69fec9)`(void)`            | Initialize the Mbed TLS entropy module.
`public int `[`entropy_mbedtls_riot_retrieve`](#group__pkg__mbedtls__entropy_1gaae9d74613ce32ae0ba3c2824b9a49a17)`(unsigned char * output,size_t len)`            | Retrieve entropy values after initialization.
`public void `[`entropy_mbedtls_riot_uninit`](#group__pkg__mbedtls__entropy_1ga8b3b39d585dd9abaf8e9e1ed4a6502f6)`(void)`            | Uninitialize the Mbed TLS entropy module.
`public int `[`entropy_mbedtls_riot_get`](#group__pkg__mbedtls__entropy_1ga59bebd2024df2eaf446ce4c0cb8e81a6)`(unsigned char * output,size_t len)`            | Get entropy values.

## Members

#### `public int `[`entropy_mbedtls_riot_init`](#group__pkg__mbedtls__entropy_1ga083deee4cf6ed7d861a3c90e9f69fec9)`(void)` 

Initialize the Mbed TLS entropy module.

A context structure is allocated and managed internally. Connect all available entropy sources to the poll.

#### Parameters
* `0` if successful 

* `MBEDTLS_ERR_ENTROPY_MAX_SOURCES` on failure

#### `public int `[`entropy_mbedtls_riot_retrieve`](#group__pkg__mbedtls__entropy_1gaae9d74613ce32ae0ba3c2824b9a49a17)`(unsigned char * output,size_t len)` 

Retrieve entropy values after initialization.

Module is initialized already (i.e. [entropy_mbedtls_riot_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__mbedtls__entropy_1ga083deee4cf6ed7d861a3c90e9f69fec9) has been called).

#### Parameters
* `output` Pointer to the output buffer to fill with entropy values. 

* `len` Length of requested entropy in bytes.

#### Parameters
* `0` if successful 

* `MBEDTLS_ERR_ENTROPY_SOURCE_FAILED` if source failed

#### `public void `[`entropy_mbedtls_riot_uninit`](#group__pkg__mbedtls__entropy_1ga8b3b39d585dd9abaf8e9e1ed4a6502f6)`(void)` 

Uninitialize the Mbed TLS entropy module.

Frees the internally allocated context. Mbed TLS zeroizes the memory.

#### `public int `[`entropy_mbedtls_riot_get`](#group__pkg__mbedtls__entropy_1ga59bebd2024df2eaf446ce4c0cb8e81a6)`(unsigned char * output,size_t len)` 

Get entropy values.

Convenience function. A context structure is allocated and managed internally. Requested entropy values are gathered and the context is uninitialized afterwards.

#### Parameters
* `output` Pointer to the output buffer to fill with entropy values. 

* `len` Length of requested entropy in bytes.

#### Parameters
* `0` if successful 

* `MBEDTLS_ERR_ENTROPY_MAX_SOURCES` on failure 

* `MBEDTLS_ERR_ENTROPY_SOURCE_FAILED` if source failed

