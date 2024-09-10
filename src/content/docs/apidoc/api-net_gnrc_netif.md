---
title: api-net_gnrc_netif.md
description: api-net_gnrc_netif.md
---
# group `net_gnrc_netif` 

Abstraction layer for GNRC's network interfaces.

[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interfaces in the context of GNRC are threads for protocols that are below the network layer.

Single interface optimizationsIf you only have one network interface on the board, you can select the `gnrc_netif_single` pseudo-module to enable further optimisations.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_NETIF_EVQ_INDEX_PRIO_HIGH`](#group__net__gnrc__netif_1gac264224206e790f538ccd0d8d88b3036)            | Index of the high priority queue.
`define `[`GNRC_NETIF_EVQ_INDEX_PRIO_LOW`](#group__net__gnrc__netif_1ga1d1b9dc9479633a7ecb79860e0aa6602)            | Index of the low priority queue.
`define `[`GNRC_NETIF_EVQ_NUMOF`](#group__net__gnrc__netif_1ga473401db652f531fd853a9529adb54cd)            | Number of event queues.
`enum `[`gnrc_netif_bus_t`](#group__net__gnrc__netif_1ga9b571101e3ae1341d7b12eb1e6747083)            | Per-Interface Event Message Buses.
`enum `[`gnrc_ipv6_event_t`](#group__net__gnrc__netif_1ga46f6e15ff09d50b67b46c7ab5d8942ea)            | Event types for GNRC_NETIF_BUS_IPV6 per-interface message bus.
`public inline static bool `[`gnrc_netif_netdev_legacy_api`](#group__net__gnrc__netif_1ga4b04640a0d94ff4e7396690802af1936)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Check if the device belonging to the given netif uses the legacy netdev API.
`public inline static bool `[`gnrc_netif_netdev_new_api`](#group__net__gnrc__netif_1ga242b1a33f7a6c2206f652734d5d1ddde)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Check if the device belonging to the given netif uses the new netdev API.
`public void `[`gnrc_netif_init_devs`](#group__net__gnrc__netif_1gafc17658b5862c1e1015c9ac62a6dafbd)`(void)`            | Initialize all available network interfaces.
`public int `[`gnrc_netif_create`](#group__net__gnrc__netif_1ga94c18818950185514dae7271abed4d86)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,const `[`gnrc_netif_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gacad0368e2e6e50fe0faecd208a6f6828)` * ops)`            | Creates a network interface.
`public unsigned `[`gnrc_netif_numof`](#group__net__gnrc__netif_1ga79b293e98896c2831c2ca6750b32c031)`(void)`            | Get number of network interfaces actually allocated.
`public inline static bool `[`gnrc_netif_highlander`](#group__net__gnrc__netif_1gaf7f4305f1d02f1ea9c14e0d4b3e0b2d4)`(void)`            | Check if there can only be one [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t) interface.
`public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_iter`](#group__net__gnrc__netif_1gaa58a468fb9e82d7107e229f0239c4e53)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * prev)`            | Iterate over all network interfaces.
`public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_get_by_pid`](#group__net__gnrc__netif_1gae8568cf8c5a1647eceac9209fde86510)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Get network interface by PID.
`public inline static int `[`gnrc_netif_ipv6_addrs_get`](#group__net__gnrc__netif_1ga0c2ae9032acd63d1b915e90b923063eb)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addrs,size_t max_len)`            | Gets the (unicast on anycast) IPv6 address of an interface (if IPv6 is supported)
`public inline static int `[`gnrc_netif_ipv6_addr_add`](#group__net__gnrc__netif_1ga79460577bba4352cadffe9f78770b325)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned pfx_len,uint8_t flags)`            | Adds an (unicast or anycast) IPv6 address to an interface (if IPv6 is supported)
`public inline static int `[`gnrc_netif_ipv6_addr_remove`](#group__net__gnrc__netif_1gae35c472b1640b7e93de39e23a68fe50a)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)`            | Removes a (unicast or anycast) IPv6 address from an interface (if IPv6 is supported)
`public inline static int `[`gnrc_netif_ipv6_groups_get`](#group__net__gnrc__netif_1gad3dd62713036fcfabd6d8ba00acc86f8)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * groups,size_t max_len)`            | Gets the IPv6 multicast groups an interface is joined to (if IPv6 is supported)
`public inline static int `[`gnrc_netif_ipv6_group_join`](#group__net__gnrc__netif_1ga38083192d784d1e87328a0014d917107)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * group)`            | Joins an IPv6 multicast group on an interface (if IPv6 is supported)
`public inline static int `[`gnrc_netif_ipv6_group_leave`](#group__net__gnrc__netif_1ga33fe4b611dff340730a41bda0fd187f1)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * group)`            | Leaves an IPv6 multicast group on an interface (if IPv6 is supported)
`public int `[`gnrc_netif_default_init`](#group__net__gnrc__netif_1ga7517b110ad77784598da4e40c353431e)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)`            | Default operation for [gnrc_netif_ops_t::init()](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__ops_1a2996b6882ce6ad7a86f072df9da8c80b)
`public int `[`gnrc_netif_get_from_netdev`](#group__net__gnrc__netif_1gacef1ec847f603c4b55368476fa167018)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_netapi_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netapi.md#structgnrc__netapi__opt__t)` * opt)`            | Default operation for [gnrc_netif_ops_t::get()](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__ops_1ae07c67f21356167679f13a1abd04f541)
`public int `[`gnrc_netif_set_from_netdev`](#group__net__gnrc__netif_1ga59885a7baa13748737e354272791ee43)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_netapi_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netapi.md#structgnrc__netapi__opt__t)` * opt)`            | Default operation for [gnrc_netif_ops_t::set()](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__ops_1a3301d3571916757ee943a87945baac93)
`public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_get_by_type`](#group__net__gnrc__netif_1ga392b1df53447c836b7589e1905681362)`(`[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` type,uint8_t index)`            | Gets an interface by the netdev type (and index)
`public inline static char * `[`gnrc_netif_addr_to_str`](#group__net__gnrc__netif_1gab3ec6a146319a2482e46f0f909372353)`(const uint8_t * addr,size_t addr_len,char * out)`            | Converts a hardware address to a human readable string.
`public inline static size_t `[`gnrc_netif_addr_from_str`](#group__net__gnrc__netif_1ga352038367ae7c3be460728a39afdfef8)`(const char * str,uint8_t * out)`            | Parses a string of colon-separated hexadecimals to a hardware address.
`public inline static int `[`gnrc_netif_send`](#group__net__gnrc__netif_1ga714c35647645f8dc2f0d964b8be99c39)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Send a GNRC packet via a given [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t) interface.
`public inline static `[`msg_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmsg__bus__t)` * `[`gnrc_netif_get_bus`](#group__net__gnrc__netif_1ga82a0e8f871fe70e105cb907378346a9f)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_netif_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga9b571101e3ae1341d7b12eb1e6747083)` type)`            | Get a message bus of a given [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t) interface.
`public bool `[`gnrc_netif_ipv6_wait_for_global_address`](#group__net__gnrc__netif_1ga84e8317070777853ab52a3777a559915)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,uint32_t timeout_ms)`            | Wait for a global address to become available.
`struct `[`gnrc_netif_t`](#structgnrc__netif__t) | Representation of a network interface.
`struct `[`gnrc_netif_ops`](#structgnrc__netif__ops) | **See also**: [gnrc_netif_ops_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gacad0368e2e6e50fe0faecd208a6f6828)

## Members

#### `define `[`GNRC_NETIF_EVQ_INDEX_PRIO_HIGH`](#group__net__gnrc__netif_1gac264224206e790f538ccd0d8d88b3036) 

Index of the high priority queue.

#### `define `[`GNRC_NETIF_EVQ_INDEX_PRIO_LOW`](#group__net__gnrc__netif_1ga1d1b9dc9479633a7ecb79860e0aa6602) 

Index of the low priority queue.

#### `define `[`GNRC_NETIF_EVQ_NUMOF`](#group__net__gnrc__netif_1ga473401db652f531fd853a9529adb54cd) 

Number of event queues.

#### `enum `[`gnrc_netif_bus_t`](#group__net__gnrc__netif_1ga9b571101e3ae1341d7b12eb1e6747083) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GNRC_NETIF_BUS_IPV6            | provides [gnrc_ipv6_event_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga46f6e15ff09d50b67b46c7ab5d8942ea) messages to subscribers
GNRC_NETIF_BUS_NUMOF            | 

Per-Interface Event Message Buses.

#### `enum `[`gnrc_ipv6_event_t`](#group__net__gnrc__netif_1ga46f6e15ff09d50b67b46c7ab5d8942ea) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GNRC_IPV6_EVENT_ADDR_VALID            | Address becomes valid.

Event types for GNRC_NETIF_BUS_IPV6 per-interface message bus.

#### `public inline static bool `[`gnrc_netif_netdev_legacy_api`](#group__net__gnrc__netif_1ga4b04640a0d94ff4e7396690802af1936)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Check if the device belonging to the given netif uses the legacy netdev API.

Check [netdev_driver_t::confirm_send](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aacad0fea752b3a0ec9beb30470c4f34e) for info about the old and new netdev API.

netdevs using the legacy API have to depend on the (pseudo-)module netdev_legaqcy_api, netdevs using the new API have to depend on the (pseudo-)module netdev_new_api. If only one of the pseudo modules is used, this function can be constant folded. For boards mixing legacy and new API netdevs, this will check the flavor at runtime.

**See also**: [netdev_driver_t::confirm_send](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aacad0fea752b3a0ec9beb30470c4f34e)

#### `public inline static bool `[`gnrc_netif_netdev_new_api`](#group__net__gnrc__netif_1ga242b1a33f7a6c2206f652734d5d1ddde)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Check if the device belonging to the given netif uses the new netdev API.

**See also**: [gnrc_netif_netdev_legacy_api](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga4b04640a0d94ff4e7396690802af1936)

**See also**: [netdev_driver_t::confirm_send](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1aacad0fea752b3a0ec9beb30470c4f34e)

#### `public void `[`gnrc_netif_init_devs`](#group__net__gnrc__netif_1gafc17658b5862c1e1015c9ac62a6dafbd)`(void)` 

Initialize all available network interfaces.

This function is called automatically if the auto_init_gnrc_netif module is used. If only the gnrc_netif_init module is used instead, you can call this function to manually set up the network interfaces at a later time.

#### `public int `[`gnrc_netif_create`](#group__net__gnrc__netif_1ga94c18818950185514dae7271abed4d86)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,char * stack,int stacksize,char priority,const char * name,`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * dev,const `[`gnrc_netif_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gacad0368e2e6e50fe0faecd208a6f6828)` * ops)` 

Creates a network interface.

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `stack` The stack for the network interface's thread. 

* `stacksize` Size of `stack`. 

* `priority` Priority for the network interface's thread. 

* `name` Name for the network interface. May be NULL. 

* `dev` Device for the interface. 

* `ops` Operations for the network interface.

If [DEVELHELP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__utils_1ga8dac5ebebf5f229a9fca90dcdf37e913) is defined netif_params_t::name is used as the name of the network interface's thread.

#### Returns
0 on success 

#### Returns
negative number on error

#### `public unsigned `[`gnrc_netif_numof`](#group__net__gnrc__netif_1ga79b293e98896c2831c2ca6750b32c031)`(void)` 

Get number of network interfaces actually allocated.

#### Returns
Number of network interfaces actually allocated

#### `public inline static bool `[`gnrc_netif_highlander`](#group__net__gnrc__netif_1gaf7f4305f1d02f1ea9c14e0d4b3e0b2d4)`(void)` 

Check if there can only be one [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t) interface.

There can only be one! 

This function is used to allow compile time optimizations for single interface applications

#### Returns
true, if there can only only one interface 

#### Returns
false, if there can be more than one interface

#### `public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_iter`](#group__net__gnrc__netif_1gaa58a468fb9e82d7107e229f0239c4e53)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * prev)` 

Iterate over all network interfaces.

#### Parameters
* `prev` previous interface in iteration. NULL to start iteration.

#### Returns
The next network interface after `prev`. 

#### Returns
NULL, if `prev` was the last network interface.

#### `public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_get_by_pid`](#group__net__gnrc__netif_1gae8568cf8c5a1647eceac9209fde86510)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Get network interface by PID.

#### Parameters
* `pid` A PID of a network interface.

#### Returns
The network interface on success. 

#### Returns
NULL, if no network interface with PID exists.

#### `public inline static int `[`gnrc_netif_ipv6_addrs_get`](#group__net__gnrc__netif_1ga0c2ae9032acd63d1b915e90b923063eb)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addrs,size_t max_len)` 

Gets the (unicast on anycast) IPv6 address of an interface (if IPv6 is supported)

`netif != NULL`

`addrs != NULL`

`max_len >= sizeof(ipv6_addr_t)`

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `addrs` Up to the first `max_len / sizeof(ipv6_addr_t)` addresses assigned to `netif`. May not be `NULL`

* `max_len` Number of *bytes* available in `addrs`. Must be at least `sizeof(ipv6_addr_t)`. It is recommended to use `CONFIG_GNRC_NETIF_IPV6_ADDRS_NUMOF` `* sizeof(ipv6_addr_t) here (and have `addrs` of the according length).

#### Returns
Size of the array of addresses in `addrs` on success. (number of addresses times `sizeof(ipv6_addr_t)`) May be 0 if no addresses are configured. 

#### Returns
-ENOTSUP, if `netif` doesn't support IPv6.

#### `public inline static int `[`gnrc_netif_ipv6_addr_add`](#group__net__gnrc__netif_1ga79460577bba4352cadffe9f78770b325)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr,unsigned pfx_len,uint8_t flags)` 

Adds an (unicast or anycast) IPv6 address to an interface (if IPv6 is supported)

`netif != NULL`

`addr != NULL`

`(pfx_len > 0) && (pfx_len <= 128)`

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `addr` The address to add to `netif`. May not be `NULL`. 

* `pfx_len` The prefix length of `addr`. Must be greater than 0 and lesser than or equal to 128. 

* `flags` [Flags](#gnrc_2netif_2ipv6_8h_1net_gnrc_netif_ipv6_addrs_flags) for `addr`. Set [GNRC_NETIF_IPV6_ADDRS_FLAGS_STATE_VALID](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#gnrc_2netif_2ipv6_8h_1a3cb79f744d506ffe88e5aafac08f3849) to skip duplicate address detection (when activated).

#### Returns
sizeof(ipv6_addr_t) on success. 

#### Returns
-ENOMEM, if no space is left on `netif` to add `addr` or its corresponding solicited-nodes multicast address. 

#### Returns
-ENOTSUP, if `netif` doesn't support IPv6.

#### `public inline static int `[`gnrc_netif_ipv6_addr_remove`](#group__net__gnrc__netif_1gae35c472b1640b7e93de39e23a68fe50a)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * addr)` 

Removes a (unicast or anycast) IPv6 address from an interface (if IPv6 is supported)

`netif != NULL`

`addr != NULL`

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `addr` The address to remove from `netif`. May not be `NULL`.

#### Returns
sizeof(ipv6_addr_t) on success. 

#### Returns
-ENOTSUP, if `netif` doesn't support IPv6.

#### `public inline static int `[`gnrc_netif_ipv6_groups_get`](#group__net__gnrc__netif_1gad3dd62713036fcfabd6d8ba00acc86f8)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * groups,size_t max_len)` 

Gets the IPv6 multicast groups an interface is joined to (if IPv6 is supported)

`netif != NULL`

`groups != NULL`

`max_len >= sizeof(ipv6_addr_t)`

#### Parameters
* `netif` The interface. May not be `NULL`. 

* `groups` Up to the first `max_len / 8` multicast groups `netif` is joined to. May not be `NULL`

* `max_len` Number of *bytes* available in `groups`. Must be at least `sizeof(ipv6_addr_t)`. It is recommended to use `GNRC_NETIF_IPV6_GROUPS_NUMOF` `* sizeof(ipv6_addr_t) here (and have `groups` of the according length).

#### Returns
Number of addresses in `groups` times `sizeof(ipv6_addr_t)` on success (including 0). 

#### Returns
-ENOTSUP, if `netif` doesn't support IPv6.

#### `public inline static int `[`gnrc_netif_ipv6_group_join`](#group__net__gnrc__netif_1ga38083192d784d1e87328a0014d917107)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * group)` 

Joins an IPv6 multicast group on an interface (if IPv6 is supported)

`netif != NULL`

`group != NULL`

#### Parameters
* `netif` The interface. 

* `group` The address of the multicast group to join on `netif`. May not be `NULL`.

#### Returns
sizeof(ipv6_addr_t) on success. 

#### Returns
-ENOMEM, if no space is left on `netif` to add `group`. 

#### Returns
-ENOTSUP, if `netif` doesn't support IPv6.

#### `public inline static int `[`gnrc_netif_ipv6_group_leave`](#group__net__gnrc__netif_1ga33fe4b611dff340730a41bda0fd187f1)`(const `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * group)` 

Leaves an IPv6 multicast group on an interface (if IPv6 is supported)

`netif != NULL`

`group != NULL`

#### Parameters
* `netif` The interface. 

* `group` The address of the multicast group to leave on `netif`. May not be `NULL`.

#### Returns
sizeof(ipv6_addr_t) on success. 

#### Returns
-ENOTSUP, if `netif` doesn't support IPv6.

#### `public int `[`gnrc_netif_default_init`](#group__net__gnrc__netif_1ga7517b110ad77784598da4e40c353431e)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif)` 

Default operation for [gnrc_netif_ops_t::init()](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__ops_1a2996b6882ce6ad7a86f072df9da8c80b)

Can also be used to be called *before* a custom operation. This function calls [netif_register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netif_1gaa356f13fc006043bf79169bb00707dd8) internally.

#### Parameters
* `netif` The network interface.

#### `public int `[`gnrc_netif_get_from_netdev`](#group__net__gnrc__netif_1gacef1ec847f603c4b55368476fa167018)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_netapi_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netapi.md#structgnrc__netapi__opt__t)` * opt)` 

Default operation for [gnrc_netif_ops_t::get()](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__ops_1ae07c67f21356167679f13a1abd04f541)

Can also be used to be called *after* a custom operation.

#### Parameters
* `netif` The network interface. 

* `opt` The option parameters.

#### Returns
Return value of [netdev_driver_t::get()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a0f7bbd084d7a51756fba665903884317) of [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15) of `netif`.

#### `public int `[`gnrc_netif_set_from_netdev`](#group__net__gnrc__netif_1ga59885a7baa13748737e354272791ee43)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,const `[`gnrc_netapi_opt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netapi.md#structgnrc__netapi__opt__t)` * opt)` 

Default operation for [gnrc_netif_ops_t::set()](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__ops_1a3301d3571916757ee943a87945baac93)

Can also be used to be called *after* a custom operation.

#### Parameters
* `netif` The network interface. 

* `opt` The option parameters.

#### Returns
Return value of [netdev_driver_t::set()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ad5c8c409276a702877ad50ad09e87a58) of [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15) of `netif`.

#### `public `[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * `[`gnrc_netif_get_by_type`](#group__net__gnrc__netif_1ga392b1df53447c836b7589e1905681362)`(`[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` type,uint8_t index)` 

Gets an interface by the netdev type (and index)

The netdev has been registered with [netdev_register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga969385cab163f1626f6072c2636a252b)

#### Parameters
* `type` driver type of the netdev, can be [NETDEV_ANY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ggabf6e398293fe72dc6936cf7e828841fba8c6ddb6ad8b83296e833f14d8ec2574d)

* `index` index of the netdev, can be [NETDEV_INDEX_ANY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga21fb33e7e240a458835bcf3465548fdf)

#### Returns
The network interface that has a netdev of matching type and index NULL if no matching interface could be found

#### `public inline static char * `[`gnrc_netif_addr_to_str`](#group__net__gnrc__netif_1gab3ec6a146319a2482e46f0f909372353)`(const uint8_t * addr,size_t addr_len,char * out)` 

Converts a hardware address to a human readable string.

Compatibility wrapper for 

**See also**: [l2util_addr_to_str](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2util_1ga985ede981f1c69b1879f55b6b393160d)

The format will be like `xx:xx:xx:xx` where `xx` are the bytes of `addr` in hexadecimal representation.

`(out != NULL) && ((addr != NULL) || (addr_len == 0))`

`out`**MUST** have allocated at least 3 * `addr_len` bytes.

#### Parameters
* `addr` A hardware address. 

* `addr_len` Length of `addr`. 

* `out` A string to store the output in. Must at least have 3 * `addr_len` bytes allocated.

#### Returns
`out`.

#### `public inline static size_t `[`gnrc_netif_addr_from_str`](#group__net__gnrc__netif_1ga352038367ae7c3be460728a39afdfef8)`(const char * str,uint8_t * out)` 

Parses a string of colon-separated hexadecimals to a hardware address.

Compatibility wrapper for 

**See also**: [l2util_addr_from_str](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__l2util_1gaaa4c7f588480db684853d97de113361b)

The input format must be like `xx:xx:xx:xx` where `xx` will be the bytes of `addr` in hexadecimal representation.

`(out != NULL)`

`out`**MUST** have allocated at least [GNRC_NETIF_L2ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947) bytes.

#### Parameters
* `str` A string of colon-separated hexadecimals. 

* `out` The resulting hardware address. Must at least have [GNRC_NETIF_L2ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947) bytes allocated.

#### Returns
Actual length of `out` on success. 

#### Returns
0, on failure.

#### `public inline static int `[`gnrc_netif_send`](#group__net__gnrc__netif_1ga714c35647645f8dc2f0d964b8be99c39)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Send a GNRC packet via a given [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t) interface.

#### Parameters
* `netif` pointer to the interface 

* `pkt` packet to be sent.

#### Returns
1 if packet was successfully delivered 

#### Returns
-1 on error

#### `public inline static `[`msg_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmsg__bus__t)` * `[`gnrc_netif_get_bus`](#group__net__gnrc__netif_1ga82a0e8f871fe70e105cb907378346a9f)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,`[`gnrc_netif_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga9b571101e3ae1341d7b12eb1e6747083)` type)` 

Get a message bus of a given [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t) interface.

#### Parameters
* `netif` pointer to the interface 

* `type` GNRC message bus [type](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga9b571101e3ae1341d7b12eb1e6747083)

#### Returns
the message bus for the interface

#### `public bool `[`gnrc_netif_ipv6_wait_for_global_address`](#group__net__gnrc__netif_1ga84e8317070777853ab52a3777a559915)`(`[`gnrc_netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t)` * netif,uint32_t timeout_ms)` 

Wait for a global address to become available.

This function blocks until a valid global address has been configured, e.g. by receiving a router advertisement or via DHCPv6.

Requires the `gnrc_netif_bus` module.

#### Parameters
* `netif` pointer to the interface May be NULL, then this checks for a global address on *any* interface. 

* `timeout_ms` Time to wait for an address to become available, in ms.

#### Returns
true if a global address is configured

# struct `gnrc_netif_t` 

Representation of a network interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` `[`netif`](#structgnrc__netif__t_1a3628afb76c1e226e15b0b6b0cdd74e26) | network interface descriptor
`public const `[`gnrc_netif_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gacad0368e2e6e50fe0faecd208a6f6828)` * `[`ops`](#structgnrc__netif__t_1a1fb8b3d4e737b508c1cd9a675e6d035f) | Operations of the network interface.
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * `[`dev`](#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15) | [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) device of the network interface.
`public `[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` `[`mutex`](#structgnrc__netif__t_1a1c83f4e05deadbbff86d34da096d7392) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) of the interface.
`public `[`netstats_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats.md#structnetstats__t)` `[`stats`](#structgnrc__netif__t_1a1df58e245289ad0d75ee99ccd8f92b92) | transceiver's statistics
`public `[`gnrc_netif_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__lorawan__t)` `[`lorawan`](#structgnrc__netif__t_1a105e71082c1f49f2ff749895a2358a30) | LoRaWAN component.
`public `[`gnrc_netif_ipv6_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__ipv6__t)` `[`ipv6`](#structgnrc__netif__t_1aaa394a6f526275ae4d3cabfe0ab3e32a) | IPv6 component.
`public `[`gnrc_netif_mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__mac__t)` `[`mac`](#structgnrc__netif__t_1a646f694b7b5818e864ddafcbae185cad) | [Common MAC module](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__mac) component
`public `[`msg_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmsg__bus__t)` `[`bus`](#structgnrc__netif__t_1a19716960a6addfa027a3d973e139c0bc) | Event Message Bus.
`public uint32_t `[`flags`](#structgnrc__netif__t_1a1e33d5441ba953f822ec5f4218b6347a) | Flags for the interface.
`public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` `[`evq`](#structgnrc__netif__t_1a1af8a83b3748c58e483fe7e5088b7ce4) | Event queue for asynchronous events.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event_isr`](#structgnrc__netif__t_1a4b4e40b64b77e89bf0ff79f29cb3449b) | ISR event for the network device.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event_tx_done`](#structgnrc__netif__t_1ae987ee216ccbb414cf4f85f7f48eb86c) | TX done event for the network device.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`tx_pkt`](#structgnrc__netif__t_1abd55cefbed37220ea20ce67482a783e8) | Outgoing frame that is currently transmitted.
`public uint8_t `[`l2addr`](#structgnrc__netif__t_1a52ce74511647e0c93cfb827a6f614dac) | The link-layer address currently used as the source address on this interface.
`public uint8_t `[`l2addr_len`](#structgnrc__netif__t_1a4557569c7ffff1b3bb940e7823b155f5) | Length in bytes of [gnrc_netif_t::l2addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a52ce74511647e0c93cfb827a6f614dac).
`public `[`gnrc_netif_dedup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_dedup.md#structgnrc__netif__dedup__t)` `[`last_pkt`](#structgnrc__netif__t_1a660dfa8a5d64b92c2911735f113ffcd8) | Last received packet information.
`public `[`gnrc_netif_6lo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__6lo__t)` `[`sixlo`](#structgnrc__netif__t_1a324b26288c265954ee10a8c1517de6eb) | 6Lo component
`public `[`gnrc_netif_pktq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_pktq.md#structgnrc__netif__pktq__t)` `[`send_queue`](#structgnrc__netif__t_1afee7b42c9f4f8c74a1937448791a9c8a) | Packet queue for sending.
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg_queue`](#structgnrc__netif__t_1aab124131f1e93f73ea007b22f2c8d216) | Message queue for the netif thread.
`public uint8_t `[`cur_hl`](#structgnrc__netif__t_1a3352b9009d6b3af888c8351572e8f83c) | Current hop-limit for out-going packets.
`public uint8_t `[`device_type`](#structgnrc__netif__t_1a269e7bb2472a008176c8e173cd152600) | Device type.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structgnrc__netif__t_1a48524d59f708cc987051ff1dafe51fe7) | PID of the network interface's thread.

## Members

#### `public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` `[`netif`](#structgnrc__netif__t_1a3628afb76c1e226e15b0b6b0cdd74e26) 

network interface descriptor

#### `public const `[`gnrc_netif_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gacad0368e2e6e50fe0faecd208a6f6828)` * `[`ops`](#structgnrc__netif__t_1a1fb8b3d4e737b508c1cd9a675e6d035f) 

Operations of the network interface.

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * `[`dev`](#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15) 

[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) device of the network interface.

#### `public `[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` `[`mutex`](#structgnrc__netif__t_1a1c83f4e05deadbbff86d34da096d7392) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) of the interface.

#### `public `[`netstats_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netstats.md#structnetstats__t)` `[`stats`](#structgnrc__netif__t_1a1df58e245289ad0d75ee99ccd8f92b92) 

transceiver's statistics

#### `public `[`gnrc_netif_lorawan_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__lorawan__t)` `[`lorawan`](#structgnrc__netif__t_1a105e71082c1f49f2ff749895a2358a30) 

LoRaWAN component.

#### `public `[`gnrc_netif_ipv6_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__ipv6__t)` `[`ipv6`](#structgnrc__netif__t_1aaa394a6f526275ae4d3cabfe0ab3e32a) 

IPv6 component.

#### `public `[`gnrc_netif_mac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__mac__t)` `[`mac`](#structgnrc__netif__t_1a646f694b7b5818e864ddafcbae185cad) 

[Common MAC module](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__mac) component

#### `public `[`msg_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmsg__bus__t)` `[`bus`](#structgnrc__netif__t_1a19716960a6addfa027a3d973e139c0bc) 

Event Message Bus.

#### `public uint32_t `[`flags`](#structgnrc__netif__t_1a1e33d5441ba953f822ec5f4218b6347a) 

Flags for the interface.

**See also**: net_gnrc_netif_flags

#### `public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` `[`evq`](#structgnrc__netif__t_1a1af8a83b3748c58e483fe7e5088b7ce4) 

Event queue for asynchronous events.

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event_isr`](#structgnrc__netif__t_1a4b4e40b64b77e89bf0ff79f29cb3449b) 

ISR event for the network device.

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event_tx_done`](#structgnrc__netif__t_1ae987ee216ccbb414cf4f85f7f48eb86c) 

TX done event for the network device.

Only provided with module `netdev_new_api`

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`tx_pkt`](#structgnrc__netif__t_1abd55cefbed37220ea20ce67482a783e8) 

Outgoing frame that is currently transmitted.

Only provided with module `netdev_new_api`

This needs to be freed by gnrc_netif once TX is done

#### `public uint8_t `[`l2addr`](#structgnrc__netif__t_1a52ce74511647e0c93cfb827a6f614dac) 

The link-layer address currently used as the source address on this interface.

Only available if [GNRC_NETIF_L2ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947) > 0

#### `public uint8_t `[`l2addr_len`](#structgnrc__netif__t_1a4557569c7ffff1b3bb940e7823b155f5) 

Length in bytes of [gnrc_netif_t::l2addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a52ce74511647e0c93cfb827a6f614dac).

Only available if [GNRC_NETIF_L2ADDR_MAXLEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__conf_1ga907d9c7ff80e5dbd6f338f02bf276947) > 0

#### `public `[`gnrc_netif_dedup_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_dedup.md#structgnrc__netif__dedup__t)` `[`last_pkt`](#structgnrc__netif__t_1a660dfa8a5d64b92c2911735f113ffcd8) 

Last received packet information.

Only available with [Link-layer Broadcast deduplication](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__dedup).

#### `public `[`gnrc_netif_6lo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structgnrc__netif__6lo__t)` `[`sixlo`](#structgnrc__netif__t_1a324b26288c265954ee10a8c1517de6eb) 

6Lo component

#### `public `[`gnrc_netif_pktq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif_pktq.md#structgnrc__netif__pktq__t)` `[`send_queue`](#structgnrc__netif__t_1afee7b42c9f4f8c74a1937448791a9c8a) 

Packet queue for sending.

Only available with [Send queue for [Network interface API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__pktq).

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg_queue`](#structgnrc__netif__t_1aab124131f1e93f73ea007b22f2c8d216) 

Message queue for the netif thread.

#### `public uint8_t `[`cur_hl`](#structgnrc__netif__t_1a3352b9009d6b3af888c8351572e8f83c) 

Current hop-limit for out-going packets.

#### `public uint8_t `[`device_type`](#structgnrc__netif__t_1a269e7bb2472a008176c8e173cd152600) 

Device type.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structgnrc__netif__t_1a48524d59f708cc987051ff1dafe51fe7) 

PID of the network interface's thread.

# struct `gnrc_netif_ops` 

**See also**: [gnrc_netif_ops_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gacad0368e2e6e50fe0faecd208a6f6828)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`init`](#structgnrc__netif__ops_1a2996b6882ce6ad7a86f072df9da8c80b) | Initializes and registers network interface.
`public int(* `[`send`](#structgnrc__netif__ops_1a86afb0a1108b6bbacf281c4aba13824c) | Send a [packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) over the network interface.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` *(* `[`recv`](#structgnrc__netif__ops_1af4a9b66278b6d7d7352ecfd4394fb861) | Receives a [packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) from the network interface.
`public int(* `[`get`](#structgnrc__netif__ops_1ae07c67f21356167679f13a1abd04f541) | Gets an option from the network interface.
`public int(* `[`set`](#structgnrc__netif__ops_1a3301d3571916757ee943a87945baac93) | Sets an option from the network interface.
`public void(* `[`msg_handler`](#structgnrc__netif__ops_1ad30ddbef3e34b6f4a51cff51a5af410d) | Message handler for network interface.

## Members

#### `public int(* `[`init`](#structgnrc__netif__ops_1a2996b6882ce6ad7a86f072df9da8c80b) 

Initializes and registers network interface.

`netif != NULL`

#### Parameters
* `netif` The network interface.

This function should init the device driver or MAC underlying MAC layer. This is called right before the interface's thread starts receiving messages. It is not necessary to lock the interface's mutex [gnrc_netif_t::mutex](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1a1c83f4e05deadbbff86d34da096d7392), since it is already locked. Set to [gnrc_netif_default_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga7517b110ad77784598da4e40c353431e) if you do not need any special initialization. If you do need special initialization, it is recommended to call [gnrc_netif_default_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga7517b110ad77784598da4e40c353431e) at the start of the custom initialization function set here. This function MUST call [netif_register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netif_1gaa356f13fc006043bf79169bb00707dd8) if the initialization is successful.

#### Returns
0 if the initialization of the device or MAC layer was successful 

#### Returns
negative errno on error.

#### `public int(* `[`send`](#structgnrc__netif__ops_1a86afb0a1108b6bbacf281c4aba13824c) 

Send a [packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) over the network interface.

`netif != NULL && pkt != NULL`

The function re-formats the content of `pkt` to a format expected by the [netdev_driver_t::send()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1a39585137953a92c1c58b5e0ad3262096) method of [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15) and releases the packet before returning (so no additional release should be required after calling this method).

#### Parameters
* `netif` The network interface. 

* `pkt` A packet to send.

#### Returns
The number of bytes actually sent on success 

#### Returns
-EBADMSG, if the [Generic network interface header](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr) in `pkt` is missing or is in an unexpected format. 

#### Returns
-ENOTSUP, if sending `pkt` in the given format isn't supported (e.g. empty payload with Ethernet). 

#### Returns
Any negative error code reported by [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15).

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` *(* `[`recv`](#structgnrc__netif__ops_1af4a9b66278b6d7d7352ecfd4394fb861) 

Receives a [packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) from the network interface.

`netif != NULL`

The function takes the bytes received via [netdev_driver_t::recv()](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_api.md#structnetdev__driver_1ae2c8cad80067e3b1f9979931ddb3cc8b) from [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15) and re-formats it to a [packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) containing a [Generic network interface header](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr) and a payload header in receive order.

#### Parameters
* `netif` The network interface.

#### Returns
The packet received. Contains the payload (with the type marked accordingly) and a [Generic network interface header](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif__hdr) in receive order. 

#### Returns
NULL, if [Packet buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf) was full.

#### `public int(* `[`get`](#structgnrc__netif__ops_1ae07c67f21356167679f13a1abd04f541) 

Gets an option from the network interface.

Use [gnrc_netif_get_from_netdev()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1gacef1ec847f603c4b55368476fa167018) to just get options from [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15).

#### Parameters
* `netif` The network interface. 

* `opt` The option parameters.

#### Returns
Number of bytes in `data`. 

#### Returns
-EOVERFLOW, if `max_len` is lesser than the required space. 

#### Returns
-ENOTSUP, if `opt` is not supported to be set. 

#### Returns
Any negative error code reported by [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15).

#### `public int(* `[`set`](#structgnrc__netif__ops_1a3301d3571916757ee943a87945baac93) 

Sets an option from the network interface.

Use [gnrc_netif_set_from_netdev()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif_1ga59885a7baa13748737e354272791ee43) to just set options from [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15).

#### Parameters
* `netif` The network interface. 

* `opt` The option parameters.

#### Returns
Number of bytes written to [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15). 

#### Returns
-EOVERFLOW, if `data_len` is greater than the allotted space in [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15) or [gnrc_netif_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t). 

#### Returns
-ENOTSUP, if `opt` is not supported to be set. 

#### Returns
Any negative error code reported by [gnrc_netif_t::dev](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netif.md#structgnrc__netif__t_1ab15db3d5a0a026ffa73487fdd84cbd15).

#### `public void(* `[`msg_handler`](#structgnrc__netif__ops_1ad30ddbef3e34b6f4a51cff51a5af410d) 

Message handler for network interface.

This message handler is used, when the network interface needs to handle message types beyond the ones defined in [netapi](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi). Leave NULL if this is not the case.

#### Parameters
* `netif` The network interface. 

* `msg` Message to be handled.

