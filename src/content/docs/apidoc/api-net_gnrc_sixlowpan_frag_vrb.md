---
title: api-net_gnrc_sixlowpan_frag_vrb.md
description: api-net_gnrc_sixlowpan_frag_vrb.md
---
# group `net_gnrc_sixlowpan_frag_vrb` 

Virtual reassembly buffer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_add`](#group__net__gnrc__sixlowpan__frag__vrb_1ga18283a2ebf4e9c329a0796070a521924)`(const `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` * base,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * out_netif,const uint8_t * out_dst,size_t out_dst_len)`            | Adds a new reassembly buffer entry.
`public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_from_route`](#group__net__gnrc__sixlowpan__frag__vrb_1ga8a71ad58a428aec296feece9e9c1f00d)`(const `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` * base,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr)`            | Generate reassembly buffer from a header's forwarding information.
`public void `[`gnrc_sixlowpan_frag_vrb_gc`](#group__net__gnrc__sixlowpan__frag__vrb_1ga93706de5562fe54cb1af92c3c6e04672)`(void)`            | Checks timeouts and removes entries if necessary.
`public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_get`](#group__net__gnrc__sixlowpan__frag__vrb_1gaee6bed2991fc53614c8ff1e1fa2f1874)`(const uint8_t * src,size_t src_len,unsigned src_tag)`            | Gets a VRB entry.
`public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_reverse`](#group__net__gnrc__sixlowpan__frag__vrb_1ga18ca874893e16c33458494266aacf77c)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const uint8_t * src,size_t src_len,unsigned tag)`            | Reverse VRB lookup.
`public inline static void `[`gnrc_sixlowpan_frag_vrb_rm`](#group__net__gnrc__sixlowpan__frag__vrb_1ga5b87c9e955ccfe7c49afcf3f8490421f)`(`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrb)`            | Removes an entry from the VRB.
`public inline static bool `[`gnrc_sixlowpan_frag_vrb_entry_empty`](#group__net__gnrc__sixlowpan__frag__vrb_1gae51437b11362c8ff378988073c30dbf5)`(`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrb)`            | Determines if a VRB entry is empty.
`public void `[`gnrc_sixlowpan_frag_vrb_reset`](#group__net__gnrc__sixlowpan__frag__vrb_1ga07e60be1551d6768570c9bb6ed63abd0)`(void)`            | Resets the VRB to a clean state.
`struct `[`gnrc_sixlowpan_frag_vrb_t`](#structgnrc__sixlowpan__frag__vrb__t) | Representation of the virtual reassembly buffer entry.

## Members

#### `public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_add`](#group__net__gnrc__sixlowpan__frag__vrb_1ga18283a2ebf4e9c329a0796070a521924)`(const `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` * base,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * out_netif,const uint8_t * out_dst,size_t out_dst_len)` 

Adds a new reassembly buffer entry.

#### Parameters
* `base` Base data of the datagram. Must not be `NULL`. 

* `out_netif` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface that is out-going to `out_dst`. 

* `out_dst` Link-layer destination address to which to forward fragments identified by `base`. Must not be `NULL`. 

* `out_dst_len` Length of `out_dst`. Must be greater than 0.

`base != NULL`

`out_dst != NULL`

`out_dst_len > 0`

#### Returns
A new VRB entry. 

#### Returns
NULL, if VRB is full.

#### `public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_from_route`](#group__net__gnrc__sixlowpan__frag__vrb_1ga8a71ad58a428aec296feece9e9c1f00d)`(const `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` * base,`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr)` 

Generate reassembly buffer from a header's forwarding information.

#### Parameters
* `base` Base data of the datagram. Must not be `NULL`. 

* `netif` Restrict route to this interface. May be `NULL` for any interface. 

* `hdr` Header from which to take the forwarding information from (e.g. IPv6 header implies `hdr->type == GNRC_NETTYPE_IPV6`).

`base != NULL`

`(hdr != NULL) && (hdr->data != NULL) && (hdr->size > 0)`

#### Returns
The VRB entry pointing to the next hop based on the forwarding information provided in `hdr` and present in the respective forwarding information base for `hdr->type`. 

#### Returns
NULL, if VRB is full or if there is no route to destination in `hdr`.

#### `public void `[`gnrc_sixlowpan_frag_vrb_gc`](#group__net__gnrc__sixlowpan__frag__vrb_1ga93706de5562fe54cb1af92c3c6e04672)`(void)` 

Checks timeouts and removes entries if necessary.

#### `public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_get`](#group__net__gnrc__sixlowpan__frag__vrb_1gaee6bed2991fc53614c8ff1e1fa2f1874)`(const uint8_t * src,size_t src_len,unsigned src_tag)` 

Gets a VRB entry.

#### Parameters
* `src` Link-layer source address of the original fragment. 

* `src_len` Length of `src`. 

* `src_tag` Tag of the original fragment.

#### Returns
The VRB entry identified by the given parameters. 

#### Returns
NULL, if there is no entry in the VRB that could be identified by the given parameters.

#### `public `[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * `[`gnrc_sixlowpan_frag_vrb_reverse`](#group__net__gnrc__sixlowpan__frag__vrb_1ga18ca874893e16c33458494266aacf77c)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const uint8_t * src,size_t src_len,unsigned tag)` 

Reverse VRB lookup.

#### Parameters
* `netif` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface the reverse label-switched packet came over 

* `src` Link-layer source address of reverse label-switched packet. 

* `src_len` Length of `src`. 

* `tag` Tag of the reverse label-switched packet.

#### Returns
The VRB entry with `vrb->super.dst == src` and `vrb->out_tag == tag`. 

#### Returns
NULL, if there is no entry in the VRB that has these values.

#### `public inline static void `[`gnrc_sixlowpan_frag_vrb_rm`](#group__net__gnrc__sixlowpan__frag__vrb_1ga5b87c9e955ccfe7c49afcf3f8490421f)`(`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrb)` 

Removes an entry from the VRB.

#### Parameters
* `vrb` A VRB entry

#### `public inline static bool `[`gnrc_sixlowpan_frag_vrb_entry_empty`](#group__net__gnrc__sixlowpan__frag__vrb_1gae51437b11362c8ff378988073c30dbf5)`(`[`gnrc_sixlowpan_frag_vrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t)` * vrb)` 

Determines if a VRB entry is empty.

#### Parameters
* `vrb` A VRB entry

#### Returns
true, if `vrb` entry is empty. 

#### Returns
false, if `vrb` entry is not empty.

#### `public void `[`gnrc_sixlowpan_frag_vrb_reset`](#group__net__gnrc__sixlowpan__frag__vrb_1ga07e60be1551d6768570c9bb6ed63abd0)`(void)` 

Resets the VRB to a clean state.

Only available when [TEST_SUITES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__utils_1gae90eaff98dfad549cb524063b2277272) is defined

# struct `gnrc_sixlowpan_frag_vrb_t` 

Representation of the virtual reassembly buffer entry.

[gnrc_sixlowpan_frag_rb_base_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t_1a1026e94e7e0383e0632d9b061cf7d77a) of [gnrc_sixlowpan_frag_vrb_t::super](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_vrb.md#structgnrc__sixlowpan__frag__vrb__t_1abce0736f0ae502fee39d6ae1167b4b22) becomes the next hop destination address.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` `[`super`](#structgnrc__sixlowpan__frag__vrb__t_1abce0736f0ae502fee39d6ae1167b4b22) | base type
`public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`out_netif`](#structgnrc__sixlowpan__frag__vrb__t_1a225fa6767a98c33927305e91bd52c428) | Outgoing interface to [gnrc_sixlowpan_frag_rb_base_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t_1a1026e94e7e0383e0632d9b061cf7d77a).
`public uint16_t `[`out_tag`](#structgnrc__sixlowpan__frag__vrb__t_1abbd97845a24841f2ece5ba96ebc477b1) | Outgoing tag to [gnrc_sixlowpan_frag_rb_base_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t_1a1026e94e7e0383e0632d9b061cf7d77a).

## Members

#### `public `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` `[`super`](#structgnrc__sixlowpan__frag__vrb__t_1abce0736f0ae502fee39d6ae1167b4b22) 

base type

#### `public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`out_netif`](#structgnrc__sixlowpan__frag__vrb__t_1a225fa6767a98c33927305e91bd52c428) 

Outgoing interface to [gnrc_sixlowpan_frag_rb_base_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t_1a1026e94e7e0383e0632d9b061cf7d77a).

#### `public uint16_t `[`out_tag`](#structgnrc__sixlowpan__frag__vrb__t_1abbd97845a24841f2ece5ba96ebc477b1) 

Outgoing tag to [gnrc_sixlowpan_frag_rb_base_t::dst](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t_1a1026e94e7e0383e0632d9b061cf7d77a).

