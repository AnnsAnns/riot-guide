---
title: api-fido2_ctap.md
description: api-fido2_ctap.md
---
# group `fido2_ctap` 

FIDO2 CTAP.

The Client-to-Authenticator Protocol (CTAP) is an application layer protocol for the communication between an authenticator and a host.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CTAP_MAX_MSG_SIZE`](#group__fido2__ctap_1ga5d925ee5e930f90e8ff67c0529e77bf7)            | CTAP max message size.
`public int `[`fido2_ctap_init`](#group__fido2__ctap_1gaae7305c1b8d79b426524d4dff1bab1bc)`(void)`            | Initialize ctap.
`public size_t `[`fido2_ctap_handle_request`](#group__fido2__ctap_1gaa11e7a80836b0aa209685a09ec9c507f)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)`            | Handle CBOR encoded ctap request.
`public size_t `[`fido2_ctap_make_credential`](#group__fido2__ctap_1gaa1bb62cdb114afdc23d7fb07bb6f9ee7)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)`            | MakeCredential method.
`public size_t `[`fido2_ctap_get_assertion`](#group__fido2__ctap_1gac3d38648ecd8448272fc06b5acb6d843)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)`            | GetAssertion method.
`public size_t `[`fido2_ctap_get_next_assertion`](#group__fido2__ctap_1gae340f7ca6da21f39509e537eea29fae3)`(`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)`            | GetNextAssertion method.
`public size_t `[`fido2_ctap_get_info`](#group__fido2__ctap_1ga74bf5e2144913fdadd390cc99e641d18)`(`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)`            | GetInfo method.
`public size_t `[`fido2_ctap_client_pin`](#group__fido2__ctap_1gaafe7e0cd31c904be702f60bde57d7f46)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)`            | ClientPIN method.
`public size_t `[`fido2_ctap_reset`](#group__fido2__ctap_1gafe260c94a2ffbde6f26822aab145fb6c)`(`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)`            | Reset method.
`struct `[`ctap_req_t`](#structctap__req__t) | CTAP request struct.
`struct `[`ctap_resp_t`](#structctap__resp__t) | CTAP response struct.

## Members

#### `define `[`CTAP_MAX_MSG_SIZE`](#group__fido2__ctap_1ga5d925ee5e930f90e8ff67c0529e77bf7) 

CTAP max message size.

CTAP specification (version 20190130) section 6

#### `public int `[`fido2_ctap_init`](#group__fido2__ctap_1gaae7305c1b8d79b426524d4dff1bab1bc)`(void)` 

Initialize ctap.

#### Returns
0 for success 

#### Returns
negative error code otherwise

#### `public size_t `[`fido2_ctap_handle_request`](#group__fido2__ctap_1gaa11e7a80836b0aa209685a09ec9c507f)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)` 

Handle CBOR encoded ctap request.

This is a convenience function that checks `req->method` and calls the appropriate CTAP method handler function

#### Parameters
* `req` request struct 

* `resp` response struct

#### Returns
Length of `resp->data`

#### `public size_t `[`fido2_ctap_make_credential`](#group__fido2__ctap_1gaa1bb62cdb114afdc23d7fb07bb6f9ee7)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)` 

MakeCredential method.

CTAP specification (version 20190130) section 5.1

#### Parameters
* `req` CTAP request 

* `resp` CTAP response

#### Returns
Length of `resp->data`

#### `public size_t `[`fido2_ctap_get_assertion`](#group__fido2__ctap_1gac3d38648ecd8448272fc06b5acb6d843)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)` 

GetAssertion method.

CTAP specification (version 20190130) section 5.2

#### Parameters
* `req` CTAP request 

* `resp` CTAP response

#### Returns
Length of `resp->data`

#### `public size_t `[`fido2_ctap_get_next_assertion`](#group__fido2__ctap_1gae340f7ca6da21f39509e537eea29fae3)`(`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)` 

GetNextAssertion method.

CTAP specification (version 20190130) section 5.3

#### Parameters
* `resp` CTAP response

#### Returns
Length of `resp->data`

#### `public size_t `[`fido2_ctap_get_info`](#group__fido2__ctap_1ga74bf5e2144913fdadd390cc99e641d18)`(`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)` 

GetInfo method.

CTAP specification (version 20190130) section 5.4

#### Parameters
* `resp` CTAP response

#### Returns
Length of `resp->data`

#### `public size_t `[`fido2_ctap_client_pin`](#group__fido2__ctap_1gaafe7e0cd31c904be702f60bde57d7f46)`(`[`ctap_req_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__req__t)` * req,`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)` 

ClientPIN method.

CTAP specification (version 20190130) section 5.5

#### Parameters
* `req` CTAP request 

* `resp` CTAP response

#### Returns
Length of `resp->data`

#### `public size_t `[`fido2_ctap_reset`](#group__fido2__ctap_1gafe260c94a2ffbde6f26822aab145fb6c)`(`[`ctap_resp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-fido2_ctap.md#structctap__resp__t)` * resp)` 

Reset method.

CTAP specification (version 20190130) section 5.6

#### Parameters
* `resp` CTAP response

#### Returns
Length of `resp->data`

# struct `ctap_req_t` 

CTAP request struct.

CTAP specification (version 20190130) section 6.1

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`buf`](#structctap__req__t_1a395de2e09ad769a1448d3de41c1986a3) | Buffer holding CBOR encoded data.
`public size_t `[`len`](#structctap__req__t_1ad64c0219efe2293c67838bbab295e0f3) | Length of buf.
`public uint8_t `[`method`](#structctap__req__t_1a9a01463e033ee25e93b928b4663b8c42) | CTAP method identitifer.

## Members

#### `public uint8_t * `[`buf`](#structctap__req__t_1a395de2e09ad769a1448d3de41c1986a3) 

Buffer holding CBOR encoded data.

#### `public size_t `[`len`](#structctap__req__t_1ad64c0219efe2293c67838bbab295e0f3) 

Length of buf.

#### `public uint8_t `[`method`](#structctap__req__t_1a9a01463e033ee25e93b928b4663b8c42) 

CTAP method identitifer.

# struct `ctap_resp_t` 

CTAP response struct.

CTAP specification (version 20190130) section 6.2

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`status`](#structctap__resp__t_1a872ea604c2b3bda548e041fc0705a475) | response status
`public uint8_t `[`data`](#structctap__resp__t_1a50fbe6937daf3bac34641a37188b9f3f) | response data

## Members

#### `public uint8_t `[`status`](#structctap__resp__t_1a872ea604c2b3bda548e041fc0705a475) 

response status

#### `public uint8_t `[`data`](#structctap__resp__t_1a50fbe6937daf3bac34641a37188b9f3f) 

response data

