---
title: api-net_gnrc_pktqueue.md
description: api-net_gnrc_pktqueue.md
---
# group `net_gnrc_pktqueue` 

[gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63) queue

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`gnrc_pktqueue_add`](#group__net__gnrc__pktqueue_1ga084afe737f9d3528617757b3593585df)`(`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` ** queue,`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * node)`            | add `node` into `queue`.
`public inline static `[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * `[`gnrc_pktqueue_remove`](#group__net__gnrc__pktqueue_1gab4b2c4cb2ff85bed72fc5b32ab479cba)`(`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` ** queue,`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * node)`            | remove `node` from `queue`
`public inline static `[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * `[`gnrc_pktqueue_remove_head`](#group__net__gnrc__pktqueue_1ga80f8a0d877b285e356f9291e15236620)`(`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` ** queue)`            | remove the packet queue's head
`struct `[`gnrc_pktqueue`](#structgnrc__pktqueue) | data type for packet queue nodes

## Members

#### `public inline static void `[`gnrc_pktqueue_add`](#group__net__gnrc__pktqueue_1ga084afe737f9d3528617757b3593585df)`(`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` ** queue,`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * node)` 

add `node` into `queue`.

#### Parameters
* `queue` the queue. Must not be NULL 

* `node` the node to add.

#### `public inline static `[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * `[`gnrc_pktqueue_remove`](#group__net__gnrc__pktqueue_1gab4b2c4cb2ff85bed72fc5b32ab479cba)`(`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` ** queue,`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * node)` 

remove `node` from `queue`

#### Parameters
* `queue` the queue. Must not be NULL 

* `node` the node to remove

#### Returns
`node`.

#### `public inline static `[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` * `[`gnrc_pktqueue_remove_head`](#group__net__gnrc__pktqueue_1ga80f8a0d877b285e356f9291e15236620)`(`[`gnrc_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktqueue_1gaf75581b791ff6b356cd8309cefe42941)` ** queue)` 

remove the packet queue's head

#### Parameters
* `queue` the queue. Must not be NULL

#### Returns
the old head

# struct `gnrc_pktqueue` 

data type for packet queue nodes

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`gnrc_pktqueue`](#structgnrc__pktqueue)` * `[`next`](#structgnrc__pktqueue_1a010d7d50c27e79ab64208c48e5a1dc12) | next node in queue
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__pktqueue_1aca2f7b69bf37ceb16d0d1b31c65201a3) | pointer to the packet

## Members

#### `public struct `[`gnrc_pktqueue`](#structgnrc__pktqueue)` * `[`next`](#structgnrc__pktqueue_1a010d7d50c27e79ab64208c48e5a1dc12) 

next node in queue

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__pktqueue_1aca2f7b69bf37ceb16d0d1b31c65201a3) 

pointer to the packet

