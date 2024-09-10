---
title: api-net_lorawan_hdr.md
description: api-net_lorawan_hdr.md
---
# group `net_lorawan_hdr` 

LoRaWAN header types and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LORAWAN_HDR_MTYPE_MASK`](#group__net__lorawan__hdr_1ga63f49512ccc16141a966dfe38a2ed412)            | MType mask.
`define `[`LORAWAN_HDR_MTYPE_POS`](#group__net__lorawan__hdr_1gaa9788e8f7112689afff54173c13cb958)            | MType position.
`define `[`LORAWAN_HDR_MAJOR_MASK`](#group__net__lorawan__hdr_1gaa26049bb055718a57b0f82e3d67efc5a)            | Major version mask.
`define `[`LORAWAN_HDR_MAJOR_POS`](#group__net__lorawan__hdr_1ga01960277774a8fecec6d36ebd2659663)            | Major version position.
`define `[`LORAWAN_HDR_ADR_MASK`](#group__net__lorawan__hdr_1ga244709f11e063db215eb245671be5311)            | ADR mask.
`define `[`LORAWAN_HDR_ADR_POS`](#group__net__lorawan__hdr_1ga56936389c18f785fc2b314f134e10aef)            | ADR position.
`define `[`LORAWAN_HDR_ADR_ACK_MASK`](#group__net__lorawan__hdr_1ga3b6c921febabd4f25dceb8cecfa767de)            | ADR ACK bit mask.
`define `[`LORAWAN_HDR_ADR_ACK_POS`](#group__net__lorawan__hdr_1ga245193dde67713e564afb08c4561c653)            | ADR ACK bit position.
`define `[`LORAWAN_HDR_ACK_MASK`](#group__net__lorawan__hdr_1ga7a360abd6eac756e2a326ab6af6e5ad4)            | ACK bit mask.
`define `[`LORAWAN_HDR_ACK_POS`](#group__net__lorawan__hdr_1ga75ea743b687067fa0b9ea08def1c9732)            | ACK bit position.
`define `[`LORAWAN_HDR_FRAME_PENDING_MASK`](#group__net__lorawan__hdr_1ga8d89220a60d068b1e6d4a42073c51941)            | Frame pending bit mask.
`define `[`LORAWAN_HDR_FRAME_PENDING_POS`](#group__net__lorawan__hdr_1ga15f805c56cb2d09b1135f646a01ddefa)            | Frame pending bit position.
`define `[`LORAWAN_HDR_FOPTS_LEN_MASK`](#group__net__lorawan__hdr_1gacba250a2c7a461118e1b8160d66958d7)            | Frame options mask.
`define `[`LORAWAN_HDR_FOPTS_LEN_POS`](#group__net__lorawan__hdr_1ga497b525eb58ebc24f92d2f70a3b6784e)            | Frame options position.
`define `[`LORAWAN_JA_HDR_OPTNEG_MASK`](#group__net__lorawan__hdr_1ga3fa411d01a0bab885ea659b3737be4a2)            | OptNeg bit mask.
`define `[`LORAWAN_JA_HDR_OPTNEG_POS`](#group__net__lorawan__hdr_1ga4bdf68efb82b9d2d75002e451c5c9b4d)            | OptNeg bit position.
`public inline static void `[`lorawan_hdr_set_mtype`](#group__net__lorawan__hdr_1gadf5189615c2b34fb15a90d3103d5edb1)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,uint8_t mtype)`            | Set LoRaWAN header MType.
`public inline static uint8_t `[`lorawan_hdr_get_mtype`](#group__net__lorawan__hdr_1ga239f3d9341325f90b5c9f66272436819)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)`            | Get LoRaWAN header MType.
`public inline static void `[`lorawan_hdr_set_maj`](#group__net__lorawan__hdr_1ga4863033e84df170b55cd159daf5cadbc)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,uint8_t maj)`            | Set LoRaWAN major version.
`public inline static uint8_t `[`lorawan_hdr_get_maj`](#group__net__lorawan__hdr_1ga2454fcdc9f542fe832b55ceb705f474b)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)`            | Get LoRaWAN major version.
`public inline static void `[`lorawan_hdr_set_adr`](#group__net__lorawan__hdr_1gac2b779f2a1209e989ad11fec5407a6b1)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool adr)`            | Set LoRaWAN header Adaptive Data Rate bit.
`public inline static bool `[`lorawan_hdr_get_adr`](#group__net__lorawan__hdr_1ga2c076ba77ba454a0a5015a99029a1341)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)`            | Get LoRaWAN header Adaptive Data Rate bit.
`public inline static void `[`lorawan_hdr_set_adr_ack_req`](#group__net__lorawan__hdr_1ga52912f66c516126a73734930c55155ab)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool adr_ack_req)`            | Set LoRaWAN header ADR ACK request bit.
`public inline static bool `[`lorawan_hdr_get_adr_ack_req`](#group__net__lorawan__hdr_1gab2755970ced17bd75fc01d40fc211cd5)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)`            | Get LoRaWAN header ADR ACK request bit.
`public inline static void `[`lorawan_hdr_set_ack`](#group__net__lorawan__hdr_1ga181ac210182a479fa4241a49bc487450)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool ack)`            | Set LoRaWAN header ACK bit.
`public inline static bool `[`lorawan_hdr_get_ack`](#group__net__lorawan__hdr_1gaa06b1e30f5a1cec5ac0e281300dfcb4c)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)`            | Get LoRaWAN header ACK bit.
`public inline static void `[`lorawan_hdr_set_frame_pending`](#group__net__lorawan__hdr_1ga21362a537147be5ae738763609669146)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool frame_pending)`            | Set LoRaWAN header frame pending bit.
`public inline static bool `[`lorawan_hdr_get_frame_pending`](#group__net__lorawan__hdr_1ga62fcd92ee22f0e67c8867988216624f9)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)`            | Get LoRaWAN header frame pending bit.
`public inline static void `[`lorawan_hdr_set_frame_opts_len`](#group__net__lorawan__hdr_1gacbd4ff5fe62efa357d14f816d1322ef0)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,uint8_t len)`            | Set LoRaWAN header FOpts length.
`public inline static uint8_t `[`lorawan_hdr_get_frame_opts_len`](#group__net__lorawan__hdr_1gaf5f6642d81e06ba54f5e8987aa1fa9bd)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)`            | Get LoRaWAN header FOps length.
`public inline static bool `[`lorawan_ja_hdr_get_optneg`](#group__net__lorawan__hdr_1ga38e91626e5de8d791790c8913df655db)`(`[`lorawan_join_accept_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__join__accept__t)` * ja_hdr)`            | Get LoRaWAN join accept message OptNeg bit.
`struct `[`lorawan_hdr_t`](#structlorawan__hdr__t) | Data type to represent a LoRaWAN packet header.
`struct `[`lorawan_join_request_t`](#structlorawan__join__request__t) | Join request packet representation.
`struct `[`lorawan_join_accept_t`](#structlorawan__join__accept__t) | Join accept packet representation.

## Members

#### `define `[`LORAWAN_HDR_MTYPE_MASK`](#group__net__lorawan__hdr_1ga63f49512ccc16141a966dfe38a2ed412) 

MType mask.

#### `define `[`LORAWAN_HDR_MTYPE_POS`](#group__net__lorawan__hdr_1gaa9788e8f7112689afff54173c13cb958) 

MType position.

#### `define `[`LORAWAN_HDR_MAJOR_MASK`](#group__net__lorawan__hdr_1gaa26049bb055718a57b0f82e3d67efc5a) 

Major version mask.

#### `define `[`LORAWAN_HDR_MAJOR_POS`](#group__net__lorawan__hdr_1ga01960277774a8fecec6d36ebd2659663) 

Major version position.

#### `define `[`LORAWAN_HDR_ADR_MASK`](#group__net__lorawan__hdr_1ga244709f11e063db215eb245671be5311) 

ADR mask.

#### `define `[`LORAWAN_HDR_ADR_POS`](#group__net__lorawan__hdr_1ga56936389c18f785fc2b314f134e10aef) 

ADR position.

#### `define `[`LORAWAN_HDR_ADR_ACK_MASK`](#group__net__lorawan__hdr_1ga3b6c921febabd4f25dceb8cecfa767de) 

ADR ACK bit mask.

#### `define `[`LORAWAN_HDR_ADR_ACK_POS`](#group__net__lorawan__hdr_1ga245193dde67713e564afb08c4561c653) 

ADR ACK bit position.

#### `define `[`LORAWAN_HDR_ACK_MASK`](#group__net__lorawan__hdr_1ga7a360abd6eac756e2a326ab6af6e5ad4) 

ACK bit mask.

#### `define `[`LORAWAN_HDR_ACK_POS`](#group__net__lorawan__hdr_1ga75ea743b687067fa0b9ea08def1c9732) 

ACK bit position.

#### `define `[`LORAWAN_HDR_FRAME_PENDING_MASK`](#group__net__lorawan__hdr_1ga8d89220a60d068b1e6d4a42073c51941) 

Frame pending bit mask.

#### `define `[`LORAWAN_HDR_FRAME_PENDING_POS`](#group__net__lorawan__hdr_1ga15f805c56cb2d09b1135f646a01ddefa) 

Frame pending bit position.

#### `define `[`LORAWAN_HDR_FOPTS_LEN_MASK`](#group__net__lorawan__hdr_1gacba250a2c7a461118e1b8160d66958d7) 

Frame options mask.

#### `define `[`LORAWAN_HDR_FOPTS_LEN_POS`](#group__net__lorawan__hdr_1ga497b525eb58ebc24f92d2f70a3b6784e) 

Frame options position.

#### `define `[`LORAWAN_JA_HDR_OPTNEG_MASK`](#group__net__lorawan__hdr_1ga3fa411d01a0bab885ea659b3737be4a2) 

OptNeg bit mask.

#### `define `[`LORAWAN_JA_HDR_OPTNEG_POS`](#group__net__lorawan__hdr_1ga4bdf68efb82b9d2d75002e451c5c9b4d) 

OptNeg bit position.

#### `public inline static void `[`lorawan_hdr_set_mtype`](#group__net__lorawan__hdr_1gadf5189615c2b34fb15a90d3103d5edb1)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,uint8_t mtype)` 

Set LoRaWAN header MType.

#### Parameters
* `hdr` LoRaWAN hdr 

* `mtype` desired MType

#### `public inline static uint8_t `[`lorawan_hdr_get_mtype`](#group__net__lorawan__hdr_1ga239f3d9341325f90b5c9f66272436819)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)` 

Get LoRaWAN header MType.

#### Parameters
* `hdr` LoRaWAN hdr

#### Returns
mtype of the packet

#### `public inline static void `[`lorawan_hdr_set_maj`](#group__net__lorawan__hdr_1ga4863033e84df170b55cd159daf5cadbc)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,uint8_t maj)` 

Set LoRaWAN major version.

#### Parameters
* `hdr` LoRaWAN header 

* `maj` major version

#### `public inline static uint8_t `[`lorawan_hdr_get_maj`](#group__net__lorawan__hdr_1ga2454fcdc9f542fe832b55ceb705f474b)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)` 

Get LoRaWAN major version.

#### Parameters
* `hdr` LoRaWAN header

#### Returns
major version of the packet

#### `public inline static void `[`lorawan_hdr_set_adr`](#group__net__lorawan__hdr_1gac2b779f2a1209e989ad11fec5407a6b1)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool adr)` 

Set LoRaWAN header Adaptive Data Rate bit.

#### Parameters
* `hdr` LoRaWAN header 

* `adr` value of the ADR bit

#### `public inline static bool `[`lorawan_hdr_get_adr`](#group__net__lorawan__hdr_1ga2c076ba77ba454a0a5015a99029a1341)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)` 

Get LoRaWAN header Adaptive Data Rate bit.

#### Parameters
* `hdr` LoRaWAN header

#### Returns
the value of the ADR bit

#### `public inline static void `[`lorawan_hdr_set_adr_ack_req`](#group__net__lorawan__hdr_1ga52912f66c516126a73734930c55155ab)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool adr_ack_req)` 

Set LoRaWAN header ADR ACK request bit.

#### Parameters
* `hdr` LoRaWAN header 

* `adr_ack_req` value of the ADR ACK request bit

#### `public inline static bool `[`lorawan_hdr_get_adr_ack_req`](#group__net__lorawan__hdr_1gab2755970ced17bd75fc01d40fc211cd5)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)` 

Get LoRaWAN header ADR ACK request bit.

#### Parameters
* `hdr` LoRaWAN header

#### Returns
the value of ADR ACK request bit

#### `public inline static void `[`lorawan_hdr_set_ack`](#group__net__lorawan__hdr_1ga181ac210182a479fa4241a49bc487450)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool ack)` 

Set LoRaWAN header ACK bit.

#### Parameters
* `hdr` LoRaWAN header 

* `ack` value of the ACK bit

#### `public inline static bool `[`lorawan_hdr_get_ack`](#group__net__lorawan__hdr_1gaa06b1e30f5a1cec5ac0e281300dfcb4c)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)` 

Get LoRaWAN header ACK bit.

#### Parameters
* `hdr` LoRaWAN header

#### Returns
value of the ACK bit

#### `public inline static void `[`lorawan_hdr_set_frame_pending`](#group__net__lorawan__hdr_1ga21362a537147be5ae738763609669146)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,bool frame_pending)` 

Set LoRaWAN header frame pending bit.

#### Parameters
* `hdr` LoRaWAN header 

* `frame_pending` value of the frame pending bit

#### `public inline static bool `[`lorawan_hdr_get_frame_pending`](#group__net__lorawan__hdr_1ga62fcd92ee22f0e67c8867988216624f9)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)` 

Get LoRaWAN header frame pending bit.

#### Parameters
* `hdr` LoRaWAN header

#### Returns
value of the frame pending bit

#### `public inline static void `[`lorawan_hdr_set_frame_opts_len`](#group__net__lorawan__hdr_1gacbd4ff5fe62efa357d14f816d1322ef0)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr,uint8_t len)` 

Set LoRaWAN header FOpts length.

#### Parameters
* `hdr` LoRaWAN header 

* `len` length of the piggybacked FOpts

#### `public inline static uint8_t `[`lorawan_hdr_get_frame_opts_len`](#group__net__lorawan__hdr_1gaf5f6642d81e06ba54f5e8987aa1fa9bd)`(`[`lorawan_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__hdr__t)` * hdr)` 

Get LoRaWAN header FOps length.

#### Parameters
* `hdr` LoRaWAN header

#### Returns
length of piggybacked FOpts

#### `public inline static bool `[`lorawan_ja_hdr_get_optneg`](#group__net__lorawan__hdr_1ga38e91626e5de8d791790c8913df655db)`(`[`lorawan_join_accept_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_lorawan_hdr.md#structlorawan__join__accept__t)` * ja_hdr)` 

Get LoRaWAN join accept message OptNeg bit.

#### Parameters
* `ja_hdr` Join accept message header

#### Returns
value of the OptNeg bit

# struct `lorawan_hdr_t` 

Data type to represent a LoRaWAN packet header.

This definition includes MHDR and FHDR in the same structure.
     The structure of the header is as follows:

```cpp
                     1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
|Mtype| RFU |Maj|           LoRaWAN Address                   ...
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
...             | Frame Control |         Frame Counter         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

**See also**: [LoRaWAN spcefication, section 4 ](https://lora-alliance.org/sites/default/files/2018-07/lorawan1.0.3.pdf)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`mt_maj`](#structlorawan__hdr__t_1a8df3c3d50da6fbd63ac591ebcdaa3da4) | message type and major version
`public `[`le_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint32__t)` `[`addr`](#structlorawan__hdr__t_1acef0db00fa615495160708066b9252af) | 32 bit LoRaWAN address
`public uint8_t `[`fctrl`](#structlorawan__hdr__t_1ab472735973ac1f3affcb4579a52624c0) | frame control
`public `[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` `[`fcnt`](#structlorawan__hdr__t_1a4da27db80dcc3700f92f4f56a3615db4) | frame counter

## Members

#### `public uint8_t `[`mt_maj`](#structlorawan__hdr__t_1a8df3c3d50da6fbd63ac591ebcdaa3da4) 

message type and major version

The message type are the 3 most significant bytes and the major version are the 2 less significant bytes. There are 3 bytes in the middle reserved for future usage. This module provides helper functions to set and get:

* [lorawan_hdr_set_mtype()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__lorawan__hdr_1gadf5189615c2b34fb15a90d3103d5edb1)

* [lorawan_hdr_get_mtype()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__lorawan__hdr_1ga239f3d9341325f90b5c9f66272436819)

* [lorawan_hdr_set_maj()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__lorawan__hdr_1ga4863033e84df170b55cd159daf5cadbc)

* [lorawan_hdr_get_maj()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__lorawan__hdr_1ga2454fcdc9f542fe832b55ceb705f474b)

#### `public `[`le_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint32__t)` `[`addr`](#structlorawan__hdr__t_1acef0db00fa615495160708066b9252af) 

32 bit LoRaWAN address

#### `public uint8_t `[`fctrl`](#structlorawan__hdr__t_1ab472735973ac1f3affcb4579a52624c0) 

frame control

#### `public `[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` `[`fcnt`](#structlorawan__hdr__t_1a4da27db80dcc3700f92f4f56a3615db4) 

frame counter

# struct `lorawan_join_request_t` 

Join request packet representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`mt_maj`](#structlorawan__join__request__t_1ac61426a28eb14f6a45855497aa0d74cc) | mtype and major version holder
`public `[`le_uint64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint64__t)` `[`join_eui`](#structlorawan__join__request__t_1a30b876bd66ac581d06f3a2a6c8dac695) | join EUI.
`public `[`le_uint64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint64__t)` `[`dev_eui`](#structlorawan__join__request__t_1aa93ae3e74e4e982a21a1bdb42ddb7d1d) | device EUI
`public `[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` `[`dev_nonce`](#structlorawan__join__request__t_1aa929d688de73fd36bfb07149e2e41bdd) | device nonce
`public `[`le_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint32__t)` `[`mic`](#structlorawan__join__request__t_1abd458b1b5b21735e186d686d64dfebc8) | message integrity code

## Members

#### `public uint8_t `[`mt_maj`](#structlorawan__join__request__t_1ac61426a28eb14f6a45855497aa0d74cc) 

mtype and major version holder

#### `public `[`le_uint64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint64__t)` `[`join_eui`](#structlorawan__join__request__t_1a30b876bd66ac581d06f3a2a6c8dac695) 

join EUI.

Mapped to app EUI if LoRaWAN 1.0x

#### `public `[`le_uint64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint64__t)` `[`dev_eui`](#structlorawan__join__request__t_1aa93ae3e74e4e982a21a1bdb42ddb7d1d) 

device EUI

#### `public `[`le_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint16__t)` `[`dev_nonce`](#structlorawan__join__request__t_1aa929d688de73fd36bfb07149e2e41bdd) 

device nonce

#### `public `[`le_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#unionle__uint32__t)` `[`mic`](#structlorawan__join__request__t_1abd458b1b5b21735e186d686d64dfebc8) 

message integrity code

# struct `lorawan_join_accept_t` 

Join accept packet representation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`mt_maj`](#structlorawan__join__accept__t_1a992736a3f8513753ae77f9a521999472) | mtype and major version holder
`public uint8_t `[`join_nonce`](#structlorawan__join__accept__t_1a403604eb1f59b1cbe3d1f58f902bfa69) | join nonce.
`public uint8_t `[`net_id`](#structlorawan__join__accept__t_1a65ed980493182db34a3e95ef59c4cff8) | network id
`public uint8_t `[`dev_addr`](#structlorawan__join__accept__t_1a3b2ec1e856cc8fad1a72cf4ef899ee78) | device address
`public uint8_t `[`dl_settings`](#structlorawan__join__accept__t_1a9f8e07956df1c58e030d5b21636cb05f) | downlink settings
`public uint8_t `[`rx_delay`](#structlorawan__join__accept__t_1a952fe8cb32a9afef6502ca2ff60bba2d) | first reception window delay

## Members

#### `public uint8_t `[`mt_maj`](#structlorawan__join__accept__t_1a992736a3f8513753ae77f9a521999472) 

mtype and major version holder

#### `public uint8_t `[`join_nonce`](#structlorawan__join__accept__t_1a403604eb1f59b1cbe3d1f58f902bfa69) 

join nonce.

Mapped to application nonce if LoRaWAN 1.0x

#### `public uint8_t `[`net_id`](#structlorawan__join__accept__t_1a65ed980493182db34a3e95ef59c4cff8) 

network id

#### `public uint8_t `[`dev_addr`](#structlorawan__join__accept__t_1a3b2ec1e856cc8fad1a72cf4ef899ee78) 

device address

#### `public uint8_t `[`dl_settings`](#structlorawan__join__accept__t_1a9f8e07956df1c58e030d5b21636cb05f) 

downlink settings

#### `public uint8_t `[`rx_delay`](#structlorawan__join__accept__t_1a952fe8cb32a9afef6502ca2ff60bba2d) 

first reception window delay

