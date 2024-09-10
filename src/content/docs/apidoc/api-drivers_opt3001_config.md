---
title: api-drivers_opt3001_config.md
description: api-drivers_opt3001_config.md
---
# group `drivers_opt3001_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_OPT3001_I2C_ADDRESS`](#group__drivers__opt3001__config_1gab9fdb1d8d61f408197c88c8eed68c786)            | OPT3001 Default Address.
`define `[`CONFIG_OPT3001_CONVERSION_TIME`](#group__drivers__opt3001__config_1gabc20f098d7a164125ae2cf4fe0b50f15)            | OPT3001 Default conversion time.

## Members

#### `define `[`CONFIG_OPT3001_I2C_ADDRESS`](#group__drivers__opt3001__config_1gab9fdb1d8d61f408197c88c8eed68c786) 

OPT3001 Default Address.

If set to 0x45 the ADDR PIN should be connected to VDD. For more information on SerialBus Address, refer section 7.3.4.1 in datasheet.

#### `define `[`CONFIG_OPT3001_CONVERSION_TIME`](#group__drivers__opt3001__config_1gabc20f098d7a164125ae2cf4fe0b50f15) 

OPT3001 Default conversion time.

If set to 0x0000, the conversion time will be 100ms. If set to 0x0800, the conversion time will be 800ms

