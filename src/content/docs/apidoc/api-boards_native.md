---
title: api-boards_native.md
description: api-boards_native.md
---
# group `boards_native` 

Support for running RIOT in native.

[Family: native](https://github.com/RIOT-OS/RIOT/wiki/Family:-native)

Overview

Hardware

* CPU: Host CPU

* RAM: Host RAM

* Flash:

* for program execution: Host file system

* for the [Flash page driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__flashpage) : emulated in RAM

* [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork): Tap Interface

* UART: Runtime configurable - `/dev/tty*` are supported

* Timers: Host timer

* LEDs: One red and one green LED - state changes are printed to the UART

* PWM: Dummy PWM

* QDEC: Emulated according to PWM

* SPI: Runtime configurable - `/dev/spidev*` are supported (Linux host only)

* GPIO: Runtime configurable - `/dev/gpiochip*` are supported (Linux host only)

Required packagesOn Debian/Ubuntu you can install the required libraries with

```cpp
sudo apt install gcc-multilib
```

Likewise, for the unittest execution, `libasan5` is needed for 32 bit binaries. On Debian/Ubuntu you can install the required libraries with

```cpp
sudo apt install lib32asan5
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

