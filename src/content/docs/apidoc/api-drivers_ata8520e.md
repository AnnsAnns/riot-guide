---
title: api-drivers_ata8520e.md
description: api-drivers_ata8520e.md
---
# group `drivers_ata8520e` 

Device driver for Microchip ATA8520E transceiver (Sigfox)

For more information, please refer to the datasheet [http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9409-Smart-RF-ATA8520E_Datasheet.pdf](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9409-Smart-RF-ATA8520E_Datasheet.pdf)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@158`](#group__drivers__ata8520e_1gaaa1faf9307efabe7471b4443de4ba66b)            | return codes
`enum `[`@159`](#group__drivers__ata8520e_1ga14061dd054afd472999a4f4f6cdf3923)            | device internal states
`enum `[`ata8520e_status_type_t`](#group__drivers__ata8520e_1ga9905263a49a3747bb3d7979dbb035ff4)            | device module status
`enum `[`ata8520e_atmel_status_t`](#group__drivers__ata8520e_1ga9d67a0b34f854252dbac515a54ecb747)            | Sigfox statuses.
`enum `[`ata8520e_sigfox_status_t`](#group__drivers__ata8520e_1gafe9e9ddace8cf7974ae94c0fc452dbce)            | Sigfox statuses.
`public int `[`ata8520e_init`](#group__drivers__ata8520e_1ga284ac3227d2103c7ac675780d220d4ac)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,const `[`ata8520e_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__params__t)` * params)`            | Initialize the device.
`public void `[`ata8520e_system_reset`](#group__drivers__ata8520e_1gac2ae3c22fca11ffb1ec713b625499d7f)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev)`            | Perform a complete reset of the device.
`public void `[`ata8520e_read_atmel_version`](#group__drivers__ata8520e_1ga04282dd379888941dbe81355b6174c2a)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,uint8_t * version)`            | Return the Atmel version of the device.
`public void `[`ata8520e_read_sigfox_version`](#group__drivers__ata8520e_1gaa0a6a7ec91b51f3ffa1ca52b8137225d)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,char * version)`            | Return the Atmel version of the device.
`public void `[`ata8520e_read_pac`](#group__drivers__ata8520e_1ga9e733136c4af233aff37c5f672666af1)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,char * pac)`            | Return the porting authorization code (PAC) available in the device.
`public void `[`ata8520e_read_id`](#group__drivers__ata8520e_1ga57e2f583f33e988788d35a5ee3f18edc)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,char * id)`            | Return the ID of the device.
`public int `[`ata8520e_send_frame`](#group__drivers__ata8520e_1ga15cf41cbb94ca225fafe68b0c24d680f)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,uint8_t * payload,uint8_t payload_len)`            | Send a frame.
`public int `[`ata8520e_send_receive_frame`](#group__drivers__ata8520e_1gafc0ef2cced703df73b02fa7c5aa73fb6)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,uint8_t * payload,uint8_t payload_len,uint8_t * rx_payload)`            | Send a frame and wait for a RX packet.
`public int `[`ata8520e_send_bit`](#group__drivers__ata8520e_1ga628a92e62c6e48822218d95a718a2e72)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,bool bit)`            | Send a bit.
`struct `[`ata8520e_params_t`](#structata8520e__params__t) | Initialization parameters.
`struct `[`ata8520e_t`](#structata8520e__t) | device descriptor

## Members

#### `enum `[`@158`](#group__drivers__ata8520e_1gaaa1faf9307efabe7471b4443de4ba66b) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ATA8520E_OK            | Everything is fine.
ATA8520E_ERR_SPI            | An error occurred with SPI.
ATA8520E_ERR_GPIO_INT            | An error occurred with interrupt pin.
ATA8520E_ERR_GPIO_RESET            | An error occurred with reset pin.
ATA8520E_ERR_GPIO_POWER            | An error occurred with power pin.
ATA8520E_ERR_EVENT_TIMEOUT            | An expected event never happened.

return codes

#### `enum `[`@159`](#group__drivers__ata8520e_1ga14061dd054afd472999a4f4f6cdf3923) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ATA8520E_STATE_IDLE            | Device is in idle state.
ATA8520E_STATE_INIT            | Device is in initialization phase.
ATA8520E_STATE_TX            | Device is in TX mode.
ATA8520E_STATE_RX            | Device is in RX mode, just after TX.

device internal states

#### `enum `[`ata8520e_status_type_t`](#group__drivers__ata8520e_1ga9905263a49a3747bb3d7979dbb035ff4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ATA8520E_SSM            | SoC System Management status.
ATA8520E_ATMEL            | Atmel status.
ATA8520E_SIGFOX            | Sigfox status.

device module status

#### `enum `[`ata8520e_atmel_status_t`](#group__drivers__ata8520e_1ga9d67a0b34f854252dbac515a54ecb747) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ATA8520E_ATMEL_OK            | No error.
ATA8520E_ATMEL_COMMAND_ERROR            | Command error / not supported.
ATA8520E_ATMEL_GENERIC_ERROR            | Generic error.
ATA8520E_ATMEL_FREQUENCY_ERROR            | Frequency error.
ATA8520E_ATMEL_USAGE_ERROR            | Usage error.
ATA8520E_ATMEL_OPENING_ERROR            | Opening error.
ATA8520E_ATMEL_CLOSING_ERROR            | Closing error.
ATA8520E_ATMEL_SEND_ERROR            | Send error.

Sigfox statuses.

See ATA8520E datasheet, section 2.1.2.10, page 12

#### `enum `[`ata8520e_sigfox_status_t`](#group__drivers__ata8520e_1gafe9e9ddace8cf7974ae94c0fc452dbce) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
ATA8520E_SIGFOX_OK            | No error.
ATA8520E_SIGFOX_MANUFACTURER_ERROR            | Manufacturer error.
ATA8520E_SIGFOX_ID_OR_KEY_ERROR            | ID or key error.
ATA8520E_SIGFOX_STATE_MACHINE_ERROR            | State machine error.
ATA8520E_SIGFOX_FRAME_SIZE_ERROR            | Frame size error.
ATA8520E_SIGFOX_MANUFACTURER_SEND_ERROR            | Manufacturer send error.
ATA8520E_SIGFOX_GET_VOLTAGE_TEMP_ERROR            | Get voltage/temperature error.
ATA8520E_SIGFOX_CLOSE_ERROR            | Close issues encountered.
ATA8520E_SIGFOX_API_ERROR            | API error indication.
ATA8520E_SIGFOX_GET_PN9_ERROR            | Error getting PN9.
ATA8520E_SIGFOX_GET_FREQUENCY_ERROR            | Error getting frequency.
ATA8520E_SIGFOX_BUILDING_FRAME_ERROR            | Error building frame.
ATA8520E_SIGFOX_DELAY_ROUTINE_ERROR            | Error in delay routine.
ATA8520E_SIGFOX_CALLBACK_ERROR            | Callback causes error.
ATA8520E_SIGFOX_TIMING_ERROR            | Timing error.
ATA8520E_SIGFOX_FREQUENCY_ERROR            | Frequency error.

Sigfox statuses.

See ATA8520E datasheet, section 2.1.2.10, page 12

#### `public int `[`ata8520e_init`](#group__drivers__ata8520e_1ga284ac3227d2103c7ac675780d220d4ac)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,const `[`ata8520e_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__params__t)` * params)` 

Initialize the device.

This will also initialize the CS pin as a GPIO output, without pull resistors and the interrupt pin handler to manage events.

#### Parameters
* `dev` Pointer to device descriptor 

* `params` Pointer to SPI settings

#### Returns
ATA8520E_OK on success 

#### Returns
-ATA8520E_ERR_SPI on SPI initialization error 

#### Returns
-ATA8520E_ERR_GPIO_INT on interrupt pin initialization error 

#### Returns
-ATA8520E_ERR_GPIO_RESET on reset pin initialization error 

#### Returns
-ATA8520E_ERR_GPIO_POWER on power pin initialization error

#### `public void `[`ata8520e_system_reset`](#group__drivers__ata8520e_1gac2ae3c22fca11ffb1ec713b625499d7f)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev)` 

Perform a complete reset of the device.

#### Parameters
* `dev` Pointer to device descriptor

#### `public void `[`ata8520e_read_atmel_version`](#group__drivers__ata8520e_1ga04282dd379888941dbe81355b6174c2a)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,uint8_t * version)` 

Return the Atmel version of the device.

#### Parameters
* `dev` Pointer to device descriptor 

* `version` Pointer to the string containing the version, must be able to hold 2 characters

#### `public void `[`ata8520e_read_sigfox_version`](#group__drivers__ata8520e_1gaa0a6a7ec91b51f3ffa1ca52b8137225d)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,char * version)` 

Return the Atmel version of the device.

#### Parameters
* `dev` Pointer to device descriptor 

* `version` String containing the version, must be able to hold 11 characters

#### `public void `[`ata8520e_read_pac`](#group__drivers__ata8520e_1ga9e733136c4af233aff37c5f672666af1)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,char * pac)` 

Return the porting authorization code (PAC) available in the device.

#### Parameters
* `dev` Pointer to device descriptor 

* `pac` String containing the pac, must be able to hold 17 characters

#### `public void `[`ata8520e_read_id`](#group__drivers__ata8520e_1ga57e2f583f33e988788d35a5ee3f18edc)`(const `[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,char * id)` 

Return the ID of the device.

#### Parameters
* `dev` Pointer to device descriptor 

* `id` String containing the ID, must be able to hold 9 characters

#### `public int `[`ata8520e_send_frame`](#group__drivers__ata8520e_1ga15cf41cbb94ca225fafe68b0c24d680f)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,uint8_t * payload,uint8_t payload_len)` 

Send a frame.

#### Parameters
* `dev` Pointer to device descriptor 

* `payload` The payload to send 

* `payload_len` The length of the payload to send

#### Returns
ATA8520E_OK if the send was successful 

#### Returns
-ATA8520E_ERR_EVENT_TIMEOUT if the send failed

#### `public int `[`ata8520e_send_receive_frame`](#group__drivers__ata8520e_1gafc0ef2cced703df73b02fa7c5aa73fb6)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,uint8_t * payload,uint8_t payload_len,uint8_t * rx_payload)` 

Send a frame and wait for a RX packet.

#### Parameters
* `dev` Pointer to device descriptor 

* `payload` The payload to send 

* `payload_len` The length of the payload to send 

* `rx_payload` The payload received

#### Returns
ATA8520E_OK if the send was successful 

#### Returns
-ATA8520E_ERR_EVENT_TIMEOUT if the send failed

#### `public int `[`ata8520e_send_bit`](#group__drivers__ata8520e_1ga628a92e62c6e48822218d95a718a2e72)`(`[`ata8520e_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__t)` * dev,bool bit)` 

Send a bit.

#### Parameters
* `dev` Pointer to device descriptor 

* `bit` The bit to send

#### Returns
ATA8520E_OK if the send was successful 

#### Returns
-ATA8520E_ERR_EVENT_TIMEOUT if the send failed

# struct `ata8520e_params_t` 

Initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structata8520e__params__t_1a465a617c9653f53917fc52fc84d4a3f1) | SPI device.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structata8520e__params__t_1a0a6a7527066e5ea4599114fb9bb16d15) | SPI clock speed.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structata8520e__params__t_1aa89d81acdf3225c856b09adf2d524455) | Chip select pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structata8520e__params__t_1aed095b28a28d21e5056dd3f415cde0a2) | IRQ pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`power_pin`](#structata8520e__params__t_1a3ea733c83aaabeaf216fdcf97c086114) | Power pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structata8520e__params__t_1a25a4323efa961ce3fae721b88e8d7c9a) | Reset pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structata8520e__params__t_1a465a617c9653f53917fc52fc84d4a3f1) 

SPI device.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structata8520e__params__t_1a0a6a7527066e5ea4599114fb9bb16d15) 

SPI clock speed.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structata8520e__params__t_1aa89d81acdf3225c856b09adf2d524455) 

Chip select pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structata8520e__params__t_1aed095b28a28d21e5056dd3f415cde0a2) 

IRQ pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`power_pin`](#structata8520e__params__t_1a3ea733c83aaabeaf216fdcf97c086114) 

Power pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`reset_pin`](#structata8520e__params__t_1a25a4323efa961ce3fae721b88e8d7c9a) 

Reset pin.

# struct `ata8520e_t` 

device descriptor

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ata8520e_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__params__t)` `[`params`](#structata8520e__t_1aaf3dbacb60c451902fc9f7fb9d559d1c) | Device parameters.
`public uint8_t `[`internal_state`](#structata8520e__t_1a54d5126b48e1de7cce6ae1ac879b73fc) | current state of the device
`public uint8_t `[`event_received`](#structata8520e__t_1a6a7dc61f04eb65a7075d4ff8b738bebb) | check if an event was received
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`event_lock`](#structata8520e__t_1a03822c12c8101691c50830c0330d16e8) | mutex for waiting for event

## Members

#### `public `[`ata8520e_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ata8520e.md#structata8520e__params__t)` `[`params`](#structata8520e__t_1aaf3dbacb60c451902fc9f7fb9d559d1c) 

Device parameters.

#### `public uint8_t `[`internal_state`](#structata8520e__t_1a54d5126b48e1de7cce6ae1ac879b73fc) 

current state of the device

#### `public uint8_t `[`event_received`](#structata8520e__t_1a6a7dc61f04eb65a7075d4ff8b738bebb) 

check if an event was received

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`event_lock`](#structata8520e__t_1a03822c12c8101691c50830c0330d16e8) 

mutex for waiting for event

