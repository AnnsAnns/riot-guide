---
title: api-drivers_tmp00x.md
description: api-drivers_tmp00x.md
---
# group `drivers_tmp00x` 

Driver for the Texas Instruments TMP00X sensor.

The TI TMP00X (Infrared Thermopile Contactless Temperature Sensor) measures the temperature of an object without need of direct contact with the object. After initialization the sensor can be set active for periodic measurements. 
 The conversion duration depends on oversample ratio. The oversample ratio can be determined by sensor initialization. The target object temperature can be calculated as follows:
 Temperature of sensor's die (2 times right shifting and devide-by 32): 
$$
\begin{eqnarray*} T_{\mathrm{DIE}} &=& \frac{T_{\mathrm{RAW}}}{128} \end{eqnarray*}
$$
 Difference Temperature in Kelvin: 
$$
\begin{eqnarray*} T_{\mathrm{DIFF}} &=& T_{\mathrm{DIE}} - T_{\mathrm{REF}} \end{eqnarray*}
$$
 Sensitivity of the thermopile sensor, with $S_{\mathrm{0}}$ as calibration factor: 
$$
\begin{eqnarray*} S &=& S_{\mathrm{0}} \cdot ( 1 + a_1 \cdot T_{\mathrm{DIFF}} + a_2 \cdot T_{\mathrm{DIFF}}^2 ) \\ \end{eqnarray*}
$$
 Sensor's voltage (the LSB size is $ 156.25\,\mathrm{nV} $): 
$$
\begin{eqnarray*} V_{\mathrm{OBJ}} &=& V_{\mathrm{RAW}} \cdot 156.25\,\mathrm{nV} \end{eqnarray*}
$$
 Offset voltage: 
$$
\begin{eqnarray*} V_{OS} &=& b_0 + b_1 \cdot T_{\mathrm{DIFF}} + b_2 \cdot T_{\mathrm{DIFF}}^2 \\ \end{eqnarray*}
$$
 Seebeck coefficients of the thermopile: 
$$
\begin{eqnarray*} f(V_{\mathrm{OBJ}}) &=& (V_{\mathrm{OBJ}} - V_{O\mathrm{S}}) + c_2 \cdot (V_{\mathrm{OBJ}} - V_{\mathrm{OS}})^2 \\ \end{eqnarray*}
$$
 Temperature of the target object: 
$$
\begin{eqnarray*} T_{\mathrm{OBJ}} &=& \sqrt[4]{T_{\mathrm{DIE}}^4 + \frac{f(V_{\mathrm{OBJ}})}{S}} \\ \end{eqnarray*}
$$
 Constants:
$$
\begin{eqnarray*} a_{\mathrm{1}} &=& 1.75 \cdot 10^{-3} \\ a_{\mathrm{2}} &=& -1.678 \cdot 10^{-5} \\ T_{\mathrm{REF}} &=& 298.15\,\mathrm{K} \\ b_{\mathrm{0}} &=& -2.94 \cdot 10^{-5} \\ b_{\mathrm{1}} &=& -5.7 \cdot 10^{-7} \\ b_{\mathrm{2}} &=& 4.63 \cdot 10^{-9} \\ c_{\mathrm{2}} &=& 13.4 \end{eqnarray*}
$$

The calculation and constants are wrapped from TI TMP00X User's Guide SBOU107.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BUS`](#group__drivers__tmp00x_1ga598efd6668373582ef973ad179bb43e6)            | BUS.
`define `[`ADDR`](#group__drivers__tmp00x_1gac9f31f726d2933782e2efda7136a25fd)            | ADDR.
`enum `[`@274`](#group__drivers__tmp00x_1gad89246e8564c62fdd9c7d38de122beb5)            | TMP00X specific return values.
`public int `[`tmp00x_init`](#group__drivers__tmp00x_1ga8afbe1c9f0728fa92294abe0b8524a6b)`(`[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev,const `[`tmp00x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__params__t)` * params)`            | Initialize the TMP00X sensor driver.
`public int `[`tmp00x_reset`](#group__drivers__tmp00x_1gaa8c01df196d55189acd5ed8a303ab539)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev)`            | Reset the TMP00X sensor, afterwards it should be reinitialized.
`public int `[`tmp00x_set_active`](#group__drivers__tmp00x_1gaf7a027b4348348f761b94db10af2bc67)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev)`            | Set active mode, this enables periodic measurements.
`public int `[`tmp00x_set_standby`](#group__drivers__tmp00x_1ga5ce4cde5146aab09e8e10bae57878105)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev)`            | Set standby mode.
`public int `[`tmp00x_read`](#group__drivers__tmp00x_1ga21f14b49dc2b7afaea9d50f13dcde470)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev,int16_t * rawv,int16_t * rawt,uint16_t * drdy)`            | Read sensor's data.
`public void `[`tmp00x_convert`](#group__drivers__tmp00x_1ga8205f20ae41394f2123b5facb2c7f91d)`(int16_t rawv,int16_t rawt,float * tamb,float * tobj)`            | Convert raw sensor values to temperature.
`public int `[`tmp00x_read_temperature`](#group__drivers__tmp00x_1ga7dd013dfcc4a6b4359c8ab2087194ec0)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev,int16_t * ta,int16_t * to)`            | Convenience function to get ambient and object temperatures in [°C].
`struct `[`tmp00x_params_t`](#structtmp00x__params__t) | Parameters needed for device initialization.
`struct `[`tmp00x_t`](#structtmp00x__t) | Device descriptor for TMP00X sensors.

## Members

#### `define `[`BUS`](#group__drivers__tmp00x_1ga598efd6668373582ef973ad179bb43e6) 

BUS.

#### `define `[`ADDR`](#group__drivers__tmp00x_1gac9f31f726d2933782e2efda7136a25fd) 

ADDR.

#### `enum `[`@274`](#group__drivers__tmp00x_1gad89246e8564c62fdd9c7d38de122beb5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TMP00X_OK            | Success, no error.
TMP00X_ERROR_BUS            | I2C bus error.
TMP00X_ERROR_DEV            | internal device error
TMP00X_ERROR_CONF            | invalid device configuration
TMP00X_ERROR            | general error

TMP00X specific return values.

#### `public int `[`tmp00x_init`](#group__drivers__tmp00x_1ga8afbe1c9f0728fa92294abe0b8524a6b)`(`[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev,const `[`tmp00x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__params__t)` * params)` 

Initialize the TMP00X sensor driver.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` configuration parameters

#### Returns
0 on success 

#### Returns
-TMP00X_ERROR_BUS on I2C bus error 

#### Returns
-TMP00X_ERROR_DEV if sensor test failed 

#### Returns
-TMP00X_ERROR_CONF if sensor configuration failed

#### `public int `[`tmp00x_reset`](#group__drivers__tmp00x_1gaa8c01df196d55189acd5ed8a303ab539)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev)` 

Reset the TMP00X sensor, afterwards it should be reinitialized.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`tmp00x_set_active`](#group__drivers__tmp00x_1gaf7a027b4348348f761b94db10af2bc67)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev)` 

Set active mode, this enables periodic measurements.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`tmp00x_set_standby`](#group__drivers__tmp00x_1ga5ce4cde5146aab09e8e10bae57878105)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev)` 

Set standby mode.

#### Parameters
* `dev` device descriptor of sensor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`tmp00x_read`](#group__drivers__tmp00x_1ga21f14b49dc2b7afaea9d50f13dcde470)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev,int16_t * rawv,int16_t * rawt,uint16_t * drdy)` 

Read sensor's data.

#### Parameters
* `dev` device descriptor of sensor 

* `rawv` object voltage value 

* `rawt` raw die temperature 

* `drdy` data ready, 0 if a conversion is in progress

#### Returns
0 on success 

#### Returns
-1 on error

#### `public void `[`tmp00x_convert`](#group__drivers__tmp00x_1ga8205f20ae41394f2123b5facb2c7f91d)`(int16_t rawv,int16_t rawt,float * tamb,float * tobj)` 

Convert raw sensor values to temperature.

#### Parameters
* `rawv` object voltage value 

* `rawt` raw die temperature value 

* `tamb` converted ambient temperature 

* `tobj` converted object temperature

#### `public int `[`tmp00x_read_temperature`](#group__drivers__tmp00x_1ga7dd013dfcc4a6b4359c8ab2087194ec0)`(const `[`tmp00x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__t)` * dev,int16_t * ta,int16_t * to)` 

Convenience function to get ambient and object temperatures in [°C].

Temperature scaled by x100 for accuracy and avoid floats

#### Parameters
* `dev` device descriptor of sensor 

* `ta` converted ambient temperature 

* `to` converted object temperature

#### Returns
TMP00X_OK on success 

#### Returns
-TMP00X_ERROR if data read not ready 

#### Returns
-TMP00X_ERROR_BUS on I2C error

# struct `tmp00x_params_t` 

Parameters needed for device initialization.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structtmp00x__params__t_1a18d8b4a96c0d2997b8a9ff6c99cbfd0a) | I2C device, the sensor is connected to.
`public uint8_t `[`addr`](#structtmp00x__params__t_1a6c4b4f78f4f8479fe4cf7241afa20f3a) | the sensor's slave address on the I2C bus
`public uint8_t `[`rate`](#structtmp00x__params__t_1a272bfa94aab9ccc1f200603b1a5bbc81) | number of averaged samples

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structtmp00x__params__t_1a18d8b4a96c0d2997b8a9ff6c99cbfd0a) 

I2C device, the sensor is connected to.

#### `public uint8_t `[`addr`](#structtmp00x__params__t_1a6c4b4f78f4f8479fe4cf7241afa20f3a) 

the sensor's slave address on the I2C bus

#### `public uint8_t `[`rate`](#structtmp00x__params__t_1a272bfa94aab9ccc1f200603b1a5bbc81) 

number of averaged samples

# struct `tmp00x_t` 

Device descriptor for TMP00X sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`tmp00x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__params__t)` `[`p`](#structtmp00x__t_1a2a80bc016bfcb60c3cf975df0c878213) | Configuration parameters.

## Members

#### `public `[`tmp00x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tmp00x.md#structtmp00x__params__t)` `[`p`](#structtmp00x__t_1a2a80bc016bfcb60c3cf975df0c878213) 

Configuration parameters.

