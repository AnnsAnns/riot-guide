---
title: api-drivers_slipdev.md
description: api-drivers_slipdev.md
---
# group `drivers_slipdev` 

SLIP network device over [UART](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart).

**See also**: [RFC 1055](https://github.com/RIOT-OS/RIOT/pull/6487)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`slipdev_setup`](#group__drivers__slipdev_1ga4f4b5494da4b15060e1e15e734825e51)`(`[`slipdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__t)` * dev,const `[`slipdev_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__params__t)` * params,uint8_t index)`            | Setup a slipdev device state.
`struct `[`slipdev_params_t`](#structslipdev__params__t) | Configuration parameters for a slipdev.
`struct `[`slipdev_t`](#structslipdev__t) | Device descriptor for slipdev.

## Members

#### `public void `[`slipdev_setup`](#group__drivers__slipdev_1ga4f4b5494da4b15060e1e15e734825e51)`(`[`slipdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__t)` * dev,const `[`slipdev_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__params__t)` * params,uint8_t index)` 

Setup a slipdev device state.

#### Parameters
* `dev` device descriptor 

* `params` parameters for device initialization 

* `index` index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead.

# struct `slipdev_params_t` 

Configuration parameters for a slipdev.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structslipdev__params__t_1a85fef6f627f2780feac21dec246c03ef) | UART interface the device is connected to.
`public uint32_t `[`baudrate`](#structslipdev__params__t_1a1720a84845187420341516cb66cc77e3) | baudrate to use with [slipdev_params_t::uart](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__params__t_1a85fef6f627f2780feac21dec246c03ef)

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structslipdev__params__t_1a85fef6f627f2780feac21dec246c03ef) 

UART interface the device is connected to.

#### `public uint32_t `[`baudrate`](#structslipdev__params__t_1a1720a84845187420341516cb66cc77e3) 

baudrate to use with [slipdev_params_t::uart](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__params__t_1a85fef6f627f2780feac21dec246c03ef)

# struct `slipdev_t` 

```
struct slipdev_t
  : public netdev
```  

Device descriptor for slipdev.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structslipdev__t_1affca7a08df49efc813500002e1ea3707) | parent class
`public `[`slipdev_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__params__t)` `[`config`](#structslipdev__t_1a15d2ec6969624dc0ff2b675ba015d61a) | configuration parameters
`public `[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` `[`rb`](#structslipdev__t_1a197ff56d200eecc3d239643a78d0e638) | Ringbuffer to store received frames.
`public uint8_t `[`rxmem`](#structslipdev__t_1ac9e41b5c3b8f872e5800dfeeecd59454) | memory used by RX buffer
`public uint8_t `[`state`](#structslipdev__t_1aa865fce96f13a3f390fac1e9ab767628) | Device state.

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structslipdev__t_1affca7a08df49efc813500002e1ea3707) 

parent class

#### `public `[`slipdev_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_slipdev.md#structslipdev__params__t)` `[`config`](#structslipdev__t_1a15d2ec6969624dc0ff2b675ba015d61a) 

configuration parameters

#### `public `[`chunk_ringbuf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_chunk_buffer.md#structchunk__ringbuf__t)` `[`rb`](#structslipdev__t_1a197ff56d200eecc3d239643a78d0e638) 

Ringbuffer to store received frames.

#### `public uint8_t `[`rxmem`](#structslipdev__t_1ac9e41b5c3b8f872e5800dfeeecd59454) 

memory used by RX buffer

#### `public uint8_t `[`state`](#structslipdev__t_1aa865fce96f13a3f390fac1e9ab767628) 

Device state.

**See also**: [Device state definitions](#group__drivers__slipdev_1drivers_slipdev_states)

