---
title: api-pkg_libhydrogen.md
description: api-pkg_libhydrogen.md
---
# group `pkg_libhydrogen` 

A lightweight, secure, easy-to-use crypto library suitable for constrained environments.

LibHydrogen RIOT packageThe Hydrogen library is a small, easy-to-use, hard-to-misuse cryptographic library. It provides functions for random numbers, generic hashing, key derivation, secret-key encryption, public-key signatures, key exchange and password hashing.

Full documentation can be found on the [LibHydrogen wiki](https://github.com/jedisct1/libhydrogen/wiki).

UsageAdd it as a package in your application's Makefile:

```cpp
USEPKG += libhydrogen
```

Include the LibHydrogen header in your code:

```cpp
#include "hydrogen.h"
```

**See also**: [https://github.com/jedisct1/libhydrogen](https://github.com/jedisct1/libhydrogen)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

