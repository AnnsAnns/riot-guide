---
title: api-fido2_ctap_crypto.md
description: api-fido2_ctap_crypto.md
---
# group `fido2_ctap_crypto` 

FIDO2 CTAP crypto helper.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CTAP_CRYPTO_KEY_SIZE`](#group__fido2__ctap__crypto_1ga8bef3f3fee26c70308a414fb343700fe)            | Size in bytes of cryptographic keys used.
`define `[`CTAP_CRYPTO_ES256_DER_MAX_SIZE`](#group__fido2__ctap__crypto_1ga1eb3056a137267d13a58ed2111c35909)            | Max size of ES256 signature in ASN.1 DER format.
`public int `[`fido2_ctap_crypto_init`](#group__fido2__ctap__crypto_1gaf35e14b9831ad0dfe03846fd85d73a13)`(void)`            | Initialize crypto helper.
`public int `[`fido2_ctap_crypto_prng`](#group__fido2__ctap__crypto_1ga71473e62cc7e33ec877f818d837ca70a)`(uint8_t * buf,size_t len)`            | Wrapper function for [random_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__random_1ga96ef972fa09ff461234522b64a686630).
`public int `[`fido2_ctap_crypto_sha256_init`](#group__fido2__ctap__crypto_1gad9b932fd1f13bf028b9f1f4c8c77ce29)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx)`            | Wrapper function for [sha256_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaa139dff5368e7abe4bd6ce8ec412a825).
`public int `[`fido2_ctap_crypto_sha256_update`](#group__fido2__ctap__crypto_1ga72820c2b9039f015a583325795ccd4ce)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,const void * data,size_t len)`            | Wrapper function for [sha256_update](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga2d0ca6d5d14400a51700a52448baacb2).
`public int `[`fido2_ctap_crypto_sha256_final`](#group__fido2__ctap__crypto_1gaef051bf2e64166fc81842dfb66c96891)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,void * digest)`            | Wrapper for [sha256_final](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga68fa67df986540bc7da102fa03e2e591).
`public int `[`fido2_ctap_crypto_sha256`](#group__fido2__ctap__crypto_1ga357f03ce4c99fec875e3b51e933f435b)`(const void * data,size_t len,void * digest)`            | Wrapper function for [sha256](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gad1360f15a220ecf3b6a2222a73875b3c).
`public int `[`fido2_ctap_crypto_hmac_sha256_init`](#group__fido2__ctap__crypto_1gac5ecbe32721647c878e388472fd06034)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * key,size_t key_length)`            | Wrapper function for [hmac_sha256_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga921d7dcce661d2f8bbd825a19a76e620).
`public int `[`fido2_ctap_crypto_hmac_sha256_update`](#group__fido2__ctap__crypto_1ga8679ef81bb4aadae81bad4690caff367)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * data,size_t len)`            | Wrapper function for [hmac_sha256_update](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga89999741ee7d8969192fcf724ef801d1).
`public int `[`fido2_ctap_crypto_hmac_sha256_final`](#group__fido2__ctap__crypto_1ga911472ab100f1e3758d8d723335be967)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,void * digest)`            | Wrapper function for [hmac_sha256_final](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga897c495b2203768ca17a7622086e16b8).
`public int `[`fido2_ctap_crypto_hmac_sha256`](#group__fido2__ctap__crypto_1ga96295661577c4a7ad5253d97a5f43321)`(const void * key,size_t key_length,const void * data,size_t len,void * digest)`            | Wrapper function for [hmac_sha256](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga153aefd72bd890488cfefe6eebd921a6).
`public int `[`fido2_ctap_crypto_gen_keypair`](#group__fido2__ctap__crypto_1ga2f0c06b44100d315458731a51421a2e6)`(`[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` * pub_key,uint8_t * priv_key,size_t len)`            | Generate cryptographic key pair.
`public int `[`fido2_ctap_crypto_ecdh`](#group__fido2__ctap__crypto_1ga84a36c8f375f0e191a66dcadcd889af5)`(uint8_t * out,size_t len,`[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` * pub_key,uint8_t * priv_key,size_t key_len)`            | Elliptic-curve Diffie-Hellmann.
`public int `[`fido2_ctap_crypto_get_sig`](#group__fido2__ctap__crypto_1gacad7379856417bdf6f3b98a695ea5918)`(uint8_t * hash,size_t hash_len,uint8_t * sig,size_t * sig_len,const uint8_t * key,size_t key_len)`            | Create cryptographic signature.
`public int `[`fido2_ctap_crypto_aes_enc`](#group__fido2__ctap__crypto_1gaafef7f2c2c3913bffc8e2a1bb0cab60a)`(uint8_t * out,size_t * out_len,uint8_t * in,size_t in_len,const uint8_t * key,size_t key_len)`            | Encrypt data using AES-256-CBC.
`public int `[`fido2_ctap_crypto_aes_dec`](#group__fido2__ctap__crypto_1ga900731ebbcd60ba176bae897e8cced94)`(uint8_t * out,size_t * out_len,uint8_t * in,size_t in_len,const uint8_t * key,size_t key_len)`            | Decrypt data using AES-256-CBC.
`public int `[`fido2_ctap_crypto_aes_ccm_enc`](#group__fido2__ctap__crypto_1ga91f071ba3d72098bef6b0c922cd7a35b)`(uint8_t * out,size_t out_len,const uint8_t * in,size_t in_len,uint8_t * auth_data,size_t auth_data_len,uint8_t mac_len,uint8_t length_encoding,const uint8_t * nonce,size_t nonce_len,const uint8_t * key,size_t key_len)`            | Encrypt data using AES-128-CCM.
`public int `[`fido2_ctap_crypto_aes_ccm_dec`](#group__fido2__ctap__crypto_1ga69ea8b20cd91b61fd571525872954968)`(uint8_t * out,size_t out_len,const uint8_t * in,size_t in_len,uint8_t * auth_data,size_t auth_data_len,uint8_t mac_len,uint8_t length_encoding,const uint8_t * nonce,size_t nonce_len,const uint8_t * key,size_t key_len)`            | Encrypt data using AES-128-CCM.
`struct `[`ctap_crypto_pub_key_t`](#structctap__crypto__pub__key__t) | Elliptic curve public key.
`struct `[`ctap_crypto_key_agreement_key_t`](#structctap__crypto__key__agreement__key__t) | Key agreement key.

## Members

#### `define `[`CTAP_CRYPTO_KEY_SIZE`](#group__fido2__ctap__crypto_1ga8bef3f3fee26c70308a414fb343700fe) 

Size in bytes of cryptographic keys used.

#### `define `[`CTAP_CRYPTO_ES256_DER_MAX_SIZE`](#group__fido2__ctap__crypto_1ga1eb3056a137267d13a58ed2111c35909) 

Max size of ES256 signature in ASN.1 DER format.

#### `public int `[`fido2_ctap_crypto_init`](#group__fido2__ctap__crypto_1gaf35e14b9831ad0dfe03846fd85d73a13)`(void)` 

Initialize crypto helper.

Initializes crypto libs and creates key_agreement key pair

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_prng`](#group__fido2__ctap__crypto_1ga71473e62cc7e33ec877f818d837ca70a)`(uint8_t * buf,size_t len)` 

Wrapper function for [random_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__random_1ga96ef972fa09ff461234522b64a686630).

#### Parameters
* `buf` buffer to hold random bytes 

* `len` length of `buf`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_sha256_init`](#group__fido2__ctap__crypto_1gad9b932fd1f13bf028b9f1f4c8c77ce29)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx)` 

Wrapper function for [sha256_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaa139dff5368e7abe4bd6ce8ec412a825).

#### Parameters
* `ctx` sha256_context_t handle to init

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_sha256_update`](#group__fido2__ctap__crypto_1ga72820c2b9039f015a583325795ccd4ce)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,const void * data,size_t len)` 

Wrapper function for [sha256_update](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga2d0ca6d5d14400a51700a52448baacb2).

#### Parameters
* `ctx` sha256_context_t handle to use 

* `data` Input data 

* `len` Length of `data`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_sha256_final`](#group__fido2__ctap__crypto_1gaef051bf2e64166fc81842dfb66c96891)`(`[`sha256_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gaef0579c8c986712533a9a972feca7d92)` * ctx,void * digest)` 

Wrapper for [sha256_final](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga68fa67df986540bc7da102fa03e2e591).

#### Parameters
* `ctx` sha256_context_t handle to use 

* `digest` resulting digest, this is the hash of all the bytes

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_sha256`](#group__fido2__ctap__crypto_1ga357f03ce4c99fec875e3b51e933f435b)`(const void * data,size_t len,void * digest)` 

Wrapper function for [sha256](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gad1360f15a220ecf3b6a2222a73875b3c).

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of `data`

* `digest` optional pointer to an array for the result, length must be SHA256_DIGEST_LENGTH

discards the pointer returned by [sha256](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1gad1360f15a220ecf3b6a2222a73875b3c)

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_hmac_sha256_init`](#group__fido2__ctap__crypto_1gac5ecbe32721647c878e388472fd06034)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * key,size_t key_length)` 

Wrapper function for [hmac_sha256_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga921d7dcce661d2f8bbd825a19a76e620).

#### Parameters
* `ctx` [hmac_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t) handle to use 

* `key` key used in the hmac-sha256 computation 

* `key_length` length of `key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_hmac_sha256_update`](#group__fido2__ctap__crypto_1ga8679ef81bb4aadae81bad4690caff367)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,const void * data,size_t len)` 

Wrapper function for [hmac_sha256_update](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga89999741ee7d8969192fcf724ef801d1).

#### Parameters
* `ctx` [hmac_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t) handle to use 

* `data` pointer to the buffer to generate hash from 

* `len` length of `data`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_hmac_sha256_final`](#group__fido2__ctap__crypto_1ga911472ab100f1e3758d8d723335be967)`(`[`hmac_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t)` * ctx,void * digest)` 

Wrapper function for [hmac_sha256_final](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga897c495b2203768ca17a7622086e16b8).

#### Parameters
* `ctx` [hmac_context_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha256.md#structhmac__context__t) handle to use 

* `digest` the computed hmac-sha256, length MUST be SHA256_DIGEST_LENGTH

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_hmac_sha256`](#group__fido2__ctap__crypto_1ga96295661577c4a7ad5253d97a5f43321)`(const void * key,size_t key_length,const void * data,size_t len,void * digest)` 

Wrapper function for [hmac_sha256](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga153aefd72bd890488cfefe6eebd921a6).

#### Parameters
* `key` key used in the hmac-sha256 computation 

* `key_length` length of `key`

* `data` pointer to the buffer to generate the hmac-sha256 

* `len` length of `data`

* `digest` the computed hmac-sha256, length MUST be SHA256_DIGEST_LENGTH

discards the pointer returned by [hmac_sha256](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__hashes__sha256_1ga153aefd72bd890488cfefe6eebd921a6)

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_gen_keypair`](#group__fido2__ctap__crypto_1ga2f0c06b44100d315458731a51421a2e6)`(`[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` * pub_key,uint8_t * priv_key,size_t len)` 

Generate cryptographic key pair.

#### Parameters
* `pub_key` public key buffer 

* `priv_key` private key buffer 

* `len` length of `priv_key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_ecdh`](#group__fido2__ctap__crypto_1ga84a36c8f375f0e191a66dcadcd889af5)`(uint8_t * out,size_t len,`[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` * pub_key,uint8_t * priv_key,size_t key_len)` 

Elliptic-curve Diffie-Hellmann.

#### Parameters
* `out` shared secret buffer 

* `len` length of `out`

* `pub_key` public key of other party 

* `priv_key` private key 

* `key_len` length of `priv_key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_get_sig`](#group__fido2__ctap__crypto_1gacad7379856417bdf6f3b98a695ea5918)`(uint8_t * hash,size_t hash_len,uint8_t * sig,size_t * sig_len,const uint8_t * key,size_t key_len)` 

Create cryptographic signature.

#### Parameters
* `hash` Hash to be signed 

* `hash_len` length of `hash`

* `sig` signature buffer 

* `sig_len` length of `sig`

* `key` private key to use for signature 

* `key_len` length of `key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_aes_enc`](#group__fido2__ctap__crypto_1gaafef7f2c2c3913bffc8e2a1bb0cab60a)`(uint8_t * out,size_t * out_len,uint8_t * in,size_t in_len,const uint8_t * key,size_t key_len)` 

Encrypt data using AES-256-CBC.

#### Parameters
* `out` encrypted data 

* `out_len` length of `out`

* `in` data to be encrypted 

* `in_len` length of `in`

* `key` symmetric key to use for encryption 

* `key_len` length of `key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_aes_dec`](#group__fido2__ctap__crypto_1ga900731ebbcd60ba176bae897e8cced94)`(uint8_t * out,size_t * out_len,uint8_t * in,size_t in_len,const uint8_t * key,size_t key_len)` 

Decrypt data using AES-256-CBC.

#### Parameters
* `out` decrypted data 

* `out_len` length of `out`

* `in` encrypted data 

* `in_len` len of `in`

* `key` symmetric key to use for decryption 

* `key_len` length of `key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_aes_ccm_enc`](#group__fido2__ctap__crypto_1ga91f071ba3d72098bef6b0c922cd7a35b)`(uint8_t * out,size_t out_len,const uint8_t * in,size_t in_len,uint8_t * auth_data,size_t auth_data_len,uint8_t mac_len,uint8_t length_encoding,const uint8_t * nonce,size_t nonce_len,const uint8_t * key,size_t key_len)` 

Encrypt data using AES-128-CCM.

#### Parameters
* `out` encrypted data 

* `out_len` length of `out`

* `in` data to be encrypted 

* `in_len` length of `in`

* `auth_data` additional data to authenticate in MAC 

* `auth_data_len` length of `auth_data`

* `mac_len` length of appended MAC 

* `length_encoding` max supported length of plaintext 

* `nonce` nonce for ctr mode encryption 

* `nonce_len` length of `nonce`

* `key` symmetric key to use for encryption 

* `key_len` length of `key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

#### `public int `[`fido2_ctap_crypto_aes_ccm_dec`](#group__fido2__ctap__crypto_1ga69ea8b20cd91b61fd571525872954968)`(uint8_t * out,size_t out_len,const uint8_t * in,size_t in_len,uint8_t * auth_data,size_t auth_data_len,uint8_t mac_len,uint8_t length_encoding,const uint8_t * nonce,size_t nonce_len,const uint8_t * key,size_t key_len)` 

Encrypt data using AES-128-CCM.

#### Parameters
* `out` encrypted data 

* `out_len` length of `out`

* `in` data to be encrypted 

* `in_len` length of `in`

* `auth_data` additional data to authenticate in MAC 

* `auth_data_len` length of `auth_data`

* `mac_len` length of appended MAC 

* `length_encoding` max supported length of plaintext 

* `nonce` nonce for ctr mode encryption 

* `nonce_len` length of `nonce`

* `key` symmetric key to use for encryption 

* `key_len` length of `key`

#### Returns
[ctap_status_codes_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__fido2__ctap_1ga8fc67116a4d14ab7c9ff10a71b1ad95c)

# struct `ctap_crypto_pub_key_t` 

Elliptic curve public key.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`x`](#structctap__crypto__pub__key__t_1ac7024c16844e182f74d37ca875638aad) | x coordinate of curve point
`public uint8_t `[`y`](#structctap__crypto__pub__key__t_1a03d5c7b9fecf0679a3f9166f40a4cba2) | y coordinate of curve point

## Members

#### `public uint8_t `[`x`](#structctap__crypto__pub__key__t_1ac7024c16844e182f74d37ca875638aad) 

x coordinate of curve point

#### `public uint8_t `[`y`](#structctap__crypto__pub__key__t_1a03d5c7b9fecf0679a3f9166f40a4cba2) 

y coordinate of curve point

# struct `ctap_crypto_key_agreement_key_t` 

Key agreement key.

CTAP specification (version 20190130) section 5.5.4

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` `[`pub`](#structctap__crypto__key__agreement__key__t_1a2f284feae29b1f8a6c5e3d644d0cd00f) | public key
`public uint8_t `[`priv`](#structctap__crypto__key__agreement__key__t_1a3876ab6bee2bd21e73585f6c0e9d9942) | private key

## Members

#### `public `[`ctap_crypto_pub_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap_crypto.md#structctap__crypto__pub__key__t)` `[`pub`](#structctap__crypto__key__agreement__key__t_1a2f284feae29b1f8a6c5e3d644d0cd00f) 

public key

#### `public uint8_t `[`priv`](#structctap__crypto__key__agreement__key__t_1a3876ab6bee2bd21e73585f6c0e9d9942) 

private key

