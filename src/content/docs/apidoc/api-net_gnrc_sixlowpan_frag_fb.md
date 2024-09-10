---
title: api-net_gnrc_sixlowpan_frag_fb.md
description: api-net_gnrc_sixlowpan_frag_fb.md
---
# group `net_gnrc_sixlowpan_frag_fb` 

Buffer for asynchronous 6LoWPAN fragmentation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_SIXLOWPAN_FRAG_FB_SND_MSG`](#group__net__gnrc__sixlowpan__frag__fb_1ga456710e60926a108588624e108ae2f6a)            | Message type for passing one 6LoWPAN fragment down the network stack.
`public void `[`gnrc_sixlowpan_frag_fb_reset`](#group__net__gnrc__sixlowpan__frag__fb_1ga89aef7843e4f629c7a2202aac8d82064)`(void)`            | Reset fragmentation buffer.
`public `[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * `[`gnrc_sixlowpan_frag_fb_get`](#group__net__gnrc__sixlowpan__frag__fb_1gabe23c4ef57db4fcee9839699afcf3035)`(void)`            | Allocates a fragmentation buffer entry.
`public `[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * `[`gnrc_sixlowpan_frag_fb_get_by_tag`](#group__net__gnrc__sixlowpan__frag__fb_1ga62f4eddc066a73bfdf9b8a47b776cb76)`(uint16_t tag)`            | Get an existing fragmentation buffer entry by a given tag.
`public uint16_t `[`gnrc_sixlowpan_frag_fb_next_tag`](#group__net__gnrc__sixlowpan__frag__fb_1gaaadda126d2229db3592a1db06846786a)`(void)`            | Generate a new datagram tag for sending.
`public inline static bool `[`gnrc_sixlowpan_frag_fb_send`](#group__net__gnrc__sixlowpan__frag__fb_1ga74e9d638e364c2a51f6095c415be740c)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)`            | Sends a message to pass a further fragment down the network stack.
`struct `[`gnrc_sixlowpan_frag_fb_t`](#structgnrc__sixlowpan__frag__fb__t) | 6LoWPAN fragmentation buffer entry.

## Members

#### `define `[`GNRC_SIXLOWPAN_FRAG_FB_SND_MSG`](#group__net__gnrc__sixlowpan__frag__fb_1ga456710e60926a108588624e108ae2f6a) 

Message type for passing one 6LoWPAN fragment down the network stack.

#### `public void `[`gnrc_sixlowpan_frag_fb_reset`](#group__net__gnrc__sixlowpan__frag__fb_1ga89aef7843e4f629c7a2202aac8d82064)`(void)` 

Reset fragmentation buffer.

Only available with test

#### `public `[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * `[`gnrc_sixlowpan_frag_fb_get`](#group__net__gnrc__sixlowpan__frag__fb_1gabe23c4ef57db4fcee9839699afcf3035)`(void)` 

Allocates a fragmentation buffer entry.

#### Returns
A fragmentation buffer entry if available 

#### Returns
NULL, otherwise

#### `public `[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * `[`gnrc_sixlowpan_frag_fb_get_by_tag`](#group__net__gnrc__sixlowpan__frag__fb_1ga62f4eddc066a73bfdf9b8a47b776cb76)`(uint16_t tag)` 

Get an existing fragmentation buffer entry by a given tag.

#### Parameters
* `tag` Tag to search for.

#### Returns
a fragmentation buffer entry if one with `tag` exists. 

#### Returns
NULL, if no fragmentation buffer entry can be found.

#### `public uint16_t `[`gnrc_sixlowpan_frag_fb_next_tag`](#group__net__gnrc__sixlowpan__frag__fb_1gaaadda126d2229db3592a1db06846786a)`(void)` 

Generate a new datagram tag for sending.

#### Returns
A new datagram tag.

#### `public inline static bool `[`gnrc_sixlowpan_frag_fb_send`](#group__net__gnrc__sixlowpan__frag__fb_1ga74e9d638e364c2a51f6095c415be740c)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fbuf)` 

Sends a message to pass a further fragment down the network stack.

**See also**: GNRC_SIXLOWPAN_MSG_FRAG_SND

#### Parameters
* `fbuf` A fragmentation buffer entry ] 

#### Returns
true, when the message was sent 

#### Returns
false when sending the message failed.

# struct `gnrc_sixlowpan_frag_fb_t` 

6LoWPAN fragmentation buffer entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__sixlowpan__frag__fb__t_1a22e57218870be84de10b9b2ca1f77186) | Pointer to the IPv6 packet to be fragmented.
`public uint16_t `[`datagram_size`](#structgnrc__sixlowpan__frag__fb__t_1abb6672a07a0af37efe1f85115179536d) | Length of just the (uncompressed) IPv6 packet to be fragmented.
`public uint16_t `[`tag`](#structgnrc__sixlowpan__frag__fb__t_1aae9ef8531bd853720d824adc44988a05) | Tag used for the fragment.
`public uint16_t `[`offset`](#structgnrc__sixlowpan__frag__fb__t_1a05274e8cc9a30009275b83af5a571174) | Offset of the Nth fragment from the beginning of the payload datagram.

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__sixlowpan__frag__fb__t_1a22e57218870be84de10b9b2ca1f77186) 

Pointer to the IPv6 packet to be fragmented.

#### `public uint16_t `[`datagram_size`](#structgnrc__sixlowpan__frag__fb__t_1abb6672a07a0af37efe1f85115179536d) 

Length of just the (uncompressed) IPv6 packet to be fragmented.

With [6LoWPAN selective fragment recovery](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr) this denotes the *compressed form* of the datagram

#### `public uint16_t `[`tag`](#structgnrc__sixlowpan__frag__fb__t_1aae9ef8531bd853720d824adc44988a05) 

Tag used for the fragment.

#### `public uint16_t `[`offset`](#structgnrc__sixlowpan__frag__fb__t_1a05274e8cc9a30009275b83af5a571174) 

Offset of the Nth fragment from the beginning of the payload datagram.

