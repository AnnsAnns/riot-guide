---
title: api-cpu_native.md
description: api-cpu_native.md
---
# group `cpu_native` 

Native CPU specific code.

The native CPU uses system calls to simulate hardware access.

CPU abstraction for the native port

Ludwig Knüpfer [ludwig.knuepfer@fu-berlin.de](mailto:ludwig.knuepfer@fu-berlin.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CPU_HAS_UNALIGNED_ACCESS`](#group__cpu__native_1gad6e90572be9371b4d7e97dac8fe507c1)            | The CPU supports unaligned memory access.
`public inline static uintptr_t `[`cpu_get_caller_pc`](#group__cpu__native_1ga04f1d3111666144deedb619ac50bbdf7)`(void)`            | Gets the address the callee will return to.

## Members

#### `define `[`CPU_HAS_UNALIGNED_ACCESS`](#group__cpu__native_1gad6e90572be9371b4d7e97dac8fe507c1) 

The CPU supports unaligned memory access.

Even if the underlying architecture does not support it, the kernel will take care of it.

#### `public inline static uintptr_t `[`cpu_get_caller_pc`](#group__cpu__native_1ga04f1d3111666144deedb619ac50bbdf7)`(void)` 

Gets the address the callee will return to.

