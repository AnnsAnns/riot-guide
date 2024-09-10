---
title: api-net_ipv6_hdr.md
description: api-net_ipv6_hdr.md
---
# group `net_ipv6_hdr` 

IPv6 header types and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`ipv6_hdr_set_version`](#group__net__ipv6__hdr_1ga606cb5b18f1cba237cf8cf136614b9f8)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Sets the version field of `hdr` to 6.
`public inline static uint8_t `[`ipv6_hdr_get_version`](#group__net__ipv6__hdr_1ga1b96293d3b1f0bb65d5b3b9b8136f33e)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Gets the value of the version field of `hdr`.
`public inline static bool `[`ipv6_hdr_is`](#group__net__ipv6__hdr_1gab440fe19d689ee58fe985dbf71a261c2)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Checks if the version field is set to 6.
`public inline static void `[`ipv6_hdr_set_tc`](#group__net__ipv6__hdr_1gaef380e3b8063577d5fb2081d66596f99)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t tc)`            | Sets the traffic class field of `hdr`.
`public inline static void `[`ipv6_hdr_set_tc_ecn`](#group__net__ipv6__hdr_1ga30ecb7bcb6e997bc6e6dcf8cc328dd5c)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t ecn)`            | Sets the value of the Explicit Congestion Notification (ECN) part of the traffic class field of `hdr`.
`public inline static void `[`ipv6_hdr_set_tc_dscp`](#group__net__ipv6__hdr_1gaa65bcd0c2b2244ed2823e7cdeefbe826)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t dscp)`            | Sets the value of the Differentiated Service Codepoint (DSCP) part of the traffic class field of `hdr`.
`public inline static uint8_t `[`ipv6_hdr_get_tc`](#group__net__ipv6__hdr_1ga09eb512900c2656abd6f285ceed30eed)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Gets the value of the traffic class field of `hdr`.
`public inline static uint8_t `[`ipv6_hdr_get_tc_ecn`](#group__net__ipv6__hdr_1ga322bd7c02d86b1b6b1e3ffbb7f7c1a30)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Gets the value of the Explicit Congestion Notification (ECN) part of the traffic class field of `hdr`.
`public inline static uint8_t `[`ipv6_hdr_get_tc_dscp`](#group__net__ipv6__hdr_1ga3df1b6146e1004af2037641d004cccc0)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Gets the value of the Differentiated Service Codepoint (DSCP) part of the traffic class field of `hdr`.
`public inline static void `[`ipv6_hdr_set_fl`](#group__net__ipv6__hdr_1ga042612bb3dc8f8a46b5b0c794f6420ee)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint32_t fl)`            | Sets the flow label field of `hdr`.
`public inline static uint32_t `[`ipv6_hdr_get_fl`](#group__net__ipv6__hdr_1ga2e82e49f990555692d5a94b93dc05933)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Gets the value of the flow label field of `hdr`.
`public inline static uint16_t `[`ipv6_hdr_inet_csum`](#group__net__ipv6__hdr_1gae16e4211ff77b3724f43560415d3e825)`(uint16_t sum,`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t prot_num,uint16_t len)`            | Calculates the Internet Checksum for the IPv6 Pseudo Header.
`public void `[`ipv6_hdr_print`](#group__net__ipv6__hdr_1ga9ce0f42eb26d355ef616a1159f5b373d)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)`            | Outputs an IPv6 header to stdout.
`struct `[`ipv6_hdr_t`](#structipv6__hdr__t) | Data type to represent an IPv6 packet header.

## Members

#### `public inline static void `[`ipv6_hdr_set_version`](#group__net__ipv6__hdr_1ga606cb5b18f1cba237cf8cf136614b9f8)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Sets the version field of `hdr` to 6.

#### Parameters
* `hdr` Pointer to an IPv6 header.

#### `public inline static uint8_t `[`ipv6_hdr_get_version`](#group__net__ipv6__hdr_1ga1b96293d3b1f0bb65d5b3b9b8136f33e)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Gets the value of the version field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv6 header.

#### Returns
Value of the version field of `hdr`.

#### `public inline static bool `[`ipv6_hdr_is`](#group__net__ipv6__hdr_1gab440fe19d689ee58fe985dbf71a261c2)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Checks if the version field is set to 6.

#### Parameters
* `hdr` Pointer to an IPv6 header.

#### Returns
true, if version field is 6 

#### Returns
false, otherwise

#### `public inline static void `[`ipv6_hdr_set_tc`](#group__net__ipv6__hdr_1gaef380e3b8063577d5fb2081d66596f99)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t tc)` 

Sets the traffic class field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv6 header. 

* `tc` The new value for the traffic class field.

#### `public inline static void `[`ipv6_hdr_set_tc_ecn`](#group__net__ipv6__hdr_1ga30ecb7bcb6e997bc6e6dcf8cc328dd5c)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t ecn)` 

Sets the value of the Explicit Congestion Notification (ECN) part of the traffic class field of `hdr`.

The field is needed e.g. in context of 6LoWPAN header compression

**See also**: [RFC 3168, section 5 ](https://tools.ietf.org/html/rfc3168#section-5)

#### Parameters
* `hdr` Pointer to an IPv6 header. 

* `ecn` The new value for the 2-bit ECN part of the traffic class field.

#### `public inline static void `[`ipv6_hdr_set_tc_dscp`](#group__net__ipv6__hdr_1gaa65bcd0c2b2244ed2823e7cdeefbe826)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t dscp)` 

Sets the value of the Differentiated Service Codepoint (DSCP) part of the traffic class field of `hdr`.

The field is needed e.g. in context of 6LoWPAN header compression

**See also**: [RFC 2474, section 3 ](https://tools.ietf.org/html/rfc2474#section-3)

#### Parameters
* `hdr` Pointer to an IPv6 header. 

* `dscp` The new value for the 6-bit DSCP part of the traffic class field.

#### `public inline static uint8_t `[`ipv6_hdr_get_tc`](#group__net__ipv6__hdr_1ga09eb512900c2656abd6f285ceed30eed)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Gets the value of the traffic class field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv6 header.

#### Returns
Value of the traffic class field of `hdr`.

#### `public inline static uint8_t `[`ipv6_hdr_get_tc_ecn`](#group__net__ipv6__hdr_1ga322bd7c02d86b1b6b1e3ffbb7f7c1a30)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Gets the value of the Explicit Congestion Notification (ECN) part of the traffic class field of `hdr`.

The field is needed e.g. in context of 6LoWPAN header compression

**See also**: [RFC 3168, section 5 ](https://tools.ietf.org/html/rfc3168#section-5)

#### Parameters
* `hdr` Pointer to an IPv6 header.

#### Returns
Value of the ECN part of the traffic class field of `hdr`.

#### `public inline static uint8_t `[`ipv6_hdr_get_tc_dscp`](#group__net__ipv6__hdr_1ga3df1b6146e1004af2037641d004cccc0)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Gets the value of the Differentiated Service Codepoint (DSCP) part of the traffic class field of `hdr`.

The field is needed e.g. in context of 6LoWPAN header compression

**See also**: [RFC 2474, section 3 ](https://tools.ietf.org/html/rfc2474#section-3)

#### Parameters
* `hdr` Pointer to an IPv6 header.

#### Returns
Value of the DSCP part of the traffic class field of `hdr`.

#### `public inline static void `[`ipv6_hdr_set_fl`](#group__net__ipv6__hdr_1ga042612bb3dc8f8a46b5b0c794f6420ee)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint32_t fl)` 

Sets the flow label field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv6 header. 

* `fl` The new value for the flow label field in host byte order.

#### `public inline static uint32_t `[`ipv6_hdr_get_fl`](#group__net__ipv6__hdr_1ga2e82e49f990555692d5a94b93dc05933)`(const `[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Gets the value of the flow label field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv6 header.

#### Returns
Value of the flow label field of `hdr`.

#### `public inline static uint16_t `[`ipv6_hdr_inet_csum`](#group__net__ipv6__hdr_1gae16e4211ff77b3724f43560415d3e825)`(uint16_t sum,`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr,uint8_t prot_num,uint16_t len)` 

Calculates the Internet Checksum for the IPv6 Pseudo Header.

**See also**: [RFC 8200, section 8.1](https://tools.ietf.org/html/rfc8200#section-8.1)

#### Parameters
* `sum` Preinialized value of the sum. 

* `prot_num` The [Protocol Numbers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum) you want to calculate the checksum for. Can not be inferred from [ipv6_hdr_t::nh](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t_1a81a33145874adac54190598e2ad1ec30), since it can be an IPv6 exentension header. 

* `hdr` An IPv6 header to derive the Pseudo Header from. 

* `len` The upper-layer packet length for the pseudo header. Can not be inferred from [ipv6_hdr_t::len](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t_1ad89727f6d07df2bc99eaec29480ff659), since there can be extension headers between the IPv6 header and the payload.

#### Returns
The non-normalized Internet Checksum of the given IPv6 pseudo header.

#### `public void `[`ipv6_hdr_print`](#group__net__ipv6__hdr_1ga9ce0f42eb26d355ef616a1159f5b373d)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * hdr)` 

Outputs an IPv6 header to stdout.

#### Parameters
* `hdr` An IPv6 header.

# struct `ipv6_hdr_t` 

Data type to represent an IPv6 packet header.

The structure of the header is as follows:

```cpp
                     1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version| Traffic Class |           Flow Label                  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Payload Length        |  Next Header  |   Hop Limit   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                         Source Address                        +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                      Destination Address                      +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

**See also**: [RFC 8200, section 3](http://tools.ietf.org/html/rfc8200#section-3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`v_tc_fl`](#structipv6__hdr__t_1a7ff7c6c9f040993998acccc154950779) | Version, traffic class, and flow label.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`len`](#structipv6__hdr__t_1ad89727f6d07df2bc99eaec29480ff659) | payload length of this packet.
`public uint8_t `[`nh`](#structipv6__hdr__t_1a81a33145874adac54190598e2ad1ec30) | type of next header in this packet.
`public uint8_t `[`hl`](#structipv6__hdr__t_1aaf9b2838421efb58bd767ff16a505879) | hop limit for this packet.
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`src`](#structipv6__hdr__t_1af4dc24de6dcb4c04dcf7dc23e20d3225) | source address of this packet.
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`dst`](#structipv6__hdr__t_1afa5b21178bbd4d0f7fb81bfd931e8951) | destination address of this packet.

## Members

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`v_tc_fl`](#structipv6__hdr__t_1a7ff7c6c9f040993998acccc154950779) 

Version, traffic class, and flow label.

The version are the 4 most significant bits, the traffic class the 8 next bit, and the remainding 20 bits are the flow label (see above).

This module provides helper functions to set, get, and check these fields accordingly:

* [ipv6_hdr_set_version()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga606cb5b18f1cba237cf8cf136614b9f8)

* [ipv6_hdr_get_version()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga1b96293d3b1f0bb65d5b3b9b8136f33e)

* [ipv6_hdr_is()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1gab440fe19d689ee58fe985dbf71a261c2)

* [ipv6_hdr_set_tc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1gaef380e3b8063577d5fb2081d66596f99)

* [ipv6_hdr_set_tc_ecn()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga30ecb7bcb6e997bc6e6dcf8cc328dd5c)

* [ipv6_hdr_set_tc_dscp()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1gaa65bcd0c2b2244ed2823e7cdeefbe826)

* [ipv6_hdr_get_tc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga09eb512900c2656abd6f285ceed30eed)

* [ipv6_hdr_get_tc_ecn()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga322bd7c02d86b1b6b1e3ffbb7f7c1a30)

* [ipv6_hdr_get_tc_dscp()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga3df1b6146e1004af2037641d004cccc0)

* [ipv6_hdr_set_fl()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga042612bb3dc8f8a46b5b0c794f6420ee)

* [ipv6_hdr_get_fl()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__hdr_1ga2e82e49f990555692d5a94b93dc05933)

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`len`](#structipv6__hdr__t_1ad89727f6d07df2bc99eaec29480ff659) 

payload length of this packet.

#### `public uint8_t `[`nh`](#structipv6__hdr__t_1a81a33145874adac54190598e2ad1ec30) 

type of next header in this packet.

#### `public uint8_t `[`hl`](#structipv6__hdr__t_1aaf9b2838421efb58bd767ff16a505879) 

hop limit for this packet.

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`src`](#structipv6__hdr__t_1af4dc24de6dcb4c04dcf7dc23e20d3225) 

source address of this packet.

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`dst`](#structipv6__hdr__t_1afa5b21178bbd4d0f7fb81bfd931e8951) 

destination address of this packet.

