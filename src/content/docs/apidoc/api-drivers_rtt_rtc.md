---
title: api-drivers_rtt_rtc.md
description: api-drivers_rtt_rtc.md
---
# group `drivers_rtt_rtc` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`rtt_rtc_settimeofday`](#group__drivers__rtt__rtc_1gabd23301388dfe024f1873f99ae70389a)`(uint32_t s,uint32_t us)`            | Set the time as epoch (elapsed seconds since [RIOT_EPOCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gae6d6a8215f604e1907b4df059179ea1c)) with sub-second precision This feature is an extension provided by the `rtt_rtc` module.
`public void `[`rtt_rtc_gettimeofday`](#group__drivers__rtt__rtc_1ga7fd8e7aab4e3a64ceee7d34aa034be91)`(uint32_t * s,uint32_t * us)`            | Get the current epoch (elapsed seconds since [RIOT_EPOCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gae6d6a8215f604e1907b4df059179ea1c)) with sub-second precision This feature is an extension provided by the `rtt_rtc` module.

## Members

#### `public void `[`rtt_rtc_settimeofday`](#group__drivers__rtt__rtc_1gabd23301388dfe024f1873f99ae70389a)`(uint32_t s,uint32_t us)` 

Set the time as epoch (elapsed seconds since [RIOT_EPOCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gae6d6a8215f604e1907b4df059179ea1c)) with sub-second precision This feature is an extension provided by the `rtt_rtc` module.

The actual µs precision depends on the underlying hardware. The smallest time step will be 1 / [RTT_FREQUENCY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1gafec7c948b8c70db3c9394fc3dc145a99).

#### Parameters
* `s` The new epoch timestamp 

* `us` Sub-Seconds

#### `public void `[`rtt_rtc_gettimeofday`](#group__drivers__rtt__rtc_1ga7fd8e7aab4e3a64ceee7d34aa034be91)`(uint32_t * s,uint32_t * us)` 

Get the current epoch (elapsed seconds since [RIOT_EPOCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gae6d6a8215f604e1907b4df059179ea1c)) with sub-second precision This feature is an extension provided by the `rtt_rtc` module.

The actual µs precision depends on the underlying hardware. The smallest time step will be 1 / [RTT_FREQUENCY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtt_1gafec7c948b8c70db3c9394fc3dc145a99).

#### Parameters
* `s` The current epoch timestamp 

* `us` Sub-Seconds

