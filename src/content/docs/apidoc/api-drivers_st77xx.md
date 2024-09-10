---
title: api-drivers_st77xx.md
description: api-drivers_st77xx.md
---
# group `drivers_st77xx` 

Driver for displays with a ST77xx display controller.

The ST77xx display controller driver is a driver for small RGB displays using a ST77xx display controller. The driver supports ST7735, ST7789 and ST7796. The support of the respective controller is enabled by the corresponding module `st7735`, `st7789` or `st7796`. The ST77xx controller used by a display must be specified in the board definition in parameter [lcd_params_t::cntrl](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__params__t_1a5d3c2f9c61bb67b40b08b92840ae8806) or as macro [ST77XX_PARAM_CNTRL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#st77xx__params_8h_1af440faa3bfb48627e638d07f98743d4e) if the default parameter set [ST77XX_PARAMS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#st77xx__params_8h_1adf80f421a8fd1ef3a69b129ffa7ccab7) is used.

The driver communicates with the device either via an

* SPI serial interface (if module `lcd_spi` enabled) or an

* MCU 8080 8-/16-bit parallel interface (if module `lcd_parallel` or module `lcd_parallel_16` is enabled).

Usually the device driver is used either for a single display with SPI serial interface or for a display with parallel MCU 8080 8-/16-bit parallel interface. However, the device driver can also be used simultaneously for multiple displays with different interfaces if several of the `lcd_spi`, `lcd_parallel` and `lcd_parallel_16bit` modules are enabled at the same time. In this case, please refer to the notes in [lcd_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__params__t).

The device requires colors to be send in big endian RGB-565 format. The [CONFIG_LCD_LE_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lcd_1ga5bf4283c3bb6ed05f6e694d0f152c12f) compile time option can switch this, but only use this when strictly necessary. This option will slow down the driver as it certainly can't use DMA anymore, every short has to be converted before transfer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_ST7735_CUSTOM_CONFIG`](#group__drivers__st77xx_1gad521a4ee3002aeaec110c80db8921b47)            | ST7735 Customized Configuration Enable.
`define `[`CONFIG_ST7735_AVDD`](#group__drivers__st77xx_1ga66f88c91f0f40d17c78cac0b4872c325)            | ST7735 AVDD voltage (in millivolts)
`define `[`CONFIG_ST7735_GVDD`](#group__drivers__st77xx_1ga5e89e56cbdaf314b640db052ec755275)            | ST7735 GVDD voltage (in millivolts)
`define `[`CONFIG_ST7735_GVCL`](#group__drivers__st77xx_1ga66f9ce9a745fb349e349be1a70e44b50)            | ST7735 GVL voltage (in millivolts)
`define `[`CONFIG_ST7735_VCOM`](#group__drivers__st77xx_1ga1ebb438caa281746f7a92048b7f3f07f)            | ST7735 VCOM voltage (in millivolts)
`define `[`CONFIG_ST7735_VGH`](#group__drivers__st77xx_1ga34059af1b6134624d606c8bb50349ed4)            | ST7735 VGH voltage (in millivolts)
`define `[`CONFIG_ST7735_VGL`](#group__drivers__st77xx_1gae2032811f32c4ab1bf2041d2cbbe3ba6)            | ST7735 VGL voltage (in millivolts)
`define `[`CONFIG_ST7789_CUSTOM_CONFIG`](#group__drivers__st77xx_1gaa4d5df10f099055d50de0bbfb7d1a7c7)            | ST7789 Customized Configuration Enable.
`define `[`CONFIG_ST7789_AVDD`](#group__drivers__st77xx_1gae6b488be2b171ee214ea64b8257a04e2)            | ST7789 AVDD voltage (in millivolts)
`define `[`CONFIG_ST7789_AVCL`](#group__drivers__st77xx_1ga70ff012be4de69986f5d9ba19d07e230)            | ST7789 AVCL voltage (in millivolts)
`define `[`CONFIG_ST7789_VCOM`](#group__drivers__st77xx_1gaa8010ea4ec3b45f4ea09fd056eed5430)            | ST7789 VCOM voltage (in millivolts)
`define `[`CONFIG_ST7789_VCOM_OFFSET`](#group__drivers__st77xx_1ga4af990b0056166cd75a429fbf257b80e)            | ST7789 VCOM voltage offset (in millivolts)
`define `[`CONFIG_ST7789_VDV`](#group__drivers__st77xx_1ga34952874db64b1757d15ce89510c23b5)            | ST7789 VDV voltage (in millivolts)
`define `[`CONFIG_ST7789_VRH`](#group__drivers__st77xx_1ga80521d698b64410d08e4c707488d95d8)            | ST7789 VRH voltage (in millivolts)
`define `[`CONFIG_ST7796_CUSTOM_CONFIG`](#group__drivers__st77xx_1ga8575abdb6df2cfa6e06859ba6dec3d00)            | ST7796 Customized Configuration Enable.
`define `[`CONFIG_ST7796_AVDD`](#group__drivers__st77xx_1ga9a16ef8a2ac427beaa4e682ccdbae075)            | ST7796 AVDD voltage (in millivolts)
`define `[`CONFIG_ST7796_AVCL`](#group__drivers__st77xx_1ga2b696d5f5dc6895de78c9548671c6211)            | ST7796 AVCL voltage (in millivolts)
`define `[`CONFIG_ST7796_VCOM`](#group__drivers__st77xx_1gab205c26c87ec17b40ef47f982c730d11)            | ST7796 VCOM voltage (in millivolts)
`define `[`CONFIG_ST7796_VCOM_OFFSET`](#group__drivers__st77xx_1gaea146405c0f03387b6dcea7dddd3f04a)            | ST7796 VCOM voltage offset (in millivolts)
`define `[`CONFIG_ST7796_VRH`](#group__drivers__st77xx_1ga12d98cc885b5c54947d45990fdf6eee5)            | ST7796 VRH voltage (in millivolts)
`enum `[`@267`](#group__drivers__st77xx_1gaa53acfc1f86c3ba3efc58c4c0b7a8b06)            | ST77xx display controller variants.
`struct `[`st77xx_t`](#structst77xx__t) | Device descriptor for a ST77xx display.

## Members

#### `define `[`CONFIG_ST7735_CUSTOM_CONFIG`](#group__drivers__st77xx_1gad521a4ee3002aeaec110c80db8921b47) 

ST7735 Customized Configuration Enable.

Define CONFIG_ST7735_CUSTOM_CONFIG=1 to use customized voltage configurations. Otherwise ST7735 is using reset defaults.

#### `define `[`CONFIG_ST7735_AVDD`](#group__drivers__st77xx_1ga66f88c91f0f40d17c78cac0b4872c325) 

ST7735 AVDD voltage (in millivolts)

A default voltage of 4.9V is used for AVDD. Valid values must be in the range of 4500 (4.5V) to 5100 (5.1V) in steps of 100.

#### `define `[`CONFIG_ST7735_GVDD`](#group__drivers__st77xx_1ga5e89e56cbdaf314b640db052ec755275) 

ST7735 GVDD voltage (in millivolts)

A default voltage of 4.6V is used for GVDD (gamma reference positive voltage). Valid values must be in the range of 3150 (3.15V) to 4700 (4.7V) in steps of 50.

#### `define `[`CONFIG_ST7735_GVCL`](#group__drivers__st77xx_1ga66f9ce9a745fb349e349be1a70e44b50) 

ST7735 GVL voltage (in millivolts)

A default voltage of -4.6V is used for GVCL (gamma reference negative voltage). Valid values must be in the range of -4700 (-4.7V) to -3150 (-3.15V) in steps of 50.

#### `define `[`CONFIG_ST7735_VCOM`](#group__drivers__st77xx_1ga1ebb438caa281746f7a92048b7f3f07f) 

ST7735 VCOM voltage (in millivolts)

A default voltage of -0.425V is used for VCOM. VCOM needs to be adjusted to match the capacitance and performance specifications of the TFT panel to maximize contrast and minimize flickering. Valid values must be in the range of -2000 (-2.0V) to -425 (-0.425V) in steps of 25.

#### `define `[`CONFIG_ST7735_VGH`](#group__drivers__st77xx_1ga34059af1b6134624d606c8bb50349ed4) 

ST7735 VGH voltage (in millivolts)

A default voltage of 14.7V is used for VGH, the high voltage for gate drivers. Valid values must be in the range of 10000 (10V) to 15000 (15V) and in the range of (2 * AVDD + 2.1V) and (3 * AVDD + 2.4 V).

#### `define `[`CONFIG_ST7735_VGL`](#group__drivers__st77xx_1gae2032811f32c4ab1bf2041d2cbbe3ba6) 

ST7735 VGL voltage (in millivolts)

A default voltage of -10V is used for VGL, the low voltage for gate drivers. Valid values must be in the range of -13000 (-13V) to -7500 (-7.5V) in steps of 2500.

#### `define `[`CONFIG_ST7789_CUSTOM_CONFIG`](#group__drivers__st77xx_1gaa4d5df10f099055d50de0bbfb7d1a7c7) 

ST7789 Customized Configuration Enable.

Define CONFIG_ST7789_CUSTOM_CONFIG=1 to use customized voltage configurations. Otherwise ST7735 is using reset defaults.

#### `define `[`CONFIG_ST7789_AVDD`](#group__drivers__st77xx_1gae6b488be2b171ee214ea64b8257a04e2) 

ST7789 AVDD voltage (in millivolts)

A default voltage of 6.8V is used for AVDD. Valid values must be in the range of 6400 (6.4V) to 6800 (6.8V) in steps of 100.

#### `define `[`CONFIG_ST7789_AVCL`](#group__drivers__st77xx_1ga70ff012be4de69986f5d9ba19d07e230) 

ST7789 AVCL voltage (in millivolts)

A default voltage of -4.8V is used for AVCL. Valid values must be in the range of -5000 (-5.0V) to -4400 (-4.4V) in steps of 100.

#### `define `[`CONFIG_ST7789_VCOM`](#group__drivers__st77xx_1gaa8010ea4ec3b45f4ea09fd056eed5430) 

ST7789 VCOM voltage (in millivolts)

A default voltage of 0.9V is used for VCOM. VCOM needs to be adjusted to match the capacitance and performance specifications of the TFT panel to maximize contrast and minimize flickering. VCOM is used to derive the GVDD (gamma reference positive voltage) and the GVCL (gamma reference negative voltage) as follows: GDDV = +VRH + VCOM + VCOM_OFFSET + (0.5 * VDV)
GVCL = -VRH + VCOM + VCOM_OFFSET - (0.5 * VDV)
 Valid values must be in the range of 100 (0.1V) to 1675 (1.675V) in steps of 25.

#### `define `[`CONFIG_ST7789_VCOM_OFFSET`](#group__drivers__st77xx_1ga4af990b0056166cd75a429fbf257b80e) 

ST7789 VCOM voltage offset (in millivolts)

A default voltage of 0V is used for VCOM voltage offset (VCOM_OFFSET). VCOM_OFFSET is used to derive the GVDD (gamma reference positive voltage) and the GVCL (gamma reference negative voltage) as follows: GDDV = +VRH + VCOM + VCOM_OFFSET + (0.5 * VDV)
GVCL = -VRH + VCOM + VCOM_OFFSET - (0.5 * VDV)
 Valid values must be in the range of -800 (-0.8V) to 775 (0.775V) in steps of 25.

#### `define `[`CONFIG_ST7789_VDV`](#group__drivers__st77xx_1ga34952874db64b1757d15ce89510c23b5) 

ST7789 VDV voltage (in millivolts)

A default voltage of 0V is used for VDV. VDV is used to derive the GVDD (gamma reference positive voltage) and the GVCL (gamma reference negative voltage) as follows: GDDV = +VRH + VCOM + VCOM_OFFSET + (0.5 * VDV)
GVCL = -VRH + VCOM + VCOM_OFFSET - (0.5 * VDV)
 Valid values must be in the range of -800 (-0.8V) to 775 (0.775V) in steps of 25.

#### `define `[`CONFIG_ST7789_VRH`](#group__drivers__st77xx_1ga80521d698b64410d08e4c707488d95d8) 

ST7789 VRH voltage (in millivolts)

A default voltage of 4.1V is used for VRH. VRH is used to derive the GVDD (gamma reference positive voltage) and the GVCL (gamma reference negative voltage) as follows: GDDV = +VRH + VCOM + VCOM_OFFSET + (0.5 * VDV)
GVCL = -VRH + VCOM + VCOM_OFFSET - (0.5 * VDV)
 Valid values must be in the range of 3350 (3.35V) to 5500 (5.5V) in steps of 50.

#### `define `[`CONFIG_ST7796_CUSTOM_CONFIG`](#group__drivers__st77xx_1ga8575abdb6df2cfa6e06859ba6dec3d00) 

ST7796 Customized Configuration Enable.

Define CONFIG_ST7796_CUSTOM_CONFIG=1 to use customized voltage configurations. Otherwise ST7735 is using reset defaults.

#### `define `[`CONFIG_ST7796_AVDD`](#group__drivers__st77xx_1ga9a16ef8a2ac427beaa4e682ccdbae075) 

ST7796 AVDD voltage (in millivolts)

A default voltage of 6.6V is used for AVDD. Valid values must be in the range of 6200 (6.2V) to 6800 (6.8V) in steps of 100.

#### `define `[`CONFIG_ST7796_AVCL`](#group__drivers__st77xx_1ga2b696d5f5dc6895de78c9548671c6211) 

ST7796 AVCL voltage (in millivolts)

A default voltage of -4.4V is used for AVCL. Valid values must be in the range of -5000 (-5.0V) to -4400 (-4.4V) in steps of 100.

#### `define `[`CONFIG_ST7796_VCOM`](#group__drivers__st77xx_1gab205c26c87ec17b40ef47f982c730d11) 

ST7796 VCOM voltage (in millivolts)

A default voltage of 1.0V is used for VCOM. VCOM needs to be adjusted to match the capacitance and performance specifications of the TFT panel to maximize contrast and minimize flickering. VCOM is used to derive the GVDD (gamma reference positive voltage) and the GVCL (gamma reference negative voltage) as follows: GDDV = +VRH + VCOM + VCOM_OFFSET
GVCL = -VRH + VCOM + VCOM_OFFSET
 Valid values must be in the range of 100 (0.1V) to 1875 (1.875V) in steps of 25.

#### `define `[`CONFIG_ST7796_VCOM_OFFSET`](#group__drivers__st77xx_1gaea146405c0f03387b6dcea7dddd3f04a) 

ST7796 VCOM voltage offset (in millivolts)

A default voltage of 0V is used for VCOM voltage offset (VCOM_OFFSET). VCOM_OFFSET is used to derive the GVDD (gamma reference positive voltage) and the GVCL (gamma reference negative voltage) as follows: GDDV = +VRH + VCOM + VCOM_OFFSET
GVCL = -VRH + VCOM + VCOM_OFFSET
 Valid values must be in the range of -800 (-0.8V) to 775 (0.775V) in steps of 25.

#### `define `[`CONFIG_ST7796_VRH`](#group__drivers__st77xx_1ga12d98cc885b5c54947d45990fdf6eee5) 

ST7796 VRH voltage (in millivolts)

A default voltage of 4.1V is used for VRH. VRH is used to derive the GVDD (gamma reference positive voltage) and the GVCL (gamma reference negative voltage) as follows: GDDV = +VRH + VCOM + VCOM_OFFSET
GVCL = -VRH + VCOM + VCOM_OFFSET
 Valid values must be in the range of 3350 (3.35V) to 5500 (5.5V) in steps of 50.

#### `enum `[`@267`](#group__drivers__st77xx_1gaa53acfc1f86c3ba3efc58c4c0b7a8b06) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ST77XX_CNTRL_ST7735            | 
ST77XX_CNTRL_ST7789            | 
ST77XX_CNTRL_ST7796            | 

ST77xx display controller variants.

# struct `st77xx_t` 

Device descriptor for a ST77xx display.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lcd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__t)` `[`dev`](#structst77xx__t_1a84c2b3871dc18853b7a7ffcebafdfd1a) | Pointer to the common lcd device.

## Members

#### `public `[`lcd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__t)` `[`dev`](#structst77xx__t_1a84c2b3871dc18853b7a7ffcebafdfd1a) 

Pointer to the common lcd device.

