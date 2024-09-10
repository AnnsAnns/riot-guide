---
title: api-pkg_libschc_config.md
description: api-pkg_libschc_config.md
---
# group `pkg_libschc_config` 

Compile-time configuration for libSCHC.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_LIBSCHC_STATIC_MEMBUF_LEN`](#group__pkg__libschc__config_1ga8d2f3eff882c5bdc14250115344ecd6e)            | Static memory buffer length.
`define `[`CONFIG_LIBSCHC_MBUF_POOL_SIZE`](#group__pkg__libschc__config_1gac9bc8380793da24fbb9735a47d030fa2)            | Maximum number of mbuf pool entries.
`define `[`CONFIG_LIBSCHC_MAX_RX_CONNS`](#group__pkg__libschc__config_1gae12ca3964b79eec85bcab5de266b0ac8)            | Maximum number of incoming connections.
`define `[`CONFIG_LIBSCHC_MAX_MTU_LEN`](#group__pkg__libschc__config_1ga909916586e52ae84b9e2a92e536c6d7d)            | Maximum transfer unit of the underlying technology.
`define `[`CONFIG_LIBSCHC_DEBUG`](#group__pkg__libschc__config_1ga45b83906f5cbd6ec20c90dad107d0cc8)            | Enable debug output.

## Members

#### `define `[`CONFIG_LIBSCHC_STATIC_MEMBUF_LEN`](#group__pkg__libschc__config_1ga8d2f3eff882c5bdc14250115344ecd6e) 

Static memory buffer length.

Length of the static memory buffer for fragmentation in bytes.

#### `define `[`CONFIG_LIBSCHC_MBUF_POOL_SIZE`](#group__pkg__libschc__config_1gac9bc8380793da24fbb9735a47d030fa2) 

Maximum number of mbuf pool entries.

Maximum number of entries in the mbuf used for fragment reassembly.

#### `define `[`CONFIG_LIBSCHC_MAX_RX_CONNS`](#group__pkg__libschc__config_1gae12ca3964b79eec85bcab5de266b0ac8) 

Maximum number of incoming connections.

#### `define `[`CONFIG_LIBSCHC_MAX_MTU_LEN`](#group__pkg__libschc__config_1ga909916586e52ae84b9e2a92e536c6d7d) 

Maximum transfer unit of the underlying technology.

#### `define `[`CONFIG_LIBSCHC_DEBUG`](#group__pkg__libschc__config_1ga45b83906f5cbd6ec20c90dad107d0cc8) 

Enable debug output.

