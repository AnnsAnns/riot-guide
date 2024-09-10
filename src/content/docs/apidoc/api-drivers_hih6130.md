---
title: api-drivers_hih6130.md
description: api-drivers_hih6130.md
---
# group `drivers_hih6130` 

Device driver for Honeywell HumidIcon Digital Humidity/Temperature Sensors: HIH-6130/6131 Series.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`hih6130_init`](#group__drivers__hih6130_1ga153ab1f4e586dd5eb1d4ed453d108b1b)`(`[`hih6130_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hih6130.md#structhih6130__t)` * dev,`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` i2c,uint8_t address)`            | Initialize a sensor.
`public int `[`hih6130_get_humidity_temperature`](#group__drivers__hih6130_1ga2b2a94c499196d8ae84a2bf18b60bfc8)`(const `[`hih6130_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hih6130.md#structhih6130__t)` * dev,int32_t * humidity_milli_percent,int32_t * temperature_milli_celsius)`            | Read humidity and temperature.
`struct `[`hih6130_t`](#structhih6130__t) | Device descriptor for HIH6130/HIH6131 sensors.

## Members

#### `public void `[`hih6130_init`](#group__drivers__hih6130_1ga153ab1f4e586dd5eb1d4ed453d108b1b)`(`[`hih6130_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hih6130.md#structhih6130__t)` * dev,`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` i2c,uint8_t address)` 

Initialize a sensor.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `i2c` I2C bus the sensor is connected to 

* `address` I2C slave address of the sensor

#### `public int `[`hih6130_get_humidity_temperature`](#group__drivers__hih6130_1ga2b2a94c499196d8ae84a2bf18b60bfc8)`(const `[`hih6130_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hih6130.md#structhih6130__t)` * dev,int32_t * humidity_milli_percent,int32_t * temperature_milli_celsius)` 

Read humidity and temperature.

#### Parameters
* `dev` Sensor device descriptor 

* `humidity_milli_percent` Relative humidity in E-03 % 

* `temperature_milli_celsius` Temperature in m°C

#### Parameters
* `0` success 

* `-1` error 

* `1` data is stale

# struct `hih6130_t` 

Device descriptor for HIH6130/HIH6131 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhih6130__t_1a663d771d4a21a079a67cc9e74604893f) | I2C device the sensor is connected to.
`public uint8_t `[`addr`](#structhih6130__t_1a5e2a6ef4d833b23bf24326d02896e519) | the slave address of the sensor on the I2C bus

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhih6130__t_1a663d771d4a21a079a67cc9e74604893f) 

I2C device the sensor is connected to.

#### `public uint8_t `[`addr`](#structhih6130__t_1a5e2a6ef4d833b23bf24326d02896e519) 

the slave address of the sensor on the I2C bus

