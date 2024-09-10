---
title: api-sys_stdio.md
description: api-sys_stdio.md
---
# group `sys_stdio` 

Simple standard input/output (STDIO) abstraction for RIOT.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`STDIO_RX_BUFSIZE`](#group__sys__stdio_1ga0435de87ff46b82a46f4007b2a462237)            | Buffer size for STDIO.
`define `[`STDIO_PROVIDER`](#group__sys__stdio_1ga6dc1bcd5be8789a283eb14d4bee92425)            | stdio implementation methods
`enum `[`@390`](#group__sys__stdio_1ga83f72dd946185574b53be115821f6876)            | 
`public void `[`stdio_init`](#group__sys__stdio_1ga564258b529946cb61177bc649b83c6be)`(void)`            | initialize the module
`public int `[`stdio_available`](#group__sys__stdio_1ga9158efc70474ad369c5ea17f4eed2baf)`(void)`            | Get the number of bytes available for reading from stdio.
`public ssize_t `[`stdio_read`](#group__sys__stdio_1ga5914592cd666147d93a856a66e0743f0)`(void * buffer,size_t max_len)`            | read `len` bytes from stdio uart into `buffer`
`public ssize_t `[`stdio_write`](#group__sys__stdio_1ga976c9a6e5790244bf3bcbbe6bcdc1c78)`(const void * buffer,size_t len)`            | write `len` bytes from `buffer` into STDOUT
`public void `[`stdio_close`](#group__sys__stdio_1ga150896c17fb2f6d3d96e639016fad793)`(void)`            | Disable stdio and detach stdio providers.
`struct `[`stdio_provider_t`](#structstdio__provider__t) | stdio provider struct

## Members

#### `define `[`STDIO_RX_BUFSIZE`](#group__sys__stdio_1ga0435de87ff46b82a46f4007b2a462237) 

Buffer size for STDIO.

#### `define `[`STDIO_PROVIDER`](#group__sys__stdio_1ga6dc1bcd5be8789a283eb14d4bee92425) 

stdio implementation methods

#### Parameters
* `_type` stdio provider type, for identification 

* `_open` attach / init function 

* `_close` close / disable function 

* `_write` write function

#### `enum `[`@390`](#group__sys__stdio_1ga83f72dd946185574b53be115821f6876) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
STDIO_NULL            | dummy stdio
STDIO_UART            | stdio via UART
STDIO_RTT            | stdio via Segger RTT
STDIO_SEMIHOSTING            | stdio via Semihosting
STDIO_USBUS_CDC_ACM            | stdio via USB CDC ACM (usbus)
STDIO_TINYUSB_CDC_ACM            | tdio via USB CDC ACM (TinyUSB)
STDIO_ESP32_SERIAL_JTAG            | stdio via ESP32 debug Serial/JTAG
STDIO_NIMBLE            | stdio via BLE (NimBLE)
STDIO_UDP            | stdio via UDP
STDIO_TELNET            | stdio via telnet
STDIO_ETHOS            | stdio via ethos (mutiplex)
STDIO_SLIP            | 

#### `public void `[`stdio_init`](#group__sys__stdio_1ga564258b529946cb61177bc649b83c6be)`(void)` 

initialize the module

#### `public int `[`stdio_available`](#group__sys__stdio_1ga9158efc70474ad369c5ea17f4eed2baf)`(void)` 

Get the number of bytes available for reading from stdio.

This function is only available if the implementation supports it and the `stdio_available` module is enabled.

#### Returns
number of available bytes

#### `public ssize_t `[`stdio_read`](#group__sys__stdio_1ga5914592cd666147d93a856a66e0743f0)`(void * buffer,size_t max_len)` 

read `len` bytes from stdio uart into `buffer`

#### Parameters
* `buffer` buffer to read into 

* `max_len` nr of bytes to read

#### Returns
nr of bytes read 

#### Returns
<0 on error

#### `public ssize_t `[`stdio_write`](#group__sys__stdio_1ga976c9a6e5790244bf3bcbbe6bcdc1c78)`(const void * buffer,size_t len)` 

write `len` bytes from `buffer` into STDOUT

Depending on the stdio backend(s) used, not all bytes might be written to stdout and accounted for if multiple backends are active, as not all stdout backends will do a blocking write.

#### Parameters
* `buffer` buffer to read from 

* `len` nr of bytes to write

#### Returns
nr of bytes written 

#### Returns
<0 on error

#### `public void `[`stdio_close`](#group__sys__stdio_1ga150896c17fb2f6d3d96e639016fad793)`(void)` 

Disable stdio and detach stdio providers.

# struct `stdio_provider_t` 

stdio provider struct

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`open`](#structstdio__provider__t_1a00738382d6df0bc0ba86913d69b5b686) | Initialize and attach the stdio provider.
`public void(* `[`close`](#structstdio__provider__t_1a39050c78bde541a14e55fc14f14a1917) | Detach the stdio provider.
`public ssize_t(* `[`write`](#structstdio__provider__t_1af6c935b5faee2fac3eefc074a850bd4e) | Write `len` bytes from `src` into stdout.

## Members

#### `public void(* `[`open`](#structstdio__provider__t_1a00738382d6df0bc0ba86913d69b5b686) 

Initialize and attach the stdio provider.

#### `public void(* `[`close`](#structstdio__provider__t_1a39050c78bde541a14e55fc14f14a1917) 

Detach the stdio provider.

#### `public ssize_t(* `[`write`](#structstdio__provider__t_1af6c935b5faee2fac3eefc074a850bd4e) 

Write `len` bytes from `src` into stdout.

#### Parameters
* `src` buffer to read from 

* `len` nr of bytes to write

#### Returns
nr of bytes written 

#### Returns
<0 on error

