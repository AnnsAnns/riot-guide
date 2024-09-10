---
title: api-net_gnrc.md
description: api-net_gnrc.md
---
# group `net_gnrc` 

RIOT's modular default IP network stack.

**See also**: [Martine Lenders' master thesis](https://www.riot-os.org/assets/pdfs/mlenders_msc.pdf) about GNRC's design and evaluation and the slide set of [its defense](https://www.riot-os.org/assets/pdfs/mlenders_msc_def.pdf).

AboutThis module is currently the default network stack for RIOT and includes many components ranging from a [Network interface API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif) through a fully-featured [IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6) implementation with [6LowPAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan) extensions to an [UDP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__udp) implementation and [RPL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl).

A list of all features contained in the [Generic (GNRC) network stack](#group__net__gnrc) is available in the `Modules` section above.

Integration into RIOTFrom the application layer the [Generic (GNRC) network stack](#group__net__gnrc) can be accessed through the [Sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock), while the interface to the [Netdev - Network Device Driver API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api) is defined by the [Network interface API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netif).

ArchitectureGNRC Network StackGNRC Network StackGNRC Network StackGNRC Network Stack

Each layer of the network stack runs in its own thread and each lower layer thread has a higher priority than any upper layer thread. In this regard, the thread of the MAC layer implementation has the highest priority and threads on the application layer have the lowest priority. The communication between threads is handled by the kernel's [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) functionality and by the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi). Most of the times IPC will take place between threads of neighboring layers for packets that traverse the network stack up or down.

Due to the design of [GNRC](#group__net__gnrc) and the nature of inter-process communication, it is crucial for a new module that introduces a new thread to follow a certain programming construct if it desires to interact with other threads without blocking the system: Utilizing an `event loop`.

Hence, a thread for [GNRC](#group__net__gnrc) will usually consist of four basic steps.

* Initialize a message queue (note that its size **must** be a power of two, see [msg_init_queue()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd))

* register for a [gnrc_nettype: Protocol type](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype)

* wait for a message

* react appropriately to a message and return to 3.

```cpp
void *_event_loop(void *arg)
{
    static msg_t _msg_q[Q_SZ];
    (void)arg;
    msg_init_queue(_msg_q, Q_SZ);
    gnrc_netreg_entry me_reg = GNRC_NETREG_ENTRY_INIT_PID(
                                     GNRC_NETREG_DEMUX_CTX_ALL,
                                     thread_getpid());
    gnrc_netreg_register(GNRC_NETTYPE_IPV6, &me_reg);
    while (1) {
        msg_receive(&msg);
        switch (msg.type) {
            case TYPE1:
                callback1();
                break;
            ...
        }
    }

    return NULL;
}
```

As an example have a look at the event loops of [IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6) and [RPL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl)

Receiving / Transmitting PacketsPackets can be received or transmitted by interacting with the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi).

Receiving PacketsThe reception of a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) from another thread is handled by the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) module. In order to receive a [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) of a specific type, it is necessary to register for the appropriate [gnrc_nettype: Protocol type](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype) first. Your thread will then be able to receive certain commands defined in the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) module (e.g. [net_gnrc_netapi::GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5)) for all [Packets](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) that your thread registered for.

The following example will sketch how to receive incoming and outgoing UDP traffic on port 80.

```cpp
void *_event_loop(void *arg)
{
    static msg_t _msg_q[Q_SZ];
    msg_t msg, reply;
    reply.type = GNRC_NETAPI_MSG_TYPE_ACK;
    reply.content.value = -ENOTSUP;
    msg_init_queue(_msg_q, Q_SZ);
    gnrc_pktsnip_t *pkt = NULL;
    gnrc_netreg_entry me_reg = { .demux_ctx = 80, .pid = thread_getpid() };
    gnrc_netreg_register(GNRC_NETTYPE_UDP, &me_reg);

    while (1) {
        msg_receive(&msg);
        switch (msg.type) {
            case GNRC_NETAPI_MSG_TYPE_RCV:
                pkt = msg.content.ptr;
                _handle_incoming_pkt(pkt);
                break;
            case GNRC_NETAPI_MSG_TYPE_SND:
                pkt = msg.content.ptr;
                _handle_outgoing_pkt(pkt);
                break;
            case GNRC_NETAPI_MSG_TYPE_SET:
            case GNRC_NETAPI_MSG_TYPE_GET:
                msg_reply(&msg, &reply);
                break;
            default:
                break;
        }
    }

    return NULL;
}
```

When receiving a message of type [GNRC_NETAPI_MSG_TYPE_SET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga81e297b6dd96cf0a565a9dc77cc54e11) or [GNRC_NETAPI_MSG_TYPE_GET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacc19be168656448df4d274293dc23916), it is necessary to acknowledge it by calling [msg_reply()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga2e7b09dc269eb4847f6e08b9900ffda9) with a message of type [GNRC_NETAPI_MSG_TYPE_ACK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga6edd8d8871394091cff19457fc3da1b5) which contains the actual size of the GET message's content on success or an error code otherwise.

Do not forget to unregister with [gnrc_netreg_unregister()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1gad68b86ef84f5b1c6391067bdd8b16f2b) if you leave the function context

Transmitting PacketsA packet is transmitted by relaying it to threads interested in handling (and dispatching) packets of its type. To do this, the [GNRC communication interface](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi) offers dispatch helper functions called [gnrc_netapi_dispatch_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga2b5b0f662061aa332cc1cbb9c145ee07) and [gnrc_netapi_dispatch_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga29426dfcc0b46e451efab9939b41d95e).

The following example sketches the usage and assumes a valid [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) named `pkt`.

```cpp
gnrc_pktsnip_t *pkt;

pkt = gnrc_pktbuf_add(NULL, data, size, GNRC_NETTYPE_UNDEF);
if (pkt == NULL) {
     puts("Error: unable to copy data to packet buffer\n");
     return;
}
if (!gnrc_netapi_dispatch_send(GNRC_NETTYPE_UDP, 80, pkt)) {
     puts("Error: no thread is interested");
     gnrc_pktbuf_release(pkt);
     return;
}
```

First, the data to be sent is added to the [packet buffer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pktbuf). This ensures its intactness during the sending process. After the data to be sent has been added to the packet buffer, its parent data structure can safely be freed or reused.

Then, the [pkt](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt) will be sent to all threads that registered for [GNRC_NETTYPE_UDP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__nettype_1gga2582fbb16a318806983c225a69460902a73162332c559b1a558e5d076e28d53ad) and the demux context `80`. Every registered thread will receive a [GNRC_NETAPI_MSG_TYPE_SND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1gacf009a7a7aa95ec88848b1030ef08b09) command and can access the [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt). Note that at this point, the threads receiving pkt act as its owners, so please don't modify pkt after calling any dispatch function.

If [gnrc_netapi_dispatch_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga2b5b0f662061aa332cc1cbb9c145ee07) is replaced by [gnrc_netapi_dispatch_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga29426dfcc0b46e451efab9939b41d95e) then threads will receive the [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) command instead, again with access to the [Packet](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__pkt).

If the data to be sent requires extra headers to be added for successful transmission (in the example, this would be IP and UDP headers), these have to be built manually before calling [gnrc_netapi_dispatch_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga2b5b0f662061aa332cc1cbb9c145ee07). In the interest of conciseness, this is omitted in this tutorial; please refer to [gnrc_udp_hdr_build()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__udp_1ga262e6ffc6333255900f79329d9e445b9), [gnrc_ipv6_hdr_build()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__hdr_1gaf1cd3803edcb97066ec8b8ec19f4a2cb) etc. for more information.

GNRC is implemented according to the respective standards. So please note, that sending to a IPv6 link-local address always requires you by definition to also provide the interface you want to send to, otherwise address resolution might fail.

How To Use[Generic (GNRC) network stack](#group__net__gnrc) is highly modular and can be adjusted to include only the desired features. In the following several of the available modules will be stated that you can include in your application's Makefile.

* To include the default network device(s) on your board: 
```cpp
USEMODULE += netdev_default
```

* To auto-initialize these network devices as GNRC network interfaces 
```cpp
USEMODULE += auto_init_gnrc_netif
```

* You may choose to build either as an IPv6 Node 
```cpp
USEMODULE += gnrc_ipv6_default
```
 or as an IPv6 Router 
```cpp
USEMODULE += gnrc_ipv6_router_default
```
 An IPv6 Router can forward packets, while an IPv6 Node will simply drop packets not targeted to it. If an IEEE 802.15.4 network device is present [6LoWPAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan) (with [6LoWPAN Fragmentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag) and [IPv6 header compression (IPHC)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__iphc)) will be included automatically.

* For basic IPv6 (and 6LoWPAN) functionalities choose instead 
```cpp
USEMODULE += gnrc_ipv6
```
 or 
```cpp
USEMODULE += gnrc_ipv6_router
```
 respectively. Those modules provide the bare minimum of IPv6 functionalities (no [ICMPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__icmpv6)). Because of that, the [Neighbor Information Base for IPv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__ipv6__nib) needs to be configured manually. If an IEEE 802.15.4 device is present [6LoWPAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan) will be included automatically, but no fragmentation or header compression support will be provided.

* For [ICMPv6 echo request/reply (ping)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__icmpv6__echo) functionality: 
```cpp
USEMODULE += gnrc_icmpv6_echo
```

* For [UDP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__udp) support include 
```cpp
USEMODULE += gnrc_udp
```

* To use [UDP sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp) with GNRC include 
```cpp
USEMODULE += gnrc_sock_udp
```

* To include the [RPL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl) module 
```cpp
USEMODULE += gnrc_rpl
```
 This will include the [RPL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__rpl) module. To provide forwarding capabilities it is necessary to build the application with `gnrc_ipv6_router_default` (or `gnrc_ipv6_router`), not `gnrc_ipv6_default` (or `gnrc_ipv6`).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

