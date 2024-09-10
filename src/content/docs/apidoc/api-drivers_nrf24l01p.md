---
title: api-drivers_nrf24l01p.md
description: api-drivers_nrf24l01p.md
---
# group `drivers_nrf24l01p` 

Low-level driver for nrf24l01+ transceiver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`nrf24l01p_aw_t`](#group__drivers__nrf24l01p_1ga69c3db8aebd53129ea24751e48ac9f30)            | Defines the address width of the nrf24l01+ transceiver.
`enum `[`nrf24l01p_dr_t`](#group__drivers__nrf24l01p_1gaa1d5490746292837074743cccffdde89)            | Defines the RF datarate.
`enum `[`nrf24l01p_pwr_t`](#group__drivers__nrf24l01p_1gac14290a1b3bb7a370e5019f60399371c)            | Defines the RF power level.
`enum `[`nrf24l01p_rx_pipe_t`](#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)            | Defines the datapipe on which the receiver searches for packets.
`enum `[`nrf24l01p_crc_t`](#group__drivers__nrf24l01p_1gad5831d7b5356926a94b6e412ff5225d0)            | Defines the error detection encoding scheme for the nrf24l01p transceiver.
`enum `[`nrf24l01p_retransmit_delay_t`](#group__drivers__nrf24l01p_1ga4a1cb3d67069717f63866db5fdc57fdc)            | Defines the automatic retransmission delay defined from end of transmission to start of next treansmission.
`enum `[`nrf24l01p_rx_event_t`](#group__drivers__nrf24l01p_1ga4f60c67135f67514ea7bae57c91bdacc)            | Defines states for the nrf24l01+ transceiver.
`public int `[`nrf24l01p_read_reg`](#group__drivers__nrf24l01p_1ga8ee0165211601964d430d99e1a09fe41)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char reg,char * answer)`            | Read one register of the nrf24l01+ transceiver.
`public int `[`nrf24l01p_write_reg`](#group__drivers__nrf24l01p_1ga104edda71a392414d2b8962e43f2f334)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char reg,char write)`            | Write one register to the nrf24l01+ transceiver.
`public int `[`nrf24l01p_init`](#group__drivers__nrf24l01p_1gadb2a3501ec08503ea5ed48d7fc3100e0)`(`[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` spi,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` ce,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` csn,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` irq)`            | Initialize the nrf24l01+ transceiver.
`public int `[`nrf24l01p_on`](#group__drivers__nrf24l01p_1ga6d29ef7091a0c4881b632496bf4a899a)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Power on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_off`](#group__drivers__nrf24l01p_1ga2b68051054a64aa069630acb1d961a34)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Power off the nrf24l01+ transceiver.
`public void `[`nrf24l01p_transmit`](#group__drivers__nrf24l01p_1ga8ea2150e3b74e698c801812da0e386b9)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Transmit payload laying in TX FIFO of the nrf24l01+ transceiver.
`public int `[`nrf24l01p_read_payload`](#group__drivers__nrf24l01p_1gaf0eb7a738208403fe93025037634a148)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char * answer,unsigned int size)`            | Read payload from RX FIFO of the nrf24l01+ transceiver.
`public void `[`nrf24l01p_register`](#group__drivers__nrf24l01p_1gaf9ed59d3aa18cca651542e9573fe6446)`(`[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,unsigned int * pid)`            | Register a given ID to the nrf24l01+ transceiver.
`public int `[`nrf24l01p_enable_dynamic_payload`](#group__drivers__nrf24l01p_1ga2b70e748b577e58c0f5fc00341158039)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)`            | Enable dynamic payload for the pipe on give nrf24l01+ transceiver.
`public int `[`nrf24l01p_enable_dynamic_ack`](#group__drivers__nrf24l01p_1gabb657dd552879814072076cc4e45b1ab)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Enable dynamic ack for the nrf24l01+ transceiver.
`public int `[`nrf24l01p_unregister`](#group__drivers__nrf24l01p_1gaa6c878e62a687ef872e5b23e1d407823)`(`[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,unsigned int pid)`            | Unregister the nrf24l01+ transceiver from his ID.
`public void `[`nrf24l01p_get_id`](#group__drivers__nrf24l01p_1ga4ea971eb2456bd8776297f9a1aaa9b2e)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,unsigned int * pid)`            | Get ID from the nrf24l01p transceiver.
`public void `[`nrf24l01p_start`](#group__drivers__nrf24l01p_1ga91819540030d0d8a25d146bc483a2577)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Start searching packets while in RX mode.
`public void `[`nrf24l01p_stop`](#group__drivers__nrf24l01p_1ga35fac8dd7f5cceb748e3175c85043066)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Stop searching packets while in RX mode.
`public int `[`nrf24l01p_preload`](#group__drivers__nrf24l01p_1gab1a1c4e85f6ec2b9df06d8ed9102d2b2)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char * data,unsigned int size)`            | Preload TX FIFO with payload to transmit.
`public int `[`nrf24l01p_set_channel`](#group__drivers__nrf24l01p_1ga784f19aeeddbf78a4c7c60e065a68eda)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,uint8_t chan)`            | Set the RF channel for the nrf24l01+ transceiver.
`public int `[`nrf24l01p_set_address_width`](#group__drivers__nrf24l01p_1gaf697c894e7700f79a630ab17cda70312)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_aw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga69c3db8aebd53129ea24751e48ac9f30)` aw)`            | Set the address width for the nrf24l01+ transceiver.
`public int `[`nrf24l01p_set_payload_width`](#group__drivers__nrf24l01p_1ga22656ee17e2f20910fc24628c9f00615)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,uint8_t width)`            | Set the RX payload width for the nrf24l01+ transceiver.
`public int `[`nrf24l01p_set_tx_address`](#group__drivers__nrf24l01p_1gaca3e8e76f47983345d2c332412409b20)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,const uint8_t * saddr,unsigned int length)`            | Set the TX address for the nrf24l01+ transceiver (byte array).
`public int `[`nrf24l01p_set_tx_address_long`](#group__drivers__nrf24l01p_1ga7b4f64c3d0f6dc219cac21f634c9956c)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,uint64_t saddr,unsigned int length)`            | Set the TX address for the nrf24l01+ transceiver (long int).
`public int `[`nrf24l01p_set_rx_address`](#group__drivers__nrf24l01p_1ga2f2e3c6f4053a3787305b86fec82e875)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,const uint8_t * saddr,unsigned int length)`            | Set the RX address for the nrf24l01+ transceiver (byte array).
`public int `[`nrf24l01p_set_rx_address_long`](#group__drivers__nrf24l01p_1ga1a8924dba5768f27aa90a37d5b17834e)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,uint64_t saddr,unsigned int length)`            | Set the RX address for the nrf24l01+ transceiver (long int).
`public uint64_t `[`nrf24l01p_get_tx_address_long`](#group__drivers__nrf24l01p_1ga6cf21ab2bdea2ca4f4a410ae6cd6cd87)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Get the TX address for the nrf24l01+ transceiver (long int).
`public uint64_t `[`nrf24l01p_get_rx_address_long`](#group__drivers__nrf24l01p_1gab64ed87abb00839d8a3c34685d495253)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)`            | Get the RX address for the nrf24l01+ transceiver (long int).
`public int `[`nrf24l01p_set_datarate`](#group__drivers__nrf24l01p_1ga819bce36c9c7a973d0411fc683d15327)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_dr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1gaa1d5490746292837074743cccffdde89)` dr)`            | Get the TX address for the nrf24l01+ transceiver (long int).
`public int `[`nrf24l01p_get_status`](#group__drivers__nrf24l01p_1ga6d692110c4e0a6454df194d81b1b7cf8)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Get the status (register) of the nrf24l01+ transceiver device.
`public int `[`nrf24l01p_set_power`](#group__drivers__nrf24l01p_1ga338dc7b0be9c3f46fa970e3551ab1771)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,int pwr)`            | Set the transmit power for the nrf24l01+ transceiver device.
`public int `[`nrf24l01p_get_power`](#group__drivers__nrf24l01p_1gad719cae8321f61150452211bf302d1ed)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Get the transmit power for the nrf24l01+ transceiver device.
`public int `[`nrf24l01p_set_txmode`](#group__drivers__nrf24l01p_1ga34ed95f1480bd97a8b4d6e9ccbdcae9c)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Set the nrf24l01+ into TX mode.
`public int `[`nrf24l01p_set_rxmode`](#group__drivers__nrf24l01p_1gaa8fd80fce73e9f3792b50bdc41bbb3da)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Set the nrf24l01+ into RX mode.
`public int `[`nrf24l01p_reset_all_interrupts`](#group__drivers__nrf24l01p_1ga144990d8482dd59ffbf94baf9ed39ea1)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Reset all interrupts on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_reset_interrupts`](#group__drivers__nrf24l01p_1gaaaa552a18be4d50d97432f7ed991780d)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char intrs)`            | Reset interrupts on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_mask_interrupt`](#group__drivers__nrf24l01p_1ga670b7363397fb3332523c84b188ae1de)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char intr)`            | Mask one interrupt on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_unmask_interrupt`](#group__drivers__nrf24l01p_1ga9578af088ec57e3608f99d7ae1cfc9bd)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char intr)`            | Unmask one interrupt on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_enable_pipe`](#group__drivers__nrf24l01p_1gac2ea3ebb696eaa419f3ad47e9aa88090)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)`            | Enable RX datapipe on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_disable_pipe`](#group__drivers__nrf24l01p_1ga58035a3b855450a575d8e3f4e92162f3)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)`            | Disable RX datapipe on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_disable_crc`](#group__drivers__nrf24l01p_1ga813bb2e3c7c258b48abba0b50611d0f1)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Disable CRC error detection on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_enable_crc`](#group__drivers__nrf24l01p_1gac6e2f0dc08a2ab234eb019bbcda3a4be)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_crc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1gad5831d7b5356926a94b6e412ff5225d0)` crc)`            | Enable CRC error detection on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_setup_auto_ack`](#group__drivers__nrf24l01p_1gab6699a54f1a58092dab86513ad3b6623)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,`[`nrf24l01p_retransmit_delay_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga4a1cb3d67069717f63866db5fdc57fdc)` delay_retrans,char count_retrans)`            | Setup and enable automatic ACK and retransmission on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_disable_all_auto_ack`](#group__drivers__nrf24l01p_1gaa5ff0fbdbda2cd60357d849b7f321c1f)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Disable automatic ACK on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_flush_tx_fifo`](#group__drivers__nrf24l01p_1ga576c34f22f889e70ff7db1982402e5eb)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Flush TX FIFO on the nrf24l01+ transceiver.
`public int `[`nrf24l01p_flush_rx_fifo`](#group__drivers__nrf24l01p_1ga17f2cfd204e6515ddfbe63de0da48339)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)`            | Flush RX FIFO on the nrf24l01+ transceiver.
`public void `[`nrf24l01p_rx_cb`](#group__drivers__nrf24l01p_1ga46bdd438475fd2ff054c9013c187571e)`(void * arg)`            | Callback that is called when interrupt occurs on interrupt pin from the nrf24l01+ transceiver.
`struct `[`nrf24l01p_t`](#structnrf24l01p__t) | Structure that represents the hardware setup of the nrf24l01+ transceiver.

## Members

#### `enum `[`nrf24l01p_aw_t`](#group__drivers__nrf24l01p_1ga69c3db8aebd53129ea24751e48ac9f30) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NRF24L01P_AW_3BYTE            | address width is 3 Byte
NRF24L01P_AW_4BYTE            | address width is 4 Byte
NRF24L01P_AW_5BYTE            | address width is 5 Byte

Defines the address width of the nrf24l01+ transceiver.

#### `enum `[`nrf24l01p_dr_t`](#group__drivers__nrf24l01p_1gaa1d5490746292837074743cccffdde89) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NRF24L01P_DR_250KBS            | datarate is 250 kbps
NRF24L01P_DR_1MBS            | datarate is 1 Mbps
NRF24L01P_DR_2MBS            | datarate is 2 Mbps

Defines the RF datarate.

#### `enum `[`nrf24l01p_pwr_t`](#group__drivers__nrf24l01p_1gac14290a1b3bb7a370e5019f60399371c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NRF24L01P_PWR_N18DBM            | power is -18dBm
NRF24L01P_PWR_N12DBM            | power is -12dBm
NRF24L01P_PWR_N6DBM            | power is - 6dBm
NRF24L01P_PWR_0DBM            | power is 0dBm

Defines the RF power level.

#### `enum `[`nrf24l01p_rx_pipe_t`](#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NRF24L01P_PIPE0            | RX pipe 0.
NRF24L01P_PIPE1            | RX pipe 1.
NRF24L01P_PIPE2            | RX pipe 2.
NRF24L01P_PIPE3            | RX pipe 3.
NRF24L01P_PIPE4            | RX pipe 4.
NRF24L01P_PIPE5            | RX pipe 5.

Defines the datapipe on which the receiver searches for packets.

#### `enum `[`nrf24l01p_crc_t`](#group__drivers__nrf24l01p_1gad5831d7b5356926a94b6e412ff5225d0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NRF24L01P_CRC_1BYTE            | encoding scheme generates 1 Byte redundancy
NRF24L01P_CRC_2BYTE            | encoding scheme generates 2 Bytes redundancy

Defines the error detection encoding scheme for the nrf24l01p transceiver.

#### `enum `[`nrf24l01p_retransmit_delay_t`](#group__drivers__nrf24l01p_1ga4a1cb3d67069717f63866db5fdc57fdc) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NRF24L01P_RETR_250US            | retransmit delay is 250us
NRF24L01P_RETR_500US            | retransmit delay is 500us
NRF24L01P_RETR_750US            | retransmit delay is 750us
NRF24L01P_RETR_1000US            | retransmit delay is 1000us
NRF24L01P_RETR_1250US            | retransmit delay is 1250us
NRF24L01P_RETR_1500US            | retransmit delay is 1500us
NRF24L01P_RETR_1750US            | retransmit delay is 1750us
NRF24L01P_RETR_2000US            | retransmit delay is 2000us
NRF24L01P_RETR_2250US            | retransmit delay is 2250us
NRF24L01P_RETR_2500US            | retransmit delay is 2500us
NRF24L01P_RETR_2750US            | retransmit delay is 2750us
NRF24L01P_RETR_3000US            | retransmit delay is 3000us
NRF24L01P_RETR_3250US            | retransmit delay is 3250us
NRF24L01P_RETR_3500US            | retransmit delay is 3500us
NRF24L01P_RETR_3750US            | retransmit delay is 3750us
NRF24L01P_RETR_4000US            | retransmit delay is 4000us

Defines the automatic retransmission delay defined from end of transmission to start of next treansmission.

#### `enum `[`nrf24l01p_rx_event_t`](#group__drivers__nrf24l01p_1ga4f60c67135f67514ea7bae57c91bdacc) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
RCV_PKT_NRF24L01P            | transceiver received data

Defines states for the nrf24l01+ transceiver.

#### `public int `[`nrf24l01p_read_reg`](#group__drivers__nrf24l01p_1ga8ee0165211601964d430d99e1a09fe41)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char reg,char * answer)` 

Read one register of the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `reg` Register address to read from. 

* `answer` Byte to read.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_write_reg`](#group__drivers__nrf24l01p_1ga104edda71a392414d2b8962e43f2f334)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char reg,char write)` 

Write one register to the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `reg` Register address to write to. 

* `write` Byte to write.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_init`](#group__drivers__nrf24l01p_1gadb2a3501ec08503ea5ed48d7fc3100e0)`(`[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` spi,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` ce,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` csn,`[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` irq)` 

Initialize the nrf24l01+ transceiver.

@ note This function initializes the transceiver so that it is ready to use.

#### Parameters
* `dev` Transceiver device to use. 

* `spi` SPI device to use. 

* `ce` GPIO pin to use for chip enable. 

* `csn` GPIO pin to use for chip select. 

* `irq` GPIO pin to use for interrupt request.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_on`](#group__drivers__nrf24l01p_1ga6d29ef7091a0c4881b632496bf4a899a)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Power on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_off`](#group__drivers__nrf24l01p_1ga2b68051054a64aa069630acb1d961a34)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Power off the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public void `[`nrf24l01p_transmit`](#group__drivers__nrf24l01p_1ga8ea2150e3b74e698c801812da0e386b9)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Transmit payload laying in TX FIFO of the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### `public int `[`nrf24l01p_read_payload`](#group__drivers__nrf24l01p_1gaf0eb7a738208403fe93025037634a148)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char * answer,unsigned int size)` 

Read payload from RX FIFO of the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `answer` Buffer to receive bytes to. 

* `size` Number of bytes to transfer. For nrf24l01+ in general 32.

#### Returns
Number of bytes that were transferred. 

#### Returns
-1 on error.

#### `public void `[`nrf24l01p_register`](#group__drivers__nrf24l01p_1gaf9ed59d3aa18cca651542e9573fe6446)`(`[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,unsigned int * pid)` 

Register a given ID to the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `pid` ID to register.

#### `public int `[`nrf24l01p_enable_dynamic_payload`](#group__drivers__nrf24l01p_1ga2b70e748b577e58c0f5fc00341158039)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)` 

Enable dynamic payload for the pipe on give nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe for which dynamic payload is enabled

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_enable_dynamic_ack`](#group__drivers__nrf24l01p_1gabb657dd552879814072076cc4e45b1ab)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Enable dynamic ack for the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_unregister`](#group__drivers__nrf24l01p_1gaa6c878e62a687ef872e5b23e1d407823)`(`[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,unsigned int pid)` 

Unregister the nrf24l01+ transceiver from his ID.

#### Parameters
* `dev` Transceiver device to use. 

* `pid` Actual ID to unregister.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public void `[`nrf24l01p_get_id`](#group__drivers__nrf24l01p_1ga4ea971eb2456bd8776297f9a1aaa9b2e)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,unsigned int * pid)` 

Get ID from the nrf24l01p transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `pid` Transceiver ID.

#### `public void `[`nrf24l01p_start`](#group__drivers__nrf24l01p_1ga91819540030d0d8a25d146bc483a2577)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Start searching packets while in RX mode.

#### Parameters
* `dev` Transceiver device to use.

#### `public void `[`nrf24l01p_stop`](#group__drivers__nrf24l01p_1ga35fac8dd7f5cceb748e3175c85043066)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Stop searching packets while in RX mode.

#### Parameters
* `dev` Transceiver device to use.

#### `public int `[`nrf24l01p_preload`](#group__drivers__nrf24l01p_1gab1a1c4e85f6ec2b9df06d8ed9102d2b2)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char * data,unsigned int size)` 

Preload TX FIFO with payload to transmit.

#### Parameters
* `dev` Transceiver device to use. 

* `data` Buffer to preload. 

* `size` Number of bytes in buffer. For nrf24l01+ e.g. 32

#### Returns
Number of bytes that were transferred. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_channel`](#group__drivers__nrf24l01p_1ga784f19aeeddbf78a4c7c60e065a68eda)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,uint8_t chan)` 

Set the RF channel for the nrf24l01+ transceiver.

To ensure non-overlapping channels in 2Mbps mode, don't use directly neighbouring channels in this mode.

#### Parameters
* `dev` Transceiver device to use. 

* `chan` Buffer to preload.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_address_width`](#group__drivers__nrf24l01p_1gaf697c894e7700f79a630ab17cda70312)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_aw_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga69c3db8aebd53129ea24751e48ac9f30)` aw)` 

Set the address width for the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `aw` Address width (type nrf24l01p_aw_t).

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_payload_width`](#group__drivers__nrf24l01p_1ga22656ee17e2f20910fc24628c9f00615)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,uint8_t width)` 

Set the RX payload width for the nrf24l01+ transceiver.

@ note This function sets the payload width for one packet. If the maximum of 32 bytes is exceeded, this value is set to 32.

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe to set the payload width. 

* `width` Number of bytes per packet in RX payload.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_tx_address`](#group__drivers__nrf24l01p_1gaca3e8e76f47983345d2c332412409b20)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,const uint8_t * saddr,unsigned int length)` 

Set the TX address for the nrf24l01+ transceiver (byte array).

You can either use this function and give it a pointer to a byte array which holds the address to set, or use "nrf24l01p_set_tx_address_long" which requires a uint64_t which holds the address in the LSBs.

#### Parameters
* `dev` Transceiver device to use. 

* `saddr` Byte array which holds the TX address. 

* `length` Number of bytes in address array.

#### Returns
Address length on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_tx_address_long`](#group__drivers__nrf24l01p_1ga7b4f64c3d0f6dc219cac21f634c9956c)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,uint64_t saddr,unsigned int length)` 

Set the TX address for the nrf24l01+ transceiver (long int).

#### Parameters
* `dev` Transceiver device to use. 

* `saddr` Long integer which holds the TX address in LSBs. 

* `length` Number of relevant bytes in uint64_t.

#### Returns
Address length on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_rx_address`](#group__drivers__nrf24l01p_1ga2f2e3c6f4053a3787305b86fec82e875)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,const uint8_t * saddr,unsigned int length)` 

Set the RX address for the nrf24l01+ transceiver (byte array).

You can either use this function and give it a pointer to a byte array which holds the address to set, or use "nrf24l01p_set_rx_address_long" which requires a uint64_t which holds the address in the LSBs.

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe to set the address. 

* `saddr` Byte array which holds the RX address. 

* `length` Number of bytes in address array.

#### Returns
Address length on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_rx_address_long`](#group__drivers__nrf24l01p_1ga1a8924dba5768f27aa90a37d5b17834e)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,uint64_t saddr,unsigned int length)` 

Set the RX address for the nrf24l01+ transceiver (long int).

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe to set the address. 

* `saddr` Long integer which holds the RX address in LSBs. 

* `length` Number of relevant bytes in uint64_t.

#### Returns
Address length on success. 

#### Returns
-1 on error.

#### `public uint64_t `[`nrf24l01p_get_tx_address_long`](#group__drivers__nrf24l01p_1ga6cf21ab2bdea2ca4f4a410ae6cd6cd87)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Get the TX address for the nrf24l01+ transceiver (long int).

#### Parameters
* `dev` Transceiver device to use.

#### Returns
TX address of the nrf24l01+ transceiver. 

#### Returns
-1 on error.

#### `public uint64_t `[`nrf24l01p_get_rx_address_long`](#group__drivers__nrf24l01p_1gab64ed87abb00839d8a3c34685d495253)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)` 

Get the RX address for the nrf24l01+ transceiver (long int).

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe to get the address from.

#### Returns
RX address of the nrf24l01+ transceiver. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_datarate`](#group__drivers__nrf24l01p_1ga819bce36c9c7a973d0411fc683d15327)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_dr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1gaa1d5490746292837074743cccffdde89)` dr)` 

Get the TX address for the nrf24l01+ transceiver (long int).

If you chose 2Mbps you should not allocate directly neighboring RF channels.

#### Parameters
* `dev` Transceiver device to use. 

* `dr` Datarate (of type nrf24l01p_dr_t).

#### Returns
1 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_get_status`](#group__drivers__nrf24l01p_1ga6d692110c4e0a6454df194d81b1b7cf8)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Get the status (register) of the nrf24l01+ transceiver device.

#### Parameters
* `dev` Transceiver device to use.s of the.

#### Returns
Value of the status register.

#### `public int `[`nrf24l01p_set_power`](#group__drivers__nrf24l01p_1ga338dc7b0be9c3f46fa970e3551ab1771)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,int pwr)` 

Set the transmit power for the nrf24l01+ transceiver device.

This function rounds the input values to the nearest possible setting.

#### Parameters
* `dev` Transceiver device to use. 

* `pwr` TX power for the nrf24l01p transceiver.

#### Returns
1 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_get_power`](#group__drivers__nrf24l01p_1gad719cae8321f61150452211bf302d1ed)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Get the transmit power for the nrf24l01+ transceiver device.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
TX power value of the nrf24l01+ transceiver.

#### `public int `[`nrf24l01p_set_txmode`](#group__drivers__nrf24l01p_1ga34ed95f1480bd97a8b4d6e9ccbdcae9c)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Set the nrf24l01+ into TX mode.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_set_rxmode`](#group__drivers__nrf24l01p_1gaa8fd80fce73e9f3792b50bdc41bbb3da)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Set the nrf24l01+ into RX mode.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_reset_all_interrupts`](#group__drivers__nrf24l01p_1ga144990d8482dd59ffbf94baf9ed39ea1)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Reset all interrupts on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
1 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_reset_interrupts`](#group__drivers__nrf24l01p_1gaaaa552a18be4d50d97432f7ed991780d)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char intrs)` 

Reset interrupts on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `intrs` Interrupt mask to reset

#### Returns
1 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_mask_interrupt`](#group__drivers__nrf24l01p_1ga670b7363397fb3332523c84b188ae1de)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char intr)` 

Mask one interrupt on the nrf24l01+ transceiver.

There are three interrupts on the nrf24l01+ which can be masked: "MASK_RX_DR", "MASK_TX_DS" and "MASK_MAX_RT". Theay are defined in "include/nrf24l01p_settings.h".

#### Parameters
* `dev` Transceiver device to use. 

* `intr` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_unmask_interrupt`](#group__drivers__nrf24l01p_1ga9578af088ec57e3608f99d7ae1cfc9bd)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,char intr)` 

Unmask one interrupt on the nrf24l01+ transceiver.

There are three interrupts on the nrf24l01+ which can be unmasked: "MASK_RX_DR", "MASK_TX_DS" and "MASK_MAX_RT". Theay are defined in "include/nrf24l01p_settings.h".

#### Parameters
* `dev` Transceiver device to use. 

* `intr` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_enable_pipe`](#group__drivers__nrf24l01p_1gac2ea3ebb696eaa419f3ad47e9aa88090)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)` 

Enable RX datapipe on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe to enable.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_disable_pipe`](#group__drivers__nrf24l01p_1ga58035a3b855450a575d8e3f4e92162f3)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe)` 

Disable RX datapipe on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe to disable.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_disable_crc`](#group__drivers__nrf24l01p_1ga813bb2e3c7c258b48abba0b50611d0f1)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Disable CRC error detection on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0.

#### `public int `[`nrf24l01p_enable_crc`](#group__drivers__nrf24l01p_1gac6e2f0dc08a2ab234eb019bbcda3a4be)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_crc_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1gad5831d7b5356926a94b6e412ff5225d0)` crc)` 

Enable CRC error detection on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use. 

* `crc` Length of cyclic redundancy check (type nrf24l01p_crc_t).

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_setup_auto_ack`](#group__drivers__nrf24l01p_1gab6699a54f1a58092dab86513ad3b6623)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev,`[`nrf24l01p_rx_pipe_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga416079bdae318cdcd76f56dcaed2b5cf)` pipe,`[`nrf24l01p_retransmit_delay_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__nrf24l01p_1ga4a1cb3d67069717f63866db5fdc57fdc)` delay_retrans,char count_retrans)` 

Setup and enable automatic ACK and retransmission on the nrf24l01+ transceiver.

This function enables automatic acknowledgement for a given RX data pipe and also sets up the mautomatic retransmission behavior.

#### Parameters
* `dev` Transceiver device to use. 

* `pipe` RX pipe to setup auto ack. 

* `delay_retrans` Automatic retransmission delay (type nrf24l01p_retransmit_delay_t) 

* `count_retrans` Auto retransmit count.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_disable_all_auto_ack`](#group__drivers__nrf24l01p_1gaa5ff0fbdbda2cd60357d849b7f321c1f)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Disable automatic ACK on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_flush_tx_fifo`](#group__drivers__nrf24l01p_1ga576c34f22f889e70ff7db1982402e5eb)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Flush TX FIFO on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public int `[`nrf24l01p_flush_rx_fifo`](#group__drivers__nrf24l01p_1ga17f2cfd204e6515ddfbe63de0da48339)`(const `[`nrf24l01p_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_nrf24l01p.md#structnrf24l01p__t)` * dev)` 

Flush RX FIFO on the nrf24l01+ transceiver.

#### Parameters
* `dev` Transceiver device to use.

#### Returns
0 on success. 

#### Returns
-1 on error.

#### `public void `[`nrf24l01p_rx_cb`](#group__drivers__nrf24l01p_1ga46bdd438475fd2ff054c9013c187571e)`(void * arg)` 

Callback that is called when interrupt occurs on interrupt pin from the nrf24l01+ transceiver.

#### Parameters
* `arg` Used to pass transceiver device "dev".

# struct `nrf24l01p_t` 

Structure that represents the hardware setup of the nrf24l01+ transceiver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structnrf24l01p__t_1afec44260632b9c1ebb79626a5dc80bc5) | SPI device to initialize.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`ce`](#structnrf24l01p__t_1af9cd79bac51d98e4ba432aa24aa3ceb4) | GPIO pin to initialize as chip enable.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structnrf24l01p__t_1a165aaebb02bf468d79d76e3afba948b1) | GPIO pin to initialize as chip select.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structnrf24l01p__t_1a9a8d7e17693d381e4acbaaa090ec1a51) | GPIO pin to initialize as interrupt request.
`public unsigned `[`listener`](#structnrf24l01p__t_1a8a65a1d82b10100e592991f707373048) | Place to store an ID in.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structnrf24l01p__t_1afec44260632b9c1ebb79626a5dc80bc5) 

SPI device to initialize.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`ce`](#structnrf24l01p__t_1af9cd79bac51d98e4ba432aa24aa3ceb4) 

GPIO pin to initialize as chip enable.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structnrf24l01p__t_1a165aaebb02bf468d79d76e3afba948b1) 

GPIO pin to initialize as chip select.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`irq`](#structnrf24l01p__t_1a9a8d7e17693d381e4acbaaa090ec1a51) 

GPIO pin to initialize as interrupt request.

#### `public unsigned `[`listener`](#structnrf24l01p__t_1a8a65a1d82b10100e592991f707373048) 

Place to store an ID in.

