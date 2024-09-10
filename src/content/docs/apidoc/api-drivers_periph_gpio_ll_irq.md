---
title: api-drivers_periph_gpio_ll_irq.md
description: api-drivers_periph_gpio_ll_irq.md
---
# group `drivers_periph_gpio_ll_irq` 

IRQ Support in Peripheral GPIO Low-Level API.

This API is not stable yet and intended for internal use only as of now. 

This API can only be used, if the features `periph_gpio_ll_irq` is used. Not every MCU will implement the features required for this API or will have a suitable driver available.

MotivationThe IRQ related GPIO Low-Level API is very similar to the one of [GPIO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio) - however two aspects have been changed (in addition to using separate port and pin parameters): First, level triggered IRQs that many MCUs support are now exposed. (Note: They can also be trivially be emulated, see the STM32 implementation as example.) Second, the configuration of the GPIO pin and the associated IRQ have been split into two functions. This allows reconfiguring the trigger of an IRQ with less overhead. This can result in reconfiguring the IRQ trigger being less effort than filtering out unneeded events and hence consume power due to longer power saving phases.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`gpio_irq_trig_t`](#group__drivers__periph__gpio__ll__irq_1ga259035fe511900dfa606a028c5484683)            | Definition of possible IRQ triggers.
`public int `[`gpio_ll_irq`](#group__drivers__periph__gpio__ll__irq_1ga748cebf8ed574a051fd359d0a7386c1d)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin,`[`gpio_irq_trig_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga259035fe511900dfa606a028c5484683)` trig,`[`gpio_ll_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga81920b76c0d21505a9b963ecb334d9d3)` cb,void * arg)`            | Set up an IRQ for the given GPIO pin and activate it.
`public void `[`gpio_ll_irq_mask`](#group__drivers__periph__gpio__ll__irq_1ga69c0a16120e8b64d6c6ff2daf560bd0c)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)`            | Mask IRQs on the given GPIO pin.
`public void `[`gpio_ll_irq_unmask`](#group__drivers__periph__gpio__ll__irq_1ga913bfdd264182a93ec23ddedb15612ba)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)`            | Unmask IRQs on the given GPIO pin.
`public void `[`gpio_ll_irq_unmask_and_clear`](#group__drivers__periph__gpio__ll__irq_1ga5251695005b7a1322a72966efa2d899c)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)`            | Unmask IRQs on the given GPIO pin and clear pending IRQs.
`public void `[`gpio_ll_irq_off`](#group__drivers__periph__gpio__ll__irq_1ga9e1d3077b69fa4811350c9f087183c10)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)`            | Disable IRQs on the given GPIO pin.

## Members

#### `enum `[`gpio_irq_trig_t`](#group__drivers__periph__gpio__ll__irq_1ga259035fe511900dfa606a028c5484683) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPIO_TRIGGER_EDGE_FALLING            | edge triggered IRQ on falling flanks only
GPIO_TRIGGER_EDGE_RISING            | edge triggered IRQ on rising flanks only
GPIO_TRIGGER_EDGE_BOTH            | edge triggered IRQ on falling *AND* rising flanks
GPIO_TRIGGER_LEVEL_HIGH            | level triggered IRQ on high input
GPIO_TRIGGER_LEVEL_LOW            | level triggered IRQ on low input

Definition of possible IRQ triggers.

The following features indicate support:

Trigger   |Feature provided if trigger is supported
--------- | ---------
`GPIO_TRIGGER_EDGE_FALLING`|Always available
`GPIO_TRIGGER_EDGE_RISING`|Always available
`GPIO_TRIGGER_EDGE_BOTH`|`periph_gpio_ll_irq_edge_triggered_both`
`GPIO_TRIGGER_LEVEL_HIGH`|`periph_gpio_ll_irq_level_triggered_high`
`GPIO_TRIGGER_LEVEL_LOW`|`periph_gpio_ll_irq_level_triggered_low`

#### `public int `[`gpio_ll_irq`](#group__drivers__periph__gpio__ll__irq_1ga748cebf8ed574a051fd359d0a7386c1d)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin,`[`gpio_irq_trig_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga259035fe511900dfa606a028c5484683)` trig,`[`gpio_ll_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga81920b76c0d21505a9b963ecb334d9d3)` cb,void * arg)` 

Set up an IRQ for the given GPIO pin and activate it.

#### Parameters
* `port` port the pin belongs to 

* `pin` number of the pin to setup IRQs on 

* `trig` define what triggers the IRQ 

* `cb` callback that is called from interrupt context 

* `arg` argument to be passed to the callback

The given GPIO pin has been initialized using [gpio_ll_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1ga35be9a52fbb31805167c0f7d6f5677db) prior to this call 

The trigger in `trig` is supported by the MCU

#### Parameters
* `0` Success 

* `-ENOTSUP` No external IRQs supported for `port` and `pin`

* `-EBUSY` All hardware entities that monitor GPIOs and issue IRQs are busy monitoring other GPIOs. Call [gpio_ll_irq_off](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga9e1d3077b69fa4811350c9f087183c10) on one of those and retry.

#### `public void `[`gpio_ll_irq_mask`](#group__drivers__periph__gpio__ll__irq_1ga69c0a16120e8b64d6c6ff2daf560bd0c)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)` 

Mask IRQs on the given GPIO pin.

#### Parameters
* `port` port the pin belongs to 

* `pin` number of the pin to disable IRQs on

IRQs can be re-enabled without reconfiguration using [gpio_ll_irq_unmask](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga913bfdd264182a93ec23ddedb15612ba)

If IRQs are not needed for a longer term, consider using [gpio_ll_irq_off](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga9e1d3077b69fa4811350c9f087183c10) instead.

#### `public void `[`gpio_ll_irq_unmask`](#group__drivers__periph__gpio__ll__irq_1ga913bfdd264182a93ec23ddedb15612ba)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)` 

Unmask IRQs on the given GPIO pin.

Same as [gpio_ll_irq_unmask_and_clear](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga5251695005b7a1322a72966efa2d899c) except that IRQs that came in while masked are not lost.

On some MCUs (most notably STM32) this is impossible to implement. The feature `periph_gpio_ll_irq_unmask` is provided, if this function is available.

[gpio_ll_irq_unmask_and_clear](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga5251695005b7a1322a72966efa2d899c) is a portable alternative that might suit your use case equally well.

#### Parameters
* `port` port the pin belongs to 

* `pin` number of the pin to unmask IRQs on

#### `public void `[`gpio_ll_irq_unmask_and_clear`](#group__drivers__periph__gpio__ll__irq_1ga5251695005b7a1322a72966efa2d899c)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)` 

Unmask IRQs on the given GPIO pin and clear pending IRQs.

IRQs on the given pin have been previously configured via [gpio_ll_irq](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga748cebf8ed574a051fd359d0a7386c1d)

IRQs will be acted upon again from now on. If one or more IRQs came in while masked, this IRQs are silently lost.

#### Parameters
* `port` port the pin belongs to 

* `pin` number of the pin to unmask IRQs on

#### `public void `[`gpio_ll_irq_off`](#group__drivers__periph__gpio__ll__irq_1ga9e1d3077b69fa4811350c9f087183c10)`(`[`gpio_port_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll_1gaf009ea1423e638c92aba71b5ec559a74)` port,uint8_t pin)` 

Disable IRQs on the given GPIO pin.

Signals on the specified pin will no longer triggers IRQs until an IRQ is reconfigured using [gpio_ll_irq](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga748cebf8ed574a051fd359d0a7386c1d)

#### Parameters
* `port` port the pin belongs to 

* `pin` number of the pin disable IRQs on

The implementation should consume power by disabling trigger detection on the given pin.

Unlike [gpio_ll_irq_mask](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga69c0a16120e8b64d6c6ff2daf560bd0c) IRQs cannot be re-enabled with a call to [gpio_ll_irq_unmask](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio__ll__irq_1ga913bfdd264182a93ec23ddedb15612ba).

