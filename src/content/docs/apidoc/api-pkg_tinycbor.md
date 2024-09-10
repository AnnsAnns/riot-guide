---
title: api-pkg_tinycbor.md
description: api-pkg_tinycbor.md
---
# group `pkg_tinycbor` 

Provides the TinyCBOR (Concise Binary Object Representation) library.

**See also**: [https://github.com/intel/tinycbor/](https://github.com/intel/tinycbor/)

TinyCBORTinyCBOR is a CBOR encoder and decoder with a very small footprint, optimized for very fast operation.

The main encoder and decoder functions don't use dynamic memory allocation.

UsageJust add it as a package in your application's Makefile:

```cpp
USEPKG += tinycbor
```

TinyCBOR has optional floating point support. In RIOT-OS this is enabled by adding the following line to your application's Makefile:

```cpp
USEMODULE += tinycbor_float
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

