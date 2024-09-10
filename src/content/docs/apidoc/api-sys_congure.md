---
title: api-sys_congure.md
description: api-sys_congure.md
---
# group `sys_congure` 

**Cong**estion control **u**tilizing **r**e-usable **e**lements

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONGURE_WND_SIZE_MAX`](#group__sys__congure_1ga356c72a12d4bc16dc8adb32532733bf7)            | Maximum value the window size can take.
`struct `[`congure_snd_t`](#structcongure__snd__t) | Base state object for CongURE implementations.
`struct `[`congure_snd_msg_t`](#structcongure__snd__msg__t) | Object to represent a collection of sent messages.
`struct `[`congure_snd_ack_t`](#structcongure__snd__ack__t) | Object to represent an ACK to a message.
`struct `[`congure_snd_driver`](#structcongure__snd__driver) | Driver for CongURE objects.

## Members

#### `define `[`CONGURE_WND_SIZE_MAX`](#group__sys__congure_1ga356c72a12d4bc16dc8adb32532733bf7) 

Maximum value the window size can take.

# struct `congure_snd_t` 

Base state object for CongURE implementations.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`congure_snd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1ga19db87d01fe6b0b9fb22a59289fd06a0)` * `[`driver`](#structcongure__snd__t_1a5e607d3b240c468deb7ef0f006a736ff) | Driver for the state object.
`public void * `[`ctx`](#structcongure__snd__t_1a68b932e19d7207ed9d35bd4c9795e151) | Context for callbacks specific to the congestion control.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`cwnd`](#structcongure__snd__t_1a692b89db2aa1507616b657af68246526) | Congestion window size.

## Members

#### `public const `[`congure_snd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1ga19db87d01fe6b0b9fb22a59289fd06a0)` * `[`driver`](#structcongure__snd__t_1a5e607d3b240c468deb7ef0f006a736ff) 

Driver for the state object.

See [congure_snd_driver_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1ga19db87d01fe6b0b9fb22a59289fd06a0).

#### `public void * `[`ctx`](#structcongure__snd__t_1a68b932e19d7207ed9d35bd4c9795e151) 

Context for callbacks specific to the congestion control.

E.g. A TCP PCB.

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`cwnd`](#structcongure__snd__t_1a692b89db2aa1507616b657af68246526) 

Congestion window size.

# struct `congure_snd_msg_t` 

Object to represent a collection of sent messages.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`super`](#structcongure__snd__msg__t_1a7b62bed451f8efa361fedfebf3cf972d) | see [clist_node_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`send_time`](#structcongure__snd__msg__t_1aa2e174eac8362efb4285ec1ff82c7d91) | timestamp in milliseconds of when the message was sent.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`size`](#structcongure__snd__msg__t_1a72d55da68f435d2e2faa00b962bcf043) | size in initiator-defined units
`public uint8_t `[`resends`](#structcongure__snd__msg__t_1ae820432ff2706fb56cc39167781c0db9) | number of times the message has already been resent.

## Members

#### `public `[`clist_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)` `[`super`](#structcongure__snd__msg__t_1a7b62bed451f8efa361fedfebf3cf972d) 

see [clist_node_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#clist_8h_1a6346f09447aabddc705945b64e406f0b)

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`send_time`](#structcongure__snd__msg__t_1aa2e174eac8362efb4285ec1ff82c7d91) 

timestamp in milliseconds of when the message was sent.

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`size`](#structcongure__snd__msg__t_1a72d55da68f435d2e2faa00b962bcf043) 

size in initiator-defined units

#### `public uint8_t `[`resends`](#structcongure__snd__msg__t_1ae820432ff2706fb56cc39167781c0db9) 

number of times the message has already been resent.

This does not include the first send.

# struct `congure_snd_ack_t` 

Object to represent an ACK to a message.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`recv_time`](#structcongure__snd__ack__t_1a2d9f7fd8ae3da4786d2f7acd73418814) | Timestamp in milliseconds of when the ACK was received.
`public uint32_t `[`id`](#structcongure__snd__ack__t_1a55688924b20e3154e762f5509c7da7ab) | ID of the message the ACK is for.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`size`](#structcongure__snd__ack__t_1a967f109f3bf8f24b2c3def38f304e76d) | size of the ACK in initiator-defined units
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`wnd`](#structcongure__snd__ack__t_1a0a83ff3f459035ce2c6b2ca2dc582c97) | the peer-reported window size in caller defined units.
`public uint16_t `[`clean`](#structcongure__snd__ack__t_1a90ddef7162b5df9063c36be3e04ce93c) | true, if ACK only contains an ACK, false if not
`public uint16_t `[`delay`](#structcongure__snd__ack__t_1a41deee4a885bc1ba3e25e62e69b24010) | the peer-reported time in milliseconds the ACK was delayed since message reception.

## Members

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`recv_time`](#structcongure__snd__ack__t_1a2d9f7fd8ae3da4786d2f7acd73418814) 

Timestamp in milliseconds of when the ACK was received.

#### `public uint32_t `[`id`](#structcongure__snd__ack__t_1a55688924b20e3154e762f5509c7da7ab) 

ID of the message the ACK is for.

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`size`](#structcongure__snd__ack__t_1a967f109f3bf8f24b2c3def38f304e76d) 

size of the ACK in initiator-defined units

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`wnd`](#structcongure__snd__ack__t_1a0a83ff3f459035ce2c6b2ca2dc582c97) 

the peer-reported window size in caller defined units.

Leave 0 if not supplied by the protocol.

#### `public uint16_t `[`clean`](#structcongure__snd__ack__t_1a90ddef7162b5df9063c36be3e04ce93c) 

true, if ACK only contains an ACK, false if not

This e.g. can be used to tell the congestion control mechanism that the SYN or FIN tag are cleared in the ACK with TCP.

#### `public uint16_t `[`delay`](#structcongure__snd__ack__t_1a41deee4a885bc1ba3e25e62e69b24010) 

the peer-reported time in milliseconds the ACK was delayed since message reception.

Leave 0 if not supplied by the protocol.

# struct `congure_snd_driver` 

Driver for CongURE objects.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`init`](#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5) | Initializes a CongURE object.
`public int32_t(* `[`inter_msg_interval`](#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a) | Get current interval between messages for pacing.
`public void(* `[`report_msg_sent`](#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382) | Report that a message was sent.
`public void(* `[`report_msg_discarded`](#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7) | Report message as discarded.
`public void(* `[`report_msgs_timeout`](#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) | Report that the ACKs for a collection of messages timed out.
`public void(* `[`report_msgs_lost`](#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) | Report that a collection of messages that is known to be lost.
`public void(* `[`report_msg_acked`](#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8) | Report that the ACK for a message was received.
`public void(* `[`report_ecn_ce`](#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101) | Report that "congestion encountered" CE signals were received for a message by means of explicit congestion notification (ECN).

## Members

#### `public void(* `[`init`](#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5) 

Initializes a CongURE object.

#### Parameters
* `c` The CongURE object to initialize. 

* `ctx` Context for callbacks specific to the congestion control (such as a TCP PCB). May be NULL.

#### `public int32_t(* `[`inter_msg_interval`](#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a) 

Get current interval between messages for pacing.

#### Parameters
* `c` The CongURE state object. 

* `msg_size` The size of the next message to send in caller-defined unit.

#### Returns
The current interval between sent messages in microseconds when pacing supported by congestion control implementation. 

#### Returns
-1, if pacing is not supported by the congestion control implementation.

#### `public void(* `[`report_msg_sent`](#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382) 

Report that a message was sent.

#### Parameters
* `c` The CongURE state object. 

* `msg_size` Size of the message in caller-defined unit.

#### `public void(* `[`report_msg_discarded`](#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7) 

Report message as discarded.

Discarded messages are not further taken into account for congestion control.

#### Parameters
* `c` The CongURE state object. 

* `msg_size` Size of the discarded message in caller-defined unit.

#### `public void(* `[`report_msgs_timeout`](#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) 

Report that the ACKs for a collection of messages timed out.

As many congestion control algorithms do not distinguish loss and ACK timeout, this method and congure_snd_t::report_msgs_lost need to have the same signature so the same function can be used here

#### Parameters
* `c` The CongURE state object. 

* `msgs` A collection of messages for which the ACK timed out. The list must not be changed by the method.

#### `public void(* `[`report_msgs_lost`](#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) 

Report that a collection of messages that is known to be lost.

One indicator for a lost message may e.g. be the reception of an ACK of a later sent packet, but not a ACK timeout (see [congure_snd_driver_t::report_msgs_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) for that).

As many congestion control algorithms do not distinguish loss and ACK timeout, this method and congure_snd_t::report_msgs_timeout need to have the same signature so the same function can be used here

#### Parameters
* `c` The CongURE state object. 

* `msgs` A collection of messages that are known to be lost. The list must not be be changed by the method.

#### `public void(* `[`report_msg_acked`](#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8) 

Report that the ACK for a message was received.

#### Parameters
* `c` The CongURE state object. 

* `msg` The ACK'd message. 

* `ack` The received ACK.

#### `public void(* `[`report_ecn_ce`](#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101) 

Report that "congestion encountered" CE signals were received for a message by means of explicit congestion notification (ECN).

#### Parameters
* `c` The CongURE state object. 

* `time` Timestamp in milliseconds of the message the CE event occurred for was sent.

