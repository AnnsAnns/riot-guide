---
title: api-net_udp.md
description: api-net_udp.md
---
# group `net_udp` 

Provides UDP header and helper functions.

**See also**: [RFC 768 ](https://tools.ietf.org/html/rfc768)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`udp_hdr_print`](#group__net__udp_1ga99e3c19e4748fa2c8c80699b8cc13ff6)`(`[`udp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_udp.md#structudp__hdr__t)` * hdr)`            | Print the given UDP header to STDOUT.
`struct `[`udp_hdr_t`](#structudp__hdr__t) | UDP header.

## Members

#### `public void `[`udp_hdr_print`](#group__net__udp_1ga99e3c19e4748fa2c8c80699b8cc13ff6)`(`[`udp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_udp.md#structudp__hdr__t)` * hdr)` 

Print the given UDP header to STDOUT.

#### Parameters
* `hdr` UDP header to print

# struct `udp_hdr_t` 

UDP header.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`src_port`](#structudp__hdr__t_1ab27092c5b9a01a303eb3a6dc3553a493) | source port
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dst_port`](#structudp__hdr__t_1aa06d445b02995b2919b2299397679ed5) | destination port
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`length`](#structudp__hdr__t_1a70cdc3da5bfb792faec6457c25557ea3) | payload length (including the header)
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`checksum`](#structudp__hdr__t_1a666c305ad4e8bece73d378bf9d160bcc) | checksum

## Members

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`src_port`](#structudp__hdr__t_1ab27092c5b9a01a303eb3a6dc3553a493) 

source port

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dst_port`](#structudp__hdr__t_1aa06d445b02995b2919b2299397679ed5) 

destination port

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`length`](#structudp__hdr__t_1a70cdc3da5bfb792faec6457c25557ea3) 

payload length (including the header)

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`checksum`](#structudp__hdr__t_1a666c305ad4e8bece73d378bf9d160bcc) 

checksum

