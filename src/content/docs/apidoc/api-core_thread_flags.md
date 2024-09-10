---
title: api-core_thread_flags.md
description: api-core_thread_flags.md
---
# group `core_thread_flags` 

[Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) flags.

This API can be used to notify threads of conditions in a race-free and allocation-less way.

Each thread can handle up to 16 boolean flags, stored as a bitmask in the flags field of its thread. Those flags can be set or unset, using [thread_flags_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1gac09b3c9e70f1a44d4dfafd183cac57ea), from ISR's, other threads or even by the thread itself.

A thread can wait for any combination of its flags to become set, using [thread_flags_wait_any()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1gab3113f4c21484922b730e372eae6dc0a) or [thread_flags_wait_all()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga0f07a68cbcdfe464493eb7691c9c1215). Those functions clear flags that caused them to return. It is not possible to wait for flags to become unset.

[Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) flags have certain properties that make them the preferred choice over messages or mutexes in some circumstances:

* setting thread flags cannot fail If messages are used to notify a thread of a condition from within an ISR, and the receiving thread is not waiting, has no queue or the queue is full, the ISR cannot deliver the message. A thread flag can always be set.

* thread flags are very flexible With thread flags it is possible to wait for multiple conditions and messages at the same time. When mutexes are used to notify about events, only one event can be waited for.

Usually, if it is only of interest that an event occurred, but not how many of them, thread flags should be considered.

Note that some flags (currently the two most significant bits) are used by core functions and should not be set by the user. They can be waited for. Unlike [messages](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg) (which are only ever sent when requested), these flags can be set unprompted. (For example, [THREAD_FLAG_MSG_WAITING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga4d6fba599be6a9e97dbaff539fa9a507) is set on a thread automatically with every message sent there).

This API is optional and must be enabled by adding "core_thread_flags" to USEMODULE.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`thread_flags_set`](#group__core__thread__flags_1gac09b3c9e70f1a44d4dfafd183cac57ea)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread,`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)`            | Set thread flags, possibly waking it up.
`public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_clear`](#group__core__thread__flags_1ga064184020a5ac1b9ad056c02a71c539f)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)`            | Clear current thread's flags.
`public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_wait_any`](#group__core__thread__flags_1gab3113f4c21484922b730e372eae6dc0a)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)`            | Wait for any flag in mask to become set (blocking)
`public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_wait_all`](#group__core__thread__flags_1ga0f07a68cbcdfe464493eb7691c9c1215)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)`            | Wait for all flags in mask to become set (blocking)
`public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_wait_one`](#group__core__thread__flags_1gaf96b4d49f0d34f1ff5c5d07b787d5b9b)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)`            | Wait for any flags in mask to become set (blocking), one at a time.
`public int `[`thread_flags_wake`](#group__core__thread__flags_1ga858046bf043acfa97e353b73027a7800)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Possibly Wake up thread waiting for flags.

## Members

#### `public void `[`thread_flags_set`](#group__core__thread__flags_1gac09b3c9e70f1a44d4dfafd183cac57ea)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread,`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)` 

Set thread flags, possibly waking it up.

#### Parameters
* `thread` thread to work on 

* `mask` additional flags to be set for the current thread, represented as a bitmask

#### `public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_clear`](#group__core__thread__flags_1ga064184020a5ac1b9ad056c02a71c539f)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)` 

Clear current thread's flags.

#### Parameters
* `mask` unset flags for the current thread, represented as a bitmask

#### Returns
flags that have actually been cleared (mask & thread->flags before clear)

#### `public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_wait_any`](#group__core__thread__flags_1gab3113f4c21484922b730e372eae6dc0a)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)` 

Wait for any flag in mask to become set (blocking)

If any of the flags in mask are already set, this function will return immediately, otherwise, it will suspend the thread (as THREAD_STATUS_WAIT_ANY) until any of the flags in mask get set.

Both ways, it will clear and return (`[thread_get_active()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga605ef75cf40c9116339ba8ef54193e4c)->flags & mask`).

#### Parameters
* `mask` mask of flags to wait for

#### Returns
flags that caused return/wakeup (`[thread_get_active()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga605ef75cf40c9116339ba8ef54193e4c)->flags & mask`).

#### `public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_wait_all`](#group__core__thread__flags_1ga0f07a68cbcdfe464493eb7691c9c1215)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)` 

Wait for all flags in mask to become set (blocking)

If all the flags in mask are already set, this function will return immediately, otherwise, it will suspend the thread (as THREAD_STATUS_WAIT_ALL) until all of the flags in mask have been set.

Both ways, it will clear and return (`[thread_get_active()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga605ef75cf40c9116339ba8ef54193e4c)->flags & mask`).

#### Parameters
* `mask` mask of flags to wait for

#### Returns
mask

#### `public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`thread_flags_wait_one`](#group__core__thread__flags_1gaf96b4d49f0d34f1ff5c5d07b787d5b9b)`(`[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` mask)` 

Wait for any flags in mask to become set (blocking), one at a time.

This function is like [thread_flags_wait_any()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1gab3113f4c21484922b730e372eae6dc0a), but will only clear and return one flag at a time, least significant set bit first.

#### Parameters
* `mask` mask of flags to wait for

#### Returns
flag that triggered the return / wait

#### `public int `[`thread_flags_wake`](#group__core__thread__flags_1ga858046bf043acfa97e353b73027a7800)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Possibly Wake up thread waiting for flags.

Wakes up a thread if it is thread flag blocked and its condition is met. Has to be called with interrupts disabled. Does not trigger yield.

