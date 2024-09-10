---
title: api-drivers_bme680.md
description: api-drivers_bme680.md
---
# group `drivers_bme680` 

Driver for the Bosch BME680 sensor.

IntroductionThe driver allows the use of BME680 sensors connected either via I2C or SPI. Instead of implementing a complete driver, it simply uses the [BME680 vendor driver](https://github.com/BoschSensortec/BME680_driver) written and maintained by Bosch Sensortec as a package.

Even though this driver interface provides an easy-to-use API, the vendor's driver API can still be used directly. This becomes necessary, for example, if the settings of the ambient temperature have to be updated from measurements with other sensors for gas measurement.

All functions of the vendor's driver API require a reference to a sensor device structure of type `struct bme680_dev`. Use macro [BME680_SENSOR(dev)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1gaf6ed7c0d8e8c6ac8be6a904d45809bfc) for a given device descriptor of type [bme680_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t) to the according sensor device structure of type `struct bme680_dev`, for example:

```cpp
[bme680_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t) dev;
...
BME680_SENSOR(dev).amb_temp = value_from_other_sensor;
bme680_set_sensor_settings(BME680_GAS_MEAS_SEL, &[BME680_SENSOR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1gaf6ed7c0d8e8c6ac8be6a904d45809bfc)(dev));
```

Refer to the code documentation at [GitHub](https://github.com/BoschSensortec/BME680_driver) for detailed information on the API of the vendor driver.

Sensor Operation ModesThe BME680 sensor supports only two modes, sleep mode and forced mode, in which measurements are taken. After the power-on sequence, the sensor automatically starts in sleep mode. To start a measurement, the sensor must switch to forced mode. In this mode it performs exactly one measurement of temperature, pressure, humidity and gas in this order, the so-called TPHG measurement cycle. After executing this TPHG measurement cycle, the raw data from the sensor is available and the sensor automatically returns to sleep mode

Ambient TemperatureThe sensor is initialized with a fixed ambient temperature defined by the parameter settings in [bme680_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bme680__params_8h_1aaff300d1895e6540ac099581659a4f2e). However, precise gas measurements require the calculation of the heating resistance based on the ambient temperature.

The temperature of the internal temperature sensor is typically higher than the actual ambient temperature due to the self-heating of the sensor. element. It should therefore not be used to set the ambient temperature unless gas measurements are very infrequent and self-heating is negligible. Rather another temperature sensor should be used for that purpose.

Function [bme680_set_ambient_temp](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1ga9c4a863be8d955566d79102494c88b2c) can be used to change the ambient temperature.

Using the SensorUsing the BME680 consists of the following steps

* Trigger the sensor with [bme680_force_measurement](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1ga5eddf06b725e8f8944b8f20ebf6e1a6a) to change to the forced mode and perform a THPG cycle.

* Wait at least the time returned by [bme680_get_duration](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1ga7e612954b35a0836a0fe0df22707e8d2) until the THPG cycle is finished.

* Use [bme680_get_data](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1gae98f4c5bbee96672a75c07170f391c98) to fetch raw sensor data and convert them to the resulting sensor values

Driver ConfigurationBME680 sensors are connected either via I2C or SPI. Which interface is used by which BME680 sensor is defined by the parameters in [bme680_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#bme680__params_8h_1aaff300d1895e6540ac099581659a4f2e). The respective driver implementation is enabled by the modules `bme680_i2c` and `bme680_spi`. Several BME680 sensors and a mixed configuration of I2C and SPI can be used in one application. 
```cpp
USEMODULE='bme680_spi bme680_i2c' make BOARD=... -C tests/drivers/bme680
```

The vendor driver allows the use of floating point conversions. In order to use these floating point conversions, module `bme680_fp` has to be enabled: 
```cpp
USEMODULE='bme680_fp bme680_i2c' make BOARD=... -C tests/drivers/bme680
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BME680_I2C_ADDR_1`](#group__drivers__bme680_1gacf1d007453e0feb254751de87dac01f2)            | I2C address when SDO pin is LOW.
`define `[`BME680_I2C_ADDR_2`](#group__drivers__bme680_1gabc96421c046cc9ff80b5ba5b6d46ede6)            | I2C address when SDO pin is HIGH.
`define `[`BME680_SENSOR`](#group__drivers__bme680_1gaf6ed7c0d8e8c6ac8be6a904d45809bfc)            | Converts a BME680 device descriptor to the BME680 sensor device structure for the vendor BME680 device driver.
`enum `[`@162`](#group__drivers__bme680_1gaf77d65ab56b38a820b1efc0bcafbd4fb)            | Named return values.
`public int `[`bme680_init`](#group__drivers__bme680_1ga0390f9d902a32fc4ed3fa188493a28df)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev,const `[`bme680_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__params__t)` * params)`            | Initialize the BME680 sensor.
`public int `[`bme680_force_measurement`](#group__drivers__bme680_1ga5eddf06b725e8f8944b8f20ebf6e1a6a)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev)`            | Force a single TPHG measurement cycle.
`public int `[`bme680_get_duration`](#group__drivers__bme680_1ga7e612954b35a0836a0fe0df22707e8d2)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev)`            | Duration one THPG measurement cycle.
`public int `[`bme680_get_data`](#group__drivers__bme680_1gae98f4c5bbee96672a75c07170f391c98)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev,`[`bme680_field_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1gae1d3da3666b24a3f5400f4de54bcbe76)` * data)`            | Get results of a TPHG measurement.
`public int `[`bme680_set_ambient_temp`](#group__drivers__bme680_1ga9c4a863be8d955566d79102494c88b2c)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev,int8_t temp)`            | Set the ambient temperature.
`struct `[`bme680_field_data`](#structbme680__field__data) | BME680 sensor field data.
`struct `[`bme680_intf_i2c_t`](#structbme680__intf__i2c__t) | BME680 I2C parameters.
`struct `[`bme680_intf_spi_t`](#structbme680__intf__spi__t) | BME680 SPI parameters.
`struct `[`bme680_params_t`](#structbme680__params__t) | BME680 device initialization parameters.
`struct `[`bme680_t`](#structbme680__t) | BME680 device descriptor.
`union `[`bme680_intf_t`](#unionbme680__intf__t) | BME680 Hardware interface parameters union.

## Members

#### `define `[`BME680_I2C_ADDR_1`](#group__drivers__bme680_1gacf1d007453e0feb254751de87dac01f2) 

I2C address when SDO pin is LOW.

#### `define `[`BME680_I2C_ADDR_2`](#group__drivers__bme680_1gabc96421c046cc9ff80b5ba5b6d46ede6) 

I2C address when SDO pin is HIGH.

#### `define `[`BME680_SENSOR`](#group__drivers__bme680_1gaf6ed7c0d8e8c6ac8be6a904d45809bfc) 

Converts a BME680 device descriptor to the BME680 sensor device structure for the vendor BME680 device driver.

#### `enum `[`@162`](#group__drivers__bme680_1gaf77d65ab56b38a820b1efc0bcafbd4fb) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
BME680_NULL_PTR            | NULL pointer check failed.
BME680_COM_FAILED            | Communication with the device failed.
BME680_NO_DEV            | Device doesn't exist.
BME680_INVALID            | Invalid value or length.
BME680_NO_NEW_DATA            | No new data.

Named return values.

#### `public int `[`bme680_init`](#group__drivers__bme680_1ga0390f9d902a32fc4ed3fa188493a28df)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev,const `[`bme680_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__params__t)` * params)` 

Initialize the BME680 sensor.

#### Parameters
* `dev` device descriptor of the sensor to initialize 

* `params` configuration parameters

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public int `[`bme680_force_measurement`](#group__drivers__bme680_1ga5eddf06b725e8f8944b8f20ebf6e1a6a)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev)` 

Force a single TPHG measurement cycle.

The function triggers the sensor to start one THPG measurement cycle. The duration of the TPHG measurement cycle depends on the selected parameters. It can vary from 1.25 ms to 4.5 seconds. The duration of the measurement cycle can be determined with the [bme680_get_duration](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1ga7e612954b35a0836a0fe0df22707e8d2) function.

#### Parameters
* `dev` device descriptor of the sensor

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public int `[`bme680_get_duration`](#group__drivers__bme680_1ga7e612954b35a0836a0fe0df22707e8d2)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev)` 

Duration one THPG measurement cycle.

This function determines the duration of one THPG measurement cycle according to the selected parameter settings. The duration can be used to wait for the measurement results once a THPG measurement has been started with [bme680_force_measurement](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1ga5eddf06b725e8f8944b8f20ebf6e1a6a).

#### Parameters
* `dev` device descriptor of the sensor

#### Returns
duration of one THPG measurement cycle in milliseconds. 

#### Returns
< 0 on error

#### `public int `[`bme680_get_data`](#group__drivers__bme680_1gae98f4c5bbee96672a75c07170f391c98)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev,`[`bme680_field_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1gae1d3da3666b24a3f5400f4de54bcbe76)` * data)` 

Get results of a TPHG measurement.

The function returns the results of a TPHG measurement that has been started before with [bme680_force_measurement](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__bme680_1ga5eddf06b725e8f8944b8f20ebf6e1a6a). For that purpose, the function fetches the raw sensor data and converts them into sensor values. If the measurement is still running, the function fails and returns invalid values.

#### Parameters
* `dev` device descriptor of the sensor 

* `data` pointer to a data structure with the field data

#### Returns
0 on success 

#### Returns
< 0 on error

#### `public int `[`bme680_set_ambient_temp`](#group__drivers__bme680_1ga9c4a863be8d955566d79102494c88b2c)`(`[`bme680_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#structbme680__t)` * dev,int8_t temp)` 

Set the ambient temperature.

The function sets the ambient temperature for the calculation of the heater resistance.

#### Parameters
* `dev` device descriptor of the sensor 

* `temp` ambient temperature in degC.

#### Returns
0 on success 

#### Returns
< 0 on error

# struct `bme680_field_data` 

BME680 sensor field data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`status`](#structbme680__field__data_1af52b43f86807c1f1ef7526bbb9584c5b) | Status for new data, gas measurement valid and heater stable.
`public uint8_t `[`gas_index`](#structbme680__field__data_1ae96ceedb9e36dc0671ac533e88160f5b) | Index of used heater profile.
`public uint8_t `[`meas_index`](#structbme680__field__data_1add2cb9f6b7d736908aa9f75904122d3c) | Measurement index.
`public int16_t `[`temperature`](#structbme680__field__data_1a8954536ec56e28e4bc79ed7bf1bc5176) | Temperature in degree Celsius x 100.
`public uint32_t `[`pressure`](#structbme680__field__data_1af92dbc060536ac0cd546a1f402fcecb4) | Pressure in Pascal.
`public uint32_t `[`humidity`](#structbme680__field__data_1ac84103cb41a2fab9614a61b467e5410e) | Relative humidity in percent x 1000.
`public uint32_t `[`gas_resistance`](#structbme680__field__data_1a6ce58ca03356c0df2e4b02bac6c4ce26) | Gas resistance in ohms.

## Members

#### `public uint8_t `[`status`](#structbme680__field__data_1af52b43f86807c1f1ef7526bbb9584c5b) 

Status for new data, gas measurement valid and heater stable.

Use `BME680_NEW_DATA_MSK`, `BME680_GASM_VALID_MSK` and BME680_HEAT_STAB_MSK to check for the status.

#### `public uint8_t `[`gas_index`](#structbme680__field__data_1ae96ceedb9e36dc0671ac533e88160f5b) 

Index of used heater profile.

#### `public uint8_t `[`meas_index`](#structbme680__field__data_1add2cb9f6b7d736908aa9f75904122d3c) 

Measurement index.

#### `public int16_t `[`temperature`](#structbme680__field__data_1a8954536ec56e28e4bc79ed7bf1bc5176) 

Temperature in degree Celsius x 100.

#### `public uint32_t `[`pressure`](#structbme680__field__data_1af92dbc060536ac0cd546a1f402fcecb4) 

Pressure in Pascal.

#### `public uint32_t `[`humidity`](#structbme680__field__data_1ac84103cb41a2fab9614a61b467e5410e) 

Relative humidity in percent x 1000.

#### `public uint32_t `[`gas_resistance`](#structbme680__field__data_1a6ce58ca03356c0df2e4b02bac6c4ce26) 

Gas resistance in ohms.

# struct `bme680_intf_i2c_t` 

BME680 I2C parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structbme680__intf__i2c__t_1ac7ade62c38582f2c5d1fd5d5e1504d68) | I2C device which is used.
`public uint8_t `[`addr`](#structbme680__intf__i2c__t_1a96e9d1d7898376d0b9fa09d4b744d429) | I2C address.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structbme680__intf__i2c__t_1ac7ade62c38582f2c5d1fd5d5e1504d68) 

I2C device which is used.

#### `public uint8_t `[`addr`](#structbme680__intf__i2c__t_1a96e9d1d7898376d0b9fa09d4b744d429) 

I2C address.

# struct `bme680_intf_spi_t` 

BME680 SPI parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`dev`](#structbme680__intf__spi__t_1a3dbd5bcb404356bdfe488f6842a0aa5b) | SPI device which is used.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structbme680__intf__spi__t_1a0a8468e9f99aecafb5231f6d396d6028) | Chip Select pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`dev`](#structbme680__intf__spi__t_1a3dbd5bcb404356bdfe488f6842a0aa5b) 

SPI device which is used.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`nss_pin`](#structbme680__intf__spi__t_1a0a8468e9f99aecafb5231f6d396d6028) 

Chip Select pin.

# struct `bme680_params_t` 

BME680 device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`ifsel`](#structbme680__params__t_1a1d81e435a7397c3539ee4a1d039a4b42) | Interface selection.
`public uint8_t `[`temp_os`](#structbme680__params__t_1ac6cf07d2d3d41b86cf1244c97d4abbe9) | Temperature oversampling.
`public uint8_t `[`hum_os`](#structbme680__params__t_1a7562033333693c1968d03f9e045096ab) | Humidity oversampling.
`public uint8_t `[`pres_os`](#structbme680__params__t_1a566c8bb9d71cd7905253bd6667e5a5c6) | Pressure oversampling.
`public uint8_t `[`filter`](#structbme680__params__t_1acad3a72809351be264e9845d55307e29) | IIR filter coefficient.
`public uint8_t `[`gas_measure`](#structbme680__params__t_1a46cc09e8dafdf4183785108c7033059b) | Enable gas measurement.
`public uint16_t `[`heater_dur`](#structbme680__params__t_1a85b4430b763fe76ce5c2332fab34d8ef) | Heater duration in ms.
`public uint16_t `[`heater_temp`](#structbme680__params__t_1a85f309236aae2d6b82a1350eed41fcff) | Heater temperature in °C.
`public uint8_t `[`power_mode`](#structbme680__params__t_1a85dc7dedcb18bfcb3fc40688a2bc5247) | Power mode (sleep or forced)
`public uint8_t `[`settings`](#structbme680__params__t_1ac80c5ddcef65b2151006ae8f1d234892) | Settings used.
`public `[`bme680_intf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#unionbme680__intf__t)` `[`intf`](#structbme680__params__t_1a4181b6faa59d934d7e867f8304938ae4) | Hardware interface parameters.

## Members

#### `public uint8_t `[`ifsel`](#structbme680__params__t_1a1d81e435a7397c3539ee4a1d039a4b42) 

Interface selection.

#### `public uint8_t `[`temp_os`](#structbme680__params__t_1ac6cf07d2d3d41b86cf1244c97d4abbe9) 

Temperature oversampling.

#### `public uint8_t `[`hum_os`](#structbme680__params__t_1a7562033333693c1968d03f9e045096ab) 

Humidity oversampling.

#### `public uint8_t `[`pres_os`](#structbme680__params__t_1a566c8bb9d71cd7905253bd6667e5a5c6) 

Pressure oversampling.

#### `public uint8_t `[`filter`](#structbme680__params__t_1acad3a72809351be264e9845d55307e29) 

IIR filter coefficient.

#### `public uint8_t `[`gas_measure`](#structbme680__params__t_1a46cc09e8dafdf4183785108c7033059b) 

Enable gas measurement.

#### `public uint16_t `[`heater_dur`](#structbme680__params__t_1a85b4430b763fe76ce5c2332fab34d8ef) 

Heater duration in ms.

#### `public uint16_t `[`heater_temp`](#structbme680__params__t_1a85f309236aae2d6b82a1350eed41fcff) 

Heater temperature in °C.

#### `public uint8_t `[`power_mode`](#structbme680__params__t_1a85dc7dedcb18bfcb3fc40688a2bc5247) 

Power mode (sleep or forced)

#### `public uint8_t `[`settings`](#structbme680__params__t_1ac80c5ddcef65b2151006ae8f1d234892) 

Settings used.

#### `public `[`bme680_intf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#unionbme680__intf__t)` `[`intf`](#structbme680__params__t_1a4181b6faa59d934d7e867f8304938ae4) 

Hardware interface parameters.

# struct `bme680_t` 

BME680 device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct bme680_dev `[`sensor`](#structbme680__t_1a25bfe1cef5ab335d0557305277fb3b30) | Inherited device structure from vendor API.
`public `[`bme680_intf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#unionbme680__intf__t)` `[`intf`](#structbme680__t_1ab6e0befcb7afc468063cba0f87b5dee8) | Device interface.

## Members

#### `public struct bme680_dev `[`sensor`](#structbme680__t_1a25bfe1cef5ab335d0557305277fb3b30) 

Inherited device structure from vendor API.

#### `public `[`bme680_intf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_bme680.md#unionbme680__intf__t)` `[`intf`](#structbme680__t_1ab6e0befcb7afc468063cba0f87b5dee8) 

Device interface.

