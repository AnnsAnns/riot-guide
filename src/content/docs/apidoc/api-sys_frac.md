---
title: api-sys_frac.md
description: api-sys_frac.md
---
# group `sys_frac` 

This header provides some functions for scaling integers by fractions, while preserving as many bits as possible.

The implementation requires that [frac_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfrac__t) is initialized properly, either by calling [frac_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#frac_8h_1a9bc15fd5646240db351f4c49d37fc05b), which will compute the algorithm parameters at runtime, or via a precomputed initializer.

Precomputing the [frac_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structfrac__t) values can be done via the application found in `tests/sys/frac-config` in the RIOT tree.

Numeric precisionThe algorithm will under certain circumstances give an incorrectly rounded result, more precisely, the result may sometimes be rounded up instead of rounded down when the product in the numerator, $p = x * num$, would result in $p >= 2^{31}$. Fortunately, the relative error of this rounding mistake is small.

This tradeoff is a design choice to make the algorithm faster.

**See also**: Libdivide homepage: [http://libdivide.com/](http://libdivide.com/)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

