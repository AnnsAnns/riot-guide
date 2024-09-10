---
title: api-drivers_mag3110.md
description: api-drivers_mag3110.md
---
# group `drivers_mag3110` 

Driver for the Freescale MAG3110 magnetometer.

After initialization and set active the magnetometer will make measurements at periodic times. The output rate and over sample ratio can be determined by magnetometer initialization. The measured values of magnetic field strength and die temperature have uncalibrated offsets. To get correct measurement values, the individual offsets must be measured and set accordingly.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@216`](#group__drivers__mag3110_1ga91d74b317405fff79ca4459da11f98e3)            | Named return values.
`public int `[`mag3110_init`](#group__drivers__mag3110_1ga494ec4635c7dd1acd9e18c8fe94238bf)`(`[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,const `[`mag3110_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__params__t)` * params)`            | Initialise the MAG3110 magnetometer driver.
`public int `[`mag3110_set_user_offset`](#group__drivers__mag3110_1gafaa722c8e341d4fe0b4b766048329fb9)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,int16_t x,int16_t y,int16_t z)`            | Set user offset correction.
`public int `[`mag3110_set_active`](#group__drivers__mag3110_1gac81d1ba93eea246252ed7b1771ec684a)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev)`            | Set active mode, this enables periodic measurements.
`public int `[`mag3110_set_standby`](#group__drivers__mag3110_1gaf47af6f4323d87e1aa74729299acb4dd)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev)`            | Set standby mode.
`public int `[`mag3110_is_ready`](#group__drivers__mag3110_1ga99b55d1ebdf6821b8e25f53af4784b81)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev)`            | Check for new set of measurement data.
`public int `[`mag3110_read`](#group__drivers__mag3110_1ga99e99fe70522055db24346f7295eedc1)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,`[`mag3110_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__data__t)` * data)`            | Read magnetometer's data.
`public int `[`mag3110_read_dtemp`](#group__drivers__mag3110_1gaf5f37243d08ddb7256aafeefe53ae5d3)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,int8_t * dtemp)`            | Read die temperature.
`struct `[`mag3110_params_t`](#structmag3110__params__t) | Configuration parameters.
`struct `[`mag3110_t`](#structmag3110__t) | Device descriptor for MAG3110 magnetometer.
`struct `[`mag3110_data_t`](#structmag3110__data__t) | Data type for the result data.

## Members

#### `enum `[`@216`](#group__drivers__mag3110_1ga91d74b317405fff79ca4459da11f98e3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MAG3110_OK            | all good
MAG3110_ERROR_I2C            | I2C communication failed.
MAG3110_ERROR_DEV            | Device MAG3110 not found.
MAG3110_ERROR_CNF            | Device configuration failed.

Named return values.

#### `public int `[`mag3110_init`](#group__drivers__mag3110_1ga494ec4635c7dd1acd9e18c8fe94238bf)`(`[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,const `[`mag3110_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__params__t)` * params)` 

Initialise the MAG3110 magnetometer driver.

#### Parameters
* `dev` device descriptor of magnetometer to initialize 

* `params` configuration parameters

#### Returns
0 on success 

#### Returns
-1 if I2C communication failed 

#### Returns
-2 if magnetometer test failed 

#### Returns
-3 if magnetometer configuration failed

#### `public int `[`mag3110_set_user_offset`](#group__drivers__mag3110_1gafaa722c8e341d4fe0b4b766048329fb9)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,int16_t x,int16_t y,int16_t z)` 

Set user offset correction.

Offset correction register will be erased after accelerometer reset.

#### Parameters
* `dev` device descriptor of magnetometer 

* `x` offset offset correction value for x-axis 

* `y` offset offset correction value for y-axis 

* `z` offset offset correction value for z-axis

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`mag3110_set_active`](#group__drivers__mag3110_1gac81d1ba93eea246252ed7b1771ec684a)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev)` 

Set active mode, this enables periodic measurements.

#### Parameters
* `dev` device descriptor of magnetometer

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`mag3110_set_standby`](#group__drivers__mag3110_1gaf47af6f4323d87e1aa74729299acb4dd)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev)` 

Set standby mode.

#### Parameters
* `dev` device descriptor of magnetometer

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`mag3110_is_ready`](#group__drivers__mag3110_1ga99b55d1ebdf6821b8e25f53af4784b81)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev)` 

Check for new set of measurement data.

#### Parameters
* `dev` device descriptor of magnetometer

#### Returns
>0 if x-, y- and z-axis new sample is ready 

#### Returns
0 if measurement is in progress 

#### Returns
-1 on error

#### `public int `[`mag3110_read`](#group__drivers__mag3110_1ga99e99fe70522055db24346f7295eedc1)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,`[`mag3110_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__data__t)` * data)` 

Read magnetometer's data.

To get the actual values for the magnetic field in $\mu T$, one have to divide the returned values from the magnetometer by 10.

#### Parameters
* `dev` device descriptor of accelerometer 

* `data` the current magnetic field strength

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`mag3110_read_dtemp`](#group__drivers__mag3110_1gaf5f37243d08ddb7256aafeefe53ae5d3)`(const `[`mag3110_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__t)` * dev,int8_t * dtemp)` 

Read die temperature.

#### Parameters
* `dev` device descriptor of magnetometer 

* `dtemp` die temperature

#### Returns
0 on success 

#### Returns
-1 on error

# struct `mag3110_params_t` 

Configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmag3110__params__t_1a6487f1e6ddcc11d476720715fce9581d) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structmag3110__params__t_1a1494f310dbd68111f2d87b55ca31032d) | I2C bus address of the device.
`public uint8_t `[`type`](#structmag3110__params__t_1ad33bbf4004d6e535c385e03e1b7c7feb) | device type
`public uint8_t `[`dros`](#structmag3110__params__t_1a1245a4e2998ebd991ea5b037955857d7) | sampling rate to use
`public int16_t `[`offset`](#structmag3110__params__t_1aa79ce5c9cc8daa256a36fafecf6db46b) | data offset in X, Y, and Z direction

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmag3110__params__t_1a6487f1e6ddcc11d476720715fce9581d) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structmag3110__params__t_1a1494f310dbd68111f2d87b55ca31032d) 

I2C bus address of the device.

#### `public uint8_t `[`type`](#structmag3110__params__t_1ad33bbf4004d6e535c385e03e1b7c7feb) 

device type

#### `public uint8_t `[`dros`](#structmag3110__params__t_1a1245a4e2998ebd991ea5b037955857d7) 

sampling rate to use

#### `public int16_t `[`offset`](#structmag3110__params__t_1aa79ce5c9cc8daa256a36fafecf6db46b) 

data offset in X, Y, and Z direction

# struct `mag3110_t` 

Device descriptor for MAG3110 magnetometer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mag3110_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__params__t)` `[`params`](#structmag3110__t_1aa49abfddf61317a12fa933d8d6d31b7f) | device configuration parameters

## Members

#### `public `[`mag3110_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mag3110.md#structmag3110__params__t)` `[`params`](#structmag3110__t_1aa49abfddf61317a12fa933d8d6d31b7f) 

device configuration parameters

# struct `mag3110_data_t` 

Data type for the result data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structmag3110__data__t_1a5d3c60e7371346b50b36048453d0838c) | acceleration in X direction
`public int16_t `[`y`](#structmag3110__data__t_1a61518c49eb3d89077794f8054165a99a) | acceleration in Y direction
`public int16_t `[`z`](#structmag3110__data__t_1a747361791c102acff83634c9663559e5) | acceleration in Z direction

## Members

#### `public int16_t `[`x`](#structmag3110__data__t_1a5d3c60e7371346b50b36048453d0838c) 

acceleration in X direction

#### `public int16_t `[`y`](#structmag3110__data__t_1a61518c49eb3d89077794f8054165a99a) 

acceleration in Y direction

#### `public int16_t `[`z`](#structmag3110__data__t_1a747361791c102acff83634c9663559e5) 

acceleration in Z direction

