---
title: api-drivers_nrf5x_nrfmin_gnrc.md
description: api-drivers_nrf5x_nrfmin_gnrc.md
---
# group `drivers_nrf5x_nrfmin_gnrc` 

Minimal driver for the NRF51 radio.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void `[`gnrc_netdev_nrfmin_init`](#group__drivers__nrf5x__nrfmin__gnrc_1gadfadf8c13c9022b95b8c8a1ba3c3e822)`(void)`            | Initialize the nrfmin GNRC adapter, also takes care of the nrfmin driver setup.

## Members

#### `public void `[`gnrc_netdev_nrfmin_init`](#group__drivers__nrf5x__nrfmin__gnrc_1gadfadf8c13c9022b95b8c8a1ba3c3e822)`(void)` 

Initialize the nrfmin GNRC adapter, also takes care of the nrfmin driver setup.

As we have never more than 1 nrfmin device on a board, we can make some simplifications when it come to allocating device descriptors and adapter data structures -> we do this right in the driver/adapter code, so this function can be called from auto_init as is, without the need for external memory allocation.

