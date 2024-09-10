---
title: api-net_gnrc_icmpv6_echo.md
description: api-net_gnrc_icmpv6_echo.md
---
# group `net_gnrc_icmpv6_echo` 

ICMPv6 echo request and reply.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_icmpv6_echo_build`](#group__net__gnrc__icmpv6__echo_1gac1b2581733750120d32d49d755345dd0)`(uint8_t type,uint16_t id,uint16_t seq,uint8_t * data,size_t data_len)`            | Builds an ICMPv6 echo message of type `type` for sending.
`public void `[`gnrc_icmpv6_echo_req_handle`](#group__net__gnrc__icmpv6__echo_1ga7a925d40cd479bbcadba04f6977d4c25)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * ipv6_hdr,`[`icmpv6_echo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_icmpv6.md#structicmpv6__echo__t)` * echo,uint16_t len)`            | ICMPv6 echo request handler.
`public int `[`gnrc_icmpv6_echo_send`](#group__net__gnrc__icmpv6__echo_1ga586847e917433d6c28190af4bcca82f2)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint16_t id,uint16_t seq,uint8_t ttl,size_t len)`            | Send out ICMPv6 echo request.
`public int `[`gnrc_icmpv6_echo_rsp_handle`](#group__net__gnrc__icmpv6__echo_1gaa56a5afd4f95fd3c665da46e8bb928e5)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t len,`[`gnrc_icmpv6_echo_rsp_handle_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__icmpv6__echo_1ga7e9cbf03b31779d6e9bbac4cf7031e8c)` cb,void * ctx)`            | Parse ICMPv6 echo response.

## Members

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_icmpv6_echo_build`](#group__net__gnrc__icmpv6__echo_1gac1b2581733750120d32d49d755345dd0)`(uint8_t type,uint16_t id,uint16_t seq,uint8_t * data,size_t data_len)` 

Builds an ICMPv6 echo message of type `type` for sending.

#### Parameters
* `type` Type of the echo message. Expected to be either ICMPV6_ECHO_REQ or ICMPV6_ECHO_REP. 

* `id` ID for the echo message in host byte-order 

* `seq` Sequence number for the echo message in host byte-order 

* `data` Payload for the echo message 

* `data_len` Length of `data`

#### Returns
The echo message on success 

#### Returns
NULL, on failure

#### `public void `[`gnrc_icmpv6_echo_req_handle`](#group__net__gnrc__icmpv6__echo_1ga7a925d40cd479bbcadba04f6977d4c25)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * ipv6_hdr,`[`icmpv6_echo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_icmpv6.md#structicmpv6__echo__t)` * echo,uint16_t len)` 

ICMPv6 echo request handler.

#### Parameters
* `netif` The interface the echo request was received on. 

* `ipv6_hdr` The IPv6 header of the echo request. 

* `echo` The Echo Request message. 

* `len` Length of the echo request message ([ipv6_hdr_t::len](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t_1ad89727f6d07df2bc99eaec29480ff659) of `ipv6_hdr` minus length of extension headers).

#### `public int `[`gnrc_icmpv6_echo_send`](#group__net__gnrc__icmpv6__echo_1ga586847e917433d6c28190af4bcca82f2)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint16_t id,uint16_t seq,uint8_t ttl,size_t len)` 

Send out ICMPv6 echo request.

#### Parameters
* `netif` The interface the echo request should be sent on. 

* `addr` The destination address of the echo request 

* `id` ID for the echo message in host byte-order 

* `seq` Sequence number for the echo message in host byte-order 

* `ttl` Hop limit of the echo request 

* `len` Length of the payload

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`gnrc_icmpv6_echo_rsp_handle`](#group__net__gnrc__icmpv6__echo_1gaa56a5afd4f95fd3c665da46e8bb928e5)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,size_t len,`[`gnrc_icmpv6_echo_rsp_handle_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__icmpv6__echo_1ga7e9cbf03b31779d6e9bbac4cf7031e8c)` cb,void * ctx)` 

Parse ICMPv6 echo response.

#### Parameters
* `pkt` Incoming ICMPv6 packet 

* `len` Expected echo response payload length 

* `cb` Callback function to execute 

* `ctx` Callback function context

#### Returns
0 on success 

#### Returns
<0 on error

