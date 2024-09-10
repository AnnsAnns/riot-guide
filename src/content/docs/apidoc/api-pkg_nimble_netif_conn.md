---
title: api-pkg_nimble_netif_conn.md
description: api-pkg_nimble_netif_conn.md
---
# group `pkg_nimble_netif_conn` 

Helper module for managing the memory needed to store the BLE connection state for the netif wrapper.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NIMBLE_NETIF_CONN_INVALID`](#group__pkg__nimble__netif__conn_1ga0b1e0720844381e4f05692083c05a0b8)            | Value for marking a handle invalid.
`public void `[`nimble_netif_conn_init`](#group__pkg__nimble__netif__conn_1gadbe7eb6d81caf1994b007da188565f2f)`(void)`            | Initialize the connection state manager.
`public `[`nimble_netif_conn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif_conn.md#structnimble__netif__conn__t)` * `[`nimble_netif_conn_get`](#group__pkg__nimble__netif__conn_1ga45f5496b3d83300a8af5dd75aaaa8b69)`(int handle)`            | Get the connection context corresponding to the given handle.
`public int `[`nimble_netif_conn_get_adv`](#group__pkg__nimble__netif__conn_1ga35992e6a410b8f9be213f4fa07462574)`(void)`            | Get the handle to the context that is currently advertising.
`public int `[`nimble_netif_conn_get_connecting`](#group__pkg__nimble__netif__conn_1ga364a37f10ba1bb64227baf6b0ba88a37)`(void)`            | Get the handle to the context that is busy connecting.
`public int `[`nimble_netif_conn_get_by_addr`](#group__pkg__nimble__netif__conn_1ga651fc9c6b9d1d9861923c4ba3b8d1af6)`(const uint8_t * addr)`            | Find the connection to the peer with the given BLE address.
`public int `[`nimble_netif_conn_get_by_gaphandle`](#group__pkg__nimble__netif__conn_1gac09196bc0c428dbfb2fbc9678035b612)`(uint16_t gaphandle)`            | Find the connection using the given NimBLE GAP handle.
`public void `[`nimble_netif_conn_foreach`](#group__pkg__nimble__netif__conn_1ga06dd58feeca46020c32fee8a67855c85)`(uint16_t filter,`[`nimble_netif_conn_iter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif__conn_1gac90ae16ea0a02dc4f5dd02cd4b0b8c56)` cb,void * arg)`            | Iterate over all connection contexts that match the filter condition.
`public int `[`nimble_netif_conn_get_next`](#group__pkg__nimble__netif__conn_1gab0ada51793c8b44ae73b56dfdbae6a0b)`(int handle,uint16_t filter)`            | Find the next context that matches the filter condition.
`public unsigned `[`nimble_netif_conn_count`](#group__pkg__nimble__netif__conn_1ga85b11a2e2d97cf8fa46e7d2660ecd6ef)`(uint16_t filter)`            | Count the number of connections contexts for which the given filter applies.
`public int `[`nimble_netif_conn_start_connection`](#group__pkg__nimble__netif__conn_1ga7e2459316d5c0ce6c414b408ace416a5)`(const uint8_t * addr)`            | Allocate an unused context for starting a connection.
`public int `[`nimble_netif_conn_start_adv`](#group__pkg__nimble__netif__conn_1ga0aff4af6870a7705e6295d640b565194)`(void)`            | Reserve a unused context for the purpose of accepting a new connection.
`public void `[`nimble_netif_conn_free`](#group__pkg__nimble__netif__conn_1ga5e896c4c64c50e8490bf96692f06429b)`(int handle,uint8_t * addr)`            | Free the connection context with the given handle.
`public uint16_t `[`nimble_netif_conn_get_itvl_ms`](#group__pkg__nimble__netif__conn_1ga2df7f0b9bff868b2f5d4e445fce6368c)`(int handle)`            | Get the used connection interval for the given connection handle.
`public bool `[`nimble_netif_conn_itvl_used`](#group__pkg__nimble__netif__conn_1ga1d1f944114db56349dde44c3f54b4611)`(uint16_t itvl,int skip_handle)`            | Check if the given connection interval is used, taking the minimal spacing as defined by NIMBLE_NETIF_CONN_ITVL_SPACING into account.
`public uint16_t `[`nimble_netif_conn_gen_itvl`](#group__pkg__nimble__netif__conn_1gaab7dd2978e65b0c013c374444b32c7d2)`(uint16_t min,uint16_t max)`            | Generate a pseudorandom connection interval from the given range.
`public inline static `[`nimble_netif_conn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif_conn.md#structnimble__netif__conn__t)` * `[`nimble_netif_conn_from_gaphandle`](#group__pkg__nimble__netif__conn_1ga25aac040d1483adfb8d74abc660901aa)`(uint16_t gh)`            | Find the connection context with a given GAP handle and return a pointer to it.
`public inline static int `[`nimble_netif_conn_connecting`](#group__pkg__nimble__netif__conn_1gaa2cc0105c25ccd8fe9a07df87654993f)`(void)`            | Convenience function to check if any context is currently in the connecting state ([NIMBLE_NETIF_CONNECTING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1ggaa0ead9a390ae1a2e9537f8ea60f4f355a951aff8dbd56d75f57bfe49d13c845e2))
`public inline static int `[`nimble_netif_conn_connected`](#group__pkg__nimble__netif__conn_1gab04d220a0d7a3cb11b3513184e2cc2eb)`(const uint8_t * addr)`            | Convenience function to check if we are currently connected to a peer with the given address.
`public inline static int `[`nimble_netif_conn_is_open`](#group__pkg__nimble__netif__conn_1gac340595d12bfc4e24e5ad1b531f797e9)`(const `[`nimble_netif_conn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif_conn.md#structnimble__netif__conn__t)` * conn)`            | Test if the given connection is (still) open.
`public inline static int `[`nimble_netif_conn_is_adv`](#group__pkg__nimble__netif__conn_1ga26bd04269509aad85196f00f9bad145e)`(void)`            | Convenience function to check if any context is currently in the advertising state ([NIMBLE_NETIF_ADV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1ggaa0ead9a390ae1a2e9537f8ea60f4f355a130f12082afcbd96ba82bdb82a7017da))
`struct `[`nimble_netif_conn_t`](#structnimble__netif__conn__t) | Memory layout for holding the relevant connection information.

## Members

#### `define `[`NIMBLE_NETIF_CONN_INVALID`](#group__pkg__nimble__netif__conn_1ga0b1e0720844381e4f05692083c05a0b8) 

Value for marking a handle invalid.

#### `public void `[`nimble_netif_conn_init`](#group__pkg__nimble__netif__conn_1gadbe7eb6d81caf1994b007da188565f2f)`(void)` 

Initialize the connection state manager.

This functions is typically called by [nimble_netif_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1ga571a0f63aa1f6d4c3a8a4588d2b971b2).

#### `public `[`nimble_netif_conn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif_conn.md#structnimble__netif__conn__t)` * `[`nimble_netif_conn_get`](#group__pkg__nimble__netif__conn_1ga45f5496b3d83300a8af5dd75aaaa8b69)`(int handle)` 

Get the connection context corresponding to the given handle.

#### Parameters
* `handle` handle to a connection context

#### Returns
pointer to the corresponding connection context 

#### Returns
NULL if handle in invalid

#### `public int `[`nimble_netif_conn_get_adv`](#group__pkg__nimble__netif__conn_1ga35992e6a410b8f9be213f4fa07462574)`(void)` 

Get the handle to the context that is currently advertising.

#### Returns
handle to the currently advertising context 

#### Returns
NIMBLE_NETIF_CONN_INVALID if not advertising

#### `public int `[`nimble_netif_conn_get_connecting`](#group__pkg__nimble__netif__conn_1ga364a37f10ba1bb64227baf6b0ba88a37)`(void)` 

Get the handle to the context that is busy connecting.

#### Returns
handle to the busy context 

#### Returns
NIMBLE_NETIF_CONN_INVALID if not busy connecting

#### `public int `[`nimble_netif_conn_get_by_addr`](#group__pkg__nimble__netif__conn_1ga651fc9c6b9d1d9861923c4ba3b8d1af6)`(const uint8_t * addr)` 

Find the connection to the peer with the given BLE address.

#### Parameters
* `addr` BLE address, in network byte order

#### Returns
handle to the matching connection context 

#### Returns
NIMBLE_NETIF_CONN_INVALID if no matching connection was found

#### `public int `[`nimble_netif_conn_get_by_gaphandle`](#group__pkg__nimble__netif__conn_1gac09196bc0c428dbfb2fbc9678035b612)`(uint16_t gaphandle)` 

Find the connection using the given NimBLE GAP handle.

#### Parameters
* `gaphandle` GAP handle as exposed by NimBLE

#### Returns
handle to the matching connection context 

#### Returns
NIMBLE_NETIF_CONN_INVALID if no matching connection was found

#### `public void `[`nimble_netif_conn_foreach`](#group__pkg__nimble__netif__conn_1ga06dd58feeca46020c32fee8a67855c85)`(uint16_t filter,`[`nimble_netif_conn_iter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif__conn_1gac90ae16ea0a02dc4f5dd02cd4b0b8c56)` cb,void * arg)` 

Iterate over all connection contexts that match the filter condition.

Do not call any other nimble_netif_conn function from within the callback, this will lead to a deadlock!

#### Parameters
* `filter` filter mask 

* `cb` callback called on each filtered entry 

* `arg` user argument

#### `public int `[`nimble_netif_conn_get_next`](#group__pkg__nimble__netif__conn_1gab0ada51793c8b44ae73b56dfdbae6a0b)`(int handle,uint16_t filter)` 

Find the next context that matches the filter condition.

This function allows for iterating connection contexts in a non-blocking way.

#### Parameters
* `handle` last used handle, set to NIMBLE_NETIF_CONN_INVALID to get the first matching entry 

* `filter` filter mask

#### Returns
handle of the next matching connection context 

#### Returns
NIMBLE_NETIF_CONN_INVALID if no matching context was found

#### `public unsigned `[`nimble_netif_conn_count`](#group__pkg__nimble__netif__conn_1ga85b11a2e2d97cf8fa46e7d2660ecd6ef)`(uint16_t filter)` 

Count the number of connections contexts for which the given filter applies.

#### Parameters
* `filter` filter mask

#### Returns
number of contexts for which the filter applied

#### `public int `[`nimble_netif_conn_start_connection`](#group__pkg__nimble__netif__conn_1ga7e2459316d5c0ce6c414b408ace416a5)`(const uint8_t * addr)` 

Allocate an unused context for starting a connection.

#### Parameters
* `addr` the BLE address of the peer node, in network byte order

#### Returns
handle used for the new connection

#### `public int `[`nimble_netif_conn_start_adv`](#group__pkg__nimble__netif__conn_1ga0aff4af6870a7705e6295d640b565194)`(void)` 

Reserve a unused context for the purpose of accepting a new connection.

#### Returns
handle of the reserved context 

#### Returns
-EALREADY if already advertising 

#### Returns
-ENOMEM if no memory slot is available

#### `public void `[`nimble_netif_conn_free`](#group__pkg__nimble__netif__conn_1ga5e896c4c64c50e8490bf96692f06429b)`(int handle,uint8_t * addr)` 

Free the connection context with the given handle.

#### `public uint16_t `[`nimble_netif_conn_get_itvl_ms`](#group__pkg__nimble__netif__conn_1ga2df7f0b9bff868b2f5d4e445fce6368c)`(int handle)` 

Get the used connection interval for the given connection handle.

#### Parameters
* `handle` connection handle

#### Returns
used connection interval in milliseconds on success 

#### Returns
0 if unable to get connection interval

#### `public bool `[`nimble_netif_conn_itvl_used`](#group__pkg__nimble__netif__conn_1ga1d1f944114db56349dde44c3f54b4611)`(uint16_t itvl,int skip_handle)` 

Check if the given connection interval is used, taking the minimal spacing as defined by NIMBLE_NETIF_CONN_ITVL_SPACING into account.

#### Parameters
* `itvl` connection interval to check, multiples of 1.25ms 

* `skip_handle` do not compare against connection interval for this handle, set to NIMBLE_NETIF_CONN_INVALID to check all

#### Returns
true if given interval is used 

#### Returns
false if given interval is not used

#### `public uint16_t `[`nimble_netif_conn_gen_itvl`](#group__pkg__nimble__netif__conn_1gaab7dd2978e65b0c013c374444b32c7d2)`(uint16_t min,uint16_t max)` 

Generate a pseudorandom connection interval from the given range.

If the NIMBLE_NETIF_CONN_ITVL_SPACING option is enabled, this function ensures that the generated connection interval is spaced at least NIMBLE_NETIF_CONN_ITVL_SPACING from the connection interval of each open BLE connection.

#### Parameters
* `min` minimum connection interval 

* `max` maximum connection interval

#### Returns
generated connection interval on success, multiples of 1.25ms 

#### Returns
0 if no valid connection interval could be generated

#### `public inline static `[`nimble_netif_conn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif_conn.md#structnimble__netif__conn__t)` * `[`nimble_netif_conn_from_gaphandle`](#group__pkg__nimble__netif__conn_1ga25aac040d1483adfb8d74abc660901aa)`(uint16_t gh)` 

Find the connection context with a given GAP handle and return a pointer to it.

#### Parameters
* `gh` GAP handle used by NimBLE

#### Returns
Pointer to the selected context 

#### Returns
NULL if no fitting context was found

#### `public inline static int `[`nimble_netif_conn_connecting`](#group__pkg__nimble__netif__conn_1gaa2cc0105c25ccd8fe9a07df87654993f)`(void)` 

Convenience function to check if any context is currently in the connecting state ([NIMBLE_NETIF_CONNECTING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1ggaa0ead9a390ae1a2e9537f8ea60f4f355a951aff8dbd56d75f57bfe49d13c845e2))

#### Returns
!= 0 if true 

#### Returns
0 if false

#### `public inline static int `[`nimble_netif_conn_connected`](#group__pkg__nimble__netif__conn_1gab04d220a0d7a3cb11b3513184e2cc2eb)`(const uint8_t * addr)` 

Convenience function to check if we are currently connected to a peer with the given address.

#### Parameters
* `addr` BLE address, in network byte order

#### Returns
!= 0 if true 

#### Returns
0 if false

#### `public inline static int `[`nimble_netif_conn_is_open`](#group__pkg__nimble__netif__conn_1gac340595d12bfc4e24e5ad1b531f797e9)`(const `[`nimble_netif_conn_t`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_nimble_netif_conn.md#structnimble__netif__conn__t)` * conn)` 

Test if the given connection is (still) open.

#### Parameters
* `conn` Connection to test

#### Returns
!= 0 if true 

#### Returns
0 if false

#### `public inline static int `[`nimble_netif_conn_is_adv`](#group__pkg__nimble__netif__conn_1ga26bd04269509aad85196f00f9bad145e)`(void)` 

Convenience function to check if any context is currently in the advertising state ([NIMBLE_NETIF_ADV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nimble__netif_1ggaa0ead9a390ae1a2e9537f8ea60f4f355a130f12082afcbd96ba82bdb82a7017da))

#### Returns
!= 0 if true 

#### Returns
0 if false

# struct `nimble_netif_conn_t` 

Memory layout for holding the relevant connection information.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct ble_l2cap_chan * `[`coc`](#structnimble__netif__conn__t_1a0d4bcd5e25c63d8f52e68a47f74862a5) | l2cap context as exposed by NimBLE
`public uint16_t `[`gaphandle`](#structnimble__netif__conn__t_1af6f226a71a890d26120a840124743d88) | GAP handle exposed by NimBLE.
`public uint16_t `[`itvl`](#structnimble__netif__conn__t_1a5010111982077acc33f5cb8100a69ca3) | currently used connection interval
`public uint16_t `[`state`](#structnimble__netif__conn__t_1a0819236dc9cea7c1a34726db8a913e25) | the current state of the context
`public uint8_t `[`addr`](#structnimble__netif__conn__t_1ac2f4ed012ffe165c6584312717933049) | BLE address of connected peer (in network byte order)

## Members

#### `public struct ble_l2cap_chan * `[`coc`](#structnimble__netif__conn__t_1a0d4bcd5e25c63d8f52e68a47f74862a5) 

l2cap context as exposed by NimBLE

#### `public uint16_t `[`gaphandle`](#structnimble__netif__conn__t_1af6f226a71a890d26120a840124743d88) 

GAP handle exposed by NimBLE.

#### `public uint16_t `[`itvl`](#structnimble__netif__conn__t_1a5010111982077acc33f5cb8100a69ca3) 

currently used connection interval

#### `public uint16_t `[`state`](#structnimble__netif__conn__t_1a0819236dc9cea7c1a34726db8a913e25) 

the current state of the context

#### `public uint8_t `[`addr`](#structnimble__netif__conn__t_1ac2f4ed012ffe165c6584312717933049) 

BLE address of connected peer (in network byte order)

