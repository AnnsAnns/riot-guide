---
title: api-net_tcp.md
description: api-net_tcp.md
---
# group `net_tcp` 

Provides TCP header and helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`tcp_hdr_print`](#group__net__tcp_1ga9f165620e6124a2d62695634c7b9c952)`(`[`tcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_tcp.md#structtcp__hdr__t)` * hdr)`            | Print the given TCP header to STDOUT.
`struct `[`tcp_hdr_t`](#structtcp__hdr__t) | TCP header definition.
`struct `[`tcp_hdr_opt_t`](#structtcp__hdr__opt__t) | TCP option field helper structure.

## Members

#### `public void `[`tcp_hdr_print`](#group__net__tcp_1ga9f165620e6124a2d62695634c7b9c952)`(`[`tcp_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_tcp.md#structtcp__hdr__t)` * hdr)` 

Print the given TCP header to STDOUT.

#### Parameters
* `hdr` TCP header to print

# struct `tcp_hdr_t` 

TCP header definition.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`src_port`](#structtcp__hdr__t_1a1e99d45ad70feddc246c050153ed4993) | Source port, in network byte order.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dst_port`](#structtcp__hdr__t_1a194b47de87d946a88a60b732953efba4) | Destination port, in network byte order.
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seq_num`](#structtcp__hdr__t_1a4ebb75598d74cd943c1a0d9596e97e13) | Sequence number, in network byte order.
`public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ack_num`](#structtcp__hdr__t_1a229b9100a4c5f5b720a6c2acd6b028f3) | Acknowledgement number, in network byte order.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`off_ctl`](#structtcp__hdr__t_1aed9f4fce56e56adde8ecff1d8a74742a) | Data Offset and control Bits in network byte order.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`window`](#structtcp__hdr__t_1a6afea79512fcc1c947fb04ec486fefaf) | Window, in network byte order.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`checksum`](#structtcp__hdr__t_1ab04fdac437bf0d696bdd5d152b7e1f95) | Checksum, in network byte order.
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`urgent_ptr`](#structtcp__hdr__t_1a303beed9477f4a3666341470aaa172ed) | Urgent pointer, in network byte order.

## Members

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`src_port`](#structtcp__hdr__t_1a1e99d45ad70feddc246c050153ed4993) 

Source port, in network byte order.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`dst_port`](#structtcp__hdr__t_1a194b47de87d946a88a60b732953efba4) 

Destination port, in network byte order.

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`seq_num`](#structtcp__hdr__t_1a4ebb75598d74cd943c1a0d9596e97e13) 

Sequence number, in network byte order.

#### `public `[`network_uint32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a041efbda03b04a2f6866cf12dde1efea)` `[`ack_num`](#structtcp__hdr__t_1a229b9100a4c5f5b720a6c2acd6b028f3) 

Acknowledgement number, in network byte order.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`off_ctl`](#structtcp__hdr__t_1aed9f4fce56e56adde8ecff1d8a74742a) 

Data Offset and control Bits in network byte order.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`window`](#structtcp__hdr__t_1a6afea79512fcc1c947fb04ec486fefaf) 

Window, in network byte order.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`checksum`](#structtcp__hdr__t_1ab04fdac437bf0d696bdd5d152b7e1f95) 

Checksum, in network byte order.

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`urgent_ptr`](#structtcp__hdr__t_1a303beed9477f4a3666341470aaa172ed) 

Urgent pointer, in network byte order.

# struct `tcp_hdr_opt_t` 

TCP option field helper structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`kind`](#structtcp__hdr__opt__t_1a9d18011c3c2f07bb5dd07bf88d9652c9) | TCP options "Kind" field.
`public uint8_t `[`length`](#structtcp__hdr__opt__t_1af8148a2f533b5f145a336aa6ccdeabac) | TCP options "Length" field.
`public uint8_t `[`value`](#structtcp__hdr__opt__t_1a836f642f3ecfc5b9032ed616fd104644) | TCP options "Value" field.

## Members

#### `public uint8_t `[`kind`](#structtcp__hdr__opt__t_1a9d18011c3c2f07bb5dd07bf88d9652c9) 

TCP options "Kind" field.

#### `public uint8_t `[`length`](#structtcp__hdr__opt__t_1af8148a2f533b5f145a336aa6ccdeabac) 

TCP options "Length" field.

#### `public uint8_t `[`value`](#structtcp__hdr__opt__t_1a836f642f3ecfc5b9032ed616fd104644) 

TCP options "Value" field.

