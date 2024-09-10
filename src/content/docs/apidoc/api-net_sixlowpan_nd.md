---
title: api-net_sixlowpan_nd.md
description: api-net_sixlowpan_nd.md
---
# group `net_sixlowpan_nd` 

Message types and helper functions for Neighbor Discovery Optimization for 6LoWPAN (6LoWPAN-ND)

**See also**: [RFC 6775, section 4](https://tools.ietf.org/html/rfc6775#section-4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static bool `[`sixlowpan_nd_opt_6ctx_is_comp`](#group__net__sixlowpan__nd_1gab6e4a33434e61b97d843a2f453efa896)`(const `[`sixlowpan_nd_opt_6ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__6ctx__t)` * ctx_opt)`            | Checks if a 6LoWPAN context in an 6LoWPAN context option is valid for compression.
`public inline static uint8_t `[`sixlowpan_nd_opt_6ctx_get_cid`](#group__net__sixlowpan__nd_1ga05c8cb1d53cc4a5c4b41ff1239fdcca9)`(const `[`sixlowpan_nd_opt_6ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__6ctx__t)` * ctx_opt)`            | Gets a CID (context identifier) from a 6LoWPAN context option.
`public inline static void `[`sixlowpan_nd_opt_6ctx_set_cid`](#group__net__sixlowpan__nd_1gad5a77055041a7426a781e743e2e528fa)`(`[`sixlowpan_nd_opt_6ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__6ctx__t)` * ctx_opt,uint8_t cid)`            | Sets a CID (context identifier) for a 6LoWPAN context option.
`public inline static uint32_t `[`sixlowpan_nd_opt_abr_get_version`](#group__net__sixlowpan__nd_1gadfdf4ca72e372f684fa45801d9de6358)`(const `[`sixlowpan_nd_opt_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__abr__t)` * abr_opt)`            | Gets the version in correct order from an Authoritative Border Router option.
`public inline static void `[`sixlowpan_nd_opt_abr_set_version`](#group__net__sixlowpan__nd_1gafc9b68828c437514e2528f0556c3365b)`(`[`sixlowpan_nd_opt_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__abr__t)` * abr_opt,uint32_t version)`            | Sets the version of an Authoritative Border Router option.
`public inline static uint16_t `[`gnrc_sixlowpan_nd_opt_get_ltime`](#group__net__sixlowpan__nd_1ga62cdb8b7ef37d2d47c0eac0fb2c0c5d0)`(const `[`sixlowpan_nd_opt_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__abr__t)` * abr_opt)`            | Get the lifetime of an Authoritative Border Router from an ABR option.
`struct `[`sixlowpan_nd_da_t`](#structsixlowpan__nd__da__t) | Duplicate address request and confirmation message format.
`struct `[`sixlowpan_nd_opt_ar_t`](#structsixlowpan__nd__opt__ar__t) | Address registration option format.
`struct `[`sixlowpan_nd_opt_6ctx_t`](#structsixlowpan__nd__opt__6ctx__t) | 6LoWPAN context option format
`struct `[`sixlowpan_nd_opt_abr_t`](#structsixlowpan__nd__opt__abr__t) | Authoritative border router option format.

## Members

#### `public inline static bool `[`sixlowpan_nd_opt_6ctx_is_comp`](#group__net__sixlowpan__nd_1gab6e4a33434e61b97d843a2f453efa896)`(const `[`sixlowpan_nd_opt_6ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__6ctx__t)` * ctx_opt)` 

Checks if a 6LoWPAN context in an 6LoWPAN context option is valid for compression.

#### Parameters
* `ctx_opt` A 6LoWPAN context option.

#### Returns
true, if C bit is set in `ctx_opt`. 

#### Returns
false, if C bit is unset in `ctx_opt`.

#### `public inline static uint8_t `[`sixlowpan_nd_opt_6ctx_get_cid`](#group__net__sixlowpan__nd_1ga05c8cb1d53cc4a5c4b41ff1239fdcca9)`(const `[`sixlowpan_nd_opt_6ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__6ctx__t)` * ctx_opt)` 

Gets a CID (context identifier) from a 6LoWPAN context option.

#### Parameters
* `ctx_opt` A 6LoWPAN context option.

#### Returns
The CID in the 6LoWPAN context option `ctx_opt`.

#### `public inline static void `[`sixlowpan_nd_opt_6ctx_set_cid`](#group__net__sixlowpan__nd_1gad5a77055041a7426a781e743e2e528fa)`(`[`sixlowpan_nd_opt_6ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__6ctx__t)` * ctx_opt,uint8_t cid)` 

Sets a CID (context identifier) for a 6LoWPAN context option.

#### Parameters
* `ctx_opt` A 6LoWPAN context option. 

* `cid` The CID for the 6LoWPAN context option.

#### `public inline static uint32_t `[`sixlowpan_nd_opt_abr_get_version`](#group__net__sixlowpan__nd_1gadfdf4ca72e372f684fa45801d9de6358)`(const `[`sixlowpan_nd_opt_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__abr__t)` * abr_opt)` 

Gets the version in correct order from an Authoritative Border Router option.

#### Parameters
* `abr_opt` An Authoritative Border Router option (ABRO).

#### Returns
The version of the ABRO

#### `public inline static void `[`sixlowpan_nd_opt_abr_set_version`](#group__net__sixlowpan__nd_1gafc9b68828c437514e2528f0556c3365b)`(`[`sixlowpan_nd_opt_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__abr__t)` * abr_opt,uint32_t version)` 

Sets the version of an Authoritative Border Router option.

#### Parameters
* `abr_opt` An Authoritative Border Router option (ABRO). 

* `version` Version for the ABRO.

#### `public inline static uint16_t `[`gnrc_sixlowpan_nd_opt_get_ltime`](#group__net__sixlowpan__nd_1ga62cdb8b7ef37d2d47c0eac0fb2c0c5d0)`(const `[`sixlowpan_nd_opt_abr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sixlowpan_nd.md#structsixlowpan__nd__opt__abr__t)` * abr_opt)` 

Get the lifetime of an Authoritative Border Router from an ABR option.

#### Parameters
* `abr_opt` An Authoritative Border Router option (ABRO).

#### Returns
The lifetime of `abr_opt` in minutes. If the lifetime is 0, [SIXLOWPAN_ND_OPT_ABR_LTIME_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan__nd_1ga09d11f7031813b9912703dab24e3f655) is returned.

# struct `sixlowpan_nd_da_t` 

```
struct sixlowpan_nd_da_t
  : public icmpv6_hdr_t
```  

Duplicate address request and confirmation message format.

**See also**: [RFC 6775, section 4.4](https://tools.ietf.org/html/rfc6775#section-4.4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structsixlowpan__nd__da__t_1ada808a3f74fb48ec7eff63d0e55651fd) | message type
`public uint8_t `[`code`](#structsixlowpan__nd__da__t_1a43366466968a9783f51358eb81ad78b5) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structsixlowpan__nd__da__t_1ad6037d3ceb0275abd80a4f350465370b) | checksum
`public uint8_t `[`status`](#structsixlowpan__nd__da__t_1a9f39d8734139ed81524a45f4905a3026) | indicates registration status in DAC; must be 0 in DAR.
`public uint8_t `[`resv`](#structsixlowpan__nd__da__t_1aa5c632f989e90afa082bdcf795634dc1) | reserved field
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__da__t_1acb4d1c3970f2dba34711c3d916069606) | registration lifetime
`public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`eui64`](#structsixlowpan__nd__da__t_1a83ca8962709f6aa82a2f12f7d3704475) | EUI-64.
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`addr`](#structsixlowpan__nd__da__t_1ace2fa857dbf1c3f8c9ec7e942aba2154) | registered address

## Members

#### `public uint8_t `[`type`](#structsixlowpan__nd__da__t_1ada808a3f74fb48ec7eff63d0e55651fd) 

message type

#### `public uint8_t `[`code`](#structsixlowpan__nd__da__t_1a43366466968a9783f51358eb81ad78b5) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structsixlowpan__nd__da__t_1ad6037d3ceb0275abd80a4f350465370b) 

checksum

#### `public uint8_t `[`status`](#structsixlowpan__nd__da__t_1a9f39d8734139ed81524a45f4905a3026) 

indicates registration status in DAC; must be 0 in DAR.

#### `public uint8_t `[`resv`](#structsixlowpan__nd__da__t_1aa5c632f989e90afa082bdcf795634dc1) 

reserved field

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__da__t_1acb4d1c3970f2dba34711c3d916069606) 

registration lifetime

#### `public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`eui64`](#structsixlowpan__nd__da__t_1a83ca8962709f6aa82a2f12f7d3704475) 

EUI-64.

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`addr`](#structsixlowpan__nd__da__t_1ace2fa857dbf1c3f8c9ec7e942aba2154) 

registered address

# struct `sixlowpan_nd_opt_ar_t` 

```
struct sixlowpan_nd_opt_ar_t
  : public ndp_opt_t
```  

Address registration option format.

**See also**: [RFC 6775, section 4.1](https://tools.ietf.org/html/rfc6775#section-4.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structsixlowpan__nd__opt__ar__t_1acca4c40164a7063bea43afde752c6498) | option type
`public uint8_t `[`len`](#structsixlowpan__nd__opt__ar__t_1a3ff6c4f077e58240b0627fa40eb5fcbe) | length in units of 8 octets
`public uint8_t `[`status`](#structsixlowpan__nd__opt__ar__t_1a6ff9fe840ee4f29c4388f76ef0c5398a) | indicates registration status in NA response; must be 0 in NS messages
`public uint8_t `[`resv`](#structsixlowpan__nd__opt__ar__t_1a44e7986db4df975c2e7eaf11014cffd5) | reserved fields
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__opt__ar__t_1a71d22a47023f035ce06d4d0b4676448e) | registration lifetime
`public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`eui64`](#structsixlowpan__nd__opt__ar__t_1a90095a5a55d3ffded271bbd0664c88eb) | EUI-64.

## Members

#### `public uint8_t `[`type`](#structsixlowpan__nd__opt__ar__t_1acca4c40164a7063bea43afde752c6498) 

option type

#### `public uint8_t `[`len`](#structsixlowpan__nd__opt__ar__t_1a3ff6c4f077e58240b0627fa40eb5fcbe) 

length in units of 8 octets

#### `public uint8_t `[`status`](#structsixlowpan__nd__opt__ar__t_1a6ff9fe840ee4f29c4388f76ef0c5398a) 

indicates registration status in NA response; must be 0 in NS messages

#### `public uint8_t `[`resv`](#structsixlowpan__nd__opt__ar__t_1a44e7986db4df975c2e7eaf11014cffd5) 

reserved fields

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__opt__ar__t_1a71d22a47023f035ce06d4d0b4676448e) 

registration lifetime

#### `public `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` `[`eui64`](#structsixlowpan__nd__opt__ar__t_1a90095a5a55d3ffded271bbd0664c88eb) 

EUI-64.

# struct `sixlowpan_nd_opt_6ctx_t` 

```
struct sixlowpan_nd_opt_6ctx_t
  : public ndp_opt_t
```  

6LoWPAN context option format

**See also**: [RFC 6775, section 4.2](https://tools.ietf.org/html/rfc6775#section-4.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structsixlowpan__nd__opt__6ctx__t_1a22443a474835f2e57725301890547258) | option type
`public uint8_t `[`len`](#structsixlowpan__nd__opt__6ctx__t_1add5233d75f820909c55b8c9003332290) | length in units of 8 octets
`public uint8_t `[`ctx_len`](#structsixlowpan__nd__opt__6ctx__t_1a40c605568e145cee06672371d3d547c1) | context length
`public uint8_t `[`resv_c_cid`](#structsixlowpan__nd__opt__6ctx__t_1aff8f19f0a815b833da4e20656eefb7b8) | 3-bit reserved, 1-bit c flag, 4 bit CID
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structsixlowpan__nd__opt__6ctx__t_1ae6f6107b4a586d86737e1585a1fffc82) | reserved field
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__opt__6ctx__t_1a4db269a184b352d9ff89bfd2af9386d5) | valid lifetime

## Members

#### `public uint8_t `[`type`](#structsixlowpan__nd__opt__6ctx__t_1a22443a474835f2e57725301890547258) 

option type

#### `public uint8_t `[`len`](#structsixlowpan__nd__opt__6ctx__t_1add5233d75f820909c55b8c9003332290) 

length in units of 8 octets

#### `public uint8_t `[`ctx_len`](#structsixlowpan__nd__opt__6ctx__t_1a40c605568e145cee06672371d3d547c1) 

context length

#### `public uint8_t `[`resv_c_cid`](#structsixlowpan__nd__opt__6ctx__t_1aff8f19f0a815b833da4e20656eefb7b8) 

3-bit reserved, 1-bit c flag, 4 bit CID

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structsixlowpan__nd__opt__6ctx__t_1ae6f6107b4a586d86737e1585a1fffc82) 

reserved field

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__opt__6ctx__t_1a4db269a184b352d9ff89bfd2af9386d5) 

valid lifetime

# struct `sixlowpan_nd_opt_abr_t` 

```
struct sixlowpan_nd_opt_abr_t
  : public ndp_opt_t
```  

Authoritative border router option format.

**See also**: [RFC 6775, section 4.3](https://tools.ietf.org/html/rfc6775#section-4.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structsixlowpan__nd__opt__abr__t_1ad3364c43a6d210386d4403fa501b267a) | option type
`public uint8_t `[`len`](#structsixlowpan__nd__opt__abr__t_1af03a067958fb207a9b43586bbb7f5757) | length in units of 8 octets
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`vlow`](#structsixlowpan__nd__opt__abr__t_1a4e0a6aafe3b0a9f25f5a1a344a41a15e) | version low
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`vhigh`](#structsixlowpan__nd__opt__abr__t_1a11a2a3419a2f6ab75097e9d8f24e0d0e) | version high
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__opt__abr__t_1abb8c64012bcfd25d43b735d64b126e5c) | valid lifetime
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`braddr`](#structsixlowpan__nd__opt__abr__t_1a310f01e2573f66f0febb259b4473288c) | 6LoWPAN border router address

## Members

#### `public uint8_t `[`type`](#structsixlowpan__nd__opt__abr__t_1ad3364c43a6d210386d4403fa501b267a) 

option type

#### `public uint8_t `[`len`](#structsixlowpan__nd__opt__abr__t_1af03a067958fb207a9b43586bbb7f5757) 

length in units of 8 octets

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`vlow`](#structsixlowpan__nd__opt__abr__t_1a4e0a6aafe3b0a9f25f5a1a344a41a15e) 

version low

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`vhigh`](#structsixlowpan__nd__opt__abr__t_1a11a2a3419a2f6ab75097e9d8f24e0d0e) 

version high

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structsixlowpan__nd__opt__abr__t_1abb8c64012bcfd25d43b735d64b126e5c) 

valid lifetime

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`braddr`](#structsixlowpan__nd__opt__abr__t_1a310f01e2573f66f0febb259b4473288c) 

6LoWPAN border router address

