---
title: api-sys_stdio_nimble.md
description: api-sys_stdio_nimble.md
---
# group `sys_stdio_nimble` 

To enable stdio over nimBLE, add the module `stdio_nimble`:

USEMODULE += stdio_nimble
**This feature is experimental!**
 This feature is experimental as some use-cases, such as examples/twr_aloha, show unexpected behaviour.

Standard input/output backend using NimBLE.

'stdio_read' blocks until at least one character was read.

'stdio_write' is considered non-blocking even though it uses a mutex to protect the write buffer since only 'stdio_write' uses this mutex. Characters will be written in FIFO mode. Characters that do not fit in the buffer will be dropped.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_STDIO_NIMBLE_CLEAR_BUFFER_ON_CONNECT`](#group__sys__stdio__nimble_1ga6d57e3f5b80ad0678bffedecf02a1b15)            | Whether to clear the buffers when establishing a new connection or not.
`define `[`CONFIG_STDIO_NIMBLE_STDIN_BUFSIZE`](#group__sys__stdio__nimble_1ga399fd711e0cfad83b43e598b97f61520)            | Size of buffer for stdin in bytes.
`define `[`CONFIG_STDIO_NIMBLE_STDOUT_BUFSIZE`](#group__sys__stdio__nimble_1ga87e8c108fd505eccb3e944b86312dbc3)            | Size of buffer for stdout in bytes.

## Members

#### `define `[`CONFIG_STDIO_NIMBLE_CLEAR_BUFFER_ON_CONNECT`](#group__sys__stdio__nimble_1ga6d57e3f5b80ad0678bffedecf02a1b15) 

Whether to clear the buffers when establishing a new connection or not.

Defaults to true.

#### `define `[`CONFIG_STDIO_NIMBLE_STDIN_BUFSIZE`](#group__sys__stdio__nimble_1ga399fd711e0cfad83b43e598b97f61520) 

Size of buffer for stdin in bytes.

Must be a power of two!

#### `define `[`CONFIG_STDIO_NIMBLE_STDOUT_BUFSIZE`](#group__sys__stdio__nimble_1ga87e8c108fd505eccb3e944b86312dbc3) 

Size of buffer for stdout in bytes.

Must be a power of two!

