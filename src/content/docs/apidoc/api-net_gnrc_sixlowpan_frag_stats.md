---
title: api-net_gnrc_sixlowpan_frag_stats.md
description: api-net_gnrc_sixlowpan_frag_stats.md
---
# group `net_gnrc_sixlowpan_frag_stats` 

Counter for certain 6LoWPAN fragmentation and reassembly events.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_sixlowpan_frag_stats_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_stats.md#structgnrc__sixlowpan__frag__stats__t)` * `[`gnrc_sixlowpan_frag_stats_get`](#group__net__gnrc__sixlowpan__frag__stats_1ga7cadf345f9500b7f11166c4d629175b7)`(void)`            | Get the current statistics on fragmentation and reassembly.
`struct `[`gnrc_sixlowpan_frag_stats_t`](#structgnrc__sixlowpan__frag__stats__t) | Statistics on fragmentation and reassembly.

## Members

#### `public `[`gnrc_sixlowpan_frag_stats_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_stats.md#structgnrc__sixlowpan__frag__stats__t)` * `[`gnrc_sixlowpan_frag_stats_get`](#group__net__gnrc__sixlowpan__frag__stats_1ga7cadf345f9500b7f11166c4d629175b7)`(void)` 

Get the current statistics on fragmentation and reassembly.

#### Returns
The current statistics on fragmentation and reassembly

# struct `gnrc_sixlowpan_frag_stats_t` 

Statistics on fragmentation and reassembly.

Only available with the `gnrc_sixlowpan_frag_stats` module

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`rbuf_full`](#structgnrc__sixlowpan__frag__stats__t_1a3058296f23eecfb2d7bbb11353beddce) | counts the number of events where the reassembly buffer is full
`public unsigned `[`frag_full`](#structgnrc__sixlowpan__frag__stats__t_1a56a93707c925eeda50b5326a0e3787ab) | counts the number of events that there where no [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) available
`public unsigned `[`datagrams`](#structgnrc__sixlowpan__frag__stats__t_1a1a8068d4ac2e515e6eacd59f6b017878) | reassembled datagrams
`public unsigned `[`fragments`](#structgnrc__sixlowpan__frag__stats__t_1a634d7dcfeec26adc592226f9175f7734) | total fragments of reassembled fragments
`public unsigned `[`vrb_full`](#structgnrc__sixlowpan__frag__stats__t_1a939f3dcf10f3f279d9c07457aaf702ff) | counts the number of events where the virtual reassembly buffer is full

## Members

#### `public unsigned `[`rbuf_full`](#structgnrc__sixlowpan__frag__stats__t_1a3058296f23eecfb2d7bbb11353beddce) 

counts the number of events where the reassembly buffer is full

#### `public unsigned `[`frag_full`](#structgnrc__sixlowpan__frag__stats__t_1a56a93707c925eeda50b5326a0e3787ab) 

counts the number of events that there where no [gnrc_sixlowpan_frag_fb_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t) available

#### `public unsigned `[`datagrams`](#structgnrc__sixlowpan__frag__stats__t_1a1a8068d4ac2e515e6eacd59f6b017878) 

reassembled datagrams

#### `public unsigned `[`fragments`](#structgnrc__sixlowpan__frag__stats__t_1a634d7dcfeec26adc592226f9175f7734) 

total fragments of reassembled fragments

#### `public unsigned `[`vrb_full`](#structgnrc__sixlowpan__frag__stats__t_1a939f3dcf10f3f279d9c07457aaf702ff) 

counts the number of events where the virtual reassembly buffer is full

