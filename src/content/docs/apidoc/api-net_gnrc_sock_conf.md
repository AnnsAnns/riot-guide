---
title: api-net_gnrc_sock_conf.md
description: api-net_gnrc_sock_conf.md
---
# group `net_gnrc_sock_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_SOCK_MBOX_SIZE_EXP`](#group__net__gnrc__sock__conf_1gad7794e689129e69980c507f2d1febe1d)            | Default size for [gnrc_sock_reg_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a22b4f3045ba6f81ffb81e8de42bfcf55) (as exponent of 2^n).

## Members

#### `define `[`CONFIG_GNRC_SOCK_MBOX_SIZE_EXP`](#group__net__gnrc__sock__conf_1gad7794e689129e69980c507f2d1febe1d) 

Default size for [gnrc_sock_reg_t::mbox_queue](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a22b4f3045ba6f81ffb81e8de42bfcf55) (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option
     represents the exponent of 2^n, which will be used as the size of
     the queue.

