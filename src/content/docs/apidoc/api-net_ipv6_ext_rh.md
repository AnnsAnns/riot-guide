---
title: api-net_ipv6_ext_rh.md
description: api-net_ipv6_ext_rh.md
---
# group `net_ipv6_ext_rh` 

Definitions for IPv6 routing header extension.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`ipv6_ext_rh_t`](#structipv6__ext__rh__t) | IPv6 routing extension header.

# struct `ipv6_ext_rh_t` 

```
struct ipv6_ext_rh_t
  : public ipv6_ext_t
```  

IPv6 routing extension header.

**See also**: [RFC 8200](https://tools.ietf.org/html/rfc8200#section-4.4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`nh`](#structipv6__ext__rh__t_1a6bdea14a1cc2d69aaff784235a18e5c1) | next header
`public uint8_t `[`len`](#structipv6__ext__rh__t_1a5a6a0a671cf3d546d6f0f380ab2696ca) | length in 8 octets without first octet
`public uint8_t `[`type`](#structipv6__ext__rh__t_1a705b5d7a84641706b03f264e56183428) | identifier of a particular routing header type
`public uint8_t `[`seg_left`](#structipv6__ext__rh__t_1a5c7e0f87f6722d62f82aa4265c48f880) | number of route segments remaining

## Members

#### `public uint8_t `[`nh`](#structipv6__ext__rh__t_1a6bdea14a1cc2d69aaff784235a18e5c1) 

next header

#### `public uint8_t `[`len`](#structipv6__ext__rh__t_1a5a6a0a671cf3d546d6f0f380ab2696ca) 

length in 8 octets without first octet

#### `public uint8_t `[`type`](#structipv6__ext__rh__t_1a705b5d7a84641706b03f264e56183428) 

identifier of a particular routing header type

#### `public uint8_t `[`seg_left`](#structipv6__ext__rh__t_1a5c7e0f87f6722d62f82aa4265c48f880) 

number of route segments remaining

