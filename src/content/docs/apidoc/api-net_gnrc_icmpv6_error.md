---
title: api-net_gnrc_icmpv6_error.md
description: api-net_gnrc_icmpv6_error.md
---
# group `net_gnrc_icmpv6_error` 

ICMPv6 error message handling and creation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`gnrc_icmpv6_error_dst_unr_send`](#group__net__gnrc__icmpv6__error_1ga087e61ef87ae6a4d35962aceefc6631f)`(uint8_t code,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)`            | Sends an ICMPv6 destination unreachable message for sending.
`public void `[`gnrc_icmpv6_error_pkt_too_big_send`](#group__net__gnrc__icmpv6__error_1ga5ea1369c8c8508d46b4a6665a453c3ce)`(uint32_t mtu,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)`            | Sends an ICMPv6 packet too big message for sending.
`public void `[`gnrc_icmpv6_error_time_exc_send`](#group__net__gnrc__icmpv6__error_1ga00afb39bf2dbbaac61633b11caf68104)`(uint8_t code,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)`            | Sends an ICMPv6 time exceeded message for sending.
`public void `[`gnrc_icmpv6_error_param_prob_send`](#group__net__gnrc__icmpv6__error_1ga53597127750503cd4099c306722d9a1a)`(uint8_t code,void * ptr,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)`            | Sends an ICMPv6 parameter problem message for sending.

## Members

#### `public void `[`gnrc_icmpv6_error_dst_unr_send`](#group__net__gnrc__icmpv6__error_1ga087e61ef87ae6a4d35962aceefc6631f)`(uint8_t code,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)` 

Sends an ICMPv6 destination unreachable message for sending.

`orig_pkt` contains a packet snip of type [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380)

Won't send if source address of `orig_pkt` is unspecified or multicast

#### Parameters
* `code` The [code for the message](#group__net__icmpv6_1net_icmpv6_error_dst_unr_codes). 

* `orig_pkt` The invoking packet.

#### `public void `[`gnrc_icmpv6_error_pkt_too_big_send`](#group__net__gnrc__icmpv6__error_1ga5ea1369c8c8508d46b4a6665a453c3ce)`(uint32_t mtu,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)` 

Sends an ICMPv6 packet too big message for sending.

`orig_pkt` contains a packet snip of type [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380)

Won't send if source address of `orig_pkt` is unspecified or multicast

#### Parameters
* `mtu` The maximum transission unit of the next-hop link. 

* `orig_pkt` The invoking packet.

#### `public void `[`gnrc_icmpv6_error_time_exc_send`](#group__net__gnrc__icmpv6__error_1ga00afb39bf2dbbaac61633b11caf68104)`(uint8_t code,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)` 

Sends an ICMPv6 time exceeded message for sending.

`orig_pkt` contains a packet snip of type [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380)

Won't send if source address of `orig_pkt` is unspecified or multicast

#### Parameters
* `code` The [code for the message](#group__net__icmpv6_1net_icmpv6_error_time_exc_codes). 

* `orig_pkt` The invoking packet.

#### `public void `[`gnrc_icmpv6_error_param_prob_send`](#group__net__gnrc__icmpv6__error_1ga53597127750503cd4099c306722d9a1a)`(uint8_t code,void * ptr,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * orig_pkt)` 

Sends an ICMPv6 parameter problem message for sending.

`orig_pkt` is in receive order. 

`orig_pkt` contains a packet snip of type [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380)

Won't send if source address of `orig_pkt` is unspecified or multicast

#### Parameters
* `code` The [code for the message](#group__net__icmpv6_1net_icmpv6_error_param_prob_codes). 

* `ptr` Pointer to the erroneous octet in `orig_pkt`. 

* `orig_pkt` The invoking packet.

