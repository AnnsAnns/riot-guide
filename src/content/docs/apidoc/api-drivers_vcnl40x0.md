---
title: api-drivers_vcnl40x0.md
description: api-drivers_vcnl40x0.md
---
# group `drivers_vcnl40x0` 

Device driver interface for the VCNL40X0 Proximity and Ambient Light Sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@277`](#group__drivers__vcnl40x0_1ga27c1625aa5fde74a6dec3d424733c579)            | Proximity measure rate.
`enum `[`@278`](#group__drivers__vcnl40x0_1gaab690a854cdb56b09edd0bc9e13b744d)            | Ambient light measurement rate.
`enum `[`@279`](#group__drivers__vcnl40x0_1ga930200ae35b2712706fbd833d42a70f3)            | Ambient light number of conversions during one measurement cycle.
`enum `[`@280`](#group__drivers__vcnl40x0_1ga71e6f8c0381e3283cc05b722216c4794)            | Status and error return codes.
`public int `[`vcnl40x0_init`](#group__drivers__vcnl40x0_1ga0c78d7dc84d48e638d88f70470724fd3)`(`[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev,const `[`vcnl40x0_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__params__t)` * params)`            | Initialize the given VCNL40X0 device.
`public uint16_t `[`vcnl40x0_read_proximity`](#group__drivers__vcnl40x0_1ga79b2b5d03f1735faacd33b31066812ae)`(const `[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev)`            | Read proximity value from the vcnl40X0 device.
`public uint16_t `[`vcnl40x0_read_ambient_light`](#group__drivers__vcnl40x0_1gaa4a430f8f567351126f928715c2b4025)`(const `[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev)`            | Read ambient light value from the vcnl40X0 device.
`public uint16_t `[`vcnl40x0_read_illuminance`](#group__drivers__vcnl40x0_1gacae25efb960afeae76f33ea51203aeee)`(const `[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev)`            | Read illuminance value from the vcnl40X0 device.
`struct `[`vcnl40x0_params_t`](#structvcnl40x0__params__t) | Device initialization parameters.
`struct `[`vcnl40x0_t`](#structvcnl40x0__t) | Device descriptor for the VCNL40X0 sensor.

## Members

#### `enum `[`@277`](#group__drivers__vcnl40x0_1ga27c1625aa5fde74a6dec3d424733c579) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VCNL40X0_PROXIMITY_RATE_2            | 1.95 measurements/s (default)
VCNL40X0_PROXIMITY_RATE_4            | 3.90625 measurements/s
VCNL40X0_PROXIMITY_RATE_8            | 7.8125 measurements/s
VCNL40X0_PROXIMITY_RATE_16            | 16.625 measurements/s
VCNL40X0_PROXIMITY_RATE_31            | 31.25 measurements/s
VCNL40X0_PROXIMITY_RATE_62            | 62.5 measurements/s
VCNL40X0_PROXIMITY_RATE_125            | 125 measurements/s
VCNL40X0_PROXIMITY_RATE_250            | 250 measurements/s

Proximity measure rate.

#### `enum `[`@278`](#group__drivers__vcnl40x0_1gaab690a854cdb56b09edd0bc9e13b744d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VCNL40X0_AMBIENT_RATE_1            | 1 sample/s
VCNL40X0_AMBIENT_RATE_2            | 2 sample/s (default)
VCNL40X0_AMBIENT_RATE_3            | 3 sample/s
VCNL40X0_AMBIENT_RATE_4            | 4 sample/s
VCNL40X0_AMBIENT_RATE_5            | 5 sample/s
VCNL40X0_AMBIENT_RATE_6            | 6 sample/s
VCNL40X0_AMBIENT_RATE_8            | 8 sample/s
VCNL40X0_AMBIENT_RATE_10            | 10 sample/s

Ambient light measurement rate.

#### `enum `[`@279`](#group__drivers__vcnl40x0_1ga930200ae35b2712706fbd833d42a70f3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VCNL40X0_AMBIENT_AVERAGE_1            | Decimal value 1.
VCNL40X0_AMBIENT_AVERAGE_2            | Decimal value 2.
VCNL40X0_AMBIENT_AVERAGE_4            | Decimal value 4.
VCNL40X0_AMBIENT_AVERAGE_8            | Decimal value 8.
VCNL40X0_AMBIENT_AVERAGE_16            | Decimal value 16.
VCNL40X0_AMBIENT_AVERAGE_32            | Decimal value 32 (default)
VCNL40X0_AMBIENT_AVERAGE_64            | Decimal value 64.
VCNL40X0_AMBIENT_AVERAGE_128            | Decimal value 128.

Ambient light number of conversions during one measurement cycle.

Number of conversions = 2^decimal value

#### `enum `[`@280`](#group__drivers__vcnl40x0_1ga71e6f8c0381e3283cc05b722216c4794) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VCNL40X0_OK            | Everything was fine.
VCNL40X0_ERR_I2C            | Error initializing the I2C bus.
VCNL40X0_ERR_NODEV            | Error wrong device.

Status and error return codes.

#### `public int `[`vcnl40x0_init`](#group__drivers__vcnl40x0_1ga0c78d7dc84d48e638d88f70470724fd3)`(`[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev,const `[`vcnl40x0_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__params__t)` * params)` 

Initialize the given VCNL40X0 device.

#### Parameters
* `dev` Initialized device descriptor of VCNL40X0 device 

* `params` The parameters for the VCNL40X0 device

#### Returns
VCNL40X0_OK on success 

#### Returns
-VCNL40X0_ERR_I2C if given I2C is not enabled in board config 

#### Returns
-VCNL40X0_ERR_NODEV if not a vcnl40X0 device

#### `public uint16_t `[`vcnl40x0_read_proximity`](#group__drivers__vcnl40x0_1ga79b2b5d03f1735faacd33b31066812ae)`(const `[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev)` 

Read proximity value from the vcnl40X0 device.

#### Parameters
* `dev` Device descriptor of VCNL40X0 device to read from

#### Returns
Proximity in counts

#### `public uint16_t `[`vcnl40x0_read_ambient_light`](#group__drivers__vcnl40x0_1gaa4a430f8f567351126f928715c2b4025)`(const `[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev)` 

Read ambient light value from the vcnl40X0 device.

#### Parameters
* `dev` Device descriptor of VCNL40X0 device to read from

#### Returns
Ambient light in counts

#### `public uint16_t `[`vcnl40x0_read_illuminance`](#group__drivers__vcnl40x0_1gacae25efb960afeae76f33ea51203aeee)`(const `[`vcnl40x0_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__t)` * dev)` 

Read illuminance value from the vcnl40X0 device.

#### Parameters
* `dev` Device descriptor of VCNL40X0 device to read from

#### Returns
Illuminance in lux

# struct `vcnl40x0_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structvcnl40x0__params__t_1a9c94827c21ef8d02340fef3dd6ceb017) | I2C device which is used.
`public uint8_t `[`i2c_addr`](#structvcnl40x0__params__t_1a19995210101da6154a82dc9b4384c495) | Address on I2C bus.
`public uint8_t `[`led_current`](#structvcnl40x0__params__t_1a482cdc65fd2f9461f77859648fb6e35e) | LED current.
`public uint8_t `[`proximity_rate`](#structvcnl40x0__params__t_1a7c4115e132363d4ede3571861845a5c8) | Proximity rate.
`public uint8_t `[`ambient_rate`](#structvcnl40x0__params__t_1a0ba6bff0e6603008fe427aa0427bf91b) | Ambient light rate.
`public uint8_t `[`ambient_avg`](#structvcnl40x0__params__t_1a6a217f7f0d45fa6e6d251258a728b0c5) | Ambient light conversion average.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structvcnl40x0__params__t_1a9c94827c21ef8d02340fef3dd6ceb017) 

I2C device which is used.

#### `public uint8_t `[`i2c_addr`](#structvcnl40x0__params__t_1a19995210101da6154a82dc9b4384c495) 

Address on I2C bus.

#### `public uint8_t `[`led_current`](#structvcnl40x0__params__t_1a482cdc65fd2f9461f77859648fb6e35e) 

LED current.

#### `public uint8_t `[`proximity_rate`](#structvcnl40x0__params__t_1a7c4115e132363d4ede3571861845a5c8) 

Proximity rate.

#### `public uint8_t `[`ambient_rate`](#structvcnl40x0__params__t_1a0ba6bff0e6603008fe427aa0427bf91b) 

Ambient light rate.

#### `public uint8_t `[`ambient_avg`](#structvcnl40x0__params__t_1a6a217f7f0d45fa6e6d251258a728b0c5) 

Ambient light conversion average.

# struct `vcnl40x0_t` 

Device descriptor for the VCNL40X0 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`vcnl40x0_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__params__t)` `[`params`](#structvcnl40x0__t_1a1020d81f717124c563c6093b29d26c9d) | Device parameters.

## Members

#### `public `[`vcnl40x0_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vcnl40x0.md#structvcnl40x0__params__t)` `[`params`](#structvcnl40x0__t_1a1020d81f717124c563c6093b29d26c9d) 

Device parameters.

