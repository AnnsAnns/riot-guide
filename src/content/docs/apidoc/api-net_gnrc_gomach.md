---
title: api-net_gnrc_gomach.md
description: api-net_gnrc_gomach.md
---
# group `net_gnrc_gomach` 

A traffic-adaptive multi-channel MAC.

> Deprecated: This module is deprecated and will be removed after the 2024.10 release.

As an alternative MAC layer for IEEE 802.15.4, you can use [openDSME - IEEE 802.15.4 DSME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme).

GoMacH is, "a General, nearly Optimal MAC protocol for multi-Hop communications", for IEEE 802.15.4 IoT/WSNs networks. It is designed to be a traffic adaptive MAC protocol that provides high traffic adaptability, high energy efficiency and high robustness.

GoMacH's main features

* doesn't rely on global synchronization.

* supports for multi-hop and mesh network.

* adopts a duty-cycle scheme to conserve power.

* provides high traffic adaptation for handling burst or dynamic traffics. It achieves this by dynamically allocating transmission slots to intensive senders (that have pending packets), which enables one (or more) sender(s) to burst transmit all of its (their) buffered packets (for the same destination) to the receiver in one shot (or during a shot notice). The burst slotted-transmissions will be ordered by the receiver device in a TDMA period.

* adopts a multi-channel scheme for avoiding/reducing wireless interference jam.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`gnrc_netif_gomach_create`](#group__net__gnrc__gomach_1ga63c2a8855055d2f96e9d172b122dcc37)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)`            | Creates an IEEE 802.15.4 GoMacH network interface.

## Members

#### `public int `[`gnrc_netif_gomach_create`](#group__net__gnrc__gomach_1ga63c2a8855055d2f96e9d172b122dcc37)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)` 

Creates an IEEE 802.15.4 GoMacH network interface.

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `stack` The stack for the GoMacH network interface's thread. 

* `stacksize` Size of `stack`. 

* `priority` Priority for the GoMacH network interface's thread. 

* `name` Name for the GoMacH network interface. May be NULL. 

* `dev` Device for the interface

**See also**: [gnrc_netif_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga94c18818950185514dae7271abed4d86)

#### Returns
0 on success 

#### Returns
negative number on error

