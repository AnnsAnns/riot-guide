---
title: api-drivers_bmp180.md
description: api-drivers_bmp180.md
---
# group `drivers_bmp180` 

Device driver interface for the BMP180 sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`bmp180_oversampling_mode_t`](#group__drivers__bmp180_1gaf44bc15e331d3bcc27fb0536c4c1d7a4)            | Oversampling modes.
`enum `[`@163`](#group__drivers__bmp180_1ga0724528cce39d640312f4a7ad1a893f7)            | Status and error return codes.
`public int `[`bmp180_init`](#group__drivers__bmp180_1gac307c64b0812e120accdd54074802468)`(`[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev,const `[`bmp180_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__params__t)` * params)`            | Initialize the given BMP180 device.
`public int16_t `[`bmp180_read_temperature`](#group__drivers__bmp180_1gad908b039eb8d35935145eeeae15ec94e)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev)`            | Read temperature value from the given BMP180 device, returned in d°C.
`public uint32_t `[`bmp180_read_pressure`](#group__drivers__bmp180_1ga47f46bcaac01d8375b59a253050537ef)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev)`            | Read pressure value from the given BMP180 device, returned in Pa.
`public int16_t `[`bmp180_altitude`](#group__drivers__bmp180_1ga1e44d4af168ae30f1e3974b64449ca1b)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev,uint32_t pressure_0)`            | Compute altitude, returned in m.
`public uint32_t `[`bmp180_sealevel_pressure`](#group__drivers__bmp180_1ga1f50911b510df9a4894b1316f1d490a8)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev,int16_t altitude)`            | Compute pressure at sea level, returned in Pa.
`struct `[`bmp180_calibration_t`](#structbmp180__calibration__t) | Calibration struct for the BMP180 sensor.
`struct `[`bmp180_params_t`](#structbmp180__params__t) | Device initialization parameters.
`struct `[`bmp180_t`](#structbmp180__t) | Device descriptor for the BMP180 sensor.

## Members

#### `enum `[`bmp180_oversampling_mode_t`](#group__drivers__bmp180_1gaf44bc15e331d3bcc27fb0536c4c1d7a4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMP180_ULTRALOWPOWER            | 
BMP180_STANDARD            | 
BMP180_HIGHRES            | 
BMP180_ULTRAHIGHRES            | 

Oversampling modes.

#### `enum `[`@163`](#group__drivers__bmp180_1ga0724528cce39d640312f4a7ad1a893f7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMP180_OK            | everything was fine
BMP180_ERR_NODEV            | did not detect BMP180
BMP180_ERR_NOCAL            | error when reading calibration values

Status and error return codes.

#### `public int `[`bmp180_init`](#group__drivers__bmp180_1gac307c64b0812e120accdd54074802468)`(`[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev,const `[`bmp180_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__params__t)` * params)` 

Initialize the given BMP180 device.

#### Parameters
* `dev` Initialized device descriptor of BMP180 device 

* `params` Initialization parameters

#### Returns
BMP180_OK on success 

#### Returns
-BMP180_ERR_NODEV if not a BMP180 at given address 

#### Returns
-BMP180_ERR_NOCAL if an error occurred when reading calibration values

#### `public int16_t `[`bmp180_read_temperature`](#group__drivers__bmp180_1gad908b039eb8d35935145eeeae15ec94e)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev)` 

Read temperature value from the given BMP180 device, returned in d°C.

#### Parameters
* `dev` Device descriptor of BMP180 device to read from

#### Returns
Temperature in d°C

#### `public uint32_t `[`bmp180_read_pressure`](#group__drivers__bmp180_1ga47f46bcaac01d8375b59a253050537ef)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev)` 

Read pressure value from the given BMP180 device, returned in Pa.

#### Parameters
* `dev` Device descriptor of BMP180 device to read from

#### Returns
Pressure in Pa

#### `public int16_t `[`bmp180_altitude`](#group__drivers__bmp180_1ga1e44d4af168ae30f1e3974b64449ca1b)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev,uint32_t pressure_0)` 

Compute altitude, returned in m.

#### Parameters
* `dev` Device descriptor of BMP180 device to read from 

* `pressure_0` The pressure at sea level in Pa

#### Returns
Altitude in m

#### `public uint32_t `[`bmp180_sealevel_pressure`](#group__drivers__bmp180_1ga1f50911b510df9a4894b1316f1d490a8)`(const `[`bmp180_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__t)` * dev,int16_t altitude)` 

Compute pressure at sea level, returned in Pa.

#### Parameters
* `dev` Device descriptor of BMP180 device to read from 

* `altitude` Altitude in m

#### Returns
Pressure at sea level in Pa

# struct `bmp180_calibration_t` 

Calibration struct for the BMP180 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`ac1`](#structbmp180__calibration__t_1ad0d5254ec175a5f4ede93f4d2f754738) | ac1 coefficient
`public int16_t `[`ac2`](#structbmp180__calibration__t_1a85784aff344841a1372d6d1361ee9676) | ac2 coefficient
`public int16_t `[`ac3`](#structbmp180__calibration__t_1ab4bbc206993d81f4aa5330e88a7622bb) | ac3 coefficient
`public int16_t `[`b1`](#structbmp180__calibration__t_1a17ab977e7bf29a1578406c458d4bcc56) | b1 coefficient
`public int16_t `[`b2`](#structbmp180__calibration__t_1a27ae4c65d92c0e34fe65b310504650d5) | b2 coefficient
`public int16_t `[`mb`](#structbmp180__calibration__t_1a5f8d28670d7be7fbaa7fd06f02fccd13) | mb coefficient
`public int16_t `[`mc`](#structbmp180__calibration__t_1a4da25bf0c1c2d82499707a3bbe409dbc) | mc coefficient
`public int16_t `[`md`](#structbmp180__calibration__t_1a2cb2da66848632c689a19ce6d8946a0a) | md coefficient
`public uint16_t `[`ac4`](#structbmp180__calibration__t_1aa4cdad028a6f1eb7f21b1c1fa207d095) | ac4 coefficient
`public uint16_t `[`ac5`](#structbmp180__calibration__t_1aacc423abe86fcf76d02f4e147d116017) | ac5 coefficient
`public uint16_t `[`ac6`](#structbmp180__calibration__t_1a17a527da7dd7f407d7c64112f1aad322) | ac6 coefficient

## Members

#### `public int16_t `[`ac1`](#structbmp180__calibration__t_1ad0d5254ec175a5f4ede93f4d2f754738) 

ac1 coefficient

#### `public int16_t `[`ac2`](#structbmp180__calibration__t_1a85784aff344841a1372d6d1361ee9676) 

ac2 coefficient

#### `public int16_t `[`ac3`](#structbmp180__calibration__t_1ab4bbc206993d81f4aa5330e88a7622bb) 

ac3 coefficient

#### `public int16_t `[`b1`](#structbmp180__calibration__t_1a17ab977e7bf29a1578406c458d4bcc56) 

b1 coefficient

#### `public int16_t `[`b2`](#structbmp180__calibration__t_1a27ae4c65d92c0e34fe65b310504650d5) 

b2 coefficient

#### `public int16_t `[`mb`](#structbmp180__calibration__t_1a5f8d28670d7be7fbaa7fd06f02fccd13) 

mb coefficient

#### `public int16_t `[`mc`](#structbmp180__calibration__t_1a4da25bf0c1c2d82499707a3bbe409dbc) 

mc coefficient

#### `public int16_t `[`md`](#structbmp180__calibration__t_1a2cb2da66848632c689a19ce6d8946a0a) 

md coefficient

#### `public uint16_t `[`ac4`](#structbmp180__calibration__t_1aa4cdad028a6f1eb7f21b1c1fa207d095) 

ac4 coefficient

#### `public uint16_t `[`ac5`](#structbmp180__calibration__t_1aacc423abe86fcf76d02f4e147d116017) 

ac5 coefficient

#### `public uint16_t `[`ac6`](#structbmp180__calibration__t_1a17a527da7dd7f407d7c64112f1aad322) 

ac6 coefficient

# struct `bmp180_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structbmp180__params__t_1afa4808687dc8470069739557396d7253) | I2C device which is used.
`public uint8_t `[`i2c_addr`](#structbmp180__params__t_1affa96f9d7ff638580fa646fedc5d1ee2) | I2C address.
`public `[`bmp180_oversampling_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmp180_1gaf44bc15e331d3bcc27fb0536c4c1d7a4)` `[`oversampling`](#structbmp180__params__t_1af3aac59015574081195279d2bfb038f8) | Oversampling mode.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structbmp180__params__t_1afa4808687dc8470069739557396d7253) 

I2C device which is used.

#### `public uint8_t `[`i2c_addr`](#structbmp180__params__t_1affa96f9d7ff638580fa646fedc5d1ee2) 

I2C address.

#### `public `[`bmp180_oversampling_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmp180_1gaf44bc15e331d3bcc27fb0536c4c1d7a4)` `[`oversampling`](#structbmp180__params__t_1af3aac59015574081195279d2bfb038f8) 

Oversampling mode.

# struct `bmp180_t` 

Device descriptor for the BMP180 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bmp180_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__params__t)` `[`params`](#structbmp180__t_1a4f7fc7ed8e685aed38177881d6cdb4cb) | Device initialization parameters.
`public `[`bmp180_calibration_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__calibration__t)` `[`calibration`](#structbmp180__t_1acd2748622f51bf791fba4b2d33daf408) | Device calibration.

## Members

#### `public `[`bmp180_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__params__t)` `[`params`](#structbmp180__t_1a4f7fc7ed8e685aed38177881d6cdb4cb) 

Device initialization parameters.

#### `public `[`bmp180_calibration_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmp180.md#structbmp180__calibration__t)` `[`calibration`](#structbmp180__t_1acd2748622f51bf791fba4b2d33daf408) 

Device calibration.

