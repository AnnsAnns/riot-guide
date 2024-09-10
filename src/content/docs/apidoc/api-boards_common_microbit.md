---
title: api-boards_common_microbit.md
description: api-boards_common_microbit.md
---
# group `boards_common_microbit` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MICROBIT_MATRIX_ROWS`](#group__boards__common__microbit_1gac430c88aa2fd60e29e6b4cf0f80cefe9)            | Number of rows of the LED matrix.
`define `[`MICROBIT_MATRIX_COLS`](#group__boards__common__microbit_1ga02050bd3fa1647a63b972dc850b36026)            | Number of columns of the LED matrix.
`public void `[`microbit_matrix_init`](#group__boards__common__microbit_1ga1b4b6a92681a9249dbabc92c5f731363)`(void)`            | Initialize the micro:bit's LED matrix.
`public void `[`microbit_matrix_on`](#group__boards__common__microbit_1ga3e3123ba53bb98125127c302ff576fff)`(uint8_t row,uint8_t col)`            | Turn on a single LED in the LED matrix.
`public void `[`microbit_matrix_off`](#group__boards__common__microbit_1gadb47733cd38c80dc9ca9dc88dc8e5699)`(uint8_t row,uint8_t col)`            | Turn off a single LED in the LED matrix.
`public void `[`microbit_matrix_set_raw`](#group__boards__common__microbit_1ga1a5f7efca7f42bbe05b3d80b37bb003b)`(const uint8_t * buf)`            | Write the given 'image' to the LED matrix.
`public void `[`microbit_matrix_set_char`](#group__boards__common__microbit_1ga1acdd96edd24a3337569130214e71ccb)`(char c)`            | Write the given character to the matrix, using the Mineplex font.
`public void `[`microbit_matrix_shift_str`](#group__boards__common__microbit_1ga2c252ba9bfbd4e153b21e1a2282456a4)`(const char * str,uint32_t delay)`            | Shift the given string through the LED matrix.

## Members

#### `define `[`MICROBIT_MATRIX_ROWS`](#group__boards__common__microbit_1gac430c88aa2fd60e29e6b4cf0f80cefe9) 

Number of rows of the LED matrix.

#### `define `[`MICROBIT_MATRIX_COLS`](#group__boards__common__microbit_1ga02050bd3fa1647a63b972dc850b36026) 

Number of columns of the LED matrix.

#### `public void `[`microbit_matrix_init`](#group__boards__common__microbit_1ga1b4b6a92681a9249dbabc92c5f731363)`(void)` 

Initialize the micro:bit's LED matrix.

#### `public void `[`microbit_matrix_on`](#group__boards__common__microbit_1ga3e3123ba53bb98125127c302ff576fff)`(uint8_t row,uint8_t col)` 

Turn on a single LED in the LED matrix.

#### Parameters
* `row` row of the LED 

* `col` column of the LED

#### `public void `[`microbit_matrix_off`](#group__boards__common__microbit_1gadb47733cd38c80dc9ca9dc88dc8e5699)`(uint8_t row,uint8_t col)` 

Turn off a single LED in the LED matrix.

#### Parameters
* `row` row of the LED 

* `col` column of the LED

#### `public void `[`microbit_matrix_set_raw`](#group__boards__common__microbit_1ga1a5f7efca7f42bbe05b3d80b37bb003b)`(const uint8_t * buf)` 

Write the given 'image' to the LED matrix.

In the given buffer, each byte represents one LED in the matrix, hence the buffer MUST be at least 25 byte wide. A byte value of `0` turns an LED off, while any other value turns it on.

#### Parameters
* `buf` new data to display, MUST be at least 25 byte

#### `public void `[`microbit_matrix_set_char`](#group__boards__common__microbit_1ga1acdd96edd24a3337569130214e71ccb)`(char c)` 

Write the given character to the matrix, using the Mineplex font.

#### Parameters
* `c` character to display

#### `public void `[`microbit_matrix_shift_str`](#group__boards__common__microbit_1ga2c252ba9bfbd4e153b21e1a2282456a4)`(const char * str,uint32_t delay)` 

Shift the given string through the LED matrix.

#### Parameters
* `str` string do display 

* `delay` delay between each step [in us]

