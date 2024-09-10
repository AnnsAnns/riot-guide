---
title: api-net_gnrc_ipv6_ext.md
description: api-net_gnrc_ipv6_ext.md
---
# group `net_gnrc_ipv6_ext` 

Implementation of IPv6 extension headers.

**See also**: [RFC 8200, section 4](https://tools.ietf.org/html/rfc8200#section-4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_build`](#group__net__gnrc__ipv6__ext_1ga78a64be58393e23ae1d7a3a446bd9d74)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ipv6,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next,uint8_t nh,size_t size)`            | Builds an extension header for sending.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_process_hopopt`](#group__net__gnrc__ipv6__ext_1gadad5652609e3cdcf36ddd66290ce7dcd)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t * protnum)`            | Processes a packet's payload as hop-by-hop option if `protnum` is pointing to a value equal to [PROTNUM_IPV6_EXT_HOPOPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09).
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_process_all`](#group__net__gnrc__ipv6__ext_1gaa313f8fdc690e48410d27f8385866c54)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t * protnum)`            | Processes a packet's extension headers after a potential initial hop-by-hop header.

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_build`](#group__net__gnrc__ipv6__ext_1ga78a64be58393e23ae1d7a3a446bd9d74)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ipv6,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next,uint8_t nh,size_t size)` 

Builds an extension header for sending.

#### Parameters
* `ipv6` The IPv6 header. Can be NULL. 

* `next` The next header. Must be a successor to `ipv6` if it is not NULL. 

* `nh` [Protocol Numbers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum) of the next header. 

* `size` Size of the extension header.

#### Returns
The extension header on success. 

#### Returns
NULL, on error.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_process_hopopt`](#group__net__gnrc__ipv6__ext_1gadad5652609e3cdcf36ddd66290ce7dcd)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t * protnum)` 

Processes a packet's payload as hop-by-hop option if `protnum` is pointing to a value equal to [PROTNUM_IPV6_EXT_HOPOPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09).

Should be called by [IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6) before any further processing (even forwarding-related) is done to `pkt`.

#### Parameters
* `pkt` An IPv6 packet in receive order. It assumed that [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) points to a hop-by-hop option when `protnum` points to value equal to [PROTNUM_IPV6_EXT_HOPOPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09). 

* `protnum` **In:** The [Protocol Numbers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum) of [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt`. **Out:** If `protnum` was [PROTNUM_IPV6_EXT_HOPOPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09) on in and the return value is not NULL it points to the value of the next header field of the processed hop-by-hop option header. Since the hop-by-hop option header is now marked, [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt` will then be identified by `protnum`. 
 If `protnum` was [PROTNUM_IPV6_EXT_HOPOPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09) on in and the return value is NULL the value `protnum` is pointing to is undefined. 
 If `protnum` unequal to [PROTNUM_IPV6_EXT_HOPOPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09) on in the value `protnum` is pointing to remains unchanged.

#### Returns
`pkt` with the hop-by-hop option marked on success. 

#### Returns
NULL, if the packet was consumed by the option handling. 

#### Returns
NULL, on error. `pkt` is released with EINVAL in that case.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ipv6_ext_process_all`](#group__net__gnrc__ipv6__ext_1gaa313f8fdc690e48410d27f8385866c54)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t * protnum)` 

Processes a packet's extension headers after a potential initial hop-by-hop header.

Should be called by [IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6) after [gnrc_ipv6_ext_process_hopopt()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext_1gadad5652609e3cdcf36ddd66290ce7dcd), i.e. the (first) hop-by-hop option should already be marked in `pkt`. If a hop-by-hop option is found in [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt`, the function will return an error.

#### Parameters
* `pkt` An IPv6 packet in receive order. 

* `protnum` **In:** The [Protocol Numbers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum) of [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt` (i.e. the first extension header to be processed). **Out:** The [Protocol Numbers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum) of header in [gnrc_pktsnip_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) of `pkt`. The extension headers are now marked, so their data can be found in [gnrc_pktsnip_t::next](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1ad6d823f68b2ee82429861342bd86c0a9) of `pkt` and the following. 
 If the return value is NULL, the value of `protnum` is undefined.

#### Returns
`pkt` with all extension headers marked until the first non-extension header. 

#### Returns
NULL, if packet was consumed by the extension header handling. 

#### Returns
NULL, on error (including if one of the extension headers was a hop-by-hop option). `pkt` is released with EINVAL in that case.

