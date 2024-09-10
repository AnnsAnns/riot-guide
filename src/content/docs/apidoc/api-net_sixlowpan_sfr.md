---
title: api-net_sixlowpan_sfr.md
description: api-net_sixlowpan_sfr.md
---
# group `net_sixlowpan_sfr` 

Provides dispatches for 6LoWPAN selective fragment recovery and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SIXLOWPAN_SFR_GEN_DISP_MASK`](#group__net__sixlowpan__sfr_1gad89850874ff163eb7aad52424c41a4dd)            | Mask for generic dispatch of both selective fragment recovery headers.
`define `[`SIXLOWPAN_SFR_GEN_DISP`](#group__net__sixlowpan__sfr_1gace63811e0a3147844438987138409245)            | generic dispatch for both SFR headers
`define `[`SIXLOWPAN_SFR_ECN`](#group__net__sixlowpan__sfr_1gae5d0c4d5e9276899591f44b6a6daae2c)            | explicit congestion notification flag
`define `[`SIXLOWPAN_SFR_ACK_REQ`](#group__net__sixlowpan__sfr_1ga21ab74a0cfb9a470177fdd4a35f32d0f)            | Acknowledgment request flag (for 8 MSB)
`define `[`SIXLOWPAN_SFR_SEQ_MASK`](#group__net__sixlowpan__sfr_1ga019ff68ef690c1be03c77610fa6da31f)            | Sequence number mask (for 8 MSB)
`define `[`SIXLOWPAN_SFR_SEQ_POS`](#group__net__sixlowpan__sfr_1gad1cd0f87663393fb7f45725ab603359e)            | Sequence number position (for 8 MSB)
`define `[`SIXLOWPAN_SFR_SEQ_MAX`](#group__net__sixlowpan__sfr_1gaef4392dc17eb2505655d89f2072d2f26)            | Maximum value for sequence number.
`define `[`SIXLOWPAN_SFR_FRAG_SIZE_MASK`](#group__net__sixlowpan__sfr_1ga7599d974c3e8b954cf74ad7dcc069fc8)            | Fragment size mask.
`define `[`SIXLOWPAN_SFR_FRAG_SIZE_MAX`](#group__net__sixlowpan__sfr_1ga00250c098e36d67647fc46f3ee998fe5)            | Maximum value for fragment size.
`define `[`SIXLOWPAN_SFR_ACK_BITMAP_SIZE`](#group__net__sixlowpan__sfr_1ga4b471b942ceca9cfdbc9f9a1ba407589)            | Acknowledgment bitmap size in bits.
`public inline static bool `[`sixlowpan_sfr_is`](#group__net__sixlowpan__sfr_1gae9c602f17b7b8182a6d5722e6f9c31ac)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Check if given header is a 6LoWPAN selective fragment recovery header (either RFRAG or RFRAG ACK)
`public inline static void `[`sixlowpan_sfr_set_ecn`](#group__net__sixlowpan__sfr_1ga41a729e2bcd4308d07553d257cb43026)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Set the ECN flag in a 6LoWPAN selective fragment recovery header.
`public inline static void `[`sixlowpan_sfr_clear_ecn`](#group__net__sixlowpan__sfr_1gae8a0c0b95b2e91349910325fc79e1904)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Clear the ECN flag in a 6LoWPAN recoverable fragment header.
`public inline static bool `[`sixlowpan_sfr_ecn`](#group__net__sixlowpan__sfr_1ga4c327b80c4bba5e073f167fc56792329)`(const `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Check if the ECN flag in a 6LoWPAN recoverable fragment header is set.
`public inline static void `[`sixlowpan_sfr_rfrag_set_disp`](#group__net__sixlowpan__sfr_1ga9c636067b5149c47174d8c3e29f80dea)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Initialize 6LoWPAN recoverable fragment dispatch.
`public inline static bool `[`sixlowpan_sfr_rfrag_is`](#group__net__sixlowpan__sfr_1gacf249dcd30eb86625b66ab17dd4ff64a)`(const `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Check if given header is a 6LoWPAN recoverable fragment header.
`public inline static void `[`sixlowpan_sfr_rfrag_set_ack_req`](#group__net__sixlowpan__sfr_1ga455a6bd604fbf993bae55108eff3ed30)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)`            | Set the Acknowledgment request flag in a 6LoWPAN recoverable fragment header.
`public inline static void `[`sixlowpan_sfr_rfrag_clear_ack_req`](#group__net__sixlowpan__sfr_1gafb0763ded378b6969d802035119530e7)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)`            | Clear the Acknowledgment request flag in a 6LoWPAN recoverable fragment header.
`public inline static bool `[`sixlowpan_sfr_rfrag_ack_req`](#group__net__sixlowpan__sfr_1ga39e4730c8ddf7e3cd48a6c590250015c)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)`            | Check if the Acknowledgment request flag in a 6LoWPAN recoverable fragment header is set.
`public inline static void `[`sixlowpan_sfr_rfrag_set_seq`](#group__net__sixlowpan__sfr_1ga674fe7e0f11ce313bf347bf8cc06f8bd)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr,uint8_t seq)`            | Set sequence number in a 6LoWPAN recoverable fragment header.
`public inline static uint8_t `[`sixlowpan_sfr_rfrag_get_seq`](#group__net__sixlowpan__sfr_1gab3435bdb1f2adbce3b6d283746541a80)`(const `[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)`            | Get sequence number from a 6LoWPAN recoverable fragment header.
`public inline static void `[`sixlowpan_sfr_rfrag_set_frag_size`](#group__net__sixlowpan__sfr_1ga619731d0a35ad04706eba817d82c6859)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr,uint16_t frag_size)`            | Set fragment size in a 6LoWPAN recoverable fragment header.
`public inline static uint16_t `[`sixlowpan_sfr_rfrag_get_frag_size`](#group__net__sixlowpan__sfr_1ga6b7ec91cbe720e8c4733dbc2ae406f87)`(const `[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)`            | Get fragment size from a 6LoWPAN recoverable fragment header.
`public inline static void `[`sixlowpan_sfr_rfrag_set_offset`](#group__net__sixlowpan__sfr_1ga16df4a5c1972c1d2b043da10c2806c46)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr,uint16_t offset)`            | Set fragment offset in a 6LoWPAN recoverable fragment header.
`public inline static uint16_t `[`sixlowpan_sfr_rfrag_get_offset`](#group__net__sixlowpan__sfr_1ga2f51dc18a844372dc0c04fc9b98b51c6)`(const `[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)`            | Get fragment offset from a 6LoWPAN recoverable fragment header.
`public inline static void `[`sixlowpan_sfr_ack_set_disp`](#group__net__sixlowpan__sfr_1ga4ac171e1589fca20a46736bb59580c34)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Initialize 6LoWPAN RFRAG acknowledgment dispatch.
`public inline static bool `[`sixlowpan_sfr_ack_is`](#group__net__sixlowpan__sfr_1ga044413003ce21afff280706e526acdf0)`(const `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)`            | Check if given header is a 6LoWPAN RFRAG acknowledgment header.
`struct `[`sixlowpan_sfr_t`](#structsixlowpan__sfr__t) | Generic type for selective fragment recovery headers.
`struct `[`sixlowpan_sfr_rfrag_t`](#structsixlowpan__sfr__rfrag__t) | Recoverable fragment header.
`struct `[`sixlowpan_sfr_ack_t`](#structsixlowpan__sfr__ack__t) | Recoverable fragment (RFRAG) acknowledgment header.

## Members

#### `define `[`SIXLOWPAN_SFR_GEN_DISP_MASK`](#group__net__sixlowpan__sfr_1gad89850874ff163eb7aad52424c41a4dd) 

Mask for generic dispatch of both selective fragment recovery headers.

**See also**: [SIXLOWPAN_SFR_GEN_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1gace63811e0a3147844438987138409245)

**See also**: [SIXLOWPAN_SFR_DISP_MASK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1ga6f7c5124e8d283ac613f41e6e47934e2)

**See also**: [SIXLOWPAN_SFR_RFRAG_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gaa7fc86b44ddd645daf9d108e82f4240a)

**See also**: [SIXLOWPAN_SFR_ACK_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gac0c886efa2c874284ba58e0b504d349a)

#### `define `[`SIXLOWPAN_SFR_GEN_DISP`](#group__net__sixlowpan__sfr_1gace63811e0a3147844438987138409245) 

generic dispatch for both SFR headers

#### `define `[`SIXLOWPAN_SFR_ECN`](#group__net__sixlowpan__sfr_1gae5d0c4d5e9276899591f44b6a6daae2c) 

explicit congestion notification flag

#### `define `[`SIXLOWPAN_SFR_ACK_REQ`](#group__net__sixlowpan__sfr_1ga21ab74a0cfb9a470177fdd4a35f32d0f) 

Acknowledgment request flag (for 8 MSB)

#### `define `[`SIXLOWPAN_SFR_SEQ_MASK`](#group__net__sixlowpan__sfr_1ga019ff68ef690c1be03c77610fa6da31f) 

Sequence number mask (for 8 MSB)

#### `define `[`SIXLOWPAN_SFR_SEQ_POS`](#group__net__sixlowpan__sfr_1gad1cd0f87663393fb7f45725ab603359e) 

Sequence number position (for 8 MSB)

#### `define `[`SIXLOWPAN_SFR_SEQ_MAX`](#group__net__sixlowpan__sfr_1gaef4392dc17eb2505655d89f2072d2f26) 

Maximum value for sequence number.

#### `define `[`SIXLOWPAN_SFR_FRAG_SIZE_MASK`](#group__net__sixlowpan__sfr_1ga7599d974c3e8b954cf74ad7dcc069fc8) 

Fragment size mask.

#### `define `[`SIXLOWPAN_SFR_FRAG_SIZE_MAX`](#group__net__sixlowpan__sfr_1ga00250c098e36d67647fc46f3ee998fe5) 

Maximum value for fragment size.

#### `define `[`SIXLOWPAN_SFR_ACK_BITMAP_SIZE`](#group__net__sixlowpan__sfr_1ga4b471b942ceca9cfdbc9f9a1ba407589) 

Acknowledgment bitmap size in bits.

#### `public inline static bool `[`sixlowpan_sfr_is`](#group__net__sixlowpan__sfr_1gae9c602f17b7b8182a6d5722e6f9c31ac)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Check if given header is a 6LoWPAN selective fragment recovery header (either RFRAG or RFRAG ACK)

**See also**: [SIXLOWPAN_SFR_RFRAG_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gaa7fc86b44ddd645daf9d108e82f4240a)

#### Parameters
* `hdr` The 6LoWPAN selective fragment recovery header to check

return true, if `hdr` is a 6LoWPAN selective fragment recovery header return false, if `hdr` is not a 6LoWPAN selective fragment recovery header

#### `public inline static void `[`sixlowpan_sfr_set_ecn`](#group__net__sixlowpan__sfr_1ga41a729e2bcd4308d07553d257cb43026)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Set the ECN flag in a 6LoWPAN selective fragment recovery header.

#### Parameters
* `hdr` A 6LoWPAN selective fragment recovery header

#### `public inline static void `[`sixlowpan_sfr_clear_ecn`](#group__net__sixlowpan__sfr_1gae8a0c0b95b2e91349910325fc79e1904)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Clear the ECN flag in a 6LoWPAN recoverable fragment header.

#### Parameters
* `hdr` A 6LoWPAN selective fragment recovery header

#### `public inline static bool `[`sixlowpan_sfr_ecn`](#group__net__sixlowpan__sfr_1ga4c327b80c4bba5e073f167fc56792329)`(const `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Check if the ECN flag in a 6LoWPAN recoverable fragment header is set.

#### Parameters
* `hdr` A 6LoWPAN selective fragment recovery header

return true, if ECN flag in `hdr` is set return false, if ECN flag in `hdr` is cleared

#### `public inline static void `[`sixlowpan_sfr_rfrag_set_disp`](#group__net__sixlowpan__sfr_1ga9c636067b5149c47174d8c3e29f80dea)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Initialize 6LoWPAN recoverable fragment dispatch.

**See also**: [SIXLOWPAN_SFR_RFRAG_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gaa7fc86b44ddd645daf9d108e82f4240a)

#### Parameters
* `hdr` A 6LoWPAN selective fragment recovery header

#### `public inline static bool `[`sixlowpan_sfr_rfrag_is`](#group__net__sixlowpan__sfr_1gacf249dcd30eb86625b66ab17dd4ff64a)`(const `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Check if given header is a 6LoWPAN recoverable fragment header.

**See also**: [SIXLOWPAN_SFR_RFRAG_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gaa7fc86b44ddd645daf9d108e82f4240a)

#### Parameters
* `hdr` The 6LoWPAN selective fragment recovery header to check

return true, if `hdr` is a 6LoWPAN recoverable fragment header return false, if `hdr` is not a 6LoWPAN recoverable fragment header

#### `public inline static void `[`sixlowpan_sfr_rfrag_set_ack_req`](#group__net__sixlowpan__sfr_1ga455a6bd604fbf993bae55108eff3ed30)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)` 

Set the Acknowledgment request flag in a 6LoWPAN recoverable fragment header.

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header

#### `public inline static void `[`sixlowpan_sfr_rfrag_clear_ack_req`](#group__net__sixlowpan__sfr_1gafb0763ded378b6969d802035119530e7)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)` 

Clear the Acknowledgment request flag in a 6LoWPAN recoverable fragment header.

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header

#### `public inline static bool `[`sixlowpan_sfr_rfrag_ack_req`](#group__net__sixlowpan__sfr_1ga39e4730c8ddf7e3cd48a6c590250015c)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)` 

Check if the Acknowledgment request flag in a 6LoWPAN recoverable fragment header is set.

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header

return true, if Acknowledgment request flag in `hdr` is set return false, if Acknowledgment request flag in `hdr` is cleared

#### `public inline static void `[`sixlowpan_sfr_rfrag_set_seq`](#group__net__sixlowpan__sfr_1ga674fe7e0f11ce313bf347bf8cc06f8bd)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr,uint8_t seq)` 

Set sequence number in a 6LoWPAN recoverable fragment header.

`seq <= SIXLOWPAN_SFR_SEQ_MAX`

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header 

* `seq` The sequence number to set. Must be lesser or equal to [SIXLOWPAN_SFR_SEQ_MAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1gaef4392dc17eb2505655d89f2072d2f26).

#### `public inline static uint8_t `[`sixlowpan_sfr_rfrag_get_seq`](#group__net__sixlowpan__sfr_1gab3435bdb1f2adbce3b6d283746541a80)`(const `[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)` 

Get sequence number from a 6LoWPAN recoverable fragment header.

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header

#### Returns
The sequence number of the 6LoWPAN recoverable fragment

#### `public inline static void `[`sixlowpan_sfr_rfrag_set_frag_size`](#group__net__sixlowpan__sfr_1ga619731d0a35ad04706eba817d82c6859)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr,uint16_t frag_size)` 

Set fragment size in a 6LoWPAN recoverable fragment header.

`frag_size <= SIXLOWPAN_SFR_FRAG_SIZE_MAX`

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header 

* `frag_size` The fragment size to set. Must be lesser or equal to [SIXLOWPAN_SFR_FRAG_SIZE_MAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga00250c098e36d67647fc46f3ee998fe5).

#### `public inline static uint16_t `[`sixlowpan_sfr_rfrag_get_frag_size`](#group__net__sixlowpan__sfr_1ga6b7ec91cbe720e8c4733dbc2ae406f87)`(const `[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)` 

Get fragment size from a 6LoWPAN recoverable fragment header.

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header

#### Returns
The fragment size of the 6LoWPAN recoverable fragment

#### `public inline static void `[`sixlowpan_sfr_rfrag_set_offset`](#group__net__sixlowpan__sfr_1ga16df4a5c1972c1d2b043da10c2806c46)`(`[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr,uint16_t offset)` 

Set fragment offset in a 6LoWPAN recoverable fragment header.

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header 

* `offset` The fragment offset to set.

#### `public inline static uint16_t `[`sixlowpan_sfr_rfrag_get_offset`](#group__net__sixlowpan__sfr_1ga2f51dc18a844372dc0c04fc9b98b51c6)`(const `[`sixlowpan_sfr_rfrag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__rfrag__t)` * hdr)` 

Get fragment offset from a 6LoWPAN recoverable fragment header.

#### Parameters
* `hdr` A 6LoWPAN recoverable fragment header

#### Returns
The fragment offset of the 6LoWPAN recoverable fragment

#### `public inline static void `[`sixlowpan_sfr_ack_set_disp`](#group__net__sixlowpan__sfr_1ga4ac171e1589fca20a46736bb59580c34)`(`[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Initialize 6LoWPAN RFRAG acknowledgment dispatch.

**See also**: [SIXLOWPAN_SFR_ACK_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gac0c886efa2c874284ba58e0b504d349a)

#### Parameters
* `hdr` A 6LoWPAN selective fragment recovery header

#### `public inline static bool `[`sixlowpan_sfr_ack_is`](#group__net__sixlowpan__sfr_1ga044413003ce21afff280706e526acdf0)`(const `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` * hdr)` 

Check if given header is a 6LoWPAN RFRAG acknowledgment header.

**See also**: [SIXLOWPAN_SFR_ACK_DISP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan_1gac0c886efa2c874284ba58e0b504d349a)

#### Parameters
* `hdr` The 6LoWPAN selective fragment recovery header to check

return true, if `hdr` is a 6LoWPAN RFRAG acknowledgment header return false, if `hdr` is not a 6LoWPAN RFRAG acknowledgment header

# struct `sixlowpan_sfr_t` 

Generic type for selective fragment recovery headers.

**See also**: [RFC 8931, section 5](https://tools.ietf.org/html/rfc8931#section-5)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`disp_ecn`](#structsixlowpan__sfr__t_1a1f12f82c7c739f5498c3698eb34a8733) | Dispatch and explicit congestion notification (ECN) flag.
`public uint8_t `[`tag`](#structsixlowpan__sfr__t_1a94cba4de0afdf685e572f60e9f4852e7) | Datagram tag.

## Members

#### `public uint8_t `[`disp_ecn`](#structsixlowpan__sfr__t_1a1f12f82c7c739f5498c3698eb34a8733) 

Dispatch and explicit congestion notification (ECN) flag.

In network byte-order the 7 most significant bits are the dispatch (7 bits) and the least significant bit is the ECN flag: +-+-+-+-+-+-+-+-+
|  Dispatch   |E|
+-+-+-+-+-+-+-+-+
 For [sixlowpan_sfr_ack_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__ack__t) the ECN flag represents the ECN echo flag.

This module provides helper functions to set, get, check these fields accordingly:

* [sixlowpan_sfr_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1gae9c602f17b7b8182a6d5722e6f9c31ac)

* [sixlowpan_sfr_set_ecn()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga41a729e2bcd4308d07553d257cb43026)

* [sixlowpan_sfr_clear_ecn()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1gae8a0c0b95b2e91349910325fc79e1904)

* [sixlowpan_sfr_ecn()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga4c327b80c4bba5e073f167fc56792329)

* [sixlowpan_sfr_rfrag_set_disp()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga9c636067b5149c47174d8c3e29f80dea)

* [sixlowpan_sfr_rfrag_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1gacf249dcd30eb86625b66ab17dd4ff64a)

* [sixlowpan_sfr_ack_set_disp()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga4ac171e1589fca20a46736bb59580c34)

* [sixlowpan_sfr_ack_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga044413003ce21afff280706e526acdf0)

#### `public uint8_t `[`tag`](#structsixlowpan__sfr__t_1a94cba4de0afdf685e572f60e9f4852e7) 

Datagram tag.

# struct `sixlowpan_sfr_rfrag_t` 

Recoverable fragment header.

**See also**: [RFC 8931, section 5.1](https://tools.ietf.org/html/rfc8931#section-5.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` `[`base`](#structsixlowpan__sfr__rfrag__t_1a24b2aaf9f19e38323d14d7b9230a3656) | generic part
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ar_seq_fs`](#structsixlowpan__sfr__rfrag__t_1a882deb6d57918e241a18e0145ec2e8b9) | Acknowledgment request flag, sequence number, and fragment size.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`offset`](#structsixlowpan__sfr__rfrag__t_1a1e3238e61d61f8c8f6bae21b9fda7489) | Fragment offset.

## Members

#### `public `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` `[`base`](#structsixlowpan__sfr__rfrag__t_1a24b2aaf9f19e38323d14d7b9230a3656) 

generic part

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ar_seq_fs`](#structsixlowpan__sfr__rfrag__t_1a882deb6d57918e241a18e0145ec2e8b9) 

Acknowledgment request flag, sequence number, and fragment size.

In network byte-order the most significant bit is the acknowledgment request flag, the second to sixth most significant bits are the sequence number (5 bits), and the 10 least significant bits are the fragment size (10 bits): +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|X| sequence|   fragment_size   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 This module provides helper functions to set, get, check these fields accordingly:

* [sixlowpan_sfr_rfrag_set_ack_req()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga455a6bd604fbf993bae55108eff3ed30)

* [sixlowpan_sfr_rfrag_clear_ack_req()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1gafb0763ded378b6969d802035119530e7)

* [sixlowpan_sfr_rfrag_ack_req()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga39e4730c8ddf7e3cd48a6c590250015c)

* [sixlowpan_sfr_rfrag_set_seq()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga674fe7e0f11ce313bf347bf8cc06f8bd)

* [sixlowpan_sfr_rfrag_get_seq()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1gab3435bdb1f2adbce3b6d283746541a80)

* [sixlowpan_sfr_rfrag_set_frag_size()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga619731d0a35ad04706eba817d82c6859)

* [sixlowpan_sfr_rfrag_get_frag_size()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga6b7ec91cbe720e8c4733dbc2ae406f87)

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`offset`](#structsixlowpan__sfr__rfrag__t_1a1e3238e61d61f8c8f6bae21b9fda7489) 

Fragment offset.

This module provides helper functions to set, get, check these fields accordingly:

* [sixlowpan_sfr_rfrag_set_offset()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga16df4a5c1972c1d2b043da10c2806c46)

* [sixlowpan_sfr_rfrag_get_offset()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga2f51dc18a844372dc0c04fc9b98b51c6)

# struct `sixlowpan_sfr_ack_t` 

Recoverable fragment (RFRAG) acknowledgment header.

**See also**: [RFC 8931, section 5.2](https://tools.ietf.org/html/rfc8931#section-5.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` `[`base`](#structsixlowpan__sfr__ack__t_1a0db410aaedbfab45b4910b4652ff7647) | generic part
`public  `[`BITFIELD`](#structsixlowpan__sfr__ack__t_1a9a491edc42dfafb1d7638c7759d2241f)`(bitmap,`[`SIXLOWPAN_SFR_ACK_BITMAP_SIZE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga4b471b942ceca9cfdbc9f9a1ba407589)`)` | RFRAG acknowledgment bitmap.

## Members

#### `public `[`sixlowpan_sfr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_sfr.md#structsixlowpan__sfr__t)` `[`base`](#structsixlowpan__sfr__ack__t_1a0db410aaedbfab45b4910b4652ff7647) 

generic part

#### `public  `[`BITFIELD`](#structsixlowpan__sfr__ack__t_1a9a491edc42dfafb1d7638c7759d2241f)`(bitmap,`[`SIXLOWPAN_SFR_ACK_BITMAP_SIZE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga4b471b942ceca9cfdbc9f9a1ba407589)`)` 

RFRAG acknowledgment bitmap.

