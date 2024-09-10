---
title: api-net_gnrc_sixlowpan_nd.md
description: api-net_gnrc_sixlowpan_nd.md
---
# group `net_gnrc_sixlowpan_nd` 

Neighbor Discovery Optimization for 6LoWPAN.

**See also**: [RFC 6775 ](https://tools.ietf.org/html/rfc6775)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_sixlowpan_nd_opt_ar_build`](#group__net__gnrc__sixlowpan__nd_1ga71fdb0bf9e367133538fdd8e9297e0d5)`(uint8_t status,uint16_t ltime,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the address registration option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_sixlowpan_nd_opt_6ctx_build`](#group__net__gnrc__sixlowpan__nd_1ga146c8a8696fedf2c6e998a53ab76a7e8)`(uint8_t prefix_len,uint8_t flags,uint16_t ltime,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the 6LoWPAN context option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_sixlowpan_nd_opt_abr_build`](#group__net__gnrc__sixlowpan__nd_1gacabb73149cb9d7a144d2e035d8d81141)`(uint32_t version,uint16_t ltime,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * braddr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the authoritative border router option.

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_sixlowpan_nd_opt_ar_build`](#group__net__gnrc__sixlowpan__nd_1ga71fdb0bf9e367133538fdd8e9297e0d5)`(uint8_t status,uint16_t ltime,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * eui64,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the address registration option.

#### Parameters
* `status` Status for the ARO. 

* `ltime` Registration lifetime for the ARO. 

* `eui64` The EUI-64 for the ARO 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The pkt snip list of options, on success 

#### Returns
NULL, if packet buffer is full

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_sixlowpan_nd_opt_6ctx_build`](#group__net__gnrc__sixlowpan__nd_1ga146c8a8696fedf2c6e998a53ab76a7e8)`(uint8_t prefix_len,uint8_t flags,uint16_t ltime,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the 6LoWPAN context option.

#### Parameters
* `prefix_len` The length of the context's prefix. 

* `flags` Flags + CID for the context. 

* `ltime` Lifetime of the context. 

* `prefix` The context's prefix 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The pkt snip list of options, on success 

#### Returns
NULL, if packet buffer is full or on error

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_sixlowpan_nd_opt_abr_build`](#group__net__gnrc__sixlowpan__nd_1gacabb73149cb9d7a144d2e035d8d81141)`(uint32_t version,uint16_t ltime,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * braddr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the authoritative border router option.

#### Parameters
* `version` Version of the border router information. 

* `ltime` Registration lifetime for the border router. 

* `braddr` The IPv6 address of the border router. 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The pkt snip list of options, on success 

#### Returns
NULL, if packet buffer is full or on error

