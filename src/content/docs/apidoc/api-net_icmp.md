---
title: api-net_icmp.md
description: api-net_icmp.md
---
# group `net_icmp` 

Provides types related to ICMPv4.

**See also**: [RFC 792 ](https://tools.ietf.org/html/rfc792)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`icmp_echo_t`](#structicmp__echo__t) | Echo request and response message format.

# struct `icmp_echo_t` 

Echo request and response message format.

**See also**: [RFC 792, page 14 ](https://tools.ietf.org/html/rfc792#page-14)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`type`](#structicmp__echo__t_1a05aacbd4974dc6258dc2750e7eeac7ef) | message type
`public uint8_t `[`code`](#structicmp__echo__t_1a91a55e7f04af4ecb155d8838331dbfd9) | message code
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmp__echo__t_1a4ce4ed8f3b471dab45849512aadab096) | checksum
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`id`](#structicmp__echo__t_1aefe5ce82ab4c80e591ae3cae5c7191e8) | identifier
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`sn`](#structicmp__echo__t_1aaf41b3d30e04430692b8c5f5196cccaf) | sequence number

## Members

#### `public uint8_t `[`type`](#structicmp__echo__t_1a05aacbd4974dc6258dc2750e7eeac7ef) 

message type

#### `public uint8_t `[`code`](#structicmp__echo__t_1a91a55e7f04af4ecb155d8838331dbfd9) 

message code

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`csum`](#structicmp__echo__t_1a4ce4ed8f3b471dab45849512aadab096) 

checksum

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`id`](#structicmp__echo__t_1aefe5ce82ab4c80e591ae3cae5c7191e8) 

identifier

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`sn`](#structicmp__echo__t_1aaf41b3d30e04430692b8c5f5196cccaf) 

sequence number

