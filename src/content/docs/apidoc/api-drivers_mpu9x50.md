---
title: api-drivers_mpu9x50.md
description: api-drivers_mpu9x50.md
---
# group `drivers_mpu9x50` 

Device driver interface for the MPU-9X50 (MPU9150 and MPU9250)

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`mpu9x50_pwr_t`](#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)            | Power enum values.
`enum `[`mpu9x50_hw_addr_t`](#group__drivers__mpu9x50_1gaa33b55a1da021be7ac505b95c945b196)            | Possible MPU-9X50 hardware addresses (wiring specific)
`enum `[`mpu9x50_comp_addr_t`](#group__drivers__mpu9x50_1ga791ecdc8c40b49b10a42a551e371c259)            | Possible compass addresses (wiring specific)
`enum `[`mpu9x50_gyro_ranges_t`](#group__drivers__mpu9x50_1gaf97b0c21b42c2b49f1c7348e41a80117)            | Possible full scale ranges for the gyroscope.
`enum `[`mpu9x50_accel_ranges_t`](#group__drivers__mpu9x50_1gabb200df8ddcb0b52bd45f9ca19972340)            | Possible full scale ranges for the accelerometer.
`enum `[`mpu9x50_lpf_t`](#group__drivers__mpu9x50_1ga088c0e913c8290a394f7bd5f8c4c33c0)            | Possible low pass filter values.
`public int `[`mpu9x50_init`](#group__drivers__mpu9x50_1gaed936dfffa5d6ee03e38fceefa6ec68e)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,const `[`mpu9x50_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__params__t)` * params)`            | Initialize the given MPU9X50 device.
`public int `[`mpu9x50_set_accel_power`](#group__drivers__mpu9x50_1gaf8ee619de4c4af22ca1a6535ab6f784c)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` pwr_conf)`            | Enable or disable accelerometer power.
`public int `[`mpu9x50_set_gyro_power`](#group__drivers__mpu9x50_1gaa878ebfb0f18ab1e8477bfdc4abcde06)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` pwr_conf)`            | Enable or disable gyroscope power.
`public int `[`mpu9x50_set_compass_power`](#group__drivers__mpu9x50_1ga489174498faac44447fc0e19fcc8cf32)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` pwr_conf)`            | Enable or disable compass power.
`public int `[`mpu9x50_read_gyro`](#group__drivers__mpu9x50_1gafdaa40ce2894b84253d984f4cb5afc58)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_results_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__results__t)` * output)`            | Read angular speed values from the given MPU9X50 device, returned in dps.
`public int `[`mpu9x50_read_accel`](#group__drivers__mpu9x50_1ga79f3b90c7b5216320181242058f6ad33)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_results_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__results__t)` * output)`            | Read acceleration values from the given MPU9X50 device, returned in mG.
`public int `[`mpu9x50_read_compass`](#group__drivers__mpu9x50_1ga6af64b79bb20cc53276b0a47941febd6)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_results_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__results__t)` * output)`            | Read magnetic field values from the given MPU9X50 device, returned in mikroT.
`public int `[`mpu9x50_read_temperature`](#group__drivers__mpu9x50_1ga0087dd46cbf9b321041fbae1da39acd2)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,int32_t * output)`            | Read temperature value from the given MPU9X50 device, returned in m°C.
`public int `[`mpu9x50_set_gyro_fsr`](#group__drivers__mpu9x50_1gaf79df296358adaed594f358080a2c8dd)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_gyro_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gaf97b0c21b42c2b49f1c7348e41a80117)` fsr)`            | Set the full-scale range for raw gyroscope data.
`public int `[`mpu9x50_set_accel_fsr`](#group__drivers__mpu9x50_1gaeb40825259d5b052bc2aafbb193c08a1)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_accel_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gabb200df8ddcb0b52bd45f9ca19972340)` fsr)`            | Set the full-scale range for raw accelerometer data.
`public int `[`mpu9x50_set_sample_rate`](#group__drivers__mpu9x50_1ga6f0b546156158dbd0c26aca131ccb0e7)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,uint16_t rate)`            | Set the rate at which the gyroscope and accelerometer data is sampled.
`public int `[`mpu9x50_set_compass_sample_rate`](#group__drivers__mpu9x50_1gac766b89809941f5fa0482a75749e1747)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,uint8_t rate)`            | Set the rate at which the compass data is sampled.
`struct `[`mpu9x50_results_t`](#structmpu9x50__results__t) | MPU-9X50 result vector struct.
`struct `[`mpu9x50_status_t`](#structmpu9x50__status__t) | Configuration struct for the MPU-9X50 sensor.
`struct `[`mpu9x50_params_t`](#structmpu9x50__params__t) | Device initialization parameters.
`struct `[`mpu9x50_t`](#structmpu9x50__t) | Device descriptor for the MPU9X50 sensor.

## Members

#### `enum `[`mpu9x50_pwr_t`](#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MPU9X50_SENSOR_PWR_OFF            | 
MPU9X50_SENSOR_PWR_ON            | 

Power enum values.

#### `enum `[`mpu9x50_hw_addr_t`](#group__drivers__mpu9x50_1gaa33b55a1da021be7ac505b95c945b196) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MPU9X50_HW_ADDR_HEX_68            | 
MPU9X50_HW_ADDR_HEX_69            | 

Possible MPU-9X50 hardware addresses (wiring specific)

#### `enum `[`mpu9x50_comp_addr_t`](#group__drivers__mpu9x50_1ga791ecdc8c40b49b10a42a551e371c259) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MPU9X50_COMP_ADDR_HEX_0C            | 
MPU9X50_COMP_ADDR_HEX_0D            | 
MPU9X50_COMP_ADDR_HEX_0E            | 
MPU9X50_COMP_ADDR_HEX_0F            | 

Possible compass addresses (wiring specific)

#### `enum `[`mpu9x50_gyro_ranges_t`](#group__drivers__mpu9x50_1gaf97b0c21b42c2b49f1c7348e41a80117) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MPU9X50_GYRO_FSR_250DPS            | 
MPU9X50_GYRO_FSR_500DPS            | 
MPU9X50_GYRO_FSR_1000DPS            | 
MPU9X50_GYRO_FSR_2000DPS            | 

Possible full scale ranges for the gyroscope.

#### `enum `[`mpu9x50_accel_ranges_t`](#group__drivers__mpu9x50_1gabb200df8ddcb0b52bd45f9ca19972340) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MPU9X50_ACCEL_FSR_2G            | 
MPU9X50_ACCEL_FSR_4G            | 
MPU9X50_ACCEL_FSR_8G            | 
MPU9X50_ACCEL_FSR_16G            | 

Possible full scale ranges for the accelerometer.

#### `enum `[`mpu9x50_lpf_t`](#group__drivers__mpu9x50_1ga088c0e913c8290a394f7bd5f8c4c33c0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MPU9X50_FILTER_188HZ            | 
MPU9X50_FILTER_98HZ            | 
MPU9X50_FILTER_42HZ            | 
MPU9X50_FILTER_20HZ            | 
MPU9X50_FILTER_10HZ            | 
MPU9X50_FILTER_5HZ            | 

Possible low pass filter values.

#### `public int `[`mpu9x50_init`](#group__drivers__mpu9x50_1gaed936dfffa5d6ee03e38fceefa6ec68e)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,const `[`mpu9x50_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__params__t)` * params)` 

Initialize the given MPU9X50 device.

#### Parameters
* `dev` Initialized device descriptor of MPU9X50 device 

* `params` Initialization parameters

#### Returns
0 on success 

#### Returns
-1 if given I2C is not enabled in board config

#### `public int `[`mpu9x50_set_accel_power`](#group__drivers__mpu9x50_1gaf8ee619de4c4af22ca1a6535ab6f784c)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` pwr_conf)` 

Enable or disable accelerometer power.

#### Parameters
* `dev` Device descriptor of MPU9X50 device 

* `pwr_conf` Target power setting: PWR_ON or PWR_OFF

#### Returns
0 on success 

#### Returns
-1 if given I2C is not enabled in board config

#### `public int `[`mpu9x50_set_gyro_power`](#group__drivers__mpu9x50_1gaa878ebfb0f18ab1e8477bfdc4abcde06)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` pwr_conf)` 

Enable or disable gyroscope power.

#### Parameters
* `dev` Device descriptor of MPU9X50 device 

* `pwr_conf` Target power setting: PWR_ON or PWR_OFF

#### Returns
0 on success 

#### Returns
-1 if given I2C is not enabled in board config

#### `public int `[`mpu9x50_set_compass_power`](#group__drivers__mpu9x50_1ga489174498faac44447fc0e19fcc8cf32)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` pwr_conf)` 

Enable or disable compass power.

#### Parameters
* `dev` Device descriptor of MPU9X50 device 

* `pwr_conf` Target power setting: PWR_ON or PWR_OFF

#### Returns
0 on success 

#### Returns
-1 if given I2C is not enabled in board config

#### `public int `[`mpu9x50_read_gyro`](#group__drivers__mpu9x50_1gafdaa40ce2894b84253d984f4cb5afc58)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_results_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__results__t)` * output)` 

Read angular speed values from the given MPU9X50 device, returned in dps.

The raw gyroscope data is read from the sensor and normalized with respect to the configured gyroscope full-scale range.

#### Parameters
* `dev` Device descriptor of MPU9X50 device to read from 

* `output` Result vector in dps per axis

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config 

#### Returns
-2 if gyro full-scale range is configured wrong

#### `public int `[`mpu9x50_read_accel`](#group__drivers__mpu9x50_1ga79f3b90c7b5216320181242058f6ad33)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_results_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__results__t)` * output)` 

Read acceleration values from the given MPU9X50 device, returned in mG.

The raw acceleration data is read from the sensor and normalized with respect to the configured accelerometer full-scale range.

#### Parameters
* `dev` Device descriptor of MPU9X50 device to read from 

* `output` Result vector in mG per axis

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config 

#### Returns
-2 if accel full-scale range is configured wrong

#### `public int `[`mpu9x50_read_compass`](#group__drivers__mpu9x50_1ga6af64b79bb20cc53276b0a47941febd6)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_results_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__results__t)` * output)` 

Read magnetic field values from the given MPU9X50 device, returned in mikroT.

The raw compass data is read from the sensor and normalized with respect to the compass full-scale range (which can not be configured).

#### Parameters
* `dev` Device descriptor of MPU9X50 device to read from 

* `output` Result vector in mikroT per axis

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config

#### `public int `[`mpu9x50_read_temperature`](#group__drivers__mpu9x50_1ga0087dd46cbf9b321041fbae1da39acd2)`(const `[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,int32_t * output)` 

Read temperature value from the given MPU9X50 device, returned in m°C.

The measured temperature is slightly higher than the real room temperature. Tests showed that the offset varied around 2-3 °C (but no warranties here).

#### Parameters
* `dev` Device descriptor of MPU9X50 device to read from 

* `output` Temperature in m°C

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config

#### `public int `[`mpu9x50_set_gyro_fsr`](#group__drivers__mpu9x50_1gaf79df296358adaed594f358080a2c8dd)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_gyro_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gaf97b0c21b42c2b49f1c7348e41a80117)` fsr)` 

Set the full-scale range for raw gyroscope data.

#### Parameters
* `dev` Device descriptor of MPU9X50 device 

* `fsr` Target full-scale range

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config 

#### Returns
-2 if given full-scale target value is not valid

#### `public int `[`mpu9x50_set_accel_fsr`](#group__drivers__mpu9x50_1gaeb40825259d5b052bc2aafbb193c08a1)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,`[`mpu9x50_accel_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gabb200df8ddcb0b52bd45f9ca19972340)` fsr)` 

Set the full-scale range for raw accelerometer data.

#### Parameters
* `dev` Device descriptor of MPU9X50 device 

* `fsr` Target full-scale range

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config 

#### Returns
-2 if given full-scale target value is not valid

#### `public int `[`mpu9x50_set_sample_rate`](#group__drivers__mpu9x50_1ga6f0b546156158dbd0c26aca131ccb0e7)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,uint16_t rate)` 

Set the rate at which the gyroscope and accelerometer data is sampled.

Sample rate can be chosen between 4 Hz and 1kHz. The actual set value might slightly differ. If necessary, check the actual set value in the device's config member afterwards.

#### Parameters
* `dev` Device descriptor of MPU9X50 device 

* `rate` Target sample rate in Hz

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config 

#### Returns
-2 if given target sample rate is not valid

#### `public int `[`mpu9x50_set_compass_sample_rate`](#group__drivers__mpu9x50_1gac766b89809941f5fa0482a75749e1747)`(`[`mpu9x50_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__t)` * dev,uint8_t rate)` 

Set the rate at which the compass data is sampled.

Sample rate can be chosen between 1 Hz and 100 Hz but has to be a fraction of the configured accel/gyro sample rate. The actual set value might slightly differ. If necessary, check the actual set value in the device's config member afterwards.

#### Parameters
* `dev` Device descriptor of MPU9X50 device 

* `rate` Target sample rate in Hz

#### Returns
0 on success 

#### Returns
-1 if device's I2C is not enabled in board config 

#### Returns
-2 if given target sample rate is not valid

# struct `mpu9x50_results_t` 

MPU-9X50 result vector struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x_axis`](#structmpu9x50__results__t_1ac9fcf277ba488ef4a0eb53a2ac859648) | X-Axis measurement result.
`public int16_t `[`y_axis`](#structmpu9x50__results__t_1accb9d4d3079e1352ccaf8cd3e8e35ef3) | Y-Axis measurement result.
`public int16_t `[`z_axis`](#structmpu9x50__results__t_1aabb6dae6140f09d81263f19ffdc0f64a) | Z-Axis measurement result.

## Members

#### `public int16_t `[`x_axis`](#structmpu9x50__results__t_1ac9fcf277ba488ef4a0eb53a2ac859648) 

X-Axis measurement result.

#### `public int16_t `[`y_axis`](#structmpu9x50__results__t_1accb9d4d3079e1352ccaf8cd3e8e35ef3) 

Y-Axis measurement result.

#### `public int16_t `[`z_axis`](#structmpu9x50__results__t_1aabb6dae6140f09d81263f19ffdc0f64a) 

Z-Axis measurement result.

# struct `mpu9x50_status_t` 

Configuration struct for the MPU-9X50 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` `[`accel_pwr`](#structmpu9x50__status__t_1a8ce400fbc884a1a3f4cb3915bbf85399) | Accel power status (on/off)
`public `[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` `[`gyro_pwr`](#structmpu9x50__status__t_1ab74c3cfa4f78026eed76706006fbaf12) | Gyro power status (on/off)
`public `[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` `[`compass_pwr`](#structmpu9x50__status__t_1aab47752059a4d07b3ce81c88079e13e9) | Compass power status (on/off)
`public `[`mpu9x50_gyro_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gaf97b0c21b42c2b49f1c7348e41a80117)` `[`gyro_fsr`](#structmpu9x50__status__t_1a809147ffcc683011952c93a9a35e7c2a) | Configured gyro full-scale range.
`public `[`mpu9x50_accel_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gabb200df8ddcb0b52bd45f9ca19972340)` `[`accel_fsr`](#structmpu9x50__status__t_1a4e579d8e0fb812337745b8abdbbdb88d) | Configured accel full-scale range.
`public uint16_t `[`sample_rate`](#structmpu9x50__status__t_1a6c80b7897ff56f595e066003e6ca8a28) | Configured sample rate for accel and gyro.
`public uint8_t `[`compass_sample_rate`](#structmpu9x50__status__t_1af2eb31b8c39d2e9266996c00e54fa6f9) | Configured compass sample rate.
`public uint8_t `[`compass_x_adj`](#structmpu9x50__status__t_1a38437bee01600c73e15022dd0d2c94c9) | Compass X-Axis sensitivity adjustment value.
`public uint8_t `[`compass_y_adj`](#structmpu9x50__status__t_1a7e1e8a558cd77ca5f2ae617d849b2846) | Compass Y-Axis sensitivity adjustment value.
`public uint8_t `[`compass_z_adj`](#structmpu9x50__status__t_1a67161c9b522ee780630d339039105f3a) | Compass Z-Axis sensitivity adjustment value.

## Members

#### `public `[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` `[`accel_pwr`](#structmpu9x50__status__t_1a8ce400fbc884a1a3f4cb3915bbf85399) 

Accel power status (on/off)

#### `public `[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` `[`gyro_pwr`](#structmpu9x50__status__t_1ab74c3cfa4f78026eed76706006fbaf12) 

Gyro power status (on/off)

#### `public `[`mpu9x50_pwr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1ga71e89fb32d35dc52401a3deaceef1798)` `[`compass_pwr`](#structmpu9x50__status__t_1aab47752059a4d07b3ce81c88079e13e9) 

Compass power status (on/off)

#### `public `[`mpu9x50_gyro_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gaf97b0c21b42c2b49f1c7348e41a80117)` `[`gyro_fsr`](#structmpu9x50__status__t_1a809147ffcc683011952c93a9a35e7c2a) 

Configured gyro full-scale range.

#### `public `[`mpu9x50_accel_ranges_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50_1gabb200df8ddcb0b52bd45f9ca19972340)` `[`accel_fsr`](#structmpu9x50__status__t_1a4e579d8e0fb812337745b8abdbbdb88d) 

Configured accel full-scale range.

#### `public uint16_t `[`sample_rate`](#structmpu9x50__status__t_1a6c80b7897ff56f595e066003e6ca8a28) 

Configured sample rate for accel and gyro.

#### `public uint8_t `[`compass_sample_rate`](#structmpu9x50__status__t_1af2eb31b8c39d2e9266996c00e54fa6f9) 

Configured compass sample rate.

#### `public uint8_t `[`compass_x_adj`](#structmpu9x50__status__t_1a38437bee01600c73e15022dd0d2c94c9) 

Compass X-Axis sensitivity adjustment value.

#### `public uint8_t `[`compass_y_adj`](#structmpu9x50__status__t_1a7e1e8a558cd77ca5f2ae617d849b2846) 

Compass Y-Axis sensitivity adjustment value.

#### `public uint8_t `[`compass_z_adj`](#structmpu9x50__status__t_1a67161c9b522ee780630d339039105f3a) 

Compass Z-Axis sensitivity adjustment value.

# struct `mpu9x50_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmpu9x50__params__t_1a11c89b9b849d682b24bd830f2540a41c) | I2C device which is used.
`public uint8_t `[`addr`](#structmpu9x50__params__t_1a560965c509a5fb0760e1f710b4dcf8fe) | Hardware address of the MPU-9X50.
`public uint8_t `[`comp_addr`](#structmpu9x50__params__t_1a26a04f23b5ebbb979b3cbe636bf84c88) | Address of the MPU-9X50s compass.
`public uint16_t `[`sample_rate`](#structmpu9x50__params__t_1a54d4e8659910d9597edcb44f8d2037bf) | Sample rate.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structmpu9x50__params__t_1a11c89b9b849d682b24bd830f2540a41c) 

I2C device which is used.

#### `public uint8_t `[`addr`](#structmpu9x50__params__t_1a560965c509a5fb0760e1f710b4dcf8fe) 

Hardware address of the MPU-9X50.

#### `public uint8_t `[`comp_addr`](#structmpu9x50__params__t_1a26a04f23b5ebbb979b3cbe636bf84c88) 

Address of the MPU-9X50s compass.

#### `public uint16_t `[`sample_rate`](#structmpu9x50__params__t_1a54d4e8659910d9597edcb44f8d2037bf) 

Sample rate.

# struct `mpu9x50_t` 

Device descriptor for the MPU9X50 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mpu9x50_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__params__t)` `[`params`](#structmpu9x50__t_1a5d52df4e2ea32e4f90377dbb6a4b0150) | Device initialization parameters.
`public `[`mpu9x50_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__status__t)` `[`conf`](#structmpu9x50__t_1a9045444fecac3b2c993588c752231130) | Device configuration.

## Members

#### `public `[`mpu9x50_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__params__t)` `[`params`](#structmpu9x50__t_1a5d52df4e2ea32e4f90377dbb6a4b0150) 

Device initialization parameters.

#### `public `[`mpu9x50_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mpu9x50.md#structmpu9x50__status__t)` `[`conf`](#structmpu9x50__t_1a9045444fecac3b2c993588c752231130) 

Device configuration.

