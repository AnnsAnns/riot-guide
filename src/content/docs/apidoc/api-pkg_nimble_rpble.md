---
title: api-pkg_nimble_rpble.md
description: api-pkg_nimble_rpble.md
---
# group `pkg_nimble_rpble` 

RPL-over-BLE for Nimble implementation.

AboutThis module implements a BLE connection manager the manages BLE connections for (multi-hop) IP over BLE networks based on meta data provided by RPL.

ConceptIn their initial state, after power up or reboot, nodes start to scan for BLE advertisements containing a specific advertising data (AD) field which holds information about RPL DODAGs. For a configured amount of time, the node ranks all senders of the received advertising packets based on a given metric. After this time, the node selects the best fitting parent based on this ranking and tries to connect to that peer.

After a node has successfully opened a connection to its parent node, the node starts to advertise its own RPL context data to accept connections from potential child nodes.

This approach leads to a BLE network topology that is equal to the IP routing topology created by RPL on top.

Advertising data structureTo include RPL context information into (legacy) BLE advertisements, it must be encoded into the BLE advertising data format. This implementation uses a custom sub-format that is included into the 16-bit UUID Service Data (type: 0x16) field (Supplement to Bluetooth Core Specification CSSv8, 1.11). The 16-bit UUID in this field is set to the IPSS service ID (0x1820).

The following sub-format is used to encode the RPL context data: 
```cpp
byte     1: instance ID (1b)
byte  2-17: DODAG ID (16b)
byte    18: DODAG version (1b)
byte    19: RPL role (1b)
byte 20-21: rank (2b)
byte    22: number of free BLE connection slots (1b)
```

Ranking of potential parentsThe currently implemented ranking metric is very simple: the potential parent node with the smallest rank is chosen. Additionally, nodes advertise the number of free BLE connection slots. In case where multiple nodes advertise the same RPL rank, the one with the largest number of open BLE connection slots is selected. The idea behind this is to balance the number of BLE connections per node, and with that also to balance the RPL DODAG.

UsageTo use this module, simply include `nimble_rpble` into your build. If nothing is explicitly configured, the module will use the default configuration as specified in `[pkg/nimble/rpble/include/nimble_rpble_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nimble__rpble__params_8h)`.

Once a node is configured as RPL root (e.g. using the `rpl root ..` shell command), it will automatically start to advertise itself. Non-RPL-root nodes will automatically scan for potential parent nodes and join the network as soon as they find fitting neighbors.

Implementation statusIn its current state, the implementation only works for environments where a single RPL network with a single DODAG are present. The DODAG ID, instance ID, and DODAG version are currently pretty much ignored when scanning for potential parents.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`nimble_rpble_init`](#group__pkg__nimble__rpble_1ga214c1ef76f1a96dc5a38cdc4f8cdf12e)`(const `[`nimble_rpble_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_rpble.md#structnimble__rpble__cfg__t)` * cfg)`            | Initialize the nimble_rpble module with the given parameters.
`public int `[`nimble_rpble_param_update`](#group__pkg__nimble__rpble_1gab3316c8f8ba5cda852ef938837ee9f07)`(const `[`nimble_rpble_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_rpble.md#structnimble__rpble__cfg__t)` * cfg)`            | Update the used timing parameters.
`public int `[`nimble_rpble_eventcb`](#group__pkg__nimble__rpble_1gadc1f0ebd0db249bac732c75178014091)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)`            | Register a callback that is called on BLE events.
`public int `[`nimble_rpble_update`](#group__pkg__nimble__rpble_1ga6660af9989321cefe476ac987f84b282)`(const `[`nimble_rpble_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_rpble.md#structnimble__rpble__ctx__t)` * ctx)`            | Update the current RPL context.
`struct `[`nimble_rpble_cfg_t`](#structnimble__rpble__cfg__t) | rpble configuration parameters
`struct `[`nimble_rpble_ctx_t`](#structnimble__rpble__ctx__t) | RPL DODAG information.

## Members

#### `public int `[`nimble_rpble_init`](#group__pkg__nimble__rpble_1ga214c1ef76f1a96dc5a38cdc4f8cdf12e)`(const `[`nimble_rpble_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_rpble.md#structnimble__rpble__cfg__t)` * cfg)` 

Initialize the nimble_rpble module with the given parameters.

This function must be called only once, typically during system initialization

#### Parameters
* `cfg` configuration parameters

#### Returns
0 on success

#### `public int `[`nimble_rpble_param_update`](#group__pkg__nimble__rpble_1gab3316c8f8ba5cda852ef938837ee9f07)`(const `[`nimble_rpble_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_rpble.md#structnimble__rpble__cfg__t)` * cfg)` 

Update the used timing parameters.

#### Parameters
* `cfg` configuration parameters

#### Returns
0 on success

#### `public int `[`nimble_rpble_eventcb`](#group__pkg__nimble__rpble_1gadc1f0ebd0db249bac732c75178014091)`(`[`nimble_netif_eventcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1gab1da1302e4fc013bf5c6d65029da922b)` cb)` 

Register a callback that is called on BLE events.

The registered callback function is a simple pass-through of nimble_netif events. The callback is executed in the context of NimBLE's host thread.

#### Parameters
* `cb` event callback to register, set to NULL to remove

#### `public int `[`nimble_rpble_update`](#group__pkg__nimble__rpble_1ga6660af9989321cefe476ac987f84b282)`(const `[`nimble_rpble_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_rpble.md#structnimble__rpble__ctx__t)` * ctx)` 

Update the current RPL context.

This function is meant to be called only by the RPL implementation

#### Parameters
* `ctx` current DODAG state

#### Returns
0 on success 

#### Returns
-EALREADY if the given context did not change

# struct `nimble_rpble_cfg_t` 

rpble configuration parameters

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`scan_itvl_ms`](#structnimble__rpble__cfg__t_1a146373458f194670c0b6e5202d22a168) | scan interval when scanning for parents, in ms
`public uint32_t `[`scan_win_ms`](#structnimble__rpble__cfg__t_1a8ab783895b4523c583d093253fe10f33) | scan window when scanning for parents, in ms
`public uint32_t `[`adv_itvl_ms`](#structnimble__rpble__cfg__t_1a537224490d7031a2b79ccc7d71d20530) | advertising interval used when advertising RPL context to child nodes, in ms
`public uint32_t `[`conn_scan_itvl_ms`](#structnimble__rpble__cfg__t_1a47a683130d13a0eb95eeecef199fb70c) | scan interval when connecting to parent, in ms
`public uint32_t `[`conn_scan_win_ms`](#structnimble__rpble__cfg__t_1a98e7252649203f8b65fd825b35fafbb4) | scan window when connecting to parent, in ms
`public uint32_t `[`conn_scan_to_ms`](#structnimble__rpble__cfg__t_1a2378f9792897fbc7f65930bc5f707402) | timeout when connecting to parent, in ms
`public uint32_t `[`conn_itvl_min_ms`](#structnimble__rpble__cfg__t_1a7814209040c4a6773e32908aba12f246) | lower bound of connection interval range, in ms
`public uint32_t `[`conn_itvl_max_ms`](#structnimble__rpble__cfg__t_1a7064290308d1a1db0a8be719dc0207de) | upper bound of connection interval range, in ms
`public uint16_t `[`conn_latency`](#structnimble__rpble__cfg__t_1a08a59d39a2d2667c7c79214c105c4374) | used slave latency for parent connection
`public uint32_t `[`conn_super_to_ms`](#structnimble__rpble__cfg__t_1a8922c42d4a3ab7acda439574214166d5) | used supervision timeout for parent connection, in ms
`public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`phy_mode`](#structnimble__rpble__cfg__t_1afd397db18dcaabc006ba9b2a00f25c06) | BLE PHY mode to use.
`public uint32_t `[`eval_itvl_min_ms`](#structnimble__rpble__cfg__t_1a202de5a68d5fdbddb50531f6ee54459a) | amount of time a node searches for potential parents, lower bound in ms
`public uint32_t `[`eval_itvl_max_ms`](#structnimble__rpble__cfg__t_1a682b222cbc4c74e7428c5aa700f06933) | amount of time a node searches for potential parents, upper bound in ms

## Members

#### `public uint32_t `[`scan_itvl_ms`](#structnimble__rpble__cfg__t_1a146373458f194670c0b6e5202d22a168) 

scan interval when scanning for parents, in ms

#### `public uint32_t `[`scan_win_ms`](#structnimble__rpble__cfg__t_1a8ab783895b4523c583d093253fe10f33) 

scan window when scanning for parents, in ms

#### `public uint32_t `[`adv_itvl_ms`](#structnimble__rpble__cfg__t_1a537224490d7031a2b79ccc7d71d20530) 

advertising interval used when advertising RPL context to child nodes, in ms

#### `public uint32_t `[`conn_scan_itvl_ms`](#structnimble__rpble__cfg__t_1a47a683130d13a0eb95eeecef199fb70c) 

scan interval when connecting to parent, in ms

#### `public uint32_t `[`conn_scan_win_ms`](#structnimble__rpble__cfg__t_1a98e7252649203f8b65fd825b35fafbb4) 

scan window when connecting to parent, in ms

#### `public uint32_t `[`conn_scan_to_ms`](#structnimble__rpble__cfg__t_1a2378f9792897fbc7f65930bc5f707402) 

timeout when connecting to parent, in ms

#### `public uint32_t `[`conn_itvl_min_ms`](#structnimble__rpble__cfg__t_1a7814209040c4a6773e32908aba12f246) 

lower bound of connection interval range, in ms

#### `public uint32_t `[`conn_itvl_max_ms`](#structnimble__rpble__cfg__t_1a7064290308d1a1db0a8be719dc0207de) 

upper bound of connection interval range, in ms

#### `public uint16_t `[`conn_latency`](#structnimble__rpble__cfg__t_1a08a59d39a2d2667c7c79214c105c4374) 

used slave latency for parent connection

#### `public uint32_t `[`conn_super_to_ms`](#structnimble__rpble__cfg__t_1a8922c42d4a3ab7acda439574214166d5) 

used supervision timeout for parent connection, in ms

#### `public `[`nimble_phy_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)` `[`phy_mode`](#structnimble__rpble__cfg__t_1afd397db18dcaabc006ba9b2a00f25c06) 

BLE PHY mode to use.

#### `public uint32_t `[`eval_itvl_min_ms`](#structnimble__rpble__cfg__t_1a202de5a68d5fdbddb50531f6ee54459a) 

amount of time a node searches for potential parents, lower bound in ms

#### `public uint32_t `[`eval_itvl_max_ms`](#structnimble__rpble__cfg__t_1a682b222cbc4c74e7428c5aa700f06933) 

amount of time a node searches for potential parents, upper bound in ms

# struct `nimble_rpble_ctx_t` 

RPL DODAG information.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`inst_id`](#structnimble__rpble__ctx__t_1af92415a7264ff2ec59b7eb836cce7779) | instance ID
`public uint8_t `[`dodag_id`](#structnimble__rpble__ctx__t_1a6454a92648bb156655784a6a5812c6fd) | DODAG ID.
`public uint8_t `[`version`](#structnimble__rpble__ctx__t_1af5b85780e2677062e3282344690674ce) | DODAG version.
`public uint8_t `[`role`](#structnimble__rpble__ctx__t_1aad68653ff1f11e25142b3a419f45d297) | RPL role of the node.
`public uint16_t `[`rank`](#structnimble__rpble__ctx__t_1a5a1ad576f39eef9878ed5cc392fc4314) | the node's rank in the DODAG

## Members

#### `public uint8_t `[`inst_id`](#structnimble__rpble__ctx__t_1af92415a7264ff2ec59b7eb836cce7779) 

instance ID

#### `public uint8_t `[`dodag_id`](#structnimble__rpble__ctx__t_1a6454a92648bb156655784a6a5812c6fd) 

DODAG ID.

#### `public uint8_t `[`version`](#structnimble__rpble__ctx__t_1af5b85780e2677062e3282344690674ce) 

DODAG version.

#### `public uint8_t `[`role`](#structnimble__rpble__ctx__t_1aad68653ff1f11e25142b3a419f45d297) 

RPL role of the node.

#### `public uint16_t `[`rank`](#structnimble__rpble__ctx__t_1a5a1ad576f39eef9878ed5cc392fc4314) 

the node's rank in the DODAG

