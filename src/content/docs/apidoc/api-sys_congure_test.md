---
title: api-sys_congure_test.md
description: api-sys_congure_test.md
---
# group `sys_congure_test` 

Shell commands to test a CongURE implementation.

This module requires an application defined `congure_impl.h` which defines the [congure_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t) extension of the CongURE implementation as [congure_test_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga68c9620f8a8e8ed6a6fbbd9a7dee6e52) and provides a function declaration [congure_test_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65) setup said type. E.g.

```cpp
typedef congure_reno_snd_t congure_test_snd_t;

void congure_test_snd_setup(congure_test_snd_t *c, int id);
```

All constants and initial values can then be set within the application specific definition of [congure_test_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_CONGURE_TEST_LOST_MSG_POOL_SIZE`](#group__sys__congure__test_1ga3d66b3b8c27a4983607e31b899dce47b)            | Pool size for the message list elements for a lost message report.
`public int `[`congure_test_snd_setup`](#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65)`(void `[`congure_test_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga68c9620f8a8e8ed6a6fbbd9a7dee6e52)` * c,unsigned id)`            | Setup the application-defined CongURE state object under test.
`public `[`congure_test_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga68c9620f8a8e8ed6a6fbbd9a7dee6e52)` * `[`congure_test_get_state`](#group__sys__congure__test_1ga790c4379d86d2e8344d7632ac77da5d1)`(void)`            | Get the application-defined CongURE state object.
`public int `[`congure_test_clear_state`](#group__sys__congure__test_1ga2ef10fb773ee091ab6d93055b58a3f23)`(int argc,char ** argv)`            | Clears the CongURE state object.
`public int `[`congure_test_call_setup`](#group__sys__congure__test_1gaec4d4a6168b86abe3ffd2ce5af3e8511)`(int argc,char ** argv)`            | Setup the CongURE state object.
`public int `[`congure_test_call_init`](#group__sys__congure__test_1gaa770d12d88967371a0d6ac1919d488b4)`(int argc,char ** argv)`            | Calls `init()` method for CongURE state object.
`public int `[`congure_test_call_inter_msg_interval`](#group__sys__congure__test_1gabbddad49b064a6c3a32989ebd88fe743)`(int argc,char ** argv)`            | Calls `inter_msg_interval()` method for CongURE state object.
`public int `[`congure_test_add_msg`](#group__sys__congure__test_1ga06a814f1639a57d3a50bbd0f16a649b4)`(int argc,char ** argv)`            | Adds a message from the message pool to the list for `cong_report msgs_lost` and `cong_report msgs_timeout`.
`public int `[`congure_test_msgs_reset`](#group__sys__congure__test_1gae94dfd9303677bd146413bc7f2650d5c)`(int argc,char ** argv)`            | Resets the the message pool and messages list for `cong_report msgs_lost` and `cong_report msgs_timeout`.
`public int `[`congure_test_call_report`](#group__sys__congure__test_1ga688738e73166f4dd0504d4309b2ca83e)`(int argc,char ** argv)`            | Calls one of the `report_*()` methods for CongURE state object.

## Members

#### `define `[`CONFIG_CONGURE_TEST_LOST_MSG_POOL_SIZE`](#group__sys__congure__test_1ga3d66b3b8c27a4983607e31b899dce47b) 

Pool size for the message list elements for a lost message report.

**See also**: congure_snd_driver_t::report_msg_lost

This defines the maximum number of 3-tuples you can use with [congure_test_call_report()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga688738e73166f4dd0504d4309b2ca83e) when `argv[1] = "msg_lost"`.

#### `public int `[`congure_test_snd_setup`](#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65)`(void `[`congure_test_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga68c9620f8a8e8ed6a6fbbd9a7dee6e52)` * c,unsigned id)` 

Setup the application-defined CongURE state object under test.

Needs to be defined by the application and declare it within an application-provided `congure_impl.h`

#### Parameters
* `c` The CongURE state object under test. May not be NULL. 

* `id` And application-specific ID that may identify different setup parameters, e.g. a set of different constants to use when setting up `c`. If not applicable to your application just ignore `id`.

#### Parameters
* `0` on success 

* `-1` when `id` is not ignored and is an unknown value to the application.

#### `public `[`congure_test_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga68c9620f8a8e8ed6a6fbbd9a7dee6e52)` * `[`congure_test_get_state`](#group__sys__congure__test_1ga790c4379d86d2e8344d7632ac77da5d1)`(void)` 

Get the application-defined CongURE state object.

Needs to be defined by the application

#### Returns
The CongURE state object.

#### `public int `[`congure_test_clear_state`](#group__sys__congure__test_1ga2ef10fb773ee091ab6d93055b58a3f23)`(int argc,char ** argv)` 

Clears the CongURE state object.

Every byte in the state object is set to 0.

#### Parameters
* `argc` Number of `argv`. Needs to be at least 1. 

* `argv` Command line arguments. No extra arguments are required except for the command name in `argv[0]`.

Always generates the following JSON object in STDOUT: 
```cpp
{"success": null} 
```

#### Returns
Always 0.

#### `public int `[`congure_test_call_setup`](#group__sys__congure__test_1gaec4d4a6168b86abe3ffd2ce5af3e8511)`(int argc,char ** argv)` 

Setup the CongURE state object.

Calls application-defined [congure_test_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65)

#### Parameters
* `argc` Number of `argv`. Needs to be at least 1. 

* `argv` Command line arguments. The command name is expected in `argv[0]`. If `argc` > 1, a integer is expected in `argv[1]` for the `id` parameter of [congure_test_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65).

This function will generate the following JSON objects in STDOUT:

* 
```cpp
{"success": "0x12345678"} 
```
 On success, with `0x12345678` being replaced with the memory address of the state object.

* 
```cpp
{"error":"`id` expected to be integer"} 
```
 On error, when `argv[1]` is not parsable to an unsigned integer.

* 
```cpp
{"error":"`id` is invalid"} 
```
 On error, when `argv[1]` is a valid unsigned integer but is an unknown value to the application.

#### Parameters
* `0` on success. 

* `1` on error. Only can happen if `argv[1]` is provided and an invalid or unexpected value.

#### `public int `[`congure_test_call_init`](#group__sys__congure__test_1gaa770d12d88967371a0d6ac1919d488b4)`(int argc,char ** argv)` 

Calls `init()` method for CongURE state object.

**See also**: [congure_snd_driver_t::init()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a69e52a59f0e39f06cfc2d054cc65fee5)

#### Parameters
* `argc` Number of `argv`. Needs to be at least 2. 

* `argv` Command line arguments. `argv[0]` needs to be the command name and `argv[1]` needs to be a hexadecimal integer of format 0xXXXX, representing a pointer to the object used as the `ctx` parameter for `init()`.

This function will generate the following JSON objects in STDOUT on error:

* 
```cpp
{"error":"State object not set up"} 
```
 When [congure_test_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65) was not called before calling this command (i.e. the `driver` member of the state object is `NULL`).

* 
```cpp
{"error":"`ctx` argument expected"} 
```
 When `argc` < 2.

* 
```cpp
{"error":"`ctx` expected to be hex"} 
```
 When `argv[1]` is not parseable as a hexadecimal integer.

Always generates the following JSON object in STDOUT: 
```cpp
{"success": null} 
```

#### Parameters
* `0` on success. 

* `1` on error.

#### `public int `[`congure_test_call_inter_msg_interval`](#group__sys__congure__test_1gabbddad49b064a6c3a32989ebd88fe743)`(int argc,char ** argv)` 

Calls `inter_msg_interval()` method for CongURE state object.

**See also**: [congure_snd_driver_t::inter_msg_interval()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a)

#### Parameters
* `argc` Number of `argv`. Needs to be at least 1. 

* `argv` Command line arguments. No extra arguments are required except for the command name in `argv[0]`.

This function will generate the following JSON objects in STDOUT:

* 
```cpp
{"success":X} 
```
 On success, with `X` being replaced with the return value of [congure_snd_driver_t::inter_msg_interval()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a9732da536953107c41e4dbeb04062a7a).

* 
```cpp
{"error":"State object not set up"} 
```
 When [congure_test_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65) was not called before calling this command (i.e. the `driver` member of the state object is `NULL`).

#### Parameters
* `0` on success. 

* `1` on error.

#### `public int `[`congure_test_add_msg`](#group__sys__congure__test_1ga06a814f1639a57d3a50bbd0f16a649b4)`(int argc,char ** argv)` 

Adds a message from the message pool to the list for `cong_report msgs_lost` and `cong_report msgs_timeout`.

#### Parameters
* `argc` Number of `argv`. Needs to be at least 4 

* `argv` Three arguments are expected. Each call of the command represents an element of the `msgs` list parameter of [congure_snd_driver_t::report_msgs_lost()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) and congure_snd_msg_t::report_msgs_timeout():

* `argv[1]` (`msg_send_time`) is expected to be an integer for the `send_time` member of [congure_snd_msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t),

* `argv[2]` (`msg_size`) is expected to be an integer for the `size` member of [congure_snd_msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t), and

* `argv[3]` (`msg_resends`) is expected to be a an integer integer for the `resends` member of [congure_snd_msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t).

This function will generate the following JSON objects in STDOUT:

* 
```cpp
{"success":null} 
```
 On success

* 
```cpp
{"error":"At least 3 arguments `msg_send_time`, `msg_size`,
 `msg_resends` expected"} 
```
 When `argc < 4`.

* 
```cpp
{"error":"`<arg_name>` expected to be integer"} 
```
 When `argv[i] = "<arg_name>"` is expected to be an integer but is not parseable

* 
```cpp
{"error":"List element pool depleted"} 
```
 When called moret than > [CONFIG_CONGURE_TEST_LOST_MSG_POOL_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga3d66b3b8c27a4983607e31b899dce47b)) times without calling `cong_msgs_reset` in between.

#### Parameters
* `0` on success. 

* `1` on error.

#### `public int `[`congure_test_msgs_reset`](#group__sys__congure__test_1gae94dfd9303677bd146413bc7f2650d5c)`(int argc,char ** argv)` 

Resets the the message pool and messages list for `cong_report msgs_lost` and `cong_report msgs_timeout`.

#### Parameters
* `argc` Number of `argv`. Needs to be at least 1. 

* `argv` Command line arguments. No extra arguments are required except for the command name in `argv[0]`.

Always generates the following JSON object in STDOUT: 
```cpp
{"success": null} 
```

#### Returns
Always 0.

#### `public int `[`congure_test_call_report`](#group__sys__congure__test_1ga688738e73166f4dd0504d4309b2ca83e)`(int argc,char ** argv)` 

Calls one of the `report_*()` methods for CongURE state object.

**See also**: [congure_snd_driver_t::report_msg_sent()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382)

**See also**: [congure_snd_driver_t::report_msg_discarded()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7)

**See also**: congure_snd_driver_t::report_msg_timeout() 

**See also**: congure_snd_driver_t::report_msg_lost() 

**See also**: [congure_snd_driver_t::report_msg_acked()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8)

**See also**: [congure_snd_driver_t::report_ecn_ce()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101)

#### Parameters
* `argc` Number of `argv`. Needs to be at least 2. 

* `argv` Command line arguments. `argv[0]` needs to be the command name and `argv[1]` needs to one of the following sub-commands that may require at least one extra arguments:

* `msg_sent`: `argv[2]` is expected to be an integer for the `msg_size` parameter of [congure_snd_driver_t::report_msg_sent()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382)

* `msg_sent`: `argv[2]` is expected to be an integer for the `msg_size` parameter of [congure_snd_driver_t::report_msg_discarded()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7)

* `msg_timeout`: no arguments are expected, but [congure_test_add_msg()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga06a814f1639a57d3a50bbd0f16a649b4) should be called a number of times beforehand to add messages that are to be reported timed out. The list of messages is reset after the call.

* `msg_lost`: no arguments are expected, but [congure_test_add_msg()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga06a814f1639a57d3a50bbd0f16a649b4) should be called a number of times beforehand to add messages that are to be reported lost. The list of messages is reset after the call.

* `msg_acked`: [congure_test_add_msg()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga06a814f1639a57d3a50bbd0f16a649b4) must have been called to add a message for the `msg` parameter of [congure_snd_driver_t::report_msg_acked()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8). `argc` must be 8. The 6 arguments after the sub-command represent members of the `ack` parameter of [congure_snd_driver_t::report_msg_acked()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1adabdcfb080c9e4c3536a1224ae9bb2d8):

* `argv[2]` (`ack_recv_time`) is expected to be a an integer for the `recv_time` member of [congure_snd_ack_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t),

* `argv[3]` (`ack_id`) is expected to be a an integer for the `ack_id` member of [congure_snd_ack_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t), and

* `argv[4]` (`ack_size`) is expected to be a an integer integer for the `size` member of [congure_snd_ack_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t).

* `argv[5]` (`ack_clean`) is expected to be a an integer for the `clean` member of [congure_snd_ack_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t). If `argv[5]` is `"0"`, `clean` will be set to `false` and to `true` otherwise.

* `argv[6]` (`ack_wnd`) is expected to be a 16-bit integer for the `wnd` member of [congure_snd_ack_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t).

* `argv[7]` (`ack_delay`) is expected to be a 16-bit integer for the `delay` member of [congure_snd_ack_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t).

* `ecn_ce`: `argv[2]` is expected to be an integer for the `time` parameter of [congure_snd_driver_t::report_ecn_ce()](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101)

This function will generate the following JSON objects in STDOUT:

* 
```cpp
{"success":null} 
```
 On success

* 
```cpp
{"error":"State object not set up"} 
```
 When [congure_test_snd_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1gabf7cdab1370b8cff4366ed273274bf65) was not called before calling this command (i.e. the `driver` member of the state object is `NULL`).

* 
```cpp
{"error":"No report command provided"} 
```
 When `argc` < 2.

* 
```cpp
{"error":"Unknown command `<command>`"} 
```
 When `argv[1] = "<command>"` is not a known sub-command.

* 
```cpp
{"error":"`<arg_name>` argument expected"} 
```
 When `argv[i] = "<arg_name>"` is expected but `argc <= i`.

* 
```cpp
{"error":"`<arg_name>` expected to be integer"} 
```
 When `argv[i] = "<arg_name>"` is expected to be an integer but is not parseable

* 
```cpp
{"error":"`<arg_name>` expected not 16 bit wide"} 
```
 When `argv[i] = "<arg_name>"` is expected to be an 16-bit unsigned integer but is is greater than or equal to $2^{16}$

* 
```cpp
{"error":"At least `<arg_num>` arguments <arglist> expecdted"}
```
 When `argc` is smaller than expected. `<arg_num>` provides the number of arguments beyond the sub-command (i.e. `argc` needs at least to be `<arg_num> + 2`), with the names of the arguments expected provided in `<arg_list>` as a comma-seperated list of ``<arg_name>``.

* 
```cpp
{"error":"Message not initialized"} 
```
 When `argv[0]` in `{msg_acked, msgs_lost, msgs_timout}` was not called, but no messages where added using [congure_test_add_msg()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__test_1ga06a814f1639a57d3a50bbd0f16a649b4).

#### Parameters
* `0` on success. 

* `1` on error.

