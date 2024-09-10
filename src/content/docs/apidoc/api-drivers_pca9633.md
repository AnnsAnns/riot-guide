---
title: api-drivers_pca9633.md
description: api-drivers_pca9633.md
---
# group `drivers_pca9633` 

Device driver for the NXP PCA9633.

Hendrik van Essen [hendrik.ve@fu-berlin.de](mailto:hendrik.ve@fu-berlin.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PCA9633_BLINKING_PERIOD_MAX_MS`](#group__drivers__pca9633_1ga3b5fd5ffd8ef44e0761a286fc8936c93)            | Blinking period with a maximum duration of ~10.73 s.
`define `[`PCA9633_BLINKING_RATIO_BALANCED`](#group__drivers__pca9633_1ga812850bf0b6bca302ee08e15f7949d95)            | Ration between on/ off in blinking mode is balanced.
`enum `[`@232`](#group__drivers__pca9633_1gaafc5993fe6fd7fec62e94ef57859c353)            | PCA9633 driver error codes.
`enum `[`pca9633_pwm_channel_t`](#group__drivers__pca9633_1ga9a0276c2bd5f315f4eacea8002ff489d)            | PCA9633 PWM channel definitions.
`enum `[`pca9633_ldr_state_t`](#group__drivers__pca9633_1ga48eac44bb002d90770b321abb28d5ff3)            | LED driver output state, LEDOUT (page 14, below table 13)
`enum `[`pca9633_auto_inc_option_t`](#group__drivers__pca9633_1ga90c1c711fb3254cbf9eb588f7ab761c1)            | Auto-Increment options (page 10, table 6)
`enum `[`pca9633_group_control_mode_t`](#group__drivers__pca9633_1gacfca9e82d4222ad9621066e14da3132d)            | PCA9633 group control modes.
`public int `[`pca9633_init`](#group__drivers__pca9633_1gae8b0e4d9727265d52828fb972beea386)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,const `[`pca9633_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__params__t)` * params)`            | Initialization.
`public void `[`pca9633_turn_on`](#group__drivers__pca9633_1gaf3bdea9f76d1aa1f0d644e9cbb21da5b)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)`            | Turn on all LEDs.
`public void `[`pca9633_turn_off`](#group__drivers__pca9633_1ga318e00ee25754d6033480c06564440e4)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)`            | Turn off all LEDs.
`public void `[`pca9633_wakeup`](#group__drivers__pca9633_1gaf3849755f4007ddfba361fb056fecc80)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)`            | Switch to normal mode.
`public void `[`pca9633_sleep`](#group__drivers__pca9633_1ga47db64715a121a73cd0828750ca7d1dc)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)`            | Switch to low power mode.
`public void `[`pca9633_set_pwm`](#group__drivers__pca9633_1ga4b8075b4d4c16273856474d19da13730)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_pwm_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga9a0276c2bd5f315f4eacea8002ff489d)` pwm_channel,uint8_t pwm)`            | Set individual PWM signal for a given channel.
`public void `[`pca9633_set_grp_pwm`](#group__drivers__pca9633_1ga58a12a8fb47b975d429356859ed60737)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint8_t pwm)`            | Set global PWM signal.
`public void `[`pca9633_set_blinking`](#group__drivers__pca9633_1ga4c31e9b1762282a379248a2169bd458d)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint16_t blink_period_ms,uint8_t on_off_ratio)`            | Set up values for blinking mode.
`public void `[`pca9633_set_rgb`](#group__drivers__pca9633_1gab29cc143b6dd693c7ccdfb7e82a75f06)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint8_t r,uint8_t g,uint8_t b)`            | Set PWM values for RGB.
`public void `[`pca9633_set_rgba`](#group__drivers__pca9633_1ga7b318243aff6bb33ebcf4456ef43f508)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint8_t r,uint8_t g,uint8_t b,uint8_t w)`            | Set PWM values for RGBA.
`public void `[`pca9633_set_ldr_state`](#group__drivers__pca9633_1ga93c6d0e7beeddd6f08f5f27fbfaf4cde)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_ldr_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga48eac44bb002d90770b321abb28d5ff3)` state,`[`pca9633_pwm_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga9a0276c2bd5f315f4eacea8002ff489d)` pwm_channel)`            | Set the LED driver output state for a given channel.
`public void `[`pca9633_set_ldr_state_all`](#group__drivers__pca9633_1ga2e92226c0f347188fe7cd1e17e3bb749)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_ldr_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga48eac44bb002d90770b321abb28d5ff3)` state)`            | Set the LED driver output state for all channels.
`public void `[`pca9633_set_auto_increment`](#group__drivers__pca9633_1ga3f4bf5e4950580e5f94a19ce58da6c97)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_auto_inc_option_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga90c1c711fb3254cbf9eb588f7ab761c1)` option)`            | Set an option for auto increment.
`public void `[`pca9633_set_group_control_mode`](#group__drivers__pca9633_1ga4c6ee992c8df93d4a5e20e760e1a2aeb)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_group_control_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1gacfca9e82d4222ad9621066e14da3132d)` mode)`            | Set the group control mode.
`struct `[`pca9633_params_t`](#structpca9633__params__t) | PCA9633 device initialization parameters.
`struct `[`pca9633_t`](#structpca9633__t) | PCA9633 PWM device data structure type.

## Members

#### `define `[`PCA9633_BLINKING_PERIOD_MAX_MS`](#group__drivers__pca9633_1ga3b5fd5ffd8ef44e0761a286fc8936c93) 

Blinking period with a maximum duration of ~10.73 s.

#### `define `[`PCA9633_BLINKING_RATIO_BALANCED`](#group__drivers__pca9633_1ga812850bf0b6bca302ee08e15f7949d95) 

Ration between on/ off in blinking mode is balanced.

128 = 255 / 2

#### `enum `[`@232`](#group__drivers__pca9633_1gaafc5993fe6fd7fec62e94ef57859c353) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9633_OK            | Success.
PCA9633_ERROR_I2C            | I2C communication error.

PCA9633 driver error codes.

#### `enum `[`pca9633_pwm_channel_t`](#group__drivers__pca9633_1ga9a0276c2bd5f315f4eacea8002ff489d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9633_PWM_CHANNEL_0            | PWM channel 0.
PCA9633_PWM_CHANNEL_1            | PWM channel 1.
PCA9633_PWM_CHANNEL_2            | PWM channel 2.
PCA9633_PWM_CHANNEL_3            | PWM channel 3.

PCA9633 PWM channel definitions.

#### `enum `[`pca9633_ldr_state_t`](#group__drivers__pca9633_1ga48eac44bb002d90770b321abb28d5ff3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9633_LDR_STATE_OFF            | LED driver x is off.
PCA9633_LDR_STATE_ON            | LED driver x is fully on (individual brightness and group dimming/ blinking not controlled)
PCA9633_LDR_STATE_IND            | LED driver x individual brightness can be controlled through its PWMx register.
PCA9633_LDR_STATE_IND_GRP            | LED driver x individual brightness and group dimming/ blinking can be controlled through its PWMx register and the GRPPWM registers.

LED driver output state, LEDOUT (page 14, below table 13)

#### `enum `[`pca9633_auto_inc_option_t`](#group__drivers__pca9633_1ga90c1c711fb3254cbf9eb588f7ab761c1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9633_AI_DISABLED            | No Auto-Increment.
PCA9633_AI_ALL            | Auto-Increment for all registers.
PCA9633_AI_IND            | Auto-Increment for individual brightness registers only.
PCA9633_AI_GBL            | Auto-Increment for global control registers only.
PCA9633_AI_IND_GBL            | Auto-Increment for individual and global control registers only.

Auto-Increment options (page 10, table 6)

#### `enum `[`pca9633_group_control_mode_t`](#group__drivers__pca9633_1gacfca9e82d4222ad9621066e14da3132d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCA9633_GROUP_CONTROL_MODE_BLINKING            | Control mode for blinking.
PCA9633_GROUP_CONTROL_MODE_DIMMING            | Control mode for dimming.

PCA9633 group control modes.

#### `public int `[`pca9633_init`](#group__drivers__pca9633_1gae8b0e4d9727265d52828fb972beea386)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,const `[`pca9633_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__params__t)` * params)` 

Initialization.

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `params` Parameters for device initialization

#### Returns
PCA9633_OK on success 

#### Returns
-PCA9633_ERROR_I2C if acquiring of I2C bus fails 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public void `[`pca9633_turn_on`](#group__drivers__pca9633_1gaf3bdea9f76d1aa1f0d644e9cbb21da5b)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)` 

Turn on all LEDs.

Restores settings saved at [pca9633_turn_off()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga318e00ee25754d6033480c06564440e4).

WARNING: If you call [pca9633_turn_off()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga318e00ee25754d6033480c06564440e4) twice, without calling [pca9633_turn_on()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1gaf3bdea9f76d1aa1f0d644e9cbb21da5b) in between, then the restored state will be PCA9633_LDR_STATE_OFF!

#### Parameters
* `dev` Device descriptor of the PCA9633

#### `public void `[`pca9633_turn_off`](#group__drivers__pca9633_1ga318e00ee25754d6033480c06564440e4)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)` 

Turn off all LEDs.

Saves current settings for [pca9633_turn_on()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1gaf3bdea9f76d1aa1f0d644e9cbb21da5b). For power saving, see [pca9633_sleep()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga47db64715a121a73cd0828750ca7d1dc).

WARNING: If you call [pca9633_turn_off()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga318e00ee25754d6033480c06564440e4) twice, without calling [pca9633_turn_on()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1gaf3bdea9f76d1aa1f0d644e9cbb21da5b) in between, then the restored state will be PCA9633_LDR_STATE_OFF!

#### Parameters
* `dev` Device descriptor of the PCA9633

#### `public void `[`pca9633_wakeup`](#group__drivers__pca9633_1gaf3849755f4007ddfba361fb056fecc80)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)` 

Switch to normal mode.

#### Parameters
* `dev` Device descriptor of the PCA9633

#### `public void `[`pca9633_sleep`](#group__drivers__pca9633_1ga47db64715a121a73cd0828750ca7d1dc)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev)` 

Switch to low power mode.

#### Parameters
* `dev` Device descriptor of the PCA9633

#### `public void `[`pca9633_set_pwm`](#group__drivers__pca9633_1ga4b8075b4d4c16273856474d19da13730)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_pwm_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga9a0276c2bd5f315f4eacea8002ff489d)` pwm_channel,uint8_t pwm)` 

Set individual PWM signal for a given channel.

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `pwm_channel` PWM channel 

* `pwm` PWM value

#### `public void `[`pca9633_set_grp_pwm`](#group__drivers__pca9633_1ga58a12a8fb47b975d429356859ed60737)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint8_t pwm)` 

Set global PWM signal.

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `pwm` PWM value

#### `public void `[`pca9633_set_blinking`](#group__drivers__pca9633_1ga4c31e9b1762282a379248a2169bd458d)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint16_t blink_period_ms,uint8_t on_off_ratio)` 

Set up values for blinking mode.

Blinking mode needs to be activated manually by calling pca9633_set_group_control_mode(GROUP_CONTROL_MODE_BLINKING).

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `blink_period_ms` Period in ms for one blink (turning off and on). Maximum period possible is PCA9633_BLINKING_PERIOD_MAX_MS ≈ 10.73 s. All values above this maximum will we capped to it. 

* `on_off_ratio` Value between 0 and 255, where e.g. a value of 64 (255/4) means 1/4 of the time the LEDs are on and 3/4 of the time the LEDs are off.

#### `public void `[`pca9633_set_rgb`](#group__drivers__pca9633_1gab29cc143b6dd693c7ccdfb7e82a75f06)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint8_t r,uint8_t g,uint8_t b)` 

Set PWM values for RGB.

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `r` Value for red color channel 

* `g` Value for green color channel 

* `b` Value for blue color channel

#### `public void `[`pca9633_set_rgba`](#group__drivers__pca9633_1ga7b318243aff6bb33ebcf4456ef43f508)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,uint8_t r,uint8_t g,uint8_t b,uint8_t w)` 

Set PWM values for RGBA.

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `r` Value for red color channel 

* `g` Value for green color channel 

* `b` Value for blue color channel 

* `w` Value for amber color channel

#### `public void `[`pca9633_set_ldr_state`](#group__drivers__pca9633_1ga93c6d0e7beeddd6f08f5f27fbfaf4cde)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_ldr_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga48eac44bb002d90770b321abb28d5ff3)` state,`[`pca9633_pwm_channel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga9a0276c2bd5f315f4eacea8002ff489d)` pwm_channel)` 

Set the LED driver output state for a given channel.

There are four states:

* PCA9633_LDR_STATE_OFF

* PCA9633_LDR_STATE_ON

* PCA9633_LDR_STATE_IND

* PCA9633_LDR_STATE_IND_GRP

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `state` One of the four possible states 

* `pwm_channel` PWM channel belonging to LDR

#### `public void `[`pca9633_set_ldr_state_all`](#group__drivers__pca9633_1ga2e92226c0f347188fe7cd1e17e3bb749)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_ldr_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga48eac44bb002d90770b321abb28d5ff3)` state)` 

Set the LED driver output state for all channels.

There are four states:

* PCA9633_LDR_STATE_OFF

* PCA9633_LDR_STATE_ON

* PCA9633_LDR_STATE_IND

* PCA9633_LDR_STATE_IND_GRP

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `state` One of the four possible states

#### `public void `[`pca9633_set_auto_increment`](#group__drivers__pca9633_1ga3f4bf5e4950580e5f94a19ce58da6c97)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_auto_inc_option_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1ga90c1c711fb3254cbf9eb588f7ab761c1)` option)` 

Set an option for auto increment.

There are five options:

* PCA9633_AI_DISABLED

* PCA9633_AI_ALL

* PCA9633_AI_IND

* PCA9633_AI_GBL

* PCA9633_AI_IND_GBL

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `option` One of the possible five options

#### `public void `[`pca9633_set_group_control_mode`](#group__drivers__pca9633_1ga4c6ee992c8df93d4a5e20e760e1a2aeb)`(`[`pca9633_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__t)` * dev,`[`pca9633_group_control_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pca9633_1gacfca9e82d4222ad9621066e14da3132d)` mode)` 

Set the group control mode.

There are two modes:

* PCA9633_GROUP_CONTROL_MODE_BLINKING

* PCA9633_GROUP_CONTROL_MODE_DIMMING

#### Parameters
* `dev` Device descriptor of the PCA9633 

* `mode` One of the two possible modes

# struct `pca9633_params_t` 

PCA9633 device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structpca9633__params__t_1a6f082dcee385cf47d0566b690aeac4b4) | I2C device.
`public uint16_t `[`i2c_addr`](#structpca9633__params__t_1aadb729b9cb43162e51b4718afe29f096) | I2C address of device.
`public uint8_t `[`reg_pwm_red`](#structpca9633__params__t_1a7c403a1b01559cf3e6d9d52aa58a0b62) | Register for red color.
`public uint8_t `[`reg_pwm_green`](#structpca9633__params__t_1a49f9a35cddd79f3ddcc566e642c6a9dc) | Register for green color.
`public uint8_t `[`reg_pwm_blue`](#structpca9633__params__t_1a2b44b8bbba0622513c8c6a6eb356941d) | Register for blue color.
`public uint8_t `[`reg_pwm_amber`](#structpca9633__params__t_1a4d4df92708f73b79a348c6b61f0a6a0b) | Register for amber color.
`public bool `[`has_amber_channel`](#structpca9633__params__t_1ad0e902f2a12206992528332f26a55cc2) | Whether PCA9633 has fourth channel.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structpca9633__params__t_1a6f082dcee385cf47d0566b690aeac4b4) 

I2C device.

#### `public uint16_t `[`i2c_addr`](#structpca9633__params__t_1aadb729b9cb43162e51b4718afe29f096) 

I2C address of device.

#### `public uint8_t `[`reg_pwm_red`](#structpca9633__params__t_1a7c403a1b01559cf3e6d9d52aa58a0b62) 

Register for red color.

#### `public uint8_t `[`reg_pwm_green`](#structpca9633__params__t_1a49f9a35cddd79f3ddcc566e642c6a9dc) 

Register for green color.

#### `public uint8_t `[`reg_pwm_blue`](#structpca9633__params__t_1a2b44b8bbba0622513c8c6a6eb356941d) 

Register for blue color.

#### `public uint8_t `[`reg_pwm_amber`](#structpca9633__params__t_1a4d4df92708f73b79a348c6b61f0a6a0b) 

Register for amber color.

#### `public bool `[`has_amber_channel`](#structpca9633__params__t_1ad0e902f2a12206992528332f26a55cc2) 

Whether PCA9633 has fourth channel.

# struct `pca9633_t` 

PCA9633 PWM device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`pca9633_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__params__t)` `[`params`](#structpca9633__t_1ae1d8269d0e10d1cfc2be84214ec6bafc) | Device initialization parameters.
`public uint8_t `[`stored_reg_ledout`](#structpca9633__t_1a4ffe8a427cf14c5110f4ef4507f5c036) | Stored register content of LEDOUT.

## Members

#### `public `[`pca9633_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pca9633.md#structpca9633__params__t)` `[`params`](#structpca9633__t_1ae1d8269d0e10d1cfc2be84214ec6bafc) 

Device initialization parameters.

#### `public uint8_t `[`stored_reg_ledout`](#structpca9633__t_1a4ffe8a427cf14c5110f4ef4507f5c036) 

Stored register content of LEDOUT.

