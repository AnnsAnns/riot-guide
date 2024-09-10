---
title: api-pkg_nimble_autoconn.md
description: api-pkg_nimble_autoconn.md
---
# group `pkg_nimble_autoconn` 

Simple connection manager that automatically opens BLE connections to any node that fits some given filter criteria.

**This feature is experimental!**

WARNINGThis module is highly experimental! Expect bugs, instabilities and sudden API changes :-)

AboutThis NimBLE submodule implements a connection manager for BLE. It takes care of scanning, advertising, and opening connections to neighboring nodes. For this autoconn periodically switches between advertising and scanning mode, hence from accepting incoming connection requests to scanning actively for new neighbors.

ConceptThe IETF and BT SIG standards describing IP-over-BLE only describe how to transfer IP data over L2CAP connection oriented channels. But they do not say anything about when BLE connections should be established between two BLE nodes in the first place. While this can be done manually (e.g. via RIOTs `ble` shell command), this is certainly no option in massive M2M deployments.

To enable nodes to automatically connect to their neighbors, autoconn implements a naive strategy which makes nodes to connect to any neighbor they see, as long as the neighbor signals a predefined set of capabilities.

In particular, neighbors are simply filtered by looking at the 16-bit service UUIDs included in the `Incomplete List of 16-bit Service UUIDs` field in the advertising data that is received from neighbors.

The logical network topology (as seen by IP) is formed by the established BLE link layer connections. It is important to node, that the autoconn module will form a random topology on the link layer, as no further context information is used for the connection decisions. This can potentially lead to fragmented, non-connected sub-networks in larger deployments!

State MachineAutoconn implements a state machine, that switches a nodes role periodically between scanning and advertising. To make sure, that nodes always have a chance to see each other, especially when booted at the same point in time, the intervals of each role consist of a constant amount of time plus a random interval. This way two nodes will eventually see each other and be able to establish a connection.

All timing values for the interval duration and the maximum amount of the random offset are configurable.

UsageIn the current state, the filtering of neighbors is hard coded into the autoconn module. Two options are implemented:

* connect to any neighbor capable of IP-over-BLE -> [BLE_GATT_SVC_IPSS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1gaddb36be01640aefd1cf9d1273092a4e3) UUID included in the BLE_GAP_AD_UUID16_INCOMP field of the received advertising data

* connect to any neighbor capable of NDN-over-BLE -> [BLE_GATT_SVC_NDNSS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__ble__defs_1ga917cc9eba844f34f5c71f9065668d6ff) UUID included in the BLE_GAP_AD_UUID16_INCOMP field of the received advertising data

The active filter used in autoconn is selected using one of two submodules during build time:

* `USEMDOULE += nimble_autoconn_ipsp`

* USEMODULE += nibmle_autoconn_ndnsp

The NDN support service (NDNSP) is defined by us and it is not at all standardized nor sanctioned by the BT SIG. For experimental use only...

Implementation Status

* The filter function could be more powerful. It is probably a good idea to extend this module to allow for passing custom filter functions using a function pointer

* Currently this module does not allow to use NimBLE as IP-over-BLE node and as a GATT server concurrently. This could be enabled by adding an additional callback function which exposes some/all GAP events to a user application (i.e. BLE_GAP_EVENT_SUBSCRIBE, BLE_GAP_EVENT_NOTIFY_RX, BLE_GAP_EVENT_NOTIFY_TX).

* It might make sense to get rid of the periodic switching between scanning and advertising in favor of doing both in parallel. This would simplify the code (and configuration) quite a bit. But in the past, there were severe stability issues with NimBLE doing this, so it needs to be evaluated in the future if this is a feasible option.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@314`](#group__pkg__nimble__autoconn_1gacf031a18714fab9c47677ce9eba30e70)            | Return codes used by the autoconn module.
`public int `[`nimble_autoconn_init`](#group__pkg__nimble__autoconn_1ga4104186cd847c39ff064bc6a4774ab62)`(const `[`nimble_autoconn_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoconn.md#structnimble__autoconn__params__t)` * params,const uint8_t * ad,size_t adlen)`            | Initialize and enable the autoconn module.
`public void `[`nimble_autoconn_eventcb`](#group__pkg__nimble__autoconn_1ga3c4f680c8cc944eff73beb5cd2bfd547)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)`            | Register a callback that is called on netif events.
`public int `[`nimble_autoconn_update`](#group__pkg__nimble__autoconn_1gacf71c33159e24daef7cbf59d95e65ea8)`(const `[`nimble_autoconn_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoconn.md#structnimble__autoconn__params__t)` * params,const uint8_t * ad,size_t adlen)`            | Update the used parameters (timing and node ID)
`public void `[`nimble_autoconn_enable`](#group__pkg__nimble__autoconn_1gaab65002584b89e7588bcf25e2893b82c)`(void)`            | Enable automated creation of new BLE connections.
`public void `[`nimble_autoconn_disable`](#group__pkg__nimble__autoconn_1ga07c0e1179a5ebfab831989e9c2725da4)`(void)`            | Disable the automated connection management.
`struct `[`nimble_autoconn_params_t`](#structnimble__autoconn__params__t) | Set of configuration parameters needed to run autoconn.

## Members

#### `enum `[`@314`](#group__pkg__nimble__autoconn_1gacf031a18714fab9c47677ce9eba30e70) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NIMBLE_AUTOCONN_OK            | like a walk in the park
NIMBLE_AUTOCONN_PARAMERR            | invalid parameters given
NIMBLE_AUTOCONN_ADERR            | error generating advertising data

Return codes used by the autoconn module.

#### `public int `[`nimble_autoconn_init`](#group__pkg__nimble__autoconn_1ga4104186cd847c39ff064bc6a4774ab62)`(const `[`nimble_autoconn_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoconn.md#structnimble__autoconn__params__t)` * params,const uint8_t * ad,size_t adlen)` 

Initialize and enable the autoconn module.

This function **must** only be called once. Typically this is during system initialization or at the beginning of the user application. Use [nimble_autoconn_update()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__autoconn_1gacf71c33159e24daef7cbf59d95e65ea8) to update parameters at runtime.

Autoconn expects nimble_netif to be initialized. So make sure [nimble_netif_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1ga571a0f63aa1f6d4c3a8a4588d2b971b2) was called before calling [nimble_autoconn_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__autoconn_1ga4104186cd847c39ff064bc6a4774ab62).

#### Parameters
* `params` timing parameters to use 

* `ad` advertising data, if NULL it is generated 

* `adlen` length of `ad` in bytes

#### `public void `[`nimble_autoconn_eventcb`](#group__pkg__nimble__autoconn_1ga3c4f680c8cc944eff73beb5cd2bfd547)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)` 

Register a callback that is called on netif events.

The registered callback function is a simple pass-through of nimble_netif events. The callback is executed in the context of NimBLE's host thread.

#### Parameters
* `cb` event callback to register, may be NULL

#### `public int `[`nimble_autoconn_update`](#group__pkg__nimble__autoconn_1gacf71c33159e24daef7cbf59d95e65ea8)`(const `[`nimble_autoconn_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_autoconn.md#structnimble__autoconn__params__t)` * params,const uint8_t * ad,size_t adlen)` 

Update the used parameters (timing and node ID)

#### Parameters
* `params` new parameters to apply 

* `ad` advertising data, if NULL it is generated 

* `adlen` length of `ad` in bytes

#### Returns
NIMBLE_AUTOCONN_OK if everything went fine 

#### Returns
NIMBLE_AUTOCONN_INVALID if given parameters can not be applied

#### `public void `[`nimble_autoconn_enable`](#group__pkg__nimble__autoconn_1gaab65002584b89e7588bcf25e2893b82c)`(void)` 

Enable automated creation of new BLE connections.

#### `public void `[`nimble_autoconn_disable`](#group__pkg__nimble__autoconn_1ga07c0e1179a5ebfab831989e9c2725da4)`(void)` 

Disable the automated connection management.

All existing connections are kept, only the scanning and advertising is canceled

# struct `nimble_autoconn_params_t` 

Set of configuration parameters needed to run autoconn.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`period_scan_ms`](#structnimble__autoconn__params__t_1a7e09ee3a529630d8ec82a589963ba7df) | amount of time spend in scanning mode [in ms]
`public uint32_t `[`period_adv_ms`](#structnimble__autoconn__params__t_1a3c0c71069b0cd19a5e6e8afd309038e2) | amount of time spend in advertising mode [in ms]
`public uint32_t `[`period_jitter_ms`](#structnimble__autoconn__params__t_1a0f290eb506a7f0c1932210923db7d98e) | a random value from 0 to this value is added to the duration of each scanning and advertising period [in ms]
`public uint32_t `[`adv_itvl_ms`](#structnimble__autoconn__params__t_1ac72d84ad3e809a4e14abb6e94f236d5b) | advertising interval used when in advertising mode [in ms]
`public uint32_t `[`scan_itvl_ms`](#structnimble__autoconn__params__t_1a185d00a7afec13c1040b0d5d111aebb7) | scan interval applied while in scanning state [in ms]
`public uint32_t `[`scan_win_ms`](#structnimble__autoconn__params__t_1a3829c40dd254bcc96308d2b0060877f9) | scan window applied while in scanning state [in ms]
`public uint32_t `[`conn_timeout_ms`](#structnimble__autoconn__params__t_1a254cb587295e3c9db99fc2274eaa1af8) | opening a new connection is aborted after this time [in ms]
`public uint32_t `[`conn_itvl_min_ms`](#structnimble__autoconn__params__t_1a899d3861e7b37b9de035b278927bac8e) | connection interval used when opening a new connection, lower bound.
`public uint32_t `[`conn_itvl_max_ms`](#structnimble__autoconn__params__t_1ab1346f1bb40890fdeae76888bb55a50c) | connection interval, upper bound [in ms]
`public uint16_t `[`conn_latency`](#structnimble__autoconn__params__t_1ae567e94c1c39648a85fb659163071aec) | slave latency used for new connections
`public uint32_t `[`conn_super_to_ms`](#structnimble__autoconn__params__t_1afe8298d71fae791debb43a21e2bfdc88) | supervision timeout used for new connections [in ms]
`public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`phy_mode`](#structnimble__autoconn__params__t_1acd3ba32c7639ae7effe71505f98889d7) | BLE PHY mode to use.
`public const char * `[`node_id`](#structnimble__autoconn__params__t_1a5198dc20d656237263cd66afb070a501) | node ID included in the advertising data, may be NULL

## Members

#### `public uint32_t `[`period_scan_ms`](#structnimble__autoconn__params__t_1a7e09ee3a529630d8ec82a589963ba7df) 

amount of time spend in scanning mode [in ms]

#### `public uint32_t `[`period_adv_ms`](#structnimble__autoconn__params__t_1a3c0c71069b0cd19a5e6e8afd309038e2) 

amount of time spend in advertising mode [in ms]

#### `public uint32_t `[`period_jitter_ms`](#structnimble__autoconn__params__t_1a0f290eb506a7f0c1932210923db7d98e) 

a random value from 0 to this value is added to the duration of each scanning and advertising period [in ms]

#### `public uint32_t `[`adv_itvl_ms`](#structnimble__autoconn__params__t_1ac72d84ad3e809a4e14abb6e94f236d5b) 

advertising interval used when in advertising mode [in ms]

#### `public uint32_t `[`scan_itvl_ms`](#structnimble__autoconn__params__t_1a185d00a7afec13c1040b0d5d111aebb7) 

scan interval applied while in scanning state [in ms]

#### `public uint32_t `[`scan_win_ms`](#structnimble__autoconn__params__t_1a3829c40dd254bcc96308d2b0060877f9) 

scan window applied while in scanning state [in ms]

#### `public uint32_t `[`conn_timeout_ms`](#structnimble__autoconn__params__t_1a254cb587295e3c9db99fc2274eaa1af8) 

opening a new connection is aborted after this time [in ms]

#### `public uint32_t `[`conn_itvl_min_ms`](#structnimble__autoconn__params__t_1a899d3861e7b37b9de035b278927bac8e) 

connection interval used when opening a new connection, lower bound.

[in ms]

#### `public uint32_t `[`conn_itvl_max_ms`](#structnimble__autoconn__params__t_1ab1346f1bb40890fdeae76888bb55a50c) 

connection interval, upper bound [in ms]

#### `public uint16_t `[`conn_latency`](#structnimble__autoconn__params__t_1ae567e94c1c39648a85fb659163071aec) 

slave latency used for new connections

#### `public uint32_t `[`conn_super_to_ms`](#structnimble__autoconn__params__t_1afe8298d71fae791debb43a21e2bfdc88) 

supervision timeout used for new connections [in ms]

#### `public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`phy_mode`](#structnimble__autoconn__params__t_1acd3ba32c7639ae7effe71505f98889d7) 

BLE PHY mode to use.

#### `public const char * `[`node_id`](#structnimble__autoconn__params__t_1a5198dc20d656237263cd66afb070a501) 

node ID included in the advertising data, may be NULL

