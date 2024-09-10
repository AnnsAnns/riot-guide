---
title: api-pkg_lwip_sys.md
description: api-pkg_lwip_sys.md
---
# group `pkg_lwip_sys` 

System abstraction layer.

Describes compiler and processor to lwIP.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BYTE_ORDER`](#group__pkg__lwip__sys_1ga1771b7fb65ee640524d0052f229768c3)            | platform's endianness
`define `[`LWIP_COMPAT_MUTEX`](#group__pkg__lwip__sys_1ga7bada49634cd3b28b28bdcedd763a1e6)            | System configuration.
`struct `[`sys_mbox_t`](#structsys__mbox__t) | Platform specific mailbox type.

## Members

#### `define `[`BYTE_ORDER`](#group__pkg__lwip__sys_1ga1771b7fb65ee640524d0052f229768c3) 

platform's endianness

#### `define `[`LWIP_COMPAT_MUTEX`](#group__pkg__lwip__sys_1ga7bada49634cd3b28b28bdcedd763a1e6) 

System configuration.

# struct `sys_mbox_t` 

Platform specific mailbox type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structsys__mbox__t_1acfaa94fc44bd86f6c2e6eae07869f320) | RIOT mbox.
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msgs`](#structsys__mbox__t_1a042dc0ed07d0faf9779611efa927632f) | queue for the mbox

## Members

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structsys__mbox__t_1acfaa94fc44bd86f6c2e6eae07869f320) 

RIOT mbox.

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msgs`](#structsys__mbox__t_1a042dc0ed07d0faf9779611efa927632f) 

queue for the mbox

