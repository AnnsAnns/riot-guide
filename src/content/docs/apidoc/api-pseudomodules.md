---
title: api-pseudomodules.md
description: api-pseudomodules.md
---
# group `pseudomodules` 

Modules influencing general RIOT behavior.

These are implemented in other modules or core components, and serve to enable certain functionality.

Here, pseudomodules are used instead of plain defines (that would be set using `CFLAGS += -DMODULE_NAME`) because they can participate in dependency resolution: they can pull in other modules.

Pseudomodules are often enabled automatically through module dependencies, but can also be enabled manually by stating `USEMODULE += module_name` in the Makefile.

The list of documented pseudomodules is not comprehensive by far; [makefiles/pseudomodules.inc.mk](#pseudomodules_8inc_8mk_source) lists all that are not defined inside their main modules. Not all modules listed there are "generic" pseudomodules; some are merely optional components of a particular subsystem and should be documented there.

See also [the documentation on pseudomodules in general](creating-modules.html#pseudomodules).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

