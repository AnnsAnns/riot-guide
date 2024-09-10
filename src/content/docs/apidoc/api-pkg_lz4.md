---
title: api-pkg_lz4.md
description: api-pkg_lz4.md
---
# group `pkg_lz4` 

LZ4 is a fast compression library.

Note about memoryBy default, the LZ4 implementation allocates memory on the stack. This way compression/decompression functions are fast but this comes at the cost of RAM usage. It is important to allocated enough stack memory (at least 16384 bytes) to any thread using LZ4 primitives.

LicenseLicensed under BSD 2-clause.

**See also**: [https://github.com/lz4/lz4](https://github.com/lz4/lz4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

