---
title: api-sys_psa_crypto_pers_stor.md
description: api-sys_psa_crypto_pers_stor.md
---
# group `sys_psa_crypto_pers_stor` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_write_encoded_key_slot_to_file`](#group__sys__psa__crypto__pers__stor_1ga86e0d52a352cf05a186eb729b1461f84)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,uint8_t * input,size_t input_len)`            | Writes a CBOR encoded key slot to a file.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_read_encoded_key_slot_from_file`](#group__sys__psa__crypto__pers__stor_1ga82a2efd4fe6622c3550a882d87d2f7da)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,uint8_t * output,size_t output_size,size_t * output_data_len)`            | Reads a CBOR encoded key slot from a file.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_destroy_persistent_key`](#group__sys__psa__crypto__pers__stor_1ga3be72cb45795bfb91c96ab5792f41507)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` key_id)`            | Destroy a key in persistent storage.

## Members

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_write_encoded_key_slot_to_file`](#group__sys__psa__crypto__pers__stor_1ga86e0d52a352cf05a186eb729b1461f84)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,uint8_t * input,size_t input_len)` 

Writes a CBOR encoded key slot to a file.

#### Parameters
* `id` ID of slot, used as filename 

* `input` Pointer to CBOR encoded data 

* `input_len` Length of CBOR encoded data 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_read_encoded_key_slot_from_file`](#group__sys__psa__crypto__pers__stor_1ga82a2efd4fe6622c3550a882d87d2f7da)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` id,uint8_t * output,size_t output_size,size_t * output_data_len)` 

Reads a CBOR encoded key slot from a file.

#### Parameters
* `id` ID of the desired key 

* `output` Output buffer to write CBOR data to 

* `output_size` Size of output buffer 

* `output_data_len` Actual length of CBOR encoded data 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_destroy_persistent_key`](#group__sys__psa__crypto__pers__stor_1ga3be72cb45795bfb91c96ab5792f41507)`(`[`psa_key_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a11e986351c65bd3dc3c0fe2cd9926e4b)` key_id)` 

Destroy a key in persistent storage.

This will only remove the link to the key file without erasing the key from the flash. The key material can still be recovered by someone with access to the hardware.

#### Parameters
* `key_id` ID of the key to be destroyed 

#### Returns
psa_status_t

