---
title: api-drivers_sht2x.md
description: api-drivers_sht2x.md
---
# group `drivers_sht2x` 

Device driver interface for the SHT2x sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@261`](#group__drivers__sht2x_1gaff44cf33e83896b8e5102305d23db5ac)            | Status and error return codes.
`enum `[`sht2x_res_t`](#group__drivers__sht2x_1ga572a399632f2da92abbfad2793013028)            | Available resolutions.
`enum `[`sht2x_measure_mode_t`](#group__drivers__sht2x_1ga017e4f4214b458cb0f795f018157ade0)            | Available Measuring modes.
`public int `[`sht2x_init`](#group__drivers__sht2x_1gad37d79a1eb817fdc38cd3d57dcea2f37)`(`[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,const `[`sht2x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__params__t)` * params)`            | Initialize the given SHT2X device.
`public int `[`sht2x_reset`](#group__drivers__sht2x_1ga9cb66c3c3d7cd6f75e1ac1607cd982a4)`(`[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev)`            | Reset the SHT2X device.
`public int16_t `[`sht2x_read_temperature`](#group__drivers__sht2x_1ga34e1d1c815f0d345bec8acf63236eb83)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev)`            | Read temperature value from the given SHT2X device, returned in centi °C.
`public uint16_t `[`sht2x_read_humidity`](#group__drivers__sht2x_1ga5295ca39adbe22abb34b5eb006eb91ca)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev)`            | Read humidity value from the given SHT2X device, returned in centi RH.
`public int `[`sht2x_read_ident`](#group__drivers__sht2x_1gac9abdaab2edd112b92cc4de2ef458772)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,uint8_t * buffer,size_t buflen)`            | Read identification code from the given SHT2X device.
`public int `[`sht2x_read_userreg`](#group__drivers__sht2x_1ga3bb57efe253bf90a2e21220ddca25a6b)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,uint8_t * userreg)`            | Read User Register from the given SHT2X device.
`public int `[`sht2x_write_userreg`](#group__drivers__sht2x_1ga801adddd9e45f81f5a252217a19e4516)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,uint8_t userreg)`            | Write User Register to the given SHT2X device.
`struct `[`sht2x_params_t`](#structsht2x__params__t) | Device initialization parameters.
`struct `[`sht2x_t`](#structsht2x__t) | Device descriptor for the SHT2X sensor.

## Members

#### `enum `[`@261`](#group__drivers__sht2x_1gaff44cf33e83896b8e5102305d23db5ac) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SHT2X_OK            | everything was fine
SHT2X_ERR_I2C            | error initializing the I2C bus
SHT2X_ERR_NODEV            | did not detect SHT2x
SHT2X_ERR_NOCAL            | could not read calibration data
SHT2X_ERR_I2C_READ            | I2C read error.
SHT2X_ERR_TIMEDOUT            | timed out
SHT2X_ERR_CRC            | CRC error.
SHT2X_ERR_USERREG            | cannot write User Reg
SHT2X_ERR_RES            | invalid resolution
SHT2X_ERR_OTHER            | fatal error

Status and error return codes.

#### `enum `[`sht2x_res_t`](#group__drivers__sht2x_1ga572a399632f2da92abbfad2793013028) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SHT2X_RES_12_14BIT            | RH=12bit, T=14bit.
SHT2X_RES_8_12BIT            | RH= 8bit, T=12bit.
SHT2X_RES_10_13BIT            | RH=10bit, T=13bit.
SHT2X_RES_11_11BIT            | RH=11bit, T=11bit.

Available resolutions.

The values represent bits 7 and 0 in the User Register

#### `enum `[`sht2x_measure_mode_t`](#group__drivers__sht2x_1ga017e4f4214b458cb0f795f018157ade0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SHT2X_MEASURE_MODE_HOLD            | trigger measurement, hold master
SHT2X_MEASURE_MODE_NO_HOLD            | trigger measurement, no hold master (i.e.

Available Measuring modes.

#### `public int `[`sht2x_init`](#group__drivers__sht2x_1gad37d79a1eb817fdc38cd3d57dcea2f37)`(`[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,const `[`sht2x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__params__t)` * params)` 

Initialize the given SHT2X device.

#### Parameters
* `dev` Initialized device descriptor of SHT2X device 

* `params` The parameters for the SHT2x device

#### Returns
SHT2X_OK on success 

#### Returns
SHT2X_ERR_I2C if given I2C is not enabled in board config 

#### Returns
SHT2X_ERR_RES invalid resolution 

#### Returns
SHT2X_ERR_USERREG error writing User Register 

#### Returns
errors returned by sht2x_write_userreg or sht2x_read_userreg

#### `public int `[`sht2x_reset`](#group__drivers__sht2x_1ga9cb66c3c3d7cd6f75e1ac1607cd982a4)`(`[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev)` 

Reset the SHT2X device.

#### Parameters
* `dev` Device descriptor of SHT2X device to read from

#### Returns
SHT2X_OK on success 

#### Returns
SHT2X_ERR_I2C if given I2C is not enabled in board config

#### `public int16_t `[`sht2x_read_temperature`](#group__drivers__sht2x_1ga34e1d1c815f0d345bec8acf63236eb83)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev)` 

Read temperature value from the given SHT2X device, returned in centi °C.

Notice that this function will sleep (max 85 ms) when the *measure_mode* is set to *SHT2X_MEASURE_MODE_NO_HOLD*.

#### Parameters
* `dev` Device descriptor of SHT2X device to read from

#### Returns
The temperature in centi Celsius. In case of an error it returns INT16_MIN.

#### `public uint16_t `[`sht2x_read_humidity`](#group__drivers__sht2x_1ga5295ca39adbe22abb34b5eb006eb91ca)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev)` 

Read humidity value from the given SHT2X device, returned in centi RH.

Notice that this function will sleep (max 29 ms) when the *measure_mode* is set to *SHT2X_MEASURE_MODE_NO_HOLD*.

#### Parameters
* `dev` Device descriptor of SHT2X device to read from

#### Returns
Humidity in centi RH (i.e. the percentage times 100). In case of an error it returns 0 (i.e. an unrealistic value).

#### `public int `[`sht2x_read_ident`](#group__drivers__sht2x_1gac9abdaab2edd112b92cc4de2ef458772)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,uint8_t * buffer,size_t buflen)` 

Read identification code from the given SHT2X device.

#### Parameters
* `dev` Device descriptor of SHT2X device to read from 

* `buffer` Buffer to write the identification code to 

* `buflen` The size of `buffer`

#### Returns
>= 0 on success, number of bytes read 

#### Returns
SHT2X_ERR_CRC in case of a CRC mismatch 

#### Returns
<0 errors returned by i2c_read_regs

#### `public int `[`sht2x_read_userreg`](#group__drivers__sht2x_1ga3bb57efe253bf90a2e21220ddca25a6b)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,uint8_t * userreg)` 

Read User Register from the given SHT2X device.

#### Parameters
* `dev` Device descriptor of SHT2X device to read from 

* `userreg` The value of User Register

#### Returns
SHT2X_OK on success 

#### Returns
SHT2X_ERR_I2C if given I2C is not enabled in board config 

#### Returns
SHT2X_ERR_OTHER if NULL pointer was given for `buffer`

#### `public int `[`sht2x_write_userreg`](#group__drivers__sht2x_1ga801adddd9e45f81f5a252217a19e4516)`(const `[`sht2x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__t)` * dev,uint8_t userreg)` 

Write User Register to the given SHT2X device.

#### Parameters
* `dev` Device descriptor of SHT2X device to read from 

* `userreg` The value of User Register

#### Returns
SHT2X_OK on success 

#### Returns
SHT2X_ERR_I2C if given I2C is not enabled in board config

# struct `sht2x_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsht2x__params__t_1a5e35a7acc264dc6e9b47509dc654100f) | I2C device
`public uint8_t `[`i2c_addr`](#structsht2x__params__t_1aa8eb36200579b39074c7e349866b4295) | I2C address
`public `[`sht2x_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht2x_1ga572a399632f2da92abbfad2793013028)` `[`resolution`](#structsht2x__params__t_1af61e652706ed7229de6f0d76105b12a0) | resolution bits RH/temp
`public `[`sht2x_measure_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht2x_1ga017e4f4214b458cb0f795f018157ade0)` `[`measure_mode`](#structsht2x__params__t_1a21c3dae2b220a50bcd61538217e40ee8) | measurement mode used
`public bool `[`is_crc_enabled`](#structsht2x__params__t_1a37cec72a211d73c75d45cb9102306e3f) | do CRC or not

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsht2x__params__t_1a5e35a7acc264dc6e9b47509dc654100f) 

I2C device

#### `public uint8_t `[`i2c_addr`](#structsht2x__params__t_1aa8eb36200579b39074c7e349866b4295) 

I2C address

#### `public `[`sht2x_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht2x_1ga572a399632f2da92abbfad2793013028)` `[`resolution`](#structsht2x__params__t_1af61e652706ed7229de6f0d76105b12a0) 

resolution bits RH/temp

#### `public `[`sht2x_measure_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht2x_1ga017e4f4214b458cb0f795f018157ade0)` `[`measure_mode`](#structsht2x__params__t_1a21c3dae2b220a50bcd61538217e40ee8) 

measurement mode used

#### `public bool `[`is_crc_enabled`](#structsht2x__params__t_1a37cec72a211d73c75d45cb9102306e3f) 

do CRC or not

# struct `sht2x_t` 

Device descriptor for the SHT2X sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sht2x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__params__t)` `[`params`](#structsht2x__t_1ae9dc956c35a2886a163d5ccabbd5acb8) | Device Parameters.

## Members

#### `public `[`sht2x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht2x.md#structsht2x__params__t)` `[`params`](#structsht2x__t_1ae9dc956c35a2886a163d5ccabbd5acb8) 

Device Parameters.

