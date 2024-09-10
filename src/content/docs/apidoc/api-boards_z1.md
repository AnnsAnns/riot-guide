---
title: api-boards_z1.md
description: api-boards_z1.md
---
# group `boards_z1` 

Support for the Zolertia Z1 board.

Components
MCU   |[MSP430F2617](http://zolertia.sourceforge.net/wiki/index.php/Mainpage:z1#MSP430F2617_MCU_from_Texas_Instruments)
--------- | ---------
Radio   |[CC2420](http://zolertia.sourceforge.net/wiki/index.php/Mainpage:z1#CC2420_Transceiver_from_Texas_Instruments_.2F_Chipcon)
|[Embedded CeramicAntenna](http://zolertia.sourceforge.net/wiki/index.php/Mainpage:z1#Antennae)
USB-to-Serial   |[CP2102](http://zolertia.sourceforge.net/wiki/index.php/Mainpage:z1#CP2102_USB-to-UART_Bridge_Controller_from_SiLabs)
Sensors   |[ADXL345](http://zolertia.sourceforge.net/wiki/index.php/Z1_Sensors#ADXL345_Accelerometer) 3-axis digital accelerometer
|[TMP102](http://zolertia.sourceforge.net/wiki/index.php/Z1_Sensors#TMP102_Temperature) Thermometer from Texas Instruments

TodoThe two sensors listed above are not supported yet, this will be done as soon as possible. If someone starts working on this, please open an issue and share the link right here.

OptionsThe Z1 starter platform  an extended version with some supplementary basic actuators, phidgets and ziglets connectors, SMA-RP connector for a concrete antenna, battery (2xAA) enclosure, and MSP430 JTAG connector  is [also available](https://github.com/Zolertia/Resources/wiki/The-Z1-mote). This RIOT port also supports this version, except that supplementary actuators (multi-color LED, wheel potentiometer, buzzer) are not directly defined. This will be done as soon as possible.

Layout

FlashingRIOT comes with a version of `goodfet.bsl`, a flashing tool for MSP430 based platforms. Just link or copy it somewhere into your `$PATH` and you are good to go. e.g. 
```cpp
Bash
$> cp /path/to/RIOT/dist/tools/goodfet/goodfet.bsl /usr/local/bin
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

