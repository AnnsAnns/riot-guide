---
title: api-core_thread.md
description: api-core_thread.md
---
# group `core_thread` 

Support for multi-threading.

PrioritiesAs RIOT is using a fixed priority [scheduling algorithm](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched), threads are scheduled based on their priority. The priority is fixed for every thread and specified during the thread's creation by the `priority` parameter.

The lower the priority value, the higher the priority of the thread, with 0 being the highest possible priority.

The lowest possible priority is [THREAD_PRIORITY_IDLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#thread__config_8h_1aff75fcd47eeb1872daf68978351983fb) - 1.

Assigning the same priority to two or more threads is usually not a good idea. A thread in RIOT may run until it yields ([thread_yield](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gaaa9229e0f462f60bb9550919fa3d7699)) or another thread with higher priority is runnable ([STATUS_ON_RUNQUEUE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gaf4e431441709328f9355dfb7e21a0eb9)) again. Multiple threads with the same priority will therefore be scheduled cooperatively: when one of them is running, all others with the same priority depend on it to yield (or be interrupted by a thread with higher priority). This may make it difficult to determine when which of them gets scheduled and how much CPU time they will get. In most applications, the number of threads in application is significantly smaller than the number of available priorities, so assigning distinct priorities per thread should not be a problem. Only assign the same priority to multiple threads if you know what you are doing!

Thread BehaviorIn addition to the priority, flags can be used when creating a thread to alter the thread's behavior after creation. The following flags are available:

Flags   |Description
--------- | ---------
[THREAD_CREATE_SLEEPING](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga31d767ff839598270044e04a53ffa7f4)|the thread will sleep until woken up manually
[THREAD_CREATE_WOUT_YIELD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga55062dd3d2da4ee10c96a5ff39505ff4)|the thread might not run immediately after creation
[THREAD_CREATE_NO_STACKTEST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gaca0f981819582216a85af20f6676032b)|never measure the stack's memory usage

Thread creationCreating a new thread is internally done in two steps:* the new thread's stack is initialized depending on the platform

* the new thread is added to the scheduler and the scheduler is run (if not indicated otherwise)

Creating threads from within an ISR is currently supported, however it is considered to be a bad programming practice and we strongly discourage you from doing so.

Usage
```cpp
#include "thread.h"

char rcv_thread_stack[THREAD_STACKSIZE_MAIN];

void *rcv_thread(void *arg)
{
    (void) arg;
    msg_t m;

    while (1) {
        msg_receive(&m);
        printf("Got msg from %" PRIkernel_pid "\n", m.sender_pid);
    }

    return NULL;
}

int main(void)
{
    thread_create(rcv_thread_stack, sizeof(rcv_thread_stack),
                  THREAD_PRIORITY_MAIN - 1, 0,
                  rcv_thread, NULL, "rcv_thread");
}
```

Reading from the top down, you can see that first, stack memory for our thread `rcv_thread` is preallocated, followed by an implementation of the thread's function. Communication between threads is done using [Messaging / IPC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg). In this case, `rcv_thread` will print the process id of each thread that sent a message to `rcv_thread`.

After it has been properly defined, `rcv_thread` is created with a call to [thread_create()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga7e0403a9aa86ce0ec136f6b069d4434a) in `main()`. It is assigned a priority of `THREAD_PRIORITY_MAIN - 1`, i.e. a slightly *higher* priority than the main thread. Since neither the `THREAD_CREATE_SLEEPING` nor the `THREAD_CREATE_WOUT_YIELD` flag is set, `rcv_thread` will be executed immediately.

If the messages to the thread are sent using [msg_try_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga99264bd4f263fa2b478308c1f7983c10) or from an ISR, activate your thread's message queue by calling [msg_init_queue()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd) to prevent messages from being dropped when they can't be handled right away. The same applies if you'd like [msg_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8) to your thread to be non-blocking. For more details, see [the Messaging documentation](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`THREAD_MAYBE_INLINE`](#group__core__thread_1gae42834449d4aa117dd881cc1716a5f4e)            | Macro definition to inline some of the platform specific implementations.
`define `[`CONFIG_THREAD_NAMES`](#group__core__thread_1gaa55ed7288e242cd4b2a8872f912dae96)            | This global macro enable storage of thread names to help developers.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`thread_create`](#group__core__thread_1ga7e0403a9aa86ce0ec136f6b069d4434a)`(char * stack,int stacksize,uint8_t priority,int flags,`[`thread_task_func_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gab1b7486500c7dbaabdd2ac9a085ac39a)` task_func,void * arg,const char * name)`            | Creates a new thread.
`public inline static `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread_get_unchecked`](#group__core__thread_1ga590ebd6a4db0890f35e9bd03c8d98b74)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Retrieve a thread control block by PID.
`public inline static `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread_get`](#group__core__thread_1ga291191901d69837ffff231d312892c70)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Retrieve a thread control block by PID.
`public `[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` `[`thread_getstatus`](#group__core__thread_1ga126920c73220c857489a340ee1a5072a)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Returns the status of a process.
`public void `[`thread_sleep`](#group__core__thread_1ga8d16ab2564e99827b629f8cb1a253beb)`(void)`            | Puts the current thread into sleep mode.
`public void `[`thread_yield`](#group__core__thread_1gaaa9229e0f462f60bb9550919fa3d7699)`(void)`            | Lets current thread yield.
`public `[`THREAD_MAYBE_INLINE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gae42834449d4aa117dd881cc1716a5f4e)` void `[`thread_yield_higher`](#group__core__thread_1ga83ca2e8c4cc394985e88b643d2a61840)`(void)`            | Lets current thread yield in favor of a higher prioritized thread.
`public void `[`thread_zombify`](#group__core__thread_1ga76c8b55efc2c693fc6e2c6acd9ca2ddb)`(void)`            | Puts the current thread into zombie state.
`public int `[`thread_kill_zombie`](#group__core__thread_1ga862dec3a65ad85c3b18bdf2d5450880e)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Terminates zombie thread.
`public int `[`thread_wakeup`](#group__core__thread_1gaab65867d92604d57f6efb622586466f4)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Wakes up a sleeping thread.
`public inline static `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`thread_getpid`](#group__core__thread_1gab68e945fba9216126e255648a9a4ee8a)`(void)`            | Returns the process ID of the currently running thread.
`public inline static `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread_get_active`](#group__core__thread_1ga605ef75cf40c9116339ba8ef54193e4c)`(void)`            | Returns a pointer to the [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Control Block of the currently running thread.
`public char * `[`thread_stack_init`](#group__core__thread_1ga46cf14bb228358de0e8a7a0e5425a466)`(`[`thread_task_func_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gab1b7486500c7dbaabdd2ac9a085ac39a)` task_func,void * arg,void * stack_start,int stack_size)`            | Gets called upon thread creation to set CPU registers.
`public void `[`thread_add_to_list`](#group__core__thread_1ga66b51382807f0a214c15e282fec5476f)`(`[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` * list,`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Add thread to list, sorted by priority (internal)
`public const char * `[`thread_getname`](#group__core__thread_1ga95be7fb4afdce288dd85286c8591c8dd)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Returns the name of a process.
`public uintptr_t `[`measure_stack_free_internal`](#group__core__thread_1ga0f434687135c31e82dedd44da4bc0f92)`(const char * stack,size_t size)`            | Measures the stack usage of a stack.
`public int `[`thread_isr_stack_usage`](#group__core__thread_1gabb6763813ca04ff4b87b47f3d524505b)`(void)`            | Get the number of bytes used on the ISR stack.
`public void * `[`thread_isr_stack_pointer`](#group__core__thread_1ga7ce2b0b9af6fd608f8135076aeaff674)`(void)`            | Get the current ISR stack pointer.
`public void * `[`thread_isr_stack_start`](#group__core__thread_1ga7fd6618f65f13fd9a023b79da69545b1)`(void)`            | Get the start of the ISR stack.
`public void `[`thread_stack_print`](#group__core__thread_1ga05ea0c25c648d6990819d8502ae47696)`(void)`            | Print the current stack to stdout.
`public void `[`thread_print_stack`](#group__core__thread_1gad80df800e5bde287544899ebea3af1c9)`(void)`            | Prints human readable, ps-like thread information for debugging purposes.
`public inline static int `[`thread_has_msg_queue`](#group__core__thread_1ga7d49bed9a012215e798f4ec4027bd4cd)`(const volatile struct `[`_thread`](./doc/starlight-docs/src/content/docs/apidoc/api-core_thread.md#struct__thread)` * thread)`            | Checks if a thread has an initialized message queue.
`public inline static `[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` `[`thread_get_status`](#group__core__thread_1gabc7668e26f5270824c18641cb3cbf802)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Get a thread's status.
`public inline static uint8_t `[`thread_get_priority`](#group__core__thread_1ga2793dad289626600e20c24136d788d94)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Get a thread's priority.
`public inline static bool `[`thread_is_active`](#group__core__thread_1gab7beb106598f0c575c227cf8ed0476a0)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Returns if a thread is active (currently running or waiting to be scheduled)
`public const char * `[`thread_state_to_string`](#group__core__thread_1ga4facacad3d8f92317d1441b779c06147)`(`[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` state)`            | Convert a thread state code to a human readable string.
`public inline static void * `[`thread_get_stackstart`](#group__core__thread_1gad2729868906246ee7d10f39248e6b38b)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Get start address (lowest) of a thread's stack.
`public inline static void * `[`thread_get_sp`](#group__core__thread_1gab1840b02a7834a147ed07be206e05020)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Get stored Stack Pointer of thread.
`public inline static size_t `[`thread_get_stacksize`](#group__core__thread_1ga3023b920b107656efd152a31a5cd9983)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Get size of a thread's stack.
`public inline static `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`thread_getpid_of`](#group__core__thread_1gaf75328abc29a0c004cfe6f1f1f010e9e)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Get PID of thread.
`public inline static const char * `[`thread_get_name`](#group__core__thread_1ga705b23a68178d07032091a81b5e0f7b0)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Get name of thread.
`public inline static uintptr_t `[`thread_measure_stack_free`](#group__core__thread_1ga6e445472b5a25b211079bb3e2d552c77)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)`            | Measures the stack usage of a stack.
`struct `[`_thread`](#struct__thread) | `thread_t` holds thread's context data.

## Members

#### `define `[`THREAD_MAYBE_INLINE`](#group__core__thread_1gae42834449d4aa117dd881cc1716a5f4e) 

Macro definition to inline some of the platform specific implementations.

Should be enabled when advantageous by CPU's in their thread_arch.h header

#### `define `[`CONFIG_THREAD_NAMES`](#group__core__thread_1gaa55ed7288e242cd4b2a8872f912dae96) 

This global macro enable storage of thread names to help developers.

To activate it set environment variable `THREAD_NAMES=1`, or use Kconfig.
     It is automatically enabled if `DEVELHELP` is.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`thread_create`](#group__core__thread_1ga7e0403a9aa86ce0ec136f6b069d4434a)`(char * stack,int stacksize,uint8_t priority,int flags,`[`thread_task_func_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gab1b7486500c7dbaabdd2ac9a085ac39a)` task_func,void * arg,const char * name)` 

Creates a new thread.

For an in-depth discussion of thread priorities, behavior and and flags, see [Threading](#group__core__thread).

Avoid assigning the same priority to two or more threads. 

Creating threads from within an ISR is currently supported, however it is considered to be a bad programming practice and we strongly discourage you from doing so.

#### Parameters
* `stack` start address of the preallocated stack memory 

* `stacksize` the size of the thread's stack in bytes 

* `priority` priority of the new thread, lower mean higher priority 

* `flags` optional flags for the creation of the new thread 

* `task_func` pointer to the code that is executed in the new thread 

* `arg` the argument to the function 

* `name` a human readable descriptor for the thread

#### Returns
PID of newly created task on success 

#### Returns
-EINVAL, if `priority` is greater than or equal to [SCHED_PRIO_LEVELS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga1868da7c35ae4ff66fc899793d283dd6)

#### Returns
-EOVERFLOW, if there are too many threads running already

#### `public inline static `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread_get_unchecked`](#group__core__thread_1ga590ebd6a4db0890f35e9bd03c8d98b74)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Retrieve a thread control block by PID.

`pid` is valid 

#### Parameters
* `pid` [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) to retrieve. 

#### Returns
`NULL` if the PID is invalid or there is no such thread.

#### `public inline static `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread_get`](#group__core__thread_1ga291191901d69837ffff231d312892c70)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Retrieve a thread control block by PID.

This is a bound-checked variant of accessing `sched_threads[pid]` directly. If you know that the PID is valid, then don't use this function. 
#### Parameters
* `pid` [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) to retrieve. 

#### Returns
`NULL` if the PID is invalid or there is no such thread.

#### `public `[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` `[`thread_getstatus`](#group__core__thread_1ga126920c73220c857489a340ee1a5072a)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Returns the status of a process.

#### Parameters
* `pid` the PID of the thread to get the status from

#### Returns
status of the thread 

#### Returns
`STATUS_NOT_FOUND` if pid is unknown

#### `public void `[`thread_sleep`](#group__core__thread_1ga8d16ab2564e99827b629f8cb1a253beb)`(void)` 

Puts the current thread into sleep mode.

Has to be woken up externally.

#### `public void `[`thread_yield`](#group__core__thread_1gaaa9229e0f462f60bb9550919fa3d7699)`(void)` 

Lets current thread yield.

The current thread will resume operation immediately, if there is no other ready thread with the same or a higher priority.

Differently from [thread_yield_higher()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga83ca2e8c4cc394985e88b643d2a61840) the current thread will be put to the end of the thread's in its priority class.

**See also**: [thread_yield_higher()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga83ca2e8c4cc394985e88b643d2a61840)

#### `public `[`THREAD_MAYBE_INLINE`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gae42834449d4aa117dd881cc1716a5f4e)` void `[`thread_yield_higher`](#group__core__thread_1ga83ca2e8c4cc394985e88b643d2a61840)`(void)` 

Lets current thread yield in favor of a higher prioritized thread.

The current thread will resume operation immediately, if there is no other ready thread with a higher priority.

Differently from [thread_yield()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gaaa9229e0f462f60bb9550919fa3d7699) the current thread will be scheduled next in its own priority class, i.e. it stays the first thread in its priority class.

**See also**: [thread_yield()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gaaa9229e0f462f60bb9550919fa3d7699)

#### `public void `[`thread_zombify`](#group__core__thread_1ga76c8b55efc2c693fc6e2c6acd9ca2ddb)`(void)` 

Puts the current thread into zombie state.

Does nothing when in ISR. A thread in zombie state will never be scheduled again, but its scheduler entry and stack will be kept. A zombie state thread is supposed to be cleaned up by [thread_kill_zombie()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga862dec3a65ad85c3b18bdf2d5450880e).

#### `public int `[`thread_kill_zombie`](#group__core__thread_1ga862dec3a65ad85c3b18bdf2d5450880e)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Terminates zombie thread.

#### Parameters
* `pid` the PID of the thread to terminate

#### Returns
`1` on success 

#### Returns
`STATUS_NOT_FOUND` if pid is unknown or not a zombie

#### `public int `[`thread_wakeup`](#group__core__thread_1gaab65867d92604d57f6efb622586466f4)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Wakes up a sleeping thread.

#### Parameters
* `pid` the PID of the thread to be woken up

#### Returns
`1` on success 

#### Returns
`STATUS_NOT_FOUND` if pid is unknown or not sleeping

#### `public inline static `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`thread_getpid`](#group__core__thread_1gab68e945fba9216126e255648a9a4ee8a)`(void)` 

Returns the process ID of the currently running thread.

#### Returns
obviously you are not a golfer.

#### `public inline static `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`thread_get_active`](#group__core__thread_1ga605ef75cf40c9116339ba8ef54193e4c)`(void)` 

Returns a pointer to the [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) Control Block of the currently running thread.

#### Returns
Pointer to the TCB of the currently running thread, or `NULL` if no thread is running

#### `public char * `[`thread_stack_init`](#group__core__thread_1ga46cf14bb228358de0e8a7a0e5425a466)`(`[`thread_task_func_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gab1b7486500c7dbaabdd2ac9a085ac39a)` task_func,void * arg,void * stack_start,int stack_size)` 

Gets called upon thread creation to set CPU registers.

#### Parameters
* `task_func` First function to call within the thread 

* `arg` Argument to supply to task_func 

* `stack_start` Start address of the stack 

* `stack_size` Stack size

#### Returns
stack pointer

#### `public void `[`thread_add_to_list`](#group__core__thread_1ga66b51382807f0a214c15e282fec5476f)`(`[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` * list,`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Add thread to list, sorted by priority (internal)

This will add `thread` to `list` sorted by the thread priority. It reuses the thread's rq_entry field. Used internally by msg and mutex implementations.

Only use for threads *not on any runqueue* and with interrupts disabled.

#### Parameters
* `list` ptr to list root node 

* `thread` thread to add

#### `public const char * `[`thread_getname`](#group__core__thread_1ga95be7fb4afdce288dd85286c8591c8dd)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Returns the name of a process.

when compiling without DEVELHELP, this *always* returns NULL!

#### Parameters
* `pid` the PID of the thread to get the name from

#### Returns
the threads name 

#### Returns
`NULL` if pid is unknown

#### `public uintptr_t `[`measure_stack_free_internal`](#group__core__thread_1ga0f434687135c31e82dedd44da4bc0f92)`(const char * stack,size_t size)` 

Measures the stack usage of a stack.

#### `public int `[`thread_isr_stack_usage`](#group__core__thread_1gabb6763813ca04ff4b87b47f3d524505b)`(void)` 

Get the number of bytes used on the ISR stack.

#### `public void * `[`thread_isr_stack_pointer`](#group__core__thread_1ga7ce2b0b9af6fd608f8135076aeaff674)`(void)` 

Get the current ISR stack pointer.

#### `public void * `[`thread_isr_stack_start`](#group__core__thread_1ga7fd6618f65f13fd9a023b79da69545b1)`(void)` 

Get the start of the ISR stack.

#### `public void `[`thread_stack_print`](#group__core__thread_1ga05ea0c25c648d6990819d8502ae47696)`(void)` 

Print the current stack to stdout.

#### `public void `[`thread_print_stack`](#group__core__thread_1gad80df800e5bde287544899ebea3af1c9)`(void)` 

Prints human readable, ps-like thread information for debugging purposes.

#### `public inline static int `[`thread_has_msg_queue`](#group__core__thread_1ga7d49bed9a012215e798f4ec4027bd4cd)`(const volatile struct `[`_thread`](./doc/starlight-docs/src/content/docs/apidoc/api-core_thread.md#struct__thread)` * thread)` 

Checks if a thread has an initialized message queue.

**See also**: [msg_init_queue()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd)

#### Parameters
* `thread` The thread to check for

#### Returns
`== 0`, if `thread` has no initialized message queue 

#### Returns
`!= 0`, if `thread` has its message queue initialized

#### `public inline static `[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` `[`thread_get_status`](#group__core__thread_1gabc7668e26f5270824c18641cb3cbf802)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Get a thread's status.

#### Parameters
* `thread` thread to work on 

#### Returns
status of thread

#### `public inline static uint8_t `[`thread_get_priority`](#group__core__thread_1ga2793dad289626600e20c24136d788d94)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Get a thread's priority.

#### Parameters
* `thread` thread to work on 

#### Returns
priority of thread

#### `public inline static bool `[`thread_is_active`](#group__core__thread_1gab7beb106598f0c575c227cf8ed0476a0)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Returns if a thread is active (currently running or waiting to be scheduled)

#### Parameters
* `thread` thread to work on 

#### Returns
true if thread is active, false otherwise

#### `public const char * `[`thread_state_to_string`](#group__core__thread_1ga4facacad3d8f92317d1441b779c06147)`(`[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` state)` 

Convert a thread state code to a human readable string.

#### Parameters
* `state` thread state to convert 

#### Returns
ptr to string representation of thread state (or to "unknown")

#### `public inline static void * `[`thread_get_stackstart`](#group__core__thread_1gad2729868906246ee7d10f39248e6b38b)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Get start address (lowest) of a thread's stack.

#### Parameters
* `thread` thread to work on 

#### Returns
current stack pointer, or NULL if not available

#### `public inline static void * `[`thread_get_sp`](#group__core__thread_1gab1840b02a7834a147ed07be206e05020)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Get stored Stack Pointer of thread.

*Only provides meaningful value if the thread is not currently running!*.

#### Parameters
* `thread` thread to work on 

#### Returns
current stack pointer

#### `public inline static size_t `[`thread_get_stacksize`](#group__core__thread_1ga3023b920b107656efd152a31a5cd9983)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Get size of a thread's stack.

#### Parameters
* `thread` thread to work on 

#### Returns
thread stack size, or 0 if not available

#### `public inline static `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`thread_getpid_of`](#group__core__thread_1gaf75328abc29a0c004cfe6f1f1f010e9e)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Get PID of thread.

This is a simple getter for thread->pid.

#### Parameters
* `thread` thread to work on 

#### Returns
thread pid

#### `public inline static const char * `[`thread_get_name`](#group__core__thread_1ga705b23a68178d07032091a81b5e0f7b0)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Get name of thread.

#### Parameters
* `thread` thread to work on 

#### Returns
thread name or NULL if not available

#### `public inline static uintptr_t `[`thread_measure_stack_free`](#group__core__thread_1ga6e445472b5a25b211079bb3e2d552c77)`(const `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread)` 

Measures the stack usage of a stack.

Only works if the thread was created with the flag `THREAD_CREATE_STACKTEST`.

#### Parameters
* `thread` The thread to measure the stack of

#### Returns
the amount of unused space of the thread's stack

# struct `_thread` 

`thread_t` holds thread's context data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char * `[`sp`](#struct__thread_1a09eea99498158fcfe734910b2f3df22c) | thread's stack pointer
`public `[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` `[`status`](#struct__thread_1a2f158c4e18e63d81e071048e2e5a071f) | thread's status
`public uint8_t `[`priority`](#struct__thread_1a654101f2bb704e4c33053979088c87ff) | thread's priority
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#struct__thread_1aff7351b19d237a3e155b38e7ac21dad2) | thread's process id
`public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`flags`](#struct__thread_1a1ecb5902eff39fdba2fd6fdf7c95b50b) | currently set flags
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`rq_entry`](#struct__thread_1ac71ab65e786b1431def0840facc2b599) | run queue entry
`public void * `[`wait_data`](#struct__thread_1afe7e02f9edce6dd687781f50957d4da9) | used by msg, mbox and thread flags
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`msg_waiters`](#struct__thread_1a23eac8bcc11e70b8b2e40d1d9b00857b) | threads waiting for their message to be delivered to this thread (i.e.
`public `[`cib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcib__t)` `[`msg_queue`](#struct__thread_1a1e235cf9171684121108ba7f115d17b7) | index of this [thread's message queue] ([thread_t::msg_array](./doc/starlight-docs/src/content/docs/apidoc/api-core_thread.md#struct__thread_1a5a5b07e6d4d9212694803d2a9394c478)), if any
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * `[`msg_array`](#struct__thread_1a5a5b07e6d4d9212694803d2a9394c478) | memory holding messages sent to this thread's message queue
`public char * `[`stack_start`](#struct__thread_1a1163b634e1c7a399192e40152c02c285) | thread's stack start address
`public const char * `[`name`](#struct__thread_1a83a61fc95804b88af6551d9dd83a9cec) | thread's name
`public int `[`stack_size`](#struct__thread_1a6853c994e80e79beacae5fc19d599991) | thread's stack size

## Members

#### `public char * `[`sp`](#struct__thread_1a09eea99498158fcfe734910b2f3df22c) 

thread's stack pointer

#### `public `[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` `[`status`](#struct__thread_1a2f158c4e18e63d81e071048e2e5a071f) 

thread's status

#### `public uint8_t `[`priority`](#struct__thread_1a654101f2bb704e4c33053979088c87ff) 

thread's priority

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#struct__thread_1aff7351b19d237a3e155b38e7ac21dad2) 

thread's process id

#### `public `[`thread_flags_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread__flags_1ga9e19bb7d3442b5ba39da5d0fd49fd1ca)` `[`flags`](#struct__thread_1a1ecb5902eff39fdba2fd6fdf7c95b50b) 

currently set flags

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`rq_entry`](#struct__thread_1ac71ab65e786b1431def0840facc2b599) 

run queue entry

#### `public void * `[`wait_data`](#struct__thread_1afe7e02f9edce6dd687781f50957d4da9) 

used by msg, mbox and thread flags

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`msg_waiters`](#struct__thread_1a23eac8bcc11e70b8b2e40d1d9b00857b) 

threads waiting for their message to be delivered to this thread (i.e.

all blocked sends)

#### `public `[`cib_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structcib__t)` `[`msg_queue`](#struct__thread_1a1e235cf9171684121108ba7f115d17b7) 

index of this [thread's message queue] ([thread_t::msg_array](./doc/starlight-docs/src/content/docs/apidoc/api-core_thread.md#struct__thread_1a5a5b07e6d4d9212694803d2a9394c478)), if any

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * `[`msg_array`](#struct__thread_1a5a5b07e6d4d9212694803d2a9394c478) 

memory holding messages sent to this thread's message queue

#### `public char * `[`stack_start`](#struct__thread_1a1163b634e1c7a399192e40152c02c285) 

thread's stack start address

#### `public const char * `[`name`](#struct__thread_1a83a61fc95804b88af6551d9dd83a9cec) 

thread's name

#### `public int `[`stack_size`](#struct__thread_1a6853c994e80e79beacae5fc19d599991) 

thread's stack size

