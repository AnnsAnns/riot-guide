---
title: api-net_gnrc_sixlowpan_frag_hint.md
description: api-net_gnrc_sixlowpan_frag_hint.md
---
# group `net_gnrc_sixlowpan_frag_hint` 

Provides a hint for smaller fragment sizes than the link-layer PDU for the next fragment to sent.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`gnrc_sixlowpan_frag_hint_t`](#structgnrc__sixlowpan__frag__hint__t) | A fragment size hint.

# struct `gnrc_sixlowpan_frag_hint_t` 

A fragment size hint.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`fragsz`](#structgnrc__sixlowpan__frag__hint__t_1a298f928acf7fb9b48c3007a32a94dbcc) | Provides a hint of the size for the next fragment to send.
`public uint16_t `[`fragsz_uncomp`](#structgnrc__sixlowpan__frag__hint__t_1a9c7e33873d0e587d53726b30d7b86897) | The size of the data bound by [gnrc_sixlowpan_frag_hint_t::fragsz](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_hint.md#structgnrc__sixlowpan__frag__hint__t_1a298f928acf7fb9b48c3007a32a94dbcc) uncompressed.

## Members

#### `public uint16_t `[`fragsz`](#structgnrc__sixlowpan__frag__hint__t_1a298f928acf7fb9b48c3007a32a94dbcc) 

Provides a hint of the size for the next fragment to send.

Set to 0 for fitting to the maximum fragment size of the interface the datagram is sent over.

**See also**: [gnrc_netif_6lo_t::max_frag_size](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__6lo__t_1a7332ee6acb8fdec1f0360cff153a9ca2)

#### `public uint16_t `[`fragsz_uncomp`](#structgnrc__sixlowpan__frag__hint__t_1a9c7e33873d0e587d53726b30d7b86897) 

The size of the data bound by [gnrc_sixlowpan_frag_hint_t::fragsz](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_hint.md#structgnrc__sixlowpan__frag__hint__t_1a298f928acf7fb9b48c3007a32a94dbcc) uncompressed.

This is only evaluated when [gnrc_sixlowpan_frag_hint_t::fragsz](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_hint.md#structgnrc__sixlowpan__frag__hint__t_1a298f928acf7fb9b48c3007a32a94dbcc) is greater than 0. Required to calculate the proper offset for the next fragment.

