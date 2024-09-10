---
title: api-net_gnrc_ipv6_nib.md
description: api-net_gnrc_ipv6_nib.md
---
# group `net_gnrc_ipv6_nib` 

Neighbor Information Base (NIB) for IPv6.

> Todo: Add detailed description 

Implement multihop DAD 

Implement classic SLAAC 

Implement MLD

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@358`](#group__net__gnrc__ipv6__nib_1ga893dbd60c5ebe415600523fbae202880)            | Types for [gnrc_netif_ipv6_t::route_info_cb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__ipv6__t_1aeb73dca70bd6714fd4b6592697a32ac0).
`public void `[`gnrc_ipv6_nib_init`](#group__net__gnrc__ipv6__nib_1gaa45857f72d127cc8207776123a724783)`(void)`            | Initialize NIB.
`public void `[`gnrc_ipv6_nib_init_iface`](#group__net__gnrc__ipv6__nib_1gaff96abd587eb5b312e141ab5c2bd91eb)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Adds an interface to be managed by the NIB.
`public void `[`gnrc_ipv6_nib_iface_up`](#group__net__gnrc__ipv6__nib_1ga016b97acc55f3a497d83422b8e0440ff)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Call bring-up functions when the interface comes online.
`public void `[`gnrc_ipv6_nib_iface_down`](#group__net__gnrc__ipv6__nib_1ga70144e8018b27db38b316d0c8dc6bd26)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,bool send_final_ra)`            | Clean up when the interface goes offline.
`public int `[`gnrc_ipv6_nib_get_next_hop_l2addr`](#group__net__gnrc__ipv6__nib_1ga021bb4bb0cf7ed73276608801bc0cee3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * nce)`            | Gets link-layer address of next hop to a destination address.
`public void `[`gnrc_ipv6_nib_handle_pkt`](#group__net__gnrc__ipv6__nib_1ga15601c28974a879eac4e67d1da5cbaa6)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * ipv6,const `[`icmpv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_icmpv6.md#structicmpv6__hdr__t)` * icmpv6,size_t icmpv6_len)`            | Handles a received ICMPv6 packet.
`public void `[`gnrc_ipv6_nib_handle_timer_event`](#group__net__gnrc__ipv6__nib_1ga76deedffd4ee42e73439d56350dd8b79)`(void * ctx,uint16_t type)`            | Handles a timer event.
`public void `[`gnrc_ipv6_nib_change_rtr_adv_iface`](#group__net__gnrc__ipv6__nib_1gae00dd8eb2a47bfd1979ae1782e69ac18)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,bool enable)`            | Changes the state if an interface advertises itself as a router or not.
`public void `[`_snd_ns`](#group__net__gnrc__ipv6__nib_1ga3bce8e2e391bc165b75e4c04d5ed522b)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst)`            | Sends neighbor solicitation (including ARO if required)
`public inline static void `[`_init_iface_router`](#group__net__gnrc__ipv6__nib_1ga0f224a75ccbeb6db5714c6dcb9d82edc)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Initializes interface for router behavior.

## Members

#### `enum `[`@358`](#group__net__gnrc__ipv6__nib_1ga893dbd60c5ebe415600523fbae202880) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GNRC_IPV6_NIB_ROUTE_INFO_TYPE_UNDEF            | undefined
GNRC_IPV6_NIB_ROUTE_INFO_TYPE_RRQ            | reactive routing query
GNRC_IPV6_NIB_ROUTE_INFO_TYPE_RN            | route notification
GNRC_IPV6_NIB_ROUTE_INFO_TYPE_NSC            | neighbor state change

Types for [gnrc_netif_ipv6_t::route_info_cb](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__ipv6__t_1aeb73dca70bd6714fd4b6592697a32ac0).

#### `public void `[`gnrc_ipv6_nib_init`](#group__net__gnrc__ipv6__nib_1gaa45857f72d127cc8207776123a724783)`(void)` 

Initialize NIB.

#### `public void `[`gnrc_ipv6_nib_init_iface`](#group__net__gnrc__ipv6__nib_1gaff96abd587eb5b312e141ab5c2bd91eb)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Adds an interface to be managed by the NIB.

`netif != NULL`

#### Parameters
* `netif` The interface to be managed by the NIB

#### `public void `[`gnrc_ipv6_nib_iface_up`](#group__net__gnrc__ipv6__nib_1ga016b97acc55f3a497d83422b8e0440ff)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Call bring-up functions when the interface comes online.

`netif != NULL`

#### Parameters
* `netif` The interface that just got online

#### `public void `[`gnrc_ipv6_nib_iface_down`](#group__net__gnrc__ipv6__nib_1ga70144e8018b27db38b316d0c8dc6bd26)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,bool send_final_ra)` 

Clean up when the interface goes offline.

`netif != NULL`

#### Parameters
* `netif` The interface that has just got offline 

* `send_final_ra` Whether to advertise router disappearance in a final router advertisement

#### `public int `[`gnrc_ipv6_nib_get_next_hop_l2addr`](#group__net__gnrc__ipv6__nib_1ga021bb4bb0cf7ed73276608801bc0cee3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_ipv6_nib_nc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_ipv6_nib_nc.md#structgnrc__ipv6__nib__nc__t)` * nce)` 

Gets link-layer address of next hop to a destination address.

`(dst != NULL) && (nce != NULL)`

#### Parameters
* `dst` Destination address of a packet. 

* `netif` Restrict search to this interface. May be `NULL` for any interface. 

* `pkt` The IPv6 packet in sending order for which the next hop is searched. Needed for queuing for with reactive routing or address resolution. May be `NULL`. Will be released properly on error. 

* `nce` The neighbor cache entry of the next hop to `dst`.

#### Returns
0, on success. 

#### Returns
-ENETUNREACH if there is no route to host. 

#### Returns
-EHOSTUNREACH if the next hop is not reachable or if `dst` was link-local, but `iface` was [KERNEL_PID_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gab4fb52da047cf9af9626b9c408704384) (no neighbor cache entry will be created in this case and no neighbor solicitation sent).

#### `public void `[`gnrc_ipv6_nib_handle_pkt`](#group__net__gnrc__ipv6__nib_1ga15601c28974a879eac4e67d1da5cbaa6)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * ipv6,const `[`icmpv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_icmpv6.md#structicmpv6__hdr__t)` * icmpv6,size_t icmpv6_len)` 

Handles a received ICMPv6 packet.

`netif != NULL`

`ipv6 != NULL`

`icmpv6 != NULL`

`icmpv6_len > sizeof(icmpv6_hdr_t)`

> The ICMPv6 checksum is supposed to be checked externally!

`ipv6` is just used for the addresses and hop limit. The next header field will not be checked for correctness (but should be [PROTNUM_ICMPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga6b7b759ecd9cc9ed3d13378167b1eb0c))

**See also**: [RFC 4861, section 6.1](https://tools.ietf.org/html/rfc4861#section-6.1)

**See also**: [RFC 4861, section 6.2.6](https://tools.ietf.org/html/rfc4861#section-6.2.6)

**See also**: [RFC 4861, section 6.3.4](https://tools.ietf.org/html/rfc4861#section-6.3.4)

**See also**: [RFC 4861, section 7.1](https://tools.ietf.org/html/rfc4861#section-7.1)

**See also**: [RFC 4861, section 7.2.3](https://tools.ietf.org/html/rfc4861#section-7.2.3)

**See also**: [RFC 4861, section 7.2.5](https://tools.ietf.org/html/rfc4861#section-7.2.5)

**See also**: [RFC 4861, section 8.1](https://tools.ietf.org/html/rfc4861#section-8.1)

**See also**: [RFC 4861, section 8.3](https://tools.ietf.org/html/rfc4861#section-8.3)

**See also**: [RFC 4862, section 5.4.3](https://tools.ietf.org/html/rfc4862#section-5.4.3)

**See also**: [RFC 4862, section 5.4.4](https://tools.ietf.org/html/rfc4862#section-5.4.4)

**See also**: [RFC 4862, section 5.5.3](https://tools.ietf.org/html/rfc4862#section-5.5.3)

**See also**: [RFC 6775, section 5.5.2](https://tools.ietf.org/html/rfc6775#section-5.5.2)

**See also**: [RFC 6775, section 5.4](https://tools.ietf.org/html/rfc6775#section-5.4)

**See also**: [RFC 6775, section 6.3](https://tools.ietf.org/html/rfc6775#section-6.3)

**See also**: [RFC 6775, section 6.5](https://tools.ietf.org/html/rfc6775#section-6.5)

**See also**: [RFC 6775, section 8.1.3](https://tools.ietf.org/html/rfc6775#section-8.1.3)

**See also**: [RFC 6775, section 8.2.1](https://tools.ietf.org/html/rfc6775#section-8.2.1)

**See also**: [RFC 6775, section 8.2.4](https://tools.ietf.org/html/rfc6775#section-8.2.4)

**See also**: [RFC 6775, section 8.2.5](https://tools.ietf.org/html/rfc6775#section-8.2.5)

#### Parameters
* `netif` The interface the packet came over. 

* `ipv6` The IPv6 header of the received packet. 

* `icmpv6` The ICMPv6 header and payload of the received packet. 

* `icmpv6_len` The number of bytes at `icmpv6`.

#### `public void `[`gnrc_ipv6_nib_handle_timer_event`](#group__net__gnrc__ipv6__nib_1ga76deedffd4ee42e73439d56350dd8b79)`(void * ctx,uint16_t type)` 

Handles a timer event.

#### Parameters
* `ctx` Context of the timer event. 

* `type` Type of the timer event (see [timer event](#group__net__gnrc__ipv6__nib_1net_gnrc_ipv6_nib_msg) types")

#### `public void `[`gnrc_ipv6_nib_change_rtr_adv_iface`](#group__net__gnrc__ipv6__nib_1gae00dd8eb2a47bfd1979ae1782e69ac18)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,bool enable)` 

Changes the state if an interface advertises itself as a router or not.

#### Parameters
* `netif` The interface for which the state should be changed. 

* `enable` `true`, to enable advertising the interface as a router. `false`, to disable advertising the interface as a router.

#### `public void `[`_snd_ns`](#group__net__gnrc__ipv6__nib_1ga3bce8e2e391bc165b75e4c04d5ed522b)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * tgt,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * src,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dst)` 

Sends neighbor solicitation (including ARO if required)

`(tgt != NULL) && !ipv6_addr_is_multicast(tgt)`

`(netif != NULL) && (dst != NULL)`

#### Parameters
* `tgt` The target address of the neighbor solicitation. Must not be NULL or a multicast address. 

* `netif` Interface to send over. Must not be NULL. 

* `src` Source address for the neighbor solicitation. Will be chosen from the interface according to `dst`, if NULL. 

* `dst` Destination address for neighbor solicitation. Must not be NULL.

#### `public inline static void `[`_init_iface_router`](#group__net__gnrc__ipv6__nib_1ga0f224a75ccbeb6db5714c6dcb9d82edc)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Initializes interface for router behavior.

#### Parameters
* `netif` An interface.

