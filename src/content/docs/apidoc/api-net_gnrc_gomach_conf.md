---
title: api-net_gnrc_gomach_conf.md
description: api-net_gnrc_gomach_conf.md
---
# group `net_gnrc_gomach_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_GOMACH_CP_DURATION_US`](#group__net__gnrc__gomach__conf_1ga153710ae3f4cd82fea1f93d08821ed8d)            | The default duration of GoMacH's wake-up period (WP).
`define `[`CONFIG_GNRC_GOMACH_SUPERFRAME_DURATION_US`](#group__net__gnrc__gomach__conf_1ga24e428e118924806469fc2e9725ed0c1)            | GoMacH's superframe duration, i.e., time between two consecutive wake-ups.
`define `[`CONFIG_GNRC_GOMACH_CP_RANDOM_END_US`](#group__net__gnrc__gomach__conf_1gab8ef5fcbbb00a5f80cefe6190259c11f)            | The maximum duration of the random period at the end of GoMacH's wake-up period (WP).
`define `[`GNRC_GOMACH_CP_DURATION_MAX_US`](#group__net__gnrc__gomach__conf_1ga0e3e27ed7963ee69418dabeaa651b88a)            | The maximum duration of GoMacH's wake-up period (WP).
`define `[`GNRC_GOMACH_WAIT_BEACON_TIME_US`](#group__net__gnrc__gomach__conf_1gab3cdaaf070dfac055fd235d77d9cf6e2)            | The maximum time for waiting the receiver's beacon in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_CP_MIN_GAP_US`](#group__net__gnrc__gomach__conf_1ga15d666b25f2bf8d7ebf3263bf9fbc95a)            | The minimum gap between neighbor nodes' wake-up phases in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_WAIT_RX_END_US`](#group__net__gnrc__gomach__conf_1gadbdacb74ed8ee6b8e9f6c9de7471510a)            | Timeout duration for waiting [NETDEV_EVENT_RX_COMPLETE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba4cd3a85ba967f4d91beccf6afc76af00) in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_NO_TX_ISR_US`](#group__net__gnrc__gomach__conf_1gac16c1ba7d965f00c1907a110e957b072)            | Timeout duration for confirming TX-No-ISR event in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_MAX_PREAM_INTERVAL_US`](#group__net__gnrc__gomach__conf_1gadad11d399f9ad4d7181c5cb20827fc8a)            | Maximum time interval between two consecutive preamble packets in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_PREAMBLE_INTERVAL_US`](#group__net__gnrc__gomach__conf_1ga3682cbfbee699d39bc67861f8ba6edb6)            | Time interval between two consecutive preamble packets in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_BCAST_INTERVAL_US`](#group__net__gnrc__gomach__conf_1ga32ac4cc7bf30757e177e7fafecd3136f)            | Time interval between two consecutive broadcast packets in GoMacH.
`define `[`GNRC_GOMACH_PREAMBLE_DURATION_US`](#group__net__gnrc__gomach__conf_1gafb601d63ff933b815d8c55bf859d569a)            | The Maximum preamble duration time of GoMacH.
`define `[`CONFIG_GNRC_GOMACH_VTDMA_SLOT_SIZE_US`](#group__net__gnrc__gomach__conf_1ga818a57796a3df2ea72d137a65d974ef7)            | The transmission slot size in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_TX_BUSY_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga0f38cee97a2b897187ec55a2c900e164)            | Maximum times of CSMA TX attempts under busy-indication in the WP period of the receiver.
`define `[`CONFIG_GNRC_GOMACH_CP_EXTEND_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga16597de28e8e567dc75e06e305f4ee88)            | Maximum WP period extension number in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_RX_DUPCHK_UNIT_LIFE`](#group__net__gnrc__gomach__conf_1ga3ec7b68a53ea2b6b7f3d1817774e5f31)            | GoMacH's check-duplicate-packet unit life time in cycle count.
`define `[`CONFIG_GNRC_GOMACH_MAX_ALLOC_SENDER_NUM`](#group__net__gnrc__gomach__conf_1ga0a893d1276601b7f6505a51aa0ab6de5)            | Maximum number of senders allowed to be allocated slots in one cycle.
`define `[`CONFIG_GNRC_GOMACH_REPHASELOCK_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga6b18c128687e0552900d0b9f8f9559e4)            | Maximum t2k attempts before going to t2u in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_T2U_RETYR_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga720ca1b2e64a81d9ed0e3559e9988fb2)            | Maximum t2u attempts before dropping data packet in GoMacH.
`define `[`CONFIG_GNRC_GOMACH_MAX_T2U_RETYR_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga32635d62446a2c0c87d6a280f68d2375)            | Maximum t2u attempts before re-initiate radio in GoMacH.

## Members

#### `define `[`CONFIG_GNRC_GOMACH_CP_DURATION_US`](#group__net__gnrc__gomach__conf_1ga153710ae3f4cd82fea1f93d08821ed8d) 

The default duration of GoMacH's wake-up period (WP).

GoMacH adopts the duty-cycle scheme that, by default, a node only wakes up for a short period of [CONFIG_GNRC_GOMACH_CP_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga153710ae3f4cd82fea1f93d08821ed8d) in each cycle. In the rest of the cycle (except vTDMA), the node turns off the radio to conserve power. [CONFIG_GNRC_GOMACH_CP_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga153710ae3f4cd82fea1f93d08821ed8d) should be at least longer than [CONFIG_GNRC_GOMACH_MAX_PREAM_INTERVAL_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1gadad11d399f9ad4d7181c5cb20827fc8a), thus to guarantee that the receiver will not miss the preamble packet.

#### `define `[`CONFIG_GNRC_GOMACH_SUPERFRAME_DURATION_US`](#group__net__gnrc__gomach__conf_1ga24e428e118924806469fc2e9725ed0c1) 

GoMacH's superframe duration, i.e., time between two consecutive wake-ups.

This macro governs power consumption and GoMacH's reactiveness to traffic loads. In GoMacH, nodes adopt duty-cycle scheme to conserve power. That is, time is divided into repeated cycles (superframes), and in each cycle, a node only wakes up for a short period of time for receiving potential incoming packets for itself. This macro defines the wake-up interval, or, in other words, defines the cycle duration used in GoMacH. If the wake-up interval is short, nodes will wake up more frequently, which leads to quicker reactiveness of the MAC protocol for handling packet reception and transmission, but also results in higher power consumption due to more idle listening. In GoMacH, by default, we regard the wake-up period (WP) as the beginning of a cycle.

GoMacH's superframe duration [CONFIG_GNRC_GOMACH_SUPERFRAME_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga24e428e118924806469fc2e9725ed0c1) should not be shorter than 10 times of [CONFIG_GNRC_GOMACH_CP_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga153710ae3f4cd82fea1f93d08821ed8d) and not shorter than the RTT tickle interval.

#### `define `[`CONFIG_GNRC_GOMACH_CP_RANDOM_END_US`](#group__net__gnrc__gomach__conf_1gab8ef5fcbbb00a5f80cefe6190259c11f) 

The maximum duration of the random period at the end of GoMacH's wake-up period (WP).

Currently, GoMacH's WP is actually composed of [CONFIG_GNRC_GOMACH_CP_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga153710ae3f4cd82fea1f93d08821ed8d) and (+) [CONFIG_GNRC_GOMACH_CP_RANDOM_END_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1gab8ef5fcbbb00a5f80cefe6190259c11f). We currently introduced this random period to avoid beacon collision among neighbor nodes. This macro may be removed in the future.

#### `define `[`GNRC_GOMACH_CP_DURATION_MAX_US`](#group__net__gnrc__gomach__conf_1ga0e3e27ed7963ee69418dabeaa651b88a) 

The maximum duration of GoMacH's wake-up period (WP).

[GNRC_GOMACH_CP_DURATION_MAX_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga0e3e27ed7963ee69418dabeaa651b88a) defines the allowed maximum duration of GoMacH's WP period. A node will quit WP once it reaches this maximum duration. In GoMacH's WP, after each normal packet reception (except broadcast packet), a receiver will automatically extends the WP period (reset WP timeout), to receiver more potential incoming packets, before WP reaches this [GNRC_GOMACH_CP_DURATION_MAX_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga0e3e27ed7963ee69418dabeaa651b88a) duration.

#### `define `[`GNRC_GOMACH_WAIT_BEACON_TIME_US`](#group__net__gnrc__gomach__conf_1gab3cdaaf070dfac055fd235d77d9cf6e2) 

The maximum time for waiting the receiver's beacon in GoMacH.

After transmissions in the WP, if the sender still has pending packets for the receiver, it will wait for the receiver's incoming beacon that allocates dynamic transmission slots to it. [GNRC_GOMACH_WAIT_BEACON_TIME_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1gab3cdaaf070dfac055fd235d77d9cf6e2) defines the maximum waiting time for the beacon. Once the beacon-waiting timeout expires, the sender will quit the vTMDA (slotted transmission) procedure, and restarts transmissions (started with normal CSMA attempts in the receiver's WP) in the next cycle for sending the pending packets to the same receiver.

#### `define `[`CONFIG_GNRC_GOMACH_CP_MIN_GAP_US`](#group__net__gnrc__gomach__conf_1ga15d666b25f2bf8d7ebf3263bf9fbc95a) 

The minimum gap between neighbor nodes' wake-up phases in GoMacH.

To reduce beacon collisions and transmission collisions, GoMacH intends to avoid neighbor nodes' phases being too close to each other. This macro defines the minimum gap between two nodes's wake-up phases. If the sender finds its wake-up phase too closed to its receiver's, it will randomly select a new phase for itself.

#### `define `[`CONFIG_GNRC_GOMACH_WAIT_RX_END_US`](#group__net__gnrc__gomach__conf_1gadbdacb74ed8ee6b8e9f6c9de7471510a) 

Timeout duration for waiting [NETDEV_EVENT_RX_COMPLETE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba4cd3a85ba967f4d91beccf6afc76af00) in GoMacH.

Sometimes in GoMacH, if a node finds RX ongoing when it is just about to enter the next MAC state, it will set up a timeout for waiting this packet reception complete with a timeout of this [CONFIG_GNRC_GOMACH_WAIT_RX_END_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1gadbdacb74ed8ee6b8e9f6c9de7471510a) duration.

#### `define `[`CONFIG_GNRC_GOMACH_NO_TX_ISR_US`](#group__net__gnrc__gomach__conf_1gac16c1ba7d965f00c1907a110e957b072) 

Timeout duration for confirming TX-No-ISR event in GoMacH.

This macro is used to confirm/catch a case that a transmission doesn't have its [NETDEV_EVENT_TX_COMPLETE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395babc159414d6cb9e811df35258dc2d7262) interrupt event, which is considered as a hardware abnormal event. Upon this timeout expiration, GoMach will accordingly take actions to maintain its state-machine.

#### `define `[`CONFIG_GNRC_GOMACH_MAX_PREAM_INTERVAL_US`](#group__net__gnrc__gomach__conf_1gadad11d399f9ad4d7181c5cb20827fc8a) 

Maximum time interval between two consecutive preamble packets in GoMacH.

In GoMacH, a sender first uses preamble stream to track the receiver's wake-up phase (WP), if the receiver's WP is unknown. This macro defines the maximum time interval between twoconsecutive preamble packets.

#### `define `[`CONFIG_GNRC_GOMACH_PREAMBLE_INTERVAL_US`](#group__net__gnrc__gomach__conf_1ga3682cbfbee699d39bc67861f8ba6edb6) 

Time interval between two consecutive preamble packets in GoMacH.

In GoMacH, after a preamble is sent, the sender sets a timeout with [CONFIG_GNRC_GOMACH_PREAMBLE_INTERVAL_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga3682cbfbee699d39bc67861f8ba6edb6) duration for waiting to send the next preamble. Notably, this macro is with a very small value. In GoMacH, for receiving the preamble-ACK packet, the sender doesn't wait for the whole reception of the preamble-ACK. Instead, it only waits for the [NETDEV_EVENT_RX_STARTED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba89aecdc8f6cad116c5cc960d000f9674) event which leads to shorter time interval between two consecutive preamble transmissions.

#### `define `[`CONFIG_GNRC_GOMACH_BCAST_INTERVAL_US`](#group__net__gnrc__gomach__conf_1ga32ac4cc7bf30757e177e7fafecd3136f) 

Time interval between two consecutive broadcast packets in GoMacH.

In GoMacH, when sending a broadcast packet, the sender broadcasts the same packet frame on its two public channels simultaneously, with a total duration of [CONFIG_GNRC_GOMACH_SUPERFRAME_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga24e428e118924806469fc2e9725ed0c1) to guarantee that all neighbors will get a copy. This macro defines the time interval between ending two consecutive broadcast copies.

#### `define `[`GNRC_GOMACH_PREAMBLE_DURATION_US`](#group__net__gnrc__gomach__conf_1gafb601d63ff933b815d8c55bf859d569a) 

The Maximum preamble duration time of GoMacH.

Since GoMacH adopts duty-cycle scheme, to probe receiver's wake-up period a sender sends preamble streams to notice the receiver for communication. To ensure that the receiver will catch at least one preamble packet in a critical case that one public channel is jammed, the sender repeatedly broadcasts a stream of preamble packets with the broadcast duration (preamble duration) slightly longer than twice of [CONFIG_GNRC_GOMACH_SUPERFRAME_DURATION_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga24e428e118924806469fc2e9725ed0c1).

#### `define `[`CONFIG_GNRC_GOMACH_VTDMA_SLOT_SIZE_US`](#group__net__gnrc__gomach__conf_1ga818a57796a3df2ea72d137a65d974ef7) 

The transmission slot size in GoMacH.

GoMacH adopts dynamic slots allocation scheme to allocate transmission slots to senders that have pending packets. Each slot is for one data packet with ACK transmission. [CONFIG_GNRC_GOMACH_VTDMA_SLOT_SIZE_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga818a57796a3df2ea72d137a65d974ef7) is right sufficient for the transmission of the longest packet in IEEE 802.15.4 with ACK. Should not be changed.

#### `define `[`CONFIG_GNRC_GOMACH_TX_BUSY_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga0f38cee97a2b897187ec55a2c900e164) 

Maximum times of CSMA TX attempts under busy-indication in the WP period of the receiver.

Senders in GoMacH adopt CSMA scheme to send data packets in the WP period of the receiver. In case of having medium-busy feedback in WP and the TX failure count (due to busy) is below [CONFIG_GNRC_GOMACH_TX_BUSY_THRESHOLD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga0f38cee97a2b897187ec55a2c900e164), the sender continue to send the packet with CSMAin the receiver's WP, with the consideration that there may be multi-senders simultaneously competing in WP and the WP will be continuously extended (thus the packet can be received).

#### `define `[`CONFIG_GNRC_GOMACH_CP_EXTEND_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga16597de28e8e567dc75e06e305f4ee88) 

Maximum WP period extension number in GoMacH.

In GoMacH, the WP period of a receiver will be extended upon each successful packet reception (except receiving broadcast or preamble packet) to receive more potential incoming packets. This macro defines the maximum WP period extension number allowed in GoMacH.

#### `define `[`CONFIG_GNRC_GOMACH_RX_DUPCHK_UNIT_LIFE`](#group__net__gnrc__gomach__conf_1ga3ec7b68a53ea2b6b7f3d1817774e5f31) 

GoMacH's check-duplicate-packet unit life time in cycle count.

In GoMacH, to avoid receiving duplicate-packet, we currently introduce a data type of [gnrc_gomach_dupchk_unit_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__gomach__dupchk__unit__t) to record the recent senders' information (especially MAC TX sequence). This macro defines the check-duplicate-packet data unit's life time in cycle count. Once expired, the related data unit will be reset. This macro maybe removed in the future.

#### `define `[`CONFIG_GNRC_GOMACH_MAX_ALLOC_SENDER_NUM`](#group__net__gnrc__gomach__conf_1ga0a893d1276601b7f6505a51aa0ab6de5) 

Maximum number of senders allowed to be allocated slots in one cycle.

Exclude the static GoMacH MAC header payload in the beacon, which is 20 bytes, we have 107 bytes left for constructing the sender-ID list and the related slots-number list. A combined slots allocation information pair (sender ID with its corresponded allocate slots number) will cost 9 (8+1) bytes, thus we can hold a maximum of 11 i.e., ((127 - 20) / 9), sender IDs in the beacon.

#### `define `[`CONFIG_GNRC_GOMACH_REPHASELOCK_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga6b18c128687e0552900d0b9f8f9559e4) 

Maximum t2k attempts before going to t2u in GoMacH.

After phase-locked with the receiver, a sender runs a t2k (transmit-to-known) procedure to transmit packet to the phase-known device. However, due to factors like timer driftor busy-channel, a transmission attempt may fail in t2k. If the t2k failure count has reached this [CONFIG_GNRC_GOMACH_REPHASELOCK_THRESHOLD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga6b18c128687e0552900d0b9f8f9559e4), the sender regards phase-locked failed due to timer drift. In this case, it will adopt t2u (transmit-to-unknown) procedure to get re-phase-locked with the receiver.

#### `define `[`CONFIG_GNRC_GOMACH_T2U_RETYR_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga720ca1b2e64a81d9ed0e3559e9988fb2) 

Maximum t2u attempts before dropping data packet in GoMacH.

In case the receiver's phase is unknown to the sender, the sender adopts the t2u (transmit-to-unknown) procedure to get phase-locked with the receiver. This macro defines the maximum t2u attempts before dropping the data packet in GoMacH.

#### `define `[`CONFIG_GNRC_GOMACH_MAX_T2U_RETYR_THRESHOLD`](#group__net__gnrc__gomach__conf_1ga32635d62446a2c0c87d6a280f68d2375) 

Maximum t2u attempts before re-initiate radio in GoMacH.

After a long period of run time, a radio may be in wrong condition which needs to be re-calibrated. This is indicated by having a series of continuous t2u failures (no preambleACK) in GoMacH. In case we have [CONFIG_GNRC_GOMACH_MAX_T2U_RETYR_THRESHOLD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__gomach__conf_1ga32635d62446a2c0c87d6a280f68d2375) number of t2u failures, then we re-initiate the radio, trying to re-calibrate the radio for bringing it back to normal condition.

