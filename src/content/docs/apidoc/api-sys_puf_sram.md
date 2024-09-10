---
title: api-sys_puf_sram.md
description: api-sys_puf_sram.md
---
# group `sys_puf_sram` 

SRAM based physically unclonable function (PUF)

**This feature is experimental!**
 This API is experimental and in an early state - expect changes! 

The SRAM based seed mechanism it not cryptographically secure in its current state.

AboutTransistor variations of SRAM memory cells lead to different states after device power-on. The startup state of multiple memory blocks form a device-unique pattern plus additional noise ("weak PUF"). The noise is used to generate random numbers for PRNG seeding.

PreliminariesHigh entropy numbers can only be generated when the device starts from power-off (including low-power modes that turn of the RAM partly) and before the memory has been used. That's why the SRAM PUF procedure is implemented even before kernel initialization. Memory properties are hardware specific and can depend on environmental conditions. Thus, they should be evaluated for each individual deployment. A basic testing tool is provided in /RIOT/tests/sys/puf_sram.

Soft-reset detectionIn order to detect a software reboot without preceding power-off phase, a soft-reset detection mechanism writes a marker memory `PUF_SRAM_MARKER` into SRAM. If the marker is still present after a restart, a soft-reset is expected and the PUF procedure is skipped.

Random Seed GenerationUninitialized memory pattern are compressed by the lightweight DEK hash function to generate a high entropy 32-bit integer which can be used to seed a PRNG. This hash function is not cryptographically secure and as such, adversaries might be able to track parts of the initial SRAM response by analyzing PRNG sequences.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SEED_RAM_LEN`](#group__sys__puf__sram_1gafb5e933abd06c58d08f3ea0b87c57598)            | SRAM length considered for seeding.
`define `[`PUF_SRAM_MARKER`](#group__sys__puf__sram_1gab4abc08dea00c9816d023b6859286b6f)            | SRAM marker to detect reboot without power-off.
`public void `[`puf_sram_init`](#group__sys__puf__sram_1ga6b27ce5b23b67f52806c9197ef397306)`(const uint8_t * ram,size_t len)`            | checks source of reboot by `puf_sram_softreset` and conditionally calls `puf_sram_generate`
`public void `[`puf_sram_generate`](#group__sys__puf__sram_1ga760b51e9e3830d2f79ab2db24f8bb7f2)`(const uint8_t * ram,size_t len)`            | builds hash from `SEED_RAM_LEN` bytes uninitialized SRAM, writes it to the global variable `puf_sram_seed` and returns the value
`public bool `[`puf_sram_softreset`](#group__sys__puf__sram_1ga8184b5edf6d211e2124d8d1e2e0aafde)`(void)`            | checks for a memory marker to determine whether memory contains old data.

## Members

#### `define `[`SEED_RAM_LEN`](#group__sys__puf__sram_1gafb5e933abd06c58d08f3ea0b87c57598) 

SRAM length considered for seeding.

#### `define `[`PUF_SRAM_MARKER`](#group__sys__puf__sram_1gab4abc08dea00c9816d023b6859286b6f) 

SRAM marker to detect reboot without power-off.

Source: [https://www.random.org/bytes/](https://www.random.org/bytes/)

#### `public void `[`puf_sram_init`](#group__sys__puf__sram_1ga6b27ce5b23b67f52806c9197ef397306)`(const uint8_t * ram,size_t len)` 

checks source of reboot by `puf_sram_softreset` and conditionally calls `puf_sram_generate`

#### Parameters
* `ram` pointer to SRAM memory 

* `len` length of the memory to consider

#### `public void `[`puf_sram_generate`](#group__sys__puf__sram_1ga760b51e9e3830d2f79ab2db24f8bb7f2)`(const uint8_t * ram,size_t len)` 

builds hash from `SEED_RAM_LEN` bytes uninitialized SRAM, writes it to the global variable `puf_sram_seed` and returns the value

#### Parameters
* `ram` pointer to SRAM memory 

* `len` length of the memory to consider

#### `public bool `[`puf_sram_softreset`](#group__sys__puf__sram_1ga8184b5edf6d211e2124d8d1e2e0aafde)`(void)` 

checks for a memory marker to determine whether memory contains old data.

Otherwise it assumes a reboot from power down mode

#### Returns
0 when reset with power cycle was detected 

#### Returns
1 when reset without power cycle was detected

