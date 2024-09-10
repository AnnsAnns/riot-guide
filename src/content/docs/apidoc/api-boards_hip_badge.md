---
title: api-boards_hip_badge.md
description: api-boards_hip_badge.md
---
# group `boards_hip_badge` 

Support for the Hacking in Parallel Badge.

Benjamin Valentin [benjamin.valentin@ml-pa.com](mailto:benjamin.valentin@ml-pa.com)

The HiP Badge is a board that was given to participants of the 2022 *Hacking in Parallel* event.

Features

* ESP32-C3FH4AZ SoC

* I2C via SAO headers

* UART via pin headers

* 16 WS2812B LEDs

* USB-C Serial/JTAG

* 3 User button / 1 Reset button

* ST25DV04K NFC/I2C EEPROM (TODO: driver)

Flashing the deviceThe device can be programmed using the USB-C Serial/JTAG feature. Just plug in a cable to your computer and flash the device with make BOARD=hip-badge flash
 This should automatically reset the ESP32C3 into bootloader mode and start the download process. If for some reason this gets stuck or the badge does not register as a /dev/ttyACMx device, you can manually force it into bootloader mode by pressing the reset button (SW3/blue) while holding the BOOT button (SW4). When doing this, the device will still be in bootloader mode after flashing, you have to press the reset button (SW3/blue) again to start your application.

There is currently still a bug in the USB Serial stdio implementation: After flashing or a reboot, there is no output. Do a manual reset (press the reset button) to restore output.

BugsThe event (and badge) were organized on short notice (6 Weeks), so there are some hardware issues:

* No WiFi/BLE antenna. There is a pad on the back of the PCB where a socket was supposed to be, but nothing is connected. You can try solder something onto it yourself, but the trace is already long and winded. BLE works with the existing trace alone (on short range), WiFi/ESP Now does not.

* IR transceiver broken. Can be fixed with a steady hand?

* SGP30 air quality sensor is only populated on some boards (red case)

* MAX17048 fuel gauge not populated

Resources

* [Badge Clinic](https://wiki.hip-berlin.de/index.php?title=Badge_Clinic)

* [Design files](https://gitlab.com/tidklaas/hip-badge/)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

