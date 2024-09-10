---
title: api-cpu_esp32_esp_idf_api.md
description: api-cpu_esp32_esp_idf_api.md
---
# group `cpu_esp32_esp_idf_api` 

ESP-IDF Interface API.

This module implements an interface for ESP-IDF types and functions that are required by RIOT-OS but cannot be included directly due to name conflicts.

For this purpose, the header files of this module declare all the types and functions that are required from the ESP-IDF, but without using the ESP-IDF header files with conflicting names. The implementation of the module then uses the ESP-IDF. In most cases, simple wrapper functions are sufficient.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

