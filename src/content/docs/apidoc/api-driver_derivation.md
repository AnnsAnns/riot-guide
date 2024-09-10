---
title: api-driver_derivation.md
description: api-driver_derivation.md
---
# group `driver_derivation` 

Key derivation is the process of generating new key material using an existing key and additional parameters, iterating through a basic cryptographic function, such as a hash. Key agreement is a part of cryptographic protocols that allows two parties to agree on the same key value, but starting from different original key material. The flows are similar, and the PSA Crypto Driver Model uses the same functions for both of the flows.

There are two different final functions for the flows, `psa_drv_se_key_derivation_derive` and `psa_drv_se_key_derivation_export`. `psa_drv_se_key_derivation_derive` is used when the key material should be placed in a slot on the hardware and not exposed to the caller. `psa_drv_se_key_derivation_export` is used when the key material should be returned to the PSA Cryptographic API implementation.

Different key derivation algorithms require a different number of inputs. Instead of having an API that takes as input variable length arrays, which can be problemmatic to manage on embedded platforms, the inputs are passed to the driver via a function, `psa_drv_se_key_derivation_collateral`, that is called multiple times with different `collateral_ids`. Thus, for a key derivation algorithm that required 3 parameter inputs, the flow would look something like:

```cpp
psa_drv_se_key_derivation_setup(kdf_algorithm, source_key,
                                dest_key_size_bytes);
psa_drv_se_key_derivation_collateral(kdf_algorithm_collateral_id_0,
                                     p_collateral_0,
                                     collateral_0_size);
psa_drv_se_key_derivation_collateral(kdf_algorithm_collateral_id_1,
                                     p_collateral_1,
                                     collateral_1_size);
psa_drv_se_key_derivation_collateral(kdf_algorithm_collateral_id_2,
                                     p_collateral_2,
                                     collateral_2_size);
psa_drv_se_key_derivation_derive();
```

key agreement example: 
```cpp
psa_drv_se_key_derivation_setup(alg, source_key. dest_key_size_bytes);
psa_drv_se_key_derivation_collateral(DHE_PUBKEY, p_pubkey, pubkey_size);
psa_drv_se_key_derivation_export(p_session_key,
                                 session_key_size,
                                 &session_key_length);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`psa_drv_se_key_derivation_t`](#structpsa__drv__se__key__derivation__t) | A struct containing all of the function pointers needed to for secure element key derivation and agreement.

# struct `psa_drv_se_key_derivation_t` 

A struct containing all of the function pointers needed to for secure element key derivation and agreement.

PSA Crypto API implementations should populate instances of the table as appropriate upon startup.

If one of the functions is not implemented, it should be set to `NULL`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`context_size`](#structpsa__drv__se__key__derivation__t_1ad37b9f82282aae5fa116990cff9a90e9) | The driver-specific size of the key derivation context.
`public `[`psa_drv_se_key_derivation_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga517b85e6c8f12f986de375a7e70028fe)` `[`p_setup`](#structpsa__drv__se__key__derivation__t_1a00409ad39eb7b23dad84bcec88795d8d) | Function that performs a key derivation setup.
`public `[`psa_drv_se_key_derivation_collateral_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga3d730798a122772534887ea87e2f9c4e)` `[`p_collateral`](#structpsa__drv__se__key__derivation__t_1a33c4471e8c896ad6f0618e55b5762d08) | Function that sets key derivation collateral.
`public `[`psa_drv_se_key_derivation_derive_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga27684e05d9af85548b26849302f4db8a)` `[`p_derive`](#structpsa__drv__se__key__derivation__t_1a81357f9add831e2866698c2c05deffef) | Function that performs a final key derivation step.
`public `[`psa_drv_se_key_derivation_export_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga25d0d785a7acd6957891f3c1022f91b4)` `[`p_export`](#structpsa__drv__se__key__derivation__t_1a6bb13990ff562b80ae3f53dba12f187c) | Function that perforsm a final key derivation or agreement and exports the key.

## Members

#### `public size_t `[`context_size`](#structpsa__drv__se__key__derivation__t_1ad37b9f82282aae5fa116990cff9a90e9) 

The driver-specific size of the key derivation context.

#### `public `[`psa_drv_se_key_derivation_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga517b85e6c8f12f986de375a7e70028fe)` `[`p_setup`](#structpsa__drv__se__key__derivation__t_1a00409ad39eb7b23dad84bcec88795d8d) 

Function that performs a key derivation setup.

#### `public `[`psa_drv_se_key_derivation_collateral_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga3d730798a122772534887ea87e2f9c4e)` `[`p_collateral`](#structpsa__drv__se__key__derivation__t_1a33c4471e8c896ad6f0618e55b5762d08) 

Function that sets key derivation collateral.

#### `public `[`psa_drv_se_key_derivation_derive_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga27684e05d9af85548b26849302f4db8a)` `[`p_derive`](#structpsa__drv__se__key__derivation__t_1a81357f9add831e2866698c2c05deffef) 

Function that performs a final key derivation step.

#### `public `[`psa_drv_se_key_derivation_export_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__driver__derivation_1ga25d0d785a7acd6957891f3c1022f91b4)` `[`p_export`](#structpsa__drv__se__key__derivation__t_1a6bb13990ff562b80ae3f53dba12f187c) 

Function that perforsm a final key derivation or agreement and exports the key.

