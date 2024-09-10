---
title: api-drivers_periph_dac.md
description: api-drivers_periph_dac.md
---
# group `drivers_periph_dac` 

DAC peripheral driver interface.

Similar to the ADC driver interface ([ADC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc)), the DAC interface uses the concept of lines, corresponds to a tuple of a DAC device and a DAC output channel.

The DAC interface expects data to be served as a 16-bit unsigned integer, independent of the actual resolution of the hardware device. It is up to the DAC driver, to scale the given value to the maximal width that can be handled. The device driver should, on the other hand, implement the DAC in a way, that it will use the bit width, that comes closest to 16-bit.

This kind of 'auto-scaling' is quite sufficient for this interface, as standard DAC peripherals use a fixed conversion resolution internally anyway, so that any particular bit-width configuration on this driver level would not have much effect...

(Low-) Power ImplicationsThe configured DAC peripherals are active (and consume power) from the point of initialization. When calling [dac_poweroff()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga75f85190b7b9a4ce4c6f99ddf64f31dc), the implementation **should** disable the given DAC line and put the DAC peripheral to sleep (e.g. through peripheral clock gating). When woken up again through [dac_poweron()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gac32e162d1fce1c584918ef29008c1808), the given DAC line **should** transparently continue it's previous operation.

The DAC driver implementation may need to block (and free) certain power modes in the driver's [dac_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gabc514d1757c59929f653c64085d3fd5d), [dac_poweron()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gac32e162d1fce1c584918ef29008c1808), and the [dac_poweroff()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga75f85190b7b9a4ce4c6f99ddf64f31dc) functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DAC_UNDEF`](#group__drivers__periph__dac_1gadabead23aa524637469796890a6fee7c)            | Default DAC undefined value.
`define `[`DAC_LINE`](#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)            | Default DAC access macro.
`enum `[`@233`](#group__drivers__periph__dac_1ga87d22175c5de65fbe6a0b3b53305dee4)            | Return codes used by the DAC driver interface.
`public int8_t `[`dac_init`](#group__drivers__periph__dac_1gabc514d1757c59929f653c64085d3fd5d)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line)`            | Initialize the given DAC line.
`public void `[`dac_set`](#group__drivers__periph__dac_1ga179ae55de04d356cd6fbb63e9e3f51f6)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line,uint16_t value)`            | Write a value onto DAC Device on a given Channel.
`public void `[`dac_poweron`](#group__drivers__periph__dac_1gac32e162d1fce1c584918ef29008c1808)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line)`            | Enable the given DAC line.
`public void `[`dac_poweroff`](#group__drivers__periph__dac_1ga75f85190b7b9a4ce4c6f99ddf64f31dc)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line)`            | Disable the given DAC line.

## Members

#### `define `[`DAC_UNDEF`](#group__drivers__periph__dac_1gadabead23aa524637469796890a6fee7c) 

Default DAC undefined value.

#### `define `[`DAC_LINE`](#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9) 

Default DAC access macro.

#### `enum `[`@233`](#group__drivers__periph__dac_1ga87d22175c5de65fbe6a0b3b53305dee4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DAC_OK            | 
DAC_NOLINE            | 

Return codes used by the DAC driver interface.

#### `public int8_t `[`dac_init`](#group__drivers__periph__dac_1gabc514d1757c59929f653c64085d3fd5d)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line)` 

Initialize the given DAC line.

After initialization, the corresponding DAC line is active and its output is set to 0.

#### Parameters
* `line` DAC line to initialize

#### Returns
DAC_OK on success 

#### Returns
DAC_NOLINE on invalid DAC line

#### `public void `[`dac_set`](#group__drivers__periph__dac_1ga179ae55de04d356cd6fbb63e9e3f51f6)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line,uint16_t value)` 

Write a value onto DAC Device on a given Channel.

The value is always given as 16-bit value and is internally scaled to the actual resolution that the DAC unit provides (e.g. 12-bit). So to get the maximum output voltage, this function has to be called with `value` set to 65535 (UINT16_MAX).

#### Parameters
* `line` DAC line to set 

* `value` value to set `line` to

#### `public void `[`dac_poweron`](#group__drivers__periph__dac_1gac32e162d1fce1c584918ef29008c1808)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line)` 

Enable the given DAC line.

#### Parameters
* `line` DAC line to power on

#### `public void `[`dac_poweroff`](#group__drivers__periph__dac_1ga75f85190b7b9a4ce4c6f99ddf64f31dc)`(`[`dac_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1ga07648053b48b5aa7d1c4dc9075d7a5de)` line)` 

Disable the given DAC line.

#### Parameters
* `line` DAC line to power off

