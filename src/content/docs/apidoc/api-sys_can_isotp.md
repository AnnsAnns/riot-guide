---
title: api-sys_can_isotp.md
description: api-sys_can_isotp.md
---
# group `sys_can_isotp` 

ISO transport protocol over CAN (ISO15765)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CAN_ISOTP_BS`](#group__sys__can__isotp_1ga2482e64105be03434c031835a1dd01d1)            | Default Block Size for RX Flow Control frames.
`define `[`CAN_ISOTP_STMIN`](#group__sys__can__isotp_1ga641836658aa0d862b5dd43c77f3c883e)            | Default STmin for RX Flow Control frames.
`define `[`CAN_ISOTP_WFTMAX`](#group__sys__can__isotp_1ga9595bef9bb708b56ff618ea132129dc5)            | Default maximum WFT for TX Flow Control.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`isotp_init`](#group__sys__can__isotp_1ga8537bab0a849633285a55167bfc89e3f)`(char * stack,int stacksize,char priority,const char * name)`            | Initialize the isotp layer.
`public int `[`isotp_send`](#group__sys__can__isotp_1ga577e1b04dc07d886d2fd27489761e40a)`(struct `[`isotp`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp)` * isotp,const void * buf,int len,int flags)`            | Send data through an isotp channel.
`public int `[`isotp_bind`](#group__sys__can__isotp_1gade6e7fa3baa47b7977a0a3093f8b56d6)`(struct `[`isotp`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp)` * isotp,`[`can_reg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1gaf7f206428cfaa802a3d5c06e14bd96cd)` * entry,void * arg,struct `[`isotp_fc_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__fc__options)` * fc_options)`            | Bind an isotp channel.
`public int `[`isotp_release`](#group__sys__can__isotp_1ga411fa624525e458ff4b4698cbd2221f4)`(struct `[`isotp`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp)` * isotp)`            | Release a bound isotp channel.
`public void `[`isotp_free_rx`](#group__sys__can__isotp_1gac746c5ecf982b8c40744ccd5d8ec2fdf)`(`[`can_rx_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga6cc31454463413d954343367ac66f5de)` * rx)`            | Free a received buffer.
`struct `[`isotp_fc_options`](#structisotp__fc__options) | The [isotp_fc_options](#structisotp__fc__options) struct.
`struct `[`isotp_options`](#structisotp__options) | The [isotp_options](#structisotp__options) struct.
`struct `[`tpcon`](#structtpcon) | The tpcon struct.
`struct `[`isotp`](#structisotp) | The isotp struct.

## Members

#### `define `[`CAN_ISOTP_BS`](#group__sys__can__isotp_1ga2482e64105be03434c031835a1dd01d1) 

Default Block Size for RX Flow Control frames.

#### `define `[`CAN_ISOTP_STMIN`](#group__sys__can__isotp_1ga641836658aa0d862b5dd43c77f3c883e) 

Default STmin for RX Flow Control frames.

#### `define `[`CAN_ISOTP_WFTMAX`](#group__sys__can__isotp_1ga9595bef9bb708b56ff618ea132129dc5) 

Default maximum WFT for TX Flow Control.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`isotp_init`](#group__sys__can__isotp_1ga8537bab0a849633285a55167bfc89e3f)`(char * stack,int stacksize,char priority,const char * name)` 

Initialize the isotp layer.

#### Parameters
* `stack` stack for the isotp thread 

* `stacksize` size of `stack`

* `priority` priority of the isotp thread 

* `name` name of the isotp thread

#### Returns
the pid of the isotp thread

#### `public int `[`isotp_send`](#group__sys__can__isotp_1ga577e1b04dc07d886d2fd27489761e40a)`(struct `[`isotp`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp)` * isotp,const void * buf,int len,int flags)` 

Send data through an isotp channel.

#### Parameters
* `isotp` the channel to use 

* `buf` the data to send 

* `len` length of the data to send 

* `flags` flags for sending

#### Returns
the number of bytes sent 

#### Returns
< 0 if an error occurred (-EBUSY, -ENOMEM)

#### `public int `[`isotp_bind`](#group__sys__can__isotp_1gade6e7fa3baa47b7977a0a3093f8b56d6)`(struct `[`isotp`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp)` * isotp,`[`can_reg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1gaf7f206428cfaa802a3d5c06e14bd96cd)` * entry,void * arg,struct `[`isotp_fc_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__fc__options)` * fc_options)` 

Bind an isotp channel.

Initialize the channel, set the filter on the DLL and add the channel to the list of bound channels

#### Parameters
* `isotp` the channel to bind 

* `entry` entry identifying the CAN ifnum and the upper layer either by its pid or its mailbox 

* `fc_options` flow control parameters, bs and stmin for rx, wftmax for tx, if NULL, default values will be used 

* `arg` upper layer private parameter

#### Returns
0 on success, < 0 on error

#### `public int `[`isotp_release`](#group__sys__can__isotp_1ga411fa624525e458ff4b4698cbd2221f4)`(struct `[`isotp`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp)` * isotp)` 

Release a bound isotp channel.

Unset the filter on the DLL and remove the channel from the list of bound channels

#### Parameters
* `isotp` the channel to release

#### Returns
0 on success, < 0 on error

#### `public void `[`isotp_free_rx`](#group__sys__can__isotp_1gac746c5ecf982b8c40744ccd5d8ec2fdf)`(`[`can_rx_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga6cc31454463413d954343367ac66f5de)` * rx)` 

Free a received buffer.

This MUST be called by the upper layer when the received data are read

#### Parameters
* `rx` the received data

# struct `isotp_fc_options` 

The [isotp_fc_options](#structisotp__fc__options) struct.

It describes the flow control options

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`bs`](#structisotp__fc__options_1a9194f02473362d4c7537bff6683b98c0) | blocksize provided in FC frame, 0 = off
`public uint8_t `[`stmin`](#structisotp__fc__options_1ae90e1d16a7284b4af3bae01582463551) | separation time provided in FC frame 0x00 - 0x7F : 0 - 127 ms 0x80 - 0xF0 : reserved 0xF1 - 0xF9 : 100 us - 900 us 0xFA - 0xFF : reserved
`public uint8_t `[`wftmax`](#structisotp__fc__options_1a23c5ee36b7f47db285bbb3cac00d55d6) | max.

## Members

#### `public uint8_t `[`bs`](#structisotp__fc__options_1a9194f02473362d4c7537bff6683b98c0) 

blocksize provided in FC frame, 0 = off

#### `public uint8_t `[`stmin`](#structisotp__fc__options_1ae90e1d16a7284b4af3bae01582463551) 

separation time provided in FC frame 0x00 - 0x7F : 0 - 127 ms 0x80 - 0xF0 : reserved 0xF1 - 0xF9 : 100 us - 900 us 0xFA - 0xFF : reserved

#### `public uint8_t `[`wftmax`](#structisotp__fc__options_1a23c5ee36b7f47db285bbb3cac00d55d6) 

max.

number of wait frame transmiss., 0 = ignored

# struct `isotp_options` 

The [isotp_options](#structisotp__options) struct.

It describes the ISO-TP options

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`tx_id`](#structisotp__options_1aeff895c626d4e7724964c369ef2290c0) | transmit CAN ID
`public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`rx_id`](#structisotp__options_1a35dea1e6ab8c010d0da006ac40c5eb73) | Receive CAN ID.
`public uint16_t `[`flags`](#structisotp__options_1ae84633ac3d6b9bd2d92623d61d71f396) | set flags for isotp behaviour.
`public uint8_t `[`ext_address`](#structisotp__options_1a5f0a25cf62e2fa649c8a554602d69c8e) | set address for extended addressing
`public uint8_t `[`txpad_content`](#structisotp__options_1a0a0dbc21bbd0764b55199f1de2577056) | set content of padding byte (tx)
`public uint8_t `[`rx_ext_address`](#structisotp__options_1a2108b941acbc825ee44fe132095ce4e8) | set address for extended addressing

## Members

#### `public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`tx_id`](#structisotp__options_1aeff895c626d4e7724964c369ef2290c0) 

transmit CAN ID

#### `public `[`canid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__dll_1gaf1c86d266c4de5b8fb79e12ff38def1f)` `[`rx_id`](#structisotp__options_1a35dea1e6ab8c010d0da006ac40c5eb73) 

Receive CAN ID.

#### `public uint16_t `[`flags`](#structisotp__options_1ae84633ac3d6b9bd2d92623d61d71f396) 

set flags for isotp behaviour.

#### `public uint8_t `[`ext_address`](#structisotp__options_1a5f0a25cf62e2fa649c8a554602d69c8e) 

set address for extended addressing

#### `public uint8_t `[`txpad_content`](#structisotp__options_1a0a0dbc21bbd0764b55199f1de2577056) 

set content of padding byte (tx)

#### `public uint8_t `[`rx_ext_address`](#structisotp__options_1a2108b941acbc825ee44fe132095ce4e8) 

set address for extended addressing

# struct `tpcon` 

The tpcon struct.

It describes the current connection status

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`idx`](#structtpcon_1a105723ef16ec69a640fc9ca859a37279) | current index in `buf`
`public uint8_t `[`state`](#structtpcon_1a4731f1e8dd35cad65e8c6e6b2591af58) | the protocol state
`public uint8_t `[`bs`](#structtpcon_1a612fa474ae431f591e4318f88cecb9db) | block size
`public uint8_t `[`sn`](#structtpcon_1a375cc808a38566ac77c00f7a6402d083) | current sequence number
`public int `[`tx_handle`](#structtpcon_1a847e86824d92c84d8eb13d43ce89c7aa) | handle of the last sent frame
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`snip`](#structtpcon_1a1104ef7459440727bc225b581bf8e9c6) | allocated snip containing data buffer

## Members

#### `public unsigned `[`idx`](#structtpcon_1a105723ef16ec69a640fc9ca859a37279) 

current index in `buf`

#### `public uint8_t `[`state`](#structtpcon_1a4731f1e8dd35cad65e8c6e6b2591af58) 

the protocol state

#### `public uint8_t `[`bs`](#structtpcon_1a612fa474ae431f591e4318f88cecb9db) 

block size

#### `public uint8_t `[`sn`](#structtpcon_1a375cc808a38566ac77c00f7a6402d083) 

current sequence number

#### `public int `[`tx_handle`](#structtpcon_1a847e86824d92c84d8eb13d43ce89c7aa) 

handle of the last sent frame

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`snip`](#structtpcon_1a1104ef7459440727bc225b581bf8e9c6) 

allocated snip containing data buffer

# struct `isotp` 

The isotp struct.

This is the main struct used by an ISO-TP channel

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`isotp`](#structisotp)` * `[`next`](#structisotp_1a64270bc3113f126b617e03340d2491f7) | next bound channel
`public struct `[`isotp_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__options)` `[`opt`](#structisotp_1a13e672e58564db4cdb50cee1ddf5c8e7) | channel options
`public struct `[`isotp_fc_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__fc__options)` `[`rxfc`](#structisotp_1a34d978c59a2513842b615f317ea72583) | rx flow control options (defined locally)
`public struct `[`isotp_fc_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__fc__options)` `[`txfc`](#structisotp_1a7910213baa33ca2d6147465ccd59019d) | tx flow control options (defined remotely)
`public struct `[`tpcon`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structtpcon)` `[`tx`](#structisotp_1ac52468dfc9800a08318bbb7f4b22cefb) | transmit state
`public struct `[`tpcon`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structtpcon)` `[`rx`](#structisotp_1ab2c6aebc10b7fe15ffd304a1ece696f1) | receive state
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`tx_timer`](#structisotp_1aa42569def63365346d782292eccf0309) | timer for tx operations
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`rx_timer`](#structisotp_1a7186a49542f4da15393c809e82ea0d05) | timer for rx operations
`public `[`can_reg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1gaf7f206428cfaa802a3d5c06e14bd96cd)` `[`entry`](#structisotp_1ae1df16de6102eab09a2ccb9cdfdc2eb5) | entry containing ifnum and upper layer msg system
`public uint32_t `[`tx_gap`](#structisotp_1ab47b289c77d2030e284c59d427891c70) | transmit gap from fc (in us)
`public uint8_t `[`tx_wft`](#structisotp_1a1e0c91051cc85d4fe422bae7725768e5) | transmit wait counter
`public void * `[`arg`](#structisotp_1a1fcb2185b1c4af3095ef414a3f871922) | upper layer private arg

## Members

#### `public struct `[`isotp`](#structisotp)` * `[`next`](#structisotp_1a64270bc3113f126b617e03340d2491f7) 

next bound channel

#### `public struct `[`isotp_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__options)` `[`opt`](#structisotp_1a13e672e58564db4cdb50cee1ddf5c8e7) 

channel options

#### `public struct `[`isotp_fc_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__fc__options)` `[`rxfc`](#structisotp_1a34d978c59a2513842b615f317ea72583) 

rx flow control options (defined locally)

#### `public struct `[`isotp_fc_options`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structisotp__fc__options)` `[`txfc`](#structisotp_1a7910213baa33ca2d6147465ccd59019d) 

tx flow control options (defined remotely)

#### `public struct `[`tpcon`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structtpcon)` `[`tx`](#structisotp_1ac52468dfc9800a08318bbb7f4b22cefb) 

transmit state

#### `public struct `[`tpcon`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_isotp.md#structtpcon)` `[`rx`](#structisotp_1ab2c6aebc10b7fe15ffd304a1ece696f1) 

receive state

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`tx_timer`](#structisotp_1aa42569def63365346d782292eccf0309) 

timer for tx operations

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`rx_timer`](#structisotp_1a7186a49542f4da15393c809e82ea0d05) 

timer for rx operations

#### `public `[`can_reg_entry_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1gaf7f206428cfaa802a3d5c06e14bd96cd)` `[`entry`](#structisotp_1ae1df16de6102eab09a2ccb9cdfdc2eb5) 

entry containing ifnum and upper layer msg system

#### `public uint32_t `[`tx_gap`](#structisotp_1ab47b289c77d2030e284c59d427891c70) 

transmit gap from fc (in us)

#### `public uint8_t `[`tx_wft`](#structisotp_1a1e0c91051cc85d4fe422bae7725768e5) 

transmit wait counter

#### `public void * `[`arg`](#structisotp_1a1fcb2185b1c4af3095ef414a3f871922) 

upper layer private arg

