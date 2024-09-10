---
title: api-pkg_tinydtls.md
description: api-pkg_tinydtls.md
---
# group `pkg_tinydtls` 

Provides the Eclipse TinyDTLS to RIOT.

**See also**: [https://projects.eclipse.org/projects/iot.tinydtls](https://projects.eclipse.org/projects/iot.tinydtls)

UsageAdd as a package in the Makefile of your application:

```cpp
USEPKG += tinydtls
# a cryptographically secure implementation of PRNG is needed
USEMODULE += prng_sha1prng
```

Supported Cipher SuitesTinyDTLS only has support for `TLS_PSK_WITH_AES_128_CCM_8` and `TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8`. To choose which cipher suite to use, add one of the following to your Makefile:

For `TLS_PSK_WITH_AES_128_CCM_8` support (default): 
```cpp
CFLAGS += -DCONFIG_DTLS_PSK
```

For `TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8` support: 
```cpp
CFLAGS += -DCONFIG_DTLS_ECC
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

