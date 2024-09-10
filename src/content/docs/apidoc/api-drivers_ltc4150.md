---
title: api-drivers_ltc4150.md
description: api-drivers_ltc4150.md
---
# group `drivers_ltc4150` 

Driver for the Linear Tech LTC4150 Coulomb Counter (a.k.a.

battery gauge sensor or power consumption sensor)

Wiring the LTC4150Hint: M Grusin thankfully created an [open hardware breakout board](https://cdn.sparkfun.com/datasheets/BreakoutBoards/LTC4150_BOB_v10.pdf). As a result, virtually all LTC4150 breakout boards are using this schematic. Whenever this documentation refers to a breakout board, this open hardware board is meant. Of course, this driver works with the "bare" LTC4150 as well.

Please note that this driver works interrupt driven and does not clear the signal. Thus, the /CLR and /INT pins on the LTC4150 need to be connected (in case of the breakout board: close solder jumper SJ1), so that the signal is automatically cleared.

Hint: The breakout board uses external pull up resistors on /INT, POL and /SHDN. Therefore /SHDN can be left unconnected and no internal pull ups are required for /INT and POL. In case your board uses 3.3V logic the solder jumpers SJ2 and SJ3 have to be closed, in case of 5V they have to remain open. Connect the VIO pin to the logic level, GND to ground, IN+ and IN- to the power supply and use OUT+ and OUT- to power your board.

In the easiest case only the /INT pin needs to be connected to a GPIO, and (in case of external pull ups) /SHDN and POL can be left unconnected. The GPIO /INT is connected to support for interrupts, /SHDN and POL (if connected) do not require interrupt support.

In case a battery is used the POL pin connected to another GPIO. This allows to distinguish between charge drawn from the battery and charge transferred into the battery (used to load it).

In case support to power off the LTC4150 is desired, the /SHDN pin needs to be connected to a third GPIO.

Things to keep in mindThe LTC4150 creates pulses with a frequency depending on the current drawn. Thus, more interrupts need to be handled when more current is drawn, which in turn increases system load (and power consumption). The interrupt service routing is quite short and even when used outside of specification less than 20 ticks per second will occur. Hence, this effect should hopefully be negligible.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@215`](#group__drivers__ltc4150_1ga4eeeead548222804e141df8f1b205ca8)            | Configuration flags of the LTC4150 coulomb counter.
`enum `[`ltc4150_dir_t`](#group__drivers__ltc4150_1ga8838cbe7f55e7f6946f74c100a10a8af)            | Enumeration of directions in which the charge can be transferred.
`public int `[`ltc4150_init`](#group__drivers__ltc4150_1ga4fa850f74cbacdf35d41a0a111265d49)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,const `[`ltc4150_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__params__t)` * params)`            | Initialize the LTC4150 driver.
`public int `[`ltc4150_reset_counters`](#group__drivers__ltc4150_1ga1840c34b0f4bd05ffa9279b934189848)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev)`            | Clear current counters of the given LTC4150 device.
`public int `[`ltc4150_shutdown`](#group__drivers__ltc4150_1ga2de1ec4e0b025996428b85484b45b683)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev)`            | Disable the interrupt handler and turn the chip off.
`public int `[`ltc4150_charge`](#group__drivers__ltc4150_1ga54b4a64e07c4fd49480c7220aaebb311)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,uint32_t * charged,uint32_t * discharged)`            | Get the measured charge since boot or last reset in millicoulomb.
`public int `[`ltc4150_avg_current`](#group__drivers__ltc4150_1ga7cf0e00f44778e6c55ee87cbeed87998)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,int16_t * dest)`            | Get the average current drawn in E-01 milliampere.
`public int `[`ltc4150_last_minute_charge`](#group__drivers__ltc4150_1ga3ad8761da01fd64c8571aa49d58b5264)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,`[`ltc4150_last_minute_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__last__minute__data__t)` * data,uint32_t * charged,uint32_t * discharged)`            | Get the measured charge in the last minute.
`public void `[`ltc4150_pulses2c`](#group__drivers__ltc4150_1gabacb8f10da53a90b9626d036e031d47c)`(const `[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,uint32_t * charged,uint32_t * discharged,uint32_t raw_charged,uint32_t raw_discharged)`            | Convert the raw data (# pulses) acquired by the LTC4150 device to charge information in millicoulomb.
`struct `[`ltc4150_recorder_t`](#structltc4150__recorder__t) | Interface to allow recording of the drawn current in a user defined resolution.
`struct `[`ltc4150_params_t`](#structltc4150__params__t) | Parameters required to set up the LTC4150 coulomb counter.
`struct `[`ltc4150_dev`](#structltc4150__dev) | LTC4150 coulomb counter.
`struct `[`ltc4150_last_minute_data_t`](#structltc4150__last__minute__data__t) | Data structure used by [ltc4150_last_minute](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1ga2a4b5144157383f5a4ab76251130ec29).

## Members

#### `enum `[`@215`](#group__drivers__ltc4150_1ga4eeeead548222804e141df8f1b205ca8) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LTC4150_INT_EXT_PULL_UP            | External pull on the /INT pin is present.
LTC4150_POL_EXT_PULL_UP            | External pull on the /POL pin is present.
LTC4150_EXT_PULL_UP            | External pull on the /INT *and* the /POL pin is present.

Configuration flags of the LTC4150 coulomb counter.

#### `enum `[`ltc4150_dir_t`](#group__drivers__ltc4150_1ga8838cbe7f55e7f6946f74c100a10a8af) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LTC4150_CHARGE            | The battery is charged.
LTC4150_DISCHARGE            | Charge is drawn from the battery.

Enumeration of directions in which the charge can be transferred.

#### `public int `[`ltc4150_init`](#group__drivers__ltc4150_1ga4fa850f74cbacdf35d41a0a111265d49)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,const `[`ltc4150_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__params__t)` * params)` 

Initialize the LTC4150 driver.

#### Parameters
* `dev` Device to initialize 

* `params` Information on how the LTC4150 is conntected

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid argument(s) 

* `-EIO` IO failure (`[gpio_init()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gab7d8ecaeb639070a28027a8fd31a0955)`/`[gpio_init_int()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga48ba4c318486db320a4bf6237b49d61c)` failed)

#### `public int `[`ltc4150_reset_counters`](#group__drivers__ltc4150_1ga1840c34b0f4bd05ffa9279b934189848)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev)` 

Clear current counters of the given LTC4150 device.

#### Parameters
* `dev` The LTC4150 device to clear current counters from

#### Parameters
* `0` Success 

* `-EINVAL` Called with an invalid argument

#### `public int `[`ltc4150_shutdown`](#group__drivers__ltc4150_1ga2de1ec4e0b025996428b85484b45b683)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev)` 

Disable the interrupt handler and turn the chip off.

#### Parameters
* `dev` Previously initialized device to power off

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid argument(s)

The driver can be reinitialized to power on the LTC4150 chip again

#### `public int `[`ltc4150_charge`](#group__drivers__ltc4150_1ga54b4a64e07c4fd49480c7220aaebb311)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,uint32_t * charged,uint32_t * discharged)` 

Get the measured charge since boot or last reset in millicoulomb.

#### Parameters
* `dev` The LTC4150 device to read data from 

* `charged` The charge transferred in charging direction 

* `discharged` The charge transferred in discharging direction

#### Parameters
* `0` Success 

* `-EINVAL` Called with an invalid argument

Passing `NULL` for `charged` or `discharged` is allowed, if only one information is of interest.

#### `public int `[`ltc4150_avg_current`](#group__drivers__ltc4150_1ga7cf0e00f44778e6c55ee87cbeed87998)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,int16_t * dest)` 

Get the average current drawn in E-01 milliampere.

This will return the average current drawn since boot or last reset until the last pulse from the LTC4150 was received. The value might thus be a bit outdated (0.8 seconds for the breakout board and a current of 100mA, 79 seconds for a current of 1mA).

#### Parameters
* `dev` The LTC4150 device to read data from 

* `dest` Store the average current drawn in E-01 milliampere here

#### Parameters
* `0` Success 

* `-EINVAL` Called with an invalid argument 

* `-EAGAIN` Called before enough data samples have been acquired. (Wait for at least one second or one pulse from the LTC4150, whichever takes longer.)

#### `public int `[`ltc4150_last_minute_charge`](#group__drivers__ltc4150_1ga3ad8761da01fd64c8571aa49d58b5264)`(`[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,`[`ltc4150_last_minute_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__last__minute__data__t)` * data,uint32_t * charged,uint32_t * discharged)` 

Get the measured charge in the last minute.

#### Parameters
* `dev` The LTC4150 device to read data from 

* `data` The data recorded by [ltc4150_last_minute](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1ga2a4b5144157383f5a4ab76251130ec29)

* `charged` The charge transferred in charging direction 

* `discharged` The charge transferred in discharging direction

#### Parameters
* `0` Success 

* `-EINVAL` Called with an invalid argument

The returned data may be outdated up to ten seconds

Passing `NULL` for `charged` or `discharged` is allowed, if only one information is of interest.

#### `public void `[`ltc4150_pulses2c`](#group__drivers__ltc4150_1gabacb8f10da53a90b9626d036e031d47c)`(const `[`ltc4150_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1gacea050c124a43ee9deeb487b231381b6)` * dev,uint32_t * charged,uint32_t * discharged,uint32_t raw_charged,uint32_t raw_discharged)` 

Convert the raw data (# pulses) acquired by the LTC4150 device to charge information in millicoulomb.

This function will make writing data recorders (see [ltc4150_recorder_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__recorder__t)) easier, but is not intended for end users

#### Parameters
* `dev` LTC4150 device the data was received from 

* `charged` Charge in charging direction is stored here 

* `discharged` Charge in discharging direction is stored here 

* `raw_charged` Number of pulses in charging direction 

* `raw_discharged` Number of pulses in discharging direction

# struct `ltc4150_recorder_t` 

Interface to allow recording of the drawn current in a user defined resolution.

Keep in mind that the data recording may be performed by the CPU of the system to monitor - thus keep power consumption for the recording low!

The LTC4150 driver will only track total charge transferred (separately for charging in discharging direction). However, there are use cases that required more precise data recording, e.g. a rolling average of the last minute. This interface allows application developers to implement the ideal trade-off between RAM, ROM and runtime overhead for the data recording and the level of information they require.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public void(* `[`pulse`](#structltc4150__recorder__t_1a5c91f357bc7459dadfb103644daa3e12) | Function to call on every pulse received from the LTC4150.
`public void(* `[`reset`](#structltc4150__recorder__t_1a379a4df9b53c00d192873d955d055811) | Function to call upon driver initialization or reset.

## Members

#### `public void(* `[`pulse`](#structltc4150__recorder__t_1a5c91f357bc7459dadfb103644daa3e12) 

Function to call on every pulse received from the LTC4150.

This function is called in interrupt context

#### Parameters
* `dev` The device the pulse was received from 

* `dir` Direction in which the charge is transferred 

* `now_usec` The system time the pulse was received in µs 

* `arg` (Optional) argument for this callback

#### `public void(* `[`reset`](#structltc4150__recorder__t_1a379a4df9b53c00d192873d955d055811) 

Function to call upon driver initialization or reset.

**See also**: [ltc4150_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1ga4fa850f74cbacdf35d41a0a111265d49)

**See also**: [ltc4150_reset_counters](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1ga1840c34b0f4bd05ffa9279b934189848)

#### Parameters
* `dev` The LTC4150 device to monitor 

* `now_usec` The system time the pulse was received in µs 

* `arg` (Optional) argument for this callback

# struct `ltc4150_params_t` 

Parameters required to set up the LTC4150 coulomb counter.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`interrupt`](#structltc4150__params__t_1a7bf6b32905709abfd1aa42ae42b2e39b) | Pin going LOW every time a specific charge is drawn, labeled INT.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`polarity`](#structltc4150__params__t_1a08bf5783126ff05e38044ad6e29afadf) | Pin indicating (dis-)charging, labeled POL.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`shutdown`](#structltc4150__params__t_1adb17864e623a14ddb4665835ee69cff8) | Pin to power off the LTC4150 coulomb counter, labeled SHDN.
`public uint16_t `[`pulses_per_ah`](#structltc4150__params__t_1a04df32a3bec76c1d2cb5294e6daa1d69) | Pulse per ampere hour of charge.
`public uint16_t `[`flags`](#structltc4150__params__t_1af04bea5b48848b999cf4441bf98ba829) | Configuration flags controlling if inter pull ups are required.
`public const `[`ltc4150_recorder_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__recorder__t)` ** `[`recorders`](#structltc4150__params__t_1a3988decbc9333d8c64a49785a8fa1621) | `NULL` or a `NULL`-terminated array of data recorders
`public void ** `[`recorder_data`](#structltc4150__params__t_1a9dbd8a0e185f2b6288694f085e6692d2) | `NULL` or an array of the user defined data for each recorder

## Members

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`interrupt`](#structltc4150__params__t_1a7bf6b32905709abfd1aa42ae42b2e39b) 

Pin going LOW every time a specific charge is drawn, labeled INT.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`polarity`](#structltc4150__params__t_1a08bf5783126ff05e38044ad6e29afadf) 

Pin indicating (dis-)charging, labeled POL.

Set this pin to `GPIO_UNDEF` to treat every pulse as discharging. This pin is pulled low by the LTC4150 in case the battery is discharging.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`shutdown`](#structltc4150__params__t_1adb17864e623a14ddb4665835ee69cff8) 

Pin to power off the LTC4150 coulomb counter, labeled SHDN.

Set this pin to `GPIO_UNDEF` if the SHDN pin is not connected to the MCU

#### `public uint16_t `[`pulses_per_ah`](#structltc4150__params__t_1a04df32a3bec76c1d2cb5294e6daa1d69) 

Pulse per ampere hour of charge.

pulses = 3600 * 32.55 * R

Where R is the resistance (in Ohm) between the SENSE+ and SENSE- pins. E.g. the MSBA2 has 0.390 Ohm (==> 45700 pulses), while most breakout boards for the LTC4150 have 0.050 Ohm (==> 5859 pulses).

#### `public uint16_t `[`flags`](#structltc4150__params__t_1af04bea5b48848b999cf4441bf98ba829) 

Configuration flags controlling if inter pull ups are required.

Most [breakout boards](https://cdn.sparkfun.com/datasheets/BreakoutBoards/LTC4150_BOB_v10.pdf) and the MSBA2 board use external pull up resistors, so no internal pull ups are required. Clear the flags to use internal pull ups instead.

#### `public const `[`ltc4150_recorder_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__recorder__t)` ** `[`recorders`](#structltc4150__params__t_1a3988decbc9333d8c64a49785a8fa1621) 

`NULL` or a `NULL`-terminated array of data recorders

If not `NULL`, the last element of the array must be `NULL`

#### `public void ** `[`recorder_data`](#structltc4150__params__t_1a9dbd8a0e185f2b6288694f085e6692d2) 

`NULL` or an array of the user defined data for each recorder

If 

**See also**: [ltc4150_params_t::recorders](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__params__t_1a3988decbc9333d8c64a49785a8fa1621) is not `NULL`, this must point to an array of `void`-Pointers of the same length. 

Unlike 

**See also**: ltc4150_param_t::callback, this array does not need to be `NULL`-terminated

# struct `ltc4150_dev` 

LTC4150 coulomb counter.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ltc4150_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__params__t)` `[`params`](#structltc4150__dev_1a3275c3b2120cb26688d306be41c22d93) | Parameter of the LTC4150 coulomb counter.
`public uint32_t `[`start_sec`](#structltc4150__dev_1aefc0b0f11f3f4ed19d8eed9982342495) | Time stamp when started counting.
`public uint32_t `[`last_update_sec`](#structltc4150__dev_1a202e2b277fd53348530ecf1957a8c2ab) | Time stamp of last pulse.
`public uint32_t `[`charged`](#structltc4150__dev_1a8b1b0af89b7b86d564b8b1e7f177915a) | of pulses for charging (POL=high)
`public uint32_t `[`discharged`](#structltc4150__dev_1a165486a7c73024fbbab19dba14b86309) | of pulses for discharging (POL=low)

## Members

#### `public `[`ltc4150_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_ltc4150.md#structltc4150__params__t)` `[`params`](#structltc4150__dev_1a3275c3b2120cb26688d306be41c22d93) 

Parameter of the LTC4150 coulomb counter.

#### `public uint32_t `[`start_sec`](#structltc4150__dev_1aefc0b0f11f3f4ed19d8eed9982342495) 

Time stamp when started counting.

#### `public uint32_t `[`last_update_sec`](#structltc4150__dev_1a202e2b277fd53348530ecf1957a8c2ab) 

Time stamp of last pulse.

#### `public uint32_t `[`charged`](#structltc4150__dev_1a8b1b0af89b7b86d564b8b1e7f177915a) 

of pulses for charging (POL=high)

#### `public uint32_t `[`discharged`](#structltc4150__dev_1a165486a7c73024fbbab19dba14b86309) 

of pulses for discharging (POL=low)

# struct `ltc4150_last_minute_data_t` 

Data structure used by [ltc4150_last_minute](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__ltc4150_1ga2a4b5144157383f5a4ab76251130ec29).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`last_rotate_sec`](#structltc4150__last__minute__data__t_1aa85cff1faf27530a9fc794c6a4a3df85) | Time stamp of the last ring "rotation".
`public uint16_t `[`charged`](#structltc4150__last__minute__data__t_1a7f450821bc5b0949cccb74b3bcb83858) | Pulses in charging direction recorded in the last minute.
`public uint16_t `[`discharged`](#structltc4150__last__minute__data__t_1a68756589eb09ba8d9347befc61b5e128) | Pulses in discharging direction recorded in the last minute.
`public uint8_t `[`buf_charged`](#structltc4150__last__minute__data__t_1afb1d4e37bb0b3d8f6f451964503cbbbc) | Ring-buffer to store charge information in 10 sec resolution.
`public uint8_t `[`buf_discharged`](#structltc4150__last__minute__data__t_1aef85179d97197809f3f7db1f1554d32d) | As above, but in discharging direction.
`public uint8_t `[`ring_pos`](#structltc4150__last__minute__data__t_1a7042b891bd567ed7fe3ba4ec08ec9ea6) | Position in the ring buffer.

## Members

#### `public uint32_t `[`last_rotate_sec`](#structltc4150__last__minute__data__t_1aa85cff1faf27530a9fc794c6a4a3df85) 

Time stamp of the last ring "rotation".

#### `public uint16_t `[`charged`](#structltc4150__last__minute__data__t_1a7f450821bc5b0949cccb74b3bcb83858) 

Pulses in charging direction recorded in the last minute.

#### `public uint16_t `[`discharged`](#structltc4150__last__minute__data__t_1a68756589eb09ba8d9347befc61b5e128) 

Pulses in discharging direction recorded in the last minute.

#### `public uint8_t `[`buf_charged`](#structltc4150__last__minute__data__t_1afb1d4e37bb0b3d8f6f451964503cbbbc) 

Ring-buffer to store charge information in 10 sec resolution.

#### `public uint8_t `[`buf_discharged`](#structltc4150__last__minute__data__t_1aef85179d97197809f3f7db1f1554d32d) 

As above, but in discharging direction.

#### `public uint8_t `[`ring_pos`](#structltc4150__last__minute__data__t_1a7042b891bd567ed7fe3ba4ec08ec9ea6) 

Position in the ring buffer.

