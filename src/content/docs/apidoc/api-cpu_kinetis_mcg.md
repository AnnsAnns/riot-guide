---
title: api-cpu_kinetis_mcg.md
description: api-cpu_kinetis_mcg.md
---
# group `cpu_kinetis_mcg` 

Implementation of the Kinetis Multipurpose Clock Generator (MCG) driver.

Please add [mcg.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mcg_8h) in cpu_conf.h and MCG configuration to periph_conf.h

The configuration consists of the clock_config struct (clock_config_t) and two macros [CLOCK_CORECLOCK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2yarm_2include_2periph__conf_8h_1afc465f12242e68f6c3695caa3ba0a169), [CLOCK_BUSCLOCK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__kinetis__mcg_1ga47b8fb0bde3602f542629a3a73f3cb96). The two macros are used by other periph driver configurations to tell the driver what value the module clock is running at.

State transition map
             digraph states {
               layout=dot
               nodesep=0.5
               {rank=same Reset [shape=none] FEI FEE}
               {rank=same FBI FBE}
               {rank=same BLPI BLPE}
               Reset -> FEI
               FEI -> FEE [dir="both"]
               FEI -> FBE [dir="both"]
               FEI -> FBI [dir="both"]
               FEE -> FBI [dir="both"]
               FEE -> FBE [dir="both"]
               FBI -> FBE [dir="both"]
               FBI -> BLPI [dir="both"]
               FBE -> BLPE [dir="both"]
               PBE
               PEE
               FBE -> PBE [dir="both"]
               BLPE -> PBE [dir="both"]
               PBE -> PEE [dir="both"]
             }
             

The driver will automatically move step by step through the map if the requested mode is not a direct neighbor of the current mode.

MCG Configuration Examples (for periph_conf.h)Example for PEE Mode with an 8 MHz crystal connected to XTAL0/EXTAL0The resulting PLL output frequency will be 60 MHz, the core will be running at the full PLL output frequency. static const clock_config_t clock_config = {
    // safe clock dividers for this CPU
    .clkdiv1 = SIM_CLKDIV1_OUTDIV1(0) | SIM_CLKDIV1_OUTDIV2(0) |
               SIM_CLKDIV1_OUTDIV3(1) | SIM_CLKDIV1_OUTDIV4(2),
    // Select default clocking mode
    .default_mode = KINETIS_MCG_MODE_PEE,
    // The crystal connected to OSC0 is 8 MHz
    .erc_range = KINETIS_MCG_ERC_RANGE_HIGH,
    .fcrdiv = 0, // Fast IRC divide by 1 => 4 MHz
    .oscsel = 0, // Use OSC0 for external clock
    .clc = 0, // Use external load caps on board
    .fll_frdiv = 0b011, // Divide by 256
    .fll_factor_fei = KINETIS_MCG_FLL_FACTOR_1920, // FLL freq = 60 MHz ?
    .fll_factor_fee = KINETIS_MCG_FLL_FACTOR_1920, // FLL freq = 60 MHz
    .pll_prdiv = 0b00011, // Divide by 4 => PLL input freq = 2 MHz
    .pll_vdiv = 0b00110, // Multiply by 30 => PLL output freq = 60 MHz
    .enable_oscillator = true, // Enable oscillator, EXTAL0 is connected to a crystal
    .select_fast_irc = true, // Use fast IRC when in FBI mode
    .enable_mcgirclk = false, // We don't need the internal reference clock while running in PEE mode
};
#define CLOCK_CORECLOCK              (60000000ul)
#define CLOCK_BUSCLOCK               (CLOCK_CORECLOCK / 1)

Example for FEE Mode, 32.768 kHz crystal connected to RTCThe resulting FLL output frequency will be circa 72 MHz, the core will be running at the full FLL output frequency. static const clock_config_t clock_config = {
    // safe clock dividers for this CPU
    .clkdiv1 = SIM_CLKDIV1_OUTDIV1(0) | SIM_CLKDIV1_OUTDIV2(1) |
               SIM_CLKDIV1_OUTDIV2(1) | SIM_CLKDIV1_OUTDIV3(2),
    .default_mode = KINETIS_MCG_MODE_FEE,
    // The board has a 16 MHz crystal, though it is not used in this configuration
    .erc_range = KINETIS_MCG_ERC_RANGE_VERY_HIGH,
    .fcrdiv = 0, // Fast IRC divide by 1 => 4 MHz
    .oscsel = 1, // Use RTC for external clock
    .clc = 0b0001, // 16 pF capacitors yield ca 10 pF load capacitance
    .fll_frdiv = 0b000, // Divide by 1 => FLL input 32768 Hz
    .fll_factor_fei = KINETIS_MCG_FLL_FACTOR_1920, // FLL freq = 60 MHz ?
    .fll_factor_fee = KINETIS_MCG_FLL_FACTOR_2197, // FLL freq = 71.991296 MHz
    .pll_prdiv = 0b00111, // Divide by 8
    .pll_vdiv = 0b01100, // Multiply by 36 => PLL freq = 72 MHz
    .enable_oscillator = false, // OSC0 disabled
    .select_fast_irc = true, // Use fast IRC for internal reference clock
    .enable_mcgirclk = false, // We don't need the internal reference clock while running in FEE mode
};
#define CLOCK_CORECLOCK              (71991296ul)
#define CLOCK_BUSCLOCK               (CLOCK_CORECLOCK / 2)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CLOCK_CORECLOCK`](#group__cpu__kinetis__mcg_1gafc465f12242e68f6c3695caa3ba0a169)            | Core clock frequency, used by the ARM core and certain hardware modules in Kinetis CPUs.
`define `[`CLOCK_BUSCLOCK`](#group__cpu__kinetis__mcg_1ga47b8fb0bde3602f542629a3a73f3cb96)            | Bus clock frequency, used by several hardware modules in Kinetis CPUs.
`public int `[`kinetis_mcg_set_mode`](#group__cpu__kinetis__mcg_1ga8300c73075c4d426cd6caa6b126aae2c)`(kinetis_mcg_mode_t mode)`            | Switch the MCG to the specified clocking mode.
`public void `[`kinetis_mcg_init`](#group__cpu__kinetis__mcg_1gaba884dd0d9798f77024d147d07afd162)`(void)`            | Initialize the MCG.

## Members

#### `define `[`CLOCK_CORECLOCK`](#group__cpu__kinetis__mcg_1gafc465f12242e68f6c3695caa3ba0a169) 

Core clock frequency, used by the ARM core and certain hardware modules in Kinetis CPUs.

The clock is derived from the MCG output clock divided by an integer divisor, which is controlled by the clock_config_t::clkdiv1 settings

#### `define `[`CLOCK_BUSCLOCK`](#group__cpu__kinetis__mcg_1ga47b8fb0bde3602f542629a3a73f3cb96) 

Bus clock frequency, used by several hardware modules in Kinetis CPUs.

The clock is derived from the MCG output clock divided by an integer divisor, which is controlled by the clock_config_t::clkdiv1 settings

#### `public int `[`kinetis_mcg_set_mode`](#group__cpu__kinetis__mcg_1ga8300c73075c4d426cd6caa6b126aae2c)`(kinetis_mcg_mode_t mode)` 

Switch the MCG to the specified clocking mode.

Depending on the current clocking mode, this function may step through several other clocking modes in order to be able to reach the target mode.

#### Parameters
* `mode` Target mode

#### Returns
0 on success 

#### Returns
<0 on error

#### `public void `[`kinetis_mcg_init`](#group__cpu__kinetis__mcg_1gaba884dd0d9798f77024d147d07afd162)`(void)` 

Initialize the MCG.

The configuration is found in the clock_config struct defined in periph_conf.h

