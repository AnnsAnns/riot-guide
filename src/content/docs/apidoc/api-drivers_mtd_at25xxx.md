---
title: api-drivers_mtd_at25xxx.md
description: api-drivers_mtd_at25xxx.md
---
# group `drivers_mtd_at25xxx` 

MTD wrapper for AT25XXX based SPI EEPROMs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`mtd_at25xxx_t`](#structmtd__at25xxx__t) | Device descriptor for mtd_at25xxx device.

# struct `mtd_at25xxx_t` 

Device descriptor for mtd_at25xxx device.

This is an extension of the `[mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__at25xxx__t_1a6748ea19fd16398bcb45bbf06cf72338) | inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object
`public `[`at25xxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structat25xxx__t)` * `[`at25xxx_eeprom`](#structmtd__at25xxx__t_1ab547eed0515f6ef50d537f4245d05c2e) | at25xxx_eeprom dev descriptor
`public const `[`at25xxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structat25xxx__params__t)` * `[`params`](#structmtd__at25xxx__t_1a0b8c5e3c5919fad48b31a0b19a296ccc) | params for at25xxx_eeprom init

## Members

#### `public `[`mtd_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t)` `[`base`](#structmtd__at25xxx__t_1a6748ea19fd16398bcb45bbf06cf72338) 

inherit from [mtd_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mtd.md#structmtd__dev__t) object

#### `public `[`at25xxx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structat25xxx__t)` * `[`at25xxx_eeprom`](#structmtd__at25xxx__t_1ab547eed0515f6ef50d537f4245d05c2e) 

at25xxx_eeprom dev descriptor

#### `public const `[`at25xxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structat25xxx__params__t)` * `[`params`](#structmtd__at25xxx__t_1a0b8c5e3c5919fad48b31a0b19a296ccc) 

params for at25xxx_eeprom init

