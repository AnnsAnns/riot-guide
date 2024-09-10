---
title: api-net_netif.md
description: api-net_netif.md
---
# group `net_netif` 

Common network interface API.

This allows access to network interfaces regardless of the network stack implementation. The network stack must provide

* A definition for `netif_get_name`

* A definition for `netif_get_opt`

* A definition for `netif_set_opt`

The network stack should also register each interface via `netif_register`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_iter`](#group__net__netif_1ga43c4204555cece2b4e272b8a259d1f68)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * last)`            | Iterator for the interfaces.
`public int `[`netif_get_name`](#group__net__netif_1ga07f75705982ad470453d7300e2d73054)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,char * name)`            | Gets name of an interface.
`public int16_t `[`netif_get_id`](#group__net__netif_1gaec540a47d72a329e0c834ddff7445d4e)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif)`            | Gets the numeric identifier of an interface.
`public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_get_by_name_buffer`](#group__net__netif_1ga8d30033e208072a2aca07115aee14efa)`(const char * name,size_t name_len)`            | Gets interface by name, from a buffer.
`public inline static `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_get_by_name`](#group__net__netif_1ga5777f7cc9a8e982d815f23bdd1f835d1)`(const char * name)`            | Gets interface by name.
`public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_get_by_id`](#group__net__netif_1ga426ce1a4da693a4035b9b2324da553b5)`(int16_t id)`            | Gets interface by a numeric identifier.
`public int `[`netif_get_opt`](#group__net__netif_1gadde9c847c2ec072f6e44a8ed73e97756)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * value,size_t max_len)`            | Gets option from an interface.
`public int `[`netif_set_opt`](#group__net__netif_1gadf46a3ca288cec176c7ab0754e7566e6)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * value,size_t value_len)`            | Sets option to an interface.
`public int `[`netif_register`](#group__net__netif_1gaa356f13fc006043bf79169bb00707dd8)`(`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif)`            | Registers a network interface in the global interface list.
`public inline static ssize_t `[`netif_get_ipv6`](#group__net__netif_1ga949d09eb4dcead6dff22d8b2bc32228d)`(`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dest,size_t numof)`            | Get IPv6 address(es) of the given interface.
`public ssize_t `[`netifs_get_ipv6`](#group__net__netif_1gaa846c0989febb6dfdd301a5fe5834970)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dest,size_t numof)`            | Get IPv6 address(es) of **all** interfaces.
`public void `[`netif_print_ipv6`](#group__net__netif_1ga80321d0c690ebe89df07d2b243e3013a)`(`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,const char * separator)`            | Print the IPv6 address(es) of the given interface.
`public void `[`netifs_print_ipv6`](#group__net__netif_1ga7e7d61060534a4e3401d43fb1588ad6b)`(const char * separator)`            | Print the IPv6 address(es) of **all** interface.
`struct `[`netif_t`](#structnetif__t) | [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface descriptor.

## Members

#### `public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_iter`](#group__net__netif_1ga43c4204555cece2b4e272b8a259d1f68)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * last)` 

Iterator for the interfaces.

Returns interface after `last`. To start use `last == NULL`.

#### Parameters
* `last` The previous interface. Use `NULL` to start iteration.

#### Returns
next network interface. 

#### Returns
NULL, if there is no interface after `last`

#### `public int `[`netif_get_name`](#group__net__netif_1ga07f75705982ad470453d7300e2d73054)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,char * name)` 

Gets name of an interface.

`name != NULL`

name holds at least [CONFIG_NETIF_NAMELENMAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netif__conf_1ga7bfbef256622aec4459c234898715562) characters

Supposed to be implemented by the networking module. `name` must be zero-terminated in the result!

#### Parameters
* `netif` A network interface. 

* `name` The name of the interface. Must not be `NULL`. Must at least hold [CONFIG_NETIF_NAMELENMAX](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netif__conf_1ga7bfbef256622aec4459c234898715562) bytes.

#### Returns
length of `name` on success

#### `public int16_t `[`netif_get_id`](#group__net__netif_1gaec540a47d72a329e0c834ddff7445d4e)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif)` 

Gets the numeric identifier of an interface.

#### Parameters
* `netif` A network interface.

#### Returns
The numeric identifier of an interface 

#### Returns
-1 if `netif` is not registered

#### `public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_get_by_name_buffer`](#group__net__netif_1ga8d30033e208072a2aca07115aee14efa)`(const char * name,size_t name_len)` 

Gets interface by name, from a buffer.

`name != NULL`

#### Parameters
* `name` The name of an interface as an array of chars. Must not be `NULL`. 

* `name_len` Number of characters in `name`.

#### Returns
Pointer to the interface that matches the name 

#### Parameters
* `NULL` if no interface is named `name`.

#### `public inline static `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_get_by_name`](#group__net__netif_1ga5777f7cc9a8e982d815f23bdd1f835d1)`(const char * name)` 

Gets interface by name.

`name != NULL`

#### Parameters
* `name` The name of an interface as a zero-terminated. Must not be `NULL`.

#### Returns
The interface on success. 

#### Returns
NULL if no interface is named `name`.

#### `public `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * `[`netif_get_by_id`](#group__net__netif_1ga426ce1a4da693a4035b9b2324da553b5)`(int16_t id)` 

Gets interface by a numeric identifier.

#### Parameters
* `id` A numeric identifier.

#### Returns
The interface on success. 

#### Returns
NULL if no interface with identifier `id`.

#### `public int `[`netif_get_opt`](#group__net__netif_1gadde9c847c2ec072f6e44a8ed73e97756)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * value,size_t max_len)` 

Gets option from an interface.

Supposed to be implemented by the networking module

#### Parameters
* `netif` A network interface. 

* `opt` Option type. 

* `context` (Optional) context to the given option 

* `value` Pointer to store the option's value in. 

* `max_len` Maximal amount of byte that fit into `value`.

#### Returns
Number of bytes written to `value`. 

#### Returns
`< 0` on error, 0 on success.

#### `public int `[`netif_set_opt`](#group__net__netif_1gadf46a3ca288cec176c7ab0754e7566e6)`(const `[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,`[`netopt_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netopt_1ga19e30424c1ab107c9c84dc0cb29d9906)` opt,uint16_t context,void * value,size_t value_len)` 

Sets option to an interface.

Supposed to be implemented by the networking module

#### Parameters
* `netif` A network interface. 

* `opt` Option type. 

* `context` (Optional) context to the given option 

* `value` Pointer to store the option's value in. 

* `value_len` The length of `value`.

#### Returns
Number of bytes used from `value`. 

#### Returns
`< 0` on error, 0 on success.

#### `public int `[`netif_register`](#group__net__netif_1gaa356f13fc006043bf79169bb00707dd8)`(`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif)` 

Registers a network interface in the global interface list.

This functions should be called when initializing an interface.

#### Parameters
* `netif` Interface to be registered

#### Returns
0 on success 

#### Returns
-EINVAL if `netif` is NULL.

#### `public inline static ssize_t `[`netif_get_ipv6`](#group__net__netif_1ga949d09eb4dcead6dff22d8b2bc32228d)`(`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dest,size_t numof)` 

Get IPv6 address(es) of the given interface.

#### Parameters
* `netif` Interface to get the IPv6 address(es) from 

* `dest` Array of IPv6 addresses to write to 

* `numof` Size of `dest` in array elements (not in bytes!) 

#### Parameters
* `-1` Failed 

#### Returns
Number of addresses written to `dest`

#### `public ssize_t `[`netifs_get_ipv6`](#group__net__netif_1gaa846c0989febb6dfdd301a5fe5834970)`(`[`ipv6_addr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_addr.md#unionipv6__addr__t)` * dest,size_t numof)` 

Get IPv6 address(es) of **all** interfaces.

#### Parameters
* `dest` Array of IPv6 addresses to write to 

* `numof` Size of `dest` in array elements (not in bytes!) 

#### Parameters
* `-1` Failed 

#### Returns
Number of addresses written to `dest`

#### `public void `[`netif_print_ipv6`](#group__net__netif_1ga80321d0c690ebe89df07d2b243e3013a)`(`[`netif_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_netif.md#structnetif__t)` * netif,const char * separator)` 

Print the IPv6 address(es) of the given interface.

#### Parameters
* `netif` Interface to print the IPv6 address(es) of 

* `separator` Separator to print between the IPv6 addresses

Usage: 
```cpp
// print IPv6 addrs of netif as JSON
[printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("{\"IPv6 addresses\": [\"");
[netif_print_ipv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netif_1ga80321d0c690ebe89df07d2b243e3013a)(netif, "\", \"");
puts("\"]}");
```

#### `public void `[`netifs_print_ipv6`](#group__net__netif_1ga7e7d61060534a4e3401d43fb1588ad6b)`(const char * separator)` 

Print the IPv6 address(es) of **all** interface.

#### Parameters
* `separator` Separator to print between the IPv6 addresses

Usage: 
```cpp
// print all IPv6 addrs as JSON
[printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("{\"IPv6 addresses\": [\"");
[netifs_print_ipv6](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__netif_1ga7e7d61060534a4e3401d43fb1588ad6b)("\", \"");
puts("\"]}");
```

# struct `netif_t` 

[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) interface descriptor.

All network interfaces should inherit from this structure.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`node`](#structnetif__t_1ac9c5eecdaa56ddccc75091e4dbb9e785) | Pointer to the next interface.

## Members

#### `public `[`list_node_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#list_8h_1a865bd3b3cd44b1d8f1d63746748fa807)` `[`node`](#structnetif__t_1ac9c5eecdaa56ddccc75091e4dbb9e785) 

Pointer to the next interface.

