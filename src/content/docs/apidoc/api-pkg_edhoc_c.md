---
title: api-pkg_edhoc_c.md
description: api-pkg_edhoc_c.md
---
# group `pkg_edhoc_c` 

Support for Ephemeral Diffie-Hellman Over COSE (EDHOC)

**See also**: [https://github.com/openwsn-berkeley/EDHOC-C](https://github.com/openwsn-berkeley/EDHOC-C)

EDHOC-C RIOT packageUsageJust add it as a package in your application:

```cpp
USEPKG += edhoc-c
```

BackendsEDHOC-C does not implement crypographic algorithms, instead it uses external libraries as a backend. Libraries that provide all requirements are currently [tinycrypt crypto library](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tinycrypt) and [WolfSSL Embedded SSL/TLS library](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__wolfssl). Pick one through the following module:

```cpp
USEMODULE += edhoc-c_crypto_wolfssl
USEMODULE += edhoc-c_crypto_tinycrypt
```

EDHOC-C does not implement a CBOR library either, currently the only possible backend is [NanoCBOR library](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__nanocbor). Select it through the following module:

```cpp
USEMODULE += edhoc-c_cbor_nanocbor
```

Don't forget to include the header for the EDHOC-C public API:

```cpp
#include <edhoc/edhoc.h>
```

Current Support

* EDHOC-C supports [HACL* High Assurance Cryptographic Library](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__hacl) as a crypto backend but it's using a different version than the one supported currently in RIOT

* x509 certificates require MBED-TLS, which is currently not supported in RIOT so only RPK and CBOR certificates are supported.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

