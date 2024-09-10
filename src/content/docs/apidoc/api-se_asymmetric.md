---
title: api-se_asymmetric.md
description: api-se_asymmetric.md
---
# group `se_asymmetric` 

Since the amount of data that can (or should) be encrypted or signed using asymmetric keys is limited by the key size, asymmetric key operations using keys in a secure element must be done in single function calls.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`psa_drv_se_asymmetric_t`](#structpsa__drv__se__asymmetric__t) | A struct containing all of the function pointers needed to implement asymmetric cryptographic operations using secure elements.

# struct `psa_drv_se_asymmetric_t` 

A struct containing all of the function pointers needed to implement asymmetric cryptographic operations using secure elements.

PSA Crypto API implementations should populate instances of the table as appropriate upon startup or at build time.

If one of the functions is not implemented, it should be set to `NULL`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_drv_se_asymmetric_sign_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1gaac5182bca42737841785662743594515)` `[`p_sign`](#structpsa__drv__se__asymmetric__t_1a57b2f8ca171a302b8bfd092e9787caa8) | Function that performs an asymmetric sign operation.
`public `[`psa_drv_se_asymmetric_verify_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1gabb372536a004009294591eaf6cc4d186)` `[`p_verify`](#structpsa__drv__se__asymmetric__t_1a378b676ca7eb1f3253123ff9736ae23d) | Function that performs an asymmetric verify operation.
`public `[`psa_drv_se_asymmetric_encrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1ga8544105c218640adfc4f983da4b34478)` `[`p_encrypt`](#structpsa__drv__se__asymmetric__t_1a6019c6c534e78ecabe69aeb97f7a307f) | Function that performs an asymmetric encrypt operation.
`public `[`psa_drv_se_asymmetric_decrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1ga3472b9f36ffd9eb303100d5ec3eacda0)` `[`p_decrypt`](#structpsa__drv__se__asymmetric__t_1ac614e4688f244669a3c67ad3463c7d69) | Function that performs an asymmetric decrypt operation.

## Members

#### `public `[`psa_drv_se_asymmetric_sign_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1gaac5182bca42737841785662743594515)` `[`p_sign`](#structpsa__drv__se__asymmetric__t_1a57b2f8ca171a302b8bfd092e9787caa8) 

Function that performs an asymmetric sign operation.

#### `public `[`psa_drv_se_asymmetric_verify_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1gabb372536a004009294591eaf6cc4d186)` `[`p_verify`](#structpsa__drv__se__asymmetric__t_1a378b676ca7eb1f3253123ff9736ae23d) 

Function that performs an asymmetric verify operation.

#### `public `[`psa_drv_se_asymmetric_encrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1ga8544105c218640adfc4f983da4b34478)` `[`p_encrypt`](#structpsa__drv__se__asymmetric__t_1a6019c6c534e78ecabe69aeb97f7a307f) 

Function that performs an asymmetric encrypt operation.

#### `public `[`psa_drv_se_asymmetric_decrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__asymmetric_1ga3472b9f36ffd9eb303100d5ec3eacda0)` `[`p_decrypt`](#structpsa__drv__se__asymmetric__t_1ac614e4688f244669a3c67ad3463c7d69) 

Function that performs an asymmetric decrypt operation.

