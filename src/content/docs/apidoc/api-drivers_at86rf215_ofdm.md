---
title: api-drivers_at86rf215_ofdm.md
description: api-drivers_at86rf215_ofdm.md
---
# group `drivers_at86rf215_ofdm` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`at86rf215_configure_OFDM`](#group__drivers__at86rf215__ofdm_1gad1c98934ac4b39a3c5aad33d6ea1ca38)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t option,uint8_t mcs)`            | Configure the radio to make use of OFDM modulation.
`public int `[`at86rf215_OFDM_set_scheme`](#group__drivers__at86rf215__ofdm_1gab319ac8963c5cce7363f543da75347b9)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mcs)`            | Set the current modulation and coding scheme (MCS)
`public uint8_t `[`at86rf215_OFDM_get_scheme`](#group__drivers__at86rf215__ofdm_1ga86b888e19ca5e0c64f202b7aff9cd3dc)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the current modulation and coding scheme (MCS)
`public int `[`at86rf215_OFDM_set_option`](#group__drivers__at86rf215__ofdm_1gaa0ddef6f1c5036a4e00cff1d8d81df4b)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t option)`            | Set the current OFDM option.
`public uint8_t `[`at86rf215_OFDM_get_option`](#group__drivers__at86rf215__ofdm_1ga80cc1f4d2a906632591c7e05fe7fd175)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the current OFDM option.

## Members

#### `public int `[`at86rf215_configure_OFDM`](#group__drivers__at86rf215__ofdm_1gad1c98934ac4b39a3c5aad33d6ea1ca38)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t option,uint8_t mcs)` 

Configure the radio to make use of OFDM modulation.

There are 4 OFDM options, each with a different number of active tones. The device supports BPSK, QPSK and 16-QAM modulation and coding schemes (MCS)

#### Parameters
* `dev` device to configure 

* `option` modulation option, each increment halves the data rate 

* `mcs` modulation scheme, `BB_MCS_BPSK_REP4` … `BB_MCS_16QAM_3BY4`

#### Returns
0 on success, error otherwise

#### `public int `[`at86rf215_OFDM_set_scheme`](#group__drivers__at86rf215__ofdm_1gab319ac8963c5cce7363f543da75347b9)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mcs)` 

Set the current modulation and coding scheme (MCS)

#### Parameters
* `dev` device to configure 

* `mcs` modulation and coding scheme

#### Returns
0 on success, error otherwise

#### `public uint8_t `[`at86rf215_OFDM_get_scheme`](#group__drivers__at86rf215__ofdm_1ga86b888e19ca5e0c64f202b7aff9cd3dc)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the current modulation and coding scheme (MCS)

#### Parameters
* `dev` device to read from

#### Returns
the current modulation & coding scheme

#### `public int `[`at86rf215_OFDM_set_option`](#group__drivers__at86rf215__ofdm_1gaa0ddef6f1c5036a4e00cff1d8d81df4b)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t option)` 

Set the current OFDM option.

#### Parameters
* `dev` device to configure 

* `option` OFDM option

#### Returns
0 on success, error otherwise

#### `public uint8_t `[`at86rf215_OFDM_get_option`](#group__drivers__at86rf215__ofdm_1ga80cc1f4d2a906632591c7e05fe7fd175)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the current OFDM option.

#### Parameters
* `dev` device to read from

#### Returns
the current OFDM option

