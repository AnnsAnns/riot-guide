---
title: api-sys_suit.md
description: api-sys_suit.md
---
# group `sys_suit` 

SUIT manifest handling.

**This feature is experimental!**

The current implementation of this specification is based on the IETF-SUIT-v9 draft. The module is still experimental and will change to match future draft specifications

**See also**: [https://tools.ietf.org/html/draft-ietf-suit-manifest-09](https://tools.ietf.org/html/draft-ietf-suit-manifest-09)

Handler functions for SUIT manifests Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

Kaspar Schleiser [kaspar@schleiser.de](mailto:kaspar@schleiser.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SUIT_COSE_BUF_SIZE`](#group__sys__suit_1ga30a9d72c910ae1f19046cff92430380a)            | Buffer size used for Cose.
`define `[`CONFIG_SUIT_COMPONENT_MAX`](#group__sys__suit_1ga4f095f24c38e2f3b8d0fa57005aa315c)            | Maximum number of components supported in a SUIT manifest.
`define `[`CONFIG_SUIT_COMPONENT_MAX_NAME_LEN`](#group__sys__suit_1ga040a97e2c60e13dc6d33d787277f979c)            | Maximum name of component, includes separator.
`define `[`SUIT_VERSION`](#group__sys__suit_1ga06428f70b7d93c61acd277f67acab8c8)            | Current SUIT serialization format version.
`define `[`SUIT_MANIFEST_COMPONENT_ALL`](#group__sys__suit_1ga70006cfe2a4fbf84d34d2949d376f322)            | Component index representing all components.
`define `[`SUIT_MANIFEST_COMPONENT_NONE`](#group__sys__suit_1ga04b6a802d3358ffa9523f237e801aff9)            | Component index representing no components.
`enum `[`suit_error_t`](#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5)            | SUIT error codes.
`enum `[`suit_digest_t`](#group__sys__suit_1gab313c09e7d9e39fb73febd8f2f91ab8e)            | SUIT payload digest algorithms.
`enum `[`suit_digest_type_t`](#group__sys__suit_1ga6840a110c55cc92733b825189d0067fc)            | SUIT payload digest types.
`enum `[`@392`](#group__sys__suit_1gab719707cad671ce69bd3b488843e06b9)            | SUIT component types.
`public int `[`suit_parse`](#group__sys__suit_1ga7124648870add69ea903cc45005af6eb)`(`[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,const uint8_t * buf,size_t len)`            | Parse a manifest.
`public int `[`suit_policy_check`](#group__sys__suit_1gabb7f6b7ab687dd9f6c602bd9182a2e8d)`(`[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest)`            | Check a manifest policy.
`public inline static void `[`suit_component_set_flag`](#group__sys__suit_1ga9a61ecb5f64f16d7f628ada8ab067c6e)`(`[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component,uint16_t flag)`            | Set a component flag.
`public inline static bool `[`suit_component_check_flag`](#group__sys__suit_1gac0ab2c031f8b96794a78e7982dab5e18)`(`[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component,uint16_t flag)`            | Check a component flag.
`public int `[`suit_component_name_to_string`](#group__sys__suit_1gafa5799b8385193f0cb38668d93ef1c26)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,const `[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component,char separator,char * buf,size_t buf_len)`            | Convert a component name to a string.
`struct `[`suit_param_ref_t`](#structsuit__param__ref__t) | SUIT parameter reference.
`struct `[`suit_component_t`](#structsuit__component__t) | SUIT component struct as decoded from the manifest.
`struct `[`suit_manifest_t`](#structsuit__manifest__t) | SUIT manifest struct.

## Members

#### `define `[`SUIT_COSE_BUF_SIZE`](#group__sys__suit_1ga30a9d72c910ae1f19046cff92430380a) 

Buffer size used for Cose.

#### `define `[`CONFIG_SUIT_COMPONENT_MAX`](#group__sys__suit_1ga4f095f24c38e2f3b8d0fa57005aa315c) 

Maximum number of components supported in a SUIT manifest.

#### `define `[`CONFIG_SUIT_COMPONENT_MAX_NAME_LEN`](#group__sys__suit_1ga040a97e2c60e13dc6d33d787277f979c) 

Maximum name of component, includes separator.

#### `define `[`SUIT_VERSION`](#group__sys__suit_1ga06428f70b7d93c61acd277f67acab8c8) 

Current SUIT serialization format version.

see [https://tools.ietf.org/html/draft-ietf-suit-manifest-03#section-7](https://tools.ietf.org/html/draft-ietf-suit-manifest-03#section-7) for details

#### `define `[`SUIT_MANIFEST_COMPONENT_ALL`](#group__sys__suit_1ga70006cfe2a4fbf84d34d2949d376f322) 

Component index representing all components.

Used when suit-directive-set-component-index = True

#### `define `[`SUIT_MANIFEST_COMPONENT_NONE`](#group__sys__suit_1ga04b6a802d3358ffa9523f237e801aff9) 

Component index representing no components.

Used when suit-directive-set-component-index = False

#### `enum `[`suit_error_t`](#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SUIT_OK            | Manifest parsed and validated.
SUIT_ERR_INVALID_MANIFEST            | Unexpected CBOR structure detected.
SUIT_ERR_UNSUPPORTED            | Unsupported SUIT feature detected.
SUIT_ERR_NOT_SUPPORTED            | Unsupported features detected.
SUIT_ERR_COND            | Conditionals evaluate to false.
SUIT_ERR_SEQUENCE_NUMBER            | Sequence number less or equal to current sequence number.
SUIT_ERR_SIGNATURE            | Unable to verify signature.
SUIT_ERR_DIGEST_MISMATCH            | Digest mismatch with COSE and SUIT.
SUIT_ERR_POLICY_FORBIDDEN            | Denied because of policy mismatch.
SUIT_ERR_NO_MEM            | Out of memory condition.
SUIT_ERR_STORAGE            | Backend returned an error.
SUIT_ERR_STORAGE_EXCEEDED            | Backend out of space.
SUIT_ERR_STORAGE_UNAVAILABLE            | Backend location not available.

SUIT error codes.

#### `enum `[`suit_digest_t`](#group__sys__suit_1gab313c09e7d9e39fb73febd8f2f91ab8e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SUIT_DIGEST_NONE            | No digest algo supplied.
SUIT_DIGEST_SHA256            | SHA256.
SUIT_DIGEST_SHA384            | SHA384.
SUIT_DIGEST_SHA512            | SHA512.

SUIT payload digest algorithms.

Unofficial list from [suit-manifest-generator](https://github.com/ARMmbed/suit-manifest-generator)

#### `enum `[`suit_digest_type_t`](#group__sys__suit_1ga6840a110c55cc92733b825189d0067fc) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SUIT_DIGEST_TYPE_RAW            | Raw payload digest.
SUIT_DIGEST_TYPE_INSTALLED            | Installed firmware digest.
SUIT_DIGEST_TYPE_CIPHERTEXT            | Ciphertext digest.
SUIT_DIGEST_TYPE_PREIMAGE            | Pre-image digest.

SUIT payload digest types.

Unofficial list from [suit-manifest-generator](https://github.com/ARMmbed/suit-manifest-generator)

#### `enum `[`@392`](#group__sys__suit_1gab719707cad671ce69bd3b488843e06b9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SUIT_COMPONENT_IDENTIFIER            | Identifier component.
SUIT_COMPONENT_SIZE            | Size component.
SUIT_COMPONENT_DIGEST            | Digest component.

SUIT component types.

Unofficial list from [suit-manifest-generator](https://github.com/ARMmbed/suit-manifest-generator)

#### `public int `[`suit_parse`](#group__sys__suit_1ga7124648870add69ea903cc45005af6eb)`(`[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,const uint8_t * buf,size_t len)` 

Parse a manifest.

The buffer is still required after parsing, please don't reuse the buffer while the `manifest` is used

#### Parameters
* `manifest` manifest context to store information in 

* `buf` buffer to parse the manifest from 

* `len` length of the manifest data in the buffer

#### Returns
SUIT_OK on parseable manifest 

#### Returns
negative [suit_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1ga5ad972943b02a8964f9f1d3c60da1fb5) code on error

#### `public int `[`suit_policy_check`](#group__sys__suit_1gabb7f6b7ab687dd9f6c602bd9182a2e8d)`(`[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest)` 

Check a manifest policy.

#### Parameters
* `manifest` manifest context to check the policy for

#### Returns
0 on valid manifest policy 

#### Returns
-1 on invalid manifest policy

#### `public inline static void `[`suit_component_set_flag`](#group__sys__suit_1ga9a61ecb5f64f16d7f628ada8ab067c6e)`(`[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component,uint16_t flag)` 

Set a component flag.

#### Parameters
* `component` Component to set flag for 

* `flag` Flag to set

#### `public inline static bool `[`suit_component_check_flag`](#group__sys__suit_1gac0ab2c031f8b96794a78e7982dab5e18)`(`[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component,uint16_t flag)` 

Check a component flag.

#### Parameters
* `component` Component to check a flag for 

* `flag` Flag to check

#### Returns
True if the flag is set

#### `public int `[`suit_component_name_to_string`](#group__sys__suit_1gafa5799b8385193f0cb38668d93ef1c26)`(const `[`suit_manifest_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__manifest__t)` * manifest,const `[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` * component,char separator,char * buf,size_t buf_len)` 

Convert a component name to a string.

Each component part is prefixed with `separator`

#### Returns
SUIT_OK if successful 

#### Returns
negative error code on error

# struct `suit_param_ref_t` 

SUIT parameter reference.

A 16-bit offset is enough to reference content inside the manifest itself.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`offset`](#structsuit__param__ref__t_1aff7dd53306897eaac11bfbef71fc1ddc) | offset to the start of the content

## Members

#### `public uint16_t `[`offset`](#structsuit__param__ref__t_1aff7dd53306897eaac11bfbef71fc1ddc) 

offset to the start of the content

# struct `suit_component_t` 

SUIT component struct as decoded from the manifest.

The parameters are references to CBOR-encoded information in the manifest.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`suit_storage_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gae2a098c307a0f3dc530cd3ba9b6e73a3)` * `[`storage_backend`](#structsuit__component__t_1a4e0ca3ddb138cd99c552781461e6a024) | Storage backend used.
`public uint16_t `[`state`](#structsuit__component__t_1ac12d3df5d05b933591e2e21fe1bc7b59) | Component status flags.
`public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`identifier`](#structsuit__component__t_1abf16ade3737bfee4145396889449b8f4) | Component identifier.
`public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_vendor_id`](#structsuit__component__t_1a6e52b20166d0d69d2bf002d079e6471b) | Vendor ID.
`public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_class_id`](#structsuit__component__t_1a2202b533b6d4e75d86163d4066d9fab5) | Class ID.
`public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_digest`](#structsuit__component__t_1a40077ab435a1b22f1ad525713585f9c0) | Payload verification digest.
`public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_uri`](#structsuit__component__t_1a3b4f39cfa4d08bf7074331db2b857851) | Payload fetch URI.
`public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_size`](#structsuit__component__t_1a1b29a4e8f3046eb6e618a3540227805f) | Payload size.
`public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_component_offset`](#structsuit__component__t_1afc579120557497893faeaae13a4e0e35) | Component offset inside the device memory.

## Members

#### `public `[`suit_storage_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit_1gae2a098c307a0f3dc530cd3ba9b6e73a3)` * `[`storage_backend`](#structsuit__component__t_1a4e0ca3ddb138cd99c552781461e6a024) 

Storage backend used.

#### `public uint16_t `[`state`](#structsuit__component__t_1ac12d3df5d05b933591e2e21fe1bc7b59) 

Component status flags.

#### `public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`identifier`](#structsuit__component__t_1abf16ade3737bfee4145396889449b8f4) 

Component identifier.

#### `public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_vendor_id`](#structsuit__component__t_1a6e52b20166d0d69d2bf002d079e6471b) 

Vendor ID.

#### `public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_class_id`](#structsuit__component__t_1a2202b533b6d4e75d86163d4066d9fab5) 

Class ID.

#### `public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_digest`](#structsuit__component__t_1a40077ab435a1b22f1ad525713585f9c0) 

Payload verification digest.

#### `public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_uri`](#structsuit__component__t_1a3b4f39cfa4d08bf7074331db2b857851) 

Payload fetch URI.

#### `public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_size`](#structsuit__component__t_1a1b29a4e8f3046eb6e618a3540227805f) 

Payload size.

#### `public `[`suit_param_ref_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__param__ref__t)` `[`param_component_offset`](#structsuit__component__t_1afc579120557497893faeaae13a4e0e35) 

Component offset inside the device memory.

# struct `suit_manifest_t` 

SUIT manifest struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const uint8_t * `[`buf`](#structsuit__manifest__t_1a4c753e8f90cc1126a29d21b98dd70d5a) | ptr to the buffer of the manifest
`public size_t `[`len`](#structsuit__manifest__t_1a08edfd1f78452d0dc3c11ca84147e540) | length of the manifest
`public const uint8_t * `[`cose_payload`](#structsuit__manifest__t_1ab6752162e6512b66eaeea07a63bc6708) | ptr to the payload of the COSE sign
`public size_t `[`cose_payload_len`](#structsuit__manifest__t_1aa2b4a091a743b3e868a3932334935ef3) | length of the COSE payload
`public uint32_t `[`validated`](#structsuit__manifest__t_1a824e118f8611249e25c0dad65a4589a4) | bitfield of validated policies
`public uint32_t `[`state`](#structsuit__manifest__t_1a3731391b1fee1fdc5f51323cf8ee3504) | bitfield holding state information
`public `[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` `[`components`](#structsuit__manifest__t_1ac1305169a255bad2793e4e09c9eee4bf) | List of components in the manifest.
`public unsigned `[`components_len`](#structsuit__manifest__t_1afdea2a15baccf2634a9d071319314695) | Current number of components.
`public uint8_t `[`component_current`](#structsuit__manifest__t_1af8d27d3112e735f8b3e8ca5045b09e8a) | Current component index.
`public uint8_t `[`validation_buf`](#structsuit__manifest__t_1a36b5bf8e3f7feaeac5e05bcbfb4550d4) | Manifest validation buffer.
`public char * `[`urlbuf`](#structsuit__manifest__t_1a2c471d5eb04a2b689dbadec824667ddd) | Buffer containing the manifest url.
`public size_t `[`urlbuf_len`](#structsuit__manifest__t_1aeb0879816c0e274573a0b0d6291f734f) | Length of the manifest url.
`public uint32_t `[`seq_number`](#structsuit__manifest__t_1af05746f6275027d447c02e1ca2096b67) | Set sequence number.

## Members

#### `public const uint8_t * `[`buf`](#structsuit__manifest__t_1a4c753e8f90cc1126a29d21b98dd70d5a) 

ptr to the buffer of the manifest

#### `public size_t `[`len`](#structsuit__manifest__t_1a08edfd1f78452d0dc3c11ca84147e540) 

length of the manifest

#### `public const uint8_t * `[`cose_payload`](#structsuit__manifest__t_1ab6752162e6512b66eaeea07a63bc6708) 

ptr to the payload of the COSE sign

#### `public size_t `[`cose_payload_len`](#structsuit__manifest__t_1aa2b4a091a743b3e868a3932334935ef3) 

length of the COSE payload

#### `public uint32_t `[`validated`](#structsuit__manifest__t_1a824e118f8611249e25c0dad65a4589a4) 

bitfield of validated policies

#### `public uint32_t `[`state`](#structsuit__manifest__t_1a3731391b1fee1fdc5f51323cf8ee3504) 

bitfield holding state information

#### `public `[`suit_component_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_suit.md#structsuit__component__t)` `[`components`](#structsuit__manifest__t_1ac1305169a255bad2793e4e09c9eee4bf) 

List of components in the manifest.

#### `public unsigned `[`components_len`](#structsuit__manifest__t_1afdea2a15baccf2634a9d071319314695) 

Current number of components.

#### `public uint8_t `[`component_current`](#structsuit__manifest__t_1af8d27d3112e735f8b3e8ca5045b09e8a) 

Current component index.

#### `public uint8_t `[`validation_buf`](#structsuit__manifest__t_1a36b5bf8e3f7feaeac5e05bcbfb4550d4) 

Manifest validation buffer.

#### `public char * `[`urlbuf`](#structsuit__manifest__t_1a2c471d5eb04a2b689dbadec824667ddd) 

Buffer containing the manifest url.

#### `public size_t `[`urlbuf_len`](#structsuit__manifest__t_1aeb0879816c0e274573a0b0d6291f734f) 

Length of the manifest url.

#### `public uint32_t `[`seq_number`](#structsuit__manifest__t_1af05746f6275027d447c02e1ca2096b67) 

Set sequence number.

