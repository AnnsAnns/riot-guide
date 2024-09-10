---
title: api-cpu_cc2538_sysctrl.md
description: api-cpu_cc2538_sysctrl.md
---
# group `cpu_cc2538_sysctrl` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SYS_CTRL`](#group__cpu__cc2538__sysctrl_1ga4b23617442d3980ad8e3c3ce3a314848)            | One and only instance of the System Control module.
`define `[`sys_clock_freq`](#group__cpu__cc2538__sysctrl_1ga3be8a47c89b66b6238fa2117d5cf6186)            | Compute the current system clock frequency based on the SYS_CTRL register states.
`struct `[`cc2538_sys_ctrl_t`](#structcc2538__sys__ctrl__t) | System Control component registers.

## Members

#### `define `[`SYS_CTRL`](#group__cpu__cc2538__sysctrl_1ga4b23617442d3980ad8e3c3ce3a314848) 

One and only instance of the System Control module.

#### `define `[`sys_clock_freq`](#group__cpu__cc2538__sysctrl_1ga3be8a47c89b66b6238fa2117d5cf6186) 

Compute the current system clock frequency based on the SYS_CTRL register states.

# struct `cc2538_sys_ctrl_t` 

System Control component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CLOCK_CTRL`](#structcc2538__sys__ctrl__t_1abbe3be72c97e4e6d82cdaf75f7b71392) | Clock control register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SYS_DIV`](#structcc2538__sys__ctrl__t_1add579c744a0527b34d97172405dc535e) | System clock rate setting.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__sys__ctrl__t_1ab3d3d9cce3bc9681127cf1baa579e72d) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IO_DIV`](#structcc2538__sys__ctrl__t_1a08d02d0bae77de3c2aad9fee0dfe7416) | I/O clock rate setting.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__sys__ctrl__t_1ab5473cbe95fb8bd45d0570ee2cf9c594) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC`](#structcc2538__sys__ctrl__t_1ae465eecb69463569a6f2809d361d0335) | System clock oscillator selection.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC_PD`](#structcc2538__sys__ctrl__t_1ada018db8a904bd7fdcc47bdf78dfa253) | Oscillator power-down.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__sys__ctrl__t_1adb13978b7c63a58356441bca2c743195) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AMP_DET`](#structcc2538__sys__ctrl__t_1a722fcdc4a67e27747a26af7caab003c4) | Amplitude detector of XOSC during power up.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__sys__ctrl__t_1a2ae082e11555fe10bf400af0dfc4ff23) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC32K`](#structcc2538__sys__ctrl__t_1a346f85c72c48d059f8fee251781c3f1b) | 32-kHz clock oscillator selection
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC32K_CADIS`](#structcc2538__sys__ctrl__t_1a612adf8ccba78b8ea9d97fa9acf9199f) | Disable calibration 32-kHz RC oscillator.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__sys__ctrl__t_1a5952c8b36d4f193a4149435791504cc9) | Reserved bits.
`public struct cc2538_sys_ctrl_t::@47::@52 `[`CLOCK_CTRLbits`](#structcc2538__sys__ctrl__t_1a253bb5cbe8f4cdca507fc941615ff8e5) | 
`public union cc2538_sys_ctrl_t::@47 `[`cc2538_sys_ctrl_clk_ctrl`](#structcc2538__sys__ctrl__t_1ac5b19da4186b4657454fc476af7c602a) | Clock control register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CLOCK_STA`](#structcc2538__sys__ctrl__t_1a52cda35b92302beca03c55f38e3c0ab2) | Clock status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__sys__ctrl__t_1a8b33338e7a791d8b4d771e55c8d8674c) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED7`](#structcc2538__sys__ctrl__t_1a626e0fecfd3acf7770c308469c6e9303) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`HSOSC_STB`](#structcc2538__sys__ctrl__t_1a76a4f4eb2b2d80b2a973dedb1df8f994) | HSOSC stable status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XOSC_STB`](#structcc2538__sys__ctrl__t_1ad24c75dbaf6ef5aa5b4d01e17ce5f81f) | XOSC stable status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SOURCE_CHANGE`](#structcc2538__sys__ctrl__t_1ab3fca1b459c5094c2bea516982a542e1) | System clock source change.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED8`](#structcc2538__sys__ctrl__t_1a98f82e6ca27df4f5d0cf2a172422122a) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RST`](#structcc2538__sys__ctrl__t_1a30c2a0027106f561da1dae412ef9f7c5) | Last source of reset.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC32K_CALDIS`](#structcc2538__sys__ctrl__t_1ac024ef8c5333a8f6cfa70146445c70ad) | Disable calibration 32-kHz RC oscillator.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SYNC_32K`](#structcc2538__sys__ctrl__t_1aa31ffab3ebc75534d63cb9043f60eeff) | 32-kHz clock source synced to undivided system clock (16 or 32 MHz)
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED9`](#structcc2538__sys__ctrl__t_1abe2918398cf8bdeb4fa20c006c3393ef) | Reserved bits.
`public struct cc2538_sys_ctrl_t::@48::@53 `[`CLOCK_STAbits`](#structcc2538__sys__ctrl__t_1ae8fc458610adfa34597633a8a41861b9) | 
`public union cc2538_sys_ctrl_t::@48 `[`cc2538_sys_ctrl_clk_sta`](#structcc2538__sys__ctrl__t_1a197e50c40cd756d78d0c7a987166989f) | Clock status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCGPT`](#structcc2538__sys__ctrl__t_1aaaf678c50b3d11f182923b73031f23de) | Module clocks for GPT[3:0] when the CPU is in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCGPT`](#structcc2538__sys__ctrl__t_1a6a28f9603c0366fc513ed72bd70418ac) | Module clocks for GPT[3:0] when the CPU is in sleep mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCGPT`](#structcc2538__sys__ctrl__t_1ab57705c6e176328c94f0a078ef96bda6) | Module clocks for GPT[3:0] when the CPU is in PM0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRGPT`](#structcc2538__sys__ctrl__t_1a3bb42b681920e68d901c984f7e46e399) | Reset for GPT[3:0].
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCSSI`](#structcc2538__sys__ctrl__t_1a996c09e47437761121efea59a672bc0d) | Module clocks for SSI[1:0] when the CPU is in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCSSI`](#structcc2538__sys__ctrl__t_1a25b03f6e3e13953ccbbb0852ef95b5ae) | Module clocks for SSI[1:0] when the CPU is insSleep mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCSSI`](#structcc2538__sys__ctrl__t_1a4fade6b6eafb464fa9c238ebd8d7b3aa) | Module clocks for SSI[1:0] when the CPU is in PM0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRSSI`](#structcc2538__sys__ctrl__t_1a7b81c12e23ca7bed13af6ee3df12dfb5) | Reset for SSI[1:0].
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCUART`](#structcc2538__sys__ctrl__t_1af1cc69504d8178cb0e9e3a893d3f7834) | Module clocks for UART[1:0] when the CPU is in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`UART0`](#structcc2538__sys__ctrl__t_1a6652897d4e8b5b734bc83079a00b083e) | Enable UART0 clock in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`UART1`](#structcc2538__sys__ctrl__t_1adbef21a60d642ca3d5b652b13791aa14) | Enable UART1 clock in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__sys__ctrl__t_1a48afdd678104ceaa0760a073d31abf70) | Reserved bits.
`public struct cc2538_sys_ctrl_t::@49::@54 `[`RCGCUARTbits`](#structcc2538__sys__ctrl__t_1ab23d6155ad64770732bfcafc66726fe0) | 
`public union cc2538_sys_ctrl_t::@49 `[`cc2538_sys_ctrl_unnamed1`](#structcc2538__sys__ctrl__t_1a0b56360da843d72566f554769fa8b2e7) | UART module clock register - active mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCUART`](#structcc2538__sys__ctrl__t_1a33cb20b6c530e442b03583578d023c87) | Module clocks for UART[1:0] when the CPU is in sleep mode.
`public struct cc2538_sys_ctrl_t::@50::@55 `[`SCGCUARTbits`](#structcc2538__sys__ctrl__t_1a378048886ecd0475b53af0dd07b2d5ff) | 
`public union cc2538_sys_ctrl_t::@50 `[`cc2538_sys_ctrl_unnamed2`](#structcc2538__sys__ctrl__t_1ac081aa76366462db4d5c15392833ab28) | UART module clock register - sleep mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCUART`](#structcc2538__sys__ctrl__t_1aa1e2e499ed52a39324a7229b85674805) | Module clocks for UART[1:0] when the CPU is in PM0.
`public struct cc2538_sys_ctrl_t::@51::@56 `[`DCGCUARTbits`](#structcc2538__sys__ctrl__t_1ad5113cd80e4692cd862b6096b1d101e6) | 
`public union cc2538_sys_ctrl_t::@51 `[`cc2538_sys_ctrl_unnamed3`](#structcc2538__sys__ctrl__t_1a97df8e9afcb51cf98a505024963a3e73) | UART module clock register - PM0 mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRUART`](#structcc2538__sys__ctrl__t_1aa363637c43ed1e2be981442399f4182f) | Reset for UART[1:0].
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCI2C`](#structcc2538__sys__ctrl__t_1af9836a6b35b74a5e91ecc380f39ab1c9) | Module clocks for I2C when the CPU is in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCI2C`](#structcc2538__sys__ctrl__t_1aba159b627685d6bda5e7e283f92212b5) | Module clocks for I2C when the CPU is in sleep mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCI2C`](#structcc2538__sys__ctrl__t_1aa61142460cd57806f03ea43d5538e647) | Module clocks for I2C when the CPU is in PM0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRI2C`](#structcc2538__sys__ctrl__t_1a7d17f06b5a641838adbe055f287fcbce) | Reset for I2C.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCSEC`](#structcc2538__sys__ctrl__t_1a418d90e36fef93ea7d4aa2f339262f42) | Module clocks for the security module when the CPU is in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCSEC`](#structcc2538__sys__ctrl__t_1abc91aaf4715e33448ad496ae558affac) | Module clocks for the security module when the CPU is in sleep mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCSEC`](#structcc2538__sys__ctrl__t_1aceead1b2a97433eb36f5502d7d290d23) | Module clocks for the security module when the CPU is in PM0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRSEC`](#structcc2538__sys__ctrl__t_1aeebe2e7b0bf619259201e3a2df9ffb40) | Reset for the security module.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PMCTL`](#structcc2538__sys__ctrl__t_1aa322e9642519991bde33657540431974) | Power mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRCRC`](#structcc2538__sys__ctrl__t_1afe7622a57fad715f4e52b0e46265e3c0) | CRC on state retention.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED10`](#structcc2538__sys__ctrl__t_1a49bbaec028a5be9a72292552031640c4) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PWRDBG`](#structcc2538__sys__ctrl__t_1a23a0e7a1390e4dd44bdb035fec88a186) | Power debug register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED11`](#structcc2538__sys__ctrl__t_1aa50cbaed4cad67fe80396e08133edd33) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CLD`](#structcc2538__sys__ctrl__t_1a99031c962cf34b445e395e9018e3a464) | This register controls the clock loss detection feature.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED12`](#structcc2538__sys__ctrl__t_1a17d770dbd28d478bab322b33037ba091) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IWE`](#structcc2538__sys__ctrl__t_1a252eb3412b3a119ba26515b958a7f6a1) | This register controls interrupt wake-up.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`I_MAP`](#structcc2538__sys__ctrl__t_1ad9541b99c9dd562e1ee5f0c391089793) | This register selects which interrupt map to be used.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED13`](#structcc2538__sys__ctrl__t_1a34f5481b15d0853b98cca6c4b057761f) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCRFC`](#structcc2538__sys__ctrl__t_1a8aac3a4e5a0b0c3099fba024ffd55820) | This register defines the module clocks for RF CORE when the CPU is in active (run) mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCRFC`](#structcc2538__sys__ctrl__t_1a43c516e65125752c8b3282332a00eff8) | This register defines the module clocks for RF CORE when the CPU is in sleep mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCRFC`](#structcc2538__sys__ctrl__t_1a678ed1195679cf7b7f0565e8eef3cfbb) | This register defines the module clocks for RF CORE when the CPU is in PM0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`EMUOVR`](#structcc2538__sys__ctrl__t_1a68b0f8259bf343949c05aa61c41e901f) | This register defines the emulator override controls for power mode and peripheral clock gate.

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CLOCK_CTRL`](#structcc2538__sys__ctrl__t_1abbe3be72c97e4e6d82cdaf75f7b71392) 

Clock control register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SYS_DIV`](#structcc2538__sys__ctrl__t_1add579c744a0527b34d97172405dc535e) 

System clock rate setting.

Current functional frequency for system clock.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__sys__ctrl__t_1ab3d3d9cce3bc9681127cf1baa579e72d) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IO_DIV`](#structcc2538__sys__ctrl__t_1a08d02d0bae77de3c2aad9fee0dfe7416) 

I/O clock rate setting.

Current functional frequency for IO_CLK.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__sys__ctrl__t_1ab5473cbe95fb8bd45d0570ee2cf9c594) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC`](#structcc2538__sys__ctrl__t_1ae465eecb69463569a6f2809d361d0335) 

System clock oscillator selection.

Current clock source selected.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC_PD`](#structcc2538__sys__ctrl__t_1ada018db8a904bd7fdcc47bdf78dfa253) 

Oscillator power-down.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__sys__ctrl__t_1adb13978b7c63a58356441bca2c743195) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AMP_DET`](#structcc2538__sys__ctrl__t_1a722fcdc4a67e27747a26af7caab003c4) 

Amplitude detector of XOSC during power up.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__sys__ctrl__t_1a2ae082e11555fe10bf400af0dfc4ff23) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC32K`](#structcc2538__sys__ctrl__t_1a346f85c72c48d059f8fee251781c3f1b) 

32-kHz clock oscillator selection

Current 32-kHz clock oscillator selected.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC32K_CADIS`](#structcc2538__sys__ctrl__t_1a612adf8ccba78b8ea9d97fa9acf9199f) 

Disable calibration 32-kHz RC oscillator.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__sys__ctrl__t_1a5952c8b36d4f193a4149435791504cc9) 

Reserved bits.

#### `public struct cc2538_sys_ctrl_t::@47::@52 `[`CLOCK_CTRLbits`](#structcc2538__sys__ctrl__t_1a253bb5cbe8f4cdca507fc941615ff8e5) 

#### `public union cc2538_sys_ctrl_t::@47 `[`cc2538_sys_ctrl_clk_ctrl`](#structcc2538__sys__ctrl__t_1ac5b19da4186b4657454fc476af7c602a) 

Clock control register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CLOCK_STA`](#structcc2538__sys__ctrl__t_1a52cda35b92302beca03c55f38e3c0ab2) 

Clock status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__sys__ctrl__t_1a8b33338e7a791d8b4d771e55c8d8674c) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED7`](#structcc2538__sys__ctrl__t_1a626e0fecfd3acf7770c308469c6e9303) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`HSOSC_STB`](#structcc2538__sys__ctrl__t_1a76a4f4eb2b2d80b2a973dedb1df8f994) 

HSOSC stable status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XOSC_STB`](#structcc2538__sys__ctrl__t_1ad24c75dbaf6ef5aa5b4d01e17ce5f81f) 

XOSC stable status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SOURCE_CHANGE`](#structcc2538__sys__ctrl__t_1ab3fca1b459c5094c2bea516982a542e1) 

System clock source change.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED8`](#structcc2538__sys__ctrl__t_1a98f82e6ca27df4f5d0cf2a172422122a) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RST`](#structcc2538__sys__ctrl__t_1a30c2a0027106f561da1dae412ef9f7c5) 

Last source of reset.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OSC32K_CALDIS`](#structcc2538__sys__ctrl__t_1ac024ef8c5333a8f6cfa70146445c70ad) 

Disable calibration 32-kHz RC oscillator.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SYNC_32K`](#structcc2538__sys__ctrl__t_1aa31ffab3ebc75534d63cb9043f60eeff) 

32-kHz clock source synced to undivided system clock (16 or 32 MHz)

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED9`](#structcc2538__sys__ctrl__t_1abe2918398cf8bdeb4fa20c006c3393ef) 

Reserved bits.

#### `public struct cc2538_sys_ctrl_t::@48::@53 `[`CLOCK_STAbits`](#structcc2538__sys__ctrl__t_1ae8fc458610adfa34597633a8a41861b9) 

#### `public union cc2538_sys_ctrl_t::@48 `[`cc2538_sys_ctrl_clk_sta`](#structcc2538__sys__ctrl__t_1a197e50c40cd756d78d0c7a987166989f) 

Clock status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCGPT`](#structcc2538__sys__ctrl__t_1aaaf678c50b3d11f182923b73031f23de) 

Module clocks for GPT[3:0] when the CPU is in active (run) mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCGPT`](#structcc2538__sys__ctrl__t_1a6a28f9603c0366fc513ed72bd70418ac) 

Module clocks for GPT[3:0] when the CPU is in sleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCGPT`](#structcc2538__sys__ctrl__t_1ab57705c6e176328c94f0a078ef96bda6) 

Module clocks for GPT[3:0] when the CPU is in PM0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRGPT`](#structcc2538__sys__ctrl__t_1a3bb42b681920e68d901c984f7e46e399) 

Reset for GPT[3:0].

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCSSI`](#structcc2538__sys__ctrl__t_1a996c09e47437761121efea59a672bc0d) 

Module clocks for SSI[1:0] when the CPU is in active (run) mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCSSI`](#structcc2538__sys__ctrl__t_1a25b03f6e3e13953ccbbb0852ef95b5ae) 

Module clocks for SSI[1:0] when the CPU is insSleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCSSI`](#structcc2538__sys__ctrl__t_1a4fade6b6eafb464fa9c238ebd8d7b3aa) 

Module clocks for SSI[1:0] when the CPU is in PM0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRSSI`](#structcc2538__sys__ctrl__t_1a7b81c12e23ca7bed13af6ee3df12dfb5) 

Reset for SSI[1:0].

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCUART`](#structcc2538__sys__ctrl__t_1af1cc69504d8178cb0e9e3a893d3f7834) 

Module clocks for UART[1:0] when the CPU is in active (run) mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`UART0`](#structcc2538__sys__ctrl__t_1a6652897d4e8b5b734bc83079a00b083e) 

Enable UART0 clock in active (run) mode.

Enable UART0 clock in PM0.

Enable UART0 clock in sleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`UART1`](#structcc2538__sys__ctrl__t_1adbef21a60d642ca3d5b652b13791aa14) 

Enable UART1 clock in active (run) mode.

Enable UART1 clock in PM0.

Enable UART1 clock in sleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__sys__ctrl__t_1a48afdd678104ceaa0760a073d31abf70) 

Reserved bits.

#### `public struct cc2538_sys_ctrl_t::@49::@54 `[`RCGCUARTbits`](#structcc2538__sys__ctrl__t_1ab23d6155ad64770732bfcafc66726fe0) 

#### `public union cc2538_sys_ctrl_t::@49 `[`cc2538_sys_ctrl_unnamed1`](#structcc2538__sys__ctrl__t_1a0b56360da843d72566f554769fa8b2e7) 

UART module clock register - active mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCUART`](#structcc2538__sys__ctrl__t_1a33cb20b6c530e442b03583578d023c87) 

Module clocks for UART[1:0] when the CPU is in sleep mode.

#### `public struct cc2538_sys_ctrl_t::@50::@55 `[`SCGCUARTbits`](#structcc2538__sys__ctrl__t_1a378048886ecd0475b53af0dd07b2d5ff) 

#### `public union cc2538_sys_ctrl_t::@50 `[`cc2538_sys_ctrl_unnamed2`](#structcc2538__sys__ctrl__t_1ac081aa76366462db4d5c15392833ab28) 

UART module clock register - sleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCUART`](#structcc2538__sys__ctrl__t_1aa1e2e499ed52a39324a7229b85674805) 

Module clocks for UART[1:0] when the CPU is in PM0.

#### `public struct cc2538_sys_ctrl_t::@51::@56 `[`DCGCUARTbits`](#structcc2538__sys__ctrl__t_1ad5113cd80e4692cd862b6096b1d101e6) 

#### `public union cc2538_sys_ctrl_t::@51 `[`cc2538_sys_ctrl_unnamed3`](#structcc2538__sys__ctrl__t_1a97df8e9afcb51cf98a505024963a3e73) 

UART module clock register - PM0 mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRUART`](#structcc2538__sys__ctrl__t_1aa363637c43ed1e2be981442399f4182f) 

Reset for UART[1:0].

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCI2C`](#structcc2538__sys__ctrl__t_1af9836a6b35b74a5e91ecc380f39ab1c9) 

Module clocks for I2C when the CPU is in active (run) mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCI2C`](#structcc2538__sys__ctrl__t_1aba159b627685d6bda5e7e283f92212b5) 

Module clocks for I2C when the CPU is in sleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCI2C`](#structcc2538__sys__ctrl__t_1aa61142460cd57806f03ea43d5538e647) 

Module clocks for I2C when the CPU is in PM0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRI2C`](#structcc2538__sys__ctrl__t_1a7d17f06b5a641838adbe055f287fcbce) 

Reset for I2C.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCSEC`](#structcc2538__sys__ctrl__t_1a418d90e36fef93ea7d4aa2f339262f42) 

Module clocks for the security module when the CPU is in active (run) mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCSEC`](#structcc2538__sys__ctrl__t_1abc91aaf4715e33448ad496ae558affac) 

Module clocks for the security module when the CPU is in sleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCSEC`](#structcc2538__sys__ctrl__t_1aceead1b2a97433eb36f5502d7d290d23) 

Module clocks for the security module when the CPU is in PM0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRSEC`](#structcc2538__sys__ctrl__t_1aeebe2e7b0bf619259201e3a2df9ffb40) 

Reset for the security module.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PMCTL`](#structcc2538__sys__ctrl__t_1aa322e9642519991bde33657540431974) 

Power mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SRCRC`](#structcc2538__sys__ctrl__t_1afe7622a57fad715f4e52b0e46265e3c0) 

CRC on state retention.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED10`](#structcc2538__sys__ctrl__t_1a49bbaec028a5be9a72292552031640c4) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PWRDBG`](#structcc2538__sys__ctrl__t_1a23a0e7a1390e4dd44bdb035fec88a186) 

Power debug register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED11`](#structcc2538__sys__ctrl__t_1aa50cbaed4cad67fe80396e08133edd33) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CLD`](#structcc2538__sys__ctrl__t_1a99031c962cf34b445e395e9018e3a464) 

This register controls the clock loss detection feature.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED12`](#structcc2538__sys__ctrl__t_1a17d770dbd28d478bab322b33037ba091) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IWE`](#structcc2538__sys__ctrl__t_1a252eb3412b3a119ba26515b958a7f6a1) 

This register controls interrupt wake-up.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`I_MAP`](#structcc2538__sys__ctrl__t_1ad9541b99c9dd562e1ee5f0c391089793) 

This register selects which interrupt map to be used.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED13`](#structcc2538__sys__ctrl__t_1a34f5481b15d0853b98cca6c4b057761f) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RCGCRFC`](#structcc2538__sys__ctrl__t_1a8aac3a4e5a0b0c3099fba024ffd55820) 

This register defines the module clocks for RF CORE when the CPU is in active (run) mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SCGCRFC`](#structcc2538__sys__ctrl__t_1a43c516e65125752c8b3282332a00eff8) 

This register defines the module clocks for RF CORE when the CPU is in sleep mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DCGCRFC`](#structcc2538__sys__ctrl__t_1a678ed1195679cf7b7f0565e8eef3cfbb) 

This register defines the module clocks for RF CORE when the CPU is in PM0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`EMUOVR`](#structcc2538__sys__ctrl__t_1a68b0f8259bf343949c05aa61c41e901f) 

This register defines the emulator override controls for power mode and peripheral clock gate.

