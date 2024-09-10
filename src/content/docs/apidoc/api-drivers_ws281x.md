---
title: api-drivers_ws281x.md
description: api-drivers_ws281x.md
---
# group `drivers_ws281x` 

Driver for the WS2812 or the SK6812 RGB LEDs sold as NeoPixel.

SummaryThe WS2812 or SK6812 RGB LEDs, or more commonly known as NeoPixels, can be chained so that a single data pin of the MCU can control an arbitrary number of RGB LEDs. This driver supports both the WS2812/SK6812 and the WS2812b LEDs.

SupportThe protocol to communicate with the WS281x is custom, so no hardware implementations can be used. Hence, the protocol needs to be bit banged in software. As the timing requirements are too strict to do this using the platform independent APIs for accessing [GPIO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio) and [xtimer high level timer abstraction layer (deprecated)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer), platform specific implementations of [ws281x_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ws281x_1ga3680a18762396b4b41df473fcab8942a) are needed.

ATmegaA bit banging implementation for ATmegas clocked at 8MHz and at 16MHz is provided. Boards clocked at any other core frequency are not supported. (But keep in mind that most (all?) ATmega MCUs do have an internal 8MHz oscillator, that could be enabled by changing the fuse settings.)

On 8MHz ATmegas, only pins at GPIO ports B, C, and D are supported. (On 16MHz ATmegas, any pin is fine.)

ESP32The ESP32 implementation is frequency independent, as frequencies above 80MHz are high enough to support bit banging without assembly.

Native/VT100The native (VT100) implementation writes the LED state to the console.

UsageAdd the following to your `Makefile`:

* Auto-selecting the backend: 
```cpp
USEMODULE += ws281x
```

This will automatically pull in one of the backends supported by your board. In case multiple backends apply and the automatic selection does not pick your preferred backend, you can manually pick your preferred backend as described below.

* the ATmega backend: 
```cpp
USEMODULE += ws281x_atmega
```

* the ESP32 backend: 
```cpp
USEMODULE += ws281x_esp32
```

* the native/VT100 backend: 
```cpp
USEMODULE += ws281x_vt100
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`WS281X_BYTES_PER_DEVICE`](#group__drivers__ws281x_1ga55526cbb4cc2d0eb0b5a5736ba2818f9)            | The number of bytes to allocate in the data buffer per LED.
`public int `[`ws281x_init`](#group__drivers__ws281x_1ga86c21bf9f319acb9c87725b1f9322f46)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev,const `[`ws281x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__params__t)` * params)`            | Initialize an WS281x RGB LED chain.
`public void `[`ws281x_write_buffer`](#group__drivers__ws281x_1gaed6836b35419db74c0157baf49fa50a3)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev,const void * buf,size_t size)`            | Writes the color data of the user supplied buffer.
`public void `[`ws281x_prepare_transmission`](#group__drivers__ws281x_1gab946c1a39cf3a2ebefb8fe0ae12e4bd9)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev)`            | Sets up everything needed to write data to the WS281X LED chain.
`public void `[`ws281x_end_transmission`](#group__drivers__ws281x_1ga6dc34ec194571babec40b5a19415ed66)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev)`            | Ends the transmission to the WS2812/SK6812 LED chain.
`public void `[`ws281x_set_buffer`](#group__drivers__ws281x_1gaf8e3ae1677359d0ff025aa2ecbe9911a)`(void * dest,uint16_t index,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` color)`            | Sets the color of an LED in the given data buffer.
`public inline static void `[`ws281x_set`](#group__drivers__ws281x_1ga02cbbd1887bf1c4bf5d260e847694b42)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev,uint16_t index,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` color)`            | Sets the color of an LED in the chain in the internal buffer.
`public inline static void `[`ws281x_write`](#group__drivers__ws281x_1ga3680a18762396b4b41df473fcab8942a)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev)`            | Writes the internal buffer to the LED chain.
`struct `[`ws281x_params_t`](#structws281x__params__t) | Struct to hold initialization parameters for a WS281x RGB LED.
`struct `[`ws281x_t`](#structws281x__t) | Device descriptor of a WS281x RGB LED chain.

## Members

#### `define `[`WS281X_BYTES_PER_DEVICE`](#group__drivers__ws281x_1ga55526cbb4cc2d0eb0b5a5736ba2818f9) 

The number of bytes to allocate in the data buffer per LED.

#### `public int `[`ws281x_init`](#group__drivers__ws281x_1ga86c21bf9f319acb9c87725b1f9322f46)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev,const `[`ws281x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__params__t)` * params)` 

Initialize an WS281x RGB LED chain.

#### Parameters
* `dev` Device descriptor to initialize 

* `params` Parameters to initialize the device with

#### Parameters
* `0` Success 

* `-EINVAL` Invalid argument 

* `-EIO` Failed to initialize the data GPIO pin

#### `public void `[`ws281x_write_buffer`](#group__drivers__ws281x_1gaed6836b35419db74c0157baf49fa50a3)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev,const void * buf,size_t size)` 

Writes the color data of the user supplied buffer.

#### Parameters
* `dev` Device descriptor of the LED chain to write to 

* `buf` Buffer to write 

* `size` Size of the buffer in bytes

Before the transmission starts [ws281x_prepare_transmission](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ws281x_1gab946c1a39cf3a2ebefb8fe0ae12e4bd9) is called 

At the end of the transmission [ws281x_end_transmission](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ws281x_1ga6dc34ec194571babec40b5a19415ed66) is called

This function can be used to drive a huge number of LEDs with small data buffers. However, after the return of this function the next chunk should be send within a few microseconds to avoid accidentally sending the end of transmission signal.

Usage: 
```cpp
uint8_t chunk[CHUNK_SIZE];
ws281x_prepare_transmission(ws281x_dev);
while (more_chunks_available()) {
   prepare_chunk(chunk);
   ws281x_write_buffer(ws281x_dev, chunk, sizeof(chunk));
}
ws281x_end_transmission(dev);
```

#### `public void `[`ws281x_prepare_transmission`](#group__drivers__ws281x_1gab946c1a39cf3a2ebefb8fe0ae12e4bd9)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev)` 

Sets up everything needed to write data to the WS281X LED chain.

#### Parameters
* `dev` Device descriptor of the LED chain to write to

#### `public void `[`ws281x_end_transmission`](#group__drivers__ws281x_1ga6dc34ec194571babec40b5a19415ed66)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev)` 

Ends the transmission to the WS2812/SK6812 LED chain.

#### Parameters
* `dev` Device descriptor of the LED chain to write to

Does any cleanup the backend needs after sending data. In the simplest case it simply waits for 80µs to send the end of transmission signal.

#### `public void `[`ws281x_set_buffer`](#group__drivers__ws281x_1gaf8e3ae1677359d0ff025aa2ecbe9911a)`(void * dest,uint16_t index,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` color)` 

Sets the color of an LED in the given data buffer.

#### Parameters
* `dest` Buffer to set the color in 

* `index` The index of the LED to set the color of 

* `color` The new color to apply

This change will not become active until [ws281x_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ws281x_1ga3680a18762396b4b41df473fcab8942a) is called

#### `public inline static void `[`ws281x_set`](#group__drivers__ws281x_1ga02cbbd1887bf1c4bf5d260e847694b42)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev,uint16_t index,`[`color_rgb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_color.md#structcolor__rgb__t)` color)` 

Sets the color of an LED in the chain in the internal buffer.

#### Parameters
* `dev` Device descriptor of the LED chain to modify 

* `index` The index of the LED to set the color of 

* `color` The new color to apply

This change will not become active until [ws281x_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ws281x_1ga3680a18762396b4b41df473fcab8942a) is called

#### `public inline static void `[`ws281x_write`](#group__drivers__ws281x_1ga3680a18762396b4b41df473fcab8942a)`(`[`ws281x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__t)` * dev)` 

Writes the internal buffer to the LED chain.

#### Parameters
* `dev` Device descriptor of the LED chain to write to

This function implicitly calls [ws281x_end_transmission](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ws281x_1ga6dc34ec194571babec40b5a19415ed66)

**See also**: [ws281x_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ws281x_1ga02cbbd1887bf1c4bf5d260e847694b42)

# struct `ws281x_params_t` 

Struct to hold initialization parameters for a WS281x RGB LED.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t * `[`buf`](#structws281x__params__t_1a562301e2ae9f1f0729a2d8e288b182f5) | A statically allocated data buffer storing the state of the LEDs.
`public uint16_t `[`numof`](#structws281x__params__t_1ad6237847ab2159d23168459e61f4f587) | Number of chained RGB LEDs.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structws281x__params__t_1a4b226a6f3abff1a6dde5d4c9eabe4eb1) | GPIO connected to the data pin of the first LED.

## Members

#### `public uint8_t * `[`buf`](#structws281x__params__t_1a562301e2ae9f1f0729a2d8e288b182f5) 

A statically allocated data buffer storing the state of the LEDs.

Must be sized `numof * WS281X_BYTES_PER_DEVICE` bytes

#### `public uint16_t `[`numof`](#structws281x__params__t_1ad6237847ab2159d23168459e61f4f587) 

Number of chained RGB LEDs.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structws281x__params__t_1a4b226a6f3abff1a6dde5d4c9eabe4eb1) 

GPIO connected to the data pin of the first LED.

# struct `ws281x_t` 

Device descriptor of a WS281x RGB LED chain.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ws281x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__params__t)` `[`params`](#structws281x__t_1a82d4e3409b29216a1298882546ae2cda) | Parameters of the LED chain.

## Members

#### `public `[`ws281x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ws281x.md#structws281x__params__t)` `[`params`](#structws281x__t_1a82d4e3409b29216a1298882546ae2cda) 

Parameters of the LED chain.

