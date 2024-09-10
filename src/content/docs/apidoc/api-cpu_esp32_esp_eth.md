---
title: api-cpu_esp32_esp_eth.md
description: api-cpu_esp32_esp_eth.md
---
# group `cpu_esp32_esp_eth` 

ESP32 ethernet network device driver.

This module realizes a netdev interface using the ESP32 Ethernet MAC module.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

ESP32 provides an **Ethernet MAC layer module (EMAC)** according to the IEEE 802.3 standard which can be used together with an external physical layer chip (PHY) to realize a 100/10 Mbps Ethernet interface. Supported PHY chips are the Microchip LAN8710/LAN8720, the IC Plus 101G, and the Texas Instruments TLK110.

The RIOT port for ESP32 realizes with module `esp_eth` a `netdev` driver for the EMAC which uses RIOT's standard Ethernet interface.

If the board has one of the supported PHY layer chips connected to the ESP32, the `esp_eth` module should be enabled by default in board's `Makefile.dep` when module `netdev_default` is used. 
```cpp
ifneq (,$(filter netdev_default,$(USEMODULE)))
    USEMODULE += esp_eth
endif
```
 Otherwise, the application has to add the `esp_eth` module in its makefile when needed.

The board has to have one of the supported PHY modules to be able to use the Ethernet MAC module.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

