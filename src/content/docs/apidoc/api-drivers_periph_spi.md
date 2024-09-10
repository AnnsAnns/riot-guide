---
title: api-drivers_periph_spi.md
description: api-drivers_periph_spi.md
---
# group `drivers_periph_spi` 

Low-level SPI peripheral driver.

This interface defines an abstraction for using a CPU's hardware SPI units. The interface only supports SPI master mode.

As SPI buses can have multiple devices connected to them they are to be considered as shared resources. To reflect this, the SPI interface is based on a transaction model. This requires that the bus needs to be acquired before usage and released afterwards, using the `[spi_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042)` and the `[spi_release()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga9e36100f2b58917366872fca2f9f3bc6)` functions.

This interface supports both software and hardware chip select lines. This is reflected by the cpi_cs_t type, which overloads the gpio_t type with platform specific values for defining platform dependent hardware chip select lines.

Some devices have however very uncommon requirements on the usage and the timings of their chip select line. For those cases this interface allows to manage the chip select line manually from the user code (e.g. by calling gpio_set/clear explicitly) while deactivating the SPI driver internal chip select handling by passing [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) as CS parameter.

In the time, when the SPI bus is not used, the SPI unit should be in low-power mode to save energy.

The SPI unit's initialization is split into 3 parts:* `[spi_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gada6e52541835bc04dcc6ec62f2c74c3a)` should be called once for each SPI unit defined by a board during system initialization.

* `[spi_init_cs()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga1ed20d7e5b67938bd35139a819a8c982)` should be called during device driver initialization, as each chip select pin/line is used uniquely by a specific device, i.e. chip select lines are no shared resource.

* `[spi_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042)` needs to be called for each new transaction. This function configures the bus with specific parameters (clock, mode) for the duration of that transaction.

(Low-) Power ImplicationsAs SPI buses are shared peripherals and the interfaces implements a transaction based paradigm, we leverage this for the SPI peripherals power management. After calling [spi_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gada6e52541835bc04dcc6ec62f2c74c3a), the SPI peripheral **should** be completely powered off (e.g. through peripheral clock gating). It **should** subsequently only be powered on and enabled in between [spi_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042) and [spi_release()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga9e36100f2b58917366872fca2f9f3bc6) blocks.

In case the SPI driver implementation puts the active thread to sleep during data transfer (e.g. when using DMA), the implementation might need to block certain power states during that time.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SPI_DMA_THRESHOLD_BYTES`](#group__drivers__periph__spi_1ga84c9407ece0a6914b037d6ee66f55dd1)            | Threshold under which polling transfers are used instead of DMA TODO: determine at run-time based on SPI clock.
`define `[`SPI_DEV`](#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)            | Default SPI device access macro.
`define `[`SPI_UNDEF`](#group__drivers__periph__spi_1ga0d0505b52e78af9251f6a1921d30214e)            | Define global value for undefined SPI device.
`define `[`SPI_CS_UNDEF`](#group__drivers__periph__spi_1ga8b0f414ed05adc20a504e8705587f9f8)            | Define value for unused CS line.
`define `[`SPI_HWCS`](#group__drivers__periph__spi_1ga292c9a0a5b03329a153ad28343ff2e09)            | Default SPI hardware chip select access macro.
`enum `[`@237`](#group__drivers__periph__spi_1gac12627b43234a2c5005eca7a2a0a88cd)            | Status codes used by the SPI driver interface.
`enum `[`spi_mode_t`](#group__drivers__periph__spi_1gac4b206a51636d91c5cffcbcee458c3cb)            | Available SPI modes, defining the configuration of clock polarity and clock phase.
`enum `[`spi_clk_t`](#group__drivers__periph__spi_1gae81cec9f03084065c25089e514a57337)            | Available SPI clock speeds.
`public void `[`spi_init`](#group__drivers__periph__spi_1gada6e52541835bc04dcc6ec62f2c74c3a)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus)`            | Basic initialization of the given SPI bus.
`public void `[`spi_init_pins`](#group__drivers__periph__spi_1ga9fcf9ffd48cdc62c6019a2f07aab4ae9)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus)`            | Initialize the used SPI bus pins, i.e.
`public int `[`spi_init_cs`](#group__drivers__periph__spi_1ga1ed20d7e5b67938bd35139a819a8c982)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs)`            | Initialize the given chip select pin.
`public void `[`spi_deinit_pins`](#group__drivers__periph__spi_1gab53bb266f74e4aaab19955c9fd199205)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)`            | Change the pins of the given SPI bus back to plain GPIO functionality.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`spi_pin_miso`](#group__drivers__periph__spi_1ga206fc7968c27b40069ec5c3d7de03eb3)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)`            | Get the MISO pin of the given SPI bus.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`spi_pin_mosi`](#group__drivers__periph__spi_1ga5a1dd3972f11c2383927855a4daf5d89)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)`            | Get the MOSI pin of the given SPI bus.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`spi_pin_clk`](#group__drivers__periph__spi_1ga64ad55ec9f29b85502d74a1a4230cd45)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)`            | Get the CLK pin of the given SPI bus.
`public int `[`spi_init_with_gpio_mode`](#group__drivers__periph__spi_1ga5d72c85b39d67a5069d210fae1529c6c)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,const `[`spi_gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_spi.md#structspi__gpio__mode__t)` * mode)`            | Initialize MOSI/MISO/SCLK pins with adapted GPIO modes.
`public void `[`spi_acquire`](#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,`[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` mode,`[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` clk)`            | Start a new SPI transaction.
`public void `[`spi_release`](#group__drivers__periph__spi_1ga9e36100f2b58917366872fca2f9f3bc6)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus)`            | Finish an ongoing SPI transaction by releasing the given SPI bus.
`public uint8_t `[`spi_transfer_byte`](#group__drivers__periph__spi_1ga6e2f58f7b719d1e8ac5cb05bdeed7c9b)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,bool cont,uint8_t out)`            | Transfer one byte on the given SPI bus.
`public void `[`spi_transfer_bytes`](#group__drivers__periph__spi_1gae6ca850b7cb6142b76deecb831357447)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,bool cont,const void * out,void * in,size_t len)`            | Transfer a number bytes using the given SPI bus.
`public uint8_t `[`spi_transfer_reg`](#group__drivers__periph__spi_1ga2593203a71900ff6d8346398bc5241a1)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,uint8_t reg,uint8_t out)`            | Transfer one byte to/from a given register address.
`public void `[`spi_transfer_regs`](#group__drivers__periph__spi_1ga6577f294a7dd426badb3d69356bfc850)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,uint8_t reg,const void * out,void * in,size_t len)`            | Transfer a number of bytes to/from a given register address.
`public inline static uint16_t `[`spi_transfer_u16_be`](#group__drivers__periph__spi_1ga98f8710acaf25e728848a499df0b2d27)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,bool cont,uint16_t host_number)`            | Transfer a 16 bit number in big endian byte order.
`struct `[`spi_gpio_mode_t`](#structspi__gpio__mode__t) | SPI gpio mode.

## Members

#### `define `[`CONFIG_SPI_DMA_THRESHOLD_BYTES`](#group__drivers__periph__spi_1ga84c9407ece0a6914b037d6ee66f55dd1) 

Threshold under which polling transfers are used instead of DMA TODO: determine at run-time based on SPI clock.

#### `define `[`SPI_DEV`](#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) 

Default SPI device access macro.

#### `define `[`SPI_UNDEF`](#group__drivers__periph__spi_1ga0d0505b52e78af9251f6a1921d30214e) 

Define global value for undefined SPI device.

#### `define `[`SPI_CS_UNDEF`](#group__drivers__periph__spi_1ga8b0f414ed05adc20a504e8705587f9f8) 

Define value for unused CS line.

#### `define `[`SPI_HWCS`](#group__drivers__periph__spi_1ga292c9a0a5b03329a153ad28343ff2e09) 

Default SPI hardware chip select access macro.

Per default, we map all hardware chip select lines to be not defined. If an implementation makes use of HW chip select lines, this value needs to be overridden by the corresponding CPU.

#### `enum `[`@237`](#group__drivers__periph__spi_1gac12627b43234a2c5005eca7a2a0a88cd) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SPI_OK            | everything went as planned
SPI_NODEV            | invalid SPI bus specified
SPI_NOCS            | invalid chip select line specified
SPI_NOMODE            | selected mode is not supported
SPI_NOCLK            | selected clock value is not supported

Status codes used by the SPI driver interface.

> Deprecated: Use negative errno codes instead. The enum is still provided for backwards compatibility

#### `enum `[`spi_mode_t`](#group__drivers__periph__spi_1gac4b206a51636d91c5cffcbcee458c3cb) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SPI_MODE_0            | CPOL=0, CPHA=0.
SPI_MODE_1            | CPOL=0, CPHA=1.
SPI_MODE_2            | CPOL=1, CPHA=0.
SPI_MODE_3            | CPOL=1, CPHA=1.
SPI_MODE_0            | CPOL=0, CPHA=0.
SPI_MODE_1            | CPOL=0, CPHA=1.
SPI_MODE_2            | CPOL=1, CPHA=0.
SPI_MODE_3            | CPOL=1, CPHA=1.
SPI_MODE_0            | CPOL=0, CPHA=0.
SPI_MODE_1            | CPOL=0, CPHA=1.
SPI_MODE_2            | CPOL=1, CPHA=0.
SPI_MODE_3            | CPOL=1, CPHA=1.

Available SPI modes, defining the configuration of clock polarity and clock phase.

RIOT is using the mode numbers as commonly defined by most vendors ([https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus#Mode_numbers](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus#Mode_numbers)):

* MODE_0: CPOL=0, CPHA=0 - The first data bit is sampled by the receiver on the first SCK rising SCK edge (this mode is used most often).

* MODE_1: CPOL=0, CPHA=1 - The first data bit is sampled by the receiver on the second rising SCK edge.

* MODE_2: CPOL=1, CPHA=0 - The first data bit is sampled by the receiver on the first falling SCK edge.

* MODE_3: CPOL=1, CPHA=1 - The first data bit is sampled by the receiver on the second falling SCK edge.

#### `enum `[`spi_clk_t`](#group__drivers__periph__spi_1gae81cec9f03084065c25089e514a57337) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SPI_CLK_100KHZ            | drive the SPI bus with 100KHz
SPI_CLK_400KHZ            | drive the SPI bus with 400KHz
SPI_CLK_1MHZ            | drive the SPI bus with 1MHz
SPI_CLK_5MHZ            | drive the SPI bus with 5MHz
SPI_CLK_10MHZ            | drive the SPI bus with 10MHz
SPI_CLK_100KHZ            | drive the SPI bus with 100KHz
SPI_CLK_400KHZ            | drive the SPI bus with 400KHz
SPI_CLK_1MHZ            | drive the SPI bus with 1MHz
SPI_CLK_5MHZ            | drive the SPI bus with 5MHz
SPI_CLK_10MHZ            | drive the SPI bus with 10MHz
SPI_CLK_100KHZ            | 100 kHz
SPI_CLK_400KHZ            | 400 kHz
SPI_CLK_1MHZ            | 1 MHz
SPI_CLK_5MHZ            | 5 MHz
SPI_CLK_10MHZ            | 10 MHz not supported, falling back to 5 MHz
SPI_CLK_100KHZ            | 100 kHz
SPI_CLK_400KHZ            | 400 kHz
SPI_CLK_1MHZ            | 1 MHz
SPI_CLK_5MHZ            | 5 MHz
SPI_CLK_10MHZ            | 10 MHz not supported, falling back to 5 MHz
SPI_CLK_100KHZ            | drive the SPI bus with 100KHz
SPI_CLK_400KHZ            | drive the SPI bus with 400KHz
SPI_CLK_1MHZ            | drive the SPI bus with 1MHz
SPI_CLK_5MHZ            | drive the SPI bus with 5MHz
SPI_CLK_10MHZ            | drive the SPI bus with 10MHz

Available SPI clock speeds.

The actual speed of the bus can vary to some extend, as the combination of CPU clock and available prescaler values on certain platforms may not make the exact values possible.

#### `public void `[`spi_init`](#group__drivers__periph__spi_1gada6e52541835bc04dcc6ec62f2c74c3a)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus)` 

Basic initialization of the given SPI bus.

This function does the basic initialization including pin configuration for MISO, MOSI, and CLK pins. After initialization, the given device should be in power down state.

This function is intended to be called by the board initialization code during system startup to prepare the (shared) SPI device for further usage. It uses the board specific initialization parameters as defined in the board's `periph_conf.h`.

Errors (e.g. invalid `bus` parameter) are not signaled through a return value, but should be signaled using the [assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53) function internally.

This function MUST not be called more than once per bus!

#### Parameters
* `bus` SPI device to initialize

#### `public void `[`spi_init_pins`](#group__drivers__periph__spi_1ga9fcf9ffd48cdc62c6019a2f07aab4ae9)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus)` 

Initialize the used SPI bus pins, i.e.

MISO, MOSI, and CLK

After calling spi_init, the pins must be initialized (i.e. spi_init is calling this function internally). In normal cases, this function will not be used. But there are some devices (e.g. CC110x), that use SPI bus lines also for other purposes and need the option to dynamically re-configure one or more of the used pins. So they can take control over certain pins and return control back to the SPI driver using this function.

This function must be called after [spi_deinit_pins](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gab53bb266f74e4aaab19955c9fd199205) to return the pins to SPI operation.

The pins used are configured in the board's periph_conf.h.

#### Parameters
* `bus` SPI device the pins are configure for

#### `public int `[`spi_init_cs`](#group__drivers__periph__spi_1ga1ed20d7e5b67938bd35139a819a8c982)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs)` 

Initialize the given chip select pin.

The chip select can be any generic GPIO pin (e.g. [GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)), or it can be a hardware chip select line. The existence and number of hardware chip select lines depends on the underlying platform and the actual pins used for hardware chip select lines are defined in the board's `periph_conf.h`.

Define the used chip select line using the [SPI_HWCS(x)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga292c9a0a5b03329a153ad28343ff2e09) macro for hardware chip select line `x` or the [GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1) macro for using any GPIO pin for manual chip select.

#### Parameters
* `bus` SPI device that is used with the given CS line 

* `cs` chip select pin to initialize

#### Parameters
* `0` success 

* `-ENXIO` invalid device 

* `-EINVAL` invalid CS pin/line

#### `public void `[`spi_deinit_pins`](#group__drivers__periph__spi_1gab53bb266f74e4aaab19955c9fd199205)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)` 

Change the pins of the given SPI bus back to plain GPIO functionality.

The pin mux of the MISO, MOSI and CLK pins of the bus will be changed back to default (GPIO) mode and the SPI bus is powered off. This allows to use the SPI pins for another function and return to SPI functionality again by calling [spi_init_pins()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga9fcf9ffd48cdc62c6019a2f07aab4ae9)

If you want the pin to be in a defined state, call [gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955) on it.

The bus MUST not be acquired before initializing it, as this is handled internally by the [spi_deinit_pins()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gab53bb266f74e4aaab19955c9fd199205) function!

Calls to [spi_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042) will block until [spi_init_pins()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga9fcf9ffd48cdc62c6019a2f07aab4ae9) is called again.

Until this is implemented on all platforms, this requires the periph_spi_reconfigure feature to be used.

#### Parameters
* `dev` the device to de-initialize

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`spi_pin_miso`](#group__drivers__periph__spi_1ga206fc7968c27b40069ec5c3d7de03eb3)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)` 

Get the MISO pin of the given SPI bus.

#### Parameters
* `dev` The device to query

Until this is implemented on all platforms, this requires the periph_spi_reconfigure feature to be used.

#### Returns
The GPIO used for the SPI MISO line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`spi_pin_mosi`](#group__drivers__periph__spi_1ga5a1dd3972f11c2383927855a4daf5d89)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)` 

Get the MOSI pin of the given SPI bus.

#### Parameters
* `dev` The device to query

Until this is implemented on all platforms, this requires the periph_spi_reconfigure feature to be used.

#### Returns
The GPIO used for the SPI MOSI line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`spi_pin_clk`](#group__drivers__periph__spi_1ga64ad55ec9f29b85502d74a1a4230cd45)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` dev)` 

Get the CLK pin of the given SPI bus.

#### Parameters
* `dev` The device to query

Until this is implemented on all platforms, this requires the periph_spi_reconfigure feature to be used.

#### Returns
The GPIO used for the SPI CLK line.

#### `public int `[`spi_init_with_gpio_mode`](#group__drivers__periph__spi_1ga5d72c85b39d67a5069d210fae1529c6c)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,const `[`spi_gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_spi.md#structspi__gpio__mode__t)` * mode)` 

Initialize MOSI/MISO/SCLK pins with adapted GPIO modes.

#### Parameters
* `bus` SPI device that is used with the given CS line 

* `mode` a pointer to a struct containing the 3 modes to use on each pin

#### Parameters
* `0` success 

* `<0` error

#### `public void `[`spi_acquire`](#group__drivers__periph__spi_1ga31d89f231c0d6b18a71f2c8f3804e042)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,`[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` mode,`[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` clk)` 

Start a new SPI transaction.

Starting a new SPI transaction will get exclusive access to the SPI bus and configure it according to the given values. If another SPI transaction is active when this function is called, this function will block until the other transaction is complete (spi_relase was called).

#### Parameters
* `bus` SPI device to access 

* `cs` chip select pin/line to use, set to SPI_CS_UNDEF if chip select should not be handled by the SPI driver 

* `mode` mode to use for the new transaction 

* `clk` bus clock speed to use for the transaction

All parameters are valid and supported, otherwise an assertion blows up (if assertions are enabled).

#### `public void `[`spi_release`](#group__drivers__periph__spi_1ga9e36100f2b58917366872fca2f9f3bc6)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus)` 

Finish an ongoing SPI transaction by releasing the given SPI bus.

After release, the given SPI bus should be fully powered down until acquired again.

#### Parameters
* `bus` SPI device to release

#### `public uint8_t `[`spi_transfer_byte`](#group__drivers__periph__spi_1ga6e2f58f7b719d1e8ac5cb05bdeed7c9b)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,bool cont,uint8_t out)` 

Transfer one byte on the given SPI bus.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use, set to SPI_CS_UNDEF if chip select should not be handled by the SPI driver 

* `cont` if true, keep device selected after transfer 

* `out` byte to send out

#### Returns
the received byte

#### `public void `[`spi_transfer_bytes`](#group__drivers__periph__spi_1gae6ca850b7cb6142b76deecb831357447)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,bool cont,const void * out,void * in,size_t len)` 

Transfer a number bytes using the given SPI bus.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use, set to SPI_CS_UNDEF if chip select should not be handled by the SPI driver 

* `cont` if true, keep device selected after transfer 

* `out` buffer to send data from, set NULL if only receiving 

* `in` buffer to read into, set NULL if only sending 

* `len` number of bytes to transfer

#### `public uint8_t `[`spi_transfer_reg`](#group__drivers__periph__spi_1ga2593203a71900ff6d8346398bc5241a1)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,uint8_t reg,uint8_t out)` 

Transfer one byte to/from a given register address.

This function is a shortcut function for easier handling of SPI devices that implement a register based access scheme.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use, set to SPI_CS_UNDEF if chip select should not be handled by the SPI driver 

* `reg` register address to transfer data to/from 

* `out` byte to send

#### Returns
value that was read from the given register address

#### `public void `[`spi_transfer_regs`](#group__drivers__periph__spi_1ga6577f294a7dd426badb3d69356bfc850)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,uint8_t reg,const void * out,void * in,size_t len)` 

Transfer a number of bytes to/from a given register address.

This function is a shortcut function for easier handling of SPI devices that implement a register based access scheme.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use, set to SPI_CS_UNDEF if chip select should not be handled by the SPI driver 

* `reg` register address to transfer data to/from 

* `out` buffer to send data from, set NULL if only receiving 

* `in` buffer to read into, set NULL if only sending 

* `len` number of bytes to transfer

#### `public inline static uint16_t `[`spi_transfer_u16_be`](#group__drivers__periph__spi_1ga98f8710acaf25e728848a499df0b2d27)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,`[`spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gaf5fbaf43946646c588c9372e8906c99e)` cs,bool cont,uint16_t host_number)` 

Transfer a 16 bit number in big endian byte order.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use, set to SPI_CS_UNDEF if chip select should not be handled by the SPI driver 

* `cont` if true, keep device selected after transfer 

* `host_number` number to transfer in host byte order 

#### Returns
The 16 bit number received in host byte order

# struct `spi_gpio_mode_t` 

SPI gpio mode.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`mosi`](#structspi__gpio__mode__t_1a2b4e16191996b713da602b35e013f869) | GPIO mode used for MOSI pin.
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`miso`](#structspi__gpio__mode__t_1a57c388aa8ee79e4930f925ee56506cfd) | GPIO mode used for MISO pin.
`public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`sclk`](#structspi__gpio__mode__t_1acff1d1b3f92a853b571133f949dab54b) | GPIO mode used for SCLK pin.

## Members

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`mosi`](#structspi__gpio__mode__t_1a2b4e16191996b713da602b35e013f869) 

GPIO mode used for MOSI pin.

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`miso`](#structspi__gpio__mode__t_1a57c388aa8ee79e4930f925ee56506cfd) 

GPIO mode used for MISO pin.

#### `public `[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` `[`sclk`](#structspi__gpio__mode__t_1acff1d1b3f92a853b571133f949dab54b) 

GPIO mode used for SCLK pin.

