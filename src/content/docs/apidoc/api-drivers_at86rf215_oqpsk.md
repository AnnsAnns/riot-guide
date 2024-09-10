---
title: api-drivers_at86rf215_oqpsk.md
description: api-drivers_at86rf215_oqpsk.md
---
# group `drivers_at86rf215_oqpsk` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`at86rf215_configure_legacy_OQPSK`](#group__drivers__at86rf215__oqpsk_1gacb657944d29cd1f588ff693b39c5685c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,bool high_rate)`            | Configure the radio to make use of O-QPSK modulation.
`public int `[`at86rf215_configure_OQPSK`](#group__drivers__at86rf215__oqpsk_1ga5d8a73e7ef71a262ec1b6ad9abdd2dfe)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t chips,uint8_t rate)`            | Configure the radio to make use of O-QPSK modulation.
`public uint8_t `[`at86rf215_OQPSK_get_chips`](#group__drivers__at86rf215__oqpsk_1ga1eaccdd1b3fb2cb17de24c72367cad1c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the current O-QPSK chip rate.
`public int `[`at86rf215_OQPSK_set_chips`](#group__drivers__at86rf215__oqpsk_1gadf2a23b24457bb63a178525294c9b7c3)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t chips)`            | Set the current O-QPSK chip rate.
`public uint8_t `[`at86rf215_OQPSK_get_mode`](#group__drivers__at86rf215__oqpsk_1ga99e3f0493af62f55419ef44274feeade)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the current O-QPSK rate mode.
`public int `[`at86rf215_OQPSK_set_mode`](#group__drivers__at86rf215__oqpsk_1ga3efd8c259d355bfabd96d783cb8fc5a9)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mode)`            | Set the current O-QPSK rate mode.
`public uint8_t `[`at86rf215_OQPSK_get_mode_legacy`](#group__drivers__at86rf215__oqpsk_1ga1c864baf4d253f88078374f8f8726fec)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the current legacy O-QPSK mode.
`public int `[`at86rf215_OQPSK_set_mode_legacy`](#group__drivers__at86rf215__oqpsk_1gabb206792c7332d221ce40af1c3888f43)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,bool high_rate)`            | Set the current legacy O-QPSK rate mode.
`public inline static bool `[`at86rf215_OQPSK_is_legacy`](#group__drivers__at86rf215__oqpsk_1gaa460ee38069e59b68a17d7af19cf0158)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Test if O-QPSK PHY operates in legacy mode.

## Members

#### `public int `[`at86rf215_configure_legacy_OQPSK`](#group__drivers__at86rf215__oqpsk_1gacb657944d29cd1f588ff693b39c5685c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,bool high_rate)` 

Configure the radio to make use of O-QPSK modulation.

The rate mode may be

* 0 for compatibility with first-gen 802.15.4 devices (250 kbit/s)

* 1 for compatibility with the proprietary high-data rate modes of at86rf2xx

#### Parameters
* `dev` device to configure 

* `high_rate` use proprietary high data rate compatible with at86rf2xx

#### Returns
0 on success, error otherwise

#### `public int `[`at86rf215_configure_OQPSK`](#group__drivers__at86rf215__oqpsk_1ga5d8a73e7ef71a262ec1b6ad9abdd2dfe)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t chips,uint8_t rate)` 

Configure the radio to make use of O-QPSK modulation.

The chip rate is the number of bits per second (chips per second) used in the spreading signal. The rate mode may be

* [AT86RF215_OQPSK_MODE_LEGACY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#at86rf215__internal_8h_1ab2d283373b5646ea55f6f75a1df0a06f) for compatibility with first-gen 802.15.4 devices (250 kbit/s)

* [AT86RF215_OQPSK_MODE_LEGACY_HDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#at86rf215__internal_8h_1a02a9eea0eb46062a4e8d014c2663393a) for compatibility with the proprietary high-data rate mode of the at86rf233 (1000 kbit/s, 2.4 GHz) and at86rf212b (500 kbit/s, sub-GHz)

* [AT86RF215_MR_OQPSK_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#at86rf215__internal_8h_1ac3e1bfed20c8600b5b47907c916dd1b6) for the rate modes specified in 802.15.4g-2012

#### Parameters
* `dev` device to configure 

* `chips` chip rate, `BB_FCHIP100` … `BB_FCHIP2000`

* `rate` rate mode, may be [AT86RF215_OQPSK_MODE_LEGACY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#at86rf215__internal_8h_1ab2d283373b5646ea55f6f75a1df0a06f) or [AT86RF215_MR_OQPSK_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#at86rf215__internal_8h_1ac3e1bfed20c8600b5b47907c916dd1b6)

#### Returns
0 on success, error otherwise

#### `public uint8_t `[`at86rf215_OQPSK_get_chips`](#group__drivers__at86rf215__oqpsk_1ga1eaccdd1b3fb2cb17de24c72367cad1c)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the current O-QPSK chip rate.

#### Parameters
* `dev` device to read from

#### Returns
the current chip rate

#### `public int `[`at86rf215_OQPSK_set_chips`](#group__drivers__at86rf215__oqpsk_1gadf2a23b24457bb63a178525294c9b7c3)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t chips)` 

Set the current O-QPSK chip rate.

#### Parameters
* `dev` device to configure 

* `chips` chip rate in chip/s

#### Returns
0 on success, error otherwise

#### `public uint8_t `[`at86rf215_OQPSK_get_mode`](#group__drivers__at86rf215__oqpsk_1ga99e3f0493af62f55419ef44274feeade)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the current O-QPSK rate mode.

#### Parameters
* `dev` device to read from

#### Returns
the current rate mode

#### `public int `[`at86rf215_OQPSK_set_mode`](#group__drivers__at86rf215__oqpsk_1ga3efd8c259d355bfabd96d783cb8fc5a9)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mode)` 

Set the current O-QPSK rate mode.

#### Parameters
* `dev` device to configure 

* `mode` rate mode

#### Returns
0 on success, error otherwise

#### `public uint8_t `[`at86rf215_OQPSK_get_mode_legacy`](#group__drivers__at86rf215__oqpsk_1ga1c864baf4d253f88078374f8f8726fec)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the current legacy O-QPSK mode.

#### Parameters
* `dev` device to read from

#### Returns
0 for IEEE 802.15.4 mode, 1 for high data rate

#### `public int `[`at86rf215_OQPSK_set_mode_legacy`](#group__drivers__at86rf215__oqpsk_1gabb206792c7332d221ce40af1c3888f43)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,bool high_rate)` 

Set the current legacy O-QPSK rate mode.

#### Parameters
* `dev` device to configure 

* `high_rate` set to use proprietary high data rate

#### Returns
0 on success, error otherwise

#### `public inline static bool `[`at86rf215_OQPSK_is_legacy`](#group__drivers__at86rf215__oqpsk_1gaa460ee38069e59b68a17d7af19cf0158)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Test if O-QPSK PHY operates in legacy mode.

#### Parameters
* `dev` device to test

#### Returns
true if device operates in legacy mode

