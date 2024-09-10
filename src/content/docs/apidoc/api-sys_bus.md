---
title: api-sys_bus.md
description: api-sys_bus.md
---
# group `sys_bus` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`sys_bus_t`](#group__sys__bus_1gaee4da635f57b99dc3abc2b47d57161de)            | System Bus types.
`enum `[`sys_bus_power_event_t`](#group__sys__bus_1ga2414e5ad78a6810113f3807e5e8c278a)            | Power Bus Events.
`public inline static `[`msg_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmsg__bus__t)` * `[`sys_bus_get`](#group__sys__bus_1ga5b2866158d7bc7fee02cc1cffc90abe5)`(`[`sys_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bus_1gaee4da635f57b99dc3abc2b47d57161de)` bus)`            | Get a System Bus for a category of events.

## Members

#### `enum `[`sys_bus_t`](#group__sys__bus_1gaee4da635f57b99dc3abc2b47d57161de) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SYS_BUS_NUMOF            | Number of enabled system buses.

System Bus types.

#### `enum `[`sys_bus_power_event_t`](#group__sys__bus_1ga2414e5ad78a6810113f3807e5e8c278a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SYS_BUS_POWER_EVENT_LOW_VOLTAGE            | Supply voltage fallen below threshold.

Power Bus Events.

#### `public inline static `[`msg_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structmsg__bus__t)` * `[`sys_bus_get`](#group__sys__bus_1ga5b2866158d7bc7fee02cc1cffc90abe5)`(`[`sys_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bus_1gaee4da635f57b99dc3abc2b47d57161de)` bus)` 

Get a System Bus for a category of events.

#### Parameters
* `bus` The event category of the the user is interested in

#### Returns
The message bus for those events

