---
title: api-net_gnrc_neterr.md
description: api-net_gnrc_neterr.md
---
# group `net_gnrc_neterr` 

Allows for asynchronous error reporting in the network stack.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_NETERR_MSG_TYPE`](#group__net__gnrc__neterr_1gac8fe42b838e147b9caffd6268d495fed)            | [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for reporting an error.
`define `[`GNRC_NETERR_SUCCESS`](#group__net__gnrc__neterr_1ga6e512f593ce094228a5697d4d224dc0f)            | Error code to signalise success (no error occurred) to an gnrc_neterr subscriber.
`define `[`gnrc_neterr_report`](#group__net__gnrc__neterr_1gae9e9f9764fd2381e370c1d7b6923d78f)            | Reports an error to all subscribers of errors to `pkt`.
`define `[`gnrc_neterr_reg`](#group__net__gnrc__neterr_1gab17da7af9e237533854934c630b665d8)            | Registers the current thread for errors on a [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63).

## Members

#### `define `[`GNRC_NETERR_MSG_TYPE`](#group__net__gnrc__neterr_1gac8fe42b838e147b9caffd6268d495fed) 

[Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) type for reporting an error.

#### `define `[`GNRC_NETERR_SUCCESS`](#group__net__gnrc__neterr_1ga6e512f593ce094228a5697d4d224dc0f) 

Error code to signalise success (no error occurred) to an gnrc_neterr subscriber.

#### `define `[`gnrc_neterr_report`](#group__net__gnrc__neterr_1gae9e9f9764fd2381e370c1d7b6923d78f) 

Reports an error to all subscribers of errors to `pkt`.

#### Parameters
* `pkt` Packet snip to report on. 

* `err` The error code for the packet.

#### `define `[`gnrc_neterr_reg`](#group__net__gnrc__neterr_1gab17da7af9e237533854934c630b665d8) 

Registers the current thread for errors on a [gnrc_pktsnip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63).

#### Parameters
* `pkt` Packet snip to register for errors.

#### Returns
0, on success. 

#### Returns
EALREADY, if there already someone registered to errors on `pkt`.

