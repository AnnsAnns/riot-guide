---
title: api-drivers_srf04.md
description: api-drivers_srf04.md
---
# group `drivers_srf04` 

Device driver for the srf04 ultra sonic range finder.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@266`](#group__drivers__srf04_1ga35b7fa7665fe812ec8d7cf77bbcdbc26)            | Status and error return codes.
`public int `[`srf04_init`](#group__drivers__srf04_1gad24fd83c4e3aa5ec320ead31e68c8299)`(`[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev,const `[`srf04_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__params__t)` * params)`            | Initialize gpio and interrupt.
`public void `[`srf04_trigger`](#group__drivers__srf04_1ga2a634ea644e25adaf7fb3afc1e0963aa)`(const `[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev)`            | Triggers measurement.
`public int `[`srf04_read`](#group__drivers__srf04_1ga3901854d25bcf9ce952e03b8760041d6)`(const `[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev)`            | Returns time of flight in ms.
`public int `[`srf04_get_distance`](#group__drivers__srf04_1gaa437bcf6f4f16be0543760a6670e9e0a)`(const `[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev)`            | Convenience function triggers a measurement and returns distance.
`struct `[`srf04_params_t`](#structsrf04__params__t) | GPIO pins for srf04 device.
`struct `[`srf04_t`](#structsrf04__t) | Device descriptor for srf04 sensor.

## Members

#### `enum `[`@266`](#group__drivers__srf04_1ga35b7fa7665fe812ec8d7cf77bbcdbc26) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SRF04_OK            | exit without error
SRF04_ERR_INVALID            | error no valid measurement available
SRF04_ERR_MEASURING            | error sensor is measuring
SRF04_ERR_GPIO            | error initializing gpio

Status and error return codes.

#### `public int `[`srf04_init`](#group__drivers__srf04_1gad24fd83c4e3aa5ec320ead31e68c8299)`(`[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev,const `[`srf04_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__params__t)` * params)` 

Initialize gpio and interrupt.

#### Parameters
* `dev` device descriptor of sensor to initialize 

* `params` init param struct holding gpio trigger and echo pins

#### Returns
SRF04_OK on success 

#### Returns
SRF04_GPIO on gpio init failure

#### `public void `[`srf04_trigger`](#group__drivers__srf04_1ga2a634ea644e25adaf7fb3afc1e0963aa)`(const `[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev)` 

Triggers measurement.

#### Parameters
* `dev` device descriptor of sensor

#### `public int `[`srf04_read`](#group__drivers__srf04_1ga3901854d25bcf9ce952e03b8760041d6)`(const `[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev)` 

Returns time of flight in ms.

should not be invoked within 50 ms after triggering

#### Parameters
* `dev` device descriptor of sensor

#### Returns
time of flight in ms 

#### Returns
SRF04_MEASURING if measurement is in progress 

#### Returns
SRF04_INVALID if no valid measurement is available

#### `public int `[`srf04_get_distance`](#group__drivers__srf04_1gaa437bcf6f4f16be0543760a6670e9e0a)`(const `[`srf04_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__t)` * dev)` 

Convenience function triggers a measurement and returns distance.

This function will return after 50 ms once new data is available

#### Parameters
* `dev` device descriptor of sensor

#### Returns
time of flight in mm 

#### Returns
SRF04_MEASURING if measurement is in progress 

#### Returns
SRF04_INVALID if no valid measurement is available

# struct `srf04_params_t` 

GPIO pins for srf04 device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`trigger`](#structsrf04__params__t_1a03c9158617518b426758f2d6f6fc3f09) | GPIO Port the trigger pin is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`echo`](#structsrf04__params__t_1af48d46bc94da5b3be771c84a206b84bd) | GPIO Port the echo pin is connected to.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`trigger`](#structsrf04__params__t_1a03c9158617518b426758f2d6f6fc3f09) 

GPIO Port the trigger pin is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`echo`](#structsrf04__params__t_1af48d46bc94da5b3be771c84a206b84bd) 

GPIO Port the echo pin is connected to.

# struct `srf04_t` 

Device descriptor for srf04 sensor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`srf04_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__params__t)` `[`p`](#structsrf04__t_1af223dc3b8a829b062422a26ce04432c5) | GPIO Ports of device.
`public int32_t `[`distance`](#structsrf04__t_1a5dde4e83e19fe1c599f7219cc54c7935) | raw time of flight distance
`public uint32_t `[`time`](#structsrf04__t_1a1a42fd6a4e32981f9b5b71708084e8d7) | timestamp of trigger or echo

## Members

#### `public `[`srf04_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_srf04.md#structsrf04__params__t)` `[`p`](#structsrf04__t_1af223dc3b8a829b062422a26ce04432c5) 

GPIO Ports of device.

#### `public int32_t `[`distance`](#structsrf04__t_1a5dde4e83e19fe1c599f7219cc54c7935) 

raw time of flight distance

#### `public uint32_t `[`time`](#structsrf04__t_1a1a42fd6a4e32981f9b5b71708084e8d7) 

timestamp of trigger or echo

