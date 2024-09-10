---
title: api-cpu_kinetis_rtc.md
description: api-cpu_kinetis_rtc.md
---
# group `cpu_kinetis_rtc` 

Kinetis RTC driver.

RTC is clocked by a 32.768 kHz clock.

Please note the manual of your MCU or SiP for the clock setting for the RTC module. After initialization Time Seconds Register (TSR) increments once a second. The TSR (also TAR) value will be converted to the struct tm and back with the help of stdlib functions that are defined in [time.h](#time_8h_source). The driver supports alarm, it is stored in the Time Alarm Registers (TAR) and the unit is seconds.

RTC configuration example (for periph_conf.h)#define RTC_DEV             RTC
#define RTC_UNLOCK()        (SIM->SCGC6 |= (SIM_SCGC6_RTC_MASK))
 Optional settings to configure internal load capacitors (see reference manual): #define RTC_LOAD_CAP_BITS   0

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

