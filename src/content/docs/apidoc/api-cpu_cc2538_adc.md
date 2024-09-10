---
title: api-cpu_cc2538_adc.md
description: api-cpu_cc2538_adc.md
---
# group `cpu_cc2538_adc` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`cc2538_soc_adc_t`](#structcc2538__soc__adc__t) | SOC ADC component registers.

# struct `cc2538_soc_adc_t` 

SOC ADC component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCCON1`](#structcc2538__soc__adc__t_1af1d67489c9287dd89516e83ead1575b9) | ADC Control Register 1.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCCON2`](#structcc2538__soc__adc__t_1a88389677458d69a7a5e139a695eaeadc) | ADC Control Register 2.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCCON3`](#structcc2538__soc__adc__t_1a7412dd3c68a990fa0c9fa47a83b8f78b) | ADC Control Register 3.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCL`](#structcc2538__soc__adc__t_1a5f9844fec0da1653437fdbde96a1e52e) | Least-significant part of ADC conversion result.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCH`](#structcc2538__soc__adc__t_1a214ad8c1c07bc72d2ddbca03afbabf58) | Most-significant part of ADC conversion result.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RNDL`](#structcc2538__soc__adc__t_1a007196f0689abdb00a8a9e875f187eea) | Random-number-generator data; low byte.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RNDH`](#structcc2538__soc__adc__t_1aa6b25d4e42c21e1bb3416cf22ac2b658) | Random-number-generator data; high byte.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__soc__adc__t_1a97e1d5384d69456119696a65915a7a31) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CMPCTL`](#structcc2538__soc__adc__t_1a2d62e1f1eb5c0f7e6b6278c9d76c3f5f) | Analog comparator control and status register.

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCCON1`](#structcc2538__soc__adc__t_1af1d67489c9287dd89516e83ead1575b9) 

ADC Control Register 1.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCCON2`](#structcc2538__soc__adc__t_1a88389677458d69a7a5e139a695eaeadc) 

ADC Control Register 2.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCCON3`](#structcc2538__soc__adc__t_1a7412dd3c68a990fa0c9fa47a83b8f78b) 

ADC Control Register 3.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCL`](#structcc2538__soc__adc__t_1a5f9844fec0da1653437fdbde96a1e52e) 

Least-significant part of ADC conversion result.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ADCH`](#structcc2538__soc__adc__t_1a214ad8c1c07bc72d2ddbca03afbabf58) 

Most-significant part of ADC conversion result.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RNDL`](#structcc2538__soc__adc__t_1a007196f0689abdb00a8a9e875f187eea) 

Random-number-generator data; low byte.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RNDH`](#structcc2538__soc__adc__t_1aa6b25d4e42c21e1bb3416cf22ac2b658) 

Random-number-generator data; high byte.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__soc__adc__t_1a97e1d5384d69456119696a65915a7a31) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CMPCTL`](#structcc2538__soc__adc__t_1a2d62e1f1eb5c0f7e6b6278c9d76c3f5f) 

Analog comparator control and status register.

