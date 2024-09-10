---
title: api-drivers_l3g4200d.md
description: api-drivers_l3g4200d.md
---
# group `drivers_l3g4200d` 

Device driver for the L3G4200D gyroscope.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

The current state of the driver only implements a very basic polling mode.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`l3g4200d_scale_t`](#group__drivers__l3g4200d_1ga4f1329b3f42ec2b1da8d933d8f965fe8)            | Measurement scale for the gyro.
`enum `[`l3g4200d_mode_t`](#group__drivers__l3g4200d_1gab6f1fcd7c4f7dfd1db3c73323fc56492)            | Sampling frequency and bandwidth settings for the gyro.
`public int `[`l3g4200d_init`](#group__drivers__l3g4200d_1ga283d04edf9be42549246b9b1f760d3e8)`(`[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev,const `[`l3g4200d_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__params__t)` * params)`            | Initialize a gyro.
`public int `[`l3g4200d_read`](#group__drivers__l3g4200d_1ga63f816698062316f0d7d859b75000219)`(const `[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev,`[`l3g4200d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__data__t)` * acc_data)`            | Read angular speed value in degree per second from gyro.
`public int `[`l3g4200d_enable`](#group__drivers__l3g4200d_1ga883b22640a26fc634cd6e9a226d31c35)`(const `[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev)`            | Power-up the given device.
`public int `[`l3g4200d_disable`](#group__drivers__l3g4200d_1ga3551e06997cabc0580fc17e808a7407a)`(const `[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev)`            | Power-down the given device.
`struct `[`l3g4200d_data_t`](#structl3g4200d__data__t) | Result vector for gyro measurement.
`struct `[`l3g4200d_params_t`](#structl3g4200d__params__t) | Device initialization parameters.
`struct `[`l3g4200d_t`](#structl3g4200d__t) | Device descriptor for L3G4200D sensors.

## Members

#### `enum `[`l3g4200d_scale_t`](#group__drivers__l3g4200d_1ga4f1329b3f42ec2b1da8d933d8f965fe8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3G4200D_SCALE_250DPS            | scale: 250 degree per second
L3G4200D_SCALE_500DPS            | scale: 500 degree per second
L3G4200D_SCALE_2000DPS            | scale: 2000 degree per second

Measurement scale for the gyro.

#### `enum `[`l3g4200d_mode_t`](#group__drivers__l3g4200d_1gab6f1fcd7c4f7dfd1db3c73323fc56492) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3G4200D_MODE_100_12            | data rate: 100Hz, cut-off: 12.5Hz
L3G4200D_MODE_100_25            | data rate: 100Hz, cut-off: 25Hz
L3G4200D_MODE_200_12            | data rate: 200Hz, cut-off: 12.5Hz
L3G4200D_MODE_200_25            | data rate: 200Hz, cut-off: 25Hz
L3G4200D_MODE_200_50            | data rate: 200Hz, cut-off: 50Hz
L3G4200D_MODE_200_70            | data rate: 200Hz, cut-off: 70Hz
L3G4200D_MODE_400_20            | data rate: 400Hz, cut-off: 20Hz
L3G4200D_MODE_400_25            | data rate: 400Hz, cut-off: 25Hz
L3G4200D_MODE_400_50            | data rate: 400Hz, cut-off: 50Hz
L3G4200D_MODE_400_110            | data rate: 400Hz, cut-off: 110Hz
L3G4200D_MODE_800_30            | data rate: 800Hz, cut-off: 30Hz
L3G4200D_MODE_800_35            | data rate: 800Hz, cut-off: 35Hz
L3G4200D_MODE_800_50            | data rate: 800Hz, cut-off: 50Hz
L3G4200D_MODE_800_110            | data rate: 800Hz, cut-off: 110Hz

Sampling frequency and bandwidth settings for the gyro.

#### `public int `[`l3g4200d_init`](#group__drivers__l3g4200d_1ga283d04edf9be42549246b9b1f760d3e8)`(`[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev,const `[`l3g4200d_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__params__t)` * params)` 

Initialize a gyro.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` initialization parameters

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`l3g4200d_read`](#group__drivers__l3g4200d_1ga63f816698062316f0d7d859b75000219)`(const `[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev,`[`l3g4200d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__data__t)` * acc_data)` 

Read angular speed value in degree per second from gyro.

#### Parameters
* `dev` device descriptor of gyro 

* `acc_data` result vector in dps per axis

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`l3g4200d_enable`](#group__drivers__l3g4200d_1ga883b22640a26fc634cd6e9a226d31c35)`(const `[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev)` 

Power-up the given device.

#### Parameters
* `dev` device to enable

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`l3g4200d_disable`](#group__drivers__l3g4200d_1ga3551e06997cabc0580fc17e808a7407a)`(const `[`l3g4200d_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__t)` * dev)` 

Power-down the given device.

#### Parameters
* `dev` device to power-down

#### Returns
0 on success 

#### Returns
-1 on error

# struct `l3g4200d_data_t` 

Result vector for gyro measurement.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`acc_x`](#structl3g4200d__data__t_1a5ce9fa13fc782d2f184fb21ea691bc5e) | roll rate in dgs (degree per second)
`public int16_t `[`acc_y`](#structl3g4200d__data__t_1ac7a9fcc95df96e25870f6a5714a69291) | pitch rate in dgs
`public int16_t `[`acc_z`](#structl3g4200d__data__t_1aef99754bffcc39602e7acb2fc8705e42) | yaw rate in dgs

## Members

#### `public int16_t `[`acc_x`](#structl3g4200d__data__t_1a5ce9fa13fc782d2f184fb21ea691bc5e) 

roll rate in dgs (degree per second)

#### `public int16_t `[`acc_y`](#structl3g4200d__data__t_1ac7a9fcc95df96e25870f6a5714a69291) 

pitch rate in dgs

#### `public int16_t `[`acc_z`](#structl3g4200d__data__t_1aef99754bffcc39602e7acb2fc8705e42) 

yaw rate in dgs

# struct `l3g4200d_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structl3g4200d__params__t_1affc039fafec3472b786012db935d61c5) | I2C device the sensor is connected to.
`public uint8_t `[`addr`](#structl3g4200d__params__t_1a71380d8096e92feb56a045a64bd1f437) | the sensors slave address on the I2C bus
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1`](#structl3g4200d__params__t_1ab0633f4044a7ee3535cc1a7d49e9bac3) | INT1 pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2`](#structl3g4200d__params__t_1a4eea9cabca37879137687288915ac559) | INT2 (DRDY) pin.
`public `[`l3g4200d_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3g4200d_1gab6f1fcd7c4f7dfd1db3c73323fc56492)` `[`mode`](#structl3g4200d__params__t_1affa0a27f2a778e6fed5df6c6e03b9cd6) | sampling frequency and bandwidth mode
`public `[`l3g4200d_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3g4200d_1ga4f1329b3f42ec2b1da8d933d8f965fe8)` `[`scale`](#structl3g4200d__params__t_1a9e48e21a3a12e619d3d9ac0e6f3e8a83) | scaling factor to normalize results

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structl3g4200d__params__t_1affc039fafec3472b786012db935d61c5) 

I2C device the sensor is connected to.

#### `public uint8_t `[`addr`](#structl3g4200d__params__t_1a71380d8096e92feb56a045a64bd1f437) 

the sensors slave address on the I2C bus

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1`](#structl3g4200d__params__t_1ab0633f4044a7ee3535cc1a7d49e9bac3) 

INT1 pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2`](#structl3g4200d__params__t_1a4eea9cabca37879137687288915ac559) 

INT2 (DRDY) pin.

#### `public `[`l3g4200d_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3g4200d_1gab6f1fcd7c4f7dfd1db3c73323fc56492)` `[`mode`](#structl3g4200d__params__t_1affa0a27f2a778e6fed5df6c6e03b9cd6) 

sampling frequency and bandwidth mode

#### `public `[`l3g4200d_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3g4200d_1ga4f1329b3f42ec2b1da8d933d8f965fe8)` `[`scale`](#structl3g4200d__params__t_1a9e48e21a3a12e619d3d9ac0e6f3e8a83) 

scaling factor to normalize results

# struct `l3g4200d_t` 

Device descriptor for L3G4200D sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`l3g4200d_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__params__t)` `[`params`](#structl3g4200d__t_1a84aa7e99f37a3f46dacaf40a3859131d) | device initialization parameters
`public int32_t `[`scale`](#structl3g4200d__t_1aec8a925c0ef2d0e934583a500b4c5e06) | internal scaling factor to normalize results

## Members

#### `public `[`l3g4200d_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3g4200d.md#structl3g4200d__params__t)` `[`params`](#structl3g4200d__t_1a84aa7e99f37a3f46dacaf40a3859131d) 

device initialization parameters

#### `public int32_t `[`scale`](#structl3g4200d__t_1aec8a925c0ef2d0e934583a500b4c5e06) 

internal scaling factor to normalize results

