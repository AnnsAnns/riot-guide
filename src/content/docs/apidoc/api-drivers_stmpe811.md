---
title: api-drivers_stmpe811.md
description: api-drivers_stmpe811.md
---
# group `drivers_stmpe811` 

Device driver interface for the STMPE811 touchscreen controller.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`stmpe811_touch_state_t`](#group__drivers__stmpe811_1ga5ca8b7590c655bcf4acb9b16a48d558a)            | Touch state enum.
`enum `[`stmpe811_touch_conv_t`](#group__drivers__stmpe811_1gae4f35b9889b9ac8bedbb2b8243caf0e7)            | Touch screen coordinate conversions.
`public int `[`stmpe811_init`](#group__drivers__stmpe811_1ga6157af7b234d51cf25ca93396865d765)`(`[`stmpe811_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__t)` * dev,const `[`stmpe811_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t)` * params,`[`stmpe811_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1ga298f293a352d24618600d0d1dfe96ebe)` cb,void * arg)`            | Initialize the given STMPE811 device.
`public int `[`stmpe811_read_touch_position`](#group__drivers__stmpe811_1ga387e3ddb160cc6eb8c5ce9b7f05bb3fc)`(`[`stmpe811_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__t)` * dev,`[`stmpe811_touch_position_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__touch__position__t)` * position)`            | Read the touch position.
`public int `[`stmpe811_read_touch_state`](#group__drivers__stmpe811_1ga4f58efa8d981410a5f607334ec8c61c5)`(const `[`stmpe811_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__t)` * dev,`[`stmpe811_touch_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1ga5ca8b7590c655bcf4acb9b16a48d558a)` * state)`            | Read the touch state (pressed or released)
`struct `[`stmpe811_touch_position_t`](#structstmpe811__touch__position__t) | Touch position structure.
`struct `[`stmpe811_params_t`](#structstmpe811__params__t) | Device initialization parameters.
`struct `[`stmpe811_t`](#structstmpe811__t) | Device descriptor for the STMPE811 sensor.

## Members

#### `enum `[`stmpe811_touch_state_t`](#group__drivers__stmpe811_1ga5ca8b7590c655bcf4acb9b16a48d558a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
STMPE811_TOUCH_STATE_PRESSED            | Touchscreen is pressed.
STMPE811_TOUCH_STATE_RELEASED            | Touchscreen is released.

Touch state enum.

#### `enum `[`stmpe811_touch_conv_t`](#group__drivers__stmpe811_1gae4f35b9889b9ac8bedbb2b8243caf0e7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
STMPE811_NO_CONV            | No conversion.
STMPE811_MIRROR_X            | Mirror X, applied after optional swapping.
STMPE811_MIRROR_Y            | Mirror Y, applied after optional swapping.
STMPE811_SWAP_XY            | Swap XY, applied before optional mirroring.

Touch screen coordinate conversions.

Normally the coordinates of the touch device must be converted to the screen coordinates by swapping and/or mirroring. The flags defined by this enumeration can be ORed for a combined conversion. In this case, the swapping is performed before the mirroring.

The maximum X and Y screen coordinates defined by [stmpe811_params_t::xmax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t_1af787d9fd15d2e2485e1545e1af14c9d9) and [stmpe811_params_t::ymax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t_1a0d9f93cf432369f1b4839f4d79cbc3f3) define the dimension of the touch device in screen coordinates, i.e. after conversion.

#### `public int `[`stmpe811_init`](#group__drivers__stmpe811_1ga6157af7b234d51cf25ca93396865d765)`(`[`stmpe811_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__t)` * dev,const `[`stmpe811_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t)` * params,`[`stmpe811_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1ga298f293a352d24618600d0d1dfe96ebe)` cb,void * arg)` 

Initialize the given STMPE811 device.

#### Parameters
* `dev` Device descriptor of the STMPE811 

* `params` Initialization parameters of the STMPE811 device 

* `cb` Callback function called on touch interrupts 

* `arg` Context argument used in callback function

#### Returns
0 on success 

#### Returns
-ENODEV when no valid device 

#### Returns
-EIO when software reset failed 

#### Returns
-EPROTO on any bus error

#### `public int `[`stmpe811_read_touch_position`](#group__drivers__stmpe811_1ga387e3ddb160cc6eb8c5ce9b7f05bb3fc)`(`[`stmpe811_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__t)` * dev,`[`stmpe811_touch_position_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__touch__position__t)` * position)` 

Read the touch position.

#### Parameters
* `dev` Device descriptor of the STMPE811 

* `position` Touch position

#### Returns
0 on success 

#### Returns
-EPROTO on any bus error

#### `public int `[`stmpe811_read_touch_state`](#group__drivers__stmpe811_1ga4f58efa8d981410a5f607334ec8c61c5)`(const `[`stmpe811_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__t)` * dev,`[`stmpe811_touch_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1ga5ca8b7590c655bcf4acb9b16a48d558a)` * state)` 

Read the touch state (pressed or released)

#### Parameters
* `dev` Device descriptor of the STMPE811 

* `state` Touch state

#### Returns
0 on success 

#### Returns
-EPROTO on any busI2aC error

# struct `stmpe811_touch_position_t` 

Touch position structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`x`](#structstmpe811__touch__position__t_1a89d96f570f93a3ba9241f3257f2c45ef) | X position.
`public uint16_t `[`y`](#structstmpe811__touch__position__t_1ac8a7566a6722a433cd692eb7f683001b) | Y position.

## Members

#### `public uint16_t `[`x`](#structstmpe811__touch__position__t_1a89d96f570f93a3ba9241f3257f2c45ef) 

X position.

#### `public uint16_t `[`y`](#structstmpe811__touch__position__t_1ac8a7566a6722a433cd692eb7f683001b) 

Y position.

# struct `stmpe811_params_t` 

Device initialization parameters.

[stmpe811_params_t::xmax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t_1af787d9fd15d2e2485e1545e1af14c9d9) and [stmpe811_params_t::ymax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t_1a0d9f93cf432369f1b4839f4d79cbc3f3) define the maximum X and Y values in screen coordinates after the optional conversion defined by [stmpe811_params_t::xmax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t_1af787d9fd15d2e2485e1545e1af14c9d9).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structstmpe811__params__t_1af6de9cbebe6721f06e968771cf954854) | I2C device which is used.
`public uint8_t `[`addr`](#structstmpe811__params__t_1af60dbb6f4de39417b340857534fd5f17) | Device I2C address.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structstmpe811__params__t_1a005b3339b065f17955b9bcf9f0b4d3aa) | Touch screen interrupt pin.
`public uint16_t `[`xmax`](#structstmpe811__params__t_1af787d9fd15d2e2485e1545e1af14c9d9) | Touch screen max X position.
`public uint16_t `[`ymax`](#structstmpe811__params__t_1a0d9f93cf432369f1b4839f4d79cbc3f3) | Touch screen max Y position.
`public `[`stmpe811_touch_conv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1gae4f35b9889b9ac8bedbb2b8243caf0e7)` `[`xyconv`](#structstmpe811__params__t_1abe1140013b75702c4a848045f990f2de) | Touch screen coordinates conversion, swapping is applied before mirroring.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structstmpe811__params__t_1af6de9cbebe6721f06e968771cf954854) 

I2C device which is used.

#### `public uint8_t `[`addr`](#structstmpe811__params__t_1af60dbb6f4de39417b340857534fd5f17) 

Device I2C address.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structstmpe811__params__t_1a005b3339b065f17955b9bcf9f0b4d3aa) 

Touch screen interrupt pin.

#### `public uint16_t `[`xmax`](#structstmpe811__params__t_1af787d9fd15d2e2485e1545e1af14c9d9) 

Touch screen max X position.

#### `public uint16_t `[`ymax`](#structstmpe811__params__t_1a0d9f93cf432369f1b4839f4d79cbc3f3) 

Touch screen max Y position.

#### `public `[`stmpe811_touch_conv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1gae4f35b9889b9ac8bedbb2b8243caf0e7)` `[`xyconv`](#structstmpe811__params__t_1abe1140013b75702c4a848045f990f2de) 

Touch screen coordinates conversion, swapping is applied before mirroring.

# struct `stmpe811_t` 

Device descriptor for the STMPE811 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`stmpe811_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t)` `[`params`](#structstmpe811__t_1a65def88fac81cefeeb4c7d7008b3726d) | Device parameters.
`public `[`stmpe811_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1ga298f293a352d24618600d0d1dfe96ebe)` `[`cb`](#structstmpe811__t_1a00d4f44c016bd8fd3855788c3061596a) | Configured IRQ event callback.
`public void * `[`cb_arg`](#structstmpe811__t_1a459587c3a8d10a562ea0ffa2f03da806) | Extra argument for the callback.
`public uint16_t `[`prev_x`](#structstmpe811__t_1a1c9423ec917cb2c02d02b2bed3073aba) | Previous X coordinate.
`public uint16_t `[`prev_y`](#structstmpe811__t_1a3a424dcd69d8c89221111c2b831ab246) | Previous Y coordinate.

## Members

#### `public `[`stmpe811_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_stmpe811.md#structstmpe811__params__t)` `[`params`](#structstmpe811__t_1a65def88fac81cefeeb4c7d7008b3726d) 

Device parameters.

#### `public `[`stmpe811_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__stmpe811_1ga298f293a352d24618600d0d1dfe96ebe)` `[`cb`](#structstmpe811__t_1a00d4f44c016bd8fd3855788c3061596a) 

Configured IRQ event callback.

#### `public void * `[`cb_arg`](#structstmpe811__t_1a459587c3a8d10a562ea0ffa2f03da806) 

Extra argument for the callback.

#### `public uint16_t `[`prev_x`](#structstmpe811__t_1a1c9423ec917cb2c02d02b2bed3073aba) 

Previous X coordinate.

#### `public uint16_t `[`prev_y`](#structstmpe811__t_1a3a424dcd69d8c89221111c2b831ab246) 

Previous Y coordinate.

