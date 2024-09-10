---
title: api-cpu_esp32_esp_can.md
description: api-cpu_esp32_esp_can.md
---
# group `cpu_esp32_esp_can` 

CAN controller driver for ESP32 (esp_can)

The ESP32 intregates a CAN controller which is compatible with the NXP SJA1000 CAN controller. Thus, it is CAN 2.0B specification compliant and supports two message formats:

* Base frame format (11-bit ID)

* Extended frame format (29-bit ID)

* ESP32 CAN does not support CAN-FD and is not CAN-FD tolerant.

* ESP32 CAN does not support SJA1000's sleep mode and wake-up functionality.

As with the SJA1000, the ESP32 CAN controller provides only the data link layer and the physical layer signaling sublayer. Therefore, depending on the physical layer requirements, an external transceiver module is required which converts the `CAN-RX` and `CAN-TX` signals of the ESP32 into `CAN_H` and `CAN_L` bus signals, e.g., the MCP2551 or SN65HVD23X transceiver for compatibility with ISO 11898-2.

The driver realizes a low-level CAN driver interface for the ESP32 CAN controller and provides a CAN DLL device that can be used in RIOT's CAN protocol stack. It uses the ESP32 CAN controller in SJA1000 PeliCAN mode. Please refer the [SJA1000 Datasheet](https://www.nxp.com/documents/data_sheet/SJA1000.pdf) for detailed information about the CAN controller and its programming.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ESP_CAN_MAX_RX_FILTERS`](#group__cpu__esp32__esp__can_1gab4bedfc1c9aa5a0ec9f4becf9b981b42)            | Number of receiver acceptance filters.
`define `[`ESP_CAN_MAX_RX_FRAMES`](#group__cpu__esp32__esp__can_1gaf5783a50441c032b81d375bff2260f43)            | Number of frames in receiver buffer, must be a power of two.
`define `[`HAVE_CAN_T`](#group__cpu__esp32__esp__can_1gaf157b88f267810575b5f71a48691e548)            | CAN device type can_t is redefined by ESP CAN.
`define `[`HAVE_CAN_CONF_T`](#group__cpu__esp32__esp__can_1ga1f144ca1575a4ebb59b99cd6273b5389)            | CAN device configuration type [can_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t) is redefined by ESP CAN.
`struct `[`can`](#structcan) | Low level device structure for ESP32 CAN (extension of candev_t)
`struct `[`can_conf_t`](#structcan__conf__t) | ESP CAN device configuration.

## Members

#### `define `[`ESP_CAN_MAX_RX_FILTERS`](#group__cpu__esp32__esp__can_1gab4bedfc1c9aa5a0ec9f4becf9b981b42) 

Number of receiver acceptance filters.

#### `define `[`ESP_CAN_MAX_RX_FRAMES`](#group__cpu__esp32__esp__can_1gaf5783a50441c032b81d375bff2260f43) 

Number of frames in receiver buffer, must be a power of two.

#### `define `[`HAVE_CAN_T`](#group__cpu__esp32__esp__can_1gaf157b88f267810575b5f71a48691e548) 

CAN device type can_t is redefined by ESP CAN.

#### `define `[`HAVE_CAN_CONF_T`](#group__cpu__esp32__esp__can_1ga1f144ca1575a4ebb59b99cd6273b5389) 

CAN device configuration type [can_conf_t](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t) is redefined by ESP CAN.

# struct `can` 

Low level device structure for ESP32 CAN (extension of candev_t)

STM32 CAN device descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`candev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1gabd7879dd8db04809ca794f5e5ae83f4a)` `[`candev`](#structcan_1a85b10fb35e23e87ee7b6243894d07f8a) | candev base structure
`public `[`canopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga195953bb16685f4a8a4a90fc5ef78dc6)` `[`state`](#structcan_1a20cf01fcd36987fb31fee89c7cf4bdc1) | current state of device
`public struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * `[`tx_frame`](#structcan_1a774b2028bed6f0e2baecadd2d32f51d4) | frame in transmission
`public struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` `[`rx_frames`](#structcan_1a6520c7ff7c2963d357ca8a5393479f21) | frames received
`public struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` `[`rx_filters`](#structcan_1a0e1386e7dac4070b4f7d81f26440ff13) | acceptance filter list
`public uint32_t `[`rx_frames_wptr`](#structcan_1a58848bedfd5aaeecd545e767b970729b) | pointer to ring buffer for write
`public uint32_t `[`rx_frames_rptr`](#structcan_1a730082795046222b244ec51c29e10367) | pointer to ring buffer for read
`public uint32_t `[`rx_frames_num`](#structcan_1a6286dec1652522f935ddff750276ca6e) | number of frames in ring buffer
`public uint32_t `[`rx_filter_num`](#structcan_1a32fd106c301048d4afc54d8834e7d099) | number of acceptance filters
`public bool `[`powered_up`](#structcan_1aa85fe4c3b9557af071c2eaef366fed2c) | device is powered up
`public uint32_t `[`events`](#structcan_1adf7e5e3f37f874801f165abf034ebae3) | events triggered by the last interrupt
`public const `[`can_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t)` * `[`conf`](#structcan_1a7cfeb7401dcd71b2eda8532edd36c8af) | Configuration.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rx_pin`](#structcan_1a76a2d8cf476fc3e17f9174c51754e5fb) | RX pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tx_pin`](#structcan_1a9229d4e0a30fb6adfbd75af4e7b2d237) | TX pin.
`public `[`gpio_af_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#gd32v_2include_2periph__cpu_8h_1a06ed6aad7d9b996fee989c31338138cd)` `[`af`](#structcan_1aafa77df536ce8151811e7c59cc1e1871) | Alternate pin function to use.
`public const struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * `[`tx_mailbox`](#structcan_1a1b316a4220fb242b76de916b8fb19c45) | Tx mailboxes.
`public `[`candev_stm32_rx_fifo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#candev__stm32_8h_1a90f75897a8dc56c6a43d76ae50cdd90a)` `[`rx_fifo`](#structcan_1a3f6ce109c1c5647dde9c670fc954e639) | Rx FIFOs.
`public `[`candev_stm32_isr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#candev__stm32_8h_1aa24457d6fa1a8cc976a551d8b201e927)` `[`isr_flags`](#structcan_1a5ac58679913a20a72978123034d7aedf) | ISR flags.

## Members

#### `public `[`candev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__candev_1gabd7879dd8db04809ca794f5e5ae83f4a)` `[`candev`](#structcan_1a85b10fb35e23e87ee7b6243894d07f8a) 

candev base structure

Common candev struct.

#### `public `[`canopt_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__can__common_1ga195953bb16685f4a8a4a90fc5ef78dc6)` `[`state`](#structcan_1a20cf01fcd36987fb31fee89c7cf4bdc1) 

current state of device

#### `public struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * `[`tx_frame`](#structcan_1a774b2028bed6f0e2baecadd2d32f51d4) 

frame in transmission

#### `public struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` `[`rx_frames`](#structcan_1a6520c7ff7c2963d357ca8a5393479f21) 

frames received

#### `public struct `[`can_filter`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__filter)` `[`rx_filters`](#structcan_1a0e1386e7dac4070b4f7d81f26440ff13) 

acceptance filter list

#### `public uint32_t `[`rx_frames_wptr`](#structcan_1a58848bedfd5aaeecd545e767b970729b) 

pointer to ring buffer for write

#### `public uint32_t `[`rx_frames_rptr`](#structcan_1a730082795046222b244ec51c29e10367) 

pointer to ring buffer for read

#### `public uint32_t `[`rx_frames_num`](#structcan_1a6286dec1652522f935ddff750276ca6e) 

number of frames in ring buffer

#### `public uint32_t `[`rx_filter_num`](#structcan_1a32fd106c301048d4afc54d8834e7d099) 

number of acceptance filters

#### `public bool `[`powered_up`](#structcan_1aa85fe4c3b9557af071c2eaef366fed2c) 

device is powered up

#### `public uint32_t `[`events`](#structcan_1adf7e5e3f37f874801f165abf034ebae3) 

events triggered by the last interrupt

#### `public const `[`can_conf_t`](./doc/starlight-docs/src/content/docs/apidoc/api-cpu_esp32_esp_can.md#structcan__conf__t)` * `[`conf`](#structcan_1a7cfeb7401dcd71b2eda8532edd36c8af) 

Configuration.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rx_pin`](#structcan_1a76a2d8cf476fc3e17f9174c51754e5fb) 

RX pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tx_pin`](#structcan_1a9229d4e0a30fb6adfbd75af4e7b2d237) 

TX pin.

#### `public `[`gpio_af_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#gd32v_2include_2periph__cpu_8h_1a06ed6aad7d9b996fee989c31338138cd)` `[`af`](#structcan_1aafa77df536ce8151811e7c59cc1e1871) 

Alternate pin function to use.

#### `public const struct `[`can_frame`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_can_dll.md#structcan__frame)` * `[`tx_mailbox`](#structcan_1a1b316a4220fb242b76de916b8fb19c45) 

Tx mailboxes.

#### `public `[`candev_stm32_rx_fifo_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#candev__stm32_8h_1a90f75897a8dc56c6a43d76ae50cdd90a)` `[`rx_fifo`](#structcan_1a3f6ce109c1c5647dde9c670fc954e639) 

Rx FIFOs.

#### `public `[`candev_stm32_isr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#candev__stm32_8h_1aa24457d6fa1a8cc976a551d8b201e927)` `[`isr_flags`](#structcan_1a5ac58679913a20a72978123034d7aedf) 

ISR flags.

# struct `can_conf_t` 

ESP CAN device configuration.

bxCAN device configuration

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`bitrate`](#structcan__conf__t_1a819a8110fc5dbf8f420a4a2f8cafc2e7) | Bitrate.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tx_pin`](#structcan__conf__t_1a246bb05804eac5e0d8e9791539d68ee5) | CAN transceiver TX pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rx_pin`](#structcan__conf__t_1a9d10fd3d0294dbef9607ca7e9326c3b6) | CAN transceiver RX pin.
`public CAN_TypeDef * `[`can`](#structcan__conf__t_1a0029bc47a548349299ba999dbac18c63) | CAN device.
`public uint32_t `[`rcc_mask`](#structcan__conf__t_1a6fce13ffd733622fef6fdfb54eb0137a) | RCC mask to enable clock.
`public `[`gpio_af_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#gd32v_2include_2periph__cpu_8h_1a06ed6aad7d9b996fee989c31338138cd)` `[`af`](#structcan__conf__t_1aaab6cfeb65ae273d72ad2922e95c1860) | Alternate pin function to use.
`public bool `[`en_deep_sleep_wake_up`](#structcan__conf__t_1aad7ca267e3e5d473715fc13ec520baae) | Enable deep-sleep wake-up interrupt.
`public CAN_TypeDef * `[`can_master`](#structcan__conf__t_1aa62a749060567bcae75a1702c4c41b47) | Master CAN device.
`public uint32_t `[`master_rcc_mask`](#structcan__conf__t_1abda0caee3b8355d60d08176564753bc5) | Master device RCC mask.
`public uint8_t `[`first_filter`](#structcan__conf__t_1a0f2c99588fc7e604761341dfc5a38d70) | First filter in the bank.
`public uint8_t `[`nb_filters`](#structcan__conf__t_1a00621c15494d0372aaa81aff08d718e6) | Number of filters to use.
`public uint8_t `[`tx_irqn`](#structcan__conf__t_1a94bcf504ca27ba72325036a2f3703639) | TX IRQ channel.
`public uint8_t `[`rx0_irqn`](#structcan__conf__t_1a69c5be9b806fbb77759a83252d9142bc) | RX0 IRQ channel.
`public uint8_t `[`rx1_irqn`](#structcan__conf__t_1a8b6908a6a74e73445ee6eca3a1770071) | RX1 IRQ channel.
`public uint8_t `[`sce_irqn`](#structcan__conf__t_1a20d36d8c14e9f927bb5cb8a42756f9f2) | SCE IRQ channel.
`public uint8_t `[`ttcm`](#structcan__conf__t_1ae686d564bfc9d4d14a7358f9c030645b) | Time triggered communication mode.
`public uint8_t `[`abom`](#structcan__conf__t_1a9449342ff9d0d92f931df126ece84b2f) | Automatic bus-off management.
`public uint8_t `[`awum`](#structcan__conf__t_1a9f42eb2445ab0c50a1fc11a379dff94c) | Automatic wakeup mode.
`public uint8_t `[`nart`](#structcan__conf__t_1a0c1cbc2aa2f15fc1aeb2c1a839ef9ab3) | No automatic retransmission.
`public uint8_t `[`rflm`](#structcan__conf__t_1ad90d93a6ca1aa6c9b23edc98f5248e96) | Receive FIFO locked mode.
`public uint8_t `[`txfp`](#structcan__conf__t_1a65ebc2e476aa43ae43ae3c44a1a092e6) | Transmit FIFO priority.
`public uint8_t `[`lbkm`](#structcan__conf__t_1af204116b27c00c9297bb20c14a4b7e54) | Loopback mode.
`public uint8_t `[`silm`](#structcan__conf__t_1ac9b7c98502069db82709f10d543bc2f5) | Silent mode.

## Members

#### `public uint32_t `[`bitrate`](#structcan__conf__t_1a819a8110fc5dbf8f420a4a2f8cafc2e7) 

Bitrate.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`tx_pin`](#structcan__conf__t_1a246bb05804eac5e0d8e9791539d68ee5) 

CAN transceiver TX pin.

TX pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rx_pin`](#structcan__conf__t_1a9d10fd3d0294dbef9607ca7e9326c3b6) 

CAN transceiver RX pin.

RX pin.

#### `public CAN_TypeDef * `[`can`](#structcan__conf__t_1a0029bc47a548349299ba999dbac18c63) 

CAN device.

#### `public uint32_t `[`rcc_mask`](#structcan__conf__t_1a6fce13ffd733622fef6fdfb54eb0137a) 

RCC mask to enable clock.

#### `public `[`gpio_af_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#gd32v_2include_2periph__cpu_8h_1a06ed6aad7d9b996fee989c31338138cd)` `[`af`](#structcan__conf__t_1aaab6cfeb65ae273d72ad2922e95c1860) 

Alternate pin function to use.

#### `public bool `[`en_deep_sleep_wake_up`](#structcan__conf__t_1aad7ca267e3e5d473715fc13ec520baae) 

Enable deep-sleep wake-up interrupt.

#### `public CAN_TypeDef * `[`can_master`](#structcan__conf__t_1aa62a749060567bcae75a1702c4c41b47) 

Master CAN device.

#### `public uint32_t `[`master_rcc_mask`](#structcan__conf__t_1abda0caee3b8355d60d08176564753bc5) 

Master device RCC mask.

#### `public uint8_t `[`first_filter`](#structcan__conf__t_1a0f2c99588fc7e604761341dfc5a38d70) 

First filter in the bank.

For a master channel it must be 0. For a slave channel, it is used without checking with the master channel, beware bot to overwrite the master config.

#### `public uint8_t `[`nb_filters`](#structcan__conf__t_1a00621c15494d0372aaa81aff08d718e6) 

Number of filters to use.

Must be less or equal to CAN_STM32_NB_FILTER - first_filter

#### `public uint8_t `[`tx_irqn`](#structcan__conf__t_1a94bcf504ca27ba72325036a2f3703639) 

TX IRQ channel.

#### `public uint8_t `[`rx0_irqn`](#structcan__conf__t_1a69c5be9b806fbb77759a83252d9142bc) 

RX0 IRQ channel.

#### `public uint8_t `[`rx1_irqn`](#structcan__conf__t_1a8b6908a6a74e73445ee6eca3a1770071) 

RX1 IRQ channel.

#### `public uint8_t `[`sce_irqn`](#structcan__conf__t_1a20d36d8c14e9f927bb5cb8a42756f9f2) 

SCE IRQ channel.

#### `public uint8_t `[`ttcm`](#structcan__conf__t_1ae686d564bfc9d4d14a7358f9c030645b) 

Time triggered communication mode.

#### `public uint8_t `[`abom`](#structcan__conf__t_1a9449342ff9d0d92f931df126ece84b2f) 

Automatic bus-off management.

#### `public uint8_t `[`awum`](#structcan__conf__t_1a9f42eb2445ab0c50a1fc11a379dff94c) 

Automatic wakeup mode.

#### `public uint8_t `[`nart`](#structcan__conf__t_1a0c1cbc2aa2f15fc1aeb2c1a839ef9ab3) 

No automatic retransmission.

#### `public uint8_t `[`rflm`](#structcan__conf__t_1ad90d93a6ca1aa6c9b23edc98f5248e96) 

Receive FIFO locked mode.

#### `public uint8_t `[`txfp`](#structcan__conf__t_1a65ebc2e476aa43ae43ae3c44a1a092e6) 

Transmit FIFO priority.

#### `public uint8_t `[`lbkm`](#structcan__conf__t_1af204116b27c00c9297bb20c14a4b7e54) 

Loopback mode.

#### `public uint8_t `[`silm`](#structcan__conf__t_1ac9b7c98502069db82709f10d543bc2f5) 

Silent mode.

