---
title: api-drivers_ds18.md
description: api-drivers_ds18.md
---
# group `drivers_ds18` 

Driver interface for the DS18 temperature sensors.

This driver provides [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) capabilities. Currently the driver has the following limitations:

* Does not allow addressing devices, only supports a single device on the bus.

* The 1-Wire bus handling is hardcoded to the driver.

* Does not allow configuration of sampling width.

Due to timing issues present on some boards this drivers features two ways of reading information from the sensor. The optimized uses accurate delays to handle this, while the second way polls the line for changes. If you know that your board can handle ~3us resolution with the xtimer module, then the optimized way is recommended. To used the optimized way add the ds18_optimized module. Also this driver test application has a whitelist of the boards this driver has been tested on and known to work.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`ds18_init`](#group__drivers__ds18_1gaf39bd92cb91bdc9100278ac811381afb)`(`[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev,const `[`ds18_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__params__t)` * params)`            | Initialize a ds18 device.
`public int `[`ds18_trigger`](#group__drivers__ds18_1gaea048a7f860496103fa8f410b3317f0b)`(const `[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev)`            | Triggers a temperature conversion.
`public int `[`ds18_read`](#group__drivers__ds18_1gaa03b66d55a56917a744d8176da52978d)`(const `[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev,int16_t * temperature)`            | Reads the scratchpad for the last conversion.
`public int `[`ds18_get_temperature`](#group__drivers__ds18_1gae29c1b10607c50da0f7b926f523da735)`(const `[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev,int16_t * temperature)`            | convenience function for triggering a conversion and reading the value
`struct `[`ds18_params_t`](#structds18__params__t) | Device initialization parameters.
`struct `[`ds18_t`](#structds18__t) | Device descriptor for a ds18 device.

## Members

#### `public int `[`ds18_init`](#group__drivers__ds18_1gaf39bd92cb91bdc9100278ac811381afb)`(`[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev,const `[`ds18_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__params__t)` * params)` 

Initialize a ds18 device.

#### Parameters
* `dev` device descriptor 

* `params` ds18 initialization struct

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`ds18_trigger`](#group__drivers__ds18_1gaea048a7f860496103fa8f410b3317f0b)`(const `[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev)` 

Triggers a temperature conversion.

This also triggers a conversion on all devices connected to the bus

#### Parameters
* `dev` device descriptor

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`ds18_read`](#group__drivers__ds18_1gaa03b66d55a56917a744d8176da52978d)`(const `[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev,int16_t * temperature)` 

Reads the scratchpad for the last conversion.

#### Parameters
* `dev` device descriptor 

* `temperature` buffer to write the temperature in centi-degrees

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`ds18_get_temperature`](#group__drivers__ds18_1gae29c1b10607c50da0f7b926f523da735)`(const `[`ds18_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__t)` * dev,int16_t * temperature)` 

convenience function for triggering a conversion and reading the value

This function will block for the conversion time. The current implementation of the driver uses 12-bit resolution, so this time is 750 ms.

#### Parameters
* `dev` device descriptor 

* `temperature` buffer to write the temperature in centi-degrees

#### Returns
0 on success 

#### Returns
-1 on error

# struct `ds18_params_t` 

Device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structds18__params__t_1a88019fd2836bd63985819c73bb0daef1) | Pin the sensor is connected to.
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`out_mode`](#structds18__params__t_1aab13bb27e83908d489f5ab8cef535442) | Pin output mode.
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`in_mode`](#structds18__params__t_1a009060c627aa1e1f112dc6e65f49b29c) | Pin input mode (usually deduced from output mode)

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structds18__params__t_1a88019fd2836bd63985819c73bb0daef1) 

Pin the sensor is connected to.

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`out_mode`](#structds18__params__t_1aab13bb27e83908d489f5ab8cef535442) 

Pin output mode.

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`in_mode`](#structds18__params__t_1a009060c627aa1e1f112dc6e65f49b29c) 

Pin input mode (usually deduced from output mode)

# struct `ds18_t` 

Device descriptor for a ds18 device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ds18_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__params__t)` `[`params`](#structds18__t_1a4ef7c27393de205b34ba9d47e7e16e10) | Device Parameters.

## Members

#### `public `[`ds18_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ds18.md#structds18__params__t)` `[`params`](#structds18__t_1a4ef7c27393de205b34ba9d47e7e16e10) 

Device Parameters.

