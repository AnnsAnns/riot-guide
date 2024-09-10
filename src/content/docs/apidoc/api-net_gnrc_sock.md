---
title: api-net_gnrc_sock.md
description: api-net_gnrc_sock.md
---
# group `net_gnrc_sock` 

Provides an implementation of the [Sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock) by the [Generic (GNRC) network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_SOCK_MBOX_SIZE`](#group__net__gnrc__sock_1gac9d559e1e804acc82d3c6fc2445b52ad)            | Size for [gnrc_sock_reg_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a22b4f3045ba6f81ffb81e8de42bfcf55).
`struct `[`gnrc_sock_reg`](#structgnrc__sock__reg) | sock [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg) info

## Members

#### `define `[`GNRC_SOCK_MBOX_SIZE`](#group__net__gnrc__sock_1gac9d559e1e804acc82d3c6fc2445b52ad) 

Size for [gnrc_sock_reg_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a22b4f3045ba6f81ffb81e8de42bfcf55).

# struct `gnrc_sock_reg` 

sock [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg) info

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` `[`entry`](#structgnrc__sock__reg_1a8d16208dcdddc30988a97cd96a024fd2) | [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg) entry for mbox
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structgnrc__sock__reg_1a936a208fd08628a446e3775288fdd4d0) | [Mailboxes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__mbox) target for the sock
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`mbox_queue`](#structgnrc__sock__reg_1a22b4f3045ba6f81ffb81e8de42bfcf55) | queue for [gnrc_sock_reg_t::mbox](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a936a208fd08628a446e3775288fdd4d0)

## Members

#### `public `[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` `[`entry`](#structgnrc__sock__reg_1a8d16208dcdddc30988a97cd96a024fd2) 

[Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg) entry for mbox

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structgnrc__sock__reg_1a936a208fd08628a446e3775288fdd4d0) 

[Mailboxes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__mbox) target for the sock

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`mbox_queue`](#structgnrc__sock__reg_1a22b4f3045ba6f81ffb81e8de42bfcf55) 

queue for [gnrc_sock_reg_t::mbox](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a936a208fd08628a446e3775288fdd4d0)

