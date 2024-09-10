---
title: api-sys_bhp_event.md
description: api-sys_bhp_event.md
---
# group `sys_bhp_event` 

Bottom Half Processor module for generic IRQ offloading.

José I. Alamos [jose.alamos@haw-hamburg.de](mailto:jose.alamos@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`bhp_event_init`](#group__sys__bhp__event_1gac81e9335a6bd28fcb92f40c1f93a06b6)`(`[`bhp_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_event.md#structbhp__event__t)` * bhp_ev,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * evq,`[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` cb,void * ctx)`            | Init a Bottom Half Processor to be used with events.
`public void `[`bhp_event_isr_cb`](#group__sys__bhp__event_1gae81ec571262ea6f2f89ac16dad8abfca)`(void * bhp_event_ctx)`            | Event based Bottom Half Processor ISR callback To be called from ISR in order to trigger the Bottom Half Processor.
`struct `[`bhp_event_t`](#structbhp__event__t) | Event based Bottom Half Processor descriptor.

## Members

#### `public void `[`bhp_event_init`](#group__sys__bhp__event_1gac81e9335a6bd28fcb92f40c1f93a06b6)`(`[`bhp_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_event.md#structbhp__event__t)` * bhp_ev,`[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * evq,`[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` cb,void * ctx)` 

Init a Bottom Half Processor to be used with events.

#### Parameters
* `bhp_ev` The Event based Bottom Half Processor descriptor 

* `evq` The target event queue to process the Bottom Half Processor 

* `cb` Bottom Half Processor callback 

* `ctx` Context of `cb`

#### `public void `[`bhp_event_isr_cb`](#group__sys__bhp__event_1gae81ec571262ea6f2f89ac16dad8abfca)`(void * bhp_event_ctx)` 

Event based Bottom Half Processor ISR callback To be called from ISR in order to trigger the Bottom Half Processor.

#### Parameters
* `bhp_event_ctx` Context ([bhp_event_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_event.md#structbhp__event__t)) of the event based Bottom Half Processor.

# struct `bhp_event_t` 

Event based Bottom Half Processor descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` `[`bhp`](#structbhp__event__t_1a076d6998370dd76f7b7faead8f77f68d) | Bottom Half Processor descriptor.
`public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * `[`evq`](#structbhp__event__t_1a455d6a2b192d389e9501e1c23f312938) | Pointer to the event queue.
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`ev`](#structbhp__event__t_1aed5a0be4589878e4caa8f349b6cd7687) | Event holding the Bottom Half Processor handler.

## Members

#### `public `[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` `[`bhp`](#structbhp__event__t_1a076d6998370dd76f7b7faead8f77f68d) 

Bottom Half Processor descriptor.

#### `public `[`event_queue_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1ga7806b159463497fbcd16f1697565ff4e)` * `[`evq`](#structbhp__event__t_1a455d6a2b192d389e9501e1c23f312938) 

Pointer to the event queue.

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`ev`](#structbhp__event__t_1aed5a0be4589878e4caa8f349b6cd7687) 

Event holding the Bottom Half Processor handler.

