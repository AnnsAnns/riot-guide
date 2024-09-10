---
title: api-core_sync_rmutex.md
description: api-core_sync_rmutex.md
---
# group `core_sync_rmutex` 

Recursive [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for thread synchronization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`RMUTEX_INIT`](#group__core__sync__rmutex_1ga1a46c7063d2da67c6182b5477e203c54)            | Static initializer for [rmutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t).
`public inline static void `[`rmutex_init`](#group__core__sync__rmutex_1gab0563169f0da3da545760ee00605b365)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)`            | Initializes a recursive mutex object.
`public int `[`rmutex_trylock`](#group__core__sync__rmutex_1ga45cdbbf707c0fa97f4b936edd8eac995)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)`            | Tries to get a recursive mutex, non-blocking.
`public void `[`rmutex_lock`](#group__core__sync__rmutex_1ga040f8c00f62db3d8140e0e9106338d2d)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)`            | Locks a recursive mutex, blocking.
`public void `[`rmutex_unlock`](#group__core__sync__rmutex_1gad7f1730efb6353a6868a567ae5b6f2ea)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)`            | Unlocks the recursive mutex.
`struct `[`rmutex_t`](#structrmutex__t) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) structure.

## Members

#### `define `[`RMUTEX_INIT`](#group__core__sync__rmutex_1ga1a46c7063d2da67c6182b5477e203c54) 

Static initializer for [rmutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t).

This initializer is preferable to [rmutex_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__rmutex_1gab0563169f0da3da545760ee00605b365).

#### `public inline static void `[`rmutex_init`](#group__core__sync__rmutex_1gab0563169f0da3da545760ee00605b365)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)` 

Initializes a recursive mutex object.

For initialization of variables use RMUTEX_INIT instead. Only use the function call for dynamically allocated mutexes. 
#### Parameters
* `rmutex` pre-allocated mutex structure, must not be NULL.

#### `public int `[`rmutex_trylock`](#group__core__sync__rmutex_1ga45cdbbf707c0fa97f4b936edd8eac995)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)` 

Tries to get a recursive mutex, non-blocking.

#### Parameters
* `rmutex` Recursive mutex object to lock. Has to be initialized first. Must not be NULL.

#### Returns
1 if mutex was unlocked, now it is locked. 

#### Returns
0 if the mutex was locked.

#### `public void `[`rmutex_lock`](#group__core__sync__rmutex_1ga040f8c00f62db3d8140e0e9106338d2d)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)` 

Locks a recursive mutex, blocking.

#### Parameters
* `rmutex` Recursive mutex object to lock. Has to be initialized first. Must not be NULL.

#### `public void `[`rmutex_unlock`](#group__core__sync__rmutex_1gad7f1730efb6353a6868a567ae5b6f2ea)`(`[`rmutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_rmutex.md#structrmutex__t)` * rmutex)` 

Unlocks the recursive mutex.

#### Parameters
* `rmutex` Recursive mutex object to unlock, must not be NULL.

# struct `rmutex_t` 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) structure.

Must never be modified by the user.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structrmutex__t_1abd4a9e2dbd08dc476b05c9f3fa98ce41) | The mutex used for locking.
`public uint16_t `[`refcount`](#structrmutex__t_1a0a36374124234b8f291793d510932922) | Number of locks owned by the thread owner.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`owner`](#structrmutex__t_1a5ff506079d73ba1db329999e8afa831b) | Owner thread of the mutex.

## Members

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structrmutex__t_1abd4a9e2dbd08dc476b05c9f3fa98ce41) 

The mutex used for locking.

**Must never be changed by the user.**

#### `public uint16_t `[`refcount`](#structrmutex__t_1a0a36374124234b8f291793d510932922) 

Number of locks owned by the thread owner.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`owner`](#structrmutex__t_1a5ff506079d73ba1db329999e8afa831b) 

Owner thread of the mutex.

Owner is written by the mutex holder, and read concurrently to ensure consistency, [atomic_int_least16_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_c11_atomics_cpp_compat.md#structatomic__int__least16__t) is used. Note [kernel_pid_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84) is an int16

