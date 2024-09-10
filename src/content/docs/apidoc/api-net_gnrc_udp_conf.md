---
title: api-net_gnrc_udp_conf.md
description: api-net_gnrc_udp_conf.md
---
# group `net_gnrc_udp_conf` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GNRC_UDP_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__udp__conf_1gaa37a7b76411bc4148ef317a1adcfeed7)            | Default message queue size for the UDP thread (as exponent of 2^n).
`define `[`GNRC_UDP_PRIO`](#group__net__gnrc__udp__conf_1gab866a5d747e44b76046b4344ddbd1a6f)            | Priority of the UDP thread.
`define `[`GNRC_UDP_STACK_SIZE`](#group__net__gnrc__udp__conf_1ga1e3d7b199d86ed40fad92ebf785ef1a2)            | Default stack size to use for the UDP thread.

## Members

#### `define `[`CONFIG_GNRC_UDP_MSG_QUEUE_SIZE_EXP`](#group__net__gnrc__udp__conf_1gaa37a7b76411bc4148ef317a1adcfeed7) 

Default message queue size for the UDP thread (as exponent of 2^n).

As the queue size ALWAYS needs to be power of two, this option
     represents the exponent of 2^n, which will be used as the size of
     the queue.

#### `define `[`GNRC_UDP_PRIO`](#group__net__gnrc__udp__conf_1gab866a5d747e44b76046b4344ddbd1a6f) 

Priority of the UDP thread.

#### `define `[`GNRC_UDP_STACK_SIZE`](#group__net__gnrc__udp__conf_1ga1e3d7b199d86ed40fad92ebf785ef1a2) 

Default stack size to use for the UDP thread.

The message queue was previously allocated on the stack. The default number of messages is 2³. Given sizeof(msg_t) == 8, the stack size is reduced by 64 bytes.

