---
title: api-sys_fmt.md
description: api-sys_fmt.md
---
# group `sys_fmt` 

Provides simple string formatting functions.

The goal of this API is to provide a string formatting interface which has a reduced code size footprint compared to the libc provided [stdio.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#stdio_8h) functionality.

This library provides a set of formatting and printing functions for 64 bit integers, even when the C library was built without support for 64 bit formatting (newlib-nano).

The fmt functions expect their `out` parameter to hold the entire output. This *MUST* be ensured by the caller.

Each fmt function will not write anything to `out` if it is `NULL`, but still return the number of characters that would have been written. This can be used to ensure the `out` buffer is large enough.

The print functions in this library do not buffer any output. Mixing calls to standard `printf` from [stdio.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#stdio_8h) with the `print_xxx` functions in fmt, especially on the same output line, may cause garbled output.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`FMT_USE_MEMMOVE`](#group__sys__fmt_1gab64c1cb0f7fcbe698b619a89703043e5)            | use memmove() or internal implementation
`public inline static int `[`fmt_is_digit`](#group__sys__fmt_1ga172397c05d04a4258e03639d6deac1fe)`(char c)`            | Test if the given character is a numerical digit (regex `[0-9]`)
`public inline static int `[`fmt_is_upper`](#group__sys__fmt_1gae8726591cd9243dfd254dd5fdb9d66df)`(char c)`            | Test if the given character is an uppercase letter (regex `[A-Z]`)
`public int `[`fmt_is_number`](#group__sys__fmt_1gab61891c36e43b841f675e2af7070dbfa)`(const char * str)`            | Test if the given string is a number (regex `[0-9]+`)
`public size_t `[`fmt_byte_hex`](#group__sys__fmt_1ga00b86861e4b8a343d68b4166ab388b58)`(char * out,uint8_t byte)`            | Format a byte value as hex.
`public size_t `[`fmt_bytes_hex`](#group__sys__fmt_1gad8075cb5e0ef485796d9aad9387cb92c)`(char * out,const uint8_t * ptr,size_t n)`            | Formats a sequence of bytes as hex characters.
`public size_t `[`fmt_bytes_hex_reverse`](#group__sys__fmt_1ga7cfcee38b7d47b161a25669eba537e01)`(char * out,const uint8_t * ptr,size_t n)`            | Formats a sequence of bytes as hex characters, starting with the last byte.
`public uint8_t `[`fmt_hex_byte`](#group__sys__fmt_1ga2a643f12b054bef19b99f0328883adf5)`(const char * hex)`            | Converts a sequence of two hex characters to a byte.
`public size_t `[`fmt_hex_bytes`](#group__sys__fmt_1gafbf701a4a030179f7fb9ca379c447061)`(uint8_t * out,const char * hex)`            | Converts a sequence of hex characters to an array of bytes.
`public size_t `[`fmt_u16_hex`](#group__sys__fmt_1gae0df6c8813e6033e1fd8ad3cdeb8434d)`(char * out,uint16_t val)`            | Convert a uint16 value to hex string.
`public size_t `[`fmt_u32_hex`](#group__sys__fmt_1gaa2b8a8ff62c91bdcf68461f66bab8556)`(char * out,uint32_t val)`            | Convert a uint32 value to hex string.
`public size_t `[`fmt_u64_hex`](#group__sys__fmt_1ga34967ee6de67776cf0a8c3dc93a5856a)`(char * out,uint64_t val)`            | Convert a uint64 value to hex string.
`public size_t `[`fmt_u16_dec`](#group__sys__fmt_1gaa9eb08f69c40d8be6a7417a8ee6309c6)`(char * out,uint16_t val)`            | Convert a uint16 value to decimal string.
`public size_t `[`fmt_u32_dec`](#group__sys__fmt_1ga34b9fac6d8d449fca7089a0879f3bb09)`(char * out,uint32_t val)`            | Convert a uint32 value to decimal string.
`public size_t `[`fmt_u64_dec`](#group__sys__fmt_1gae8a85f1e29de22c5f98d61350a4941e3)`(char * out,uint64_t val)`            | Convert a uint64 value to decimal string.
`public size_t `[`fmt_s64_dec`](#group__sys__fmt_1gad9b61edd54bf6b0280a9f0a4d7c95fa5)`(char * out,int64_t val)`            | Convert a int64 value to decimal string.
`public size_t `[`fmt_s32_dec`](#group__sys__fmt_1ga793f76758ea8a58bcfddc1e683ef46a8)`(char * out,int32_t val)`            | Convert a int32 value to decimal string.
`public size_t `[`fmt_s16_dec`](#group__sys__fmt_1ga5cee5b33a4b18bc96dfc3363d7592559)`(char * out,int16_t val)`            | Convert a int16 value to decimal string.
`public size_t `[`fmt_s16_dfp`](#group__sys__fmt_1ga1bc731984147cabb28cc9ec7d8ab551f)`(char * out,int16_t val,int scale)`            | Convert 16-bit fixed point number to a decimal string.
`public size_t `[`fmt_s32_dfp`](#group__sys__fmt_1ga41ac8fee9982923bc2ea48d8a86d7202)`(char * out,int32_t val,int scale)`            | Convert 32-bit fixed point number to a decimal string.
`public size_t `[`fmt_float`](#group__sys__fmt_1ga9578cea845911b8599501348ad8e0eec)`(char * out,float f,unsigned precision)`            | Format float to string.
`public size_t `[`fmt_char`](#group__sys__fmt_1ga29225c8b4a09e51d2076daf3c59e66e1)`(char * out,char c)`            | Copy `in` char to string (without terminating '\0')
`public size_t `[`fmt_strlen`](#group__sys__fmt_1ga0918f0183dc9677de991a3b3b6289ac0)`(const char * str)`            | Count characters until '\0' (exclusive) in `str`.
`public size_t `[`fmt_strnlen`](#group__sys__fmt_1ga386b2c4630bfd595ad105baa5b7b45c0)`(const char * str,size_t maxlen)`            | Count at most `maxlen` characters until '\0' (exclusive) in `str`.
`public size_t `[`fmt_str`](#group__sys__fmt_1gad39a105c1644dd591e4ec74f0bf7708c)`(char * out,const char * str)`            | Copy null-terminated string (excluding terminating \0)
`public size_t `[`fmt_to_lower`](#group__sys__fmt_1ga7ffc22523ee1ba8f24a7a71f854688d4)`(char * out,const char * str)`            | Copy null-terminated string to a lowercase string (excluding terminating \0)
`public uint32_t `[`scn_u32_dec`](#group__sys__fmt_1gae7abb7bb487fe4ffa73d710dcacb8d07)`(const char * str,size_t n)`            | Convert string of decimal digits to uint32.
`public uint32_t `[`scn_u32_hex`](#group__sys__fmt_1gaf296d479862cb4b9ee6b5a87af2d16de)`(const char * str,size_t n)`            | Convert string hexadecimal digits to uin32_t.
`public void `[`print`](#group__sys__fmt_1gae9b83f039b62351371f0b051d40b321e)`(const char * s,size_t n)`            | Print string to stdout.
`public void `[`print_u32_dec`](#group__sys__fmt_1ga88f6fc56445333c3b4c8c0fcd7ef13cf)`(uint32_t val)`            | Print uint32 value to stdout.
`public void `[`print_s32_dec`](#group__sys__fmt_1ga464082f52f7a6dd788fd4bddcf50844e)`(int32_t val)`            | Print int32 value to stdout.
`public void `[`print_byte_hex`](#group__sys__fmt_1ga1b47859929ba10df923d40d9c33cc169)`(uint8_t byte)`            | Print byte value as hex to stdout.
`public void `[`print_bytes_hex`](#group__sys__fmt_1gacecc1a8dc59538ce64b0157905c52762)`(const void * bytes,size_t n)`            | Print bytes as hex to stdout.
`public void `[`print_u32_hex`](#group__sys__fmt_1gad8dbb9f77164d0050c0f07df90173fa9)`(uint32_t val)`            | Print uint32 value as hex to stdout.
`public void `[`print_u64_hex`](#group__sys__fmt_1gab6898a13d6773a5691a05b7ad62cc891)`(uint64_t val)`            | Print uint64 value as hex to stdout.
`public void `[`print_u64_dec`](#group__sys__fmt_1gac95639f7ec3fff8f306f9f1c4ff64942)`(uint64_t val)`            | Print uint64 value as decimal to stdout.
`public void `[`print_s64_dec`](#group__sys__fmt_1ga3d28124a0b4e0e470b8040de644c1b58)`(uint64_t val)`            | Print int64 value as decimal to stdout.
`public void `[`print_float`](#group__sys__fmt_1gad2db3c0e6019467dafd2554b852dc236)`(float f,unsigned precision)`            | Print float value.
`public void `[`print_str`](#group__sys__fmt_1gadb0aa71349ab66b0edb3106fb2abb5c3)`(const char * str)`            | Print null-terminated string to stdout.
`public size_t `[`fmt_lpad`](#group__sys__fmt_1ga2a643544c74b8000c17474d087b1cb11)`(char * str,size_t in_len,size_t pad_len,char pad_char)`            | Pad string to the left.

## Members

#### `define `[`FMT_USE_MEMMOVE`](#group__sys__fmt_1gab64c1cb0f7fcbe698b619a89703043e5) 

use memmove() or internal implementation

#### `public inline static int `[`fmt_is_digit`](#group__sys__fmt_1ga172397c05d04a4258e03639d6deac1fe)`(char c)` 

Test if the given character is a numerical digit (regex `[0-9]`)

#### Parameters
* `c` Character to test

#### Returns
true if `c` is a digit, false otherwise

#### `public inline static int `[`fmt_is_upper`](#group__sys__fmt_1gae8726591cd9243dfd254dd5fdb9d66df)`(char c)` 

Test if the given character is an uppercase letter (regex `[A-Z]`)

#### Parameters
* `c` Character to test

#### Returns
true if `c` is an uppercase letter, false otherwise

#### `public int `[`fmt_is_number`](#group__sys__fmt_1gab61891c36e43b841f675e2af7070dbfa)`(const char * str)` 

Test if the given string is a number (regex `[0-9]+`)

#### Parameters
* `str` String to test, **must be `\0` terminated**

#### Returns
true if `str` solely contains decimal digits, false otherwise

#### `public size_t `[`fmt_byte_hex`](#group__sys__fmt_1ga00b86861e4b8a343d68b4166ab388b58)`(char * out,uint8_t byte)` 

Format a byte value as hex.

E.g., converts byte value 0 to the string 00, 255 to the string FF.

Will write two characters to `out`. If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `byte` Byte value to convert

#### Returns
2

#### `public size_t `[`fmt_bytes_hex`](#group__sys__fmt_1gad8075cb5e0ef485796d9aad9387cb92c)`(char * out,const uint8_t * ptr,size_t n)` 

Formats a sequence of bytes as hex characters.

Will write 2*n characters to `out`. If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `ptr` Pointer to bytes to convert 

* `n` Number of bytes to convert

#### Returns
2*n

#### `public size_t `[`fmt_bytes_hex_reverse`](#group__sys__fmt_1ga7cfcee38b7d47b161a25669eba537e01)`(char * out,const uint8_t * ptr,size_t n)` 

Formats a sequence of bytes as hex characters, starting with the last byte.

Will write 2*n characters to `out`. If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `ptr` Pointer to bytes to convert 

* `n` Number of bytes to convert

#### Returns
2*n

#### `public uint8_t `[`fmt_hex_byte`](#group__sys__fmt_1ga2a643f12b054bef19b99f0328883adf5)`(const char * hex)` 

Converts a sequence of two hex characters to a byte.

The hex characters sequence must contain valid hexadecimal characters otherwise the result is undefined.

#### Parameters
* `hex` Pointer to input buffer 

#### Returns
byte based on hex string

#### `public size_t `[`fmt_hex_bytes`](#group__sys__fmt_1gafbf701a4a030179f7fb9ca379c447061)`(uint8_t * out,const char * hex)` 

Converts a sequence of hex characters to an array of bytes.

The sequence of hex characters must have an even length: 2 hex character => 1 byte. If the sequence of hex has an odd length, this function returns 0 and does not write to `out`.

The hex characters sequence must contain valid hexadecimal characters otherwise the result in `out` is undefined.

If `out` is NULL, will only return the number of bytes that would have been written.

#### Parameters
* `out` Pointer to converted bytes, or NULL 

* `hex` Pointer to input buffer 

#### Returns
strlen(hex) / 2 when length of `hex` was even 

#### Returns
0 otherwise

#### `public size_t `[`fmt_u16_hex`](#group__sys__fmt_1gae0df6c8813e6033e1fd8ad3cdeb8434d)`(char * out,uint16_t val)` 

Convert a uint16 value to hex string.

Will write 4 characters to `out`. If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
4

#### `public size_t `[`fmt_u32_hex`](#group__sys__fmt_1gaa2b8a8ff62c91bdcf68461f66bab8556)`(char * out,uint32_t val)` 

Convert a uint32 value to hex string.

Will write 8 characters to `out`. If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
8

#### `public size_t `[`fmt_u64_hex`](#group__sys__fmt_1ga34967ee6de67776cf0a8c3dc93a5856a)`(char * out,uint64_t val)` 

Convert a uint64 value to hex string.

Will write 16 characters to `out`. If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
16

#### `public size_t `[`fmt_u16_dec`](#group__sys__fmt_1gaa9eb08f69c40d8be6a7417a8ee6309c6)`(char * out,uint16_t val)` 

Convert a uint16 value to decimal string.

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
nr of characters written to (or needed in) `out`

#### `public size_t `[`fmt_u32_dec`](#group__sys__fmt_1ga34b9fac6d8d449fca7089a0879f3bb09)`(char * out,uint32_t val)` 

Convert a uint32 value to decimal string.

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
nr of characters written to (or needed in) `out`

#### `public size_t `[`fmt_u64_dec`](#group__sys__fmt_1gae8a85f1e29de22c5f98d61350a4941e3)`(char * out,uint64_t val)` 

Convert a uint64 value to decimal string.

If `out` is NULL, will only return the number of characters that would have been written.

This adds ~400b of code when used.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
nr of characters written to (or needed in) `out`

#### `public size_t `[`fmt_s64_dec`](#group__sys__fmt_1gad9b61edd54bf6b0280a9f0a4d7c95fa5)`(char * out,int64_t val)` 

Convert a int64 value to decimal string.

Will add a leading "-" if `val` is negative.

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
nr of characters written to (or needed in) `out`

#### `public size_t `[`fmt_s32_dec`](#group__sys__fmt_1ga793f76758ea8a58bcfddc1e683ef46a8)`(char * out,int32_t val)` 

Convert a int32 value to decimal string.

Will add a leading "-" if `val` is negative.

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
nr of characters written to (or needed in) `out`

#### `public size_t `[`fmt_s16_dec`](#group__sys__fmt_1ga5cee5b33a4b18bc96dfc3363d7592559)`(char * out,int16_t val)` 

Convert a int16 value to decimal string.

Will add a leading "-" if `val` is negative.

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `val` Value to convert

#### Returns
nr of characters written to (or needed in) `out`

#### `public size_t `[`fmt_s16_dfp`](#group__sys__fmt_1ga1bc731984147cabb28cc9ec7d8ab551f)`(char * out,int16_t val,int scale)` 

Convert 16-bit fixed point number to a decimal string.

See [fmt_s32_dfp()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__fmt_1ga41ac8fee9982923bc2ea48d8a86d7202) for more details

#### Parameters
* `out` Pointer to the output buffer, or NULL 

* `val` Fixed point value 

* `scale` Scale value

#### Returns
Length of the resulting string

#### `public size_t `[`fmt_s32_dfp`](#group__sys__fmt_1ga41ac8fee9982923bc2ea48d8a86d7202)`(char * out,int32_t val,int scale)` 

Convert 32-bit fixed point number to a decimal string.

This multiplies a 32bit signed number by 10^(scale) before formatting.

The resulting string will always be padded with zeros after the decimal point.

For example: if `val` is -35648 and `scale` is -2, the resulting string will be "-352.48"( -35648*10^-2). The same value for `val` with `scale` of 2 will result in "-3524800" (-35648*10^2).

#### Parameters
* `out` Pointer to the output buffer, or NULL 

* `val` Fixed point value 

* `scale` Scale value

#### Returns
Length of the resulting string

#### `public size_t `[`fmt_float`](#group__sys__fmt_1ga9578cea845911b8599501348ad8e0eec)`(char * out,float f,unsigned precision)` 

Format float to string.

Converts float value `f` to string

If `out` is NULL, will only return the number of characters that would have been written.

> This function is using floating point math. It pulls in about 2.4k bytes of code on ARM Cortex-M platforms.

-2^32 < f < 2^32 

precision < 8 (TENMAP_SIZE)

#### Parameters
* `out` string to write to (or NULL) 

* `f` float value to convert 

* `precision` number of digits after decimal point

#### Returns
nr of characters the function did or would write to out

#### `public size_t `[`fmt_char`](#group__sys__fmt_1ga29225c8b4a09e51d2076daf3c59e66e1)`(char * out,char c)` 

Copy `in` char to string (without terminating '\0')

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` string to write to (or NULL) 

* `c` char value to append

#### Returns
nr of characters the function did or would write to out

#### `public size_t `[`fmt_strlen`](#group__sys__fmt_1ga0918f0183dc9677de991a3b3b6289ac0)`(const char * str)` 

Count characters until '\0' (exclusive) in `str`.

#### Parameters
* `str` Pointer to string

#### Returns
nr of characters in string `str` points to

#### `public size_t `[`fmt_strnlen`](#group__sys__fmt_1ga386b2c4630bfd595ad105baa5b7b45c0)`(const char * str,size_t maxlen)` 

Count at most `maxlen` characters until '\0' (exclusive) in `str`.

#### Parameters
* `str` Pointer to string 

* `maxlen` Maximum number of chars to count

#### Returns
nr of characters in string `str` points to, or `maxlen` if no null terminator is found within `maxlen` chars

#### `public size_t `[`fmt_str`](#group__sys__fmt_1gad39a105c1644dd591e4ec74f0bf7708c)`(char * out,const char * str)` 

Copy null-terminated string (excluding terminating \0)

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `str` Pointer to null-terminated source string

#### Returns
nr of characters written to (or needed in) `out`

#### `public size_t `[`fmt_to_lower`](#group__sys__fmt_1ga7ffc22523ee1ba8f24a7a71f854688d4)`(char * out,const char * str)` 

Copy null-terminated string to a lowercase string (excluding terminating \0)

If `out` is NULL, will only return the number of characters that would have been written.

#### Parameters
* `out` Pointer to output buffer, or NULL 

* `str` Pointer to null-terminated source string

#### Returns
nr of characters written to (or needed in) `out`

#### `public uint32_t `[`scn_u32_dec`](#group__sys__fmt_1gae7abb7bb487fe4ffa73d710dcacb8d07)`(const char * str,size_t n)` 

Convert string of decimal digits to uint32.

Will convert up to `n` digits. Stops at any non-digit or '\0' character.

#### Parameters
* `str` Pointer to string to read from 

* `n` Maximum nr of characters to consider

#### Returns
converted uint32_t value

#### `public uint32_t `[`scn_u32_hex`](#group__sys__fmt_1gaf296d479862cb4b9ee6b5a87af2d16de)`(const char * str,size_t n)` 

Convert string hexadecimal digits to uin32_t.

Will convert up to `n` digits. Stop at any non-hexadecimal or '\0' character

#### Parameters
* `str` Pointer to string to read from 

* `n` Maximum number of characters to consider

#### Returns
converted uint32_t value

#### `public void `[`print`](#group__sys__fmt_1gae9b83f039b62351371f0b051d40b321e)`(const char * s,size_t n)` 

Print string to stdout.

Writes `n` characters from `s` to STDOUT_FILENO.

#### Parameters
* `s` Pointer to string to print 

* `n` Number of characters to print

#### `public void `[`print_u32_dec`](#group__sys__fmt_1ga88f6fc56445333c3b4c8c0fcd7ef13cf)`(uint32_t val)` 

Print uint32 value to stdout.

#### Parameters
* `val` Value to print

#### `public void `[`print_s32_dec`](#group__sys__fmt_1ga464082f52f7a6dd788fd4bddcf50844e)`(int32_t val)` 

Print int32 value to stdout.

#### Parameters
* `val` Value to print

#### `public void `[`print_byte_hex`](#group__sys__fmt_1ga1b47859929ba10df923d40d9c33cc169)`(uint8_t byte)` 

Print byte value as hex to stdout.

#### Parameters
* `byte` Byte value to print

#### `public void `[`print_bytes_hex`](#group__sys__fmt_1gacecc1a8dc59538ce64b0157905c52762)`(const void * bytes,size_t n)` 

Print bytes as hex to stdout.

#### Parameters
* `bytes` Byte array to print 

* `n` Number of bytes to print

#### `public void `[`print_u32_hex`](#group__sys__fmt_1gad8dbb9f77164d0050c0f07df90173fa9)`(uint32_t val)` 

Print uint32 value as hex to stdout.

#### Parameters
* `val` Value to print

#### `public void `[`print_u64_hex`](#group__sys__fmt_1gab6898a13d6773a5691a05b7ad62cc891)`(uint64_t val)` 

Print uint64 value as hex to stdout.

#### Parameters
* `val` Value to print

#### `public void `[`print_u64_dec`](#group__sys__fmt_1gac95639f7ec3fff8f306f9f1c4ff64942)`(uint64_t val)` 

Print uint64 value as decimal to stdout.

This uses [fmt_u64_dec()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__fmt_1gae8a85f1e29de22c5f98d61350a4941e3), which uses ~400b of code.

#### Parameters
* `val` Value to print

#### `public void `[`print_s64_dec`](#group__sys__fmt_1ga3d28124a0b4e0e470b8040de644c1b58)`(uint64_t val)` 

Print int64 value as decimal to stdout.

This uses [fmt_s64_dec()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__fmt_1gad9b61edd54bf6b0280a9f0a4d7c95fa5), which uses ~400b of code.

#### Parameters
* `val` Value to print

#### `public void `[`print_float`](#group__sys__fmt_1gad2db3c0e6019467dafd2554b852dc236)`(float f,unsigned precision)` 

Print float value.

See fmt_float for code size warning!

-2^32 < f < 2^32 

precision < TENMAP_SIZE (== 8)

#### Parameters
* `f` float value to print 

* `precision` number of digits after decimal point

#### `public void `[`print_str`](#group__sys__fmt_1gadb0aa71349ab66b0edb3106fb2abb5c3)`(const char * str)` 

Print null-terminated string to stdout.

#### Parameters
* `str` Pointer to string to print

#### `public size_t `[`fmt_lpad`](#group__sys__fmt_1ga2a643544c74b8000c17474d087b1cb11)`(char * str,size_t in_len,size_t pad_len,char pad_char)` 

Pad string to the left.

This function left-pads a given string `str` with `pad_char`.

For example, calling fmt_lpad("abcd", 4, 7, ' ');
 would result in "   abcd".

The function only writes to `str` if str is non-NULL and `pad_len` is < `in_len`.

Caller must ensure `str` can take pad_len characters!

#### Parameters
* `str` string to pad (or NULL) 

* `in_len` length of str 

* `pad_len` total length after padding 

* `pad_char` char to use as pad char

#### Returns
max(in_len, pad_len)

