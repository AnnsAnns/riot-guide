---
title: api-net_sock_async_event.md
description: api-net_sock_async_event.md
---
# group `net_sock_async_event` 

Provides an implementation of asynchronous sock for [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).

**This feature is experimental!**
 This API is still under development and should not be used in production yet.

How To UseYou need to [include](#creating-an-application_1including-modules) at least one module that implements a [`sock` API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock) (e.g. `gnrc_sock_udp` and `gnrc_sock_async` for the [GNRC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) implementation using UDP) and the module `sock_async_event` in your application's Makefile.

For the following example [`sock_udp`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp) is used. It is however easily adaptable for other `sock` types:

An asynchronous UDP Echo server using the event API
```cpp
#include <stdio.h>

#include "net/sock/udp.h"
#include "net/sock/async/event.h"

event_queue_t queue;
uint8_t buf[128];

void handler(sock_udp_t *sock, sock_async_flags_t type, void *arg)
{
    (void)arg;
    if (type & SOCK_ASYNC_MSG_RECV) {
        sock_udp_ep_t remote;
        ssize_t res;

        if ((res = sock_udp_recv(sock, buf, sizeof(buf), 0,
                                 &remote)) >= 0) {
            puts("Received a message");
            if (sock_udp_send(sock, buf, res, &remote) < 0) {
                puts("Error sending reply");
            }
        }
    }
}

int main(void)
{
    sock_udp_ep_t local = SOCK_IPV6_EP_ANY;
    sock_udp_t sock;

    local.port = 12345;

    if (sock_udp_create(&sock, &local, NULL, 0) < 0) {
        puts("Error creating UDP sock");
        return 1;
    }

    event_queue_init(&queue);
    sock_udp_event_init(&sock, &queue, handler, NULL);
    event_loop(&queue);
    return 0;
}
```

Above you see a simple UDP echo server using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event). Don't forget to also [include](#creating-an-application_1including-modules) the IPv6 module of your networking implementation (e.g. `gnrc_ipv6_default` for [Generic (GNRC) network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) GNRC) and at least one network device.

After including the header file for [UDP sock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp) and [asynchronous handling](#group__net__sock__async__event), we create the event queue `queue` and allocate some buffer space `buf` to store the data received by the server:

```cpp
#include "net/sock/udp.h"
#include "net/sock/async/event.h"

event_queue_t queue;
uint8_t buf[128];
```

We then define an event handler in form of a function. The event handler checks if the triggering event was a receive event by checking the flags provided with [sock_event_t::type](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__event__t_1afacb0c044f6fb3655ee63b61ba3a003a). If it is a receive event it copies the incoming message to `buf` and its sender into `remote` using [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac). Note, that we use [sock_udp_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gacc31d9fd5c02e95e4ca7257c808e53ac) non-blocking by setting `timeout` to 0. If an error occurs on receive, we just ignore it and return from the event handler.

If we receive a message we use its `remote` to reply. In case of an error on send, we print an according message:

```cpp
void handler(sock_udp_t *sock, sock_async_flags_t type, void *arg)
{
    (void)arg;
    if (type & SOCK_ASYNC_MSG_RECV) {
        sock_udp_ep_t remote;
        ssize_t res;

        if ((res = sock_udp_recv(sock, buf, sizeof(buf), 0,
                                 &remote)) >= 0) {
            puts("Received a message");
            if (sock_udp_send(sock, buf, res, &remote) < 0) {
                puts("Error sending reply");
            }
        }
    }
}
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

Finally, we initialize the event queue `queue`, initialize asynchronous event handling for `sock` using it and the previously defined event handler, and go into an endless loop to handle all occurring events on `queue`:

```cpp
event_queue_init(&queue);
sock_udp_event_init(&sock, &queue, handler, NULL);
event_loop(&queue);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`sock_dtls_event_init`](#group__net__sock__async__event_1ga4b087835f24c1848d8f047a1d72562f7)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_dtls_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gacfa13d8e28daeb88e26acb43139ba8b9)` handler,void * handler_arg)`            | Makes a DTLS sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).
`public void `[`sock_ip_event_init`](#group__net__sock__async__event_1ga516d85129fee3fbff50753252cc761cf)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_ip_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga9574e29ab737ab3036c83cadc8cf3a3b)` handler,void * handler_arg)`            | Makes a raw IPv4/IPv6 sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).
`public void `[`sock_tcp_event_init`](#group__net__sock__async__event_1ga215c86d4d098d0588e5f827d0d5e3386)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_tcp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga8f34bbf7e66712311ea5b55b431d87cd)` handler,void * handler_arg)`            | Makes a TCP sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).
`public void `[`sock_tcp_queue_event_init`](#group__net__sock__async__event_1gaaca71a0983b47ba06c5c6e13e16028f0)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_tcp_queue_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0d5deaf01ef65664a65258f8c14141f3)` handler,void * handler_arg)`            | Makes a TCP listening queue able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).
`public void `[`sock_udp_event_init`](#group__net__sock__async__event_1gad9dc3dcf6ac348744efe0e2fc23bbc22)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_udp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga2f5a726f8b92f5677cfc0aff15eadbf5)` handler,void * handler_arg)`            | Makes a UDP sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).
`struct `[`sock_event_t`](#structsock__event__t) | Event definition for context scope.
`struct `[`sock_async_ctx_t`](#structsock__async__ctx__t) | Asynchronous context for [Asynchronous sock with event API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async__event).
`union `[`sock_event_cb_t`](#unionsock__event__cb__t) | Generalized callback type.

## Members

#### `public void `[`sock_dtls_event_init`](#group__net__sock__async__event_1ga4b087835f24c1848d8f047a1d72562f7)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_dtls_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gacfa13d8e28daeb88e26acb43139ba8b9)` handler,void * handler_arg)` 

Makes a DTLS sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).

#### Parameters
* `sock` A DTLS sock object. 

* `ev_queue` The queue the events on `sock` will be added to. 

* `handler` The event handler function to call on an event on `sock`. 

* `handler_arg` Argument to provided to `handler`.

Only available with module `[sock_dtls](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsock__dtls)`.

#### `public void `[`sock_ip_event_init`](#group__net__sock__async__event_1ga516d85129fee3fbff50753252cc761cf)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_ip_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga9574e29ab737ab3036c83cadc8cf3a3b)` handler,void * handler_arg)` 

Makes a raw IPv4/IPv6 sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `ev_queue` The queue the events on `sock` will be added to. 

* `handler` The event handler function to call on an event on `sock`. 

* `handler_arg` Argument to provided to `handler`.

Only available with module `[sock_ip](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__ip)`.

#### `public void `[`sock_tcp_event_init`](#group__net__sock__async__event_1ga215c86d4d098d0588e5f827d0d5e3386)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_tcp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga8f34bbf7e66712311ea5b55b431d87cd)` handler,void * handler_arg)` 

Makes a TCP sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).

#### Parameters
* `sock` A TCP sock object. 

* `ev_queue` The queue the events on `sock` will be added to. 

* `handler` The event handler function to call on an event on `sock`. 

* `handler_arg` Argument to provided to `handler`.

Only available with module `[sock_tcp](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp)`.

#### `public void `[`sock_tcp_queue_event_init`](#group__net__sock__async__event_1gaaca71a0983b47ba06c5c6e13e16028f0)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_tcp_queue_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0d5deaf01ef65664a65258f8c14141f3)` handler,void * handler_arg)` 

Makes a TCP listening queue able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).

#### Parameters
* `queue` A TCP listening queue. 

* `ev_queue` The queue the events on `sock` will be added to. 

* `handler` The event handler function to call on an event on `sock`. 

* `handler_arg` Argument to provided to `handler`.

Only available with module `[sock_tcp](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__tcp)`.

#### `public void `[`sock_udp_event_init`](#group__net__sock__async__event_1gad9dc3dcf6ac348744efe0e2fc23bbc22)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * ev_queue,`[`sock_udp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga2f5a726f8b92f5677cfc0aff15eadbf5)` handler,void * handler_arg)` 

Makes a UDP sock able to handle asynchronous events using [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event).

#### Parameters
* `sock` A UDP sock object. 

* `ev_queue` The queue the events on `sock` will be added to. 

* `handler` The event handler function to call on an event on `sock`. 

* `handler_arg` Argument to provided to `handler`.

Only available with module `[sock_udp](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_lwip_sock.md#structsock__udp)`.

# struct `sock_event_t` 

Event definition for context scope.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`super`](#structsock__event__t_1a4f5809482b3af8bb6caf092075df65f9) | event structure that gets extended
`public `[`sock_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#unionsock__event__cb__t)` `[`cb`](#structsock__event__t_1ac93fe830bedb1a2ce6f6c4665ec43e98) | callback
`public void * `[`sock`](#structsock__event__t_1abe5200a03caf44ab58b257cf1eecb62e) | generic pointer to a [Sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock) object
`public void * `[`cb_arg`](#structsock__event__t_1af9d8bf1df5dbc9d129da1569faa9e71c) | callback argument
`public `[`sock_async_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga414feb0f54b75c39577e846858e1a5d6)` `[`type`](#structsock__event__t_1afacb0c044f6fb3655ee63b61ba3a003a) | types of the event

## Members

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`super`](#structsock__event__t_1a4f5809482b3af8bb6caf092075df65f9) 

event structure that gets extended

#### `public `[`sock_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#unionsock__event__cb__t)` `[`cb`](#structsock__event__t_1ac93fe830bedb1a2ce6f6c4665ec43e98) 

callback

#### `public void * `[`sock`](#structsock__event__t_1abe5200a03caf44ab58b257cf1eecb62e) 

generic pointer to a [Sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock) object

#### `public void * `[`cb_arg`](#structsock__event__t_1af9d8bf1df5dbc9d129da1569faa9e71c) 

callback argument

#### `public `[`sock_async_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga414feb0f54b75c39577e846858e1a5d6)` `[`type`](#structsock__event__t_1afacb0c044f6fb3655ee63b61ba3a003a) 

types of the event

# struct `sock_async_ctx_t` 

Asynchronous context for [Asynchronous sock with event API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async__event).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__event__t)` `[`event`](#structsock__async__ctx__t_1af8764677757c766a6a64e35bfeee613c) | event storage
`public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * `[`queue`](#structsock__async__ctx__t_1ae9222b83f9881bca270343030ef3d8c1) | event queue to post socket events to

## Members

#### `public `[`sock_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__event__t)` `[`event`](#structsock__async__ctx__t_1af8764677757c766a6a64e35bfeee613c) 

event storage

#### `public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * `[`queue`](#structsock__async__ctx__t_1ae9222b83f9881bca270343030ef3d8c1) 

event queue to post socket events to

