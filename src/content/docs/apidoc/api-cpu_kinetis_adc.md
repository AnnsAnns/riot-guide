---
title: api-cpu_kinetis_adc.md
description: api-cpu_kinetis_adc.md
---
# group `cpu_kinetis_adc` 

Kinetis ADC driver.

ADC configuration example (for periph_conf.h)static const adc_conf_t adc_config[] = {
    { .dev = ADC0, .pin = GPIO_UNDEF          , .chan =  0 }, // ADC0_DP0
    { .dev = ADC0, .pin = GPIO_UNDEF          , .chan = 19 }, // ADC0_DM0
    { .dev = ADC1, .pin = GPIO_UNDEF          , .chan =  0 }, // ADC1_DP0
    { .dev = ADC1, .pin = GPIO_UNDEF          , .chan = 19 }, // ADC1_DM0
    { .dev = ADC0, .pin = GPIO_PIN(PORT_B,  0), .chan =  8 }, // PTB0
    { .dev = ADC0, .pin = GPIO_PIN(PORT_B,  1), .chan =  9 }, // PTB1
    { .dev = ADC0, .pin = GPIO_PIN(PORT_C,  1), .chan = 15 }, // PTC1
    { .dev = ADC0, .pin = GPIO_PIN(PORT_C,  2), .chan =  4 }, // PTC2
};
#define ADC_NUMOF           ARRAYSIZE(adc_config)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

