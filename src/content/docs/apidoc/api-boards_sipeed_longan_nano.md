---
title: api-boards_sipeed_longan_nano.md
description: api-boards_sipeed_longan_nano.md
---
# group `boards_sipeed_longan_nano` 

Support for the Sipeed Longan Nano board.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

Sipeed Longan NanoOverviewThe [Sipeed Longan Nano](https://longan.sipeed.com/en) is a development board for the GigaDevice GD32VF103CBT6 MCU with the following on-board components:

* GD32VF103CBT6 RISC-V MCU @108MHz

* USB Type C

* TF card slot

* 3 user LEDs

* 0.96" TFT display 160 x 80 pixel (optional)

Sipeed Longan Nano

Hardware
MCU   |GD32VF103CBT6   |Supported
--------- | --------- | ---------
Family   |RISC-V with ECLIC   |
Vendor   |GigaDevice   |
RAM   |32 kByte   |
Flash   |128 KByte   |
Frequency   |108 MHz   |
Power Modes   |3 (Sleep, Deep Sleep, Standby)   |yes
GPIOs   |37   |yes
Timers   |5 x 16-bit timer   |yes
RTC   |1 x 32-bit counter, 20-bit prescaler   |yes
WDT   |2 x 12-bit counter, 3-bit prescaler   |yes
ADC   |2 x 12-bit units, 16 channels @ 1 Msps   |yes
DAC   |2 x 12-bit channel   |yes
UART   |-   |yes
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
Board Manual   |[Board Manual](https://longan.sipeed.com/en/)|
Board Schematic   |[Board Schematic](http://dl.sipeed.com/fileList/LONGAN/Nano/HDK/Longan%20Nano%203302/2_Schematic/Longan_nano_3302_Schematic.pdf)|

Pin Layout / ConfigurationThe general pin layout is shown below.

Sipeed Longan Nano Pinout

The following tables show the connection of the on-board components with the MCU pins and their configuration in RIOT sorted by RIOT peripherals and by pins.

RIOT Peripheral   |MCU Pin   |MCU Peripheral   |Board Function   |Remark
--------- | --------- | --------- | --------- | ---------
[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA0   |ADC01_IN0   ||
[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|PA3   |ADC01_IN3   ||
[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|-   |ADC01_IN16   ||internal Temperature channel
[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|-   |ADC01_IN17   ||internal VFEF channel
[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |PA4   |ADC01_IN4   ||N/A if DAC is used
[ADC_LINE(5)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |PB0   |ADC01_IN8   |TFT RS   |N/A if TFT is used
[ADC_LINE(6)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |PB1   |ADC01_IN9   |TFT RST   |N/A if TFT is used
[ADC_LINE(7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |PA6   |ADC01_IN6   ||N/A if TFT/SPI_DEV(1) is used
[ADC_LINE(8)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |PA7   |ADC01_IN7   ||N/A if TFT/SPI_DEV(1) is used
[ADC_LINE(9)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |PA5   |ADC01_IN5   ||N/A if TFT/SPI_DEV(1)/DAC used
BTN0   |PA8   |BOOT0   |BOOT   |
[DAC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)|PA4   |DAC0   ||
[DAC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)*   |PA5   |DAC1   ||N/A if TFT is used
[GPIO_PIN(1, 2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)|PB2   ||TFT CS   |
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PB6   |I2C0 SCL   ||
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB7   |I2C0 SDA   ||
[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SCL   |PB10   |I2C1 SCL   ||
[I2C_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb) SDA   |PB11   |I2C1 SDA   ||
LED0   |PC13   ||LED red   |
LED1   |PA1   ||LED green   |
LED2   |PA2   ||LED blue   |
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   |PA1   ||LED green   |
[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   |PA2   ||LED blue   |
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0*   |PB8   |||N/A if CAN is used
[PWM_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1*   |PB9   |||N/A if CAN is used
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PB12   |SPI1 CS   |SD CS   |
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCLK   |PB13   |SPI1 SCLK   |SD SCK   |
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PB14   |SPI1 MISO   |SD MISO   |
[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PB15   |SPI1 MOSI   |SD MOSI   |
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   |PB5   |SPI0 CS   ||
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCLK   |PA5   |SPI0 SCLK   |TFT SCL   |
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |PA6   |SPI0 MISO   ||
[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |PA7   |SPI0 MOSI   |TFT SDA   |
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   |PA9   |USART0 TX   |UART TX   |
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   |PA10   |USART0 RX   |UART RX   |

(*) The availability of these peripherals depend on the use of other peripherals.

For the Sipeed Longan Nano board version with TFT display, the `sipeed-longan-nano-tft` board definition has to be used. 
```cpp
BOARD=sipeed-longan-nano-tft make ...
```

Pin   |Board Function   |RIOT Function 1   |RIOT Function 2   |RIOT Function 3
--------- | --------- | --------- | --------- | ---------
PA0   |||[ADC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PA1   |LED green   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH0   ||LED0
PA2   |LED blue   |[PWM_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm_1gad7999c048ca3b0783f3fb62b93b056db) CH1   ||LED1
PA3   |||[ADC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
PA4   |||[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |[DAC_LINE(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)
PA5   |TFT SCL   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) SCLK   |[ADC_LINE(9)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |[DAC_LINE(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__dac_1gacd6d66e4e9bb209927d29c0e8d13dea9)*
PA6   ||[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MISO   |[ADC_LINE(7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |
PA7   |TFT SDA   |[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) MOSI   |[ADC_LINE(8)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |
PA8   |BOOT   |||BTN0
PA9   ||[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) TX   ||
PA10   ||[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) RX   ||
PA11   |USB D-   |||
PA12   |USB D+   |||
PA13   |JTAG TMS   |||
PA14   |JTAG TCK   |||
PA15   |JTAG TDI   |||
PB0   |TFT RS   ||[ADC_LINE(5)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |
PB1   |TFT RST   ||[ADC_LINE(6)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)*   |
PB2   |TFT CS   |||
PB3   |JTAG TDO   |||
PB4   |JTAG NRST   |||
PB5   ||[SPI_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) CS   ||
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
PC13   |LED red   |||LED2
PC14   |OSC32IN   |||
PC15   |OSC32OUT   |||
-   |Temperature   ||[ADC_LINE(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|
-   |VREF   ||[ADC_LINE(3)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)|

(*) The availability of these peripherals depend on the use of other peripherals.

Since the availability of `[ADC_LINE(4)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)` to `[ADC_LINE(9)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888)` depends on other peripheral configurations, their index may vary.

Flashing the DeviceUsing the DFU bootloaderThe board is flashed via the in-ROM DFU bootloader by default. To enter bootloader mode, hold the BOOT0 button while pressing the RESET button.

```cpp
BOARD=sipeed-longan-nano make -C examples/hello-world flash
```

After flashing you need to leave bootloader mode again by pressing the RESET button.

For the Sipeed Longan Nano board version with TFT display, the `sipeed-longan-nano-tft` board definition has to be used. 
```cpp
BOARD=sipeed-longan-nano-tft make -C examples/hello-world flash
```

Using an external debug adapterThe board can also be flashed via a JTAG interface with OpenOCD (at least [release version 0.12.0](https://github.com/openocd-org/openocd/tree/9ea7f3d647c8ecf6b0f1424002dfc3f4504a162c)). By default, an FTDI adapter according to the configuration defined in [`interface/openocd-usb.cfg`](https://github.com/openocd-org/openocd/blob/9ea7f3d647c8ecf6b0f1424002dfc3f4504a162c/tcl/interface/ftdi/openocd-usb.cfg) is assumed. 
```cpp
PROGRAMMER=openocd BOARD=sipeed-longan-nano make -C examples/hello-world flash
```

To use an FTDI adapter with a different configuration, the configuration can be defined using the variable `OPENOCD_FTDI_ADAPTER`, for example: 
```cpp
PROGRAMMER=openocd OPENOCD_FTDI_ADAPTER=tigard BOARD=sipeed-longan-nano make -C examples/hello-world flash
```
 If another adapter is used, it can be specified using variable `OPENOCD_DEBUG_ADAPTER`, for example for a Segger J-Link adapter: 
```cpp
PROGRAMMER=openocd OPENOCD_DEBUG_ADAPTER=jlink BOARD=sipeed-longan-nano make -C examples/hello-world flash
```

Using the TFT DisplayTo use the display of the Sipeed Longan Nano board version with TFT display, the `sipeed_longan_nano_tft` board definition has to be used, for example: 
```cpp
BOARD=sipeed-longan-nano-tft make -C tests/drivers/st7735 flash
```

Accessing STDIOBy default, the `stdio` is provided by the USBUS CDC ACM module `stdio_cdc_acm`. This interface is mapped to `/dev/ttyACM<n>` on a Linux host, where `<n>` is the index of the CDC ACM interface, which is 0 by default.

To use the first UART interface for `stdio` instead, the `stdio_uart` module has to be enabled: 
```cpp
USEMODULE=stdio_uart BOARD=sipeed-longan-nano make -C examples/hello-world flash
```

The `stdio` is then directly accessible through the first UART interface. If an external USB-to-UART interface is used, this interface is mapped to `/dev/ttyUSB<n>` on a Linux host, where `<n>` is the index of the UART interface, which is 0 by default.

Use the `term` target to connect to the board using `/dev/ttyUSB0`: 
```cpp
BOARD=sipeed-longan-nano make -C examples/hello-world term PORT=/dev/ttyUSB0
```
 If the UART interface index of the USB-to-UART interface is not 0, use the following command to connect: 
```cpp
BOARD=sipeed-longan-nano make -C examples/hello-world term PORT=/dev/ttyUSB<n>
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

