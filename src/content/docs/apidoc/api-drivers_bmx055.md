---
title: api-drivers_bmx055.md
description: api-drivers_bmx055.md
---
# group `drivers_bmx055` 

Device driver for the Bosch BMX055 9-axis sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@164`](#group__drivers__bmx055_1gac72f7803394f05658258f8a2b76f53aa)            | Status and error return codes.
`enum `[`bmx055_mag_rate_t`](#group__drivers__bmx055_1ga77a5b0018b451dc09ff04d0ee658bdc0)            | Datarate for Magnetometer.
`enum `[`bmx055_acc_range_t`](#group__drivers__bmx055_1ga411daa33422a4d555cf28c1969d67ad2)            | Range for Accelerometer.
`enum `[`bmx055_gyro_scale_t`](#group__drivers__bmx055_1ga13216a6a0deff8e2be640c8af9489ad4)            | Measurement scale for the gyro.
`public int `[`bmx055_init`](#group__drivers__bmx055_1ga5e638a85ce3e1d2c1644240e8ab19a90)`(`[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,const `[`bmx055_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__params__t)` * params)`            | Initialize modules magnetometer, accelerometer, gyroscope.
`public int `[`bmx055_mag_read`](#group__drivers__bmx055_1gaa27beae22e2c1f4217f2008d1b3e3378)`(const `[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,int16_t * data)`            | Read magnetic field value in Gauss per second from magnetometer.
`public int `[`bmx055_acc_read`](#group__drivers__bmx055_1ga4b7e865f94f058f4e2574ef6cbec9586)`(const `[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,int16_t * data)`            | Read acceleration value in g from accelerometer.
`public int `[`bmx055_gyro_read`](#group__drivers__bmx055_1ga0b668fe89e9282acaa2d5546b0f8a330)`(const `[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,int16_t * data)`            | Read angular speed value in degree per second from gyroscope.
`struct `[`bmx055_params_t`](#structbmx055__params__t) | Data structure holding the device parameters needed for initialization.
`struct `[`bmx055_t`](#structbmx055__t) | Device descriptor for BMX055 sensors.

## Members

#### `enum `[`@164`](#group__drivers__bmx055_1gac72f7803394f05658258f8a2b76f53aa) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX055_OK            | exit without error
BMX055_NOBUS            | cannot connect to module on i2c bus
BMX055_NODEV            | cannot read any data from module
BMX055_NOREAD            | cannot read data from module
BMX055_NOWRITE            | cannot write data to module
BMX055_NOTREADY            | no new data ready for reading

Status and error return codes.

#### `enum `[`bmx055_mag_rate_t`](#group__drivers__bmx055_1ga77a5b0018b451dc09ff04d0ee658bdc0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX055_MAG_DRATE_DEFAULT            | output data rate: 10 Hz
BMX055_MAG_DRATE_02HZ            | output data rate: 2 Hz
BMX055_MAG_DRATE_06HZ            | output data rate: 6 Hz
BMX055_MAG_DRATE_08HZ            | output data rate: 8 Hz
BMX055_MAG_DRATE_15HZ            | output data rate: 15 Hz
BMX055_MAG_DRATE_20HZ            | output data rate: 20 Hz
BMX055_MAG_DRATE_25HZ            | output data rate: 25 Hz
BMX055_MAG_DRATE_30HZ            | output data rate: 30 Hz

Datarate for Magnetometer.

#### `enum `[`bmx055_acc_range_t`](#group__drivers__bmx055_1ga411daa33422a4d555cf28c1969d67ad2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX055_ACC_RANGE_2G            | range: 2g
BMX055_ACC_RANGE_4G            | range: 4g
BMX055_ACC_RANGE_8G            | range: 8g
BMX055_ACC_RANGE_16G            | range: 16g

Range for Accelerometer.

#### `enum `[`bmx055_gyro_scale_t`](#group__drivers__bmx055_1ga13216a6a0deff8e2be640c8af9489ad4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX055_GYRO_SCALE_2000DPS            | scale: 2000 degree per second
BMX055_GYRO_SCALE_1000DPS            | scale: 1000 degree per second
BMX055_GYRO_SCALE_0500DPS            | scale: 500 degree per second
BMX055_GYRO_SCALE_0250DPS            | scale: 250 degree per second
BMX055_GYRO_SCALE_0125DPS            | scale: 125 degree per second

Measurement scale for the gyro.

#### `public int `[`bmx055_init`](#group__drivers__bmx055_1ga5e638a85ce3e1d2c1644240e8ab19a90)`(`[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,const `[`bmx055_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__params__t)` * params)` 

Initialize modules magnetometer, accelerometer, gyroscope.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` default parameter values

#### Returns
BMX055_OK on success 

#### Returns
BMX055_NOBUS if i2C connection can not be establish 

#### Returns
BMX055_NODEV if the register of a module can not be read 

#### Returns
BMX055_NOWRITE if a register can not be written

#### `public int `[`bmx055_mag_read`](#group__drivers__bmx055_1gaa27beae22e2c1f4217f2008d1b3e3378)`(const `[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,int16_t * data)` 

Read magnetic field value in Gauss per second from magnetometer.

#### Parameters
* `dev` device descriptor of magnetometer 

* `data` result vector in Gs per axis

#### Returns
BMX055_OK on success 

#### Returns
BMX055_NOREAD if reading mag data is not possible 

#### Returns
BMX055_NOTRDY if no new data is available

#### `public int `[`bmx055_acc_read`](#group__drivers__bmx055_1ga4b7e865f94f058f4e2574ef6cbec9586)`(const `[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,int16_t * data)` 

Read acceleration value in g from accelerometer.

#### Parameters
* `dev` device descriptor of accelerometer 

* `data` result vector in g per axis

#### Returns
BMX055_OK on success 

#### Returns
BMX055_NOREAD if reading acc data is not possible 

#### Returns
BMX055_NOTRDY if no new data is available

#### `public int `[`bmx055_gyro_read`](#group__drivers__bmx055_1ga0b668fe89e9282acaa2d5546b0f8a330)`(const `[`bmx055_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__t)` * dev,int16_t * data)` 

Read angular speed value in degree per second from gyroscope.

The data of steady axis deviate from the expected values while moving the sensor in one of the other axis. Hence reading data for all axis at once may not always give the expected results.

#### Parameters
* `dev` device descriptor of gyroscope 

* `data` result vector in dps per axis

#### Returns
BMX055_OK on success 

#### Returns
BMX055_NOREAD if reading gyro data is not possible

# struct `bmx055_params_t` 

Data structure holding the device parameters needed for initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbmx055__params__t_1abc4b8c310ae974abc4314a60494fa639) | I2C bus the device is connected to.
`public uint8_t `[`addr_mag`](#structbmx055__params__t_1a7fa2240ca88c850f9786f6ed15b69ffb) | the magnetometer address on that bus
`public uint8_t `[`addr_acc`](#structbmx055__params__t_1a440b3b221258f9a7d790e5a0d461ab45) | the accelerometer address on that bus
`public uint8_t `[`addr_gyro`](#structbmx055__params__t_1a8be0a37d87e6bfaeeb9f4121e5c034ca) | the gyroscope address on that bus
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1_pin`](#structbmx055__params__t_1a5713877b4ac07b79205f048a27bbd165) | GPIO pin connected to the INT1 line.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2_pin`](#structbmx055__params__t_1aa9e1a0f1df1a1ab3e638aecc68c31058) | GPIO pin connected to the INT2 line.
`public uint8_t `[`mag_rate`](#structbmx055__params__t_1a37f7f2fd500d0d76b862f3b7eb79bae5) | datarate of magnetometer
`public uint8_t `[`acc_range`](#structbmx055__params__t_1a69fb711c61fd6c18467831456451d8b4) | range of accelerometer
`public uint8_t `[`gyro_scale`](#structbmx055__params__t_1a4ffdbee77f7abeccf6d667ad3e3a08b8) | range of gyroscope

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbmx055__params__t_1abc4b8c310ae974abc4314a60494fa639) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr_mag`](#structbmx055__params__t_1a7fa2240ca88c850f9786f6ed15b69ffb) 

the magnetometer address on that bus

#### `public uint8_t `[`addr_acc`](#structbmx055__params__t_1a440b3b221258f9a7d790e5a0d461ab45) 

the accelerometer address on that bus

#### `public uint8_t `[`addr_gyro`](#structbmx055__params__t_1a8be0a37d87e6bfaeeb9f4121e5c034ca) 

the gyroscope address on that bus

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1_pin`](#structbmx055__params__t_1a5713877b4ac07b79205f048a27bbd165) 

GPIO pin connected to the INT1 line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2_pin`](#structbmx055__params__t_1aa9e1a0f1df1a1ab3e638aecc68c31058) 

GPIO pin connected to the INT2 line.

#### `public uint8_t `[`mag_rate`](#structbmx055__params__t_1a37f7f2fd500d0d76b862f3b7eb79bae5) 

datarate of magnetometer

#### `public uint8_t `[`acc_range`](#structbmx055__params__t_1a69fb711c61fd6c18467831456451d8b4) 

range of accelerometer

#### `public uint8_t `[`gyro_scale`](#structbmx055__params__t_1a4ffdbee77f7abeccf6d667ad3e3a08b8) 

range of gyroscope

# struct `bmx055_t` 

Device descriptor for BMX055 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bmx055_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__params__t)` `[`p`](#structbmx055__t_1a62af02ffe5eacb047a8f9b09e66080e8) | Device initialization parameters.

## Members

#### `public `[`bmx055_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx055.md#structbmx055__params__t)` `[`p`](#structbmx055__t_1a62af02ffe5eacb047a8f9b09e66080e8) 

Device initialization parameters.

