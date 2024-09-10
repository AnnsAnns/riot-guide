---
title: api-net_ndp.md
description: api-net_ndp.md
---
# group `net_ndp` 

Provides IPv6 neighbor discovery message types.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NDP_OPT_RDNSS_MIN_LEN`](#group__net__ndp_1gadcb6224e04c000aabc103cbe9c8a6ec6)            | Minimum length of a recursive DNS server option (in units of 8 bytes)
`define `[`NDP_HOP_LIMIT`](#group__net__ndp_1gaed9955a5c2a9d8b039e188d88f2bd923)            | Hop-limit required for most NDP messages to ensure link-local communication.
`struct `[`ndp_rtr_sol_t`](#structndp__rtr__sol__t) | Router solicitation message format.
`struct `[`ndp_rtr_adv_t`](#structndp__rtr__adv__t) | Router advertisement message format.
`struct `[`ndp_nbr_sol_t`](#structndp__nbr__sol__t) | Neighbor solicitation message format.
`struct `[`ndp_nbr_adv_t`](#structndp__nbr__adv__t) | Neighbor advertisement message format.
`struct `[`ndp_redirect_t`](#structndp__redirect__t) | Redirect message format.
`struct `[`ndp_opt_t`](#structndp__opt__t) | General NDP option format.
`struct `[`ndp_opt_pi_t`](#structndp__opt__pi__t) | Prefix information option format.
`struct `[`ndp_opt_ri_t`](#structndp__opt__ri__t) | Route information option format.
`struct `[`ndp_opt_rh_t`](#structndp__opt__rh__t) | Redirected header option format.
`struct `[`ndp_opt_mtu_t`](#structndp__opt__mtu__t) | MTU option format.
`struct `[`ndp_opt_rdnss_t`](#structndp__opt__rdnss__t) | Recursive DNS server option format without payload.
`struct `[`ndp_opt_rdnss_impl_t`](#structndp__opt__rdnss__impl__t) | Recursive DNS server option format with payload.

## Members

#### `define `[`NDP_OPT_RDNSS_MIN_LEN`](#group__net__ndp_1gadcb6224e04c000aabc103cbe9c8a6ec6) 

Minimum length of a recursive DNS server option (in units of 8 bytes)

**See also**: [RFC 8106, section 5.1](https://tools.ietf.org/html/rfc8106#section-5.1)

#### `define `[`NDP_HOP_LIMIT`](#group__net__ndp_1gaed9955a5c2a9d8b039e188d88f2bd923) 

Hop-limit required for most NDP messages to ensure link-local communication.

**See also**: [RFC 4861, section 4.1](https://tools.ietf.org/html/rfc4861#section-4.1)

**See also**: [RFC 4861, section 4.2](https://tools.ietf.org/html/rfc4861#section-4.2)

**See also**: [RFC 4861, section 4.3](https://tools.ietf.org/html/rfc4861#section-4.3)

**See also**: [RFC 4861, section 4.4](https://tools.ietf.org/html/rfc4861#section-4.4)

**See also**: [RFC 4861, section 4.5](https://tools.ietf.org/html/rfc4861#section-4.5)

# struct `ndp_rtr_sol_t` 

```
struct ndp_rtr_sol_t
  : public icmpv6_hdr_t
```  

Router solicitation message format.

**See also**: [RFC 4861, section 4.1](https://tools.ietf.org/html/rfc4861#section-4.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__rtr__sol__t_1aa98474801afa3d2e2f7d7b0a74eaeaee) | message type
`public uint8_t `[`code`](#structndp__rtr__sol__t_1ab0b2645cd53ce3a7fc5abbc290e0e625) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__rtr__sol__t_1a27d4fc8653d2ed07a0e493208af69db1) | checksum
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__rtr__sol__t_1a7cb0156cd71260327610e16fcac746a0) | reserved field

## Members

#### `public uint8_t `[`type`](#structndp__rtr__sol__t_1aa98474801afa3d2e2f7d7b0a74eaeaee) 

message type

#### `public uint8_t `[`code`](#structndp__rtr__sol__t_1ab0b2645cd53ce3a7fc5abbc290e0e625) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__rtr__sol__t_1a27d4fc8653d2ed07a0e493208af69db1) 

checksum

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__rtr__sol__t_1a7cb0156cd71260327610e16fcac746a0) 

reserved field

# struct `ndp_rtr_adv_t` 

```
struct ndp_rtr_adv_t
  : public icmpv6_hdr_t
```  

Router advertisement message format.

**See also**: [RFC 4861, section 4.2](https://tools.ietf.org/html/rfc4861#section-4.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__rtr__adv__t_1a9a0c33be887d6938f91712b115176552) | message type
`public uint8_t `[`code`](#structndp__rtr__adv__t_1a25039e7f7e1fc613e5288f2ce7c9148a) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__rtr__adv__t_1a2ce47126f0f56166ae1d912ddcfc2393) | checksum
`public uint8_t `[`cur_hl`](#structndp__rtr__adv__t_1ab55a2b3e608931c07735fe3f4bdb6c89) | current hop limit
`public uint8_t `[`flags`](#structndp__rtr__adv__t_1a26aad5e784080d85c690ec40467326bc) | flags
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structndp__rtr__adv__t_1acee205d7c079d91ee506c1322a508c9b) | router lifetime
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`reach_time`](#structndp__rtr__adv__t_1a2ab6122074951e5c55c8e6eb93bacf33) | reachable time
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`retrans_timer`](#structndp__rtr__adv__t_1ab774cf4302bac627e4906c5ffdbf49ad) | retransmission timer

## Members

#### `public uint8_t `[`type`](#structndp__rtr__adv__t_1a9a0c33be887d6938f91712b115176552) 

message type

#### `public uint8_t `[`code`](#structndp__rtr__adv__t_1a25039e7f7e1fc613e5288f2ce7c9148a) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__rtr__adv__t_1a2ce47126f0f56166ae1d912ddcfc2393) 

checksum

#### `public uint8_t `[`cur_hl`](#structndp__rtr__adv__t_1ab55a2b3e608931c07735fe3f4bdb6c89) 

current hop limit

#### `public uint8_t `[`flags`](#structndp__rtr__adv__t_1a26aad5e784080d85c690ec40467326bc) 

flags

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`ltime`](#structndp__rtr__adv__t_1acee205d7c079d91ee506c1322a508c9b) 

router lifetime

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`reach_time`](#structndp__rtr__adv__t_1a2ab6122074951e5c55c8e6eb93bacf33) 

reachable time

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`retrans_timer`](#structndp__rtr__adv__t_1ab774cf4302bac627e4906c5ffdbf49ad) 

retransmission timer

# struct `ndp_nbr_sol_t` 

```
struct ndp_nbr_sol_t
  : public icmpv6_hdr_t
```  

Neighbor solicitation message format.

**See also**: [RFC 4861, section 4.3](https://tools.ietf.org/html/rfc4861#section-4.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__nbr__sol__t_1a1481e8db52af234a4d5980a5686ee633) | message type
`public uint8_t `[`code`](#structndp__nbr__sol__t_1acc92c745c9bcb66c5b1b3652d1ec4440) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__nbr__sol__t_1a2d90433382d31d6f0674f369ead8ae68) | checksum
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__nbr__sol__t_1a90d436b57b8f19be125fe3f40962324f) | reserved field
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`tgt`](#structndp__nbr__sol__t_1adcfe6600602270e75bae79c3c5acfb14) | target address

## Members

#### `public uint8_t `[`type`](#structndp__nbr__sol__t_1a1481e8db52af234a4d5980a5686ee633) 

message type

#### `public uint8_t `[`code`](#structndp__nbr__sol__t_1acc92c745c9bcb66c5b1b3652d1ec4440) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__nbr__sol__t_1a2d90433382d31d6f0674f369ead8ae68) 

checksum

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__nbr__sol__t_1a90d436b57b8f19be125fe3f40962324f) 

reserved field

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`tgt`](#structndp__nbr__sol__t_1adcfe6600602270e75bae79c3c5acfb14) 

target address

# struct `ndp_nbr_adv_t` 

```
struct ndp_nbr_adv_t
  : public icmpv6_hdr_t
```  

Neighbor advertisement message format.

**See also**: [RFC 4861, section 4.4](https://tools.ietf.org/html/rfc4861#section-4.4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__nbr__adv__t_1ad0e78914d6183410dc9baecfbfb484b3) | message type
`public uint8_t `[`code`](#structndp__nbr__adv__t_1a686ba9c8986fb329293413e1f3499b90) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__nbr__adv__t_1a19b4707e7e524457b4354e9b5fa7cace) | checksum
`public uint8_t `[`flags`](#structndp__nbr__adv__t_1aacaba0cdc4704b86c1a1d76d59bc50ea) | flags
`public uint8_t `[`resv`](#structndp__nbr__adv__t_1a01844e72a10ec8979c55c4f4c4e22d68) | reserved fields
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`tgt`](#structndp__nbr__adv__t_1a49bd7e9ab1b09b73ad2fa6abae5ed3a5) | target address

## Members

#### `public uint8_t `[`type`](#structndp__nbr__adv__t_1ad0e78914d6183410dc9baecfbfb484b3) 

message type

#### `public uint8_t `[`code`](#structndp__nbr__adv__t_1a686ba9c8986fb329293413e1f3499b90) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__nbr__adv__t_1a19b4707e7e524457b4354e9b5fa7cace) 

checksum

#### `public uint8_t `[`flags`](#structndp__nbr__adv__t_1aacaba0cdc4704b86c1a1d76d59bc50ea) 

flags

#### `public uint8_t `[`resv`](#structndp__nbr__adv__t_1a01844e72a10ec8979c55c4f4c4e22d68) 

reserved fields

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`tgt`](#structndp__nbr__adv__t_1a49bd7e9ab1b09b73ad2fa6abae5ed3a5) 

target address

# struct `ndp_redirect_t` 

```
struct ndp_redirect_t
  : public icmpv6_hdr_t
```  

Redirect message format.

**See also**: [RFC 4861, section 4.5](https://tools.ietf.org/html/rfc4861#section-4.5)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__redirect__t_1a545083d85d70032476f00ff8aef06a0d) | message type
`public uint8_t `[`code`](#structndp__redirect__t_1a440628e4c615965556008de049673ea6) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__redirect__t_1aec752dae4a6d454d59806b566c364fae) | checksum
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__redirect__t_1ae4569078db40303dc2c645c63d7f1ab7) | reserved field
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`tgt`](#structndp__redirect__t_1a256f3122ba5b94721377dc55c1aa8b87) | target address
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`dst`](#structndp__redirect__t_1a5dbe21d2bb2dcafb70dae40d74650c45) | destination address

## Members

#### `public uint8_t `[`type`](#structndp__redirect__t_1a545083d85d70032476f00ff8aef06a0d) 

message type

#### `public uint8_t `[`code`](#structndp__redirect__t_1a440628e4c615965556008de049673ea6) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structndp__redirect__t_1aec752dae4a6d454d59806b566c364fae) 

checksum

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__redirect__t_1ae4569078db40303dc2c645c63d7f1ab7) 

reserved field

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`tgt`](#structndp__redirect__t_1a256f3122ba5b94721377dc55c1aa8b87) 

target address

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`dst`](#structndp__redirect__t_1a5dbe21d2bb2dcafb70dae40d74650c45) 

destination address

# struct `ndp_opt_t` 

General NDP option format.

**See also**: [RFC 4861, section 4.6](https://tools.ietf.org/html/rfc4861#section-4.6)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__opt__t_1aaca16b84343c8ad7c3cbed949996ba13) | option type
`public uint8_t `[`len`](#structndp__opt__t_1a7c2e7ec93ff10335fce05f786d933236) | length in units of 8 octets

## Members

#### `public uint8_t `[`type`](#structndp__opt__t_1aaca16b84343c8ad7c3cbed949996ba13) 

option type

#### `public uint8_t `[`len`](#structndp__opt__t_1a7c2e7ec93ff10335fce05f786d933236) 

length in units of 8 octets

# struct `ndp_opt_pi_t` 

```
struct ndp_opt_pi_t
  : public ndp_opt_t
```  

Prefix information option format.

**See also**: [RFC 4861, section 4.6.2](https://tools.ietf.org/html/rfc4861#section-4.6.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__opt__pi__t_1a1a46dd2f4984533add7bd38c525e36f3) | option type
`public uint8_t `[`len`](#structndp__opt__pi__t_1ac53ad2b44ea5c658801f22a9b07f2953) | length in units of 8 octets
`public uint8_t `[`prefix_len`](#structndp__opt__pi__t_1a38e4a447c688734295193a49f6a91596) | prefix length
`public uint8_t `[`flags`](#structndp__opt__pi__t_1a025e0db4331cf5013e4389730ce41002) | flags
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`valid_ltime`](#structndp__opt__pi__t_1aa91e903268ac85300d329eea33856b95) | valid lifetime
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`pref_ltime`](#structndp__opt__pi__t_1a5dca1834169b2b9d106ab23910876397) | preferred lifetime
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__opt__pi__t_1a81c1dab68dfea5c700aa2171f4425ad6) | reserved field
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`prefix`](#structndp__opt__pi__t_1ae7e89ed68d91d1dea26665df0a6b5e65) | prefix

## Members

#### `public uint8_t `[`type`](#structndp__opt__pi__t_1a1a46dd2f4984533add7bd38c525e36f3) 

option type

#### `public uint8_t `[`len`](#structndp__opt__pi__t_1ac53ad2b44ea5c658801f22a9b07f2953) 

length in units of 8 octets

#### `public uint8_t `[`prefix_len`](#structndp__opt__pi__t_1a38e4a447c688734295193a49f6a91596) 

prefix length

#### `public uint8_t `[`flags`](#structndp__opt__pi__t_1a025e0db4331cf5013e4389730ce41002) 

flags

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`valid_ltime`](#structndp__opt__pi__t_1aa91e903268ac85300d329eea33856b95) 

valid lifetime

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`pref_ltime`](#structndp__opt__pi__t_1a5dca1834169b2b9d106ab23910876397) 

preferred lifetime

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`resv`](#structndp__opt__pi__t_1a81c1dab68dfea5c700aa2171f4425ad6) 

reserved field

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`prefix`](#structndp__opt__pi__t_1ae7e89ed68d91d1dea26665df0a6b5e65) 

prefix

# struct `ndp_opt_ri_t` 

```
struct ndp_opt_ri_t
  : public ndp_opt_t
```  

Route information option format.

**See also**: [RFC 4191, section 2.3](https://tools.ietf.org/html/rfc4191#section-2.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__opt__ri__t_1a9fedde7cac464eeb2878b8ef385cd76f) | option type
`public uint8_t `[`len`](#structndp__opt__ri__t_1a6f581633acb45283e190e467e96f1ec3) | length in units of 8 octets
`public uint8_t `[`prefix_len`](#structndp__opt__ri__t_1a24f3d4e4f195adc75dc6e2bdbe10e4cd) | prefix length
`public uint8_t `[`flags`](#structndp__opt__ri__t_1aefea8d4dfca80032f45790db279aa01d) | flags
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`route_ltime`](#structndp__opt__ri__t_1a2773cc46183b5cd68f59453bf8dc899f) | route lifetime
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`prefix`](#structndp__opt__ri__t_1ae64daae8cc17acd21cf7a7eb7cfe3ce9) | prefix

## Members

#### `public uint8_t `[`type`](#structndp__opt__ri__t_1a9fedde7cac464eeb2878b8ef385cd76f) 

option type

#### `public uint8_t `[`len`](#structndp__opt__ri__t_1a6f581633acb45283e190e467e96f1ec3) 

length in units of 8 octets

#### `public uint8_t `[`prefix_len`](#structndp__opt__ri__t_1a24f3d4e4f195adc75dc6e2bdbe10e4cd) 

prefix length

#### `public uint8_t `[`flags`](#structndp__opt__ri__t_1aefea8d4dfca80032f45790db279aa01d) 

flags

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`route_ltime`](#structndp__opt__ri__t_1a2773cc46183b5cd68f59453bf8dc899f) 

route lifetime

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`prefix`](#structndp__opt__ri__t_1ae64daae8cc17acd21cf7a7eb7cfe3ce9) 

prefix

# struct `ndp_opt_rh_t` 

```
struct ndp_opt_rh_t
  : public ndp_opt_t
```  

Redirected header option format.

**See also**: [RFC 4861, section 4.6.3](https://tools.ietf.org/html/rfc4861#section-4.6.3)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__opt__rh__t_1a9e3796cf3c729daff9a8d0f986d0a789) | option type
`public uint8_t `[`len`](#structndp__opt__rh__t_1a460c08c851c5c7e502d090201e2b91b2) | length in units of 8 octets
`public uint8_t `[`resv`](#structndp__opt__rh__t_1ac0e99e0536fb6f8f1b7c8e1a4f3a75a0) | reserved field

## Members

#### `public uint8_t `[`type`](#structndp__opt__rh__t_1a9e3796cf3c729daff9a8d0f986d0a789) 

option type

#### `public uint8_t `[`len`](#structndp__opt__rh__t_1a460c08c851c5c7e502d090201e2b91b2) 

length in units of 8 octets

#### `public uint8_t `[`resv`](#structndp__opt__rh__t_1ac0e99e0536fb6f8f1b7c8e1a4f3a75a0) 

reserved field

# struct `ndp_opt_mtu_t` 

```
struct ndp_opt_mtu_t
  : public ndp_opt_t
```  

MTU option format.

**See also**: [RFC 4861, section 4.6.4](https://tools.ietf.org/html/rfc4861#section-4.6.4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__opt__mtu__t_1a37f8168ce9ddaa975c738282ed40dc15) | option type
`public uint8_t `[`len`](#structndp__opt__mtu__t_1af4f07dad9f23f1bd4de8ecab7212a115) | length in units of 8 octets
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structndp__opt__mtu__t_1a42cd5a057ffe6a569c3468c1f910f422) | reserved field
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`mtu`](#structndp__opt__mtu__t_1ae9627d4ff7c0de1a9e4d2d35277137d9) | MTU.

## Members

#### `public uint8_t `[`type`](#structndp__opt__mtu__t_1a37f8168ce9ddaa975c738282ed40dc15) 

option type

#### `public uint8_t `[`len`](#structndp__opt__mtu__t_1af4f07dad9f23f1bd4de8ecab7212a115) 

length in units of 8 octets

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structndp__opt__mtu__t_1a42cd5a057ffe6a569c3468c1f910f422) 

reserved field

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`mtu`](#structndp__opt__mtu__t_1ae9627d4ff7c0de1a9e4d2d35277137d9) 

MTU.

# struct `ndp_opt_rdnss_t` 

```
struct ndp_opt_rdnss_t
  : public ndp_opt_t
```  

Recursive DNS server option format without payload.

**See also**: [RFC 8106, section 5.1](https://tools.ietf.org/html/rfc8106#section-5.1)

**See also**: [ndp_opt_rdnss_impl_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ndp.md#structndp__opt__rdnss__impl__t)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__opt__rdnss__t_1a25f65f9bd9a6012403002b128ec52d0a) | option type
`public uint8_t `[`len`](#structndp__opt__rdnss__t_1a732212c230c79e70b3fa317022aaed45) | length in units of 8 octets
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structndp__opt__rdnss__t_1a49272dd88a89ec5b1f1b6d122f27b1b3) | reserved field
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ltime`](#structndp__opt__rdnss__t_1ab4ef54e1e3ce379741d5089024b44425) | lifetime in seconds

## Members

#### `public uint8_t `[`type`](#structndp__opt__rdnss__t_1a25f65f9bd9a6012403002b128ec52d0a) 

option type

#### `public uint8_t `[`len`](#structndp__opt__rdnss__t_1a732212c230c79e70b3fa317022aaed45) 

length in units of 8 octets

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structndp__opt__rdnss__t_1a49272dd88a89ec5b1f1b6d122f27b1b3) 

reserved field

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ltime`](#structndp__opt__rdnss__t_1ab4ef54e1e3ce379741d5089024b44425) 

lifetime in seconds

# struct `ndp_opt_rdnss_impl_t` 

```
struct ndp_opt_rdnss_impl_t
  : public ndp_opt_rdnss_t
```  

Recursive DNS server option format with payload.

Auxiliary struct that contains a zero-length array as convenience pointer to the addresses. Only for use in C, invalid in ISO-C++.

**See also**: [RFC 8106, section 5.1](https://tools.ietf.org/html/rfc8106#section-5.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structndp__opt__rdnss__impl__t_1a101e86acd6e3f98f78e86adfaa54bc5c) | option type
`public uint8_t `[`len`](#structndp__opt__rdnss__impl__t_1ae01003ee62bb2fb1f81d33ac643d200c) | length in units of 8 octets
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structndp__opt__rdnss__impl__t_1ad18ede35f0f21397e3c118e7c965aaab) | reserved field
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ltime`](#structndp__opt__rdnss__impl__t_1af91220f0ac30e596bc5eaad9bb8cac0f) | lifetime in seconds
`public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`addrs`](#structndp__opt__rdnss__impl__t_1a1f0c4804d5e2ccecd8131ca76a039e8b) | addresses of IPv6 recursive DNS servers

## Members

#### `public uint8_t `[`type`](#structndp__opt__rdnss__impl__t_1a101e86acd6e3f98f78e86adfaa54bc5c) 

option type

#### `public uint8_t `[`len`](#structndp__opt__rdnss__impl__t_1ae01003ee62bb2fb1f81d33ac643d200c) 

length in units of 8 octets

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`resv`](#structndp__opt__rdnss__impl__t_1ad18ede35f0f21397e3c118e7c965aaab) 

reserved field

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ltime`](#structndp__opt__rdnss__impl__t_1af91220f0ac30e596bc5eaad9bb8cac0f) 

lifetime in seconds

#### `public `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` `[`addrs`](#structndp__opt__rdnss__impl__t_1a1f0c4804d5e2ccecd8131ca76a039e8b) 

addresses of IPv6 recursive DNS servers

