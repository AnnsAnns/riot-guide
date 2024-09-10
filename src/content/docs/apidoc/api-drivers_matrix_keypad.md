---
title: api-drivers_matrix_keypad.md
description: api-drivers_matrix_keypad.md
---
# group `drivers_matrix_keypad` 

Matrix keypad driver for row/column keypads.

This module implements a simple matrix keypad driver where keys are connected between GPIO columns and rows. It works best with diodes in series with the switches to prevent key ghosting, but it can be used without these diodes. [CONFIG_MATRIX_KEYPAD_ROWS_USE_OPEN_DRAIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1ga82a04ca5044662858728b189d175fa32) can be enabled when the keypad doesn't use diodes in the switches.

The keypad works by configuring the column GPIOs as input with pull-ups. Each row is configured as open drain with pull-up. One by one the rows are set to pull their output low. For each row the column GPIOs are read and the state is checked. When a key is pressed the column GPIO of that switch will read low as soon as the row it is on is pulled low.

The debouncing algorithm is a pattern style debounce where the switch must be in one position for a number of samples, then a set of "don't care" samples and then in the other position for a number of samples. The samples in the middle allow for a period where the switch can be either low or high without affecting the transition. The exact pattern is determined by [CONFIG_MATRIX_KEYPAD_DEBOUNCE_PATTERN_BEGIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1gaa80d44d3763dd8a85cb967ba068cf9f3) and [CONFIG_MATRIX_KEYPAD_DEBOUNCE_PATTERN_END](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1gad309c53ba7a9448a298d87ba420f73dc). These are used as mask where the switch must be in a determined state. The bits where neither pattern is set is used as the "don't care" set of samples.

A full scan of the matrix keypad is done via the [matrix_keypad_scan](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1gac6ca1b06c03bc385b2d0430a1dfdf49e) function. This function iterates over all rows and columns to update the stored history of every pin.

When a state change is detected on a switch, the [matrix_keypad_cb_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1ga5feba9dc3d19cfcddc5b7191f8ad9008) callback is called with the row and column number together with the new state of the switch (pressed or not pressed).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_MATRIX_KEYPAD_NUM_ROWS`](#group__drivers__matrix__keypad_1gababd1b99c2dcbcf7a33116bf7dcd7e8b)            | Maximum number of rows.
`define `[`CONFIG_MATRIX_KEYPAD_NUM_COLUMNS`](#group__drivers__matrix__keypad_1gaf5967420f77fd25b02f139b8c5979f2b)            | Maximum number of columns.
`define `[`CONFIG_MATRIX_KEYPAD_DEBOUNCE_PATTERN_BEGIN`](#group__drivers__matrix__keypad_1gaa80d44d3763dd8a85cb967ba068cf9f3)            | Debounce pattern high to low bits.
`define `[`CONFIG_MATRIX_KEYPAD_DEBOUNCE_PATTERN_END`](#group__drivers__matrix__keypad_1gad309c53ba7a9448a298d87ba420f73dc)            | Debounce pattern low to high bits.
`define `[`CONFIG_MATRIX_KEYPAD_ROWS_USE_OPEN_DRAIN`](#group__drivers__matrix__keypad_1ga82a04ca5044662858728b189d175fa32)            | Use open drain GPIO mode.
`define `[`MATRIX_KEYPAD_ROWS_GPIO_MODE`](#group__drivers__matrix__keypad_1gaa200a961debfdcfe7d6889127129530b)            | GPIO mode used for the row GPIOs.
`define `[`MATRIX_KEYPAD_DEBOUNCE_MASK`](#group__drivers__matrix__keypad_1ga783555adfb1fb2680610ca6cc63234dc)            | Debounce pattern mask.
`public int `[`matrix_keypad_init`](#group__drivers__matrix__keypad_1gad5541860cf1318cb91dee462d64f4590)`(`[`matrix_keypad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__t)` * dev,const `[`matrix_keypad_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__params__t)` * params,`[`matrix_keypad_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1ga5feba9dc3d19cfcddc5b7191f8ad9008)` callback,void * arg)`            | Initialize the given device.
`public size_t `[`matrix_keypad_scan`](#group__drivers__matrix__keypad_1gac6ca1b06c03bc385b2d0430a1dfdf49e)`(`[`matrix_keypad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__t)` * dev)`            | Scan through the keypad matrix.
`struct `[`matrix_keypad_params_t`](#structmatrix__keypad__params__t) | Device initialization parameters.
`struct `[`matrix_keypad_t`](#structmatrix__keypad__t) | Device descriptor for the driver.

## Members

#### `define `[`CONFIG_MATRIX_KEYPAD_NUM_ROWS`](#group__drivers__matrix__keypad_1gababd1b99c2dcbcf7a33116bf7dcd7e8b) 

Maximum number of rows.

#### `define `[`CONFIG_MATRIX_KEYPAD_NUM_COLUMNS`](#group__drivers__matrix__keypad_1gaf5967420f77fd25b02f139b8c5979f2b) 

Maximum number of columns.

#### `define `[`CONFIG_MATRIX_KEYPAD_DEBOUNCE_PATTERN_BEGIN`](#group__drivers__matrix__keypad_1gaa80d44d3763dd8a85cb967ba068cf9f3) 

Debounce pattern high to low bits.

This pattern should consist of bits set on the most significant bits of the value. The number of bits set determines the number of scans the key must be in the current state before a change is processed.

#### `define `[`CONFIG_MATRIX_KEYPAD_DEBOUNCE_PATTERN_END`](#group__drivers__matrix__keypad_1gad309c53ba7a9448a298d87ba420f73dc) 

Debounce pattern low to high bits.

This pattern should consist of bits set on the least significant bits of the value. The number of bits set determines the number of scans the key must be in the next state before a change is processed.

#### `define `[`CONFIG_MATRIX_KEYPAD_ROWS_USE_OPEN_DRAIN`](#group__drivers__matrix__keypad_1ga82a04ca5044662858728b189d175fa32) 

Use open drain GPIO mode.

#### `define `[`MATRIX_KEYPAD_ROWS_GPIO_MODE`](#group__drivers__matrix__keypad_1gaa200a961debfdcfe7d6889127129530b) 

GPIO mode used for the row GPIOs.

#### `define `[`MATRIX_KEYPAD_DEBOUNCE_MASK`](#group__drivers__matrix__keypad_1ga783555adfb1fb2680610ca6cc63234dc) 

Debounce pattern mask.

#### `public int `[`matrix_keypad_init`](#group__drivers__matrix__keypad_1gad5541860cf1318cb91dee462d64f4590)`(`[`matrix_keypad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__t)` * dev,const `[`matrix_keypad_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__params__t)` * params,`[`matrix_keypad_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1ga5feba9dc3d19cfcddc5b7191f8ad9008)` callback,void * arg)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver 

* `params` Initialization parameters 

* `callback` Callback to call on state changes 

* `arg` Context argument for the callback

#### Returns
0 on success

#### `public size_t `[`matrix_keypad_scan`](#group__drivers__matrix__keypad_1gac6ca1b06c03bc385b2d0430a1dfdf49e)`(`[`matrix_keypad_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__t)` * dev)` 

Scan through the keypad matrix.

This updates the state of the device descriptor, calling [matrix_keypad_cb_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1ga5feba9dc3d19cfcddc5b7191f8ad9008) when a key press or release has been detected

#### Parameters
* `dev` Device descriptor of the driver

#### Returns
Number of keys that changed state

# struct `matrix_keypad_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rows`](#structmatrix__keypad__params__t_1a30b9f76cd9bfc2a8e47df17a1e6b54a0) | GPIO pin array for the rows.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`columns`](#structmatrix__keypad__params__t_1a77ebc5cc69cfcb957902730d92d28c0c) | GPIO pin array for the columns.
`public uint32_t `[`row2col_delay`](#structmatrix__keypad__params__t_1ae2a3b8165332d7c8db60e213f565ad0f) | Delay in microseconds between configuring the row gpio and reading out the column.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rows`](#structmatrix__keypad__params__t_1a30b9f76cd9bfc2a8e47df17a1e6b54a0) 

GPIO pin array for the rows.

GPIO_UNDEF is allowed and scanning is skipped for these.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`columns`](#structmatrix__keypad__params__t_1a77ebc5cc69cfcb957902730d92d28c0c) 

GPIO pin array for the columns.

GPIO_UNDEF is allowed and scanning is skipped for these.

#### `public uint32_t `[`row2col_delay`](#structmatrix__keypad__params__t_1ae2a3b8165332d7c8db60e213f565ad0f) 

Delay in microseconds between configuring the row gpio and reading out the column.

Can be zero to skip the delay.

# struct `matrix_keypad_t` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`matrix_keypad_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__params__t)` * `[`params`](#structmatrix__keypad__t_1af5bae906923d77e2e08d9f3e6a66ec69) | Device initialization parameters.
`public uint8_t `[`debounce`](#structmatrix__keypad__t_1a6df1777f88cb5f6caa617e89c58afef4) | Debounce history.
`public `[`matrix_keypad_state_row_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1gab4a96502cc17f4a2d355273188f15492)` `[`state`](#structmatrix__keypad__t_1a29daa3d6d0e9ee2006efdff79e0773e0) | Current button state.
`public void * `[`arg`](#structmatrix__keypad__t_1af4cc59269d3a51c943d52aea51ee54be) | callback context
`public `[`matrix_keypad_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1ga5feba9dc3d19cfcddc5b7191f8ad9008)` `[`callback`](#structmatrix__keypad__t_1a5fa05b50d3d5f472c98b73e7c79ef162) | Callback called when a key changes state.

## Members

#### `public const `[`matrix_keypad_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_matrix_keypad.md#structmatrix__keypad__params__t)` * `[`params`](#structmatrix__keypad__t_1af5bae906923d77e2e08d9f3e6a66ec69) 

Device initialization parameters.

#### `public uint8_t `[`debounce`](#structmatrix__keypad__t_1a6df1777f88cb5f6caa617e89c58afef4) 

Debounce history.

#### `public `[`matrix_keypad_state_row_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1gab4a96502cc17f4a2d355273188f15492)` `[`state`](#structmatrix__keypad__t_1a29daa3d6d0e9ee2006efdff79e0773e0) 

Current button state.

#### `public void * `[`arg`](#structmatrix__keypad__t_1af4cc59269d3a51c943d52aea51ee54be) 

callback context

#### `public `[`matrix_keypad_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__matrix__keypad_1ga5feba9dc3d19cfcddc5b7191f8ad9008)` `[`callback`](#structmatrix__keypad__t_1a5fa05b50d3d5f472c98b73e7c79ef162) 

Callback called when a key changes state.

