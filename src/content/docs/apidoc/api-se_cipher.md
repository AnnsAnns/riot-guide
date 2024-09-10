---
title: api-se_cipher.md
description: api-se_cipher.md
---
# group `se_cipher` 

Encryption and Decryption using secure element keys in block modes other than ECB must be done in multiple parts, using the following flow:

* [psa_drv_se_cipher_setup_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga7d31744990222cf99a02bcd905996a3a)

* [psa_drv_se_cipher_set_iv_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga4c603c3ee2f0f98a09d9df1e9a0c86bf) (optional depending upon block mode)

* [psa_drv_se_cipher_update_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1gaeca34a7a7afd10ba9c79f3eaaf20d96b)

* [psa_drv_se_cipher_update_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1gaeca34a7a7afd10ba9c79f3eaaf20d96b)

* ...

* [psa_drv_se_cipher_finish_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga06bf0bfbf55291d0bf5a411175a0350b)

If a previously started secure element Cipher operation needs to be terminated, it should be done so by the [psa_drv_se_cipher_abort_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga1cb204afa81012e4c561e0731792cae9). Failure to do so may result in allocated resources not being freed or in other undefined behavior.

In situations where a PSA Cryptographic API implementation is using a block mode not-supported by the underlying hardware or driver, it can construct the block mode itself, while calling the [psa_drv_se_cipher_ecb_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1gaec35ce527439186d9f7e283e24c63a75) function for the cipher operations.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`psa_drv_se_cipher_t`](#structpsa__drv__se__cipher__t) | A struct containing all of the function pointers needed to implement cipher operations using secure elements.

# struct `psa_drv_se_cipher_t` 

A struct containing all of the function pointers needed to implement cipher operations using secure elements.

PSA Crypto API implementations should populate instances of the table as appropriate upon startup or at build time.

If one of the functions is not implemented (such as `psa_drv_se_cipher_ecb_t` ), it should be set to NULL.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`context_size`](#structpsa__drv__se__cipher__t_1a06c0b9f3b495096301d84913a5e9b05f) | The size in bytes of the hardware-specific secure element cipher context structure.
`public `[`psa_drv_se_cipher_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga7d31744990222cf99a02bcd905996a3a)` `[`p_setup`](#structpsa__drv__se__cipher__t_1a076e895119534291ca79f9a3c19c534f) | Function that performs a cipher setup operation.
`public `[`psa_drv_se_cipher_set_iv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga4c603c3ee2f0f98a09d9df1e9a0c86bf)` `[`p_set_iv`](#structpsa__drv__se__cipher__t_1a7585177d361917873bbaafe1389a28b2) | Function that sets a cipher IV (if necessary)
`public `[`psa_drv_se_cipher_update_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1gaeca34a7a7afd10ba9c79f3eaaf20d96b)` `[`p_update`](#structpsa__drv__se__cipher__t_1aa910d240753c093c23fc600c18b904d3) | Function that performs a cipher update operation.
`public `[`psa_drv_se_cipher_finish_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga06bf0bfbf55291d0bf5a411175a0350b)` `[`p_finish`](#structpsa__drv__se__cipher__t_1a0fa513678f258b39f228a7a846f7c342) | Function that completes a cipher operation.
`public `[`psa_drv_se_cipher_abort_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga1cb204afa81012e4c561e0731792cae9)` `[`p_abort`](#structpsa__drv__se__cipher__t_1a91a59e74368f297736a7b376a9a479af) | Function that aborts a cipher operation.
`public `[`psa_drv_se_cipher_ecb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1gaec35ce527439186d9f7e283e24c63a75)` `[`p_ecb`](#structpsa__drv__se__cipher__t_1a89c59e57d6874ac10c7c9c4a0982c300) | Function that performs ECB mode for a cipher operation.

## Members

#### `public size_t `[`context_size`](#structpsa__drv__se__cipher__t_1a06c0b9f3b495096301d84913a5e9b05f) 

The size in bytes of the hardware-specific secure element cipher context structure.

#### `public `[`psa_drv_se_cipher_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga7d31744990222cf99a02bcd905996a3a)` `[`p_setup`](#structpsa__drv__se__cipher__t_1a076e895119534291ca79f9a3c19c534f) 

Function that performs a cipher setup operation.

#### `public `[`psa_drv_se_cipher_set_iv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga4c603c3ee2f0f98a09d9df1e9a0c86bf)` `[`p_set_iv`](#structpsa__drv__se__cipher__t_1a7585177d361917873bbaafe1389a28b2) 

Function that sets a cipher IV (if necessary)

#### `public `[`psa_drv_se_cipher_update_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1gaeca34a7a7afd10ba9c79f3eaaf20d96b)` `[`p_update`](#structpsa__drv__se__cipher__t_1aa910d240753c093c23fc600c18b904d3) 

Function that performs a cipher update operation.

#### `public `[`psa_drv_se_cipher_finish_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga06bf0bfbf55291d0bf5a411175a0350b)` `[`p_finish`](#structpsa__drv__se__cipher__t_1a0fa513678f258b39f228a7a846f7c342) 

Function that completes a cipher operation.

#### `public `[`psa_drv_se_cipher_abort_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1ga1cb204afa81012e4c561e0731792cae9)` `[`p_abort`](#structpsa__drv__se__cipher__t_1a91a59e74368f297736a7b376a9a479af) 

Function that aborts a cipher operation.

#### `public `[`psa_drv_se_cipher_ecb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__cipher_1gaec35ce527439186d9f7e283e24c63a75)` `[`p_ecb`](#structpsa__drv__se__cipher__t_1a89c59e57d6874ac10c7c9c4a0982c300) 

Function that performs ECB mode for a cipher operation.

ECB mode should not be used directly by clients of the PSA Crypto Client API)

