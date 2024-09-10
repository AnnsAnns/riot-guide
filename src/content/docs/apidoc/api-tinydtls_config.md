---
title: api-tinydtls_config.md
description: api-tinydtls_config.md
---
# group `tinydtls_config` 

Provides compile-time configuration for tinydtls.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_DTLS_PSK`](#group__tinydtls__config_1ga7ac84919785603eab7214aac2f2fb50d)            | Adds support for TLS_PSK_WITH_AES_128_CCM_8 when defined.
`define `[`CONFIG_DTLS_ECC`](#group__tinydtls__config_1gaa14f6ef50a5164f4b93d87354d54f0a1)            | Adds support for TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 when defined.
`define `[`CONFIG_DTLS_CONTEXT_MAX`](#group__tinydtls__config_1ga96ae6984cc3fbfc55ae1739390ebaa43)            | The maximum number of DTLS context at the same time.
`define `[`CONFIG_DTLS_HANDSHAKE_MAX`](#group__tinydtls__config_1ga0679c35a5e58d8c92c11ffc16807e28e)            | The maximum number of concurrent DTLS handshakes.
`define `[`DTLS_SECURITY_MAX`](#group__tinydtls__config_1gae85b04067ddc682d61c8d161b33afa2d)            | The maximum number of concurrently used cipher keys.
`define `[`DTLS_HASH_MAX`](#group__tinydtls__config_1ga34439d0499519f5d8dfa5442d3af52b6)            | The maximum number of hash functions that can be used in parallel.

## Members

#### `define `[`CONFIG_DTLS_PSK`](#group__tinydtls__config_1ga7ac84919785603eab7214aac2f2fb50d) 

Adds support for TLS_PSK_WITH_AES_128_CCM_8 when defined.

Activated by default if [CONFIG_DTLS_ECC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__tinydtls__config_1gaa14f6ef50a5164f4b93d87354d54f0a1) is not defined

#### `define `[`CONFIG_DTLS_ECC`](#group__tinydtls__config_1gaa14f6ef50a5164f4b93d87354d54f0a1) 

Adds support for TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 when defined.

#### `define `[`CONFIG_DTLS_CONTEXT_MAX`](#group__tinydtls__config_1ga96ae6984cc3fbfc55ae1739390ebaa43) 

The maximum number of DTLS context at the same time.

#### `define `[`CONFIG_DTLS_HANDSHAKE_MAX`](#group__tinydtls__config_1ga0679c35a5e58d8c92c11ffc16807e28e) 

The maximum number of concurrent DTLS handshakes.

#### `define `[`DTLS_SECURITY_MAX`](#group__tinydtls__config_1gae85b04067ddc682d61c8d161b33afa2d) 

The maximum number of concurrently used cipher keys.

#### `define `[`DTLS_HASH_MAX`](#group__tinydtls__config_1ga34439d0499519f5d8dfa5442d3af52b6) 

The maximum number of hash functions that can be used in parallel.

