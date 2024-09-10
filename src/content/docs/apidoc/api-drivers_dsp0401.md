---
title: api-drivers_dsp0401.md
description: api-drivers_dsp0401.md
---
# group `drivers_dsp0401` 

Device driver interface for the DSP0401 alphanumeric display.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@173`](#group__drivers__dsp0401_1ga49b1d57ca8b026018a74c3dcb2779740)            | Return codes.
`public int `[`dsp0401_init`](#group__drivers__dsp0401_1ga69ee34c305f8c5634ccfc1130a7ace75)`(`[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev,const `[`dsp0401_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__params__t)` * params)`            | Initialize the given DSP0401.
`public void `[`dsp0401_display_text`](#group__drivers__dsp0401_1ga9e97afd5a80e6d05427b661767ceef7f)`(const `[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev,char * text)`            | Display the given text on the DSP0401.
`public void `[`dsp0401_clear_text`](#group__drivers__dsp0401_1ga0d7ccf114c7922b08383118c7b0452cd)`(const `[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev)`            | Clear the text displayed on the DSP0401.
`public void `[`dsp0401_scroll_text`](#group__drivers__dsp0401_1ga5a25df9c662f329d2c039b59c3d5244c)`(const `[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev,char * text,uint16_t delay)`            | Scroll the given text on the DSP0401.
`struct `[`dsp0401_params_t`](#structdsp0401__params__t) | Device initialization parameters.
`struct `[`dsp0401_t`](#structdsp0401__t) | Device descriptor for the DSP0401.

## Members

#### `enum `[`@173`](#group__drivers__dsp0401_1ga49b1d57ca8b026018a74c3dcb2779740) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DSP0401_OK            | All ok.
DSP0401_ERR_CLK_GPIO            | Something went wrong with CLK GPIO.
DSP0401_ERR_SDI_GPIO            | Something went wrong with SDI GPIO.
DSP0401_ERR_LAT_GPIO            | Something went wrong with LAT GPIO.
DSP0401_ERR_PWM            | Something went wrong with PWM.

Return codes.

#### `public int `[`dsp0401_init`](#group__drivers__dsp0401_1ga69ee34c305f8c5634ccfc1130a7ace75)`(`[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev,const `[`dsp0401_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__params__t)` * params)` 

Initialize the given DSP0401.

#### Parameters
* `dev` Initialized device descriptor of DSP0401 device 

* `params` Device parameters to use

#### Returns
DSP0401_OK if everything is good 

#### Returns
-DSP0401_ERR_CLK_GPIO if an error occurred during CLK GPIO initialization 

#### Returns
-DSP0401_ERR_SDI_GPIO if an error occurred during SDI GPIO initialization 

#### Returns
-DSP0401_ERR_LAT_GPIO if an error occurred during LAT GPIO initialization 

#### Returns
-DSP0401_ERR_PWM if an error occurred during PWM initialization

#### `public void `[`dsp0401_display_text`](#group__drivers__dsp0401_1ga9e97afd5a80e6d05427b661767ceef7f)`(const `[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev,char * text)` 

Display the given text on the DSP0401.

#### Parameters
* `dev` Device descriptor of the DSP0401 device 

* `text` The text to display

#### `public void `[`dsp0401_clear_text`](#group__drivers__dsp0401_1ga0d7ccf114c7922b08383118c7b0452cd)`(const `[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev)` 

Clear the text displayed on the DSP0401.

#### Parameters
* `dev` Device descriptor of the DSP0401 device

#### `public void `[`dsp0401_scroll_text`](#group__drivers__dsp0401_1ga5a25df9c662f329d2c039b59c3d5244c)`(const `[`dsp0401_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__t)` * dev,char * text,uint16_t delay)` 

Scroll the given text on the DSP0401.

#### Parameters
* `dev` Device descriptor of the DSP0401 device 

* `text` The text to scroll on the display 

* `delay` Delay in ms between each horizontal move

# struct `dsp0401_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sdi`](#structdsp0401__params__t_1aa8898f061e76c2801cc788e44090b196) | Data input pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structdsp0401__params__t_1a77d51987f0c4394debb4f3e5cf958718) | Clock pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`lat`](#structdsp0401__params__t_1a48ccf290869d8e9d6d390989ff2e4da7) | Latch pin.
`public `[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` `[`pwm`](#structdsp0401__params__t_1a5f3fe204db7c5cd8d88a15b66dd20c3a) | PWM device.
`public uint8_t `[`pwm_channel`](#structdsp0401__params__t_1a1179f8b1681a1c3ef18e01192e093d29) | PWM device channel.
`public uint8_t `[`brightness`](#structdsp0401__params__t_1adb783f7a8c78aa9dd16700f7a352c54d) | LED brightness.
`public uint8_t `[`module_count`](#structdsp0401__params__t_1a82411ebf85eb4e4cbc22a472a24ad14b) | Number of connected modules.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sdi`](#structdsp0401__params__t_1aa8898f061e76c2801cc788e44090b196) 

Data input pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structdsp0401__params__t_1a77d51987f0c4394debb4f3e5cf958718) 

Clock pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`lat`](#structdsp0401__params__t_1a48ccf290869d8e9d6d390989ff2e4da7) 

Latch pin.

#### `public `[`pwm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gab937c6061314ac13efc7d18ffc9b436d)` `[`pwm`](#structdsp0401__params__t_1a5f3fe204db7c5cd8d88a15b66dd20c3a) 

PWM device.

#### `public uint8_t `[`pwm_channel`](#structdsp0401__params__t_1a1179f8b1681a1c3ef18e01192e093d29) 

PWM device channel.

#### `public uint8_t `[`brightness`](#structdsp0401__params__t_1adb783f7a8c78aa9dd16700f7a352c54d) 

LED brightness.

#### `public uint8_t `[`module_count`](#structdsp0401__params__t_1a82411ebf85eb4e4cbc22a472a24ad14b) 

Number of connected modules.

# struct `dsp0401_t` 

Device descriptor for the DSP0401.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`dsp0401_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__params__t)` `[`params`](#structdsp0401__t_1aadf5d077534101c523fc0e8a493dfe89) | Device parameters.

## Members

#### `public `[`dsp0401_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_dsp0401.md#structdsp0401__params__t)` `[`params`](#structdsp0401__t_1aadf5d077534101c523fc0e8a493dfe89) 

Device parameters.

