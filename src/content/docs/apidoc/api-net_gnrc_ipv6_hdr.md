---
title: api-net_gnrc_ipv6_hdr.md
description: api-net_gnrc_ipv6_hdr.md
---
# group `net_gnrc_ipv6_hdr` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_hdr_build`](#group__net__gnrc__ipv6__hdr_1gaf1cd3803edcb97066ec8b8ec19f4a2cb)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * payload,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst)`            | Builds an IPv6 header for sending and adds it to the packet buffer.

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_hdr_build`](#group__net__gnrc__ipv6__hdr_1gaf1cd3803edcb97066ec8b8ec19f4a2cb)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * payload,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst)` 

Builds an IPv6 header for sending and adds it to the packet buffer.

Initializes version field with 6, traffic class, flow label, and hop limit with 0, and next header with [PROTNUM_RESERVED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga39e5e549b67c499f796d4c90698c007e).

#### Parameters
* `payload` Payload for the packet. 

* `src` Source address for the header. Can be NULL if not known or required. 

* `dst` Destination address for the header. Can be NULL if not known or required.

#### Returns
The an IPv6 header in packet buffer on success. 

#### Returns
NULL on error.

