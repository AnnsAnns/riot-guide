---
title: api-drivers_motor.md
description: api-drivers_motor.md
---
# group `drivers_motor` 

High-level driver for DC motors.

This API aims to handle DC motor analogic driver. Driver boards using serial communication protocols (I2C, UART, etc...) are not in the scope of this driver. Mainly designed for H-bridge, it could also drive some brushless drivers.

Some H-bridge driver circuits handle several motors. Maximum motor number by H-bridge is set to 2 with CONFIG_MOTOR_DRIVER_MAX macro. This macro can be overridden to support H-bridge drivers with more outputs. However, CONFIG_MOTOR_DRIVER_MAX should not exceed PWM channels number.

motor_driver_t structure represents an H-bridge. As several H-bridge can share a same PWM device, motor_driver_t can represent a group of H-bridge.

Most of H-bridge boards uses the following I/Os for each motor :

* Enable/disable GPIO

* One or two direction GPIOs

* A PWM signal

*
* Each motor direction is controlled (assuming it is enabled) according to
* the following truth table :
*  __________________________
* | DIR0 | DIR1 |  BEHAVIOR  |
* |--------------------------|
* |  0   |  0   | BRAKE LOW  |
* |  0   |  1   |     CW     |
* |  1   |  0   |     CCW    |
* |  1   |  1   | BRAKE HIGH |
* |______|______|____________|
*
* In case of single GPIO for direction, only DIR0 is used without brake
* capability :
*  ___________________
* | DIR0 |  BEHAVIOR  |
* |-------------------|
* |   0  |     CW     |
* |   1  |     CCW    |
* |______|____________|
*
* Some boards add a brake pin with single direction GPIO :
*  ________________________
* | DIR | BRAKE | BEHAVIOR |
* |------------------------|
* |  0  |   0   |    CW    |
* |  0  |   1   |   BRAKE  |
* |  1  |   0   |    CCW   |
* |  1  |   1   |   BRAKE  |
* |_____|_______|__________|
*
* 

From this truth tables we can extract two direction states :

* CW (ClockWise)

* CCW (Counter ClockWise) and a brake capability

BRAKE LOW is functionally the same than BRAKE HIGH but some H-bridge only brake on BRAKE HIGH due to hardware. In case of single direction GPIO, there is no BRAKE, PWM duty cycle is set to 0.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MOTOR_DRIVER_DEV`](#group__drivers__motor_1gab6862a1456bc2056093a27c5c2e64ef4)            | Macro to return motor driver id.
`enum `[`motor_driver_mode_t`](#group__drivers__motor_1ga9f9bb80c2e29dfdafbe0fb6b83e96f5f)            | Describe DC motor driver modes.
`enum `[`motor_driver_mode_brake_t`](#group__drivers__motor_1gafdaef3d663aec44673ff543b0c1d44e3)            | Describe DC motor driver brake modes.
`enum `[`motor_direction_t`](#group__drivers__motor_1ga6dd01ecf36ba5b10af977e38a9168abd)            | Describe DC motor direction states.
`public int `[`motor_driver_init`](#group__drivers__motor_1gaedd658666dd7c13c9ccc0588eac81427)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver)`            | Initialize DC motor driver board.
`public int `[`motor_set`](#group__drivers__motor_1gabd3a982766274bfe01ccf79b751c496b)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id,int32_t pwm_duty_cycle)`            | Set motor speed and direction.
`public int `[`motor_brake`](#group__drivers__motor_1ga247b4fe9e41a05ee681b953c01d4d39c)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id)`            | Brake the motor of a given motor driver.
`public void `[`motor_enable`](#group__drivers__motor_1gacec4c0b5260865e725318036905c245e)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id)`            | Enable a motor of a given motor driver.
`public void `[`motor_disable`](#group__drivers__motor_1gac754fc14404b505f664234c355ea3a90)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id)`            | Disable a motor of a given motor driver.
`struct `[`motor_t`](#structmotor__t) | Describe DC motor with PWM channel and GPIOs.
`struct `[`motor_driver_config_t`](#structmotor__driver__config__t) | Describe DC motor driver with PWM device and motors array.

## Members

#### `define `[`MOTOR_DRIVER_DEV`](#group__drivers__motor_1gab6862a1456bc2056093a27c5c2e64ef4) 

Macro to return motor driver id.

#### `enum `[`motor_driver_mode_t`](#group__drivers__motor_1ga9f9bb80c2e29dfdafbe0fb6b83e96f5f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MOTOR_DRIVER_2_DIRS            | 2 GPIOS for direction, \ handling BRAKE
MOTOR_DRIVER_1_DIR            | Single GPIO for direction, \ no BRAKE.
MOTOR_DRIVER_1_DIR_BRAKE            | Single GPIO for direction, \ Single GPIO for BRAKE.

Describe DC motor driver modes.

#### `enum `[`motor_driver_mode_brake_t`](#group__drivers__motor_1gafdaef3d663aec44673ff543b0c1d44e3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MOTOR_BRAKE_LOW            | Low stage brake.
MOTOR_BRAKE_HIGH            | High stage brake.

Describe DC motor driver brake modes.

#### `enum `[`motor_direction_t`](#group__drivers__motor_1ga6dd01ecf36ba5b10af977e38a9168abd) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MOTOR_CW            | clockwise
MOTOR_CCW            | counter clockwise

Describe DC motor direction states.

#### `public int `[`motor_driver_init`](#group__drivers__motor_1gaedd658666dd7c13c9ccc0588eac81427)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver)` 

Initialize DC motor driver board.

#### Parameters
* `motor_driver` motor driver to initialize

#### Returns
0 on success 

#### Returns
-1 on error with errno set

#### `public int `[`motor_set`](#group__drivers__motor_1gabd3a982766274bfe01ccf79b751c496b)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id,int32_t pwm_duty_cycle)` 

Set motor speed and direction.

#### Parameters
* `motor_driver` motor driver to which motor is attached 

* `motor_id` motor ID on driver 

* `pwm_duty_cycle` Signed PWM duty_cycle to set motor speed and direction

#### Returns
0 on success 

#### Returns
-1 on error with errno set

#### `public int `[`motor_brake`](#group__drivers__motor_1ga247b4fe9e41a05ee681b953c01d4d39c)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id)` 

Brake the motor of a given motor driver.

#### Parameters
* `motor_driver` motor driver to which motor is attached 

* `motor_id` motor ID on driver

#### Returns
0 on success 

#### Returns
-1 on error with errno set

#### `public void `[`motor_enable`](#group__drivers__motor_1gacec4c0b5260865e725318036905c245e)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id)` 

Enable a motor of a given motor driver.

#### Parameters
* `motor_driver` motor driver to which motor is attached 

* `motor_id` motor ID on driver

#### Returns

#### `public void `[`motor_disable`](#group__drivers__motor_1gac754fc14404b505f664234c355ea3a90)`(const `[`motor_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga6f69a26d163af1dc183d239c3fa2bdf0)` motor_driver,uint8_t motor_id)` 

Disable a motor of a given motor driver.

#### Parameters
* `motor_driver` motor driver to which motor is attached 

* `motor_id` motor ID on driver

#### Returns

# struct `motor_t` 

Describe DC motor with PWM channel and GPIOs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`pwm_channel`](#structmotor__t_1a31419547e15db9303464228a56349841) | PWM channel the motor is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio_enable`](#structmotor__t_1a5f30f8d743834f11885aa945cd582c84) | GPIO to enable/disable motor.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio_dir0`](#structmotor__t_1a28a29c8f359c8d061cb711d5743c986b) | GPIO to control rotation direction.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio_dir1_or_brake`](#structmotor__t_1ac77ab7223e67ce9b8d702b86ecd47ba9) | GPIO to control rotation direction.
`public uint8_t `[`gpio_dir_reverse`](#structmotor__t_1ab29fd14210c4a2baa303236dd55ae88c) | flag to reverse direction
`public uint8_t `[`gpio_enable_invert`](#structmotor__t_1a0e0cf43e6adcc7764bcc1d3c8b3ef117) | flag to set enable GPIO inverted mode
`public uint8_t `[`gpio_brake_invert`](#structmotor__t_1a2facc7836489adead1289f73d76b5c82) | flag to make brake active low

## Members

#### `public int `[`pwm_channel`](#structmotor__t_1a31419547e15db9303464228a56349841) 

PWM channel the motor is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio_enable`](#structmotor__t_1a5f30f8d743834f11885aa945cd582c84) 

GPIO to enable/disable motor.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio_dir0`](#structmotor__t_1a28a29c8f359c8d061cb711d5743c986b) 

GPIO to control rotation direction.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`gpio_dir1_or_brake`](#structmotor__t_1ac77ab7223e67ce9b8d702b86ecd47ba9) 

GPIO to control rotation direction.

#### `public uint8_t `[`gpio_dir_reverse`](#structmotor__t_1ab29fd14210c4a2baa303236dd55ae88c) 

flag to reverse direction

#### `public uint8_t `[`gpio_enable_invert`](#structmotor__t_1a0e0cf43e6adcc7764bcc1d3c8b3ef117) 

flag to set enable GPIO inverted mode

#### `public uint8_t `[`gpio_brake_invert`](#structmotor__t_1a2facc7836489adead1289f73d76b5c82) 

flag to make brake active low

# struct `motor_driver_config_t` 

Describe DC motor driver with PWM device and motors array.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` `[`pwm_dev`](#structmotor__driver__config__t_1ae65b1931f25a7911e5d8bc491a552485) | PWM device driving motors.
`public `[`motor_driver_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga9f9bb80c2e29dfdafbe0fb6b83e96f5f)` `[`mode`](#structmotor__driver__config__t_1aa4f3fd5abf2fd6e6450ae5fd26353ab6) | driver mode
`public `[`motor_driver_mode_brake_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1gafdaef3d663aec44673ff543b0c1d44e3)` `[`mode_brake`](#structmotor__driver__config__t_1a6c3f8c743751d0fe9e0dca139d7a2c43) | driver brake mode
`public `[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` `[`pwm_mode`](#structmotor__driver__config__t_1a6561fbbaa7ac6393e29b41eec112d4aa) | PWM mode.
`public uint32_t `[`pwm_frequency`](#structmotor__driver__config__t_1a22d6fe642953dc46ca646ea0e53fb4a1) | PWM device frequency.
`public uint32_t `[`pwm_resolution`](#structmotor__driver__config__t_1ae1a497a44b51f138c45b590b5593e12b) | PWM device resolution.
`public uint8_t `[`nb_motors`](#structmotor__driver__config__t_1adebed9f652fcac367b87515756136ff9) | number of moros
`public `[`motor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_motor.md#structmotor__t)` `[`motors`](#structmotor__driver__config__t_1a685404254fe992ee0fb94f14d840c5ab) | motors array
`public `[`motor_driver_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga3b0d592a83f5cd4f4941eb9efbd3ce48)` `[`cb`](#structmotor__driver__config__t_1a7cc8f925e205010cfd8251a4419bacf3) | callback on motor_set

## Members

#### `public `[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` `[`pwm_dev`](#structmotor__driver__config__t_1ae65b1931f25a7911e5d8bc491a552485) 

PWM device driving motors.

#### `public `[`motor_driver_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga9f9bb80c2e29dfdafbe0fb6b83e96f5f)` `[`mode`](#structmotor__driver__config__t_1aa4f3fd5abf2fd6e6450ae5fd26353ab6) 

driver mode

#### `public `[`motor_driver_mode_brake_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1gafdaef3d663aec44673ff543b0c1d44e3)` `[`mode_brake`](#structmotor__driver__config__t_1a6c3f8c743751d0fe9e0dca139d7a2c43) 

driver brake mode

#### `public `[`pwm_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2openlabs-kw41z-mini_2include_2periph__conf_8h_1a562b5946a0edd6f5eebb63db7d154d56)` `[`pwm_mode`](#structmotor__driver__config__t_1a6561fbbaa7ac6393e29b41eec112d4aa) 

PWM mode.

#### `public uint32_t `[`pwm_frequency`](#structmotor__driver__config__t_1a22d6fe642953dc46ca646ea0e53fb4a1) 

PWM device frequency.

#### `public uint32_t `[`pwm_resolution`](#structmotor__driver__config__t_1ae1a497a44b51f138c45b590b5593e12b) 

PWM device resolution.

#### `public uint8_t `[`nb_motors`](#structmotor__driver__config__t_1adebed9f652fcac367b87515756136ff9) 

number of moros

#### `public `[`motor_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_motor.md#structmotor__t)` `[`motors`](#structmotor__driver__config__t_1a685404254fe992ee0fb94f14d840c5ab) 

motors array

#### `public `[`motor_driver_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__motor_1ga3b0d592a83f5cd4f4941eb9efbd3ce48)` `[`cb`](#structmotor__driver__config__t_1a7cc8f925e205010cfd8251a4419bacf3) 

callback on motor_set

