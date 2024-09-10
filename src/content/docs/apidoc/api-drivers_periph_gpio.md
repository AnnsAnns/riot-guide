---
title: api-drivers_periph_gpio.md
description: api-drivers_periph_gpio.md
---
# group `drivers_periph_gpio` 

Low-level GPIO peripheral driver.

This is a basic GPIO (General-purpose input/output) interface to allow platform independent access to a MCU's input/output pins. This interface is intentionally designed to be as simple as possible, to allow for easy implementation and maximum portability.

The interface provides capabilities to initialize a pin as output-, input- and interrupt pin. With the API you can basically set/clear/toggle the digital signal at the hardware pin when in output mode. Configured as input you can read a digital value that is being applied to the pin externally. When initializing an external interrupt pin, you can register a callback function that is executed in interrupt context once the interrupt condition applies to the pin. Usually you can react to rising or falling signal flanks (or both).

In addition the API provides to set standard input/output circuit modes such as e.g. internal push-pull configurations.

All modern micro controllers organize their GPIOs in some form of ports, often named 'PA', 'PB', 'PC'..., or 'P0', 'P1', 'P2'..., or similar. Each of these ports is then assigned a number of pins, often 8, 16, or 32. A hardware pin can thus be described by its port/pin tuple. To access a pin, the `[GPIO_PIN(port, pin)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)` macro should be used. For example: If your platform has a pin PB22, it will be port=1 and pin=22. The `GPIO_PIN` macro should be overridden by a MCU, to allow for efficient encoding of the the port/pin tuple. For example, on many platforms it is possible to `OR` the pin number with the corresponding ports base register address. This allows for efficient decoding of pin number and base address without the need of any address lookup.

In case the driver does not define it, the below macro definition is used to simply map the port/pin tuple to the pin value. In that case, predefined GPIO definitions in `RIOT/boards/ * /include/periph_conf.h` will define the selected GPIO pin.

The scalar GPIO pin type `gpio_t` is deprecated and will be replaced by a structured GPIO pin type in a future GPIO API. Therefore, don't use the direct comparison of GPIO pins anymore. Instead, use the inline comparison functions [gpio_is_equal](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gaf0160800f2524bb7981b1a9e0ea5b92b) and [gpio_is_valid](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga0c3767ed80df4ad880e5bb09520787ed).

(Low-) Power ImplicationsOn almost all platforms, we can only control the peripheral power state of full ports (i.e. groups of pins), but not for single GPIO pins. Together with CPU specific alternate function handling for pins used by other peripheral drivers, this can make it quite complex to keep track of pins that are currently used at a certain moment. To simplify the implementations (and ease the memory consumption), we expect ports to be powered on (e.g. through peripheral clock gating) when first used and never be powered off again.

GPIO driver implementations **should** power on the corresponding port during [gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955) and [gpio_init_int()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga48ba4c318486db320a4bf6237b49d61c).

For external interrupts to work, some platforms may need to block certain power modes (although this is not very likely). This should be done during [gpio_init_int()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga48ba4c318486db320a4bf6237b49d61c).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`GPIO_PIN`](#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)            | Convert (port, pin) tuple to `gpio_t` value.
`define `[`GPIO_UNDEF`](#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604)            | GPIO pin not defined.
`enum `[`gpio_mode_t`](#group__drivers__periph__gpio_1ga491a2cbfb4e94f2afcc0d5bdef2dc454)            | Available pin modes.
`enum `[`gpio_flank_t`](#group__drivers__periph__gpio_1ga0e8c3f46deb150e48acaa79fe26b2e86)            | Definition of possible active flanks for external interrupt mode.
`public int `[`gpio_init`](#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode)`            | Initialize the given pin as general purpose input or output.
`public int `[`gpio_init_int`](#group__drivers__periph__gpio_1ga48ba4c318486db320a4bf6237b49d61c)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode,`[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` flank,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * arg)`            | Initialize a GPIO pin for external interrupt usage.
`public void `[`gpio_irq_enable`](#group__drivers__periph__gpio_1ga9d444ec9ffaeaeb42aa0a04206ec27d2)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Enable pin interrupt if configured as interrupt source.
`public void `[`gpio_irq_disable`](#group__drivers__periph__gpio_1ga7d4416fc8ea83ba82d259ced2eea563f)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Disable the pin interrupt if configured as interrupt source.
`public int `[`gpio_read`](#group__drivers__periph__gpio_1gaa0423d276f0426d3cf79180ce646edc7)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Get the current value of the given pin.
`public void `[`gpio_set`](#group__drivers__periph__gpio_1ga5a4136d2b41a16dee4b8539d1690ea42)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Set the given pin to HIGH.
`public void `[`gpio_clear`](#group__drivers__periph__gpio_1ga127706eecc321da649b1d31691d0b546)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Set the given pin to LOW.
`public void `[`gpio_toggle`](#group__drivers__periph__gpio_1ga016c2a4e5d611bc64034f70e922f5d52)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)`            | Toggle the value of the given pin.
`public void `[`gpio_write`](#group__drivers__periph__gpio_1ga605dccf16c02fea0d365e3bea5dacd69)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,int value)`            | Set the given pin to the given value.
`public inline static int `[`gpio_is_equal`](#group__drivers__periph__gpio_1gaf0160800f2524bb7981b1a9e0ea5b92b)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` gpio1,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` gpio2)`            | Test if a GPIO pin is equal to another GPIO pin.
`public inline static int `[`gpio_is_valid`](#group__drivers__periph__gpio_1ga0c3767ed80df4ad880e5bb09520787ed)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` gpio)`            | Test if a GPIO pin is a valid pin and not declared as undefined.
`struct `[`gpio_isr_ctx_t`](#structgpio__isr__ctx__t) | Default interrupt context for GPIO pins.

## Members

#### `define `[`GPIO_PIN`](#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1) 

Convert (port, pin) tuple to `gpio_t` value.

#### `define `[`GPIO_UNDEF`](#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) 

GPIO pin not defined.

#### `enum `[`gpio_mode_t`](#group__drivers__periph__gpio_1ga491a2cbfb4e94f2afcc0d5bdef2dc454) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_IN            | 
GPIO_IN_PD            | 
GPIO_IN_PU            | 
GPIO_OUT            | 
GPIO_OD            | 
GPIO_OD_PU            | 
GPIO_IN            | configure as input without pull resistor
GPIO_IN_PD            | configure as input with pull-down resistor
GPIO_IN_PU            | configure as input with pull-up resistor
GPIO_OUT            | configure as output in push-pull mode
GPIO_OD            | configure as output in open-drain mode without pull resistor
GPIO_OD_PU            | configure as output in open-drain mode with pull resistor enabled

Available pin modes.

Generally, a pin can be configured to be input or output. In output mode, a pin can further be put into push-pull or open drain configuration. Though this is supported by most platforms, this is not always the case, so driver implementations may return an error code if a mode is not supported.

#### `enum `[`gpio_flank_t`](#group__drivers__periph__gpio_1ga0e8c3f46deb150e48acaa79fe26b2e86) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_ISC_BOTH            | emit interrupt on both flanks (default)
GPIO_ISC_RISING            | emit interrupt on rising flank
GPIO_ISC_FALLING            | emit interrupt on falling flank
GPIO_ISC_LOW_LEVEL            | emit interrupt on low level
GPIO_INT_DISABLED_ALL            | disable all interrupts
GPIO_INT0_VCT            | enable interrupt on Vector 0 (default)
GPIO_INT1_VCT            | enable interrupt on Vector 1
GPIO_LVL_OFF            | interrupt disabled (default)
GPIO_LVL_LOW            | interrupt low level
GPIO_LVL_MID            | interrupt medium level
GPIO_LVL_HIGH            | interrupt higher
GPIO_FALLING            | 
GPIO_RISING            | 
GPIO_BOTH            | 
GPIO_FALLING            | emit interrupt on falling flank
GPIO_RISING            | emit interrupt on rising flank
GPIO_BOTH            | not supported -> random value
GPIO_FALLING            | emit interrupt on falling flank
GPIO_RISING            | emit interrupt on rising flank
GPIO_BOTH            | emit interrupt on both flanks
GPIO_LEVEL_LOW            | emit interrupt level-triggered on low input
GPIO_LEVEL_HIGH            | emit interrupt level-triggered on low input
GPIO_FALLING            | emit interrupt on falling flank
GPIO_RISING            | emit interrupt on rising flank
GPIO_BOTH            | emit interrupt on both flanks
GPIO_FALLING            | emit interrupt on falling flank
GPIO_RISING            | emit interrupt on rising flank
GPIO_BOTH            | emit interrupt on both flanks

Definition of possible active flanks for external interrupt mode.

#### `public int `[`gpio_init`](#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode)` 

Initialize the given pin as general purpose input or output.

When configured as output, the pin state after initialization is undefined. The output pin's state **should** be untouched during the initialization. This behavior can however **not be guaranteed** by every platform.

#### Parameters
* `pin` pin to initialize 

* `mode` mode of the pin, see `gpio_mode_t`

#### Returns
0 on success 

#### Returns
-1 on error

#### `public int `[`gpio_init_int`](#group__drivers__periph__gpio_1ga48ba4c318486db320a4bf6237b49d61c)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode,`[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` flank,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` cb,void * arg)` 

Initialize a GPIO pin for external interrupt usage.

The registered callback function will be called in interrupt context every time the defined flank(s) are detected.

The interrupt is activated automatically after the initialization.

You have to add the module `periph_gpio_irq` to your project to enable this function

`cb` must not be NULL

#### Parameters
* `pin` pin to initialize 

* `mode` mode of the pin, see `gpio_mode_t`

* `flank` define the active flank(s) 

* `cb` callback that is called from interrupt context 

* `arg` optional argument passed to the callback

#### Returns
0 on success 

#### Returns
-1 on error

#### `public void `[`gpio_irq_enable`](#group__drivers__periph__gpio_1ga9d444ec9ffaeaeb42aa0a04206ec27d2)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Enable pin interrupt if configured as interrupt source.

Interrupts that would have occurred after @see gpio_irq_disable
     was called will be discarded.
You have to add the module `periph_gpio_irq` to your project to enable this function

#### Parameters
* `pin` the pin to enable the interrupt for

#### `public void `[`gpio_irq_disable`](#group__drivers__periph__gpio_1ga7d4416fc8ea83ba82d259ced2eea563f)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Disable the pin interrupt if configured as interrupt source.

You have to add the module `periph_gpio_irq` to your project to enable this function

#### Parameters
* `pin` the pin to disable the interrupt for

#### `public int `[`gpio_read`](#group__drivers__periph__gpio_1gaa0423d276f0426d3cf79180ce646edc7)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Get the current value of the given pin.

#### Parameters
* `pin` the pin to read

#### Returns
0 when pin is LOW 

#### Returns
>0 for HIGH

#### `public void `[`gpio_set`](#group__drivers__periph__gpio_1ga5a4136d2b41a16dee4b8539d1690ea42)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Set the given pin to HIGH.

#### Parameters
* `pin` the pin to set

#### `public void `[`gpio_clear`](#group__drivers__periph__gpio_1ga127706eecc321da649b1d31691d0b546)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Set the given pin to LOW.

#### Parameters
* `pin` the pin to clear

#### `public void `[`gpio_toggle`](#group__drivers__periph__gpio_1ga016c2a4e5d611bc64034f70e922f5d52)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin)` 

Toggle the value of the given pin.

#### Parameters
* `pin` the pin to toggle

#### `public void `[`gpio_write`](#group__drivers__periph__gpio_1ga605dccf16c02fea0d365e3bea5dacd69)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` pin,int value)` 

Set the given pin to the given value.

#### Parameters
* `pin` the pin to set 

* `value` value to set the pin to, 0 for LOW, HIGH otherwise

#### `public inline static int `[`gpio_is_equal`](#group__drivers__periph__gpio_1gaf0160800f2524bb7981b1a9e0ea5b92b)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` gpio1,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` gpio2)` 

Test if a GPIO pin is equal to another GPIO pin.

#### Parameters
* `gpio1` First GPIO pin to check 

* `gpio2` Second GPIO pin to check

#### `public inline static int `[`gpio_is_valid`](#group__drivers__periph__gpio_1ga0c3767ed80df4ad880e5bb09520787ed)`(`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` gpio)` 

Test if a GPIO pin is a valid pin and not declared as undefined.

#### Parameters
* `gpio` GPIO pin to check

# struct `gpio_isr_ctx_t` 

Default interrupt context for GPIO pins.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` `[`cb`](#structgpio__isr__ctx__t_1a7581386370989f2c52cf14c45c48819a) | interrupt callback
`public void * `[`arg`](#structgpio__isr__ctx__t_1a252c225bfb2c339e43f85b9a8ca29f86) | optional argument

## Members

#### `public `[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` `[`cb`](#structgpio__isr__ctx__t_1a7581386370989f2c52cf14c45c48819a) 

interrupt callback

#### `public void * `[`arg`](#structgpio__isr__ctx__t_1a252c225bfb2c339e43f85b9a8ca29f86) 

optional argument

