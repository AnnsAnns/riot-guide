---
title: api-sys_entropy_source_common.md
description: api-sys_entropy_source_common.md
---
# group `sys_entropy_source_common` 

Common definitions and functions for entropy sources.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ENTROPY_SOURCE_HMIN_SCALE`](#group__sys__entropy__source__common_1gac10a3a4e264cd9f8b1f930d5db247ec9)            | Scale Min.
`define `[`ENTROPY_SOURCE_HMIN_SCALE_BACK`](#group__sys__entropy__source__common_1ga9ef2b5dfcebb9c8eacdfa6aeb8f30d4d)            | Scale internal fixed point Min.
`enum `[`entropy_source_error_t`](#group__sys__entropy__source__common_1ga403490f8fc59992806050b17172988f8)            | Entropy source error codes.
`public int `[`entropy_source_neumann_unbias`](#group__sys__entropy__source__common_1gab4574c905947ad6131e8907f81085bf6)`(`[`entropy_source_sample_func_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga9c4ae1b2dc06ac250b20a56a149ee818)` func,uint8_t * out,size_t len)`            | Applies von Neumann unbiasing.
`public inline static uint32_t `[`entropy_source_test_rep_cutoff`](#group__sys__entropy__source__common_1ga26c48bc266f9acd81fe94c0414e5f400)`(uint32_t entropy_per_sample)`            | Calculate cutoff value for Repetition Count Test (NIST SP 800-90B 4.4.1)
`public inline static int `[`entropy_source_test_prop_cutoff`](#group__sys__entropy__source__common_1gadc6b5a9fa06e6dbcb6f69fc9a2b4ed85)`(uint32_t entropy_per_sample)`            | Calculate cutoff value for Adaptive Proportion Test (NIST SP 800-90B 4.4.2)
`public inline static void `[`entropy_source_test_rep_init`](#group__sys__entropy__source__common_1gaf79ee8ca5594e5228d687e4e727eb850)`(`[`entropy_source_tests_rep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__rep__t)` * state,uint16_t c_rep)`            | Initialize structure for Repetition Count Test.
`public inline static void `[`entropy_source_test_prop_init`](#group__sys__entropy__source__common_1ga2359461849871f375062ddc8affa82c3)`(`[`entropy_source_tests_prop_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__prop__t)` * state,uint16_t c_prop)`            | Initialize structure for Adaptive Proportion Test.
`public int `[`entropy_source_test_rep`](#group__sys__entropy__source__common_1ga6146122aa5bd1bdb036bd694638a7293)`(`[`entropy_source_tests_rep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__rep__t)` * state,uint8_t sample)`            | Performs Repetition Count Test (NIST SP 800-90B 4.4.1).
`public int `[`entropy_source_test_prop`](#group__sys__entropy__source__common_1ga6ba96558ee762ff620ab94e9cc5b7dd7)`(`[`entropy_source_tests_prop_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__prop__t)` * state,uint8_t sample)`            | Performs Adaptive Proportion Test (NIST SP 800-90B 4.4.2).
`public inline static int `[`entropy_source_test`](#group__sys__entropy__source__common_1ga65fa166141b266f92ad106cfc10b2081)`(`[`entropy_source_tests_rep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__rep__t)` * state_rep,`[`entropy_source_tests_prop_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__prop__t)` * state_prop,uint8_t sample)`            | Convenience function to perform [entropy_source_test_rep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga6146122aa5bd1bdb036bd694638a7293) and [entropy_source_test_prop](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga6ba96558ee762ff620ab94e9cc5b7dd7).
`struct `[`entropy_source_tests_rep_t`](#structentropy__source__tests__rep__t) | Data structure for Repetition Count Test (NIST SP 800-90B 4.4.1).
`struct `[`entropy_source_tests_prop_t`](#structentropy__source__tests__prop__t) | Data structure for Adaptive Proportion Test (NIST SP 800-90B 4.4.2).

## Members

#### `define `[`ENTROPY_SOURCE_HMIN_SCALE`](#group__sys__entropy__source__common_1gac10a3a4e264cd9f8b1f930d5db247ec9) 

Scale Min.

Entropy to fixed point integer to avoid float. The entropy per sample (8 Byte) of a noise source can likely be smaller than 1 bit.

#### `define `[`ENTROPY_SOURCE_HMIN_SCALE_BACK`](#group__sys__entropy__source__common_1ga9ef2b5dfcebb9c8eacdfa6aeb8f30d4d) 

Scale internal fixed point Min.

Entropy back to float. This macro is not required and only there for convenience.

#### `enum `[`entropy_source_error_t`](#group__sys__entropy__source__common_1ga403490f8fc59992806050b17172988f8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ENTROPY_SOURCE_OK            | Success.
ENTROPY_SOURCE_ERR_INIT            | Source initialization error.
ENTROPY_SOURCE_ERR_CONFIG            | Source configuration error.
ENTROPY_SOURCE_ERR_TEST_REP            | Repetition count test error.
ENTROPY_SOURCE_ERR_TEST_PROP            | Adaptive proportion test error.
ENTROPY_SOURCE_ERR_TEST_BOTH            | Repetition count and Adaptive proportion test error.
ENTROPY_SOURCE_ERR_COND            | Conditioning error.

Entropy source error codes.

#### `public int `[`entropy_source_neumann_unbias`](#group__sys__entropy__source__common_1gab4574c905947ad6131e8907f81085bf6)`(`[`entropy_source_sample_func_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga9c4ae1b2dc06ac250b20a56a149ee818)` func,uint8_t * out,size_t len)` 

Applies von Neumann unbiasing.

This function requests as many samples needed to create `len` unbiased bytes using `func`. The algorithm compares bits of consecutive samples. Only bit changes will be considered for the output value. An abort criterium stops sampling after (len * CONFIG_ENTROPY_SOURCE_NEUMANN_ABORT) iterations.

This function has a non-deterministic runtime.

#### Parameters
* `func` pointer to [entropy_source_sample_func_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga9c4ae1b2dc06ac250b20a56a149ee818) function that returns samples 

* `out` pointer to write unbiased bytes to 

* `len` number of bytes to generate

#### Returns
ENTROPY_SOURCE_OK on success 

#### Returns
negative [entropy_source_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga403490f8fc59992806050b17172988f8) code on error

#### `public inline static uint32_t `[`entropy_source_test_rep_cutoff`](#group__sys__entropy__source__common_1ga26c48bc266f9acd81fe94c0414e5f400)`(uint32_t entropy_per_sample)` 

Calculate cutoff value for Repetition Count Test (NIST SP 800-90B 4.4.1)

```cpp
C = 1 + ( (-log2 a) / H)
```

C: Cutoff value. H: Min. entropy of the source [SP800-90B EntropyAssessment](https://github.com/usnistgov/SP800-90B_EntropyAssessment). a: Probability of type I error. We assume 2^(-20).

#### Parameters
* `entropy_per_sample` Estimated min. entropy of one sample scaled by [ENTROPY_SOURCE_HMIN_SCALE()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1gac10a3a4e264cd9f8b1f930d5db247ec9)

#### Returns
Cutoff threshold

#### `public inline static int `[`entropy_source_test_prop_cutoff`](#group__sys__entropy__source__common_1gadc6b5a9fa06e6dbcb6f69fc9a2b4ed85)`(uint32_t entropy_per_sample)` 

Calculate cutoff value for Adaptive Proportion Test (NIST SP 800-90B 4.4.2)

#### Parameters
* `entropy_per_sample` Estimated min. entropy of one sample scaled by [ENTROPY_SOURCE_HMIN_SCALE()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1gac10a3a4e264cd9f8b1f930d5db247ec9)

#### Returns
Cutoff value 

#### Returns
ENTROPY_SOURCE_ERR_CONFIG if parameter invalid

#### `public inline static void `[`entropy_source_test_rep_init`](#group__sys__entropy__source__common_1gaf79ee8ca5594e5228d687e4e727eb850)`(`[`entropy_source_tests_rep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__rep__t)` * state,uint16_t c_rep)` 

Initialize structure for Repetition Count Test.

#### Parameters
* `state` Test structure of one entropy source. 

* `c_rep` Cutoff value calculated by [entropy_source_test_rep_cutoff](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga26c48bc266f9acd81fe94c0414e5f400).

#### `public inline static void `[`entropy_source_test_prop_init`](#group__sys__entropy__source__common_1ga2359461849871f375062ddc8affa82c3)`(`[`entropy_source_tests_prop_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__prop__t)` * state,uint16_t c_prop)` 

Initialize structure for Adaptive Proportion Test.

#### Parameters
* `state` Test structure of one entropy source. 

* `c_prop` Cutoff value calculated by [entropy_source_test_prop_cutoff](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1gadc6b5a9fa06e6dbcb6f69fc9a2b4ed85).

#### `public int `[`entropy_source_test_rep`](#group__sys__entropy__source__common_1ga6146122aa5bd1bdb036bd694638a7293)`(`[`entropy_source_tests_rep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__rep__t)` * state,uint8_t sample)` 

Performs Repetition Count Test (NIST SP 800-90B 4.4.1).

This function will not block sampling. It only indicates detected errors.

#### Parameters
* `state` Test structure of one entropy source. 

* `sample` Current sample.

#### Returns
ENTROPY_SOURCE_OK on success 

#### Returns
ENTROPY_SOURCE_ERR_TEST_REP on detected weakness

#### `public int `[`entropy_source_test_prop`](#group__sys__entropy__source__common_1ga6ba96558ee762ff620ab94e9cc5b7dd7)`(`[`entropy_source_tests_prop_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__prop__t)` * state,uint8_t sample)` 

Performs Adaptive Proportion Test (NIST SP 800-90B 4.4.2).

This function will not block the sampling. It only indicates detected errors.

#### Parameters
* `state` Test structure of one entropy source. 

* `sample` current sample.

#### Returns
ENTROPY_SOURCE_OK on success 

#### Returns
ENTROPY_SOURCE_ERR_TEST_PROP on detected weakness

#### `public inline static int `[`entropy_source_test`](#group__sys__entropy__source__common_1ga65fa166141b266f92ad106cfc10b2081)`(`[`entropy_source_tests_rep_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__rep__t)` * state_rep,`[`entropy_source_tests_prop_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_entropy_source_common.md#structentropy__source__tests__prop__t)` * state_prop,uint8_t sample)` 

Convenience function to perform [entropy_source_test_rep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga6146122aa5bd1bdb036bd694638a7293) and [entropy_source_test_prop](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga6ba96558ee762ff620ab94e9cc5b7dd7).

This function will not block the sampling. It only indicates detected errors.

#### Parameters
* `state_rep` Repetition Count test structure of one entropy source. 

* `state_prop` Adaptive Proportion test structure of one entropy source. 

* `sample` Current sample.

#### Returns
ENTROPY_SOURCE_OK on success 

#### Returns
negative [entropy_source_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1ga403490f8fc59992806050b17172988f8) code on error

# struct `entropy_source_tests_rep_t` 

Data structure for Repetition Count Test (NIST SP 800-90B 4.4.1).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`old_sample`](#structentropy__source__tests__rep__t_1a482b5b338221ebe22470dd5ea8326724) | Preceding sample to compare for repetition.
`public uint16_t `[`cnt_rep`](#structentropy__source__tests__rep__t_1a131f03dea7b768d884b1b103bb0477a4) | Counter to count repetition.
`public uint8_t `[`c_rep`](#structentropy__source__tests__rep__t_1a97d54f9e916b3d92d8f0bbb71b962530) | Cutoff threshold.

## Members

#### `public uint8_t `[`old_sample`](#structentropy__source__tests__rep__t_1a482b5b338221ebe22470dd5ea8326724) 

Preceding sample to compare for repetition.

#### `public uint16_t `[`cnt_rep`](#structentropy__source__tests__rep__t_1a131f03dea7b768d884b1b103bb0477a4) 

Counter to count repetition.

#### `public uint8_t `[`c_rep`](#structentropy__source__tests__rep__t_1a97d54f9e916b3d92d8f0bbb71b962530) 

Cutoff threshold.

# struct `entropy_source_tests_prop_t` 

Data structure for Adaptive Proportion Test (NIST SP 800-90B 4.4.2).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`old_sample`](#structentropy__source__tests__prop__t_1af73732481ebab53e21ec7a00bff5ddac) | Preceding sample to compare for repetition.
`public uint16_t `[`cnt_prop`](#structentropy__source__tests__prop__t_1ad7118e41d6f62f4bf49760819c9ebfa1) | Counter to count proportion.
`public uint16_t `[`cnt_window`](#structentropy__source__tests__prop__t_1a5b07ff707087ed94904f9f336fd8a09c) | Counter to count window size.
`public uint16_t `[`c_prop`](#structentropy__source__tests__prop__t_1aa0fcec7687ac1974aff7d8b03a298273) | Cutoff threshold.

## Members

#### `public uint8_t `[`old_sample`](#structentropy__source__tests__prop__t_1af73732481ebab53e21ec7a00bff5ddac) 

Preceding sample to compare for repetition.

#### `public uint16_t `[`cnt_prop`](#structentropy__source__tests__prop__t_1ad7118e41d6f62f4bf49760819c9ebfa1) 

Counter to count proportion.

#### `public uint16_t `[`cnt_window`](#structentropy__source__tests__prop__t_1a5b07ff707087ed94904f9f336fd8a09c) 

Counter to count window size.

#### `public uint16_t `[`c_prop`](#structentropy__source__tests__prop__t_1aa0fcec7687ac1974aff7d8b03a298273) 

Cutoff threshold.

