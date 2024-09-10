---
title: api-cpu_cc26xx_cc13xx_definitions.md
description: api-cpu_cc26xx_cc13xx_definitions.md
---
# group `cpu_cc26xx_cc13xx_definitions` 

Common definitions for TI cc26xx/cc13xx family.

This module contains definitions common to all cc26xx/cc13xx cpus supported by RIOT: [TI CC26x0/CC13x0](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cc26x0__cc13x0), [TI CC26x2, CC13x2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__cc26x2__cc13x2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`UART0`](#group__cpu__cc26xx__cc13xx__definitions_1ga0508661f121639ffdee7de2353a0def2)            | UART0 register bank.
`define `[`UART1`](#group__cpu__cc26xx__cc13xx__definitions_1ga8d69bf04d07af4fbbab5a8bd291f65ff)            | UART1 register bank.
`struct `[`uart_regs_t`](#structuart__regs__t) | UART component registers.

## Members

#### `define `[`UART0`](#group__cpu__cc26xx__cc13xx__definitions_1ga0508661f121639ffdee7de2353a0def2) 

UART0 register bank.

#### `define `[`UART1`](#group__cpu__cc26xx__cc13xx__definitions_1ga8d69bf04d07af4fbbab5a8bd291f65ff) 

UART1 register bank.

# struct `uart_regs_t` 

UART component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`DR`](#structuart__regs__t_1ac118a932c4713fe414d6be3dfe104108) | Data.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`RSR`](#structuart__regs__t_1aa6b44e5147daff2e2b8d4d0fd0227d99) | Status.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`ECR`](#structuart__regs__t_1a220c8e9441f9e606a2dc4eb44a2f1070) | Error clear.
`public union uart_regs_t::@74 `[`@75`](#structuart__regs__t_1ac455865099a277cd70e027b66dd13359) | 
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`__reserved1`](#structuart__regs__t_1a3e87473ff5839fb53d7a6bea24c9c0f3) | Reserved.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`FR`](#structuart__regs__t_1abf25cf7e17a874dbbe071966f4bf43df) | flag
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`__reserved2`](#structuart__regs__t_1a77e49e630aa7ff0b20b9e9f24e034a63) | Reserved.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`IBRD`](#structuart__regs__t_1a49c61b4492e0422d7d043c2522c5f148) | Integer baud-rate divisor.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`FBRD`](#structuart__regs__t_1a1fcfac76a420f6ddea37e049957e1c11) | Fractional baud-rate divisor.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`LCRH`](#structuart__regs__t_1a4024b8a7341f1762c55ff63f9f4d4e49) | Line control.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`CTL`](#structuart__regs__t_1afaff09c4076d4f93e123b3cdca2223db) | Control.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`IFLS`](#structuart__regs__t_1a113c418aff320622c2cdc6fea2293951) | Interrupt fifo level select.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`IMSC`](#structuart__regs__t_1a0e2d52efbfb4ba97e252932b10306875) | Interrupt mask set/clear.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`RIS`](#structuart__regs__t_1ab032b0c793fd09b6c4ed6aed732b240b) | Raw interrupt status.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`MIS`](#structuart__regs__t_1a5aa863b17e3d9eb76edcdf3d5861c68f) | Masked interrupt status.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`ICR`](#structuart__regs__t_1a0f48217e8f0fc177360611488241c5ee) | Interrupt clear.
`public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`DMACTL`](#structuart__regs__t_1a2e379bf9db1fb8e003a3e607892de16e) | MMA control.

## Members

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`DR`](#structuart__regs__t_1ac118a932c4713fe414d6be3dfe104108) 

Data.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`RSR`](#structuart__regs__t_1aa6b44e5147daff2e2b8d4d0fd0227d99) 

Status.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`ECR`](#structuart__regs__t_1a220c8e9441f9e606a2dc4eb44a2f1070) 

Error clear.

#### `public union uart_regs_t::@74 `[`@75`](#structuart__regs__t_1ac455865099a277cd70e027b66dd13359) 

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`__reserved1`](#structuart__regs__t_1a3e87473ff5839fb53d7a6bea24c9c0f3) 

Reserved.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`FR`](#structuart__regs__t_1abf25cf7e17a874dbbe071966f4bf43df) 

flag

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`__reserved2`](#structuart__regs__t_1a77e49e630aa7ff0b20b9e9f24e034a63) 

Reserved.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`IBRD`](#structuart__regs__t_1a49c61b4492e0422d7d043c2522c5f148) 

Integer baud-rate divisor.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`FBRD`](#structuart__regs__t_1a1fcfac76a420f6ddea37e049957e1c11) 

Fractional baud-rate divisor.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`LCRH`](#structuart__regs__t_1a4024b8a7341f1762c55ff63f9f4d4e49) 

Line control.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`CTL`](#structuart__regs__t_1afaff09c4076d4f93e123b3cdca2223db) 

Control.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`IFLS`](#structuart__regs__t_1a113c418aff320622c2cdc6fea2293951) 

Interrupt fifo level select.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`IMSC`](#structuart__regs__t_1a0e2d52efbfb4ba97e252932b10306875) 

Interrupt mask set/clear.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`RIS`](#structuart__regs__t_1ab032b0c793fd09b6c4ed6aed732b240b) 

Raw interrupt status.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`MIS`](#structuart__regs__t_1a5aa863b17e3d9eb76edcdf3d5861c68f) 

Masked interrupt status.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`ICR`](#structuart__regs__t_1a0f48217e8f0fc177360611488241c5ee) 

Interrupt clear.

#### `public `[`reg32_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__CC13x2__cmsis_1ga0e1b07bbc5af28a654767bb3dfb132ad)` `[`DMACTL`](#structuart__regs__t_1a2e379bf9db1fb8e003a3e607892de16e) 

MMA control.

