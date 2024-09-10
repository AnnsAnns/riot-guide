---
title: api-sys_universal_address.md
description: api-sys_universal_address.md
---
# group `sys_universal_address` 

universal address container

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`UNIVERSAL_ADDRESS_SIZE`](#group__sys__universal__address_1ga7d2fe98a8d0d4fd02b732eee18240381)            | size of the used addresses in bytes
`define `[`UNIVERSAL_ADDRESS_EQUAL`](#group__sys__universal__address_1ga2f06b7f9019e63c60aeeea54a579b756)            | return value indicating the compared addresses are equal
`define `[`UNIVERSAL_ADDRESS_MATCHING_PREFIX`](#group__sys__universal__address_1ga8a7734261819a964013b387301515dba)            | return value indicating the compared addresses match up to a certain prefix
`define `[`UNIVERSAL_ADDRESS_IS_ALL_ZERO_ADDRESS`](#group__sys__universal__address_1gaeb1914e4a2d73f568ce18eb55ebf0e3f)            | return value indicating all address bits of the entry are `0`.
`public void `[`universal_address_init`](#group__sys__universal__address_1ga2da3f9630e89e0cb356e7b99759d5b2f)`(void)`            | Initialize the data structure for the entries.
`public void `[`universal_address_reset`](#group__sys__universal__address_1ga410172a09db613c25cf06b4080e058fa)`(void)`            | Resets the [universal_address_container_t::use_count](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t_1a3e812a59396500ca4c461b2b2f402a5c) for all entries.
`public `[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * `[`universal_address_add`](#group__sys__universal__address_1gaf3752d310658197d9a9afda8b0cd2763)`(uint8_t * addr,size_t addr_size)`            | Add a given address to the universal address entries.
`public void `[`universal_address_rem`](#group__sys__universal__address_1ga8fcf220eaa99ffccf7fff2e39f4764be)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry)`            | Add a given container from the universal address entries.
`public uint8_t * `[`universal_address_get_address`](#group__sys__universal__address_1gad7569e979976ab29894cb4e6f50862ba)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry,uint8_t * addr,size_t * addr_size)`            | Copy the address from the given container to the provided pointer.
`public int `[`universal_address_compare`](#group__sys__universal__address_1gae3c7a34c1b5d2a5c3b6bdd04aa24987b)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry,uint8_t * addr,size_t * addr_size_in_bits)`            | Determine if the entry equals the provided address This function requires to be provided with the full size of the used address type behind `addr` to be comparable with the address stored in `entry`.
`public int `[`universal_address_compare_prefix`](#group__sys__universal__address_1gac86242b19171eecf7fa2e12bb15f10b1)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry,uint8_t * prefix,size_t prefix_size_in_bits)`            | Determine if the entry equals the provided prefix This function requires to be provided with the full size of the used address type behind `prefix` to be comparable with the address stored in `entry`.
`public void `[`universal_address_print_entry`](#group__sys__universal__address_1ga2a48dee78011e436ea04e579a54bfdf0)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry)`            | Print the content of the given entry.
`public int `[`universal_address_get_num_used_entries`](#group__sys__universal__address_1ga7050d1472529290aa91292bfb33ad54f)`(void)`            | Return the number of used entries.
`public void `[`universal_address_print_table`](#group__sys__universal__address_1gad54427223316715488a7e64bdfa8c9b8)`(void)`            | Print the content of the generic address table up to the used element.
`struct `[`universal_address_container_t`](#structuniversal__address__container__t) | The container descriptor used to identify a universal address entry.

## Members

#### `define `[`UNIVERSAL_ADDRESS_SIZE`](#group__sys__universal__address_1ga7d2fe98a8d0d4fd02b732eee18240381) 

size of the used addresses in bytes

#### `define `[`UNIVERSAL_ADDRESS_EQUAL`](#group__sys__universal__address_1ga2f06b7f9019e63c60aeeea54a579b756) 

return value indicating the compared addresses are equal

#### `define `[`UNIVERSAL_ADDRESS_MATCHING_PREFIX`](#group__sys__universal__address_1ga8a7734261819a964013b387301515dba) 

return value indicating the compared addresses match up to a certain prefix

#### `define `[`UNIVERSAL_ADDRESS_IS_ALL_ZERO_ADDRESS`](#group__sys__universal__address_1gaeb1914e4a2d73f568ce18eb55ebf0e3f) 

return value indicating all address bits of the entry are `0`.

Its considered as default route address that matches any other prefix.

#### `public void `[`universal_address_init`](#group__sys__universal__address_1ga2da3f9630e89e0cb356e7b99759d5b2f)`(void)` 

Initialize the data structure for the entries.

#### `public void `[`universal_address_reset`](#group__sys__universal__address_1ga410172a09db613c25cf06b4080e058fa)`(void)` 

Resets the [universal_address_container_t::use_count](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t_1a3e812a59396500ca4c461b2b2f402a5c) for all entries.

#### `public `[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * `[`universal_address_add`](#group__sys__universal__address_1gaf3752d310658197d9a9afda8b0cd2763)`(uint8_t * addr,size_t addr_size)` 

Add a given address to the universal address entries.

If the entry already exists, the [universal_address_container_t::use_count](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t_1a3e812a59396500ca4c461b2b2f402a5c) will be increased.

#### Parameters
* `addr` pointer to the address 

* `addr_size` the number of bytes required for the address entry

#### Returns
pointer to the [universal_address_container_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t) containing the address on success 

#### Returns
NULL if the address could not be inserted

#### `public void `[`universal_address_rem`](#group__sys__universal__address_1ga8fcf220eaa99ffccf7fff2e39f4764be)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry)` 

Add a given container from the universal address entries.

If the entry exists, the [universal_address_container_t::use_count](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t_1a3e812a59396500ca4c461b2b2f402a5c) will be decreased.

#### Parameters
* `entry` pointer to the [universal_address_container_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t) to be removed

#### `public uint8_t * `[`universal_address_get_address`](#group__sys__universal__address_1gad7569e979976ab29894cb4e6f50862ba)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry,uint8_t * addr,size_t * addr_size)` 

Copy the address from the given container to the provided pointer.

#### Parameters
* `entry` pointer to the [universal_address_container_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)

* `addr` pointer to store the address entry 

* `addr_size` pointer providing the size of available memory on addr this value is overwritten with the actual size required

#### Returns
addr if the address is copied to the addr destination 

#### Returns
NULL if the size is insufficient for copy

#### `public int `[`universal_address_compare`](#group__sys__universal__address_1gae3c7a34c1b5d2a5c3b6bdd04aa24987b)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry,uint8_t * addr,size_t * addr_size_in_bits)` 

Determine if the entry equals the provided address This function requires to be provided with the full size of the used address type behind `addr` to be comparable with the address stored in `entry`.

#### Parameters
* `entry` pointer to the [universal_address_container_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t) for compare 

* `addr` pointer to the address for compare 

* `addr_size_in_bits` the number of bits used for the address entry on successful return this value is overwritten with the number of matching bits till the first of trailing `0`s

#### Returns
UNIVERSAL_ADDRESS_EQUAL if the entries are equal 

#### Returns
UNIVERSAL_ADDRESS_MATCHING_PREFIX if the entry matches to a certain prefix (trailing '0's in `entry`) 

#### Returns
UNIVERSAL_ADDRESS_IS_ALL_ZERO_ADDRESS if the entry address is all `0`s and considered as default route 

#### Returns
-ENOENT if the given addresses do not match

#### `public int `[`universal_address_compare_prefix`](#group__sys__universal__address_1gac86242b19171eecf7fa2e12bb15f10b1)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry,uint8_t * prefix,size_t prefix_size_in_bits)` 

Determine if the entry equals the provided prefix This function requires to be provided with the full size of the used address type behind `prefix` to be comparable with the address stored in `entry`.

#### Parameters
* `entry` pointer to the [universal_address_container_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t) for compare 

* `prefix` pointer to the address for compare 

* `prefix_size_in_bits` the number of bits used for the prefix entry. This size MUST be the full address size including trailing '0's, e.g. for an [ipv6_addr_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t) it would be sizeof(ipv6_addr_t) regardless if the stored prefix is < ::/128

#### Returns
UNIVERSAL_ADDRESS_EQUAL if the entries are equal 

#### Returns
UNIVERSAL_ADDRESS_MATCHING_PREFIX if the entry matches to a certain prefix (trailing '0's in `prefix`) 

#### Returns
-ENOENT if the given addresses do not match

#### `public void `[`universal_address_print_entry`](#group__sys__universal__address_1ga2a48dee78011e436ea04e579a54bfdf0)`(`[`universal_address_container_t`](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t)` * entry)` 

Print the content of the given entry.

#### Parameters
* `entry` pointer to the [universal_address_container_t](./doc/starlight-docs/src/content/docs/apidoc/api-sys_universal_address.md#structuniversal__address__container__t) to be printed

#### `public int `[`universal_address_get_num_used_entries`](#group__sys__universal__address_1ga7050d1472529290aa91292bfb33ad54f)`(void)` 

Return the number of used entries.

#### `public void `[`universal_address_print_table`](#group__sys__universal__address_1gad54427223316715488a7e64bdfa8c9b8)`(void)` 

Print the content of the generic address table up to the used element.

# struct `universal_address_container_t` 

The container descriptor used to identify a universal address entry.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`use_count`](#structuniversal__address__container__t_1a3e812a59396500ca4c461b2b2f402a5c) | The number of entries link here.
`public uint8_t `[`address_size`](#structuniversal__address__container__t_1ae31ee9e3ba7e2dd04476b914fabb5d3c) | Size in bytes of the used generic address.
`public uint8_t `[`address`](#structuniversal__address__container__t_1a52da88181440202f577d7a5a051a65d4) | The generic address data.

## Members

#### `public uint8_t `[`use_count`](#structuniversal__address__container__t_1a3e812a59396500ca4c461b2b2f402a5c) 

The number of entries link here.

#### `public uint8_t `[`address_size`](#structuniversal__address__container__t_1ae31ee9e3ba7e2dd04476b914fabb5d3c) 

Size in bytes of the used generic address.

#### `public uint8_t `[`address`](#structuniversal__address__container__t_1a52da88181440202f577d7a5a051a65d4) 

The generic address data.

