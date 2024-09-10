---
title: api-pkg_mbedtls_entropy_sources.md
description: api-pkg_mbedtls_entropy_sources.md
---
# group `pkg_mbedtls_entropy_sources` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`riot_add_entropy_src_avail`](#group__pkg__mbedtls__entropy__sources_1ga8b5fca590ca5de87ad05de57f9994839)`(mbedtls_entropy_context * ctx)`            | Add all available entropy sources to poll.
`public int `[`riot_hwrng_poll`](#group__pkg__mbedtls__entropy__sources_1ga16f2ec4ae55a43c05ee204fc793f1002)`(void * data,unsigned char * output,size_t len,size_t * olen)`            | Wrapper around RIOTs HWRNG API.
`public int `[`riot_adc_poll`](#group__pkg__mbedtls__entropy__sources_1gab510c584eaa220f0810e502586a02a4d)`(void * data,unsigned char * output,size_t len,size_t * olen)`            | Wrapper around RIOTs ADC entropy API.
`struct `[`entropy_source_mbedtls_riot_t`](#structentropy__source__mbedtls__riot__t) | Structure containing entropy function and its strength.

## Members

#### `public int `[`riot_add_entropy_src_avail`](#group__pkg__mbedtls__entropy__sources_1ga8b5fca590ca5de87ad05de57f9994839)`(mbedtls_entropy_context * ctx)` 

Add all available entropy sources to poll.

This function would typically not be called by a user. It is called during initialization by [entropy_mbedtls_riot_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__mbedtls__entropy_1ga083deee4cf6ed7d861a3c90e9f69fec9).

#### Parameters
* `ctx` Pointer to mbedtls context.

#### Returns
0 if successful 

#### Returns
MBEDTLS_ERR_ENTROPY_MAX_SOURCES on failure

#### `public int `[`riot_hwrng_poll`](#group__pkg__mbedtls__entropy__sources_1ga16f2ec4ae55a43c05ee204fc793f1002)`(void * data,unsigned char * output,size_t len,size_t * olen)` 

Wrapper around RIOTs HWRNG API.

Required to comply with mbed TLS entropy callback function signature.

#### Parameters
* `data` Not used. 

* `output` Pointer to the output buffer to fill. 

* `len` Length of requested entropy in bytes. 

* `olen` Equals len.

#### Returns
0 always

#### `public int `[`riot_adc_poll`](#group__pkg__mbedtls__entropy__sources_1gab510c584eaa220f0810e502586a02a4d)`(void * data,unsigned char * output,size_t len,size_t * olen)` 

Wrapper around RIOTs ADC entropy API.

Required to comply with mbed TLS entropy callback function signature.

#### Parameters
* `data` Not used. 

* `output` Pointer to the output buffer to fill. 

* `len` Length of requested entropy in bytes. 

* `olen` Equals len.

#### Returns
0 if no critical failures occurred, MBEDTLS_ERR_ENTROPY_SOURCE_FAILED otherwise.

# struct `entropy_source_mbedtls_riot_t` 

Structure containing entropy function and its strength.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public mbedtls_entropy_f_source_ptr `[`func`](#structentropy__source__mbedtls__riot__t_1acdc8e75b85ef5d29bffe60448270b0e3) | Pointer to entropy callback func.
`public int `[`strong`](#structentropy__source__mbedtls__riot__t_1add0ff94d1e60a14d963ca366ab0a5683) | Strength of the entropy function (strong=1 for high entropy sources, strong=0 for weak entropy sources)

## Members

#### `public mbedtls_entropy_f_source_ptr `[`func`](#structentropy__source__mbedtls__riot__t_1acdc8e75b85ef5d29bffe60448270b0e3) 

Pointer to entropy callback func.

#### `public int `[`strong`](#structentropy__source__mbedtls__riot__t_1add0ff94d1e60a14d963ca366ab0a5683) 

Strength of the entropy function (strong=1 for high entropy sources, strong=0 for weak entropy sources)

