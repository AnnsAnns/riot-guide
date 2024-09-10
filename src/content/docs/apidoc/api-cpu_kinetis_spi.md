---
title: api-cpu_kinetis_spi.md
description: api-cpu_kinetis_spi.md
---
# group `cpu_kinetis_spi` 

Kinetis SPI driver.

The SPI baud rate and other timings are generated from the bus clock via prescalers, the hardware module allows for very detailed timing configuration, but a tool exists to generate a standard timing configuration for any given module clock frequency. The timing configuration tool is found in cpu/kinetis/dist/calc_spi_scalers

Finer tuning of timings than the RIOT SPI API is capable of is supported by modifying the generated configuration. See the reference manual for your Kinetis CPU (Chapter: "SPI module, Functional description, Module baud rate and
clock delay generation") for a description of each delay.

The SPI driver supports using GPIO pins for chip select, as an alternative to using hardware chip select. The pins specified in spi_config[x].pin_cs[y] are the hardware chip select pins, designated SPIx_PCSy in the hardware reference documentation. These pins can not be chosen arbitrarily but must be selected from the pins which support the SPIx_PCSy function in the pin multiplexing table found in the reference manual.

To use a hardware controlled chip select pin, use the SPI_HWCS macro instead of GPIO_PIN when calling [spi_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042) in the device driver. Software managed CS signals can use any GPIO pin, at the cost of extra delays in the transfer because of the additional overhead of calling gpio_set/clear at every transfer.

SPI configuration example (for periph_conf.h):static const uint32_t spi_clk_config[] = {
- Use cpu/kinetis/dist/calc_spi_scalers to generate the timing configuration -
};

static const spi_conf_t spi_config[] = {
    {
        .dev      = SPI0,
        .pin_miso = GPIO_PIN(PORT_D, 3),
        .pin_mosi = GPIO_PIN(PORT_D, 2),
        .pin_clk  = GPIO_PIN(PORT_D, 1),
        .pin_cs   = {
            GPIO_PIN(PORT_D, 0),
            GPIO_PIN(PORT_D, 4),
            GPIO_PIN(PORT_D, 5),
            GPIO_PIN(PORT_D, 6),
            GPIO_UNDEF
        },
        .pcr      = GPIO_AF_2,
        .simmask  = SIM_SCGC6_SPI0_MASK
    },
    {
        .dev      = SPI1,
        .pin_miso = GPIO_PIN(PORT_E, 3),
        .pin_mosi = GPIO_PIN(PORT_E, 1),
        .pin_clk  = GPIO_PIN(PORT_E, 2),
        .pin_cs   = {
            GPIO_PIN(PORT_E, 4),
            GPIO_UNDEF,
            GPIO_UNDEF,
            GPIO_UNDEF,
            GPIO_UNDEF
        },
        .pcr      = GPIO_AF_2,
        .simmask  = SIM_SCGC6_SPI1_MASK
    }
};
#define SPI_NUMOF           ARRAYSIZE(spi_config)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

