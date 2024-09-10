---
title: api-core_msg.md
description: api-core_msg.md
---
# group `core_msg` 

Messaging API for inter process communication.

MessagesIPC messages consist of a sender PID, a type, and some content. The sender PID will be set by the IPC internally and is not required to be set by the user. The type helps the receiver to multiplex different message types. The content can either be provided as a 32-bit integer or a pointer.

Some message types are predefined; for example, [GNRC_NETAPI_MSG_TYPE_RCV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netapi_1ga57b7e8cf32c12beecc9b84ca2cc073b5) & co are defined. These are fixed in the sense that registering for a particular set of messages (for the above, e.g. [gnrc_netreg_register](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__netreg_1gafb6a9d0b840aae07c3c1617932835ef1)) will use these message types. Threads that do nothing to receive such messages can safely use the same numbers for other purposes. The predefined types use non-conflicting ranges (e.g. `0x02NN`) to avoid ruling out simultaneous use of different components in the same thread.

In general, threads may consider it an error to send them a message they did not request. Best practice is to log (but otherwise ignore) unexpected messages.

Blocking vs non-blockingMessages can be sent and received blocking and non-blocking. Both can be used combined: A message send while blocking the sender thread can be received with the non-blocking variant and vice-versa.

Blocking IPCFor the blocking variant use [msg_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8) or [msg_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a) respectively.

Additionally, one can use [msg_send_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga01aee21f8554591c7933d4ba05cfe85b) to simultaneously block the sending thread and expect a response from the receiving thread. In this case, the receiving thread must use [msg_reply()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga2e7b09dc269eb4847f6e08b9900ffda9) to reply to the message of the sender thread.

```cpp
#include <inttypes.h>
#include <stdio.h>

#include "msg.h"
#include "thread.h"

static kernel_pid_t rcv_pid;
static char rcv_stack[THREAD_STACKSIZE_DEFAULT];

static void *rcv(void *arg)
{
    msg_t msg_req, msg_resp;

    (void)arg;
    while (1) {
        msg_receive(&msg_req);
        msg_resp.content.value = msg_req.content.value + 1;
        msg_reply(&msg_req, &msg_resp);
    }
    return NULL;
}

int main(void)
{
    msg_t msg_req, msg_resp;

    msg_resp.content.value = 0;
    rcv_pid = thread_create(rcv_stack, sizeof(rcv_stack),
                            THREAD_PRIORITY_MAIN - 1, 0, rcv, NULL, "rcv");
    while (1) {
        msg_req.content.value = msg_resp.content.value;
        msg_send_receive(&msg_req, &msg_resp, rcv_pid);
        printf("Result: %" PRIu32 "\n", msg_resp.content.value);
    }
    return 0;
}
```

Non-blocking IPCFor the non-blocking variant use [msg_try_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga99264bd4f263fa2b478308c1f7983c10) or [msg_try_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga0a5e88bf7d9cadb41e5acf4deb300061) respectively. If a message is sent in synchronous mode or the message queue (see below) of the receiving thread is full messages sent this way will be dropped.

You can use the example on asynchronous IPC below - but without the queue - to get an impression of how to use non-blocking IPC.

Synchronous vs AsynchronousRIOT's IPC supports both synchronous and asynchronous IPC.

Synchronous IPCSynchronous IPC is the default mode i.e. is active when the receiving thread has no message queue initialized. Messages that can't be delivered when sending non-blocking (because the receiver already received a message) or which are sent when the receiver is not receive-blocked will be dropped.

Asynchronous IPCTo use asynchronous IPC one needs to initialize a message queue using [msg_init_queue()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd) (note that it **must** be of a size equal to a power of two). Messages sent to a thread with a message queue that isn't full are never dropped and the sending never blocks, even when using [msg_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8). If the queue is full and the sending thread has a higher priority than the receiving thread the send-behavior is equivalent to synchronous mode.

```cpp
#include <inttypes.h>
#include <stdio.h>

#include "msg.h"
#include "thread.h"

#define RCV_QUEUE_SIZE  (8)

static kernel_pid_t rcv_pid;
static char rcv_stack[THREAD_STACKSIZE_DEFAULT + THREAD_EXTRA_STACKSIZE_PRINTF];
static msg_t rcv_queue[RCV_QUEUE_SIZE];

static void *rcv(void *arg)
{
    msg_t msg;

    (void)arg;
    msg_init_queue(rcv_queue, RCV_QUEUE_SIZE);
    while (1) {
        msg_receive(&msg);
        printf("Received %" PRIu32 "\n", msg.content.value);
    }
    return NULL;
}

int main(void)
{
    msg_t msg;

    msg.content.value = 0;
    rcv_pid = thread_create(rcv_stack, sizeof(rcv_stack),
                            THREAD_PRIORITY_MAIN - 1, 0, rcv, NULL, "rcv");
    while (1) {
        if (msg_try_send(&msg, rcv_pid) == 0) {
            printf("Receiver queue full.\n");
        }
        msg.content.value++;
    }
    return 0;
}
```

Timing & messagesTiming out the reception of a message or sending messages at a certain time is out of scope for the basic IPC provided by the kernel. See the [xtimer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer) module on information for these functionalities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`KERNEL_PID_ISR`](#group__core__msg_1gadba0f57bc141ce3a7ec95fbd4bf26429)            | Value of [msg_t::sender_pid](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t_1a6c7d65a0a86c7b69ed58f9f71a043028) if the sender was an interrupt service routine.
`public int `[`msg_send`](#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Send a message (blocking).
`public int `[`msg_try_send`](#group__core__msg_1ga99264bd4f263fa2b478308c1f7983c10)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Send a message (non-blocking).
`public int `[`msg_send_to_self`](#group__core__msg_1ga8711110548c90fe5ca82215e89bb83dd)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)`            | Send a message to the current thread.
`public int `[`msg_send_int`](#group__core__msg_1ga2762c096056c5eac7ffe38c8727e033a)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Send message from interrupt.
`public inline static int `[`msg_sent_by_int`](#group__core__msg_1ga77476ad20575d236516ec0acb0bdabd1)`(const `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)`            | Test if the message was sent inside an ISR.
`public int `[`msg_receive`](#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)`            | Receive a message.
`public int `[`msg_try_receive`](#group__core__msg_1ga0a5e88bf7d9cadb41e5acf4deb300061)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)`            | Try to receive a message.
`public int `[`msg_send_receive`](#group__core__msg_1ga01aee21f8554591c7933d4ba05cfe85b)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * reply,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Send a message, block until reply received.
`public int `[`msg_reply`](#group__core__msg_1ga2e7b09dc269eb4847f6e08b9900ffda9)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * reply)`            | Replies to a message.
`public int `[`msg_reply_int`](#group__core__msg_1ga09edaaa9af7fca0a049459038b087583)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * reply)`            | Replies to a message from interrupt.
`public unsigned `[`msg_avail_thread`](#group__core__msg_1gaef6ea5d2ddb211eb61a51acd3f9d7507)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Check how many messages are available (waiting) in the message queue of a specific thread.
`public unsigned `[`msg_avail`](#group__core__msg_1ga4b99e9912e2cd5c85afbb72dedb77ca3)`(void)`            | Check how many messages are available (waiting) in the message queue.
`public unsigned `[`msg_queue_capacity`](#group__core__msg_1ga489c0d4da83324cd92c99db0a7682407)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Get maximum capacity of a thread's queue length.
`public void `[`msg_init_queue`](#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * array,int num)`            | Initialize the current thread's message queue.
`public void `[`msg_queue_print`](#group__core__msg_1ga43b46e5167cdf2b2324920b59dae81a0)`(void)`            | Prints the message queue of the current thread.
`struct `[`msg_t`](#structmsg__t) | Describes a message object which can be sent between threads.

## Members

#### `define `[`KERNEL_PID_ISR`](#group__core__msg_1gadba0f57bc141ce3a7ec95fbd4bf26429) 

Value of [msg_t::sender_pid](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t_1a6c7d65a0a86c7b69ed58f9f71a043028) if the sender was an interrupt service routine.

#### `public int `[`msg_send`](#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Send a message (blocking).

This function sends a message to another thread. The `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structure has to be allocated (e.g. on the stack) before calling the function and can be freed afterwards. If called from an interrupt, this function will never block.

#### Parameters
* `m` Pointer to preallocated `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structure, must not be NULL. 

* `target_pid` PID of target thread

#### Returns
1, if sending was successful (message delivered directly or to a queue) 

#### Returns
0, if called from ISR and receiver cannot receive the message now (it is not waiting or it's message queue is full) 

#### Returns
-1, on error (invalid PID)

#### `public int `[`msg_try_send`](#group__core__msg_1ga99264bd4f263fa2b478308c1f7983c10)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Send a message (non-blocking).

This function sends a message to another thread. The `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structure has to be allocated (e.g. on the stack) before calling the function and can be freed afterwards. This function will never block.

#### Parameters
* `m` Pointer to preallocated `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structure, must not be NULL. 

* `target_pid` PID of target thread

#### Returns
1, if sending was successful (message delivered directly or to a queue) 

#### Returns
0, if receiver is not waiting or has a full message queue 

#### Returns
-1, on error (invalid PID)

#### `public int `[`msg_send_to_self`](#group__core__msg_1ga8711110548c90fe5ca82215e89bb83dd)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)` 

Send a message to the current thread.

Will work only if the thread has a message queue.

Will be automatically chosen instead of `msg_send` if `target_pid` == `thread_pid`. This function never blocks.

#### Parameters
* `m` pointer to message structure

#### Returns
1 if sending was successful 

#### Returns
0 if the thread's message queue is full (or inexistent)

#### `public int `[`msg_send_int`](#group__core__msg_1ga2762c096056c5eac7ffe38c8727e033a)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Send message from interrupt.

Will be automatically chosen instead of [msg_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8) if called from an interrupt/ISR.

The value of `m->sender_pid` is set to [KERNEL_PID_ISR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gadba0f57bc141ce3a7ec95fbd4bf26429).

**See also**: [msg_sent_by_int()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga77476ad20575d236516ec0acb0bdabd1)

#### Parameters
* `m` Pointer to preallocated [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) structure, must not be NULL. 

* `target_pid` PID of target thread.

#### Returns
1, if sending was successful 

#### Returns
0, if receiver is not waiting and `block == 0`

#### Returns
-1, on error (invalid PID)

#### `public inline static int `[`msg_sent_by_int`](#group__core__msg_1ga77476ad20575d236516ec0acb0bdabd1)`(const `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)` 

Test if the message was sent inside an ISR.

**See also**: [msg_send_int()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga2762c096056c5eac7ffe38c8727e033a)

#### Parameters
* `m` The message in question. 

#### Returns
`== 0` if *not* sent by an ISR 

#### Returns
`!= 0` if sent by an ISR

#### `public int `[`msg_receive`](#group__core__msg_1gae3e05f08bd71d6f65dc727624c4d5f7a)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)` 

Receive a message.

This function blocks until a message was received.

#### Parameters
* `m` Pointer to preallocated `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structure, must not be NULL.

#### Returns
1, Function always succeeds or blocks forever.

#### `public int `[`msg_try_receive`](#group__core__msg_1ga0a5e88bf7d9cadb41e5acf4deb300061)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m)` 

Try to receive a message.

This function does not block if no message can be received.

#### Parameters
* `m` Pointer to preallocated `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structure, must not be NULL.

#### Returns
1, if a message was received 

#### Returns
-1, otherwise.

#### `public int `[`msg_send_receive`](#group__core__msg_1ga01aee21f8554591c7933d4ba05cfe85b)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * reply,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Send a message, block until reply received.

This function sends a message to *target_pid* and then blocks until target has sent a reply which is then stored in *reply*. The responding thread must use [msg_reply()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga2e7b09dc269eb4847f6e08b9900ffda9).

Any incoming messages other than the reply are put into the queue (if one is configured), block the sender (if sent with [msg_send](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8) from a thread), or rejected (if sent with [msg_try_send](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga99264bd4f263fa2b478308c1f7983c10) or from an interrupt)  just like if the thread were blocked on anything different than message reception.

`target_pid` is not the PID of the current thread.

#### Parameters
* `m` Pointer to preallocated `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structure with the message to send, must not be NULL. 

* `reply` Pointer to preallocated msg. Reply will be written here, must not be NULL. Can be identical to `m`. 

* `target_pid` The PID of the target process

#### Returns
1, if successful.

#### `public int `[`msg_reply`](#group__core__msg_1ga2e7b09dc269eb4847f6e08b9900ffda9)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * reply)` 

Replies to a message.

Sender must have sent the message with [msg_send_receive()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1ga01aee21f8554591c7933d4ba05cfe85b).

#### Parameters
* `m` message to reply to, must not be NULL. 

* `reply` message that target will get as reply, must not be NULL.

#### Returns
1, if successful 

#### Returns
-1, on error

#### `public int `[`msg_reply_int`](#group__core__msg_1ga09edaaa9af7fca0a049459038b087583)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * m,`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * reply)` 

Replies to a message from interrupt.

An ISR can obviously not receive messages, however a thread might delegate replying to a message to an ISR.

#### Parameters
* `m` message to reply to, must not be NULL. 

* `reply` message that target will get as reply, must not be NULL.

#### Returns
1, if successful 

#### Returns
-1, on error

#### `public unsigned `[`msg_avail_thread`](#group__core__msg_1gaef6ea5d2ddb211eb61a51acd3f9d7507)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Check how many messages are available (waiting) in the message queue of a specific thread.

#### Parameters
* `pid` a PID

#### Returns
Number of messages available in queue of `pid` on success 

#### Returns
0, if no caller's message queue is initialized

#### `public unsigned `[`msg_avail`](#group__core__msg_1ga4b99e9912e2cd5c85afbb72dedb77ca3)`(void)` 

Check how many messages are available (waiting) in the message queue.

#### Returns
Number of messages available in our queue on success 

#### Returns
0, if no caller's message queue is initialized

#### `public unsigned `[`msg_queue_capacity`](#group__core__msg_1ga489c0d4da83324cd92c99db0a7682407)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Get maximum capacity of a thread's queue length.

#### Returns
Number of total messages that fit in the queue of `pid` on success 

#### Returns
0, if no caller's message queue is initialized

#### `public void `[`msg_init_queue`](#group__core__msg_1ga480e6f32c8ab18579b62a890f3fda2cd)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * array,int num)` 

Initialize the current thread's message queue.

`num`**MUST BE A POWER OF TWO!**

#### Parameters
* `array` Pointer to preallocated array of `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structures, must not be NULL. 

* `num` Number of `[msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` structures in array. **MUST BE POWER OF TWO!**

If array resides on the stack, the containing stack frame must never be left, not even if it is the current thread's entry function.

#### `public void `[`msg_queue_print`](#group__core__msg_1ga43b46e5167cdf2b2324920b59dae81a0)`(void)` 

Prints the message queue of the current thread.

# struct `msg_t` 

Describes a message object which can be sent between threads.

User can set type and one of content.ptr and content.value. (content is a union) The meaning of type and the content fields is totally up to the user, the corresponding fields are never read by the kernel.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`sender_pid`](#structmsg__t_1a6c7d65a0a86c7b69ed58f9f71a043028) | PID of sending thread.
`public uint16_t `[`type`](#structmsg__t_1a0014bd01d347dadc3e3289caec391d35) | Type field.
`public void * `[`ptr`](#structmsg__t_1a9672ce03c60b2c68d30d5ea9c21da980) | Pointer content field.
`public uint32_t `[`value`](#structmsg__t_1af85cec640cceaa304c14b26254923adc) | Value content field.
`public union msg_t::@1 `[`content`](#structmsg__t_1a191e1ed713936da26e17f9e644c1746f) | Content of the message.

## Members

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`sender_pid`](#structmsg__t_1a6c7d65a0a86c7b69ed58f9f71a043028) 

PID of sending thread.

Will be filled in by msg_send.

#### `public uint16_t `[`type`](#structmsg__t_1a0014bd01d347dadc3e3289caec391d35) 

Type field.

#### `public void * `[`ptr`](#structmsg__t_1a9672ce03c60b2c68d30d5ea9c21da980) 

Pointer content field.

#### `public uint32_t `[`value`](#structmsg__t_1af85cec640cceaa304c14b26254923adc) 

Value content field.

#### `public union msg_t::@1 `[`content`](#structmsg__t_1a191e1ed713936da26e17f9e644c1746f) 

Content of the message.

