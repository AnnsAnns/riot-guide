---
title: api-net_gcoap_forward_proxy_thread.md
description: api-net_gcoap_forward_proxy_thread.md
---
# group `net_gcoap_forward_proxy_thread` 

Forward proxy thread implementation for GCoAP.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GCOAP_PROXY_STACK_SIZE`](#group__net__gcoap__forward__proxy__thread_1gaa0fa5de23875301c3e582da9d9bb9891)            | Stack size for the forward proxy thread.
`enum `[`@399`](#group__net__gcoap__forward__proxy__thread_1ga1759c5bab16583deda448a1237a3baf1)            | Definition of forward proxy thread msgs.
`public void `[`gcoap_forward_proxy_thread_init`](#group__net__gcoap__forward__proxy__thread_1ga2cdcce917ab1f2c75b435a69c8aab980)`(void)`            | Initialize the forward proxy thread.
`public int `[`gcoap_forward_proxy_req_send`](#group__net__gcoap__forward__proxy__thread_1gad4ac637b970b18b44a0697c54b1d8844)`(`[`client_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap_forward_proxy_thread.md#structclient__ep__t)` * cep)`            | Forward the CoAP request to the server The client endpoint is passed as an argument and freed if the send failed.
`struct `[`client_ep_t`](#structclient__ep__t) | client ep structure

## Members

#### `define `[`GCOAP_PROXY_STACK_SIZE`](#group__net__gcoap__forward__proxy__thread_1gaa0fa5de23875301c3e582da9d9bb9891) 

Stack size for the forward proxy thread.

#### `enum `[`@399`](#group__net__gcoap__forward__proxy__thread_1ga1759c5bab16583deda448a1237a3baf1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GCOAP_FORWARD_PROXY_MSG_SEND            | 

Definition of forward proxy thread msgs.

#### `public void `[`gcoap_forward_proxy_thread_init`](#group__net__gcoap__forward__proxy__thread_1ga2cdcce917ab1f2c75b435a69c8aab980)`(void)` 

Initialize the forward proxy thread.

#### `public int `[`gcoap_forward_proxy_req_send`](#group__net__gcoap__forward__proxy__thread_1gad4ac637b970b18b44a0697c54b1d8844)`(`[`client_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gcoap_forward_proxy_thread.md#structclient__ep__t)` * cep)` 

Forward the CoAP request to the server The client endpoint is passed as an argument and freed if the send failed.

#### Parameters
* `cep` client endpoint 

#### Returns
[gcoap_req_send](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1ga3ea1c9c80e663d07e8b8fddc7e272d07)

# struct `client_ep_t` 

client ep structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` `[`pdu`](#structclient__ep__t_1a72e598aeceeccd1da7d0240d75b63ed8) | forward CoAP PDU
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`server_ep`](#structclient__ep__t_1a32c75662cbd897871561cac476fe9485) | forward Server endpoint
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`ep`](#structclient__ep__t_1a6db347a112149d5000d65ef58cd79a0d) | client endpoint
`public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`proxy_ep`](#structclient__ep__t_1a2da6320ad9b2de9a4312b168b9b4ed4b) | proxy endpoint
`public uint16_t `[`mid`](#structclient__ep__t_1a943945e8689471655bedc597a5e323d4) | message ID
`public uint8_t `[`flags`](#structclient__ep__t_1af6e2bdeda7cac85d87d8d3c7063a1b7b) | client flags
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`empty_ack_timer`](#structclient__ep__t_1ad34fb5c291bd6bde7e579685515108c5) | empty ACK timer
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event`](#structclient__ep__t_1af07308e1845c5c45b8c8206efd806d6c) | client event

## Members

#### `public `[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` `[`pdu`](#structclient__ep__t_1a72e598aeceeccd1da7d0240d75b63ed8) 

forward CoAP PDU

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`server_ep`](#structclient__ep__t_1a32c75662cbd897871561cac476fe9485) 

forward Server endpoint

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`ep`](#structclient__ep__t_1a6db347a112149d5000d65ef58cd79a0d) 

client endpoint

#### `public `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` `[`proxy_ep`](#structclient__ep__t_1a2da6320ad9b2de9a4312b168b9b4ed4b) 

proxy endpoint

#### `public uint16_t `[`mid`](#structclient__ep__t_1a943945e8689471655bedc597a5e323d4) 

message ID

#### `public uint8_t `[`flags`](#structclient__ep__t_1af6e2bdeda7cac85d87d8d3c7063a1b7b) 

client flags

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`empty_ack_timer`](#structclient__ep__t_1ad34fb5c291bd6bde7e579685515108c5) 

empty ACK timer

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event`](#structclient__ep__t_1af07308e1845c5c45b8c8206efd806d6c) 

client event

