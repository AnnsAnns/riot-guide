---
title: api-drivers_soft_spi.md
description: api-drivers_soft_spi.md
---
# group `drivers_soft_spi` 

Software implemented Serial Peripheral Interface bus.

This module provides a software implemented Serial Peripheral Interface bus. It is intended to be used in situation where hardware spi is not available. The signatures of the functions are similar to the functions declared in [spi.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#spi_8h) The clock speed is approximated by using xtimer_usleep. Currently only the use of MOSI in master mode is implemented. Therefore receiving data from a slave is currently not possible.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@265`](#group__drivers__soft__spi_1ga5ae760a5c9b7253fc22419bcd09c6a5e)            | Status codes used by the SPI driver interface.
`enum `[`soft_spi_mode_t`](#group__drivers__soft__spi_1ga0067f31877b2a3787c4de2a0413bac65)            | Available SPI modes, defining the configuration of clock polarity and clock phase.
`enum `[`soft_spi_clk_t`](#group__drivers__soft__spi_1gab891c834ce3f8f77ce8daacef7a2498e)            | Available SPI clock speeds.
`public void `[`soft_spi_init`](#group__drivers__soft__spi_1ga3fba8676c9791f23c6abe5d5b5f7ed23)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus)`            | Basic initialization of the given SPI bus.
`public void `[`soft_spi_init_pins`](#group__drivers__soft__spi_1ga6e280901c8cf33449914eade5fb286c4)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus)`            | Initialize the used SPI bus pins, i.e.
`public int `[`soft_spi_init_cs`](#group__drivers__soft__spi_1ga07c7ca4c0eb01f6549d703cf62721c4a)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs)`            | Initialize the given chip select pin.
`public void `[`soft_spi_acquire`](#group__drivers__soft__spi_1gaa2c9bc86085aa365dea262ab5eb39db9)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,`[`soft_spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga0067f31877b2a3787c4de2a0413bac65)` mode,`[`soft_spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1gab891c834ce3f8f77ce8daacef7a2498e)` clk)`            | Start a new SPI transaction.
`public void `[`soft_spi_release`](#group__drivers__soft__spi_1ga7f0096dc0e43289840e1009a003b0964)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus)`            | Finish an ongoing SPI transaction by releasing the given SPI bus.
`public uint8_t `[`soft_spi_transfer_byte`](#group__drivers__soft__spi_1gaa87443cfb62417da0c536158852539b3)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,bool cont,uint8_t out)`            | Transfer one byte on the given SPI bus Currently only the use of MOSI in master mode is implemented.
`public void `[`soft_spi_transfer_bytes`](#group__drivers__soft__spi_1gaaa5d55d3931d1d5a8f56ce3cfa872b06)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,bool cont,const void * out,void * in,size_t len)`            | Transfer a number bytes using the given SPI bus.
`public uint8_t `[`soft_spi_transfer_reg`](#group__drivers__soft__spi_1gaa840ffea1885e473aee969c8f0d4aa33)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,uint8_t reg,uint8_t out)`            | Transfer one byte to/from a given register address.
`public void `[`soft_spi_transfer_regs`](#group__drivers__soft__spi_1ga2617424a4549e30f61ceb90a7941725a)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,uint8_t reg,const void * out,void * in,size_t len)`            | Transfer a number of bytes to/from a given register address.
`struct `[`soft_spi_conf_t`](#structsoft__spi__conf__t) | Software SPI port descriptor.

## Members

#### `enum `[`@265`](#group__drivers__soft__spi_1ga5ae760a5c9b7253fc22419bcd09c6a5e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SOFT_SPI_OK            | everything went as planned
SOFT_SPI_NODEV            | invalid SPI bus specified
SOFT_SPI_NOCS            | invalid chip select line specified
SOFT_SPI_NOMODE            | selected mode is not supported
SOFT_SPI_NOCLK            | selected clock value is not supported

Status codes used by the SPI driver interface.

#### `enum `[`soft_spi_mode_t`](#group__drivers__soft__spi_1ga0067f31877b2a3787c4de2a0413bac65) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SOFT_SPI_MODE_0            | CPOL=0, CPHA=0.
SOFT_SPI_MODE_1            | CPOL=0, CPHA=1.
SOFT_SPI_MODE_2            | CPOL=1, CPHA=0.
SOFT_SPI_MODE_3            | CPOL=1, CPHA=1.

Available SPI modes, defining the configuration of clock polarity and clock phase.

RIOT is using the mode numbers as commonly defined by most vendors ([https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus#Mode_numbers](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus#Mode_numbers)):

* MODE_0: CPOL=0, CPHA=0 - The first data bit is sampled by the receiver on the first SCK rising SCK edge (this mode is used most often).

* MODE_1: CPOL=0, CPHA=1 - The first data bit is sampled by the receiver on the second rising SCK edge.

* MODE_2: CPOL=1, CPHA=0 - The first data bit is sampled by the receiver on the first falling SCK edge.

* MODE_3: CPOL=1, CPHA=1 - The first data bit is sampled by the receiver on the second falling SCK edge.

#### `enum `[`soft_spi_clk_t`](#group__drivers__soft__spi_1gab891c834ce3f8f77ce8daacef7a2498e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SOFT_SPI_CLK_100KHZ            | drive the SPI bus with less than 100kHz
SOFT_SPI_CLK_1MHZ            | drive the SPI bus with less than 1MHz
SOFT_SPI_CLK_DEFAULT            | drive the SPI bus with maximum speed possible

Available SPI clock speeds.

The actual speed of the bus varies between CPUs and depends on the speed of the processing. The values of the enum entries represent the approximate delay between two clock edges.

#### `public void `[`soft_spi_init`](#group__drivers__soft__spi_1ga3fba8676c9791f23c6abe5d5b5f7ed23)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus)` 

Basic initialization of the given SPI bus.

This function does the basic initialization including pin configuration for MISO, MOSI, and CLK pins.

Errors (e.g. invalid `bus` parameter) are not signaled through a return value, but should be signaled using the [assert()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#assert_8h_1a3153a272f18d0f805028fce7e4337b53) function internally.

This function MUST not be called more than once per bus!

#### Parameters
* `bus` SPI device to initialize

#### `public void `[`soft_spi_init_pins`](#group__drivers__soft__spi_1ga6e280901c8cf33449914eade5fb286c4)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus)` 

Initialize the used SPI bus pins, i.e.

MISO, MOSI, and CLK

After calling soft_spi_init, the pins must be initialized. In normal cases, this function will not be used.

The pins used are configured in the board's periph_conf.h.

#### Parameters
* `bus` SPI device the pins are configure for

#### `public int `[`soft_spi_init_cs`](#group__drivers__soft__spi_1ga07c7ca4c0eb01f6549d703cf62721c4a)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs)` 

Initialize the given chip select pin.

The chip select must be any generic GPIO pin (e.g. [GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)). It must be called once before the use of the chip select pin in transaction.

#### Parameters
* `bus` SPI device that is used with the given CS line 

* `cs` chip select pin to initialize

#### Returns
SOFT_SPI_OK on success 

#### Returns
SOFT_SPI_NODEV on invalid device 

#### Returns
SOFT_SPI_NOCS on invalid CS pin/line

#### `public void `[`soft_spi_acquire`](#group__drivers__soft__spi_1gaa2c9bc86085aa365dea262ab5eb39db9)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,`[`soft_spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga0067f31877b2a3787c4de2a0413bac65)` mode,`[`soft_spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1gab891c834ce3f8f77ce8daacef7a2498e)` clk)` 

Start a new SPI transaction.

Starting a new SPI transaction will get exclusive access to the SPI bus and configure it according to the given values. If another SPI transaction is active when this function is called, this function will block until the other transaction is complete (soft_spi_relase was called).

This function expects the `bus` and the `cs` parameters to be valid (they are checked in soft_spi_init and soft_spi_init_cs before)

#### Parameters
* `bus` SPI device to access 

* `cs` chip select pin/line to use 

* `mode` mode to use for the new transaction 

* `clk` bus clock speed to use for the transaction

#### `public void `[`soft_spi_release`](#group__drivers__soft__spi_1ga7f0096dc0e43289840e1009a003b0964)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus)` 

Finish an ongoing SPI transaction by releasing the given SPI bus.

After release, the given SPI bus should be fully powered down until acquired again.

#### Parameters
* `bus` SPI device to release

#### `public uint8_t `[`soft_spi_transfer_byte`](#group__drivers__soft__spi_1gaa87443cfb62417da0c536158852539b3)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,bool cont,uint8_t out)` 

Transfer one byte on the given SPI bus Currently only the use of MOSI in master mode is implemented.

Therefore receiving data from a slave is currently not possible.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use 

* `cont` if true, keep device selected after transfer 

* `out` byte to send out, set NULL if only receiving

#### Returns
the received byte

#### `public void `[`soft_spi_transfer_bytes`](#group__drivers__soft__spi_1gaaa5d55d3931d1d5a8f56ce3cfa872b06)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,bool cont,const void * out,void * in,size_t len)` 

Transfer a number bytes using the given SPI bus.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use 

* `cont` if true, keep device selected after transfer 

* `out` buffer to send data from, set NULL if only receiving 

* `in` buffer to read into, set NULL if only sending 

* `len` number of bytes to transfer

#### `public uint8_t `[`soft_spi_transfer_reg`](#group__drivers__soft__spi_1gaa840ffea1885e473aee969c8f0d4aa33)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,uint8_t reg,uint8_t out)` 

Transfer one byte to/from a given register address.

This function is a shortcut function for easier handling of SPI devices that implement a register based access scheme.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use 

* `reg` register address to transfer data to/from 

* `out` byte to send, set NULL if only receiving data

#### Returns
value that was read from the given register address

#### `public void `[`soft_spi_transfer_regs`](#group__drivers__soft__spi_1ga2617424a4549e30f61ceb90a7941725a)`(`[`soft_spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga3673409c1743be03fbd6ad8ac8bdad2c)` bus,`[`soft_spi_cs_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga6d93b1294961ea929e354f99b976d1c1)` cs,uint8_t reg,const void * out,void * in,size_t len)` 

Transfer a number of bytes to/from a given register address.

This function is a shortcut function for easier handling of SPI devices that implement a register based access scheme.

#### Parameters
* `bus` SPI device to use 

* `cs` chip select pin/line to use 

* `reg` register address to transfer data to/from 

* `out` buffer to send data from, set NULL if only receiving 

* `in` buffer to read into, set NULL if only sending 

* `len` number of bytes to transfer

# struct `soft_spi_conf_t` 

Software SPI port descriptor.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`miso_pin`](#structsoft__spi__conf__t_1a971944747b35c2ed112c83915103dd43) | MOSI pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mosi_pin`](#structsoft__spi__conf__t_1af3f3038affe85e9a0efd5fa42b3a83a9) | MOSI pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk_pin`](#structsoft__spi__conf__t_1a79901593b49e28512b73f79815ef23ea) | CLK pin.
`public `[`soft_spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga0067f31877b2a3787c4de2a0413bac65)` `[`soft_spi_mode`](#structsoft__spi__conf__t_1a70ba8e7ba3d4a4ad64fc2874da28770e) | data and clock polarity
`public `[`soft_spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1gab891c834ce3f8f77ce8daacef7a2498e)` `[`soft_spi_clk`](#structsoft__spi__conf__t_1ab3d3118210ef621f3a1957b63eedec3e) | clock speed

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`miso_pin`](#structsoft__spi__conf__t_1a971944747b35c2ed112c83915103dd43) 

MOSI pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mosi_pin`](#structsoft__spi__conf__t_1af3f3038affe85e9a0efd5fa42b3a83a9) 

MOSI pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`clk_pin`](#structsoft__spi__conf__t_1a79901593b49e28512b73f79815ef23ea) 

CLK pin.

#### `public `[`soft_spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1ga0067f31877b2a3787c4de2a0413bac65)` `[`soft_spi_mode`](#structsoft__spi__conf__t_1a70ba8e7ba3d4a4ad64fc2874da28770e) 

data and clock polarity

#### `public `[`soft_spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__soft__spi_1gab891c834ce3f8f77ce8daacef7a2498e)` `[`soft_spi_clk`](#structsoft__spi__conf__t_1ab3d3118210ef621f3a1957b63eedec3e) 

clock speed

