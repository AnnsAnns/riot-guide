---
title: api-drivers_lsm6dsxx.md
description: api-drivers_lsm6dsxx.md
---
# group `drivers_lsm6dsxx` 

Device driver for the LSM6DSXX 3D accelerometer/gyroscope.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@210`](#group__drivers__lsm6dsxx_1ga6a688c8c331cfa005f7431b606970203)            | Data rate settings.
`enum `[`@211`](#group__drivers__lsm6dsxx_1ga89fa9ed16122c5ba3a10393f7c0bc5ad)            | Decimation settings.
`enum `[`@212`](#group__drivers__lsm6dsxx_1gaa2baea0e4a061cf7eda1c9589fd7c4fe)            | Accelerometer full scale.
`enum `[`@213`](#group__drivers__lsm6dsxx_1gaf6d61abedd58f4942675f955a24a642b)            | Gyroscope full scale.
`enum `[`@214`](#group__drivers__lsm6dsxx_1gad1df9dc2600f2dda7e99d31c00fd73e0)            | Named return values.
`public int `[`lsm6dsxx_init`](#group__drivers__lsm6dsxx_1gacb53ec9acaa8946fe3e752538b7ae533)`(`[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,const `[`lsm6dsxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__params__t)` * params)`            | Initialize a LSM6DSXX device.
`public int `[`lsm6dsxx_read_acc`](#group__drivers__lsm6dsxx_1ga9b7831a908fd662ff36b136ae029826c)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,`[`lsm6dsxx_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__3d__data__t)` * data)`            | Read accelerometer data.
`public int `[`lsm6dsxx_read_gyro`](#group__drivers__lsm6dsxx_1gad63671a9ef82d126c530d2352b32b986)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,`[`lsm6dsxx_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__3d__data__t)` * data)`            | Read gyroscope data.
`public int `[`lsm6dsxx_read_temp`](#group__drivers__lsm6dsxx_1gae3619e4bf8bfe107e363bb5efa2b41ea)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,int16_t * data)`            | Read temperature data.
`public int `[`lsm6dsxx_acc_power_down`](#group__drivers__lsm6dsxx_1ga20dfa5811c1d66ab35837234327dd613)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)`            | Power down accelerometer.
`public int `[`lsm6dsxx_gyro_power_down`](#group__drivers__lsm6dsxx_1ga406eacf6c99da1f7df824ac36aa6c0c8)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)`            | Power down gyroscope.
`public int `[`lsm6dsxx_acc_power_up`](#group__drivers__lsm6dsxx_1ga717414e55143e4ab4ea67843050987ec)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)`            | Power up accelerometer.
`public int `[`lsm6dsxx_gyro_power_up`](#group__drivers__lsm6dsxx_1ga40ff4bd5cca32bdf6df6d1237b6b3491)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)`            | Power up gyroscope.
`struct `[`lsm6dsxx_params_t`](#structlsm6dsxx__params__t) | LSM6DSXX driver parameters.
`struct `[`lsm6dsxx_t`](#structlsm6dsxx__t) | LSM6DSXX device descriptor.
`struct `[`lsm6dsxx_3d_data_t`](#structlsm6dsxx__3d__data__t) | 3D output data

## Members

#### `enum `[`@210`](#group__drivers__lsm6dsxx_1ga6a688c8c331cfa005f7431b606970203) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM6DSXX_DATA_RATE_POWER_DOWN            | 
LSM6DSXX_DATA_RATE_1_6HZ            | 
LSM6DSXX_DATA_RATE_12_5HZ            | 
LSM6DSXX_DATA_RATE_26HZ            | 
LSM6DSXX_DATA_RATE_52HZ            | 
LSM6DSXX_DATA_RATE_104HZ            | 
LSM6DSXX_DATA_RATE_208HZ            | 
LSM6DSXX_DATA_RATE_416HZ            | 
LSM6DSXX_DATA_RATE_833HZ            | 
LSM6DSXX_DATA_RATE_1_66KHZ            | 
LSM6DSXX_DATA_RATE_3_33KHZ            | 
LSM6DSXX_DATA_RATE_6_66KHZ            | 

Data rate settings.

#### `enum `[`@211`](#group__drivers__lsm6dsxx_1ga89fa9ed16122c5ba3a10393f7c0bc5ad) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM6DSXX_DECIMATION_NOT_IN_FIFO            | 
LSM6DSXX_DECIMATION_NO            | 
LSM6DSXX_DECIMATION_2            | 
LSM6DSXX_DECIMATION_3            | 
LSM6DSXX_DECIMATION_4            | 
LSM6DSXX_DECIMATION_8            | 
LSM6DSXX_DECIMATION_16            | 
LSM6DSXX_DECIMATION_32            | 

Decimation settings.

#### `enum `[`@212`](#group__drivers__lsm6dsxx_1gaa2baea0e4a061cf7eda1c9589fd7c4fe) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM6DSXX_ACC_FS_2G            | 
LSM6DSXX_ACC_FS_16G            | 
LSM6DSXX_ACC_FS_4G            | 
LSM6DSXX_ACC_FS_8G            | 
LSM6DSXX_ACC_FS_MAX            | 

Accelerometer full scale.

#### `enum `[`@213`](#group__drivers__lsm6dsxx_1gaf6d61abedd58f4942675f955a24a642b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM6DSXX_GYRO_FS_245DPS            | 
LSM6DSXX_GYRO_FS_500DPS            | 
LSM6DSXX_GYRO_FS_1000DPS            | 
LSM6DSXX_GYRO_FS_2000DPS            | 
LSM6DSXX_GYRO_FS_MAX            | 

Gyroscope full scale.

#### `enum `[`@214`](#group__drivers__lsm6dsxx_1gad1df9dc2600f2dda7e99d31c00fd73e0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM6DSXX_OK            | all good
LSM6DSXX_ERROR_BUS            | I2C bus error.
LSM6DSXX_ERROR_CNF            | Config error.
LSM6DSXX_ERROR_DEV            | device error

Named return values.

#### `public int `[`lsm6dsxx_init`](#group__drivers__lsm6dsxx_1gacb53ec9acaa8946fe3e752538b7ae533)`(`[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,const `[`lsm6dsxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__params__t)` * params)` 

Initialize a LSM6DSXX device.

#### Parameters
* `dev` device to initialize 

* `params` driver parameters

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

#### `public int `[`lsm6dsxx_read_acc`](#group__drivers__lsm6dsxx_1ga9b7831a908fd662ff36b136ae029826c)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,`[`lsm6dsxx_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__3d__data__t)` * data)` 

Read accelerometer data.

#### Parameters
* `dev` device to read 

* `data` accelerometer values

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

#### `public int `[`lsm6dsxx_read_gyro`](#group__drivers__lsm6dsxx_1gad63671a9ef82d126c530d2352b32b986)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,`[`lsm6dsxx_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__3d__data__t)` * data)` 

Read gyroscope data.

#### Parameters
* `dev` device to read 

* `data` gyroscope values

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

#### `public int `[`lsm6dsxx_read_temp`](#group__drivers__lsm6dsxx_1gae3619e4bf8bfe107e363bb5efa2b41ea)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev,int16_t * data)` 

Read temperature data.

To avoid floating point data types but still provide high resolution for temperature readings, resulting values are scale by factor 100.

#### Parameters
* `dev` device to read 

* `data` temperature value, in °C x 100

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

#### `public int `[`lsm6dsxx_acc_power_down`](#group__drivers__lsm6dsxx_1ga20dfa5811c1d66ab35837234327dd613)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)` 

Power down accelerometer.

#### Parameters
* `dev` device to power down

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

#### `public int `[`lsm6dsxx_gyro_power_down`](#group__drivers__lsm6dsxx_1ga406eacf6c99da1f7df824ac36aa6c0c8)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)` 

Power down gyroscope.

#### Parameters
* `dev` device to power down

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

#### `public int `[`lsm6dsxx_acc_power_up`](#group__drivers__lsm6dsxx_1ga717414e55143e4ab4ea67843050987ec)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)` 

Power up accelerometer.

#### Parameters
* `dev` device to power up

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

#### `public int `[`lsm6dsxx_gyro_power_up`](#group__drivers__lsm6dsxx_1ga40ff4bd5cca32bdf6df6d1237b6b3491)`(const `[`lsm6dsxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__t)` * dev)` 

Power up gyroscope.

#### Parameters
* `dev` device to power up

#### Returns
LSM6DSXX_OK on success 

#### Returns
< 0 on error

# struct `lsm6dsxx_params_t` 

LSM6DSXX driver parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlsm6dsxx__params__t_1aa0a1b13f3d85e1cbc27541d6b86f79ec) | i2c bus
`public uint8_t `[`addr`](#structlsm6dsxx__params__t_1ad2893bd6c0e6a89b9ac1da9615778fc8) | i2c address
`public uint8_t `[`acc_odr`](#structlsm6dsxx__params__t_1a515da68cb3d3278a65fa10f9ae03d12b) | accelerometer output data rate
`public uint8_t `[`gyro_odr`](#structlsm6dsxx__params__t_1a75ef40290f83e938eb22461c548f15af) | gyroscope output data rate
`public uint8_t `[`acc_fs`](#structlsm6dsxx__params__t_1a135db3f1003c4f7ba662cc0a3d1b0bcd) | accelerometer full scale
`public uint8_t `[`gyro_fs`](#structlsm6dsxx__params__t_1acc14e7c898e8753e264fdd2a73682c14) | gyroscope full scale
`public uint8_t `[`acc_decimation`](#structlsm6dsxx__params__t_1ad55e7be409c608c01b48feb0aece18de) | accelerometer decimation
`public uint8_t `[`gyro_decimation`](#structlsm6dsxx__params__t_1aa83340365637ed7918337c64b49c3994) | gyroscope decimation

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlsm6dsxx__params__t_1aa0a1b13f3d85e1cbc27541d6b86f79ec) 

i2c bus

#### `public uint8_t `[`addr`](#structlsm6dsxx__params__t_1ad2893bd6c0e6a89b9ac1da9615778fc8) 

i2c address

#### `public uint8_t `[`acc_odr`](#structlsm6dsxx__params__t_1a515da68cb3d3278a65fa10f9ae03d12b) 

accelerometer output data rate

#### `public uint8_t `[`gyro_odr`](#structlsm6dsxx__params__t_1a75ef40290f83e938eb22461c548f15af) 

gyroscope output data rate

#### `public uint8_t `[`acc_fs`](#structlsm6dsxx__params__t_1a135db3f1003c4f7ba662cc0a3d1b0bcd) 

accelerometer full scale

#### `public uint8_t `[`gyro_fs`](#structlsm6dsxx__params__t_1acc14e7c898e8753e264fdd2a73682c14) 

gyroscope full scale

#### `public uint8_t `[`acc_decimation`](#structlsm6dsxx__params__t_1ad55e7be409c608c01b48feb0aece18de) 

accelerometer decimation

#### `public uint8_t `[`gyro_decimation`](#structlsm6dsxx__params__t_1aa83340365637ed7918337c64b49c3994) 

gyroscope decimation

# struct `lsm6dsxx_t` 

LSM6DSXX device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lsm6dsxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__params__t)` `[`params`](#structlsm6dsxx__t_1a7c3809ad544294dccd527f043a06d933) | driver parameters
`public uint8_t `[`temperature_scaling_factor`](#structlsm6dsxx__t_1a156e440a109257e1a33d247384fdc5aa) | temperature scaling factor

## Members

#### `public `[`lsm6dsxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm6dsxx.md#structlsm6dsxx__params__t)` `[`params`](#structlsm6dsxx__t_1a7c3809ad544294dccd527f043a06d933) 

driver parameters

#### `public uint8_t `[`temperature_scaling_factor`](#structlsm6dsxx__t_1a156e440a109257e1a33d247384fdc5aa) 

temperature scaling factor

# struct `lsm6dsxx_3d_data_t` 

3D output data

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structlsm6dsxx__3d__data__t_1a1e8867278090806d8ce124813995f875) | X axis.
`public int16_t `[`y`](#structlsm6dsxx__3d__data__t_1a4aa47863e93211d4823467f8fb0e5df2) | Y axis.
`public int16_t `[`z`](#structlsm6dsxx__3d__data__t_1ab06ef12723fd3d98dc7277ccab2cc155) | Z axis.

## Members

#### `public int16_t `[`x`](#structlsm6dsxx__3d__data__t_1a1e8867278090806d8ce124813995f875) 

X axis.

#### `public int16_t `[`y`](#structlsm6dsxx__3d__data__t_1a4aa47863e93211d4823467f8fb0e5df2) 

Y axis.

#### `public int16_t `[`z`](#structlsm6dsxx__3d__data__t_1ab06ef12723fd3d98dc7277ccab2cc155) 

Z axis.

