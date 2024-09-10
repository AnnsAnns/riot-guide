---
title: api-sys_senml_saul.md
description: api-sys_senml_saul.md
---
# group `sys_senml_saul` 

Functionality for reading [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) sensors as [SenML](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml).

The `senml_saul` module contains functions for reading sensors using [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) and converting them to [SenML CBOR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml__cbor).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SENML_SAUL_USE_FLOATS`](#group__sys__senml__saul_1ga6161ef44f0613b611b6dd0e404e0a8b8)            | Use floats instead of decimal types when encoding SAUL measurements.
`public int `[`senml_saul_reg_encode_cbor`](#group__sys__senml__saul_1ga964c8f636cc1cdeda78b99b676858ae5)`(nanocbor_encoder_t * enc,`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev)`            | Encode a single [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) sensor as senml+cbor.
`public size_t `[`senml_saul_encode_cbor`](#group__sys__senml__saul_1ga582bfcba303b5b026791e4695c69159c)`(uint8_t * buf,size_t len,`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * reg)`            | Encode all sensors from a [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) registry as senml+cbor.

## Members

#### `define `[`CONFIG_SENML_SAUL_USE_FLOATS`](#group__sys__senml__saul_1ga6161ef44f0613b611b6dd0e404e0a8b8) 

Use floats instead of decimal types when encoding SAUL measurements.

If this is set to `1` the [phydat_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t) values from SAUL are converted to [senml_numeric_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_senml.md#structsenml__numeric__t) using [phydat_to_senml_float](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml__phydat_1ga05a87f7af450ecb3976692e279265cf9). Values are converted using [phydat_to_senml_decimal](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__senml__phydat_1ga8c5cc82492dd71e2402a46917e548cb8) otherwise.

#### `public int `[`senml_saul_reg_encode_cbor`](#group__sys__senml__saul_1ga964c8f636cc1cdeda78b99b676858ae5)`(nanocbor_encoder_t * enc,`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev)` 

Encode a single [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) sensor as senml+cbor.

#### Parameters
* `enc` NanoCBOR encoder. 

* `dev` SAUL sensor to encode.

#### Returns
Number of dimensions encoded. Less or equal to 0 on error.

#### `public size_t `[`senml_saul_encode_cbor`](#group__sys__senml__saul_1ga582bfcba303b5b026791e4695c69159c)`(uint8_t * buf,size_t len,`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * reg)` 

Encode all sensors from a [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) registry as senml+cbor.

This functions reads all [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul) sensors in a registry and encodes the values as SenML/CBOR.

#### Parameters
* `buf` Buffer to store the CBOR in. 

* `len` Length of the buffer. 

* `reg` SAUL registry to encode.

#### Returns
Size of the encoded data.

