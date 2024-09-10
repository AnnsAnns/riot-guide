---
title: api-sys_event.md
description: api-sys_event.md
---
# group `sys_event` 

Provides an Event loop.

This module offers an event queue framework like libevent or libuev.

An event queue is basically a FIFO queue of events, with some functions to efficiently and safely handle adding and getting events to / from such a queue.

An event queue is bound to a thread, but any thread or ISR can put events into a queue. In most cases, the owning thread of a queue is set during the queue's initialization. But it is also possible to initialize a queue in a detached state from a different context and to set the owning thread at a later point of time using the [event_queue_claim()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga901462dc0093b6da40ec2fa787ac704f) function.

An event is a structure containing a pointer to an event handler. It can be extended to provide context or arguments to the handler. It can also be embedded into existing structures (see examples).

Compared to msg or mbox, this some fundamental differences:

* events are "sender allocated". Unlike [msg_send()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__msg_1gac5347725c3d203ac72604c0ab8b7d6d8), [event_post()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga2053ce1facf709fffd024bee9e2383ba) never blocks or fails.

* events contain everything necessary to handle them, thus a thread processing the events of an event queue doesn't need to be changed in order to support new event types.

* events can be safely used (and actually perform best) when used within one thread, e.g., in order to create a state-machine like process flow. This is not (easily) possible using msg queues, as they might fill up.

* an event can only be queued in one event queue at the same time. Notifying many queues using only one event object is not possible with this implementation.

At the core, [event_wait()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga1a8c9a1fbf3ffc656a1ab53ab1585df3) uses thread flags to implement waiting for events to be queued. Thus event queues can be used safely and efficiently in combination with thread flags and msg queues.

Examples:

```cpp
// simple event handler
static void handler(event_t *event)
{
   printf("triggered 0x%08x\n", (unsigned)event);
}

static event_t event = { .handler = handler };
static event_queue_t queue;

int main(void)
{
    event_queue_init(&queue);
    event_loop(&queue);
}

[...] event_post(&queue, &event);

// example for event extended event struct
typedef struct {
    event_t super;
    const char *text;
} custom_event_t;

static void custom_handler(event_t *event)
{
    custom_event_t *custom_event = container_of(event, custom_event_t, super);
    printf("triggered custom event with text: \"%s\"\n", custom_event->text);
}

static custom_event_t custom_event = { .super.handler = custom_handler, .text = "CUSTOM EVENT" };

[...] event_post(&queue, &custom_event.super)
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`THREAD_FLAG_EVENT`](#group__sys__event_1gaafa9b96ad0e2d68d166b6ba394660a4b)            | [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) flag use to notify available events in an event queue.
`define `[`EVENT_QUEUE_INIT`](#group__sys__event_1gafbc0919266554541d5723bed79b1e3ed)            | event_queue_t static initializer
`define `[`EVENT_QUEUE_INIT_DETACHED`](#group__sys__event_1ga4e41a0654cf42441ef0a640053894911)            | static initializer for detached event queues
`public inline static void `[`event_queues_init`](#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)`            | Initialize an array of event queues.
`public inline static void `[`event_queue_init`](#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)`            | Initialize an event queue.
`public inline static void `[`event_queues_init_detached`](#group__sys__event_1gaba3402e5ea1b6f2682b7e4f6a8294150)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)`            | Initialize an array of event queues not binding it to a thread.
`public inline static void `[`event_queue_init_detached`](#group__sys__event_1ga7abb6e200225ac747dcccc071add6a24)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)`            | Initialize an event queue not binding it to a thread.
`public inline static void `[`event_queues_claim`](#group__sys__event_1gaa3f1745747ef9c13022aa925eead68cd)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)`            | Bind an array of event queues to the calling thread.
`public inline static void `[`event_queue_claim`](#group__sys__event_1ga901462dc0093b6da40ec2fa787ac704f)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)`            | Bind an event queue to the calling thread.
`public void `[`event_post`](#group__sys__event_1ga2053ce1facf709fffd024bee9e2383ba)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,`[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)`            | Queue an event.
`public void `[`event_cancel`](#group__sys__event_1ga696280baa5719e3c5ef75fec41e81b3a)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,`[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)`            | Cancel a queued event.
`public bool `[`event_is_queued`](#group__sys__event_1gae22c0ded4bec448dacb780e8948f416a)`(const `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,const `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)`            | Check if an event is already queued.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_get`](#group__sys__event_1gae5b6336946a171046f7626f476fba292)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)`            | Get next event from event queue, non-blocking.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_multi`](#group__sys__event_1gaf549606f1a9059f0b1b0cef87ca6a95b)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)`            | Get next event from the given event queues, blocking.
`public inline static `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait`](#group__sys__event_1ga1a8c9a1fbf3ffc656a1ab53ab1585df3)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)`            | Get next event from event queue, blocking.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_timeout`](#group__sys__event_1gaf979ad68f1d4ef379de1f0da0644ff72)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,uint32_t timeout)`            | Get next event from event queue, blocking until timeout expires.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_timeout64`](#group__sys__event_1ga22551716e8df163590e16bf2cc5ff590)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,uint64_t timeout)`            | Get next event from event queue, blocking until timeout expires.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_timeout_ztimer`](#group__sys__event_1ga6bfc83e3b8a0fcc0ba88fc905412ca5f)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t timeout)`            | Get next event from event queue, blocking until timeout expires.
`public inline static void `[`event_loop_multi`](#group__sys__event_1ga1d52cdf6e7593e240311a119ca076f7e)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)`            | Simple event loop with multiple queues.
`public inline static void `[`event_loop`](#group__sys__event_1ga321751eb630a363f187305e098229e7d)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)`            | Simple event loop.
`struct `[`event`](#structevent) | event structure
`struct `[`PTRTAG`](#structPTRTAG) | event queue structure

## Members

#### `define `[`THREAD_FLAG_EVENT`](#group__sys__event_1gaafa9b96ad0e2d68d166b6ba394660a4b) 

[Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) flag use to notify available events in an event queue.

#### `define `[`EVENT_QUEUE_INIT`](#group__sys__event_1gafbc0919266554541d5723bed79b1e3ed) 

event_queue_t static initializer

#### `define `[`EVENT_QUEUE_INIT_DETACHED`](#group__sys__event_1ga4e41a0654cf42441ef0a640053894911) 

static initializer for detached event queues

#### `public inline static void `[`event_queues_init`](#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)` 

Initialize an array of event queues.

This will set the calling thread as owner of each queue in `queues`.

#### Parameters
* `queues` event queue objects to initialize 

* `n_queues` number of queues in `queues`

#### `public inline static void `[`event_queue_init`](#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)` 

Initialize an event queue.

This will set the calling thread as owner of `queue`.

#### Parameters
* `queue` event queue object to initialize

#### `public inline static void `[`event_queues_init_detached`](#group__sys__event_1gaba3402e5ea1b6f2682b7e4f6a8294150)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)` 

Initialize an array of event queues not binding it to a thread.

#### Parameters
* `queues` event queue objects to initialize 

* `n_queues` number of queues in `queues`

#### `public inline static void `[`event_queue_init_detached`](#group__sys__event_1ga7abb6e200225ac747dcccc071add6a24)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)` 

Initialize an event queue not binding it to a thread.

#### Parameters
* `queue` event queue object to initialize

#### `public inline static void `[`event_queues_claim`](#group__sys__event_1gaa3f1745747ef9c13022aa925eead68cd)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)` 

Bind an array of event queues to the calling thread.

This function must only be called once and only if the given queue is not yet bound to a thread.

(queues[i].waiter == NULL for i in {0, ..., n_queues - 1})

#### Parameters
* `queues` event queue objects to bind to a thread 

* `n_queues` number of queues in `queues`

#### `public inline static void `[`event_queue_claim`](#group__sys__event_1ga901462dc0093b6da40ec2fa787ac704f)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)` 

Bind an event queue to the calling thread.

This function must only be called once and only if the given queue is not yet bound to a thread.

(queue->waiter == NULL)

#### Parameters
* `queue` event queue object to bind to a thread

#### `public void `[`event_post`](#group__sys__event_1ga2053ce1facf709fffd024bee9e2383ba)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,`[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)` 

Queue an event.

The given event will be posted on the given `queue`. If the event is already queued when calling this function, the event will not be touched and remain in the previous position on the queue. So reposting an event while it is already on the queue will have no effect.

queue should be initialized

#### Parameters
* `queue` event queue to queue event in 

* `event` event to queue in event queue

#### `public void `[`event_cancel`](#group__sys__event_1ga696280baa5719e3c5ef75fec41e81b3a)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,`[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)` 

Cancel a queued event.

This will remove a queued event from an event queue.

Due to the underlying list implementation, this will run in O(n).

#### Parameters
* `queue` event queue to remove event from 

* `event` event to remove from queue

#### `public bool `[`event_is_queued`](#group__sys__event_1gae22c0ded4bec448dacb780e8948f416a)`(const `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,const `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * event)` 

Check if an event is already queued.

#### Parameters
* `queue` event queue to check 

* `event` event to check

#### Returns
true if `event` is in `queue`

#### Returns
false otherwise

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_get`](#group__sys__event_1gae5b6336946a171046f7626f476fba292)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)` 

Get next event from event queue, non-blocking.

In order to handle an event retrieved using this function, call event->handler(event).

#### Parameters
* `queue` event queue to get event from

#### Returns
pointer to next event 

#### Returns
NULL if no event available

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_multi`](#group__sys__event_1gaf549606f1a9059f0b1b0cef87ca6a95b)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)` 

Get next event from the given event queues, blocking.

This function will block until an event becomes available. If more than one queue contains an event, the queue with the lowest index is chosen. Thus, a lower index in the `queues` array translates into a higher priority of the queue.

In order to handle an event retrieved using this function, call event->handler(event).

There can only be a single waiter on a queue!

This function *can* be suitable for having a single thread handling both real-time and non-real-time events. However, a real time event can be delayed for the whole duration a single non-real-time event takes (in addition to all other sources of latency). Thus, the slowest to handle non-real-time event must still execute fast enough to add an amount of latency (on top of other sources of latency) that is acceptable to the real-time event with the strictest requirements.

0 < `n_queues` (expect blowing `[assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53)` otherwise) 

The queue must have a waiter (i.e. it should have been claimed, or initialized using [event_queue_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896), [event_queues_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb))

#### Parameters
* `queues` Array of event queues to get event from 

* `n_queues` Number of event queues passed in `queues`

#### Returns
pointer to next event

#### `public inline static `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait`](#group__sys__event_1ga1a8c9a1fbf3ffc656a1ab53ab1585df3)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)` 

Get next event from event queue, blocking.

This function will block until an event becomes available.

In order to handle an event retrieved using this function, call event->handler(event).

There can only be a single waiter on a queue!

The queue must have a waiter (i.e. it should have been claimed, or initialized using [event_queue_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896), [event_queues_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb))

#### Parameters
* `queue` event queue to get event from

#### Returns
pointer to next event

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_timeout`](#group__sys__event_1gaf979ad68f1d4ef379de1f0da0644ff72)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,uint32_t timeout)` 

Get next event from event queue, blocking until timeout expires.

The queue must have a waiter (i.e. it should have been claimed, or initialized using [event_queue_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896), [event_queues_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb))

#### Parameters
* `queue` queue to query for an event 

* `timeout` maximum time to wait for an event to be posted in us

#### Returns
pointer to next event if event was taken from the queue 

#### Returns
NULL if timeout expired before an event was posted

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_timeout64`](#group__sys__event_1ga22551716e8df163590e16bf2cc5ff590)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,uint64_t timeout)` 

Get next event from event queue, blocking until timeout expires.

The queue must have a waiter (i.e. it should have been claimed, or initialized using [event_queue_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896), [event_queues_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb))

#### Parameters
* `queue` queue to query for an event 

* `timeout` maximum time to wait for an event to be posted in us

#### Returns
pointer to next event if event was taken from the queue 

#### Returns
NULL if timeout expired before an event was posted

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` * `[`event_wait_timeout_ztimer`](#group__sys__event_1ga6bfc83e3b8a0fcc0ba88fc905412ca5f)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue,`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t timeout)` 

Get next event from event queue, blocking until timeout expires.

This function is the same as [event_wait_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gaf979ad68f1d4ef379de1f0da0644ff72) with the difference that it uses ztimer instead of xtimer as timer backend.

The queue must have a waiter (i.e. it should have been claimed, or initialized using [event_queue_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896), [event_queues_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb))

#### Parameters
* `queue` queue to query for an event 

* `clock` ztimer clock to use 

* `timeout` maximum time to wait for an event, time unit depends on the used ztimer clock

#### Returns
pointer to next event if event was taken from the queue 

#### Returns
NULL if timeout expired before an event was posted

#### `public inline static void `[`event_loop_multi`](#group__sys__event_1ga1d52cdf6e7593e240311a119ca076f7e)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queues,size_t n_queues)` 

Simple event loop with multiple queues.

This function will forever sit in a loop, waiting for events to be queued and executing their handlers. If more than one queue contains an event, the queue with the lowest index is chosen. Thus, a lower index in the `queues` array translates into a higher priority of the queue.

It is pretty much defined as:

```cpp
while ((event = event_wait_multi(queues, n_queues))) {
    event->handler(event);
}
```

**See also**: [event_wait_multi](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gaf549606f1a9059f0b1b0cef87ca6a95b)

The queue must have a waiter (i.e. it should have been claimed, or initialized using [event_queue_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896), [event_queues_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb))

#### Parameters
* `queues` Event queues to process 

* `n_queues` Number of queues passed with `queues`

#### `public inline static void `[`event_loop`](#group__sys__event_1ga321751eb630a363f187305e098229e7d)`(`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * queue)` 

Simple event loop.

This function will forever sit in a loop, waiting for events to be queued and executing their handlers.

It is pretty much defined as:

```cpp
while ((event = event_wait(queue))) {
    event->handler(event);
}
```

The queue must have a waiter (i.e. it should have been claimed, or initialized using [event_queue_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga609d4085b10b48c8b8725dab5b465896), [event_queues_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0b53659c2fbf312ff1a47782a42e0cb))

#### Parameters
* `queue` event queue to process

# struct `event` 

event structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_node`](#structevent_1a2504589100030397ca11ac6045341748) | event queue list entry
`public `[`event_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga60c9f34f565c834ed82a585d154d0010)` `[`handler`](#structevent_1a09014dfe22d45e0d11b3d71f0361dbb7) | pointer to event handler function

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`list_node`](#structevent_1a2504589100030397ca11ac6045341748) 

event queue list entry

#### `public `[`event_handler_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga60c9f34f565c834ed82a585d154d0010)` `[`handler`](#structevent_1a09014dfe22d45e0d11b3d71f0361dbb7) 

pointer to event handler function

# struct `PTRTAG` 

event queue structure

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`event_list`](#structPTRTAG_1afe6e1b9433b9dbf412e154de20012d2c) | list of queued events
`public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`waiter`](#structPTRTAG_1a1827d868238afcc7797e8ff1eb6fb91e) | thread owning event queue

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`event_list`](#structPTRTAG_1afe6e1b9433b9dbf412e154de20012d2c) 

list of queued events

#### `public `[`thread_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga072d60b1771a699e43ff01970e92bb00)` * `[`waiter`](#structPTRTAG_1a1827d868238afcc7797e8ff1eb6fb91e) 

thread owning event queue

