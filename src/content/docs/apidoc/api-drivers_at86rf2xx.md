---
title: api-drivers_at86rf2xx.md
description: api-drivers_at86rf2xx.md
---
# group `drivers_at86rf2xx` 

This module contains drivers for radio devices in Atmel's AT86RF2xx series.

The driver is aimed to work with all devices of this series.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`AT86RF2XX_MAX_PKT_LENGTH`](#group__drivers__at86rf2xx_1gab31d7279cb713602b03941cbb6b87262)            | Maximum possible packet size in byte.
`define `[`AT86RF2XX_DEFAULT_TXPOWER`](#group__drivers__at86rf2xx_1ga57056cba345e04f72cd800919f2cb866)            | Default TX power (0dBm)
`define `[`RSSI_BASE_VAL`](#group__drivers__at86rf2xx_1ga272a6f3cfa720c483c3cbb6d2bf80417)            | Base (minimal) RSSI value in dBm.
`define `[`MIN_RX_SENSITIVITY`](#group__drivers__at86rf2xx_1gae2aa16478225369ca09cefd8a1a53bdc)            | Min Receiver sensitivity value in dBm.
`define `[`AT86RF2XX_IS_PERIPH`](#group__drivers__at86rf2xx_1ga0331b9576d69bc87c6a1cab9cd58a183)            | Whether there is a periph version of the radio.
`define `[`AT86RF2XX_HAVE_ED_REGISTER`](#group__drivers__at86rf2xx_1ga489698818a5d62bb396b4dda38132cf0)            | ED Register.
`define `[`AT86RF2XX_HAVE_SUBGHZ`](#group__drivers__at86rf2xx_1ga8b06880022fed8476803de459d7ab44e)            | Support for SubGHz bands.
`define `[`AT86RF2XX_HAVE_RETRIES`](#group__drivers__at86rf2xx_1ga382fb6eb59fed9d3a3ec43c3b4f8b5b9)            | Frame retry counter reporting.
`define `[`AT86RF2XX_HAVE_RETRIES_REG`](#group__drivers__at86rf2xx_1ga84a9ffb333aeb18707a343ac483c996a)            | Frame retry counter register.
`define `[`AT86RF2XX_HAVE_TX_START_IRQ`](#group__drivers__at86rf2xx_1gaaa3cc1bb3da0f490f3310b008da06355)            | TX Start IRQ.
`define `[`AT86RF2XX_RANDOM_NUMBER_GENERATOR`](#group__drivers__at86rf2xx_1gab7ba4d59f7d6667d24f13d27737c86cb)            | Random Number Generator.
`define `[`AT86RF2XX_SMART_IDLE_LISTENING`](#group__drivers__at86rf2xx_1gacefec93468e6ce7ac32fc627e4204075)            | Smart idle listening feature.
`define `[`AT86RF2XX_PHY_STATE_RX`](#group__drivers__at86rf2xx_1gaa9555c6a80970657a4d53441313139e1)            | Internal radio state equivalent to RX_ON.
`define `[`AT86RF2XX_PHY_STATE_RX_BUSY`](#group__drivers__at86rf2xx_1ga401b8d583beb31152581d75acbe12e8a)            | Internal radio state equivalent to RX_BUSY.
`define `[`AT86RF2XX_PHY_STATE_TX`](#group__drivers__at86rf2xx_1ga4eb4865bab3f86aab710a877102300a9)            | Internal radio state equivalent to TX_ON.
`define `[`AT86RF2XX_PHY_STATE_TX_BUSY`](#group__drivers__at86rf2xx_1gaf306cef8fd1294aa873af25f2017eb24)            | Internal radio state equivalent to TX_BUSY.
`public void `[`at86rf2xx_setup`](#group__drivers__at86rf2xx_1ga83dce40c4820812ba86cf5934d2bb1a8)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const `[`at86rf2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf2xx_1gaa160a09bf961b72bb00c8f4257a6a792)` * params,uint8_t index)`            | Setup an AT86RF2xx based device state.
`public void `[`at86rf2xx_reset`](#group__drivers__at86rf2xx_1ga010d71c25fe8f7b56d8eb44ebe1c309f)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Trigger a hardware reset and configure radio with default values.
`public void `[`at86rf2xx_set_addr_short`](#group__drivers__at86rf2xx_1gad377146eca0cbccc8a3f811602888b61)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * addr)`            | Set the short address of the given device.
`public void `[`at86rf2xx_set_addr_long`](#group__drivers__at86rf2xx_1ga682f89b0a5c33de311e58dcfbab9554d)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)`            | Set the long address of the given device.
`public uint8_t `[`at86rf2xx_get_phy_mode`](#group__drivers__at86rf2xx_1ga8113fd7420a1e72296bacc284edcacbf)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Get the PHY mode of the given device.
`public uint8_t `[`at86rf2xx_get_rate`](#group__drivers__at86rf2xx_1ga7099b1f41506f92fb8c044ec866325e7)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Get the current O-QPSK rate mode of the PHY.
`public int `[`at86rf2xx_set_rate`](#group__drivers__at86rf2xx_1ga0035d11b9021ce0e062c65af8f2258b7)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t rate)`            | Set the current O-QPSK rate mode of the PHY rate modes > 0 are proprietary.
`public void `[`at86rf2xx_set_pan`](#group__drivers__at86rf2xx_1ga19d681c2df589036d92f296b3ab37854)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint16_t pan)`            | Set the PAN ID of the given device.
`public void `[`at86rf2xx_set_txpower`](#group__drivers__at86rf2xx_1gad83f9b0b76c81fa8b9df064793af4926)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int16_t txpower,uint8_t channel)`            | Set the transmission power of the given device [in dBm].
`public int8_t `[`at86rf2xx_get_rxsensitivity`](#group__drivers__at86rf2xx_1ga8dd4189498e935e15242d218a5a15476)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Get the configured receiver sensitivity of the given device [in dBm].
`public void `[`at86rf2xx_set_rxsensitivity`](#group__drivers__at86rf2xx_1gaf8853cea295d6783e43c37393de13302)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int8_t rxsens)`            | Set the receiver sensitivity of the given device [in dBm].
`public uint8_t `[`at86rf2xx_get_max_retries`](#group__drivers__at86rf2xx_1gad0d8c9c6c7a302f32514339a9db9f393)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Get the maximum number of retransmissions.
`public void `[`at86rf2xx_set_max_retries`](#group__drivers__at86rf2xx_1gaaa45e2794176fea82e716be795687ad9)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t max)`            | Set the maximum number of retransmissions.
`public uint8_t `[`at86rf2xx_get_csma_max_retries`](#group__drivers__at86rf2xx_1ga8df3734a923593cc7c8b8811516131db)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Get the maximum number of channel access attempts per frame (CSMA)
`public void `[`at86rf2xx_set_csma_max_retries`](#group__drivers__at86rf2xx_1ga6b53c9d3e9d5a4cef02e145bc32d2c31)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int8_t retries)`            | Set the maximum number of channel access attempts per frame (CSMA)
`public void `[`at86rf2xx_set_csma_backoff_exp`](#group__drivers__at86rf2xx_1gab7a7981fd054415d33615df5ba0a32b0)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t min,uint8_t max)`            | Set the min and max backoff exponent for CSMA/CA.
`public void `[`at86rf2xx_set_csma_seed`](#group__drivers__at86rf2xx_1ga7477dd80381b65b93cdfce2301333863)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const uint8_t entropy)`            | Set seed for CSMA random backoff.
`public int8_t `[`at86rf2xx_get_cca_threshold`](#group__drivers__at86rf2xx_1ga0697b1e2bb065cb0f3f08dedf430516d)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Get the CCA threshold value.
`public void `[`at86rf2xx_set_cca_threshold`](#group__drivers__at86rf2xx_1ga410d3a1ee04a65cc9fde12d81699a65b)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int8_t value)`            | Set the CCA threshold value.
`public int8_t `[`at86rf2xx_get_ed_level`](#group__drivers__at86rf2xx_1gafb42a5daa4091c925a6cef7c8e8a300f)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Get the latest ED level measurement.
`public void `[`at86rf2xx_set_option`](#group__drivers__at86rf2xx_1gacb0a0cbc4ae0632b605e5520d165dcd6)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint16_t option,bool state)`            | Enable or disable driver specific options.
`public uint8_t `[`at86rf2xx_set_state`](#group__drivers__at86rf2xx_1ga8329661c60d56b4552451c481efdb88c)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t state)`            | Set the state of the given device (trigger a state change)
`public void `[`at86rf2xx_tx_prepare`](#group__drivers__at86rf2xx_1ga17c47a113c11512188bc1a43d71c5e5c)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Prepare for sending of data.
`public size_t `[`at86rf2xx_tx_load`](#group__drivers__at86rf2xx_1ga3c2ca922ff8f35ce4a0b31d8c1cee8e2)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const uint8_t * data,size_t len,size_t offset)`            | Load chunks of data into the transmit buffer of the given device.
`public void `[`at86rf2xx_tx_exec`](#group__drivers__at86rf2xx_1ga4340b9a347122377f108f1c22ed13fb9)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Trigger sending of data previously loaded into transmit buffer.
`public bool `[`at86rf2xx_cca`](#group__drivers__at86rf2xx_1ga364e97177b18080766779340271a6b18)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Perform one manual channel clear assessment (CCA)
`public void `[`at86rf2xx_enable_smart_idle`](#group__drivers__at86rf2xx_1gaa3eb8ebd1c99e8468277ef430a4064df)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Enable the smart receive technology (SRT)
`public void `[`at86rf2xx_disable_smart_idle`](#group__drivers__at86rf2xx_1ga13d4bad219bb8f7ac4238fe5428afe82)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)`            | Disable the smart receive technology (SRT)
`struct `[`at86rf2xx_params`](#structat86rf2xx__params) | struct holding all params needed for device initialization
`struct `[`at86rf2xx_t`](#structat86rf2xx__t) | Device descriptor for AT86RF2XX radio devices.

## Members

#### `define `[`AT86RF2XX_MAX_PKT_LENGTH`](#group__drivers__at86rf2xx_1gab31d7279cb713602b03941cbb6b87262) 

Maximum possible packet size in byte.

#### `define `[`AT86RF2XX_DEFAULT_TXPOWER`](#group__drivers__at86rf2xx_1ga57056cba345e04f72cd800919f2cb866) 

Default TX power (0dBm)

#### `define `[`RSSI_BASE_VAL`](#group__drivers__at86rf2xx_1ga272a6f3cfa720c483c3cbb6d2bf80417) 

Base (minimal) RSSI value in dBm.

#### `define `[`MIN_RX_SENSITIVITY`](#group__drivers__at86rf2xx_1gae2aa16478225369ca09cefd8a1a53bdc) 

Min Receiver sensitivity value in dBm.

#### `define `[`AT86RF2XX_IS_PERIPH`](#group__drivers__at86rf2xx_1ga0331b9576d69bc87c6a1cab9cd58a183) 

Whether there is a periph version of the radio.

#### `define `[`AT86RF2XX_HAVE_ED_REGISTER`](#group__drivers__at86rf2xx_1ga489698818a5d62bb396b4dda38132cf0) 

ED Register.

#### `define `[`AT86RF2XX_HAVE_SUBGHZ`](#group__drivers__at86rf2xx_1ga8b06880022fed8476803de459d7ab44e) 

Support for SubGHz bands.

#### `define `[`AT86RF2XX_HAVE_RETRIES`](#group__drivers__at86rf2xx_1ga382fb6eb59fed9d3a3ec43c3b4f8b5b9) 

Frame retry counter reporting.

The AT86RF2XX_HAVE_RETRIES flag enables support for NETOPT_TX_RETRIES NEEDED operation.

#### `define `[`AT86RF2XX_HAVE_RETRIES_REG`](#group__drivers__at86rf2xx_1ga84a9ffb333aeb18707a343ac483c996a) 

Frame retry counter register.

Some radios include the XAH_CTRL_2 register which contains the frame retry counter. Only the at86rf232 and the at86rf233 support this register.

#### `define `[`AT86RF2XX_HAVE_TX_START_IRQ`](#group__drivers__at86rf2xx_1gaaa3cc1bb3da0f490f3310b008da06355) 

TX Start IRQ.

#### `define `[`AT86RF2XX_RANDOM_NUMBER_GENERATOR`](#group__drivers__at86rf2xx_1gab7ba4d59f7d6667d24f13d27737c86cb) 

Random Number Generator.

Most AT86RF radios have the option to use the highest bits of the RSSI register as a source of randomness. See Section 11.2 of the at86rf233 reference manual. (RND_VALUE)

#### `define `[`AT86RF2XX_SMART_IDLE_LISTENING`](#group__drivers__at86rf2xx_1gacefec93468e6ce7ac32fc627e4204075) 

Smart idle listening feature.

This feature optimizes radio operation in the listening mode, reducing current consumption by ~50%. It is supported by only at86rf233. The reference manual recommends to disable this feature for RSSI measurements or random number generation (Section 8.4 and Section 11.2).

#### `define `[`AT86RF2XX_PHY_STATE_RX`](#group__drivers__at86rf2xx_1gaa9555c6a80970657a4d53441313139e1) 

Internal radio state equivalent to RX_ON.

#### `define `[`AT86RF2XX_PHY_STATE_RX_BUSY`](#group__drivers__at86rf2xx_1ga401b8d583beb31152581d75acbe12e8a) 

Internal radio state equivalent to RX_BUSY.

#### `define `[`AT86RF2XX_PHY_STATE_TX`](#group__drivers__at86rf2xx_1ga4eb4865bab3f86aab710a877102300a9) 

Internal radio state equivalent to TX_ON.

#### `define `[`AT86RF2XX_PHY_STATE_TX_BUSY`](#group__drivers__at86rf2xx_1gaf306cef8fd1294aa873af25f2017eb24) 

Internal radio state equivalent to TX_BUSY.

#### `public void `[`at86rf2xx_setup`](#group__drivers__at86rf2xx_1ga83dce40c4820812ba86cf5934d2bb1a8)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const `[`at86rf2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf2xx_1gaa160a09bf961b72bb00c8f4257a6a792)` * params,uint8_t index)` 

Setup an AT86RF2xx based device state.

#### Parameters
* `dev` device descriptor 

* `params` parameters for device initialization 

* `index` index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

#### `public void `[`at86rf2xx_reset`](#group__drivers__at86rf2xx_1ga010d71c25fe8f7b56d8eb44ebe1c309f)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Trigger a hardware reset and configure radio with default values.

#### Parameters
* `dev` device to reset

#### `public void `[`at86rf2xx_set_addr_short`](#group__drivers__at86rf2xx_1gad377146eca0cbccc8a3f811602888b61)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const `[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * addr)` 

Set the short address of the given device.

#### Parameters
* `dev` device to write to 

* `addr` (2-byte) short address to set

#### `public void `[`at86rf2xx_set_addr_long`](#group__drivers__at86rf2xx_1ga682f89b0a5c33de311e58dcfbab9554d)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const `[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)` 

Set the long address of the given device.

#### Parameters
* `dev` device to write to 

* `addr` (8-byte) long address to set

#### `public uint8_t `[`at86rf2xx_get_phy_mode`](#group__drivers__at86rf2xx_1ga8113fd7420a1e72296bacc284edcacbf)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Get the PHY mode of the given device.

#### Parameters
* `dev` device to read from 

#### Returns
the currently set phy mode

#### `public uint8_t `[`at86rf2xx_get_rate`](#group__drivers__at86rf2xx_1ga7099b1f41506f92fb8c044ec866325e7)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Get the current O-QPSK rate mode of the PHY.

#### Parameters
* `dev` device to read from

#### Returns
the currently set rate mode

#### `public int `[`at86rf2xx_set_rate`](#group__drivers__at86rf2xx_1ga0035d11b9021ce0e062c65af8f2258b7)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t rate)` 

Set the current O-QPSK rate mode of the PHY rate modes > 0 are proprietary.

rate 0: 250 kbit/s (IEEE mode) rate 1: 500 kbit/s rate 2: 1000 kbit/s (compatible with AT86RF215) rate 3: 2000 kbit/s

#### Parameters
* `dev` device to write to 

* `rate` the selected data rate mode (0-3)

#### Returns
0 on success, otherwise error value

#### `public void `[`at86rf2xx_set_pan`](#group__drivers__at86rf2xx_1ga19d681c2df589036d92f296b3ab37854)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint16_t pan)` 

Set the PAN ID of the given device.

#### Parameters
* `dev` device to write to 

* `pan` PAN ID to set

#### `public void `[`at86rf2xx_set_txpower`](#group__drivers__at86rf2xx_1gad83f9b0b76c81fa8b9df064793af4926)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int16_t txpower,uint8_t channel)` 

Set the transmission power of the given device [in dBm].

If the device does not support the exact dBm value given, it will set a value as close as possible to the given value. If the given value is larger or lower then the maximal or minimal possible value, the min or max value is set, respectively.

#### Parameters
* `dev` device to write to 

* `txpower` transmission power in dBm 

* `channel` the current channel

#### `public int8_t `[`at86rf2xx_get_rxsensitivity`](#group__drivers__at86rf2xx_1ga8dd4189498e935e15242d218a5a15476)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Get the configured receiver sensitivity of the given device [in dBm].

#### Parameters
* `dev` device to read from

#### Returns
configured receiver sensitivity in dBm

#### `public void `[`at86rf2xx_set_rxsensitivity`](#group__drivers__at86rf2xx_1gaf8853cea295d6783e43c37393de13302)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int8_t rxsens)` 

Set the receiver sensitivity of the given device [in dBm].

If the device does not support the exact dBm value given, it will set a value as close as possible to the given value. If the given value is larger or lower then the maximal or minimal possible value, the min or max value is set, respectively.

#### Parameters
* `dev` device to write to 

* `rxsens` rx sensitivity in dBm

#### `public uint8_t `[`at86rf2xx_get_max_retries`](#group__drivers__at86rf2xx_1gad0d8c9c6c7a302f32514339a9db9f393)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Get the maximum number of retransmissions.

#### Parameters
* `dev` device to read from

#### Returns
configured number of retransmissions

#### `public void `[`at86rf2xx_set_max_retries`](#group__drivers__at86rf2xx_1gaaa45e2794176fea82e716be795687ad9)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t max)` 

Set the maximum number of retransmissions.

This setting specifies the number of attempts to retransmit a frame, when it was not acknowledged by the recipient, before the transaction gets cancelled. The maximum value is 7.

#### Parameters
* `dev` device to write to 

* `max` the maximum number of retransmissions

#### `public uint8_t `[`at86rf2xx_get_csma_max_retries`](#group__drivers__at86rf2xx_1ga8df3734a923593cc7c8b8811516131db)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Get the maximum number of channel access attempts per frame (CSMA)

#### Parameters
* `dev` device to read from

#### Returns
configured number of retries

#### `public void `[`at86rf2xx_set_csma_max_retries`](#group__drivers__at86rf2xx_1ga6b53c9d3e9d5a4cef02e145bc32d2c31)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int8_t retries)` 

Set the maximum number of channel access attempts per frame (CSMA)

This setting specifies the number of attempts to access the channel to transmit a frame. If the channel is busy `retries` times, then frame transmission fails. Valid values: 0 to 5, -1 means CSMA disabled

#### Parameters
* `dev` device to write to 

* `retries` the maximum number of retries

#### `public void `[`at86rf2xx_set_csma_backoff_exp`](#group__drivers__at86rf2xx_1gab7a7981fd054415d33615df5ba0a32b0)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t min,uint8_t max)` 

Set the min and max backoff exponent for CSMA/CA.

* Maximum BE: 0 - 8

* Minimum BE: 0 - [max]

#### Parameters
* `dev` device to write to 

* `min` the minimum BE 

* `max` the maximum BE

#### `public void `[`at86rf2xx_set_csma_seed`](#group__drivers__at86rf2xx_1ga7477dd80381b65b93cdfce2301333863)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const uint8_t entropy)` 

Set seed for CSMA random backoff.

#### Parameters
* `dev` device to write to 

* `entropy` 11 bit of entropy as seed for random backoff

#### `public int8_t `[`at86rf2xx_get_cca_threshold`](#group__drivers__at86rf2xx_1ga0697b1e2bb065cb0f3f08dedf430516d)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Get the CCA threshold value.

#### Parameters
* `dev` device to read value from

#### Returns
the current CCA threshold value

#### `public void `[`at86rf2xx_set_cca_threshold`](#group__drivers__at86rf2xx_1ga410d3a1ee04a65cc9fde12d81699a65b)`(const `[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,int8_t value)` 

Set the CCA threshold value.

#### Parameters
* `dev` device to write to 

* `value` the new CCA threshold value

#### `public int8_t `[`at86rf2xx_get_ed_level`](#group__drivers__at86rf2xx_1gafb42a5daa4091c925a6cef7c8e8a300f)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Get the latest ED level measurement.

#### Parameters
* `dev` device to read value from

#### Returns
the last ED level

#### `public void `[`at86rf2xx_set_option`](#group__drivers__at86rf2xx_1gacb0a0cbc4ae0632b605e5520d165dcd6)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint16_t option,bool state)` 

Enable or disable driver specific options.

#### Parameters
* `dev` device to set/clear option flag for 

* `option` option to enable/disable 

* `state` true for enable, false for disable

#### `public uint8_t `[`at86rf2xx_set_state`](#group__drivers__at86rf2xx_1ga8329661c60d56b4552451c481efdb88c)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,uint8_t state)` 

Set the state of the given device (trigger a state change)

#### Parameters
* `dev` device to change state of 

* `state` the targeted new state

#### Returns
the previous state before the new state was set

#### `public void `[`at86rf2xx_tx_prepare`](#group__drivers__at86rf2xx_1ga17c47a113c11512188bc1a43d71c5e5c)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Prepare for sending of data.

This function puts the given device into the TX state, so no receiving of data is possible after it was called.

#### Parameters
* `dev` device to prepare for sending

#### `public size_t `[`at86rf2xx_tx_load`](#group__drivers__at86rf2xx_1ga3c2ca922ff8f35ce4a0b31d8c1cee8e2)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev,const uint8_t * data,size_t len,size_t offset)` 

Load chunks of data into the transmit buffer of the given device.

#### Parameters
* `dev` device to write data to 

* `data` buffer containing the data to load 

* `len` number of bytes in `buffer`

* `offset` offset used when writing data to internal buffer

#### Returns
offset + number of bytes written

#### `public void `[`at86rf2xx_tx_exec`](#group__drivers__at86rf2xx_1ga4340b9a347122377f108f1c22ed13fb9)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Trigger sending of data previously loaded into transmit buffer.

#### Parameters
* `dev` device to trigger

#### `public bool `[`at86rf2xx_cca`](#group__drivers__at86rf2xx_1ga364e97177b18080766779340271a6b18)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Perform one manual channel clear assessment (CCA)

The CCA mode and threshold level depends on the current transceiver settings.

#### Parameters
* `dev` device to use

#### Returns
true if channel is determined clear 

#### Returns
false if channel is determined busy

#### `public void `[`at86rf2xx_enable_smart_idle`](#group__drivers__at86rf2xx_1gaa3eb8ebd1c99e8468277ef430a4064df)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Enable the smart receive technology (SRT)

The SRT reduces the power consumption during RX listening periods.

#### Parameters
* `dev` device to use

#### `public void `[`at86rf2xx_disable_smart_idle`](#group__drivers__at86rf2xx_1ga13d4bad219bb8f7ac4238fe5428afe82)`(`[`at86rf2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t)` * dev)` 

Disable the smart receive technology (SRT)

#### Parameters
* `dev` device to use

# struct `at86rf2xx_params` 

struct holding all params needed for device initialization

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structat86rf2xx__params_1a37ad7fbe622679f4502b37541170501e) | SPI bus the device is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structat86rf2xx__params_1a8d05c4c0211ebb7ccc0d71c2755080f1) | SPI clock speed to use.
`public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structat86rf2xx__params_1a4b4c187efa1c1e0e57412271b97e5294) | GPIO pin connected to chip select.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structat86rf2xx__params_1a68e20e9381852e21d9fefc46211749fd) | GPIO pin connected to the interrupt pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sleep_pin`](#structat86rf2xx__params_1a65586649530130c53e37be71be59cb7f) | GPIO pin connected to the sleep pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structat86rf2xx__params_1a5397633f23e9bcabf9bfb027fdf23fe1) | GPIO pin connected to the reset pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structat86rf2xx__params_1a37ad7fbe622679f4502b37541170501e) 

SPI bus the device is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structat86rf2xx__params_1a8d05c4c0211ebb7ccc0d71c2755080f1) 

SPI clock speed to use.

#### `public `[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` `[`cs_pin`](#structat86rf2xx__params_1a4b4c187efa1c1e0e57412271b97e5294) 

GPIO pin connected to chip select.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structat86rf2xx__params_1a68e20e9381852e21d9fefc46211749fd) 

GPIO pin connected to the interrupt pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sleep_pin`](#structat86rf2xx__params_1a65586649530130c53e37be71be59cb7f) 

GPIO pin connected to the sleep pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structat86rf2xx__params_1a5397633f23e9bcabf9bfb027fdf23fe1) 

GPIO pin connected to the reset pin.

# struct `at86rf2xx_t` 

```
struct at86rf2xx_t
  : public netdev_ieee802154_t
```  

Device descriptor for AT86RF2XX radio devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structat86rf2xx__t_1a7445c5866633f7d5bbe265c737c4fe7d) | netdev parent struct
`public `[`at86rf2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf2xx_1gaa160a09bf961b72bb00c8f4257a6a792)` `[`params`](#structat86rf2xx__t_1aa8b1fe3a61fd10c822fa389dee1a00f8) | parameters for initialization
`public uint16_t `[`flags`](#structat86rf2xx__t_1aecd9ac9554ead9ec1995905f16466a00) | Device specific flags.
`public uint8_t `[`state`](#structat86rf2xx__t_1aa5c980110602a4c8ddd7e179b23fc157) | current state of the radio
`public uint8_t `[`tx_frame_len`](#structat86rf2xx__t_1a6da5b5681afa111d6334470550bb16bb) | length of the current TX frame
`public uint8_t `[`idle_state`](#structat86rf2xx__t_1a8cade673a3831f74c451b3d0df89346c) | state to return to after sending
`public uint8_t `[`pending_tx`](#structat86rf2xx__t_1a5fb72e21ea1e13d15544300445540673) | keep track of pending TX calls this is required to know when to return to [at86rf2xx_t::idle_state](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t_1a8cade673a3831f74c451b3d0df89346c)
`public int8_t `[`tx_retries`](#structat86rf2xx__t_1a29ec190d62c9a8ecafe100085034e227) | Number of NOACK retransmissions.

## Members

#### `public `[`netdev_ieee802154_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_netdev_ieee802154.md#structnetdev__ieee802154__t)` `[`netdev`](#structat86rf2xx__t_1a7445c5866633f7d5bbe265c737c4fe7d) 

netdev parent struct

#### `public `[`at86rf2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at86rf2xx_1gaa160a09bf961b72bb00c8f4257a6a792)` `[`params`](#structat86rf2xx__t_1aa8b1fe3a61fd10c822fa389dee1a00f8) 

parameters for initialization

#### `public uint16_t `[`flags`](#structat86rf2xx__t_1aecd9ac9554ead9ec1995905f16466a00) 

Device specific flags.

#### `public uint8_t `[`state`](#structat86rf2xx__t_1aa5c980110602a4c8ddd7e179b23fc157) 

current state of the radio

#### `public uint8_t `[`tx_frame_len`](#structat86rf2xx__t_1a6da5b5681afa111d6334470550bb16bb) 

length of the current TX frame

#### `public uint8_t `[`idle_state`](#structat86rf2xx__t_1a8cade673a3831f74c451b3d0df89346c) 

state to return to after sending

#### `public uint8_t `[`pending_tx`](#structat86rf2xx__t_1a5fb72e21ea1e13d15544300445540673) 

keep track of pending TX calls this is required to know when to return to [at86rf2xx_t::idle_state](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at86rf2xx.md#structat86rf2xx__t_1a8cade673a3831f74c451b3d0df89346c)

#### `public int8_t `[`tx_retries`](#structat86rf2xx__t_1a29ec190d62c9a8ecafe100085034e227) 

Number of NOACK retransmissions.

