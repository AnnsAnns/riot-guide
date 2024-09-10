---
title: api-drivers_si70xx.md
description: api-drivers_si70xx.md
---
# group `drivers_si70xx` 

Driver for the Si7006/13/20/21/5x temperature and humidity sensor.

The Si70xx driver supports a range of similar temperature and humidity sensors from Silicon Labs.

The Si7006/13/20/21 sensors support both temperature and relative humidity reading, while the Si7050/1/3/4/5 sensors only provide a temperature reading varying in accuracy between +/- 0.1 C to +/- 1.0 C depending on the model.

For any of the Si705x models, use the pseudo module `si705x`.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SI70XX_HAS_HUMIDITY_SENSOR`](#group__drivers__si70xx_1gaa40efea07c1c2e9e6ffdff66d948952e)            | Compile time macro telling whether the chip has a humidity sensor.
`enum `[`@263`](#group__drivers__si70xx_1ga775634eda7917b3f2142895169300799)            | Driver return codes.
`public int `[`si70xx_init`](#group__drivers__si70xx_1gaa760c8b1bea2835c6a02a84fb0393f37)`(`[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev,const `[`si70xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__params__t)` * params)`            | Initialize and reset the sensor.
`public uint16_t `[`si70xx_get_relative_humidity`](#group__drivers__si70xx_1gaaaba79dd3a2dd359b4ff75e44e22663b)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)`            | Read the relative humidity from the sensor.
`public int16_t `[`si70xx_get_temperature`](#group__drivers__si70xx_1ga65292eb1062e420ec52adf68bf3d586a)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)`            | Read the current temperature from the sensor.
`public void `[`si70xx_get_both`](#group__drivers__si70xx_1ga31261c190e8f388406be1a565c289166)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev,uint16_t * humidity,int16_t * temperature)`            | Read the relative humidity and temperature from the sensor.
`public uint64_t `[`si70xx_get_serial`](#group__drivers__si70xx_1gab1d5a8c57bd2da5b4a4f3d3222a60276)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)`            | Read the sensor serial number.
`public uint8_t `[`si70xx_get_id`](#group__drivers__si70xx_1gaa7aeb4778005673b6654b8d99aa222ef)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)`            | Read the sensor id, to identifier the sensor variant.
`public uint8_t `[`si70xx_get_revision`](#group__drivers__si70xx_1ga13402e5826cfda97ddb13f020adbedbf)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)`            | Read the firmware revision of the sensor.
`struct `[`si70xx_params_t`](#structsi70xx__params__t) | Device initialization parameters.
`struct `[`si70xx_t`](#structsi70xx__t) | Si70xx device descriptor.

## Members

#### `define `[`SI70XX_HAS_HUMIDITY_SENSOR`](#group__drivers__si70xx_1gaa40efea07c1c2e9e6ffdff66d948952e) 

Compile time macro telling whether the chip has a humidity sensor.

#### `enum `[`@263`](#group__drivers__si70xx_1ga775634eda7917b3f2142895169300799) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SI70XX_OK            | All OK.
SI70XX_ERR_NODEV            | No valid device found on I2C bus.
SI70XX_ERR_I2C            | An error occurred when reading/writing on I2C bus.

Driver return codes.

#### `public int `[`si70xx_init`](#group__drivers__si70xx_1gaa760c8b1bea2835c6a02a84fb0393f37)`(`[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev,const `[`si70xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__params__t)` * params)` 

Initialize and reset the sensor.

#### Parameters
* `dev` device descriptor 

* `params` initialization parameters

#### Returns
SI70XX_OK on successful initialization 

#### Returns
-SI70XX_ERR_NOI2C on I2C initialization error 

#### Returns
-SI70XX_ERR_NODEV on device test error 

#### Returns
-SI70XX_ERR_I2C on I2C bus error

#### `public uint16_t `[`si70xx_get_relative_humidity`](#group__drivers__si70xx_1gaaaba79dd3a2dd359b4ff75e44e22663b)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)` 

Read the relative humidity from the sensor.

Uses clock stretching.

This function is only available in models that have a humidity sensor.

#### Parameters
* `dev` device descriptor 

#### Returns
relative humidity in centi-percent (times 100)

#### `public int16_t `[`si70xx_get_temperature`](#group__drivers__si70xx_1ga65292eb1062e420ec52adf68bf3d586a)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)` 

Read the current temperature from the sensor.

Uses clock stretching.

#### Parameters
* `dev` device descriptor 

#### Returns
current temperature in centi-degrees Celsius (times 100)

#### `public void `[`si70xx_get_both`](#group__drivers__si70xx_1ga31261c190e8f388406be1a565c289166)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev,uint16_t * humidity,int16_t * temperature)` 

Read the relative humidity and temperature from the sensor.

Uses clock stretching.

This function is only available in models that have a humidity sensor.

#### Parameters
* `dev` device descriptor 

* `humidity` pointer to relative humidity (in centi-percent) 

* `temperature` pointer to temperature (in centi-degrees Celsius)

#### `public uint64_t `[`si70xx_get_serial`](#group__drivers__si70xx_1gab1d5a8c57bd2da5b4a4f3d3222a60276)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)` 

Read the sensor serial number.

#### Parameters
* `dev` device descriptor 

#### Returns
sensor serial number

#### `public uint8_t `[`si70xx_get_id`](#group__drivers__si70xx_1gaa7aeb4778005673b6654b8d99aa222ef)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)` 

Read the sensor id, to identifier the sensor variant.

#### Parameters
* `dev` device descriptor 

#### Returns
device id

#### `public uint8_t `[`si70xx_get_revision`](#group__drivers__si70xx_1ga13402e5826cfda97ddb13f020adbedbf)`(const `[`si70xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__t)` * dev)` 

Read the firmware revision of the sensor.

#### Parameters
* `dev` device descriptor 

#### Returns
sensor firmware revision number

# struct `si70xx_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi70xx__params__t_1a55ab3cba0aca98e4d326c8feaa90d501) | I2C bus the sensor is connected to.
`public uint8_t `[`address`](#structsi70xx__params__t_1a86b4e065a3393610a8946733542becd0) | sensor address

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsi70xx__params__t_1a55ab3cba0aca98e4d326c8feaa90d501) 

I2C bus the sensor is connected to.

#### `public uint8_t `[`address`](#structsi70xx__params__t_1a86b4e065a3393610a8946733542becd0) 

sensor address

# struct `si70xx_t` 

Si70xx device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`si70xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__params__t)` `[`params`](#structsi70xx__t_1a99734390aa169a7ca7ede1dd342d1bf6) | Device parameters.

## Members

#### `public `[`si70xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_si70xx.md#structsi70xx__params__t)` `[`params`](#structsi70xx__t_1a99734390aa169a7ca7ede1dd342d1bf6) 

Device parameters.

