---
title: api-se_key_management.md
description: api-se_key_management.md
---
# group `se_key_management` 

Currently, key management is limited to importing keys in the clear, destroying keys, and exporting keys in the clear. Whether a key may be exported is determined by the key policies in place on the key slot.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`psa_key_creation_method_t`](#group__se__key__management_1ga984d5535962320e0c4692bb4ede486ef)            | An enumeration indicating how a key is created.
`struct `[`psa_drv_se_key_management_t`](#structpsa__drv__se__key__management__t) | A struct containing all of the function pointers needed to for secure element key management.

## Members

#### `enum `[`psa_key_creation_method_t`](#group__se__key__management_1ga984d5535962320e0c4692bb4ede486ef) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PSA_KEY_CREATION_IMPORT            | During [psa_import_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1ad088d8ebc854d2f7a5b5c1769bc9ed40)
PSA_KEY_CREATION_GENERATE            | During [psa_generate_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a950b4199ae7a0164006bd3d6927d1efe)
PSA_KEY_CREATION_DERIVE            | During [psa_key_derivation_output_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1ad286b675f3f8b46fa6cab620de6bead3)
PSA_KEY_CREATION_COPY            | During [psa_copy_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a78da90274bd8f8680017a4bb513803a1)

An enumeration indicating how a key is created.

# struct `psa_drv_se_key_management_t` 

A struct containing all of the function pointers needed to for secure element key management.

PSA Crypto API implementations should populate instances of the table as appropriate upon startup or at build time.

If one of the functions is not implemented, it should be set to `NULL`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_drv_se_allocate_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gaab9a5d39285c68ac29264017e0119d98)` `[`p_allocate`](#structpsa__drv__se__key__management__t_1ada92ba1ee99afb1e8ac719e2feeee4cc) | Function that allocates a slot for a key.
`public `[`psa_drv_se_validate_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga26c4b96c6d68dbd74b0512475d29f934)` `[`p_validate_slot_number`](#structpsa__drv__se__key__management__t_1a45c3a420a662f4bf67b4eaed5038fb34) | Function that checks the validity of a slot for a key.
`public `[`psa_drv_se_import_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga9e04e71aff4837259e54598708edcf7d)` `[`p_import`](#structpsa__drv__se__key__management__t_1a6764bfd7ca6d9822b2a98c0830a722de) | Function that performs a key import operation.
`public `[`psa_drv_se_generate_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga62df4bbc6b63ab5ef8183012b12a6cf8)` `[`p_generate`](#structpsa__drv__se__key__management__t_1ab6548b965ed44ee0bebd3061148aaa7a) | Function that performs a generation.
`public `[`psa_drv_se_destroy_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gaaf8c22c4a5b87035fcb594858d68e1ba)` `[`p_destroy`](#structpsa__drv__se__key__management__t_1ab5bfb924e670c3aa65093a27ede91780) | Function that performs a key destroy operation.
`public `[`psa_drv_se_export_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gab9779816d17fa8ab42345b7c297dc843)` `[`p_export`](#structpsa__drv__se__key__management__t_1a28d37267c379b03e48fa4a3134d7c71b) | Function that performs a key export operation.
`public `[`psa_drv_se_export_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gab9779816d17fa8ab42345b7c297dc843)` `[`p_export_public`](#structpsa__drv__se__key__management__t_1ae8a402e1d8c8f3dfe8c27b33e9b20efa) | Function that performs a public key export operation.

## Members

#### `public `[`psa_drv_se_allocate_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gaab9a5d39285c68ac29264017e0119d98)` `[`p_allocate`](#structpsa__drv__se__key__management__t_1ada92ba1ee99afb1e8ac719e2feeee4cc) 

Function that allocates a slot for a key.

#### `public `[`psa_drv_se_validate_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga26c4b96c6d68dbd74b0512475d29f934)` `[`p_validate_slot_number`](#structpsa__drv__se__key__management__t_1a45c3a420a662f4bf67b4eaed5038fb34) 

Function that checks the validity of a slot for a key.

#### `public `[`psa_drv_se_import_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga9e04e71aff4837259e54598708edcf7d)` `[`p_import`](#structpsa__drv__se__key__management__t_1a6764bfd7ca6d9822b2a98c0830a722de) 

Function that performs a key import operation.

#### `public `[`psa_drv_se_generate_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga62df4bbc6b63ab5ef8183012b12a6cf8)` `[`p_generate`](#structpsa__drv__se__key__management__t_1ab6548b965ed44ee0bebd3061148aaa7a) 

Function that performs a generation.

#### `public `[`psa_drv_se_destroy_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gaaf8c22c4a5b87035fcb594858d68e1ba)` `[`p_destroy`](#structpsa__drv__se__key__management__t_1ab5bfb924e670c3aa65093a27ede91780) 

Function that performs a key destroy operation.

#### `public `[`psa_drv_se_export_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gab9779816d17fa8ab42345b7c297dc843)` `[`p_export`](#structpsa__drv__se__key__management__t_1a28d37267c379b03e48fa4a3134d7c71b) 

Function that performs a key export operation.

#### `public `[`psa_drv_se_export_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1gab9779816d17fa8ab42345b7c297dc843)` `[`p_export_public`](#structpsa__drv__se__key__management__t_1ae8a402e1d8c8f3dfe8c27b33e9b20efa) 

Function that performs a public key export operation.

