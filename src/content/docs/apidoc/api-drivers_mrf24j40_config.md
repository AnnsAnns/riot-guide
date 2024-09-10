---
title: api-drivers_mrf24j40_config.md
description: api-drivers_mrf24j40_config.md
---
# group `drivers_mrf24j40_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_MRF24J40_USE_EXT_PA_LNA`](#group__drivers__mrf24j40__config_1gadd8ffb8636440a32ab0bc9e4b0fa0268)            | Enable external PA/LNA control.
`define `[`CONFIG_MRF24J40_TEST_SPI_CONNECTION`](#group__drivers__mrf24j40__config_1ga04e6d455111453e5109d863469f0010f)            | Enable basic self-test on init.

## Members

#### `define `[`CONFIG_MRF24J40_USE_EXT_PA_LNA`](#group__drivers__mrf24j40__config_1gadd8ffb8636440a32ab0bc9e4b0fa0268) 

Enable external PA/LNA control.

Set to 1 to increase RSSI for MRF24J40MC/MD/ME devices. No effect on MRF24J40MA. For more information, please refer to section 4.2 of MRF24J40 datasheet.

#### `define `[`CONFIG_MRF24J40_TEST_SPI_CONNECTION`](#group__drivers__mrf24j40__config_1ga04e6d455111453e5109d863469f0010f) 

Enable basic self-test on init.

Perform a write / read to a known register on startup to detect if the device is connected. Set this to 1 if you want the boot not to hang if the device is not connected / there are SPI errors.

