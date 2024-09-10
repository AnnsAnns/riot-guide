---
title: api-cpu_esp_common_conf.md
description: api-cpu_esp_common_conf.md
---
# group `cpu_esp_common_conf` 

Compile-time configuration macros for Espressif ESP SoCs.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BACKUP_RAM`](#group__cpu__esp__common__conf_1gab3e53fc2b7ac293e19fe87f0ccb7d965)            | Declare the heap_stats function as available.
`define `[`BACKUP_RAM_DATA`](#group__cpu__esp__common__conf_1ga7f9a86c28cdefe6db17ef616dac69d97)            | Memory marked with this attribute is retained during deep sleep and initialized with user provided data on cold boot.

## Members

#### `define `[`BACKUP_RAM`](#group__cpu__esp__common__conf_1gab3e53fc2b7ac293e19fe87f0ccb7d965) 

Declare the heap_stats function as available.

Only if module esp_idf_heap is used, a platform specific heap_stats function has to be used.

Memory marked with this attribute is retained during deep sleep and initialized with 0 on cold boot.

#### `define `[`BACKUP_RAM_DATA`](#group__cpu__esp__common__conf_1ga7f9a86c28cdefe6db17ef616dac69d97) 

Memory marked with this attribute is retained during deep sleep and initialized with user provided data on cold boot.

