---
title: api-sys_senml_phydat.md
description: api-sys_senml_phydat.md
---
# group `sys_senml_phydat` 

Functionality for converting from [Phydat](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat) to [SenML](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml).

The `senml_phydat` module contains various functions for converting [Phydat](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat) values to [SenML](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`phydat_to_senml_bool`](#group__sys__senml__phydat_1ga152223a1967e0e6561c2b3069c6fbac8)`(`[`senml_bool_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__bool__value__t)` * senml,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * phydat,const uint8_t dim)`            | Create a SenML boolean value.
`public void `[`phydat_to_senml_float`](#group__sys__senml__phydat_1ga05a87f7af450ecb3976692e279265cf9)`(`[`senml_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t)` * senml,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * phydat,const uint8_t dim)`            | Create a SenML float value.
`public void `[`phydat_to_senml_decimal`](#group__sys__senml__phydat_1ga8c5cc82492dd71e2402a46917e548cb8)`(`[`senml_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t)` * senml,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * phydat,const uint8_t dim)`            | Create a SenML decimal fraction value.

## Members

#### `public void `[`phydat_to_senml_bool`](#group__sys__senml__phydat_1ga152223a1967e0e6561c2b3069c6fbac8)`(`[`senml_bool_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__bool__value__t)` * senml,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * phydat,const uint8_t dim)` 

Create a SenML boolean value.

Writes the value of the given `dim` of `phydat` as a boolean. `phydat` is assumed to be of [UNIT_BOOL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318ad0e919d3b5bd8bb4ebc46277fee1ff21).

`phydat->scale` must be zero.

#### Parameters
* `senml` SenML value to store value in. 

* `phydat` Phydat to convert. 

* `dim` Dimension of `phydat` to convert.

#### `public void `[`phydat_to_senml_float`](#group__sys__senml__phydat_1ga05a87f7af450ecb3976692e279265cf9)`(`[`senml_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t)` * senml,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * phydat,const uint8_t dim)` 

Create a SenML float value.

Writes the value of the given `dim` of `phydat` as a float. The unit of `phydat` is converted using the following rules:

* [UNIT_TIME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318acfd55ac0e3ad7afed2cefa404762d9d6) is converted to [SENML_UNIT_SECOND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5bad48fd939b01c3e56eba6c66455b63c27).

* [UNIT_F](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318ae7cfbcf25c19a69af4cf0835c42a57c9) is converted to [SENML_UNIT_KELVIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5bac4990131913f3de863f40e265c26530f).

* [UNIT_G_FORCE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318a034ac6e202e21cbd0af806042a6f5ad4) is converted to [SENML_UNIT_METER_PER_SQUARE_SECOND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5ba82e2a2a10f4d1ad23791f1927d4f5251).

* [UNIT_BAR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318af4da29227ed5262c7552a9675c68723f) is converted to [SENML_UNIT_PASCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5baf693a3ae1bd4afd70b2ed31296b3e996).

* [UNIT_GPM3](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318aa1efe8c3729965b914566289b9c43eda) is converted to [SENML_UNIT_KILOGRAM_PER_CUBIC_METER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5ba7e170f039a61d71f6161ca9800149e9e).

* [UNIT_GAUSS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318a5b2c6585ce87e0ec2ad859b7e40ea9c4) is converted to [SENML_UNIT_TESLA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5ba40a4e770ed534f3ac72e564471e849ca).

* Compatible units are set to their SenML equivalent.

* Incompatible (or unknown) units are set to [SENML_UNIT_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5bab1043881d811b5a4920c0c1cc396657d).

#### Parameters
* `senml` SenML value to store value in. 

* `phydat` Phydat to convert. 

* `dim` Dimension of `phydat` to convert.

#### `public void `[`phydat_to_senml_decimal`](#group__sys__senml__phydat_1ga8c5cc82492dd71e2402a46917e548cb8)`(`[`senml_value_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__value__t)` * senml,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * phydat,const uint8_t dim)` 

Create a SenML decimal fraction value.

Writes the value of the given `dim` of `phydat` as a decimal value. The unit of `phydat` is converted using the following rules:

* [UNIT_TIME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318acfd55ac0e3ad7afed2cefa404762d9d6) is converted to [SENML_UNIT_SECOND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5bad48fd939b01c3e56eba6c66455b63c27).

* [UNIT_BAR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318af4da29227ed5262c7552a9675c68723f) is converted to [SENML_UNIT_PASCAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5baf693a3ae1bd4afd70b2ed31296b3e996).

* [UNIT_GPM3](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318aa1efe8c3729965b914566289b9c43eda) is converted to [SENML_UNIT_KILOGRAM_PER_CUBIC_METER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5ba7e170f039a61d71f6161ca9800149e9e).

* [UNIT_GAUSS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__phydat_1gga21585a8778ca0c944c970059792ad318a5b2c6585ce87e0ec2ad859b7e40ea9c4) is converted to [SENML_UNIT_TESLA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5ba40a4e770ed534f3ac72e564471e849ca).

* Compatible units are set to their SenML equivalent.

* Incompatible (or unknown) units are set to [SENML_UNIT_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml_1ggac5597b7bfe72dfb7ea3d1d26f9290c5bab1043881d811b5a4920c0c1cc396657d).

#### Parameters
* `senml` SenML value to store value in. 

* `phydat` Phydat to convert. 

* `dim` Dimension of `phydat` to convert.

