---
title: api-sys_fuzzing.md
description: api-sys_fuzzing.md
---
# group `sys_fuzzing` 

Various utilities for fuzzing network applications.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`fuzzing_init`](#group__sys__fuzzing_1gad4b1bca02ff32b22f8c8676d2238067f)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned pfx_len)`            | Initialize dummy network interface with given address.
`public int `[`fuzzing_read_packet`](#group__sys__fuzzing_1ga0d72a1d600fd91fd38957ac0d3a94b27)`(int fd,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Read a network packet from the given file descriptor.
`public uint8_t * `[`fuzzing_read_bytes`](#group__sys__fuzzing_1gae7bdaa25453f356f89e7f790358ff43d)`(int fd,size_t * size)`            | Read data from the given file descriptor.

## Members

#### `public int `[`fuzzing_init`](#group__sys__fuzzing_1gad4b1bca02ff32b22f8c8676d2238067f)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned pfx_len)` 

Initialize dummy network interface with given address.

#### Parameters
* `addr` IPv6 address to use for interface, can be NULL. 

* `pfx_len` The prefix length of `addr`, ignored if `addr` is NULL.

#### Returns
0 on success, non-zero otherwise.

#### `public int `[`fuzzing_read_packet`](#group__sys__fuzzing_1ga0d72a1d600fd91fd38957ac0d3a94b27)`(int fd,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Read a network packet from the given file descriptor.

#### Parameters
* `fd` File descriptor to read packet from. 

* `pkt` Allocated packet structure to write packet to, will be resized accordingly.

#### Returns
0 on success, non-zero otherwise.

#### `public uint8_t * `[`fuzzing_read_bytes`](#group__sys__fuzzing_1gae7bdaa25453f356f89e7f790358ff43d)`(int fd,size_t * size)` 

Read data from the given file descriptor.

#### Parameters
* `fd` File descriptor to read data from. 

* `size` Byte count of the data read.

#### Returns
pointer to the data on success, NULL otherwise.

