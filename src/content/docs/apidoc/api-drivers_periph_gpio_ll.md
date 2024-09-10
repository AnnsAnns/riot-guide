---
title: api-drivers_periph_gpio_ll.md
description: api-drivers_periph_gpio_ll.md
---
# group `drivers_periph_gpio_ll` 

Peripheral GPIO Low-Level API.

This API is not stable yet and intended for internal use only as of now.

Design GoalsThis API aims to provide low-level access to GPIOs with as little abstraction and overhead in place as possible for the hot code paths, while providing a relatively high-level and feature complete API for the configuration of GPIO pins. The former is to enable sophisticated use cases such at bit-banging parallel protocols, bit-banging at high data rates, bit-banging with strict timing requirements, or any combination of these. The latter is to expose as much of the features the (arguably) most important peripheral of the MCU as possible.

It is possible to implement the high level pin-based GPIO API of RIOT, [GPIO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio), on top of this API. It is expected that for many use cases the high level API will still remain the API of choice, since it is more concise an easier to use.

Note that this API is likely to be faster moving than the high level GPIO API, as it intents to match the hardware features more closely. Hence, new support for new MCUs are more likely to result in API changes here. This is another reason why only users interested in the low level access to GPIOs should be using the this low level API, while the high level API will cater all the LED blinking and button sensing use cases with a more convenient and more very stable interface.

Thread SafetyAll functions provided by this API have to be implemented in a thread-safe manner, except for [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e) and [gpio_ll_prepare_write_all_outputs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga6602f963303bbdc892dae43f1f87c860). If the read-modify-write operations [gpio_ll_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga1451ee80727c089c109efef0bd0eb496), [gpio_ll_clear](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gabd4d6cbd80d67e51f5b1385460fd80f6), and [gpio_ll_toggle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gacbc8595de0d410e2f5a4caa0dabb7ac9) can be done atomically in hardware with predictable timing, this must be used in the implementation. Otherwise IRQs have to be disabled during read-modify-write sequences. Calls to [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) are inherently thread-safe and lock-less, but sharing pins on the same port between threads is still requires a lock between the calls to [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e) and [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) in the general case.

Under no circumstances two threads may call [gpio_ll_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga35be9a52fbb31805167c0f7d6f5677db) on the same port / pin combination concurrently.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GPIO_PORT_UNDEF`](#group__drivers__periph__gpio__ll_1ga0a3bec4fd53a176dcfb45e279543ad2e)            | Magic "undefined GPIO port" value.
`define `[`GPIO_PORT_NUMBERING_ALPHABETIC`](#group__drivers__periph__gpio__ll_1ga03eeaaa98742075223fdaec478c1697c)            | Indicates whether GPIO ports are enumerated alphabetically (`1`) or numerically (`0`).
`define `[`GPIO_PORT_0`](#group__drivers__periph__gpio__ll_1ga026f9a3394a70596e374a044a24637e2)            | Get the [gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74) value of the port labeled 0.
`define `[`GPIO_PULL_NUMOF`](#group__drivers__periph__gpio__ll_1ga1b559a2b6e87b78036cde7154de6a777)            | The number of distinct supported pull resistor strengths.
`define `[`GPIO_DRIVE_NUMOF`](#group__drivers__periph__gpio__ll_1gac5ea415e7b6297068526cd2837dbe438)            | The number of distinct supported drive strengths.
`define `[`GPIO_SLEW_NUMOF`](#group__drivers__periph__gpio__ll_1ga796dbcafe036dc781369c57235567d83)            | The number of distinct supported slew rates.
`enum `[`gpio_state_t`](#group__drivers__periph__gpio__ll_1ga2ff5468d5ab752db6fa1fb95363392a6)            | Enumeration of GPIO states (direction)
`enum `[`gpio_pull_t`](#group__drivers__periph__gpio__ll_1ga15988813fd44aa06a2300421601952f8)            | Enumeration of pull resistor configurations.
`enum `[`gpio_pull_strength_t`](#group__drivers__periph__gpio__ll_1ga1dcf40ddd64802ae1c1b2cbd31cb2dc0)            | Enumeration of pull resistor values.
`enum `[`gpio_drive_strength_t`](#group__drivers__periph__gpio__ll_1ga50fddd3f69b6099614b9b129daa6959c)            | Enumeration of drive strength options.
`enum `[`gpio_slew_t`](#group__drivers__periph__gpio__ll_1ga35634af042ff55c67687d6fdb21acee3)            | Enumeration of slew rate settings.
`public `[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` `[`gpio_port`](#group__drivers__periph__gpio__ll_1ga300d98563e5bca91772efa6bd49d5550)`(`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` num)`            | Get the [gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74) value of the port number `num`.
`public `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_port_num`](#group__drivers__periph__gpio__ll_1ga80e686149c0f23828b73f9cd7f41c3a2)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)`            | Get the number of the GPIO port `port` refers to.
`public inline static bool `[`is_gpio_port_num_valid`](#group__drivers__periph__gpio__ll_1ga98fc96ab8e99828095873f3944d1bec4)`(uint_fast8_t num)`            | Check if the given number is a valid argument for [gpio_port](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga300d98563e5bca91772efa6bd49d5550).
`public int `[`gpio_ll_init`](#group__drivers__periph__gpio__ll_1ga35be9a52fbb31805167c0f7d6f5677db)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin,`[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` conf)`            | Initialize the given GPIO pin as specified.
`public `[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` `[`gpio_ll_query_conf`](#group__drivers__periph__gpio__ll_1ga4417edcbec590f5d434fcdeae095bd65)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)`            | Retrieve the current configuration of a GPIO pin.
`public void `[`gpio_ll_print_conf_common`](#group__drivers__periph__gpio__ll_1ga4be0cb7869e257e4945f73582100b541)`(const `[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` conf)`            | INTERNAL, use [gpio_ll_print_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gafa894c50e13eb72c6bdd4c44f6afdb91) instead.
`public void `[`gpio_ll_print_conf`](#group__drivers__periph__gpio__ll_1gafa894c50e13eb72c6bdd4c44f6afdb91)`(const `[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` conf)`            | Utility function to print a given GPIO configuration to stdio.
`public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_read`](#group__drivers__periph__gpio__ll_1ga61f32448967de8a66a256b6b92ccc489)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)`            | Get the current input value of all GPIO pins of the given port as bitmask.
`public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_read_output`](#group__drivers__periph__gpio__ll_1gab54982801405f79cce35a02195886d1c)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)`            | Get the current output value of all GPIO pins of the given port as bitmask.
`public inline static void `[`gpio_ll_set`](#group__drivers__periph__gpio__ll_1ga1451ee80727c089c109efef0bd0eb496)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)`            | Perform an `reg \|= mask` operation on the I/O register of the port.
`public inline static void `[`gpio_ll_clear`](#group__drivers__periph__gpio__ll_1gabd4d6cbd80d67e51f5b1385460fd80f6)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)`            | Perform an `reg &= ~mask` operation on the I/O register of the port.
`public inline static void `[`gpio_ll_toggle`](#group__drivers__periph__gpio__ll_1gacbc8595de0d410e2f5a4caa0dabb7ac9)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)`            | Perform an `reg ^= mask` operation on the I/O register of the port.
`public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_prepare_write_all_outputs`](#group__drivers__periph__gpio__ll_1ga6602f963303bbdc892dae43f1f87c860)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` value)`            | Same as `gpio_ll_prepare_write(port, UWORD_MAX, value)`, but faster.
`public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_prepare_write`](#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` value)`            | Helper to use [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) side-effect free.
`public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_prepare_switch_dir`](#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)`(`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)`            | Prepare bitmask for use with [gpio_ll_switch_dir_output](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga3e447d9407456facb037994934efd222) and [gpio_ll_switch_dir_input](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga5d2a90dcc18d1b6508a53457907ef201).
`public inline static void `[`gpio_ll_switch_dir_output`](#group__drivers__periph__gpio__ll_1ga3e447d9407456facb037994934efd222)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` pins)`            | Turn GPIO pins specified by `pins` (obtained from [gpio_ll_prepare_switch_dir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)) to outputs.
`public inline static void `[`gpio_ll_switch_dir_input`](#group__drivers__periph__gpio__ll_1ga5d2a90dcc18d1b6508a53457907ef201)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` pins)`            | Turn GPIO pins specified by `pins` (obtained from [gpio_ll_prepare_switch_dir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)) to inputs.
`public inline static void `[`gpio_ll_write`](#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` state)`            | Perform a masked write operation on the I/O register of the port.
`public inline static `[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` `[`gpio_get_port`](#group__drivers__periph__gpio__ll_1ga63dd861dd1e225b048950b3acf0740b7)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Extract the `gpio_port_t` from a `gpio_t`
`public inline static uint8_t `[`gpio_get_pin_num`](#group__drivers__periph__gpio__ll_1ga036919e408dee6db11925f11c0c2a333)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Extract the pin number from a `gpio_t`
`public inline static `[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` `[`gpio_port_pack_addr`](#group__drivers__periph__gpio__ll_1ga3c88e575aa50a5836c18c9b00cde3cf5)`(void * addr)`            | Pack a pointer into a [gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74).
`public inline static void * `[`gpio_port_unpack_addr`](#group__drivers__periph__gpio__ll_1ga0c14846a02e49782f04149afa5fc0a01)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)`            | Extract a data pointer that was packed by [gpio_port_pack_addr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga3c88e575aa50a5836c18c9b00cde3cf5).
`union `[`gpio_conf_esp32`](#uniongpio__conf__esp32) | GPIO pin configuration for ESP32/ESP32Cx/ESP32Sx MCUs.
`union `[`gpio_conf_gd32v`](#uniongpio__conf__gd32v) | GPIO pin configuration for GD32V MCUs.
`union `[`gpio_conf_nrf5x`](#uniongpio__conf__nrf5x) | GPIO pin configuration for nRF5x MCUs.
`union `[`gpio_conf_sam0`](#uniongpio__conf__sam0) | GPIO pin configuration for SAM0 MCUs.
`union `[`gpio_conf_stm32`](#uniongpio__conf__stm32) | GPIO pin configuration for STM32 MCUs.
`union `[`gpio_conf_minimal`](#uniongpio__conf__minimal) | Public members of `gpio_conf_t`

## Members

#### `define `[`GPIO_PORT_UNDEF`](#group__drivers__periph__gpio__ll_1ga0a3bec4fd53a176dcfb45e279543ad2e) 

Magic "undefined GPIO port" value.

#### `define `[`GPIO_PORT_NUMBERING_ALPHABETIC`](#group__drivers__periph__gpio__ll_1ga03eeaaa98742075223fdaec478c1697c) 

Indicates whether GPIO ports are enumerated alphabetically (`1`) or numerically (`0`).

You can use both [GPIO_PORT_A](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga26c950f1ed9bbc330c8a1a778cbb30ac) and [GPIO_PORT_0](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga026f9a3394a70596e374a044a24637e2) to refer to the first GPIO port in RIOT, regardless of the naming scheme used by the MCU the app is compiled for. This macro is useful e.g. for pretty-printing.

#### `define `[`GPIO_PORT_0`](#group__drivers__periph__gpio__ll_1ga026f9a3394a70596e374a044a24637e2) 

Get the [gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74) value of the port labeled 0.

For MCUs that use letters instead of numbers, this will be an alias for [GPIO_PORT_A](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga26c950f1ed9bbc330c8a1a778cbb30ac)

Some MCUs will not start with Port 0 / Port A, but rather with Port 1 (e.g. MSP430) or Port B (e.g. ATmega328P). It will be undefined when unavailable 

There will also be `GPIO_PORT_1`, `GPIO_PORT_2`, etc. when there are corresponding GPIO ports in hardware.

#### `define `[`GPIO_PULL_NUMOF`](#group__drivers__periph__gpio__ll_1ga1b559a2b6e87b78036cde7154de6a777) 

The number of distinct supported pull resistor strengths.

This equals the number of pull resistor strengths actually supported and can be less than four, if one or more enumeration values in [gpio_pull_strength_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga1dcf40ddd64802ae1c1b2cbd31cb2dc0) have the same numeric value. Note that: a) some pins might have more options than others and b) it could be possible that there are e.g. two pull up resistors to pick from, but only one pull down resistor.

#### `define `[`GPIO_DRIVE_NUMOF`](#group__drivers__periph__gpio__ll_1gac5ea415e7b6297068526cd2837dbe438) 

The number of distinct supported drive strengths.

This equals the number of drive strengths actually supported and can be less than four, if one or more enumeration values in [gpio_drive_strength_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga50fddd3f69b6099614b9b129daa6959c) have the same numeric value. Note that some pins might have more options than others.

#### `define `[`GPIO_SLEW_NUMOF`](#group__drivers__periph__gpio__ll_1ga796dbcafe036dc781369c57235567d83) 

The number of distinct supported slew rates.

This equals the number of slew rates actually supported and can be less than four, if one or more enumeration values in [gpio_drive_strength_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga50fddd3f69b6099614b9b129daa6959c) have the same numeric value. Note that some pins might have more options than others.

#### `enum `[`gpio_state_t`](#group__drivers__periph__gpio__ll_1ga2ff5468d5ab752db6fa1fb95363392a6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_OUTPUT_PUSH_PULL            | Use pin as output in push-pull configuration.
GPIO_OUTPUT_OPEN_DRAIN            | Use pin as output in open collector configuration.
GPIO_OUTPUT_OPEN_SOURCE            | Use pin as output in open emitter configuration.
GPIO_INPUT            | Use pin as input.
GPIO_USED_BY_PERIPHERAL            | The GPIO pin is used by a peripheral.
GPIO_DISCONNECT            | Disconnect pin from all peripherals.

Enumeration of GPIO states (direction)

#### `enum `[`gpio_pull_t`](#group__drivers__periph__gpio__ll_1ga15988813fd44aa06a2300421601952f8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_FLOATING            | No pull ups nor pull downs enabled.
GPIO_PULL_UP            | Pull up resistor enabled.
GPIO_PULL_DOWN            | Pull down resistor enabled.
GPIO_PULL_KEEP            | Keep the signal at current logic level with pull up/down resistors.

Enumeration of pull resistor configurations.

#### `enum `[`gpio_pull_strength_t`](#group__drivers__periph__gpio__ll_1ga1dcf40ddd64802ae1c1b2cbd31cb2dc0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_PULL_WEAKEST            | Use the weakest (highest Ohm value) resistor.
GPIO_PULL_WEAK            | Use a weak pull resistor.
GPIO_PULL_STRONG            | Use a strong pull resistor.
GPIO_PULL_STRONGEST            | Use the strongest pull resistor.

Enumeration of pull resistor values.

Depending on the implementation, some (or even all!) constants can have the same numeric value if less than four pull resistors per direction are provided. For obvious reasons, only neighboring values are allowed to have the same numeric value.

#### `enum `[`gpio_drive_strength_t`](#group__drivers__periph__gpio__ll_1ga50fddd3f69b6099614b9b129daa6959c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_DRIVE_WEAKEST            | Use the weakest drive strength.
GPIO_DRIVE_WEAK            | Use a weak drive strength.
GPIO_DRIVE_STRONG            | Use a strong drive strength.
GPIO_DRIVE_STRONGEST            | Use the strongest drive strength.

Enumeration of drive strength options.

Depending on the implementation, some (or even all!) constants can have the same numeric value if less than four drive strength options to pick from. For obvious reasons, only neighboring values are allowed to have the same numeric value.

#### `enum `[`gpio_slew_t`](#group__drivers__periph__gpio__ll_1ga35634af042ff55c67687d6fdb21acee3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_SLEW_SLOWEST            | let the output voltage level rise/fall as slow as possible
GPIO_SLEW_SLOW            | let the output voltage level rise/fall slowly
GPIO_SLEW_FAST            | let the output voltage level rise/fall fast
GPIO_SLEW_FASTEST            | let the output voltage level rise/fall as fast as possible

Enumeration of slew rate settings.

Reducing the slew rate can be useful to limit the high frequency noise emitted by a GPIO pin. On the other hand, a high frequency signal cannot be generated if the slew rate is too slow.

The numeric values are implementation defined and multiple constants can have the same numeric value, if an implementation supports fewer slew rates. An implementation only supporting a single slew rate can have all constants set to a value of zero.

#### `public `[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` `[`gpio_port`](#group__drivers__periph__gpio__ll_1ga300d98563e5bca91772efa6bd49d5550)`(`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` num)` 

Get the [gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74) value of the port number `num`.

#### Parameters
* `num` The number of the port to get 

`num` is a valid GPIO port number. An implementation may follow the "garbage in, garbage out" philosophy.

If the MCU uses an alphabetic naming scheme, number 0 refers to port A. 

This may involve accessing a lookup table, prefer e.g. using `GPIO_PORT_0` over `gpio_port(0)` if the port number is known at compile time.

#### `public `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_port_num`](#group__drivers__periph__gpio__ll_1ga80e686149c0f23828b73f9cd7f41c3a2)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)` 

Get the number of the GPIO port `port` refers to.

#### Parameters
* `port` The port to get the number of

`port` is a valid GPIO port. An implementation may follow the "garbage in, garbage out" philosophy. 

This may involve iterating over a lookup table, prefer using e.g. `0` instead of `gpio_port_num(GPIO_PORT_0)` if the port number is known at compile time.

In other words `n == gpio_port_num(gpio_port(n))` for every `n` that is a valid port number.

#### `public inline static bool `[`is_gpio_port_num_valid`](#group__drivers__periph__gpio__ll_1ga98fc96ab8e99828095873f3944d1bec4)`(uint_fast8_t num)` 

Check if the given number is a valid argument for [gpio_port](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga300d98563e5bca91772efa6bd49d5550).

#### Parameters
* `num` port number to check 

#### Parameters
* `true` the MCU used has a GPIO port with that number 

* `false` the MCU used has ***NO*** GPIO port with that number

#### `public int `[`gpio_ll_init`](#group__drivers__periph__gpio__ll_1ga35be9a52fbb31805167c0f7d6f5677db)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin,`[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` conf)` 

Initialize the given GPIO pin as specified.

#### Parameters
* `port` port the pin to initialize belongs to 

* `pin` number of the pin to initialize 

* `conf` configuration to apply

#### Parameters
* `0` success 

* `-ENOTSUP` GPIO state or pull resistor configuration not supported

If the configuration of the Schmitt trigger, the drive strength, or the pull resistor strength are not supported, the closest supported value will be chosen instead and `0` is returned. 

Note that hardware GPIO peripherals may have shared building blocks. Those *SHOULD* be handed out by the implementation in first-come-first-served fashion. (E.g. if there is only one pull up resistor per port that can be connected to any pin of that port, typically the first pin on the port configured as pull up will succeed and subsequent configuration as pull ups for other pins on that port will get an `-ENOTSUP`.) For that reason, an application might need to optimize the order in which it configures GPIO pins to get the most suitable overall configuration supported by the hardware. 

An application having strict requirements can use [gpio_ll_query_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga4417edcbec590f5d434fcdeae095bd65) afterwards to verify that the used configuration is indeed within spec. It is often sensible to omit these checks if `DEVELHELP` is disabled. An application can rely on that the configuration of pin `pin` at port `port` will not be changed as side-effect of operations performed on other pins. That is, once [gpio_ll_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga35be9a52fbb31805167c0f7d6f5677db) returns the configuration details are settled and may only change due to subsequent calls to [gpio_ll_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga35be9a52fbb31805167c0f7d6f5677db) with the same values for `port` and `pin`. 

No concurrent context is calling this function for the same combination of `port` and `pin` - concurrent initialization of different pins on the same port is supported. The underlying implementation might perform locking where needed.

#### `public `[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` `[`gpio_ll_query_conf`](#group__drivers__periph__gpio__ll_1ga4417edcbec590f5d434fcdeae095bd65)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)` 

Retrieve the current configuration of a GPIO pin.

#### Parameters
* `port` GPIO port the pin to query is located at 

* `pin` Number of the pin to query within `port`

#### Returns
The current config of the given GPIO here

`port` and `pin` refer to an existing GPIO pin and `dest` can be written to. Expect blowing assertions otherwise.

[gpio_conf_minimal::initial_value](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_gpio_ll.md#uniongpio__conf__minimal_1a8e52452a1d87e3a60869146b252417f9) should be set to the current value of the pin, so that no shadow log of the initial value is needed to consult.

#### `public void `[`gpio_ll_print_conf_common`](#group__drivers__periph__gpio__ll_1ga4be0cb7869e257e4945f73582100b541)`(const `[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` conf)` 

INTERNAL, use [gpio_ll_print_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gafa894c50e13eb72c6bdd4c44f6afdb91) instead.

This function prints the public API part of [gpio_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b) to stdio. The intention is that implementations that extend [gpio_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b) to contain more members overwrite [gpio_ll_print_conf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gafa894c50e13eb72c6bdd4c44f6afdb91) and call this function to print the common members

#### `public void `[`gpio_ll_print_conf`](#group__drivers__periph__gpio__ll_1gafa894c50e13eb72c6bdd4c44f6afdb91)`(const `[`gpio_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga69cbfbbfa5263deb19c3d6768cfc9c1b)` conf)` 

Utility function to print a given GPIO configuration to stdio.

#### Parameters
* `conf` Configuration to print

#### `public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_read`](#group__drivers__periph__gpio__ll_1ga61f32448967de8a66a256b6b92ccc489)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)` 

Get the current input value of all GPIO pins of the given port as bitmask.

#### Parameters
* `port` port to read

#### Returns
The current value of the input register of the given GPIO port

The value of unconfigured pins and pins configured as [GPIO_DISCONNECT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a9cab495e0688b542427fc5a728c06bd7) or [GPIO_OUTPUT_PUSH_PULL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a98ad18441bf40d98b3e21c6b1e4f23a9) is implementation defined.

Unless technically impossible, this must be implemented as a single read instruction.

#### `public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_read_output`](#group__drivers__periph__gpio__ll_1gab54982801405f79cce35a02195886d1c)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)` 

Get the current output value of all GPIO pins of the given port as bitmask.

#### Parameters
* `port` port to read

#### Returns
The current value of the output register of the given GPIO port

The value of unconfigured pins and pins configured as [GPIO_INPUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6aa1ea38ffc304a6c32480a65b5fec7302) or [GPIO_OUTPUT_PUSH_PULL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a98ad18441bf40d98b3e21c6b1e4f23a9) is implementation defined.

Unless technically impossible, this must be implemented as a single read instruction.

#### `public inline static void `[`gpio_ll_set`](#group__drivers__periph__gpio__ll_1ga1451ee80727c089c109efef0bd0eb496)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)` 

Perform an `reg |= mask` operation on the I/O register of the port.

The behavior regarding pins not configured as [GPIO_OUTPUT_PUSH_PULL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a98ad18441bf40d98b3e21c6b1e4f23a9) or as [GPIO_OUTPUT_OPEN_DRAIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a8d500adc2f6982a9ddc8dcdd66c80c4b) is implementation defined. 

Portable code must set the bits in `mask` that do not correspond to pins configured as output to zero.

On hardware that supports implementing this as a single write instruction, this must be implemented as such. Otherwise this read-modify-write will disable IRQs to still behave atomically.

#### Parameters
* `port` port to modify 

* `mask` bitmask containing the pins to set

#### `public inline static void `[`gpio_ll_clear`](#group__drivers__periph__gpio__ll_1gabd4d6cbd80d67e51f5b1385460fd80f6)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)` 

Perform an `reg &= ~mask` operation on the I/O register of the port.

The behavior regarding pins not configured as [GPIO_OUTPUT_PUSH_PULL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a98ad18441bf40d98b3e21c6b1e4f23a9) or as [GPIO_OUTPUT_OPEN_DRAIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a8d500adc2f6982a9ddc8dcdd66c80c4b) is implementation defined. 

Portable code must set the bits in `mask` that do not correspond to pins configured as output to zero.

On hardware that supports implementing this as a single write instruction, this must be implemented as such. Otherwise this read-modify-write will disable IRQs to still behave atomically.

#### Parameters
* `port` port to modify 

* `mask` bitmask containing the pins to clear

#### `public inline static void `[`gpio_ll_toggle`](#group__drivers__periph__gpio__ll_1gacbc8595de0d410e2f5a4caa0dabb7ac9)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)` 

Perform an `reg ^= mask` operation on the I/O register of the port.

The behavior regarding pins not configured as [GPIO_OUTPUT_PUSH_PULL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a98ad18441bf40d98b3e21c6b1e4f23a9) or as [GPIO_OUTPUT_OPEN_DRAIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gga2ff5468d5ab752db6fa1fb95363392a6a8d500adc2f6982a9ddc8dcdd66c80c4b) is implementation defined. 

Portable code must set the bits in `mask` that do not correspond to pins configured as output to zero.

On hardware that supports implementing this as a single write instruction, this must be implemented as such. Otherwise this read-modify-write will disable IRQs to still behave atomically.

#### Parameters
* `port` port to modify 

* `mask` bitmask containing the pins to toggle

#### `public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_prepare_write_all_outputs`](#group__drivers__periph__gpio__ll_1ga6602f963303bbdc892dae43f1f87c860)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` value)` 

Same as `gpio_ll_prepare_write(port, UWORD_MAX, value)`, but faster.

#### Parameters
* `port` port that should be written to 

* `value` value to write to port 

#### Returns
Value to call [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) with

On most platforms this function will just pass `value` through unmodified, becoming a no-op (and costing neither CPU cycles, nor RAM, nor ROM). Hence, this function will only cost you if your platform really requires preparation of any sorts.

If all pins on `port` are known to be configured as output, calls to this functions can be omitted.

The caller needs to make sure that no concurrent changes (this includes configuration changes, writing, clearing, setting or toggling GPIO pins) are performed.

This function can be used to prevent side-effects on non-output pins of a port when writing to it, e.g. when the output buffer is multiplexed with the pull configuration for input pins (such as on ATmega MCUs).

#### `public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_prepare_write`](#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` value)` 

Helper to use [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) side-effect free.

#### Parameters
* `port` port that should be written to 

* `mask` bitmask of the pins to write to 

* `value` value to write to port 

#### Returns
Value to call [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) with

The caller needs to make sure that no concurrent changes (this includes configuration changes, writing, clearing, setting or toggling GPIO pins) are performed.

See [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) on how to use this function

#### `public inline static `[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` `[`gpio_ll_prepare_switch_dir`](#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)`(`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` mask)` 

Prepare bitmask for use with [gpio_ll_switch_dir_output](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga3e447d9407456facb037994934efd222) and [gpio_ll_switch_dir_input](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga5d2a90dcc18d1b6508a53457907ef201).

#### Parameters
* `mask` bitmask specifying the pins to switch the direction of

#### Returns
Value to use in [gpio_ll_switch_dir_output](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga3e447d9407456facb037994934efd222) or [gpio_ll_switch_dir_input](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga5d2a90dcc18d1b6508a53457907ef201)

#### `public inline static void `[`gpio_ll_switch_dir_output`](#group__drivers__periph__gpio__ll_1ga3e447d9407456facb037994934efd222)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` pins)` 

Turn GPIO pins specified by `pins` (obtained from [gpio_ll_prepare_switch_dir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)) to outputs.

#### Parameters
* `port` GPIO port to modify 

* `pins` Output of [gpio_ll_prepare_switch_dir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)

The feature `gpio_ll_switch_dir` is available 

Each affected GPIO pin is either configured as input or as push-pull output.

#### `public inline static void `[`gpio_ll_switch_dir_input`](#group__drivers__periph__gpio__ll_1ga5d2a90dcc18d1b6508a53457907ef201)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` pins)` 

Turn GPIO pins specified by `pins` (obtained from [gpio_ll_prepare_switch_dir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)) to inputs.

#### Parameters
* `port` GPIO port to modify 

* `pins` Output of [gpio_ll_prepare_switch_dir](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga8cabba96deb092a628c85347ac858ee2)

The feature `gpio_ll_switch_dir` is available 

Each affected GPIO pin is either configured as input or as push-pull output.

The state of the output register may be intermixed with the input configuration. Specifically, on AVR the output register enables/disables the internal pull up, on SAM0 MCUs the output register controls the pull resistor direction (if the pull resistor is enabled). Hence, the bits in the output register of the pins switched to input should be restored just after this call.

#### `public inline static void `[`gpio_ll_write`](#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,`[`uword_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d)` state)` 

Perform a masked write operation on the I/O register of the port.

Some platforms multiplex the "write" I/O register with additional functions e.g. for input pin configuration. To prevent unintentional side effects prepare a value using [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e) that will set the bits of non-output pins as needed to not have side effects on the state the GPIO port had when calling [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e) .

#### Parameters
* `port` port to modify 

* `state` Opaque value produced by [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e)

Usage: 
```cpp
// emit a square wave from two pins with a phase shift of pi between the
// waves, e.g.:
// pin1: _⎍_⎍_⎍_⎍_⎍_⎍_⎍_⎍_⎍
// pin2: ⎍_⎍_⎍_⎍_⎍_⎍_⎍_⎍_⎍_
void square_wave([gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74) port, uint8_t pin1, uint8_t pin2)
{
    [uword_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d) mask = (1U << pin1) | (1U << pin2);
    [uword_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d) state1 = [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e)(port, mask, 1U << pin1);
    [uword_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga07c1cf22cdd58a656e1dde766debeb0d) state2 = [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e)(port, mask, 1U << pin2);
    while (1) {
        [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e)(port, state1);
        [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e)(port, state2);
    }
}
```

If the configuration of the used port changes between the calls of [gpio_ll_prepare_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga36fb58574afbc7e78c816ffa9549d26e) and [gpio_ll_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gad34ca0dda04bf8311af36068e821a93e) the write will still have undesired side effects on the configuration of input pins if the platform multiplexes the write register with configuration for input pins. It is expected that the user of the API either exclusively uses a GPIO port or synchronizes with other users to update the prepared value on configuration changes.

Unless technically impossible, this must be implemented as a single write instruction.

#### `public inline static `[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` `[`gpio_get_port`](#group__drivers__periph__gpio__ll_1ga63dd861dd1e225b048950b3acf0740b7)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Extract the `gpio_port_t` from a `gpio_t`

#### `public inline static uint8_t `[`gpio_get_pin_num`](#group__drivers__periph__gpio__ll_1ga036919e408dee6db11925f11c0c2a333)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Extract the pin number from a `gpio_t`

#### `public inline static `[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` `[`gpio_port_pack_addr`](#group__drivers__periph__gpio__ll_1ga3c88e575aa50a5836c18c9b00cde3cf5)`(void * addr)` 

Pack a pointer into a [gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74).

The address in `addr` is not `NULL`***and*** points to a regular memory region (e.g. anywhere in `.data`, `.rodata`, `.bss` or an address returned by `[malloc()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__oneway__malloc_1ga7ac38fce3243a7dcf448301ee9ffd392)` and friends)

#### Returns
A value that is distinguishable from any valid port reference and from which `addr` can be reconstructed by calling [gpio_port_unpack_addr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga0c14846a02e49782f04149afa5fc0a01)

#### `public inline static void * `[`gpio_port_unpack_addr`](#group__drivers__periph__gpio__ll_1ga0c14846a02e49782f04149afa5fc0a01)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port)` 

Extract a data pointer that was packed by [gpio_port_pack_addr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga3c88e575aa50a5836c18c9b00cde3cf5).

#### Returns
The exact address previously packed by [gpio_port_pack_addr](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga3c88e575aa50a5836c18c9b00cde3cf5)

#### Parameters
* `NULL` `port` is a valid GPIO port

The motivation is that a high level API can multiplex peripheral GPIOs and GPIOs provided by port extenders. That high level API could pack pointers to the device descriptors of port extenders into a [gpio_port_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74) and use this function to check if the port is a peripheral port (the return value is `NULL`), or retrieve the device descriptor.

