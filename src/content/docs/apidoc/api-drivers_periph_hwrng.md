---
title: api-drivers_periph_hwrng.md
description: api-drivers_periph_hwrng.md
---
# group `drivers_periph_hwrng` 

Peripheral hardware random number generator interface.

The HWRNG interface abstracts means provided by MCU peripherals to create random number. On most platforms, these peripherals are called something like 'hardware random number generator' or 'pseudo random number generator'. The quality of the created random data does differ quite a bit between different MCUs, so please refer to your MCUs reference manual for information on this!

Refer to your platforms MCU reference manual for information on the quality of the used (pseudo) random number generator!

(Low-) Power ImplicationsThe HWRNG implementation **should** consume no additional power while no read operation is in progress. This means, that the HWRNG peripheral should be disabled (e.g. through peripheral clock gating) after the initialization and that it **should** only be turned on while [hwrng_read()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__hwrng_1ga7c042e4ffb0cf6574f197955967e2d86) is active.

If the implementation puts the active thread to sleep during [hwrng_read()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__hwrng_1ga7c042e4ffb0cf6574f197955967e2d86), it might need to block certain power modes on some platforms during this time.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`hwrng_init`](#group__drivers__periph__hwrng_1ga742ed475897cb8f8b9abaee758171145)`(void)`            | Initialize the hardware random number generator.
`public void `[`hwrng_read`](#group__drivers__periph__hwrng_1ga7c042e4ffb0cf6574f197955967e2d86)`(void * buf,unsigned int num)`            | Read N bytes of random data from the hardware device.

## Members

#### `public void `[`hwrng_init`](#group__drivers__periph__hwrng_1ga742ed475897cb8f8b9abaee758171145)`(void)` 

Initialize the hardware random number generator.

On some platforms, the random number generator needs some global initialization before it can be used. This should happen in this function if it would impose too much overhead to do this every time the hwrng_read function is called. The device should however be put into power-off mode after initialization and will be powered on and of when hwrng_read is called.

#### `public void `[`hwrng_read`](#group__drivers__periph__hwrng_1ga7c042e4ffb0cf6574f197955967e2d86)`(void * buf,unsigned int num)` 

Read N bytes of random data from the hardware device.

The read function should power on the HWRNG MCU peripheral, read the given number of random bytes and than put the peripheral back to sleep.

#### Parameters
* `buf` destination buffer to write the bytes to 

* `num` number of bytes to get from device

