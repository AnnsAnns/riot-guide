---
title: api-se_init.md
description: api-se_init.md
---
# group `se_init` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`psa_drv_se_context_t`](#structpsa__drv__se__context__t) | Driver context structure.

# struct `psa_drv_se_context_t` 

Driver context structure.

Driver functions receive a pointer to this structure. Each registered driver has one instance of this structure.

Implementations must include the fields specified here and may include other fields.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const void * `[`persistent_data`](#structpsa__drv__se__context__t_1a6900c090110bbcaf769e54192474f1a7) | A read-only pointer to the driver's persistent data.
`public const size_t `[`persistent_data_size`](#structpsa__drv__se__context__t_1ade26d0e58104d8c2f5cd3722a6743e8c) | The size of `persistent_data` in bytes.
`public uintptr_t `[`transient_data`](#structpsa__drv__se__context__t_1a4df5f00f8bda6cecbc9aba9d26496b54) | Driver transient data.

## Members

#### `public const void * `[`persistent_data`](#structpsa__drv__se__context__t_1a6900c090110bbcaf769e54192474f1a7) 

A read-only pointer to the driver's persistent data.

Drivers typically use this persistent data to keep track of which slot numbers are available. This is only a guideline: drivers may use the persistent data for any purpose, keeping in mind the restrictions on when the persistent data is saved to storage: the persistent data is only saved after calling certain functions that receive a writable pointer to the persistent data.

The core allocates a memory buffer for the persistent data. The pointer is guaranteed to be suitably aligned for any data type, like a pointer returned by `malloc` (but the core can use any method to allocate the buffer, not necessarily `malloc`).

The size of this buffer is in the `persistent_data_size` field of this structure.

Before the driver is initialized for the first time, the content of the persistent data is all-bits-zero. After a driver upgrade, if the size of the persistent data has increased, the original data is padded on the right with zeros; if the size has decreased, the original data is truncated to the new size.

This pointer is to read-only data. Only a few driver functions are allowed to modify the persistent data. These functions receive a writable pointer. These functions are:

* [psa_drv_se_t::p_init](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t_1aacc4e0b37c3de7794fffc92f865080d7)

* [psa_drv_se_key_management_t::p_allocate](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t_1ada92ba1ee99afb1e8ac719e2feeee4cc)

* [psa_drv_se_key_management_t::p_destroy](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t_1ab5bfb924e670c3aa65093a27ede91780)

The PSA Cryptography core saves the persistent data from one session to the next. It does this before returning from API functions that call a driver method that is allowed to modify the persistent data, specifically:

* [psa_crypto_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a2de150803fc2f7dc6101d5af7e921dd9) causes a call to [psa_drv_se_t::p_init](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t_1aacc4e0b37c3de7794fffc92f865080d7), and may call [psa_drv_se_key_management_t::p_destroy](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t_1ab5bfb924e670c3aa65093a27ede91780) to complete an action that was interrupted by a power failure.

* Key creation functions cause a call to [psa_drv_se_key_management_t::p_allocate](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t_1ada92ba1ee99afb1e8ac719e2feeee4cc), and may cause a call to [psa_drv_se_key_management_t::p_destroy](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t_1ab5bfb924e670c3aa65093a27ede91780) in case an error occurs.

* [psa_destroy_key()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1af503cd251eff1a0d6cd7d8e47003b92e) causes a call to [psa_drv_se_key_management_t::p_destroy](./doc/starlight-docs/src/content/docs/apidoc/api-se_key_management.md#structpsa__drv__se__key__management__t_1ab5bfb924e670c3aa65093a27ede91780).

#### `public const size_t `[`persistent_data_size`](#structpsa__drv__se__context__t_1ade26d0e58104d8c2f5cd3722a6743e8c) 

The size of `persistent_data` in bytes.

This is always equal to the value of the `persistent_data_size` field of the [psa_drv_se_t](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t) structure when the driver is registered.

#### `public uintptr_t `[`transient_data`](#structpsa__drv__se__context__t_1a4df5f00f8bda6cecbc9aba9d26496b54) 

Driver transient data.

The core initializes this value to 0 and does not read or modify it afterwards. The driver may store whatever it wants in this field.

