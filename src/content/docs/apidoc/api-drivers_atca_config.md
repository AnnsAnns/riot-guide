---
title: api-drivers_atca_config.md
description: api-drivers_atca_config.md
---
# group `drivers_atca_config` 

Set default configuration parameters for the ATCA device.

The CryptoAuth library defines the data structure ATCAIfaceCfg for
     device initialization. We use this instead of a self defined params
     struct and store it in the params array.
     ATCAIfaceCfg contains a variable for the bus address, which is never
     used by the library. We use it to store RIOT's I2C_DEV.
     We also initialize the baud rate with zero, because RIOT doesn't have
     an API to change baud.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ATCA_NUMOF`](#group__drivers__atca__config_1gae6b5e92b2b2926912a32230c77816119)            | Number of connected devices.

## Members

#### `define `[`ATCA_NUMOF`](#group__drivers__atca__config_1gae6b5e92b2b2926912a32230c77816119) 

Number of connected devices.

