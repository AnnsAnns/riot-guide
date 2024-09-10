---
title: api-drivers_pcd8544.md
description: api-drivers_pcd8544.md
---
# group `drivers_pcd8544` 

Driver for PCD8544 LCD displays.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`pcd8544_init`](#group__drivers__pcd8544_1gaad632ae05ccb03a56e6d691289b65feb)`(`[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` spi,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` cs,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` reset,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` mode)`            | Initialize the given display.
`public void `[`pcd8544_set_contrast`](#group__drivers__pcd8544_1ga362939aea1abc55531dd6721f9dbf1ff)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t contrast)`            | Set the contrast for the given display.
`public void `[`pcd8544_set_tempcoef`](#group__drivers__pcd8544_1gaedc643dba7d2b73d2501c8e78cb034c7)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t coef)`            | Set the temperature coefficient for the given display.
`public void `[`pcd8544_set_bias`](#group__drivers__pcd8544_1ga657a4c2c887b6fdd1f883a52320bfdf9)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t bias)`            | Set the internal BIAS for the given display.
`public void `[`pcd8544_write_img`](#group__drivers__pcd8544_1gadf98cb5ed576491c8a6b255007dfb497)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,const uint8_t img)`            | Write an image to memory of the given display.
`public void `[`pcd8544_write_c`](#group__drivers__pcd8544_1gabc9ab6fcbcd63bcee60b92311c6a4fe0)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t x,uint8_t y,const char c)`            | Write a single ASCII character to the display.
`public void `[`pcd8544_write_s`](#group__drivers__pcd8544_1gac747e330050a72dae7653b9d5c12e910)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t x,uint8_t y,const char * str)`            | Write a string to a given position on the display.
`public void `[`pcd8544_clear`](#group__drivers__pcd8544_1gaca17ec6efcd16fa45d772bd492f066c6)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)`            | Clear the current display (clear the display memory)
`public void `[`pcd8544_invert`](#group__drivers__pcd8544_1gac175a2f332e4329a27912b9d089f922f)`(`[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)`            | Invert the display (toggles dark and bright pixels)
`public int `[`pcd8544_is_inverted`](#group__drivers__pcd8544_1gad16f6358afea467e129409933f1e4eec)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)`            | Get the current inversion status of the display.
`public void `[`pcd8544_poweron`](#group__drivers__pcd8544_1ga514ecc9322e91555d616594763f9d7ca)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)`            | Power on the display.
`public void `[`pcd8544_poweroff`](#group__drivers__pcd8544_1ga4435b2ee48cd5b7ffd7402fddfc9dac7)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)`            | Poser off the display.
`public void `[`pcd8544_riot`](#group__drivers__pcd8544_1ga0bf1b07d632e44c68b353339978786e5)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)`            | I wonder what this does -> find out!
`struct `[`pcd8544_t`](#structpcd8544__t) | PCD8544 device descriptor.

## Members

#### `public int `[`pcd8544_init`](#group__drivers__pcd8544_1gaad632ae05ccb03a56e6d691289b65feb)`(`[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` spi,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` cs,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` reset,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` mode)` 

Initialize the given display.

#### Parameters
* `dev` device descriptor of display to use 

* `spi` SPI bus the display is connected to 

* `cs` GPIO pin that is connected to the CS pin 

* `reset` GPIO pin that is connected to the RESET pin 

* `mode` GPIO pin that is connected to the MODE pin

#### Returns
0 on success 

#### Returns
<0 on error

#### `public void `[`pcd8544_set_contrast`](#group__drivers__pcd8544_1ga362939aea1abc55531dd6721f9dbf1ff)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t contrast)` 

Set the contrast for the given display.

A contrast value of 45 yields good results for 3V3

#### Parameters
* `dev` display device descriptor 

* `contrast` targeted contrast value [0 - 127]

#### `public void `[`pcd8544_set_tempcoef`](#group__drivers__pcd8544_1gaedc643dba7d2b73d2501c8e78cb034c7)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t coef)` 

Set the temperature coefficient for the given display.

Look at the datasheet for more information

#### Parameters
* `dev` device descriptor of display to use 

* `coef` temperature coefficient to use [0 - 3]

#### `public void `[`pcd8544_set_bias`](#group__drivers__pcd8544_1ga657a4c2c887b6fdd1f883a52320bfdf9)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t bias)` 

Set the internal BIAS for the given display.

Look at the datasheet for more information

#### Parameters
* `dev` device descriptor of display to use 

* `bias` the BIAS to use [0 - 7]

#### `public void `[`pcd8544_write_img`](#group__drivers__pcd8544_1gadf98cb5ed576491c8a6b255007dfb497)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,const uint8_t img)` 

Write an image to memory of the given display.

The image must be given as a char array with 504 elements. Each bit in the array represents one pixel on the display. Each byte in the array contains 8 stacked pixels, from top to bottom. So byte[0] contains the pixels from (0,0) to (0,7), byte[1] (1,0) to (1,7) and byte[503] the pixels from (83,40) to (83,47) -> see the 'horizontal addressing' section in the datasheet.

#### Parameters
* `dev` device descriptor of display to use 

* `img` uint8_t array with image data (must be of size := 504)

#### `public void `[`pcd8544_write_c`](#group__drivers__pcd8544_1gabc9ab6fcbcd63bcee60b92311c6a4fe0)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t x,uint8_t y,const char c)` 

Write a single ASCII character to the display.

The position of the character is specified in columns (x) and rows (y)

#### Parameters
* `dev` device descriptor of display to use 

* `x` column to put the character [0 - 13] 

* `y` row to put the character [0 - 5] 

* `c` ASCII code for the character to write

#### `public void `[`pcd8544_write_s`](#group__drivers__pcd8544_1gac747e330050a72dae7653b9d5c12e910)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev,uint8_t x,uint8_t y,const char * str)` 

Write a string to a given position on the display.

This function prints a given string to the given position on the display. The position is given in terms of columns (x) and rows (y). If a string does not fit completely in the given position (it overflows its row), the overflowing part of the string is cut off.

#### Parameters
* `dev` device descriptor of display to use 

* `x` starting column of the string [0 - 13] 

* `y` row to write the string to [0 - 5] 

* `str` string to write to the display

#### `public void `[`pcd8544_clear`](#group__drivers__pcd8544_1gaca17ec6efcd16fa45d772bd492f066c6)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)` 

Clear the current display (clear the display memory)

#### Parameters
* `dev` device descriptor of display to use

#### `public void `[`pcd8544_invert`](#group__drivers__pcd8544_1gac175a2f332e4329a27912b9d089f922f)`(`[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)` 

Invert the display (toggles dark and bright pixels)

#### Parameters
* `dev` device descriptor of display to use

#### `public int `[`pcd8544_is_inverted`](#group__drivers__pcd8544_1gad16f6358afea467e129409933f1e4eec)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)` 

Get the current inversion status of the display.

#### Parameters
* `dev` device descriptor of display to use

#### Returns
0 -> display is not inverted 

#### Returns
1 -> display is inverted

#### `public void `[`pcd8544_poweron`](#group__drivers__pcd8544_1ga514ecc9322e91555d616594763f9d7ca)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)` 

Power on the display.

#### Parameters
* `dev` device descriptor of display to use

#### `public void `[`pcd8544_poweroff`](#group__drivers__pcd8544_1ga4435b2ee48cd5b7ffd7402fddfc9dac7)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)` 

Poser off the display.

#### Parameters
* `dev` device descriptor of display to use

#### `public void `[`pcd8544_riot`](#group__drivers__pcd8544_1ga0bf1b07d632e44c68b353339978786e5)`(const `[`pcd8544_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcd8544.md#structpcd8544__t)` * dev)` 

I wonder what this does -> find out!

#### Parameters
* `dev` device descriptor of display to use

# struct `pcd8544_t` 

PCD8544 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structpcd8544__t_1a54e18e88c834b7aa6e8cf13cf0490eb7) | SPI bus the display is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structpcd8544__t_1af89c699579c35e30958d964ad755b1b9) | chip-select pin, low: active
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset`](#structpcd8544__t_1a85051fb209eb419633aaae6e1a464516) | reset pin, low: active
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mode`](#structpcd8544__t_1a503853702aed6a5a23e41127e32b42ed) | mode pin: low: cmd mode, high: data mode
`public uint8_t `[`inverted`](#structpcd8544__t_1ab1c358f4ad3f2dfc6843640be306b97b) | internal flag to keep track of inversion state

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structpcd8544__t_1a54e18e88c834b7aa6e8cf13cf0490eb7) 

SPI bus the display is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structpcd8544__t_1af89c699579c35e30958d964ad755b1b9) 

chip-select pin, low: active

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset`](#structpcd8544__t_1a85051fb209eb419633aaae6e1a464516) 

reset pin, low: active

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mode`](#structpcd8544__t_1a503853702aed6a5a23e41127e32b42ed) 

mode pin: low: cmd mode, high: data mode

#### `public uint8_t `[`inverted`](#structpcd8544__t_1ab1c358f4ad3f2dfc6843640be306b97b) 

internal flag to keep track of inversion state

