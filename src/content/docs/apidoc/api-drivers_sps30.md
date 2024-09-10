---
title: api-drivers_sps30.md
description: api-drivers_sps30.md
---
# group `drivers_sps30` 

Driver for the Sensirion SPS30 Particulate Matter Sensor.

AboutThis driver provides an interface for the Sensirion SPS30 Sensor. The Datasheet can be found [here](https://1n.pm/oqluM). For now only I2C mode is supported. I2C speed must be set to standard mode (100 kbit/s)

WiringIn ASCII-land the connector side of the sensor would look like this:

```cpp
+------------------------------------------------------------------------+
|                                             ____________________       |
|                                          __|                    |__    |
|                                         |__  (1) (2) (3) (4) (5) __|   |
|                                            |                    |      |
|                                            |____________________|      |
|                                                                        |
+------------[#]------------[#]------------[#]------------[#]------------+
```

The numbers refer to following pin names:

Pin Nr.   |SPS30 Signal Name   |Connect to   |Notes
--------- | --------- | --------- | ---------
Pin 1   |VDD   |5 V   |should be within +-10 %
Pin 2   |I2C_SDA / UART_RX   |SDA*   |config by SPS30_PARAM_I2C_DEV
Pin 3   |I2C_SCL / UART_TR   |SCL*   |config by SPS30_PARAM_I2C_DEV
Pin 4   |SEL   |GND   |
Pin 5   |GND   |GND   |

*The SCL and SDA pins of the SPS30 sensor are open drain so they must be pulled high. Consider that internal pull resistors might be too weak. So using external 10 kOhm resistors is recommended for that.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SPS30_FAN_CLEAN_S`](#group__drivers__sps30_1gac767959f58a7cf843b0353b8a88d56fe)            | Seconds the fan cleaning process takes in seconds.
`define `[`SPS30_SER_ART_LEN`](#group__drivers__sps30_1ga87b857473f8be715aa20c00e0b4ab9fd)            | Length of serial and article code string.
`define `[`SPS30_DEFAULT_ACI_S`](#group__drivers__sps30_1ga6c741f31941e81916f565ed7d03ca166)            | Default fan auto-clean interval in seconds (1 week)
`enum `[`sps30_error_code_t`](#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6)            | SPS30 error codes (returned as negative values)
`public int `[`sps30_init`](#group__drivers__sps30_1gae263b4abf5c0026cc7b4adcc69325f52)`(`[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,const `[`sps30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__params__t)` * params)`            | Initialize SPS30 sensor driver.
`public int `[`sps30_start_measurement`](#group__drivers__sps30_1ga467ccf24f4e41d66708eeb1f8f80840d)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)`            | Enable the measurement action.
`public int `[`sps30_stop_measurement`](#group__drivers__sps30_1gad5a11aca9d6eb67db51d3b562c15dc0f)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)`            | Stops the measurement action.
`public bool `[`sps30_data_ready`](#group__drivers__sps30_1ga6d351576d5f76b1f2e601546f7376f06)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,int * error)`            | Ask the device if a measurement is ready for reading.
`public int `[`sps30_read_measurement`](#group__drivers__sps30_1gac86421ada8136f7b1b8f09792a284294)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,`[`sps30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__data__t)` * data)`            | Read a set of particulate matter measurements.
`public int `[`sps30_read_ac_interval`](#group__drivers__sps30_1ga3c752ecef39a7e5bc52ec349609fa218)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,uint32_t * seconds)`            | Read the fan auto-clean interval.
`public int `[`sps30_write_ac_interval`](#group__drivers__sps30_1gaa61d5ddb1f82bd3601a2109e125ba4f2)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,uint32_t seconds)`            | Write the fan auto-clean interval.
`public int `[`sps30_start_fan_clean`](#group__drivers__sps30_1ga4847c76a989b2faafa0e9fcf2269881f)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)`            | Run a fan cleaning cycle manually.
`public int `[`sps30_read_article_code`](#group__drivers__sps30_1ga7da965671e959c32aa404ce484890cf4)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,char * str,size_t len)`            | Read the article code from the sensor as string.
`public int `[`sps30_read_serial_number`](#group__drivers__sps30_1ga9e4a0ec59e0b0a093ec41fc2ba3139e0)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,char * str,size_t len)`            | Read the serial number from the sensor as string.
`public int `[`sps30_reset`](#group__drivers__sps30_1ga88e1af0472df5b7130e620feda92f534)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)`            | Reset the sensor.
`public int `[`sps30_sleep`](#group__drivers__sps30_1ga92cc221536f1ecb1215da4aa6f25edca)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)`            | Put the sensor in sleep mode.
`public int `[`sps30_wakeup`](#group__drivers__sps30_1gaac39de1faef87bc8d2984ab94630c5ae)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)`            | Wake up sensor from sleep mode (returns sensor to Idle mode)
`struct `[`sps30_params_t`](#structsps30__params__t) | SPS30 device parameters.
`struct `[`sps30_t`](#structsps30__t) | SPS30 device instance.
`struct `[`sps30_data_t`](#structsps30__data__t) | Set of measured particulate matter values.

## Members

#### `define `[`SPS30_FAN_CLEAN_S`](#group__drivers__sps30_1gac767959f58a7cf843b0353b8a88d56fe) 

Seconds the fan cleaning process takes in seconds.

#### `define `[`SPS30_SER_ART_LEN`](#group__drivers__sps30_1ga87b857473f8be715aa20c00e0b4ab9fd) 

Length of serial and article code string.

#### `define `[`SPS30_DEFAULT_ACI_S`](#group__drivers__sps30_1ga6c741f31941e81916f565ed7d03ca166) 

Default fan auto-clean interval in seconds (1 week)

#### `enum `[`sps30_error_code_t`](#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SPS30_OK            | Everything went fine.
SPS30_CRC_ERROR            | The CRC check of received data failed.
SPS30_I2C_ERROR            | Some I2C operation failed.

SPS30 error codes (returned as negative values)

#### `public int `[`sps30_init`](#group__drivers__sps30_1gae263b4abf5c0026cc7b4adcc69325f52)`(`[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,const `[`sps30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__params__t)` * params)` 

Initialize SPS30 sensor driver.

On success the measurement mode will be active after calling.

#### Parameters
* `dev` Pointer to an SPS30 device handle 

* `params` Parameters for device initialization

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_start_measurement`](#group__drivers__sps30_1ga467ccf24f4e41d66708eeb1f8f80840d)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)` 

Enable the measurement action.

Starting the measurement activates the fan of the sensor and increases the power consumption from below 8 mA to an average of 60 mA. When the fan is starting up the consumption can reach up to 80 mA for around 200 ms. The measurement mode will stay active until either the power is turned off, a stop is requested ([sps30_stop_measurement](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gad5a11aca9d6eb67db51d3b562c15dc0f)), or the device is reset ([sps30_reset](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga88e1af0472df5b7130e620feda92f534)).

#### Parameters
* `dev` Pointer to an SPS30 device handle

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_stop_measurement`](#group__drivers__sps30_1gad5a11aca9d6eb67db51d3b562c15dc0f)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)` 

Stops the measurement action.

Stopping the measurement sets the device back to idle mode.

#### Parameters
* `dev` Pointer to an SPS30 device handle

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public bool `[`sps30_data_ready`](#group__drivers__sps30_1ga6d351576d5f76b1f2e601546f7376f06)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,int * error)` 

Ask the device if a measurement is ready for reading.

#### Parameters
* `dev` Pointer to an SPS30 device handle 

* `error` Pre-allocated memory to return [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) or NULL if not interested

#### Returns
true if a new measurement is available 

#### Returns
false if no new measurement is available

#### `public int `[`sps30_read_measurement`](#group__drivers__sps30_1gac86421ada8136f7b1b8f09792a284294)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,`[`sps30_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__data__t)` * data)` 

Read a set of particulate matter measurements.

#### Parameters
* `dev` Pointer to an SPS30 device handle 

* `data` Pre-allocated memory to return measurements

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_read_ac_interval`](#group__drivers__sps30_1ga3c752ecef39a7e5bc52ec349609fa218)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,uint32_t * seconds)` 

Read the fan auto-clean interval.

The default value is 604800 seconds (1 week). See also [sps30_start_fan_clean](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga4847c76a989b2faafa0e9fcf2269881f).

#### Parameters
* `dev` Pointer to an SPS30 device handle 

* `seconds` Pre-allocated memory for returning the interval, 0 stands for disabled auto-clean

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_write_ac_interval`](#group__drivers__sps30_1gaa61d5ddb1f82bd3601a2109e125ba4f2)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,uint32_t seconds)` 

Write the fan auto-clean interval.

The new value will be effective immediately after writing but reading the updated value is only possible after resetting the sensor. This setting is persistent across resets and powerdowns. But if the sensor is powered off, the active time counter starts from zero again. If this is expected to happen, a fan cleaning cycle should be triggered manually at least once a week. See also [sps30_start_fan_clean](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga4847c76a989b2faafa0e9fcf2269881f).

#### Parameters
* `dev` Pointer to an SPS30 device handle 

* `seconds` The new interval in seconds, 0 for disable

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_start_fan_clean`](#group__drivers__sps30_1ga4847c76a989b2faafa0e9fcf2269881f)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)` 

Run a fan cleaning cycle manually.

This will spin up the fan to maximum speed to blow out dust for for 10 seconds. No new measurement values are available until the cleaning process is finished.

#### Parameters
* `dev` Pointer to an SPS30 device handle

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_read_article_code`](#group__drivers__sps30_1ga7da965671e959c32aa404ce484890cf4)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,char * str,size_t len)` 

Read the article code from the sensor as string.

#### Parameters
* `dev` Pointer to an SPS30 device handle 

* `str` Pre-allocated memory for returning the article code 

* `len` Length of the `str` buffer, must be 32

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_read_serial_number`](#group__drivers__sps30_1ga9e4a0ec59e0b0a093ec41fc2ba3139e0)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev,char * str,size_t len)` 

Read the serial number from the sensor as string.

#### Parameters
* `dev` Pointer to an SPS30 device handle 

* `str` Pre-allocated memory for returning the serial number 

* `len` Length of the `str` buffer, must be 32

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_reset`](#group__drivers__sps30_1ga88e1af0472df5b7130e620feda92f534)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)` 

Reset the sensor.

#### Parameters
* `dev` Pointer to an SPS30 device handle

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_sleep`](#group__drivers__sps30_1ga92cc221536f1ecb1215da4aa6f25edca)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)` 

Put the sensor in sleep mode.

#### Parameters
* `dev` Pointer to an SPS30 device handle

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

#### `public int `[`sps30_wakeup`](#group__drivers__sps30_1gaac39de1faef87bc8d2984ab94630c5ae)`(const `[`sps30_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__t)` * dev)` 

Wake up sensor from sleep mode (returns sensor to Idle mode)

#### Parameters
* `dev` Pointer to an SPS30 device handle

#### Returns
[SPS30_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gga7f9d5124571cb55580d9b291ee4dcda6aa704e16e5e85e1e1eac930daee04f492) on success, negative [sps30_error_code_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1ga7f9d5124571cb55580d9b291ee4dcda6) on error

# struct `sps30_params_t` 

SPS30 device parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsps30__params__t_1ae0564c7bbe692bcb3a5da1f4651c90a6) | I2C dev the sensor is connected to.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structsps30__params__t_1ae0564c7bbe692bcb3a5da1f4651c90a6) 

I2C dev the sensor is connected to.

# struct `sps30_t` 

SPS30 device instance.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`sps30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__params__t)` `[`p`](#structsps30__t_1a537922a255fbeca7eee28cf91e5c2d9d) | parameters of the sensor device

## Members

#### `public `[`sps30_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sps30.md#structsps30__params__t)` `[`p`](#structsps30__t_1a537922a255fbeca7eee28cf91e5c2d9d) 

parameters of the sensor device

# struct `sps30_data_t` 

Set of measured particulate matter values.

Do not change the member order, as it will break the code that populates the values in [sps30_read_measurement()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sps30_1gac86421ada8136f7b1b8f09792a284294)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public float `[`mc_pm1`](#structsps30__data__t_1a703fe6f1344c98c641d702ad4fbcc39f) | Mass concentration of all particles <= 1µm [µg/m^3].
`public float `[`mc_pm2_5`](#structsps30__data__t_1afd76e9ada182ee7b5a0dd5b6d38c2865) | Mass concentration of all particles <= 2.5µm [µg/m^3].
`public float `[`mc_pm4`](#structsps30__data__t_1a9c67d127de9e917cb17f224fe7f06974) | Mass concentration of all particles <= 4µm [µg/m^3].
`public float `[`mc_pm10`](#structsps30__data__t_1a0ba4a5cda88d1ae8329c15f6b9ee8baf) | Mass concentration of all particles <= 10µm [µg/m^3].
`public float `[`nc_pm0_5`](#structsps30__data__t_1a4337112ac9be22582748d06126509a36) | Number concentration of all particles <= 0.5µm [#/cm^3].
`public float `[`nc_pm1`](#structsps30__data__t_1afe036381c0e09b6fa3e91faf5445212a) | Number concentration of all particles <= 1µm [#/cm^3].
`public float `[`nc_pm2_5`](#structsps30__data__t_1ad95bc05df81afaa86b9a37006c8dae9d) | Number concentration of all particles <= 2.5µm [#/cm^3].
`public float `[`nc_pm4`](#structsps30__data__t_1a45a712b3b49e42123abcbfbb02cb28f6) | Number concentration of all particles <= 4µm [#/cm^3].
`public float `[`nc_pm10`](#structsps30__data__t_1a07d44d9b4207263285aa242fc7cabdf7) | Number concentration of all particles <= 10µm [#/cm^3].
`public float `[`ps`](#structsps30__data__t_1ad2f7ddb93d6f04c94be5b46d0ec8e12d) | Typical particle size [µm].

## Members

#### `public float `[`mc_pm1`](#structsps30__data__t_1a703fe6f1344c98c641d702ad4fbcc39f) 

Mass concentration of all particles <= 1µm [µg/m^3].

#### `public float `[`mc_pm2_5`](#structsps30__data__t_1afd76e9ada182ee7b5a0dd5b6d38c2865) 

Mass concentration of all particles <= 2.5µm [µg/m^3].

#### `public float `[`mc_pm4`](#structsps30__data__t_1a9c67d127de9e917cb17f224fe7f06974) 

Mass concentration of all particles <= 4µm [µg/m^3].

#### `public float `[`mc_pm10`](#structsps30__data__t_1a0ba4a5cda88d1ae8329c15f6b9ee8baf) 

Mass concentration of all particles <= 10µm [µg/m^3].

#### `public float `[`nc_pm0_5`](#structsps30__data__t_1a4337112ac9be22582748d06126509a36) 

Number concentration of all particles <= 0.5µm [#/cm^3].

#### `public float `[`nc_pm1`](#structsps30__data__t_1afe036381c0e09b6fa3e91faf5445212a) 

Number concentration of all particles <= 1µm [#/cm^3].

#### `public float `[`nc_pm2_5`](#structsps30__data__t_1ad95bc05df81afaa86b9a37006c8dae9d) 

Number concentration of all particles <= 2.5µm [#/cm^3].

#### `public float `[`nc_pm4`](#structsps30__data__t_1a45a712b3b49e42123abcbfbb02cb28f6) 

Number concentration of all particles <= 4µm [#/cm^3].

#### `public float `[`nc_pm10`](#structsps30__data__t_1a07d44d9b4207263285aa242fc7cabdf7) 

Number concentration of all particles <= 10µm [#/cm^3].

#### `public float `[`ps`](#structsps30__data__t_1ad2f7ddb93d6f04c94be5b46d0ec8e12d) 

Typical particle size [µm].

