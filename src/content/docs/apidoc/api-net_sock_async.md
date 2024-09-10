---
title: api-net_sock_async.md
description: api-net_sock_async.md
---
# group `net_sock_async` 

Provides backend functionality for asynchronous sock access.

**This feature is experimental!**
 This API extension is still under development and should not be used in production yet.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`sock_async_flags_t`](#group__net__sock__async_1ga414feb0f54b75c39577e846858e1a5d6)            | Flag types to signify asynchronous sock events.
`public bool `[`sock_dtls_get_event_session`](#group__net__sock__async_1gab6187f6b23cf9aa056e941fb7326e951)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session)`            | Gets the asynchronous event session from sock object.
`public void `[`sock_dtls_set_cb`](#group__net__sock__async_1ga5f69e3f098899c17f16a2f6dd14acc03)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gacfa13d8e28daeb88e26acb43139ba8b9)` cb,void * cb_arg)`            | Sets the asynchronous event context from sock object.
`public void `[`sock_ip_set_cb`](#group__net__sock__async_1ga5f83f82dc362617727b47880ae45b29c)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`sock_ip_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga9574e29ab737ab3036c83cadc8cf3a3b)` cb,void * cb_arg)`            | Sets event callback for [sock_ip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga439f68352d1339555536747a64b5232e).
`public void `[`sock_tcp_set_cb`](#group__net__sock__async_1ga6c80a43bedbf47a72c5210fc9880af9d)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`sock_tcp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga8f34bbf7e66712311ea5b55b431d87cd)` cb,void * cb_arg)`            | Sets event callback for [sock_tcp_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga0144778bc074e291fcb0d43bd35c0179).
`public void `[`sock_tcp_queue_set_cb`](#group__net__sock__async_1ga502c824f450a114b106734d30adfd021)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`sock_tcp_queue_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0d5deaf01ef65664a65258f8c14141f3)` cb,void * cb_arg)`            | Sets event callback for [sock_tcp_queue_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga233763551e481f547f1cb07e7e31f981).
`public void `[`sock_udp_set_cb`](#group__net__sock__async_1ga079250f4bafc97b47c7b7daa4295f1b8)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`sock_udp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga2f5a726f8b92f5677cfc0aff15eadbf5)` cb,void * cb_arg)`            | Gets the asynchronous event context from sock object.
`public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_dtls_get_async_ctx`](#group__net__sock__async_1gaa19320b3f7300314870b27ccaef73855)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock)`            | Gets the asynchronous event context from sock object.
`public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_ip_get_async_ctx`](#group__net__sock__async_1gab75f5976ef3b2974119494dc648c461d)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock)`            | Gets the asynchronous event context from sock object.
`public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_tcp_get_async_ctx`](#group__net__sock__async_1gacf779bdbe7797175a6c1bfeaf670f3ed)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)`            | Gets the asynchronous event context from sock object.
`public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_tcp_queue_get_async_ctx`](#group__net__sock__async_1ga06805d53812a58d623d204e4b5973212)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue)`            | Gets the asynchronous event context from TCP listening queue.
`public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_udp_get_async_ctx`](#group__net__sock__async_1gab47a79761351b080ba0e4ae1764e670a)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock)`            | Gets the asynchronous event context from sock object.

## Members

#### `enum `[`sock_async_flags_t`](#group__net__sock__async_1ga414feb0f54b75c39577e846858e1a5d6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SOCK_ASYNC_CONN_RDY            | Connection ready event.
SOCK_ASYNC_CONN_FIN            | Connection finished event.
SOCK_ASYNC_CONN_RECV            | Listener received connection event.
SOCK_ASYNC_MSG_RECV            | Message received event.
SOCK_ASYNC_MSG_SENT            | Message sent event.
SOCK_ASYNC_PATH_PROP            | Path property changed event.

Flag types to signify asynchronous sock events.

Only applicable with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) defined.

#### `public bool `[`sock_dtls_get_event_session`](#group__net__sock__async_1gab6187f6b23cf9aa056e941fb7326e951)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` * session)` 

Gets the asynchronous event session from sock object.

`(sock != NULL) && (session != NULL)`

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) defined. Should only be called within a DTLS event and session is only available for the event types [SOCK_ASYNC_CONN_RDY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gga414feb0f54b75c39577e846858e1a5d6ac7739eaf318b948d21bbf476bddc66d5) and [SOCK_ASYNC_CONN_FIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gga414feb0f54b75c39577e846858e1a5d6ac9b2a40ff3a80b9780b3ba90308f4c34). For other event types use [sock_dtls_recv()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga893395d4c18709210d66d979a2f9ea69) to get the session.

#### Parameters
* `sock` The DTLS sock object of the current event. 

* `session` Session object of the current event.

#### Returns
true if the event session is available, false otherwise.

#### `public void `[`sock_dtls_set_cb`](#group__net__sock__async_1ga5f69e3f098899c17f16a2f6dd14acc03)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock,`[`sock_dtls_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gacfa13d8e28daeb88e26acb43139ba8b9)` cb,void * cb_arg)` 

Sets the asynchronous event context from sock object.

`(sock != NULL)`

Never handle the callback in the caller's context! You might block the operation of the network stack or the DTLS library with that.

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) defined.

#### Parameters
* `sock` A DTLS sock object. 

* `cb` An event callback. May be NULL to unset event callback. 

* `cb_arg` Argument to provide to `cb`. May be NULL.

#### `public void `[`sock_ip_set_cb`](#group__net__sock__async_1ga5f83f82dc362617727b47880ae45b29c)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock,`[`sock_ip_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga9574e29ab737ab3036c83cadc8cf3a3b)` cb,void * cb_arg)` 

Sets event callback for [sock_ip_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__ip_1ga439f68352d1339555536747a64b5232e).

`(sock != NULL)`

Never handle the callback in the caller's context! You might block the operation of the network stack with that.

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) defined.

#### Parameters
* `sock` A raw IPv4/IPv6 sock object. 

* `cb` An event callback. May be NULL to unset event callback. 

* `cb_arg` Argument to provide to `cb`. May be NULL.

#### `public void `[`sock_tcp_set_cb`](#group__net__sock__async_1ga6c80a43bedbf47a72c5210fc9880af9d)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock,`[`sock_tcp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga8f34bbf7e66712311ea5b55b431d87cd)` cb,void * cb_arg)` 

Sets event callback for [sock_tcp_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga0144778bc074e291fcb0d43bd35c0179).

`(sock != NULL)`

Never handle the callback in the caller's context! You might block the operation of the network stack with that.

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) defined.

#### Parameters
* `sock` A TCP sock object. 

* `cb` An event callback. May be NULL to unset event callback. 

* `cb_arg` Argument to provide to `cb`. May be NULL.

#### `public void `[`sock_tcp_queue_set_cb`](#group__net__sock__async_1ga502c824f450a114b106734d30adfd021)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue,`[`sock_tcp_queue_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0d5deaf01ef65664a65258f8c14141f3)` cb,void * cb_arg)` 

Sets event callback for [sock_tcp_queue_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__tcp_1ga233763551e481f547f1cb07e7e31f981).

`(sock != NULL)`

Never handle the callback in the caller's context! You might block the operation of the network stack with that.

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) defined.

#### Parameters
* `queue` A TCP listening queue. 

* `cb` An event callback. May be NULL to unset event callback. 

* `cb_arg` Argument to provide to `cb`. May be NULL.

#### `public void `[`sock_udp_set_cb`](#group__net__sock__async_1ga079250f4bafc97b47c7b7daa4295f1b8)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock,`[`sock_udp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga2f5a726f8b92f5677cfc0aff15eadbf5)` cb,void * cb_arg)` 

Gets the asynchronous event context from sock object.

`(sock != NULL)`

Never handle the callback in the caller's context! You might block the operation of the network stack with that.

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) defined.

#### Parameters
* `sock` A UDP sock object. 

* `cb` An event callback. May be NULL to unset event callback. 

* `cb_arg` Argument to provide to `cb`

#### `public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_dtls_get_async_ctx`](#group__net__sock__async_1gaa19320b3f7300314870b27ccaef73855)`(`[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * sock)` 

Gets the asynchronous event context from sock object.

`(sock != NULL)`

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) and [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1) defined.

**See also**: [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1)

#### Parameters
* `sock` A DTLS sock object.

#### Returns
The asynchronous event context

#### `public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_ip_get_async_ctx`](#group__net__sock__async_1gab75f5976ef3b2974119494dc648c461d)`(`[`sock_ip_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga439f68352d1339555536747a64b5232e)` * sock)` 

Gets the asynchronous event context from sock object.

`(sock != NULL)`

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) and [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1) defined.

**See also**: [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1)

#### Parameters
* `sock` A raw IPv4/IPv6 sock object.

#### Returns
The asynchronous event context

#### `public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_tcp_get_async_ctx`](#group__net__sock__async_1gacf779bdbe7797175a6c1bfeaf670f3ed)`(`[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` * sock)` 

Gets the asynchronous event context from sock object.

`(sock != NULL)`

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) and [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1) defined.

**See also**: [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1)

#### Parameters
* `sock` A TCP sock object.

#### Returns
The asynchronous event context

#### `public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_tcp_queue_get_async_ctx`](#group__net__sock__async_1ga06805d53812a58d623d204e4b5973212)`(`[`sock_tcp_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga233763551e481f547f1cb07e7e31f981)` * queue)` 

Gets the asynchronous event context from TCP listening queue.

`(queue != NULL)`

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) and [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1) defined.

**See also**: [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1)

#### Parameters
* `queue` A TCP listening queue.

#### Returns
The asynchronous event context

#### `public `[`sock_async_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_sock_async_event.md#structsock__async__ctx__t)` * `[`sock_udp_get_async_ctx`](#group__net__sock__async_1gab47a79761351b080ba0e4ae1764e670a)`(`[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * sock)` 

Gets the asynchronous event context from sock object.

`(sock != NULL)`

Only available with [SOCK_HAS_ASYNC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1ga8058dff4827f6cd91da568dbb58cc44e) and [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1) defined.

**See also**: [SOCK_HAS_ASYNC_CTX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock_1gabbe1feb953e6f073f1b557920bac43f1)

#### Parameters
* `sock` A UDP sock object.

#### Returns
The asynchronous event context

