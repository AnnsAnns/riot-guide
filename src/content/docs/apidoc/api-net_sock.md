---
title: api-net_sock.md
description: api-net_sock.md
---
# group `net_sock` 

Provides a network API for applications and library.

About
```cpp
+---------------+
|  Application  |
+---------------+
        ^
        |
        v
      sock
        ^
        |
        v
+---------------+
| Network Stack |
+---------------+
```

This module provides a set of functions to establish connections or send and receive datagrams using different types of protocols. Together, they serve as an API that allows an application or library to connect to a network.

It was designed with the following priorities in mind

* No need for dynamic memory allocation

* User friendliness

* Simplicity

* Efficiency (at both front- and backend)

* Portability

Currently the following `sock` types are defined:

* [sock_ip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga439f68352d1339555536747a64b5232e) ([net/sock/ip.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#ip_8h)): raw IP sock

* [sock_tcp_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga0144778bc074e291fcb0d43bd35c0179) ([net/sock/tcp.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#sock_2tcp_8h)): TCP sock

* [sock_udp_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga3cb61a4ee66c9c235e4f22860658698c) ([net/sock/udp.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#sock_2udp_8h)): UDP sock

* [sock_dtls_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaa63acc71681400dd4b856ce09e27cafb) ([net/sock/dtls.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#sock_2dtls_8h)): DTLS sock

Note that there might be no relation between the different `sock` types. So casting e.g. `sock_ip_t` to `sock_udp_t` might not be as straight forward, as you think depending on the networking architecture.

How To UseA RIOT application uses the functions provided by one or more of the `sock` type headers (for example [sock_udp_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga3cb61a4ee66c9c235e4f22860658698c)), regardless of the network stack it uses. The network stack used under the bonnet is specified by including the appropriate module (for example `USEMODULE += gnrc_sock_udp` for [GNRC's](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) version of this API).

This allows for network stack agnostic code on the application layer. The application code to establish a connection is always the same, allowing the network stack underneath to be switched simply by changing the `USEMODULE` definitions in the application's Makefile.

The actual code very much depends on the used `sock` type. Please refer to their documentation for specific examples.

Implementer NotesType definitionFor simplicity and modularity this API doesn't put any restriction on the actual implementation of the type. For example, one implementation might choose to have all `sock` types having a common base class or use the raw IP `sock` type to send e.g. UDP packets, while others will keep them completely separate from each other.

Alexander Aring [aar@pengutronix.de](mailto:aar@pengutronix.de)

Simon Brummer [simon.brummer@haw-hamburg.de](mailto:simon.brummer@haw-hamburg.de)

Cenk Gündoğan [mail@cgundogan.de](mailto:mail@cgundogan.de)

Peter Kietzmann [peter.kietzmann@haw-hamburg.de](mailto:peter.kietzmann@haw-hamburg.de)

Martine Lenders [m.lenders@fu-berlin.de](mailto:m.lenders@fu-berlin.de)

Kaspar Schleiser [kaspar@schleiser.de](mailto:kaspar@schleiser.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SOCK_ADDR_ANY_NETIF`](#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca)            | Special netif ID for "any interface".
`define `[`SOCK_IPV4_EP_ANY`](#group__net__sock_1gaca8b50e1b4fabde0f5073a665faf5e07)            | Address to bind to any IPv4 address.
`define `[`SOCK_IPV6_EP_ANY`](#group__net__sock_1ga3f10e5b714c03824d6dc4fff5d372b8f)            | Address to bind to any IPv6 address.
`define `[`SOCK_NO_TIMEOUT`](#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e)            | Special value meaning "wait forever" (don't timeout)
`enum `[`@384`](#group__net__sock_1ga6f202bbbced0e3a7de5dc2d9029b29b7)            | Flags used to request auxiliary data.
`struct `[`sock_ip_ep_t`](#structsock__ip__ep__t) | Abstract IP end point and end point for a raw IP sock object.
`struct `[`_sock_tl_ep`](#struct__sock__tl__ep) | Common IP-based transport layer end point.

## Members

#### `define `[`SOCK_ADDR_ANY_NETIF`](#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca) 

Special netif ID for "any interface".

> Todo: Use an equivalent definition from PR #5511

#### `define `[`SOCK_IPV4_EP_ANY`](#group__net__sock_1gaca8b50e1b4fabde0f5073a665faf5e07) 

Address to bind to any IPv4 address.

#### `define `[`SOCK_IPV6_EP_ANY`](#group__net__sock_1ga3f10e5b714c03824d6dc4fff5d372b8f) 

Address to bind to any IPv6 address.

#### `define `[`SOCK_NO_TIMEOUT`](#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) 

Special value meaning "wait forever" (don't timeout)

#### `enum `[`@384`](#group__net__sock_1ga6f202bbbced0e3a7de5dc2d9029b29b7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SOCK_AUX_GET_LOCAL            | Flag to request the local address/endpoint.
SOCK_AUX_GET_TIMESTAMP            | Flag to request the time stamp of transmission / reception.
SOCK_AUX_GET_RSSI            | Flag to request the RSSI value of received frame.
SOCK_AUX_SET_LOCAL            | Flag to set the local address/endpoint.
SOCK_AUX_GET_TTL            | Flag to request the TTL value of received frame.

Flags used to request auxiliary data.

# struct `sock_ip_ep_t` 

Abstract IP end point and end point for a raw IP sock object.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`family`](#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) | family of [sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6)
`public uint8_t `[`ipv6`](#structsock__ip__ep__t_1ab8868cf7ab0dd8478b464f6ad260a8ee) | IPv6 address mode.
`public uint8_t `[`ipv4`](#structsock__ip__ep__t_1aeaf0f01115440fd3565c8f7c2e304096) | IPv4 address mode.
`public uint32_t `[`ipv4_u32`](#structsock__ip__ep__t_1a12825c6d9d56ae275517f27aae3acaf9) | IPv4 address *in network byte order*
`public union sock_ip_ep_t::@385 `[`addr`](#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6) | address
`public uint16_t `[`netif`](#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) | stack-specific network interface ID

## Members

#### `public int `[`family`](#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) 

family of [sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6)

**See also**: [UNIX address families](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af)

#### `public uint8_t `[`ipv6`](#structsock__ip__ep__t_1ab8868cf7ab0dd8478b464f6ad260a8ee) 

IPv6 address mode.

only available if [SOCK_HAS_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga858ed875d71d514276bb7a30fd050d87) is defined.

#### `public uint8_t `[`ipv4`](#structsock__ip__ep__t_1aeaf0f01115440fd3565c8f7c2e304096) 

IPv4 address mode.

#### `public uint32_t `[`ipv4_u32`](#structsock__ip__ep__t_1a12825c6d9d56ae275517f27aae3acaf9) 

IPv4 address *in network byte order*

#### `public union sock_ip_ep_t::@385 `[`addr`](#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6) 

address

#### `public uint16_t `[`netif`](#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) 

stack-specific network interface ID

> Todo: port to common network interface identifiers in PR #5511.

Use [SOCK_ADDR_ANY_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca) for any interface. For reception this is the local interface the message came over, for transmission, this is the local interface the message should be send over

# struct `_sock_tl_ep` 

Common IP-based transport layer end point.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`family`](#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) | family of [sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6)
`public uint8_t `[`ipv6`](#struct__sock__tl__ep_1ac57a885cc2ffcebc1759e3ac4c60cec9) | IPv6 address mode.
`public uint8_t `[`ipv4`](#struct__sock__tl__ep_1a962ad49f2dd126b6329db542df577fa7) | IPv4 address mode.
`public uint32_t `[`ipv4_u32`](#struct__sock__tl__ep_1a4a3ba084a16d9729f04200f3e158e927) | IPv4 address *in network byte order*
`public union _sock_tl_ep::@386 `[`addr`](#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) | address
`public uint16_t `[`netif`](#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) | stack-specific network interface ID
`public uint16_t `[`port`](#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) | transport layer port (in host byte order)

## Members

#### `public int `[`family`](#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) 

family of [sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6)

**See also**: [UNIX address families](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af)

#### `public uint8_t `[`ipv6`](#struct__sock__tl__ep_1ac57a885cc2ffcebc1759e3ac4c60cec9) 

IPv6 address mode.

only available if [SOCK_HAS_IPV6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga858ed875d71d514276bb7a30fd050d87) is defined.

#### `public uint8_t `[`ipv4`](#struct__sock__tl__ep_1a962ad49f2dd126b6329db542df577fa7) 

IPv4 address mode.

#### `public uint32_t `[`ipv4_u32`](#struct__sock__tl__ep_1a4a3ba084a16d9729f04200f3e158e927) 

IPv4 address *in network byte order*

#### `public union _sock_tl_ep::@386 `[`addr`](#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) 

address

#### `public uint16_t `[`netif`](#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) 

stack-specific network interface ID

> Todo: port to common network interface identifiers in PR #5511.

Use [SOCK_ADDR_ANY_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca) for any interface. For reception this is the local interface the message came over, for transmission, this is the local interface the message should be send over

#### `public uint16_t `[`port`](#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) 

transport layer port (in host byte order)

