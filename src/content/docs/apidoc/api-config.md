---
title: api-config.md
description: api-config.md
---
# group `config` 

List of compile-time configurations.

This group contains all compile-time configurations macros that are intended to be modified by the user.

These configuration macros are defined within modules like this: 
```cpp
#ifndef SOME_CONFIGURATION_PARAM
#define SOME_CONFIGURATION_PARAM DEFAULT_VALUE
#endif
```
 Because of that, configurations can be altered e.g via CFLAGS (e.g `CFLAGS += -DSOME_CONFIGURATION_PARAM=SOME_VALUE`)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

