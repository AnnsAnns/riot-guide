---
title: api-pkg_libcose.md
description: api-pkg_libcose.md
---
# group `pkg_libcose` 

Constrained node COSE library.

**See also**: [https://github.com/bergzand/libcose](https://github.com/bergzand/libcose)

UsageAdd as a package in the Makefile of your application:

```cpp
USEPKG += libcose
```

The main consumers of libcose are other libraries or system components, for example [SUIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__suit).

The use of the library itself [is described in the libcose documentation](https://bergzand.github.io/libcose/), and some example code can be found in [`tests/pkg/libcose/`](https://github.com/RIOT-OS/RIOT/tree/master/tests/pkg/libcose).

BackendsThe libcose library does not implement cryptographic algorithms itself, but fans that out to other libraries (which are pulled into the dependency tree as packages) and exposes a consistent interface for the operations they provide.

Backends are selected by any of those pseudomodules:

```cpp
USEMODULE += libcose_crypt_hacl
USEMODULE += libcose_crypt_monocypher
USEMODULE += libcose_crypt_c25519
USEMODULE += libcose_crypt_tinycrypt
```

The selection of pseudomodules determines the available algorithms:

* [HACL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__hacl) and [Monocypher](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__monocypher) both provide ChaCha20-Poly1305 and Ed25519.

* [C25519](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__c25519) only provides the Ed25519 algorithm.

* [TINYCRYPT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tinycrypt) provides AES-CCM-16-64-128, AES-CCM-16-128-128 ECDSA and ES256 as well as EC NIST P-256 curve support.

Some backend may conflict, others might be complementary.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

