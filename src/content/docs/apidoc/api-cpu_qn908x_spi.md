---
title: api-cpu_qn908x_spi.md
description: api-cpu_qn908x_spi.md
---
# group `cpu_qn908x_spi` 

NXP QN908x timer driver.

Two of the FLEXCOMM interfaces in this chip can be used as SPI interfaces named SPI0 and SPI1, which correspond to FLEXCOMM2 and FLEXCOMM3. Note that FLEXCOMM2 (SPI0) is also shared with the I2C peripheral I2C1 and both can't be used at the same time.

The SPI flexcomm clock is directly driven from the AHB bus, so its clock is limited by the core CPU clock and the AHB divisor on the higher side with an optional frequency divider of up to 65536 to generate lower clock frequencies.

Multiple peripherals can be connected to the same SPI bus, using different CS pins, with a maximum of 4 hardware CS peripherals per bus and any number of software CS peripherals.

This driver uses the [OSHA SPI Signal Names](https://www.oshwa.org/a-resolution-to-redefine-spi-signal-names/) and while it only implements the Controller mode, the hardware is capable of operating in Peripheral mode as well so we use the COPI/CIPO names.

SPI configuration example (for periph_conf.h)The following example uses only one hardware CS (number 0) and leaves the rest unused. Check the user manual for the full list of CS pins available.

When configuring the CS line on a driver, you should pass a [SPI_HWCS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga292c9a0a5b03329a153ad28343ff2e09) to use the hardware CS mode defined in this configuration. To use any other GPIO as a CS line selected by software it is also possible to pass a [GPIO_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1) pin.

```cpp
static const spi_conf_t spi_config[] = {
    {
        .dev            = SPI0,
        .cipo_pin       = GPIO_PIN(PORT_A, 5),
        .copi_pin       = GPIO_PIN(PORT_A, 4),
        .clk_pin        = GPIO_PIN(PORT_A, 30),
        .cs_pin         = {
            GPIO_PIN(PORT_A, 3), /* Use as SPI_HWCS(0) */
            GPIO_UNDEF,
            GPIO_UNDEF,
            GPIO_UNDEF
        },
    },
};
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

