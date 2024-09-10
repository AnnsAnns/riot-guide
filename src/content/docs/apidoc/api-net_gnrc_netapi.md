---
title: api-net_gnrc_netapi.md
description: api-net_gnrc_netapi.md
---
# group `net_gnrc_netapi` 

Generic interface for IPC communication between GNRC modules.

The idea of this interface is that it provides every network module with a basic set of commands to communicate with its neighboring modules. In this model every module runs in its own thread and communication is done using the [GNRC communication interface](#group__net__gnrc__netapi).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_NETAPI_MSG_TYPE_RCV`](#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5)            | [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for passing a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) up the network stack
`define `[`GNRC_NETAPI_MSG_TYPE_SND`](#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09)            | [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for passing a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) down the network stack
`define `[`GNRC_NETAPI_MSG_TYPE_SET`](#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11)            | [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for setting options of network modules
`define `[`GNRC_NETAPI_MSG_TYPE_GET`](#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916)            | [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for getting options from network modules
`define `[`GNRC_NETAPI_MSG_TYPE_ACK`](#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5)            | [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for replying to get and set option messages
`public int `[`_gnrc_netapi_send_recv`](#group__net__gnrc__netapi_1gad0ffe52a1541cc2670edb3904f9c9858)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint16_t type)`            | Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) or [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) messages.
`public int `[`_gnrc_netapi_get_set`](#group__net__gnrc__netapi_1gac7238b921409edfd724569e32e395891)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * data,size_t data_len,uint16_t type)`            | Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916) or [GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11) messages and parsing the returned [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message.
`public inline static int `[`gnrc_netapi_send`](#group__net__gnrc__netapi_1gaf272274fd5d3918d6dd838d94108d4a6)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) messages.
`public int `[`gnrc_netapi_dispatch`](#group__net__gnrc__netapi_1ga913d93494730b4c50f58ee48cc4ccdbb)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx,uint16_t cmd,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Sends `cmd` to all subscribers to (`type`, `demux_ctx`).
`public inline static int `[`gnrc_netapi_dispatch_send`](#group__net__gnrc__netapi_1ga2b5b0f662061aa332cc1cbb9c145ee07)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Sends a [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) command to all subscribers to (`type`, `demux_ctx`).
`public inline static int `[`gnrc_netapi_receive`](#group__net__gnrc__netapi_1gada433a9686d6d35cc92c3873d334bb48)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) messages.
`public inline static int `[`gnrc_netapi_dispatch_receive`](#group__net__gnrc__netapi_1ga29426dfcc0b46e451efab9939b41d95e)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)`            | Sends a [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) command to all subscribers to (`type`, `demux_ctx`).
`public inline static int `[`gnrc_netapi_get`](#group__net__gnrc__netapi_1ga891f61c6d9e2b1dee3930f9f852ba86a)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * data,size_t max_len)`            | Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916) messages and parsing the returned [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message.
`public inline static int `[`gnrc_netapi_set`](#group__net__gnrc__netapi_1ga88f71db0621dc9ce78d14664f5e23f4b)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,const void * data,size_t data_len)`            | Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11) messages and parsing the returned [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message.
`struct `[`gnrc_netapi_opt_t`](#structgnrc__netapi__opt__t) | Data structure to be send for setting ([GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11)) and getting ([GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916)) options.

## Members

#### `define `[`GNRC_NETAPI_MSG_TYPE_RCV`](#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) 

[Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for passing a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) up the network stack

#### `define `[`GNRC_NETAPI_MSG_TYPE_SND`](#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) 

[Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for passing a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) down the network stack

#### `define `[`GNRC_NETAPI_MSG_TYPE_SET`](#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11) 

[Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for setting options of network modules

#### `define `[`GNRC_NETAPI_MSG_TYPE_GET`](#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916) 

[Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for getting options from network modules

#### `define `[`GNRC_NETAPI_MSG_TYPE_ACK`](#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) 

[Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for replying to get and set option messages

#### `public int `[`_gnrc_netapi_send_recv`](#group__net__gnrc__netapi_1gad0ffe52a1541cc2670edb3904f9c9858)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt,uint16_t type)` 

Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) or [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) messages.

#### Parameters
* `pid` PID of the targeted network module 

* `pkt` pointer into the packet buffer holding the data to send 

* `type` type of the message to send. Must be either [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) or [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5)

#### Returns
1 if packet was successfully delivered 

#### Returns
-1 on error (invalid PID or no space in queue)

#### `public int `[`_gnrc_netapi_get_set`](#group__net__gnrc__netapi_1gac7238b921409edfd724569e32e395891)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * data,size_t data_len,uint16_t type)` 

Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916) or [GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11) messages and parsing the returned [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message.

#### Parameters
* `pid` PID of the targeted network module 

* `opt` option to get 

* `context` (optional) context to the given option 

* `data` pointer to buffer for reading the option's value 

* `data_len` (maximum) number of bytes in `data`

* `type` type of the message to send. Must be either [GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916) or [GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11)

#### Returns
value returned by the [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message i.e. the actual length of the resulting data on success, a negative errno on error. The actual error value is for the implementation to decide but should be sensible to indicate what went wrong.

#### `public inline static int `[`gnrc_netapi_send`](#group__net__gnrc__netapi_1gaf272274fd5d3918d6dd838d94108d4a6)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) messages.

#### Parameters
* `pid` PID of the targeted network module 

* `pkt` pointer into the packet buffer holding the data to send

#### Returns
1 if packet was successfully delivered 

#### Returns
-1 on error (invalid PID or no space in queue)

#### `public int `[`gnrc_netapi_dispatch`](#group__net__gnrc__netapi_1ga913d93494730b4c50f58ee48cc4ccdbb)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx,uint16_t cmd,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Sends `cmd` to all subscribers to (`type`, `demux_ctx`).

#### Parameters
* `type` protocol type of the targeted network module. 

* `demux_ctx` demultiplexing context for `type`. 

* `cmd` command for all subscribers 

* `pkt` pointer into the packet buffer holding the data to send

#### Returns
Number of subscribers to (`type`, `demux_ctx`).

#### `public inline static int `[`gnrc_netapi_dispatch_send`](#group__net__gnrc__netapi_1ga2b5b0f662061aa332cc1cbb9c145ee07)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Sends a [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) command to all subscribers to (`type`, `demux_ctx`).

#### Parameters
* `type` protocol type of the targeted network module. 

* `demux_ctx` demultiplexing context for `type`. 

* `pkt` pointer into the packet buffer holding the data to send

#### Returns
Number of subscribers to (`type`, `demux_ctx`).

#### `public inline static int `[`gnrc_netapi_receive`](#group__net__gnrc__netapi_1gada433a9686d6d35cc92c3873d334bb48)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) messages.

#### Parameters
* `pid` PID of the targeted network module 

* `pkt` pointer into the packet buffer holding the received data

#### Returns
1 if packet was successfully delivered 

#### Returns
-1 on error (invalid PID or no space in queue)

#### `public inline static int `[`gnrc_netapi_dispatch_receive`](#group__net__gnrc__netapi_1ga29426dfcc0b46e451efab9939b41d95e)`(`[`gnrc_nettype_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1ga2582fbb16a318806983c225a69460902)` type,uint32_t demux_ctx,`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pkt)` 

Sends a [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) command to all subscribers to (`type`, `demux_ctx`).

#### Parameters
* `type` protocol type of the targeted network module. 

* `demux_ctx` demultiplexing context for `type`. 

* `pkt` pointer into the packet buffer holding the data to send

#### Returns
Number of subscribers to (`type`, `demux_ctx`).

#### `public inline static int `[`gnrc_netapi_get`](#group__net__gnrc__netapi_1ga891f61c6d9e2b1dee3930f9f852ba86a)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * data,size_t max_len)` 

Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916) messages and parsing the returned [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message.

#### Parameters
* `pid` PID of the targeted network module 

* `opt` option to get 

* `context` (optional) context to the given option 

* `data` pointer to buffer for reading the option's value 

* `max_len` maximum number of bytes that fit into `data`

#### Returns
value returned by the [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message i.e. the actual length of the resulting data on success, a negative errno on error. The actual error value is for the implementation to decide but should be sensible to indicate what went wrong.

#### `public inline static int `[`gnrc_netapi_set`](#group__net__gnrc__netapi_1ga88f71db0621dc9ce78d14664f5e23f4b)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,const void * data,size_t data_len)` 

Shortcut function for sending [GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11) messages and parsing the returned [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message.

#### Parameters
* `pid` PID of the targeted network module 

* `opt` option to set 

* `context` (optional) context to the given option 

* `data` data to set the given option to 

* `data_len` size of `data`

#### Returns
value returned by the [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) message i.e. 0 on success, a negative errno on error. The actual error value is for the implementation to decide but should be sensible to indicate what went wrong.

# struct `gnrc_netapi_opt_t` 

Data structure to be send for setting ([GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11)) and getting ([GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916)) options.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` `[`opt`](#structgnrc__netapi__opt__t_1afd202f69e03cdc5545fe5b8c7d4a9e5c) | the option to get/set
`public uint16_t `[`context`](#structgnrc__netapi__opt__t_1abb7d76401195cc1ef437f868444e8afe) | (optional) context for that option
`public void * `[`data`](#structgnrc__netapi__opt__t_1a902a7aa2875398f2f64c6655a9a38346) | data to set or buffer to read into
`public uint16_t `[`data_len`](#structgnrc__netapi__opt__t_1a7db06ffeef445ddc26b2398adabaa16b) | size of the data / the buffer

## Members

#### `public `[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` `[`opt`](#structgnrc__netapi__opt__t_1afd202f69e03cdc5545fe5b8c7d4a9e5c) 

the option to get/set

#### `public uint16_t `[`context`](#structgnrc__netapi__opt__t_1abb7d76401195cc1ef437f868444e8afe) 

(optional) context for that option

#### `public void * `[`data`](#structgnrc__netapi__opt__t_1a902a7aa2875398f2f64c6655a9a38346) 

data to set or buffer to read into

#### `public uint16_t `[`data_len`](#structgnrc__netapi__opt__t_1a7db06ffeef445ddc26b2398adabaa16b) 

size of the data / the buffer

