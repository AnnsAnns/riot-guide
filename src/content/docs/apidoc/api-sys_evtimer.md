---
title: api-sys_evtimer.md
description: api-sys_evtimer.md
---
# group `sys_evtimer` 

Provides timers for events up to $2^{32}$ milliseconds in the future.

Experimental and likely to replaced with unified timer API

RIOT's main timer subsystem is [ztimer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer) but compared to [ztimer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer), evtimer offers:

* only relative 32-bit millisecond timer values Events can be scheduled with a relative offset of up to ~49.7 days in the future. **For time-critical stuff, use [ztimer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer)!**

* more flexible, "intrusive" timer type [evtimer_event_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14) only contains the necessary fields, which can be extended as needed, and handlers define actions taken on timer triggers. Check out [evtimer_msg_event_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t) as example.

* when a number of timeouts with the same callback function need to be scheduled, evtimer is using less RAM (due to storing the callback function only once), while each ztimer has a function pointer for the callback.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`evtimer_init`](#group__sys__evtimer_1ga4aa2974ffeb3b1081075f019f0d1b392)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga8b357710e3e348d8c5f1a0534fff450b)` handler)`            | Initializes an event timer.
`public void `[`evtimer_add`](#group__sys__evtimer_1gaf16ca55176cfdb80d90108ccf8ff52cc)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)`            | Adds event to an event timer.
`public void `[`evtimer_del`](#group__sys__evtimer_1gaaf06f795454454173e9fe86b9373855d)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)`            | Removes an event from an event timer.
`public void `[`evtimer_print`](#group__sys__evtimer_1ga076cf234a84e79edc2d82cb016a24531)`(const `[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer)`            | Print overview of current state of an event timer.
`public inline static uint32_t `[`evtimer_now_msec`](#group__sys__evtimer_1gac4b2b0be736bd73247fe43ce275c9e66)`(void)`            | Return the current system time in msec.
`public inline static void `[`evtimer_add_mbox`](#group__sys__evtimer_1gae748e21f5331135838ab2bd5c966e452)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_mbox_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__mbox__event__t)` * event,`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)`            | Adds mbox event to an event timer.
`public inline static void `[`_evtimer_mbox_handler`](#group__sys__evtimer_1ga631c91532fe5550a3bad8b7277a1265b)`(`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)`            | Event handler for mbox events.
`public inline static void `[`evtimer_init_mbox`](#group__sys__evtimer_1ga8266041f07f5d6366638e2ceb85e176a)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer)`            | Initializes event timer for mbox events.
`public inline static void `[`evtimer_add_msg`](#group__sys__evtimer_1ga573297285eefc2bcb8a0392d6f5dd659)`(`[`evtimer_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga67aab98811cfc6bb04537046259dc084)` * evtimer,`[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` * event,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)`            | Adds event to an event timer that handles events via IPC.
`public inline static void `[`_evtimer_msg_handler`](#group__sys__evtimer_1ga2d1e6d8f761991154659d214a234b6a0)`(`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)`            | Event handler for IPC messages.
`public inline static void `[`evtimer_init_msg`](#group__sys__evtimer_1ga8483b901c7cbaa9604ae844e646d94ae)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer)`            | Initializes event timer to handle events via IPC.
`struct `[`evtimer_event`](#structevtimer__event) | Generic event.
`struct `[`evtimer_t`](#structevtimer__t) | Event timer.
`struct `[`evtimer_mbox_event_t`](#structevtimer__mbox__event__t) | Message box event definition.
`struct `[`evtimer_msg_event_t`](#structevtimer__msg__event__t) | IPC-message event.

## Members

#### `public void `[`evtimer_init`](#group__sys__evtimer_1ga4aa2974ffeb3b1081075f019f0d1b392)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga8b357710e3e348d8c5f1a0534fff450b)` handler)` 

Initializes an event timer.

BEWARE! Callbacks from [evtimer_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga4aa2974ffeb3b1081075f019f0d1b392) are being executed in interrupt context. DON'T USE THIS FUNCTION unless you know *exactly* what that means.

#### Parameters
* `evtimer` An event timer 

* `handler` An event handler function

#### `public void `[`evtimer_add`](#group__sys__evtimer_1gaf16ca55176cfdb80d90108ccf8ff52cc)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)` 

Adds event to an event timer.

#### Parameters
* `evtimer` An event timer 

* `event` An event

#### `public void `[`evtimer_del`](#group__sys__evtimer_1gaaf06f795454454173e9fe86b9373855d)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)` 

Removes an event from an event timer.

#### Parameters
* `evtimer` An event timer 

* `event` An event

#### `public void `[`evtimer_print`](#group__sys__evtimer_1ga076cf234a84e79edc2d82cb016a24531)`(const `[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer)` 

Print overview of current state of an event timer.

#### Parameters
* `evtimer` An event timer

#### `public inline static uint32_t `[`evtimer_now_msec`](#group__sys__evtimer_1gac4b2b0be736bd73247fe43ce275c9e66)`(void)` 

Return the current system time in msec.

#### `public inline static void `[`evtimer_add_mbox`](#group__sys__evtimer_1gae748e21f5331135838ab2bd5c966e452)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer,`[`evtimer_mbox_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__mbox__event__t)` * event,`[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * mbox)` 

Adds mbox event to an event timer.

`evtimer` is not NULL. 

`event` is not NULL. 

`mbox` is not NULL.

#### Parameters
* `evtimer` [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) to add `event`. 

* `event` Event to add. 

* `mbox` Mbox to store event->msg timer expiration.

#### `public inline static void `[`_evtimer_mbox_handler`](#group__sys__evtimer_1ga631c91532fe5550a3bad8b7277a1265b)`(`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)` 

Event handler for mbox events.

`event` is not NULL.

#### Parameters
* `event` The event to handle

#### `public inline static void `[`evtimer_init_mbox`](#group__sys__evtimer_1ga8266041f07f5d6366638e2ceb85e176a)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer)` 

Initializes event timer for mbox events.

`evtimer` is not NULL.

#### Parameters
* `evtimer` An event timer

#### `public inline static void `[`evtimer_add_msg`](#group__sys__evtimer_1ga573297285eefc2bcb8a0392d6f5dd659)`(`[`evtimer_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga67aab98811cfc6bb04537046259dc084)` * evtimer,`[`evtimer_msg_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__msg__event__t)` * event,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` target_pid)` 

Adds event to an event timer that handles events via IPC.

#### Parameters
* `evtimer` An event timer 

* `event` An event 

* `target_pid` The PID of the thread that should receive the IPC message

#### `public inline static void `[`_evtimer_msg_handler`](#group__sys__evtimer_1ga2d1e6d8f761991154659d214a234b6a0)`(`[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * event)` 

Event handler for IPC messages.

#### Parameters
* `event` The event to handle

#### `public inline static void `[`evtimer_init_msg`](#group__sys__evtimer_1ga8483b901c7cbaa9604ae844e646d94ae)`(`[`evtimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_evtimer.md#structevtimer__t)` * evtimer)` 

Initializes event timer to handle events via IPC.

#### Parameters
* `evtimer` An event timer

# struct `evtimer_event` 

Generic event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`evtimer_event`](#structevtimer__event)` * `[`next`](#structevtimer__event_1a4e14a592c3a3118d5c902a68446b6756) | the next event in the queue
`public uint32_t `[`offset`](#structevtimer__event_1a208a9e08189e9d89f509a6308035627e) | offset in milliseconds from previous event

## Members

#### `public struct `[`evtimer_event`](#structevtimer__event)` * `[`next`](#structevtimer__event_1a4e14a592c3a3118d5c902a68446b6756) 

the next event in the queue

#### `public uint32_t `[`offset`](#structevtimer__event_1a208a9e08189e9d89f509a6308035627e) 

offset in milliseconds from previous event

# struct `evtimer_t` 

Event timer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timer`](#structevtimer__t_1ac6961385601782f4dd0b82a2dabf71ac) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer).
`public uint32_t `[`base`](#structevtimer__t_1a833653ba6a935f2134f539eb8c3915f8) | Absolute time the first event is built on.
`public `[`evtimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga8b357710e3e348d8c5f1a0534fff450b)` `[`callback`](#structevtimer__t_1aac4722b3bf95f323b37ba50a78468434) | Handler function for this evtimer's event type.
`public `[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * `[`events`](#structevtimer__t_1ad71dc80d2949be376000e68acac26f30) | Event queue.

## Members

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`timer`](#structevtimer__t_1ac6961385601782f4dd0b82a2dabf71ac) 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer).

#### `public uint32_t `[`base`](#structevtimer__t_1a833653ba6a935f2134f539eb8c3915f8) 

Absolute time the first event is built on.

#### `public `[`evtimer_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga8b357710e3e348d8c5f1a0534fff450b)` `[`callback`](#structevtimer__t_1aac4722b3bf95f323b37ba50a78468434) 

Handler function for this evtimer's event type.

#### `public `[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` * `[`events`](#structevtimer__t_1ad71dc80d2949be376000e68acac26f30) 

Event queue.

# struct `evtimer_mbox_event_t` 

Message box event definition.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` `[`event`](#structevtimer__mbox__event__t_1aa05783d5696d27e2c008a60a4cbcf7bf) | event base class
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structevtimer__mbox__event__t_1a1349ef049b0c6fb34e64cba33531bff8) | message to store in mbox on event
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structevtimer__mbox__event__t_1ad601458e9c8ee56619944e10c29f4514) | mbox the IPC message shall be stored

## Members

#### `public `[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` `[`event`](#structevtimer__mbox__event__t_1aa05783d5696d27e2c008a60a4cbcf7bf) 

event base class

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structevtimer__mbox__event__t_1a1349ef049b0c6fb34e64cba33531bff8) 

message to store in mbox on event

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structevtimer__mbox__event__t_1ad601458e9c8ee56619944e10c29f4514) 

mbox the IPC message shall be stored

# struct `evtimer_msg_event_t` 

```
struct evtimer_msg_event_t
  : public evtimer_event
```  

IPC-message event.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` `[`event`](#structevtimer__msg__event__t_1afa06c22e996b1a7f09909ec4bc7f4b31) | base class
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structevtimer__msg__event__t_1aa26894ce17e93cc01c43719ca3761452) | the IPC message to generate on event

## Members

#### `public `[`evtimer_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__evtimer_1ga0725030ee16d5c2cdee0dc4f6395cc14)` `[`event`](#structevtimer__msg__event__t_1afa06c22e996b1a7f09909ec4bc7f4b31) 

base class

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structevtimer__msg__event__t_1aa26894ce17e93cc01c43719ca3761452) 

the IPC message to generate on event

