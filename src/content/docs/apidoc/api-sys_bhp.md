---
title: api-sys_bhp.md
description: api-sys_bhp.md
---
# group `sys_bhp` 

Base implementation of Bottom Half Processor module for generic IRQ offloading.

This module provides a generic mechanism to schedule an offload request (Top Half) from interrupt context and run the IRQ handler in thread context. A Bottom Half Processor interface stores a pointer to the device IRQ handler and context, which allows device agnostic IRQ offloading.

A user of this module can either use the Bottom Half Processor interface directly or use an existing implementation of a Bottom Half Processor (see [Event based implementation of Bottom Half Processor](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__event))

José I. Alamos [jose.alamos@haw-hamburg.de](mailto:jose.alamos@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`bhp_irq_handler`](#group__sys__bhp_1ga43395f2690c88fe92693c81de1db78c6)`(`[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` * bhp)`            | Call the IRQ handler associated to a Bottom Half Processor descriptor.
`public inline static void `[`bhp_set_cb`](#group__sys__bhp_1ga685c31501c196198ec3f4cbf64559eea)`(`[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` * bhp,`[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` cb,void * ctx)`            | Set the callback for a Bottom Half Processor.
`struct `[`bhp`](#structbhp) | Bottom Half Processor descriptor.

## Members

#### `public inline static void `[`bhp_irq_handler`](#group__sys__bhp_1ga43395f2690c88fe92693c81de1db78c6)`(`[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` * bhp)` 

Call the IRQ handler associated to a Bottom Half Processor descriptor.

It is possible, although not recommended, to call this function on ISR. This can be done e.g when it is required to process the handler during ISR.

#### Parameters
* `bhp` Pointer to the Bottom Half Processor descriptor

#### `public inline static void `[`bhp_set_cb`](#group__sys__bhp_1ga685c31501c196198ec3f4cbf64559eea)`(`[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` * bhp,`[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` cb,void * ctx)` 

Set the callback for a Bottom Half Processor.

This function should be called inside the init function of a device that requires ISR offloading.

#### Parameters
* `bhp` Pointer to the Bottom Half Processor 

* `cb` IRQ handler of the Bottom Half Processor 

* `ctx` Context of the IRQ handler

# struct `bhp` 

Bottom Half Processor descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` `[`irq_handler`](#structbhp_1a824d6de38acf32a10d09524b502e7abc) | Bottom Half Processor IRQ handler.
`public void * `[`ctx`](#structbhp_1a66b50d5a2557988700bdb6b356e950a8) | Context of the IRQ handler.

## Members

#### `public `[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` `[`irq_handler`](#structbhp_1a824d6de38acf32a10d09524b502e7abc) 

Bottom Half Processor IRQ handler.

#### `public void * `[`ctx`](#structbhp_1a66b50d5a2557988700bdb6b356e950a8) 

Context of the IRQ handler.

