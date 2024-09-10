---
title: api-cpu_qn908x_wdt.md
description: api-cpu_qn908x_wdt.md
---
# group `cpu_qn908x_wdt` 

NXP QN908x Watchdog timer (WDT)

The Watchdog timer in the NXP QN908x starts disabled on reset: the clock bit `CLK_WDT_EN` is enabled in the `CLK_EN` register on reset so the timer is running but the interrupt and reset functions are disabled. However, after the read-only bootloader ROM in the QN908x transfer the control flow to the user application (the RIOT kernel) the Watchdog is enabled with a timeout of 10 seconds.

If your board does not include the `periph_wdt` module, the Watchdog will be disabled at `cpu_init()` time and there's no configuration necessary. However, if your board or application does include it, the Watchdog will be left configured with the 10 second timeout set by the Bootloader and you need to call `[wdt_setup_reboot()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga916389aa3426dd2e681895de51b60e1d)` or `[wdt_setup_reboot_with_callback()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1gaa8053b35c8fca081a813339029a483f4)` within the first 10 seconds.

The WDT block supports different clock sources which would be configured by the board since they depend on whether the optional crystals are populated in your board. Nevertheless, the millisecond values passed to `wdt_setup_reboot*` are internally converted to clock ticks using the clock configured at the time the function was called. `wdt_setup_reboot*()` can be called multiple times to change the WDT parameters or after changing the WDT clock source, but in any case `[wdt_start()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1gad903b703e17d721209d90540b7a9dd23)` must be called after it to start the WDT operation.

Once the WDT triggers, it is not possible to avoid the device reboot and calling [wdt_kick()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__wdt_1ga17282fdbc67f2150ddb989b910f751a1) from the WDT callback (if any) or after the callback was called will not have any effect. Note that, however, if the WDT callback returns before the configured CONFIG_WDT_WARNING_PERIOD the CPU will continue executing the code before the WDT interrupt occurred. If this is not desired, an infinite loop at the end of the WDT callback, after the safety operations have been performed is advisable.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

