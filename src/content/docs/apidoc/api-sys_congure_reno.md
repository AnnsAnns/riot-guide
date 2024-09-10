---
title: api-sys_congure_reno.md
description: api-sys_congure_reno.md
---
# group `sys_congure_reno` 

Implementation of the TCP Reno congestion control algorithm for the CongURE framework.

**See also**: [RFC 5681](https://tools.ietf.org/html/rfc5681)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`congure_reno_snd_setup`](#group__sys__congure__reno_1ga3537f89f698c97e3ce04659a928f3bf6)`(`[`congure_reno_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__reno_1gade79d82a064e8e0845b91331c758e43c)` * c,const `[`congure_reno_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_reno.md#structcongure__reno__snd__consts__t)` * consts)`            | Set-up [CongURE implementation of TCP Reno](#group__sys__congure__reno) driver and constants.
`struct `[`congure_reno_snd_consts_t`](#structcongure__reno__snd__consts__t) | Constants for the congestion control.
`struct `[`congure_reno_snd`](#structcongure__reno__snd) | State object for CongURE Reno.

## Members

#### `public void `[`congure_reno_snd_setup`](#group__sys__congure__reno_1ga3537f89f698c97e3ce04659a928f3bf6)`(`[`congure_reno_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__reno_1gade79d82a064e8e0845b91331c758e43c)` * c,const `[`congure_reno_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_reno.md#structcongure__reno__snd__consts__t)` * consts)` 

Set-up [CongURE implementation of TCP Reno](#group__sys__congure__reno) driver and constants.

Module `congure_reno` is compiled in (note: `congure_reno_methods` can also compile this module to enable [The send driver methods for CongURE TCP Reno](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__reno__methods), but not activate the module `congure_reno`)

#### Parameters
* `c` The [CongURE implementation of TCP Reno](#group__sys__congure__reno) state object 

* `consts` The constants to use

# struct `congure_reno_snd_consts_t` 

Constants for the congestion control.

Example usage:

```cpp
static const congure_reno_snd_consts_t consts = {
    .fr = _my_fast_retransmit,
    .same_wnd_adv = _my_same_window_advertised,
    .init_mss = 1460,
    .cwnd_upper = 2190,
    .cwnd_lower = 1095,
    .init_ssthresh = CONGURE_WND_SIZE_MAX,
    .frthresh = 3,
}
static congure_reno_snd_t cong;

// ...
congure_reno_snd_setup(&cong, &const);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`fr`](#structcongure__reno__snd__consts__t_1a65090dc7b3ae88a5a68ad72a5f8174d8) | Callback to enter and perform fast retransmit.
`public bool(* `[`same_wnd_adv`](#structcongure__reno__snd__consts__t_1ad477178ae56ce106d1a379786dcac915) | Callback to check if the advertised window within an ACK is the same as in the context.
`public void(* `[`ss_cwnd_inc`](#structcongure__reno__snd__consts__t_1a96135b72b1fca83dc79bbfa7e11b3adc) | Callback to increase congestion window in slow start.
`public void(* `[`ca_cwnd_inc`](#structcongure__reno__snd__consts__t_1abdc7845b266a64bb6e9348c223b1d3bd) | Callback to increase congestion window in congestion avoidance.
`public void(* `[`fr_cwnd_dec`](#structcongure__reno__snd__consts__t_1a9515d4d815603fd8917bfddaf8e061e3) | Callback to reset congestion window when entering fast recovery.
`public unsigned `[`init_mss`](#structcongure__reno__snd__consts__t_1ae776d0b44a602d3ecac19ec108b8ed21) | Initial maximum segment size of the sender in intiator-defined units.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`cwnd_upper`](#structcongure__reno__snd__consts__t_1a6ffd5c438173aafe3707733d5f54f9e1) | Initial upper bound for initial window initiator-defined units.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`cwnd_lower`](#structcongure__reno__snd__consts__t_1add00026ac5ff995d38a68ec531483b16) | Initial lower bound for initial window initiator-defined units.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`init_ssthresh`](#structcongure__reno__snd__consts__t_1a6114c62941ba29478a7da96d9aa85bbd) | Initial slow-start threshold in initiator-defined units.
`public uint8_t `[`frthresh`](#structcongure__reno__snd__consts__t_1abeb9a29173704d836bd81d524b40c9de) | Threshold for duplicate ACKs to go into Fast Retransmit.

## Members

#### `public void(* `[`fr`](#structcongure__reno__snd__consts__t_1a65090dc7b3ae88a5a68ad72a5f8174d8) 

Callback to enter and perform fast retransmit.

#### Parameters
* `c` The CongURE state object (callback context is at `c->super.ctx`)

#### `public bool(* `[`same_wnd_adv`](#structcongure__reno__snd__consts__t_1ad477178ae56ce106d1a379786dcac915) 

Callback to check if the advertised window within an ACK is the same as in the context.

#### Parameters
* `c` The CongURE state object (callback context is at `c->super.ctx`) 

* `ack` The ACK to check.

#### `public void(* `[`ss_cwnd_inc`](#structcongure__reno__snd__consts__t_1a96135b72b1fca83dc79bbfa7e11b3adc) 

Callback to increase congestion window in slow start.

Defaults to

```cpp
c->cwnd += c->mss;
```

when set to NULL

#### Parameters
* `c` The CongURE state object (callback context is at `c->super.ctx`)

#### `public void(* `[`ca_cwnd_inc`](#structcongure__reno__snd__consts__t_1abdc7845b266a64bb6e9348c223b1d3bd) 

Callback to increase congestion window in congestion avoidance.

Defaults to

```cpp
c->cwnd += (c->in_flight_size < c->mss)
         ? c->in_flight_size
         : c->mss;
```

when set to NULL

#### Parameters
* `c` The CongURE state object (callback context is at `c->super.ctx`)

#### `public void(* `[`fr_cwnd_dec`](#structcongure__reno__snd__consts__t_1a9515d4d815603fd8917bfddaf8e061e3) 

Callback to reset congestion window when entering fast recovery.

Defaults to

```cpp
c->ssthresh = max(c->mss * 2, c->cwnd / 2);
c->cwnd = c->ssthresh + (3 * c->mss);
```

when set to NULL

#### Parameters
* `c` The CongURE state object (callback context is at `c->super.ctx`)

#### `public unsigned `[`init_mss`](#structcongure__reno__snd__consts__t_1ae776d0b44a602d3ecac19ec108b8ed21) 

Initial maximum segment size of the sender in intiator-defined units.

1460 bytes for TCP over Ethernet (see [RFC 3390](https://tools.ietf.org/html/rfc3390)).

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`cwnd_upper`](#structcongure__reno__snd__consts__t_1a6ffd5c438173aafe3707733d5f54f9e1) 

Initial upper bound for initial window initiator-defined units.

2190 bytes in classic TCP-Reno (3/4 of the assumed MSS for Ethernet, see [RFC 3390](https://tools.ietf.org/html/rfc3390)).

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`cwnd_lower`](#structcongure__reno__snd__consts__t_1add00026ac5ff995d38a68ec531483b16) 

Initial lower bound for initial window initiator-defined units.

1095 bytes in classic TCP-Reno (3/8 of the assumed MSS for Ethernet see [RFC 3390](https://tools.ietf.org/html/rfc3390)).

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`init_ssthresh`](#structcongure__reno__snd__consts__t_1a6114c62941ba29478a7da96d9aa85bbd) 

Initial slow-start threshold in initiator-defined units.

#### `public uint8_t `[`frthresh`](#structcongure__reno__snd__consts__t_1abeb9a29173704d836bd81d524b40c9de) 

Threshold for duplicate ACKs to go into Fast Retransmit.

# struct `congure_reno_snd` 

```
struct congure_reno_snd
  : public congure_snd_t
```  

State object for CongURE Reno.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` `[`super`](#structcongure__reno__snd_1a5df63748717b20e3cd9c1d8e99e34082) | see [congure_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)
`public const `[`congure_reno_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_reno.md#structcongure__reno__snd__consts__t)` * `[`consts`](#structcongure__reno__snd_1ab3971620fe9fc33137dc0ab9fb98a6d6) | Constants.
`public uint32_t `[`last_ack`](#structcongure__reno__snd_1a130dc2718c871611fc46c45d4435e531) | ID of the last ACK reported.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`mss`](#structcongure__reno__snd_1a218eaf5ae5abc1b1a20c2fa32c462361) | Maximum segment size of the sender in caller-defined units.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`ssthresh`](#structcongure__reno__snd_1ac1b315b0ecd58a9829469470f036ca5d) | Slow-start threshold.
`public uint16_t `[`in_flight_size`](#structcongure__reno__snd_1a0ac29f8124691d52c8d063e141db3b09) | Sum of caller-defined units of message sizes of all messages that are yet not ack'd or declared lost.
`public uint8_t `[`dup_acks`](#structcongure__reno__snd_1aa5967bccd4faaf80fa1f8904a1197e42) | Number of duplicate ACKs reported.

## Members

#### `public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` `[`super`](#structcongure__reno__snd_1a5df63748717b20e3cd9c1d8e99e34082) 

see [congure_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)

#### `public const `[`congure_reno_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_reno.md#structcongure__reno__snd__consts__t)` * `[`consts`](#structcongure__reno__snd_1ab3971620fe9fc33137dc0ab9fb98a6d6) 

Constants.

#### `public uint32_t `[`last_ack`](#structcongure__reno__snd_1a130dc2718c871611fc46c45d4435e531) 

ID of the last ACK reported.

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`mss`](#structcongure__reno__snd_1a218eaf5ae5abc1b1a20c2fa32c462361) 

Maximum segment size of the sender in caller-defined units.

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`ssthresh`](#structcongure__reno__snd_1ac1b315b0ecd58a9829469470f036ca5d) 

Slow-start threshold.

#### `public uint16_t `[`in_flight_size`](#structcongure__reno__snd_1a0ac29f8124691d52c8d063e141db3b09) 

Sum of caller-defined units of message sizes of all messages that are yet not ack'd or declared lost.

#### `public uint8_t `[`dup_acks`](#structcongure__reno__snd_1aa5967bccd4faaf80fa1f8904a1197e42) 

Number of duplicate ACKs reported.

