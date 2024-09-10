---
title: api-net_ieee802154_security.md
description: api-net_ieee802154_security.md
---
# group `net_ieee802154_security` 

IEEE 802.15.4 security header.

This module is exposing raw 802.15.4 encryption without an underlying key management framework. This is intended for experimentation with the security modes of 802.15.4, and not for use cases where its security is depended on.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_IEEE802154_SEC_DEFAULT_KEY`](#group__net__ieee802154__security_1gac6f0ee17906671d10b66be4655b886cf)            | AES default key.
`define `[`IEEE802154_SEC_KEY_LENGTH`](#group__net__ieee802154__security_1ga3620d7173650928822a3cad7780b7784)            | Length of an AES key in bytes.
`define `[`IEEE802154_SEC_BLOCK_SIZE`](#group__net__ieee802154__security_1ga7b42e25a8eb9c35e3efd9325b509415d)            | Block size of an encryption block.
`define `[`IEEE802154_SEC_MAX_AUX_HDR_LEN`](#group__net__ieee802154__security_1gac8baa872ecd5614cc39bd3ca5f92b041)            | Maximum length of the security auxiliary header in bytes.
`define `[`IEEE802154_SEC_MAX_MAC_SIZE`](#group__net__ieee802154__security_1ga42d20d2e8ec092f0359e9d11fb4a5df4)            | Maximum Size of IEEE 802.15.4 MAC.
`define `[`IEEE802154_SEC_SCF_SECLEVEL_MASK`](#group__net__ieee802154__security_1gad72280e5b9e9b2cc1fbdf93fc06905eb)            | Mask to get security level bits.
`define `[`IEEE802154_SEC_SCF_SECLEVEL_SHIFT`](#group__net__ieee802154__security_1gaebbe0abd2d410eedd1ac70f357634249)            | Number of shifts to set/get security level bits.
`define `[`IEEE802154_SEC_SCF_KEYMODE_MASK`](#group__net__ieee802154__security_1ga131ebc82bf8572f517d851ddc00b357f)            | Mask to get key mode bits.
`define `[`IEEE802154_SEC_SCF_KEYMODE_SHIFT`](#group__net__ieee802154__security_1gafb55c6a775c10475165140281575fc4a)            | Number of shifts to set/get key mode bits.
`enum `[`ieee802154_sec_scf_seclevel_t`](#group__net__ieee802154__security_1ga6d9020fabf05ebce6969b76f6619c85b)            | Security levels.
`enum `[`ieee802154_sec_scf_keymode_t`](#group__net__ieee802154__security_1ga93e249c2a32cf12a8d86abd1eb5d7f32)            | Key identifier modes.
`enum `[`ieee802154_sec_error_t`](#group__net__ieee802154__security_1ga7ce08576e822bbb2f8d5599855ba558f)            | IEEE 802.15.4 security error codes.
`public void `[`ieee802154_sec_init`](#group__net__ieee802154__security_1gad493591471a3b70af9e0d4d65d0b9b75)`(`[`ieee802154_sec_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1gafa104550837acdb7a8967bd865697430)` * ctx)`            | Initialize IEEE 802.15.4 security context with default values.
`public int `[`ieee802154_sec_encrypt_frame`](#group__net__ieee802154__security_1ga3cadb40210fd6995d3c65224668e6ce9)`(`[`ieee802154_sec_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1gafa104550837acdb7a8967bd865697430)` * ctx,const uint8_t * header,uint8_t * header_size,uint8_t * payload,uint16_t payload_size,uint8_t * mic,uint8_t * mic_size,const uint8_t * src_address)`            | Encrypt IEEE 802.15.4 frame according to `ctx`.
`public int `[`ieee802154_sec_decrypt_frame`](#group__net__ieee802154__security_1gaf56acd5900bd7215d0e457b045710a5d)`(`[`ieee802154_sec_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1gafa104550837acdb7a8967bd865697430)` * ctx,uint16_t frame_size,uint8_t * header,uint8_t * header_size,uint8_t ** payload,uint16_t * payload_size,uint8_t ** mic,uint8_t * mic_size,const uint8_t * src_address)`            | Decrypt IEEE 802.15.4 frame according to `ctx`.
`struct `[`ieee802154_radio_cipher_ops`](#structieee802154__radio__cipher__ops) | Struct of security operations.
`struct `[`ieee802154_sec_dev`](#structieee802154__sec__dev) | IEEE 802.15.4 security device descriptor.
`struct `[`ieee802154_sec_context`](#structieee802154__sec__context) | Struct to hold IEEE 802.15.4 security information.
`struct `[`ieee802154_sec_aux_t`](#structieee802154__sec__aux__t) | IEEE 802.15.4 auxiliary security header.
`struct `[`ieee802154_sec_aux_key_identifier_1_t`](#structieee802154__sec__aux__key__identifier__1__t) | Content of key_source if key mode is IEEE802154_SEC_SCF_KEYMODE_INDEX.
`struct `[`ieee802154_sec_aux_key_identifier_5_t`](#structieee802154__sec__aux__key__identifier__5__t) | Content of key_source if key mode is IEEE802154_SEC_SCF_KEYMODE_SHORT_INDEX.
`struct `[`ieee802154_sec_aux_key_identifier_9_t`](#structieee802154__sec__aux__key__identifier__9__t) | Content of key_source if key mode is IEEE802154_SEC_SCF_KEYMODE_HW_INDEX.
`struct `[`ieee802154_sec_ccm_nonce_t`](#structieee802154__sec__ccm__nonce__t) | Format of 13 byte nonce.
`struct `[`ieee802154_sec_ccm_block_t`](#structieee802154__sec__ccm__block__t) | Format of 16 byte input block of CCM.

## Members

#### `define `[`CONFIG_IEEE802154_SEC_DEFAULT_KEY`](#group__net__ieee802154__security_1gac6f0ee17906671d10b66be4655b886cf) 

AES default key.

Predefine it yourself, if you want another key to be set up on initialization

#### `define `[`IEEE802154_SEC_KEY_LENGTH`](#group__net__ieee802154__security_1ga3620d7173650928822a3cad7780b7784) 

Length of an AES key in bytes.

#### `define `[`IEEE802154_SEC_BLOCK_SIZE`](#group__net__ieee802154__security_1ga7b42e25a8eb9c35e3efd9325b509415d) 

Block size of an encryption block.

#### `define `[`IEEE802154_SEC_MAX_AUX_HDR_LEN`](#group__net__ieee802154__security_1gac8baa872ecd5614cc39bd3ca5f92b041) 

Maximum length of the security auxiliary header in bytes.

#### `define `[`IEEE802154_SEC_MAX_MAC_SIZE`](#group__net__ieee802154__security_1ga42d20d2e8ec092f0359e9d11fb4a5df4) 

Maximum Size of IEEE 802.15.4 MAC.

#### `define `[`IEEE802154_SEC_SCF_SECLEVEL_MASK`](#group__net__ieee802154__security_1gad72280e5b9e9b2cc1fbdf93fc06905eb) 

Mask to get security level bits.

#### `define `[`IEEE802154_SEC_SCF_SECLEVEL_SHIFT`](#group__net__ieee802154__security_1gaebbe0abd2d410eedd1ac70f357634249) 

Number of shifts to set/get security level bits.

#### `define `[`IEEE802154_SEC_SCF_KEYMODE_MASK`](#group__net__ieee802154__security_1ga131ebc82bf8572f517d851ddc00b357f) 

Mask to get key mode bits.

#### `define `[`IEEE802154_SEC_SCF_KEYMODE_SHIFT`](#group__net__ieee802154__security_1gafb55c6a775c10475165140281575fc4a) 

Number of shifts to set/get key mode bits.

#### `enum `[`ieee802154_sec_scf_seclevel_t`](#group__net__ieee802154__security_1ga6d9020fabf05ebce6969b76f6619c85b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_SEC_SCF_SECLEVEL_NONE            | no security
IEEE802154_SEC_SCF_SECLEVEL_MIC32            | 32 bit MIC
IEEE802154_SEC_SCF_SECLEVEL_MIC64            | 64 bit MIC
IEEE802154_SEC_SCF_SECLEVEL_MIC128            | 128 bit MIC
IEEE802154_SEC_SCF_SECLEVEL_ENC            | encryption
IEEE802154_SEC_SCF_SECLEVEL_ENC_MIC32            | enc.
IEEE802154_SEC_SCF_SECLEVEL_ENC_MIC64            | enc.
IEEE802154_SEC_SCF_SECLEVEL_ENC_MIC128            | enc.

Security levels.

*IEEE802154_SEC_SCF_SECLEVEL_MIC**: A message integrity code (MIC), also known as MAC, is used to prove authentication. The MIC covers the whole frame i.e. header, auxiliary header, and frame payload. The MIC is always encrypted, thus it must be decrypted by the receiver, to be checked.

*IEEE802154_SEC_SCF_SECLEVEL_ENC**: AES-128 in ECB mode is used to encrypt the payload of a frame to provide confidentiality.

*IEEE802154_SEC_SCF_SECLEVEL_ENC_MIC**: A combination of the two modes above is used to ensure authentication and confidentiality.

#### `enum `[`ieee802154_sec_scf_keymode_t`](#group__net__ieee802154__security_1ga93e249c2a32cf12a8d86abd1eb5d7f32) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_SEC_SCF_KEYMODE_IMPLICIT            | Key is determined implicitly.
IEEE802154_SEC_SCF_KEYMODE_INDEX            | Key is determined from key index.
IEEE802154_SEC_SCF_KEYMODE_SHORT_INDEX            | Key is determined from 4 byte key source and key index.
IEEE802154_SEC_SCF_KEYMODE_HW_INDEX            | Key is determined from 8 byte key source and key index.

Key identifier modes.

The key identifier field in the auxiliary header consists of the key source and the key index fields and is only present if the key identifier mode is not IEEE802154_SEC_SCF_KEYMODE_IMPLICIT. (see 9.4.3 in the spec.)

+-------------+----------+---------------+---------------------------------+ | mode | key source | key index | description | +-------------+----------+---------------+---------------------------------+ | IMPLICIT | 0 bytes | 0 bytes | The key is implicitly | | | | | known to the receiver. | +-------------+----------+---------------+---------------------------------+ | INDEX | 0 bytes | 1 byte | The key can be determined | | | | | from the key index. | +-------------+----------+---------------+---------------------------------+ | SHORT_INDEX | 4 bytes | 1 byte | The key is a group key and can be | | | | | determined from the key index and | | | | | the source PAN ID and the | | | | | short source address | | | | | of the originator of the frame. | +-------------+----------+---------------+---------------------------------+ | HW_INDEX | 8 bytes | 1 byte | The key can be determined | | | | | from the key index and | | | | | the long address of the originator | | | | | of the frame. | +-------------+----------+---------------+---------------------------------+

#### `enum `[`ieee802154_sec_error_t`](#group__net__ieee802154__security_1ga7ce08576e822bbb2f8d5599855ba558f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_SEC_OK            | Everything went fine.
IEEE802154_SEC_FRAME_COUNTER_OVERFLOW            | The requested operation would let the frame counter overflow.
IEEE802154_SEC_NO_KEY            | Could not find the key to perform a requested cipher operation.
IEEE802154_SEC_MAC_CHECK_FAILURE            | The computet MAC did not match.
IEEE802154_SEC_UNSUPORTED            | Unsupported operation.

IEEE 802.15.4 security error codes.

#### `public void `[`ieee802154_sec_init`](#group__net__ieee802154__security_1gad493591471a3b70af9e0d4d65d0b9b75)`(`[`ieee802154_sec_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1gafa104550837acdb7a8967bd865697430)` * ctx)` 

Initialize IEEE 802.15.4 security context with default values.

#### Parameters
* `ctx` IEEE 802.15.4 security context

#### `public int `[`ieee802154_sec_encrypt_frame`](#group__net__ieee802154__security_1ga3cadb40210fd6995d3c65224668e6ce9)`(`[`ieee802154_sec_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1gafa104550837acdb7a8967bd865697430)` * ctx,const uint8_t * header,uint8_t * header_size,uint8_t * payload,uint16_t payload_size,uint8_t * mic,uint8_t * mic_size,const uint8_t * src_address)` 

Encrypt IEEE 802.15.4 frame according to `ctx`.

#### Parameters
* `ctx` IEEE 802.15.4 security context 

* `header` Pointer to frame header 

* `header_size` in: Header size; out: Size of header and auxiliary header 

* `payload` in: Plain payload; out: Encrypted payload 

* `payload_size` Size of payload 

* `mic` Buffer to store computed MIC 

* `mic_size` Size of MIC 

* `src_address` Source address

`header` should be large enough to also store the auxiliary header

#### Returns
0 Success 

#### Returns
negative integer on error

#### `public int `[`ieee802154_sec_decrypt_frame`](#group__net__ieee802154__security_1gaf56acd5900bd7215d0e457b045710a5d)`(`[`ieee802154_sec_context_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1gafa104550837acdb7a8967bd865697430)` * ctx,uint16_t frame_size,uint8_t * header,uint8_t * header_size,uint8_t ** payload,uint16_t * payload_size,uint8_t ** mic,uint8_t * mic_size,const uint8_t * src_address)` 

Decrypt IEEE 802.15.4 frame according to `ctx`.

#### Parameters
* `ctx` IEEE 802.15.4 security context 

* `frame_size` Size of received frame 

* `header` Pointer to header, which is also the frame 

* `header_size` in: Header size; out: Size of header and auxiliary header 

* `payload` Will point to the beginning of the payload 

* `payload_size` Pointer to store the payload size 

* `mic` Will point to the beginning of the MIC 

* `mic_size` Pointer to store the size of the MIC 

* `src_address` Pointer to remote long source address

After `header` follows the auxiliary header

#### Returns
0 Success 

#### Returns
negative integer on error

# struct `ieee802154_radio_cipher_ops` 

Struct of security operations.

A device can indicate that the fallback implementations should be used by setting the corresponding member to `NULL`, or pointing to [ieee802154_radio_cipher_ops](#structieee802154__radio__cipher__ops), which does the same. Note that [ieee802154_radio_cipher_ops](#structieee802154__radio__cipher__ops) is the default security operations driver assigned when [ieee802154_sec_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1gad493591471a3b70af9e0d4d65d0b9b75) is called.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`set_key`](#structieee802154__radio__cipher__ops_1aefd58ccbbcff87d1037c768e44d8492a) | Function to set the encryption key for the next cipher operation.
`public void(* `[`cbc`](#structieee802154__radio__cipher__ops_1aafd2bff3ac8ee99659fdad6f381a1494) | Function type to compute CBC-MAC.
`public void(* `[`ecb`](#structieee802154__radio__cipher__ops_1a33aa407a1f46d2cab699fdbb77aa6cf0) | Function type to perform ECB encryption.

## Members

#### `public void(* `[`set_key`](#structieee802154__radio__cipher__ops_1aefd58ccbbcff87d1037c768e44d8492a) 

Function to set the encryption key for the next cipher operation.

#### Parameters
* `dev` Will be [ieee802154_sec_context_t::ieee802154_sec_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1ga6a22b02c1184f35ca127c34cdbabf42c)

* `key` Key to be used for the next cipher operation 

* `key_size` key size in bytes

#### `public void(* `[`cbc`](#structieee802154__radio__cipher__ops_1aafd2bff3ac8ee99659fdad6f381a1494) 

Function type to compute CBC-MAC.

#### Parameters
* `dev` Will be [ieee802154_sec_context_t::ieee802154_sec_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1ga6a22b02c1184f35ca127c34cdbabf42c)

* `cipher` Output cipher blocks 

* `iv` in: IV; out: computed MIC 

* `plain` Input plain blocks 

* `nblocks` Number of blocks

#### `public void(* `[`ecb`](#structieee802154__radio__cipher__ops_1a33aa407a1f46d2cab699fdbb77aa6cf0) 

Function type to perform ECB encryption.

#### Parameters
* `dev` Will be [ieee802154_sec_context_t::ieee802154_sec_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1ga6a22b02c1184f35ca127c34cdbabf42c)

* `cipher` Output cipher blocks 

* `plain` Input plain blocks 

* `nblocks` Number of blocks

# struct `ieee802154_sec_dev` 

IEEE 802.15.4 security device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const struct `[`ieee802154_radio_cipher_ops`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_security.md#structieee802154__radio__cipher__ops)` * `[`cipher_ops`](#structieee802154__sec__dev_1a00900e18aecdda5c718e42c1477c6dd8) | Pointer to the operations of the device.
`public void * `[`ctx`](#structieee802154__sec__dev_1ac542e429a555044c0bd95b8f7d1af6f4) | Pointer to the context of the device.

## Members

#### `public const struct `[`ieee802154_radio_cipher_ops`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_security.md#structieee802154__radio__cipher__ops)` * `[`cipher_ops`](#structieee802154__sec__dev_1a00900e18aecdda5c718e42c1477c6dd8) 

Pointer to the operations of the device.

#### `public void * `[`ctx`](#structieee802154__sec__dev_1ac542e429a555044c0bd95b8f7d1af6f4) 

Pointer to the context of the device.

# struct `ieee802154_sec_context` 

Struct to hold IEEE 802.15.4 security information.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cipher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcipher__t)` `[`cipher`](#structieee802154__sec__context_1ac801769543e4b8c83c075ceb662d2b0c) | Cipher context with AES128 interface and key storage.
`public uint8_t `[`security_level`](#structieee802154__sec__context_1aef1132bc7937232e79b9affa75ea0f0d) | Security level IEEE802154_SEC_SCF_SECLEVEL_*.
`public uint8_t `[`key_id_mode`](#structieee802154__sec__context_1a4f0f88519f83f7c1e7377c26c28f6c89) | Key mode IEEE802154_SEC_SCF_KEYMODE_*.
`public uint8_t `[`key_index`](#structieee802154__sec__context_1a1be71d2a52a2fd5475f373bba6857685) | Key index.
`public uint8_t `[`key_source`](#structieee802154__sec__context_1aebc41b50f43b485ec6b25b0c7a7c1718) | Key source.
`public uint32_t `[`frame_counter`](#structieee802154__sec__context_1a9523fb9a92550117279d00b3c49349e4) | Own frame counter.
`public `[`ieee802154_sec_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1ga6a22b02c1184f35ca127c34cdbabf42c)` `[`dev`](#structieee802154__sec__context_1a262b0b9641a7f368fffd5c0d3484bc31) | 802.15.4 security dev

## Members

#### `public `[`cipher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcipher__t)` `[`cipher`](#structieee802154__sec__context_1ac801769543e4b8c83c075ceb662d2b0c) 

Cipher context with AES128 interface and key storage.

#### `public uint8_t `[`security_level`](#structieee802154__sec__context_1aef1132bc7937232e79b9affa75ea0f0d) 

Security level IEEE802154_SEC_SCF_SECLEVEL_*.

#### `public uint8_t `[`key_id_mode`](#structieee802154__sec__context_1a4f0f88519f83f7c1e7377c26c28f6c89) 

Key mode IEEE802154_SEC_SCF_KEYMODE_*.

#### `public uint8_t `[`key_index`](#structieee802154__sec__context_1a1be71d2a52a2fd5475f373bba6857685) 

Key index.

#### `public uint8_t `[`key_source`](#structieee802154__sec__context_1aebc41b50f43b485ec6b25b0c7a7c1718) 

Key source.

Content depends on key_id_mode

#### `public uint32_t `[`frame_counter`](#structieee802154__sec__context_1a9523fb9a92550117279d00b3c49349e4) 

Own frame counter.

#### `public `[`ieee802154_sec_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__security_1ga6a22b02c1184f35ca127c34cdbabf42c)` `[`dev`](#structieee802154__sec__context_1a262b0b9641a7f368fffd5c0d3484bc31) 

802.15.4 security dev

# struct `ieee802154_sec_aux_t` 

IEEE 802.15.4 auxiliary security header.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`scf`](#structieee802154__sec__aux__t_1a5340cf65a1a10035346dda057655e809) | Security Control field (SCF)
`public uint32_t `[`fc`](#structieee802154__sec__aux__t_1ac66e9202181e601ac948d95df807445c) | frame counter
`public uint8_t `[`key_id`](#structieee802154__sec__aux__t_1acee5c356e39c75782d4d5a295d003618) | key identifier (0 - 9 bytes) according to key id.

## Members

#### `public uint8_t `[`scf`](#structieee802154__sec__aux__t_1a5340cf65a1a10035346dda057655e809) 

Security Control field (SCF)

Bit 7 Bit 6 Bit 5 Bit 4 Bit 3 Bit 2 Bit 1 Bit 0 +-----+-----+-----+-----+-----+-----+-----+-----+ | security level | key id. mode | fc sup.| ASN | r | r | +-----+-----+-----+-----+-----+-----+-----+-----+

security level: one of IEEE802154_SEC_SCF_SECLEVEL_* key identifier mode: one of IEEE802154_SEC_SCF_KEY_* frame counter suppression: basically always zero because we do not support TSCH right now ASN: basically always zero because we do not support TSCG right now

#### `public uint32_t `[`fc`](#structieee802154__sec__aux__t_1ac66e9202181e601ac948d95df807445c) 

frame counter

#### `public uint8_t `[`key_id`](#structieee802154__sec__aux__t_1acee5c356e39c75782d4d5a295d003618) 

key identifier (0 - 9 bytes) according to key id.

mode

# struct `ieee802154_sec_aux_key_identifier_1_t` 

Content of key_source if key mode is IEEE802154_SEC_SCF_KEYMODE_INDEX.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`key_index`](#structieee802154__sec__aux__key__identifier__1__t_1aa6116107253b28129c0ddb57feb979ac) | Key index of key from originator, defined by key source.

## Members

#### `public uint8_t `[`key_index`](#structieee802154__sec__aux__key__identifier__1__t_1aa6116107253b28129c0ddb57feb979ac) 

Key index of key from originator, defined by key source.

# struct `ieee802154_sec_aux_key_identifier_5_t` 

Content of key_source if key mode is IEEE802154_SEC_SCF_KEYMODE_SHORT_INDEX.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`key_source`](#structieee802154__sec__aux__key__identifier__5__t_1a41a931abb1c43cb18e3f34f1462e07ce) | macPANId concatenated with macShortAddress
`public uint8_t `[`key_index`](#structieee802154__sec__aux__key__identifier__5__t_1ac38eae26d4a7dcc1848a245719661995) | Key index of key from originator, defined by key source.

## Members

#### `public uint8_t `[`key_source`](#structieee802154__sec__aux__key__identifier__5__t_1a41a931abb1c43cb18e3f34f1462e07ce) 

macPANId concatenated with macShortAddress

#### `public uint8_t `[`key_index`](#structieee802154__sec__aux__key__identifier__5__t_1ac38eae26d4a7dcc1848a245719661995) 

Key index of key from originator, defined by key source.

# struct `ieee802154_sec_aux_key_identifier_9_t` 

Content of key_source if key mode is IEEE802154_SEC_SCF_KEYMODE_HW_INDEX.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`key_source`](#structieee802154__sec__aux__key__identifier__9__t_1aeaf85caae4851904ae80d6cf06215b30) | macExtendedAddress
`public uint8_t `[`key_index`](#structieee802154__sec__aux__key__identifier__9__t_1a92e3137a2bf262b27de41cd5fae21523) | Key index of key from originator, defined by key source.

## Members

#### `public uint8_t `[`key_source`](#structieee802154__sec__aux__key__identifier__9__t_1aeaf85caae4851904ae80d6cf06215b30) 

macExtendedAddress

#### `public uint8_t `[`key_index`](#structieee802154__sec__aux__key__identifier__9__t_1a92e3137a2bf262b27de41cd5fae21523) 

Key index of key from originator, defined by key source.

# struct `ieee802154_sec_ccm_nonce_t` 

Format of 13 byte nonce.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`src_addr`](#structieee802154__sec__ccm__nonce__t_1a03d6984c75d6b23a80bd85e617ae5df3) | Source long address.
`public uint32_t `[`frame_counter`](#structieee802154__sec__ccm__nonce__t_1a39349d10733fe102fca5258b0e2f999a) | Frame counter.
`public uint8_t `[`security_level`](#structieee802154__sec__ccm__nonce__t_1a963154bade5b1594e24f4f677df38515) | One of IEEE802154_SEC_SCF_SECLEVEL_*.

## Members

#### `public uint8_t `[`src_addr`](#structieee802154__sec__ccm__nonce__t_1a03d6984c75d6b23a80bd85e617ae5df3) 

Source long address.

#### `public uint32_t `[`frame_counter`](#structieee802154__sec__ccm__nonce__t_1a39349d10733fe102fca5258b0e2f999a) 

Frame counter.

#### `public uint8_t `[`security_level`](#structieee802154__sec__ccm__nonce__t_1a963154bade5b1594e24f4f677df38515) 

One of IEEE802154_SEC_SCF_SECLEVEL_*.

# struct `ieee802154_sec_ccm_block_t` 

Format of 16 byte input block of CCM.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`flags`](#structieee802154__sec__ccm__block__t_1a4f82c5c9b8e391e8b34f5f045bbd2eb7) | Flags field.
`public `[`ieee802154_sec_ccm_nonce_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_security.md#structieee802154__sec__ccm__nonce__t)` `[`nonce`](#structieee802154__sec__ccm__block__t_1adecca9b7574e9decf8990be140167e4c) | Nonce (Number that is only used once)
`public uint16_t `[`counter`](#structieee802154__sec__ccm__block__t_1ae6a756b1f6cc17bca8ff3537c5c64e5d) | Either the length of the actual message (for CBC-MAC) or a block counter (for CTR)

## Members

#### `public uint8_t `[`flags`](#structieee802154__sec__ccm__block__t_1a4f82c5c9b8e391e8b34f5f045bbd2eb7) 

Flags field.

#### `public `[`ieee802154_sec_ccm_nonce_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ieee802154_security.md#structieee802154__sec__ccm__nonce__t)` `[`nonce`](#structieee802154__sec__ccm__block__t_1adecca9b7574e9decf8990be140167e4c) 

Nonce (Number that is only used once)

#### `public uint16_t `[`counter`](#structieee802154__sec__ccm__block__t_1ae6a756b1f6cc17bca8ff3537c5c64e5d) 

Either the length of the actual message (for CBC-MAC) or a block counter (for CTR)

