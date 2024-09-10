---
title: api-drivers_isl29020.md
description: api-drivers_isl29020.md
---
# group `drivers_isl29020` 

Device driver for the ISL29020 light sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`isl29020_mode_t`](#group__drivers__isl29020_1ga438fb6b60daab5b8c35f39e6d37efa65)            | Possible modes for the ISL29020 sensor.
`enum `[`isl29020_range_t`](#group__drivers__isl29020_1gaa10941e8ec3e72d3f55dd42097441ec7)            | Possible range values for the ISL29020 sensor.
`public int `[`isl29020_init`](#group__drivers__isl29020_1ga1d005c7a9f9e959c0700f6500d0b83d3)`(`[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev,const `[`isl29020_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__params__t)` * params)`            | Initialize a new ISL29020 device.
`public int `[`isl29020_read`](#group__drivers__isl29020_1ga96f1e0ef9efe4d6385f7a3aea90199f9)`(const `[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev)`            | Read a lighting value from the sensor, the result is given in lux.
`public int `[`isl29020_enable`](#group__drivers__isl29020_1ga642862b672af5b0baf4b8cb3ac5eac7d)`(const `[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev)`            | Enable the given sensor.
`public int `[`isl29020_disable`](#group__drivers__isl29020_1ga4c74f9a4002e5acf3d4d2e43dad1b4cb)`(const `[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev)`            | Disable the given sensor.
`struct `[`isl29020_params_t`](#structisl29020__params__t) | Data structure holding the full set of configuration parameters.
`struct `[`isl29020_t`](#structisl29020__t) | Device descriptor for ISL29020 sensors.

## Members

#### `enum `[`isl29020_mode_t`](#group__drivers__isl29020_1ga438fb6b60daab5b8c35f39e6d37efa65) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29020_MODE_AMBIENT            | set sensor to detect ambient light
ISL29020_MODE_IR            | set sensor to detect infrared light

Possible modes for the ISL29020 sensor.

#### `enum `[`isl29020_range_t`](#group__drivers__isl29020_1gaa10941e8ec3e72d3f55dd42097441ec7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ISL29020_RANGE_1K            | set range to 0-1000 lux
ISL29020_RANGE_4K            | set range to 0-4000 lux
ISL29020_RANGE_16K            | set range to 0-16000 lux
ISL29020_RANGE_64K            | set range to 0-64000 lux

Possible range values for the ISL29020 sensor.

#### `public int `[`isl29020_init`](#group__drivers__isl29020_1ga1d005c7a9f9e959c0700f6500d0b83d3)`(`[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev,const `[`isl29020_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__params__t)` * params)` 

Initialize a new ISL29020 device.

#### Parameters
* `dev` device descriptor of an ISL29020 device 

* `params` initialization parameters

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`isl29020_read`](#group__drivers__isl29020_1ga96f1e0ef9efe4d6385f7a3aea90199f9)`(const `[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev)` 

Read a lighting value from the sensor, the result is given in lux.

#### Parameters
* `dev` device descriptor of an ISL29020 device

#### Returns
the measured brightness in lux 

#### Returns
-1 on error

#### `public int `[`isl29020_enable`](#group__drivers__isl29020_1ga642862b672af5b0baf4b8cb3ac5eac7d)`(const `[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev)` 

Enable the given sensor.

#### Parameters
* `dev` device descriptor of an ISL29020 device

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`isl29020_disable`](#group__drivers__isl29020_1ga4c74f9a4002e5acf3d4d2e43dad1b4cb)`(const `[`isl29020_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__t)` * dev)` 

Disable the given sensor.

#### Parameters
* `dev` device descriptor of an ISL29020 device

#### Returns
0 on success 

#### Returns
-1 on error

# struct `isl29020_params_t` 

Data structure holding the full set of configuration parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structisl29020__params__t_1a9ea96ff7606c8d70d4b52144f4282a4e) | I2C bus the device is connected to.
`public uint8_t `[`addr`](#structisl29020__params__t_1a2dd2c4e1f5ce5aebac1789989bf2134a) | address on that bus
`public `[`isl29020_range_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29020_1gaa10941e8ec3e72d3f55dd42097441ec7)` `[`range`](#structisl29020__params__t_1a22be20baf81cc12779827fad271d6e2e) | range setting to use
`public `[`isl29020_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29020_1ga438fb6b60daab5b8c35f39e6d37efa65)` `[`mode`](#structisl29020__params__t_1a83bae3ae6f3bc9935f0274608eae369b) | measurement mode to use

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structisl29020__params__t_1a9ea96ff7606c8d70d4b52144f4282a4e) 

I2C bus the device is connected to.

#### `public uint8_t `[`addr`](#structisl29020__params__t_1a2dd2c4e1f5ce5aebac1789989bf2134a) 

address on that bus

#### `public `[`isl29020_range_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29020_1gaa10941e8ec3e72d3f55dd42097441ec7)` `[`range`](#structisl29020__params__t_1a22be20baf81cc12779827fad271d6e2e) 

range setting to use

#### `public `[`isl29020_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__isl29020_1ga438fb6b60daab5b8c35f39e6d37efa65)` `[`mode`](#structisl29020__params__t_1a83bae3ae6f3bc9935f0274608eae369b) 

measurement mode to use

# struct `isl29020_t` 

Device descriptor for ISL29020 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`isl29020_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__params__t)` `[`params`](#structisl29020__t_1aa50f65b5d403cba9b820268cbd298255) | device initialization parameters
`public float `[`lux_fac`](#structisl29020__t_1aa9519849f566bdc1d1679ff59ac19bc3) | factor to calculate actual lux value

## Members

#### `public `[`isl29020_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_isl29020.md#structisl29020__params__t)` `[`params`](#structisl29020__t_1aa50f65b5d403cba9b820268cbd298255) 

device initialization parameters

#### `public float `[`lux_fac`](#structisl29020__t_1aa9519849f566bdc1d1679ff59ac19bc3) 

factor to calculate actual lux value

