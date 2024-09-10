---
title: api-sys_phydat.md
description: api-sys_phydat.md
---
# group `sys_phydat` 

Generic data container for physical data and utility functions.

The purpose of this module is to introduce a common view on physical data throughout RIOT. This data is typically the output from sensor readings, data aggregation, and also the input for actuators.

The idea is to enable different sensor/actuator drivers and other RIOT modules to exchange and have the same view on this kind of data. Labeling data with a unit type it's scaling makes it possible to pipe data between modules in an automated fashion without the need of specialized software wrappers and/or data normalization modules.

> Todo: It might make sense to introduce additional data types for increased precision, i.e. something like phydat_float_t...

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PHYDAT_DIM`](#group__sys__phydat_1ga203e9c536b1f4a534c4746fd6f525403)            | The fixed number of dimensions we work with.
`define `[`PHYDAT_SCALE_STR_MAXLEN`](#group__sys__phydat_1ga81ae0b791fe8d3deeb072896dab9084e)            | The maximum length of a scaling string.
`define `[`PHYDAT_MIN`](#group__sys__phydat_1ga52c698f901fd9d587445ac09a6e20a88)            | Minimum value for [phydat_t::val](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t_1a93d58dce756ecea1890e40a90c665731).
`define `[`PHYDAT_MAX`](#group__sys__phydat_1ga678c6f1d5947c60b5f69c64c669187dd)            | Maximum value for [phydat_t::val](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t_1a93d58dce756ecea1890e40a90c665731).
`enum `[`@387`](#group__sys__phydat_1ga21585a8778ca0c944c970059792ad318)            | Definition of physical units and comparable data types.
`public void `[`phydat_dump`](#group__sys__phydat_1gafcee3675da38c16f7e619efbd69c14ff)`(`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * data,uint8_t dim)`            | Dump the given data container to STDIO.
`public void `[`phydat_unit_print`](#group__sys__phydat_1ga0b18c8f5f17c5c04a013d818d7dfb635)`(uint8_t unit)`            | Print a unit.
`public ssize_t `[`phydat_unit_write`](#group__sys__phydat_1gaf9e843aa3fbd8eefe30cffd5c2bd59fe)`(char * dest,size_t max_size,uint8_t unit)`            | Write the string representation of the given unit into the given buffer.
`public char `[`phydat_prefix_from_scale`](#group__sys__phydat_1ga3b58d48a7b53c1eba4178887f9708f16)`(int8_t scale)`            | Convert the given scale factor to an SI prefix.
`public void `[`phydat_fit`](#group__sys__phydat_1gafafe8717882db85c250f203b020f8863)`(`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * dat,const int32_t * values,unsigned int dim)`            | Scale integer value(s) to fit into a [phydat_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t).
`public size_t `[`phydat_to_json`](#group__sys__phydat_1gad7a5978e5119e3976addffd2891c76fa)`(const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * data,size_t dim,char * buf)`            | Convert the given [phydat_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t) structure into a JSON string.
`public int64_t `[`phydat_date_time_to_unix`](#group__sys__phydat_1ga6a9340a23b99caa17366ab39c4184f09)`(`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * date,`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * time,int32_t offset_seconds)`            | Convert a date and time contained in phydat structs to a Unix timestamp.
`public int64_t `[`phydat_unix`](#group__sys__phydat_1ga7bed56f9fae469148fcd51d86fa2944f)`(int16_t year,int16_t month,int16_t day,int16_t hour,int16_t minute,int16_t second,int32_t offset)`            | Convert a date and time (per ISO8601) to a Unix timestamp (seconds since 1970).
`struct `[`phydat_t`](#structphydat__t) | Generic data structure for expressing physical values.

## Members

#### `define `[`PHYDAT_DIM`](#group__sys__phydat_1ga203e9c536b1f4a534c4746fd6f525403) 

The fixed number of dimensions we work with.

We use a fixed number of 3 dimensions, as many physical values we encounter can be expressed this way. In practice we have e.g. readings from accelerometers, gyros, color sensors, or set data for RGB LEDs.

When expressing 1-dimensional data we just ignore the 2 higher dimension. This leads to a slight overhead of some byte of memory - but we benefit from a unified data structure for passing around physical data.

#### `define `[`PHYDAT_SCALE_STR_MAXLEN`](#group__sys__phydat_1ga81ae0b791fe8d3deeb072896dab9084e) 

The maximum length of a scaling string.

#### `define `[`PHYDAT_MIN`](#group__sys__phydat_1ga52c698f901fd9d587445ac09a6e20a88) 

Minimum value for [phydat_t::val](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t_1a93d58dce756ecea1890e40a90c665731).

#### `define `[`PHYDAT_MAX`](#group__sys__phydat_1ga678c6f1d5947c60b5f69c64c669187dd) 

Maximum value for [phydat_t::val](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t_1a93d58dce756ecea1890e40a90c665731).

#### `enum `[`@387`](#group__sys__phydat_1ga21585a8778ca0c944c970059792ad318) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UNIT_UNDEF            | unit undefined
UNIT_NONE            | data has no physical unit
UNIT_TEMP_C            | degree Celsius
UNIT_TEMP_F            | degree Fahrenheit
UNIT_TEMP_K            | Kelvin.
UNIT_LUX            | Lux (lx)
UNIT_M            | meters
UNIT_M2            | square meters
UNIT_M3            | cubic meters
UNIT_G_FORCE            | gravitational force equivalent
UNIT_G            | > Deprecated: , use UNIT_G_FORCE instead
UNIT_DPS            | degree per second
UNIT_GRAM            | grams - not using the SI unit (kg) here to make scale handling simpler
UNIT_GR            | > Deprecated: , use UNIT_GRAM instead
UNIT_A            | Ampere.
UNIT_V            | Volts.
UNIT_W            | Watt.
UNIT_GAUSS            | gauss
UNIT_GS            | > Deprecated: , use UNIT_GAUSS instead
UNIT_T            | Tesla.
UNIT_DBM            | decibel-milliwatts
UNIT_COULOMB            | coulomb
UNIT_F            | Farad.
UNIT_OHM            | Ohm.
UNIT_PH            | pH
UNIT_BAR            | Beer?
UNIT_PA            | Pascal.
UNIT_CD            | Candela.
UNIT_BOOL            | boolean value [0\|1]
UNIT_CTS            | counts
UNIT_PERCENT            | out of 100
UNIT_PERMILL            | out of 1000
UNIT_PPM            | part per million
UNIT_PPB            | part per billion
UNIT_TIME            | the three dimensions contain sec, min, and hours
UNIT_DATE            | the 3 dimensions contain days, months and years
UNIT_GPM3            | grams per cubic meter
UNIT_CPM3            | count per cubic meter

Definition of physical units and comparable data types.

This list should contain all needed physical units (e.g. SI units), but also non-physical units that can be used to define the type of data passed around. This can be for example BOOL or aggregate values. As rule of thumb, the unit list can contain anything that helps two modules automatically negotiate, if they can understand each other.

Extent this list as needed.

#### `public void `[`phydat_dump`](#group__sys__phydat_1gafcee3675da38c16f7e619efbd69c14ff)`(`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * data,uint8_t dim)` 

Dump the given data container to STDIO.

#### Parameters
* `data` data container to dump 

* `dim` number of dimension of `data` to dump

#### `public void `[`phydat_unit_print`](#group__sys__phydat_1ga0b18c8f5f17c5c04a013d818d7dfb635)`(uint8_t unit)` 

Print a unit.

#### Parameters
* `unit` unit to print

#### `public ssize_t `[`phydat_unit_write`](#group__sys__phydat_1gaf9e843aa3fbd8eefe30cffd5c2bd59fe)`(char * dest,size_t max_size,uint8_t unit)` 

Write the string representation of the given unit into the given buffer.

#### Parameters
* `dest` destination buffer to write to 

* `max_size` size of the buffer at `dest`

* `unit` unit to convert

#### Returns
Number of bytes written 

#### Parameters
* `-EOVERFLOW` buffer at `dest` is too small 

* `-EINVAL` invalid unit in `unit`

The function will never write a terminating zero byte 

If you pass `NULL` for `dest`, it will return the number of bytes it would write (regardless of `max_size`)

#### `public char `[`phydat_prefix_from_scale`](#group__sys__phydat_1ga3b58d48a7b53c1eba4178887f9708f16)`(int8_t scale)` 

Convert the given scale factor to an SI prefix.

The given scaling factor is returned as a SI unit prefix (e.g. M for Mega, u for micro, etc), or `\0` otherwise.

#### Parameters
* `scale` scale factor to convert

#### Returns
SI prefix if applicable 

#### Returns
`\0` if no SI prefix was found

#### `public void `[`phydat_fit`](#group__sys__phydat_1gafafe8717882db85c250f203b020f8863)`(`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * dat,const int32_t * values,unsigned int dim)` 

Scale integer value(s) to fit into a [phydat_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t).

Inserts the `values` in the given `dat` so that all `dim` values in `values` fit inside the limits of the data type, [[PHYDAT_MIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1ga52c698f901fd9d587445ac09a6e20a88), [PHYDAT_MAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1ga678c6f1d5947c60b5f69c64c669187dd)], and updates the stored scale factor. The [phydat_t::scale](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t_1a729603375fb37d09c94523ce8b993c6c) member in `dat` is used as the the original scale of the `values`. The value is rounded to the nearest integer if possible, otherwise away from zero. E.g. `0.5` and `0.6` are rounded to `1`, `0.4` and `-0.4` are rounded to `0`, `-0.5` and `-0.6` are rounded to `-1`.

```cpp
int32_t values[] = { 100000, 2000000, 30000000 };
phydat_t dat = { .scale = 0 };
phydat_fit(&dat, values, 3);
```

Unless compiled with `-DPHYDAT_FIT_TRADE_PRECISION_FOR_ROM=0`, this function will scale the value `-32768`, even though it would fit into a [phydat_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t). Statistically, this precision loss happens in 0.00153% of the calls. This optimization saves a bit more than 20 bytes.

The [phydat_t::scale](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t_1a729603375fb37d09c94523ce8b993c6c) member in `dat` is initialized to the scale of the `values` by the caller prior to calling this function.

#### Parameters
* `dat` the value will be written into this data array 

* `values` value(s) to rescale 

* `dim` Number of elements in `values`

#### `public size_t `[`phydat_to_json`](#group__sys__phydat_1gad7a5978e5119e3976addffd2891c76fa)`(const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * data,size_t dim,char * buf)` 

Convert the given [phydat_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t) structure into a JSON string.

The output string written to `buf` will be `\0` terminated. You must make sure, that the given `buf` is large enough to hold the resulting string. You can call the function with `@p buf := NULL` to simply calculate the size of the JSON string without writing anything.

The formatted JSON string will have the following format: 
```cpp
// case (dim == 1):
{
  "d": 21.45,
  "u": "°C"
}
```

```cpp
// case (dim > 1), dim := 3 in this case:
{
  "d": [1.02, 0.23, -0.81],
  "u": "g"
}
```

The data will be encoded as fixed point number based on the given scale factor.

For encoding the unit, this function uses the extended [phydat_unit_write()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gaf9e843aa3fbd8eefe30cffd5c2bd59fe) function to also print units for non-SI types, e.g. it will produce `..."u":"date"}` for [UNIT_DATE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318a5f441fb8c22c2b58ef383ebc051f53de) or `..."u":"none"}` for [UNIT_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318a3fc615e76a60fbb42f56691526f5c6c9).

#### Parameters
* `data` data to encode 

* `dim` dimensions used in `data`, MUST be > 0 and <= PHYDAT_DIM 

* `buf` target buffer for the JSON string, or NULL

`dim` > 0 

`dim` <= PHYDAT_DIM

#### Returns
number of bytes (potentially) written to `buf`, including `\0` terminator

#### `public int64_t `[`phydat_date_time_to_unix`](#group__sys__phydat_1ga6a9340a23b99caa17366ab39c4184f09)`(`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * date,`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * time,int32_t offset_seconds)` 

Convert a date and time contained in phydat structs to a Unix timestamp.

See [phydat_unix()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1ga7bed56f9fae469148fcd51d86fa2944f) for the date notation and peculiarities.

#### Parameters
* `date` Date to use in the timestamp. 

* `time` Time to use in the timestamp. 

* `offset_seconds` Timezone offset in seconds to use in the timestamp.

#### Returns
A unix timestamp

#### `public int64_t `[`phydat_unix`](#group__sys__phydat_1ga7bed56f9fae469148fcd51d86fa2944f)`(int16_t year,int16_t month,int16_t day,int16_t hour,int16_t minute,int16_t second,int32_t offset)` 

Convert a date and time (per ISO8601) to a Unix timestamp (seconds since 1970).

#### Parameters
* `year` Year in the Common Era (CE). Note that 0 is 1 BCE, 1 is 2 BCE, etc. 

* `month` Month of the year. 

* `day` Day of the month. 

* `hour` Hour of the day. 

* `minute` Minute of the hour. 

* `second` Second of the minute. 

* `offset` Timezone offset in seconds.

#### Returns
A Unix timestamp (seconds since 1970).

# struct `phydat_t` 

Generic data structure for expressing physical values.

Physical data is expressed in a 3-dimensional tuple of values. In addition to the data fields, this struct contains further the (physical) unit and the scale factor of the data. The unit is expressed as constant. The scale factor is expressed as power of 10 (10^factor).

The combination of signed 16-bit numbers with and the scale factor gives us a very high dynamic range (from -32*10^-131 to 32*10^130). In a wider sense we are saving the values as fixed floating points...

The scale factor is identical for all 3 values.

In a traditional (scientific) computational system the obvious choice for the used data type would be to use floats. We are however on heavily resource constrained (even 8-bit) embedded systems, so we use int16_t here. As most sensor are in some way ADC based, they normally do not use a higher accuracy than 12-14bit, so using 16-bit integers to represent this data is good enough in most cases.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`val`](#structphydat__t_1a93d58dce756ecea1890e40a90c665731) | the 3 generic dimensions of data
`public uint8_t `[`unit`](#structphydat__t_1a9046cf3953ac76cf657f4469759f6f26) | the (physical) unit of the data
`public int8_t `[`scale`](#structphydat__t_1a729603375fb37d09c94523ce8b993c6c) | the scale factor, 10^*scale*

## Members

#### `public int16_t `[`val`](#structphydat__t_1a93d58dce756ecea1890e40a90c665731) 

the 3 generic dimensions of data

#### `public uint8_t `[`unit`](#structphydat__t_1a9046cf3953ac76cf657f4469759f6f26) 

the (physical) unit of the data

#### `public int8_t `[`scale`](#structphydat__t_1a729603375fb37d09c94523ce8b993c6c) 

the scale factor, 10^*scale*

