---
title: api-drivers_my9221.md
description: api-drivers_my9221.md
---
# group `drivers_my9221` 

Driver for the MY-Semi MY9221 LED controller.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MY9221_LED_MAX`](#group__drivers__my9221_1ga478774b3b74f339605473a37acf06a78)            | Maximum number of distinct LEDs the controller can operate.
`define `[`MY9221_LED_ON`](#group__drivers__my9221_1ga3ccff11699bf1172daec2855ae03dc9c)            | Max brightness value to turn LED full on.
`define `[`MY9221_LED_OFF`](#group__drivers__my9221_1ga3a322703a07e44e62b10a06b2d5548fa)            | Min brightness value to turn LED off.
`public int `[`my9221_init`](#group__drivers__my9221_1ga856a15b40a6d2b07114484a8ca60fd1a)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const `[`my9221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__params__t)` * params)`            | Initialize the given driver.
`public void `[`my9221_set_state`](#group__drivers__my9221_1gaef3d09f01fb47b46fe30a316c5347f80)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const uint8_t * state,uint8_t len)`            | Set device state.
`public void `[`my9221_set_led`](#group__drivers__my9221_1ga68e7c20babf3b5e4a8a1ac9a8a7613dc)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const uint8_t led,const uint8_t alpha)`            | Set brightness of distinct LED.
`public void `[`my9221_toggle_led`](#group__drivers__my9221_1ga041ac8d6ee7409f94dec3e3d23f1d1b1)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const uint8_t led)`            | Toggle a distinct LED.
`struct `[`my9221_params_t`](#structmy9221__params__t) | Parameters needed for device initialization.
`struct `[`my9221_t`](#structmy9221__t) | Device descriptor for MY9221 LED controller.

## Members

#### `define `[`MY9221_LED_MAX`](#group__drivers__my9221_1ga478774b3b74f339605473a37acf06a78) 

Maximum number of distinct LEDs the controller can operate.

#### `define `[`MY9221_LED_ON`](#group__drivers__my9221_1ga3ccff11699bf1172daec2855ae03dc9c) 

Max brightness value to turn LED full on.

#### `define `[`MY9221_LED_OFF`](#group__drivers__my9221_1ga3a322703a07e44e62b10a06b2d5548fa) 

Min brightness value to turn LED off.

#### `public int `[`my9221_init`](#group__drivers__my9221_1ga856a15b40a6d2b07114484a8ca60fd1a)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const `[`my9221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__params__t)` * params)` 

Initialize the given driver.

#### Parameters
* `dev` device descriptor of MY9221 LED controller 

* `params` configuration parameters

#### Returns
0 on success, otherwise error

#### `public void `[`my9221_set_state`](#group__drivers__my9221_1gaef3d09f01fb47b46fe30a316c5347f80)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const uint8_t * state,uint8_t len)` 

Set device state.

If `state` is NULL or `len` is 0, current device state is set otherwise, current state is overwritten by `state`.

#### Parameters
* `dev` device descriptor of MY9221 LED controller 

* `state` new device state array 

* `len` length of state array

#### `public void `[`my9221_set_led`](#group__drivers__my9221_1ga68e7c20babf3b5e4a8a1ac9a8a7613dc)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const uint8_t led,const uint8_t alpha)` 

Set brightness of distinct LED.

#### Parameters
* `dev` device descriptor of MY9221 LED controller 

* `led` led number, start with 0 

* `alpha` brightness level for led

#### `public void `[`my9221_toggle_led`](#group__drivers__my9221_1ga041ac8d6ee7409f94dec3e3d23f1d1b1)`(`[`my9221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__t)` * dev,const uint8_t led)` 

Toggle a distinct LED.

#### Parameters
* `dev` device descriptor of MY9221 LED controller 

* `led` led number, start with 0

# struct `my9221_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`leds`](#structmy9221__params__t_1a2dd610ef72fcc7557e50ca06b5b16445) | number of LEDs
`public uint8_t `[`dir`](#structmy9221__params__t_1aa9cdcfa79ab9ce1df7cc46bfb8718556) | led direction
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structmy9221__params__t_1abbee40058790b3d7265bcd8a3752a3d0) | clock gpio pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dat`](#structmy9221__params__t_1a699e078e66298c31a0a747de1f884edc) | data gpio pin

## Members

#### `public uint8_t `[`leds`](#structmy9221__params__t_1a2dd610ef72fcc7557e50ca06b5b16445) 

number of LEDs

#### `public uint8_t `[`dir`](#structmy9221__params__t_1aa9cdcfa79ab9ce1df7cc46bfb8718556) 

led direction

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structmy9221__params__t_1abbee40058790b3d7265bcd8a3752a3d0) 

clock gpio pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dat`](#structmy9221__params__t_1a699e078e66298c31a0a747de1f884edc) 

data gpio pin

# struct `my9221_t` 

Device descriptor for MY9221 LED controller.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`my9221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__params__t)` `[`params`](#structmy9221__t_1af867b3ff48610483f533f1b62d8ecdd2) | config parameters
`public uint8_t `[`state`](#structmy9221__t_1a4a7a6b0b500789c90d3476c111fdd230) | state of individual leds

## Members

#### `public `[`my9221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_my9221.md#structmy9221__params__t)` `[`params`](#structmy9221__t_1af867b3ff48610483f533f1b62d8ecdd2) 

config parameters

#### `public uint8_t `[`state`](#structmy9221__t_1a4a7a6b0b500789c90d3476c111fdd230) 

state of individual leds

