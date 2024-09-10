---
title: api-drivers_saul.md
description: api-drivers_saul.md
---
# group `drivers_saul` 

Generic sensor/actuator abstraction layer for RIOT.

SAUL is a generic actuator/sensor interface in RIOT. Its purpose is to enable unified interaction with a wide range of sensors and actuators through a set of defined access functions and a common data structure.

Each device driver implementing this interface has to expose a set of predefined functions and it has to register itself to the central SAUL registry. From here devices can be found, listed, and accessed.

Each device has further to expose a name and its type. This information can be used for automated searching and matching of devices (e.g. connect light sensor automatically with the color of an RGB LED...).

The SAUL module enables further the automated initialization of preconfigured actuators/sensor via auto_init and the access to all available devices via one unified shell command.

SAUL drivers may rely on being called from a thread, and often block for short amounts of time to obtain a value. Conversely, requests through the [SAUL registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg) must not be issued from an interrupt context.

> Todo: So far, the interface only supports simple read and set operations. It probably needs to be extended to handling events, thresholds, and so on.

**See also**: [SAUL registry](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`saul_init_devs`](#group__drivers__saul_1gaa0606d6e3e600d93622eb6774c95e4c5)`(void)`            | Initialize all available SAUL drivers.
`public int `[`saul_write_notsup`](#group__drivers__saul_1ga02a385952a8ef0387b3eb0e3720e7d0b)`(const void * dev,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * dat)`            | Fallback function when write is not supported.
`public int `[`saul_read_notsup`](#group__drivers__saul_1gaacc09a5d5e089522bd7d1aa95dc6f9be)`(const void * dev,`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * dat)`            | Fallback function when read is not supported.
`public const char * `[`saul_class_to_str`](#group__drivers__saul_1gaafcd9f133b7b6fc740d03e035bc48040)`(const uint8_t class_id)`            | Helper function converts a class ID to a string.
`public void `[`saul_class_print`](#group__drivers__saul_1ga31fb10fb068025e9560e19526d839fcd)`(uint8_t class_id)`            | Prints the class string of the given class ID.
`public ssize_t `[`saul_class_write`](#group__drivers__saul_1ga42fad70f99811ac0fb8d7f86b66d93da)`(char * dest,size_t max_size,uint8_t class_id)`            | Write the string representation of the given device class to the given buffer.
`struct `[`saul_driver_t`](#structsaul__driver__t) | Definition of the RIOT actuator/sensor interface.

## Members

#### `public void `[`saul_init_devs`](#group__drivers__saul_1gaa0606d6e3e600d93622eb6774c95e4c5)`(void)` 

Initialize all available SAUL drivers.

This function is called automatically if the auto_init_saul module is used. If only the saul_init module is used instead, you can call this function to manually set up all SAUL sensors at a later time.

#### `public int `[`saul_write_notsup`](#group__drivers__saul_1ga02a385952a8ef0387b3eb0e3720e7d0b)`(const void * dev,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * dat)` 

Fallback function when write is not supported.

Returns `-NOTSUP` without evaluating arguments.

#### `public int `[`saul_read_notsup`](#group__drivers__saul_1gaacc09a5d5e089522bd7d1aa95dc6f9be)`(const void * dev,`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * dat)` 

Fallback function when read is not supported.

Returns `-NOTSUP` without evaluating arguments.

#### `public const char * `[`saul_class_to_str`](#group__drivers__saul_1gaafcd9f133b7b6fc740d03e035bc48040)`(const uint8_t class_id)` 

Helper function converts a class ID to a string.

#### Parameters
* `class_id` device class ID

#### Returns
string representation of the device class 

#### Parameters
* `NULL` class ID is not known

> Deprecated: Use [saul_class_print](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1ga31fb10fb068025e9560e19526d839fcd) or [saul_class_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1ga42fad70f99811ac0fb8d7f86b66d93da) instead

For classic Harvard architectures a small buffer is used to store the string, so that subsequent (or concurrent!) calls will overwrite the output.

#### `public void `[`saul_class_print`](#group__drivers__saul_1ga31fb10fb068025e9560e19526d839fcd)`(uint8_t class_id)` 

Prints the class string of the given class ID.

#### Parameters
* `class_id` ID of the device class to print

#### `public ssize_t `[`saul_class_write`](#group__drivers__saul_1ga42fad70f99811ac0fb8d7f86b66d93da)`(char * dest,size_t max_size,uint8_t class_id)` 

Write the string representation of the given device class to the given buffer.

#### Parameters
* `dest` destination buffer to write to 

* `max_size` size of the buffer at `dest`

* `class_id` ID of the device class to write

#### Returns
Number of bytes written 

#### Parameters
* `-EOVERFLOW` buffer at `dest` is too small 

* `-EINVAL` invalid unit in `unit`

The function will never write a terminating zero byte 

If you pass `NULL` for `dest`, it will return the number of bytes it would write (regardless of `max_size`)

# struct `saul_driver_t` 

Definition of the RIOT actuator/sensor interface.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`saul_read_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1gac3882b034e8e751cfb95742a9100ecf2)` `[`read`](#structsaul__driver__t_1a61cc7eac43a095d01db90d23286217ab) | read function pointer
`public `[`saul_write_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1gafa01f256f9382582b9b89f5bdca46407)` `[`write`](#structsaul__driver__t_1a36521b54ed4c2ed7d038928d42f8c28c) | write function pointer
`public uint8_t `[`type`](#structsaul__driver__t_1a4f6809477678998050c2018efe6b5727) | device class the device belongs to

## Members

#### `public `[`saul_read_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1gac3882b034e8e751cfb95742a9100ecf2)` `[`read`](#structsaul__driver__t_1a61cc7eac43a095d01db90d23286217ab) 

read function pointer

#### `public `[`saul_write_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul_1gafa01f256f9382582b9b89f5bdca46407)` `[`write`](#structsaul__driver__t_1a36521b54ed4c2ed7d038928d42f8c28c) 

write function pointer

#### `public uint8_t `[`type`](#structsaul__driver__t_1a4f6809477678998050c2018efe6b5727) 

device class the device belongs to

