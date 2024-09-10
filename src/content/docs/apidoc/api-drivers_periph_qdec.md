---
title: api-drivers_periph_qdec.md
description: api-drivers_periph_qdec.md
---
# group `drivers_periph_qdec` 

Low-level QDEC peripheral driver.

This file was inspired by [pwm.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#pwm_8h) written by : Hauke Petersen [hauke.petersen@fu-berlin.de](mailto:hauke.petersen@fu-berlin.de)

QDEC interface enables access to CPU peripherals acquiring quadrature signals. On most platforms, this interface will be implemented based on hardware timers.

A quadrature encoder outputs two wave forms that are 90 degrees out of phase.

*
* Clockwise (C) :              Counter-clockwise (CC) :
*  ___________________          ___________________
* | Phase |  A  |  B  |        | Phase |  A  |  B  |
* |-------------------|        |-------------------|
* |   1   |  0  |  0  |        |   1   |  0  |  0  |
* |-------------------|        |-------------------|
* |   2   |  0  |  1  |        |   2   |  1  |  0  |
* |-------------------|        |-------------------|
* |   3   |  1  |  1  |        |   3   |  1  |  1  |
* |-------------------|        |-------------------|
* |   4   |  1  |  0  |        |   4   |  0  |  1  |
*  -------------------          -------------------
*         __    __                   __    __
*      __|  |__|  |_               _|  |__|  |__
*        __    __                     __    __
*      _|  |__|  |__               __|  |__|  |_
*
* These signals are decoded to produce a count up or a count down.
* On rising or falling edge of one signal, other signal state is checked to
* determine direction.
*
*  1. Rising edge on A and signal B is up       => (C)  => increment counter
*  2. Rising edge on A and signal B is down     => (CC) => decrement counter
*  3. Falling edge on A and signal B is up      => (C)  => decrement counter
*  4. Falling edge on A and signal B is down    => (CC) => increment counter
*  5. Rising edge on B and signal A is up       => (C)  => decrement counter
*  6. Rising edge on B and signal A is down     => (CC) => increment counter
*  7. Falling edge on B and signal A is up      => (C)  => increment counter
*  8. Falling edge on B and signal A is down    => (CC) => decrement counter
* 

According to these cases, three modes are available :

* X1 mode : signal A, rising edges (cases 1 and 2)

* X2 mode : signal A, rising and falling edges (cases 1, 2, 3 and 4)

* X4 mode : signals A and B, rising and falling edges (all cases)

The mapping/configuration of QDEC devices (timers) and the used pins has to be done in the board configuration (the board's `periph_conf.h).

When using the QDEC interface, first thing you have to do is initialize the QDEC device with the targeted mode. Once the device is initialized, it will start counting quadrature signals on all configured pins immediately.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`QDEC_DEV`](#group__drivers__periph__qdec_1ga101d07334a21ae81666572f918f47cf0)            | Default QDEC access macro.
`define `[`QDEC_UNDEF`](#group__drivers__periph__qdec_1ga02c82a47f6e4c59e0e35798eeb89e237)            | Default QDEC undefined value.
`enum `[`qdec_mode_t`](#group__drivers__periph__qdec_1ga5ce11edd1c986b4c6228b23cf8ef1fef)            | Default QDEC mode definition.
`public int32_t `[`qdec_init`](#group__drivers__periph__qdec_1ga48141338d4307bca6d31830b2d0d188d)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` dev,`[`qdec_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga5ce11edd1c986b4c6228b23cf8ef1fef)` mode,`[`qdec_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1gac48ebd8d27af33f6d478f355ce90813e)` cb,void * arg)`            | Initialize a QDEC device.
`public int32_t `[`qdec_read`](#group__drivers__periph__qdec_1ga93e6b7007f115afa41889869a2a9032b)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` dev)`            | Read the current value of the given qdec device.
`public int32_t `[`qdec_read_and_reset`](#group__drivers__periph__qdec_1ga52233ed888a0c247712ea515871231c5)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` dev)`            | Read the current value of the given qdec device and reset it.
`public void `[`qdec_start`](#group__drivers__periph__qdec_1gabd808c17b4c1bd8778a39c29670060b4)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` qdec)`            | Start the given qdec timer.
`public void `[`qdec_stop`](#group__drivers__periph__qdec_1gab64e4e295e019c7d8e7542543abecb6b)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` qdec)`            | Stop the given qdec timer.
`struct `[`qdec_isr_ctx_t`](#structqdec__isr__ctx__t) | Default interrupt context entry holding callback and argument.

## Members

#### `define `[`QDEC_DEV`](#group__drivers__periph__qdec_1ga101d07334a21ae81666572f918f47cf0) 

Default QDEC access macro.

#### `define `[`QDEC_UNDEF`](#group__drivers__periph__qdec_1ga02c82a47f6e4c59e0e35798eeb89e237) 

Default QDEC undefined value.

#### `enum `[`qdec_mode_t`](#group__drivers__periph__qdec_1ga5ce11edd1c986b4c6228b23cf8ef1fef) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
QDEC_X1            | 
QDEC_X2            | 
QDEC_X4            | 

Default QDEC mode definition.

#### `public int32_t `[`qdec_init`](#group__drivers__periph__qdec_1ga48141338d4307bca6d31830b2d0d188d)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` dev,`[`qdec_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga5ce11edd1c986b4c6228b23cf8ef1fef)` mode,`[`qdec_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1gac48ebd8d27af33f6d478f355ce90813e)` cb,void * arg)` 

Initialize a QDEC device.

The QDEC module is based on virtual QDEC devices. The QDEC devices can be configured to run in three modes :

* X1

* X2

* X4 See description above for more details about modes.

On QDEC counter overflow, an interrupt is triggered. The interruption calls the callback defined.

#### Parameters
* `dev` QDEC device to initialize 

* `mode` QDEC mode : X1, X2 or X4 

* `cb` Callback on QDEC timer overflow 

* `arg` Callback arguments

#### Returns
error code on error 

#### Returns
0 on success

#### `public int32_t `[`qdec_read`](#group__drivers__periph__qdec_1ga93e6b7007f115afa41889869a2a9032b)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` dev)` 

Read the current value of the given qdec device.

#### Parameters
* `dev` the qdec to read the current value from

#### Returns
the qdecs current value

#### `public int32_t `[`qdec_read_and_reset`](#group__drivers__periph__qdec_1ga52233ed888a0c247712ea515871231c5)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` dev)` 

Read the current value of the given qdec device and reset it.

#### Parameters
* `dev` the qdec to read the current value from

#### Returns
the qdecs current value

#### `public void `[`qdec_start`](#group__drivers__periph__qdec_1gabd808c17b4c1bd8778a39c29670060b4)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` qdec)` 

Start the given qdec timer.

This function is only needed if the qdec timer was stopped manually before.

#### Parameters
* `qdec` the qdec device to start

#### `public void `[`qdec_stop`](#group__drivers__periph__qdec_1gab64e4e295e019c7d8e7542543abecb6b)`(`[`qdec_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1ga74e14ce5474846ecaefbc4c9ada2410e)` qdec)` 

Stop the given qdec timer.

This will effect all of the timer's channels.

#### Parameters
* `qdec` the qdec device to stop

# struct `qdec_isr_ctx_t` 

Default interrupt context entry holding callback and argument.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`qdec_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1gac48ebd8d27af33f6d478f355ce90813e)` `[`cb`](#structqdec__isr__ctx__t_1a3a55224955706ac37132542a1520b6c1) | callback executed from qdec interrupt
`public void * `[`arg`](#structqdec__isr__ctx__t_1a6c37928074f5f5b9f39876ee0ca536f1) | optional argument given to that callback

## Members

#### `public `[`qdec_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__qdec_1gac48ebd8d27af33f6d478f355ce90813e)` `[`cb`](#structqdec__isr__ctx__t_1a3a55224955706ac37132542a1520b6c1) 

callback executed from qdec interrupt

#### `public void * `[`arg`](#structqdec__isr__ctx__t_1a6c37928074f5f5b9f39876ee0ca536f1) 

optional argument given to that callback

