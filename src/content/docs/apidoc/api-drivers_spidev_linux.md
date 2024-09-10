---
title: api-drivers_spidev_linux.md
description: api-drivers_spidev_linux.md
---
# group `drivers_spidev_linux` 

Implementation of SPI access from Linux User Space.

This module allows to connect a RIOT application that runs on a Linux host to the physical SPI bus(ses) of that host. To do so, the application has to be compiled for the native board in a Linux environment.

SPI support is automatically included if either a module requiring the `PERIPH_SPI` feature is added to the application or if it is explicitly listed as `FEATURES_REQUIRED` in the application's Makefile.

At runtime, the process has to be connected to a specific bus on the host machine. SPI buses are exposed as `/dev/spidevB.D` character files, where B is the Bus ID (MISO, MOSI and SCLK lines) and D denotes the connected device or hardware chip select line. Ideally, this structure should be reflected when mapping the device files to RIOT SPI buses.

Example:

```cpp
$ ./riot_native_app --spi=0:0:/dev/spidev0.0 --spi=0:1:/dev/spidev0.1
```

This will add `/dev/spidev0.0` and `/dev/spidev0.1` as [SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9) in RIOT. The first device can be used with [SPI_HWCS(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga292c9a0a5b03329a153ad28343ff2e09) as CS parameter, the second one with [SPI_HWCS(1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga292c9a0a5b03329a153ad28343ff2e09) as CS parameter.

Multiple SPI buses can be added by increasing SPI_NUMOF in the Makefile: 
```cpp
CFLAGS += -DSPI_NUMOF=n
```

The sames goes for the SPI_MAXCS parameter that defines the maximum number of SPI_HWCS values per bus.

Buses that aren't assigned during startup will return either SPI_NODEV or SPI_NOCS when accessed.

If the SPI API is called with SPI_CS_UNDEF as CS parameter, the driver will select the file descriptor with the lowest HWCS id for that bus, but the actual CS line will not be pulled low (if the hardware supports this). This would (in principle) allow to control CS manually.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@92`](#group__drivers__spidev__linux_1ga7495a48740c9d555f7fbcb48246dbd93)            | Status codes for SPI device setup.
`public int `[`spidev_linux_setup`](#group__drivers__spidev__linux_1ga5e1d7537023f10fd14c832ea240d7b5a)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,unsigned cs_id,const char * name)`            | register `/dev/spidev*` device to be used for SPI
`public void `[`spidev_linux_teardown`](#group__drivers__spidev__linux_1gac0457480f81ce4289acaef62a1449a68)`(void)`            | Close open SPI file descriptors.
`struct `[`spidev_linux_conf`](#structspidev__linux__conf) | Static runtime configuration for SPI port + CS line.
`struct `[`spidev_linux_state`](#structspidev__linux__state) | Dynamic runtime state for SPI port + CS line.

## Members

#### `enum `[`@92`](#group__drivers__spidev__linux_1ga7495a48740c9d555f7fbcb48246dbd93) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
SPI_SETUP_OK            | parameters are sound
SPI_SETUP_INVALID            | invalid params or duplicate definition

Status codes for SPI device setup.

#### `public int `[`spidev_linux_setup`](#group__drivers__spidev__linux_1ga5e1d7537023f10fd14c832ea240d7b5a)`(`[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` bus,unsigned cs_id,const char * name)` 

register `/dev/spidev*` device to be used for SPI

#### Parameters
* `bus` SPI bus id of the device 

* `cs_id` ID of CS line to configure 

* `name` path name for `/dev/spidev*` device 

#### Returns
SPI_SETUP_OK On success 

#### Returns
SPI_SETUP_INVALID On invalid parameters

#### `public void `[`spidev_linux_teardown`](#group__drivers__spidev__linux_1gac0457480f81ce4289acaef62a1449a68)`(void)` 

Close open SPI file descriptors.

# struct `spidev_linux_conf` 

Static runtime configuration for SPI port + CS line.

Contains the information that is passed by command line on startup

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public char * `[`device_filename`](#structspidev__linux__conf_1ae9314ef73efddae024bad18f3d5b9b49) | Filename for a specific SPI device + CS line (like /dev/spidev0.0)

## Members

#### `public char * `[`device_filename`](#structspidev__linux__conf_1ae9314ef73efddae024bad18f3d5b9b49) 

Filename for a specific SPI device + CS line (like /dev/spidev0.0)

# struct `spidev_linux_state` 

Dynamic runtime state for SPI port + CS line.

Contains state of the line (whether if it's opened, in use, available, ...)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structspidev__linux__state_1a98c13be220f39f1524df0abce9cc48dc) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for the whole bus (all CS lines)
`public int `[`fd`](#structspidev__linux__state_1a34b8fac950c66c41a994d5d2a1b1e7d6) | File descriptors for each CS line on the bus.

## Members

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`lock`](#structspidev__linux__state_1a98c13be220f39f1524df0abce9cc48dc) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for the whole bus (all CS lines)

#### `public int `[`fd`](#structspidev__linux__state_1a34b8fac950c66c41a994d5d2a1b1e7d6) 

File descriptors for each CS line on the bus.

