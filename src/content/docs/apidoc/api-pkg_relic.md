---
title: api-pkg_relic.md
description: api-pkg_relic.md
---
# group `pkg_relic` 

Provides the Relic cryptographic toolkit to RIOT.

Configuration OptionsYou can pass along configuration flags for RELIC from your project makefile via: 
```cpp
export RELIC_CONFIG_FLAGS=-DARCH=NONE -DQUIET=off -DWORD=32 -DFP_PRIME=255 -DWITH="BN;MD;DV;FP;EP;CP;BC;EC" -DSEED=ZERO
```

This should happen before the `USEPKG` line.

UsageJust put 
```cpp
USEPKG += relic
```
 in your Makefile and 
```cpp
#include <relic.h>
```
 in your `main.c`.

**See also**: [https://github.com/relic-toolkit/relic](https://github.com/relic-toolkit/relic)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

