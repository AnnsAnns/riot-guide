---
title: api-drivers_lpsxxx.md
description: api-drivers_lpsxxx.md
---
# group `drivers_lpsxxx` 

Device driver for the LPSXXX pressure sensor family (LPS331AP/LPS25HB/LPS22HB)

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

This driver uses the sensors I2C interface

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LPSXXX_DEFAULT_RATE`](#group__drivers__lpsxxx_1ga5c9d3eadf269200bada007b484e17b8a)            | The sensors default output data rate (ODR)
`enum `[`@209`](#group__drivers__lpsxxx_1gafded920d42f51b77f7f86b5057dd4516)            | Return codes.
`enum `[`lpsxxx_rate_t`](#group__drivers__lpsxxx_1gada61d6587c295b1dc8ee8bafb5fe9b55)            | Possible sampling rates for LPS331AP sensors.
`public int `[`lpsxxx_init`](#group__drivers__lpsxxx_1gab1a97462746b6830a061e9adc9adbe35)`(`[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev,const `[`lpsxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__params__t)` * params)`            | Initialize a given LPSXXX pressure sensor.
`public int `[`lpsxxx_read_temp`](#group__drivers__lpsxxx_1ga0dc40869bfa4c7c8f1c6ccd458a5b8ba)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev,int16_t * temp)`            | Read a temperature value from the given sensor, returned in c°C.
`public int `[`lpsxxx_read_pres`](#group__drivers__lpsxxx_1gaed8a1bfb9c483e9b64f0aa1669d610f6)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev,uint16_t * pres)`            | Read a pressure value from the given sensor, returned in hPa.
`public int `[`lpsxxx_enable`](#group__drivers__lpsxxx_1gaf23fb07a41b0d1e335267604fa9ca5af)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev)`            | Enable the given sensor.
`public int `[`lpsxxx_disable`](#group__drivers__lpsxxx_1gab178460f746627e4ca059eba3f27e0e2)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev)`            | Disable the given sensor.
`struct `[`lpsxxx_params_t`](#structlpsxxx__params__t) | Struct holding all parameters needed for device initialization.
`struct `[`lpsxxx_t`](#structlpsxxx__t) | Device descriptor for LPSXXX sensors.

## Members

#### `define `[`LPSXXX_DEFAULT_RATE`](#group__drivers__lpsxxx_1ga5c9d3eadf269200bada007b484e17b8a) 

The sensors default output data rate (ODR)

#### `enum `[`@209`](#group__drivers__lpsxxx_1gafded920d42f51b77f7f86b5057dd4516) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LPSXXX_OK            | Everything was fine.
LPSXXX_ERR_NODEV            | No valid device found.
LPSXXX_ERR_I2C            | An error occurred on the I2C bus.

Return codes.

#### `enum `[`lpsxxx_rate_t`](#group__drivers__lpsxxx_1gada61d6587c295b1dc8ee8bafb5fe9b55) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LPSXXX_RATE_1HZ            | sample with 1Hz

Possible sampling rates for LPS331AP sensors.

#### `public int `[`lpsxxx_init`](#group__drivers__lpsxxx_1gab1a97462746b6830a061e9adc9adbe35)`(`[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev,const `[`lpsxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__params__t)` * params)` 

Initialize a given LPSXXX pressure sensor.

#### Parameters
* `dev` device descriptor of the sensor 

* `params` initialization parameters

#### Returns
LPSXXX_OK on success 

#### Returns
-LPSXXX_ERR_NODEV if no valid device found 

#### Returns
-LPSXXX_ERR_I2C on I2C error

#### `public int `[`lpsxxx_read_temp`](#group__drivers__lpsxxx_1ga0dc40869bfa4c7c8f1c6ccd458a5b8ba)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev,int16_t * temp)` 

Read a temperature value from the given sensor, returned in c°C.

#### Parameters
* `dev` device descriptor of sensor to read from 

* `temp` temperature value in c°C

#### Returns
LPSXXX_OK on success 

#### Returns
-LPSXXX_ERR_I2C on I2C error

#### `public int `[`lpsxxx_read_pres`](#group__drivers__lpsxxx_1gaed8a1bfb9c483e9b64f0aa1669d610f6)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev,uint16_t * pres)` 

Read a pressure value from the given sensor, returned in hPa.

#### Parameters
* `dev` device descriptor of sensor to read from 

* `pres` pressure value in hPa

#### Returns
LPSXXX_OK on success 

#### Returns
-LPSXXX_ERR_I2C on I2C error

#### `public int `[`lpsxxx_enable`](#group__drivers__lpsxxx_1gaf23fb07a41b0d1e335267604fa9ca5af)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev)` 

Enable the given sensor.

#### Parameters
* `dev` device descriptor of sensor to enable

#### Returns
LPSXXX_OK on success 

#### Returns
-LPSXXX_ERR_I2C on I2C error

#### `public int `[`lpsxxx_disable`](#group__drivers__lpsxxx_1gab178460f746627e4ca059eba3f27e0e2)`(const `[`lpsxxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__t)` * dev)` 

Disable the given sensor.

#### Parameters
* `dev` device descriptor of sensor to disable

#### Returns
LPSXXX_OK on success 

#### Returns
-LPSXXX_ERR_I2C on I2C error

# struct `lpsxxx_params_t` 

Struct holding all parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlpsxxx__params__t_1a1a1241f06fcb6968180e7d587a48f5e6) | I2C bus the sensor is connected to.
`public uint8_t `[`addr`](#structlpsxxx__params__t_1afb196800f7fba6a5821a4c870d5779b6) | the devices address on the bus
`public `[`lpsxxx_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lpsxxx_1gada61d6587c295b1dc8ee8bafb5fe9b55)` `[`rate`](#structlpsxxx__params__t_1a25243cb2076b73593beccc5912ca5a74) | tell sensor to sample with this rate

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlpsxxx__params__t_1a1a1241f06fcb6968180e7d587a48f5e6) 

I2C bus the sensor is connected to.

#### `public uint8_t `[`addr`](#structlpsxxx__params__t_1afb196800f7fba6a5821a4c870d5779b6) 

the devices address on the bus

#### `public `[`lpsxxx_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lpsxxx_1gada61d6587c295b1dc8ee8bafb5fe9b55)` `[`rate`](#structlpsxxx__params__t_1a25243cb2076b73593beccc5912ca5a74) 

tell sensor to sample with this rate

# struct `lpsxxx_t` 

Device descriptor for LPSXXX sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lpsxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__params__t)` `[`params`](#structlpsxxx__t_1a21ce30a50c3e8fa983d29cee36b5c37f) | device initialization parameters

## Members

#### `public `[`lpsxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpsxxx.md#structlpsxxx__params__t)` `[`params`](#structlpsxxx__t_1a21ce30a50c3e8fa983d29cee36b5c37f) 

device initialization parameters

