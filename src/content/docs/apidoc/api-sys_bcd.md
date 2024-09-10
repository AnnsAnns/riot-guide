---
title: api-sys_bcd.md
description: api-sys_bcd.md
---
# group `sys_bcd` 

Library to de- and encode binary coded decimals.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static uint8_t `[`bcd_from_byte`](#group__sys__bcd_1gab45d652e5be4ad8abde042a9f3d65820)`(uint8_t byte)`            | Converts a byte to a binary coded decimal.
`public inline static uint8_t `[`bcd_to_byte`](#group__sys__bcd_1ga6657ea853241538780eca8dbafc60f75)`(uint8_t bcd)`            | Converts a binary coded decimal to a byte.

## Members

#### `public inline static uint8_t `[`bcd_from_byte`](#group__sys__bcd_1gab45d652e5be4ad8abde042a9f3d65820)`(uint8_t byte)` 

Converts a byte to a binary coded decimal.

#### Parameters
* `byte` A byte

#### Returns
A binary coded decimal (4 MSB = 10s, 4 LSB = 1s)

#### `public inline static uint8_t `[`bcd_to_byte`](#group__sys__bcd_1ga6657ea853241538780eca8dbafc60f75)`(uint8_t bcd)` 

Converts a binary coded decimal to a byte.

#### Parameters
* `bcd` A binary coded decimal (4 MSB = 10, 4 LSB = 1s)

#### Returns
A byte

