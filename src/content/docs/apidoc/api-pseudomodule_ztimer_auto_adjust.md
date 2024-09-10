---
title: api-pseudomodule_ztimer_auto_adjust.md
description: api-pseudomodule_ztimer_auto_adjust.md
---
# group `pseudomodule_ztimer_auto_adjust` 

A module to set on init ztimer->adjust_sleep/adjust_set values.

When this module is active, then on init if no CONFIG_ZTIMER_USEC_ADJUST_% values are set for the BOARD correction values adjust_sleep and adjust_set will be calculated in set for the required clocks.

Note that some BOARDs clocks require a startup time to get accuarate values, a configurable [CONFIG_ZTIMER_AUTO_ADJUST_SETTLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#sys_2include_2ztimer_2config_8h_1a4b30d2f1413385ff95ff900d467603eb) value can be set for this.

Alternatively CONFIG_ZTIMER_USEC_ADJUST_% values can be set in the BOARDs configuration header board.h. These can be found out by running tests/sys/ztimer_overhead

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

