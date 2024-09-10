---
title: api-net_gnrc_lwmac.md
description: api-net_gnrc_lwmac.md
---
# group `net_gnrc_lwmac` 

A Lightweight duty-cycling 802.15.4 MAC protocol.

> Deprecated: This module is deprecated and will be removed after the 2024.10 release.

As an alternative MAC layer for IEEE 802.15.4, you can use [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme).

LWMAC implementationRadio duty cyclingLWMAC adopts the radio duty-cycle scheme to conserve power. Namely, in each cycle period (MAC superframe), a node device wakes up for a short period of time (called listen period or wake-up period) for receiving possible incoming packets from other devices. Outside the listen period, the node device turns off its radio to conserve power.

Phase-lock schemeLWMAC adopts the phase-lock scheme to further reduce power consumption. Each node device in LWMAC will try to record/track its Tx-neighbor's wake-up phase. This is called phase-lock. After phase-locking, the sender node will (likely) spend less preamble packets (also called WR packet, i.e., wake-up-request, in LWMAC) for initiating a hand-shaking procedure for transmitting a data packet, compared to the first time it talks to the receiver.

Burst transmissionLWMAC adopts pending-bit technique to enhance its throughput. Namely, in case of having multi packets for the receiver, a sender uses the pending-bit flag embedded in the MAC header to instruct this situation, and the buffered packets will be transmitted in a continuous sequence, back to back, to the receiver in one shot.

Auto wake-up extensionLWMAC adopts auto wake-up extension scheme based on timeout (like T-MAC). In short, when a packet is successfully received at the receiver side, the receiver will reset the wake-up timeout to extend its wake-up period for receiving more potential incoming packets. This is to be compatible with the pending-bit technique to allow the receiver to absorb more packets when needed, thus boosts the throughput.

Simple retransmission schemeLWMAC adopts a simple retransmission scheme to enhance link reliability. The data packet will only be dropped in case the retransmission counter gets larger than [CONFIG_GNRC_LWMAC_MAX_DATA_TX_RETRIES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac__conf_1gaab0dec523ac0ad4b48d8e117eb283126).

Automatic phase backoff schemeLWMAC adopts an automatic phase backoff scheme to reduce WR (preamble) collision probability. In multi-hop scenarios, let's say, nodes A <B <-C (which is common in multi-hop data collection networks), in which B has packets for A, and C has packets for B. In case A and B's wake-up phases are too close (overlapping). Then, especially in high traffic conditions, B and C may initiate transmissions at the same time (B sends to A, and C sends to B), a link of either will be definitely interfered, leading to collisions and link throughput reduction. To this end, by using the automatic phase backoff scheme, if a sender finds its receiver's phase is too close to its own phase, it will run a backoff scheme to randomly reselect a new wake-up phase for itself.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_LWMAC_RADIO_REINIT_THRESHOLD`](#group__net__gnrc__lwmac_1ga55299407e69c99e80ed955717c3b6cd6)            | Maximum preamble attempts before re-initialize radio in LWMAC.
`public int `[`gnrc_netif_lwmac_create`](#group__net__gnrc__lwmac_1ga0649ee050832c15abf6602689c826640)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)`            | Creates an IEEE 802.15.4 LWMAC network interface.

## Members

#### `define `[`CONFIG_GNRC_LWMAC_RADIO_REINIT_THRESHOLD`](#group__net__gnrc__lwmac_1ga55299407e69c99e80ed955717c3b6cd6) 

Maximum preamble attempts before re-initialize radio in LWMAC.

After a long period of run time, a radio may be in wrong condition which needs to be re-calibrated. This is indicated by having a series of continuous preamble failure (no WA) in LWMAC. In case we have [CONFIG_GNRC_LWMAC_RADIO_REINIT_THRESHOLD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__lwmac_1ga55299407e69c99e80ed955717c3b6cd6) number of preamble failure, then we re-initialize the radio, trying to re-calibrate the radio for bringing it back to normal condition.

#### `public int `[`gnrc_netif_lwmac_create`](#group__net__gnrc__lwmac_1ga0649ee050832c15abf6602689c826640)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)` 

Creates an IEEE 802.15.4 LWMAC network interface.

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `stack` The stack for the LWMAC network interface's thread. 

* `stacksize` Size of `stack`. 

* `priority` Priority for the LWMAC network interface's thread. 

* `name` Name for the LWMAC network interface. May be NULL. 

* `dev` Device for the interface

**See also**: [gnrc_netif_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga94c18818950185514dae7271abed4d86)

#### Returns
0 on success 

#### Returns
negative number on error

