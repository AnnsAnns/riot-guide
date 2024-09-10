---
title: api-cpu_kinetis_i2c.md
description: api-cpu_kinetis_i2c.md
---
# group `cpu_kinetis_i2c` 

Kinetis I2C driver.

I2C configuration example (for periph_conf.h)static const i2c_conf_t i2c_config[] = {
    {
        .i2c = I2C0,
        .scl_pin = GPIO_PIN(PORT_B, 2),
        .sda_pin = GPIO_PIN(PORT_B, 3),
        .freq = CLOCK_BUSCLOCK,
        .speed = I2C_SPEED_FAST,
        .irqn = I2C0_IRQn,
        .scl_pcr = (PORT_PCR_MUX(2) | PORT_PCR_ODE_MASK),
        .sda_pcr = (PORT_PCR_MUX(2) | PORT_PCR_ODE_MASK),
    },
};
#define I2C_NUMOF           ARRAYSIZE(i2c_config)
#define I2C_0_ISR           (isr_i2c0)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

