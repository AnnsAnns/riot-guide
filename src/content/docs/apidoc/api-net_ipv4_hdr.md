---
title: api-net_ipv4_hdr.md
description: api-net_ipv4_hdr.md
---
# group `net_ipv4_hdr` 

IPv4 header types and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`ipv4_hdr_set_version`](#group__net__ipv4__hdr_1gadce17ee7a970aef90fa89cd175dc4f72)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)`            | Sets the version field of `hdr` to 6.
`public inline static uint8_t `[`ipv4_hdr_get_version`](#group__net__ipv4__hdr_1ga95172c8f9bb8bc6e5b33636a2f397f35)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)`            | Gets the value of the version field of `hdr`.
`public inline static void `[`ipv4_hdr_set_ihl`](#group__net__ipv4__hdr_1ga4532efb2194e6fa82fcc415a8edee5f6)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr,uint16_t ihl)`            | Sets the Internet Header Length field of `hdr`.
`public inline static uint16_t `[`ipv4_hdr_get_ihl`](#group__net__ipv4__hdr_1ga4592cfea240dbd54e3b085dfed55087f)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)`            | brief Gets the value of the Internet Header Length field of `hdr`
`public inline static void `[`ipv4_hdr_set_flags`](#group__net__ipv4__hdr_1ga41ff681ec7be400ab68f65ff1266bcb6)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr,uint8_t flags)`            | Sets the Version Control Flags field of `hdr`.
`public inline static uint8_t `[`ipv4_hdr_get_flags`](#group__net__ipv4__hdr_1ga201e53a30e080a1380f516c95d4ddca0)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)`            | brief Gets the value of the Version Control Flags field of `hdr`
`public inline static void `[`ipv4_hdr_set_fo`](#group__net__ipv4__hdr_1gafce49df914d703eb01c4c41096aecd81)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr,uint16_t fo)`            | Sets the Fragment Offset field of `hdr`.
`public inline static uint16_t `[`ipv4_hdr_get_fo`](#group__net__ipv4__hdr_1gaae26c289ea754371939b2627aa339188)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)`            | brief Gets the value of the Fragment Offset field of `hdr`
`struct `[`ipv4_hdr_t`](#structipv4__hdr__t) | Data type to represent an IPv4 packet header.

## Members

#### `public inline static void `[`ipv4_hdr_set_version`](#group__net__ipv4__hdr_1gadce17ee7a970aef90fa89cd175dc4f72)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)` 

Sets the version field of `hdr` to 6.

#### Parameters
* `hdr` Pointer to an IPv4 header.

#### `public inline static uint8_t `[`ipv4_hdr_get_version`](#group__net__ipv4__hdr_1ga95172c8f9bb8bc6e5b33636a2f397f35)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)` 

Gets the value of the version field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv4 header.

#### Returns
Value of the version field of `hdr`.

#### `public inline static void `[`ipv4_hdr_set_ihl`](#group__net__ipv4__hdr_1ga4532efb2194e6fa82fcc415a8edee5f6)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr,uint16_t ihl)` 

Sets the Internet Header Length field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv4 header. 

* `ihl` Size in bytes of the Internet Header Length (including padding)

#### `public inline static uint16_t `[`ipv4_hdr_get_ihl`](#group__net__ipv4__hdr_1ga4592cfea240dbd54e3b085dfed55087f)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)` 

brief Gets the value of the Internet Header Length field of `hdr`

#### Parameters
* `hdr` Pointer to an IPv4 header.

#### Returns
Size in bytes of the Internet Header Length field of `hdr`

#### `public inline static void `[`ipv4_hdr_set_flags`](#group__net__ipv4__hdr_1ga41ff681ec7be400ab68f65ff1266bcb6)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr,uint8_t flags)` 

Sets the Version Control Flags field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv4 header. 

* `flags` The new value of flags

#### `public inline static uint8_t `[`ipv4_hdr_get_flags`](#group__net__ipv4__hdr_1ga201e53a30e080a1380f516c95d4ddca0)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)` 

brief Gets the value of the Version Control Flags field of `hdr`

#### Parameters
* `hdr` Pointer to an IPv4 header.

#### Returns
Value of the Version Control field of `hdr`

#### `public inline static void `[`ipv4_hdr_set_fo`](#group__net__ipv4__hdr_1gafce49df914d703eb01c4c41096aecd81)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr,uint16_t fo)` 

Sets the Fragment Offset field of `hdr`.

#### Parameters
* `hdr` Pointer to an IPv4 header. 

* `fo` The new value of fragment offset

#### `public inline static uint16_t `[`ipv4_hdr_get_fo`](#group__net__ipv4__hdr_1gaae26c289ea754371939b2627aa339188)`(`[`ipv4_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_hdr.md#structipv4__hdr__t)` * hdr)` 

brief Gets the value of the Fragment Offset field of `hdr`

#### Parameters
* `hdr` Pointer to an IPv4 header.

#### Returns
Value of the Fragment Offset field of `hdr`

# struct `ipv4_hdr_t` 

Data type to represent an IPv4 packet header.

The structure of the header is as follows:

```cpp
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

**See also**: [RFC 791, section 3.1 ](https://tools.ietf.org/html/rfc791#section-3.1)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`v_ih`](#structipv4__hdr__t_1a4e2d59128a6d1564e9dc2bee37c930aa) | Version and Internet Header Length.
`public uint8_t `[`ts`](#structipv4__hdr__t_1af257a6c628baa9507f335d98cf87cf40) | type of service of packet
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`tl`](#structipv4__hdr__t_1a24f0098c214b032f6a7d2e0026e746c4) | total length of the datagram
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`id`](#structipv4__hdr__t_1ac18d4060963091e35f7611b4094418fc) | identification value of packet
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`fl_fo`](#structipv4__hdr__t_1aa676041846f2aa7b0506cdc0a291edc2) | version control flags and Fragment Offset.
`public uint8_t `[`ttl`](#structipv4__hdr__t_1aa9df79297628681755de7d4aa47ebc29) | time to live for this packet
`public uint8_t `[`protocol`](#structipv4__hdr__t_1a306d4d335f1f66dd42ddf2b443bf188a) | protocol of this packet
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structipv4__hdr__t_1a9358cbd492e13c9ad079d318c472bb49) | checksum of this packet
`public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` `[`src`](#structipv4__hdr__t_1a2853cd9bbc02164abde7f64e4eebd86b) | source address of this packet
`public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` `[`dst`](#structipv4__hdr__t_1aa239811c76247dada1023005a20255c5) | destination address of this packet

## Members

#### `public uint8_t `[`v_ih`](#structipv4__hdr__t_1a4e2d59128a6d1564e9dc2bee37c930aa) 

Version and Internet Header Length.

The version are the 4 most significant bits and the Internet Header Length the 4 next bit (see above).

This module provides helper functions to set, get, and check these fields accordingly:

* [ipv4_hdr_set_version()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1gadce17ee7a970aef90fa89cd175dc4f72)

* [ipv4_hdr_get_version()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1ga95172c8f9bb8bc6e5b33636a2f397f35)

* [ipv4_hdr_set_ihl()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1ga4532efb2194e6fa82fcc415a8edee5f6)

* [ipv4_hdr_get_ihl()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1ga4592cfea240dbd54e3b085dfed55087f)

#### `public uint8_t `[`ts`](#structipv4__hdr__t_1af257a6c628baa9507f335d98cf87cf40) 

type of service of packet

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`tl`](#structipv4__hdr__t_1a24f0098c214b032f6a7d2e0026e746c4) 

total length of the datagram

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`id`](#structipv4__hdr__t_1ac18d4060963091e35f7611b4094418fc) 

identification value of packet

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`fl_fo`](#structipv4__hdr__t_1aa676041846f2aa7b0506cdc0a291edc2) 

version control flags and Fragment Offset.

The flags are the 3 most significant bits, and the remaining 13 bits are the fragment offset

This module provides helper functions to set, get, and check these fields accordingly:

* [ipv4_hdr_set_flags()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1ga41ff681ec7be400ab68f65ff1266bcb6)

* [ipv4_hdr_get_flags()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1ga201e53a30e080a1380f516c95d4ddca0)

* [ipv4_hdr_set_fo()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1gafce49df914d703eb01c4c41096aecd81)

* [ipv4_hdr_get_fo()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv4__hdr_1gaae26c289ea754371939b2627aa339188)

#### `public uint8_t `[`ttl`](#structipv4__hdr__t_1aa9df79297628681755de7d4aa47ebc29) 

time to live for this packet

#### `public uint8_t `[`protocol`](#structipv4__hdr__t_1a306d4d335f1f66dd42ddf2b443bf188a) 

protocol of this packet

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structipv4__hdr__t_1a9358cbd492e13c9ad079d318c472bb49) 

checksum of this packet

#### `public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` `[`src`](#structipv4__hdr__t_1a2853cd9bbc02164abde7f64e4eebd86b) 

source address of this packet

#### `public `[`ipv4_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv4_addr.md#unionipv4__addr__t)` `[`dst`](#structipv4__hdr__t_1aa239811c76247dada1023005a20255c5) 

destination address of this packet

