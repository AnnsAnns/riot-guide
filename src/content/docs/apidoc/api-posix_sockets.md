---
title: api-posix_sockets.md
description: api-posix_sockets.md
---
# group `posix_sockets` 

POSIX socket wrapper of RIOT's [Sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock).

**See also**: [The Open Group Specifications Issue 7 ](http://pubs.opengroup.org/onlinepubs/9699919799/)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`INADDRSZ`](#group__posix__sockets_1ga001221f197fa18c54d6fc0833afe43ce)            | Size in byte of an IPv4 address.
`define `[`IN6ADDRSZ`](#group__posix__sockets_1gad67a4ada9fe9e82b4814d0802f194ef9)            | Size in byte of an IPv6 address.
`define `[`INET_ADDRSTRLEN`](#group__posix__sockets_1ga93b37007689284fd9c4bde1a8f4b9199)            | Length of the string form for IPv4.
`define `[`INET6_ADDRSTRLEN`](#group__posix__sockets_1gaf776b22a727aae7c9f4d869d50df47e8)            | Length of the string form for IPv6.
`define `[`INADDR_ANY`](#group__posix__sockets_1ga5d1940045dc2e7de552f3d4ff13a74ab)            | IPv4 local host address.
`define `[`INADDR_BROADCAST`](#group__posix__sockets_1ga4a725f61ded23ce8a7dff8e82ed51986)            | IPv4 broadcast address.
`define `[`IN6ADDR_ANY_INIT`](#group__posix__sockets_1ga1de876a356ee05a2e9427b741f99f49c)            | IPv6 wildcard address.
`define `[`IN6ADDR_LOOPBACK_INIT`](#group__posix__sockets_1ga5562c81af19ee5988ddc5a5c6153cf37)            | IPv6 loopback address.
`define `[`SOCKET_POOL_SIZE`](#group__posix__sockets_1ga22eccd9aa8f3204b0eb9a93cb6079032)            | Maximum number of sockets available on for creation with [socket()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd)
`define `[`SOCKET_TCP_QUEUE_SIZE`](#group__posix__sockets_1ga84e1913df9f6be33e6a08fce165e50dc)            | Maximum number of incoming TCP connections a listening socket can handle.
`define `[`SOCKADDR_MAX_DATA_LEN`](#group__posix__sockets_1gaf820507f073cc8509b07feb57e3ca52b)            | Maximum data length for a socket address.
`define `[`SOL_SOCKET`](#group__posix__sockets_1ga92d045f6ee2f343d6b28830a9fec082e)            | Options to be accessed at socket level, not protocol level.
`public const char * `[`inet_ntop`](#group__posix__sockets_1ga75ccc33c3ffdc5e88b12972d77177ed4)`(int af,const void *__restrict src,char *__restrict dst,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` size)`            | Converts an IP address to its string representation.
`public int `[`inet_pton`](#group__posix__sockets_1gacdce1d46efd09e8485a2f682b388ebc0)`(int af,const char * src,void * dst)`            | Converts an IP address string representation to a byte-represented IP address.
`public int `[`accept`](#group__posix__sockets_1ga8595ed83541c4bb28bb06c6e9bcbe31d)`(int socket,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)`            | Accept a new connection on a socket.
`public int `[`bind`](#group__posix__sockets_1ga55b3c1572b4e86ca0702ecdeb7e43997)`(int socket,const struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` * address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` address_len)`            | Bind a name to a socket.
`public int `[`connect`](#group__posix__sockets_1gaeedaa5cac80a95d50232c1d130615a1a)`(int socket,const struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` * address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` address_len)`            | Connect a socket.
`public int `[`getpeername`](#group__posix__sockets_1ga90502a50d0421d7f1f37bab938f63714)`(int socket,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)`            | Get the name of the peer socket.
`public int `[`getsockname`](#group__posix__sockets_1gabb4e6ad3b28b4b093fb8e357f7a4645e)`(int socket,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)`            | Get the socket name.
`public int `[`listen`](#group__posix__sockets_1gab0df490f17896fb1fa5f65a4468d6096)`(int socket,int backlog)`            | Listen for socket connections and limit the queue of incoming connections.
`public ssize_t `[`recvfrom`](#group__posix__sockets_1gafda65dd86aec2cce8aed51127c56833c)`(int socket,void *__restrict buffer,size_t length,int flags,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)`            | Receive a message from a socket.
`public inline static ssize_t `[`recv`](#group__posix__sockets_1ga5dc001d9b417cee8cd3c599be661d99e)`(int socket,void * buffer,size_t length,int flags)`            | Receive a message from a connected socket.
`public ssize_t `[`sendto`](#group__posix__sockets_1gafdc1acb83fda416a028cfd39ce8e6fe6)`(int socket,const void * buffer,size_t length,int flags,const struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` * address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` address_len)`            | Send a message on a socket.
`public inline static ssize_t `[`send`](#group__posix__sockets_1ga3ed135eb9019c8945718d03da23546c9)`(int socket,const void * buffer,size_t length,int flags)`            | Send a message on a socket.
`public int `[`socket`](#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd)`(int domain,int type,int protocol)`            | Create an endpoint for communication.
`struct `[`in_addr`](#structin__addr) | IPv4 address structure type.
`struct `[`in6_addr`](#structin6__addr) | IPv6 address structure type.
`struct `[`sockaddr_in`](#structsockaddr__in) | IPv4 socket address type.
`struct `[`sockaddr_in6`](#structsockaddr__in6) | IPv6 socket address type.
`struct `[`ipv6_mreq`](#structipv6__mreq) | IPv6 multicast request.
`struct `[`sockaddr`](#structsockaddr) | Used to define the socket address.
`struct `[`sockaddr_storage`](#structsockaddr__storage) | Implementation based socket address table.

## Members

#### `define `[`INADDRSZ`](#group__posix__sockets_1ga001221f197fa18c54d6fc0833afe43ce) 

Size in byte of an IPv4 address.

#### `define `[`IN6ADDRSZ`](#group__posix__sockets_1gad67a4ada9fe9e82b4814d0802f194ef9) 

Size in byte of an IPv6 address.

#### `define `[`INET_ADDRSTRLEN`](#group__posix__sockets_1ga93b37007689284fd9c4bde1a8f4b9199) 

Length of the string form for IPv4.

#### `define `[`INET6_ADDRSTRLEN`](#group__posix__sockets_1gaf776b22a727aae7c9f4d869d50df47e8) 

Length of the string form for IPv6.

#### `define `[`INADDR_ANY`](#group__posix__sockets_1ga5d1940045dc2e7de552f3d4ff13a74ab) 

IPv4 local host address.

#### `define `[`INADDR_BROADCAST`](#group__posix__sockets_1ga4a725f61ded23ce8a7dff8e82ed51986) 

IPv4 broadcast address.

#### `define `[`IN6ADDR_ANY_INIT`](#group__posix__sockets_1ga1de876a356ee05a2e9427b741f99f49c) 

IPv6 wildcard address.

#### `define `[`IN6ADDR_LOOPBACK_INIT`](#group__posix__sockets_1ga5562c81af19ee5988ddc5a5c6153cf37) 

IPv6 loopback address.

#### `define `[`SOCKET_POOL_SIZE`](#group__posix__sockets_1ga22eccd9aa8f3204b0eb9a93cb6079032) 

Maximum number of sockets available on for creation with [socket()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd)

#### `define `[`SOCKET_TCP_QUEUE_SIZE`](#group__posix__sockets_1ga84e1913df9f6be33e6a08fce165e50dc) 

Maximum number of incoming TCP connections a listening socket can handle.

#### `define `[`SOCKADDR_MAX_DATA_LEN`](#group__posix__sockets_1gaf820507f073cc8509b07feb57e3ca52b) 

Maximum data length for a socket address.

It is assumed that struct [sockaddr_in6](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr__in6) is currently the longest socket address struct. As such it's data length is taken consisting of the IPv6 address (16 byte), the port (2 byte), the flow information (4 byte) and the scope ID (4 byte)

#### `define `[`SOL_SOCKET`](#group__posix__sockets_1ga92d045f6ee2f343d6b28830a9fec082e) 

Options to be accessed at socket level, not protocol level.

#### `public const char * `[`inet_ntop`](#group__posix__sockets_1ga75ccc33c3ffdc5e88b12972d77177ed4)`(int af,const void *__restrict src,char *__restrict dst,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` size)` 

Converts an IP address to its string representation.

(af == AF_INET) || (af == AF_INET6)

#### Parameters
* `af` Address family of `src`. Must be [AF_INET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af_1ggad825d553b53d96e75e002bc6f64642e1a9ab67f00ce8b6a0015a0c642f22b7a81) or [AF_INET6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af_1ggad825d553b53d96e75e002bc6f64642e1a879512295f51cdbbee0aab3ec7cf3a00). 

* `src` An IP address. 

* `dst` The resulting string representation. 

* `size` Length of `result`.

#### Returns
`dst`, on success 

#### Returns
NULL, if `size` was smaller than needed 

#### Returns
NULL, if `src` or `dst` was NULL

#### `public int `[`inet_pton`](#group__posix__sockets_1gacdce1d46efd09e8485a2f682b388ebc0)`(int af,const char * src,void * dst)` 

Converts an IP address string representation to a byte-represented IP address.

(af == AF_INET) || (af == AF_INET6)

#### Parameters
* `af` Address family of `src`. Must be [AF_INET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af_1ggad825d553b53d96e75e002bc6f64642e1a9ab67f00ce8b6a0015a0c642f22b7a81) or [AF_INET6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__af_1ggad825d553b53d96e75e002bc6f64642e1a879512295f51cdbbee0aab3ec7cf3a00). 

* `src` An IP address string representation 

* `dst` The resulting byte representation

#### Returns
1, on success. 

#### Returns
0, if `src` was malformed or input pointers were NULL. 

#### Returns
-1, if `af` is not supported.

#### `public int `[`accept`](#group__posix__sockets_1ga8595ed83541c4bb28bb06c6e9bcbe31d)`(int socket,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)` 

Accept a new connection on a socket.

The [accept()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga8595ed83541c4bb28bb06c6e9bcbe31d) function shall extract the first connection on the queue of pending connections, create a new socket with the same socket type protocol and address family as the specified socket, and allocate a new file descriptor for that socket. If the listen queue is empty of connection requests and O_NONBLOCK is not set on the file descriptor for the socket, [accept()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga8595ed83541c4bb28bb06c6e9bcbe31d) shall block until a connection is present. If the [listen()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gab0df490f17896fb1fa5f65a4468d6096) queue is empty of connection requests and O_NONBLOCK is set on the file descriptor for the socket, [accept()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga8595ed83541c4bb28bb06c6e9bcbe31d) shall fail and set errno to [EAGAIN] or [EWOULDBLOCK]. The accepted socket cannot itself accept more connections. The original socket remains open and can accept more connections.

**See also**: [The Open Group Base Specification Issue 7, accept ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/accept.html)

#### Parameters
* `socket` Specifies a socket that was created with [socket()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd), has been bound to an address with [bind()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga55b3c1572b4e86ca0702ecdeb7e43997), and has issued a successful call to [listen()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gab0df490f17896fb1fa5f65a4468d6096). 

* `address` Either a null pointer, or a pointer to a sockaddr structure where the address of the connecting socket shall be returned. If *address* is not a null pointer, the address of the peer for the accepted connection shall be stored in the sockaddr structure pointed to by *address*, and the length of this address shall be stored in the object pointed to by *address_len*. If the actual length of the address is greater than the length of the supplied sockaddr structure, the stored address shall be truncated. If the protocol permits connections by unbound clients, and the peer is not bound, then the value stored in the object pointed to by address is unspecified. 

* `address_len` Either a null pointer, if *address* is a null pointer, or a pointer to a socklen_t object which on input specifies the length of the supplied sockaddr structure, and on output specifies the length of the stored address. 

#### Returns
Upon successful completion, [accept()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga8595ed83541c4bb28bb06c6e9bcbe31d) shall return the non-negative file descriptor of the accepted socket. Otherwise, -1 shall be returned and errno set to indicate the error.

#### `public int `[`bind`](#group__posix__sockets_1ga55b3c1572b4e86ca0702ecdeb7e43997)`(int socket,const struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` * address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` address_len)` 

Bind a name to a socket.

The [bind()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga55b3c1572b4e86ca0702ecdeb7e43997) function shall assign a local socket address *address* to a socket identified by descriptor socket that has no local socket address assigned. Sockets created with the [socket()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd) function are initially unnamed; they are identified only by their address family.

**See also**: [The Open Group Base Specification Issue 7, bind ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/bind.html)

#### Parameters
* `socket` Specifies the file descriptor of the socket to be bound. 

* `address` Points to a sockaddr structure containing the address to be bound to the socket. The length and format of the address depend on the address family of the socket. If the address family of the socket is AF_UNIX and the pathname in address names a symbolic link, [bind()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga55b3c1572b4e86ca0702ecdeb7e43997) shall fail and set errno to [EADDRINUSE]. 

* `address_len` Specifies the length of the sockaddr structure pointed to by the *address* argument. 

#### Returns
Upon successful completion, [bind()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga55b3c1572b4e86ca0702ecdeb7e43997) shall return 0; otherwise, -1 shall be returned and errno set to indicate the error.

#### `public int `[`connect`](#group__posix__sockets_1gaeedaa5cac80a95d50232c1d130615a1a)`(int socket,const struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` * address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` address_len)` 

Connect a socket.

The [connect()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaeedaa5cac80a95d50232c1d130615a1a) function shall attempt to make a connection on a connection-mode socket or to set or reset the peer address of a connectionless-mode socket.

**See also**: [The Open Group Base Specification Issue 7, connect ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/connect.html)

#### Parameters
* `socket` Specifies the file descriptor associated with the socket. 

* `address` Points to a sockaddr structure containing the peer address. The length and format of the address depend on the address family of the socket. 

* `address_len` Specifies the length of the sockaddr structure pointed to by the address argument. 

The socket will be implicitly bound to an addressed, if it is not already bound. According to [http://pubs.opengroup.org/onlinepubs/009695399/functions/connect.html](http://pubs.opengroup.org/onlinepubs/009695399/functions/connect.html) for a "socket [that] has not already been bound to a local address, [connect()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaeedaa5cac80a95d50232c1d130615a1a) shall bind it to an address which, unless the socket's address family is AF_UNIX, is an unused local address."

#### Returns
Upon successful completion, [connect()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaeedaa5cac80a95d50232c1d130615a1a) shall return 0; otherwise, -1 shall be returned and errno set to indicate the error.

#### `public int `[`getpeername`](#group__posix__sockets_1ga90502a50d0421d7f1f37bab938f63714)`(int socket,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)` 

Get the name of the peer socket.

The [getpeername()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga90502a50d0421d7f1f37bab938f63714) function shall retrieve the peer address of the specified socket, store this address in the sockaddr structure pointed to by the `address` argument, and store the length of this address in the object pointed to by the `address_len` argument.

**See also**: [The Open Group Base Specification Issue 7, getpeername ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/getpeername.html)

#### Parameters
* `socket` Specifies the file descriptor associated with the socket. 

* `address` Points to a sockaddr structure containing the peer address. The length and format of the address depend on the address family of the socket. 

* `address_len` Specifies the length of the sockaddr structure on input and the length of the stored address on output. If the address is greater than the length of the supplied sockaddr structure, the stored address shall be truncated. 

#### Returns
Upon successful completion, [getpeername()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga90502a50d0421d7f1f37bab938f63714) shall return 0; otherwise, -1 shall be returned and errno set to indicate the error.

#### `public int `[`getsockname`](#group__posix__sockets_1gabb4e6ad3b28b4b093fb8e357f7a4645e)`(int socket,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)` 

Get the socket name.

The [getsockname()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gabb4e6ad3b28b4b093fb8e357f7a4645e) function shall retrieve the locally-bound name of the specified socket, store this address in the sockaddr structure pointed to by the `address` argument, and store the length of this address in the object pointed to by the `address_len` argument.

**See also**: [The Open Group Base Specification Issue 7, getsockname ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/getsockname.html)

#### Parameters
* `socket` Specifies the file descriptor associated with the socket. 

* `address` Points to a sockaddr structure containing the peer address. The length and format of the address depend on the address family of the socket. 

* `address_len` Specifies the length of the sockaddr structure on input and the length of the stored address on output. If the address is greater than the length of the supplied sockaddr structure, the stored address shall be truncated. 

#### Returns
Upon successful completion, [getsockname()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gabb4e6ad3b28b4b093fb8e357f7a4645e) shall return 0; otherwise, -1 shall be returned and errno set to indicate the error.

#### `public int `[`listen`](#group__posix__sockets_1gab0df490f17896fb1fa5f65a4468d6096)`(int socket,int backlog)` 

Listen for socket connections and limit the queue of incoming connections.

**See also**: [The Open Group Base Specification Issue 7, listen ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/listen.html)

#### Parameters
* `socket` Specifies the file descriptor associated with the socket. 

* `backlog` Provides a hint to the implementation which the implementation shall use to limit the number of outstanding connections in the socket's listen queue. Implementations may impose a limit on backlog and silently reduce the specified value. Normally, a larger backlog argument value shall result in a larger or equal length of the listen queue. Implementations shall support values of backlog up to SOMAXCONN, defined in <[sys/socket.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#socket_8h)>. 

#### Returns
Upon successful completions, [listen()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gab0df490f17896fb1fa5f65a4468d6096) shall return 0; otherwise, -1 shall be returned and errno set to indicate the error.

#### `public ssize_t `[`recvfrom`](#group__posix__sockets_1gafda65dd86aec2cce8aed51127c56833c)`(int socket,void *__restrict buffer,size_t length,int flags,struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` *__restrict address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` *__restrict address_len)` 

Receive a message from a socket.

The [recvfrom()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gafda65dd86aec2cce8aed51127c56833c) function shall receive a message from a connection-mode or connectionless-mode socket. It is normally used with connectionless-mode sockets because it permits the application to retrieve the source address of received data.

**See also**: [The Open Group Base Specification Issue 7, recvfrom ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/recvfrom.html)

#### Parameters
* `socket` Specifies the socket file descriptor. 

* `buffer` Points to a buffer where the message should be i stored. 

* `length` Specifies the length in bytes of the buffer pointed to by the buffer argument. 

* `flags` Specifies the type of message reception. Support for values other than 0 is not implemented yet. 

* `address` A null pointer, or points to a sockaddr structure in which the sending address is to be stored. The length and format of the address depend on the address family of the socket. 

* `address_len` Either a null pointer, if address is a null pointer, or a pointer to a socklen_t object which on input specifies the length of the supplied sockaddr structure, and on output specifies the length of the stored address.

#### Returns
Upon successful completion, [recvfrom()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gafda65dd86aec2cce8aed51127c56833c) shall return the length of the message in bytes. If no messages are available to be received and the peer has performed an orderly shutdown, [recvfrom()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gafda65dd86aec2cce8aed51127c56833c) shall return 0. Otherwise, the function shall return -1 and set errno to indicate the error.

#### `public inline static ssize_t `[`recv`](#group__posix__sockets_1ga5dc001d9b417cee8cd3c599be661d99e)`(int socket,void * buffer,size_t length,int flags)` 

Receive a message from a connected socket.

Shall receive a message from a connection-mode or connectionless-mode socket. It is normally used with connected sockets because it does not permit the application to retrieve the source address of received data.

**See also**: [The Open Group Base Specification Issue 7, recv ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/recv.html)

#### Parameters
* `socket` Specifies the socket file descriptor. 

* `buffer` Points to a buffer where the message should be stored. 

* `length` Specifies the length in bytes of the buffer pointed to by the buffer argument. 

* `flags` Specifies the type of message reception. Support for values other than 0 is not implemented yet.

#### Returns
Upon successful completion, [recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga5dc001d9b417cee8cd3c599be661d99e) shall return the length of the message in bytes. If no messages are available to be received and the peer has performed an orderly shutdown, [recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga5dc001d9b417cee8cd3c599be661d99e) shall return 0. Otherwise, -1 shall be returned and errno set to indicate the error.

#### `public ssize_t `[`sendto`](#group__posix__sockets_1gafdc1acb83fda416a028cfd39ce8e6fe6)`(int socket,const void * buffer,size_t length,int flags,const struct `[`sockaddr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structsockaddr)` * address,`[`socklen_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bytes_8h_1a3f5f480bed01f54df564b99350f1d1bb)` address_len)` 

Send a message on a socket.

Shall send a message through a connection-mode or connectionless-mode socket. If the socket is a connectionless-mode socket, the message shall be sent to the address specified by `address` if no pre-specified peer address has been set. If a peer address has been pre-specified, either the message shall be sent to the address specified by `address` (overriding the pre-specified peer address), or the function shall return -1 and set errno to EISCONN.

**See also**: [The Open Group Base Specification Issue 7, sendto ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sendto.html)

#### Parameters
* `socket` Specifies the socket file descriptor. 

* `buffer` Points to the buffer containing the message to send. 

* `length` Specifies the length of the message in bytes. 

* `flags` Specifies the type of message reception. Support for values other than 0 is not implemented yet. 

* `address` Points to a sockaddr structure containing the destination address. The length and format of the address depend on the address family of the socket. 

* `address_len` Specifies the length of the sockaddr structure pointed to by the `address` argument.

The socket will implicitly be bound to the unspecified address and a random port, in case it is not already bound. Rationale: A client should not require to explicitly call [bind()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga55b3c1572b4e86ca0702ecdeb7e43997) to receive packets, but is expected to receive replies sent to the ephemeral port that was selected as a source port by the UDP implementation.

> Todo: For [Generic (GNRC) network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc) any [recvfrom](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gafda65dd86aec2cce8aed51127c56833c) call that is called to receive an expected response to this send command, must be called from the same thread. This is undesired behavior and will be fixed in upcoming versions of RIOT.

#### Returns
Upon successful completion, [send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga3ed135eb9019c8945718d03da23546c9) shall return the number of bytes sent. Otherwise, -1 shall be returned and errno set to indicate the error.

#### `public inline static ssize_t `[`send`](#group__posix__sockets_1ga3ed135eb9019c8945718d03da23546c9)`(int socket,const void * buffer,size_t length,int flags)` 

Send a message on a socket.

Shall initiate transmission of a message from the specified socket to its peer. The [send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga3ed135eb9019c8945718d03da23546c9) function shall send a message only when the socket is connected. If the socket is a connectionless-mode socket, the message shall be sent to the pre-specified peer address.

**See also**: [The Open Group Base Specification Issue 7, send ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/send.html)

#### Parameters
* `socket` Specifies the socket file descriptor. 

* `buffer` Points to the buffer containing the message to send. 

* `length` Specifies the length of the message in bytes. 

* `flags` Specifies the type of message reception. Support for values other than 0 is not implemented yet.

#### Returns
Upon successful completion, [send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga3ed135eb9019c8945718d03da23546c9) shall return the number of bytes sent. Otherwise, -1 shall be returned and errno set to indicate the error.

#### `public int `[`socket`](#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd)`(int domain,int type,int protocol)` 

Create an endpoint for communication.

Shall create an unbound socket in a communications domain, and return a file descriptor that can be used in later function calls that operate on sockets.

#### Parameters
* `domain` Specifies the communications domain in which a socket is to be created. Valid values are prefixed with ``AF_` and defined in [socket.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#socket_8h). 

* `type` Specifies the type of socket to be created. Valued values are prefixed with `SOCK_` and defined in [socket.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#socket_8h). 

* `protocol` Specifies a particular protocol to be used with the socket. Specifying a protocol of 0 causes [socket()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd) to use an unspecified default protocol appropriate for the requested socket type.

#### Returns
Upon successful completion, [socket()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1gaf4e0711877c45a41168ac677b0670ccd) shall return a non-negative integer, the socket file descriptor. Otherwise, a value of -1 shall be returned and errno set to indicate the error.

# struct `in_addr` 

IPv4 address structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`in_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga98b38134a62f24554da0ffcabde8062c)` `[`s_addr`](#structin__addr_1a3b6ef12385f913cc23a199205d9bf858) | an IPv4 address

## Members

#### `public `[`in_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga98b38134a62f24554da0ffcabde8062c)` `[`s_addr`](#structin__addr_1a3b6ef12385f913cc23a199205d9bf858) 

an IPv4 address

# struct `in6_addr` 

IPv6 address structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`s6_addr`](#structin6__addr_1aa1d600770ac35faa253a53aecd9b3786) | unsigned 8-bit integer array

## Members

#### `public uint8_t `[`s6_addr`](#structin6__addr_1aa1d600770ac35faa253a53aecd9b3786) 

unsigned 8-bit integer array

# struct `sockaddr_in` 

```
struct sockaddr_in
  : public struct
```  

IPv4 socket address type.

sockaddr

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`sin_family`](#structsockaddr__in_1a9a7d98bb8e18f4a06a021c32d6cc7117) | Protocol family, always AF_INET.
`public `[`in_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga979d51fa99f7145221b3ed1afff5b827)` `[`sin_port`](#structsockaddr__in_1ae89eef5c2b45ce0a177379755edecafa) | Port number.
`public struct `[`in_addr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structin__addr)` `[`sin_addr`](#structsockaddr__in_1a4ea5f2f1138e5c8597097db255a9ec6c) | IPv4 address.

## Members

#### `public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`sin_family`](#structsockaddr__in_1a9a7d98bb8e18f4a06a021c32d6cc7117) 

Protocol family, always AF_INET.

#### `public `[`in_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga979d51fa99f7145221b3ed1afff5b827)` `[`sin_port`](#structsockaddr__in_1ae89eef5c2b45ce0a177379755edecafa) 

Port number.

#### `public struct `[`in_addr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structin__addr)` `[`sin_addr`](#structsockaddr__in_1a4ea5f2f1138e5c8597097db255a9ec6c) 

IPv4 address.

# struct `sockaddr_in6` 

```
struct sockaddr_in6
  : public struct
```  

IPv6 socket address type.

sockaddr

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`sin6_family`](#structsockaddr__in6_1aefa41e43be9c615f8cfd6266c0ed1687) | Protocol family, always AF_INET6.
`public `[`in_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga979d51fa99f7145221b3ed1afff5b827)` `[`sin6_port`](#structsockaddr__in6_1a1a1aec2c794e1b8d2fd8705fc20c881b) | Port number.
`public uint32_t `[`sin6_flowinfo`](#structsockaddr__in6_1a4faf8571dc08f1ed214acfe06941954e) | IPv6 traffic class and flow information.
`public struct `[`in6_addr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structin6__addr)` `[`sin6_addr`](#structsockaddr__in6_1a219e7f3ecd6d7dcf8fc2465475be490f) | IPv6 address.
`public uint32_t `[`sin6_scope_id`](#structsockaddr__in6_1a90915190af45ba4f62e57ea662840f39) | Set of interfaces for a scope.

## Members

#### `public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`sin6_family`](#structsockaddr__in6_1aefa41e43be9c615f8cfd6266c0ed1687) 

Protocol family, always AF_INET6.

Member of struct [sockaddr_in6](#structsockaddr__in6) Protocol family, always AF_INET6

#### `public `[`in_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga979d51fa99f7145221b3ed1afff5b827)` `[`sin6_port`](#structsockaddr__in6_1a1a1aec2c794e1b8d2fd8705fc20c881b) 

Port number.

#### `public uint32_t `[`sin6_flowinfo`](#structsockaddr__in6_1a4faf8571dc08f1ed214acfe06941954e) 

IPv6 traffic class and flow information.

#### `public struct `[`in6_addr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structin6__addr)` `[`sin6_addr`](#structsockaddr__in6_1a219e7f3ecd6d7dcf8fc2465475be490f) 

IPv6 address.

#### `public uint32_t `[`sin6_scope_id`](#structsockaddr__in6_1a90915190af45ba4f62e57ea662840f39) 

Set of interfaces for a scope.

# struct `ipv6_mreq` 

IPv6 multicast request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`in6_addr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structin6__addr)` `[`ipv6mr_multiaddr`](#structipv6__mreq_1a11adc73ca35eb4c46bf443ecc15d4715) | an IPv6 multicast address
`public unsigned `[`ipv6mr_interface`](#structipv6__mreq_1a71a3b731f87a33794ffaeb15eae0661a) | interface index, leave 0 for default

## Members

#### `public struct `[`in6_addr`](./doc/starlight-docs/src/content/docs/apidoc/api-posix_sockets.md#structin6__addr)` `[`ipv6mr_multiaddr`](#structipv6__mreq_1a11adc73ca35eb4c46bf443ecc15d4715) 

an IPv6 multicast address

#### `public unsigned `[`ipv6mr_interface`](#structipv6__mreq_1a71a3b731f87a33794ffaeb15eae0661a) 

interface index, leave 0 for default

# struct `sockaddr` 

Used to define the socket address.

This structure is is forced to be aligned as `uint32_t`, as e.g. the IPv4 address is stored as `uint32_t`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`sa_family`](#structsockaddr_1ac6ef02e9a2e90a30218132ffd7b5a5c5) | Address family.
`public char `[`sa_data`](#structsockaddr_1a72f1a2f4a4b65144f7d9480cd406fd71) | Socket address (variable length data)

## Members

#### `public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`sa_family`](#structsockaddr_1ac6ef02e9a2e90a30218132ffd7b5a5c5) 

Address family.

#### `public char `[`sa_data`](#structsockaddr_1a72f1a2f4a4b65144f7d9480cd406fd71) 

Socket address (variable length data)

# struct `sockaddr_storage` 

```
struct sockaddr_storage
  : public struct
```  

Implementation based socket address table.

sockaddr

This structure is is forced to be aligned as `uint32_t`, as e.g. the IPv4 address is stored as `uint32_t`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`ss_family`](#structsockaddr__storage_1a0c5a3471dd6b0ae1c1b6e48de189fd8c) | Address family.
`public uint8_t `[`ss_data`](#structsockaddr__storage_1ae03de7c6c0bb9631e1b94b313e28856e) | Socket address.

## Members

#### `public `[`sa_family_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__posix__sockets_1ga27a82860cef19f4a53f68516e7b2ee0e)` `[`ss_family`](#structsockaddr__storage_1a0c5a3471dd6b0ae1c1b6e48de189fd8c) 

Address family.

#### `public uint8_t `[`ss_data`](#structsockaddr__storage_1ae03de7c6c0bb9631e1b94b313e28856e) 

Socket address.

