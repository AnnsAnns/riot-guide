---
title: api-pkg_nimble_netif.md
description: api-pkg_nimble_netif.md
---
# group `pkg_nimble_netif` 

GNRC netif implementation for NimBLE, enabling the integration of NimBLE into GNRC.

AboutThis NimBLE submodule provides a GNRC netif wrapper for integrating NimBLE with GNRC and other network stacks using netif (e.g. CCNlite).

ConceptAccording to the IPv6-over-BLE standards (RFC7668 and IPSP), this module exposes a (configurable) number of point-to-point BLE connections as a single network device to BLE. Unicast traffic is only send using the corresponding BLE connection. Multicast and Broadcast packets are duplicated and send via each open BLE connection.

StructureThe netif implementation is able to handle multiple connections simultaneously. The maximum number of concurrent connections is configured during compile time, using NimBLEs MYNEWT_VAL_BLE_MAX_CONNECTIONS option. Dependent on this value, the netif implementation takes care of allocation all the memory needed. The API of this submodule uses simply integer values to reference the used connection context (like file descriptors in linux).

Like any other GNRC network device, the NimBLE netif wrapper runs in its own thread. This thread is started and configured by the common netif code. All send and get/set operations are handled by this thread. For efficiency reasons, receiving of data is however handled completely in the NimBLE host thread, from where the received data is directly passed on to the corresponding GNRC thread.

Although the wrapper hooks into GNRC using the netif interface, it does need to implement parts of the netdev interface as well. This is done where needed.

UsageThis submodule is designed to work fully asynchronous, in the same way as the NimBLE interfaces are designed. All functions in this submodule will only trigger the intended action. Once this action is complete, the module will report the result asynchronously using the configured callback.

So before using this module, make sure to register a callback using the [nimble_netif_eventcb()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1ga8c69c50d55e3243513926468c393e29d) function.

After this, this module provides functions for managing BLE connections to other devices. Once these connections are established, this module takes care of mapping IP packets to the corresponding connections.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NIMBLE_NETIF_MAX_CONN`](#group__pkg__nimble__netif_1ga96fd8dfb7c418167c3d5ef15ba0ecf63)            | The maximum number of BLE connections that can be open concurrently.
`define `[`NIMBLE_NETIF_CID`](#group__pkg__nimble__netif_1gab906e8f8c1c3050d939beecd85cb8122)            | Default L2CAP channel ID to use.
`define `[`NIMBLE_NETIF_MTU`](#group__pkg__nimble__netif_1gaa6b816509db8b8636561af40fcc5e137)            | Default MTU size supported by the NimBLE netif wrapper.
`define `[`NIMBLE_NETIF_CONN_ITVL_SPACING`](#group__pkg__nimble__netif_1ga9b419322b478b4f813f610fec02f308f)            | Set to > 0 to enforce different connection intervals for each of the nodes BLE connections.
`enum `[`@315`](#group__pkg__nimble__netif_1gaf01802ada3cad45fab403a42f8a2e9c2)            | Flags for enabling legacy advertisement and high-duty cycle mode when accepting incoming connections.
`enum `[`nimble_netif_event_t`](#group__pkg__nimble__netif_1gad9c66b9bf9e80febcd781ef294a73348)            | Event types triggered by the NimBLE netif module.
`enum `[`@316`](#group__pkg__nimble__netif_1gaa0ead9a390ae1a2e9537f8ea60f4f355)            | Flags describing the state of a single connection context.
`public void `[`nimble_netif_init`](#group__pkg__nimble__netif_1ga571a0f63aa1f6d4c3a8a4588d2b971b2)`(void)`            | Initialize the netif implementation, spawns the netif thread.
`public void `[`nimble_netif_eventcb`](#group__pkg__nimble__netif_1ga8c69c50d55e3243513926468c393e29d)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)`            | Register a global event callback, servicing all NimBLE connections.
`public int `[`nimble_netif_connect`](#group__pkg__nimble__netif_1gacc2e46a7c9df28a3a839a63bbf74fc8e)`(const ble_addr_t * addr,const `[`nimble_netif_connect_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif.md#structnimble__netif__connect__cfg__t)` * cfg)`            | Open a BLE connection as BLE master.
`public int `[`nimble_netif_close`](#group__pkg__nimble__netif_1gaa9658e377716016cd802948d9ed1778c)`(int handle)`            | Close the connection with the given handle.
`public int `[`nimble_netif_accept`](#group__pkg__nimble__netif_1ga617f7b5ed8b5dbbe5202634fcc964164)`(const uint8_t * ad,size_t ad_len,const `[`nimble_netif_accept_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif.md#structnimble__netif__accept__cfg__t)` * cfg)`            | Accept incoming connections by starting to advertise this node.
`public int `[`nimble_netif_accept_direct`](#group__pkg__nimble__netif_1ga1aded4c813b83361451a559b6652a098)`(const ble_addr_t * addr,const `[`nimble_netif_accept_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif.md#structnimble__netif__accept__cfg__t)` * cfg)`            | Wait for an incoming connection from a specific peer, sending directed advertisements.
`public int `[`nimble_netif_accept_stop`](#group__pkg__nimble__netif_1ga9ce06535419844779d9318dd79989a55)`(void)`            | Stop accepting incoming connections (stop advertising) *.
`public int `[`nimble_netif_update`](#group__pkg__nimble__netif_1ga27d8e3b90a0358190d7772fd2973fdbe)`(int handle,const struct ble_gap_upd_params * conn_params)`            | Update the connection parameters for the given connection.
`public int `[`nimble_netif_used_chanmap`](#group__pkg__nimble__netif_1gaad013f6bfe5c4e8ef58d8e641d9036ec)`(int handle,uint8_t map)`            | Get the currently used channel map for the given connection as bitmap.
`struct `[`nimble_netif_accept_cfg_t`](#structnimble__netif__accept__cfg__t) | Parameter set used to configure accepting connections (advertising)
`struct `[`nimble_netif_connect_cfg_t`](#structnimble__netif__connect__cfg__t) | Parameter set used to configure connection initiation.

## Members

#### `define `[`NIMBLE_NETIF_MAX_CONN`](#group__pkg__nimble__netif_1ga96fd8dfb7c418167c3d5ef15ba0ecf63) 

The maximum number of BLE connections that can be open concurrently.

This value *must* be <= MYNEWT_VAL_BLE_MAX_CONNECTIONS

#### `define `[`NIMBLE_NETIF_CID`](#group__pkg__nimble__netif_1gab906e8f8c1c3050d939beecd85cb8122) 

Default L2CAP channel ID to use.

#### `define `[`NIMBLE_NETIF_MTU`](#group__pkg__nimble__netif_1gaa6b816509db8b8636561af40fcc5e137) 

Default MTU size supported by the NimBLE netif wrapper.

#### `define `[`NIMBLE_NETIF_CONN_ITVL_SPACING`](#group__pkg__nimble__netif_1ga9b419322b478b4f813f610fec02f308f) 

Set to > 0 to enforce different connection intervals for each of the nodes BLE connections.

Enabling this option will enforce that every BLE connection a node maintains, independent of the nodes role, uses a different connection interval. The value of NIMBLE_NETIF_CONN_ITVL_SPACING specifies the minimum spacing between connection intervals as multiple of 1,25ms. E.g. a value of 2 will force each connection to use a connection interval that is at least 2.5ms different from all other used connection intervals.

If a node is the coordinator of a connection, it will generate a connection interval for each new connection based on a random value by adhering to the spacing constraint.

If a node is the subordinate of a new connection, it will check if the given connection interval is fulfilling the spacing constraint with respect to already existing connections of that node. If the connection interval of the new connection is not properly spaced, the node will drop the connection right away, giving the coordinator node the possibly to reconnect with a different connection interval.

#### `enum `[`@315`](#group__pkg__nimble__netif_1gaf01802ada3cad45fab403a42f8a2e9c2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NIMBLE_NETIF_FLAG_LEGACY            | use legacy advertising mode
NIMBLE_NETIF_FLAG_HD_MODE            | use high duty cycle mode, only valid for direct advertising

Flags for enabling legacy advertisement and high-duty cycle mode when accepting incoming connections.

#### `enum `[`nimble_netif_event_t`](#group__pkg__nimble__netif_1gad9c66b9bf9e80febcd781ef294a73348) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NIMBLE_NETIF_ACCEPTING            | accepting incoming connections
NIMBLE_NETIF_ACCEPT_STOP            | stop accepting incoming connections
NIMBLE_NETIF_INIT_MASTER            | conn.
NIMBLE_NETIF_INIT_SLAVE            | conn.
NIMBLE_NETIF_CONNECTED_MASTER            | connection established as master
NIMBLE_NETIF_CONNECTED_SLAVE            | connection established as slave
NIMBLE_NETIF_CLOSED_MASTER            | connection closed (we were master)
NIMBLE_NETIF_CLOSED_SLAVE            | connection closed (we were slave)
NIMBLE_NETIF_ABORT_MASTER            | connection est.
NIMBLE_NETIF_ABORT_SLAVE            | connection est.
NIMBLE_NETIF_CONN_UPDATED            | connection parameter update done

Event types triggered by the NimBLE netif module.

#### `enum `[`@316`](#group__pkg__nimble__netif_1gaa0ead9a390ae1a2e9537f8ea60f4f355) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NIMBLE_NETIF_L2CAP_CLIENT            | L2CAP client.
NIMBLE_NETIF_L2CAP_SERVER            | L2CAP server.
NIMBLE_NETIF_L2CAP_CONNECTED            | L2CAP is connected.
NIMBLE_NETIF_GAP_MASTER            | GAP master.
NIMBLE_NETIF_GAP_SLAVE            | GAP slave.
NIMBLE_NETIF_GAP_CONNECTED            | GAP is connected.
NIMBLE_NETIF_ADV            | currently advertising
NIMBLE_NETIF_CONNECTING            | connection in progress
NIMBLE_NETIF_UNUSED            | context unused
NIMBLE_NETIF_ANY            | match any state

Flags describing the state of a single connection context.

#### `public void `[`nimble_netif_init`](#group__pkg__nimble__netif_1ga571a0f63aa1f6d4c3a8a4588d2b971b2)`(void)` 

Initialize the netif implementation, spawns the netif thread.

This function is meant to be called once during system initialization, i.e. auto-init.

#### `public void `[`nimble_netif_eventcb`](#group__pkg__nimble__netif_1ga8c69c50d55e3243513926468c393e29d)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)` 

Register a global event callback, servicing all NimBLE connections.

The event callback is always executed in NimBLE's host thread

#### Parameters
* `cb` event callback to register, may be NULL

#### `public int `[`nimble_netif_connect`](#group__pkg__nimble__netif_1gacc2e46a7c9df28a3a839a63bbf74fc8e)`(const ble_addr_t * addr,const `[`nimble_netif_connect_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif.md#structnimble__netif__connect__cfg__t)` * cfg)` 

Open a BLE connection as BLE master.

#### Parameters
* `addr` address of the advertising BLE slave, in the NimBLE addr format (little endian) 

* `cfg` connection parameters

#### Returns
the used connection handle on success 

#### Returns
-EBUSY if already connected to the given address or if a connection setup procedure is in progress 

#### Returns
-ENOMEM if no connection context memory is available 

#### Returns
-ECANCELED if unable to find valid connection interval 

#### Returns
-EINVAL if unable to apply given PHY mode 

#### Returns
-EIO on all other NimBLE errors

#### `public int `[`nimble_netif_close`](#group__pkg__nimble__netif_1gaa9658e377716016cd802948d9ed1778c)`(int handle)` 

Close the connection with the given handle.

#### Parameters
* `handle` handle for the connection to be closed

#### Returns
0 on success 

#### Returns
-EINVAL if the handle is invalid 

#### Returns
-ENOTCONN if context for given handle is not connected 

#### Returns
-EIO on all other NimBLE errors

#### `public int `[`nimble_netif_accept`](#group__pkg__nimble__netif_1ga617f7b5ed8b5dbbe5202634fcc964164)`(const uint8_t * ad,size_t ad_len,const `[`nimble_netif_accept_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif.md#structnimble__netif__accept__cfg__t)` * cfg)` 

Accept incoming connections by starting to advertise this node.

#### Parameters
* `ad` advertising data (in BLE AD format) 

* `ad_len` length of `ad` in bytes 

* `cfg` advertising parameters to use

#### Returns
0 on success 

#### Returns
-EALREADY if already advertising 

#### Returns
-ENOMEM on insufficient connection memory 

#### Returns
-EINVAL on invalid configuration parameters 

#### Returns
-ECANCELED on other errors

#### `public int `[`nimble_netif_accept_direct`](#group__pkg__nimble__netif_1ga1aded4c813b83361451a559b6652a098)`(const ble_addr_t * addr,const `[`nimble_netif_accept_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif.md#structnimble__netif__accept__cfg__t)` * cfg)` 

Wait for an incoming connection from a specific peer, sending directed advertisements.

#### Parameters
* `addr` BLE address of the target peer 

* `cfg` advertising parameters to use

#### Returns
0 on success 

#### Returns
-EALREADY if already advertising 

#### Returns
-ENOMEM on insufficient connection memory 

#### Returns
-EINVAL on invalid configuration parameters 

#### Returns
-ECANCELED on other errors

#### `public int `[`nimble_netif_accept_stop`](#group__pkg__nimble__netif_1ga9ce06535419844779d9318dd79989a55)`(void)` 

Stop accepting incoming connections (stop advertising) *.

#### Returns
0 on success 

#### Returns
-EALREADY if not currently advertising 

#### Returns
-EIO on other NimBLE errors

#### `public int `[`nimble_netif_update`](#group__pkg__nimble__netif_1ga27d8e3b90a0358190d7772fd2973fdbe)`(int handle,const struct ble_gap_upd_params * conn_params)` 

Update the connection parameters for the given connection.

#### Parameters
* `handle` connection handle 

* `conn_params` new connection parameters to apply

#### Returns
0 on success 

#### Returns
-ENOTCONN if handle does not point to a connection 

#### Returns
-ECANCELED if applying the given parameters failed

#### `public int `[`nimble_netif_used_chanmap`](#group__pkg__nimble__netif_1gaad013f6bfe5c4e8ef58d8e641d9036ec)`(int handle,uint8_t map)` 

Get the currently used channel map for the given connection as bitmap.

#### Parameters
* `handle` connection handle 

* `map` used channel map, map[0] denotes channels 0 to 7, map[1] chan 8-15, ..., map[5] channels 33 to 36. **must** be able to hold 5 bytes.

#### Returns
0 on success 

#### Returns
-ENOTCONN if handle dos not point to a connection 

#### Returns
-ECANCELED if reading the channel map failed otherwise

# struct `nimble_netif_accept_cfg_t` 

Parameter set used to configure accepting connections (advertising)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`flags`](#structnimble__netif__accept__cfg__t_1af313860c215ff7b234f3121b3f9c18a7) | flags
`public uint8_t `[`channel_map`](#structnimble__netif__accept__cfg__t_1a61d669e7e05e595e28f5a1f780cd92fd) | specify custom channel map
`public uint8_t `[`own_addr_type`](#structnimble__netif__accept__cfg__t_1aff65aa345b74dcf53d3a4a0d4e2f5681) | specify our own address type to use
`public int8_t `[`tx_power`](#structnimble__netif__accept__cfg__t_1a963920eaa473a3dceaf7ea694888195d) | specify TX power to be used
`public uint32_t `[`adv_itvl_ms`](#structnimble__netif__accept__cfg__t_1a0714eb57a1fdfe8bfc32ea82d942c4c3) | advertising interval [ms]
`public uint32_t `[`timeout_ms`](#structnimble__netif__accept__cfg__t_1a1f6c9c7b3356b3cb81ac2a941fe27289) | stop accepting after this time [ms]
`public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`primary_phy`](#structnimble__netif__accept__cfg__t_1a24bf722f3a3c555ba9efec3133be8209) | primary PHY mode
`public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`secondary_phy`](#structnimble__netif__accept__cfg__t_1af768bb29f56e1d2552284442af570198) | secondary PHY mode

## Members

#### `public uint8_t `[`flags`](#structnimble__netif__accept__cfg__t_1af313860c215ff7b234f3121b3f9c18a7) 

flags

#### `public uint8_t `[`channel_map`](#structnimble__netif__accept__cfg__t_1a61d669e7e05e595e28f5a1f780cd92fd) 

specify custom channel map

#### `public uint8_t `[`own_addr_type`](#structnimble__netif__accept__cfg__t_1aff65aa345b74dcf53d3a4a0d4e2f5681) 

specify our own address type to use

#### `public int8_t `[`tx_power`](#structnimble__netif__accept__cfg__t_1a963920eaa473a3dceaf7ea694888195d) 

specify TX power to be used

#### `public uint32_t `[`adv_itvl_ms`](#structnimble__netif__accept__cfg__t_1a0714eb57a1fdfe8bfc32ea82d942c4c3) 

advertising interval [ms]

#### `public uint32_t `[`timeout_ms`](#structnimble__netif__accept__cfg__t_1a1f6c9c7b3356b3cb81ac2a941fe27289) 

stop accepting after this time [ms]

#### `public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`primary_phy`](#structnimble__netif__accept__cfg__t_1a24bf722f3a3c555ba9efec3133be8209) 

primary PHY mode

#### `public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`secondary_phy`](#structnimble__netif__accept__cfg__t_1af768bb29f56e1d2552284442af570198) 

secondary PHY mode

# struct `nimble_netif_connect_cfg_t` 

Parameter set used to configure connection initiation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`scan_itvl_ms`](#structnimble__netif__connect__cfg__t_1af5b47ee9413ca7e4c61d67a5ec7f7352) | scan interval [ms]
`public uint16_t `[`scan_window_ms`](#structnimble__netif__connect__cfg__t_1a3a2486baf14292846ce1afe3e7664611) | scan window [ms]
`public uint16_t `[`conn_itvl_min_ms`](#structnimble__netif__connect__cfg__t_1a79d7ffd208f632a01cbd76fa5066d985) | connection interval, lower bound [ms]
`public uint16_t `[`conn_itvl_max_ms`](#structnimble__netif__connect__cfg__t_1aa035247ec3953c7c06715eebff925382) | connection interval, upper bound [ms]
`public uint16_t `[`conn_supervision_timeout_ms`](#structnimble__netif__connect__cfg__t_1adfa22e9d8b99dc0caed92c0305d69fb4) | supervision timeout [ms]
`public uint16_t `[`conn_slave_latency`](#structnimble__netif__connect__cfg__t_1a21703e2498c948954fce0207645c021a) | slave latency
`public uint32_t `[`timeout_ms`](#structnimble__netif__connect__cfg__t_1ac21e838f9ba89a7727a86213487deeb5) | abort connection initiation after this time [ms]
`public uint8_t `[`phy_mode`](#structnimble__netif__connect__cfg__t_1ab0e46029e5e8378bf04f619abb9b7136) | PHY mode used for the connection.
`public uint8_t `[`own_addr_type`](#structnimble__netif__connect__cfg__t_1a420a6adc455b6dfca7aa93fb8a229938) | specify our own address type to use

## Members

#### `public uint16_t `[`scan_itvl_ms`](#structnimble__netif__connect__cfg__t_1af5b47ee9413ca7e4c61d67a5ec7f7352) 

scan interval [ms]

#### `public uint16_t `[`scan_window_ms`](#structnimble__netif__connect__cfg__t_1a3a2486baf14292846ce1afe3e7664611) 

scan window [ms]

#### `public uint16_t `[`conn_itvl_min_ms`](#structnimble__netif__connect__cfg__t_1a79d7ffd208f632a01cbd76fa5066d985) 

connection interval, lower bound [ms]

#### `public uint16_t `[`conn_itvl_max_ms`](#structnimble__netif__connect__cfg__t_1aa035247ec3953c7c06715eebff925382) 

connection interval, upper bound [ms]

#### `public uint16_t `[`conn_supervision_timeout_ms`](#structnimble__netif__connect__cfg__t_1adfa22e9d8b99dc0caed92c0305d69fb4) 

supervision timeout [ms]

#### `public uint16_t `[`conn_slave_latency`](#structnimble__netif__connect__cfg__t_1a21703e2498c948954fce0207645c021a) 

slave latency

#### `public uint32_t `[`timeout_ms`](#structnimble__netif__connect__cfg__t_1ac21e838f9ba89a7727a86213487deeb5) 

abort connection initiation after this time [ms]

#### `public uint8_t `[`phy_mode`](#structnimble__netif__connect__cfg__t_1ab0e46029e5e8378bf04f619abb9b7136) 

PHY mode used for the connection.

#### `public uint8_t `[`own_addr_type`](#structnimble__netif__connect__cfg__t_1a420a6adc455b6dfca7aa93fb8a229938) 

specify our own address type to use

