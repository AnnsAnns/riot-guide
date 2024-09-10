---
title: api-net_cord_common.md
description: api-net_cord_common.md
---
# group `net_cord_common` 

Shared functionality for CoRE Resource Directory endpoints.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`cord_common_init`](#group__net__cord__common_1ga3a87d981038ff09be3fc9c3a0cf4599f)`(void)`            | Generate unique endpoint identifier (ep)
`public inline static const char * `[`cord_common_get_ep`](#group__net__cord__common_1ga0f257b9c7c6f6a158c0b3e5a7c7124f7)`(void)`            | Get the local endpoint identifier.
`public int `[`cord_common_add_qstring`](#group__net__cord__common_1ga432169d3fee17791265d3a424129b73f)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt)`            | Add selected query string options to a gcoap request.

## Members

#### `public void `[`cord_common_init`](#group__net__cord__common_1ga3a87d981038ff09be3fc9c3a0cf4599f)`(void)` 

Generate unique endpoint identifier (ep)

#### `public inline static const char * `[`cord_common_get_ep`](#group__net__cord__common_1ga0f257b9c7c6f6a158c0b3e5a7c7124f7)`(void)` 

Get the local endpoint identifier.

#### `public int `[`cord_common_add_qstring`](#group__net__cord__common_1ga432169d3fee17791265d3a424129b73f)`(`[`coap_pkt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_nanocoap.md#structcoap__pkt__t)` * pkt)` 

Add selected query string options to a gcoap request.

This function adds:

* `ep` -> as extracted by [cord_common_get_ep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__common_1ga0f257b9c7c6f6a158c0b3e5a7c7124f7)

* [optional] `lt` -> if defined by CONFIG_CORD_LT

* [optional] 'd' -> if defined by CORD_D

#### Returns
0 on success 

#### Returns
<0 on error

