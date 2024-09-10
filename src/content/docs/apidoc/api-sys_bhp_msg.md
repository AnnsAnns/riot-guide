---
title: api-sys_bhp_msg.md
description: api-sys_bhp_msg.md
---
# group `sys_bhp_msg` 

Bottom Half Processor module for generic IRQ offloading using messages.

Offloading ISRs with messages is in general a terrible idea, because messages can be lost. Use it with care or prefer alternatives such as [Event based implementation of Bottom Half Processor](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__event).

José I. Alamos [jose.alamos@haw-hamburg.de](mailto:jose.alamos@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BHP_MSG_BH_REQUEST`](#group__sys__bhp__msg_1ga6925df50330f61d80e38c7910e490693)            | The message type to trigger Bottom Half Processing.
`public void `[`bhp_msg_init`](#group__sys__bhp__msg_1ga7f0c4c708d661d281140a8d43ca9cdd4)`(`[`bhp_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_msg.md#structbhp__msg__t)` * bhp_msg,`[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` cb,void * ctx)`            | Init a Bottom Half Processor to be used with messages.
`public void `[`bhp_msg_isr_cb`](#group__sys__bhp__msg_1gac577e797922a39c172d7885c92caa4fd)`(void * bhp_msg_ctx)`            | Message based Bottom Half Processor ISR callback To be called from ISR in order to trigger the Bottom Half Processor.
`public inline static void `[`bhp_msg_claim_thread`](#group__sys__bhp__msg_1gad82b920b22afddd8350b404c121b1ad1)`(`[`bhp_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_msg.md#structbhp__msg__t)` * bhp_msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)`            | Claim a thread with a message queue to be used as Bottom Half Processor.
`public inline static void `[`bhp_msg_handler`](#group__sys__bhp__msg_1ga27884bbb03bad5554d254b2e80c7fc05)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)`            | Handle a Bottom Half Processor message with type [BHP_MSG_BH_REQUEST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__msg_1ga6925df50330f61d80e38c7910e490693).
`struct `[`bhp_msg_t`](#structbhp__msg__t) | Message based Bottom Half Processor descriptor.

## Members

#### `define `[`BHP_MSG_BH_REQUEST`](#group__sys__bhp__msg_1ga6925df50330f61d80e38c7910e490693) 

The message type to trigger Bottom Half Processing.

#### `public void `[`bhp_msg_init`](#group__sys__bhp__msg_1ga7f0c4c708d661d281140a8d43ca9cdd4)`(`[`bhp_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_msg.md#structbhp__msg__t)` * bhp_msg,`[`bhp_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga9b5b050ea24895b6521a0845fe6ad486)` cb,void * ctx)` 

Init a Bottom Half Processor to be used with messages.

the target PID is set to [KERNEL_PID_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1gab4fb52da047cf9af9626b9c408704384)

#### Parameters
* `bhp_msg` The message based Bottom Half Processor descriptor 

* `cb` Bottom Half Processor callback 

* `ctx` Context of `cb`

#### `public void `[`bhp_msg_isr_cb`](#group__sys__bhp__msg_1gac577e797922a39c172d7885c92caa4fd)`(void * bhp_msg_ctx)` 

Message based Bottom Half Processor ISR callback To be called from ISR in order to trigger the Bottom Half Processor.

This sends a message with type [BHP_MSG_BH_REQUEST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__msg_1ga6925df50330f61d80e38c7910e490693) to the target thread, which should process the event accordingly by calling [bhp_msg_handler](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__msg_1ga27884bbb03bad5554d254b2e80c7fc05).

This function asserts that the target PID is valid. Therefore, make sure to call [bhp_msg_claim_thread](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__msg_1gad82b920b22afddd8350b404c121b1ad1) beforehand.

#### Parameters
* `bhp_msg_ctx` Pointer to the message based Bottom Half Processor ([bhp_msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_msg.md#structbhp__msg__t)) Bottom Half Processor.

#### `public inline static void `[`bhp_msg_claim_thread`](#group__sys__bhp__msg_1gad82b920b22afddd8350b404c121b1ad1)`(`[`bhp_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_bhp_msg.md#structbhp__msg__t)` * bhp_msg,`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid)` 

Claim a thread with a message queue to be used as Bottom Half Processor.

#### Parameters
* `bhp_msg` The message based Bottom Half Processor descriptor 

* `pid` PID of the target thread

#### `public inline static void `[`bhp_msg_handler`](#group__sys__bhp__msg_1ga27884bbb03bad5554d254b2e80c7fc05)`(`[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` * msg)` 

Handle a Bottom Half Processor message with type [BHP_MSG_BH_REQUEST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__msg_1ga6925df50330f61d80e38c7910e490693).

This function will call [bhp_irq_handler](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga43395f2690c88fe92693c81de1db78c6) internally.

This function asserts that the message type is [BHP_MSG_BH_REQUEST](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp__msg_1ga6925df50330f61d80e38c7910e490693).

#### Parameters
* `msg` Pointer to the Bottom Half Processor message.

# struct `bhp_msg_t` 

Message based Bottom Half Processor descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` `[`bhp`](#structbhp__msg__t_1a75848a7f4c5bb1d06e10995dcc548767) | Bottom Half Processor descriptor.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structbhp__msg__t_1ace58e0b227cf551b2937c8d862698e2c) | PID of the thread that process the Bottom Half Processor.
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structbhp__msg__t_1a775e1c8d50cc121f6622710f147be68d) | Message containing the Bottom Half Processing request.

## Members

#### `public `[`bhp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__bhp_1ga447bd531488468731608a933b7bfe17f)` `[`bhp`](#structbhp__msg__t_1a75848a7f4c5bb1d06e10995dcc548767) 

Bottom Half Processor descriptor.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structbhp__msg__t_1ace58e0b227cf551b2937c8d862698e2c) 

PID of the thread that process the Bottom Half Processor.

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structbhp__msg__t_1a775e1c8d50cc121f6622710f147be68d) 

Message containing the Bottom Half Processing request.

