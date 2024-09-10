---
title: api-pkg_opendsme.md
description: api-pkg_opendsme.md
---
# group `pkg_opendsme` 

Support for IEEE 802.15.4 Deterministic and Synchronous Multi-channel Extension.

José I. Álamos [jose.alamos@haw-hamburg.de](mailto:jose.alamos@haw-hamburg.de)

AboutThe IEEE 802.15.4 standard with its widespread usage in wireless sensor and actuator networks was extended by several techniques that allow reliable data transmission for critical applications, such as industrial plants. This includes the Deterministic and Synchronous Multi-channel Extension (DSME) that allows for distributed assignment of time slots on multiple channels.

RIOT provides DSME support via the open source implementation [openDSME](https://opendsme.org/).

Features

* Topology agnostic (peer-to-peer, star, mesh, etc).

* By design, a DSME network can be extended just by adding more coordinators near the edge.

* Automatic resolution of beacon collision

* Frame transmission using either CSMA-CA or multi-channel GTS (guaranteed time slot)

* Built-in slot negotiation (dynamic allocation) and static allocation.

Network formationA PAN coordinator device initializes a DSME superframe structure which consists of a series of superframes that repeat indefinitely. A superframe consists of a Beacon Slot, a Contention Access Period and Contention Free Period.  BS                 CAP                      CFP        BS
+------------------------------------------------------+----
|   |                                |--|--|--|--|--|--|   | ...
|   |                                |--|--|--|--|--|--|   |
|   |                                |--|--|--|--|--|--|   | ...
|   |                                |--|--|--|--|--|--|   |
+---+--------------------------------+--+--+--+--+--+--+---+
<------------------- Superframe ----------------------->
 Each period of the superframe serves a dedicated purpose:

* Beacon Slot: Used for beacon transmission. PAN Coordinators and Coordinators transmit beacons periodically in these beacon slots. All devices (except the PAN coordinator) listen to their parent coordinator beacons and synchronize their superframe structure accordingly. Each coordinator (including the PAN Coordinator) transmits beacon periocally. To avoid beacon collisions, DSME allows to set the beacon interval of all devices in multiples of the superframe structure. This allows other coordinator devices to transmit beacons in a different superframe offset and therefore avoid beacon collisions. The beacon slot has a duration of one slot.

* Contention Access Period: During CAP, devices transmit using slotted CSMA-CA. This means, the CAP is divided in a series of CCA slots. These slots are aligned with the beginning of the CAP. A device can transmit only if CCA assess clear channel on three consecutive slots. If there's not enough CAP time left, the frame will be postponed until the next CAP period. On CSMA-CA transmissions, the MAC put the message in a CAP queue and transmits as soon as possible. By default, the CAP queue size is 8 frames. The CAP has a duration of 8 slots

* Contention Free Period: During CFP devices transmit using a dedicated Guaranteed Time Slot. GTS are multi-channel, which allows concurrent communication in the same GTS. On transmission schedule, the MAC puts the message in a CFP queue and transmit in the next available GTS. By default, the CFP queue size is 22. To (de)allocate a GTS, the upper layer triggers a GTS Request to negotiate slots with a neighbour device. The GTS Request is sent during CAP, as all MAC commands. The CFP has 7 multichannel GTS (each one with a duration of one slot) and the number of channels depends on the underlying PHY (16 for O-QPSK). Note that slots are unidirectional (TX or RX only) and cannot transmit neither broadcast frames nor MAC commands.

DSME allows to extend the number of GTS resources by combining superframes into a multisuperframe structure. The number of superframes per multisuperframes is configurable. This extend the number of GTS to seven times the number of superframes per multisuperframe.

Joining devices scan for beacons and perform the association procedure with the the (PAN) coordinator. On success, the device is ready to communicate with other devices in the DSME network. To extend the network, coordinator devices can associate to any other coordinator (including the PAN coordinator) and start emitting beacons in a different Beacon Slot offset. Devices can then join the network via the new coordinator. DSME manages beacon scheduling automatically and handles beacon collisions accordingly.

DSME superframe structureThe DSME superframe structure relies on three configuration parameters: Superframe Order (SO), Multisuperframe Order (MO) and Beacon Order (BO). These parameters affect the slot duration (and therefore the superframe duration), the number of superframes per multisuperframe and the beacon interval.

The DSME standard defines the slot duration as `slot_duration = aBaseSlotDuration * aSymbolDuration * 2^SO`. and the superframe duration as "sf_duration = 16 * slot_duration". `aBaseSlotDuration=60` as per standard and `aSymbolDuration` (us) depends on the underlying PHY (16 for O-QPSK).

The number of superframes per multisuperframe is given by `sf_per_msf=2^(MO-SO)`.

The beacon interval (in number of multisuperframes) is given by `msf_per_bi=2^(BO-SO)`

For example, an O-QPSK PHY with SO=3, MO=4 and BO=5 renders a slot duration of 7.68 ms, a superframe duration of 122.8 ms, 2 superframes per multisuperframe (msf_duration=245.7 ms) and a beacon interval of 2 multisuperframes (beacon_interval=492 ms).

The slot duration trades off maximum frame length and transmission delay during GTS transmissions. A value equal or higher than 3 allows transmission of 127 bytes frames. Increasing the number of superframes per multisuperframe increases on one hand transmission delay, because the period of a single GTS is the duration of the multisuperframe. On the other hand it decreases energy consumption, because a device transmit less often. Increasing the beacon interval extends the number of coordinators in wireless reach and reduces energy consumption. However, it slows the scanning and joining procedure.

The configuration of SO, MO and BO must be compliant with: 
```cpp
0 <= SO <= MO <= BO < 15
```

CAP ReductionWith the purpose of reducing energy consumption and extending the GTS resources even more, the MAC defines a CAP Reduction mode that turns all CAP (except the first one in a multisuperframe) into CFP. This adds 8 GTS per superframe that reduces CAP.

With CAP Reduction on, increasing the number of superframes per multisuperframe improves energy efficiency, because nodes spend less time on CAP. However, note that this renders less CAP time which is required for slot negotiation.

GTS coordinatesA slot is defined by a superframe ID, a superframe slot and a channel offset. The superframe ID is contained in `{0..n-1}`, where `n` is the number of superframes per multisuperframe. The ID of the first superframe (the one aligned with the start of a multisuperframe) is 0.

The superframe slot values depend on the superframe ID. 
```cpp
sf_slot = {0..6} if superframe_ID==0
sf_slot = {8..14} if superframe_ID!=0 && cap_reduction=0
sf_slot = {0..14} if superframe_ID!=0 && cap_reduction=1
```

The channel offset is `{0..m-1}`, with `m` the number of channels.

Usage in RIOTThe RIOT implementation uses the `DSMEAdaptionLayer` wrapper internally (provided by openDSME) to manage scanning/joining and automatic slot allocation. The MAC implementation defines several scheduling strategies, but the default is used (Traffic-aware and Predictive Scheduling). The port introduces an openDSME GNRC [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Interface, that can be used via [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) and [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg).

The following network options ([Netopt - Configuration options for network APIs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt)) are used for DSME setup.

Configuration:

* [NETOPT_PAN_COORD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906ac10af7f30d5cece4588d4cb0da42bc69). Set PAN coordinator or Child role

* [NETOPT_GTS_ALLOC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a05fe03df78639b8bac5ebc5e60705b28). Allocate a GTS slot manually (only available via [CONFIG_IEEE802154_DSME_STATIC_GTS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gae76008fe31744bb09491848b8ea8e6fd)).

* [NETOPT_GTS_TX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906aca871bf9c0f7557b297ec5ff4069842e). Set the next transmission to either GTS or CSMA-CA.

* [NETOPT_ACK_REQ](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906aa24b591ed7595ffabb167c07b272df09). Set the ACK Request bit to enable confirmed transmissions.

* [NETOPT_LINK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1gga19e30424c1ab107c9c84dc0cb29d9906a747aff887ecf7b682571a2ed4add9e5d). Start the DSME network (PAN Coordinator) or join an existing network (Child).

MAC configuration

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_OPENDSME_GNRC_PKTSNIP_TYPE`](#group__pkg__opendsme_1ga3ef0b4bad828a2af4e874569de86384d)            | default GNRC Pktsnip type for openDSME packets
`define `[`CONFIG_OPENDSME_MAX_NEIGHBOURS`](#group__pkg__opendsme_1ga3f19b309fea607941516d60402db56f6)            | maximum number of DSME neighbours
`define `[`CONFIG_OPENDSME_MAX_LOST_BEACONS`](#group__pkg__opendsme_1ga4abfe4105e2e499993540f13d6ea1740)            | maximum number of lost beacons before assuming the device desynchronized.
`define `[`CONFIG_OPENDSME_CAP_QUEUE_SIZE`](#group__pkg__opendsme_1ga50cb4fb3fea04a94017828690be47a7b)            | DSME CAP queue size.
`define `[`CONFIG_OPENDSME_CFP_QUEUE_SIZE`](#group__pkg__opendsme_1ga36c731dfb78f3451035a0fdc20e38425)            | DSME CFP queue size (for GTS transmissions)
`public int `[`gnrc_netif_opendsme_create`](#group__pkg__opendsme_1ga979f6b27f1c45730d16f049a64295dc9)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)`            | Creates an openDSME network interface.
`struct `[`ieee802154_dsme_alloc_t`](#structieee802154__dsme__alloc__t) | DSME Allocation descriptor.

## Members

#### `define `[`CONFIG_OPENDSME_GNRC_PKTSNIP_TYPE`](#group__pkg__opendsme_1ga3ef0b4bad828a2af4e874569de86384d) 

default GNRC Pktsnip type for openDSME packets

#### `define `[`CONFIG_OPENDSME_MAX_NEIGHBOURS`](#group__pkg__opendsme_1ga3f19b309fea607941516d60402db56f6) 

maximum number of DSME neighbours

#### `define `[`CONFIG_OPENDSME_MAX_LOST_BEACONS`](#group__pkg__opendsme_1ga4abfe4105e2e499993540f13d6ea1740) 

maximum number of lost beacons before assuming the device desynchronized.

Sets the maximum number of lost beacons before the MAC triggers a de-association procedure. Higher values are beneficial in noisy environments, because the MAC will keep synchronization despite losing some beacons. However, lower values are better for mobile nodes, because devices may sinchronize faster to a new coordinator.

#### `define `[`CONFIG_OPENDSME_CAP_QUEUE_SIZE`](#group__pkg__opendsme_1ga50cb4fb3fea04a94017828690be47a7b) 

DSME CAP queue size.

The CAP queue stores frames to be sent during the Contention Access Period using CSMA-CA. Because the transmission delay of CSMA-CA is lower compared to GTS transmissions, small values are preferred to reduce memory requirements.

#### `define `[`CONFIG_OPENDSME_CFP_QUEUE_SIZE`](#group__pkg__opendsme_1ga36c731dfb78f3451035a0fdc20e38425) 

DSME CFP queue size (for GTS transmissions)

The CFP queue stores frames to be sent during the Contention Free Period using a dedicated GTS. In contrast to CSMA-CA transmissions, GTS transmission take longer as a result of slot schedules. Therefore, the GTS queue should have more capacity than the CAP queue ([CONFIG_OPENDSME_CAP_QUEUE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__opendsme_1ga50cb4fb3fea04a94017828690be47a7b))

#### `public int `[`gnrc_netif_opendsme_create`](#group__pkg__opendsme_1ga979f6b27f1c45730d16f049a64295dc9)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev)` 

Creates an openDSME network interface.

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `stack` The stack for the network interface's thread. 

* `stacksize` Size of `stack`. 

* `priority` Priority for the network interface's thread. 

* `name` Name for the network interface. May be NULL. 

* `dev` Device for the interface

**See also**: [gnrc_netif_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga94c18818950185514dae7271abed4d86)

#### Returns
0 on success 

#### Returns
negative number on error

# struct `ieee802154_dsme_alloc_t` 

DSME Allocation descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`addr`](#structieee802154__dsme__alloc__t_1ada05cafb0d450fe043c0421cf13b3a3c) | neighbour address
`public uint8_t `[`superframe_id`](#structieee802154__dsme__alloc__t_1ab0511db0164db8e42ec632b536615f9d) | superframe ID
`public uint8_t `[`slot_id`](#structieee802154__dsme__alloc__t_1a64cb9e3ab33dd57a2e3f2fbb72e2e946) | slot ID
`public uint8_t `[`channel_id`](#structieee802154__dsme__alloc__t_1a966e9f90e7e2c5893b4183ae933d80e7) | channel ID
`public bool `[`tx`](#structieee802154__dsme__alloc__t_1a6049f1d7cfce3ac5c10f00e3f61d2bd1) | whether the GTS is TX

## Members

#### `public `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` `[`addr`](#structieee802154__dsme__alloc__t_1ada05cafb0d450fe043c0421cf13b3a3c) 

neighbour address

#### `public uint8_t `[`superframe_id`](#structieee802154__dsme__alloc__t_1ab0511db0164db8e42ec632b536615f9d) 

superframe ID

#### `public uint8_t `[`slot_id`](#structieee802154__dsme__alloc__t_1a64cb9e3ab33dd57a2e3f2fbb72e2e946) 

slot ID

#### `public uint8_t `[`channel_id`](#structieee802154__dsme__alloc__t_1a966e9f90e7e2c5893b4183ae933d80e7) 

channel ID

#### `public bool `[`tx`](#structieee802154__dsme__alloc__t_1a6049f1d7cfce3ac5c10f00e3f61d2bd1) 

whether the GTS is TX

