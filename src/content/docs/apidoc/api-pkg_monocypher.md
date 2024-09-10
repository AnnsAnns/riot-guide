---
title: api-pkg_monocypher.md
description: api-pkg_monocypher.md
---
# group `pkg_monocypher` 

Provides the Monocypher cryptographic library.

Monocypher RIOT packageMonocypher is a high performance cryptographic library. It provides functions for authenticated encryption, hashing, password key derivation, key exchange, and public key signatures.

You can find the API and more information [here](https://monocypher.org/manual)

RequirementsMonocypher only supports 32bit platforms.

Monocypher requires around 4K of stack space depending slightly on the platform, so beware that you're allocating at least `THREAD_STACKSIZE_DEFAULT + 4096` bytes.

You can do it easily by adding:

```cpp
CFLAGS += '-DTHREAD_STACKSIZE_MAIN=(THREAD_STACKSIZE_DEFAULT + 4096)'
```

to your makefile.

UsageJust add it as a package in your application:

```cpp
USEPKG += monocypher
```

**See also**: [https://monocypher.org/](https://monocypher.org/)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

