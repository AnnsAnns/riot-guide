---
title: api-psa_crypto_se_mgmt.md
description: api-psa_crypto_se_mgmt.md
---
# group `psa_crypto_se_mgmt` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_PSA_MAX_SE_COUNT`](#group__psa__crypto__se__mgmt_1ga9c8f4ca1b4eba3dc9280377e7afe65e6)            | Maximum number of available secure elements.
`define `[`PSA_MAX_SE_COUNT`](#group__psa__crypto__se__mgmt_1gaef541719763a13924a86dc0ac5d48cf6)            | Maximum supported number of secure elements.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_register_secure_element`](#group__psa__crypto__se__mgmt_1ga8c311a8c2fbf766df233237569b6cc34)`(`[`psa_key_location_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a5e700601f686237a8d1e29363ae543d5)` location,const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` * methods,void * psa_se_configuration,const void * drv_transient_data)`            | Register a secure element driver with the SE management.
`public `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * `[`psa_get_se_driver_data`](#group__psa__crypto__se__mgmt_1gadfdab651dd55b29331ece278b4671651)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime)`            | Get the driver data of a specified driver.
`public int `[`psa_get_se_driver`](#group__psa__crypto__se__mgmt_1gab0acf7da1c8e9ed00ebf2e305b99c42b)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime,const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` ** p_methods,`[`psa_drv_se_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t)` ** p_drv_context)`            | Get the driver entry points and context of a specified driver.
`public const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` * `[`psa_get_se_driver_methods`](#group__psa__crypto__se__mgmt_1ga2b77075d9f7de3f119ccb34dc5ea686e)`(const `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)`            | Get the driver entry points of a specified driver.
`public `[`psa_drv_se_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t)` * `[`psa_get_se_drv_context`](#group__psa__crypto__se__mgmt_1ga71d744384c23b640dc9c63bd7749ae03)`(`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)`            | Get the driver context of a specified driver.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_find_free_se_slot`](#group__psa__crypto__se__mgmt_1gad00784fc10c8e6211bc8b0f791c56d56)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_key_creation_method_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga984d5535962320e0c4692bb4ede486ef)` method,`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver,`[`psa_key_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga90828ba6e282dd39260c81af68532e1d)` * slot_number)`            | Find an empty key slot on a secure element appropriate to the key attributes.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_destroy_se_key`](#group__psa__crypto__se__mgmt_1ga3e881e2f02907a11b365a0bb1f9aecf0)`(`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver,`[`psa_key_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga90828ba6e282dd39260c81af68532e1d)` slot_number)`            | Destroy the key on a secure element.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_load_se_persistent_data`](#group__psa__crypto__se__mgmt_1ga087742ae018455f90ba91a613eee08ac)`(const `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)`            | Load SE data from persistent memory.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_save_se_persistent_data`](#group__psa__crypto__se__mgmt_1ga65c15f8d7a27bae6336e6cf250bbda9d)`(const `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)`            | Save SE data to persistent memory.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_destroy_se_persistent_data`](#group__psa__crypto__se__mgmt_1ga45baf48ebfd5ec0ba3529469ea17d583)`(`[`psa_key_location_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a5e700601f686237a8d1e29363ae543d5)` location)`            | Destroy SE data in persistent memory.
`struct `[`psa_drv_se_internal_context_t`](#structpsa__drv__se__internal__context__t) | Internal secure element driver context.
`struct `[`psa_se_drv_data_s`](#structpsa__se__drv__data__s) | Structure containing secure element driver data and contexts.

## Members

#### `define `[`CONFIG_PSA_MAX_SE_COUNT`](#group__psa__crypto__se__mgmt_1ga9c8f4ca1b4eba3dc9280377e7afe65e6) 

Maximum number of available secure elements.

#### `define `[`PSA_MAX_SE_COUNT`](#group__psa__crypto__se__mgmt_1gaef541719763a13924a86dc0ac5d48cf6) 

Maximum supported number of secure elements.

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_register_secure_element`](#group__psa__crypto__se__mgmt_1ga8c311a8c2fbf766df233237569b6cc34)`(`[`psa_key_location_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a5e700601f686237a8d1e29363ae543d5)` location,const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` * methods,void * psa_se_configuration,const void * drv_transient_data)` 

Register a secure element driver with the SE management.

This function is called by the `auto_init` module during boot.

#### Parameters
* `location` Location the driver should be registered with, of type [psa_key_location_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a5e700601f686237a8d1e29363ae543d5)

* `methods` Structure of available driver entry points of the driver 

* `psa_se_configuration` Pointer to a secure element configuration structure 

* `drv_transient_data` Transient driver data to be used by the driver

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_INVALID_ARGUMENT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a798df25a505ebf931f7bec1f80f1f85f) The location value is invalid 

#### Returns
[PSA_ERROR_NOT_SUPPORTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a1dcc6d130633ed5db8942257581b55dd)

#### Returns
[PSA_ERROR_INSUFFICIENT_MEMORY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a91b2ad8a867517a2651f1b076c5216e5)

#### Returns
[PSA_ERROR_ALREADY_EXISTS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1af2b34cc87edc72f3ba90071a08210d20) *

#### `public `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * `[`psa_get_se_driver_data`](#group__psa__crypto__se__mgmt_1gadfdab651dd55b29331ece278b4671651)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime)` 

Get the driver data of a specified driver.

#### Parameters
* `lifetime` Lifetime value of type [psa_key_lifetime_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf) of the key to be used

#### Returns
[psa_se_drv_data_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)* Pointer to the driver data 

#### Returns
`NULL` if no driver exists with this location

#### `public int `[`psa_get_se_driver`](#group__psa__crypto__se__mgmt_1gab0acf7da1c8e9ed00ebf2e305b99c42b)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime,const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` ** p_methods,`[`psa_drv_se_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t)` ** p_drv_context)` 

Get the driver entry points and context of a specified driver.

#### Parameters
* `lifetime` Lifetime value of type [psa_key_lifetime_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf) of the key to be used 

* `p_methods` Pointer that will reference the driver methods 

* `p_drv_context` Pointer that will reference the driver context

#### Returns
1 if a driver was found 

#### Returns
0 if no driver exists with this location

#### `public const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` * `[`psa_get_se_driver_methods`](#group__psa__crypto__se__mgmt_1ga2b77075d9f7de3f119ccb34dc5ea686e)`(const `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)` 

Get the driver entry points of a specified driver.

#### Parameters
* `driver` Driver data of type [psa_se_drv_data_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553) containing the entry points

#### Returns
const psa_drv_se_t*

#### `public `[`psa_drv_se_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t)` * `[`psa_get_se_drv_context`](#group__psa__crypto__se__mgmt_1ga71d744384c23b640dc9c63bd7749ae03)`(`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)` 

Get the driver context of a specified driver.

#### Parameters
* `driver` Driver data of type [psa_se_drv_data_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553) containing the context

#### Returns
[psa_drv_se_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t)*

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_find_free_se_slot`](#group__psa__crypto__se__mgmt_1gad00784fc10c8e6211bc8b0f791c56d56)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,`[`psa_key_creation_method_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga984d5535962320e0c4692bb4ede486ef)` method,`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver,`[`psa_key_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga90828ba6e282dd39260c81af68532e1d)` * slot_number)` 

Find an empty key slot on a secure element appropriate to the key attributes.

#### Parameters
* `attributes` [psa_key_attributes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680) containing the attributes of the key to be created 

* `method` The method used to create the key (see [psa_key_creation_method_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__key__management_1ga984d5535962320e0c4692bb4ede486ef)) 

* `driver` Pointer to the driver for the SE the key should be created on 

* `slot_number` Pointer that will contain the slot number of the free SE slot

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_CORRUPTION_DETECTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a116f4d4c6a9d9db3397991a8472d8950)

#### Returns
[PSA_ERROR_NOT_SUPPORTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a1dcc6d130633ed5db8942257581b55dd)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_destroy_se_key`](#group__psa__crypto__se__mgmt_1ga3e881e2f02907a11b365a0bb1f9aecf0)`(`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver,`[`psa_key_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga90828ba6e282dd39260c81af68532e1d)` slot_number)` 

Destroy the key on a secure element.

Some secure elements may not support this operation.

#### Parameters
* `driver` Driver of the SE containing the key to be destroyed 

* `slot_number` Slot number of the key that is to be destroyed

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_NOT_PERMITTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4d1b8dd8526177a15a210b7afc1accb1)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_load_se_persistent_data`](#group__psa__crypto__se__mgmt_1ga087742ae018455f90ba91a613eee08ac)`(const `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)` 

Load SE data from persistent memory.

This operation is not yet supported by this implementation

#### Parameters
* `driver` Pointer to the driver data the loaded data should be stored in

#### Returns
[PSA_ERROR_NOT_SUPPORTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a1dcc6d130633ed5db8942257581b55dd)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_save_se_persistent_data`](#group__psa__crypto__se__mgmt_1ga65c15f8d7a27bae6336e6cf250bbda9d)`(const `[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` * driver)` 

Save SE data to persistent memory.

This operation is not yet supported by this implementation

#### Parameters
* `driver` Pointer to the driver data containing the data to be saved

#### Returns
[PSA_ERROR_NOT_SUPPORTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a1dcc6d130633ed5db8942257581b55dd)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_destroy_se_persistent_data`](#group__psa__crypto__se__mgmt_1ga45baf48ebfd5ec0ba3529469ea17d583)`(`[`psa_key_location_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a5e700601f686237a8d1e29363ae543d5)` location)` 

Destroy SE data in persistent memory.

This operation is not yet supported by this implementation

#### Parameters
* `location` Location of the data that should be destroyed

#### Returns
[PSA_ERROR_NOT_SUPPORTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a1dcc6d130633ed5db8942257581b55dd)

# struct `psa_drv_se_internal_context_t` 

Internal secure element driver context.

This is the same structure as [psa_drv_se_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t), with the difference that it is also writeable for the implementation.

This structure is not to be used by applications, only by the PSA Crypto implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void * `[`persistent_data`](#structpsa__drv__se__internal__context__t_1aa4c532b676f3ec25cfa39c58c828a9d9) | Driver specific persistent data.
`public size_t `[`persistent_data_size`](#structpsa__drv__se__internal__context__t_1aff62b74afa93397d6c470b985a1f12d9) | Size of persistent data in bytes.
`public uintptr_t `[`transient_data`](#structpsa__drv__se__internal__context__t_1a3767410f103a8ddada82dbe957c6d37f) | Driver specific transient data.

## Members

#### `public void * `[`persistent_data`](#structpsa__drv__se__internal__context__t_1aa4c532b676f3ec25cfa39c58c828a9d9) 

Driver specific persistent data.

#### `public size_t `[`persistent_data_size`](#structpsa__drv__se__internal__context__t_1aff62b74afa93397d6c470b985a1f12d9) 

Size of persistent data in bytes.

#### `public uintptr_t `[`transient_data`](#structpsa__drv__se__internal__context__t_1a3767410f103a8ddada82dbe957c6d37f) 

Driver specific transient data.

# struct `psa_se_drv_data_s` 

Structure containing secure element driver data and contexts.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_key_location_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a5e700601f686237a8d1e29363ae543d5)` `[`location`](#structpsa__se__drv__data__s_1a751628d80f66fbafca0129b41704c6f4) | Location value assigned to driver.
`public const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` * `[`methods`](#structpsa__se__drv__data__s_1a6f8e9eb2e3c95f029df52954db4be2a9) | Methods implemented by driver.
`public `[`psa_drv_se_internal_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-psa_crypto_se_mgmt.md#structpsa__drv__se__internal__context__t)` `[`internal`](#structpsa__se__drv__data__s_1ad2598930a4f789bbcf2b0409e6ce2e4a) | Internally writable SE driver context.
`public `[`psa_drv_se_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t)` `[`context`](#structpsa__se__drv__data__s_1a3439e2107f15dff0240a7411cd40c8e7) | SE driver context, read only.
`public union psa_se_drv_data_s::@401 `[`ctx`](#structpsa__se__drv__data__s_1afea9ed9a472b2a364b99f759b67edf02) | SE driver context.

## Members

#### `public `[`psa_key_location_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a5e700601f686237a8d1e29363ae543d5)` `[`location`](#structpsa__se__drv__data__s_1a751628d80f66fbafca0129b41704c6f4) 

Location value assigned to driver.

#### `public const `[`psa_drv_se_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_registration.md#structpsa__drv__se__t)` * `[`methods`](#structpsa__se__drv__data__s_1a6f8e9eb2e3c95f029df52954db4be2a9) 

Methods implemented by driver.

#### `public `[`psa_drv_se_internal_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-psa_crypto_se_mgmt.md#structpsa__drv__se__internal__context__t)` `[`internal`](#structpsa__se__drv__data__s_1ad2598930a4f789bbcf2b0409e6ce2e4a) 

Internally writable SE driver context.

#### `public `[`psa_drv_se_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-se_init.md#structpsa__drv__se__context__t)` `[`context`](#structpsa__se__drv__data__s_1a3439e2107f15dff0240a7411cd40c8e7) 

SE driver context, read only.

#### `public union psa_se_drv_data_s::@401 `[`ctx`](#structpsa__se__drv__data__s_1afea9ed9a472b2a364b99f759b67edf02) 

SE driver context.

