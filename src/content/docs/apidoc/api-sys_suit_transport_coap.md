---
title: api-sys_suit_transport_coap.md
description: api-sys_suit_transport_coap.md
---
# group `sys_suit_transport_coap` 

SUIT secure firmware updates over CoAP.

SUIT CoAP helper API Kaspar Schleiser [kaspar@schleiser.de](mailto:kaspar@schleiser.de)

Francisco Molina [francois-xavier.molina@inria.fr](mailto:francois-xavier.molina@inria.fr)

Alexandre Abadie [alexandre.abadie@inria.fr](mailto:alexandre.abadie@inria.fr)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`SUIT_COAP_SUBTREE`](#group__sys__suit__transport__coap_1ga2a224e245f21691b6e8f0afbe9ca6eff)            | SUIT CoAP endpoint entry.

## Members

#### `define `[`SUIT_COAP_SUBTREE`](#group__sys__suit__transport__coap_1ga2a224e245f21691b6e8f0afbe9ca6eff) 

SUIT CoAP endpoint entry.

In order to use, include this header, then add SUIT_COAP_SUBTREE to the nanocoap endpoint array. Mind the alphanumerical sorting!

See examples/suit_update for an example.

