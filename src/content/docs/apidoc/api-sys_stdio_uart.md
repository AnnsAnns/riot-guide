---
title: api-sys_stdio_uart.md
description: api-sys_stdio_uart.md
---
# group `sys_stdio_uart` 

Standard input/output backend using UART.

To enable stdio over UART, enable the `stdio_uart` module: USEMODULE += stdio_uart
For many board, `stdio_uart` is already the default stdio backend and therefore already enabled.

InputStandard input is disabled by default on UART. To enable it, load the `stdin` module in your application: 
```cpp
USEMODULE += stdin
```

UART ConfigurationRunning `make BOARD=<your_board> term` will launch `pyterm` with the correct parameters, so mostly you do not really need to care about the UART configuration.

By convention RIOT boards used 8N1 encoding with a symbol rate of 115200 Bd for the UART used as stdio. However, some boards may have a different configuration due to hardware limitations. Most notably, many AVR boards use 9600 Bd as symbol rate instead, as they otherwise frequently loose an input character due to losing interrupts.

By default UNIX style line endings (``) are used. However, some terminal programs default to DOS style line endings (`\r\n`). It usually is better to configure the terminal program on the host to use UNIX style line endings. In scenarios this is not possible/desired, you can enable the (pseudo-) module [Support for DOS line endings in STDIO-UART](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__stdio__uart__onlcr) to emit DOS style line endings instead.

RIOT's shell happily accepts both DOS and UNIX style line endings in any case, so typically no line ending conversion is needed on the input.

STDIO from ISR> Using STDIO over UART from interrupt context should be avoided, except for debugging purposes

For testing purposes and using STDIO within an ISR should mostly work good enough and for some platforms even reliable. Production code however should fully avoid any access to STDIO from interrupt context. Instead, e.g. an event could be posted to an [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event) and the actual STDIO operation being deferred to thread context.

Some reasons why STDIO over UART from ISR should be avoided:* UART is *slow* and the system easily remains in interrupt context for unacceptable long time.

* E.g. sending 100 chars at 9600 baud will block the system for 100 milliseconds.

* Missed deadlines, lost interrupts, or watch dog timer resets can easily be caused by this.

* Even if DMA is used for UART, using STDIO within ISR can cause significant delays: If the buffer is full, an UART implementation will be forced to resort to synchronously send the data, rather than using DMA. This might cause even more headache, as the available memory in the DMA buffer when an ISR is triggered has to be assumed as randomly distributed. Thus, hard to reproduce and indeterministic bugs can be the result.

* If an ISR is triggered from a power saving mode, some peripherals or clock domains might still be offline during that ISR; including the UART peripheral. This is a valid implementation choice to allow time critical low power scenarios being covered by RIOT. Thus, be prepared to loose output when using STDIO from ISR.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`STDIO_UART_DEV`](#group__sys__stdio__uart_1ga81935d479349dc2ce0a416bcb0e6beda)            | UART device to use for STDIO.
`define `[`STDIO_UART_BAUDRATE`](#group__sys__stdio__uart_1gab2f12549369d69d3db8f38d49c8ca507)            | Baudrate for STDIO.

## Members

#### `define `[`STDIO_UART_DEV`](#group__sys__stdio__uart_1ga81935d479349dc2ce0a416bcb0e6beda) 

UART device to use for STDIO.

#### `define `[`STDIO_UART_BAUDRATE`](#group__sys__stdio__uart_1gab2f12549369d69d3db8f38d49c8ca507) 

Baudrate for STDIO.

