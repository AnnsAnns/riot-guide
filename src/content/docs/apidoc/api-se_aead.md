---
title: api-se_aead.md
description: api-se_aead.md
---
# group `se_aead` 

Authenticated Encryption with Additional Data (AEAD) operations with secure elements must be done in one function call. While this creates a burden for implementers as there must be sufficient space in memory for the entire message, it prevents decrypted data from being made available before the authentication operation is complete and the data is known to be authentic.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`psa_drv_se_aead_t`](#structpsa__drv__se__aead__t) | A struct containing all of the function pointers needed to implement secure element Authenticated Encryption with Additional Data operations.

# struct `psa_drv_se_aead_t` 

A struct containing all of the function pointers needed to implement secure element Authenticated Encryption with Additional Data operations.

PSA Crypto API implementations should populate instances of the table as appropriate upon startup.

If one of the functions is not implemented, it should be set to NULL.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_drv_se_aead_encrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__aead_1ga0acef6488a7dddbc707467907dec1842)` `[`p_encrypt`](#structpsa__drv__se__aead__t_1a169934f04ca6b307a4b06567fa5293d8) | Function that performs the AEAD encrypt operation.
`public `[`psa_drv_se_aead_decrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__aead_1gab517338cb0541c9e36fbcea713622104)` `[`p_decrypt`](#structpsa__drv__se__aead__t_1af3f72f255173aad82b020a624c75771a) | Function that performs the AEAD decrypt operation.

## Members

#### `public `[`psa_drv_se_aead_encrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__aead_1ga0acef6488a7dddbc707467907dec1842)` `[`p_encrypt`](#structpsa__drv__se__aead__t_1a169934f04ca6b307a4b06567fa5293d8) 

Function that performs the AEAD encrypt operation.

#### `public `[`psa_drv_se_aead_decrypt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__aead_1gab517338cb0541c9e36fbcea713622104)` `[`p_decrypt`](#structpsa__drv__se__aead__t_1af3f72f255173aad82b020a624c75771a) 

Function that performs the AEAD decrypt operation.

