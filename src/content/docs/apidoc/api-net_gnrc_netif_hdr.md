---
title: api-net_gnrc_netif_hdr.md
description: api-net_gnrc_netif_hdr.md
---
# group `net_gnrc_netif_hdr` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_NETIF_HDR_L2ADDR_MAX_LEN`](#group__net__gnrc__netif__hdr_1gaefe50831ad4ae5980edb0abc70fa3392)            | Maximum length of the l2 addresses of the generic interface header in bytes.
`define `[`GNRC_NETIF_HDR_L2ADDR_PRINT_LEN`](#group__net__gnrc__netif__hdr_1gaffd8f1d5e824c8379931b8ac9da1472d)            | Maximum length of the string representatiom of l2 addresses of the generic interface header in bytes.
`define `[`GNRC_NETIF_HDR_NO_RSSI`](#group__net__gnrc__netif__hdr_1gac948eb255027f6e9721c26ba928b5c82)            | Special value to indicate that no RSSI value is present.
`define `[`GNRC_NETIF_HDR_NO_LQI`](#group__net__gnrc__netif__hdr_1gaeb97c5bbce800f42f2f1429c8ba94940)            | Special value to indicate that no LQI value is present.
`public inline static void `[`gnrc_netif_hdr_init`](#group__net__gnrc__netif__hdr_1ga3a0838c7d1e42045a85aae4897b20ba6)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,uint8_t src_l2addr_len,uint8_t dst_l2addr_len)`            | Initialize the given generic network interface header.
`public inline static size_t `[`gnrc_netif_hdr_sizeof`](#group__net__gnrc__netif__hdr_1ga1b3ead255f1d71493ea7bf2c433b7a96)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)`            | Get the size of the given generic network interface header.
`public inline static uint8_t * `[`gnrc_netif_hdr_get_src_addr`](#group__net__gnrc__netif__hdr_1ga6cbc76588f55f2b35486391a4f24e381)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)`            | Get the source address from the given header.
`public inline static void `[`gnrc_netif_hdr_set_src_addr`](#group__net__gnrc__netif__hdr_1ga3dd575e7b3f58df84f40060b41aa5499)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,const uint8_t * addr,uint8_t addr_len)`            | Set the source address in the given header.
`public inline static uint8_t * `[`gnrc_netif_hdr_get_dst_addr`](#group__net__gnrc__netif__hdr_1ga4c3eecefb00149c4c10bb9030160e1ea)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)`            | Get the destination address from the given header.
`public inline static void `[`gnrc_netif_hdr_set_dst_addr`](#group__net__gnrc__netif__hdr_1gaf1ee0be02c94d05454ab328b64774a30)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,const uint8_t * addr,uint8_t addr_len)`            | Set the destination address in the given header.
`public inline static void `[`gnrc_netif_hdr_set_timestamp`](#group__net__gnrc__netif__hdr_1gaf2000c2ee19aa294514423ffe27880b8)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,uint64_t timestamp)`            | Set the timestamp in the netif header.
`public inline static int `[`gnrc_netif_hdr_get_timestamp`](#group__net__gnrc__netif__hdr_1ga4207cabecde94cdeba03fbc19e42e202)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,uint64_t * dest)`            | Get the timestamp of the frame in nanoseconds since epoch.
`public inline static int `[`gnrc_netif_hdr_ipv6_iid_from_src`](#group__net__gnrc__netif__hdr_1ga48bbda0b6b85d849a22e9641e31a2c3e)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)`            | Converts the source address of a given [Generic network interface header](#group__net__gnrc__netif__hdr) to an IPv6 IID.
`public inline static int `[`gnrc_netif_hdr_ipv6_iid_from_dst`](#group__net__gnrc__netif__hdr_1ga85f799882528aba3e5b62bacb6332bb3)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)`            | Converts the destination address of a given [Generic network interface header](#group__net__gnrc__netif__hdr) to an IPv6 IID.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_netif_hdr_build`](#group__net__gnrc__netif__hdr_1ga5f50fe3a4e7bbec638b0d5b1cb85eb2e)`(const uint8_t * src,uint8_t src_len,const uint8_t * dst,uint8_t dst_len)`            | Builds a generic network interface header for sending and adds it to the packet buffer.
`public inline static `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_hdr_get_netif`](#group__net__gnrc__netif__hdr_1gab6ae423f60ad2fcfa435769a4f8db32c)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)`            | Convenience function to get the corresponding interface struct for a given interface header.
`public inline static void `[`gnrc_netif_hdr_set_netif`](#group__net__gnrc__netif__hdr_1ga6bfd00f155ec994c95f67f340632f911)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Convenience function to set the interface of an interface header, given the network interface.
`public void `[`gnrc_netif_hdr_print`](#group__net__gnrc__netif__hdr_1gad410e937d22d546590d6d5ffe510fff3)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)`            | Outputs a generic interface header to stdout.
`public uint8_t `[`gnrc_netif_hdr_get_flag`](#group__net__gnrc__netif__hdr_1ga0b0c5a77402e579b8ef8b9f5d493906e)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Fetch the netif header flags of a gnrc packet.
`public int `[`gnrc_netif_hdr_get_dstaddr`](#group__net__gnrc__netif__hdr_1ga22d869e083065cae988a1815cab3da24)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t ** pointer_to_addr)`            | Extract the destination address out of a gnrc packet.
`public int `[`gnrc_netif_hdr_get_srcaddr`](#group__net__gnrc__netif__hdr_1ga04f1a2efa801939013d95e6f1e9cb3f6)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t ** pointer_to_addr)`            | Extract the source address out of a gnrc packet.
`struct `[`gnrc_netif_hdr_t`](#structgnrc__netif__hdr__t) | Generic network interface header.

## Members

#### `define `[`GNRC_NETIF_HDR_L2ADDR_MAX_LEN`](#group__net__gnrc__netif__hdr_1gaefe50831ad4ae5980edb0abc70fa3392) 

Maximum length of the l2 addresses of the generic interface header in bytes.

#### `define `[`GNRC_NETIF_HDR_L2ADDR_PRINT_LEN`](#group__net__gnrc__netif__hdr_1gaffd8f1d5e824c8379931b8ac9da1472d) 

Maximum length of the string representatiom of l2 addresses of the generic interface header in bytes.

#### `define `[`GNRC_NETIF_HDR_NO_RSSI`](#group__net__gnrc__netif__hdr_1gac948eb255027f6e9721c26ba928b5c82) 

Special value to indicate that no RSSI value is present.

See [gnrc_netif_hdr_t::rssi](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27fb1e471d3deee75af21e9275969587)

#### `define `[`GNRC_NETIF_HDR_NO_LQI`](#group__net__gnrc__netif__hdr_1gaeb97c5bbce800f42f2f1429c8ba94940) 

Special value to indicate that no LQI value is present.

See [gnrc_netif_hdr_t::lqi](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1afcef28c36923802cd092f42e9f60e29c)

#### `public inline static void `[`gnrc_netif_hdr_init`](#group__net__gnrc__netif__hdr_1ga3a0838c7d1e42045a85aae4897b20ba6)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,uint8_t src_l2addr_len,uint8_t dst_l2addr_len)` 

Initialize the given generic network interface header.

#### Parameters
* `hdr` header to initialize 

* `src_l2addr_len` link layer source address length 

* `dst_l2addr_len` link layer destination address length

#### `public inline static size_t `[`gnrc_netif_hdr_sizeof`](#group__net__gnrc__netif__hdr_1ga1b3ead255f1d71493ea7bf2c433b7a96)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)` 

Get the size of the given generic network interface header.

#### Parameters
* `hdr` header to get the size of

#### Returns
the size of the given header, including link layer addresses

#### `public inline static uint8_t * `[`gnrc_netif_hdr_get_src_addr`](#group__net__gnrc__netif__hdr_1ga6cbc76588f55f2b35486391a4f24e381)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)` 

Get the source address from the given header.

#### Parameters
* `hdr` header to read from

#### Returns
pointer to source address on success 

#### Returns
NULL on error

#### `public inline static void `[`gnrc_netif_hdr_set_src_addr`](#group__net__gnrc__netif__hdr_1ga3dd575e7b3f58df84f40060b41aa5499)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,const uint8_t * addr,uint8_t addr_len)` 

Set the source address in the given header.

#### Parameters
* `hdr` header to write to 

* `addr` new source address 

* `addr_len` *addr* length

#### `public inline static uint8_t * `[`gnrc_netif_hdr_get_dst_addr`](#group__net__gnrc__netif__hdr_1ga4c3eecefb00149c4c10bb9030160e1ea)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)` 

Get the destination address from the given header.

#### Parameters
* `hdr` header to read from

#### Returns
pointer to destination address on success 

#### Returns
NULL on error

#### `public inline static void `[`gnrc_netif_hdr_set_dst_addr`](#group__net__gnrc__netif__hdr_1gaf1ee0be02c94d05454ab328b64774a30)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,const uint8_t * addr,uint8_t addr_len)` 

Set the destination address in the given header.

#### Parameters
* `hdr` header to write to 

* `addr` new destination address 

* `addr_len` *addr* length

#### `public inline static void `[`gnrc_netif_hdr_set_timestamp`](#group__net__gnrc__netif__hdr_1gaf2000c2ee19aa294514423ffe27880b8)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,uint64_t timestamp)` 

Set the timestamp in the netif header.

#### Parameters
* `hdr` Header to set the timestamp in 

* `timestamp` Timestamp to set (nanoseconds since epoch)

If the module gnrc_netif_timestamp is not used, a call to this function become a non-op (and will be fully optimized out by the compiler)

#### `public inline static int `[`gnrc_netif_hdr_get_timestamp`](#group__net__gnrc__netif__hdr_1ga4207cabecde94cdeba03fbc19e42e202)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,uint64_t * dest)` 

Get the timestamp of the frame in nanoseconds since epoch.

#### Parameters
* `hdr` Header to read the timestamp from 

* `dest` The timestamp will be stored here 

#### Parameters
* `0` The timestamp was stored in `dest`

* `-1` No timestamp available, `dest` is unchanged

If the module gnrc_netif_timestamp is not used, this will always return 0

#### `public inline static int `[`gnrc_netif_hdr_ipv6_iid_from_src`](#group__net__gnrc__netif__hdr_1ga48bbda0b6b85d849a22e9641e31a2c3e)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)` 

Converts the source address of a given [Generic network interface header](#group__net__gnrc__netif__hdr) to an IPv6 IID.

`netif` is intentionally required to be provided so that the caller needs to retrieve it from [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) of `hdr` only once instead of this function retrieving it at every call.

`netif->pid == hdr->if_pid`

#### Parameters
* `netif` A network interface. [gnrc_netif_t::pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a48524d59f708cc987051ff1dafe51fe7) must be equal to [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) of `hdr`. 

* `hdr` Header to convert source address from. 

* `iid` The IID based on [gnrc_netif_t::device_type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a269e7bb2472a008176c8e173cd152600).

#### Returns
same as gnrc_netif_ipv6_iid_from_addr().

#### `public inline static int `[`gnrc_netif_hdr_ipv6_iid_from_dst`](#group__net__gnrc__netif__hdr_1ga85f799882528aba3e5b62bacb6332bb3)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * iid)` 

Converts the destination address of a given [Generic network interface header](#group__net__gnrc__netif__hdr) to an IPv6 IID.

`netif` is intentionally required to be provided so that the caller needs to retrieve it from [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) of `hdr` only once instead of this function retrieving it at every call.

`netif->pid == hdr->if_pid`

#### Parameters
* `netif` A network interface. [gnrc_netif_t::pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a48524d59f708cc987051ff1dafe51fe7) must be equal to [gnrc_netif_hdr_t::if_pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) of `hdr`. 

* `hdr` Header to convert destination address from. 

* `iid` The IID based on [gnrc_netif_t::device_type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a269e7bb2472a008176c8e173cd152600).

#### Returns
same as gnrc_netif_ipv6_iid_from_addr().

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_netif_hdr_build`](#group__net__gnrc__netif__hdr_1ga5f50fe3a4e7bbec638b0d5b1cb85eb2e)`(const uint8_t * src,uint8_t src_len,const uint8_t * dst,uint8_t dst_len)` 

Builds a generic network interface header for sending and adds it to the packet buffer.

#### Parameters
* `src` Source address for the header. Can be NULL if not known or required. 

* `src_len` Length of `src`. Can be 0 if not known or required. 

* `dst` Destination address for the header. Can be NULL if not known or required. 

* `dst_len` Length of `dst`. Can be 0 if not known or required.

#### Returns
The generic network layer header on success. 

#### Returns
NULL on error.

#### `public inline static `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_hdr_get_netif`](#group__net__gnrc__netif__hdr_1gab6ae423f60ad2fcfa435769a4f8db32c)`(const `[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)` 

Convenience function to get the corresponding interface struct for a given interface header.

`hdr != NULL`

#### Parameters
* `hdr` Header to read interface from.

#### Returns
The [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t) representation of the interface on success 

#### Returns
NULL, on error.

#### `public inline static void `[`gnrc_netif_hdr_set_netif`](#group__net__gnrc__netif__hdr_1ga6bfd00f155ec994c95f67f340632f911)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr,const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Convenience function to set the interface of an interface header, given the network interface.

#### Parameters
* `hdr` Header to set the interface for. 

* `netif` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface to set for `hdr`.

#### `public void `[`gnrc_netif_hdr_print`](#group__net__gnrc__netif__hdr_1gad410e937d22d546590d6d5ffe510fff3)`(`[`gnrc_netif_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t)` * hdr)` 

Outputs a generic interface header to stdout.

#### Parameters
* `hdr` A generic interface header.

#### `public uint8_t `[`gnrc_netif_hdr_get_flag`](#group__net__gnrc__netif__hdr_1ga0b0c5a77402e579b8ef8b9f5d493906e)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Fetch the netif header flags of a gnrc packet.

#### Parameters
* `pkt` gnrc packet from whom to fetch

#### Returns
netif header flags of `pkt`

#### Returns
0, if no header is present

#### `public int `[`gnrc_netif_hdr_get_dstaddr`](#group__net__gnrc__netif__hdr_1ga22d869e083065cae988a1815cab3da24)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t ** pointer_to_addr)` 

Extract the destination address out of a gnrc packet.

#### Parameters
* `pkt` gnrc packet from whom to extract 

* `pointer_to_addr` pointer to address will be stored here

#### Returns
length of destination address 

#### Returns
-ENOENT, if no netif header is presented in `pkt` or if no destination address field presented in netif header.

#### `public int `[`gnrc_netif_hdr_get_srcaddr`](#group__net__gnrc__netif__hdr_1ga04f1a2efa801939013d95e6f1e9cb3f6)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint8_t ** pointer_to_addr)` 

Extract the source address out of a gnrc packet.

#### Parameters
* `pkt` gnrc packet from whom to extract 

* `pointer_to_addr` pointer to address will be stored here

#### Returns
length of source address 

#### Returns
-ENOENT, if no netif header is presented in `pkt` or if no source address field presented in netif header.

# struct `gnrc_netif_hdr_t` 

Generic network interface header.

The link layer addresses included in this header are put in memory directly following this struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`src_l2addr_len`](#structgnrc__netif__hdr__t_1aa6fea1446fddd0f2d3c9f15654c38b91) | length of l2 source address in byte
`public uint8_t `[`dst_l2addr_len`](#structgnrc__netif__hdr__t_1a563ac266e69071c4854e6e1939d6cf8f) | length of l2 destination address in byte
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`if_pid`](#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) | PID of network interface.
`public uint8_t `[`flags`](#structgnrc__netif__hdr__t_1abbf718ba7223770b72eb8fbd39dd85f6) | flags as defined above
`public uint8_t `[`lqi`](#structgnrc__netif__hdr__t_1afcef28c36923802cd092f42e9f60e29c) | LQI of received packet or [GNRC_NETIF_HDR_NO_LQI](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr_1gaeb97c5bbce800f42f2f1429c8ba94940).
`public int16_t `[`rssi`](#structgnrc__netif__hdr__t_1a27fb1e471d3deee75af21e9275969587) | RSSI of received packet or [GNRC_NETIF_HDR_NO_RSSI](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr_1gac948eb255027f6e9721c26ba928b5c82).
`public uint64_t `[`timestamp`](#structgnrc__netif__hdr__t_1aad64f5e60501a4b4b215bad3c53a26e3) | Timestamp of reception in nanoseconds since epoch.

## Members

#### `public uint8_t `[`src_l2addr_len`](#structgnrc__netif__hdr__t_1aa6fea1446fddd0f2d3c9f15654c38b91) 

length of l2 source address in byte

#### `public uint8_t `[`dst_l2addr_len`](#structgnrc__netif__hdr__t_1a563ac266e69071c4854e6e1939d6cf8f) 

length of l2 destination address in byte

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`if_pid`](#structgnrc__netif__hdr__t_1a27177e629f5187ce530661a053716198) 

PID of network interface.

#### `public uint8_t `[`flags`](#structgnrc__netif__hdr__t_1abbf718ba7223770b72eb8fbd39dd85f6) 

flags as defined above

#### `public uint8_t `[`lqi`](#structgnrc__netif__hdr__t_1afcef28c36923802cd092f42e9f60e29c) 

LQI of received packet or [GNRC_NETIF_HDR_NO_LQI](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr_1gaeb97c5bbce800f42f2f1429c8ba94940).

#### `public int16_t `[`rssi`](#structgnrc__netif__hdr__t_1a27fb1e471d3deee75af21e9275969587) 

RSSI of received packet or [GNRC_NETIF_HDR_NO_RSSI](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr_1gac948eb255027f6e9721c26ba928b5c82).

#### `public uint64_t `[`timestamp`](#structgnrc__netif__hdr__t_1aad64f5e60501a4b4b215bad3c53a26e3) 

Timestamp of reception in nanoseconds since epoch.

Only when [GNRC_NETIF_HDR_FLAGS_TIMESTAMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr_1ga5685ab33e7ee3fc426281ca450245d2d) is set, this field contains valid info.

This field is only provided if module `gnrc_netif_timestamp` is used. Keep in mind that when the hardware does not provide timestamping, the network device driver could choose to provide this in software, which adds the delay and jitter of the ISR handling to the timestamp. Please keep also in mind that a hardware implementation might not be able to reliable timestamp every frame - e.g. a full-duplex wired interface might be unable to timestamp a received frame while timestamping an outgoing frame.

