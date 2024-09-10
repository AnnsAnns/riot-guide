---
title: api-drivers_sm_pwm_01c.md
description: api-drivers_sm_pwm_01c.md
---
# group `drivers_sm_pwm_01c` 

Driver for Amphenol SM_PWM_01C infrared dust sensor.

* AboutThis driver provides an interface for the Amphenol SM-PWM-Sensor. The Datasheet can be found [here](https://www.cdiweb.com/datasheets/telaire-amphenol/01c%20dust%20sensor%20datasheet.pdf). and the more complete application note [here](https://www.sgbotic.com/products/datasheets/sensors/app-SM-PWM-01C.pdf)

The device can measure small particles (1~ 2μm) and large particle (3 ~10μm), so similar to PM2.5 and PM10. The dust sensor cannot count particles only measure estimated concentrations.

It is recommended to compute values over a 30s moving average. By default a moving average is used since the module MODULE_SM_PWM_01C_MA is activated by default. To save memory an exponential average can be used by disabling this module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sm_pwm_01c_init`](#group__drivers__sm__pwm__01c_1ga8485627554213a02b4ec8b0fdad0be64)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev,const `[`sm_pwm_01c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__params__t)` * params)`            | Initialize the given SM_PWM_01C device.
`public void `[`sm_pwm_01c_start`](#group__drivers__sm__pwm__01c_1ga48301494d59d880150886a8044350749)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev)`            | Start continuous measurement of Large and Small particle concentrations.
`public void `[`sm_pwm_01c_stop`](#group__drivers__sm__pwm__01c_1gab236c0d9a04e6583f95dd5c3e2771588)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev)`            | Stops continuous measurement of Large and Small particle concentration.
`public void `[`sm_pwm_01c_read_data`](#group__drivers__sm__pwm__01c_1ga083aa10a1767403484dd1133da6008fa)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev,`[`sm_pwm_01c_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__data__t)` * data)`            | Reads particle concentration values.
`struct `[`circ_buf_t`](#structcirc__buf__t) | Circular buffer holding moving average values.
`struct `[`sm_pwm_01c_params_t`](#structsm__pwm__01c__params__t) | Parameters for the SM_PWM_01c sensor.
`struct `[`sm_pwm_01c_data_t`](#structsm__pwm__01c__data__t) | LPO and concentration (ug/m3) values for small and large particles.
`struct `[`sm_pwm_01c_values_t`](#structsm__pwm__01c__values__t) | LPO and concentration (ug/m3) values for small and large particles.
`struct `[`sm_pwm_01c_t`](#structsm__pwm__01c__t) | Device descriptor for the SM_PWM_01c sensor.

## Members

#### `public int `[`sm_pwm_01c_init`](#group__drivers__sm__pwm__01c_1ga8485627554213a02b4ec8b0fdad0be64)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev,const `[`sm_pwm_01c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__params__t)` * params)` 

Initialize the given SM_PWM_01C device.

#### Parameters
* `dev` Initialized device descriptor of SM_PWM_01C device 

* `params` The parameters for the SM_PWM_01C device

#### Parameters
* `0` on success 

* `-EIO` GPIO error

#### `public void `[`sm_pwm_01c_start`](#group__drivers__sm__pwm__01c_1ga48301494d59d880150886a8044350749)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev)` 

Start continuous measurement of Large and Small particle concentrations.

#### Parameters
* `dev` Device descriptor of SM_PWM_01C device

#### `public void `[`sm_pwm_01c_stop`](#group__drivers__sm__pwm__01c_1gab236c0d9a04e6583f95dd5c3e2771588)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev)` 

Stops continuous measurement of Large and Small particle concentration.

#### Parameters
* `dev` Device descriptor of SM_PWM_01C device

#### `public void `[`sm_pwm_01c_read_data`](#group__drivers__sm__pwm__01c_1ga083aa10a1767403484dd1133da6008fa)`(`[`sm_pwm_01c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__t)` * dev,`[`sm_pwm_01c_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__data__t)` * data)` 

Reads particle concentration values.

#### Parameters
* `dev` Device descriptor of SM_PWM_01C device 

* `data` Pre-allocated memory to hold measured concentrations

# struct `circ_buf_t` 

Circular buffer holding moving average values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`buf`](#structcirc__buf__t_1a78578ba6591e6faaf8b1e0d64dcd1972) | circular buffer memory
`public size_t `[`head`](#structcirc__buf__t_1a79cec1f11f00969e4721cdb69df26891) | current buffer head

## Members

#### `public uint16_t `[`buf`](#structcirc__buf__t_1a78578ba6591e6faaf8b1e0d64dcd1972) 

circular buffer memory

#### `public size_t `[`head`](#structcirc__buf__t_1a79cec1f11f00969e4721cdb69df26891) 

current buffer head

# struct `sm_pwm_01c_params_t` 

Parameters for the SM_PWM_01c sensor.

These parameters are needed to configure the device at startup.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tsp_pin`](#structsm__pwm__01c__params__t_1a8154b3ce6cdeca88f9b3948b28b17b1f) | Low Pulse Signal Output (P1) of small Particle, active low, PM2.5 equivalent.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tlp_pin`](#structsm__pwm__01c__params__t_1a34ad42ce83a0448a285c20d8ca22866d) | Low Pulse Signal Output (P2) of large Particle, active low, PM10 equivalent.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tsp_pin`](#structsm__pwm__01c__params__t_1a8154b3ce6cdeca88f9b3948b28b17b1f) 

Low Pulse Signal Output (P1) of small Particle, active low, PM2.5 equivalent.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tlp_pin`](#structsm__pwm__01c__params__t_1a34ad42ce83a0448a285c20d8ca22866d) 

Low Pulse Signal Output (P2) of large Particle, active low, PM10 equivalent.

# struct `sm_pwm_01c_data_t` 

LPO and concentration (ug/m3) values for small and large particles.

Actual measured particle size are: 1~ 2μm for small particles and 3 ~10μm, for large particles, but this values are exposed as standard PM2.5 and PM10 measurements.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`mc_pm_2p5`](#structsm__pwm__01c__data__t_1a6b0446bd6b712a306aad07e56f5c1f1a) | Small particle concentration ug/m3.
`public uint16_t `[`mc_pm_10`](#structsm__pwm__01c__data__t_1a5f1110754f2204b2ce03496e12707ed5) | Large particle concentration ug/m3.

## Members

#### `public uint16_t `[`mc_pm_2p5`](#structsm__pwm__01c__data__t_1a6b0446bd6b712a306aad07e56f5c1f1a) 

Small particle concentration ug/m3.

#### `public uint16_t `[`mc_pm_10`](#structsm__pwm__01c__data__t_1a5f1110754f2204b2ce03496e12707ed5) 

Large particle concentration ug/m3.

# struct `sm_pwm_01c_values_t` 

LPO and concentration (ug/m3) values for small and large particles.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`tsp_lpo`](#structsm__pwm__01c__values__t_1a1584e2ab98fef8b3f3c7ebf5f231b610) | Small particle low Pulse active time us.
`public uint32_t `[`tlp_lpo`](#structsm__pwm__01c__values__t_1af39f028ab57676d965e12decf20bc549) | Large Particle low Pulse active time us.
`public uint32_t `[`tlp_start_time`](#structsm__pwm__01c__values__t_1a66baa06cebbd4a37bf30471c99af13cc) | Last time tlp pin went low.
`public uint32_t `[`tsp_start_time`](#structsm__pwm__01c__values__t_1ae86ed77e88c331379df2c23f554ebacd) | Last time tsp pin went low.
`public `[`sm_pwm_01c_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__data__t)` `[`data`](#structsm__pwm__01c__values__t_1ae7c6883ab5c4fe9b78a8c24e7ae252ba) | Current value for the exponentially averaged particle concentration values.

## Members

#### `public uint32_t `[`tsp_lpo`](#structsm__pwm__01c__values__t_1a1584e2ab98fef8b3f3c7ebf5f231b610) 

Small particle low Pulse active time us.

#### `public uint32_t `[`tlp_lpo`](#structsm__pwm__01c__values__t_1af39f028ab57676d965e12decf20bc549) 

Large Particle low Pulse active time us.

#### `public uint32_t `[`tlp_start_time`](#structsm__pwm__01c__values__t_1a66baa06cebbd4a37bf30471c99af13cc) 

Last time tlp pin went low.

#### `public uint32_t `[`tsp_start_time`](#structsm__pwm__01c__values__t_1ae86ed77e88c331379df2c23f554ebacd) 

Last time tsp pin went low.

#### `public `[`sm_pwm_01c_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__data__t)` `[`data`](#structsm__pwm__01c__values__t_1ae7c6883ab5c4fe9b78a8c24e7ae252ba) 

Current value for the exponentially averaged particle concentration values.

# struct `sm_pwm_01c_t` 

Device descriptor for the SM_PWM_01c sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sm_pwm_01c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__params__t)` `[`params`](#structsm__pwm__01c__t_1a2ad89aed89dde40230b77fbf5585826c) | Device driver parameters.
`public `[`sm_pwm_01c_values_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__values__t)` `[`_values`](#structsm__pwm__01c__t_1a278077629681c6ba36ee905d969c8e59) | Internal data to calculate concentration from tsl/tsp low Pulse Output Occupancy.
`public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`_sampler`](#structsm__pwm__01c__t_1acb6c463edd5b5343e1ed3f4d710f4d6a) | internal sampling timer

## Members

#### `public `[`sm_pwm_01c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__params__t)` `[`params`](#structsm__pwm__01c__t_1a2ad89aed89dde40230b77fbf5585826c) 

Device driver parameters.

#### `public `[`sm_pwm_01c_values_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sm_pwm_01c.md#structsm__pwm__01c__values__t)` `[`_values`](#structsm__pwm__01c__t_1a278077629681c6ba36ee905d969c8e59) 

Internal data to calculate concentration from tsl/tsp low Pulse Output Occupancy.

#### `public `[`ztimer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_ztimer.md#structztimer__t)` `[`_sampler`](#structsm__pwm__01c__t_1acb6c463edd5b5343e1ed3f4d710f4d6a) 

internal sampling timer

