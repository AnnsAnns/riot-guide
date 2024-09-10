---
title: api-drivers_periph_pm.md
description: api-drivers_periph_pm.md
---
# group `drivers_periph_pm` 

The kernels power management interface.

> This interface *must* be implemented for every platform in RIOT.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`pm_reboot`](#group__drivers__periph__pm_1gacb69a9ff0accfb5af93969323355638b)`(void)`            | Reboot MCU.
`public void `[`pm_off`](#group__drivers__periph__pm_1ga077d22f0521fd08aaf552e5d7775fec9)`(void)`            | Turn off MCU completely.
`public void `[`pm_set_lowest`](#group__drivers__periph__pm_1ga3cfb539da19d37887bd65c15f9ac1342)`(void)`            | Switches the MCU to the lowest possible power mode.

## Members

#### `public void `[`pm_reboot`](#group__drivers__periph__pm_1gacb69a9ff0accfb5af93969323355638b)`(void)` 

Reboot MCU.

#### `public void `[`pm_off`](#group__drivers__periph__pm_1ga077d22f0521fd08aaf552e5d7775fec9)`(void)` 

Turn off MCU completely.

#### `public void `[`pm_set_lowest`](#group__drivers__periph__pm_1ga3cfb539da19d37887bd65c15f9ac1342)`(void)` 

Switches the MCU to the lowest possible power mode.

This function will be called by the idle thread.

