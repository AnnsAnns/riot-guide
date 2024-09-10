---
title: api-drivers_ds75lx.md
description: api-drivers_ds75lx.md
---
# group `drivers_ds75lx` 

Device driver interface for the Maxim DS75LX temperature sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`ds75lx_resolution_t`](#group__drivers__ds75lx_1ga918a880a6b673f0f6371f61560f045a7)            | Thermometer resolution.
`enum `[`@172`](#group__drivers__ds75lx_1ga3d01b665f7e924f5f97fa41f5879c7f7)            | Status and error return codes.
`public int `[`ds75lx_init`](#group__drivers__ds75lx_1ga4daba80b0700990d18bba9e60df79b95)`(`[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev,const `[`ds75lx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__params__t)` * params)`            | Initialize the given DS75LX device.
`public int `[`ds75lx_read_temperature`](#group__drivers__ds75lx_1gabd5d08865d4c14ba21047471b3b7f0ed)`(const `[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev,int16_t * temperature)`            | Read temperature value from the given DS75LX device, returned in c°C.
`public int `[`ds75lx_wakeup`](#group__drivers__ds75lx_1gaef6e86fd23b2f5d14650503d1c0166c2)`(const `[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev)`            | Wakeup the sensor.
`public int `[`ds75lx_shutdown`](#group__drivers__ds75lx_1ga9b937c3cdabd264e78be766fa664e913)`(const `[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev)`            | Shutdown the sensor.
`struct `[`ds75lx_params_t`](#structds75lx__params__t) | Device initialization parameters.
`struct `[`ds75lx_t`](#structds75lx__t) | Device descriptor for the DS75LX sensor.

## Members

#### `enum `[`ds75lx_resolution_t`](#group__drivers__ds75lx_1ga918a880a6b673f0f6371f61560f045a7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DS75LX_RESOLUTION_9            | 9 bits resolution, 25ms max conversion time
DS75LX_RESOLUTION_10            | 10 bits resolution, 50ms max conversion time
DS75LX_RESOLUTION_11            | 11 bits resolution, 100ms max conversion time
DS75LX_RESOLUTION_12            | 12 bits resolution, 200ms max conversion time

Thermometer resolution.

#### `enum `[`@172`](#group__drivers__ds75lx_1ga3d01b665f7e924f5f97fa41f5879c7f7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DS75LX_OK            | everything was fine
DS75LX_ERR_I2C            | error when reading/writing I2C bus

Status and error return codes.

#### `public int `[`ds75lx_init`](#group__drivers__ds75lx_1ga4daba80b0700990d18bba9e60df79b95)`(`[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev,const `[`ds75lx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__params__t)` * params)` 

Initialize the given DS75LX device.

#### Parameters
* `dev` Initialized device descriptor of DS75LX device 

* `params` Initialization parameters

#### Returns
DS75LX_OK on success 

#### Returns
-DS75LX_ERR_I2C if an error occurred when reading/writing

#### `public int `[`ds75lx_read_temperature`](#group__drivers__ds75lx_1gabd5d08865d4c14ba21047471b3b7f0ed)`(const `[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev,int16_t * temperature)` 

Read temperature value from the given DS75LX device, returned in c°C.

#### Parameters
* `dev` Device descriptor of DS75LX device 

* `temperature` Temperature in c°C

#### Returns
DS75LX_OK on success 

#### Returns
-DS75LX_ERR_I2C if an error occurred when reading/writing

#### `public int `[`ds75lx_wakeup`](#group__drivers__ds75lx_1gaef6e86fd23b2f5d14650503d1c0166c2)`(const `[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev)` 

Wakeup the sensor.

#### Parameters
* `dev` Device descriptor of DS75LX device

#### Returns
DS75LX_OK on success 

#### Returns
-DS75LX_ERR_I2C if an error occurred when reading/writing

#### `public int `[`ds75lx_shutdown`](#group__drivers__ds75lx_1ga9b937c3cdabd264e78be766fa664e913)`(const `[`ds75lx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__t)` * dev)` 

Shutdown the sensor.

#### Parameters
* `dev` Device descriptor of DS75LX device

#### Returns
DS75LX_OK on success 

#### Returns
-DS75LX_ERR_I2C if an error occurred when reading/writing

# struct `ds75lx_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structds75lx__params__t_1a4629376b622bab2565d993c2294d34dd) | I2C device which is used.
`public uint8_t `[`addr`](#structds75lx__params__t_1a92e68af916f241117de1220b728b4289) | I2C address.
`public `[`ds75lx_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds75lx_1ga918a880a6b673f0f6371f61560f045a7)` `[`resolution`](#structds75lx__params__t_1a21950eb6cd7610ebdd9ba1901d13aa8f) | Thermometer resolution.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structds75lx__params__t_1a4629376b622bab2565d993c2294d34dd) 

I2C device which is used.

#### `public uint8_t `[`addr`](#structds75lx__params__t_1a92e68af916f241117de1220b728b4289) 

I2C address.

#### `public `[`ds75lx_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds75lx_1ga918a880a6b673f0f6371f61560f045a7)` `[`resolution`](#structds75lx__params__t_1a21950eb6cd7610ebdd9ba1901d13aa8f) 

Thermometer resolution.

# struct `ds75lx_t` 

Device descriptor for the DS75LX sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ds75lx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__params__t)` `[`params`](#structds75lx__t_1af285d0f49765dd66077b49402e3a1f43) | Device initialization parameters.

## Members

#### `public `[`ds75lx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds75lx.md#structds75lx__params__t)` `[`params`](#structds75lx__t_1af285d0f49765dd66077b49402e3a1f43) 

Device initialization parameters.

