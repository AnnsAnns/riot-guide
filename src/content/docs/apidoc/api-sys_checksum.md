---
title: api-sys_checksum.md
description: api-sys_checksum.md
---
# group `sys_checksum` 

Checksum function libraries.

This module provides a number of checksum functions. Most notably is the [CRC16-CCITT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt) and the [CRC16 (lightweight)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__ucrc16) modules which provide support for the CRC16 checksum.

[CRC16-CCITT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt) only provides an implementation of the CCITT flavor of CRC16 (polynomial $ x^{16} + x^{12} + x^{5} + 1 $) for big-endian numbers with starting seed `0x1d0f` (though others can be provided), while [CRC16 (lightweight)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__ucrc16) is more generalized, since it takes the hexadecimal representation of the polynomial as a parameter and provides functions and standardized polynomials for both big- and little-endian numbers.

The caveat of [CRC16 (lightweight)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__ucrc16) is that it is significantly slower (approximately factor 8) than [CRC16-CCITT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt) since the latter is able to calculate the checksum byte-wise, while the first calculates needs to calculate it bit-wise. [CRC16-CCITT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__crc16__ccitt) achieves this advantage by using a look-up table that provides the checksum for every possible byte-value. It thus trades of memory against speed. If your platform is rather small equipped in memory you should prefer the [CRC16 (lightweight)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__checksum__ucrc16) version.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

