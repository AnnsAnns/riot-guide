---
title: api-net_cord_ep_standalone.md
description: api-net_cord_ep_standalone.md
---
# group `net_cord_ep_standalone` 

Run a CoRE Resource Directory endpoint standalone.

This sub-module enables a CoRE RD endpoint to manage is registration state with a RD autonomously by periodically running the update procedure. This is implemented by running a dedicated thread.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`cord_ep_standalone_event_t`](#group__net__cord__ep__standalone_1gad8845b3c5a8e9c0ce5c0a2d8b9b7d171)            | Possible types of events triggered by the cord_ep_standalone module.
`public void `[`cord_ep_standalone_run`](#group__net__cord__ep__standalone_1ga1528ff5b7b51317d838f104027f99a78)`(void)`            | Spawn a new thread that takes care of sending periodic updates to an active RD entry.
`public void `[`cord_ep_standalone_reg_cb`](#group__net__cord__ep__standalone_1ga2a4007396428a5f395b6a35da810f10e)`(`[`cord_ep_standalone_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__ep__standalone_1ga974903384c275304cc0e07c88e28a0c5)` cb)`            | Register a callback to be notified about RD endpoint state changes.
`public void `[`cord_ep_standalone_signal`](#group__net__cord__ep__standalone_1ga91e4ae5403bcbb121f6fabe165cbb4f6)`(bool connected)`            | Signal the cord_ep thread about connection status change.

## Members

#### `enum `[`cord_ep_standalone_event_t`](#group__net__cord__ep__standalone_1gad8845b3c5a8e9c0ce5c0a2d8b9b7d171) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CORD_EP_REGISTERED            | 
CORD_EP_DEREGISTERED            | 
CORD_EP_UPDATED            | 

Possible types of events triggered by the cord_ep_standalone module.

#### `public void `[`cord_ep_standalone_run`](#group__net__cord__ep__standalone_1ga1528ff5b7b51317d838f104027f99a78)`(void)` 

Spawn a new thread that takes care of sending periodic updates to an active RD entry.

This function must only be called once (typically during system initialization)

#### `public void `[`cord_ep_standalone_reg_cb`](#group__net__cord__ep__standalone_1ga2a4007396428a5f395b6a35da810f10e)`(`[`cord_ep_standalone_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__cord__ep__standalone_1ga974903384c275304cc0e07c88e28a0c5)` cb)` 

Register a callback to be notified about RD endpoint state changes.

Only a single callback can be active at any point in time, so setting a new callback will override the existing one.

`cb` != NULL

#### Parameters
* `cb` callback to execute on RD endpoint state changes

#### `public void `[`cord_ep_standalone_signal`](#group__net__cord__ep__standalone_1ga91e4ae5403bcbb121f6fabe165cbb4f6)`(bool connected)` 

Signal the cord_ep thread about connection status change.

This function should not be called by a user, but it is called from within the cord_ep implementation

#### Parameters
* `connected` set to true if we are connected to a RD

