---
title: api-sys_psa_crypto_slot_mgmt.md
description: api-sys_psa_crypto_slot_mgmt.md
---
# group `sys_psa_crypto_slot_mgmt` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PSA_PROTECTED_KEY_COUNT`](#group__sys__psa__crypto__slot__mgmt_1gaab2716d929fc5d6ce2c7b9a27da0400a)            | Number of allocated slots for keys in protected memory or secure elements.
`define `[`PSA_ASYMMETRIC_KEYPAIR_COUNT`](#group__sys__psa__crypto__slot__mgmt_1ga7abd1451cb83751a01d762fbc6ca19e6)            | Number of allocated slots for asymmetric key pairs.
`define `[`PSA_SINGLE_KEY_COUNT`](#group__sys__psa__crypto__slot__mgmt_1gac9e7a6b76b96b251aa51d8ebbcb6b63a)            | Number of allocated slots for single keys in local memory.
`define `[`PSA_KEY_SLOT_COUNT`](#group__sys__psa__crypto__slot__mgmt_1ga159b7af57f19422ff99adf5493a136ff)            | Complete number of available key slots.
`define `[`PSA_KEY_ID_VOLATILE_MIN`](#group__sys__psa__crypto__slot__mgmt_1ga93d8ef3a158f137082894b14a6282159)            | Minimum key id for volatile keys.
`define `[`PSA_KEY_ID_VOLATILE_MAX`](#group__sys__psa__crypto__slot__mgmt_1ga256bb8992b858958fd0723db17558072)            | Maximum key id for volatile keys.
`public void `[`psa_init_key_slots`](#group__sys__psa__crypto__slot__mgmt_1ga5a6dd71fdfd2539369319c7eb2278221)`(void)`            | Initializes the allocated key slots and prepares the internal key slot lists.
`public inline static int `[`psa_key_id_is_volatile`](#group__sys__psa__crypto__slot__mgmt_1gac055a37aa75db6bcec1d1fbcb1a06b59)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` key_id)`            | Check whether a key identifier is a volatile key identifier.
`public inline static int `[`psa_is_key_slot_locked`](#group__sys__psa__crypto__slot__mgmt_1ga6339ac20bb3d49f8403ccee53b6e422d)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)`            | Check whether a key slot is locked.
`public `[`psa_key_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga90828ba6e282dd39260c81af68532e1d)` * `[`psa_key_slot_get_slot_number`](#group__sys__psa__crypto__slot__mgmt_1gab0fa207bc6818d122263813e5ce0c6fa)`(const `[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)`            | Get slot number in protected memory.
`public inline static int `[`psa_key_lifetime_is_external`](#group__sys__psa__crypto__slot__mgmt_1ga644875c098429453f17e0923401c66f8)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime)`            | Check whether a key is stored on an external device.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_wipe_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga91bdb77e6fecabafdc1b546263ddc9f7)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)`            | Wipe volatile key slot and its contents.
`public void `[`psa_wipe_all_key_slots`](#group__sys__psa__crypto__slot__mgmt_1gabe048c115e45305da1444e272caac805)`(void)`            | Wipe all existing volatile key slots.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_get_and_lock_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga77faae9775189373ac1d88a2efcb3f11)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` ** slot)`            | Find a key slot in local memory and lock it.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_persist_key_slot_in_storage`](#group__sys__psa__crypto__slot__mgmt_1ga9a2a8865e2e21b120aa6da475a0db5d6)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)`            | Store a key slot in persistent storage.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_allocate_empty_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga9bceaebc9461b89aa5a6d26e1abe1429)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` * id,const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attr,`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` ** p_slot)`            | Find a currently empty key slot that is appropriate for the key.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_lock_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga2235aa9314c93574d00f873f9e217cbb)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)`            | Increase lock count.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_unlock_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga9e8a87aa8c2c5f671880818b50a54b8e)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)`            | Decrease lock count.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_validate_key_location`](#group__sys__psa__crypto__slot__mgmt_1ga84f36b3cc7eca3ffab3bb7a2265279ab)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime,`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` ** driver)`            | Check if key location exists.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_validate_key_persistence`](#group__sys__psa__crypto__slot__mgmt_1ga71c5a292c9bab7e7d2ff62b666f7d0a0)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime)`            | Validate key persistence.
`public int `[`psa_is_valid_key_id`](#group__sys__psa__crypto__slot__mgmt_1ga1522f3c5d96c9977d5c45ad5ed6054be)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,int vendor)`            | Check if provided key ID is either a valid user ID or vendor ID.
`public size_t `[`psa_get_key_data_from_key_slot`](#group__sys__psa__crypto__slot__mgmt_1gaf1155979963d848e7fd3096f1dd68fb8)`(const `[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t ** key_data,size_t ** key_bytes)`            | Get key data and key size from key slot.
`public void `[`psa_get_public_key_data_from_key_slot`](#group__sys__psa__crypto__slot__mgmt_1gab9c20c27b2f3dd8f5463b139475cb4fc)`(const `[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t ** pubkey_data,size_t ** pubkey_data_len)`            | Get public key data and size from key slot.
`struct `[`psa_key_slot_t`](#structpsa__key__slot__t) | Structure of a virtual key slot in local memory.

## Members

#### `define `[`PSA_PROTECTED_KEY_COUNT`](#group__sys__psa__crypto__slot__mgmt_1gaab2716d929fc5d6ce2c7b9a27da0400a) 

Number of allocated slots for keys in protected memory or secure elements.

#### `define `[`PSA_ASYMMETRIC_KEYPAIR_COUNT`](#group__sys__psa__crypto__slot__mgmt_1ga7abd1451cb83751a01d762fbc6ca19e6) 

Number of allocated slots for asymmetric key pairs.

#### `define `[`PSA_SINGLE_KEY_COUNT`](#group__sys__psa__crypto__slot__mgmt_1gac9e7a6b76b96b251aa51d8ebbcb6b63a) 

Number of allocated slots for single keys in local memory.

#### `define `[`PSA_KEY_SLOT_COUNT`](#group__sys__psa__crypto__slot__mgmt_1ga159b7af57f19422ff99adf5493a136ff) 

Complete number of available key slots.

#### `define `[`PSA_KEY_ID_VOLATILE_MIN`](#group__sys__psa__crypto__slot__mgmt_1ga93d8ef3a158f137082894b14a6282159) 

Minimum key id for volatile keys.

This is used to assign volatile identifiers to created keys.

#### `define `[`PSA_KEY_ID_VOLATILE_MAX`](#group__sys__psa__crypto__slot__mgmt_1ga256bb8992b858958fd0723db17558072) 

Maximum key id for volatile keys.

This is the maximum volatile identifiers that can be assigned to created keys.

#### `public void `[`psa_init_key_slots`](#group__sys__psa__crypto__slot__mgmt_1ga5a6dd71fdfd2539369319c7eb2278221)`(void)` 

Initializes the allocated key slots and prepares the internal key slot lists.

#### `public inline static int `[`psa_key_id_is_volatile`](#group__sys__psa__crypto__slot__mgmt_1gac055a37aa75db6bcec1d1fbcb1a06b59)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` key_id)` 

Check whether a key identifier is a volatile key identifier.

#### Parameters
* `key_id` Key identifier to test.

#### Returns
1 The key identifier is a volatile key identifier. 

#### Returns
0 The key identifier is not a volatile key identifier.

#### `public inline static int `[`psa_is_key_slot_locked`](#group__sys__psa__crypto__slot__mgmt_1ga6339ac20bb3d49f8403ccee53b6e422d)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)` 

Check whether a key slot is locked.

#### Parameters
* `slot` Pointer to the slot to be checked

#### Returns
1 if slot is locked, otherwise 0

#### `public `[`psa_key_slot_number_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga90828ba6e282dd39260c81af68532e1d)` * `[`psa_key_slot_get_slot_number`](#group__sys__psa__crypto__slot__mgmt_1gab0fa207bc6818d122263813e5ce0c6fa)`(const `[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)` 

Get slot number in protected memory.

#### Parameters
* `slot` Pointer to the slot containing the protected slot number 

#### Returns
[psa_key_slot_number_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__se__init_1ga90828ba6e282dd39260c81af68532e1d) Key slot number stored in the input slot

#### `public inline static int `[`psa_key_lifetime_is_external`](#group__sys__psa__crypto__slot__mgmt_1ga644875c098429453f17e0923401c66f8)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime)` 

Check whether a key is stored on an external device.

#### Parameters
* `lifetime` Lifetime value of the key that's supposed to be checked

#### Returns
int 

#### Returns
1 if key is stored on external device, otherwise 0

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_wipe_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga91bdb77e6fecabafdc1b546263ddc9f7)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)` 

Wipe volatile key slot and its contents.

Wiped key slots can be reused.

#### Parameters
* `slot` Pointer to the key slot to be wiped

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_DOES_NOT_EXIST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a18646babb2ae6cbde02ea3828bbd9141)

#### `public void `[`psa_wipe_all_key_slots`](#group__sys__psa__crypto__slot__mgmt_1gabe048c115e45305da1444e272caac805)`(void)` 

Wipe all existing volatile key slots.

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_get_and_lock_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga77faae9775189373ac1d88a2efcb3f11)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` ** slot)` 

Find a key slot in local memory and lock it.

#### Parameters
* `id` ID of the key to be used 

* `slot` Pointer to the slot the key is stored in

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_DOES_NOT_EXIST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a18646babb2ae6cbde02ea3828bbd9141)

#### Returns
[PSA_ERROR_NOT_SUPPORTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a1dcc6d130633ed5db8942257581b55dd)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_persist_key_slot_in_storage`](#group__sys__psa__crypto__slot__mgmt_1ga9a2a8865e2e21b120aa6da475a0db5d6)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)` 

Store a key slot in persistent storage.

#### Parameters
* `slot` Pointer to slot to store in persistent storage 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_allocate_empty_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga9bceaebc9461b89aa5a6d26e1abe1429)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` * id,const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attr,`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` ** p_slot)` 

Find a currently empty key slot that is appropriate for the key.

#### Parameters
* `id` Key ID of the newly generated or imported key 

* `attr` Attributes of the key that is supposed to be stored in the slot 

* `p_slot` Pointer to the empty slot in memory

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_INSUFFICIENT_STORAGE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a897a45eb206a6f6b7be7ffbe36f0d766)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_lock_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga2235aa9314c93574d00f873f9e217cbb)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)` 

Increase lock count.

#### Parameters
* `slot` Slot to be locked

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_CORRUPTION_DETECTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a116f4d4c6a9d9db3397991a8472d8950)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_unlock_key_slot`](#group__sys__psa__crypto__slot__mgmt_1ga9e8a87aa8c2c5f671880818b50a54b8e)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot)` 

Decrease lock count.

#### Parameters
* `slot` Slot to be unlocked

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_CORRUPTION_DETECTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a116f4d4c6a9d9db3397991a8472d8950)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_validate_key_location`](#group__sys__psa__crypto__slot__mgmt_1ga84f36b3cc7eca3ffab3bb7a2265279ab)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime,`[`psa_se_drv_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__psa__crypto__se__mgmt_1ga2cc4525b5eb9ba57afafa290a45d0553)` ** driver)` 

Check if key location exists.

#### Parameters
* `lifetime` Lifetime value of the key to be validated 

* `driver` Pointer to driver assigned to the existing key location, if it exists

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_INVALID_ARGUMENT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a798df25a505ebf931f7bec1f80f1f85f)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_validate_key_persistence`](#group__sys__psa__crypto__slot__mgmt_1ga71c5a292c9bab7e7d2ff62b666f7d0a0)`(`[`psa_key_lifetime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a6821ff6dd39dc2bc370ded760ad8b0cf)` lifetime)` 

Validate key persistence.

Currently only volatile keys are supported.

#### Parameters
* `lifetime` Lifetime of key to be validated

#### Returns
[PSA_SUCCESS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a4cc859e2c66ca381c7418db3527a65e1)

#### Returns
[PSA_ERROR_NOT_SUPPORTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__values_8h_1a1dcc6d130633ed5db8942257581b55dd)

#### `public int `[`psa_is_valid_key_id`](#group__sys__psa__crypto__slot__mgmt_1ga1522f3c5d96c9977d5c45ad5ed6054be)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,int vendor)` 

Check if provided key ID is either a valid user ID or vendor ID.

#### Parameters
* `id` ID of key to be validated 

* `vendor` If ID is supposed to be user or vendor ID

#### Returns
1 if valid 

#### Returns
0 if invalid

#### `public size_t `[`psa_get_key_data_from_key_slot`](#group__sys__psa__crypto__slot__mgmt_1gaf1155979963d848e7fd3096f1dd68fb8)`(const `[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t ** key_data,size_t ** key_bytes)` 

Get key data and key size from key slot.

#### Parameters
* `slot` Slot the desired key is stored in 

* `key_data` Pointer to key data 

* `key_bytes` Pointer to key data size in bytes

#### Returns
Size of `key_data` in bytes.

#### `public void `[`psa_get_public_key_data_from_key_slot`](#group__sys__psa__crypto__slot__mgmt_1gab9c20c27b2f3dd8f5463b139475cb4fc)`(const `[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t ** pubkey_data,size_t ** pubkey_data_len)` 

Get public key data and size from key slot.

#### Parameters
* `slot` Slot the desired key is stored in 

* `pubkey_data` Pointer to key data 

* `pubkey_data_len` Pointer to key data size in bytes

# struct `psa_key_slot_t` 

Structure of a virtual key slot in local memory.

A slot contains key attributes, a lock count and the `key_data` structure. `key_data` consists of the size of the stored key in bytes and a `uint8_t` data array large enough to store the largest key used in the current build. This type of key slot contains symmetric keys, asymmetric public keys or unstructured data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`node`](#structpsa__key__slot__t_1a47c203d61ef91eeeae0d3f3d486d3a84) | List node to link slot in global list.
`public size_t `[`lock_count`](#structpsa__key__slot__t_1a88b4610305e8c560cce7153e8a8fe6cc) | Number of entities accessing the slot.
`public `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` `[`attr`](#structpsa__key__slot__t_1a605c36fd733519eda8a4b8c41b0a2524) | Attributes associated with the stored key.

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`node`](#structpsa__key__slot__t_1a47c203d61ef91eeeae0d3f3d486d3a84) 

List node to link slot in global list.

#### `public size_t `[`lock_count`](#structpsa__key__slot__t_1a88b4610305e8c560cce7153e8a8fe6cc) 

Number of entities accessing the slot.

#### `public `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` `[`attr`](#structpsa__key__slot__t_1a605c36fd733519eda8a4b8c41b0a2524) 

Attributes associated with the stored key.

