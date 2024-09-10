---
title: api-drivers_lcd.md
description: api-drivers_lcd.md
---
# group `drivers_lcd` 

Driver for the LCD display.

The LCD is a generic display driver for small RGB displays. It communicates with the device either via an

* SPI serial interface (if module `lcd_spi` enabled) or an

* MCU 8080 8-/16-bit parallel interface (if module `lcd_parallel` or module `lcd_parallel_16` is enabled).

Usually the device driver is used either for a single display with SPI serial interface or for a display with parallel MCU 8080 8-/16-bit parallel interface. However, the device driver can also be used simultaneously for multiple displays with different interfaces if several of the `lcd_spi`, `lcd_parallel` and `lcd_parallel_16bit` modules are enabled at the same time. In this case, please refer to the notes in [lcd_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__params__t).

The device requires colors to be send in big endian RGB-565 format. The [CONFIG_LCD_LE_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lcd_1ga5bf4283c3bb6ed05f6e694d0f152c12f) compile time option can switch this, but only use this when strictly necessary. This option will slow down the driver as it certainly can't use DMA anymore, every short has to be converted before transfer.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_LCD_LE_MODE`](#group__drivers__lcd_1ga5bf4283c3bb6ed05f6e694d0f152c12f)            | Convert little endian colors to big endian.
`enum `[`lcd_if_mode_t`](#group__drivers__lcd_1ga5cd382b72d7fc5ac8e66b598b584abc7)            | Display interface modi.
`struct `[`lcd_params_t`](#structlcd__params__t) | Device initialization parameters.
`struct `[`lcd_t`](#structlcd__t) | Device descriptor for a lcd.
`struct `[`lcd_driver`](#structlcd__driver) | LCD driver interface.
`struct `[`lcd_ll_par_driver_t`](#structlcd__ll__par__driver__t) | Low-level MCU 8080 8-/16-bit parallel interface driver.

## Members

#### `define `[`CONFIG_LCD_LE_MODE`](#group__drivers__lcd_1ga5bf4283c3bb6ed05f6e694d0f152c12f) 

Convert little endian colors to big endian.

Compile time switch to change the driver to convert little endian colors to big endian.

#### `enum `[`lcd_if_mode_t`](#group__drivers__lcd_1ga5cd382b72d7fc5ac8e66b598b584abc7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LCD_IF_SPI            | SPI serial interface mode.
LCD_IF_PARALLEL_8BIT            | MCU 8080 8-bit parallel interface mode.
LCD_IF_PARALLEL_16BIT            | MCU 8080 16-bit parallel interface mode.

Display interface modi.

This enumeration is only needed if the MCU 8080 8-/16-bit interfaces are enabled by `lcd_parallel` or `lcd_parallel_16bit`. Otherwise the serial SPI interface is implicitly assumed.

# struct `lcd_params_t` 

Device initialization parameters.

The device driver can be used simultaneously for displays with SPI serial interface and parallel MCU 8080 8-/16-bit interfaces if the modules `lcd_spi` and `lcd_parallel` or `lcd_parallel_16bit` are enabled at the same time. In this case the interface parameters for the SPI serial interface and the MCU 8080 parallel 8-/16-bit interfaces are defined. [lcd_params_t::spi](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__params__t_1ab603c9671e060ceab30589e96b29f04d) must then be set to [SPI_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga0d0505b52e78af9251f6a1921d30214e) for displays that use the MCU-8080-parallel-8-/16-bit interface, i.e. [lcd_params_t::spi](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__params__t_1ab603c9671e060ceab30589e96b29f04d) is then used to detect the interface mode.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structlcd__params__t_1ab603c9671e060ceab30589e96b29f04d) | SPI device that the display is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structlcd__params__t_1a0e29a96454979adb06f582be28322ba1) | SPI clock speed to use.
`public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`spi_mode`](#structlcd__params__t_1a746b20f346200aa344fec027db2d75da) | SPI mode.
`public `[`lcd_if_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lcd_1ga5cd382b72d7fc5ac8e66b598b584abc7)` `[`mode`](#structlcd__params__t_1a497335f556d95043bf6651863537b40c) | LCD driver interface mode.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`wrx_pin`](#structlcd__params__t_1a72c8f572e5050a5126f367930dfac698) | pin connected to the WRITE ENABLE line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rdx_pin`](#structlcd__params__t_1aa77d71c58308c441c35833106e62d4cc) | pin connected to the READ ENABLE line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d0_pin`](#structlcd__params__t_1ae55dcf16197623a611544a3da8341a26) | pin connected to the D0 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d1_pin`](#structlcd__params__t_1afee4ae4a2ada449a444031ba61a8282d) | pin connected to the D1 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d2_pin`](#structlcd__params__t_1ad1cab0da3f739a77ff22f50f06303eba) | pin connected to the D2 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d3_pin`](#structlcd__params__t_1ad56f32a1765ba58692de90bda4169bf5) | pin connected to the D3 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d4_pin`](#structlcd__params__t_1ab4f886badbdf0491d3a80b8dd7d67e15) | pin connected to the D4 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d5_pin`](#structlcd__params__t_1ac26247de02c0713d8d9198f466ec9171) | pin connected to the D5 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d6_pin`](#structlcd__params__t_1ae6dc37b22deaf13547cdaa0156e8f81a) | pin connected to the D6 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d7_pin`](#structlcd__params__t_1afa582cc029e323b2ec2d61ebfac67f02) | pin connected to the D7 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d8_pin`](#structlcd__params__t_1aef46d268e1e0ec6f1e6ae0d1b753d80b) | pin connected to the D8 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d9_pin`](#structlcd__params__t_1a1d00f1a62696c6f28a23cb1bef025bcf) | pin connected to the D9 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d10_pin`](#structlcd__params__t_1a8da946baa2dafab416811912461928a3) | pin connected to the D10 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d11_pin`](#structlcd__params__t_1a67c17fd19c38603db392ac90df443464) | pin connected to the D11 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d12_pin`](#structlcd__params__t_1a642be44b7cf54ca5c9fc5a5a5faa0681) | pin connected to the D12 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d13_pin`](#structlcd__params__t_1a6eff5a0d6fdea76604bacf474b04531d) | pin connected to the D13 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d14_pin`](#structlcd__params__t_1a17c42ca0ad56705663cf3a92ab81c7d9) | pin connected to the D14 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d15_pin`](#structlcd__params__t_1a119135228a2204eee7fe482ab374d486) | pin connected to the D15 line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structlcd__params__t_1af8926d7f5753ca8c1e5488bbbb780caa) | pin connected to the CHIP SELECT line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dcx_pin`](#structlcd__params__t_1a38ff47531ea977fcb920b64a01ab9a57) | pin connected to the DC line
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structlcd__params__t_1a23021eb7c71730d8f33cf6e78de4ccbb) | pin connected to the RESET line
`public bool `[`rgb`](#structlcd__params__t_1a2ea14d2902cc4274fe42e93e39ef29fb) | True when display is connected in RGB mode<br/>False when display is connected in BGR mode.
`public bool `[`inverted`](#structlcd__params__t_1ae26fbf02e16757681aa6215ba9895be8) | Display works in inverted color mode.
`public uint16_t `[`lines`](#structlcd__params__t_1aac5c75611050f265721494ef2e6e031b) | Number of lines, from 16 to the number of lines supported by the driver IC in 8 line steps.
`public uint16_t `[`rgb_channels`](#structlcd__params__t_1a5236b65799d8d86c136ea25de8d4865b) | Display rgb channels.
`public uint8_t `[`rotation`](#structlcd__params__t_1a6c6ab0ffa0bd42423dff63a96b264187) | Display rotation mode.
`public uint8_t `[`offset_x`](#structlcd__params__t_1a59d5b42c3b5560d7dc9399b7320ad644) | LCD offset to apply on x axis.
`public uint8_t `[`offset_y`](#structlcd__params__t_1a3946726d6853259a7f02156b219df64d) | LCD offset to apply on y axis.
`public uint8_t `[`cntrl`](#structlcd__params__t_1a5d3c2f9c61bb67b40b08b92840ae8806) | controller variant used, if the controller- specific driver supports multiple controller variants

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi`](#structlcd__params__t_1ab603c9671e060ceab30589e96b29f04d) 

SPI device that the display is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structlcd__params__t_1a0e29a96454979adb06f582be28322ba1) 

SPI clock speed to use.

#### `public `[`spi_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#msp430_2include_2f2xx__g2xx_2periph__cpu_8h_1ac4b206a51636d91c5cffcbcee458c3cb)` `[`spi_mode`](#structlcd__params__t_1a746b20f346200aa344fec027db2d75da) 

SPI mode.

#### `public `[`lcd_if_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lcd_1ga5cd382b72d7fc5ac8e66b598b584abc7)` `[`mode`](#structlcd__params__t_1a497335f556d95043bf6651863537b40c) 

LCD driver interface mode.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`wrx_pin`](#structlcd__params__t_1a72c8f572e5050a5126f367930dfac698) 

pin connected to the WRITE ENABLE line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rdx_pin`](#structlcd__params__t_1aa77d71c58308c441c35833106e62d4cc) 

pin connected to the READ ENABLE line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d0_pin`](#structlcd__params__t_1ae55dcf16197623a611544a3da8341a26) 

pin connected to the D0 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d1_pin`](#structlcd__params__t_1afee4ae4a2ada449a444031ba61a8282d) 

pin connected to the D1 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d2_pin`](#structlcd__params__t_1ad1cab0da3f739a77ff22f50f06303eba) 

pin connected to the D2 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d3_pin`](#structlcd__params__t_1ad56f32a1765ba58692de90bda4169bf5) 

pin connected to the D3 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d4_pin`](#structlcd__params__t_1ab4f886badbdf0491d3a80b8dd7d67e15) 

pin connected to the D4 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d5_pin`](#structlcd__params__t_1ac26247de02c0713d8d9198f466ec9171) 

pin connected to the D5 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d6_pin`](#structlcd__params__t_1ae6dc37b22deaf13547cdaa0156e8f81a) 

pin connected to the D6 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d7_pin`](#structlcd__params__t_1afa582cc029e323b2ec2d61ebfac67f02) 

pin connected to the D7 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d8_pin`](#structlcd__params__t_1aef46d268e1e0ec6f1e6ae0d1b753d80b) 

pin connected to the D8 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d9_pin`](#structlcd__params__t_1a1d00f1a62696c6f28a23cb1bef025bcf) 

pin connected to the D9 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d10_pin`](#structlcd__params__t_1a8da946baa2dafab416811912461928a3) 

pin connected to the D10 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d11_pin`](#structlcd__params__t_1a67c17fd19c38603db392ac90df443464) 

pin connected to the D11 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d12_pin`](#structlcd__params__t_1a642be44b7cf54ca5c9fc5a5a5faa0681) 

pin connected to the D12 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d13_pin`](#structlcd__params__t_1a6eff5a0d6fdea76604bacf474b04531d) 

pin connected to the D13 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d14_pin`](#structlcd__params__t_1a17c42ca0ad56705663cf3a92ab81c7d9) 

pin connected to the D14 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`d15_pin`](#structlcd__params__t_1a119135228a2204eee7fe482ab374d486) 

pin connected to the D15 line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structlcd__params__t_1af8926d7f5753ca8c1e5488bbbb780caa) 

pin connected to the CHIP SELECT line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`dcx_pin`](#structlcd__params__t_1a38ff47531ea977fcb920b64a01ab9a57) 

pin connected to the DC line

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structlcd__params__t_1a23021eb7c71730d8f33cf6e78de4ccbb) 

pin connected to the RESET line

#### `public bool `[`rgb`](#structlcd__params__t_1a2ea14d2902cc4274fe42e93e39ef29fb) 

True when display is connected in RGB mode
False when display is connected in BGR mode.

#### `public bool `[`inverted`](#structlcd__params__t_1ae26fbf02e16757681aa6215ba9895be8) 

Display works in inverted color mode.

#### `public uint16_t `[`lines`](#structlcd__params__t_1aac5c75611050f265721494ef2e6e031b) 

Number of lines, from 16 to the number of lines supported by the driver IC in 8 line steps.

#### `public uint16_t `[`rgb_channels`](#structlcd__params__t_1a5236b65799d8d86c136ea25de8d4865b) 

Display rgb channels.

#### `public uint8_t `[`rotation`](#structlcd__params__t_1a6c6ab0ffa0bd42423dff63a96b264187) 

Display rotation mode.

#### `public uint8_t `[`offset_x`](#structlcd__params__t_1a59d5b42c3b5560d7dc9399b7320ad644) 

LCD offset to apply on x axis.

#### `public uint8_t `[`offset_y`](#structlcd__params__t_1a3946726d6853259a7f02156b219df64d) 

LCD offset to apply on y axis.

#### `public uint8_t `[`cntrl`](#structlcd__params__t_1a5d3c2f9c61bb67b40b08b92840ae8806) 

controller variant used, if the controller- specific driver supports multiple controller variants

# struct `lcd_t` 

Device descriptor for a lcd.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * `[`dev`](#structlcd__t_1a45aaaa57f17acea819ba2aa41ca364cf) | Pointer to the generic display device.
`public const `[`lcd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lcd_1ga5951c3176e4390d64897680eb7867d79)` * `[`driver`](#structlcd__t_1af093b1cf118c65c9a496ec31c02935fe) | LCD driver.
`public const `[`lcd_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__params__t)` * `[`params`](#structlcd__t_1a2c8f98d1fa1d058411f2625052a3eea7) | Device initialization parameters.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlcd__t_1a728ad510151e9972559c794f62056346) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) used to lock the device in MCU 8080 parallel interface mode.
`public bool `[`word_access`](#structlcd__t_1afb28fd40b51ca9ee1022a7e660e63ea5) | indicates that a word access is active

## Members

#### `public `[`disp_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__disp__dev_1gad3406bbb2174d22265804b761ef0d11b)` * `[`dev`](#structlcd__t_1a45aaaa57f17acea819ba2aa41ca364cf) 

Pointer to the generic display device.

#### `public const `[`lcd_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lcd_1ga5951c3176e4390d64897680eb7867d79)` * `[`driver`](#structlcd__t_1af093b1cf118c65c9a496ec31c02935fe) 

LCD driver.

#### `public const `[`lcd_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_lcd.md#structlcd__params__t)` * `[`params`](#structlcd__t_1a2c8f98d1fa1d058411f2625052a3eea7) 

Device initialization parameters.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structlcd__t_1a728ad510151e9972559c794f62056346) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) used to lock the device in MCU 8080 parallel interface mode.

#### `public bool `[`word_access`](#structlcd__t_1afb28fd40b51ca9ee1022a7e660e63ea5) 

indicates that a word access is active

# struct `lcd_driver` 

LCD driver interface.

This defines the functions to access a LCD.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`init`](#structlcd__driver_1a3ac4f3717bc75861587f61af72d3b20b) | Initialize LCD controller.
`public void(* `[`set_area`](#structlcd__driver_1a1d37b741f185236fa6d77189a536f2f3) | Set the LCD work area.

## Members

#### `public int(* `[`init`](#structlcd__driver_1a3ac4f3717bc75861587f61af72d3b20b) 

Initialize LCD controller.

#### Parameters
* `dev` Pointer to the selected driver

#### Returns
0 on success 

#### Returns
< 0 value in error

#### `public void(* `[`set_area`](#structlcd__driver_1a1d37b741f185236fa6d77189a536f2f3) 

Set the LCD work area.

This function pointer can be NULL if the controller specific driver does not require anything special. In this case the default implementation is used which sets the column addresses and the row addresses of the area including the coordinates of the opposite corner.

#### Parameters
* `dev` Pointer to the selected driver 

* `x1` x coordinate of the first corner 

* `x2` x coordinate of the opposite corner 

* `y1` y coordinate of the first corner 

* `y2` y coordinate of the opposite corner

# struct `lcd_ll_par_driver_t` 

Low-level MCU 8080 8-/16-bit parallel interface driver.

If the MCU-driven low-level parallel interface is enabled by module `lcd_ll_parallel_mcu`, the implementation of the MCU low-level parallel interface has to define a variable [lcd_ll_par_driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__lcd_1ga2666177bb70f393258c446df9176a7d8) of this type. All or a set of members have to point to the low-level parallel interface functions implemented by the MCU. For functions that are not implemented by the MCU, the members have to be set to the corresponding GPIO-driven low-level parallel interface functions provided by the LCD driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`init`](#structlcd__ll__par__driver__t_1adf7a267c6017de24fe81d8f4792aecc8) | Initialize the MCU-driven low-level parallel interface.
`public void(* `[`set_data_dir`](#structlcd__ll__par__driver__t_1a686f3d88ffe48bb08e651853ae0ee1b1) | Set the data direction of the low-level parallel interface.
`public void(* `[`cmd_start`](#structlcd__ll__par__driver__t_1afab258495475913b231734c2f75068f2) | Write command using the MCU-driven low-level parallel interface.
`public void(* `[`write_byte`](#structlcd__ll__par__driver__t_1a39c416460a67892c80e75b1bfd3c1727) | Write a byte using the MCU-driven low-level parallel interface.
`public uint8_t(* `[`read_byte`](#structlcd__ll__par__driver__t_1a37dc08e98dc671fadd02a1d60da1ce4f) | Read a byte using the MCU-driven low-level parallel interface.
`public void(* `[`write_word`](#structlcd__ll__par__driver__t_1a23ead92e70892eccfe342f4af60f0158) | Write a word using the MCU-driven low-level parallel interface.
`public uint16_t(* `[`read_word`](#structlcd__ll__par__driver__t_1aef8ee73b43ea63d9368b24153ff71159) | Read a word using the MCU-driven low-level parallel interface.

## Members

#### `public void(* `[`init`](#structlcd__ll__par__driver__t_1adf7a267c6017de24fe81d8f4792aecc8) 

Initialize the MCU-driven low-level parallel interface.

#### Parameters
* `dev` device descriptor

#### `public void(* `[`set_data_dir`](#structlcd__ll__par__driver__t_1a686f3d88ffe48bb08e651853ae0ee1b1) 

Set the data direction of the low-level parallel interface.

#### Parameters
* `dev` device descriptor 

* `output` set to output mode if true and to input mode otherwise

#### `public void(* `[`cmd_start`](#structlcd__ll__par__driver__t_1afab258495475913b231734c2f75068f2) 

Write command using the MCU-driven low-level parallel interface.

#### Parameters
* `dev` device descriptor 

* `cmd` command 

* `cont` operation is continued

#### `public void(* `[`write_byte`](#structlcd__ll__par__driver__t_1a39c416460a67892c80e75b1bfd3c1727) 

Write a byte using the MCU-driven low-level parallel interface.

#### Parameters
* `dev` device descriptor 

* `cont` operation is continued 

* `out` byte to be written

#### `public uint8_t(* `[`read_byte`](#structlcd__ll__par__driver__t_1a37dc08e98dc671fadd02a1d60da1ce4f) 

Read a byte using the MCU-driven low-level parallel interface.

#### Parameters
* `dev` device descriptor 

* `cont` operation is continued

#### Returns
byte read

#### `public void(* `[`write_word`](#structlcd__ll__par__driver__t_1a23ead92e70892eccfe342f4af60f0158) 

Write a word using the MCU-driven low-level parallel interface.

#### Parameters
* `dev` device descriptor 

* `cont` operation is continued 

* `out` word to be written

#### `public uint16_t(* `[`read_word`](#structlcd__ll__par__driver__t_1aef8ee73b43ea63d9368b24153ff71159) 

Read a word using the MCU-driven low-level parallel interface.

#### Parameters
* `dev` device descriptor 

* `cont` operation is continued

#### Returns
word read

