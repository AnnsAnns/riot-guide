---
title: api-boards_stm32l496g-disco.md
description: api-boards_stm32l496g-disco.md
---
# group `boards_stm32l496g-disco` 

Support for the STM32L496G-DISCO board.

OverviewThe ST [STM32L496G-DISCO](https://www.st.com/en/evaluation-tools/32l496gdiscovery.html) is an evaluation board with the ARM Cortex-M4 based ultra-low power microcontroller STM32L496AG with 320KB of RAM and 1MB of ROM Flash.

The main features of this board are:

* 1.54 RGB 240 x 240 pixel TFT color LCD display with capacitive touch screen,

* SAI audio codec, with stereo output, including analog microphone input

* Stereo digital microphones

* 8-Mbit external PSRAM

* 64-Mbit external QSPI flash

* USB OTG FS port

* 8-bit camera interface

* Stereo headset jack

* micso-SD card connector

Current Hardware Support:
Feature   |Support   |Remark
--------- | --------- | ---------
ADC   |X   |8 channels
DAC   |X   |1 or 2 channels
I2C   |X   |2 devices (I2C1 and I2C2)
PWM   |X   |3 devices with a total og 6 channels
SPI   |X   |1 or 2 devices (SPI1 and SPI2)
Timers   |X   |2 devices (TIM2 and TIM3)
UART   |X   |3 devices (USART2, LPUART1 and USART1)
USB OTG FS   |X   |1 device
TFT color LCD 240 x 40   |-   |ST7789H2 used as driver IC (not supported yet)
Capacitive Touch Screen   |-   |FT3267 used as driver IC (not supported yet)
Stereo microphones   |-   |
SAI audio codec   |-   |
External PSRAM   |x   |Connected to FMC peripheral
External Quad-SPI Flash   |-   |QSPI peripheral is not yet supported
SD Card Interface   |-   |SDMMC1 on PC8..PC13/PD2

Board Configuration (sorted by peripheral):
RIOT Peripheral   |GPIO   |Connector pin   |Remark
--------- | --------- | --------- | ---------
[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC4   |Arduino A0   |ADC1 IN13
[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC1   |Arduino A1   |ADC1 IN2
[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC3   |Arduino A2   |ADC1 IN4
[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PF10   |Arduino A3   |ADC3 IN13
[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA1   |Arduino A4   |ADC1 IN6
[ADC_LINE(5)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC0   |Arduino A5   |ADC2 IN13
[ADC_LINE(6)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|-   |V_REF_INT   |ADC1 IN0 connected to V_REFINT
[ADC_LINE(7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA4   |STmod+ ADC   |ADC1 IN9 if `periph_dac` is not used
[ADC_LINE(7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|-   |-   |ADC2 IN17 connected to DAC1 if `periph_dac` is used
[DAC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|PA4   |STmod+ ADC   |DAC1 if `periph_dac` is used
[DAC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|PA5   |Arduino D13   |DAC2 if `periph_spi` is not used
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PB8   |Arduino D15   |I2C1 SCL, also connected to STmod+ SCL
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB7   |Arduino D14   |I2C1 SDA, also connected to STmod+ SDA
[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PH14   |-   |I2C2 SCL, used for MFX_x, CODEC_x, CTP_x, DCMI_x
[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB14   |-   |I2C2 SDA, used for MFX_x, CODEC_x, CTP_x, DCMI_x
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PH15   |Arduino D3   |TIM8_CH3N
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   |PI6   |Arduino D6   |TIM8_CH2
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH2   |PH13   |Arduino D9   |TIM8_CH1N
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PB9   |Arduino D5   |TIM4_CH4
[PWM_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PA0   |STmod+ PWM   |TIM5_CH1
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCK   |PA5   |Arduino D13   |SPI1 SCK
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PB4   |Arduino D12   |SPI1 MISO
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PB5   |Arduino D11   |SPI1 MOSI
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PA15   |Arduino D10   |SPI1 NSS
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCK   |PI1   |STmod+ CLK, Pmod CLK   |SPI2 SCK (*1)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PI2   |STmod+ MISO, Pmod MISO   |SPI2 MISO (*1)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PB15   |STmod+ MOSI, Pmod MOSI   |SPI2 MOSI (*1)
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PG1   |STmod+ CS, Pmod CS   |SPI2 NSS (*1)
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PD6   |ST-Link   |USART2 RX
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PA2   |ST-Link   |USART2 TX
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PD6   |Arduino D0   |LPUART1 RX
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PA2   |Arduino D1   |LPUART1 TX
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PG10   |STmod+ RX, Pmod RX   |USART1 RX (*2)
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PB6   |STmod+ TX, Pmod TX   |USART1 TX (*2)
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) CTS   |PG11   |STmod+ CTS, Pmod CTS   |USART1 CTS (*2)
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RTS   |PG12   |STmod+ RTS, Pmod RTS   |USART1 RTS (*2)

* (*1) SPI2 is only available if module `periph_spi_stmod` is used. SB4, SB5, SB9 must be closed to connect SPI2 to STmod+ and Pmod.

* (*2) USART1 is only available if module `periph_spi_stmod` is not used. SB6, SB7, SB8 must be closed to connect USART1 to STmod+ and Pmod (default).

Board Configuration (sorted by connectors):
Connector   |RIOT Peripheral   |GPIO   |Remark
--------- | --------- | --------- | ---------
Arduino A0   |[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC4   |ADC1 IN13
Arduino A1   |[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC1   |ADC1 IN2
Arduino A2   |[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC3   |ADC1 IN4
Arduino A3   |[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PF10   |ADC3 IN13
Arduino A4   |[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA1   |ADC1 IN6
Arduino A5   |[ADC_LINE(5)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC0   |ADC2 IN13
Arduino D0   |[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PD6   |LPUART1 RX
Arduino D1   |[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PA2   |LPUART1 TX
Arduino D3   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PH15   |TIM8_CH3N
Arduino D6   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   |PI6   |TIM8_CH2
Arduino D5   |[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PB9   |TIM4_CH4
Arduino D9   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH2   |PH13   |TIM8_CH1N
Arduino D10   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PA15   |SPI1 CS
Arduino D11   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PB5   |SPI1 MOSI
Arduino D12   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PB4   |SPI1 MISO
Arduino D13   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCK   |PA5   |SPI1 SCK
Arduino D13   |[DAC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|PA5   |DAC2 if `periph_spi` is not used
Arduino D14   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB7   |I2C1 SDA
Arduino D15   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PB8   |I2C1 SCL
Pmod SPI CLK   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCK   |PI1   |SPI2 SCK (*1)
Pmod SPI CS   |[SPI_DEV(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PG1   |SPI2 NSS (*1)
Pmod SPI MISO   |[SPI_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PI2   |SPI2 MISO (*1)
Pmod SPI MOSI   |[SPI_DEV(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PB15   |SPI2 MOSI (*1)
Pmod UART CTS   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) CTS   |PG11   |USART1 CTS (*2)
Pmod UART RTS   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RTS   |PG12   |USART1 RTS (*2)
Pmod UART RX   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PG10   |USART1 RX (*2)
Pmod UART TX   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PB6   |USART1 TX (*2)
STmod+ ADC   |[ADC_LINE(7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA4   |ADC1 IN9 if `periph_dac` is not used
STmod+ ADC   |[DAC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|PA4   |DAC1 if `periph_dac` is used
STmod+ PWM   |[PWM_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PA0   |TIM5_CH1
STmod+ I2C SCL   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PB8   |I2C2 SCL
STmod+ I2C SDA   |[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB7   |I2C2 SDA
STmod+ SPI CLK   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCK   |PI1   |SPI2 SCK (*1)
STmod+ SPI CS   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PG1   |SPI2 NSS (*1)
STmod+ SPI MISO   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PI2   |SPI2 MISO (*1)
STmod+ SPI MOSI   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PB15   |SPI2 MOSI (*1)
STmod+ UART CTS   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) CTS   |PG11   |USART1 CTS (*2)
STmod+ UART RTS   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RTS   |PG12   |USART1 RTS (*2)
STmod+ UART RX   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PG10   |USART1 RX (*2)
STmod+ UART TX   |[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PB6   |USART1 TX (*2)
ST-Link   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PD6   |USART2 RX
ST-Link   |[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PA2   |USART2 TX

* (*1) SPI2 is only available if module `periph_spi_stmod` is used. SB4, SB5, SB9 must be closed to connect SPI2 to STmod+ and Pmod.

* (*2) USART1 is only available if module `periph_spi_stmod` is not used. SB6, SB7, SB8 must be closed to connect USART1 to STmod+ and Pmod (default).

Flashing the deviceThe STM32L496G-DISCO board includes an on-board ST-LINK programmer and can be flashed using OpenOCD. The board can be flashed with:

```cpp
make BOARD=stm32l496g-disco flash
```

and debug via GDB with 
```cpp
make BOARD=stm32l496g-disco debug
```

Supported ToolchainsFor using the STM32L496G-DISCO board we recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

