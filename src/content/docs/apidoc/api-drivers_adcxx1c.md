---
title: api-drivers_adcxx1c.md
description: api-drivers_adcxx1c.md
---
# group `drivers_adcxx1c` 

I2C Analog-to-Digital Converter device driver.

This driver works with adc081c, adc101c and adc121c versions.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ADCXX1C_I2C_ADDRESS`](#group__drivers__adcxx1c_1ga6910ed0c0ba4ef86d42f0f26ce7a6ae8)            | ADCxx1C default address (ADCxx1C021 address)
`define `[`ADCXX1C_RES_DEFAULT`](#group__drivers__adcxx1c_1ga35f100358d8c549cda4b4c98af183cf7)            | ADC default resolution for device variants.
`enum `[`@141`](#group__drivers__adcxx1c_1ga1812ab31015cef0a41c6d4f3ae07f13d)            | ADC resolution.
`enum `[`@142`](#group__drivers__adcxx1c_1ga0a28cf10bf72f80c90de5e5e1e698bfb)            | Conversion interval configuration value.
`enum `[`@143`](#group__drivers__adcxx1c_1ga85c7862086c1f92e4fb4108e176d8140)            | Named return values.
`enum `[`@144`](#group__drivers__adcxx1c_1ga52864abcf6ebd8d120995b36fe6ce06e)            | Alert values.
`public int `[`adcxx1c_init`](#group__drivers__adcxx1c_1gab2396ad5a1a7b260ea0c666f01f9b273)`(`[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,const `[`adcxx1c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1gacd6224727f2c53649ab463760598222b)` * params)`            | Initialize an ADCxx1C ADC device.
`public int `[`adcxx1c_read_raw`](#group__drivers__adcxx1c_1gae864c976a417f27e0277cfee363e6da9)`(const `[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,int16_t * raw)`            | Read a raw ADC value.
`public int `[`adcxx1c_enable_alert`](#group__drivers__adcxx1c_1gae952a3ba18a05f43d324cb4454e20401)`(`[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,`[`adcxx1c_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga14c87071e104a372494afc21816bf512)` cb,void * arg)`            | Enable alert interrupt.
`public int `[`adcxx1c_set_alert_parameters`](#group__drivers__adcxx1c_1ga343b65d7d9b2255897a54880daf65962)`(const `[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,int16_t low_limit,int16_t high_limit,int16_t hysteresis)`            | Set the alert parameters.
`public int `[`adcxx1c_get_and_clear_alert`](#group__drivers__adcxx1c_1ga0375fb40cc8170ab8e369e54586f7fb6)`(const `[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev)`            | Get alert source and clear it.
`struct `[`adcxx1c_params`](#structadcxx1c__params) | ADCxx1C params.
`struct `[`adcxx1c`](#structadcxx1c) | ADCxx1C device descriptor.

## Members

#### `define `[`ADCXX1C_I2C_ADDRESS`](#group__drivers__adcxx1c_1ga6910ed0c0ba4ef86d42f0f26ce7a6ae8) 

ADCxx1C default address (ADCxx1C021 address)

#### `define `[`ADCXX1C_RES_DEFAULT`](#group__drivers__adcxx1c_1ga35f100358d8c549cda4b4c98af183cf7) 

ADC default resolution for device variants.

#### `enum `[`@141`](#group__drivers__adcxx1c_1ga1812ab31015cef0a41c6d4f3ae07f13d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADCXX1C_RES_8BITS            | 8 bits resolution (ADC081C family)
ADCXX1C_RES_10BITS            | 10 bits resolution (ADC101C family)
ADCXX1C_RES_12BITS            | 12 bits resolution (ADC121C family)

ADC resolution.

#### `enum `[`@142`](#group__drivers__adcxx1c_1ga0a28cf10bf72f80c90de5e5e1e698bfb) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADCXX1C_CYCLE_DISABLED            | No cycle conversion.
ADCXX1C_CYCLE_32            | Conversion cycle = Tconvert x 32.
ADCXX1C_CYCLE_64            | Conversion cycle = Tconvert x 64.
ADCXX1C_CYCLE_128            | Conversion cycle = Tconvert x 128.
ADCXX1C_CYCLE_256            | Conversion cycle = Tconvert x 256.
ADCXX1C_CYCLE_512            | Conversion cycle = Tconvert x 512.
ADCXX1C_CYCLE_1024            | Conversion cycle = Tconvert x 1024.
ADCXX1C_CYCLE_2048            | Conversion cycle = Tconvert x 2048.

Conversion interval configuration value.

#### `enum `[`@143`](#group__drivers__adcxx1c_1ga85c7862086c1f92e4fb4108e176d8140) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADCXX1C_OK            | everything was fine
ADCXX1C_NOI2C            | I2C communication failed.
ADCXX1C_NODEV            | no ADCXX1C device found on the bus
ADCXX1C_NODATA            | no data available

Named return values.

#### `enum `[`@144`](#group__drivers__adcxx1c_1ga52864abcf6ebd8d120995b36fe6ce06e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ADCXX1C_ALERT_UNDER_RANGE            | Measured voltage fell below Vlow.
ADCXX1C_ALERT_OVER_RANGE            | Measured voltage exceeded Vhigh.

Alert values.

#### `public int `[`adcxx1c_init`](#group__drivers__adcxx1c_1gab2396ad5a1a7b260ea0c666f01f9b273)`(`[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,const `[`adcxx1c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1gacd6224727f2c53649ab463760598222b)` * params)` 

Initialize an ADCxx1C ADC device.

#### Parameters
* `dev` device descriptor 

* `params` device configuration

#### Returns
zero on successful initialization, non zero on error

#### `public int `[`adcxx1c_read_raw`](#group__drivers__adcxx1c_1gae864c976a417f27e0277cfee363e6da9)`(const `[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,int16_t * raw)` 

Read a raw ADC value.

#### Parameters
* `dev` device descriptor 

* `raw` read value

#### Returns
zero on successful read, non zero on error

#### `public int `[`adcxx1c_enable_alert`](#group__drivers__adcxx1c_1gae952a3ba18a05f43d324cb4454e20401)`(`[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,`[`adcxx1c_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga14c87071e104a372494afc21816bf512)` cb,void * arg)` 

Enable alert interrupt.

#### Parameters
* `dev` device descriptor 

* `cb` callback called when the alert fires 

* `arg` callback argument

#### Returns
zero on success, non zero on error

#### `public int `[`adcxx1c_set_alert_parameters`](#group__drivers__adcxx1c_1ga343b65d7d9b2255897a54880daf65962)`(const `[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev,int16_t low_limit,int16_t high_limit,int16_t hysteresis)` 

Set the alert parameters.

#### Parameters
* `dev` device descriptor 

* `low_limit` alert low limit 

* `high_limit` alert high limit 

* `hysteresis` alert hysteresis

#### Returns
zero on success, non zero on error

#### `public int `[`adcxx1c_get_and_clear_alert`](#group__drivers__adcxx1c_1ga0375fb40cc8170ab8e369e54586f7fb6)`(const `[`adcxx1c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga6d576d2604b0832ec21a12291a171cb4)` * dev)` 

Get alert source and clear it.

#### Parameters
* `dev` device descriptor

#### Returns
a combination of ADCXX1C_ALERT_OVER_RANGE and ADCXX1C_ALERT_UNDER_RANGE on success 

#### Returns
negative error code on error

# struct `adcxx1c_params` 

ADCxx1C params.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structadcxx1c__params_1aa77054b490ebe8f305997684d14ef561) | i2c device
`public uint8_t `[`addr`](#structadcxx1c__params_1adbee4695f5aa206e087b8acea28b4086) | i2c address
`public uint8_t `[`bits`](#structadcxx1c__params_1a00306f930e45daf76c9f4e38355726a4) | resolution
`public uint8_t `[`cycle`](#structadcxx1c__params_1ac65eb875ea9a9d26b4e4613a0831ee50) | conversion interval
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alert_pin`](#structadcxx1c__params_1a40ad012411f160c6a5ad3a5c9bb7284e) | alert pin (GPIO_UNDEF if not connected)
`public int16_t `[`low_limit`](#structadcxx1c__params_1a9c7ff79962fc0adad9db299ad32c9672) | alert low value
`public int16_t `[`high_limit`](#structadcxx1c__params_1ad205a1442a6fd7946f2513ee6a552c3e) | alert high value
`public int16_t `[`hysteresis`](#structadcxx1c__params_1a55e5b050793c637819b6b99c8dbf0b0e) | alert hysteresis

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structadcxx1c__params_1aa77054b490ebe8f305997684d14ef561) 

i2c device

#### `public uint8_t `[`addr`](#structadcxx1c__params_1adbee4695f5aa206e087b8acea28b4086) 

i2c address

#### `public uint8_t `[`bits`](#structadcxx1c__params_1a00306f930e45daf76c9f4e38355726a4) 

resolution

#### `public uint8_t `[`cycle`](#structadcxx1c__params_1ac65eb875ea9a9d26b4e4613a0831ee50) 

conversion interval

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alert_pin`](#structadcxx1c__params_1a40ad012411f160c6a5ad3a5c9bb7284e) 

alert pin (GPIO_UNDEF if not connected)

#### `public int16_t `[`low_limit`](#structadcxx1c__params_1a9c7ff79962fc0adad9db299ad32c9672) 

alert low value

#### `public int16_t `[`high_limit`](#structadcxx1c__params_1ad205a1442a6fd7946f2513ee6a552c3e) 

alert high value

#### `public int16_t `[`hysteresis`](#structadcxx1c__params_1a55e5b050793c637819b6b99c8dbf0b0e) 

alert hysteresis

# struct `adcxx1c` 

ADCxx1C device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`adcxx1c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1gacd6224727f2c53649ab463760598222b)` `[`params`](#structadcxx1c_1a3e969e353d9e256a27d4e369cd6193ce) | device driver configuration
`public `[`adcxx1c_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga14c87071e104a372494afc21816bf512)` `[`cb`](#structadcxx1c_1a296a7e6fa41649af629cc65bc6b4d89b) | alert callback
`public void * `[`arg`](#structadcxx1c_1a2dc1e24befb653471b8c90ab0c4c0b2c) | alert callback param

## Members

#### `public `[`adcxx1c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1gacd6224727f2c53649ab463760598222b)` `[`params`](#structadcxx1c_1a3e969e353d9e256a27d4e369cd6193ce) 

device driver configuration

#### `public `[`adcxx1c_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__adcxx1c_1ga14c87071e104a372494afc21816bf512)` `[`cb`](#structadcxx1c_1a296a7e6fa41649af629cc65bc6b4d89b) 

alert callback

#### `public void * `[`arg`](#structadcxx1c_1a2dc1e24befb653471b8c90ab0c4c0b2c) 

alert callback param

