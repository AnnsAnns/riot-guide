---
title: api-drivers_ds3234.md
description: api-drivers_ds3234.md
---
# group `drivers_ds3234` 

Driver for Maxim DS3234 Extremely Accurate SPI Bus RTC with Integrated Crystal and SRAM.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`ds3234_return_codes`](#group__drivers__ds3234_1gac84a72f5f0709663fc2b73ba155387ba)            | Return codes for the DS3234 device driver.
`public int `[`ds3234_pps_init`](#group__drivers__ds3234_1ga8c8bb71ff908954a52d90dd4706fba1d)`(const `[`ds3234_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3234.md#structds3234__params__t)` * params)`            | Initialize the DS3234 RTC as a PPS device.
`struct `[`ds3234_params_t`](#structds3234__params__t) | Parameters for the DS3234 device driver.

## Members

#### `enum `[`ds3234_return_codes`](#group__drivers__ds3234_1gac84a72f5f0709663fc2b73ba155387ba) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DS3234_OK            | 
DS3234_NO_DEV            | 
DS3234_NO_SPI            | 

Return codes for the DS3234 device driver.

#### `public int `[`ds3234_pps_init`](#group__drivers__ds3234_1ga8c8bb71ff908954a52d90dd4706fba1d)`(const `[`ds3234_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds3234.md#structds3234__params__t)` * params)` 

Initialize the DS3234 RTC as a PPS device.

This will enable square wave output on the SQW pin at 1 Hz

#### Parameters
* `params` DS3234 circuit parameters

#### Returns
DS3234_OK on success 

#### Returns
DS3234_NO_SPI if cannot initiate SPI 

#### Returns
DS3234_NO_DEV if the device is not found on the bus

# struct `ds3234_params_t` 

Parameters for the DS3234 device driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structds3234__params__t_1aefe400e208c2ce58d97a260e81825072) | SPI bus the sensor is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structds3234__params__t_1a05428f4c826e20bb2821be8d8d0b7b7e) | SPI bus clock speed.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structds3234__params__t_1ae986d6b56fecc9708ead446c92231692) | CS pin GPIO handle.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structds3234__params__t_1aefe400e208c2ce58d97a260e81825072) 

SPI bus the sensor is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structds3234__params__t_1a05428f4c826e20bb2821be8d8d0b7b7e) 

SPI bus clock speed.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structds3234__params__t_1ae986d6b56fecc9708ead446c92231692) 

CS pin GPIO handle.

