---
title: api-net_netstats_rpl.md
description: api-net_netstats_rpl.md
---
# group `net_netstats_rpl` 

Packet statistics for RPL.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`netstats_rpl_block_t`](#structnetstats__rpl__block__t) | One block of RPL statistics.
`struct `[`netstats_rpl_t`](#structnetstats__rpl__t) | RPL statistics struct.

# struct `netstats_rpl_block_t` 

One block of RPL statistics.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`rx_ucast_count`](#structnetstats__rpl__block__t_1a835128c88e074db495c4aa9c817586ee) | unicast packets received
`public uint32_t `[`rx_ucast_bytes`](#structnetstats__rpl__block__t_1a13ac2e7e620ac980f51faf5ce56a7bc4) | unicast bytes received
`public uint32_t `[`rx_mcast_count`](#structnetstats__rpl__block__t_1a281fcb2bf29846b36ed3022910386258) | multicast packets received
`public uint32_t `[`rx_mcast_bytes`](#structnetstats__rpl__block__t_1aa0de3852ff9cefb3847c65d3bd326ce2) | multicast bytes received
`public uint32_t `[`tx_ucast_count`](#structnetstats__rpl__block__t_1adc3335ab46e4d43f4cc587d44b676557) | unicast packets sent
`public uint32_t `[`tx_ucast_bytes`](#structnetstats__rpl__block__t_1ac0d07680a1fd3987117de01f677dfd92) | unicast bytes sent
`public uint32_t `[`tx_mcast_count`](#structnetstats__rpl__block__t_1a660d2ea5ef2548fa4b3cf7cadae2ce1e) | multicast packets sent
`public uint32_t `[`tx_mcast_bytes`](#structnetstats__rpl__block__t_1ad599f6e6eec968ca63942fc76b0c8cd2) | multicast bytes sent

## Members

#### `public uint32_t `[`rx_ucast_count`](#structnetstats__rpl__block__t_1a835128c88e074db495c4aa9c817586ee) 

unicast packets received

#### `public uint32_t `[`rx_ucast_bytes`](#structnetstats__rpl__block__t_1a13ac2e7e620ac980f51faf5ce56a7bc4) 

unicast bytes received

#### `public uint32_t `[`rx_mcast_count`](#structnetstats__rpl__block__t_1a281fcb2bf29846b36ed3022910386258) 

multicast packets received

#### `public uint32_t `[`rx_mcast_bytes`](#structnetstats__rpl__block__t_1aa0de3852ff9cefb3847c65d3bd326ce2) 

multicast bytes received

#### `public uint32_t `[`tx_ucast_count`](#structnetstats__rpl__block__t_1adc3335ab46e4d43f4cc587d44b676557) 

unicast packets sent

#### `public uint32_t `[`tx_ucast_bytes`](#structnetstats__rpl__block__t_1ac0d07680a1fd3987117de01f677dfd92) 

unicast bytes sent

#### `public uint32_t `[`tx_mcast_count`](#structnetstats__rpl__block__t_1a660d2ea5ef2548fa4b3cf7cadae2ce1e) 

multicast packets sent

#### `public uint32_t `[`tx_mcast_bytes`](#structnetstats__rpl__block__t_1ad599f6e6eec968ca63942fc76b0c8cd2) 

multicast bytes sent

# struct `netstats_rpl_t` 

RPL statistics struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dio`](#structnetstats__rpl__t_1a331333e3184e0e9eff2b632037cb1768) | DIO statistics.
`public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dis`](#structnetstats__rpl__t_1a10e1609393d8dcfed150f6d59e451d31) | DIS statistics.
`public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dao`](#structnetstats__rpl__t_1afd18c8d433468b51a9caaa1f9b2c6ccb) | DAO statistics.
`public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dao_ack`](#structnetstats__rpl__t_1a753dea7fcee5972298c25075692e22f4) | DAO-ACK statistics.

## Members

#### `public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dio`](#structnetstats__rpl__t_1a331333e3184e0e9eff2b632037cb1768) 

DIO statistics.

#### `public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dis`](#structnetstats__rpl__t_1a10e1609393d8dcfed150f6d59e451d31) 

DIS statistics.

#### `public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dao`](#structnetstats__rpl__t_1afd18c8d433468b51a9caaa1f9b2c6ccb) 

DAO statistics.

#### `public `[`netstats_rpl_block_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats_rpl.md#structnetstats__rpl__block__t)` `[`dao_ack`](#structnetstats__rpl__t_1a753dea7fcee5972298c25075692e22f4) 

DAO-ACK statistics.

