---
title: api-cpu_esp32_esp32.md
description: api-cpu_esp32_esp32.md
---
# group `cpu_esp32_esp32` 

Specific properties of ESP32 variant (family)

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

Specific properties of ESP32 variant (family)GPIO pinsESP32 has 34 GPIO pins, where only a subset can be used as output, as ADC channel, as DAC channel and as GPIOs in deep-sleep mode, the so-called RTC GPIOs. Some of them are used by special SoC components, e.g., as touch sensors. The following table gives a short overview.

Pin   |Type   |ADC / RTC   |PU / PD   |Special function   |Remarks
--------- | --------- | --------- | --------- | --------- | ---------
GPIO0   |In/Out   |yes   |yes   |Touch sensor   |Bootstrapping, pulled up
GPIO1   |In/Out   |-   |yes   |UART0 TxD   |Console
GPIO2   |In/Out   |yes   |yes   |Touch sensor   |Bootstrapping, pulled down
GPIO3   |In/Out   |-   |yes   |UART0 RxD   |Console
GPIO4   |In/Out   |yes   |yes   |Touch sensor   |-
GPIO5   |In/Out   |-   |yes   |-   |-
GPIO6   |In/Out   |-   |yes   |Flash SD_CLK   |-
GPIO7   |In/Out   |-   |yes   |Flash SD_DATA0   |-
GPIO8   |In/Out   |-   |yes   |Flash SD_DATA1   |-
GPIO9   |In/Out   |-   |yes   |Flash SD_DATA2   |only in `qout`and `qio`mode, see section [Flash Modes](#esp32_flash_modes)
GPIO10   |In/Out   |-   |yes   |Flash SD_DATA3   |only in `qout`and `qio`mode, see section [Flash Modes](#esp32_flash_modes)
GPIO11   |In/Out   |-   |yes   |Flash SD_CMD   |-
GPIO12   |In/Out   |yes   |yes   |MTDI / Touch sensor   |JTAG interface / Bootstrapping, pulled down
GPIO13   |In/Out   |yes   |yes   |MTCK / Touch sensor   |JTAG interface
GPIO14   |In/Out   |yes   |yes   |MTMS / Touch sensor   |JTAG interface
GPIO15   |In/Out   |yes   |yes   |MTDO / Touch sensor   |JTAG interface / Bootstrapping, pulled up
GPIO16   |In/Out   |-   |yes   |-   |usually not available when SPI RAM is used
GPIO17   |In/Out   |-   |yes   |-   |usually not available when SPI RAM is used
GPIO18   |In/Out   |-   |yes   |-   |-
GPIO19   |In/Out   |-   |yes   |-   |-
GPIO21   |In/Out   |-   |yes   |-   |-
GPIO22   |In/Out   |-   |yes   |-   |-
GPIO23   |In/Out   |-   |yes   |-   |-
GPIO25   |In/Out   |yes   |yes   |DAC1   |-
GPIO26   |In/Out   |yes   |yes   |DAC2   |-
GPIO27   |In/Out   |yes   |yes   |Touch sensor   |-
GPIO32   |In/Out   |yes   |yes   |XTAL32_P   |can be used to connect an external 32 kHz crystal
GPIO33   |In/Out   |yes   |-   |XTAL32_N   |can be used to connect an external 32 kHz crystal
GPIO34   |In   |yes   |-   |VDET   |-
GPIO35   |In   |yes   |-   |VDET   |-
GPIO36   |In   |yes   |-   |SENSOR_VP   |-
GPIO37   |In   |yes   |-   |SENSOR_CAPP   |usually not broken out
GPIO38   |In   |yes   |-   |SENSOR_CAPN   |usually not broken out
GPIO39   |In   |yes   |-   |SENSOR_VN   |-

**ADC:** these pins can be used as ADC inputs**RTC:** these pins are RTC GPIOs and can be used in deep-sleep mode**PU/PD:** these pins have software configurable pull-up/pull-down functionality.

GPIOs that can be used as ADC channels are also available as low power digital inputs/outputs in deep sleep mode.

GPIO0, GPIO2 are bootstrapping pins which are used to boot ESP32 in different modes:

GPIO0   |GPIO2   |Mode
--------- | --------- | ---------
1   |X   |boot in FLASH mode to boot the firmware from flash (default mode)
0   |0   |boot in UART mode for flashing the firmware

GPIO2 becomes the SPI MISO signal for boards that use the HSPI interface as SD-Card interface in 4-bit SD mode. On these boards all signals of the SD-Card interface are pulled up. Because of the bootstrapping functionality of GPIO2, it can become necessary to either press the Boot** button, remove the SD card or remove the peripheral hardware to flash RIOT.

ADC ChannelsESP32 integrates two 12-bit ADCs (ADC1 and ADC2) capable of measuring up to 18 analog signals in total. Most of these ADC channels are either connected to a number of integrated sensors like a Hall sensors, touch sensors and a temperature sensor or can be connected with certain GPIOs. Integrated sensors are disabled in RIOT's implementation and are not accessible. Thus, up to 18 GPIOs, can be used as ADC inputs:

* **ADC1** supports 8 channels: GPIOs 32-39

* **ADC2** supports 10 channels: GPIOs 0, 2, 4, 12-15, 25-27

These GPIOs are realized by the RTC unit and are therefore also called RTC GPIOs or RTCIO GPIOs.

The maximum number of ADC channels [ADC_NUMOF_MAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#esp32_2include_2periph__cpu_8h_1aea6c293fdfb3bbb0f41e759577366d6f) is 18

* GPIO37 and GPIO38 are usually not broken out on ESP32 boards and can not be used therefore.

* ADC2 is also used by the WiFi module. The GPIOs connected to ADC2 are therefore not available as ADC channels if the modules `esp_wifi` or `esp_now` are used.

* Vref can be read with function [adc_line_vref_to_gpio](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#adc__arch_8h_1a1ebca9a3af2ed9a9416949f539ba56b4) at GPIO25.

DAC ChannelsESP32 SoC supports 2 DAC lines at GPIO25 and GPIO26.

I2C InterfacesESP32 has two built-in I2C interfaces.

The following table shows the default configuration of I2C interfaces used for a large number of ESP32 boards. It can be overridden by [application-specific configurations](#esp32_application_specific_configurations).

Device   |Signal   |Pin   |Symbol   |Remarks
--------- | --------- | --------- | --------- | ---------
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)|||`#I2C0_SPEED`|default is `I2C_SPEED_FAST`
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)|SCL   |GPIO22   |`#I2C0_SCL`|-
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)|SDA   |GPIO21   |`#I2C0_SDA`|-

PWM ChannelsThe ESP32 LEDC module has 2 channel groups with 8 channels each. Each of these channels can be clocked by one of the 4 timers.

SDMMC InterfacesThe ESP32 variant uses the direct I/O (i.e. `SOC_SDMMC_USE_IOMUX` is defined in the SoC capabilities file). The GPIOs used for SDMMC signals are therefore fixed for each slot. Since the GPIOs used for slot 0 are the same as those used for the Flash, slot 0 cannot be used. Therefore, only slot 1 can be used.

The GPIOs used by ESP32 for slot 1 are:

Signal   |GPIO Slot 1
--------- | ---------
CLK   |GPIO14
CMD   |GPIO15
DAT0   |GPIO2
DAT1   |GPIO4
DAT2   |GPIO12
DAT3   |GPIO13

The board-specific configuration is realized by defining the [sdmmc_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2stm32l496g-disco_2include_2periph__conf_8h_1a08cad2d5b5be3a456b03795de581a5a9) array, for example:

```cpp
static const [sdmmc_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsdmmc__conf__t) [sdmmc_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2esp32-olimex-evb_2include_2periph__conf_8h_1a08cad2d5b5be3a456b03795de581a5a9)[] = {
    {
        .[slot](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsdmmc__conf__t_1acb7ab2f89deb443c4b26411cf122089a) = [SDMMC_SLOT_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#esp32_2include_2periph__cpu_8h_1a1003cd6605561c65d1776afc38c0da23a3ecdc8f14bd264b09cfaa7ead0ff2796),
        .cd = GPIO21,
        .wp = [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atmega__common_2include_2periph__cpu__common_8h_1a3969ce1e494a72d3c2925b10ddeb4604),
        .bus_width = 1,
    },
};

#define SDMMC_NUMOF 1
```

Used data bus width has to be defined in sdmmc_conf_t::bus_width in addition to the slot, where 1 and 4 are valid values.

The slot must be [SDMMC_SLOT_1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#esp32_2include_2periph__cpu_8h_1a1003cd6605561c65d1776afc38c0da23a3ecdc8f14bd264b09cfaa7ead0ff2796) for ESP32.

If the board supports a Card Detect pin or a Write Protect pin, the corresponding GPIOs have to be defined in [sdmmc_conf_t::cd](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsdmmc__conf__t_1aea1ccd81fbcded9894faa675956b3c52) and [sdmmc_conf_t::wp](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsdmmc__conf__t_1a0354710d2dc60c25eecdd9a08e098487). Otherwise they have to be set to undefined ([GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604)).

SPI InterfacesESP32 has four SPI controllers where SPI0 and SPI1 share the same bus and are used as interface for external memory:

* Controller SPI0 is reserved for caching external memory like Flash

* Controller SPI1 is reserved for external memory like PSRAM

* Controller SPI2 can be used as general purpose SPI (also called HSPI)

* Controller SPI3 can be used as general purpose SPI (also called VSPI)

Thus, only SPI2 (HSPI) and SPI3 (VSPI) can be used as general purpose SPI in RIOT as [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) and [SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) in arbitrary order.

The following table shows the pin configuration used for most boards, even though it **can vary** from board to board.

Device   |Signal   |Pin   |Symbol   |Remarks
--------- | --------- | --------- | --------- | ---------
`SPI0_HOST`/`SPI1_HOST`|SCK   |GPIO6   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|CMD   |GPIO11   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|SD0   |GPIO7   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|SD1   |GPIO8   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|SD2   |GPIO9   |-   |reserved for flash and PSRAM (only in `qio` or `qout` mode)
`SPI0_HOST`/`SPI1_HOST`|SD3   |GPIO10   |-   |reserved for flash and PSRAM (only in `qio` or `qout` mode)
`SPI2_HOST` (`HSPI`)   |SCK   |GPIO14   |`#SPI1_SCK`|can be used
`SPI2_HOST` (`HSPI`)   |MISO   |GPIO12   |`#SPI1_MISO`|can be used
`SPI2_HOST` (`HSPI`)   |MOSI   |GPIO13   |`#SPI1_MOSI`|can be used
`SPI2_HOST` (`HSPI`)   |CS0   |GPIO15   |`#SPI1_CS0`|can be used
`SPI3_HOST` (`VSPI`)   |SCK   |GPIO18   |`#SPI0_SCK`|can be used
`SPI3_HOST` (`VSPI`)   |MISO   |GPIO19   |`#SPI0_MISO`|can be used
`SPI3_HOST` (`VSPI`)   |MOSI   |GPIO23   |`#SPI0_MOSI`|can be used
`SPI3_HOST` (`VSPI`)   |CS0   |GPIO5   |`#SPI0_CS0`|can be used

Some boards use the `HSPI` (`SPI2_HOST`) as SD-Card interface (SDIO) in 4-bit SD mode.

Device   |Pin   |SD 4-bit mode   |SPI mode
--------- | --------- | --------- | ---------
`SPI2_HOST` (`HSPI`)   |GPIO14   |CLK   |SCK
`SPI2_HOST` (`HSPI`)   |GPIO15   |CMD   |CS0
`SPI2_HOST` (`HSPI`)   |GPIO2   |DAT0   |MISO
`SPI2_HOST` (`HSPI`)   |GPIO4   |DAT1   |-
`SPI2_HOST` (`HSPI`)   |GPIO12   |DAT2   |-
`SPI2_HOST` (`HSPI`)   |GPIO13   |DAT3   |MOSI

On these boards, all these signals are pulled up. This may cause flashing problems due to the bootstrap function of the GPIO2 pin, see section [GPIO pins](#esp32_gpio_pins_esp32). Therefore, it can be necessary to either press the **Boot** button, to remove the SD card or to remove the peripheral hardware to flash RIOT.

TimersESP32 has two timer groups with two timers each, resulting in a total of four timers. Since one timer is used as system timer, up to three timers with one channel each can be used in RIOT as timer devices [TIMER_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1gac66133744b2b503740e6324e2efa644e) ... [TIMER_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1gac66133744b2b503740e6324e2efa644e).

Additionally ESP32 has three CCOMPARE registers which can be used alternatively as timer devices [TIMER_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1gac66133744b2b503740e6324e2efa644e) ... [TIMER_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1gac66133744b2b503740e6324e2efa644e) can be used in RIOT if the module `esp_hw_counter` is enabled.

UART InterfacesESP32 integrates three UART interfaces. The following default pin configuration of UART interfaces as used by a most boards can be overridden by the application, see section [Application-Specific Configurations](#esp32_application_specific_configurations).

Device   |Signal   |Pin   |Symbol   |Remarks
--------- | --------- | --------- | --------- | ---------
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|TxD   |GPIO1   |`#UART0_TXD`|cannot be changed
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|RxD   |GPIO3   |`#UART0_RXD`|cannot be changed
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|TxD   |GPIO10   |`#UART1_TXD`|optional, can be overridden
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|RxD   |GPIO9   |`#UART1_RXD`|optional, can be overridden
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|TxD   |GPIO17   |`UART2_TXD`|optional, can be overridden
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|RxD   |GPIO16   |`UART2_RXD`|optional, can be overridden

JTAG InterfaceThe JTAG interface on ESP32 is connected to the following GPIOs:

JTAG Signal   |ESP32 Pin
--------- | ---------
TRST_N   |CHIP_PU
TDO   |GPIO15 (MTDO)
TDI   |GPIO12 (MTDI)
TCK   |GPIO13 (MTCK)
TMS   |GPIO14 (MTMS)
GND   |GND

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

