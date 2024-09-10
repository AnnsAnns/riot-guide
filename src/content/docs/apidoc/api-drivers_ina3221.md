---
title: api-drivers_ina3221.md
description: api-drivers_ina3221.md
---
# group `drivers_ina3221` 

Device driver for Texas Instruments INA3221 three-channel, high-side current and bus voltage monitor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`INA3221_NUM_CH`](#group__drivers__ina3221_1ga7c91e6f7a7561b5411172b736c52ff06)            | Number of channels.
`define `[`INA3221_NUM_ALERTS`](#group__drivers__ina3221_1ga894e0b909eccd767e0aa5e5afcc6a3f3)            | Number of alerts.
`define `[`INA3221_MODE_MASK`](#group__drivers__ina3221_1gae8e8768802c493e58400cc06aaf0ee9e)            | Device operation mode bit mask.
`define `[`INA3221_CONV_TIME_SADC_MASK`](#group__drivers__ina3221_1ga43f1dd873e93ee18ac5db6344feb7c6d)            | ADC shunt voltage conversion times bit mask.
`define `[`INA3221_CONV_TIME_BADC_MASK`](#group__drivers__ina3221_1ga8f6f6df41021dddb3bd9732a9eb8594b)            | ADC bus voltage conversion times bit mask.
`define `[`INA3221_NUM_SAMPLES_MASK`](#group__drivers__ina3221_1ga31d3b15cc6f4d73648b6a15847d5562c)            | Number of samples to calculate average shunt/bus voltage value bit mask.
`define `[`INA3221_ENABLE_CH_MASK`](#group__drivers__ina3221_1gad6e3b2d58249ab7a8ce1be5e5c358cd8)            | Enable channel bit mask.
`define `[`INA3221_ENABLE_SUM_CH_MASK`](#group__drivers__ina3221_1ga65bfc0aa72f7082a6d804f8ccea00143)            | Enable shunt voltage sum calculation channel bit mask.
`define `[`INA3221_ENABLE_LATCH_MASK`](#group__drivers__ina3221_1ga28d82f8a34eb3cdefc4063719570e9c4)            | Enable latch bit mask.
`define `[`INA3221_DEFCONFIG`](#group__drivers__ina3221_1ga747d50148aab9708a44b70562c3b5580)            | Default configuration register value.
`define `[`INA3221_RESET`](#group__drivers__ina3221_1gae0be09ad93ea756e9e28e1000ab3e752)            | Reset configuration register value.
`define `[`INA3221_FLAG_CRIT_ALERT_CH1`](#group__drivers__ina3221_1gab30f89af6d6fc08df1753737b046afa6)            | Critical alert channel 1 flag.
`define `[`INA3221_FLAG_CRIT_ALERT_CH2`](#group__drivers__ina3221_1ga7380620ac53530d537a5b8855f8aa717)            | Critical alert channel 2 flag.
`define `[`INA3221_FLAG_CRIT_ALERT_CH3`](#group__drivers__ina3221_1ga8ab90ba5695d317563042e1ec1227bfd)            | Critical alert channel 3 flag.
`define `[`INA3221_FLAG_SHUNT_SUM_ALERT`](#group__drivers__ina3221_1gacfc65dda088cf0de991097f472472087)            | Alert channel sum flag.
`define `[`INA3221_FLAG_WARN_ALERT_CH1`](#group__drivers__ina3221_1ga4d2b67b4e51334a97cff5b22c74bc8b2)            | Warning alert channel 1 flag.
`define `[`INA3221_FLAG_WARN_ALERT_CH2`](#group__drivers__ina3221_1ga9b10106ba1702f258e50339f11da6394)            | Warning alert channel 2 flag.
`define `[`INA3221_FLAG_WARN_ALERT_CH3`](#group__drivers__ina3221_1ga69da6bb6fc4f82a9333ffba581df1303)            | Warning alert channel 3 flag.
`define `[`INA3221_FLAG_POWER_VALID`](#group__drivers__ina3221_1gaec14a0c4b5f0bb083b394a989a0d4969)            | Power valid flag.
`define `[`INA3221_FLAG_TIMING_CONTROL`](#group__drivers__ina3221_1ga6bb987141e59be524132898ea6d28203)            | Timing Control flag.
`define `[`INA3221_FLAG_CONV_READY`](#group__drivers__ina3221_1gad89684d20966116965f0c4cb867bdcba)            | Conversion ready flag.
`define `[`INA3221_FLAGS_MASK`](#group__drivers__ina3221_1ga5c279f02477b5c89ccaf3867f647a83d)            | Flags bit mask.
`define `[`INA3221_TRIGGER_SHUNT`](#group__drivers__ina3221_1ga4aa0d12ff1a3774a8b288c496eae4521)            | Set operation mode to INA3221_MODE_TRIGGER_SHUNT_ONLY to trigger shunt voltage measurement.
`define `[`INA3221_TRIGGER_BUS`](#group__drivers__ina3221_1gaabb3c47b708c3e57710732a27f1d2337)            | Set operation mode to INA3221_MODE_TRIGGER_BUS_ONLY to trigger bus voltage measurement.
`define `[`INA3221_TRIGGER_SHUNT_AND_BUS`](#group__drivers__ina3221_1ga19933d2c99e650f3987bebdd28525c1e)            | Set operation mode to INA3221_MODE_TRIGGER_SHUNT_BUS to trigger shunt and bus voltage measurement.
`enum `[`ina3221_dev_addr`](#group__drivers__ina3221_1ga5300014460e402047043e1c9742176a3)            | I2C device addresses.
`enum `[`ina3221_channel`](#group__drivers__ina3221_1gabb73f511d6e0f96788ade531d27783b8)            | Channel flags.
`enum `[`ina3221_alert`](#group__drivers__ina3221_1ga5b1507e7c214403e88199da3367a0012)            | Alert indices.
`enum `[`ina3221_mode`](#group__drivers__ina3221_1ga2573d59b5435afc924323dc544ef45c6)            | Device operation modes.
`enum `[`ina3221_conv_time_shunt_adc`](#group__drivers__ina3221_1ga2bd7d05ad45db5f14136f088fbc952ff)            | ADC shunt voltage conversion times.
`enum `[`ina3221_conv_time_bus_adc`](#group__drivers__ina3221_1ga69a9ab55dcc888032662a0eeb6a1f831)            | ADC bus voltage conversion times.
`enum `[`ina3221_num_samples`](#group__drivers__ina3221_1ga2762f6a98b0e9e9ab41df8efa0182465)            | Number of samples to calculate average shunt/bus voltage value.
`enum `[`ina3221_enable_ch`](#group__drivers__ina3221_1ga5c8ef4f38c4e82cccc44f9a10ce960fa)            | Enable channel flags.
`enum `[`ina3221_enable_sum_ch`](#group__drivers__ina3221_1gaa7b8848fbc8c35bb127956bea38560c1)            | Enable shunt voltage sum calculation channel flags.
`enum `[`ina3221_enable_latch`](#group__drivers__ina3221_1gac40d8e84ae276e75f56616a498a07bbe)            | Enable latch flags.
`public int `[`ina3221_reset`](#group__drivers__ina3221_1gad6f8d886c326d16b9ac2805ccc0612b8)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)`            | Reset device, i.e.
`public int `[`ina3221_init`](#group__drivers__ina3221_1gab165957bacc1d0d48701e72d080914b6)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,const `[`ina3221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__params__t)` * params)`            | Initialize device.
`public int `[`ina3221_enable_alert`](#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga5d89d6ea26f8e51f7a7058a36427d307)` alert,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)`            | Enable alert and set callback and argument for alert `alert`.
`public inline static int `[`ina3221_enable_warning_alert`](#group__drivers__ina3221_1ga44be5aa90646da66b20c496192e4ad72)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)`            | Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable warning alert.
`public inline static int `[`ina3221_enable_critical_alert`](#group__drivers__ina3221_1gac1edaea8a7d885b10c60b81927ababc4)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)`            | Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable critical alert.
`public inline static int `[`ina3221_enable_timing_control_alert`](#group__drivers__ina3221_1gadc5f14bb2cd93d3918f7965f10d18b57)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)`            | Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable timing control alert.
`public inline static int `[`ina3221_enable_power_valid_alert`](#group__drivers__ina3221_1gab1a94f6e6474b0d3855c66321abe839c)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)`            | Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable power valid alert.
`public int `[`ina3221_disable_alert`](#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga5d89d6ea26f8e51f7a7058a36427d307)` alert)`            | Disable alert `alert`.
`public inline static int `[`ina3221_disable_warning_alert`](#group__drivers__ina3221_1gab90daf80aa3f08ff58b4e19166e7083a)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)`            | Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable warning alert.
`public inline static int `[`ina3221_disable_critical_alert`](#group__drivers__ina3221_1gaa7f1c6988e6818c3567f81ee29d7bb42)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)`            | Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable critical alert.
`public inline static int `[`ina3221_disable_timing_control_alert`](#group__drivers__ina3221_1gad573ebf518da7f4218135ad70b808d21)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)`            | Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable timing control alert.
`public inline static int `[`ina3221_disable_power_valid_alert`](#group__drivers__ina3221_1ga922d29988fa4c6cbb98d48d68c4e44ef)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)`            | Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable power valid alert.
`public inline static `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_config_get_enabled_channels`](#group__drivers__ina3221_1gae9f83d3860292f23f718dfb1bcb0af57)`(uint16_t cfg)`            | Get enabled measurement channels from configuration value.
`public inline static void `[`ina3221_config_set_enabled_channels`](#group__drivers__ina3221_1gada0fc1b8827b572fcfabae434fe15baa)`(uint16_t * cfg,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch)`            | Enable measurement channels in configuration value.
`public inline static `[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` `[`ina3221_config_get_num_samples`](#group__drivers__ina3221_1ga71ce7c5b584a665f01494a53f517a211)`(uint16_t cfg)`            | Get number of samples from configuration value.
`public inline static void `[`ina3221_config_set_num_samples`](#group__drivers__ina3221_1gafb43f040c9381061d4b33d208f77f1fc)`(uint16_t * cfg,`[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` ns)`            | Set number of samples in configuration value.
`public inline static `[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` `[`ina3221_config_get_conv_time_bus`](#group__drivers__ina3221_1ga79b988fec8a2006b3cdfd45936169e9d)`(uint16_t cfg)`            | Get bus voltage conversion time from configuration value.
`public inline static void `[`ina3221_config_set_conv_time_bus`](#group__drivers__ina3221_1ga8573ec4f8061020fd4ae915a4539dc7e)`(uint16_t * cfg,`[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` bus)`            | Set bus voltage conversion time in configuration value.
`public inline static `[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` `[`ina3221_config_get_conv_time_shunt`](#group__drivers__ina3221_1ga27836e55e45277bcc12c36982e22aa46)`(uint16_t cfg)`            | Get shunt voltage conversion time from configuration value.
`public inline static void `[`ina3221_config_set_conv_time_shunt`](#group__drivers__ina3221_1ga7034cc411ea18ad8b456530bf9850e7a)`(uint16_t * cfg,`[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` shunt)`            | Set shunt voltage conversion time in configuration value.
`public inline static `[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` `[`ina3221_config_get_mode`](#group__drivers__ina3221_1ga5976815b308d0ddd8bfef81eb693e371)`(uint16_t cfg)`            | Get operation mode from configuration value.
`public inline static void `[`ina3221_config_set_mode`](#group__drivers__ina3221_1gafae0b41ace0eee9d7521fd92a6dcdf9d)`(uint16_t * cfg,`[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` mode)`            | Set operation mode in configuration value.
`public int `[`ina3221_set_config`](#group__drivers__ina3221_1ga079d001f645992840decdd1d8caaf8a2)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,uint16_t cfg)`            | Write configuration register value to configuration register.
`public int `[`ina3221_get_config`](#group__drivers__ina3221_1gac765126bb88ef38a7774c13d2fd1fe1c)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,uint16_t * cfg)`            | Read currently saved configuration register value.
`public int `[`ina3221_set_enable_channel`](#group__drivers__ina3221_1ga56e0c8e49c5734a127af581e0b1e064e)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch)`            | Enable channels.
`public inline static void `[`ina3221_get_enable_channel`](#group__drivers__ina3221_1ga72a2dc0233c106772aa125701f1c1b11)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` * ch)`            | Read which channels are currently enabled.
`public int `[`ina3221_set_num_samples`](#group__drivers__ina3221_1ga6d73f48b58b359f1e475cd50c15b5d4f)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` ns)`            | Update number of samples and write to configuration register.
`public inline static void `[`ina3221_get_num_samples`](#group__drivers__ina3221_1ga0798a092d4a28d8af7b74f121ad932e8)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` * ns)`            | Read currently applied number of samples.
`public int `[`ina3221_set_conv_time_bus_adc`](#group__drivers__ina3221_1gae441b96b2160af23e74b882a4cba091c)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` ctb)`            | Update conversion time of bus voltage ADC and write to configuration register.
`public inline static void `[`ina3221_get_conv_time_bus_adc`](#group__drivers__ina3221_1ga434351e789ac1134529f85c3a6e9c874)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` * ctb)`            | Read currently applied bus voltage ADC conversion time.
`public int `[`ina3221_set_conv_time_shunt_adc`](#group__drivers__ina3221_1gadd3d04f7c46c70257e0bdceda1391b90)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` cts)`            | Update conversion time of shunt voltage ADC and write to configuration register.
`public inline static void `[`ina3221_get_conv_time_shunt_adc`](#group__drivers__ina3221_1gaee1a3467cd1600eac2cd86b16ccddb9c)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` * cts)`            | Read currently applied shunt voltage ADC conversion time.
`public int `[`ina3221_set_mode`](#group__drivers__ina3221_1ga3b6773edefd3e2909321241f1fa0dbcb)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` mode)`            | Update device operation mode.
`public inline static void `[`ina3221_get_mode`](#group__drivers__ina3221_1gac4488a512adfabb40dedbe3589604b3b)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` * mode)`            | Read currently applied device operation mode.
`public int `[`ina3221_set_enable_sum_channel`](#group__drivers__ina3221_1gab727576964b195632ec26cc3e8e93679)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch)`            | Enable channels for shunt voltage sum calculation.
`public int `[`ina3221_get_enable_sum_channel`](#group__drivers__ina3221_1ga465bb5794c5af5d5e90addef9e75f9eb)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` * ch)`            | Read enabled channels for shunt voltage sum calculation.
`public int `[`ina3221_set_latch`](#group__drivers__ina3221_1ga86d45ab5a09ff6683c6af557c5060f80)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,bool warn,bool crit)`            | Enable latches for critical/warning alert pins.
`public int `[`ina3221_get_latch`](#group__drivers__ina3221_1gaaba508626fc1e48bed14f5b2107e4204)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,bool * warn,bool * crit)`            | Read enabled latches for critical/warning alert pins.
`public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_set_crit_alert_limit`](#group__drivers__ina3221_1ga06db2d182f0873bd116fe9c11dfe62be)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t in_uv)`            | Set critical shunt voltage alert limit to `in_uv` for each channel in `ch`.
`public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_get_crit_alert_limit`](#group__drivers__ina3221_1ga179a3eca6d7b3ff5c15504342707774e)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t out_uv)`            | Read critical shunt voltage alert limit for each channel in `ch`.
`public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_set_warn_alert_limit`](#group__drivers__ina3221_1gab9970412a4d00b3f357689c6bccddff3)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t in_uv)`            | Set warning shunt voltage alert limit to `in_uv` for each channel in `ch`.
`public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_get_warn_alert_limit`](#group__drivers__ina3221_1ga47320955802d07298fc2f7bcd654e6b4)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t out_uv)`            | Read warning shunt voltage alert limit for each channel in `ch`.
`public int `[`ina3221_set_shunt_voltage_sum_alert_limit`](#group__drivers__ina3221_1gac5e922b4d8e98a67d103b3183fd982ed)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t in_uv)`            | Set shunt voltage sum alert limit to `in_uv`.
`public int `[`ina3221_get_shunt_voltage_sum_alert_limit`](#group__drivers__ina3221_1ga64c2cbd44cb57c2e14a1c25c65d7fbe4)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_uv)`            | Read shunt voltage sum alert limit.
`public int `[`ina3221_set_power_valid_upper_limit`](#group__drivers__ina3221_1ga12b24374066e9ee1299d3901d70822e7)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t in_mv)`            | Set bus voltage power valid upper limit to `in_mv`.
`public int `[`ina3221_get_power_valid_upper_limit`](#group__drivers__ina3221_1gad648cf27216a030f883ef964f526ed36)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_mv)`            | Read bus voltage power valid upper limit.
`public int `[`ina3221_set_power_valid_lower_limit`](#group__drivers__ina3221_1gaeb9c6a0909a4e9003e171f1437c1c503)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t in_mv)`            | Set bus voltage power valid lower limit to `in_mv`.
`public int `[`ina3221_get_power_valid_lower_limit`](#group__drivers__ina3221_1gab458d9c533ab6a4c3bd286ed4db53443)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_mv)`            | Read bus voltage power valid lower limit.
`public int `[`ina3221_read_flags`](#group__drivers__ina3221_1gab50937c56a4f49cd0ecfba0f8a1cb986)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,uint16_t * flags)`            | Read status flags.
`public int `[`ina3221_read_shunt_sum_uv`](#group__drivers__ina3221_1ga914ff90c7a13510a24ffc675f46a8af7)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_uv,uint16_t * flags)`            | Read sum of shunt voltages.
`public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_read_shunt_uv`](#group__drivers__ina3221_1gabb1d5ad2348dbc4a0725a6cafe845a84)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t out_uv,uint16_t * flags)`            | Read shunt voltages for each channel in `ch`.
`public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_read_bus_mv`](#group__drivers__ina3221_1ga43cd3a30296ece66571c633b40561349)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int16_t out_mv,uint16_t * flags)`            | Read bus voltages for each channel in `ch`.
`public void `[`ina3221_calculate_current_ua`](#group__drivers__ina3221_1ga945677c5707b911b111835df5847aa17)`(`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,const uint16_t in_mohm,const int32_t in_uv,int32_t out_ua)`            | Calculate current for each channel in `ch`.
`public void `[`ina3221_calculate_power_uw`](#group__drivers__ina3221_1gae891794e37425c7b374b1ea0c58f637c)`(`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,const int16_t in_mv,const int32_t in_ua,int32_t out_mw)`            | Calculate power from bus voltage and current values.
`struct `[`ina3221_params_t`](#structina3221__params__t) | INA3221 device parameters.
`struct `[`ina3221_t`](#structina3221__t) | INA3221 device handle struct.

## Members

#### `define `[`INA3221_NUM_CH`](#group__drivers__ina3221_1ga7c91e6f7a7561b5411172b736c52ff06) 

Number of channels.

#### `define `[`INA3221_NUM_ALERTS`](#group__drivers__ina3221_1ga894e0b909eccd767e0aa5e5afcc6a3f3) 

Number of alerts.

#### `define `[`INA3221_MODE_MASK`](#group__drivers__ina3221_1gae8e8768802c493e58400cc06aaf0ee9e) 

Device operation mode bit mask.

#### `define `[`INA3221_CONV_TIME_SADC_MASK`](#group__drivers__ina3221_1ga43f1dd873e93ee18ac5db6344feb7c6d) 

ADC shunt voltage conversion times bit mask.

#### `define `[`INA3221_CONV_TIME_BADC_MASK`](#group__drivers__ina3221_1ga8f6f6df41021dddb3bd9732a9eb8594b) 

ADC bus voltage conversion times bit mask.

#### `define `[`INA3221_NUM_SAMPLES_MASK`](#group__drivers__ina3221_1ga31d3b15cc6f4d73648b6a15847d5562c) 

Number of samples to calculate average shunt/bus voltage value bit mask.

#### `define `[`INA3221_ENABLE_CH_MASK`](#group__drivers__ina3221_1gad6e3b2d58249ab7a8ce1be5e5c358cd8) 

Enable channel bit mask.

#### `define `[`INA3221_ENABLE_SUM_CH_MASK`](#group__drivers__ina3221_1ga65bfc0aa72f7082a6d804f8ccea00143) 

Enable shunt voltage sum calculation channel bit mask.

#### `define `[`INA3221_ENABLE_LATCH_MASK`](#group__drivers__ina3221_1ga28d82f8a34eb3cdefc4063719570e9c4) 

Enable latch bit mask.

#### `define `[`INA3221_DEFCONFIG`](#group__drivers__ina3221_1ga747d50148aab9708a44b70562c3b5580) 

Default configuration register value.

#### `define `[`INA3221_RESET`](#group__drivers__ina3221_1gae0be09ad93ea756e9e28e1000ab3e752) 

Reset configuration register value.

#### `define `[`INA3221_FLAG_CRIT_ALERT_CH1`](#group__drivers__ina3221_1gab30f89af6d6fc08df1753737b046afa6) 

Critical alert channel 1 flag.

#### `define `[`INA3221_FLAG_CRIT_ALERT_CH2`](#group__drivers__ina3221_1ga7380620ac53530d537a5b8855f8aa717) 

Critical alert channel 2 flag.

#### `define `[`INA3221_FLAG_CRIT_ALERT_CH3`](#group__drivers__ina3221_1ga8ab90ba5695d317563042e1ec1227bfd) 

Critical alert channel 3 flag.

#### `define `[`INA3221_FLAG_SHUNT_SUM_ALERT`](#group__drivers__ina3221_1gacfc65dda088cf0de991097f472472087) 

Alert channel sum flag.

#### `define `[`INA3221_FLAG_WARN_ALERT_CH1`](#group__drivers__ina3221_1ga4d2b67b4e51334a97cff5b22c74bc8b2) 

Warning alert channel 1 flag.

#### `define `[`INA3221_FLAG_WARN_ALERT_CH2`](#group__drivers__ina3221_1ga9b10106ba1702f258e50339f11da6394) 

Warning alert channel 2 flag.

#### `define `[`INA3221_FLAG_WARN_ALERT_CH3`](#group__drivers__ina3221_1ga69da6bb6fc4f82a9333ffba581df1303) 

Warning alert channel 3 flag.

#### `define `[`INA3221_FLAG_POWER_VALID`](#group__drivers__ina3221_1gaec14a0c4b5f0bb083b394a989a0d4969) 

Power valid flag.

#### `define `[`INA3221_FLAG_TIMING_CONTROL`](#group__drivers__ina3221_1ga6bb987141e59be524132898ea6d28203) 

Timing Control flag.

#### `define `[`INA3221_FLAG_CONV_READY`](#group__drivers__ina3221_1gad89684d20966116965f0c4cb867bdcba) 

Conversion ready flag.

#### `define `[`INA3221_FLAGS_MASK`](#group__drivers__ina3221_1ga5c279f02477b5c89ccaf3867f647a83d) 

Flags bit mask.

#### `define `[`INA3221_TRIGGER_SHUNT`](#group__drivers__ina3221_1ga4aa0d12ff1a3774a8b288c496eae4521) 

Set operation mode to INA3221_MODE_TRIGGER_SHUNT_ONLY to trigger shunt voltage measurement.

#### Parameters
* `dev` Device handle

#### `define `[`INA3221_TRIGGER_BUS`](#group__drivers__ina3221_1gaabb3c47b708c3e57710732a27f1d2337) 

Set operation mode to INA3221_MODE_TRIGGER_BUS_ONLY to trigger bus voltage measurement.

#### Parameters
* `dev` Device handle

#### `define `[`INA3221_TRIGGER_SHUNT_AND_BUS`](#group__drivers__ina3221_1ga19933d2c99e650f3987bebdd28525c1e) 

Set operation mode to INA3221_MODE_TRIGGER_SHUNT_BUS to trigger shunt and bus voltage measurement.

#### Parameters
* `dev` Device handle

#### `enum `[`ina3221_dev_addr`](#group__drivers__ina3221_1ga5300014460e402047043e1c9742176a3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_ADDR_00            | A0 connected to GND.
INA3221_ADDR_01            | A0 connected to VS
INA3221_ADDR_10            | A0 connected to SDA.
INA3221_ADDR_11            | A0 connected to SCL.

I2C device addresses.

#### `enum `[`ina3221_channel`](#group__drivers__ina3221_1gabb73f511d6e0f96788ade531d27783b8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_CH1            | Channel 1.
INA3221_CH2            | Channel 2.
INA3221_CH3            | Channel 3.

Channel flags.

#### `enum `[`ina3221_alert`](#group__drivers__ina3221_1ga5b1507e7c214403e88199da3367a0012) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_ALERT_WRN            | Warning alert.
INA3221_ALERT_CRT            | Critical alert.
INA3221_ALERT_TC            | Timing control.
INA3221_ALERT_PV            | Power valid alert.

Alert indices.

#### `enum `[`ina3221_mode`](#group__drivers__ina3221_1ga2573d59b5435afc924323dc544ef45c6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_MODE_POWER_DOWN            | Sleep mode.
INA3221_MODE_TRIGGER_SHUNT_ONLY            | Trigger shunt voltage measurement only.
INA3221_MODE_TRIGGER_BUS_ONLY            | Trigger bus voltage measurement only.
INA3221_MODE_TRIGGER_SHUNT_BUS            | Trigger shunt and bus voltage measurement.
INA3221_MODE_POWER_DOWN_            | Also power down (see datasheet)
INA3221_MODE_CONTINUOUS_SHUNT_ONLY            | Continuous shunt voltage measurement only.
INA3221_MODE_CONTINUOUS_BUS_ONLY            | Continuous bus voltage measurement only.
INA3221_MODE_CONTINUOUS_SHUNT_BUS            | Continuous shunt and bus voltage measurement.

Device operation modes.

#### `enum `[`ina3221_conv_time_shunt_adc`](#group__drivers__ina3221_1ga2bd7d05ad45db5f14136f088fbc952ff) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_CONV_TIME_SADC_140US            | 140 us
INA3221_CONV_TIME_SADC_204US            | 204 us
INA3221_CONV_TIME_SADC_332US            | 332 us
INA3221_CONV_TIME_SADC_588US            | 588 us
INA3221_CONV_TIME_SADC_1100US            | 1100 us
INA3221_CONV_TIME_SADC_2116US            | 2116 us
INA3221_CONV_TIME_SADC_4156US            | 4156 us
INA3221_CONV_TIME_SADC_8244US            | 8244 us

ADC shunt voltage conversion times.

#### `enum `[`ina3221_conv_time_bus_adc`](#group__drivers__ina3221_1ga69a9ab55dcc888032662a0eeb6a1f831) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_CONV_TIME_BADC_140US            | 140 us
INA3221_CONV_TIME_BADC_204US            | 204 us
INA3221_CONV_TIME_BADC_332US            | 332 us
INA3221_CONV_TIME_BADC_588US            | 588 us
INA3221_CONV_TIME_BADC_1100US            | 1100 us
INA3221_CONV_TIME_BADC_2116US            | 2116 us
INA3221_CONV_TIME_BADC_4156US            | 4156 us
INA3221_CONV_TIME_BADC_8244US            | 8244 us

ADC bus voltage conversion times.

#### `enum `[`ina3221_num_samples`](#group__drivers__ina3221_1ga2762f6a98b0e9e9ab41df8efa0182465) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_NUM_SAMPLES_1            | 1
INA3221_NUM_SAMPLES_4            | 4
INA3221_NUM_SAMPLES_16            | 16
INA3221_NUM_SAMPLES_64            | 64
INA3221_NUM_SAMPLES_128            | 128
INA3221_NUM_SAMPLES_256            | 256
INA3221_NUM_SAMPLES_512            | 512
INA3221_NUM_SAMPLES_1024            | 1024

Number of samples to calculate average shunt/bus voltage value.

#### `enum `[`ina3221_enable_ch`](#group__drivers__ina3221_1ga5c8ef4f38c4e82cccc44f9a10ce960fa) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_ENABLE_CH1            | Enable channel 1.
INA3221_ENABLE_CH2            | Enable channel 2.
INA3221_ENABLE_CH3            | Enable channel 3.

Enable channel flags.

#### `enum `[`ina3221_enable_sum_ch`](#group__drivers__ina3221_1gaa7b8848fbc8c35bb127956bea38560c1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_ENABLE_SUM_CH1            | Enable sum channel 1.
INA3221_ENABLE_SUM_CH2            | Enable sum channel 2.
INA3221_ENABLE_SUM_CH3            | Enable sum channel 3.

Enable shunt voltage sum calculation channel flags.

#### `enum `[`ina3221_enable_latch`](#group__drivers__ina3221_1gac40d8e84ae276e75f56616a498a07bbe) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INA3221_ENABLE_WARN_LATCH            | Enable warning alert latch.
INA3221_ENABLE_CRIT_LATCH            | Enable critical alert latch.

Enable latch flags.

#### `public int `[`ina3221_reset`](#group__drivers__ina3221_1gad6f8d886c326d16b9ac2805ccc0612b8)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)` 

Reset device, i.e.

apply default configuration

#### Parameters
* `dev` Device handle

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns
-ENODEV, if device could not be reset 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_init`](#group__drivers__ina3221_1gab165957bacc1d0d48701e72d080914b6)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,const `[`ina3221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__params__t)` * params)` 

Initialize device.

#### Parameters
* `dev` Device handle 

* `params` Device parameters

#### Returns
0, on success 

#### Returns
-EFAULT, if NULL pointer was passed 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns
-ENXIO, if manufacturer ID or DIE ID does not match 

#### Returns
-ENODEV, if reset failed 

#### Returns
-EINVAL, if configuration could not be applied 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_enable_alert`](#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga5d89d6ea26f8e51f7a7058a36427d307)` alert,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)` 

Enable alert and set callback and argument for alert `alert`.

#### Parameters
* `dev` Device handle 

* `alert` Alert index 

* `cb` Alert callback 

* `arg` Alert callback argument

#### Returns
0, on success 

#### Returns
-ERANGE, if `alert` was out of bounds 

#### Returns
-ENUTSUP, if alert pin was initialized with GPIO_UNDEF

#### `public inline static int `[`ina3221_enable_warning_alert`](#group__drivers__ina3221_1ga44be5aa90646da66b20c496192e4ad72)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)` 

Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable warning alert.

#### Parameters
* `dev` Device handle 

* `cb` Alert callback 

* `arg` Alert callback argument

#### Returns

**See also**: [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef)

#### `public inline static int `[`ina3221_enable_critical_alert`](#group__drivers__ina3221_1gac1edaea8a7d885b10c60b81927ababc4)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)` 

Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable critical alert.

#### Parameters
* `dev` Device handle 

* `cb` Alert callback 

* `arg` Alert callback argument

#### Returns

**See also**: [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef)

#### `public inline static int `[`ina3221_enable_timing_control_alert`](#group__drivers__ina3221_1gadc5f14bb2cd93d3918f7965f10d18b57)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)` 

Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable timing control alert.

#### Parameters
* `dev` Device handle 

* `cb` Alert callback 

* `arg` Alert callback argument

#### Returns

**See also**: [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef)

#### `public inline static int `[`ina3221_enable_power_valid_alert`](#group__drivers__ina3221_1gab1a94f6e6474b0d3855c66321abe839c)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` cb,void * arg)` 

Wrapper around [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef), to enable power valid alert.

#### Parameters
* `dev` Device handle 

* `cb` Alert callback 

* `arg` Alert callback argument

#### Returns

**See also**: [ina3221_enable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f1dd62a70629d3776fb0da739283eef)

#### `public int `[`ina3221_disable_alert`](#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_alert_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga5d89d6ea26f8e51f7a7058a36427d307)` alert)` 

Disable alert `alert`.

#### Parameters
* `dev` Device handle 

* `alert` Alert index

#### Returns
0, on success 

#### Returns
-ERANGE, if `alert` was out of bounds 

#### Returns
-ENUTSUP, if alert pin was initialized with GPIO_UNDEF

#### `public inline static int `[`ina3221_disable_warning_alert`](#group__drivers__ina3221_1gab90daf80aa3f08ff58b4e19166e7083a)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)` 

Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable warning alert.

#### Parameters
* `dev` Device handle

#### Returns

**See also**: [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409)

#### `public inline static int `[`ina3221_disable_critical_alert`](#group__drivers__ina3221_1gaa7f1c6988e6818c3567f81ee29d7bb42)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)` 

Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable critical alert.

#### Parameters
* `dev` Device handle

#### Returns

**See also**: [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409)

#### `public inline static int `[`ina3221_disable_timing_control_alert`](#group__drivers__ina3221_1gad573ebf518da7f4218135ad70b808d21)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)` 

Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable timing control alert.

#### Parameters
* `dev` Device handle

#### Returns

**See also**: [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409)

#### `public inline static int `[`ina3221_disable_power_valid_alert`](#group__drivers__ina3221_1ga922d29988fa4c6cbb98d48d68c4e44ef)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev)` 

Wrapper around [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409), to disable power valid alert.

#### Parameters
* `dev` Device handle

#### Returns

**See also**: [ina3221_disable_alert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga963ddcb74dfa0a1b366b012d2262c409)

#### `public inline static `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_config_get_enabled_channels`](#group__drivers__ina3221_1gae9f83d3860292f23f718dfb1bcb0af57)`(uint16_t cfg)` 

Get enabled measurement channels from configuration value.

#### Parameters
* `cfg` Configuration value

#### Returns
Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

#### `public inline static void `[`ina3221_config_set_enabled_channels`](#group__drivers__ina3221_1gada0fc1b8827b572fcfabae434fe15baa)`(uint16_t * cfg,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch)` 

Enable measurement channels in configuration value.

#### Parameters
* `cfg` Configuration value 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

#### `public inline static `[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` `[`ina3221_config_get_num_samples`](#group__drivers__ina3221_1ga71ce7c5b584a665f01494a53f517a211)`(uint16_t cfg)` 

Get number of samples from configuration value.

#### Parameters
* `cfg` Configuration value

#### Returns
Number of samples

#### `public inline static void `[`ina3221_config_set_num_samples`](#group__drivers__ina3221_1gafb43f040c9381061d4b33d208f77f1fc)`(uint16_t * cfg,`[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` ns)` 

Set number of samples in configuration value.

#### Parameters
* `cfg` Configuration value 

* `ns` Number of samples

#### `public inline static `[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` `[`ina3221_config_get_conv_time_bus`](#group__drivers__ina3221_1ga79b988fec8a2006b3cdfd45936169e9d)`(uint16_t cfg)` 

Get bus voltage conversion time from configuration value.

#### Parameters
* `cfg` Configuration value

#### Returns
Bus conversion time

#### `public inline static void `[`ina3221_config_set_conv_time_bus`](#group__drivers__ina3221_1ga8573ec4f8061020fd4ae915a4539dc7e)`(uint16_t * cfg,`[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` bus)` 

Set bus voltage conversion time in configuration value.

#### Parameters
* `cfg` Configuration value 

* `bus` Bus conversion time

#### `public inline static `[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` `[`ina3221_config_get_conv_time_shunt`](#group__drivers__ina3221_1ga27836e55e45277bcc12c36982e22aa46)`(uint16_t cfg)` 

Get shunt voltage conversion time from configuration value.

#### Parameters
* `cfg` Configuration value

#### Returns
Shunt conversion time

#### `public inline static void `[`ina3221_config_set_conv_time_shunt`](#group__drivers__ina3221_1ga7034cc411ea18ad8b456530bf9850e7a)`(uint16_t * cfg,`[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` shunt)` 

Set shunt voltage conversion time in configuration value.

#### Parameters
* `cfg` Configuration value 

* `shunt` Shunt conversion time

#### `public inline static `[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` `[`ina3221_config_get_mode`](#group__drivers__ina3221_1ga5976815b308d0ddd8bfef81eb693e371)`(uint16_t cfg)` 

Get operation mode from configuration value.

#### Parameters
* `cfg` Configuration value

#### Returns
Operation mode

#### `public inline static void `[`ina3221_config_set_mode`](#group__drivers__ina3221_1gafae0b41ace0eee9d7521fd92a6dcdf9d)`(uint16_t * cfg,`[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` mode)` 

Set operation mode in configuration value.

#### Parameters
* `cfg` Configuration value 

* `mode` Operation mode

#### `public int `[`ina3221_set_config`](#group__drivers__ina3221_1ga079d001f645992840decdd1d8caaf8a2)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,uint16_t cfg)` 

Write configuration register value to configuration register.

#### Parameters
* `dev` Device handle 

* `cfg` Configuration register value

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_get_config`](#group__drivers__ina3221_1gac765126bb88ef38a7774c13d2fd1fe1c)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,uint16_t * cfg)` 

Read currently saved configuration register value.

#### Parameters
* `dev` Device handle 

* `cfg` Pointer to configuration register output value

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`ina3221_set_enable_channel`](#group__drivers__ina3221_1ga56e0c8e49c5734a127af581e0b1e064e)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch)` 

Enable channels.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public inline static void `[`ina3221_get_enable_channel`](#group__drivers__ina3221_1ga72a2dc0233c106772aa125701f1c1b11)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` * ch)` 

Read which channels are currently enabled.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

#### `public int `[`ina3221_set_num_samples`](#group__drivers__ina3221_1ga6d73f48b58b359f1e475cd50c15b5d4f)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` ns)` 

Update number of samples and write to configuration register.

#### Parameters
* `dev` Device handle 

* `ns` Number of samples

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public inline static void `[`ina3221_get_num_samples`](#group__drivers__ina3221_1ga0798a092d4a28d8af7b74f121ad932e8)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_num_samples_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaa144e8e625494e561036bfb2d301118f)` * ns)` 

Read currently applied number of samples.

#### Parameters
* `dev` Device handle 

* `ns` Pointer to number of samples output variable

#### `public int `[`ina3221_set_conv_time_bus_adc`](#group__drivers__ina3221_1gae441b96b2160af23e74b882a4cba091c)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` ctb)` 

Update conversion time of bus voltage ADC and write to configuration register.

#### Parameters
* `dev` Device handle 

* `ctb` Bus voltage conversion time

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public inline static void `[`ina3221_get_conv_time_bus_adc`](#group__drivers__ina3221_1ga434351e789ac1134529f85c3a6e9c874)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_bus_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gaaff4db0cb01f229b8617aad08067d195)` * ctb)` 

Read currently applied bus voltage ADC conversion time.

#### Parameters
* `dev` Device handle 

* `ctb` Pointer to bus voltage ADC conversion time output variable

#### `public int `[`ina3221_set_conv_time_shunt_adc`](#group__drivers__ina3221_1gadd3d04f7c46c70257e0bdceda1391b90)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` cts)` 

Update conversion time of shunt voltage ADC and write to configuration register.

#### Parameters
* `dev` Device handle 

* `cts` Shunt voltage conversion time value

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public inline static void `[`ina3221_get_conv_time_shunt_adc`](#group__drivers__ina3221_1gaee1a3467cd1600eac2cd86b16ccddb9c)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_conv_time_shunt_adc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga76738c6bcf8b4227d97819acbebb7ff1)` * cts)` 

Read currently applied shunt voltage ADC conversion time.

#### Parameters
* `dev` Device handle 

* `cts` Pointer to shunt voltage ADC conversion time output variable

#### `public int `[`ina3221_set_mode`](#group__drivers__ina3221_1ga3b6773edefd3e2909321241f1fa0dbcb)`(`[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` mode)` 

Update device operation mode.

#### Parameters
* `dev` Device handle 

* `mode` Operation mode value

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public inline static void `[`ina3221_get_mode`](#group__drivers__ina3221_1gac4488a512adfabb40dedbe3589604b3b)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga69aa699f46a893877f36cf5a116d838b)` * mode)` 

Read currently applied device operation mode.

#### Parameters
* `dev` Device handle 

* `mode` Pointer to device operation mode output variable

#### `public int `[`ina3221_set_enable_sum_channel`](#group__drivers__ina3221_1gab727576964b195632ec26cc3e8e93679)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch)` 

Enable channels for shunt voltage sum calculation.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

The channel must also have been enabled with [ina3221_set_enable_channel](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga56e0c8e49c5734a127af581e0b1e064e)

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_get_enable_sum_channel`](#group__drivers__ina3221_1ga465bb5794c5af5d5e90addef9e75f9eb)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` * ch)` 

Read enabled channels for shunt voltage sum calculation.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`ina3221_set_latch`](#group__drivers__ina3221_1ga86d45ab5a09ff6683c6af557c5060f80)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,bool warn,bool crit)` 

Enable latches for critical/warning alert pins.

#### Parameters
* `dev` Device handle 

* `warn` Enable warning alert latch 

* `crit` Enable critical alert latch

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_get_latch`](#group__drivers__ina3221_1gaaba508626fc1e48bed14f5b2107e4204)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,bool * warn,bool * crit)` 

Read enabled latches for critical/warning alert pins.

#### Parameters
* `dev` Device handle 

* `warn` Will be true if warning alert is latched 

* `crit` Will be true if critical alert is latched

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_set_crit_alert_limit`](#group__drivers__ina3221_1ga06db2d182f0873bd116fe9c11dfe62be)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t in_uv)` 

Set critical shunt voltage alert limit to `in_uv` for each channel in `ch`.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

* `in_uv` Critical shunt voltage limit in uV

#### Returns
Flags of which channel´s limits could be updated

#### `public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_get_crit_alert_limit`](#group__drivers__ina3221_1ga179a3eca6d7b3ff5c15504342707774e)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t out_uv)` 

Read critical shunt voltage alert limit for each channel in `ch`.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

* `out_uv` Output array of shunt voltage alert limits in uV

#### Returns
Flags of which channel´s values were written to `out_uv`

#### `public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_set_warn_alert_limit`](#group__drivers__ina3221_1gab9970412a4d00b3f357689c6bccddff3)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t in_uv)` 

Set warning shunt voltage alert limit to `in_uv` for each channel in `ch`.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

* `in_uv` Warning shunt voltage limit in uV

#### Returns
Flags of which channel´s limits could be updated

#### `public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_get_warn_alert_limit`](#group__drivers__ina3221_1ga47320955802d07298fc2f7bcd654e6b4)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,int32_t out_uv)` 

Read warning shunt voltage alert limit for each channel in `ch`.

#### Parameters
* `dev` Device handle 

* `ch` Channel flags [ina3221_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gadb78a8f4707ba9bb9eb0f1b97d1f7329)

* `out_uv` Output array of shunt voltage alert limits in uV

#### Returns
Flags of which channel´s values could be read

#### `public int `[`ina3221_set_shunt_voltage_sum_alert_limit`](#group__drivers__ina3221_1gac5e922b4d8e98a67d103b3183fd982ed)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t in_uv)` 

Set shunt voltage sum alert limit to `in_uv`.

#### Parameters
* `dev` Device handle 

* `in_uv` Shunt voltage sum limit in uV

#### Returns
0, on success 

#### Returns
-ERANGE, if `in_uv` was not in [INA3221_MIN_SHUNT_SUM_UV; INA3221_MAX_SHUNT_SUM_UV] 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_get_shunt_voltage_sum_alert_limit`](#group__drivers__ina3221_1ga64c2cbd44cb57c2e14a1c25c65d7fbe4)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_uv)` 

Read shunt voltage sum alert limit.

#### Parameters
* `dev` Device handle 

* `out_uv` Pointer to sum voltage sum alert limit output variable

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`ina3221_set_power_valid_upper_limit`](#group__drivers__ina3221_1ga12b24374066e9ee1299d3901d70822e7)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t in_mv)` 

Set bus voltage power valid upper limit to `in_mv`.

#### Parameters
* `dev` Device handle 

* `in_mv` Bus voltage power valid upper limit in mV

#### Returns
0, on success 

#### Returns
-ERANGE, if `in_mv` was not in [INA3221_MIN_BUS_MV; INA3221_MAX_BUS_MV] 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_get_power_valid_upper_limit`](#group__drivers__ina3221_1gad648cf27216a030f883ef964f526ed36)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_mv)` 

Read bus voltage power valid upper limit.

#### Parameters
* `dev` Device handle 

* `out_mv` Pointer to bus voltage power valid upper limit output variable

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`ina3221_set_power_valid_lower_limit`](#group__drivers__ina3221_1gaeb9c6a0909a4e9003e171f1437c1c503)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t in_mv)` 

Set bus voltage power valid lower limit to `in_mv`.

#### Parameters
* `dev` Device handle 

* `in_mv` Bus voltage power valid lower limit in mV

#### Returns
0, on success 

#### Returns
-ERANGE, if `in_mv` was not in [INA3221_MIN_BUS_MV; INA3221_MAX_BUS_MV] 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_write_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)

#### `public int `[`ina3221_get_power_valid_lower_limit`](#group__drivers__ina3221_1gab458d9c533ab6a4c3bd286ed4db53443)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_mv)` 

Read bus voltage power valid lower limit.

#### Parameters
* `dev` Device handle 

* `out_mv` Pointer to bus voltage power valid lower limit output variable

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`ina3221_read_flags`](#group__drivers__ina3221_1gab50937c56a4f49cd0ecfba0f8a1cb986)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,uint16_t * flags)` 

Read status flags.

#### Parameters
* `dev` Device handle 

* `flags` Pointer to flags output variable

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public int `[`ina3221_read_shunt_sum_uv`](#group__drivers__ina3221_1ga914ff90c7a13510a24ffc675f46a8af7)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t * out_uv,uint16_t * flags)` 

Read sum of shunt voltages.

#### Parameters
* `dev` Device handle 

* `out_uv` Pointer to shunt voltage sum output variable 

* `flags` Pointer to flags output variable, may be NULL

#### Returns
0, on success 

#### Returns
-EIO, if I2C bus acquirement failed 

#### Returns

**See also**: [i2c_read_regs](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)

#### `public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_read_shunt_uv`](#group__drivers__ina3221_1gabb1d5ad2348dbc4a0725a6cafe845a84)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int32_t out_uv,uint16_t * flags)` 

Read shunt voltages for each channel in `ch`.

#### Parameters
* `dev` Device handle 

* `out_uv` Array of output shunt voltage values in uV 

* `flags` Pointer to flags output variable, may be NULL

#### Returns
Flags of which channel´s shunt voltage drops could be read

#### `public `[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` `[`ina3221_read_bus_mv`](#group__drivers__ina3221_1ga43cd3a30296ece66571c633b40561349)`(const `[`ina3221_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__t)` * dev,int16_t out_mv,uint16_t * flags)` 

Read bus voltages for each channel in `ch`.

#### Parameters
* `dev` Device handle 

* `out_mv` Array of output bus voltage values in mV 

* `flags` Pointer to flags output variable, may be NULL

#### Returns
Flags of which channel´s bus voltage values could be read

#### `public void `[`ina3221_calculate_current_ua`](#group__drivers__ina3221_1ga945677c5707b911b111835df5847aa17)`(`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,const uint16_t in_mohm,const int32_t in_uv,int32_t out_ua)` 

Calculate current for each channel in `ch`.

#### Parameters
* `ch` Flags of which values in `in_mohm` and `in_uv` are valid 

* `in_mohm` Array of input shunt resistors in mOhm 

* `in_uv` Array of input shunt voltage values in uV 

* `out_ua` Array of output current values in uA

#### `public void `[`ina3221_calculate_power_uw`](#group__drivers__ina3221_1gae891794e37425c7b374b1ea0c58f637c)`(`[`ina3221_ch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1ga1f145eace1ea9078204fb19a7deb8ddb)` ch,const int16_t in_mv,const int32_t in_ua,int32_t out_mw)` 

Calculate power from bus voltage and current values.

#### Parameters
* `ch` Flags of which values in `in_mv` and `in_ua` are valid 

* `in_mv` Array of input bus voltage values in mV 

* `in_ua` Array of input current values in uA 

* `out_mw` Array of output power values in mW

# struct `ina3221_params_t` 

INA3221 device parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structina3221__params__t_1aa1393b70eb347e35ba6e6f82a2395edf) | I2C bus.
`public uint8_t `[`addr`](#structina3221__params__t_1aa7a147c0c37e99b18db7deef45817a61) | I2C address.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_warn`](#structina3221__params__t_1a1fa36941b19561935f6ace155088bea5) | Warning alert pin, becomes configured as input.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_crit`](#structina3221__params__t_1a218209de7de66a77ac5b5540a1eb520a) | Critical alert pin, becomes configured as input.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_tc`](#structina3221__params__t_1ae5d92cdbae951f5c77bbc8d968881ed7) | Timing control alert pin, becomes configured as input.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_pv`](#structina3221__params__t_1ab07e9e45065da5583aa9e8d241bbd7e2) | Power valid alert pin, becomes configured as input.
`public struct ina3221_params_t::@181::@182 `[`pins`](#structina3221__params__t_1aa6147c5a30ac244f77e1dd12d37e4388) | Struct of alert pins.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alert_pins`](#structina3221__params__t_1a0f1c96b1361aa6498ff0a9ed42dd7308) | Array to access alert pins via an index.
`public struct ina3221_params_t::@181::@183 `[`apins`](#structina3221__params__t_1a2c941504d7f0aaad618bfa7aa166e39e) | Struct of array of alert pins.
`public union ina3221_params_t::@181 `[`upins`](#structina3221__params__t_1a3d20e2cab04a0f62f054fe7d631673ff) | Union of alert pins as array and as single members.
`public uint8_t `[`gpio_config`](#structina3221__params__t_1a496f366a7fe62bcccd90d8374aa92124) | Configure pull up resistors for gpio pins.
`public uint16_t `[`config`](#structina3221__params__t_1acc4edb658b56c2cb38e8259b88b2857b) | Configuration.
`public uint16_t `[`rshunt_mohm`](#structina3221__params__t_1a38e01b2a06034079c1d60d0eebf7da01) | Shunt resistances in mOhm for each channel.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`i2c`](#structina3221__params__t_1aa1393b70eb347e35ba6e6f82a2395edf) 

I2C bus.

#### `public uint8_t `[`addr`](#structina3221__params__t_1aa7a147c0c37e99b18db7deef45817a61) 

I2C address.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_warn`](#structina3221__params__t_1a1fa36941b19561935f6ace155088bea5) 

Warning alert pin, becomes configured as input.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_crit`](#structina3221__params__t_1a218209de7de66a77ac5b5540a1eb520a) 

Critical alert pin, becomes configured as input.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_tc`](#structina3221__params__t_1ae5d92cdbae951f5c77bbc8d968881ed7) 

Timing control alert pin, becomes configured as input.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`pin_pv`](#structina3221__params__t_1ab07e9e45065da5583aa9e8d241bbd7e2) 

Power valid alert pin, becomes configured as input.

#### `public struct ina3221_params_t::@181::@182 `[`pins`](#structina3221__params__t_1aa6147c5a30ac244f77e1dd12d37e4388) 

Struct of alert pins.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`alert_pins`](#structina3221__params__t_1a0f1c96b1361aa6498ff0a9ed42dd7308) 

Array to access alert pins via an index.

#### `public struct ina3221_params_t::@181::@183 `[`apins`](#structina3221__params__t_1a2c941504d7f0aaad618bfa7aa166e39e) 

Struct of array of alert pins.

#### `public union ina3221_params_t::@181 `[`upins`](#structina3221__params__t_1a3d20e2cab04a0f62f054fe7d631673ff) 

Union of alert pins as array and as single members.

#### `public uint8_t `[`gpio_config`](#structina3221__params__t_1a496f366a7fe62bcccd90d8374aa92124) 

Configure pull up resistors for gpio pins.

#### `public uint16_t `[`config`](#structina3221__params__t_1acc4edb658b56c2cb38e8259b88b2857b) 

Configuration.

#### `public uint16_t `[`rshunt_mohm`](#structina3221__params__t_1a38e01b2a06034079c1d60d0eebf7da01) 

Shunt resistances in mOhm for each channel.

# struct `ina3221_t` 

INA3221 device handle struct.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ina3221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__params__t)` `[`params`](#structina3221__t_1a41a85a4a7acb1a558125681898c1b732) | Device parameters.
`public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`warn_cb`](#structina3221__t_1a8e63912fb67a550a89439cbc79de4bed) | Warning alert callback: executed when WRN is pulled low.
`public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`crit_cb`](#structina3221__t_1abe24569c8b618c38018a84db5b8f9aaf) | Critical alert callback: executed when CRT is pulled low.
`public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`tc_cb`](#structina3221__t_1ad97883673d5e77859ffc92cb055874ac) | Timing control alert callback: executed when TC is pulled low.
`public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`pv_cb`](#structina3221__t_1a7603f624511bef47609f00701af2db18) | Power Valid alert callback: executed when PV is pulled low.
`public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`alert_callbacks`](#structina3221__t_1ad66e82231bbd21298ef8b4881a585b17) | Array to access alert callbacks via an index.
`public union ina3221_t::@184 `[`@185`](#structina3221__t_1a8e7819584a93a8cffbeaab5610699b68) | 
`public void * `[`arg_warn_cb`](#structina3221__t_1ab2638792124666b60f3a2ef665230a6c) | Argument for Warning alert callback.
`public void * `[`arg_crit_cb`](#structina3221__t_1a1dda7e322446837d368f1965d23740d5) | Argument for Critical alert callback.
`public void * `[`arg_tc_cb`](#structina3221__t_1adc7352a7c2578f0bb6bf77277af2687d) | Argument for Timing control alert callback.
`public void * `[`arg_pv_cb`](#structina3221__t_1ad47fb7547774b7d7ae21c25039288529) | Argument for Power Valid alert callback.
`public void * `[`alert_callback_arguments`](#structina3221__t_1a68ff7cf4402cd13c62263b8349d89f1b) | Array to access alert callback arguments via an index.
`public union ina3221_t::@186 `[`@187`](#structina3221__t_1aec8ade48594d4a6cfc3f2c51259d215e) | 

## Members

#### `public `[`ina3221_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ina3221.md#structina3221__params__t)` `[`params`](#structina3221__t_1a41a85a4a7acb1a558125681898c1b732) 

Device parameters.

#### `public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`warn_cb`](#structina3221__t_1a8e63912fb67a550a89439cbc79de4bed) 

Warning alert callback: executed when WRN is pulled low.

#### `public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`crit_cb`](#structina3221__t_1abe24569c8b618c38018a84db5b8f9aaf) 

Critical alert callback: executed when CRT is pulled low.

#### `public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`tc_cb`](#structina3221__t_1ad97883673d5e77859ffc92cb055874ac) 

Timing control alert callback: executed when TC is pulled low.

#### `public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`pv_cb`](#structina3221__t_1a7603f624511bef47609f00701af2db18) 

Power Valid alert callback: executed when PV is pulled low.

#### `public `[`ina3221_alert_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ina3221_1gac1edd2e9f9f845a7ec3b2a64601ad33b)` `[`alert_callbacks`](#structina3221__t_1ad66e82231bbd21298ef8b4881a585b17) 

Array to access alert callbacks via an index.

#### `public union ina3221_t::@184 `[`@185`](#structina3221__t_1a8e7819584a93a8cffbeaab5610699b68) 

#### `public void * `[`arg_warn_cb`](#structina3221__t_1ab2638792124666b60f3a2ef665230a6c) 

Argument for Warning alert callback.

#### `public void * `[`arg_crit_cb`](#structina3221__t_1a1dda7e322446837d368f1965d23740d5) 

Argument for Critical alert callback.

#### `public void * `[`arg_tc_cb`](#structina3221__t_1adc7352a7c2578f0bb6bf77277af2687d) 

Argument for Timing control alert callback.

#### `public void * `[`arg_pv_cb`](#structina3221__t_1ad47fb7547774b7d7ae21c25039288529) 

Argument for Power Valid alert callback.

#### `public void * `[`alert_callback_arguments`](#structina3221__t_1a68ff7cf4402cd13c62263b8349d89f1b) 

Array to access alert callback arguments via an index.

#### `public union ina3221_t::@186 `[`@187`](#structina3221__t_1aec8ade48594d4a6cfc3f2c51259d215e) 

