---
title: api-sys_psa_crypto_cipher.md
description: api-sys_psa_crypto_cipher.md
---
# group `sys_psa_crypto_cipher` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_128_encrypt`](#group__sys__psa__crypto__cipher_1ga6cdc5ae6e564b047ef8a8a9bc41a8150)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)`            | Low level wrapper function to call a driver for an AES 128 CBC encryption.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_128_decrypt`](#group__sys__psa__crypto__cipher_1gab858b1487f90e5d7b1dad739981dd73c)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)`            | Low level wrapper function to call a driver for an AES 128 CBC decryption.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_192_encrypt`](#group__sys__psa__crypto__cipher_1ga2a69df4a7c0f4b539865a3c827d45181)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)`            | Low level wrapper function to call a driver for an AES 192 CBC encryption.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_256_encrypt`](#group__sys__psa__crypto__cipher_1gaf9ebbaf380d000811e9581c0e68659a8)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)`            | Low level wrapper function to call a driver for an AES 256 CBC encryption.

## Members

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_128_encrypt`](#group__sys__psa__crypto__cipher_1ga6cdc5ae6e564b047ef8a8a9bc41a8150)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)` 

Low level wrapper function to call a driver for an AES 128 CBC encryption.

See [psa_cipher_encrypt()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a0ba1e627bd194914ef9297212dd423f9)

#### Parameters
* `attributes` 

* `key_buffer` 

* `key_buffer_size` 

* `alg` 

* `input` 

* `input_length` 

* `output` 

* `output_size` 

* `output_length` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_128_decrypt`](#group__sys__psa__crypto__cipher_1gab858b1487f90e5d7b1dad739981dd73c)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)` 

Low level wrapper function to call a driver for an AES 128 CBC decryption.

See [psa_cipher_decrypt()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a31dd2b33667e1a4aebd4789d789c9c55)

#### Parameters
* `attributes` 

* `key_buffer` 

* `key_buffer_size` 

* `alg` 

* `input` 

* `input_length` 

* `output` 

* `output_size` 

* `output_length` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_192_encrypt`](#group__sys__psa__crypto__cipher_1ga2a69df4a7c0f4b539865a3c827d45181)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)` 

Low level wrapper function to call a driver for an AES 192 CBC encryption.

See [psa_cipher_encrypt()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a0ba1e627bd194914ef9297212dd423f9)

#### Parameters
* `attributes` 

* `key_buffer` 

* `key_buffer_size` 

* `alg` 

* `input` 

* `input_length` 

* `output` 

* `output_size` 

* `output_length` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_cipher_cbc_aes_256_encrypt`](#group__sys__psa__crypto__cipher_1gaf9ebbaf380d000811e9581c0e68659a8)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * input,size_t input_length,uint8_t * output,size_t output_size,size_t * output_length)` 

Low level wrapper function to call a driver for an AES 256 CBC encryption.

See [psa_cipher_encrypt()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a0ba1e627bd194914ef9297212dd423f9)

#### Parameters
* `attributes` 

* `key_buffer` 

* `key_buffer_size` 

* `alg` 

* `input` 

* `input_length` 

* `output` 

* `output_size` 

* `output_length` 

#### Returns
psa_status_t

