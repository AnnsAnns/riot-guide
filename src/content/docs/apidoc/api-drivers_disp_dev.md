---
title: api-drivers_disp_dev.md
description: api-drivers_disp_dev.md
---
# group `drivers_disp_dev` 

Define the generic API of a display device.

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

Alexandre Abadie [alexandre.abadie@inria.fr](mailto:alexandre.abadie@inria.fr)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BACKLIGHT_ON`](#group__drivers__disp__dev_1gaa5bad1c51f5fac029f3deacfef48c54b)            | 
`define `[`BACKLIGHT_OFF`](#group__drivers__disp__dev_1ga0f50ae3b4bdb42dd5ad74b2c604a7515)            | 
`public int `[`disp_dev_reg_add`](#group__drivers__disp__dev_1ga9592e1a899ff53fe7d83849882918606)`(`[`disp_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gabf62287ac13efcf82e06793c64954656)` * dev)`            | Add pointer to a display device item to the list of display items.
`public `[`disp_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gabf62287ac13efcf82e06793c64954656)` * `[`disp_dev_reg_find_screen`](#group__drivers__disp__dev_1ga0299a7f064d953275a6813db17d95694)`(uint8_t screen_id)`            | Find the display device that is attached to a given screen.
`public void `[`disp_dev_map`](#group__drivers__disp__dev_1ga7df7f1cfbf825c6b2e9920a620df4ffc)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev,const `[`disp_dev_area_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_disp_dev.md#structdisp__dev__area__t)` * area,const uint16_t * color)`            | Map an area to display on the device.
`public uint16_t `[`disp_dev_height`](#group__drivers__disp__dev_1ga5ad7ea908457e93b0668eba0d653bcf6)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev)`            | Get the height of the display device.
`public uint16_t `[`disp_dev_width`](#group__drivers__disp__dev_1gaaab3cdbc93345894a92508647892b566)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev)`            | Get the width of the display device.
`public uint8_t `[`disp_dev_color_depth`](#group__drivers__disp__dev_1ga0fb3ca7113fe58b57342ef2c28c59a01)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev)`            | Get the color depth of the display device.
`public void `[`disp_dev_set_invert`](#group__drivers__disp__dev_1gab882bdf9044c40478a38bbbef6de04a6)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev,bool invert)`            | Invert the display device colors.
`public inline static void `[`disp_dev_backlight_on`](#group__drivers__disp__dev_1gad9d5408a7ef711e7344dc32dfb727462)`(void)`            | Enable the backlight pin.
`public inline static void `[`disp_dev_backlight_off`](#group__drivers__disp__dev_1ga8569caaf7a6d5cab8ddb414c2ce945ae)`(void)`            | Disable the backlight pin.
`struct `[`disp_dev_area_t`](#structdisp__dev__area__t) | Display area coordinates.
`struct `[`disp_dev_driver_t`](#structdisp__dev__driver__t) | Generic type for a display driver.
`struct `[`disp_dev`](#structdisp__dev) | Generic type for a display device.
`struct `[`disp_dev_reg`](#structdisp__dev__reg) | Disp dev registry entry.

## Members

#### `define `[`BACKLIGHT_ON`](#group__drivers__disp__dev_1gaa5bad1c51f5fac029f3deacfef48c54b) 

#### `define `[`BACKLIGHT_OFF`](#group__drivers__disp__dev_1ga0f50ae3b4bdb42dd5ad74b2c604a7515) 

#### `public int `[`disp_dev_reg_add`](#group__drivers__disp__dev_1ga9592e1a899ff53fe7d83849882918606)`(`[`disp_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gabf62287ac13efcf82e06793c64954656)` * dev)` 

Add pointer to a display device item to the list of display items.

#### Parameters
* `dev` Pointer to the display device

#### Returns
0 on success 

#### Returns
-ENODEV on invalid entry

#### `public `[`disp_dev_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gabf62287ac13efcf82e06793c64954656)` * `[`disp_dev_reg_find_screen`](#group__drivers__disp__dev_1ga0299a7f064d953275a6813db17d95694)`(uint8_t screen_id)` 

Find the display device that is attached to a given screen.

#### Parameters
* `screen_id` Identifier (number) of the screen

#### Returns
pointer to the display device in the registry 

#### Returns
NULL if there's no match

#### `public void `[`disp_dev_map`](#group__drivers__disp__dev_1ga7df7f1cfbf825c6b2e9920a620df4ffc)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev,const `[`disp_dev_area_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_disp_dev.md#structdisp__dev__area__t)` * area,const uint16_t * color)` 

Map an area to display on the device.

#### Parameters
* `dev` Pointer to the display device 

* `area` Coordinates of display area 

* `color` Array of color to map to the display

#### `public uint16_t `[`disp_dev_height`](#group__drivers__disp__dev_1ga5ad7ea908457e93b0668eba0d653bcf6)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev)` 

Get the height of the display device.

#### Parameters
* `dev` Pointer to the display device

#### Returns
Height in pixels

#### `public uint16_t `[`disp_dev_width`](#group__drivers__disp__dev_1gaaab3cdbc93345894a92508647892b566)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev)` 

Get the width of the display device.

#### Parameters
* `dev` Pointer to the display device

#### Returns
Width in pixels

#### `public uint8_t `[`disp_dev_color_depth`](#group__drivers__disp__dev_1ga0fb3ca7113fe58b57342ef2c28c59a01)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev)` 

Get the color depth of the display device.

#### Returns
The color depth

#### `public void `[`disp_dev_set_invert`](#group__drivers__disp__dev_1gab882bdf9044c40478a38bbbef6de04a6)`(const `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * dev,bool invert)` 

Invert the display device colors.

#### Parameters
* `dev` Pointer to the display device 

* `invert` Invert mode (true if invert, false otherwise)

#### `public inline static void `[`disp_dev_backlight_on`](#group__drivers__disp__dev_1gad9d5408a7ef711e7344dc32dfb727462)`(void)` 

Enable the backlight pin.

#### `public inline static void `[`disp_dev_backlight_off`](#group__drivers__disp__dev_1ga8569caaf7a6d5cab8ddb414c2ce945ae)`(void)` 

Disable the backlight pin.

# struct `disp_dev_area_t` 

Display area coordinates.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`x1`](#structdisp__dev__area__t_1a9f192aa7d0a69badf9c911a48b7e4d18) | Horizontal start position (included)
`public uint16_t `[`x2`](#structdisp__dev__area__t_1ab2df6a6a8c241c73d05931dcba563454) | Horizontal end position (included)
`public uint16_t `[`y1`](#structdisp__dev__area__t_1a229069932b3d6e044ccc3d90a3892c47) | Vertical start position (included)
`public uint16_t `[`y2`](#structdisp__dev__area__t_1a401dd06e6c222a70c41b621a50649af2) | Vertical end position (included)

## Members

#### `public uint16_t `[`x1`](#structdisp__dev__area__t_1a9f192aa7d0a69badf9c911a48b7e4d18) 

Horizontal start position (included)

#### `public uint16_t `[`x2`](#structdisp__dev__area__t_1ab2df6a6a8c241c73d05931dcba563454) 

Horizontal end position (included)

#### `public uint16_t `[`y1`](#structdisp__dev__area__t_1a229069932b3d6e044ccc3d90a3892c47) 

Vertical start position (included)

#### `public uint16_t `[`y2`](#structdisp__dev__area__t_1a401dd06e6c222a70c41b621a50649af2) 

Vertical end position (included)

# struct `disp_dev_driver_t` 

Generic type for a display driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`map`](#structdisp__dev__driver__t_1a9d5b9e089580fbe60e8e891c7204cabb) | Map an area to display on the device.
`public uint16_t(* `[`height`](#structdisp__dev__driver__t_1ad5adbe0f7761c3e904f7168b37c564f6) | Get the height of the display device.
`public uint16_t(* `[`width`](#structdisp__dev__driver__t_1a8b30f3d68ee0c1182ca85634d14fded7) | Get the width of the display device.
`public uint8_t(* `[`color_depth`](#structdisp__dev__driver__t_1a1a963c7fad5bc121be75c137556a1144) | Get the color depth of the display device.
`public void(* `[`set_invert`](#structdisp__dev__driver__t_1a30293dd7d4dec59c3c00eb79b7b8cb7d) | Invert the display device colors.

## Members

#### `public void(* `[`map`](#structdisp__dev__driver__t_1a9d5b9e089580fbe60e8e891c7204cabb) 

Map an area to display on the device.

#### Parameters
* `dev` Pointer to the display device 

* `area` Coordinates of display area 

* `color` Array of color to map to the display

#### `public uint16_t(* `[`height`](#structdisp__dev__driver__t_1ad5adbe0f7761c3e904f7168b37c564f6) 

Get the height of the display device.

#### Parameters
* `dev` Pointer to the display device

#### Returns
Height in pixels

#### `public uint16_t(* `[`width`](#structdisp__dev__driver__t_1a8b30f3d68ee0c1182ca85634d14fded7) 

Get the width of the display device.

#### Parameters
* `dev` Pointer to the display device

#### Returns
Width in pixels

#### `public uint8_t(* `[`color_depth`](#structdisp__dev__driver__t_1a1a963c7fad5bc121be75c137556a1144) 

Get the color depth of the display device.

#### Returns
The color depth

#### `public void(* `[`set_invert`](#structdisp__dev__driver__t_1a30293dd7d4dec59c3c00eb79b7b8cb7d) 

Invert the display device colors.

#### Parameters
* `dev` [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) device descriptor 

* `invert` Invert mode (true if invert, false otherwise)

# struct `disp_dev` 

Generic type for a display device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`disp_dev_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_disp_dev.md#structdisp__dev__driver__t)` * `[`driver`](#structdisp__dev_1a477fa7d947794d5e30a0cfa028e1e32b) | Pointer to driver of the display device.

## Members

#### `public const `[`disp_dev_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_disp_dev.md#structdisp__dev__driver__t)` * `[`driver`](#structdisp__dev_1a477fa7d947794d5e30a0cfa028e1e32b) 

Pointer to driver of the display device.

# struct `disp_dev_reg` 

Disp dev registry entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`disp_dev_reg`](#structdisp__dev__reg)` * `[`next`](#structdisp__dev__reg_1a2ac90c77270bb0275d21fb87f98a1000) | pointer to the next display device in the list
`public `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * `[`dev`](#structdisp__dev__reg_1a7c5e8b2d91a17becd4cb8deaf2e6778e) | pointer to the device descriptor
`public uint8_t `[`screen_id`](#structdisp__dev__reg_1aec1857dc1ecdaf8633e961a4ee003b71) | id of the screen this display is attached to

## Members

#### `public struct `[`disp_dev_reg`](#structdisp__dev__reg)` * `[`next`](#structdisp__dev__reg_1a2ac90c77270bb0275d21fb87f98a1000) 

pointer to the next display device in the list

#### `public `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * `[`dev`](#structdisp__dev__reg_1a7c5e8b2d91a17becd4cb8deaf2e6778e) 

pointer to the device descriptor

#### `public uint8_t `[`screen_id`](#structdisp__dev__reg_1aec1857dc1ecdaf8633e961a4ee003b71) 

id of the screen this display is attached to

