---
title: api-drivers_led.md
description: api-drivers_led.md
---
# group `drivers_led` 

Access macros and functions to control the on-board LEDs.

This header contains a set of macros for controlling the on-board LEDs of a board. The LEDs are enumerated, starting from LED0 to LED7. As most platforms have a different number of LEDs, the existing ones are mapped onto the lowest LED numbers, while the higher LED numbers will simply be empty defines. This ensures, that the LED macros are portable to any platform with any number of LEDs.

Providing access macros to 8 LEDs is a random decision, as currently 8 is the maximum number of on-board LEDs found on any board in RIOT (stm32f3discovery).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

