---
title: api-net_gnrc_ipv6.md
description: api-net_gnrc_ipv6.md
---
# group `net_gnrc_ipv6` 

GNRC's IPv6 implementation.

This module is for usage with the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi)

Supported NETAPI commandsThis module handles the following [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) message types:

<tt>GNRC_NETAPI_MSG_TYPE_RCV</tt>[GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) expects a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) (referred to as "packet" in the following) in receive order (payload first, headers ordered down the stack). It must at least contain a link-layer payload starting with a valid [IPv6 header](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr). If it contains a [Generic network interface header](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr) this header will be taken into account.

If the link-layer payload is not an IPv6 packet (starting with a 0x6 half-byte) or the module is not able to parse it correctly it will be dropped. If the packet can't be forwarded (either to another node or an upper layer) it will be dropped. Otherwise, there are two scenarios of success:

* If the destination address is an address on this host, and a suitable upper layer is registered the packet will be forwarded to that upper layer. An upper layer is suitable with its registration if

* it is registered with a tuple ([GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380), `nh`), or

* it is registered with a tuple ([gnrc_nettype_from_protnum](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gaa706f61051016219e5a9e1b0f6f71abf)(`nh`), [GNRC_NETREG_DEMUX_CTX_ALL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga1a6359efa13b3bfed70af55deacde7ae)).

In both cases `nh` is the [next header field of one of the IPv6 header](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t_1a81a33145874adac54190598e2ad1ec30) or the [next header field of one of the IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext.md#structipv6__ext__t_1a41518ff63dbd6eb2002e6c51b6372043) extension headers" within the packet. The IPv6 header and every IPv6 extension header between the IPv6 header and the payload will be marked as separate [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63) (i.e. the IPv6 payload will be the first snip due to receive order). Note, that IPv6-internal headers (such as ICMPv6 and extension headers) are handled within this module. If the [`gnrc_ipv6_ext`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext) module is not present, IPv6 extension headers can't be parsed, so the packet might not be read properly.

* If the receiving network interface (indicated by the [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) if provided or the destination address in the IPv6 header) is configured as a forwarding interface, the destination is not an address on this host, and a route is configured for the destination the packet will be forwarded. In consequence, the module will emit a [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) with the packet reversed into send order and the (if necessary prepended) [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) has the appropriate link-layer destination addresses to the next hop towards the destination.

<tt>GNRC_NETAPI_MSG_TYPE_SND</tt>[GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) expects a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) (referred to as "packet" in the following) in send order (headers ordered up the stack, payload last). It must at least contain a snip of type [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) as its first or second snip. If the first snip is not of type [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380), it must be of type [GNRC_NETTYPE_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a591a497a7b4a31427c44c7b24baf17c3).

If the destination address within the [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) snip is an address on this host or the loopback address `::1`, the packet will be [reversed](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf_1ga7f104a81ca707558dc5192e39ad7b5cd) and [merged](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf_1gae41835e987f693706a388a3d9e14f83a) so that it has a format as though it came from a network interface. It will then be handled as a received packet ("looped back") by the IPv6 module (see previous section).

Otherwise, if a route (or neighbor cache entry) to the IPv6 destination address exists, the IPv6 header will be filled for fields that were not set by upper layers and handed over to the link-layer (L2) with the L2 destination address set to the L2 address associated to that IPv6 destination address.

<tt>GNRC_NETAPI_MSG_TYPE_SET</tt>`GNRC_NETAPI_MSG_TYPE_SET` is not supported.

<tt>GNRC_NETAPI_MSG_TYPE_GET</tt>`GNRC_NETAPI_MSG_TYPE_GET` is not supported.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_IPV6_STATIC_LLADDR_IS_FIXED`](#group__net__gnrc__ipv6_1ga7cb34941c9ed0bc32bb34491deafca6c)            | Use the same static IPv6 link local address on every network interface.
`define `[`CONFIG_GNRC_IPV6_STATIC_LLADDR_NETDEV_MASK`](#group__net__gnrc__ipv6_1gafd217d406d66ebbfdc376b5afaf27d89)            | Select interfaces by driver types for setting static link local addresses.
`define `[`GNRC_IPV6_MSG_QUEUE_SIZE`](#group__net__gnrc__ipv6_1ga3c24988d18687541689ef97671675844)            | Message queue size to use for the IPv6 thread.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_ipv6_init`](#group__net__gnrc__ipv6_1ga3350f54d8afb8203f4ebdffa40c9b917)`(void)`            | Initialization of the IPv6 thread.
`public `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * `[`gnrc_ipv6_get_header`](#group__net__gnrc__ipv6_1gae22a5a0f301577af0e2e07d482446fc2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Get the IPv6 header from a given list of [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63).

## Members

#### `define `[`CONFIG_GNRC_IPV6_STATIC_LLADDR_IS_FIXED`](#group__net__gnrc__ipv6_1ga7cb34941c9ed0bc32bb34491deafca6c) 

Use the same static IPv6 link local address on every network interface.

When CONFIG_GNRC_IPV6_STATIC_LLADDR is used, to not add the interface pid to the set static address but use the same static link local address for all interfaces.

#### `define `[`CONFIG_GNRC_IPV6_STATIC_LLADDR_NETDEV_MASK`](#group__net__gnrc__ipv6_1gafd217d406d66ebbfdc376b5afaf27d89) 

Select interfaces by driver types for setting static link local addresses.

This option allows to explicitly include interfaces by matching their netdev driver types, encoded in a bitmask. See [netdev_type_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb) for possible values of netdev driver types. Matching NETDEV_ANY will include all netdev driver types.

Example usage, includes AT86RF215 and MRF24J40 driver types:

```cpp
#define CONFIG_GNRC_IPV6_STATIC_LLADDR_NETDEV_MASK \
   ((1UL << NETDEV_AT86RF215) | (1UL << NETDEV_MRF24J40))
```

A value of 0 will switch this selection feature off.

#### `define `[`GNRC_IPV6_MSG_QUEUE_SIZE`](#group__net__gnrc__ipv6_1ga3c24988d18687541689ef97671675844) 

Message queue size to use for the IPv6 thread.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_ipv6_init`](#group__net__gnrc__ipv6_1ga3350f54d8afb8203f4ebdffa40c9b917)`(void)` 

Initialization of the IPv6 thread.

#### Returns
The PID to the IPv6 thread, on success. 

#### Returns
a negative errno on error. 

#### Returns
-EOVERFLOW, if there are too many threads running already 

#### Returns
-EEXIST, if IPv6 was already initialized.

#### `public `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * `[`gnrc_ipv6_get_header`](#group__net__gnrc__ipv6_1gae22a5a0f301577af0e2e07d482446fc2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Get the IPv6 header from a given list of [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63).

This function may be used with e.g. a pointer to a (full) UDP datagram.
Any [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) snip in pkt is contains a full IPv6 header.

#### Parameters
* `pkt` The pointer to the first [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63) of the packet.

#### Returns
A pointer to the [ipv6_hdr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t) of the packet. 

#### Returns
NULL if the packet does not contain an IPv6 header.

