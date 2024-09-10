---
title: api-cpu_kinetis_wdog.md
description: api-cpu_kinetis_wdog.md
---
# group `cpu_kinetis_wdog` 

Driver for Freescale WDOG device.

There are different implementations of the Watchdog devices. Currently, it is only possible to turn the Watchdog off. It supports two types: an advanced Watchdog, mostly found on Kinetis MCUs with Cortex-M4 inside and a simpler COP Watchdog.

WDOG Configuration Example (for periph_conf.h)The driver attempts to determine the type of the WDOG. Also you can force the use of advanced WDOG: #define KINETIS_WDOG_ADVANCED    1
 Or the use of COP WDOG: #define KINETIS_WDOG_ADVANCED    0

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`wdog_disable`](#group__cpu__kinetis__wdog_1ga0b1954623f258c06db648d57b4871392)`(void)`            | Disable hardware watchdog.

## Members

#### `public void `[`wdog_disable`](#group__cpu__kinetis__wdog_1ga0b1954623f258c06db648d57b4871392)`(void)` 

Disable hardware watchdog.

