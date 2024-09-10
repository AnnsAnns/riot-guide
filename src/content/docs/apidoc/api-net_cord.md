---
title: api-net_cord.md
description: api-net_cord.md
---
# group `net_cord` 

Library for interacting as endpoint and lookup client with CoRE Resource Directories.

AboutThe `cord` ([Co]RE [R]esource [D]irectory) module provides endpoint and lookup client functionality for interacting with CoRE Resource Directories (RDs) as defined in `draft-ietf-core-resource-directory-27`.

**See also**: [https://tools.ietf.org/html/draft-ietf-core-resource-directory-27](https://tools.ietf.org/html/draft-ietf-core-resource-directory-27)

`draft-ietf-core-resource-directory-27` defines two types different roles for nodes when interacting with a RD:

* `endpoint`: registers and manages entries at the RD

* `client`: performs different kind of lookups

```cpp
            Registration     Lookup, Group
            Interface        Interfaces
+----+          |                 |
| EP |----      |                 |
+----+    ----  |                 |
              --|-    +------+    |
+----+          | ----|      |    |     +--------+
| EP | ---------|-----|  RD  |----|-----| Client |
+----+          | ----|      |    |     +--------+
              --|-    +------+    |
+----+    ----  |                 |
| EP |----      |                 |
+----+
```
 Figure copied form `draft-ietf-core-resource-directory-27`.

In the context of this module, we refer to these roles as `endpoint (ep)` and `lookup client (lc)`. This should hopefully prevent some confusion in conjunction with the `client` and `server` roles as defined by CoAP.

StructureThis module is structured in a number of submodules with goal to reflect the different roles described in `draft-ietf-core-resource-directory-27`:

* `cord_ep`: standard endpoint implementation following the rules as defined i.a. in sections 5.2, 5.3, A.1, and A.2

* `cord_epsim`: endpoint implementation following the simple registration procedure as defined in section 5.3.1

* `cord_lc`: lookup client implementation for querying information from an RD using the lookup and group interfaces (**NOT YET IMPLEMENTED**)

* `cord_config`: header file collection (default) configuration values used throughout this module

* `cord_common`: shared functionality used by the above submodules

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

