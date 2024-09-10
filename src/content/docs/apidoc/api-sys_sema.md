---
title: api-sys_sema.md
description: api-sys_sema.md
---
# group `sys_sema` 

Lightweight semaphore implementation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SEMA_CREATE`](#group__sys__sema_1ga645eadee6b055f1f42ecb04b24f9b566)            | Creates semaphore statically.
`define `[`SEMA_CREATE_LOCKED`](#group__sys__sema_1ga76d77845ad407609a3f945e88ff98a5c)            | Creates semaphore statically initialized to 0.
`enum `[`sema_state_t`](#group__sys__sema_1ga3eb616a930f4a20204840b005c0593c2)            | A Semaphore states.
`public void `[`sema_create`](#group__sys__sema_1ga06edca1366345c396aaf97fc91111788)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,unsigned int value)`            | Creates semaphore dynamically.
`public void `[`sema_destroy`](#group__sys__sema_1ga29f1cc0af024caaa05ff2127e1543b2e)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)`            | Destroys a semaphore.
`public inline static unsigned `[`sema_get_value`](#group__sys__sema_1ga7b83dc1a5c3560ca1264859a382d4978)`(const `[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)`            | Get a semaphore's current value.
`public int `[`_sema_wait_ztimer`](#group__sys__sema_1gacda8c6e96c896ab8e47bf7b4116e3acf)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,int block,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t timeout)`            | Wait for a semaphore, blocking or non-blocking.
`public inline static int `[`sema_wait`](#group__sys__sema_1ga13b854f43a6b768b89cef120cdb1480b)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)`            | Wait for a semaphore being posted (without timeout).
`public inline static int `[`sema_try_wait`](#group__sys__sema_1gac2909449a3c922433e84fe762ba68a56)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)`            | Test if the semaphore is posted.
`public inline static int `[`sema_wait_timed`](#group__sys__sema_1gaa69089013308d2a98109052116296ede)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,uint64_t timeout)`            | Wait for a semaphore being posted with a 64bit timeout.
`public inline static int `[`sema_wait_timed_ztimer`](#group__sys__sema_1ga513c4183a962903450aa19ac01145414)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t timeout)`            | Wait for a semaphore being posted, using ztimer as backend.
`public int `[`sema_post`](#group__sys__sema_1gac4f16d7add49ff68ab91045201d6cc98)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)`            | Signal semaphore.
`struct `[`sema_t`](#structsema__t) | A Semaphore.

## Members

#### `define `[`SEMA_CREATE`](#group__sys__sema_1ga645eadee6b055f1f42ecb04b24f9b566) 

Creates semaphore statically.

#### Parameters
* `value` Initial value for the semaphore (can't be 0). For a 0 initialized semaphore 

**See also**: [SEMA_CREATE_LOCKED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1ga76d77845ad407609a3f945e88ff98a5c)

#### Returns
Statically initialized semaphore.

#### `define `[`SEMA_CREATE_LOCKED`](#group__sys__sema_1ga76d77845ad407609a3f945e88ff98a5c) 

Creates semaphore statically initialized to 0.

#### Returns
Statically initialized semaphore.

#### `enum `[`sema_state_t`](#group__sys__sema_1ga3eb616a930f4a20204840b005c0593c2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SEMA_OK            | 
SEMA_DESTROY            | 

A Semaphore states.

#### `public void `[`sema_create`](#group__sys__sema_1ga06edca1366345c396aaf97fc91111788)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,unsigned int value)` 

Creates semaphore dynamically.

`(sema != NULL)`

**See also**: [The Open Group Base Specifications Issue 7, sem_init() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_init.html) (without `pshared` parameter)

#### Parameters
* `sema` The created semaphore. 

* `value` Initial value for the semaphore.

#### `public void `[`sema_destroy`](#group__sys__sema_1ga29f1cc0af024caaa05ff2127e1543b2e)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)` 

Destroys a semaphore.

`(sema != NULL)`

**See also**: [The Open Group Base Specifications Issue 7, sem_destroy() ](http://pubs.opengroup.org/onlinepubs/9699919799/functions/sem_destroy.html)

Destroying a semaphore upon which other threads are currently blocked will wake the other threads causing the [sema_wait](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1ga13b854f43a6b768b89cef120cdb1480b) (or [sema_wait_timed](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1gaa69089013308d2a98109052116296ede)) to return error (-ECANCELED).

#### Parameters
* `sema` The semaphore to destroy.

#### `public inline static unsigned `[`sema_get_value`](#group__sys__sema_1ga7b83dc1a5c3560ca1264859a382d4978)`(const `[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)` 

Get a semaphore's current value.

#### Parameters
* `sema` A semaphore.

#### Returns
the current value of the semaphore

#### `public int `[`_sema_wait_ztimer`](#group__sys__sema_1gacda8c6e96c896ab8e47bf7b4116e3acf)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,int block,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t timeout)` 

Wait for a semaphore, blocking or non-blocking.

For commit purposes you should probably use [sema_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1ga13b854f43a6b768b89cef120cdb1480b), [sema_wait_timed_ztimer()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1ga513c4183a962903450aa19ac01145414) and [sema_try_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1gac2909449a3c922433e84fe762ba68a56) instead.

`(sema != NULL)`

#### Parameters
* `sema` A semaphore. 

* `block` if true, block until semaphore is available. 

* `clock` ztimer clock 

* `timeout` if blocking, ticks of `clock` until the semaphore times out. 0 waits forever.

#### Returns
0 on success 

#### Returns
-ETIMEDOUT, if the semaphore times out. 

#### Returns
-ECANCELED, if the semaphore was destroyed. 

#### Returns
-EAGAIN, if the semaphore is not posted (only if block = 0)

#### `public inline static int `[`sema_wait`](#group__sys__sema_1ga13b854f43a6b768b89cef120cdb1480b)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)` 

Wait for a semaphore being posted (without timeout).

`(sema != NULL)`

#### Parameters
* `sema` A semaphore.

#### Returns
0 on success 

#### Returns
-ECANCELED, if the semaphore was destroyed.

#### `public inline static int `[`sema_try_wait`](#group__sys__sema_1gac2909449a3c922433e84fe762ba68a56)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)` 

Test if the semaphore is posted.

`(sema != NULL)`

This is a non-blocking alternative to [sema_wait](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1ga13b854f43a6b768b89cef120cdb1480b).

#### Returns
0 on success 

#### Returns
-EAGAIN, if the semaphore is not posted. 

#### Returns
-ECANCELED, if the semaphore was destroyed.

#### `public inline static int `[`sema_wait_timed`](#group__sys__sema_1gaa69089013308d2a98109052116296ede)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,uint64_t timeout)` 

Wait for a semaphore being posted with a 64bit timeout.

> Deprecated: Will be removed after release 2021.07

`(sema != NULL)`

#### Parameters
* `sema` A semaphore. 

* `timeout` Time in microseconds until the semaphore times out. 0 does not wait.

#### Returns
0 on success 

#### Returns
-ETIMEDOUT, if the semaphore times out. 

#### Returns
-ECANCELED, if the semaphore was destroyed. 

#### Returns
-EAGAIN, if the semaphore is not posted (only if timeout = 0)

#### `public inline static int `[`sema_wait_timed_ztimer`](#group__sys__sema_1ga513c4183a962903450aa19ac01145414)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t timeout)` 

Wait for a semaphore being posted, using ztimer as backend.

`(sema != NULL)`

`(clock != NULL)`

#### Parameters
* `sema` A semaphore. 

* `clock` ztimer clock to use 

* `timeout` Time in microseconds until the semaphore times out. 0 does not wait.

#### Returns
0 on success 

#### Returns
-ETIMEDOUT, if the semaphore times out. 

#### Returns
-ECANCELED, if the semaphore was destroyed. 

#### Returns
-EAGAIN, if the semaphore is not posted (only if timeout = 0)

#### `public int `[`sema_post`](#group__sys__sema_1gac4f16d7add49ff68ab91045201d6cc98)`(`[`sema_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_sema.md#structsema__t)` * sema)` 

Signal semaphore.

`(sema != NULL)`

#### Parameters
* `sema` A semaphore.

#### Returns
0, on success 

#### Returns
-EOVERFLOW, if the semaphore's value would overflow.

# struct `sema_t` 

A Semaphore.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned int `[`value`](#structsema__t_1add06f5e375e701eb2b79d7cf2bff0ea3) | value of the semaphore
`public `[`sema_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1ga3eb616a930f4a20204840b005c0593c2)` `[`state`](#structsema__t_1ab874ea29817acba1427a12cbe01fc490) | state of the semaphore
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structsema__t_1ab75db51ac45ccea6f6794766d7a315ba) | mutex of the semaphore

## Members

#### `public unsigned int `[`value`](#structsema__t_1add06f5e375e701eb2b79d7cf2bff0ea3) 

value of the semaphore

#### `public `[`sema_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__sema_1ga3eb616a930f4a20204840b005c0593c2)` `[`state`](#structsema__t_1ab874ea29817acba1427a12cbe01fc490) 

state of the semaphore

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structsema__t_1ab75db51ac45ccea6f6794766d7a315ba) 

mutex of the semaphore

