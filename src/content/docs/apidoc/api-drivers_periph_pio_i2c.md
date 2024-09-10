---
title: api-drivers_periph_pio_i2c.md
description: api-drivers_periph_pio_i2c.md
---
# group `drivers_periph_pio_i2c` 

PIO I2C program interface.

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * `[`pio_i2c_get`](#group__drivers__periph__pio__i2c_1ga1845bab8d514b0e902e1bf2f1af6e802)`(`[`pio_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga0d8313c149c8bb3d9fcb44f4e9b0b2cc)` id)`            | Get access to a PIO I2C instance configured with PIO_I2C_CONFIG.
`public unsigned `[`pio_i2c_numof`](#group__drivers__periph__pio__i2c_1ga402350032bb2c9534edfea3608982dae)`(void)`            | Query the number of PIO I2C instances configured with PIO_I2C_CONFIG.
`public const `[`pio_program_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1gacede05e255bea1461858a8c1c57a287d)` * `[`pio_i2c_get_program`](#group__drivers__periph__pio__i2c_1gac82d5ded1b941dac6f3f7cce7aaafa57)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)`            | Get const I2C program reference.
`public int `[`pio_i2c_init_program`](#group__drivers__periph__pio__i2c_1ga1a0686e88722f34e999bda5b9a6c6adc)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)`            | Create, allocate, and write a PIO I2C program.
`public void `[`pio_i2c_deinit_program`](#group__drivers__periph__pio__i2c_1gaa1bbf5e2a387829e069e660b00d4c789)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)`            | Free a PIO I2C program.
`public `[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` `[`pio_i2c_sm_lock`](#group__drivers__periph__pio__i2c_1ga40a22bf282d2ad90f5b9eeb849de96f6)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * i2c)`            | Acquire a PIO state machine of PIO `pio` to run the PIO I2C program.
`public void `[`pio_i2c_sm_unlock`](#group__drivers__periph__pio__i2c_1ga204860af74b3053c7d3b5cca398fc743)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * i2c)`            | Release a PIO state machine of PIO `pio`.
`public void `[`pio_i2c_start_programs`](#group__drivers__periph__pio__i2c_1gaf42017779fd88f950d245ec9d6736444)`(void)`            | Start PIO I2C programs configured with PIO_I2C_CONFIG.
`public void `[`pio_i2c_stop_programs`](#group__drivers__periph__pio__i2c_1ga6bbcccbed67fa4938f212a3978530ae7)`(void)`            | Stop PIO I2C programs configured with PIO_I2C_CONFIG.
`public int `[`pio_i2c_write_program`](#group__drivers__periph__pio__i2c_1gaea401c75dabcf65f8f5b75b00986d183)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_program_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1gacede05e255bea1461858a8c1c57a287d)` * pro)`            | Write a PIO I2C program to instruction memory.
`public int `[`pio_i2c_init`](#group__drivers__periph__pio__i2c_1gaca58dd407d266bca2e7227bbd19194c1)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * bus,const `[`pio_program_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1gacede05e255bea1461858a8c1c57a287d)` * pro,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` sda,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` scl,unsigned irq)`            | Setup a state machine to run the I2C program.
`public void `[`pio_i2c_acquire`](#group__drivers__periph__pio__i2c_1ga03ca8b156e8366a781303f5c7dab3e95)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * bus)`            | Get exclusive access to the emulated I2C bus.
`public void `[`pio_i2c_release`](#group__drivers__periph__pio__i2c_1ga55c5fd04394e40d044651575eace0403)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * bus)`            | Release emulated I2C bus.
`public int `[`pio_i2c_read_regs`](#group__drivers__periph__pio__i2c_1ga742cd5bd5829ee0ef21e870493e44c38)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,void * data,size_t len,uint8_t flags)`            | Emulate [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304).
`public inline static int `[`pio_i2c_read_reg`](#group__drivers__periph__pio__i2c_1ga7db9d287739d2805c45a4a5ba3b67d44)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,void * data,uint8_t flags)`            | Emulate [i2c_read_reg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac4ab6e73e05b22c2da0c2f178da06d7b).
`public int `[`pio_i2c_read_bytes`](#group__drivers__periph__pio__i2c_1gaa61b0a3accc1d1730c1f9b4912182a59)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,void * data,size_t len,uint8_t flags)`            | Emulate [i2c_read_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga196b4508511c41822eddf6b43b008e90).
`public inline static int `[`pio_i2c_read_byte`](#group__drivers__periph__pio__i2c_1ga6e847cd7147006551ec299eec6249f72)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,void * data,uint8_t flags)`            | Emulate [i2c_read_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga81fed3b6aec0ba0956ba6a1efbc74774).
`public int `[`pio_i2c_write_bytes`](#group__drivers__periph__pio__i2c_1ga3693f3c9db0c7c5d211fc54182902466)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,const void * data,size_t len,uint8_t flags)`            | Emulate [i2c_write_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga2d4c26cb8d79d7a46764fb832e93ff0b).
`public inline static int `[`pio_i2c_write_byte`](#group__drivers__periph__pio__i2c_1ga1217cfee7da0fa7fd4716a10568a2cff)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint8_t data,uint8_t flags)`            | Emulate [i2c_write_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga062b562b2d2cd123199a2890968ba272).
`public int `[`pio_i2c_write_regs`](#group__drivers__periph__pio__i2c_1gafcd1c761777266e3c8f2d0c580002a0d)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,const void * data,size_t len,uint8_t flags)`            | Emulate [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08).
`public inline static int `[`pio_i2c_write_reg`](#group__drivers__periph__pio__i2c_1ga352b4225615e3bf651aab922c2e0e6b2)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,uint8_t data,uint8_t flags)`            | Emulate [i2c_write_reg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga02b8328d5e823d972e1e1234965daab1).
`struct `[`pio_program_i2c`](#structpio__program__i2c) | PIO I2C program type.
`struct `[`pio_i2c_bus`](#structpio__i2c__bus) | PIO I2C emulated bus type.

## Members

#### `public `[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * `[`pio_i2c_get`](#group__drivers__periph__pio__i2c_1ga1845bab8d514b0e902e1bf2f1af6e802)`(`[`pio_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga0d8313c149c8bb3d9fcb44f4e9b0b2cc)` id)` 

Get access to a PIO I2C instance configured with PIO_I2C_CONFIG.

#### Parameters
* `id` PIO I2C ID

#### Returns
PIO I2C objects

#### `public unsigned `[`pio_i2c_numof`](#group__drivers__periph__pio__i2c_1ga402350032bb2c9534edfea3608982dae)`(void)` 

Query the number of PIO I2C instances configured with PIO_I2C_CONFIG.

#### Returns
Number of PIO I2C instances

#### `public const `[`pio_program_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1gacede05e255bea1461858a8c1c57a287d)` * `[`pio_i2c_get_program`](#group__drivers__periph__pio__i2c_1gac82d5ded1b941dac6f3f7cce7aaafa57)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)` 

Get const I2C program reference.

#### Parameters
* `pio` PIO index

#### Returns
PIO I2C program allocated to PIO `pio`

#### `public int `[`pio_i2c_init_program`](#group__drivers__periph__pio__i2c_1ga1a0686e88722f34e999bda5b9a6c6adc)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)` 

Create, allocate, and write a PIO I2C program.

This function does nothing if the program is already created, allocated, and written.

#### Parameters
* `pio` PIO index

#### Returns
Success: 0 Failure: != 0

#### `public void `[`pio_i2c_deinit_program`](#group__drivers__periph__pio__i2c_1gaa1bbf5e2a387829e069e660b00d4c789)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)` 

Free a PIO I2C program.

#### Parameters
* `pio` PIO index

#### `public `[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` `[`pio_i2c_sm_lock`](#group__drivers__periph__pio__i2c_1ga40a22bf282d2ad90f5b9eeb849de96f6)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * i2c)` 

Acquire a PIO state machine of PIO `pio` to run the PIO I2C program.

#### Parameters
* `pio` PIO index 

* `i2c` PIO I2C bus

#### Returns
A valid state machine index or a negative number on error

#### `public void `[`pio_i2c_sm_unlock`](#group__drivers__periph__pio__i2c_1ga204860af74b3053c7d3b5cca398fc743)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * i2c)` 

Release a PIO state machine of PIO `pio`.

#### Parameters
* `i2c` PIO I2C bus

#### `public void `[`pio_i2c_start_programs`](#group__drivers__periph__pio__i2c_1gaf42017779fd88f950d245ec9d6736444)`(void)` 

Start PIO I2C programs configured with PIO_I2C_CONFIG.

No execution is started if "DISABLE_MODULE += pio_autostart_i2c" is set

#### `public void `[`pio_i2c_stop_programs`](#group__drivers__periph__pio__i2c_1ga6bbcccbed67fa4938f212a3978530ae7)`(void)` 

Stop PIO I2C programs configured with PIO_I2C_CONFIG.

#### `public int `[`pio_i2c_write_program`](#group__drivers__periph__pio__i2c_1gaea401c75dabcf65f8f5b75b00986d183)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_program_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1gacede05e255bea1461858a8c1c57a287d)` * pro)` 

Write a PIO I2C program to instruction memory.

#### Parameters
* `pio` PIO index 

* `pro` Allocated PIO I2C program

#### Returns
Success: 0 Failure: != 0

#### `public int `[`pio_i2c_init`](#group__drivers__periph__pio__i2c_1gaca58dd407d266bca2e7227bbd19194c1)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * bus,const `[`pio_program_i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1gacede05e255bea1461858a8c1c57a287d)` * pro,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` sda,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` scl,unsigned irq)` 

Setup a state machine to run the I2C program.

The program `pro` must have been allocated.

#### Parameters
* `bus` PIO I2C bus 

* `pro` Shared program base 

* `sda` SDA pin 

* `scl` SCL pin 

* `irq` IRQ line, 0 or 1

#### Returns
Success: 0 Failure: != 0

#### `public void `[`pio_i2c_acquire`](#group__drivers__periph__pio__i2c_1ga03ca8b156e8366a781303f5c7dab3e95)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * bus)` 

Get exclusive access to the emulated I2C bus.

#### Parameters
* `bus` PIO I2C bus

#### `public void `[`pio_i2c_release`](#group__drivers__periph__pio__i2c_1ga55c5fd04394e40d044651575eace0403)`(`[`pio_i2c_bus_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio__i2c_1ga393bd7316c8d62c1c5d6e583376607ed)` * bus)` 

Release emulated I2C bus.

#### Parameters
* `bus` PIO I2C bus

#### `public int `[`pio_i2c_read_regs`](#group__drivers__periph__pio__i2c_1ga742cd5bd5829ee0ef21e870493e44c38)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,void * data,size_t len,uint8_t flags)` 

Emulate [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `reg` Register address to read from (8- or 16-bit right-aligned) 

* `data` Memory location to store received data 

* `len` The number of bytes to read into `data`

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

#### `public inline static int `[`pio_i2c_read_reg`](#group__drivers__periph__pio__i2c_1ga7db9d287739d2805c45a4a5ba3b67d44)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,void * data,uint8_t flags)` 

Emulate [i2c_read_reg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac4ab6e73e05b22c2da0c2f178da06d7b).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `reg` Register address to read from (8- or 16-bit right-aligned) 

* `data` Memory location to store received data 

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

#### `public int `[`pio_i2c_read_bytes`](#group__drivers__periph__pio__i2c_1gaa61b0a3accc1d1730c1f9b4912182a59)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,void * data,size_t len,uint8_t flags)` 

Emulate [i2c_read_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga196b4508511c41822eddf6b43b008e90).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` Memory location to store received data 

* `len` The number of bytes to read into `data`

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

#### `public inline static int `[`pio_i2c_read_byte`](#group__drivers__periph__pio__i2c_1ga6e847cd7147006551ec299eec6249f72)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,void * data,uint8_t flags)` 

Emulate [i2c_read_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga81fed3b6aec0ba0956ba6a1efbc74774).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` Memory location to store received data 

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

#### `public int `[`pio_i2c_write_bytes`](#group__drivers__periph__pio__i2c_1ga3693f3c9db0c7c5d211fc54182902466)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,const void * data,size_t len,uint8_t flags)` 

Emulate [i2c_write_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga2d4c26cb8d79d7a46764fb832e93ff0b).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` Array holding the bytes to write to the device 

* `len` The number of bytes to write 

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

#### `public inline static int `[`pio_i2c_write_byte`](#group__drivers__periph__pio__i2c_1ga1217cfee7da0fa7fd4716a10568a2cff)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint8_t data,uint8_t flags)` 

Emulate [i2c_write_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga062b562b2d2cd123199a2890968ba272).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` Byte to write to the device 

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

#### `public int `[`pio_i2c_write_regs`](#group__drivers__periph__pio__i2c_1gafcd1c761777266e3c8f2d0c580002a0d)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,const void * data,size_t len,uint8_t flags)` 

Emulate [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `reg` register address to read from (8- or 16-bit, right-aligned) 

* `data` Array holding the bytes to write to the device 

* `len` The number of bytes to write 

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

#### `public inline static int `[`pio_i2c_write_reg`](#group__drivers__periph__pio__i2c_1ga352b4225615e3bf651aab922c2e0e6b2)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm,uint16_t addr,uint16_t reg,uint8_t data,uint8_t flags)` 

Emulate [i2c_write_reg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga02b8328d5e823d972e1e1234965daab1).

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `reg` register address to read from (8- or 16-bit, right-aligned) 

* `data` Array holding the bytes to write to the device 

* `flags` Optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
Success: 0 Failure: != 0

# struct `pio_program_i2c` 

PIO I2C program type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` `[`base`](#structpio__program__i2c_1ada5d51b9b5f3643cdf35963b98e5b2da) | PIO base program.
`public unsigned `[`ref_mask`](#structpio__program__i2c_1a7da17ef82401a7511952ef332dffb3c9) | Mask of referencing PIO state machines.

## Members

#### `public `[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` `[`base`](#structpio__program__i2c_1ada5d51b9b5f3643cdf35963b98e5b2da) 

PIO base program.

#### `public unsigned `[`ref_mask`](#structpio__program__i2c_1a7da17ef82401a7511952ef332dffb3c9) 

Mask of referencing PIO state machines.

# struct `pio_i2c_bus` 

PIO I2C emulated bus type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` `[`pio`](#structpio__i2c__bus_1a153c53825192989048c208abeb5791c1) | PIO index.
`public `[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` `[`sm`](#structpio__i2c__bus_1aa56f3d3421d1c8d2b2ddb15d712a1130) | State machine index.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mtx`](#structpio__i2c__bus_1a95347472c5e3bea6a84cd0ec9f93447c) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to protect the bus from concurrent accesses.

## Members

#### `public `[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` `[`pio`](#structpio__i2c__bus_1a153c53825192989048c208abeb5791c1) 

PIO index.

#### `public `[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` `[`sm`](#structpio__i2c__bus_1aa56f3d3421d1c8d2b2ddb15d712a1130) 

State machine index.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mtx`](#structpio__i2c__bus_1a95347472c5e3bea6a84cd0ec9f93447c) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) to protect the bus from concurrent accesses.

