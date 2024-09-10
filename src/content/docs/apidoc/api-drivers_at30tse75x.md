---
title: api-drivers_at30tse75x.md
description: api-drivers_at30tse75x.md
---
# group `drivers_at30tse75x` 

The connection between the MCU and the AT30TSE75x is based on the I2C-interface.

There are 3 versions of this IC, with either 2/4/8 Kb of EEPROM.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`at30tse75x_init`](#group__drivers__at30tse75x_1gae202f1f561b097db8bbf516ac49d1cb0)`(`[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` i2c,uint8_t addr)`            | Initialize a AT30TSE75x device.
`public int `[`at30tse75x_save_config`](#group__drivers__at30tse75x_1ga7ed65a164f928fa9da0fa5bd5d0e7277)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev)`            | Save configuration register to non-volatile backup register.
`public int `[`at30tse75x_restore_config`](#group__drivers__at30tse75x_1gae222355cd32dba4d627a9b9d382db514)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev)`            | Restore configuration register from non-volatile backup register.
`public int `[`at30tse75x_get_config`](#group__drivers__at30tse75x_1gab3cc192d34877673efaf0445867ee722)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,uint8_t * data)`            | Get content of configuration register.
`public int `[`at30tse75x_set_config`](#group__drivers__at30tse75x_1ga6eb10dbbe138e0507bf54a8470f9bb72)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,uint8_t data)`            | Set content of configuration register.
`public int `[`at30tse75x_set_resolution`](#group__drivers__at30tse75x_1gab7e84f48c09566945c3c0e62e90f7248)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1gafeadcd21593d24469ca9a993ccc61b53)` resolution)`            | Set temperature resolution.
`public int `[`at30tse75x_set_mode`](#group__drivers__at30tse75x_1ga84ddf449aab7ec99473bc206f9d563c3)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1gaf2e8b3e16188ace5b23d750b48a6f605)` mode)`            | Set operation mode.
`public int `[`at30tse75x_set_alarm_polarity`](#group__drivers__at30tse75x_1gad12b8bcf52cdd799befc018ad24491a1)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_alarm_polatity_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1ga5f702e73082112cd7dae9a2e336fe1de)` polarity)`            | Set polarity of ALERT pin.
`public int `[`at30tse75x_set_fault_tolerance`](#group__drivers__at30tse75x_1gaccc2c0e7b0f6857c813cacdc5c3db0b7)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_fault_tolerance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1ga995ed7ef8bd331621851f376d8bfc0b0)` tolerance)`            | Set tolerance to outlying measurements.
`public int `[`at30tse75x_set_limit_low`](#group__drivers__at30tse75x_1ga349afd43999be83ffd8c08a7d83bc97b)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,int8_t t_low)`            | Set T_Low limit.
`public int `[`at30tse75x_set_limit_high`](#group__drivers__at30tse75x_1gaf35d6c719afa9784168e970dbb5e9b46)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,int8_t t_high)`            | Set T_High limit.
`public int `[`at30tse75x_get_temperature`](#group__drivers__at30tse75x_1ga5139c4b3f6a4c138fd96179f39b0224d)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,float * temperature)`            | Get measured temperature.
`struct `[`at30tse75x_t`](#structat30tse75x__t) | Device descriptor for a AT30TSE75x device.

## Members

#### `public int `[`at30tse75x_init`](#group__drivers__at30tse75x_1gae202f1f561b097db8bbf516ac49d1cb0)`(`[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` i2c,uint8_t addr)` 

Initialize a AT30TSE75x device.

#### Parameters
* `dev` device descriptor 

* `i2c` I2C bus the device is connected to 

* `addr` I2C address of the device

The valid address range is 0x48 - 0x4f depending on the configuration of the address pins A0-A2.

#### Returns
0 on success 

#### Returns
-1 on error 

#### Returns
-2 on invalid address

#### `public int `[`at30tse75x_save_config`](#group__drivers__at30tse75x_1ga7ed65a164f928fa9da0fa5bd5d0e7277)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev)` 

Save configuration register to non-volatile backup register.

#### Parameters
* `dev` device descriptor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`at30tse75x_restore_config`](#group__drivers__at30tse75x_1gae222355cd32dba4d627a9b9d382db514)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev)` 

Restore configuration register from non-volatile backup register.

#### Parameters
* `dev` device descriptor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`at30tse75x_get_config`](#group__drivers__at30tse75x_1gab3cc192d34877673efaf0445867ee722)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,uint8_t * data)` 

Get content of configuration register.

#### Parameters
* `dev` device descriptor 

* `data` buffer where config register will be written to

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`at30tse75x_set_config`](#group__drivers__at30tse75x_1ga6eb10dbbe138e0507bf54a8470f9bb72)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,uint8_t data)` 

Set content of configuration register.

#### Parameters
* `dev` device descriptor 

* `data` new value for configuration register

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`at30tse75x_set_resolution`](#group__drivers__at30tse75x_1gab7e84f48c09566945c3c0e62e90f7248)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_resolution_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1gafeadcd21593d24469ca9a993ccc61b53)` resolution)` 

Set temperature resolution.

#### Parameters
* `dev` device descriptor 

* `resolution` temperature resolution

#### Returns
0 on success 

#### Returns
-1 on error 

#### Returns
-2 on bad user input

#### `public int `[`at30tse75x_set_mode`](#group__drivers__at30tse75x_1ga84ddf449aab7ec99473bc206f9d563c3)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1gaf2e8b3e16188ace5b23d750b48a6f605)` mode)` 

Set operation mode.

#### Parameters
* `dev` device descriptor 

* `mode` operation mode

#### Returns
0 on success 

#### Returns
-1 on device error 

#### Returns
-2 on bad user input

#### `public int `[`at30tse75x_set_alarm_polarity`](#group__drivers__at30tse75x_1gad12b8bcf52cdd799befc018ad24491a1)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_alarm_polatity_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1ga5f702e73082112cd7dae9a2e336fe1de)` polarity)` 

Set polarity of ALERT pin.

#### Parameters
* `dev` device descriptor 

* `polarity` polarity of ALERT pin

#### Returns
0 on success 

#### Returns
-1 on device error 

#### Returns
-2 on bad user input

#### `public int `[`at30tse75x_set_fault_tolerance`](#group__drivers__at30tse75x_1gaccc2c0e7b0f6857c813cacdc5c3db0b7)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,`[`at30tse75x_fault_tolerance_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at30tse75x_1ga995ed7ef8bd331621851f376d8bfc0b0)` tolerance)` 

Set tolerance to outlying measurements.

#### Parameters
* `dev` device descriptor 

* `tolerance` tolerance

#### Returns
0 on success 

#### Returns
-1 on device error 

#### Returns
-2 on bad user input

#### `public int `[`at30tse75x_set_limit_low`](#group__drivers__at30tse75x_1ga349afd43999be83ffd8c08a7d83bc97b)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,int8_t t_low)` 

Set T_Low limit.

#### Parameters
* `dev` device descriptor 

* `t_low` lower temperature limit

#### Returns
0 on success 

#### Returns
-1 on device error 

#### Returns
-2 on bad user input

#### `public int `[`at30tse75x_set_limit_high`](#group__drivers__at30tse75x_1gaf35d6c719afa9784168e970dbb5e9b46)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,int8_t t_high)` 

Set T_High limit.

#### Parameters
* `dev` device descriptor 

* `t_high` upper temperature limit

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`at30tse75x_get_temperature`](#group__drivers__at30tse75x_1ga5139c4b3f6a4c138fd96179f39b0224d)`(const `[`at30tse75x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_at30tse75x.md#structat30tse75x__t)` * dev,float * temperature)` 

Get measured temperature.

#### Parameters
* `dev` device descriptor 

* `temperature` float buffer where temperature will be written to

#### Returns
0 on success 

#### Returns
-1 on error

# struct `at30tse75x_t` 

Device descriptor for a AT30TSE75x device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structat30tse75x__t_1a3b05232496e3c0c47f2fa6c80dae6872) | I2C device that sensor is connected to.
`public uint8_t `[`addr`](#structat30tse75x__t_1ae7878027205ec48d95e046942cfd09a1) | I2C address of this particular sensor.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structat30tse75x__t_1a3b05232496e3c0c47f2fa6c80dae6872) 

I2C device that sensor is connected to.

#### `public uint8_t `[`addr`](#structat30tse75x__t_1ae7878027205ec48d95e046942cfd09a1) 

I2C address of this particular sensor.

