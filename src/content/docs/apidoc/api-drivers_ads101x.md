---
title: api-drivers_ads101x.md
description: api-drivers_ads101x.md
---
# group `drivers_ads101x` 

I2C Analog-to-Digital Converter device driver.

This driver works with ADS1013-5 and ADS1113-5.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@145`](#group__drivers__ads101x_1ga4d29ca5db06e2ae647d1ec22548a9d2a)            | Named return values.
`public int `[`ads101x_init`](#group__drivers__ads101x_1ga62914846bd803de8fcaf01f46d38abe9)`(`[`ads101x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga786173cdd072d44511b5ec96cc8072fa)` * dev,const `[`ads101x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gacf87254e336ae81f2b3a3ef8f2a4d4c5)` * params)`            | Initialize an ADS101x/111x ADC device (ADC only)
`public int `[`ads101x_alert_init`](#group__drivers__ads101x_1ga9ab02377bf2773eb1973ba6de8f14234)`(`[`ads101x_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gad768733705aa0b7ef6e6176950ee758c)` * dev,const `[`ads101x_alert_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gac2f6060a118d7e97114e1c79a40d55c7)` * params)`            | Initialize an ADS101x/111x alert device.
`public int `[`ads101x_set_mux_gain`](#group__drivers__ads101x_1ga15a9598fcd6f96dd7627f04c5490151b)`(const `[`ads101x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga786173cdd072d44511b5ec96cc8072fa)` * dev,uint8_t mux_gain)`            | Set mux and gain.
`public int `[`ads101x_read_raw`](#group__drivers__ads101x_1gad8f0aee88b7fa4aa9d6c58c59d9b51a4)`(const `[`ads101x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga786173cdd072d44511b5ec96cc8072fa)` * dev,int16_t * raw)`            | Read a raw ADC value.
`public int `[`ads101x_enable_alert`](#group__drivers__ads101x_1ga75092e0fb959c3fa906f7ce9e933f179)`(`[`ads101x_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gad768733705aa0b7ef6e6176950ee758c)` * dev,`[`ads101x_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga180dcefdb44b260b81f422787f9ace52)` cb,void * arg)`            | Enable alert interrupt.
`public int `[`ads101x_set_alert_parameters`](#group__drivers__ads101x_1ga483dda279848fde59e3d142cf26ee0ff)`(const `[`ads101x_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gad768733705aa0b7ef6e6176950ee758c)` * dev,int16_t low_limit,int16_t high_limit)`            | Set the alert parameters.
`struct `[`ads101x_params`](#structads101x__params) | ADS101x/111x params.
`struct `[`ads101x_alert_params`](#structads101x__alert__params) | ADS101x/111x alert params.
`struct `[`ads101x`](#structads101x) | ADS101x/111x device descriptor.
`struct `[`ads101x_alert`](#structads101x__alert) | ADS101x/111x alert device descriptor.

## Members

#### `enum `[`@145`](#group__drivers__ads101x_1ga4d29ca5db06e2ae647d1ec22548a9d2a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADS101X_OK            | everything was fine
ADS101X_NOI2C            | I2C communication failed.
ADS101X_NODEV            | no ADS101X device found on the bus
ADS101X_NODATA            | no data available

Named return values.

#### `public int `[`ads101x_init`](#group__drivers__ads101x_1ga62914846bd803de8fcaf01f46d38abe9)`(`[`ads101x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga786173cdd072d44511b5ec96cc8072fa)` * dev,const `[`ads101x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gacf87254e336ae81f2b3a3ef8f2a4d4c5)` * params)` 

Initialize an ADS101x/111x ADC device (ADC only)

#### Parameters
* `dev` device descriptor 

* `params` device configuration

#### Returns
zero on successful initialization, non zero on error

#### `public int `[`ads101x_alert_init`](#group__drivers__ads101x_1ga9ab02377bf2773eb1973ba6de8f14234)`(`[`ads101x_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gad768733705aa0b7ef6e6176950ee758c)` * dev,const `[`ads101x_alert_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gac2f6060a118d7e97114e1c79a40d55c7)` * params)` 

Initialize an ADS101x/111x alert device.

#### Parameters
* `dev` device descriptor 

* `params` device configuration

#### Returns
zero on successful initialization, non zero on error

#### `public int `[`ads101x_set_mux_gain`](#group__drivers__ads101x_1ga15a9598fcd6f96dd7627f04c5490151b)`(const `[`ads101x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga786173cdd072d44511b5ec96cc8072fa)` * dev,uint8_t mux_gain)` 

Set mux and gain.

Mux settings have no effect on ADS1013-4 and ADS1113-4. Gain settings have no effect on ADS1013 and ADS1113.

#### Parameters
* `dev` device descriptor 

* `mux_gain` mux and gain boolean values

#### Returns
zero on successful read, non zero on error

#### `public int `[`ads101x_read_raw`](#group__drivers__ads101x_1gad8f0aee88b7fa4aa9d6c58c59d9b51a4)`(const `[`ads101x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga786173cdd072d44511b5ec96cc8072fa)` * dev,int16_t * raw)` 

Read a raw ADC value.

#### Parameters
* `dev` device descriptor 

* `raw` read value

#### Returns
zero on successful read, non zero on error

#### `public int `[`ads101x_enable_alert`](#group__drivers__ads101x_1ga75092e0fb959c3fa906f7ce9e933f179)`(`[`ads101x_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gad768733705aa0b7ef6e6176950ee758c)` * dev,`[`ads101x_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga180dcefdb44b260b81f422787f9ace52)` cb,void * arg)` 

Enable alert interrupt.

Alert settings have no effect on ADS1013 and ADS1113.

#### Parameters
* `dev` device descriptor 

* `cb` callback called when the alert fires 

* `arg` callback argument

#### Returns
zero on success, non zero on error

#### `public int `[`ads101x_set_alert_parameters`](#group__drivers__ads101x_1ga483dda279848fde59e3d142cf26ee0ff)`(const `[`ads101x_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gad768733705aa0b7ef6e6176950ee758c)` * dev,int16_t low_limit,int16_t high_limit)` 

Set the alert parameters.

Alert settings have no effect on ADS1013 and ADS1113.

#### Parameters
* `dev` device descriptor 

* `low_limit` alert low limit 

* `high_limit` alert high limit

#### Returns
zero on success, non zero on error

# struct `ads101x_params` 

ADS101x/111x params.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structads101x__params_1a84037b0cdc7e87bfef7f2e24f37306ae) | i2c device
`public uint8_t `[`addr`](#structads101x__params_1a808404eaabcf9f265e885a26c2b144aa) | i2c address
`public uint8_t `[`mux_gain`](#structads101x__params_1a631a94c09f7eb2a7e053166c07254dc4) | Mux and gain boolean settings.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structads101x__params_1a84037b0cdc7e87bfef7f2e24f37306ae) 

i2c device

#### `public uint8_t `[`addr`](#structads101x__params_1a808404eaabcf9f265e885a26c2b144aa) 

i2c address

#### `public uint8_t `[`mux_gain`](#structads101x__params_1a631a94c09f7eb2a7e053166c07254dc4) 

Mux and gain boolean settings.

# struct `ads101x_alert_params` 

ADS101x/111x alert params.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structads101x__alert__params_1a13ea9d4ee9ee0f1dcf47b8f040a8622e) | i2c device
`public uint8_t `[`addr`](#structads101x__alert__params_1ad9b43dc795efe76a32686067abc38eb4) | i2c address
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alert_pin`](#structads101x__alert__params_1ac4f5bb6cea371ff3cc6481ab0d2fc587) | alert pin (GPIO_UNDEF if not connected)
`public int16_t `[`low_limit`](#structads101x__alert__params_1ac156b980afa85d600a3fd4893d0c0f60) | alert low value
`public int16_t `[`high_limit`](#structads101x__alert__params_1a9cc80157dd0970387d909ffb64c7be15) | alert high value

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structads101x__alert__params_1a13ea9d4ee9ee0f1dcf47b8f040a8622e) 

i2c device

#### `public uint8_t `[`addr`](#structads101x__alert__params_1ad9b43dc795efe76a32686067abc38eb4) 

i2c address

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alert_pin`](#structads101x__alert__params_1ac4f5bb6cea371ff3cc6481ab0d2fc587) 

alert pin (GPIO_UNDEF if not connected)

#### `public int16_t `[`low_limit`](#structads101x__alert__params_1ac156b980afa85d600a3fd4893d0c0f60) 

alert low value

#### `public int16_t `[`high_limit`](#structads101x__alert__params_1a9cc80157dd0970387d909ffb64c7be15) 

alert high value

# struct `ads101x` 

ADS101x/111x device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ads101x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gacf87254e336ae81f2b3a3ef8f2a4d4c5)` `[`params`](#structads101x_1a690cd563b5ab1a12458a2b90b14a5842) | device driver configuration

## Members

#### `public `[`ads101x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gacf87254e336ae81f2b3a3ef8f2a4d4c5)` `[`params`](#structads101x_1a690cd563b5ab1a12458a2b90b14a5842) 

device driver configuration

# struct `ads101x_alert` 

ADS101x/111x alert device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ads101x_alert_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gac2f6060a118d7e97114e1c79a40d55c7)` `[`params`](#structads101x__alert_1afb75539811baa2c1c72c8c5049a5c38a) | device driver configuration
`public `[`ads101x_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga180dcefdb44b260b81f422787f9ace52)` `[`cb`](#structads101x__alert_1a238830fe512b1532353296e9cb66fb3a) | alert callback
`public void * `[`arg`](#structads101x__alert_1a2aec0a3d583af8dd5516a93aea2fb9a2) | alert callback param

## Members

#### `public `[`ads101x_alert_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1gac2f6060a118d7e97114e1c79a40d55c7)` `[`params`](#structads101x__alert_1afb75539811baa2c1c72c8c5049a5c38a) 

device driver configuration

#### `public `[`ads101x_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ads101x_1ga180dcefdb44b260b81f422787f9ace52)` `[`cb`](#structads101x__alert_1a238830fe512b1532353296e9cb66fb3a) 

alert callback

#### `public void * `[`arg`](#structads101x__alert_1a2aec0a3d583af8dd5516a93aea2fb9a2) 

alert callback param

