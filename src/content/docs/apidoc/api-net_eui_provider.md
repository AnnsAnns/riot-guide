---
title: api-net_eui_provider.md
description: api-net_eui_provider.md
---
# group `net_eui_provider` 

MAC address management.

AboutAn EUI provider provides an Extended Unique Identifier, that is a hardware address for a network device.

A board may have an EEPROM with a unique ID (e.g. [AT24MAC unique ID chip](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__at24mac)) that is used to store an address, a unique address is stored in a config area of the board's flash during production, etc.

The EUI provider is connected to a network device that will then use this address.

How it worksIf there is only one EUI provider on the board, the configuration is done through three defines:

* `EUIxx_PROVIDER_TYPE` to specify which device the EUI should be used for. That is to prevent it from matching to 'virtual' devices like ethos or SLIP. It is of course also possible to provide a fixed address for 'virtual' devices this way.

* `EUIxx_PROVIDER_INDEX` to specify which interface the EUI should be used for if there are multiple interfaces.

* `EUIxx_PROVIDER_FUNC` the function that provides the EUI. It can use an optional `EUIxx_PROVIDER_ARG` argument that is passed unmodified.

If more than one EUI provider is present on the board, an array of `euiXX_conf_t` has to be provided to `EUI64_PROVIDER_PARAMS`:

```cpp
#define EUI64_PROVIDER_PARAMS {              \
             .provider = _board_get_eui,     \
             .arg      = BOARD_ADDR_SUBGHZ,  \
             .type     = NETDEV_AT86RF215,   \
             .index    = 0,   },             \
                              {              \
             .provider = _board_get_eui,     \
             .arg      = BOARD_ADDR_24GHZ,   \
             .type     = NETDEV_AT86RF215,   \
             .index    = 1,   }
```

This also assumes a `_board_get_eui()` function to provide the EUI. For example, it could read an EUI from a config region on the flash that is provided with the memory-mapped addresses `BOARD_ADDR_SUBGHZ` and `BOARD_ADDR_24GHZ`. The function would then do

```cpp
static inline int _board_get_eui(const void *src, [eui64_t](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t) *addr)
{
    memcpy(addr, src, sizeof(*addr));
    return 0;
}
```

RecommendationsDo not use `NETDEV_ANY` as EUI device type. Otherwise if you have two interfaces both will match the same EUI.

It is however possible to use `NETDEV_INDEX_ANY` if you have multiple interfaces of the same type and your EUI provider function takes the index into account (or returns error if the index is out of bounds with the available ids).

Fixed addresses are only guaranteed if the network devices are also fixed. E.g. if you usually have two netdevs and disable the first one at compile-time the second interface will now use the first slot / index and therefore also use the EUI provider that was previously used by interface in the first slot.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`netdev_eui48_get`](#group__net__eui__provider_1ga2dc4b87dd90b4dfccab81327a13501f1)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev,`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)`            | Generates an EUI-48 address for the netdev interface.
`public void `[`netdev_eui64_get`](#group__net__eui__provider_1gaaeacb0ffb4c2a37e039a882bc4e61e4e)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)`            | Generates an EUI-64 address for the netdev interface.
`public inline static void `[`eui_short_from_eui64`](#group__net__eui__provider_1ga21bf789be9ce8be7fbb12d1698ead8de)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr_long,`[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * addr_short)`            | Get a short unicast address from an EUI-64.
`struct `[`eui48_conf_t`](#structeui48__conf__t) | Structure to hold providers for EUI-48 addresses.
`struct `[`eui64_conf_t`](#structeui64__conf__t) | Structure to hold providers for EUI-64 addresses.

## Members

#### `public void `[`netdev_eui48_get`](#group__net__eui__provider_1ga2dc4b87dd90b4dfccab81327a13501f1)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev,`[`eui48_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui48.md#structeui48__t)` * addr)` 

Generates an EUI-48 address for the netdev interface.

It is possible to supply a board-specific, constant address by implementing a EUI-48 provider function. If no such function is available, this will fall back to [luid_get_eui48](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__luid_1ga376451f0fff70d6f3ef1d17221dfcba3).

#### Parameters
* `netdev` The network device for which the address is generated. 

* `addr` The generated EUI-48 address

#### `public void `[`netdev_eui64_get`](#group__net__eui__provider_1gaaeacb0ffb4c2a37e039a882bc4e61e4e)`(`[`netdev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1ga14012f723b7591ad2fa42ace34601ac4)` * netdev,`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr)` 

Generates an EUI-64 address for the netdev interface.

It is possible to supply a board-specific, constant address by implementing a EUI-64 provider function. If no such function is available, this will fall back to [luid_get_eui64](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__luid_1gab4a2825933935633f5f681abd9f84b4c).

#### Parameters
* `netdev` The network device for which the address is generated. 

* `addr` The generated EUI-64 address

#### `public inline static void `[`eui_short_from_eui64`](#group__net__eui__provider_1ga21bf789be9ce8be7fbb12d1698ead8de)`(`[`eui64_t`](./doc/starlight-docs/src/content/docs/apidoc/api-net_eui64.md#unioneui64__t)` * addr_long,`[`network_uint16_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#byteorder_8h_1a639ad79c8926cb896d5a8f12b14d49e3)` * addr_short)` 

Get a short unicast address from an EUI-64.

The resulting address is built from the provided long address. The last two bytes of the long address will be used as the short address with the first bit cleared.

#### Parameters
* `addr_long` the address to base the short address on 

* `addr_short` memory location to copy the address into.

# struct `eui48_conf_t` 

Structure to hold providers for EUI-48 addresses.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_get_eui48_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__eui__provider_1ga21410749f81d4ee52d76cf81b8171cfc)` `[`provider`](#structeui48__conf__t_1ae1318dd590fce702688fdf81ed0b9315) | function to provide an EUI-48
`public `[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` `[`type`](#structeui48__conf__t_1a02c91b6b009ddb3033884806060954bf) | device type to match
`public uint8_t `[`index`](#structeui48__conf__t_1a3bf4dcf1b2857a48b3f446887551dddb) | device index to match or `NETDEV_INDEX_ANY`

## Members

#### `public `[`netdev_get_eui48_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__eui__provider_1ga21410749f81d4ee52d76cf81b8171cfc)` `[`provider`](#structeui48__conf__t_1ae1318dd590fce702688fdf81ed0b9315) 

function to provide an EUI-48

#### `public `[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` `[`type`](#structeui48__conf__t_1a02c91b6b009ddb3033884806060954bf) 

device type to match

#### `public uint8_t `[`index`](#structeui48__conf__t_1a3bf4dcf1b2857a48b3f446887551dddb) 

device index to match or `NETDEV_INDEX_ANY`

# struct `eui64_conf_t` 

Structure to hold providers for EUI-64 addresses.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`netdev_get_eui64_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__eui__provider_1ga81db529a21efdddd5641103efc5a46fd)` `[`provider`](#structeui64__conf__t_1ab6b800418f93a3ad6e41f0757ba72c31) | function to provide an EUI-64
`public `[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` `[`type`](#structeui64__conf__t_1a790b42cab0e3ba7d14d3b72c58cd0e5b) | device type to match
`public uint8_t `[`index`](#structeui64__conf__t_1a849b3e982dff59b220e70985ec6d9c1f) | device index to match or `NETDEV_INDEX_ANY`

## Members

#### `public `[`netdev_get_eui64_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__eui__provider_1ga81db529a21efdddd5641103efc5a46fd)` `[`provider`](#structeui64__conf__t_1ab6b800418f93a3ad6e41f0757ba72c31) 

function to provide an EUI-64

#### `public `[`netdev_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__netdev__api_1gabf6e398293fe72dc6936cf7e828841fb)` `[`type`](#structeui64__conf__t_1a790b42cab0e3ba7d14d3b72c58cd0e5b) 

device type to match

#### `public uint8_t `[`index`](#structeui64__conf__t_1a849b3e982dff59b220e70985ec6d9c1f) 

device index to match or `NETDEV_INDEX_ANY`

