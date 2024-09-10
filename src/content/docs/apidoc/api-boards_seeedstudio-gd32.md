---
title: api-boards_seeedstudio-gd32.md
description: api-boards_seeedstudio-gd32.md
---
# group `boards_seeedstudio-gd32` 

Support for the SeeedStudio GD32 RISC-V board.

Koen Zandberg [koen@bergzand.net](mailto:koen@bergzand.net)

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

OverviewThe [Seedstudio GD32 RISC-V Dev Board](https://wiki.seeedstudio.com/SeeedStudio-GD32-RISC-V-Dev-Board/) is a development board for the GigaDevice GD32VF103VBT6 MCU with the following on-board components:

* GD32VF103VBT6 RISC-V MCU @108MHz

* 8MB on-board Flash W25Q64

* 256 byte EEPROM

* LCD Interface: 16-bit 8080 interface and SPI touch screen control interface

* USB Type C

* TF card slot

* 2 user buttons

* 3 user LEDs

Seeedstudio GD32 RISC-V Dev Board

Hardware:
MCU   |GD32VF103VBT6   |Supported
--------- | --------- | ---------
Family   |RISC-V with ECLIC   |
Vendor   |GigaDevice   |
RAM   |32 kByte   |
Flash   |128 KByte   |
Frequency   |108 MHz   |
Power Modes   |3 (Sleep, Deep Sleep, Standby)   |yes
GPIOs   |80   |yes
Timers   |5 x 16-bit timer   |yes
RTC   |1 x 32-bit counter, 20-bit prescaler   |yes
WDT   |2 x 12-bit counter, 3-bit prescaler   |yes
ADC   |2 x 12-bit units, 16 channels @ 1 Msps   |yes
DAC   |2 x 12-bit channel   |yes
UART   |2   |yes
USART   |3   |yes
SPI   |3   |yes
I2C   |2 x Fast Mode 400 kHz   |yes
I2S   |2   |no
CAN   |2 x CAN 2.0B with up to 1 Mbps   |no
PWM   |6 Channels   |yes
USB   |1 x USB FS OTG   |yes
Vcc   |3.0V - 3.6V   |
Datasheet   |[Datasheet](https://gd32mcu.com/data/documents/datasheet/GD32VF103_Datasheet_Rev1.6.pdf)|
Reference Manual   |[Reference Manual](https://gd32mcu.com/download/down/document_id/222/path_type/1)|
Board Manual   |[Board Manual](https://wiki.seeedstudio.com/SeeedStudio-GD32-RISC-V-Dev-Board/)|
Board Schematic   |[Board Schematic](https://github.com/SeeedDocument/GD32VF103/raw/master/res/GD32VF103VBT6-dev-board.pdf)|

Pin Layout / ConfigurationThe general pin layout is shown below.

Seeedstudio GD32 RISC-V Dev Board Pinout

The following tables show the connection of the on-board components with the MCU pins and their configuration in RIOT sorted by RIOT peripherals and by pins.

RIOT Peripheral   |MCU Pin   |MCU Peripheral   |Board Function   |Remark
--------- | --------- | --------- | --------- | ---------
[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA1   |ADC01_IN1   ||
[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA2   |ADC01_IN2   ||
[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA3   |ADC01_IN3   ||
[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC0   |ADC01_IN10   ||
[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC1   |ADC01_IN11   ||
[ADC_LINE(5)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC2   |ADC01_IN12   ||
[ADC_LINE(6)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC3   |ADC01_IN13   ||
[ADC_LINE(7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC4   |ADC01_IN14   ||
[ADC_LINE(8)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PC5   |ADC01_IN15   ||
[ADC_LINE(9)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|-   |ADC01_IN16   ||internal Temperature channel
[ADC_LINE(10)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|-   |ADC01_IN17   ||internal VFEF channel
BTN0   |PA0   |BOOT0   |KEY1   |
BTN1   |PC13   ||KEY2   |
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PB6   |I2C0 SCL   ||
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB7   |I2C0 SDA   ||
[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PB10   |I2C1 SCL   ||
[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB11   |I2C1 SDA   ||
LED0   |PB5   ||LED red   |
LED1   |PB0   ||LED green   |
LED2   |PB1   ||LED blue   |
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PB0   ||LED1 green   |
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   |PB1   ||LED2 blue   |
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PB8   |||N/A if CAN is used
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   |PB9   |||N/A if CAN is used
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PB12   |SPI0 CS   ||
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCLK   |PB13   |SPI0 SCLK   ||
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PB14   |SPI0 MISO   ||
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PB15   |SPI0 MOSI   ||
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PA4   |SPI1 CS   ||
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCLK   |PA5   |SPI1 SCLK   ||
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PA6   |SPI1 MISO   ||
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PA7   |SPI1 MOSI   ||
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PA9   |USART0 TX   |UART TX   |
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PA10   |USART0 RX   |UART RX   |

Pin   |Board Function   |RIOT Function 1   |RIOT Function 2   |RIOT Function 3
--------- | --------- | --------- | --------- | ---------
PA0   |KEY1   |||BTN0
PA1   |||[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PA2   |||[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PA3   |||[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PA4   |FLASH CS   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   ||
PA5   |FLASH SCK   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCLK   ||
PA6   |FLASH MISO   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   ||
PA7   |FLASH MOSI   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   ||
PA8   ||||
PA9   ||[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   ||
PA10   ||[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   ||
PA11   |USB D-   |||
PA12   |USB D+   |||
PA13   |JTAG TMS   |||
PA14   |JTAG TCK   |||
PA15   |JTAG TDI   |||
PB0   |LED green   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   ||LED1
PB1   |LED blue   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   ||LED2
PB3   |JTAG TDO   |||
PB4   |JTAG NRST   |||
PB5   |LED red   |||LED3
PB6   ||[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   ||
PB7   ||[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   ||
PB8   ||[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   ||
PB9   ||[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   ||
PB10   ||[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   ||
PB11   ||[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   ||
PB12   |SD CS   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   ||
PB13   |SD SCK   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCLK   ||
PB14   |SD MISO   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   ||
PB15   |SD MOSI   |[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   ||
PC0   |||[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PC1   |||[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PC2   |||[ADC_LINE(5)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PC3   |||[ADC_LINE(6)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PC4   |||[ADC_LINE(7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PC5   |||[ADC_LINE(8)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PC13   |KEY2   |||BTN1
-   |Temperature   ||[ADC_LINE(9)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
-   |VREF   ||[ADC_LINE(10)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|

All other pins are either not broken out or have no special usage.

Flashing the DeviceThe board is flashed via a JTAG interface with OpenOCD (at least [release version 0.12.0](https://github.com/openocd-org/openocd/tree/9ea7f3d647c8ecf6b0f1424002dfc3f4504a162c)). By default, an FTDI adapter according to the configuration defined in [`interface/openocd-usb.cfg`](https://github.com/openocd-org/openocd/blob/9ea7f3d647c8ecf6b0f1424002dfc3f4504a162c/tcl/interface/ftdi/openocd-usb.cfg) is assumed. 
```cpp
BOARD=seeedstudio-gd32 make -C examples/hello-world flash
```
 To use an FTDI adapter with a different configuration, the configuration can be defined using the variable `OPENOCD_FTDI_ADAPTER`, for example: 
```cpp
OPENOCD_FTDI_ADAPTER=tigar BOARD=seeedstudio-gd32 make -C examples/hello-world flash
```
 If another adapter is used, it can be specified using variable `OPENOCD_DEBUG_ADAPTER`, for example for a Segger J-Link adapter: 
```cpp
OPENOCD_DEBUG_ADAPTER=jlink BOARD=seeedstudio-gd32 make -C examples/hello-world flash
```

Accessing STDIOBy default, the `stdio` is provided by the USBUS CDC ACM module `stdio_cdc_acm`. This interface is mapped to `/dev/ttyACM<n>` on a Linux host, where `<n>` is the index of the CDC ACM interface, which is 0 by default.

To use the first UART interface for `stdio` instead, the `stdio_uart` module has to be enabled: 
```cpp
USEMODULE=stdio_uart BOARD=seeedstudio-gd32 make -C examples/hello-world flash
```

The `stdio` is then directly accessible through the first UART interface. If an external USB-to-UART interface is used, this interface is mapped to `/dev/ttyUSB<n>` on a Linux host, where `<n>` is the index of the UART interface, which is 0 by default.

Use the `term` target to connect to the board using `/dev/ttyUSB0`: 
```cpp
BOARD=seeedstudio-gd32 make -C examples/hello-world term PORT=/dev/ttyUSB0
```
 If the UART interface index of the USB-to-UART interface is not 0, use the following command to connect: 
```cpp
BOARD=seeedstudio-gd32 make -C examples/hello-world term PORT=/dev/ttyUSB<n>
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

