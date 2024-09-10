---
title: api-drivers_cst816s.md
description: api-drivers_cst816s.md
---
# group `drivers_cst816s` 

Device driver interface for the Hynitron CST816S touch screen.

The CST816S is a touch sensor from Hynitron with integrated gesture detection. It is able to measure both the position of a single finger and a number of basic gestures. The PineTime board has one of these for the touch screen.

Documentation about the specifics is very limited and most of this driver is based on experimenting with the chip and from community effort on the PineTime.

Two things about the driver are noteworthy:* It only responds to I2C commands after an event, such as a touch detection. Do not expect it to respond on init. Instead after a touch event, it will assert the IRQ and respond to I2C reads for a short time.

* While it should be able to detect multiple finger events, this version of the chip always returns only a single finger event and a gesture.

Reading the display data multiple times during a single event will return the last sampled finger position.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`cst816s_touch_t`](#group__drivers__cst816s_1ga83b233a5ea9136bacb312acff9237b6b)            | cst816s touch event touch state
`enum `[`cst816s_gesture_t`](#group__drivers__cst816s_1gaed2468f4c69565cae5eb958bc1df9174)            | CST816S Gesture types.
`enum `[`@168`](#group__drivers__cst816s_1gac791b66a82093c303b1b2aaf4f185ede)            | Status and error return codes.
`public int `[`cst816s_init`](#group__drivers__cst816s_1gac9bfe91de57146fee043e146680334f2)`(`[`cst816s_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__t)` * dev,const `[`cst816s_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__params__t)` * params,`[`cst816s_irq_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1gad6f514d60d1a4ee9fabf83f28694dfbc)` cb,void * arg)`            | Initialize the given cst816s device.
`public int `[`cst816s_read`](#group__drivers__cst816s_1gaf7f6b2cecfd8a33c9fba37acdf449170)`(const `[`cst816s_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__t)` * dev,`[`cst816s_touch_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__touch__data__t)` * data)`            | Read touch data from the cst816s device.
`struct `[`cst816s_touch_data_t`](#structcst816s__touch__data__t) | cst816s touch event data
`struct `[`cst816s_params_t`](#structcst816s__params__t) | cst816s driver struct
`struct `[`cst816s_t`](#structcst816s__t) | cst816s device descriptor

## Members

#### `enum `[`cst816s_touch_t`](#group__drivers__cst816s_1ga83b233a5ea9136bacb312acff9237b6b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CST816S_TOUCH_DOWN            | Touch press.
CST816S_TOUCH_UP            | Touch release.
CST816S_TOUCH_CONTACT            | Touch contact.

cst816s touch event touch state

#### `enum `[`cst816s_gesture_t`](#group__drivers__cst816s_1gaed2468f4c69565cae5eb958bc1df9174) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CST816S_GESTURE_NONE            | no gesture detected
CST816S_GESTURE_SLIDE_DOWN            | downward slide detected
CST816S_GESTURE_SLIDE_UP            | upward slide detected
CST816S_GESTURE_SLIDE_LEFT            | left slide detected
CST816S_GESTURE_SLIDE_RIGHT            | right slide detected
CST816S_GESTURE_SINGLE_CLICK            | single click detected
CST816S_GESTURE_DOUBLE_CLICK            | double click detected
CST816S_GESTURE_LONG_PRESS            | long press detected

CST816S Gesture types.

#### `enum `[`@168`](#group__drivers__cst816s_1gac791b66a82093c303b1b2aaf4f185ede) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CST816S_OK            | everything was fine
CST816S_ERR_IRQ            | IRQ initialization error.

Status and error return codes.

#### `public int `[`cst816s_init`](#group__drivers__cst816s_1gac9bfe91de57146fee043e146680334f2)`(`[`cst816s_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__t)` * dev,const `[`cst816s_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__params__t)` * params,`[`cst816s_irq_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1gad6f514d60d1a4ee9fabf83f28694dfbc)` cb,void * arg)` 

Initialize the given cst816s device.

#### Parameters
* `dev` device descriptor of the given cst816s device 

* `params` static configuration parameters 

* `cb` callback for the cst816s event interrupt, may be NULL 

* `arg` extra argument passed to the event interrupt.

#### Returns
CST816S_OK on success 

#### Returns
CST816S_ERR_IRQ on IRQ initialization error

#### `public int `[`cst816s_read`](#group__drivers__cst816s_1gaf7f6b2cecfd8a33c9fba37acdf449170)`(const `[`cst816s_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__t)` * dev,`[`cst816s_touch_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__touch__data__t)` * data)` 

Read touch data from the cst816s device.

#### Parameters
* `dev` device descriptor 

* `data` Touch data

#### Returns
0 on success 

#### Returns
negative on I2C access error

# struct `cst816s_touch_data_t` 

cst816s touch event data

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cst816s_gesture_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1gaed2468f4c69565cae5eb958bc1df9174)` `[`gesture`](#structcst816s__touch__data__t_1a10fc68468dacfd45b40d3e197fa4b819) | Detected gesture.
`public `[`cst816s_touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1ga83b233a5ea9136bacb312acff9237b6b)` `[`action`](#structcst816s__touch__data__t_1a8295b325aa41b5caa7e01cf77b998296) | Press or release event.
`public uint16_t `[`x`](#structcst816s__touch__data__t_1abca2370d6868fd602647bdc3aeb979e1) | X coordinate.
`public uint16_t `[`y`](#structcst816s__touch__data__t_1ae6ecf508bbf25f5a74a3805b5dff62f3) | Y coordinate.

## Members

#### `public `[`cst816s_gesture_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1gaed2468f4c69565cae5eb958bc1df9174)` `[`gesture`](#structcst816s__touch__data__t_1a10fc68468dacfd45b40d3e197fa4b819) 

Detected gesture.

#### `public `[`cst816s_touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1ga83b233a5ea9136bacb312acff9237b6b)` `[`action`](#structcst816s__touch__data__t_1a8295b325aa41b5caa7e01cf77b998296) 

Press or release event.

#### `public uint16_t `[`x`](#structcst816s__touch__data__t_1abca2370d6868fd602647bdc3aeb979e1) 

X coordinate.

#### `public uint16_t `[`y`](#structcst816s__touch__data__t_1ae6ecf508bbf25f5a74a3805b5dff62f3) 

Y coordinate.

# struct `cst816s_params_t` 

cst816s driver struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structcst816s__params__t_1a51850857f73268ef688f28488305f7b7) | I2C device which is used.
`public uint8_t `[`i2c_addr`](#structcst816s__params__t_1a0514ab221d81abc7b7914a48daf3628a) | I2C address.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structcst816s__params__t_1a621caa2c3991956efbf539ec9ba65550) | IRQ pin.
`public `[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` `[`irq_flank`](#structcst816s__params__t_1adda21d5b029eca9eacdc42e70c6f3cc6) | IRQ flank.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset`](#structcst816s__params__t_1ad01b5ade01d31479bbc3a8dff78f8e77) | Device reset GPIO.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structcst816s__params__t_1a51850857f73268ef688f28488305f7b7) 

I2C device which is used.

#### `public uint8_t `[`i2c_addr`](#structcst816s__params__t_1a0514ab221d81abc7b7914a48daf3628a) 

I2C address.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structcst816s__params__t_1a621caa2c3991956efbf539ec9ba65550) 

IRQ pin.

#### `public `[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` `[`irq_flank`](#structcst816s__params__t_1adda21d5b029eca9eacdc42e70c6f3cc6) 

IRQ flank.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset`](#structcst816s__params__t_1ad01b5ade01d31479bbc3a8dff78f8e77) 

Device reset GPIO.

# struct `cst816s_t` 

cst816s device descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`cst816s_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__params__t)` * `[`params`](#structcst816s__t_1aae74ecdaeb71a65b0fad9a6cba4ed24a) | Device parameters.
`public `[`cst816s_irq_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1gad6f514d60d1a4ee9fabf83f28694dfbc)` `[`cb`](#structcst816s__t_1a9fd473cf713638884de57c31029d41d0) | Configured IRQ event callback.
`public void * `[`cb_arg`](#structcst816s__t_1a2f7244a8648d23588f1902354e555f71) | Extra argument for the callback.

## Members

#### `public const `[`cst816s_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_cst816s.md#structcst816s__params__t)` * `[`params`](#structcst816s__t_1aae74ecdaeb71a65b0fad9a6cba4ed24a) 

Device parameters.

#### `public `[`cst816s_irq_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cst816s_1gad6f514d60d1a4ee9fabf83f28694dfbc)` `[`cb`](#structcst816s__t_1a9fd473cf713638884de57c31029d41d0) 

Configured IRQ event callback.

#### `public void * `[`cb_arg`](#structcst816s__t_1a2f7244a8648d23588f1902354e555f71) 

Extra argument for the callback.

