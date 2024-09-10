---
title: api-drivers_bh1750fvi.md
description: api-drivers_bh1750fvi.md
---
# group `drivers_bh1750fvi` 

Driver for the Rohm BH1750FVI ambient light sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BH1750FVI_DEFAULT_ADDR`](#group__drivers__bh1750fvi_1ga573f635279c7f403e54b937d95e20867)            | Default address of BH1750FVI sensors.
`define `[`BH1750FVI_I2C_MAX_CLK`](#group__drivers__bh1750fvi_1ga72d162eb583391f9618449bda2ea621d)            | Maximum I2C bus speed to use with the device.
`enum `[`@160`](#group__drivers__bh1750fvi_1ga5584fee7841d9376fb0394600e9ed81a)            | Status and error return codes.
`public int `[`bh1750fvi_init`](#group__drivers__bh1750fvi_1gabfc9fb18c5f94aaa40faef4687bb02f2)`(`[`bh1750fvi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1750fvi.md#structbh1750fvi__t)` * dev,const `[`bh1750fvi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1750fvi.md#structbh1750fvi__params__t)` * params)`            | Initialize the given BH1750FVI device.
`public uint16_t `[`bh1750fvi_sample`](#group__drivers__bh1750fvi_1ga638d26e128e8be081585c701b7169156)`(const `[`bh1750fvi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1750fvi.md#structbh1750fvi__t)` * dev)`            | Read a ambient light value from the given device [in LUX].
`struct `[`bh1750fvi_t`](#structbh1750fvi__t) | Device descriptor for BH1570FVI devices.
`struct `[`bh1750fvi_params_t`](#structbh1750fvi__params__t) | Set of configuration parameters for BH1750FV devices.

## Members

#### `define `[`BH1750FVI_DEFAULT_ADDR`](#group__drivers__bh1750fvi_1ga573f635279c7f403e54b937d95e20867) 

Default address of BH1750FVI sensors.

#### `define `[`BH1750FVI_I2C_MAX_CLK`](#group__drivers__bh1750fvi_1ga72d162eb583391f9618449bda2ea621d) 

Maximum I2C bus speed to use with the device.

#### `enum `[`@160`](#group__drivers__bh1750fvi_1ga5584fee7841d9376fb0394600e9ed81a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BH1750FVI_OK            | everything was fine
BH1750FVI_ERR_I2C            | error initializing the I2C bus

Status and error return codes.

#### `public int `[`bh1750fvi_init`](#group__drivers__bh1750fvi_1gabfc9fb18c5f94aaa40faef4687bb02f2)`(`[`bh1750fvi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1750fvi.md#structbh1750fvi__t)` * dev,const `[`bh1750fvi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1750fvi.md#structbh1750fvi__params__t)` * params)` 

Initialize the given BH1750FVI device.

#### Parameters
* `dev` device descriptor of the targeted device 

* `params` device configuration (i2c bus, address and bus clock)

#### Returns
0 on success 

#### Returns
-1 if unable to speak to the device

#### `public uint16_t `[`bh1750fvi_sample`](#group__drivers__bh1750fvi_1ga638d26e128e8be081585c701b7169156)`(const `[`bh1750fvi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1750fvi.md#structbh1750fvi__t)` * dev)` 

Read a ambient light value from the given device [in LUX].

The result value is the measured ambient light intensity in LUX and ranges from 0 to 54612. Taking one measurement takes ~120ms, so it takes this amount of time until the function returns.

#### Parameters
* `dev` device descriptor of the targeted device

#### Returns
ambient light intensity in LUX

# struct `bh1750fvi_t` 

Device descriptor for BH1570FVI devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1750fvi__t_1ab06caa033e6c0f11abda722b44446161) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structbh1750fvi__t_1ac8dc78f4ea503c1c7515037ea51334bb) | slave address of the device

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1750fvi__t_1ab06caa033e6c0f11abda722b44446161) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structbh1750fvi__t_1ac8dc78f4ea503c1c7515037ea51334bb) 

slave address of the device

# struct `bh1750fvi_params_t` 

Set of configuration parameters for BH1750FV devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1750fvi__params__t_1ac3ab80ca0eb0c60631f6e1f982c8f611) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structbh1750fvi__params__t_1aebb7302abd34dba6140c6180a7e02b8d) | slave address of the device

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1750fvi__params__t_1ac3ab80ca0eb0c60631f6e1f982c8f611) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structbh1750fvi__params__t_1aebb7302abd34dba6140c6180a7e02b8d) 

slave address of the device

