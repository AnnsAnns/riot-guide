---
title: api-drivers_tsl2561.md
description: api-drivers_tsl2561.md
---
# group `drivers_tsl2561` 

Device driver interface for the illuminance TSL2561 sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`tsl2561_init`](#group__drivers__tsl2561_1ga35236b4ecbf7935554f847e4e07d803a)`(`[`tsl2561_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__t)` * dev,const `[`tsl2561_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__params__t)` * params)`            | Initialize the given TSL2561 device.
`public uint16_t `[`tsl2561_read_illuminance`](#group__drivers__tsl2561_1gae6c28514b64828d1ff49bdbbb6e192ce)`(const `[`tsl2561_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__t)` * dev)`            | Read illuminance value from the given TSL2561 device, returned in lx.
`struct `[`tsl2561_params_t`](#structtsl2561__params__t) | Device initialization parameters.
`struct `[`tsl2561_t`](#structtsl2561__t) | Device descriptor for the TSL2561 sensor.

## Members

#### `public int `[`tsl2561_init`](#group__drivers__tsl2561_1ga35236b4ecbf7935554f847e4e07d803a)`(`[`tsl2561_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__t)` * dev,const `[`tsl2561_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__params__t)` * params)` 

Initialize the given TSL2561 device.

#### Parameters
* `dev` Initialized device descriptor of BMP180 device 

* `params` Initialization parameters

#### Returns
0 on success 

#### Returns
-1 if given I2C is not available 

#### Returns
-2 if not a TSL2561 sensor

#### `public uint16_t `[`tsl2561_read_illuminance`](#group__drivers__tsl2561_1gae6c28514b64828d1ff49bdbbb6e192ce)`(const `[`tsl2561_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__t)` * dev)` 

Read illuminance value from the given TSL2561 device, returned in lx.

#### Parameters
* `dev` Device descriptor of TSL2561 device to read from

#### Returns
Illuminance in Lux (lx)

# struct `tsl2561_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structtsl2561__params__t_1ac358841f988bc5a2762898319ce6795a) | I2C device which is used.
`public uint8_t `[`addr`](#structtsl2561__params__t_1a4697e14353c2d05340385f67e81a1172) | address on I2C bus
`public uint8_t `[`gain`](#structtsl2561__params__t_1aa354b17303c7cdfabdd83bbf4d51591c) | gain
`public uint8_t `[`integration`](#structtsl2561__params__t_1ad321c911f84f72311b49825c6b2f5c40) | integration time

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structtsl2561__params__t_1ac358841f988bc5a2762898319ce6795a) 

I2C device which is used.

#### `public uint8_t `[`addr`](#structtsl2561__params__t_1a4697e14353c2d05340385f67e81a1172) 

address on I2C bus

#### `public uint8_t `[`gain`](#structtsl2561__params__t_1aa354b17303c7cdfabdd83bbf4d51591c) 

gain

#### `public uint8_t `[`integration`](#structtsl2561__params__t_1ad321c911f84f72311b49825c6b2f5c40) 

integration time

# struct `tsl2561_t` 

Device descriptor for the TSL2561 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`tsl2561_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__params__t)` `[`params`](#structtsl2561__t_1a8b6667d53600605f30844db33f360e5c) | device initialization parameters

## Members

#### `public `[`tsl2561_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tsl2561.md#structtsl2561__params__t)` `[`params`](#structtsl2561__t_1a8b6667d53600605f30844db33f360e5c) 

device initialization parameters

