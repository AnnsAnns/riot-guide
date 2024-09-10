---
title: api-net_gnrc_ndp.md
description: api-net_gnrc_ndp.md
---
# group `net_gnrc_ndp` 

Provides build and send functions for neighbor discovery packets.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_NETTYPE_NDP`](#group__net__gnrc__ndp_1ga9c50aa92750a1ed1c9cbdde07ca639c6)            | [gnrc_nettype: Protocol type](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype) to send NDP packets to
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_nbr_sol_build`](#group__net__gnrc__ndp_1ga603785482bcf8294006e7bc47b9e1082)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)`            | Builds a neighbor solicitation message for sending.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_nbr_adv_build`](#group__net__gnrc__ndp_1gadb7e0a6e1ba32df39b90662b266d2d98)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,uint8_t flags,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)`            | Builds a neighbor advertisement message for sending.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_rtr_sol_build`](#group__net__gnrc__ndp_1ga4716455bb42b9815ff18568c738aa8e4)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)`            | Builds a router solicitation message for sending.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_rtr_adv_build`](#group__net__gnrc__ndp_1ga289bcf8af6ed687541e6a1dfb566ed1c)`(uint8_t cur_hl,uint8_t flags,uint16_t ltime,uint32_t reach_time,uint32_t retrans_timer,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)`            | Builds a router advertisement message for sending.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_build`](#group__net__gnrc__ndp_1ga8c351d232e01d62ef0f6bc40f278b294)`(uint8_t type,size_t size,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds a generic NDP option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_sl2a_build`](#group__net__gnrc__ndp_1ga3f88f4f4e2edd3115d756e5005e9cae4)`(const uint8_t * l2addr,uint8_t l2addr_len,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the source link-layer address option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_tl2a_build`](#group__net__gnrc__ndp_1ga9548c89394378f6c809209e10c859166)`(const uint8_t * l2addr,uint8_t l2addr_len,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the target link-layer address option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_pi_build`](#group__net__gnrc__ndp_1gad19281c0e619dacf4eaa7967dccdb8ad)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint32_t valid_ltime,uint32_t pref_ltime,uint8_t flags,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the prefix information option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_ri_build`](#group__net__gnrc__ndp_1gaba0d444f09848ae97ecf5730b9090fee)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint32_t route_ltime,uint8_t flags,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the route information option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_mtu_build`](#group__net__gnrc__ndp_1ga484ad37223ab20798b30a4dd22c13b4e)`(uint32_t mtu,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builds the MTU option.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_rdnss_build`](#group__net__gnrc__ndp_1ga0f67d32c15a66b9d8751ab7c017cacba)`(uint32_t lifetime,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addrs,unsigned addrs_num,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)`            | Builts the recursive DNS server option.
`public void `[`gnrc_ndp_nbr_sol_send`](#group__net__gnrc__ndp_1ga2af56eebbed54d6b0791b1e8caaecc65)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ext_opts)`            | Send pre-compiled neighbor solicitation depending on a given network interface.
`public void `[`gnrc_ndp_nbr_adv_send`](#group__net__gnrc__ndp_1ga9e1bdc629abfec4c31c3be2ad2d3f55d)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,bool supply_tl2a,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ext_opts)`            | Send pre-compiled neighbor advertisement depending on a given network interface.
`public void `[`gnrc_ndp_rtr_sol_send`](#group__net__gnrc__ndp_1ga5427b008c44672e836e0993796a5545a)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst)`            | Send pre-compiled router solicitation depending on a given network interface.
`public void `[`gnrc_ndp_rtr_adv_send`](#group__net__gnrc__ndp_1ga9291a12273d70390b60baaf4b565b414)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,bool fin,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ext_opts)`            | Send pre-compiled router advertisement depending on a given network interface.

## Members

#### `define `[`GNRC_NETTYPE_NDP`](#group__net__gnrc__ndp_1ga9c50aa92750a1ed1c9cbdde07ca639c6) 

[gnrc_nettype: Protocol type](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype) to send NDP packets to

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_nbr_sol_build`](#group__net__gnrc__ndp_1ga603785482bcf8294006e7bc47b9e1082)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)` 

Builds a neighbor solicitation message for sending.

`(tgt != NULL) && !ipv6_addr_is_multicast(tgt)`

**See also**: [RFC 4861, section 4.3](https://tools.ietf.org/html/rfc4861#section-4.3)

#### Parameters
* `tgt` The target address of the neighbor solicitation. Must not be NULL or a multicast address. 

* `options` Options to append to the neighbor solicitation. May be NULL for none.

#### Returns
The resulting ICMPv6 packet on success. 

#### Returns
NULL, if packet buffer is full.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_nbr_adv_build`](#group__net__gnrc__ndp_1gadb7e0a6e1ba32df39b90662b266d2d98)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,uint8_t flags,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)` 

Builds a neighbor advertisement message for sending.

`(tgt != NULL) && !ipv6_addr_is_multicast(tgt)`

**See also**: [RFC 4861, section 4.4](https://tools.ietf.org/html/rfc4861#section-4.4)

#### Parameters
* `tgt` For solicited advertisements, the Target Address field in the neighbor solicitaton. For and unsolicited advertisement, the address whose link-layer address has changed. Must not be NULL or a multicast address. 

* `flags` Neighbor advertisement flags:

* [NDP_NBR_ADV_FLAGS_R](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga89e3551aa1d4197768e18ee2c5c3d88f) == 1 indicates, that the sender is a router,

* [NDP_NBR_ADV_FLAGS_S](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga0c556f220107f2a58944c56bbd2e2b0e) == 1 indicates that the advertisement was sent in response to a neighbor solicitation,

* [NDP_NBR_ADV_FLAGS_O](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga0a7b93e9dc59fd1c6cded5e74b74ff67) == 1 indicates that the advertisement should override an existing cache entry and update the cached link-layer address. 

* `options` Options to append to the neighbor advertisement. May be NULL for none.

#### Returns
The resulting ICMPv6 packet on success. 

#### Returns
NULL, if packet buffer is full.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_rtr_sol_build`](#group__net__gnrc__ndp_1ga4716455bb42b9815ff18568c738aa8e4)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)` 

Builds a router solicitation message for sending.

**See also**: `[RFC 4861, section 4.1](https://tools.ietf.org/html/rfc4861#section-4.1)

#### Parameters
* `options` Options to append to the router solicitation. May be NULL for none.

#### Returns
The resulting ICMPv6 packet on success. 

#### Returns
NULL, if packet buffer is full.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_rtr_adv_build`](#group__net__gnrc__ndp_1ga289bcf8af6ed687541e6a1dfb566ed1c)`(uint8_t cur_hl,uint8_t flags,uint16_t ltime,uint32_t reach_time,uint32_t retrans_timer,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * options)` 

Builds a router advertisement message for sending.

**See also**: `[RFC 4861, section 4.2](https://tools.ietf.org/html/rfc4861#section-4.2)

The source address for the packet MUST be the link-local address of the interface.

#### Parameters
* `cur_hl` Default hop limit for outgoing IP packets, 0 if unspecified by this router. 

* `flags` Flags as defined in [net/ndp.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ndp_8h).

* [NDP_RTR_ADV_FLAGS_M](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1gaba340a96c6a91edf0d74b2e7d3bfac61) == 1 indicates, that the addresses are managed by DHCPv6,

* [NDP_RTR_ADV_FLAGS_O](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1gaedb62dacebbf22cf94babcb6f7293c6a) == 1 indicates that other configuration information is available via DHCPv6. 

* `ltime` Lifetime of the default router in seconds. 

* `reach_time` Time in milliseconds a node should assume a neighbor reachable. 0 means unspecified by the router. 

* `retrans_timer` Time in milliseconds between retransmitted neighbor solicitations. 0 means unspecified by the router. 

* `options` Options to append to the router advertisement. May be NULL for none.

#### Returns
The resulting ICMPv6 packet on success. 

#### Returns
NULL, if packet buffer is full.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_build`](#group__net__gnrc__ndp_1ga8c351d232e01d62ef0f6bc40f278b294)`(uint8_t type,size_t size,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds a generic NDP option.

#### Parameters
* `type` Type of the option. 

* `size` Size in byte of the option (will be rounded up to the next multiple of 8). 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The packet snip list of options, on success 

#### Returns
NULL, if packet buffer is full

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_sl2a_build`](#group__net__gnrc__ndp_1ga3f88f4f4e2edd3115d756e5005e9cae4)`(const uint8_t * l2addr,uint8_t l2addr_len,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the source link-layer address option.

`(l2addr != NULL) && (l2addr_len != 0)`

**See also**: [RFC 4861, section 4.6.1](https://tools.ietf.org/html/rfc4861#section-4.6.1)

Should only be used with neighbor solicitations, router solicitations, and router advertisements. This is not checked however, since hosts should silently ignore it in other NDP messages.

#### Parameters
* `l2addr` A link-layer address of variable length. Must not be NULL. 

* `l2addr_len` Length of `l2addr`. Must not be 0. 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The packet snip list of options, on success 

#### Returns
NULL, if packet buffer is full

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_tl2a_build`](#group__net__gnrc__ndp_1ga9548c89394378f6c809209e10c859166)`(const uint8_t * l2addr,uint8_t l2addr_len,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the target link-layer address option.

`(l2addr != NULL) && (l2addr_len != 0)`

**See also**: [RFC 4861, section 4.6.1](https://tools.ietf.org/html/rfc4861#section-4.6.1)

Should only be used with neighbor advertisemnents and redirect packets. This is not checked however, since hosts should silently ignore it in other NDP messages.

#### Parameters
* `l2addr` A link-layer address of variable length. Must not be NULL. 

* `l2addr_len` Length of `l2addr`. Must not be 0. 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The pkt snip list of options, on success 

#### Returns
NULL, if packet buffer is full

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_pi_build`](#group__net__gnrc__ndp_1gad19281c0e619dacf4eaa7967dccdb8ad)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint32_t valid_ltime,uint32_t pref_ltime,uint8_t flags,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the prefix information option.

`prefix != NULL`

`!ipv6_addr_is_link_local(prefix) && !ipv6_addr_is_multicast(prefix)`

`prefix_len <= 128`

**See also**: [RFC 4861, section 4.6.2](https://tools.ietf.org/html/rfc4861#section-4.6.2)

Should only be used with router advertisemnents. This is not checked however, since nodes should silently ignore it in other NDP messages.

#### Parameters
* `prefix` An IPv6 address or a prefix of an IPv6 address. Must not be NULL or be a link-local or multicast address. 

* `prefix_len` The length of `prefix` in bits. Must be between 0 and 128. 

* `valid_ltime` Length of time in seconds that `prefix` is valid. UINT32_MAX represents infinity. 

* `pref_ltime` Length of time in seconds that addresses using `prefix` remain preferred. UINT32_MAX represents infinity. 

* `flags` Flags as defined in [net/ndp.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ndp_8h).

* [NDP_OPT_PI_FLAGS_L](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga993574766da7627b6903ab36b8775651) == 1 indicates, that `prefix` can be used for on-link determination,

* [NDP_OPT_PI_FLAGS_A](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga569cf4a950f8b62210c064b8b2bcf11d) == 1 indicates, that `prefix` can be used for stateless address configuration. 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The packet snip list of options, on success 

#### Returns
NULL, if packet buffer is full

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_ri_build`](#group__net__gnrc__ndp_1gaba0d444f09848ae97ecf5730b9090fee)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint32_t route_ltime,uint8_t flags,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the route information option.

`prefix != NULL`

`!ipv6_addr_is_link_local(prefix) && !ipv6_addr_is_multicast(prefix)`

`prefix_len <= 128`

**See also**: [RFC 4191, section 2.3](https://tools.ietf.org/html/rfc4191#section-2.3)

Should only be used with router advertisemnents. This is not checked however, since nodes should silently ignore it in other NDP messages.

#### Parameters
* `prefix` An IPv6 address or a prefix of an IPv6 address. Must not be NULL or be a link-local or multicast address. 

* `prefix_len` The length of `prefix` in bits. Must be between 0 and 128. 

* `route_ltime` Length of time in seconds that `prefix` is valid. UINT32_MAX represents infinity. 

* `flags` Flags as defined in [net/ndp.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ndp_8h). 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The packet snip list of options, on success 

#### Returns
NULL, if packet buffer is full

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_mtu_build`](#group__net__gnrc__ndp_1ga484ad37223ab20798b30a4dd22c13b4e)`(uint32_t mtu,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builds the MTU option.

**See also**: [RFC 4861, section 4.6.4](https://tools.ietf.org/html/rfc4861#section-4.6.4)

Should only be used with router advertisemnents. This is not checked however, since nodes should silently ignore it in other NDP messages.

#### Parameters
* `mtu` The recommended MTU for the link. 

* `next` More options in the packet. NULL, if there are none.

#### Returns
The packet snip list of options, on success 

#### Returns
NULL, if packet buffer is full

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_ndp_opt_rdnss_build`](#group__net__gnrc__ndp_1ga0f67d32c15a66b9d8751ab7c017cacba)`(uint32_t lifetime,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addrs,unsigned addrs_num,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * next)` 

Builts the recursive DNS server option.

**See also**: [RFC 8106, section 5.1](https://tools.ietf.org/html/rfc8106#section-5.1)

`addrs != NULL`

`addrs_num > 0`

Should only be used with router advertisemnents. This is not checked however, since nodes should silently ignore it in other NDP messages.

#### Parameters
* `lifetime` The lifetime of the recursive DNS servers 

* `addrs` The addresses of the recursive DNS servers 

* `addrs_num` The number of addresses in `addrs`

* `next` More options in the packet. NULL, if there are none.

#### Returns
The packet snip list of options, on success 

#### Returns
`next`, if RDNSS is not supported 

#### Returns
NULL, if packet buffer is full

#### `public void `[`gnrc_ndp_nbr_sol_send`](#group__net__gnrc__ndp_1ga2af56eebbed54d6b0791b1e8caaecc65)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ext_opts)` 

Send pre-compiled neighbor solicitation depending on a given network interface.

`(tgt != NULL) && !ipv6_addr_is_multicast(tgt)`

`(netif != NULL) && (dst != NULL)`

#### Parameters
* `tgt` The target address of the neighbor solicitation. Must not be NULL or a multicast address. 

* `netif` Interface to send over. Must not be NULL. 

* `src` Source address for the neighbor solicitation. Will be chosen from the interface according to `dst`, if NULL. 

* `dst` Destination address for neighbor solicitation. Must not be NULL. 

* `ext_opts` External options for the neighbor advertisement. Leave NULL for none. **Warning:** these are not tested if they are suitable for a neighbor solicitation so be sure to check that. **Will be released** in an error case.

#### `public void `[`gnrc_ndp_nbr_adv_send`](#group__net__gnrc__ndp_1ga9e1bdc629abfec4c31c3be2ad2d3f55d)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,bool supply_tl2a,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ext_opts)` 

Send pre-compiled neighbor advertisement depending on a given network interface.

`(tgt != NULL) && !ipv6_addr_is_multicast(tgt)`

`(netif != NULL) && (dst != NULL)`

If `netif` is a forwarding interface and router advertisements are activated the [NDP_NBR_ADV_FLAGS_R](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga89e3551aa1d4197768e18ee2c5c3d88f) is set in the neighbor advertisement. If `dst` is [IPV6_ADDR_UNSPECIFIED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr_1ga060dba67cd44fbce8eda163919c89bcf) it will be replaced with [IPV6_ADDR_ALL_NODES_LINK_LOCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr_1ga012c850d1fa7a39057365df96e76ccf7) and* `supply_tl2a` is set to true implicitly. Otherwise, the [NDP_NBR_ADV_FLAGS_S](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga0c556f220107f2a58944c56bbd2e2b0e) will be set. If `tgt` is an anycast address on `netif` the [NDP_NBR_ADV_FLAGS_O](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga0a7b93e9dc59fd1c6cded5e74b74ff67) flag will be set.

The source address of the IPv6 packet will be left unspecified, so the [IPv6 module](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6) selects a fitting IPv6 address.

#### Parameters
* `tgt` Target address for the neighbor advertisement. May not be NULL and **MUST NOT** be multicast. 

* `netif` Interface to send over. Must not be NULL. 

* `dst` Destination address for neighbor advertisement. May not be NULL. Is set to [IPV6_ADDR_ALL_NODES_LINK_LOCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr_1ga012c850d1fa7a39057365df96e76ccf7) when equal to [IPV6_ADDR_UNSPECIFIED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr_1ga060dba67cd44fbce8eda163919c89bcf) (to allow for simple reply mechanisms to neighbor solicitations). This also implies that `supply_tl2a`**must** be true and the parameter will be reset accordingly. If `dst` is not [IPV6_ADDR_UNSPECIFIED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr_1ga060dba67cd44fbce8eda163919c89bcf), the [NDP_NBR_ADV_FLAGS_S](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ndp_1ga0c556f220107f2a58944c56bbd2e2b0e) flag will be set implicitly. 

* `supply_tl2a` Add target link-layer address option to neighbor advertisement if link-layer has addresses. If `dst` is [IPV6_ADDR_UNSPECIFIED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr_1ga060dba67cd44fbce8eda163919c89bcf), it will be set to true. 

* `ext_opts` External options for the neighbor advertisement. Leave NULL for none. **Warning:** these are not tested if they are suitable for a neighbor advertisement so be sure to check that. **Will be released** in an error case.

#### `public void `[`gnrc_ndp_rtr_sol_send`](#group__net__gnrc__ndp_1ga5427b008c44672e836e0993796a5545a)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst)` 

Send pre-compiled router solicitation depending on a given network interface.

`(netif != NULL)`

#### Parameters
* `netif` Interface to send over. Must not be NULL. 

* `dst` Destination for the router solicitation. ff02::2 if NULL.

#### `public void `[`gnrc_ndp_rtr_adv_send`](#group__net__gnrc__ndp_1ga9291a12273d70390b60baaf4b565b414)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,bool fin,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * ext_opts)` 

Send pre-compiled router advertisement depending on a given network interface.

`(netif != NULL)`

This function does not add the PIOs to the router, since they are highly dependent on external set-ups (e.g. if multihop prefix distribution is used). Provide them via `ext_opts`

#### Parameters
* `netif` Interface to send over. Must not be NULL. 

* `src` Source address for the router advertisement. May be NULL to be determined by source address selection (:: if `netif` has no address). 

* `dst` Destination address for router advertisement. ff02::1 if NULL. 

* `fin` This is part of the router's final batch of router advertisements before ceising to be a router (set's router lifetime field to 0). 

* `ext_opts` External options for the neighbor advertisement. Leave NULL for none. **Warning:** these are not tested if they are suitable for a neighbor advertisement so be sure to check that. **Will be released** in an error case.

