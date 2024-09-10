---
title: api-drivers_ethos.md
description: api-drivers_ethos.md
---
# group `drivers_ethos` 

Driver for the ethernet-over-serial module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`line_state_t`](#group__drivers__ethos_1ga55f4253a9885dff9bf3ab4e3131b5e45)            | Enum describing line state.
`public void `[`ethos_setup`](#group__drivers__ethos_1gae6d35008ae14fe18a0a56d60f4d47c8e)`(`[`ethos_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ethos.md#structethos__t)` * dev,const `[`ethos_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ethos.md#structethos__params__t)` * params,uint8_t index,void * inbuf,size_t inbuf_size)`            | Setup an ethos based device state.
`public void `[`ethos_send_frame`](#group__drivers__ethos_1gadb9bc46ab8a39cc605210402c12fa2b8)`(`[`ethos_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ethos.md#structethos__t)` * dev,const uint8_t * data,size_t len,unsigned frame_type)`            | Send frame over serial port using ethos' framing.
`struct `[`ethos_t`](#structethos__t) | ethos netdev device
`struct `[`ethos_params_t`](#structethos__params__t) | Struct containing the needed configuration.

## Members

#### `enum `[`line_state_t`](#group__drivers__ethos_1ga55f4253a9885dff9bf3ab4e3131b5e45) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
WAIT_FRAMESTART            | 
IN_FRAME            | 
IN_ESCAPE            | 

Enum describing line state.

#### `public void `[`ethos_setup`](#group__drivers__ethos_1gae6d35008ae14fe18a0a56d60f4d47c8e)`(`[`ethos_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ethos.md#structethos__t)` * dev,const `[`ethos_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ethos.md#structethos__params__t)` * params,uint8_t index,void * inbuf,size_t inbuf_size)` 

Setup an ethos based device state.

The supplied buffer *must* have a power-of-two size, and it *must* be large enough for the largest expected packet + enough buffer space to buffer bytes that arrive while one packet is being handled.

E.g., if 1536b ethernet frames are expected, 2048 is probably a good size for `buf`.

#### Parameters
* `dev` handle of the device to initialize 

* `params` parameters for device initialization 

* `index` Index of `params` in a global parameter struct array. If initialized manually, pass a unique identifier instead. 

* `inbuf` buffer to store a received frame in 

* `inbuf_size` size of the receive buffer

#### `public void `[`ethos_send_frame`](#group__drivers__ethos_1gadb9bc46ab8a39cc605210402c12fa2b8)`(`[`ethos_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ethos.md#structethos__t)` * dev,const uint8_t * data,size_t len,unsigned frame_type)` 

Send frame over serial port using ethos' framing.

This is used by e.g., stdio over ethos to send text frames.

Uses mutexes to synchronize sending multiple frames so it should not be called from ISR.

#### Parameters
* `dev` handle of the device to initialize 

* `data` ptr to data to be sent 

* `len` nr of bytes to send 

* `frame_type` frame type to use

# struct `ethos_t` 

```
struct ethos_t
  : public netdev
```  

ethos netdev device

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structethos__t_1aa19e014d50b17153a37b4f569e850816) | extended netdev structure
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structethos__t_1afd058f8f2efb04dec945d7d1f8b1177c) | UART device the to use.
`public uint8_t `[`mac_addr`](#structethos__t_1a661bb3a792175f8ccbaa702557814841) | this device's MAC address
`public uint8_t `[`remote_mac_addr`](#structethos__t_1a60a4822f8d39e3d2008df73ca45fa297) | this device's MAC address
`public `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` `[`inbuf`](#structethos__t_1a126fafcdccea6410c086a9a4cb3af3dd) | ringbuffer for incoming data
`public `[`line_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ethos_1ga55f4253a9885dff9bf3ab4e3131b5e45)` `[`state`](#structethos__t_1add056b1c4bc907d6012a5cd780397116) | Line status variable.
`public unsigned `[`frametype`](#structethos__t_1a5e87a24716d8235930ab211d10f1dec9) | type of currently incoming frame
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`out_mutex`](#structethos__t_1a40cdc851c2db31ea04b3ce8e34bc9474) | mutex used for locking concurrent sends

## Members

#### `public `[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` `[`netdev`](#structethos__t_1aa19e014d50b17153a37b4f569e850816) 

extended netdev structure

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structethos__t_1afd058f8f2efb04dec945d7d1f8b1177c) 

UART device the to use.

#### `public uint8_t `[`mac_addr`](#structethos__t_1a661bb3a792175f8ccbaa702557814841) 

this device's MAC address

#### `public uint8_t `[`remote_mac_addr`](#structethos__t_1a60a4822f8d39e3d2008df73ca45fa297) 

this device's MAC address

#### `public `[`tsrb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__tsrb_1gaa84b29b1af1ec9683aed02c4fdd3e123)` `[`inbuf`](#structethos__t_1a126fafcdccea6410c086a9a4cb3af3dd) 

ringbuffer for incoming data

#### `public `[`line_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ethos_1ga55f4253a9885dff9bf3ab4e3131b5e45)` `[`state`](#structethos__t_1add056b1c4bc907d6012a5cd780397116) 

Line status variable.

#### `public unsigned `[`frametype`](#structethos__t_1a5e87a24716d8235930ab211d10f1dec9) 

type of currently incoming frame

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`out_mutex`](#structethos__t_1a40cdc851c2db31ea04b3ce8e34bc9474) 

mutex used for locking concurrent sends

# struct `ethos_params_t` 

Struct containing the needed configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structethos__params__t_1a8374cf7f3a8c6264f0422d9b244ffe40) | UART device to use.
`public uint32_t `[`baudrate`](#structethos__params__t_1a2774f92f32a5498f68bdd89775d3c431) | baudrate to UART device

## Members

#### `public `[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` `[`uart`](#structethos__params__t_1a8374cf7f3a8c6264f0422d9b244ffe40) 

UART device to use.

#### `public uint32_t `[`baudrate`](#structethos__params__t_1a2774f92f32a5498f68bdd89775d3c431) 

baudrate to UART device

