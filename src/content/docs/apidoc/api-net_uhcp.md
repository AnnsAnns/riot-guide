---
title: api-net_uhcp.md
description: api-net_uhcp.md
---
# group `net_uhcp` 

Provides UHCP (micro host configuration protocol)

UHCP (micro host configuration protocol) is a RIOT-proprietary protocol that was developed to have a simple drop-in replacement for [DHCPv6 prefix delegation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__dhcpv6__client) (which was not implemented when UHCP was introduced).

If you have root access on your host machine or access to a DHCPv6 server providing prefix delegation, DHCPv6 is preferred over UHCP.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`UHCP_MAGIC`](#group__net__uhcp_1gac62501ec49a0b4a5e0b0937e836deb80)            | UHCP magic number.
`define `[`UHCP_VER`](#group__net__uhcp_1ga2962b8446c737a01e69664e3c02670ad)            | UHCP version of this header.
`define `[`UHCP_PORT`](#group__net__uhcp_1ga9b0023c914d03565ef8fababe44bb800)            | UHCP port number.
`define `[`UHCP_PORT_STR`](#group__net__uhcp_1gaa0a28090d7227bb5bef503db8ff1c9a9)            | UHCP port number (as string for e.g., getaddrinfo() service arg.
`enum `[`uhcp_type_t`](#group__net__uhcp_1ga9a49b7c901cf974aec64990d6f499ae4)            | Enum containing possible UHCP packet types.
`public void `[`uhcp_handle_udp`](#group__net__uhcp_1ga039a7e28fc0255f2be2b02239731e5ce)`(uint8_t * buf,size_t len,uint8_t * src,uint16_t port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)`            | handle incoming UDP packet
`public void `[`uhcp_handle_req`](#group__net__uhcp_1gabf7703947bc7f738f186d2f6c0c7c3ad)`(`[`uhcp_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__req__t)` * req,uint8_t * src,uint16_t port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)`            | handle incoming UHCP request packet
`public void `[`uhcp_handle_push`](#group__net__uhcp_1gaabb550c4b0e4d0a7374f4216dee243b2)`(`[`uhcp_push_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__push__t)` * req,uint8_t * src,uint16_t port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)`            | handle incoming UHCP push packet
`public void `[`uhcp_handle_prefix`](#group__net__uhcp_1ga7528f7c203c8340f7876cffa8dec8219)`(uint8_t * prefix,uint8_t prefix_len,uint16_t lifetime,uint8_t * src,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)`            | handle incoming prefix (as parsed from push packet)
`public inline static void `[`uhcp_hdr_set`](#group__net__uhcp_1gab19543a0598f9f838a82b871c1ebc6c7)`(`[`uhcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__hdr__t)` * hdr,`[`uhcp_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9a49b7c901cf974aec64990d6f499ae4)` type)`            | function to set constant values in UHCP header
`public int `[`udp_sendto`](#group__net__uhcp_1gabb4be6118b224f70a6c4a48b243b39b9)`(uint8_t * buf,size_t len,uint8_t * dst,uint16_t dst_port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` dst_iface)`            | UDP send function used by UHCP client / server.
`struct `[`uhcp_hdr_t`](#structuhcp__hdr__t) | UHCP packet header struct.
`struct `[`uhcp_req_t`](#structuhcp__req__t) | struct for request packets
`struct `[`uhcp_push_t`](#structuhcp__push__t) | struct for push packets

## Members

#### `define `[`UHCP_MAGIC`](#group__net__uhcp_1gac62501ec49a0b4a5e0b0937e836deb80) 

UHCP magic number.

#### `define `[`UHCP_VER`](#group__net__uhcp_1ga2962b8446c737a01e69664e3c02670ad) 

UHCP version of this header.

#### `define `[`UHCP_PORT`](#group__net__uhcp_1ga9b0023c914d03565ef8fababe44bb800) 

UHCP port number.

#### `define `[`UHCP_PORT_STR`](#group__net__uhcp_1gaa0a28090d7227bb5bef503db8ff1c9a9) 

UHCP port number (as string for e.g., getaddrinfo() service arg.

#### `enum `[`uhcp_type_t`](#group__net__uhcp_1ga9a49b7c901cf974aec64990d6f499ae4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UHCP_REQ            | packet is a request packet
UHCP_PUSH            | packet is a push / answer packet

Enum containing possible UHCP packet types.

#### `public void `[`uhcp_handle_udp`](#group__net__uhcp_1ga039a7e28fc0255f2be2b02239731e5ce)`(uint8_t * buf,size_t len,uint8_t * src,uint16_t port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)` 

handle incoming UDP packet

This function should be called by UHCP server/client network code for every incoming UDP packet destined to UCHP_PORT.

#### Parameters
* `buf` buffer containing UDP packet 

* `len` length of `buf`

* `src` ptr to IPv6 source address 

* `port` source port of packet 

* `iface` interface number of incoming packet

#### `public void `[`uhcp_handle_req`](#group__net__uhcp_1gabf7703947bc7f738f186d2f6c0c7c3ad)`(`[`uhcp_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__req__t)` * req,uint8_t * src,uint16_t port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)` 

handle incoming UHCP request packet

This function will be called by [uhcp_handle_udp()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga039a7e28fc0255f2be2b02239731e5ce) for incoming request packet.

#### `public void `[`uhcp_handle_push`](#group__net__uhcp_1gaabb550c4b0e4d0a7374f4216dee243b2)`(`[`uhcp_push_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__push__t)` * req,uint8_t * src,uint16_t port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)` 

handle incoming UHCP push packet

This function will be called by [uhcp_handle_udp()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga039a7e28fc0255f2be2b02239731e5ce) for incoming push packet.

#### `public void `[`uhcp_handle_prefix`](#group__net__uhcp_1ga7528f7c203c8340f7876cffa8dec8219)`(uint8_t * prefix,uint8_t prefix_len,uint16_t lifetime,uint8_t * src,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` iface)` 

handle incoming prefix (as parsed from push packet)

Supposed to be implemented by UHCP client implementations for the network stack.

The function might be called with an already configured prefix. In that case, the lifetime *MUST* be updated.

If the function is called with a different prefix than before, the old prefix *MUST* be considered obsolete.

#### Parameters
* `prefix` ptr to assigned prefix 

* `prefix_len` length of assigned prefix 

* `lifetime` lifetime of prefix 

* `src` ptr to IPv6 source address 

* `iface` number of interface the packet came in

#### `public inline static void `[`uhcp_hdr_set`](#group__net__uhcp_1gab19543a0598f9f838a82b871c1ebc6c7)`(`[`uhcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__hdr__t)` * hdr,`[`uhcp_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9a49b7c901cf974aec64990d6f499ae4)` type)` 

function to set constant values in UHCP header

#### `public int `[`udp_sendto`](#group__net__uhcp_1gabb4be6118b224f70a6c4a48b243b39b9)`(uint8_t * buf,size_t len,uint8_t * dst,uint16_t dst_port,`[`uhcp_iface_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__uhcp_1ga9cae77806761e9cb6fb8a8d7e213ac41)` dst_iface)` 

UDP send function used by UHCP client / server.

Supposed to be implemented by UHCP clients.

#### Parameters
* `buf` buffer to send 

* `len` length of buf 

* `dst` ptr to IPv6 destination address 

* `dst_port` destination port 

* `dst_iface` interface number of destination interface

# struct `uhcp_hdr_t` 

UHCP packet header struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`uhcp_magic`](#structuhcp__hdr__t_1a074e431df97821f3611fb868775337c4) | always contains UHCP in hex
`public uint8_t `[`ver_type`](#structuhcp__hdr__t_1a53547dac092da725536502f160bfe859) | four bits version number, four bits packet type (see uchp_type_t)

## Members

#### `public uint32_t `[`uhcp_magic`](#structuhcp__hdr__t_1a074e431df97821f3611fb868775337c4) 

always contains UHCP in hex

#### `public uint8_t `[`ver_type`](#structuhcp__hdr__t_1a53547dac092da725536502f160bfe859) 

four bits version number, four bits packet type (see uchp_type_t)

# struct `uhcp_req_t` 

```
struct uhcp_req_t
  : public uhcp_hdr_t
```  

struct for request packets

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uhcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__hdr__t)` `[`hdr`](#structuhcp__req__t_1aec9072d1268da1261a89974968718939) | member holding parent type
`public uint8_t `[`prefix_len`](#structuhcp__req__t_1a638aaa988584b3d05280d0dc1d72d6c4) | contains the requested prefix length

## Members

#### `public `[`uhcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__hdr__t)` `[`hdr`](#structuhcp__req__t_1aec9072d1268da1261a89974968718939) 

member holding parent type

#### `public uint8_t `[`prefix_len`](#structuhcp__req__t_1a638aaa988584b3d05280d0dc1d72d6c4) 

contains the requested prefix length

# struct `uhcp_push_t` 

```
struct uhcp_push_t
  : public uhcp_hdr_t
```  

struct for push packets

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uhcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__hdr__t)` `[`hdr`](#structuhcp__push__t_1ab3df7fb844af7bb9ac5decaa2f43a47b) | member holding parent type
`public uint8_t `[`prefix_len`](#structuhcp__push__t_1aea3806002dcf76bc869ee5b1025fb3a7) | contains the prefix length of assigned prefix
`public uint8_t `[`prefix`](#structuhcp__push__t_1a6131395ffdfda2f1f77e490031f05a10) | contains the assigned prefix

## Members

#### `public `[`uhcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_uhcp.md#structuhcp__hdr__t)` `[`hdr`](#structuhcp__push__t_1ab3df7fb844af7bb9ac5decaa2f43a47b) 

member holding parent type

#### `public uint8_t `[`prefix_len`](#structuhcp__push__t_1aea3806002dcf76bc869ee5b1025fb3a7) 

contains the prefix length of assigned prefix

#### `public uint8_t `[`prefix`](#structuhcp__push__t_1a6131395ffdfda2f1f77e490031f05a10) 

contains the assigned prefix

