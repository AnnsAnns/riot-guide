---
title: api-drivers_nvram.md
description: api-drivers_nvram.md
---
# group `drivers_nvram` 

Non-volatile RAM interface.

This API is designed around non-volatile memories which do not need blockwise erase, such as ferro-electric RAM (FRAM) or magneto-resistive RAM (MRAM).

This interface is not suitable for flash memories.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`struct `[`nvram`](#structnvram) | Device descriptor for generic NVRAM devices.

# struct `nvram` 

Device descriptor for generic NVRAM devices.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int(* `[`read`](#structnvram_1af9b6348235d30e2fd8ad96178dbb6711) | Pointer to device-specific read function.
`public int(* `[`write`](#structnvram_1a3853ecfeea46b5f0d823d3e5c1e47256) | Pointer to device-specific write function.
`public size_t `[`size`](#structnvram_1aeb08196a66a1490517d199659ff16549) | Device capacity.
`public void * `[`extra`](#structnvram_1a14aa8e3ca9b8f6881657d75a86b0fcd5) | Device-specific parameters, if any.

## Members

#### `public int(* `[`read`](#structnvram_1af9b6348235d30e2fd8ad96178dbb6711) 

Pointer to device-specific read function.

Copy data from system memory to NVRAM.

#### Parameters
* `dev` Pointer to NVRAM device descriptor 

* `dst` Pointer to the first byte in the system memory address space 

* `src` Starting address in the NVRAM device address space 

* `len` Number of bytes to copy

#### Returns
Number of bytes read on success 

#### Returns
<0 on errors

#### `public int(* `[`write`](#structnvram_1a3853ecfeea46b5f0d823d3e5c1e47256) 

Pointer to device-specific write function.

Copy data from NVRAM to system memory.

#### Parameters
* `dev` Pointer to NVRAM device descriptor 

* `src` Pointer to the first byte in the system memory address space 

* `dst` Starting address in the NVRAM device address space 

* `len` Number of bytes to copy

#### Returns
Number of bytes written on success 

#### Returns
<0 on errors

#### `public size_t `[`size`](#structnvram_1aeb08196a66a1490517d199659ff16549) 

Device capacity.

#### `public void * `[`extra`](#structnvram_1a14aa8e3ca9b8f6881657d75a86b0fcd5) 

Device-specific parameters, if any.

