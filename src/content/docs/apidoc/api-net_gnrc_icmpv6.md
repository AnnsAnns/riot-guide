---
title: api-net_gnrc_icmpv6.md
description: api-net_gnrc_icmpv6.md
---
# group `net_gnrc_icmpv6` 

GNRC's implementation of ICMPv6.

**See also**: [RFC 4443 ](https://tools.ietf.org/html/rfc4443)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`gnrc_icmpv6_demux`](#group__net__gnrc__icmpv6_1ga1d1a5415c1369015b67679e79ea381a9)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Demultiplexes a received ICMPv6 packet according to its type field.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_icmpv6_build`](#group__net__gnrc__icmpv6_1ga2ff42b9dc90107b6f5711c35d41a7609)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next,uint8_t type,uint8_t code,size_t size)`            | Builds an ICMPv6 message for sending.
`public int `[`gnrc_icmpv6_calc_csum`](#group__net__gnrc__icmpv6_1ga0bfe3a1fce76419cd4a3018850e77ee7)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)`            | Calculates the checksum for an ICMPv6 packet.

## Members

#### `public void `[`gnrc_icmpv6_demux`](#group__net__gnrc__icmpv6_1ga1d1a5415c1369015b67679e79ea381a9)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Demultiplexes a received ICMPv6 packet according to its type field.

#### Parameters
* `netif` The receiving interface 

* `pkt` The packet to demultiplex.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_icmpv6_build`](#group__net__gnrc__icmpv6_1ga2ff42b9dc90107b6f5711c35d41a7609)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next,uint8_t type,uint8_t code,size_t size)` 

Builds an ICMPv6 message for sending.

#### Parameters
* `next` Next packet snip in the new packet. 

* `type` Type for the ICMPv6 message. 

* `code` Code for the ICMPv6 message. 

* `size` Size of the ICMPv6 message (needs do be > `sizeof(icmpv6_hdr_t)`).

#### Returns
The ICMPv6 message on success 

#### Returns
NULL, on failure

#### `public int `[`gnrc_icmpv6_calc_csum`](#group__net__gnrc__icmpv6_1ga0bfe3a1fce76419cd4a3018850e77ee7)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)` 

Calculates the checksum for an ICMPv6 packet.

#### Parameters
* `hdr` The header the checksum should be calculated for. 

* `pseudo_hdr` The header the pseudo header shall be generated from. NULL if none is needed.

#### Returns
0, on success. 

#### Returns
-EINVAL, if [gnrc_pktsnip_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a8362d0e56cfabedcf51459377c58db59) of `pkt` was not GNRC_NETTYPE_ICMPV6 

#### Returns
-ENOENT, if [gnrc_pktsnip_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a8362d0e56cfabedcf51459377c58db59) of `pseudo_hdr` was not GNRC_NETTYPE_IPV6

