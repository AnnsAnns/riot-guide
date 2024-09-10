---
title: api-pkg_paho_mqtt.md
description: api-pkg_paho_mqtt.md
---
# group `pkg_paho_mqtt` 

The Eclipse Paho project provides open-source client implementations of MQTT for embedded systems.

**See also**: [https://github.com/eclipse/paho.mqtt.embedded-c](https://github.com/eclipse/paho.mqtt.embedded-c)

The Eclipse Paho project provides open-source client implementations of MQTT.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MQTT_THREAD_PRIORITY`](#group__pkg__paho__mqtt_1ga76439d53a4b6f4d956494b8b025eb460)            | RIOT's mqtt paho thread priority.
`define `[`MQTT_THREAD_STACKSIZE`](#group__pkg__paho__mqtt_1ga33b64f367fbff6204a01bbd57cf0e8d0)            | RIOT's mqtt paho thread stack size.
`define `[`MQTT_YIELD_POLLING_MS`](#group__pkg__paho__mqtt_1gad9cd5b86f1eb453510b6bc36feaa1126)            | MQTT thread YIELD polling time in msecs.
`public void `[`TimerInit`](#group__pkg__paho__mqtt_1ga980a6cac528fade13ffdc5804a1d83bd)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer)`            | Initialize timer struct.
`public char `[`TimerIsExpired`](#group__pkg__paho__mqtt_1ga1d5e89eb91a028bdd0523a2d6777b214)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer)`            | is timer expired?
`public void `[`TimerCountdownMS`](#group__pkg__paho__mqtt_1ga0ffcdf18bf820b37b028e920c523b16f)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer,unsigned int msecs)`            | start timer set to milli seconds
`public void `[`TimerCountdown`](#group__pkg__paho__mqtt_1gaa1c335ebe1cce7f21db32897c19a1b81)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer,unsigned int secs)`            | start timer set to seconds
`public int `[`TimerLeftMS`](#group__pkg__paho__mqtt_1gade4fb2f5ebbcd5b3d8e55f5f2370a8e2)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer)`            | Returns millisecs left in timer.
`public void `[`NetworkInit`](#group__pkg__paho__mqtt_1gaf1c21a6d980926e2143ce6cc412c58ab)`(`[`Network`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork)` * n)`            | Initialize network struct.
`public int `[`NetworkConnect`](#group__pkg__paho__mqtt_1ga7d5cdadfdaf38d1ec6c7a86b91594034)`(`[`Network`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork)` * n,char * address_ip,int port_number)`            | Connect network to host.
`public void `[`NetworkDisconnect`](#group__pkg__paho__mqtt_1gaa232517bd360bfc8ba834297b015ec8d)`(`[`Network`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork)` * n)`            | Disconnect network.
`public void `[`MutexInit`](#group__pkg__paho__mqtt_1gab1960b2b7e7c7bbc6e0d91ed55da13d2)`(`[`Mutex`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex)` * mutex)`            | Initialize mutex struct.
`public int `[`MutexLock`](#group__pkg__paho__mqtt_1ga343e2b852184ade4f93c9edab5c8a88b)`(`[`Mutex`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex)` * mutex)`            | Locks mutex struct.
`public int `[`MutexUnlock`](#group__pkg__paho__mqtt_1ga6f5a157ddcad639555da72f4d6259ac6)`(`[`Mutex`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex)` * mutex)`            | Unlocks mutex struct.
`public int `[`ThreadStart`](#group__pkg__paho__mqtt_1ga3d29c95540245ee7f0db058d12f0cb76)`(`[`Thread`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread)` * thread,void(*)(void *) fn,void * arg)`            | Start new thread.
`struct `[`Timer`](#structTimer) | struct to get time references within mqtt paho
`struct `[`Network`](#structNetwork) | [Network](#structNetwork) struct within mqtt paho.
`struct `[`Mutex`](#structMutex) | [Mutex](#structMutex) struct within mqtt paho.
`struct `[`Thread`](#structThread) | [Thread](#structThread) struct within mqtt paho.

## Members

#### `define `[`MQTT_THREAD_PRIORITY`](#group__pkg__paho__mqtt_1ga76439d53a4b6f4d956494b8b025eb460) 

RIOT's mqtt paho thread priority.

#### `define `[`MQTT_THREAD_STACKSIZE`](#group__pkg__paho__mqtt_1ga33b64f367fbff6204a01bbd57cf0e8d0) 

RIOT's mqtt paho thread stack size.

#### `define `[`MQTT_YIELD_POLLING_MS`](#group__pkg__paho__mqtt_1gad9cd5b86f1eb453510b6bc36feaa1126) 

MQTT thread YIELD polling time in msecs.

#### `public void `[`TimerInit`](#group__pkg__paho__mqtt_1ga980a6cac528fade13ffdc5804a1d83bd)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer)` 

Initialize timer struct.

#### Parameters
* `timer` timer to init

#### `public char `[`TimerIsExpired`](#group__pkg__paho__mqtt_1ga1d5e89eb91a028bdd0523a2d6777b214)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer)` 

is timer expired?

#### Parameters
* `timer` timer to check

#### Returns
1 if timer expired, 0 otherwise

#### `public void `[`TimerCountdownMS`](#group__pkg__paho__mqtt_1ga0ffcdf18bf820b37b028e920c523b16f)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer,unsigned int msecs)` 

start timer set to milli seconds

#### Parameters
* `timer` timer to start 

* `msecs` time to set in msecs

#### `public void `[`TimerCountdown`](#group__pkg__paho__mqtt_1gaa1c335ebe1cce7f21db32897c19a1b81)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer,unsigned int secs)` 

start timer set to seconds

#### Parameters
* `timer` timer to start 

* `secs` time to set in secs

#### `public int `[`TimerLeftMS`](#group__pkg__paho__mqtt_1gade4fb2f5ebbcd5b3d8e55f5f2370a8e2)`(`[`Timer`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)` * timer)` 

Returns millisecs left in timer.

#### Parameters
* `timer` timer to check

#### Returns
msecs left

#### `public void `[`NetworkInit`](#group__pkg__paho__mqtt_1gaf1c21a6d980926e2143ce6cc412c58ab)`(`[`Network`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork)` * n)` 

Initialize network struct.

#### Parameters
* `n` network struct

#### `public int `[`NetworkConnect`](#group__pkg__paho__mqtt_1ga7d5cdadfdaf38d1ec6c7a86b91594034)`(`[`Network`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork)` * n,char * address_ip,int port_number)` 

Connect network to host.

#### Parameters
* `n` network struct 

* `address_ip` IP address to connect to 

* `port_number` port to connect to

#### Returns
0 if success, !=0 otherwise

#### `public void `[`NetworkDisconnect`](#group__pkg__paho__mqtt_1gaa232517bd360bfc8ba834297b015ec8d)`(`[`Network`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork)` * n)` 

Disconnect network.

#### Parameters
* `n` network struct

#### `public void `[`MutexInit`](#group__pkg__paho__mqtt_1gab1960b2b7e7c7bbc6e0d91ed55da13d2)`(`[`Mutex`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex)` * mutex)` 

Initialize mutex struct.

#### Parameters
* `mutex` pointer

#### `public int `[`MutexLock`](#group__pkg__paho__mqtt_1ga343e2b852184ade4f93c9edab5c8a88b)`(`[`Mutex`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex)` * mutex)` 

Locks mutex struct.

#### Parameters
* `mutex` pointer

#### Returns
0 if success, !=0 otherwise

#### `public int `[`MutexUnlock`](#group__pkg__paho__mqtt_1ga6f5a157ddcad639555da72f4d6259ac6)`(`[`Mutex`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex)` * mutex)` 

Unlocks mutex struct.

#### Parameters
* `mutex` pointer

#### Returns
0 if success, !=0 otherwise

#### `public int `[`ThreadStart`](#group__pkg__paho__mqtt_1ga3d29c95540245ee7f0db058d12f0cb76)`(`[`Thread`](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread)` * thread,void(*)(void *) fn,void * arg)` 

Start new thread.

#### Parameters
* `thread` to start 

* `fn` pointer function to execute 

* `arg` arguments to pass to that fn

#### Returns
0 if success, !=0 otherwise

# struct `Timer` 

struct to get time references within mqtt paho

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`timeout`](#structTimer_1a726d47b4f10d2b9e99a582b8b2fd91d9) | timeout in ms
`public uint32_t `[`time_set`](#structTimer_1a251835e11fc54f4b5502655f4df6848b) | set time in ms

## Members

#### `public uint32_t `[`timeout`](#structTimer_1a726d47b4f10d2b9e99a582b8b2fd91d9) 

timeout in ms

#### `public uint32_t `[`time_set`](#structTimer_1a251835e11fc54f4b5502655f4df6848b) 

set time in ms

# struct `Network` 

[Network](#structNetwork) struct within mqtt paho.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` `[`sock`](#structNetwork_1a4fa3a2baed85fa13df6b82f304337975) | socket number
`public int(* `[`mqttread`](#structNetwork_1abc8ae7e1112887813fd1c700c7f98878) | read internal function
`public int(* `[`mqttwrite`](#structNetwork_1a0bb4fce7b01f0a5781301c5c3ec8d37e) | write internal function

## Members

#### `public `[`sock_tcp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sock__async_1ga0144778bc074e291fcb0d43bd35c0179)` `[`sock`](#structNetwork_1a4fa3a2baed85fa13df6b82f304337975) 

socket number

#### `public int(* `[`mqttread`](#structNetwork_1abc8ae7e1112887813fd1c700c7f98878) 

read internal function

#### `public int(* `[`mqttwrite`](#structNetwork_1a0bb4fce7b01f0a5781301c5c3ec8d37e) 

write internal function

# struct `Mutex` 

[Mutex](#structMutex) struct within mqtt paho.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structMutex_1a616e849ebf4b39f665ce3d6cb89e2276) | MQTT thread mutex.

## Members

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structMutex_1a616e849ebf4b39f665ce3d6cb89e2276) 

MQTT thread mutex.

# struct `Thread` 

[Thread](#structThread) struct within mqtt paho.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char `[`stack`](#structThread_1aa6d729934b62212580b350ea4972a206) | stack for MQTT thread
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structThread_1a5578a824fe9b53a8921b99f349748453) | MQTT thread pid.

## Members

#### `public char `[`stack`](#structThread_1aa6d729934b62212580b350ea4972a206) 

stack for MQTT thread

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structThread_1a5578a824fe9b53a8921b99f349748453) 

MQTT thread pid.

