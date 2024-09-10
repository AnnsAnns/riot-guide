---
title: api-boards_feather-m0.md
description: api-boards_feather-m0.md
---
# group `boards_feather-m0` 

Support for the Adafruit Feather M0.

General informationFeather M0 boards are development boards shipped by [Adafruit](https://learn.adafruit.com/adafruit-feather-m0-basic-proto/).

All the feather M0 boards are built based on the same Atmel SAMD21G18A microcontroller. See [Atmel SAMD10/SAMD20/SAMD21/SAMR21](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__samd21).

Several types of Feather M0 boards exist:

* [Feather M0 WiFi](https://learn.adafruit.com/adafruit-feather-m0-wifi-atwinc1500/)

* [Feather M0 BLE](https://learn.adafruit.com/adafruit-feather-m0-bluefruit-le/overview)

* [Feather M0 Adalogger](https://learn.adafruit.com/adafruit-feather-m0-adalogger/)

* [Feather M0 LoRa](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module)

The different modules used to differentiate the boards (ATWINC1500 WiFi, Bluefruit LE, SD card, LoRa) are connected via SPI ([SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)) to the SAMD21 mcu.

Pinout

`AIN7` can be used to [measure the voltage of a connected Lipoly battery](https://learn.adafruit.com/adafruit-feather-m0-basic-proto/power-management#measuring-battery-4-9). It is mapped to [ADC_LINE(6)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gaf0487d2e8711bf1c9e7daa6e61e05888) in RIOT.

```cpp
int vbat = adc_sample(ADC_LINE(6), ADC_RES_10BIT);
vbat *= 2;      /* voltage was divided by 2, so multiply it back */
vbat *= 33;     /* reference voltage 3.3V * 10 */
vbat /= 10240;  /* resolution * 10 (because we multiplied 3.3V by 10) */
printf("Bat: %dV\n", vbat);
```

Flash the boardUse `BOARD=feather-m0` with the `make` command.
 Example with `hello-world` application: 
```cpp
make BOARD=feather-m0 -C examples/hello-world flash
```

If the application crashes, automatic reflashing via USB, as explained above won't be possible. In this case, the board must be set in bootloader mode by double tapping the reset button before running the flash command.

Using the WiFi interfaceTo enable the WiFi interface of the Feather M0 WiFi variant of the board automatically for networking applications, use `feather-m0-wifi` as board and define the required WiFi parameters, for example: 
```cpp
CFLAGS='-DWIFI_SSID=\"<ssid>\" -DWIFI_PASS=\"<pass>\"' \
make BOARD=feather-m0-wifi -C examples/gnrc_networking
```

For detailed information about the parameters, see section [ATWINC15x0 WiFi module driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__atwinc15x0).

Using with LoRa moduleTo enable the LoRa module available on the [Feather M0 LoRa](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module) variant of the board automatically for LoRa applications, use `feather-m0-lora` as board:

```cpp
make BOARD=feather-m0-lora -C examples/gnrc_lorawan
```

For detailed information about the parameters, see section [Semtech SX1272 and SX1276 radios driver](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__sx127x).

Accessing STDIO via UARTSTDIO of RIOT is directly available over the USB port.

The `TERM_DELAY` environment variable can be used to add a delay (in second) before opening the serial terminal. The default value is 2s which should be enough in most of the situation.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

