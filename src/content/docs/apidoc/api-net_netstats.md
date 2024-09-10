---
title: api-net_netstats.md
description: api-net_netstats.md
---
# group `net_netstats` 

Each module may store information about sent and received packets.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NETSTATS_NB_SIZE`](#group__net__netstats_1ga8d3b75529c8fce66120cac1a342989c0)            | The max number of entries in the peer stats table.
`define `[`NETSTATS_NB_QUEUE_SIZE`](#group__net__netstats_1gafcc7a65249a46d2f9b466ce27bce4e3d)            | The CIB size for tx correlation.
`struct `[`netstats_t`](#structnetstats__t) | Global statistics struct.
`struct `[`netstats_nb_t`](#structnetstats__nb__t) | Stats per peer struct.
`struct `[`netstats_nb_table_t`](#structnetstats__nb__table__t) | L2 Peer Info struct.

## Members

#### `define `[`NETSTATS_NB_SIZE`](#group__net__netstats_1ga8d3b75529c8fce66120cac1a342989c0) 

The max number of entries in the peer stats table.

#### `define `[`NETSTATS_NB_QUEUE_SIZE`](#group__net__netstats_1gafcc7a65249a46d2f9b466ce27bce4e3d) 

The CIB size for tx correlation.

# struct `netstats_t` 

Global statistics struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`tx_unicast_count`](#structnetstats__t_1a611836b5a64bc34640c69da24d271711) | packets sent via unicast
`public uint32_t `[`tx_mcast_count`](#structnetstats__t_1a20f57234b48e609312f691e98329e6c1) | packets sent via multicast (including broadcast)
`public uint32_t `[`tx_success`](#structnetstats__t_1afac55a6a7f27b536b6e498f756133be6) | successful sending operations (either acknowledged or unconfirmed sending operation, e.g.
`public uint32_t `[`tx_failed`](#structnetstats__t_1a57c3a4931a536300fe35449ac972ac64) | failed sending operations
`public uint32_t `[`tx_bytes`](#structnetstats__t_1a0f96b682c76cf473925e73769b7a437d) | sent bytes
`public uint32_t `[`rx_count`](#structnetstats__t_1ab716e96828e0730fa2b75689c5fd853a) | received (data) packets
`public uint32_t `[`rx_bytes`](#structnetstats__t_1a1c2ac402f5b9d5efc305df41e650ba52) | received bytes

## Members

#### `public uint32_t `[`tx_unicast_count`](#structnetstats__t_1a611836b5a64bc34640c69da24d271711) 

packets sent via unicast

#### `public uint32_t `[`tx_mcast_count`](#structnetstats__t_1a20f57234b48e609312f691e98329e6c1) 

packets sent via multicast (including broadcast)

#### `public uint32_t `[`tx_success`](#structnetstats__t_1afac55a6a7f27b536b6e498f756133be6) 

successful sending operations (either acknowledged or unconfirmed sending operation, e.g.

multicast)

#### `public uint32_t `[`tx_failed`](#structnetstats__t_1a57c3a4931a536300fe35449ac972ac64) 

failed sending operations

#### `public uint32_t `[`tx_bytes`](#structnetstats__t_1a0f96b682c76cf473925e73769b7a437d) 

sent bytes

#### `public uint32_t `[`rx_count`](#structnetstats__t_1ab716e96828e0730fa2b75689c5fd853a) 

received (data) packets

#### `public uint32_t `[`rx_bytes`](#structnetstats__t_1a1c2ac402f5b9d5efc305df41e650ba52) 

received bytes

# struct `netstats_nb_t` 

Stats per peer struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`time_tx_avg`](#structnetstats__nb__t_1a993061b455fce9c34068d9842b3a0499) | Average frame TX time in µs.
`public uint16_t `[`etx`](#structnetstats__nb__t_1a4550733d507b750f5f0f14195d849f1d) | ETX of this peer.
`public uint16_t `[`tx_count`](#structnetstats__nb__t_1a40ab400fff6fa1705def211fd4e423da) | Number of sent frames to this peer.
`public uint16_t `[`tx_fail`](#structnetstats__nb__t_1a1072ed16a408b958eec30afde965dd6c) | Number of sent frames that did not get ACKed.
`public uint16_t `[`rx_count`](#structnetstats__nb__t_1ae734a127f0f927d31338f1991aaf2eff) | Number of received frames.
`public uint16_t `[`last_updated`](#structnetstats__nb__t_1ac66610988f552536224a968f08c07d64) | seconds timestamp of last update
`public uint16_t `[`last_halved`](#structnetstats__nb__t_1a0d23d4a4e09c0daff2f22d16b432ccb3) | seconds timestamp of last halving
`public uint8_t `[`l2_addr`](#structnetstats__nb__t_1ab8ebdd6662ce4c63b2d61c85a4ec4896) | Link layer address of the neighbor.
`public uint8_t `[`l2_addr_len`](#structnetstats__nb__t_1a562d56ece09ec1cd07b719d21480af99) | Length of netstats_nb::l2_addr.
`public uint8_t `[`freshness`](#structnetstats__nb__t_1ad9b57bdd64193784e09d9e04e7d74128) | Freshness counter.
`public uint8_t `[`rssi`](#structnetstats__nb__t_1a06902376c186f8eb950f14a2676f28a5) | Average RSSI of received frames in abs([dBm])
`public uint8_t `[`lqi`](#structnetstats__nb__t_1ae184b4c869584d687b7c811219992b15) | Average LQI of received frames.

## Members

#### `public uint32_t `[`time_tx_avg`](#structnetstats__nb__t_1a993061b455fce9c34068d9842b3a0499) 

Average frame TX time in µs.

#### `public uint16_t `[`etx`](#structnetstats__nb__t_1a4550733d507b750f5f0f14195d849f1d) 

ETX of this peer.

#### `public uint16_t `[`tx_count`](#structnetstats__nb__t_1a40ab400fff6fa1705def211fd4e423da) 

Number of sent frames to this peer.

#### `public uint16_t `[`tx_fail`](#structnetstats__nb__t_1a1072ed16a408b958eec30afde965dd6c) 

Number of sent frames that did not get ACKed.

#### `public uint16_t `[`rx_count`](#structnetstats__nb__t_1ae734a127f0f927d31338f1991aaf2eff) 

Number of received frames.

#### `public uint16_t `[`last_updated`](#structnetstats__nb__t_1ac66610988f552536224a968f08c07d64) 

seconds timestamp of last update

#### `public uint16_t `[`last_halved`](#structnetstats__nb__t_1a0d23d4a4e09c0daff2f22d16b432ccb3) 

seconds timestamp of last halving

#### `public uint8_t `[`l2_addr`](#structnetstats__nb__t_1ab8ebdd6662ce4c63b2d61c85a4ec4896) 

Link layer address of the neighbor.

#### `public uint8_t `[`l2_addr_len`](#structnetstats__nb__t_1a562d56ece09ec1cd07b719d21480af99) 

Length of netstats_nb::l2_addr.

#### `public uint8_t `[`freshness`](#structnetstats__nb__t_1ad9b57bdd64193784e09d9e04e7d74128) 

Freshness counter.

#### `public uint8_t `[`rssi`](#structnetstats__nb__t_1a06902376c186f8eb950f14a2676f28a5) 

Average RSSI of received frames in abs([dBm])

#### `public uint8_t `[`lqi`](#structnetstats__nb__t_1ae184b4c869584d687b7c811219992b15) 

Average LQI of received frames.

# struct `netstats_nb_table_t` 

L2 Peer Info struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcib__t)` `[`stats_idx`](#structnetstats__nb__table__t_1a66601d6f526b72b7bdb28d6361327273) | CIB for the tx correlation.
`public `[`netstats_nb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats.md#structnetstats__nb__t)` * `[`stats_queue`](#structnetstats__nb__table__t_1a3148ed4a5f696408665723ebc2bb1c88) | send/callback mac association array
`public uint32_t `[`stats_queue_time_tx`](#structnetstats__nb__table__t_1a0a759cbc94f9437b7a4dce6be49f227f) | TX timestamp of stats_queue entries.
`public `[`netstats_nb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats.md#structnetstats__nb__t)` `[`pstats`](#structnetstats__nb__table__t_1a84d10ac2d8ce721f96e2a301046f02cf) | Per neighbor statistics array.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structnetstats__nb__table__t_1a0e54a2cd3f0432dc976aa23538b969b3) | Neighbor Table access lock.

## Members

#### `public `[`cib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcib__t)` `[`stats_idx`](#structnetstats__nb__table__t_1a66601d6f526b72b7bdb28d6361327273) 

CIB for the tx correlation.

#### `public `[`netstats_nb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats.md#structnetstats__nb__t)` * `[`stats_queue`](#structnetstats__nb__table__t_1a3148ed4a5f696408665723ebc2bb1c88) 

send/callback mac association array

#### `public uint32_t `[`stats_queue_time_tx`](#structnetstats__nb__table__t_1a0a759cbc94f9437b7a4dce6be49f227f) 

TX timestamp of stats_queue entries.

#### `public `[`netstats_nb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats.md#structnetstats__nb__t)` `[`pstats`](#structnetstats__nb__table__t_1a84d10ac2d8ce721f96e2a301046f02cf) 

Per neighbor statistics array.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structnetstats__nb__table__t_1a0e54a2cd3f0432dc976aa23538b969b3) 

Neighbor Table access lock.

