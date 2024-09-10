---
title: api-sys_app_metadata.md
description: api-sys_app_metadata.md
---
# group `sys_app_metadata` 

Module for the application metadata.

Kevin Weiss [kevin.weiss@haw-hamburg.de](mailto:kevin.weiss@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`APP_SHELL_FMT`](#group__sys__app__metadata_1ga9491275bad3549da4db134587e44b0a6)            | Application Shell Format is an optional application metadata parameter intended to help coordinate any specific formats that are being used.
`public void `[`app_metadata_print_json`](#group__sys__app__metadata_1gaaba08ac9261069a6338e84a3cff2cda9)`(void)`            | Prints the application metadata in json.

## Members

#### `define `[`APP_SHELL_FMT`](#group__sys__app__metadata_1ga9491275bad3549da4db134587e44b0a6) 

Application Shell Format is an optional application metadata parameter intended to help coordinate any specific formats that are being used.

An example is if the application is following a specific format, say semantics defined in a RDM or schema, that could be specified by adding APP_SHELL_FMT="RDM001_v1", that would inform anything using the shell that the formatting should follow what is dictated. This define is only for documentation, to use the APP_SHELL_FMT add it to the application makefile with APP_SHELL_FMT=your_value or when calling make such as `APP_SHELL_FMT=your_value make flash`

#### `public void `[`app_metadata_print_json`](#group__sys__app__metadata_1gaaba08ac9261069a6338e84a3cff2cda9)`(void)` 

Prints the application metadata in json.

Examples of application metadata are BOARD, OS_VERSION, APP_NAME...

