---
title: api-sys_rtc_utils.md
description: api-sys_rtc_utils.md
---
# group `sys_rtc_utils` 

Common RTC helper functions.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`rtc_tm_normalize`](#group__sys__rtc__utils_1ga06347b21ae334674ac7612dce527a2d0)`(struct tm * time)`            | Normalize the time struct.
`public int `[`rtc_tm_compare`](#group__sys__rtc__utils_1ga869334f02407312c1027740f1c50bfcb)`(const struct tm * a,const struct tm * b)`            | Compare two time structs.
`public uint32_t `[`rtc_mktime`](#group__sys__rtc__utils_1gab6f0603c079200652d000c83a4a0b1b4)`(struct tm * t)`            | Convert time struct into timestamp.
`public void `[`rtc_localtime`](#group__sys__rtc__utils_1gaa5e4a2c2c6a2786092b0740750403a17)`(uint32_t time,struct tm * t)`            | Converts an RTC timestamp into a time struct.
`public bool `[`rtc_tm_valid`](#group__sys__rtc__utils_1ga6a114c8740b586de4e8ccdb6b5bde037)`(const struct tm * t)`            | Verify that a time struct `t` contains valid data.

## Members

#### `public void `[`rtc_tm_normalize`](#group__sys__rtc__utils_1ga06347b21ae334674ac7612dce527a2d0)`(struct tm * time)` 

Normalize the time struct.

The function modifies the fields of the tm structure as follows: If structure members are outside their valid interval, they will be normalized. So that, for example, 40 October is changed into 9 November.

If RTC_NORMALIZE_COMPAT is 1 `tm_wday` and `tm_yday` are set to values determined from the contents of the other fields.

#### Parameters
* `time` Pointer to the struct to normalize.

#### `public int `[`rtc_tm_compare`](#group__sys__rtc__utils_1ga869334f02407312c1027740f1c50bfcb)`(const struct tm * a,const struct tm * b)` 

Compare two time structs.

The time structs `a` and `b` are assumed to be normalized. Use [rtc_tm_normalize](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__rtc__utils_1ga06347b21ae334674ac7612dce527a2d0) to normalize a struct tm that has been manually edited.

#### Parameters
* `a` The first time struct. 

* `b` The second time struct.

#### Returns
an integer < 0 if a is earlier than b 

#### Returns
an integer > 0 if a is later than b 

#### Returns
0 if a and b are equal

#### `public uint32_t `[`rtc_mktime`](#group__sys__rtc__utils_1gab6f0603c079200652d000c83a4a0b1b4)`(struct tm * t)` 

Convert time struct into timestamp.

The time struct t is assumed to be normalized. Use [rtc_tm_normalize](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__rtc__utils_1ga06347b21ae334674ac7612dce527a2d0) to normalize a struct tm that has been manually edited.

#### Parameters
* `t` The time struct to convert

#### Returns
elapsed seconds since `RIOT_EPOCH`

#### `public void `[`rtc_localtime`](#group__sys__rtc__utils_1gaa5e4a2c2c6a2786092b0740750403a17)`(uint32_t time,struct tm * t)` 

Converts an RTC timestamp into a time struct.

#### Parameters
* `time` elapsed seconds since `RIOT_EPOCH`

* `t` the corresponding timestamp

#### `public bool `[`rtc_tm_valid`](#group__sys__rtc__utils_1ga6a114c8740b586de4e8ccdb6b5bde037)`(const struct tm * t)` 

Verify that a time struct `t` contains valid data.

This function checks whether the fields of the struct `t` are positive and within the bounds set by [rtc_tm_normalize](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__rtc__utils_1ga06347b21ae334674ac7612dce527a2d0).

#### Parameters
* `t` The struct to be checked.

#### Returns
true when valid, false if not

