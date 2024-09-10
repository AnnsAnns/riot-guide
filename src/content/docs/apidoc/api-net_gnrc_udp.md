---
title: api-net_gnrc_udp.md
description: api-net_gnrc_udp.md
---
# group `net_gnrc_udp` 

GNRC's implementation of the UDP protocol.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_UDP_MSG_QUEUE_SIZE`](#group__net__gnrc__udp_1ga8414691b8da07ad07af65277a110cade)            | Message queue size to use for the UDP thread.
`public int `[`gnrc_udp_calc_csum`](#group__net__gnrc__udp_1ga50f60f90f3d91c9ec1e18a5acb474adf)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)`            | Calculate the checksum for the given packet.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_udp_hdr_build`](#group__net__gnrc__udp_1ga262e6ffc6333255900f79329d9e445b9)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * payload,uint16_t src,uint16_t dst)`            | Allocate and initialize a fresh UDP header in the packet buffer.
`public int `[`gnrc_udp_init`](#group__net__gnrc__udp_1ga58042bdb9954ecec46aa0011705223ee)`(void)`            | Initialize and start UDP.

## Members

#### `define `[`GNRC_UDP_MSG_QUEUE_SIZE`](#group__net__gnrc__udp_1ga8414691b8da07ad07af65277a110cade) 

Message queue size to use for the UDP thread.

#### `public int `[`gnrc_udp_calc_csum`](#group__net__gnrc__udp_1ga50f60f90f3d91c9ec1e18a5acb474adf)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)` 

Calculate the checksum for the given packet.

#### Parameters
* `hdr` Pointer to the UDP header 

* `pseudo_hdr` Pointer to the network layer header

#### Returns
0 on success 

#### Returns
-EBADMSG if `hdr` is not of type GNRC_NETTYPE_UDP 

#### Returns
-EFAULT if `hdr` or `pseudo_hdr` is NULL 

#### Returns
-ENOENT if [gnrc_pktsnip_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a8362d0e56cfabedcf51459377c58db59) of `pseudo_hdr` is not known

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_udp_hdr_build`](#group__net__gnrc__udp_1ga262e6ffc6333255900f79329d9e445b9)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * payload,uint16_t src,uint16_t dst)` 

Allocate and initialize a fresh UDP header in the packet buffer.

#### Parameters
* `payload` Payload contained in the UDP packet 

* `src` Source port in host byte order 

* `dst` Destination port in host byte order

#### Returns
pointer to the newly created (and allocated) header 

#### Returns
NULL on `src == NULL`, `dst == NULL`, `src_len != 2`, `dst_len != 2` or on allocation error

`src > 0` and `dst > 0`

#### `public int `[`gnrc_udp_init`](#group__net__gnrc__udp_1ga58042bdb9954ecec46aa0011705223ee)`(void)` 

Initialize and start UDP.

#### Returns
PID of the UDP thread 

#### Returns
negative value on error

