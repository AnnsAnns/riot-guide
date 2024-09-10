---
title: api-sys_hashes_sha3.md
description: api-sys_hashes_sha3.md
---
# group `sys_hashes_sha3` 

Implementation of the SHA-3 hashing function.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SHA3_256_DIGEST_LENGTH`](#group__sys__hashes__sha3_1gad5d28066890b18e8ff1a71338c50bcb3)            | Length of SHA3-256 digests in bytes.
`define `[`SHA3_384_DIGEST_LENGTH`](#group__sys__hashes__sha3_1ga72a40113e684426bc9e2e8566c372800)            | Length of SHA3-384 digests in bytes.
`define `[`SHA3_512_DIGEST_LENGTH`](#group__sys__hashes__sha3_1ga59b7504d954841455b07a8982914e137)            | Length of SHA3-512 digests in bytes.
`public void `[`Keccak_init`](#group__sys__hashes__sha3_1ga4df3c180fa46a022c054874620666952)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,unsigned int rate,unsigned int capacity,unsigned char delimitedSuffix)`            | Initialise a sponge based on a keccak-1600 permutation.
`public void `[`Keccak_update`](#group__sys__hashes__sha3_1ga3323e12aecb193682f652bb7b447c8ae)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,const unsigned char * input,unsigned long long int inputByteLen)`            | Absorbs data into a sponge.
`public void `[`Keccak_final`](#group__sys__hashes__sha3_1ga458342f02007546e7631ae8a8f8451e6)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,unsigned char * output,unsigned long long int outputByteLen)`            | Squeeze data from a sponge.
`public void `[`sha3_256_init`](#group__sys__hashes__sha3_1ga32c6f8b4e100ef01373c4c232b994e64)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx)`            | SHA3-256 initialization.
`public void `[`sha3_update`](#group__sys__hashes__sha3_1gab21d514d48eaa2e073b1a0d7fb1ef169)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,const void * data,size_t len)`            | Add bytes into the hash.
`public void `[`sha3_256_final`](#group__sys__hashes__sha3_1gadea1459cd9281b1d15ba343c6fe116ac)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,void * digest)`            | SHA3-256 finalization.
`public void `[`sha3_384_init`](#group__sys__hashes__sha3_1ga5613397bf6db4aa0e208f0f700b3ad25)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx)`            | SHA3-384 initialization.
`public void `[`sha3_384_final`](#group__sys__hashes__sha3_1ga04c76eeeadfa764bfb1cf7965b07b716)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,void * digest)`            | SHA3-384 finalization.
`public void `[`sha3_512_init`](#group__sys__hashes__sha3_1gac0f4c6c2968b2abe4bb1fbb27652c16e)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx)`            | SHA3-512 initialization.
`public void `[`sha3_512_final`](#group__sys__hashes__sha3_1ga943ad1a99ea14b93559954404c72cebd)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,void * digest)`            | SHA3-512 finalization.
`public void `[`sha3_256`](#group__sys__hashes__sha3_1ga9a303e37820b34336b25d5092ef2e2ed)`(void * digest,const void * data,size_t len)`            | A wrapper function to simplify the generation of a hash, this is useful for generating SHA3-256 from one buffer.
`public void `[`sha3_384`](#group__sys__hashes__sha3_1ga56ca0ffdd4707d477d640ae60cf9a71d)`(void * digest,const void * data,size_t len)`            | A wrapper function to simplify the generation of a hash, this is useful for generating SHA3-384 from one buffer.
`public void `[`sha3_512`](#group__sys__hashes__sha3_1ga79f830dac0c68b5aa34c4fffe2a9467b)`(void * digest,const void * data,size_t len)`            | A wrapper function to simplify the generation of a hash, this is useful for generating SHA3-512 from one buffer.
`struct `[`keccak_state_t`](#structkeccak__state__t) | Context for operations on a sponge with keccak permutation.

## Members

#### `define `[`SHA3_256_DIGEST_LENGTH`](#group__sys__hashes__sha3_1gad5d28066890b18e8ff1a71338c50bcb3) 

Length of SHA3-256 digests in bytes.

#### `define `[`SHA3_384_DIGEST_LENGTH`](#group__sys__hashes__sha3_1ga72a40113e684426bc9e2e8566c372800) 

Length of SHA3-384 digests in bytes.

#### `define `[`SHA3_512_DIGEST_LENGTH`](#group__sys__hashes__sha3_1ga59b7504d954841455b07a8982914e137) 

Length of SHA3-512 digests in bytes.

#### `public void `[`Keccak_init`](#group__sys__hashes__sha3_1ga4df3c180fa46a022c054874620666952)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,unsigned int rate,unsigned int capacity,unsigned char delimitedSuffix)` 

Initialise a sponge based on a keccak-1600 permutation.

#### Parameters
* `ctx` context handle to initialise 

* `rate` the desired rate of the sponge 

* `capacity` the desired capacity of the sponge 

* `delimitedSuffix` suffix to be appended to the message after the absorbation phase

#### `public void `[`Keccak_update`](#group__sys__hashes__sha3_1ga3323e12aecb193682f652bb7b447c8ae)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,const unsigned char * input,unsigned long long int inputByteLen)` 

Absorbs data into a sponge.

Can be called multiple times

#### Parameters
* `ctx` context handle of the sponge 

* `input` pointer to the data to be absorbed 

* `inputByteLen` length of the input data in bytes

#### `public void `[`Keccak_final`](#group__sys__hashes__sha3_1ga458342f02007546e7631ae8a8f8451e6)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,unsigned char * output,unsigned long long int outputByteLen)` 

Squeeze data from a sponge.

#### Parameters
* `ctx` context handle of the sponge 

* `output` the squeezed data 

* `outputByteLen` size of the data to be squeezed.

#### `public void `[`sha3_256_init`](#group__sys__hashes__sha3_1ga32c6f8b4e100ef01373c4c232b994e64)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx)` 

SHA3-256 initialization.

Begins a SHA3-256 operation.

#### Parameters
* `ctx` [keccak_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t) handle to initialise

#### `public void `[`sha3_update`](#group__sys__hashes__sha3_1gab21d514d48eaa2e073b1a0d7fb1ef169)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,const void * data,size_t len)` 

Add bytes into the hash.

#### Parameters
* `ctx` context handle to use 

* `data` Input data 

* `len` Length of `data`

#### `public void `[`sha3_256_final`](#group__sys__hashes__sha3_1gadea1459cd9281b1d15ba343c6fe116ac)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,void * digest)` 

SHA3-256 finalization.

Pads the input data and exports the hash value

#### Parameters
* `ctx` context handle to use 

* `digest` resulting digest, this is the hash of all the bytes

#### `public void `[`sha3_384_init`](#group__sys__hashes__sha3_1ga5613397bf6db4aa0e208f0f700b3ad25)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx)` 

SHA3-384 initialization.

Begins a SHA3-384 operation.

#### Parameters
* `ctx` [keccak_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t) handle to initialise

#### `public void `[`sha3_384_final`](#group__sys__hashes__sha3_1ga04c76eeeadfa764bfb1cf7965b07b716)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,void * digest)` 

SHA3-384 finalization.

Pads the input data and exports the hash value

#### Parameters
* `ctx` context handle to use 

* `digest` resulting digest, this is the hash of all the bytes

#### `public void `[`sha3_512_init`](#group__sys__hashes__sha3_1gac0f4c6c2968b2abe4bb1fbb27652c16e)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx)` 

SHA3-512 initialization.

Begins a SHA3-512 operation.

#### Parameters
* `ctx` [keccak_state_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t) handle to initialise

#### `public void `[`sha3_512_final`](#group__sys__hashes__sha3_1ga943ad1a99ea14b93559954404c72cebd)`(`[`keccak_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_hashes_sha3.md#structkeccak__state__t)` * ctx,void * digest)` 

SHA3-512 finalization.

Pads the input data and exports the hash value

#### Parameters
* `ctx` context handle to use 

* `digest` resulting digest, this is the hash of all the bytes

#### `public void `[`sha3_256`](#group__sys__hashes__sha3_1ga9a303e37820b34336b25d5092ef2e2ed)`(void * digest,const void * data,size_t len)` 

A wrapper function to simplify the generation of a hash, this is useful for generating SHA3-256 from one buffer.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` pointer to an array for the result, length must be SHA3_256_DIGEST_LENGTH

#### `public void `[`sha3_384`](#group__sys__hashes__sha3_1ga56ca0ffdd4707d477d640ae60cf9a71d)`(void * digest,const void * data,size_t len)` 

A wrapper function to simplify the generation of a hash, this is useful for generating SHA3-384 from one buffer.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` pointer to an array for the result, length must be SHA3_384_DIGEST_LENGTH

#### `public void `[`sha3_512`](#group__sys__hashes__sha3_1ga79f830dac0c68b5aa34c4fffe2a9467b)`(void * digest,const void * data,size_t len)` 

A wrapper function to simplify the generation of a hash, this is useful for generating SHA3-512 from one buffer.

#### Parameters
* `data` pointer to the buffer to generate hash from 

* `len` length of the buffer 

* `digest` pointer to an array for the result, length must be SHA3_512_DIGEST_LENGTH

# struct `keccak_state_t` 

Context for operations on a sponge with keccak permutation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned char `[`state`](#structkeccak__state__t_1aa4c5bb419582fa2387648f371d213b02) | State of the Keccak sponge.
`public unsigned int `[`i`](#structkeccak__state__t_1afff2c4ae80f0b7036dc7dbc0a089ebe8) | Current position within the state.
`public unsigned char `[`delimitedSuffix`](#structkeccak__state__t_1af1be73ea65faff3437aeda2737b2a990) | The suffix used for padding.
`public unsigned int `[`rate`](#structkeccak__state__t_1a07125cf66f3d817e0dd78393b3ea633d) | The bitrate of the sponge.
`public unsigned int `[`capacity`](#structkeccak__state__t_1ab83082d36322a3b9152312ad852a5a07) | The capacity in bits of the sponge.
`public unsigned int `[`rateInBytes`](#structkeccak__state__t_1aa0c67a434ada551bcbbc06342f89e24e) | The rate in bytes of the sponge.

## Members

#### `public unsigned char `[`state`](#structkeccak__state__t_1aa4c5bb419582fa2387648f371d213b02) 

State of the Keccak sponge.

#### `public unsigned int `[`i`](#structkeccak__state__t_1afff2c4ae80f0b7036dc7dbc0a089ebe8) 

Current position within the state.

#### `public unsigned char `[`delimitedSuffix`](#structkeccak__state__t_1af1be73ea65faff3437aeda2737b2a990) 

The suffix used for padding.

#### `public unsigned int `[`rate`](#structkeccak__state__t_1a07125cf66f3d817e0dd78393b3ea633d) 

The bitrate of the sponge.

#### `public unsigned int `[`capacity`](#structkeccak__state__t_1ab83082d36322a3b9152312ad852a5a07) 

The capacity in bits of the sponge.

#### `public unsigned int `[`rateInBytes`](#structkeccak__state__t_1aa0c67a434ada551bcbbc06342f89e24e) 

The rate in bytes of the sponge.

