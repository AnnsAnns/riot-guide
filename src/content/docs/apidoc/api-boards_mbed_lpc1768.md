---
title: api-boards_mbed_lpc1768.md
description: api-boards_mbed_lpc1768.md
---
# group `boards_mbed_lpc1768` 

Support for the mbed LPC1768 board.

Overviewmbed LPC1768 is a small development board by ARM. A LPC1768, an Ethernet PHY transceiver (DP83848J), a 2MB flash device (AT45DB161D) and a MBED-IF01 (LPC2148) are present on the board. This board aims to make it very easy to flash a new firmware. There is no need for an external programmer. The sole purpose of the MBED-IF01 is to appear as a USB flash drive when the board is connected over USB to a computer. The most recent binary file stored on the USB drive is flashed on the next reset.

See [here](https://os.mbed.com/platforms/mbed-LPC1768/) for more information about the board.

HardwareMCU
MCU   |LPC1768FDB100
--------- | ---------
Family   |ARM Cortex-M3
Vendor   |NXP
RAM   |64KiB SRAM
Flash   |512KiB
Frequency   |up to 100MHz
Timers   |4
UARTs   |4
SPIs   |2
I2Cs   |3
CAN   |2
PWM   |6
USB Host/Device   |1
Ethernet   |1
RTC   |1
ADC   |8 (all 12-bit)
Vcc   |2.4V - 3.6V
Datasheet   |[Datasheet](http://www.nxp.com/documents/data_sheet/LPC1769_68_67_66_65_64_63.pdf)
User Manual   |[User Manual](http://www.nxp.com/documents/user_manual/UM10360.pdf)

User Interface1 Button:

NAME   |SW1
--------- | ---------
Pin   |RESET

5 LEDs:

NAME   |LED1   |LED2   |LED3   |LED4   |STATUS
--------- | --------- | --------- | --------- | --------- | ---------
Color   |blue   |blue   |blue   |blue   |blue
Pin   |P1.18   |P1.20   |P1.21   |P1.23   |N/A

Status LED is not controlled by the LPC1768.

Implementation Status
Device   |ID   |Supported   |Comments
--------- | --------- | --------- | ---------
MCU   |lpc1768   |yes   |
Low-level driver   |GPIO   |yes   |
|ADC   |no   |
|PWM   |no   |
|UART   |yes   |
|I2C   |no   |
|SPI   |no   |
|USB   |no   |
|Ethernet   |no   |
|RTT   |no   |
|RTC   |no   |
|[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer)|yes   |

Using UARTThis board opens a serial interface through the USB automatically.

Supported ToolchainsFor using the mbed LPC1768 board we strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain.

Flashing the deviceThe easiest way to flash the device is to connect to the board via USB. The board appears as a 2MB usb drive. `make flash` will copy your binary file to the root directory but you need to manually reset your board by pressing the reset button. While the LPC1768 is flashed by the MBED-IF01 with the new firmware, the status LED blinks fast.

Known IssuesDoes not compile with the mentor graphics toolchain (compare [https://github.com/RIOT-OS/RIOT/issues/751](https://github.com/RIOT-OS/RIOT/issues/751))

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

