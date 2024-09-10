---
title: api-net_gnrc_netif_conf.md
description: api-net_gnrc_netif_conf.md
---
# group `net_gnrc_netif_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_NETIF_PRIO`](#group__net__gnrc__netif__conf_1ga436e6a2270c976fa2f614592cc633d5f)            | Default priority for network interface threads.
`define `[`CONFIG_GNRC_NETIF_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__netif__conf_1ga415fdb525610d35aee92ab935033824a)            | Default message queue size for network interface threads (as exponent of 2^n).
`define `[`CONFIG_GNRC_NETIF_PKTQ_POOL_SIZE`](#group__net__gnrc__netif__conf_1gab1f5ec1650239c8c194a5f30492d1f6f)            | Packet queue pool size for all network interfaces.
`define `[`CONFIG_GNRC_NETIF_PKTQ_TIMER_US`](#group__net__gnrc__netif__conf_1ga2770a46f626eafdcfb5fc17ac01229a9)            | Time in microseconds for when to try send a queued packet at the latest.
`define `[`GNRC_NETIF_RPL_ADDR`](#group__net__gnrc__netif__conf_1gaf05f390c2a9a3781b50946449fb2563e)            | Number of multicast addresses needed for [RPL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl).
`define `[`GNRC_NETIF_IPV6_RTR_ADDR`](#group__net__gnrc__netif__conf_1ga959ec307828d41868ed382ac0390c403)            | Number of multicast addresses needed for a [IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6) router.
`define `[`CONFIG_GNRC_NETIF_IPV6_ADDRS_NUMOF`](#group__net__gnrc__netif__conf_1ga366596e311b4a450887a1a180ae66fb3)            | Maximum number of unicast and anycast addresses per interface.
`define `[`GNRC_NETIF_IPV6_GROUPS_NUMOF`](#group__net__gnrc__netif__conf_1ga5dec745d3d45a5bdd2363120680b102e)            | Maximum number of multicast groups per interface.
`define `[`GNRC_NETIF_L2ADDR_MAXLEN`](#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947)            | Maximum length of the link-layer address.
`define `[`CONFIG_GNRC_NETIF_DEFAULT_HL`](#group__net__gnrc__netif__conf_1gad9b1c1912ab76e091cd7d88785b1ac6b)            | default hop limit
`define `[`CONFIG_GNRC_NETIF_MIN_WAIT_AFTER_SEND_US`](#group__net__gnrc__netif__conf_1ga363b2e3da562cfbafa6d49f0709f3f27)            | Minimum wait time in microseconds after a send operation.

## Members

#### `define `[`GNRC_NETIF_PRIO`](#group__net__gnrc__netif__conf_1ga436e6a2270c976fa2f614592cc633d5f) 

Default priority for network interface threads.

#### `define `[`CONFIG_GNRC_NETIF_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__netif__conf_1ga415fdb525610d35aee92ab935033824a) 

Default message queue size for network interface threads (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option represents the exponent of 2^n, which will be used as the size of the queue.

> This has influence on the used stack memory of the thread, so the thread's stack size might need to be adapted if this is changed.

#### `define `[`CONFIG_GNRC_NETIF_PKTQ_POOL_SIZE`](#group__net__gnrc__netif__conf_1gab1f5ec1650239c8c194a5f30492d1f6f) 

Packet queue pool size for all network interfaces.

With [6LoWPAN Fragmentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag) the queue should fit at least all fragments of the minimum MTU. 

**See also**: [Send queue for @ref net_gnrc_netif](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__pktq)

#### `define `[`CONFIG_GNRC_NETIF_PKTQ_TIMER_US`](#group__net__gnrc__netif__conf_1ga2770a46f626eafdcfb5fc17ac01229a9) 

Time in microseconds for when to try send a queued packet at the latest.

Set to -1 to deactivate dequeuing by timer. For this it has to be ensured that none of the notifications by the driver are missed!

**See also**: [Send queue for @ref net_gnrc_netif](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__pktq)

#### `define `[`GNRC_NETIF_RPL_ADDR`](#group__net__gnrc__netif__conf_1gaf05f390c2a9a3781b50946449fb2563e) 

Number of multicast addresses needed for [RPL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl).

Used for calculation of [GNRC_NETIF_IPV6_GROUPS_NUMOF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga5dec745d3d45a5bdd2363120680b102e)

#### `define `[`GNRC_NETIF_IPV6_RTR_ADDR`](#group__net__gnrc__netif__conf_1ga959ec307828d41868ed382ac0390c403) 

Number of multicast addresses needed for a [IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6) router.

Used for calculation of [GNRC_NETIF_IPV6_GROUPS_NUMOF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga5dec745d3d45a5bdd2363120680b102e)

#### `define `[`CONFIG_GNRC_NETIF_IPV6_ADDRS_NUMOF`](#group__net__gnrc__netif__conf_1ga366596e311b4a450887a1a180ae66fb3) 

Maximum number of unicast and anycast addresses per interface.

If you change this, please make sure that [GNRC_NETIF_IPV6_GROUPS_NUMOF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga5dec745d3d45a5bdd2363120680b102e) is also large enough to fit the addresses' solicited nodes multicast addresses.

Default: 2 (1 link-local + 1 global address) + any additional address via configuration protocol (e.g. DHCPv6 leases).

#### `define `[`GNRC_NETIF_IPV6_GROUPS_NUMOF`](#group__net__gnrc__netif__conf_1ga5dec745d3d45a5bdd2363120680b102e) 

Maximum number of multicast groups per interface.

Default: 3 (all-nodes + solicited-nodes of link-local and global unicast address) + [GNRC_NETIF_RPL_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1gaf05f390c2a9a3781b50946449fb2563e) + [GNRC_NETIF_IPV6_RTR_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga959ec307828d41868ed382ac0390c403)

#### `define `[`GNRC_NETIF_L2ADDR_MAXLEN`](#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947) 

Maximum length of the link-layer address.

The value for the maximum length of a link-layer address is dependent on the [netdev](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api) adapters compiled in:

* Setting it via `CFLAGS` has the most precedence.

* The default is 8.

* 1, if only [CC1100/CC1100e/CC1101 Sub-GHz transceiver driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x) devices are compiled in.

* [ETHERNET_ADDR_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ethernet__hdr_1ga36c59bfbf9eb844eddb451378fc0552c), if additionally (or only) ethernet devices are compiled in.

* [IEEE802154_LONG_ADDRESS_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gab12d08a9821180028c12463a781e3e7a), if additionally (or only) IEEE802.15.4 devices are compiled in.

Implementers note: From longest to shortest extend, if new link-layer address types are included

#### `define `[`CONFIG_GNRC_NETIF_DEFAULT_HL`](#group__net__gnrc__netif__conf_1gad9b1c1912ab76e091cd7d88785b1ac6b) 

default hop limit

#### `define `[`CONFIG_GNRC_NETIF_MIN_WAIT_AFTER_SEND_US`](#group__net__gnrc__netif__conf_1ga363b2e3da562cfbafa6d49f0709f3f27) 

Minimum wait time in microseconds after a send operation.

**This feature is experimental!**
 This is purely meant as a debugging feature to slow down a radios sending.

