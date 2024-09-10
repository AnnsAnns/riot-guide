---
title: api-fido2_ctap_ctap.md
description: api-fido2_ctap_ctap.md
---
# group `fido2_ctap_ctap` 

FIDO2 CTAP.

The Client-to-Authenticator Protocol (CTAP) is an application layer protocol for the communication between an authenticator and a host.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CTAP_PIN_AUTH_SZ`](#group__fido2__ctap__ctap_1ga30d3a66446bb328e2990ec07bad55448)            | Size of pin auth.
`define `[`CTAP_STACKSIZE`](#group__fido2__ctap__ctap_1gaf25c65f0c96132475ed6b0442ff4a48d)            | CTAP thread stack size.
`define `[`CTAP_UP_BUTTON`](#group__fido2__ctap__ctap_1gac7aa48faa447a0da1c287cf16bd33988)            | CTAP user presence button.
`define `[`CONFIG_FIDO2_CTAP_DISABLE_UP`](#group__fido2__ctap__ctap_1ga4e6ebe20a47b7b34d55eeff7a8b9e5ed)            | Disable user presence test configuration.
`define `[`CTAP_UP_BUTTON_MODE`](#group__fido2__ctap__ctap_1ga12f7d13f0b349b8e18f873449925d4a4)            | CTAP user presence button mode.
`define `[`CTAP_UP_BUTTON_FLANK`](#group__fido2__ctap__ctap_1ga3a6cede5552b704d5616fc61879d4c43)            | CTAP user presence button flank.
`define `[`CONFIG_FIDO2_CTAP_DISABLE_LED`](#group__fido2__ctap__ctap_1ga921ff94a9795d469369fe136f85ad1de)            | Disable user presence test configuration.
`define `[`CTAP_RP_MAX_NAME_SIZE`](#group__fido2__ctap__ctap_1ga58c4918ec5cd8834f96a0245bbe359f5)            | Max size of relying party name.
`define `[`CTAP_USER_MAX_NAME_SIZE`](#group__fido2__ctap__ctap_1gacb7048598196e8eb73fb32c0fca08352)            | Max size of username including null character.
`define `[`CTAP_USER_ID_MAX_SIZE`](#group__fido2__ctap__ctap_1gac2ee2553c931d5eeae789339aa04eb6a)            | Max size of user id.
`define `[`CTAP_DOMAIN_NAME_MAX_SIZE`](#group__fido2__ctap__ctap_1gab0e182159f2f27dab0714a38a47697f0)            | Max size of a domain name including null character.
`define `[`CTAP_ICON_MAX_SIZE`](#group__fido2__ctap__ctap_1ga059ce53d8ccd903b84720bd455f9e138)            | Max size of icon including null character.
`define `[`CTAP_PIN_MIN_SIZE`](#group__fido2__ctap__ctap_1gac511e0182ebf3aaadc36c52fc001ccc7)            | PIN min size.
`define `[`CTAP_PIN_ENC_MIN_SIZE`](#group__fido2__ctap__ctap_1gaf7c4efc404c1ec32303fe061ce750a6d)            | Encrypted newPin min size.
`define `[`CTAP_PIN_ENC_MAX_SIZE`](#group__fido2__ctap__ctap_1ga67eb9af04e5453c57e6a0f78933566c4)            | Encrypted newPin max size.
`define `[`CTAP_PIN_MAX_SIZE`](#group__fido2__ctap__ctap_1gae5346677d7ee8146ccc845378f6a6248)            | PIN max size.
`define `[`CTAP_PIN_MAX_ATTS`](#group__fido2__ctap__ctap_1ga0dbefca590ecd222ae82d58b9f9af62f)            | Max total consecutive incorrect PIN attempts.
`define `[`CTAP_PIN_MAX_ATTS_BOOT`](#group__fido2__ctap__ctap_1ga97dafca9a1a99e5bf999d89bdca76185)            | Max consecutive incorrect PIN attempts for 1 boot cycle.
`define `[`CTAP_PIN_PROT_VER`](#group__fido2__ctap__ctap_1ga787d67f41873e99580dd79d887c08c42)            | PIN protocol version.
`define `[`CTAP_AMT_SUP_PIN_VER`](#group__fido2__ctap__ctap_1ga8a89b2cc16ba329f7f486f7d0ea7581c)            | Total number of supported PIN protocol versions.
`define `[`CTAP_PIN_TOKEN_SZ`](#group__fido2__ctap__ctap_1gaa8b954664708326192441cb7ea76c59d)            | Size of pin token.
`define `[`CTAP_CRED_KEY_LEN`](#group__fido2__ctap__ctap_1gad0b4210a6a0ec00ee7168348b1c728b9)            | Size of key used to encrypt credential.
`define `[`CTAP_AES_CCM_L`](#group__fido2__ctap__ctap_1ga0d3ab8d7a35879df94b8b10097ce5231)            | AES_CCM_L parameter.
`define `[`CTAP_AES_CCM_NONCE_SIZE`](#group__fido2__ctap__ctap_1gac54c065a0e95eeb9461642fba8841784)            | AES CCM nonce size.
`define `[`CTAP_CREDENTIAL_ID_ENC_SIZE`](#group__fido2__ctap__ctap_1ga2a632ea453a214459e06b5df6e945c9f)            | Total size of AES CCM credential id.
`define `[`CTAP_UP_TIMEOUT`](#group__fido2__ctap__ctap_1gabd960f9d81b350fc259dbd0eac553dca)            | Timeout for user presence test.
`define `[`CTAP_GET_NEXT_ASSERTION_TIMEOUT`](#group__fido2__ctap__ctap_1gaa0e290281d8eff4fb828677b069ac368)            | Max time between call to get_assertion or get_next_assertion until error is returned.
`define `[`CTAP_AAGUID`](#group__fido2__ctap__ctap_1gac92d0e1e8f579083477fc64610535b36)            | 128 bit identifier of authenticator
`define `[`CTAP_AAGUID_SIZE`](#group__fido2__ctap__ctap_1ga9506644604e5d0beaf15e8c9c74d309d)            | CTAP size of authenticator AAGUID in bytes.
`define `[`CTAP_COSE_ALG_ES256`](#group__fido2__ctap__ctap_1ga74f28d2e0fed9f61401162637616d917)            | CTAP COSE Algorithms registry identifier for ES256.
`define `[`CTAP_COSE_ALG_ECDH_ES_HKDF_256`](#group__fido2__ctap__ctap_1gaa4a369b743441f0a166ffc6c74c91c8f)            | CTAP COSE Algorithms registry identifier for ECDH ES HKDF 256.
`define `[`CTAP_CREDENTIAL_ID_SIZE`](#group__fido2__ctap__ctap_1ga22677cc28f2b9a92b7544ea6b96686c8)            | CTAP size of credential id.
`define `[`CTAP_INITIALIZED_MARKER`](#group__fido2__ctap__ctap_1ga9dcaee9666e3ac124be483a17d199e06)            | CTAP state initialized marker.
`define `[`CTAP_MAX_EXCLUDE_LIST_SIZE`](#group__fido2__ctap__ctap_1gab799f534347e780c274b4c760b384651)            | Max size of allow list.
`public int `[`fido2_ctap_get_sig`](#group__fido2__ctap__ctap_1ga29bcc773a21a28b80846901269f71abf)`(const uint8_t * auth_data,size_t auth_data_len,const uint8_t * client_data_hash,const `[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk,uint8_t * sig,size_t * sig_len)`            | Create signature from authenticator data.
`public bool `[`fido2_ctap_cred_params_supported`](#group__fido2__ctap__ctap_1ga1600cf4566c67f9759a82741a8b5f441)`(uint8_t cred_type,int32_t alg_type)`            | Check if requested algorithm is supported.
`public int `[`fido2_ctap_encrypt_rk`](#group__fido2__ctap__ctap_1ga25a7e7d74f188705198c08a6ef8106b1)`(`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk,uint8_t * nonce,size_t nonce_len,`[`ctap_cred_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__cred__id__t)` * id)`            | Encrypt resident key with AES CCM.
`public bool `[`fido2_ctap_pin_is_set`](#group__fido2__ctap__ctap_1gac3a1509f3c83c4d2377b512901f45830)`(void)`            | Check if PIN has been set on authenticator.
`public `[`ctap_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__state__t)` * `[`fido2_ctap_get_state`](#group__fido2__ctap__ctap_1ga4fc5b58a0c4aa8ace383d28285bab393)`(void)`            | Get a pointer to the authenticator state.
`struct `[`ctap_config_t`](#structctap__config__t) | CTAP authenticator config struct.
`struct `[`ctap_state_t`](#structctap__state__t) | CTAP state struct.
`struct `[`ctap_options_t`](#structctap__options__t) | CTAP options struct.
`struct `[`ctap_user_ent_t`](#structctap__user__ent__t) | CTAP user entity struct.
`struct `[`ctap_rp_ent_t`](#structctap__rp__ent__t) | CTAP relying party entity struct.
`struct `[`ctap_public_key_cose_t`](#structctap__public__key__cose__t) | CTAP cose key struct.
`struct `[`ctap_cred_desc`](#structctap__cred__desc) | CTAP credential description struct.
`struct `[`ctap_resident_key`](#structctap__resident__key) | CTAP resident key struct.
`struct `[`ctap_cred_id_t`](#structctap__cred__id__t) | CTAP credential ID.
`struct `[`ctap_cred_desc_alt`](#structctap__cred__desc__alt) | CTAP credential description alternative struct.
`struct `[`ctap_make_credential_req_t`](#structctap__make__credential__req__t) | CTAP make credential request struct.
`struct `[`ctap_get_assertion_req_t`](#structctap__get__assertion__req__t) | CTAP get assertion request struct.
`struct `[`ctap_client_pin_req_t`](#structctap__client__pin__req__t) | CTAP client pin request struct.
`struct `[`ctap_attested_cred_data_header_t`](#structctap__attested__cred__data__header__t) | CTAP attested credential data header struct.
`struct `[`ctap_attested_cred_data_t`](#structctap__attested__cred__data__t) | CTAP attested credential data struct.
`struct `[`ctap_auth_data_header_t`](#structctap__auth__data__header__t) | CTAP authenticator data header struct.
`struct `[`ctap_auth_data_t`](#structctap__auth__data__t) | CTAP authenticator data struct.
`struct `[`ctap_info_t`](#structctap__info__t) | CTAP info struct.

## Members

#### `define `[`CTAP_PIN_AUTH_SZ`](#group__fido2__ctap__ctap_1ga30d3a66446bb328e2990ec07bad55448) 

Size of pin auth.

First 16 bytes of a HMAC-256.

CTAP specification (version 20190130) section 5.5.8.2.

#### `define `[`CTAP_STACKSIZE`](#group__fido2__ctap__ctap_1gaf25c65f0c96132475ed6b0442ff4a48d) 

CTAP thread stack size.

#### `define `[`CTAP_UP_BUTTON`](#group__fido2__ctap__ctap_1gac7aa48faa447a0da1c287cf16bd33988) 

CTAP user presence button.

#### `define `[`CONFIG_FIDO2_CTAP_DISABLE_UP`](#group__fido2__ctap__ctap_1ga4e6ebe20a47b7b34d55eeff7a8b9e5ed) 

Disable user presence test configuration.

#### `define `[`CTAP_UP_BUTTON_MODE`](#group__fido2__ctap__ctap_1ga12f7d13f0b349b8e18f873449925d4a4) 

CTAP user presence button mode.

#### `define `[`CTAP_UP_BUTTON_FLANK`](#group__fido2__ctap__ctap_1ga3a6cede5552b704d5616fc61879d4c43) 

CTAP user presence button flank.

#### `define `[`CONFIG_FIDO2_CTAP_DISABLE_LED`](#group__fido2__ctap__ctap_1ga921ff94a9795d469369fe136f85ad1de) 

Disable user presence test configuration.

Disable user LED animation configuration

#### `define `[`CTAP_RP_MAX_NAME_SIZE`](#group__fido2__ctap__ctap_1ga58c4918ec5cd8834f96a0245bbe359f5) 

Max size of relying party name.

#### `define `[`CTAP_USER_MAX_NAME_SIZE`](#group__fido2__ctap__ctap_1gacb7048598196e8eb73fb32c0fca08352) 

Max size of username including null character.

#### `define `[`CTAP_USER_ID_MAX_SIZE`](#group__fido2__ctap__ctap_1gac2ee2553c931d5eeae789339aa04eb6a) 

Max size of user id.

#### `define `[`CTAP_DOMAIN_NAME_MAX_SIZE`](#group__fido2__ctap__ctap_1gab0e182159f2f27dab0714a38a47697f0) 

Max size of a domain name including null character.

#### `define `[`CTAP_ICON_MAX_SIZE`](#group__fido2__ctap__ctap_1ga059ce53d8ccd903b84720bd455f9e138) 

Max size of icon including null character.

#### `define `[`CTAP_PIN_MIN_SIZE`](#group__fido2__ctap__ctap_1gac511e0182ebf3aaadc36c52fc001ccc7) 

PIN min size.

#### `define `[`CTAP_PIN_ENC_MIN_SIZE`](#group__fido2__ctap__ctap_1gaf7c4efc404c1ec32303fe061ce750a6d) 

Encrypted newPin min size.

Encrypted PIN is padded with trailing 0x00 bytes to a minimum length of 64 in order to prevent leak of PIN length.

#### `define `[`CTAP_PIN_ENC_MAX_SIZE`](#group__fido2__ctap__ctap_1ga67eb9af04e5453c57e6a0f78933566c4) 

Encrypted newPin max size.

#### `define `[`CTAP_PIN_MAX_SIZE`](#group__fido2__ctap__ctap_1gae5346677d7ee8146ccc845378f6a6248) 

PIN max size.

#### `define `[`CTAP_PIN_MAX_ATTS`](#group__fido2__ctap__ctap_1ga0dbefca590ecd222ae82d58b9f9af62f) 

Max total consecutive incorrect PIN attempts.

#### `define `[`CTAP_PIN_MAX_ATTS_BOOT`](#group__fido2__ctap__ctap_1ga97dafca9a1a99e5bf999d89bdca76185) 

Max consecutive incorrect PIN attempts for 1 boot cycle.

#### `define `[`CTAP_PIN_PROT_VER`](#group__fido2__ctap__ctap_1ga787d67f41873e99580dd79d887c08c42) 

PIN protocol version.

#### `define `[`CTAP_AMT_SUP_PIN_VER`](#group__fido2__ctap__ctap_1ga8a89b2cc16ba329f7f486f7d0ea7581c) 

Total number of supported PIN protocol versions.

#### `define `[`CTAP_PIN_TOKEN_SZ`](#group__fido2__ctap__ctap_1gaa8b954664708326192441cb7ea76c59d) 

Size of pin token.

Needs to be a multiple of 16 bytes (AES block length).

#### `define `[`CTAP_CRED_KEY_LEN`](#group__fido2__ctap__ctap_1gad0b4210a6a0ec00ee7168348b1c728b9) 

Size of key used to encrypt credential.

Needed if authenticator is unable to store resident keys. See webauthn specification (version 20190304) section 4 (Credential ID) for details.

#### `define `[`CTAP_AES_CCM_L`](#group__fido2__ctap__ctap_1ga0d3ab8d7a35879df94b8b10097ce5231) 

AES_CCM_L parameter.

L has to be between 2 and 8. Value of 2 means that message has to be in the range 0 <= l(m) < 2^(16) = 65536. This should always be sufficient to send an encrypted resident key.

#### `define `[`CTAP_AES_CCM_NONCE_SIZE`](#group__fido2__ctap__ctap_1gac54c065a0e95eeb9461642fba8841784) 

AES CCM nonce size.

#### `define `[`CTAP_CREDENTIAL_ID_ENC_SIZE`](#group__fido2__ctap__ctap_1ga2a632ea453a214459e06b5df6e945c9f) 

Total size of AES CCM credential id.

Size of encrypted resident key = resident key - cred id - has_nonce

#### `define `[`CTAP_UP_TIMEOUT`](#group__fido2__ctap__ctap_1gabd960f9d81b350fc259dbd0eac553dca) 

Timeout for user presence test.

#### `define `[`CTAP_GET_NEXT_ASSERTION_TIMEOUT`](#group__fido2__ctap__ctap_1gaa0e290281d8eff4fb828677b069ac368) 

Max time between call to get_assertion or get_next_assertion until error is returned.

#### `define `[`CTAP_AAGUID`](#group__fido2__ctap__ctap_1gac92d0e1e8f579083477fc64610535b36) 

128 bit identifier of authenticator

#### `define `[`CTAP_AAGUID_SIZE`](#group__fido2__ctap__ctap_1ga9506644604e5d0beaf15e8c9c74d309d) 

CTAP size of authenticator AAGUID in bytes.

#### `define `[`CTAP_COSE_ALG_ES256`](#group__fido2__ctap__ctap_1ga74f28d2e0fed9f61401162637616d917) 

CTAP COSE Algorithms registry identifier for ES256.

#### `define `[`CTAP_COSE_ALG_ECDH_ES_HKDF_256`](#group__fido2__ctap__ctap_1gaa4a369b743441f0a166ffc6c74c91c8f) 

CTAP COSE Algorithms registry identifier for ECDH ES HKDF 256.

#### `define `[`CTAP_CREDENTIAL_ID_SIZE`](#group__fido2__ctap__ctap_1ga22677cc28f2b9a92b7544ea6b96686c8) 

CTAP size of credential id.

#### `define `[`CTAP_INITIALIZED_MARKER`](#group__fido2__ctap__ctap_1ga9dcaee9666e3ac124be483a17d199e06) 

CTAP state initialized marker.

Used to check if authenticator state has already been initialized when reading data from flash.

#### `define `[`CTAP_MAX_EXCLUDE_LIST_SIZE`](#group__fido2__ctap__ctap_1gab799f534347e780c274b4c760b384651) 

Max size of allow list.

#### `public int `[`fido2_ctap_get_sig`](#group__fido2__ctap__ctap_1ga29bcc773a21a28b80846901269f71abf)`(const uint8_t * auth_data,size_t auth_data_len,const uint8_t * client_data_hash,const `[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk,uint8_t * sig,size_t * sig_len)` 

Create signature from authenticator data.

Used for attestation and assertion statement.

#### Parameters
* `auth_data` authenticator data 

* `auth_data_len` length of `auth_data`

* `client_data_hash` hash of client data sent by relying party in request 

* `rk` resident key used to sign the data 

* `sig` signature buffer 

* `sig_len` length of `sig`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public bool `[`fido2_ctap_cred_params_supported`](#group__fido2__ctap__ctap_1ga1600cf4566c67f9759a82741a8b5f441)`(uint8_t cred_type,int32_t alg_type)` 

Check if requested algorithm is supported.

#### Parameters
* `cred_type` type of credential 

* `alg_type` cryptographic algorithm identifier

#### Returns
true if algorithm is supported 

#### Returns
false otherwise

#### `public int `[`fido2_ctap_encrypt_rk`](#group__fido2__ctap__ctap_1ga25a7e7d74f188705198c08a6ef8106b1)`(`[`ctap_resident_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga41f3542a7fd6e03caeff36b2f2403a5a)` * rk,uint8_t * nonce,size_t nonce_len,`[`ctap_cred_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__cred__id__t)` * id)` 

Encrypt resident key with AES CCM.

#### Parameters
* `rk` type of credential 

* `nonce` CCM nonce 

* `nonce_len` length of `nonce`

* `id` credential id struct storing encrypted resident key

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public bool `[`fido2_ctap_pin_is_set`](#group__fido2__ctap__ctap_1gac3a1509f3c83c4d2377b512901f45830)`(void)` 

Check if PIN has been set on authenticator.

#### Returns
true if PIN has been set 

#### Returns
false otherwise

#### `public `[`ctap_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__state__t)` * `[`fido2_ctap_get_state`](#group__fido2__ctap__ctap_1ga4fc5b58a0c4aa8ace383d28285bab393)`(void)` 

Get a pointer to the authenticator state.

#### Returns
pointer to [ctap_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__state__t)

# struct `ctap_config_t` 

CTAP authenticator config struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`aaguid`](#structctap__config__t_1abcd9caa1ddd3d032345350cfd68a27b9) | AAGUID of device.
`public uint8_t `[`options`](#structctap__config__t_1a144421d0bd72d1c5b152c8af098f76b9) | options

## Members

#### `public uint8_t `[`aaguid`](#structctap__config__t_1abcd9caa1ddd3d032345350cfd68a27b9) 

AAGUID of device.

#### `public uint8_t `[`options`](#structctap__config__t_1a144421d0bd72d1c5b152c8af098f76b9) 

options

# struct `ctap_state_t` 

CTAP state struct.

state of authenticator. Stored in flash memory

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__config__t)` `[`config`](#structctap__state__t_1a728c607e8252fb89c86ff0a3ad7e21b0) | configuration of authenticator
`public `[`ctap_crypto_key_agreement_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__key__agreement__key__t)` `[`ag_key`](#structctap__state__t_1af451549da473490edbbbbf8235cd43d0) | Platform key agreement key.
`public int `[`rem_pin_att`](#structctap__state__t_1a3b5e8eb4ace1862120f162f1dfea2950) | remaining PIN tries
`public uint16_t `[`rk_amount_stored`](#structctap__state__t_1a299830832a0b918577f598dda6d56f4f) | total number of resident keys stored on device
`public uint8_t `[`initialized_marker`](#structctap__state__t_1abb54c27bbb41083203dd0cf3497d00cd) | CTAP initialized marker.
`public uint8_t `[`pin_hash`](#structctap__state__t_1ab7e545cf7520e1cdb42ada77c90e8295) | LEFT(SHA-256(pin), 16)
`public uint8_t `[`cred_key`](#structctap__state__t_1a2fd926054a5ddfe85b1eee3ae0c6c8c3) | AES CCM encryption key for cred.
`public bool `[`cred_key_is_initialized`](#structctap__state__t_1ab1d7a0722146b8b4a36cafd76e016dba) | AES CCM key initialized flag.
`public bool `[`pin_is_set`](#structctap__state__t_1a4fd81a3c6c8ab0d1565aa4bb90f4bb5c) | PIN is set or not.
`public uint32_t `[`id_cnt`](#structctap__state__t_1afeab5e4a2c4fd1b7a7bbbf16fd58597d) | id counter for credential id

## Members

#### `public `[`ctap_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__config__t)` `[`config`](#structctap__state__t_1a728c607e8252fb89c86ff0a3ad7e21b0) 

configuration of authenticator

#### `public `[`ctap_crypto_key_agreement_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__key__agreement__key__t)` `[`ag_key`](#structctap__state__t_1af451549da473490edbbbbf8235cd43d0) 

Platform key agreement key.

#### `public int `[`rem_pin_att`](#structctap__state__t_1a3b5e8eb4ace1862120f162f1dfea2950) 

remaining PIN tries

#### `public uint16_t `[`rk_amount_stored`](#structctap__state__t_1a299830832a0b918577f598dda6d56f4f) 

total number of resident keys stored on device

#### `public uint8_t `[`initialized_marker`](#structctap__state__t_1abb54c27bbb41083203dd0cf3497d00cd) 

CTAP initialized marker.

#### `public uint8_t `[`pin_hash`](#structctap__state__t_1ab7e545cf7520e1cdb42ada77c90e8295) 

LEFT(SHA-256(pin), 16)

#### `public uint8_t `[`cred_key`](#structctap__state__t_1a2fd926054a5ddfe85b1eee3ae0c6c8c3) 

AES CCM encryption key for cred.

#### `public bool `[`cred_key_is_initialized`](#structctap__state__t_1ab1d7a0722146b8b4a36cafd76e016dba) 

AES CCM key initialized flag.

#### `public bool `[`pin_is_set`](#structctap__state__t_1a4fd81a3c6c8ab0d1565aa4bb90f4bb5c) 

PIN is set or not.

#### `public uint32_t `[`id_cnt`](#structctap__state__t_1afeab5e4a2c4fd1b7a7bbbf16fd58597d) 

id counter for credential id

# struct `ctap_options_t` 

CTAP options struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`rk`](#structctap__options__t_1aadd140ae5737671633f37dccd68dd3a0) | resident key
`public int `[`uv`](#structctap__options__t_1a5fff26f2d15d4ca80bb5ba0809e02498) | user verification
`public int `[`up`](#structctap__options__t_1a189a499208df32d54ab9b119d6621fd0) | user presence

## Members

#### `public int `[`rk`](#structctap__options__t_1aadd140ae5737671633f37dccd68dd3a0) 

resident key

#### `public int `[`uv`](#structctap__options__t_1a5fff26f2d15d4ca80bb5ba0809e02498) 

user verification

#### `public int `[`up`](#structctap__options__t_1a189a499208df32d54ab9b119d6621fd0) 

user presence

# struct `ctap_user_ent_t` 

CTAP user entity struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`id`](#structctap__user__ent__t_1a9b50e77306740baf45ae2e9378ecc8f3) | RP-specific user account id.
`public uint8_t `[`id_len`](#structctap__user__ent__t_1ace50537b37229a22513156cf1e170ae0) | actual length of user id
`public uint8_t `[`name`](#structctap__user__ent__t_1a9e2360ac4454635225ed9d90a682bbb6) | user name
`public uint8_t `[`display_name`](#structctap__user__ent__t_1a22bc4dded76f8d40d5bd192e277b86a1) | user display name
`public uint8_t `[`icon`](#structctap__user__ent__t_1ab7a8fc1ba79ef2dcd5a920aca53e0228) | URL referencing user icon image.

## Members

#### `public uint8_t `[`id`](#structctap__user__ent__t_1a9b50e77306740baf45ae2e9378ecc8f3) 

RP-specific user account id.

#### `public uint8_t `[`id_len`](#structctap__user__ent__t_1ace50537b37229a22513156cf1e170ae0) 

actual length of user id

#### `public uint8_t `[`name`](#structctap__user__ent__t_1a9e2360ac4454635225ed9d90a682bbb6) 

user name

#### `public uint8_t `[`display_name`](#structctap__user__ent__t_1a22bc4dded76f8d40d5bd192e277b86a1) 

user display name

#### `public uint8_t `[`icon`](#structctap__user__ent__t_1ab7a8fc1ba79ef2dcd5a920aca53e0228) 

URL referencing user icon image.

# struct `ctap_rp_ent_t` 

CTAP relying party entity struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`id`](#structctap__rp__ent__t_1a0e4fd6b23c002dc943639652c69c4aac) | relying party identifier
`public uint8_t `[`id_len`](#structctap__rp__ent__t_1a0aa4635ec3bbe9e3a464b3ceb90f6592) | actual length of relying party identifier
`public uint8_t `[`name`](#structctap__rp__ent__t_1afe81f7e0fe08f73b1b447e459a802bc4) | human friendly relying party name
`public uint8_t `[`icon`](#structctap__rp__ent__t_1a2885d922cdb5cc32aa4352d0563c60b5) | URL referencing relying party icon image.

## Members

#### `public uint8_t `[`id`](#structctap__rp__ent__t_1a0e4fd6b23c002dc943639652c69c4aac) 

relying party identifier

#### `public uint8_t `[`id_len`](#structctap__rp__ent__t_1a0aa4635ec3bbe9e3a464b3ceb90f6592) 

actual length of relying party identifier

#### `public uint8_t `[`name`](#structctap__rp__ent__t_1afe81f7e0fe08f73b1b447e459a802bc4) 

human friendly relying party name

#### `public uint8_t `[`icon`](#structctap__rp__ent__t_1a2885d922cdb5cc32aa4352d0563c60b5) 

URL referencing relying party icon image.

# struct `ctap_public_key_cose_t` 

CTAP cose key struct.

[https://www.iana.org/assignments/cose/cose.xhtml](https://www.iana.org/assignments/cose/cose.xhtml)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` `[`pubkey`](#structctap__public__key__cose__t_1a35f622afd8ad9f9a69793d77a21fb3c9) | public key
`public int `[`kty`](#structctap__public__key__cose__t_1a2ecdfeeb81c4df14038fcc9dfd0f313f) | identification of key type
`public int `[`crv`](#structctap__public__key__cose__t_1a0ebabce0ba1c468552f5c09a3190e270) | EC identifier.
`public int32_t `[`alg_type`](#structctap__public__key__cose__t_1a25aa8aa86696b763c2bb5c61471e6fe4) | COSEAlgorithmIdentifier.
`public uint8_t `[`cred_type`](#structctap__public__key__cose__t_1aa6fc9fa5a525af5ec4b644607cab2d17) | type of credential

## Members

#### `public `[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` `[`pubkey`](#structctap__public__key__cose__t_1a35f622afd8ad9f9a69793d77a21fb3c9) 

public key

#### `public int `[`kty`](#structctap__public__key__cose__t_1a2ecdfeeb81c4df14038fcc9dfd0f313f) 

identification of key type

#### `public int `[`crv`](#structctap__public__key__cose__t_1a0ebabce0ba1c468552f5c09a3190e270) 

EC identifier.

#### `public int32_t `[`alg_type`](#structctap__public__key__cose__t_1a25aa8aa86696b763c2bb5c61471e6fe4) 

COSEAlgorithmIdentifier.

#### `public uint8_t `[`cred_type`](#structctap__public__key__cose__t_1aa6fc9fa5a525af5ec4b644607cab2d17) 

type of credential

# struct `ctap_cred_desc` 

CTAP credential description struct.

Webauthn specification (version 20190304) section 5.8.3

reordering this struct will break the AES CCM encryption of resident keys.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`cred_type`](#structctap__cred__desc_1aa98cefdd2993b85e80ae0aa2c3977cdc) | type of credential
`public uint8_t `[`cred_id`](#structctap__cred__desc_1a32609c59652fb118d7297b913d7d93cc) | credential identifier
`public uint8_t `[`nonce`](#structctap__cred__desc_1a6cedaa47c25ed49f24e63f47ba65461a) | CTAP AES CCM nonce.
`public union ctap_cred_desc::@338 `[`@339`](#structctap__cred__desc_1ad21d2ef86437c9b621416a982cc54878) | 
`public bool `[`has_nonce`](#structctap__cred__desc_1ada70b3fd86361d729fb1d766bc659c6f) | Indicate if nonce or cred_id

## Members

#### `public uint8_t `[`cred_type`](#structctap__cred__desc_1aa98cefdd2993b85e80ae0aa2c3977cdc) 

type of credential

#### `public uint8_t `[`cred_id`](#structctap__cred__desc_1a32609c59652fb118d7297b913d7d93cc) 

credential identifier

#### `public uint8_t `[`nonce`](#structctap__cred__desc_1a6cedaa47c25ed49f24e63f47ba65461a) 

CTAP AES CCM nonce.

#### `public union ctap_cred_desc::@338 `[`@339`](#structctap__cred__desc_1ad21d2ef86437c9b621416a982cc54878) 

#### `public bool `[`has_nonce`](#structctap__cred__desc_1ada70b3fd86361d729fb1d766bc659c6f) 

Indicate if nonce or cred_id

# struct `ctap_resident_key` 

CTAP resident key struct.

A resident key is a fido2 credential that is being stored on the authenticator.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`rp_id_hash`](#structctap__resident__key_1ab7cb8c542402dbca7a477bd28654816f) | hash of rp domain string
`public uint8_t `[`user_id`](#structctap__resident__key_1a0c0ade359ccdc46a1d46d4926caf313a) | id of user
`public uint8_t `[`user_id_len`](#structctap__resident__key_1a758b94cb58a9f60ef1375bf3d3cda0a5) | length of the user id
`public uint8_t `[`priv_key`](#structctap__resident__key_1a2c6b5e7fd3418f1cfe197eb7a3079343) | private key
`public uint16_t `[`id`](#structctap__resident__key_1a9ac746b76de71efe600bbd592cae7dd4) | internal id of key
`public uint32_t `[`sign_count`](#structctap__resident__key_1a317032820a48f03fe9dd880b82d5ec0d) | signature counter.
`public `[`ctap_cred_desc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1gabf33efc2175b3d1beeb399d95067a41f)` `[`cred_desc`](#structctap__resident__key_1a04b052c0be1cd7507c0aacf29e8b8a10) | credential descriptor

## Members

#### `public uint8_t `[`rp_id_hash`](#structctap__resident__key_1ab7cb8c542402dbca7a477bd28654816f) 

hash of rp domain string

#### `public uint8_t `[`user_id`](#structctap__resident__key_1a0c0ade359ccdc46a1d46d4926caf313a) 

id of user

#### `public uint8_t `[`user_id_len`](#structctap__resident__key_1a758b94cb58a9f60ef1375bf3d3cda0a5) 

length of the user id

#### `public uint8_t `[`priv_key`](#structctap__resident__key_1a2c6b5e7fd3418f1cfe197eb7a3079343) 

private key

#### `public uint16_t `[`id`](#structctap__resident__key_1a9ac746b76de71efe600bbd592cae7dd4) 

internal id of key

#### `public uint32_t `[`sign_count`](#structctap__resident__key_1a317032820a48f03fe9dd880b82d5ec0d) 

signature counter.

See webauthn specification (version 20190304) section 6.1.1 for details.

#### `public `[`ctap_cred_desc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1gabf33efc2175b3d1beeb399d95067a41f)` `[`cred_desc`](#structctap__resident__key_1a04b052c0be1cd7507c0aacf29e8b8a10) 

credential descriptor

# struct `ctap_cred_id_t` 

CTAP credential ID.

Credential ID can either be 16 random bytes or the encrypted resident key. (AES CCM cipher + mac + nonce used)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`id`](#structctap__cred__id__t_1a6ca45da0d042ac403d50495bf97b906d) | id
`public uint8_t `[`mac`](#structctap__cred__id__t_1a7a4bb25e65dacb50d2494425e845c45a) | AES CCM MAC.
`public uint8_t `[`nonce`](#structctap__cred__id__t_1a68732552a156665390e95d9a8453191a) | AES CCM nonce.

## Members

#### `public uint8_t `[`id`](#structctap__cred__id__t_1a6ca45da0d042ac403d50495bf97b906d) 

id

#### `public uint8_t `[`mac`](#structctap__cred__id__t_1a7a4bb25e65dacb50d2494425e845c45a) 

AES CCM MAC.

#### `public uint8_t `[`nonce`](#structctap__cred__id__t_1a68732552a156665390e95d9a8453191a) 

AES CCM nonce.

# struct `ctap_cred_desc_alt` 

CTAP credential description alternative struct.

This struct is used when parsing an allow or exclude list.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`cred_type`](#structctap__cred__desc__alt_1a31edfc45fc79638d76f9fe3ab996a03f) | type of credential
`public `[`ctap_cred_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__cred__id__t)` `[`cred_id`](#structctap__cred__desc__alt_1af251c4c772626ec7e421c2e3c6d5a2bd) | credential id

## Members

#### `public uint8_t `[`cred_type`](#structctap__cred__desc__alt_1a31edfc45fc79638d76f9fe3ab996a03f) 

type of credential

#### `public `[`ctap_cred_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__cred__id__t)` `[`cred_id`](#structctap__cred__desc__alt_1af251c4c772626ec7e421c2e3c6d5a2bd) 

credential id

# struct `ctap_make_credential_req_t` 

CTAP make credential request struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_cred_desc_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga523c7ac689f242490e782609c088e88b)` `[`exclude_list`](#structctap__make__credential__req__t_1a4e1ea5b7df2ba97a4f22d2d365d56255) | exclude list
`public size_t `[`exclude_list_len`](#structctap__make__credential__req__t_1accb466fbd785fc1fea62723d1f5de5f5) | length of CBOR exclude list array
`public `[`ctap_rp_ent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__rp__ent__t)` `[`rp`](#structctap__make__credential__req__t_1adfde6bf887d9953764f9b6a115a692f8) | relying party
`public `[`ctap_user_ent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__user__ent__t)` `[`user`](#structctap__make__credential__req__t_1a02959aaac95be0efadf3c138479d1ecf) | user
`public `[`ctap_options_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__options__t)` `[`options`](#structctap__make__credential__req__t_1ae94572f8d7b997033e16fa195895142b) | parameters to influence authenticator operation
`public uint8_t `[`client_data_hash`](#structctap__make__credential__req__t_1ac6e1d5af86a2032aba1985d3ed698660) | SHA-256 hash of JSON serialized client data.
`public uint8_t `[`pin_auth`](#structctap__make__credential__req__t_1a5f58396a7e0e52d7ffdbe9f6b9b9af64) | pin_auth if PIN is set
`public size_t `[`pin_auth_len`](#structctap__make__credential__req__t_1ae7f735f7acd4222646c04556b1c64473) | pin_auth len
`public int32_t `[`alg_type`](#structctap__make__credential__req__t_1a8d4643363bdeb4d429cc4a645047f79e) | cryptographic algorithm identifier
`public bool `[`pin_auth_present`](#structctap__make__credential__req__t_1a68bc0468b88bd7548547a9560a7ace31) | pin_auth present
`public uint8_t `[`pin_protocol`](#structctap__make__credential__req__t_1aeb828c3b095a518fd39508e109853f5b) | PIN protocol version.
`public uint8_t `[`cred_type`](#structctap__make__credential__req__t_1ae8fd6db4b3410da173427982aaace2d4) | type of credential

## Members

#### `public `[`ctap_cred_desc_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga523c7ac689f242490e782609c088e88b)` `[`exclude_list`](#structctap__make__credential__req__t_1a4e1ea5b7df2ba97a4f22d2d365d56255) 

exclude list

#### `public size_t `[`exclude_list_len`](#structctap__make__credential__req__t_1accb466fbd785fc1fea62723d1f5de5f5) 

length of CBOR exclude list array

#### `public `[`ctap_rp_ent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__rp__ent__t)` `[`rp`](#structctap__make__credential__req__t_1adfde6bf887d9953764f9b6a115a692f8) 

relying party

#### `public `[`ctap_user_ent_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__user__ent__t)` `[`user`](#structctap__make__credential__req__t_1a02959aaac95be0efadf3c138479d1ecf) 

user

#### `public `[`ctap_options_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__options__t)` `[`options`](#structctap__make__credential__req__t_1ae94572f8d7b997033e16fa195895142b) 

parameters to influence authenticator operation

#### `public uint8_t `[`client_data_hash`](#structctap__make__credential__req__t_1ac6e1d5af86a2032aba1985d3ed698660) 

SHA-256 hash of JSON serialized client data.

#### `public uint8_t `[`pin_auth`](#structctap__make__credential__req__t_1a5f58396a7e0e52d7ffdbe9f6b9b9af64) 

pin_auth if PIN is set

#### `public size_t `[`pin_auth_len`](#structctap__make__credential__req__t_1ae7f735f7acd4222646c04556b1c64473) 

pin_auth len

#### `public int32_t `[`alg_type`](#structctap__make__credential__req__t_1a8d4643363bdeb4d429cc4a645047f79e) 

cryptographic algorithm identifier

#### `public bool `[`pin_auth_present`](#structctap__make__credential__req__t_1a68bc0468b88bd7548547a9560a7ace31) 

pin_auth present

#### `public uint8_t `[`pin_protocol`](#structctap__make__credential__req__t_1aeb828c3b095a518fd39508e109853f5b) 

PIN protocol version.

#### `public uint8_t `[`cred_type`](#structctap__make__credential__req__t_1ae8fd6db4b3410da173427982aaace2d4) 

type of credential

# struct `ctap_get_assertion_req_t` 

CTAP get assertion request struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_options_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__options__t)` `[`options`](#structctap__get__assertion__req__t_1af23ba3303ffbafd06ab8c47cb34c6209) | parameters to influence authenticator operation
`public `[`ctap_cred_desc_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga523c7ac689f242490e782609c088e88b)` `[`allow_list`](#structctap__get__assertion__req__t_1a6d5abf132a7bd8302d19a1ac1a5eb882) | allow list
`public uint8_t `[`client_data_hash`](#structctap__get__assertion__req__t_1a3e71b0ef872f9068e52ede97c27eb607) | SHA-256 hash of JSON serialized client data.
`public uint8_t `[`rp_id`](#structctap__get__assertion__req__t_1a2cad9c6b8e1832f7ec352803af2a5704) | Relying Party Identifier.
`public uint8_t `[`rp_id_len`](#structctap__get__assertion__req__t_1ae475e7f48eeb1b835bfb8cb175bea694) | Actual Length of Relying Party Identifier.
`public uint8_t `[`allow_list_len`](#structctap__get__assertion__req__t_1aeaeafb0655fc8722eb05c49a7a197800) | length of CBOR allow list array
`public uint8_t `[`pin_auth`](#structctap__get__assertion__req__t_1a9418bc6dbcdabce80eb762e4612ed73d) | pin_auth if PIN is set
`public size_t `[`pin_auth_len`](#structctap__get__assertion__req__t_1aabaa9f86699188b48d91422accea7bf7) | pin_auth length
`public uint8_t `[`pin_protocol`](#structctap__get__assertion__req__t_1a34d381b8ecf56e52b174f08f4740b76e) | PIN protocol version.
`public bool `[`pin_auth_present`](#structctap__get__assertion__req__t_1a4655a71422f0c162a4e170d25b2429c9) | indicate if pin_auth present

## Members

#### `public `[`ctap_options_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__options__t)` `[`options`](#structctap__get__assertion__req__t_1af23ba3303ffbafd06ab8c47cb34c6209) 

parameters to influence authenticator operation

#### `public `[`ctap_cred_desc_alt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap__ctap_1ga523c7ac689f242490e782609c088e88b)` `[`allow_list`](#structctap__get__assertion__req__t_1a6d5abf132a7bd8302d19a1ac1a5eb882) 

allow list

#### `public uint8_t `[`client_data_hash`](#structctap__get__assertion__req__t_1a3e71b0ef872f9068e52ede97c27eb607) 

SHA-256 hash of JSON serialized client data.

#### `public uint8_t `[`rp_id`](#structctap__get__assertion__req__t_1a2cad9c6b8e1832f7ec352803af2a5704) 

Relying Party Identifier.

#### `public uint8_t `[`rp_id_len`](#structctap__get__assertion__req__t_1ae475e7f48eeb1b835bfb8cb175bea694) 

Actual Length of Relying Party Identifier.

#### `public uint8_t `[`allow_list_len`](#structctap__get__assertion__req__t_1aeaeafb0655fc8722eb05c49a7a197800) 

length of CBOR allow list array

#### `public uint8_t `[`pin_auth`](#structctap__get__assertion__req__t_1a9418bc6dbcdabce80eb762e4612ed73d) 

pin_auth if PIN is set

#### `public size_t `[`pin_auth_len`](#structctap__get__assertion__req__t_1aabaa9f86699188b48d91422accea7bf7) 

pin_auth length

#### `public uint8_t `[`pin_protocol`](#structctap__get__assertion__req__t_1a34d381b8ecf56e52b174f08f4740b76e) 

PIN protocol version.

#### `public bool `[`pin_auth_present`](#structctap__get__assertion__req__t_1a4655a71422f0c162a4e170d25b2429c9) 

indicate if pin_auth present

# struct `ctap_client_pin_req_t` 

CTAP client pin request struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_public_key_cose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__public__key__cose__t)` `[`key_agreement`](#structctap__client__pin__req__t_1a2ca0bdc623e09f358b590976fb4d58a1) | public key of platform_key_agreement_key
`public uint16_t `[`new_pin_enc_size`](#structctap__client__pin__req__t_1a1e2560c9ff3d5fe9ba5b65786581df74) | size of encrypted new pin
`public uint8_t `[`pin_auth`](#structctap__client__pin__req__t_1a1e3a3177ea39a1350e88896ac3855687) | first 16 bytes of HMAC-SHA-256 of encrypted contents
`public uint8_t `[`new_pin_enc`](#structctap__client__pin__req__t_1af4a1d767b1f6eb6440b968be4867c418) | Encrypted new PIN using sharedSecret.
`public uint8_t `[`pin_hash_enc`](#structctap__client__pin__req__t_1aba8d4470e585f84eafd4b0b2c0e79a76) | Encrypted first 16 bytes of SHA-256 of PIN using sharedSecret.
`public uint8_t `[`sub_command`](#structctap__client__pin__req__t_1a5cedc850271e0d0d2edf4252548f5a54) | authenticator Client PIN sub command
`public uint8_t `[`pin_protocol`](#structctap__client__pin__req__t_1a86c68320e43cc1aa7b9455e5a066c0c9) | PIN protocol version chosen by the client.
`public bool `[`pin_hash_enc_present`](#structctap__client__pin__req__t_1abcf5f7ec2048e5e8f67ade56992a86c1) | indicate pin_hash_enc is present
`public bool `[`pin_auth_present`](#structctap__client__pin__req__t_1a75ba6db4a99bc4b5e665f44441fb360e) | indicate if pin_auth present
`public bool `[`key_agreement_present`](#structctap__client__pin__req__t_1a0cc543315acd4056c204fdea31c90d60) | indicate if key_agreement present

## Members

#### `public `[`ctap_public_key_cose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__public__key__cose__t)` `[`key_agreement`](#structctap__client__pin__req__t_1a2ca0bdc623e09f358b590976fb4d58a1) 

public key of platform_key_agreement_key

#### `public uint16_t `[`new_pin_enc_size`](#structctap__client__pin__req__t_1a1e2560c9ff3d5fe9ba5b65786581df74) 

size of encrypted new pin

#### `public uint8_t `[`pin_auth`](#structctap__client__pin__req__t_1a1e3a3177ea39a1350e88896ac3855687) 

first 16 bytes of HMAC-SHA-256 of encrypted contents

#### `public uint8_t `[`new_pin_enc`](#structctap__client__pin__req__t_1af4a1d767b1f6eb6440b968be4867c418) 

Encrypted new PIN using sharedSecret.

#### `public uint8_t `[`pin_hash_enc`](#structctap__client__pin__req__t_1aba8d4470e585f84eafd4b0b2c0e79a76) 

Encrypted first 16 bytes of SHA-256 of PIN using sharedSecret.

#### `public uint8_t `[`sub_command`](#structctap__client__pin__req__t_1a5cedc850271e0d0d2edf4252548f5a54) 

authenticator Client PIN sub command

#### `public uint8_t `[`pin_protocol`](#structctap__client__pin__req__t_1a86c68320e43cc1aa7b9455e5a066c0c9) 

PIN protocol version chosen by the client.

#### `public bool `[`pin_hash_enc_present`](#structctap__client__pin__req__t_1abcf5f7ec2048e5e8f67ade56992a86c1) 

indicate pin_hash_enc is present

#### `public bool `[`pin_auth_present`](#structctap__client__pin__req__t_1a75ba6db4a99bc4b5e665f44441fb360e) 

indicate if pin_auth present

#### `public bool `[`key_agreement_present`](#structctap__client__pin__req__t_1a0cc543315acd4056c204fdea31c90d60) 

indicate if key_agreement present

# struct `ctap_attested_cred_data_header_t` 

CTAP attested credential data header struct.

Defined for easier serialization

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`aaguid`](#structctap__attested__cred__data__header__t_1a9ff42e278bb5299e11fd5fb712062ffb) | authenticator aaguid
`public uint8_t `[`cred_len_h`](#structctap__attested__cred__data__header__t_1acb42bf7549300cb5a6f2c9e1b3e90e59) | higher byte of credential length
`public uint8_t `[`cred_len_l`](#structctap__attested__cred__data__header__t_1a338348ada8bbcea2482c42ad1c424ccb) | lower byte of credential length
`public `[`ctap_cred_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__cred__id__t)` `[`cred_id`](#structctap__attested__cred__data__header__t_1a0663f315d8ef583a1e876a06508279b0) | credential id

## Members

#### `public uint8_t `[`aaguid`](#structctap__attested__cred__data__header__t_1a9ff42e278bb5299e11fd5fb712062ffb) 

authenticator aaguid

#### `public uint8_t `[`cred_len_h`](#structctap__attested__cred__data__header__t_1acb42bf7549300cb5a6f2c9e1b3e90e59) 

higher byte of credential length

#### `public uint8_t `[`cred_len_l`](#structctap__attested__cred__data__header__t_1a338348ada8bbcea2482c42ad1c424ccb) 

lower byte of credential length

#### `public `[`ctap_cred_id_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__cred__id__t)` `[`cred_id`](#structctap__attested__cred__data__header__t_1a0663f315d8ef583a1e876a06508279b0) 

credential id

# struct `ctap_attested_cred_data_t` 

CTAP attested credential data struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_attested_cred_data_header_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__attested__cred__data__header__t)` `[`header`](#structctap__attested__cred__data__t_1ac693b1e07de6d8f43082de502c220bc1) | attested credential data header
`public `[`ctap_public_key_cose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__public__key__cose__t)` `[`key`](#structctap__attested__cred__data__t_1a253abf2101292aa35b3dc4b4832e99ca) | cose key

## Members

#### `public `[`ctap_attested_cred_data_header_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__attested__cred__data__header__t)` `[`header`](#structctap__attested__cred__data__t_1ac693b1e07de6d8f43082de502c220bc1) 

attested credential data header

#### `public `[`ctap_public_key_cose_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__public__key__cose__t)` `[`key`](#structctap__attested__cred__data__t_1a253abf2101292aa35b3dc4b4832e99ca) 

cose key

# struct `ctap_auth_data_header_t` 

CTAP authenticator data header struct.

Defined for easier serialization

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`rp_id_hash`](#structctap__auth__data__header__t_1a7a6f95e5af5b6ed565b7785f82734898) | hash of relying party id
`public uint8_t `[`flags`](#structctap__auth__data__header__t_1a3112b40c8d37331d03edd08a8a4b5d10) | flags indicating result of user verification
`public uint32_t `[`sign_count`](#structctap__auth__data__header__t_1aafbae584fbc6b2ddf16ce2d88820450c) | sign count of credential

## Members

#### `public uint8_t `[`rp_id_hash`](#structctap__auth__data__header__t_1a7a6f95e5af5b6ed565b7785f82734898) 

hash of relying party id

#### `public uint8_t `[`flags`](#structctap__auth__data__header__t_1a3112b40c8d37331d03edd08a8a4b5d10) 

flags indicating result of user verification

#### `public uint32_t `[`sign_count`](#structctap__auth__data__header__t_1aafbae584fbc6b2ddf16ce2d88820450c) 

sign count of credential

# struct `ctap_auth_data_t` 

CTAP authenticator data struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_auth_data_header_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__auth__data__header__t)` `[`header`](#structctap__auth__data__t_1af080deae363333d0aff245b35e2f5785) | auth data header
`public `[`ctap_attested_cred_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__attested__cred__data__t)` `[`attested_cred_data`](#structctap__auth__data__t_1ad3d53e9dfedc8fe058077a43d560d90a) | attested credential data

## Members

#### `public `[`ctap_auth_data_header_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__auth__data__header__t)` `[`header`](#structctap__auth__data__t_1af080deae363333d0aff245b35e2f5785) 

auth data header

#### `public `[`ctap_attested_cred_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_ctap.md#structctap__attested__cred__data__t)` `[`attested_cred_data`](#structctap__auth__data__t_1ad3d53e9dfedc8fe058077a43d560d90a) 

attested credential data

# struct `ctap_info_t` 

CTAP info struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`max_msg_size`](#structctap__info__t_1addbf4db9e86de775004753f8b327c86a) | max message size
`public uint8_t `[`aaguid`](#structctap__info__t_1a383093fa87fd3a3adaad751c5cef4516) | AAGUID.
`public uint8_t `[`versions`](#structctap__info__t_1a611fc536a4d2474881fd8ed870ad38dd) | supported versions of FIDO
`public uint8_t `[`options`](#structctap__info__t_1a53f101977ccdc3725e91622c43cf74ac) | supported options
`public uint8_t `[`pin_protocol`](#structctap__info__t_1a56b17f012554312e0676f8ffc6588ae6) | supported PIN protocol versions
`public bool `[`pin_is_set`](#structctap__info__t_1a4c2a99d362c67fe291c12e8c8bee436a) | PIN is set or not.

## Members

#### `public uint16_t `[`max_msg_size`](#structctap__info__t_1addbf4db9e86de775004753f8b327c86a) 

max message size

#### `public uint8_t `[`aaguid`](#structctap__info__t_1a383093fa87fd3a3adaad751c5cef4516) 

AAGUID.

#### `public uint8_t `[`versions`](#structctap__info__t_1a611fc536a4d2474881fd8ed870ad38dd) 

supported versions of FIDO

#### `public uint8_t `[`options`](#structctap__info__t_1a53f101977ccdc3725e91622c43cf74ac) 

supported options

#### `public uint8_t `[`pin_protocol`](#structctap__info__t_1a56b17f012554312e0676f8ffc6588ae6) 

supported PIN protocol versions

#### `public bool `[`pin_is_set`](#structctap__info__t_1a4c2a99d362c67fe291c12e8c8bee436a) 

PIN is set or not.

