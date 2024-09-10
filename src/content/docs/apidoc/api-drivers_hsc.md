---
title: api-drivers_hsc.md
description: api-drivers_hsc.md
---
# group `drivers_hsc` 

Device driver interface for the HSC sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`hsc_init`](#group__drivers__hsc_1gaa53b673d7dd5f9054e3c6c21cccf98c5)`(`[`hsc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__t)` * dev,const `[`hsc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__params__t)` * params)`            | Initialize the given HSC device.
`public int `[`hsc_read_temperature`](#group__drivers__hsc_1gaa7cb1ba01e4ab95e9cda09d90de02873)`(const `[`hsc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__t)` * dev,int16_t * dest)`            | Read temperature value from the given HSC device, returned in 0.1°C.
`public int `[`hsc_read_pressure`](#group__drivers__hsc_1ga6e2d52f357c67cd622ca318a16d086b1)`(const `[`hsc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__t)` * dev,int32_t * dest)`            | Read pressure value from the given HSC device, returned in uBar.
`struct `[`hsc_params_t`](#structhsc__params__t) | Device initialization parameters.
`struct `[`hsc_t`](#structhsc__t) | Device descriptor for the HSC sensor.

## Members

#### `public int `[`hsc_init`](#group__drivers__hsc_1gaa53b673d7dd5f9054e3c6c21cccf98c5)`(`[`hsc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__t)` * dev,const `[`hsc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__params__t)` * params)` 

Initialize the given HSC device.

#### Parameters
* `dev` Initialized device descriptor of HSC device 

* `params` Initialization parameters

#### Parameters
* `0` Success 

* `-ENXIO` No HSC at given address 

#### Returns
-EIO An error occurred when reading calibration values

#### `public int `[`hsc_read_temperature`](#group__drivers__hsc_1gaa7cb1ba01e4ab95e9cda09d90de02873)`(const `[`hsc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__t)` * dev,int16_t * dest)` 

Read temperature value from the given HSC device, returned in 0.1°C.

#### Parameters
* `dev` Device descriptor of HSC device to read from 

* `dest` Temperature in 0.1°C

#### Parameters
* `0` Success 

* `-ENXIO` No HSC at given address 

#### Returns
-EIO An error occurred when reading calibration values

#### `public int `[`hsc_read_pressure`](#group__drivers__hsc_1ga6e2d52f357c67cd622ca318a16d086b1)`(const `[`hsc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__t)` * dev,int32_t * dest)` 

Read pressure value from the given HSC device, returned in uBar.

#### Parameters
* `dev` Device descriptor of HSC device to read from 

* `dest` Pressure in uBar

#### Parameters
* `0` Success 

* `-ENXIO` No HSC at given address 

#### Returns
-EIO An error occurred when reading calibration values

# struct `hsc_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structhsc__params__t_1af848a521fa25b9ff156eb2820a6efec8) | I2C device which is used.
`public uint8_t `[`i2c_addr`](#structhsc__params__t_1a4c095901840575140bd8df5fc7b89dda) | I2C address.
`public uint8_t `[`hsc_range`](#structhsc__params__t_1afc6e92a8a7cca7d8900a2347ea68b77a) | Pressure range in mBar.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structhsc__params__t_1af848a521fa25b9ff156eb2820a6efec8) 

I2C device which is used.

#### `public uint8_t `[`i2c_addr`](#structhsc__params__t_1a4c095901840575140bd8df5fc7b89dda) 

I2C address.

#### `public uint8_t `[`hsc_range`](#structhsc__params__t_1afc6e92a8a7cca7d8900a2347ea68b77a) 

Pressure range in mBar.

# struct `hsc_t` 

Device descriptor for the HSC sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`hsc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__params__t)` `[`params`](#structhsc__t_1aea49cb2bdb733d4453695411e973916d) | Device initialization parameters.

## Members

#### `public `[`hsc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hsc.md#structhsc__params__t)` `[`params`](#structhsc__t_1aea49cb2bdb733d4453695411e973916d) 

Device initialization parameters.

