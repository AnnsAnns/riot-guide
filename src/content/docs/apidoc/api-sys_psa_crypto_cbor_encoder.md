---
title: api-sys_psa_crypto_cbor_encoder.md
description: api-sys_psa_crypto_cbor_encoder.md
---
# group `sys_psa_crypto_cbor_encoder` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CBOR_BUF_SIZE_START`](#group__sys__psa__crypto__cbor__encoder_1ga491e8d4fddfa06b3a567587ea765e611)            | Required size of CBOR output buffer from start to end of attributes.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_encode_key_slot`](#group__sys__psa__crypto__cbor__encoder_1ga5fbe6e6b44b1d05e57777b217436bd4c)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t * output,size_t output_len,size_t * output_size)`            | Encodes a basic key slot in CBOR.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_decode_key_slot_data`](#group__sys__psa__crypto__cbor__encoder_1ga0d1b032855de3ab466e099a6b11c4afa)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t * cbor_buf,size_t cbor_buf_size)`            | Decode CBOR encoded key data and write to PSA key slot.
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_decode_key_attributes`](#group__sys__psa__crypto__cbor__encoder_1ga0fa993d12ca17b12d14863ecacd0288c)`(`[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attr,uint8_t * cbor_buf,size_t cbor_buf_size)`            | Decode CBOR PSA key attributes.

## Members

#### `define `[`CBOR_BUF_SIZE_START`](#group__sys__psa__crypto__cbor__encoder_1ga491e8d4fddfa06b3a567587ea765e611) 

Required size of CBOR output buffer from start to end of attributes.

Adds attributes sizes to CBOR encodings for individual values.

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_encode_key_slot`](#group__sys__psa__crypto__cbor__encoder_1ga5fbe6e6b44b1d05e57777b217436bd4c)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t * output,size_t output_len,size_t * output_size)` 

Encodes a basic key slot in CBOR.

Single Key Format:
     -   [
             [ID, Type, Bits, Lifetime, [Usage, Algorithm]],
             h'key
         ]

     Asymmetric Key Pair Format:
     -   [
             [ID, Type, Bits, Lifetime, [Usage, Algorithm]],
             [h'private_key, h'public_key]
         ]

     Protected Key Format:
     -   [
             [ID, Type, Bits, Lifetime, [Usage, Algorithm]],
             [Slot No, *optional: h'public_key*]
         ]

#### Parameters
* `slot` Pointer to slot containing the key to encode 

* `output` Buffer to write the encoded key to 

* `output_len` Length of output buffer 

* `output_size` Pointer to write actual length of encoding

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_decode_key_slot_data`](#group__sys__psa__crypto__cbor__encoder_1ga0d1b032855de3ab466e099a6b11c4afa)`(`[`psa_key_slot_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_psa_crypto_slot_mgmt.md#structpsa__key__slot__t)` * slot,uint8_t * cbor_buf,size_t cbor_buf_size)` 

Decode CBOR encoded key data and write to PSA key slot.

Only decodes the key and should be called in combination with psa_decode_key_attributes.

#### Parameters
* `slot` Pointer to key slot to write decoded key to 

* `cbor_buf` Buffer containing CBOR encoded data 

* `cbor_buf_size` Size of `cbor_buf`

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_decode_key_attributes`](#group__sys__psa__crypto__cbor__encoder_1ga0fa993d12ca17b12d14863ecacd0288c)`(`[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attr,uint8_t * cbor_buf,size_t cbor_buf_size)` 

Decode CBOR PSA key attributes.

Only decodes key attributes and not the actual key. Key can be decoded with psa_decode_key_slot_data.

#### Parameters
* `attr` Key attribute struct to store decoded attributes 

* `cbor_buf` Buffer containing CBOR encoded data 

* `cbor_buf_size` Size of `cbor_buf`

#### Returns
psa_status_t

