---
title: api-drivers_lsm303dlhc.md
description: api-drivers_lsm303dlhc.md
---
# group `drivers_lsm303dlhc` 

Device driver for the LSM303DLHC 3D accelerometer/magnetometer.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`lsm303dlhc_acc_sample_rate_t`](#group__drivers__lsm303dlhc_1ga8d8eb6d518659b92eaf3f559a7701f84)            | Possible accelerometer sample rates.
`enum `[`lsm303dlhc_acc_scale_t`](#group__drivers__lsm303dlhc_1ga14717a90270e848d48adbd670021864b)            | Possible accelerometer scales.
`enum `[`lsm303dlhc_mag_sample_rate_t`](#group__drivers__lsm303dlhc_1gae0e4b5699378a68a1c622925dacec439)            | Possible magnetometer sample rates.
`enum `[`lsm303dlhc_mag_gain_t`](#group__drivers__lsm303dlhc_1ga388a4733819b2541d067f4c60214d882)            | Possible magnetometer gain values.
`public int `[`lsm303dlhc_init`](#group__drivers__lsm303dlhc_1ga854619224ac68f0321d6304995bb15ea)`(`[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,const `[`lsm303dlhc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__params__t)` * params)`            | Initialize a new LSM303DLHC device.
`public int `[`lsm303dlhc_read_acc`](#group__drivers__lsm303dlhc_1ga6fbfc5ba1fd3a9a8ea8122599b2e4775)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,`[`lsm303dlhc_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__3d__data__t)` * data)`            | Read a accelerometer value from the sensor.
`public int `[`lsm303dlhc_read_mag`](#group__drivers__lsm303dlhc_1gaa2d5b53f1cb29a252184b45fd6fa972a)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,`[`lsm303dlhc_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__3d__data__t)` * data)`            | Read a magnetometer value from the sensor.
`public int `[`lsm303dlhc_read_temp`](#group__drivers__lsm303dlhc_1ga2a8076525809ed1bd959bc3a64bea945)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,int16_t * value)`            | Read a temperature value from the sensor.
`public int `[`lsm303dlhc_enable`](#group__drivers__lsm303dlhc_1ga1a82a71232bd6b16049138f25c6d89f9)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev)`            | Enable the given sensor.
`public int `[`lsm303dlhc_disable`](#group__drivers__lsm303dlhc_1ga4c036fcc944a900b5eef88ef0b80aa53)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev)`            | Disable the given sensor.
`struct `[`lsm303dlhc_3d_data_t`](#structlsm303dlhc__3d__data__t) | 3d data container
`struct `[`lsm303dlhc_params_t`](#structlsm303dlhc__params__t) | Data structure holding all the information needed for initialization.
`struct `[`lsm303dlhc_t`](#structlsm303dlhc__t) | Device descriptor for LSM303DLHC sensors.

## Members

#### `enum `[`lsm303dlhc_acc_sample_rate_t`](#group__drivers__lsm303dlhc_1ga8d8eb6d518659b92eaf3f559a7701f84) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM303DLHC_ACC_SAMPLE_RATE_1HZ            | 1Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_10HZ            | 10Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_25HZ            | 25Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_50HZ            | 50Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_100HZ            | 100Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_200HZ            | 200Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_400HZ            | 400Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_1620HZ            | 1620Hz sample rate
LSM303DLHC_ACC_SAMPLE_RATE_N1344HZ_L5376HZ            | 1344Hz normal mode, 5376Hz low power mode

Possible accelerometer sample rates.

#### `enum `[`lsm303dlhc_acc_scale_t`](#group__drivers__lsm303dlhc_1ga14717a90270e848d48adbd670021864b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM303DLHC_ACC_SCALE_2G            | +- 2g range
LSM303DLHC_ACC_SCALE_4G            | +- 4g range
LSM303DLHC_ACC_SCALE_8G            | +- 8g range
LSM303DLHC_ACC_SCALE_16G            | +-16g range

Possible accelerometer scales.

#### `enum `[`lsm303dlhc_mag_sample_rate_t`](#group__drivers__lsm303dlhc_1gae0e4b5699378a68a1c622925dacec439) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM303DLHC_MAG_SAMPLE_RATE_0_75HZ            | 0.75Hz sample rate
LSM303DLHC_MAG_SAMPLE_RATE_1_5HZ            | 1.5 Hz sample rate
LSM303DLHC_MAG_SAMPLE_RATE_3HZ            | 3 Hz sample rate
LSM303DLHC_MAG_SAMPLE_RATE_7_5HZ            | 7.5 Hz sample rate
LSM303DLHC_MAG_SAMPLE_RATE_15HZ            | 15 Hz sample rate
LSM303DLHC_MAG_SAMPLE_RATE_30HZ            | 30 Hz sample rate
LSM303DLHC_MAG_SAMPLE_RATE_75HZ            | 75 Hz sample rate
LSM303DLHC_MAG_SAMPLE_RATE_220HZ            | 220 Hz sample rate

Possible magnetometer sample rates.

#### `enum `[`lsm303dlhc_mag_gain_t`](#group__drivers__lsm303dlhc_1ga388a4733819b2541d067f4c60214d882) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LSM303DLHC_MAG_GAIN_1100_980_GAUSS            | 1100Gauss XYZ 980Gauss Z
LSM303DLHC_MAG_GAIN_855_760_GAUSS            | 855Gauss XYZ 760Gauss Z
LSM303DLHC_MAG_GAIN_670_600_GAUSS            | 670Gauss XYZ 600Gauss Z
LSM303DLHC_MAG_GAIN_450_400_GAUSS            | 450Gauss XYZ 400Gauss Z
LSM303DLHC_MAG_GAIN_400_355_GAUSS            | 400Gauss XYZ 355Gauss Z
LSM303DLHC_MAG_GAIN_330_295_GAUSS            | 330Gauss XYZ 295Gauss Z
LSM303DLHC_MAG_GAIN_230_205_GAUSS            | 230Gauss XYZ 205Gauss Z

Possible magnetometer gain values.

#### `public int `[`lsm303dlhc_init`](#group__drivers__lsm303dlhc_1ga854619224ac68f0321d6304995bb15ea)`(`[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,const `[`lsm303dlhc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__params__t)` * params)` 

Initialize a new LSM303DLHC device.

#### Parameters
* `dev` device descriptor of an LSM303DLHC device 

* `params` initialization parameters

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lsm303dlhc_read_acc`](#group__drivers__lsm303dlhc_1ga6fbfc5ba1fd3a9a8ea8122599b2e4775)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,`[`lsm303dlhc_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__3d__data__t)` * data)` 

Read a accelerometer value from the sensor.

This function provides raw acceleration data. To get the corresponding values in g please refer to the following table: measurement range | factor -----------------+------ +- 2g | 1*10^-3 +- 4g | 2*10^-3 +- 8g | 4*10^-3 +-16g | 8*10^-3

#### Parameters
* `dev` device descriptor of an LSM303DLHC device 

* `data` the measured accelerometer data

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lsm303dlhc_read_mag`](#group__drivers__lsm303dlhc_1gaa2d5b53f1cb29a252184b45fd6fa972a)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,`[`lsm303dlhc_3d_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__3d__data__t)` * data)` 

Read a magnetometer value from the sensor.

This function returns raw magnetic data. To get the corresponding values in gauss please refer to the following table: measurement range | factor -----------------+------ +- 1.3 gauss | 1/1100 +- 1.9 gauss | 1/855 +- 2.5 gauss | 1/670 +- 4.0 gauss | 1/450 +- 4.7 gauss | 1/400 +- 5.6 gauss | 1/330 +- 8.1 gauss | 1/230

#### Parameters
* `dev` device descriptor of an LSM303DLHC device 

* `data` the measured magnetometer data

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lsm303dlhc_read_temp`](#group__drivers__lsm303dlhc_1ga2a8076525809ed1bd959bc3a64bea945)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev,int16_t * value)` 

Read a temperature value from the sensor.

#### Parameters
* `dev` device descriptor of an LSM303DLHC device 

* `value` the measured temperature

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lsm303dlhc_enable`](#group__drivers__lsm303dlhc_1ga1a82a71232bd6b16049138f25c6d89f9)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev)` 

Enable the given sensor.

#### Parameters
* `dev` device descriptor of an LSM303DLHC device

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`lsm303dlhc_disable`](#group__drivers__lsm303dlhc_1ga4c036fcc944a900b5eef88ef0b80aa53)`(const `[`lsm303dlhc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__t)` * dev)` 

Disable the given sensor.

#### Parameters
* `dev` device descriptor of an LSM303DLHC device

#### Returns
0 on success 

#### Returns
-1 on error

# struct `lsm303dlhc_3d_data_t` 

3d data container

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x_axis`](#structlsm303dlhc__3d__data__t_1add95420ab8e527e94aaaa1572efb42a9) | holds the x axis value.
`public int16_t `[`y_axis`](#structlsm303dlhc__3d__data__t_1a87f6b92402cc223ac3269abb868f4567) | holds the y axis value.
`public int16_t `[`z_axis`](#structlsm303dlhc__3d__data__t_1a0631dc1aba8641ae80b112091fda6872) | surprise, holds the z axis value

## Members

#### `public int16_t `[`x_axis`](#structlsm303dlhc__3d__data__t_1add95420ab8e527e94aaaa1572efb42a9) 

holds the x axis value.

WOW!

#### `public int16_t `[`y_axis`](#structlsm303dlhc__3d__data__t_1a87f6b92402cc223ac3269abb868f4567) 

holds the y axis value.

Not kidding.

#### `public int16_t `[`z_axis`](#structlsm303dlhc__3d__data__t_1a0631dc1aba8641ae80b112091fda6872) 

surprise, holds the z axis value

# struct `lsm303dlhc_params_t` 

Data structure holding all the information needed for initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlsm303dlhc__params__t_1adba671d7eb47595179b25c826106823b) | I2C bus used.
`public uint8_t `[`acc_addr`](#structlsm303dlhc__params__t_1a37dfff4f22ee9954987d11197adb415f) | accelerometer I2C address
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`acc_pin`](#structlsm303dlhc__params__t_1aaff623689ef8bfb3dd745697572dd0c5) | accelerometer EXTI pin
`public `[`lsm303dlhc_acc_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1ga8d8eb6d518659b92eaf3f559a7701f84)` `[`acc_rate`](#structlsm303dlhc__params__t_1a1af5075e56a2df613d65de8e5e4de798) | accelerometer sample rate
`public `[`lsm303dlhc_acc_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1ga14717a90270e848d48adbd670021864b)` `[`acc_scale`](#structlsm303dlhc__params__t_1a4401544758ec651f2ace727e9997b95a) | accelerometer scale factor
`public uint8_t `[`mag_addr`](#structlsm303dlhc__params__t_1a6f2923c71b9b7d080a6449286e41220b) | magnetometer I2C address
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mag_pin`](#structlsm303dlhc__params__t_1a83c2677dd4f6b42d8e07c850f1d6c4b8) | magnetometer EXTI pin
`public `[`lsm303dlhc_mag_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1gae0e4b5699378a68a1c622925dacec439)` `[`mag_rate`](#structlsm303dlhc__params__t_1ab098955f329717e1be5cb86ebbdc46e3) | magnetometer sample rate
`public `[`lsm303dlhc_mag_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1ga388a4733819b2541d067f4c60214d882)` `[`mag_gain`](#structlsm303dlhc__params__t_1abfd70e45f5a82836c1df5b44898d3489) | magnetometer gain

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structlsm303dlhc__params__t_1adba671d7eb47595179b25c826106823b) 

I2C bus used.

#### `public uint8_t `[`acc_addr`](#structlsm303dlhc__params__t_1a37dfff4f22ee9954987d11197adb415f) 

accelerometer I2C address

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`acc_pin`](#structlsm303dlhc__params__t_1aaff623689ef8bfb3dd745697572dd0c5) 

accelerometer EXTI pin

#### `public `[`lsm303dlhc_acc_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1ga8d8eb6d518659b92eaf3f559a7701f84)` `[`acc_rate`](#structlsm303dlhc__params__t_1a1af5075e56a2df613d65de8e5e4de798) 

accelerometer sample rate

#### `public `[`lsm303dlhc_acc_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1ga14717a90270e848d48adbd670021864b)` `[`acc_scale`](#structlsm303dlhc__params__t_1a4401544758ec651f2ace727e9997b95a) 

accelerometer scale factor

#### `public uint8_t `[`mag_addr`](#structlsm303dlhc__params__t_1a6f2923c71b9b7d080a6449286e41220b) 

magnetometer I2C address

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mag_pin`](#structlsm303dlhc__params__t_1a83c2677dd4f6b42d8e07c850f1d6c4b8) 

magnetometer EXTI pin

#### `public `[`lsm303dlhc_mag_sample_rate_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1gae0e4b5699378a68a1c622925dacec439)` `[`mag_rate`](#structlsm303dlhc__params__t_1ab098955f329717e1be5cb86ebbdc46e3) 

magnetometer sample rate

#### `public `[`lsm303dlhc_mag_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lsm303dlhc_1ga388a4733819b2541d067f4c60214d882)` `[`mag_gain`](#structlsm303dlhc__params__t_1abfd70e45f5a82836c1df5b44898d3489) 

magnetometer gain

# struct `lsm303dlhc_t` 

Device descriptor for LSM303DLHC sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lsm303dlhc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__params__t)` `[`params`](#structlsm303dlhc__t_1a0d97bdb68018b181146bcb440db06c4a) | device initialization parameters

## Members

#### `public `[`lsm303dlhc_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lsm303dlhc.md#structlsm303dlhc__params__t)` `[`params`](#structlsm303dlhc__t_1a0d97bdb68018b181146bcb440db06c4a) 

device initialization parameters

