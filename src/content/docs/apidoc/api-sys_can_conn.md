---
title: api-sys_can_conn.md
description: api-sys_can_conn.md
---
# group `sys_can_conn` 

conn interface for CAN stack

This is the user interface to send and receive raw CAN frames or ISO-TP datagrams

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONN_CAN_RAW_MBOX_SIZE`](#group__sys__can__conn_1ga3945de33eb58a1d772e1569af2a901ff)            | Mailbox size of a conn_can_raw_t.
`public int `[`conn_can_raw_create`](#group__sys__can__conn_1ga0b41fff044abd1ce90bcb24f46d5fe22)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` * filter,size_t count,int ifnum,int flags)`            | Create can connection socket.
`public int `[`conn_can_raw_close`](#group__sys__can__conn_1ga800fea744ba7cb991704c523781cf1d9)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn)`            | Close can connection socket.
`public int `[`conn_can_raw_recv`](#group__sys__can__conn_1ga7ccbae0bb14bb1b262fe76431152420f)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * frame,uint32_t timeout)`            | Generic can receive.
`public int `[`conn_can_raw_send`](#group__sys__can__conn_1gae9a1ec9126768c0691b1b6775c4959b6)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,const struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * frame,int flags)`            | Generic can send.
`public int `[`conn_can_raw_set_filter`](#group__sys__can__conn_1gaab1e098f39e1227a98d799e68fe4299d)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` * filter,size_t count)`            | Set raw CAN filters.
`struct `[`conn_can_raw`](#structconn__can__raw) | RAW CAN connection.

## Members

#### `define `[`CONN_CAN_RAW_MBOX_SIZE`](#group__sys__can__conn_1ga3945de33eb58a1d772e1569af2a901ff) 

Mailbox size of a conn_can_raw_t.

#### `public int `[`conn_can_raw_create`](#group__sys__can__conn_1ga0b41fff044abd1ce90bcb24f46d5fe22)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` * filter,size_t count,int ifnum,int flags)` 

Create can connection socket.

#### Parameters
* `conn` CAN connection 

* `filter` list of filters to set 

* `count` number of filters in `filter`

* `ifnum` can device Interface 

* `flags` conn flags to set (CONN_CAN_RECVONLY)

`filter` must remain allocated until `conn` is closed

#### Returns
0 if socket was successfully connected 

#### Returns
any other negative number in case of an error

#### `public int `[`conn_can_raw_close`](#group__sys__can__conn_1ga800fea744ba7cb991704c523781cf1d9)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn)` 

Close can connection socket.

#### Parameters
* `conn` CAN connection

#### Returns
0 if conn is closed correctly 

#### Returns
any other negative number in case of an error.

#### `public int `[`conn_can_raw_recv`](#group__sys__can__conn_1ga7ccbae0bb14bb1b262fe76431152420f)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * frame,uint32_t timeout)` 

Generic can receive.

#### Parameters
* `conn` CAN connection 

* `frame` CAN frame to receive 

* `timeout` timeout in us, 0 for infinite

#### Returns
the number of bytes received 

#### Returns
any other negative number in case of an error

#### `public int `[`conn_can_raw_send`](#group__sys__can__conn_1gae9a1ec9126768c0691b1b6775c4959b6)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,const struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * frame,int flags)` 

Generic can send.

#### Parameters
* `conn` CAN connection 

* `frame` frame to send 

* `flags` make function blocked or not (CONN_CAN_DONTWAIT to ignore tx confirmation)

#### Returns
the number of bytes sent 

#### Returns
any other negative number in case of an error

#### `public int `[`conn_can_raw_set_filter`](#group__sys__can__conn_1gaab1e098f39e1227a98d799e68fe4299d)`(`[`conn_can_raw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1ga307fb3a09e66b203ad74517db7f8f8ef)` * conn,struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` * filter,size_t count)` 

Set raw CAN filters.

If filters were already set for this connection, it first unsets the previous filters and sets the new ones.

#### Parameters
* `conn` CAN connection 

* `filter` list of filters to set 

* `count` number of filters in `filter`

previously set filters must be allocated until the end of the call 

`filter` must remain allocated until `conn` is closed or [conn_can_raw_set_filter()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__conn_1gaab1e098f39e1227a98d799e68fe4299d) is called

#### Returns
0 if can filters were successfully set 

#### Returns
any other negative number in case of an error

# struct `conn_can_raw` 

RAW CAN connection.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`ifnum`](#structconn__can__raw_1acda8903e00e5580ebffca0c0fb38e3db) | Interface number of the can device.
`public int `[`flags`](#structconn__can__raw_1acc4612a55ac42c52245ba93fea6f8b52) | Config flags for that conn object.
`public size_t `[`count`](#structconn__can__raw_1a92828697bf0fda45c8366df0b1350bf0) | number of filters set
`public struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` * `[`filter`](#structconn__can__raw_1a014fb1f9fabe4514e3a16e5e96ac5cfc) | list of filter
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structconn__can__raw_1ab61a2fc21eaed40a7764b69bfd81b555) | mbox
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`mbox_queue`](#structconn__can__raw_1a539154f093541d9276d02e5a6c96c264) | message queue

## Members

#### `public int `[`ifnum`](#structconn__can__raw_1acda8903e00e5580ebffca0c0fb38e3db) 

Interface number of the can device.

#### `public int `[`flags`](#structconn__can__raw_1acc4612a55ac42c52245ba93fea6f8b52) 

Config flags for that conn object.

#### `public size_t `[`count`](#structconn__can__raw_1a92828697bf0fda45c8366df0b1350bf0) 

number of filters set

#### `public struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` * `[`filter`](#structconn__can__raw_1a014fb1f9fabe4514e3a16e5e96ac5cfc) 

list of filter

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structconn__can__raw_1ab61a2fc21eaed40a7764b69bfd81b555) 

mbox

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`mbox_queue`](#structconn__can__raw_1a539154f093541d9276d02e5a6c96c264) 

message queue

