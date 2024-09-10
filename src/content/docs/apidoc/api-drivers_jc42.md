---
title: api-drivers_jc42.md
description: api-drivers_jc42.md
---
# group `drivers_jc42` 

JC42 compliant temperature sensor driver.

DescriptionThe connection between the MCU and jc42 compliant temperature sensors is based on a I2C-interface. There are multiple jc42 compliant temperature sensors available such as the mcp9804 and the MAX6604. This driver reads the temperature from these sensors. The sensors support a alarm wire, but this is not supported by this driver.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`jc42_init`](#group__drivers__jc42_1ga58e04228cdfd753865bda4f689c9785e)`(`[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,const `[`jc42_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__params__t)` * params)`            | Initialize a jc42 device.
`public int `[`jc42_get_config`](#group__drivers__jc42_1ga53686c1b5a166c972395a598bee34b59)`(const `[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,uint16_t * data)`            | Get content of configuration register.
`public int `[`jc42_set_config`](#group__drivers__jc42_1gade80f8e01f202066151692420d60c28d)`(const `[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,uint16_t data)`            | Set content of configuration register.
`public int `[`jc42_get_temperature`](#group__drivers__jc42_1gaa2e971c679119a6d613100ca66d0c479)`(const `[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,int16_t * temperature)`            | Get measured temperature.
`struct `[`jc42_t`](#structjc42__t) | Device descriptor for a jc42 device.
`struct `[`jc42_params_t`](#structjc42__params__t) | Device initialization parameters.

## Members

#### `public int `[`jc42_init`](#group__drivers__jc42_1ga58e04228cdfd753865bda4f689c9785e)`(`[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,const `[`jc42_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__params__t)` * params)` 

Initialize a jc42 device.

#### Parameters
* `dev` device descriptor 

* `params` jc42 initialization struct

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`jc42_get_config`](#group__drivers__jc42_1ga53686c1b5a166c972395a598bee34b59)`(const `[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,uint16_t * data)` 

Get content of configuration register.

#### Parameters
* `dev` device descriptor 

* `data` buffer where config register will be written to

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`jc42_set_config`](#group__drivers__jc42_1gade80f8e01f202066151692420d60c28d)`(const `[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,uint16_t data)` 

Set content of configuration register.

#### Parameters
* `dev` device descriptor 

* `data` new value for configuration register

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`jc42_get_temperature`](#group__drivers__jc42_1gaa2e971c679119a6d613100ca66d0c479)`(const `[`jc42_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_jc42.md#structjc42__t)` * dev,int16_t * temperature)` 

Get measured temperature.

#### Parameters
* `dev` device descriptor 

* `temperature` uint16_t buffer where temperature will be written to in centi-degree

#### Returns
0 on success 

#### Returns
-1 on error

# struct `jc42_t` 

Device descriptor for a jc42 device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structjc42__t_1aa38f0cd2090565b27c7ab21e9fb73262) | I2C device that sensor is connected to.
`public uint8_t `[`addr`](#structjc42__t_1ab40f15b5d48c1186f43247f7913b4ca0) | I2C address of this particular sensor.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structjc42__t_1aa38f0cd2090565b27c7ab21e9fb73262) 

I2C device that sensor is connected to.

#### `public uint8_t `[`addr`](#structjc42__t_1ab40f15b5d48c1186f43247f7913b4ca0) 

I2C address of this particular sensor.

# struct `jc42_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structjc42__params__t_1a0c038d3a17b04c5484c442b452ed93f3) | I2C device that sensor is connected to.
`public `[`i2c_speed_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a6e6a870f98abb8cffa95373b69fb8243)` `[`speed`](#structjc42__params__t_1ab3a5c039e5b09efcd74e763b5c93341e) | I2C device speed.
`public uint8_t `[`addr`](#structjc42__params__t_1a4c4002d4579bd79aaf2dc9b1a2922e17) | Configured address of the sensor.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structjc42__params__t_1a0c038d3a17b04c5484c442b452ed93f3) 

I2C device that sensor is connected to.

#### `public `[`i2c_speed_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a6e6a870f98abb8cffa95373b69fb8243)` `[`speed`](#structjc42__params__t_1ab3a5c039e5b09efcd74e763b5c93341e) 

I2C device speed.

#### `public uint8_t `[`addr`](#structjc42__params__t_1a4c4002d4579bd79aaf2dc9b1a2922e17) 

Configured address of the sensor.

