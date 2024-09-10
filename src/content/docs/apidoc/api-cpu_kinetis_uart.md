---
title: api-cpu_kinetis_uart.md
description: api-cpu_kinetis_uart.md
---
# group `cpu_kinetis_uart` 

Kinetis UART driver.

There are different implementations of the UART interface. The treatment of interrupts is also slightly different. The register UARTx_BDH to UARTx_C4 look almost the same. We distinguish the type of the UART using the BRFA field in the UART C4 register. Currently, only the base TX/RX functionality is available.

UART configuration example (for periph_conf.h)static const uart_conf_t uart_config[] = {
    {
        .dev    = UART0,
        .freq   = CLOCK_CORECLOCK,
        .pin_rx = GPIO_PIN(PORT_A, 14),
        .pin_tx = GPIO_PIN(PORT_A, 15),
        .pcr_rx = PORT_PCR_MUX(3),
        .pcr_tx = PORT_PCR_MUX(3),
        .irqn   = UART0_RX_TX_IRQn,
        .scgc_addr = &SIM->SCGC4,
        .scgc_bit = SIM_SCGC4_UART0_SHIFT,
        .mode   = UART_MODE_8N1,
    },
    {
        .dev    = UART1,
        .freq   = CLOCK_CORECLOCK,
        .pin_rx = GPIO_PIN(PORT_C, 3),
        .pin_tx = GPIO_PIN(PORT_C, 4),
        .pcr_rx = PORT_PCR_MUX(3),
        .pcr_tx = PORT_PCR_MUX(3),
        .irqn   = UART1_RX_TX_IRQn,
        .scgc_addr = &SIM->SCGC4,
        .scgc_bit = SIM_SCGC4_UART1_SHIFT,
        .mode   = UART_MODE_8N1,
    },
};
#define UART_NUMOF          ARRAYSIZE(uart_config)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

