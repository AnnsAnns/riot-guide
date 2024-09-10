---
title: api-cpu_esp32_conf.md
description: api-cpu_esp32_conf.md
---
# group `cpu_esp32_conf` 

Compile-time configuration macros for ESP32x SoCs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PRINTF_BUFSIZ`](#group__cpu__esp32__conf_1ga6722ac5295714f38ca0aa57cdeb2a41e)            | Buffer size used for printf functions (maximum length of formatted output).
`define `[`PUF_SRAM_ATTRIBUTES`](#group__cpu__esp32__conf_1ga5821c413a94831dfa3f1b57000f9713e)            | Attribute for memory sections required by SRAM PUF.
`define `[`CPU_HAS_UNALIGNED_ACCESS`](#group__cpu__esp32__conf_1gad6e90572be9371b4d7e97dac8fe507c1)            | Support of unaligned access.

## Members

#### `define `[`PRINTF_BUFSIZ`](#group__cpu__esp32__conf_1ga6722ac5295714f38ca0aa57cdeb2a41e) 

Buffer size used for printf functions (maximum length of formatted output).

#### `define `[`PUF_SRAM_ATTRIBUTES`](#group__cpu__esp32__conf_1ga5821c413a94831dfa3f1b57000f9713e) 

Attribute for memory sections required by SRAM PUF.

#### `define `[`CPU_HAS_UNALIGNED_ACCESS`](#group__cpu__esp32__conf_1gad6e90572be9371b4d7e97dac8fe507c1) 

Support of unaligned access.

All ESP32x SoCs allow unaligned read/write access to the RAM as well as unaligned read access to the constant data in the flash, which is accessible via the data bus and mapped by the MMU into the data address space of the CPU.

