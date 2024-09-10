---
title: api-drivers_hts221.md
description: api-drivers_hts221.md
---
# group `drivers_hts221` 

Driver for the ST HTS221 digital Humidity Sensor.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`HTS221_I2C_ADDRESS`](#group__drivers__hts221_1ga48cf15ec45227bb2ecbaa0ccfb8f949e)            | Default I2C bus address (7 Bit) of HTS221 devices.
`enum `[`@180`](#group__drivers__hts221_1ga70bd01545ca54514ee53e0eb670b9562)            | Return values and error codes.
`public int `[`hts221_init`](#group__drivers__hts221_1ga168e500036775bef04c84d3f1ccc0f7b)`(`[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,const `[`hts221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__params__t)` * params)`            | Initialize the given HTS221 device.
`public int `[`hts221_reboot`](#group__drivers__hts221_1ga1e3c20ce27a4d5650d78438f8a41dee9)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)`            | Reboot device and reload base configuration.
`public int `[`hts221_one_shot`](#group__drivers__hts221_1gad2e27621308a9153e2ceb4f1897ea01c)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)`            | Set device to one shot measurement.
`public int `[`hts221_set_rate`](#group__drivers__hts221_1ga9ec0f43bf44001381bf3e5e19f817652)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,const uint8_t rate)`            | Set device to continuous measurements.
`public int `[`hts221_power_on`](#group__drivers__hts221_1gacf3b3c0e6a9c488a75e6f3d5b1271c99)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)`            | Set device to active.
`public int `[`hts221_power_off`](#group__drivers__hts221_1ga09ca21bf4c982c01755bf32a8dd14ae7)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)`            | Set device to power down.
`public int `[`hts221_get_state`](#group__drivers__hts221_1gadd6cb60f30fa869c634cf114cea50ac6)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)`            | Set device to power down.
`public int `[`hts221_read_humidity`](#group__drivers__hts221_1ga0d1ccb6eac7b40cd718b5c2035d1d3ac)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,uint16_t * val)`            | Reading humidity and temperature.
`public int `[`hts221_read_temperature`](#group__drivers__hts221_1ga9a5980aaafbaae2c34550a90ec07e4bf)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,int16_t * val)`            | Reading humidity and temperature.
`struct `[`hts221_params_t`](#structhts221__params__t) | Parameters needed for device initialization.
`struct `[`hts221_t`](#structhts221__t) | Device descriptor for HTS221 sensors.

## Members

#### `define `[`HTS221_I2C_ADDRESS`](#group__drivers__hts221_1ga48cf15ec45227bb2ecbaa0ccfb8f949e) 

Default I2C bus address (7 Bit) of HTS221 devices.

#### `enum `[`@180`](#group__drivers__hts221_1ga70bd01545ca54514ee53e0eb670b9562) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
HTS221_OK            | 
HTS221_ERROR            | 
HTS221_NOBUS            | 
HTS221_NODEV            | 

Return values and error codes.

#### `public int `[`hts221_init`](#group__drivers__hts221_1ga168e500036775bef04c84d3f1ccc0f7b)`(`[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,const `[`hts221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__params__t)` * params)` 

Initialize the given HTS221 device.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` configuration parameters

#### Returns
HTS221_OK on success 

#### Returns
HTS221_NOBUS if initialization of I2C bus fails 

#### Returns
HTS221_NODEV if no HTS221 device found on bus

#### `public int `[`hts221_reboot`](#group__drivers__hts221_1ga1e3c20ce27a4d5650d78438f8a41dee9)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)` 

Reboot device and reload base configuration.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success, or error otherwise

#### `public int `[`hts221_one_shot`](#group__drivers__hts221_1gad2e27621308a9153e2ceb4f1897ea01c)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)` 

Set device to one shot measurement.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success, or error otherwise

#### `public int `[`hts221_set_rate`](#group__drivers__hts221_1ga9ec0f43bf44001381bf3e5e19f817652)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,const uint8_t rate)` 

Set device to continuous measurements.

#### Parameters
* `dev` device descriptor of sensor 

* `rate` conversion rate for continuous mode

#### Returns
0 on success, or error otherwise

#### `public int `[`hts221_power_on`](#group__drivers__hts221_1gacf3b3c0e6a9c488a75e6f3d5b1271c99)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)` 

Set device to active.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success, or error otherwise

#### `public int `[`hts221_power_off`](#group__drivers__hts221_1ga09ca21bf4c982c01755bf32a8dd14ae7)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)` 

Set device to power down.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success, or error otherwise

#### `public int `[`hts221_get_state`](#group__drivers__hts221_1gadd6cb60f30fa869c634cf114cea50ac6)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev)` 

Set device to power down.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
>=0 on success 

#### Returns
-HTS221_NOBUS on error

#### `public int `[`hts221_read_humidity`](#group__drivers__hts221_1ga0d1ccb6eac7b40cd718b5c2035d1d3ac)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,uint16_t * val)` 

Reading humidity and temperature.

#### Parameters
* `dev` device descriptor of sensor 

* `val` humidity [in 10 * percent relative]

#### Returns
0 on success, or error otherwise

#### `public int `[`hts221_read_temperature`](#group__drivers__hts221_1ga9a5980aaafbaae2c34550a90ec07e4bf)`(const `[`hts221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__t)` * dev,int16_t * val)` 

Reading humidity and temperature.

#### Parameters
* `dev` device descriptor of sensor 

* `val` temperature [in 100 * degree centigrade]

#### Returns
0 on success, or error otherwise

# struct `hts221_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhts221__params__t_1a1eefb20dd0588008a41b17f14a5a8c0b) | bus the device is connected to
`public uint8_t `[`addr`](#structhts221__params__t_1aee87f26f8cb313cc872bc5a14eec1f20) | address on that bus
`public uint8_t `[`avgx`](#structhts221__params__t_1a3aa4cf78191473a06236bf3ad4835e65) | average sampling of humidity and temperature
`public uint8_t `[`rate`](#structhts221__params__t_1a425f798b66eef3e9d9878973baf2b482) | output data rate

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structhts221__params__t_1a1eefb20dd0588008a41b17f14a5a8c0b) 

bus the device is connected to

#### `public uint8_t `[`addr`](#structhts221__params__t_1aee87f26f8cb313cc872bc5a14eec1f20) 

address on that bus

#### `public uint8_t `[`avgx`](#structhts221__params__t_1a3aa4cf78191473a06236bf3ad4835e65) 

average sampling of humidity and temperature

#### `public uint8_t `[`rate`](#structhts221__params__t_1a425f798b66eef3e9d9878973baf2b482) 

output data rate

# struct `hts221_t` 

Device descriptor for HTS221 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`hts221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__params__t)` `[`p`](#structhts221__t_1afcfc84aa4920d0b01b5398b49228870a) | Configuration parameters.
`public int16_t `[`h0_rh`](#structhts221__t_1ae6ebf5125e224669a29bcda6b16f49fc) | lower humitidy reference
`public int16_t `[`h1_rh`](#structhts221__t_1afae8eff074e1d3b47151f21f6c6152ad) | upper humitidy reference
`public int16_t `[`h0_t0_out`](#structhts221__t_1a0abd447a69cb39842e13537aafc9486b) | lower humitidy to temperature reference
`public int16_t `[`h1_t0_out`](#structhts221__t_1a675693ee7aff2c051a152db2fbb90c05) | upper humitidy to temperature reference
`public int16_t `[`t0_degc`](#structhts221__t_1a3acdeb9c2233995a820789d5d2ae9f74) | lower temperature reference in degC
`public int16_t `[`t1_degc`](#structhts221__t_1a1633bac117e4597e5abf2c637ad1924d) | upper temperature reference in degC
`public int16_t `[`t0_out`](#structhts221__t_1a6b723543b0065e91a90ca3e9cc05b1e8) | lower temperature reference raw value
`public int16_t `[`t1_out`](#structhts221__t_1a3b40997e3e55d415b04aad95c95ed085) | upper temperature reference raw value

## Members

#### `public `[`hts221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_hts221.md#structhts221__params__t)` `[`p`](#structhts221__t_1afcfc84aa4920d0b01b5398b49228870a) 

Configuration parameters.

#### `public int16_t `[`h0_rh`](#structhts221__t_1ae6ebf5125e224669a29bcda6b16f49fc) 

lower humitidy reference

#### `public int16_t `[`h1_rh`](#structhts221__t_1afae8eff074e1d3b47151f21f6c6152ad) 

upper humitidy reference

#### `public int16_t `[`h0_t0_out`](#structhts221__t_1a0abd447a69cb39842e13537aafc9486b) 

lower humitidy to temperature reference

#### `public int16_t `[`h1_t0_out`](#structhts221__t_1a675693ee7aff2c051a152db2fbb90c05) 

upper humitidy to temperature reference

#### `public int16_t `[`t0_degc`](#structhts221__t_1a3acdeb9c2233995a820789d5d2ae9f74) 

lower temperature reference in degC

#### `public int16_t `[`t1_degc`](#structhts221__t_1a1633bac117e4597e5abf2c637ad1924d) 

upper temperature reference in degC

#### `public int16_t `[`t0_out`](#structhts221__t_1a6b723543b0065e91a90ca3e9cc05b1e8) 

lower temperature reference raw value

#### `public int16_t `[`t1_out`](#structhts221__t_1a3b40997e3e55d415b04aad95c95ed085) 

upper temperature reference raw value

