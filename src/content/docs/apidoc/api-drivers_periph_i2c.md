---
title: api-drivers_periph_i2c.md
description: api-drivers_periph_i2c.md
---
# group `drivers_periph_i2c` 

Low-level I2C peripheral driver.

This interface provides a simple abstraction to use the MCUs I2C peripherals. It provides support for 7-bit and 10-bit addressing and can be used for different kind of register addressing schemes.

UsageExample for reading a 8-bit register on a device, using a 10-bit device address and 8-bit register addresses and using a RESTART condition (CAUTION: this example does not check any return values...):

```cpp
// initialize the bus (this is normally done during boot time)
[i2c_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga2ce7cc916258e7c3fa0b60cba2e4895f)(dev);
...
// before accessing the bus, we need to acquire it
i2c_acquire(dev);
// next we write the register address, but create no STOP condition when done
[i2c_write_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga062b562b2d2cd123199a2890968ba272)(dev, device_addr, reg_addr, ([I2C_NOSTOP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gga9ed58f160035134076b56c8907cf0c6bad24d4523893d22e101e27bfc546234c3) | [I2C_ADDR10](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gga9ed58f160035134076b56c8907cf0c6ba1d95c3f463d6bbe98c1a8fbcd5d1e1f2)));
// and now we read the register value
[i2c_read_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga81fed3b6aec0ba0956ba6a1efbc74774)(dev, device_addr, &reg_value, [I2C_ADDR10](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gga9ed58f160035134076b56c8907cf0c6ba1d95c3f463d6bbe98c1a8fbcd5d1e1f2));
// finally we have to release the bus
[i2c_release](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga824e1b86105462b0df022bcf3ea0634b)(dev);
```

Example for writing a 16-bit register with 16-bit register addressing and 7-bit device addressing:

```cpp
// initialize the bus
[i2c_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga2ce7cc916258e7c3fa0b60cba2e4895f)(dev);
...
// first, acquire the shared bus again
i2c_acquire(dev);
// write the 16-bit register address to the device and prevent STOP condition
[i2c_write_byte](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga062b562b2d2cd123199a2890968ba272)(dev, device_addr, reg_addr, [I2C_NOSTOP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gga9ed58f160035134076b56c8907cf0c6bad24d4523893d22e101e27bfc546234c3));
// and write the data after a REPEATED START
[i2c_write_bytes](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga2d4c26cb8d79d7a46764fb832e93ff0b)(dev, device_addr, reg_data, 2, 0);
// and finally free the bus again
[i2c_release](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga824e1b86105462b0df022bcf3ea0634b)(dev);
```

Pull ResistorsThe I2C signal lines SDA/SCL need external pull-up resistors which connect the lines to the positive voltage supply Vcc. The I2C driver implementation should enable the pin's internal pull-up resistors. There are however some use cases for which the internal pull resistors are not strong enough and the I2C bus will show faulty behavior. This can for example happen when connecting a logic analyzer which will raise the capacitance of the bus. In this case you should make sure you connect external pull-up resistors to both I2C bus lines.

The minimum and maximum resistances are computed by: 
$$
\begin{eqnarray*} R_{min} &=& \frac{V_{DD} - V_{OL(max)}} {I_{OL}}\\ R_{max} &=& \frac{t_r} {(0.8473 \cdot C_b)} \end{eqnarray*}
$$

 where:$ V_{DD} =$ Supply voltage, $ V_{OL(max)} =$ Low level voltage, $ I_{OL} =$ Low level output current, $ t_r =$ Signal rise time, $ C_b =$ Bus capacitance 
The pull-up resistors depend on the bus speed. Some typical values are:
 Normal mode: 10k
 Fast mode: 2k
 Fast plus mode: 2k

For more details refer to section 7.1 in:[http://www.nxp.com/documents/user_manual/UM10204.pdf](http://www.nxp.com/documents/user_manual/UM10204.pdf)

(Low-) power implicationsThe I2C interface realizes a transaction-based access scheme to the bus. From a power management perspective, we can leverage this by only powering on the I2C peripheral while it is actually used, that is inside an [i2c_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gabef11c06afd161e332df53871257169c) - [i2c_release()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga824e1b86105462b0df022bcf3ea0634b) block.

After initialization, the I2C peripheral **should** be powered off (e.g. through peripheral clock gating). It should only be powered on once a transaction on the I2C bus starts, namely in the [i2c_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gabef11c06afd161e332df53871257169c) function. Once the transaction is finished, the corresponding I2C peripheral **should** be powered off again in the [i2c_release()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga824e1b86105462b0df022bcf3ea0634b) function.

If the implementation puts the active thread to sleep while a transfer is in progress (e.g. when using DMA), the implementation might need to block certain power states.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`I2C_READ`](#group__drivers__periph__i2c_1gab5c0fbe837494c5f9130a5914854250d)            | Read bit needs to be set when reading.
`define `[`I2C_10BIT_MAGIC`](#group__drivers__periph__i2c_1ga45fc6df6bf09a50095f509cadc0083a8)            | Special bit pattern indicating a 10 bit address is used.
`public void `[`i2c_init`](#group__drivers__periph__i2c_1ga2ce7cc916258e7c3fa0b60cba2e4895f)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)`            | Initialize the given I2C bus.
`public void `[`i2c_init_pins`](#group__drivers__periph__i2c_1gaa34bed3b0c852839ef35d52b017e2941)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)`            | Initialize the used I2C bus pins.
`public void `[`i2c_deinit_pins`](#group__drivers__periph__i2c_1ga40e65b8c4c0ecb24da892b8ec6bb3f45)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)`            | Change the pins of the given I2C bus back to plain GPIO functionality.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`i2c_pin_sda`](#group__drivers__periph__i2c_1ga455b18bbedf5f41ce47a72009d27fe08)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)`            | Get the SDA pin of the given I2C bus.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`i2c_pin_scl`](#group__drivers__periph__i2c_1gae671dd338e186c01439ee9fc1628a72d)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)`            | Get the SCL pin of the given I2C bus.
`public void `[`i2c_acquire`](#group__drivers__periph__i2c_1gabef11c06afd161e332df53871257169c)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)`            | Get mutually exclusive access to the given I2C bus.
`public void `[`i2c_release`](#group__drivers__periph__i2c_1ga824e1b86105462b0df022bcf3ea0634b)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)`            | Release the given I2C device to be used by others.
`public int `[`i2c_read_reg`](#group__drivers__periph__i2c_1gac4ab6e73e05b22c2da0c2f178da06d7b)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,void * data,uint8_t flags)`            | Convenience function for reading one byte from a given register address.
`public int `[`i2c_read_regs`](#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,void * data,size_t len,uint8_t flags)`            | Convenience function for reading several bytes from a given register address.
`public int `[`i2c_read_byte`](#group__drivers__periph__i2c_1ga81fed3b6aec0ba0956ba6a1efbc74774)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,void * data,uint8_t flags)`            | Convenience function for reading one byte from a device.
`public int `[`i2c_read_bytes`](#group__drivers__periph__i2c_1ga196b4508511c41822eddf6b43b008e90)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,void * data,size_t len,uint8_t flags)`            | Convenience function for reading bytes from a device.
`public int `[`i2c_write_byte`](#group__drivers__periph__i2c_1ga062b562b2d2cd123199a2890968ba272)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint8_t data,uint8_t flags)`            | Convenience function for writing a single byte onto the bus.
`public int `[`i2c_write_bytes`](#group__drivers__periph__i2c_1ga2d4c26cb8d79d7a46764fb832e93ff0b)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,const void * data,size_t len,uint8_t flags)`            | Convenience function for writing several bytes onto the bus.
`public int `[`i2c_write_reg`](#group__drivers__periph__i2c_1ga02b8328d5e823d972e1e1234965daab1)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,uint8_t data,uint8_t flags)`            | Convenience function for writing one byte to a given register address.
`public int `[`i2c_write_regs`](#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,const void * data,size_t len,uint8_t flags)`            | Convenience function for writing data to a given register address.

## Members

#### `define `[`I2C_READ`](#group__drivers__periph__i2c_1gab5c0fbe837494c5f9130a5914854250d) 

Read bit needs to be set when reading.

#### `define `[`I2C_10BIT_MAGIC`](#group__drivers__periph__i2c_1ga45fc6df6bf09a50095f509cadc0083a8) 

Special bit pattern indicating a 10 bit address is used.

Should only be used internally in CPU driver implementations, this is not intended to be used by applications.

**See also**: [https://www.i2c-bus.org/addressing/10-bit-addressing/](https://www.i2c-bus.org/addressing/10-bit-addressing/)

#### `public void `[`i2c_init`](#group__drivers__periph__i2c_1ga2ce7cc916258e7c3fa0b60cba2e4895f)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)` 

Initialize the given I2C bus.

The given I2C device will be initialized with the parameters as specified in the boards periph_conf.h, using the pins and the speed value given there.

The bus MUST not be acquired before initializing it, as this is handled internally by the i2c_init function!

#### Parameters
* `dev` the device to initialize

#### `public void `[`i2c_init_pins`](#group__drivers__periph__i2c_1gaa34bed3b0c852839ef35d52b017e2941)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)` 

Initialize the used I2C bus pins.

After calling i2c_init, the pins must be initialized (i.e. spi_init is calling this function internally). In normal cases, this function will not be used. But there are some devices (e.g. ATECC608A), that use I2C bus lines also for other purposes and need the option to dynamically re-configure one or more of the used pins.

#### Parameters
* `dev` I2C device the pins are configure for

#### `public void `[`i2c_deinit_pins`](#group__drivers__periph__i2c_1ga40e65b8c4c0ecb24da892b8ec6bb3f45)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)` 

Change the pins of the given I2C bus back to plain GPIO functionality.

The pin mux of the SDA and SCL pins of the bus will be changed back to default (GPIO) mode and the I2C bus is powered off. This allows to use the I2C pins for another function and return to I2C functionality again by calling [i2c_init_pins()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gaa34bed3b0c852839ef35d52b017e2941)

If you want the pin to be in a defined state, call [gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955) on it.

The bus MUST not be acquired before initializing it, as this is handled internally by the i2c_deinit function!

Calls to [i2c_acquire()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gabef11c06afd161e332df53871257169c) will block until [i2c_init_pins()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1gaa34bed3b0c852839ef35d52b017e2941) is called.

Until this is implemented on all platforms, this requires the periph_i2c_reconfigure feature to be used.

#### Parameters
* `dev` the device to de-initialize

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`i2c_pin_sda`](#group__drivers__periph__i2c_1ga455b18bbedf5f41ce47a72009d27fe08)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)` 

Get the SDA pin of the given I2C bus.

#### Parameters
* `dev` The device to query

Until this is implemented on all platforms, this requires the periph_i2c_reconfigure feature to be used.

#### Returns
The GPIO used for the I2C data line.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`i2c_pin_scl`](#group__drivers__periph__i2c_1gae671dd338e186c01439ee9fc1628a72d)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)` 

Get the SCL pin of the given I2C bus.

#### Parameters
* `dev` The device to query

Until this is implemented on all platforms, this requires the periph_i2c_reconfigure feature to be used.

#### Returns
The GPIO used for the I2C clock line.

#### `public void `[`i2c_acquire`](#group__drivers__periph__i2c_1gabef11c06afd161e332df53871257169c)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)` 

Get mutually exclusive access to the given I2C bus.

In case the I2C device is busy, this function will block until the bus is free again.

Given device is valid, otherwise an assertion blows up (if assertions are enabled).

#### Parameters
* `dev` I2C device to access

#### `public void `[`i2c_release`](#group__drivers__periph__i2c_1ga824e1b86105462b0df022bcf3ea0634b)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev)` 

Release the given I2C device to be used by others.

#### Parameters
* `dev` I2C device to release

#### `public int `[`i2c_read_reg`](#group__drivers__periph__i2c_1gac4ab6e73e05b22c2da0c2f178da06d7b)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,void * data,uint8_t flags)` 

Convenience function for reading one byte from a given register address.

This function is using a repeated start sequence for reading from the specified register address.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `reg` register address to read from (8- or 16-bit, right-aligned) 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` memory location to store received data 

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public int `[`i2c_read_regs`](#group__drivers__periph__i2c_1ga5e65efc34a8bd77223795faadc29d304)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,void * data,size_t len,uint8_t flags)` 

Convenience function for reading several bytes from a given register address.

This function is using a repeated start sequence for reading from the specified register address.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `reg` register address to read from (8- or 16-bit, right-aligned) 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` memory location to store received data 

* `len` the number of bytes to read into `data`

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public int `[`i2c_read_byte`](#group__drivers__periph__i2c_1ga81fed3b6aec0ba0956ba6a1efbc74774)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,void * data,uint8_t flags)` 

Convenience function for reading one byte from a device.

This function is using a repeated start sequence for reading from the specified register address.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` memory location to store received data 

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public int `[`i2c_read_bytes`](#group__drivers__periph__i2c_1ga196b4508511c41822eddf6b43b008e90)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,void * data,size_t len,uint8_t flags)` 

Convenience function for reading bytes from a device.

This function is using a repeated start sequence for reading from the specified register address.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` memory location to store received data 

* `len` the number of bytes to read into `data`

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public int `[`i2c_write_byte`](#group__drivers__periph__i2c_1ga062b562b2d2cd123199a2890968ba272)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint8_t data,uint8_t flags)` 

Convenience function for writing a single byte onto the bus.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` byte to write to the device 

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public int `[`i2c_write_bytes`](#group__drivers__periph__i2c_1ga2d4c26cb8d79d7a46764fb832e93ff0b)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,const void * data,size_t len,uint8_t flags)` 

Convenience function for writing several bytes onto the bus.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` array holding the bytes to write to the device 

* `len` the number of bytes to write 

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public int `[`i2c_write_reg`](#group__drivers__periph__i2c_1ga02b8328d5e823d972e1e1234965daab1)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,uint8_t data,uint8_t flags)` 

Convenience function for writing one byte to a given register address.

This function is using a continuous sequence for writing to the specified register address. It first writes the register then data.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `reg` register address to read from (8- or 16-bit, right-aligned) 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` byte to write 

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

#### `public int `[`i2c_write_regs`](#group__drivers__periph__i2c_1gac7e12c6df3bc117d5e46d1e98a5a7f08)`(`[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` dev,uint16_t addr,uint16_t reg,const void * data,size_t len,uint8_t flags)` 

Convenience function for writing data to a given register address.

This function is using a continuous sequence for writing to the specified register address. It first writes the register then data.

i2c_acquire must be called before accessing the bus

#### Parameters
* `dev` I2C peripheral device 

* `reg` register address to read from (8- or 16-bit, right-aligned) 

* `addr` 7-bit or 10-bit device address (right-aligned) 

* `data` memory location to store received data 

* `len` the number of bytes to write 

* `flags` optional flags (see [i2c_flags_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9ed58f160035134076b56c8907cf0c6b))

#### Returns
0 When success 

#### Returns
-EIO When slave device doesn't ACK the byte 

#### Returns
-ENXIO When no devices respond on the address sent on the bus 

#### Returns
-ETIMEDOUT When timeout occurs before device's response 

#### Returns
-EINVAL When an invalid argument is given 

#### Returns
-EOPNOTSUPP When MCU driver doesn't support the flag operation 

#### Returns
-EAGAIN When a lost bus arbitration occurs

