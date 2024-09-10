---
title: api-sys_architecture.md
description: api-sys_architecture.md
---
# group `sys_architecture` 

details

This module provides architecture-independent access to architecture details.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ARCHITECTURE_BREAKPOINT`](#group__sys__architecture_1gace7ad7a12241277439588b50b67aad9c)            | Set a breakpoint.
`define `[`ARCHITECTURE_WORD_BITS`](#group__sys__architecture_1ga06860b5146b0b486a4544d343f4562df)            | Size of a word in bits.
`define `[`ARCHITECTURE_WORD_BYTES`](#group__sys__architecture_1gab2bb8c282459dbbbdf233fda8270a54c)            | Size of a word in bytes.
`define `[`SWORD_MAX`](#group__sys__architecture_1ga90227735dead4bde1da8c958ae440af5)            | Highest number an sword_t can hold.
`define `[`SWORD_MIN`](#group__sys__architecture_1gae880581cd7ff229c83ad54c4739204b4)            | Smallest number an sword_t can hold.
`define `[`UWORD_MAX`](#group__sys__architecture_1ga5b9822abea6575cf0ddd16f3985afb33)            | Highest number an uword_t can hold.
`define `[`UWORD_MIN`](#group__sys__architecture_1gac5f6da67a93eedfd06c0069e5a1f8730)            | Smallest number an uword_t can hold.
`define `[`PRIxTXTPTR`](#group__sys__architecture_1ga7a72f1a381c9a6e64b54a12064ca29e6)            | Format string macro for text section pointer.
`define `[`PRI_SIZE_T_MODIFIER`](#group__sys__architecture_1ga17dc34bb363fc4e78ea90d4926ab9222)            | Architecture specific modifier used for printing sizes.
`define `[`PRIdSIZE`](#group__sys__architecture_1gadc5e20179bf95e62d3e01da83774c1a9)            | Macro holding the format specifier to print an `ssize_t` variable in decimal representation.
`define `[`PRIiSIZE`](#group__sys__architecture_1ga56111ee6ef08f05777ec11e9ddefcedb)            | Macro holding the format specifier to print an `ssize_t` variable.
`define `[`PRIoSIZE`](#group__sys__architecture_1ga1971dc1680389efa142e66483d59b1a6)            | Macro holding the format specifier to print an `ssize_t` variable in octal representation.
`define `[`PRIuSIZE`](#group__sys__architecture_1ga2b7b0557dc6cd786df02dafbb51f5292)            | Macro holding the format specifier to print an `size_t` variable in decimal representation.
`define `[`PRIxSIZE`](#group__sys__architecture_1ga6bb846616201c781a43466f4914d728a)            | Macro holding the format specifier to print an `size_t` variable in hexadecimal representation.
`define `[`PRIXSIZE`](#group__sys__architecture_1ga385953a41ad62409d9edb642607e468f)            | Macro holding the format specifier to print an `size_t` variable in hexadecimal representation.
`define `[`WORD_ALIGNED`](#group__sys__architecture_1gacc763b2fa5720d39e05129fe52fd632d)            | Type qualifier to use to align data on word boundaries.
`define `[`HAS_ALIGNMENT_OF`](#group__sys__architecture_1ga71357ec900141e00cebac6e4e207398f)            | Check if `addr` is alignment to `alignment`.
`define `[`IS_WORD_ALIGNED`](#group__sys__architecture_1ga455220aea19e82aafd921ac41931e92c)            | Check if `addr` is word-aligned.

## Members

#### `define `[`ARCHITECTURE_BREAKPOINT`](#group__sys__architecture_1gace7ad7a12241277439588b50b67aad9c) 

Set a breakpoint.

If no Debugger is attached, the CPU might get stuck here and consume a lot of power until reset. 

#### Parameters
* `value` Context value for debugger, usually ignored.

#### `define `[`ARCHITECTURE_WORD_BITS`](#group__sys__architecture_1ga06860b5146b0b486a4544d343f4562df) 

Size of a word in bits.

Depending on architecture, this can have a value of 8, 16, 32, or 64

#### `define `[`ARCHITECTURE_WORD_BYTES`](#group__sys__architecture_1gab2bb8c282459dbbbdf233fda8270a54c) 

Size of a word in bytes.

Depending on architecture, this can have a value or 1, 2, 4, or 8.

#### `define `[`SWORD_MAX`](#group__sys__architecture_1ga90227735dead4bde1da8c958ae440af5) 

Highest number an sword_t can hold.

#### `define `[`SWORD_MIN`](#group__sys__architecture_1gae880581cd7ff229c83ad54c4739204b4) 

Smallest number an sword_t can hold.

#### `define `[`UWORD_MAX`](#group__sys__architecture_1ga5b9822abea6575cf0ddd16f3985afb33) 

Highest number an uword_t can hold.

#### `define `[`UWORD_MIN`](#group__sys__architecture_1gac5f6da67a93eedfd06c0069e5a1f8730) 

Smallest number an uword_t can hold.

#### `define `[`PRIxTXTPTR`](#group__sys__architecture_1ga7a72f1a381c9a6e64b54a12064ca29e6) 

Format string macro for text section pointer.

#### `define `[`PRI_SIZE_T_MODIFIER`](#group__sys__architecture_1ga17dc34bb363fc4e78ea90d4926ab9222) 

Architecture specific modifier used for printing sizes.

#### `define `[`PRIdSIZE`](#group__sys__architecture_1gadc5e20179bf95e62d3e01da83774c1a9) 

Macro holding the format specifier to print an `ssize_t` variable in decimal representation.

#### `define `[`PRIiSIZE`](#group__sys__architecture_1ga56111ee6ef08f05777ec11e9ddefcedb) 

Macro holding the format specifier to print an `ssize_t` variable.

Same as [PRIdSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1gadc5e20179bf95e62d3e01da83774c1a9) for output. When used for input (e.g. in `scanf()`), `PRIiSIZE` will also accept hexadecimal and octal numbers if prefixed by `0x` or `0`, respectively.

#### `define `[`PRIoSIZE`](#group__sys__architecture_1ga1971dc1680389efa142e66483d59b1a6) 

Macro holding the format specifier to print an `ssize_t` variable in octal representation.

#### `define `[`PRIuSIZE`](#group__sys__architecture_1ga2b7b0557dc6cd786df02dafbb51f5292) 

Macro holding the format specifier to print an `size_t` variable in decimal representation.

#### `define `[`PRIxSIZE`](#group__sys__architecture_1ga6bb846616201c781a43466f4914d728a) 

Macro holding the format specifier to print an `size_t` variable in hexadecimal representation.

Same as [PRIXSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga385953a41ad62409d9edb642607e468f) for input, but uses lowercase letters for output (e.g. `2a` for 42).

#### `define `[`PRIXSIZE`](#group__sys__architecture_1ga385953a41ad62409d9edb642607e468f) 

Macro holding the format specifier to print an `size_t` variable in hexadecimal representation.

Same as [PRIxSIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__architecture_1ga6bb846616201c781a43466f4914d728a) for input, but uses uppercase letters for output (e.g. `2A` for 42).

#### `define `[`WORD_ALIGNED`](#group__sys__architecture_1gacc763b2fa5720d39e05129fe52fd632d) 

Type qualifier to use to align data on word boundaries.

Use like this:

```cpp
char [WORD_ALIGNED](./doc/starlight-docs/src/content/docs/apidoc/api-sys_pm_layered.md#structWORD__ALIGNED) thread_stack[[THREAD_STACKSIZE_DEFAULT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#thread__config_8h_1a713ebddc00581f4d415095cdbfd8791f)];
```

#### `define `[`HAS_ALIGNMENT_OF`](#group__sys__architecture_1ga71357ec900141e00cebac6e4e207398f) 

Check if `addr` is alignment to `alignment`.

#### Parameters
* `addr` Address to check for being aligned 

* `alignment` Alignment to check for 

`alignment` is a power of two. (But this is naturally fulfilled, as all possible alignment requirements in C are powers of two.) 

#### Parameters
* `1` `addr` is aligned to `alignment`

* `0` `addr` is unaligned

#### `define `[`IS_WORD_ALIGNED`](#group__sys__architecture_1ga455220aea19e82aafd921ac41931e92c) 

Check if `addr` is word-aligned.

#### Parameters
* `addr` Address to check for word alignment 

#### Parameters
* `1` `addr` is word-aligned 

* `0` `addr` is unaligned

