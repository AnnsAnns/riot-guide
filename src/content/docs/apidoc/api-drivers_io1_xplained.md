---
title: api-drivers_io1_xplained.md
description: api-drivers_io1_xplained.md
---
# group `drivers_io1_xplained` 

Device driver interface for the Atmel IO1 Xplained extension.

This board contains several sensors and actuators:

* [AT30TSE75x temperature sensor with EEPROM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x)

* TEMT6000 Light sensor (not yet supported by this driver)

* microSD card connector (not yet supported by this driver)

* one yellow LED

* 2 GPIO pins

This board can be used with the following Atmel evaluation boards:

* [Atmel SAM R21 Xplained Pro](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__samr21-xpro)

* [Atmel SAM D21 Xplained Pro](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__samd21-xpro)

* [Atmel SAM L21 Xplained Pro](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__saml21-xpro)

See the [datasheet](http://www.atmel.com/images/atmel-42078-io1-xplained-pro_user-guide.pdf) for more information

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@196`](#group__drivers__io1__xplained_1ga173f34c053cf8ba70e5f775cd03196f4)            | IO1 Xplained driver return codes.
`public int `[`io1_xplained_init`](#group__drivers__io1__xplained_1gad20e8875023a9bb60c2d918a7853d9ca)`(`[`io1_xplained_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_io1_xplained.md#structio1__xplained__t)` * dev,const `[`io1_xplained_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_io1_xplained.md#structio1__xplained__params__t)` * params)`            | Initialize the given IO1 Xplained extension.
`public int `[`io1_xplained_read_light_level`](#group__drivers__io1__xplained_1ga3da410a4340731354047746d1d49ae94)`(uint16_t * light)`            | Read light sensor level on the IO1 Xplained extension.
`struct `[`io1_xplained_params_t`](#structio1__xplained__params__t) | Device initialization parameters.
`struct `[`io1_xplained_t`](#structio1__xplained__t) | Device descriptor for the IO1 Xplained extension.

## Members

#### `enum `[`@196`](#group__drivers__io1__xplained_1ga173f34c053cf8ba70e5f775cd03196f4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IO1_XPLAINED_OK            | Initialization successful.
IO1_XPLAINED_NOTEMP            | Error during temperature sensor initialization.
IO1_XPLAINED_NOSDCARD            | Error during sdcard initialization.
IO1_XPLAINED_NOLIGHT            | Error during light sensor (ADC) initialization.
IO1_XPLAINED_NOLED            | Error during extension LED initialization.
IO1_XPLAINED_NOGPIO1            | Error during extension GPIO1 initialization.
IO1_XPLAINED_NOGPIO2            | Error during extension GPIO2 initialization.
IO1_XPLAINED_READ_OK            | Light sensor read successful.
IO1_XPLAINED_READ_ERR            | Error when reading light sensor.

IO1 Xplained driver return codes.

#### `public int `[`io1_xplained_init`](#group__drivers__io1__xplained_1gad20e8875023a9bb60c2d918a7853d9ca)`(`[`io1_xplained_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_io1_xplained.md#structio1__xplained__t)` * dev,const `[`io1_xplained_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_io1_xplained.md#structio1__xplained__params__t)` * params)` 

Initialize the given IO1 Xplained extension.

#### Parameters
* `dev` Initialized device descriptor of IO1 Xplained extension 

* `params` Device initialization parameters

#### Returns
IO1_XPLAINED_OK on success 

#### Returns
-IO1_XPLAINED_NOTEMP if temperature sensor initialization failed 

#### Returns
-IO1_XPLAINED_NOSDCARD if sdcard initialization failed 

#### Returns
-IO1_XPLAINED_NOLED if LED initialization failed 

#### Returns
-IO1_XPLAINED_NOGPIO1 if GPIO1 initialization failed 

#### Returns
-IO1_XPLAINED_NOGPIO2 if GPIO2 initialization failed

#### `public int `[`io1_xplained_read_light_level`](#group__drivers__io1__xplained_1ga3da410a4340731354047746d1d49ae94)`(uint16_t * light)` 

Read light sensor level on the IO1 Xplained extension.

#### Parameters
* `light` Light level value (between 0 and 1023)

#### Returns
IO1_XPLAINED_READ_OK on success 

#### Returns
-IO1_XPLAINED_READ_ERR when the value cannot be read

# struct `io1_xplained_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`addr`](#structio1__xplained__params__t_1aa6a69c11c0391bcde6621dff74ebab57) | extension custom address

## Members

#### `public uint8_t `[`addr`](#structio1__xplained__params__t_1aa6a69c11c0391bcde6621dff74ebab57) 

extension custom address

# struct `io1_xplained_t` 

Device descriptor for the IO1 Xplained extension.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`io1_xplained_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_io1_xplained.md#structio1__xplained__params__t)` `[`params`](#structio1__xplained__t_1af7e155f1c5c8ef07890dbaea4d4c6883) | Initialization parameters.
`public `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` `[`temp`](#structio1__xplained__t_1a51dc66936f8b4b509596319f89190c7c) | On-board temperature sensor.
`public `[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` `[`sdcard`](#structio1__xplained__t_1a67e5a37cc0d86013a54ced1a69876eb4) | On-board SD card.

## Members

#### `public `[`io1_xplained_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_io1_xplained.md#structio1__xplained__params__t)` `[`params`](#structio1__xplained__t_1af7e155f1c5c8ef07890dbaea4d4c6883) 

Initialization parameters.

#### `public `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` `[`temp`](#structio1__xplained__t_1a51dc66936f8b4b509596319f89190c7c) 

On-board temperature sensor.

#### `public `[`sdcard_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_sdcard_spi.md#structsdcard__spi__t)` `[`sdcard`](#structio1__xplained__t_1a67e5a37cc0d86013a54ced1a69876eb4) 

On-board SD card.

