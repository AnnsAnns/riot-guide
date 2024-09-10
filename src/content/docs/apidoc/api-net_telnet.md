---
title: api-net_telnet.md
description: api-net_telnet.md
---
# group `net_telnet` 

Telnet server functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_TELNET_PORT`](#group__net__telnet_1ga29c3e3f5f1de15415927584218993db7)            | The port for the Telnet server to listen on.
`public int `[`telnet_server_start`](#group__net__telnet_1gaa8c1c3649a0a1c074009a187b28fac19)`(void)`            | Start the Telnet server thread.
`public int `[`telnet_server_write`](#group__net__telnet_1ga243d5b0d3c5975278d491c95905edc65)`(const void * buffer,size_t len)`            | Write data to the telnet client.
`public int `[`telnet_server_read`](#group__net__telnet_1ga3186c8bdf9226f5c5cd2408517c6bbb5)`(void * buffer,size_t count)`            | Read data from the telnet client, will block until data is available.
`public void `[`telnet_server_disconnect`](#group__net__telnet_1ga366f2d41ecbb86fb7b92111eae40f520)`(void)`            | Request to disconnect the current client.
`public void `[`telnet_cb_pre_connected`](#group__net__telnet_1ga2c0272e6e98c9a329a30bd5cc3c24071)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)`            | Callback function that gets called when a telnet client connects but before stdio is redirected.
`public void `[`telnet_cb_connected`](#group__net__telnet_1ga507ed3ae2f0a16aafbf2c0a163ab2cf7)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)`            | Callback function that gets called when a telnet client connects after stdio is redirected.
`public void `[`telnet_cb_disconneced`](#group__net__telnet_1gadf34d3147740b4fa6e2177043e312b02)`(void)`            | Callback function that gets called after a telnet client disconnected.

## Members

#### `define `[`CONFIG_TELNET_PORT`](#group__net__telnet_1ga29c3e3f5f1de15415927584218993db7) 

The port for the Telnet server to listen on.

#### `public int `[`telnet_server_start`](#group__net__telnet_1gaa8c1c3649a0a1c074009a187b28fac19)`(void)` 

Start the Telnet server thread.

#### Returns
0 on success, error otherwise

#### `public int `[`telnet_server_write`](#group__net__telnet_1ga243d5b0d3c5975278d491c95905edc65)`(const void * buffer,size_t len)` 

Write data to the telnet client.

#### Parameters
* `buffer` The buffer to send to the client 

* `len` The length of the buffer

#### Returns
0 on success, error otherwise

#### `public int `[`telnet_server_read`](#group__net__telnet_1ga3186c8bdf9226f5c5cd2408517c6bbb5)`(void * buffer,size_t count)` 

Read data from the telnet client, will block until data is available.

#### Parameters
* `buffer` The buffer to write data from the client 

* `count` Number of bytes to read

#### Returns
number of bytes read, error otherwise

#### `public void `[`telnet_server_disconnect`](#group__net__telnet_1ga366f2d41ecbb86fb7b92111eae40f520)`(void)` 

Request to disconnect the current client.

This only sets the disconnect request flag, so it's safe to call
     this from interrupt context.

#### `public void `[`telnet_cb_pre_connected`](#group__net__telnet_1ga2c0272e6e98c9a329a30bd5cc3c24071)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)` 

Callback function that gets called when a telnet client connects but before stdio is redirected.

#### Parameters
* `sock` Socket of the client that just connected only use with [sock_tcp_get_local](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga2610c60b32f1a41f2be9ed4b914d4134)

#### `public void `[`telnet_cb_connected`](#group__net__telnet_1ga507ed3ae2f0a16aafbf2c0a163ab2cf7)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)` 

Callback function that gets called when a telnet client connects after stdio is redirected.

#### Parameters
* `sock` Socket of the client that just connected only use with [sock_tcp_get_local](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga2610c60b32f1a41f2be9ed4b914d4134)

#### `public void `[`telnet_cb_disconneced`](#group__net__telnet_1gadf34d3147740b4fa6e2177043e312b02)`(void)` 

Callback function that gets called after a telnet client disconnected.

