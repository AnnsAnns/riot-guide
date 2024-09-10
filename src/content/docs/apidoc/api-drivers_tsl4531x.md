---
title: api-drivers_tsl4531x.md
description: api-drivers_tsl4531x.md
---
# group `drivers_tsl4531x` 

Device driver for the AMS TSL4531 sensor.

Power modesThis driver has two power modes: high and low. Its startup mode is configured in the initialization parameters, and it can also be changed during runtime.

In high power mode, the user application can read from the device using the tsl4531x_simple_read function, and it will return immediately.

In low power mode, the user application can interact with the driver in a synchronous or asynchronous manner. For synchronous operation, the application can call tsl4531x_simple_read, and the driver will block for the integration time defined in the initialization parameters (plus a small margin, to encompass the max times indicated in the datasheet). For asynchronous operation, the application needs to use the functions tsl4531x_start_sample, tsl4531x_time_until_sample_ready and tsl4531x_get_sample, as described in those functions' descriptions.

Both modes will work through SAUL, with the low-power mode being synchronous.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`tsl4531x_intgn_time_t`](#group__drivers__tsl4531x_1gafbdacb0cf1c344ab4b478594fa00c6b5)            | Integration times.
`public int `[`tsl4531x_init`](#group__drivers__tsl4531x_1ga1d4681aabb87e9f5dcd77c7c47d2ba4d)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev,const `[`tsl4531x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__params__t)` * params)`            | Initialize the TSL4531x device.
`public int `[`tsl4531x_set_low_power_mode`](#group__drivers__tsl4531x_1ga754897925d1fc6f1f2d998447c83d22f)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev,uint8_t low_power_on)`            | Set the low power mode of the driver on or off.
`public int `[`tsl4531x_start_sample`](#group__drivers__tsl4531x_1ga3331ebfd632086a29147cadec30eec2d)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)`            | Start collecting sample in low power mode.
`public uint32_t `[`tsl4531x_time_until_sample_ready`](#group__drivers__tsl4531x_1gac2aa572bc0262ea01b67eecf4621334d)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)`            | Deliver time in microseconds until sample is ready, or zero if it is ready.
`public int `[`tsl4531x_get_sample`](#group__drivers__tsl4531x_1ga1c9a8afd73189d773f318e42b1e8de94)`(const `[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)`            | Reads the sample from the device immediately.
`public int `[`tsl4531x_simple_read`](#group__drivers__tsl4531x_1gafb8232dd28ca679358fcef411f143ded)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)`            | Reads the sample from the device.
`struct `[`tsl4531x_params_t`](#structtsl4531x__params__t) | Device initialization parameters.
`struct `[`tsl4531x_t`](#structtsl4531x__t) | Device descriptor.

## Members

#### `enum `[`tsl4531x_intgn_time_t`](#group__drivers__tsl4531x_1gafbdacb0cf1c344ab4b478594fa00c6b5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TSL4531X_INTEGRATE_400MS            | 
TSL4531X_INTEGRATE_200MS            | 
TSL4531X_INTEGRATE_100MS            | 

Integration times.

#### `public int `[`tsl4531x_init`](#group__drivers__tsl4531x_1ga1d4681aabb87e9f5dcd77c7c47d2ba4d)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev,const `[`tsl4531x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__params__t)` * params)` 

Initialize the TSL4531x device.

#### Parameters
* `dev` Initialized device descriptor 

* `params` Device initialization parameters

#### Returns
Zero on success 

#### Returns
-ENODEV if I2C bus can't be acquired 

#### Returns
-ENXIO if device can't be read or configured 

#### Returns
-ENOTSUP if ID, once read, is wrong

#### `public int `[`tsl4531x_set_low_power_mode`](#group__drivers__tsl4531x_1ga754897925d1fc6f1f2d998447c83d22f)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev,uint8_t low_power_on)` 

Set the low power mode of the driver on or off.

#### Parameters
* `dev` Initialized device descriptor 

* `low_power_on` Bool indicating whether low power mode is on or off

#### Returns
Zero

#### `public int `[`tsl4531x_start_sample`](#group__drivers__tsl4531x_1ga3331ebfd632086a29147cadec30eec2d)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)` 

Start collecting sample in low power mode.

This provides asynchronous operation along with tsl4531x_time_until_sample_ready and tsl4531x_get_sample. It does nothing in high power mode.

#### Parameters
* `dev` Initialized device descriptor

#### Returns
Zero

#### `public uint32_t `[`tsl4531x_time_until_sample_ready`](#group__drivers__tsl4531x_1gac2aa572bc0262ea01b67eecf4621334d)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)` 

Deliver time in microseconds until sample is ready, or zero if it is ready.

In low power mode, this counts down from the point at which tsl4531x_start_sample is called, and along with that function and tsl4531x_get_sample, provides asynchronous operation. In high power mode, this counts down from the point at which the driver is switched into high power mode or started up, and indicates whether enough time has passed for a full sample to be collected.

Note that for low power mode this rolls over and repeats its behaviour every 1.2 hours. The sample should have been collected well before this, however.

The countdown time equals the integration time, which can be set in the device initialisation parameters, plus 5% margin to encompass the max times indicated in the datasheet.

#### Parameters
* `dev` Initialized device descriptor

#### Returns
Time in microseconds until sample is ready

#### `public int `[`tsl4531x_get_sample`](#group__drivers__tsl4531x_1ga1c9a8afd73189d773f318e42b1e8de94)`(const `[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)` 

Reads the sample from the device immediately.

In high power mode, this does the same as tsl4531x_simple_read once the device has performed one integration cycle. In low power mode, this provides asynchronous operation along with tsl4531x_start_sample and tsl4531x_time_until_sample_ready which determine whether the device has performed an integration cycle.

Note that this function will always return the value stored in the device's internal register, and this value will be sensible physically, representing the last time an integration cycle has been performed. However, in order for it to be accurate, the start_sample and time_until_sample_ready functions need to also be used, or alternatively the simple_read function can be used.

#### Parameters
* `dev` Initialized device descriptor

#### Returns
The sample value in Lux

#### `public int `[`tsl4531x_simple_read`](#group__drivers__tsl4531x_1gafb8232dd28ca679358fcef411f143ded)`(`[`tsl4531x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl4531x.md#structtsl4531x__t)` * dev)` 

Reads the sample from the device.

In low power mode, or in high power mode just after startup, this starts collecting the sample, blocks until the sample is ready (400/200/100ms depending on the integration time set in the initialization parameters), and then reads and returns the sample.

#### Parameters
* `dev` Initialized device descriptor

#### Returns
The sample value in Lux

# struct `tsl4531x_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structtsl4531x__params__t_1a1b06a5c02c212a93adafbfc0de8e1a00) | I2C device which is used.
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_addr`](#structtsl4531x__params__t_1a8f18148083b9aed68636ccceccd9f1c3) | I2C address of sensor.
`public `[`tsl4531x_intgn_time_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__tsl4531x_1gafbdacb0cf1c344ab4b478594fa00c6b5)` `[`integration_time`](#structtsl4531x__params__t_1a3a599a316289c4db82492c4326c66b5c) | integration time
`public uint8_t `[`low_power_mode`](#structtsl4531x__params__t_1aa71b85705f0932d3a901884893f393b1) | low power mode
`public uint8_t `[`part_number`](#structtsl4531x__params__t_1a7c138c381892221c5e178f30b20b3ab9) | part number, according to variant

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structtsl4531x__params__t_1a1b06a5c02c212a93adafbfc0de8e1a00) 

I2C device which is used.

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_addr`](#structtsl4531x__params__t_1a8f18148083b9aed68636ccceccd9f1c3) 

I2C address of sensor.

#### `public `[`tsl4531x_intgn_time_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__tsl4531x_1gafbdacb0cf1c344ab4b478594fa00c6b5)` `[`integration_time`](#structtsl4531x__params__t_1a3a599a316289c4db82492c4326c66b5c) 

integration time

#### `public uint8_t `[`low_power_mode`](#structtsl4531x__params__t_1aa71b85705f0932d3a901884893f393b1) 

low power mode

#### `public uint8_t `[`part_number`](#structtsl4531x__params__t_1a7c138c381892221c5e178f30b20b3ab9) 

part number, according to variant

# struct `tsl4531x_t` 

Device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structtsl4531x__t_1acf43a877bccf4df8776258fb6b64f605) | I2C device which is used.
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_addr`](#structtsl4531x__t_1a497124dc6d5347f3185dea0071fd2c85) | I2C address of sensor.
`public `[`tsl4531x_intgn_time_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__tsl4531x_1gafbdacb0cf1c344ab4b478594fa00c6b5)` `[`integration_time`](#structtsl4531x__t_1aeaabb5de88e221c7e2c319644f4aa359) | integration time
`public uint8_t `[`low_power_mode`](#structtsl4531x__t_1afb42f5b245328e1ffa00efe6b3192686) | low power mode
`public uint8_t `[`high_power_mode_started_up`](#structtsl4531x__t_1a2cc8e86f9658cd04035d9573ce06fced) | high power mode started up flag
`public uint32_t `[`sample_start_time`](#structtsl4531x__t_1a655c7c9bb5eccf6570e9339f4225a587) | sample start time

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structtsl4531x__t_1acf43a877bccf4df8776258fb6b64f605) 

I2C device which is used.

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_addr`](#structtsl4531x__t_1a497124dc6d5347f3185dea0071fd2c85) 

I2C address of sensor.

#### `public `[`tsl4531x_intgn_time_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__tsl4531x_1gafbdacb0cf1c344ab4b478594fa00c6b5)` `[`integration_time`](#structtsl4531x__t_1aeaabb5de88e221c7e2c319644f4aa359) 

integration time

#### `public uint8_t `[`low_power_mode`](#structtsl4531x__t_1afb42f5b245328e1ffa00efe6b3192686) 

low power mode

#### `public uint8_t `[`high_power_mode_started_up`](#structtsl4531x__t_1a2cc8e86f9658cd04035d9573ce06fced) 

high power mode started up flag

#### `public uint32_t `[`sample_start_time`](#structtsl4531x__t_1a655c7c9bb5eccf6570e9339f4225a587) 

sample start time

