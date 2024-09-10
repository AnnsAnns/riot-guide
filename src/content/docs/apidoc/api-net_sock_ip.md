---
title: api-net_sock_ip.md
description: api-net_sock_ip.md
---
# group `net_sock_ip` 

Sock submodule for raw IPv4/IPv6.

How To UseFirst you need to [include](#creating-an-application_1including-modules) a module that implements this API in your application's Makefile. For example the implementation for [GNRC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) is called `gnrc_sock_ip`.

A Simple IPv6 Server
```cpp
#include <stdio.h>

#include "net/protnum.h"
#include "net/sock/ip.h"

uint8_t buf[128];

int main(void)
{
    sock_ip_ep_t local = SOCK_IPV6_EP_ANY;
    sock_ip_t sock;

    if (sock_ip_create(&sock, &local, NULL, PROTNUM_IPV6_NONXT, 0) < 0) {
        puts("Error creating raw IP sock");
        return 1;
    }

    while (1) {
        sock_ip_ep_t remote;
        ssize_t res;

        if ((res = sock_ip_recv(&sock, buf, sizeof(buf), SOCK_NO_TIMEOUT,
                                &remote)) >= 0) {
            puts("Received a message");
            if (sock_ip_send(&sock, buf, res, 0, &remote) < 0) {
                puts("Error sending reply");
            }
        }
    }

    return 0;
}
```

Above you see a simple IPv6 server. Don't forget to also [include](#creating-an-application_1including-modules) the IPv6 module of your networking implementation (e.g. `gnrc_ipv6_default` for [GNRC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc)) and at least one network device.

After including header files for the [address families](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af), [protocol numbers](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum) and the [raw `sock`s](#group__net__sock__ip) themselves, we create some buffer space `buf` to store the data received by the server:

```cpp
#include "net/af.h"
#include "net/protnum.h"
#include "net/sock/ip.h"

uint8_t buf[128];
```

To be able to listen for incoming packets we bind the `sock` by setting a local end point (even if we just state here, that we just want to bind it to any IPv6 address).

We then proceed to create the `sock`. It is bound to `local` and listens for IPv6 packets with [next header field](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t_1a81a33145874adac54190598e2ad1ec30)[PROTNUM_IPV6_NONXT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__protnum_1ga5d25ac1451ab7e0d62ecf14fce7fc986). Since we don't need any further configuration we set the flags to 0. In case of an error we stop the program:

```cpp
sock_ip_ep_t local = SOCK_IPV6_EP_ANY;
sock_ip_t sock;

if (sock_ip_create(&sock, &local, NULL, PROTNUM_IPV6_NONXT, 0) < 0) {
    puts("Error creating raw IP sock");
    return 1;
}
```

The application then waits indefinitely for an incoming message in `buf` from `remote`. If we want to timeout this wait period we could alternatively set the `timeout` parameter of [sock_ip_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1gafad2a57b4ee2bb5604e2d788f5e116ba) to a value `!= SOCK_NO_TIMEOUT`. If an error occurs on receive we just ignore it and continue looping.

If we receive a message we use its `remote` to reply. Note since the `proto` was already set during [sock_ip_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga0b416e35dd100962d88bdd675e7f6b18) we can just leave `proto` for the [sock_ip_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga66054a9b18473f819d098e7896adda57) set to 0 (it is ignored by that function in that case anyway). In case of an error on send we print an according message:

```cpp
while (1) {
    sock_ip_ep_t remote;
    ssize_t res;

    if ((res = sock_ip_recv(&sock, buf, sizeof(buf), SOCK_NO_TIMEOUT,
                            &remote)) >= 0) {
        puts("Received a message");
        if (sock_ip_send(&sock, buf, res, 0, &remote) < 0) {
            puts("Error sending reply");
        }
    }
}
```

A Simple IPv6 ClientThere are two kinds of clients. Those that do expect a reply and those who don't. A client that does not require a reply is very simple to implement in one line:

```cpp
res = sock_ip_send(NULL, data, data_len, PROTNUM, &remote);
```

With `data` being the data sent, `data_len` the length of `data`, `PROTNUM` the next header number for the sent packet and `remote` the remote end point the packet that is to be sent.

To see some other capabilities we look at a more complex example in form of the counter of the echo server above:

```cpp
#include <stdio.h>

#include "net/af.h"
#include "net/protnum.h"
#include "net/ipv6/addr.h"
#include "net/sock/ip.h"
#include "xtimer.h"

uint8_t buf[7];

int main(void)
{
    sock_ip_ep_t local = SOCK_IPV6_EP_ANY;
    sock_ip_t sock;

    if (sock_ip_create(&sock, &local, NULL, PROTNUM_IPV6_NONXT, 0) < 0) {
        puts("Error creating raw IP sock");
        return 1;
    }

    while (1) {
        sock_ip_ep_t remote = { .family = AF_INET6 };
        ssize_t res;

        ipv6_addr_set_all_nodes_multicast((ipv6_addr_t *)&remote.addr.ipv6,
                                          IPV6_ADDR_MCAST_SCP_LINK_LOCAL);

        if (sock_ip_send(&sock, "Hello!", sizeof("Hello!"), 0, &remote) < 0) {
            puts("Error sending message");
            sock_ip_close(&sock);
            return 1;
        }
        if ((res = sock_ip_recv(&sock, buf, sizeof(buf), 1 * US_PER_SEC,
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

We first create again a `sock` with a local end point bound to any IPv6 address. Note that we also could specify the remote end point here and not use it with [sock_ip_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga66054a9b18473f819d098e7896adda57).

```cpp
sock_ip_ep_t local = SOCK_IPV6_EP_ANY;
sock_ip_t sock;

if (sock_ip_create(&sock, &local, NULL, PROTNUM_IPV6_NONXT, 0) < 0) {
    puts("Error creating raw IP sock");
    return 1;
}
```

We then create a remote end point for the [link-local all nodes multicast address](https://tools.ietf.org/html/rfc4291#page-16) (`ff02::1`) and send a "Hello!" message to that end point.

```cpp
sock_ip_ep_t remote = { .family = AF_INET6 };
ssize_t res;

ipv6_addr_set_all_nodes_multicast((ipv6_addr_t *)&remote.addr.ipv6,
                                  IPV6_ADDR_MCAST_SCP_LINK_LOCAL);

if (sock_ip_send(&sock, "Hello!", sizeof("Hello!"), 0, &remote) < 0) {
    puts("Error sending message");
    sock_ip_close(&sock);
    return 1;
}
```

We then wait a second for a reply and print it when it is received.

```cpp
if ((res = sock_ip_recv(&sock, buf, sizeof(buf), 1 * US_PER_SEC,
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
`public int `[`sock_ip_create`](#group__net__sock__ip_1ga0b416e35dd100962d88bdd675e7f6b18)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * local,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,uint8_t proto,uint16_t flags)`            | Creates a new raw IPv4/IPv6 sock object.
`public void `[`sock_ip_close`](#group__net__sock__ip_1ga59aea36d7e415e533686e37bf69d3ec4)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock)`            | Closes a raw IPv4/IPv6 sock object.
`public int `[`sock_ip_get_local`](#group__net__sock__ip_1gae01afa2e9d65199732f37d0ea927b581)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * ep)`            | Gets the local end point of a raw IPv4/IPv6 sock object.
`public int `[`sock_ip_get_remote`](#group__net__sock__ip_1ga51463dba508be8f9a114486a75f9fdbe)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * ep)`            | Gets the remote end point of a raw IPv4/IPv6 sock object.
`public ssize_t `[`sock_ip_recv_aux`](#group__net__sock__ip_1gaa9ec389133f8c39fd4132724306089df)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,`[`sock_ip_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_ip.md#structsock__ip__aux__rx__t)` * aux)`            | Receives a message over IPv4/IPv6 from remote end point.
`public inline static ssize_t `[`sock_ip_recv`](#group__net__sock__ip_1gafad2a57b4ee2bb5604e2d788f5e116ba)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote)`            | Receives a message over IPv4/IPv6 from remote end point.
`public ssize_t `[`sock_ip_recv_buf_aux`](#group__net__sock__ip_1ga1a678826f520f62c94ff8f4492e4847b)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,`[`sock_ip_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_ip.md#structsock__ip__aux__rx__t)` * aux)`            | Provides stack-internal buffer space containing an IPv4/IPv6 message from remote end point.
`public inline static ssize_t `[`sock_ip_recv_buf`](#group__net__sock__ip_1gaa3ccb9ce7d1ac34118227549531a6ce7)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote)`            | Provides stack-internal buffer space containing an IPv4/IPv6 message from remote end point.
`public ssize_t `[`sock_ip_send_aux`](#group__net__sock__ip_1gaaf777c4afca9984f71a25c57aeaf49bf)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,const void * data,size_t len,uint8_t proto,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,`[`sock_ip_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_ip.md#structsock__ip__aux__tx__t)` * aux)`            | Sends a message over IPv4/IPv6 to remote end point.
`public inline static ssize_t `[`sock_ip_send`](#group__net__sock__ip_1ga66054a9b18473f819d098e7896adda57)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,const void * data,size_t len,uint8_t proto,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote)`            | Sends a message over IPv4/IPv6 to remote end point.
`struct `[`sock_ip_aux_rx_t`](#structsock__ip__aux__rx__t) | Auxiliary data provided when receiving using an IP sock object.
`struct `[`sock_ip_aux_tx_t`](#structsock__ip__aux__tx__t) | Auxiliary data provided when sending using an IP sock object.

## Members

#### `public int `[`sock_ip_create`](#group__net__sock__ip_1ga0b416e35dd100962d88bdd675e7f6b18)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * local,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,uint8_t proto,uint16_t flags)` 

Creates a new raw IPv4/IPv6 sock object.

`(sock != NULL)`

#### Parameters
* `sock` The resulting sock object. 

* `local` Local end point for the sock object. May be NULL. [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) must either be [SOCK_ADDR_ANY_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca) or equal to [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) of `remote` if `remote != NULL`. If NULL [sock_ip_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga66054a9b18473f819d098e7896adda57) may bind implicitly. 

* `remote` Remote end point for the sock object. May be `NULL` but then the `remote` parameter of [sock_ip_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga66054a9b18473f819d098e7896adda57) may not be `NULL` or it will always error with return value -ENOTCONN. sock_ip_ep_t::port may not be 0 if `remote != NULL`. [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) must either be [SOCK_ADDR_ANY_NETIF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga062f5eb3763541ec0ab6e261447b01ca) or equal to [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) of `local` if `local != NULL`. 

* `proto` Protocol to use in the raw IPv4/IPv6 sock object (the `protocol` header field in IPv4 and the `next_header` field in IPv6). 

* `flags` Flags for the sock object. See also [sock flags](net_sock_flags). May be 0.

#### Returns
0 on success. 

#### Returns
-EADDRINUSE, if `local != NULL` and `local` is already used elsewhere 

#### Returns
-EAFNOSUPPORT, if `local != NULL` or `remote != NULL` and [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) of `local` or `remote` is not supported. 

#### Returns
-EINVAL, if [sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) of `local` or `remote` are not valid interfaces or contradict each other (i.e. `(local->netif != remote->netif) && ((local->netif != SOCK_ADDR_ANY_NETIF) || (remote->netif != SOCK_ADDR_ANY_NETIF))`if neither is`NULL`). @return -ENOMEM, if not enough resources can be provided for`sock` to be created. 

#### Returns
-EPROTONOSUPPORT, if `local != NULL` or `remote != NULL` and proto is not supported by [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) of `local` or `remote`.

#### `public void `[`sock_ip_close`](#group__net__sock__ip_1ga59aea36d7e415e533686e37bf69d3ec4)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock)` 

Closes a raw IPv4/IPv6 sock object.

`(sock != NULL)`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object.

#### `public int `[`sock_ip_get_local`](#group__net__sock__ip_1gae01afa2e9d65199732f37d0ea927b581)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * ep)` 

Gets the local end point of a raw IPv4/IPv6 sock object.

This gets the local end point of a raw IPv4/IPv6 sock object. Note that this might not be the same end point you added in [sock_ip_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga0b416e35dd100962d88bdd675e7f6b18), but an end point more suitable for the implementation. Examples for this might be that if [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) is given in [sock_ip_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga0b416e35dd100962d88bdd675e7f6b18), the implementation might choose to return the address on this interface the `sock` is bound to in `ep's`[sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6).

`(sock != NULL) && (ep != NULL)`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `ep` The local end point.

#### Returns
0 on success. 

#### Returns
-EADDRNOTAVAIL, when `sock` has no end point bound to it.

#### `public int `[`sock_ip_get_remote`](#group__net__sock__ip_1ga51463dba508be8f9a114486a75f9fdbe)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * ep)` 

Gets the remote end point of a raw IPv4/IPv6 sock object.

`(sock != NULL) && (ep != NULL)`

This gets the remote end point of a raw IPv4/IPv6 sock object. Note that this might not be the same end point you added in [sock_ip_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga0b416e35dd100962d88bdd675e7f6b18), but an end point more suitable for the implementation. Examples for this might be that if [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) is given in [sock_ip_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga0b416e35dd100962d88bdd675e7f6b18), the implementation might choose to return the address on this interface the `sock` is bound to in `ep's`[sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6).

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `ep` The remote end point.

#### Returns
0 on success. 

#### Returns
-ENOTCONN, when `sock` has no remote end point bound to it.

#### `public ssize_t `[`sock_ip_recv_aux`](#group__net__sock__ip_1gaa9ec389133f8c39fd4132724306089df)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,`[`sock_ip_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_ip.md#structsock__ip__aux__rx__t)` * aux)` 

Receives a message over IPv4/IPv6 from remote end point.

`(sock != NULL) && (data != NULL) && (max_len > 0)`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `data` Pointer where the received data should be stored. 

* `max_len` Maximum space available at `data`. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be NULL, if it is not required by the application. 

* `aux` Auxiliary data of the reception. May be NULL, if it is not required by the application.

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
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_ip_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1gafad2a57b4ee2bb5604e2d788f5e116ba) blocks). 

#### Returns
-ENOBUFS, if buffer space is not large enough to store received data. 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public inline static ssize_t `[`sock_ip_recv`](#group__net__sock__ip_1gafad2a57b4ee2bb5604e2d788f5e116ba)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void * data,size_t max_len,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote)` 

Receives a message over IPv4/IPv6 from remote end point.

`(sock != NULL) && (data != NULL) && (max_len > 0)`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `data` Pointer where the received data should be stored. 

* `max_len` Maximum space available at `data`. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be NULL, if it is not required by the application.

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
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_ip_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1gafad2a57b4ee2bb5604e2d788f5e116ba) blocks). 

#### Returns
-ENOBUFS, if buffer space is not large enough to store received data. 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public ssize_t `[`sock_ip_recv_buf_aux`](#group__net__sock__ip_1ga1a678826f520f62c94ff8f4492e4847b)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,`[`sock_ip_aux_rx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_ip.md#structsock__ip__aux__rx__t)` * aux)` 

Provides stack-internal buffer space containing an IPv4/IPv6 message from remote end point.

`(sock != NULL) && (data != NULL) && (buf_ctx != NULL)`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `data` Pointer to a stack-internal buffer space containing the received data. 

* `buf_ctx` Stack-internal buffer context. If it points to a `NULL` pointer, the stack returns a new buffer space for a new packet. If it does not point to a `NULL` pointer, an existing context is assumed to get a next segment in a buffer. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be NULL, if it is not required by the application. 

* `aux` Auxiliary data of the reception. May be NULL, if it is not required by the application.

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
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_ip_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1gafad2a57b4ee2bb5604e2d788f5e116ba) blocks). 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public inline static ssize_t `[`sock_ip_recv_buf`](#group__net__sock__ip_1gaa3ccb9ce7d1ac34118227549531a6ce7)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,void ** data,void ** buf_ctx,uint32_t timeout,`[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote)` 

Provides stack-internal buffer space containing an IPv4/IPv6 message from remote end point.

`(sock != NULL) && (data != NULL) && (buf_ctx != NULL)`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `data` Pointer to a stack-internal buffer space containing the received data. 

* `buf_ctx` Stack-internal buffer context. If it points to a `NULL` pointer, the stack returns a new buffer space for a new packet. If it does not point to a `NULL` pointer, an existing context is assumed to get a next segment in a buffer. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available). 

* `remote` Remote end point of the received data. May be NULL, if it is not required by the application.

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
-EINVAL, if `remote` is invalid or `sock` is not properly initialized (or closed while [sock_ip_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1gafad2a57b4ee2bb5604e2d788f5e116ba) blocks). 

#### Returns
-ENOMEM, if no memory was available to receive `data`. 

#### Returns
-EPROTO, if source address of received packet did not equal the remote of `sock`. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public ssize_t `[`sock_ip_send_aux`](#group__net__sock__ip_1gaaf777c4afca9984f71a25c57aeaf49bf)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,const void * data,size_t len,uint8_t proto,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote,`[`sock_ip_aux_tx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_ip.md#structsock__ip__aux__tx__t)` * aux)` 

Sends a message over IPv4/IPv6 to remote end point.

`((sock != NULL || remote != NULL)) && (if (len != 0): (data != NULL))`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. May be NULL. A sensible local end point should be selected by the implementation in that case. 

* `data` Pointer where the received data should be stored. May be `NULL` if `len == 0`. 

* `len` Maximum space available at `data`. 

* `proto` Protocol to use in the packet sent, in case `sock == NULL`. If `sock != NULL` this parameter will be ignored. 

* `remote` Remote end point for the sent data. May be `NULL`, if `sock` has a remote end point. [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) may be AF_UNSPEC, if local end point of `sock` provides this information. 

* `aux` Auxiliary data for the transmission. May be `NULL` if not needed by the caller.

#### Returns
The number of bytes sent on success. 

#### Returns
-EAFNOSUPPORT, if `remote != NULL` and [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EINVAL, if [sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) of `remote` is not a valid interface or contradicts the local interface of `sock`. 

#### Returns
-EHOSTUNREACH, if `remote` or remote end point of `sock` is not reachable. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ENOTCONN, if `remote == NULL`, but `sock` has no remote end point. 

#### Returns
-EPROTOTYPE, if `sock == NULL` and `proto` is not by [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) of `remote`.

#### `public inline static ssize_t `[`sock_ip_send`](#group__net__sock__ip_1ga66054a9b18473f819d098e7896adda57)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,const void * data,size_t len,uint8_t proto,const `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` * remote)` 

Sends a message over IPv4/IPv6 to remote end point.

`((sock != NULL || remote != NULL)) && (if (len != 0): (data != NULL))`

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. May be NULL. A sensible local end point should be selected by the implementation in that case. 

* `data` Pointer where the received data should be stored. May be `NULL` if `len == 0`. 

* `len` Maximum space available at `data`. 

* `proto` Protocol to use in the packet sent, in case `sock == NULL`. If `sock != NULL` this parameter will be ignored. 

* `remote` Remote end point for the sent data. May be `NULL`, if `sock` has a remote end point. [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) may be AF_UNSPEC, if local end point of `sock` provides this information.

#### Returns
The number of bytes sent on success. 

#### Returns
-EAFNOSUPPORT, if `remote != NULL` and [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) of `remote` is != AF_UNSPEC and not supported. 

#### Returns
-EINVAL, if [sock_ip_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a397191eaa4ebcd3be89de54da4a4aef6) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_ip_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1a30b82677263d30a8d04dbbae5a4dce45) of `remote` is not a valid interface or contradicts the local interface of `sock`. 

#### Returns
-EHOSTUNREACH, if `remote` or remote end point of `sock` is not reachable. 

#### Returns
-ENOMEM, if no memory was available to send `data`. 

#### Returns
-ENOTCONN, if `remote == NULL`, but `sock` has no remote end point. 

#### Returns
-EPROTOTYPE, if `sock == NULL` and `proto` is not by [sock_ip_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t_1ae7ae802357d4ec15b34860c8d85a8bf1) of `remote`.

# struct `sock_ip_aux_rx_t` 

Auxiliary data provided when receiving using an IP sock object.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`local`](#structsock__ip__aux__rx__t_1a58acd49deb54e35de438689be78dfe8c) | The local address the packet was received on.
`public uint64_t `[`timestamp`](#structsock__ip__aux__rx__t_1af26b9e0766764f93dc0c4ffc5dadbbe2) | System time the packet was received.
`public int16_t `[`rssi`](#structsock__ip__aux__rx__t_1a0e1159bd55a7170a0bffacaa390d7997) | RSSI value of the received frame.
`public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__ip__aux__rx__t_1a5e4398a020f4df40a482a67f0e2e3dd1) | Flags used request information.

## Members

#### `public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`local`](#structsock__ip__aux__rx__t_1a58acd49deb54e35de438689be78dfe8c) 

The local address the packet was received on.

**See also**: [SOCK_AUX_GET_LOCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7a98bf0e885c91f7c5cead39a9c9ed013a)

#### `public uint64_t `[`timestamp`](#structsock__ip__aux__rx__t_1af26b9e0766764f93dc0c4ffc5dadbbe2) 

System time the packet was received.

**See also**: [SOCK_AUX_GET_TIMESTAMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7ad2c3c2f6a9bc01fdb548bce01a2eaa28)

#### `public int16_t `[`rssi`](#structsock__ip__aux__rx__t_1a0e1159bd55a7170a0bffacaa390d7997) 

RSSI value of the received frame.

**See also**: [SOCK_AUX_GET_RSSI](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7aedbb5fa4874eddf284944cb1f12a1518)

#### `public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__ip__aux__rx__t_1a5e4398a020f4df40a482a67f0e2e3dd1) 

Flags used request information.

# struct `sock_ip_aux_tx_t` 

Auxiliary data provided when sending using an IP sock object.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`local`](#structsock__ip__aux__tx__t_1ace3e20e93b52724815f0c832cd381d3b) | The local endpoint from which the datagram will be sent.
`public uint64_t `[`timestamp`](#structsock__ip__aux__tx__t_1a5e5eb568fd676fc78d096691ee0cddda) | System time the packet was send.
`public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__ip__aux__tx__t_1ac2021e00e0055d452b149b484b65126e) | Flags used request information.

## Members

#### `public `[`sock_ip_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#structsock__ip__ep__t)` `[`local`](#structsock__ip__aux__tx__t_1ace3e20e93b52724815f0c832cd381d3b) 

The local endpoint from which the datagram will be sent.

**See also**: [SOCK_AUX_SET_LOCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7a35baed77f4190447e3fa88ce60a8a1a8)

#### `public uint64_t `[`timestamp`](#structsock__ip__aux__tx__t_1a5e5eb568fd676fc78d096691ee0cddda) 

System time the packet was send.

Add [SOCK_AUX_GET_TIMESTAMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gga6f202bbbced0e3a7de5dc2d9029b29b7ad2c3c2f6a9bc01fdb548bce01a2eaa28) to the bitmask in [sock_ip_aux_tx_t::flags](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_ip.md#structsock__ip__aux__tx__t_1ac2021e00e0055d452b149b484b65126e) to request a transmission timestamp. This bit will be cleared by [sock_ip_send_aux](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1gaaf777c4afca9984f71a25c57aeaf49bf) if and only if the timestamp was provided. The module `sock_aux_timestamp` needs to be selected to use this. The timestamp refers to the transmission of start of frame delimiter or preamble of the frame carrying the IP packet and is given in nanoseconds since epoch, unless otherwise documented by the underlying implementation.

#### `public `[`sock_aux_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaa918a855b7f0e8b7fc0d4348d3010f93)` `[`flags`](#structsock__ip__aux__tx__t_1ac2021e00e0055d452b149b484b65126e) 

Flags used request information.

