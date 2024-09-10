---
title: api-sys_trickle.md
description: api-sys_trickle.md
---
# group `sys_trickle` 

Implementation of a generic Trickle Algorithm (RFC 6206)

**See also**: [https://tools.ietf.org/html/rfc6206](https://tools.ietf.org/html/rfc6206)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`trickle_reset_timer`](#group__sys__trickle_1gab81222f4e9a4fd07b902281b8c13bd5d)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)`            | resets the trickle timer
`public void `[`trickle_start`](#group__sys__trickle_1gad3b68e9c9880fe6e8f9dd064f434b3f5)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle,uint16_t msg_type,uint32_t Imin,uint8_t Imax,uint8_t k)`            | start the trickle timer
`public void `[`trickle_stop`](#group__sys__trickle_1ga5957fe96b84479209f400fa76c0f370b)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)`            | stops the trickle timer
`public void `[`trickle_increment_counter`](#group__sys__trickle_1ga429a15f2101d911087a497eb97961ee9)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)`            | increments the counter by one
`public void `[`trickle_interval`](#group__sys__trickle_1gacc7e3fde8493d71eca5b07b816a7e042)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)`            | is called after the interval is over and calculates the next interval
`public void `[`trickle_callback`](#group__sys__trickle_1gab0ae7bda2eb3fcc892b8fb5ee9c6d844)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)`            | is called after the interval is over and executes callback function
`struct `[`trickle_callback_t`](#structtrickle__callback__t) | Trickle callback function with arguments.
`struct `[`trickle_t`](#structtrickle__t) | all state variables of a trickle timer

## Members

#### `public void `[`trickle_reset_timer`](#group__sys__trickle_1gab81222f4e9a4fd07b902281b8c13bd5d)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)` 

resets the trickle timer

`trickle->I > trickle->Imin`

**See also**: [https://tools.ietf.org/html/rfc6206#section-4.2](https://tools.ietf.org/html/rfc6206#section-4.2), number 6

#### Parameters
* `trickle` the trickle timer

#### `public void `[`trickle_start`](#group__sys__trickle_1gad3b68e9c9880fe6e8f9dd064f434b3f5)`(`[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` pid,`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle,uint16_t msg_type,uint32_t Imin,uint8_t Imax,uint8_t k)` 

start the trickle timer

`Imin > 0`

`(Imin << Imax) < (UINT32_MAX / 2)` to avoid overflow of uint32_t

#### Parameters
* `pid` target thread 

* `trickle` trickle timer 

* `msg_type` [msg_t.type](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t_1a0014bd01d347dadc3e3289caec391d35) for messages 

* `Imin` minimum interval in ms 

* `Imax` maximum interval in ms 

* `k` redundancy constant

#### `public void `[`trickle_stop`](#group__sys__trickle_1ga5957fe96b84479209f400fa76c0f370b)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)` 

stops the trickle timer

#### Parameters
* `trickle` trickle timer

#### `public void `[`trickle_increment_counter`](#group__sys__trickle_1ga429a15f2101d911087a497eb97961ee9)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)` 

increments the counter by one

#### Parameters
* `trickle` trickle timer

#### `public void `[`trickle_interval`](#group__sys__trickle_1gacc7e3fde8493d71eca5b07b816a7e042)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)` 

is called after the interval is over and calculates the next interval

`(trickle->I > 0)` required for trickle algorithm to work

#### Parameters
* `trickle` trickle timer

#### `public void `[`trickle_callback`](#group__sys__trickle_1gab0ae7bda2eb3fcc892b8fb5ee9c6d844)`(`[`trickle_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__t)` * trickle)` 

is called after the interval is over and executes callback function

#### Parameters
* `trickle` trickle timer

# struct `trickle_callback_t` 

Trickle callback function with arguments.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`func`](#structtrickle__callback__t_1ae8d793a529313041ea2d146959e8170d) | callback function pointer
`public void * `[`args`](#structtrickle__callback__t_1a55f2a5e724c9897f53fa4189833cd5d0) | callback function arguments

## Members

#### `public void(* `[`func`](#structtrickle__callback__t_1ae8d793a529313041ea2d146959e8170d) 

callback function pointer

#### `public void * `[`args`](#structtrickle__callback__t_1a55f2a5e724c9897f53fa4189833cd5d0) 

callback function arguments

# struct `trickle_t` 

all state variables of a trickle timer

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`k`](#structtrickle__t_1a362826bda28da679fce976775ed9eac2) | redundancy constant
`public uint8_t `[`Imax`](#structtrickle__t_1a3d9b71c4e2022eb9eab2ab9d11265540) | maximum interval size, described as of Imin doublings in ms
`public uint16_t `[`c`](#structtrickle__t_1a6f102a1ccee7961028896365c499b703) | counter
`public uint32_t `[`Imin`](#structtrickle__t_1a17d26585f0e72fb2f6234a76c1dd9a51) | minimum interval size in ms
`public uint32_t `[`I`](#structtrickle__t_1a434c6c1790417e5a9260e22230bcf4cf) | current interval size in ms
`public uint32_t `[`t`](#structtrickle__t_1a07cc00e7948cb64704f0ff32a0af9cb1) | time within the current interval in ms
`public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structtrickle__t_1a58d2fc46bf0bb513bd43b04d3d1cf307) | pid of trickles target thread
`public `[`trickle_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__callback__t)` `[`callback`](#structtrickle__t_1a55bd4886509ff90583390bdf40e4e875) | callback function and parameter that trickle calls after each interval
`public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structtrickle__t_1a0e47c8d4d74689e729711a6bb98685ad) | the [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) to use for intervals
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`msg_timer`](#structtrickle__t_1a4905c81323d351954040bb386e701e45) | timer to send a [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) to the target thread for a new interval

## Members

#### `public uint8_t `[`k`](#structtrickle__t_1a362826bda28da679fce976775ed9eac2) 

redundancy constant

#### `public uint8_t `[`Imax`](#structtrickle__t_1a3d9b71c4e2022eb9eab2ab9d11265540) 

maximum interval size, described as of Imin doublings in ms

#### `public uint16_t `[`c`](#structtrickle__t_1a6f102a1ccee7961028896365c499b703) 

counter

#### `public uint32_t `[`Imin`](#structtrickle__t_1a17d26585f0e72fb2f6234a76c1dd9a51) 

minimum interval size in ms

#### `public uint32_t `[`I`](#structtrickle__t_1a434c6c1790417e5a9260e22230bcf4cf) 

current interval size in ms

#### `public uint32_t `[`t`](#structtrickle__t_1a07cc00e7948cb64704f0ff32a0af9cb1) 

time within the current interval in ms

#### `public `[`kernel_pid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sched_1ga8375139300d7cbf23bd8bd89ddddbe84)` `[`pid`](#structtrickle__t_1a58d2fc46bf0bb513bd43b04d3d1cf307) 

pid of trickles target thread

#### `public `[`trickle_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_trickle.md#structtrickle__callback__t)` `[`callback`](#structtrickle__t_1a55bd4886509ff90583390bdf40e4e875) 

callback function and parameter that trickle calls after each interval

#### `public `[`msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t)` `[`msg`](#structtrickle__t_1a0e47c8d4d74689e729711a6bb98685ad) 

the [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) to use for intervals

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`msg_timer`](#structtrickle__t_1a4905c81323d351954040bb386e701e45) 

timer to send a [msg_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_msg.md#structmsg__t) to the target thread for a new interval

