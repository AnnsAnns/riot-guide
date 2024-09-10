---
title: api-net_gcoap.md
description: api-net_gcoap.md
---
# group `net_gcoap` 

High-level interface to CoAP messaging.

gcoap provides a high-level interface for writing CoAP messages via RIOT's sock networking API. gcoap internalizes network event processing so an application only needs to focus on request/response handling. For a server, gcoap accepts a list of resource paths with callbacks for writing the response. For a client, gcoap provides a function to send a request, with a callback for reading the server response.

gcoap allocates a RIOT message processing thread, so a single instance can serve multiple applications. This approach also means gcoap uses a single UDP port, which supports RFC 6282 compression. Internally, gcoap depends on the nanocoap package for base level structs and functionality. gcoap uses nanocoap's Packet API to write message options.

gcoap supports the Observe extension (RFC 7641) for a server. gcoap provides functions to generate and send an observe notification that are similar to the functions to send a client request. gcoap also supports the Block extension (RFC 7959) with block-specific option functions as well as some helpers.

*Contents*

* Server Operation

* Client Operation

* Observe Server Operation

* Block Operation

* Proxy Operation

* DTLS for transport security

* Implementation Notes

* Implementation Status

Server Operationgcoap listens for requests on CONFIG_GCOAP_PORT, 5683 by default. You can redefine this by uncommenting the appropriate lines in gcoap's make file.

gcoap allows an application to specify a collection of request resource paths it wants to be notified about. Create an array of resources ([coap_resource_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t) structs) ordered by the resource path, specifically the ASCII encoding of the path characters (digit and capital precede lower case). Use [gcoap_register_listener()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga1c3b10922136af0308bd70c7bb6f0e52) at application startup to pass in these resources, wrapped in a gcoap_listener_t. Also see *Server path matching* in the base [nanocoap](group__net__nanocoap.html) documentation.

gcoap itself defines a resource for `/.well-known/core` discovery, which lists all of the registered paths. See the *Resource list creation* section below for more.

Creating a responseAn application resource includes a callback function, a coap_handler_t. After reading the request, the callback must use functions provided by gcoap to format the response, as described below. The callback *must* read the request thoroughly before calling the functions, because the response buffer likely reuses the request buffer. See `examples/gcoap/client.c` for a simple example of a callback.

Here is the expected sequence for a callback function:

Read request completely and parse request payload, if any. Use the [coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)*payload* and *payload_len* attributes.

If there is a payload, follow the steps below.

* Call [gcoap_resp_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga1900ec9205ee6844b422312a0af5896a) to initialize the response.

* Use the coap_opt_add_xxx() functions to include any Options, for example [coap_opt_add_format()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga23be123d046524b6b1269e26fb3150e0) for Content-Format of the payload. Options *must* be written in order by option number (see "CoAP option numbers" in [CoAP defines](group__net__coap.html)).

* Call [coap_opt_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf94c66182f7412d256c32c66d1d7a012) to complete the PDU metadata. Retain the returned metadata length.

* Write the response payload, starting at the updated *payload* pointer in the [coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t), for up to *payload_len* bytes.

* Return the sum of the metadata length and payload length. If some error has occurred, return a negative errno code from the handler, and gcoap will send a server error (5.00).

If no payload, call only [gcoap_response()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gace6fa0e224d1cd07211e22e3af75f8bd) to write the full response. If you need to add Options, follow the first three steps in the list above instead.

Resource list creationgcoap allows customization of the function that provides the list of registered resources for `/.well-known/core` and CoRE Resource Directory registration. By default gcoap provides [gcoap_encode_link()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaa097b4388e04ab265cf79cf38c493d07), which lists only the target path for each link. However, an application may specify a custom function in the gcoap_listener_t it registers with gcoap. For example, this function may add parameters to provide more information about the resource, as described in RFC 6690. See the gcoap example for use of a custom encoder function.

Client OperationClient operation includes two phases: creating and sending a request, and handling the response asynchronously in a client supplied callback. See `examples/gcoap/client.c` for a simple example of sending a request and reading the response.

Creating a requestHere is the expected sequence to prepare and send a request:

Allocate a buffer and a [coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t) for the request.

If there is a payload, follow the steps below.

* Call [gcoap_req_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga291fd969b90b9571118c5739706b0c50) to initialize the request.

* Optionally, mark the request confirmable by calling [coap_hdr_set_type()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga92058243dac042a617701aaedc58e45d) with COAP_TYPE_CON.

* Use the coap_opt_add_xxx() functions to include any Options beyond Uri-Path, which was added in the first step. Options *must* be written in order by option number (see "CoAP option numbers" in [CoAP defines](group__net__coap.html)).

* Call [coap_opt_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf94c66182f7412d256c32c66d1d7a012) to complete the PDU metadata. Retain the returned metadata length.

* Write the request payload, starting at the updated *payload* pointer in the [coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t), for up to *payload_len* bytes.

If no payload, call only [gcoap_request()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaf635d01732aa7c620271d05949103497) to write the full request. If you need to add Options, follow the first four steps in the list above instead.

Finally, call [gcoap_req_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07) with the sum of the metadata length and payload length, the destination endpoint, and a callback function for the host's response.

Handling the responseWhen gcoap receives the response to a request, it executes the callback from the request. gcoap also executes the callback when a response is not received within GCOAP_RESPONSE_TIMEOUT.

Here is the expected sequence for handling a response in the callback.

* Test for a server response or timeout in the `state` field of the `memo` callback parameter (`memo->state`). See the GCOAP_MEMO... constants.

* Test the response with [coap_get_code_class()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga68b2d1696412f0c2cfd8ff14c191ef56) and [coap_get_code_detail()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga7c4d39185482dc994f974f3c7ba3237b).

* Test the response payload with the [coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)*payload_len* and *content_type* attributes.

* Read the payload, if any.

Observe Server OperationA CoAP client may register for Observe notifications for any resource that an application has registered with gcoap. An application does not need to take any action to support Observe client registration. However, gcoap limits registration for a given resource to a *single* observer.

It is [suggested](https://tools.ietf.org/html/rfc7641#section-6) that a server adds the 'obs' attribute to resources that are useful for observation (i.e. will produce notifications) as a hint. Keep in mind that this is not mandatory in order to enable the mechanism in RIOT, nor will it prevent a client from observing a resource that does not have this attribute in the link description. See the "Resource list creation" section above for how the gcoap example app publishes the obs attribute.

An Observe notification is considered a response to the original client registration request. So, the Observe server only needs to create and send the notification  no further communication or callbacks are required.

Creating a notificationHere is the expected sequence to prepare and send a notification:

Allocate a buffer and a [coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t) for the notification, then follow the steps below.

* Call [gcoap_obs_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga3918d03f99a7312946bc28d5fdb7b610) to initialize the notification for a resource. Test the return value, which may indicate there is not an observer for the resource. If so, you are done.

* Use the coap_opt_add_xxx() functions to include any Options, for example [coap_opt_add_format()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga23be123d046524b6b1269e26fb3150e0) for Content-Format of the payload. Options *must* be written in order by option number (see "CoAP option numbers" in [CoAP defines](group__net__coap.html)).

* Call [coap_opt_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf94c66182f7412d256c32c66d1d7a012) to complete the PDU metadata. Retain the returned metadata length.

* Write the notification payload, starting at the updated *payload* pointer in the [coap_pkt_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t), for up to *payload_len* bytes.

Finally, call [gcoap_obs_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gab89faee1f2f999f4d6088ec91ca620bd) for the resource, with the sum of the metadata length and payload length for the representation.

Other considerationsBy default, the value for the Observe option in a notification is three bytes long. For resources that change slowly, this length can be reduced via CONFIG_GCOAP_OBS_VALUE_WIDTH.

A client always may re-register for a resource with the same token or with a new token to indicate continued interest in receiving notifications about it. Of course the client must not already be using any new token in the registration for a different resource. Successful registration always is indicated by the presence of the Observe option in the response.

To cancel registration, the server expects to receive a GET request with the Observe option value set to 1. The server does not support cancellation via a reset (RST) response to a non-confirmable notification.

Block Operationgcoap provides for both server side and client side blockwise messaging for requests and responses. This section outlines how to write a message for each situation.

CoAP server GET handlingThe server must slice the full response body into smaller payloads, and identify the slice with a Block2 option. This implementation toggles the actual writing of data as it passes over the code for the full response body. See the _riot_block2_handler() example in [gcoap-block-server](https://github.com/kb2ma/riot-apps/blob/kb2ma-master/gcoap-block-server/gcoap_block.c), which implements the sequence described below.

* Use [coap_block2_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga847153f464dc80f7f015d3ccbceb71c4) to initialize a *slicer* struct from the Block2 option in the request. The slicer tracks boundaries while writing the payload. If no option present in the initial request, the init function defaults to a payload size of 16 bytes.

* Use [gcoap_resp_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga1900ec9205ee6844b422312a0af5896a) to begin the response.

* Use [coap_opt_add_block2()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga15b410e6d2de7e20b3017b3961a6a15a) to write the Block2 option from the slicer. Use 1 as a default for the *more* parameter. At this point, we don't know yet if this message will be the last in the block exchange. However, we must add the block option at this location in the message.

* Use [coap_opt_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf94c66182f7412d256c32c66d1d7a012) to add a payload marker.

* Add the payload using the `coap_blockwise_put_xxx()` functions. The slicer knows the current position in the overall body of the response. It writes only the portion of the body specified by the block number and block size in the slicer.

* Finally, use [coap_block2_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga5d839eb2b07582ff50afb988d2e6e8c1) to finalize the block option with the proper value for the *more* parameter.

CoAP server PUT/POST handlingThe server must ack each blockwise portion of the response body received from the client by writing a Block1 option in the response. See the _sha256_handler() example in [gcoap-block-server](https://github.com/kb2ma/riot-apps/blob/kb2ma-master/gcoap-block-server/gcoap_block.c), which implements the sequence described below.

* Use [coap_get_block1()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga843ab80385da82c6c56a7221dd9ffa68) to initialize a block1 struct from the request.

* Determine the response code. If the block1 *more* attribute is 1, use COAP_CODE_CONTINUE to request more responses. Otherwise, use COAP_CODE_CHANGED to indicate a successful transfer.

* Use [gcoap_resp_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga1900ec9205ee6844b422312a0af5896a) to begin the response, including the response code.

* Use [coap_opt_add_block1_control()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf529432ec861b1ed971a6ebe392b5136) to write the Block1 option.

* Use [coap_opt_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf94c66182f7412d256c32c66d1d7a012) to determine the length of the PDU. If appropriate, use the COAP_OPT_FINISH_PAYLOAD parameter and then write the payload.

CoAP client GET requestThe client requests a specific blockwise payload from the overall body by writing a Block2 option in the request. See _resp_handler() in the [gcoap](https://github.com/RIOT-OS/RIOT/blob/master/examples/gcoap/client.c) example in the RIOT distribution, which implements the sequence described below.

* For the first request, use [coap_block_object_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gadabe7197cbe80bf17fea0ecf5ee9bf56) to initialize a new block1 struct. For subsequent requests, first use [coap_get_block2()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga68deff4fe341e495eb8c3449e5118c82) to read the Block2 option in the response to the previous request. If the *more* attribute indicates no more blocks, you are done.

* The gcoap example actually does *not* include a Block2 option in the original request, but the server response includes a blockwise response with a Block2 option anyway. On the other hand, this example shows how blockwise messaging can be supported in a generic way.

* If more blocks are available, use [gcoap_req_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga291fd969b90b9571118c5739706b0c50) to create a new request.

* Increment the *blknum* attribute in the block1 struct from the previous response to request the next blockwise payload.

* Use [coap_opt_put_block2_control()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga14bb5cc27fb33ff8abca2d63484b1f10) to write the Block2 option to the request.

* Use [coap_opt_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf94c66182f7412d256c32c66d1d7a012) to determine the length of the PDU.

CoAP client PUT/POST requestThe client pushes a specific blockwise payload from the overall body to the server by writing a Block1 option in the request. See _do_block_post() in the [gcoap-block-client](https://github.com/kb2ma/riot-apps/blob/kb2ma-master/gcoap-block-client/gcoap_block.c) example, which implements the sequence described below.

* For the first request, use [coap_block_slicer_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga72043847cf561f5f6e926cf4323bbd66) to initialize a *slicer* struct with the desired block number and block size. For subsequent requests, first read the response from the server to the previous request. If the response code is COAP_CODE_CONTINUE, then increment the last block number sent when initializing the slicer struct for the next request.

* Use [gcoap_req_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga291fd969b90b9571118c5739706b0c50) to initialize the request.

* Use [coap_opt_add_block1()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf123a387066d0c2cef1548747c72f990) to add the Block1 option from the slicer. Use 1 as a default for the *more* parameter. At this point, we don't know yet if this message will be the last in the block exchange. However, we must add the block option at this location in the message.

* Use [coap_opt_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaf94c66182f7412d256c32c66d1d7a012) with COAP_OPT_FINISH_PAYLOAD to write the payload marker.

* Add the payload using the `coap_blockwise_put_xxx()` functions. The slicer knows the current position in the overall body of the response. It writes only the portion of the body specified by the block number and block size in the slicer.

* Finally, use [coap_block1_finish()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gab424b844874f0bc98190100fb748909e) to finalize the block option with the proper value for the *more* parameter.

Proxy OperationA [CoAP proxy](https://tools.ietf.org/html/rfc7252#section-5.7.1) forwards incoming requests to an origin server, or again to another proxy server.

Proxy Client HandlingThe current implementation only allows the use of `Proxy-Uri` to specify the absolute URI for the origin server and resource. A request that includes a `Proxy-Uri` option must not contain any of the `Uri-*` options. An example:

```cpp
// endpoint for the proxy server
 sock_udp_ep_t *proxy_remote = ...;
// absolute URI for the origin server and resource
char *uri = "coap://[2001:db8::1]:5683/.well-known/core";

gcoap_req_init(&pdu, buf, CONFIG_GCOAP_PDU_BUF_SIZE, COAP_METHOD_GET, NULL);
coap_opt_add_proxy_uri(&pdu, uri);
unsigned len = coap_opt_finish(&pdu, COAP_OPT_FINISH_NONE);

gcoap_req_send((uint8_t *) pdu->hdr, len, proxy_remote, NULL, _resp_handler, NULL,
               GCOAP_SOCKET_TYPE_UNDEF);
```

See the gcoap example for a sample implementation.

Proxy Server HandlingNot implemented yet.

DTLS as transport securityGCoAP allows to use DTLS for transport security by using the [DTLS sock API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls). Using the module gcoap_dtls enables the support. GCoAP listens for requests on CONFIG_GCOAPS_PORT, 5684 by default when DTLS is enabled.

Credentials have to been configured before use. See [Credman](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman) and [DTLS sock credentials API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls__creds) for credential managing. Access to the DTLS socket is provided by [gcoap_get_sock_dtls()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga6ac0de0ff678617e71a0295c1b2a9d5b).

GCoAP includes a DTLS session management component that stores active sessions. By default, it tries to have CONFIG_GCOAP_DTLS_MINIMUM_AVAILABLE_SESSIONS session slots available to keep the server responsive. If not enough sessions are available the server destroys the session that has not been used for the longest time after CONFIG_GCOAP_DTLS_MINIMUM_AVAILABLE_SESSIONS_TIMEOUT_USEC.

Implementation NotesWaiting for a responseWe take advantage of RIOT's asynchronous messaging by using an xtimer to wait for a response, so the gcoap thread does not block while waiting. The user is notified via the same callback, whether the message is received or the wait times out. We track the response with an entry in the `_coap_state.open_reqs` array.

Implementation Statusgcoap includes server and client capability. Available features include:

* Message Type: Supports non-confirmable (NON) messaging. Additionally provides a callback on timeout. Provides piggybacked ACK response to a confirmable (CON) request.

* Observe extension: Provides server-side registration and notifications and client-side observe.

* Server and Client provide helper functions for writing the response/request. See the CoAP topic in the source documentation for details. See the gcoap example for sample implementations.

* Server allows an application to register a 'listener', which includes an array of endpoint paths and function callbacks used to write a response.

* Server listens on a port at startup; defaults to 5683.

* Client operates asynchronously; sends request and then handles response in a user provided callback.

* Client generates token; length defined at compile time.

* Options: Supports Content-Format for payload.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GCOAP_TOKENLEN_MAX`](#group__net__gcoap_1ga2f4f23b08bfc7b5bbc578235b1b3ab0e)            | Maximum length in bytes for a token.
`define `[`GCOAP_HEADER_MAXLEN`](#group__net__gcoap_1ga786670f21b2ced965003e06a68846e01)            | Maximum length in bytes for a header, including the token.
`define `[`GCOAP_PAYLOAD_MARKER`](#group__net__gcoap_1ga4c1bb0c0f347c809b1bd168fbce65151)            | Marks the boundary between header and payload.
`define `[`GCOAP_SEND_LIMIT_NON`](#group__net__gcoap_1ga9718f9727abd645f0c99cb58cf32c76f)            | Value for send_limit in request memo when non-confirmable type.
`define `[`GCOAP_OBS_TICK_EXPONENT`](#group__net__gcoap_1gac16c1ec12feb641443f84f6b555c6555)            | See CONFIG_GCOAP_OBS_VALUE_WIDTH.
`enum `[`gcoap_socket_type_t`](#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)            | CoAP socket types.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gcoap_init`](#group__net__gcoap_1gae4fa464865a37f897cfab4d3e679bdb1)`(void)`            | Initializes the gcoap thread and device.
`public void `[`gcoap_register_listener`](#group__net__gcoap_1ga1c3b10922136af0308bd70c7bb6f0e52)`(`[`gcoap_listener_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gab43a2584b0419d611e774d10f073c18f)` * listener)`            | Starts listening for resource paths.
`public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`gcoap_get_resource_by_path_iterator`](#group__net__gcoap_1ga7d136cf6c542e15daf31969ac23fca8b)`(const `[`gcoap_listener_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gab43a2584b0419d611e774d10f073c18f)` ** last_listener,const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * last_resource,const char * uri_path)`            | Iterate through all registered listeners and check for a resource, matching by `uri_path`.
`public int `[`gcoap_req_init_path_buffer`](#group__net__gcoap_1ga034e3fe03d8398845e317a29c72d9605)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code,const char * path,size_t path_len)`            | Initializes a CoAP request PDU on a buffer.
`public inline static int `[`gcoap_req_init`](#group__net__gcoap_1ga291fd969b90b9571118c5739706b0c50)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code,const char * path)`            | Initializes a CoAP request PDU on a buffer.
`public inline static ssize_t `[`gcoap_request`](#group__net__gcoap_1gaf635d01732aa7c620271d05949103497)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code,char * path)`            | Writes a complete CoAP request PDU when there is not a payload.
`public ssize_t `[`gcoap_req_send`](#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07)`(const uint8_t * buf,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,`[`gcoap_resp_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga8f62887693fa63a7595565e44156806d)` resp_handler,void * context,`[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` tl_type)`            | Sends a buffer containing a CoAP request to the provided endpoint.
`public inline static ssize_t `[`gcoap_req_send_tl`](#group__net__gcoap_1ga213397078b15675b001a2fff0a2838b6)`(const uint8_t * buf,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`gcoap_resp_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga8f62887693fa63a7595565e44156806d)` resp_handler,void * context,`[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` tl_type)`            | Sends a buffer containing a CoAP request to the provided endpoint.
`public int `[`gcoap_resp_init`](#group__net__gcoap_1ga1900ec9205ee6844b422312a0af5896a)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code)`            | Initializes a CoAP response packet on a buffer.
`public inline static ssize_t `[`gcoap_response`](#group__net__gcoap_1gace6fa0e224d1cd07211e22e3af75f8bd)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code)`            | Writes a complete CoAP response PDU when there is no payload.
`public int `[`gcoap_obs_init`](#group__net__gcoap_1ga3918d03f99a7312946bc28d5fdb7b610)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource)`            | Initializes a CoAP Observe notification packet on a buffer, for the observer registered for a resource.
`public size_t `[`gcoap_obs_send`](#group__net__gcoap_1gab89faee1f2f999f4d6088ec91ca620bd)`(const uint8_t * buf,size_t len,const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource)`            | Sends a buffer containing a CoAP Observe notification to the observer registered for a resource.
`public int `[`gcoap_obs_req_forget`](#group__net__gcoap_1gabf21f078560b6c9f8d2dbad222d24579)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,const uint8_t * token,size_t tokenlen)`            | Forgets (invalidates) an existing observe request.
`public uint8_t `[`gcoap_op_state`](#group__net__gcoap_1gaef16b142f138806dfa5d1c5a38794ebd)`(void)`            | Provides important operational statistics.
`public int `[`gcoap_get_resource_list`](#group__net__gcoap_1ga11a540b3a52dcf95535100f47ce1370e)`(void * buf,size_t maxlen,uint8_t cf,`[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` tl_type)`            | Get the resource list, currently only `CoRE Link Format` (COAP_FORMAT_LINK) supported.
`public ssize_t `[`gcoap_encode_link`](#group__net__gcoap_1gaa097b4388e04ab265cf79cf38c493d07)`(const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource,char * buf,size_t maxlen,`[`coap_link_encoder_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structcoap__link__encoder__ctx__t)` * context)`            | Writes a resource in CoRE Link Format to a provided buffer.
`public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * `[`gcoap_get_sock_dtls`](#group__net__gcoap_1ga6ac0de0ff678617e71a0295c1b2a9d5b)`(void)`            | Get the underlying DTLS socket of gcoap.
`public inline static `[`coap_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__hdr__t)` * `[`gcoap_request_memo_get_hdr`](#group__net__gcoap_1gaf093f365bf7ecd321590c49bac29160e)`(const `[`gcoap_request_memo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaab3719619577e1617098101d5c96c04e)` * memo)`            | Get the header of a request from a [gcoap_request_memo_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaab3719619577e1617098101d5c96c04e).
`struct `[`coap_link_encoder_ctx_t`](#structcoap__link__encoder__ctx__t) | Context information required to write a resource link.
`struct `[`gcoap_socket_t`](#structgcoap__socket__t) | CoAP socket to handle multiple transport types.
`struct `[`gcoap_listener`](#structgcoap__listener) | A modular collection of resources for a server.
`struct `[`gcoap_resend_t`](#structgcoap__resend__t) | Extends request memo for resending a confirmable request.
`struct `[`gcoap_request_memo`](#structgcoap__request__memo) | Memo to handle a response for a request.
`struct `[`gcoap_observe_memo_t`](#structgcoap__observe__memo__t) | Memo for Observe registration and notifications.

## Members

#### `define `[`GCOAP_TOKENLEN_MAX`](#group__net__gcoap_1ga2f4f23b08bfc7b5bbc578235b1b3ab0e) 

Maximum length in bytes for a token.

#### `define `[`GCOAP_HEADER_MAXLEN`](#group__net__gcoap_1ga786670f21b2ced965003e06a68846e01) 

Maximum length in bytes for a header, including the token.

#### `define `[`GCOAP_PAYLOAD_MARKER`](#group__net__gcoap_1ga4c1bb0c0f347c809b1bd168fbce65151) 

Marks the boundary between header and payload.

#### `define `[`GCOAP_SEND_LIMIT_NON`](#group__net__gcoap_1ga9718f9727abd645f0c99cb58cf32c76f) 

Value for send_limit in request memo when non-confirmable type.

#### `define `[`GCOAP_OBS_TICK_EXPONENT`](#group__net__gcoap_1gac16c1ec12feb641443f84f6b555c6555) 

See CONFIG_GCOAP_OBS_VALUE_WIDTH.

#### `enum `[`gcoap_socket_type_t`](#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GCOAP_SOCKET_TYPE_UNDEF            | undefined
GCOAP_SOCKET_TYPE_UDP            | Unencrypted UDP transport.
GCOAP_SOCKET_TYPE_DTLS            | DTLS-over-UDP transport.

CoAP socket types.

May be used as flags for [gcoap_listener_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gab43a2584b0419d611e774d10f073c18f), but must be used numerically with [gcoap_req_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07).

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gcoap_init`](#group__net__gcoap_1gae4fa464865a37f897cfab4d3e679bdb1)`(void)` 

Initializes the gcoap thread and device.

Must call once before first use.

#### Returns
PID of the gcoap thread on success. 

#### Returns
-EEXIST, if thread already has been created. 

#### Returns
-EINVAL, if the IP port already is in use.

#### `public void `[`gcoap_register_listener`](#group__net__gcoap_1ga1c3b10922136af0308bd70c7bb6f0e52)`(`[`gcoap_listener_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gab43a2584b0419d611e774d10f073c18f)` * listener)` 

Starts listening for resource paths.

`listener` is a valid pointer to a single listener (that is, `listener->next == NULL`)

If you are tempted to register a pre-linked chain of listeners, consider placing all their resources in the resources array of a single listener instead. In the few cases where this does not work (that is, when the resources need a different `link_encoder` or other fields of the listener struct), they can just be registered individually.

#### Parameters
* `listener` Listener containing the resources.

#### `public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`gcoap_get_resource_by_path_iterator`](#group__net__gcoap_1ga7d136cf6c542e15daf31969ac23fca8b)`(const `[`gcoap_listener_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gab43a2584b0419d611e774d10f073c18f)` ** last_listener,const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * last_resource,const char * uri_path)` 

Iterate through all registered listeners and check for a resource, matching by `uri_path`.

This functions returns resources matching a subpath 
**See also**: [COAP_MATCH_SUBTREE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga8c87dddfffd38c7c88c32b49fad9cb26). If an exact match is required, check with `strncmp()`.

#### Parameters
* `last_listener` A pointer to NULL for the first call, otherwise the last returned listener 

* `last_resource` NULL for the first call, otherwise the last returned resource 

* `uri_path` The URI path to search for

#### Returns
The resource that matches the URI path

#### `public int `[`gcoap_req_init_path_buffer`](#group__net__gcoap_1ga034e3fe03d8398845e317a29c72d9605)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code,const char * path,size_t path_len)` 

Initializes a CoAP request PDU on a buffer.

If `code` is COAP_CODE_EMPTY, prepares a complete "CoAP ping" 4 byte empty message request, ready to send.

With module module [`nanocoap_cache`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__cache) an all-zero ETag option of length 8 which is updated with a value or removed in [gcoap_req_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07) / [gcoap_req_send_tl()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga213397078b15675b001a2fff0a2838b6) depending on existing cache entries for cache (re-)validation. If you do not use the given send functions or do not want cache entries to revalidated for any reason, remove that empty option using [coap_opt_remove()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gadec4dd6f9ab2fdc45c73cc8774255b54).

#### Parameters
* `pdu` Request metadata 

* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `code` Request code, one of COAP_METHOD_XXX or COAP_CODE_EMPTY to ping 

* `path` Resource path, may be NULL. `path_len` will be ignored in that case. 

* `path_len` Length of `path`.

`path` must start with `/` if not NULL

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public inline static int `[`gcoap_req_init`](#group__net__gcoap_1ga291fd969b90b9571118c5739706b0c50)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code,const char * path)` 

Initializes a CoAP request PDU on a buffer.

If `code` is COAP_CODE_EMPTY, prepares a complete "CoAP ping" 4 byte empty message request, ready to send.

With module module [`nanocoap_cache`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__cache) an all-zero ETag option of length 8 which is updated with a value or removed in [gcoap_req_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07) / [gcoap_req_send_tl()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga213397078b15675b001a2fff0a2838b6) depending on existing cache entries for cache (re-)validation. If you do not use the given send functions or do not want cache entries to revalidated for any reason, remove that empty option using [coap_opt_remove()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gadec4dd6f9ab2fdc45c73cc8774255b54).

#### Parameters
* `pdu` Request metadata 

* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `code` Request code, one of COAP_METHOD_XXX or COAP_CODE_EMPTY to ping 

* `path` `\0`-terminated resource path, may be NULL

`path` must start with `/` if not NULL

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public inline static ssize_t `[`gcoap_request`](#group__net__gcoap_1gaf635d01732aa7c620271d05949103497)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code,char * path)` 

Writes a complete CoAP request PDU when there is not a payload.

#### Parameters
* `pdu` Request metadata 

* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `code` Request code: GCOAP_[GET|POST|PUT|DELETE] 

* `path` Resource path, *must* start with '/'

#### Returns
size of the PDU within the buffer 

#### Returns
< 0 on error

#### `public ssize_t `[`gcoap_req_send`](#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07)`(const uint8_t * buf,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local,`[`gcoap_resp_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga8f62887693fa63a7595565e44156806d)` resp_handler,void * context,`[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` tl_type)` 

Sends a buffer containing a CoAP request to the provided endpoint.

#### Parameters
* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `remote` Destination for the packet 

* `local` Local endpoint to send from, may be NULL 

* `resp_handler` Callback when response received, may be NULL 

* `context` User defined context passed to the response handler 

* `tl_type` The transport type to use for send. When [GCOAP_SOCKET_TYPE_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gga34f7408f6a5a8313a1937bf2697fdaf1a49638e0c48f336388176798cca6887b8) is selected, the highest available (by value) will be selected. Only single types are allowed, not a combination of them.

The highest supported (by value) gcoap_socket_type_t will be selected as transport type.

#### Returns
length of the packet 

#### Returns
-ENOTCONN, if DTLS was used and session establishment failed 

#### Returns
-EINVAL, if `tl_type` is is not supported 

#### Returns
0 if cannot send

#### `public inline static ssize_t `[`gcoap_req_send_tl`](#group__net__gcoap_1ga213397078b15675b001a2fff0a2838b6)`(const uint8_t * buf,size_t len,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,`[`gcoap_resp_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga8f62887693fa63a7595565e44156806d)` resp_handler,void * context,`[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` tl_type)` 

Sends a buffer containing a CoAP request to the provided endpoint.

> Deprecated: Will be removed after the 2023.10 release. Use alias [gcoap_req_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07) instead.

#### Parameters
* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `remote` Destination for the packet 

* `resp_handler` Callback when response received, may be NULL 

* `context` User defined context passed to the response handler 

* `tl_type` The transport type to use for send. When [GCOAP_SOCKET_TYPE_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gga34f7408f6a5a8313a1937bf2697fdaf1a49638e0c48f336388176798cca6887b8) is selected, the highest available (by value) will be selected. Only single types are allowed, not a combination of them.

#### Returns
length of the packet 

#### Returns
-ENOTCONN, if DTLS was used and session establishment failed 

#### Returns
-EINVAL, if `tl_type` is is not supported 

#### Returns
0 if cannot send

#### `public int `[`gcoap_resp_init`](#group__net__gcoap_1ga1900ec9205ee6844b422312a0af5896a)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code)` 

Initializes a CoAP response packet on a buffer.

Initializes payload location within the buffer based on packet setup.

#### Parameters
* `pdu` Response metadata 

* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `code` Response code

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public inline static ssize_t `[`gcoap_response`](#group__net__gcoap_1gace6fa0e224d1cd07211e22e3af75f8bd)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,unsigned code)` 

Writes a complete CoAP response PDU when there is no payload.

#### Parameters
* `pdu` Response metadata 

* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `code` Response code

#### Returns
size of the PDU within the buffer 

#### Returns
< 0 on error

#### `public int `[`gcoap_obs_init`](#group__net__gcoap_1ga3918d03f99a7312946bc28d5fdb7b610)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pdu,uint8_t * buf,size_t len,const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource)` 

Initializes a CoAP Observe notification packet on a buffer, for the observer registered for a resource.

First verifies that an observer has been registered for the resource.

If this function returns 

**See also**: GCOAP_OBS_INIT_OK you have to call [gcoap_obs_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gab89faee1f2f999f4d6088ec91ca620bd) afterwards to release a mutex.

#### Parameters
* `pdu` Notification metadata 

* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `resource` Resource for the notification

#### Returns
GCOAP_OBS_INIT_OK on success 

#### Returns
GCOAP_OBS_INIT_ERR on error 

#### Returns
GCOAP_OBS_INIT_UNUSED if no observer for resource

#### `public size_t `[`gcoap_obs_send`](#group__net__gcoap_1gab89faee1f2f999f4d6088ec91ca620bd)`(const uint8_t * buf,size_t len,const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource)` 

Sends a buffer containing a CoAP Observe notification to the observer registered for a resource.

Assumes a single observer for a resource.

#### Parameters
* `buf` Buffer containing the PDU 

* `len` Length of the buffer 

* `resource` Resource to send

#### Returns
length of the packet 

#### Returns
0 if cannot send

#### `public int `[`gcoap_obs_req_forget`](#group__net__gcoap_1gabf21f078560b6c9f8d2dbad222d24579)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,const uint8_t * token,size_t tokenlen)` 

Forgets (invalidates) an existing observe request.

This invalidates the internal (local) observe request state without actually sending a deregistration request to the server. Ths mechanism may be referred to as passive deregistration, as it does not send a deregistration request. This is implemented according to the description in RFC 7641, Section 3.6 (Cancellation): 'A client that is no longer interested in receiving notifications for a resource can simply "forget" the observation.' Successfully invalidating the request by calling this function guarantees that the corresponding observe response handler will not be called anymore.

NOTE: There are cases were active deregistration is preferred instead. A server may continue sending notifications if it chooses to ignore the RST which is meant to indicate the client did not recognize the notification. For such server implementations this function must be called *before* sending an explicit deregister request (i.e., a GET request with the token of the registration and the observe option set to COAP_OBS_DEREGISTER). This will instruct the server to stop sending further notifications.

#### Parameters
* `remote` remote endpoint that hosts the observed resource 

* `token` token of the original GET request used for registering an observe 

* `tokenlen` the length of the token in bytes

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public uint8_t `[`gcoap_op_state`](#group__net__gcoap_1gaef16b142f138806dfa5d1c5a38794ebd)`(void)` 

Provides important operational statistics.

Useful for monitoring.

#### Returns
count of unanswered requests

#### `public int `[`gcoap_get_resource_list`](#group__net__gcoap_1ga11a540b3a52dcf95535100f47ce1370e)`(void * buf,size_t maxlen,uint8_t cf,`[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` tl_type)` 

Get the resource list, currently only `CoRE Link Format` (COAP_FORMAT_LINK) supported.

If `buf` := NULL, nothing will be written but the size of the resulting resource list is computed and returned.

#### Parameters
* `buf` output buffer to write resource list into, my be NULL 

* `maxlen` length of `buf`, ignored if `buf` is NULL 

* `cf` content format to use for the resource list, currently only COAP_FORMAT_LINK supported 

* `tl_type` Transport type to get the list for. [GCOAP_SOCKET_TYPE_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gga34f7408f6a5a8313a1937bf2697fdaf1a49638e0c48f336388176798cca6887b8) for all transport types. If non of the transports beyond UDP are compiled in (i.e. usage of modules no `gcoap_dtls`, ...) this will be ignored and [GCOAP_SOCKET_TYPE_UDP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gga34f7408f6a5a8313a1937bf2697fdaf1a233043974ee492e2181bf9f435ac1709) assumed.

> Todo: add support for CoRAL once it is done

#### Returns
the number of bytes written to `buf`

#### Returns
-1 on error

#### `public ssize_t `[`gcoap_encode_link`](#group__net__gcoap_1gaa097b4388e04ab265cf79cf38c493d07)`(const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource,char * buf,size_t maxlen,`[`coap_link_encoder_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structcoap__link__encoder__ctx__t)` * context)` 

Writes a resource in CoRE Link Format to a provided buffer.

This default implementation only writes the resource path.

#### Parameters
* `resource` resource to write 

* `buf` output buffer to write link into, may be null 

* `maxlen` length of `buf`, ignored if `buf` is NULL 

* `context` other parameters that affect how link is written

#### Returns
count of bytes written to `buf` (or writable if `buf` is null) 

#### Returns
-1 on error

#### `public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * `[`gcoap_get_sock_dtls`](#group__net__gcoap_1ga6ac0de0ff678617e71a0295c1b2a9d5b)`(void)` 

Get the underlying DTLS socket of gcoap.

Useful for managing credentials of gcoap.

#### Returns
pointer to the [sock_dtls_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1gaa63acc71681400dd4b856ce09e27cafb) object

#### `public inline static `[`coap_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__hdr__t)` * `[`gcoap_request_memo_get_hdr`](#group__net__gcoap_1gaf093f365bf7ecd321590c49bac29160e)`(const `[`gcoap_request_memo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaab3719619577e1617098101d5c96c04e)` * memo)` 

Get the header of a request from a [gcoap_request_memo_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaab3719619577e1617098101d5c96c04e).

#### Parameters
* `memo` A request memo. Must not be NULL.

#### Returns
The request header for the given request memo.

# struct `coap_link_encoder_ctx_t` 

Context information required to write a resource link.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`content_format`](#structcoap__link__encoder__ctx__t_1a3daa989ec80bd9378e9400e2f02d363c) | link format
`public size_t `[`link_pos`](#structcoap__link__encoder__ctx__t_1a874a25a8958b02f4a3f1e12bc71a544d) | position of link within listener
`public uint16_t `[`flags`](#structcoap__link__encoder__ctx__t_1a92eea6256214d415ecc74f5b2add2f4e) | encoder switches; see [COAP_LINK_FLAG_](#group__net__gcoap_1COAP_LINK_FLAG_) constants

## Members

#### `public unsigned `[`content_format`](#structcoap__link__encoder__ctx__t_1a3daa989ec80bd9378e9400e2f02d363c) 

link format

#### `public size_t `[`link_pos`](#structcoap__link__encoder__ctx__t_1a874a25a8958b02f4a3f1e12bc71a544d) 

position of link within listener

#### `public uint16_t `[`flags`](#structcoap__link__encoder__ctx__t_1a92eea6256214d415ecc74f5b2add2f4e) 

encoder switches; see [COAP_LINK_FLAG_](#group__net__gcoap_1COAP_LINK_FLAG_) constants

# struct `gcoap_socket_t` 

CoAP socket to handle multiple transport types.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` `[`type`](#structgcoap__socket__t_1a118d7df877a1067fa8c19734e3f84fbb) | Type of stored socket.
`public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * `[`udp`](#structgcoap__socket__t_1a3058ff5d1330d5eecb108dc001db4929) | 
`public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * `[`dtls`](#structgcoap__socket__t_1a739b0b693dce7b71f476ed3ae231047f) | 
`public union gcoap_socket_t::@355 `[`socket`](#structgcoap__socket__t_1aedd9ce0d272d756c46f5c1fbd730082a) | Stored socket.
`public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` `[`ctx_dtls_session`](#structgcoap__socket__t_1a69fc19d24f754a761c322a99809fa1a1) | Session object for the stored socket.

## Members

#### `public `[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` `[`type`](#structgcoap__socket__t_1a118d7df877a1067fa8c19734e3f84fbb) 

Type of stored socket.

#### `public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` * `[`udp`](#structgcoap__socket__t_1a3058ff5d1330d5eecb108dc001db4929) 

#### `public `[`sock_dtls_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1gaa63acc71681400dd4b856ce09e27cafb)` * `[`dtls`](#structgcoap__socket__t_1a739b0b693dce7b71f476ed3ae231047f) 

#### `public union gcoap_socket_t::@355 `[`socket`](#structgcoap__socket__t_1aedd9ce0d272d756c46f5c1fbd730082a) 

Stored socket.

#### `public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` `[`ctx_dtls_session`](#structgcoap__socket__t_1a69fc19d24f754a761c322a99809fa1a1) 

Session object for the stored socket.

Used for exchanging a session between functions.

# struct `gcoap_listener` 

A modular collection of resources for a server.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resources`](#structgcoap__listener_1ae678911791d95c1ac8a2bba450fcc4e5) | First element in the array of resources.
`public size_t `[`resources_len`](#structgcoap__listener_1aa00120f72c63d89cf4f1617b5062a5fe) | Length of array.
`public `[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` `[`tl_type`](#structgcoap__listener_1abc8cd3d3d94a3df1f8ba8921d96b81ca) | Transport type for the listener.
`public `[`gcoap_link_encoder_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga197edc062a2d88fec4bd649cc6999abc)` `[`link_encoder`](#structgcoap__listener_1a421a44a3e85080e78ed5d0459a231f90) | Writes a link for a resource.
`public struct `[`gcoap_listener`](#structgcoap__listener)` * `[`next`](#structgcoap__listener_1a4b6a3de4bc60238b8e56bec6fcb845da) | Next listener in list.
`public `[`gcoap_request_matcher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gad801d3224e621cb182e3861c581903a6)` `[`request_matcher`](#structgcoap__listener_1ae87b5004abacfa03fd9bdf07b6200923) | Function that picks a suitable request handler from a request.

## Members

#### `public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resources`](#structgcoap__listener_1ae678911791d95c1ac8a2bba450fcc4e5) 

First element in the array of resources.

#### `public size_t `[`resources_len`](#structgcoap__listener_1aa00120f72c63d89cf4f1617b5062a5fe) 

Length of array.

#### `public `[`gcoap_socket_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1)` `[`tl_type`](#structgcoap__listener_1abc8cd3d3d94a3df1f8ba8921d96b81ca) 

Transport type for the listener.

Any transport supported by the implementation can be set as a flag. If [GCOAP_SOCKET_TYPE_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gga34f7408f6a5a8313a1937bf2697fdaf1a49638e0c48f336388176798cca6887b8) is set, the listener listens on all supported transports. If non of the transports beyond UDP are compiled in (i.e. no usage of modules `gcoap_dtls`, ...) this will be ignored and [GCOAP_SOCKET_TYPE_UDP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gga34f7408f6a5a8313a1937bf2697fdaf1a233043974ee492e2181bf9f435ac1709) assumed.

#### `public `[`gcoap_link_encoder_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga197edc062a2d88fec4bd649cc6999abc)` `[`link_encoder`](#structgcoap__listener_1a421a44a3e85080e78ed5d0459a231f90) 

Writes a link for a resource.

#### `public struct `[`gcoap_listener`](#structgcoap__listener)` * `[`next`](#structgcoap__listener_1a4b6a3de4bc60238b8e56bec6fcb845da) 

Next listener in list.

#### `public `[`gcoap_request_matcher_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gad801d3224e621cb182e3861c581903a6)` `[`request_matcher`](#structgcoap__listener_1ae87b5004abacfa03fd9bdf07b6200923) 

Function that picks a suitable request handler from a request.

Leaving this NULL selects the default strategy that picks handlers by matching their Uri-Path to resource paths (as per the documentation of the [resources](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__listener_1ae678911791d95c1ac8a2bba450fcc4e5) and [resources_len](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__listener_1aa00120f72c63d89cf4f1617b5062a5fe) fields). Alternative handlers may cast the [resources](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__listener_1ae678911791d95c1ac8a2bba450fcc4e5) and [resources_len](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__listener_1aa00120f72c63d89cf4f1617b5062a5fe) fields to fit their needs.

# struct `gcoap_resend_t` 

Extends request memo for resending a confirmable request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`pdu_buf`](#structgcoap__resend__t_1a39b197eac01083da8a77c69cac1b6317) | Buffer containing the PDU.
`public size_t `[`pdu_len`](#structgcoap__resend__t_1ada0209e1da388efbf403c9823af7c696) | Length of pdu_buf.

## Members

#### `public uint8_t * `[`pdu_buf`](#structgcoap__resend__t_1a39b197eac01083da8a77c69cac1b6317) 

Buffer containing the PDU.

#### `public size_t `[`pdu_len`](#structgcoap__resend__t_1ada0209e1da388efbf403c9823af7c696) 

Length of pdu_buf.

# struct `gcoap_request_memo` 

Memo to handle a response for a request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`state`](#structgcoap__request__memo_1a827a2d6aafaedc3267e557dbd7da865b) | State of this memo, a GCOAP_MEMO...
`public int `[`send_limit`](#structgcoap__request__memo_1a986e6bf0f0f641f0f8ad9f1e7e18ff9c) | Remaining resends, 0 if none; GCOAP_SEND_LIMIT_NON if non-confirmable.
`public uint8_t `[`hdr_buf`](#structgcoap__request__memo_1ad87c340a7e9968c99da0df8286a68079) | Copy of PDU header, if no resends.
`public `[`gcoap_resend_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__resend__t)` `[`data`](#structgcoap__request__memo_1aa1d37911fa0fe55e5c4eb9b2760b4b53) | Endpoint and PDU buffer, for resend.
`public union gcoap_request_memo::@356 `[`msg`](#structgcoap__request__memo_1a5db1721a5b392c9b1f7f993e8a7ddb51) | Request message data; if confirmable, supports resending message.
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote_ep`](#structgcoap__request__memo_1ac4ba7534970a4095667fa47ec8c1debb) | Remote endpoint.
`public `[`gcoap_resp_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga8f62887693fa63a7595565e44156806d)` `[`resp_handler`](#structgcoap__request__memo_1a51b9798ea9d4b6df2ece6b713ae15199) | Callback for the response.
`public void * `[`context`](#structgcoap__request__memo_1a04aef945243bb921e864987e7b3b1e28) | ptr to user defined context data
`public `[`event_timeout_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__timeout__t)` `[`resp_evt_tmout`](#structgcoap__request__memo_1aed2479f0fe1f8e33f387e5fd937333d2) | Limits wait for response.
`public `[`event_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__callback__t)` `[`resp_tmout_cb`](#structgcoap__request__memo_1a59628714666650179d6e4783b3e90384) | Callback for response timeout.
`public `[`gcoap_socket_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__socket__t)` `[`socket`](#structgcoap__request__memo_1ad2968836aebc4075ce28978cf470e819) | Transport type to remote endpoint.
`public uint8_t `[`cache_key`](#structgcoap__request__memo_1aa96b12c83f9d24f5895ac4f932ff0b20) | Cache key for the request.

## Members

#### `public unsigned `[`state`](#structgcoap__request__memo_1a827a2d6aafaedc3267e557dbd7da865b) 

State of this memo, a GCOAP_MEMO...

#### `public int `[`send_limit`](#structgcoap__request__memo_1a986e6bf0f0f641f0f8ad9f1e7e18ff9c) 

Remaining resends, 0 if none; GCOAP_SEND_LIMIT_NON if non-confirmable.

#### `public uint8_t `[`hdr_buf`](#structgcoap__request__memo_1ad87c340a7e9968c99da0df8286a68079) 

Copy of PDU header, if no resends.

#### `public `[`gcoap_resend_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__resend__t)` `[`data`](#structgcoap__request__memo_1aa1d37911fa0fe55e5c4eb9b2760b4b53) 

Endpoint and PDU buffer, for resend.

#### `public union gcoap_request_memo::@356 `[`msg`](#structgcoap__request__memo_1a5db1721a5b392c9b1f7f993e8a7ddb51) 

Request message data; if confirmable, supports resending message.

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote_ep`](#structgcoap__request__memo_1ac4ba7534970a4095667fa47ec8c1debb) 

Remote endpoint.

#### `public `[`gcoap_resp_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga8f62887693fa63a7595565e44156806d)` `[`resp_handler`](#structgcoap__request__memo_1a51b9798ea9d4b6df2ece6b713ae15199) 

Callback for the response.

#### `public void * `[`context`](#structgcoap__request__memo_1a04aef945243bb921e864987e7b3b1e28) 

ptr to user defined context data

#### `public `[`event_timeout_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__timeout__t)` `[`resp_evt_tmout`](#structgcoap__request__memo_1aed2479f0fe1f8e33f387e5fd937333d2) 

Limits wait for response.

#### `public `[`event_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structevent__callback__t)` `[`resp_tmout_cb`](#structgcoap__request__memo_1a59628714666650179d6e4783b3e90384) 

Callback for response timeout.

#### `public `[`gcoap_socket_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__socket__t)` `[`socket`](#structgcoap__request__memo_1ad2968836aebc4075ce28978cf470e819) 

Transport type to remote endpoint.

#### `public uint8_t `[`cache_key`](#structgcoap__request__memo_1aa96b12c83f9d24f5895ac4f932ff0b20) 

Cache key for the request.

Only available with module ['nanocoap_cache'](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__cache)

# struct `gcoap_observe_memo_t` 

Memo for Observe registration and notifications.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`observer`](#structgcoap__observe__memo__t_1aa63dbec93af8e16744d93b938df83fc6) | Client endpoint; unused if null.
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`notifier`](#structgcoap__observe__memo__t_1a98965f70405532d01608520c491b6852) | Local endpoint to send notifications.
`public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resource`](#structgcoap__observe__memo__t_1a9140bff73e4eb90d492402576586c8f2) | Entity being observed.
`public uint8_t `[`token`](#structgcoap__observe__memo__t_1a5c4c622c8af8d8609337f56957213a4f) | Client token for notifications.
`public uint16_t `[`last_msgid`](#structgcoap__observe__memo__t_1aa59ec1d0490632de1ec73c580896d3ed) | Message ID of last notification.
`public unsigned `[`token_len`](#structgcoap__observe__memo__t_1a009624ea22e42b910e9649a622f997ab) | Actual length of token attribute.
`public `[`gcoap_socket_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__socket__t)` `[`socket`](#structgcoap__observe__memo__t_1a6e786807f7169b9048eb20704de9043c) | Transport type to observer.

## Members

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`observer`](#structgcoap__observe__memo__t_1aa63dbec93af8e16744d93b938df83fc6) 

Client endpoint; unused if null.

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`notifier`](#structgcoap__observe__memo__t_1a98965f70405532d01608520c491b6852) 

Local endpoint to send notifications.

#### `public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resource`](#structgcoap__observe__memo__t_1a9140bff73e4eb90d492402576586c8f2) 

Entity being observed.

#### `public uint8_t `[`token`](#structgcoap__observe__memo__t_1a5c4c622c8af8d8609337f56957213a4f) 

Client token for notifications.

#### `public uint16_t `[`last_msgid`](#structgcoap__observe__memo__t_1aa59ec1d0490632de1ec73c580896d3ed) 

Message ID of last notification.

#### `public unsigned `[`token_len`](#structgcoap__observe__memo__t_1a009624ea22e42b910e9649a622f997ab) 

Actual length of token attribute.

#### `public `[`gcoap_socket_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap.md#structgcoap__socket__t)` `[`socket`](#structgcoap__observe__memo__t_1a6e786807f7169b9048eb20704de9043c) 

Transport type to observer.

