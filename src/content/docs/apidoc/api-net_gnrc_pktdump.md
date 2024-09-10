---
title: api-net_gnrc_pktdump.md
description: api-net_gnrc_pktdump.md
---
# group `net_gnrc_pktdump` 

Dump network packets to STDOUT for debugging.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_PKTDUMP_MSG_QUEUE_SIZE`](#group__net__gnrc__pktdump_1ga060a40dabeefc3b087e72aefb003aabb)            | Message queue size for the pktdump thread.
`define `[`GNRC_PKTDUMP_PRIO`](#group__net__gnrc__pktdump_1ga4c04b9212cc4e79ab1bd04f5f01d0375)            | Priority of the pktdump thread.
`define `[`GNRC_PKTDUMP_STACKSIZE`](#group__net__gnrc__pktdump_1gacf9cbfa97e8ba3fced469a545e6cad3b)            | Stack size used for the pktdump thread.
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_pktdump_init`](#group__net__gnrc__pktdump_1ga792debeabe369384dccdc54847c52228)`(void)`            | Start the packet dump thread and listening for incoming packets.

## Members

#### `define `[`GNRC_PKTDUMP_MSG_QUEUE_SIZE`](#group__net__gnrc__pktdump_1ga060a40dabeefc3b087e72aefb003aabb) 

Message queue size for the pktdump thread.

#### `define `[`GNRC_PKTDUMP_PRIO`](#group__net__gnrc__pktdump_1ga4c04b9212cc4e79ab1bd04f5f01d0375) 

Priority of the pktdump thread.

#### `define `[`GNRC_PKTDUMP_STACKSIZE`](#group__net__gnrc__pktdump_1gacf9cbfa97e8ba3fced469a545e6cad3b) 

Stack size used for the pktdump thread.

The message queue was previously allocated on the stack. The default number of messages is 2³. Given sizeof(msg_t) == 8, the stack size is reduced by 64 bytes.

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`gnrc_pktdump_init`](#group__net__gnrc__pktdump_1ga792debeabe369384dccdc54847c52228)`(void)` 

Start the packet dump thread and listening for incoming packets.

#### Returns
PID of the pktdump thread 

#### Returns
negative value on error

