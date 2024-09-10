---
title: api-net_nanocoap.md
description: api-net_nanocoap.md
---
# group `net_nanocoap` 

CoAP library optimized for minimal resource usage.

nanocoap is a toolbox for reading and writing CoAP messages. It provides functions for core header attributes like message type and code. It also provides high and low level interfaces to CoAP options, including Block.

nanocoap includes the core structs to store message information. It also provides helper functions for use before sending and after receiving a message, such as [coap_parse()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gad60d02b4df6c510da7931ac15e430378) to read an incoming message.

Application APIsThis page provides reference documentation for the contents of nanocoap. To use nanocoap in an application, see the functional APIs that are built with it. [nanocoap sock](group__net__nanosock.html) is for a targeted client or server with lesser resource requirements, and [gcoap](group__net__gcoap.html) provides a more featureful messaging hub.

Option APIsFor both server responses and client requests, CoAP uses an Option mechanism to encode message metadata that is not required for each message. For example, the resource URI path is required only for a request, and is encoded as the Uri-Path option.

nanocoap sock uses the simpler Buffer API, described in the section *Options Write Buffer API*. gcoap uses the more convenient Packet API, described in the section *Options Write Packet API*.

For either API, the caller *must* write options in order by option number (see "CoAP option numbers" in [CoAP defines](group__net__coap.html)).

Server path matchingBy default the URI-path of an incoming request should match exactly one of the registered resources. But also, a resource can be configured to match just a prefix of the URI-path of the request by adding the [COAP_MATCH_SUBTREE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga8c87dddfffd38c7c88c32b49fad9cb26) option to [coap_resource_t::methods](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t_1a5aa955ab88b29ad7e1d481bffa843fe3).

For example, if a resource is configured with a [path](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t_1a1d11fb4d19d132be8091d6ba43558b79)`/resource01` and the [COAP_MATCH_SUBTREE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga8c87dddfffd38c7c88c32b49fad9cb26) option is used it would match any of `/resource01/`, `/resource01/sub/path`, `/resource01alt`.

If the behavior of matching `/resource01alt` is not wanted and only subtrees are wanted to match, the path should be `/resource01/`.

If in addition just `/resource01` is wanted to match, together with any subtrees of `/resource01/`, then a first resource with the path `/resource01` and exact matching should be register, and then a second one with the path `/resource01/` and subtree matching.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`COAP_FORMAT_NONE`](#group__net__nanocoap_1ga0c9cfbe5210cba4e35c9fbad51a88e19)            | nanoCoAP-specific value to indicate no format specified
`define `[`CONFIG_NANOCOAP_BLOCK_HEADER_MAX`](#group__net__nanocoap_1ga51ef623fc5b3b479a384f74804b14bcc)            | Maximum length of a CoAP header for a blockwise message.
`define `[`NANOCOAP_RESOURCE`](#group__net__nanocoap_1gaf3b7751818e477148bf210c79683ae0c)            | CoAP XFA resource entry.
`define `[`CONFIG_NANOCOAP_SERVER_WELL_KNOWN_CORE`](#group__net__nanocoap_1gac7f7d60ad34fc0f6ce5782d376588a11)            | Respond to `/.well-known/core` to list all resources on the server.
`define `[`COAP_WELL_KNOWN_CORE_DEFAULT_HANDLER`](#group__net__nanocoap_1ga65ee47333edb3b0291e2f9059593efdc)            | Resource definition for the default .well-known/core handler.
`public void `[`coap_request_ctx_init`](#group__net__nanocoap_1ga4580738e758c95952896d59de4a06a58)`(`[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Initialize CoAP request context.
`public const char * `[`coap_request_ctx_get_path`](#group__net__nanocoap_1gaa6a22181749bab3c0bd0c396e7e52bf4)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)`            | Get resource path associated with a CoAP request.
`public void * `[`coap_request_ctx_get_context`](#group__net__nanocoap_1gacabe413a520f73982af806c5acea9d4b)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)`            | Get resource context associated with a CoAP request.
`public uint32_t `[`coap_request_ctx_get_tl_type`](#group__net__nanocoap_1ga0124319fe53d28b08400ed6e2431d78c)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)`            | Get transport the packet was received over.
`public const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`coap_request_ctx_get_remote_udp`](#group__net__nanocoap_1gad01929c7da11c371d7beb519bc741e6b)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)`            | Get the remote endpoint from which the request was received.
`public const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`coap_request_ctx_get_local_udp`](#group__net__nanocoap_1gab70406d17d606a327111006e15a3fabb)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)`            | Get the local endpoint on which the request has been received.
`public inline static ssize_t `[`coap_get_proxy_uri`](#group__net__nanocoap_1gae28bbd93eeb29c208d27f233db8607e9)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,char ** target)`            | Convenience function for getting the packet's Proxy-Uri option.
`public int `[`coap_match_path`](#group__net__nanocoap_1ga237fe059ae577aa1f8ca00f8a452ece7)`(const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource,const uint8_t * uri)`            | Checks if a CoAP resource path matches a given URI.
`struct `[`coap_hdr_t`](#structcoap__hdr__t) | Raw CoAP PDU header structure.
`struct `[`coap_optpos_t`](#structcoap__optpos__t) | CoAP option array entry.
`struct `[`coap_pkt_t`](#structcoap__pkt__t) | CoAP PDU parsing context structure.
`struct `[`coap_resource_t`](#structcoap__resource__t) | Type for CoAP resource entry.
`struct `[`coap_resource_subtree_t`](#structcoap__resource__subtree__t) | Type for CoAP resource subtrees.
`struct `[`_coap_request_ctx`](#struct__coap__request__ctx) | CoAP resource request handler context.
`struct `[`coap_block1_t`](#structcoap__block1__t) | Block1 helper struct.
`struct `[`coap_block_slicer_t`](#structcoap__block__slicer__t) | Blockwise transfer helper struct.

## Members

#### `define `[`COAP_FORMAT_NONE`](#group__net__nanocoap_1ga0c9cfbe5210cba4e35c9fbad51a88e19) 

nanoCoAP-specific value to indicate no format specified

#### `define `[`CONFIG_NANOCOAP_BLOCK_HEADER_MAX`](#group__net__nanocoap_1ga51ef623fc5b3b479a384f74804b14bcc) 

Maximum length of a CoAP header for a blockwise message.

Value obtained experimentally when using SUIT

#### `define `[`NANOCOAP_RESOURCE`](#group__net__nanocoap_1gaf3b7751818e477148bf210c79683ae0c) 

CoAP XFA resource entry.

#### Parameters
* `name` internal name of the resource entry, must be unique

#### `define `[`CONFIG_NANOCOAP_SERVER_WELL_KNOWN_CORE`](#group__net__nanocoap_1gac7f7d60ad34fc0f6ce5782d376588a11) 

Respond to `/.well-known/core` to list all resources on the server.

#### `define `[`COAP_WELL_KNOWN_CORE_DEFAULT_HANDLER`](#group__net__nanocoap_1ga65ee47333edb3b0291e2f9059593efdc) 

Resource definition for the default .well-known/core handler.

#### `public void `[`coap_request_ctx_init`](#group__net__nanocoap_1ga4580738e758c95952896d59de4a06a58)`(`[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx,`[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Initialize CoAP request context.

#### Parameters
* `ctx` Pointer to the request context to initialize 

* `remote` Remote endpoint that made the request

#### `public const char * `[`coap_request_ctx_get_path`](#group__net__nanocoap_1gaa6a22181749bab3c0bd0c396e7e52bf4)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)` 

Get resource path associated with a CoAP request.

#### Parameters
* `ctx` The request context

#### Returns
Resource path of the request

#### `public void * `[`coap_request_ctx_get_context`](#group__net__nanocoap_1gacabe413a520f73982af806c5acea9d4b)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)` 

Get resource context associated with a CoAP request.

#### Parameters
* `ctx` The request context

#### Returns
Resource context of the request

#### `public uint32_t `[`coap_request_ctx_get_tl_type`](#group__net__nanocoap_1ga0124319fe53d28b08400ed6e2431d78c)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)` 

Get transport the packet was received over.

**See also**: [gcoap_socket_type_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1) for values.

#### Parameters
* `ctx` The request context

#### Returns
Transport Layer type of the request

#### `public const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`coap_request_ctx_get_remote_udp`](#group__net__nanocoap_1gad01929c7da11c371d7beb519bc741e6b)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)` 

Get the remote endpoint from which the request was received.

#### Parameters
* `ctx` The request context

#### Returns
Remote endpoint from which the request originated 

#### Returns
NULL The request was not received via UDP

#### `public const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`coap_request_ctx_get_local_udp`](#group__net__nanocoap_1gab70406d17d606a327111006e15a3fabb)`(const `[`coap_request_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1gaedec79122f8968eb8b04e9e9360b392a)` * ctx)` 

Get the local endpoint on which the request has been received.

#### Parameters
* `ctx` The request context

#### Returns
Local endpoint to which the request has been received 

#### Returns
NULL The request was not received via UDP

#### `public inline static ssize_t `[`coap_get_proxy_uri`](#group__net__nanocoap_1gae28bbd93eeb29c208d27f233db8607e9)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,char ** target)` 

Convenience function for getting the packet's Proxy-Uri option.

#### Parameters
* `pkt` pkt to work on 

* `target` pointer to the PROXY_URI in `pkt`

((pkt != NULL) && (target != NULL))

#### Returns
length of the Proxy-Uri option 

#### Returns
-ENOENT if Proxy-Uri option not found 

#### Returns
-EINVAL if Proxy-Uri option cannot be parsed

#### `public int `[`coap_match_path`](#group__net__nanocoap_1ga237fe059ae577aa1f8ca00f8a452ece7)`(const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * resource,const uint8_t * uri)` 

Checks if a CoAP resource path matches a given URI.

Builds on strcmp() with rules specific to URI path matching

This function is not intended for application use.

# struct `coap_hdr_t` 

Raw CoAP PDU header structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`ver_t_tkl`](#structcoap__hdr__t_1a7b1cc0722e22d7c646156c730d17b374) | version, token, token length
`public uint8_t `[`code`](#structcoap__hdr__t_1ad48db11a53a6213f5b1533eeeb224ec1) | CoAP code (e.g.m 205)
`public uint16_t `[`id`](#structcoap__hdr__t_1adbce2dad56a887dae56403714c92314b) | Req/resp ID

## Members

#### `public uint8_t `[`ver_t_tkl`](#structcoap__hdr__t_1a7b1cc0722e22d7c646156c730d17b374) 

version, token, token length

#### `public uint8_t `[`code`](#structcoap__hdr__t_1ad48db11a53a6213f5b1533eeeb224ec1) 

CoAP code (e.g.m 205)

#### `public uint16_t `[`id`](#structcoap__hdr__t_1adbce2dad56a887dae56403714c92314b) 

Req/resp ID

# struct `coap_optpos_t` 

CoAP option array entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`opt_num`](#structcoap__optpos__t_1aef81d19738f6cf41851ec8e18f3dd555) | full CoAP option number
`public uint16_t `[`offset`](#structcoap__optpos__t_1a4defca54e66d1a6158d77290e5010c20) | offset in packet

## Members

#### `public uint16_t `[`opt_num`](#structcoap__optpos__t_1aef81d19738f6cf41851ec8e18f3dd555) 

full CoAP option number

#### `public uint16_t `[`offset`](#structcoap__optpos__t_1a4defca54e66d1a6158d77290e5010c20) 

offset in packet

# struct `coap_pkt_t` 

CoAP PDU parsing context structure.

When this struct is used to assemble the header, `payload` is used as the write pointer and `payload_len` contains the number of free bytes left in then packet buffer pointed to by [coap_pkt_t::hdr](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t_1aa1ffc04c491c11cb0972bd95cb3b3bd8)

When the header was written, `payload` must not be changed, it must remain pointing to the end of the header. `payload_len` must then be set to the size of the payload that was further copied into the packet buffer, after the header.

[coap_pkt_t::snips](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t_1adeac729fdd7d17699d173936839ec2a9) can be used to attach further payload buffers without copying them into the CoAP packet buffer. If there are any, they will be attached in order after the last payload byte (or header byte) in the original CoAP packet buffer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`coap_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__hdr__t)` * `[`hdr`](#structcoap__pkt__t_1aa1ffc04c491c11cb0972bd95cb3b3bd8) | pointer to raw packet
`public uint8_t * `[`payload`](#structcoap__pkt__t_1a296b66b050d0be92094daf2aba8d730a) | pointer to end of the header
`public `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`snips`](#structcoap__pkt__t_1adeac729fdd7d17699d173936839ec2a9) | payload snips (optional)
`public uint16_t `[`payload_len`](#structcoap__pkt__t_1a42765c97fe9d014c311b6b733827a17b) | length of payload
`public uint16_t `[`options_len`](#structcoap__pkt__t_1abb6e6d0d60c2154b84b3a61e0cddab56) | length of options array
`public `[`coap_optpos_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__optpos__t)` `[`options`](#structcoap__pkt__t_1a1fd14eff28ce9e0e6368956ebc927378) | option offset array
`public  `[`BITFIELD`](#structcoap__pkt__t_1ac3b754b2ae7fd7f02cc032dbacc34728)`(opt_crit,`[`CONFIG_NANOCOAP_NOPTS_MAX`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__conf_1ga8eb11ff8a82bff261d81101542d123d3)`)` | unhandled critical option

## Members

#### `public `[`coap_hdr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__hdr__t)` * `[`hdr`](#structcoap__pkt__t_1aa1ffc04c491c11cb0972bd95cb3b3bd8) 

pointer to raw packet

#### `public uint8_t * `[`payload`](#structcoap__pkt__t_1a296b66b050d0be92094daf2aba8d730a) 

pointer to end of the header

#### `public `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * `[`snips`](#structcoap__pkt__t_1adeac729fdd7d17699d173936839ec2a9) 

payload snips (optional)

#### `public uint16_t `[`payload_len`](#structcoap__pkt__t_1a42765c97fe9d014c311b6b733827a17b) 

length of payload

#### `public uint16_t `[`options_len`](#structcoap__pkt__t_1abb6e6d0d60c2154b84b3a61e0cddab56) 

length of options array

#### `public `[`coap_optpos_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__optpos__t)` `[`options`](#structcoap__pkt__t_1a1fd14eff28ce9e0e6368956ebc927378) 

option offset array

#### `public  `[`BITFIELD`](#structcoap__pkt__t_1ac3b754b2ae7fd7f02cc032dbacc34728)`(opt_crit,`[`CONFIG_NANOCOAP_NOPTS_MAX`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap__conf_1ga8eb11ff8a82bff261d81101542d123d3)`)` 

unhandled critical option

# struct `coap_resource_t` 

Type for CoAP resource entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`path`](#structcoap__resource__t_1a1d11fb4d19d132be8091d6ba43558b79) | URI path of resource
`public `[`coap_method_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga550b61f499bfec049a522ef0b26b6f8d)` `[`methods`](#structcoap__resource__t_1a5aa955ab88b29ad7e1d481bffa843fe3) | OR'ed methods this resource allows.
`public `[`coap_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga8b44fbd36baf301f3bf531d1fcfadf9f)` `[`handler`](#structcoap__resource__t_1aeebf86de786a4b4cd41f480891b08cc5) | ptr to resource handler
`public void * `[`context`](#structcoap__resource__t_1aef7bce93888bb2ae217cdb5e983622ce) | ptr to user defined context data

## Members

#### `public const char * `[`path`](#structcoap__resource__t_1a1d11fb4d19d132be8091d6ba43558b79) 

URI path of resource

#### `public `[`coap_method_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga550b61f499bfec049a522ef0b26b6f8d)` `[`methods`](#structcoap__resource__t_1a5aa955ab88b29ad7e1d481bffa843fe3) 

OR'ed methods this resource allows.

#### `public `[`coap_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__nanocoap_1ga8b44fbd36baf301f3bf531d1fcfadf9f)` `[`handler`](#structcoap__resource__t_1aeebf86de786a4b4cd41f480891b08cc5) 

ptr to resource handler

#### `public void * `[`context`](#structcoap__resource__t_1aef7bce93888bb2ae217cdb5e983622ce) 

ptr to user defined context data

# struct `coap_resource_subtree_t` 

Type for CoAP resource subtrees.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resources`](#structcoap__resource__subtree__t_1ad4d90a458570d41a154dfdeb5bb4c72a) | ptr to resource array
`public const size_t `[`resources_numof`](#structcoap__resource__subtree__t_1a7129d7508eb722adb2b30377e6475c84) | number of entries in array

## Members

#### `public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resources`](#structcoap__resource__subtree__t_1ad4d90a458570d41a154dfdeb5bb4c72a) 

ptr to resource array

#### `public const size_t `[`resources_numof`](#structcoap__resource__subtree__t_1a7129d7508eb722adb2b30377e6475c84) 

number of entries in array

# struct `_coap_request_ctx` 

CoAP resource request handler context.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resource`](#struct__coap__request__ctx_1a4918c2fdaab3f786b698ffcc8950144d) | resource of the request
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`remote`](#struct__coap__request__ctx_1abf265feb3fea2a1371a5779ca068ba8c) | remote endpoint of the request
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`local`](#struct__coap__request__ctx_1a33fe7c4857c65acbc0331d5f2aa68baa) | local endpoint of the request
`public uint32_t `[`tl_type`](#struct__coap__request__ctx_1ad150103789a6da77a688d372540cc929) | transport the packet was received over

## Members

#### `public const `[`coap_resource_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__resource__t)` * `[`resource`](#struct__coap__request__ctx_1a4918c2fdaab3f786b698ffcc8950144d) 

resource of the request

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`remote`](#struct__coap__request__ctx_1abf265feb3fea2a1371a5779ca068ba8c) 

remote endpoint of the request

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * `[`local`](#struct__coap__request__ctx_1a33fe7c4857c65acbc0331d5f2aa68baa) 

local endpoint of the request

#### `public uint32_t `[`tl_type`](#struct__coap__request__ctx_1ad150103789a6da77a688d372540cc929) 

transport the packet was received over

**See also**: [gcoap_socket_type_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1) for values. 

[gcoap_socket_type_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga34f7408f6a5a8313a1937bf2697fdaf1) can not be used, as this would cyclically include the [GCoAP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap) header.

# struct `coap_block1_t` 

Block1 helper struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`offset`](#structcoap__block1__t_1a2bdc3f271f79437e921d828e16ba99e1) | offset of received data
`public uint32_t `[`blknum`](#structcoap__block1__t_1a204506499b7d199da7b9885c73fcf7a1) | block number
`public uint8_t `[`szx`](#structcoap__block1__t_1a47a36fbc148bcbf6f051d17904430242) | szx value
`public int8_t `[`more`](#structcoap__block1__t_1a04425612a1db3d45e2ac56a5afb96b80) | -1 for no option, 0 for last block, 1 for more blocks coming

## Members

#### `public size_t `[`offset`](#structcoap__block1__t_1a2bdc3f271f79437e921d828e16ba99e1) 

offset of received data

#### `public uint32_t `[`blknum`](#structcoap__block1__t_1a204506499b7d199da7b9885c73fcf7a1) 

block number

#### `public uint8_t `[`szx`](#structcoap__block1__t_1a47a36fbc148bcbf6f051d17904430242) 

szx value

#### `public int8_t `[`more`](#structcoap__block1__t_1a04425612a1db3d45e2ac56a5afb96b80) 

-1 for no option, 0 for last block, 1 for more blocks coming

# struct `coap_block_slicer_t` 

Blockwise transfer helper struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public size_t `[`start`](#structcoap__block__slicer__t_1ab535aa117660be128c93472f2954da7e) | Start offset of the current block
`public size_t `[`end`](#structcoap__block__slicer__t_1aac91e745b6c6d45931cb3b50774da467) | End offset of the current block
`public size_t `[`cur`](#structcoap__block__slicer__t_1af4edc59a4de823f86c75edcc69d62ab1) | Offset of the generated content
`public uint8_t * `[`opt`](#structcoap__block__slicer__t_1a1ebc821a26c0f8766f1d761c2b335484) | Pointer to the placed option

## Members

#### `public size_t `[`start`](#structcoap__block__slicer__t_1ab535aa117660be128c93472f2954da7e) 

Start offset of the current block

#### `public size_t `[`end`](#structcoap__block__slicer__t_1aac91e745b6c6d45931cb3b50774da467) 

End offset of the current block

#### `public size_t `[`cur`](#structcoap__block__slicer__t_1af4edc59a4de823f86c75edcc69d62ab1) 

Offset of the generated content

#### `public uint8_t * `[`opt`](#structcoap__block__slicer__t_1a1ebc821a26c0f8766f1d761c2b335484) 

Pointer to the placed option

