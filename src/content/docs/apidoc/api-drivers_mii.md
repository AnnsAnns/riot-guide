---
title: api-drivers_mii.md
description: api-drivers_mii.md
---
# group `drivers_mii` 

Utilities.

This module contains constants and helpers as library to help working with Ethernet PHYs connected via the Media-Independent Interface (MII) or the Reduced Media-Independent Interface (RMII)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline static bool `[`mii_can_100_mbps_full_dp`](#group__drivers__mii_1ga8957414cf8f851ee26f004680cfa8773)`(uint16_t bmsr)`            | Check if an Ethernet PHY supports 100 Mbps at full duplex.
`public inline static bool `[`mii_can_100_mbps_half_dp`](#group__drivers__mii_1ga69225e86f545e0edeae78e7eccd5a320)`(uint16_t bmsr)`            | Check if an Ethernet PHY supports 100 Mbps at half duplex.
`public inline static bool `[`mii_can_10_mbps_full_dp`](#group__drivers__mii_1ga6b066052e1c1d5c9bb16a014225aafed)`(uint16_t bmsr)`            | Check if an Ethernet PHY supports 10 Mbps at full duplex.
`public inline static bool `[`mii_can_10_mbps_half_dp`](#group__drivers__mii_1ga3d5536256a2aee370a46e17ca8a998d3)`(uint16_t bmsr)`            | Check if an Ethernet PHY supports 10 Mbps at half duplex.

## Members

#### `public inline static bool `[`mii_can_100_mbps_full_dp`](#group__drivers__mii_1ga8957414cf8f851ee26f004680cfa8773)`(uint16_t bmsr)` 

Check if an Ethernet PHY supports 100 Mbps at full duplex.

#### Parameters
* `bmsr` Value of the MII basic mode status register

#### Parameters
* `true` PHY supports 100 Mbps at full duplex 

* `false` PHY does not support 100 Mbps at full duplex

#### `public inline static bool `[`mii_can_100_mbps_half_dp`](#group__drivers__mii_1ga69225e86f545e0edeae78e7eccd5a320)`(uint16_t bmsr)` 

Check if an Ethernet PHY supports 100 Mbps at half duplex.

#### Parameters
* `bmsr` Value of the MII basic mode status register

#### Parameters
* `true` PHY supports 100 Mbps at half duplex 

* `false` PHY does not support 100 Mbps at half duplex

#### `public inline static bool `[`mii_can_10_mbps_full_dp`](#group__drivers__mii_1ga6b066052e1c1d5c9bb16a014225aafed)`(uint16_t bmsr)` 

Check if an Ethernet PHY supports 10 Mbps at full duplex.

#### Parameters
* `bmsr` Value of the MII basic mode status register

#### Parameters
* `true` PHY supports 10 Mbps at full duplex 

* `false` PHY does not support 10 Mbps at full duplex

#### `public inline static bool `[`mii_can_10_mbps_half_dp`](#group__drivers__mii_1ga3d5536256a2aee370a46e17ca8a998d3)`(uint16_t bmsr)` 

Check if an Ethernet PHY supports 10 Mbps at half duplex.

#### Parameters
* `bmsr` Value of the MII basic mode status register

#### Parameters
* `true` PHY supports 10 Mbps at half duplex 

* `false` PHY does not support 10 Mbps at half duplex

