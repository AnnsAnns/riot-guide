---
title: api-sys_congure_abe.md
description: api-sys_congure_abe.md
---
# group `sys_congure_abe` 

Implementation of the TCP Alternative Backoff with ECN (ABE) congestion control mechanism for the CongURE framework.

**See also**: [RFC 8511](https://tools.ietf.org/html/rfc8511)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`congure_abe_snd_setup`](#group__sys__congure__abe_1ga19985c441501914a90e21b010ec57bb5)`(`[`congure_abe_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__abe_1ga6474aa149c314a569d5835edbd905409)` * c,const `[`congure_abe_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_abe.md#structcongure__abe__snd__consts__t)` * consts)`            | Set's up the driver for a CongURE ABE object.
`public inline static void `[`congure_abe_set_mss`](#group__sys__congure__abe_1ga6451c0481a0a720e6bdae8bd5cb2efe3)`(`[`congure_abe_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__abe_1ga6474aa149c314a569d5835edbd905409)` * c,unsigned mss)`            | Set sender maximum segment size.
`struct `[`congure_abe_snd_consts_t`](#structcongure__abe__snd__consts__t) | Constants for the congestion control.

## Members

#### `public void `[`congure_abe_snd_setup`](#group__sys__congure__abe_1ga19985c441501914a90e21b010ec57bb5)`(`[`congure_abe_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__abe_1ga6474aa149c314a569d5835edbd905409)` * c,const `[`congure_abe_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_abe.md#structcongure__abe__snd__consts__t)` * consts)` 

Set's up the driver for a CongURE ABE object.

#### Parameters
* `c` A CongURE ABE object. 

* `consts` The constants to use for `c`

#### `public inline static void `[`congure_abe_set_mss`](#group__sys__congure__abe_1ga6451c0481a0a720e6bdae8bd5cb2efe3)`(`[`congure_abe_snd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__abe_1ga6474aa149c314a569d5835edbd905409)` * c,unsigned mss)` 

Set sender maximum segment size.

> This resets [congure_reno_snd_t::cwnd](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure.md#structcongure__snd__t_1a692b89db2aa1507616b657af68246526) to the new initial window size based on `mss`. So use with care.

#### Parameters
* `c` A CongURE state object 

* `mss` Maximum segment size of the sender in caller-defined units

# struct `congure_abe_snd_consts_t` 

```
struct congure_abe_snd_consts_t
  : public congure_reno_snd_consts_t
```  

Constants for the congestion control.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`congure_reno_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_reno.md#structcongure__reno__snd__consts__t)` `[`reno`](#structcongure__abe__snd__consts__t_1a00f6094cd889023f34a58a2f6339c28c) | TCP Reno constants.
`public uint8_t `[`abe_multiplier_numerator`](#structcongure__abe__snd__consts__t_1aaaee5385d81bf7e3203e59b9e09d601c) | numerator for the `beta_{ecn}`factor used to set the slow start threshold on an ECN CE.
`public uint8_t `[`abe_multiplier_denominator`](#structcongure__abe__snd__consts__t_1a6f24a6c7ab4e37c1b50633d1efedfa31) | numerator for the `beta_{ecn}`factor used to set the slow start threshold on an ECN CE.

## Members

#### `public `[`congure_reno_snd_consts_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_congure_reno.md#structcongure__reno__snd__consts__t)` `[`reno`](#structcongure__abe__snd__consts__t_1a00f6094cd889023f34a58a2f6339c28c) 

TCP Reno constants.

#### `public uint8_t `[`abe_multiplier_numerator`](#structcongure__abe__snd__consts__t_1aaaee5385d81bf7e3203e59b9e09d601c) 

numerator for the `beta_{ecn}`factor used to set the slow start threshold on an ECN CE.

Use [CONFIG_CONGURE_ABE_MULTIPLIER_NUMERATOR_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__config_1ga3232e5195505dace1f283d0ee5938f1c) for a default value

#### `public uint8_t `[`abe_multiplier_denominator`](#structcongure__abe__snd__consts__t_1a6f24a6c7ab4e37c1b50633d1efedfa31) 

numerator for the `beta_{ecn}`factor used to set the slow start threshold on an ECN CE.

Use [CONFIG_CONGURE_ABE_MULTIPLIER_DENOMINATOR_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__congure__config_1ga9d6ef1a59f8113375ef47341abc73b22) for a default value

