---
title: api-sys_arduino_api.md
description: api-sys_arduino_api.md
---
# group `sys_arduino_api` 

Implementation of the Arduino API in RIOT.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`ARDUINO_UART_DEV`](#group__sys__arduino__api_1ga7b27468efceb014bd62d61581dbb6e1e)            | UART device to use for Arduino serial.
`define `[`ARDUINO_PWM_MODE`](#group__sys__arduino__api_1gacaf1fa6c3b30e84189c7cb48a615cf44)            | PWM default frequency.
`define `[`ARDUINO_PWM_STEPS`](#group__sys__arduino__api_1gac00717145065d65463f07fb10f33ea11)            | PWM steps.
`enum `[`@325`](#group__sys__arduino__api_1ga640e110a8e92c1283f2aae76e4649f48)            | Possible pin configurations.
`enum `[`@326`](#group__sys__arduino__api_1ga688e8862af90a31ae0f4d894b555a7bd)            | Possible pin states.
`public unsigned long `[`millis`](#group__sys__arduino__api_1ga6ff7f2532a22366f0013bc41397129fd)`()`            | Returns the number of milliseconds since start.
`public void `[`pinMode`](#group__sys__arduino__api_1gac7bdb53335528ad073ca13eb2b1bdc00)`(int pin,int mode)`            | Configure a pin as either input or output.
`public void `[`digitalWrite`](#group__sys__arduino__api_1gad04318e746cb94b26e94e9aacca0b207)`(int pin,int state)`            | Set the value for the given pin.
`public int `[`digitalRead`](#group__sys__arduino__api_1gae1e3d979645a535a8ce49f935392d8bc)`(int pin)`            | Read the current state of the given pin.
`public void `[`delay`](#group__sys__arduino__api_1ga6e3106f365121b6d5c36bedcc2ce2473)`(unsigned long msec)`            | Sleep for a given amount of time [milliseconds].
`public void `[`delayMicroseconds`](#group__sys__arduino__api_1ga18ab131a7632b6df10d69878de3c6bce)`(unsigned long usec)`            | Sleep for a given amount of time [microseconds].
`public unsigned long `[`micros`](#group__sys__arduino__api_1ga8b24cbb7c3486e1bfa05c86db83ecb01)`()`            | Returns the number of microseconds since start.
`public int `[`analogRead`](#group__sys__arduino__api_1ga6a005b7bdfeeca9d1d61b38929f34c58)`(int pin)`            | Read the current value of the given analog pin.
`public void `[`analogWrite`](#group__sys__arduino__api_1ga86bb4d3e9f1bdb233cf01d835adcede0)`(int pin,int value)`            | Write an analog value to a pin.
`public inline static void `[`interrupts`](#group__sys__arduino__api_1ga758128c3471a45c429f97f140eb07a25)`(void)`            | Enables interrupts.
`public inline static void `[`noInterrupts`](#group__sys__arduino__api_1gae9ff6b8582527a40b60847b51a6a44ad)`(void)`            | Disables interrupts.

## Members

#### `define `[`ARDUINO_UART_DEV`](#group__sys__arduino__api_1ga7b27468efceb014bd62d61581dbb6e1e) 

UART device to use for Arduino serial.

#### `define `[`ARDUINO_PWM_MODE`](#group__sys__arduino__api_1gacaf1fa6c3b30e84189c7cb48a615cf44) 

PWM default frequency.

Can be overridden at board level in [arduino_board.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#arduino__board_8h).

See table from [https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/](https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/) for reference values.

PWM mode

#### `define `[`ARDUINO_PWM_STEPS`](#group__sys__arduino__api_1gac00717145065d65463f07fb10f33ea11) 

PWM steps.

#### `enum `[`@325`](#group__sys__arduino__api_1ga640e110a8e92c1283f2aae76e4649f48) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
INPUT            | configure pin as input
OUTPUT            | configure pin as output
INPUT_PULLUP            | configure pin as input with pull-up resistor

Possible pin configurations.

#### `enum `[`@326`](#group__sys__arduino__api_1ga688e8862af90a31ae0f4d894b555a7bd) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LOW            | pin is cleared
HIGH            | pin is set

Possible pin states.

#### `public unsigned long `[`millis`](#group__sys__arduino__api_1ga6ff7f2532a22366f0013bc41397129fd)`()` 

Returns the number of milliseconds since start.

#### Returns
value of milliseconds since start

#### `public void `[`pinMode`](#group__sys__arduino__api_1gac7bdb53335528ad073ca13eb2b1bdc00)`(int pin,int mode)` 

Configure a pin as either input or output.

#### Parameters
* `pin` pin to configure 

* `mode` mode to set the pin to

#### `public void `[`digitalWrite`](#group__sys__arduino__api_1gad04318e746cb94b26e94e9aacca0b207)`(int pin,int state)` 

Set the value for the given pin.

#### Parameters
* `pin` pin to set 

* `state` HIGH or LOW

#### `public int `[`digitalRead`](#group__sys__arduino__api_1gae1e3d979645a535a8ce49f935392d8bc)`(int pin)` 

Read the current state of the given pin.

#### Parameters
* `pin` pin to read

#### Returns
state of the given pin, HIGH or LOW

#### `public void `[`delay`](#group__sys__arduino__api_1ga6e3106f365121b6d5c36bedcc2ce2473)`(unsigned long msec)` 

Sleep for a given amount of time [milliseconds].

#### Parameters
* `msec` number of milliseconds to sleep

#### `public void `[`delayMicroseconds`](#group__sys__arduino__api_1ga18ab131a7632b6df10d69878de3c6bce)`(unsigned long usec)` 

Sleep for a given amount of time [microseconds].

#### Parameters
* `usec` number of microseconds to sleep

#### `public unsigned long `[`micros`](#group__sys__arduino__api_1ga8b24cbb7c3486e1bfa05c86db83ecb01)`()` 

Returns the number of microseconds since start.

#### Returns
value of microseconds since start

#### `public int `[`analogRead`](#group__sys__arduino__api_1ga6a005b7bdfeeca9d1d61b38929f34c58)`(int pin)` 

Read the current value of the given analog pin.

#### Parameters
* `pin` pin to read

#### Returns
a value between 0 to 1023 that is proportionnal to the voltage applied to the pin

#### `public void `[`analogWrite`](#group__sys__arduino__api_1ga86bb4d3e9f1bdb233cf01d835adcede0)`(int pin,int value)` 

Write an analog value to a pin.

#### Parameters
* `pin` pin to write 

* `value` duty cycle value, between 0 and 255

#### `public inline static void `[`interrupts`](#group__sys__arduino__api_1ga758128c3471a45c429f97f140eb07a25)`(void)` 

Enables interrupts.

#### `public inline static void `[`noInterrupts`](#group__sys__arduino__api_1gae9ff6b8582527a40b60847b51a6a44ad)`(void)` 

Disables interrupts.

