---
title: api-cpu_qn908x_rtc.md
description: api-cpu_qn908x_rtc.md
---
# group `cpu_qn908x_rtc` 

NXP QN908x RTC driver.

The RTC block in the QN908x can be driven by the external 32.768 kHz crystal or by the internal 32 kHz RCO oscillator clock, whichever is selected as the `CLK_32K` clock source. The RTC has an internal "second counter" calibrated depending on the frequency of the clock source selected at the time the RTC clock is initialized by calling [rtc_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__rtc_1gacf9024748b942a7ae375cf75951afa9c).

The RTC function in this cpu doesn't have a match against a target value to generate an interrupt like the timer peripheral, instead, the alarm function in the [rtc.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#rtc_8h) interface is implemented by an interrupt generated every second which checks the target value in software. Keep in mind that while the RTC can operate while the cpu is the power-down 0 mode, using the alarm functionality during that time means that the cpu will wake up every second for a brief moment, potentially impacting the power consumption.

No RTC-specific configuration is necessary.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

