---
title: api-drivers_adt7310.md
description: api-drivers_adt7310.md
---
# group `drivers_adt7310` 

Driver for the Analog Devices ADT7310 temperature sensor.

DescriptionThe ADT7310 is a high accuracy digital temperature sensor in a narrow SOIC package. It contains a band gap temperature reference and a 13-bit ADC to monitor and digitize the temperature to a 0.0625°C resolution. The ADC resolution, by default, is set to 13 bits (0.0625 °C). This can be changed to 16 bits (0.0078 °C) by setting Bit 7 in the configuration register (Register Address 0x01). The ADT7310 is guaranteed to operate over supply voltages from 2.7 V to 5.5 V. Operating at 3.3 V, the average supply current is typically 210 μA. The ADT7310 has a shutdown mode that powers down the device and offers a shutdown current of typically 2 μA. The ADT7310 is rated for operation over the −55°C to +150°C temperature range.

UsageSee `tests/drivers/adt7310` for an example application using this driver.

CaveatsThis driver is currently missing support for a number of hardware features:

* Interrupt and compare pins are not handled

* There is no public API for setting the temperature alarm levels

* Device SPI reset is not implemented (drive MISO high from the master while clocking SCK)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`adt7310_set_config`](#group__drivers__adt7310_1gae777b9e52fab2777074b974ea5838a2b)`(`[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev,uint8_t config)`            | Set configuration register of an ADT7310 sensor.
`public int `[`adt7310_init`](#group__drivers__adt7310_1gaa10907eb7094cc40c5ace3feb3ee8b4e)`(`[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev,`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` spi,`[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` clk,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` cs)`            | Initialize the ADT7310 sensor driver.
`public int16_t `[`adt7310_read_raw`](#group__drivers__adt7310_1ga06925f34d3a0ef4dd35a15c3bee20ada)`(const `[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev)`            | Read raw temperature register value.
`public int32_t `[`adt7310_read`](#group__drivers__adt7310_1gae0549e98fa0230bb91ced4980d937058)`(const `[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev)`            | Read temperature value from sensor and convert to milli-degrees Celsius.
`public float `[`adt7310_read_float`](#group__drivers__adt7310_1ga5a9cd2b6f2313f3e64746d26b67bcbe4)`(const `[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev)`            | Read temperature value from sensor and convert to degrees Celsius.
`struct `[`adt7310_t`](#structadt7310__t) | Device descriptor for ADT7310 sensors.

## Members

#### `public int `[`adt7310_set_config`](#group__drivers__adt7310_1gae777b9e52fab2777074b974ea5838a2b)`(`[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev,uint8_t config)` 

Set configuration register of an ADT7310 sensor.

#### Parameters
* `dev` pointer to sensor device descriptor 

* `config` configuration byte, see macros in [adt7310.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#adt7310_8h)

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`adt7310_init`](#group__drivers__adt7310_1gaa10907eb7094cc40c5ace3feb3ee8b4e)`(`[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev,`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` spi,`[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` clk,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` cs)` 

Initialize the ADT7310 sensor driver.

The SPI bus is expected to have been initialized when adt7310_init is called.

#### Parameters
* `dev` pointer to sensor device descriptor 

* `spi` SPI bus the sensor is connected to 

* `clk` SPI bus speed 

* `cs` GPIO pin the chip select signal is connected to

#### Returns
0 on success 

#### Returns
<0 on error

#### `public int16_t `[`adt7310_read_raw`](#group__drivers__adt7310_1ga06925f34d3a0ef4dd35a15c3bee20ada)`(const `[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev)` 

Read raw temperature register value.

The three least-significant bits of the value register are used for flags if the sensor is configured for 13 bit mode.

#### Parameters
* `dev` pointer to sensor device descriptor

#### Returns
raw sensor value on success 

#### Returns
INT16_MIN on error

#### `public int32_t `[`adt7310_read`](#group__drivers__adt7310_1gae0549e98fa0230bb91ced4980d937058)`(const `[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev)` 

Read temperature value from sensor and convert to milli-degrees Celsius.

Divide the returned value by 1000 to get integer degrees.

#### Parameters
* `dev` pointer to sensor device descriptor

#### Returns
temperature in milli-degrees Celsius 

#### Returns
INT32_MIN on errors

#### `public float `[`adt7310_read_float`](#group__drivers__adt7310_1ga5a9cd2b6f2313f3e64746d26b67bcbe4)`(const `[`adt7310_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_adt7310.md#structadt7310__t)` * dev)` 

Read temperature value from sensor and convert to degrees Celsius.

#### Parameters
* `dev` pointer to sensor device descriptor

#### Returns
floating point representation of temperature in degrees Celsius 

#### Returns
NaN on errors

# struct `adt7310_t` 

Device descriptor for ADT7310 sensors.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structadt7310__t_1a2b50f1f3d4372d4478c4554f142b81e9) | SPI bus the sensor is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structadt7310__t_1a92555f12f6799f943efddd48d9df958d) | SPI bus clock speed.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structadt7310__t_1a61ad1e3cf90720633cc8579e7cd174ff) | CS pin GPIO handle.
`public bool `[`initialized`](#structadt7310__t_1a7a84463ef2bf0fdfa8706c6630175709) | sensor status, true if sensor is initialized
`public bool `[`high_res`](#structadt7310__t_1a845fee7fdd014c53e3f0aaca61a30edf) | Sensor resolution, true if configured to 16 bit resolution.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structadt7310__t_1a2b50f1f3d4372d4478c4554f142b81e9) 

SPI bus the sensor is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structadt7310__t_1a92555f12f6799f943efddd48d9df958d) 

SPI bus clock speed.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structadt7310__t_1a61ad1e3cf90720633cc8579e7cd174ff) 

CS pin GPIO handle.

#### `public bool `[`initialized`](#structadt7310__t_1a7a84463ef2bf0fdfa8706c6630175709) 

sensor status, true if sensor is initialized

#### `public bool `[`high_res`](#structadt7310__t_1a845fee7fdd014c53e3f0aaca61a30edf) 

Sensor resolution, true if configured to 16 bit resolution.

