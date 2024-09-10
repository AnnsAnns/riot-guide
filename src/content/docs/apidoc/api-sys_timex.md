---
title: api-sys_timex.md
description: api-sys_timex.md
---
# group `sys_timex` 

Timestamp representation, computation, and conversion.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`TIMEX_MAX_STR_LEN`](#group__sys__timex_1ga4ac3f83d591b7b6dddb1dd7eec97b3c2)            | The maximum length of the string representation of a timex timestamp.
`define `[`TM_WDAY_SUN`](#group__sys__timex_1gab43ac71e2f683190989db33392d71ce0)            | Sunday in `struct tm::tm_wday`.
`define `[`TM_WDAY_MON`](#group__sys__timex_1gaa95a250c9eb5dc794c10ef96b11f259e)            | Monday in `struct tm::tm_wday`.
`define `[`TM_WDAY_TUE`](#group__sys__timex_1gade72b7bebf47c3828eae223f0d2b6d0f)            | Tuesday in `struct tm::tm_wday`.
`define `[`TM_WDAY_WED`](#group__sys__timex_1ga43cff08f933e486cffcf179400f2110c)            | Wednesday in `struct tm::tm_wday`.
`define `[`TM_WDAY_THU`](#group__sys__timex_1ga7a792d445ffb21a7ad11980215f632e7)            | Thursday in `struct tm::tm_wday`.
`define `[`TM_WDAY_FRI`](#group__sys__timex_1ga73847a5adac553a7f3851361a1698cbe)            | Friday in `struct tm::tm_wday`.
`define `[`TM_WDAY_SAT`](#group__sys__timex_1ga1d94b7b645549625974e972bdb758a7a)            | Saturday in `struct tm::tm_wday`.
`define `[`TM_MON_JAN`](#group__sys__timex_1gac28781b452a21681e292e5ee4e2e3847)            | January in `struct tm::tm_mon`
`define `[`TM_MON_FEB`](#group__sys__timex_1ga24d010baaa86c03fbe4a239dc8de5b46)            | February in `struct tm::tm_mon`
`define `[`TM_MON_MAR`](#group__sys__timex_1ga0b297cfd8f53892bb9f551eae77966d5)            | March in `struct tm::tm_mon`
`define `[`TM_MON_APR`](#group__sys__timex_1gace4e8aff5bc72256afc028df0288691b)            | April in `struct tm::tm_mon`
`define `[`TM_MON_MAY`](#group__sys__timex_1ga4e678e8763c818624bb9cc028712c9b9)            | May in `struct tm::tm_mon`
`define `[`TM_MON_JUN`](#group__sys__timex_1ga0c51bfaff57d143c184c3f8486de20ce)            | June in `struct tm::tm_mon`
`define `[`TM_MON_JUL`](#group__sys__timex_1ga3aee0733eed54e2f1febd0b73c74e85d)            | July in `struct tm::tm_mon`
`define `[`TM_MON_AUG`](#group__sys__timex_1ga305d50e3e0170023b03598066e631145)            | August in `struct tm::tm_mon`
`define `[`TM_MON_SEP`](#group__sys__timex_1gaf070854605f31d80b030b18bf769a1ef)            | September in `struct tm::tm_mon`
`define `[`TM_MON_OCT`](#group__sys__timex_1gafa6992dcb1b2f108e79c35d1da2cd45b)            | October in `struct tm::tm_mon`
`define `[`TM_MON_NOV`](#group__sys__timex_1gaa1d423ec1dbf8c6575e0982f4c4648c1)            | November in `struct tm::tm_mon`
`define `[`TM_MON_DEC`](#group__sys__timex_1gadd16c4a6ba4df3fb953857755f856bb4)            | December in `struct tm::tm_mon`
`public `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_add`](#group__sys__timex_1ga1e9d5cbb82fbe42e8c0f8b1c450ddd5e)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a,const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` b)`            | Adds two timestamps.
`public `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_sub`](#group__sys__timex_1gaa86a4ecaf454d7369647327c9e3910cf)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a,const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` b)`            | Subtracts two timestamps.
`public `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_set`](#group__sys__timex_1gafef6baf60e2b381b6c17b2350276dbd2)`(uint32_t seconds,uint32_t microseconds)`            | Initializes a timex timestamp.
`public int `[`timex_cmp`](#group__sys__timex_1ga4f39d89e25bb9ad8dc732d280cdcf34a)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a,const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` b)`            | Compares two timex timestamps.
`public inline static void `[`timex_normalize`](#group__sys__timex_1ga6ba2c35a0ce3eb5c834c99a927e68e84)`(`[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` * time)`            | Corrects timex structure so that microseconds < 1000000.
`public inline static int `[`timex_isnormalized`](#group__sys__timex_1ga7728e254a400bc3b68c7550480f1f8c4)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` * time)`            | Tests a timex timestamp for normalization.
`public inline static uint64_t `[`timex_uint64`](#group__sys__timex_1gaba7ae3494893a929a99b6f59cc0f5d2b)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a)`            | Converts a timex timestamp to a 64 bit value.
`public inline static `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_from_uint64`](#group__sys__timex_1gaf4d7c63297ac6720ab3ca4490d9e5c8c)`(const uint64_t timestamp)`            | Converts a 64 bit value of microseconds to a timex timestamp.
`public const char * `[`timex_to_str`](#group__sys__timex_1ga7597b2c5c463a64ab80e1a07d43a454f)`(`[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` t,char * timestamp)`            | Converts a timex timestamp to a string.
`public int `[`tm_is_leap_year`](#group__sys__timex_1gafc13655b2035211992d436882e242c18)`(unsigned year)`            | Tells if a given year is a leap year in the Gregorian calendar.
`public int `[`tm_doomsday`](#group__sys__timex_1gae579f901703dd350268b1dd63b545bab)`(int year)`            | Returns the congruent weekday of the Doomsday (March 0).
`public void `[`tm_get_wyday`](#group__sys__timex_1gac67a0472f7a208f49923efe1723496a6)`(int year,int mon,int mday,int * wday,int * yday)`            | Calculates the day of the year and the weekday of a given date.
`public void `[`tm_fill_derived_values`](#group__sys__timex_1gaa8f53853997c4fb5760ae53a7c5cb51b)`(struct tm * tm)`            | Fills in `struct tm::tm_wday` and `struct tm::tm_yday` given a date.
`public int `[`tm_is_valid_date`](#group__sys__timex_1ga73ecae46e79daff7c461f02fbbca6ca1)`(int year,int mon,int mday)`            | Tests if a date is valid.
`public int `[`tm_is_valid_time`](#group__sys__timex_1ga5fd475f827e215d3225880332ad9687e)`(int hour,int min,int sec)`            | Shallow test if a time is valid.
`struct `[`timex_t`](#structtimex__t) | A timex timestamp.

## Members

#### `define `[`TIMEX_MAX_STR_LEN`](#group__sys__timex_1ga4ac3f83d591b7b6dddb1dd7eec97b3c2) 

The maximum length of the string representation of a timex timestamp.

#### `define `[`TM_WDAY_SUN`](#group__sys__timex_1gab43ac71e2f683190989db33392d71ce0) 

Sunday in `struct tm::tm_wday`.

#### `define `[`TM_WDAY_MON`](#group__sys__timex_1gaa95a250c9eb5dc794c10ef96b11f259e) 

Monday in `struct tm::tm_wday`.

#### `define `[`TM_WDAY_TUE`](#group__sys__timex_1gade72b7bebf47c3828eae223f0d2b6d0f) 

Tuesday in `struct tm::tm_wday`.

#### `define `[`TM_WDAY_WED`](#group__sys__timex_1ga43cff08f933e486cffcf179400f2110c) 

Wednesday in `struct tm::tm_wday`.

#### `define `[`TM_WDAY_THU`](#group__sys__timex_1ga7a792d445ffb21a7ad11980215f632e7) 

Thursday in `struct tm::tm_wday`.

#### `define `[`TM_WDAY_FRI`](#group__sys__timex_1ga73847a5adac553a7f3851361a1698cbe) 

Friday in `struct tm::tm_wday`.

#### `define `[`TM_WDAY_SAT`](#group__sys__timex_1ga1d94b7b645549625974e972bdb758a7a) 

Saturday in `struct tm::tm_wday`.

#### `define `[`TM_MON_JAN`](#group__sys__timex_1gac28781b452a21681e292e5ee4e2e3847) 

January in `struct tm::tm_mon`

#### `define `[`TM_MON_FEB`](#group__sys__timex_1ga24d010baaa86c03fbe4a239dc8de5b46) 

February in `struct tm::tm_mon`

#### `define `[`TM_MON_MAR`](#group__sys__timex_1ga0b297cfd8f53892bb9f551eae77966d5) 

March in `struct tm::tm_mon`

#### `define `[`TM_MON_APR`](#group__sys__timex_1gace4e8aff5bc72256afc028df0288691b) 

April in `struct tm::tm_mon`

#### `define `[`TM_MON_MAY`](#group__sys__timex_1ga4e678e8763c818624bb9cc028712c9b9) 

May in `struct tm::tm_mon`

#### `define `[`TM_MON_JUN`](#group__sys__timex_1ga0c51bfaff57d143c184c3f8486de20ce) 

June in `struct tm::tm_mon`

#### `define `[`TM_MON_JUL`](#group__sys__timex_1ga3aee0733eed54e2f1febd0b73c74e85d) 

July in `struct tm::tm_mon`

#### `define `[`TM_MON_AUG`](#group__sys__timex_1ga305d50e3e0170023b03598066e631145) 

August in `struct tm::tm_mon`

#### `define `[`TM_MON_SEP`](#group__sys__timex_1gaf070854605f31d80b030b18bf769a1ef) 

September in `struct tm::tm_mon`

#### `define `[`TM_MON_OCT`](#group__sys__timex_1gafa6992dcb1b2f108e79c35d1da2cd45b) 

October in `struct tm::tm_mon`

#### `define `[`TM_MON_NOV`](#group__sys__timex_1gaa1d423ec1dbf8c6575e0982f4c4648c1) 

November in `struct tm::tm_mon`

#### `define `[`TM_MON_DEC`](#group__sys__timex_1gadd16c4a6ba4df3fb953857755f856bb4) 

December in `struct tm::tm_mon`

#### `public `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_add`](#group__sys__timex_1ga1e9d5cbb82fbe42e8c0f8b1c450ddd5e)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a,const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` b)` 

Adds two timestamps.

#### Parameters
* `a` First summand 

* `b` Second summand

#### Returns
The sum of the two timestamps

#### `public `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_sub`](#group__sys__timex_1gaa86a4ecaf454d7369647327c9e3910cf)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a,const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` b)` 

Subtracts two timestamps.

#### Parameters
* `a` The minuend 

* `b` The subtrahend

#### Returns
The difference a - b

#### `public `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_set`](#group__sys__timex_1gafef6baf60e2b381b6c17b2350276dbd2)`(uint32_t seconds,uint32_t microseconds)` 

Initializes a timex timestamp.

#### Parameters
* `seconds` Number of seconds to set 

* `microseconds` Number of microseconds to set

#### Returns
The initialized timex timestamp

#### `public int `[`timex_cmp`](#group__sys__timex_1ga4f39d89e25bb9ad8dc732d280cdcf34a)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a,const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` b)` 

Compares two timex timestamps.

#### Parameters
* `a` The first timestamp to compare to 

* `b` The second timestamp to compare with

#### Returns
-1 when a is smaller 

#### Returns
0 if equal 

#### Returns
1 if a is bigger

#### `public inline static void `[`timex_normalize`](#group__sys__timex_1ga6ba2c35a0ce3eb5c834c99a927e68e84)`(`[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` * time)` 

Corrects timex structure so that microseconds < 1000000.

#### Parameters
* `time` Pointer to the timestamp to normalize

#### `public inline static int `[`timex_isnormalized`](#group__sys__timex_1ga7728e254a400bc3b68c7550480f1f8c4)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` * time)` 

Tests a timex timestamp for normalization.

#### Parameters
* `time` Pointer to the timestamp to check

#### Returns
true for a normalized [timex_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)

#### Returns
false otherwise

#### `public inline static uint64_t `[`timex_uint64`](#group__sys__timex_1gaba7ae3494893a929a99b6f59cc0f5d2b)`(const `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` a)` 

Converts a timex timestamp to a 64 bit value.

#### Parameters
* `a` The timestamp to convert

#### Returns
timex representation as uint64_t

#### `public inline static `[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` `[`timex_from_uint64`](#group__sys__timex_1gaf4d7c63297ac6720ab3ca4490d9e5c8c)`(const uint64_t timestamp)` 

Converts a 64 bit value of microseconds to a timex timestamp.

#### Parameters
* `timestamp` The timestamp to convert.

#### Returns
a timex representation of an uint64 timestamp.

#### `public const char * `[`timex_to_str`](#group__sys__timex_1ga7597b2c5c463a64ab80e1a07d43a454f)`(`[`timex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_timex.md#structtimex__t)` t,char * timestamp)` 

Converts a timex timestamp to a string.

memory at timestamp >= TIMEX_MAX_STR_LEN

#### Parameters
* `t` The timestamp to convert 

* `timestamp` The output char buffer for the converted timestamp

The timestamp will be normalized

#### Returns
A pointer to the string representation of the timestamp

#### `public int `[`tm_is_leap_year`](#group__sys__timex_1gafc13655b2035211992d436882e242c18)`(unsigned year)` 

Tells if a given year is a leap year in the Gregorian calendar.

#### Parameters
* `year` The year. Probably should be ≥ 1582, but needs to be ≥ 1. 

#### Returns
`1` if it is a leap year, `0` if it is a common year.

#### `public int `[`tm_doomsday`](#group__sys__timex_1gae579f901703dd350268b1dd63b545bab)`(int year)` 

Returns the congruent weekday of the Doomsday (March 0).

Only applies for years in the Gregorian calendar. 
#### Parameters
* `year` The year. Probably should be ≥ 1582, but needs to be ≥ 1. 

#### Returns
The result `% 7` is the weekday of the Doomsday of the given year.

#### `public void `[`tm_get_wyday`](#group__sys__timex_1gac67a0472f7a208f49923efe1723496a6)`(int year,int mon,int mday,int * wday,int * yday)` 

Calculates the day of the year and the weekday of a given date.

Illegal dates are not caught. 
#### Parameters
* `year` The year. Probably should be ≥ 1582, but needs to be ≥ 1. 

* `mon` The month, TM_MON_JAN to TM_MON_DEC. 

* `mday` The day in the month, 1 to 31. 

* `wday` Returns the day of the week. 

* `yday` Returns the day of the year (Jan 1st is 0).

#### `public void `[`tm_fill_derived_values`](#group__sys__timex_1gaa8f53853997c4fb5760ae53a7c5cb51b)`(struct tm * tm)` 

Fills in `struct tm::tm_wday` and `struct tm::tm_yday` given a date.

`struct tm::tm_year`, `struct tm::tm_mon`, and `struct tm::tm_mday` need to be set before you call this function. 
#### Parameters
* `tm` The datum to operate on.

#### `public int `[`tm_is_valid_date`](#group__sys__timex_1ga73ecae46e79daff7c461f02fbbca6ca1)`(int year,int mon,int mday)` 

Tests if a date is valid.

Dates before 1582-10-15 are invalid. 
#### Parameters
* `year` The year. 

* `mon` The month. 

* `mday` The day in the month. 

#### Returns
0 if the date is invalid.

#### `public int `[`tm_is_valid_time`](#group__sys__timex_1ga5fd475f827e215d3225880332ad9687e)`(int hour,int min,int sec)` 

Shallow test if a time is valid.

This function accepts leap seconds at any given time, because the timezone is unknown. 
#### Parameters
* `hour` The hour. 

* `min` The minutes. 

* `sec` The seconds. 

#### Returns
0 if the time is invalid.

# struct `timex_t` 

A timex timestamp.

If a timestamp is not normalized, the number of microseconds might be > 1000000

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`seconds`](#structtimex__t_1a7e4ce1d7a7c38b1954dbd15f1563bbdd) | number of seconds
`public uint32_t `[`microseconds`](#structtimex__t_1abd80f678fe25d46ac59c79d8694ef0f2) | number of microseconds

## Members

#### `public uint32_t `[`seconds`](#structtimex__t_1a7e4ce1d7a7c38b1954dbd15f1563bbdd) 

number of seconds

#### `public uint32_t `[`microseconds`](#structtimex__t_1abd80f678fe25d46ac59c79d8694ef0f2) 

number of microseconds

