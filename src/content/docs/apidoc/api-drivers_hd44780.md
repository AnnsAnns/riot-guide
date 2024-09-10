---
title: api-drivers_hd44780.md
description: api-drivers_hd44780.md
---
# group `drivers_hd44780` 

Driver for the Hitachi HD44780 LCD driver.

The driver currently supports direct addressing, no I2C

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`HD44780_MAX_COLS`](#group__drivers__hd44780_1ga0ab8d2585216b38d0a5250f0447f6b52)            | Maximal number of columns supported by the driver.
`define `[`HD44780_MAX_ROWS`](#group__drivers__hd44780_1ga66fd2b6df621c34f983f496552c2d1ea)            | Maximal number of rows supported by the driver.
`define `[`HD44780_MAX_PINS`](#group__drivers__hd44780_1ga79b119603236f8f1007493f5fea96a6c)            | Number of data pins for communication 4 or 8.
`define `[`HD44780_CGRAM_SIZE`](#group__drivers__hd44780_1ga951e70bbf0c16b2b1bbd86bf3ef22925)            | Size of RAM for custom chars.
`enum `[`hd44780_state_t`](#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)            | Simple state values.
`public int `[`hd44780_init`](#group__drivers__hd44780_1gaba71832a5c79189079e00ea5951426b0)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,const `[`hd44780_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__params__t)` * params)`            | Initialize the given driver.
`public void `[`hd44780_clear`](#group__drivers__hd44780_1ga915ed976c878828af930cfc4be441a89)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)`            | Clear display, delete all chars.
`public void `[`hd44780_home`](#group__drivers__hd44780_1gab41361450ba48accad84e893a01df5c7)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)`            | Reset cursor to row 0 and column 0.
`public void `[`hd44780_set_cursor`](#group__drivers__hd44780_1ga7f89d6007d4a743b72cd89c652793ad0)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,uint8_t col,uint8_t row)`            | Set cursor to specific position in column and row.
`public void `[`hd44780_display`](#group__drivers__hd44780_1gaf8e692f768fd5fa877fdae09b89d5c26)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)`            | Turn display on or off.
`public void `[`hd44780_cursor`](#group__drivers__hd44780_1ga380841d815ff92d98bb1e85543d41fe6)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)`            | Show cursor, on or off.
`public void `[`hd44780_blink`](#group__drivers__hd44780_1gaf022045dd17a770780215f79b7d78e83)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)`            | Blink cursor, on or off.
`public void `[`hd44780_scroll_left`](#group__drivers__hd44780_1ga0c16f0e8ab976d84aa876f62a39aeb49)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)`            | Enable left scrolling.
`public void `[`hd44780_scroll_right`](#group__drivers__hd44780_1ga59e2e91d252c9f136f61d1c3b1db36d0)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)`            | Enable right scrolling.
`public void `[`hd44780_left2right`](#group__drivers__hd44780_1ga755d60952c2788b4011eccaee9ffda48)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)`            | Set display direction left to right.
`public void `[`hd44780_right2left`](#group__drivers__hd44780_1ga087af543d137830f14d5f05003c7fa3c)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)`            | Set display direction right to left.
`public void `[`hd44780_autoscroll`](#group__drivers__hd44780_1ga35e99338602964039824f424e4de5b1e)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)`            | Display autoscroll on or off.
`public void `[`hd44780_create_char`](#group__drivers__hd44780_1gae60074ee18abb18279c949c42b549f1b)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,uint8_t location,uint8_t charmap)`            | Create and store a custom character on display memory.
`public void `[`hd44780_write`](#group__drivers__hd44780_1ga88d69445a680a04aa2a1cee302ec32ef)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,uint8_t value)`            | Write a single character on the LCD.
`public void `[`hd44780_print`](#group__drivers__hd44780_1gab344fb47c9a5784ce6fe0bce72c62d75)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,const char * data)`            | Write a string on the LCD.
`struct `[`hd44780_params_t`](#structhd44780__params__t) | Parameters needed for device initialization.
`struct `[`hd44780_t`](#structhd44780__t) | Device descriptor for HD44780 LCD.

## Members

#### `define `[`HD44780_MAX_COLS`](#group__drivers__hd44780_1ga0ab8d2585216b38d0a5250f0447f6b52) 

Maximal number of columns supported by the driver.

#### `define `[`HD44780_MAX_ROWS`](#group__drivers__hd44780_1ga66fd2b6df621c34f983f496552c2d1ea) 

Maximal number of rows supported by the driver.

#### `define `[`HD44780_MAX_PINS`](#group__drivers__hd44780_1ga79b119603236f8f1007493f5fea96a6c) 

Number of data pins for communication 4 or 8.

#### `define `[`HD44780_CGRAM_SIZE`](#group__drivers__hd44780_1ga951e70bbf0c16b2b1bbd86bf3ef22925) 

Size of RAM for custom chars.

Generally the driver could support 8 chars of size 5x8 or 4 of size 5x10. However, most displays only use the former, which is (hard wired) default.

#### `enum `[`hd44780_state_t`](#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HD44780_OFF            | disable feature
HD44780_ON            | enable feature

Simple state values.

#### `public int `[`hd44780_init`](#group__drivers__hd44780_1gaba71832a5c79189079e00ea5951426b0)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,const `[`hd44780_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__params__t)` * params)` 

Initialize the given driver.

#### Parameters
* `dev` device descriptor of display to initialize 

* `params` configuration parameters

#### Returns
0 on success, otherwise error

#### `public void `[`hd44780_clear`](#group__drivers__hd44780_1ga915ed976c878828af930cfc4be441a89)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)` 

Clear display, delete all chars.

#### Parameters
* `dev` device descriptor of LCD

#### `public void `[`hd44780_home`](#group__drivers__hd44780_1gab41361450ba48accad84e893a01df5c7)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)` 

Reset cursor to row 0 and column 0.

#### Parameters
* `dev` device descriptor of LCD

#### `public void `[`hd44780_set_cursor`](#group__drivers__hd44780_1ga7f89d6007d4a743b72cd89c652793ad0)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,uint8_t col,uint8_t row)` 

Set cursor to specific position in column and row.

#### Parameters
* `dev` device descriptor of LCD 

* `col` column position 

* `row` row position

#### `public void `[`hd44780_display`](#group__drivers__hd44780_1gaf8e692f768fd5fa877fdae09b89d5c26)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)` 

Turn display on or off.

#### Parameters
* `dev` device descriptor of LCD 

* `state` display on or off

#### `public void `[`hd44780_cursor`](#group__drivers__hd44780_1ga380841d815ff92d98bb1e85543d41fe6)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)` 

Show cursor, on or off.

#### Parameters
* `dev` device descriptor of LCD 

* `state` cursor on or off

#### `public void `[`hd44780_blink`](#group__drivers__hd44780_1gaf022045dd17a770780215f79b7d78e83)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)` 

Blink cursor, on or off.

#### Parameters
* `dev` device descriptor of LCD 

* `state` blink on or off

#### `public void `[`hd44780_scroll_left`](#group__drivers__hd44780_1ga0c16f0e8ab976d84aa876f62a39aeb49)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)` 

Enable left scrolling.

#### Parameters
* `dev` device descriptor of LCD

#### `public void `[`hd44780_scroll_right`](#group__drivers__hd44780_1ga59e2e91d252c9f136f61d1c3b1db36d0)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)` 

Enable right scrolling.

#### Parameters
* `dev` device descriptor of LCD

#### `public void `[`hd44780_left2right`](#group__drivers__hd44780_1ga755d60952c2788b4011eccaee9ffda48)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)` 

Set display direction left to right.

#### Parameters
* `dev` device descriptor of LCD

#### `public void `[`hd44780_right2left`](#group__drivers__hd44780_1ga087af543d137830f14d5f05003c7fa3c)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev)` 

Set display direction right to left.

#### Parameters
* `dev` device descriptor of LCD

#### `public void `[`hd44780_autoscroll`](#group__drivers__hd44780_1ga35e99338602964039824f424e4de5b1e)`(`[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,`[`hd44780_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__hd44780_1ga2a57c0b8e66a2bcfa11b14b3f1139ef1)` state)` 

Display autoscroll on or off.

#### Parameters
* `dev` device descriptor of LCD 

* `state` scroll on or off

#### `public void `[`hd44780_create_char`](#group__drivers__hd44780_1gae60074ee18abb18279c949c42b549f1b)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,uint8_t location,uint8_t charmap)` 

Create and store a custom character on display memory.

#### Parameters
* `dev` device descriptor of LCD 

* `location` memory location 

* `charmap` character bitmap

charmap has to be of size HD44780_CGRAM_SIZE, which is 8 by default

#### `public void `[`hd44780_write`](#group__drivers__hd44780_1ga88d69445a680a04aa2a1cee302ec32ef)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,uint8_t value)` 

Write a single character on the LCD.

#### Parameters
* `dev` device descriptor of LCD 

* `value` the character to print, i.e., memory location

#### `public void `[`hd44780_print`](#group__drivers__hd44780_1gab344fb47c9a5784ce6fe0bce72c62d75)`(const `[`hd44780_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__t)` * dev,const char * data)` 

Write a string on the LCD.

#### Parameters
* `dev` device descriptor of LCD 

* `data` the string to print

# struct `hd44780_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`cols`](#structhd44780__params__t_1a75e805567653c5f01ad2364b7785e500) | number of LCD cols
`public uint8_t `[`rows`](#structhd44780__params__t_1ad946dbd5574b9854248c1f5454ec31d5) | number of LCD rows
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rs`](#structhd44780__params__t_1a68f6cbe4b5808f7c7c256399cf798d8a) | rs gpio pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rw`](#structhd44780__params__t_1a6484e24b639c73001cffe6defff8dde9) | rw gpio pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`enable`](#structhd44780__params__t_1a81a7b86a98707e52c9335469462ce35a) | enable gpio pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data`](#structhd44780__params__t_1a90b575dd424fcdc15fd34d733ac23cdb) | data gpio pins

## Members

#### `public uint8_t `[`cols`](#structhd44780__params__t_1a75e805567653c5f01ad2364b7785e500) 

number of LCD cols

#### `public uint8_t `[`rows`](#structhd44780__params__t_1ad946dbd5574b9854248c1f5454ec31d5) 

number of LCD rows

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rs`](#structhd44780__params__t_1a68f6cbe4b5808f7c7c256399cf798d8a) 

rs gpio pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rw`](#structhd44780__params__t_1a6484e24b639c73001cffe6defff8dde9) 

rw gpio pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`enable`](#structhd44780__params__t_1a81a7b86a98707e52c9335469462ce35a) 

enable gpio pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data`](#structhd44780__params__t_1a90b575dd424fcdc15fd34d733ac23cdb) 

data gpio pins

# struct `hd44780_t` 

Device descriptor for HD44780 LCD.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`hd44780_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__params__t)` `[`p`](#structhd44780__t_1a2bcfaf8bd4c788666955d7c9e59420d0) | LCD config parameters.
`public uint8_t `[`flag`](#structhd44780__t_1a2caead129de883eb28d8c12ba2e1fe19) | LCD functional flags.
`public uint8_t `[`ctrl`](#structhd44780__t_1add7a2c18202fc2158168575c8c74a9fc) | LCD control flags.
`public uint8_t `[`mode`](#structhd44780__t_1acc31b59d6c30de6e4a4bbee88fb9c9c4) | LCD mode flags.
`public uint8_t `[`roff`](#structhd44780__t_1a31b9776bec0a79a77ffbbbbe1744e193) | offsets for LCD rows

## Members

#### `public `[`hd44780_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hd44780.md#structhd44780__params__t)` `[`p`](#structhd44780__t_1a2bcfaf8bd4c788666955d7c9e59420d0) 

LCD config parameters.

#### `public uint8_t `[`flag`](#structhd44780__t_1a2caead129de883eb28d8c12ba2e1fe19) 

LCD functional flags.

#### `public uint8_t `[`ctrl`](#structhd44780__t_1add7a2c18202fc2158168575c8c74a9fc) 

LCD control flags.

#### `public uint8_t `[`mode`](#structhd44780__t_1acc31b59d6c30de6e4a4bbee88fb9c9c4) 

LCD mode flags.

#### `public uint8_t `[`roff`](#structhd44780__t_1a31b9776bec0a79a77ffbbbbe1744e193) 

offsets for LCD rows

