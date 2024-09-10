---
title: api-drivers_ieee802154_hal.md
description: api-drivers_ieee802154_hal.md
---
# group `drivers_ieee802154_hal` 

This is a Hardware Abstraction Layer for IEEE802.15.4 compatible radios.

**This feature is experimental!**
 This API is experimental and in an early state - expect changes!

José I. Alamos [jose.alamos@haw-hamburg.de](mailto:jose.alamos@haw-hamburg.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`IEEE802154_RF_CAPS_PHY_MASK`](#group__drivers__ieee802154__hal_1ga8e5233174880b78bf757a78a78f843e2)            | Bit-mask for PHY modes capabilities.
`enum `[`ieee802154_rf_caps_t`](#group__drivers__ieee802154__hal_1ga512d8adef7d00aa02cbac68a17d71bd6)            | IEEE802.15.4 Radio capabilities.
`enum `[`ieee802154_tx_status_t`](#group__drivers__ieee802154__hal_1ga898bab69c901640ee26477caded68446)            | Transmission status.
`enum `[`ieee802154_trx_ev_t`](#group__drivers__ieee802154__hal_1ga6d79cb0254fffa7d10d27a3a5b9836b5)            | IEEE802.15.4 Radio HAL events.
`enum `[`ieee802154_src_match_t`](#group__drivers__ieee802154__hal_1ga4f8652a8176d8f1832b18a2e3496f60e)            | Source Address Match commands.
`enum `[`ieee802154_af_cmd_t`](#group__drivers__ieee802154__hal_1ga924787440d2a27e27f4a77e645d87860)            | Address filter command.
`enum `[`ieee802154_filter_mode_t`](#group__drivers__ieee802154__hal_1gabee47f608ac702caf9160aba3bb686d3)            | Frame Filter mode.
`enum `[`ieee802154_cca_mode_t`](#group__drivers__ieee802154__hal_1ga23dd5fe27f31b7565b0e27d6cb97567e)            | IEEE802.15.4 CCA modes.
`enum `[`ieee802154_hal_op_t`](#group__drivers__ieee802154__hal_1ga7707dca87cf13d839bcdce67f392b13d)            | IEEE 802.15.4 radio operations.
`public inline static int `[`ieee802154_radio_write`](#group__drivers__ieee802154__hal_1ga99578966f98f74192d117002fc300cae)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * psdu)`            | Shortcut to [ieee802154_radio_ops::write](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5f3b71f1366bc741e455db968db06ea8).
`public inline static int `[`ieee802154_radio_request_transmit`](#group__drivers__ieee802154__hal_1ga827a1a8ecad16114147f4578962a9133)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Transmit a preloaded frame.
`public inline static int `[`ieee802154_radio_confirm_transmit`](#group__drivers__ieee802154__hal_1ga39dad839404d7f82a7c87e2ecd2e39d3)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_tx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__tx__info__t)` * info)`            | Confirmation function for [ieee802154_radio_request_transmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga827a1a8ecad16114147f4578962a9133) This function must be called to finish the transmission procedure and get the transmission status.
`public inline static int `[`ieee802154_radio_len`](#group__drivers__ieee802154__hal_1ga8cd677612e97334162a4a4145ae0de52)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Shortcut to [ieee802154_radio_ops::len](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a7befa94d70f476b83ed10f15945ccbcb).
`public inline static int `[`ieee802154_radio_read`](#group__drivers__ieee802154__hal_1ga22f955336ceeae87cb376be82a2f3da9)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,void * buf,size_t size,`[`ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__rx__info__t)` * info)`            | Shortcut to [ieee802154_radio_ops::read](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a99394547c65c7872bff808bba1d69c46).
`public inline static int `[`ieee802154_radio_set_cca_threshold`](#group__drivers__ieee802154__hal_1ga9cfae95bf22e74520309491ef939563e)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,int8_t threshold)`            | Shortcut to [ieee802154_radio_ops::set_cca_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a2883b1827e288e3b90113b1f7cc2049c).
`public inline static int `[`ieee802154_radio_set_cca_mode`](#group__drivers__ieee802154__hal_1ga4f678669a049ebac6f1f59eedd2b253a)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_cca_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga23dd5fe27f31b7565b0e27d6cb97567e)` mode)`            | Shortcut to [ieee802154_radio_ops::set_cca_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a0cb1aa6cf71d5bf80ae60a2c3eaa6be4).
`public inline static int `[`ieee802154_radio_config_phy`](#group__drivers__ieee802154__hal_1ga242306e17a92baae899013f436cf5c84)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,const `[`ieee802154_phy_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__phy__conf__t)` * conf)`            | Shortcut to [ieee802154_radio_ops::config_phy](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a56f9ed549fc0b30e82e52b63fb6083f6).
`public inline static int `[`ieee802154_radio_config_src_address_match`](#group__drivers__ieee802154__hal_1ga20ffc31012a71b8a351bb53f8b4d4631)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_src_match_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4f8652a8176d8f1832b18a2e3496f60e)` cmd,const void * value)`            | Shortcut to [ieee802154_radio_ops::config_src_addr_match](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a4132e57a071ea34a2d10097969074aba).
`public inline static int `[`ieee802154_radio_off`](#group__drivers__ieee802154__hal_1ga532db88525c5313670b9858b0611b0da)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Shortcut to [ieee802154_radio_ops::off](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5bfb83c865dae5ca0bfeaf14e82012f6).
`public inline static int `[`ieee802154_radio_config_addr_filter`](#group__drivers__ieee802154__hal_1gaa188ba97727f6322f79f8decc42ca271)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_af_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga924787440d2a27e27f4a77e645d87860)` cmd,const void * value)`            | Shortcut to [ieee802154_radio_ops::config_addr_filter](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1aef4eb07fe08885a5fccb982958706022).
`public inline static int `[`ieee802154_radio_set_frame_filter_mode`](#group__drivers__ieee802154__hal_1ga939695ec8524969afcb9a2b4c21280e7)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_filter_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gabee47f608ac702caf9160aba3bb686d3)` mode)`            | Shortcut to [ieee802154_radio_ops::set_frame_filter_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a850e9ddc68103a2628a81b3e2f336082).
`public inline static int `[`ieee802154_radio_set_frame_retrans`](#group__drivers__ieee802154__hal_1gac2962cb5dd59b6bd4a1040596305df56)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,uint8_t retrans)`            | Shortcut to [ieee802154_radio_ops::set_frame_retrans](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ae40bdeb7222684633b80a6219397b08e).
`public inline static int `[`ieee802154_radio_set_csma_params`](#group__drivers__ieee802154__hal_1ga2d30d55048f3363b9dd700ece0890343)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,const `[`ieee802154_csma_be_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__csma__be__t)` * bd,int8_t retries)`            | Shortcut to [ieee802154_radio_ops::set_csma_params](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a3577e34e95e01f0c967c2021a232ff9f).
`public inline static int `[`ieee802154_radio_request_on`](#group__drivers__ieee802154__hal_1ga9049ba6b535eccd2d8ef317a24a73d96)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Shortcut to [ieee802154_radio_ops::request_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea).
`public inline static int `[`ieee802154_radio_confirm_on`](#group__drivers__ieee802154__hal_1ga06cbd2c0b3ddd50bd53aeb8d3b204aff)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Shortcut to [ieee802154_radio_ops::confirm_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1e4e7c686c646ce82b9f8b5ffe6246d4).
`public inline static int `[`ieee802154_radio_request_set_idle`](#group__drivers__ieee802154__hal_1ga507c46639c064b391563256edefd1f6b)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,bool force)`            | Request the transceiver state to IDLE.
`public inline static int `[`ieee802154_radio_confirm_set_idle`](#group__drivers__ieee802154__hal_1ga49452a0a19d188fdf149777d17ea8412)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Confirmation function for [ieee802154_radio_request_set_idle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga507c46639c064b391563256edefd1f6b).
`public inline static int `[`ieee802154_radio_request_set_rx`](#group__drivers__ieee802154__hal_1gade565e330cfd4d0be92a93587e6ae674)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Request the transceiver state to RX.
`public inline static int `[`ieee802154_radio_confirm_set_rx`](#group__drivers__ieee802154__hal_1gad7f0386843bed7fd43393ebeee0544be)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Confirmation function for [ieee802154_radio_request_set_rx](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gade565e330cfd4d0be92a93587e6ae674).
`public inline static int `[`ieee802154_radio_set_idle`](#group__drivers__ieee802154__hal_1ga1b4e312160fca6a4a3b59c1e278d794c)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,bool force)`            | Set transceiver state to IDLE (blocking)
`public inline static int `[`ieee802154_radio_set_rx`](#group__drivers__ieee802154__hal_1ga951c3bea9852054dc4f266e217c6e986)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Set transceiver state to RX (blocking)
`public inline static int `[`ieee802154_radio_request_cca`](#group__drivers__ieee802154__hal_1ga6239c5fb669290a642fd226f366ec19b)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Request Stand-Alone Clear Channel Assessment.
`public inline static int `[`ieee802154_radio_confirm_cca`](#group__drivers__ieee802154__hal_1ga2cd76d1fb6e3af46892f5d56b033e5fb)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Shortcut to [ieee802154_radio_confirm_cca](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga2cd76d1fb6e3af46892f5d56b033e5fb).
`public inline static int `[`ieee802154_radio_cca`](#group__drivers__ieee802154__hal_1ga0cfed9738a28845863d19e3a5168858c)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Perform a Clear Channel Assessment (blocking)
`public inline static bool `[`ieee802154_radio_has_irq_ack_timeout`](#group__drivers__ieee802154__hal_1ga5acfa5359f823896b63a48b0af59acfc)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports ACK timeout.
`public inline static bool `[`ieee802154_radio_has_frame_retrans`](#group__drivers__ieee802154__hal_1gad92c5e680f4e83a33d8af42d87d64565)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports frame retransmissions (with CSMA-CA).
`public inline static bool `[`ieee802154_radio_has_auto_csma`](#group__drivers__ieee802154__hal_1gad654a2b9010816c4e719894d1a915eac)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports Auto CSMA-CA for transmissions.
`public inline static bool `[`ieee802154_radio_has_sub_ghz`](#group__drivers__ieee802154__hal_1ga815e40e0aa4f2124227264a76f2727d1)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the IEEE802.15.4 Sub-GHz band.
`public inline static bool `[`ieee802154_radio_has_24_ghz`](#group__drivers__ieee802154__hal_1ga49e0cd8ccbcfb26f25173a4ac0276ae0)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the IEEE802.15.4 2.4 GHz band.
`public inline static bool `[`ieee802154_radio_has_irq_tx_done`](#group__drivers__ieee802154__hal_1ga0fbdc8f1bedd8d5c7567d33ed310fdc9)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports TX done interrupt.
`public inline static bool `[`ieee802154_radio_has_irq_rx_start`](#group__drivers__ieee802154__hal_1ga5cae53655e82f454a72a7a98fdd6db65)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports RX start interrupt.
`public inline static bool `[`ieee802154_radio_has_irq_tx_start`](#group__drivers__ieee802154__hal_1ga864889ce5591b63847f773c1c8f02151)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports TX start interrupt.
`public inline static bool `[`ieee802154_radio_has_irq_cca_done`](#group__drivers__ieee802154__hal_1ga88155c9ee1f99c6fc708104be1c846fa)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports CCA done interrupt.
`public inline static bool `[`ieee802154_radio_has_frame_retrans_info`](#group__drivers__ieee802154__hal_1ga765eaa73f5641c779fad0c0d8ba22605)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device reports the number of retransmissions of the last TX procedure.
`public inline static bool `[`ieee802154_radio_has_phy_bpsk`](#group__drivers__ieee802154__hal_1ga5d978b5f5fb5f92086720daeebf9d90f)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the BPSK PHY mode.
`public inline static bool `[`ieee802154_radio_has_phy_ask`](#group__drivers__ieee802154__hal_1ga16e65da0a25c73d5e8970cc6b5c23968)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the ASK PHY mode.
`public inline static bool `[`ieee802154_radio_has_phy_oqpsk`](#group__drivers__ieee802154__hal_1ga783ea68a5b9ac76b25fa2dbb0e7d1423)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the O-QPSK PHY mode.
`public inline static bool `[`ieee802154_radio_has_phy_mr_oqpsk`](#group__drivers__ieee802154__hal_1ga6cd32166e7f08847f831501eb2b51084)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the MR-O-QPSK PHY mode.
`public inline static bool `[`ieee802154_radio_has_phy_mr_ofdm`](#group__drivers__ieee802154__hal_1gaceb742d864e5ece1d1fbb4c86d9360ee)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the MR-OFDM PHY mode.
`public inline static bool `[`ieee802154_radio_has_phy_mr_fsk`](#group__drivers__ieee802154__hal_1ga6741260ed67c85eae47b318c8582090e)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Check if the device supports the MR-FSK PHY mode.
`public inline static uint32_t `[`ieee802154_radio_get_phy_modes`](#group__drivers__ieee802154__hal_1ga9feee50b05bcb1cebc078e58c9457044)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)`            | Get supported PHY modes of the device.
`public inline static uint32_t `[`ieee802154_phy_mode_to_cap`](#group__drivers__ieee802154__hal_1gab00aaef9062e854b3989a466d02ca70e)`(`[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` phy_mode)`            | Convert a [ieee802154_phy_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f) to a [ieee802154_rf_caps_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga512d8adef7d00aa02cbac68a17d71bd6) value.
`public inline static `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`ieee802154_cap_to_phy_mode`](#group__drivers__ieee802154__hal_1ga483db0fcce96039206ad5d38beea15c0)`(uint32_t cap)`            | Convert a [ieee802154_rf_caps_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga512d8adef7d00aa02cbac68a17d71bd6) to a [ieee802154_phy_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f) value.
`struct `[`ieee802154_csma_be_t`](#structieee802154__csma__be__t) | CSMA-CA exponential backoff parameters.
`struct `[`ieee802154_rx_info_t`](#structieee802154__rx__info__t) | RX information associated to a frame.
`struct `[`ieee802154_tx_info_t`](#structieee802154__tx__info__t) | TX information of the last transmitted frame.
`struct `[`ieee802154_dev`](#structieee802154__dev) | the IEEE802.15.4 device descriptor
`struct `[`ieee802154_phy_conf_t`](#structieee802154__phy__conf__t) | Holder of the PHY configuration.
`struct `[`ieee802154_radio_ops`](#structieee802154__radio__ops) | Radio ops struct declaration.

## Members

#### `define `[`IEEE802154_RF_CAPS_PHY_MASK`](#group__drivers__ieee802154__hal_1ga8e5233174880b78bf757a78a78f843e2) 

Bit-mask for PHY modes capabilities.

#### `enum `[`ieee802154_rf_caps_t`](#group__drivers__ieee802154__hal_1ga512d8adef7d00aa02cbac68a17d71bd6) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_CAP_FRAME_RETRANS            | the device supports frame retransmissions with CSMA-CA
IEEE802154_CAP_AUTO_CSMA            | the device supports Auto CSMA-CA
IEEE802154_CAP_IRQ_ACK_TIMEOUT            | the device support ACK timeout interrupt
IEEE802154_CAP_24_GHZ            | the device supports the IEEE802.15.4 2.4 GHz band
IEEE802154_CAP_SUB_GHZ            | the device support the IEEE802.15.4 Sub GHz band
IEEE802154_CAP_IRQ_CRC_ERROR            | the device reports reception off frames with invalid CRC.
IEEE802154_CAP_IRQ_TX_DONE            | the device reports when the transmission is done
IEEE802154_CAP_IRQ_RX_START            | the device reports the start of a frame (SFD) when received.
IEEE802154_CAP_IRQ_TX_START            | the device reports the start of a frame (SFD) was sent.
IEEE802154_CAP_IRQ_CCA_DONE            | the device reports the end of the CCA procedure
IEEE802154_CAP_FRAME_RETRANS_INFO            | the device provides the number of retransmissions
IEEE802154_CAP_REG_RETENTION            | the device retains all register values when off.
IEEE802154_CAP_PHY_BPSK            | Binary Phase Shift Keying PHY mode.
IEEE802154_CAP_PHY_ASK            | Amplitude-Shift Keying PHY mode.
IEEE802154_CAP_PHY_OQPSK            | Offset Quadrature Phase-Shift Keying.
IEEE802154_CAP_PHY_MR_OQPSK            | Multi-Rate Offset Quadrature Phase-Shift Keying PHY mode.
IEEE802154_CAP_PHY_MR_OFDM            | Multi-Rate Orthogonal Frequency-Division Multiplexing PHY mode.
IEEE802154_CAP_PHY_MR_FSK            | Multi-Rate Frequency Shift Keying PHY mode.
IEEE802154_CAP_SRC_ADDR_MATCH            | the device supports source address match table.

IEEE802.15.4 Radio capabilities.

These flags represent the hardware capabilities of a given device.

#### `enum `[`ieee802154_tx_status_t`](#group__drivers__ieee802154__hal_1ga898bab69c901640ee26477caded68446) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TX_STATUS_SUCCESS            | the transceiver successfully sent a frame.
TX_STATUS_FRAME_PENDING            | the transceiver received a valid ACK with the frame pending bit
TX_STATUS_NO_ACK            | the transceiver ran out of retransmission
TX_STATUS_MEDIUM_BUSY            | the CSMA-CA algorithm or CCA failed to measure a clear channel

Transmission status.

#### `enum `[`ieee802154_trx_ev_t`](#group__drivers__ieee802154__hal_1ga6d79cb0254fffa7d10d27a3a5b9836b5) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_RADIO_INDICATION_RX_START            | the transceiver detected a valid SFD
IEEE802154_RADIO_INDICATION_CRC_ERROR            | the transceiver received a frame with an invalid crc.
IEEE802154_RADIO_INDICATION_TX_START            | the transceiver sent out a valid SFD
IEEE802154_RADIO_INDICATION_RX_DONE            | the transceiver received a frame and lies in the internal framebuffer.
IEEE802154_RADIO_CONFIRM_TX_DONE            | the transceiver either finished sending a frame, the retransmission procedure or the channel activity detection prior transmission.
IEEE802154_RADIO_CONFIRM_CCA            | the CCA procedure finished

IEEE802.15.4 Radio HAL events.

To follow the IEEE802.15.4 convention, an event that responds to a Request is a confirmation (Confirm). Otherwise an Indication.

#### `enum `[`ieee802154_src_match_t`](#group__drivers__ieee802154__hal_1ga4f8652a8176d8f1832b18a2e3496f60e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_SRC_MATCH_EN            | Enable or disable source address match.
IEEE802154_SRC_MATCH_SHORT_ADD            | Add a short address to entry.
IEEE802154_SRC_MATCH_SHORT_CLEAR            | Clear short address from entry.
IEEE802154_SRC_MATCH_EXT_ADD            | Add a extended address to entry.
IEEE802154_SRC_MATCH_EXT_CLEAR            | Clear extended address from entry.

Source Address Match commands.

#### `enum `[`ieee802154_af_cmd_t`](#group__drivers__ieee802154__hal_1ga924787440d2a27e27f4a77e645d87860) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_AF_SHORT_ADDR            | Set short IEEE 802.15.4 address (network_uint16_t)
IEEE802154_AF_EXT_ADDR            | Set extended IEEE 802.15.4 address ([eui64_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t))
IEEE802154_AF_PANID            | Set PAN ID (uint16_t)
IEEE802154_AF_PAN_COORD            | Set device as PAN coordinator (bool)

Address filter command.

#### `enum `[`ieee802154_filter_mode_t`](#group__drivers__ieee802154__hal_1gabee47f608ac702caf9160aba3bb686d3) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_FILTER_ACCEPT            | accept all valid frames that match address filter configuration
IEEE802154_FILTER_ACK_ONLY            | accept only ACK frames
IEEE802154_FILTER_PROMISC            | accept all valid frames
IEEE802154_FILTER_SNIFFER            | accept all frames, regardless of FCS

Frame Filter mode.

#### `enum `[`ieee802154_cca_mode_t`](#group__drivers__ieee802154__hal_1ga23dd5fe27f31b7565b0e27d6cb97567e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_CCA_MODE_ED_THRESHOLD            | CCA using first mode (energy detection)
IEEE802154_CCA_MODE_CARRIER_SENSING            | CCA using second mode (carrier sensing)
IEEE802154_CCA_MODE_ED_THRESH_AND_CS            | CCA using third mode (energy detection AND carrier sensing)
IEEE802154_CCA_MODE_ED_THRESH_OR_CS            | CCA using third mode (energy detection OR carrier sensing)

IEEE802.15.4 CCA modes.

#### `enum `[`ieee802154_hal_op_t`](#group__drivers__ieee802154__hal_1ga7707dca87cf13d839bcdce67f392b13d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
IEEE802154_HAL_OP_TRANSMIT            | Transmission of a preloaded frame.
IEEE802154_HAL_OP_SET_RX            | Set the transceiver state to RX.
IEEE802154_HAL_OP_SET_IDLE            | Set the transceiver state to IDLE (RX off).
IEEE802154_HAL_OP_CCA            | Request Clear Channel Assessment.

IEEE 802.15.4 radio operations.

#### `public inline static int `[`ieee802154_radio_write`](#group__drivers__ieee802154__hal_1ga99578966f98f74192d117002fc300cae)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,const `[`iolist_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__iolist_1gaa17f91ef26edec149cd806d8457aa3a0)` * psdu)` 

Shortcut to [ieee802154_radio_ops::write](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5f3b71f1366bc741e455db968db06ea8).

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `psdu` PSDU frame to be sent

#### Returns
result of [ieee802154_radio_ops::write](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5f3b71f1366bc741e455db968db06ea8)

#### `public inline static int `[`ieee802154_radio_request_transmit`](#group__drivers__ieee802154__hal_1ga827a1a8ecad16114147f4578962a9133)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Transmit a preloaded frame.

This functions calls [ieee802154_radio_ops::request_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d) with [IEEE802154_HAL_OP_TRANSMIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga7707dca87cf13d839bcdce67f392b13da5771b6f348b36930b4ccec37a0bafe75) and NULL context.

The upper layer should have called set the transceiver to IDLE (see [ieee802154_radio_set_idle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga1b4e312160fca6a4a3b59c1e278d794c)) and the frame is already in the framebuffer ([ieee802154_radio_ops_t::write](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5f3b71f1366bc741e455db968db06ea8)). 

the device is on

[ieee802154_radio_confirm_transmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga39dad839404d7f82a7c87e2ecd2e39d3) MUST be used to finish the transmission.

#### Returns
result of [ieee802154_radio_request_transmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga827a1a8ecad16114147f4578962a9133)

#### Parameters
* `0` on success 

* `negative` errno on error

#### `public inline static int `[`ieee802154_radio_confirm_transmit`](#group__drivers__ieee802154__hal_1ga39dad839404d7f82a7c87e2ecd2e39d3)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_tx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__tx__info__t)` * info)` 

Confirmation function for [ieee802154_radio_request_transmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga827a1a8ecad16114147f4578962a9133) This function must be called to finish the transmission procedure and get the transmission status.

This function should be called on [IEEE802154_RADIO_CONFIRM_TX_DONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga6d79cb0254fffa7d10d27a3a5b9836b5af227ca64018dd0c7a526cd9dc4fb1651). If no interrupt is available, this function can be polled.

This functions calls [ieee802154_radio_ops::confirm_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1abe6b940daf2771a5c5cc1d4d4d4fe267) with [IEEE802154_HAL_OP_TRANSMIT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga7707dca87cf13d839bcdce67f392b13da5771b6f348b36930b4ccec37a0bafe75) and sets the context to `info`.

the device is on 

call to [ieee802154_radio_request_transmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga827a1a8ecad16114147f4578962a9133) was successful.

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `info` the TX information. Pass NULL if the information is not needed. If the radio supports AutoCCA, the status should indicate transmission done or channel busy. If the radio supports frame retransmissions, the status should indicate if medium was busy, no ACK was received or transmission succeeded.

#### Parameters
* `whether` the transmission finished or not

#### Returns
0 if the transmission finished 

#### Returns
-EAGAIN otherwise

#### `public inline static int `[`ieee802154_radio_len`](#group__drivers__ieee802154__hal_1ga8cd677612e97334162a4a4145ae0de52)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Shortcut to [ieee802154_radio_ops::len](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a7befa94d70f476b83ed10f15945ccbcb).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
result of [ieee802154_radio_ops::len](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a7befa94d70f476b83ed10f15945ccbcb)

#### `public inline static int `[`ieee802154_radio_read`](#group__drivers__ieee802154__hal_1ga22f955336ceeae87cb376be82a2f3da9)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,void * buf,size_t size,`[`ieee802154_rx_info_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__rx__info__t)` * info)` 

Shortcut to [ieee802154_radio_ops::read](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a99394547c65c7872bff808bba1d69c46).

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `buf` buffer to write the received frame into. 

* `size` size of `buf`

* `info` information of the received frame (LQI, RSSI). Can be NULL if this information is not needed.

#### Returns
result of [ieee802154_radio_ops::read](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a99394547c65c7872bff808bba1d69c46)

#### `public inline static int `[`ieee802154_radio_set_cca_threshold`](#group__drivers__ieee802154__hal_1ga9cfae95bf22e74520309491ef939563e)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,int8_t threshold)` 

Shortcut to [ieee802154_radio_ops::set_cca_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a2883b1827e288e3b90113b1f7cc2049c).

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `threshold` the threshold in dBm

#### Returns
result of [ieee802154_radio_ops::set_cca_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a2883b1827e288e3b90113b1f7cc2049c)

#### `public inline static int `[`ieee802154_radio_set_cca_mode`](#group__drivers__ieee802154__hal_1ga4f678669a049ebac6f1f59eedd2b253a)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_cca_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga23dd5fe27f31b7565b0e27d6cb97567e)` mode)` 

Shortcut to [ieee802154_radio_ops::set_cca_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a0cb1aa6cf71d5bf80ae60a2c3eaa6be4).

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `mode` the CCA mode

#### Returns
result of [ieee802154_radio_ops::set_cca_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a0cb1aa6cf71d5bf80ae60a2c3eaa6be4)

#### `public inline static int `[`ieee802154_radio_config_phy`](#group__drivers__ieee802154__hal_1ga242306e17a92baae899013f436cf5c84)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,const `[`ieee802154_phy_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__phy__conf__t)` * conf)` 

Shortcut to [ieee802154_radio_ops::config_phy](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a56f9ed549fc0b30e82e52b63fb6083f6).

the transceiver state is IDLE.

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `conf` the PHY configuration

#### Returns
result of [ieee802154_radio_ops::config_phy](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a56f9ed549fc0b30e82e52b63fb6083f6)

#### `public inline static int `[`ieee802154_radio_config_src_address_match`](#group__drivers__ieee802154__hal_1ga20ffc31012a71b8a351bb53f8b4d4631)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_src_match_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4f8652a8176d8f1832b18a2e3496f60e)` cmd,const void * value)` 

Shortcut to [ieee802154_radio_ops::config_src_addr_match](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a4132e57a071ea34a2d10097969074aba).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `cmd` command for the source address match configuration 

* `value` value associated to `cmd`.

#### Returns
result of [ieee802154_radio_ops::config_src_addr_match](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a4132e57a071ea34a2d10097969074aba)

#### `public inline static int `[`ieee802154_radio_off`](#group__drivers__ieee802154__hal_1ga532db88525c5313670b9858b0611b0da)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Shortcut to [ieee802154_radio_ops::off](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5bfb83c865dae5ca0bfeaf14e82012f6).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

the transceiver state is IDLE.

#### Returns
result of [ieee802154_radio_ops::off](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5bfb83c865dae5ca0bfeaf14e82012f6)

#### `public inline static int `[`ieee802154_radio_config_addr_filter`](#group__drivers__ieee802154__hal_1gaa188ba97727f6322f79f8decc42ca271)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_af_cmd_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga924787440d2a27e27f4a77e645d87860)` cmd,const void * value)` 

Shortcut to [ieee802154_radio_ops::config_addr_filter](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1aef4eb07fe08885a5fccb982958706022).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `cmd` command for the address filter 

* `value` value for `cmd`.

#### Returns
result of [ieee802154_radio_ops::config_addr_filter](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1aef4eb07fe08885a5fccb982958706022)

#### `public inline static int `[`ieee802154_radio_set_frame_filter_mode`](#group__drivers__ieee802154__hal_1ga939695ec8524969afcb9a2b4c21280e7)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,`[`ieee802154_filter_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gabee47f608ac702caf9160aba3bb686d3)` mode)` 

Shortcut to [ieee802154_radio_ops::set_frame_filter_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a850e9ddc68103a2628a81b3e2f336082).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `mode` frame filter mode

#### Returns
result of [ieee802154_radio_ops::set_frame_filter_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a850e9ddc68103a2628a81b3e2f336082)

#### `public inline static int `[`ieee802154_radio_set_frame_retrans`](#group__drivers__ieee802154__hal_1gac2962cb5dd59b6bd4a1040596305df56)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,uint8_t retrans)` 

Shortcut to [ieee802154_radio_ops::set_frame_retrans](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ae40bdeb7222684633b80a6219397b08e).

the device is on 

the device supports frame retransmissions ([ieee802154_radio_has_frame_retrans()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gad92c5e680f4e83a33d8af42d87d64565) == true)

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `retrans` the number of retransmissions

#### Returns
result of [ieee802154_radio_ops::set_frame_retrans](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ae40bdeb7222684633b80a6219397b08e)

#### `public inline static int `[`ieee802154_radio_set_csma_params`](#group__drivers__ieee802154__hal_1ga2d30d55048f3363b9dd700ece0890343)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,const `[`ieee802154_csma_be_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__csma__be__t)` * bd,int8_t retries)` 

Shortcut to [ieee802154_radio_ops::set_csma_params](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a3577e34e95e01f0c967c2021a232ff9f).

the device is on 

the device supports frame retransmissions ([ieee802154_radio_has_frame_retrans()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gad92c5e680f4e83a33d8af42d87d64565) == true)

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `bd` parameters of the exponential backoff 

* `retries` number of CSMA-CA retries. If `restries` < 0, retransmissions with CSMA-CA are disabled

#### Returns
result of [ieee802154_radio_ops::set_csma_params](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a3577e34e95e01f0c967c2021a232ff9f)

#### `public inline static int `[`ieee802154_radio_request_on`](#group__drivers__ieee802154__hal_1ga9049ba6b535eccd2d8ef317a24a73d96)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Shortcut to [ieee802154_radio_ops::request_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
result of [ieee802154_radio_ops::request_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea)

#### `public inline static int `[`ieee802154_radio_confirm_on`](#group__drivers__ieee802154__hal_1ga06cbd2c0b3ddd50bd53aeb8d3b204aff)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Shortcut to [ieee802154_radio_ops::confirm_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1e4e7c686c646ce82b9f8b5ffe6246d4).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
result of [ieee802154_radio_ops::confirm_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1e4e7c686c646ce82b9f8b5ffe6246d4)

#### `public inline static int `[`ieee802154_radio_request_set_idle`](#group__drivers__ieee802154__hal_1ga507c46639c064b391563256edefd1f6b)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,bool force)` 

Request the transceiver state to IDLE.

During IDLE, the radio won't be able to receive frames but it's still responsive to other HAL functions.

This functions calls [ieee802154_radio_ops::request_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d) with [IEEE802154_HAL_OP_SET_IDLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga7707dca87cf13d839bcdce67f392b13da8943baf13dc27c24c2eba4c9fbc0bcb3) and sets the context to `force`

the device is on

[ieee802154_radio_confirm_set_idle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga49452a0a19d188fdf149777d17ea8412) MUST be used to finish the state transition.

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `force` whether the state transition should be forced or not. If forced, the transceiver aborts any ongoing operation.

#### Returns
status of the request

#### Parameters
* `0` on success 

* `negative` errno on error

#### `public inline static int `[`ieee802154_radio_confirm_set_idle`](#group__drivers__ieee802154__hal_1ga49452a0a19d188fdf149777d17ea8412)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Confirmation function for [ieee802154_radio_request_set_idle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga507c46639c064b391563256edefd1f6b).

call to [ieee802154_radio_request_set_idle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga507c46639c064b391563256edefd1f6b) was successful. 

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
whether the state transition finished or not

#### Returns
0 if the transition finished 

#### Returns
-EAGAIN otherwise.

#### `public inline static int `[`ieee802154_radio_request_set_rx`](#group__drivers__ieee802154__hal_1gade565e330cfd4d0be92a93587e6ae674)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Request the transceiver state to RX.

During RX, the radio will listen to incoming frames

This functions calls [ieee802154_radio_ops::request_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d) with [IEEE802154_HAL_OP_SET_RX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga7707dca87cf13d839bcdce67f392b13dac9979358af6ff7ad59ac50b600b7599a) and NULL context.

the device is on

[ieee802154_radio_confirm_set_rx](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gad7f0386843bed7fd43393ebeee0544be) MUST be used to finish the state transition.

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
status of the request

#### Parameters
* `0` on success 

* `negative` errno on error

#### `public inline static int `[`ieee802154_radio_confirm_set_rx`](#group__drivers__ieee802154__hal_1gad7f0386843bed7fd43393ebeee0544be)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Confirmation function for [ieee802154_radio_request_set_rx](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gade565e330cfd4d0be92a93587e6ae674).

call to [ieee802154_radio_request_set_rx](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gade565e330cfd4d0be92a93587e6ae674) was successful. 

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
whether the state transition finished or not

#### Returns
0 if the transition finished 

#### Returns
-EAGAIN otherwise.

#### `public inline static int `[`ieee802154_radio_set_idle`](#group__drivers__ieee802154__hal_1ga1b4e312160fca6a4a3b59c1e278d794c)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev,bool force)` 

Set transceiver state to IDLE (blocking)

This function will internally call [ieee802154_radio_request_set_idle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga507c46639c064b391563256edefd1f6b) and poll [ieee802154_radio_confirm_set_idle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga49452a0a19d188fdf149777d17ea8412).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `force` whether the state transition should be forced or not. If forced, the transceiver aborts any ongoing operation.

#### Returns
result of the state transition

#### Parameters
* `0` on success 

* `negative` errno on error

#### `public inline static int `[`ieee802154_radio_set_rx`](#group__drivers__ieee802154__hal_1ga951c3bea9852054dc4f266e217c6e986)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Set transceiver state to RX (blocking)

This function will internally call [ieee802154_radio_request_set_rx](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gade565e330cfd4d0be92a93587e6ae674) and poll [ieee802154_radio_confirm_set_rx](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gad7f0386843bed7fd43393ebeee0544be).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
result of the state transition

#### Parameters
* `0` on success 

* `negative` errno on error

#### `public inline static int `[`ieee802154_radio_request_cca`](#group__drivers__ieee802154__hal_1ga6239c5fb669290a642fd226f366ec19b)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Request Stand-Alone Clear Channel Assessment.

This functions calls [ieee802154_radio_ops::request_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d) with [IEEE802154_HAL_OP_CCA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga7707dca87cf13d839bcdce67f392b13da6263ed3f80ea4650d1c41a1339682d1a) and NULL context.

the device is on

[ieee802154_radio_confirm_cca](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga2cd76d1fb6e3af46892f5d56b033e5fb) MUST be used to finish the CCA procedure and get the channel status.

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public inline static int `[`ieee802154_radio_confirm_cca`](#group__drivers__ieee802154__hal_1ga2cd76d1fb6e3af46892f5d56b033e5fb)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Shortcut to [ieee802154_radio_confirm_cca](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga2cd76d1fb6e3af46892f5d56b033e5fb).

This function must be called to finish the CCA procedure. This function should be called on [IEEE802154_RADIO_CONFIRM_CCA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga6d79cb0254fffa7d10d27a3a5b9836b5a852192a298ea6b5409a5be1caf25a3fb), If no interrupt is available, this function can be polled.

This functions calls [ieee802154_radio_ops::request_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d) with [IEEE802154_HAL_OP_CCA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga7707dca87cf13d839bcdce67f392b13da6263ed3f80ea4650d1c41a1339682d1a) and sets the context to a boolean where the result of the CCA should be store. Setting it to true means the channel is clear.

call to [ieee802154_radio_request_cca](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga6239c5fb669290a642fd226f366ec19b) was successful. 

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
status of the CCA procedure

#### Parameters
* `positive` number if the channel is clear 

* `0` if the channel is busy 

* `-EAGAIN` if the CCA procedure hasn't finished.

#### `public inline static int `[`ieee802154_radio_cca`](#group__drivers__ieee802154__hal_1ga0cfed9738a28845863d19e3a5168858c)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Perform a Clear Channel Assessment (blocking)

This function will internally call [ieee802154_radio_request_cca](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga6239c5fb669290a642fd226f366ec19b) and poll [ieee802154_radio_confirm_cca](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga2cd76d1fb6e3af46892f5d56b033e5fb).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
status of the CCA

#### Parameters
* `positive` number if the channel is clear 

* `0` if the channel is busy 

* `negative` errno on error

#### `public inline static bool `[`ieee802154_radio_has_irq_ack_timeout`](#group__drivers__ieee802154__hal_1ga5acfa5359f823896b63a48b0af59acfc)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports ACK timeout.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_IRQ_ACK_TIMEOUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a564badc819bf29ae73f68cb52d3893e6).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_frame_retrans`](#group__drivers__ieee802154__hal_1gad92c5e680f4e83a33d8af42d87d64565)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports frame retransmissions (with CSMA-CA).

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_FRAME_RETRANS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a3758092412c9de2d5b2e58decc7aa969).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_auto_csma`](#group__drivers__ieee802154__hal_1gad654a2b9010816c4e719894d1a915eac)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports Auto CSMA-CA for transmissions.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_AUTO_CSMA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6aa8eba6a87ac5111cf16dfff2520a1206).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_sub_ghz`](#group__drivers__ieee802154__hal_1ga815e40e0aa4f2124227264a76f2727d1)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the IEEE802.15.4 Sub-GHz band.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_SUB_GHZ](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6ab694e4b7c9e6857414a6675250c409b7).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_24_ghz`](#group__drivers__ieee802154__hal_1ga49e0cd8ccbcfb26f25173a4ac0276ae0)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the IEEE802.15.4 2.4 GHz band.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_24_GHZ](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6af0118db354f16f0c08e205a08c193566).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_irq_tx_done`](#group__drivers__ieee802154__hal_1ga0fbdc8f1bedd8d5c7567d33ed310fdc9)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports TX done interrupt.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_IRQ_TX_DONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a7d890486a73c205a3b3493148d13edf6).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_irq_rx_start`](#group__drivers__ieee802154__hal_1ga5cae53655e82f454a72a7a98fdd6db65)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports RX start interrupt.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_IRQ_RX_START](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a37acb02778c96f9742bba3754613ec60).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_irq_tx_start`](#group__drivers__ieee802154__hal_1ga864889ce5591b63847f773c1c8f02151)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports TX start interrupt.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_IRQ_TX_START](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6ac24f6ab4c1bac6c784d2eeef517627b5).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_irq_cca_done`](#group__drivers__ieee802154__hal_1ga88155c9ee1f99c6fc708104be1c846fa)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports CCA done interrupt.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) with [IEEE802154_CAP_IRQ_CCA_DONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6ae61453db7e2cfe78804e5ede799b78f2).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_frame_retrans_info`](#group__drivers__ieee802154__hal_1ga765eaa73f5641c779fad0c0d8ba22605)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device reports the number of retransmissions of the last TX procedure.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_FRAME_RETRANS_INFO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a14edfcfc633c4eaa132c35a2c44e1341).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_phy_bpsk`](#group__drivers__ieee802154__hal_1ga5d978b5f5fb5f92086720daeebf9d90f)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the BPSK PHY mode.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_PHY_BPSK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a021d2bd6c9cb8c0adb4b6b91e811d68c).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_phy_ask`](#group__drivers__ieee802154__hal_1ga16e65da0a25c73d5e8970cc6b5c23968)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the ASK PHY mode.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_PHY_ASK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a9e8718f7b3abd041c79c5056f5c888e5).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_phy_oqpsk`](#group__drivers__ieee802154__hal_1ga783ea68a5b9ac76b25fa2dbb0e7d1423)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the O-QPSK PHY mode.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_PHY_OQPSK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a86e967c4867f5ca89cf2e8acca60bab8).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_phy_mr_oqpsk`](#group__drivers__ieee802154__hal_1ga6cd32166e7f08847f831501eb2b51084)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the MR-O-QPSK PHY mode.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_PHY_MR_OQPSK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a8c4cd638858909087490523bd99c6608).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_phy_mr_ofdm`](#group__drivers__ieee802154__hal_1gaceb742d864e5ece1d1fbb4c86d9360ee)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the MR-OFDM PHY mode.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_PHY_MR_OFDM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6af14a6a2985054254c7da8bf77734f668).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static bool `[`ieee802154_radio_has_phy_mr_fsk`](#group__drivers__ieee802154__hal_1ga6741260ed67c85eae47b318c8582090e)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Check if the device supports the MR-FSK PHY mode.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and checks for [IEEE802154_CAP_PHY_MR_FSK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a9aa5d69df960ae2d9c0dfe9f84b25be2).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
true if the device has support 

#### Returns
false otherwise

#### `public inline static uint32_t `[`ieee802154_radio_get_phy_modes`](#group__drivers__ieee802154__hal_1ga9feee50b05bcb1cebc078e58c9457044)`(`[`ieee802154_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga4715febafac1cf09aab1cc3cdeb1460e)` * dev)` 

Get supported PHY modes of the device.

Internally this function reads [ieee802154_radio_ops::caps](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) and returns only the bits from [IEEE802154_RF_CAPS_PHY_MASK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga8e5233174880b78bf757a78a78f843e2).

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
PHY modes bit mask.

#### `public inline static uint32_t `[`ieee802154_phy_mode_to_cap`](#group__drivers__ieee802154__hal_1gab00aaef9062e854b3989a466d02ca70e)`(`[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` phy_mode)` 

Convert a [ieee802154_phy_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f) to a [ieee802154_rf_caps_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga512d8adef7d00aa02cbac68a17d71bd6) value.

#### Parameters
* `phy_mode` PHY mode

#### Returns
Equivalent capability given the PHY mode. 

#### Returns
0 on invalid values 

#### Returns
0 when [IEEE802154_PHY_DISABLED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1ggaa78b6fe7ff1bba2869970de4e9e4d79fa83584b40912d320fae7c83aa03bdb1c0) is given as the parameter.

#### `public inline static `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`ieee802154_cap_to_phy_mode`](#group__drivers__ieee802154__hal_1ga483db0fcce96039206ad5d38beea15c0)`(uint32_t cap)` 

Convert a [ieee802154_rf_caps_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga512d8adef7d00aa02cbac68a17d71bd6) to a [ieee802154_phy_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f) value.

The `parameter` must be one of the PHY capabilities.

#### Parameters
* `cap` The IEEE 802.15.4 capability.

#### Returns
Equivalent phy mode given the capability. 

#### Returns
0 on invalid values

# struct `ieee802154_csma_be_t` 

CSMA-CA exponential backoff parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`min`](#structieee802154__csma__be__t_1a5a0e976cfd914d651cd6789e942cfdde) | minimum value of the exponential backoff
`public uint8_t `[`max`](#structieee802154__csma__be__t_1a26d4d78021960e727ada23d5aa48051d) | maximum value of the exponential backoff

## Members

#### `public uint8_t `[`min`](#structieee802154__csma__be__t_1a5a0e976cfd914d651cd6789e942cfdde) 

minimum value of the exponential backoff

#### `public uint8_t `[`max`](#structieee802154__csma__be__t_1a26d4d78021960e727ada23d5aa48051d) 

maximum value of the exponential backoff

# struct `ieee802154_rx_info_t` 

RX information associated to a frame.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`rssi`](#structieee802154__rx__info__t_1acff00d0a26b12bb18685465c811dc012) | RSSI of the received frame.
`public uint8_t `[`lqi`](#structieee802154__rx__info__t_1ad9fafca7ce28eb3967169b840f334deb) | LQI of the received frame.

## Members

#### `public uint8_t `[`rssi`](#structieee802154__rx__info__t_1acff00d0a26b12bb18685465c811dc012) 

RSSI of the received frame.

The RSSI is a measure of the RF power in dBm for the received frame. The minimum and maximum values are 0 (-174 dBm) and 254 (80 dBm).

#### `public uint8_t `[`lqi`](#structieee802154__rx__info__t_1ad9fafca7ce28eb3967169b840f334deb) 

LQI of the received frame.

# struct `ieee802154_tx_info_t` 

TX information of the last transmitted frame.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ieee802154_tx_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga898bab69c901640ee26477caded68446)` `[`status`](#structieee802154__tx__info__t_1aa1beedcb41613f20a359596307a3cad5) | status of the last transmission
`public int8_t `[`retrans`](#structieee802154__tx__info__t_1a62bff8d444a4379859c7fe3caf4ef154) | number of frame retransmissions of the last TX

## Members

#### `public `[`ieee802154_tx_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga898bab69c901640ee26477caded68446)` `[`status`](#structieee802154__tx__info__t_1aa1beedcb41613f20a359596307a3cad5) 

status of the last transmission

#### `public int8_t `[`retrans`](#structieee802154__tx__info__t_1a62bff8d444a4379859c7fe3caf4ef154) 

number of frame retransmissions of the last TX

# struct `ieee802154_dev` 

the IEEE802.15.4 device descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const `[`ieee802154_radio_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga42736af1931b03b2a76adbc361a5ef4f)` * `[`driver`](#structieee802154__dev_1a7f3b49c53141da81d40279cefcda5fd2) | pointer to the operations of the device
`public void * `[`priv`](#structieee802154__dev_1affc46f574d8159a60c1b6e645847c3de) | pointer to the private descriptor of the device
`public `[`ieee802154_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gaa81ef0b477b03e4ec72bd829756aa4f1)` `[`cb`](#structieee802154__dev_1ad39e491b37beda8e7aa49f3986167596) | the event callback of the device

## Members

#### `public const `[`ieee802154_radio_ops_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga42736af1931b03b2a76adbc361a5ef4f)` * `[`driver`](#structieee802154__dev_1a7f3b49c53141da81d40279cefcda5fd2) 

pointer to the operations of the device

#### `public void * `[`priv`](#structieee802154__dev_1affc46f574d8159a60c1b6e645847c3de) 

pointer to the private descriptor of the device

#### `public `[`ieee802154_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gaa81ef0b477b03e4ec72bd829756aa4f1)` `[`cb`](#structieee802154__dev_1ad39e491b37beda8e7aa49f3986167596) 

the event callback of the device

# struct `ieee802154_phy_conf_t` 

Holder of the PHY configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`phy_mode`](#structieee802154__phy__conf__t_1ae6edc81ec1c1a68e2d6e723096642c6f) | IEEE802.15.4 PHY mode.
`public uint16_t `[`channel`](#structieee802154__phy__conf__t_1aa43b780a6653869e4ae10082b873db8e) | IEEE802.15.4 channel number.
`public uint8_t `[`page`](#structieee802154__phy__conf__t_1a7b3c58eabb34e4859d0afa3f826f6cc3) | IEEE802.15.4 channel page.
`public int8_t `[`pow`](#structieee802154__phy__conf__t_1aad490ea4cc1c9df0f2c8a0c909ba2f76) | TX power in dBm.

## Members

#### `public `[`ieee802154_phy_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__header_1gaa78b6fe7ff1bba2869970de4e9e4d79f)` `[`phy_mode`](#structieee802154__phy__conf__t_1ae6edc81ec1c1a68e2d6e723096642c6f) 

IEEE802.15.4 PHY mode.

#### `public uint16_t `[`channel`](#structieee802154__phy__conf__t_1aa43b780a6653869e4ae10082b873db8e) 

IEEE802.15.4 channel number.

#### `public uint8_t `[`page`](#structieee802154__phy__conf__t_1a7b3c58eabb34e4859d0afa3f826f6cc3) 

IEEE802.15.4 channel page.

#### `public int8_t `[`pow`](#structieee802154__phy__conf__t_1aad490ea4cc1c9df0f2c8a0c909ba2f76) 

TX power in dBm.

# struct `ieee802154_radio_ops` 

Radio ops struct declaration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const uint32_t `[`caps`](#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) | Radio device capabilities.
`public int(* `[`write`](#structieee802154__radio__ops_1a5f3b71f1366bc741e455db968db06ea8) | Write a frame into the framebuffer.
`public int(* `[`len`](#structieee802154__radio__ops_1a7befa94d70f476b83ed10f15945ccbcb) | Get the length of the received PSDU frame.
`public int(* `[`read`](#structieee802154__radio__ops_1a99394547c65c7872bff808bba1d69c46) | Read a frame from the internal framebuffer.
`public int(* `[`off`](#structieee802154__radio__ops_1a5bfb83c865dae5ca0bfeaf14e82012f6) | Turn off the device.
`public int(* `[`request_on`](#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea) | Request to turn on the device.
`public int(* `[`confirm_on`](#structieee802154__radio__ops_1a1e4e7c686c646ce82b9f8b5ffe6246d4) | Confirmation function for [ieee802154_radio_ops::request_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea).
`public int(* `[`request_op`](#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d) | Request a radio operation.
`public int(* `[`confirm_op`](#structieee802154__radio__ops_1abe6b940daf2771a5c5cc1d4d4d4fe267) | Confirmation function for [ieee802154_radio_ops::request_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d).
`public int(* `[`set_cca_threshold`](#structieee802154__radio__ops_1a2883b1827e288e3b90113b1f7cc2049c) | Set the threshold for the Energy Detection (first mode of CCA)
`public int(* `[`set_cca_mode`](#structieee802154__radio__ops_1a0cb1aa6cf71d5bf80ae60a2c3eaa6be4) | Set CCA mode.
`public int(* `[`config_phy`](#structieee802154__radio__ops_1a56f9ed549fc0b30e82e52b63fb6083f6) | Set IEEE802.15.4 PHY configuration (channel, TX power)
`public int(* `[`set_frame_retrans`](#structieee802154__radio__ops_1ae40bdeb7222684633b80a6219397b08e) | Set number of frame retransmissions.
`public int(* `[`set_csma_params`](#structieee802154__radio__ops_1a3577e34e95e01f0c967c2021a232ff9f) | Set the CSMA-CA parameters.
`public int(* `[`set_frame_filter_mode`](#structieee802154__radio__ops_1a850e9ddc68103a2628a81b3e2f336082) | Set the frame filter moder.
`public int(* `[`config_addr_filter`](#structieee802154__radio__ops_1aef4eb07fe08885a5fccb982958706022) | Configure the address filter.
`public int(* `[`config_src_addr_match`](#structieee802154__radio__ops_1a4132e57a071ea34a2d10097969074aba) | Set the source address match configuration.

## Members

#### `public const uint32_t `[`caps`](#structieee802154__radio__ops_1a14af76940adeb8c5f23077865dacf33a) 

Radio device capabilities.

This field contains bitflags of supported capabilities ([ieee802154_rf_caps_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga512d8adef7d00aa02cbac68a17d71bd6)) by the device.

#### `public int(* `[`write`](#structieee802154__radio__ops_1a5f3b71f1366bc741e455db968db06ea8) 

Write a frame into the framebuffer.

This function shouldn't do any checks, so the frame MUST be valid. The previous content of the framebuffer is replaced by `psdu`.

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `psdu` PSDU frame to be sent

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public int(* `[`len`](#structieee802154__radio__ops_1a7befa94d70f476b83ed10f15945ccbcb) 

Get the length of the received PSDU frame.

the device is on 

the radio already received a frame (e.g [ieee802154_dev::cb](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__dev_1ad39e491b37beda8e7aa49f3986167596) with [IEEE802154_RADIO_INDICATION_RX_DONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga6d79cb0254fffa7d10d27a3a5b9836b5ac4f6b736e071dbd6b89769efd3e0edc6)).

the frame buffer is still protected against new frame arrivals.

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
length of the frame

#### `public int(* `[`read`](#structieee802154__radio__ops_1a99394547c65c7872bff808bba1d69c46) 

Read a frame from the internal framebuffer.

This function reads the received frame from the internal framebuffer. It should try to copy the received PSDU frame into `buf`. The FCS field will **not** be copied and its size **not** be taken into account for the return value. If the radio provides any kind of framebuffer protection, this function should release it.

Don't call this function if there was no reception event (either [IEEE802154_RADIO_INDICATION_RX_DONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga6d79cb0254fffa7d10d27a3a5b9836b5ac4f6b736e071dbd6b89769efd3e0edc6) or [IEEE802154_RADIO_INDICATION_CRC_ERROR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga6d79cb0254fffa7d10d27a3a5b9836b5a1753122e4b25659273a97442802de597)). Otherwise there's risk of RX underflow.

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `buf` buffer to write the received PSDU frame into. 

* `size` size of `buf`

* `info` information of the received frame (LQI, RSSI). Can be NULL if this information is not needed.

#### Returns
number of bytes written in `buffer` (0 if `buf` == NULL) 

#### Returns
-ENOBUFS if the frame doesn't fit in ``

#### `public int(* `[`off`](#structieee802154__radio__ops_1a5bfb83c865dae5ca0bfeaf14e82012f6) 

Turn off the device.

#### Parameters
* `dev` IEEE802.15.4 device descriptor

When this function returns, the radio shall be off.

the device is off

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public int(* `[`request_on`](#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea) 

Request to turn on the device.

[ieee802154_radio_ops::confirm_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1e4e7c686c646ce82b9f8b5ffe6246d4) MUST be used to finish the procedure.

the init function of the radio succeeded.

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public int(* `[`confirm_on`](#structieee802154__radio__ops_1a1e4e7c686c646ce82b9f8b5ffe6246d4) 

Confirmation function for [ieee802154_radio_ops::request_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea).

call to [ieee802154_radio_ops::request_on](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ab35cda57054a4e20894798e91dc598ea) was successful.

the transceiver state is IDLE During boot or in case the radio doesn't support [IEEE802154_CAP_REG_RETENTION](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a8e9c5ecf87996cbbbb9f64f8ec7f8d9f) when [off](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a5bfb83c865dae5ca0bfeaf14e82012f6) was called, the Physical Information Base will be undefined. Thus, take into consideration that the following functions should be called right after the radio is turned on again:

* [set_cca_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a2883b1827e288e3b90113b1f7cc2049c)

* [set_cca_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a0cb1aa6cf71d5bf80ae60a2c3eaa6be4)

* [config_phy](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a56f9ed549fc0b30e82e52b63fb6083f6)

* [config_addr_filter](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1aef4eb07fe08885a5fccb982958706022)

* [set_csma_params](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a3577e34e95e01f0c967c2021a232ff9f)

* [set_frame_filter_mode](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a850e9ddc68103a2628a81b3e2f336082)

* [config_src_addr_match](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a4132e57a071ea34a2d10097969074aba)

* [set_frame_retrans](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1ae40bdeb7222684633b80a6219397b08e) (if available)

#### Parameters
* `dev` IEEE802.15.4 device descriptor

#### Returns
0 if the device is on 

#### Returns
-EAGAIN if the device is still busy turning on 

#### Returns
negative errno on error

#### `public int(* `[`request_op`](#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d) 

Request a radio operation.

This functions is used to request a radio operation. See [ieee802154_hal_op_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga7707dca87cf13d839bcdce67f392b13d) for a list of available operations.

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `op` operation to be executed 

* `ctx` operation specific context

#### Returns
status of the request

#### Parameters
* `0` on success 

* `negative` errno on error

#### `public int(* `[`confirm_op`](#structieee802154__radio__ops_1abe6b940daf2771a5c5cc1d4d4d4fe267) 

Confirmation function for [ieee802154_radio_ops::request_op](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ieee802154_hal.md#structieee802154__radio__ops_1a1c9f0d91722096c9209ebe60d165cd1d).

This function must be called to finish a given [ieee802154_hal_op_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga7707dca87cf13d839bcdce67f392b13d).

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `op` operation to be confirmed 

* `ctx` operation specific context

#### Returns
status of the request

#### Parameters
* `0` on success 

* `negative` errno on error

#### `public int(* `[`set_cca_threshold`](#structieee802154__radio__ops_1a2883b1827e288e3b90113b1f7cc2049c) 

Set the threshold for the Energy Detection (first mode of CCA)

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `threshold` the threshold in dBm.

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public int(* `[`set_cca_mode`](#structieee802154__radio__ops_1a0cb1aa6cf71d5bf80ae60a2c3eaa6be4) 

Set CCA mode.

All radios MUST at least implement the first CCA mode (ED Threshold).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `mode` the CCA mode

#### Returns
0 on success 

#### Returns
-ENOTSUP if the mode is not supported 

#### Returns
negative errno on error

#### `public int(* `[`config_phy`](#structieee802154__radio__ops_1a56f9ed549fc0b30e82e52b63fb6083f6) 

Set IEEE802.15.4 PHY configuration (channel, TX power)

This function SHOULD NOT validate the PHY configurations unless it's specific to the device. The upper layer is responsible of all kind of validations. In case a configuration is not valid (e.g parameters out of range), this function should return -EINVAL

the device is on 

the transceiver state is IDLE.

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `conf` the PHY configuration

#### Returns
0 on success 

#### Returns
-EINVAL if the configuration is not valid for the device. 

#### Returns
<0 error, return value is negative errno indicating the cause.

#### `public int(* `[`set_frame_retrans`](#structieee802154__radio__ops_1ae40bdeb7222684633b80a6219397b08e) 

Set number of frame retransmissions.

the device is on

this function pointer can be NULL if the device doesn't support frame retransmissions

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `retrans` the number of retransmissions attempts.

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public int(* `[`set_csma_params`](#structieee802154__radio__ops_1a3577e34e95e01f0c967c2021a232ff9f) 

Set the CSMA-CA parameters.

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `bd` parameters of the exponential backoff. If NULL, the parameters are not altered. 

* `retries` number of CSMA-CA retries. If `retries` < 0, retransmissions with CSMA-CA MUST be disabled. If `retries` == 0, the [ieee802154_radio_request_transmit](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1ga827a1a8ecad16114147f4578962a9133) function is equivalent to CCA send.

#### Returns
0 on success 

#### Returns
-EINVAL if the settings are not supported. 

#### Returns
negative errno on error

#### `public int(* `[`set_frame_filter_mode`](#structieee802154__radio__ops_1a850e9ddc68103a2628a81b3e2f336082) 

Set the frame filter moder.

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `mode` address filter mode

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public int(* `[`config_addr_filter`](#structieee802154__radio__ops_1aef4eb07fe08885a5fccb982958706022) 

Configure the address filter.

This functions is used for configuring the address filter parameters required by the IEEE 802.15.4 standard.

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `cmd` command for the address filter 

* `value` value for `cmd`.

#### Returns
0 on success 

#### Returns
negative errno on error

#### `public int(* `[`config_src_addr_match`](#structieee802154__radio__ops_1a4132e57a071ea34a2d10097969074aba) 

Set the source address match configuration.

This function configures the source address match filter in order to set the Frame Pending bit in ACK frames accordingly. In case the radio doesn't support [IEEE802154_CAP_SRC_ADDR_MATCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ieee802154__hal_1gga512d8adef7d00aa02cbac68a17d71bd6a80c47637ee03fcb4d58d0f2518fe84aa), this functions is used to activate the Frame Pending bit for all ACK frames (in order to be compliant with the IEEE 802.15.4 standard).

the device is on

#### Parameters
* `dev` IEEE802.15.4 device descriptor 

* `cmd` command for the source address match configuration 

* `value` value associated to `cmd`.

#### Returns
0 on success 

#### Returns
negative errno on error

