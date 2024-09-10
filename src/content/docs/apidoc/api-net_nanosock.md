---
title: api-net_nanosock.md
description: api-net_nanosock.md
---
# group `net_nanosock` 

Synchronous sock based messaging with nanocoap.

nanocoap sock uses the nanocoap CoAP library to provide a synchronous interface to RIOT's sock networking API to read and write CoAP messages. For a server, nanocoap sock accepts a list of resource paths with callbacks for writing the response. For a client, nanocoap sock provides a function to send a request and waits for the server response. nanocoap sock uses nanocoap's Buffer API to write message options.

Server OperationSee the nanocoap_server example, which is built on the `[nanocoap_server()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1gaa8dc99f3f6c9b49ce8a4da7f15260766)` function. A server must define CoAP resources for which it responds.

Each [coap_resource_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t) is added to the XFA with [NANOCOAP_RESOURCE(name)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf3b7751818e477148bf210c79683ae0c) followed by the declaration of the CoAP resource, e.g.:

```cpp
[NANOCOAP_RESOURCE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf3b7751818e477148bf210c79683ae0c)(board) {
  .path = "/board", .methods = COAP_GET, .handler = _board_handler,
};
```

nanocoap itself provides the COAP_WELL_KNOWN_CORE_DEFAULT_HANDLER entry for `/.well-known/core`.

To use the CoAP resource XFA, enable the `nanocoap_resources` module.

Handler functionsFor each resource, you must implement a [coap_handler_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga8b44fbd36baf301f3bf531d1fcfadf9f) handler function. nanocoap provides functions to help implement the handler. If the handler is called via [nanocoap_server()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1gaa8dc99f3f6c9b49ce8a4da7f15260766), the response buffer provided to the handler reuses the buffer for the request. So, your handler must read the request thoroughly before writing the response.

To read the request, use the functions in the *Header* and *Options Read* sections of the [nanocoap](group__net__nanocoap.html) documentation. If the pkt *payload_len* attribute is a positive value, start to read it at the *payload* pointer attribute.

If a response does not require specific CoAP options, use [coap_reply_simple()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga82578bcdaeadcb10bdc3ecc52b0b6888). If there is a payload, it writes a Content-Format option with the provided value.

For a response with additional CoAP options, start by calling [coap_build_reply()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga38b2f76446070e80183a13e6b33d7cff). Then use the Buffer API to write the rest of the response. See the instructions in the section *Write Options and Payload* below.

Client OperationFollow the instructions in the section *Write Options and Payload* below.

To send the message and await the response, see [nanocoap_sock_request()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1ga829870b2ff3a51a4a908f86ad98303c2) as well as [nanocoap_sock_get()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1gab66959ad47fd44afa1ebdf9d44d0b394), which additionally copies the response payload to a user supplied buffer. Finally, read the response as described above in the server *Handler functions* section for reading a request.

Write Options and PayloadFor both server responses and client requests, CoAP uses an Option mechanism to encode message metadata that is not required for each message. For example, the resource URI path is required only for a request, and is encoded as the Uri-Path option.

nanocoap sock uses the nanocoap Buffer API for options. The caller must provide the last option number written as well as the buffer position. The caller is primarily responsible for tracking and managing the space remaining in the buffer.

Before starting, ensure the CoAP header has been initialized with [coap_build_hdr()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf0291091ff11f20539fd6835bef393fc). For a response, [coap_build_reply()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga38b2f76446070e80183a13e6b33d7cff) includes a call to [coap_build_hdr()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf0291091ff11f20539fd6835bef393fc). Use the returned length to track the next position in the buffer to write and remaining length.

Next, use the functions in the *Options Write Buffer API* section of [nanocoap](group__net__nanocoap.html) to write each option. These functions require the position in the buffer to start writing, and return the number of bytes written. Options *must* be written in order by option number (see "CoAP option numbers" in [CoAP defines](group__net__coap.html)).

You must ensure the buffer has enough space remaining to write each option. The API does not verify the safety of writing an option.

If there is a payload, append a payload marker (0xFF). Then write the payload to within the maximum length remaining in the buffer.

Create a Block-wise Response (Block2)Block-wise is a CoAP extension (RFC 7959) to divide a large payload across multiple physical packets. This section describes how to write a block-wise payload for a response, and is known as Block2. (Block1 is for a block-wise payload in a request.) See _riot_board_handler() in the nanocoap_server example for an example handler implementation.

Start with [coap_block2_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga847153f464dc80f7f015d3ccbceb71c4) to read the client request and initialize a coap_slicer_t struct with the size and location for this slice of the overall payload. Then write the block2 option in the response with [coap_opt_put_block2()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga5bfad86a61eb99c3727ae624c6e2594f). The option includes an indicator ("more") that a slice completes the overall payload transfer. You may not know the value for *more* at this point, but you must initialize the space in the packet for the option before writing the payload. The option is rewritten later.

Next, use the coap_blockwise_put_xxx() functions to write the payload content. These functions use the [coap_block_slicer_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__block__slicer__t) to enable or disable actually writing the content, depending on the current position within the overall payload transfer.

Finally, use the convenience function [coap_block2_build_reply()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga6ae8281567032734a24ef7739f65c2b4), which finalizes the packet and calls [coap_block2_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga5d839eb2b07582ff50afb988d2e6e8c1) internally to update the block2 option.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_NANOCOAP_SOCK_DTLS_TAG`](#group__net__nanosock_1ga1e6615cea509ba15c236888dc1d080a3)            | Credman tag used for NanoCoAP Tag together with the credential type (PSK) needs to be unique.
`define `[`CONFIG_NANOCOAP_SERVER_BUF_SIZE`](#group__net__nanosock_1ga1288882055b3987361fa829c8fc5a774)            | CoAP server work buf size Used both for RX and TX, needs to hold payload block + header.
`define `[`CONFIG_NANOCOAP_SERVER_STACK_SIZE`](#group__net__nanosock_1ga293861b7a3fe8f22fa889dc1760362bb)            | CoAP server thread stack size.
`define `[`CONFIG_NANOCOAP_SOCK_BLOCK_TOKEN`](#group__net__nanosock_1gaedbd07b2745e261ec745b46a6549c34d)            | Include a random token with block-wise transfers.
`enum `[`nanocoap_socket_type_t`](#group__net__nanosock_1gae3e4fc820564121c86199921270c0275)            | NanoCoAP socket types.
`public void `[`nanocoap_server_prepare_separate`](#group__net__nanosock_1ga216bac65275f63cab23c846306c605a0)`(`[`nanocoap_server_response_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__server__response__ctx__t)` * ctx,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * req)`            | Prepare the context for a separate response.
`public int `[`nanocoap_server_send_separate`](#group__net__nanosock_1gaabc7cae6d9a18f2a2360d592542d67a7)`(const `[`nanocoap_server_response_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__server__response__ctx__t)` * ctx,unsigned code,unsigned type,const void * payload,size_t len)`            | Send a separate response to a CoAP request.
`public inline static uint16_t `[`nanocoap_sock_next_msg_id`](#group__net__nanosock_1gaa327f4e1e000925a6e1d06b5009d05cf)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock)`            | Get next consecutive message ID for use when building a new CoAP request.
`public int `[`nanocoap_server`](#group__net__nanosock_1gaa8dc99f3f6c9b49ce8a4da7f15260766)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,uint8_t * buf,size_t bufsize)`            | Start a nanocoap server instance.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`nanocoap_server_start`](#group__net__nanosock_1ga67689e162bf20649cca78957f4869dba)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local)`            | Create and start the nanoCoAP server thread.
`public inline static int `[`nanocoap_sock_connect`](#group__net__nanosock_1gacec46e67451d121c6aa3c188b7734363)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Create a CoAP client socket.
`public int `[`nanocoap_sock_dtls_connect`](#group__net__nanosock_1ga9027d8c301d6587c4b82e7332ae46b55)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)`            | Create a DTLS secured CoAP client socket.
`public int `[`nanocoap_sock_url_connect`](#group__net__nanosock_1ga282ddfd4238b746dd20d4cfe4df4c244)`(const char * url,`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock)`            | Create a CoAP client socket by URL.
`public inline static void `[`nanocoap_sock_close`](#group__net__nanosock_1gae9376e608769729b1668ccc349447082)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock)`            | Close a CoAP client socket.
`public ssize_t `[`nanocoap_sock_get`](#group__net__nanosock_1gab66959ad47fd44afa1ebdf9d44d0b394)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,void * buf,size_t len)`            | Simple synchronous CoAP (confirmable) GET.
`public ssize_t `[`nanocoap_sock_put`](#group__net__nanosock_1ga25e146569f51b488e140eac77710d67f)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)`            | Simple synchronous CoAP (confirmable) PUT.
`public ssize_t `[`nanocoap_sock_put_non`](#group__net__nanosock_1ga0ce8f6d164e274035ec452cadfa6f014)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)`            | Simple non-confirmable PUT.
`public ssize_t `[`nanocoap_sock_put_url`](#group__net__nanosock_1gacb63bde357408c45b01de0d9995aa5df)`(const char * url,const void * request,size_t len,void * response,size_t len_max)`            | Simple synchronous CoAP (confirmable) PUT to URL.
`public ssize_t `[`nanocoap_sock_post`](#group__net__nanosock_1gaa3cc19122ffcf70a4a59653118808e7a)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)`            | Simple synchronous CoAP (confirmable) POST.
`public ssize_t `[`nanocoap_sock_post_non`](#group__net__nanosock_1gaab1cde1ee8660b189691bc7ea76e5d8c)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)`            | Simple non-confirmable POST.
`public ssize_t `[`nanocoap_sock_post_url`](#group__net__nanosock_1ga3512df1cdfdf348901e4fa92508305e2)`(const char * url,const void * request,size_t len,void * response,size_t len_max)`            | Simple synchronous CoAP (confirmable) POST to URL.
`public ssize_t `[`nanocoap_sock_fetch`](#group__net__nanosock_1ga88034d74b68f56ff5c84514cba774ead)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)`            | Simple synchronous CoAP (confirmable) FETCH ([RFC 8132](https://datatracker.ietf.org/doc/html/rfc8132))
`public ssize_t `[`nanocoap_sock_fetch_non`](#group__net__nanosock_1ga94a4c60055d1958fe3ecb3f2ff3b5056)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)`            | Simple non-confirmable FETCH ([RFC 8132](https://datatracker.ietf.org/doc/html/rfc8132))
`public ssize_t `[`nanocoap_sock_fetch_url`](#group__net__nanosock_1ga9ea49916951bb8110cc65d35a4ffe2d1)`(const char * url,const void * request,size_t len,void * response,size_t len_max)`            | Simple synchronous CoAP (confirmable) FETCH to URL ([RFC 8132](https://datatracker.ietf.org/doc/html/rfc8132))
`public ssize_t `[`nanocoap_sock_delete`](#group__net__nanosock_1ga18c380fe1dfea851fed1bd068684d094)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path)`            | Simple synchronous CoAP (confirmable) DELETE.
`public ssize_t `[`nanocoap_sock_delete_url`](#group__net__nanosock_1ga370193392b90544d127a797db8c5c2b1)`(const char * url)`            | Simple synchronous CoAP (confirmable) DELETE for URL.
`public int `[`nanocoap_sock_get_blockwise`](#group__net__nanosock_1gad565b9d312a92f25384a76cf0805b6d9)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,`[`coap_blockwise_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac1c99e4c6b4acff707d856ba0b18d590)` callback,void * arg)`            | Performs a blockwise coap get request on a socket.
`public int `[`nanocoap_sock_get_slice`](#group__net__nanosock_1ga402626952d9a947953122441c4245b80)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,size_t offset,void * dst,size_t len)`            | Performs a blockwise coap get request to the specified url, store the response in a buffer.
`public int `[`nanocoap_get_blockwise_url`](#group__net__nanosock_1gabcffa1a45484915af70db2a5be4990a8)`(const char * url,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,`[`coap_blockwise_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac1c99e4c6b4acff707d856ba0b18d590)` callback,void * arg)`            | Performs a blockwise coap get request to the specified url.
`public ssize_t `[`nanocoap_get_blockwise_url_to_buf`](#group__net__nanosock_1gab75c570cd55959d508767fd7f556eaf6)`(const char * url,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,void * buf,size_t len)`            | Performs a blockwise coap get request to the specified url, store the response in a buffer.
`public ssize_t `[`nanocoap_get_blockwise_to_buf`](#group__net__nanosock_1gaee41fbae256f3f0d28a825228a4da56d)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,void * buf,size_t len)`            | Performs a blockwise CoAP GET request, store the response in a buffer.
`public ssize_t `[`nanocoap_sock_request`](#group__net__nanosock_1ga829870b2ff3a51a4a908f86ad98303c2)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,size_t len)`            | Simple synchronous CoAP request.
`public ssize_t `[`nanocoap_sock_request_cb`](#group__net__nanosock_1gab306582328424179525af3296bd3618d)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,`[`coap_request_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac302c0f9ec8053b64b9b46a4dbee9092)` cb,void * arg)`            | Simple synchronous CoAP request with callback.
`public ssize_t `[`nanocoap_request`](#group__net__nanosock_1ga48c6a342b8f4c32719eb6602756783d8)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,size_t len)`            | Simple synchronous CoAP request.
`public inline static int `[`nanocoap_block_request_connect_url`](#group__net__nanosock_1gab53f88387e3ed79d8288ac7beaf7873a)`(`[`coap_block_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structcoap__block__request__t)` * ctx,`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * url,`[`coap_method_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1gaf99712dec26d13b1649cc55043580645)` method,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize)`            | Initialize block request context by URL and connect a socket.
`public int `[`nanocoap_sock_block_request`](#group__net__nanosock_1gaa9282335cdd7d0bb39bcd4d48fab1517)`(`[`coap_block_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structcoap__block__request__t)` * ctx,const void * data,size_t len,bool more,`[`coap_request_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac302c0f9ec8053b64b9b46a4dbee9092)` cb,void * arg)`            | Do a block-wise request, send a single block.
`struct `[`nanocoap_sock_t`](#structnanocoap__sock__t) | NanoCoAP socket struct.
`struct `[`coap_block_request_t`](#structcoap__block__request__t) | Blockwise request helper struct.
`struct `[`nanocoap_server_response_ctx_t`](#structnanocoap__server__response__ctx__t) | Context from CoAP request for separate response.

## Members

#### `define `[`CONFIG_NANOCOAP_SOCK_DTLS_TAG`](#group__net__nanosock_1ga1e6615cea509ba15c236888dc1d080a3) 

Credman tag used for NanoCoAP Tag together with the credential type (PSK) needs to be unique.

#### `define `[`CONFIG_NANOCOAP_SERVER_BUF_SIZE`](#group__net__nanosock_1ga1288882055b3987361fa829c8fc5a774) 

CoAP server work buf size Used both for RX and TX, needs to hold payload block + header.

#### `define `[`CONFIG_NANOCOAP_SERVER_STACK_SIZE`](#group__net__nanosock_1ga293861b7a3fe8f22fa889dc1760362bb) 

CoAP server thread stack size.

#### `define `[`CONFIG_NANOCOAP_SOCK_BLOCK_TOKEN`](#group__net__nanosock_1gaedbd07b2745e261ec745b46a6549c34d) 

Include a random token with block-wise transfers.

This is a workaround for buggy CoPA implementations (e.g. go-coap) that expect to identify block-wise transfers based on the token.

See [https://github.com/plgd-dev/go-coap/issues/512](https://github.com/plgd-dev/go-coap/issues/512)

#### `enum `[`nanocoap_socket_type_t`](#group__net__nanosock_1gae3e4fc820564121c86199921270c0275) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
COAP_SOCKET_TYPE_UDP            | transport is plain UDP
COAP_SOCKET_TYPE_DTLS            | transport is DTLS

NanoCoAP socket types.

#### `public void `[`nanocoap_server_prepare_separate`](#group__net__nanosock_1ga216bac65275f63cab23c846306c605a0)`(`[`nanocoap_server_response_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__server__response__ctx__t)` * ctx,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * req)` 

Prepare the context for a separate response.

This function serializes the CoAP request information so that a separate response can be generated outside the CoAP handler.

The CoAP handler should then respond with an empty ACK by calling [coap_build_empty_ack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga69b46335b2b67c5245e6be1777134bf8)

#### Parameters
* `ctx` Context information for separate response 

* `pkt` CoAP packet to which the response will be generated 

* `req` Context of the CoAP request

#### `public int `[`nanocoap_server_send_separate`](#group__net__nanosock_1gaabc7cae6d9a18f2a2360d592542d67a7)`(const `[`nanocoap_server_response_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__server__response__ctx__t)` * ctx,unsigned code,unsigned type,const void * payload,size_t len)` 

Send a separate response to a CoAP request.

This sends a response to a CoAP request outside the CoAP handler

[nanocoap_server_prepare_separate](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1ga216bac65275f63cab23c846306c605a0) has been called on `ctx` inside the CoAP handler

#### Parameters
* `ctx` Context information for the CoAP response 

* `code` CoAP response code 

* `type` Response type, may be `COAP_TYPE_NON`

* `payload` Response payload 

* `len` Payload length

#### Returns
0 on success negative error (see [sock_udp_sendv_aux](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1ga336d4369bc2c7e77423f7d1e67161749))

#### `public inline static uint16_t `[`nanocoap_sock_next_msg_id`](#group__net__nanosock_1gaa327f4e1e000925a6e1d06b5009d05cf)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock)` 

Get next consecutive message ID for use when building a new CoAP request.

#### Parameters
* `sock` CoAP socket on which the ID is used

#### Returns
A new message ID that can be used for a request or response.

#### `public int `[`nanocoap_server`](#group__net__nanosock_1gaa8dc99f3f6c9b49ce8a4da7f15260766)`(`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,uint8_t * buf,size_t bufsize)` 

Start a nanocoap server instance.

This function only returns if there's an error binding to `local`, or if receiving of UDP packets fails.

#### Parameters
* `local` local UDP endpoint to bind to 

* `buf` input buffer to use 

* `bufsize` size of `buf`

#### Returns
-1 on error

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`nanocoap_server_start`](#group__net__nanosock_1ga67689e162bf20649cca78957f4869dba)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local)` 

Create and start the nanoCoAP server thread.

To automatically start the nanoCoAP server on startup, select the `nanocoap_server_auto_init` module.

#### Parameters
* `local` UDP endpoint to bind to

#### Returns
pid of the server thread

#### `public inline static int `[`nanocoap_sock_connect`](#group__net__nanosock_1gacec46e67451d121c6aa3c188b7734363)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Create a CoAP client socket.

#### Parameters
* `sock` CoAP UDP socket 

* `local` Local UDP endpoint, may be NULL 

* `remote` remote UDP endpoint

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`nanocoap_sock_dtls_connect`](#group__net__nanosock_1ga9027d8c301d6587c4b82e7332ae46b55)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)` 

Create a DTLS secured CoAP client socket.

#### Parameters
* `sock` CoAP UDP socket 

* `local` Local UDP endpoint, may be NULL 

* `remote` remote UDP endpoint 

* `tag` Tag of the PSK credential to use Has to be added with [credman_add](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga541badb0086366236a741db3f50eb3dc)

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`nanocoap_sock_url_connect`](#group__net__nanosock_1ga282ddfd4238b746dd20d4cfe4df4c244)`(const char * url,`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock)` 

Create a CoAP client socket by URL.

#### Parameters
* `url` URL with server information to connect to 

* `sock` CoAP UDP socket

#### Returns
0 on success 

#### Returns
<0 on error

#### `public inline static void `[`nanocoap_sock_close`](#group__net__nanosock_1gae9376e608769729b1668ccc349447082)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock)` 

Close a CoAP client socket.

#### Parameters
* `sock` CoAP UDP socket

#### `public ssize_t `[`nanocoap_sock_get`](#group__net__nanosock_1gab66959ad47fd44afa1ebdf9d44d0b394)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,void * buf,size_t len)` 

Simple synchronous CoAP (confirmable) GET.

#### Parameters
* `sock` socket to use for the request 

* `path` remote path and query 

* `buf` buffer to write response to 

* `len` length of `buffer`

#### Returns
length of response payload on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_put`](#group__net__nanosock_1ga25e146569f51b488e140eac77710d67f)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)` 

Simple synchronous CoAP (confirmable) PUT.

#### Parameters
* `sock` socket to use for the request 

* `path` remote path and query 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_put_non`](#group__net__nanosock_1ga0ce8f6d164e274035ec452cadfa6f014)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)` 

Simple non-confirmable PUT.

#### Parameters
* `sock` socket to use for the request 

* `path` remote path and query 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
0 if the request was sent and no response buffer was provided, independently of success (because no response is requested in that case) 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_put_url`](#group__net__nanosock_1gacb63bde357408c45b01de0d9995aa5df)`(const char * url,const void * request,size_t len,void * response,size_t len_max)` 

Simple synchronous CoAP (confirmable) PUT to URL.

#### Parameters
* `url` Absolute URL pointer to source path 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_post`](#group__net__nanosock_1gaa3cc19122ffcf70a4a59653118808e7a)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)` 

Simple synchronous CoAP (confirmable) POST.

#### Parameters
* `sock` socket to use for the request 

* `path` remote path and query 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_post_non`](#group__net__nanosock_1gaab1cde1ee8660b189691bc7ea76e5d8c)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)` 

Simple non-confirmable POST.

#### Parameters
* `sock` socket to use for the request 

* `path` remote path and query 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
0 if the request was sent and no response buffer was provided, independently of success (because no response is requested in that case) 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_post_url`](#group__net__nanosock_1ga3512df1cdfdf348901e4fa92508305e2)`(const char * url,const void * request,size_t len,void * response,size_t len_max)` 

Simple synchronous CoAP (confirmable) POST to URL.

#### Parameters
* `url` Absolute URL pointer to source path 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_fetch`](#group__net__nanosock_1ga88034d74b68f56ff5c84514cba774ead)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)` 

Simple synchronous CoAP (confirmable) FETCH ([RFC 8132](https://datatracker.ietf.org/doc/html/rfc8132))

#### Parameters
* `sock` socket to use for the request 

* `path` remote path and query 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_fetch_non`](#group__net__nanosock_1ga94a4c60055d1958fe3ecb3f2ff3b5056)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,const void * request,size_t len,void * response,size_t len_max)` 

Simple non-confirmable FETCH ([RFC 8132](https://datatracker.ietf.org/doc/html/rfc8132))

#### Parameters
* `sock` socket to use for the request 

* `path` remote path and query 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
0 if the request was sent and no response buffer was provided, independently of success (because no response is requested in that case) 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_fetch_url`](#group__net__nanosock_1ga9ea49916951bb8110cc65d35a4ffe2d1)`(const char * url,const void * request,size_t len,void * response,size_t len_max)` 

Simple synchronous CoAP (confirmable) FETCH to URL ([RFC 8132](https://datatracker.ietf.org/doc/html/rfc8132))

#### Parameters
* `url` Absolute URL pointer to source path 

* `request` buffer containing the payload 

* `len` length of the payload to send 

* `response` buffer for the response, may be NULL 

* `len_max` length of `response`

#### Returns
length of response payload on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_delete`](#group__net__nanosock_1ga18c380fe1dfea851fed1bd068684d094)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path)` 

Simple synchronous CoAP (confirmable) DELETE.

#### Parameters
* `sock` socket to use for the request 

* `path` remote path (with query) to delete

#### Returns
0 on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_delete_url`](#group__net__nanosock_1ga370193392b90544d127a797db8c5c2b1)`(const char * url)` 

Simple synchronous CoAP (confirmable) DELETE for URL.

#### Parameters
* `url` URL of the resource that should be deleted

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`nanocoap_sock_get_blockwise`](#group__net__nanosock_1gad565b9d312a92f25384a76cf0805b6d9)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,`[`coap_blockwise_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac1c99e4c6b4acff707d856ba0b18d590)` callback,void * arg)` 

Performs a blockwise coap get request on a socket.

This function will fetch the content of the specified resource path via block-wise-transfer. A coap_blockwise_cb_t will be called on each received block.

#### Parameters
* `sock` socket to use for the request 

* `path` pointer to source path 

* `blksize` sender suggested SZX for the COAP block request 

* `callback` callback to be executed on each received block 

* `arg` optional function arguments

#### Returns
-1 if failed to fetch the url content 

#### Returns
0 on success

#### `public int `[`nanocoap_sock_get_slice`](#group__net__nanosock_1ga402626952d9a947953122441c4245b80)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,size_t offset,void * dst,size_t len)` 

Performs a blockwise coap get request to the specified url, store the response in a buffer.

#### Parameters
* `sock` socket to use for the request 

* `path` Absolute URL pointer to source path 

* `blksize` sender suggested SZX for the COAP block request 

* `offset` Offset in bytes from the start of the resource 

* `dst` Target buffer 

* `len` Target buffer length

#### Returns
<0 on error 

#### Returns
-EINVAL if an invalid url is provided 

#### Returns
size of the response payload on success

#### `public int `[`nanocoap_get_blockwise_url`](#group__net__nanosock_1gabcffa1a45484915af70db2a5be4990a8)`(const char * url,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,`[`coap_blockwise_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac1c99e4c6b4acff707d856ba0b18d590)` callback,void * arg)` 

Performs a blockwise coap get request to the specified url.

This function will fetch the content of the specified resource path via block-wise-transfer. A coap_blockwise_cb_t will be called on each received block.

#### Parameters
* `url` Absolute URL pointer to source path (i.e. not containing a fragment identifier) 

* `blksize` sender suggested SZX for the COAP block request 

* `callback` callback to be executed on each received block 

* `arg` optional function arguments

#### Returns
-EINVAL if an invalid url is provided 

#### Returns
-1 if failed to fetch the url content 

#### Returns
0 on success

#### `public ssize_t `[`nanocoap_get_blockwise_url_to_buf`](#group__net__nanosock_1gab75c570cd55959d508767fd7f556eaf6)`(const char * url,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,void * buf,size_t len)` 

Performs a blockwise coap get request to the specified url, store the response in a buffer.

This function will fetch the content of the specified resource path via block-wise-transfer. The blocks will be re-assembled into `buf`

#### Parameters
* `url` Absolute URL pointer to source path (i.e. not containing a fragment identifier) 

* `blksize` sender suggested SZX for the COAP block request 

* `buf` Target buffer 

* `len` Target buffer length

#### Returns
<0 on error 

#### Returns
-EINVAL if an invalid url is provided 

#### Returns
-ENOBUFS if the provided buffer was too small 

#### Returns
size of the response payload on success

#### `public ssize_t `[`nanocoap_get_blockwise_to_buf`](#group__net__nanosock_1gaee41fbae256f3f0d28a825228a4da56d)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * path,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize,void * buf,size_t len)` 

Performs a blockwise CoAP GET request, store the response in a buffer.

This function will fetch the content of the specified resource path via block-wise-transfer. The blocks will be re-assembled into `buf`

#### Parameters
* `sock` socket to use for the request 

* `path` pointer to source path 

* `blksize` sender suggested SZX for the COAP block request 

* `buf` Target buffer 

* `len` Target buffer length

#### Returns
<0 on error 

#### Returns
-EINVAL if an invalid url is provided 

#### Returns
-ENOBUFS if the provided buffer was too small 

#### Returns
size of the response payload on success

#### `public ssize_t `[`nanocoap_sock_request`](#group__net__nanosock_1ga829870b2ff3a51a4a908f86ad98303c2)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,size_t len)` 

Simple synchronous CoAP request.

#### Parameters
* `sock` socket to use for the request 

* `pkt` Packet struct containing the request. Is reused for the response 

* `len` Total length of the buffer associated with the request

#### Returns
length of response on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_sock_request_cb`](#group__net__nanosock_1gab306582328424179525af3296bd3618d)`(`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,`[`coap_request_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac302c0f9ec8053b64b9b46a4dbee9092)` cb,void * arg)` 

Simple synchronous CoAP request with callback.

The response will be handled by a callback, which avoids copying the
     response packet out of the network stack internal buffer.

#### Parameters
* `sock` socket to use for the request 

* `pkt` Packet struct containing the request. Is reused for the response 

* `cb` Callback executed for response packet 

* `arg` Optional callback argumnent

#### Returns
length of response on success 

#### Returns
<0 on error

#### `public ssize_t `[`nanocoap_request`](#group__net__nanosock_1ga48c6a342b8f4c32719eb6602756783d8)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,size_t len)` 

Simple synchronous CoAP request.

#### Parameters
* `pkt` Packet struct containing the request. Is reused for the response 

* `local` Local UDP endpoint, may be NULL 

* `remote` remote UDP endpoint 

* `len` Total length of the buffer associated with the request

#### Returns
length of response on success 

#### Returns
<0 on error

#### `public inline static int `[`nanocoap_block_request_connect_url`](#group__net__nanosock_1gab53f88387e3ed79d8288ac7beaf7873a)`(`[`coap_block_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structcoap__block__request__t)` * ctx,`[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * sock,const char * url,`[`coap_method_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1gaf99712dec26d13b1649cc55043580645)` method,`[`coap_blksize_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1ga0fcf4cd975c851efc10c4388ee6236e9)` blksize)` 

Initialize block request context by URL and connect a socket.

#### Parameters
* `ctx` The block request context to initialize 

* `sock` Socket to initialize and use for the request 

* `url` The request URL 

* `method` Request method (`COAP_METHOD_{GET|PUT|POST|FETCH}`) 

* `blksize` Request blocksize exponent

#### Parameters
* `0` Success 

* `<0` Error (see [nanocoap_sock_url_connect](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1ga282ddfd4238b746dd20d4cfe4df4c244) for details)

#### `public int `[`nanocoap_sock_block_request`](#group__net__nanosock_1gaa9282335cdd7d0bb39bcd4d48fab1517)`(`[`coap_block_request_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structcoap__block__request__t)` * ctx,const void * data,size_t len,bool more,`[`coap_request_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gac302c0f9ec8053b64b9b46a4dbee9092)` cb,void * arg)` 

Do a block-wise request, send a single block.

This method is expected to be called in a loop until all
     payload blocks have been transferred.
`ctx` was initialized with [nanocoap_block_request_connect_url](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1gab53f88387e3ed79d8288ac7beaf7873a) or manually.

#### Parameters
* `ctx` blockwise request context 

* `data` payload to send 

* `len` payload length 

* `more` more blocks after this one (will be set automatically if `len` > block size) 

* `cb` callback for response 

* `arg` callback context

#### Returns
Number of payload bytes written on success Negative error on failure

# struct `nanocoap_sock_t` 

NanoCoAP socket struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` `[`udp`](#structnanocoap__sock__t_1a8984cbdd1dd5867852b30bcb99b4db50) | UDP socket
`public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` `[`dtls`](#structnanocoap__sock__t_1a7dcf43408ce39a1c4609d2976e3d7393) | DTLS socket
`public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` `[`dtls_session`](#structnanocoap__sock__t_1a5f86ce087787763588a72d0be3f295df) | Session object for the stored socket.
`public `[`nanocoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1gae3e4fc820564121c86199921270c0275)` `[`type`](#structnanocoap__sock__t_1a9f022fa1dd974871f86cb332418411ef) | Socket type (UDP, DTLS)
`public uint16_t `[`msg_id`](#structnanocoap__sock__t_1a45f9a264e077cc4e78da35cf1085f67e) | next CoAP message ID

## Members

#### `public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` `[`udp`](#structnanocoap__sock__t_1a8984cbdd1dd5867852b30bcb99b4db50) 

UDP socket

#### `public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` `[`dtls`](#structnanocoap__sock__t_1a7dcf43408ce39a1c4609d2976e3d7393) 

DTLS socket

#### `public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` `[`dtls_session`](#structnanocoap__sock__t_1a5f86ce087787763588a72d0be3f295df) 

Session object for the stored socket.

Used for exchanging a session between functions.

#### `public `[`nanocoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanosock_1gae3e4fc820564121c86199921270c0275)` `[`type`](#structnanocoap__sock__t_1a9f022fa1dd974871f86cb332418411ef) 

Socket type (UDP, DTLS)

#### `public uint16_t `[`msg_id`](#structnanocoap__sock__t_1a45f9a264e077cc4e78da35cf1085f67e) 

next CoAP message ID

# struct `coap_block_request_t` 

Blockwise request helper struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * `[`sock`](#structcoap__block__request__t_1a4193eba74955097c2812f0c6a924d8bb) | socket used for the request
`public const char * `[`path`](#structcoap__block__request__t_1a8ec96bc1b7020b9212ad0a25ba5eff0c) | path on the server
`public uint32_t `[`blknum`](#structcoap__block__request__t_1a52453bcad400a3914a4f17f53408c926) | current block number
`public `[`coap_method_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1gaf99712dec26d13b1649cc55043580645)` `[`method`](#structcoap__block__request__t_1a96b962bf9f43eb8b3e109c03ec8a8782) | request method (GET, POST, PUT)
`public uint8_t `[`blksize`](#structcoap__block__request__t_1af177f584453577472fb8fb63c807af4b) | CoAP blocksize exponent

## Members

#### `public `[`nanocoap_sock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanosock.md#structnanocoap__sock__t)` * `[`sock`](#structcoap__block__request__t_1a4193eba74955097c2812f0c6a924d8bb) 

socket used for the request

#### `public const char * `[`path`](#structcoap__block__request__t_1a8ec96bc1b7020b9212ad0a25ba5eff0c) 

path on the server

#### `public uint32_t `[`blknum`](#structcoap__block__request__t_1a52453bcad400a3914a4f17f53408c926) 

current block number

#### `public `[`coap_method_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__coap_1gaf99712dec26d13b1649cc55043580645)` `[`method`](#structcoap__block__request__t_1a96b962bf9f43eb8b3e109c03ec8a8782) 

request method (GET, POST, PUT)

#### `public uint8_t `[`blksize`](#structcoap__block__request__t_1af177f584453577472fb8fb63c807af4b) 

CoAP blocksize exponent

# struct `nanocoap_server_response_ctx_t` 

Context from CoAP request for separate response.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structnanocoap__server__response__ctx__t_1ae2fe6849bdad573dbea06e0e4865fb7c) | remote to send response to
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structnanocoap__server__response__ctx__t_1a2439a7d29a62642a2c6887449a3f22eb) | local from which to send response
`public uint8_t `[`token`](#structnanocoap__server__response__ctx__t_1a21d86bef5088fb78ba3f46e85349a255) | request token
`public uint8_t `[`tkl`](#structnanocoap__server__response__ctx__t_1a9b15f777eba019cb37e64ccef8f48482) | request token length
`public uint8_t `[`no_response`](#structnanocoap__server__response__ctx__t_1af3dcedd6bd12ef09349e25d443fa5fdb) | no-response bitmap

## Members

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structnanocoap__server__response__ctx__t_1ae2fe6849bdad573dbea06e0e4865fb7c) 

remote to send response to

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local`](#structnanocoap__server__response__ctx__t_1a2439a7d29a62642a2c6887449a3f22eb) 

local from which to send response

#### `public uint8_t `[`token`](#structnanocoap__server__response__ctx__t_1a21d86bef5088fb78ba3f46e85349a255) 

request token

#### `public uint8_t `[`tkl`](#structnanocoap__server__response__ctx__t_1a9b15f777eba019cb37e64ccef8f48482) 

request token length

#### `public uint8_t `[`no_response`](#structnanocoap__server__response__ctx__t_1af3dcedd6bd12ef09349e25d443fa5fdb) 

no-response bitmap

