---
title: api-drivers_opt3001.md
description: api-drivers_opt3001.md
---
# group `drivers_opt3001` 

Driver for the Texas Instruments OPT3001 sensor.

The TI OPT3001 (Ambient Light Sensor) measures the intensity of visible light with a spectal response comparable to the human eye, with simultaneous rejection of infrared light. The conversion time, mode of conversion and the interrupt reporting mechanism mode can be set by the sensor initialization. After initialization the raw sensor values can be read. The ambient light can be calculated as follows:
 Result register translation into lux: 
$$
\begin{eqnarray*} Lux &=& LSB\_Size \cdot R[11:0] \end{eqnarray*}
$$
 Where LSB_Size: 
$$
\begin{eqnarray*} LSB\_Size &=& 0.01 \cdot 2^{E[3:0]} \end{eqnarray*}
$$

The calculation is wrapped from TI OPT3001 Ambient Light Sensor (ALS) datasheet (Rev. C).

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@231`](#group__drivers__opt3001_1ga48b7364b5ceec8a2d131dc2cf2587628)            | OPT3001 specific return values.
`public int `[`opt3001_init`](#group__drivers__opt3001_1gab3961b0bffe6bde69ca193caeb920447)`(`[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev,const `[`opt3001_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__params__t)` * params)`            | Initialize the OPT3001 sensor driver.
`public int `[`opt3001_reset`](#group__drivers__opt3001_1gacb4aefdec1c253495b9bc26d66d7b373)`(const `[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev)`            | Reset the OPT3001 sensor while simultaneous deactivating measurements.
`public int `[`opt3001_set_active`](#group__drivers__opt3001_1ga07ed10c2d9ba09ac9be8352b47b412f6)`(const `[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev)`            | Set active mode, this enables periodic measurements.
`public int `[`opt3001_read_lux`](#group__drivers__opt3001_1ga4626172d61cb3e0a9dce89685d4ef333)`(const `[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev,uint32_t * convl)`            | Read sensor's raw data and convert it to milliLux.
`struct `[`opt3001_params_t`](#structopt3001__params__t) | Parameters needed for device initialization.
`struct `[`opt3001_t`](#structopt3001__t) | Device descriptor for OPT3001 sensors.

## Members

#### `enum `[`@231`](#group__drivers__opt3001_1ga48b7364b5ceec8a2d131dc2cf2587628) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
OPT3001_OK            | Success, no error.
OPT3001_ERROR_BUS            | I2C bus error.
OPT3001_ERROR_DEV            | Internal device error.
OPT3001_ERROR            | General error.

OPT3001 specific return values.

#### `public int `[`opt3001_init`](#group__drivers__opt3001_1gab3961b0bffe6bde69ca193caeb920447)`(`[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev,const `[`opt3001_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__params__t)` * params)` 

Initialize the OPT3001 sensor driver.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` configuration parameters

#### Returns
0 on success 

#### Returns
-OPT3001_ERROR_BUS on I2C bus error 

#### Returns
-OPT3001_ERROR_DEV if sensor test failed

#### `public int `[`opt3001_reset`](#group__drivers__opt3001_1gacb4aefdec1c253495b9bc26d66d7b373)`(const `[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev)` 

Reset the OPT3001 sensor while simultaneous deactivating measurements.

Afterwards the sensor should be idle.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`opt3001_set_active`](#group__drivers__opt3001_1ga07ed10c2d9ba09ac9be8352b47b412f6)`(const `[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev)` 

Set active mode, this enables periodic measurements.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`opt3001_read_lux`](#group__drivers__opt3001_1ga4626172d61cb3e0a9dce89685d4ef333)`(const `[`opt3001_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__t)` * dev,uint32_t * convl)` 

Read sensor's raw data and convert it to milliLux.

#### Parameters
* `dev` device descriptor of sensor 

* `convl` ambient light in milliLux

#### Returns
0 on success 

#### Returns
-1 on error

# struct `opt3001_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structopt3001__params__t_1a612863ef5edbe7e69a453680f6e9b736) | I2C device, the sensor is connected to.
`public uint8_t `[`i2c_addr`](#structopt3001__params__t_1ae74e9df683f9874778ff2ad7cb883a89) | The sensor's slave address on the I2C bus.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structopt3001__params__t_1a612863ef5edbe7e69a453680f6e9b736) 

I2C device, the sensor is connected to.

#### `public uint8_t `[`i2c_addr`](#structopt3001__params__t_1ae74e9df683f9874778ff2ad7cb883a89) 

The sensor's slave address on the I2C bus.

# struct `opt3001_t` 

Device descriptor for OPT3001 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`opt3001_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__params__t)` `[`params`](#structopt3001__t_1acebf86b5437f7493b8a6e51f3101049f) | Configuration parameters.

## Members

#### `public `[`opt3001_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_opt3001.md#structopt3001__params__t)` `[`params`](#structopt3001__t_1acebf86b5437f7493b8a6e51f3101049f) 

Configuration parameters.

