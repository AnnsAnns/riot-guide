---
title: api-pkg_lwip_sock.md
description: api-pkg_lwip_sock.md
---
# group `pkg_lwip_sock` 

Provides an implementation of the [Sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock) for the [lwIP network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`lwip_sock_base`](#structlwip__sock__base) | Sock base type.
`struct `[`sock_ip`](#structsock__ip) | Raw IP sock type.
`struct `[`sock_tcp`](#structsock__tcp) | TCP sock type.
`struct `[`sock_tcp_queue`](#structsock__tcp__queue) | TCP queue type.
`struct `[`sock_udp`](#structsock__udp) | UDP sock type.

# struct `lwip_sock_base` 

Sock base type.

For network stack internal purposes only. Do not access members externally.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct netconn * `[`conn`](#structlwip__sock__base_1a6571565bf33baededf40cf857350b8d6) | lwIP network connection object

## Members

#### `public struct netconn * `[`conn`](#structlwip__sock__base_1a6571565bf33baededf40cf857350b8d6) 

lwIP network connection object

# struct `sock_ip` 

Raw IP sock type.

For network stack internal purposes only. Do not access members externally.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__ip_1a704d3f4d04d9658ab189e60f46757039) | parent class
`public `[`gnrc_sock_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sock_1ga0361f554346d114bf4129d0d95085ebb)` `[`reg`](#structsock__ip_1a1ce7783972a5a795829eae9bcb6d315c) | netreg info
`public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`local`](#structsock__ip_1a452935139c80a2a699f728c9176cbb60) | local end-point
`public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`remote`](#structsock__ip_1ab1548e96a4ac10872e57bd76609861f3) | remote end-point
`public uint16_t `[`flags`](#structsock__ip_1a1217cd6c584015ef565a4082355c1983) | option flags

## Members

#### `public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__ip_1a704d3f4d04d9658ab189e60f46757039) 

parent class

#### `public `[`gnrc_sock_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sock_1ga0361f554346d114bf4129d0d95085ebb)` `[`reg`](#structsock__ip_1a1ce7783972a5a795829eae9bcb6d315c) 

netreg info

#### `public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`local`](#structsock__ip_1a452935139c80a2a699f728c9176cbb60) 

local end-point

#### `public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`remote`](#structsock__ip_1ab1548e96a4ac10872e57bd76609861f3) 

remote end-point

#### `public uint16_t `[`flags`](#structsock__ip_1a1217cd6c584015ef565a4082355c1983) 

option flags

# struct `sock_tcp` 

TCP sock type.

Transmission control block of GNRC TCP.

For network stack internal purposes only. Do not access members externally.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__tcp_1a4129134dd2004fba1b4806525766f811) | parent class
`public struct `[`sock_tcp_queue`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp__queue)` * `[`queue`](#structsock__tcp_1ac60f63521c384bec5f7cacdd660b9ac4) | Queue the sock might have been generated from.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structsock__tcp_1a2caa32e367040bbb97d821e301f65a04) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to protect the sock.
`public struct pbuf * `[`last_buf`](#structsock__tcp_1ad7c5415de0d7ff0fbe3576bc2e54d553) | Last received data.
`public ssize_t `[`last_offset`](#structsock__tcp_1a4d198f427aaca73ec9ec6ba7969506e0) | Offset in struct [sock_tcp::last_buf](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp_1ad7c5415de0d7ff0fbe3576bc2e54d553) since last read.
`public uint8_t `[`address_family`](#structsock__tcp_1a0fe9160f5dc30397509817c1df9bbeef) | Address Family of local_addr / peer_addr.
`public uint8_t `[`local_addr`](#structsock__tcp_1ad1b28c33a94e020402f73b571df97f59) | Local IP address.
`public uint8_t `[`peer_addr`](#structsock__tcp_1a339b9f3003bd8289dcb2a763fe736317) | Peer IP address.
`public int8_t `[`ll_iface`](#structsock__tcp_1a9f65d4eb915257ee05e1794ea09a92ce) | Link layer interface id to use.
`public uint16_t `[`local_port`](#structsock__tcp_1a13c44f7c0e72684c9bcf677da741f664) | Local connections port number.
`public uint16_t `[`peer_port`](#structsock__tcp_1ad5bb6d614bf7114d74b7bafef26677f9) | Peer connections port number.
`public uint8_t `[`state`](#structsock__tcp_1a23126f1ad1223dc2edf2830d676b5060) | Connections state.
`public uint8_t `[`status`](#structsock__tcp_1a66d66aa3489971c9934fa3affc831574) | A connections status flags.
`public uint32_t `[`snd_una`](#structsock__tcp_1a5559d0543357f90e1538c45d7cda83af) | Send unacknowledged.
`public uint32_t `[`snd_nxt`](#structsock__tcp_1a852480a35252cad0a5850d014a3b5200) | Send next.
`public uint16_t `[`snd_wnd`](#structsock__tcp_1a1645a250dec27baa5335c7d663e09577) | Send window.
`public uint32_t `[`snd_wl1`](#structsock__tcp_1a98402b1461d642992a7ad025425d98b4) | SeqNo.
`public uint32_t `[`snd_wl2`](#structsock__tcp_1a7c7eb5477d9b3e0010de80c6009fbc48) | AckNo.
`public uint32_t `[`rcv_nxt`](#structsock__tcp_1ae4d1a083302981492af7ea5410a2dfbe) | Receive next.
`public uint16_t `[`rcv_wnd`](#structsock__tcp_1a7384869b87dbcdaae7cb2173a0e8079c) | Receive window.
`public uint32_t `[`iss`](#structsock__tcp_1a644b170a9882c4eeea7281ccc7b89313) | Initial sequence sumber.
`public uint32_t `[`irs`](#structsock__tcp_1aa23468c3740a701934d7b8d143790240) | Initial received sequence number.
`public uint16_t `[`mss`](#structsock__tcp_1a7052138a51f2beb652fdd343a823dd62) | The peers MSS.
`public uint32_t `[`rtt_start`](#structsock__tcp_1a89035e25b041987e7100de196786cde7) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) value for rtt estimation.
`public int32_t `[`rtt_var`](#structsock__tcp_1a7b7a4ca7484856f191b3929bf3f864aa) | Round trip time variance.
`public int32_t `[`srtt`](#structsock__tcp_1ad9f87ac263250f540cad6289d40e0aaf) | Smoothed round trip time.
`public int32_t `[`rto`](#structsock__tcp_1a3e0047015532f209c1516bc252532c3b) | Retransmission timeout duration.
`public uint8_t `[`retries`](#structsock__tcp_1af81b79b847d64efc349dfe073fc8de57) | Number of retransmissions.
`public `[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` `[`event_retransmit`](#structsock__tcp_1a5333c5bb1307724d8c4c3d2a049b1bb2) | Retransmission event.
`public `[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` `[`event_timeout`](#structsock__tcp_1a3cdbe3150223ce0d374e8ccdc9757c93) | Timeout event.
`public `[`evtimer_mbox_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__mbox__event__t)` `[`event_misc`](#structsock__tcp_1a3782ca34e383d622a84d964074f93c18) | General purpose event.
`public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt_retransmit`](#structsock__tcp_1a7402546a77689011801e9e2f72b23897) | Pointer to packet in "retransmit queue".
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structsock__tcp_1a79b859358c82f002e39c04413524069a) | TCB mbox for synchronization.
`public uint8_t * `[`rcv_buf_raw`](#structsock__tcp_1ae5fc430c8b0757837ef7c3c10306163a) | Pointer to the receive buffer.
`public `[`ringbuffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structringbuffer__t)` `[`rcv_buf`](#structsock__tcp_1a2c3af3f9263139d75aae94ceb4d2cde8) | Receive buffer data structure.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`fsm_lock`](#structsock__tcp_1a0bcb15e72d4e460cc4a6a0a47b34c9c3) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for FSM access synchronization.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`function_lock`](#structsock__tcp_1ab5f57d42b51c14e69143d4771c6593bf) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for function call synchronization.
`public struct `[`sock_tcp`](#structsock__tcp)` * `[`next`](#structsock__tcp_1ab6a7d487af18efff8ca09cf93fc133aa) | Pointer next TCB.

## Members

#### `public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__tcp_1a4129134dd2004fba1b4806525766f811) 

parent class

#### `public struct `[`sock_tcp_queue`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp__queue)` * `[`queue`](#structsock__tcp_1ac60f63521c384bec5f7cacdd660b9ac4) 

Queue the sock might have been generated from.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structsock__tcp_1a2caa32e367040bbb97d821e301f65a04) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to protect the sock.

#### `public struct pbuf * `[`last_buf`](#structsock__tcp_1ad7c5415de0d7ff0fbe3576bc2e54d553) 

Last received data.

#### `public ssize_t `[`last_offset`](#structsock__tcp_1a4d198f427aaca73ec9ec6ba7969506e0) 

Offset in struct [sock_tcp::last_buf](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp_1ad7c5415de0d7ff0fbe3576bc2e54d553) since last read.

#### `public uint8_t `[`address_family`](#structsock__tcp_1a0fe9160f5dc30397509817c1df9bbeef) 

Address Family of local_addr / peer_addr.

#### `public uint8_t `[`local_addr`](#structsock__tcp_1ad1b28c33a94e020402f73b571df97f59) 

Local IP address.

#### `public uint8_t `[`peer_addr`](#structsock__tcp_1a339b9f3003bd8289dcb2a763fe736317) 

Peer IP address.

#### `public int8_t `[`ll_iface`](#structsock__tcp_1a9f65d4eb915257ee05e1794ea09a92ce) 

Link layer interface id to use.

#### `public uint16_t `[`local_port`](#structsock__tcp_1a13c44f7c0e72684c9bcf677da741f664) 

Local connections port number.

#### `public uint16_t `[`peer_port`](#structsock__tcp_1ad5bb6d614bf7114d74b7bafef26677f9) 

Peer connections port number.

#### `public uint8_t `[`state`](#structsock__tcp_1a23126f1ad1223dc2edf2830d676b5060) 

Connections state.

#### `public uint8_t `[`status`](#structsock__tcp_1a66d66aa3489971c9934fa3affc831574) 

A connections status flags.

#### `public uint32_t `[`snd_una`](#structsock__tcp_1a5559d0543357f90e1538c45d7cda83af) 

Send unacknowledged.

#### `public uint32_t `[`snd_nxt`](#structsock__tcp_1a852480a35252cad0a5850d014a3b5200) 

Send next.

#### `public uint16_t `[`snd_wnd`](#structsock__tcp_1a1645a250dec27baa5335c7d663e09577) 

Send window.

#### `public uint32_t `[`snd_wl1`](#structsock__tcp_1a98402b1461d642992a7ad025425d98b4) 

SeqNo.

from last window update

#### `public uint32_t `[`snd_wl2`](#structsock__tcp_1a7c7eb5477d9b3e0010de80c6009fbc48) 

AckNo.

from last window update

#### `public uint32_t `[`rcv_nxt`](#structsock__tcp_1ae4d1a083302981492af7ea5410a2dfbe) 

Receive next.

#### `public uint16_t `[`rcv_wnd`](#structsock__tcp_1a7384869b87dbcdaae7cb2173a0e8079c) 

Receive window.

#### `public uint32_t `[`iss`](#structsock__tcp_1a644b170a9882c4eeea7281ccc7b89313) 

Initial sequence sumber.

#### `public uint32_t `[`irs`](#structsock__tcp_1aa23468c3740a701934d7b8d143790240) 

Initial received sequence number.

#### `public uint16_t `[`mss`](#structsock__tcp_1a7052138a51f2beb652fdd343a823dd62) 

The peers MSS.

#### `public uint32_t `[`rtt_start`](#structsock__tcp_1a89035e25b041987e7100de196786cde7) 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) value for rtt estimation.

#### `public int32_t `[`rtt_var`](#structsock__tcp_1a7b7a4ca7484856f191b3929bf3f864aa) 

Round trip time variance.

#### `public int32_t `[`srtt`](#structsock__tcp_1ad9f87ac263250f540cad6289d40e0aaf) 

Smoothed round trip time.

#### `public int32_t `[`rto`](#structsock__tcp_1a3e0047015532f209c1516bc252532c3b) 

Retransmission timeout duration.

#### `public uint8_t `[`retries`](#structsock__tcp_1af81b79b847d64efc349dfe073fc8de57) 

Number of retransmissions.

#### `public `[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` `[`event_retransmit`](#structsock__tcp_1a5333c5bb1307724d8c4c3d2a049b1bb2) 

Retransmission event.

#### `public `[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` `[`event_timeout`](#structsock__tcp_1a3cdbe3150223ce0d374e8ccdc9757c93) 

Timeout event.

#### `public `[`evtimer_mbox_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__mbox__event__t)` `[`event_misc`](#structsock__tcp_1a3782ca34e383d622a84d964074f93c18) 

General purpose event.

#### `public `[`gnrc_pktsnip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt_1ga961e6ea05309a3d69a4d96f4a2dedb63)` * `[`pkt_retransmit`](#structsock__tcp_1a7402546a77689011801e9e2f72b23897) 

Pointer to packet in "retransmit queue".

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structsock__tcp_1a79b859358c82f002e39c04413524069a) 

TCB mbox for synchronization.

#### `public uint8_t * `[`rcv_buf_raw`](#structsock__tcp_1ae5fc430c8b0757837ef7c3c10306163a) 

Pointer to the receive buffer.

#### `public `[`ringbuffer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structringbuffer__t)` `[`rcv_buf`](#structsock__tcp_1a2c3af3f9263139d75aae94ceb4d2cde8) 

Receive buffer data structure.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`fsm_lock`](#structsock__tcp_1a0bcb15e72d4e460cc4a6a0a47b34c9c3) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for FSM access synchronization.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`function_lock`](#structsock__tcp_1ab5f57d42b51c14e69143d4771c6593bf) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for function call synchronization.

#### `public struct `[`sock_tcp`](#structsock__tcp)` * `[`next`](#structsock__tcp_1ab6a7d487af18efff8ca09cf93fc133aa) 

Pointer next TCB.

# struct `sock_tcp_queue` 

TCP queue type.

Transmission control block queue.

For network stack internal purposes only. Do not access members externally.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__tcp__queue_1a385837f6726f38935e465074a495bf27) | parent class
`public struct `[`sock_tcp`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp)` * `[`array`](#structsock__tcp__queue_1aa1b25d0a40c11775ac43d96cacf97136) | Allocation array for sock objects to generate.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structsock__tcp__queue_1ac198881ebb7f83a33b3655b9fae78abc) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to protect the queue.
`public unsigned short `[`len`](#structsock__tcp__queue_1a4dc0f23ae847266ae80cf533dbb6f454) | Length of the struct [sock_tcp_queue::array](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp__queue_1aa1b25d0a40c11775ac43d96cacf97136).
`public unsigned short `[`used`](#structsock__tcp__queue_1aa2b647613b4b1aaff63eac2a8fe0423b) | Used entries in struct [sock_tcp_queue::array](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp__queue_1aa1b25d0a40c11775ac43d96cacf97136).
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structsock__tcp__queue_1a1d5387e7ea1e122842d4831ddd49d1f0) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for access synchronization.
`public `[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * `[`tcbs`](#structsock__tcp__queue_1a2c040e364a96e43d1bab02a2830e1c1d) | Pointer to TCB sequence.
`public size_t `[`tcbs_len`](#structsock__tcp__queue_1a5569a0802580a1b4b6f04708c91875d0) | Number of TCBs behind member tcbs.

## Members

#### `public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__tcp__queue_1a385837f6726f38935e465074a495bf27) 

parent class

#### `public struct `[`sock_tcp`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp)` * `[`array`](#structsock__tcp__queue_1aa1b25d0a40c11775ac43d96cacf97136) 

Allocation array for sock objects to generate.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structsock__tcp__queue_1ac198881ebb7f83a33b3655b9fae78abc) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to protect the queue.

#### `public unsigned short `[`len`](#structsock__tcp__queue_1a4dc0f23ae847266ae80cf533dbb6f454) 

Length of the struct [sock_tcp_queue::array](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp__queue_1aa1b25d0a40c11775ac43d96cacf97136).

#### `public unsigned short `[`used`](#structsock__tcp__queue_1aa2b647613b4b1aaff63eac2a8fe0423b) 

Used entries in struct [sock_tcp_queue::array](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp__queue_1aa1b25d0a40c11775ac43d96cacf97136).

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structsock__tcp__queue_1a1d5387e7ea1e122842d4831ddd49d1f0) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for access synchronization.

#### `public `[`gnrc_tcp_tcb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tcb_8h_1a99cddf6a4781d0aaaa6191c6de4917d4)` * `[`tcbs`](#structsock__tcp__queue_1a2c040e364a96e43d1bab02a2830e1c1d) 

Pointer to TCB sequence.

#### `public size_t `[`tcbs_len`](#structsock__tcp__queue_1a5569a0802580a1b4b6f04708c91875d0) 

Number of TCBs behind member tcbs.

# struct `sock_udp` 

UDP sock type.

For network stack internal purposes only. Do not access members externally.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__udp_1aa4af66cc4e5f6b2ab327e7958013cb0e) | parent class
`public struct `[`sock_udp`](#structsock__udp)` * `[`next`](#structsock__udp_1a9b1fa6a229d1f6db7617de1a80475b71) | sock liked list
`public `[`openwsn_gen_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__openwsn__sock_1ga2e2505848260f09ea7a4d254bcb3667e)` `[`gen_sock`](#structsock__udp_1a8c9e277416a1131ceb4b5d7757e8c578) | Generic socket.
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structsock__udp_1a91291723abe9f12cd6525c7b4122af79) | [Mailboxes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__mbox) target for the sock
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`mbox_queue`](#structsock__udp_1ae64dfca6904ef539f0bc04e3cafd702d) | queue for [gnrc_sock_reg_t::mbox](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a936a208fd08628a446e3775288fdd4d0)
`public `[`gnrc_sock_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sock_1ga0361f554346d114bf4129d0d95085ebb)` `[`reg`](#structsock__udp_1a17361c96a916c14584884d515713e114) | netreg info
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structsock__udp_1a4527c938cf3d949f79bbe7b4f9bcfc57) | local end-point
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structsock__udp_1a29fde26b43b782d23a454bd75f1da1e9) | remote end-point
`public uint16_t `[`flags`](#structsock__udp_1a603e1765c62b4402ea422e461cbd4423) | option flags

## Members

#### `public `[`lwip_sock_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__lwip__sock_1ga5739cff1d0cd9b5644bb4461c8e80d01)` `[`base`](#structsock__udp_1aa4af66cc4e5f6b2ab327e7958013cb0e) 

parent class

#### `public struct `[`sock_udp`](#structsock__udp)` * `[`next`](#structsock__udp_1a9b1fa6a229d1f6db7617de1a80475b71) 

sock liked list

#### `public `[`openwsn_gen_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__openwsn__sock_1ga2e2505848260f09ea7a4d254bcb3667e)` `[`gen_sock`](#structsock__udp_1a8c9e277416a1131ceb4b5d7757e8c578) 

Generic socket.

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` `[`mbox`](#structsock__udp_1a91291723abe9f12cd6525c7b4122af79) 

[Mailboxes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__mbox) target for the sock

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`mbox_queue`](#structsock__udp_1ae64dfca6904ef539f0bc04e3cafd702d) 

queue for [gnrc_sock_reg_t::mbox](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sock.md#structgnrc__sock__reg_1a936a208fd08628a446e3775288fdd4d0)

#### `public `[`gnrc_sock_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sock_1ga0361f554346d114bf4129d0d95085ebb)` `[`reg`](#structsock__udp_1a17361c96a916c14584884d515713e114) 

netreg info

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structsock__udp_1a4527c938cf3d949f79bbe7b4f9bcfc57) 

local end-point

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structsock__udp_1a29fde26b43b782d23a454bd75f1da1e9) 

remote end-point

#### `public uint16_t `[`flags`](#structsock__udp_1a603e1765c62b4402ea422e461cbd4423) 

option flags

