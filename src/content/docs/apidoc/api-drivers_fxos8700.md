---
title: api-drivers_fxos8700.md
description: api-drivers_fxos8700.md
---
# group `drivers_fxos8700` 

Driver for the FXOS8700 3-axis accelerometer/magnetometer.

The connection between the MCU and the FXOS8700 is based on the I2C-interface.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@177`](#group__drivers__fxos8700_1ga755c96456945ef03bae544705e8cca64)            | FXOS8700 specific return values.
`public int `[`fxos8700_init`](#group__drivers__fxos8700_1gac022ca08d06fd59b6d7cf6f765c71c60)`(`[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev,const `[`fxos8700_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__params__t)` * params)`            | Initialize an FXOS8700 device.
`public int `[`fxos8700_set_active`](#group__drivers__fxos8700_1ga4928ed1db97707e3585ece52f685ac51)`(const `[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev)`            | Convenience function for turning on the FXOS8700.
`public int `[`fxos8700_set_idle`](#group__drivers__fxos8700_1gad5db20e30adffe39910ce91e044691b6)`(const `[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev)`            | Convenience function for turning off the FXOS8700.
`public int `[`fxos8700_read`](#group__drivers__fxos8700_1ga09e5b1d85b4d7177e78e34e239d1e3f3)`(const `[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * acc,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * mag)`            | Convenience function for reading acceleration and magnetic field.
`public int `[`fxos8700_read_cached`](#group__drivers__fxos8700_1ga7114bda84b0cc418c9cf478c76a4a2e8)`(const void * dev,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * acc,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * mag)`            | Extended read function including caching capability.
`struct `[`fxos8700_params_t`](#structfxos8700__params__t) | Parameters needed for device initialization.
`struct `[`fxos8700_measurement_t`](#structfxos8700__measurement__t) | Individual 3-axis measurement.
`struct `[`fxos8700_t`](#structfxos8700__t) | Device descriptor for a FXOS8700 device.

## Members

#### `enum `[`@177`](#group__drivers__fxos8700_1ga755c96456945ef03bae544705e8cca64) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
FXOS8700_OK            | everything went as expected
FXOS8700_ADDRERR            | no FXOS8700 device found on the bus
FXOS8700_NOBUS            | errors while initializing the I2C bus
FXOS8700_NODEV            | no FXOS8700 device found on the bus
FXOS8700_BUSERR            | error during I2C communication

FXOS8700 specific return values.

#### `public int `[`fxos8700_init`](#group__drivers__fxos8700_1gac022ca08d06fd59b6d7cf6f765c71c60)`(`[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev,const `[`fxos8700_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__params__t)` * params)` 

Initialize an FXOS8700 device.

#### Parameters
* `dev` device descriptor 

* `params` parameters for device

#### Returns
FXOS8700_OK on success 

#### Returns
FXOS8700_NOBUS on I2C initialization error 

#### Returns
FXOS8700_BUSERR on I2C communication error 

#### Returns
FXOS8700_ADDRERR on invalid address 

#### Returns
FXOS8700_NODEV if no FXOS8700 device found on bus

#### `public int `[`fxos8700_set_active`](#group__drivers__fxos8700_1ga4928ed1db97707e3585ece52f685ac51)`(const `[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev)` 

Convenience function for turning on the FXOS8700.

This function will trigger a new conversion, wait for the conversion to be finished and the get the results from the device.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
FXOS8700_OK on success 

#### Returns
FXOS8700_BUSERR on I2C communication failures

#### `public int `[`fxos8700_set_idle`](#group__drivers__fxos8700_1gad5db20e30adffe39910ce91e044691b6)`(const `[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev)` 

Convenience function for turning off the FXOS8700.

This function will trigger a new conversion, wait for the conversion to be finished and the get the results from the device.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
FXOS8700_OK on success 

#### Returns
FXOS8700_BUSERR on I2C communication failures

#### `public int `[`fxos8700_read`](#group__drivers__fxos8700_1ga09e5b1d85b4d7177e78e34e239d1e3f3)`(const `[`fxos8700_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__t)` * dev,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * acc,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * mag)` 

Convenience function for reading acceleration and magnetic field.

This function will trigger a new conversion, wait for the conversion to be finished and the get the results from the device.

#### Parameters
* `dev` device descriptor of sensor 

* `acc` 3-axis acceleration [in milli grativy acceleration (mg) ] 

* `mag` 3-axis magnetic field [in degree milli Gauss (mGs) ]

#### Returns
FXOS8700_OK on success 

#### Returns
FXOS8700_BUSERR on I2C communication failures

#### `public int `[`fxos8700_read_cached`](#group__drivers__fxos8700_1ga7114bda84b0cc418c9cf478c76a4a2e8)`(const void * dev,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * acc,`[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` * mag)` 

Extended read function including caching capability.

This function will return cached values if they are within the sampling period (FXOS8700_RENEW_INTERVAL), or will trigger a new conversion, wait for the conversion to be finished and the get the results from the device.

#### Parameters
* `dev` device descriptor of sensor 

* `acc` 3-axis acceleration [in milli grativy acceleration (mg) ] 

* `mag` 3-axis magnetic field [in degree milli Gauss (mGs) ]

#### Returns
FXOS8700_OK on success 

#### Returns
FXOS8700_BUSERR on I2C communication failures

# struct `fxos8700_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structfxos8700__params__t_1ab2eb5783aae3ad9200fa69fb1fb807b4) | I2C device that sensor is connected to.
`public uint8_t `[`addr`](#structfxos8700__params__t_1aa4e747b93b6dd00b4cce871d1389563e) | I2C address of this particular sensor.
`public uint8_t `[`acc_range`](#structfxos8700__params__t_1a1603509cea9a3469967668c533821385) | Accelerator full-scale range.
`public uint32_t `[`renew_interval`](#structfxos8700__params__t_1a376bc64f0161a84226a5b034741bf1f3) | Interval for cache renewal.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structfxos8700__params__t_1ab2eb5783aae3ad9200fa69fb1fb807b4) 

I2C device that sensor is connected to.

#### `public uint8_t `[`addr`](#structfxos8700__params__t_1aa4e747b93b6dd00b4cce871d1389563e) 

I2C address of this particular sensor.

#### `public uint8_t `[`acc_range`](#structfxos8700__params__t_1a1603509cea9a3469967668c533821385) 

Accelerator full-scale range.

#### `public uint32_t `[`renew_interval`](#structfxos8700__params__t_1a376bc64f0161a84226a5b034741bf1f3) 

Interval for cache renewal.

# struct `fxos8700_measurement_t` 

Individual 3-axis measurement.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structfxos8700__measurement__t_1a82a2af7f9bde262d85720e181e63cf38) | x axis of 3-axis measurement
`public int16_t `[`y`](#structfxos8700__measurement__t_1a437fbc98b29ac5b61503166a87fd8ed2) | y axis of 3-axis measurement
`public int16_t `[`z`](#structfxos8700__measurement__t_1afa9b2fbecdca7dba06484a707ad50348) | z axis of 3-axis measurement

## Members

#### `public int16_t `[`x`](#structfxos8700__measurement__t_1a82a2af7f9bde262d85720e181e63cf38) 

x axis of 3-axis measurement

#### `public int16_t `[`y`](#structfxos8700__measurement__t_1a437fbc98b29ac5b61503166a87fd8ed2) 

y axis of 3-axis measurement

#### `public int16_t `[`z`](#structfxos8700__measurement__t_1afa9b2fbecdca7dba06484a707ad50348) 

z axis of 3-axis measurement

# struct `fxos8700_t` 

Device descriptor for a FXOS8700 device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`config`](#structfxos8700__t_1ac071db517f378b318a250dcc978c0fdc) | sensor configuration including active mode
`public `[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` `[`acc_cached`](#structfxos8700__t_1a5b05f27031567dba85ee97f9ca2dc619) | cached 3-axis acceleration
`public `[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` `[`mag_cached`](#structfxos8700__t_1a1b6761e0a91d4fd931f0e237dd8f22a9) | cached 3-axis magnetic field
`public uint32_t `[`last_read_time`](#structfxos8700__t_1affaf5a87677ec4b728d249a3582e4475) | last time when cached data was refreshed
`public `[`fxos8700_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__params__t)` `[`p`](#structfxos8700__t_1a3638b95497496ca8cb66b9afb740fb52) | configuration parameters

## Members

#### `public uint8_t `[`config`](#structfxos8700__t_1ac071db517f378b318a250dcc978c0fdc) 

sensor configuration including active mode

#### `public `[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` `[`acc_cached`](#structfxos8700__t_1a5b05f27031567dba85ee97f9ca2dc619) 

cached 3-axis acceleration

#### `public `[`fxos8700_measurement_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__measurement__t)` `[`mag_cached`](#structfxos8700__t_1a1b6761e0a91d4fd931f0e237dd8f22a9) 

cached 3-axis magnetic field

#### `public uint32_t `[`last_read_time`](#structfxos8700__t_1affaf5a87677ec4b728d249a3582e4475) 

last time when cached data was refreshed

#### `public `[`fxos8700_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_fxos8700.md#structfxos8700__params__t)` `[`p`](#structfxos8700__t_1a3638b95497496ca8cb66b9afb740fb52) 

configuration parameters

