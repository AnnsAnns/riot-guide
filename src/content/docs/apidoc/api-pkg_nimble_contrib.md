---
title: api-pkg_nimble_contrib.md
description: api-pkg_nimble_contrib.md
---
# group `pkg_nimble_contrib` 

Basic RIOT integration of NimBLE, including e.g.

stack configuration and (auto)initialization code

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`NIMBLE_CONTROLLER_PRIO`](#group__pkg__nimble__contrib_1gac62ee3b94aac3c877c8418b7a9726353)            | Priority used for NimBLE's controller thread.
`define `[`NIMBLE_CONTROLLER_STACKSIZE`](#group__pkg__nimble__contrib_1ga394592db988eef2984d95fa174db9abf)            | Stacksize used for NimBLE's controller thread.
`define `[`NIMBLE_HOST_PRIO`](#group__pkg__nimble__contrib_1ga9e472480e12d076779fb12fbaf893b1e)            | Priority used for NimBLE's host thread.
`define `[`NIMBLE_HOST_STACKSIZE`](#group__pkg__nimble__contrib_1gaa1b85636e8b239217a6d1c43713ec15e)            | Stacksize used for NimBLE's host thread.
`enum `[`nimble_phy_t`](#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416)            | BLE PHY modes.
`public void `[`nimble_riot_init`](#group__pkg__nimble__contrib_1gaa390592fa24f92925b8be6ef2ebeeb9f)`(void)`            | Setup and run NimBLE's controller and host threads.

## Members

#### `define `[`NIMBLE_CONTROLLER_PRIO`](#group__pkg__nimble__contrib_1gac62ee3b94aac3c877c8418b7a9726353) 

Priority used for NimBLE's controller thread.

This should be as high as possible.

#### `define `[`NIMBLE_CONTROLLER_STACKSIZE`](#group__pkg__nimble__contrib_1ga394592db988eef2984d95fa174db9abf) 

Stacksize used for NimBLE's controller thread.

#### `define `[`NIMBLE_HOST_PRIO`](#group__pkg__nimble__contrib_1ga9e472480e12d076779fb12fbaf893b1e) 

Priority used for NimBLE's host thread.

#### `define `[`NIMBLE_HOST_STACKSIZE`](#group__pkg__nimble__contrib_1gaa1b85636e8b239217a6d1c43713ec15e) 

Stacksize used for NimBLE's host thread.

#### `enum `[`nimble_phy_t`](#group__pkg__nimble__contrib_1ga9eaf9a1a15ec72187da22a550f368416) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NIMBLE_PHY_INVALID            | PHY mode invalid.
NIMBLE_PHY_1M            | legacy 1Mbit PHY mode (always supported)

BLE PHY modes.

#### `public void `[`nimble_riot_init`](#group__pkg__nimble__contrib_1gaa390592fa24f92925b8be6ef2ebeeb9f)`(void)` 

Setup and run NimBLE's controller and host threads.

