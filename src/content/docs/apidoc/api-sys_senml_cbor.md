---
title: api-sys_senml_cbor.md
description: api-sys_senml_cbor.md
---
# group `sys_senml_cbor` 

Functionality for encoding SenML values as CBOR.

The `senml_cbor` module contains functionality for encoding [SenML](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml) values to CBOR using [NanoCBOR library](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nanocbor).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`senml_cbor_label_t`](#group__sys__senml__cbor_1gaf362bf480b8033e3233d04fcc6af7fd8)            | SenML CBOR labels.
`public int `[`senml_encode_sum_cbor`](#group__sys__senml__cbor_1ga2852c4dd3f614ccd5b20aecf7748a141)`(nanocbor_encoder_t * enc,const `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` * attr)`            | Encode [senml_attr_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t) containing `sum` as CBOR.
`public int `[`senml_encode_bool_cbor`](#group__sys__senml__cbor_1gaa7d87db640c44aefcba301d9a20ec53a)`(nanocbor_encoder_t * enc,const `[`senml_bool_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__bool__value__t)` * val)`            | Encode [senml_bool_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__bool__value__t) as CBOR.
`public int `[`senml_encode_value_cbor`](#group__sys__senml__cbor_1ga775bf954b770d0640881f3b67c7f62df)`(nanocbor_encoder_t * enc,const `[`senml_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t)` * val)`            | Encode [senml_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t) as CBOR.
`public int `[`senml_encode_string_cbor`](#group__sys__senml__cbor_1ga0d59bbb70efb4981929d81a18096a318)`(nanocbor_encoder_t * enc,const `[`senml_string_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__string__value__t)` * val)`            | Encode [senml_string_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__string__value__t) as CBOR.
`public int `[`senml_encode_data_cbor`](#group__sys__senml__cbor_1gaf115895098ba108cb67f278beb0f0af4)`(nanocbor_encoder_t * enc,const `[`senml_data_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__data__value__t)` * val)`            | Encode [senml_data_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__data__value__t) as CBOR.

## Members

#### `enum `[`senml_cbor_label_t`](#group__sys__senml__cbor_1gaf362bf480b8033e3233d04fcc6af7fd8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SENML_LABEL_BASE_VERSION            | 
SENML_LABEL_BASE_NAME            | 
SENML_LABEL_BASE_TIME            | 
SENML_LABEL_BASE_UNIT            | 
SENML_LABEL_BASE_VALUE            | 
SENML_LABEL_BASE_SUM            | 
SENML_LABEL_NAME            | 
SENML_LABEL_UNIT            | 
SENML_LABEL_VALUE            | 
SENML_LABEL_STRING_VALUE            | 
SENML_LABEL_BOOLEAN_VALUE            | 
SENML_LABEL_SUM            | 
SENML_LABEL_TIME            | 
SENML_LABEL_UPDATE_TIME            | 
SENML_LABEL_DATA_VALUE            | 

SenML CBOR labels.

This list contains the SenML CBOR labels as assigned by IANA.

#### `public int `[`senml_encode_sum_cbor`](#group__sys__senml__cbor_1ga2852c4dd3f614ccd5b20aecf7748a141)`(nanocbor_encoder_t * enc,const `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` * attr)` 

Encode [senml_attr_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t) containing `sum` as CBOR.

Requires the `sum` attribute to be enabled by setting `CONFIG_SENML_ATTR_SUM` to 1.

#### Parameters
* `enc` NanoCBOR encoder. 

* `attr` Attributes (including `sum`) to encode.

#### Returns
Size of the encoded data.

#### `public int `[`senml_encode_bool_cbor`](#group__sys__senml__cbor_1gaa7d87db640c44aefcba301d9a20ec53a)`(nanocbor_encoder_t * enc,const `[`senml_bool_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__bool__value__t)` * val)` 

Encode [senml_bool_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__bool__value__t) as CBOR.

#### Parameters
* `enc` NanoCBOR encoder. 

* `val` value to encode.

#### Returns
Size of the encoded data.

#### `public int `[`senml_encode_value_cbor`](#group__sys__senml__cbor_1ga775bf954b770d0640881f3b67c7f62df)`(nanocbor_encoder_t * enc,const `[`senml_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t)` * val)` 

Encode [senml_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t) as CBOR.

#### Parameters
* `enc` NanoCBOR encoder. 

* `val` value to encode.

#### Returns
Size of the encoded data.

#### `public int `[`senml_encode_string_cbor`](#group__sys__senml__cbor_1ga0d59bbb70efb4981929d81a18096a318)`(nanocbor_encoder_t * enc,const `[`senml_string_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__string__value__t)` * val)` 

Encode [senml_string_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__string__value__t) as CBOR.

#### Parameters
* `enc` NanoCBOR encoder. 

* `val` value to encode.

#### Returns
Size of the encoded data.

#### `public int `[`senml_encode_data_cbor`](#group__sys__senml__cbor_1gaf115895098ba108cb67f278beb0f0af4)`(nanocbor_encoder_t * enc,const `[`senml_data_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__data__value__t)` * val)` 

Encode [senml_data_value_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__data__value__t) as CBOR.

#### Parameters
* `enc` NanoCBOR encoder. 

* `val` value to encode.

#### Returns
Size of the encoded data.

