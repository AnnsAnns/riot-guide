---
title: api-pkg_openwsn_sock.md
description: api-pkg_openwsn_sock.md
---
# group `pkg_openwsn_sock` 

Provides an implementation of the [Sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock) by the [OpenWSN network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__openwsn).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_OPENWSN_SOCK_MBOX_SIZE_EXP`](#group__pkg__openwsn__sock_1gad72dfd81c9bf37a8a6a7c4dc2f6d799c)            | Default size for OpenWSN [sock_udp_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__udp_1ae64dfca6904ef539f0bc04e3cafd702d) (as exponent of 2^n).
`define `[`OPENWSN_SOCK_MBOX_SIZE`](#group__pkg__openwsn__sock_1ga8201e0308aed73bcaec010ad147b21de)            | Size for OpenWSN [sock_udp_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__udp_1ae64dfca6904ef539f0bc04e3cafd702d).
`struct `[`openwsn_gen_sock`](#structopenwsn__gen__sock) | Generic openwsn sock type.

## Members

#### `define `[`CONFIG_OPENWSN_SOCK_MBOX_SIZE_EXP`](#group__pkg__openwsn__sock_1gad72dfd81c9bf37a8a6a7c4dc2f6d799c) 

Default size for OpenWSN [sock_udp_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__udp_1ae64dfca6904ef539f0bc04e3cafd702d) (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option
     represents the exponent of 2^n, which will be used as the size of
     the queue.

#### `define `[`OPENWSN_SOCK_MBOX_SIZE`](#group__pkg__openwsn__sock_1ga8201e0308aed73bcaec010ad147b21de) 

Size for OpenWSN [sock_udp_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__udp_1ae64dfca6904ef539f0bc04e3cafd702d).

# struct `openwsn_gen_sock` 

Generic openwsn sock type.

For network stack internal purposes only. Do not access members externally.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structopenwsn__gen__sock_1a60e89cdb1875721faaf4b50057863bc5) | local end-point
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structopenwsn__gen__sock_1a91a673558a526a52183101124b0fd4be) | remote end-point
`public uint16_t `[`flags`](#structopenwsn__gen__sock_1ad60a827b96f1bbcde87ee3926c6f49ad) | option flags

## Members

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structopenwsn__gen__sock_1a60e89cdb1875721faaf4b50057863bc5) 

local end-point

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structopenwsn__gen__sock_1a91a673558a526a52183101124b0fd4be) 

remote end-point

#### `public uint16_t `[`flags`](#structopenwsn__gen__sock_1ad60a827b96f1bbcde87ee3926c6f49ad) 

option flags

