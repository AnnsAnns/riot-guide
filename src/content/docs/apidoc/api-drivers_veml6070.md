---
title: api-drivers_veml6070.md
description: api-drivers_veml6070.md
---
# group `drivers_veml6070` 

Device driver interface for the VEML6070 UV sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`veml6070_integrationtime`](#group__drivers__veml6070_1ga0c39b45f995df3f279a39d3147391a6d)            | Integration times.
`enum `[`@281`](#group__drivers__veml6070_1ga2ae95ea8e60178fe99580d5142f0ec7e)            | Status and error return codes.
`public int `[`veml6070_init`](#group__drivers__veml6070_1ga0c19cad88dd63de4640a5fb13d318b01)`(`[`veml6070_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__t)` * dev,const `[`veml6070_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__params__t)` * params)`            | Initialize the given VEML6070 device.
`public uint16_t `[`veml6070_read_uv`](#group__drivers__veml6070_1ga419bd7c7880c43578237686baa7e095f)`(const `[`veml6070_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__t)` * dev)`            | Read UV index from the given VEML6070 device.
`struct `[`veml6070_params_t`](#structveml6070__params__t) | Device initialization parameters.
`struct `[`veml6070_t`](#structveml6070__t) | Device descriptor for the VEML6070 sensor.

## Members

#### `enum `[`veml6070_integrationtime`](#group__drivers__veml6070_1ga0c39b45f995df3f279a39d3147391a6d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VEML6070_HALF_T            | 1/2 T integration time
VEML6070_1_T            | 1 T integration time
VEML6070_2_T            | 2 T integration time
VEML6070_4_T            | 4 T integration time

Integration times.

#### `enum `[`@281`](#group__drivers__veml6070_1ga2ae95ea8e60178fe99580d5142f0ec7e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VEML6070_OK            | Everything was fine.
VEML6070_ERR_I2C            | Error initializing the I2C bus.

Status and error return codes.

#### `public int `[`veml6070_init`](#group__drivers__veml6070_1ga0c19cad88dd63de4640a5fb13d318b01)`(`[`veml6070_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__t)` * dev,const `[`veml6070_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__params__t)` * params)` 

Initialize the given VEML6070 device.

#### Parameters
* `dev` Initialized device descriptor of VEML6070 device 

* `params` The parameters for the VEML6070 device (integration time)

#### Returns
VEML6070_OK on success 

#### Returns
VEML6070_ERR_I2C if given I2C is not enabled in board config

#### `public uint16_t `[`veml6070_read_uv`](#group__drivers__veml6070_1ga419bd7c7880c43578237686baa7e095f)`(const `[`veml6070_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__t)` * dev)` 

Read UV index from the given VEML6070 device.

#### Parameters
* `dev` Device descriptor of VEML6070 device to read from

#### Returns
UV index

# struct `veml6070_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structveml6070__params__t_1a4d6da03be1609c9b5db9278da1ad016c) | I2C device which is used.
`public `[`veml6070_itime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__veml6070_1gada6b5bdb219e095d5863e8bddbe2f3c5)` `[`itime`](#structveml6070__params__t_1adc5d43958597fa4463cd1b9348d21274) | Integration time.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structveml6070__params__t_1a4d6da03be1609c9b5db9278da1ad016c) 

I2C device which is used.

#### `public `[`veml6070_itime_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__veml6070_1gada6b5bdb219e095d5863e8bddbe2f3c5)` `[`itime`](#structveml6070__params__t_1adc5d43958597fa4463cd1b9348d21274) 

Integration time.

# struct `veml6070_t` 

Device descriptor for the VEML6070 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`veml6070_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__params__t)` `[`params`](#structveml6070__t_1a71922501e327374c07865b7675585e25) | Device parameters.

## Members

#### `public `[`veml6070_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_veml6070.md#structveml6070__params__t)` `[`params`](#structveml6070__t_1a71922501e327374c07865b7675585e25) 

Device parameters.

