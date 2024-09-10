---
title: api-drivers_periph_uart.md
description: api-drivers_periph_uart.md
---
# group `drivers_periph_uart` 

Low-level UART peripheral driver.

This is a basic UART (Universal Asynchronous Receiver Transmitter) interface to allow platform independent access to the MCU's serial communication abilities. This interface is intentionally designed to be as simple as possible, to allow for easy implementation and maximum portability.

The simple interface provides capabilities to initialize and configure the serial communication module, which automatically enables for receiving data, as well as writing data to the UART port, which means transmitting data. The UART device and the corresponding pins need to be mapped in `RIOT/boards/ * /include/periph_conf.h`. Furthermore, you need to select the symbol rate for initialization which is typically {9600, 19200, 38400, 57600, 115200} baud. Additionally, you should register a callback function that is executed in interrupt context when data is being received. The driver will then read the received data byte, call the registered callback function and pass the received data to it via its argument. The interface enforces the receiving to be implemented in an interrupt driven mode. Thus, you never know how many bytes are going to be received and might want to handle that in your specific callback function. The transmit function can be implemented in any way. You can also configure parity, the number of data and stop bits, i.e. such combinations as 8-E-1, 7-N-2 etc. 8-N-1 mode is set by default.

By default the `[UART_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)` device of each board is initialized and mapped to STDIO in RIOT which is used for standard input/output functions like `[printf()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)` or `puts()`.

(Low-) Power ImplicationsAfter initialization, the UART peripheral **should** be powered on and active. The UART can later be explicitly put to sleep and woken up by calling the [uart_poweron()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga97ca086aeee451fcad48db4518ba325a) and [uart_poweroff()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga066a6312f829046f201ff41ecc6960ea) functions. Once woken up using [uart_poweron()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga97ca086aeee451fcad48db4518ba325a), the UART **should** transparently continue it's previously configured operation.

While the UART is active, the implementation might need to block certain power states.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_UART_DMA_THRESHOLD_BYTES`](#group__drivers__periph__uart_1ga3afd539e8cdb4be585a568781b6659bf)            | Threshold under which polling transfers are used instead of DMA TODO: determine at run-time based on baudrate.
`define `[`UART_UNDEF`](#group__drivers__periph__uart_1ga3604c25a8762ee60bf570df4a3150f5c)            | Default UART undefined value.
`define `[`UART_DEV`](#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294)            | Default UART device access macro.
`enum `[`@238`](#group__drivers__periph__uart_1gabe4eb8a7f480877e96248c1c2b2b96a4)            | Possible UART return values.
`enum `[`uart_parity_t`](#group__drivers__periph__uart_1ga6bcc37e31dd40c204b4ac6f6189e8878)            | Definition of possible parity modes.
`enum `[`uart_data_bits_t`](#group__drivers__periph__uart_1gadc68b8fd9ded3990f84129df23fee798)            | Definition of possible data bits lengths in a UART frame.
`enum `[`uart_stop_bits_t`](#group__drivers__periph__uart_1ga6da57a73bbdbf830b845d4116f8341d7)            | Definition of possible stop bits lengths in a UART frame.
`public int `[`uart_init`](#group__drivers__periph__uart_1ga340343f063bf9df778019304f21b3f27)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,uint32_t baud,`[`uart_rx_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gac4baa58903938817c0b1690a41463df0)` rx_cb,void * arg)`            | Initialize a given UART device.
`public void `[`uart_deinit_pins`](#group__drivers__periph__uart_1ga0f9f17e1bd5cbbb69b709c60bbf326ed)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Change the pins of the given UART back to plain GPIO functionality.
`public void `[`uart_init_pins`](#group__drivers__periph__uart_1gac3c6f029dbd157caa21bfc63da6d8c29)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Initialize the used UART pins, i.e.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_rx`](#group__drivers__periph__uart_1gadc2ab2a012aee7b2ddeb279415da2967)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Get the RX pin of the given UART.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_tx`](#group__drivers__periph__uart_1gaa2eda994244471f3e2306d5f60fc635d)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Get the TX pin of the given UART.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_cts`](#group__drivers__periph__uart_1gaa37089530a2be054566096c5ca87cfe9)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Get the CTS pin of the given UART.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_rts`](#group__drivers__periph__uart_1gad41da0380887bc30c5fce4eaf3b815f1)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Get the RTS pin of the given UART.
`public void `[`uart_rxstart_irq_configure`](#group__drivers__periph__uart_1ga0f2e50dd0d37815835675a9ed1150465)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,`[`uart_rxstart_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga133475b65de1acf5b4a2c61062ad454d)` cb,void * arg)`            | Configure the function that will be called when a start condition is detected.
`public void `[`uart_rxstart_irq_enable`](#group__drivers__periph__uart_1gac924ab55ba0f4c05a9496a66c056ed60)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Enable the RX start interrupt.
`public void `[`uart_rxstart_irq_disable`](#group__drivers__periph__uart_1ga60f57a8f4476ebcb6f84b8600665b946)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Disable the RX start interrupt.
`public void `[`uart_collision_detect_enable`](#group__drivers__periph__uart_1ga1f68d525505cb43f136cf18dc5f67110)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Enables collision detection check of the UART.
`public void `[`uart_collision_detect_disable`](#group__drivers__periph__uart_1gae2c87ca4e43366cc84285e25a2f20008)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Disables collision detection check of the UART.
`public bool `[`uart_collision_detected`](#group__drivers__periph__uart_1ga9b3fcb8a55875f2c5c4f723be310ed0a)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Disables collision detection check of the UART.
`public int `[`uart_mode`](#group__drivers__periph__uart_1gae280e80d4c18f72bc0bb67cff3d0ced9)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,`[`uart_data_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1adc68b8fd9ded3990f84129df23fee798)` data_bits,`[`uart_parity_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6bcc37e31dd40c204b4ac6f6189e8878)` parity,`[`uart_stop_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6da57a73bbdbf830b845d4116f8341d7)` stop_bits)`            | Setup parity, data and stop bits for a given UART device.
`public void `[`uart_write`](#group__drivers__periph__uart_1gae2360fb0e880c387cfc02dd0cbd1c113)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,const uint8_t * data,size_t len)`            | Write data from the given buffer to the specified UART device.
`public void `[`uart_poweron`](#group__drivers__periph__uart_1ga97ca086aeee451fcad48db4518ba325a)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Power on the given UART device.
`public void `[`uart_poweroff`](#group__drivers__periph__uart_1ga066a6312f829046f201ff41ecc6960ea)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Power off the given UART device.
`public void `[`uart_enable_tx`](#group__drivers__periph__uart_1ga0256858e49537ce0dfbf14e8c0275d35)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Enable the TX line one the given UART.
`public void `[`uart_disable_tx`](#group__drivers__periph__uart_1ga522bdce35dd52dc502ca671b00105c92)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)`            | Disable the TX line one the given UART.
`struct `[`uart_isr_ctx_t`](#structuart__isr__ctx__t) | Interrupt context for a UART device.

## Members

#### `define `[`CONFIG_UART_DMA_THRESHOLD_BYTES`](#group__drivers__periph__uart_1ga3afd539e8cdb4be585a568781b6659bf) 

Threshold under which polling transfers are used instead of DMA TODO: determine at run-time based on baudrate.

#### `define `[`UART_UNDEF`](#group__drivers__periph__uart_1ga3604c25a8762ee60bf570df4a3150f5c) 

Default UART undefined value.

#### `define `[`UART_DEV`](#group__drivers__periph__uart_1gafc5afd63560d27731d2517b3005f3294) 

Default UART device access macro.

#### `enum `[`@238`](#group__drivers__periph__uart_1gabe4eb8a7f480877e96248c1c2b2b96a4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UART_OK            | everything in order
UART_NODEV            | invalid UART device given
UART_NOBAUD            | given symbol rate is not applicable
UART_NOMODE            | given mode is not applicable
UART_INTERR            | all other internal errors

Possible UART return values.

> Deprecated: Use the errno constants directly instead.

#### `enum `[`uart_parity_t`](#group__drivers__periph__uart_1ga6bcc37e31dd40c204b4ac6f6189e8878) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UART_PARITY_NONE            | no parity
UART_PARITY_EVEN            | even parity
UART_PARITY_ODD            | odd parity
UART_PARITY_MARK            | mark parity
UART_PARITY_SPACE            | space parity
UART_PARITY_NONE            | no parity
UART_PARITY_EVEN            | even parity
UART_PARITY_ODD            | odd parity
UART_PARITY_MARK            | mark parity
UART_PARITY_SPACE            | space parity

Definition of possible parity modes.

#### `enum `[`uart_data_bits_t`](#group__drivers__periph__uart_1gadc68b8fd9ded3990f84129df23fee798) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UART_DATA_BITS_5            | 5 data bits
UART_DATA_BITS_6            | 6 data bits
UART_DATA_BITS_7            | 7 data bits
UART_DATA_BITS_8            | 8 data bits
UART_DATA_BITS_5            | 5 data bits
UART_DATA_BITS_6            | 6 data bits
UART_DATA_BITS_7            | 7 data bits
UART_DATA_BITS_8            | 8 data bits

Definition of possible data bits lengths in a UART frame.

#### `enum `[`uart_stop_bits_t`](#group__drivers__periph__uart_1ga6da57a73bbdbf830b845d4116f8341d7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
UART_STOP_BITS_1            | 1 stop bit
UART_STOP_BITS_2            | 2 stop bits
UART_STOP_BITS_1            | 1 stop bit
UART_STOP_BITS_2            | 2 stop bits

Definition of possible stop bits lengths in a UART frame.

#### `public int `[`uart_init`](#group__drivers__periph__uart_1ga340343f063bf9df778019304f21b3f27)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,uint32_t baud,`[`uart_rx_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gac4baa58903938817c0b1690a41463df0)` rx_cb,void * arg)` 

Initialize a given UART device.

The UART device will be initialized with the following configuration:

* 8 data bits

* no parity

* 1 stop bit

* symbol rate as given

If no callback parameter is given (rx_cb := NULL), the UART will be initialized in TX only mode.

#### Parameters
* `uart` UART device to initialize 

* `baud` desired symbol rate in baud 

* `rx_cb` receive callback, executed in interrupt context once for every byte that is received (RX buffer filled), set to NULL for TX only mode 

* `arg` optional context passed to the callback functions

#### Parameters
* `0` Success 

* `-ENODEV` Invalid UART device 

* `-ENOTSUP` Unsupported symbol rate 

* `<0` On other errors

#### `public void `[`uart_deinit_pins`](#group__drivers__periph__uart_1ga0f9f17e1bd5cbbb69b709c60bbf326ed)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Change the pins of the given UART back to plain GPIO functionality.

The pin mux of the RX and TX pins of the bus will be changed back to default (GPIO) mode and the UART is powered off. This allows to use the UART pins for another function and return to UART functionality again by calling [uart_init_pins](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gac3c6f029dbd157caa21bfc63da6d8c29)

If you want the pin to be in a defined state, call [gpio_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955) on it.

Until this is implemented on all platforms, this requires the periph_uart_reconfigure feature to be used.

#### Parameters
* `uart` the device to de-initialize

#### `public void `[`uart_init_pins`](#group__drivers__periph__uart_1gac3c6f029dbd157caa21bfc63da6d8c29)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Initialize the used UART pins, i.e.

RX and TX

After calling uart_init, the pins must be initialized (i.e. uart_init is calling this function internally). In normal cases, this function will not be used. But there are some devices, that use UART bus lines also for other purposes and need the option to dynamically re-configure one or more of the used pins. So they can take control over certain pins and return control back to the UART driver using this function.

The pins used are configured in the board's periph_conf.h.

#### Parameters
* `uart` UART device the pins are configure for

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_rx`](#group__drivers__periph__uart_1gadc2ab2a012aee7b2ddeb279415da2967)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Get the RX pin of the given UART.

#### Parameters
* `uart` The device to query

Until this is implemented on all platforms, this requires the periph_uart_reconfigure feature to be used.

#### Returns
The GPIO used for the UART RX line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_tx`](#group__drivers__periph__uart_1gaa2eda994244471f3e2306d5f60fc635d)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Get the TX pin of the given UART.

#### Parameters
* `uart` The device to query

Until this is implemented on all platforms, this requires the periph_uart_reconfigure feature to be used.

#### Returns
The GPIO used for the UART TX line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_cts`](#group__drivers__periph__uart_1gaa37089530a2be054566096c5ca87cfe9)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Get the CTS pin of the given UART.

#### Parameters
* `uart` The device to query

Until this is implemented on all platforms, this requires the periph_uart_reconfigure feature to be used.

#### Returns
The GPIO used for the UART CTS line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`uart_pin_rts`](#group__drivers__periph__uart_1gad41da0380887bc30c5fce4eaf3b815f1)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Get the RTS pin of the given UART.

#### Parameters
* `uart` The device to query

Until this is implemented on all platforms, this requires the periph_uart_reconfigure feature to be used.

#### Returns
The GPIO used for the UART RTS line.

#### `public void `[`uart_rxstart_irq_configure`](#group__drivers__periph__uart_1ga0f2e50dd0d37815835675a9ed1150465)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,`[`uart_rxstart_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga133475b65de1acf5b4a2c61062ad454d)` cb,void * arg)` 

Configure the function that will be called when a start condition is detected.

This will not enable / disable the generation of the RX start interrupt.

You have to add the module `periph_uart_rxstart_irq` to your project to enable this function

#### Parameters
* `uart` The device to configure 

* `cb` The function called when a start condition is detected 

* `arg` Optional function argument

#### `public void `[`uart_rxstart_irq_enable`](#group__drivers__periph__uart_1gac924ab55ba0f4c05a9496a66c056ed60)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Enable the RX start interrupt.

You have to add the module `periph_uart_rxstart_irq` to your project to enable this function

#### Parameters
* `uart` The device to configure

#### `public void `[`uart_rxstart_irq_disable`](#group__drivers__periph__uart_1ga60f57a8f4476ebcb6f84b8600665b946)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Disable the RX start interrupt.

You have to add the module `periph_uart_rxstart_irq` to your project to enable this function

#### Parameters
* `uart` The device to configure

#### `public void `[`uart_collision_detect_enable`](#group__drivers__periph__uart_1ga1f68d525505cb43f136cf18dc5f67110)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Enables collision detection check of the UART.

This assumes the UART is connected to a bus where RX and TX are connected. After each sent byte it is checked whether the same byte could be received.

This disables the RX interrupt.

You have to add the module `periph_uart_rxstart_irq` to your project to enable this function

#### Parameters
* `uart` The device to configure

#### `public void `[`uart_collision_detect_disable`](#group__drivers__periph__uart_1gae2c87ca4e43366cc84285e25a2f20008)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Disables collision detection check of the UART.

If an RX interrupt was configured before, it is enabled again.
You have to add the module `periph_uart_rxstart_irq` to your project to enable this function

#### Parameters
* `uart` The device to configure

#### `public bool `[`uart_collision_detected`](#group__drivers__periph__uart_1ga9b3fcb8a55875f2c5c4f723be310ed0a)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Disables collision detection check of the UART.

If an RX interrupt was configured before, it is enabled again.
You have to add the module `periph_uart_rxstart_irq` to your project to enable this function

#### Parameters
* `uart` The device to probe

#### Returns
true if a collision occurred during the last transder

#### `public int `[`uart_mode`](#group__drivers__periph__uart_1gae280e80d4c18f72bc0bb67cff3d0ced9)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,`[`uart_data_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1adc68b8fd9ded3990f84129df23fee798)` data_bits,`[`uart_parity_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6bcc37e31dd40c204b4ac6f6189e8878)` parity,`[`uart_stop_bits_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a6da57a73bbdbf830b845d4116f8341d7)` stop_bits)` 

Setup parity, data and stop bits for a given UART device.

#### Parameters
* `uart` UART device to configure 

* `data_bits` number of data bits in a UART frame 

* `parity` parity mode 

* `stop_bits` number of stop bits in a UART frame

#### Parameters
* `0` Success 

* `-ENOTSUP` Given configuration not supported 

* `<0` Other error

#### `public void `[`uart_write`](#group__drivers__periph__uart_1gae2360fb0e880c387cfc02dd0cbd1c113)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart,const uint8_t * data,size_t len)` 

Write data from the given buffer to the specified UART device.

This function is blocking, as it will only return after `len` bytes from the given buffer have been send. The way this data is send is up to the implementation: active waiting, interrupt driven, DMA, etc.

#### Parameters
* `uart` UART device to use for transmission 

* `data` data buffer to send 

* `len` number of bytes to send

#### `public void `[`uart_poweron`](#group__drivers__periph__uart_1ga97ca086aeee451fcad48db4518ba325a)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Power on the given UART device.

#### Parameters
* `uart` the UART device to power on

#### `public void `[`uart_poweroff`](#group__drivers__periph__uart_1ga066a6312f829046f201ff41ecc6960ea)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Power off the given UART device.

#### Parameters
* `uart` the UART device to power off

#### `public void `[`uart_enable_tx`](#group__drivers__periph__uart_1ga0256858e49537ce0dfbf14e8c0275d35)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Enable the TX line one the given UART.

requires the `periph_uart_tx_ondemand` feature

#### Parameters
* `uart` the UART device start TX on

#### `public void `[`uart_disable_tx`](#group__drivers__periph__uart_1ga522bdce35dd52dc502ca671b00105c92)`(`[`uart_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1ga83a92464bff5eb42f085e06e553d52b1)` uart)` 

Disable the TX line one the given UART.

requires the `periph_uart_tx_ondemand` feature

#### Parameters
* `uart` the UART device to stop TX on

# struct `uart_isr_ctx_t` 

Interrupt context for a UART device.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uart_rx_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gac4baa58903938817c0b1690a41463df0)` `[`rx_cb`](#structuart__isr__ctx__t_1aa60adcebe7216a0f79af3a3082a4bf55) | data received interrupt callback
`public void * `[`arg`](#structuart__isr__ctx__t_1ab8839a548b2ddbb4fca16f9f252c41aa) | argument to data received callback

## Members

#### `public `[`uart_rx_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__uart_1gac4baa58903938817c0b1690a41463df0)` `[`rx_cb`](#structuart__isr__ctx__t_1aa60adcebe7216a0f79af3a3082a4bf55) 

data received interrupt callback

#### `public void * `[`arg`](#structuart__isr__ctx__t_1ab8839a548b2ddbb4fca16f9f252c41aa) 

argument to data received callback

