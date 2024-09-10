---
title: api-net_gnrc_sixlowpan_ctx.md
description: api-net_gnrc_sixlowpan_ctx.md
---
# group `net_gnrc_sixlowpan_ctx` 

Context buffer for stateful 6LoWPAN address compression.

**See also**: [RFC 6282, section 3.1.2 ](https://tools.ietf.org/html/rfc6282#section-3.1.2)

**See also**: [RFC 6775, section 4.2 ](http://tools.ietf.org/html/rfc6775#section-4.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_SIXLOWPAN_CTX_SIZE`](#group__net__gnrc__sixlowpan__ctx_1gac8af15dda87a6f02a55d5c2fa0efa35f)            | maximum number of entries in context buffer
`public `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * `[`gnrc_sixlowpan_ctx_lookup_addr`](#group__net__gnrc__sixlowpan__ctx_1gaf4c50f4668e397f5e3d9b6c91091042d)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Gets a context matching the given IPv6 address best with its prefix.
`public `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * `[`gnrc_sixlowpan_ctx_lookup_id`](#group__net__gnrc__sixlowpan__ctx_1gaee6e585aaf5abb7c34c514fa330445f1)`(uint8_t id)`            | Gets context by ID.
`public `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * `[`gnrc_sixlowpan_ctx_update`](#group__net__gnrc__sixlowpan__ctx_1ga1c4ed509226c4d9938fd796ac184c11e)`(uint8_t id,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint16_t ltime,bool comp)`            | Updates (or adds if currently not registered) a context.
`public inline static void `[`gnrc_sixlowpan_ctx_remove`](#group__net__gnrc__sixlowpan__ctx_1ga695f7f6ba0ef1b4cc9a3e92649cf0da4)`(uint8_t id)`            | Removes context.
`public inline static bool `[`gnrc_sixlowpan_ctx_match`](#group__net__gnrc__sixlowpan__ctx_1ga52b2c7df360c5398c64d08549deb962e)`(const `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * ctx,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len)`            | Check if a prefix matches a compression context.
`public inline static bool `[`gnrc_sixlowpan_ctx_update_6ctx`](#group__net__gnrc__sixlowpan__ctx_1ga46c499aa37f26b1339da2128a3f3fa1a)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint32_t valid)`            | Create or update a compression context.
`public void `[`gnrc_sixlowpan_ctx_reset`](#group__net__gnrc__sixlowpan__ctx_1ga90dc8d6f9e12ec7766ea70fe17835623)`(void)`            | Resets the whole context buffer.
`struct `[`gnrc_sixlowpan_ctx_t`](#structgnrc__sixlowpan__ctx__t) | Entry in the 6LoWPAN context buffer.

## Members

#### `define `[`GNRC_SIXLOWPAN_CTX_SIZE`](#group__net__gnrc__sixlowpan__ctx_1gac8af15dda87a6f02a55d5c2fa0efa35f) 

maximum number of entries in context buffer

#### `public `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * `[`gnrc_sixlowpan_ctx_lookup_addr`](#group__net__gnrc__sixlowpan__ctx_1gaf4c50f4668e397f5e3d9b6c91091042d)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Gets a context matching the given IPv6 address best with its prefix.

#### Parameters
* `addr` An IPv6 address.

#### Returns
The context associated with the best prefix for `addr`. 

#### Returns
NULL if there is no such context.

#### `public `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * `[`gnrc_sixlowpan_ctx_lookup_id`](#group__net__gnrc__sixlowpan__ctx_1gaee6e585aaf5abb7c34c514fa330445f1)`(uint8_t id)` 

Gets context by ID.

#### Parameters
* `id` A context ID.

#### Returns
The context associated with `id`. 

#### Returns
NULL if there is no such context.

#### `public `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * `[`gnrc_sixlowpan_ctx_update`](#group__net__gnrc__sixlowpan__ctx_1ga1c4ed509226c4d9938fd796ac184c11e)`(uint8_t id,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint16_t ltime,bool comp)` 

Updates (or adds if currently not registered) a context.

#### Parameters
* `id` The ID for the context. Must be < [GNRC_SIXLOWPAN_CTX_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__ctx_1gac8af15dda87a6f02a55d5c2fa0efa35f). 

* `prefix` The prefix for the context. 

* `prefix_len` Length of `prefix` in bits. Must be > 0. 

* `ltime` New lifetime of the context. `comp` will be implicitly set to `false` if `ltime` == 0. 

* `comp` Use for compression if true, do not use for compression, but still for decompression if false.

#### Returns
The new context on success. 

#### Returns
NULL, on error or on removal.

#### `public inline static void `[`gnrc_sixlowpan_ctx_remove`](#group__net__gnrc__sixlowpan__ctx_1ga695f7f6ba0ef1b4cc9a3e92649cf0da4)`(uint8_t id)` 

Removes context.

#### Parameters
* `id` A context ID.

#### `public inline static bool `[`gnrc_sixlowpan_ctx_match`](#group__net__gnrc__sixlowpan__ctx_1ga52b2c7df360c5398c64d08549deb962e)`(const `[`gnrc_sixlowpan_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t)` * ctx,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len)` 

Check if a prefix matches a compression context.

#### Parameters
* `ctx` The compression context 

* `prefix` IPv6 prefix 

* `prefix_len` Length of the IPv6 prefix

#### Returns
true if the prefix matches the compression context.

#### `public inline static bool `[`gnrc_sixlowpan_ctx_update_6ctx`](#group__net__gnrc__sixlowpan__ctx_1ga46c499aa37f26b1339da2128a3f3fa1a)`(const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * prefix,uint8_t prefix_len,uint32_t valid)` 

Create or update a compression context.

#### Parameters
* `prefix` IPv6 prefix of the compression context 

* `prefix_len` Length of the IPv6 prefix 

* `valid` Lifetime of the prefix in seconds

#### Returns
true if a new compression context was created or an existing context was updated. false if no new context could be added

#### `public void `[`gnrc_sixlowpan_ctx_reset`](#group__net__gnrc__sixlowpan__ctx_1ga90dc8d6f9e12ec7766ea70fe17835623)`(void)` 

Resets the whole context buffer.

# struct `gnrc_sixlowpan_ctx_t` 

Entry in the 6LoWPAN context buffer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`prefix`](#structgnrc__sixlowpan__ctx__t_1abab172a4055236dad606413c46fa2ea8) | The prefix associated to this context.
`public uint8_t `[`prefix_len`](#structgnrc__sixlowpan__ctx__t_1a530aab57551691fcbd7528f7221f64db) | Length of [gnrc_sixlowpan_ctx_t::prefix](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t_1abab172a4055236dad606413c46fa2ea8) in bit.
`public uint8_t `[`flags_id`](#structgnrc__sixlowpan__ctx__t_1adf3863fe7da35fea1e0cd4d5b100bd9a) | 4-bit flags, 4-bit Context ID.
`public uint16_t `[`ltime`](#structgnrc__sixlowpan__ctx__t_1a8c2d2c3cd3f0927c438b3ad97d8488e0) | Lifetime in minutes this context is valid.

## Members

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`prefix`](#structgnrc__sixlowpan__ctx__t_1abab172a4055236dad606413c46fa2ea8) 

The prefix associated to this context.

#### `public uint8_t `[`prefix_len`](#structgnrc__sixlowpan__ctx__t_1a530aab57551691fcbd7528f7221f64db) 

Length of [gnrc_sixlowpan_ctx_t::prefix](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_ctx.md#structgnrc__sixlowpan__ctx__t_1abab172a4055236dad606413c46fa2ea8) in bit.

#### `public uint8_t `[`flags_id`](#structgnrc__sixlowpan__ctx__t_1adf3863fe7da35fea1e0cd4d5b100bd9a) 

4-bit flags, 4-bit Context ID.

This needs to be here to easily translate prefixes to ID.

The flags are defined as above.

#### `public uint16_t `[`ltime`](#structgnrc__sixlowpan__ctx__t_1a8c2d2c3cd3f0927c438b3ad97d8488e0) 

Lifetime in minutes this context is valid.

**See also**: [6LoWPAN Context Option ](http://tools.ietf.org/html/rfc6775#section-4.2)

