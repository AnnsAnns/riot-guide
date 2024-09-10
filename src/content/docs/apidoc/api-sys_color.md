---
title: api-sys_color.md
description: api-sys_color.md
---
# group `sys_color` 

The color sys module supports handling RGB and HSV color.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`color_rgb2hsv`](#group__sys__color_1ga4204b4c8faa4c53f92b3ab2077c574bb)`(`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_hsv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__hsv__t)` * hsv)`            | Convert RGB color to HSV color.
`public void `[`color_hsv2rgb`](#group__sys__color_1ga96fd25c44fb33f3a9fcb3023ae1edfd5)`(`[`color_hsv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__hsv__t)` * hsv,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb)`            | Convert HSV color to RGB color.
`public void `[`color_hex2rgb`](#group__sys__color_1ga24d8ecd44e6cce1b2a5b1efc780373c3)`(const uint32_t hex,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb)`            | Convert a `hex` value of the form 0x00RRGGBB to an RGB color struct.
`public void `[`color_rgb2hex`](#group__sys__color_1gaf4977b672142e496b9484bc1274cd2a3)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,uint32_t * hex)`            | Convert a `rgb` struct to a `hex` value of the form 0x00RRGGBB.
`public void `[`color_str2rgb`](#group__sys__color_1ga17a9ccef4a09f0b15ede5c0f30267e9b)`(const char * str,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * color)`            | Convert a hex color string of the form 'RRGGBB' to a [color_rgb_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t) struct.
`public void `[`color_rgb2str`](#group__sys__color_1ga904ca4957668d7245ebd123d6d13e135)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,char * str)`            | Convert a [color_rgb_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t) struct to a hex color string of the form 'RRGGBB'.
`public inline static void `[`color_rgb_invert`](#group__sys__color_1gaf2ed02a89f67f1ad4aded1e3b3d7e982)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * inv_rgb)`            | Invert a given rgb color.
`public inline static void `[`color_rgb_shift`](#group__sys__color_1gafb3e6c0db8c3a6d0102b97534d4f4c7b)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * out,int8_t shift)`            | Shifts a given rgb color to change it's brightness.
`public inline static void `[`color_rgb_set_brightness`](#group__sys__color_1ga70220cad2c4d59b1c0d146cf2585b0bd)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * out,uint8_t level)`            | Change the brightness of a RGB color by multiplying it with a set factor.
`public void `[`color_rgb_complementary`](#group__sys__color_1gad6658844608f85469c193c8ab26c48fd)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * comp_rgb)`            | Calculate the complementary color of a given rgb color.
`struct `[`color_rgb_t`](#structcolor__rgb__t) | Data-structure describing a RGB color.
`struct `[`color_rgba_t`](#structcolor__rgba__t) | RGBA color value.
`struct `[`color_hsv_t`](#structcolor__hsv__t) | Data-structure for holding HSV colors.

## Members

#### `public void `[`color_rgb2hsv`](#group__sys__color_1ga4204b4c8faa4c53f92b3ab2077c574bb)`(`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_hsv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__hsv__t)` * hsv)` 

Convert RGB color to HSV color.

#### Parameters
* `rgb` Input color encoded in RGB space 

* `hsv` Output color encoded in HSV space

#### `public void `[`color_hsv2rgb`](#group__sys__color_1ga96fd25c44fb33f3a9fcb3023ae1edfd5)`(`[`color_hsv_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__hsv__t)` * hsv,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb)` 

Convert HSV color to RGB color.

#### Parameters
* `hsv` Input color encoded in HSV space 

* `rgb` Output color encoded in RGB space

#### `public void `[`color_hex2rgb`](#group__sys__color_1ga24d8ecd44e6cce1b2a5b1efc780373c3)`(const uint32_t hex,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb)` 

Convert a `hex` value of the form 0x00RRGGBB to an RGB color struct.

the two most significant bytes of `hex` will be ignored

#### Parameters
* `hex` Input color encoded in hex 

* `rgb` Output color encoded in RGB space

#### `public void `[`color_rgb2hex`](#group__sys__color_1gaf4977b672142e496b9484bc1274cd2a3)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,uint32_t * hex)` 

Convert a `rgb` struct to a `hex` value of the form 0x00RRGGBB.

the two most significant bytes of `hex` will be 0

#### Parameters
* `rgb` Input color encoded in RGB space 

* `hex` Output color encoded in hex

#### `public void `[`color_str2rgb`](#group__sys__color_1ga17a9ccef4a09f0b15ede5c0f30267e9b)`(const char * str,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * color)` 

Convert a hex color string of the form 'RRGGBB' to a [color_rgb_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t) struct.

`str` MUST contain only hexadecimal digits. Expect unexpected behaviour, otherwise.

#### Parameters
* `str` Input color encoded as string of the form 'RRGGBB' 

* `color` Output color encoded in RGB space

#### `public void `[`color_rgb2str`](#group__sys__color_1ga904ca4957668d7245ebd123d6d13e135)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,char * str)` 

Convert a [color_rgb_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t) struct to a hex color string of the form 'RRGGBB'.

`str` MUST be big enough to hold 6 characters

#### Parameters
* `rgb` Input color encoded in RGB space 

* `str` Output color encoded as string of the form 'RRGGBB'

#### `public inline static void `[`color_rgb_invert`](#group__sys__color_1gaf2ed02a89f67f1ad4aded1e3b3d7e982)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * inv_rgb)` 

Invert a given rgb color.

((rgb != NULL) && (inv_rgb != NULL))

#### Parameters
* `rgb` Input rgb color, that should be converted. Must be NOT NULL 

* `inv_rgb` Output rgb color, result of the conversion. Must be NOT NULL

#### `public inline static void `[`color_rgb_shift`](#group__sys__color_1gafb3e6c0db8c3a6d0102b97534d4f4c7b)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * out,int8_t shift)` 

Shifts a given rgb color to change it's brightness.

((rgb != NULL) && (out != NULL))

#### Parameters
* `rgb` Input rgb color, that should be shifted. Must be NOT NULL 

* `out` Output rgb color, result of the shift. Must be NOT NULL 

* `shift` Amount by which the color components should be shifted. May be positive (shift to left) or negative (shift to right).

#### `public inline static void `[`color_rgb_set_brightness`](#group__sys__color_1ga70220cad2c4d59b1c0d146cf2585b0bd)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * out,uint8_t level)` 

Change the brightness of a RGB color by multiplying it with a set factor.

((rgb != NULL) && (out != NULL))

#### Parameters
* `rgb` Input rgb color, that should be multiplied. Must be NOT NULL 

* `out` Output rgb color. Must be NOT NULL 

* `level` New brightness level. 255 = Full Brightness, 0 = Off.

#### `public void `[`color_rgb_complementary`](#group__sys__color_1gad6658844608f85469c193c8ab26c48fd)`(const `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * rgb,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` * comp_rgb)` 

Calculate the complementary color of a given rgb color.

Complementary color calculation according to adobe illustator calculations. See [https://helpx.adobe.com/illustrator/using/adjusting-colors.html](https://helpx.adobe.com/illustrator/using/adjusting-colors.html)

((rgb != NULL) && (comp_rgb != NULL))

#### Parameters
* `rgb` Input rgb color. Must be NOT NULL 

* `comp_rgb` Output rgb color, result of the complementary color calculation. Must be NOT NULL

# struct `color_rgb_t` 

Data-structure describing a RGB color.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`r`](#structcolor__rgb__t_1ac7c85ab1aa5e10df076d3b1dea32c523) | red value [0 - 255]
`public uint8_t `[`g`](#structcolor__rgb__t_1ae93a1e92762e43d917d2976e1ae171fd) | green value [0 - 255]
`public uint8_t `[`b`](#structcolor__rgb__t_1a7d9799506d298aeb713222ad8a40c744) | blue value [0 - 255]

## Members

#### `public uint8_t `[`r`](#structcolor__rgb__t_1ac7c85ab1aa5e10df076d3b1dea32c523) 

red value [0 - 255]

#### `public uint8_t `[`g`](#structcolor__rgb__t_1ae93a1e92762e43d917d2976e1ae171fd) 

green value [0 - 255]

#### `public uint8_t `[`b`](#structcolor__rgb__t_1a7d9799506d298aeb713222ad8a40c744) 

blue value [0 - 255]

# struct `color_rgba_t` 

RGBA color value.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` `[`color`](#structcolor__rgba__t_1a80509bbc1665257905a1e4779fdb773d) | RGB value.
`public uint8_t `[`alpha`](#structcolor__rgba__t_1a928d4dddc451496ffc006752ccdc270e) | alpha value [0 - 255]

## Members

#### `public `[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` `[`color`](#structcolor__rgba__t_1a80509bbc1665257905a1e4779fdb773d) 

RGB value.

#### `public uint8_t `[`alpha`](#structcolor__rgba__t_1a928d4dddc451496ffc006752ccdc270e) 

alpha value [0 - 255]

# struct `color_hsv_t` 

Data-structure for holding HSV colors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public float `[`h`](#structcolor__hsv__t_1afa0427f281955782b803680b6a56418a) | hue value [0.0 - 360.0]
`public float `[`s`](#structcolor__hsv__t_1ae0870b08df06f33d080230eda5c87a8b) | saturation value [0.0 - 1.0]
`public float `[`v`](#structcolor__hsv__t_1a19e13874cae91a6329540d76729dd18d) | value [0.0 - 1.0]

## Members

#### `public float `[`h`](#structcolor__hsv__t_1afa0427f281955782b803680b6a56418a) 

hue value [0.0 - 360.0]

#### `public float `[`s`](#structcolor__hsv__t_1ae0870b08df06f33d080230eda5c87a8b) 

saturation value [0.0 - 1.0]

#### `public float `[`v`](#structcolor__hsv__t_1a19e13874cae91a6329540d76729dd18d) 

value [0.0 - 1.0]

