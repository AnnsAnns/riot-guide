---
title: api-sys_mineplex.md
description: api-sys_mineplex.md
---
# group `sys_mineplex` 

The Mineplex font for containing 5x5 pixel ASCII characters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MINEPLEX_CHAR_W`](#group__sys__mineplex_1ga9a504bba7a45a9fe04350c4bce49ec70)            | The width of a single character in pixel.
`define `[`MINEPLEX_CHAR_H`](#group__sys__mineplex_1ga46678994514ed9f7a46ad80b38ceb2b9)            | The height of a single character in pixel.
`public const uint8_t * `[`mineplex_char`](#group__sys__mineplex_1ga9090cc31846fe655eb10e157d573641a)`(char c)`            | Get the Mineplex representation of a given ASCII character.

## Members

#### `define `[`MINEPLEX_CHAR_W`](#group__sys__mineplex_1ga9a504bba7a45a9fe04350c4bce49ec70) 

The width of a single character in pixel.

#### `define `[`MINEPLEX_CHAR_H`](#group__sys__mineplex_1ga46678994514ed9f7a46ad80b38ceb2b9) 

The height of a single character in pixel.

#### `public const uint8_t * `[`mineplex_char`](#group__sys__mineplex_1ga9090cc31846fe655eb10e157d573641a)`(char c)` 

Get the Mineplex representation of a given ASCII character.

The function returns the pointer to a 5 byte pointer containing the Mineplex representation of the given ASCII character. The Mineplex character is encoded row wise from top to bottom using the least significant 5 bit, where byte 1, bit 1 is the top left pixel of the encoded character.

#### Parameters
* `c` character to translate

#### Returns
a 5 byte big buffer containing the encoded Mineplex character

