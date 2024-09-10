---
title: api-net_gnrc_ipv6_ext_frag.md
description: api-net_gnrc_ipv6_ext_frag.md
---
# group `net_gnrc_ipv6_ext_frag` 

GNRC implementation of IPv6 fragmentation extension.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_IPV6_EXT_FRAG_RBUF_GC`](#group__net__gnrc__ipv6__ext__frag_1gad59b693d790bc5797733973dcfcfce47)            | Message type to time reassembly buffer garbage collection.
`define `[`GNRC_IPV6_EXT_FRAG_CONTINUE`](#group__net__gnrc__ipv6__ext__frag_1gab12eb4471300f085c909160c214d907e)            | Message type to continue fragmenting a datagram from a given fragmentation send buffer.
`define `[`GNRC_IPV6_EXT_FRAG_SEND`](#group__net__gnrc__ipv6__ext__frag_1gaf8f65d6ee4c90c47e848f22b0d523306)            | Message type to send a fragment of an IPv6 datagram.
`public void `[`gnrc_ipv6_ext_frag_init`](#group__net__gnrc__ipv6__ext__frag_1ga128e4c47e6d4b7b91cd59d69f1cb33df)`(void)`            | Initializes IPv6 fragmentation and reassembly.
`public void `[`gnrc_ipv6_ext_frag_send_pkt`](#group__net__gnrc__ipv6__ext__frag_1ga3c30b4c3681144f3e49bc2b68d8dba50)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,unsigned path_mtu)`            | Send an IPv6 packet fragmented.
`public void `[`gnrc_ipv6_ext_frag_send`](#group__net__gnrc__ipv6__ext__frag_1ga037fa4db437b66d7a6d3e3468ac02e0d)`(`[`gnrc_ipv6_ext_frag_send_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__send__t)` * snd_buf)`            | (Continue to) fragment packet already in fragmentation send buffer
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_frag_reass`](#group__net__gnrc__ipv6__ext__frag_1ga9554cdcb2ab792d572275afbc8e35fd7)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Reassemble fragmented IPv6 packet.
`public `[`gnrc_ipv6_ext_frag_stats_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__stats__t)` * `[`gnrc_ipv6_ext_frag_stats`](#group__net__gnrc__ipv6__ext__frag_1ga375bf737edba5c28afbf86dbe0929c4f)`(void)`            | Get the current statistics on reassembly and fragmentation.
`struct `[`gnrc_ipv6_ext_frag_limits`](#structgnrc__ipv6__ext__frag__limits) | Data type to describe limits of a single fragment in the reassembly buffer.
`struct `[`gnrc_ipv6_ext_frag_send_t`](#structgnrc__ipv6__ext__frag__send__t) | Fragmentation send buffer type.
`struct `[`gnrc_ipv6_ext_frag_rbuf_t`](#structgnrc__ipv6__ext__frag__rbuf__t) | A reassembly buffer entry.
`struct `[`gnrc_ipv6_ext_frag_stats_t`](#structgnrc__ipv6__ext__frag__stats__t) | Statistics on reassembly and reassembly.

## Members

#### `define `[`GNRC_IPV6_EXT_FRAG_RBUF_GC`](#group__net__gnrc__ipv6__ext__frag_1gad59b693d790bc5797733973dcfcfce47) 

Message type to time reassembly buffer garbage collection.

#### `define `[`GNRC_IPV6_EXT_FRAG_CONTINUE`](#group__net__gnrc__ipv6__ext__frag_1gab12eb4471300f085c909160c214d907e) 

Message type to continue fragmenting a datagram from a given fragmentation send buffer.

Expected type: [gnrc_ipv6_ext_frag_send_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__send__t)

#### `define `[`GNRC_IPV6_EXT_FRAG_SEND`](#group__net__gnrc__ipv6__ext__frag_1gaf8f65d6ee4c90c47e848f22b0d523306) 

Message type to send a fragment of an IPv6 datagram.

Expected type: [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)

#### `public void `[`gnrc_ipv6_ext_frag_init`](#group__net__gnrc__ipv6__ext__frag_1ga128e4c47e6d4b7b91cd59d69f1cb33df)`(void)` 

Initializes IPv6 fragmentation and reassembly.

#### `public void `[`gnrc_ipv6_ext_frag_send_pkt`](#group__net__gnrc__ipv6__ext__frag_1ga3c30b4c3681144f3e49bc2b68d8dba50)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,unsigned path_mtu)` 

Send an IPv6 packet fragmented.

#### Parameters
* `pkt` The IPv6 packet. The packet must have an already prepared [GNRC_NETTYPE_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a591a497a7b4a31427c44c7b24baf17c3) snip as its first snip. The packet must contain at least an IPv6 header and any number of IPv6 extension headers after that. 

* `path_mtu` Path MTU to destination of IPv6 packet.

#### `public void `[`gnrc_ipv6_ext_frag_send`](#group__net__gnrc__ipv6__ext__frag_1ga037fa4db437b66d7a6d3e3468ac02e0d)`(`[`gnrc_ipv6_ext_frag_send_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__send__t)` * snd_buf)` 

(Continue to) fragment packet already in fragmentation send buffer

`snd_buf != NULL`

#### Parameters
* `snd_buf` A fragmentation send buffer entry. May not be NULL.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_frag_reass`](#group__net__gnrc__ipv6__ext__frag_1ga9554cdcb2ab792d572275afbc8e35fd7)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Reassemble fragmented IPv6 packet.

#### Parameters
* `pkt` A fragment of the IPv6 packet to be reassembled containing the fragment header in the first snip.

#### Returns
The reassembled packet when `pkt` completed the reassembly 

#### Returns
NULL, when there are still fragments missing or an error occurred during reassembly

#### `public `[`gnrc_ipv6_ext_frag_stats_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__stats__t)` * `[`gnrc_ipv6_ext_frag_stats`](#group__net__gnrc__ipv6__ext__frag_1ga375bf737edba5c28afbf86dbe0929c4f)`(void)` 

Get the current statistics on reassembly and fragmentation.

#### Returns
The current statistics on reassembly and fragmentation. 

#### Returns
NULL, if module `gnrc_ipv6_ext_frag_stats` is not compiled in.

# struct `gnrc_ipv6_ext_frag_limits` 

Data type to describe limits of a single fragment in the reassembly buffer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`gnrc_ipv6_ext_frag_limits`](#structgnrc__ipv6__ext__frag__limits)` * `[`next`](#structgnrc__ipv6__ext__frag__limits_1a65c8287422e75d0fd09375c939def764) | limits of next fragment
`public uint16_t `[`start`](#structgnrc__ipv6__ext__frag__limits_1abe1bc5396e7fbd7aeb9d4fe3f36802f5) | the start (= offset) of the fragment
`public uint16_t `[`end`](#structgnrc__ipv6__ext__frag__limits_1a18070b57f45628ac14a351b0c89305d9) | the exclusive end (= offset + length) of the fragment

## Members

#### `public struct `[`gnrc_ipv6_ext_frag_limits`](#structgnrc__ipv6__ext__frag__limits)` * `[`next`](#structgnrc__ipv6__ext__frag__limits_1a65c8287422e75d0fd09375c939def764) 

limits of next fragment

#### `public uint16_t `[`start`](#structgnrc__ipv6__ext__frag__limits_1abe1bc5396e7fbd7aeb9d4fe3f36802f5) 

the start (= offset) of the fragment

#### `public uint16_t `[`end`](#structgnrc__ipv6__ext__frag__limits_1a18070b57f45628ac14a351b0c89305d9) 

the exclusive end (= offset + length) of the fragment

# struct `gnrc_ipv6_ext_frag_send_t` 

Fragmentation send buffer type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__ipv6__ext__frag__send__t_1a3c94eb6b09e5aae39d0b7f7f07ab7a6d) | the IPv6 packet to fragment
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`per_frag`](#structgnrc__ipv6__ext__frag__send__t_1a4f8f2bc0fca3384f49a5691c25218041) | per fragment headers
`public uint32_t `[`id`](#structgnrc__ipv6__ext__frag__send__t_1a87b9628ad52986c5cce4019f1f9c1ef8) | the identification for the fragment header
`public uint16_t `[`path_mtu`](#structgnrc__ipv6__ext__frag__send__t_1a74324263d975f951e5af78585e9cb646) | path MTU to destination of [gnrc_ipv6_ext_frag_send_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__send__t_1a3c94eb6b09e5aae39d0b7f7f07ab7a6d)
`public uint16_t `[`offset`](#structgnrc__ipv6__ext__frag__send__t_1aa401735454c925a4a23374b7c5da7a23) | current fragmentation offset

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__ipv6__ext__frag__send__t_1a3c94eb6b09e5aae39d0b7f7f07ab7a6d) 

the IPv6 packet to fragment

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`per_frag`](#structgnrc__ipv6__ext__frag__send__t_1a4f8f2bc0fca3384f49a5691c25218041) 

per fragment headers

#### `public uint32_t `[`id`](#structgnrc__ipv6__ext__frag__send__t_1a87b9628ad52986c5cce4019f1f9c1ef8) 

the identification for the fragment header

#### `public uint16_t `[`path_mtu`](#structgnrc__ipv6__ext__frag__send__t_1a74324263d975f951e5af78585e9cb646) 

path MTU to destination of [gnrc_ipv6_ext_frag_send_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__send__t_1a3c94eb6b09e5aae39d0b7f7f07ab7a6d)

#### `public uint16_t `[`offset`](#structgnrc__ipv6__ext__frag__send__t_1aa401735454c925a4a23374b7c5da7a23) 

current fragmentation offset

# struct `gnrc_ipv6_ext_frag_rbuf_t` 

A reassembly buffer entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__ipv6__ext__frag__rbuf__t_1a0d0509ef3ff3bb5faf6922399f1f2438) | the (partly) reassembled packet
`public `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * `[`ipv6`](#structgnrc__ipv6__ext__frag__rbuf__t_1a4d503d5ea43ccafbbd9afb7cd1df9ba5) | the IPv6 header of [gnrc_ipv6_ext_frag_rbuf_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__rbuf__t_1a0d0509ef3ff3bb5faf6922399f1f2438)
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`limits`](#structgnrc__ipv6__ext__frag__rbuf__t_1a5b2a06a2b2afa36daff6b7847d0c2f68) | The limits of the fragments in the reassembled packet.
`public uint32_t `[`id`](#structgnrc__ipv6__ext__frag__rbuf__t_1a194ebd7b9925f27af1f6b9e087d89a99) | the identification from the fragment headers
`public uint32_t `[`arrival`](#structgnrc__ipv6__ext__frag__rbuf__t_1a6ac2f5a575d6dbc2563370348665d0b7) | arrival time of last received fragment
`public uint16_t `[`pkt_len`](#structgnrc__ipv6__ext__frag__rbuf__t_1a6bf9096630c2bce9938336be437a62d4) | length of [gnrc_ipv6_ext_frag_rbuf_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__rbuf__t_1a0d0509ef3ff3bb5faf6922399f1f2438)
`public uint8_t `[`last`](#structgnrc__ipv6__ext__frag__rbuf__t_1ae9e6a03f265c7df182862e32d338f184) | received last fragment

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__ipv6__ext__frag__rbuf__t_1a0d0509ef3ff3bb5faf6922399f1f2438) 

the (partly) reassembled packet

#### `public `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * `[`ipv6`](#structgnrc__ipv6__ext__frag__rbuf__t_1a4d503d5ea43ccafbbd9afb7cd1df9ba5) 

the IPv6 header of [gnrc_ipv6_ext_frag_rbuf_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__rbuf__t_1a0d0509ef3ff3bb5faf6922399f1f2438)

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`limits`](#structgnrc__ipv6__ext__frag__rbuf__t_1a5b2a06a2b2afa36daff6b7847d0c2f68) 

The limits of the fragments in the reassembled packet.

Members of this list can be cast to gnrc_ipv6_ext_frag_limits_t.

#### `public uint32_t `[`id`](#structgnrc__ipv6__ext__frag__rbuf__t_1a194ebd7b9925f27af1f6b9e087d89a99) 

the identification from the fragment headers

#### `public uint32_t `[`arrival`](#structgnrc__ipv6__ext__frag__rbuf__t_1a6ac2f5a575d6dbc2563370348665d0b7) 

arrival time of last received fragment

#### `public uint16_t `[`pkt_len`](#structgnrc__ipv6__ext__frag__rbuf__t_1a6bf9096630c2bce9938336be437a62d4) 

length of [gnrc_ipv6_ext_frag_rbuf_t::pkt](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_ext_frag.md#structgnrc__ipv6__ext__frag__rbuf__t_1a0d0509ef3ff3bb5faf6922399f1f2438)

#### `public uint8_t `[`last`](#structgnrc__ipv6__ext__frag__rbuf__t_1ae9e6a03f265c7df182862e32d338f184) 

received last fragment

# struct `gnrc_ipv6_ext_frag_stats_t` 

Statistics on reassembly and reassembly.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`rbuf_full`](#structgnrc__ipv6__ext__frag__stats__t_1a480b76a6832fff89f7b69d422261d06d) | counts the number of events where the reassembly buffer is full
`public unsigned `[`frag_full`](#structgnrc__ipv6__ext__frag__stats__t_1abd1033bea86ec30a05861a9751e1ec5e) | counts the number of events that there where no [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) available
`public unsigned `[`datagrams`](#structgnrc__ipv6__ext__frag__stats__t_1a6913161514d2f09ed877bdebbbfa0730) | reassembled datagrams
`public unsigned `[`fragments`](#structgnrc__ipv6__ext__frag__stats__t_1a53a285c0777cb4dc8579aa46c047d156) | total fragments of reassembled fragments

## Members

#### `public unsigned `[`rbuf_full`](#structgnrc__ipv6__ext__frag__stats__t_1a480b76a6832fff89f7b69d422261d06d) 

counts the number of events where the reassembly buffer is full

#### `public unsigned `[`frag_full`](#structgnrc__ipv6__ext__frag__stats__t_1abd1033bea86ec30a05861a9751e1ec5e) 

counts the number of events that there where no [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) available

#### `public unsigned `[`datagrams`](#structgnrc__ipv6__ext__frag__stats__t_1a6913161514d2f09ed877bdebbbfa0730) 

reassembled datagrams

#### `public unsigned `[`fragments`](#structgnrc__ipv6__ext__frag__stats__t_1a53a285c0777cb4dc8579aa46c047d156) 

total fragments of reassembled fragments

