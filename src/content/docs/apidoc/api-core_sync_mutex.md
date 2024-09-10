---
title: api-core_sync_mutex.md
description: api-core_sync_mutex.md
---
# group `core_sync_mutex` 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for thread synchronization.

By default, no mitigation against priority inversion is employed. If your application is subject to priority inversion and cannot tolerate the additional delay this can cause, use module `core_mutex_priority_inheritance` to employ priority inheritance as mitigation.

Mutex Implementation BasicsData Structures and EncodingA `[mutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` contains basically a point, which can have one of the following values:

* `NULL`, in case it is unlocked

* `MUTEX_LOCKED` in case it is locked, but no other thread is waiting on it

* A pointer to the head of single linked list of threads (or more precisely their `thread_t` structures) blocked waiting for obtaining the mutex. This list is terminated by `NULL`, not by `MUTEX_LOCKED`

The same information graphically:

```cpp
Unlocked mutex:
+-------+
| Mutex | --> NULL
+-------+

Locked mutex, no waiters:
+-------+
| Mutex | --> MUTEX_LOCKED
+-------+

Locked mutex, one waiter:
+-------+     +--------+
| Mutex | --> | Waiter | --> NULL
+-------+     +--------+

Locked mutex, 2 waiters:
+-------+     +--------+     +--------+
| Mutex | --> | Waiter | --> | Waiter | --> NULL
+-------+     +--------+     +--------+
```

Obtaining a MutexIf a `[mutex_lock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)` is called, one of the following happens:

* If the mutex was unlocked (value of `NULL`), its value is changed to `MUTEX_LOCKED` and the call to `[mutex_lock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)` returns right away without blocking.

* If the mutex has a value of `MUTEX_LOCKED`, it will be changed to point to the `thread_t` of the running thread. The single item list is terminated by setting the `thread_t::rq_entry.next` of the running thread to `NULL`. The running thread blocks as described below.

* Otherwise, the current thread is inserted into the list of waiting threads sorted by thread priority. The running thread blocks as described below.

In case 2) and 3), the running thread will mark itself as blocked (waiting for a mutex) and yields. Once control is transferred back to this thread (which is done in the call to `[mutex_unlock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga05ccabe849d63b032f6317323da60187)`), it has the mutex and the function `[mutex_lock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)` returns.

Returning a MutexIf `[mutex_unlock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga05ccabe849d63b032f6317323da60187)` is called, one of the following happens:

* If the mutex was already unlocked (value of `NULL`), the call returns without modifying the mutex.

* If the mutex was locked without waiters (value of `MUTEX_LOCKED`), it is unlocked by setting its value to `NULL`.

* Otherwise the first `thread_t` from the linked list of waiters is removed from the list.

* This thread is the one with the highest priority, as the list is sorted by priority.

* This thread's status is set to pending and its added to the appropriate run queue.

* If that thread was the last item in the list, the mutex is set to `MUTEX_LOCK`.

* The scheduler is run, so that if the unblocked waiting thread can run now, in case it has a higher priority than the running thread.

Debugging deadlocksThe module `core_mutex_debug` can be used to print on whom `[mutex_lock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)` is waiting. This information includes the thread ID of the owner and the program counter (PC) from where `[mutex_lock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)` was called. Note that the information is only valid if:

* The mutex was locked by a thread, and not e.g. by `MUTEX_INIT_LOCKED`

* The function `[cpu_get_caller_pc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#avr8__common_2include_2cpu_8h_1a74669397ad6a179d9dc4454497af9cc4)` is implemented for the target architecture. (The thread ID will remain valid, though.)

* The caller PC is briefly 0 when the current owner passes over ownership to the next thread, but that thread didn't get CPU time yet to write its PC into the data structure. Even worse, on architectures where an aligned function-pointer-sized write is not atomic, the value may briefly be bogus. Chances are close to zero this ever hits and since this only effects debug output, the ostrich algorithm was chosen here.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MUTEX_INIT`](#group__core__sync__mutex_1ga96be0bfc33e7e113099c7546798bec99)            | Static initializer for [mutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t).
`define `[`MUTEX_INIT_LOCKED`](#group__core__sync__mutex_1ga5ca0fa72dfde3f969c5c3eae33fc67cc)            | Static initializer for [mutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t) with a locked mutex.
`public bool `[`mutex_lock_internal`](#group__core__sync__mutex_1gae431f4c9893728f5744c2c330824ff05)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,bool block)`            | Internal function implementing [mutex_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201) and [mutex_trylock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gadece3a92e8921da1468368dd041c40fe).
`public inline static void `[`mutex_init`](#group__core__sync__mutex_1ga863625fd3252b5ebdadafaa6509ddb6d)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Initializes a mutex object.
`public inline static `[`mutex_cancel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__cancel__t)` `[`mutex_cancel_init`](#group__core__sync__mutex_1ga21c96cf5c177e4262fdc86157f44f5c0)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Initialize a mutex cancellation structure.
`public inline static int `[`mutex_trylock`](#group__core__sync__mutex_1gadece3a92e8921da1468368dd041c40fe)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Tries to get a mutex, non-blocking.
`public inline static void `[`mutex_lock`](#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Locks a mutex, blocking.
`public int `[`mutex_lock_cancelable`](#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535)`(`[`mutex_cancel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__cancel__t)` * mc)`            | Locks a mutex, blocking.
`public void `[`mutex_unlock`](#group__core__sync__mutex_1ga05ccabe849d63b032f6317323da60187)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Unlocks the mutex.
`public void `[`mutex_unlock_and_sleep`](#group__core__sync__mutex_1gab7d277fbba41acd77cb81fa52bc17b92)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Unlocks the mutex and sends the current thread to sleep.
`public void `[`mutex_cancel`](#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954)`(`[`mutex_cancel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__cancel__t)` * mc)`            | Cancels a call to [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535).
`struct `[`mutex_t`](#structmutex__t) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) structure.
`struct `[`mutex_cancel_t`](#structmutex__cancel__t) | A cancellation structure for use with [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535) and [mutex_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954).

## Members

#### `define `[`MUTEX_INIT`](#group__core__sync__mutex_1ga96be0bfc33e7e113099c7546798bec99) 

Static initializer for [mutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t).

This initializer is preferable to [mutex_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga863625fd3252b5ebdadafaa6509ddb6d).

#### `define `[`MUTEX_INIT_LOCKED`](#group__core__sync__mutex_1ga5ca0fa72dfde3f969c5c3eae33fc67cc) 

Static initializer for [mutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t) with a locked mutex.

#### `public bool `[`mutex_lock_internal`](#group__core__sync__mutex_1gae431f4c9893728f5744c2c330824ff05)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex,bool block)` 

Internal function implementing [mutex_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201) and [mutex_trylock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gadece3a92e8921da1468368dd041c40fe).

Do not call this function, use [mutex_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201) or [mutex_trylock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gadece3a92e8921da1468368dd041c40fe) instead

#### Parameters
* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to lock. 

* `block` Whether to block

`mutex` is not `NULL`

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) at `mutex` has been initialized 

Must be called in thread context

The mutex `is` locked and held by the calling thread.

#### Parameters
* `true` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) obtained 

* `false` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) not obtained (only possible if `block` is `false`)

#### `public inline static void `[`mutex_init`](#group__core__sync__mutex_1ga863625fd3252b5ebdadafaa6509ddb6d)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Initializes a mutex object.

For initialization of variables use MUTEX_INIT instead. Only use the function call for dynamically allocated mutexes. 
#### Parameters
* `mutex` pre-allocated mutex structure, must not be NULL.

#### `public inline static `[`mutex_cancel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__cancel__t)` `[`mutex_cancel_init`](#group__core__sync__mutex_1ga21c96cf5c177e4262fdc86157f44f5c0)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Initialize a mutex cancellation structure.

#### Parameters
* `mutex` The mutex that the calling thread wants to lock 

#### Returns
The cancellation structure for use with [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535) and [mutex_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954)

This function is considered internal. Out of tree users should be aware that breaking API changes or removal of this API without an deprecation period might happen.

#### `public inline static int `[`mutex_trylock`](#group__core__sync__mutex_1gadece3a92e8921da1468368dd041c40fe)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Tries to get a mutex, non-blocking.

#### Parameters
* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to lock.

#### Parameters
* `1` if mutex was unlocked, now it is locked. 

* `0` if the mutex was locked.

`mutex` is not `NULL`

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) at `mutex` has been initialized 

Must be called in thread context

#### `public inline static void `[`mutex_lock`](#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Locks a mutex, blocking.

#### Parameters
* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to lock.

`mutex` is not `NULL`

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) at `mutex` has been initialized 

Must be called in thread context

The mutex `is` locked and held by the calling thread.

#### `public int `[`mutex_lock_cancelable`](#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535)`(`[`mutex_cancel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__cancel__t)` * mc)` 

Locks a mutex, blocking.

This function can be canceled.

#### Parameters
* `mc` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) cancellation structure to work on

#### Parameters
* `0` The mutex was locked by the caller 

* `-ECANCELED` The mutex was ***NOT*** locked, operation was canceled. See [mutex_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954)

This function is considered internal. Out of tree users should be aware that breaking API changes or removal of this API without an deprecation period might happen.

Must be called in thread context 

`mc` has been initialized with [mutex_cancel_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga21c96cf5c177e4262fdc86157f44f5c0) by the calling thread. 

`mc` has ***NOT*** been used for previous calls to this function. (Reinitialize before reusing!)

The mutex referred to by `mc` is locked and held by the calling thread, unless `-ECANCELED` was returned.

#### `public void `[`mutex_unlock`](#group__core__sync__mutex_1ga05ccabe849d63b032f6317323da60187)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Unlocks the mutex.

#### Parameters
* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to unlock.

`mutex` is not `NULL`

It is safe to unlock a mutex held by a different thread. 

It is safe to call this function from IRQ context.

#### `public void `[`mutex_unlock_and_sleep`](#group__core__sync__mutex_1gab7d277fbba41acd77cb81fa52bc17b92)`(`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Unlocks the mutex and sends the current thread to sleep.

#### Parameters
* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object to unlock. 

`mutex` is not `NULL`

Must be called in thread context.

#### `public void `[`mutex_cancel`](#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954)`(`[`mutex_cancel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__cancel__t)` * mc)` 

Cancels a call to [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535).

#### Parameters
* `mc` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) cancellation structure referring to the thread calling [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535) and to the mutex to cancel the operation on

This function is considered internal. Out of tree users should be aware that breaking API changes or removal of this API without an deprecation period might happen.

`mc` is used to cancel at most one call to [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535). (You can reinitialize the same memory to safely reuse it.) 

You ***MUST NOT*** call this function once the thread referred to by `mc` reuses the mutex object referred to by `mc` (not counting the call to [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535)`mc` was used in). 

It is safe to call this function from IRQ context, e.g. from a timer interrupt. 

It is safe to call this function more than once on the same `mc` while it is still valid (see the warning above). The first call will cancel the operation and subsequent calls will have no effect.

If `thread` is currently running (or pending), a subsequent call from `thread` to [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535) will also fail

Canonical use:

```cpp
static void timeout_cb(void *arg) {
    [mutex_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954)(arg);
}

int [ztimer_mutex_lock_timeout](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gaf418c7bedd6246adfdcb1399aa72a75b)([ztimer_clock_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__clock) *clock, [mutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t) *mutex,
                              uint32_t timeout)
{
    [mutex_cancel_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__cancel__t) mc = [mutex_cancel_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga21c96cf5c177e4262fdc86157f44f5c0)(mutex);
    [ztimer_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t) t = { .[callback](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t_1a320594a37924b7d784242ff75ada6f92) = timeout_cb, .arg = &mc };
    [ztimer_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c)(clock, &t, timeout);
    if ([mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535)(&mc)) {
        return -[ECANCELED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__atmega__common_1ga9532d840ef91fd8e1ecc5d7ca7cbf212);
    }
    [ztimer_remove](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50)(clock, &t);
    return 0;
}
```

In the above example a simple implementation of how to implement mutex locking with a timeout is given. There are two corner cases:

* The call to [mutex_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954) could occur *before* the call to [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535). (E.g. for `timeout == 0`.)

* The call to [mutex_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954) could occur right after the mutex was *successfully* obtained, but before `[ztimer_remove()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gadf7bdfdd20c4eaa767abd39efe6d5e50)` was executed.

In the first corner case the cancellation is stored in `mc`. Hence, the subsequent call to [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535) gets indeed canceled. In the second corner case the cancellation is also stored in `mc` but never used - the mutex cancellation structure `mc` is not allowed to be reused without reinitialization.

# struct `mutex_t` 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) structure.

Must never be modified by the user.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`queue`](#structmutex__t_1a9ba5f3b40e8d946420c4373b152ba738) | The process waiting queue of the mutex.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`owner`](#structmutex__t_1a235f078c46912aaa82355a93e732e3ca) | The current owner of the mutex or `NULL`
`public `[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` `[`owner_calling_pc`](#structmutex__t_1af5f9248f9827320c9a3e0531d33c2567) | Program counter of the call to [mutex_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201) that most recently acquired this mutex.
`public uint8_t `[`owner_original_priority`](#structmutex__t_1a01ec8cebfa2833581876188225c19a74) | Original priority of the owner.

## Members

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`queue`](#structmutex__t_1a9ba5f3b40e8d946420c4373b152ba738) 

The process waiting queue of the mutex.

**Must never be changed by the user.**

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`owner`](#structmutex__t_1a235f078c46912aaa82355a93e732e3ca) 

The current owner of the mutex or `NULL`

Only available if module core_mutex_priority_inheritance is used.

If either the mutex is not locked or the mutex is not locked by a thread (e.g. because it is used to synchronize a thread with an ISR completion), this will have the value of `NULL`.

#### `public `[`uinttxtptr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gaf7ab91af0237f127667e8bd91e0e294b)` `[`owner_calling_pc`](#structmutex__t_1af5f9248f9827320c9a3e0531d33c2567) 

Program counter of the call to [mutex_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201) that most recently acquired this mutex.

This is used when the module `core_mutex_debug` is used to debug deadlocks and is non-existing otherwise

#### `public uint8_t `[`owner_original_priority`](#structmutex__t_1a01ec8cebfa2833581876188225c19a74) 

Original priority of the owner.

Only available if module core_mutex_priority_inheritance is used.

# struct `mutex_cancel_t` 

A cancellation structure for use with [mutex_lock_cancelable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga43956ba0c5f17a235917a0f165c3c535) and [mutex_cancel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga11d0c4f5c85caba5bea75de8c9c0b954).

The contents of this structure are internal.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * `[`mutex`](#structmutex__cancel__t_1ab12807fb386ed9866c228a4e7db38d26) | The mutex to lock.
`public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread`](#structmutex__cancel__t_1a28cd04247ae6a70509fbd4e72d73b82a) | The thread trying to lock the mutex.
`public uint8_t `[`cancelled`](#structmutex__cancel__t_1a4be8987cced4b77fde895cd122521bff) | Flag whether the mutex has been cancelled.

## Members

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * `[`mutex`](#structmutex__cancel__t_1ab12807fb386ed9866c228a4e7db38d26) 

The mutex to lock.

#### `public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread`](#structmutex__cancel__t_1a28cd04247ae6a70509fbd4e72d73b82a) 

The thread trying to lock the mutex.

#### `public uint8_t `[`cancelled`](#structmutex__cancel__t_1a4be8987cced4b77fde895cd122521bff) 

Flag whether the mutex has been cancelled.

