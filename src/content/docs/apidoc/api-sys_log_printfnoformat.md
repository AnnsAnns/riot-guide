---
title: api-sys_log_printfnoformat.md
description: api-sys_log_printfnoformat.md
---
# group `sys_log_printfnoformat` 

This module implements an example logging module using puts to just print the format string saving on the number of libraries need.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static void `[`log_write`](#group__sys__log__printfnoformat_1ga21c8f7b77e01cce5b75b9a3e1dc5dba7)`(unsigned level,const char * format,...)`            | log_write overridden function

## Members

#### `public inline static void `[`log_write`](#group__sys__log__printfnoformat_1ga21c8f7b77e01cce5b75b9a3e1dc5dba7)`(unsigned level,const char * format,...)` 

log_write overridden function

This example function will only print the log's format string. Use it where printf might be too heavy.

#### Parameters
* `level` (unused) 

* `format` String that the function will print

