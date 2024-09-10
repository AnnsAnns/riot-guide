---
title: api-net_gnrc_nettype.md
description: api-net_gnrc_nettype.md
---
# group `net_gnrc_nettype` 

Protocol type definitions and helper functions.

The protocol types are used with the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi), the [Network interface API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif), the [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg), and the [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) to identify network protocols throughout the network stack.

To include a nettype into your build, use the corresponding module of the same name in lower-case, e.g., to use [GNRC_NETTYPE_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a5b4cb265411204c95e4a4996dcafe380) in your code, use:

```cpp
USEMODULE += gnrc_nettype_ipv6
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`gnrc_nettype_t`](#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)            | Definition of protocol types in the network stack.
`public inline static `[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` `[`gnrc_nettype_from_ethertype`](#group__net__gnrc__nettype_1ga2d2c19e8f4647c18815104fc3e70584f)`(uint16_t type)`            | Translates an Ether Type number to [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902).
`public inline static uint16_t `[`gnrc_nettype_to_ethertype`](#group__net__gnrc__nettype_1gabb0f1234440fcbc13f350310d2ff04c7)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)`            | Translates [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902) to an Ether Type number.
`public inline static `[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` `[`gnrc_nettype_from_protnum`](#group__net__gnrc__nettype_1gaa706f61051016219e5a9e1b0f6f71abf)`(uint8_t num)`            | Translates a Protocol Number to [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902).
`public inline static uint8_t `[`gnrc_nettype_to_protnum`](#group__net__gnrc__nettype_1ga33ec8c250360b80274a130278faf2843)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)`            | Translates [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902) to a Protocol Number.

## Members

#### `enum `[`gnrc_nettype_t`](#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GNRC_NETTYPE_TX_SYNC            | TX synchronization data for passing up error data or auxiliary data.
GNRC_NETTYPE_NETIF            | Protocol is as defined in [gnrc_netif_hdr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_hdr.md#structgnrc__netif__hdr__t).
GNRC_NETTYPE_UNDEF            | Protocol is undefined.
GNRC_NETTYPE_GOMACH            | Protocol is GoMacH.
GNRC_NETTYPE_LWMAC            | Protocol is lwMAC.
GNRC_NETTYPE_CUSTOM            | Custom ethertype.
GNRC_NETTYPE_SIXLOWPAN            | Protocol is 6LoWPAN.
GNRC_NETTYPE_IPV6            | Protocol is IPv6.
GNRC_NETTYPE_IPV6_EXT            | Protocol is IPv6 extension header.
GNRC_NETTYPE_ICMPV6            | Protocol is ICMPv6.
GNRC_NETTYPE_CCN            | Protocol is CCN.
GNRC_NETTYPE_CCN_CHUNK            | Protocol is CCN, packet contains a content chunk.
GNRC_NETTYPE_NDN            | Protocol is NDN.
GNRC_NETTYPE_TCP            | Protocol is TCP.
GNRC_NETTYPE_UDP            | Protocol is UDP.
GNRC_NETTYPE_TEST            | Usable with test vectors.
GNRC_NETTYPE_NUMOF            | maximum number of available protocols

Definition of protocol types in the network stack.

Expand at will.

#### `public inline static `[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` `[`gnrc_nettype_from_ethertype`](#group__net__gnrc__nettype_1ga2d2c19e8f4647c18815104fc3e70584f)`(uint16_t type)` 

Translates an Ether Type number to [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902).

**See also**: [IANA, ETHER TYPES](http://www.iana.org/assignments/ieee-802-numbers/ieee-802-numbers.xhtml)

#### Parameters
* `type` An Ether Type number

#### Returns
The corresponding [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902) to `type`. 

#### Returns
[GNRC_NETTYPE_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902aadb666d279898cdecd1dcc0cc18799f1) if `type` not translatable.

#### `public inline static uint16_t `[`gnrc_nettype_to_ethertype`](#group__net__gnrc__nettype_1gabb0f1234440fcbc13f350310d2ff04c7)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)` 

Translates [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902) to an Ether Type number.

**See also**: [IANA, ETHER TYPES](http://www.iana.org/assignments/ieee-802-numbers/ieee-802-numbers.xhtml)

#### Parameters
* `type` A protocol type

#### Returns
The corresponding Ether Type number to `type`. 

#### Returns
[ETHERTYPE_RESERVED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ethertype_1ga63092381fdbc627e072881f23e5f6c82) if `type` not translatable.

#### `public inline static `[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` `[`gnrc_nettype_from_protnum`](#group__net__gnrc__nettype_1gaa706f61051016219e5a9e1b0f6f71abf)`(uint8_t num)` 

Translates a Protocol Number to [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902).

**See also**: [IANA, Assigned Internet Protocol Numbers ](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

#### Parameters
* `num` A Protocol Number

#### Returns
The corresponding [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902) to `num`. 

#### Returns
[GNRC_NETTYPE_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902aadb666d279898cdecd1dcc0cc18799f1) if `num` not translatable.

#### `public inline static uint8_t `[`gnrc_nettype_to_protnum`](#group__net__gnrc__nettype_1ga33ec8c250360b80274a130278faf2843)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type)` 

Translates [gnrc_nettype_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902) to a Protocol Number.

**See also**: [IANA, Assigned Internet Protocol Numbers ](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

#### Parameters
* `type` A protocol type

#### Returns
The corresponding Protocol Number to `type`. 

#### Returns
[PROTNUM_RESERVED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga39e5e549b67c499f796d4c90698c007e) if `type` not translatable.

