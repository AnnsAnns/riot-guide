---
title: api-backtrace.md
description: api-backtrace.md
---
# group `backtrace` 

Backtrace functionalitry.

If you call the [backtrace_print()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__backtrace_1ga14cd358468453431fdcddb57d65dcd46) function a stack backtrace of all return addresses up to [BACKTRACE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__backtrace_1gae169958ccf4c1db90f44c1711ef74ce9) will be printed from the point of execution.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BACKTRACE_SIZE`](#group__backtrace_1gae169958ccf4c1db90f44c1711ef74ce9)            | Maximum number of return addresses to print.
`public void `[`backtrace_print`](#group__backtrace_1ga14cd358468453431fdcddb57d65dcd46)`(void)`            | Print up to the last [BACKTRACE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__backtrace_1gae169958ccf4c1db90f44c1711ef74ce9) return addresses from call of this function.
`public void `[`backtrace_print_symbols`](#group__backtrace_1ga71f2a6ddefb8f57b6fa3b11d6da357ff)`(void)`            | Print up to the last [BACKTRACE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__backtrace_1gae169958ccf4c1db90f44c1711ef74ce9) symbol_names from call of this function.
`public int `[`backtrace_len`](#group__backtrace_1gaeba0822bd037989f57dc86a807968c82)`(void)`            | get the number of stack frames that are printed by print or print_symbols

## Members

#### `define `[`BACKTRACE_SIZE`](#group__backtrace_1gae169958ccf4c1db90f44c1711ef74ce9) 

Maximum number of return addresses to print.

#### `public void `[`backtrace_print`](#group__backtrace_1ga14cd358468453431fdcddb57d65dcd46)`(void)` 

Print up to the last [BACKTRACE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__backtrace_1gae169958ccf4c1db90f44c1711ef74ce9) return addresses from call of this function.

#### `public void `[`backtrace_print_symbols`](#group__backtrace_1ga71f2a6ddefb8f57b6fa3b11d6da357ff)`(void)` 

Print up to the last [BACKTRACE_SIZE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__backtrace_1gae169958ccf4c1db90f44c1711ef74ce9) symbol_names from call of this function.

#### `public int `[`backtrace_len`](#group__backtrace_1gaeba0822bd037989f57dc86a807968c82)`(void)` 

get the number of stack frames that are printed by print or print_symbols

