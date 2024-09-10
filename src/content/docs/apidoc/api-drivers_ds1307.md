---
title: api-drivers_ds1307.md
description: api-drivers_ds1307.md
---
# group `drivers_ds1307` 

Device drive interface for the DS1307 real-time clock.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DS1307_I2C_ADDRESS`](#group__drivers__ds1307_1gabda712dda70c44a70f5956f1ea8544f6)            | I2C address of DS1307 RTC.
`define `[`DS1307_NVRAM_MAX_SIZE`](#group__drivers__ds1307_1gaed80374c180e9e5ca7c4f9c4a5d2cf63)            | Maximum size in byte of on-chip NVRAM.
`enum `[`ds1307_sqw_mode_t`](#group__drivers__ds1307_1gac639008da1051d2ab3b7e47764fb47e9)            | Modes for the DS1307 square wave / output driver.
`public int `[`ds1307_init`](#group__drivers__ds1307_1gab4b72af174b4c9e01983982efb0b4bd5)`(`[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,const `[`ds1307_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__params__t)` * params)`            | Initialize the given DS1307 device.
`public int `[`ds1307_set_time`](#group__drivers__ds1307_1gac5fa7433c67ef511a28aae56dc7e7eb8)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,const struct tm * time)`            | Set RTC to a given time.
`public int `[`ds1307_get_time`](#group__drivers__ds1307_1ga3376ef2d2b4bbd3a35c1fe2ec6cc79f3)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,struct tm * time)`            | Get current RTC time.
`public int `[`ds1307_halt`](#group__drivers__ds1307_1ga045ff01fcc6bbbee025a97305b6f4ce4)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev)`            | Halt clock.
`public int `[`ds1307_set_sqw_mode`](#group__drivers__ds1307_1ga039ba08fe3d9fdcc9942613b72eff6ee)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,`[`ds1307_sqw_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds1307_1gac639008da1051d2ab3b7e47764fb47e9)` mode)`            | Set mode of square wave / output driver.
`public int `[`ds1307_get_sqw_mode`](#group__drivers__ds1307_1gad9e4ebde7f41f56601fbb1951ef56bde)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev)`            | Get current mode of square wave / output driver.
`struct `[`ds1307_t`](#structds1307__t) | Device descriptor for DS1307 devices.
`struct `[`ds1307_params_t`](#structds1307__params__t) | Set of configuration parameters for DS1307 devices.

## Members

#### `define `[`DS1307_I2C_ADDRESS`](#group__drivers__ds1307_1gabda712dda70c44a70f5956f1ea8544f6) 

I2C address of DS1307 RTC.

#### `define `[`DS1307_NVRAM_MAX_SIZE`](#group__drivers__ds1307_1gaed80374c180e9e5ca7c4f9c4a5d2cf63) 

Maximum size in byte of on-chip NVRAM.

#### `enum `[`ds1307_sqw_mode_t`](#group__drivers__ds1307_1gac639008da1051d2ab3b7e47764fb47e9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DS1307_SQW_MODE_0            | OUT: 0.
DS1307_SQW_MODE_1000HZ            | SQW: 1kHz.
DS1307_SQW_MODE_4096HZ            | SQW: 4.096 kHz.
DS1307_SQW_MODE_8192HZ            | SQW: 8.192 kHz.
DS1307_SQW_MODE_32768HZ            | SQW: 32.768 kHz.
DS1307_SQW_MODE_1            | OUT: 1.

Modes for the DS1307 square wave / output driver.

#### `public int `[`ds1307_init`](#group__drivers__ds1307_1gab4b72af174b4c9e01983982efb0b4bd5)`(`[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,const `[`ds1307_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__params__t)` * params)` 

Initialize the given DS1307 device.

#### Parameters
* `dev` device descriptor of the targeted device 

* `params` device configuration (i2c bus, address and bus clock)

#### Returns
0 on success 

#### Returns
< 0 if unable to speak to the device

#### `public int `[`ds1307_set_time`](#group__drivers__ds1307_1gac5fa7433c67ef511a28aae56dc7e7eb8)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,const struct tm * time)` 

Set RTC to a given time.

#### Parameters
* `dev` device descriptor of the targeted device 

* `time` pointer to the struct holding the time to set.

#### Returns
0 on success 

#### Returns
< 0 if unable to speak to the device

#### `public int `[`ds1307_get_time`](#group__drivers__ds1307_1ga3376ef2d2b4bbd3a35c1fe2ec6cc79f3)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,struct tm * time)` 

Get current RTC time.

#### Parameters
* `dev` device descriptor of the targeted device 

* `time` pointer to the struct to write the time to.

#### Returns
0 on success 

#### Returns
< 0 if unable to speak to the device

#### `public int `[`ds1307_halt`](#group__drivers__ds1307_1ga045ff01fcc6bbbee025a97305b6f4ce4)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev)` 

Halt clock.

Can be reversed using [ds1307_set_time()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds1307_1gac5fa7433c67ef511a28aae56dc7e7eb8)

#### Parameters
* `dev` device descriptor of the targeted device

#### Returns
0 on success 

#### Returns
< 0 if unable to speak to the device

#### `public int `[`ds1307_set_sqw_mode`](#group__drivers__ds1307_1ga039ba08fe3d9fdcc9942613b72eff6ee)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev,`[`ds1307_sqw_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds1307_1gac639008da1051d2ab3b7e47764fb47e9)` mode)` 

Set mode of square wave / output driver.

To get the actual output of the driver, attach the pin via GPIO

#### Parameters
* `dev` device descriptor of the targeted device 

* `mode` mode for the square wave / output driver

#### Returns
0 on success 

#### Returns
< 0 if unable to speak to the device

#### `public int `[`ds1307_get_sqw_mode`](#group__drivers__ds1307_1gad9e4ebde7f41f56601fbb1951ef56bde)`(const `[`ds1307_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds1307.md#structds1307__t)` * dev)` 

Get current mode of square wave / output driver.

To get the actual output of the driver, attach the pin via GPIO

#### Parameters
* `dev` device descriptor of the targeted device

#### Returns
current mode of the square wave / output driver (see ds1307_sqw_mode_t) 

#### Returns
< 0 if unable to speak to the device

# struct `ds1307_t` 

Device descriptor for DS1307 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structds1307__t_1a86a4f182a88be88d907b57fe9fd1dde6) | I2C bus the device is connected to.
`public `[`nvram_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nvram_1ga45fd5da9eac26ff83fd276f58e6a1ec3)` `[`nvram`](#structds1307__t_1a87a0f649145f2a5fceec475cec1fc966) | on-chip NVRAM (see [nvram.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nvram_8h))

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structds1307__t_1a86a4f182a88be88d907b57fe9fd1dde6) 

I2C bus the device is connected to.

#### `public `[`nvram_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nvram_1ga45fd5da9eac26ff83fd276f58e6a1ec3)` `[`nvram`](#structds1307__t_1a87a0f649145f2a5fceec475cec1fc966) 

on-chip NVRAM (see [nvram.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nvram_8h))

# struct `ds1307_params_t` 

Set of configuration parameters for DS1307 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structds1307__params__t_1a6428ee275b66a4f395bc74fb8c21d13e) | I2C bus the device is connected to.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structds1307__params__t_1a6428ee275b66a4f395bc74fb8c21d13e) 

I2C bus the device is connected to.

