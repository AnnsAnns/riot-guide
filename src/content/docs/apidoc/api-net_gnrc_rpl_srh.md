---
title: api-net_gnrc_rpl_srh.md
description: api-net_gnrc_rpl_srh.md
---
# group `net_gnrc_rpl_srh` 

Implementation of RPL source routing extension headers.

**See also**: [RFC 6554 ](https://tools.ietf.org/html/rfc6554)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_rpl_srh_process`](#group__net__gnrc__rpl__srh_1gaf0cb62979f8f407ee6919af7e0e4065f)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * ipv6,`[`gnrc_rpl_srh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_rpl_srh.md#structgnrc__rpl__srh__t)` * rh,void ** err_ptr)`            | Process the RPL source routing header.
`struct `[`gnrc_rpl_srh_t`](#structgnrc__rpl__srh__t) | The RPL Source routing header.

## Members

#### `public int `[`gnrc_rpl_srh_process`](#group__net__gnrc__rpl__srh_1gaf0cb62979f8f407ee6919af7e0e4065f)`(`[`ipv6_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t)` * ipv6,`[`gnrc_rpl_srh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_rpl_srh.md#structgnrc__rpl__srh__t)` * rh,void ** err_ptr)` 

Process the RPL source routing header.

`rh->seq_left > 0`; The 0 case means the destination is reached and common among all routing headers, so it should be handled by an external routing header handler.

#### Parameters
* `ipv6` The IPv6 header of the incoming packet. 

* `rh` A RPL source routing header. 

* `err_ptr` A pointer to an erroneous octet within `rh` when return value is [GNRC_IPV6_EXT_RH_ERROR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cada024123a0c461316391e2ba2404677456). For any other return value than [GNRC_IPV6_EXT_RH_ERROR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cada024123a0c461316391e2ba2404677456) the value of `err_ptr` is not defined.

#### Returns
[GNRC_IPV6_EXT_RH_AT_DST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cadacb7ae85ed285eb70fa9abecf621fbdf6), on success 

#### Returns
[GNRC_IPV6_EXT_RH_FORWARDED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cada27f021d2bcd60cf720fd23b609357eaa), when `pkt`*should be* forwarded 

#### Returns
[GNRC_IPV6_EXT_RH_ERROR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__rh_1gga3b39f0c6258619f350327586d1c22cada024123a0c461316391e2ba2404677456), on error

# struct `gnrc_rpl_srh_t` 

```
struct gnrc_rpl_srh_t
  : public ipv6_ext_rh_t
```  

The RPL Source routing header.

**See also**: [RFC 6554 ](https://tools.ietf.org/html/rfc6554)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`nh`](#structgnrc__rpl__srh__t_1a0503c0174f74570698611a60e8557263) | next header
`public uint8_t `[`len`](#structgnrc__rpl__srh__t_1a6a0af66080b44ef9f4c53e2ab9955677) | length in 8 octets without first octet
`public uint8_t `[`type`](#structgnrc__rpl__srh__t_1aacffc7886d47c84f9d49b19839e534d0) | identifier of a particular routing header type
`public uint8_t `[`seg_left`](#structgnrc__rpl__srh__t_1aac35643e317582355ddac034698b60fe) | number of route segments remaining
`public uint8_t `[`compr`](#structgnrc__rpl__srh__t_1a2bf3159f990fcdc2e37643f0b2635510) | number of prefix octets (comprI and comprE)
`public uint8_t `[`pad_resv`](#structgnrc__rpl__srh__t_1a546f67b7a5c1c34e1b3912bc192b2484) | padding and reserved
`public uint16_t `[`resv`](#structgnrc__rpl__srh__t_1a0c98e2a4e72332aceaeef160fc7d5430) | reserved

## Members

#### `public uint8_t `[`nh`](#structgnrc__rpl__srh__t_1a0503c0174f74570698611a60e8557263) 

next header

#### `public uint8_t `[`len`](#structgnrc__rpl__srh__t_1a6a0af66080b44ef9f4c53e2ab9955677) 

length in 8 octets without first octet

#### `public uint8_t `[`type`](#structgnrc__rpl__srh__t_1aacffc7886d47c84f9d49b19839e534d0) 

identifier of a particular routing header type

#### `public uint8_t `[`seg_left`](#structgnrc__rpl__srh__t_1aac35643e317582355ddac034698b60fe) 

number of route segments remaining

#### `public uint8_t `[`compr`](#structgnrc__rpl__srh__t_1a2bf3159f990fcdc2e37643f0b2635510) 

number of prefix octets (comprI and comprE)

#### `public uint8_t `[`pad_resv`](#structgnrc__rpl__srh__t_1a546f67b7a5c1c34e1b3912bc192b2484) 

padding and reserved

#### `public uint16_t `[`resv`](#structgnrc__rpl__srh__t_1a0c98e2a4e72332aceaeef160fc7d5430) 

reserved

