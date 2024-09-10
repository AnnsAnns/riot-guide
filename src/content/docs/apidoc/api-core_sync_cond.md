---
title: api-core_sync_cond.md
description: api-core_sync_cond.md
---
# group `core_sync_cond` 

Condition variable for thread synchronization.

This file contains a condition variable with Mesa-style semantics.

Condition variable solve the following problem. Suppose that a thread should sleep until a certain condition comes true. Condition variables provide a primitive whereby a thread can go to sleep by calling [cond_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__cond_1ga3bb3a3c01100efd76dd454216ec48ccf). Then, when the condition comes true in a thread or interrupt context, [cond_signal()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__cond_1ga9a144677ae4e8e55db693749b5e90dfe) can be called, to wake up the thread.

"Mesa-style semantics" means that, when [cond_signal()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__cond_1ga9a144677ae4e8e55db693749b5e90dfe) is called, the sleeping thread becomes runnable, but may not be scheduled immediately. In contrast, "Hoare-style semantics" means that when [cond_signal()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__cond_1ga9a144677ae4e8e55db693749b5e90dfe) is called, the sleeping thread is awakened and immediately scheduled. The condition variable in this file implements Mesa-style semantics, as is used by other standard implementations, such as pthreads.

To avoid races, condition variables are used with mutexes. When a thread is put to sleep with cond_wait, it atomically unlocks the provided mutex and then goes to sleep. When it is awakened with cond_signal, it reacquires the mutex.

As a rule of thumb, every condition variable should have a corresponding mutex, and that mutex should be held whenever performing any operation with the condition variable. There are exceptions to this rule, where it is appropriate to call cond_signal or cond_broadcast without the mutex held (for example, if you know that no thread will call cond_wait concurrently). It is safe to call cond_signal or cond_broadcast in interrupt context.

However, the programmer should be aware of the following situation that could arise with Mesa-style condition variables: the condition may become true, making the sleeping thread runnable, but the condition may become false again before the thread is scheduled. To handle this case, the condition variable should be used in a while loop as follows:

```cpp
mutex_lock(&lock);
while (condition_is_not_true) {
    cond_wait(&cond, &lock);
}
// do work while condition is true.
mutex_unlock(&lock);
```

When used in this way, the thread checks, once it has has awakened, whether the condition is actually true, and goes to sleep again if it is not. This is the standard way to use Mesa-style condition variables.

Example: Suppose we want to implement a bounded queue, such as a Unix-style pipe between two threads. When data is written to the pipe, it is appended to a queue, and the writing thread blocks if the queue is full. When data is read from the pipe, it is removed from the queue; if the queue is empty, the reading thread blocks until it is not empty. If the pipe is closed by the sender, waiting reading threads wake up.

Here is a sketch of how to implement such a structure with condition variables. For simplicity, messages are single bytes. We assume a FIFO data structure queue_t. We assume it is unsafe to add to the queue if it is full, or remove from the queue if it is empty.

```cpp
typedef struct pipe {
    queue_t queue;
    cond_t read_cond;
    cond_t write_cond;
    mutex_t lock;
    bool closed;
} pipe_t;

void pipe_init(pipe_t* pipe) {
    queue_init(&pipe->queue);
    cond_init(&pipe->read_cond);
    cond_init(&pipe->write_cond);
    mutex_init(&pipe->lock);
    pipe->closed = false;
}

void pipe_write(pipe_t* pipe, char c) {
    mutex_lock(&pipe->lock);
    while (queue_length(&pipe->queue) == MAX_QUEUE_LENGTH && !pipe->closed) {
        cond_wait(&pipe->write_cond, &pipe->lock);
    }
    if (pipe->closed) {
        mutex_unlock(&pipe->lock);
        return 0;
    }
    add_to_queue(&pipe->queue, c);
    cond_signal(&pipe->read_cond);
    mutex_unlock(&pipe->lock);
    return 1;
}

void pipe_close(pipe_t* pipe) {
    mutex_lock(&pipe->lock);
    pipe->closed = true;
    cond_broadcast(&pipe->read_cond);
    cond_broadcast(&pipe->write_cond);
    mutex_unlock(&pipe->lock);
}

int pipe_read(pipe_t* pipe, char* buf) {
    mutex_lock(&pipe->lock);
    while (queue_length(&pipe->queue) == 0 && !pipe->closed) {
        cond_wait(&pipe->read_cond, &pipe->lock);
    }
    if (pipe->closed) {
        mutex_unlock(&pipe->lock);
        return 0;
    }
    *buf = remove_from_queue(&pipe->queue);
    cond_signal(&pipe->write_cond);
    mutex_unlock(&pipe->lock);
    return 1;
}
```

Note that this could actually be written with a single condition variable. However, the example includes two for didactic reasons.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`COND_INIT`](#group__core__sync__cond_1ga6a7055a466bff255172e05f6ec82d792)            | Static initializer for [cond_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t).
`public void `[`cond_init`](#group__core__sync__cond_1ga6cae8abe8c0e3d33c644b780fe029a4e)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond)`            | Initializes a condition variable.
`public void `[`cond_wait`](#group__core__sync__cond_1ga3bb3a3c01100efd76dd454216ec48ccf)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)`            | Waits on a condition.
`public void `[`cond_signal`](#group__core__sync__cond_1ga9a144677ae4e8e55db693749b5e90dfe)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond)`            | Wakes up one thread waiting on the condition variable.
`public void `[`cond_broadcast`](#group__core__sync__cond_1ga2f5b0a0d73091b1685877198a8c48182)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond)`            | Wakes up all threads waiting on the condition variable.
`struct `[`cond_t`](#structcond__t) | Condition variable structure.

## Members

#### `define `[`COND_INIT`](#group__core__sync__cond_1ga6a7055a466bff255172e05f6ec82d792) 

Static initializer for [cond_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t).

This initializer is preferable to [cond_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__cond_1ga6cae8abe8c0e3d33c644b780fe029a4e).

#### `public void `[`cond_init`](#group__core__sync__cond_1ga6cae8abe8c0e3d33c644b780fe029a4e)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond)` 

Initializes a condition variable.

For initialization of variables use COND_INIT instead. Only use the function call for dynamically allocated condition variables.

#### Parameters
* `cond` Pre-allocated condition structure. Must not be NULL.

#### `public void `[`cond_wait`](#group__core__sync__cond_1ga3bb3a3c01100efd76dd454216ec48ccf)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond,`[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` * mutex)` 

Waits on a condition.

#### Parameters
* `cond` Condition variable to wait on. 

* `mutex` [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) object held by the current thread.

#### `public void `[`cond_signal`](#group__core__sync__cond_1ga9a144677ae4e8e55db693749b5e90dfe)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond)` 

Wakes up one thread waiting on the condition variable.

The thread is marked as runnable and will only be scheduled later at the scheduler's whim, so the thread should re-check the condition and wait again if it is not fulfilled.

#### Parameters
* `cond` Condition variable to signal.

#### `public void `[`cond_broadcast`](#group__core__sync__cond_1ga2f5b0a0d73091b1685877198a8c48182)`(`[`cond_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_cond.md#structcond__t)` * cond)` 

Wakes up all threads waiting on the condition variable.

The threads are marked as runnable and will only be scheduled later at the scheduler's whim, so they should re-check the condition and wait again if it is not fulfilled.

#### Parameters
* `cond` Condition variable to broadcast.

# struct `cond_t` 

Condition variable structure.

Must never be modified by the user.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`queue`](#structcond__t_1a88105a586ee1fa230f0278b55b1c3b34) | The process waiting queue of the condition variable.

## Members

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`queue`](#structcond__t_1a88105a586ee1fa230f0278b55b1c3b34) 

The process waiting queue of the condition variable.

