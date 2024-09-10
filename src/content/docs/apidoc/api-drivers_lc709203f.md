---
title: api-drivers_lc709203f.md
description: api-drivers_lc709203f.md
---
# group `drivers_lc709203f` 

Device driver interface for the LC709203F Battery Fuel Gauge.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LC709203F_CRC_POLYNOMIAL`](#group__drivers__lc709203f_1ga3181a104c722acfdba34867dc21183c1)            | CRC Polynomial.
`enum `[`@204`](#group__drivers__lc709203f_1ga188c132f478fb544e0213ea0020585bc)            | 
`public int `[`lc709203f_init`](#group__drivers__lc709203f_1ga8056a7e62f6f60bdbbca50e8a4a93f6d)`(`[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__params__t)` * params)`            | initializes the sensor and i2c
`public int16_t `[`lc709203f_get_voltage`](#group__drivers__lc709203f_1ga8bcdc2f0dc89ea3a749c9bd254329e3f)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads battery voltage from Sensor
`public int16_t `[`lc709203f_get_rsoc`](#group__drivers__lc709203f_1gaefce4bb7fb2b5ceca6b33f1c1ddd3d80)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads battery state of charge from Sensor
`public int16_t `[`lc709203f_get_ite`](#group__drivers__lc709203f_1gaf5d88de119a5d6c8369067692e8191ae)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads battery indicator to empty from Sensor
`public int16_t `[`lc709203f_get_id`](#group__drivers__lc709203f_1ga86cc49f7c824a558624adeb32c9a41cc)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads Sensor id
`public int16_t `[`lc709203f_get_cell_temp`](#group__drivers__lc709203f_1gab952af872c15edd7c1e411fcbd272bfc)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads cell temperature from sensor
`public `[`lc709203f_temp_obtaining_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89e4b0e01862a03793eb4ff22fcf0bae)` `[`lc709203f_get_status_bit`](#group__drivers__lc709203f_1ga07c10a432ca380c4c253087a2b3c7216)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads status bit register (Temperature obtaining mode)
`public `[`lc709203f_power_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89df4f131212f80ddd1927fcb7d6970b)` `[`lc709203f_get_power_mode`](#group__drivers__lc709203f_1gac84046a0ab3fd883d961f95eac94bf67)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads IC Power Mode register
`public int16_t `[`lc709203f_get_alarm_low_voltage`](#group__drivers__lc709203f_1gab6f8ed7c7780bf84a0e4ae15f2a39b01)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads Alarm Low Cell Voltage Register
`public int16_t `[`lc709203f_get_alarm_low_rsoc`](#group__drivers__lc709203f_1ga6e3beff64e56a5e5be3dbdfdcd9652b3)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads Alarm Low RSOC Register
`public int16_t `[`lc709203f_get_change_of_parameter`](#group__drivers__lc709203f_1gacc6ca2cf012ed6c6931e4a975e0cdf1a)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads Change of the Parameter register, Battery Profile selection
`public int16_t `[`lc709203f_get_apt`](#group__drivers__lc709203f_1ga46cbab711b3fe68baa7643688db4fd71)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads APT (Adjustment Pack Thermistor) value to adjust temperature measurement delay timing.
`public int16_t `[`lc709203f_get_apa`](#group__drivers__lc709203f_1ga592f0067e674354cb9fbd4aa90f3b0a5)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads APA (Adjustment Pack Application) in 1mOhm steps value to adjust temperature measurement delay timing.
`public `[`lc709203f_current_direction_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga2acb149329e1018b2b81c1ba9eadd531)` `[`lc709203f_get_current_direction`](#group__drivers__lc709203f_1ga2969d1a224db926e4e44a7416910c5fc)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads Current Direction Register
`public int16_t `[`lc709203f_get_thermistor_b`](#group__drivers__lc709203f_1ga4b78730a55b692de24f516d42aabc18f)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | reads Thermistor-B register (Thermistor B constant to be measured)
`public void `[`lc709203f_set_rsoc_before`](#group__drivers__lc709203f_1ga33786356edad2740f2d9e0bfc7672d6c)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | Executes RSOC initialization with sampled maximum voltage.
`public void `[`lc709203f_set_thermistor_b`](#group__drivers__lc709203f_1ga9ec175accb6729c64826334bd6ec39e3)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)`            | Sets B constant of the Thermistor.
`public void `[`lc709203f_set_rsoc_initial`](#group__drivers__lc709203f_1gaeff16fac40a5fe0312d82b2704953856)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)`            | Executes RSOC initialization.
`public int8_t `[`lc709203f_set_cell_temp`](#group__drivers__lc709203f_1ga5d69ae1b8eef1455c85e85109fec5fbe)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)`            | Sets cell temperature in I2C-mode.
`public void `[`lc709203f_set_current_direction`](#group__drivers__lc709203f_1ga613f0d25d88d50fe6e2f4982c2ac3aa5)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_current_direction_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga2acb149329e1018b2b81c1ba9eadd531)` direction)`            | Sets current direction.
`public void `[`lc709203f_set_apa`](#group__drivers__lc709203f_1ga850f513199435ce7712fb3691f2ca50b)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const uint8_t value)`            | Sets parasitic impedance (adjustment pack application)
`public void `[`lc709203f_set_apt`](#group__drivers__lc709203f_1ga92cd826781c6348e9b83c8d567ca65b9)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)`            | Sets value to adjust temperature measurement delay timing (adjusmtent pack thermistor)
`public void `[`lc709203f_set_change_of_parameter`](#group__drivers__lc709203f_1gadd57f9053bd5d1b06f0d9efee7cbc600)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_battery_profile_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga95c2e4e768932cb18d19c6a928cc3459)` value)`            | Sets battery profile.
`public void `[`lc709203f_set_alarm_low_rsoc`](#group__drivers__lc709203f_1gae6e03e94dd814e74268e496795b293ef)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const uint8_t value)`            | Sets threshold for low rsoc alert.
`public void `[`lc709203f_set_alarm_low_cell_voltage`](#group__drivers__lc709203f_1ga5369e83a8621116baf76f4dbe167124a)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)`            | Sets threshold for low cell voltage alert.
`public void `[`lc709203f_set_power_mode`](#group__drivers__lc709203f_1ga19e68250ad2ffa42d80f4d1f7b209b3a)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_power_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89df4f131212f80ddd1927fcb7d6970b)` value)`            | Sets power mode.
`public void `[`lc709203f_set_status_bit`](#group__drivers__lc709203f_1ga9ca149a7054f1a368847dcc490e6b68f)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_temp_obtaining_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89e4b0e01862a03793eb4ff22fcf0bae)` value)`            | Sets temperature obtaining method.
`struct `[`lc709203f_params_t`](#structlc709203f__params__t) | Parameter struct for driver initialization.
`struct `[`lc709203f_t`](#structlc709203f__t) | Device descriptor for the fuel gauge.

## Members

#### `define `[`LC709203F_CRC_POLYNOMIAL`](#group__drivers__lc709203f_1ga3181a104c722acfdba34867dc21183c1) 

CRC Polynomial.

#### `enum `[`@204`](#group__drivers__lc709203f_1ga188c132f478fb544e0213ea0020585bc) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LC709203F_OK            | all went as expected
LC709203F_NOI2C            | error using the I2C bus
LC709203F_CELL_TEMP_INVALID            | Cell temp invalid.

#### `public int `[`lc709203f_init`](#group__drivers__lc709203f_1ga8056a7e62f6f60bdbbca50e8a4a93f6d)`(`[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__params__t)` * params)` 

initializes the sensor and i2c

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `*params` pointer to lc709203f_param_t struct containing the interrupt pin and callback

#### Returns
LC709203F_OK on a working initialization 

#### Returns
LC709203F_NOI2C on undefined i2c device given in periph_conf

#### `public int16_t `[`lc709203f_get_voltage`](#group__drivers__lc709203f_1ga8bcdc2f0dc89ea3a749c9bd254329e3f)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads battery voltage from Sensor

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
voltage in mV

#### `public int16_t `[`lc709203f_get_rsoc`](#group__drivers__lc709203f_1gaefce4bb7fb2b5ceca6b33f1c1ddd3d80)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads battery state of charge from Sensor

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
rsoc in %

#### `public int16_t `[`lc709203f_get_ite`](#group__drivers__lc709203f_1gaf5d88de119a5d6c8369067692e8191ae)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads battery indicator to empty from Sensor

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
ite in 0.1%

#### `public int16_t `[`lc709203f_get_id`](#group__drivers__lc709203f_1ga86cc49f7c824a558624adeb32c9a41cc)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads Sensor id

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
id value

#### `public int16_t `[`lc709203f_get_cell_temp`](#group__drivers__lc709203f_1gab952af872c15edd7c1e411fcbd272bfc)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads cell temperature from sensor

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
temp in 0.1°C steps

#### `public `[`lc709203f_temp_obtaining_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89e4b0e01862a03793eb4ff22fcf0bae)` `[`lc709203f_get_status_bit`](#group__drivers__lc709203f_1ga07c10a432ca380c4c253087a2b3c7216)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads status bit register (Temperature obtaining mode)

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
THERMISTOR_MODE Thermistor mode 

#### Returns
I2C_MODE I2C Mode

#### `public `[`lc709203f_power_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89df4f131212f80ddd1927fcb7d6970b)` `[`lc709203f_get_power_mode`](#group__drivers__lc709203f_1gac84046a0ab3fd883d961f95eac94bf67)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads IC Power Mode register

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
OPERATIONAL_MODE Operational Mode 

#### Returns
SLEEP_MODE Sleep mode

#### `public int16_t `[`lc709203f_get_alarm_low_voltage`](#group__drivers__lc709203f_1gab6f8ed7c7780bf84a0e4ae15f2a39b01)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads Alarm Low Cell Voltage Register

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
0 Disable 

#### Returns
Threshold value in 1mV steps

#### `public int16_t `[`lc709203f_get_alarm_low_rsoc`](#group__drivers__lc709203f_1ga6e3beff64e56a5e5be3dbdfdcd9652b3)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads Alarm Low RSOC Register

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
0 Disable 

#### Returns
Threshold value in %

#### `public int16_t `[`lc709203f_get_change_of_parameter`](#group__drivers__lc709203f_1gacc6ca2cf012ed6c6931e4a975e0cdf1a)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads Change of the Parameter register, Battery Profile selection

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
Battery profile number (1 or 0)

#### `public int16_t `[`lc709203f_get_apt`](#group__drivers__lc709203f_1ga46cbab711b3fe68baa7643688db4fd71)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads APT (Adjustment Pack Thermistor) value to adjust temperature measurement delay timing.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
value to adjust temperature measurement delay timing.

#### `public int16_t `[`lc709203f_get_apa`](#group__drivers__lc709203f_1ga592f0067e674354cb9fbd4aa90f3b0a5)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads APA (Adjustment Pack Application) in 1mOhm steps value to adjust temperature measurement delay timing.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
parasitic impedance

#### `public `[`lc709203f_current_direction_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga2acb149329e1018b2b81c1ba9eadd531)` `[`lc709203f_get_current_direction`](#group__drivers__lc709203f_1ga2969d1a224db926e4e44a7416910c5fc)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads Current Direction Register

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
AUTO_MODE Auto mode 

#### Returns
CHARGE_MODE charge mode 

#### Returns
DISCHARGE_MODE Discharge mode

#### `public int16_t `[`lc709203f_get_thermistor_b`](#group__drivers__lc709203f_1ga4b78730a55b692de24f516d42aabc18f)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

reads Thermistor-B register (Thermistor B constant to be measured)

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### Returns
B Value in 1K steps

#### `public void `[`lc709203f_set_rsoc_before`](#group__drivers__lc709203f_1ga33786356edad2740f2d9e0bfc7672d6c)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

Executes RSOC initialization with sampled maximum voltage.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### `public void `[`lc709203f_set_thermistor_b`](#group__drivers__lc709203f_1ga9ec175accb6729c64826334bd6ec39e3)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)` 

Sets B constant of the Thermistor.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` Bconstant of thermistor

#### `public void `[`lc709203f_set_rsoc_initial`](#group__drivers__lc709203f_1gaeff16fac40a5fe0312d82b2704953856)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev)` 

Executes RSOC initialization.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address

#### `public int8_t `[`lc709203f_set_cell_temp`](#group__drivers__lc709203f_1ga5d69ae1b8eef1455c85e85109fec5fbe)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)` 

Sets cell temperature in I2C-mode.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` temp in 0.1K 0xAAC=0°C

#### Returns
LC709203F_CELL_TEMP_INVALID Invalid cell temp

#### `public void `[`lc709203f_set_current_direction`](#group__drivers__lc709203f_1ga613f0d25d88d50fe6e2f4982c2ac3aa5)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_current_direction_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga2acb149329e1018b2b81c1ba9eadd531)` direction)` 

Sets current direction.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `direction` current direction, AUTO_MODE, CHARGE_MODE, DISCHARGE_MODE

#### `public void `[`lc709203f_set_apa`](#group__drivers__lc709203f_1ga850f513199435ce7712fb3691f2ca50b)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const uint8_t value)` 

Sets parasitic impedance (adjustment pack application)

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` impedance in 1mOhm steps

#### `public void `[`lc709203f_set_apt`](#group__drivers__lc709203f_1ga92cd826781c6348e9b83c8d567ca65b9)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)` 

Sets value to adjust temperature measurement delay timing (adjusmtent pack thermistor)

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` adjustment value

#### `public void `[`lc709203f_set_change_of_parameter`](#group__drivers__lc709203f_1gadd57f9053bd5d1b06f0d9efee7cbc600)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_battery_profile_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga95c2e4e768932cb18d19c6a928cc3459)` value)` 

Sets battery profile.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` profile (enum) BAT_PROFILE_1 BAT_PROFILE_2

#### `public void `[`lc709203f_set_alarm_low_rsoc`](#group__drivers__lc709203f_1gae6e03e94dd814e74268e496795b293ef)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const uint8_t value)` 

Sets threshold for low rsoc alert.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` alert threshold (0-100%)

#### `public void `[`lc709203f_set_alarm_low_cell_voltage`](#group__drivers__lc709203f_1ga5369e83a8621116baf76f4dbe167124a)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const unsigned int value)` 

Sets threshold for low cell voltage alert.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` alert threshold in 1mV steps

#### `public void `[`lc709203f_set_power_mode`](#group__drivers__lc709203f_1ga19e68250ad2ffa42d80f4d1f7b209b3a)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_power_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89df4f131212f80ddd1927fcb7d6970b)` value)` 

Sets power mode.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` Power mode (enum) OPERATIONAL_MODE, SLEEP_MODE

#### `public void `[`lc709203f_set_status_bit`](#group__drivers__lc709203f_1ga9ca149a7054f1a368847dcc490e6b68f)`(const `[`lc709203f_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t)` * dev,const `[`lc709203f_temp_obtaining_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga89e4b0e01862a03793eb4ff22fcf0bae)` value)` 

Sets temperature obtaining method.

#### Parameters
* `*dev` pointer to [lc709203f_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__t) struct containing the i2c device and the address 

* `value` method to be used (enum) I2C_MODE, THERMISTOR_MODE

# struct `lc709203f_params_t` 

Parameter struct for driver initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alarm_pin`](#structlc709203f__params__t_1ac1abfc8946d0dc26a869d43efdd609c5) | Pin which is connected to the interrupt pin of the sensor.
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structlc709203f__params__t_1aa9cf7808ab6bae6deec3414a466dda76) | I2C bus to use.
`public uint8_t `[`addr`](#structlc709203f__params__t_1a8e870313a787b1babb4f83300fb76729) | I2C Address of the fuel gauge.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alarm_pin`](#structlc709203f__params__t_1ac1abfc8946d0dc26a869d43efdd609c5) 

Pin which is connected to the interrupt pin of the sensor.

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structlc709203f__params__t_1aa9cf7808ab6bae6deec3414a466dda76) 

I2C bus to use.

#### `public uint8_t `[`addr`](#structlc709203f__params__t_1a8e870313a787b1babb4f83300fb76729) 

I2C Address of the fuel gauge.

# struct `lc709203f_t` 

Device descriptor for the fuel gauge.

This struct will hold all information and configuration for the sensor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structlc709203f__t_1a717fffa626b3b9596a52c89de0ca340d) | I2C bus to use.
`public uint8_t `[`addr`](#structlc709203f__t_1a3a49aef26cfaebbb268258d36279ae23) | I2C Address of fuel gauge.
`public uint8_t `[`scale`](#structlc709203f__t_1a67731045913a1da20712d1b6954d482d) | scale for returned values
`public `[`lc709203f_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__params__t)` `[`params`](#structlc709203f__t_1a7a74eb092ac3752b624b52ebe9272241) | param struct with static settings etc
`public `[`lc709203f_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga2ec5c54ab15ed4caf5709f95175fa161)` `[`cb`](#structlc709203f__t_1ab47b0fb11d0f6c33e8cf7e10bb37b8f7) | callback method
`public void * `[`arg`](#structlc709203f__t_1a49beb2062a191b23298fdf569de6fa8f) | additional arguments for the callback method

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`bus`](#structlc709203f__t_1a717fffa626b3b9596a52c89de0ca340d) 

I2C bus to use.

#### `public uint8_t `[`addr`](#structlc709203f__t_1a3a49aef26cfaebbb268258d36279ae23) 

I2C Address of fuel gauge.

#### `public uint8_t `[`scale`](#structlc709203f__t_1a67731045913a1da20712d1b6954d482d) 

scale for returned values

#### `public `[`lc709203f_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lc709203f.md#structlc709203f__params__t)` `[`params`](#structlc709203f__t_1a7a74eb092ac3752b624b52ebe9272241) 

param struct with static settings etc

#### `public `[`lc709203f_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lc709203f_1ga2ec5c54ab15ed4caf5709f95175fa161)` `[`cb`](#structlc709203f__t_1ab47b0fb11d0f6c33e8cf7e10bb37b8f7) 

callback method

#### `public void * `[`arg`](#structlc709203f__t_1a49beb2062a191b23298fdf569de6fa8f) 

additional arguments for the callback method

