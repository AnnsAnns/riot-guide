---
title: api-drivers_sgp30.md
description: api-drivers_sgp30.md
---
# group `drivers_sgp30` 

Device driver interface for the Sensirion SGP30 Gas Sensor.

AboutThis driver provides an interface for the Sensirion SGP30 Gas Sensor. The Datasheet can be found [here](https://www.mouser.com/pdfdocs/Sensirion_Gas_Sensors_SGP30_Datasheet_EN-1148053.pdf)

After the sensor is powered up and starts measuring air quality for the first 15s [sgp30_read_measurements](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sgp30_1ga8cd1c689d7445d85475e5cd0d2392076) calls will return fixed values of of 400ppm CO2eq and 0ppb TVOC. Afterwards values should be read in regular intervals of 1s for best operation of the dynamic baseline compensation algorithm.

The above is not done by default unless the `sgp30_strict` module is included. In that case, if attempting to read before the is completed, then -EAGAIN will be returned. After this periodic readings happen every 1s, and the last value read is returned when calling [sgp30_read_measurements](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sgp30_1ga8cd1c689d7445d85475e5cd0d2392076). A timestamp is also added to [sgp30_data_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__data__t).

The sensor features on-chip humidity compensation for the air quality measurements. [sgp30_set_absolute_humidity](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sgp30_1gaafebc98e9c69c0724cc51497ec69eb63) can be used to change the absolute humidity value used. See [SGP30 driver integration](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf) for more on this. The baseline values for the correction algorithm can also be tweaked with [sgp30_set_baseline](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sgp30_1ga8be43c501bcd9eba3ad57e42aec09f8e). More on how to implement dynamic baseline compensation can be seen at [SGP30 driver integration](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`sgp30_init`](#group__drivers__sgp30_1gaeef3d805f5b08de265599a5f4f2ea8ba)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,const `[`sgp30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__params__t)` * params)`            | Initialize the given device.
`public int `[`sgp30_start_air_quality`](#group__drivers__sgp30_1ga9edf67ea21e5d1aa2b7e1188e4e24ab4)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev)`            | Start air quality measurements, called on [sgp30_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sgp30_1gaeef3d805f5b08de265599a5f4f2ea8ba).
`public int `[`sgp30_read_future_set`](#group__drivers__sgp30_1gaeab14c6a156874c2fa065d4cbb8d3b2e)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,uint16_t * version)`            | Initialize the given device.
`public int `[`sgp30_reset`](#group__drivers__sgp30_1gad1482ce13db7881f9fe4687dd440be6b)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev)`            | Performs a soft reset on the device.
`public bool `[`sgp30_ready`](#group__drivers__sgp30_1ga3ea60a3d678c7d291c7c2188064a5510)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev)`            | If device is ready to start reading measurements.
`public int `[`sgp30_read_serial_number`](#group__drivers__sgp30_1ga87343568f741a20adae8c2253bb19cac)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,uint8_t * buf,size_t len)`            | Read the serial number from the sensor.
`public int `[`sgp30_read_measurements`](#group__drivers__sgp30_1ga8cd1c689d7445d85475e5cd0d2392076)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__data__t)` * data)`            | Read air quality signals.
`public int `[`sgp30_set_absolute_humidity`](#group__drivers__sgp30_1gaafebc98e9c69c0724cc51497ec69eb63)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,uint32_t humidity)`            | Set absolute humidity value for on-chop humidity compensation.
`public int `[`sgp30_set_baseline`](#group__drivers__sgp30_1ga8be43c501bcd9eba3ad57e42aec09f8e)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__data__t)` * data)`            | Set new baseline values.
`public int `[`sgp30_get_baseline`](#group__drivers__sgp30_1ga3791d42dc8e154435e685b64a0a31983)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__data__t)` * data)`            | Returns baseline values.
`public int `[`sgp30_read_raw_measurements`](#group__drivers__sgp30_1ga869023edb269f3881bd2d9e1cc98322e)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_raw_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__raw__data__t)` * data)`            | Read raw signals H2 (sout_H2) and Ethanol(sout_EthOH)
`struct `[`sgp30_data_t`](#structsgp30__data__t) | Set of measured values.
`struct `[`sgp30_raw_data_t`](#structsgp30__raw__data__t) | Set of measured raw values.
`struct `[`sgp30_params_t`](#structsgp30__params__t) | Device initialization parameters.
`struct `[`sgp30_t`](#structsgp30__t) | Device descriptor for the driver.

## Members

#### `public int `[`sgp30_init`](#group__drivers__sgp30_1gaeef3d805f5b08de265599a5f4f2ea8ba)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,const `[`sgp30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__params__t)` * params)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver 

* `params` Initialization parameters

#### Returns
0 on success

#### `public int `[`sgp30_start_air_quality`](#group__drivers__sgp30_1ga9edf67ea21e5d1aa2b7e1188e4e24ab4)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev)` 

Start air quality measurements, called on [sgp30_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sgp30_1gaeef3d805f5b08de265599a5f4f2ea8ba).

Must be called after every power-cycle or soft reset.

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `0` Success 

* `-PROTO` Sensor did not acknowledge command

#### `public int `[`sgp30_read_future_set`](#group__drivers__sgp30_1gaeab14c6a156874c2fa065d4cbb8d3b2e)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,uint16_t * version)` 

Initialize the given device.

#### Parameters
* `dev` Device descriptor of the driver 

* `version` The future set version

#### Parameters
* `0` Success 

* `-EBADMSG` CRC checksum didn't match 

* `-EPROTO` Sensor did not acknowledge command

#### `public int `[`sgp30_reset`](#group__drivers__sgp30_1gad1482ce13db7881f9fe4687dd440be6b)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev)` 

Performs a soft reset on the device.

Reset is performed via a "General Call". All devices on the same I2C bus that support the General Call mode will perform a reset.

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `0` Success 

* `-PROTO` Sensor did not acknowledge command

#### `public bool `[`sgp30_ready`](#group__drivers__sgp30_1ga3ea60a3d678c7d291c7c2188064a5510)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev)` 

If device is ready to start reading measurements.

Only available if sgp30_strict is used

#### Parameters
* `dev` Device descriptor of the driver

#### Parameters
* `true` If ready to read measurements 

* `false` If still in warm-up period of it [sgp30_start_air_quality](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sgp30_1ga9edf67ea21e5d1aa2b7e1188e4e24ab4) has not been called

#### `public int `[`sgp30_read_serial_number`](#group__drivers__sgp30_1ga87343568f741a20adae8c2253bb19cac)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,uint8_t * buf,size_t len)` 

Read the serial number from the sensor.

#### Parameters
* `dev` Device descriptor of the driver 

* `buf` Pre-allocated memory for returning the serial number 

* `len` Length of the `str` buffer, must be 6

#### Parameters
* `0` Success 

* `-EBADMSG` CRC checksum didn't match 

* `-EPROTO` Sensor did not acknowledge command

#### `public int `[`sgp30_read_measurements`](#group__drivers__sgp30_1ga8cd1c689d7445d85475e5cd0d2392076)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__data__t)` * data)` 

Read air quality signals.

For the first 15s after the “Init_air_quality” command (called in the init function) the sensor is in an initialization phase during which a “Measure_air_quality” command returns fixed values of 400ppm CO2eq and 0ppb TVOC.

#### Parameters
* `dev` Device descriptor of the driver 

* `data` Air quality measurements

#### Parameters
* `0` Success 

* `-EAGAIN` Sensor is not yet ready 

* `-EBADMSG` CRC checksum didn't match 

* `-EPROTO` Sensor did not acknowledge command

#### `public int `[`sgp30_set_absolute_humidity`](#group__drivers__sgp30_1gaafebc98e9c69c0724cc51497ec69eb63)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,uint32_t humidity)` 

Set absolute humidity value for on-chop humidity compensation.

This function requires absolute humidity values, most sensors output relative humidity, this can be calculated if temperature is also known:

AH = 216.7 * ((RH / 100.0) * 6.112 * exp(17.62 * T / (243.12 + T))) / (273.15 + T)

Where RH is in 0-100%, and T is in C.

(*) Approximation formula from Sensirion SGP30 Driver Integration chapter 3.15

#### Parameters
* `dev` Device descriptor of the driver 

* `humidity` Humidity in mg/m3 units. A values of 0 disables humidity compensation, max value is 255999 mg/m3.

#### Parameters
* `0` Success 

* `-PROTO` Sensor did not acknowledge command

#### `public int `[`sgp30_set_baseline`](#group__drivers__sgp30_1ga8be43c501bcd9eba3ad57e42aec09f8e)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__data__t)` * data)` 

Set new baseline values.

#### Parameters
* `dev` Device descriptor of the driver 

* `data` Baseline values to be set

#### Parameters
* `0` Success 

* `-PROTO` Sensor did not acknowledge command

#### `public int `[`sgp30_get_baseline`](#group__drivers__sgp30_1ga3791d42dc8e154435e685b64a0a31983)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__data__t)` * data)` 

Returns baseline values.

#### Parameters
* `dev` Device descriptor of the driver 

* `data` Current baseline values

#### Parameters
* `0` Success 

* `-EBADMSG` CRC checksum didn't match 

* `-EPROTO` Sensor did not acknowledge command

#### `public int `[`sgp30_read_raw_measurements`](#group__drivers__sgp30_1ga869023edb269f3881bd2d9e1cc98322e)`(`[`sgp30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__t)` * dev,`[`sgp30_raw_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__raw__data__t)` * data)` 

Read raw signals H2 (sout_H2) and Ethanol(sout_EthOH)

It returns the sensor raw sensor signals which are used as inputs for the on-chip calibration and baseline compensation algorithms.

#### Parameters
* `dev` Device descriptor of the driver 

* `data` Raw measurement values

#### Parameters
* `0` Success 

* `-EBADMSG` CRC checksum didn't match 

* `-EPROTO` Sensor did not acknowledge command

# struct `sgp30_data_t` 

Set of measured values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`tvoc`](#structsgp30__data__t_1a990a3e16ce78a2c9b4bebd44fca331c9) | The last measurement of the IAQ-calculated Total Volatile Organic Compounds in ppb.
`public uint16_t `[`eco2`](#structsgp30__data__t_1ac76ffc9ea2808a1548a5bd560caf03c9) | The last measurement of the IAQ-calculated equivalent CO2 in ppm.

## Members

#### `public uint16_t `[`tvoc`](#structsgp30__data__t_1a990a3e16ce78a2c9b4bebd44fca331c9) 

The last measurement of the IAQ-calculated Total Volatile Organic Compounds in ppb.

#### `public uint16_t `[`eco2`](#structsgp30__data__t_1ac76ffc9ea2808a1548a5bd560caf03c9) 

The last measurement of the IAQ-calculated equivalent CO2 in ppm.

# struct `sgp30_raw_data_t` 

Set of measured raw values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`raw_h2`](#structsgp30__raw__data__t_1afd8b088825e41e432697f0a5a53d81f8) | raw H2 signal, only for testing purposes
`public uint16_t `[`raw_ethanol`](#structsgp30__raw__data__t_1a3d643e3a3812c5331f6a7ef799b969c2) | raw Ethanol signal, only for testing purposes

## Members

#### `public uint16_t `[`raw_h2`](#structsgp30__raw__data__t_1afd8b088825e41e432697f0a5a53d81f8) 

raw H2 signal, only for testing purposes

#### `public uint16_t `[`raw_ethanol`](#structsgp30__raw__data__t_1a3d643e3a3812c5331f6a7ef799b969c2) 

raw Ethanol signal, only for testing purposes

# struct `sgp30_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsgp30__params__t_1a86e4e591adad579ddd6345535a6a1f00) | I2C dev the sensor is connected to.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsgp30__params__t_1a86e4e591adad579ddd6345535a6a1f00) 

I2C dev the sensor is connected to.

# struct `sgp30_t` 

Device descriptor for the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sgp30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__params__t)` `[`params`](#structsgp30__t_1a754e79dbe81b54753d8f10ddc3433ca4) | parameters of the sensor device

## Members

#### `public `[`sgp30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sgp30.md#structsgp30__params__t)` `[`params`](#structsgp30__t_1a754e79dbe81b54753d8f10ddc3433ca4) 

parameters of the sensor device

