---
title: api-pkg_lwext4.md
description: api-pkg_lwext4.md
---
# group `pkg_lwext4` 

Provides a lightweight implementation of the ext2/3/4 filesystem with optional journaling transactions & recovery.

Lwext4 is an excellent choice for SD/MMC card, USB flash drive or any other wear leveled memory types. However it is not good for raw flash devices.

Some of the source files are licensed under GPLv2. It makes whole lwext4 GPLv2 licensed. To use library as a BSD3, GPLv2 licensed source files must be disabled. To do so, enable the `lwext4_no_gpl` module. This will disable support for extends and extended attributes.

**See also**: [https://github.com/gkostka/lwext4](https://github.com/gkostka/lwext4)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

