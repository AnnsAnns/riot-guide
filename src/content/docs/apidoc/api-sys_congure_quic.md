---
title: api-sys_congure_quic.md
description: api-sys_congure_quic.md
---
# group `sys_congure_quic` 

Implementation of QUIC's congestion control algorithm for the CongURE framework.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`congure_quic_snd_setup`](#group__sys__congure__quic_1ga41a54722941f7072be9ceb9807560762)`(`[`congure_quic_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__t)` * c,const `[`congure_quic_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__consts__t)` * consts)`            | Set's up the driver for a CongURE QUIC object.
`struct `[`congure_quic_snd_consts_t`](#structcongure__quic__snd__consts__t) | Constants for the congestion control.
`struct `[`congure_quic_snd_t`](#structcongure__quic__snd__t) | State object for CongURE QUIC.

## Members

#### `public void `[`congure_quic_snd_setup`](#group__sys__congure__quic_1ga41a54722941f7072be9ceb9807560762)`(`[`congure_quic_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__t)` * c,const `[`congure_quic_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__consts__t)` * consts)` 

Set's up the driver for a CongURE QUIC object.

inter_msg_interval_numerator of `consts` must be greater than or equal to its inter_msg_interval_denominator. See [RFC 9002, section 7.7](https://tools.ietf.org/html/rfc9002#section-7.7): > Using a value for "N" that is small, but at least 1 (for > example, 1.25) ensures that variations in round-trip time do not > result in under-utilization of the congestion window.

#### Parameters
* `c` A CongURE QUIC object. 

* `consts` The constants to use for `c`. [congure_quic_snd_consts_t::inter_msg_interval_numerator](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__consts__t_1a1ef11509770d548fa7ba8001a08030fa) must be greater than or equal to [congure_quic_snd_consts_t::inter_msg_interval_denominator](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__consts__t_1a9ace8b034b2795130597d2372af169d2)

# struct `congure_quic_snd_consts_t` 

Constants for the congestion control.

Example usage (to use the same values as specified in [RFC 9002](https://tools.ietf.org/html/rfc9002#section-7.6)):

```cpp
static const congure_quic_snd_consts_t consts = {
    .cong_event_cb = _maybe_send_one_pkt,
    .init_wnd = 12000,                   // 10 * max_datagram_size
    .min_wnd = 2400,                     // 2 * max_datagram_size
    .init_rtt = 333,                     // kInitialRtt = 333ms
    .max_msg_size = 1200,                // max_datagram_size
    .pc_thresh = 3000,                   // kPersistentCongestionThreshold = 3s
    .granularity = 1,                    // kGranularity = 1ms
    .loss_reduction_numerator = 1,       // kLossReductionFactor = .5
    .loss_reduction_denominator = 2,
    .inter_msg_interval_numerator = 5,   // Pacing factor N = 1.25
    .inter_msg_interval_denominator = 4,
}
static congure_quic_snd_t cong;

// ...
congure_quic_snd_setup(&cong, &const);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`cong_event_cb`](#structcongure__quic__snd__consts__t_1a5b2005c9dd194b1ae4046ff54f0df18c) | congestion event callback
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`init_wnd`](#structcongure__quic__snd__consts__t_1ade15d9e2430cfcb6fe09b2bcbbe7ad91) | Initial congestion window size in initiator-defined units.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`min_wnd`](#structcongure__quic__snd__consts__t_1ab52d0594858892596cf692ff11f8f1cc) | minimum congestion window size in initiator-defined units.
`public uint16_t `[`init_rtt`](#structcongure__quic__snd__consts__t_1a435693da99a0579a529374d8fa286648) | The assumed RTT in milliseconds before an RTT sample is taken.
`public uint16_t `[`max_msg_size`](#structcongure__quic__snd__consts__t_1a84766fe7fb97a81172d076920ad488a7) | maximum message size in initiator-defined units.
`public uint16_t `[`pc_thresh`](#structcongure__quic__snd__consts__t_1a03b823a2de9d21575bae260ed89091de) | period of time in milliseconds for persistent congestion to be establisched
`public uint16_t `[`granularity`](#structcongure__quic__snd__consts__t_1a1a26e7a144fcb8c216e9a74d105d4724) | system timer granularity in milliseconds (typically 1)
`public uint8_t `[`loss_reduction_numerator`](#structcongure__quic__snd__consts__t_1a0a87d3a3835c29bbaa140d62e63fe3cf) | numerator for the factor the congestion window should be reduced by when a new loss event is detected
`public uint8_t `[`loss_reduction_denominator`](#structcongure__quic__snd__consts__t_1a69984a9670a1dcf3c560e27e0c5ede71) | denominator for the factor the congestion window should be reduced by when a new loss event is detected
`public uint8_t `[`inter_msg_interval_numerator`](#structcongure__quic__snd__consts__t_1a1ef11509770d548fa7ba8001a08030fa) | numerator for the factor N used to adapt the message interval
`public uint8_t `[`inter_msg_interval_denominator`](#structcongure__quic__snd__consts__t_1a9ace8b034b2795130597d2372af169d2) | denominator for the factor N used to adapt the message interval

## Members

#### `public void(* `[`cong_event_cb`](#structcongure__quic__snd__consts__t_1a5b2005c9dd194b1ae4046ff54f0df18c) 

congestion event callback

This callback is called when congestion event is detected by message loss or a CE notification. QUIC typically uses this to send a packet to speed up loss recovery.

#### Parameters
* `ctx` callback context

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`init_wnd`](#structcongure__quic__snd__consts__t_1ade15d9e2430cfcb6fe09b2bcbbe7ad91) 

Initial congestion window size in initiator-defined units.

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`min_wnd`](#structcongure__quic__snd__consts__t_1ab52d0594858892596cf692ff11f8f1cc) 

minimum congestion window size in initiator-defined units.

#### `public uint16_t `[`init_rtt`](#structcongure__quic__snd__consts__t_1a435693da99a0579a529374d8fa286648) 

The assumed RTT in milliseconds before an RTT sample is taken.

#### `public uint16_t `[`max_msg_size`](#structcongure__quic__snd__consts__t_1a84766fe7fb97a81172d076920ad488a7) 

maximum message size in initiator-defined units.

#### `public uint16_t `[`pc_thresh`](#structcongure__quic__snd__consts__t_1a03b823a2de9d21575bae260ed89091de) 

period of time in milliseconds for persistent congestion to be establisched

**See also**: [RFC 9002, section 7.6](https://tools.ietf.org/html/rfc9002#section-7.6)

#### `public uint16_t `[`granularity`](#structcongure__quic__snd__consts__t_1a1a26e7a144fcb8c216e9a74d105d4724) 

system timer granularity in milliseconds (typically 1)

#### `public uint8_t `[`loss_reduction_numerator`](#structcongure__quic__snd__consts__t_1a0a87d3a3835c29bbaa140d62e63fe3cf) 

numerator for the factor the congestion window should be reduced by when a new loss event is detected

#### `public uint8_t `[`loss_reduction_denominator`](#structcongure__quic__snd__consts__t_1a69984a9670a1dcf3c560e27e0c5ede71) 

denominator for the factor the congestion window should be reduced by when a new loss event is detected

#### `public uint8_t `[`inter_msg_interval_numerator`](#structcongure__quic__snd__consts__t_1a1ef11509770d548fa7ba8001a08030fa) 

numerator for the factor N used to adapt the message interval

**See also**: [RFC 9002, section 7.7](https://tools.ietf.org/html/rfc9002#section-7.7)

#### `public uint8_t `[`inter_msg_interval_denominator`](#structcongure__quic__snd__consts__t_1a9ace8b034b2795130597d2372af169d2) 

denominator for the factor N used to adapt the message interval

**See also**: [RFC 9002, section 7.7](https://tools.ietf.org/html/rfc9002#section-7.7)

# struct `congure_quic_snd_t` 

```
struct congure_quic_snd_t
  : public congure_snd_t
```  

State object for CongURE QUIC.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` `[`super`](#structcongure__quic__snd__t_1ac503dba145d930a45400b9a43e83f996) | see [congure_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)
`public const `[`congure_quic_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__consts__t)` * `[`consts`](#structcongure__quic__snd__t_1aa8900d7b4b1949aa4530e3ee7f1680c0) | Constants.
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`first_rtt_sample`](#structcongure__quic__snd__t_1aec856f590addc23c5fa3a47c9d55f69e) | Timestamp in milliseconds of when the first RTT sample was obtained.
`public unsigned `[`in_flight_size`](#structcongure__quic__snd__t_1ad5cfa3b23f8da73cd0ea7bfeab2e0cd9) | Sum of caller-defined units of message sizes of all messages that are yet not ack'd or declared lost.
`public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`recovery_start`](#structcongure__quic__snd__t_1a4f34d20b62e4e9cfe2aea04ad53f87b0) | Timestamp in milliseconds of when congestion was first detected.
`public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`ssthresh`](#structcongure__quic__snd__t_1a52400eaaf3b2cd5ebd4790724ddac606) | Slow start threshold in caller-defined units.
`public uint16_t `[`smoothed_rtt`](#structcongure__quic__snd__t_1a26e60f87d3ca172438b6023467a6cd9b) | The smoothed RTT of a connection between peers in milliseconds.
`public uint16_t `[`rtt_var`](#structcongure__quic__snd__t_1a776cf4434907d2ea21a698b5a17bf451) | The RTT variation.
`public uint16_t `[`min_rtt`](#structcongure__quic__snd__t_1ad2a8756fca36fe683070890c44ff0fc0) | The minimum RTT seen over a period of time.
`public uint16_t `[`limited`](#structcongure__quic__snd__t_1aea76612d6e4175b72c61fd9ee4a15263) | Set to one if congestion control should is limited by the application or flow control.
`public uint16_t `[`max_ack_delay`](#structcongure__quic__snd__t_1af1c07113d0fc1ab76d100cf7070345ac) | Advertised maximum amount of time in milliseconds a receiver intends to delay its acknowledgements.

## Members

#### `public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` `[`super`](#structcongure__quic__snd__t_1ac503dba145d930a45400b9a43e83f996) 

see [congure_snd_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)

#### `public const `[`congure_quic_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__consts__t)` * `[`consts`](#structcongure__quic__snd__t_1aa8900d7b4b1949aa4530e3ee7f1680c0) 

Constants.

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`first_rtt_sample`](#structcongure__quic__snd__t_1aec856f590addc23c5fa3a47c9d55f69e) 

Timestamp in milliseconds of when the first RTT sample was obtained.

#### `public unsigned `[`in_flight_size`](#structcongure__quic__snd__t_1ad5cfa3b23f8da73cd0ea7bfeab2e0cd9) 

Sum of caller-defined units of message sizes of all messages that are yet not ack'd or declared lost.

#### `public `[`ztimer_now_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gab5514d8cb5abf5fb540565fd3d070f0f)` `[`recovery_start`](#structcongure__quic__snd__t_1a4f34d20b62e4e9cfe2aea04ad53f87b0) 

Timestamp in milliseconds of when congestion was first detected.

This is the time when congestion recovery mode is entered.

#### `public `[`congure_wnd_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure_1gaa8548f80649d991f82009bf414bcb193)` `[`ssthresh`](#structcongure__quic__snd__t_1a52400eaaf3b2cd5ebd4790724ddac606) 

Slow start threshold in caller-defined units.

When [congure_quic_snd_t::cwnd](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t_1a692b89db2aa1507616b657af68246526) is below [congure_quic_snd_t::ssthresh](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_quic.md#structcongure__quic__snd__t_1a52400eaaf3b2cd5ebd4790724ddac606) the algorithm is in slow start mode and [congure_quic_snd_t::cwnd](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t_1a692b89db2aa1507616b657af68246526) grows in number of caller-defined units of acknowledged messages sizes

#### `public uint16_t `[`smoothed_rtt`](#structcongure__quic__snd__t_1a26e60f87d3ca172438b6023467a6cd9b) 

The smoothed RTT of a connection between peers in milliseconds.

#### `public uint16_t `[`rtt_var`](#structcongure__quic__snd__t_1a776cf4434907d2ea21a698b5a17bf451) 

The RTT variation.

#### `public uint16_t `[`min_rtt`](#structcongure__quic__snd__t_1ad2a8756fca36fe683070890c44ff0fc0) 

The minimum RTT seen over a period of time.

#### `public uint16_t `[`limited`](#structcongure__quic__snd__t_1aea76612d6e4175b72c61fd9ee4a15263) 

Set to one if congestion control should is limited by the application or flow control.

Should be supplied and may be changed by user before calling a [CongURE - A Congestion control framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure) function.

**See also**: [RFC 9002, Appendix B.5](https://tools.ietf.org/html/rfc9002#appendix-B.5)

#### `public uint16_t `[`max_ack_delay`](#structcongure__quic__snd__t_1af1c07113d0fc1ab76d100cf7070345ac) 

Advertised maximum amount of time in milliseconds a receiver intends to delay its acknowledgements.

Used to establish persistent congestion.

Should be supplied and may be changed by user before calling a [CongURE - A Congestion control framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure) function. If this value is not provided by the * protocol, leave it at 0.

