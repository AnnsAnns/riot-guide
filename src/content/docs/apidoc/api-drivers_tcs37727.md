---
title: api-drivers_tcs37727.md
description: api-drivers_tcs37727.md
---
# group `drivers_tcs37727` 

Driver for the AMS TCS37727 Color Light-To-Digital Converter.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`TCS37727_I2C_ADDRESS`](#group__drivers__tcs37727_1gada0d3fdf50833fe6d8e1968f6115ecbf)            | Default Device Address.
`enum `[`@273`](#group__drivers__tcs37727_1ga3b7c5804a12566fee0141f284efcb572)            | Possible TCS27737 return values.
`public int `[`tcs37727_init`](#group__drivers__tcs37727_1gaff5677adb0695a8a6aa93c73cfdcfc42)`(`[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev,const `[`tcs37727_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__params__t)` * params)`            | Initialize the given TCS37727 sensor.
`public void `[`tcs37727_set_rgbc_active`](#group__drivers__tcs37727_1ga3e444464184971a6779ba33fba3f4e93)`(const `[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev)`            | Set RGBC enable, this activates periodic RGBC measurements.
`public void `[`tcs37727_set_rgbc_standby`](#group__drivers__tcs37727_1ga1734e0d4171a9233e589178c61af3619)`(const `[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev)`            | Set RGBC disable, this deactivates periodic RGBC measurements.
`public void `[`tcs37727_read`](#group__drivers__tcs37727_1ga674e4fef2b342cba720b2fdf35b5b297)`(const `[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev,`[`tcs37727_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__data__t)` * data)`            | Read sensor's data.
`struct `[`tcs37727_data_t`](#structtcs37727__data__t) | Struct for storing TCS37727 sensor data.
`struct `[`tcs37727_params_t`](#structtcs37727__params__t) | TCS37727 configuration parameters.
`struct `[`tcs37727_t`](#structtcs37727__t) | Device descriptor for TCS37727 sensors.

## Members

#### `define `[`TCS37727_I2C_ADDRESS`](#group__drivers__tcs37727_1gada0d3fdf50833fe6d8e1968f6115ecbf) 

Default Device Address.

#### `enum `[`@273`](#group__drivers__tcs37727_1ga3b7c5804a12566fee0141f284efcb572) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TCS37727_OK            | everything worked as expected
TCS37727_NOBUS            | access to the configured I2C bus failed
TCS37727_NODEV            | no TCS37727 device found on the bus

Possible TCS27737 return values.

#### `public int `[`tcs37727_init`](#group__drivers__tcs37727_1gaff5677adb0695a8a6aa93c73cfdcfc42)`(`[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev,const `[`tcs37727_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__params__t)` * params)` 

Initialize the given TCS37727 sensor.

The sensor is initialized in RGBC only mode with proximity detection turned off.

The gain will be initially set to 4x, but it will be adjusted

The gain value will be initially set to 4x, but it will be automatically adjusted during runtime.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` static configuration parameters

#### Returns
TCS27737_OK on success 

#### Returns
TCS37727_NOBUS if initialization of I2C bus fails 

#### Returns
TCS37727_NODEV if no sensor can be found

#### `public void `[`tcs37727_set_rgbc_active`](#group__drivers__tcs37727_1ga3e444464184971a6779ba33fba3f4e93)`(const `[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev)` 

Set RGBC enable, this activates periodic RGBC measurements.

#### Parameters
* `dev` device descriptor of sensor

#### `public void `[`tcs37727_set_rgbc_standby`](#group__drivers__tcs37727_1ga1734e0d4171a9233e589178c61af3619)`(const `[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev)` 

Set RGBC disable, this deactivates periodic RGBC measurements.

Also turns off the sensor when proximity measurement is disabled.

#### Parameters
* `dev` device descriptor of sensor

#### `public void `[`tcs37727_read`](#group__drivers__tcs37727_1ga674e4fef2b342cba720b2fdf35b5b297)`(const `[`tcs37727_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__t)` * dev,`[`tcs37727_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__data__t)` * data)` 

Read sensor's data.

Besides an Autogain routine is called. If a maximum or minimum threshold value of the channel clear is reached, then the gain will be changed correspond to max or min threshold.

#### Parameters
* `dev` device descriptor of sensor 

* `data` device sensor data, MUST not be NULL

# struct `tcs37727_data_t` 

Struct for storing TCS37727 sensor data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`red`](#structtcs37727__data__t_1a38aedacad965c30f6616a52596b91656) | IR compensated channels red.
`public uint32_t `[`green`](#structtcs37727__data__t_1a33762740a36c0236bd67128dc3d9a9a5) | IR compensated channels green.
`public uint32_t `[`blue`](#structtcs37727__data__t_1a64035bc76aa88c1a5a23a8bb0b784e21) | IR compensated channels blue.
`public uint32_t `[`clear`](#structtcs37727__data__t_1a471db7889eb3568e96d2e0d78ce330f2) | channels clear
`public uint32_t `[`lux`](#structtcs37727__data__t_1ad86fbebe093d3b4a5b1781e7bc43eaf4) | Lux.
`public uint32_t `[`ct`](#structtcs37727__data__t_1acd39f9adcb1635c81d6d52c48090f40e) | Color temperature.

## Members

#### `public uint32_t `[`red`](#structtcs37727__data__t_1a38aedacad965c30f6616a52596b91656) 

IR compensated channels red.

#### `public uint32_t `[`green`](#structtcs37727__data__t_1a33762740a36c0236bd67128dc3d9a9a5) 

IR compensated channels green.

#### `public uint32_t `[`blue`](#structtcs37727__data__t_1a64035bc76aa88c1a5a23a8bb0b784e21) 

IR compensated channels blue.

#### `public uint32_t `[`clear`](#structtcs37727__data__t_1a471db7889eb3568e96d2e0d78ce330f2) 

channels clear

#### `public uint32_t `[`lux`](#structtcs37727__data__t_1ad86fbebe093d3b4a5b1781e7bc43eaf4) 

Lux.

#### `public uint32_t `[`ct`](#structtcs37727__data__t_1acd39f9adcb1635c81d6d52c48090f40e) 

Color temperature.

# struct `tcs37727_params_t` 

TCS37727 configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structtcs37727__params__t_1a84a19531acfb0237ab52f0ab576bfab8) | I2C bus the sensor is connected to.
`public uint8_t `[`addr`](#structtcs37727__params__t_1a4cf474cdf4cc40f08a3010c0da8803cf) | the sensors address on the I2C bus
`public uint32_t `[`atime`](#structtcs37727__params__t_1a7b5b991326d502df6612dacab9cac8d8) | conversion time in microseconds

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structtcs37727__params__t_1a84a19531acfb0237ab52f0ab576bfab8) 

I2C bus the sensor is connected to.

#### `public uint8_t `[`addr`](#structtcs37727__params__t_1a4cf474cdf4cc40f08a3010c0da8803cf) 

the sensors address on the I2C bus

#### `public uint32_t `[`atime`](#structtcs37727__params__t_1a7b5b991326d502df6612dacab9cac8d8) 

conversion time in microseconds

# struct `tcs37727_t` 

Device descriptor for TCS37727 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`tcs37727_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__params__t)` `[`p`](#structtcs37727__t_1a04ff7d05520ac4847177e49257e70dc3) | device configuration
`public int `[`again`](#structtcs37727__t_1a45b8438459f52938498c22e81aaa97d7) | amount of gain

## Members

#### `public `[`tcs37727_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tcs37727.md#structtcs37727__params__t)` `[`p`](#structtcs37727__t_1a04ff7d05520ac4847177e49257e70dc3) 

device configuration

#### `public int `[`again`](#structtcs37727__t_1a45b8438459f52938498c22e81aaa97d7) 

amount of gain

