---
title: api-drivers_sds011.md
description: api-drivers_sds011.md
---
# group `drivers_sds011` 

Driver SDS011 Laser Dust Sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SDS011_DEVID_WILDCARD`](#group__drivers__sds011_1ga56b7bae520b479be02bc08b7b79fe51b)            | SDS011 wildcard address to address all devices.
`enum `[`@259`](#group__drivers__sds011_1ga3f4a95405348aa63ef907e692901011f)            | Named return values.
`enum `[`sds011_reporting_mode`](#group__drivers__sds011_1ga37a5c94f15aac2c47cacdb93659c271e)            | Report mode of the SDS011 sensor.
`enum `[`sds011_working_mode`](#group__drivers__sds011_1ga041c2ca47e41b0eb2b6dea76ada18790)            | Work/sleep mode of the SDS011 sensor.
`public int `[`sds011_init`](#group__drivers__sds011_1ga55610ca3adc0a93b0dad6dd82a5098d9)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,const `[`sds011_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__params__t)` * params)`            | Initialize SDS011 Laser Dust Sensor.
`public void `[`sds011_power_on`](#group__drivers__sds011_1ga1e027198652d052eb9b4396bd282bc18)`(const `[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev)`            | Enable power supply of SDS011 laser dust sensor.
`public void `[`sds011_power_off`](#group__drivers__sds011_1gad5d897bdeb40995b0f9dc3cfe43a39be)`(const `[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev)`            | Disable power supply of SDS011 laser dust sensor.
`public int `[`sds011_read`](#group__drivers__sds011_1ga641e78ed54d6e5299d400324c4c77473)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__data__t)` * data)`            | Read measurement values from SDS011 laser dust sensor.
`public int `[`sds011_register_callback`](#group__drivers__sds011_1gaece1a9ad155cc3e523d4f5f5f222bb7b)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga970798453246e274ca56d680c4345a49)` cb,void * ctx)`            | Register measurement callback.
`public int `[`sds011_get_reporting_mode`](#group__drivers__sds011_1ga4e34913157501f8d44560fc0553eb81e)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_reporting_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga12e92822077eed78fc9e5051f689a1b0)` * mode)`            | Get the current reporting mode of the sensor.
`public int `[`sds011_set_reporting_mode`](#group__drivers__sds011_1ga95eec2172abbe2e2723779d6faf5af08)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_reporting_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga12e92822077eed78fc9e5051f689a1b0)` mode)`            | Set the reporting mode of the sensor.
`public int `[`sds011_get_working_mode`](#group__drivers__sds011_1gaffea2c2913c0ffcdf42eaaf0d6a17987)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_working_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1gad0a1276d7b185081ca698cddbeaf1bf5)` * mode)`            | Get current working mode of the sensor.
`public int `[`sds011_set_working_mode`](#group__drivers__sds011_1ga9514540697308f4892cebfc5db9669af)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_working_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1gad0a1276d7b185081ca698cddbeaf1bf5)` mode)`            | Set working mode of the sensor.
`public int `[`sds011_get_working_period`](#group__drivers__sds011_1ga3dacbcdd8183ed30c0c6f18e45d31064)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint8_t * minutes)`            | Get current working period of the sensor.
`public int `[`sds011_set_working_period`](#group__drivers__sds011_1ga7321dbac13433de77d5cc967ef8dc9a5)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint8_t minutes)`            | Set working period of the sensor.
`public int `[`sds011_get_fw_version`](#group__drivers__sds011_1ga2a91f7e3b73534b45d404900758b7a60)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint8_t * year,uint8_t * mon,uint8_t * day)`            | Get firmware version of the sensor.
`public int `[`sds011_set_dev_id`](#group__drivers__sds011_1gaa48794381eff08e974f6e2d7baab0c20)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint16_t sens_dev_id)`            | Set device ID of the sensor.
`struct `[`sds011_params_t`](#structsds011__params__t) | Configuration parameters for SDS011 Laser Dust Sensor.
`struct `[`sds011_data_t`](#structsds011__data__t) | Data type for storing SDS011 sensor readings.
`struct `[`sds011_t`](#structsds011__t) | Device descriptor definition for SDS011 Laser Dust Sensor.

## Members

#### `define `[`SDS011_DEVID_WILDCARD`](#group__drivers__sds011_1ga56b7bae520b479be02bc08b7b79fe51b) 

SDS011 wildcard address to address all devices.

#### `enum `[`@259`](#group__drivers__sds011_1ga3f4a95405348aa63ef907e692901011f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDS011_OK            | all good
SDS011_INVALID_RESPONSE            | invalid response
SDS011_INVALID_CHKSUM            | invalid checksum
SDS011_ERROR            | internal error

Named return values.

#### `enum `[`sds011_reporting_mode`](#group__drivers__sds011_1ga37a5c94f15aac2c47cacdb93659c271e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDS011_RMODE_ACTIVE            | continuously reporting values
SDS011_RMODE_QUERY            | sensor needs to be queried

Report mode of the SDS011 sensor.

#### `enum `[`sds011_working_mode`](#group__drivers__sds011_1ga041c2ca47e41b0eb2b6dea76ada18790) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SDS011_WMODE_SLEEP            | laser & fan are disabled
SDS011_WMODE_WORK            | laser & fan are enabled

Work/sleep mode of the SDS011 sensor.

#### `public int `[`sds011_init`](#group__drivers__sds011_1ga55610ca3adc0a93b0dad6dd82a5098d9)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,const `[`sds011_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__params__t)` * params)` 

Initialize SDS011 Laser Dust Sensor.

#### Parameters
* `dev` device descriptor 

* `params` device configuration

`dev` != NULL 

`params` != NULL

#### Returns
SDS011_OK on success 

#### Returns
SDS011_ERROR on error

#### `public void `[`sds011_power_on`](#group__drivers__sds011_1ga1e027198652d052eb9b4396bd282bc18)`(const `[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev)` 

Enable power supply of SDS011 laser dust sensor.

#### Parameters
* `dev` device descriptor

`dev` != NULL

#### `public void `[`sds011_power_off`](#group__drivers__sds011_1gad5d897bdeb40995b0f9dc3cfe43a39be)`(const `[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev)` 

Disable power supply of SDS011 laser dust sensor.

#### Parameters
* `dev` device descriptor

`dev` != NULL

#### `public int `[`sds011_read`](#group__drivers__sds011_1ga641e78ed54d6e5299d400324c4c77473)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__data__t)` * data)` 

Read measurement values from SDS011 laser dust sensor.

#### Parameters
* `dev` device descriptor 

* `data` pointer for storing the values

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL 

`data` != NULL

#### `public int `[`sds011_register_callback`](#group__drivers__sds011_1gaece1a9ad155cc3e523d4f5f5f222bb7b)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga970798453246e274ca56d680c4345a49)` cb,void * ctx)` 

Register measurement callback.

The registered callback is executed when new measurements were
     received by the sensor. This function should be used together with
     active reporting mode of the sensor that automatically sends new
     measurements periodically (factory default setting of the sensor).

#### Parameters
* `dev` device descriptor 

* `cb` function to be called for new values (NULL for disable) 

* `ctx` context pointer that will be handed to the callback

#### Returns
SDS011_OK on success 

#### Returns
SDS011_ERROR when error occurred

`dev` != NULL

#### `public int `[`sds011_get_reporting_mode`](#group__drivers__sds011_1ga4e34913157501f8d44560fc0553eb81e)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_reporting_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga12e92822077eed78fc9e5051f689a1b0)` * mode)` 

Get the current reporting mode of the sensor.

#### Parameters
* `dev` device descriptor 

* `mode` SDS011_RMODE_ACTIVE: continuously report new values SDS011_RMODE_QUERY: new values need to be requested

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL

#### `public int `[`sds011_set_reporting_mode`](#group__drivers__sds011_1ga95eec2172abbe2e2723779d6faf5af08)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_reporting_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga12e92822077eed78fc9e5051f689a1b0)` mode)` 

Set the reporting mode of the sensor.

#### Parameters
* `dev` device descriptor 

* `mode` SDS011_RMODE_ACTIVE: continuously report new values SDS011_RMODE_QUERY: new values need to be requested

This setting is persistent even after a full power-cycle! Factory default is SDS011_RMODE_ACTIVE

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL

#### `public int `[`sds011_get_working_mode`](#group__drivers__sds011_1gaffea2c2913c0ffcdf42eaaf0d6a17987)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_working_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1gad0a1276d7b185081ca698cddbeaf1bf5)` * mode)` 

Get current working mode of the sensor.

#### Parameters
* `dev` device descriptor 

* `mode` SDS011_WMODE_SLEEP: sensor is in sleep mode (~3 mA) SDS011_WMODE_WORK: sensor is in working mode (~65 mA)

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL

#### `public int `[`sds011_set_working_mode`](#group__drivers__sds011_1ga9514540697308f4892cebfc5db9669af)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,`[`sds011_working_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1gad0a1276d7b185081ca698cddbeaf1bf5)` mode)` 

Set working mode of the sensor.

#### Parameters
* `dev` device descriptor 

* `mode` SDS011_WMODE_SLEEP: put to sleep mode (~3 mA) SDS011_WMODE_WORK: put to working mode (~65 mA)

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL

#### `public int `[`sds011_get_working_period`](#group__drivers__sds011_1ga3dacbcdd8183ed30c0c6f18e45d31064)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint8_t * minutes)` 

Get current working period of the sensor.

#### Parameters
* `dev` device descriptor 

* `minutes` working period of the sensor in minutes

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL

#### `public int `[`sds011_set_working_period`](#group__drivers__sds011_1ga7321dbac13433de77d5cc967ef8dc9a5)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint8_t minutes)` 

Set working period of the sensor.

#### Parameters
* `dev` device descriptor 

* `minutes` 0 - 30 new working period of the sensor in minutes 0 for continuous reporting mode 1 - 30 for a period of `minutes`

For values greater than 0, the active duration (fan, laser enabled) is always fixed to 30 seconds, while the sleep duration is adjusted to give an overall period of `minutes`.

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL

#### `public int `[`sds011_get_fw_version`](#group__drivers__sds011_1ga2a91f7e3b73534b45d404900758b7a60)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint8_t * year,uint8_t * mon,uint8_t * day)` 

Get firmware version of the sensor.

#### Parameters
* `dev` device descriptor 

* `year` year of the firmware version 

* `mon` month of the firmware version 

* `day` day of the firmware version

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL 

`year` != NULL 

`mon` != NULL 

`day` != NULL

#### `public int `[`sds011_set_dev_id`](#group__drivers__sds011_1gaa48794381eff08e974f6e2d7baab0c20)`(`[`sds011_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__t)` * dev,uint16_t sens_dev_id)` 

Set device ID of the sensor.

#### Parameters
* `dev` device descriptor 

* `sens_dev_id` ID as one number (ID byte 1 MSB, ID byte 2 LSB)

This setting is persistent even after a full power-cycle! Factory default is an individual ID which is printed next to the serial number barcode. For the number xxxx-abab the ID is 0xabab.

#### Returns
SDS011_OK on success 

#### Returns
SDS011_INVALID_RESPONSE when response doesn't match the request 

#### Returns
SDS011_INVALID_CHKSUM when response checksum is invalid 

#### Returns
SDS011_ERROR when other error occurred

`dev` != NULL

# struct `sds011_params_t` 

Configuration parameters for SDS011 Laser Dust Sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structsds011__params__t_1a36c4315c1efe8a88a7ad8a9b0616f54e) | UART device the sensor is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pwr_pin`](#structsds011__params__t_1a3bbac01e510c1af3bf2e193d4d7bde1c) | GPIO pin for disabling supply voltage for the sensor.
`public uint16_t `[`dev_id`](#structsds011__params__t_1a68b44a6ebfb69339e02a063d897dd8f6) | Unique sensor device ID.
`public bool `[`pwr_ah`](#structsds011__params__t_1ab43856015dd97a804122933d9e10c829) | Logic level of the power pin (true for active high)

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structsds011__params__t_1a36c4315c1efe8a88a7ad8a9b0616f54e) 

UART device the sensor is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pwr_pin`](#structsds011__params__t_1a3bbac01e510c1af3bf2e193d4d7bde1c) 

GPIO pin for disabling supply voltage for the sensor.

#### `public uint16_t `[`dev_id`](#structsds011__params__t_1a68b44a6ebfb69339e02a063d897dd8f6) 

Unique sensor device ID.

#### `public bool `[`pwr_ah`](#structsds011__params__t_1ab43856015dd97a804122933d9e10c829) 

Logic level of the power pin (true for active high)

# struct `sds011_data_t` 

Data type for storing SDS011 sensor readings.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`pm_2_5`](#structsds011__data__t_1a72a99e56f479b8cff78cb8dc11470fe5) | Particulate Matter 2.5 concentration [0.1µg/m^3].
`public uint16_t `[`pm_10`](#structsds011__data__t_1a99d746abac19c8e490731ac78630cc60) | Particulate Matter 10 concentration [0.1µg/m^3].

## Members

#### `public uint16_t `[`pm_2_5`](#structsds011__data__t_1a72a99e56f479b8cff78cb8dc11470fe5) 

Particulate Matter 2.5 concentration [0.1µg/m^3].

#### `public uint16_t `[`pm_10`](#structsds011__data__t_1a99d746abac19c8e490731ac78630cc60) 

Particulate Matter 10 concentration [0.1µg/m^3].

# struct `sds011_t` 

Device descriptor definition for SDS011 Laser Dust Sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sds011_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__params__t)` `[`params`](#structsds011__t_1a2d9d8be247421c0f74cee78b96ff69e1) | parameters for SDS011 device
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`dev_lock`](#structsds011__t_1a0cab06bfb8991ca431235c44cd274cb7) | mutex to synchronize device access
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`cb_lock`](#structsds011__t_1a024db7d6f890486d5d0182e365827d75) | mutex to synchronize callbacks
`public `[`sds011_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga970798453246e274ca56d680c4345a49)` `[`cb`](#structsds011__t_1ae9d96433c8532209fb78ae6ea05fceef) | callback deliver values async
`public void * `[`cbctx`](#structsds011__t_1a90c76924a85a9a6d0960581ec203b89e) | user context for the callback
`public uint16_t `[`checksum`](#structsds011__t_1a858832198f98082ee30d24ea6e10ac14) | iteratively calculated checksum
`public uint8_t `[`rx_mem`](#structsds011__t_1af15858190a20476287d3e45dec48fe95) | receive buffer
`public uint8_t `[`pos`](#structsds011__t_1ad507b1d394ca507b17307a5c65f4c384) | receive buffer position counter

## Members

#### `public `[`sds011_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sds011.md#structsds011__params__t)` `[`params`](#structsds011__t_1a2d9d8be247421c0f74cee78b96ff69e1) 

parameters for SDS011 device

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`dev_lock`](#structsds011__t_1a0cab06bfb8991ca431235c44cd274cb7) 

mutex to synchronize device access

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`cb_lock`](#structsds011__t_1a024db7d6f890486d5d0182e365827d75) 

mutex to synchronize callbacks

#### `public `[`sds011_callback_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sds011_1ga970798453246e274ca56d680c4345a49)` `[`cb`](#structsds011__t_1ae9d96433c8532209fb78ae6ea05fceef) 

callback deliver values async

#### `public void * `[`cbctx`](#structsds011__t_1a90c76924a85a9a6d0960581ec203b89e) 

user context for the callback

#### `public uint16_t `[`checksum`](#structsds011__t_1a858832198f98082ee30d24ea6e10ac14) 

iteratively calculated checksum

#### `public uint8_t `[`rx_mem`](#structsds011__t_1af15858190a20476287d3e45dec48fe95) 

receive buffer

#### `public uint8_t `[`pos`](#structsds011__t_1ad507b1d394ca507b17307a5c65f4c384) 

receive buffer position counter

