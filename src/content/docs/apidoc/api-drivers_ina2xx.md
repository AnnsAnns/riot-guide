---
title: api-drivers_ina2xx.md
description: api-drivers_ina2xx.md
---
# group `drivers_ina2xx` 

Device driver for Texas Instruments INA219/INA2XX Bi-Directional CURRENT/POWER MONITOR with Two-Wire Interface.

Supported HardwareThis driver currently supports the INA219 and the INA2XX - and possibly other devices of the INA2xx family. The popular INA219 breakout boards are supported out of the box.

Choosing the Right Shunt ResistorThe shunt resistor should generate a voltage drop of at least 40 mV and of at most 320 mV at maximum current (add some safety margin to the maximum current). E.g. when the expected maximum current is 500 mA and we add a safety margin of 33 mA, a 75 mΩ shunt resistor would cause a drop of 40 mV at about 533 mA, and a 600 mΩ shunt resistor would cause a drop of 320 mV. So every shunt resistor between 75 mΩ and 600 mΩ would result in a decent resolution, but shunt resistors that almost max out one of the selectable shunt voltage ranges (40 mV, 80 mV, 160 mV and 320 mV) would be ideal. Often the voltage drop should be as low as possible, therefore the lowest reasonable shunt resistor has to be chosen in that case.

The popular INA219 breakout boards have a shunt resistor of 100 mΩ, which allows to measure a current of up to 400 mA at PGA = /1, and of up two 3.2 A at PGA = /8.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`ina2xx_mode`](#group__drivers__ina2xx_1ga41162f42b1c84f15b17fab8b9348fc47)            | INA2XX possible mode settings.
`enum `[`ina2xx_sadc`](#group__drivers__ina2xx_1ga6363ccce5a3a21784ae8f2d0c6287380)            | Shunt ADC settings.
`enum `[`ina2xx_badc`](#group__drivers__ina2xx_1gaa7f6844f7ae64eea73bb8de793f1cc2c)            | Bus ADC settings.
`enum `[`ina2xx_pga`](#group__drivers__ina2xx_1ga233d7637d4523c084be9a8f727a56a19)            | Shunt voltage measurement range (PGA settings)
`enum `[`ina2xx_brng`](#group__drivers__ina2xx_1ga8230aca7a6738a934dd310853165117a)            | Bus voltage measurement range.
`enum `[`ina2xx_i_range`](#group__drivers__ina2xx_1ga582e47ede3cda926a4347f93064b490f)            | Current measurement range.
`public int `[`ina2xx_init`](#group__drivers__ina2xx_1ga81dcaabf44aca75965edee74f175ae49)`(`[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,const `[`ina2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__params__t)` * params)`            | Initialize a current sensor.
`public int `[`ina2xx_read_shunt`](#group__drivers__ina2xx_1ga7c22dd3d7d0e7499f32e2faa8b3111e6)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,int16_t * voltage)`            | Read shunt voltage in E-05 V.
`public int `[`ina2xx_read_bus`](#group__drivers__ina2xx_1ga084e491edf2a577225657271d5769d92)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,uint16_t * voltage)`            | Read bus voltage in mV.
`public int `[`ina2xx_read_current`](#group__drivers__ina2xx_1ga1db424651dd9865c8994c05246bc70cc)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,int32_t * current)`            | Read shunt current in E-05 A.
`public int `[`ina2xx_read_power`](#group__drivers__ina2xx_1ga997304f3d1000e21ac6664101d38243e)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,uint32_t * power)`            | Read power consumption in E-04 W.
`struct `[`ina2xx_params_t`](#structina2xx__params__t) | Configuration parameters of the INA2xx driver.
`struct `[`ina2xx_t`](#structina2xx__t) | Device descriptor for INA2XX sensors.

## Members

#### `enum `[`ina2xx_mode`](#group__drivers__ina2xx_1ga41162f42b1c84f15b17fab8b9348fc47) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA2XX_MODE_POWERDOWN            | Power down.
INA2XX_MODE_TRIGGER_SHUNT_ONLY            | Shunt Voltage, Triggered.
INA2XX_MODE_TRIGGER_BUS_ONLY            | Bus Voltage, Triggered.
INA2XX_MODE_TRIGGER_SHUNT_BUS            | Shunt and Bus, Triggered.
INA2XX_MODE_ADC_DISABLE            | ADC Off (disabled)
INA2XX_MODE_CONTINUOUS_SHUNT_ONLY            | Shunt Voltage, Continuous.
INA2XX_MODE_CONTINUOUS_BUS_ONLY            | Bus Voltage, Continuous.
INA2XX_MODE_CONTINUOUS_SHUNT_BUS            | Shunt and Bus, Continuous, default.

INA2XX possible mode settings.

#### `enum `[`ina2xx_sadc`](#group__drivers__ina2xx_1ga6363ccce5a3a21784ae8f2d0c6287380) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA2XX_SADC_9BIT            | 9 bit resolution, 84 us conversion time
INA2XX_SADC_10BIT            | 10 bit resolution, 148 us conversion time
INA2XX_SADC_11BIT            | 11 bit resolution, 276 us conversion time
INA2XX_SADC_12BIT            | 12 bit resolution, 532 us conversion time, default
INA2XX_SADC_AVG_1_SAMPLE            | 12 bit resolution, 532 us conversion time, same as INA2XX_SADC_12BIT
INA2XX_SADC_AVG_2_SAMPLES            | 2 sample average, 1.06 ms conversion time
INA2XX_SADC_AVG_4_SAMPLES            | 4 sample average, 2.13 ms conversion time
INA2XX_SADC_AVG_8_SAMPLES            | 8 sample average, 4.26 ms conversion time
INA2XX_SADC_AVG_16_SAMPLES            | 16 sample average, 8.51 ms conversion time
INA2XX_SADC_AVG_32_SAMPLES            | 32 sample average, 17.02 ms conversion time
INA2XX_SADC_AVG_64_SAMPLES            | 64 sample average, 34.05 ms conversion time
INA2XX_SADC_AVG_128_SAMPLES            | 128 sample average, 68.10 ms conversion time

Shunt ADC settings.

**See also**: Table 4 in INA2XX data sheet

#### `enum `[`ina2xx_badc`](#group__drivers__ina2xx_1gaa7f6844f7ae64eea73bb8de793f1cc2c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA2XX_BADC_9BIT            | 9 bit resolution, 84 us conversion time
INA2XX_BADC_10BIT            | 10 bit resolution, 148 us conversion time
INA2XX_BADC_11BIT            | 11 bit resolution, 276 us conversion time
INA2XX_BADC_12BIT            | 12 bit resolution, 532 us conversion time, default
INA2XX_BADC_AVG_1_SAMPLE            | 12 bit resolution, 532 us conversion time, same as INA2XX_BADC_12BIT
INA2XX_BADC_AVG_2_SAMPLES            | 2 sample average, 1.06 ms conversion time
INA2XX_BADC_AVG_4_SAMPLES            | 4 sample average, 2.13 ms conversion time
INA2XX_BADC_AVG_8_SAMPLES            | 8 sample average, 4.26 ms conversion time
INA2XX_BADC_AVG_16_SAMPLES            | 16 sample average, 8.51 ms conversion time
INA2XX_BADC_AVG_32_SAMPLES            | 32 sample average, 17.02 ms conversion time
INA2XX_BADC_AVG_64_SAMPLES            | 64 sample average, 34.05 ms conversion time
INA2XX_BADC_AVG_128_SAMPLES            | 128 sample average, 68.10 ms conversion time

Bus ADC settings.

**See also**: Table 4 in INA2XX data sheet

#### `enum `[`ina2xx_pga`](#group__drivers__ina2xx_1ga233d7637d4523c084be9a8f727a56a19) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA2XX_SHUNT_RANGE_40MV            | +/- 40 mV range
INA2XX_SHUNT_RANGE_80MV            | +/- 80 mV range
INA2XX_SHUNT_RANGE_160MV            | +/- 160 mV range
INA2XX_SHUNT_RANGE_320MV            | +/- 320 mV range, default

Shunt voltage measurement range (PGA settings)

#### `enum `[`ina2xx_brng`](#group__drivers__ina2xx_1ga8230aca7a6738a934dd310853165117a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA2XX_BUS_RANGE_16V            | 16 V bus voltage full scale range
INA2XX_BUS_RANGE_32V            | 32 V bus voltage full scale range, default.

Bus voltage measurement range.

#### `enum `[`ina2xx_i_range`](#group__drivers__ina2xx_1ga582e47ede3cda926a4347f93064b490f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA2XX_CURRENT_RANGE_327_MA            | ±327.68 mA, 0.01mA resolution.
INA2XX_CURRENT_RANGE_655_MA            | ±655.36 mA, 0.02mA resolution.
INA2XX_CURRENT_RANGE_1310_MA            | ±1310.72 mA, 0.04mA resolution.
INA2XX_CURRENT_RANGE_2621_MA            | ±2621.44 mA, 0.08mA resolution.
INA2XX_CURRENT_RANGE_5242_MA            | ±5242.88 mA, 0.16mA resolution.
INA2XX_CURRENT_RANGE_10485_MA            | ±10485.76 mA, 0.32mA resolution.

Current measurement range.

Choosing a low range and a small shunt resistor can cause [ina2xx_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina2xx_1ga81dcaabf44aca75965edee74f175ae49) to fail. But for high resolution measurements of low currents a "big" shunt resistor (e.g. 100 mΩ) should be chosen anyway.

Choosing the lowest sufficient range for your use case will result in the optimal resolution

#### `public int `[`ina2xx_init`](#group__drivers__ina2xx_1ga81dcaabf44aca75965edee74f175ae49)`(`[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,const `[`ina2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__params__t)` * params)` 

Initialize a current sensor.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` Configuration parameters to use

#### Returns
`0` on success, `<0` on error. 

#### Parameters
* `0` Success 

* `-ENODEV` Device seems not to be an INA2XX device 

* `-EINVAL` `dev` or `params` is NULL 

* `-ERANGE` `params` contained invalid setting: Increase current range 

* `<0` Failure, error of [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304) or [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08) passed through

#### `public int `[`ina2xx_read_shunt`](#group__drivers__ina2xx_1ga7c22dd3d7d0e7499f32e2faa8b3111e6)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,int16_t * voltage)` 

Read shunt voltage in E-05 V.

#### Parameters
* `dev` device descriptor of sensor 

* `voltage` measured voltage across shunt resistor in E-05 V

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`ina2xx_read_bus`](#group__drivers__ina2xx_1ga084e491edf2a577225657271d5769d92)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,uint16_t * voltage)` 

Read bus voltage in mV.

#### Parameters
* `dev` device descriptor of sensor 

* `voltage` The measured bus voltage in mV

#### Returns
`<0` on error, `>= 0` on success 

#### Parameters
* `0` Success, no new power value available 

* `1` Success, new value for [ina2xx_read_power](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina2xx_1ga997304f3d1000e21ac6664101d38243e) ready 

* `-EDOM` Overflow during power/current calculations. 

* `<0` Error code of [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304) passed through

#### `public int `[`ina2xx_read_current`](#group__drivers__ina2xx_1ga1db424651dd9865c8994c05246bc70cc)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,int32_t * current)` 

Read shunt current in E-05 A.

#### Parameters
* `dev` device descriptor of sensor 

* `current` measured current through shunt resistor in E-05 A

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int `[`ina2xx_read_power`](#group__drivers__ina2xx_1ga997304f3d1000e21ac6664101d38243e)`(const `[`ina2xx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__t)` * dev,uint32_t * power)` 

Read power consumption in E-04 W.

#### Parameters
* `dev` device descriptor of sensor 

* `power` measured power consumption in E-04 W

#### Returns
0 on success 

#### Returns
<0 on error

# struct `ina2xx_params_t` 

Configuration parameters of the INA2xx driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structina2xx__params__t_1ab8d8be5faa7c988cf38f1b1744dfcc32) | I2C device the sensor is connected to.
`public uint8_t `[`addr`](#structina2xx__params__t_1aec6fb97d3af4658aae4723ed55b5e1d6) | I2C address of the sensr.
`public uint16_t `[`config`](#structina2xx__params__t_1ad3c3881d381cee35612da1b0f6420868) | Configuration to apply.
`public uint16_t `[`rshunt_mohm`](#structina2xx__params__t_1af69d54f0f5919a7a450080d4b8fb7c35) | Size of the shunt resistor in mΩ
`public `[`ina2xx_i_range_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina2xx_1ga3ad6dface454c8bc5c8846379b2eadac)` `[`i_range`](#structina2xx__params__t_1a002b2315540686e7e49c937a7feaf2a3) | Range of the measured current.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structina2xx__params__t_1ab8d8be5faa7c988cf38f1b1744dfcc32) 

I2C device the sensor is connected to.

#### `public uint8_t `[`addr`](#structina2xx__params__t_1aec6fb97d3af4658aae4723ed55b5e1d6) 

I2C address of the sensr.

#### `public uint16_t `[`config`](#structina2xx__params__t_1ad3c3881d381cee35612da1b0f6420868) 

Configuration to apply.

#### `public uint16_t `[`rshunt_mohm`](#structina2xx__params__t_1af69d54f0f5919a7a450080d4b8fb7c35) 

Size of the shunt resistor in mΩ

#### `public `[`ina2xx_i_range_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina2xx_1ga3ad6dface454c8bc5c8846379b2eadac)` `[`i_range`](#structina2xx__params__t_1a002b2315540686e7e49c937a7feaf2a3) 

Range of the measured current.

# struct `ina2xx_t` 

Device descriptor for INA2XX sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ina2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__params__t)` `[`params`](#structina2xx__t_1acd23f6a392f3af2a6c7ea93a67e3e702) | Configuration parameters of the driver.

## Members

#### `public `[`ina2xx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina2xx.md#structina2xx__params__t)` `[`params`](#structina2xx__t_1acd23f6a392f3af2a6c7ea93a67e3e702) 

Configuration parameters of the driver.

