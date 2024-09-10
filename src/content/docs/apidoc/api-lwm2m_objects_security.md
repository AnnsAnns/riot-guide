---
title: api-lwm2m_objects_security.md
description: api-lwm2m_objects_security.md
---
# group `lwm2m_objects_security` 

Security object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This API is considered experimental and may change in future releases without deprecation process.

This implements the LwM2M Security object as specified in the Appendix E1 of the LwM2M specification.

So far only NO_SEC, PSK (Pre-shared key) and RPK (Raw public key) modes are available.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/0-1_0.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/0-1_0.xml).

Name   |ID   |Mandatory   |Type   |Range   |Units   |Implemented
--------- | --------- | --------- | --------- | --------- | --------- | ---------
Server URI   |0   |Yes   |String   |||Yes
Bootstrap Server   |1   |Yes   |Boolean   |||Yes
Security Mode   |2   |Yes   |Integer   |0-3   ||Yes
Public Key or ID   |3   |Yes   |Opaque   |||Yes
Server Public Key   |4   |Yes   |Opaque   |||Yes
Secret Key   |5   |Yes   |Opaque   |||Yes
SMS Security Mode   |6   |No   |Integer   |0-255   ||No
SMS Binding Key Param.   |7   |No   |Opaque   |6 B   ||No
SMS Binding Secret Keys   |8   |No   |Opaque   |32-48 B   ||No
Server SMS Number   |9   |No   |String   |||No
Short Server ID   |10   |No   |Integer   |1-65535   ||Yes
Client Hold Off Time   |11   |No   |Integer   ||s   |Yes
BS Account Timeout   |12   |No   |Integer   ||s   |Yes

UsagePre-shared keys
```cpp
// assuming buffers psk_id and psk_key containing credential information
// assuming client_data is a valid lwm2m_client_data_t instance
// [...]

 // prepare instance arguments
 lwm2m_obj_security_args_t args = {
     .server_id = CONFIG_LWM2M_SERVER_SHORT_ID,
     .server_uri = CONFIG_LWM2M_SERVER_URI,
     .security_mode = LWM2M_SECURITY_MODE_PRE_SHARED_KEY,
     .pub_key_or_id = psk_id,
     .pub_key_or_id_len = sizeof(psk_id) - 1,
     .secret_key = psk_key,
     .secret_key_len = sizeof(psk_key) - 1,
     .is_bootstrap = false,
     .client_hold_off_time = 5,
     .bootstrap_account_timeout = 0
 };

 // initialize the security object and get handle
 lwm2m_object_t *sec_obj = lwm2m_object_security_init(&client_data);

 // instantiate a new security object with instance ID 1
 int res = lwm2m_object_security_instance_create(&args, 1);
```

Raw public keysTo use this security mode the following keys are required:

* server public key (`SubjectPublicKeyInfo` DER encoded, according to RFC5280)

* own public (`SubjectPublicKeyInfo` DER encoded) and private (as a `ECPrivateKey` DER encoded sequence, according to RFC5915)keys. See below on how they can be generated.

It is possible that you may need to increase [CONFIG_DTLS_HANDSHAKE_BUFSIZE_EXP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__conf_1ga0cbc6d1ac3648c3e4b6803d0272535ef) when using RPK mode.

```cpp
// assuming buffers rpk_pub, rpk_priv, and server_rpk_pub containing the elliptic curve keys
// assuming client_data is a valid lwm2m_client_data_t instance
// [...]

 // prepare instance arguments
 lwm2m_obj_security_args_t args = {
     .server_id = CONFIG_LWM2M_SERVER_SHORT_ID,
     .server_uri = CONFIG_LWM2M_SERVER_URI,
     .security_mode = LWM2M_SECURITY_MODE_RAW_PUBLIC_KEY,
     .pub_key_or_id = rpk_pub,
     .pub_key_or_id_len = sizeof(rpk_pub),
     .secret_key = rpk_priv,
     .secret_key_len = sizeof(rpk_priv),
     .server_pub_key = server_rpk_pub,
     .server_pub_key_len = sizeof(server_rpk_pub),
     .is_bootstrap = false,
     .client_hold_off_time = 5,
     .bootstrap_account_timeout = 0
 };

 // initialize the security object and get handle
 lwm2m_object_t *sec_obj = lwm2m_object_security_init(&client_data);

 // instantiate a new security object with next available instance ID
 int id = lwm2m_object_security_instance_create(&args, -1);
```

Generating the keysThe local key pair can be generated using [OpenSSL](https://www.openssl.org/).* Generate the key pair using the secp256r1 parameters: 
```cpp
$ openssl ecparam -name secp256r1 -genkey -outform der -out keys.der
```

* Get the public part of the key: 
```cpp
$ openssl ec -in keys.der -inform DER -outform DER -pubout | xxd -i
```

* Get the private part of the key: 
```cpp
$ openssl ec -in keys.der -inform DER -no_public -outform DER | xxd -i
```

* If your server requires your public key as X-Y coordinates you can dump it as text, remove the first byte and split the rest in two equally-sized parts. The first part will be X, the second Y. 
```cpp
$ openssl ec -in keys.der -inform DER -text

[...]
pub:
  04:a0:c3:8e:cb:a1:02:eb:5d:25:96:98:bb:60:8e:
  28:19:56:06:96:70:15:9b:54:ff:d9:60:32:c3:3e:
  89:08:ae:3a:33:2f:54:5f:68:a2:ac:d1:b9:df:2b:
  79:65:49:3f:1c:ae:64:7a:32:02:e4:32:8d:6b:22:
  67:83:0d:7c:b2
ASN1 OID: prime256v1
NIST CURVE: P-256
[...]
```

Following the example above we have: 
```cpp
X : a0c38ecba102eb5d259698bb608e281956069670159b54ffd96032c33e8908ae
Y : 3a332f545f68a2acd1b9df2b7965493f1cae647a3202e4328d6b2267830d7cb2
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public lwm2m_object_t * `[`lwm2m_object_security_init`](#group__lwm2m__objects__security_1gae5a6e40dd869d736e680cc5b063200ab)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Security object.
`public int `[`lwm2m_object_security_instance_create`](#group__lwm2m__objects__security_1gafd3eaae1ec622a3529f7963acc166a4f)`(const `[`lwm2m_obj_security_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gaaf92d3548ddd11b5b3891ae84b2b53c2)` * args,int32_t instance_id)`            | Create a new Security instance and add it to the `object` list.
`public `[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` `[`lwm2m_object_security_get_credential`](#group__lwm2m__objects__security_1ga49778bc3064935b7a457f3594f5e4b41)`(uint16_t instance_id)`            | Get the credential of a given instance of the security object.
`struct `[`lwm2m_obj_security_args`](#structlwm2m__obj__security__args) | Arguments for a new Security object instance creation ([lwm2m_object_security_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gafd3eaae1ec622a3529f7963acc166a4f)).

## Members

#### `public lwm2m_object_t * `[`lwm2m_object_security_init`](#group__lwm2m__objects__security_1gae5a6e40dd869d736e680cc5b063200ab)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Security object.

#### Parameters
* `client_data` LwM2M client data.

#### Returns
Pointer to the Security object on success

#### `public int `[`lwm2m_object_security_instance_create`](#group__lwm2m__objects__security_1gafd3eaae1ec622a3529f7963acc166a4f)`(const `[`lwm2m_obj_security_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gaaf92d3548ddd11b5b3891ae84b2b53c2)` * args,int32_t instance_id)` 

Create a new Security instance and add it to the `object` list.

#### Parameters
* `args` Initialize structure with the parameter for the instance. May not be NULL. 

* `instance_id` ID for the new instance. It must be between 0 and (UINT16_MAX - 1), if -1 the next available ID will be used.

#### Returns
Instance ID (> 0) on success 

#### Returns
-EINVAL if an invalid `instance_id` is given 

#### Returns
-ENOMEM if no memory is available to create a new instance

#### `public `[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` `[`lwm2m_object_security_get_credential`](#group__lwm2m__objects__security_1ga49778bc3064935b7a457f3594f5e4b41)`(uint16_t instance_id)` 

Get the credential of a given instance of the security object.

#### Parameters
* `instance_id` ID of the instance.

#### Returns
Credential tag. 

#### Parameters
* `CREDMAN_TAG_EMPTY` when no credential is assigned.

# struct `lwm2m_obj_security_args` 

Arguments for a new Security object instance creation ([lwm2m_object_security_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gafd3eaae1ec622a3529f7963acc166a4f)).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`server_id`](#structlwm2m__obj__security__args_1a0cf6e9a4f384dd2e27277b67e3e45a12) | Server's short ID the instance is associated to.
`public const char * `[`server_uri`](#structlwm2m__obj__security__args_1a4b285cafbe0d96d5ea9ca1bb99d2ae9c) | Server's URI the instance is associated to.
`public uint8_t `[`security_mode`](#structlwm2m__obj__security__args_1a6d8a556ee7502a2d07dffe7bcf1757f1) | Security mode to use.
`public const uint8_t * `[`pub_key_or_id`](#structlwm2m__obj__security__args_1a050627336d983b36a84244343a3b522e) | Pointer to the Key ID when using [LWM2M_SECURITY_MODE_PRE_SHARED_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga15d86892263343d84b480e9072da09b2).
`public size_t `[`pub_key_or_id_len`](#structlwm2m__obj__security__args_1a93ca6a362256c4470c5b7f1eaf7cdb90) | Length of [lwm2m_obj_security_args_t::pub_key_or_id](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_security.md#structlwm2m__obj__security__args_1a050627336d983b36a84244343a3b522e).
`public const uint8_t * `[`secret_key`](#structlwm2m__obj__security__args_1abe4d364862fa1bcdbfdedba1fad0c50b) | Pointer to the Key when using [LWM2M_SECURITY_MODE_PRE_SHARED_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga15d86892263343d84b480e9072da09b2).
`public size_t `[`secret_key_len`](#structlwm2m__obj__security__args_1a4488590eef2cd655e03a6b31be5d15de) | Length of [lwm2m_obj_security_args_t::secret_key](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_security.md#structlwm2m__obj__security__args_1abe4d364862fa1bcdbfdedba1fad0c50b).
`public const uint8_t * `[`server_pub_key`](#structlwm2m__obj__security__args_1a15cdd140a8bcf3996bd74c693d427cbb) | Pointer to the server public key encoded as a `SubjectPublicKeyInfo` sequence when using [LWM2M_SECURITY_MODE_RAW_PUBLIC_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gaa0a975f82146b4d8369d8f81fe441d63) (see [credman_load_public_key](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga03a58deeb373eb362d5437f3ed2e96dc)).
`public size_t `[`server_pub_key_len`](#structlwm2m__obj__security__args_1afe7aebc61eb616f6972715297802089e) | Length of [lwm2m_obj_security_args_t::server_pub_key](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_security.md#structlwm2m__obj__security__args_1a15cdd140a8bcf3996bd74c693d427cbb).
`public bool `[`is_bootstrap`](#structlwm2m__obj__security__args_1a64cb0e29118e9a7082dc24216b3977b9) | When `true` the security instance is associated to the Bootstrap-Server.
`public uint32_t `[`client_hold_off_time`](#structlwm2m__obj__security__args_1ac7d88c5b705bacaeca1441115c684f0b) | Time, in seconds, to wait before initiating a 'Client Initiated Bootstrap', after it has been determined that it should be initiated.
`public uint32_t `[`bootstrap_account_timeout`](#structlwm2m__obj__security__args_1ad7ad819103544a9c330367171b9bf449) | Time, in seconds, that the client waits before it purges the Bootstrap-Server's account.

## Members

#### `public uint16_t `[`server_id`](#structlwm2m__obj__security__args_1a0cf6e9a4f384dd2e27277b67e3e45a12) 

Server's short ID the instance is associated to.

#### `public const char * `[`server_uri`](#structlwm2m__obj__security__args_1a4b285cafbe0d96d5ea9ca1bb99d2ae9c) 

Server's URI the instance is associated to.

This buffer will be copied internally.

#### `public uint8_t `[`security_mode`](#structlwm2m__obj__security__args_1a6d8a556ee7502a2d07dffe7bcf1757f1) 

Security mode to use.

For now only [LWM2M_SECURITY_MODE_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga70a6f5afd228e42a5ed0494276df1e21) and [LWM2M_SECURITY_MODE_PRE_SHARED_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga15d86892263343d84b480e9072da09b2) and [LWM2M_SECURITY_MODE_RAW_PUBLIC_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gaa0a975f82146b4d8369d8f81fe441d63) are supported.

#### `public const uint8_t * `[`pub_key_or_id`](#structlwm2m__obj__security__args_1a050627336d983b36a84244343a3b522e) 

Pointer to the Key ID when using [LWM2M_SECURITY_MODE_PRE_SHARED_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga15d86892263343d84b480e9072da09b2).

Pointer to the public key encoded as a `SubjectPublicKeyInfo` sequence when using [LWM2M_SECURITY_MODE_RAW_PUBLIC_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gaa0a975f82146b4d8369d8f81fe441d63) (see [credman_load_public_key](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga03a58deeb373eb362d5437f3ed2e96dc)). May be `NULL` when [LWM2M_SECURITY_MODE_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga70a6f5afd228e42a5ed0494276df1e21) is used.

This buffer will be copied internally.

#### `public size_t `[`pub_key_or_id_len`](#structlwm2m__obj__security__args_1a93ca6a362256c4470c5b7f1eaf7cdb90) 

Length of [lwm2m_obj_security_args_t::pub_key_or_id](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_security.md#structlwm2m__obj__security__args_1a050627336d983b36a84244343a3b522e).

#### `public const uint8_t * `[`secret_key`](#structlwm2m__obj__security__args_1abe4d364862fa1bcdbfdedba1fad0c50b) 

Pointer to the Key when using [LWM2M_SECURITY_MODE_PRE_SHARED_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga15d86892263343d84b480e9072da09b2).

Pointer to the private key PKCS8 DER encoded when using [LWM2M_SECURITY_MODE_RAW_PUBLIC_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gaa0a975f82146b4d8369d8f81fe441d63) (see [credman_load_private_key](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga5a976d4911f3265d9034bad5a530fd2f)). May be `NULL` when [LWM2M_SECURITY_MODE_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga70a6f5afd228e42a5ed0494276df1e21) is used.

This buffer will be copied internally.

#### `public size_t `[`secret_key_len`](#structlwm2m__obj__security__args_1a4488590eef2cd655e03a6b31be5d15de) 

Length of [lwm2m_obj_security_args_t::secret_key](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_security.md#structlwm2m__obj__security__args_1abe4d364862fa1bcdbfdedba1fad0c50b).

#### `public const uint8_t * `[`server_pub_key`](#structlwm2m__obj__security__args_1a15cdd140a8bcf3996bd74c693d427cbb) 

Pointer to the server public key encoded as a `SubjectPublicKeyInfo` sequence when using [LWM2M_SECURITY_MODE_RAW_PUBLIC_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1gaa0a975f82146b4d8369d8f81fe441d63) (see [credman_load_public_key](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga03a58deeb373eb362d5437f3ed2e96dc)).

May be `NULL` when [LWM2M_SECURITY_MODE_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga70a6f5afd228e42a5ed0494276df1e21) or [LWM2M_SECURITY_MODE_PRE_SHARED_KEY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__security_1ga15d86892263343d84b480e9072da09b2) are used.

This buffer will be copied internally.

#### `public size_t `[`server_pub_key_len`](#structlwm2m__obj__security__args_1afe7aebc61eb616f6972715297802089e) 

Length of [lwm2m_obj_security_args_t::server_pub_key](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_security.md#structlwm2m__obj__security__args_1a15cdd140a8bcf3996bd74c693d427cbb).

#### `public bool `[`is_bootstrap`](#structlwm2m__obj__security__args_1a64cb0e29118e9a7082dc24216b3977b9) 

When `true` the security instance is associated to the Bootstrap-Server.

#### `public uint32_t `[`client_hold_off_time`](#structlwm2m__obj__security__args_1ac7d88c5b705bacaeca1441115c684f0b) 

Time, in seconds, to wait before initiating a 'Client Initiated Bootstrap', after it has been determined that it should be initiated.

#### `public uint32_t `[`bootstrap_account_timeout`](#structlwm2m__obj__security__args_1ad7ad819103544a9c330367171b9bf449) 

Time, in seconds, that the client waits before it purges the Bootstrap-Server's account.

0 means never.

