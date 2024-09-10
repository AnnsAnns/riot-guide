---
title: api-drivers_ds3231.md
description: api-drivers_ds3231.md
---
# group `drivers_ds3231` 

Driver for the Maxim DS3231 extremely accurate RTC.

AboutThis module implements a device driver for Maxim DS3231 RTC.

Implementation statusThe current implementation does only support reading and setting of time registers as well as reading the temperature register and configuring the aging offset.

Configuring the square wave output is not yet supported.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DS3231_I2C_ADDR`](#group__drivers__ds3231_1ga180301d20436a62982bfba72292ca191)            | Default address of DS3231 sensors.
`enum `[`@171`](#group__drivers__ds3231_1ga9d62e2a4d6edc3a479d15fdf213decd0)            | Configuration options.
`enum `[`ds3231_alm_1_mode_t`](#group__drivers__ds3231_1ga850bdc21e0c9ecd7430e7d29bb5c857b)            | Alarm trigger type of alarm 1 for DS3231 devices.
`enum `[`ds3231_alm_2_mode_t`](#group__drivers__ds3231_1gac56f86335bd86b0d26b626384a3e5d7d)            | Alarm trigger type of alarm 2 for DS3231 devices.
`public int `[`ds3231_init`](#group__drivers__ds3231_1gaa6095666756932bccf316044e04d64fd)`(`[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,const `[`ds3231_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__params__t)` * params)`            | Initialize the given DS3231 device.
`public int `[`ds3231_get_time`](#group__drivers__ds3231_1ga9d34ae7f1a5995efcc4db971b968b019)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,struct tm * time)`            | Get date and time from the device.
`public int `[`ds3231_set_time`](#group__drivers__ds3231_1ga469cd84e0376553996157a6e804a93ba)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,const struct tm * time)`            | Set date and time of the device.
`public int `[`ds3231_set_alarm_1`](#group__drivers__ds3231_1gab26528577b6717c00d07347d281a0137)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,struct tm * time,`[`ds3231_alm_1_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds3231_1ga850bdc21e0c9ecd7430e7d29bb5c857b)` trigger)`            | Set alarm 1 of the device.
`public int `[`ds3231_set_alarm_2`](#group__drivers__ds3231_1ga72a11fa913cf4c9a92952fabf04c6113)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,struct tm * time,`[`ds3231_alm_2_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds3231_1gac56f86335bd86b0d26b626384a3e5d7d)` trigger)`            | Set alarm 2 of the device.
`public int `[`ds3231_clear_alarm_1_flag`](#group__drivers__ds3231_1gaf458eceb7088265853211d7ba260e0ac)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)`            | Clear alarm 1 flag (A1F)
`public int `[`ds3231_clear_alarm_2_flag`](#group__drivers__ds3231_1ga19ec071ca0693f7386d95cd484cb9d7f)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)`            | Clear alarm 2 flag (A2F)
`public int `[`ds3231_get_alarm_1_flag`](#group__drivers__ds3231_1gad970e29e9a258b5d763d14933a3ea2ea)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool * flag)`            | Get the state of alarm 1 flag (A1F)
`public int `[`ds3231_get_alarm_2_flag`](#group__drivers__ds3231_1gaa458972a5476bba2d7872536a65df7bb)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool * flag)`            | Get the state of alarm 2 flag (A2F)
`public int `[`ds3231_toggle_alarm_1`](#group__drivers__ds3231_1ga647bfd256c3d96a590e3daa1f6df9a0b)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool enable)`            | Enable/Disable alarm 1 interrupt on the device.
`public int `[`ds3231_toggle_alarm_2`](#group__drivers__ds3231_1ga35afe62305300a2d67607ba2eccc1843)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool enable)`            | Enable/Disable alarm 2 interrupt on the device.
`public int `[`ds3231_get_aging_offset`](#group__drivers__ds3231_1ga5fb4ef10a9301aaa3a2108c0ee52b1dc)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,int8_t * offset)`            | Get the configured aging offset (see datasheet for more information)
`public int `[`ds3231_set_aging_offset`](#group__drivers__ds3231_1gae19b58d0ee9fe5186716bdbcf6327a2f)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,int8_t offset)`            | Set the aging offset (see datasheet for more information)
`public int `[`ds3231_get_temp`](#group__drivers__ds3231_1ga4cbe50540c88bc878ee99e8d7bfba459)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,int16_t * temp)`            | Get temperature from the device.
`public int `[`ds3231_enable_bat`](#group__drivers__ds3231_1ga516c0c885ea27118a29137428f4e73b0)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)`            | Enable the backup battery.
`public int `[`ds3231_disable_bat`](#group__drivers__ds3231_1gafd8ace8906f00de9f1377f96492f5f71)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)`            | Disable the backup battery.
`struct `[`ds3231_t`](#structds3231__t) | Device descriptor for DS3231 devices.
`struct `[`ds3231_params_t`](#structds3231__params__t) | Set of configuration parameters for DS3231 devices.

## Members

#### `define `[`DS3231_I2C_ADDR`](#group__drivers__ds3231_1ga180301d20436a62982bfba72292ca191) 

Default address of DS3231 sensors.

#### `enum `[`@171`](#group__drivers__ds3231_1ga9d62e2a4d6edc3a479d15fdf213decd0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DS3231_OPT_BAT_ENABLE            | enable backup battery on startup
DS3221_OPT_32KHZ_ENABLE            | enable 32KHz output
DS3231_OPT_INTER_ENABLE            | enable the interrupt control

Configuration options.

#### `enum `[`ds3231_alm_1_mode_t`](#group__drivers__ds3231_1ga850bdc21e0c9ecd7430e7d29bb5c857b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DS3231_AL1_TRIG_PER_S            | alarm once per second
DS3231_AL1_TRIG_S            | alarm when seconds match
DS3231_AL1_TRIG_M_S            | alarm when minutes and seconds match
DS3231_AL1_TRIG_H_M_S            | alarm when H/M/S match
DS3231_AL1_TRIG_D_H_M_S            | alarm when D/H/M/S match

Alarm trigger type of alarm 1 for DS3231 devices.

#### `enum `[`ds3231_alm_2_mode_t`](#group__drivers__ds3231_1gac56f86335bd86b0d26b626384a3e5d7d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DS3231_AL2_TRIG_PER_M            | alarm once per minute
DS3231_AL2_TRIG_M            | alarm when minutes match
DS3231_AL2_TRIG_H_M            | alarm when hours and minutes match
DS3231_AL2_TRIG_D_H_M_S            | alarm when D/H/M match

Alarm trigger type of alarm 2 for DS3231 devices.

#### `public int `[`ds3231_init`](#group__drivers__ds3231_1gaa6095666756932bccf316044e04d64fd)`(`[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,const `[`ds3231_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__params__t)` * params)` 

Initialize the given DS3231 device.

#### Parameters
* `dev` device descriptor of the targeted device 

* `params` device configuration

#### Returns
0 on success 

#### Returns
-EIO if no DS3231 device was found

#### `public int `[`ds3231_get_time`](#group__drivers__ds3231_1ga9d34ae7f1a5995efcc4db971b968b019)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,struct tm * time)` 

Get date and time from the device.

#### Parameters
* `dev` DS3231 device descriptor 

* `time` current date and time from on device

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_set_time`](#group__drivers__ds3231_1ga469cd84e0376553996157a6e804a93ba)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,const struct tm * time)` 

Set date and time of the device.

#### Parameters
* `dev` DS3231 device descriptor 

* `time` target date and time

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_set_alarm_1`](#group__drivers__ds3231_1gab26528577b6717c00d07347d281a0137)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,struct tm * time,`[`ds3231_alm_1_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds3231_1ga850bdc21e0c9ecd7430e7d29bb5c857b)` trigger)` 

Set alarm 1 of the device.

#### Parameters
* `dev` DS3231 device descriptor 

* `time` target date and time 

* `trigger` alarm 1 trigger type

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_set_alarm_2`](#group__drivers__ds3231_1ga72a11fa913cf4c9a92952fabf04c6113)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,struct tm * time,`[`ds3231_alm_2_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ds3231_1gac56f86335bd86b0d26b626384a3e5d7d)` trigger)` 

Set alarm 2 of the device.

#### Parameters
* `dev` DS3231 device descriptor 

* `time` target date and time 

* `trigger` alarm 2 trigger type

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_clear_alarm_1_flag`](#group__drivers__ds3231_1gaf458eceb7088265853211d7ba260e0ac)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)` 

Clear alarm 1 flag (A1F)

#### Parameters
* `dev` DS3231 device descriptor

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_clear_alarm_2_flag`](#group__drivers__ds3231_1ga19ec071ca0693f7386d95cd484cb9d7f)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)` 

Clear alarm 2 flag (A2F)

#### Parameters
* `dev` DS3231 device descriptor

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_get_alarm_1_flag`](#group__drivers__ds3231_1gad970e29e9a258b5d763d14933a3ea2ea)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool * flag)` 

Get the state of alarm 1 flag (A1F)

This function is not needed when ds3231_await_alarm is used

#### Parameters
* `dev` DS3231 device descriptor 

* `flag` Current value of the flag

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_get_alarm_2_flag`](#group__drivers__ds3231_1gaa458972a5476bba2d7872536a65df7bb)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool * flag)` 

Get the state of alarm 2 flag (A2F)

This function is not needed when ds3231_await_alarm is used

#### Parameters
* `dev` DS3231 device descriptor 

* `flag` Current value of the flag

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_toggle_alarm_1`](#group__drivers__ds3231_1ga647bfd256c3d96a590e3daa1f6df9a0b)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool enable)` 

Enable/Disable alarm 1 interrupt on the device.

#### Parameters
* `dev` DS3231 device descriptor 

* `enable` True to enable alarm, false to disable it

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_toggle_alarm_2`](#group__drivers__ds3231_1ga35afe62305300a2d67607ba2eccc1843)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,bool enable)` 

Enable/Disable alarm 2 interrupt on the device.

#### Parameters
* `dev` DS3231 device descriptor 

* `enable` True to enable alarm, false to disable it

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_get_aging_offset`](#group__drivers__ds3231_1ga5fb4ef10a9301aaa3a2108c0ee52b1dc)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,int8_t * offset)` 

Get the configured aging offset (see datasheet for more information)

#### Parameters
* `dev` DS3231 device descriptor 

* `offset` aging offset

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_set_aging_offset`](#group__drivers__ds3231_1gae19b58d0ee9fe5186716bdbcf6327a2f)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,int8_t offset)` 

Set the aging offset (see datasheet for more information)

#### Parameters
* `dev` DS3231 device descriptor 

* `offset` aging offset

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_get_temp`](#group__drivers__ds3231_1ga4cbe50540c88bc878ee99e8d7bfba459)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev,int16_t * temp)` 

Get temperature from the device.

#### Parameters
* `dev` DS3231 device descriptor 

* `temp` current value of the temperature register [in centi °C]

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_enable_bat`](#group__drivers__ds3231_1ga516c0c885ea27118a29137428f4e73b0)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)` 

Enable the backup battery.

#### Parameters
* `dev` DS3231 device descriptor

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

#### `public int `[`ds3231_disable_bat`](#group__drivers__ds3231_1gafd8ace8906f00de9f1377f96492f5f71)`(const `[`ds3231_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3231.md#structds3231__t)` * dev)` 

Disable the backup battery.

#### Parameters
* `dev` DS3231 device descriptor

#### Returns
0 on success 

#### Returns
-EIO on I2C communication error

# struct `ds3231_t` 

Device descriptor for DS3231 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structds3231__t_1a1a037c7e66e087194449827fe394833b) | I2C bus the device is connected to.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structds3231__t_1a1a037c7e66e087194449827fe394833b) 

I2C bus the device is connected to.

# struct `ds3231_params_t` 

Set of configuration parameters for DS3231 devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structds3231__params__t_1a1d4c0f747adec7f95fff7bb2a161d9b6) | I2C bus the device is connected to.
`public uint8_t `[`opt`](#structds3231__params__t_1a2934adbbacf2fa540c1eaedd2648ed47) | additional options

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structds3231__params__t_1a1d4c0f747adec7f95fff7bb2a161d9b6) 

I2C bus the device is connected to.

#### `public uint8_t `[`opt`](#structds3231__params__t_1a2934adbbacf2fa540c1eaedd2648ed47) 

additional options

