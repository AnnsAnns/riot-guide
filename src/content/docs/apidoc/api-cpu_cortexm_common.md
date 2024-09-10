---
title: api-cpu_cortexm_common.md
description: api-cpu_cortexm_common.md
---
# group `cpu_cortexm_common` 

Common implementations and headers for Cortex-M family based micro-controllers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`STACK_CANARY_WORD`](#group__cpu__cortexm__common_1ga2f0d4a98f077a68bc8e4046d80b9027b)            | Interrupt stack canary value.
`define `[`PROVIDES_PM_SET_LOWEST`](#group__cpu__cortexm__common_1ga04211208eb7863ce1c522440a91c745c)            | All Cortex-m-based CPUs provide pm_set_lowest.
`define `[`CORTEXM_SCB_CPACR_FPU_ACCESS_FULL`](#group__cpu__cortexm__common_1ga913d73a226943c8c9df177bbeecbab70)            | Pattern to write into the co-processor Access Control Register to allow full FPU access.
`public void `[`cortexm_init`](#group__cpu__cortexm__common_1ga618ef3d6a7eede1d913eff0873ff9012)`(void)`            | Initialize Cortex-M specific core parts of the CPU.
`public inline static void `[`cortexm_init_fpu`](#group__cpu__cortexm__common_1gae7b4a7c1eb24f29d6eca93f7533e01fb)`(void)`            | Initialize Cortex-M FPU.
`public void `[`cortexm_init_isr_priorities`](#group__cpu__cortexm__common_1ga88cf8bce83b348c30fa8793c31e5e7ac)`(void)`            | Initialize Cortex-M interrupt priorities.
`public void `[`cortexm_init_misc`](#group__cpu__cortexm__common_1ga2d6ff0ec67998552140b34ff6631883f)`(void)`            | Initialize Cortex-M misc functions.
`public inline static uintptr_t `[`cpu_get_caller_pc`](#group__cpu__cortexm__common_1ga04f1d3111666144deedb619ac50bbdf7)`(void)`            | Returns the current content of the link register (lr)
`public inline static void `[`cortexm_sleep_until_event`](#group__cpu__cortexm__common_1gabb179e62ec26f048ecda6d892727a7ec)`(void)`            | Put the CPU into the 'wait for event' sleep mode.
`public inline static void `[`cortexm_sleep`](#group__cpu__cortexm__common_1ga39e0029ba147e7d54f774c88b0a6510d)`(int deep)`            | Put the CPU into (deep) sleep mode, using the `WFI` instruction.
`public inline static void `[`cortexm_isr_end`](#group__cpu__cortexm__common_1ga3a5d270e33313f6509cd8d80174c592e)`(void)`            | Trigger a conditional context scheduler run / context switch.
`public inline static void `[`cpu_jump_to_image`](#group__cpu__cortexm__common_1ga55af4a69beca76c3eaa2230415ba333d)`(uint32_t image_address)`            | Jumps to another image in flash.
`public bool `[`cpu_check_address`](#group__cpu__cortexm__common_1gac30423f9a6d611b7b7d0190a8d6dd6e2)`(volatile const char * address)`            | Checks is memory address valid or not.

## Members

#### `define `[`STACK_CANARY_WORD`](#group__cpu__cortexm__common_1ga2f0d4a98f077a68bc8e4046d80b9027b) 

Interrupt stack canary value.

0xe7fe is the ARM Thumb machine code equivalent of asm("bl #-2\n") or 'while (1);', i.e. an infinite loop.

#### `define `[`PROVIDES_PM_SET_LOWEST`](#group__cpu__cortexm__common_1ga04211208eb7863ce1c522440a91c745c) 

All Cortex-m-based CPUs provide pm_set_lowest.

The pm_set_lowest is provided either by the pm_layered module if used, or alternatively as fallback by the cortexm's own implementation.

#### `define `[`CORTEXM_SCB_CPACR_FPU_ACCESS_FULL`](#group__cpu__cortexm__common_1ga913d73a226943c8c9df177bbeecbab70) 

Pattern to write into the co-processor Access Control Register to allow full FPU access.

Used in the [cortexm_init_fpu](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1gae7b4a7c1eb24f29d6eca93f7533e01fb) inline function below.

#### `public void `[`cortexm_init`](#group__cpu__cortexm__common_1ga618ef3d6a7eede1d913eff0873ff9012)`(void)` 

Initialize Cortex-M specific core parts of the CPU.

[cortexm_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1ga618ef3d6a7eede1d913eff0873ff9012) calls, in a default order, [cortexm_init_fpu](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1gae7b4a7c1eb24f29d6eca93f7533e01fb), [cortexm_init_isr_priorities](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1ga88cf8bce83b348c30fa8793c31e5e7ac), and [cortexm_init_misc](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1ga2d6ff0ec67998552140b34ff6631883f). Also performs other default initialisations, including ones which you may or may not want.

Unless you have special requirements (like nRF52 with SD has), it is sufficient to call just [cortexm_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1ga618ef3d6a7eede1d913eff0873ff9012) and the `cortexm_init_*` functions do not need to (and should not) be called separately. If you have conflicting requirements, you may want to have a look `cpu/nrft/cpu.c` for an example of a non-default approach.

#### `public inline static void `[`cortexm_init_fpu`](#group__cpu__cortexm__common_1gae7b4a7c1eb24f29d6eca93f7533e01fb)`(void)` 

Initialize Cortex-M FPU.

Called from `cpu/nrf52/cpu.c`, since it cannot use the whole [cortexm_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1ga618ef3d6a7eede1d913eff0873ff9012) due to conflicting requirements.

Defined here as a static inline function to allow all callers to optimise this away if the FPU is not used.

#### `public void `[`cortexm_init_isr_priorities`](#group__cpu__cortexm__common_1ga88cf8bce83b348c30fa8793c31e5e7ac)`(void)` 

Initialize Cortex-M interrupt priorities.

Called from `cpu/nrf52/cpu.c`, since it cannot use the whole [cortexm_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1ga618ef3d6a7eede1d913eff0873ff9012) due to conflicting requirements.

Define `CPU_CORTEXM_INIT_SUBFUNCTIONS` to make this function publicly available.

#### `public void `[`cortexm_init_misc`](#group__cpu__cortexm__common_1ga2d6ff0ec67998552140b34ff6631883f)`(void)` 

Initialize Cortex-M misc functions.

Called from `cpu/nrf52/cpu.c`, since it cannot use the whole [cortexm_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cortexm__common_1ga618ef3d6a7eede1d913eff0873ff9012) due to conflicting requirements.

Define `CPU_CORTEXM_INIT_SUBFUNCTIONS` to make this function publicly available.

#### `public inline static uintptr_t `[`cpu_get_caller_pc`](#group__cpu__cortexm__common_1ga04f1d3111666144deedb619ac50bbdf7)`(void)` 

Returns the current content of the link register (lr)

#### Returns
content of the link register (lr)

#### `public inline static void `[`cortexm_sleep_until_event`](#group__cpu__cortexm__common_1gabb179e62ec26f048ecda6d892727a7ec)`(void)` 

Put the CPU into the 'wait for event' sleep mode.

This function is meant to be used for short periods of time, where it is not feasible to switch to the idle thread and back.

#### `public inline static void `[`cortexm_sleep`](#group__cpu__cortexm__common_1ga39e0029ba147e7d54f774c88b0a6510d)`(int deep)` 

Put the CPU into (deep) sleep mode, using the `WFI` instruction.

#### Parameters
* `deep` !=0 for deep sleep, 0 for light sleep

#### `public inline static void `[`cortexm_isr_end`](#group__cpu__cortexm__common_1ga3a5d270e33313f6509cd8d80174c592e)`(void)` 

Trigger a conditional context scheduler run / context switch.

This function is supposed to be called in the end of each ISR.

#### `public inline static void `[`cpu_jump_to_image`](#group__cpu__cortexm__common_1ga55af4a69beca76c3eaa2230415ba333d)`(uint32_t image_address)` 

Jumps to another image in flash.

This function is supposed to be called by a bootloader application.

#### Parameters
* `image_address` address in flash of other image

#### `public bool `[`cpu_check_address`](#group__cpu__cortexm__common_1gac30423f9a6d611b7b7d0190a8d6dd6e2)`(volatile const char * address)` 

Checks is memory address valid or not.

This function can be used to check for memory size, peripherals availability, etc.

#### Parameters
* `address` Address to check 

#### Returns
true if address is valid

