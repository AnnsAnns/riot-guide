---
title: api-sys_sema_inv.md
description: api-sys_sema_inv.md
---
# group `sys_sema_inv` 

Lightweight inverse semaphore implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`sema_inv_post`](#group__sys__sema__inv_1ga8cf2306bf0dc7d6c99595d0a33763b6b)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s)`            | Signal semaphore (counter mode).
`public bool `[`sema_inv_post_mask`](#group__sys__sema__inv_1ga5bfad7bc3ec2276c63b9f84700519c35)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s,uint32_t mask)`            | Signal semaphore (mask mode).
`public inline static void `[`sema_inv_init`](#group__sys__sema__inv_1gaac32799d74aa0347b7299aba08cb8cec)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s,uint32_t value)`            | Initialize an inverse semaphore.
`public inline static void `[`sema_inv_wait`](#group__sys__sema__inv_1gaf214a04000714abaec7fba278868bbfc)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s)`            | Wait for the inverse semaphore value to reach zero.
`public inline static int `[`sema_inv_try_wait`](#group__sys__sema__inv_1gaf4490771dcbf4b1bb8bb03a737c7e29d)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s)`            | Check if the inverse semaphore value has reached zero.
`public inline static int `[`sema_inv_wait_timeout`](#group__sys__sema__inv_1ga325ab9b2ee5b5cb1ed13e87a354054f3)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s,uint32_t us)`            | Wait for the inverse semaphore value to reach zero or a timeout being reached.
`struct `[`sema_inv_t`](#structsema__inv__t) | An Inverse Semaphore.

## Members

#### `public bool `[`sema_inv_post`](#group__sys__sema__inv_1ga8cf2306bf0dc7d6c99595d0a33763b6b)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s)` 

Signal semaphore (counter mode).

Decrements the semaphore counter by one.
     If the counter reaches zero, the waiting thread is woken.

#### Parameters
* `s` an inverse semaphore

#### Parameters
* `<tt>true</tt>` the value of the semaphore has reached zero and the waiting thread has been woken 

* `<tt>false</tt>` the semaphore has not reached zero yet

#### `public bool `[`sema_inv_post_mask`](#group__sys__sema__inv_1ga5bfad7bc3ec2276c63b9f84700519c35)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s,uint32_t mask)` 

Signal semaphore (mask mode).

Clears the bits specified by @p mask from the semaphore value.
     If the value reaches zero, the waiting thread is woken.

#### Parameters
* `s` an inverse semaphore 

* `mask` bit mask to clear from the semaphore value

#### Parameters
* `<tt>true</tt>` the value of the semaphore has reached zero and the waiting thread has been woken 

* `<tt>false</tt>` the semaphore has not reached zero yet

#### `public inline static void `[`sema_inv_init`](#group__sys__sema__inv_1gaac32799d74aa0347b7299aba08cb8cec)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s,uint32_t value)` 

Initialize an inverse semaphore.

#### Parameters
* `s` an inverse semaphore 

* `value` start value, either a counter or a bit mask

#### `public inline static void `[`sema_inv_wait`](#group__sys__sema__inv_1gaf214a04000714abaec7fba278868bbfc)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s)` 

Wait for the inverse semaphore value to reach zero.

#### Parameters
* `s` An inverse semaphore.

#### `public inline static int `[`sema_inv_try_wait`](#group__sys__sema__inv_1gaf4490771dcbf4b1bb8bb03a737c7e29d)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s)` 

Check if the inverse semaphore value has reached zero.

#### Parameters
* `s` An inverse semaphore.

#### Returns
1 if the semaphore value has reached zero 0 otherwise

#### `public inline static int `[`sema_inv_wait_timeout`](#group__sys__sema__inv_1ga325ab9b2ee5b5cb1ed13e87a354054f3)`(`[`sema_inv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema_inv.md#structsema__inv__t)` * s,uint32_t us)` 

Wait for the inverse semaphore value to reach zero or a timeout being reached.

#### Parameters
* `s` An inverse semaphore. 

* `us` Time in microseconds until the semaphore times out.

#### Returns
0 if the semaphore value has reached zero -1 when the timeout occurred

# struct `sema_inv_t` 

An Inverse Semaphore.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`value`](#structsema__inv__t_1ac736060d8de3ae229fb2088698bd8f34) | value of the semaphore
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structsema__inv__t_1afc317e0a2b5fc026a08d9ca506c32cc7) | mutex of the semaphore

## Members

#### `public uint32_t `[`value`](#structsema__inv__t_1ac736060d8de3ae229fb2088698bd8f34) 

value of the semaphore

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structsema__inv__t_1afc317e0a2b5fc026a08d9ca506c32cc7) 

mutex of the semaphore

