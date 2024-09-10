---
title: api-cpu_qn908x_uart.md
description: api-cpu_qn908x_uart.md
---
# group `cpu_qn908x_uart` 

NXP QN908x UART driver.

There are several FLEXCOMM interfaces in this chip, but only two of these support UART (FLEXCOMM0 and FLEXCOMM1). The default UART mode is 8n1 and can be changed with the [uart_mode()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gae280e80d4c18f72bc0bb67cff3d0ced9) function. If only RX or only TX is desired, the other pin can be set to GPIO_UNDEF.

UART configuration example (for periph_conf.h)static const uart_conf_t uart_config[] = {
    {
        .dev          = USART0,
        .rx_pin       = GPIO_PIN(PORT_A, 17),  // or A5
        .tx_pin       = GPIO_PIN(PORT_A, 16),  // or A4
    },
    {
        .dev          = USART1,
        .rx_pin       = GPIO_PIN(PORT_A, 9),  // or A13
        .tx_pin       = GPIO_PIN(PORT_A, 8),  // or A12
    },
};
#define UART_NUMOF          ARRAY_SIZE(uart_config)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

