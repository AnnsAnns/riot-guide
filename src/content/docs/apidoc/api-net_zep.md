---
title: api-net_zep.md
description: api-net_zep.md
---
# group `net_zep` 

Provides definitions for the ZigBee Encapsulation Protocol (ZEP)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ZEP_PORT_DEFAULT`](#group__net__zep_1gac55ad32b5f993610d5efa1b9e744325f)            | default ZEP port
`define `[`ZEP_V2_TYPE_DATA`](#group__net__zep_1ga166c0b1c3c2fd0168d706025b048ed3b)            | Type == Data for ZEPv2 header.
`define `[`ZEP_V2_TYPE_ACK`](#group__net__zep_1ga733fa2888aad41b9306f966030b77f07)            | Type == Ack for ZEPv2 header.
`define `[`ZEP_LENGTH_MASK`](#group__net__zep_1gaa8255128e30825501f31058dd28c5c11)            | Mask for length field.
`struct `[`zep_hdr_t`](#structzep__hdr__t) | ZEP header definition.
`struct `[`zep_v1_hdr_t`](#structzep__v1__hdr__t) | ZEPv1 header definition.
`struct `[`zep_v2_data_hdr_t`](#structzep__v2__data__hdr__t) | ZEPv2 header definition (type == Data)
`struct `[`zep_v2_ack_hdr_t`](#structzep__v2__ack__hdr__t) | ZEPv2 header definition (type == Ack)

## Members

#### `define `[`ZEP_PORT_DEFAULT`](#group__net__zep_1gac55ad32b5f993610d5efa1b9e744325f) 

default ZEP port

#### `define `[`ZEP_V2_TYPE_DATA`](#group__net__zep_1ga166c0b1c3c2fd0168d706025b048ed3b) 

Type == Data for ZEPv2 header.

#### `define `[`ZEP_V2_TYPE_ACK`](#group__net__zep_1ga733fa2888aad41b9306f966030b77f07) 

Type == Ack for ZEPv2 header.

#### `define `[`ZEP_LENGTH_MASK`](#group__net__zep_1gaa8255128e30825501f31058dd28c5c11) 

Mask for length field.

# struct `zep_hdr_t` 

ZEP header definition.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char `[`preamble`](#structzep__hdr__t_1a354ad4e449f010342dfd8e4172db2a11) | Preamble code (must be "EX")
`public uint8_t `[`version`](#structzep__hdr__t_1a5d660b65b9fb3f5e61ae377271572e2f) | Protocol Version (must be 1 or 2)

## Members

#### `public char `[`preamble`](#structzep__hdr__t_1a354ad4e449f010342dfd8e4172db2a11) 

Preamble code (must be "EX")

#### `public uint8_t `[`version`](#structzep__hdr__t_1a5d660b65b9fb3f5e61ae377271572e2f) 

Protocol Version (must be 1 or 2)

# struct `zep_v1_hdr_t` 

```
struct zep_v1_hdr_t
  : public zep_hdr_t
```  

ZEPv1 header definition.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`zep_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_zep.md#structzep__hdr__t)` `[`hdr`](#structzep__v1__hdr__t_1abaa26609c73cc86c72a36b16c45a6123) | common header fields
`public uint8_t `[`chan`](#structzep__v1__hdr__t_1abd026ee35b5c95559a4eff8967a77d01) | channel ID
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dev`](#structzep__v1__hdr__t_1aa59e53a30e3ac4841919f6b3a3bd1d94) | device ID
`public uint8_t `[`lqi_mode`](#structzep__v1__hdr__t_1a5db0fa2e8d29eea7a91362032d0ec793) | CRC/LQI Mode (0: append LQI to frame, 1: append FCS)
`public uint8_t `[`lqi_val`](#structzep__v1__hdr__t_1a87c062f13c56c980276f51a0c628e8d6) | LQI value.
`public uint8_t `[`resv`](#structzep__v1__hdr__t_1af7bb80d4ac8bc2977b6220cf63231e6a) | reserved field, must always be 0
`public uint8_t `[`length`](#structzep__v1__hdr__t_1af74e75fd39907e2016ed82760cd848e1) | length of the frame

## Members

#### `public `[`zep_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_zep.md#structzep__hdr__t)` `[`hdr`](#structzep__v1__hdr__t_1abaa26609c73cc86c72a36b16c45a6123) 

common header fields

#### `public uint8_t `[`chan`](#structzep__v1__hdr__t_1abd026ee35b5c95559a4eff8967a77d01) 

channel ID

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dev`](#structzep__v1__hdr__t_1aa59e53a30e3ac4841919f6b3a3bd1d94) 

device ID

#### `public uint8_t `[`lqi_mode`](#structzep__v1__hdr__t_1a5db0fa2e8d29eea7a91362032d0ec793) 

CRC/LQI Mode (0: append LQI to frame, 1: append FCS)

#### `public uint8_t `[`lqi_val`](#structzep__v1__hdr__t_1a87c062f13c56c980276f51a0c628e8d6) 

LQI value.

#### `public uint8_t `[`resv`](#structzep__v1__hdr__t_1af7bb80d4ac8bc2977b6220cf63231e6a) 

reserved field, must always be 0

#### `public uint8_t `[`length`](#structzep__v1__hdr__t_1af74e75fd39907e2016ed82760cd848e1) 

length of the frame

# struct `zep_v2_data_hdr_t` 

```
struct zep_v2_data_hdr_t
  : public zep_hdr_t
```  

ZEPv2 header definition (type == Data)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`zep_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_zep.md#structzep__hdr__t)` `[`hdr`](#structzep__v2__data__hdr__t_1a5947cb619490d64e949a4cd1d0af5732) | common header fields
`public uint8_t `[`type`](#structzep__v2__data__hdr__t_1a8a631cd87795e5f1c6659729d9712b0b) | type (must be [ZEP_V2_TYPE_DATA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__zep_1ga166c0b1c3c2fd0168d706025b048ed3b))
`public uint8_t `[`chan`](#structzep__v2__data__hdr__t_1a58240b40aac319a1e668e20001749230) | channel ID
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dev`](#structzep__v2__data__hdr__t_1aaa4faa127e1b3401ad1437aa3f206ecd) | device ID
`public uint8_t `[`lqi_mode`](#structzep__v2__data__hdr__t_1ad760ad4b7ce1416e11d398af4fce1f07) | CRC/LQI Mode.
`public uint8_t `[`lqi_val`](#structzep__v2__data__hdr__t_1a94a8cf715e468a9c7b570e5b54366ebe) | LQI value.
`public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`time`](#structzep__v2__data__hdr__t_1a216bd375b4a6f322ac27eddcf31a6c3c) | NTP timestamp.
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seq`](#structzep__v2__data__hdr__t_1ad0d51188e00591c9ac30fa6140e829c6) | Sequence number.
`public uint8_t `[`resv`](#structzep__v2__data__hdr__t_1a9fab73fb34606ad212c6d67e3ecbc620) | reserved field, must always be 0
`public uint8_t `[`length`](#structzep__v2__data__hdr__t_1ac9f4daeb24eca2803d94330a9d346dd9) | length of the frame

## Members

#### `public `[`zep_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_zep.md#structzep__hdr__t)` `[`hdr`](#structzep__v2__data__hdr__t_1a5947cb619490d64e949a4cd1d0af5732) 

common header fields

#### `public uint8_t `[`type`](#structzep__v2__data__hdr__t_1a8a631cd87795e5f1c6659729d9712b0b) 

type (must be [ZEP_V2_TYPE_DATA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__zep_1ga166c0b1c3c2fd0168d706025b048ed3b))

#### `public uint8_t `[`chan`](#structzep__v2__data__hdr__t_1a58240b40aac319a1e668e20001749230) 

channel ID

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dev`](#structzep__v2__data__hdr__t_1aaa4faa127e1b3401ad1437aa3f206ecd) 

device ID

#### `public uint8_t `[`lqi_mode`](#structzep__v2__data__hdr__t_1ad760ad4b7ce1416e11d398af4fce1f07) 

CRC/LQI Mode.

#### `public uint8_t `[`lqi_val`](#structzep__v2__data__hdr__t_1a94a8cf715e468a9c7b570e5b54366ebe) 

LQI value.

#### `public `[`ntp_timestamp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ntp_packet.md#structntp__timestamp__t)` `[`time`](#structzep__v2__data__hdr__t_1a216bd375b4a6f322ac27eddcf31a6c3c) 

NTP timestamp.

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seq`](#structzep__v2__data__hdr__t_1ad0d51188e00591c9ac30fa6140e829c6) 

Sequence number.

#### `public uint8_t `[`resv`](#structzep__v2__data__hdr__t_1a9fab73fb34606ad212c6d67e3ecbc620) 

reserved field, must always be 0

#### `public uint8_t `[`length`](#structzep__v2__data__hdr__t_1ac9f4daeb24eca2803d94330a9d346dd9) 

length of the frame

# struct `zep_v2_ack_hdr_t` 

```
struct zep_v2_ack_hdr_t
  : public zep_hdr_t
```  

ZEPv2 header definition (type == Ack)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`zep_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_zep.md#structzep__hdr__t)` `[`hdr`](#structzep__v2__ack__hdr__t_1a77b54bd2c8d27be54337a43ee555a991) | common header fields
`public uint8_t `[`type`](#structzep__v2__ack__hdr__t_1aaa8bbaec1ac0f5058f7fa15a18fbb946) | type (must be [ZEP_V2_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__zep_1ga733fa2888aad41b9306f966030b77f07))
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seq`](#structzep__v2__ack__hdr__t_1a46e077133dd45691c5dfe9741c52ab66) | Sequence number.

## Members

#### `public `[`zep_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_zep.md#structzep__hdr__t)` `[`hdr`](#structzep__v2__ack__hdr__t_1a77b54bd2c8d27be54337a43ee555a991) 

common header fields

#### `public uint8_t `[`type`](#structzep__v2__ack__hdr__t_1aaa8bbaec1ac0f5058f7fa15a18fbb946) 

type (must be [ZEP_V2_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__zep_1ga733fa2888aad41b9306f966030b77f07))

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seq`](#structzep__v2__ack__hdr__t_1a46e077133dd45691c5dfe9741c52ab66) 

Sequence number.

