---
title: api-net_gnrc_netif_dedup.md
description: api-net_gnrc_netif_dedup.md
---
# group `net_gnrc_netif_dedup` 

Deduplicates broadcast link-layer packets best-effort style.

To activate, use `USEMODULE += gnrc_netif_dedup` in your applications Makefile. Also make sure the link-layer you use supports the module. Currently supported are

* IEEE 802.15.4

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`gnrc_netif_dedup_t`](#structgnrc__netif__dedup__t) | Structure to store information on the last broadcast packet received.

# struct `gnrc_netif_dedup_t` 

Structure to store information on the last broadcast packet received.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`src`](#structgnrc__netif__dedup__t_1a17111e414a6c4f6a0a1d788ca29c7570) | link-layer source address
`public uint16_t `[`seq`](#structgnrc__netif__dedup__t_1a0704aadf5e9579a6fc97cefad53e8f8e) | link-layer sequence number
`public uint8_t `[`src_len`](#structgnrc__netif__dedup__t_1a932a2c3e1e5b7477f576258e434c30c0) | length of [gnrc_netif_dedup_t](#structgnrc__netif__dedup__t):src

## Members

#### `public uint8_t `[`src`](#structgnrc__netif__dedup__t_1a17111e414a6c4f6a0a1d788ca29c7570) 

link-layer source address

#### `public uint16_t `[`seq`](#structgnrc__netif__dedup__t_1a0704aadf5e9579a6fc97cefad53e8f8e) 

link-layer sequence number

#### `public uint8_t `[`src_len`](#structgnrc__netif__dedup__t_1a932a2c3e1e5b7477f576258e434c30c0) 

length of [gnrc_netif_dedup_t](#structgnrc__netif__dedup__t):src

