---
title: api-cpu_kinetis_rnga.md
description: api-cpu_kinetis_rnga.md
---
# group `cpu_kinetis_rnga` 

Kinetis RNGA driver.

RNGA generates data that looks random. Reference Manual recommends to use the RNGA as an entropy source for PRNGs.

RNGA configuration example (for periph_conf.h)#define RANDOM_NUMOF         (1U)
#define KINETIS_RNGA         RNG
#define RANDOM_CLKEN()       (SIM->SCGC6 |= (1 << 9))
#define RANDOM_CLKDIS()      (SIM->SCGC6 &= ~(1 << 9))

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

