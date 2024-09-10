---
title: api-drivers_periph_freqm.md
description: api-drivers_periph_freqm.md
---
# group `drivers_periph_freqm` 

FREQM peripheral driver interface.

This interface allows to configure and use the Frequency Meter (FREQM) peripheral.

The Frequency Meter uses the frequency of a known reference clock to determine the frequency of a signal connected via GPIO.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`freqm_init`](#group__drivers__periph__freqm_1ga79c0f3aeed507c2a9129963ba2b96a61)`(`[`freqm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1ga8fb46555e155652125358c2f2a6e5e28)` idx)`            | Initialize the frequency meter.
`public void `[`freqm_frequency_get_async`](#group__drivers__periph__freqm_1ga45121ab6b45c5e7141a9d7e535229549)`(`[`freqm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1ga8fb46555e155652125358c2f2a6e5e28)` idx,`[`freqm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1gae6544c3a9bdd24c5612b170307f6dfa6)` freqm_cb,void * context,uint32_t period_us)`            | Read number of periods of measured clock and calculate its frequency.
`public int `[`freqm_frequency_get`](#group__drivers__periph__freqm_1ga54212b84b1f280fb08fb2d228164da27)`(`[`freqm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1ga8fb46555e155652125358c2f2a6e5e28)` idx,uint32_t * result,uint32_t period_us)`            | Read number of periods of measured clock and calculate its frequency.

## Members

#### `public void `[`freqm_init`](#group__drivers__periph__freqm_1ga79c0f3aeed507c2a9129963ba2b96a61)`(`[`freqm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1ga8fb46555e155652125358c2f2a6e5e28)` idx)` 

Initialize the frequency meter.

#### Parameters
* `idx` index of the configuration

#### `public void `[`freqm_frequency_get_async`](#group__drivers__periph__freqm_1ga45121ab6b45c5e7141a9d7e535229549)`(`[`freqm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1ga8fb46555e155652125358c2f2a6e5e28)` idx,`[`freqm_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1gae6544c3a9bdd24c5612b170307f6dfa6)` freqm_cb,void * context,uint32_t period_us)` 

Read number of periods of measured clock and calculate its frequency.

This function returns after triggering the measurement and calls `freqm_callback` , with the calculated result and `context` , when the measurement is done.

#### Parameters
* `idx` index of the configuration 

* `freqm_cb` callback function when measurement is ready 

* `context` context for the callback function 

* `period_us` measurement duration in microseconds

#### `public int `[`freqm_frequency_get`](#group__drivers__periph__freqm_1ga54212b84b1f280fb08fb2d228164da27)`(`[`freqm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__freqm_1ga8fb46555e155652125358c2f2a6e5e28)` idx,uint32_t * result,uint32_t period_us)` 

Read number of periods of measured clock and calculate its frequency.

This function uses a blocking mutex to wait for the measurement to finish.

#### Parameters
* `idx` index of the configuration 

* `result` calculated frequency 

* `period_us` measurement duration in microseconds

#### Returns
-EOVERFLOW if FREQM sticky counter has an overflow 

#### Returns
0 on success

