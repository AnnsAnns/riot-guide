---
title: api-drivers_seesaw_soil.md
description: api-drivers_seesaw_soil.md
---
# group `drivers_seesaw_soil` 

Driver for the Adafruit Seesaw Soil Moisture and Temperature Sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@260`](#group__drivers__seesaw__soil_1gac6bea760bc75e449a80b8cc28bf9a2fe)            | Seesaw Soil specific return values.
`public int `[`seesaw_soil_init`](#group__drivers__seesaw__soil_1ga7e376300c9a70f976b69d22ec8121a22)`(`[`seesaw_soil_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__t)` * dev,const `[`seesaw_soil_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__params__t)` * params)`            | Initialize the given Seesaw Soil device.
`public int `[`seesaw_soil_temperature`](#group__drivers__seesaw__soil_1ga6e1c582c4a9d6f4e6623d8ab2427a51c)`(const `[`seesaw_soil_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__t)` * dev,int16_t * temp)`            | Convenience function for reading temperature.
`public int `[`seesaw_soil_moisture`](#group__drivers__seesaw__soil_1gab6bcf3ae9ce90599ba996df682327b9f)`(const `[`seesaw_soil_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__t)` * dev,uint16_t * moist)`            | Convenience function for reading ca.
`struct `[`seesaw_soil_params_t`](#structseesaw__soil__params__t) | Parameters needed for device initialization.
`struct `[`seesaw_soil_t`](#structseesaw__soil__t) | Device descriptor for Seesaw Soil sensors.

## Members

#### `enum `[`@260`](#group__drivers__seesaw__soil_1gac6bea760bc75e449a80b8cc28bf9a2fe) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SEESAW_SOIL_OK            | everything went as expected
SEESAW_SOIL_NODEV            | no SEESAW_SOIL device found on the bus
SEESAW_SOIL_NOBUS            | errors while initializing the I2C bus
SEESAW_SOIL_BUSERR            | error during I2C communication

Seesaw Soil specific return values.

#### `public int `[`seesaw_soil_init`](#group__drivers__seesaw__soil_1ga7e376300c9a70f976b69d22ec8121a22)`(`[`seesaw_soil_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__t)` * dev,const `[`seesaw_soil_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__params__t)` * params)` 

Initialize the given Seesaw Soil device.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` configuration parameters

#### Returns
SEESAW_SOIL_OK on success 

#### Returns
SEESAW_SOIL_NOBUS if initialization of I2C bus fails 

#### Returns
SEESAW_SOIL_NODEV if no Seesaw Soil device found on bus

#### `public int `[`seesaw_soil_temperature`](#group__drivers__seesaw__soil_1ga6e1c582c4a9d6f4e6623d8ab2427a51c)`(const `[`seesaw_soil_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__t)` * dev,int16_t * temp)` 

Convenience function for reading temperature.

#### Parameters
* `dev` device descriptor of sensor 

* `temp` temperature [in 100 * degree centigrade]

#### Returns
SEESAW_SOIL_OK on success 

#### Returns
SEESAW_SOIL_BUSERR on I2C communication failures

#### `public int `[`seesaw_soil_moisture`](#group__drivers__seesaw__soil_1gab6bcf3ae9ce90599ba996df682327b9f)`(const `[`seesaw_soil_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__t)` * dev,uint16_t * moist)` 

Convenience function for reading ca.

#### Parameters
* `dev` device descriptor of sensor 

* `moist` moisture using capacitive measurement. Value is ranging from 200 (very dry) to 2000 (very wet).

#### Returns
SEESAW_SOIL_OK on success 

#### Returns
SEESAW_SOIL_BUSERR on I2C communication failures

# struct `seesaw_soil_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structseesaw__soil__params__t_1a6e162627e9a4ab0b488d72e1687c30fe) | bus the device is connected to
`public uint8_t `[`addr`](#structseesaw__soil__params__t_1a39ca0827ee45943686286c8aa2a5e159) | address on that bus

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structseesaw__soil__params__t_1a6e162627e9a4ab0b488d72e1687c30fe) 

bus the device is connected to

#### `public uint8_t `[`addr`](#structseesaw__soil__params__t_1a39ca0827ee45943686286c8aa2a5e159) 

address on that bus

# struct `seesaw_soil_t` 

Device descriptor for Seesaw Soil sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`seesaw_soil_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__params__t)` `[`params`](#structseesaw__soil__t_1a0d20885ae65ed527b0e09b2df7bd0794) | Configuration parameters.

## Members

#### `public `[`seesaw_soil_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_seesaw_soil.md#structseesaw__soil__params__t)` `[`params`](#structseesaw__soil__t_1a0d20885ae65ed527b0e09b2df7bd0794) 

Configuration parameters.

