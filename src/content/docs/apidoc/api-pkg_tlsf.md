---
title: api-pkg_tlsf.md
description: api-pkg_tlsf.md
---
# group `pkg_tlsf` 

TLSF is a general purpose dynamic memory allocator specifically designed to meet real-time requirements:

**See also**: [http://www.gii.upv.es/tlsf/](http://www.gii.upv.es/tlsf/)

**See also**: [https://github.com/mattconte/tlsf](https://github.com/mattconte/tlsf)

TLSF provides an implementation of malloc/realloc/free/etc with the following characteristics:

* O(1) Performance

* Works on a user supplied block of memory instead of a global heap.

* Efficient both in terms of memory overhead and processor time.

* Low fragmentation.

Additionally, a contrib package 
**See also**: [TLSF-based malloc.](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__tlsf__malloc) implements a global heap allocator with the standard malloc/free functions.

> Todo: The tlsf code uses printf to report errors. This is not OK.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

