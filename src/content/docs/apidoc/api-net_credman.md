---
title: api-net_credman.md
description: api-net_credman.md
---
# group `net_credman` 

Credentials management module for (D)TLS.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CREDMAN_TAG_EMPTY`](#group__net__credman_1gaef3b87d09d3032ab13e653756f34da92)            | Used to signal empty/no tag.
`enum `[`credman_type_t`](#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)            | Credential types.
`enum `[`@349`](#group__net__credman_1gad559b3ed307be626eacea8b56942de61)            | Return values.
`public int `[`credman_add`](#group__net__credman_1ga541badb0086366236a741db3f50eb3dc)`(const `[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * credential)`            | Adds a credential to the credential pool.
`public int `[`credman_get`](#group__net__credman_1gadbdbd3e379c865a2f80c1cd2f74f32f9)`(`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * credential,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` type)`            | Gets a credential from credential pool.
`public void `[`credman_delete`](#group__net__credman_1ga0ccd41d107b04d4433f155edb38b210c)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` type)`            | Delete a credential from the credential pool.
`public int `[`credman_get_used_count`](#group__net__credman_1ga4c9992eb99b55ef5614963219359b9d8)`(void)`            | Gets the number of credentials currently in the credential pool.
`public int `[`credman_load_public_key`](#group__net__credman_1ga03a58deeb373eb362d5437f3ed2e96dc)`(const void * buf,size_t buf_len,`[`ecdsa_public_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__public__key__t)` * out)`            | Load a public key from a buffer, as a `SubjectPublicKeyInfo` sequence, according to RFC5280.
`public int `[`credman_load_private_key`](#group__net__credman_1ga5a976d4911f3265d9034bad5a530fd2f)`(const void * buf,size_t buf_len,`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * cred)`            | Load a private key from a buffer, as a `OneAsymmetricKey` sequence, according to RFC5958.
`public int `[`credman_load_private_ecc_key`](#group__net__credman_1ga728195d09a083b5c8469904acb337efe)`(const void * buf,size_t buf_len,`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * cred)`            | Load an ECC private key from a buffer, as an `ECPrivateKey` sequence, according to RFC5915.
`public void `[`credman_reset`](#group__net__credman_1gaf0d686f5228e8440582d351b73aab2c2)`(void)`            | Empties the credential pool.
`struct `[`credman_buffer_t`](#structcredman__buffer__t) | Buffer of the credential.
`struct `[`psk_params_t`](#structpsk__params__t) | PSK parameters.
`struct `[`ecdsa_public_key_t`](#structecdsa__public__key__t) | ECDSA public keys.
`struct `[`ecdsa_params_t`](#structecdsa__params__t) | ECDSA parameters.
`struct `[`credman_credential_t`](#structcredman__credential__t) | Credential information.

## Members

#### `define `[`CREDMAN_TAG_EMPTY`](#group__net__credman_1gaef3b87d09d3032ab13e653756f34da92) 

Used to signal empty/no tag.

#### `enum `[`credman_type_t`](#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CREDMAN_TYPE_EMPTY            | Empty type.
CREDMAN_TYPE_PSK            | PSK credential type.
CREDMAN_TYPE_ECDSA            | ECDSA credential type.

Credential types.

#### `enum `[`@349`](#group__net__credman_1gad559b3ed307be626eacea8b56942de61) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CREDMAN_OK            | No error.
CREDMAN_EXIST            | Credential already exist in system pool.
CREDMAN_NO_SPACE            | No space in system pool for new credential.
CREDMAN_NOT_FOUND            | Credential not found in the system pool.
CREDMAN_INVALID            | Invalid input parameter(s)
CREDMAN_TYPE_UNKNOWN            | Unknown credential type.
CREDMAN_ERROR            | Other errors.

Return values.

#### `public int `[`credman_add`](#group__net__credman_1ga541badb0086366236a741db3f50eb3dc)`(const `[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * credential)` 

Adds a credential to the credential pool.

#### Parameters
* `credential` Credential to add.

#### Returns
CREDMAN_OK on success 

#### Returns
CREDMAN_EXIST if credential of `tag` and `type` already exist 

#### Returns
CREDMAN_NO_SPACE if credential pool is full 

#### Returns
CREDMAN_TYPE_UNKNOWN if `credential` has unknown [credman_credential_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1a528287ec61d5a9eb2dbae51470102701)

#### Returns
CREDMAN_INVALID if `credential` has 

#### Returns
CREDMAN_INVALID [credman_credential_t::tag](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1ab1ec708944c4e18e1def2c4691bb3cf4) with the value of CREDMAN_TAG_EMPTY 

#### Returns
CREDMAN_INVALID [credman_credential_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1a528287ec61d5a9eb2dbae51470102701) with the value of CREDMAN_TYPE_EMPTY 

#### Returns
CREDMAN_INVALID [credman_credential_t::params](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1a88361bff5ce2f9f08e2c09f8ec91cfa5) with invalid credential parameters i.e. the key points to NULL or has a length of 0 

#### Returns
CREDMAN_ERROR on other errors

#### `public int `[`credman_get`](#group__net__credman_1gadbdbd3e379c865a2f80c1cd2f74f32f9)`(`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * credential,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` type)` 

Gets a credential from credential pool.

#### Parameters
* `credential` Found credential 

* `tag` Tag of credential to get 

* `type` Type of credential to get

#### Returns
CREDMAN_OK on success 

#### Returns
CREDMAN_NOT_FOUND if no credential with `tag` and `type` found 

#### Returns
CREDMAN_ERROR on other errors

#### `public void `[`credman_delete`](#group__net__credman_1ga0ccd41d107b04d4433f155edb38b210c)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag,`[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` type)` 

Delete a credential from the credential pool.

Does nothing if credential with [credman_credential_t::tag](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1ab1ec708944c4e18e1def2c4691bb3cf4)`tag` and [credman_credential_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t_1a528287ec61d5a9eb2dbae51470102701)`type` is not found.

#### Parameters
* `tag` Tag of the credential 

* `type` Type of the credential

#### `public int `[`credman_get_used_count`](#group__net__credman_1ga4c9992eb99b55ef5614963219359b9d8)`(void)` 

Gets the number of credentials currently in the credential pool.

Maximum number of allowed credentials is defined by CONFIG_CREDMAN_MAX_CREDENTIALS

#### Returns
number of credentials currently in the credential pool

#### `public int `[`credman_load_public_key`](#group__net__credman_1ga03a58deeb373eb362d5437f3ed2e96dc)`(const void * buf,size_t buf_len,`[`ecdsa_public_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__public__key__t)` * out)` 

Load a public key from a buffer, as a `SubjectPublicKeyInfo` sequence, according to RFC5280.

The key should be encoded in DER format.

`buf != NULL && out != NULL`.

To use this functionality include the module `credman_load`. Credman only supports ECDSA for now, so [RFC5480](https://tools.ietf.org/html/rfc5480) applies.

**This feature is experimental!**
 This API is considered experimental and will probably change without notice!

**See also**: [https://tools.ietf.org/html/rfc5280#section-4.1](https://tools.ietf.org/html/rfc5280#section-4.1)

#### Parameters
* `buf` Buffer holding the encoded public key 

* `buf_len` Length of `buf`

* `out` ECDSA public key to populate

#### Parameters
* `CREDMAN_OK` on success 

* `CREDMAN_INVALID` if the key is not valid

#### `public int `[`credman_load_private_key`](#group__net__credman_1ga5a976d4911f3265d9034bad5a530fd2f)`(const void * buf,size_t buf_len,`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * cred)` 

Load a private key from a buffer, as a `OneAsymmetricKey` sequence, according to RFC5958.

This is compatible with the previous version PKCS#8 (defined in RFC5208). If the optional respective public key is present, it will be loaded as well. The key should be encoded in DER format.

`buf != NULL && cred != NULL`

To use this functionality include the module `credman_load`. Credman only supports ECDSA for now.

**This feature is experimental!**
 This API is considered experimental and will probably change without notice!

**See also**: [https://tools.ietf.org/html/rfc5958#section-2](https://tools.ietf.org/html/rfc5958#section-2)

#### Parameters
* `buf` Buffer holding the encoded private key 

* `buf_len` Length of `buf`

* `cred` Credential to populate

#### Parameters
* `CREDMAN_OK` on success 

* `CREDMAN_INVALID` if the key is not valid

#### `public int `[`credman_load_private_ecc_key`](#group__net__credman_1ga728195d09a083b5c8469904acb337efe)`(const void * buf,size_t buf_len,`[`credman_credential_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__credential__t)` * cred)` 

Load an ECC private key from a buffer, as an `ECPrivateKey` sequence, according to RFC5915.

If the optional respective public key is present, it will be loaded as well. The key should be encoded in DER format.

`buf != NULL && cred != NULL`

To use this functionality include the module `credman_load`.

**This feature is experimental!**
 This API is considered experimental and will probably change without notice!

**See also**: [https://tools.ietf.org/html/rfc5915#section-3](https://tools.ietf.org/html/rfc5915#section-3)

#### Parameters
* `buf` Buffer holding the encoded private key 

* `buf_len` Length of `buf`

* `cred` Credential to populate

#### Parameters
* `CREDMAN_OK` on success 

* `CREDMAN_INVALID` if the key is not valid

#### `public void `[`credman_reset`](#group__net__credman_1gaf0d686f5228e8440582d351b73aab2c2)`(void)` 

Empties the credential pool.

# struct `credman_buffer_t` 

Buffer of the credential.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const void * `[`s`](#structcredman__buffer__t_1add74718c47c6ddec822985b8c6e00dd7) | Pointer to the buffer.
`public size_t `[`len`](#structcredman__buffer__t_1a3f861d8e40bf2f8f1a796f5307d707cc) | Length of [credman_buffer_t::s](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t_1add74718c47c6ddec822985b8c6e00dd7).

## Members

#### `public const void * `[`s`](#structcredman__buffer__t_1add74718c47c6ddec822985b8c6e00dd7) 

Pointer to the buffer.

#### `public size_t `[`len`](#structcredman__buffer__t_1a3f861d8e40bf2f8f1a796f5307d707cc) 

Length of [credman_buffer_t::s](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t_1add74718c47c6ddec822985b8c6e00dd7).

# struct `psk_params_t` 

PSK parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`credman_buffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t)` `[`key`](#structpsk__params__t_1a5d7b9ebf1223adba260a2f05f66a5983) | Key buffer.
`public `[`credman_buffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t)` `[`id`](#structpsk__params__t_1ae634470447942a1f92e8eec83c2ab1ea) | ID buffer.
`public `[`credman_buffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t)` `[`hint`](#structpsk__params__t_1a2995108ed4d4a1a50651d6af4d609ef0) | Hint buffer.

## Members

#### `public `[`credman_buffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t)` `[`key`](#structpsk__params__t_1a5d7b9ebf1223adba260a2f05f66a5983) 

Key buffer.

#### `public `[`credman_buffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t)` `[`id`](#structpsk__params__t_1ae634470447942a1f92e8eec83c2ab1ea) 

ID buffer.

#### `public `[`credman_buffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structcredman__buffer__t)` `[`hint`](#structpsk__params__t_1a2995108ed4d4a1a50651d6af4d609ef0) 

Hint buffer.

# struct `ecdsa_public_key_t` 

ECDSA public keys.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const void * `[`x`](#structecdsa__public__key__t_1a9abac4f6d2f9a41d54aecea731284dd4) | X part of the public key.
`public const void * `[`y`](#structecdsa__public__key__t_1acc416a62a8a43e689f618e7c3b264f3a) | Y part of the public key.

## Members

#### `public const void * `[`x`](#structecdsa__public__key__t_1a9abac4f6d2f9a41d54aecea731284dd4) 

X part of the public key.

#### `public const void * `[`y`](#structecdsa__public__key__t_1acc416a62a8a43e689f618e7c3b264f3a) 

Y part of the public key.

# struct `ecdsa_params_t` 

ECDSA parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const void * `[`private_key`](#structecdsa__params__t_1a0b6110670b8f5088ea1865eed45a2cde) | Pointer to the private key.
`public `[`ecdsa_public_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__public__key__t)` `[`public_key`](#structecdsa__params__t_1aa72f48d1e19c122a01e9949d96799f3d) | Public key.
`public `[`ecdsa_public_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__public__key__t)` * `[`client_keys`](#structecdsa__params__t_1adb40342abba8e9efe616e34262011c71) | Array of clients public keys.
`public size_t `[`client_keys_size`](#structecdsa__params__t_1a972b9e5d0718defaf253c2d1d4e64085) | Size of ecdsa_params_t::clients_keys.

## Members

#### `public const void * `[`private_key`](#structecdsa__params__t_1a0b6110670b8f5088ea1865eed45a2cde) 

Pointer to the private key.

#### `public `[`ecdsa_public_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__public__key__t)` `[`public_key`](#structecdsa__params__t_1aa72f48d1e19c122a01e9949d96799f3d) 

Public key.

#### `public `[`ecdsa_public_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__public__key__t)` * `[`client_keys`](#structecdsa__params__t_1adb40342abba8e9efe616e34262011c71) 

Array of clients public keys.

#### `public size_t `[`client_keys_size`](#structecdsa__params__t_1a972b9e5d0718defaf253c2d1d4e64085) 

Size of ecdsa_params_t::clients_keys.

# struct `credman_credential_t` 

Credential information.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` `[`type`](#structcredman__credential__t_1a528287ec61d5a9eb2dbae51470102701) | Type of the credential.
`public `[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` `[`tag`](#structcredman__credential__t_1ab1ec708944c4e18e1def2c4691bb3cf4) | Tag of the credential.
`public `[`psk_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structpsk__params__t)` `[`psk`](#structcredman__credential__t_1a4d1a42b49220f43fae2bfe0324e5b32d) | PSK credential parameters.
`public `[`ecdsa_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__params__t)` `[`ecdsa`](#structcredman__credential__t_1a6c2d6e0a94fde2179e7792272f1e9cc1) | ECDSA credential parameters.
`public union credman_credential_t::@350 `[`params`](#structcredman__credential__t_1a88361bff5ce2f9f08e2c09f8ec91cfa5) | Credential parameters.

## Members

#### `public `[`credman_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga9b3a1809012813b046937832b80a4ffd)` `[`type`](#structcredman__credential__t_1a528287ec61d5a9eb2dbae51470102701) 

Type of the credential.

#### `public `[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` `[`tag`](#structcredman__credential__t_1ab1ec708944c4e18e1def2c4691bb3cf4) 

Tag of the credential.

#### `public `[`psk_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structpsk__params__t)` `[`psk`](#structcredman__credential__t_1a4d1a42b49220f43fae2bfe0324e5b32d) 

PSK credential parameters.

#### `public `[`ecdsa_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_credman.md#structecdsa__params__t)` `[`ecdsa`](#structcredman__credential__t_1a6c2d6e0a94fde2179e7792272f1e9cc1) 

ECDSA credential parameters.

#### `public union credman_credential_t::@350 `[`params`](#structcredman__credential__t_1a88361bff5ce2f9f08e2c09f8ec91cfa5) 

Credential parameters.

