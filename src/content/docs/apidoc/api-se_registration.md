---
title: api-se_registration.md
description: api-se_registration.md
---
# group `se_registration` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`psa_drv_se_t`](#structpsa__drv__se__t) | A structure containing pointers to all the entry points of a secure element driver.

# struct `psa_drv_se_t` 

A structure containing pointers to all the entry points of a secure element driver.

Future versions of this specification may add extra substructures at the end of this structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`hal_version`](#structpsa__drv__se__t_1aeca4c14c7327c4b40ffb84aab6121d1f) | The version of the driver HAL that this driver implements.
`public size_t `[`persistent_data_size`](#structpsa__drv__se__t_1a1fe7a913ddfd0d8cab147e78b2a52762) | The size of the driver's persistent data in bytes.
`public `[`psa_drv_se_init_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga61d926bb163ea2aae3c6e27c19ebe58c)` `[`p_init`](#structpsa__drv__se__t_1aacc4e0b37c3de7794fffc92f865080d7) | The driver initialization function.
`public const `[`psa_drv_se_key_management_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t)` * `[`key_management`](#structpsa__drv__se__t_1a61915a05211d7b149a15e2a48aaa0558) | Key management methods.
`public const `[`psa_drv_se_mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_mac.md#structpsa__drv__se__mac__t)` * `[`mac`](#structpsa__drv__se__t_1a825f62b6485f2013190a36d0a05c7900) | MAC operation methods.
`public const `[`psa_drv_se_cipher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_cipher.md#structpsa__drv__se__cipher__t)` * `[`cipher`](#structpsa__drv__se__t_1a6c3277142eb45b6130666705137a1ff5) | Cipher operation methods.
`public const `[`psa_drv_se_aead_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_aead.md#structpsa__drv__se__aead__t)` * `[`aead`](#structpsa__drv__se__t_1a67d51aa75e0da424b74b2d4a64879532) | AEAD operation methods.
`public const `[`psa_drv_se_asymmetric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_asymmetric.md#structpsa__drv__se__asymmetric__t)` * `[`asymmetric`](#structpsa__drv__se__t_1a70f1f44cdc0e84c34ed880b8fe845da9) | Asymmetric operation methods.
`public const `[`psa_drv_se_key_derivation_t`](./doc/starlight-docs/src/content/docs/apidoc/api-driver_derivation.md#structpsa__drv__se__key__derivation__t)` * `[`derivation`](#structpsa__drv__se__t_1ae0029432ce3363035df31d55188efb75) | Key derivation methods.

## Members

#### `public uint32_t `[`hal_version`](#structpsa__drv__se__t_1aeca4c14c7327c4b40ffb84aab6121d1f) 

The version of the driver HAL that this driver implements.

This is a protection against loading driver binaries built against a different version of this specification. Use [PSA_DRV_SE_HAL_VERSION](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__psa__crypto__se__driver_1ga65e25a718c3e95893522ae882d4ea826).

#### `public size_t `[`persistent_data_size`](#structpsa__drv__se__t_1a1fe7a913ddfd0d8cab147e78b2a52762) 

The size of the driver's persistent data in bytes.

This can be 0 if the driver does not need persistent data.

See the documentation of [psa_drv_se_context_t::persistent_data](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t_1a6900c090110bbcaf769e54192474f1a7) for more information about why and how a driver can use persistent data.

#### `public `[`psa_drv_se_init_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga61d926bb163ea2aae3c6e27c19ebe58c)` `[`p_init`](#structpsa__drv__se__t_1aacc4e0b37c3de7794fffc92f865080d7) 

The driver initialization function.

This function is called once during the initialization of the PSA Cryptography subsystem, before any other function of the driver is called. If this function returns a failure status, the driver will be unusable, at least until the next system reset.

If this field is `NULL`, it is equivalent to a function that does nothing and returns [PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1).

#### `public const `[`psa_drv_se_key_management_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t)` * `[`key_management`](#structpsa__drv__se__t_1a61915a05211d7b149a15e2a48aaa0558) 

Key management methods.

#### `public const `[`psa_drv_se_mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_mac.md#structpsa__drv__se__mac__t)` * `[`mac`](#structpsa__drv__se__t_1a825f62b6485f2013190a36d0a05c7900) 

MAC operation methods.

#### `public const `[`psa_drv_se_cipher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_cipher.md#structpsa__drv__se__cipher__t)` * `[`cipher`](#structpsa__drv__se__t_1a6c3277142eb45b6130666705137a1ff5) 

Cipher operation methods.

#### `public const `[`psa_drv_se_aead_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_aead.md#structpsa__drv__se__aead__t)` * `[`aead`](#structpsa__drv__se__t_1a67d51aa75e0da424b74b2d4a64879532) 

AEAD operation methods.

#### `public const `[`psa_drv_se_asymmetric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_asymmetric.md#structpsa__drv__se__asymmetric__t)` * `[`asymmetric`](#structpsa__drv__se__t_1a70f1f44cdc0e84c34ed880b8fe845da9) 

Asymmetric operation methods.

#### `public const `[`psa_drv_se_key_derivation_t`](./doc/starlight-docs/src/content/docs/apidoc/api-driver_derivation.md#structpsa__drv__se__key__derivation__t)` * `[`derivation`](#structpsa__drv__se__t_1ae0029432ce3363035df31d55188efb75) 

Key derivation methods.

