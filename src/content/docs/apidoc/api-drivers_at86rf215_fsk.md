---
title: api-drivers_at86rf215_fsk.md
description: api-drivers_at86rf215_fsk.md
---
# group `drivers_at86rf215_fsk` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`at86rf215_configure_FSK`](#group__drivers__at86rf215__fsk_1gaf62d26fa75806841727b10fde8ec3b12)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t srate,uint8_t mod_idx,uint8_t mod_order,uint8_t fec)`            | Configure the radio to make use of FSK modulation.
`public int `[`at86rf215_FSK_set_srate`](#group__drivers__at86rf215__fsk_1gaffc66b045b98b65fbc1ab901b40dfd33)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t srate)`            | Configure the symbol rate of the FSK modulation.
`public uint8_t `[`at86rf215_FSK_get_srate`](#group__drivers__at86rf215__fsk_1ga85ac406912a9ccd7ff99c8fc5e876213)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the symbol rate of the FSK modulation.
`public int `[`at86rf215_FSK_set_mod_idx`](#group__drivers__at86rf215__fsk_1ga8a090e1ee5df090c92f97caf1059c350)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mod_idx)`            | Configure the modulation index of the FSK modulation The modulation index is a fractional value, it is represented as fractions of 64.
`public uint8_t `[`at86rf215_FSK_get_mod_idx`](#group__drivers__at86rf215__fsk_1gaa863efa4ca783cbb42812e79f563085b)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the current modulation index of the FSK modulation The modulation index is a fractional value, it is represented as fractions of 64.
`public int `[`at86rf215_FSK_set_fec`](#group__drivers__at86rf215__fsk_1gab73fa2d07498250c908ca696bd6d888a)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mode)`            | Configure the Forward Error Correction (coding) scheme for FSK modulation.
`public uint8_t `[`at86rf215_FSK_get_fec`](#group__drivers__at86rf215__fsk_1gaa268fe5c562110dd7a6d33e906b9b064)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the Forward Error Correction (coding) scheme for FSK modulation.
`public int `[`at86rf215_FSK_set_channel_spacing`](#group__drivers__at86rf215__fsk_1ga0c55fe05735ab86ebfda6344c527ff8d)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t ch_space)`            | Configure the channel spacing for the FSK modulation.
`public uint16_t `[`at86rf215_get_channel_spacing`](#group__drivers__at86rf215__fsk_1ga42c5d6d01023dd964b80e11b4a082dbf)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the configured channel spacing.
`public int `[`at86rf215_FSK_set_mod_order`](#group__drivers__at86rf215__fsk_1gadbea46c731785a3f1b293cf00a33401e)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mod_order)`            | Configure the FSK modulation order.
`public uint8_t `[`at86rf215_FSK_get_mod_order`](#group__drivers__at86rf215__fsk_1ga243124375c4e8523e457418e676cf766)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | Get the current FSK modulation order.
`public void `[`at86rf215_FSK_prepare_rx`](#group__drivers__at86rf215__fsk_1ga801a9655230765c56ad8becc0f13132b)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | The FSK premable length needs to be switched between RX and TX This function takes care of putting FSK into RX mode.
`public void `[`at86rf215_FSK_prepare_tx`](#group__drivers__at86rf215__fsk_1ga433c58498de290ee5c2fa9a7476967df)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)`            | The FSK premable length needs to be switched between RX and TX This function takes care of putting FSK into TX mode.

## Members

#### `public int `[`at86rf215_configure_FSK`](#group__drivers__at86rf215__fsk_1gaf62d26fa75806841727b10fde8ec3b12)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t srate,uint8_t mod_idx,uint8_t mod_order,uint8_t fec)` 

Configure the radio to make use of FSK modulation.

#### Parameters
* `dev` device to configure 

* `srate` symbol rate, possible values: FSK_SRATE_50K … FSK_SRATE_400K 

* `mod_idx` modulation index, multiplied by 64 (½ -> 32; 1 -> 64) 

* `mod_order` modulation order, may be FSK_MORD_2SFK or FSK_MORD_4SFK 

* `fec` forward error correction, may be [IEEE802154_FEC_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4cae86daaa21c9990af1c4650c97f2a90ed), [IEEE802154_FEC_NRNSC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4cad2fe10e96836a4042cb7626ed5c19055) or [IEEE802154_FEC_RSC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4ca0f88b4742bd897955e0d36ba0c52327f)

#### Returns
0 on success, error otherwise

#### `public int `[`at86rf215_FSK_set_srate`](#group__drivers__at86rf215__fsk_1gaffc66b045b98b65fbc1ab901b40dfd33)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t srate)` 

Configure the symbol rate of the FSK modulation.

#### Parameters
* `dev` device to configure 

* `srate` symbol rate, possible values: FSK_SRATE_50K … FSK_SRATE_400K

#### `public uint8_t `[`at86rf215_FSK_get_srate`](#group__drivers__at86rf215__fsk_1ga85ac406912a9ccd7ff99c8fc5e876213)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the symbol rate of the FSK modulation.

#### Parameters
* `dev` device to read from

#### Returns
symbol rate, possible values: FSK_SRATE_50K … FSK_SRATE_400K

#### `public int `[`at86rf215_FSK_set_mod_idx`](#group__drivers__at86rf215__fsk_1ga8a090e1ee5df090c92f97caf1059c350)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mod_idx)` 

Configure the modulation index of the FSK modulation The modulation index is a fractional value, it is represented as fractions of 64.

Not all possible fractional values are configurable by the hardware. If the fractional can not be mapped to the hardware, the nearest matching one is chosen.

#### Parameters
* `dev` device to configure 

* `mod_idx` modulation index, multiplied by 64 (½ -> 32; 1 -> 64)

#### Returns
0 on success, failure otherwise

#### `public uint8_t `[`at86rf215_FSK_get_mod_idx`](#group__drivers__at86rf215__fsk_1gaa863efa4ca783cbb42812e79f563085b)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the current modulation index of the FSK modulation The modulation index is a fractional value, it is represented as fractions of 64.

#### Parameters
* `dev` device to read from

#### Returns
the current modulation index, multiplied by 64

#### `public int `[`at86rf215_FSK_set_fec`](#group__drivers__at86rf215__fsk_1gab73fa2d07498250c908ca696bd6d888a)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mode)` 

Configure the Forward Error Correction (coding) scheme for FSK modulation.

Supported values are:

* no error correction

* non-recursive and non-systematic code (NRNSC)

* recursive and systematic code (RSC)

#### Parameters
* `dev` device to configure 

* `mode` forward error correction, may be [IEEE802154_FEC_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4cae86daaa21c9990af1c4650c97f2a90ed), [IEEE802154_FEC_NRNSC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4cad2fe10e96836a4042cb7626ed5c19055) or [IEEE802154_FEC_RSC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4ca0f88b4742bd897955e0d36ba0c52327f)

#### Returns
0 on success, failure otherwise

#### `public uint8_t `[`at86rf215_FSK_get_fec`](#group__drivers__at86rf215__fsk_1gaa268fe5c562110dd7a6d33e906b9b064)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the Forward Error Correction (coding) scheme for FSK modulation.

Supported values are:

* no error correction

* non-recursive and non-systematic code (NRNSC)

* recursive and systematic code (RSC)

#### Parameters
* `dev` device to read from

#### Returns
current coding scheme, may be [IEEE802154_FEC_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4cae86daaa21c9990af1c4650c97f2a90ed), [IEEE802154_FEC_NRNSC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4cad2fe10e96836a4042cb7626ed5c19055) or [IEEE802154_FEC_RSC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gga9f7a7696ae1c6993af6334642d77ce4ca0f88b4742bd897955e0d36ba0c52327f)

#### `public int `[`at86rf215_FSK_set_channel_spacing`](#group__drivers__at86rf215__fsk_1ga0c55fe05735ab86ebfda6344c527ff8d)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t ch_space)` 

Configure the channel spacing for the FSK modulation.

#### Parameters
* `dev` device to configure 

* `ch_space` channel spacing, possible values: FSK_CHANNEL_SPACING_200K … _400K

#### Returns
0 on success, failure otherwise

#### `public uint16_t `[`at86rf215_get_channel_spacing`](#group__drivers__at86rf215__fsk_1ga42c5d6d01023dd964b80e11b4a082dbf)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the configured channel spacing.

#### Parameters
* `dev` device to read from

#### Returns
channel spacing in kHz

#### `public int `[`at86rf215_FSK_set_mod_order`](#group__drivers__at86rf215__fsk_1gadbea46c731785a3f1b293cf00a33401e)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev,uint8_t mod_order)` 

Configure the FSK modulation order.

You can choose between 2-level and 4-level FSK

#### Parameters
* `dev` device to configure 

* `mod_order` modulation order, may be FSK_MORD_2SFK or FSK_MORD_4SFK

#### Returns
0 on success, failure otherwise

#### `public uint8_t `[`at86rf215_FSK_get_mod_order`](#group__drivers__at86rf215__fsk_1ga243124375c4e8523e457418e676cf766)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

Get the current FSK modulation order.

You can choose between 2-level and 4-level FSK

#### Parameters
* `dev` device to read from

#### Returns
modulation order, may be FSK_MORD_2SFK or FSK_MORD_4SFK

#### `public void `[`at86rf215_FSK_prepare_rx`](#group__drivers__at86rf215__fsk_1ga801a9655230765c56ad8becc0f13132b)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

The FSK premable length needs to be switched between RX and TX This function takes care of putting FSK into RX mode.

#### Parameters
* `dev` device that is entering RX mode

#### `public void `[`at86rf215_FSK_prepare_tx`](#group__drivers__at86rf215__fsk_1ga433c58498de290ee5c2fa9a7476967df)`(`[`at86rf215_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf215_1gac7c10ffc349068578f09e599785f82f4)` * dev)` 

The FSK premable length needs to be switched between RX and TX This function takes care of putting FSK into TX mode.

#### Parameters
* `dev` device that is entering TX mode

