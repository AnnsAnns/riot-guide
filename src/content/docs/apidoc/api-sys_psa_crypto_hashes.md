---
title: api-sys_psa_crypto_hashes.md
description: api-sys_psa_crypto_hashes.md
---
# group `sys_psa_crypto_hashes` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_md5_setup`](#group__sys__psa__crypto__hashes_1ga4366cf62c713d6ab5dff227fa8bc97e4)`(psa_hashes_md5_ctx_t * ctx)`            | Low level wrapper function to call a driver for an MD5 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_md5_update`](#group__sys__psa__crypto__hashes_1gad2c8cbd9050a944918f42bca75766961)`(psa_hashes_md5_ctx_t * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an MD5 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_md5_finish`](#group__sys__psa__crypto__hashes_1gae4c9c7576ea2b7a7c74484586f1c230e)`(psa_hashes_md5_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an MD5 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha1_setup`](#group__sys__psa__crypto__hashes_1gaea707c43245caddccc83c0f2994c45ea)`(`[`psa_hashes_sha1_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1afe6b1b182eb4e9012881d1f56f106b1a)` * ctx)`            | Low level wrapper function to call a driver for an SHA1 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha1_update`](#group__sys__psa__crypto__hashes_1ga07202088619d337ec076372034f5450b)`(`[`psa_hashes_sha1_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1afe6b1b182eb4e9012881d1f56f106b1a)` * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an SHA1 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha1_finish`](#group__sys__psa__crypto__hashes_1ga2ac0655a5a6b14b3ecfccd76642ff23d)`(`[`psa_hashes_sha1_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1afe6b1b182eb4e9012881d1f56f106b1a)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an SHA1 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha224_setup`](#group__sys__psa__crypto__hashes_1ga024b9ab794a69491da75cf34ce2644ca)`(`[`psa_hashes_sha224_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a6fe7e0b5a8a32176b0eea49b578e677f)` * ctx)`            | Low level wrapper function to call a driver for an SHA224 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha224_update`](#group__sys__psa__crypto__hashes_1gaad74435783c9a639919d483882962341)`(`[`psa_hashes_sha224_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a6fe7e0b5a8a32176b0eea49b578e677f)` * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an SHA224 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha224_finish`](#group__sys__psa__crypto__hashes_1ga93d6be0fe255b77268355a7a4717e74c)`(`[`psa_hashes_sha224_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a6fe7e0b5a8a32176b0eea49b578e677f)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an SHA224 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha256_setup`](#group__sys__psa__crypto__hashes_1ga4b665e4de646c4f36cb630f7737306cb)`(`[`psa_hashes_sha256_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a83a959f81cb5d96f5b7a7b20ffc4af67)` * ctx)`            | Low level wrapper function to call a driver for an SHA256 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha256_update`](#group__sys__psa__crypto__hashes_1ga283560cc7921b17cd87754e5a0483b3c)`(`[`psa_hashes_sha256_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a83a959f81cb5d96f5b7a7b20ffc4af67)` * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an SHA256 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha256_finish`](#group__sys__psa__crypto__hashes_1ga31288036411969d61dba759e504ae94c)`(`[`psa_hashes_sha256_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a83a959f81cb5d96f5b7a7b20ffc4af67)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an SHA256 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha384_setup`](#group__sys__psa__crypto__hashes_1ga874a826623f6f6f9b86b0d63098fd6cc)`(psa_hashes_sha384_ctx_t * ctx)`            | Low level wrapper function to call a driver for an SHA384 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha384_update`](#group__sys__psa__crypto__hashes_1ga6bd4af7e25c7eaf27be5616407ddba9e)`(psa_hashes_sha384_ctx_t * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an SHA384 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha384_finish`](#group__sys__psa__crypto__hashes_1ga00f2c30b0317b30bdd5022be7fc13503)`(psa_hashes_sha384_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an SHA384 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_setup`](#group__sys__psa__crypto__hashes_1ga408d4af3e2bcba0dc789703d170c7e8f)`(`[`psa_hashes_sha512_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1ad8e800275d755b463b26246536452ee9)` * ctx)`            | Low level wrapper function to call a driver for an SHA512 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_update`](#group__sys__psa__crypto__hashes_1ga706f41ea6fe21283edb142799187b91d)`(`[`psa_hashes_sha512_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1ad8e800275d755b463b26246536452ee9)` * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an SHA512 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_finish`](#group__sys__psa__crypto__hashes_1ga1b6671c6b8acff96aa76b895b73fc6ae)`(`[`psa_hashes_sha512_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1ad8e800275d755b463b26246536452ee9)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an SHA512 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_224_setup`](#group__sys__psa__crypto__hashes_1ga7bbaad9f74c76f3a7c21d463c28e32f8)`(psa_hashes_sha512_224_ctx_t * ctx)`            | Low level wrapper function to call a driver for an SHA512/224 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_224_update`](#group__sys__psa__crypto__hashes_1ga4bb9dbe934bc77f186377224b107ca39)`(psa_hashes_sha512_224_ctx_t * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an SHA512/224 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_224_finish`](#group__sys__psa__crypto__hashes_1gadf87c10182f367a804f5d04d710c7289)`(psa_hashes_sha512_224_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an SHA512/224 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_256_setup`](#group__sys__psa__crypto__hashes_1gaa5d391d2f2b5920e81b1d703b754dc15)`(psa_hashes_sha512_256_ctx_t * ctx)`            | Low level wrapper function to call a driver for an SHA512/256 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_256_update`](#group__sys__psa__crypto__hashes_1gae89cd286ae649ad100c97e257e0c5a30)`(psa_hashes_sha512_256_ctx_t * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for an SHA512/256 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_256_finish`](#group__sys__psa__crypto__hashes_1ga8b944ba3bcdf4054283ec0e9f901acec)`(psa_hashes_sha512_256_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)`            | Low level wrapper function to call a driver for an SHA512/256 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_256_update`](#group__sys__psa__crypto__hashes_1ga165b4cda033b5f41d63ee0aec85f3d8f)`(psa_hashes_sha3_ctx_t * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for a general SHA3 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_256_setup`](#group__sys__psa__crypto__hashes_1gab2624c2af62b996b41978985abadf6e6)`(psa_hashes_sha3_ctx_t * ctx)`            | Low level wrapper function to call a driver for a SHA3-256 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_256_finish`](#group__sys__psa__crypto__hashes_1ga78e263359c866b6505b30a6abb6792a7)`(psa_hashes_sha3_ctx_t * ctx,uint8_t * hash)`            | Low level wrapper function to call a driver for a SHA3-256 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_384_update`](#group__sys__psa__crypto__hashes_1ga93e30c587b7e2d414b873ad33130f561)`(psa_hashes_sha3_ctx_t * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for a general SHA3 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_384_setup`](#group__sys__psa__crypto__hashes_1ga71a475b533500a2f8c6e22ea184b2b19)`(psa_hashes_sha3_ctx_t * ctx)`            | Low level wrapper function to call a driver for a SHA3-384 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_384_finish`](#group__sys__psa__crypto__hashes_1ga914bf097024df3314adcc373b10ff098)`(psa_hashes_sha3_ctx_t * ctx,uint8_t * hash)`            | Low level wrapper function to call a driver for a SHA3-384 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_512_update`](#group__sys__psa__crypto__hashes_1ga74754c13c2d3d44ece887d4680e6397f)`(psa_hashes_sha3_ctx_t * ctx,const uint8_t * input,size_t input_length)`            | Low level wrapper function to call a driver for a general SHA3 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_512_setup`](#group__sys__psa__crypto__hashes_1ga0e39da94633ebb2612658754fc9481b8)`(psa_hashes_sha3_ctx_t * ctx)`            | Low level wrapper function to call a driver for a SHA3-512 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)
`public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_512_finish`](#group__sys__psa__crypto__hashes_1ga86b8ab419fb81ed08adaa0da645bc67f)`(psa_hashes_sha3_ctx_t * ctx,uint8_t * hash)`            | Low level wrapper function to call a driver for a SHA3-512 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

## Members

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_md5_setup`](#group__sys__psa__crypto__hashes_1ga4366cf62c713d6ab5dff227fa8bc97e4)`(psa_hashes_md5_ctx_t * ctx)` 

Low level wrapper function to call a driver for an MD5 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
[psa_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_md5_update`](#group__sys__psa__crypto__hashes_1gad2c8cbd9050a944918f42bca75766961)`(psa_hashes_md5_ctx_t * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an MD5 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_md5_finish`](#group__sys__psa__crypto__hashes_1gae4c9c7576ea2b7a7c74484586f1c230e)`(psa_hashes_md5_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an MD5 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha1_setup`](#group__sys__psa__crypto__hashes_1gaea707c43245caddccc83c0f2994c45ea)`(`[`psa_hashes_sha1_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1afe6b1b182eb4e9012881d1f56f106b1a)` * ctx)` 

Low level wrapper function to call a driver for an SHA1 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha1_update`](#group__sys__psa__crypto__hashes_1ga07202088619d337ec076372034f5450b)`(`[`psa_hashes_sha1_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1afe6b1b182eb4e9012881d1f56f106b1a)` * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an SHA1 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha1_finish`](#group__sys__psa__crypto__hashes_1ga2ac0655a5a6b14b3ecfccd76642ff23d)`(`[`psa_hashes_sha1_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1afe6b1b182eb4e9012881d1f56f106b1a)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an SHA1 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha224_setup`](#group__sys__psa__crypto__hashes_1ga024b9ab794a69491da75cf34ce2644ca)`(`[`psa_hashes_sha224_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a6fe7e0b5a8a32176b0eea49b578e677f)` * ctx)` 

Low level wrapper function to call a driver for an SHA224 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha224_update`](#group__sys__psa__crypto__hashes_1gaad74435783c9a639919d483882962341)`(`[`psa_hashes_sha224_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a6fe7e0b5a8a32176b0eea49b578e677f)` * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an SHA224 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha224_finish`](#group__sys__psa__crypto__hashes_1ga93d6be0fe255b77268355a7a4717e74c)`(`[`psa_hashes_sha224_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a6fe7e0b5a8a32176b0eea49b578e677f)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an SHA224 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha256_setup`](#group__sys__psa__crypto__hashes_1ga4b665e4de646c4f36cb630f7737306cb)`(`[`psa_hashes_sha256_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a83a959f81cb5d96f5b7a7b20ffc4af67)` * ctx)` 

Low level wrapper function to call a driver for an SHA256 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha256_update`](#group__sys__psa__crypto__hashes_1ga283560cc7921b17cd87754e5a0483b3c)`(`[`psa_hashes_sha256_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a83a959f81cb5d96f5b7a7b20ffc4af67)` * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an SHA256 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha256_finish`](#group__sys__psa__crypto__hashes_1ga31288036411969d61dba759e504ae94c)`(`[`psa_hashes_sha256_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1a83a959f81cb5d96f5b7a7b20ffc4af67)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an SHA256 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha384_setup`](#group__sys__psa__crypto__hashes_1ga874a826623f6f6f9b86b0d63098fd6cc)`(psa_hashes_sha384_ctx_t * ctx)` 

Low level wrapper function to call a driver for an SHA384 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha384_update`](#group__sys__psa__crypto__hashes_1ga6bd4af7e25c7eaf27be5616407ddba9e)`(psa_hashes_sha384_ctx_t * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an SHA384 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha384_finish`](#group__sys__psa__crypto__hashes_1ga00f2c30b0317b30bdd5022be7fc13503)`(psa_hashes_sha384_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an SHA384 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_setup`](#group__sys__psa__crypto__hashes_1ga408d4af3e2bcba0dc789703d170c7e8f)`(`[`psa_hashes_sha512_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1ad8e800275d755b463b26246536452ee9)` * ctx)` 

Low level wrapper function to call a driver for an SHA512 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_update`](#group__sys__psa__crypto__hashes_1ga706f41ea6fe21283edb142799187b91d)`(`[`psa_hashes_sha512_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1ad8e800275d755b463b26246536452ee9)` * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an SHA512 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_finish`](#group__sys__psa__crypto__hashes_1ga1b6671c6b8acff96aa76b895b73fc6ae)`(`[`psa_hashes_sha512_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#psa__periph__hashes__ctx_8h_1ad8e800275d755b463b26246536452ee9)` * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an SHA512 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_224_setup`](#group__sys__psa__crypto__hashes_1ga7bbaad9f74c76f3a7c21d463c28e32f8)`(psa_hashes_sha512_224_ctx_t * ctx)` 

Low level wrapper function to call a driver for an SHA512/224 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_224_update`](#group__sys__psa__crypto__hashes_1ga4bb9dbe934bc77f186377224b107ca39)`(psa_hashes_sha512_224_ctx_t * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an SHA512/224 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_224_finish`](#group__sys__psa__crypto__hashes_1gadf87c10182f367a804f5d04d710c7289)`(psa_hashes_sha512_224_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an SHA512/224 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_256_setup`](#group__sys__psa__crypto__hashes_1gaa5d391d2f2b5920e81b1d703b754dc15)`(psa_hashes_sha512_256_ctx_t * ctx)` 

Low level wrapper function to call a driver for an SHA512/256 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_256_update`](#group__sys__psa__crypto__hashes_1gae89cd286ae649ad100c97e257e0c5a30)`(psa_hashes_sha512_256_ctx_t * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for an SHA512/256 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha512_256_finish`](#group__sys__psa__crypto__hashes_1ga8b944ba3bcdf4054283ec0e9f901acec)`(psa_hashes_sha512_256_ctx_t * ctx,uint8_t * hash,size_t hash_size,size_t * hash_length)` 

Low level wrapper function to call a driver for an SHA512/256 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

* `hash_size` 

* `hash_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_256_update`](#group__sys__psa__crypto__hashes_1ga165b4cda033b5f41d63ee0aec85f3d8f)`(psa_hashes_sha3_ctx_t * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for a general SHA3 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_256_setup`](#group__sys__psa__crypto__hashes_1gab2624c2af62b996b41978985abadf6e6)`(psa_hashes_sha3_ctx_t * ctx)` 

Low level wrapper function to call a driver for a SHA3-256 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_256_finish`](#group__sys__psa__crypto__hashes_1ga78e263359c866b6505b30a6abb6792a7)`(psa_hashes_sha3_ctx_t * ctx,uint8_t * hash)` 

Low level wrapper function to call a driver for a SHA3-256 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_384_update`](#group__sys__psa__crypto__hashes_1ga93e30c587b7e2d414b873ad33130f561)`(psa_hashes_sha3_ctx_t * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for a general SHA3 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_384_setup`](#group__sys__psa__crypto__hashes_1ga71a475b533500a2f8c6e22ea184b2b19)`(psa_hashes_sha3_ctx_t * ctx)` 

Low level wrapper function to call a driver for a SHA3-384 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_384_finish`](#group__sys__psa__crypto__hashes_1ga914bf097024df3314adcc373b10ff098)`(psa_hashes_sha3_ctx_t * ctx,uint8_t * hash)` 

Low level wrapper function to call a driver for a SHA3-384 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_512_update`](#group__sys__psa__crypto__hashes_1ga74754c13c2d3d44ece887d4680e6397f)`(psa_hashes_sha3_ctx_t * ctx,const uint8_t * input,size_t input_length)` 

Low level wrapper function to call a driver for a general SHA3 hash update See [psa_hash_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a65b16ef97d7f650899b7db4b7d1112ff)

#### Parameters
* `ctx` 

* `input` 

* `input_length` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_512_setup`](#group__sys__psa__crypto__hashes_1ga0e39da94633ebb2612658754fc9481b8)`(psa_hashes_sha3_ctx_t * ctx)` 

Low level wrapper function to call a driver for a SHA3-512 hash setup See [psa_hash_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a8d72896cf70fc4d514c5c6b978912515)

#### Parameters
* `ctx` 

#### Returns
psa_status_t

#### `public `[`psa_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto__types_8h_1a05676e70ba5c6a7565aff3c36677c1f9)` `[`psa_hashes_sha3_512_finish`](#group__sys__psa__crypto__hashes_1ga86b8ab419fb81ed08adaa0da645bc67f)`(psa_hashes_sha3_ctx_t * ctx,uint8_t * hash)` 

Low level wrapper function to call a driver for a SHA3-512 hash finish See [psa_hash_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#crypto_8h_1a4795fd06a0067b0adcd92e9627b8c97e)

#### Parameters
* `ctx` 

* `hash` 

#### Returns
psa_status_t

