---
title: api-pkg_mbedtls_config.md
description: api-pkg_mbedtls_config.md
---
# group `pkg_mbedtls_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_MBEDTLS_SELF_TEST`](#group__pkg__mbedtls__config_1gae9255b939e7b4d2a16992c544a9e729a)            | Enable the checkup functions (*_self_test).
`define `[`CONFIG_MBEDTLS_ENTROPY_C`](#group__pkg__mbedtls__config_1gaa837e856467644ccab713c9ad87630d7)            | Enable the platform-specific entropy code.
`define `[`CONFIG_MBEDTLS_SHA256_C`](#group__pkg__mbedtls__config_1ga95b61e7d78f54573c17b639b20db5e7d)            | Enable the SHA-224 and SHA-256 cryptographic hash algorithms.
`define `[`CONFIG_MBEDTLS_SHA256_ALT`](#group__pkg__mbedtls__config_1ga63a139cf226dbc4382eec140248a7328)            | MBEDTLS__MODULE_NAME__ALT: Enable a macro to let mbed TLS use your alternate core implementation of a symmetric crypto, an arithmetic or hash module (e.g.
`define `[`CONFIG_MBEDTLS_THREADING_C`](#group__pkg__mbedtls__config_1ga36247d44594bb0cf23a9cd9fe201f147)            | Enable the threading abstraction layer.
`define `[`CONFIG_MBEDTLS_THREADING_ALT`](#group__pkg__mbedtls__config_1ga2b38401bd5b2d2db76271004f4107db1)            | Provide your own alternate threading implementation.
`define `[`CONFIG_MBEDTLS_ENTROPY_HARDWARE_ALT`](#group__pkg__mbedtls__config_1gadad6f9964d64cffad67fa027d6f4cb24)            | Enable this macro to let mbed TLS use your own implementation of a hardware entropy collector.
`define `[`CONFIG_MBEDTLS_NO_PLATFORM_ENTROPY`](#group__pkg__mbedtls__config_1ga8832548de2c09437cbb588ad692e4667)            | Do not use built-in platform entropy functions.
`define `[`CONFIG_MBEDTLS_ENTROPY_FORCE_SHA256`](#group__pkg__mbedtls__config_1ga885fa613d0f71880af132952d5057f55)            | Force the entropy accumulator to use a SHA-256 accumulator instead of the default SHA-512 based one (if both are available).

## Members

#### `define `[`CONFIG_MBEDTLS_SELF_TEST`](#group__pkg__mbedtls__config_1gae9255b939e7b4d2a16992c544a9e729a) 

Enable the checkup functions (*_self_test).

#### `define `[`CONFIG_MBEDTLS_ENTROPY_C`](#group__pkg__mbedtls__config_1gaa837e856467644ccab713c9ad87630d7) 

Enable the platform-specific entropy code.

Module: mbedtls/library/entropy.c Caller:

Requires: MBEDTLS_SHA512_C or MBEDTLS_SHA256_C

This module provides a generic entropy pool

#### `define `[`CONFIG_MBEDTLS_SHA256_C`](#group__pkg__mbedtls__config_1ga95b61e7d78f54573c17b639b20db5e7d) 

Enable the SHA-224 and SHA-256 cryptographic hash algorithms.

Module: mbedtls/library/sha256.c Caller: mbedtls/library/entropy.c mbedtls/library/md.c mbedtls/library/ssl_cli.c mbedtls/library/ssl_srv.c mbedtls/library/ssl_tls.c

This module adds support for SHA-224 and SHA-256. This module is required for the SSL/TLS 1.2 PRF function.

#### `define `[`CONFIG_MBEDTLS_SHA256_ALT`](#group__pkg__mbedtls__config_1ga63a139cf226dbc4382eec140248a7328) 

MBEDTLS__MODULE_NAME__ALT: Enable a macro to let mbed TLS use your alternate core implementation of a symmetric crypto, an arithmetic or hash module (e.g.

platform specific assembly optimized implementations). Keep in mind that the function prototypes should remain the same.

This replaces the whole module. If you only want to replace one of the functions, use one of the MBEDTLS__FUNCTION_NAME__ALT flags.

Example: In case you enable MBEDTLS_SHA256_ALT, mbed TLS will no longer provide the "struct mbedtls_sha256_context" definition and omit the base function declarations and implementations. "sha256_alt.h" will be included from "sha256.h" to include the new function definitions.

Enable a macro to enable alternate implementation of the corresponding module.

MD2, MD4, MD5, ARC4, DES and SHA-1 are considered weak and their use constitutes a security risk. If possible, we recommend avoiding dependencies on them, and considering stronger message digests and ciphers instead.

#### `define `[`CONFIG_MBEDTLS_THREADING_C`](#group__pkg__mbedtls__config_1ga36247d44594bb0cf23a9cd9fe201f147) 

Enable the threading abstraction layer.

By default mbed TLS assumes it is used in a non-threaded environment or that contexts are not shared between threads. If you do intend to use contexts between threads, you will need to enable this layer to prevent race conditions. See also our Knowledge Base article about threading: [https://tls.mbed.org/kb/development/thread-safety-and-multi-threading](https://tls.mbed.org/kb/development/thread-safety-and-multi-threading)

This allows different threading implementations (self-implemented or provided).

You will have to enable either MBEDTLS_THREADING_ALT or MBEDTLS_THREADING_PTHREAD.

Enable this layer to allow use of mutexes within mbed TLS

In RIOT, we enable this layer by default and utilize MBEDTLS_THREADING_ALT with RIOT mutexes.

#### `define `[`CONFIG_MBEDTLS_THREADING_ALT`](#group__pkg__mbedtls__config_1ga2b38401bd5b2d2db76271004f4107db1) 

Provide your own alternate threading implementation.

Requires: MBEDTLS_THREADING_C

This to allows your own alternate threading implementation.

#### `define `[`CONFIG_MBEDTLS_ENTROPY_HARDWARE_ALT`](#group__pkg__mbedtls__config_1gadad6f9964d64cffad67fa027d6f4cb24) 

Enable this macro to let mbed TLS use your own implementation of a hardware entropy collector.

Your function must be called mbedtls_hardware_poll(), have the same prototype as declared in entropy_poll.h, and accept NULL as first argument.

Enable to use your own hardware entropy collector.

#### `define `[`CONFIG_MBEDTLS_NO_PLATFORM_ENTROPY`](#group__pkg__mbedtls__config_1ga8832548de2c09437cbb588ad692e4667) 

Do not use built-in platform entropy functions.

This is useful if your platform does not support standards like the /dev/urandom or Windows CryptoAPI.

Disable the built-in platform entropy functions.

#### `define `[`CONFIG_MBEDTLS_ENTROPY_FORCE_SHA256`](#group__pkg__mbedtls__config_1ga885fa613d0f71880af132952d5057f55) 

Force the entropy accumulator to use a SHA-256 accumulator instead of the default SHA-512 based one (if both are available).

Requires: MBEDTLS_SHA256_C

On 32-bit systems SHA-256 can be much faster than SHA-512. Use this option if you have performance concerns.

This option is only useful if both MBEDTLS_SHA256_C and MBEDTLS_SHA512_C are defined. Otherwise the available hash module is used.

