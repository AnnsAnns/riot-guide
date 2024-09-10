---
title: api-pkg_c25519.md
description: api-pkg_c25519.md
---
# group `pkg_c25519` 

Curve25519 and Ed25519 for low-memory systems.

This package contains portable public-domain implementations of Daniel J. Bernstein's Curve255191 Diffie-Hellman function, and of the Ed25519 signature system. The memory consumption is low enough that they could be reasonably considered for most microcontroller applications. In particular, Curve25519 scalar multiplication uses less than half a kB of peak stack usage.

RequirementsC25519 requires around 1K of stack, so beware that you're allocating at least `THREAD_STACKSIZE_DEFAULT + 1K` bytes.

You can do it easily by adding:

```cpp
CFLAGS += '-DTHREAD_STACKSIZE_MAIN=(THREAD_STACKSIZE_DEFAULT + 1024)'
```

to your makefile.

UsageJust add it as a package in your application:

```cpp
USEPKG += c25519
```

**See also**: [https://www.dlbeer.co.nz/oss/c25519.html](https://www.dlbeer.co.nz/oss/c25519.html)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

