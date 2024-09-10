---
title: api-net_gnrc_pkt.md
description: api-net_gnrc_pkt.md
---
# group `net_gnrc_pkt` 

[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) packet abstraction type and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_prev_snip`](#group__net__gnrc__pkt_1ga659024c7fd886a3a4860bac766e7a8c0)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)`            | Returns the snip before a given snip in a packet.
`public inline static size_t `[`gnrc_pkt_len`](#group__net__gnrc__pkt_1gac285b3db7ddae4a71f030f16f769a7d5)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Calculates length of a packet in byte.
`public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_append`](#group__net__gnrc__pkt_1ga0ed73a590699198bafa6dbc87dee06b2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)`            | Appends a snip to a packet.
`public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_prepend`](#group__net__gnrc__pkt_1ga5489d41e4be2e44221acc9111a7225cc)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)`            | Prepends a snip to a packet.
`public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_delete`](#group__net__gnrc__pkt_1ga0f3fc7501cc67570855367a8964664a2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)`            | Deletes a snip from a packet.
`public inline static size_t `[`gnrc_pkt_len_upto`](#group__net__gnrc__pkt_1ga5e676d65b3edd8cb64b48b407c3b9d30)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)`            | Calculates length of a packet in byte up to (including) a snip with the given type.
`public inline static size_t `[`gnrc_pkt_count`](#group__net__gnrc__pkt_1ga64bff5436035b3d3f4fb231c72fd9d98)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Count the numbers of snips in the given packet.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktsnip_search_type`](#group__net__gnrc__pkt_1ga75f0a9cb9c250366cc37808931b3c0f5)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)`            | Searches the packet for a packet snip of a specific type.
`struct `[`gnrc_pktsnip`](#structgnrc__pktsnip) | Type to represent parts (either headers or payload) of a packet, called snips.

## Members

#### `public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_prev_snip`](#group__net__gnrc__pkt_1ga659024c7fd886a3a4860bac766e7a8c0)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)` 

Returns the snip before a given snip in a packet.

#### Parameters
* `pkt` A packet. 

* `snip` The snip for which the predecessor in `pkt` is searched for.

#### Returns
The snip before `snip` in `pkt` if `snip` is in `pkt`. 

#### Returns
`NULL`, if `snip` is not in `pkt`.

#### `public inline static size_t `[`gnrc_pkt_len`](#group__net__gnrc__pkt_1gac285b3db7ddae4a71f030f16f769a7d5)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Calculates length of a packet in byte.

#### Parameters
* `pkt` list of packet snips.

#### Returns
length of the list of headers.

#### `public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_append`](#group__net__gnrc__pkt_1ga0ed73a590699198bafa6dbc87dee06b2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)` 

Appends a snip to a packet.

#### Parameters
* `pkt` A packet. 

* `snip` A snip.

#### Returns
The new head of `pkt`.

#### `public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_prepend`](#group__net__gnrc__pkt_1ga5489d41e4be2e44221acc9111a7225cc)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)` 

Prepends a snip to a packet.

#### Parameters
* `pkt` A packet. 

* `snip` A snip.

#### Returns
The new head of `pkt`.

#### `public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pkt_delete`](#group__net__gnrc__pkt_1ga0f3fc7501cc67570855367a8964664a2)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * snip)` 

Deletes a snip from a packet.

#### Parameters
* `pkt` A packet. 

* `snip` A snip.

#### Returns
The new head of `pkt`.

#### `public inline static size_t `[`gnrc_pkt_len_upto`](#group__net__gnrc__pkt_1ga5e676d65b3edd8cb64b48b407c3b9d30)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)` 

Calculates length of a packet in byte up to (including) a snip with the given type.

#### Parameters
* `pkt` list of packet snips. 

* `type` type of snip to stop calculation.

#### Returns
length of the list of headers.

#### `public inline static size_t `[`gnrc_pkt_count`](#group__net__gnrc__pkt_1ga64bff5436035b3d3f4fb231c72fd9d98)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Count the numbers of snips in the given packet.

#### Parameters
* `pkt` first snip in the packet

#### Returns
number of snips in the given packet

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_pktsnip_search_type`](#group__net__gnrc__pkt_1ga75f0a9cb9c250366cc37808931b3c0f5)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)` 

Searches the packet for a packet snip of a specific type.

#### Parameters
* `pkt` list of packet snips 

* `type` the type to search for

#### Returns
the packet snip in `pkt` with [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)`type`

#### Returns
NULL, if none of the snips in `pkt` is of `type`

# struct `gnrc_pktsnip` 

Type to represent parts (either headers or payload) of a packet, called snips.

The idea behind the packet snips is that they either can represent protocol-specific headers or payload. A packet can be comprised of multiple pktsnip_t elements.

Example:                                                     buffer
+---------------------------+                      +------+
| size = 14                 | data +-------------->|      |
| type = NETTYPE_ETHERNET   |------+               +------+
+---------------------------+                      .      .
      | next                                       .      .
      v                                            +------+
+---------------------------+         +----------->|      |
| size = 40                 | data    |            |      |
| type = NETTYPE_IPV6       |---------+            +------+
+---------------------------+                      .      .
      | next                                       .      .
      v                                            +------+
+---------------------------+            +-------->|      |
| size = 8                  | data       |         +------+
| type = NETTYPE_UDP        |------------+         .      .
+---------------------------+                      .      .
      | next                                       +------+
      v                                     +----->|      |
+---------------------------+               |      |      |
| size = 59                 | data          |      .      .
| type = NETTYPE_UNDEF      |---------------+      .      .
+---------------------------+                      .      .
 To keep data duplication as low as possible the order of the snips in a packet will be reversed depending on if you send the packet or if you received it. For sending the order is from (in the network stack) lowest protocol snip to the highest, for receiving the order is from highest snip to the lowest. This way, if a layer needs to duplicate the packet a tree is created rather than a duplication of the whole package.

A very extreme example for this (we only expect one or two duplications at maximum per package) can be seen here:  Sending                          Receiving
 =======                          =========

 * Payload                        * L2 header
 ^                                ^
 |                                |
 |\                               |\
 | * L4 header 1                  | * L2.5 header 1
 | * L3 header 1                  | * L3 header 1
 | * netif header 1               | * L4 header 1
 * L4 header 2                    | * Payload 1
 ^                                * L3 header 2
 |                                ^
 |\                               |
 | * L3 header 2                  |\
 | * L2 header 2                  | * L4 header 2
 * L2 header 3                    | * Payload 2
 |\                               * Payload 3
 | * L2 header 3
 * L2 header 4
 The first three fields (next, data, size) match iolist_t (named iol_next, iol_base and iol_len there). That means that any pktsnip can be casted to iolist_t for direct passing to e.g., netdev [send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga3ed135eb9019c8945718d03da23546c9) functions.

This type has no initializer on purpose. Please use [Packet buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf) as factory.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`gnrc_pktsnip`](#structgnrc__pktsnip)` * `[`next`](#structgnrc__pktsnip_1ad6d823f68b2ee82429861342bd86c0a9) | next snip in the packet
`public void * `[`data`](#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) | pointer to the data of the snip
`public size_t `[`size`](#structgnrc__pktsnip_1a0718f2cde3411a4833f82c10f8ea8d71) | the length of the snip in byte
`public unsigned int `[`users`](#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) | Counter of threads currently having control over this packet.
`public `[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` `[`type`](#structgnrc__pktsnip_1a8362d0e56cfabedcf51459377c58db59) | protocol of the packet snip

## Members

#### `public struct `[`gnrc_pktsnip`](#structgnrc__pktsnip)` * `[`next`](#structgnrc__pktsnip_1ad6d823f68b2ee82429861342bd86c0a9) 

next snip in the packet

#### `public void * `[`data`](#structgnrc__pktsnip_1a04ca47171b70901e55f4a5c67399f070) 

pointer to the data of the snip

#### `public size_t `[`size`](#structgnrc__pktsnip_1a0718f2cde3411a4833f82c10f8ea8d71) 

the length of the snip in byte

#### `public unsigned int `[`users`](#structgnrc__pktsnip_1a4ccc7be825c7f5c449825676606921b3) 

Counter of threads currently having control over this packet.

#### `public `[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` `[`type`](#structgnrc__pktsnip_1a8362d0e56cfabedcf51459377c58db59) 

protocol of the packet snip

