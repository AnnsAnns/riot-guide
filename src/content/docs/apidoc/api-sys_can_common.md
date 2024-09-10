---
title: api-sys_can_common.md
description: api-sys_can_common.md
---
# group `sys_can_common` 

CAN stack common definitions.

This module defines the common part of the CAN stack, including structures and messages.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`canopt_t`](#group__sys__can__common_1ga5db7a9bc391348311eeba0733dd97d55)            | CAN options.
`enum `[`canopt_state_t`](#group__sys__can__common_1ga195953bb16685f4a8a4a90fc5ef78dc6)            | CAN state options.
`enum `[`can_msg`](#group__sys__can__common_1ga75d2f383907ae290f3ea00d87eb6227a)            | Messages which can be sent through the CAN stack.
`enum `[`can_reg_type_t`](#group__sys__can__common_1ga8b4ee893ca2dcea887ede0c3b245ad84)            | registry entry types
`struct `[`can_opt_t`](#structcan__opt__t) | Structure to pass a CAN option.
`struct `[`can_rx_data`](#structcan__rx__data) | Received data structure.
`struct `[`can_reg_entry`](#structcan__reg__entry) | registry entry

## Members

#### `enum `[`canopt_t`](#group__sys__can__common_1ga5db7a9bc391348311eeba0733dd97d55) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CANOPT_BITTIMING            | bit timing parameter
CANOPT_RX_FILTERS            | rx filters
CANOPT_TEC            | Transmit Error Counter.
CANOPT_REC            | Receive Error Counter.
CANOPT_LEC            | Last Error Code.
CANOPT_CLOCK            | controller main clock
CANOPT_BITTIMING_CONST            | controller bittiming parameters
CANOPT_STATE            | set controller state [canopt_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga195953bb16685f4a8a4a90fc5ef78dc6)

CAN options.

#### `enum `[`canopt_state_t`](#group__sys__can__common_1ga195953bb16685f4a8a4a90fc5ef78dc6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CANOPT_STATE_OFF            | powered off
CANOPT_STATE_SLEEP            | sleep mode
CANOPT_STATE_LISTEN_ONLY            | listen only mode
CANOPT_STATE_ON            | power on, rx / tx mode
CANOPT_STATE_LOOPBACK            | loopback mode

CAN state options.

CAN state options to be used with `CANOPT_STATE`

#### `enum `[`can_msg`](#group__sys__can__common_1ga75d2f383907ae290f3ea00d87eb6227a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CAN_MSG_ACK            | acknowledgment
CAN_MSG_SEND_FRAME            | send a frame
CAN_MSG_ABORT_FRAME            | abort a frame
CAN_MSG_SET            | set an option
CAN_MSG_GET            | get an option
CAN_MSG_SET_FILTER            | set a filter
CAN_MSG_REMOVE_FILTER            | remove a filter
CAN_MSG_POWER_UP            | power up
CAN_MSG_POWER_DOWN            | power down
CAN_MSG_SET_TRX            | set a transceiver
CAN_MSG_EVENT            | driver event
CAN_MSG_WAKE_UP            | driver has been woken up by bus
CAN_MSG_TX_CONFIRMATION            | a frame has been sent
CAN_MSG_RX_INDICATION            | a frame has been received
CAN_MSG_TX_ERROR            | there was an error when transmitting
CAN_MSG_RX_ERROR            | there was an error when receiving
CAN_MSG_BUS_OFF            | bus-off detected
CAN_MSG_ERROR_PASSIVE            | driver switched in error passive
CAN_MSG_ERROR_WARNING            | driver reached error warning
CAN_MSG_PM            | power management event
CAN_MSG_ISOTP_RX_TIMEOUT            | isotp rx timeout
CAN_MSG_ISOTP_TX_TIMEOUT            | isotp tx timeout

Messages which can be sent through the CAN stack.

#### `enum `[`can_reg_type_t`](#group__sys__can__common_1ga8b4ee893ca2dcea887ede0c3b245ad84) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CAN_TYPE_DEFAULT            | default entry (use msg)
CAN_TYPE_MBOX            | mbox entry

registry entry types

# struct `can_opt_t` 

Structure to pass a CAN option.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`canopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga5db7a9bc391348311eeba0733dd97d55)` `[`opt`](#structcan__opt__t_1aafe33170b90bd6274a67db55727f54be) | the option to get/set
`public uint16_t `[`context`](#structcan__opt__t_1a12712237f7f645d6e49c788efbdc48e7) | (optional) context for that option
`public void * `[`data`](#structcan__opt__t_1ad41cef874743ed829dd0b3bac2f1f8cd) | data to set or buffer to read into
`public uint16_t `[`data_len`](#structcan__opt__t_1a15243e5d644271b91264ec74c3e954ce) | size of the data / the buffer

## Members

#### `public `[`canopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga5db7a9bc391348311eeba0733dd97d55)` `[`opt`](#structcan__opt__t_1aafe33170b90bd6274a67db55727f54be) 

the option to get/set

#### `public uint16_t `[`context`](#structcan__opt__t_1a12712237f7f645d6e49c788efbdc48e7) 

(optional) context for that option

#### `public void * `[`data`](#structcan__opt__t_1ad41cef874743ed829dd0b3bac2f1f8cd) 

data to set or buffer to read into

#### `public uint16_t `[`data_len`](#structcan__opt__t_1a15243e5d644271b91264ec74c3e954ce) 

size of the data / the buffer

# struct `can_rx_data` 

Received data structure.

This structure is used when a layer sends received data to the upper layer

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`iovec`](./doc/starlight-docs/src/content/docs/apidoc/api-posix.md#structiovec)` `[`data`](#structcan__rx__data_1ad9e48e91c5c9095229e42ea4b21ccd0d) | iovec containing received data
`public void * `[`arg`](#structcan__rx__data_1acdda67a9eb271aed461c009404e07ed3) | upper layer private param

## Members

#### `public struct `[`iovec`](./doc/starlight-docs/src/content/docs/apidoc/api-posix.md#structiovec)` `[`data`](#structcan__rx__data_1ad9e48e91c5c9095229e42ea4b21ccd0d) 

iovec containing received data

#### `public void * `[`arg`](#structcan__rx__data_1acdda67a9eb271aed461c009404e07ed3) 

upper layer private param

# struct `can_reg_entry` 

registry entry

This structure is used through the stack to describe how to contact the upper layer and which CAN interface to use

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`can_reg_entry`](#structcan__reg__entry)` * `[`next`](#structcan__reg__entry_1ae1c373032a1a783ab26890f384722cb3) | next for linked list
`public int `[`ifnum`](#structcan__reg__entry_1ad2157b416e38439cbda1a4d40e61bff3) | interface number for the entry
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structcan__reg__entry_1a850913eaa1621fbb115b048c2465c5fe) | pid of the thread when using msg
`public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structcan__reg__entry_1a491f117572c1d50800f12ff0d9dfaea8) | mbox pointer
`public union can_reg_entry::@327 `[`target`](#structcan__reg__entry_1aa46fdf63f100a8656822bb62247da03c) | entry target
`public `[`can_reg_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga8b4ee893ca2dcea887ede0c3b245ad84)` `[`type`](#structcan__reg__entry_1aa78f4d9c002cacecc02ff1af9a3ea236) | entry type

## Members

#### `public struct `[`can_reg_entry`](#structcan__reg__entry)` * `[`next`](#structcan__reg__entry_1ae1c373032a1a783ab26890f384722cb3) 

next for linked list

#### `public int `[`ifnum`](#structcan__reg__entry_1ad2157b416e38439cbda1a4d40e61bff3) 

interface number for the entry

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structcan__reg__entry_1a850913eaa1621fbb115b048c2465c5fe) 

pid of the thread when using msg

#### `public `[`mbox_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_mbox.md#structmbox__t)` * `[`mbox`](#structcan__reg__entry_1a491f117572c1d50800f12ff0d9dfaea8) 

mbox pointer

#### `public union can_reg_entry::@327 `[`target`](#structcan__reg__entry_1aa46fdf63f100a8656822bb62247da03c) 

entry target

#### `public `[`can_reg_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga8b4ee893ca2dcea887ede0c3b245ad84)` `[`type`](#structcan__reg__entry_1aa78f4d9c002cacecc02ff1af9a3ea236) 

entry type

