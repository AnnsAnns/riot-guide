---
title: api-net_gcoap_forward_proxy.md
description: api-net_gcoap_forward_proxy.md
---
# group `net_gcoap_forward_proxy` 

Forward proxy implementation for GCoAP.

Does not support CoAPS yet. 

**See also**: [RFC 7252 ](https://tools.ietf.org/html/rfc7252#section-5.7.2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`gcoap_forward_proxy_init`](#group__net__gcoap__forward__proxy_1ga4499f306a4d6243d60429cd0ed55fec4)`(void)`            | Registers a listener for forward proxy operation.
`public int `[`gcoap_forward_proxy_request_process`](#group__net__gcoap__forward__proxy_1ga2e6401e45d57804a01350d7583044dbf)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * client,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local)`            | Handles proxied requests.
`public void `[`gcoap_forward_proxy_find_req_memo`](#group__net__gcoap__forward__proxy_1ga0221c12198301eef715d1bed0cc41e58)`(`[`gcoap_request_memo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaab3719619577e1617098101d5c96c04e)` ** memo_ptr,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * src_pdu,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Finds the memo for an outstanding request within the _coap_state.open_reqs array.

## Members

#### `public void `[`gcoap_forward_proxy_init`](#group__net__gcoap__forward__proxy_1ga4499f306a4d6243d60429cd0ed55fec4)`(void)` 

Registers a listener for forward proxy operation.

#### `public int `[`gcoap_forward_proxy_request_process`](#group__net__gcoap__forward__proxy_1ga2e6401e45d57804a01350d7583044dbf)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * client,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * local)` 

Handles proxied requests.

#### Parameters
* `pkt` Packet to parse 

* `client` Endpoint of the client 

* `local` Local endpoint

#### Returns
0 if parsing was successful 

#### Returns
-ENOTSUP if the forward proxy is not compiled in 

#### Returns
-ENOENT if `pkt` does not contain a Proxy-Uri option 

#### Returns
-EINVAL if Proxy-Uri is malformed

#### `public void `[`gcoap_forward_proxy_find_req_memo`](#group__net__gcoap__forward__proxy_1ga0221c12198301eef715d1bed0cc41e58)`(`[`gcoap_request_memo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gcoap_1gaab3719619577e1617098101d5c96c04e)` ** memo_ptr,`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * src_pdu,const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Finds the memo for an outstanding request within the _coap_state.open_reqs array.

Matches on remote endpoint and token.

#### Parameters
* `memo_ptr` Registered request memo, or NULL if not found 

* `src_pdu` PDU for token to match 

* `remote` Remote endpoint to match

