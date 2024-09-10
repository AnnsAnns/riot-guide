---
title: api-drivers_kw2xrf.md
description: api-drivers_kw2xrf.md
---
# group `drivers_kw2xrf` 

Device driver for the NXP CR20A and KW2xD radios.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`KW2XRF_MAX_PKT_LENGTH`](#group__drivers__kw2xrf_1ga0ba3a98d6567394981ceb57baa1b3b03)            | Maximum packet length.
`define `[`KW2XRF_DEFAULT_TX_POWER`](#group__drivers__kw2xrf_1gac8bc1778d5e265f4b53dcd10dee8cc61)            | Default TX_POWER in dbm used after initialization.
`define `[`KW2XDRF_OUTPUT_POWER_MAX`](#group__drivers__kw2xrf_1ga5a434749fb033efa0dbf1bf650d39b20)            | Maximum output power of the kw2x device in dBm.
`define `[`KW2XDRF_OUTPUT_POWER_MIN`](#group__drivers__kw2xrf_1ga76fbd188cf55d0e37db30e6a29f2363f)            | Minimum output power of the kw2x device in dBm.
`public int `[`kw2xrf_init`](#group__drivers__kw2xrf_1ga880a63a4d32d3172d033a48dac0d1b9a)`(`[`kw2xrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw2xrf.md#structkw2xrf__t)` * dev,const `[`kw2xrf_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__kw2xrf_1gacc3cf59ccebcb1b07b2e498926feac13)` * params,`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * ctx)`            | Initialize the given KW2XRF device.
`public void `[`kw2xrf_reset_phy`](#group__drivers__kw2xrf_1ga43013f237994794fccbdd12237fa8dbb)`(`[`kw2xrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw2xrf.md#structkw2xrf__t)` * dev)`            | Configure radio with default values.
`public void `[`kw2xrf_radio_hal_irq_handler`](#group__drivers__kw2xrf_1ga2dffb5cb0f3d0b6b11488b86d38018fa)`(void * dev)`            | IRQ Handler for the KW2XRF device.
`struct `[`kw2xrf_params`](#structkw2xrf__params) | Struct holding all params needed for device initialization.
`struct `[`kw2xrf_t`](#structkw2xrf__t) | Device descriptor for KW2XRF radio devices.

## Members

#### `define `[`KW2XRF_MAX_PKT_LENGTH`](#group__drivers__kw2xrf_1ga0ba3a98d6567394981ceb57baa1b3b03) 

Maximum packet length.

#### `define `[`KW2XRF_DEFAULT_TX_POWER`](#group__drivers__kw2xrf_1gac8bc1778d5e265f4b53dcd10dee8cc61) 

Default TX_POWER in dbm used after initialization.

#### `define `[`KW2XDRF_OUTPUT_POWER_MAX`](#group__drivers__kw2xrf_1ga5a434749fb033efa0dbf1bf650d39b20) 

Maximum output power of the kw2x device in dBm.

#### `define `[`KW2XDRF_OUTPUT_POWER_MIN`](#group__drivers__kw2xrf_1ga76fbd188cf55d0e37db30e6a29f2363f) 

Minimum output power of the kw2x device in dBm.

#### `public int `[`kw2xrf_init`](#group__drivers__kw2xrf_1ga880a63a4d32d3172d033a48dac0d1b9a)`(`[`kw2xrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw2xrf.md#structkw2xrf__t)` * dev,const `[`kw2xrf_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__kw2xrf_1gacc3cf59ccebcb1b07b2e498926feac13)` * params,`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * hal,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * ctx)` 

Initialize the given KW2XRF device.

#### Parameters
* `dev` device descriptor 

* `params` parameters for device initialization 

* `hal` pointer to IEEE 802.15.4 Radio HAL descriptor 

* `cb` isr callback 

* `ctx` context pointer handed to isr

#### Returns
0 on success 

#### Returns
<0 on error

#### `public void `[`kw2xrf_reset_phy`](#group__drivers__kw2xrf_1ga43013f237994794fccbdd12237fa8dbb)`(`[`kw2xrf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_kw2xrf.md#structkw2xrf__t)` * dev)` 

Configure radio with default values.

#### Parameters
* `dev` device to reset

#### `public void `[`kw2xrf_radio_hal_irq_handler`](#group__drivers__kw2xrf_1ga2dffb5cb0f3d0b6b11488b86d38018fa)`(void * dev)` 

IRQ Handler for the KW2XRF device.

#### Parameters
* `dev` pointer to the IEEE 802.15.4 Radio HAL descriptor

# struct `kw2xrf_params` 

Struct holding all params needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structkw2xrf__params_1a6f5e97c89c8e421114440f5a83f72d4d) | SPI bus the device is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structkw2xrf__params_1ad3627f0bf85d0376a93b5db0d8e2a9ba) | SPI clock speed to use.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structkw2xrf__params_1a60129e47d0bc5a1b96d9403081c261d2) | GPIO pin connected to chip select.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structkw2xrf__params_1ab6b91e6480298f8db17f1dede7fc8b81) | GPIO pin connected to the interrupt pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structkw2xrf__params_1ac03825bab73239c97498765220d744f3) | GPIO pin connected to RST_B.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structkw2xrf__params_1a6f5e97c89c8e421114440f5a83f72d4d) 

SPI bus the device is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structkw2xrf__params_1ad3627f0bf85d0376a93b5db0d8e2a9ba) 

SPI clock speed to use.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structkw2xrf__params_1a60129e47d0bc5a1b96d9403081c261d2) 

GPIO pin connected to chip select.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structkw2xrf__params_1ab6b91e6480298f8db17f1dede7fc8b81) 

GPIO pin connected to the interrupt pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structkw2xrf__params_1ac03825bab73239c97498765220d744f3) 

GPIO pin connected to RST_B.

# struct `kw2xrf_t` 

```
struct kw2xrf_t
  : public netdev_ieee802154_t
```  

Device descriptor for KW2XRF radio devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

