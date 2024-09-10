---
title: api-net_gnrc_sixlowpan_frag_rb.md
description: api-net_gnrc_sixlowpan_frag_rb.md
---
# group `net_gnrc_sixlowpan_frag_rb` 

6LoWPAN reassembly buffer

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_SIXLOWPAN_FRAG_RB_GC_MSG`](#group__net__gnrc__sixlowpan__frag__rb_1ga1a2174329892f04bd59c1414a2cb132a)            | Message type for triggering garbage collection reassembly buffer.
`public `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * `[`gnrc_sixlowpan_frag_rb_add`](#group__net__gnrc__sixlowpan__frag__rb_1ga0679e4d25cef6dbe7080a6f9ef4f90da)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * frag,size_t offset,unsigned page)`            | Adds a new fragment to the reassembly buffer.
`public `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * `[`gnrc_sixlowpan_frag_rb_get_by_datagram`](#group__net__gnrc__sixlowpan__frag__rb_1gaebaa664642703d0c5a5e0b4f256a9d0a)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,uint16_t tag)`            | Gets a reassembly buffer entry with a given link-layer address pair and tag.
`public bool `[`gnrc_sixlowpan_frag_rb_exists`](#group__net__gnrc__sixlowpan__frag__rb_1ga982796cac1a07a464f4f5e7c17365049)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,uint16_t tag)`            | Checks if a reassembly buffer entry with a given link-layer address pair and tag exists.
`public void `[`gnrc_sixlowpan_frag_rb_rm_by_datagram`](#group__net__gnrc__sixlowpan__frag__rb_1ga957eeb60073f3e7d941ede46db96faaa)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,uint16_t tag)`            | Removes a reassembly buffer entry with a given link-layer address pair and tag.
`public inline static bool `[`gnrc_sixlowpan_frag_rb_entry_empty`](#group__net__gnrc__sixlowpan__frag__rb_1ga393491b8156ac39c86f0bfdda3b9594e)`(const `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * rbuf)`            | Checks if a reassembly buffer entry is unset.
`public void `[`gnrc_sixlowpan_frag_rb_reset`](#group__net__gnrc__sixlowpan__frag__rb_1ga31fc82a9b446f9d2315a4e9b106fc69a)`(void)`            | Resets the packet buffer to a clean state.
`public const `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * `[`gnrc_sixlowpan_frag_rb_array`](#group__net__gnrc__sixlowpan__frag__rb_1ga6ad057610d3666e6bc05ea53740551f4)`(void)`            | Returns a pointer to the array representing the reassembly buffer.
`public void `[`gnrc_sixlowpan_frag_rb_base_rm`](#group__net__gnrc__sixlowpan__frag__rb_1ga9cd39101df2fcbc409d9a2069105fd23)`(`[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` * entry)`            | Remove base entry.
`public void `[`gnrc_sixlowpan_frag_rb_gc`](#group__net__gnrc__sixlowpan__frag__rb_1ga717aae85efc54c72a208cff5b350aa39)`(void)`            | Garbage collect reassembly buffer.
`public int `[`gnrc_sixlowpan_frag_rb_dispatch_when_complete`](#group__net__gnrc__sixlowpan__frag__rb_1ga47c7998eeeb018ab03f57bce66e780fb)`(`[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * rbuf,`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif)`            | Checks if a reassembly buffer entry is complete and dispatches it to the next layer if that is the case.
`public inline static void `[`gnrc_sixlowpan_frag_rb_remove`](#group__net__gnrc__sixlowpan__frag__rb_1ga694ac364cefbc605e46665582d560dd5)`(`[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * rbuf)`            | Unsets a reassembly buffer entry (but does not free rbuf_t::super::pkt)
`public bool `[`gnrc_sixlowpan_frag_rb_ints_empty`](#group__net__gnrc__sixlowpan__frag__rb_1ga50422668e0b3ef824fb7c15c7c18c988)`(void)`            | Check if pool of fragment intervals is empty.
`struct `[`gnrc_sixlowpan_frag_rb_int`](#structgnrc__sixlowpan__frag__rb__int) | Fragment intervals to identify limits of fragments and duplicates.
`struct `[`gnrc_sixlowpan_frag_rb_base_t`](#structgnrc__sixlowpan__frag__rb__base__t) | Base class for both reassembly buffer and virtual reassembly buffer.
`struct `[`gnrc_sixlowpan_frag_rb_t`](#structgnrc__sixlowpan__frag__rb__t) | An entry in the 6LoWPAN reassembly buffer.

## Members

#### `define `[`GNRC_SIXLOWPAN_FRAG_RB_GC_MSG`](#group__net__gnrc__sixlowpan__frag__rb_1ga1a2174329892f04bd59c1414a2cb132a) 

Message type for triggering garbage collection reassembly buffer.

#### `public `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * `[`gnrc_sixlowpan_frag_rb_add`](#group__net__gnrc__sixlowpan__frag__rb_1ga0679e4d25cef6dbe7080a6f9ef4f90da)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * frag,size_t offset,unsigned page)` 

Adds a new fragment to the reassembly buffer.

If the packet is complete, dispatch the packet with the transmit information of the last fragment.

#### Parameters
* `netif_hdr` The interface header of the fragment, with [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) and its source and destination address set. 

* `frag` The fragment to add. Will be released by the function. 

* `offset` The fragment's offset. 

* `page` Current 6Lo dispatch parsing page.

#### Returns
The reassembly buffer entry the fragment was added to on success. 

#### Returns
NULL on error.

#### `public `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * `[`gnrc_sixlowpan_frag_rb_get_by_datagram`](#group__net__gnrc__sixlowpan__frag__rb_1gaebaa664642703d0c5a5e0b4f256a9d0a)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,uint16_t tag)` 

Gets a reassembly buffer entry with a given link-layer address pair and tag.

`netif_hdr != NULL`

#### Parameters
* `netif_hdr` An interface header to provide the (source, destination) link-layer address pair. Must not be NULL. 

* `tag` Tag to search for.

datagram_size is not a search parameter as the primary use case for this function is [Selective Fragment Recovery](https://tools.ietf.org/html/rfc8931) where this information only exists in the first fragment.

#### Returns
The reassembly buffer entry identified by the source and destination address in the `netif_hdr` and `tag`, if any such entry exist. 

#### Returns
NULL, if no entry with the given identifying tuple exist.

#### `public bool `[`gnrc_sixlowpan_frag_rb_exists`](#group__net__gnrc__sixlowpan__frag__rb_1ga982796cac1a07a464f4f5e7c17365049)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,uint16_t tag)` 

Checks if a reassembly buffer entry with a given link-layer address pair and tag exists.

`netif_hdr != NULL`

#### Parameters
* `netif_hdr` An interface header to provide the (source, destination) link-layer address pair. Must not be NULL. 

* `tag` Tag to search for.

datagram_size is not a search parameter as the primary use case for this function is [Selective Fragment Recovery](https://tools.ietf.org/html/rfc8931) where this information only exists in the first fragment.

#### Returns
true, if an entry with the given tuple exist. 

#### Returns
false, if no entry with the given tuple exist.

#### `public void `[`gnrc_sixlowpan_frag_rb_rm_by_datagram`](#group__net__gnrc__sixlowpan__frag__rb_1ga957eeb60073f3e7d941ede46db96faaa)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif_hdr,uint16_t tag)` 

Removes a reassembly buffer entry with a given link-layer address pair and tag.

`netif_hdr != NULL`

#### Parameters
* `netif_hdr` An interface header to provide the (source, destination) link-layer address pair. Must not be NULL. 

* `tag` Tag to search for.

datagram_size is not a search parameter as the primary use case for this function is [Selective Fragment Recovery](https://tools.ietf.org/html/rfc8931) where this information only exists in the first fragment.

#### `public inline static bool `[`gnrc_sixlowpan_frag_rb_entry_empty`](#group__net__gnrc__sixlowpan__frag__rb_1ga393491b8156ac39c86f0bfdda3b9594e)`(const `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * rbuf)` 

Checks if a reassembly buffer entry is unset.

#### Parameters
* `rbuf` A reassembly buffer entry

#### Returns
true, if `rbuf` is empty (i.e. rbuf->super.pkt is NULL). 

#### Returns
false, if `rbuf` is in use.

#### `public void `[`gnrc_sixlowpan_frag_rb_reset`](#group__net__gnrc__sixlowpan__frag__rb_1ga31fc82a9b446f9d2315a4e9b106fc69a)`(void)` 

Resets the packet buffer to a clean state.

Only available when [TEST_SUITES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__utils_1gae90eaff98dfad549cb524063b2277272) is defined

#### `public const `[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * `[`gnrc_sixlowpan_frag_rb_array`](#group__net__gnrc__sixlowpan__frag__rb_1ga6ad057610d3666e6bc05ea53740551f4)`(void)` 

Returns a pointer to the array representing the reassembly buffer.

Only available when [TEST_SUITES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__utils_1gae90eaff98dfad549cb524063b2277272) is defined

#### Returns
The first element of the reassembly buffer. `const`, so that write access is immediately spotted at compile time of tests. The `const` qualifier may however be discarded if required by the tests.

#### `public void `[`gnrc_sixlowpan_frag_rb_base_rm`](#group__net__gnrc__sixlowpan__frag__rb_1ga9cd39101df2fcbc409d9a2069105fd23)`(`[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` * entry)` 

Remove base entry.

#### Parameters
* `entry` Entry to remove

#### `public void `[`gnrc_sixlowpan_frag_rb_gc`](#group__net__gnrc__sixlowpan__frag__rb_1ga717aae85efc54c72a208cff5b350aa39)`(void)` 

Garbage collect reassembly buffer.

#### `public int `[`gnrc_sixlowpan_frag_rb_dispatch_when_complete`](#group__net__gnrc__sixlowpan__frag__rb_1ga47c7998eeeb018ab03f57bce66e780fb)`(`[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * rbuf,`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * netif)` 

Checks if a reassembly buffer entry is complete and dispatches it to the next layer if that is the case.

`rbuf != NULL`

`netif != NULL`

#### Parameters
* `rbuf` A reassembly buffer entry. Must not be NULL. 

* `netif` Original [gnrc_netif_hdr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t) of the last received frame. Used to construct the [gnrc_netif_hdr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t) of the completed datagram. Must not be NULL.

#### Returns
>0, when the datagram in `rbuf` was complete and dispatched. 

#### Returns
0, when the datagram in `rbuf` is not complete. 

#### Returns
-1, if the the reassembled datagram was not dispatched. `rbuf` is destroyed either way.

#### `public inline static void `[`gnrc_sixlowpan_frag_rb_remove`](#group__net__gnrc__sixlowpan__frag__rb_1ga694ac364cefbc605e46665582d560dd5)`(`[`gnrc_sixlowpan_frag_rb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__t)` * rbuf)` 

Unsets a reassembly buffer entry (but does not free rbuf_t::super::pkt)

`rbuf != NULL`

This functions sets rbuf_t::super::pkt to NULL and removes all rbuf::ints.

Does nothing if module `gnrc_sixlowpan_frag_rb` is not included.

#### Parameters
* `rbuf` A reassembly buffer entry. Must not be NULL.

#### `public bool `[`gnrc_sixlowpan_frag_rb_ints_empty`](#group__net__gnrc__sixlowpan__frag__rb_1ga50422668e0b3ef824fb7c15c7c18c988)`(void)` 

Check if pool of fragment intervals is empty.

**See also**: [gnrc_sixlowpan_frag_rb_int_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb_1gad58d5cb81fd53e54e72e367529d3dc5f)

Returns only non-true values if [TEST_SUITES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__utils_1gae90eaff98dfad549cb524063b2277272) is defined.

#### Returns
true, if pool of fragment intervals is empty 

#### Returns
false, if pool of fragment intervals is not empty

# struct `gnrc_sixlowpan_frag_rb_int` 

Fragment intervals to identify limits of fragments and duplicates.

Fragments MUST NOT overlap and overlapping fragments are to be discarded

**See also**: [RFC 4944, section 5.3 ](https://tools.ietf.org/html/rfc4944#section-5.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`gnrc_sixlowpan_frag_rb_int`](#structgnrc__sixlowpan__frag__rb__int)` * `[`next`](#structgnrc__sixlowpan__frag__rb__int_1a43f56c09d554f7895a36fe8d1dd66ba8) | next element in fragment interval list
`public uint16_t `[`start`](#structgnrc__sixlowpan__frag__rb__int_1a86a5bee9393f9897272d3ad510752608) | start byte of the fragment interval
`public uint16_t `[`end`](#structgnrc__sixlowpan__frag__rb__int_1acae907a1ca70b89ea9b7dc88871486fb) | end byte of the fragment interval

## Members

#### `public struct `[`gnrc_sixlowpan_frag_rb_int`](#structgnrc__sixlowpan__frag__rb__int)` * `[`next`](#structgnrc__sixlowpan__frag__rb__int_1a43f56c09d554f7895a36fe8d1dd66ba8) 

next element in fragment interval list

#### `public uint16_t `[`start`](#structgnrc__sixlowpan__frag__rb__int_1a86a5bee9393f9897272d3ad510752608) 

start byte of the fragment interval

#### `public uint16_t `[`end`](#structgnrc__sixlowpan__frag__rb__int_1acae907a1ca70b89ea9b7dc88871486fb) 

end byte of the fragment interval

# struct `gnrc_sixlowpan_frag_rb_base_t` 

Base class for both reassembly buffer and virtual reassembly buffer.

* the source address,

* the destination address,

* the datagram size, and

* the datagram tag

to identify all fragments that belong to the given datagram.

**See also**: [RFC 4944, section 5.3](https://tools.ietf.org/html/rfc4944#section-5.3)

**See also**: [https://tools.ietf.org/html/draft-ietf-lwig-6lowpan-virtual-reassembly-01](https://tools.ietf.org/html/draft-ietf-lwig-6lowpan-virtual-reassembly-01)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_sixlowpan_frag_rb_int_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb_1gad58d5cb81fd53e54e72e367529d3dc5f)` * `[`ints`](#structgnrc__sixlowpan__frag__rb__base__t_1a0589f4f917a01dabaf28458b565823e7) | intervals of already received fragments
`public uint8_t `[`src`](#structgnrc__sixlowpan__frag__rb__base__t_1a6eea001ad24032b9183f319a5b600af4) | source address
`public uint8_t `[`dst`](#structgnrc__sixlowpan__frag__rb__base__t_1a1026e94e7e0383e0632d9b061cf7d77a) | destination address
`public uint8_t `[`src_len`](#structgnrc__sixlowpan__frag__rb__base__t_1a5526a05f8edb58745d9d29626b9a81fb) | length of gnrc_sixlowpan_frag_rb_t::src
`public uint8_t `[`dst_len`](#structgnrc__sixlowpan__frag__rb__base__t_1a8fcfd27cf900bdcfe6351629789f438a) | length of gnrc_sixlowpan_frag_rb_t::dst
`public uint16_t `[`tag`](#structgnrc__sixlowpan__frag__rb__base__t_1a4e038032580402dfd2bd1c209f1d096c) | the datagram's tag
`public uint16_t `[`datagram_size`](#structgnrc__sixlowpan__frag__rb__base__t_1a277f87df91dfc173c073ed559f3f6ce4) | the datagram's size
`public uint16_t `[`current_size`](#structgnrc__sixlowpan__frag__rb__base__t_1ae16c1d8a282198f5d96d354b49f3a937) | The number of bytes currently received of the complete datagram.
`public uint32_t `[`arrival`](#structgnrc__sixlowpan__frag__rb__base__t_1a6ad75423c88cc52b18a84a4c739191d0) | time in microseconds of arrival of last received fragment

## Members

#### `public `[`gnrc_sixlowpan_frag_rb_int_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__rb_1gad58d5cb81fd53e54e72e367529d3dc5f)` * `[`ints`](#structgnrc__sixlowpan__frag__rb__base__t_1a0589f4f917a01dabaf28458b565823e7) 

intervals of already received fragments

#### `public uint8_t `[`src`](#structgnrc__sixlowpan__frag__rb__base__t_1a6eea001ad24032b9183f319a5b600af4) 

source address

#### `public uint8_t `[`dst`](#structgnrc__sixlowpan__frag__rb__base__t_1a1026e94e7e0383e0632d9b061cf7d77a) 

destination address

#### `public uint8_t `[`src_len`](#structgnrc__sixlowpan__frag__rb__base__t_1a5526a05f8edb58745d9d29626b9a81fb) 

length of gnrc_sixlowpan_frag_rb_t::src

#### `public uint8_t `[`dst_len`](#structgnrc__sixlowpan__frag__rb__base__t_1a8fcfd27cf900bdcfe6351629789f438a) 

length of gnrc_sixlowpan_frag_rb_t::dst

#### `public uint16_t `[`tag`](#structgnrc__sixlowpan__frag__rb__base__t_1a4e038032580402dfd2bd1c209f1d096c) 

the datagram's tag

#### `public uint16_t `[`datagram_size`](#structgnrc__sixlowpan__frag__rb__base__t_1a277f87df91dfc173c073ed559f3f6ce4) 

the datagram's size

#### `public uint16_t `[`current_size`](#structgnrc__sixlowpan__frag__rb__base__t_1ae16c1d8a282198f5d96d354b49f3a937) 

The number of bytes currently received of the complete datagram.

#### `public uint32_t `[`arrival`](#structgnrc__sixlowpan__frag__rb__base__t_1a6ad75423c88cc52b18a84a4c739191d0) 

time in microseconds of arrival of last received fragment

# struct `gnrc_sixlowpan_frag_rb_t` 

An entry in the 6LoWPAN reassembly buffer.

A recipient of a fragment SHALL use

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` `[`super`](#structgnrc__sixlowpan__frag__rb__t_1a16e6eb15c5f56a0ebc00068bf236c9b2) | base class
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__sixlowpan__frag__rb__t_1a219a81a0a2057b9ebb44172a5c1dc042) | The reassembled packet in the packet buffer.
`public int8_t `[`offset_diff`](#structgnrc__sixlowpan__frag__rb__t_1a6c959f0218ea36b75fdbda30acd4a1e5) | offset change due to recompression
`public  `[`BITFIELD`](#structgnrc__sixlowpan__frag__rb__t_1a98ed76135edefe2a73a3a99318aa4273)`(received,`[`SIXLOWPAN_SFR_ACK_BITMAP_SIZE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga4b471b942ceca9cfdbc9f9a1ba407589)`)` | Bitmap for received fragments.

## Members

#### `public `[`gnrc_sixlowpan_frag_rb_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_rb.md#structgnrc__sixlowpan__frag__rb__base__t)` `[`super`](#structgnrc__sixlowpan__frag__rb__t_1a16e6eb15c5f56a0ebc00068bf236c9b2) 

base class

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__sixlowpan__frag__rb__t_1a219a81a0a2057b9ebb44172a5c1dc042) 

The reassembled packet in the packet buffer.

#### `public int8_t `[`offset_diff`](#structgnrc__sixlowpan__frag__rb__t_1a6c959f0218ea36b75fdbda30acd4a1e5) 

offset change due to recompression

#### `public  `[`BITFIELD`](#structgnrc__sixlowpan__frag__rb__t_1a98ed76135edefe2a73a3a99318aa4273)`(received,`[`SIXLOWPAN_SFR_ACK_BITMAP_SIZE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__sfr_1ga4b471b942ceca9cfdbc9f9a1ba407589)`)` 

Bitmap for received fragments.

Only available with module `gnrc_sixlowpan_frag_sfr` compiled in.

