---
title: api-drivers_tmp00x_config.md
description: api-drivers_tmp00x_config.md
---
# group `drivers_tmp00x_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_TMP00X_I2C_ADDRESS`](#group__drivers__tmp00x__config_1ga27ce1580556b25038ead2f5e37fd0eac)            | Default Address.
`define `[`CONFIG_TMP00X_CONVERSION_TIME`](#group__drivers__tmp00x__config_1ga1fc7d9472c80070e6cc083490cf16208)            | Default Conversion Time in us.
`define `[`CONFIG_TMP00X_USE_LOW_POWER`](#group__drivers__tmp00x__config_1ga09889e4b78a25b7b183cec9cbe5d6e7f)            | Default low power mode.
`define `[`CONFIG_TMP00X_USE_RAW_VALUES`](#group__drivers__tmp00x__config_1gac879e1e4414057a9557176c07b47c62d)            | Default raw value mode.

## Members

#### `define `[`CONFIG_TMP00X_I2C_ADDRESS`](#group__drivers__tmp00x__config_1ga27ce1580556b25038ead2f5e37fd0eac) 

Default Address.

TMP006/TMP007 allows for up to 8 devices on a single bus. The address value depends on the state of ADR0 and ADR1 pins. Default value (0x40) corresponds to ADR0 and ADR1 pins tied to GND. For more information refer to the 'Serial Bus Address' section in the datasheet.

#### `define `[`CONFIG_TMP00X_CONVERSION_TIME`](#group__drivers__tmp00x__config_1ga1fc7d9472c80070e6cc083490cf16208) 

Default Conversion Time in us.

The duration of the analog-to-digital(A/D) conversion is determined by the conversion rate bits CR0, CR1 and CR2. For more information refer to the datasheet.

#### `define `[`CONFIG_TMP00X_USE_LOW_POWER`](#group__drivers__tmp00x__config_1ga09889e4b78a25b7b183cec9cbe5d6e7f) 

Default low power mode.

Set this to 1 to put the device in low power mode between measurements otherwise the device will always be on. Enabling this adds a `CONFIG_TMP00X_CONVERSION_TIME` us delay to each measurement call for bringing the device out of standby.

#### `define `[`CONFIG_TMP00X_USE_RAW_VALUES`](#group__drivers__tmp00x__config_1gac879e1e4414057a9557176c07b47c62d) 

Default raw value mode.

Set this to 1 to return raw adc readings otherwise measurements will be converted to Celsius.

