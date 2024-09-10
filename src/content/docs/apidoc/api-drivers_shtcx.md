---
title: api-drivers_shtcx.md
description: api-drivers_shtcx.md
---
# group `drivers_shtcx` 

Driver for the Sensirion SHTCX sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHTCX_I2C_ADDRESS`](#group__drivers__shtcx_1gabdadb457770ff74faaa21de3d1c7645b)            | SHTCX Default Address.
`enum `[`@262`](#group__drivers__shtcx_1ga5347260c3611a5e649db7a4a8370d3c5)            | 
`public int8_t `[`shtcx_init`](#group__drivers__shtcx_1ga51d8fa6062d72e8aba1a0c3dc2692443)`(`[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` *const dev,const `[`shtcx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__params__t)` * params)`            | Initializes the sensor and I2C.
`public int8_t `[`shtcx_read`](#group__drivers__shtcx_1gade0e4b74669c7f17b5c29afd9da150de)`(const `[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` * dev,uint16_t * rel_humidity,int16_t * temperature)`            | Reads all register values from the device.
`public int8_t `[`shtcx_id`](#group__drivers__shtcx_1gadb3aefc9e221134439c70c6b35f0c586)`(const `[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` * dev,uint16_t * id)`            | Reads the ID and saves it in the device descriptor.
`public int8_t `[`shtcx_reset`](#group__drivers__shtcx_1ga51f1de347b8e2a44bc3410b9e73b1942)`(const `[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` * dev)`            | Resets sensor.
`struct `[`shtcx_params_t`](#structshtcx__params__t) | settings struct with all relevant parameters
`struct `[`shtcx_t`](#structshtcx__t) | device descriptor for the SHTCX

## Members

#### `define `[`SHTCX_I2C_ADDRESS`](#group__drivers__shtcx_1gabdadb457770ff74faaa21de3d1c7645b) 

SHTCX Default Address.

#### `enum `[`@262`](#group__drivers__shtcx_1ga5347260c3611a5e649db7a4a8370d3c5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SHTCX_OK            | Success, no error.
SHTCX_ERROR_BUS            | I2C bus error.
SHTCX_ERROR_CRC            | CRC error.
SHTCX_ERROR            | General error.

#### `public int8_t `[`shtcx_init`](#group__drivers__shtcx_1ga51d8fa6062d72e8aba1a0c3dc2692443)`(`[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` *const dev,const `[`shtcx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__params__t)` * params)` 

Initializes the sensor and I2C.

#### Parameters
* `dev` I2C device descriptor. 

* `params` SHTCX parameters to be used.

#### Returns
SHTCX_OK on a working initialization. 

#### Returns
SHTCX_ERROR_BUS Reading I2C failed. 

#### Returns
SHTCX_ERROR_CRC Wrong ID.

#### `public int8_t `[`shtcx_read`](#group__drivers__shtcx_1gade0e4b74669c7f17b5c29afd9da150de)`(const `[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` * dev,uint16_t * rel_humidity,int16_t * temperature)` 

Reads all register values from the device.

The values as raw data will be saved into received.

#### Parameters
* `dev` The I2C device descriptor. 

* `rel_humidity` Humidity in centi %. 

* `temperature` Temperature in centi °C.

#### Returns
SHTCX_OK if a measurement completed. 

#### Returns
SHTCX_ERROR_BUS reading I2C failed. 

#### Returns
SHTCX_ERROR_CRC on checksum error.

#### `public int8_t `[`shtcx_id`](#group__drivers__shtcx_1gadb3aefc9e221134439c70c6b35f0c586)`(const `[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` * dev,uint16_t * id)` 

Reads the ID and saves it in the device descriptor.

When working correctly ID should equal xxxx'xxxx'xx00'0111 where x is unspecified.

#### Parameters
* `dev` The I2C device descriptor. 

* `id` ID of the device.

#### Returns
SHTCX_OK on everything done. 

#### Returns
SHTCX_ERROR_BUS on error.

#### `public int8_t `[`shtcx_reset`](#group__drivers__shtcx_1ga51f1de347b8e2a44bc3410b9e73b1942)`(const `[`shtcx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__t)` * dev)` 

Resets sensor.

This will reset all internal state machines and reload calibration data from the memory.

#### Parameters
* `dev` The I2C device descriptor.

#### Returns
SHTCX_OK on everything done. 

#### Returns
SHTCX_ERROR_BUS on error.

# struct `shtcx_params_t` 

settings struct with all relevant parameters

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structshtcx__params__t_1a12b910d1c7dda708aa89e4fe1265ad2e) | I2C bus descriptor.
`public uint8_t `[`i2c_addr`](#structshtcx__params__t_1a86b5071932b0182124d9a94f5fdefe67) | I2C address of the sensor.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structshtcx__params__t_1a12b910d1c7dda708aa89e4fe1265ad2e) 

I2C bus descriptor.

#### `public uint8_t `[`i2c_addr`](#structshtcx__params__t_1a86b5071932b0182124d9a94f5fdefe67) 

I2C address of the sensor.

# struct `shtcx_t` 

device descriptor for the SHTCX

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`shtcx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__params__t)` `[`params`](#structshtcx__t_1a7b74ffc2fe43344ca2672446e31f7ecd) | Parameters struct with all settings set.

## Members

#### `public `[`shtcx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_shtcx.md#structshtcx__params__t)` `[`params`](#structshtcx__t_1a7b74ffc2fe43344ca2672446e31f7ecd) 

Parameters struct with all settings set.

