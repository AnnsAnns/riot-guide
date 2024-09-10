---
title: api-cpu_cc2538_gptimer.md
description: api-cpu_cc2538_gptimer.md
---
# group `cpu_cc2538_gptimer` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@18`](#group__cpu__cc2538__gptimer_1ga6b7b47dd702d9e331586d485013fd1ea)            | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) modes.
`enum `[`@19`](#group__cpu__cc2538__gptimer_1gaf9bdc3014f3d54c426b6d2df10de4960)            | [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) width configuration.
`struct `[`cc2538_gptimer_t`](#structcc2538__gptimer__t) | GPTIMER component registers.

## Members

#### `enum `[`@18`](#group__cpu__cc2538__gptimer_1ga6b7b47dd702d9e331586d485013fd1ea) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPTIMER_ONE_SHOT_MODE            | GPTIMER one-shot mode.
GPTIMER_PERIODIC_MODE            | GPTIMER periodic mode.
GPTIMER_CAPTURE_MODE            | GPTIMER capture mode.

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) modes.

#### `enum `[`@19`](#group__cpu__cc2538__gptimer_1gaf9bdc3014f3d54c426b6d2df10de4960) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
GPTMCFG_32_BIT_TIMER            | 32-bit timer configuration
GPTMCFG_32_BIT_REAL_TIME_CLOCK            | 32-bit real-time clock
GPTMCFG_16_BIT_TIMER            | 16-bit timer configuration

[Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) width configuration.

# struct `cc2538_gptimer_t` 

GPTIMER component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CFG`](#structcc2538__gptimer__t_1acb18b697169dca5ad5b882b9c2a23121) | GPTIMER Configuration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAMR`](#structcc2538__gptimer__t_1a4b40d6eb5e65dfbc7dc7345ecfc96c92) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBMR`](#structcc2538__gptimer__t_1aaf389942b118c1d609c80a6d0d88a341) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTL`](#structcc2538__gptimer__t_1a0c83ac19ceccc4e91dfebc1bc3d43765) | GPTIMER Control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SYNC`](#structcc2538__gptimer__t_1ab4b13f0a578b191f2b851e6c684a7bc2) | GPTIMER Synchronize.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__gptimer__t_1a8af411e9bf1f725e678a90c427019287) | Reserved word.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IMR`](#structcc2538__gptimer__t_1ac5e95f0786fad185b6b4f08340faaafd) | GPTIMER Interrupt Mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__gptimer__t_1a743856637e7cccc829f45cbf832dcd5f) | GPTIMER Raw Interrupt Status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__gptimer__t_1ad8d8edef94ba20180d1a7864de8e8e5b) | GPTIMER Masked Interrupt Status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ICR`](#structcc2538__gptimer__t_1a3e7e8b80e0908493ddad6af26c0e2820) | GPTIMER Interrupt Clear.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAILR`](#structcc2538__gptimer__t_1a08034e3689e51d47e29e9d6b034bedb1) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Interval Load.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBILR`](#structcc2538__gptimer__t_1a64c4e2c9a17562c964dcee9f615eed51) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Interval Load.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAMATCHR`](#structcc2538__gptimer__t_1a9e52158c0ac38dd00207bcb64e109163) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Match.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBMATCHR`](#structcc2538__gptimer__t_1a6518b04f385d2a64b4cbaad5014f202e) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Match.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPR`](#structcc2538__gptimer__t_1aaf2d5345badd69a5441c8edc266db201) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPR`](#structcc2538__gptimer__t_1ab853e08b8539c2512cc3707ad38ccf10) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPMR`](#structcc2538__gptimer__t_1aecd007bfa136da81c15d199e31bfe9bc) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Match Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPMR`](#structcc2538__gptimer__t_1a5a3114d1b98bf1b59595b5a51b0c1efd) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Match Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAR`](#structcc2538__gptimer__t_1a92ec9edbd4aacd723b56bead7652e72f) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBR`](#structcc2538__gptimer__t_1ab508a416eadf1cda3717f9b9673d86a7) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAV`](#structcc2538__gptimer__t_1a2820bb01077d0ef1ad35abf926f2cd00) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Value.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBV`](#structcc2538__gptimer__t_1a1efb1efdf6983822723eda93f1a5b284) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Value.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__gptimer__t_1af68af51ca33946261cc2006fb1d0fc6f) | Reserved word.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPS`](#structcc2538__gptimer__t_1ad163c33b422b4597ea6745cd60cadec2) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Snapshot.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPS`](#structcc2538__gptimer__t_1a6415d743324f4c2e26bfe64f288f6134) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Snapshot.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPV`](#structcc2538__gptimer__t_1aa57d2a4e390757e42f247687e8c6db4b) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Value.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPV`](#structcc2538__gptimer__t_1a8fc243b353c9eb67f111217b260d50de) | GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Value.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__gptimer__t_1af8d799a2720f946246b0413f41f50e3d) | Reserved.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PP`](#structcc2538__gptimer__t_1a65353c773a354eca0ac9141ab77fc761) | GPTIMER Peripheral Properties.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__gptimer__t_1a5c6bd93856ab7c89b32100926443a666) | Reserved.

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CFG`](#structcc2538__gptimer__t_1acb18b697169dca5ad5b882b9c2a23121) 

GPTIMER Configuration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAMR`](#structcc2538__gptimer__t_1a4b40d6eb5e65dfbc7dc7345ecfc96c92) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBMR`](#structcc2538__gptimer__t_1aaf389942b118c1d609c80a6d0d88a341) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTL`](#structcc2538__gptimer__t_1a0c83ac19ceccc4e91dfebc1bc3d43765) 

GPTIMER Control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SYNC`](#structcc2538__gptimer__t_1ab4b13f0a578b191f2b851e6c684a7bc2) 

GPTIMER Synchronize.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__gptimer__t_1a8af411e9bf1f725e678a90c427019287) 

Reserved word.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IMR`](#structcc2538__gptimer__t_1ac5e95f0786fad185b6b4f08340faaafd) 

GPTIMER Interrupt Mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__gptimer__t_1a743856637e7cccc829f45cbf832dcd5f) 

GPTIMER Raw Interrupt Status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__gptimer__t_1ad8d8edef94ba20180d1a7864de8e8e5b) 

GPTIMER Masked Interrupt Status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ICR`](#structcc2538__gptimer__t_1a3e7e8b80e0908493ddad6af26c0e2820) 

GPTIMER Interrupt Clear.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAILR`](#structcc2538__gptimer__t_1a08034e3689e51d47e29e9d6b034bedb1) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Interval Load.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBILR`](#structcc2538__gptimer__t_1a64c4e2c9a17562c964dcee9f615eed51) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Interval Load.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAMATCHR`](#structcc2538__gptimer__t_1a9e52158c0ac38dd00207bcb64e109163) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Match.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBMATCHR`](#structcc2538__gptimer__t_1a6518b04f385d2a64b4cbaad5014f202e) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Match.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPR`](#structcc2538__gptimer__t_1aaf2d5345badd69a5441c8edc266db201) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPR`](#structcc2538__gptimer__t_1ab853e08b8539c2512cc3707ad38ccf10) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPMR`](#structcc2538__gptimer__t_1aecd007bfa136da81c15d199e31bfe9bc) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Match Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPMR`](#structcc2538__gptimer__t_1a5a3114d1b98bf1b59595b5a51b0c1efd) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Match Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAR`](#structcc2538__gptimer__t_1a92ec9edbd4aacd723b56bead7652e72f) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBR`](#structcc2538__gptimer__t_1ab508a416eadf1cda3717f9b9673d86a7) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAV`](#structcc2538__gptimer__t_1a2820bb01077d0ef1ad35abf926f2cd00) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Value.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBV`](#structcc2538__gptimer__t_1a1efb1efdf6983822723eda93f1a5b284) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Value.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__gptimer__t_1af68af51ca33946261cc2006fb1d0fc6f) 

Reserved word.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPS`](#structcc2538__gptimer__t_1ad163c33b422b4597ea6745cd60cadec2) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Snapshot.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPS`](#structcc2538__gptimer__t_1a6415d743324f4c2e26bfe64f288f6134) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Snapshot.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TAPV`](#structcc2538__gptimer__t_1aa57d2a4e390757e42f247687e8c6db4b) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) A Prescale Value.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TBPV`](#structcc2538__gptimer__t_1a8fc243b353c9eb67f111217b260d50de) 

GPTIMER [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) B Prescale Value.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__gptimer__t_1af8d799a2720f946246b0413f41f50e3d) 

Reserved.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PP`](#structcc2538__gptimer__t_1a65353c773a354eca0ac9141ab77fc761) 

GPTIMER Peripheral Properties.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__gptimer__t_1a5c6bd93856ab7c89b32100926443a666) 

Reserved.

