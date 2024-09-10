---
title: api-net_gnrc_netif_pktq.md
description: api-net_gnrc_netif_pktq.md
---
# group `net_gnrc_netif_pktq` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_netif_pktq_put`](#group__net__gnrc__netif__pktq_1gac7a1853d0677a3cea3030b9f5e52c658)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Puts a packet into the packet send queue of a network interface.
`public unsigned `[`gnrc_netif_pktq_usage`](#group__net__gnrc__netif__pktq_1ga89c3efc9422d5d3e09e3b6714d337347)`(void)`            | Returns the overall usage of the packet queue resources.
`public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_netif_pktq_get`](#group__net__gnrc__netif__pktq_1ga43e5d51151bb2431da4d6e118efc38ba)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Gets a packet from the packet send queue of a network interface.
`public void `[`gnrc_netif_pktq_sched_get`](#group__net__gnrc__netif__pktq_1ga010c345bf627a85557fe8e67ab675b28)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Schedule a dequeue notification to network interface.
`public int `[`gnrc_netif_pktq_push_back`](#group__net__gnrc__netif__pktq_1gae30712514f4dd4e68cd787d232e635d6)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Pushes a packet back to the head of the packet send queue of a network interface.
`public inline static bool `[`gnrc_netif_pktq_empty`](#group__net__gnrc__netif__pktq_1gadd2ddcfe09e247da2035dacb68f5fd08)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Check if a network interface's packet send queue is empty.
`struct `[`gnrc_netif_pktq_t`](#structgnrc__netif__pktq__t) | A packet queue for [Network interface API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif) with a de-queue timer.

## Members

#### `public int `[`gnrc_netif_pktq_put`](#group__net__gnrc__netif__pktq_1gac7a1853d0677a3cea3030b9f5e52c658)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Puts a packet into the packet send queue of a network interface.

`netif != NULL`

`pkt != NULL`

#### Parameters
* `netif` A network interface. May not be NULL. 

* `pkt` A packet. May not be NULL.

#### Returns
0 on success 

#### Returns
-1 when the pool of available gnrc_pktqueue_t entries (of size [CONFIG_GNRC_NETIF_PKTQ_POOL_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1gab1f5ec1650239c8c194a5f30492d1f6f)) is depleted

#### `public unsigned `[`gnrc_netif_pktq_usage`](#group__net__gnrc__netif__pktq_1ga89c3efc9422d5d3e09e3b6714d337347)`(void)` 

Returns the overall usage of the packet queue resources.

#### Returns
Number of gnrc_pktqueue_t entries currently in use.

#### `public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_netif_pktq_get`](#group__net__gnrc__netif__pktq_1ga43e5d51151bb2431da4d6e118efc38ba)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Gets a packet from the packet send queue of a network interface.

`netif != NULL`

#### Parameters
* `netif` A network interface. May not be NULL.

#### Returns
A packet on success 

#### Returns
NULL when the queue is empty

#### `public void `[`gnrc_netif_pktq_sched_get`](#group__net__gnrc__netif__pktq_1ga010c345bf627a85557fe8e67ab675b28)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Schedule a dequeue notification to network interface.

The notification will be scheduled in [CONFIG_GNRC_NETIF_PKTQ_TIMER_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga2770a46f626eafdcfb5fc17ac01229a9) microseconds.

`netif != NULL`

The signaling message can be used to send the next message in [gnrc_netif_pktq_t::queue](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_pktq.md#structgnrc__netif__pktq__t_1a25bcdffae89ed733f2b706dbaf465279).

#### Parameters
* `netif` A network interface. May not be NULL.

#### `public int `[`gnrc_netif_pktq_push_back`](#group__net__gnrc__netif__pktq_1gae30712514f4dd4e68cd787d232e635d6)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Pushes a packet back to the head of the packet send queue of a network interface.

`netif != NULL`

`pkt != NULL`

#### Parameters
* `netif` A network interface. May not be NULL. 

* `pkt` A packet. May not be NULL.

#### Returns
0 on success 

#### Returns
-1 when the pool of available gnrc_pktqueue_t entries (of size [CONFIG_GNRC_NETIF_PKTQ_POOL_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1gab1f5ec1650239c8c194a5f30492d1f6f)) is depleted

#### `public inline static bool `[`gnrc_netif_pktq_empty`](#group__net__gnrc__netif__pktq_1gadd2ddcfe09e247da2035dacb68f5fd08)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Check if a network interface's packet send queue is empty.

`netif != NULL`

#### Parameters
* `netif` A network interface. May not be NULL.

#### Returns
true, when the packet send queue of `netif` is empty 

#### Returns
false, otherwise

# struct `gnrc_netif_pktq_t` 

A packet queue for [Network interface API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif) with a de-queue timer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * `[`queue`](#structgnrc__netif__pktq__t_1a25bcdffae89ed733f2b706dbaf465279) | the actual packet queue class
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`dequeue_msg`](#structgnrc__netif__pktq__t_1ab629c7d8daab268fb4c90b6452591ea7) | message for [gnrc_netif_pktq_t::dequeue_timer](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_pktq.md#structgnrc__netif__pktq__t_1a67ea80e675332cba222f5d51900d0204) to send
`public `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` `[`dequeue_timer`](#structgnrc__netif__pktq__t_1a67ea80e675332cba222f5d51900d0204) | timer to schedule next sending of queued packets

## Members

#### `public `[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * `[`queue`](#structgnrc__netif__pktq__t_1a25bcdffae89ed733f2b706dbaf465279) 

the actual packet queue class

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`dequeue_msg`](#structgnrc__netif__pktq__t_1ab629c7d8daab268fb4c90b6452591ea7) 

message for [gnrc_netif_pktq_t::dequeue_timer](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_pktq.md#structgnrc__netif__pktq__t_1a67ea80e675332cba222f5d51900d0204) to send

#### `public `[`xtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gae97fc6899b411d5b69f5c57e6a81c039)` `[`dequeue_timer`](#structgnrc__netif__pktq__t_1a67ea80e675332cba222f5d51900d0204) 

timer to schedule next sending of queued packets

