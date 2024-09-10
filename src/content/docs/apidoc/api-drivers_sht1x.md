---
title: api-drivers_sht1x.md
description: api-drivers_sht1x.md
---
# group `drivers_sht1x` 

Driver for Sensirion SHT10/SHT11/SHT15 Humidity and Temperature Sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`sht1x_conf_t`](#group__drivers__sht1x_1gac676807c37fb5930cca9089950f5aac5)            | Possible configuration (=status byte) values of the SHT10/11/15.
`enum `[`sht1x_vdd_t`](#group__drivers__sht1x_1gad2fe11cd213e7957f8ec9356d3fbeb61)            | Possible values for Vdd (measured temperature depends on it)
`public int `[`sht1x_init`](#group__drivers__sht1x_1ga04d560597a360ea88d8d4efa4d699523)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,const `[`sht1x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__params__t)` * params)`            | Initialize the SHT10/11/15 sensor.
`public int16_t `[`sht1x_temperature`](#group__drivers__sht1x_1gaba2bf759d12148841fc6c7ec1cd1cb0b)`(const `[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,uint16_t raw)`            | Calculate the temperature from the raw input.
`public int16_t `[`sht1x_humidity`](#group__drivers__sht1x_1ga3870815725d886279539e83119b04d64)`(const `[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,uint16_t raw,int16_t temp)`            | Calculate the relative humidity from the raw input.
`public int `[`sht1x_read`](#group__drivers__sht1x_1ga8934ae648564244970188a197ce421de)`(const `[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,int16_t * temp,int16_t * hum)`            | Read the current temperature.
`public int `[`sht1x_configure`](#group__drivers__sht1x_1ga704639dd71a007f4493db2968f4ed80a)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,`[`sht1x_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht1x_1gac676807c37fb5930cca9089950f5aac5)` conf)`            | Apply the given configuration (= status byte) to.
`public int `[`sht1x_read_status`](#group__drivers__sht1x_1gabba266e295e8c5d0b1d0e5251363ce6a)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,uint8_t * status)`            | Read the status byte of an SHT1X sensor.
`public int `[`sht1x_reset`](#group__drivers__sht1x_1gad0794e29b7c4e78c328226143b6a7d91)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev)`            | Reset the sensor's configuration to default values.
`struct `[`sht1x_dev_t`](#structsht1x__dev__t) | SHT10/11/15 temperature humidity sensor.
`struct `[`sht1x_params_t`](#structsht1x__params__t) | Parameters required to set up the SHT10/11/15 device driver.

## Members

#### `enum `[`sht1x_conf_t`](#group__drivers__sht1x_1gac676807c37fb5930cca9089950f5aac5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SHT1X_CONF_LOW_RESOLUTION            | Use 8/12 bit resolution instead of 12/14 bit for temp/hum.
SHT1X_CONF_SKIP_CALIBRATION            | Don't upload calibration data to register to safe 10 millisec.
SHT1X_CONF_ENABLE_HEATER            | Waste 8mA at 5V to increase the sensor temperature up to 10°C.
SHT1X_CONF_SKIP_CRC            | Skip the CRC check (and reading the CRC byte) to safe time.

Possible configuration (=status byte) values of the SHT10/11/15.

These values can be or'ed together to get the configuration.

#### `enum `[`sht1x_vdd_t`](#group__drivers__sht1x_1gad2fe11cd213e7957f8ec9356d3fbeb61) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SHT1X_VDD_5_0V            | 
SHT1X_VDD_4_0V            | 
SHT1X_VDD_3_5V            | 
SHT1X_VDD_3_0V            | 
SHT1X_VDD_2_5V            | 

Possible values for Vdd (measured temperature depends on it)

#### `public int `[`sht1x_init`](#group__drivers__sht1x_1ga04d560597a360ea88d8d4efa4d699523)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,const `[`sht1x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__params__t)` * params)` 

Initialize the SHT10/11/15 sensor.

#### Parameters
* `dev` SHT1X sensor to initialize 

* `params` Information on how the SHT1X is connected to the board

#### Parameters
* `0` Success 

* `-EIO` IO failure (`[gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)` failed) 

* `-EPROTO` Sensor did not acknowledge reset command

#### `public int16_t `[`sht1x_temperature`](#group__drivers__sht1x_1gaba2bf759d12148841fc6c7ec1cd1cb0b)`(const `[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,uint16_t raw)` 

Calculate the temperature from the raw input.

This internal function is exposed for unit tests

#### Parameters
* `dev` Device from which the raw value was received 

* `raw` The raw (unprocessed) temperature value

#### Returns
The correct temperature in E-02 °C 

#### Parameters
* `INT16_MIN` Passed `NULL` for parameter `dev` or `dev->vdd`

#### `public int16_t `[`sht1x_humidity`](#group__drivers__sht1x_1ga3870815725d886279539e83119b04d64)`(const `[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,uint16_t raw,int16_t temp)` 

Calculate the relative humidity from the raw input.

This internal function is exposed for unit tests

#### Parameters
* `dev` Device from which the raw value was received 

* `raw` The raw (unprocessed) temperature value 

* `temp` The temperature at which the humidity was measure in E-02 °C

#### Returns
The correct temperature in E-02 % 

#### Parameters
* `-1` Passed `NULL` for parameter `dev`

#### `public int `[`sht1x_read`](#group__drivers__sht1x_1ga8934ae648564244970188a197ce421de)`(const `[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,int16_t * temp,int16_t * hum)` 

Read the current temperature.

#### Parameters
* `dev` SHT1X sensor to read 

* `temp` Store the measured temperature in E-02 °C here 

* `hum` Store the measured relative humidity in E-02 % here

#### Parameters
* `0` Success 

* `-EIO` IO failure (`[gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)` failed) 

* `-EBADMSG` CRC-8 checksum didn't match 

* `-EINVAL` Passed `NULL` for dev or for both `temp` and `hum`

* `-ECANCELED` Measurement timed out 

* `-EPROTO` Sensor did not acknowledge command

For either `temp` or `hum``NULL` can be passed, if only one value is of interest. Passing `NULL` for `hum` speeds up the communication, but passing `NULL` for `temp` does not. The temperature value is required to calculate the relative humidity from the raw input. So the temperature is measured in any case, it is just not returned if `temp` is `NULL`.

#### `public int `[`sht1x_configure`](#group__drivers__sht1x_1ga704639dd71a007f4493db2968f4ed80a)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,`[`sht1x_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht1x_1gac676807c37fb5930cca9089950f5aac5)` conf)` 

Apply the given configuration (= status byte) to.

#### Parameters
* `dev` SHT1X device to configure 

* `conf` Configuration to apply

#### Parameters
* `0` Configuration applied 

* `-EINVAL` Called with `dev == NULL`

* `-EIO` I/O error (`[gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)` failed) 

* `-EPROTO` Sensor did not acknowledge command 

* `-ECANCELED` Sensor did not apply configuration 

* `-EBADMSG` CRC checksum error while verifying uploaded configuration

#### `public int `[`sht1x_read_status`](#group__drivers__sht1x_1gabba266e295e8c5d0b1d0e5251363ce6a)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev,uint8_t * status)` 

Read the status byte of an SHT1X sensor.

#### Parameters
* `dev` SHT1X device to receive the status from 

* `status` Store the received status byte here

#### Parameters
* `0` Configuration applied 

* `-EINVAL` Called with `dev == NULL`

* `-EIO` I/O error (`[gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)` failed) 

* `-EPROTO` Sensor did not acknowledge command 

* `-EBADMSG` CRC checksum didn't match

#### `public int `[`sht1x_reset`](#group__drivers__sht1x_1gad0794e29b7c4e78c328226143b6a7d91)`(`[`sht1x_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sht1x.md#structsht1x__dev__t)` * dev)` 

Reset the sensor's configuration to default values.

#### Parameters
* `dev` SHT1X device to reset

#### Parameters
* `0` Reset successful 

* `-EINVAL` Called with `dev == NULL`

* `-EIO` I/O error (`[gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)` failed) 

* `-EPROTO` Sensor did not acknowledge reset command

# struct `sht1x_dev_t` 

SHT10/11/15 temperature humidity sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structsht1x__dev__t_1aae43bd00a9d6df90cbf41136eaab5afe) | GPIO connected to the clock pin of the SHT1X.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data`](#structsht1x__dev__t_1ab90af825b926539c3bd2508c8c1d2f82) | GPIO connected to the data pin of the SHT1X.
`public int16_t `[`temp_off`](#structsht1x__dev__t_1af8378655522faf13d050f464806d362a) | Offset to add to the measured temperature.
`public int16_t `[`hum_off`](#structsht1x__dev__t_1aa6227887b79f6bda92e6a4f1421d07bf) | Offset to add to the measured humidity.
`public uint8_t `[`conf`](#structsht1x__dev__t_1ad6156fb3a9657cd7e39f0a8db131573c) | Status byte (containing configuration) of the SHT1X.
`public uint8_t `[`vdd`](#structsht1x__dev__t_1a1b581e6c6e36e37ecbe3c273350e2d02) | Supply voltage of the SHT1X (as sht1x_vdd_t)

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structsht1x__dev__t_1aae43bd00a9d6df90cbf41136eaab5afe) 

GPIO connected to the clock pin of the SHT1X.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data`](#structsht1x__dev__t_1ab90af825b926539c3bd2508c8c1d2f82) 

GPIO connected to the data pin of the SHT1X.

#### `public int16_t `[`temp_off`](#structsht1x__dev__t_1af8378655522faf13d050f464806d362a) 

Offset to add to the measured temperature.

#### `public int16_t `[`hum_off`](#structsht1x__dev__t_1aa6227887b79f6bda92e6a4f1421d07bf) 

Offset to add to the measured humidity.

#### `public uint8_t `[`conf`](#structsht1x__dev__t_1ad6156fb3a9657cd7e39f0a8db131573c) 

Status byte (containing configuration) of the SHT1X.

#### `public uint8_t `[`vdd`](#structsht1x__dev__t_1a1b581e6c6e36e37ecbe3c273350e2d02) 

Supply voltage of the SHT1X (as sht1x_vdd_t)

# struct `sht1x_params_t` 

Parameters required to set up the SHT10/11/15 device driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structsht1x__params__t_1adc9bd74bd0d93de341ce50ee852ccca2) | GPIO connected to the clock pin of the SHT1X.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data`](#structsht1x__params__t_1a6a2e89f2292ad0167e0ebf63eaeed229) | GPIO connected to the data pin of the SHT1X.
`public `[`sht1x_vdd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht1x_1gad2fe11cd213e7957f8ec9356d3fbeb61)` `[`vdd`](#structsht1x__params__t_1a9acf40d51f58f75aa57cbcc59405999f) | The supply voltage of the SHT1X.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk`](#structsht1x__params__t_1adc9bd74bd0d93de341ce50ee852ccca2) 

GPIO connected to the clock pin of the SHT1X.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`data`](#structsht1x__params__t_1a6a2e89f2292ad0167e0ebf63eaeed229) 

GPIO connected to the data pin of the SHT1X.

#### `public `[`sht1x_vdd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sht1x_1gad2fe11cd213e7957f8ec9356d3fbeb61)` `[`vdd`](#structsht1x__params__t_1a9acf40d51f58f75aa57cbcc59405999f) 

The supply voltage of the SHT1X.

