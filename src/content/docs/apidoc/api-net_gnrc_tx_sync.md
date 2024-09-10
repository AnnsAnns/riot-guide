---
title: api-net_gnrc_tx_sync.md
description: api-net_gnrc_tx_sync.md
---
# group `net_gnrc_tx_sync` 

This allows upper layers to wait for a transmission to complete (or fail) and for passing up data about the transmission.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static `[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` `[`gnrc_tx_sync_init`](#group__net__gnrc__tx__sync_1ga10327f178cddf675110d408e1cee72e8)`(void)`            | Helper to initialize a [gnrc_tx_sync_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t) structure.
`public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_tx_sync_build`](#group__net__gnrc__tx__sync_1ga3a2360ec0bf5ac9daf8ea6d534a41c74)`(`[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` * tx_sync)`            | Build a TX sync snip.
`public inline static int `[`gnrc_tx_sync_append`](#group__net__gnrc__tx__sync_1ga63f7489149e65b4bcce3f512b9e32cfb)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` * tx_sync)`            | Appends a newly allocated tx sync pktsnip to the end of the packet.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_tx_sync_split`](#group__net__gnrc__tx__sync_1ga8e0ebb58b1c200081dc98a027dbaf399)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Split off the TX sync snip and return it.
`public inline static void `[`gnrc_tx_complete`](#group__net__gnrc__tx__sync_1ga4aedc2d124a2c0ef61c493fdb88e2e2d)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Signal TX completion via the given tx sync packet snip.
`public inline static void `[`gnrc_tx_sync`](#group__net__gnrc__tx__sync_1gabeab27caa173670eafde328d96f5f943)`(`[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` * sync)`            | Block until transmission of the corresponding packet has completed or failed.
`struct `[`gnrc_tx_sync_t`](#structgnrc__tx__sync__t) | TX synchronization data.

## Members

#### `public inline static `[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` `[`gnrc_tx_sync_init`](#group__net__gnrc__tx__sync_1ga10327f178cddf675110d408e1cee72e8)`(void)` 

Helper to initialize a [gnrc_tx_sync_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t) structure.

#### `public inline static `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_tx_sync_build`](#group__net__gnrc__tx__sync_1ga3a2360ec0bf5ac9daf8ea6d534a41c74)`(`[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` * tx_sync)` 

Build a TX sync snip.

#### Parameters
* `tx_sync` TX sync structure the snip should hold

#### Returns
The TX sync snip holing `tx_sync`

#### Parameters
* `NULL` Allocation Failed

No need to initialize `tx_sync`, this function will do it for you.

#### `public inline static int `[`gnrc_tx_sync_append`](#group__net__gnrc__tx__sync_1ga63f7489149e65b4bcce3f512b9e32cfb)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,`[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` * tx_sync)` 

Appends a newly allocated tx sync pktsnip to the end of the packet.

#### Parameters
* `pkt` Packet to append TX sync pktsnip to 

* `tx_sync` TX sync structure to initialize and append

#### Parameters
* `0` Success 

* `-ENOMEM` Allocation failed

No need to initialize `tx_sync`, this function will do it for you.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_tx_sync_split`](#group__net__gnrc__tx__sync_1ga8e0ebb58b1c200081dc98a027dbaf399)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Split off the TX sync snip and return it.

#### Parameters
* `pkt` Packet to split off the TX sync snip 

#### Returns
The TX sync snip that no longer is part of `pkt`

#### Parameters
* `NULL` `pkt` contains no TX sync snip

#### `public inline static void `[`gnrc_tx_complete`](#group__net__gnrc__tx__sync_1ga4aedc2d124a2c0ef61c493fdb88e2e2d)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Signal TX completion via the given tx sync packet snip.

#### Parameters
* `pkt` The tx sync packet snip of the packet that was transmitted

Module gnrc_netttype_tx_sync is sued 

`pkt->type == GNRC_NETTYPE_TX_SYNC`

#### `public inline static void `[`gnrc_tx_sync`](#group__net__gnrc__tx__sync_1gabeab27caa173670eafde328d96f5f943)`(`[`gnrc_tx_sync_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tx_sync.md#structgnrc__tx__sync__t)` * sync)` 

Block until transmission of the corresponding packet has completed or failed.

#### Parameters
* `sync` TX sync structure used for synchronization

`sync` has been added to the packet to synchronize with, e.g. via [gnrc_tx_sync_append](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tx__sync_1ga63f7489149e65b4bcce3f512b9e32cfb)

The packet linked to `sync` has been passed to the network stack for transmission. Otherwise this will block forever.

If the transmission has already completed, this function will not block and return immediately instead.

# struct `gnrc_tx_sync_t` 

TX synchronization data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`signal`](#structgnrc__tx__sync__t_1a06e5a2d857131269c6ca9deb62ee889b) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) used for synchronization.

## Members

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`signal`](#structgnrc__tx__sync__t_1a06e5a2d857131269c6ca9deb62ee889b) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) used for synchronization.

