---
title: api-cpu_kinetis_timer.md
description: api-cpu_kinetis_timer.md
---
# group `cpu_kinetis_timer` 

Periodic Interrupt [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) (PIT) and Low-Power [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) (LPTMR) driver.

The PIT is a count down timer, in order to use it with riot-os a count up timer will be simulated. The PIT has four channels, each two channels are cascaded. The n-1 channel is a prescaler and the n channel a down counter. In standard configuration with four channels, two simulated count up timer are possible.

To counteract the effects of the asynchronous operation of the LPTMR, this driver uses the RTT as a time base which the LPTMR is referenced against. This method reduces the timing jitter caused by mixing the clock domains of the bus clock used by the CPU and the 32kHz reference clock for the LPTMR counter.

Timer configuration example (for periph_conf.h)#define PIT_NUMOF               (2U)
#define PIT_CONFIG {                 \
        {                            \
            .prescaler_ch = 0,       \
            .count_ch = 1,           \
        },                           \
        {                            \
            .prescaler_ch = 2,       \
            .count_ch = 3,           \
        },                           \
    }
#define LPTMR_NUMOF             (1U)
#define LPTMR_CONFIG { \
        { \
            .dev = LPTMR0, \
            .irqn = LPTMR0_IRQn, \
        } \
    }
#define TIMER_NUMOF             ((PIT_NUMOF) + (LPTMR_NUMOF))

#define PIT_BASECLOCK           (CLOCK_BUSCLOCK)
#define PIT_ISR_0               isr_pit1
#define PIT_ISR_1               isr_pit3
#define LPTMR_ISR_0             isr_lptmr0

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

