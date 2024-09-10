---
title: api-net_gnrc_sixlowpan_frag_sfr_congure.md
description: api-net_gnrc_sixlowpan_frag_sfr_congure.md
---
# group `net_gnrc_sixlowpan_frag_sfr_congure` 

Congestion control for 6LoWPAN SFR using the [CongURE - A Congestion control framework](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure).

When included, this module enables congestion control for 6LoWPAN Selective Fragment Recovery (SFR). The flavor of congestion control can be selected using the following sub-modules:

* [gnrc_sixlowpan_frag_sfr_congure_sfr: Appendix C](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure__sfr) (the default)

* [gnrc_sixlowpan_frag_sfr_congure_quic: QUIC CC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure__quic)

* [gnrc_sixlowpan_frag_sfr_congure_reno: TCP Reno](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure__reno)

* [gnrc_sixlowpan_frag_sfr_congure_abe: TCP Reno with ABE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure__abe)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GNRC_SIXLOWPAN_FRAG_SFR_CONGURE_UNIT`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gae36caf888a6a9ec90a8620df615d0d55)            | The user-defined window unit for congure is one fragment with SFR.
`public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * `[`gnrc_sixlowpan_frag_sfr_congure_snd_get`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga743788066a78b015ddfffde75e3f0fa2)`(void)`            | Retrieve CongURE state object from a pool of free objects.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_free`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga351a543ec7131656f8b08eee765de416)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c)`            | Frees the CongURE state object.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_destroy`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga4140de87e4008308e3354840c85ff2fd)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Frees the CongURE state object of a fragmentation buffer and set's it to `NULL`
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_init`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga7a9a20ae03d86b4b2da0ab7dc746e8ee)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Initializes a CongURE state object in a fragmentation buffer entry.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_setup`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga24f794ec3cc48a37764153e3d479697e)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Retrieve CongURE state object when not retrieved and initialize it for a fragmentation buffer entry.
`public inline static bool `[`gnrc_sixlowpan_frag_sfr_congure_snd_in_cwnd`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gacc3bccbd5b6e0bf772a5dd3b0895e254)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Checks if given fragmentation buffer entry is within congestion window.
`public inline static bool `[`gnrc_sixlowpan_frag_sfr_congure_snd_next_in_cwnd`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga13748d14b7b26bee8b865500980bff8f)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Checks if given fragmentation buffer entry would still be within congestion window after next send.
`public inline static bool `[`gnrc_sixlowpan_frag_sfr_congure_snd_has_inter_frame_gap`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga35b7b68db0aecffc00a6459c3b326322)`(void)`            | Checks if inter-frame gap is provided.
`public inline static uint32_t `[`gnrc_sixlowpan_frag_sfr_congure_snd_inter_frame_gap`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gac5c587dae2525154c19f5068214d1a7f)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Returns inter-frame gap if provided by CongURE implementation.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frag_sent`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga3de49734091e7b04c2c4ad6d2c2eb7e9)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Report to CongURE that a fragment was sent.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frag_discard`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga65650983618d7bc77f65c921be5e9e8b)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Report to CongURE that a fragment as discarded.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frags_timeout`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga10412feae2647d9dc3cb7b26f3cb0b8b)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)`            | Report to CongURE that the ACK for a fragment timed out.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frags_lost`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga30d729d6d5975aaaf38c0c925e969950)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * frags)`            | Report to CongURE that a number of fragments are known to be lost.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frag_acked`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gad13154242f49524a27dee26362192eaa)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * frag,`[`congure_snd_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t)` * ack)`            | Report to CongURE that a number of fragments are known to be lost.
`public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_ecn`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gac651c23b025637a64573b797cb5fe6a2)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb,uint32_t time)`            | Report to CongURE that ECN bit was set in an ACK.

## Members

#### `define `[`GNRC_SIXLOWPAN_FRAG_SFR_CONGURE_UNIT`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gae36caf888a6a9ec90a8620df615d0d55) 

The user-defined window unit for congure is one fragment with SFR.

#### `public `[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * `[`gnrc_sixlowpan_frag_sfr_congure_snd_get`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga743788066a78b015ddfffde75e3f0fa2)`(void)` 

Retrieve CongURE state object from a pool of free objects.

Needs to be defined in for a each CongURE implementation `congure_x` e.g. as a sub-module `gnrc_sixlowpan_frag_sfr_congure_x` and call the respective `congure_x_snd_setup` function when a free object is available for that object. As such, [congure_snd_t::driver](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t_1a5e607d3b240c468deb7ef0f006a736ff) == NULL can be used as an identifier if a state object is free.

The pool of objects has to have an initial size of at least [CONFIG_GNRC_SIXLOWPAN_FRAG_FB_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1ga5ba6c4be8d7c93d505ed6e10106f211e).

The window unit is [GNRC_SIXLOWPAN_FRAG_SFR_CONGURE_UNIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure_1gae36caf888a6a9ec90a8620df615d0d55).

#### Returns
A CongURE state object on success 

#### Returns
NULL, if no free CongURE state object is available (including when when module `gnrc_sixlowpan_frag_sfr_congure` is not included).

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_free`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga351a543ec7131656f8b08eee765de416)`(`[`congure_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t)` * c)` 

Frees the CongURE state object.

This makes a CongURE state object retrievable with [gnrc_sixlowpan_frag_sfr_congure_snd_get](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga743788066a78b015ddfffde75e3f0fa2) again.

CongURE object is not NULL when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `c` A CongURE state object

Does not do anything without the module `gnrc_sixlowpan_frag_sfr_congure`

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_destroy`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga4140de87e4008308e3354840c85ff2fd)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Frees the CongURE state object of a fragmentation buffer and set's it to `NULL`

#### Parameters
* `fb` A fragmentation buffer entry

Does not do anything without the module `gnrc_sixlowpan_frag_sfr_congure`

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_init`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga7a9a20ae03d86b4b2da0ab7dc746e8ee)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Initializes a CongURE state object in a fragmentation buffer entry.

#### Parameters
* `fb` A fragmentation buffer entry

Does not do anything without the module `gnrc_sixlowpan_frag_sfr_congure`

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_setup`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga24f794ec3cc48a37764153e3d479697e)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Retrieve CongURE state object when not retrieved and initialize it for a fragmentation buffer entry.

#### Parameters
* `fb` A fragmentation buffer entry

Does not do anything without the module `gnrc_sixlowpan_frag_sfr_congure`

#### `public inline static bool `[`gnrc_sixlowpan_frag_sfr_congure_snd_in_cwnd`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gacc3bccbd5b6e0bf772a5dd3b0895e254)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Checks if given fragmentation buffer entry is within congestion window.

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer entry

Without the module `gnrc_sixlowpan_frag_sfr_congure` the fragmentation buffer entry is checked against [CONFIG_GNRC_SIXLOWPAN_SFR_OPT_WIN_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1ga5c13176cabc5dc17b93dadc0f54efd1f)

#### Parameters
* `true` When `fb` is in congestion window 

* `false` When `fb` is not in congestion window

#### `public inline static bool `[`gnrc_sixlowpan_frag_sfr_congure_snd_next_in_cwnd`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga13748d14b7b26bee8b865500980bff8f)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Checks if given fragmentation buffer entry would still be within congestion window after next send.

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

Without the module `gnrc_sixlowpan_frag_sfr_congure` the fragmentation buffer entry is checked against [CONFIG_GNRC_SIXLOWPAN_SFR_OPT_WIN_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1ga5c13176cabc5dc17b93dadc0f54efd1f)

#### Parameters
* `true` When `fb` can still send one fragment under the congestion window constraint. 

* `false` When `fb` can not still send one fragment under the congestion window constraint.

#### `public inline static bool `[`gnrc_sixlowpan_frag_sfr_congure_snd_has_inter_frame_gap`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga35b7b68db0aecffc00a6459c3b326322)`(void)` 

Checks if inter-frame gap is provided.

Either because [CONFIG_GNRC_SIXLOWPAN_SFR_INTER_FRAME_GAP_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1ga8d0316ef279f1a8749352e56d81fba16) is greater 0 or module `gnrc_sixlowpan_frag_sfr_congure` is provided

#### Parameters
* `true` When an inter-frame gap can be provided 

* `false` When the inter-frame gap is supposed to be 0.

#### `public inline static uint32_t `[`gnrc_sixlowpan_frag_sfr_congure_snd_inter_frame_gap`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gac5c587dae2525154c19f5068214d1a7f)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Returns inter-frame gap if provided by CongURE implementation.

When module `gnrc_sixlowpan_frag_sfr_congure` is provided it will provide congure_snd_driver_t::inter_message_interval() of the CongURE state object of the provided fragmentation buffer with [CONFIG_GNRC_SIXLOWPAN_SFR_INTER_FRAME_GAP_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1ga8d0316ef279f1a8749352e56d81fba16) as a lower bound. If congure_snd_driver_t::inter_message_interval returns -1, `fb` is NULL, or without the module `gnrc_sixlowpan_frag_sfr_congure` it will return [CONFIG_GNRC_SIXLOWPAN_SFR_INTER_FRAME_GAP_US](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__config_1ga8d0316ef279f1a8749352e56d81fba16)

CongURE object of the fragmentation buffer entry is initialized when `fb` is `NULL` and when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer. May be NULL.

#### Returns
The inter-frame gap for the given fragmentation buffer, but

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frag_sent`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga3de49734091e7b04c2c4ad6d2c2eb7e9)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Report to CongURE that a fragment was sent.

Calls [congure_snd_driver_t::report_msg_sent](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a0d086fd9d6316577ca210d920980a382) for the CongURE state object of `fb` with `msg_size`[GNRC_SIXLOWPAN_FRAG_SFR_CONGURE_UNIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure_1gae36caf888a6a9ec90a8620df615d0d55).

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer.

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frag_discard`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga65650983618d7bc77f65c921be5e9e8b)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Report to CongURE that a fragment as discarded.

Calls [congure_snd_driver_t::report_msg_discarded](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1aae1de0041920f2666803d7ba618d78c7) for the CongURE state object of `fb` with `msg_size`[GNRC_SIXLOWPAN_FRAG_SFR_CONGURE_UNIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__gnrc__sixlowpan__frag__sfr__congure_1gae36caf888a6a9ec90a8620df615d0d55).

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer.

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frags_timeout`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga10412feae2647d9dc3cb7b26f3cb0b8b)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb)` 

Report to CongURE that the ACK for a fragment timed out.

Calls [congure_snd_driver_t::report_msgs_timeout](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a83c1ff0def5814c0050ad23a928335fa) for the CongURE state object of `fb` with [gnrc_sixlowpan_frag_sfr_fb_t::window](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_sfr.md#structgnrc__sixlowpan__frag__sfr__fb_1aabc2932e958533c9baf0d3fa165638ad) of `fb` as `msgs`.

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer.

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frags_lost`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1ga30d729d6d5975aaaf38c0c925e969950)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * frags)` 

Report to CongURE that a number of fragments are known to be lost.

Calls [congure_snd_driver_t::report_msgs_lost](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a4504bded5e1a13662e5c858c7aaf59d4) for the CongURE state object of `fb` with `frags`.

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer. 

* `frags` A collection of messages that are known to be lost. The list may be changed by the function.

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_frag_acked`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gad13154242f49524a27dee26362192eaa)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb,`[`congure_snd_msg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__msg__t)` * frag,`[`congure_snd_ack_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__ack__t)` * ack)` 

Report to CongURE that a number of fragments are known to be lost.

Calls congure_snd_driver_t::report_msgs_acked for the CongURE state object of `fb` with `frag` and `ack`.

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer. 

* `frag` The ACK'd fragment. 

* `ack` The received ACK.

#### `public inline static void `[`gnrc_sixlowpan_frag_sfr_congure_snd_report_ecn`](#group__net__gnrc__sixlowpan__frag__sfr__congure_1gac651c23b025637a64573b797cb5fe6a2)`(`[`gnrc_sixlowpan_frag_fb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_gnrc_sixlowpan_frag_fb.md#structgnrc__sixlowpan__frag__fb__t)` * fb,uint32_t time)` 

Report to CongURE that ECN bit was set in an ACK.

Calls [congure_snd_driver_t::report_ecn_ce](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__driver_1a6d84e81002a9ab715325cd675a80f101) for the CongURE state object of `fb` with `time`.

CongURE object of the fragmentation buffer entry is initialized when called with module `gnrc_sixlowpan_frag_sfr_congure` used.

#### Parameters
* `fb` A fragmentation buffer. 

* `time` Timestamp in milliseconds of the earliest fragment for which the notified congestion occurred was sent.

