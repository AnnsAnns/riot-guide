---
title: api-cpu_qn908x_timer.md
description: api-cpu_qn908x_timer.md
---
# group `cpu_qn908x_timer` 

NXP QN908x timer driver.

The QN908x have 4 standard counter/timers (CTIMER). These timers allow to count clock cycles from the APB clock with a 32-bit prescaler, effectively dividing the APB clock frequency by a configurable number up to 2^32, allowing a great range of timer frequencies selected at runtime. Each timer has 4 independent channels to match against which can generate an interrupt.

TODO: These CTIMERs and the SCT timers can both be used as PWM as well, with different set of capabilities. Boards should be able to split these CTIMER and SCT blocks between pwm and timer functions.

Timer configuration example (for periph_conf.h)#define TIMER_NUMOF           4

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

