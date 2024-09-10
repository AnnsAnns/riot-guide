---
title: api-cpu_riscv_common.md
description: api-cpu_riscv_common.md
---
# group `cpu_riscv_common` 

Common implementations and headers for the RISC-V CPU.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CPU_COMMON_H`](#group__cpu__riscv__common_1ga6cc69693461b05c8d4be9e2c154ab712)            | 
`public void `[`riscv_init`](#group__cpu__riscv__common_1gab3a8077d2f287f222824800d36ec7551)`(void)`            | Initialize rv32i specific core parts of the CPU.
`public void `[`riscv_fpu_init`](#group__cpu__riscv__common_1gac0b7f2f38a96f3fb3a8122e74bbae931)`(void)`            | Enable the rv32i FPU when present.
`public void `[`riscv_irq_init`](#group__cpu__riscv__common_1gadf5be9ff5c1c41f6a8c38f38314c571a)`(void)`            | Initialization of the interrupt controller.
`public inline static uintptr_t `[`cpu_get_caller_pc`](#group__cpu__riscv__common_1ga04f1d3111666144deedb619ac50bbdf7)`(void)`            | Gets the last instruction's address.
`public inline static void `[`cpu_reg_enable_bits`](#group__cpu__riscv__common_1ga05e4e756515bbb9f2f1236ee2abe80ee)`(volatile uint32_t * reg,uint32_t mask)`            | Convenience function to set bit flags in a register.
`public inline static void `[`cpu_reg_disable_bits`](#group__cpu__riscv__common_1gac58eab086902719c0a1b9574b747edbf)`(volatile uint32_t * reg,uint32_t mask)`            | Convenience function to clear bit flags in a register.

## Members

#### `define `[`CPU_COMMON_H`](#group__cpu__riscv__common_1ga6cc69693461b05c8d4be9e2c154ab712) 

#### `public void `[`riscv_init`](#group__cpu__riscv__common_1gab3a8077d2f287f222824800d36ec7551)`(void)` 

Initialize rv32i specific core parts of the CPU.

Initialized the interrupt controller and the enables the FPU if present

#### `public void `[`riscv_fpu_init`](#group__cpu__riscv__common_1gac0b7f2f38a96f3fb3a8122e74bbae931)`(void)` 

Enable the rv32i FPU when present.

#### `public void `[`riscv_irq_init`](#group__cpu__riscv__common_1gadf5be9ff5c1c41f6a8c38f38314c571a)`(void)` 

Initialization of the interrupt controller.

#### `public inline static uintptr_t `[`cpu_get_caller_pc`](#group__cpu__riscv__common_1ga04f1d3111666144deedb619ac50bbdf7)`(void)` 

Gets the last instruction's address.

> Todo: : Not supported

#### `public inline static void `[`cpu_reg_enable_bits`](#group__cpu__riscv__common_1ga05e4e756515bbb9f2f1236ee2abe80ee)`(volatile uint32_t * reg,uint32_t mask)` 

Convenience function to set bit flags in a register.

#### Parameters
* `reg` register to set bits in 

* `mask` bits to set in the register

#### `public inline static void `[`cpu_reg_disable_bits`](#group__cpu__riscv__common_1gac58eab086902719c0a1b9574b747edbf)`(volatile uint32_t * reg,uint32_t mask)` 

Convenience function to clear bit flags in a register.

#### Parameters
* `reg` register to clear bits in 

* `mask` bits to clear in the register

