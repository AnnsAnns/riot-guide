---
title: api-drivers_hdc1000.md
description: api-drivers_hdc1000.md
---
# group `drivers_hdc1000` 

Driver for the TI HDC1000 Humidity and Temperature Sensor.

The driver will initialize the sensor for best resolution (14 bit). Currently the driver doesn't use the heater. Temperature and humidity are acquired in sequence. The sensor is always in sleep mode.

The temperature and humidity values can either be acquired using the simplified `[hdc1000_read()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hdc1000_1gad945afdbf93f689bb92e489735ec79c8)` function, or the conversion can be triggered manually using the `[hdc1000_trigger_conversion()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hdc1000_1ga25887f2bbe38aff90b938eb94f9686e3)` and `[hdc1000_get_results()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hdc1000_1ga41acf165b8dad421b0d594f65ff1e612)` functions sequentially. If using the second method, on must wait at least `CONFIG_HDC1000_CONVERSION_TIME` between triggering the conversion and reading the results.

The driver does currently not support using the devices heating unit.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@179`](#group__drivers__hdc1000_1ga19ec6beb56ffd72599a9e41ec1024563)            | HDC1000 specific return values.
`enum `[`hdc1000_res_t`](#group__drivers__hdc1000_1ga6865897d06ef2557467d5ac59844c54f)            | Possible resolution values.
`public int `[`hdc1000_init`](#group__drivers__hdc1000_1ga592865ae6069c79d1181aee75c36218a)`(`[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,const `[`hdc1000_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__params__t)` * params)`            | Initialize the given HDC1000 device.
`public int `[`hdc1000_trigger_conversion`](#group__drivers__hdc1000_1ga25887f2bbe38aff90b938eb94f9686e3)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev)`            | Trigger a new conversion.
`public int `[`hdc1000_get_results`](#group__drivers__hdc1000_1ga41acf165b8dad421b0d594f65ff1e612)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,int16_t * temp,int16_t * hum)`            | Read conversion results for temperature and humidity.
`public int `[`hdc1000_read`](#group__drivers__hdc1000_1gad945afdbf93f689bb92e489735ec79c8)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,int16_t * temp,int16_t * hum)`            | Convenience function for reading temperature and humidity.
`public int `[`hdc1000_read_cached`](#group__drivers__hdc1000_1ga7e5f81b479e97ae98e3799235a3d00fe)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,int16_t * temp,int16_t * hum)`            | Extended read function including caching capability.
`struct `[`hdc1000_params_t`](#structhdc1000__params__t) | Parameters needed for device initialization.
`struct `[`hdc1000_t`](#structhdc1000__t) | Device descriptor for HDC1000 sensors.

## Members

#### `enum `[`@179`](#group__drivers__hdc1000_1ga19ec6beb56ffd72599a9e41ec1024563) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HDC1000_OK            | everything went as expected
HDC1000_NODEV            | no HDC1000 device found on the bus
HDC1000_NOBUS            | errors while initializing the I2C bus
HDC1000_BUSERR            | error during I2C communication

HDC1000 specific return values.

#### `enum `[`hdc1000_res_t`](#group__drivers__hdc1000_1ga6865897d06ef2557467d5ac59844c54f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HDC1000_11BIT            | 11-bit conversion
HDC1000_14BIT            | 14-bit conversion

Possible resolution values.

#### `public int `[`hdc1000_init`](#group__drivers__hdc1000_1ga592865ae6069c79d1181aee75c36218a)`(`[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,const `[`hdc1000_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__params__t)` * params)` 

Initialize the given HDC1000 device.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` configuration parameters

#### Returns
HDC1000_OK on success 

#### Returns
HDC1000_NOBUS if initialization of I2C bus fails 

#### Returns
HDC1000_NODEV if no HDC1000 device found on bus

#### `public int `[`hdc1000_trigger_conversion`](#group__drivers__hdc1000_1ga25887f2bbe38aff90b938eb94f9686e3)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev)` 

Trigger a new conversion.

After the conversion is triggered, one has to wait [CONFIG_HDC1000_CONVERSION_TIME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hdc1000__config_1ga0691188716dcefb9a90884c0a227a10c) us until the results can be read using [hdc1000_get_results()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hdc1000_1ga41acf165b8dad421b0d594f65ff1e612).

#### Parameters
* `dev` device descriptor of sensor

#### Returns
HDC1000_OK on success 

#### Returns
HDC1000_BUSERR on I2C communication failures

#### `public int `[`hdc1000_get_results`](#group__drivers__hdc1000_1ga41acf165b8dad421b0d594f65ff1e612)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,int16_t * temp,int16_t * hum)` 

Read conversion results for temperature and humidity.

#### Parameters
* `dev` device descriptor of sensor 

* `temp` temperature [in 100 * degree centigrade] 

* `hum` humidity [in 100 * percent relative]

#### Returns
HDC1000_OK on success 

#### Returns
HDC1000_BUSERR on I2C communication failures

#### `public int `[`hdc1000_read`](#group__drivers__hdc1000_1gad945afdbf93f689bb92e489735ec79c8)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,int16_t * temp,int16_t * hum)` 

Convenience function for reading temperature and humidity.

This function will trigger a new conversion, wait for the conversion to be finished and the get the results from the device.

#### Parameters
* `dev` device descriptor of sensor 

* `temp` temperature [in 100 * degree centigrade] 

* `hum` humidity [in 100 * percent relative]

#### Returns
HDC1000_OK on success 

#### Returns
HDC1000_BUSERR on I2C communication failures

#### `public int `[`hdc1000_read_cached`](#group__drivers__hdc1000_1ga7e5f81b479e97ae98e3799235a3d00fe)`(const `[`hdc1000_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__t)` * dev,int16_t * temp,int16_t * hum)` 

Extended read function including caching capability.

This function will return cached values if they are within the sampling period (HDC1000_PARAM_RENEW_INTERVAL), or will trigger a new conversion, wait for the conversion to be finished and the get the results from the device.

#### Parameters
* `dev` device descriptor of sensor 

* `temp` temperature [in 100 * degree centigrade] 

* `hum` humidity [in 100 * percent relative]

#### Returns
HDC1000_OK on success 

#### Returns
HDC1000_BUSERR on I2C communication failures

# struct `hdc1000_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhdc1000__params__t_1aee5edfaa241193a600192c8481be1d15) | bus the device is connected to
`public uint8_t `[`addr`](#structhdc1000__params__t_1a800079dc6d055591eb9ff19cc26f2356) | address on that bus
`public `[`hdc1000_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hdc1000_1ga6865897d06ef2557467d5ac59844c54f)` `[`res`](#structhdc1000__params__t_1a76443072d293d583feb64d46b35b3ed0) | resolution used for sampling temp and hum
`public uint32_t `[`renew_interval`](#structhdc1000__params__t_1a12f8b5206aa049214e9a58afbd3fe701) | interval for cache renewal

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhdc1000__params__t_1aee5edfaa241193a600192c8481be1d15) 

bus the device is connected to

#### `public uint8_t `[`addr`](#structhdc1000__params__t_1a800079dc6d055591eb9ff19cc26f2356) 

address on that bus

#### `public `[`hdc1000_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hdc1000_1ga6865897d06ef2557467d5ac59844c54f)` `[`res`](#structhdc1000__params__t_1a76443072d293d583feb64d46b35b3ed0) 

resolution used for sampling temp and hum

#### `public uint32_t `[`renew_interval`](#structhdc1000__params__t_1a12f8b5206aa049214e9a58afbd3fe701) 

interval for cache renewal

# struct `hdc1000_t` 

Device descriptor for HDC1000 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`hdc1000_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__params__t)` `[`p`](#structhdc1000__t_1a8e003cf84af3acbff8e1786c2c2d60b6) | Configuration parameters.

## Members

#### `public `[`hdc1000_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hdc1000.md#structhdc1000__params__t)` `[`p`](#structhdc1000__t_1a8e003cf84af3acbff8e1786c2c2d60b6) 

Configuration parameters.

