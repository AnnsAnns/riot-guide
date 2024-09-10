---
title: api-drivers_apa102.md
description: api-drivers_apa102.md
---
# group `drivers_apa102` 

Driver for chained APA102 RGB LEDs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`apa102_init`](#group__drivers__apa102_1gadbdf0b24f8417f501845c6e7877a3dc4)`(`[`apa102_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apa102_1ga1c5de2ffea89e88dea9874556721e97a)` * dev,const `[`apa102_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apa102.md#structapa102__params__t)` * params)`            | Initialize (chained) APA102 LEDs.
`public void `[`apa102_load_rgba`](#group__drivers__apa102_1gad18fbfb568c5a6e903d5d994540c9244)`(const `[`apa102_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apa102_1ga1c5de2ffea89e88dea9874556721e97a)` * dev,const `[`color_rgba_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgba__t)` vals)`            | Apply the given color values to the connected LED(s)
`struct `[`apa102_params_t`](#structapa102__params__t) | Configuration parameters for (chained) APA102 LEDs.

## Members

#### `public void `[`apa102_init`](#group__drivers__apa102_1gadbdf0b24f8417f501845c6e7877a3dc4)`(`[`apa102_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apa102_1ga1c5de2ffea89e88dea9874556721e97a)` * dev,const `[`apa102_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_apa102.md#structapa102__params__t)` * params)` 

Initialize (chained) APA102 LEDs.

#### Parameters
* `dev` device descriptor 

* `params` device configuration

`dev` != NULL 

`params` != NULL

#### `public void `[`apa102_load_rgba`](#group__drivers__apa102_1gad18fbfb568c5a6e903d5d994540c9244)`(const `[`apa102_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__apa102_1ga1c5de2ffea89e88dea9874556721e97a)` * dev,const `[`color_rgba_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgba__t)` vals)` 

Apply the given color values to the connected LED(s)

#### Parameters
* `dev` device descriptor 

* `vals` color values, MUST be of size `dev->led_numof`

`dev` != NULL 

`vals` != NULL

# struct `apa102_params_t` 

Configuration parameters for (chained) APA102 LEDs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`led_numof`](#structapa102__params__t_1a99ed0c2e339160d2dceaa3eb9ca05d4d) | number of chained LEDs
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data_pin`](#structapa102__params__t_1a1942add8420035e326cac00cbb07bb26) | data pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk_pin`](#structapa102__params__t_1a839d4c29fd18597fa6fd46f63e187afb) | clock pin

## Members

#### `public int `[`led_numof`](#structapa102__params__t_1a99ed0c2e339160d2dceaa3eb9ca05d4d) 

number of chained LEDs

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data_pin`](#structapa102__params__t_1a1942add8420035e326cac00cbb07bb26) 

data pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk_pin`](#structapa102__params__t_1a839d4c29fd18597fa6fd46f63e187afb) 

clock pin

