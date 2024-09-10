---
title: api-se_mac.md
description: api-se_mac.md
---
# group `se_mac` 

Generation and authentication of Message Authentication Codes (MACs) using a secure element can be done either as a single function call (via the `psa_drv_se_mac_generate_t` or `psa_drv_se_mac_verify_t` functions), or in parts using the following sequence:

* `psa_drv_se_mac_setup_t`

* `psa_drv_se_mac_update_t`

* `psa_drv_se_mac_update_t`

* ...

* `psa_drv_se_mac_finish_t` or `psa_drv_se_mac_finish_verify_t`

If a previously started secure element MAC operation needs to be terminated, it should be done so by the `psa_drv_se_mac_abort_t`. Failure to do so may result in allocated resources not being freed or in other undefined behavior.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`psa_drv_se_mac_t`](#structpsa__drv__se__mac__t) | A struct containing all of the function pointers needed to perform secure element MAC operations.

# struct `psa_drv_se_mac_t` 

A struct containing all of the function pointers needed to perform secure element MAC operations.

PSA Crypto API implementations should populate the table as appropriate upon startup.

If one of the functions is not implemented (such as [psa_drv_se_mac_generate_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1gac8b2bbcfeb4a8f4409a4777051f55666)), it should be set to NULL.

Driver implementers should ensure that they implement all of the functions that make sense for their hardware, and that they provide a full solution (for example, if they support `p_setup`, they should also support `p_update` and at least one of `p_finish` or `p_finish_verify` ).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`context_size`](#structpsa__drv__se__mac__t_1a57198aaceeee2b99317c1a4b21c4ac63) | The size in bytes of the hardware-specific secure element MAC context structure.
`public `[`psa_drv_se_mac_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga1d7dacfb4ede205538c5713b11e10326)` `[`p_setup`](#structpsa__drv__se__mac__t_1a31323d4524d44519b297f2f55a82acd4) | Function that performs a MAC setup operation.
`public `[`psa_drv_se_mac_update_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga5066f0423519b1a403019f16cad004f6)` `[`p_update`](#structpsa__drv__se__mac__t_1a4e570d7ec3e401272f562ba44d3a05c1) | Function that performs a MAC update operation.
`public `[`psa_drv_se_mac_finish_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga8d2c6b8639790e00a755774270c9a36a)` `[`p_finish`](#structpsa__drv__se__mac__t_1a92d0aab28df72beba370a22977086f09) | Function that completes a MAC operation.
`public `[`psa_drv_se_mac_finish_verify_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga57c46b9072760a2f3f501dc8278bf963)` `[`p_finish_verify`](#structpsa__drv__se__mac__t_1a9b81bd5016def45f62bcae24ff228297) | Function that completes a MAC operation with a verify check.
`public `[`psa_drv_se_mac_abort_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga5ffdfc1d70ef3b4da100e9e46a08e511)` `[`p_abort`](#structpsa__drv__se__mac__t_1a99b5a8bf636d3d3ac9cd3cc49b2d17fc) | Function that aborts a previoustly started MAC operation.
`public `[`psa_drv_se_mac_generate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1gac8b2bbcfeb4a8f4409a4777051f55666)` `[`p_mac`](#structpsa__drv__se__mac__t_1acda37bc87f20ec774e0e3d99215fbb49) | Function that performs a MAC operation in one call.
`public `[`psa_drv_se_mac_verify_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga6e7e9a020f0061492ba383aa404f1c09)` `[`p_mac_verify`](#structpsa__drv__se__mac__t_1a6cf9d713a7716b493c8c3ae7f2a9ccf4) | Function that performs a MAC and verify operation in one call.

## Members

#### `public size_t `[`context_size`](#structpsa__drv__se__mac__t_1a57198aaceeee2b99317c1a4b21c4ac63) 

The size in bytes of the hardware-specific secure element MAC context structure.

#### `public `[`psa_drv_se_mac_setup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga1d7dacfb4ede205538c5713b11e10326)` `[`p_setup`](#structpsa__drv__se__mac__t_1a31323d4524d44519b297f2f55a82acd4) 

Function that performs a MAC setup operation.

#### `public `[`psa_drv_se_mac_update_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga5066f0423519b1a403019f16cad004f6)` `[`p_update`](#structpsa__drv__se__mac__t_1a4e570d7ec3e401272f562ba44d3a05c1) 

Function that performs a MAC update operation.

#### `public `[`psa_drv_se_mac_finish_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga8d2c6b8639790e00a755774270c9a36a)` `[`p_finish`](#structpsa__drv__se__mac__t_1a92d0aab28df72beba370a22977086f09) 

Function that completes a MAC operation.

#### `public `[`psa_drv_se_mac_finish_verify_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga57c46b9072760a2f3f501dc8278bf963)` `[`p_finish_verify`](#structpsa__drv__se__mac__t_1a9b81bd5016def45f62bcae24ff228297) 

Function that completes a MAC operation with a verify check.

#### `public `[`psa_drv_se_mac_abort_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga5ffdfc1d70ef3b4da100e9e46a08e511)` `[`p_abort`](#structpsa__drv__se__mac__t_1a99b5a8bf636d3d3ac9cd3cc49b2d17fc) 

Function that aborts a previoustly started MAC operation.

#### `public `[`psa_drv_se_mac_generate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1gac8b2bbcfeb4a8f4409a4777051f55666)` `[`p_mac`](#structpsa__drv__se__mac__t_1acda37bc87f20ec774e0e3d99215fbb49) 

Function that performs a MAC operation in one call.

#### `public `[`psa_drv_se_mac_verify_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__mac_1ga6e7e9a020f0061492ba383aa404f1c09)` `[`p_mac_verify`](#structpsa__drv__se__mac__t_1a6cf9d713a7716b493c8c3ae7f2a9ccf4) 

Function that performs a MAC and verify operation in one call.

