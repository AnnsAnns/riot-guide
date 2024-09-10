---
title: api-net_cord_epsim.md
description: api-net_cord_epsim.md
---
# group `net_cord_epsim` 

CoRE Resource Directory endpoint using the simple registration procedure.

This module is designed to provide nodes with the possibility to register with resource directories without having to allocate a lot of resources. All the user has to do, is to call the [cord_epsim_register()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__epsim_1gae96bee749b0ca84e6bc3d8dbdfe32724) function in periodic intervals, depending on the value of the `CONFIG_CORD_LT` variable.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@346`](#group__net__cord__epsim_1ga3ab071cf265666f49f6e3f6639d69f0a)            | Error codes used by the cord_epsim implementation.
`public int `[`cord_epsim_register`](#group__net__cord__epsim_1gae96bee749b0ca84e6bc3d8dbdfe32724)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)`            | Initiate the node registration by sending an empty CoAP POST message to the RD server's /.well-known/core resource.
`public int `[`cord_epsim_state`](#group__net__cord__epsim_1ga8aae54c6eb94b56619dca15eeb985974)`(void)`            | Get the status of the latest registration procedure.

## Members

#### `enum `[`@346`](#group__net__cord__epsim_1ga3ab071cf265666f49f6e3f6639d69f0a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CORD_EPSIM_OK            | all good
CORD_EPSIM_ERROR            | on failing to send POST request
CORD_EPSIM_BUSY            | endpoint registration is in progress

Error codes used by the cord_epsim implementation.

#### `public int `[`cord_epsim_register`](#group__net__cord__epsim_1gae96bee749b0ca84e6bc3d8dbdfe32724)`(const `[`sock_udp_ep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__udp_1gaedc829c7973d7870c1ec078f9ffd45a1)` * remote)` 

Initiate the node registration by sending an empty CoAP POST message to the RD server's /.well-known/core resource.

remote != NULL

#### Parameters
* `remote` address and port of the target resource directory

#### Returns
CORD_EPSIM_OK on success 

#### Returns
CORD_EPSIM_BUSY if registration is already in progress 

#### Returns
CORD_EPSIM_ERROR if something goes wrong preparing or sending the registration request

#### `public int `[`cord_epsim_state`](#group__net__cord__epsim_1ga8aae54c6eb94b56619dca15eeb985974)`(void)` 

Get the status of the latest registration procedure.

#### Returns
CORD_EPSIM_OK if last registration was triggered successfully 

#### Returns
CORD_EPSIM_BUSY if a registration is currently in progress 

#### Returns
CORD_EPSIM_ERROR if latest registration attempt failed

