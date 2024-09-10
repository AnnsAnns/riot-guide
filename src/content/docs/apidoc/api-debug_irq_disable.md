---
title: api-debug_irq_disable.md
description: api-debug_irq_disable.md
---
# group `debug_irq_disable` 

Debug time spent with IRQ disabled.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_DEBUG_IRQ_DISABLE_THRESHOLD`](#group__debug__irq__disable_1gacfc80d18a05d4601d04ce04436afbca6)            | Threshold (in CPU ticks) below which periods with IRQs disabled are not printed.
`public void `[`debug_irq_disable_print`](#group__debug__irq__disable_1gadad700e1e7456a2da4d9f76eb293feb5)`(const char * file,unsigned line,uint32_t ticks)`            | Print time spent with IRQ disabled.

## Members

#### `define `[`CONFIG_DEBUG_IRQ_DISABLE_THRESHOLD`](#group__debug__irq__disable_1gacfc80d18a05d4601d04ce04436afbca6) 

Threshold (in CPU ticks) below which periods with IRQs disabled are not printed.

Use this to prevent *a lot* of output when debugging.

#### `public void `[`debug_irq_disable_print`](#group__debug__irq__disable_1gadad700e1e7456a2da4d9f76eb293feb5)`(const char * file,unsigned line,uint32_t ticks)` 

Print time spent with IRQ disabled.

