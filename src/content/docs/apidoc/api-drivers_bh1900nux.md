---
title: api-drivers_bh1900nux.md
description: api-drivers_bh1900nux.md
---
# group `drivers_bh1900nux` 

Driver for the Rohm BH1900NUX Temperature sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BH1900NUX_DEFAULT_ADDR`](#group__drivers__bh1900nux_1ga083d87dc188509aa40a8732bdea81cc4)            | Default address of BH1900NUX sensors.
`define `[`BH1900NUX_I2C_MAX_CLK`](#group__drivers__bh1900nux_1gace6471d513254204412154d9b7ff9c52)            | Maximum I2C bus speed to use with the device.
`enum `[`@161`](#group__drivers__bh1900nux_1ga5e66f304417530ef056f13a6a6dc668a)            | Status and error return codes.
`public int `[`bh1900nux_init`](#group__drivers__bh1900nux_1gaa7a5674db3f1f05f91f4cb4772fc952e)`(`[`bh1900nux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1900nux.md#structbh1900nux__t)` * dev,const `[`bh1900nux_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1900nux.md#structbh1900nux__params__t)` * params)`            | Initialize the given BH1900NUX device.
`public int `[`bh1900nux_read`](#group__drivers__bh1900nux_1ga8d10ac8fbd40889ff8bace28d9cd9337)`(const `[`bh1900nux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1900nux.md#structbh1900nux__t)` * dev,int16_t * temp)`            | Read the temperature measerd by the device [MILICELSIUS].
`struct `[`bh1900nux_t`](#structbh1900nux__t) | Device descriptor for BH1900NUX devices.
`struct `[`bh1900nux_params_t`](#structbh1900nux__params__t) | Set of configuration parameters for BH1900NUX devices.

## Members

#### `define `[`BH1900NUX_DEFAULT_ADDR`](#group__drivers__bh1900nux_1ga083d87dc188509aa40a8732bdea81cc4) 

Default address of BH1900NUX sensors.

#### `define `[`BH1900NUX_I2C_MAX_CLK`](#group__drivers__bh1900nux_1gace6471d513254204412154d9b7ff9c52) 

Maximum I2C bus speed to use with the device.

#### `enum `[`@161`](#group__drivers__bh1900nux_1ga5e66f304417530ef056f13a6a6dc668a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BH1900NUX_OK            | everything was fine
BH1900NUX_ERR_I2C            | error initializing the I2C bus

Status and error return codes.

#### `public int `[`bh1900nux_init`](#group__drivers__bh1900nux_1gaa7a5674db3f1f05f91f4cb4772fc952e)`(`[`bh1900nux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1900nux.md#structbh1900nux__t)` * dev,const `[`bh1900nux_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1900nux.md#structbh1900nux__params__t)` * params)` 

Initialize the given BH1900NUX device.

#### Parameters
* `dev` device descriptor of the targeted device 

* `params` device configuration (i2c bus, address and bus clock)

#### Returns
0 on success 

#### Returns
-1 if unable to speak to the device

#### `public int `[`bh1900nux_read`](#group__drivers__bh1900nux_1ga8d10ac8fbd40889ff8bace28d9cd9337)`(const `[`bh1900nux_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bh1900nux.md#structbh1900nux__t)` * dev,int16_t * temp)` 

Read the temperature measerd by the device [MILICELSIUS].

The result value is the measured temperature in MILICELSUIS and ranges from -30 to 95.

#### Parameters
* `dev` device descriptor of the targeted device 

* `temp` temperature output

#### Returns
BH1900NUX_OK on success 

#### Returns
BH1900NUX_ERR_I2C on failure

# struct `bh1900nux_t` 

Device descriptor for BH1900NUX devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1900nux__t_1a90e65fd3688174455003d421b7e8a3d2) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structbh1900nux__t_1a8d4a85d35885c548f3d6e4455a89ef3e) | slave address of the device

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1900nux__t_1a90e65fd3688174455003d421b7e8a3d2) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structbh1900nux__t_1a8d4a85d35885c548f3d6e4455a89ef3e) 

slave address of the device

# struct `bh1900nux_params_t` 

Set of configuration parameters for BH1900NUX devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1900nux__params__t_1ad0a96009647e050cf700ad2ef79f24e6) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structbh1900nux__params__t_1af6b8da62898674c0f53c811a0d2a3a8e) | slave address of the device

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structbh1900nux__params__t_1ad0a96009647e050cf700ad2ef79f24e6) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structbh1900nux__params__t_1af6b8da62898674c0f53c811a0d2a3a8e) 

slave address of the device

