---
title: api-sys_pm_layered.md
description: api-sys_pm_layered.md
---
# group `sys_pm_layered` 

This module provides a base infrastructure that MCU's may use to implement periph/pm.

This simple power management interface is based on the following assumptions:

* CPUs define a number of power modes (from zero, the lowest power mode, to PM_NUM_MODES, the highest)

* there is an implicit extra busy-wait mode (which has the number PM_NUM_MODES) where the CPU is kept spinning if all modes are blocked.

* individual power modes can be blocked/unblocked, e.g., by peripherals

* if a mode is blocked, so are implicitly all lower modes

* the idle thread automatically selects and sets the lowest unblocked mode

In order to use this module, you'll need to implement [pm_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__pm__layered_1ga704936361595d126eb49c5c81063c104).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PROVIDES_PM_OFF`](#group__sys__pm__layered_1ga19d28a07b2898cf543c068c890ab7da0)            | 
`define `[`PROVIDES_PM_SET_LOWEST`](#group__sys__pm__layered_1ga04211208eb7863ce1c522440a91c745c)            | 
`public inline static void `[`pm_block`](#group__sys__pm__layered_1ga9e330b778731df8e451a6c571d94a2b1)`(unsigned mode)`            | Block a power mode.
`public inline static void `[`pm_unblock`](#group__sys__pm__layered_1ga5413f3f0e074312b488f6abcf6b4726a)`(unsigned mode)`            | Unblock a power mode.
`public void `[`pm_set`](#group__sys__pm__layered_1ga704936361595d126eb49c5c81063c104)`(unsigned mode)`            | Switches the MCU to a new power mode.
`public pm_blocker_t `[`pm_get_blocker`](#group__sys__pm__layered_1ga88823b073c9ba3020b3bc269ada0181f)`(void)`            | Get currently blocked PM modes.
`struct `[`WORD_ALIGNED`](#structWORD__ALIGNED) | Power Management mode blocker typedef.

## Members

#### `define `[`PROVIDES_PM_OFF`](#group__sys__pm__layered_1ga19d28a07b2898cf543c068c890ab7da0) 

#### `define `[`PROVIDES_PM_SET_LOWEST`](#group__sys__pm__layered_1ga04211208eb7863ce1c522440a91c745c) 

#### `public inline static void `[`pm_block`](#group__sys__pm__layered_1ga9e330b778731df8e451a6c571d94a2b1)`(unsigned mode)` 

Block a power mode.

#### Parameters
* `mode` power mode to block

#### `public inline static void `[`pm_unblock`](#group__sys__pm__layered_1ga5413f3f0e074312b488f6abcf6b4726a)`(unsigned mode)` 

Unblock a power mode.

#### Parameters
* `mode` power mode to unblock

#### `public void `[`pm_set`](#group__sys__pm__layered_1ga704936361595d126eb49c5c81063c104)`(unsigned mode)` 

Switches the MCU to a new power mode.

This function will be called by [pm_set_lowest()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pm_1ga3cfb539da19d37887bd65c15f9ac1342) after determining the lowest non-blocked mode.

It needs to be implemented for each MCU using this module.

#### Parameters
* `mode` Target power mode

#### `public pm_blocker_t `[`pm_get_blocker`](#group__sys__pm__layered_1ga88823b073c9ba3020b3bc269ada0181f)`(void)` 

Get currently blocked PM modes.

#### Returns
The current blocker state

This function atomically retrieves the currently blocked PM modes.

# struct `WORD_ALIGNED` 

Power Management mode blocker typedef.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`blockers`](#structWORD__ALIGNED_1ac74d3b19e7cfe3bc1d286318ba840af0) | number of blockers for the mode

## Members

#### `public uint8_t `[`blockers`](#structWORD__ALIGNED_1ac74d3b19e7cfe3bc1d286318ba840af0) 

number of blockers for the mode

