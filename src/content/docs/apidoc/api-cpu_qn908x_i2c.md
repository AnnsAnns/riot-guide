---
title: api-cpu_qn908x_i2c.md
description: api-cpu_qn908x_i2c.md
---
# group `cpu_qn908x_i2c` 

NXP QN908x I2C driver.

There are several FLEXCOMM interfaces in this chip, but only two of these support I2C (FLEXCOMM1 and FLEXCOMM2) which are mapped as I2C0 and I2C1, respectively. A single FLEXCOMM interface can only be used for one of the I2C, UART or SPI interfaces, so for example USART1 and I2C0 can't be used at the same time since they are both the same FLEXCOMM1 interface.

I2C configuration example (for periph_conf.h)static const i2c_conf_t i2c_config[] = {
    {
        .dev          = I2C0,
        .pin_scl      = GPIO_PIN(PORT_A, 6),  // or A8, A12, A20
        .pin_sda      = GPIO_PIN(PORT_A, 7),  // or A9, A13, A21
        .speed        = I2C_SPEED_FAST,
    },
    {
        .dev          = I2C1,
        .pin_scl      = GPIO_PIN(PORT_A, 2),  // or A5, A23, A27
        .pin_sda      = GPIO_PIN(PORT_A, 3),  // or A4, A22, A26
        .speed        = I2C_SPEED_FAST,
    },
};
#define I2C_NUMOF           ARRAY_SIZE(i2c_config)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

