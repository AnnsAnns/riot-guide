---
title: api-net_sock_udp.md
description: api-net_sock_udp.md
---
# group `net_sock_udp` 

Sock submodule for UDP.

How To UseFirst you need to [include](#creating-an-application_1including-modules) a module that implements this API in your application's Makefile. For example the implementation for [GNRC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) is called `gnrc_sock_udp`.

A Simple UDP Echo Server
```cpp
#include <stdio.h>

#include "net/sock/udp.h"

uint8_t buf[128];

int main(void)
{
    sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
    sock_udp_t sock;

    local.port = 12345;

    if (sock_udp_create(&sock, &local, NULL, 0) < 0) {
        puts("Error creating UDP sock");
        return 1;
    }

    while (1) {
        sock_udp_ep_t remote;
        ssize_t res;

        if ((res = sock_udp_recv(&sock, buf, sizeof(buf), SOCK_NO_TIMEOUT,
                                 &remote)) >= 0) {
            puts("Received a message");
            if (sock_udp_send(&sock, buf, res, &remote) < 0) {
                puts("Error sending reply");
            }
        }
    }

    return 0;
}
```

Above you see a simple UDP echo server. Don't forget to also [include](#creating-an-application_1including-modules) the IPv6 module of your networking implementation (e.g. `gnrc_ipv6_default` for [Generic (GNRC) network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) GNRC) and at least one network device.

After including the header file for [UDP sock](#group__net__sock__udp), we create some buffer space `buf` to store the data received by the server:

```cpp
#include "net/sock/udp.h"

uint8_t buf[128];
```

To be able to listen for incoming packets we bind the `sock` by setting a local end point with a port (`12345` in this case).

We then proceed to create the `sock`. It is bound to `local` and thus listens for UDP packets with [destination port](./doc/starlight-docs/src/content/docs/apidoc/api-net_udp.md#structudp__hdr__t_1aa06d445b02995b2919b2299397679ed5)`12345`. Since we don't need any further configuration we set the flags to 0. In case of an error we stop the program:

```cpp
sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
sock_udp_t sock;

local.port = 12345;

if (sock_udp_create(&sock, &local, NULL, 0) < 0) {
    puts("Error creating UDP sock");
    return 1;
}
```

The application then waits indefinitely for an incoming message in `buf` from `remote`. If we want to timeout this wait period we could alternatively set the `timeout` parameter of [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac) to a value != [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e). If an error occurs on receive we just ignore it and continue looping.

If we receive a message we use its `remote` to reply. In case of an error on send we print an according message:

```cpp
while (1) {
    sock_udp_ep_t remote;
    ssize_t res;

    if ((res = sock_udp_recv(&sock, buf, sizeof(buf), SOCK_NO_TIMEOUT,
                             &remote)) >= 0) {
        puts("Received a message");
        if (sock_udp_send(&sock, buf, res, &remote) < 0) {
            puts("Error sending reply");
        }
    }
}
```

A Simple UDP Echo ClientThere are two kinds of clients. Those that do expect a reply and those who don't. A client that does not require a reply is very simple to implement in one line:

```cpp
res = sock_udp_send(NULL, data, data_len, &remote);
```

With `data` being the data sent, `data_len` the length of `data` and `remote` the remote end point the packet that is is to be sent.

To see some other capabilities we look at a more complex example in form of the counter of the echo server above:

```cpp
#include <stdio.h>

#include "net/af.h"
#include "net/protnum.h"
#include "net/ipv6/addr.h"
#include "net/sock/udp.h"
#include "xtimer.h"

uint8_t buf[7];

int main(void)
{
    sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
    sock_udp_t sock;

    local.port = 0xabcd;

    if (sock_udp_create(&sock, &local, NULL, 0) < 0) {
        puts("Error creating UDP sock");
        return 1;
    }

    while (1) {
        sock_udp_ep_t remote = { .family = AF_INET6 };
        ssize_t res;

        remote.port = 12345;
        ipv6_addr_set_all_nodes_multicast((ipv6_addr_t *)&remote.addr.ipv6,
                                          IPV6_ADDR_MCAST_SCP_LINK_LOCAL);
        if (sock_udp_send(&sock, "Hello!", sizeof("Hello!"), &remote) < 0) {
            puts("Error sending message");
            sock_udp_close(&sock);
            return 1;
        }
        if ((res = sock_udp_recv(&sock, buf, sizeof(buf), 1 * US_PER_SEC,
                                NULL)) < 0) {
            if (res == -ETIMEDOUT) {
                puts("Timed out");
            }
            else {
                puts("Error receiving message");
            }
        }
        else {
            printf("Received message: \"");
            for (int i = 0; i < res; i++) {
                printf("%c", buf[i]);
            }
            printf("\"\n");
        }
        xtimer_sleep(1);
    }

    return 0;
}
```

Again: Don't forget to also [include](#creating-an-application_1including-modules) the IPv6 module of your networking implementation (e.g. `gnrc_ipv6_default` for [GNRC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc)) and at least one network device.

We first create again a `sock` with a local end point bound to any IPv6 address and some port. Note that we also could specify the remote here and not use it with [sock_udp_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gabdc04f105c67fc0cbc1ab7b403161bea).

```cpp
sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
sock_udp_t sock;

local.port = 0xabcd;

if (sock_udp_create(&sock, &local, NULL, 0) < 0) {
    puts("Error creating UDP sock");
    return 1;
}
```

We then create a remote end point with the [link-local all nodes multicast address](https://tools.ietf.org/html/rfc4291#page-16) (`ff02::1`) and port `12345` and send a "Hello!" message to that end point.

```cpp
sock_udp_ep_t remote = { .family = AF_INET6 };
ssize_t res;

remote.port = 12345;
ipv6_addr_set_all_nodes_multicast((ipv6_addr_t *)&remote.addr.ipv6,
                                  IPV6_ADDR_MCAST_SCP_LINK_LOCAL);
if (sock_udp_send(&sock, "Hello!", sizeof("Hello!"), &remote) < 0) {
    puts("Error sending message");
    sock_udp_close(&sock);
    return 1;
}
```

We then wait a second for a reply and print it when it is received.

```cpp
if ((res = sock_udp_recv(&sock, buf, sizeof(buf), 1 * US_PER_SEC,
                        NULL)) < 0) {
    if (res == -ETIMEDOUT) {
        puts("Timed out");
    }
    else {
        puts("Error receiving message");
    }
}
else {
    printf("Received message: \"");
    for (int i = 0; i < res; i++) {
        printf("%c", buf[i]);
    }
    printf("\"\n");
}
```

Finally, we wait a second before sending out the next "Hello!" with `xtimer_sleep(1)`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sock_udp_create`](#group__net__sock__udp_1ga20fa4b890dff1c97a63075090e6f9d7d)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,uint16_t flags)`            | Creates a new UDP sock object.
`public void `[`sock_udp_close`](#group__net__sock__udp_1ga9bab7d0998b2c49e66bab0f03367298a)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock)`            | Closes a UDP sock object.
`public int `[`sock_udp_get_local`](#group__net__sock__udp_1ga1a0e4c3a85b42cfcdc2f016dd2c96c83)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)`            | Gets the local end point of a UDP sock object.
`public int `[`sock_udp_get_remote`](#group__net__sock__udp_1ga626661c83a17ad7f4f3e25b67378f7d7)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)`            | Gets the remote end point of a UDP sock object.
`public ssize_t `[`sock_udp_recv_aux`](#group__net__sock__udp_1ga0a849357c25e692946f8df4f62654ed4)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__rx__t)` * aux)`            | Receives a UDP message from a remote end point.
`public inline static ssize_t `[`sock_udp_recv`](#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Receives a UDP message from a remote end point.
`public ssize_t `[`sock_udp_recv_buf_aux`](#group__net__sock__udp_1gaafd8e7ab7192b031fd8873def358b987)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__rx__t)` * aux)`            | Provides stack-internal buffer space containing a UDP message from a remote end point.
`public inline static ssize_t `[`sock_udp_recv_buf`](#group__net__sock__udp_1ga35b5ec6cb6a197ea2f3ab6eabacca73e)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Provides stack-internal buffer space containing a UDP message from a remote end point.
`public ssize_t `[`sock_udp_sendv_aux`](#group__net__sock__udp_1ga336d4369bc2c7e77423f7d1e67161749)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__tx__t)` * aux)`            | Sends a UDP message to remote end point with non-continous payload.
`public inline static ssize_t `[`sock_udp_send_aux`](#group__net__sock__udp_1ga56a625663ba4bc9efc4e3c388fc1c7ec)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const void * data,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__tx__t)` * aux)`            | Sends a UDP message to remote end point.
`public inline static ssize_t `[`sock_udp_send`](#group__net__sock__udp_1gabdc04f105c67fc0cbc1ab7b403161bea)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const void * data,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Sends a UDP message to remote end point.
`public inline static ssize_t `[`sock_udp_sendv`](#group__net__sock__udp_1ga86893cb9733eb7cc210e0f2407f640e0)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Sends a UDP message to remote end point with non-continous payload.
`public inline static bool `[`sock_udp_ep_is_multicast`](#group__net__sock__udp_1gab579f958fda8cc1eb423bfb6323b2835)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)`            | Checks if the IP address of an endpoint is multicast.
`public inline static bool `[`sock_udp_ep_is_v6`](#group__net__sock__udp_1ga2c9722dd76f33d865a76adf1451dbcf0)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)`            | Checks if the IP address of an endpoint is an IPv6 address.
`struct `[`sock_udp_aux_rx_t`](#structsock__udp__aux__rx__t) | Auxiliary data provided when receiving using an UDP sock object.
`struct `[`sock_udp_aux_tx_t`](#structsock__udp__aux__tx__t) | Auxiliary data provided when sending using an UDP sock object.

## Members

#### `public int `[`sock_udp_create`](#group__net__sock__udp_1ga20fa4b890dff1c97a63075090e6f9d7d)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,uint16_t flags)` 

Creates a new UDP sock object.

`(sock != NULL)`

`(remote == NULL) || (remote->port != 0)`

If you create a socket you are responsible for receiving messages sent to it by calling [sock_udp_recv](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac). Otherwise, the packet queue of the `sock` may congest until the socket is closed. If you only want to send without receiving, use [sock_udp_send](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gabdc04f105c67fc0cbc1ab7b403161bea) instead with `sock` set to NULL.

#### Parameters
* `sock` The resulting sock object. 

* `local` Local end point for the sock object. May be NULL. [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) must either be [SOCK_ADDR_ANY_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca) or equal to [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `remote` if `remote != NULL`. If NULL [sock_udp_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gabdc04f105c67fc0cbc1ab7b403161bea) may bind implicitly. [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) may also be 0 to bind the `sock` to an ephemeral port. 

* `remote` Remote end point for the sock object. May be `NULL` but then the `remote` parameter of [sock_udp_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gabdc04f105c67fc0cbc1ab7b403161bea) may not be `NULL` or it will always error with return value -ENOTCONN. [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) must not be 0 if `remote != NULL`. [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) must either be [SOCK_ADDR_ANY_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca) or equal to [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `local` if `local != NULL`. 

* `flags` Flags for the sock object. See also [sock flags](#group__net__sock_1net_sock_flags). May be 0.

#### Returns
0 on success. 

#### Returns
-EADDRINUSE, if `local != NULL` and `local` is already used elsewhere or if `local->port == 0` but the pool of ephemeral ports is depleted 

#### Returns
-EAFNOSUPPORT, if `local != NULL` or `remote != NULL` and [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) of `local` or `remote` is not supported. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `local` or `remote` are not a valid interfaces or contradict each other (i.e. `(local->netif != remote->netif) && ((local->netif != SOCK_ADDR_ANY_NETIF) || (remote->netif != SOCK_ADDR_ANY_NETIF))`if neither is`NULL`). @return -ENOMEM, if not enough resources can be provided for`sock` to be created.

#### `public void `[`sock_udp_close`](#group__net__sock__udp_1ga9bab7d0998b2c49e66bab0f03367298a)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock)` 

Closes a UDP sock object.

`(sock != NULL)`

#### Parameters
* `sock` A UDP sock object.

#### `public int `[`sock_udp_get_local`](#group__net__sock__udp_1ga1a0e4c3a85b42cfcdc2f016dd2c96c83)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)` 

Gets the local end point of a UDP sock object.

`(sock != NULL) && (ep != NULL)`

#### Parameters
* `sock` A UDP sock object. 

* `ep` The local end point.

#### Returns
0 on success. 

#### Returns
-EADDRNOTAVAIL, when `sock` has no local end point.

#### `public int `[`sock_udp_get_remote`](#group__net__sock__udp_1ga626661c83a17ad7f4f3e25b67378f7d7)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)` 

Gets the remote end point of a UDP sock object.

`(sock != NULL) && (ep != NULL)`

#### Parameters
* `sock` A UDP sock object. 

* `ep` The remote end point.

#### Returns
0 on success. 

#### Returns
-ENOTCONN, when `sock` has no remote end point bound to it.

#### `public ssize_t `[`sock_udp_recv_aux`](#group__net__sock__udp_1ga0a849357c25e692946f8df4f62654ed4)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__rx__t)` * aux)` 

Receives a UDP message from a remote end point.

`(sock != NULL) && (data != NULL) && (max_len > 0)`

#### Parameters
* `sock` A UDP sock object. 

* `data` Pointer where the received data should be stored. 

* `max_len` Maximum space available at `data`. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be `NULL`, if it is not required by the application. 

* `aux` Auxiliary data about the received datagram. May be `NULL`, if it is not required by the application.

Function blocks if no packet is currently waiting.

#### Returns
The number of bytes received on success. 

#### Returns
0, if no received data is available, but everything is in order. 

#### Returns
-EADDRNOTAVAIL, if local of `sock` is not given. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac) blocks). 

#### Returns
-ENOBUFS, if buffer space is not large enough to store received data. 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public inline static ssize_t `[`sock_udp_recv`](#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Receives a UDP message from a remote end point.

`(sock != NULL) && (data != NULL) && (max_len > 0)`

#### Parameters
* `sock` A UDP sock object. 

* `data` Pointer where the received data should be stored. 

* `max_len` Maximum space available at `data`. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be `NULL`, if it is not required by the application.

Function blocks if no packet is currently waiting.

#### Returns
The number of bytes received on success. 

#### Returns
0, if no received data is available, but everything is in order. 

#### Returns
-EADDRNOTAVAIL, if local of `sock` is not given. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac) blocks). 

#### Returns
-ENOBUFS, if buffer space is not large enough to store received data. 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public ssize_t `[`sock_udp_recv_buf_aux`](#group__net__sock__udp_1gaafd8e7ab7192b031fd8873def358b987)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__rx__t)` * aux)` 

Provides stack-internal buffer space containing a UDP message from a remote end point.

`(sock != NULL) && (data != NULL) && (buf_ctx != NULL)`

#### Parameters
* `sock` A UDP sock object. 

* `data` Pointer to a stack-internal buffer space containing the received data. 

* `buf_ctx` Stack-internal buffer context. If it points to a `NULL` pointer, the stack returns a new buffer space for a new packet. If it does not point to a `NULL` pointer, an existing context is assumed to get a next segment in a buffer. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be `NULL`, if it is not required by the application. 

* `aux` Auxiliary data about the received datagram. May be `NULL`, if it is not required by the application.

**This feature is experimental!**
 This function is quite new, not implemented for all stacks yet, and may be subject to sudden API changes. Do not use in production if this is unacceptable.

Function blocks if no packet is currently waiting.

#### Returns
The number of bytes received on success. May not be the complete payload. Continue calling with the returned `buf_ctx` to get more buffers until result is 0 or an error. 

#### Returns
0, if no received data is available, but everything is in order. If `buf_ctx` was provided, it was released. 

#### Returns
-EADDRNOTAVAIL, if local of `sock` is not given. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac) blocks). 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public inline static ssize_t `[`sock_udp_recv_buf`](#group__net__sock__udp_1ga35b5ec6cb6a197ea2f3ab6eabacca73e)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Provides stack-internal buffer space containing a UDP message from a remote end point.

`(sock != NULL) && (data != NULL) && (buf_ctx != NULL)`

#### Parameters
* `sock` A UDP sock object. 

* `data` Pointer to a stack-internal buffer space containing the received data. 

* `buf_ctx` Stack-internal buffer context. If it points to a `NULL` pointer, the stack returns a new buffer space for a new packet. If it does not point to a `NULL` pointer, an existing context is assumed to get a next segment in a buffer. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be `NULL`, if it is not required by the application.

**This feature is experimental!**
 This function is quite new, not implemented for all stacks yet, and may be subject to sudden API changes. Do not use in production if this is unacceptable.

Function blocks if no packet is currently waiting.

#### Returns
The number of bytes received on success. May not be the complete payload. Continue calling with the returned `buf_ctx` to get more buffers until result is 0 or an error. 

#### Returns
0, if no received data is available, but everything is in order. If `buf_ctx` was provided, it was released. 

#### Returns
-EADDRNOTAVAIL, if local of `sock` is not given. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac) blocks). 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public ssize_t `[`sock_udp_sendv_aux`](#group__net__sock__udp_1ga336d4369bc2c7e77423f7d1e67161749)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__tx__t)` * aux)` 

Sends a UDP message to remote end point with non-continous payload.

`((sock != NULL || remote != NULL))`

#### Parameters
* `sock` A UDP sock object. May be `NULL`. A sensible local end point should be selected by the implementation in that case. 

* `snips` List of payload chunks, will be processed in order. May be `NULL`. 

* `remote` Remote end point for the sent data. May be `NULL`, if `sock` has a remote end point. [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) may be AF_UNSPEC, if local end point of `sock` provides this information. [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) may not be 0. 

* `aux` Auxiliary data about the transmission. May be `NULL`, if it is not required by the application.

#### Returns
The number of bytes sent on success. 

#### Returns
-EADDRINUSE, if `sock` has no local end-point or was `NULL` and the pool of available ephemeral ports is depleted. 

#### Returns
-EAFNOSUPPORT, if `remote != NULL` and [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EHOSTUNREACH, if `remote` or remote end point of `sock` is not reachable. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `remote` is not a valid interface or contradicts the given local interface (i.e. neither the local end point of `sock` nor remote are assigned to `SOCK_ADDR_ANY_NETIF` but are nevertheless different. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ENOTCONN, if `remote == NULL`, but `sock` has no remote end point.

#### `public inline static ssize_t `[`sock_udp_send_aux`](#group__net__sock__udp_1ga56a625663ba4bc9efc4e3c388fc1c7ec)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const void * data,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`sock_udp_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__tx__t)` * aux)` 

Sends a UDP message to remote end point.

`((sock != NULL || remote != NULL)) && (if (len != 0): (data != NULL))`

#### Parameters
* `sock` A UDP sock object. May be `NULL`. A sensible local end point should be selected by the implementation in that case. 

* `data` Pointer where the received data should be stored. May be `NULL` if `len == 0`. 

* `len` Maximum space available at `data`. 

* `remote` Remote end point for the sent data. May be `NULL`, if `sock` has a remote end point. [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) may be AF_UNSPEC, if local end point of `sock` provides this information. [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) may not be 0. 

* `aux` Auxiliary data about the transmission. May be `NULL`, if it is not required by the application.

#### Returns
The number of bytes sent on success. 

#### Returns
-EADDRINUSE, if `sock` has no local end-point or was `NULL` and the pool of available ephemeral ports is depleted. 

#### Returns
-EAFNOSUPPORT, if `remote != NULL` and [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EHOSTUNREACH, if `remote` or remote end point of `sock` is not reachable. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `remote` is not a valid interface or contradicts the given local interface (i.e. neither the local end point of `sock` nor remote are assigned to `SOCK_ADDR_ANY_NETIF` but are nevertheless different. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ENOTCONN, if `remote == NULL`, but `sock` has no remote end point.

#### `public inline static ssize_t `[`sock_udp_send`](#group__net__sock__udp_1gabdc04f105c67fc0cbc1ab7b403161bea)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const void * data,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Sends a UDP message to remote end point.

`((sock != NULL || remote != NULL)) && (if (len != 0): (data != NULL))`

#### Parameters
* `sock` A UDP sock object. May be `NULL`. A sensible local end point should be selected by the implementation in that case. 

* `data` Pointer where the received data should be stored. May be `NULL` if `len == 0`. 

* `len` Maximum space available at `data`. 

* `remote` Remote end point for the sent data. May be `NULL`, if `sock` has a remote end point. [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) may be AF_UNSPEC, if local end point of `sock` provides this information. [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) may not be 0.

#### Returns
The number of bytes sent on success. 

#### Returns
-EADDRINUSE, if `sock` has no local end-point or was `NULL` and the pool of available ephemeral ports is depleted. 

#### Returns
-EAFNOSUPPORT, if `remote != NULL` and [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EHOSTUNREACH, if `remote` or remote end point of `sock` is not reachable. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `remote` is not a valid interface or contradicts the given local interface (i.e. neither the local end point of `sock` nor remote are assigned to `SOCK_ADDR_ANY_NETIF` but are nevertheless different. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ENOTCONN, if `remote == NULL`, but `sock` has no remote end point.

#### `public inline static ssize_t `[`sock_udp_sendv`](#group__net__sock__udp_1ga86893cb9733eb7cc210e0f2407f640e0)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * snips,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Sends a UDP message to remote end point with non-continous payload.

`((sock != NULL || remote != NULL))`

#### Parameters
* `sock` A UDP sock object. May be `NULL`. A sensible local end point should be selected by the implementation in that case. 

* `snips` List of payload chunks, will be processed in order. May be `NULL`. 

* `remote` Remote end point for the sent data. May be `NULL`, if `sock` has a remote end point. [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) may be AF_UNSPEC, if local end point of `sock` provides this information. [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) may not be 0.

#### Returns
The number of bytes sent on success. 

#### Returns
-EADDRINUSE, if `sock` has no local end-point or was `NULL` and the pool of available ephemeral ports is depleted. 

#### Returns
-EAFNOSUPPORT, if `remote != NULL` and [sock_udp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EHOSTUNREACH, if `remote` or remote end point of `sock` is not reachable. 

#### Returns
-EINVAL, if [sock_udp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_udp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `remote` is not a valid interface or contradicts the given local interface (i.e. neither the local end point of `sock` nor remote are assigned to `SOCK_ADDR_ANY_NETIF` but are nevertheless different. 

#### Returns
-EINVAL, if [sock_udp_ep_t::port](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a00b5dbff09ee8e87806fff6280966140) of `remote` is 0. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ENOTCONN, if `remote == NULL`, but `sock` has no remote end point.

#### `public inline static bool `[`sock_udp_ep_is_multicast`](#group__net__sock__udp_1gab579f958fda8cc1eb423bfb6323b2835)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)` 

Checks if the IP address of an endpoint is multicast.

#### Parameters
* `ep` end point to check

#### Returns
true if end point is multicast

#### `public inline static bool `[`sock_udp_ep_is_v6`](#group__net__sock__udp_1ga2c9722dd76f33d865a76adf1451dbcf0)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * ep)` 

Checks if the IP address of an endpoint is an IPv6 address.

#### Parameters
* `ep` end point to check

#### Returns
true if end point is IPv6

# struct `sock_udp_aux_rx_t` 

Auxiliary data provided when receiving using an UDP sock object.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structsock__udp__aux__rx__t_1a5c2f25bbdd6dc2bf4ffde6139c48c357) | The local endpoint the datagram was received on.
`public uint64_t `[`timestamp`](#structsock__udp__aux__rx__t_1ab19a23512bd3e8f213f6e9d18a2c5974) | System time the datagram was received.
`public int16_t `[`rssi`](#structsock__udp__aux__rx__t_1aa4061b50f0d2406ddea6489d4ebc6896) | RSSI value of the received frame.
`public uint8_t `[`ttl`](#structsock__udp__aux__rx__t_1a6c5972be3fdd23352e067ad4123420ed) | TTL value of the received frame.
`public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__udp__aux__rx__t_1adda3cf667bff470987626c6fed9058b9) | Flags used request information.

## Members

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structsock__udp__aux__rx__t_1a5c2f25bbdd6dc2bf4ffde6139c48c357) 

The local endpoint the datagram was received on.

**See also**: [SOCK_AUX_GET_LOCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7a98bf0e885c91f7c5cead39a9c9ed013a)

#### `public uint64_t `[`timestamp`](#structsock__udp__aux__rx__t_1ab19a23512bd3e8f213f6e9d18a2c5974) 

System time the datagram was received.

**See also**: [SOCK_AUX_GET_TIMESTAMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7ad2c3c2f6a9bc01fdb548bce01a2eaa28)

#### `public int16_t `[`rssi`](#structsock__udp__aux__rx__t_1aa4061b50f0d2406ddea6489d4ebc6896) 

RSSI value of the received frame.

**See also**: [SOCK_AUX_GET_RSSI](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7aedbb5fa4874eddf284944cb1f12a1518)

#### `public uint8_t `[`ttl`](#structsock__udp__aux__rx__t_1a6c5972be3fdd23352e067ad4123420ed) 

TTL value of the received frame.

**See also**: [SOCK_AUX_GET_TTL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7a07efd0365d2e09f49b5e8f47e9b6358a)

#### `public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__udp__aux__rx__t_1adda3cf667bff470987626c6fed9058b9) 

Flags used request information.

# struct `sock_udp_aux_tx_t` 

Auxiliary data provided when sending using an UDP sock object.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structsock__udp__aux__tx__t_1a3ea4d09400950372a0d9ce1b45611e05) | The local endpoint from which the datagram will be sent.
`public uint64_t `[`timestamp`](#structsock__udp__aux__tx__t_1a07b75175e3fc44bded2303c0e788d1cd) | System time the datagram was send.
`public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__udp__aux__tx__t_1aa5cd9741d5ecea56e2c3e31dba8f5207) | Flags used request information.

## Members

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structsock__udp__aux__tx__t_1a3ea4d09400950372a0d9ce1b45611e05) 

The local endpoint from which the datagram will be sent.

**See also**: [SOCK_AUX_SET_LOCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7a35baed77f4190447e3fa88ce60a8a1a8)

#### `public uint64_t `[`timestamp`](#structsock__udp__aux__tx__t_1a07b75175e3fc44bded2303c0e788d1cd) 

System time the datagram was send.

Add [SOCK_AUX_GET_TIMESTAMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7ad2c3c2f6a9bc01fdb548bce01a2eaa28) to the bitmask in [sock_udp_aux_tx_t::flags](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_udp.md#structsock__udp__aux__tx__t_1aa5cd9741d5ecea56e2c3e31dba8f5207) to request a transmission timestamp. This bit will be cleared by [sock_udp_send_aux](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga56a625663ba4bc9efc4e3c388fc1c7ec) if and only if the timestamp was provided. The module `sock_aux_timestamp` needs to be selected to use this. The timestamp refers to the transmission of start of frame delimiter or preamble of the frame carrying the datagram and is given in nanoseconds since epoch, unless otherwise documented by the underlying implementation.

#### `public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__udp__aux__tx__t_1aa5cd9741d5ecea56e2c3e31dba8f5207) 

Flags used request information.

