---
title: api-net_ipv6_addr.md
description: api-net_ipv6_addr.md
---
# group `net_ipv6_addr` 

IPv6 address architecture.

**See also**: [RFC 4291 ](http://tools.ietf.org/html/rfc4291)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`IPV6_ADDR_BIT_LEN`](#group__net__ipv6__addr_1ga6a2421758d238b98183e248e8bf58e9d)            | Length of an IPv6 address in bit.
`define `[`IPV6_ADDR_MAX_STR_LEN`](#group__net__ipv6__addr_1ga2713917d7f8462406ab96eb14f1bfa2c)            | Maximum length of an IPv6 address as string.
`define `[`IPV6_ADDR_SITE_LOCAL_PREFIX`](#group__net__ipv6__addr_1ga53a497002a25bd45036f57b1fcb3fad5)            | The first 10 bits of a site-local IPv6 unicast address.
`define `[`IPV6_ADDR_UNSPECIFIED`](#group__net__ipv6__addr_1ga060dba67cd44fbce8eda163919c89bcf)            | Static initializer for the unspecified IPv6 address (::)
`define `[`IPV6_ADDR_LOOPBACK`](#group__net__ipv6__addr_1gafd117fe220ad063b68b3883bacf4e23e)            | Static initializer for the loopback IPv6 address (::1)
`define `[`IPV6_ADDR_LINK_LOCAL_PREFIX`](#group__net__ipv6__addr_1ga9cda6853a1101a467248058e6f8b203c)            | Static initializer for the link-local prefix (fe80::/64)
`define `[`IPV6_ADDR_ALL_NODES_IF_LOCAL`](#group__net__ipv6__addr_1ga0d509bf1276eba053d18980ba7bd87fb)            | Static initializer for the interface-local all nodes multicast IPv6 address (ff01::1)
`define `[`IPV6_ADDR_ALL_NODES_LINK_LOCAL`](#group__net__ipv6__addr_1ga012c850d1fa7a39057365df96e76ccf7)            | Static initializer for the link-local all nodes multicast IPv6 address (ff02::1)
`define `[`IPV6_ADDR_ALL_ROUTERS_IF_LOCAL`](#group__net__ipv6__addr_1ga60b3a164c06a1c2cbed9567f6367d705)            | Static initializer for the interface-local all routers multicast IPv6 address (ff01::2)
`define `[`IPV6_ADDR_ALL_ROUTERS_LINK_LOCAL`](#group__net__ipv6__addr_1ga62a0f7f569d8fb319671e42bbbb3bf75)            | Static initializer for the link-local all routers multicast IPv6 address (ff02::2)
`define `[`IPV6_ADDR_ALL_ROUTERS_SITE_LOCAL`](#group__net__ipv6__addr_1ga6d478d1c4efce6e540e23a54e8efcaa8)            | Static initializer for the site-local all routers multicast IPv6 address (ff05::2)
`define `[`IPV6_ADDR_SOLICITED_NODE_PREFIX`](#group__net__ipv6__addr_1ga61e79360ce221dde8e93fb1037b750ac)            | Static initializer for the solicited node multicast prefix (ff02:0:0:0:0:1:ff00::/104)
`public inline static bool `[`ipv6_addr_is_unspecified`](#group__net__ipv6__addr_1gaf52cb0d04881723ecde3e80faa536206)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Checks if `addr` is unspecified (all zero).
`public inline static bool `[`ipv6_addr_is_loopback`](#group__net__ipv6__addr_1ga1c86851cd38797d9aacf13b53262305e)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Checks if `addr` is a loopback address.
`public inline static bool `[`ipv6_addr_is_ipv4_compat`](#group__net__ipv6__addr_1gac0e765e6b2c950049ed2113fe000c954)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Checks if `addr` is a IPv4-compatible IPv6 address.
`public inline static bool `[`ipv6_addr_is_ipv4_mapped`](#group__net__ipv6__addr_1gad92d41ea54476f024363b2bb25f0cfe3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Checks if `addr` is a IPv4-mapped IPv6 address.
`public inline static bool `[`ipv6_addr_is_multicast`](#group__net__ipv6__addr_1ga0fee78f3a40b27ee0a33101093450095)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Check if `addr` is a multicast address.
`public inline static bool `[`ipv6_addr_is_link_local`](#group__net__ipv6__addr_1ga82b7750c2ccef206ef2b70960bdd2923)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Check if `addr` is a link-local address.
`public inline static bool `[`ipv6_addr_is_site_local`](#group__net__ipv6__addr_1ga9262d12d86f2397bb112c225a170cdcd)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Checks if `addr` is a site-local address.
`public inline static bool `[`ipv6_addr_is_unique_local_unicast`](#group__net__ipv6__addr_1gac6096058fa6ffebb468c0e97fada4264)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Check if `addr` is unique local unicast address.
`public inline static bool `[`ipv6_addr_is_global`](#group__net__ipv6__addr_1ga1f8dfdbbf41d5b638757f8725fa718e1)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Check if `addr` is global unicast address.
`public inline static bool `[`ipv6_addr_is_solicited_node`](#group__net__ipv6__addr_1gad0b26281967993eae858e9e8103d40da)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Check if `addr` is solicited-node multicast address.
`public bool `[`ipv6_addr_equal`](#group__net__ipv6__addr_1gaa7edfae89c51bfa9a5b0c1548687218e)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * a,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * b)`            | Checks if two IPv6 addresses are equal.
`public uint8_t `[`ipv6_addr_match_prefix`](#group__net__ipv6__addr_1gae07dfabbb04e28ddd00f7fbc35523d42)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * a,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * b)`            | Checks up to which bit-count two IPv6 addresses match in their prefix.
`public void `[`ipv6_addr_init_prefix`](#group__net__ipv6__addr_1gac9964c130d08241ef0499124fe0dde94)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t bits)`            | Sets IPv6 address `out` with the first `bits` taken from `prefix` and leaves the remaining bits untouched.
`public inline static void `[`ipv6_addr_init`](#group__net__ipv6__addr_1gaa616daba11962add34564a8e3075bb31)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,uint64_t prefix,uint64_t iid)`            | Sets IPv6 address `out` with a given prefix and interface ID.
`public void `[`ipv6_addr_init_iid`](#group__net__ipv6__addr_1ga70260eaf2ff8c9ac8929b87c3c34ce30)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,const uint8_t * iid,uint8_t bits)`            | Sets the last `bits` of IPv6 address `out` to `iid`.
`public inline static void `[`ipv6_addr_set_unspecified`](#group__net__ipv6__addr_1ga06e54e5810f4d062c96b641fbe7c38b7)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Sets `addr` dynamically to the unspecified IPv6 address (::).
`public inline static void `[`ipv6_addr_set_loopback`](#group__net__ipv6__addr_1ga187faf30c75024d82817b4d93cdc02bf)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Sets `addr` dynamically to the loopback IPv6 address (::1).
`public inline static void `[`ipv6_addr_set_link_local_prefix`](#group__net__ipv6__addr_1ga4920b91cf36c942d54846b64c23b5a63)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Sets the first 64 bit of `addr` to link local prefix (fe08::/64).
`public inline static void `[`ipv6_addr_set_iid`](#group__net__ipv6__addr_1gaed2d1e9d069cc2bf31a30e97e3f9b910)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint64_t iid)`            | Sets the 64-bit interface ID (as integer) of a unicast or anycast IPv6 address.
`public inline static void `[`ipv6_addr_set_aiid`](#group__net__ipv6__addr_1ga52ac49102cefa95169b105eaee3dc5dd)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint8_t * iid)`            | Sets the 64-bit interface ID (as array) of a unicast or anycast IPv6 address.
`public inline static void `[`ipv6_addr_set_multicast`](#group__net__ipv6__addr_1gadc5c5b383738d15010a964a25fe65d0e)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned int flags,unsigned int scope)`            | Sets the bits for an address required to be a multicast address.
`public inline static void `[`ipv6_addr_set_all_nodes_multicast`](#group__net__ipv6__addr_1gaa30ba1c1dd68bf3103cdfa5be96ebb8d)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned int scope)`            | Sets `addr` dynamically to an all nodes multicast IPv6 address (ff0S::1, where S is the scope).
`public inline static void `[`ipv6_addr_set_all_routers_multicast`](#group__net__ipv6__addr_1gac45d848ad6306c6cb7dc5a7309e07be2)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned int scope)`            | Sets `addr` dynamically to an all routers multicast IPv6 address (ff0S::2, where S is the scope).
`public inline static void `[`ipv6_addr_set_solicited_nodes`](#group__net__ipv6__addr_1ga4620abb14c828b189fc383ba5a95b7de)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * in)`            | Set `out` to the solicited-node multicast address computed from `in`.
`public char * `[`ipv6_addr_to_str`](#group__net__ipv6__addr_1gab7ee5ad1b157b863505c5e8a189b90ec)`(char * result,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint8_t result_len)`            | Converts an IPv6 address to its string representation.
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * `[`ipv6_addr_from_str`](#group__net__ipv6__addr_1ga7345e58f1dee8fc66822ca4dea763890)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * result,const char * addr)`            | Converts an IPv6 address string representation to a byte-represented IPv6 address.
`public int `[`ipv6_prefix_from_str`](#group__net__ipv6__addr_1gac22e1533f606997907177f34bd3e877a)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * result,const char * prefix)`            | Converts an IPv6 prefix string representation to a byte-represented IPv6 address.
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * `[`ipv6_addr_from_buf`](#group__net__ipv6__addr_1ga864b9976b6e9623902810c7a3c641556)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * result,const char * addr,size_t addr_len)`            | Converts an IPv6 address from a buffer of characters to a byte-represented IPv6 address.
`public char * `[`ipv6_addr_split_str`](#group__net__ipv6__addr_1gab8ac7b371cb0ac9bea729a1a87678def)`(char * addr_str,char separator)`            | split IPv6 address string representation and return remaining string
`public int `[`ipv6_addr_split_int`](#group__net__ipv6__addr_1gad60d100b0542552fe9cb029031040571)`(char * addr_str,char separator,int _default)`            | split IPv6 address string representation
`public inline static int `[`ipv6_addr_split_prefix`](#group__net__ipv6__addr_1ga5528f8d64c25228f0b4d4aa9bb904d7a)`(char * addr_str)`            | split IPv6 prefix string representation
`public inline static char * `[`ipv6_addr_split_iface`](#group__net__ipv6__addr_1ga6b0364fa77dac4f2e4ff29ce0d094eb7)`(char * addr_str)`            | split IPv6 address + interface specifier
`public void `[`ipv6_addr_print`](#group__net__ipv6__addr_1ga659ce010a1f786fce46db72ae0b6cca1)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Print IPv6 address to stdout.
`public void `[`ipv6_addrs_print`](#group__net__ipv6__addr_1ga30964ab5d6c1e3e01c34d15855c6aac3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addrs,size_t num,const char * separator)`            | Print IPv6 addresses to stdout.
`union `[`ipv6_addr_t`](#unionipv6__addr__t) | Data type to represent an IPv6 address.

## Members

#### `define `[`IPV6_ADDR_BIT_LEN`](#group__net__ipv6__addr_1ga6a2421758d238b98183e248e8bf58e9d) 

Length of an IPv6 address in bit.

#### `define `[`IPV6_ADDR_MAX_STR_LEN`](#group__net__ipv6__addr_1ga2713917d7f8462406ab96eb14f1bfa2c) 

Maximum length of an IPv6 address as string.

#### `define `[`IPV6_ADDR_SITE_LOCAL_PREFIX`](#group__net__ipv6__addr_1ga53a497002a25bd45036f57b1fcb3fad5) 

The first 10 bits of a site-local IPv6 unicast address.

**See also**: [RFC 4291, section 2.5.7 ](http://tools.ietf.org/html/rfc4291#section-2.5.7)

Site-local addresses are now deprecated as defined in [SLDEP](http://tools.ietf.org/html/rfc3879). They are only defined here for the distinction of global unicast addresses.

#### `define `[`IPV6_ADDR_UNSPECIFIED`](#group__net__ipv6__addr_1ga060dba67cd44fbce8eda163919c89bcf) 

Static initializer for the unspecified IPv6 address (::)

**See also**: [RFC 4291, section 2.5.2 ](http://tools.ietf.org/html/rfc4291#section-2.5.2)

#### `define `[`IPV6_ADDR_LOOPBACK`](#group__net__ipv6__addr_1gafd117fe220ad063b68b3883bacf4e23e) 

Static initializer for the loopback IPv6 address (::1)

**See also**: [RFC 4291, section 2.5.3 ](http://tools.ietf.org/html/rfc4291#section-2.5.3)

#### `define `[`IPV6_ADDR_LINK_LOCAL_PREFIX`](#group__net__ipv6__addr_1ga9cda6853a1101a467248058e6f8b203c) 

Static initializer for the link-local prefix (fe80::/64)

**See also**: [RFC 4291, section 2.5.6 ](http://tools.ietf.org/html/rfc4291#section-2.5.6)

#### `define `[`IPV6_ADDR_ALL_NODES_IF_LOCAL`](#group__net__ipv6__addr_1ga0d509bf1276eba053d18980ba7bd87fb) 

Static initializer for the interface-local all nodes multicast IPv6 address (ff01::1)

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### `define `[`IPV6_ADDR_ALL_NODES_LINK_LOCAL`](#group__net__ipv6__addr_1ga012c850d1fa7a39057365df96e76ccf7) 

Static initializer for the link-local all nodes multicast IPv6 address (ff02::1)

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### `define `[`IPV6_ADDR_ALL_ROUTERS_IF_LOCAL`](#group__net__ipv6__addr_1ga60b3a164c06a1c2cbed9567f6367d705) 

Static initializer for the interface-local all routers multicast IPv6 address (ff01::2)

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### `define `[`IPV6_ADDR_ALL_ROUTERS_LINK_LOCAL`](#group__net__ipv6__addr_1ga62a0f7f569d8fb319671e42bbbb3bf75) 

Static initializer for the link-local all routers multicast IPv6 address (ff02::2)

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### `define `[`IPV6_ADDR_ALL_ROUTERS_SITE_LOCAL`](#group__net__ipv6__addr_1ga6d478d1c4efce6e540e23a54e8efcaa8) 

Static initializer for the site-local all routers multicast IPv6 address (ff05::2)

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### `define `[`IPV6_ADDR_SOLICITED_NODE_PREFIX`](#group__net__ipv6__addr_1ga61e79360ce221dde8e93fb1037b750ac) 

Static initializer for the solicited node multicast prefix (ff02:0:0:0:0:1:ff00::/104)

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### `public inline static bool `[`ipv6_addr_is_unspecified`](#group__net__ipv6__addr_1gaf52cb0d04881723ecde3e80faa536206)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Checks if `addr` is unspecified (all zero).

**See also**: [RFC 4291, section 2.5.2 ](http://tools.ietf.org/html/rfc4291#section-2.5.2)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is unspecified address 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_loopback`](#group__net__ipv6__addr_1ga1c86851cd38797d9aacf13b53262305e)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Checks if `addr` is a loopback address.

**See also**: [RFC 4291, section 2.5.3 ](http://tools.ietf.org/html/rfc4291#section-2.5.3)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is loopback address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_ipv4_compat`](#group__net__ipv6__addr_1gac0e765e6b2c950049ed2113fe000c954)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Checks if `addr` is a IPv4-compatible IPv6 address.

**See also**: [RFC 4291, section 2.5.5.1 ](http://tools.ietf.org/html/rfc4291#section-2.5.5.1)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is an IPv4-compatible IPv6 address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_ipv4_mapped`](#group__net__ipv6__addr_1gad92d41ea54476f024363b2bb25f0cfe3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Checks if `addr` is a IPv4-mapped IPv6 address.

**See also**: [RFC 4291, section 2.5.5.2 ](http://tools.ietf.org/html/rfc4291#section-2.5.5.2)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is an IPv4-compatible IPv6 address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_multicast`](#group__net__ipv6__addr_1ga0fee78f3a40b27ee0a33101093450095)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Check if `addr` is a multicast address.

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is multicast address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_link_local`](#group__net__ipv6__addr_1ga82b7750c2ccef206ef2b70960bdd2923)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Check if `addr` is a link-local address.

**See also**: [RFC 4291, section 2.5.6 ](http://tools.ietf.org/html/rfc4291#section-2.5.6)

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is link-local address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_site_local`](#group__net__ipv6__addr_1ga9262d12d86f2397bb112c225a170cdcd)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Checks if `addr` is a site-local address.

**See also**: [RFC 4291, section 2.5.7 ](http://tools.ietf.org/html/rfc4291#section-2.5.7)

Site-local addresses are now deprecated as defined in [SLDEP](http://tools.ietf.org/html/rfc3879). They are only defined here for the distinction of global unicast addresses.

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is a site-local unicast address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_unique_local_unicast`](#group__net__ipv6__addr_1gac6096058fa6ffebb468c0e97fada4264)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Check if `addr` is unique local unicast address.

**See also**: [RFC 4193 ](http://tools.ietf.org/html/rfc4193)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is unique local unicast address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_global`](#group__net__ipv6__addr_1ga1f8dfdbbf41d5b638757f8725fa718e1)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Check if `addr` is global unicast address.

**See also**: [RFC 4291, section 2.5.4 ](http://tools.ietf.org/html/rfc4291#section-2.5.4)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is global unicast address, 

#### Returns
false, otherwise.

#### `public inline static bool `[`ipv6_addr_is_solicited_node`](#group__net__ipv6__addr_1gad0b26281967993eae858e9e8103d40da)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Check if `addr` is solicited-node multicast address.

**See also**: [RFC 4291, section 2.7.1 ](http://tools.ietf.org/html/rfc4291#section-2.7.1)

#### Parameters
* `addr` An IPv6 address.

#### Returns
true, if `addr` is solicited-node multicast address, 

#### Returns
false, otherwise.

#### `public bool `[`ipv6_addr_equal`](#group__net__ipv6__addr_1gaa7edfae89c51bfa9a5b0c1548687218e)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * a,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * b)` 

Checks if two IPv6 addresses are equal.

#### Parameters
* `a` An IPv6 address. 

* `b` Another IPv6 address.

#### Returns
true, if `a` and `b` are equal 

#### Returns
false, otherwise.

#### `public uint8_t `[`ipv6_addr_match_prefix`](#group__net__ipv6__addr_1gae07dfabbb04e28ddd00f7fbc35523d42)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * a,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * b)` 

Checks up to which bit-count two IPv6 addresses match in their prefix.

#### Parameters
* `a` An IPv6 address. 

* `b` Another IPv6 address.

#### Returns
The number of bits `a` and `b` match in their prefix

#### `public void `[`ipv6_addr_init_prefix`](#group__net__ipv6__addr_1gac9964c130d08241ef0499124fe0dde94)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t bits)` 

Sets IPv6 address `out` with the first `bits` taken from `prefix` and leaves the remaining bits untouched.

#### Parameters
* `out` Prefix to be set. 

* `prefix` Address to take prefix from. 

* `bits` Bits to be copied from `prefix` to `out` (set to 128 when greater than 128).

#### `public inline static void `[`ipv6_addr_init`](#group__net__ipv6__addr_1gaa616daba11962add34564a8e3075bb31)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,uint64_t prefix,uint64_t iid)` 

Sets IPv6 address `out` with a given prefix and interface ID.

#### Parameters
* `out` Address to initialize 

* `prefix` Prefix in host byte order 

* `iid` Interface ID in host byte order

#### `public void `[`ipv6_addr_init_iid`](#group__net__ipv6__addr_1ga70260eaf2ff8c9ac8929b87c3c34ce30)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,const uint8_t * iid,uint8_t bits)` 

Sets the last `bits` of IPv6 address `out` to `iid`.

Leading bits of `out` stay untouched.

#### Parameters
* `out` IPv6 address to be set. 

* `iid` buffer representing the iid. 

* `bits` Bits to be copied from `iid` to `out` (set to 128 when greater than 128).

#### `public inline static void `[`ipv6_addr_set_unspecified`](#group__net__ipv6__addr_1ga06e54e5810f4d062c96b641fbe7c38b7)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Sets `addr` dynamically to the unspecified IPv6 address (::).

**See also**: [RFC 4291, section 2.5.2 ](http://tools.ietf.org/html/rfc4291#section-2.5.2)

#### Parameters
* `addr` The address to set.

#### `public inline static void `[`ipv6_addr_set_loopback`](#group__net__ipv6__addr_1ga187faf30c75024d82817b4d93cdc02bf)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Sets `addr` dynamically to the loopback IPv6 address (::1).

**See also**: [RFC 4291, section 2.5.3 ](http://tools.ietf.org/html/rfc4291#section-2.5.3)

#### Parameters
* `addr` The address to set.

#### `public inline static void `[`ipv6_addr_set_link_local_prefix`](#group__net__ipv6__addr_1ga4920b91cf36c942d54846b64c23b5a63)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Sets the first 64 bit of `addr` to link local prefix (fe08::/64).

**See also**: [RFC 4291, section 2.5.6 ](http://tools.ietf.org/html/rfc4291#section-2.5.6)

#### Parameters
* `addr` The address to set.

#### `public inline static void `[`ipv6_addr_set_iid`](#group__net__ipv6__addr_1gaed2d1e9d069cc2bf31a30e97e3f9b910)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint64_t iid)` 

Sets the 64-bit interface ID (as integer) of a unicast or anycast IPv6 address.

**See also**: [RFC 4291, section 2.5.4 ](http://tools.ietf.org/html/rfc4291#section-2.5.4)

#### Parameters
* `addr` The address to set. 

* `iid` The interface ID as integer to set.

#### `public inline static void `[`ipv6_addr_set_aiid`](#group__net__ipv6__addr_1ga52ac49102cefa95169b105eaee3dc5dd)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint8_t * iid)` 

Sets the 64-bit interface ID (as array) of a unicast or anycast IPv6 address.

**See also**: [RFC 4291, section 2.5.4 ](http://tools.ietf.org/html/rfc4291#section-2.5.4)

#### Parameters
* `addr` The address to set. 

* `iid` The interface ID as array of at least length 8 to set.

#### `public inline static void `[`ipv6_addr_set_multicast`](#group__net__ipv6__addr_1gadc5c5b383738d15010a964a25fe65d0e)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned int flags,unsigned int scope)` 

Sets the bits for an address required to be a multicast address.

**See also**: [RFC 4291, section 2.7 ](http://tools.ietf.org/html/rfc4291#section-2.7)

#### Parameters
* `addr` The address to set. 

* `flags` The multicast address' flags. 

* `scope` The multicast address' scope.

#### `public inline static void `[`ipv6_addr_set_all_nodes_multicast`](#group__net__ipv6__addr_1gaa30ba1c1dd68bf3103cdfa5be96ebb8d)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned int scope)` 

Sets `addr` dynamically to an all nodes multicast IPv6 address (ff0S::1, where S is the scope).

**See also**: [RFC 4291, section 2.7.1 ](http://tools.ietf.org/html/rfc4291#section-2.7.1)

#### Parameters
* `addr` The address to set. 

* `scope` The multicast address' scope.

#### `public inline static void `[`ipv6_addr_set_all_routers_multicast`](#group__net__ipv6__addr_1gac45d848ad6306c6cb7dc5a7309e07be2)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned int scope)` 

Sets `addr` dynamically to an all routers multicast IPv6 address (ff0S::2, where S is the scope).

**See also**: [RFC 4291, section 2.7.1 ](http://tools.ietf.org/html/rfc4291#section-2.7.1)

#### Parameters
* `addr` The address to set. 

* `scope` The multicast address' scope.

#### `public inline static void `[`ipv6_addr_set_solicited_nodes`](#group__net__ipv6__addr_1ga4620abb14c828b189fc383ba5a95b7de)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * out,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * in)` 

Set `out` to the solicited-node multicast address computed from `in`.

**See also**: [RFC 4291 ](http://tools.ietf.org/html/rfc4291)

#### Parameters
* `out` Is set to solicited-node address of this node. 

* `in` The IPv6 address the solicited-node address.

#### `public char * `[`ipv6_addr_to_str`](#group__net__ipv6__addr_1gab7ee5ad1b157b863505c5e8a189b90ec)`(char * result,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,uint8_t result_len)` 

Converts an IPv6 address to its string representation.

**See also**: [RFC 5952 ](https://tools.ietf.org/html/rfc5952)

#### Parameters
* `result` The resulting string representation of at least [IPV6_ADDR_MAX_STR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr_1ga2713917d7f8462406ab96eb14f1bfa2c)

* `addr` An IPv6 address 

* `result_len` Length of `result`

#### Returns
`result`, on success 

#### Returns
NULL, if `result_len` was lesser than IPV6_ADDR_MAX_STR_LEN 

#### Returns
NULL, if `result` or `addr` was NULL

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * `[`ipv6_addr_from_str`](#group__net__ipv6__addr_1ga7345e58f1dee8fc66822ca4dea763890)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * result,const char * addr)` 

Converts an IPv6 address string representation to a byte-represented IPv6 address.

**See also**: [RFC 5952 ](https://tools.ietf.org/html/rfc5952)

#### Parameters
* `result` The resulting byte representation 

* `addr` An IPv6 address string representation

#### Returns
`result`, on success 

#### Returns
NULL, if `addr` was malformed 

#### Returns
NULL, if `result` or `addr` was NULL

#### `public int `[`ipv6_prefix_from_str`](#group__net__ipv6__addr_1gac22e1533f606997907177f34bd3e877a)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * result,const char * prefix)` 

Converts an IPv6 prefix string representation to a byte-represented IPv6 address.

**See also**: [RFC 5952 ](https://tools.ietf.org/html/rfc5952)

#### Parameters
* `result` The resulting byte representation 

* `prefix` An IPv6 prefix string representation

#### Returns
prefix length in bits, on success 

#### Returns
<0 on error

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * `[`ipv6_addr_from_buf`](#group__net__ipv6__addr_1ga864b9976b6e9623902810c7a3c641556)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * result,const char * addr,size_t addr_len)` 

Converts an IPv6 address from a buffer of characters to a byte-represented IPv6 address.

**See also**: [RFC 5952 ](https://tools.ietf.org/html/rfc5952)

`addr_len` should be between 0 and IPV6_ADDR_MAX_STR_LEN

#### Parameters
* `result` The resulting byte representation 

* `addr` An IPv6 address string representation 

* `addr_len` The amount of characters to parse

#### Returns
`result`, on success 

#### Returns
NULL, if `addr` was malformed 

#### Returns
NULL, if `result` or `addr` was NULL

#### `public char * `[`ipv6_addr_split_str`](#group__net__ipv6__addr_1gab8ac7b371cb0ac9bea729a1a87678def)`(char * addr_str,char separator)` 

split IPv6 address string representation and return remaining string

Will change `separator` position in `addr_str` to '\0'

#### Parameters
* `addr_str` Address to split 

* `separator` Separator char to use

#### Returns
string following the first occurrence of `separator` in `addr_str`. 

#### Returns
NULL if `separator` was not found.

#### `public int `[`ipv6_addr_split_int`](#group__net__ipv6__addr_1gad60d100b0542552fe9cb029031040571)`(char * addr_str,char separator,int _default)` 

split IPv6 address string representation

Will change `separator` position in `addr_str` to '\0'

#### Parameters
* `addr_str` Address to split 

* `separator` Separator char to use 

* `_default` Default value

#### Returns
atoi(string after split) 

#### Returns
`_default` if no string after `separator`

#### `public inline static int `[`ipv6_addr_split_prefix`](#group__net__ipv6__addr_1ga5528f8d64c25228f0b4d4aa9bb904d7a)`(char * addr_str)` 

split IPv6 prefix string representation

E.g., "2001:db8::1/64" returns "64", changes `addr_str` to "2001:db8::1"

#### Parameters
* `addr_str` Address to split 

#### Returns
prefix length or 128 if none specified

#### `public inline static char * `[`ipv6_addr_split_iface`](#group__net__ipv6__addr_1ga6b0364fa77dac4f2e4ff29ce0d094eb7)`(char * addr_str)` 

split IPv6 address + interface specifier

E.g., "fe80::1%5" returns "5", changes `addr_str` to "fe80::1"

#### Parameters
* `addr_str` Address to split 

#### Returns
string containing the interface specifier. 

#### Returns
NULL if no interface was specified.

#### `public void `[`ipv6_addr_print`](#group__net__ipv6__addr_1ga659ce010a1f786fce46db72ae0b6cca1)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Print IPv6 address to stdout.

#### Parameters
* `addr` Pointer to [ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t) to print

#### `public void `[`ipv6_addrs_print`](#group__net__ipv6__addr_1ga30964ab5d6c1e3e01c34d15855c6aac3)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addrs,size_t num,const char * separator)` 

Print IPv6 addresses to stdout.

#### Parameters
* `addrs` Array of addresses to print 

* `num` Number of elements in `addrs`

* `separator` Separator to print between addresses

