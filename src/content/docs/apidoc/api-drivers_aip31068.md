---
title: api-drivers_aip31068.md
description: api-drivers_aip31068.md
---
# group `drivers_aip31068` 

Device driver for AIP31068.

Hendrik van Essen [hendrik.ve@fu-berlin.de](mailto:hendrik.ve@fu-berlin.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`aip31068_custom_symbol_t`](#group__drivers__aip31068_1ga38a9a645f2c3dd1d4fe5663acafb2d2d)            | Keys for custom symbols.
`enum `[`aip31068_text_insertion_mode_t`](#group__drivers__aip31068_1ga1b7e22ce7418fb1edced6e3ff64ec9dc)            | Defines the direction of the text insertion.
`enum `[`aip31068_font_size_t`](#group__drivers__aip31068_1ga66a355bf58387e7af2e5b662834f5d5f)            | Size of a character of the display in dots/pixels.
`enum `[`aip31068_bit_mode_t`](#group__drivers__aip31068_1ga5a6afd8a2289f5454fb3fb8addb7359b)            | Bit mode for the display.
`public int `[`aip31068_init`](#group__drivers__aip31068_1ga0bb284a2553013d7eac25ff27516f684)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,const `[`aip31068_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__params__t)` * params)`            | Initialization.
`public int `[`aip31068_turn_on`](#group__drivers__aip31068_1ga86506273b2d25ff8e90bfac1b33e621e)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Turn on the display.
`public int `[`aip31068_turn_off`](#group__drivers__aip31068_1ga0cdd250880324a0200fbe5ba7e456982)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Turn off the display.
`public int `[`aip31068_clear`](#group__drivers__aip31068_1ga07cb5e97b06e4e45dfc8e341a7720db3)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Clear the display and set the cursor to position (0, 0).
`public int `[`aip31068_return_home`](#group__drivers__aip31068_1gafe3c19848fa599295cd5e1c77ec6df09)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Reset cursor position to (0, 0) and scroll display to original position.
`public int `[`aip31068_set_auto_scroll_enabled`](#group__drivers__aip31068_1ga9255df345ad27b872a6435e3c0a743cd)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,bool enabled)`            | Enable or disable automated scrolling.
`public int `[`aip31068_set_cursor_blinking_enabled`](#group__drivers__aip31068_1gaeb74f1516812023cbbf9af5ccfd07d71)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,bool enabled)`            | Enable or disable cursor blinking.
`public int `[`aip31068_set_cursor_visible`](#group__drivers__aip31068_1ga37378419792495a2e281578159966eb5)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,bool visible)`            | Show or hide the cursor.
`public int `[`aip31068_set_cursor_position`](#group__drivers__aip31068_1ga935403417623e4e5188656723c4f0614)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,uint8_t row,uint8_t col)`            | Move the cursor to a given position.
`public int `[`aip31068_set_text_insertion_mode`](#group__drivers__aip31068_1gafd2ef2b92b13f975751df9f6423dd648)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,`[`aip31068_text_insertion_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga1b7e22ce7418fb1edced6e3ff64ec9dc)` mode)`            | Set the direction from which the text is inserted, starting from the cursor.
`public int `[`aip31068_move_cursor_left`](#group__drivers__aip31068_1ga31dd56fef68593d8c1a6093837d20ab0)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Move the cursor one unit to the left.
`public int `[`aip31068_move_cursor_right`](#group__drivers__aip31068_1ga1c8a4d7aea4c069127c23129e6a6e53f)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Move the cursor one unit to the right.
`public int `[`aip31068_scroll_display_left`](#group__drivers__aip31068_1gaddb890810b78d0eb228943d2d917b836)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Scroll the entire display content (all lines) one unit to the left.
`public int `[`aip31068_scroll_display_right`](#group__drivers__aip31068_1gac84265fffcf6e20ec2b5f7141408be19)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)`            | Scroll the entire display content (all lines) one unit to the right.
`public int `[`aip31068_set_custom_symbol`](#group__drivers__aip31068_1gad87a20c27db3686950f3a0e6c1c4eb5f)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,`[`aip31068_custom_symbol_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga38a9a645f2c3dd1d4fe5663acafb2d2d)` customSymbol,const uint8_t charmap)`            | Create a custom symbol.
`public int `[`aip31068_print_custom_symbol`](#group__drivers__aip31068_1ga1da86a97530229fe1c78c44fbc21351b)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,`[`aip31068_custom_symbol_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga38a9a645f2c3dd1d4fe5663acafb2d2d)` customSymbol)`            | Print a custom symbol by key reference.
`public int `[`aip31068_print`](#group__drivers__aip31068_1ga32f5d0935aa9158dad27a0041094b8d5)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,const char * data)`            | Print a string.
`public int `[`aip31068_print_char`](#group__drivers__aip31068_1ga57682bb6db9de72ad7671a6e11c57431)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,char c)`            | Print a single character.
`struct `[`aip31068_params_t`](#structaip31068__params__t) | AIP31068 device initialization parameters.
`struct `[`aip31068_t`](#structaip31068__t) | AIP31068 PWM device data structure type.

## Members

#### `enum `[`aip31068_custom_symbol_t`](#group__drivers__aip31068_1ga38a9a645f2c3dd1d4fe5663acafb2d2d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
CUSTOM_SYMBOL_1            | 1st custom symbol
CUSTOM_SYMBOL_2            | 2nd custom symbol
CUSTOM_SYMBOL_3            | 3rd custom symbol
CUSTOM_SYMBOL_4            | 4th custom symbol
CUSTOM_SYMBOL_5            | 5th custom symbol
CUSTOM_SYMBOL_6            | 6th custom symbol
CUSTOM_SYMBOL_7            | 7th custom symbol
CUSTOM_SYMBOL_8            | 8th custom symbol

Keys for custom symbols.

#### `enum `[`aip31068_text_insertion_mode_t`](#group__drivers__aip31068_1ga1b7e22ce7418fb1edced6e3ff64ec9dc) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LEFT_TO_RIGHT            | Insert text from left to right.
RIGHT_TO_LEFT            | Insert text from right to left.

Defines the direction of the text insertion.

Starting from the cursor, either increment the column of the cursor position after insertion (LEFT_TO_RIGHT), or decrement the current column of the cursor position after insertion (RIGHT_TO_LEFT).

#### `enum `[`aip31068_font_size_t`](#group__drivers__aip31068_1ga66a355bf58387e7af2e5b662834f5d5f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
FONT_SIZE_5x8            | Single character has 5x8 pixels.
FONT_SIZE_5x10            | Single character has 5x10 pixels.

Size of a character of the display in dots/pixels.

#### `enum `[`aip31068_bit_mode_t`](#group__drivers__aip31068_1ga5a6afd8a2289f5454fb3fb8addb7359b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BITMODE_4_BIT            | Use 4 bit mode.
BITMODE_8_BIT            | Use 8 bit mode.

Bit mode for the display.

#### `public int `[`aip31068_init`](#group__drivers__aip31068_1ga0bb284a2553013d7eac25ff27516f684)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,const `[`aip31068_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__params__t)` * params)` 

Initialization.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `params` Parameters for device initialization

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_turn_on`](#group__drivers__aip31068_1ga86506273b2d25ff8e90bfac1b33e621e)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Turn on the display.

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_turn_off`](#group__drivers__aip31068_1ga0cdd250880324a0200fbe5ba7e456982)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Turn off the display.

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_clear`](#group__drivers__aip31068_1ga07cb5e97b06e4e45dfc8e341a7720db3)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Clear the display and set the cursor to position (0, 0).

: Also changes to setTextInsertionMode(LEFT_TO_RIGHT)

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_return_home`](#group__drivers__aip31068_1gafe3c19848fa599295cd5e1c77ec6df09)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Reset cursor position to (0, 0) and scroll display to original position.

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_set_auto_scroll_enabled`](#group__drivers__aip31068_1ga9255df345ad27b872a6435e3c0a743cd)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,bool enabled)` 

Enable or disable automated scrolling.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `enabled` Enable or disable

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_set_cursor_blinking_enabled`](#group__drivers__aip31068_1gaeb74f1516812023cbbf9af5ccfd07d71)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,bool enabled)` 

Enable or disable cursor blinking.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `enabled` Enable or disable

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_set_cursor_visible`](#group__drivers__aip31068_1ga37378419792495a2e281578159966eb5)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,bool visible)` 

Show or hide the cursor.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `visible` Show or hide

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_set_cursor_position`](#group__drivers__aip31068_1ga935403417623e4e5188656723c4f0614)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,uint8_t row,uint8_t col)` 

Move the cursor to a given position.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `row` Row of the new cursor position (starting at 0) 

* `col` Column of the new cursor position (starting at 0)

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_set_text_insertion_mode`](#group__drivers__aip31068_1gafd2ef2b92b13f975751df9f6423dd648)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,`[`aip31068_text_insertion_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga1b7e22ce7418fb1edced6e3ff64ec9dc)` mode)` 

Set the direction from which the text is inserted, starting from the cursor.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `mode` Insertion mode

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_move_cursor_left`](#group__drivers__aip31068_1ga31dd56fef68593d8c1a6093837d20ab0)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Move the cursor one unit to the left.

When the cursor passes the 40th character of the first line and a second line is available, the cursor will move to the second line.

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_move_cursor_right`](#group__drivers__aip31068_1ga1c8a4d7aea4c069127c23129e6a6e53f)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Move the cursor one unit to the right.

When the cursor passes the 40th character of the first line and a second line is available, the cursor will move to the second line.

: The cursor respects the setting for the insertion mode and is set to (1, 0) for LEFT_TO_RIGHT and to (1, COL_MAX) for RIGHT_TO_LEFT.

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_scroll_display_left`](#group__drivers__aip31068_1gaddb890810b78d0eb228943d2d917b836)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Scroll the entire display content (all lines) one unit to the left.

: The cursor respects the setting for the insertion mode and is set to (1, 0) for LEFT_TO_RIGHT and to (1, COL_MAX) for RIGHT_TO_LEFT.

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_scroll_display_right`](#group__drivers__aip31068_1gac84265fffcf6e20ec2b5f7141408be19)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev)` 

Scroll the entire display content (all lines) one unit to the right.

#### Parameters
* `dev` Device descriptor of the AIP31068

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_set_custom_symbol`](#group__drivers__aip31068_1gad87a20c27db3686950f3a0e6c1c4eb5f)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,`[`aip31068_custom_symbol_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga38a9a645f2c3dd1d4fe5663acafb2d2d)` customSymbol,const uint8_t charmap)` 

Create a custom symbol.

Useful link: [https://maxpromer.github.io/LCD-Character-Creator/](https://maxpromer.github.io/LCD-Character-Creator/)

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `customSymbol` Key to which a custom symbol should be assigned 

* `charmap` Bitmap definition of the custom symbol

: The size of charmap depends on how the AIP31068 was initialized. 8 bytes for FONT_SIZE_5x8 and 10 bytes for FONT_SIZE_5x10.

This function resets the cursor position. Therefore this function should be called before printing any characters to the display.

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_print_custom_symbol`](#group__drivers__aip31068_1ga1da86a97530229fe1c78c44fbc21351b)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,`[`aip31068_custom_symbol_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga38a9a645f2c3dd1d4fe5663acafb2d2d)` customSymbol)` 

Print a custom symbol by key reference.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `customSymbol` Key of the custom symbol to be printed

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_print`](#group__drivers__aip31068_1ga32f5d0935aa9158dad27a0041094b8d5)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,const char * data)` 

Print a string.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `data` String to be printed (null-terminated)

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

#### `public int `[`aip31068_print_char`](#group__drivers__aip31068_1ga57682bb6db9de72ad7671a6e11c57431)`(`[`aip31068_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__t)` * dev,char c)` 

Print a single character.

#### Parameters
* `dev` Device descriptor of the AIP31068 

* `c` Character to be printed

#### Parameters
* `0` on success 

* `-1` if acquiring of I2C bus fails 

* `-EIO` When slave device doesn't ACK the byte 

* `-ENXIO` When no devices respond on the address sent on the bus 

* `-ETIMEDOUT` When timeout occurs before device's response 

* `-EINVAL` When an invalid argument is given 

* `-EOPNOTSUPP` When MCU driver doesn't support the flag operation 

* `-EAGAIN` When a lost bus arbitration occurs

# struct `aip31068_params_t` 

AIP31068 device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structaip31068__params__t_1a8ffda6272cfdcb974f685bde601ef8a3) | I2C device.
`public uint16_t `[`i2c_addr`](#structaip31068__params__t_1ab9201dd53d5660e3747b84f7e1e487b7) | I2C address of device.
`public uint8_t `[`row_count`](#structaip31068__params__t_1ade4d07b61c7106c3ebddd4cf9cf6ab4b) | Number of rows.
`public uint8_t `[`col_count`](#structaip31068__params__t_1a47c605c3b95fd9f50e7f38c6e26ebee1) | Number of columns.
`public `[`aip31068_font_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga66a355bf58387e7af2e5b662834f5d5f)` `[`font_size`](#structaip31068__params__t_1a66854af039ee77fddfeed789c6cc5cba) | Font size.
`public `[`aip31068_bit_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga5a6afd8a2289f5454fb3fb8addb7359b)` `[`bit_mode`](#structaip31068__params__t_1a6eb6fef8e7fe5b31e5c1e2bddfce0821) | Bit mode.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structaip31068__params__t_1a8ffda6272cfdcb974f685bde601ef8a3) 

I2C device.

#### `public uint16_t `[`i2c_addr`](#structaip31068__params__t_1ab9201dd53d5660e3747b84f7e1e487b7) 

I2C address of device.

#### `public uint8_t `[`row_count`](#structaip31068__params__t_1ade4d07b61c7106c3ebddd4cf9cf6ab4b) 

Number of rows.

#### `public uint8_t `[`col_count`](#structaip31068__params__t_1a47c605c3b95fd9f50e7f38c6e26ebee1) 

Number of columns.

#### `public `[`aip31068_font_size_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga66a355bf58387e7af2e5b662834f5d5f)` `[`font_size`](#structaip31068__params__t_1a66854af039ee77fddfeed789c6cc5cba) 

Font size.

#### `public `[`aip31068_bit_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__aip31068_1ga5a6afd8a2289f5454fb3fb8addb7359b)` `[`bit_mode`](#structaip31068__params__t_1a6eb6fef8e7fe5b31e5c1e2bddfce0821) 

Bit mode.

# struct `aip31068_t` 

AIP31068 PWM device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`aip31068_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__params__t)` `[`params`](#structaip31068__t_1af413221d80ae2c483bff45e50d17a187) | Device initialization parameters.
`public uint8_t `[`_curr_display_control`](#structaip31068__t_1aedf605a24a015a8b8f0c4c5190a16f27) | Current value of DISPLAY_CONTROL.
`public uint8_t `[`_curr_entry_mode_set`](#structaip31068__t_1a98316e22b1d1945fafc6114e29459d6a) | Current value of ENTRY_MODE_SET.

## Members

#### `public `[`aip31068_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_aip31068.md#structaip31068__params__t)` `[`params`](#structaip31068__t_1af413221d80ae2c483bff45e50d17a187) 

Device initialization parameters.

#### `public uint8_t `[`_curr_display_control`](#structaip31068__t_1aedf605a24a015a8b8f0c4c5190a16f27) 

Current value of DISPLAY_CONTROL.

#### `public uint8_t `[`_curr_entry_mode_set`](#structaip31068__t_1a98316e22b1d1945fafc6114e29459d6a) 

Current value of ENTRY_MODE_SET.

