---
title: api-pkg_micropython.md
description: api-pkg_micropython.md
---
# group `pkg_micropython` 

MicroPython - Python for microcontrollers.

MicroPython RIOT package"MicroPython is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments."

**See also**: [https://micropython.org](https://micropython.org)

StatusMicroPython on RIOT has to be considered experimental. While the basic interpreter works fairly well on native and Cortex-M, it has not seen much testing.

Configuration optionsUse the following environment variables in the application Makefile or from the command line to configure MicroPython:

MP_RIOT_HEAPSIZE: heap size for MicroPython, in bytes. Defaults to 16KiB.

Example on the command line: 
```cpp
MP_RIOT_HEAPSIZE=2048 make -C examples/micropython
```

Implementation detailsThe RIOT port of MicroPython currently resides in a fork at [https://github.com/kaspar030/micropython](https://github.com/kaspar030/micropython) (in branch add_riot_port). It is based on Micropython's "ports/minimal" with some extra modules enabled. It reuses the gc_collect code from ports/unix, which has special support for i386 and Cortex-M. On other platforms, it uses setjmp() to collect registers.

MicroPython's test suiteIt is possible to run MicroPython's test suite for testing this port.

Steps:

* make -Cexamples/micropython flash

* cd examples/micropython/bin/pkg/${BOARD}/micropython

* git apply ports/riot/slow_uart_writes.patch

* cd tests

* ./run-tests target pyboard device ${PORT}

MicroPython modulesCurrently, the port enables only a subset of the available MycroPython modules. See "ports/riot/mpconfigport.h" for details.

For now, the utime module has RIOT specific code and should work as expected.

RIOT specific modulesCurrently, these are implemented:

thread_getpid()>>> import riot
>>> print(riot.thread_getpid())

xtimer>>> import xtimer
>>>
>>> a = 0
>>> def inc_a():
>>>   global a
>>>   a += 1
>>>
>>> t = xtimer.xtimer(inc_a)
>>> t.set(100000)
>>> print(a)

How to useSee examples/micropython for example code.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

