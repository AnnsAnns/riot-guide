---
title: api-net_gnrc_ipv6_ext_rh.md
description: api-net_gnrc_ipv6_ext_rh.md
---
# group `net_gnrc_ipv6_ext_rh` 

GNRC implementation of IPv6 routing header extension.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@357`](#group__net__gnrc__ipv6__ext__rh_1ga3b39f0c6258619f350327586d1c22cad)            | 
`public int `[`gnrc_ipv6_ext_rh_process`](#group__net__gnrc__ipv6__ext__rh_1ga79c263f3595ce4b60c5d71e07f2e3bc2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Process the routing header of an IPv6 packet.

## Members

#### `enum `[`@357`](#group__net__gnrc__ipv6__ext__rh_1ga3b39f0c6258619f350327586d1c22cad) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GNRC_IPV6_EXT_RH_ERROR            | An error occurred during routing header processing.
GNRC_IPV6_EXT_RH_AT_DST            | The routing header was successfully processed and this node is the destination (i.e.
GNRC_IPV6_EXT_RH_FORWARDED            | The routing header was successfully processed and the packet was forwarded to another node or should be forwarded to another node.

#### `public int `[`gnrc_ipv6_ext_rh_process`](#group__net__gnrc__ipv6__ext__rh_1ga79c263f3595ce4b60c5d71e07f2e3bc2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Process the routing header of an IPv6 packet.

#### Parameters
* `pkt` An IPv6 packet containing the routing header in the first snip

#### Returns
[GNRC_IPV6_EXT_RH_AT_DST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cadacb7ae85ed285eb70fa9abecf621fbdf6), on success 

#### Returns
[GNRC_IPV6_EXT_RH_FORWARDED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cada27f021d2bcd60cf720fd23b609357eaa), when `pkt` was forwarded 

#### Returns
[GNRC_IPV6_EXT_RH_ERROR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cada024123a0c461316391e2ba2404677456), on error

