---
title: api-drivers_shield_w5100.md
description: api-drivers_shield_w5100.md
---
# group `drivers_shield_w5100` 

Driver for the Arduino W5100 Ethernet Shield.

UsageThe driver is enabled by using the module `shield_w5100`, e.g. with:

```cpp
USEMODULE=shield_w5100 make BOARD=arduino-due -C examples/gnrc_networking
```

It depends on [W5100 ethernet driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__w5100) and provides nothing more than the providing the correct configuration. For this, it depends on the `arduino_pins`, `arduino_spi`, `arduino_shield_uno` and the `arduino_shield_isp` feature. It should work out of the box for any fully Arduino UNO compatible board (including the ISP header) and correct I/O mapping (`arduino_*`) features.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

