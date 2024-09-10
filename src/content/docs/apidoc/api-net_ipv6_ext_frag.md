---
title: api-net_ipv6_ext_frag.md
description: api-net_ipv6_ext_frag.md
---
# group `net_ipv6_ext_frag` 

Definitions for IPv6 fragmentation extension.

**See also**: [RFC 8200, section 4.5](https://tools.ietf.org/html/rfc8200#section-4.5)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`IPV6_EXT_FRAG_OFFSET_MASK`](#group__net__ipv6__ext__frag_1gaeb288f0fe0ba923d5ee18fd08a4cde44)            | Mask for the offset.
`define `[`IPV6_EXT_FRAG_M`](#group__net__ipv6__ext__frag_1ga0bd6488920e4edf2a30af5b3fd01f147)            | M flag.
`public inline static unsigned `[`ipv6_ext_frag_get_offset`](#group__net__ipv6__ext__frag_1ga3cc9b03be2c78d3e96c821cf39affdf0)`(const `[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag)`            | Get offset of fragment in bytes.
`public inline static bool `[`ipv6_ext_frag_more`](#group__net__ipv6__ext__frag_1ga9174f95ee2a6312b9eeb174d9a3d21e1)`(const `[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag)`            | Checks if more fragments are coming after the given fragment.
`public inline static void `[`ipv6_ext_frag_set_offset`](#group__net__ipv6__ext__frag_1ga0f9f9350c17df89ded9cd5a0c1b31395)`(`[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag,unsigned offset)`            | Sets the offset field of a fragment header.
`public inline static void `[`ipv6_ext_frag_set_more`](#group__net__ipv6__ext__frag_1gabc26de0d3470feb99e6c92366ff4ff20)`(`[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag)`            | Sets the M flag of a fragment header.
`struct `[`ipv6_ext_frag_t`](#structipv6__ext__frag__t) | Fragment header definition.

## Members

#### `define `[`IPV6_EXT_FRAG_OFFSET_MASK`](#group__net__ipv6__ext__frag_1gaeb288f0fe0ba923d5ee18fd08a4cde44) 

Mask for the offset.

#### `define `[`IPV6_EXT_FRAG_M`](#group__net__ipv6__ext__frag_1ga0bd6488920e4edf2a30af5b3fd01f147) 

M flag.

#### `public inline static unsigned `[`ipv6_ext_frag_get_offset`](#group__net__ipv6__ext__frag_1ga3cc9b03be2c78d3e96c821cf39affdf0)`(const `[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag)` 

Get offset of fragment in bytes.

#### Parameters
* `frag` A fragment header

#### Returns
Offset of fragment in bytes.

#### `public inline static bool `[`ipv6_ext_frag_more`](#group__net__ipv6__ext__frag_1ga9174f95ee2a6312b9eeb174d9a3d21e1)`(const `[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag)` 

Checks if more fragments are coming after the given fragment.

#### Parameters
* `frag` A fragment header

#### Returns
true, when more fragments are coming after the given fragment. 

#### Returns
false, when the given fragment is the last.

#### `public inline static void `[`ipv6_ext_frag_set_offset`](#group__net__ipv6__ext__frag_1ga0f9f9350c17df89ded9cd5a0c1b31395)`(`[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag,unsigned offset)` 

Sets the offset field of a fragment header.

Must be called before [ipv6_ext_frag_set_more()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__ext__frag_1gabc26de0d3470feb99e6c92366ff4ff20)

#### Parameters
* `frag` A fragment header 

* `offset` The offset of the fragment in bytes. Is assumed to be a multiple of 8. Is assumed to be lesser or equal to 65528.

#### `public inline static void `[`ipv6_ext_frag_set_more`](#group__net__ipv6__ext__frag_1gabc26de0d3470feb99e6c92366ff4ff20)`(`[`ipv6_ext_frag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_ext_frag.md#structipv6__ext__frag__t)` * frag)` 

Sets the M flag of a fragment header.

Must be called after [ipv6_ext_frag_set_offset()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__ext__frag_1ga0f9f9350c17df89ded9cd5a0c1b31395)

#### Parameters
* `frag` A fragment header

# struct `ipv6_ext_frag_t` 

Fragment header definition.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`nh`](#structipv6__ext__frag__t_1ac0e8d1388e84aefe8d38a87b32855ee4) | next header
`public uint8_t `[`resv`](#structipv6__ext__frag__t_1aa2a1510c2bec47723b23eeddbb6debf5) | reserved
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`offset_flags`](#structipv6__ext__frag__t_1a17bd98a3a089f6e9b82978068e0d987b) | 11-bit fragment offset and flags
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`id`](#structipv6__ext__frag__t_1a3ecd9fffa5dba1dd68d718d88d1a41df) | identification

## Members

#### `public uint8_t `[`nh`](#structipv6__ext__frag__t_1ac0e8d1388e84aefe8d38a87b32855ee4) 

next header

#### `public uint8_t `[`resv`](#structipv6__ext__frag__t_1aa2a1510c2bec47723b23eeddbb6debf5) 

reserved

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`offset_flags`](#structipv6__ext__frag__t_1a17bd98a3a089f6e9b82978068e0d987b) 

11-bit fragment offset and flags

```cpp
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|      Fragment Offset    |Res|M|
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`id`](#structipv6__ext__frag__t_1a3ecd9fffa5dba1dd68d718d88d1a41df) 

identification

