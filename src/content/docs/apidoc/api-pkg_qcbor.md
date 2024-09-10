---
title: api-pkg_qcbor.md
description: api-pkg_qcbor.md
---
# group `pkg_qcbor` 

Small footprint CBOR encoder/decoder.

**See also**: [https://github.com/laurencelundblade/QCBOR](https://github.com/laurencelundblade/QCBOR)

UsageIt can be added as a package in the Makefile of the application:

```cpp
USEPKG += qcbor
```

Disabling featuresAs explained in the [README](https://github.com/laurencelundblade/QCBOR#disabling-features), qcbor provides options to disable some features and reduce code size. Just add them to `CFLAGS` in the application `Makefile` or directly to the command line. For example, in the command line:

```cpp
CFLAGS="-DQCBOR_DISABLE_INDEFINITE_LENGTH_STRINGS" BOARD=samr21-xpro make -C tests/pkg/qcbor
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

