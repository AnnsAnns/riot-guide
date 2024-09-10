---
title: api-sys_congure_reno_methods.md
description: api-sys_congure_reno_methods.md
---
# group `sys_congure_reno_methods` 

Many other congestion control mechanisms are just adaptations of TCP Reno, so this makes the methods of [CongURE implementation of TCP Reno](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__reno) available to other [CongURE - A Congestion control framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure) modules.

Use module `congure_reno_methods` to only compile in these modules, but not the driver for `congure_reno_snd_t` or [congure_reno_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__reno_1ga3537f89f698c97e3ce04659a928f3bf6).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`congure_reno_set_mss`](#group__sys__congure__reno__methods_1gadd85d9ff7751fa1f212375615f7e9354)`(`[`congure_reno_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__reno_1gade79d82a064e8e0845b91331c758e43c)` * c,`[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` mss)`            | Set sender maximum segment size.
`public void `[`congure_reno_snd_init`](#group__sys__congure__reno__methods_1ga6aefc25f6f164e6d07c1ca0b448929f6)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,void * ctx)`            | Use to override [congure_snd_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5).
`public int32_t `[`congure_reno_snd_inter_msg_interval`](#group__sys__congure__reno__methods_1gabd0941c84e8dd06413333230d348f029)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,unsigned msg_size)`            | Use to override [congure_snd_driver_t::inter_msg_interval](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a).
`public void `[`congure_reno_snd_report_msg_sent`](#group__sys__congure__reno__methods_1gab693f7e53ad9b4901d482ab33877fda2)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,unsigned msg_size)`            | Use to override [congure_snd_driver_t::report_msg_sent](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382).
`public void `[`congure_reno_snd_report_msg_discarded`](#group__sys__congure__reno__methods_1gabc8d4ee084eb5d019ed77589de5a6352)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,unsigned msg_size)`            | Use to override [congure_snd_driver_t::report_msg_discarded](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7).
`public void `[`congure_reno_snd_report_msgs_timeout`](#group__sys__congure__reno__methods_1ga8d59cf0ad98019a997a340fd879c724f)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * msgs)`            | Use to override [congure_snd_driver_t::report_msgs_timeout](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa).
`public void `[`congure_reno_snd_report_msgs_lost`](#group__sys__congure__reno__methods_1ga1580dde3e6c52f74c5c0647d6cb58b65)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * msgs)`            | Use to override [congure_snd_driver_t::report_msgs_lost](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4).
`public void `[`congure_reno_snd_report_msg_acked`](#group__sys__congure__reno__methods_1ga46e5578093b5b6bacea29ae54d663893)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * msg,`[`congure_snd_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t)` * ack)`            | Use to override [congure_snd_driver_t::report_msg_acked](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8).
`public void `[`congure_reno_snd_report_ecn_ce`](#group__sys__congure__reno__methods_1ga45a7b5648fb4123a2b472cb16b5ed9e7)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` time)`            | Use to override [congure_snd_driver_t::report_ecn_ce](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101).

## Members

#### `public void `[`congure_reno_set_mss`](#group__sys__congure__reno__methods_1gadd85d9ff7751fa1f212375615f7e9354)`(`[`congure_reno_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__reno_1gade79d82a064e8e0845b91331c758e43c)` * c,`[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` mss)` 

Set sender maximum segment size.

> This resets [congure_reno_snd_t::cwnd](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t_1a692b89db2aa1507616b657af68246526) to the new initial window size based on `mss`. So use with care.

#### Parameters
* `c` A CongURE state object 

* `mss` Maximum segment size of the sender in caller-defined units

#### `public void `[`congure_reno_snd_init`](#group__sys__congure__reno__methods_1ga6aefc25f6f164e6d07c1ca0b448929f6)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,void * ctx)` 

Use to override [congure_snd_driver_t::init](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5).

#### Parameters
* `c` The CongURE object to initialize. 

* `ctx` Context for callbacks specific to the congestion control (such as a TCP PCB). May be NULL.

#### `public int32_t `[`congure_reno_snd_inter_msg_interval`](#group__sys__congure__reno__methods_1gabd0941c84e8dd06413333230d348f029)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,unsigned msg_size)` 

Use to override [congure_snd_driver_t::inter_msg_interval](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a).

#### Parameters
* `c` The CongURE object to initialize. 

* `msg_size` Size of the next message to sent in caller-defined unit.

#### Returns
Always -1.

#### `public void `[`congure_reno_snd_report_msg_sent`](#group__sys__congure__reno__methods_1gab693f7e53ad9b4901d482ab33877fda2)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,unsigned msg_size)` 

Use to override [congure_snd_driver_t::report_msg_sent](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382).

#### Parameters
* `c` The CongURE state object. 

* `msg_size` Size of the message in caller-defined unit.

#### `public void `[`congure_reno_snd_report_msg_discarded`](#group__sys__congure__reno__methods_1gabc8d4ee084eb5d019ed77589de5a6352)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,unsigned msg_size)` 

Use to override [congure_snd_driver_t::report_msg_discarded](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7).

#### Parameters
* `c` The CongURE state object. 

* `msg_size` Size of the discarded message in caller-defined unit.

#### `public void `[`congure_reno_snd_report_msgs_timeout`](#group__sys__congure__reno__methods_1ga8d59cf0ad98019a997a340fd879c724f)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * msgs)` 

Use to override [congure_snd_driver_t::report_msgs_timeout](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa).

#### Parameters
* `c` The CongURE state object. 

* `msgs` A collection of messages that are known to be lost. The list must not be changed by the method.

#### `public void `[`congure_reno_snd_report_msgs_lost`](#group__sys__congure__reno__methods_1ga1580dde3e6c52f74c5c0647d6cb58b65)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * msgs)` 

Use to override [congure_snd_driver_t::report_msgs_lost](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4).

#### Parameters
* `c` The CongURE state object. 

* `msgs` A collection of messages for which the ACK timed out. The list must not be changed by the method.

#### `public void `[`congure_reno_snd_report_msg_acked`](#group__sys__congure__reno__methods_1ga46e5578093b5b6bacea29ae54d663893)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * msg,`[`congure_snd_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t)` * ack)` 

Use to override [congure_snd_driver_t::report_msg_acked](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8).

#### Parameters
* `c` The CongURE state object. 

* `msg` The ACK'd message. 

* `ack` The received ACK.

#### `public void `[`congure_reno_snd_report_ecn_ce`](#group__sys__congure__reno__methods_1ga45a7b5648fb4123a2b472cb16b5ed9e7)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c,`[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` time)` 

Use to override [congure_snd_driver_t::report_ecn_ce](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101).

#### Parameters
* `c` The CongURE state object. 

* `time` Timestamp in milliseconds of the message the CE event occurred for was sent.

