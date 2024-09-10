---
title: api-lwm2m_client.md
description: api-lwm2m_client.md
---
# group `lwm2m_client` 

Wakaama adaption to RIOT for implementing a LwM2M client.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_CLIENT_RCV_BUFFER_SIZE`](#group__lwm2m__client_1ga936cbff14ea725b135e3e936be4a0d9c)            | Size of the buffer for the UDP packet reception.
`define `[`LWM2M_CLIENT_REBOOT_TIME`](#group__lwm2m__client_1gafbbae2dedd13957b7f02e08a162ef956)            | Time in seconds to wait until reboot after a server request.
`define `[`LWM2M_CLIENT_MIN_REFRESH_TIME`](#group__lwm2m__client_1ga9eb3d7e358a28bede26dc8889004c239)            | Time in seconds to wait until LwM2M is refreshed.
`enum `[`lwm2m_client_connection_type_t`](#group__lwm2m__client_1gaed8648d20aa3548bb259e10508934125)            | Type of connection to the LwM2M server.
`public lwm2m_context_t * `[`lwm2m_client_run`](#group__lwm2m__client_1ga91cd7f15fad4b58114bb75a946297336)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,lwm2m_object_t * obj_list,uint16_t obj_numof)`            | Starts a LwM2M client.
`public void `[`lwm2m_client_init`](#group__lwm2m__client_1ga7496736a9754f07edea52b0e4ab2e9c4)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initializes a LwM2M client.
`public inline static lwm2m_context_t * `[`lwm2m_client_get_ctx`](#group__lwm2m__client_1gaca7a9ef19d3f2f485ca937954cef62f8)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Returns the LwM2M context of a LwM2M client.
`public void `[`lwm2m_client_refresh_dtls_credentials`](#group__lwm2m__client_1ga6f6cf3f401f55d5fcb218ba68268c73a)`(void)`            | Refreshes the client available credentials using the currently registered security objects.
`public void `[`lwm2m_client_add_credential`](#group__lwm2m__client_1ga91082db9b3d54a4b7501c9e4e9e29106)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)`            | Adds a credential tag to be used with the LwM2M DTLS sock.
`public void `[`lwm2m_client_remove_credential`](#group__lwm2m__client_1ga8f6de0bb8bfe101e33f78fced32c51dc)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)`            | Removes a credential tag from the available to use with the LwM2M DTLS sock.
`struct `[`lwm2m_client_connection`](#structlwm2m__client__connection) | Connection to server descriptor.
`struct `[`lwm2m_client_data_t`](#structlwm2m__client__data__t) | LwM2M client descriptor.

## Members

#### `define `[`LWM2M_CLIENT_RCV_BUFFER_SIZE`](#group__lwm2m__client_1ga936cbff14ea725b135e3e936be4a0d9c) 

Size of the buffer for the UDP packet reception.

#### `define `[`LWM2M_CLIENT_REBOOT_TIME`](#group__lwm2m__client_1gafbbae2dedd13957b7f02e08a162ef956) 

Time in seconds to wait until reboot after a server request.

#### `define `[`LWM2M_CLIENT_MIN_REFRESH_TIME`](#group__lwm2m__client_1ga9eb3d7e358a28bede26dc8889004c239) 

Time in seconds to wait until LwM2M is refreshed.

This time is used as the timeout for receiving UDP packets and will be the maximum time to wait between calls to wakaama core.

#### `enum `[`lwm2m_client_connection_type_t`](#group__lwm2m__client_1gaed8648d20aa3548bb259e10508934125) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LWM2M_CLIENT_CONN_UDP            | UDP.
LWM2M_CLIENT_CONN_DTLS            | DTLS over UDP.

Type of connection to the LwM2M server.

#### `public lwm2m_context_t * `[`lwm2m_client_run`](#group__lwm2m__client_1ga91cd7f15fad4b58114bb75a946297336)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,lwm2m_object_t * obj_list,uint16_t obj_numof)` 

Starts a LwM2M client.

#### Parameters
* `client_data` Pointer to a LwM2M client data descriptor 

* `obj_list` List of LwM2M objects to be registered 

* `obj_numof` Number of objects in `obj_list`

#### Returns
Context of the LwM2M client

#### `public void `[`lwm2m_client_init`](#group__lwm2m__client_1ga7496736a9754f07edea52b0e4ab2e9c4)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initializes a LwM2M client.

This functions initializes the memory allocation and is needed before calling any object creation (i.e. any call to lwm2m_malloc).

#### Parameters
* `client_data` Pointer to a LwM2M client data descriptor

#### `public inline static lwm2m_context_t * `[`lwm2m_client_get_ctx`](#group__lwm2m__client_1gaca7a9ef19d3f2f485ca937954cef62f8)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Returns the LwM2M context of a LwM2M client.

#### Parameters
* `client_data` pointer to the LwM2M client descriptor

#### Returns
Pointer to the LwM2M context

#### `public void `[`lwm2m_client_refresh_dtls_credentials`](#group__lwm2m__client_1ga6f6cf3f401f55d5fcb218ba68268c73a)`(void)` 

Refreshes the client available credentials using the currently registered security objects.

Only available when using the module `wakaama_client_dtls`.

#### `public void `[`lwm2m_client_add_credential`](#group__lwm2m__client_1ga91082db9b3d54a4b7501c9e4e9e29106)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)` 

Adds a credential tag to be used with the LwM2M DTLS sock.

If the tag is already available it will not be added again. Only available when using the module `wakaama_client_dtls`. 

#### Parameters
* `tag` Tag to add.

#### `public void `[`lwm2m_client_remove_credential`](#group__lwm2m__client_1ga8f6de0bb8bfe101e33f78fced32c51dc)`(`[`credman_tag_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__credman_1ga89fc115fe10d879da7faf1c0d0f901a7)` tag)` 

Removes a credential tag from the available to use with the LwM2M DTLS sock.

Only available when using the module `wakaama_client_dtls`. 

#### Parameters
* `tag` Tag to remove.

# struct `lwm2m_client_connection` 

Connection to server descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`lwm2m_client_connection`](#structlwm2m__client__connection)` * `[`next`](#structlwm2m__client__connection_1ade3e37532c65fdf734325be80b506cda) | pointer to the next connection
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structlwm2m__client__connection_1ac094ed3b515bf94178b5a69b8d70eaed) | remote endpoint
`public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` `[`session`](#structlwm2m__client__connection_1a270bd002756952c8203f3ae6b59db562) | DTLS session (needs wakaama_client_dtls module)
`public `[`lwm2m_client_connection_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__client_1gaed8648d20aa3548bb259e10508934125)` `[`type`](#structlwm2m__client__connection_1a49d9da8b679c431fa958848db902b28c) | type of connection
`public time_t `[`last_send`](#structlwm2m__client__connection_1a12203a2abc254b06ca74ff6888a66894) | last sent packet to the server

## Members

#### `public struct `[`lwm2m_client_connection`](#structlwm2m__client__connection)` * `[`next`](#structlwm2m__client__connection_1ade3e37532c65fdf734325be80b506cda) 

pointer to the next connection

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`remote`](#structlwm2m__client__connection_1ac094ed3b515bf94178b5a69b8d70eaed) 

remote endpoint

#### `public `[`sock_dtls_session_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__dtls_1ga8595b9670004ad4afc5738109ecce649)` `[`session`](#structlwm2m__client__connection_1a270bd002756952c8203f3ae6b59db562) 

DTLS session (needs wakaama_client_dtls module)

#### `public `[`lwm2m_client_connection_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__client_1gaed8648d20aa3548bb259e10508934125)` `[`type`](#structlwm2m__client__connection_1a49d9da8b679c431fa958848db902b28c) 

type of connection

#### `public time_t `[`last_send`](#structlwm2m__client__connection_1a12203a2abc254b06ca74ff6888a66894) 

last sent packet to the server

# struct `lwm2m_client_data_t` 

LwM2M client descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structlwm2m__client__data__t_1a24cb1f0d2bad2067676f0ba575568728) | PID of the client thread.
`public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` `[`sock`](#structlwm2m__client__data__t_1a2bdf4346b5a74edb2f524bd9aa877836) | UDP server sock.
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local_ep`](#structlwm2m__client__data__t_1a89be112e510e45a30307bfe2b3878de7) | Local endpoint.
`public lwm2m_context_t * `[`lwm2m_ctx`](#structlwm2m__client__data__t_1acc5911658c7c4d7b417fc0a5a3e93609) | LwM2M context.
`public `[`lwm2m_client_connection_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__client_1ga92e0ff1421ce11a6db7e53bb79f76c81)` * `[`conn_list`](#structlwm2m__client__data__t_1a040cc136e99069ae2f5316118302d2fd) | LwM2M connections list.

## Members

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structlwm2m__client__data__t_1a24cb1f0d2bad2067676f0ba575568728) 

PID of the client thread.

#### `public `[`sock_udp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga3cb61a4ee66c9c235e4f22860658698c)` `[`sock`](#structlwm2m__client__data__t_1a2bdf4346b5a74edb2f524bd9aa877836) 

UDP server sock.

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`local_ep`](#structlwm2m__client__data__t_1a89be112e510e45a30307bfe2b3878de7) 

Local endpoint.

#### `public lwm2m_context_t * `[`lwm2m_ctx`](#structlwm2m__client__data__t_1acc5911658c7c4d7b417fc0a5a3e93609) 

LwM2M context.

#### `public `[`lwm2m_client_connection_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__client_1ga92e0ff1421ce11a6db7e53bb79f76c81)` * `[`conn_list`](#structlwm2m__client__data__t_1a040cc136e99069ae2f5316118302d2fd) 

LwM2M connections list.

