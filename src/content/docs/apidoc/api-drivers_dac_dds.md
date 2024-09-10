---
title: api-drivers_dac_dds.md
description: api-drivers_dac_dds.md
---
# group `drivers_dac_dds` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DAC_FLAG_8BIT`](#group__drivers__dac__dds_1ga5683290ab0aadaab668f3c8095f104dd)            | A sample has a resolution of 8 bit.
`define `[`DAC_FLAG_16BIT`](#group__drivers__dac__dds_1ga1a7140f40c46a4eff88128b0e2b63ec6)            | A sample has a resolution of 16 bit.
`public void `[`dac_dds_init`](#group__drivers__dac__dds_1ga0cbfcafc3ec22f4aaa39ba8f1c617edb)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac,uint16_t sample_rate,uint8_t flags,`[`dac_dds_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gad1b5b35d8c3cc3acc6ef7d2cc32d30c5)` cb,void * cb_arg)`            | Initialize a DAC for playing audio samples A user defined callback can be provided that will be called when the next buffer can be queued.
`public void `[`dac_dds_set_cb`](#group__drivers__dac__dds_1gafb4b23c6367e34487e3b053715e9b9f7)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac,`[`dac_dds_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gad1b5b35d8c3cc3acc6ef7d2cc32d30c5)` cb,void * cb_arg)`            | Change the 'buffer done' callback.
`public bool `[`dac_dds_play`](#group__drivers__dac__dds_1gae98a6366a2d5bab94d5e03a2aee13c0d)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac,const void * buf,size_t len)`            | Play a buffer of (audio) samples on a DAC.
`public void `[`dac_dds_stop`](#group__drivers__dac__dds_1ga7b20737cb0cc9d99239334eeea6f9890)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac)`            | Stop playback of the current sample buffer.
`struct `[`dac_dds_params_t`](#structdac__dds__params__t) | Configuration struct for a DAC DDS channel.

## Members

#### `define `[`DAC_FLAG_8BIT`](#group__drivers__dac__dds_1ga5683290ab0aadaab668f3c8095f104dd) 

A sample has a resolution of 8 bit.

#### `define `[`DAC_FLAG_16BIT`](#group__drivers__dac__dds_1ga1a7140f40c46a4eff88128b0e2b63ec6) 

A sample has a resolution of 16 bit.

#### `public void `[`dac_dds_init`](#group__drivers__dac__dds_1ga0cbfcafc3ec22f4aaa39ba8f1c617edb)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac,uint16_t sample_rate,uint8_t flags,`[`dac_dds_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gad1b5b35d8c3cc3acc6ef7d2cc32d30c5)` cb,void * cb_arg)` 

Initialize a DAC for playing audio samples A user defined callback can be provided that will be called when the next buffer can be queued.

**This feature is experimental!**

#### Parameters
* `dac` The DAC to initialize 

* `sample_rate` The sample rate in Hz 

* `flags` Optional flags ([DAC_FLAG_16BIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1ga1a7140f40c46a4eff88128b0e2b63ec6)) 

* `cb` Will be called when the next buffer can be queued 

* `cb_arg` Callback argument

#### `public void `[`dac_dds_set_cb`](#group__drivers__dac__dds_1gafb4b23c6367e34487e3b053715e9b9f7)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac,`[`dac_dds_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gad1b5b35d8c3cc3acc6ef7d2cc32d30c5)` cb,void * cb_arg)` 

Change the 'buffer done' callback.

A user defined callback can be provided that will be called when the next buffer can be queued. This function can be used to change the callback on the fly.

Passing in a `cb` of `NULL` can be used to only update the arg without updating the `cb`. Conversely, to clear the callback, both `cb` and `cb_arg` need to be passed in as NULL. **This feature is experimental!**

#### Parameters
* `dac` The DAC to configure 

* `cb` Called when the played buffer is done 

* `cb_arg` Callback argument

#### `public bool `[`dac_dds_play`](#group__drivers__dac__dds_1gae98a6366a2d5bab94d5e03a2aee13c0d)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac,const void * buf,size_t len)` 

Play a buffer of (audio) samples on a DAC.

If this function is called while another buffer is already
     being played, the new `buf` will be played when the current
     buffer has finished playing.

     The DAC implementations allows one buffer to be queued
     (double buffering).

     Whenever a new buffer can be queued, the @ref dac_dds_cb_t
     callback function will be executed.
**This feature is experimental!**

#### Parameters
* `dac` The DAC to play the sample on 

* `buf` A buffer with (audio) samples 

* `len` Number of bytes to be played

#### Returns
`true` if the buffer was queued while another buffer is currently playing. `false` if the new buffer is played immediately. That means playing was just started or an underrun occurred.

#### `public void `[`dac_dds_stop`](#group__drivers__dac__dds_1ga7b20737cb0cc9d99239334eeea6f9890)`(`[`dac_dds_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dac__dds_1gaeea69ae6c950bdb39863ee69cae38501)` dac)` 

Stop playback of the current sample buffer.

#### Parameters
* `dac` The DAC to stop

# struct `dac_dds_params_t` 

Configuration struct for a DAC DDS channel.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` `[`dac`](#structdac__dds__params__t_1a87111a3bd74a5dbdd23adc1e76f1848a) | The DAC used for playing the sample
`public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`timer`](#structdac__dds__params__t_1a89022cb76b798a4f4f90c28248e8d7a0) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) used for periodic DAC events
`public uint32_t `[`timer_hz`](#structdac__dds__params__t_1a8793c98f7c6776c07c6a3840a90b0fec) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) frequency, must be at least 2x sample rate.

## Members

#### `public `[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` `[`dac`](#structdac__dds__params__t_1a87111a3bd74a5dbdd23adc1e76f1848a) 

The DAC used for playing the sample

#### `public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`timer`](#structdac__dds__params__t_1a89022cb76b798a4f4f90c28248e8d7a0) 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) used for periodic DAC events

#### `public uint32_t `[`timer_hz`](#structdac__dds__params__t_1a8793c98f7c6776c07c6a3840a90b0fec) 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) frequency, must be at least 2x sample rate.

