---
title: api-cpu_kinetis_pwm.md
description: api-cpu_kinetis_pwm.md
---
# group `cpu_kinetis_pwm` 

Kinetis PWM driver.

PWM configuration example (for periph_conf.h)#define PWM_NUMOF           (1U)
#define PWM_0_EN            1
#define PWM_MAX_CHANNELS    2

#define PWM_0_DEV           FTM0
#define PWM_0_CHANNELS      2
#define PWM_0_CLK           (48e6)
#define PWM_0_CLKEN()       (SIM->SCGC6 |= (SIM_SCGC6_FTM0_MASK))
#define PWM_0_CLKDIS()      (SIM->SCGC6 &= ~(SIM_SCGC6_FTM0_MASK))
#define PWM_0_PORT_CLKEN()  (SIM->SCGC5 |= (SIM_SCGC5_PORTD_MASK | SIM_SCGC5_PORTA_MASK))

#define PWM_0_PIN_CH0       4
#define PWM_0_FTMCHAN_CH0   1
#define PWM_0_PORT_CH0      PORTA
#define PWM_0_PIN_AF_CH0    3

#define PWM_0_PIN_CH1       4
#define PWM_0_FTMCHAN_CH1   4
#define PWM_0_PORT_CH1      PORTD
#define PWM_0_PIN_AF_CH1    4

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

