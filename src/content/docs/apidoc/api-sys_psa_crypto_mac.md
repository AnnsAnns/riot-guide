---
title: api-sys_psa_crypto_mac.md
description: api-sys_psa_crypto_mac.md
---
# group `sys_psa_crypto_mac` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_mac_compute_hmac_sha256`](#group__sys__psa__crypto__mac_1ga82313b401813a7e00804896b3161acf1)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * mac,size_t mac_size,size_t * mac_length)`            | Low level wrapper function to call a driver for a HMAC SHA256 computation See [psa_mac_compute()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1afb4c0e338fdc192ef8d293aa545d94cb)

## Members

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_mac_compute_hmac_sha256`](#group__sys__psa__crypto__mac_1ga82313b401813a7e00804896b3161acf1)`(const `[`psa_key_attributes_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a0ec645e1fdafe59d591104451ebf5680)` * attributes,const uint8_t * key_buffer,size_t key_buffer_size,const uint8_t * input,size_t input_length,uint8_t * mac,size_t mac_size,size_t * mac_length)` 

Low level wrapper function to call a driver for a HMAC SHA256 computation See [psa_mac_compute()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1afb4c0e338fdc192ef8d293aa545d94cb)

#### Parameters
* `attributes` 

* `key_buffer` 

* `key_buffer_size` 

* `input` 

* `input_length` 

* `mac` 

* `mac_size` 

* `mac_length` 

#### Returns
psa_status_t

