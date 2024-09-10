---
title: api-sys_entropy_source_config.md
description: api-sys_entropy_source_config.md
---
# group `sys_entropy_source_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_ENTROPY_SOURCE_TESTS_WIN`](#group__sys__entropy__source__config_1ga4ab54924ce5c8ac67ea6ccd7b72ec1cd)            | Window size for Adaptive Proportion Test (NIST SP 800-90B 4.4.2).
`define `[`CONFIG_ENTROPY_SOURCE_NEUMANN_ABORT`](#group__sys__entropy__source__config_1ga9f26353d163eaf6b6cb96f0dc7393e72)            | Abort factor for von Neumann extractor.

## Members

#### `define `[`CONFIG_ENTROPY_SOURCE_TESTS_WIN`](#group__sys__entropy__source__config_1ga4ab54924ce5c8ac67ea6ccd7b72ec1cd) 

Window size for Adaptive Proportion Test (NIST SP 800-90B 4.4.2).

In (NIST SP 800-90B 4.4.2) a window size of 512 samples is recommended for non-binary sources. Typically, RIOT use cases will not request as many samples, thus, it might be worth considering a smaller window size so the test is more likely to complete a cycle. It is noteworthy that a cutoff value calculated by [entropy_source_test_prop_cutoff](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__entropy__source__common_1gadc6b5a9fa06e6dbcb6f69fc9a2b4ed85) that is greater than the window size may lead to undetected errors.

#### `define `[`CONFIG_ENTROPY_SOURCE_NEUMANN_ABORT`](#group__sys__entropy__source__config_1ga9f26353d163eaf6b6cb96f0dc7393e72) 

Abort factor for von Neumann extractor.

The algorithms runs as long as no bit changes appear in subsequent samples. This define adds a factor that aborts the procedure after (factor * requested length) samples.

