---
title: api-schedstatistics.md
description: api-schedstatistics.md
---
# group `schedstatistics` 

When including this module scheduler statistics ([schedstat_t](./doc/starlight-docs/src/content/docs/apidoc/api-schedstatistics.md#structschedstat__t)) for a thread will be updated on every [sched_run()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gacda65ff85439d041a78e904b3cd8f10c).

If auto_init is disabled `[init_schedstatistics()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__schedstatistics_1gadcd6b6f34589dfba96382d78f1293d77)` needs to be called as well as [xtimer_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1gabc079c5c696d02451bc3610391d177e6).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`init_schedstatistics`](#group__schedstatistics_1gadcd6b6f34589dfba96382d78f1293d77)`(void)`            | Registers the sched statistics callback and sets laststart for caller thread.
`struct `[`schedstat_t`](#structschedstat__t) | Scheduler statistics.

## Members

#### `public void `[`init_schedstatistics`](#group__schedstatistics_1gadcd6b6f34589dfba96382d78f1293d77)`(void)` 

Registers the sched statistics callback and sets laststart for caller thread.

# struct `schedstat_t` 

Scheduler statistics.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`laststart`](#structschedstat__t_1ac17720736be772f103087988d738cdd9) | Time stamp of the last time this thread was scheduled to run.
`public unsigned int `[`schedules`](#structschedstat__t_1a183292182760d6743eb81a1a4bb4d5d9) | How often the thread was scheduled to run.
`public uint64_t `[`runtime_us`](#structschedstat__t_1a5148f75570243c8d78ebae83fbbf3dba) | The total runtime of this thread in microseconds.

## Members

#### `public uint32_t `[`laststart`](#structschedstat__t_1ac17720736be772f103087988d738cdd9) 

Time stamp of the last time this thread was scheduled to run.

#### `public unsigned int `[`schedules`](#structschedstat__t_1a183292182760d6743eb81a1a4bb4d5d9) 

How often the thread was scheduled to run.

#### `public uint64_t `[`runtime_us`](#structschedstat__t_1a5148f75570243c8d78ebae83fbbf3dba) 

The total runtime of this thread in microseconds.

