---
title: api-drivers_at86rf215_config.md
description: api-drivers_at86rf215_config.md
---
# group `drivers_at86rf215_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_AT86RF215_USE_CLOCK_OUTPUT`](#group__drivers__at86rf215__config_1ga3fe67d134b271950f33d629abf32e6f2)            | Set to 1 if the clock output of the AT86RF215 is used as a clock source on the board.
`define `[`CONFIG_AT86RF215_TRIM_VAL`](#group__drivers__at86rf215__config_1ga1c880cea2b691ed5cf5fa1b7426356d6)            | Trim value for the external crystal oscillator.
`define `[`CONFIG_AT86RF215_DEFAULT_TXPOWER`](#group__drivers__at86rf215__config_1ga4fcb32dc549b9c73ed78af102ff559c9)            | Default TX power (0dBm)

## Members

#### `define `[`CONFIG_AT86RF215_USE_CLOCK_OUTPUT`](#group__drivers__at86rf215__config_1ga3fe67d134b271950f33d629abf32e6f2) 

Set to 1 if the clock output of the AT86RF215 is used as a clock source on the board.

Otherwise it is turned off to save energy.

#### `define `[`CONFIG_AT86RF215_TRIM_VAL`](#group__drivers__at86rf215__config_1ga1c880cea2b691ed5cf5fa1b7426356d6) 

Trim value for the external crystal oscillator.

Each increment adds 300nF capacitance between the crystal oscillator pins
     TCXO and XTAL2.

     Range: 0..15

     Use in conjunction with @see CONFIG_AT86RF215_USE_CLOCK_OUTPUT and a frequency
     meter connected to the clock output pin of the AT86RF215.
     Tweak the value until the measured clock output matches 26 MHz the best.

#### `define `[`CONFIG_AT86RF215_DEFAULT_TXPOWER`](#group__drivers__at86rf215__config_1ga4fcb32dc549b9c73ed78af102ff559c9) 

Default TX power (0dBm)

