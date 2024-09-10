---
title: api-drivers_periph_init.md
description: api-drivers_periph_init.md
---
# group `drivers_periph_init` 

Common static peripheral driver initialization.

This interface provides a central hook for any static peripheral initialization that might be needed. Typical drivers that need this are shared peripherals like SPI and I2C.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`periph_init`](#group__drivers__periph__init_1ga2cd4bdd061501508fe71aa672f690e81)`(void)`            | Common peripheral initialization function.

## Members

#### `public void `[`periph_init`](#group__drivers__periph__init_1ga2cd4bdd061501508fe71aa672f690e81)`(void)` 

Common peripheral initialization function.

This function should call all needed static initialization functions for configured peripheral drivers like SPI or I2C. This function SHOULD be called early in the boot process, e.g. before the actual kernel initialization is started.

This function is called by the boot up code. Application developers do not need to care. Developers porting RIOT to a new MCU must make sure that this function is called during boot up early on.

