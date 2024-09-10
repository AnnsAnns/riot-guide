---
title: api-sys_psa_crypto_ecc.md
description: api-sys_psa_crypto_ecc.md
---
# group `sys_psa_crypto_ecc` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_generate_ecc_p192r1_key_pair`](#group__sys__psa__crypto__ecc_1ga7e16ad60d663a9d811f6b3c2eb059985)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t * priv_key_buffer_length,size_t * pub_key_buffer_length)`            | Low level wrapper function to call a driver for an ECC key generation with a SECP 192 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_sign_hash`](#group__sys__psa__crypto__ecc_1ga8bf968ba5b9fd23f4f096c7b575a53dd)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,uint8_t * signature,size_t signature_size,size_t * signature_length)`            | Low level wrapper function to call a driver for an ECC hash signature with a SECP 192 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_sign_message`](#group__sys__psa__crypto__ecc_1ga11c5c5190a6b4798e2ac2c49f2f24286)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * signature,size_t signature_size,size_t * signature_length)`            | Low level wrapper function to call a driver for an ECC hash signature with a SECP 192 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_verify_hash`](#group__sys__psa__crypto__ecc_1gada7f325530028b6aae4c72f4ae7dcc52)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,const uint8_t * signature,size_t signature_length)`            | Low level wrapper function to call a driver for an ECC hash verification with a SECP 192 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_verify_message`](#group__sys__psa__crypto__ecc_1ga6a4178f0c9c595837bee854c7e2d6401)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,const uint8_t * signature,size_t signature_length)`            | Low level wrapper function to call a driver for an ECC hash verification with a SECP 192 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_generate_ecc_p256r1_key_pair`](#group__sys__psa__crypto__ecc_1ga2db4449272ef73c5f5efd7c4886f6d0f)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t * priv_key_buffer_length,size_t * pub_key_buffer_length)`            | Low level wrapper function to call a driver for an ECC key generation with a SECP 192 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_sign_hash`](#group__sys__psa__crypto__ecc_1ga999306493c27f60e83d71e2cf567b5b8)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,uint8_t * signature,size_t signature_size,size_t * signature_length)`            | Low level wrapper function to call a driver for an ECC hash signature with a SECP 256 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_sign_message`](#group__sys__psa__crypto__ecc_1ga4b5a2f32f078b6f5f4fb896400ef01fb)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * signature,size_t signature_size,size_t * signature_length)`            | Low level wrapper function to call a driver for an ECC hash signature with a SECP 256 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_verify_hash`](#group__sys__psa__crypto__ecc_1gaa331577129134ab703cb9d82844525d1)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,const uint8_t * signature,size_t signature_length)`            | Low level wrapper function to call a driver for an ECC hash verification with a SECP 256 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_verify_message`](#group__sys__psa__crypto__ecc_1ga17d52cf3cbed0ab968bf81faf085e411)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,const uint8_t * signature,size_t signature_length)`            | Low level wrapper function to call a driver for an ECC hash verification with a SECP 256 R1 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_generate_ecc_ed25519_key_pair`](#group__sys__psa__crypto__ecc_1ga54f9607cd5933bebde23929abb816097)`(uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t * priv_key_buffer_length,size_t * pub_key_buffer_length)`            | Low level wrapper function to call a driver for an ECC key generation with an ed25519 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_derive_ecc_ed25519_public_key`](#group__sys__psa__crypto__ecc_1gaf1f9b95301be8d0f34ba97735fd8a0ac)`(const uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t priv_key_buffer_length,size_t * pub_key_buffer_length)`            | Low level wrapper function to call a driver for deriving an ed25519 public key from the private key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_ed25519_sign_message`](#group__sys__psa__crypto__ecc_1ga91ae75993a02c26746ebcc80d74cfa27)`(const uint8_t * priv_key_buffer,size_t priv_key_buffer_size,const uint8_t * pub_key_buffer,size_t pub_key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * signature,size_t signature_size,size_t * signature_length)`            | Low level wrapper function to call a driver for an ECC hash signature with an ed25519 key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_ed25519_verify_message`](#group__sys__psa__crypto__ecc_1gac58cde7062ce1f5d370acb89bf428a47)`(const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,const uint8_t * signature,size_t signature_length)`            | Low level wrapper function to call a driver for an ECC hash verification with a ed25519 key.

## Members

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_generate_ecc_p192r1_key_pair`](#group__sys__psa__crypto__ecc_1ga7e16ad60d663a9d811f6b3c2eb059985)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t * priv_key_buffer_length,size_t * pub_key_buffer_length)` 

Low level wrapper function to call a driver for an ECC key generation with a SECP 192 R1 key.

See [psa_generate_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a950b4199ae7a0164006bd3d6927d1efe)

#### Parameters
* `attributes` 

* `priv_key_buffer` 

* `pub_key_buffer` 

* `priv_key_buffer_length` 

* `pub_key_buffer_length` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_sign_hash`](#group__sys__psa__crypto__ecc_1ga8bf968ba5b9fd23f4f096c7b575a53dd)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,uint8_t * signature,size_t signature_size,size_t * signature_length)` 

Low level wrapper function to call a driver for an ECC hash signature with a SECP 192 R1 key.

See [psa_sign_hash()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a429241820edc81d0f262bdf43d3b6523)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `hash` 

* `hash_length` 

* `signature` 

* `signature_size` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_sign_message`](#group__sys__psa__crypto__ecc_1ga11c5c5190a6b4798e2ac2c49f2f24286)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * signature,size_t signature_size,size_t * signature_length)` 

Low level wrapper function to call a driver for an ECC hash signature with a SECP 192 R1 key.

See [psa_sign_message()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a295407a9d6fd0d7ddc6aebf6ead4955c)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `input` 

* `input_length` 

* `signature` 

* `signature_size` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_verify_hash`](#group__sys__psa__crypto__ecc_1gada7f325530028b6aae4c72f4ae7dcc52)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,const uint8_t * signature,size_t signature_length)` 

Low level wrapper function to call a driver for an ECC hash verification with a SECP 192 R1 key.

See [psa_verify_hash()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a01b4dea9fdb090219123f5de26bb6716)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `hash` 

* `hash_length` 

* `signature` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p192r1_verify_message`](#group__sys__psa__crypto__ecc_1ga6a4178f0c9c595837bee854c7e2d6401)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,const uint8_t * signature,size_t signature_length)` 

Low level wrapper function to call a driver for an ECC hash verification with a SECP 192 R1 key.

See [psa_verify_message()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8112e02cd89cc652acb2f45074a7464e)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `input` 

* `input_length` 

* `signature` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_generate_ecc_p256r1_key_pair`](#group__sys__psa__crypto__ecc_1ga2db4449272ef73c5f5efd7c4886f6d0f)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t * priv_key_buffer_length,size_t * pub_key_buffer_length)` 

Low level wrapper function to call a driver for an ECC key generation with a SECP 192 R1 key.

See [psa_generate_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a950b4199ae7a0164006bd3d6927d1efe)

#### Parameters
* `attributes` 

* `priv_key_buffer` 

* `pub_key_buffer` 

* `priv_key_buffer_length` 

* `pub_key_buffer_length` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_sign_hash`](#group__sys__psa__crypto__ecc_1ga999306493c27f60e83d71e2cf567b5b8)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,uint8_t * signature,size_t signature_size,size_t * signature_length)` 

Low level wrapper function to call a driver for an ECC hash signature with a SECP 256 R1 key.

See [psa_sign_hash()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a429241820edc81d0f262bdf43d3b6523)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `hash` 

* `hash_length` 

* `signature` 

* `signature_size` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_sign_message`](#group__sys__psa__crypto__ecc_1ga4b5a2f32f078b6f5f4fb896400ef01fb)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * signature,size_t signature_size,size_t * signature_length)` 

Low level wrapper function to call a driver for an ECC hash signature with a SECP 256 R1 key.

See [psa_sign_message()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a295407a9d6fd0d7ddc6aebf6ead4955c)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `input` 

* `input_length` 

* `signature` 

* `signature_size` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_verify_hash`](#group__sys__psa__crypto__ecc_1gaa331577129134ab703cb9d82844525d1)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * hash,size_t hash_length,const uint8_t * signature,size_t signature_length)` 

Low level wrapper function to call a driver for an ECC hash verification with a SECP 256 R1 key.

See [psa_verify_hash()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a01b4dea9fdb090219123f5de26bb6716)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `hash` 

* `hash_length` 

* `signature` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_p256r1_verify_message`](#group__sys__psa__crypto__ecc_1ga17d52cf3cbed0ab968bf81faf085e411)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_algorithm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1ac2e4d47f1300d73c2f829a6d99252d69)` alg,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,const uint8_t * signature,size_t signature_length)` 

Low level wrapper function to call a driver for an ECC hash verification with a SECP 256 R1 key.

See [psa_verify_message()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8112e02cd89cc652acb2f45074a7464e)

#### Parameters
* `attributes` 

* `alg` 

* `key_buffer` 

* `key_buffer_size` 

* `input` 

* `input_length` 

* `signature` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_generate_ecc_ed25519_key_pair`](#group__sys__psa__crypto__ecc_1ga54f9607cd5933bebde23929abb816097)`(uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t * priv_key_buffer_length,size_t * pub_key_buffer_length)` 

Low level wrapper function to call a driver for an ECC key generation with an ed25519 key.

See [psa_generate_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a950b4199ae7a0164006bd3d6927d1efe)

#### Parameters
* `priv_key_buffer` 

* `pub_key_buffer` 

* `priv_key_buffer_length` 

* `pub_key_buffer_length` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_derive_ecc_ed25519_public_key`](#group__sys__psa__crypto__ecc_1gaf1f9b95301be8d0f34ba97735fd8a0ac)`(const uint8_t * priv_key_buffer,uint8_t * pub_key_buffer,size_t priv_key_buffer_length,size_t * pub_key_buffer_length)` 

Low level wrapper function to call a driver for deriving an ed25519 public key from the private key.

#### Parameters
* `priv_key_buffer` 

* `pub_key_buffer` 

* `priv_key_buffer_length` 

* `pub_key_buffer_length` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_ed25519_sign_message`](#group__sys__psa__crypto__ecc_1ga91ae75993a02c26746ebcc80d74cfa27)`(const uint8_t * priv_key_buffer,size_t priv_key_buffer_size,const uint8_t * pub_key_buffer,size_t pub_key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * signature,size_t signature_size,size_t * signature_length)` 

Low level wrapper function to call a driver for an ECC hash signature with an ed25519 key.

See [psa_sign_message()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a295407a9d6fd0d7ddc6aebf6ead4955c)

#### Parameters
* `priv_key_buffer` 

* `priv_key_buffer_size` 

* `pub_key_buffer` 

* `pub_key_buffer_size` 

* `input` 

* `input_length` 

* `signature` 

* `signature_size` 

* `signature_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_ecc_ed25519_verify_message`](#group__sys__psa__crypto__ecc_1gac58cde7062ce1f5d370acb89bf428a47)`(const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,const uint8_t * signature,size_t signature_length)` 

Low level wrapper function to call a driver for an ECC hash verification with a ed25519 key.

See [psa_verify_message()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8112e02cd89cc652acb2f45074a7464e)

#### Parameters
* `key_buffer` 

* `key_buffer_size` 

* `input` 

* `input_length` 

* `signature` 

* `signature_length` 

#### Returns
psa_status_t

