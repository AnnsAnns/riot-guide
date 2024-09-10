---
title: api-drivers_pulse_counter.md
description: api-drivers_pulse_counter.md
---
# group `drivers_pulse_counter` 

GPIO based pulse counting driver.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`pulse_counter_init`](#group__drivers__pulse__counter_1ga54733af1995a24a49a6419ae7a6b7d7a)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev,const `[`pulse_counter_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__params__t)` * params)`            | Initialize a pulse counter device.
`public int16_t `[`pulse_counter_read_with_reset`](#group__drivers__pulse__counter_1gadfe131d2af22c111ebe48bc83418cbfe)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev)`            | Read and reset pulse counter value.
`public int16_t `[`pulse_counter_read_without_reset`](#group__drivers__pulse__counter_1gae6fc009f00c76773f6d11d0ce48695a6)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev)`            | Read pulse counter value.
`public void `[`pulse_counter_reset`](#group__drivers__pulse__counter_1ga569087d033d9e5d390ad571971365825)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev)`            | Reset pulse counter value.
`struct `[`pulse_counter_params_t`](#structpulse__counter__params__t) | Parameters needed for device initialization.
`struct `[`pulse_counter_t`](#structpulse__counter__t) | Device descriptor for a pulse counter device.

## Members

#### `public int `[`pulse_counter_init`](#group__drivers__pulse__counter_1ga54733af1995a24a49a6419ae7a6b7d7a)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev,const `[`pulse_counter_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__params__t)` * params)` 

Initialize a pulse counter device.

#### Parameters
* `dev` device descriptor 

* `params` configuration parameters

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int16_t `[`pulse_counter_read_with_reset`](#group__drivers__pulse__counter_1gadfe131d2af22c111ebe48bc83418cbfe)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev)` 

Read and reset pulse counter value.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
Accumulated pulse counts

#### `public int16_t `[`pulse_counter_read_without_reset`](#group__drivers__pulse__counter_1gae6fc009f00c76773f6d11d0ce48695a6)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev)` 

Read pulse counter value.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
Accumulated pulse counts

#### `public void `[`pulse_counter_reset`](#group__drivers__pulse__counter_1ga569087d033d9e5d390ad571971365825)`(`[`pulse_counter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pulse_counter.md#structpulse__counter__t)` * dev)` 

Reset pulse counter value.

#### Parameters
* `dev` device descriptor of sensor

# struct `pulse_counter_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio`](#structpulse__counter__params__t_1aa7e097531e7b6ec2af996c5d0c3d8979) | GPIO pin that sensor is connected to.
`public `[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` `[`gpio_flank`](#structpulse__counter__params__t_1ad857e110e5da403b6b412d5acab720c7) | GPIO flank option.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio`](#structpulse__counter__params__t_1aa7e097531e7b6ec2af996c5d0c3d8979) 

GPIO pin that sensor is connected to.

#### `public `[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` `[`gpio_flank`](#structpulse__counter__params__t_1ad857e110e5da403b6b412d5acab720c7) 

GPIO flank option.

# struct `pulse_counter_t` 

Device descriptor for a pulse counter device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`atomic_uint_least16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_c11_atomics_cpp_compat.md#structatomic__uint__least16__t)` `[`pulse_count`](#structpulse__counter__t_1ae8f5fe59fce980ded846df5107b206f9) | pulse counter

## Members

#### `public `[`atomic_uint_least16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_c11_atomics_cpp_compat.md#structatomic__uint__least16__t)` `[`pulse_count`](#structpulse__counter__t_1ae8f5fe59fce980ded846df5107b206f9) 

pulse counter

