---
title: api-boards_msbiot.md
description: api-boards_msbiot.md
---
# group `boards_msbiot` 

Support for the MSB-IoT board.

OverviewThe MSB-IoT was developed at FU Berlin and is based on a STM32F415RG MCU.

HardwareMCUThe centerpiece of the MSB-IoT is the STM32F415RG MCU. With a maximum frequency of 168 MHz it offers high performance for a microcontroller of its category. The STM32F415RG comes with a huge set of accessible communication interfaces and features that are listed [here](http://www.st.com/web/catalog/mmc/FM141/SC1169/SS1577/LN1035/PF252143?sc=internet/mcu/product/252143.jsp).

MCU   |STM32F415RG
--------- | ---------
Family   |ARM Cortex-M4
Vendor   |ST Microelectronics
RAM   |192KiB (128KiB RAM + 64KiB CCMRAM)
Flash   |1024KiB
Frequency   |up to 168MHz
FPU   |yes
Timers   |14 (12x 16bit, 2x 32bit [TIM2 + TIM5])
ADCs   |3x 12-bit (16 channel)
UARTs   |6 (4 USART, 2 UART)
SPIs   |3
I2Cs   |3
Vcc   |1.8V - 3.6V
Datasheet   |[Datasheet](http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/DM00035129.pdf)
Reference Manual   |[Reference Manual](http://www.st.com/st-web-ui/static/active/en/resource/technical/document/reference_manual/DM00031020.pdf)
Programming Manual   |[Programming Manual](http://www.st.com/st-web-ui/static/active/en/resource/technical/document/programming_manual/DM00046982.pdf)

GPIO PinsThe following picture shows the easily accessible pins of the board:

User Interface3 Buttons
NAME   |User Button T1   |User Button T2   |T RESET
--------- | --------- | --------- | ---------
Pin   |PB13   |PA0   |NRST

The user buttons are mapped to GPIO_0 (Button T2) and GPIO_8 (Button T1) in the board's default configuration file for RIOT. To configure and use the buttons, you can use RIOT's [GPIO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio).

Pushing the reset button will always reset the board and restart your application.

3 user controllable LEDs
NAME   |LED_RED   |LED_YELLOW   |LED_GREEN
--------- | --------- | --------- | ---------
Color   |red   |yellow   |green
Pin   |PB8   |PB14   |PB15
Pin Alias   |[LED0_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#samr34-xpro_2include_2board_8h_1a3fc522fda449d6edde717d6a857429cf)|[LED1_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#samr34-xpro_2include_2board_8h_1a318aa17e5d40e2132d2c7f6269ce7f51)|[LED2_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#nrf9160dk_2include_2board_8h_1af6f84078113b55354d20585131b386f7)
Macros   |[LED0_ON](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1ga1e48dc02333bfc2e6ad3e5bd466eecd4), ...   |[LED1_ON](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gaadd4c7ae0cd4e9bbb17f7055dd51fe08), ...   |[LED2_ON](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gab55f588eb2c5177d3f7806e60d379fba), ...

The LEDs can be controlled inside your RIOT application by using the LED macros [LED0_ON](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1ga1e48dc02333bfc2e6ad3e5bd466eecd4), [LED0_OFF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gaef2e39b9fd343d0e437fac0463f3e02d), and [LED0_TOGGLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gaebc6389533d9fc8dcbe4d2129a4d5a45) for the red LED, [LED1_ON](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gaadd4c7ae0cd4e9bbb17f7055dd51fe08), [LED1_OFF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1ga343fd2d3ce61b84f88ddfaea32c67c58), and [LED1_TOGGLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1ga267fdbba1d750146b73da35c1731fd17) for the yellow LED, and [LED2_ON](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gab55f588eb2c5177d3f7806e60d379fba), [LED2_OFF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gac6468b1df4dfabcca0bb142044d6f976), and [LED2_TOGGLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__led_1gacd16785845ce7004334b91a98707f8eb) for the green LED.

There is also a yellow charge LED on the board indicating the charging process of the battery.

1 Beeper
NAME   |Beeper
--------- | ---------
Pin   |PB09

The board's beeper allows for acoustic feedback. It needs a PWM signal between 1-5 kHz and is connected to pin PB9 and mapped to PWM_0 in RIOT. To configure and use the beeper inside your application, you can use RIOT's [PWM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__pwm).

CC1101 Sub-1GHz RF TransceiverThe board has an integrated CC1101 Sub-1GHz RF Transceiver which is connected to the MCU using the SPI. The transceiver allows for energy-efficient local communication in the frequency band below 1 GHz. The driver for the CC1101 automatically loaded when the pseudo module `netdev_default` is used.

Product   |CC1101
--------- | ---------
Type   |Sub-1GHz RF Transceiver
Vendor   |Texas Instruments
Datasheet   |[Datasheet](http://www.ti.com/lit/ds/symlink/cc1101.pdf)
Errata Sheet   |[Errata Sheet](https://www.ti.com/lit/er/swrz020e/swrz020e.pdf)
Other Technical Documents   |[TI Webpage](http://www.ti.com/product/CC1101/technicaldocuments)
Driver   |[CC1100/CC1100e/CC1101 Sub-GHz transceiver driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__cc110x)
SPI Device   |SPI1 (Mapped to SPI_0 in RIOT)
SCL   |PA5
MISO   |PA6
MOSI   |PA7
CS   |PB12
GDO0   |PC4
GDO2   |PC5

CC3000 802.11b/g Wi-Fi ModuleIn addition to the CC1101, the MSB-IoT also features a CC3000 Wi-Fi Module. The CC3000 is a self-contained wireless network module with a full embedded IPv4 TCP/IP stack that for example allows to use the MSB-IoT as a gateway node to the internet. Please note that the CC3000 only supports operation in infrastructure mode and therefore always needs to be connected to an access point to be used for communication.

The CC3000's driver implementation for RIOT includes the full driver provided by Texas Instruments. The API documentation from TI can be found [here](http://software-dl.ti.com/ecs/simplelink/cc3000/public/doxygen_API/v1.14/html/index.html). To use the CC3000 in RIOT, just add `USEMODULE += cc3000` to your application's Makefile.

The driver for the CC3000 is not yet merged into RIOT's master branch. Please see pull request [#2603](https://github.com/RIOT-OS/RIOT/pull/2603) for progress on the inclusion.

Product   |CC3000
--------- | ---------
Type   |802.11b/g Wi-Fi Module
Vendor   |Texas Instruments
Datasheet   |[Datasheet](https://web.archive.org/web/20171109015601/http://www.ti.com/lit/ds/symlink/cc3000.pdf)
Errata Sheet   |[Errata Sheet](http://www.ti.com/lit/er/swrz044b/swrz044b.pdf)
Other Technical Documents   |[TI Webpage](https://web.archive.org/web/20190825013529/http://www.ti.com/product/CC3000/technicaldocuments)
TI Support Forum   |[WiFi Forum](https://e2e.ti.com/support/wireless-connectivity/wifi/f/968)
Driver   |[Pull Request](https://github.com/RIOT-OS/RIOT/pull/2603)
SPI Device   |SPI2 (Mapped to SPI_1 in RIOT)
SCL   |PB10
MISO   |PC2
MOSI   |PC3
CS   |PC1
WLAN_ENABLE   |PC13
IRQ Line   |PA10

MPU-9150 Nine-Axis MotionTracking DeviceThe MSB-IoT is equipped with a MPU-9150 MotionTracking Device from Invensense. The device combines a gyroscope, a magnetometer and an accelerometer in one module.

Due to licensing issues, the current MPU-9150 driver implementation for RIOT is not based on Invensense's 'Motion Driver' library and offers only a limited set of features. Nonetheless, the RIOT driver allows to configure and read values from all three sensors of the device. For an overview on the supported features, you can check the driver's documentation in [MPU-9X50 (MPU9150 and MPU9250) accelerometer/magnetometer/gyroscope](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50).

A sample RIOT application for the MPU-9150 that utilizes the driver can be found [here](https://github.com/RIOT-OS/RIOT/tree/master/tests/drivers/mpu9x50).

Product   |MPU-9150
--------- | ---------
Type   |Nine-Axis MotionTracking Device (Gyro, Accel and Compass)
Vendor   |Invensense
Product Specification   |[Product Specification](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-9150-Datasheet.pdf)
Register Map   |[Register Map](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-9150-Register-Map.pdf)
Driver   |[MPU-9X50 (MPU9150 and MPU9250) accelerometer/magnetometer/gyroscope](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mpu9x50)
I²C Device   |I2C1 (Mapped to I2C_0 in RIOT)
SCL   |PB6
SDA   |PB7
IRQ Line   |PB11

Other componentsFor the following components of the MSB-IoT, there is currently no support in RIOT: [TCA6416 16-Bit I/O Expander](http://www.ti.com/product/tca6416) Micro-SD-Card Interface

Compiling, Flashing and DebuggingThis section only covers the automated functionality provided by RIOT's makefile system. If you don't want to rely on RIOT's make targets for flashing or debugging (for instance to use a different flashing tool), please check the documentation of your used tools.

PrerequisitesWe strongly recommend the usage of the [GNU Tools for ARM Embedded Processors](https://launchpad.net/gcc-arm-embedded) toolchain for the MSB-IoT. Support for other toolchains was not tested!

RIOT's provided functionality for debugging and flashing the MSB-IoT is based on the [Open On-Chip Debugger](http://openocd.org/) tool. A wiki page with installation instructions and some other information can be found [here](https://github.com/RIOT-OS/RIOT/wiki/OpenOCD).

Quick startFor a quick getting started guide you can stick to the steps explained on [this page](https://github.com/RIOT-OS/RIOT/wiki/Getting-started-with-STM32F%5B0%7C3%7C4%5Ddiscovery-boards). Just make sure to use "msbiot" as the respective board name.

Compiling
```cpp
fabian@fabian-ThinkPad-L412:~/myriot/RIOT/examples/hello-world$ BOARD=msbiot
make
Building application "hello-world" for "msbiot" with MCU "stm32f4".

"make" -C /home/fabian/myriot/RIOT/boards/msbiot
"make" -C /home/fabian/myriot/RIOT/core
"make" -C /home/fabian/myriot/RIOT/cpu/stm32f4
"make" -C /home/fabian/myriot/RIOT/cpu/cortex-m4_common
"make" -C /home/fabian/myriot/RIOT/cpu/stm32f4/periph
"make" -C /home/fabian/myriot/RIOT/drivers
"make" -C /home/fabian/myriot/RIOT/sys
"make" -C /home/fabian/myriot/RIOT/sys/auto_init
   text     data     bss     dec     hex filename
  11116      116    6444   17676    450c
/home/fabian/myriot/RIOT/examples/hello-world/bin/msbiot/hello-world.elf
```

Flashing
```cpp
fabian@fabian-ThinkPad-L412:~/myriot/RIOT/examples/hello-world$ BOARD=msbiot
make flash
Building application "hello-world" for "msbiot" with MCU "stm32f4".

"make" -C /home/fabian/myriot/RIOT/boards/msbiot
"make" -C /home/fabian/myriot/RIOT/core
"make" -C /home/fabian/myriot/RIOT/cpu/stm32f4
"make" -C /home/fabian/myriot/RIOT/cpu/cortex-m4_common
"make" -C /home/fabian/myriot/RIOT/cpu/stm32f4/periph
"make" -C /home/fabian/myriot/RIOT/drivers
"make" -C /home/fabian/myriot/RIOT/sys
"make" -C /home/fabian/myriot/RIOT/sys/auto_init
   text     data     bss     dec     hex filename
  11116      116    6444   17676    450c
/home/fabian/myriot/RIOT/examples/hello-world/bin/msbiot/hello-world.elf
/home/fabian/myriot/RIOT/dist/tools/openocd/openocd.sh flash
### Flashing Target ###
Open On-Chip Debugger 0.8.0 (2015-03-01-08:19)
Licensed under GNU GPL v2
For bug reports, read
 http://openocd.sourceforge.net/doc/doxygen/bugs.html
srst_only separate srst_nogate srst_open_drain connect_deassert_srst
Info : This adapter doesn't support configurable speed
Info : STLINK v2 JTAG v17 API v2 SWIM v4 VID 0x0483 PID 0x3748
Info : using stlink api v2
Info : Target voltage: 3.183191
Info : stm32f4x.cpu: hardware has 0 breakpoints, 0 watchpoints
Error: jtag status contains invalid mode value - communication failure
Polling target stm32f4x.cpu failed, GDB will be halted. Polling again in
100ms
Error: jtag status contains invalid mode value - communication failure
Polling target stm32f4x.cpu failed, GDB will be halted. Polling again in
300ms
    TargetName         Type       Endian TapName            State
--  ------------------ ---------- ------ ------------------ ------------
 0* stm32f4x.cpu       hla_target little stm32f4x.cpu       unknown
target state: halted
target halted due to debug-request, current mode: Thread
xPSR: 0x01000000 pc: 0x080002fc msp: 0x2000ab48
Polling target stm32f4x.cpu succeeded again
target state: halted
target halted due to debug-request, current mode: Thread
xPSR: 0x01000000 pc: 0x080002fc msp: 0x2000ab48
   Programming Started **
auto erase enabled
Info : stm32f4x errata detected - fixing incorrect MCU_IDCODE
Info : device id = 0x10006413
Info : flash size = 1024kbytes
target state: halted
target halted due to breakpoint, current mode: Thread
xPSR: 0x61000000 pc: 0x20000042 msp: 0x2000ab48
wrote 16384 bytes from file /home/fabian/myriot/RIOT/examples/hello-
world/bin/msbiot/hello-world.hex in 0.869447s (18.403 KiB/s)
   Programming Finished **
   Verify Started **
target state: halted
target halted due to breakpoint, current mode: Thread
xPSR: 0x61000000 pc: 0x2000002e msp: 0x2000ab48
verified 11232 bytes in 0.124356s (88.204 KiB/s)
   Verified OK **
shutdown command invoked
shutdown command invoked
Done flashing
```

Debugging
```cpp
fabian@fabian-ThinkPad-L412:~/myriot/RIOT/examples/hello-world$ BOARD=msbiot
make debug
/home/fabian/myriot/RIOT/dist/tools/openocd/openocd.sh debug
### Starting Debugging ###
Open On-Chip Debugger 0.8.0 (2015-03-01-08:19)
Licensed under GNU GPL v2
For bug reports, read
 http://openocd.sourceforge.net/doc/doxygen/bugs.html
GNU gdb (GNU Tools for ARM Embedded Processors) 7.6.0.20131129-cvs
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  Type "show copying"
and "show warranty" for details.
This GDB was configured as "--host=i686-linux-gnu --target=arm-none-eabi".
For bug reporting instructions, please see:
<http://www.gnu.org/software/gdb/bugs/>...
Reading symbols from /home/fabian/myriot/RIOT/examples/hello-
world/bin/msbiot/hello-world.elf...done.
Remote debugging using :3333
reset_handler () at /home/fabian/myriot/RIOT/cpu/stm32f4/startup.c:54
54   {
(gdb)
```

Using the UART for STDIOThe MCU's USART2 is set as the default input/output for the MSB-IoT inside RIOT (mapped to UART_0). It is initialized and configured automatically for every RIOT application and can be used for communication with your computer. The easiest way is to use an USB to TTL adapter:

Step 1: Connect your adapter and the boards pin strip with RX<=>PA02, TX<=>PA03 and GND<=>GND

Step 2: Done. The MCUs USART2 is used as STDIO.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

