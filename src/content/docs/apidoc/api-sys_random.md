---
title: api-sys_random.md
description: api-sys_random.md
---
# group `sys_random` 

Pseudo Random Number Generator (PRNG)

Various implementations of a PRNG are available:

* Tiny Mersenne Twister (default)

* Mersenne Twister

* Simple Park-Miller PRNG

* Musl C PRNG

* Fortuna (CS)PRNG

* Hardware Random Number Generator (non-seedable) HWRNG differ in how they generate random numbers and may not use a PRNG internally. Refer to the manual of your MCU for details.

By default, the `auto_init_random` module is enabled, which initializes the PRNG on startup. However, there is no lower limit on the entropy provided at that time. Unless the `periph_hwrng` module is used, entropy may be as little as zero (the constant may even be the same across devices).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`RANDOM_SEED_DEFAULT`](#group__sys__random_1gad7d1f7aa06b6854cbf4ed3def1f5eabd)            | Seed selected when all tries to collect seeds from a random source failed.
`define `[`PRNG_FLOAT`](#group__sys__random_1ga27cf0bd7f3f0328b7bc4f40acf9a6262)            | Enables support for floating point random number generation.
`public void `[`random_init`](#group__sys__random_1ga04012a93563b53748dc63eb552fd561b)`(uint32_t s)`            | initializes PRNG with a seed
`public void `[`random_init_by_array`](#group__sys__random_1ga25e1e20597e4f894e9a7a38f2f73ccd6)`(uint32_t init_key,int key_length)`            | initialize by an array with array-length init_key is the array for initializing keys key_length is its length slight change for C++, 2004/2/26
`public uint32_t `[`random_uint32`](#group__sys__random_1gac710f60d1f67206e14efacadd388e37f)`(void)`            | generates a random number on [0,0xffffffff]-interval
`public void `[`random_bytes`](#group__sys__random_1ga96ef972fa09ff461234522b64a686630)`(void * buf,size_t size)`            | writes random bytes in the [0,0xff]-interval to memory
`public uint32_t `[`random_uint32_range`](#group__sys__random_1gab6ee09e1e56df3cc78acd1fbf97bfb24)`(uint32_t a,uint32_t b)`            | generates a random number r with a <= r < b.
`public double `[`random_real`](#group__sys__random_1gaeb665e7b8e819c94aacae74d2ee7cb63)`(void)`            | generates a random number on [0,1)-real-interval
`public double `[`random_real_inclusive`](#group__sys__random_1ga059dc3c8ca03462dc3433b69736efff2)`(void)`            | generates a random number on [0,1]-real-interval
`public double `[`random_real_exclusive`](#group__sys__random_1gaf2adf7a2f20b5ccdcd8320cb986ed42c)`(void)`            | generates a random number on (0,1)-real-interval
`public double `[`random_res53`](#group__sys__random_1ga8c50d509bf9917ad512ee00d7574ab5f)`(void)`            | generates a random number on [0,1) with 53-bit resolution

## Members

#### `define `[`RANDOM_SEED_DEFAULT`](#group__sys__random_1gad7d1f7aa06b6854cbf4ed3def1f5eabd) 

Seed selected when all tries to collect seeds from a random source failed.

#### `define `[`PRNG_FLOAT`](#group__sys__random_1ga27cf0bd7f3f0328b7bc4f40acf9a6262) 

Enables support for floating point random number generation.

#### `public void `[`random_init`](#group__sys__random_1ga04012a93563b53748dc63eb552fd561b)`(uint32_t s)` 

initializes PRNG with a seed

Users only need to call this if the `auto_init_random` module is disabled, or provides insufficient quality entropy.

Currently, the random module uses a global state => multiple calls to [random_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__random_1ga04012a93563b53748dc63eb552fd561b) will reset the existing state of the PRNG.

#### Parameters
* `s` seed for the PRNG

#### `public void `[`random_init_by_array`](#group__sys__random_1ga25e1e20597e4f894e9a7a38f2f73ccd6)`(uint32_t init_key,int key_length)` 

initialize by an array with array-length init_key is the array for initializing keys key_length is its length slight change for C++, 2004/2/26

#### Parameters
* `init_key` array of keys (seeds) to initialize the PRNG 

* `key_length` number of elements in init_key

#### `public uint32_t `[`random_uint32`](#group__sys__random_1gac710f60d1f67206e14efacadd388e37f)`(void)` 

generates a random number on [0,0xffffffff]-interval

#### Returns
a random number on [0,0xffffffff]-interval

#### `public void `[`random_bytes`](#group__sys__random_1ga96ef972fa09ff461234522b64a686630)`(void * buf,size_t size)` 

writes random bytes in the [0,0xff]-interval to memory

#### `public uint32_t `[`random_uint32_range`](#group__sys__random_1gab6ee09e1e56df3cc78acd1fbf97bfb24)`(uint32_t a,uint32_t b)` 

generates a random number r with a <= r < b.

#### Parameters
* `a` minimum for random number 

* `b` upper bound for random number

a < b

#### Returns
a random number on [a,b)-interval

#### `public double `[`random_real`](#group__sys__random_1gaeb665e7b8e819c94aacae74d2ee7cb63)`(void)` 

generates a random number on [0,1)-real-interval

#### Returns
a random number on [0,1)-real-interval

#### `public double `[`random_real_inclusive`](#group__sys__random_1ga059dc3c8ca03462dc3433b69736efff2)`(void)` 

generates a random number on [0,1]-real-interval

#### Returns
a random number on [0,1]-real-interval

#### `public double `[`random_real_exclusive`](#group__sys__random_1gaf2adf7a2f20b5ccdcd8320cb986ed42c)`(void)` 

generates a random number on (0,1)-real-interval

#### Returns
a random number on (0,1)-real-interval

#### `public double `[`random_res53`](#group__sys__random_1ga8c50d509bf9917ad512ee00d7574ab5f)`(void)` 

generates a random number on [0,1) with 53-bit resolution

#### Returns
a random number on [0,1) with 53-bit resolution

