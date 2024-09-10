---
title: api-net_gnrc_ipv6_ext_conf.md
description: api-net_gnrc_ipv6_ext_conf.md
---
# group `net_gnrc_ipv6_ext_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_IPV6_EXT_FRAG_SEND_SIZE`](#group__net__gnrc__ipv6__ext__conf_1ga4baf089f22169a6b5baf14f961150de6)            | IPv6 fragmentation send buffer size.
`define `[`CONFIG_GNRC_IPV6_EXT_FRAG_RBUF_SIZE`](#group__net__gnrc__ipv6__ext__conf_1ga83d7535883c7f5d3416fd71235cb1b6d)            | IPv6 fragmentation reassembly buffer size.
`define `[`CONFIG_GNRC_IPV6_EXT_FRAG_LIMITS_POOL_SIZE`](#group__net__gnrc__ipv6__ext__conf_1ga26a288cceb66aa67e70fdce6b0978b9d)            | The number of total allocatable [gnrc_ipv6_ext_frag_limits_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__frag_1gaa89fea91059160f6b23bc34f73b62bc2) objects.
`define `[`CONFIG_GNRC_IPV6_EXT_FRAG_RBUF_TIMEOUT_US`](#group__net__gnrc__ipv6__ext__conf_1ga153fd0e9d40180013c2bc4ee39fbf89f)            | Timeout for IPv6 fragmentation reassembly buffer entries in microseconds.
`define `[`CONFIG_GNRC_IPV6_EXT_FRAG_RBUF_DO_NOT_OVERRIDE`](#group__net__gnrc__ipv6__ext__conf_1ga07cfdcfe715f5fa9252172b74307555a)            | Do not override oldest datagram when reassembly buffer is full.

## Members

#### `define `[`CONFIG_GNRC_IPV6_EXT_FRAG_SEND_SIZE`](#group__net__gnrc__ipv6__ext__conf_1ga4baf089f22169a6b5baf14f961150de6) 

IPv6 fragmentation send buffer size.

This limits the total amount of datagrams that can be fragmented at the same time.

Only applicable with [gnrc_ipv6_ext_frag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__frag) module

#### `define `[`CONFIG_GNRC_IPV6_EXT_FRAG_RBUF_SIZE`](#group__net__gnrc__ipv6__ext__conf_1ga83d7535883c7f5d3416fd71235cb1b6d) 

IPv6 fragmentation reassembly buffer size.

This limits the total amount of datagrams that can be reassembled at the same time.

Only applicable with [gnrc_ipv6_ext_frag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__frag) module

#### `define `[`CONFIG_GNRC_IPV6_EXT_FRAG_LIMITS_POOL_SIZE`](#group__net__gnrc__ipv6__ext__conf_1ga26a288cceb66aa67e70fdce6b0978b9d) 

The number of total allocatable [gnrc_ipv6_ext_frag_limits_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__frag_1gaa89fea91059160f6b23bc34f73b62bc2) objects.

This is the maximum number of receivable fragments, shared between all fragmented datagrams

Only applicable with [gnrc_ipv6_ext_frag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__frag) module

#### `define `[`CONFIG_GNRC_IPV6_EXT_FRAG_RBUF_TIMEOUT_US`](#group__net__gnrc__ipv6__ext__conf_1ga153fd0e9d40180013c2bc4ee39fbf89f) 

Timeout for IPv6 fragmentation reassembly buffer entries in microseconds.

Only applicable with [gnrc_ipv6_ext_frag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__frag) module

#### `define `[`CONFIG_GNRC_IPV6_EXT_FRAG_RBUF_DO_NOT_OVERRIDE`](#group__net__gnrc__ipv6__ext__conf_1ga07cfdcfe715f5fa9252172b74307555a) 

Do not override oldest datagram when reassembly buffer is full.

Only applicable with [gnrc_ipv6_ext_frag](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__ext__frag) module

When not set, it will cause the reassembly buffer to override the oldest entry when a fragment for a new datagram is received. When set to 1, no entry will be overwritten (they will still timeout normally)

