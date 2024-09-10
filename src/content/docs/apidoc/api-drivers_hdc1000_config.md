---
title: api-drivers_hdc1000_config.md
description: api-drivers_hdc1000_config.md
---
# group `drivers_hdc1000_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_HDC1000_I2C_ADDRESS`](#group__drivers__hdc1000__config_1ga16d78f01bb010b74cad9d1a3f84d2c3a)            | Default I2C bus address of HDC1000 devices.
`define `[`CONFIG_HDC1000_CONVERSION_TIME`](#group__drivers__hdc1000__config_1ga0691188716dcefb9a90884c0a227a10c)            | Typical conversion time needed to acquire new values [in us].

## Members

#### `define `[`CONFIG_HDC1000_I2C_ADDRESS`](#group__drivers__hdc1000__config_1ga16d78f01bb010b74cad9d1a3f84d2c3a) 

Default I2C bus address of HDC1000 devices.

The address value depends on the state of ADR0 and ADR1 Pins For more details refer Section 8.5.1 of datasheet

#### `define `[`CONFIG_HDC1000_CONVERSION_TIME`](#group__drivers__hdc1000__config_1ga0691188716dcefb9a90884c0a227a10c) 

Typical conversion time needed to acquire new values [in us].

This time value is chosen twice as large as needed for two 14-bit conversions (worst case) to allow for timer imprecision: (convert temp + convert hum) * 2 -> (6.5ms + 6.5ms) * 2 := 26ms.

