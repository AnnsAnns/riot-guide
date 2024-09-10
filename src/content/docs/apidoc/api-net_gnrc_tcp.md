---
title: api-net_gnrc_tcp.md
description: api-net_gnrc_tcp.md
---
# group `net_gnrc_tcp` 

RIOT's TCP implementation for the GNRC network stack.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_TCP_NO_TIMEOUT`](#group__net__gnrc__tcp_1ga8990180d4fe48882cbf7ec52658b847f)            | Special timeout value representing no timeout.
`public int `[`gnrc_tcp_ep_init`](#group__net__gnrc__tcp_1ga5ce1d01123352e4770987da103fedd17)`(`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep,int family,const uint8_t * addr,size_t addr_size,uint16_t port,uint16_t netif)`            | Initialize TCP connection endpoint.
`public int `[`gnrc_tcp_ep_from_str`](#group__net__gnrc__tcp_1ga7666cfa4bc1580eb1e937b67d30d2251)`(`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep,const char * str)`            | Construct TCP connection endpoint from string.
`public int `[`gnrc_tcp_init`](#group__net__gnrc__tcp_1ga36bd9191d96fb21d0c4e5fa1f226df8d)`(void)`            | Initialize TCP.
`public void `[`gnrc_tcp_tcb_init`](#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb)`            | Initialize Transmission Control Block (TCB)
`public void `[`gnrc_tcp_tcb_queue_init`](#group__net__gnrc__tcp_1ga166e6b6e0dd50643896ee7ee2c63deab)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue)`            | Initialize Transmission Control Block (TCB) queue.
`public int `[`gnrc_tcp_open`](#group__net__gnrc__tcp_1gaf6ec41c44d37c158708c8b1a93bf1689)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,const `[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * remote,uint16_t local_port)`            | Opens a connection.
`public int `[`gnrc_tcp_listen`](#group__net__gnrc__tcp_1gab496b5ab546527f6d91c84b50d96ba29)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue,`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcbs,size_t tcbs_len,const `[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * local)`            | Configures a sequence of TCBs to wait for incoming connections.
`public int `[`gnrc_tcp_accept`](#group__net__gnrc__tcp_1ga499581a9d44fda5811da9cd5dd9f4f2e)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue,`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` ** tcb,const uint32_t user_timeout_duration_ms)`            | Accept TCP connection from listening queue.
`public ssize_t `[`gnrc_tcp_send`](#group__net__gnrc__tcp_1gafc38ae571d6bbc7ae2bccebb537e6c8b)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,const void * data,const size_t len,const uint32_t user_timeout_duration_ms)`            | Transmit data to connected peer.
`public ssize_t `[`gnrc_tcp_recv`](#group__net__gnrc__tcp_1ga8ac7bffe626f81d750060ad2b53df5ba)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,void * data,const size_t max_len,const uint32_t user_timeout_duration_ms)`            | Receive Data from the peer.
`public void `[`gnrc_tcp_close`](#group__net__gnrc__tcp_1ga070b6a96d79dd93dac2ae938c200e831)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb)`            | Close a TCP connection.
`public void `[`gnrc_tcp_abort`](#group__net__gnrc__tcp_1gab662881dc7ede8cd0c4b8d4863e35f5d)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb)`            | Abort a TCP connection.
`public void `[`gnrc_tcp_stop_listen`](#group__net__gnrc__tcp_1ga21601e61906f44771602933157ba657c)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue)`            | Close connections and stop listening on TCB queue.
`public int `[`gnrc_tcp_get_local`](#group__net__gnrc__tcp_1ga43c0bd7af8523751aa0fdf296d773509)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep)`            | Get the local end point of a connected TCB.
`public int `[`gnrc_tcp_get_remote`](#group__net__gnrc__tcp_1ga7ac148c2fcc7d13dba2daf74cf4be084)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep)`            | Get the remote end point of a connected TCB.
`public int `[`gnrc_tcp_queue_get_local`](#group__net__gnrc__tcp_1ga37953462f0af9e367321628a3fcf506f)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue,`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep)`            | Gets the local end point of a TCB queue.
`public int `[`gnrc_tcp_calc_csum`](#group__net__gnrc__tcp_1ga3a3b7e47d3d7f804151db59ce618ad9b)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)`            | Calculate and set checksum in TCP header.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_tcp_hdr_build`](#group__net__gnrc__tcp_1ga339a9f090c32b9cf793e18e038f2e32e)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * payload,uint16_t src,uint16_t dst)`            | Adds a TCP header to a given payload.
`struct `[`gnrc_tcp_ep_t`](#structgnrc__tcp__ep__t) | Address information for a single TCP connection endpoint.

## Members

#### `define `[`GNRC_TCP_NO_TIMEOUT`](#group__net__gnrc__tcp_1ga8990180d4fe48882cbf7ec52658b847f) 

Special timeout value representing no timeout.

#### `public int `[`gnrc_tcp_ep_init`](#group__net__gnrc__tcp_1ga5ce1d01123352e4770987da103fedd17)`(`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep,int family,const uint8_t * addr,size_t addr_size,uint16_t port,uint16_t netif)` 

Initialize TCP connection endpoint.

#### Parameters
* `ep` Endpoint to initialize. 

* `family` Address family of `addr`. 

* `addr` Address for endpoint. 

* `addr_size` Size of `addr`. 

* `port` Port number for endpoint. 

* `netif` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface to use.

#### Returns
0 on success. 

#### Returns
-EAFNOSUPPORT if `address_family` is not supported. 

#### Returns
-EINVAL if `addr_size` does not match `family`.

#### `public int `[`gnrc_tcp_ep_from_str`](#group__net__gnrc__tcp_1ga7666cfa4bc1580eb1e937b67d30d2251)`(`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep,const char * str)` 

Construct TCP connection endpoint from string.

This function expects `str` in the IPv6 "URL" notation. The following strings specify a valid endpoint:

* [fe80::0a00:27ff:fe9f:7a5b%5]:8080 (with Port and Interface)

* [2001::0200:f8ff:fe21:67cf]:8080 (with Port)

* [2001::0200:f8ff:fe21:67cf] (addr only)

#### Parameters
* `ep` Endpoint to initialize. 

* `str` String containing IPv6-Address to parse.

#### Returns
0 on success. 

#### Returns
-EINVAL if parsing of `str` failed.

#### `public int `[`gnrc_tcp_init`](#group__net__gnrc__tcp_1ga36bd9191d96fb21d0c4e5fa1f226df8d)`(void)` 

Initialize TCP.

#### Returns
PID of TCP thread on success 

#### Returns
-1 if TCB is already running. 

#### Returns
-EINVAL, if priority is greater than or equal SCHED_PRIO_LEVELS 

#### Returns
-EOVERFLOW, if there are too many threads running.

#### `public void `[`gnrc_tcp_tcb_init`](#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb)` 

Initialize Transmission Control Block (TCB)

`tcb` must not be NULL.

#### Parameters
* `tcb` TCB that should be initialized.

#### `public void `[`gnrc_tcp_tcb_queue_init`](#group__net__gnrc__tcp_1ga166e6b6e0dd50643896ee7ee2c63deab)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue)` 

Initialize Transmission Control Block (TCB) queue.

`queue` must not be NULL.

#### Parameters
* `queue` TCB queue to initialize.

#### `public int `[`gnrc_tcp_open`](#group__net__gnrc__tcp_1gaf6ec41c44d37c158708c8b1a93bf1689)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,const `[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * remote,uint16_t local_port)` 

Opens a connection.

[gnrc_tcp_tcb_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca) must have been successfully called. 

`tcb` must not be NULL 

`remote` must not be NULL. 

`remote->port` must not be 0.

Blocks until a connection was established or an error occurred.

#### Parameters
* `tcb` TCB for this connection. 

* `remote` Remote endpoint to connect to. 

* `local_port` If zero or PORT_UNSPEC, the connections source port is randomly selected. If local_port is non-zero it is used as source port.

#### Returns
0 on success. 

#### Returns
-EAFNOSUPPORT if `remote` address_family is not supported. 

#### Returns
-EINVAL if `remote` and `tcb` address_family do not match or `target_addr` is invalid. 

#### Returns
-EISCONN if `tcb` is already connected. 

#### Returns
-ENOMEM if there are no receive buffer left to use for `tcb`. 

#### Returns
-EADDRINUSE if `local_port` is already in use. 

#### Returns
-ETIMEDOUT if the connection attempt timed out. 

#### Returns
-ECONNREFUSED if the connection attempt was reset by the peer.

#### `public int `[`gnrc_tcp_listen`](#group__net__gnrc__tcp_1gab496b5ab546527f6d91c84b50d96ba29)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue,`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcbs,size_t tcbs_len,const `[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * local)` 

Configures a sequence of TCBs to wait for incoming connections.

All TCBs behind `tcbs` must have been initialized via [gnrc_tcp_tcb_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca). 

`queue` must not be NULL. 

`tcbs` must not be NULL. 

`tcbs_len` must be greater 0. 

`local` len must be NULL. 

`local->port` must not be 0.

#### Parameters
* `queue` Listening queue for incoming connections. 

* `tcbs` TCBs associated with `queue`. 

* `tcbs_len` Number of TCBs behind `tcbs`. 

* `local` Endpoint specifying address and port to listen on.

#### Returns
0 on success. 

#### Returns
-EAFNOSUPPORT given address family in `local` is not supported. 

#### Returns
-EINVAL address_family in `tcbs` and `local` do not match. 

#### Returns
-EISCONN a TCB in `tcbs` is already connected. 

#### Returns
-ENOMEM all available receive buffers are in use. Increase GNRC_TCP_RCV_BUFFERS.

#### `public int `[`gnrc_tcp_accept`](#group__net__gnrc__tcp_1ga499581a9d44fda5811da9cd5dd9f4f2e)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue,`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` ** tcb,const uint32_t user_timeout_duration_ms)` 

Accept TCP connection from listening queue.

`queue` must not be NULL 

`tcb` must not be NULL

Function blocks if user_timeout_duration_us is not zero.

#### Parameters
* `queue` Listening queue to accept connection from. 

* `tcb` Pointer to TCB associated with a established connection. 

* `user_timeout_duration_ms` User specified timeout in milliseconds. If GNRC_TCP_NO_TIMEOUT the function blocks until a connection was established or an error occurred.

#### Returns
0 on success. 

#### Returns
-ENOMEM if all connection in `queue` were already accepted. 

#### Returns
-EINVAL if listen was never called on queue. 

#### Returns
-EAGAIN if `user_timeout_duration_ms` was 0 and no connection is ready to accept. 

#### Returns
-ETIMEDOUT if `user_timeout_duration_ms` was not 0 and no connection could be established.

#### `public ssize_t `[`gnrc_tcp_send`](#group__net__gnrc__tcp_1gafc38ae571d6bbc7ae2bccebb537e6c8b)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,const void * data,const size_t len,const uint32_t user_timeout_duration_ms)` 

Transmit data to connected peer.

[gnrc_tcp_tcb_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca) must have been successfully called. 

`tcb` must not be NULL. 

`data` must not be NULL.

Blocks until up to `len` bytes were transmitted or an error occurred.

#### Parameters
* `tcb` TCB holding the connection information. 

* `data` Pointer to the data that should be transmitted. 

* `len` Number of bytes that should be transmitted. 

* `user_timeout_duration_ms` If not zero and there was not data transmitted the function returns after user_timeout_duration_ms. If zero, no timeout will be triggered. If GNRC_TCP_NO_TIMEOUT the timeout is disabled causing the function to block until some data was transmitted or and error occurred.

#### Returns
The number of successfully transmitted bytes. 

#### Returns
-ENOTCONN if connection is not established. 

#### Returns
-ECONNRESET if connection was reset by the peer. 

#### Returns
-ECONNABORTED if the connection was aborted. 

#### Returns
-ETIMEDOUT if `user_timeout_duration_ms` expired.

#### `public ssize_t `[`gnrc_tcp_recv`](#group__net__gnrc__tcp_1ga8ac7bffe626f81d750060ad2b53df5ba)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,void * data,const size_t max_len,const uint32_t user_timeout_duration_ms)` 

Receive Data from the peer.

[gnrc_tcp_tcb_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca) must have been successfully called. 

`tcb` must not be NULL. 

`data` must not be NULL.

Function blocks if user_timeout_duration_us is not zero.

#### Parameters
* `tcb` TCB holding the connection information. 

* `data` Pointer to the buffer where the received data should be copied into. 

* `max_len` Maximum amount to bytes that should be read into `data`. 

* `user_timeout_duration_ms` Timeout for receive in milliseconds. If zero and no data is available, the function returns immediately. If not zero the function blocks until data is available or `user_timeout_duration_ms` milliseconds passed. If GNRC_TCP_NO_TIMEOUT, causing the function to block until some data was available or an error occurred.

#### Returns
The number of bytes read into `data`. 

#### Returns
0, if the connection is closing and no further data can be read or `max_len` was 0. 

#### Returns
-ENOTCONN if connection is not established. 

#### Returns
-EAGAIN if user_timeout_duration_us is zero and no data is available. 

#### Returns
-ECONNRESET if connection was reset by the peer. 

#### Returns
-ECONNABORTED if the connection was aborted. 

#### Returns
-ETIMEDOUT if `user_timeout_duration_ms` expired.

#### `public void `[`gnrc_tcp_close`](#group__net__gnrc__tcp_1ga070b6a96d79dd93dac2ae938c200e831)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb)` 

Close a TCP connection.

[gnrc_tcp_tcb_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca) must have been successfully called. 

`tcb` must not be NULL.

#### Parameters
* `tcb` TCB holding the connection information.

#### `public void `[`gnrc_tcp_abort`](#group__net__gnrc__tcp_1gab662881dc7ede8cd0c4b8d4863e35f5d)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb)` 

Abort a TCP connection.

[gnrc_tcp_tcb_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__tcp_1gafa3fa572c52592c2e24c6d29fe1fcdca) must have been successfully called. 

`tcb` must not be NULL.

#### Parameters
* `tcb` TCB holding the connection information.

#### `public void `[`gnrc_tcp_stop_listen`](#group__net__gnrc__tcp_1ga21601e61906f44771602933157ba657c)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue)` 

Close connections and stop listening on TCB queue.

`queue` must not be NULL

: Blocks until all currently opened connections maintained by `queue` were closed.

#### Parameters
* `queue` TCB queue to stop listening

#### `public int `[`gnrc_tcp_get_local`](#group__net__gnrc__tcp_1ga43c0bd7af8523751aa0fdf296d773509)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep)` 

Get the local end point of a connected TCB.

tcb must not be NULL 

ep must not be NULL

#### Parameters
* `tcb` TCB holding the connection information. 

* `ep` The local end point.

#### Returns
0 on success. 

#### Returns
-EADDRNOTAVAIL, when `tcb` in not in a connected state.

#### `public int `[`gnrc_tcp_get_remote`](#group__net__gnrc__tcp_1ga7ac148c2fcc7d13dba2daf74cf4be084)`(`[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * tcb,`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep)` 

Get the remote end point of a connected TCB.

tcb must not be NULL 

ep must not be NULL

#### Parameters
* `tcb` TCB holding the connection information. 

* `ep` The remote end point.

#### Returns
0 on success. 

#### Returns
-ENOTCONN, when `tcb` in not in a connected state.

#### `public int `[`gnrc_tcp_queue_get_local`](#group__net__gnrc__tcp_1ga37953462f0af9e367321628a3fcf506f)`(`[`gnrc_tcp_tcb_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a43e72fac1898b02fc32dcfe97617e71c)` * queue,`[`gnrc_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_tcp.md#structgnrc__tcp__ep__t)` * ep)` 

Gets the local end point of a TCB queue.

queue must not be NULL 

ep must not be NULL

#### Parameters
* `queue` TCB queue to stop listening 

* `ep` The local end point.

#### Returns
0 on success. 

#### Returns
-EADDRNOTAVAIL, when `queue` has no local end point.

#### `public int `[`gnrc_tcp_calc_csum`](#group__net__gnrc__tcp_1ga3a3b7e47d3d7f804151db59ce618ad9b)`(const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * hdr,const `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * pseudo_hdr)` 

Calculate and set checksum in TCP header.

#### Parameters
* `hdr` Gnrc_pktsnip that contains TCP header. 

* `pseudo_hdr` Gnrc_pktsnip that contains network layer header.

#### Returns
0 on success. 

#### Returns
-EFAULT if `hdr` or pseudo_hdr were NULL 

#### Returns
-EBADMSG if `hdr` is not of type GNRC_NETTYPE_TCP 

#### Returns
-ENOENT if `pseudo_hdr` protocol is unsupported.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`gnrc_tcp_hdr_build`](#group__net__gnrc__tcp_1ga339a9f090c32b9cf793e18e038f2e32e)`(`[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * payload,uint16_t src,uint16_t dst)` 

Adds a TCP header to a given payload.

#### Parameters
* `payload` Payload that follows the TCP header. 

* `src` Source port number. 

* `dst` Destination port number.

#### Returns
Not NULL on success. 

#### Returns
NULL if TCP header was not allocated.

# struct `gnrc_tcp_ep_t` 

```
struct gnrc_tcp_ep_t
  : public _sock_tl_ep
```  

Address information for a single TCP connection endpoint.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`family`](#structgnrc__tcp__ep__t_1a40f51ca3cf7744e90a370091497c62c8) | IP address family.
`public uint8_t `[`ipv6`](#structgnrc__tcp__ep__t_1a10fb17a4e8ab05e39f380beb90a8b0ac) | IPv6 address storage.
`public uint8_t `[`dummy`](#structgnrc__tcp__ep__t_1aecd9d300507bc830b999d9f86400c1f6) | Enable build without network module.
`public union gnrc_tcp_ep_t::@374 `[`addr`](#structgnrc__tcp__ep__t_1a53f1c33062ddeeab57705aa9f8ed8017) | IP address storage.
`public uint16_t `[`netif`](#structgnrc__tcp__ep__t_1a100b5930e95637d4caf66276dd452556) | [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface ID.
`public uint16_t `[`port`](#structgnrc__tcp__ep__t_1a5258be82544e488be5bc61abd55b7a88) | Port number (in host byte order)

## Members

#### `public int `[`family`](#structgnrc__tcp__ep__t_1a40f51ca3cf7744e90a370091497c62c8) 

IP address family.

#### `public uint8_t `[`ipv6`](#structgnrc__tcp__ep__t_1a10fb17a4e8ab05e39f380beb90a8b0ac) 

IPv6 address storage.

#### `public uint8_t `[`dummy`](#structgnrc__tcp__ep__t_1aecd9d300507bc830b999d9f86400c1f6) 

Enable build without network module.

#### `public union gnrc_tcp_ep_t::@374 `[`addr`](#structgnrc__tcp__ep__t_1a53f1c33062ddeeab57705aa9f8ed8017) 

IP address storage.

#### `public uint16_t `[`netif`](#structgnrc__tcp__ep__t_1a100b5930e95637d4caf66276dd452556) 

[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface ID.

#### `public uint16_t `[`port`](#structgnrc__tcp__ep__t_1a5258be82544e488be5bc61abd55b7a88) 

Port number (in host byte order)

