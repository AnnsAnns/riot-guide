---
title: api-sys_stdio_semihosting.md
description: api-sys_stdio_semihosting.md
---
# group `sys_stdio_semihosting` 

Standard input/output backend using ARM Semihosting.

The ARM Semihosting provides an STDIO backend using the ARM Semihosting protocol. The main advantage of Semihosting is that is allows STDIO over the SWD/JTAG debugging interface already available on ARM microcontrollers.

ARM Semihosting works by using the breakpoint instructing to trigger the debugger to read the output or to write the input chars. Please be aware that this might skew the timing of your application.

The main disadvantage of Semihosting is that it is relative slow (even when compared to serial uart), and that it requires an active debug session to handle the breakpoint instructions. Without an active debug session the CPU will halt on the first STDIO activity until the breakpoint is handled by the debugger. Don't forget to disable the Semihosting module or replace it with stdio_null when switching to production builds.

As this is an ARM specific protocol, this module will only work on ARM-based microcontrollers.

UsageEnable Semihosting-based stdio by adding the following module to your makefile:

```cpp
USEMODULE += stdio_semihosting
```

If semihosting is not the default stdio mechanism of your board, the `RIOT_TERMINAL` variable has to be set to `semihosting`:

```cpp
make term RIOT_TERMINAL=semihosting
```

Launching the terminal will start an OpenOCD session with semihosting enabled. This can be used for both STDIO interaction and for debugging the firmware.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`STDIO_SEMIHOSTING_RX`](#group__sys__stdio__semihosting_1ga9fd1a2194c1d39034c91b5c814be48ba)            | Enable reception for Semihosting.

## Members

#### `define `[`STDIO_SEMIHOSTING_RX`](#group__sys__stdio__semihosting_1ga9fd1a2194c1d39034c91b5c814be48ba) 

Enable reception for Semihosting.

Automatically enabled when including the `stdin` module

