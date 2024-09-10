---
title: api-drivers_lpd8808.md
description: api-drivers_lpd8808.md
---
# group `drivers_lpd8808` 

Driver for LPD8808 based LED strips.

LPD8808 based LED strips consist of a number of LEDs driven by LPD8808 chips. In these strips, each LED can be controlled individually. For this, every two LEDs are driven by a LPD8808 chip, which are chained and form a long shift register. To control a certain LED, the target color value needs to be shifted to the LEDs position on the strip.

This driver implementation does not buffer the current values for each LED. It expects the application to take care of this.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`lpd8808_init`](#group__drivers__lpd8808_1ga39cd678b6078a8c3a140323464eced86)`(`[`lpd8808_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lpd8808_1ga3de5c7aae9bbc10bf8a67e6558083eb6)` * dev,const `[`lpd8808_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpd8808.md#structlpd8808__params__t)` * params)`            | Initialize the given LPD8808 based LED strip.
`public void `[`lpd8808_load_rgb`](#group__drivers__lpd8808_1gafe1888e4baa0b4774bfd0cc5fea979b0)`(const `[`lpd8808_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lpd8808_1ga3de5c7aae9bbc10bf8a67e6558083eb6)` * dev,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` vals)`            | Set the color value of each LED on the strip.
`struct `[`lpd8808_params_t`](#structlpd8808__params__t) | Parameters needed for configuration.

## Members

#### `public int `[`lpd8808_init`](#group__drivers__lpd8808_1ga39cd678b6078a8c3a140323464eced86)`(`[`lpd8808_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lpd8808_1ga3de5c7aae9bbc10bf8a67e6558083eb6)` * dev,const `[`lpd8808_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lpd8808.md#structlpd8808__params__t)` * params)` 

Initialize the given LPD8808 based LED strip.

#### Parameters
* `dev` device to initialize 

* `params` parameters used for initialization

#### Returns
0 on success 

#### Returns
<0 on error

#### `public void `[`lpd8808_load_rgb`](#group__drivers__lpd8808_1gafe1888e4baa0b4774bfd0cc5fea979b0)`(const `[`lpd8808_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lpd8808_1ga3de5c7aae9bbc10bf8a67e6558083eb6)` * dev,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` vals)` 

Set the color value of each LED on the strip.

This function sets the color value of each LED on the strip by shifting out the corresponding color values one after the other. The function expects an array of `[color_rgb_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` values of the same length as LEDs on the strip.

#### Parameters
* `dev` device to load color values to 

* `vals` array of color values, MUST be of same length as LEDs on the strip

# struct `lpd8808_params_t` 

Parameters needed for configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`led_cnt`](#structlpd8808__params__t_1a52d172ec59a9d81e10e58c31717a920b) | number of LEDs on the strip
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_clk`](#structlpd8808__params__t_1abd49d25b32d0db67dfd0f59b4465e32a) | pin connected to the strip's clock signal
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_dat`](#structlpd8808__params__t_1ad430b641c418da8e600b7d2486a0fb4d) | pin connected to the strip's data signal

## Members

#### `public int `[`led_cnt`](#structlpd8808__params__t_1a52d172ec59a9d81e10e58c31717a920b) 

number of LEDs on the strip

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_clk`](#structlpd8808__params__t_1abd49d25b32d0db67dfd0f59b4465e32a) 

pin connected to the strip's clock signal

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_dat`](#structlpd8808__params__t_1ad430b641c418da8e600b7d2486a0fb4d) 

pin connected to the strip's data signal

