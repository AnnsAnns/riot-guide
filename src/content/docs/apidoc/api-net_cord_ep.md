---
title: api-net_cord_ep.md
description: api-net_cord_ep.md
---
# group `net_cord_ep` 

Library for using RIOT as CoRE Resource Directory endpoint.

This module implements a CoRE Resource Directory endpoint library, that allows RIOT nodes to register themselves with resource directories. It implements the standard endpoint functionality as defined in draft-ietf-core-resource-directory-27. 
**See also**: [https://datatracker.ietf.org/doc/html/rfc9176](https://datatracker.ietf.org/doc/html/rfc9176)

Design Decisions

* all operations provided by this module are fully synchronous, meaning that the functions will block until an operation is successful or will time out

* the implementation limits the endpoint to be registered with a single RD at any point in time

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@345`](#group__net__cord__ep_1gace1ea5ceca73af21930eb45f54580537)            | Return values and error codes used by this module.
`public int `[`cord_ep_discover_regif`](#group__net__cord__ep_1gaf2515624046c34accfdee105f636309e)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,char * regif,size_t maxlen)`            | Discover the registration interface resource of a RD.
`public int `[`cord_ep_register`](#group__net__cord__ep_1ga0470e99af700e45a340daf7bb073a55e)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,const char * regif)`            | Initiate the node registration by sending an empty push.
`public int `[`cord_ep_update`](#group__net__cord__ep_1ga2b472bd5f7d05fe20ebeb13c76064350)`(void)`            | Update our current entry at the RD.
`public int `[`cord_ep_remove`](#group__net__cord__ep_1ga34269ab581985b36385ac6b555146579)`(void)`            | Unregister from a given RD server.
`public void `[`cord_ep_dump_status`](#group__net__cord__ep_1ga00aa936cc27e248dda3bf49a3ecdf979)`(void)`            | Dump the current RD connection status to STDIO (for debugging)

## Members

#### `enum `[`@345`](#group__net__cord__ep_1gace1ea5ceca73af21930eb45f54580537) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CORD_EP_OK            | everything went as expected
CORD_EP_TIMEOUT            | no response from the network
CORD_EP_ERR            | internal error or invalid reply
CORD_EP_NORD            | not connected to an RD
CORD_EP_OVERFLOW            | internal buffers can not handle input

Return values and error codes used by this module.

#### `public int `[`cord_ep_discover_regif`](#group__net__cord__ep_1gaf2515624046c34accfdee105f636309e)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,char * regif,size_t maxlen)` 

Discover the registration interface resource of a RD.

#### Parameters
* `remote` remote endpoint of the target RD 

* `regif` the registration interface is written to this buffer 

* `maxlen` size of `regif`

#### Returns
CORD_EP_OK on success 

#### Returns
CORD_EP_TIMEOUT if the discovery request times out 

#### Returns
CORD_EP_NORD if addressed endpoint is not a RD 

#### Returns
CORD_EP_ERR on any other internal error

#### `public int `[`cord_ep_register`](#group__net__cord__ep_1ga0470e99af700e45a340daf7bb073a55e)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote,const char * regif)` 

Initiate the node registration by sending an empty push.

* if registration fails (e.g. timeout), we are not associated with any RD anymore (even if we have been before we called cord_ep_register)

In case a multicast address is given, the `regif` parameter MUST be NULL. The first RD responding to the request will be chosen and all replies from other RD servers are ignored.

#### Parameters
* `remote` remote endpoint of the target RD 

* `regif` registration interface resource of the RD, it will be discovered automatically when set to NULL

#### Returns
CORD_EP_OK on success 

#### Returns
CORD_EP_TIMEOUT on registration timeout 

#### Returns
CORD_EP_NORD if addressed endpoint is not a RD 

#### Returns
CORD_EP_OVERFLOW if `regif` does not fit into internal buffer 

#### Returns
CORD_EP_ERR on any other internal error

#### `public int `[`cord_ep_update`](#group__net__cord__ep_1ga2b472bd5f7d05fe20ebeb13c76064350)`(void)` 

Update our current entry at the RD.

#### Returns
CORD_EP_OK on success 

#### Returns
CORD_EP_TIMEOUT if the update request times out 

#### Returns
CORD_EP_ERR on any other internal error

#### `public int `[`cord_ep_remove`](#group__net__cord__ep_1ga34269ab581985b36385ac6b555146579)`(void)` 

Unregister from a given RD server.

#### Returns
CORD_EP_OK on success 

#### Returns
CORD_EP_TIMEOUT if the remove request times out 

#### Returns
CORD_EP_ERR on any other internal error

#### `public void `[`cord_ep_dump_status`](#group__net__cord__ep_1ga00aa936cc27e248dda3bf49a3ecdf979)`(void)` 

Dump the current RD connection status to STDIO (for debugging)

