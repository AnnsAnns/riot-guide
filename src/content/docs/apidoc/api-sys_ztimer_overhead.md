---
title: api-sys_ztimer_overhead.md
description: api-sys_ztimer_overhead.md
---
# group `sys_ztimer_overhead` 

ztimer overhead measurement functionality

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int32_t `[`ztimer_overhead_set`](#group__sys__ztimer__overhead_1gac552b38ec2ae60b86d47776d38fb400f)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t base)`            | Measure overhead for [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c)
`public int32_t `[`ztimer_overhead_sleep`](#group__sys__ztimer__overhead_1ga8fb07cbd1707173b489c80a0bc41e554)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t base)`            | Measure overhead for [ztimer_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360)

## Members

#### `public int32_t `[`ztimer_overhead_set`](#group__sys__ztimer__overhead_1gac552b38ec2ae60b86d47776d38fb400f)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t base)` 

Measure overhead for [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c)

This function can be used to measure the overhead incurred by [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c). It will configure a callback to trigger after `base` ticks, then return the number of ticks that have passed, minus `base`.

#### Parameters
* `clock` ztimer clock to operate on 

* `base` base interval to use 

#### Returns
(time from [ztimer_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga8934a79a89e35d58673418a1e4a2e69c) until callback) - base

#### `public int32_t `[`ztimer_overhead_sleep`](#group__sys__ztimer__overhead_1ga8fb07cbd1707173b489c80a0bc41e554)`(`[`ztimer_clock_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1ga3639ce794c3bd80a6e9bbe88a7db4a88)` * clock,uint32_t base)` 

Measure overhead for [ztimer_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360)

This function can be used to measure the overhead incurred by [ztimer_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360).

#### Parameters
* `clock` ztimer clock to operate on 

* `base` base interval to use 

#### Returns
(time(ztimer_sleep(base))) - base

