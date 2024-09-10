---
title: api-drivers_touch_dev.md
description: api-drivers_touch_dev.md
---
# group `drivers_touch_dev` 

Define the generic API of a touch device.

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

Alexandre Abadie [alexandre.abadie@inria.fr](mailto:alexandre.abadie@inria.fr)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`TOUCH_DEV_VALUE_INVALID`](#group__drivers__touch__dev_1ga5cad24239bba6040a25967e4cfe23f07)            | Invalid touch value.
`public int `[`touch_dev_reg_add`](#group__drivers__touch__dev_1ga2ac0a71afc90e75cec145a31ff4dbf16)`(`[`touch_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1gaa25da822e3a99a9350741baa7f613169)` * dev)`            | Add pointer to a touch device item to the list of touch items.
`public `[`touch_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1gaa25da822e3a99a9350741baa7f613169)` * `[`touch_dev_reg_find_screen`](#group__drivers__touch__dev_1ga78fc29097b69a30dfb52f459bea5bea2)`(uint8_t screen_id)`            | Find the touch device that is attached to a given screen.
`public uint16_t `[`touch_dev_height`](#group__drivers__touch__dev_1ga84d5e99da99d6d110951d0b8332d7e84)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev)`            | Get the height of the touch device.
`public uint16_t `[`touch_dev_width`](#group__drivers__touch__dev_1gad7b956040a98da46c1f4f854db60a0e0)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev)`            | Get the width of the touch device.
`public inline static uint8_t `[`touch_dev_max_numof`](#group__drivers__touch__dev_1ga5a6ae7ce0c841318d8bb6df26c93d137)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev)`            | Get the maximum number of touches the touch device supports.
`public uint8_t `[`touch_dev_touches`](#group__drivers__touch__dev_1ga7cfe2e0eab98131e8f90210e953a5e89)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev,`[`touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t)` * touches,size_t len)`            | Get the current touches on the touch device.
`public void `[`touch_dev_set_touch_event_callback`](#group__drivers__touch__dev_1gadfbc3fc4125810605a6815e9dbd7d653)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev,`[`touch_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga83870ac749c2cbc292043239697173a7)` cb,void * arg)`            | Set and configure the touch event callback.
`struct `[`touch_t`](#structtouch__t) | Touch coordinates.
`struct `[`touch_dev_driver_t`](#structtouch__dev__driver__t) | Generic type for a touch driver.
`struct `[`touch_dev`](#structtouch__dev) | Generic type for a touch device.
`struct `[`touch_dev_reg`](#structtouch__dev__reg) | Touch dev registry entry.

## Members

#### `define `[`TOUCH_DEV_VALUE_INVALID`](#group__drivers__touch__dev_1ga5cad24239bba6040a25967e4cfe23f07) 

Invalid touch value.

#### `public int `[`touch_dev_reg_add`](#group__drivers__touch__dev_1ga2ac0a71afc90e75cec145a31ff4dbf16)`(`[`touch_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1gaa25da822e3a99a9350741baa7f613169)` * dev)` 

Add pointer to a touch device item to the list of touch items.

#### Parameters
* `dev` Pointer to the touch device

#### Returns
0 on success 

#### Returns
-ENODEV on invalid entry

#### `public `[`touch_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1gaa25da822e3a99a9350741baa7f613169)` * `[`touch_dev_reg_find_screen`](#group__drivers__touch__dev_1ga78fc29097b69a30dfb52f459bea5bea2)`(uint8_t screen_id)` 

Find the touch device that is attached to a given screen.

#### Parameters
* `screen_id` Identifier (number) of the screen

#### Returns
pointer to the touch device in the registry 

#### Returns
NULL if there's no match

#### `public uint16_t `[`touch_dev_height`](#group__drivers__touch__dev_1ga84d5e99da99d6d110951d0b8332d7e84)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev)` 

Get the height of the touch device.

#### Parameters
* `dev` Pointer to the touch device

#### Returns
Height in points

#### `public uint16_t `[`touch_dev_width`](#group__drivers__touch__dev_1gad7b956040a98da46c1f4f854db60a0e0)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev)` 

Get the width of the touch device.

#### Parameters
* `dev` Pointer to the touch device

#### Returns
Width in points

#### `public inline static uint8_t `[`touch_dev_max_numof`](#group__drivers__touch__dev_1ga5a6ae7ce0c841318d8bb6df26c93d137)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev)` 

Get the maximum number of touches the touch device supports.

#### Parameters
* `dev` Pointer to the touch device

#### Returns
number of touches

#### `public uint8_t `[`touch_dev_touches`](#group__drivers__touch__dev_1ga7cfe2e0eab98131e8f90210e953a5e89)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev,`[`touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t)` * touches,size_t len)` 

Get the current touches on the touch device.

If `touches` is NULL, this function only returns the number of touches.

Touch position coordinates use the top left corner as origin.

#### Parameters
* `dev` Pointer to the touch device 

* `touches` The array of touches 

* `len` The touches array len 

#### Returns
number of touch positions, 0 means no touch

#### `public void `[`touch_dev_set_touch_event_callback`](#group__drivers__touch__dev_1gadfbc3fc4125810605a6815e9dbd7d653)`(const `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev,`[`touch_event_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga83870ac749c2cbc292043239697173a7)` cb,void * arg)` 

Set and configure the touch event callback.

#### Parameters
* `dev` Pointer to the touch device 

* `cb` The callback function 

* `arg` Context argument

# struct `touch_t` 

Touch coordinates.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`x`](#structtouch__t_1a9afda6f65e5bdc177c7684e717845dd9) | X coordinate.
`public uint16_t `[`y`](#structtouch__t_1a017f96e749b91f80740a35f5da77edeb) | Y coordinate.

## Members

#### `public uint16_t `[`x`](#structtouch__t_1a9afda6f65e5bdc177c7684e717845dd9) 

X coordinate.

#### `public uint16_t `[`y`](#structtouch__t_1a017f96e749b91f80740a35f5da77edeb) 

Y coordinate.

# struct `touch_dev_driver_t` 

Generic type for a touch driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t(* `[`height`](#structtouch__dev__driver__t_1a8042fae6e2a1fc11cd646715d8ea6e69) | Get the height of the touch device.
`public uint16_t(* `[`width`](#structtouch__dev__driver__t_1a257a17b56ea242a9c7fe3418f1300e88) | Get the width of the touch device.
`public uint8_t(* `[`max_numof`](#structtouch__dev__driver__t_1a5f057f72ff4c456ff09f28efe2aaaf87) | Get the maximum number of touches the touch device supports.
`public uint8_t(* `[`touches`](#structtouch__dev__driver__t_1a813bd1acfac84aea78d71427309c7836) | Get the current touches on the touch device.
`public void(* `[`set_event_callback`](#structtouch__dev__driver__t_1a36f708870ddb08eb18c47cf73654a7b1) | Set and configure the touch event callback.

## Members

#### `public uint16_t(* `[`height`](#structtouch__dev__driver__t_1a8042fae6e2a1fc11cd646715d8ea6e69) 

Get the height of the touch device.

#### Parameters
* `dev` Pointer to the touch device

#### Returns
Height in points

#### `public uint16_t(* `[`width`](#structtouch__dev__driver__t_1a257a17b56ea242a9c7fe3418f1300e88) 

Get the width of the touch device.

#### Parameters
* `dev` Pointer to the touch device

#### Returns
Width in points

#### `public uint8_t(* `[`max_numof`](#structtouch__dev__driver__t_1a5f057f72ff4c456ff09f28efe2aaaf87) 

Get the maximum number of touches the touch device supports.

This function pointer can be NULL. In this case, the maximum number of touches is assumed to be 1.

#### Parameters
* `dev` Pointer to the touch device

#### Returns
number of touches

#### `public uint8_t(* `[`touches`](#structtouch__dev__driver__t_1a813bd1acfac84aea78d71427309c7836) 

Get the current touches on the touch device.

If `touches` is NULL, this function only returns the number of touches.

#### Parameters
* `dev` Pointer to the touch device 

* `touches` The array of touches 

* `len` The touches array len 

#### Returns
number of touch positions, 0 means no touch

#### `public void(* `[`set_event_callback`](#structtouch__dev__driver__t_1a36f708870ddb08eb18c47cf73654a7b1) 

Set and configure the touch event callback.

#### Parameters
* `dev` Pointer to the touch device 

* `cb` The callback function 

* `arg` Context argument

# struct `touch_dev` 

Generic type for a touch device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`touch_dev_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__dev__driver__t)` * `[`driver`](#structtouch__dev_1aaf50c9ad1d4589cbdc4bf6bfdc9b60c2) | Pointer to driver of the touch device.

## Members

#### `public const `[`touch_dev_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__dev__driver__t)` * `[`driver`](#structtouch__dev_1aaf50c9ad1d4589cbdc4bf6bfdc9b60c2) 

Pointer to driver of the touch device.

# struct `touch_dev_reg` 

Touch dev registry entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`touch_dev_reg`](#structtouch__dev__reg)` * `[`next`](#structtouch__dev__reg_1a1b31de0be43a9bf984d21735ca5b768c) | pointer to the next touch device in the list
`public `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * `[`dev`](#structtouch__dev__reg_1a675c7771fad06ff150f8d27dc268bebb) | pointer to the device descriptor
`public uint8_t `[`screen_id`](#structtouch__dev__reg_1a97c685ad1c4227a32dcb36b334108823) | id of the screen this touch device is attached to

## Members

#### `public struct `[`touch_dev_reg`](#structtouch__dev__reg)` * `[`next`](#structtouch__dev__reg_1a1b31de0be43a9bf984d21735ca5b768c) 

pointer to the next touch device in the list

#### `public `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * `[`dev`](#structtouch__dev__reg_1a675c7771fad06ff150f8d27dc268bebb) 

pointer to the device descriptor

#### `public uint8_t `[`screen_id`](#structtouch__dev__reg_1a97c685ad1c4227a32dcb36b334108823) 

id of the screen this touch device is attached to

