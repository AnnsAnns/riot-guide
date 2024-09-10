---
title: api-pkg_hacl.md
description: api-pkg_hacl.md
---
# group `pkg_hacl` 

Support for HACL* (High Assurance Cryptographic Library)

HACL* RIOT packageUsageJust add it as a package in your application:

```cpp
USEPKG += hacl
```

And don't forget to include the header for the HACL* standard API:

```cpp
#include <HACL.h>
```

or for HACL*'s NaCl-compatible API:

```cpp
#include <haclnacl.h>
```

**See also**: [https://github.com/RIOT-OS-pkgmirror/hacl-c_archived](https://github.com/RIOT-OS-pkgmirror/hacl-c_archived)

**See also**: [https://hacl-star.github.io/](https://hacl-star.github.io/)

**See also**: [https://github.com/project-everest/hacl-star/](https://github.com/project-everest/hacl-star/)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

