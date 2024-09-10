---
title: api-net_packet.md
description: api-net_packet.md
---
# group `net_packet` 

Packet address family definitions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`sockaddr_ll`](#structsockaddr__ll) | Link-Layer socket descriptor.

# struct `sockaddr_ll` 

Link-Layer socket descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned short `[`sll_family`](#structsockaddr__ll_1a3ef0dd9816198c7a793f9b183165eb71) | Always AF_PACKET.
`public unsigned short `[`sll_protocol`](#structsockaddr__ll_1aaeba7e5e2d780fa64efcf457827774b6) | Physical-layer protocol.
`public int `[`sll_ifindex`](#structsockaddr__ll_1a93b4976ed8e9d58cdcc620f5d1987f68) | Interface number.
`public unsigned short `[`sll_hatype`](#structsockaddr__ll_1a77ee1a8b9f202084320a4d578eff40ba) | ARP hardware type.
`public unsigned char `[`sll_pkttype`](#structsockaddr__ll_1a45ca9c4b438b9dc812723b786f09d269) | Packet type.
`public unsigned char `[`sll_halen`](#structsockaddr__ll_1a5761c9cf1bc8ac561911c180e05ed405) | Length of address.
`public unsigned char `[`sll_addr`](#structsockaddr__ll_1a1ea2f1bc3ca923ee475495248ab567b7) | Physical-layer address.

## Members

#### `public unsigned short `[`sll_family`](#structsockaddr__ll_1a3ef0dd9816198c7a793f9b183165eb71) 

Always AF_PACKET.

#### `public unsigned short `[`sll_protocol`](#structsockaddr__ll_1aaeba7e5e2d780fa64efcf457827774b6) 

Physical-layer protocol.

#### `public int `[`sll_ifindex`](#structsockaddr__ll_1a93b4976ed8e9d58cdcc620f5d1987f68) 

Interface number.

#### `public unsigned short `[`sll_hatype`](#structsockaddr__ll_1a77ee1a8b9f202084320a4d578eff40ba) 

ARP hardware type.

#### `public unsigned char `[`sll_pkttype`](#structsockaddr__ll_1a45ca9c4b438b9dc812723b786f09d269) 

Packet type.

#### `public unsigned char `[`sll_halen`](#structsockaddr__ll_1a5761c9cf1bc8ac561911c180e05ed405) 

Length of address.

#### `public unsigned char `[`sll_addr`](#structsockaddr__ll_1a1ea2f1bc3ca923ee475495248ab567b7) 

Physical-layer address.

