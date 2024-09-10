---
title: api-core_mbox.md
description: api-core_mbox.md
---
# group `core_mbox` 

Mailbox implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MBOX_INIT`](#group__core__mbox_1ga4da35f775c764c17eddc3fe700d59705)            | Static initializer for mbox objects.
`enum `[`@0`](#group__core__mbox_1ga06fc87d81c62e9abb8790b6e5713c55b)            | 
`public inline static void `[`mbox_init`](#group__core__mbox_1ga33c89a9d8e639a4d220be184faf5ac85)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * queue,unsigned int queue_size)`            | Initialize mbox object.
`public int `[`_mbox_put`](#group__core__mbox_1gaf21f5e201eb96b2507e2d0d590d04bc8)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,int blocking)`            | Add message to mailbox.
`public int `[`_mbox_get`](#group__core__mbox_1gacb4620a29324d15bf6bd7e58198a32b6)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,int blocking)`            | Get message from mailbox.
`public inline static void `[`mbox_put`](#group__core__mbox_1gabfb23792f625efb692729cf0ad555349)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)`            | Add message to mailbox.
`public inline static int `[`mbox_try_put`](#group__core__mbox_1gabed66ce7a0c6cbe474f5accd7658e4a7)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)`            | Add message to mailbox.
`public inline static void `[`mbox_get`](#group__core__mbox_1ga27097c9c9ef5fd4b5bff912580525126)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)`            | Get message from mailbox.
`public inline static int `[`mbox_try_get`](#group__core__mbox_1gafd3d1b114d4db9befc6564750f711d6e)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)`            | Get message from mailbox.
`public inline static size_t `[`mbox_size`](#group__core__mbox_1ga5d5c9e005b875fdca590c7e7ed07a1d0)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)`            | Get mbox queue size (capacity)
`public inline static size_t `[`mbox_avail`](#group__core__mbox_1gaaf4bdb4271f33f7822ac2f426d5a8529)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)`            | Get messages available in mbox.
`public inline static void `[`mbox_unset`](#group__core__mbox_1ga01d4a77f3935525137f8a3cf1bdc3b77)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)`            | Unset's the mbox, effectively deinitializing and invalidating it.
`struct `[`mbox_t`](#structmbox__t) | Mailbox struct definition.

## Members

#### `define `[`MBOX_INIT`](#group__core__mbox_1ga4da35f775c764c17eddc3fe700d59705) 

Static initializer for mbox objects.

#### `enum `[`@0`](#group__core__mbox_1ga06fc87d81c62e9abb8790b6e5713c55b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NON_BLOCKING            | non-blocking mode
BLOCKING            | blocking mode

#### `public inline static void `[`mbox_init`](#group__core__mbox_1ga33c89a9d8e639a4d220be184faf5ac85)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * queue,unsigned int queue_size)` 

Initialize mbox object.

The message queue size must be a power of two!

#### Parameters
* `mbox` ptr to mailbox to initialize 

* `queue` array of [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) used as queue 

* `queue_size` number of [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) objects in queue

#### `public int `[`_mbox_put`](#group__core__mbox_1gaf21f5e201eb96b2507e2d0d590d04bc8)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,int blocking)` 

Add message to mailbox.

If the mailbox is full, this function will return right away.

#### `public int `[`_mbox_get`](#group__core__mbox_1gacb4620a29324d15bf6bd7e58198a32b6)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg,int blocking)` 

Get message from mailbox.

If the mailbox is empty, this function will return right away.

#### `public inline static void `[`mbox_put`](#group__core__mbox_1gabfb23792f625efb692729cf0ad555349)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)` 

Add message to mailbox.

If the mailbox is full, this function will block until space becomes available.

#### Parameters
* `mbox` ptr to mailbox to operate on 

* `msg` ptr to message that will be copied into mailbox

#### `public inline static int `[`mbox_try_put`](#group__core__mbox_1gabed66ce7a0c6cbe474f5accd7658e4a7)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)` 

Add message to mailbox.

If the mailbox is full, this function will return right away.

#### Parameters
* `mbox` ptr to mailbox to operate on 

* `msg` ptr to message that will be copied into mailbox

#### Returns
1 if msg could be delivered 

#### Returns
0 otherwise

#### `public inline static void `[`mbox_get`](#group__core__mbox_1ga27097c9c9ef5fd4b5bff912580525126)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)` 

Get message from mailbox.

If the mailbox is empty, this function will block until a message becomes available.

#### Parameters
* `mbox` ptr to mailbox to operate on 

* `msg` ptr to storage for retrieved message

#### `public inline static int `[`mbox_try_get`](#group__core__mbox_1gafd3d1b114d4db9befc6564750f711d6e)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)` 

Get message from mailbox.

If the mailbox is empty, this function will return right away.

#### Parameters
* `mbox` ptr to mailbox to operate on 

* `msg` ptr to storage for retrieved message

#### Returns
1 if msg could be retrieved 

#### Returns
0 otherwise

#### `public inline static size_t `[`mbox_size`](#group__core__mbox_1ga5d5c9e005b875fdca590c7e7ed07a1d0)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)` 

Get mbox queue size (capacity)

#### Parameters
* `mbox` ptr to mailbox to operate on

#### Returns
size of mbox queue (or 0 if there's no queue)

#### `public inline static size_t `[`mbox_avail`](#group__core__mbox_1gaaf4bdb4271f33f7822ac2f426d5a8529)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)` 

Get messages available in mbox.

Returns the number of messages that can be retrieved without blocking.

#### Parameters
* `mbox` ptr to mailbox to operate on

#### Returns
number of available messages

#### `public inline static void `[`mbox_unset`](#group__core__mbox_1ga01d4a77f3935525137f8a3cf1bdc3b77)`(`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)` 

Unset's the mbox, effectively deinitializing and invalidating it.

#### Parameters
* `mbox` ptr to mailbox to operate on

# struct `mbox_t` 

Mailbox struct definition.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`readers`](#structmbox__t_1a7bcca2e0e5ddaced7697cc92fb2b7dd0) | list of threads waiting for message
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`writers`](#structmbox__t_1a0f004ccb9025358fe50d5d46d50201d4) | list of threads waiting to send
`public `[`cib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcib__t)` `[`cib`](#structmbox__t_1aaf53741712d3cab0b9b5b1bb1b48567e) | cib for msg array
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * `[`msg_array`](#structmbox__t_1ab947613aef250d1365e3195e4e096818) | ptr to array of msg queue

## Members

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`readers`](#structmbox__t_1a7bcca2e0e5ddaced7697cc92fb2b7dd0) 

list of threads waiting for message

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`writers`](#structmbox__t_1a0f004ccb9025358fe50d5d46d50201d4) 

list of threads waiting to send

#### `public `[`cib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcib__t)` `[`cib`](#structmbox__t_1aaf53741712d3cab0b9b5b1bb1b48567e) 

cib for msg array

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * `[`msg_array`](#structmbox__t_1ab947613aef250d1365e3195e4e096818) 

ptr to array of msg queue

