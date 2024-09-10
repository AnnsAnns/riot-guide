---
title: api-sys_base64.md
description: api-sys_base64.md
---
# group `sys_base64` 

base64 encoder and decoder

encoding and decoding functions for base64 Martin Landsmann [Martin.Landsmann@HAW-Hamburg.de](mailto:Martin.Landsmann@HAW-Hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BASE64_SUCCESS`](#group__sys__base64_1ga10cff8934cbee0005581d1ca63220eef)            | return value for success
`define `[`BASE64_ERROR_BUFFER_OUT`](#group__sys__base64_1gae646aab626d4ef1b3395eea423cf42c7)            | error value for invalid output buffer pointer
`define `[`BASE64_ERROR_BUFFER_OUT_SIZE`](#group__sys__base64_1ga5b70cb0c970ac841836a531a53748a15)            | error value for invalid output buffer size
`define `[`BASE64_ERROR_DATA_IN`](#group__sys__base64_1ga8082593ed83303d1b65aa39bba0352da)            | error value for invalid input buffer
`define `[`BASE64_ERROR_DATA_IN_SIZE`](#group__sys__base64_1ga0e35c965df073b23e85df23d01545edc)            | error value for invalid input buffer size
`public inline static size_t `[`base64_estimate_decode_size`](#group__sys__base64_1gab6b78333f9a24f27ebc6f9b8c0673ab9)`(size_t base64_in_size)`            | Estimates the amount of bytes needed for decoding `base64_in_size` characters from base64.
`public inline static size_t `[`base64_estimate_encode_size`](#group__sys__base64_1ga5327a6f063f4dd025e3aaee87054536e)`(size_t data_in_size)`            | Estimates the length of the resulting string after encoding `data_in_size` bytes into base64.
`public int `[`base64_encode`](#group__sys__base64_1ga8f2d558b4d1a330ae3792ac9df9ee259)`(const void * data_in,size_t data_in_size,void * base64_out,size_t * base64_out_size)`            | Encodes a given datum to base64 and save the result to the given destination.
`public int `[`base64url_encode`](#group__sys__base64_1ga5373b27225516316665361de10bf0169)`(const void * data_in,size_t data_in_size,void * base64_out,size_t * base64_out_size)`            | Encodes a given datum to base64 with URL and Filename Safe Alphabet and save the result to the given destination.
`public int `[`base64_decode`](#group__sys__base64_1ga3ae43448c50e4ed07b2d34393f669bce)`(const void * base64_in,size_t base64_in_size,void * data_out,size_t * data_out_size)`            | Decodes a given base64 string and save the result to the given destination.

## Members

#### `define `[`BASE64_SUCCESS`](#group__sys__base64_1ga10cff8934cbee0005581d1ca63220eef) 

return value for success

#### `define `[`BASE64_ERROR_BUFFER_OUT`](#group__sys__base64_1gae646aab626d4ef1b3395eea423cf42c7) 

error value for invalid output buffer pointer

#### `define `[`BASE64_ERROR_BUFFER_OUT_SIZE`](#group__sys__base64_1ga5b70cb0c970ac841836a531a53748a15) 

error value for invalid output buffer size

#### `define `[`BASE64_ERROR_DATA_IN`](#group__sys__base64_1ga8082593ed83303d1b65aa39bba0352da) 

error value for invalid input buffer

#### `define `[`BASE64_ERROR_DATA_IN_SIZE`](#group__sys__base64_1ga0e35c965df073b23e85df23d01545edc) 

error value for invalid input buffer size

#### `public inline static size_t `[`base64_estimate_decode_size`](#group__sys__base64_1gab6b78333f9a24f27ebc6f9b8c0673ab9)`(size_t base64_in_size)` 

Estimates the amount of bytes needed for decoding `base64_in_size` characters from base64.

#### Parameters
* `base64_in_size` Size of the string to be decoded 

#### Returns
Amount of bytes estimated to be used after decoding

#### `public inline static size_t `[`base64_estimate_encode_size`](#group__sys__base64_1ga5327a6f063f4dd025e3aaee87054536e)`(size_t data_in_size)` 

Estimates the length of the resulting string after encoding `data_in_size` bytes into base64.

#### Parameters
* `data_in_size` Amount of bytes to be encoded 

#### Returns
Amount of characters the output string is estimated to have

#### `public int `[`base64_encode`](#group__sys__base64_1ga8f2d558b4d1a330ae3792ac9df9ee259)`(const void * data_in,size_t data_in_size,void * base64_out,size_t * base64_out_size)` 

Encodes a given datum to base64 and save the result to the given destination.

#### Parameters
* `data_in` pointer to the datum to encode 

* `data_in_size` the size of `data_in`

* `base64_out` pointer to store the encoded base64 string 

* `base64_out_size` pointer to the variable containing the size of `base64_out.` This value is overwritten with the estimated size used for the encoded base64 string on BASE64_ERROR_BUFFER_OUT_SIZE. This value is overwritten with the actual used size for the encoded base64 string on BASE64_SUCCESS.

#### Returns
BASE64_SUCCESS on success, BASE64_ERROR_BUFFER_OUT_SIZE on insufficient size for encoding to `base64_out`, BASE64_ERROR_BUFFER_OUT if `base64_out` equals NULL but the `base64_out_size` is sufficient, BASE64_ERROR_DATA_IN if `data_in` equals NULL.

#### `public int `[`base64url_encode`](#group__sys__base64_1ga5373b27225516316665361de10bf0169)`(const void * data_in,size_t data_in_size,void * base64_out,size_t * base64_out_size)` 

Encodes a given datum to base64 with URL and Filename Safe Alphabet and save the result to the given destination.

**See also**: [RFC 4648, section 5](https://tools.ietf.org/html/rfc4648#section-5)

Requires the use of the `base64url` module.

#### Parameters
* `data_in` pointer to the datum to encode 

* `data_in_size` the size of `data_in`

* `base64_out` pointer to store the encoded base64 string 

* `base64_out_size` pointer to the variable containing the size of `base64_out.` This value is overwritten with the estimated size used for the encoded base64 string on BASE64_ERROR_BUFFER_OUT_SIZE. This value is overwritten with the actual used size for the encoded base64 string on BASE64_SUCCESS.

#### Returns
BASE64_SUCCESS on success, BASE64_ERROR_BUFFER_OUT_SIZE on insufficient size for encoding to `base64_out`, BASE64_ERROR_BUFFER_OUT if `base64_out` equals NULL but the `base64_out_size` is sufficient, BASE64_ERROR_DATA_IN if `data_in` equals NULL.

#### `public int `[`base64_decode`](#group__sys__base64_1ga3ae43448c50e4ed07b2d34393f669bce)`(const void * base64_in,size_t base64_in_size,void * data_out,size_t * data_out_size)` 

Decodes a given base64 string and save the result to the given destination.

#### Parameters
* `base64_in` pointer to store the encoded base64 string 

* `base64_in_size` pointer to the variable containing the size of `base64_out.`

* `data_out` pointer to the datum to encode 

* `data_out_size` the size of `data_out`. This value is overwritten with the estimated size used for the decoded string on BASE64_ERROR_BUFFER_OUT_SIZE. This value is overwritten with the actual used size for the decoded string on BASE64_SUCCESS.

#### Returns
BASE64_SUCCESS on success, BASE64_ERROR_BUFFER_OUT_SIZE on insufficient size for decoding to `data_out`, BASE64_ERROR_BUFFER_OUT if `data_out` equals NULL but the size for `data_out_size` is sufficient, BASE64_ERROR_DATA_IN if `base64_in` equals NULL, BASE64_ERROR_DATA_IN_SIZE if `base64_in_size` is between 1 and 4.

