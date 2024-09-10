---
title: api-drivers_ili9341.md
description: api-drivers_ili9341.md
---
# group `drivers_ili9341` 

Driver for the ILI9341 display.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_ILI9341_GVDD`](#group__drivers__ili9341_1ga9dfdf5913a21e46ccf4714b19fa4929c)            | ILI9341 gvdd level.
`define `[`CONFIG_ILI9341_VCOMH`](#group__drivers__ili9341_1gafb88bbd15f6acfb871e5b668d4a0594e)            | ILI9341 VCOMH voltage level.
`define `[`CONFIG_ILI9341_VCOML`](#group__drivers__ili9341_1ga970cf70c7a0e5f8dbe8b9a194bc0ff9c)            | ILI9341 VCOML voltage level.
`struct `[`ili9341_t`](#structili9341__t) | Device descriptor for a ili9341.

## Members

#### `define `[`CONFIG_ILI9341_GVDD`](#group__drivers__ili9341_1ga9dfdf5913a21e46ccf4714b19fa4929c) 

ILI9341 gvdd level.

Default GVDD voltage of 4.8V. GVDD is reference level for the VCOM level and the grayscale voltage level. GVDD should be ≦ (AVDD - 0.5) V .

#### `define `[`CONFIG_ILI9341_VCOMH`](#group__drivers__ili9341_1gafb88bbd15f6acfb871e5b668d4a0594e) 

ILI9341 VCOMH voltage level.

Default VCOMH voltage of 4.25V. VCOMH represents the high level of VCOM AC voltage. VCOM levels needs to be adjusted to match the capacitance and performance specifications of the TFT panel to maximize contrast and minimize flickering.

#### `define `[`CONFIG_ILI9341_VCOML`](#group__drivers__ili9341_1ga970cf70c7a0e5f8dbe8b9a194bc0ff9c) 

ILI9341 VCOML voltage level.

Default VCOML voltage of -2V. VCOML represents the low level of VCOM AC voltage. VCOM levels needs to be adjusted to match the capacitance and performance specifications of the TFT panel to maximize contrast and minimize flickering

# struct `ili9341_t` 

Device descriptor for a ili9341.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lcd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__t)` `[`dev`](#structili9341__t_1ac9ddd1d801d719cb0e29952f90d17817) | Pointer to the common lcd device.

## Members

#### `public `[`lcd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__t)` `[`dev`](#structili9341__t_1ac9ddd1d801d719cb0e29952f90d17817) 

Pointer to the common lcd device.

