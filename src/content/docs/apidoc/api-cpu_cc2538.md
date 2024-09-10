---
title: api-cpu_cc2538.md
description: api-cpu_cc2538.md
---
# group `cpu_cc2538` 

Texas Instruments CC2538 Cortex-M3 MCU specific code.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SSI_CR0_DSS`](#group__cpu__cc2538_1gac5952c1088b948520636f85072500acb)            | Set CR0 data size (bits)
`struct `[`cc2538_ssi_t`](#structcc2538__ssi__t) | SSI component registers.

## Members

#### `define `[`SSI_CR0_DSS`](#group__cpu__cc2538_1gac5952c1088b948520636f85072500acb) 

Set CR0 data size (bits)

# struct `cc2538_ssi_t` 

SSI component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CR0`](#structcc2538__ssi__t_1a8e569dce2671359000198235ad22b264) | SSI Control Register 0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CR1`](#structcc2538__ssi__t_1a0b354884de08ea1a8fece658a5e1403c) | SSI Control Register 1.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DR`](#structcc2538__ssi__t_1aa20352088e688ae7a31d1c91bcc0653f) | SSI Data register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SR`](#structcc2538__ssi__t_1a7c0dd32c1d731897e4ece864b5b58f72) | SSI FIFO/busy Status Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CPSR`](#structcc2538__ssi__t_1a6032ddba6960aedf9c70cc28d3e5ba1d) | SSI Clock Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IM`](#structcc2538__ssi__t_1afee369569262a38be58c663de752ee5c) | SSI Interrupt Mask register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__ssi__t_1a45bc02de5462a2870fe1145259f5f0b6) | SSI Raw Interrupt Status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__ssi__t_1af8319e6649dcdbe3c993e31f9d4c3839) | SSI Masked Interrupt Status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ICR`](#structcc2538__ssi__t_1aa9e04b93c0f850328740d0dccfb98af0) | SSI Interrupt Clear Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DMACTL`](#structcc2538__ssi__t_1a83d461d8375f7e7f71f6d33e24cbc9ec) | SSI uDMA Control Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CC`](#structcc2538__ssi__t_1ad582a3973998453e17c0fc50472e4ccf) | SSI clock configuration.

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CR0`](#structcc2538__ssi__t_1a8e569dce2671359000198235ad22b264) 

SSI Control Register 0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CR1`](#structcc2538__ssi__t_1a0b354884de08ea1a8fece658a5e1403c) 

SSI Control Register 1.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DR`](#structcc2538__ssi__t_1aa20352088e688ae7a31d1c91bcc0653f) 

SSI Data register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SR`](#structcc2538__ssi__t_1a7c0dd32c1d731897e4ece864b5b58f72) 

SSI FIFO/busy Status Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CPSR`](#structcc2538__ssi__t_1a6032ddba6960aedf9c70cc28d3e5ba1d) 

SSI Clock Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IM`](#structcc2538__ssi__t_1afee369569262a38be58c663de752ee5c) 

SSI Interrupt Mask register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__ssi__t_1a45bc02de5462a2870fe1145259f5f0b6) 

SSI Raw Interrupt Status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__ssi__t_1af8319e6649dcdbe3c993e31f9d4c3839) 

SSI Masked Interrupt Status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ICR`](#structcc2538__ssi__t_1aa9e04b93c0f850328740d0dccfb98af0) 

SSI Interrupt Clear Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DMACTL`](#structcc2538__ssi__t_1a83d461d8375f7e7f71f6d33e24cbc9ec) 

SSI uDMA Control Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CC`](#structcc2538__ssi__t_1ad582a3973998453e17c0fc50472e4ccf) 

SSI clock configuration.

