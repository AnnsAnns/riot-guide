---
title: api-net_gnrc_priority_pktqueue.md
description: api-net_gnrc_priority_pktqueue.md
---
# group `net_gnrc_priority_pktqueue` 

Wrapper for priority_queue that holds gnrc_pktsnip_t*.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PRIORITY_PKTQUEUE_NODE_INIT`](#group__net__gnrc__priority__pktqueue_1gafd88514633153dca817f310761ad280d)            | Static initializer for gnrc_priority_pktqueue_node_t.
`define `[`PRIORITY_PKTQUEUE_INIT`](#group__net__gnrc__priority__pktqueue_1ga77164b079a244bb59aa67195eb265b41)            | Static initializer for gnrc_priority_pktqueue_t.
`public inline static void `[`gnrc_priority_pktqueue_node_init`](#group__net__gnrc__priority__pktqueue_1ga61707b8f2f2db475a957290ae6852fdf)`(`[`gnrc_priority_pktqueue_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga10b245cb3bd9484bc7cfa19632d9a221)` * node,uint32_t priority,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Initialize a gnrc priority packet queue node object.
`public inline static void `[`gnrc_priority_pktqueue_init`](#group__net__gnrc__priority__pktqueue_1ga89db31172ced67f3cf1c66ece7686415)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)`            | Initialize a gnrc priority packet queue object.
`public uint32_t `[`gnrc_priority_pktqueue_length`](#group__net__gnrc__priority__pktqueue_1ga201cd721fe575fba7d7a7ea4da63724f)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)`            | Get the length information of a gnrc priority packet queue object.
`public void `[`gnrc_priority_pktqueue_flush`](#group__net__gnrc__priority__pktqueue_1ga55391764c5ee23530b61a2c456c9cd22)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)`            | flush the gnrc priority packet queue
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_priority_pktqueue_pop`](#group__net__gnrc__priority__pktqueue_1gae1cf0b17ff3374967f78c30356ff8dd9)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)`            | Get first element and remove it from `queue`.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_priority_pktqueue_head`](#group__net__gnrc__priority__pktqueue_1gaf5f043b11f9ca55a004c22c1c1e9f75b)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)`            | Get first element from `queue` without removing.
`public void `[`gnrc_priority_pktqueue_push`](#group__net__gnrc__priority__pktqueue_1gae24a0964a96df99befead4ef2453a21c)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue,`[`gnrc_priority_pktqueue_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga10b245cb3bd9484bc7cfa19632d9a221)` * node)`            | add `node` into `queue` based on its priority
`struct `[`gnrc_priority_pktqueue_node`](#structgnrc__priority__pktqueue__node) | data type for gnrc priority packet queue nodes

## Members

#### `define `[`PRIORITY_PKTQUEUE_NODE_INIT`](#group__net__gnrc__priority__pktqueue_1gafd88514633153dca817f310761ad280d) 

Static initializer for gnrc_priority_pktqueue_node_t.

#### `define `[`PRIORITY_PKTQUEUE_INIT`](#group__net__gnrc__priority__pktqueue_1ga77164b079a244bb59aa67195eb265b41) 

Static initializer for gnrc_priority_pktqueue_t.

#### `public inline static void `[`gnrc_priority_pktqueue_node_init`](#group__net__gnrc__priority__pktqueue_1ga61707b8f2f2db475a957290ae6852fdf)`(`[`gnrc_priority_pktqueue_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga10b245cb3bd9484bc7cfa19632d9a221)` * node,uint32_t priority,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Initialize a gnrc priority packet queue node object.

#### Parameters
* `node` pre-allocated gnrc_priority_pktqueue_node_t object. Must not be NULL. 

* `priority` the priority of the gnrc packet snip 

* `pkt` the gnrc packet snip

#### `public inline static void `[`gnrc_priority_pktqueue_init`](#group__net__gnrc__priority__pktqueue_1ga89db31172ced67f3cf1c66ece7686415)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)` 

Initialize a gnrc priority packet queue object.

#### Parameters
* `queue` pre-allocated gnrc_priority_pktqueue_t object. Must not be NULL.

#### `public uint32_t `[`gnrc_priority_pktqueue_length`](#group__net__gnrc__priority__pktqueue_1ga201cd721fe575fba7d7a7ea4da63724f)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)` 

Get the length information of a gnrc priority packet queue object.

#### Parameters
* `queue` pre-allocated gnrc_priority_pktqueue_t object. Must not be NULL. 

#### Returns
the length of `queue`

#### `public void `[`gnrc_priority_pktqueue_flush`](#group__net__gnrc__priority__pktqueue_1ga55391764c5ee23530b61a2c456c9cd22)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)` 

flush the gnrc priority packet queue

#### Parameters
* `queue` the gnrc priority packet queue. Must not be NULL

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_priority_pktqueue_pop`](#group__net__gnrc__priority__pktqueue_1gae1cf0b17ff3374967f78c30356ff8dd9)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)` 

Get first element and remove it from `queue`.

#### Parameters
* `queue` the gnrc priority packet queue. Must not be NULL

#### Returns
the old head

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_priority_pktqueue_head`](#group__net__gnrc__priority__pktqueue_1gaf5f043b11f9ca55a004c22c1c1e9f75b)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue)` 

Get first element from `queue` without removing.

#### Parameters
* `queue` the gnrc priority packet queue. Must not be NULL

#### Returns
the head of `queue`

#### `public void `[`gnrc_priority_pktqueue_push`](#group__net__gnrc__priority__pktqueue_1gae24a0964a96df99befead4ef2453a21c)`(`[`gnrc_priority_pktqueue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga08e79516f418a5e6ab046ce61248a5e1)` * queue,`[`gnrc_priority_pktqueue_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__priority__pktqueue_1ga10b245cb3bd9484bc7cfa19632d9a221)` * node)` 

add `node` into `queue` based on its priority

#### Parameters
* `queue` the gnrc priority packet queue. Must not be NULL 

* `node` the node to add.

# struct `gnrc_priority_pktqueue_node` 

data type for gnrc priority packet queue nodes

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`gnrc_priority_pktqueue_node`](#structgnrc__priority__pktqueue__node)` * `[`next`](#structgnrc__priority__pktqueue__node_1a7d33022771cb233d22586c0110108f28) | next queue node
`public uint32_t `[`priority`](#structgnrc__priority__pktqueue__node_1a5cde4978c21dca9f40827f8268e8a99e) | queue node priority
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__priority__pktqueue__node_1a68f1d2a419c5e52f5e012537da300047) | queue node data

## Members

#### `public struct `[`gnrc_priority_pktqueue_node`](#structgnrc__priority__pktqueue__node)` * `[`next`](#structgnrc__priority__pktqueue__node_1a7d33022771cb233d22586c0110108f28) 

next queue node

#### `public uint32_t `[`priority`](#structgnrc__priority__pktqueue__node_1a5cde4978c21dca9f40827f8268e8a99e) 

queue node priority

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt`](#structgnrc__priority__pktqueue__node_1a68f1d2a419c5e52f5e012537da300047) 

queue node data

