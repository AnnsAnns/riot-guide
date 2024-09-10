---
title: api-drivers_servo.md
description: api-drivers_servo.md
---
# group `drivers_servo` 

High-level driver for servo motors.

UsageSelect a flavor of the driver, e.g. `USEMODULE += servo_pwm` for [PWM based servo driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo__pwm) or `USEMODULE += servo_timer` for [periph_timer_periodic based servo driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo__timer) to use. Typically, the PWM implementation is the preferred one, but some MCU (e.g. nRF52xxx) cannot configure the PWM peripheral to run anywhere close to the 50 Hz to 100 Hz required.

In addition, you many need to extend or adapt [servo_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#servo__params_8h_1a3209a97704b4d0535daa0abccec29c7f) and, depending on the selected implementation, [servo_pwm_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#servo__params_8h_1a8f9ebace6a1d4d53f151a41065e63ec5) or [servo_timer_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#servo__params_8h_1acad6fc28f55ac61aada767de377ada5c) to match your hardware configuration.

The test application in `tests/drivers/servo` can serve as starting point for users.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SERVO_TIMER_MAX_CHAN`](#group__drivers__servo_1gabb89b2229e011288b5c031b188c1432a)            | In case the `servo_timer` backend is used to driver the servo, this is the highest channel number usable by the driver.
`public int `[`servo_init`](#group__drivers__servo_1ga564cd2daa1bfc4d3e6f0ab33b32b9d94)`(`[`servo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo_1gaeb994d32e00714381648cde445df8695)` * dev,const `[`servo_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t)` * params)`            | Initialize servo.
`public void `[`servo_set`](#group__drivers__servo_1gadf2a35b093580d061df998318177990c)`(`[`servo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo_1gaeb994d32e00714381648cde445df8695)` * dev,uint8_t pos)`            | Set the servo motor to a specified position.
`struct `[`servo_pwm_params_t`](#structservo__pwm__params__t) | PWM configuration parameters for a servos.
`struct `[`servo_timer_ctx_t`](#structservo__timer__ctx__t) | Memory needed for book keeping when using [periph_timer_periodic based servo driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo__timer).
`struct `[`servo_timer_params_t`](#structservo__timer__params__t) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) configuration parameters for a servos.
`struct `[`servo_params_t`](#structservo__params__t) | Configuration parameters for a servo.
`struct `[`servo`](#structservo) | Servo device state.

## Members

#### `define `[`SERVO_TIMER_MAX_CHAN`](#group__drivers__servo_1gabb89b2229e011288b5c031b188c1432a) 

In case the `servo_timer` backend is used to driver the servo, this is the highest channel number usable by the driver.

To drive *n* servos, *n* + 1 timer channels are required. Hence, this must be at least 2

Trimming this down safes a small bit of RAM: Storage for one pointer is wasted on every servo that could be controlled by a timer but is not actually used.

#### `public int `[`servo_init`](#group__drivers__servo_1ga564cd2daa1bfc4d3e6f0ab33b32b9d94)`(`[`servo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo_1gaeb994d32e00714381648cde445df8695)` * dev,const `[`servo_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t)` * params)` 

Initialize servo.

#### Parameters
* `dev` Device handle to initialize 

* `params` Parameters defining the PWM configuration

#### Parameters
* `0` Success 

* `<0` Failure (as negative errno code to indicate cause)

#### `public void `[`servo_set`](#group__drivers__servo_1gadf2a35b093580d061df998318177990c)`(`[`servo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo_1gaeb994d32e00714381648cde445df8695)` * dev,uint8_t pos)` 

Set the servo motor to a specified position.

The position of the servo is specified in the fraction of maximum extension, with 0 being the lowest extension (e.g. on an 180° servo it would be at -90°) and `UINT8_MAX` being the highest extension (e.g. +90° on that 180° servo).

#### Parameters
* `dev` the servo to set 

* `pos` the extension to set

Note: 8 bit of resolution may seem low, but is indeed more than high enough for any practical PWM based servo. For higher precision, stepper motors would be required.

# struct `servo_pwm_params_t` 

PWM configuration parameters for a servos.

Only used with

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`res`](#structservo__pwm__params__t_1aacd3bfb300ced5e4cdd1c8df13b67549) | PWM resolution to use.
`public uint16_t `[`freq`](#structservo__pwm__params__t_1abd3f32682317f514a0b63b727f0b0373) | PWM frequency to use.
`public `[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` `[`pwm`](#structservo__pwm__params__t_1a7d4fca97d8645b7de859f14a69d59d18) | PWM dev the servo is connected to.

## Members

#### `public uint16_t `[`res`](#structservo__pwm__params__t_1aacd3bfb300ced5e4cdd1c8df13b67549) 

PWM resolution to use.

#### `public uint16_t `[`freq`](#structservo__pwm__params__t_1abd3f32682317f514a0b63b727f0b0373) 

PWM frequency to use.

#### `public `[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` `[`pwm`](#structservo__pwm__params__t_1a7d4fca97d8645b7de859f14a69d59d18) 

PWM dev the servo is connected to.

# struct `servo_timer_ctx_t` 

Memory needed for book keeping when using [periph_timer_periodic based servo driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo__timer).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`servo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo_1gaeb994d32e00714381648cde445df8695)` * `[`servo_map`](#structservo__timer__ctx__t_1a34bbe7cdfe31d45a1fabdea444508a4b) | Look up table to get from channel.

## Members

#### `public `[`servo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo_1gaeb994d32e00714381648cde445df8695)` * `[`servo_map`](#structservo__timer__ctx__t_1a34bbe7cdfe31d45a1fabdea444508a4b) 

Look up table to get from channel.

Since timer channel 0 is used to set all servo pins, we use `chan - 1` as idx rather than `chan` to not waste one entry.

# struct `servo_timer_params_t` 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) configuration parameters for a servos.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`timer`](#structservo__timer__params__t_1a5c444d5edcbf36826b4450fb2d34a9cd) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) to use.
`public uint32_t `[`timer_freq`](#structservo__timer__params__t_1ada8289c57690dc619ffdc915be5b9dce) | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) frequency to use.
`public uint16_t `[`servo_freq`](#structservo__timer__params__t_1aa9ad08c2028cb1445a6da54b5761a081) | Servo frequency (typically 50 Hz or 100 Hz)
`public `[`servo_timer_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__timer__ctx__t)` * `[`ctx`](#structservo__timer__params__t_1a366bea17494bf69004f26dd96229b5c1) | Per-timer state needed for book keeping.

## Members

#### `public `[`tim_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1ga4a57e4433f77c5f60ecbdb5739d1add6)` `[`timer`](#structservo__timer__params__t_1a5c444d5edcbf36826b4450fb2d34a9cd) 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) to use.

#### `public uint32_t `[`timer_freq`](#structservo__timer__params__t_1ada8289c57690dc619ffdc915be5b9dce) 

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) frequency to use.

#### `public uint16_t `[`servo_freq`](#structservo__timer__params__t_1aa9ad08c2028cb1445a6da54b5761a081) 

Servo frequency (typically 50 Hz or 100 Hz)

#### `public `[`servo_timer_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__timer__ctx__t)` * `[`ctx`](#structservo__timer__params__t_1a366bea17494bf69004f26dd96229b5c1) 

Per-timer state needed for book keeping.

# struct `servo_params_t` 

Configuration parameters for a servo.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`servo_pwm_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__pwm__params__t)` * `[`pwm`](#structservo__params__t_1a645438e47efecdaf0a6947ebda485ec2) | Specification of the PWM device the servo is connected to.
`public const `[`servo_timer_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__timer__params__t)` * `[`timer`](#structservo__params__t_1ade5afe2b1e209b8c4f00549f3d70b763) | Specification of the timer to use.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`servo_pin`](#structservo__params__t_1ab4dbec8cb42381fc6e275b97be195bfb) | GPIO pin the servo is connected to.
`public uint16_t `[`min_us`](#structservo__params__t_1ad2f82f693ee79b6b4672224b55a91436) | Duration of high phase (in µs) for min extension.
`public uint16_t `[`max_us`](#structservo__params__t_1a5939b60b2d6ba4c8d2c38aa2fc16c260) | Duration of high phase (in µs) for max extension.

## Members

#### `public const `[`servo_pwm_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__pwm__params__t)` * `[`pwm`](#structservo__params__t_1a645438e47efecdaf0a6947ebda485ec2) 

Specification of the PWM device the servo is connected to.

Only available when [PWM based servo driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo__pwm) is used

#### `public const `[`servo_timer_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__timer__params__t)` * `[`timer`](#structservo__params__t_1ade5afe2b1e209b8c4f00549f3d70b763) 

Specification of the timer to use.

Only available when [periph_timer_periodic based servo driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo__timer) is used

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`servo_pin`](#structservo__params__t_1ab4dbec8cb42381fc6e275b97be195bfb) 

GPIO pin the servo is connected to.

Only available when [periph_timer_periodic based servo driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__servo__timer) is used

#### `public uint16_t `[`min_us`](#structservo__params__t_1ad2f82f693ee79b6b4672224b55a91436) 

Duration of high phase (in µs) for min extension.

#### `public uint16_t `[`max_us`](#structservo__params__t_1a5939b60b2d6ba4c8d2c38aa2fc16c260) 

Duration of high phase (in µs) for max extension.

# struct `servo` 

Servo device state.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`servo_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t)` * `[`params`](#structservo_1aec8aba4d76c71a3be365cb74b8554c98) | Parameters of this servo.
`public uint16_t `[`min`](#structservo_1a1fdba53f2f530ab58d912444bd0c4722) | Minimum PWM duty cycle / timer target matching [servo_params_t::min_us](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t_1ad2f82f693ee79b6b4672224b55a91436).
`public uint16_t `[`max`](#structservo_1a2479c72e8ebd31b4b3b8e9ae5b184985) | Maximum PWM duty cycle / timer target matching [servo_params_t::min_us](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t_1ad2f82f693ee79b6b4672224b55a91436).

## Members

#### `public const `[`servo_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t)` * `[`params`](#structservo_1aec8aba4d76c71a3be365cb74b8554c98) 

Parameters of this servo.

#### `public uint16_t `[`min`](#structservo_1a1fdba53f2f530ab58d912444bd0c4722) 

Minimum PWM duty cycle / timer target matching [servo_params_t::min_us](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t_1ad2f82f693ee79b6b4672224b55a91436).

Note that the actual PWM frequency can be significantly different from the requested one, depending on what the hardware can generate using the clock source and clock dividers available.

#### `public uint16_t `[`max`](#structservo_1a2479c72e8ebd31b4b3b8e9ae5b184985) 

Maximum PWM duty cycle / timer target matching [servo_params_t::min_us](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_servo.md#structservo__params__t_1ad2f82f693ee79b6b4672224b55a91436).

Note that the actual PWM frequency can be significantly different from the requested one, depending on what the hardware can generate using the clock source and clock dividers available.

