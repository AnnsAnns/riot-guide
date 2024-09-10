---
title: api-drivers_lis3mdl.md
description: api-drivers_lis3mdl.md
---
# group `drivers_lis3mdl` 

Device driver for the LIS3MDL 3-axis magnetometer.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`lis3mdl_xy_mode_t`](#group__drivers__lis3mdl_1gadf9568a25c1594bfa79e2c70a7a79645)            | Operating mode of x- and y-axis for LIS3MDL.
`enum `[`lis3mdl_z_mode_t`](#group__drivers__lis3mdl_1gad6e3001863eed095679257bf41d59521)            | Operating mode of z-axis for LIS3MDL.
`enum `[`lis3mdl_odr_t`](#group__drivers__lis3mdl_1ga12924e31f0a107e10bbc5aff7e3d277b)            | Output data rate [Hz] for LIS3MDL.
`enum `[`lis3mdl_scale_t`](#group__drivers__lis3mdl_1gaf30708ca82e18bc9e2e6ad31eb8a6227)            | Scale [gauss] for LIS3MDL.
`enum `[`lis3mdl_op_t`](#group__drivers__lis3mdl_1ga7b7b204106fed91e9f18e26e5c2d37e1)            | Operating modes.
`public int `[`lis3mdl_init`](#group__drivers__lis3mdl_1gad9cc96d208da06ea7ee8d84c7393d269)`(`[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev,const `[`lis3mdl_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__params__t)` * params)`            | Initialize a new LIS3DML device.
`public void `[`lis3mdl_read_mag`](#group__drivers__lis3mdl_1ga8f0a50cbd0b213467ae9f4aeeaa743e9)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev,`[`lis3mdl_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__3d__data__t)` * data)`            | Reads the magnometer value of LIS3MDL.
`public void `[`lis3mdl_read_temp`](#group__drivers__lis3mdl_1ga6ee057e510c94918d3d9138a15150068)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev,int16_t * value)`            | Reads the temperature value of LIS3MDL.
`public void `[`lis3mdl_enable`](#group__drivers__lis3mdl_1gab506501d0db174a2825577520c577044)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev)`            | Enable the LIS3MDL device.
`public void `[`lis3mdl_disable`](#group__drivers__lis3mdl_1ga9b466f1b93dd4294c45425084d82ad69)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev)`            | Disable the LIS3MDL device.
`struct `[`lis3mdl_3d_data_t`](#structlis3mdl__3d__data__t) | 3d data container of the LIS3MDL sensor
`struct `[`lis3mdl_params_t`](#structlis3mdl__params__t) | Device initialization parameters.
`struct `[`lis3mdl_t`](#structlis3mdl__t) | Device descriptor for LIS3MDL sensor.

## Members

#### `enum `[`lis3mdl_xy_mode_t`](#group__drivers__lis3mdl_1gadf9568a25c1594bfa79e2c70a7a79645) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS3MDL_XY_MODE_LOW            | Low-power mode.
LIS3MDL_XY_MODE_MEDIUM            | Medium-performance mode.
LIS3MDL_XY_MODE_HIGH            | High-performance mode.
LIS3MDL_XY_MODE_ULTRA            | Ultra-High-performance mode.

Operating mode of x- and y-axis for LIS3MDL.

#### `enum `[`lis3mdl_z_mode_t`](#group__drivers__lis3mdl_1gad6e3001863eed095679257bf41d59521) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS3MDL_Z_MODE_LOW            | Low-power mode.
LIS3MDL_Z_MODE_MEDIUM            | Medium-performance mode.
LIS3MDL_Z_MODE_HIGH            | High-performance mode.
LIS3MDL_Z_MODE_ULTRA            | Ultra-High-performance mode.

Operating mode of z-axis for LIS3MDL.

#### `enum `[`lis3mdl_odr_t`](#group__drivers__lis3mdl_1ga12924e31f0a107e10bbc5aff7e3d277b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS3MDL_ODR_0_625Hz            | 0.625Hz
LIS3MDL_ODR_1_25Hz            | 1.250Hz
LIS3MDL_ODR_2_5Hz            | 5.000Hz
LIS3MDL_ODR_10Hz            | 10.000Hz
LIS3DML_ODR_20HZ            | 20.000Hz
LIS3DML_ODR_40HZ            | 40.000Hz
LIS3MDL_ODR_80HZ            | 80.000Hz

Output data rate [Hz] for LIS3MDL.

#### `enum `[`lis3mdl_scale_t`](#group__drivers__lis3mdl_1gaf30708ca82e18bc9e2e6ad31eb8a6227) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS3MDL_SCALE_4G            | +- 4 gauss
LIS3MDL_SCALE_8G            | +- 8 gauss
LIS3MDL_SCALE_12G            | +- 12 gauss
LIS3MDL_SCALE_16G            | +- 16 gauss

Scale [gauss] for LIS3MDL.

#### `enum `[`lis3mdl_op_t`](#group__drivers__lis3mdl_1ga7b7b204106fed91e9f18e26e5c2d37e1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LIS3MDL_OP_CONT_CONV            | Continous-conversion mode.
LIS3MDL_OP_SNGL_CONV            | Single-conversion mode.
LIS3MDL_OP_PDOWN            | Power-down mode.

Operating modes.

#### `public int `[`lis3mdl_init`](#group__drivers__lis3mdl_1gad9cc96d208da06ea7ee8d84c7393d269)`(`[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev,const `[`lis3mdl_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__params__t)` * params)` 

Initialize a new LIS3DML device.

#### Parameters
* `dev` device descriptor of LIS3MDL 

* `params` initialization parameters

#### Returns
0 on success 

#### Returns
-1 on error

#### `public void `[`lis3mdl_read_mag`](#group__drivers__lis3mdl_1ga8f0a50cbd0b213467ae9f4aeeaa743e9)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev,`[`lis3mdl_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__3d__data__t)` * data)` 

Reads the magnometer value of LIS3MDL.

#### Parameters
* `dev` device descriptor of LIS3MDL 

* `data` measured magnetometer data

#### `public void `[`lis3mdl_read_temp`](#group__drivers__lis3mdl_1ga6ee057e510c94918d3d9138a15150068)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev,int16_t * value)` 

Reads the temperature value of LIS3MDL.

#### Parameters
* `dev` device descriptor of LIS3MDL 

* `value` measured temperature in degree celsius

#### `public void `[`lis3mdl_enable`](#group__drivers__lis3mdl_1gab506501d0db174a2825577520c577044)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev)` 

Enable the LIS3MDL device.

#### Parameters
* `dev` device descriptor of LIS3MDL

#### `public void `[`lis3mdl_disable`](#group__drivers__lis3mdl_1ga9b466f1b93dd4294c45425084d82ad69)`(const `[`lis3mdl_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__t)` * dev)` 

Disable the LIS3MDL device.

#### Parameters
* `dev` device descriptor of LIS3MDL

# struct `lis3mdl_3d_data_t` 

3d data container of the LIS3MDL sensor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x_axis`](#structlis3mdl__3d__data__t_1ae7b599b57cd8f5512ec7543eaad9b2c1) | Magnometer data from x-axis.
`public int16_t `[`y_axis`](#structlis3mdl__3d__data__t_1a6d55b0e4f2d9f45d6703c6d84275f2cf) | Magnometer data from y_axis.
`public int16_t `[`z_axis`](#structlis3mdl__3d__data__t_1abb055aa9d7ab956c1ca3000de52dc3f6) | Magnometer data from z_axis.

## Members

#### `public int16_t `[`x_axis`](#structlis3mdl__3d__data__t_1ae7b599b57cd8f5512ec7543eaad9b2c1) 

Magnometer data from x-axis.

#### `public int16_t `[`y_axis`](#structlis3mdl__3d__data__t_1a6d55b0e4f2d9f45d6703c6d84275f2cf) 

Magnometer data from y_axis.

#### `public int16_t `[`z_axis`](#structlis3mdl__3d__data__t_1abb055aa9d7ab956c1ca3000de52dc3f6) 

Magnometer data from z_axis.

# struct `lis3mdl_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlis3mdl__params__t_1ab4110b27a99a5066e76852e8e673aa00) | I2C device.
`public uint8_t `[`addr`](#structlis3mdl__params__t_1a74d5a0431da66eb6c22e0910d57f980c) | Magnometer I2C address.
`public `[`lis3mdl_xy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1gadf9568a25c1594bfa79e2c70a7a79645)` `[`xy_mode`](#structlis3mdl__params__t_1afd42ae147d9b5a04c934ca8732f41e7c) | Power mode of x- and y-axis.
`public `[`lis3mdl_z_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1gad6e3001863eed095679257bf41d59521)` `[`z_mode`](#structlis3mdl__params__t_1a82e2040c2f241ef2bff11130591a4540) | Power mode of z-axis.
`public `[`lis3mdl_odr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1ga12924e31f0a107e10bbc5aff7e3d277b)` `[`odr`](#structlis3mdl__params__t_1a2c8ba458a6a76ae718f399a2774a18f7) | Output data rate.
`public `[`lis3mdl_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1gaf30708ca82e18bc9e2e6ad31eb8a6227)` `[`scale`](#structlis3mdl__params__t_1a2f7a941de684f0b165921034985a1528) | Scale factor.
`public `[`lis3mdl_op_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1ga7b7b204106fed91e9f18e26e5c2d37e1)` `[`op_mode`](#structlis3mdl__params__t_1ab03a852cd8b3a49a41d6aed9f24d7072) | Operation mode.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlis3mdl__params__t_1ab4110b27a99a5066e76852e8e673aa00) 

I2C device.

#### `public uint8_t `[`addr`](#structlis3mdl__params__t_1a74d5a0431da66eb6c22e0910d57f980c) 

Magnometer I2C address.

#### `public `[`lis3mdl_xy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1gadf9568a25c1594bfa79e2c70a7a79645)` `[`xy_mode`](#structlis3mdl__params__t_1afd42ae147d9b5a04c934ca8732f41e7c) 

Power mode of x- and y-axis.

#### `public `[`lis3mdl_z_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1gad6e3001863eed095679257bf41d59521)` `[`z_mode`](#structlis3mdl__params__t_1a82e2040c2f241ef2bff11130591a4540) 

Power mode of z-axis.

#### `public `[`lis3mdl_odr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1ga12924e31f0a107e10bbc5aff7e3d277b)` `[`odr`](#structlis3mdl__params__t_1a2c8ba458a6a76ae718f399a2774a18f7) 

Output data rate.

#### `public `[`lis3mdl_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1gaf30708ca82e18bc9e2e6ad31eb8a6227)` `[`scale`](#structlis3mdl__params__t_1a2f7a941de684f0b165921034985a1528) 

Scale factor.

#### `public `[`lis3mdl_op_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lis3mdl_1ga7b7b204106fed91e9f18e26e5c2d37e1)` `[`op_mode`](#structlis3mdl__params__t_1ab03a852cd8b3a49a41d6aed9f24d7072) 

Operation mode.

# struct `lis3mdl_t` 

Device descriptor for LIS3MDL sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lis3mdl_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__params__t)` `[`params`](#structlis3mdl__t_1af54cdc939e5514eeea073baca2659b7e) | Initialization parameters.

## Members

#### `public `[`lis3mdl_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lis3mdl.md#structlis3mdl__params__t)` `[`params`](#structlis3mdl__t_1af54cdc939e5514eeea073baca2659b7e) 

Initialization parameters.

