---
title: api-cpu_esp32_esp32c3.md
description: api-cpu_esp32_esp32c3.md
---
# group `cpu_esp32_esp32c3` 

Specific properties of ESP32-C3 variant (family)

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

Specific properties of ESP32-C3 variant (family)GPIO pinsESP32-C3 has 22 GPIO pins, where a subset can be used as ADC channel and as low-power digital input/output in deep-sleep mode, the so-called RTC GPIOs. Some of them are used by special SoC components. The following table gives a short overview.

Pin   |Type   |ADC / RTC   |PU / PD   |Special function   |Remarks
--------- | --------- | --------- | --------- | --------- | ---------
GPIO0   |In/Out   |yes   |yes   |XTAL_32K_P   |-
GPIO1   |In/Out   |yes   |yes   |XTAL_32K_N   |-
GPIO2   |In/Out   |yes   |yes   ||Bootstrapping
GPIO3   |In/Out   |yes   |yes   ||-
GPIO4   |In/Out   |yes   |yes   |MTMS   |JTAG interface
GPIO5   |In/Out   |yes   |yes   |MTDI   |JTAG interface
GPIO6   |In/Out   |-   |yes   |MTCK   |JTAG interface
GPIO7   |In/Out   |-   |yes   |MTDO   |JTAG interface
GPIO8   |In/Out   |-   |yes   |-   |-
GPIO9   |In/Out   |-   |yes   |-   |Bootstrapping, pulled up
GPIO10   |In/Out   |-   |yes   |-   |-
GPIO11   |In/Out   |-   |yes   |VDD_SPI   |not broken out
GPIO12   |In/Out   |-   |yes   |Flash SDIHD   |only in `qout`and `qio`mode, see section [Flash Modes](#esp32_flash_modes)
GPIO13   |In/Out   |-   |yes   |Flash SPIWP   |only in `qout`and `qio`mode, see section [Flash Modes](#esp32_flash_modes)
GPIO14   |In/Out   |-   |yes   |Flash SPICS0   |-
GPIO15   |In/Out   |-   |yes   |Flash SPICLK   |-
GPIO16   |In/Out   |-   |yes   |Flash SPID   |-
GPIO17   |In/Out   |-   |yes   |Flash SPIQ   |-
GPIO18   |In/Out   |-   |yes   |-   |USB-JTAG
GPIO19   |In/Out   |-   |yes   |-   |USB-JTAG
GPIO21   |In/Out   |-   |yes   |UART0 RX   |Console
GPIO22   |In/Out   |-   |yes   |UART0 TX   |Console

**ADC:** these pins can be used as ADC inputs**RTC:** these pins are RTC GPIOs and can be used in deep-sleep mode**PU/PD:** these pins have software configurable pull-up/pull-down functionality.

GPIOs that can be used as ADC channels are also available as low power digital inputs/outputs in deep sleep mode.

GPIO2, GPIO8 and GPIO9 are bootstrapping pins which are used to boot ESP32-C3 in different modes:

GPIO2   |GPIO8   |GPIO9   |Mode
--------- | --------- | --------- | ---------
1   |X   |1   |SPI Boot mode to boot the firmware from flash (default mode)
1   |1   |0   |Download Boot mode for flashing the firmware

ADC ChannelsESP32-C3 integrates two 12-bit ADCs (ADC1 and ADC2) with 6 channels in total:

* ADC1 supports 5 channels: GPIO0, GPIO1, GPIO2, GPIO3 and GPIO4

* ADC2 supports 1 channel: GPIO5 or internal signals such as vdd33

The maximum number of ADC channels [ADC_NUMOF_MAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#esp32_2include_2periph__cpu_8h_1aea6c293fdfb3bbb0f41e759577366d6f) is 6.

* ADC2 is also used by the WiFi module. The GPIOs connected to ADC2 are therefore not available as ADC channels if the modules `esp_wifi` or `esp_now` are used.

* Vref can be read with function [adc_line_vref_to_gpio](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#adc__arch_8h_1a1ebca9a3af2ed9a9416949f539ba56b4) at GPIO5.

I2C InterfacesESP32-C3 has one built-in I2C interfaces.

The following table shows the default configuration of I2C interfaces used for ESP32-C3 boards. It can be overridden by [application-specific configurations](#esp32_application_specific_configurations).

Device   |Signal   |Pin   |Symbol   |Remarks
--------- | --------- | --------- | --------- | ---------
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)|||`#I2C0_SPEED`|default is `I2C_SPEED_FAST`
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)|SCL   |GPIO4   |`#I2C0_SCL`|-
[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)|SDA   |GPIO5   |`#I2C0_SDA`|-

PWM ChannelsThe ESP32-C3 LEDC module has 1 channel groups with 6 channels. Each of these channels can be clocked by one of the 4 timers.

SPI InterfacesESP32-C3 has three SPI controllers where SPI0 and SPI1 share the same bus. They are used as interface for external memory and can only operate in memory mode:

* Controller SPI0 is reserved for caching external memory like Flash

* Controller SPI1 is reserved for external memory like PSRAM

* Controller SPI2 can be used as general purpose SPI (also called HSPI)

* Controller SPI3 can be used as general purpose SPI (also called VSPI)

Thus, only SPI2 (FSPI) can be used as general purpose SPI in RIOT as [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9).

The following table shows the pin configuration used for most boards, even though it **can vary** from board to board.

Device   |Signal   |Pin   |Symbol   |Remarks
--------- | --------- | --------- | --------- | ---------
`SPI0_HOST`/`SPI1_HOST`|SPICS0   |GPIO14   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|SPICLK   |GPIO15   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|SPID   |GPIO16   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|SPIQ   |GPIO17   |-   |reserved for flash and PSRAM
`SPI0_HOST`/`SPI1_HOST`|SPIHD   |GPIO12   |-   |reserved for flash and PSRAM (only in `qio` or `qout` mode)
`SPI0_HOST`/`SPI1_HOST`|SPIWP   |GPIO13   |-   |reserved for flash and PSRAM (only in `qio` or `qout` mode)
`SPI2_HOST` (`FSPI`)   |SCK   |GPIO6   |`#SPI0_SCK`|can be used
`SPI2_HOST` (`FSPI`)   |MOSI   |GPIO7   |`#SPI0_MOSI`|can be used
`SPI2_HOST` (`FSPI`)   |MISO   |GPIO2   |`#SPI0_MISO`|can be used
`SPI2_HOST` (`FSPI`)   |CS0   |GPIO10   |`#SPI0_CS0`|can be used

TimersESP32-C3 has two timer groups with one timer each, resulting in a total of two timers. Thus one timer with one channel can be used in RIOT as timer device [TIMER_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__timer_1gac66133744b2b503740e6324e2efa644e), because one timer is used as system timer.

ESP32-C3 do not have CCOMPARE registers. The counter implementation can not be used.

UART InterfacesESP32 integrates three UART interfaces. The following default pin configuration of UART interfaces as used by a most boards can be overridden by the application, see section [Application-Specific Configurations](#esp32_application_specific_configurations).

Device   |Signal   |Pin   |Symbol   |Remarks
--------- | --------- | --------- | --------- | ---------
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|TxD   |GPIO1   |`#UART0_TXD`|cannot be changed
[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|RxD   |GPIO3   |`#UART0_RXD`|cannot be changed
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|TxD   |GPIO10   |`#UART1_TXD`|optional, can be overridden
[UART_DEV(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|RxD   |GPIO9   |`#UART1_RXD`|optional, can be overridden
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|TxD   |GPIO17   |`UART2_TXD`|optional, can be overridden
[UART_DEV(2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)|RxD   |GPIO16   |`UART2_RXD`|optional, can be overridden

JTAG InterfaceThere are two option on how to uese the JTAG interface on ESP32-C3:

* Using the built-in USB-to-JTAG bridge connected to an USB cable as follows: 
USB Signal   |ESP32-C3 Pin
--------- | ---------
D- (white)   |GPIO18
D+ (green)   |GPIO19
V_Bus (red)   |5V
Ground (black)   |GND

* Using an external JTAG adapter connected to the JTAG interface exposed to GPIOs as follows: 
JTAG Signal   |ESP32-C3 Pin
--------- | ---------
TRST_N   |CHIP_PU
TDO   |GPIO7 (MTDO)
TDI   |GPIO5 (MTDI)
TCK   |GPIO6 (MTCK)
TMS   |GPIO4 (MTMS)
GND   |GNDThis option requires that the USB D- and USB D+ signals are connected to the ESP32-C3 USB interface at GPIO18 and GPIO19.

Using the built-in USB-to-JTAG is the default option, i.e. the JTAG interface of the ESP32-C3 is connected to the built-in USB-to-JTAG bridge. To use an external JTAG adapter, the JTAG interface of the ESP32-C3 has to be connected to the GPIOs as shown above. For this purpose eFuses have to be burned with the following command: 
```cpp
espefuse.py burn_efuse JTAG_SEL_ENABLE --port /dev/ttyUSB0
```

Once the eFuses are burned with this command and option `JTAG_SEL_ENABLE`, GPIO10 is used as a bootstrapping pin to choose between the two options. If GPIO10 is HIGH when ESP32-C3 is reset, the JTAG interface is connected to the built-in USB to JTAG bridge and the USB cable can be used for on-chip debugging. Otherwise, the JTAG interface is exposed to GPIO4 ... GPIO7 and an external JTAG adapter has to be used.

Alternatively, the integrated USB-to-JTAG bridge can be permanently disabled with the following command: 
```cpp
espefuse.py burn_efuse DIS_USB_JTAG --port /dev/ttyUSB0
```

Once the eFuses are burned with this command and option `DIS_USB_JTAG`, the JTAG interface is always exposed to GPIO4 ... GPIO7 and an external JTAG adapter has to be used.

Burning eFuses is an irreversible operation.

For more information about JTAG configuration for ESP32-C3, refer to the section [Configure Other JTAG Interface](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c3/api-guides/jtag-debugging/configure-other-jtag.html) in the ESP-IDF documentation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

