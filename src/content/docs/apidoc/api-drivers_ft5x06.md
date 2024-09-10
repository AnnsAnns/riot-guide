---
title: api-drivers_ft5x06.md
description: api-drivers_ft5x06.md
---
# group `drivers_ft5x06` 

Multi-touch capacitive panel controller.

This driver should also support FT5x06，FT5606，FT5x16，FT6x06，Ft6x36 FT5x06i，FT5336，FT3316，FT5436i，FT5336i，FT5x46.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`ft5x06_touch_gesture_t`](#group__drivers__ft5x06_1gaf09ba7ee8136d1a3e01958ffbed5f26d)            | Touch gesture.
`enum `[`ft5x06_type_t`](#group__drivers__ft5x06_1ga44250c0d29da83c8aaf0da4d01dbffa3)            | Device type.
`enum `[`ft5x06_touch_conv_t`](#group__drivers__ft5x06_1ga089f26e52bd67a7478109a13627f7dec)            | Touch screen coordinate conversions.
`public int `[`ft5x06_init`](#group__drivers__ft5x06_1gaafa9ee8b8cbad2d17bc4c5649183bc4e)`(`[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,const `[`ft5x06_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t)` * params,`[`ft5x06_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1ga4c56bfbacee727ea4bbb3099ee46a9f3)` cb,void * arg)`            | Initialize the given device.
`public int `[`ft5x06_read_touch_positions`](#group__drivers__ft5x06_1ga65255d61c60dc1d246b83776ebc4aa63)`(const `[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,`[`ft5x06_touch_position_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__touch__position__t)` * positions,size_t len)`            | Read the touch positions.
`public int `[`ft5x06_read_touch_count`](#group__drivers__ft5x06_1ga6bdca67f468c846768eacc5c291556ab)`(const `[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,uint8_t * count)`            | Read the number of touch.
`public int `[`ft5x06_read_touch_gesture`](#group__drivers__ft5x06_1ga08ee85c87e9d41e828aa88e27c7c6c66)`(const `[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,`[`ft5x06_touch_gesture_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1gaf09ba7ee8136d1a3e01958ffbed5f26d)` * gesture)`            | Read the gesture detected.
`struct `[`ft5x06_touch_position_t`](#structft5x06__touch__position__t) | Touch position structure.
`struct `[`ft5x06_params_t`](#structft5x06__params__t) | Device initialization parameters.
`struct `[`ft5x06_t`](#structft5x06__t) | Device descriptor for the driver.

## Members

#### `enum `[`ft5x06_touch_gesture_t`](#group__drivers__ft5x06_1gaf09ba7ee8136d1a3e01958ffbed5f26d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
FT5X06_TOUCH_NO_GESTURE            | No gesture detected.
FT5X06_TOUCH_MOVE_UP            | Move up gesture detected.
FT5X06_TOUCH_MOVE_LEFT            | Move left gesture detected.
FT5X06_TOUCH_MOVE_DOWN            | Move down gesture detected.
FT5X06_TOUCH_MOVE_RIGHT            | Move right gesture detected.
FT5X06_TOUCH_ZOOM_IN            | Zoom int gesture detected.
FT5X06_TOUCH_ZOOM_OUT            | Zoom out gesture detected.

Touch gesture.

#### `enum `[`ft5x06_type_t`](#group__drivers__ft5x06_1ga44250c0d29da83c8aaf0da4d01dbffa3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
FT5X06_TYPE_FT5X06            | FT5X06.
FT5X06_TYPE_FT5606            | FT5606.
FT5X06_TYPE_FT5X16            | FT5X16.
FT5X06_TYPE_FT6X06            | FT6X06.
FT5X06_TYPE_FT6X36            | FT6X36.
FT5X06_TYPE_FT5X06I            | FT5X06I.
FT5X06_TYPE_FT5336            | FT5336.
FT5X06_TYPE_FT3316            | FT3316.
FT5X06_TYPE_FT5436I            | FT5436I.
FT5X06_TYPE_FT5336I            | FT5336I.
FT5X06_TYPE_FT5X46            | FT5X46.

Device type.

#### `enum `[`ft5x06_touch_conv_t`](#group__drivers__ft5x06_1ga089f26e52bd67a7478109a13627f7dec) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
FT5X06_NO_CONV            | No conversion.
FT5X06_MIRROR_X            | Mirror X, applied after optional swapping.
FT5X06_MIRROR_Y            | Mirror Y, applied after optional swapping.
FT5X06_SWAP_XY            | Swap XY, applied before optional mirroring.

Touch screen coordinate conversions.

Normally the coordinates of the touch device must be converted to the screen coordinates by swapping and/or mirroring. The flags defined by this enumeration can be ORed for a combined conversion. In this case, the swapping is performed before the mirroring.

The maximum X and Y screen coordinates defined by [ft5x06_params_t::xmax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t_1aa7f4f2019764e4f5ebc6e57d15f2af8b) and [ft5x06_params_t::ymax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t_1a10629080acfd06a2e048fdbf83d3121c) define the dimension of the touch device in screen coordinates, i.e. after conversion.

#### `public int `[`ft5x06_init`](#group__drivers__ft5x06_1gaafa9ee8b8cbad2d17bc4c5649183bc4e)`(`[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,const `[`ft5x06_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t)` * params,`[`ft5x06_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1ga4c56bfbacee727ea4bbb3099ee46a9f3)` cb,void * arg)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver 

* `params` Initialization parameters 

* `cb` Callback function called on touch interrupts 

* `arg` Context argument used in callback function

#### Returns
0 on success 

#### Returns
-ENODEV when no valid device 

#### Returns
-EPROTO on any bus error

#### `public int `[`ft5x06_read_touch_positions`](#group__drivers__ft5x06_1ga65255d61c60dc1d246b83776ebc4aa63)`(const `[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,`[`ft5x06_touch_position_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__touch__position__t)` * positions,size_t len)` 

Read the touch positions.

#### Parameters
* `dev` Device descriptor of the FT5x06 

* `positions` Touch positions 

* `len` Number of touch positions to read

#### Returns
0 on success 

#### Returns
-EPROTO on any bus error

#### `public int `[`ft5x06_read_touch_count`](#group__drivers__ft5x06_1ga6bdca67f468c846768eacc5c291556ab)`(const `[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,uint8_t * count)` 

Read the number of touch.

#### Parameters
* `dev` Device descriptor of the FT5x06 

* `count` Number of touch detected

#### Returns
0 on success 

#### Returns
-EPROTO on any bus error

#### `public int `[`ft5x06_read_touch_gesture`](#group__drivers__ft5x06_1ga08ee85c87e9d41e828aa88e27c7c6c66)`(const `[`ft5x06_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__t)` * dev,`[`ft5x06_touch_gesture_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1gaf09ba7ee8136d1a3e01958ffbed5f26d)` * gesture)` 

Read the gesture detected.

#### Parameters
* `dev` Device descriptor of the FT5X06 

* `gesture` Gesture ID

#### Returns
0 on success 

#### Returns
-EPROTO on any bus error

# struct `ft5x06_touch_position_t` 

Touch position structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`x`](#structft5x06__touch__position__t_1a5edfead7818cbb94d2b65f39bffa26a8) | X position.
`public uint16_t `[`y`](#structft5x06__touch__position__t_1acf11bfb886a3d973af2ea69b98e8d6b9) | Y position.

## Members

#### `public uint16_t `[`x`](#structft5x06__touch__position__t_1a5edfead7818cbb94d2b65f39bffa26a8) 

X position.

#### `public uint16_t `[`y`](#structft5x06__touch__position__t_1acf11bfb886a3d973af2ea69b98e8d6b9) 

Y position.

# struct `ft5x06_params_t` 

Device initialization parameters.

[ft5x06_params_t::xmax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t_1aa7f4f2019764e4f5ebc6e57d15f2af8b) and [ft5x06_params_t::ymax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t_1a10629080acfd06a2e048fdbf83d3121c) define the maximum X and Y values in screen coordinates after the optional conversion defined by [ft5x06_params_t::xmax](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t_1aa7f4f2019764e4f5ebc6e57d15f2af8b).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structft5x06__params__t_1a345f07c034d9d89de0c30f4968f1bf99) | I2C device which is used.
`public uint8_t `[`addr`](#structft5x06__params__t_1a2867f0ec6006dfc52011e6f247fcbdb7) | Device I2C address.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structft5x06__params__t_1af84b87f85720c2aefc1822e6ebb5e899) | Touch screen interrupt pin.
`public uint16_t `[`xmax`](#structft5x06__params__t_1aa7f4f2019764e4f5ebc6e57d15f2af8b) | Touch screen max X position.
`public uint16_t `[`ymax`](#structft5x06__params__t_1a10629080acfd06a2e048fdbf83d3121c) | Touch screen max Y position.
`public `[`ft5x06_touch_conv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1ga089f26e52bd67a7478109a13627f7dec)` `[`xyconv`](#structft5x06__params__t_1ac421a658ec240e11bd59c44c91c77dee) | Touch screen coordinates conversion, swapping is performed before mirroring.
`public `[`ft5x06_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1ga44250c0d29da83c8aaf0da4d01dbffa3)` `[`type`](#structft5x06__params__t_1a244dcc8c3ab2119a561f753382d41155) | Device type.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structft5x06__params__t_1a345f07c034d9d89de0c30f4968f1bf99) 

I2C device which is used.

#### `public uint8_t `[`addr`](#structft5x06__params__t_1a2867f0ec6006dfc52011e6f247fcbdb7) 

Device I2C address.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structft5x06__params__t_1af84b87f85720c2aefc1822e6ebb5e899) 

Touch screen interrupt pin.

#### `public uint16_t `[`xmax`](#structft5x06__params__t_1aa7f4f2019764e4f5ebc6e57d15f2af8b) 

Touch screen max X position.

#### `public uint16_t `[`ymax`](#structft5x06__params__t_1a10629080acfd06a2e048fdbf83d3121c) 

Touch screen max Y position.

#### `public `[`ft5x06_touch_conv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1ga089f26e52bd67a7478109a13627f7dec)` `[`xyconv`](#structft5x06__params__t_1ac421a658ec240e11bd59c44c91c77dee) 

Touch screen coordinates conversion, swapping is performed before mirroring.

#### `public `[`ft5x06_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ft5x06_1ga44250c0d29da83c8aaf0da4d01dbffa3)` `[`type`](#structft5x06__params__t_1a244dcc8c3ab2119a561f753382d41155) 

Device type.

# struct `ft5x06_t` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`ft5x06_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t)` * `[`params`](#structft5x06__t_1a00a323166e545f4c524366cf81a49eeb) | Initialization parameters.

## Members

#### `public const `[`ft5x06_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ft5x06.md#structft5x06__params__t)` * `[`params`](#structft5x06__t_1a00a323166e545f4c524366cf81a49eeb) 

Initialization parameters.

