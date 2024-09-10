---
title: api-drivers_tps6274x.md
description: api-drivers_tps6274x.md
---
# group `drivers_tps6274x` 

Device driver interface for the TPS6274x DC-DC Converter.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@275`](#group__drivers__tps6274x_1ga2db06901d03245a790e5571701aba3df)            | Status and error return codes.
`public int `[`tps6274x_init`](#group__drivers__tps6274x_1ga8a34c2ce7381d79ce798c7972e4abf21)`(`[`tps6274x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__t)` * dev,const `[`tps6274x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__params__t)` * params)`            | Init converter.
`public uint16_t `[`tps6274x_switch_voltage`](#group__drivers__tps6274x_1gae71122da149171e1c7447fcb2edbec6f)`(`[`tps6274x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__t)` * dev,uint16_t voltage)`            | Switch to different voltage level.
`public void `[`tps6274x_load_ctrl`](#group__drivers__tps6274x_1gaee38dcd24bd22a377da506640437d4e0)`(`[`tps6274x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__t)` * dev,int status)`            | Sets ctrl pin high to power a subsystem connected on the load pin.
`struct `[`tps6274x_params_t`](#structtps6274x__params__t) | TPS6274x Configuration struct.
`struct `[`tps6274x_t`](#structtps6274x__t) | Device descriptor for the TPS6274x.

## Members

#### `enum `[`@275`](#group__drivers__tps6274x_1ga2db06901d03245a790e5571701aba3df) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TPS6274X_OK            | everything was fine
TPS6274X_ERR_INIT            | error during init

Status and error return codes.

#### `public int `[`tps6274x_init`](#group__drivers__tps6274x_1ga8a34c2ce7381d79ce798c7972e4abf21)`(`[`tps6274x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__t)` * dev,const `[`tps6274x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__params__t)` * params)` 

Init converter.

#### Parameters
* `dev` Initialized device descriptor for TPS6274x device 

* `params` Initialization parameters

#### Returns
set voltage in mV

#### `public uint16_t `[`tps6274x_switch_voltage`](#group__drivers__tps6274x_1gae71122da149171e1c7447fcb2edbec6f)`(`[`tps6274x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__t)` * dev,uint16_t voltage)` 

Switch to different voltage level.

#### Parameters
* `dev` Device descriptor for TPS6274x device 

* `voltage` Voltage to set in mV (needs to be between 1.8V-3.3V 

#### Returns
the voltage that was set in mV

#### `public void `[`tps6274x_load_ctrl`](#group__drivers__tps6274x_1gaee38dcd24bd22a377da506640437d4e0)`(`[`tps6274x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__t)` * dev,int status)` 

Sets ctrl pin high to power a subsystem connected on the load pin.

#### Parameters
* `dev` Device descriptor for TPS6274x device 

* `status` 0 will disable the load, everything else will activate it

# struct `tps6274x_params_t` 

TPS6274x Configuration struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`vsel`](#structtps6274x__params__t_1a1e56b8d865b42ca56b8aaf180139ba01) | select line pin mapping
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`ctrl_pin`](#structtps6274x__params__t_1ab98e0335fbb517e1a7c9a240baeee698) | ctrl pin mapping

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`vsel`](#structtps6274x__params__t_1a1e56b8d865b42ca56b8aaf180139ba01) 

select line pin mapping

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`ctrl_pin`](#structtps6274x__params__t_1ab98e0335fbb517e1a7c9a240baeee698) 

ctrl pin mapping

# struct `tps6274x_t` 

Device descriptor for the TPS6274x.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`tps6274x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__params__t)` `[`params`](#structtps6274x__t_1adfdc9ff1f378a0d3d1f139d2a691c84c) | device initialization parameters

## Members

#### `public `[`tps6274x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_tps6274x.md#structtps6274x__params__t)` `[`params`](#structtps6274x__t_1adfdc9ff1f378a0d3d1f139d2a691c84c) 

device initialization parameters

