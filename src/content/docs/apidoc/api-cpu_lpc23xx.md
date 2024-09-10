---
title: api-cpu_lpc23xx.md
description: api-cpu_lpc23xx.md
---
# group `cpu_lpc23xx` 

NXP LPC23XX family specific code.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CPU_HAS_BACKUP_RAM`](#group__cpu__lpc23xx_1ga8538666a402dd8931568ed0b721e27ba)            | The CPU has RAM that is retained in the deepest sleep mode.
`public void `[`cpu_init_pll`](#group__cpu__lpc23xx_1gab9b2e2396d8111d48983fbe2a296a001)`(void)`            | Initialize the phase lock loop oscillator.
`public void `[`cpu_init_mam`](#group__cpu__lpc23xx_1gaa523584aee747fee553e4a11f1782476)`(void)`            | Initialize the Memory Acceleration Module.
`public void `[`lpc23xx_pclk_scale`](#group__cpu__lpc23xx_1ga9f507c69b61341dbf46cfb41ad0d29eb)`(uint32_t source,uint32_t target,uint32_t * pclksel,uint32_t * prescale)`            | Scale lpc23xx cpu speed.
`public void `[`cpu_init_clks`](#group__cpu__lpc23xx_1ga2cc357de715dacff99623954c8374a99)`(void)`            | Initialize lpc23xx cpu clocks.
`public bool `[`install_irq`](#group__cpu__lpc23xx_1gac0f1e1357620da12703b0f25891fcc1e)`(int IntNumber,void(*)(void) HandlerAddr,int Priority)`            | install lpc23xx irq
`public inline static bool `[`cpu_woke_from_backup`](#group__cpu__lpc23xx_1ga8de821ae21c5342752d2c365bb6318da)`(void)`            | Returns true if the CPU woke from Deep Sleep.
`public bool `[`cpu_backup_ram_is_initialized`](#group__cpu__lpc23xx_1ga90a6b6f68323fa5283277dcf6e1a017d)`(void)`            | Returns true if the backup RAM has been initialized.

## Members

#### `define `[`CPU_HAS_BACKUP_RAM`](#group__cpu__lpc23xx_1ga8538666a402dd8931568ed0b721e27ba) 

The CPU has RAM that is retained in the deepest sleep mode.

#### `public void `[`cpu_init_pll`](#group__cpu__lpc23xx_1gab9b2e2396d8111d48983fbe2a296a001)`(void)` 

Initialize the phase lock loop oscillator.

#### `public void `[`cpu_init_mam`](#group__cpu__lpc23xx_1gaa523584aee747fee553e4a11f1782476)`(void)` 

Initialize the Memory Acceleration Module.

#### `public void `[`lpc23xx_pclk_scale`](#group__cpu__lpc23xx_1ga9f507c69b61341dbf46cfb41ad0d29eb)`(uint32_t source,uint32_t target,uint32_t * pclksel,uint32_t * prescale)` 

Scale lpc23xx cpu speed.

#### `public void `[`cpu_init_clks`](#group__cpu__lpc23xx_1ga2cc357de715dacff99623954c8374a99)`(void)` 

Initialize lpc23xx cpu clocks.

#### `public bool `[`install_irq`](#group__cpu__lpc23xx_1gac0f1e1357620da12703b0f25891fcc1e)`(int IntNumber,void(*)(void) HandlerAddr,int Priority)` 

install lpc23xx irq

#### `public inline static bool `[`cpu_woke_from_backup`](#group__cpu__lpc23xx_1ga8de821ae21c5342752d2c365bb6318da)`(void)` 

Returns true if the CPU woke from Deep Sleep.

#### `public bool `[`cpu_backup_ram_is_initialized`](#group__cpu__lpc23xx_1ga90a6b6f68323fa5283277dcf6e1a017d)`(void)` 

Returns true if the backup RAM has been initialized.

