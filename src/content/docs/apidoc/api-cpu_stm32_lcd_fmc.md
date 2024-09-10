---
title: api-cpu_stm32_lcd_fmc.md
description: api-cpu_stm32_lcd_fmc.md
---
# group `cpu_stm32_lcd_fmc` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LCD_FMC_NUMOF`](#group__cpu__stm32__lcd__fmc_1ga2a24226cdd2b62b601783f1c586baaab)            | Number of LCDs using FMC banks.
`struct `[`lcd_fmc_desc_t`](#structlcd__fmc__desc__t) | Descriptor of the FMC bank used for a LCD.

## Members

#### `define `[`LCD_FMC_NUMOF`](#group__cpu__stm32__lcd__fmc_1ga2a24226cdd2b62b601783f1c586baaab) 

Number of LCDs using FMC banks.

It represents the number of elements in LCD FMC bank descriptor array of type [lcd_fmc_desc_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_lcd_fmc.md#structlcd__fmc__desc__t). Because it is used by the preprocessor, it has to be defined as a number. It is not possible to use the [ARRAY_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#container_8h_1a25f003de16c08a4888b69f619d70f427) macro here.

`LCD_FMC_NUMOF` has to be equal to the number of elements in the LCD FMC bank descriptor array of type [lcd_fmc_desc_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_lcd_fmc.md#structlcd__fmc__desc__t).

# struct `lcd_fmc_desc_t` 

Descriptor of the FMC bank used for a LCD.

The board definition has to specify the array [lcd_fmc_desc](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2stm32l496g-disco_2include_2periph__conf_8h_1a90fce6cba345b051c4045a5f6f05cb2d) of type [lcd_fmc_desc_t](#structlcd__fmc__desc__t) which defines the FMC banks and the address offsets used for the LCD displays that are connected to FMC banks.

In the case that multiple LCDs are connected to FMC banks, the FMC bank descriptors for LCDs of type [lcd_fmc_desc_t](#structlcd__fmc__desc__t) must be defined in same order as the LCD devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`fmc_bank_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__bank__conf__t)` * `[`bank`](#structlcd__fmc__desc__t_1ac11ff56aa4a7e0e6cbaa7ca56012216e) | FMC bank config used for the LCD.
`public uint32_t `[`cmd_offset`](#structlcd__fmc__desc__t_1ab3abade6746d20694794c7a30de7d43f) | offset to the bank address used for commands
`public uint32_t `[`data_offset`](#structlcd__fmc__desc__t_1a11b116fef94e92d00fc3e57cea2a965c) | offset to the bank address used for data

## Members

#### `public const `[`fmc_bank_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__bank__conf__t)` * `[`bank`](#structlcd__fmc__desc__t_1ac11ff56aa4a7e0e6cbaa7ca56012216e) 

FMC bank config used for the LCD.

#### `public uint32_t `[`cmd_offset`](#structlcd__fmc__desc__t_1ab3abade6746d20694794c7a30de7d43f) 

offset to the bank address used for commands

#### `public uint32_t `[`data_offset`](#structlcd__fmc__desc__t_1a11b116fef94e92d00fc3e57cea2a965c) 

offset to the bank address used for data

