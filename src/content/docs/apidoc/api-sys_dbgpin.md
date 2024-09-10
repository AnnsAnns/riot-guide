---
title: api-sys_dbgpin.md
description: api-sys_dbgpin.md
---
# group `sys_dbgpin` 

This module does not verify the given pin number, so make sure the pin numbers you use are actually configured!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`dbgpin_set`](#group__sys__dbgpin_1gab00d77c64adddd1f892fc06d7d821d6a)`(unsigned pin)`            | Set the given debug pin to HIGH.
`public inline static void `[`dbgpin_clear`](#group__sys__dbgpin_1gad09160a58520961da6890fb9e7d3a57e)`(unsigned pin)`            | Set the given debug pin to LOW.
`public inline static void `[`dbgpin_toggle`](#group__sys__dbgpin_1gabec06299acf89410f6eff7b9279e98cd)`(unsigned pin)`            | Toggle the given debug pin.
`public inline static void `[`dbgpin_pulse`](#group__sys__dbgpin_1gaf48be959c4c1ac8bcbe462b4615f82a5)`(unsigned pin)`            | Output a pulse on the given debug pin (toggles the pin twice)
`public inline static void `[`dbgpin_signal`](#group__sys__dbgpin_1ga488f9f4ca94e015e53865e49ea5ca8cf)`(unsigned pin,unsigned num)`            | Output a specified number of pulses on the given debug pin.
`public inline static size_t `[`dbgpin_count`](#group__sys__dbgpin_1ga7f623ac53492b9f9d3bf9ecc73cc38c1)`(void)`            | Get the number of configured debug pins.
`public inline static void `[`dbgpin_init`](#group__sys__dbgpin_1ga26f87c0ee9f3155e0f44e2e6b26d4e66)`(void)`            | Initialize the configured input pins.

## Members

#### `public inline static void `[`dbgpin_set`](#group__sys__dbgpin_1gab00d77c64adddd1f892fc06d7d821d6a)`(unsigned pin)` 

Set the given debug pin to HIGH.

#### Parameters
* `pin` pin to set, pin number is offset to the list of defined debug pins in DBGPIN_PINS

#### `public inline static void `[`dbgpin_clear`](#group__sys__dbgpin_1gad09160a58520961da6890fb9e7d3a57e)`(unsigned pin)` 

Set the given debug pin to LOW.

#### Parameters
* `pin` pin to set, pin number is offset to the list of defined debug pins in DBGPIN_PINS

#### `public inline static void `[`dbgpin_toggle`](#group__sys__dbgpin_1gabec06299acf89410f6eff7b9279e98cd)`(unsigned pin)` 

Toggle the given debug pin.

#### Parameters
* `pin` pin to set, pin number is offset to the list of defined debug pins in DBGPIN_PINS

#### `public inline static void `[`dbgpin_pulse`](#group__sys__dbgpin_1gaf48be959c4c1ac8bcbe462b4615f82a5)`(unsigned pin)` 

Output a pulse on the given debug pin (toggles the pin twice)

#### Parameters
* `pin` pin to set, pin number is offset to the list of defined debug pins in DBGPIN_PINS

#### `public inline static void `[`dbgpin_signal`](#group__sys__dbgpin_1ga488f9f4ca94e015e53865e49ea5ca8cf)`(unsigned pin,unsigned num)` 

Output a specified number of pulses on the given debug pin.

#### Parameters
* `pin` pin to set, pin number is offset to the list of defined debug pins in DBGPIN_PINS 

* `num` number of pulses to output

#### `public inline static size_t `[`dbgpin_count`](#group__sys__dbgpin_1ga7f623ac53492b9f9d3bf9ecc73cc38c1)`(void)` 

Get the number of configured debug pins.

#### Returns
number of configured debug pins

#### `public inline static void `[`dbgpin_init`](#group__sys__dbgpin_1ga26f87c0ee9f3155e0f44e2e6b26d4e66)`(void)` 

Initialize the configured input pins.

