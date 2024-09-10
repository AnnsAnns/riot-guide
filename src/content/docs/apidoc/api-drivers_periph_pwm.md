---
title: api-drivers_periph_pwm.md
description: api-drivers_periph_pwm.md
---
# group `drivers_periph_pwm` 

Low-level PWM peripheral driver.

This interface enables access to CPU peripherals generating PWM signals. On most platforms, this interface will be implemented based on hardware timers, though some CPUs provide dedicated PWM peripherals.

The characteristics of a PWM signal can be defined by three basic parameters, namely the frequency, the duty cycle, and the operational mode. This interface supports basic PWM generation in left-aligned, right-aligned, and center mode. Additionally the interface supports the definition of the used resolution, defining the granularity with which one can specify the duty cycle. This brings more flexibility to the configuration of the frequency, especially on systems with low system clocks.

Typically, a single PWM device (e.g. hardware timer) supports PWM signal generation on multiple pins in parallel. While the duty cycle is selectable for each channel individually, the frequency and resolution are shared for all channels.

The mapping/configuration of PWM devices (timers) and the used pins has to be done in the board configuration (the board's `periph_conf.h).

When using the PWM interface, first thing you have to do is initialize the PWM device with the targeted mode, frequency, and resolution settings. Once the device is initialized, it will start the generation of PWM signals on all configured pins immediately, with an initial duty cycle of `0`. Use the [pwm_set()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1ga85080df933cc3a416f71acd9f47b90d0) function to change the duty cycle for a given channel. If you want to disable the PWM generation again, simply call [pwm_poweroff()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gaaa568926a9e527c74eb307258c0a3861).

(Low-)Power implicationsAfter initialization, the a PWM peripheral **should** be powered on and active. When manually stopped using the [pwm_poweroff()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gaaa568926a9e527c74eb307258c0a3861) function, the PWM generation **should** be stopped for all channels and the PWM peripheral **should** be fully power off (e.g. through peripheral clock gating). Once being re-enabled by calling the [pwm_poweron()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1ga011d8bb27b3edab7aaee614bbd3acd57) function, the PWM peripheral **should** transparently continue its previously configured operation, including the last active duty cycle values.

While a PWM device is active, some implementations might need to block certain power modes.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PWM_DEV`](#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db)            | Default PWM access macro.
`define `[`PWM_UNDEF`](#group__drivers__periph__pwm_1gac21f8145dac7cecbe4e24465db63d791)            | Default PWM undefined value.
`enum `[`pwm_mode_t`](#group__drivers__periph__pwm_1ga562b5946a0edd6f5eebb63db7d154d56)            | Default PWM mode definition.
`public uint32_t `[`pwm_init`](#group__drivers__periph__pwm_1ga205eedf5331e5646b330d986f2b691f9)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev,`[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` mode,uint32_t freq,uint16_t res)`            | Initialize a PWM device.
`public uint8_t `[`pwm_channels`](#group__drivers__periph__pwm_1ga4ffb9a0f71cf82da762b9aec4727c501)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev)`            | Get the number of available channels.
`public void `[`pwm_set`](#group__drivers__periph__pwm_1ga85080df933cc3a416f71acd9f47b90d0)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev,uint8_t channel,uint16_t value)`            | Set the duty-cycle for a given channel of the given PWM device.
`public void `[`pwm_poweron`](#group__drivers__periph__pwm_1ga011d8bb27b3edab7aaee614bbd3acd57)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev)`            | Resume PWM generation on the given device.
`public void `[`pwm_poweroff`](#group__drivers__periph__pwm_1gaaa568926a9e527c74eb307258c0a3861)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev)`            | Stop PWM generation on the given device.

## Members

#### `define `[`PWM_DEV`](#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) 

Default PWM access macro.

#### `define `[`PWM_UNDEF`](#group__drivers__periph__pwm_1gac21f8145dac7cecbe4e24465db63d791) 

Default PWM undefined value.

#### `enum `[`pwm_mode_t`](#group__drivers__periph__pwm_1ga562b5946a0edd6f5eebb63db7d154d56) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PWM_LEFT            | left aligned
PWM_RIGHT            | right aligned
PWM_CENTER            | center aligned
PWM_LEFT            | 
PWM_RIGHT            | 
PWM_CENTER            | 

Default PWM mode definition.

#### `public uint32_t `[`pwm_init`](#group__drivers__periph__pwm_1ga205eedf5331e5646b330d986f2b691f9)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev,`[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` mode,uint32_t freq,uint16_t res)` 

Initialize a PWM device.

The PWM module is based on virtual PWM devices, which can have one or more channels. The PWM devices can be configured to run with a given frequency and resolution, which are always identical for the complete device, hence for every channel on a device.

The desired frequency and resolution may not be possible on a given device when chosen too large. In this case the PWM driver will always keep the resolution and decrease the frequency if needed. To verify the correct settings compare the returned value which is the actually set frequency.

#### Parameters
* `dev` PWM device to initialize 

* `mode` PWM mode, left, right or center aligned 

* `freq` PWM frequency in Hz 

* `res` PWM resolution

#### Returns
actual PWM frequency on success 

#### Returns
0 on error

#### `public uint8_t `[`pwm_channels`](#group__drivers__periph__pwm_1ga4ffb9a0f71cf82da762b9aec4727c501)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev)` 

Get the number of available channels.

#### Parameters
* `dev` PWM device

#### Returns
Number of channels available for the given device

#### `public void `[`pwm_set`](#group__drivers__periph__pwm_1ga85080df933cc3a416f71acd9f47b90d0)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev,uint8_t channel,uint16_t value)` 

Set the duty-cycle for a given channel of the given PWM device.

The duty-cycle is set in relation to the chosen resolution of the given device. If value > resolution, value is set to resolution.

#### Parameters
* `dev` the PWM device to set 

* `channel` the channel of the given device to set 

* `value` the desired duty-cycle to set

#### `public void `[`pwm_poweron`](#group__drivers__periph__pwm_1ga011d8bb27b3edab7aaee614bbd3acd57)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev)` 

Resume PWM generation on the given device.

When this function is called, the given PWM device is powered on and continues its previously configured operation. The duty cycle of each channel will be the value that was last set.

This function must not be called before the PWM device was initialized.

#### Parameters
* `dev` device to start

#### `public void `[`pwm_poweroff`](#group__drivers__periph__pwm_1gaaa568926a9e527c74eb307258c0a3861)`(`[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` dev)` 

Stop PWM generation on the given device.

This function stops the PWM generation on all configured channels for the given device and powers down the given PWM peripheral.

#### Parameters
* `dev` device to stop

