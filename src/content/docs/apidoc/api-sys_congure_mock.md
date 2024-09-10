---
title: api-sys_congure_mock.md
description: api-sys_congure_mock.md
---
# group `sys_congure_mock` 

A mock for testing [CongURE - A Congestion control framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`congure_mock_snd_setup`](#group__sys__congure__mock_1ga895f5b97eead9867d45b391de135a705)`(`[`congure_mock_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_mock.md#structcongure__mock__snd__t)` * c,const `[`congure_snd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1ga19db87d01fe6b0b9fb22a59289fd06a0)` * methods)`            | Sets up the driver for CongURE mock object.
`struct `[`congure_mock_snd_t`](#structcongure__mock__snd__t) | A mock CongURE state object.

## Members

#### `public void `[`congure_mock_snd_setup`](#group__sys__congure__mock_1ga895f5b97eead9867d45b391de135a705)`(`[`congure_mock_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_mock.md#structcongure__mock__snd__t)` * c,const `[`congure_snd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1ga19db87d01fe6b0b9fb22a59289fd06a0)` * methods)` 

Sets up the driver for CongURE mock object.

#### Parameters
* `c` A CongURE mock object 

* `methods` Methods to call in addition to the tracking of the mock driver. May be NULL.

# struct `congure_mock_snd_t` 

```
struct congure_mock_snd_t
  : public congure_snd_t
```  

A mock CongURE state object.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` `[`super`](#structcongure__mock__snd__t_1a191933d232973c26396ef434a59e710a) | see [congure_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)
`public const `[`congure_snd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1ga19db87d01fe6b0b9fb22a59289fd06a0)` * `[`methods`](#structcongure__mock__snd__t_1a4a3e29c720cffb98865ec192c53f4f5d) | Optional methods called in addition to the tracking functions of the mock driver.
`public uint8_t `[`init_calls`](#structcongure__mock__snd__t_1a49cedc260cccb9ede36861f5e96878b8) | How often was the [congure_snd_driver_t::init()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5) method called?
`public uint8_t `[`inter_msg_interval_calls`](#structcongure__mock__snd__t_1a68d7f3c0a4600fb08bb635f844ddc881) | How often was the [congure_snd_driver_t::inter_msg_interval()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a) method called?
`public uint8_t `[`report_msg_sent_calls`](#structcongure__mock__snd__t_1ad2f834581b934250f62ca100b4dbe64f) | How often was the [congure_snd_driver_t::report_msg_sent()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382) method called?
`public uint8_t `[`report_msg_discarded_calls`](#structcongure__mock__snd__t_1a5c3c49c4060f9888c529f1206934c367) | How often was the [congure_snd_driver_t::report_msg_discarded()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7) method called?
`public uint8_t `[`report_msgs_timeout_calls`](#structcongure__mock__snd__t_1ac82734650ad59c7bf6673f061c07339c) | How often was the [congure_snd_driver_t::report_msgs_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) method called?
`public uint8_t `[`report_msgs_lost_calls`](#structcongure__mock__snd__t_1a2f24ddbcfc24d5c0c5f41194013b6959) | How often was the [congure_snd_driver_t::report_msgs_lost()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) method called?
`public uint8_t `[`report_msg_acked_calls`](#structcongure__mock__snd__t_1a358b2fd2a3b0a23d029e26b725f208e9) | How often was the [congure_snd_driver_t::report_msg_acked()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8) method called?
`public uint8_t `[`report_ecn_ce_calls`](#structcongure__mock__snd__t_1acb107b9d12c6b6d0fa558bc93a2c719d) | How often was the [congure_snd_driver_t::report_ecn_ce()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101) method called?
`public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * `[`c`](#structcongure__mock__snd__t_1a03bed73a964252d09a9e6f72452ac38b) | The CongURE object to initialize.
`public void * `[`ctx`](#structcongure__mock__snd__t_1a32100afeaa404442584840d0758bba86) | Context for callbacks specific to CC.
`public struct congure_mock_snd_t::@329 `[`init_args`](#structcongure__mock__snd__t_1a07266dd8770662b2dbf8cb44c813d4e1) | What were the arguments for the last [congure_snd_driver_t::init()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5) call?
`public unsigned `[`msg_size`](#structcongure__mock__snd__t_1a53f40d63267810f250259d2c23b2149c) | The size of the next message to send.
`public struct congure_mock_snd_t::@330 `[`inter_msg_interval_args`](#structcongure__mock__snd__t_1a010eab1c82be7b3d9e457c866e5e21cf) | What were the arguments for the last [congure_snd_driver_t::inter_msg_interval()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a) call?
`public struct congure_mock_snd_t::@331 `[`report_msg_sent_args`](#structcongure__mock__snd__t_1ad566da1b5b28048a9a2bdc6e6769753a) | What were the arguments for the last [congure_snd_driver_t::report_msg_sent()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382) call?
`public struct congure_mock_snd_t::@332 `[`report_msg_discarded_args`](#structcongure__mock__snd__t_1a42a75ee385662ebe293b026a6bf46081) | What were the arguments for the last [congure_snd_driver_t::report_msg_discarded()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7) call?
`public `[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * `[`msgs`](#structcongure__mock__snd__t_1aad173e1990ffa98833b45bd97d28b65c) | A collection of messages for which the ACK timed out.
`public struct congure_mock_snd_t::@333 `[`report_msgs_timeout_args`](#structcongure__mock__snd__t_1ae1fc16c3d81d046d4b2419d6e4c9aece) | What were the arguments for the last [congure_snd_driver_t::report_msgs_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) call?
`public struct congure_mock_snd_t::@334 `[`report_msgs_lost_args`](#structcongure__mock__snd__t_1a44f6fb91b37acfca5735d3b5c6f1d13c) | What were the arguments for the last [congure_snd_driver_t::report_msgs_lost()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) call?
`public `[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * `[`msg`](#structcongure__mock__snd__t_1a389621a1b468d2f08bb0209735ec5035) | The ACK'd message.
`public `[`congure_snd_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t)` * `[`ack`](#structcongure__mock__snd__t_1a2794099c0fbfc935e89ad9736bac6b5a) | The received ACK.
`public struct congure_mock_snd_t::@335 `[`report_msg_acked_args`](#structcongure__mock__snd__t_1ac1bcb47fb4554c3c909a931af5fc7d85) | What were the arguments for the last [congure_snd_driver_t::report_msg_acked()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8) call?
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`time`](#structcongure__mock__snd__t_1a51f8fddefede8146fc40f9cd95dd74de) | Timestamp of the message the CE event occurred for was sent.
`public struct congure_mock_snd_t::@336 `[`report_ecn_ce_args`](#structcongure__mock__snd__t_1aac8ad50860a8c31412717e3c2a7f0aa1) | What were the arguments for the last [congure_snd_driver_t::report_ecn_ce()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101) call?

## Members

#### `public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` `[`super`](#structcongure__mock__snd__t_1a191933d232973c26396ef434a59e710a) 

see [congure_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)

#### `public const `[`congure_snd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1ga19db87d01fe6b0b9fb22a59289fd06a0)` * `[`methods`](#structcongure__mock__snd__t_1a4a3e29c720cffb98865ec192c53f4f5d) 

Optional methods called in addition to the tracking functions of the mock driver.

#### `public uint8_t `[`init_calls`](#structcongure__mock__snd__t_1a49cedc260cccb9ede36861f5e96878b8) 

How often was the [congure_snd_driver_t::init()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5) method called?

#### `public uint8_t `[`inter_msg_interval_calls`](#structcongure__mock__snd__t_1a68d7f3c0a4600fb08bb635f844ddc881) 

How often was the [congure_snd_driver_t::inter_msg_interval()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a) method called?

#### `public uint8_t `[`report_msg_sent_calls`](#structcongure__mock__snd__t_1ad2f834581b934250f62ca100b4dbe64f) 

How often was the [congure_snd_driver_t::report_msg_sent()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382) method called?

#### `public uint8_t `[`report_msg_discarded_calls`](#structcongure__mock__snd__t_1a5c3c49c4060f9888c529f1206934c367) 

How often was the [congure_snd_driver_t::report_msg_discarded()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7) method called?

#### `public uint8_t `[`report_msgs_timeout_calls`](#structcongure__mock__snd__t_1ac82734650ad59c7bf6673f061c07339c) 

How often was the [congure_snd_driver_t::report_msgs_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) method called?

#### `public uint8_t `[`report_msgs_lost_calls`](#structcongure__mock__snd__t_1a2f24ddbcfc24d5c0c5f41194013b6959) 

How often was the [congure_snd_driver_t::report_msgs_lost()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) method called?

#### `public uint8_t `[`report_msg_acked_calls`](#structcongure__mock__snd__t_1a358b2fd2a3b0a23d029e26b725f208e9) 

How often was the [congure_snd_driver_t::report_msg_acked()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8) method called?

#### `public uint8_t `[`report_ecn_ce_calls`](#structcongure__mock__snd__t_1acb107b9d12c6b6d0fa558bc93a2c719d) 

How often was the [congure_snd_driver_t::report_ecn_ce()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101) method called?

#### `public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * `[`c`](#structcongure__mock__snd__t_1a03bed73a964252d09a9e6f72452ac38b) 

The CongURE object to initialize.

The CongURE state object.

#### `public void * `[`ctx`](#structcongure__mock__snd__t_1a32100afeaa404442584840d0758bba86) 

Context for callbacks specific to CC.

#### `public struct congure_mock_snd_t::@329 `[`init_args`](#structcongure__mock__snd__t_1a07266dd8770662b2dbf8cb44c813d4e1) 

What were the arguments for the last [congure_snd_driver_t::init()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5) call?

#### `public unsigned `[`msg_size`](#structcongure__mock__snd__t_1a53f40d63267810f250259d2c23b2149c) 

The size of the next message to send.

Size of the message.

#### `public struct congure_mock_snd_t::@330 `[`inter_msg_interval_args`](#structcongure__mock__snd__t_1a010eab1c82be7b3d9e457c866e5e21cf) 

What were the arguments for the last [congure_snd_driver_t::inter_msg_interval()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a) call?

#### `public struct congure_mock_snd_t::@331 `[`report_msg_sent_args`](#structcongure__mock__snd__t_1ad566da1b5b28048a9a2bdc6e6769753a) 

What were the arguments for the last [congure_snd_driver_t::report_msg_sent()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382) call?

#### `public struct congure_mock_snd_t::@332 `[`report_msg_discarded_args`](#structcongure__mock__snd__t_1a42a75ee385662ebe293b026a6bf46081) 

What were the arguments for the last [congure_snd_driver_t::report_msg_discarded()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7) call?

#### `public `[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * `[`msgs`](#structcongure__mock__snd__t_1aad173e1990ffa98833b45bd97d28b65c) 

A collection of messages for which the ACK timed out.

A collection of messages that are known to be lost.

#### `public struct congure_mock_snd_t::@333 `[`report_msgs_timeout_args`](#structcongure__mock__snd__t_1ae1fc16c3d81d046d4b2419d6e4c9aece) 

What were the arguments for the last [congure_snd_driver_t::report_msgs_timeout()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) call?

#### `public struct congure_mock_snd_t::@334 `[`report_msgs_lost_args`](#structcongure__mock__snd__t_1a44f6fb91b37acfca5735d3b5c6f1d13c) 

What were the arguments for the last [congure_snd_driver_t::report_msgs_lost()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) call?

#### `public `[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * `[`msg`](#structcongure__mock__snd__t_1a389621a1b468d2f08bb0209735ec5035) 

The ACK'd message.

#### `public `[`congure_snd_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t)` * `[`ack`](#structcongure__mock__snd__t_1a2794099c0fbfc935e89ad9736bac6b5a) 

The received ACK.

#### `public struct congure_mock_snd_t::@335 `[`report_msg_acked_args`](#structcongure__mock__snd__t_1ac1bcb47fb4554c3c909a931af5fc7d85) 

What were the arguments for the last [congure_snd_driver_t::report_msg_acked()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8) call?

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`time`](#structcongure__mock__snd__t_1a51f8fddefede8146fc40f9cd95dd74de) 

Timestamp of the message the CE event occurred for was sent.

#### `public struct congure_mock_snd_t::@336 `[`report_ecn_ce_args`](#structcongure__mock__snd__t_1aac8ad50860a8c31412717e3c2a7f0aa1) 

What were the arguments for the last [congure_snd_driver_t::report_ecn_ce()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101) call?

