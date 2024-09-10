---
title: api-net_ethernet_hdr.md
description: api-net_ethernet_hdr.md
---
# group `net_ethernet_hdr` 

Ethernet header.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ETHERNET_ADDR_LEN`](#group__net__ethernet__hdr_1ga36c59bfbf9eb844eddb451378fc0552c)            | Length of an Ethernet address.
`define `[`ETH_ALEN`](#group__net__ethernet__hdr_1ga9822d89774e0d6ddaa06503950130423)            | convenient alias for [ETHERNET_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ethernet__hdr_1ga36c59bfbf9eb844eddb451378fc0552c) to comply with NIX code
`struct `[`ethernet_hdr_t`](#structethernet__hdr__t) | Ethernet header.

## Members

#### `define `[`ETHERNET_ADDR_LEN`](#group__net__ethernet__hdr_1ga36c59bfbf9eb844eddb451378fc0552c) 

Length of an Ethernet address.

#### `define `[`ETH_ALEN`](#group__net__ethernet__hdr_1ga9822d89774e0d6ddaa06503950130423) 

convenient alias for [ETHERNET_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ethernet__hdr_1ga36c59bfbf9eb844eddb451378fc0552c) to comply with NIX code

# struct `ethernet_hdr_t` 

Ethernet header.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`dst`](#structethernet__hdr__t_1ab0b043cb9be8389ab4879fc86e0dc7fb) | destination address
`public uint8_t `[`src`](#structethernet__hdr__t_1a929dd6c3c993aaaaef3cc32089500806) | source address
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`type`](#structethernet__hdr__t_1a6330e7e62f71ccf400947cf1de0ba658) | ether type (see [Ether types](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ethertype))

## Members

#### `public uint8_t `[`dst`](#structethernet__hdr__t_1ab0b043cb9be8389ab4879fc86e0dc7fb) 

destination address

#### `public uint8_t `[`src`](#structethernet__hdr__t_1a929dd6c3c993aaaaef3cc32089500806) 

source address

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`type`](#structethernet__hdr__t_1a6330e7e62f71ccf400947cf1de0ba658) 

ether type (see [Ether types](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ethertype))

