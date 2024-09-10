---
title: api-boards_common_silabs_drivers_pic.md
description: api-boards_common_silabs_drivers_pic.md
---
# group `boards_common_silabs_drivers_pic` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`pic_init`](#group__boards__common__silabs__drivers__pic_1gafc70164c232cee70941b16e3f2ca029a)`(void)`            | Initialize the power-and-interrupt controller.
`public void `[`pic_write`](#group__boards__common__silabs__drivers__pic_1ga64feb154c4fce0e6f69164eb4da28693)`(uint8_t addr,uint8_t value)`            | Write data to the power-and-interrupt controller.

## Members

#### `public void `[`pic_init`](#group__boards__common__silabs__drivers__pic_1gafc70164c232cee70941b16e3f2ca029a)`(void)` 

Initialize the power-and-interrupt controller.

The following values must be defined:

* PIC_INT_WAKE_PIN

* PIC_I2C

* PIC_I2C_ADDR

#### `public void `[`pic_write`](#group__boards__common__silabs__drivers__pic_1ga64feb154c4fce0e6f69164eb4da28693)`(uint8_t addr,uint8_t value)` 

Write data to the power-and-interrupt controller.

#### Parameters
* `addr` Address of the peripheral to write to. 

* `value` Value to write.

