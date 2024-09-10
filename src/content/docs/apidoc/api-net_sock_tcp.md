---
title: api-net_sock_tcp.md
description: api-net_sock_tcp.md
---
# group `net_sock_tcp` 

Sock submodule for TCP.

How To UseFirst you need to [include](#creating-an-application_1including-modules) a module that implements this API in your application's Makefile. For example the implementation for [GNRC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) is called `gnrc_sock_tcp`.

A Simple TCP Echo Server
```cpp
#include "net/sock/tcp.h"

#define SOCK_QUEUE_LEN  (1U)

sock_tcp_t sock_queue[SOCK_QUEUE_LEN];
uint8_t buf[128];

int main(void)
{
    sock_tcp_ep_t local = SOCK_IPV6_EP_ANY;
    sock_tcp_queue_t queue;

    local.port = 12345;

    if (sock_tcp_listen(&queue, &local, sock_queue, SOCK_QUEUE_LEN, 0) < 0) {
        puts("Error creating listening queue");
        return 1;
    }
    puts("Listening on port 12345");
    while (1) {
        sock_tcp_t *sock;

        if (sock_tcp_accept(&queue, &sock, SOCK_NO_TIMEOUT) < 0) {
            puts("Error accepting new sock");
        }
        else {
            int read_res = 0;

            puts("Reading data");
            while (read_res >= 0) {
                read_res = sock_tcp_read(sock, &buf, sizeof(buf),
                                         SOCK_NO_TIMEOUT);
                if (read_res <= 0) {
                    puts("Disconnected");
                    break;
                }
                else {
                    int write_res;
                    printf("Read: \"");
                    for (int i = 0; i < read_res; i++) {
                        printf("%c", buf[i]);
                    }
                    puts("\"");
                    if ((write_res = sock_tcp_write(sock, &buf,
                                                    read_res)) < 0) {
                        puts("Errored on write, finished server loop");
                        break;
                    }
                }
            }
            sock_tcp_disconnect(sock);
        }
    }
    sock_tcp_stop_listen(&queue);
    return 0;
}
```

Above you see a simple TCP echo server. Don't forget to also [include](#creating-an-application_1including-modules) the IPv6 module of your networking implementation (e.g. `gnrc_ipv6_default` for [Generic (GNRC) network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) GNRC) and at least one network device.

After including header files for the [address families](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af) and the [TCP `sock`s and `queue`s](#group__net__sock__tcp) themselves, we create an array of [sock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga0144778bc074e291fcb0d43bd35c0179) objects `sock_queue` as our listen queue (for simplicity of length 1 in our example) and some buffer space `buf` to store the data received by the server:

```cpp
#include "net/af.h"
#include "net/sock/tcp.h"

#define SOCK_QUEUE_LEN  (1U)

sock_tcp_t sock_queue[SOCK_QUEUE_LEN];
uint8_t buf[128];
```

We want to listen for incoming connections on a specific port, so we set a local end point with that port (`12345` in this case).

We then proceed to creating the listen queue `queue`. Since it is bound to `local` it waits for incoming connections to port `12345`. We don't need any further configuration so we set the flags to 0. In case of an error we stop the program:

```cpp
sock_tcp_ep_t local = SOCK_IPV6_EP_ANY;
sock_tcp_queue_t queue;

local.port = 12345;

if (sock_tcp_listen(&queue, &local, sock_queue, SOCK_QUEUE_LEN, 0) < 0) {
    puts("Error creating listening queue");
    return 1;
}
puts("Listening on port 12345");
```

The application then waits indefinitely for an incoming connection with `[sock_tcp_accept()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga7321c9f109c2c8f443237bc716f9c263)`. If we want to timeout this wait period we could alternatively set the `timeout` parameter of [sock_tcp_accept()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga7321c9f109c2c8f443237bc716f9c263) to a value != [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e). If an error occurs during that we print an error message but proceed waiting.

```cpp
while (1) {
    sock_tcp_t *sock;

    if (sock_tcp_accept(&queue, &sock, SOCK_NO_TIMEOUT) < 0) {
        puts("Error accepting new sock");
    }
    else {
```

On successful connection establishment with a client we get a connected `sock` object and we try to read the incoming stream into `buf` using `[sock_tcp_read()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1gaab95990c5902a9a087c6c18b717835cb)` on that `sock`. Again, we could use another timeout period than [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) with this function. If we error we break the read loop and disconnect the `sock`.

```cpp
int read_res = 0;

puts("Reading data");
while (read_res >= 0) {
    read_res = sock_tcp_read(sock, &buf, sizeof(buf),
                             SOCK_NO_TIMEOUT);
    if (read_res <= 0) {
        puts("Disconnected");
        break;
    }
    else {
        ...
    }
}
sock_tcp_disconnect(sock);
```

Otherwise, we print the received message and write it back to the connected `sock` (an again breaking the loop on error).

```cpp
int write_res;
printf("Read: \"");
for (int i = 0; i < read_res; i++) {
    printf("%c", buf[i]);
}
puts("\"");
if ((write_res = sock_tcp_write(sock, &buf,
                                read_res)) < 0) {
    puts("Errored on write, finished server loop");
    break;
}
```

In the case of we somehow manage to break the infinite accepting loop we stop the listening queue appropriately.

```cpp
sock_tcp_stop_listen(queue);
```

A Simple TCP Echo Client
```cpp
#include "net/af.h"
#include "net/ipv6/addr.h"
#include "net/sock/tcp.h"

uint8_t buf[128];
sock_tcp_t sock;

int main(void)
{
    int res;
    sock_tcp_ep_t remote = SOCK_IPV6_EP_ANY;

    remote.port = 12345;
    ipv6_addr_from_str((ipv6_addr_t *)&remote.addr,
                       "fe80::d8fa:55ff:fedf:4523");
    if (sock_tcp_connect(&sock, &remote, 0, 0) < 0) {
        puts("Error connecting sock");
        return 1;
    }
    puts("Sending \"Hello!\"");
    if ((res = sock_tcp_write(&sock, "Hello!", sizeof("Hello!"))) < 0) {
        puts("Errored on write");
    }
    else {
        if ((res = sock_tcp_read(&sock, &buf, sizeof(buf),
                                 SOCK_NO_TIMEOUT)) <= 0) {
            puts("Disconnected");
        }
        printf("Read: \"");
        for (int i = 0; i < res; i++) {
            printf("%c", buf[i]);
        }
        puts("\"");
    }
    sock_tcp_disconnect(&sock);
    return res;
}
```

Above you see a simple TCP echo client. Again: Don't forget to also [include](#creating-an-application_1including-modules) the IPv6 module of your networking implementation (e.g. `gnrc_ipv6_default` for [GNRC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc)) and at least one network device. Ad0)ditionally, for the IPv6 address parsing you need the [IPv6 address module](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ipv6__addr).

This time instead of creating a listening queue we create a connected `sock` object directly. To connect it to a port at a host we setup a remote end-point first (with port `12345` and address `fe80::d8fa:55ff:fedf:4523` in this case; your IP address may differ of course) and connect to it using `[sock_tcp_connect()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga67c5ddd2a47e6b9b0c60346f71f9ce9e)`. We neither care about the local port nor additional configuration so we set both the `local_port` and `flags` parameter of `[sock_tcp_connect()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga67c5ddd2a47e6b9b0c60346f71f9ce9e)` to `0`:

```cpp
sock_tcp_ep_t remote = SOCK_IPV6_EP_ANY;

remote.port = 12345;
ipv6_addr_from_str((ipv6_addr_t *)&remote.addr,
                   "fe80::d8fa:55ff:fedf:4523");
if (sock_tcp_connect(&sock, &remote, 0, 0) < 0) {
    puts("Error connecting sock");
    return 1;
}
```

On error we just terminate the program, on success we send a message (`Hello!`) and again terminate the program on error:

```cpp
if ((res = sock_tcp_write(&sock, "Hello!", sizeof("Hello!"))) < 0) {
    puts("Errored on write");
}
```

Otherwise, we wait for the reply and print it in case of success (and terminate in case of error):

```cpp
else {
    if ((res = sock_tcp_read(&sock, &buf, sizeof(buf),
                             SOCK_NO_TIMEOUT)) <= 0) {
        puts("Disconnected");
    }
    printf("Read: \"");
    for (int i = 0; i < res; i++) {
        printf("%c", buf[i]);
    }
    puts("\"");
}
sock_tcp_disconnect(&sock);
return res;
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sock_tcp_connect`](#group__net__sock__tcp_1ga67c5ddd2a47e6b9b0c60346f71f9ce9e)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * remote,uint16_t local_port,uint16_t flags)`            | Establishes a new TCP sock connection.
`public int `[`sock_tcp_listen`](#group__net__sock__tcp_1ga50008ef716746eb6d2a50c56615d8547)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * local,`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * queue_array,unsigned queue_len,uint16_t flags)`            | Listen for an incoming connection request on `local` end point.
`public void `[`sock_tcp_disconnect`](#group__net__sock__tcp_1gad540117597093b7a17ddddc45640a165)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)`            | Disconnects a TCP connection.
`public void `[`sock_tcp_stop_listen`](#group__net__sock__tcp_1ga56d28140912df5ffc241786a68cb4acc)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue)`            | Stops listening on TCP listening queue.
`public int `[`sock_tcp_get_local`](#group__net__sock__tcp_1ga2610c60b32f1a41f2be9ed4b914d4134)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep)`            | Gets the local end point of a TCP sock object.
`public int `[`sock_tcp_get_remote`](#group__net__sock__tcp_1gaffcad2b28adab9c4c2e8e03c15d7d647)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep)`            | Gets the remote end point of a TCP sock object.
`public int `[`sock_tcp_queue_get_local`](#group__net__sock__tcp_1gae6a4176bfb0bd94b5c1b26c9f670fd7f)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep)`            | Gets the local end point of a TCP sock queue object.
`public int `[`sock_tcp_accept`](#group__net__sock__tcp_1ga7321c9f109c2c8f443237bc716f9c263)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` ** sock,uint32_t timeout)`            | Receives and handles TCP connection requests from other peers.
`public ssize_t `[`sock_tcp_read`](#group__net__sock__tcp_1gaab95990c5902a9a087c6c18b717835cb)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,void * data,size_t max_len,uint32_t timeout)`            | Reads data from an established TCP stream.
`public ssize_t `[`sock_tcp_write`](#group__net__sock__tcp_1gac72c6cc4fabd9f34b80a5157e346c24a)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,const void * data,size_t len)`            | Writes data to an established TCP stream.

## Members

#### `public int `[`sock_tcp_connect`](#group__net__sock__tcp_1ga67c5ddd2a47e6b9b0c60346f71f9ce9e)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * remote,uint16_t local_port,uint16_t flags)` 

Establishes a new TCP sock connection.

`sock != NULL`

`(remote != NULL) && (remote->port != 0)`

#### Parameters
* `sock` The resulting sock object. 

* `remote` Remote end point for the sock object. 

* `local_port` Local port for the connection. May be 0. * If `local_port == 0` the connection is bound to a random port. 

* `flags` Flags for the sock object. See also [net_sock_flags](#group__net__sock_1net_sock_flags). May be 0.

#### Returns
0 on success. 

#### Returns
-EADDRINUSE, if `(flags & SOCK_FLAGS_REUSE_EP) == 0` and `local_port` is already used elsewhere 

#### Returns
-EAFNOSUPPORT, if [sock_tcp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) of `remote` is not supported. 

#### Returns
-ECONNREFUSED, if no-one is listening on the `remote` end point. 

#### Returns
-EINVAL, if [sock_tcp_ep_t::addr](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1abbfce0453331f3a69d874b7a48d5f669) of `remote` is an invalid address. 

#### Returns
-EINVAL, if [sock_tcp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `remote` is not a valid interface. 

#### Returns
-ENETUNREACH, if network defined by `remote` is not reachable. 

#### Returns
-ENOMEM, if system was not able to allocate sufficient memory to establish connection. 

#### Returns
-EPERM, if connections to `remote` are not permitted on the system (e.g. by firewall rules). 

#### Returns
-ETIMEDOUT, if the connection attempt to `remote` timed out.

#### `public int `[`sock_tcp_listen`](#group__net__sock__tcp_1ga50008ef716746eb6d2a50c56615d8547)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,const `[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * local,`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * queue_array,unsigned queue_len,uint16_t flags)` 

Listen for an incoming connection request on `local` end point.

`queue != NULL`

`(local != NULL) && (local->port != 0)`

`(queue_array != NULL) && (queue_len != 0)`

#### Parameters
* `queue` The resulting listening queue. 

* `local` Local end point to listen on. 

* `queue_array` Array of sock objects. 

* `queue_len` Length of `queue_array`. 

* `flags` Flags for the listening queue. See also [net_sock_flags](#group__net__sock_1net_sock_flags). May be 0.

#### Returns
0 on success. 

#### Returns
-EADDRINUSE, if `(flags & SOCK_FLAGS_REUSE_EP) == 0` and `local` is already used elsewhere 

#### Returns
-EAFNOSUPPORT, if [sock_tcp_ep_t::family](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a39cc1104d239f1b620e0714a1c33b247) of `local` is not supported. 

#### Returns
-EINVAL, if [sock_tcp_ep_t::netif](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock.md#struct__sock__tl__ep_1a4f667124619a9590a0471585f71b2213) of `local` is not a valid interface. 

#### Returns
-ENOMEM, if no memory was available to listen on `queue`.

#### `public void `[`sock_tcp_disconnect`](#group__net__sock__tcp_1gad540117597093b7a17ddddc45640a165)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)` 

Disconnects a TCP connection.

`sock != NULL` If we want to timeout this wait period we could alternatively set the `timeout` parameter of [sock_tcp_accept()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga7321c9f109c2c8f443237bc716f9c263) to a value != [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e).

#### Parameters
* `sock` A TCP sock object.

#### `public void `[`sock_tcp_stop_listen`](#group__net__sock__tcp_1ga56d28140912df5ffc241786a68cb4acc)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue)` 

Stops listening on TCP listening queue.

`queue != NULL`

#### Parameters
* `queue` A TCP listening queue.

#### `public int `[`sock_tcp_get_local`](#group__net__sock__tcp_1ga2610c60b32f1a41f2be9ed4b914d4134)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep)` 

Gets the local end point of a TCP sock object.

`(sock != NULL) && (ep != NULL)`

#### Parameters
* `sock` A TCP sock object. 

* `ep` The local end point.

#### Returns
0 on success. 

#### Returns
-EADDRNOTAVAIL, when `sock` has no local end point.

#### `public int `[`sock_tcp_get_remote`](#group__net__sock__tcp_1gaffcad2b28adab9c4c2e8e03c15d7d647)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep)` 

Gets the remote end point of a TCP sock object.

`(sock != NULL) && (ep != NULL)`

#### Parameters
* `sock` A TCP sock object. 

* `ep` The remote end point.

#### Returns
0 on success. 

#### Returns
-ENOTCONN, when `sock` is not connected to a remote end point.

#### `public int `[`sock_tcp_queue_get_local`](#group__net__sock__tcp_1gae6a4176bfb0bd94b5c1b26c9f670fd7f)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`sock_tcp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga882b5e7467eb5820579921241858e912)` * ep)` 

Gets the local end point of a TCP sock queue object.

`(sock != NULL) && (ep != NULL)`

#### Parameters
* `queue` A TCP sock queue object. 

* `ep` The local end point.

#### Returns
0 on success. 

#### Returns
-EADDRNOTAVAIL, when `queue` has no local end point.

#### `public int `[`sock_tcp_accept`](#group__net__sock__tcp_1ga7321c9f109c2c8f443237bc716f9c263)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` ** sock,uint32_t timeout)` 

Receives and handles TCP connection requests from other peers.

`(queue != NULL) && (sock != NULL)`

#### Parameters
* `queue` A TCP listening queue. 

* `sock` A new TCP sock object for the established sock object. 

* `timeout` Timeout for accept in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available).

#### Returns
0 on success. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-ECONNABORTED, if the connection to `sock` has been aborted while in this function 

#### Returns
-EINVAL, if `queue` was not initialized using [sock_tcp_listen()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga50008ef716746eb6d2a50c56615d8547). 

#### Returns
-ENOMEM, if system was not able to allocate sufficient memory to establish connection. 

#### Returns
-EPERM, if connections on local end point of `queue` are not permitted on this system (e.g. by firewall rules). 

#### Returns
-ETIMEDOUT, if the operation timed out internally.

#### `public ssize_t `[`sock_tcp_read`](#group__net__sock__tcp_1gaab95990c5902a9a087c6c18b717835cb)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,void * data,size_t max_len,uint32_t timeout)` 

Reads data from an established TCP stream.

`(sock != NULL) && (data != NULL) && (max_len > 0)`

#### Parameters
* `sock` A TCP sock object. 

* `data` Pointer where the read data should be stored. 

* `max_len` Maximum space available at `data`. If read data exceeds `max_len` the data is truncated and the remaining data can be retrieved later on. 

* `timeout` Timeout for receive in microseconds. If 0 and no data is available, the function returns immediately. May be [SOCK_NO_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gaf0c954b49c306f6c125d25ddba9f352e) for no timeout (wait until data is available).

Function may block.

#### Returns
The number of bytes read on success. 

#### Returns
0, if no read data is available or the connection was orderly closed by the remote host. 

#### Returns
-EAGAIN, if `timeout` is `0` and no data is available. 

#### Returns
-ECONNABORTED, if the connection is aborted while waiting for the next data. 

#### Returns
-ECONNRESET, if the connection was forcibly closed by remote end point of `sock`. 

#### Returns
-ENOTCONN, when `sock` is not connected to a remote end point. 

#### Returns
-ETIMEDOUT, if `timeout` expired.

#### `public ssize_t `[`sock_tcp_write`](#group__net__sock__tcp_1gac72c6cc4fabd9f34b80a5157e346c24a)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,const void * data,size_t len)` 

Writes data to an established TCP stream.

`(sock != NULL)`

`if (len != NULL): (data != NULL)`

#### Parameters
* `sock` A TCP sock object. 

* `data` Pointer to the data to be written to the stream. 

* `len` Maximum space available at `data`.

Function may block.

#### Returns
The number of bytes written on success. 

#### Returns
-ECONNABORTED, if the connection is aborted while waiting for the next data. 

#### Returns
-ECONNRESET, if the connection was forcibly closed by remote end point of `sock`. 

#### Returns
-ENOMEM, if no memory was available to written `data`. 

#### Returns
-ENOTCONN, if `sock` is not connected to a remote end point.

