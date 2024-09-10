---
title: api-drivers_gp2y10xx.md
description: api-drivers_gp2y10xx.md
---
# group `drivers_gp2y10xx` 

GP2Y10xx Optical Dust Sensor Converter device driver.

This driver works with GP2Y1010AU0F and GP2Y1014AU0F versions.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

Usage
```cpp
USEMODULE += gp2y10xx
```

The device can be initialized with [gp2y10xx_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__gp2y10xx_1ga8643564118d8832fadfae6a6fa94d3c6) and [gp2y10xx_read_density](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__gp2y10xx_1ga854150a875d7a5700ab44c5aa5cf209b) is used to read the current dust density that the sensor can detect.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_GP2Y10XX_MAX_READINGS`](#group__drivers__gp2y10xx_1ga30f925e88e5dc0c507449aab28dfb02a)            | This configures the maximum number of ADC readings stored to calculate the average ADC value.
`enum `[`@178`](#group__drivers__gp2y10xx_1gabc1a2abf1bf92c4036064143db1c8210)            | Driver error values.
`enum `[`gp2y10xx_level_t`](#group__drivers__gp2y10xx_1gae78eb6ba5c78695a747084dbba8af5d6)            | ILED pin level.
`public int `[`gp2y10xx_init`](#group__drivers__gp2y10xx_1ga8643564118d8832fadfae6a6fa94d3c6)`(`[`gp2y10xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__t)` * dev,const `[`gp2y10xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__params__t)` * params)`            | Initialize an GP2Y10xx device.
`public int `[`gp2y10xx_read_density`](#group__drivers__gp2y10xx_1ga854150a875d7a5700ab44c5aa5cf209b)`(const `[`gp2y10xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__t)` * dev,uint16_t * density)`            | Read a raw ADC value.
`struct `[`gp2y10xx_params_t`](#structgp2y10xx__params__t) | GP2Y10xx device parameters.
`struct `[`gp2y10xx_t`](#structgp2y10xx__t) | GP2Y10xx device descriptor.

## Members

#### `define `[`CONFIG_GP2Y10XX_MAX_READINGS`](#group__drivers__gp2y10xx_1ga30f925e88e5dc0c507449aab28dfb02a) 

This configures the maximum number of ADC readings stored to calculate the average ADC value.

The bigger the number of readings the bigger each device descriptor will be.

#### `enum `[`@178`](#group__drivers__gp2y10xx_1gabc1a2abf1bf92c4036064143db1c8210) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GP2Y10XX_OK            | Everything is ok.
GP2Y10XX_ERR_ADC            | ADC error.
GP2Y10XX_ERR_ILED            | ILED pin error.

Driver error values.

#### `enum `[`gp2y10xx_level_t`](#group__drivers__gp2y10xx_1gae78eb6ba5c78695a747084dbba8af5d6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GP2Y10XX_ILED_LEVEL_HIGH            | Active high.
GP2Y10XX_ILED_LEVEL_LOW            | Active low.

ILED pin level.

This specifies how the ILED pin behaves, if it's on when it's active-low/high. Waveshare breakout board is active-high, that is, that the voltage is 3.3v to turn ILED on (logic 1) and 0v to turn it off (logic 0).

#### `public int `[`gp2y10xx_init`](#group__drivers__gp2y10xx_1ga8643564118d8832fadfae6a6fa94d3c6)`(`[`gp2y10xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__t)` * dev,const `[`gp2y10xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__params__t)` * params)` 

Initialize an GP2Y10xx device.

#### Parameters
* `dev` Device descriptor. 

* `params` Device configuration.

#### Returns
GP2Y10XX_OK on successful initialization. 

#### Returns
GP2Y10XX_ERR_ADC if ADC line initialization failed. 

#### Returns
GP2Y10XX_ERR_ILED if the ILED pin initialization failed.

#### `public int `[`gp2y10xx_read_density`](#group__drivers__gp2y10xx_1ga854150a875d7a5700ab44c5aa5cf209b)`(const `[`gp2y10xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__t)` * dev,uint16_t * density)` 

Read a raw ADC value.

#### Parameters
* `dev` Device descriptor. 

* `density` Dust density value in ug/m3.

#### Returns
GP2Y10XX_OK on successful read. 

#### Returns
Any other value on error.

# struct `gp2y10xx_params_t` 

GP2Y10xx device parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` `[`aout`](#structgp2y10xx__params__t_1aff71554f73fcd6c70b1f6b107e753d26) | ADC line connected to device AOUT pin.
`public `[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` `[`adc_res`](#structgp2y10xx__params__t_1a3883874cdc9c25a82406dda4052229b1) | ADC line resolution.
`public uint16_t `[`vref`](#structgp2y10xx__params__t_1a5826102cc21d27d9f38703cc256d9eae) | Reference voltage used for the VCC supply of the sensor, in mV.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`iled_pin`](#structgp2y10xx__params__t_1aa09ef9e77d7430e547e7c5276824256e) | ILED pin.
`public `[`gp2y10xx_level_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__gp2y10xx_1gae78eb6ba5c78695a747084dbba8af5d6)` `[`iled_level`](#structgp2y10xx__params__t_1a202a6b5e3f990d1f92ab59e804398472) | ILED pin level.

## Members

#### `public `[`adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga77e0c958e3549fef6e4067b2ca678a0b)` `[`aout`](#structgp2y10xx__params__t_1aff71554f73fcd6c70b1f6b107e753d26) 

ADC line connected to device AOUT pin.

#### `public `[`adc_res_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020)` `[`adc_res`](#structgp2y10xx__params__t_1a3883874cdc9c25a82406dda4052229b1) 

ADC line resolution.

#### `public uint16_t `[`vref`](#structgp2y10xx__params__t_1a5826102cc21d27d9f38703cc256d9eae) 

Reference voltage used for the VCC supply of the sensor, in mV.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`iled_pin`](#structgp2y10xx__params__t_1aa09ef9e77d7430e547e7c5276824256e) 

ILED pin.

#### `public `[`gp2y10xx_level_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__gp2y10xx_1gae78eb6ba5c78695a747084dbba8af5d6)` `[`iled_level`](#structgp2y10xx__params__t_1a202a6b5e3f990d1f92ab59e804398472) 

ILED pin level.

# struct `gp2y10xx_t` 

GP2Y10xx device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gp2y10xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__params__t)` `[`params`](#structgp2y10xx__t_1a10134fe30b39b05588f81c61ce6f4921) | device driver configuration

## Members

#### `public `[`gp2y10xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_gp2y10xx.md#structgp2y10xx__params__t)` `[`params`](#structgp2y10xx__t_1a10134fe30b39b05588f81c61ce6f4921) 

device driver configuration

