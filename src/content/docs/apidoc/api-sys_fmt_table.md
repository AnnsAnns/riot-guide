---
title: api-sys_fmt_table.md
description: api-sys_fmt_table.md
---
# group `sys_fmt_table` 

Provides utilities to print tables.

The print functions in this library do not buffer any output. Mixing calls to standard `printf` from [stdio.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#stdio_8h) with the `print_xxx` functions in fmt, especially on the same output line, may cause garbled output.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`print_col_u32_dec`](#group__sys__fmt__table_1gadde7d2fa3c76c456e10372ef31dd2781)`(uint32_t number,size_t width)`            | Print a table column with the given number as decimal.
`public void `[`print_col_s32_dec`](#group__sys__fmt__table_1ga8fa8a7dabb9a5b8c4b26532706ce3120)`(int32_t number,size_t width)`            | Print a table column with the given number as decimal.

## Members

#### `public void `[`print_col_u32_dec`](#group__sys__fmt__table_1gadde7d2fa3c76c456e10372ef31dd2781)`(uint32_t number,size_t width)` 

Print a table column with the given number as decimal.

#### Parameters
* `number` Number to print in the column 

* `width` Width of the column

#### `public void `[`print_col_s32_dec`](#group__sys__fmt__table_1ga8fa8a7dabb9a5b8c4b26532706ce3120)`(int32_t number,size_t width)` 

Print a table column with the given number as decimal.

#### Parameters
* `number` Number to print in the column 

* `width` Width of the column

