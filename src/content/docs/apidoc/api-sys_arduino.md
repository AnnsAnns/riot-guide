---
title: api-sys_arduino.md
description: api-sys_arduino.md
---
# group `sys_arduino` 

Arduino in RIOT.

AboutThis module enables users to run unmodified Arduino sketches in RIOT. For this we aim at supporting the full Arduino API.

The support of the Arduino API in RIOT is useful for multiple reasons:

* starting point for beginners

* run your existing sketches on any non-Arduino hardware supported by RIOT

* makes it easy to move from Arduino to RIOT

* use Arduino device drivers in RIOT

* is fun to implement :-)

Refer to [Arduino API](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__arduino__api) for the actual API documentation

General usageTo run your Arduino sketch in RIOT, just follow these steps:

* create an empty application

* add the `arduino` module to your application, your `Makefile` should now look something like this: 
```cpp
APPLICATION = YOUR_APP_NAME
BOARD ?= YOUR_TARGET_PLATFORM
RIOTBASE ?= PATH_TO_RIOT_ROOT

USEMODULE += arduino

include $(RIOTBASE)/Makefile.include
```

* copy your Arduino sktech(es) into your application folder. Currently they must have the file ending `*.sketch` to be processed.

* build, flash, and run your application the usual RIOT-way: simply call `make all`, `make flash`, `make term`, etc.

That's all. As bonus you can of course use any existing RIOT code inside your Arduino sketches - you simply have to add the includes to your sketch and the corresponding modules to your `Makefile`.

So far, all Arduino sketches MUST have the file ending `*.sketch` to be recognized by RIOT's build system

ConceptFor enabling RIOT to run Arduino sketches, we extended the build system to handle `*.sketch` files and we implemented the Arduino API using RIOT's native functions.

Extension of the build systemBuilding Arduino sketches in RIOT is done in a three step process.

First, the make system defines a generated `arduino_sketches` module placed into ``[Arduino sketches makefile](https://github.com/RIOT-OS/RIOT/tree/master/sys/arduino/sketches.inc.mk), which is included from the [Makefile.include](https://github.com/RIOT-OS/RIOT/tree/master/sys/arduino/Makefile.include) of the RIOT Arduino module. The generated module is added to used modules and build directories.

Second, as prerequisites for the `link` target, the make system will create the module into `/arduino_sketches` with an `arduino_sketches.cpp` source file. Into this file, it copies some Arduino glue code ( [pre.snip](https://github.com/RIOT-OS/RIOT/blob/master/sys/arduino/pre.snip) and [post.snip](https://github.com/RIOT-OS/RIOT/blob/master/sys/arduino/post.snip)) together with the contents of all `*.sketch` files contained in the application folder.

Third, the RIOT make system is called as usual, building the generated library with the Arduino code and including it in the final firmware.

Implementation of the Arduino APIFor supporting the Arduino API, we have created our own function and class definitions, using the exact same signatures as in the original Arduino header files. These headers are then implemented using standard RIOT APIs, e.g. the peripheral drivers, `xtimer`, etc.

Add Arduino support to a boardAs prerequisite, the board must have support for C++. Support for the standard C++ lib (feature `libstdcpp`) is not required.

As a minimum requirement, the features `arduino_pins` is a hard dependency. See [Digital Pins](#iomaps_1iomaps-mapping-gpio) what a board needs to provide this.

Additional mappings for analog pins (see [Analog Pins](#iomaps_1iomaps-mapping-adc)) and PWM pins (see [PWM Pins](#iomaps_1iomaps-mapping-pwm)) is required to be able to use `[analogRead()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__arduino__api_1ga6a005b7bdfeeca9d1d61b38929f34c58)` and `[analogWrite()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__arduino__api_1ga86bb4d3e9f1bdb233cf01d835adcede0)`.

See also [IO-Mapping and Shields](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#iomaps) on how a board can provide more I/O mappings and even declare electrical and mechanical compatibility with common Arduino form factors.

Open issues
> Todo: Make it possible to bootstrap Arduino code manually from any RIOT application. Include a pseudomule as e.g. arduino_base, which does not implement a main function calling `setup()` and `loop()`, so these functions have to be called manually from a RIOT application. 

Implement analog outputs (PWM mapping) 

Implement analog inputs (ADC mapping) 

Add means to include various Arduino Libraries (maybe as pkg?) 

Implement anything else that is missing... 

Adapt Arduino build script, so sketches do not have to have the file ending `*.sketch` anymore

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

