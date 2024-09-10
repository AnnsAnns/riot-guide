---
title: api-drivers_epd_bw_spi.md
description: api-drivers_epd_bw_spi.md
---
# group `drivers_epd_bw_spi` 

Device driver for black/white e-ink/e-paper SPI displays.

This driver provides functionality for working with black/white e-ink (e-paper) SPI displays. Various display controllers are currently supported out of the box, see [epd_bw_spi_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#epd__bw__spi__params_8h). Please open an issue or pull request with your controller details (size, Vcom, LUTs) if your display controller is not included yet.

Use of this driver requires knowing the parameters of your display. See [epd_bw_spi_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__params__t) and [epd_bw_spi_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#epd__bw__spi__params_8h) for more details on the parameters. Note that while the reset and busy pins are optional, using them is highly recommended.

This driver has [Display device generic API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev) support.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`EPD_BW_SPI_COLOR_WHITE`](#group__drivers__epd__bw__spi_1gaeeb85e49fe831ddf92ec704820db73f2)            | White (8x1 pixels)
`define `[`EPD_BW_SPI_COLOR_BLACK`](#group__drivers__epd__bw__spi_1gaee7f0c21e0670e03bc86ffd4c46dd1a7)            | Black (8x1 pixels)
`enum `[`epd_bw_spi_entry_mode_t`](#group__drivers__epd__bw__spi_1gada50b297d4216c0809a9cd863b4d8dc5)            | Data entry mode settings.
`enum `[`@175`](#group__drivers__epd__bw__spi_1gadab0c4467b3c6f365e87d0316a74bf64)            | Additional status codes for black/white SPI e-paper displays.
`public int `[`epd_bw_spi_init`](#group__drivers__epd__bw__spi_1ga6591a96c1042a5340dd0ce46650ac506)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,const `[`epd_bw_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__params__t)` * params)`            | Initialise the display.
`public void `[`epd_bw_spi_activate`](#group__drivers__epd__bw__spi_1gaf36d8fd7b6cc8f2ea79a99fee345bb04)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Activate the display.
`public void `[`epd_bw_spi_deactivate`](#group__drivers__epd__bw__spi_1ga54bbabaa89b26117a2c603418056acb0)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Deactivate the display.
`public void `[`epd_bw_spi_init_full`](#group__drivers__epd__bw__spi_1ga84137d1a5ea16fa8db9020f95c70158a)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Initialise the display for a full refresh.
`public void `[`epd_bw_spi_update_full`](#group__drivers__epd__bw__spi_1ga19f78ba9d30d53a89625914c8aaa8eeb)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Update the display with a full refresh.
`public void `[`epd_bw_spi_init_part`](#group__drivers__epd__bw__spi_1ga1c4e7db3c2777b18b14bc59c949300eb)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Initialise the display for a partial refresh.
`public void `[`epd_bw_spi_update_part`](#group__drivers__epd__bw__spi_1ga1dee52714a9e644ed876791d4202414a)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Update the display with a partial refresh.
`public void `[`epd_bw_spi_init_auto`](#group__drivers__epd__bw__spi_1gab120238e35eab9810964562ad6e1bf96)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Initialise the display for an automatic partial/full refresh.
`public void `[`epd_bw_spi_update_auto`](#group__drivers__epd__bw__spi_1ga129d642609ad4032e201894140260ea3)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Update the display with an automatic partial/full refresh.
`public void `[`epd_bw_spi_clear`](#group__drivers__epd__bw__spi_1gab29ed746a3ede9278f75228cc119b534)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Clear the entire display.
`public void `[`epd_bw_spi_fill`](#group__drivers__epd__bw__spi_1gaaeeda130711e6692eaaaa45ab4c7ca72)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,uint8_t x1,uint8_t x2,uint16_t y1,uint16_t y2,uint8_t color)`            | Fill an area with a single color.
`public void `[`epd_bw_spi_fill_pixels`](#group__drivers__epd__bw__spi_1ga4612099a3283ff0bfdf2c2accc92a471)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,uint8_t x1,uint8_t x2,uint16_t y1,uint16_t y2,uint8_t * px)`            | Fill an area with an array of pixels.
`public void `[`epd_bw_spi_set_area`](#group__drivers__epd__bw__spi_1gacca5e1367d91132baf8cfc8d9c63c067)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,uint8_t x1,uint8_t x2,uint16_t y1,uint16_t y2)`            | Set the area in which can be drawn.
`public void `[`epd_bw_spi_write_buffer`](#group__drivers__epd__bw__spi_1gaff022bbec9c369ca6a331716c76d9e63)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,const uint8_t * buf,size_t len)`            | Write to the RAM of the epd_bw_spi controller.
`public void `[`epd_bw_spi_sleep`](#group__drivers__epd__bw__spi_1ga78fb0a9c3c869fe7ff269a59862d0106)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Set the display to deep sleep mode.
`public void `[`epd_bw_spi_wake`](#group__drivers__epd__bw__spi_1ga278308d1d74ab40be84db0095012c562)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Wake the device.
`public void `[`epd_bw_spi_swreset`](#group__drivers__epd__bw__spi_1ga18e21c38bd7f0584439f71fa50b3fafb)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)`            | Perform a soft reset of the device.
`struct `[`epd_bw_spi_controller_t`](#structepd__bw__spi__controller__t) | Display controller parameters.
`struct `[`epd_bw_spi_params_t`](#structepd__bw__spi__params__t) | SPI display device initialisation parameters.
`struct `[`epd_bw_spi_t`](#structepd__bw__spi__t) | Device initialisation parameters.

## Members

#### `define `[`EPD_BW_SPI_COLOR_WHITE`](#group__drivers__epd__bw__spi_1gaeeb85e49fe831ddf92ec704820db73f2) 

White (8x1 pixels)

#### `define `[`EPD_BW_SPI_COLOR_BLACK`](#group__drivers__epd__bw__spi_1gaee7f0c21e0670e03bc86ffd4c46dd1a7) 

Black (8x1 pixels)

#### `enum `[`epd_bw_spi_entry_mode_t`](#group__drivers__epd__bw__spi_1gada50b297d4216c0809a9cd863b4d8dc5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
EPD_BW_SPI_Y_DEC_X_DEC            | Y decrement, X decrement.
EPD_BW_SPI_Y_DEC_X_INC            | Y decrement, X increment.
EPD_BW_SPI_Y_INC_X_DEC            | Y increment, X decrement.
EPD_BW_SPI_Y_INC_X_INC            | Y increment, X increment.

Data entry mode settings.

This setting affect the automatic increment/decrement of the address counters.

#### `enum `[`@175`](#group__drivers__epd__bw__spi_1gadab0c4467b3c6f365e87d0316a74bf64) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
EPD_BW_SPI_DC_FAIL            | 
EPD_BW_SPI_RST_FAIL            | 
EPD_BW_SPI_BUSY_FAIL            | 

Additional status codes for black/white SPI e-paper displays.

#### `public int `[`epd_bw_spi_init`](#group__drivers__epd__bw__spi_1ga6591a96c1042a5340dd0ce46650ac506)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,const `[`epd_bw_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__params__t)` * params)` 

Initialise the display.

#### Parameters
* `dev` Display to initialise. 

* `params` SPI Display parameters to use for initialisation.

#### `public void `[`epd_bw_spi_activate`](#group__drivers__epd__bw__spi_1gaf36d8fd7b6cc8f2ea79a99fee345bb04)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Activate the display.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_deactivate`](#group__drivers__epd__bw__spi_1ga54bbabaa89b26117a2c603418056acb0)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Deactivate the display.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_init_full`](#group__drivers__epd__bw__spi_1ga84137d1a5ea16fa8db9020f95c70158a)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Initialise the display for a full refresh.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_update_full`](#group__drivers__epd__bw__spi_1ga19f78ba9d30d53a89625914c8aaa8eeb)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Update the display with a full refresh.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_init_part`](#group__drivers__epd__bw__spi_1ga1c4e7db3c2777b18b14bc59c949300eb)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Initialise the display for a partial refresh.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_update_part`](#group__drivers__epd__bw__spi_1ga1dee52714a9e644ed876791d4202414a)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Update the display with a partial refresh.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_init_auto`](#group__drivers__epd__bw__spi_1gab120238e35eab9810964562ad6e1bf96)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Initialise the display for an automatic partial/full refresh.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_update_auto`](#group__drivers__epd__bw__spi_1ga129d642609ad4032e201894140260ea3)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Update the display with an automatic partial/full refresh.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_clear`](#group__drivers__epd__bw__spi_1gab29ed746a3ede9278f75228cc119b534)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Clear the entire display.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_fill`](#group__drivers__epd__bw__spi_1gaaeeda130711e6692eaaaa45ab4c7ca72)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,uint8_t x1,uint8_t x2,uint16_t y1,uint16_t y2,uint8_t color)` 

Fill an area with a single color.

#### Parameters
* `dev` Device descriptor 

* `x1` X coordinate of the first corner (multiple of 8). 

* `x2` X coordinate of the opposite corner (multiple of 8). 

* `y1` Y coordinate of the first corner. 

* `y2` Y coordinate of the opposite corner. 

* `color` Color to use (`EPD_BW_SPI_COLOR_BLACK` or `EPD_BW_SPI_COLOR_WHITE`)

#### `public void `[`epd_bw_spi_fill_pixels`](#group__drivers__epd__bw__spi_1ga4612099a3283ff0bfdf2c2accc92a471)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,uint8_t x1,uint8_t x2,uint16_t y1,uint16_t y2,uint8_t * px)` 

Fill an area with an array of pixels.

Note that the length of the array should be the same as the number of pixels in the given area.

#### Parameters
* `dev` Device descriptor. 

* `x1` X coordinate of the first corner (multiple of 8). 

* `x2` X coordinate of the opposite corner (multiple of 8). 

* `y1` Y coordinate of the first corner. 

* `y2` Y coordinate of the opposite corner. 

* `px` Array of pixels to use.

#### `public void `[`epd_bw_spi_set_area`](#group__drivers__epd__bw__spi_1gacca5e1367d91132baf8cfc8d9c63c067)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,uint8_t x1,uint8_t x2,uint16_t y1,uint16_t y2)` 

Set the area in which can be drawn.

#### Parameters
* `dev` Device descriptor. 

* `x1` X coordinate of the first corner (multiple of 8). 

* `x2` X coordinate of the opposite corner (multiple of 8). 

* `y1` Y coordinate of the first corner. 

* `y2` Y coordinate of the opposite corner.

#### `public void `[`epd_bw_spi_write_buffer`](#group__drivers__epd__bw__spi_1gaff022bbec9c369ca6a331716c76d9e63)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev,const uint8_t * buf,size_t len)` 

Write to the RAM of the epd_bw_spi controller.

Together with `[epd_bw_spi_set_area()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__epd__bw__spi_1gacca5e1367d91132baf8cfc8d9c63c067)`, this allows one to draw a pregenerated image on the screen.

#### Parameters
* `dev` Device descriptor. 

* `buf` Buffer to write to the display. 

* `len` Size of the buffer to write to the display.

#### `public void `[`epd_bw_spi_sleep`](#group__drivers__epd__bw__spi_1ga78fb0a9c3c869fe7ff269a59862d0106)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Set the display to deep sleep mode.

After the display has gone to sleep, a wake can be triggered with the reset pin. Do not use this if no reset pin has been defined.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_wake`](#group__drivers__epd__bw__spi_1ga278308d1d74ab40be84db0095012c562)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Wake the device.

This doesn't do anything without using the reset pin.

#### Parameters
* `dev` Device descriptor.

#### `public void `[`epd_bw_spi_swreset`](#group__drivers__epd__bw__spi_1ga18e21c38bd7f0584439f71fa50b3fafb)`(`[`epd_bw_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__t)` * dev)` 

Perform a soft reset of the device.

This resets all commands and parameters to their default values, except for sleep mode and the RAM.

#### Parameters
* `dev` Device descriptor.

# struct `epd_bw_spi_controller_t` 

Display controller parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`vcom`](#structepd__bw__spi__controller__t_1abce4b107051419ea809fc1426e7de8e8) | VCOM voltage level.
`public const uint16_t `[`size_x`](#structepd__bw__spi__controller__t_1a61a48f20400df2546cf3a5c2a92a8443) | supported number of horizontal pixels
`public const uint16_t `[`size_y`](#structepd__bw__spi__controller__t_1acc0ae3615007977fbd95499dbc31eccf) | supported number of vertical pixels
`public const uint8_t `[`lut_size`](#structepd__bw__spi__controller__t_1a54e3aaf086721f5b0dc9f7975162b3cc) | size of the waveform lookup table
`public const uint8_t * `[`lut_full`](#structepd__bw__spi__controller__t_1a7178c370d66b84a44a3f0579006bc85e) | lookup table for a full display refresh
`public const uint8_t * `[`lut_part`](#structepd__bw__spi__controller__t_1a70efa448e2f0718f9454a86d182231f1) | lookup table for a partial display refresh

## Members

#### `public uint8_t `[`vcom`](#structepd__bw__spi__controller__t_1abce4b107051419ea809fc1426e7de8e8) 

VCOM voltage level.

#### `public const uint16_t `[`size_x`](#structepd__bw__spi__controller__t_1a61a48f20400df2546cf3a5c2a92a8443) 

supported number of horizontal pixels

#### `public const uint16_t `[`size_y`](#structepd__bw__spi__controller__t_1acc0ae3615007977fbd95499dbc31eccf) 

supported number of vertical pixels

#### `public const uint8_t `[`lut_size`](#structepd__bw__spi__controller__t_1a54e3aaf086721f5b0dc9f7975162b3cc) 

size of the waveform lookup table

#### `public const uint8_t * `[`lut_full`](#structepd__bw__spi__controller__t_1a7178c370d66b84a44a3f0579006bc85e) 

lookup table for a full display refresh

#### `public const uint8_t * `[`lut_part`](#structepd__bw__spi__controller__t_1a70efa448e2f0718f9454a86d182231f1) 

lookup table for a partial display refresh

# struct `epd_bw_spi_params_t` 

SPI display device initialisation parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structepd__bw__spi__params__t_1a89b5f7d6fee656cce6343957a9dc7c29) | SPI device that the display is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structepd__bw__spi__params__t_1ad05fb28e7a0d72ae48f2d42f05083cab) | SPI clock speed to use.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structepd__bw__spi__params__t_1ad70222194dfe1c1f821dda4888c3d75c) | pin connected to the CHIP SELECT line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dc_pin`](#structepd__bw__spi__params__t_1a66bb9760615b24818a6a0769b85da0e8) | pin connected to the DC line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structepd__bw__spi__params__t_1ab4901c090e68b3004ff7b6bb8529f2f6) | pin connected to the reset line (optional)
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`busy_pin`](#structepd__bw__spi__params__t_1a0be5fdd4e21398049f9fc3651001c792) | pin connected to the busy line (optional)
`public bool `[`busy_value`](#structepd__bw__spi__params__t_1aa24bc81aceb56d0c75e69b73ed613ec7) | expected value for the busy pin when the display is busy
`public bool `[`dummy`](#structepd__bw__spi__params__t_1a297327dc958253911586c2279945f74b) | if device requires a dummy cycle before read
`public `[`epd_bw_spi_controller_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__controller__t)` `[`controller`](#structepd__bw__spi__params__t_1ab2ffdddaa4f93a3d735cb2e390a7fcde) | display controller of the e-Paper display
`public `[`epd_bw_spi_entry_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__epd__bw__spi_1gada50b297d4216c0809a9cd863b4d8dc5)` `[`entry_mode`](#structepd__bw__spi__params__t_1a237fb7955d3f462ea857e6c563a92651) | data entry mode
`public uint16_t `[`size_x`](#structepd__bw__spi__params__t_1a8c909805f147d97704cef1c24d6d0c5f) | number of horizontal pixels in the display
`public uint16_t `[`size_y`](#structepd__bw__spi__params__t_1add393e9d6dc22c1bcf31bb3c143ad9e7) | number of vertical pixels in the display
`public uint16_t `[`partial_refresh_max`](#structepd__bw__spi__params__t_1a81ff42ba1307ea673380362465b128d9) | maximum number of partial refreshes to perform before triggering a full refresh

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structepd__bw__spi__params__t_1a89b5f7d6fee656cce6343957a9dc7c29) 

SPI device that the display is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structepd__bw__spi__params__t_1ad05fb28e7a0d72ae48f2d42f05083cab) 

SPI clock speed to use.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structepd__bw__spi__params__t_1ad70222194dfe1c1f821dda4888c3d75c) 

pin connected to the CHIP SELECT line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dc_pin`](#structepd__bw__spi__params__t_1a66bb9760615b24818a6a0769b85da0e8) 

pin connected to the DC line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structepd__bw__spi__params__t_1ab4901c090e68b3004ff7b6bb8529f2f6) 

pin connected to the reset line (optional)

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`busy_pin`](#structepd__bw__spi__params__t_1a0be5fdd4e21398049f9fc3651001c792) 

pin connected to the busy line (optional)

#### `public bool `[`busy_value`](#structepd__bw__spi__params__t_1aa24bc81aceb56d0c75e69b73ed613ec7) 

expected value for the busy pin when the display is busy

#### `public bool `[`dummy`](#structepd__bw__spi__params__t_1a297327dc958253911586c2279945f74b) 

if device requires a dummy cycle before read

#### `public `[`epd_bw_spi_controller_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__controller__t)` `[`controller`](#structepd__bw__spi__params__t_1ab2ffdddaa4f93a3d735cb2e390a7fcde) 

display controller of the e-Paper display

#### `public `[`epd_bw_spi_entry_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__epd__bw__spi_1gada50b297d4216c0809a9cd863b4d8dc5)` `[`entry_mode`](#structepd__bw__spi__params__t_1a237fb7955d3f462ea857e6c563a92651) 

data entry mode

#### `public uint16_t `[`size_x`](#structepd__bw__spi__params__t_1a8c909805f147d97704cef1c24d6d0c5f) 

number of horizontal pixels in the display

#### `public uint16_t `[`size_y`](#structepd__bw__spi__params__t_1add393e9d6dc22c1bcf31bb3c143ad9e7) 

number of vertical pixels in the display

#### `public uint16_t `[`partial_refresh_max`](#structepd__bw__spi__params__t_1a81ff42ba1307ea673380362465b128d9) 

maximum number of partial refreshes to perform before triggering a full refresh

# struct `epd_bw_spi_t` 

Device initialisation parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`epd_bw_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__params__t)` `[`params`](#structepd__bw__spi__t_1af54b8a71a00a0b6b4c6b1542e9b4d81a) | SPI display parameters.
`public uint16_t `[`partial_refresh_count`](#structepd__bw__spi__t_1a8fee6edb95a67959930afe18c404a472) | number of partial refreshes since the last full refresh

## Members

#### `public `[`epd_bw_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_epd_bw_spi.md#structepd__bw__spi__params__t)` `[`params`](#structepd__bw__spi__t_1af54b8a71a00a0b6b4c6b1542e9b4d81a) 

SPI display parameters.

#### `public uint16_t `[`partial_refresh_count`](#structepd__bw__spi__t_1a8fee6edb95a67959930afe18c404a472) 

number of partial refreshes since the last full refresh

