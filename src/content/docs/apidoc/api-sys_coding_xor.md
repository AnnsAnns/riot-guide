---
title: api-sys_coding_xor.md
description: api-sys_coding_xor.md
---
# group `sys_coding_xor` 

Simple XOR based coding algorithms.

**This feature is experimental!**
 This is a very basic implementation, it can only recover 1 lost block in 3 and only has a 33% chance of recovering two consecutive lost blocks. API / Algorithm might change if that means we can do better.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_CODING_XOR_CHECK_BYTES`](#group__sys__coding__xor_1ga6de1b30fe3e5fbaca0d223ddc5b5e3f1)            | Number of payload bytes per parity byte.
`define `[`CODING_XOR_PARITY_LEN`](#group__sys__coding__xor_1ga0d0a30266cfec4495f2b728025a4fa76)            | Get the size of the needed parity buffer for a given payload size.
`public void `[`coding_xor_generate`](#group__sys__coding__xor_1ga002476a754c2d70cb1fbdc5c1ab95665)`(void * data,size_t len,uint8_t * parity)`            | Generate parity and mix data buffer.
`public bool `[`coding_xor_recover`](#group__sys__coding__xor_1ga1815b14c76fb80af08fcc709ebbf1f07)`(void * data,size_t len,uint8_t * parity,uint8_t * blocks,size_t block_size,bool recover_parity)`            | Restore and unmix buffer.

## Members

#### `define `[`CONFIG_CODING_XOR_CHECK_BYTES`](#group__sys__coding__xor_1ga6de1b30fe3e5fbaca0d223ddc5b5e3f1) 

Number of payload bytes per parity byte.

#### `define `[`CODING_XOR_PARITY_LEN`](#group__sys__coding__xor_1ga0d0a30266cfec4495f2b728025a4fa76) 

Get the size of the needed parity buffer for a given payload size.

#### Parameters
* `in` Payload length

#### `public void `[`coding_xor_generate`](#group__sys__coding__xor_1ga002476a754c2d70cb1fbdc5c1ab95665)`(void * data,size_t len,uint8_t * parity)` 

Generate parity and mix data buffer.

This generates parity data to recover one in [CONFIG_CODING_XOR_CHECK_BYTES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__coding__xor_1ga6de1b30fe3e5fbaca0d223ddc5b5e3f1) bytes. The data buffer is then mixed to distribute bytes amongst transfer blocks, so that the chance for consecutive bytes to be in the same block is lowered.

#### Parameters
* `data` The data buffer to be processed 

* `len` Size of the data buffer 

* `parity` Buffer to hold parity data. Must be at least `[CODING_XOR_PARITY_LEN(len)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__coding__xor_1ga0d0a30266cfec4495f2b728025a4fa76)` bytes

#### `public bool `[`coding_xor_recover`](#group__sys__coding__xor_1ga1815b14c76fb80af08fcc709ebbf1f07)`(void * data,size_t len,uint8_t * parity,uint8_t * blocks,size_t block_size,bool recover_parity)` 

Restore and unmix buffer.

#### Parameters
* `data` The data buffer to be restored 

* `len` Size of the data buffer 

* `parity` Buffer with parity data. Must be at least `[CODING_XOR_PARITY_LEN(len)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__coding__xor_1ga0d0a30266cfec4495f2b728025a4fa76)` bytes 

* `blocks` Bitfieled to indicate which blocks were received. This indicates the presence of both data and parity blocks. Parity blocks are appended after the last data block. If a block was restored it's bit will be set. 

* `block_size` Size of a data/payload block 

* `recover_parity` If true, missing parity blocks will be re-generated from data blocks.

#### Returns
True if all data blocks were recovered

