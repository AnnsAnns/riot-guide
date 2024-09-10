---
title: api-net_gnrc_netreg.md
description: api-net_gnrc_netreg.md
---
# group `net_gnrc_netreg` 

Registry to receive messages of a specified protocol type by GNRC.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_NETREG_DEMUX_CTX_ALL`](#group__net__gnrc__netreg_1ga1a6359efa13b3bfed70af55deacde7ae)            | Demux context value to get all packets of a certain type.
`enum `[`gnrc_netreg_type_t`](#group__net__gnrc__netreg_1ga7f3ef84f4d2a3cb8e1d2b5c3cb7ec31c)            | The type of the netreg entry.
`public void `[`gnrc_netreg_init`](#group__net__gnrc__netreg_1gaa0dafe42cd1f165ba11e694caf4e9b6e)`(void)`            | Initializes module.
`public int `[`gnrc_netreg_register`](#group__net__gnrc__netreg_1gafb6a9d0b840aae07c3c1617932835ef1)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,`[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * entry)`            | Registers a thread to the registry.
`public void `[`gnrc_netreg_unregister`](#group__net__gnrc__netreg_1gad68b86ef84f5b1c6391067bdd8b16f2b)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,`[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * entry)`            | Removes a thread from the registry.
`public `[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * `[`gnrc_netreg_lookup`](#group__net__gnrc__netreg_1gae6c8a22d969ee61d23fc926b27bc76e8)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx)`            | Searches for entries with given parameters in the registry and returns the first found.
`public int `[`gnrc_netreg_num`](#group__net__gnrc__netreg_1ga47ba14b395e125b1966215296d400bf0)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx)`            | Returns number of entries with the same [gnrc_netreg_entry_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) and [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14).
`public `[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * `[`gnrc_netreg_getnext`](#group__net__gnrc__netreg_1ga9c62fc1398543c757eaea0956a97b51a)`(`[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * entry)`            | Returns the next entry after `entry` with the same [gnrc_netreg_entry_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) and [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14) as the given entry.
`public int `[`gnrc_netreg_calc_csum`](#group__net__gnrc__netreg_1ga1db6d7fa7ad6315e70e7621cadfe2123)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)`            | Calculates the checksum for a header.
`struct `[`gnrc_netreg_entry_cbd_t`](#structgnrc__netreg__entry__cbd__t) | Callback + Context descriptor.
`struct `[`gnrc_netreg_entry`](#structgnrc__netreg__entry) | Entry to the [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg).

## Members

#### `define `[`GNRC_NETREG_DEMUX_CTX_ALL`](#group__net__gnrc__netreg_1ga1a6359efa13b3bfed70af55deacde7ae) 

Demux context value to get all packets of a certain type.

**See also**: [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14)

#### `enum `[`gnrc_netreg_type_t`](#group__net__gnrc__netreg_1ga7f3ef84f4d2a3cb8e1d2b5c3cb7ec31c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GNRC_NETREG_TYPE_DEFAULT            | Use [default IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) for [netapi](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) operations.
GNRC_NETREG_TYPE_MBOX            | Use [centralized IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__mbox) for [netapi](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) operations.
GNRC_NETREG_TYPE_CB            | Use function callbacks for [netapi](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) operations.

The type of the netreg entry.

Different types are available dependent on the used modules.

#### `public void `[`gnrc_netreg_init`](#group__net__gnrc__netreg_1gaa0dafe42cd1f165ba11e694caf4e9b6e)`(void)` 

Initializes module.

#### `public int `[`gnrc_netreg_register`](#group__net__gnrc__netreg_1gafb6a9d0b840aae07c3c1617932835ef1)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,`[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * entry)` 

Registers a thread to the registry.

The semantics are: [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread)[gnrc_netreg_entry_t::pid](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1aac4f7a1f7e2218ca91f866593362c2f3) is interested in packets of protocol `type` with context [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14).

#### Parameters
* `type` Type of the protocol. Must not be < GNRC_NETTYPE_UNDEF or >= GNRC_NETTYPE_NUMOF. 

* `entry` An entry you want to add to the registry. This needs to be initialized before hand using the [static](#group__net__gnrc__netreg_1net_gnrc_netreg_init_static) or [dynamic](#group__net__gnrc__netreg_1net_gnrc_netreg_init_dyn) initialization helpers.

Call [gnrc_netreg_unregister()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1gad68b86ef84f5b1c6391067bdd8b16f2b)*before* you leave the context you allocated `entry` in. Otherwise it might get overwritten.

The calling thread must provide a [message queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd) when using [GNRC_NETREG_TYPE_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1gga7f3ef84f4d2a3cb8e1d2b5c3cb7ec31ca052076705778900f3a5b37d7ba306b27) for [gnrc_netreg_entry_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) of `entry`.

#### Returns
0 on success 

#### Returns
-EINVAL if `type` was < GNRC_NETTYPE_UNDEF or >= GNRC_NETTYPE_NUMOF

#### `public void `[`gnrc_netreg_unregister`](#group__net__gnrc__netreg_1gad68b86ef84f5b1c6391067bdd8b16f2b)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,`[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * entry)` 

Removes a thread from the registry.

#### Parameters
* `type` Type of the protocol. 

* `entry` An entry you want to remove from the registry.

#### `public `[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * `[`gnrc_netreg_lookup`](#group__net__gnrc__netreg_1gae6c8a22d969ee61d23fc926b27bc76e8)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx)` 

Searches for entries with given parameters in the registry and returns the first found.

The caller must hold the lock of [gnrc_netreg_acquire_shared](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga1383404d36fede197d152d06d9a61f15) from before calling this function, and must stop using any obtained pointers before releasing the lock through [gnrc_netreg_release_shared](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga8820ccc47add877a2b5f5135c1dcc070).

#### Parameters
* `type` Type of the protocol. 

* `demux_ctx` The demultiplexing context for the registered thread. See [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14).

#### Returns
The first entry fitting the given parameters on success 

#### Returns
NULL if no entry can be found.

#### `public int `[`gnrc_netreg_num`](#group__net__gnrc__netreg_1ga47ba14b395e125b1966215296d400bf0)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx)` 

Returns number of entries with the same [gnrc_netreg_entry_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) and [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14).

#### Parameters
* `type` Type of the protocol. 

* `demux_ctx` The demultiplexing context for the registered thread. See [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14).

#### Returns
Number of entries with the same [gnrc_netreg_entry_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) and [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14) as the given parameters.

Note that this returns a snapshot value, which may change at any time after that call. This is fine for most applications, as they just shortcut a code path if the number is zero. Callers that need that number to stay constant can acquire a shared lock through [gnrc_netreg_acquire_shared](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga1383404d36fede197d152d06d9a61f15), and rely on the number staying constant until that lock is released through [gnrc_netreg_release_shared](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga8820ccc47add877a2b5f5135c1dcc070).

#### `public `[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * `[`gnrc_netreg_getnext`](#group__net__gnrc__netreg_1ga9c62fc1398543c757eaea0956a97b51a)`(`[`gnrc_netreg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9f62d7f4b7c56e53983315b651a88c0f)` * entry)` 

Returns the next entry after `entry` with the same [gnrc_netreg_entry_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) and [gnrc_netreg_entry_t::demux_ctx](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14) as the given entry.

The requirement on holding the global lock through [gnrc_netreg_acquire_shared](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga1383404d36fede197d152d06d9a61f15) from [gnrc_netreg_lookup](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1gae6c8a22d969ee61d23fc926b27bc76e8) extends to any results of this function: It may only be released when none of the pointers are used any more.

#### Parameters
* `entry` A registry entry retrieved by [gnrc_netreg_lookup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1gae6c8a22d969ee61d23fc926b27bc76e8) or [gnrc_netreg_getnext()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga9c62fc1398543c757eaea0956a97b51a). Must not be NULL.

#### Returns
The next entry after `entry` fitting the given parameters on success 

#### Returns
NULL if no entry new entry can be found.

#### `public int `[`gnrc_netreg_calc_csum`](#group__net__gnrc__netreg_1ga1db6d7fa7ad6315e70e7621cadfe2123)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)` 

Calculates the checksum for a header.

#### Parameters
* `hdr` The header the checksum should be calculated for. 

* `pseudo_hdr` The header the pseudo header shall be generated from. NULL if none is needed.

#### Returns
0, on success. 

#### Returns
-EINVAL, if `pseudo_hdr` is NULL but a pseudo header was required. 

#### Returns
-ENOENT, if [Network protocol registry](#group__net__gnrc__netreg) does not know how to calculate checksum for [gnrc_pktsnip_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_pkt.md#structgnrc__pktsnip_1a8362d0e56cfabedcf51459377c58db59) of `hdr`.

# struct `gnrc_netreg_entry_cbd_t` 

Callback + Context descriptor.

Only available with [Callback extension](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi__callbacks).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gnrc_netreg_entry_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga5a1dc197a877ff181b5da6c1c1604e14)` `[`cb`](#structgnrc__netreg__entry__cbd__t_1a002b68eb464e75b537ff465df6bdcb45) | the callback
`public void * `[`ctx`](#structgnrc__netreg__entry__cbd__t_1a763673bff0c13c3133b91b14b9a85dff) | application context for the callback

## Members

#### `public `[`gnrc_netreg_entry_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga5a1dc197a877ff181b5da6c1c1604e14)` `[`cb`](#structgnrc__netreg__entry__cbd__t_1a002b68eb464e75b537ff465df6bdcb45) 

the callback

#### `public void * `[`ctx`](#structgnrc__netreg__entry__cbd__t_1a763673bff0c13c3133b91b14b9a85dff) 

application context for the callback

# struct `gnrc_netreg_entry` 

Entry to the [Network protocol registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`gnrc_netreg_entry`](#structgnrc__netreg__entry)` * `[`next`](#structgnrc__netreg__entry_1a4aec33c5dbb9cad6cdfdb1a9f0316c46) | next element in list
`public uint32_t `[`demux_ctx`](#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14) | The demultiplexing context for the registering thread.
`public `[`gnrc_netreg_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga7f3ef84f4d2a3cb8e1d2b5c3cb7ec31c)` `[`type`](#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) | Type of the registry entry.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structgnrc__netreg__entry_1aac4f7a1f7e2218ca91f866593362c2f3) | The PID of the registering thread.
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structgnrc__netreg__entry_1a8f4e386211db055d10b0a4f852936559) | Target [mailbox](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__mbox) for the registry entry.
`public `[`gnrc_netreg_entry_cbd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry__cbd__t)` * `[`cbd`](#structgnrc__netreg__entry_1ae1fb64d96b77e3ad8978e687ba711876) | Target callback for the registry entry.
`public union gnrc_netreg_entry::@370 `[`target`](#structgnrc__netreg__entry_1ae13dd0b4a3f7f6d2dfb219770f90d6ef) | Target for the registry entry.

## Members

#### `public struct `[`gnrc_netreg_entry`](#structgnrc__netreg__entry)` * `[`next`](#structgnrc__netreg__entry_1a4aec33c5dbb9cad6cdfdb1a9f0316c46) 

next element in list

#### `public uint32_t `[`demux_ctx`](#structgnrc__netreg__entry_1a0fe3f1311abb5730b17f0d86fe97bf14) 

The demultiplexing context for the registering thread.

This can be defined by the network protocol themselves. E. g. protocol numbers / next header numbers in IPv4/IPv6, ports in UDP/TCP, or similar.

#### `public `[`gnrc_netreg_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1ga7f3ef84f4d2a3cb8e1d2b5c3cb7ec31c)` `[`type`](#structgnrc__netreg__entry_1af7dc867418d83d4f1a544b807b6460c7) 

Type of the registry entry.

Only available with [Mailbox IPC extension](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi__mbox) or [Callback extension](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi__callbacks).

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structgnrc__netreg__entry_1aac4f7a1f7e2218ca91f866593362c2f3) 

The PID of the registering thread.

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structgnrc__netreg__entry_1a8f4e386211db055d10b0a4f852936559) 

Target [mailbox](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__mbox) for the registry entry.

Only available with [Mailbox IPC extension](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi__mbox).

#### `public `[`gnrc_netreg_entry_cbd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_netreg.md#structgnrc__netreg__entry__cbd__t)` * `[`cbd`](#structgnrc__netreg__entry_1ae1fb64d96b77e3ad8978e687ba711876) 

Target callback for the registry entry.

Only available with [Callback extension](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi__callbacks).

#### `public union gnrc_netreg_entry::@370 `[`target`](#structgnrc__netreg__entry_1ae13dd0b4a3f7f6d2dfb219770f90d6ef) 

Target for the registry entry.

