---
title: api-drivers_netdev_ieee802154_submac.md
description: api-drivers_netdev_ieee802154_submac.md
---
# group `drivers_netdev_ieee802154_submac` 

This module defines implements the netdev API on top of the IEEE 802.15.4 radio HAL.

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

José I. Alamos [jose.alamos@haw-hamburg.de](mailto:jose.alamos@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NETDEV_SUBMAC_FLAGS_ACK_TIMEOUT`](#group__drivers__netdev__ieee802154__submac_1gaef40d7b16846a208c06a8b7f2f4e23b4)            | Flag for ACK Timeout event.
`define `[`NETDEV_SUBMAC_FLAGS_TX_DONE`](#group__drivers__netdev__ieee802154__submac_1ga86da6e7697659ee1cdc2dd9850548d98)            | Flag for TX Done event.
`define `[`NETDEV_SUBMAC_FLAGS_RX_DONE`](#group__drivers__netdev__ieee802154__submac_1ga2175489a8cf31c35858ec790857984fe)            | Flag for RX Done event.
`define `[`NETDEV_SUBMAC_FLAGS_CRC_ERROR`](#group__drivers__netdev__ieee802154__submac_1ga98f7199bd9c9ee4e7db7101048722563)            | Flag for CRC ERROR event.
`define `[`NETDEV_SUBMAC_FLAGS_BH_REQUEST`](#group__drivers__netdev__ieee802154__submac_1gaa7d9db644ba5a9b45447d93046ef4491)            | Flag for Bottom Half request event.
`public int `[`netdev_ieee802154_submac_init`](#group__drivers__netdev__ieee802154__submac_1ga4125061bc0b15e80054250003d700a78)`(`[`netdev_ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154_submac.md#structnetdev__ieee802154__submac__t)` * netdev_submac)`            | Init the IEEE 802.15.4 SubMAC netdev adoption.
`struct `[`netdev_ieee802154_submac_t`](#structnetdev__ieee802154__submac__t) | IEEE 802.15.4 SubMAC netdev descriptor.

## Members

#### `define `[`NETDEV_SUBMAC_FLAGS_ACK_TIMEOUT`](#group__drivers__netdev__ieee802154__submac_1gaef40d7b16846a208c06a8b7f2f4e23b4) 

Flag for ACK Timeout event.

#### `define `[`NETDEV_SUBMAC_FLAGS_TX_DONE`](#group__drivers__netdev__ieee802154__submac_1ga86da6e7697659ee1cdc2dd9850548d98) 

Flag for TX Done event.

#### `define `[`NETDEV_SUBMAC_FLAGS_RX_DONE`](#group__drivers__netdev__ieee802154__submac_1ga2175489a8cf31c35858ec790857984fe) 

Flag for RX Done event.

#### `define `[`NETDEV_SUBMAC_FLAGS_CRC_ERROR`](#group__drivers__netdev__ieee802154__submac_1ga98f7199bd9c9ee4e7db7101048722563) 

Flag for CRC ERROR event.

#### `define `[`NETDEV_SUBMAC_FLAGS_BH_REQUEST`](#group__drivers__netdev__ieee802154__submac_1gaa7d9db644ba5a9b45447d93046ef4491) 

Flag for Bottom Half request event.

#### `public int `[`netdev_ieee802154_submac_init`](#group__drivers__netdev__ieee802154__submac_1ga4125061bc0b15e80054250003d700a78)`(`[`netdev_ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154_submac.md#structnetdev__ieee802154__submac__t)` * netdev_submac)` 

Init the IEEE 802.15.4 SubMAC netdev adoption.

#### Parameters
* `netdev_submac` pointer to the netdev submac descriptor.

#### Returns
0 on success. 

#### Returns
negative errno on failure.

# struct `netdev_ieee802154_submac_t` 

IEEE 802.15.4 SubMAC netdev descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`dev`](#structnetdev__ieee802154__submac__t_1ae53ba0893f0beb0baaebfa4faf94a51e) | IEEE 802.15.4 netdev descriptor.
`public `[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` `[`submac`](#structnetdev__ieee802154__submac__t_1af4ef3d08e083fa41c25864ac1640a863) | IEEE 802.15.4 SubMAC descriptor.
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`ack_timer`](#structnetdev__ieee802154__submac__t_1a69c2573fb5051765a996595c4f5a2f47) | ztimer descriptor for the ACK timeout timer
`public int `[`isr_flags`](#structnetdev__ieee802154__submac__t_1af0f6e9e89a6484c15d49978db2933995) | netdev submac [NETDEV_EVENT_ISR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba168994cf166acb43cd2a84d3d6ffb3b2) flags
`public int8_t `[`retrans`](#structnetdev__ieee802154__submac__t_1a75554bd04744cb2706500901266c41be) | number of frame retransmissions of the last TX
`public bool `[`dispatch`](#structnetdev__ieee802154__submac__t_1a5aee9c47febd1712a278bc8995769e71) | whether an event should be dispatched or not
`public `[`netdev_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gaef91a5201cb4a25d1c3ef41b783a395b)` `[`ev`](#structnetdev__ieee802154__submac__t_1a1630ece2844b8415bf806c21e365763f) | event to be dispatched

## Members

#### `public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`dev`](#structnetdev__ieee802154__submac__t_1ae53ba0893f0beb0baaebfa4faf94a51e) 

IEEE 802.15.4 netdev descriptor.

#### `public `[`ieee802154_submac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac_1ga323c6d6e3e8ebe05c7c04ff7cb864ac0)` `[`submac`](#structnetdev__ieee802154__submac__t_1af4ef3d08e083fa41c25864ac1640a863) 

IEEE 802.15.4 SubMAC descriptor.

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`ack_timer`](#structnetdev__ieee802154__submac__t_1a69c2573fb5051765a996595c4f5a2f47) 

ztimer descriptor for the ACK timeout timer

#### `public int `[`isr_flags`](#structnetdev__ieee802154__submac__t_1af0f6e9e89a6484c15d49978db2933995) 

netdev submac [NETDEV_EVENT_ISR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggaef91a5201cb4a25d1c3ef41b783a395ba168994cf166acb43cd2a84d3d6ffb3b2) flags

#### `public int8_t `[`retrans`](#structnetdev__ieee802154__submac__t_1a75554bd04744cb2706500901266c41be) 

number of frame retransmissions of the last TX

#### `public bool `[`dispatch`](#structnetdev__ieee802154__submac__t_1a5aee9c47febd1712a278bc8995769e71) 

whether an event should be dispatched or not

#### `public `[`netdev_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gaef91a5201cb4a25d1c3ef41b783a395b)` `[`ev`](#structnetdev__ieee802154__submac__t_1a1630ece2844b8415bf806c21e365763f) 

event to be dispatched

