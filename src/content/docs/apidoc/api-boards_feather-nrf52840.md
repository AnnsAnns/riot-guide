---
title: api-boards_feather-nrf52840.md
description: api-boards_feather-nrf52840.md
---
# group `boards_feather-nrf52840` 

Support for the Adafruit Feather nRF52840 Express.

General informationThe [Feather nRF52840 Express](https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/) is a development board from Adafruits Feather board family. It provides native USB support, Bluetooth Low Energy and IEEE 802.15.4 support via the nRF52840 MCU.

Flash the boardThe board is flashed using its on-board UF2 boot loader by default. The boot loader will present a mass storage device that has to be mounted to /media/MDK-DONGLE so `uf2conv.py` can find it. If you have an auto-mounter installed this will happen automatically.

The rest of the process is automated in the usual way with `BOARD=feather-nrf52840`.

Example with `hello-world` application: 
```cpp
make BOARD=feather-nrf52840 -C examples/hello-world flash term
```

If RIOT is already running on the board, it will automatically reset the CPU and enter the bootloader. If some other firmware is running or RIOT crashed, you need to enter the bootloader manually by double-tapping the board's reset button while the device is connected.

Otherwise see the **Flashing** section in [nRF52 common](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__common__nrf52). The easiest way is to use an external Segger J-Link Programmer connected to the [SWD Connector](https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/pinouts#swd-connector-3-12).

Flashing the uf2 bootloaderTo flash the uf2 bootloader (if it is no longer present on your BOARD), you need to have [`nrfjprog`](https://www.nordicsemi.com/Products/Development-tools/nRF-Command-Line-Tools) installed, connect a jlink to your BOARD and execute the following commands:

```cpp
git clone git@github.com:adafruit/Adafruit_nRF52_Bootloader.git
cd Adafruit_nRF52_Bootloader
# only download what is needed, use
#     `git submodule update --init --recursive`
# to download everything
git submodule update --init
git -C lib/tinyusb submodule update --init hw/mcu/nordic/nrfx/
pip3 install --user adafruit-nrfutil
make BOARD=feather_nrf52840_express all
make BOARD=feather_nrf52840_express flash
```

TerminalTo connect a terminal to the Feather, RIOT chooses `stdio_cdc_acm` per default. This lets you access the Feather directly over USB.

You have several alternative possibilities to connect to the board.

* With 
```cpp
USEMODULE += stdio_uart
```
 and an FTDI adapter connected to the Feather's RX and TX ports you can use UART-based terminals to connect to the feather

* With 
```cpp
USEMODULE += stdio_rtt
```
 you can use the Segger J-Link Programmer as a serial interface to the device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

