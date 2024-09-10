---
title: api-sched_round_robin.md
description: api-sched_round_robin.md
---
# group `sched_round_robin` 

This module module provides round robin scheduling for all runable threads within each not masked priority.

Priority 0 is masked by default. This implementation tries to find a balance between low resources (static memory: a timer and an uint8), fairness in terms of CPU time share and simplicity. But it does round robin the runqueue when the timer ticks even if the thread just got the CPU.

This module might be used if threads are not divisible into priorities and cooperation can not be ensured.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SCHED_RR_TIMEOUT`](#group__sched__round__robin_1ga7425cef2bd28f24459008ba7d525eeb1)            | Time between round robin calls in Units of SCHED_RR_TIMERBASE.
`define `[`SCHED_RR_TIMERBASE`](#group__sched__round__robin_1ga192e46b9ebfa080ccb95a02311758f5f)            | ztimer to use for the round robin scheduler
`define `[`SCHED_RR_MASK`](#group__sched__round__robin_1gab07f076accb9e0d982097e9ce340f4ea)            | Masks off priorities that should not be scheduled default: 0 is masked.
`public void `[`sched_round_robin_init`](#group__sched__round__robin_1ga49a8b9599ccf850aaac8ecffda994227)`(void)`            | Initialises the Round Robin Scheduler.

## Members

#### `define `[`SCHED_RR_TIMEOUT`](#group__sched__round__robin_1ga7425cef2bd28f24459008ba7d525eeb1) 

Time between round robin calls in Units of SCHED_RR_TIMERBASE.

Defaults to 10ms

#### `define `[`SCHED_RR_TIMERBASE`](#group__sched__round__robin_1ga192e46b9ebfa080ccb95a02311758f5f) 

ztimer to use for the round robin scheduler

Defaults to ZTIMER_MSEC if available else it uses ZTIMER_USEC

#### `define `[`SCHED_RR_MASK`](#group__sched__round__robin_1gab07f076accb9e0d982097e9ce340f4ea) 

Masks off priorities that should not be scheduled default: 0 is masked.

Priority 0 (highest) should always be masked. Threads with that priority may not be programmed with the possibility of being scheduled in mind. Parts of this scheduler assume 0 current_rr_priority is uninitialised.

#### `public void `[`sched_round_robin_init`](#group__sched__round__robin_1ga49a8b9599ccf850aaac8ecffda994227)`(void)` 

Initialises the Round Robin Scheduler.

