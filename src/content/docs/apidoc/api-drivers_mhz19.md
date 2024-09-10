---
title: api-drivers_mhz19.md
description: api-drivers_mhz19.md
---
# group `drivers_mhz19` 

MH-Z19 CO2 sensor driver.

DescriptionThe MH-Z19 is a CO2 sensor. Measurements are provided in parts per million (ppm) over UART and PWM. The ppm value ranges from 0 (theoretically) to 2000 or 5000, depending on the sensor settings.

In UART mode, additional commands are available to configure the sensor.

Note that the sensor requires considerable time before accurate measurements are provided.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@217`](#group__drivers__mhz19_1gacb6f6fa3e73244ffcf5c366390b4a4ed)            | Status and error return codes.
`public int `[`mhz19_init`](#group__drivers__mhz19_1ga326bf9228d31c89226e9d7deb1137e6a)`(mhz19_t * dev,const mhz19_params_t * params)`            | Initialize a MH-Z19 device.
`public int `[`mhz19_get_ppm`](#group__drivers__mhz19_1ga80b093fb1763a7feb3f6bdf2a5567fb9)`(mhz19_t * dev,int16_t * ppm)`            | Get measured CO2 ppm value.

## Members

#### `enum `[`@217`](#group__drivers__mhz19_1gacb6f6fa3e73244ffcf5c366390b4a4ed) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MHZ19_OK            | everything was fine
MHZ19_ERR_INIT            | error initializing the device
MHZ19_ERR_TIMEOUT            | timeout on retrieving sensor data
MHZ19_ERR_CHECKSUM            | checksum failure on received data

Status and error return codes.

#### `public int `[`mhz19_init`](#group__drivers__mhz19_1ga326bf9228d31c89226e9d7deb1137e6a)`(mhz19_t * dev,const mhz19_params_t * params)` 

Initialize a MH-Z19 device.

#### Parameters
* `dev` device descriptor 

* `params` MH-Z19 initialization struct

#### Returns
MHZ19_OK 

#### Returns
MHZ19_ERR_INIT

#### `public int `[`mhz19_get_ppm`](#group__drivers__mhz19_1ga80b093fb1763a7feb3f6bdf2a5567fb9)`(mhz19_t * dev,int16_t * ppm)` 

Get measured CO2 ppm value.

#### Parameters
* `dev` device descriptor 

* `ppm` int16_t buffer where CO2 measurement will be written to, in ppm

#### Returns
MHZ19_OK 

#### Returns
MHZ19_ERR_TIMEOUT 

#### Returns
MHZ19_ERR_CHECKSUM

