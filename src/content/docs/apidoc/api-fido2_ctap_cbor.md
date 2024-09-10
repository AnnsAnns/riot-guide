---
title: api-fido2_ctap_cbor.md
description: api-fido2_ctap_cbor.md
---
# group `fido2_ctap_cbor` 

FIDO2 CTAP CBOR helper.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CTAP_CBOR_INFO_MAP_SZ`](#group__fido2__ctap__cbor_1ga92ddd1ad0b1e6eaf13618cdf185619d0)            | CBOR map size of encoded getInfo response.
`define `[`CTAP_CBOR_ATTESTATION_MAP_SZ`](#group__fido2__ctap__cbor_1gad3923491e39aec76c33f55e294f96a3e)            | CBOR map size of encoded attestation.
`define `[`CTAP_CBOR_ATTESTATION_STMT_MAP_SZ`](#group__fido2__ctap__cbor_1gac6826de620b52134b2383a4356328ca7)            | CBOR map size of encoded attestation statement.
`define `[`CTAP_CBOR_CRED_DESC_MAP_SZ`](#group__fido2__ctap__cbor_1ga5a33ef22059058b491adc6f6cbd792e8)            | CBOR map size of encoded credential description.
`define `[`CTAP_CBOR_PIN_TOKEN_MAP_SZ`](#group__fido2__ctap__cbor_1ga6f4f5a2d9f8d0ffa42878840817c9d41)            | CBOR map size of encoded pinToken.
`define `[`CTAP_CBOR_USER_ENTITY_MAP_SZ`](#group__fido2__ctap__cbor_1gaa0d9d82f21e48e06e06779628b473f99)            | CBOR map size of encoded user entity.
`define `[`CTAP_CBOR_COSE_KEY_MAP_SZ`](#group__fido2__ctap__cbor_1ga473bb9570addf97b32abd64cf5aa88a3)            | CBOR map size of public key encoded in COSE format.
`define `[`CTAP_CBOR_KEY_AGREEMENT_MAP_SZ`](#group__fido2__ctap__cbor_1gae20ea2b99490e0e1e1e783e601ba9ac6)            | CBOR map size of encoded clientPIN keyAgreement.
`define `[`CTAP_CBOR_RETRIES_MAP_SZ`](#group__fido2__ctap__cbor_1gae4f9f64f149adf918560c1f96ccd71b5)            | CBOR map size of encoded clientPIN retries.
`define `[`CTAP_CBOR_ATT_STMT_AUTH_DATA_SZ`](#group__fido2__ctap__cbor_1ga883f3865fcd7046a78ede2cbd45db304)            | Attestation statement data buffer size.
`define `[`CTAP_CBOR_MAP_MAX_KEY_LEN`](#group__fido2__ctap__cbor_1ga8dccd52d62de2c6fa06b6f64d4db5606)            | Max length of string key in CBOR map.
`define `[`CTAP_CBOR_MAX_CREDENTIAL_TYPE_LEN`](#group__fido2__ctap__cbor_1ga71d9f906907bd7b90956dcf7005e75e0)            | Max length of PublicKeyCredentialType string.
`public int `[`fido2_ctap_cbor_parse_make_credential_req`](#group__fido2__ctap__cbor_1ga2cce9208ed5f358db5990dd3dd305f9c)`(`[`ctap_make_credential_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__make__credential__req__t)` * req,const uint8_t * req_raw,size_t len)`            | Parse MakeCredential method.
`public int `[`fido2_ctap_cbor_parse_get_assertion_req`](#group__fido2__ctap__cbor_1ga880ae08b7357eb5b65a1af4e5764eff4)`(`[`ctap_get_assertion_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__get__assertion__req__t)` * req,const uint8_t * req_raw,size_t len)`            | Parse GetAssertion method.
`public int `[`fido2_ctap_cbor_encode_info`](#group__fido2__ctap__cbor_1ga97a787e21ce9aeff39a921ab46c6eef4)`(const `[`ctap_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__info__t)` * info)`            | Encode CBOR info map.
`public int `[`fido2_ctap_cbor_parse_client_pin_req`](#group__fido2__ctap__cbor_1gabd23460530009c5dd14e05f72d285020)`(`[`ctap_client_pin_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__client__pin__req__t)` * req,const uint8_t * req_raw,size_t len)`            | Parse ClientPIN method.
`public int `[`fido2_ctap_cbor_encode_attestation_object`](#group__fido2__ctap__cbor_1gae403af42b735bd50343d74a46b873607)`(const `[`ctap_auth_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__auth__data__t)` * auth_data,const uint8_t * client_data_hash,`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk)`            | Encode attestation object.
`public int `[`fido2_ctap_cbor_encode_assertion_object`](#group__fido2__ctap__cbor_1gac74c48c52dc55e5dfbecca4f316b1143)`(const `[`ctap_auth_data_header_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__auth__data__header__t)` * auth_data,const uint8_t * client_data_hash,`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk,uint8_t valid_cred_count)`            | Encode assertion object.
`public int `[`fido2_ctap_cbor_encode_key_agreement`](#group__fido2__ctap__cbor_1ga70d609bb782c9179936d8261750e6c84)`(const `[`ctap_public_key_cose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__public__key__cose__t)` * key)`            | Encode key agreement.
`public int `[`fido2_ctap_cbor_encode_pin_token`](#group__fido2__ctap__cbor_1gae5f5ea04d932d549742b727300472b61)`(uint8_t * token,size_t len)`            | Encode encrypted pin token.
`public int `[`fido2_ctap_cbor_encode_retries`](#group__fido2__ctap__cbor_1ga236a722135e44c5f1903d27eb4dd46a1)`(uint8_t tries_left)`            | Encode PIN tries left.
`public size_t `[`fido2_ctap_cbor_get_buffer_size`](#group__fido2__ctap__cbor_1ga8745682671b5a156295b14a5f5027829)`(const uint8_t * buf)`            | Get size of CBOR encoded data.
`public void `[`fido2_ctap_cbor_init_encoder`](#group__fido2__ctap__cbor_1gaf3169f196c191d3fbbadfc3506121423)`(uint8_t * buf,size_t len)`            | Initialize CBOR encoder.

## Members

#### `define `[`CTAP_CBOR_INFO_MAP_SZ`](#group__fido2__ctap__cbor_1ga92ddd1ad0b1e6eaf13618cdf185619d0) 

CBOR map size of encoded getInfo response.

#### `define `[`CTAP_CBOR_ATTESTATION_MAP_SZ`](#group__fido2__ctap__cbor_1gad3923491e39aec76c33f55e294f96a3e) 

CBOR map size of encoded attestation.

#### `define `[`CTAP_CBOR_ATTESTATION_STMT_MAP_SZ`](#group__fido2__ctap__cbor_1gac6826de620b52134b2383a4356328ca7) 

CBOR map size of encoded attestation statement.

#### `define `[`CTAP_CBOR_CRED_DESC_MAP_SZ`](#group__fido2__ctap__cbor_1ga5a33ef22059058b491adc6f6cbd792e8) 

CBOR map size of encoded credential description.

#### `define `[`CTAP_CBOR_PIN_TOKEN_MAP_SZ`](#group__fido2__ctap__cbor_1ga6f4f5a2d9f8d0ffa42878840817c9d41) 

CBOR map size of encoded pinToken.

#### `define `[`CTAP_CBOR_USER_ENTITY_MAP_SZ`](#group__fido2__ctap__cbor_1gaa0d9d82f21e48e06e06779628b473f99) 

CBOR map size of encoded user entity.

#### `define `[`CTAP_CBOR_COSE_KEY_MAP_SZ`](#group__fido2__ctap__cbor_1ga473bb9570addf97b32abd64cf5aa88a3) 

CBOR map size of public key encoded in COSE format.

#### `define `[`CTAP_CBOR_KEY_AGREEMENT_MAP_SZ`](#group__fido2__ctap__cbor_1gae20ea2b99490e0e1e1e783e601ba9ac6) 

CBOR map size of encoded clientPIN keyAgreement.

#### `define `[`CTAP_CBOR_RETRIES_MAP_SZ`](#group__fido2__ctap__cbor_1gae4f9f64f149adf918560c1f96ccd71b5) 

CBOR map size of encoded clientPIN retries.

#### `define `[`CTAP_CBOR_ATT_STMT_AUTH_DATA_SZ`](#group__fido2__ctap__cbor_1ga883f3865fcd7046a78ede2cbd45db304) 

Attestation statement data buffer size.

#### `define `[`CTAP_CBOR_MAP_MAX_KEY_LEN`](#group__fido2__ctap__cbor_1ga8dccd52d62de2c6fa06b6f64d4db5606) 

Max length of string key in CBOR map.

#### `define `[`CTAP_CBOR_MAX_CREDENTIAL_TYPE_LEN`](#group__fido2__ctap__cbor_1ga71d9f906907bd7b90956dcf7005e75e0) 

Max length of PublicKeyCredentialType string.

#### `public int `[`fido2_ctap_cbor_parse_make_credential_req`](#group__fido2__ctap__cbor_1ga2cce9208ed5f358db5990dd3dd305f9c)`(`[`ctap_make_credential_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__make__credential__req__t)` * req,const uint8_t * req_raw,size_t len)` 

Parse MakeCredential method.

CTAP specification (version 20190130) section 5.1

#### Parameters
* `req` struct to parse into 

* `req_raw` raw request 

* `len` length of `req_raw`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_parse_get_assertion_req`](#group__fido2__ctap__cbor_1ga880ae08b7357eb5b65a1af4e5764eff4)`(`[`ctap_get_assertion_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__get__assertion__req__t)` * req,const uint8_t * req_raw,size_t len)` 

Parse GetAssertion method.

CTAP specification (version 20190130) section 5.2

#### Parameters
* `req` struct to parse into 

* `req_raw` raw request 

* `len` length of `req_raw`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_encode_info`](#group__fido2__ctap__cbor_1ga97a787e21ce9aeff39a921ab46c6eef4)`(const `[`ctap_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__info__t)` * info)` 

Encode CBOR info map.

CTAP specification (version 20190130) section 5.4

#### Parameters
* `info` information about capabilities

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_parse_client_pin_req`](#group__fido2__ctap__cbor_1gabd23460530009c5dd14e05f72d285020)`(`[`ctap_client_pin_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__client__pin__req__t)` * req,const uint8_t * req_raw,size_t len)` 

Parse ClientPIN method.

CTAP specification (version 20190130) section 5.5

#### Parameters
* `req` struct to parse into 

* `req_raw` raw request 

* `len` length of `req_raw`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_encode_attestation_object`](#group__fido2__ctap__cbor_1gae403af42b735bd50343d74a46b873607)`(const `[`ctap_auth_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__auth__data__t)` * auth_data,const uint8_t * client_data_hash,`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk)` 

Encode attestation object.

Webauthn specification (version 20190304) section 6.5

#### Parameters
* `auth_data` authenticator data 

* `client_data_hash` SHA-256 hash of JSON serialized client data 

* `rk` resident key

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_encode_assertion_object`](#group__fido2__ctap__cbor_1gac74c48c52dc55e5dfbecca4f316b1143)`(const `[`ctap_auth_data_header_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__auth__data__header__t)` * auth_data,const uint8_t * client_data_hash,`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk,uint8_t valid_cred_count)` 

Encode assertion object.

CTAP specification (version 20190130) section 5.2

#### Parameters
* `auth_data` authenticator data header 

* `client_data_hash` SHA-256 hash of JSON serialized client data 

* `rk` resident key 

* `valid_cred_count` amount of valid credentials found in allow list

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_encode_key_agreement`](#group__fido2__ctap__cbor_1ga70d609bb782c9179936d8261750e6c84)`(const `[`ctap_public_key_cose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__public__key__cose__t)` * key)` 

Encode key agreement.

#### Parameters
* `key` Public key in COSE format

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_encode_pin_token`](#group__fido2__ctap__cbor_1gae5f5ea04d932d549742b727300472b61)`(uint8_t * token,size_t len)` 

Encode encrypted pin token.

#### Parameters
* `token` encrypted pin token 

* `len` length of `token`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_cbor_encode_retries`](#group__fido2__ctap__cbor_1ga236a722135e44c5f1903d27eb4dd46a1)`(uint8_t tries_left)` 

Encode PIN tries left.

#### Parameters
* `tries_left` amount of tries left

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public size_t `[`fido2_ctap_cbor_get_buffer_size`](#group__fido2__ctap__cbor_1ga8745682671b5a156295b14a5f5027829)`(const uint8_t * buf)` 

Get size of CBOR encoded data.

#### Parameters
* `buf` Buffer holding the data

#### Returns
size of CBOR encoded data

#### `public void `[`fido2_ctap_cbor_init_encoder`](#group__fido2__ctap__cbor_1gaf3169f196c191d3fbbadfc3506121423)`(uint8_t * buf,size_t len)` 

Initialize CBOR encoder.

#### Parameters
* `buf` Buffer to hold CBOR encoded data 

* `len` Length of `buf`

