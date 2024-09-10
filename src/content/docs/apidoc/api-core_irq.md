---
title: api-core_irq.md
description: api-core_irq.md
---
# group `core_irq` 

Provides an API to control interrupt processing.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MAYBE_INLINE`](#group__core__irq_1ga1f61be506ef48a6596ddb59814e6f550)            | 
`public MAYBE_INLINE unsigned `[`irq_disable`](#group__core__irq_1ga7cb620d77da293d98ccc1715d6cb9a02)`(void)`            | This function sets the IRQ disable bit in the status register.
`public MAYBE_INLINE unsigned `[`irq_enable`](#group__core__irq_1gaf05b4453b6db2ee7511af44678f27633)`(void)`            | This function clears the IRQ disable bit in the status register.
`public MAYBE_INLINE void `[`irq_restore`](#group__core__irq_1ga066129c367d18a871d0155d85148fd3e)`(unsigned state)`            | This function restores the IRQ disable bit in the status register to the value contained within passed state.
`public MAYBE_INLINE bool `[`irq_is_enabled`](#group__core__irq_1ga8e548ce5d4cf66ae5326fa79bcca5d0c)`(void)`            | Test if IRQs are currently enabled.
`public MAYBE_INLINE bool `[`irq_is_in`](#group__core__irq_1gaf61b61eb6e077631e2b12e233f6e3ba2)`(void)`            | Check whether called from interrupt service routine.

## Members

#### `define `[`MAYBE_INLINE`](#group__core__irq_1ga1f61be506ef48a6596ddb59814e6f550) 

#### `public MAYBE_INLINE unsigned `[`irq_disable`](#group__core__irq_1ga7cb620d77da293d98ccc1715d6cb9a02)`(void)` 

This function sets the IRQ disable bit in the status register.

#### Returns
Previous value of status register. The return value should not be interpreted as a boolean value. The actual value is only significant for [irq_restore()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1ga066129c367d18a871d0155d85148fd3e).

**See also**: [irq_restore](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1ga066129c367d18a871d0155d85148fd3e)

#### `public MAYBE_INLINE unsigned `[`irq_enable`](#group__core__irq_1gaf05b4453b6db2ee7511af44678f27633)`(void)` 

This function clears the IRQ disable bit in the status register.

#### Returns
Previous value of status register. The return value should not be interpreted as a boolean value. The actual value is only significant for [irq_restore()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1ga066129c367d18a871d0155d85148fd3e).

This function is here primarily for internal use, and for compatibility with the Arduino environment (which lacks the "disable / restore" concept. Enabling interrupts when a different component disabled them can easily cause unintended behavior there.

Use [irq_restore](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#riscv__common_2include_2irq__arch_8h_1a1438781447d972bbb2b963fa6b741eed) instead.

#### `public MAYBE_INLINE void `[`irq_restore`](#group__core__irq_1ga066129c367d18a871d0155d85148fd3e)`(unsigned state)` 

This function restores the IRQ disable bit in the status register to the value contained within passed state.

#### Parameters
* `state` state to restore

**See also**: [irq_disable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__irq_1ga7cb620d77da293d98ccc1715d6cb9a02)

#### `public MAYBE_INLINE bool `[`irq_is_enabled`](#group__core__irq_1ga8e548ce5d4cf66ae5326fa79bcca5d0c)`(void)` 

Test if IRQs are currently enabled.

Use this function from thread context only. When used in interrupt context the returned state may be incorrect.

#### Returns
false if IRQs are currently disabled 

#### Returns
true if IRQs are currently enabled

#### `public MAYBE_INLINE bool `[`irq_is_in`](#group__core__irq_1gaf61b61eb6e077631e2b12e233f6e3ba2)`(void)` 

Check whether called from interrupt service routine.

#### Returns
true, if in interrupt service routine, false if not

