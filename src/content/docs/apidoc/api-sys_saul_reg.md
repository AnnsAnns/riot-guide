---
title: api-sys_saul_reg.md
description: api-sys_saul_reg.md
---
# group `sys_saul_reg` 

Global sensor/actuator registry for SAUL devices.

**See also**: [[S]ensor [A]ctuator [U]ber [L]ayer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__saul)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int `[`saul_reg_add`](#group__sys__saul__reg_1gaca103e10c65ee97d26b50bae032087ea)`(`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev)`            | Register a device with the SAUL registry.
`public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_nth`](#group__sys__saul__reg_1ga24a911a5ce3165b0d2c3591de911d583)`(int pos)`            | Find a device by its position in the registry.
`public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_type`](#group__sys__saul__reg_1ga0adb4c2fe6dedb54f586e88f25e2041a)`(uint8_t type)`            | Find the first device by its type in the registry.
`public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_name`](#group__sys__saul__reg_1gad882ba47657b5721a76573a42bdd33d5)`(const char * name)`            | Find the first device by its name in the registry.
`public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_type_and_name`](#group__sys__saul__reg_1ga7f8ce7ab967064c65ad92a8010fe534b)`(uint8_t type,const char * name)`            | Find the first device by its type and name in the registry.
`public int `[`saul_reg_read`](#group__sys__saul__reg_1gae307c1e37be5eec30cd62ac65cf08192)`(`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev,`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * res)`            | Read data from the given device.
`public int `[`saul_reg_write`](#group__sys__saul__reg_1ga6ca94b517c5c162187b656fcee03ae26)`(`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * data)`            | Write data to the given device.
`struct `[`saul_reg`](#structsaul__reg) | SAUL registry entry.
`struct `[`saul_reg_info_t`](#structsaul__reg__info__t) | Additional data to collect for each entry.

## Members

#### `public int `[`saul_reg_add`](#group__sys__saul__reg_1gaca103e10c65ee97d26b50bae032087ea)`(`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev)` 

Register a device with the SAUL registry.

Make sure the registry entry the `dev` pointer is pointing to resides in some persistent memory location and not on some position on the stack where it will be overwritten...

#### Parameters
* `dev` pointer to a pre-populated registry entry

#### Returns
0 on success 

#### Returns
-ENODEV on invalid entry given

#### `public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_nth`](#group__sys__saul__reg_1ga24a911a5ce3165b0d2c3591de911d583)`(int pos)` 

Find a device by its position in the registry.

#### Parameters
* `pos` position to look up

#### Returns
pointer to the device at position specified by `pos`

#### Returns
NULL if no device is registered at that position

#### `public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_type`](#group__sys__saul__reg_1ga0adb4c2fe6dedb54f586e88f25e2041a)`(uint8_t type)` 

Find the first device by its type in the registry.

#### Parameters
* `type` the device type to look for

#### Returns
pointer to the first device matching the given type 

#### Returns
NULL if no device of that type could be found

#### `public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_name`](#group__sys__saul__reg_1gad882ba47657b5721a76573a42bdd33d5)`(const char * name)` 

Find the first device by its name in the registry.

#### Parameters
* `name` the name to look for

#### Returns
pointer to the first device matching the given name 

#### Returns
NULL if no device with that name could be found

#### `public `[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * `[`saul_reg_find_type_and_name`](#group__sys__saul__reg_1ga7f8ce7ab967064c65ad92a8010fe534b)`(uint8_t type,const char * name)` 

Find the first device by its type and name in the registry.

#### Parameters
* `type` the device type to look for 

* `name` the name to look for

#### Returns
pointer to the first device matching the given type and name 

#### Returns
NULL if no device with that type and name could be found

#### `public int `[`saul_reg_read`](#group__sys__saul__reg_1gae307c1e37be5eec30cd62ac65cf08192)`(`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev,`[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * res)` 

Read data from the given device.

#### Parameters
* `dev` device to read from 

* `res` location to store the results in

#### Returns
the number of data elements read to `res` [1-3] 

#### Returns
-ENODEV if given device is invalid 

#### Returns
-ENOTSUP if read operation is not supported by the device 

#### Returns
-ECANCELED on device errors

#### `public int `[`saul_reg_write`](#group__sys__saul__reg_1ga6ca94b517c5c162187b656fcee03ae26)`(`[`saul_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__saul__reg_1gafb7f1798a493eb6939dcb56fd7b9a494)` * dev,const `[`phydat_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_phydat.md#structphydat__t)` * data)` 

Write data to the given device.

#### Parameters
* `dev` device to write to 

* `data` data to write to the device

#### Returns
the number of data elements processed by the device 

#### Returns
-ENODEV if given device is invalid 

#### Returns
-ENOTSUP if read operation is not supported by the device 

#### Returns
-ECANCELED on device errors

# struct `saul_reg` 

SAUL registry entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public struct `[`saul_reg`](#structsaul__reg)` * `[`next`](#structsaul__reg_1afac66608a7ecb9d02d1d8c4b0c49e4c2) | pointer to the next device
`public void * `[`dev`](#structsaul__reg_1aa0259e0d704d923f1d310b69e4f0ee30) | pointer to the device descriptor
`public const char * `[`name`](#structsaul__reg_1a9124cb0208952ce4c089f039f29d9216) | string identifier for the device
`public `[`saul_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_saul.md#structsaul__driver__t)` const  * `[`driver`](#structsaul__reg_1a294280e870c6241b800c84222602e398) | the devices read callback

## Members

#### `public struct `[`saul_reg`](#structsaul__reg)` * `[`next`](#structsaul__reg_1afac66608a7ecb9d02d1d8c4b0c49e4c2) 

pointer to the next device

#### `public void * `[`dev`](#structsaul__reg_1aa0259e0d704d923f1d310b69e4f0ee30) 

pointer to the device descriptor

#### `public const char * `[`name`](#structsaul__reg_1a9124cb0208952ce4c089f039f29d9216) 

string identifier for the device

#### `public `[`saul_driver_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_saul.md#structsaul__driver__t)` const  * `[`driver`](#structsaul__reg_1a294280e870c6241b800c84222602e398) 

the devices read callback

# struct `saul_reg_info_t` 

Additional data to collect for each entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public const char * `[`name`](#structsaul__reg__info__t_1a8739950100475b85571bbd983f574f9a) | string identifier for a device

## Members

#### `public const char * `[`name`](#structsaul__reg__info__t_1a8739950100475b85571bbd983f574f9a) 

string identifier for a device

