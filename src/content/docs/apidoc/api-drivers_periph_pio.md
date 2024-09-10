---
title: api-drivers_periph_pio.md
description: api-drivers_periph_pio.md
---
# group `drivers_periph_pio` 

Low-level PIO peripheral driver.

Programmable IO (PIO) is a cycle accurate IO control interface to emulate common IO standards like: I2C, SPI, UART or custom wire protocols as for the well known WS2812B LEDs. PIO programs are written in an MCU specific assembly language and they are saved in .pio files. The programs have to be loaded in the PIOs instruction memory. Once written to memory, a program can be executed by a state machines. A state machine can only execute one program at a time but multiple state machines can run the same program as access to instruction memory is shared. The user is responsible to allocate/deallocate instruction memory and lock/unlock state machines.

PIO programs are very versatile and execution may depend on hardware quirks, thus specific setup must be performed by the CPU PIO driver implementation and the program code itself. The CPU driver implementation provides a set of known programs for common IO standards but user written programs are also possible and should be placed in cpu//pio to make use of the processor specific PIO interface.

This API simply takes a look at PIO programs as something that resides in memory and can be executed on demand, by a state machine.

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PIO_DEV`](#group__drivers__periph__pio_1ga58b295342df50a4362829742b0a3bb1d)            | Default PIO device access macro.
`define `[`PIO_PROGRAM_NOT_LOADED`](#group__drivers__periph__pio_1ga1de959323feea48d0d8c04a99c3a8af8)            | Program location that states that the program has not been loaded into instruction memory.
`public void `[`pio_init`](#group__drivers__periph__pio_1ga6240e5a226174ab550a8b834505e9f7a)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)`            | Initialize a PIO device.
`public void `[`pio_start_programs`](#group__drivers__periph__pio_1ga877da91826dfc2402ca07574dac3aaf6)`(void)`            | Start automatically configured PIO programs.
`public `[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` `[`pio_sm_lock`](#group__drivers__periph__pio_1ga2a21c09c4ca71a76a99d22ddd445574f)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)`            | Get exclusive access to one of the state machines of PIO `pio`.
`public void `[`pio_sm_unlock`](#group__drivers__periph__pio_1gabe27111e1063aa1c9ddf99c12739966e)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm)`            | Release a previously locked state machine.
`public void `[`pio_sm_start`](#group__drivers__periph__pio_1ga1a8b517f0cb9495bbd71a81f4f134263)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm)`            | Start a state machine and execute the previously loaded program.
`public void `[`pio_sm_stop`](#group__drivers__periph__pio_1gaf0ad421f4ae5ca33ea3b5119c529fb72)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm)`            | Stop the execution of a program.
`public int `[`pio_alloc_program`](#group__drivers__periph__pio_1gac31ffda50cfc62bd78d9818190954431)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` * prog)`            | Allocate the required instruction memory to load the given PIO program into.
`public int `[`pio_alloc_program_sm_lock_any`](#group__drivers__periph__pio_1ga8b28ef0a3a6ac176d50477868dbb84c8)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` * pio_ptr,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` * sm_ptr,`[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` * program)`            | Convenience function which performs the usual PIO program resource acquisition.
`public void `[`pio_free_program`](#group__drivers__periph__pio_1ga9fef370d083c93cb6809fbf9edb7ba55)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` * prog)`            | Release the allocated instruction memory occupied by `prog`.
`struct `[`pio_program_t`](#structpio__program__t) | Struct that models a PIO program.

## Members

#### `define `[`PIO_DEV`](#group__drivers__periph__pio_1ga58b295342df50a4362829742b0a3bb1d) 

Default PIO device access macro.

#### `define `[`PIO_PROGRAM_NOT_LOADED`](#group__drivers__periph__pio_1ga1de959323feea48d0d8c04a99c3a8af8) 

Program location that states that the program has not been loaded into instruction memory.

#### `public void `[`pio_init`](#group__drivers__periph__pio_1ga6240e5a226174ab550a8b834505e9f7a)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)` 

Initialize a PIO device.

#### Parameters
* `pio` PIO index

No initialization is performed if "DISABLE_MODULE += periph_init_pio" is set.

#### `public void `[`pio_start_programs`](#group__drivers__periph__pio_1ga877da91826dfc2402ca07574dac3aaf6)`(void)` 

Start automatically configured PIO programs.

No execution is automatically started if "DISABLE_MODULE += periph_init_pio" is set.

#### `public `[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` `[`pio_sm_lock`](#group__drivers__periph__pio_1ga2a21c09c4ca71a76a99d22ddd445574f)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio)` 

Get exclusive access to one of the state machines of PIO `pio`.

#### Parameters
* `pio` PIO index

#### Returns
Success: Index of now locked state machine Failure: negative integer

#### `public void `[`pio_sm_unlock`](#group__drivers__periph__pio_1gabe27111e1063aa1c9ddf99c12739966e)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm)` 

Release a previously locked state machine.

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index

#### `public void `[`pio_sm_start`](#group__drivers__periph__pio_1ga1a8b517f0cb9495bbd71a81f4f134263)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm)` 

Start a state machine and execute the previously loaded program.

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index

#### `public void `[`pio_sm_stop`](#group__drivers__periph__pio_1gaf0ad421f4ae5ca33ea3b5119c529fb72)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` sm)` 

Stop the execution of a program.

#### Parameters
* `pio` PIO index 

* `sm` PIO state machine index

#### `public int `[`pio_alloc_program`](#group__drivers__periph__pio_1gac31ffda50cfc62bd78d9818190954431)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` * prog)` 

Allocate the required instruction memory to load the given PIO program into.

#### Parameters
* `pio` PIO index 

* `prog` Pointer PIO program

#### Returns
Success: 0 Failure: != 0

#### `public int `[`pio_alloc_program_sm_lock_any`](#group__drivers__periph__pio_1ga8b28ef0a3a6ac176d50477868dbb84c8)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` * pio_ptr,`[`pio_sm_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gab8eae4b6fc10b96be649cebf6c77466d)` * sm_ptr,`[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` * program)` 

Convenience function which performs the usual PIO program resource acquisition.

[pio_alloc_program](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1gac31ffda50cfc62bd78d9818190954431)[pio_sm_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga2a21c09c4ca71a76a99d22ddd445574f)

#### Parameters
* `pio_ptr` Destination to store the PIO index 

* `sm_ptr` Destination to store the PIO state machine index 

* `program` Program pointer of the program to be allocated

#### Returns
Success: 0 Failure: != 0

#### `public void `[`pio_free_program`](#group__drivers__periph__pio_1ga9fef370d083c93cb6809fbf9edb7ba55)`(`[`pio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pio_1ga521371dc9da4e0a8c3782f1d5677f217)` pio,`[`pio_program_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_pio.md#structpio__program__t)` * prog)` 

Release the allocated instruction memory occupied by `prog`.

#### Parameters
* `pio` PIO index 

* `prog` PIO program

# struct `pio_program_t` 

Struct that models a PIO program.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned `[`instr_numof`](#structpio__program__t_1aa0492a9e1b6e1f2a17cff12e4c6abe25) | Number of instructions.
`public int `[`location`](#structpio__program__t_1a560b80bef5c625648057d11ed8d24052) | Program location in memory.
`public bool `[`written`](#structpio__program__t_1ae901c84ce04c8e52baa240e360343eef) | Program was already written.

## Members

#### `public unsigned `[`instr_numof`](#structpio__program__t_1aa0492a9e1b6e1f2a17cff12e4c6abe25) 

Number of instructions.

#### `public int `[`location`](#structpio__program__t_1a560b80bef5c625648057d11ed8d24052) 

Program location in memory.

#### `public bool `[`written`](#structpio__program__t_1ae901c84ce04c8e52baa240e360343eef) 

Program was already written.

