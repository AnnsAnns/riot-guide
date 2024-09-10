---
title: api-drivers_encx24j600.md
description: api-drivers_encx24j600.md
---
# group `drivers_encx24j600` 

Driver for the ENCX24J600 Ethernet Adapter.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`encx24j600_setup`](#group__drivers__encx24j600_1ga3e67895f3c7a15fabf1a6fad78c19a27)`(`[`encx24j600_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_encx24j600.md#structencx24j600__t)` * dev,const `[`encx24j600_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_encx24j600.md#structencx24j600__params__t)` * params,uint8_t index)`            | Setup an encx24j600 based device state.
`struct `[`encx24j600_t`](#structencx24j600__t) | encx24j600 netdev device
`struct `[`encx24j600_params_t`](#structencx24j600__params__t) | Struct containing the needed peripheral configuration.

## Members

#### `public void `[`encx24j600_setup`](#group__drivers__encx24j600_1ga3e67895f3c7a15fabf1a6fad78c19a27)`(`[`encx24j600_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_encx24j600.md#structencx24j600__t)` * dev,const `[`encx24j600_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_encx24j600.md#structencx24j600__params__t)` * params,uint8_t index)` 

Setup an encx24j600 based device state.

This function sets SPI pins, initializes the device state structure. It does not initialize the device itself.

#### Parameters
* `dev` the handle of the device to initialize 

* `params` parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

# struct `encx24j600_t` 

```
struct encx24j600_t
  : public netdev
```  

encx24j600 netdev device

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structencx24j600__t_1aa53a83dd56598538090b5c099f16bde1) | extended netdev structure
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structencx24j600__t_1ac035f7cd657e70020be63497df15d30f) | SPI device the enc is connected to.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structencx24j600__t_1ab6f9602be87fa2aa45e93dd7cdaee2dc) | SPI chip select pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structencx24j600__t_1a4a2b7d11edaa8777b070c6f5193f6a09) | SPI interrupt pin.
`public uint16_t `[`rx_next_ptr`](#structencx24j600__t_1a3fec9f4471170c149c1be67ee8322815) | ptr to next packet within devices memory

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structencx24j600__t_1aa53a83dd56598538090b5c099f16bde1) 

extended netdev structure

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structencx24j600__t_1ac035f7cd657e70020be63497df15d30f) 

SPI device the enc is connected to.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structencx24j600__t_1ab6f9602be87fa2aa45e93dd7cdaee2dc) 

SPI chip select pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structencx24j600__t_1a4a2b7d11edaa8777b070c6f5193f6a09) 

SPI interrupt pin.

#### `public uint16_t `[`rx_next_ptr`](#structencx24j600__t_1a3fec9f4471170c149c1be67ee8322815) 

ptr to next packet within devices memory

# struct `encx24j600_params_t` 

Struct containing the needed peripheral configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structencx24j600__params__t_1a4e038dd926e2c60a04273be5d31e32bd) | SPI line.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structencx24j600__params__t_1ad1cd88378c3fb46e36a6eb5e5b9e3887) | chip select pin
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structencx24j600__params__t_1a449505ba48e1fbcb96f863caccac4f09) | interrupt pin

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structencx24j600__params__t_1a4e038dd926e2c60a04273be5d31e32bd) 

SPI line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structencx24j600__params__t_1ad1cd88378c3fb46e36a6eb5e5b9e3887) 

chip select pin

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structencx24j600__params__t_1a449505ba48e1fbcb96f863caccac4f09) 

interrupt pin

