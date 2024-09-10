---
title: api-gpio_util.md
description: api-gpio_util.md
---
# group `gpio_util` 

GPIO I/O utility functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`gpio_util_shiftin`](#group__gpio__util_1gaba1b5d1f8287448e3a2a9230aa51487c)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` data_pin,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` clock_pin)`            | Shift in a byte from data_pin, create clock pulses on clock_pin.

## Members

#### `public uint8_t `[`gpio_util_shiftin`](#group__gpio__util_1gaba1b5d1f8287448e3a2a9230aa51487c)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` data_pin,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` clock_pin)` 

Shift in a byte from data_pin, create clock pulses on clock_pin.

This function has the same functionality as the Arduino shiftIn() in Advanced I/O.

#### Parameters
* `data_pin` Pin to read data from 

* `clock_pin` Pin to create clock pulses on 

#### Returns
the resulting uint8_t of the shift (MSB first)

