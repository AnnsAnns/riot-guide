---
title: api-drivers_bmx280.md
description: api-drivers_bmx280.md
---
# group `drivers_bmx280` 

Device driver interface for the Bosch BMP280 and BME280 sensors.

BMP280 and BME280 measure temperature in centi °C and pressure in Pa. BME280 can also measure relative humidity in %.

For more information, see the datasheets:

* [BMP280](https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BMP280-DS001.pdf)

* [BME280](https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BME280-DS002.pdf)

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

UsageTo include this driver to your application, simply add one of the following to the application's Makefile:

```cpp
# BME280 connected via SPI
USEMODULE += bme280_spi
# BME280 connected via I2C
USEMODULE += bme280_i2c
# BMP280 via SPI
USEMODULE += bmp280_spi
# BMP280 via I2C
USEMODULE += bmp280_i2c

# When using I2C, specify the default I2C device to use,
# and the BME280's address (see datasheet).
# The values below are the defaults:
CFLAGS += -DBMX280_PARAM_I2C_DEV=I2C_DEV\(0\)
CFLAGS += -DBMX280_PARAM_I2C_ADDR=0x77

# Using SPI, you can override the default configuration by specifying the
# used SPI bus and the ship select pin:
CFLAGS += -DBMX280_PARAM_SPI_DEV=SPI_DEV\(x\)
CFLAGS += -DBMX280_PARAM_CS=GPIO_PIN\(y,z\)
```

This way the default parameters in `[drivers/bmx280/include/bmx280_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bmx280__params_8h)` are replaced by these new values.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BMX280_RAW_LEN`](#group__drivers__bmx280_1gad55cd302f5f4271bcd5e152763b243d3)            | Select the number or raw data bytes depending on the device type.
`enum `[`bmx280_t_sb_t`](#group__drivers__bmx280_1gadeee9ddfa4006747352b2df38e5322fe)            | Values for t_sb field of the BMX280 config register.
`enum `[`bmx280_filter_t`](#group__drivers__bmx280_1gaf0194620d1e46c8b30f340320121c24a)            | Values for filter field of the BMX280 config register.
`enum `[`bmx280_mode_t`](#group__drivers__bmx280_1gaac1b0c55f8eddf04811f7c996b6d9dc9)            | Values for mode field of the BMX280 ctrl_meas register.
`enum `[`bmx280_osrs_t`](#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b)            | Values for oversampling settings.
`enum `[`@165`](#group__drivers__bmx280_1ga425be5f49e9c31d8d13d53190a3e7bc2)            | Status and error return codes.
`public int `[`bmx280_init`](#group__drivers__bmx280_1gacd5e95c111d850fb9c5a8c52ed15e576)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev,const `[`bmx280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__params__t)` * params)`            | Initialize the given BMX280 device.
`public int16_t `[`bmx280_read_temperature`](#group__drivers__bmx280_1ga36f9463235a18fbf3c5fa55a582d5b3f)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev)`            | Read temperature value from the given BMX280 device.
`public uint32_t `[`bmx280_read_pressure`](#group__drivers__bmx280_1ga8c511b395fe53d3cb1419f71200a2a96)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev)`            | Read air pressure value from the given BMX280 device.
`public uint16_t `[`bme280_read_humidity`](#group__drivers__bmx280_1ga332223168453fd3a254d1fafa060cd5a)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev)`            | Read humidity value from the given BME280 device.
`struct `[`bmx280_calibration_t`](#structbmx280__calibration__t) | Calibration struct for the BMX280 sensor.
`struct `[`bmx280_params_t`](#structbmx280__params__t) | Parameters for the BMX280 sensor.
`struct `[`bmx280_t`](#structbmx280__t) | Device descriptor for the BMX280 sensor.

## Members

#### `define `[`BMX280_RAW_LEN`](#group__drivers__bmx280_1gad55cd302f5f4271bcd5e152763b243d3) 

Select the number or raw data bytes depending on the device type.

#### `enum `[`bmx280_t_sb_t`](#group__drivers__bmx280_1gadeee9ddfa4006747352b2df38e5322fe) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX280_SB_0_5            | 
BMX280_SB_62_5            | 
BMX280_SB_125            | 
BMX280_SB_250            | 
BMX280_SB_500            | 
BMX280_SB_1000            | 
BMX280_SB_10            | 
BMX280_SB_20            | 

Values for t_sb field of the BMX280 config register.

#### `enum `[`bmx280_filter_t`](#group__drivers__bmx280_1gaf0194620d1e46c8b30f340320121c24a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX280_FILTER_OFF            | 
BMX280_FILTER_2            | 
BMX280_FILTER_4            | 
BMX280_FILTER_8            | 
BMX280_FILTER_16            | 

Values for filter field of the BMX280 config register.

#### `enum `[`bmx280_mode_t`](#group__drivers__bmx280_1gaac1b0c55f8eddf04811f7c996b6d9dc9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX280_MODE_SLEEP            | 
BMX280_MODE_FORCED            | 
BMX280_MODE_NORMAL            | 

Values for mode field of the BMX280 ctrl_meas register.

#### `enum `[`bmx280_osrs_t`](#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX280_OSRS_SKIPPED            | 
BMX280_OSRS_X1            | 
BMX280_OSRS_X2            | 
BMX280_OSRS_X4            | 
BMX280_OSRS_X8            | 
BMX280_OSRS_X16            | 

Values for oversampling settings.

These values are used for:

* osrs_h field of the BME280 ctrl_hum register

* osrs_t field of the BMX280 ctrl_meas register

* osrs_p field of the BMX280 ctrl_meas register

#### `enum `[`@165`](#group__drivers__bmx280_1ga425be5f49e9c31d8d13d53190a3e7bc2) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BMX280_OK            | everything was fine
BMX280_ERR_BUS            | bus error
BMX280_ERR_NODEV            | did not detect BME280 or BMP280

Status and error return codes.

#### `public int `[`bmx280_init`](#group__drivers__bmx280_1gacd5e95c111d850fb9c5a8c52ed15e576)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev,const `[`bmx280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__params__t)` * params)` 

Initialize the given BMX280 device.

#### Parameters
* `dev` device descriptor of the given BMX280 device 

* `params` static configuration parameters

#### Returns
BMX280_OK on success 

#### Returns
BMX280_ERR_BUS on bus error 

#### Returns
BMX280_ERR_NODEV if no corresponding device was found on the bus

#### `public int16_t `[`bmx280_read_temperature`](#group__drivers__bmx280_1ga36f9463235a18fbf3c5fa55a582d5b3f)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev)` 

Read temperature value from the given BMX280 device.

The measured temperature is returned in centi °C (x.xx°C).

#### Parameters
* `dev` device to read from

#### Returns
measured temperature in centi Celsius 

#### Returns
INT16_MIN on error

#### `public uint32_t `[`bmx280_read_pressure`](#group__drivers__bmx280_1ga8c511b395fe53d3cb1419f71200a2a96)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev)` 

Read air pressure value from the given BMX280 device.

The air pressure is returned in PA (Pascal).

This function returns the pressure data that was measured when [bmx280_read_temperature()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga36f9463235a18fbf3c5fa55a582d5b3f) has been called last. So [bmx280_read_temperature()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga36f9463235a18fbf3c5fa55a582d5b3f) has to be called before.

If bmx280_read_temperatue() did not succeed in acquiring a new set of sensor data, the result of this function is undefined.

#### Parameters
* `dev` device to read from

#### Returns
air pressure in PA

#### `public uint16_t `[`bme280_read_humidity`](#group__drivers__bmx280_1ga332223168453fd3a254d1fafa060cd5a)`(`[`bmx280_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__t)` * dev)` 

Read humidity value from the given BME280 device.

The humidity is returned in centi RH (x.xx% relative humidity).

This function returns the pressure data that was measured when [bmx280_read_temperature()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga36f9463235a18fbf3c5fa55a582d5b3f) has been called last. So [bmx280_read_temperature()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga36f9463235a18fbf3c5fa55a582d5b3f) has to be called before.

If bmx280_read_temperatue() did not succeed in acquiring a new set of sensor data, the result of this function is undefined.

#### Parameters
* `dev` device to read from

#### Returns
humidity in centi RH (i.e. the percentage times 100)

# struct `bmx280_calibration_t` 

Calibration struct for the BMX280 sensor.

This must be read from the device at startup.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`dig_T1`](#structbmx280__calibration__t_1a4aeb072aa0076add90c03c5f52cab59c) | T1 coefficient.
`public int16_t `[`dig_T2`](#structbmx280__calibration__t_1aa82687ad5e6cb4e6d5308fc931e7c858) | T2 coefficient.
`public int16_t `[`dig_T3`](#structbmx280__calibration__t_1a4d16483e66366abb7ea84b1c60ebdd8f) | T3 coefficient.
`public uint16_t `[`dig_P1`](#structbmx280__calibration__t_1aa23431bd8871cde03284796bc3c310fc) | P1 coefficient.
`public int16_t `[`dig_P2`](#structbmx280__calibration__t_1abd62f1b20f152934ce9a01678fd7c993) | P2 coefficient.
`public int16_t `[`dig_P3`](#structbmx280__calibration__t_1af2c7098a20eefc3b59b67beb7a2e883d) | P3 coefficient.
`public int16_t `[`dig_P4`](#structbmx280__calibration__t_1aa4ffd01cbd460e4a81acb3834521ae3b) | P4 coefficient.
`public int16_t `[`dig_P5`](#structbmx280__calibration__t_1af3bed3a32d499985d61472b75fcc6158) | P5 coefficient.
`public int16_t `[`dig_P6`](#structbmx280__calibration__t_1aee5caa47d8b2f4808de8886b23e0fdc2) | P6 coefficient.
`public int16_t `[`dig_P7`](#structbmx280__calibration__t_1a36b0cfce08e09d5ca40e49e4a1b3759a) | P7 coefficient.
`public int16_t `[`dig_P8`](#structbmx280__calibration__t_1a134294ed25230051284e2110fa5c8271) | P8 coefficient.
`public int16_t `[`dig_P9`](#structbmx280__calibration__t_1a26f0e9e86110152b310d1679f83adec4) | P9 coefficient.
`public uint8_t `[`dig_H1`](#structbmx280__calibration__t_1a7c3200eef7a04cdf152a179bcb2cefb9) | H1 coefficient.
`public int16_t `[`dig_H2`](#structbmx280__calibration__t_1a964908a06813687f05b05fc74a106535) | H2 coefficient.
`public uint8_t `[`dig_H3`](#structbmx280__calibration__t_1a7ae7d2d0ae66d02342a0a67c01bfae84) | H3 coefficient.
`public int16_t `[`dig_H4`](#structbmx280__calibration__t_1adb7601eb7bf375a6c2877d130b219abd) | H4 coefficient.
`public int16_t `[`dig_H5`](#structbmx280__calibration__t_1ae94315012a19e950b5021265ae188a12) | H5 coefficient.
`public int8_t `[`dig_H6`](#structbmx280__calibration__t_1a87d75764d94ec2558c34fa7ba9c28252) | H6 coefficient.

## Members

#### `public uint16_t `[`dig_T1`](#structbmx280__calibration__t_1a4aeb072aa0076add90c03c5f52cab59c) 

T1 coefficient.

#### `public int16_t `[`dig_T2`](#structbmx280__calibration__t_1aa82687ad5e6cb4e6d5308fc931e7c858) 

T2 coefficient.

#### `public int16_t `[`dig_T3`](#structbmx280__calibration__t_1a4d16483e66366abb7ea84b1c60ebdd8f) 

T3 coefficient.

#### `public uint16_t `[`dig_P1`](#structbmx280__calibration__t_1aa23431bd8871cde03284796bc3c310fc) 

P1 coefficient.

#### `public int16_t `[`dig_P2`](#structbmx280__calibration__t_1abd62f1b20f152934ce9a01678fd7c993) 

P2 coefficient.

#### `public int16_t `[`dig_P3`](#structbmx280__calibration__t_1af2c7098a20eefc3b59b67beb7a2e883d) 

P3 coefficient.

#### `public int16_t `[`dig_P4`](#structbmx280__calibration__t_1aa4ffd01cbd460e4a81acb3834521ae3b) 

P4 coefficient.

#### `public int16_t `[`dig_P5`](#structbmx280__calibration__t_1af3bed3a32d499985d61472b75fcc6158) 

P5 coefficient.

#### `public int16_t `[`dig_P6`](#structbmx280__calibration__t_1aee5caa47d8b2f4808de8886b23e0fdc2) 

P6 coefficient.

#### `public int16_t `[`dig_P7`](#structbmx280__calibration__t_1a36b0cfce08e09d5ca40e49e4a1b3759a) 

P7 coefficient.

#### `public int16_t `[`dig_P8`](#structbmx280__calibration__t_1a134294ed25230051284e2110fa5c8271) 

P8 coefficient.

#### `public int16_t `[`dig_P9`](#structbmx280__calibration__t_1a26f0e9e86110152b310d1679f83adec4) 

P9 coefficient.

#### `public uint8_t `[`dig_H1`](#structbmx280__calibration__t_1a7c3200eef7a04cdf152a179bcb2cefb9) 

H1 coefficient.

#### `public int16_t `[`dig_H2`](#structbmx280__calibration__t_1a964908a06813687f05b05fc74a106535) 

H2 coefficient.

#### `public uint8_t `[`dig_H3`](#structbmx280__calibration__t_1a7ae7d2d0ae66d02342a0a67c01bfae84) 

H3 coefficient.

#### `public int16_t `[`dig_H4`](#structbmx280__calibration__t_1adb7601eb7bf375a6c2877d130b219abd) 

H4 coefficient.

#### `public int16_t `[`dig_H5`](#structbmx280__calibration__t_1ae94315012a19e950b5021265ae188a12) 

H5 coefficient.

#### `public int8_t `[`dig_H6`](#structbmx280__calibration__t_1a87d75764d94ec2558c34fa7ba9c28252) 

H6 coefficient.

# struct `bmx280_params_t` 

Parameters for the BMX280 sensor.

These parameters are needed to configure the device at startup.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structbmx280__params__t_1a228f55aa1e94d17e3842c7eb38bc80d1) | I2C device which is used.
`public uint8_t `[`i2c_addr`](#structbmx280__params__t_1a4e9097aaa216123d033dd79564b0dca3) | I2C address.
`public `[`bmx280_t_sb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1gadeee9ddfa4006747352b2df38e5322fe)` `[`t_sb`](#structbmx280__params__t_1a7701cc3f3bad3a7d923840ea469af5ce) | standby
`public `[`bmx280_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1gaf0194620d1e46c8b30f340320121c24a)` `[`filter`](#structbmx280__params__t_1adb43b7a39966025e83deb2d4a2986a90) | filter coefficient
`public `[`bmx280_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1gaac1b0c55f8eddf04811f7c996b6d9dc9)` `[`run_mode`](#structbmx280__params__t_1a555cdb2eef0b60f5664d9841a3c9552f) | ctrl_meas mode
`public `[`bmx280_osrs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b)` `[`temp_oversample`](#structbmx280__params__t_1a31aaa2084e58dcedecebd48cfa8c0bb7) | ctrl_meas osrs_t
`public `[`bmx280_osrs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b)` `[`press_oversample`](#structbmx280__params__t_1af992b0672a0aeab2f3427e0e620ee82b) | ctrl_meas osrs_p
`public `[`bmx280_osrs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b)` `[`humid_oversample`](#structbmx280__params__t_1aa6568e269f4f3f2645b3115b33782182) | ctrl_hum osrs_h

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c_dev`](#structbmx280__params__t_1a228f55aa1e94d17e3842c7eb38bc80d1) 

I2C device which is used.

#### `public uint8_t `[`i2c_addr`](#structbmx280__params__t_1a4e9097aaa216123d033dd79564b0dca3) 

I2C address.

#### `public `[`bmx280_t_sb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1gadeee9ddfa4006747352b2df38e5322fe)` `[`t_sb`](#structbmx280__params__t_1a7701cc3f3bad3a7d923840ea469af5ce) 

standby

#### `public `[`bmx280_filter_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1gaf0194620d1e46c8b30f340320121c24a)` `[`filter`](#structbmx280__params__t_1adb43b7a39966025e83deb2d4a2986a90) 

filter coefficient

#### `public `[`bmx280_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1gaac1b0c55f8eddf04811f7c996b6d9dc9)` `[`run_mode`](#structbmx280__params__t_1a555cdb2eef0b60f5664d9841a3c9552f) 

ctrl_meas mode

#### `public `[`bmx280_osrs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b)` `[`temp_oversample`](#structbmx280__params__t_1a31aaa2084e58dcedecebd48cfa8c0bb7) 

ctrl_meas osrs_t

#### `public `[`bmx280_osrs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b)` `[`press_oversample`](#structbmx280__params__t_1af992b0672a0aeab2f3427e0e620ee82b) 

ctrl_meas osrs_p

#### `public `[`bmx280_osrs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bmx280_1ga34a2512229772c04fdeed5aef28b703b)` `[`humid_oversample`](#structbmx280__params__t_1aa6568e269f4f3f2645b3115b33782182) 

ctrl_hum osrs_h

# struct `bmx280_t` 

Device descriptor for the BMX280 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`bmx280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__params__t)` `[`params`](#structbmx280__t_1a9cc26f01a66c6d7b7f21e14f8caed61f) | Device Parameters.
`public `[`bmx280_calibration_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__calibration__t)` `[`calibration`](#structbmx280__t_1adcdbf17bcd7f475387c95117b3235e52) | Calibration Data.
`public int32_t `[`t_fine`](#structbmx280__t_1aabc54ef65db4ef8b1f115d8840e009e1) | temperature compensation value
`public uint8_t `[`last_reading`](#structbmx280__t_1a1655ac0a013d90cadd0933fbfb3c7345) | cache the RAW data

## Members

#### `public `[`bmx280_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__params__t)` `[`params`](#structbmx280__t_1a9cc26f01a66c6d7b7f21e14f8caed61f) 

Device Parameters.

#### `public `[`bmx280_calibration_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bmx280.md#structbmx280__calibration__t)` `[`calibration`](#structbmx280__t_1adcdbf17bcd7f475387c95117b3235e52) 

Calibration Data.

#### `public int32_t `[`t_fine`](#structbmx280__t_1aabc54ef65db4ef8b1f115d8840e009e1) 

temperature compensation value

#### `public uint8_t `[`last_reading`](#structbmx280__t_1a1655ac0a013d90cadd0933fbfb3c7345) 

cache the RAW data

