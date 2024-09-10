---
title: api-cpu_stm32_periph_fmc.md
description: api-cpu_stm32_periph_fmc.md
---
# group `cpu_stm32_periph_fmc` 

The `periph_fmc` module implements a driver for STM32 FMC/FSMC peripherals.

It supports

* NOR Flashes,

* PSRAMs/SRAMs,

* SDRAMs, and

* Display Controllers with MCU 8-/16-bit parallel interface.

NAND Flashes are not yet supported.

To use the FMC/FSMC, the `periph_fmc` module has to be enabled. To keep required data structures and resulting code as small as possible, a couple of pseudomodules are defined that have to be used in addition to the `periph_fmc` module to enable supported features. These are:

Module   |Feature
--------- | ---------
`periph_fmc_nor_sram`|enable NOR Flash and PSRAM/SRAM support
`periph_fmc_sdram`|enable SDRAM support
`periph_fmc_16bit`|enable 16-bit support
`periph_fmc_32bit`|enable 32-bit support
 The board has then to define

* the corresponding features according to the connected external device,

* the peripheral configuration of the FMC/FSMC of type [fmc_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__conf__t),

* the configuration of the FMC banks which describe the connected external devices.

As examples for such configurations, see [STM32L496G-DISCO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__stm32l496g-disco) (FMC with Display and SRAM) or [STM32F429I-DISC1](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__boards__stm32f429i-disc1) (FMC with SDRAM).

To use the RAM connected to the FMC as heap, the board has also to define [FMC_RAM_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1gaa0c9f4159e5629c9ed5c62118a4b110c) and [FMC_RAM_LEN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1ga237ddf955cf211da2030064d96f80c0e).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`FMC_BANK_CONFIG`](#group__cpu__stm32__periph__fmc_1gaed7a824162ea5775855d1fde267aaeed)            | Gives the configuration of n-th bank.
`define `[`FMC_DATA_PIN_NUMOF`](#group__cpu__stm32__periph__fmc_1ga01f9230e11a78288f576ae2e9d92f5d4)            | Number of data pins used.
`define `[`FMC_ADDR_PIN_NUMOF`](#group__cpu__stm32__periph__fmc_1ga4c376973f7069198f5f31c4593383597)            | Number of address pins used.
`define `[`FMC_RAM_ADDR`](#group__cpu__stm32__periph__fmc_1gaa0c9f4159e5629c9ed5c62118a4b110c)            | Start address of the heap for the FMC RAM.
`define `[`FMC_RAM_LEN`](#group__cpu__stm32__periph__fmc_1ga237ddf955cf211da2030064d96f80c0e)            | Length of the heap for the FMC RAM.
`struct `[`fmc_nor_sram_timing_t`](#structfmc__nor__sram__timing__t) | Timing configuration for NOR/PSRAM/SRAM.
`struct `[`fmc_nor_sram_bank_conf_t`](#structfmc__nor__sram__bank__conf__t) | Bank configuration structure for NOR/PSRAM/SRAM.
`struct `[`fmc_sdram_timing_t`](#structfmc__sdram__timing__t) | Timing configuration for SDRAM.
`struct `[`fmc_sdram_bank_conf_t`](#structfmc__sdram__bank__conf__t) | Bank configuration structure for SDRAM.
`struct `[`fmc_gpio_t`](#structfmc__gpio__t) | FMC GPIO configuration type.
`struct `[`fmc_conf_t`](#structfmc__conf__t) | FMC peripheral configuration.
`struct `[`fmc_bank_conf_t`](#structfmc__bank__conf__t) | Bank configuration structure.

## Members

#### `define `[`FMC_BANK_CONFIG`](#group__cpu__stm32__periph__fmc_1gaed7a824162ea5775855d1fde267aaeed) 

Gives the configuration of n-th bank.

This macro gives a pointer to the n-th entry of type [fmc_bank_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__bank__conf__t) of the banks configured by the board in the [fmc_bank_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2stm32l496g-disco_2include_2periph__conf_8h_1add49387d2037a38d9513076fde50933b) array. n is in the range 0 ... [FMC_BANK_NUMOF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#boards_2stm32l496g-disco_2include_2periph__conf_8h_1a2f63d116fde140ff8032d5e60928856a) - 1.

#### `define `[`FMC_DATA_PIN_NUMOF`](#group__cpu__stm32__periph__fmc_1ga01f9230e11a78288f576ae2e9d92f5d4) 

Number of data pins used.

The number of configured data pins depends on the memory with the maximum data bus width. The maximum data bus width used has to be specified by the pseudomodules `periph_fmc_16bit` and `periph_fmc_32bit`. 8 bit data bus width is the default.

#### `define `[`FMC_ADDR_PIN_NUMOF`](#group__cpu__stm32__periph__fmc_1ga4c376973f7069198f5f31c4593383597) 

Number of address pins used.

The number of configured address pins depends on the memory types used. NORs, PSRAMs and SRAMs (module `periph_fmc_nor_sram`) use up to 26 address signals A0...A25 if address/data multiplexing is not used. SDRAMs (module `periph_fmc_sdram`) use only up to 13 address signals A0...A12. NANDs (module `periph_fmc_sdram`) don't need separate address signals. The type of used memories is specified by the corresponding pseudomodules.

#### `define `[`FMC_RAM_ADDR`](#group__cpu__stm32__periph__fmc_1gaa0c9f4159e5629c9ed5c62118a4b110c) 

Start address of the heap for the FMC RAM.

This variable has to be defined in `Makefile.include` of the board definition to use the a RAM connected to the FMC as heap. It has to correspond to the [fmc_bank_conf_t::address](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__bank__conf__t_1a87919d7f622d6c30099f9e9e70d91236) in FMC bank configuration.

`FMC_RAM_ADDR` is not a macro and cannot be used in C code. It is just defined for documentation purpose.

#### `define `[`FMC_RAM_LEN`](#group__cpu__stm32__periph__fmc_1ga237ddf955cf211da2030064d96f80c0e) 

Length of the heap for the FMC RAM.

This variable has to be defined in `Makefile.include` of the board definition to use the a RAM connected to the FMC as heap. It has to correspond to the [fmc_bank_conf_t::size](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__bank__conf__t_1a9b8a15c5cf21ff566054d3d6b7a99314) in FMC bank configuration. Since it is used in linker script, it has to be defined in kByte with suffix `K`, e.g. `1024K`.

`FMC_RAM_SIZE` is not a macro and cannot be used in C code. It is just defined for documentation purpose.

# struct `fmc_nor_sram_timing_t` 

Timing configuration for NOR/PSRAM/SRAM.

Used timing configuration parameters depend on used access mode. Please refer the reference manual of the respective MCU for details.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`fmc_access_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1ga6685a1b712ad877fd3db27f387c8afac)` `[`mode`](#structfmc__nor__sram__timing__t_1abc5527011dd220f3359408819449055d) | Access Mode used (only used if [fmc_nor_sram_bank_conf_t::ext_mode](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) is true)
`public uint8_t `[`clk_div`](#structfmc__nor__sram__timing__t_1a385419a8feac996dce9e1a5aa4d5e32d) | Clock divide ratio, FMC_CLK = HCLK / (DIV + 1)
`public uint8_t `[`addr_setup`](#structfmc__nor__sram__timing__t_1ad62e34cd58399caf992dc0ab154bbb25) | Address setup time [0..15], default 15.
`public uint8_t `[`addr_hold`](#structfmc__nor__sram__timing__t_1a969394807c74d5dc63020103cad09ea7) | Address hold time [0..15], default 15.
`public uint8_t `[`data_setup`](#structfmc__nor__sram__timing__t_1a8bdbd04baf625a913117f8773ede93a2) | Data setup time [0..15], default 15.
`public uint8_t `[`data_latency`](#structfmc__nor__sram__timing__t_1ae8a5e95506ad984d6be36e089885be30) | Data latency for synchronous access [0..15], default 15 (only used in read timing)
`public uint8_t `[`bus_turnaround`](#structfmc__nor__sram__timing__t_1a29055136b6901800917bdfccdd5553fa) | Bus turnaround phase duration [0..15], default 15.

## Members

#### `public `[`fmc_access_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1ga6685a1b712ad877fd3db27f387c8afac)` `[`mode`](#structfmc__nor__sram__timing__t_1abc5527011dd220f3359408819449055d) 

Access Mode used (only used if [fmc_nor_sram_bank_conf_t::ext_mode](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) is true)

#### `public uint8_t `[`clk_div`](#structfmc__nor__sram__timing__t_1a385419a8feac996dce9e1a5aa4d5e32d) 

Clock divide ratio, FMC_CLK = HCLK / (DIV + 1)

#### `public uint8_t `[`addr_setup`](#structfmc__nor__sram__timing__t_1ad62e34cd58399caf992dc0ab154bbb25) 

Address setup time [0..15], default 15.

#### `public uint8_t `[`addr_hold`](#structfmc__nor__sram__timing__t_1a969394807c74d5dc63020103cad09ea7) 

Address hold time [0..15], default 15.

#### `public uint8_t `[`data_setup`](#structfmc__nor__sram__timing__t_1a8bdbd04baf625a913117f8773ede93a2) 

Data setup time [0..15], default 15.

#### `public uint8_t `[`data_latency`](#structfmc__nor__sram__timing__t_1ae8a5e95506ad984d6be36e089885be30) 

Data latency for synchronous access [0..15], default 15 (only used in read timing)

#### `public uint8_t `[`bus_turnaround`](#structfmc__nor__sram__timing__t_1a29055136b6901800917bdfccdd5553fa) 

Bus turnaround phase duration [0..15], default 15.

# struct `fmc_nor_sram_bank_conf_t` 

Bank configuration structure for NOR/PSRAM/SRAM.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`sub_bank`](#structfmc__nor__sram__bank__conf__t_1aa1403542c0365a09a2c7b6989c40ff90) | Bank1 has 4 subbanks 1..4.
`public bool `[`mux_enable`](#structfmc__nor__sram__bank__conf__t_1a83050d5e64d0a45822fe7658537c3d1b) | Multiplexed address/data signals used (only valid for PSRAMs and NORs.
`public bool `[`wait_enable`](#structfmc__nor__sram__bank__conf__t_1a772e3a3075d817b6188f8dab5d0ae5cc) | Wait signal used for synchronous access.
`public bool `[`ext_mode`](#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) | Extended mode used (separate read and write timings)
`public `[`fmc_nor_sram_timing_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__timing__t)` `[`r_timing`](#structfmc__nor__sram__bank__conf__t_1ada1c5d922ed9a2100b6bbc2c7c3f3063) | Read timings (also used for write if [fmc_nor_sram_bank_conf_t::ext_mode](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) is false)
`public `[`fmc_nor_sram_timing_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__timing__t)` `[`w_timing`](#structfmc__nor__sram__bank__conf__t_1a3449e02f45d470862eaee5e5754bbbf8) | Write timings (only used if [fmc_nor_sram_bank_conf_t::ext_mode](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) is true)

## Members

#### `public uint8_t `[`sub_bank`](#structfmc__nor__sram__bank__conf__t_1aa1403542c0365a09a2c7b6989c40ff90) 

Bank1 has 4 subbanks 1..4.

#### `public bool `[`mux_enable`](#structfmc__nor__sram__bank__conf__t_1a83050d5e64d0a45822fe7658537c3d1b) 

Multiplexed address/data signals used (only valid for PSRAMs and NORs.

#### `public bool `[`wait_enable`](#structfmc__nor__sram__bank__conf__t_1a772e3a3075d817b6188f8dab5d0ae5cc) 

Wait signal used for synchronous access.

#### `public bool `[`ext_mode`](#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) 

Extended mode used (separate read and write timings)

#### `public `[`fmc_nor_sram_timing_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__timing__t)` `[`r_timing`](#structfmc__nor__sram__bank__conf__t_1ada1c5d922ed9a2100b6bbc2c7c3f3063) 

Read timings (also used for write if [fmc_nor_sram_bank_conf_t::ext_mode](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) is false)

#### `public `[`fmc_nor_sram_timing_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__timing__t)` `[`w_timing`](#structfmc__nor__sram__bank__conf__t_1a3449e02f45d470862eaee5e5754bbbf8) 

Write timings (only used if [fmc_nor_sram_bank_conf_t::ext_mode](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t_1a02b8c33ed215dd40fcab8add7b2291c1) is true)

# struct `fmc_sdram_timing_t` 

Timing configuration for SDRAM.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`row_to_col_delay`](#structfmc__sdram__timing__t_1a8ed1ae8eee670c643a7b53e27e0dffa2) | Row to column delay in SDCLK clock cycles [1..16], delay between Activate and Read/Write command.
`public uint8_t `[`row_precharge`](#structfmc__sdram__timing__t_1a60d0fdf530ff19c28bb0080df94214b3) | Row precharge delay in SDCLK clock cycles [1..15], delay between Precharge and another command.
`public uint8_t `[`recovery_delay`](#structfmc__sdram__timing__t_1aee5b040a5d32e0bfc0765b339b0baa2d) | Recovery delay in SDCLK clock cycles [1..15], delay between Write and Precharge command.
`public uint8_t `[`row_cylce`](#structfmc__sdram__timing__t_1a76897cf4de830e4a78e00652d80f785a) | Row cycle delay in SDCLK clock cycles [1..15], delay between Refresh and Activate command.
`public uint8_t `[`self_refresh`](#structfmc__sdram__timing__t_1ab4222b744549928b12b6b0857dec0a96) | Self refresh time in SDCLK clock cycles [1..15].
`public uint8_t `[`exit_self_refresh`](#structfmc__sdram__timing__t_1abce0c194159cb57615f1aecc106fe84b) | Exit self-refresh delay in SDCLK clock cycles [1..15], delay between Self-Refresh and Activate command.
`public uint8_t `[`load_mode_register`](#structfmc__sdram__timing__t_1a9bdccc07217144775ff9a4a2b08eecfa) | Load Mode Register to Activate delay in SDCLK clock cycles [1..15], delay between Load Mode Register and Activate command.
`public uint8_t `[`refresh_period`](#structfmc__sdram__timing__t_1a15daec6ab4fef5c6413088e501982743) | Refresh period in milliseconds.

## Members

#### `public uint8_t `[`row_to_col_delay`](#structfmc__sdram__timing__t_1a8ed1ae8eee670c643a7b53e27e0dffa2) 

Row to column delay in SDCLK clock cycles [1..16], delay between Activate and Read/Write command.

#### `public uint8_t `[`row_precharge`](#structfmc__sdram__timing__t_1a60d0fdf530ff19c28bb0080df94214b3) 

Row precharge delay in SDCLK clock cycles [1..15], delay between Precharge and another command.

#### `public uint8_t `[`recovery_delay`](#structfmc__sdram__timing__t_1aee5b040a5d32e0bfc0765b339b0baa2d) 

Recovery delay in SDCLK clock cycles [1..15], delay between Write and Precharge command.

#### `public uint8_t `[`row_cylce`](#structfmc__sdram__timing__t_1a76897cf4de830e4a78e00652d80f785a) 

Row cycle delay in SDCLK clock cycles [1..15], delay between Refresh and Activate command.

#### `public uint8_t `[`self_refresh`](#structfmc__sdram__timing__t_1ab4222b744549928b12b6b0857dec0a96) 

Self refresh time in SDCLK clock cycles [1..15].

#### `public uint8_t `[`exit_self_refresh`](#structfmc__sdram__timing__t_1abce0c194159cb57615f1aecc106fe84b) 

Exit self-refresh delay in SDCLK clock cycles [1..15], delay between Self-Refresh and Activate command.

#### `public uint8_t `[`load_mode_register`](#structfmc__sdram__timing__t_1a9bdccc07217144775ff9a4a2b08eecfa) 

Load Mode Register to Activate delay in SDCLK clock cycles [1..15], delay between Load Mode Register and Activate command.

#### `public uint8_t `[`refresh_period`](#structfmc__sdram__timing__t_1a15daec6ab4fef5c6413088e501982743) 

Refresh period in milliseconds.

# struct `fmc_sdram_bank_conf_t` 

Bank configuration structure for SDRAM.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`clk_period`](#structfmc__sdram__bank__conf__t_1af5d40cdae8550847e1c30411036c2bf5) | CLK period [0,2,3] (0 - disabled, n * HCLK cycles)
`public uint8_t `[`row_bits`](#structfmc__sdram__bank__conf__t_1a975d480330b3ed13f9d911cd2bdce50e) | Number row address bits [11..13].
`public uint8_t `[`col_bits`](#structfmc__sdram__bank__conf__t_1a4e8d8bf814df1781c7a3dda7e362acc7) | Number column address bits [8..11].
`public uint8_t `[`cas_latency`](#structfmc__sdram__bank__conf__t_1a082c58632158fe40ebd8b920d9421789) | CAS latency in SDCLK clock cycles [1..3].
`public uint8_t `[`read_delay`](#structfmc__sdram__bank__conf__t_1ad01b87222a382282821dc054de1cbe72) | Delay for reading data after CAS latency in HCLKs [0..2].
`public bool `[`four_banks`](#structfmc__sdram__bank__conf__t_1ae56c61616bf2e2cfe6846c9f2aef1fba) | SDRAM has four internal banks.
`public bool `[`write_protect`](#structfmc__sdram__bank__conf__t_1acfe65b240f4326971e271cb515bbf4d8) | Write protection enabled.
`public bool `[`burst_read`](#structfmc__sdram__bank__conf__t_1a551b241d81ca6f075e2ef2e21e85068c) | Burst read mode enabled.
`public bool `[`burst_write`](#structfmc__sdram__bank__conf__t_1a3a42002220ac474bbb8163ddb0877207) | Burst write mode enabled.
`public bool `[`burst_interleaved`](#structfmc__sdram__bank__conf__t_1adbe62613538218d0762560b956c5d6b1) | Burst mode interleaved, otherwise sequential.
`public `[`fmc_bust_length_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1gaeac94cf807dec0e1a375da386380f043)` `[`burst_len`](#structfmc__sdram__bank__conf__t_1ab510edf13a01e865e27f8a9d9f6c38ad) | Burst length as an exponent of a power of two.
`public `[`fmc_sdram_timing_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__sdram__timing__t)` `[`timing`](#structfmc__sdram__bank__conf__t_1ac15bdc59c82737558a7d2a3e51342b0a) | SDRAM Timing configuration.

## Members

#### `public uint8_t `[`clk_period`](#structfmc__sdram__bank__conf__t_1af5d40cdae8550847e1c30411036c2bf5) 

CLK period [0,2,3] (0 - disabled, n * HCLK cycles)

#### `public uint8_t `[`row_bits`](#structfmc__sdram__bank__conf__t_1a975d480330b3ed13f9d911cd2bdce50e) 

Number row address bits [11..13].

#### `public uint8_t `[`col_bits`](#structfmc__sdram__bank__conf__t_1a4e8d8bf814df1781c7a3dda7e362acc7) 

Number column address bits [8..11].

#### `public uint8_t `[`cas_latency`](#structfmc__sdram__bank__conf__t_1a082c58632158fe40ebd8b920d9421789) 

CAS latency in SDCLK clock cycles [1..3].

#### `public uint8_t `[`read_delay`](#structfmc__sdram__bank__conf__t_1ad01b87222a382282821dc054de1cbe72) 

Delay for reading data after CAS latency in HCLKs [0..2].

#### `public bool `[`four_banks`](#structfmc__sdram__bank__conf__t_1ae56c61616bf2e2cfe6846c9f2aef1fba) 

SDRAM has four internal banks.

#### `public bool `[`write_protect`](#structfmc__sdram__bank__conf__t_1acfe65b240f4326971e271cb515bbf4d8) 

Write protection enabled.

#### `public bool `[`burst_read`](#structfmc__sdram__bank__conf__t_1a551b241d81ca6f075e2ef2e21e85068c) 

Burst read mode enabled.

#### `public bool `[`burst_write`](#structfmc__sdram__bank__conf__t_1a3a42002220ac474bbb8163ddb0877207) 

Burst write mode enabled.

#### `public bool `[`burst_interleaved`](#structfmc__sdram__bank__conf__t_1adbe62613538218d0762560b956c5d6b1) 

Burst mode interleaved, otherwise sequential.

#### `public `[`fmc_bust_length_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1gaeac94cf807dec0e1a375da386380f043)` `[`burst_len`](#structfmc__sdram__bank__conf__t_1ab510edf13a01e865e27f8a9d9f6c38ad) 

Burst length as an exponent of a power of two.

#### `public `[`fmc_sdram_timing_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__sdram__timing__t)` `[`timing`](#structfmc__sdram__bank__conf__t_1ac15bdc59c82737558a7d2a3e51342b0a) 

SDRAM Timing configuration.

# struct `fmc_gpio_t` 

FMC GPIO configuration type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structfmc__gpio__t_1a675c86ab7e8700d3db09c087ba0b212a) | GPIO pin.
`public `[`gpio_af_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#gd32v_2include_2periph__cpu_8h_1a06ed6aad7d9b996fee989c31338138cd)` `[`af`](#structfmc__gpio__t_1ab183760989056f6016ac7265312644cf) | Alternate function.

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin`](#structfmc__gpio__t_1a675c86ab7e8700d3db09c087ba0b212a) 

GPIO pin.

#### `public `[`gpio_af_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#gd32v_2include_2periph__cpu_8h_1a06ed6aad7d9b996fee989c31338138cd)` `[`af`](#structfmc__gpio__t_1ab183760989056f6016ac7265312644cf) 

Alternate function.

# struct `fmc_conf_t` 

FMC peripheral configuration.

The GPIOs are defined depending on used memory type according to the FMC pin definition in Table 12 of section 4 in the [Datasheet for STM32F765xx, STM32F767xx, STM32F768Ax, STM32F769xx](https://www.st.com/resource/en/datasheet/stm32f767zi.pdf). Which memory types are used is defined by the pseudomodules `periph_fmc_nor_sram`, `periph_fmc_nand` and `periph_fmc_sdram`

For easier handling the configuration structure does not take multiplexed address/data bits into account.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`bus`](#structfmc__conf__t_1a22b493b61773e8eacb13ff66f7f4ad4f) | AHB/APB bus.
`public uint32_t `[`rcc_mask`](#structfmc__conf__t_1a9424326653bb485fff93381efbfd57af) | Bit in clock enable register.
`public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`data`](#structfmc__conf__t_1a1dc115cd83588853e79128db852b5e44) | Data pins D0 ...
`public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`addr`](#structfmc__conf__t_1acc10dbc1374e4b5e4f825147fae4037e) | Address pins A0 ...
`public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl0_pin`](#structfmc__conf__t_1a3a23ed9f4e91961f6e8526f1e8741116) | NBL0 pin.
`public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl1_pin`](#structfmc__conf__t_1a4397e7b5b0ba8355b9967041f787ba41) | NBL1 pin.
`public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl2_pin`](#structfmc__conf__t_1a9202fc1fb4a0afee372d44fc78b27dab) | NBL2 pin.
`public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl3_pin`](#structfmc__conf__t_1ae93c87d3388f1a6400c6c7e096207a13) | NBL3 pin.
`public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nwait_pin`](#structfmc__conf__t_1a076ba399563a7a011de965fc5043cca0) | NWAIT pin.

## Members

#### `public uint8_t `[`bus`](#structfmc__conf__t_1a22b493b61773e8eacb13ff66f7f4ad4f) 

AHB/APB bus.

#### `public uint32_t `[`rcc_mask`](#structfmc__conf__t_1a9424326653bb485fff93381efbfd57af) 

Bit in clock enable register.

#### `public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`data`](#structfmc__conf__t_1a1dc115cd83588853e79128db852b5e44) 

Data pins D0 ...

#### `public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`addr`](#structfmc__conf__t_1acc10dbc1374e4b5e4f825147fae4037e) 

Address pins A0 ...

if any

#### `public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl0_pin`](#structfmc__conf__t_1a3a23ed9f4e91961f6e8526f1e8741116) 

NBL0 pin.

#### `public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl1_pin`](#structfmc__conf__t_1a4397e7b5b0ba8355b9967041f787ba41) 

NBL1 pin.

#### `public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl2_pin`](#structfmc__conf__t_1a9202fc1fb4a0afee372d44fc78b27dab) 

NBL2 pin.

#### `public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nbl3_pin`](#structfmc__conf__t_1ae93c87d3388f1a6400c6c7e096207a13) 

NBL3 pin.

#### `public `[`fmc_gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__gpio__t)` `[`nwait_pin`](#structfmc__conf__t_1a076ba399563a7a011de965fc5043cca0) 

NWAIT pin.

# struct `fmc_bank_conf_t` 

Bank configuration structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`fmc_bank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1gaef94480dd64bc489e5f33a798dbf860f)` `[`bank`](#structfmc__bank__conf__t_1ae4492f29a0c6d5e4084b9257bc5c8e0a) | Bank1 .
`public `[`fmc_mem_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1ga57e434ef101e4cbe9af5e00001698efe)` `[`mem_type`](#structfmc__bank__conf__t_1acf88b47612bca54ce7ce90524d47a4e8) | Type of memory.
`public `[`fmc_bus_width_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1gaa5ab40a19c345116d07e001b7b3115e7)` `[`data_width`](#structfmc__bank__conf__t_1a37718eb26c6378acb1ecd16226306d97) | Data bus width.
`public uint32_t `[`address`](#structfmc__bank__conf__t_1a87919d7f622d6c30099f9e9e70d91236) | Address of the memory bank.
`public uint32_t `[`size`](#structfmc__bank__conf__t_1a9b8a15c5cf21ff566054d3d6b7a99314) | Size in bytes of the memory bank.
`public `[`fmc_nor_sram_bank_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t)` `[`nor_sram`](#structfmc__bank__conf__t_1a86ede94f08cba07289be6bd6765b9169) | 
`public `[`fmc_sdram_bank_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__sdram__bank__conf__t)` `[`sdram`](#structfmc__bank__conf__t_1a989f7b8c8e00f1ff1f59dfe3078c58ed) | 
`public union fmc_bank_conf_t::@116 `[`@117`](#structfmc__bank__conf__t_1a4d58dcbf25aa01085a5fcd39da03c932) | 

## Members

#### `public `[`fmc_bank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1gaef94480dd64bc489e5f33a798dbf860f)` `[`bank`](#structfmc__bank__conf__t_1ae4492f29a0c6d5e4084b9257bc5c8e0a) 

Bank1 .

. Bank4/Bank6 (maximum)

#### `public `[`fmc_mem_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1ga57e434ef101e4cbe9af5e00001698efe)` `[`mem_type`](#structfmc__bank__conf__t_1acf88b47612bca54ce7ce90524d47a4e8) 

Type of memory.

#### `public `[`fmc_bus_width_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__stm32__periph__fmc_1gaa5ab40a19c345116d07e001b7b3115e7)` `[`data_width`](#structfmc__bank__conf__t_1a37718eb26c6378acb1ecd16226306d97) 

Data bus width.

#### `public uint32_t `[`address`](#structfmc__bank__conf__t_1a87919d7f622d6c30099f9e9e70d91236) 

Address of the memory bank.

#### `public uint32_t `[`size`](#structfmc__bank__conf__t_1a9b8a15c5cf21ff566054d3d6b7a99314) 

Size in bytes of the memory bank.

#### `public `[`fmc_nor_sram_bank_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__nor__sram__bank__conf__t)` `[`nor_sram`](#structfmc__bank__conf__t_1a86ede94f08cba07289be6bd6765b9169) 

#### `public `[`fmc_sdram_bank_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_stm32_periph_fmc.md#structfmc__sdram__bank__conf__t)` `[`sdram`](#structfmc__bank__conf__t_1a989f7b8c8e00f1ff1f59dfe3078c58ed) 

#### `public union fmc_bank_conf_t::@116 `[`@117`](#structfmc__bank__conf__t_1a4d58dcbf25aa01085a5fcd39da03c932) 

