---
title: api-net_ipv6_ext.md
description: api-net_ipv6_ext.md
---
# group `net_ipv6_ext` 

Provides IPv6 extension header definitions and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`IPV6_EXT_LEN_UNIT`](#group__net__ipv6__ext_1ga216a95e7c0821ddc609cd69cc6dc2a06)            | Unit in byte for the extension header's length field.
`public inline static `[`ipv6_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext.md#structipv6__ext__t)` * `[`ipv6_ext_get_next`](#group__net__ipv6__ext_1gaaef6304711848f44621fe84b921237f5)`(`[`ipv6_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext.md#structipv6__ext__t)` * ext)`            | Gets the next extension header in a packet.
`struct `[`ipv6_ext_t`](#structipv6__ext__t) | IPv6 extension headers.

## Members

#### `define `[`IPV6_EXT_LEN_UNIT`](#group__net__ipv6__ext_1ga216a95e7c0821ddc609cd69cc6dc2a06) 

Unit in byte for the extension header's length field.

#### `public inline static `[`ipv6_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext.md#structipv6__ext__t)` * `[`ipv6_ext_get_next`](#group__net__ipv6__ext_1gaaef6304711848f44621fe84b921237f5)`(`[`ipv6_ext_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext.md#structipv6__ext__t)` * ext)` 

Gets the next extension header in a packet.

#### Parameters
* `ext` The current extension header.

#### Returns
The next extension header.

# struct `ipv6_ext_t` 

IPv6 extension headers.

**See also**: [RFC 8200, section 4](https://tools.ietf.org/html/rfc8200#section-4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`nh`](#structipv6__ext__t_1a41518ff63dbd6eb2002e6c51b6372043) | next header
`public uint8_t `[`len`](#structipv6__ext__t_1a54a59702db977b7eca4b601ad08e0c43) | length in 8 octets without first octet

## Members

#### `public uint8_t `[`nh`](#structipv6__ext__t_1a41518ff63dbd6eb2002e6c51b6372043) 

next header

#### `public uint8_t `[`len`](#structipv6__ext__t_1a54a59702db977b7eca4b601ad08e0c43) 

length in 8 octets without first octet

