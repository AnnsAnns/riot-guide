---
title: api-pkg_nimble_statconn.md
description: api-pkg_nimble_statconn.md
---
# group `pkg_nimble_statconn` 

Static connection manager for NimBLE netif that keeps opens connections on demand and takes care of keeping them open.

**This feature is experimental!**

WARNINGThis module is highly experimental! Expect bugs, instabilities and sudden API changes :-)

AboutStatconn is the implementation of a static connection manager for the NimBLE netif module. It initiates new connections when told and additionally takes care of reopening connections in case of connection loss.

UsageA node can either be a master, the one initiating the connection, or a slave, the one advertising its presence, w.r.t. to BLE connections. To open a connection between two nodes, call [nimble_statconn_add_slave()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__statconn_1ga52f36085ab5d1de08b2ad33cc35364f3) with the BLE address of the slave node on the designated master node and call [nimble_statconn_add_master()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__statconn_1ga4bc4dbf8957fbba42be1c1e87986e145) with the address of the master node on the designated slave node. From that point on, statconn will take care of opening and maintaining the connection between these two nodes.

ConfigurationThis module is configured completely statically. All relevant configuration options are set at compile time using a couple of macros.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NIMBLE_STATCONN_ADV_ITVL_MS`](#group__pkg__nimble__statconn_1gaca92db297a62148a097382263da24825)            | Advertising interval used when in advertising mode [in ms].
`define `[`NIMBLE_STATCONN_CONN_WIN_MS`](#group__pkg__nimble__statconn_1gac2e76df9bdda898ba393a82085865fca)            | Scan window used when opening new connections [in ms].
`define `[`NIMBLE_STATCONN_CONN_TIMEOUT_MS`](#group__pkg__nimble__statconn_1ga2b9e878d692ba62498387fd85515aff1)            | Opening a new connection is aborted after this time [in ms].
`define `[`NIMBLE_STATCONN_CONN_ITVL_MIN_MS`](#group__pkg__nimble__statconn_1ga4d45c2d36e7395fd3107b42ba5e18bfb)            | Minimum connection interval used when opening a new connection.
`define `[`NIMBLE_STATCONN_CONN_ITVL_MAX_MS`](#group__pkg__nimble__statconn_1ga7b93bb27c8af48e17079c041b7eb2bbd)            | Maximum connection interval to use.
`define `[`NIMBLE_STATCONN_CONN_LATENCY`](#group__pkg__nimble__statconn_1ga7eae8602cf1dbc37a9114fd2e6b451d3)            | Slave latency used for new connections [# of connection events].
`define `[`NIMBLE_STATCONN_CONN_SUPERTO_MS`](#group__pkg__nimble__statconn_1gaa8208cab13286d6f8e75389c45198a8b)            | Supervision timeout used for new connections [in ms].
`define `[`NIMBLE_STATCONN_PHY_MODE`](#group__pkg__nimble__statconn_1ga75fffe9d6038e8fe5214377093f054dc)            | BLE PHY mode used by statconn.
`public void `[`nimble_statconn_init`](#group__pkg__nimble__statconn_1gaf7f64cab376c1eb38eb937aeeb271593)`(void)`            | Initialize the statconn module.
`public void `[`nimble_statconn_eventcb`](#group__pkg__nimble__statconn_1gafb7c3ad1071e9bfc19e8496f08e5acd9)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)`            | Register a callback that is called on netif events.
`public int `[`nimble_statconn_add_master`](#group__pkg__nimble__statconn_1ga4bc4dbf8957fbba42be1c1e87986e145)`(const uint8_t * addr,const `[`nimble_statconn_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_statconn.md#structnimble__statconn__cfg__t)` * cfg)`            | Connect to peer (master) with a given address as slave.
`public int `[`nimble_statconn_add_slave`](#group__pkg__nimble__statconn_1ga52f36085ab5d1de08b2ad33cc35364f3)`(const uint8_t * addr,const `[`nimble_statconn_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_statconn.md#structnimble__statconn__cfg__t)` * cfg)`            | Connect to a peer (slave) with a given address as master.
`public int `[`nimble_statconn_rm`](#group__pkg__nimble__statconn_1gaa7af88c59698176666109a4b55ca1ee4)`(const uint8_t * addr)`            | Remove the connection to the given peer.
`struct `[`nimble_statconn_cfg_t`](#structnimble__statconn__cfg__t) | Statconn connection parameters.

## Members

#### `define `[`NIMBLE_STATCONN_ADV_ITVL_MS`](#group__pkg__nimble__statconn_1gaca92db297a62148a097382263da24825) 

Advertising interval used when in advertising mode [in ms].

#### `define `[`NIMBLE_STATCONN_CONN_WIN_MS`](#group__pkg__nimble__statconn_1gac2e76df9bdda898ba393a82085865fca) 

Scan window used when opening new connections [in ms].

#### `define `[`NIMBLE_STATCONN_CONN_TIMEOUT_MS`](#group__pkg__nimble__statconn_1ga2b9e878d692ba62498387fd85515aff1) 

Opening a new connection is aborted after this time [in ms].

#### `define `[`NIMBLE_STATCONN_CONN_ITVL_MIN_MS`](#group__pkg__nimble__statconn_1ga4d45c2d36e7395fd3107b42ba5e18bfb) 

Minimum connection interval used when opening a new connection.

The actual used connection interval will be a random value ranging from [NIMBLE_STATCONN_CONN_ITVL_MIN_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__statconn_1ga4d45c2d36e7395fd3107b42ba5e18bfb) to [NIMBLE_STATCONN_CONN_ITVL_MAX_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__statconn_1ga7b93bb27c8af48e17079c041b7eb2bbd). Set both variables to the same value to use a fixed connection interval. [in ms]

#### `define `[`NIMBLE_STATCONN_CONN_ITVL_MAX_MS`](#group__pkg__nimble__statconn_1ga7b93bb27c8af48e17079c041b7eb2bbd) 

Maximum connection interval to use.

See [NIMBLE_STATCONN_CONN_ITVL_MIN_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__statconn_1ga4d45c2d36e7395fd3107b42ba5e18bfb) for more information. [in ms]

#### `define `[`NIMBLE_STATCONN_CONN_LATENCY`](#group__pkg__nimble__statconn_1ga7eae8602cf1dbc37a9114fd2e6b451d3) 

Slave latency used for new connections [# of connection events].

#### `define `[`NIMBLE_STATCONN_CONN_SUPERTO_MS`](#group__pkg__nimble__statconn_1gaa8208cab13286d6f8e75389c45198a8b) 

Supervision timeout used for new connections [in ms].

#### `define `[`NIMBLE_STATCONN_PHY_MODE`](#group__pkg__nimble__statconn_1ga75fffe9d6038e8fe5214377093f054dc) 

BLE PHY mode used by statconn.

This value is only used if statconn is used in its extended mode (module `nimble_statconn_ext`)

#### `public void `[`nimble_statconn_init`](#group__pkg__nimble__statconn_1gaf7f64cab376c1eb38eb937aeeb271593)`(void)` 

Initialize the statconn module.

This function **must** only be called once. Typically this is done during system initialization via auto-init.

#### `public void `[`nimble_statconn_eventcb`](#group__pkg__nimble__statconn_1gafb7c3ad1071e9bfc19e8496f08e5acd9)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)` 

Register a callback that is called on netif events.

The registered callback function is a simple pass-through of nimble_netif events. The callback is executed in the context of NimBLE's host thread.

#### Parameters
* `cb` event callback to register, may be NULL

#### `public int `[`nimble_statconn_add_master`](#group__pkg__nimble__statconn_1ga4bc4dbf8957fbba42be1c1e87986e145)`(const uint8_t * addr,const `[`nimble_statconn_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_statconn.md#structnimble__statconn__cfg__t)` * cfg)` 

Connect to peer (master) with a given address as slave.

Adding a master will make this node advertise itself to wait for an incoming connection by that master.

#### Parameters
* `addr` BLE address of the peer 

* `cfg` additional connection parameters, set to NULL to apply default values

#### Returns
0 if peer was successfully added 

#### Returns
-EALREADY if the peer address is already in use 

#### Returns
-ENOMEM if no empty connection slot is available 

#### Returns
-EINVAL if invalid configuration parameters are given

#### `public int `[`nimble_statconn_add_slave`](#group__pkg__nimble__statconn_1ga52f36085ab5d1de08b2ad33cc35364f3)`(const uint8_t * addr,const `[`nimble_statconn_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_statconn.md#structnimble__statconn__cfg__t)` * cfg)` 

Connect to a peer (slave) with a given address as master.

#### Parameters
* `addr` BLE address of the peer 

* `cfg` additional connection parameters, set to NULL to apply default values

#### Returns
0 if peer was successfully added 

#### Returns
-EALREADY if the peer address is already in use 

#### Returns
-ENOMEM if no empty connection slot is available 

#### Returns
-EINVAL if invalid configuration parameters are given

#### `public int `[`nimble_statconn_rm`](#group__pkg__nimble__statconn_1gaa7af88c59698176666109a4b55ca1ee4)`(const uint8_t * addr)` 

Remove the connection to the given peer.

#### Parameters
* `addr` BLE address of the peer

#### Returns
0 if peer was successfully removed 

#### Returns
-ENOTCONN if given address is not managed

# struct `nimble_statconn_cfg_t` 

Statconn connection parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`phy_mode`](#structnimble__statconn__cfg__t_1aee0c175ecd2452d36c1da3472740bda9) | BLE PHY mode used for the connection.

## Members

#### `public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`phy_mode`](#structnimble__statconn__cfg__t_1aee0c175ecd2452d36c1da3472740bda9) 

BLE PHY mode used for the connection.

