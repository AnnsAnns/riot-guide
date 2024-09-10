---
title: api-sys_senml.md
description: api-sys_senml.md
---
# group `sys_senml` 

Basic SenML types.

The `senml` module contains the building blocks for using [SenML](https://www.rfc-editor.org/rfc/rfc8428). This module provides the basic types that can be used with (for example) [SenML CBOR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml__cbor) for encoding measurement data.

Some attributes defined in SenML need to be enabled explicitly, see [senml_attr_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t) for details. To enable all attributes, set:

```cpp
CFLAGS += -DCONFIG_SENML_ATTR_SUM=1
CFLAGS += -DCONFIG_SENML_ATTR_VERSION=1
CFLAGS += -DCONFIG_SENML_ATTR_UPDATE_TIME=1
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SENML_ATTR_SUM`](#group__sys__senml_1ga70398cc11948c00c2de073e3fb56038a)            | Enable the SenML 'sum' and 'base sum' attributes.
`define `[`CONFIG_SENML_ATTR_VERSION`](#group__sys__senml_1ga3b010273546b976bf1df966a72b85fe0)            | Enable the SenML 'version' and 'base version' attributes.
`define `[`CONFIG_SENML_ATTR_UPDATE_TIME`](#group__sys__senml_1gaa7036fe749aee2cee3e644b0e77aaf30)            | Enable the SenML 'update time' attribute.
`enum `[`senml_unit_t`](#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b)            | SenML units and secondary units.
`enum `[`senml_value_type_t`](#group__sys__senml_1gad33aca9fe15ad4479f4a77f2a1c111f7)            | SenML numeric value types.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_float`](#group__sys__senml_1ga6ba9001e3ae12bdd340034a2bd7b3ad3)`(float v)`            | Create a floating point numeric value.
`public inline static void `[`senml_set_float`](#group__sys__senml_1ga72d000b82896d1b3654d19ff5d5226a8)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,float v)`            | Set a floating point numeric value.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_double`](#group__sys__senml_1gac31f62a1429ec83dbe1650e2f9cccafe)`(double v)`            | Create a double precision floating point numeric value.
`public inline static void `[`senml_set_double`](#group__sys__senml_1gaef33b28e0ad90012348cc04e1bebb6f3)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,double v)`            | Set a double precision floating point numeric value.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_int`](#group__sys__senml_1gad0352f0113a41aa49edf1dd3e97ca728)`(int64_t v)`            | Create an integer numeric value.
`public inline static void `[`senml_set_int`](#group__sys__senml_1ga9adcd679e184c1cff61a21d4f04af261)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int64_t v)`            | Set an integer numeric value.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_uint`](#group__sys__senml_1ga6289ac1f6971b80105b857e268ffe878)`(uint64_t v)`            | Create an unsigned integer numeric value.
`public inline static void `[`set_senml_uint`](#group__sys__senml_1gaaa6dcbea063d855f02e92d7bbf247758)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,uint64_t v)`            | Set an unsigned integer numeric value.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_decfrac`](#group__sys__senml_1ga8ae7f1f413d77fc8a2ec4deca9d3a755)`(int32_t m,int32_t e)`            | Create a decimal fraction numeric value in the form `m*10^e`.
`public inline static void `[`senml_set_decfrac`](#group__sys__senml_1ga7dd8301786fb36fabe4165d482aa564c)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t m,int32_t e)`            | Set a decimal fraction numeric value in the form `m*10^e`.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_s`](#group__sys__senml_1ga422e5f0a997a8d2a09480fd1984863de)`(int64_t s)`            | Get an integer representation of a duration in seconds.
`public inline static void `[`senml_set_duration_s`](#group__sys__senml_1gaffd7d142d31874145e9cb0a403e6b356)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int64_t s)`            | Set an integer representation of a duration in seconds.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_ms`](#group__sys__senml_1ga8ca2e6ddeda325274d18563f1a5a321c)`(int32_t ms)`            | Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in milliseconds.
`public inline static void `[`senml_set_duration_ms`](#group__sys__senml_1ga4d613475041faef60f9a02713cb5e84a)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t ms)`            | Set a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in milliseconds.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_us`](#group__sys__senml_1ga8b4cf42eaf49fb16fc55abac716424d1)`(int32_t us)`            | Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in microseconds.
`public inline static void `[`senml_set_duration_us`](#group__sys__senml_1gabe14135a1291068e5d7c1da18e33c5fb)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t us)`            | Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in microseconds.
`public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_ns`](#group__sys__senml_1ga4a6170b0be3d3e0741556feec88a3d16)`(int32_t ns)`            | Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in nanoseconds.
`public inline static void `[`senml_set_duration_ns`](#group__sys__senml_1ga4bbf73ac9ead8eac4fd7d614bff48105)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t ns)`            | Set a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in nanoseconds.
`public const char * `[`senml_unit_to_str`](#group__sys__senml_1ga425636bb258d5b0f094e97f96c34f776)`(`[`senml_unit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b)` unit)`            | Convert a SenML unit to a string.
`struct `[`senml_decfrac_t`](#structsenml__decfrac__t) | Decimal fraction containing a value in the form of m * 10^e.
`struct `[`senml_numeric_t`](#structsenml__numeric__t) | SenML numeric value.
`struct `[`senml_attr_t`](#structsenml__attr__t) | SenML common record attributes.
`struct `[`senml_value_t`](#structsenml__value__t) | SenML string value.
`struct `[`senml_string_value_t`](#structsenml__string__value__t) | SenML string value.
`struct `[`senml_bool_value_t`](#structsenml__bool__value__t) | SenML boolean value.
`struct `[`senml_data_value_t`](#structsenml__data__value__t) | SenML data value.

## Members

#### `define `[`CONFIG_SENML_ATTR_SUM`](#group__sys__senml_1ga70398cc11948c00c2de073e3fb56038a) 

Enable the SenML 'sum' and 'base sum' attributes.

#### `define `[`CONFIG_SENML_ATTR_VERSION`](#group__sys__senml_1ga3b010273546b976bf1df966a72b85fe0) 

Enable the SenML 'version' and 'base version' attributes.

#### `define `[`CONFIG_SENML_ATTR_UPDATE_TIME`](#group__sys__senml_1gaa7036fe749aee2cee3e644b0e77aaf30) 

Enable the SenML 'update time' attribute.

#### `enum `[`senml_unit_t`](#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SENML_UNIT_NONE            | No unit specified.
SENML_UNIT_METER            | meter (m)
SENML_UNIT_KILOGRAM            | kilogram (kg)
SENML_UNIT_GRAM            | *gram* (g)
SENML_UNIT_SECOND            | second (s)
SENML_UNIT_AMPERE            | ampere (A)
SENML_UNIT_KELVIN            | kelvin (K)
SENML_UNIT_CANDELA            | candela (cd)
SENML_UNIT_MOLE            | mole (mol)
SENML_UNIT_HERTZ            | hertz (Hz)
SENML_UNIT_RADIAN            | radian (rad)
SENML_UNIT_STERADIAN            | steradian (sr)
SENML_UNIT_NEWTON            | newton (N)
SENML_UNIT_PASCAL            | pascal (Pa)
SENML_UNIT_JOULE            | joule (J)
SENML_UNIT_WATT            | watt (W)
SENML_UNIT_COULOMB            | coulomb (C)
SENML_UNIT_VOLT            | volt (V)
SENML_UNIT_FARAD            | farad (F)
SENML_UNIT_OHM            | ohm (Ohm)
SENML_UNIT_SIEMENS            | siemens (S)
SENML_UNIT_WEBER            | weber (Wb)
SENML_UNIT_TESLA            | tesla (T)
SENML_UNIT_HENRY            | henry (H)
SENML_UNIT_CELSIUS            | degrees Celsius (Cel)
SENML_UNIT_LUMEN            | lumen (lm)
SENML_UNIT_LUX            | lux (lx)
SENML_UNIT_BECQUEREL            | becquerel (Bq)
SENML_UNIT_GRAY            | gray (Gy)
SENML_UNIT_SIEVERT            | sievert (Sv)
SENML_UNIT_KATAL            | katal (kat)
SENML_UNIT_SQUARE_METER            | square meter (area) (m2)
SENML_UNIT_CUBIC_METER            | cubic meter (volume) (m3)
SENML_UNIT_LITER            | *liter (volume)* (l)
SENML_UNIT_METER_PER_SECOND            | meter per second (velocity) (m/s)
SENML_UNIT_METER_PER_SQUARE_SECOND            | meter per square second (acceleration) (m/s2)
SENML_UNIT_CUBIC_METER_PER_SECOND            | cubic meter per second (flow rate) (m3/s)
SENML_UNIT_LITER_PER_SECOND            | *liter per second (flow rate)* (l/s)
SENML_UNIT_WATT_PER_SQUARE_METER            | watt per square meter (irradiance) (W/m2)
SENML_UNIT_CANDELA_PER_SQUARE_METER            | candela per square meter (luminance) (cd/m2)
SENML_UNIT_BIT            | bit (information content) (bit)
SENML_UNIT_BIT_PER_SECOND            | bit per second (data rate) (bit/s)
SENML_UNIT_LATITUDE            | degrees latitude (lat)
SENML_UNIT_LONGITUDE            | degrees longitude (lon)
SENML_UNIT_PH            | pH value (acidity; logarithmic quantity) (pH)
SENML_UNIT_DECIBEL            | decibel (logarithmic quantity) (dB)
SENML_UNIT_DBW            | decibel relative to 1 W (power level) (dBW)
SENML_UNIT_BEL            | *bel (sound pressure level; logarithmic quantity)* (Bspl)
SENML_UNIT_COUNT            | 1 (counter value) (count)
SENML_UNIT_RATIO            | 1 (ratio e.g., value of a switch) (/)
SENML_UNIT_RATIO_2            | *1 (ratio e.g., value of a switch)* (%)
SENML_UNIT_RELATIVE_HUMIDITY_PERCENT            | Percentage (Relative Humidity) (RH)
SENML_UNIT_REMAINING_BATTERY_PERCENT            | Percentage (remaining battery energy level) (EL)
SENML_UNIT_REMAINING_BATTERY_SECONDS            | seconds (remaining battery energy level) (EL)
SENML_UNIT_RATE            | 1 per second (event rate) (1/s)
SENML_UNIT_RPM            | *1 per minute (event rate, "rpm")* (1/min)
SENML_UNIT_BEAT_PER_MINUTE            | *1 per minute (heart rate in beats per minute)* (beat/min))
SENML_UNIT_BEATS            | *1 (Cumulative number of heart beats)* (beats)
SENML_UNIT_SIEMENS_PER_METER            | Siemens per meter (conductivity) (S/m)
SENML_UNIT_BYTE            | Byte (information content) (B)
SENML_UNIT_VOLT_AMPERE            | volt-ampere (Apparent Power) (VA)
SENML_UNIT_VOLT_AMPERE_SECOND            | volt-ampere second (Apparent Energy) (VAs)
SENML_UNIT_VOLT_AMPERE_REACTIVE            | volt-ampere reactive (Reactive Power) (var)
SENML_UNIT_VOLT_AMPERE_REACTIVE_SECOND            | volt-ampere-reactive second (Reactive Energy) (vars)
SENML_UNIT_JOULE_PER_METER            | joule per meter (Energy per distance) (J/m)
SENML_UNIT_KILOGRAM_PER_CUBIC_METER            | kilogram per cubic meter (mass density, mass concentration) (kg/m3)
SENML_UNIT_DEGREE            | *degree (angle)* (deg)
SENML_UNIT_NEPHELOMETRIC_TURBIDITY_UNIT            | Nephelometric Turbidity Unit (NTU)
SENML_UNIT_MILLISECOND            | millisecond (ms, equivalent to 1/1000 s)
SENML_UNIT_MINUTE            | minute (min, equivalent to 60 s)
SENML_UNIT_HOUR            | hour (h, equivalent to 3600 s)
SENML_UNIT_MEGAHERTZ            | megahertz (MHz, equivalent to 1000000 Hz)
SENML_UNIT_KILOWATT            | kilowatt (kW, equivalent to 1000 W)
SENML_UNIT_KILOVOLT_AMPERE            | kilovolt-ampere (kVA, equivalent to 1000 VA)
SENML_UNIT_KILOVAR            | kilovar (kvar, equivalent to 1000 var)
SENML_UNIT_AMPERE_HOUR            | ampere-hour (Ah, equivalent to 3600 C)
SENML_UNIT_WATT_HOUR            | watt-hour (Wh, equivalent to 3600 J)
SENML_UNIT_KILOWATT_HOUR            | kilowatt-hour (kWh, equivalent to 3600000 J)
SENML_UNIT_VAR_HOUR            | var-hour (varh, equivalent to 3600 vars)
SENML_UNIT_KILOVAR_HOUR            | kilovar-hour (kvarh, equivalent to 3600000 vars)
SENML_UNIT_KILOVOLT_AMPERE_HOUR            | kilovolt-ampere-hour (kVAh, equivalent to 3600000 VAs)
SENML_UNIT_WATT_HOUR_PER_KILOMETER            | watt-hour per kilometer (Wh/km, equivalent to 3.6 J/m)
SENML_UNIT_KIBIBYTE            | kibibyte (KiB, equivalent to 1024 B)
SENML_UNIT_GIGABYTE            | gigabyte (GB, equivalent to 1e9 B)
SENML_UNIT_MEGABIT_PER_SECOND            | megabit per second (Mbit/s, equivalent to 1000000 bit/s)
SENML_UNIT_BYTE_PER_SECOND            | byte per second (B/s, equivalent to 8 bit/s)
SENML_UNIT_MEGABYTE_PER_SECOND            | megabyte per second (MB/s, equivalent to 8000000 bit/s)
SENML_UNIT_MILLIVOLT            | millivolt (mV, equivalent to 1/1000 V)
SENML_UNIT_MILLIAMPERE            | milliampere (mA, equivalent to 1/1000 A)
SENML_UNIT_DECIBEL_MILLIWATT            | decibel (milliwatt) (dBm, equivalent to -29 dBW)
SENML_UNIT_MICROGRAM_PER_CUBIC_METER            | microgram per cubic meter (ug/m3, equivalent to 1e-9 kg/m3)
SENML_UNIT_MILLIMETER_PER_HOUR            | millimeter per hour (mm/h, equivalent to 1/3600000 m/s)
SENML_UNIT_METER_PER_HOUR            | meter per hour (m/h, equivalent to 1/3600 m/s)
SENML_UNIT_PARTS_PER_MILLION            | parts per million (ppm, equivalent to 1e-6 '/')
SENML_UNIT_PERCENT            | percent (/100, equivalent to 1/100 '/')
SENML_UNIT_PERMILLE            | permille (/1000, equivalent to 1/1000 '/')
SENML_UNIT_HECTOPASCAL            | hectopascal (hPa, equivalent to 100 Pa)
SENML_UNIT_MILLIMETER            | millimeter (mm, equivalent to 1/1000 m)
SENML_UNIT_CENTIMETER            | centimeter (cm, equivalent to 1/100 m)
SENML_UNIT_KILOMETER            | kilometer (km, equivalent to 1000 m)
SENML_UNIT_KILOMETER_PER_HOUR            | kilometer per hour (km/h, equivalent to 1/3.6 m/s)
SENML_UNIT_PARTS_PER_BILLION            | parts per billion (ppb, equivalent to 1e-9 '/')
SENML_UNIT_PARTS_PER_TRILLION            | parts per trillion (ppt, equivalent to 1e-12 '/')
SENML_UNIT_VOLT_AMPERE_HOUR            | volt-ampere-hour (VAh, equivalent to 3600 VAs)
SENML_UNIT_MILLIGRAM_PER_LITER            | milligram per liter (mg/l, equivalent to 1/1000 kg/m3)
SENML_UNIT_MICROGRAM_PER_LITER            | microgram per liter (ug/l, equivalent to 1e-6 kg/m3)
SENML_UNIT_GRAM_PER_LITER            | gram per liter (g/l, equivalent to 1 kg/m3)

SenML units and secondary units.

This list contains the SenML units and secondary units as assigned by [IANA](https://www.iana.org/assignments/senml/senml.xhtml). Units in italic are not recommended to be produced by new implementations. Secondary units include the equivalent primary unit.

#### `enum `[`senml_value_type_t`](#group__sys__senml_1gad33aca9fe15ad4479f4a77f2a1c111f7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SENML_TYPE_NUMERIC_UINT            | Unsigned integer.
SENML_TYPE_NUMERIC_INT            | Integer.
SENML_TYPE_NUMERIC_FLOAT            | Floating point number.
SENML_TYPE_NUMERIC_DOUBLE            | Double-precision floating point number.
SENML_TYPE_NUMERIC_DECFRAC            | Decimal fraction.

SenML numeric value types.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_float`](#group__sys__senml_1ga6ba9001e3ae12bdd340034a2bd7b3ad3)`(float v)` 

Create a floating point numeric value.

#### Parameters
* `v` Value to encode. 

#### Returns
Numeric value containing the given value.

#### `public inline static void `[`senml_set_float`](#group__sys__senml_1ga72d000b82896d1b3654d19ff5d5226a8)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,float v)` 

Set a floating point numeric value.

#### Parameters
* `n` Numeric value to set. 

* `v` Value to encode.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_double`](#group__sys__senml_1gac31f62a1429ec83dbe1650e2f9cccafe)`(double v)` 

Create a double precision floating point numeric value.

#### Parameters
* `v` Value to encode. 

#### Returns
Numeric value containing the given value.

#### `public inline static void `[`senml_set_double`](#group__sys__senml_1gaef33b28e0ad90012348cc04e1bebb6f3)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,double v)` 

Set a double precision floating point numeric value.

#### Parameters
* `n` Numeric value to set. 

* `v` Value to encode.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_int`](#group__sys__senml_1gad0352f0113a41aa49edf1dd3e97ca728)`(int64_t v)` 

Create an integer numeric value.

#### Parameters
* `v` Value to encode. 

#### Returns
Numeric value containing the given value.

#### `public inline static void `[`senml_set_int`](#group__sys__senml_1ga9adcd679e184c1cff61a21d4f04af261)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int64_t v)` 

Set an integer numeric value.

#### Parameters
* `n` Numeric value to set. 

* `v` Value to encode.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_uint`](#group__sys__senml_1ga6289ac1f6971b80105b857e268ffe878)`(uint64_t v)` 

Create an unsigned integer numeric value.

#### Parameters
* `v` Value to encode. 

#### Returns
Numeric value containing the given value.

#### `public inline static void `[`set_senml_uint`](#group__sys__senml_1gaaa6dcbea063d855f02e92d7bbf247758)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,uint64_t v)` 

Set an unsigned integer numeric value.

#### Parameters
* `n` Numeric value to set. 

* `v` Value to encode.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_decfrac`](#group__sys__senml_1ga8ae7f1f413d77fc8a2ec4deca9d3a755)`(int32_t m,int32_t e)` 

Create a decimal fraction numeric value in the form `m*10^e`.

#### Parameters
* `m` Mantissa (value) to encode. 

* `e` Exponent (scale) to encode. 

#### Returns
Numeric value containing the given value.

#### `public inline static void `[`senml_set_decfrac`](#group__sys__senml_1ga7dd8301786fb36fabe4165d482aa564c)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t m,int32_t e)` 

Set a decimal fraction numeric value in the form `m*10^e`.

#### Parameters
* `n` Numeric value to set. 

* `m` Mantissa (value) to encode. 

* `e` Exponent (scale) to encode.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_s`](#group__sys__senml_1ga422e5f0a997a8d2a09480fd1984863de)`(int64_t s)` 

Get an integer representation of a duration in seconds.

#### Parameters
* `s` Duration in seconds. 

#### Returns
Numeric representation of the duration in seconds.

#### `public inline static void `[`senml_set_duration_s`](#group__sys__senml_1gaffd7d142d31874145e9cb0a403e6b356)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int64_t s)` 

Set an integer representation of a duration in seconds.

#### Parameters
* `n` Numeric value to set. 

* `s` Duration in seconds.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_ms`](#group__sys__senml_1ga8ca2e6ddeda325274d18563f1a5a321c)`(int32_t ms)` 

Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in milliseconds.

#### Parameters
* `ms` Duration in milliseconds. 

#### Returns
Numeric representation of the duration.

#### `public inline static void `[`senml_set_duration_ms`](#group__sys__senml_1ga4d613475041faef60f9a02713cb5e84a)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t ms)` 

Set a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in milliseconds.

#### Parameters
* `n` Numeric value to set. 

* `ms` Duration in milliseconds. 

#### Returns
Numeric representation of the duration.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_us`](#group__sys__senml_1ga8b4cf42eaf49fb16fc55abac716424d1)`(int32_t us)` 

Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in microseconds.

#### Parameters
* `us` Duration in microseconds. 

#### Returns
Numeric representation of the duration.

#### `public inline static void `[`senml_set_duration_us`](#group__sys__senml_1gabe14135a1291068e5d7c1da18e33c5fb)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t us)` 

Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in microseconds.

#### Parameters
* `n` Numeric value to set. 

* `us` Duration in microseconds. 

#### Returns
Numeric representation of the duration.

#### `public inline static `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`senml_duration_ns`](#group__sys__senml_1ga4a6170b0be3d3e0741556feec88a3d16)`(int32_t ns)` 

Get a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in nanoseconds.

#### Parameters
* `ns` Duration in nanoseconds. 

#### Returns
Numeric representation of the duration.

#### `public inline static void `[`senml_set_duration_ns`](#group__sys__senml_1ga4bbf73ac9ead8eac4fd7d614bff48105)`(`[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` * n,int32_t ns)` 

Set a [senml_decfrac_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__decfrac__t) representation of a duration in nanoseconds.

#### Parameters
* `n` Numeric value to set. 

* `ns` Duration in nanoseconds.

#### `public const char * `[`senml_unit_to_str`](#group__sys__senml_1ga425636bb258d5b0f094e97f96c34f776)`(`[`senml_unit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b)` unit)` 

Convert a SenML unit to a string.

See the [SenML units](https://www.iana.org/assignments/senml/senml.xhtml#senml-units) and [Secondary units](https://www.iana.org/assignments/senml/senml.xhtml#secondary-units) from IANA. Values not defined in [senml_unit_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b) will result in an empty string.

#### Parameters
* `unit` Unit to convert to string.

#### Returns
String representation of the unit.

# struct `senml_decfrac_t` 

Decimal fraction containing a value in the form of m * 10^e.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int32_t `[`e`](#structsenml__decfrac__t_1acae3ff1b2a96edd74cc929d75dc4bd8c) | Exponent.
`public int32_t `[`m`](#structsenml__decfrac__t_1ac76ec144c4f4f040934b518e7a6b0a44) | Mantissa.

## Members

#### `public int32_t `[`e`](#structsenml__decfrac__t_1acae3ff1b2a96edd74cc929d75dc4bd8c) 

Exponent.

#### `public int32_t `[`m`](#structsenml__decfrac__t_1ac76ec144c4f4f040934b518e7a6b0a44) 

Mantissa.

# struct `senml_numeric_t` 

SenML numeric value.

Various SenML attributes (see [senml_attr_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)) may contain any 'numeric' types. This struct is used to contain these.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`senml_value_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gad33aca9fe15ad4479f4a77f2a1c111f7)` `[`type`](#structsenml__numeric__t_1a687388ab9ef5ae7ed7cf3556196f6362) | Type of the value.
`public uint64_t `[`u`](#structsenml__numeric__t_1a92ff2a091f59ea5c01c13c307da6526c) | 
`public int64_t `[`i`](#structsenml__numeric__t_1a61f51681394f1c065845d634cccc598e) | 
`public float `[`f`](#structsenml__numeric__t_1a2e5bfbb3da546c27a775684888f373fc) | 
`public double `[`d`](#structsenml__numeric__t_1af542d0181208665f6101876613927ed8) | 
`public int32_t `[`e`](#structsenml__numeric__t_1ab777464eb4da43cd158ac9367bfc92d7) | 
`public int32_t `[`m`](#structsenml__numeric__t_1a72f2dcab0a734fb4063da46f232527b2) | 
`public struct senml_numeric_t::@388::@389 `[`df`](#structsenml__numeric__t_1a06ed3ef2ac56f7df182942355703db88) | Decimal fraction.
`public union senml_numeric_t::@388 `[`value`](#structsenml__numeric__t_1a1d4754b85ec744161be6aa54d2fb84d9) | Value data.

## Members

#### `public `[`senml_value_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gad33aca9fe15ad4479f4a77f2a1c111f7)` `[`type`](#structsenml__numeric__t_1a687388ab9ef5ae7ed7cf3556196f6362) 

Type of the value.

#### `public uint64_t `[`u`](#structsenml__numeric__t_1a92ff2a091f59ea5c01c13c307da6526c) 

#### `public int64_t `[`i`](#structsenml__numeric__t_1a61f51681394f1c065845d634cccc598e) 

#### `public float `[`f`](#structsenml__numeric__t_1a2e5bfbb3da546c27a775684888f373fc) 

#### `public double `[`d`](#structsenml__numeric__t_1af542d0181208665f6101876613927ed8) 

#### `public int32_t `[`e`](#structsenml__numeric__t_1ab777464eb4da43cd158ac9367bfc92d7) 

#### `public int32_t `[`m`](#structsenml__numeric__t_1a72f2dcab0a734fb4063da46f232527b2) 

#### `public struct senml_numeric_t::@388::@389 `[`df`](#structsenml__numeric__t_1a06ed3ef2ac56f7df182942355703db88) 

Decimal fraction.

#### `public union senml_numeric_t::@388 `[`value`](#structsenml__numeric__t_1a1d4754b85ec744161be6aa54d2fb84d9) 

Value data.

# struct `senml_attr_t` 

SenML common record attributes.

All of these values are optional: empty or 0 values will not be encoded. Note that some attributes need to be enabled explicitly.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`base_name`](#structsenml__attr__t_1abfffc56eec4e21c172b834dd4ae8acbd) | Base Name.
`public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`base_time`](#structsenml__attr__t_1a53e27678b61d9cc96959e5ea22d5cb86) | Base Time.
`public `[`senml_unit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b)` `[`base_unit`](#structsenml__attr__t_1aa57a8e9ebcf485583dfda748f0fd7220) | Base Unit.
`public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`base_value`](#structsenml__attr__t_1a5b79df952ed5e2755e2dd7ba232eedab) | Base Value.
`public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`base_sum`](#structsenml__attr__t_1ad0495ec86ed98a6fa84c9470d7b24454) | Base Sum, set `CONFIG_SENML_ATTR_SUM` to 1 to enable.
`public uint64_t `[`base_version`](#structsenml__attr__t_1acaa11ef94e436052bcb5d4084e2ca5ec) | Base Version, set `CONFIG_SENML_ATTR_VERSION` to 1 to enable.
`public const char * `[`name`](#structsenml__attr__t_1a7284c9cb0738c117976a0924727805de) | Name of the measurement.
`public `[`senml_unit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b)` `[`unit`](#structsenml__attr__t_1a94f5b2a628c6926f6bcdca25673e52d9) | Unit.
`public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`sum`](#structsenml__attr__t_1a5e8fdbb02f06f61430eeacceea2f8555) | Sum, set `CONFIG_SENML_ATTR_SUM` to 1 to enable.
`public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`time`](#structsenml__attr__t_1a30eb960e55cb3b3135b3657a544667ce) | Time of the measurement (relative or Unix) in seconds.
`public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`update_time`](#structsenml__attr__t_1a2f1a344e3b5a169ee3038983617a37a2) | Maximum time before the next sensor value, set `CONFIG_SENML_ATTR_UPDATE_TIME` to 1 to enable.

## Members

#### `public const char * `[`base_name`](#structsenml__attr__t_1abfffc56eec4e21c172b834dd4ae8acbd) 

Base Name.

#### `public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`base_time`](#structsenml__attr__t_1a53e27678b61d9cc96959e5ea22d5cb86) 

Base Time.

#### `public `[`senml_unit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b)` `[`base_unit`](#structsenml__attr__t_1aa57a8e9ebcf485583dfda748f0fd7220) 

Base Unit.

#### `public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`base_value`](#structsenml__attr__t_1a5b79df952ed5e2755e2dd7ba232eedab) 

Base Value.

#### `public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`base_sum`](#structsenml__attr__t_1ad0495ec86ed98a6fa84c9470d7b24454) 

Base Sum, set `CONFIG_SENML_ATTR_SUM` to 1 to enable.

#### `public uint64_t `[`base_version`](#structsenml__attr__t_1acaa11ef94e436052bcb5d4084e2ca5ec) 

Base Version, set `CONFIG_SENML_ATTR_VERSION` to 1 to enable.

#### `public const char * `[`name`](#structsenml__attr__t_1a7284c9cb0738c117976a0924727805de) 

Name of the measurement.

#### `public `[`senml_unit_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1gac5597b7bfe72dfb7ea3d1d26f9290c5b)` `[`unit`](#structsenml__attr__t_1a94f5b2a628c6926f6bcdca25673e52d9) 

Unit.

#### `public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`sum`](#structsenml__attr__t_1a5e8fdbb02f06f61430eeacceea2f8555) 

Sum, set `CONFIG_SENML_ATTR_SUM` to 1 to enable.

#### `public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`time`](#structsenml__attr__t_1a30eb960e55cb3b3135b3657a544667ce) 

Time of the measurement (relative or Unix) in seconds.

#### `public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`update_time`](#structsenml__attr__t_1a2f1a344e3b5a169ee3038983617a37a2) 

Maximum time before the next sensor value, set `CONFIG_SENML_ATTR_UPDATE_TIME` to 1 to enable.

# struct `senml_value_t` 

SenML string value.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__value__t_1ae504bb58f0f75418f6f36c157e7d39e0) | SenML attributes.
`public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`value`](#structsenml__value__t_1afc00e523d34b75ea3d74b50aa3fafc02) | Value.

## Members

#### `public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__value__t_1ae504bb58f0f75418f6f36c157e7d39e0) 

SenML attributes.

#### `public `[`senml_numeric_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t)` `[`value`](#structsenml__value__t_1afc00e523d34b75ea3d74b50aa3fafc02) 

Value.

# struct `senml_string_value_t` 

SenML string value.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__string__value__t_1a189e72f22210e484592912cc4688869b) | SenML attributes.
`public const char * `[`value`](#structsenml__string__value__t_1a2d402698e6574af86392903bd54c5fed) | Value.
`public size_t `[`len`](#structsenml__string__value__t_1a373cef49f3edc5c81ce944d84cbe292d) | Value length.

## Members

#### `public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__string__value__t_1a189e72f22210e484592912cc4688869b) 

SenML attributes.

#### `public const char * `[`value`](#structsenml__string__value__t_1a2d402698e6574af86392903bd54c5fed) 

Value.

#### `public size_t `[`len`](#structsenml__string__value__t_1a373cef49f3edc5c81ce944d84cbe292d) 

Value length.

# struct `senml_bool_value_t` 

SenML boolean value.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__bool__value__t_1a809806997633801f902e992cdc6e089c) | SenML attributes.
`public bool `[`value`](#structsenml__bool__value__t_1a01a6f08418755b6f659827387cccfbcb) | Value.

## Members

#### `public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__bool__value__t_1a809806997633801f902e992cdc6e089c) 

SenML attributes.

#### `public bool `[`value`](#structsenml__bool__value__t_1a01a6f08418755b6f659827387cccfbcb) 

Value.

# struct `senml_data_value_t` 

SenML data value.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__data__value__t_1ad2b3e7e3245f0a99a5f7b66c1a5f3ea1) | SenML attributes.
`public const uint8_t * `[`value`](#structsenml__data__value__t_1a8300c2ad75daa42025df1149deeca9fa) | Value.
`public size_t `[`len`](#structsenml__data__value__t_1ac51afbd7516fd746ca23f06d33310b93) | Value length.

## Members

#### `public `[`senml_attr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__attr__t)` `[`attr`](#structsenml__data__value__t_1ad2b3e7e3245f0a99a5f7b66c1a5f3ea1) 

SenML attributes.

#### `public const uint8_t * `[`value`](#structsenml__data__value__t_1a8300c2ad75daa42025df1149deeca9fa) 

Value.

#### `public size_t `[`len`](#structsenml__data__value__t_1ac51afbd7516fd746ca23f06d33310b93) 

Value length.

