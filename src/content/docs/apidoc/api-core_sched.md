---
title: api-core_sched.md
description: api-core_sched.md
---
# group `core_sched` 

The RIOT scheduler.

RIOT features a tickless, preemptive, priority based scheduler. Context switches can occur either preemptively (i.e. on interrupts), voluntarily, or when a blocking operation (like `[msg_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a)`) is executed. Being tickless means it does not have a timer that fires periodically in order to emulate concurrent execution by switching threads continuously.

Priorities:Every thread is given a priority on creation. The priority values are "order" or "nice" values, i.e. a higher value means a lower priority.

Example:Given threads with priorities A=6, B=1, and C=3, B has the highest priority.

A higher priority means that the scheduler will run this thread whenever it becomes runnable instead of a thread with a lower priority. In case of equal priorities, the threads are scheduled in a semi-cooperative fashion. That means that unless an interrupt happens, threads with the same priority will only switch due to voluntary or implicit context switches.

Interrupts:When an interrupt occurs, e.g. because a timer fired or a network packet was received, the active context is saved and an interrupt service routine (ISR) that handles the interrupt is executed in another context. When the ISR is finished, the `[sched_context_switch_request](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gaa07e4e5c8c3a066188f8e833d2b9c276)` flag can be checked. In case it is set, the `[sched_run()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gacda65ff85439d041a78e904b3cd8f10c)` function is called to determine the next active thread. (In the special case that the ISR knows that it can not enable a thread switch, this check can of course be omitted.) If the flag is not set, the original context is being restored and the thread resumes immediately.

Voluntary Context Switches:There are two function calls that can lead to a voluntary context switch: `[thread_yield()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gaaa9229e0f462f60bb9550919fa3d7699)` and `[thread_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga8d16ab2564e99827b629f8cb1a253beb)`. While the latter disables (think blocks) the thread until it is woken (think unblocked) again via `[thread_wakeup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1gaab65867d92604d57f6efb622586466f4)`, the former only leads to a context switch in case there is another runnable thread with at least the same priority.

Implicit Context Switches:Some functions that unblock another thread, e.g. `[msg_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8)` or `[mutex_unlock()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga05ccabe849d63b032f6317323da60187)`, can cause a thread switch, if the target had a higher priority.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MAXTHREADS`](#group__core__sched_1gab9eade334fd8a98c128802aec7e9191c)            | The maximum number of threads to be scheduled.
`define `[`KERNEL_PID_UNDEF`](#group__core__sched_1gab4fb52da047cf9af9626b9c408704384)            | Canonical identifier for an invalid PID.
`define `[`KERNEL_PID_FIRST`](#group__core__sched_1gafc10ebb77be0d463f6f04e29f066ec9d)            | The first valid PID (inclusive).
`define `[`KERNEL_PID_LAST`](#group__core__sched_1ga8328107b84cbf548fa267bffd8a0496c)            | The last valid PID (inclusive).
`define `[`PRIkernel_pid`](#group__core__sched_1gacbdb91f768b6240701dcb6cfaf0216ac)            | Macro for printing formatter.
`define `[`SCHED_TEST_STACK`](#group__core__sched_1gab20069ca40d71219c706e79c7cf7216d)            | Enables detection of stack overflows and measures stack usage when != 0.
`define `[`SCHED_PRIO_LEVELS`](#group__core__sched_1ga1868da7c35ae4ff66fc899793d283dd6)            | The number of thread priority levels.
`public inline static int `[`pid_is_valid`](#group__core__sched_1ga512e493d9d773ddd21c3370ad14b8aaa)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Determine if the given pid is valid.
`public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`sched_run`](#group__core__sched_1gacda65ff85439d041a78e904b3cd8f10c)`(void)`            | Triggers the scheduler to schedule the next thread.
`public void `[`sched_set_status`](#group__core__sched_1gaa83cd489d0c50f49f53cf029bc89e167)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * process,`[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` status)`            | Set the status of the specified process.
`public void `[`sched_switch`](#group__core__sched_1gaa6eb537182eece1d6956ec847cd12b25)`(uint16_t other_prio)`            | Yield if appropriate.
`public `[`NORETURN`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#compiler__hints_8h_1aa1728270d73c5d1598de1fd691762eb1)` void `[`cpu_switch_context_exit`](#group__core__sched_1gaeac07988fcc9ba2861d1360381aa9ad8)`(void)`            | Call context switching at thread exit.
`public `[`NORETURN`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#compiler__hints_8h_1aa1728270d73c5d1598de1fd691762eb1)` void `[`sched_task_exit`](#group__core__sched_1gaace030b4c5b7a4b1021cdbc29683d04c)`(void)`            | Removes thread from scheduler and set status to [STATUS_STOPPED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ggac528c02d3cccfb103d539b26ccdba6b2a331a22c9674afd68e8de27851c174efa).
`public void `[`sched_change_priority`](#group__core__sched_1gac3d015d83bd0bc422d973c0194ac24f1)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread,uint8_t priority)`            | Change the priority of the given thread.
`public void `[`sched_arch_idle`](#group__core__sched_1ga3e8a24fa6f2d4006c7dc623bb58aac50)`(void)`            | Set CPU to idle mode (CPU dependent)
`public void `[`sched_register_cb`](#group__core__sched_1ga3e0e1ccd1bb98c631abfe9ee51059c1b)`(`[`sched_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga7ce70cd86509c7177f414edcd58b6a0a)` callback)`            | Register a callback that will be called on every scheduler run.
`public inline static void `[`sched_runq_advance`](#group__core__sched_1gaea0626d2aa46b497b9ef4df047381736)`(uint8_t prio)`            | Advance a runqueue.
`public void `[`sched_runq_callback`](#group__core__sched_1ga6df958aaab3d0ed0dbeb58022623a232)`(uint8_t prio)`            | Scheduler runqueue (change) callback.
`public inline static int `[`sched_runq_is_empty`](#group__core__sched_1gad4bb18d0e8896e986d3f16efb49ab719)`(uint8_t prio)`            | Tell if the number of threads in a runqueue is 0.
`public inline static int `[`sched_runq_exactly_one`](#group__core__sched_1ga7795060fadf4037b49869a487c9b32f5)`(uint8_t prio)`            | Tell if the number of threads in a runqueue is 1.
`public inline static int `[`sched_runq_more_than_one`](#group__core__sched_1ga22a719ef733973e1f71a425b46752693)`(uint8_t prio)`            | Tell if the number of threads in a runqueue greater than 1.

## Members

#### `define `[`MAXTHREADS`](#group__core__sched_1gab9eade334fd8a98c128802aec7e9191c) 

The maximum number of threads to be scheduled.

#### `define `[`KERNEL_PID_UNDEF`](#group__core__sched_1gab4fb52da047cf9af9626b9c408704384) 

Canonical identifier for an invalid PID.

#### `define `[`KERNEL_PID_FIRST`](#group__core__sched_1gafc10ebb77be0d463f6f04e29f066ec9d) 

The first valid PID (inclusive).

#### `define `[`KERNEL_PID_LAST`](#group__core__sched_1ga8328107b84cbf548fa267bffd8a0496c) 

The last valid PID (inclusive).

#### `define `[`PRIkernel_pid`](#group__core__sched_1gacbdb91f768b6240701dcb6cfaf0216ac) 

Macro for printing formatter.

#### `define `[`SCHED_TEST_STACK`](#group__core__sched_1gab20069ca40d71219c706e79c7cf7216d) 

Enables detection of stack overflows and measures stack usage when != 0.

#### `define `[`SCHED_PRIO_LEVELS`](#group__core__sched_1ga1868da7c35ae4ff66fc899793d283dd6) 

The number of thread priority levels.

#### `public inline static int `[`pid_is_valid`](#group__core__sched_1ga512e493d9d773ddd21c3370ad14b8aaa)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Determine if the given pid is valid.

#### Parameters
* `pid` The pid to check

#### Returns
true if the pid is valid, false otherwise

#### `public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`sched_run`](#group__core__sched_1gacda65ff85439d041a78e904b3cd8f10c)`(void)` 

Triggers the scheduler to schedule the next thread.

#### Returns
The new thread to schedule if sched_active_thread/sched_active_pid was changed, 

#### Returns
NULL if the active thread was not changed.

#### `public void `[`sched_set_status`](#group__core__sched_1gaa83cd489d0c50f49f53cf029bc89e167)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * process,`[`thread_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gac528c02d3cccfb103d539b26ccdba6b2)` status)` 

Set the status of the specified process.

#### Parameters
* `process` Pointer to the thread control block of the targeted process 

* `status` The new status of this thread

#### `public void `[`sched_switch`](#group__core__sched_1gaa6eb537182eece1d6956ec847cd12b25)`(uint16_t other_prio)` 

Yield if appropriate.

Either yield if other_prio is higher than the current priority, or if the current thread is not on the runqueue.

Depending on whether the current execution is in an ISR ([irq_is_in()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1gaf61b61eb6e077631e2b12e233f6e3ba2)), [thread_yield_higher()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__thread_1ga83ca2e8c4cc394985e88b643d2a61840) is called or [sched_context_switch_request](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gaa07e4e5c8c3a066188f8e833d2b9c276) is set, respectively.

#### Parameters
* `other_prio` The priority of the target thread.

#### `public `[`NORETURN`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#compiler__hints_8h_1aa1728270d73c5d1598de1fd691762eb1)` void `[`cpu_switch_context_exit`](#group__core__sched_1gaeac07988fcc9ba2861d1360381aa9ad8)`(void)` 

Call context switching at thread exit.

#### `public `[`NORETURN`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#compiler__hints_8h_1aa1728270d73c5d1598de1fd691762eb1)` void `[`sched_task_exit`](#group__core__sched_1gaace030b4c5b7a4b1021cdbc29683d04c)`(void)` 

Removes thread from scheduler and set status to [STATUS_STOPPED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ggac528c02d3cccfb103d539b26ccdba6b2a331a22c9674afd68e8de27851c174efa).

#### `public void `[`sched_change_priority`](#group__core__sched_1gac3d015d83bd0bc422d973c0194ac24f1)`(`[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * thread,uint8_t priority)` 

Change the priority of the given thread.

This functions expects interrupts to be disabled when called!

(thread != NULL) 

(priority < SCHED_PRIO_LEVELS)

#### Parameters
* `thread` target thread 

* `priority` new priority to assign to `thread`

#### `public void `[`sched_arch_idle`](#group__core__sched_1ga3e8a24fa6f2d4006c7dc623bb58aac50)`(void)` 

Set CPU to idle mode (CPU dependent)

Only used when there's no idle thread.

This function will be called by the scheduler when there's no runnable thread. It will be called from ISR context, and *must* allow other ISR handlers to be run. E.g., on Cortex-M, the PendSV priority is temporarily lowered (set to higher value) in order to enable other exceptions to be run.

This function should also invoke setting a low power mode, e.g., by calling '[pm_set_lowest()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pm_1ga3cfb539da19d37887bd65c15f9ac1342)'.

#### `public void `[`sched_register_cb`](#group__core__sched_1ga3e0e1ccd1bb98c631abfe9ee51059c1b)`(`[`sched_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga7ce70cd86509c7177f414edcd58b6a0a)` callback)` 

Register a callback that will be called on every scheduler run.

#### Parameters
* `callback` The callback functions that will be called

#### `public inline static void `[`sched_runq_advance`](#group__core__sched_1gaea0626d2aa46b497b9ef4df047381736)`(uint8_t prio)` 

Advance a runqueue.

Advances the runqueue of that priority by one step to the next thread in that priority. Next time that priority is scheduled the now first thread will get activated. Calling this will not start the scheduler.

This API is not intended for out of tree users. Breaking API changes will be done without notice and without deprecation. Consider yourself warned!

#### Parameters
* `prio` The priority of the runqueue to advance

#### `public void `[`sched_runq_callback`](#group__core__sched_1ga6df958aaab3d0ed0dbeb58022623a232)`(uint8_t prio)` 

Scheduler runqueue (change) callback.

Function has to be provided by the user of this API. It will be called:

* when the scheduler is run,

* when a thread enters the active queue or

* when the last thread leaves a queue

This API is not intended for out of tree users. Breaking API changes will be done without notice and without deprecation. Consider yourself warned!

#### Parameters
* `prio` the priority of the runqueue that changed

#### `public inline static int `[`sched_runq_is_empty`](#group__core__sched_1gad4bb18d0e8896e986d3f16efb49ab719)`(uint8_t prio)` 

Tell if the number of threads in a runqueue is 0.

#### Parameters
* `prio` The priority of the runqueue to get information of 

#### Returns
Truth value for that information 

This API is not intended for out of tree users.

#### `public inline static int `[`sched_runq_exactly_one`](#group__core__sched_1ga7795060fadf4037b49869a487c9b32f5)`(uint8_t prio)` 

Tell if the number of threads in a runqueue is 1.

#### Parameters
* `prio` The priority of the runqueue to get information of 

#### Returns
Truth value for that information 

This API is not intended for out of tree users.

#### `public inline static int `[`sched_runq_more_than_one`](#group__core__sched_1ga22a719ef733973e1f71a425b46752693)`(uint8_t prio)` 

Tell if the number of threads in a runqueue greater than 1.

#### Parameters
* `prio` The priority of the runqueue to get information of 

#### Returns
Truth value for that information 

This API is not intended for out of tree users.

