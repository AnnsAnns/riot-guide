---
title: api-drivers_mpl3115a2.md
description: api-drivers_mpl3115a2.md
---
# group `drivers_mpl3115a2` 

Driver for the Freescale MPL3115A2 pressure sensor.

The driver will initialize the sensor for pressure measurement. The conversion duration depends on oversample ratio. After initialization the sensor can be set active to run periodic measurements. The oversample ratio can be configured during sensor initialization.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MPL3115A2_I2C_ADDRESS`](#group__drivers__mpl3115a2_1ga4c537a0c6746a6ae8212641941960984)            | MPL3115A2 Default Address.
`enum `[`@223`](#group__drivers__mpl3115a2_1ga0d019765a2884a265421b443c6a956c8)            | Named return values.
`public int `[`mpl3115a2_init`](#group__drivers__mpl3115a2_1ga522ea56894f54659bd37f92625f7032b)`(`[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev,const `[`mpl3115a2_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__params__t)` * params)`            | Initialize the MPL3115A2 sensor driver.
`public int `[`mpl3115a2_reset`](#group__drivers__mpl3115a2_1ga3acb0ca784d73b7b3363eb570d3344b0)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)`            | Reset the MPL3115A2 sensor.
`public int `[`mpl3115a2_set_active`](#group__drivers__mpl3115a2_1ga83781cd30238788ba31cb381733116d7)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)`            | Set active mode, this enables periodic measurements.
`public int `[`mpl3115a2_set_standby`](#group__drivers__mpl3115a2_1ga47297785986f954a397cd7b038bd0cd2)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)`            | Set standby mode.
`public int `[`mpl3115a2_is_ready`](#group__drivers__mpl3115a2_1ga5d5a6b5311f7bdc1dc4a2ba303a68d93)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)`            | Check for new set of measurement data.
`public int `[`mpl3115a2_read_pressure`](#group__drivers__mpl3115a2_1ga3fa27e02456e659badac4b5c5de54913)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev,uint32_t * pres,uint8_t * status)`            | Read sensor's data in pressure mode.
`public int `[`mpl3115a2_read_temp`](#group__drivers__mpl3115a2_1gaef556f4adbd25aef7f2a6a20708f2f18)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev,int16_t * temp)`            | Read sensor's temperature.
`struct `[`mpl3115a2_params_t`](#structmpl3115a2__params__t) | Configuration parameters.
`struct `[`mpl3115a2_t`](#structmpl3115a2__t) | Device descriptor for MPL3115A2 sensors.

## Members

#### `define `[`MPL3115A2_I2C_ADDRESS`](#group__drivers__mpl3115a2_1ga4c537a0c6746a6ae8212641941960984) 

MPL3115A2 Default Address.

#### `enum `[`@223`](#group__drivers__mpl3115a2_1ga0d019765a2884a265421b443c6a956c8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MPL3115A2_OK            | all good
MPL3115A2_ERROR_I2C            | I2C communication failed.
MPL3115A2_ERROR_DEV            | Device MPL3115A2 not found.
MPL3115A2_ERROR_CNF            | Device configuration failed.

Named return values.

#### `public int `[`mpl3115a2_init`](#group__drivers__mpl3115a2_1ga522ea56894f54659bd37f92625f7032b)`(`[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev,const `[`mpl3115a2_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__params__t)` * params)` 

Initialize the MPL3115A2 sensor driver.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` configuration parameters

#### Returns
MPL3115A2_OK on success 

#### Returns
-MPL3115A2_ERROR_I2C on I2C bus error 

#### Returns
-MPL3115A2_ERROR_DEV on device error 

#### Returns
-MPL3115A2_ERROR_CNF on config error

#### `public int `[`mpl3115a2_reset`](#group__drivers__mpl3115a2_1ga3acb0ca784d73b7b3363eb570d3344b0)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)` 

Reset the MPL3115A2 sensor.

After that, the sensor should be reinitialized.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
MPL3115A2_OK on success 

#### Returns
-MPL3115A2_ERROR_I2C on error

#### `public int `[`mpl3115a2_set_active`](#group__drivers__mpl3115a2_1ga83781cd30238788ba31cb381733116d7)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)` 

Set active mode, this enables periodic measurements.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
MPL3115A2_OK on success 

#### Returns
-MPL3115A2_ERROR_I2C on error

#### `public int `[`mpl3115a2_set_standby`](#group__drivers__mpl3115a2_1ga47297785986f954a397cd7b038bd0cd2)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)` 

Set standby mode.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
MPL3115A2_OK on success 

#### Returns
-MPL3115A2_ERROR_I2C on error

#### `public int `[`mpl3115a2_is_ready`](#group__drivers__mpl3115a2_1ga5d5a6b5311f7bdc1dc4a2ba303a68d93)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev)` 

Check for new set of measurement data.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
>0 if new data sample is ready 

#### Returns
MPL3115A2_OK measurement in progress 

#### Returns
-MPL3115A2_ERROR_I2C on error

#### `public int `[`mpl3115a2_read_pressure`](#group__drivers__mpl3115a2_1ga3fa27e02456e659badac4b5c5de54913)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev,uint32_t * pres,uint8_t * status)` 

Read sensor's data in pressure mode.

#### Parameters
* `dev` device descriptor of sensor 

* `pres` pressure in Pascals 

* `status` sensor status register

#### Returns
MPL3115A2_OK on success, 

#### Returns
-MPL3115A2_ERROR_I2C on error

#### `public int `[`mpl3115a2_read_temp`](#group__drivers__mpl3115a2_1gaef556f4adbd25aef7f2a6a20708f2f18)`(const `[`mpl3115a2_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__t)` * dev,int16_t * temp)` 

Read sensor's temperature.

#### Parameters
* `dev` device descriptor of sensor 

* `temp` temperature in $^\circ C \cdot 10$

#### Returns
MPL3115A2_OK on success 

#### Returns
-MPL3115A2_ERROR_I2C on error

# struct `mpl3115a2_params_t` 

Configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmpl3115a2__params__t_1a995468f279ac3ed35ae94a34c51d9cd4) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structmpl3115a2__params__t_1a73aa15c522a9cee251f7f56315d95a6e) | I2C bus address of the device.
`public uint8_t `[`ratio`](#structmpl3115a2__params__t_1a388491423f29166aff50ef71ce19113b) | MPL3115A2 oversampling ratio.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmpl3115a2__params__t_1a995468f279ac3ed35ae94a34c51d9cd4) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structmpl3115a2__params__t_1a73aa15c522a9cee251f7f56315d95a6e) 

I2C bus address of the device.

#### `public uint8_t `[`ratio`](#structmpl3115a2__params__t_1a388491423f29166aff50ef71ce19113b) 

MPL3115A2 oversampling ratio.

# struct `mpl3115a2_t` 

Device descriptor for MPL3115A2 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mpl3115a2_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__params__t)` `[`params`](#structmpl3115a2__t_1a68b396e0e7d6032ac790982d7b4b64f1) | device configuration parameters

## Members

#### `public `[`mpl3115a2_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpl3115a2.md#structmpl3115a2__params__t)` `[`params`](#structmpl3115a2__t_1a68b396e0e7d6032ac790982d7b4b64f1) 

device configuration parameters

