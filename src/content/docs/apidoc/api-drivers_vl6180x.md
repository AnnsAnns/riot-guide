---
title: api-drivers_vl6180x.md
description: api-drivers_vl6180x.md
---
# group `drivers_vl6180x` 

Device driver for the ST VL6180X Ranging and Ambient Light Sensing (ALS) module.

OverviewAbout the sensorThe ST VL6180X is a low-power **proximity** and **ambient light** sensor with an I2C interface that uses time-to-flight technology for distance measurements. It can be used for ranging and/or ambient light sensing (ALS). Measurements can be automatically performed at user-defined intervals.

To minimize host operations, interrupts can be used either when new sensor data are ready to be read or when sensor values exceed configured thresholds.

Supported FeaturesThe driver supports different levels of functionality, which can be enabled by using pseudomodules according to the requirements of the application. This ensures that the driver only uses as much ROM/RAM as really needed.

As basic functionality the driver supports:

* Ranging and ambient light sensing (ALS) in single-shot or continuous mode with polling for new sensor data

* Fixed configuration of the sensor by a default parameter set of type [vl6180x_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t) as defined in the file `vl6180x_params.h

* SAUL sensor interface

The following pseudomodules are used to enable additional functionalities: 
Pseudomodule   |Functionality
--------- | ---------
`vl6180x_irq`|Data ready and event interrupt handling
`vl6180x_suhtdown`|Power-down and power-up functions
`vl6180x_config`|Functions for changing configurations at runtime

The following table shows the mapping of which modules have to be used to enable which functions of the VL6180X.

Feature   |Module
--------- | ---------
Ranging in single-shot or continuous mode   |`vl6180x_rng`
Ambient light sensing (ALS) in single-shot or continuous mode   |`vl6180x_als`
Data ready and event interrupt handling   |`vl6180x_irq`
Power-down and power-up functions   |`vl6180x_shutdown`
Configuration of the sensor at runtime   |`vl6180x_config`

* If the handling of interrupts for data ready and event interrupts is enabled by module `vl6180x_irq`, the GPIO pin for the interrupt signal (sensor pin GPIO1) must be defined by the configuration parameter [vl6180x_params_t::int_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1ad23f825a687c48778d24133ca817104e). The default configuration of this GPIO pin is defined by [VL6180X_PARAM_INT_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a06800eff0d16061477e3bf7eea64d67c) that can be overridden by the board definition. The interrupt signal is LOW active.

* If power-down and power-up functions are enabled by module `vl6180x_shutdown`, the GPIO pin for the shutdown signal (sensor pin GPIO0/CE) must be defined by the configuration parameter [vl6180x_params_t::shutdown_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1a156e0a45977d503f68352fd8844253fc). The default configuration of this GPIO pin is defined by [VL6180X_PARAM_SHUTDOWN_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1aecb6cd928b087f66bdcc861099819308) that can be overridden by the board definition. The shutdown signal is LOW active.

Using the driverInitializationThe **easiest way to use the driver** is simply to initialize the sensor with function [vl6180x_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaee994b4e0d657f6504b8ecb779843977) using the default configuration parameter set [vl6180x_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1aa0b0b88748c8003a74f11056a8a04045) as defined in file [vl6180x_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h).

```cpp
static [vl6180x_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t) dev;

if ([vl6180x_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaee994b4e0d657f6504b8ecb779843977)(&dev, &[vl6180x_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1aa0b0b88748c8003a74f11056a8a04045)[0]) != [VL6180X_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a7f6affab50fad3822de4282756dea121)) {
    ... // error handling
}
```

After initialization, the sensor is configured according to the standard configuration parameters and is fully operational.

Operation modesThe VL6180X can be used in two modes

* **Single-shot mode**
 In this mode the sensor is in software standby and a single measurement is started explicitly either with the function [vl6180x_rng_start_single](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gab36ea67b4f669e2e82c4edd510caf6bd) or the function [vl6180x_als_start_single](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga856a14eee3d85833d184d9d1627d82f0). After finishing the single measurement the sensor returns to software standby. In software standby, the power consumption of the sensor is less than 1 uA.

* **Continuous mode**
 In this mode the sensor automatically performs measurements with the measurement period configured by parameter [vl6180x_params_t::period](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1aa3331bdbe9ffead1999020d9fdef4f9a). Between these measurements it returns to the software standby.
 If range and ALS measurements are used (the modules `vl6180x_rng` and `vl6180x_als` are both used), the so-called **interleaved mode** is automatically used, where an ALS measurement is immediately followed by a range measurement and repeated with the defined period. The continuous mode can be stopped with function [vl6180x_stop_cont](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga4567388bb1fcd88d01314d3a5da41291), for example to start single measurements. It is also possible to restart it using function [vl6180x_start_cont](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga36daffc23638118062efda0aacc7564e).

If the configured measurement period is 0, the single-shot mode is enabled after initialization for both the range and ALS measurements. The functions [vl6180x_rng_start_single](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gab36ea67b4f669e2e82c4edd510caf6bd) and [vl6180x_als_start_single](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga856a14eee3d85833d184d9d1627d82f0) must then be used to start a single measurement.
 Otherwise, the continuous mode is activated for both measurements and continuous measurements started automatically after sensor initialization with the configured measurement period.

Fetching dataTo get data, the user task can use either

* the [vl6180x_rng_data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaec9a64cf95727d24706d55c7977c432c) and [vl6180x_als_data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga3c97236bab4af4fca7a2e5ba6f8e13d0) functions to periodically check if new data are ready to be read, and the [vl6180x_rng_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga04d126d28616bb47a0bed098d930c1d7) and [vl6180x_als_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga794a9ed589a84d731dcba0dfb60f4bfd) functions to read the data (following example), or

* the data ready interrupt which is triggered as soon as new output data are available, see section [Using Interrupts](#vl6180x_using_interrupts).

```cpp
while (1)
{
    uint16_t als;
    uint16_t lux;
    uint8_t  rng;

    // execute task every 20 ms
    [xtimer_usleep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga01ded1a98b76eea8a1c4c45975781989)(20 * [US_PER_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__time__units_1ga31ae5fdfe8827f4d8def045948d3986e));
    ...
    // test for new data and fetch them if available
    if ([vl6180x_als_data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga3c97236bab4af4fca7a2e5ba6f8e13d0)(&dev) == [VL6180X_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a7f6affab50fad3822de4282756dea121) &&
        [vl6180x_als_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga794a9ed589a84d731dcba0dfb60f4bfd)(&dev, &als, &lux) == [VL6180X_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a7f6affab50fad3822de4282756dea121)) {
        ...
    }
    if ([vl6180x_rng_data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaec9a64cf95727d24706d55c7977c432c)(&dev) == [VL6180X_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a7f6affab50fad3822de4282756dea121)) {
        if ([vl6180x_rng_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga04d126d28616bb47a0bed098d930c1d7)(&dev, &rng) == [VL6180X_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a7f6affab50fad3822de4282756dea121)) {
        ...
    }
}
```

Output data formatFunction [vl6180x_als_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga794a9ed589a84d731dcba0dfb60f4bfd) returns one ALS data sample as raw count value and, if required, as illuminance in Lux. The range of the count value depends on

* the ALS analog gain defined by [vl6180x_params_t::als_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1ab306b1a7590e6929a3a78b542d4ff040),

* the integration time defined by [vl6180x_params_t::als_int_time](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1a0aa0035dda5095061a43b31e5f6370f5), and

* the lux resolution defined by [vl6180x_params_t::als_lux_res](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1a651f03c1c10e5178f1a7c27cd283c8ef).

The count value is returned in parameter `raw` while the illuminance is returned in parameter `lux`. For either `raw` or `lux` also `NULL` can be passed, if only one value is of interest.

If ALS value is invalid because of a measurement error, [VL6180X_ERROR_ALS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a6b07aea008982c578ba2b76d5bd5f82a) is returned. The [vl6180x_als_status](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga4406e23b03d53454c097d09a8eb3957a) function can then be used to get an error code of type [vl6180x_als_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940).

Function vl6180x_rng_read returns the ranging data in millimeters. If ranging value is invalid because of a measurement error, [VL6180X_ERROR_RNG](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a7e32432f2b999c80c3683c02afe5d578) is returned and function [vl6180x_rng_status](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga0bf5eaf912925fa7106b693410f150ee) function can then be used to get an error code of type [vl6180x_rng_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e).

Using InterruptsThe VL6180X sensor allows the use of different types of interrupts on signal GPIO1 for range and ALS measurements:

* data ready interrupts when data become available

* different event interrupts when sensor data cross configured thresholds

Interrupts are only supported when module `vl6180x_irq` is used.

Interrupt configurationThese interrupts can be enabled separately for the range and ALS measurements by the interrupt mode of type [vl6180x_int_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635)

Interrupt mode   |Driver symbol
--------- | ---------
New data are ready to be read   |[VL6180X_INT_DRDY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a45c7fc526e0383910d95e8d0de7757cc)
Sensor data are below the lower threshold   |[VL6180X_INT_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a1a15e75f9af5314f519dce07c3ce6b94)
Sensor data are above the upper threshold   |[VL6180X_INT_HIGH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a778f44971d117f62cd3ff6d89de72c42)
Sensor data are below the lower threshold or above the upper threshold   |[VL6180X_INT_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635aa7c6f823016999877eaa91bc0f497217)

Only one of the interrupt modes must be enabled at the same time for the same measurement.

For event interrupts, upper and lower thresholds have to be defined, with the upper and lower thresholds defining a threshold window of type [vl6180x_int_thresh_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t).

In default configuration, [VL6180X_INT_DRDY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a45c7fc526e0383910d95e8d0de7757cc) is used both for range and ALS measurements if module `vl6180x_irq` is used.

The enabled interrupts can be changed with the [vl6180x_int_enable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga0d6047d9acfb6a16fd8034b965c859ab) function which takes a parameter of type [vl6180x_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t) which simply contains the interrupt mode of type [vl6180x_int_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635) for range and ALS measurements. 
```cpp
[vl6180x_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t) mode = { .[rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) = [VL6180X_INT_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635aa7c6f823016999877eaa91bc0f497217),
                              .als_int = [VL6180X_INT_DRDY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a45c7fc526e0383910d95e8d0de7757cc) };
[vl6180x_int_enable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga0d6047d9acfb6a16fd8034b965c859ab)(&dev, mode);
```

If module `vl6180x_config` is used, the thresholds for event interrupts can be changed using function [vl6180x_int_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga3493c4777cea820dbf64e709265c95fd), for example: 
```cpp
[vl6180x_int_thresh_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t) thresh;

thresh.[rng_low](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t_1a3bc8654b6121521d3953d80f26bc2ab3) = 30;
thresh.[rng_high](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t_1a15e187293edc9c1eff0fa9fe08f30157) = 100;
thresh.[als_low](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t_1af2488e4eaba584b934a6e3d3ccd81afe) = 10;
thresh.[als_high](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t_1aaeb8802b48baf545e12914e0c85996f7) = 1000;

[vl6180x_int_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga3493c4777cea820dbf64e709265c95fd)(&dev, thresh);
```

Interrupt usageAll functions of the driver require direct access to the sensor via I2C which does not work in interrupt context.

Therefore, the driver prevents the direct use of the interrupts and application specific ISRs. The only way to use interrupts is to call the function [vl6180x_int_wait](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga84c03e22d383cf539eb347b4766fbd12) which enables the interrupt signal for the configured MCU GPIO and then blocks the calling thread until an interrupt is triggered.

Once an interrupt is triggered, the driver handles the interrupt with an internal ISR and then returns from the [vl6180x_int_wait](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga84c03e22d383cf539eb347b4766fbd12) function with the interrupt source. The interrupt mode of type [vl6180x_int_mode_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635) respectively the composite type [vl6180x_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t) which is used for defining enabled interrupts is also used for specifying the interrupt source. It contains a flag for each possible interrupt source which can be tested for true. 
```cpp
[vl6180x_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t) src;

[vl6180x_int_wait](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga84c03e22d383cf539eb347b4766fbd12)(&dev, &src);

if (src.[rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) == [VL6180X_INT_DRDY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a45c7fc526e0383910d95e8d0de7757cc)) {
    [vl6180x_rng_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga04d126d28616bb47a0bed098d930c1d7)(&dev, &rng);
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("RNG: %u [mm]\n", rng);
}
else if (src.[rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) == [VL6180X_INT_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635aa7c6f823016999877eaa91bc0f497217)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("RNG: out of window\n");
}
else if (src.[rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) == [VL6180X_INT_RNG_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__regs_8h_1a8ff967fa1f8891b1d3d3105215b46b36)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("RNG: low level\n");
}
else if (src.[rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) == [VL6180X_INT_RNG_HIGH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__regs_8h_1a83ad0cb67adc1b4182b8963c8594b99b)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("RNG: high level\n");
}

if (src.[als_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) == [VL6180X_INT_DRDY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a45c7fc526e0383910d95e8d0de7757cc)) {
    [vl6180x_als_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga794a9ed589a84d731dcba0dfb60f4bfd)(&dev, &als, &lux);
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("ALS: %u [cnts], %u [lux]\n", als, lux);
}
else if (src.[als_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) == [VL6180X_INT_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635aa7c6f823016999877eaa91bc0f497217)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("ALS: out of window\n");
}
else if (src.[als_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) == [VL6180X_INT_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a1a15e75f9af5314f519dce07c3ce6b94)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("ALS: low level\n");
}
else if (src.[als_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) == [VL6180X_INT_HIGH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635a778f44971d117f62cd3ff6d89de72c42)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("ALS: high level\n");
}
```

Power SavingIf module `vl6180x_shutdown` is used, the VL6180X sensor can be shutdown when no measurements are required using the function [vl6180x_power_down](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf9985c866fb3a2269a892dac0deae36b). The power consumption is then reduced to less than 1 uA. To restart the VL6180X in previous measurement mode, the [vl6180x_power_up](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga84fcdfbc772be9c72fa09d0b28aac4f1) function can be used.

To use these functions, the MCU GPIO pin connected to the GPIO0/CE pin of the sensor has to be defined by the vl6180x_params_t::pin_shutdown parameter.

Low level functionsLow level level interface functions that allow direct read and write access to the registers of the sensor.

```cpp
bool [vl6180x_reg_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga0df80d924d4a6afdc89d5409dd8a28a4)(const [vl6180x_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)* dev, uint16_t reg, uint8_t *data, uint8_t len);
bool [vl6180x_reg_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gac107470f68ea711cf0f65229a6b74a03)(const [vl6180x_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)* dev, uint16_t reg, const uint8_t *data, uint8_t len);
```

These functions should only be used to do something special that is not covered by the high level interface AND if you exactly know what you do and what it might affect. Please be aware that it might affect the high level interface.

ConfigurationDefault configurationDefault sensor hardware configurations are set in file `[vl6180x_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h)` using the following defines:

Hardware configuration   |Driver name   |Default Value
--------- | --------- | ---------
I2C device   |[VL6180X_PARAM_DEV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a5a200a6e333199ca974603fc2bdfe006)|[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)
I2C address   |[VL6180X_PARAM_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a363fe8d70c5adf432ba644346b6c5e66)|[VL6180X_I2C_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga073f17f7fd9eaee55465373cd11c1eb7)
Interrupt pin   |[VL6180X_PARAM_INT_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a06800eff0d16061477e3bf7eea64d67c)|[GPIO_PIN(0,1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)
Shutdown pin   |[VL6180X_PARAM_SHUTDOWN_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1aecb6cd928b087f66bdcc861099819308)|[GPIO_PIN(0,2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)

These hardware configurations can be overridden either by the board definition or by defining them in the `CFLAGS` variable in the make command, for example:

```cpp
USEMODULE='vl6180x_rng vl6180x_als vl6180x_irq` \
CLFAGS='-DVL6180X_PARAM_INT_PIN=GPIO_PIN\(0,5\)' \
BOARD=... make -C tests/drivers/vl6180x
```

The default configuration of the sensor is defined in file `[vl6180x_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h)` using the following defines:

Parameter   |Default Value   |Define to be overridden
--------- | --------- | ---------
Period of continuous measurements   |200 ms   |[CONFIG_VL6180X_MEAS_PERIOD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1ad7563baf87022fa175ded623d2bcecae)
Ranging maximum convergence time   |50 ms   |[CONFIG_VL6180X_RNG_MAX_TIME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a250c29b2b29715fd5e3d3dd684713531)
Ranging interrupt mode   |VL6180X_INT_DRDY   |[CONFIG_VL6180X_RNG_INT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a8b7cf23f4d6e61d055f286387972e26c)
Ranging lower threshold   |20 mm   |[CONFIG_VL6180X_RNG_THRESH_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a1048ee277260b835f2e433e197b03b3c)
Ranging upper threshold   |90 mm   |[CONFIG_VL6180X_RNG_THRESH_HIGH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1ab9cb7f28990e0694fa5440e3e8b1d64a)
ALS integration time   |100 ms   |[CONFIG_VL6180X_ALS_INT_TIME](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a8bf28cae2db673143f3d59d85b32aa7e)
ALS analogue gain   |VL6180X_ALS_GAIN_1   |[CONFIG_VL6180X_ALS_GAIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1aec5488b6a0b11cad9d1f3e06d535b50f)
ALS lux resolution lux/count*1000   |320   |[CONFIG_VL6180X_ALS_LUX_RES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1ab3b82d2723f6b3001e7f5de02ede4bb4)
ALS interrupt mode   |VL6180X_INT_DRDY   |[CONFIG_VL6180X_ALS_INT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1ac5b5aeff9ce5d34776a30cfff4894b94)
ALS lower threshold   |50 counts   |[CONFIG_VL6180X_ALS_THRESH_LOW](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a5414c856854f9326cdb0c1a61a5dee4c)
ALS upper threshold   |2000 counts   |[CONFIG_VL6180X_ALS_THRESH_HIGH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h_1a5f98d525b31bf04eff55438cb210ba51)

Single or all parameters of the default configuration can be overridden either by placing a modified file `[vl6180x_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#vl6180x__params_8h)` in the application directory or by defining them in the variable `CFLAGS` in the make command line. For example to configure a measurement period of 500 ms and a maximum convergence time for ranging of 60 ms, the following command could be used: 
```cpp
USEMODULE='vl6180x_rng vl6180x_als` \
CLFAGS='-DCONFIG_VL6180X_MEAS_PERIOD=50 -DCONFIG_VL6180X_RNG_MAX_TIME=60' \
BOARD=... make -C tests/drivers/vl6180x
```

Configuration at runtimeIf module `vl6180x_config` is used, the following functions can be used to change the default sensor configuration at runtime.

Function   |Functionality
--------- | ---------
[vl6180x_rng_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gab19e36e6463c24128182f86fe04fdb09)|Changes the range measurement parameter configuration
[vl6180x_als_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf8b06aca582804624d3b46d4566e9e9a)|Changes the ALS measurement parameter configuration
[vl6180x_int_config](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga3493c4777cea820dbf64e709265c95fd)|Changes the thresholds for event interrupts

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`VL6180X_I2C_ADDR`](#group__drivers__vl6180x_1ga073f17f7fd9eaee55465373cd11c1eb7)            | VNCL6180 default I2C slave address.
`enum `[`vl6180x_error_t`](#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)            | Error codes.
`enum `[`vl6180x_als_gain_t`](#group__drivers__vl6180x_1gaba8bc8b0923dafee52fbe268058ea275)            | Analogue gain for ALS measurements.
`enum `[`vl6180x_rng_status_t`](#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e)            | Range measurement status.
`enum `[`vl6180x_als_status_t`](#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940)            | Ambient light sensing (ALS) status.
`enum `[`vl6180x_int_mode_t`](#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635)            | Interrupt mode.
`public int `[`vl6180x_init`](#group__drivers__vl6180x_1gaee994b4e0d657f6504b8ecb779843977)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,const `[`vl6180x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t)` * params)`            | Initialize the VL6180X sensor device.
`public int `[`vl6180x_start_cont`](#group__drivers__vl6180x_1ga36daffc23638118062efda0aacc7564e)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Start measurements in continuous mode.
`public int `[`vl6180x_stop_cont`](#group__drivers__vl6180x_1ga4567388bb1fcd88d01314d3a5da41291)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Stop measurements in continuous mode.
`public int `[`vl6180x_rng_data_ready`](#group__drivers__vl6180x_1gaec9a64cf95727d24706d55c7977c432c)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Range data ready status function.
`public int `[`vl6180x_rng_read`](#group__drivers__vl6180x_1ga04d126d28616bb47a0bed098d930c1d7)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint8_t * mm)`            | Read one ranging data sample in mm.
`public `[`vl6180x_rng_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e)` `[`vl6180x_rng_status`](#group__drivers__vl6180x_1ga0bf5eaf912925fa7106b693410f150ee)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Get status of last range measurement.
`public int `[`vl6180x_rng_start_single`](#group__drivers__vl6180x_1gab36ea67b4f669e2e82c4edd510caf6bd)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Start a single-shot range measurement.
`public int `[`vl6180x_rng_config`](#group__drivers__vl6180x_1gab19e36e6463c24128182f86fe04fdb09)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint8_t period,uint8_t max_time)`            | Reconfigure range measurements at runtime.
`public int `[`vl6180x_als_data_ready`](#group__drivers__vl6180x_1ga3c97236bab4af4fca7a2e5ba6f8e13d0)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | ALS data ready status function.
`public int `[`vl6180x_als_read`](#group__drivers__vl6180x_1ga794a9ed589a84d731dcba0dfb60f4bfd)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint16_t * raw,uint16_t * lux)`            | Read one ambient light sensing (ALS) data sample.
`public `[`vl6180x_als_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940)` `[`vl6180x_als_status`](#group__drivers__vl6180x_1ga4406e23b03d53454c097d09a8eb3957a)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Get status of last ALS measurement.
`public int `[`vl6180x_als_start_single`](#group__drivers__vl6180x_1ga856a14eee3d85833d184d9d1627d82f0)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Start a single-shot ALS measurement.
`public int `[`vl6180x_als_config`](#group__drivers__vl6180x_1gaf8b06aca582804624d3b46d4566e9e9a)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint8_t period,uint8_t int_time,`[`vl6180x_als_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaba8bc8b0923dafee52fbe268058ea275)` gain)`            | Reconfigure ambient light sensing (ALS) during runtime.
`public int `[`vl6180x_power_down`](#group__drivers__vl6180x_1gaf9985c866fb3a2269a892dac0deae36b)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Power down the sensor.
`public int `[`vl6180x_power_up`](#group__drivers__vl6180x_1ga84fcdfbc772be9c72fa09d0b28aac4f1)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)`            | Power down the sensor.
`public int `[`vl6180x_int_wait`](#group__drivers__vl6180x_1ga84c03e22d383cf539eb347b4766fbd12)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,`[`vl6180x_int_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t)` * src)`            | Wait for configured interrupts and return the interrupt sources.
`public int `[`vl6180x_int_enable`](#group__drivers__vl6180x_1ga0d6047d9acfb6a16fd8034b965c859ab)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,`[`vl6180x_int_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t)` mode)`            | Enable and disable interrupts.
`public int `[`vl6180x_int_config`](#group__drivers__vl6180x_1ga3493c4777cea820dbf64e709265c95fd)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,`[`vl6180x_int_thresh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t)` thresh)`            | Configure thresholds for event interrupts at runtime.
`struct `[`vl6180x_int_config_t`](#structvl6180x__int__config__t) | Interrupt config.
`struct `[`vl6180x_int_thresh_t`](#structvl6180x__int__thresh__t) | Interrupt threshold configuration.
`struct `[`vl6180x_params_t`](#structvl6180x__params__t) | VL6180X device configuration.
`struct `[`vl6180x_t`](#structvl6180x__t) | VL6180X sensor device data structure type.

## Members

#### `define `[`VL6180X_I2C_ADDR`](#group__drivers__vl6180x_1ga073f17f7fd9eaee55465373cd11c1eb7) 

VNCL6180 default I2C slave address.

#### `enum `[`vl6180x_error_t`](#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VL6180X_OK            | Success.
VL6180X_ERROR_I2C            | I2C communication error.
VL6180X_ERROR_WRONG_ID            | Wrong id read.
VL6180X_ERROR_NO_PIN            | Pin not defined.
VL6180X_ERROR_NO_DATA            | No data available.
VL6180X_ERROR_RNG            | Ranging error.
VL6180X_ERROR_ALS            | Ambient light sensing (ALS) error.
VL6180X_ERROR_NOT_READY            | Device not ready.

Error codes.

#### `enum `[`vl6180x_als_gain_t`](#group__drivers__vl6180x_1gaba8bc8b0923dafee52fbe268058ea275) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VL6180X_ALS_GAIN_20            | 20 x gain (actual analogue gain of 20)
VL6180X_ALS_GAIN_10            | 10 x gain (actual analogue gain of 10.32)
VL6180X_ALS_GAIN_5            | 5 x gain (actual analogue gain of 5.21)
VL6180X_ALS_GAIN_2_5            | 2.5 x gain (actual analogue gain of 2.6)
VL6180X_ALS_GAIN_1_67            | 1.67 x gain (actual analogue gain of 1.72)
VL6180X_ALS_GAIN_1_25            | 1.25 x gain (actual analogue gain of 1.28)
VL6180X_ALS_GAIN_1            | 1 x gain (actual analogue gain of 1.01), default
VL6180X_ALS_GAIN_40            | 40 x gain (actual analogue gain of 40)

Analogue gain for ALS measurements.

#### `enum `[`vl6180x_rng_status_t`](#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VL6180X_RNG_OK            | No error.
VL6180X_RNG_VCSEL_CONT_TEST            | VCSEL continuity Test.
VL6180X_RNG_VCSEL_WD_TEST            | VCSEL watchdog test.
VL6180X_RNG_VCSEL_WD            | VCSEL watchdog.
VL6180X_RNG_PLL1_LOCK            | PLL1 lock.
VL6180X_RNG_PLL2_LOCK            | PLL2 lock.
VL6180X_RNG_EARLY_CONV_EST            | Early convergence estimate.
VL6180X_RNG_MAX_CONV            | Maximum convergence time reached.
VL6180X_RNG_NO_TARGET            | No target, ignore.
VL6180X_RNG_MAX_SNR            | Maximum SNR reached.
VL6180X_RNG_RAW_ALGO_UNDERFLOW            | Raw ranging algorithm underflow.
VL6180X_RNG_RAW_ALGO_OVERFLOW            | Raw ranging algorithn overflow.
VL6180X_RNG_ALGO_UNDERFLOW            | Ranging algorithm underflow.
VL6180X_RNG_ALGO_OVERFLOW            | Ranging algorithm overflow.

Range measurement status.

#### `enum `[`vl6180x_als_status_t`](#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VL6180X_ALS_OK            | No error.
VL6180X_ALS_OVERFLOW            | ALS measurement overflow.
VL6180X_ALS_UNDERFLOW            | ALS measurement underflow.

Ambient light sensing (ALS) status.

#### `enum `[`vl6180x_int_mode_t`](#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
VL6180X_INT_NONE            | Interrupt is disabled.
VL6180X_INT_LOW            | Interrupt is triggered when values are below the lower threshold.
VL6180X_INT_HIGH            | Interrupt is triggered when values are above the upper threshold.
VL6180X_INT_OUT            | Interrupt is triggered when values are below the lower threshold or above the upper threshold (value leave the threshold window)
VL6180X_INT_DRDY            | Interrupt is triggered when new data are ready to be read.

Interrupt mode.

The interrupt mode defines the different sources that can trigger an interrupt on the GPIO1 pin of the sensor. The interrupt mode is defined for range and ALS measurements separately. Interrupts can be triggered either

* in each measurement cycle when new data become available (data ready interrupts) or

* only when values exceed a threshold configured (event interrupts).

For threshold interrupts, upper and lower thresholds have to be defined, with the upper and lower thresholds defining a threshold window, see also [vl6180x_int_thresh_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t).

Interrupts are only supported when module `vl6180x_irq` is used. 

Only one of the interrupt modes must be enabled at the same time.

#### `public int `[`vl6180x_init`](#group__drivers__vl6180x_1gaee994b4e0d657f6504b8ecb779843977)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,const `[`vl6180x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t)` * params)` 

Initialize the VL6180X sensor device.

After initialization, the sensor is configured according to the standard configuration parameters and is fully functional.

If the configured measurement period is 0, the single-shot mode is enabled for both the range and ALS measurements. The functions vl6180x_rng_start_single and vl6180x_als_start_single must then be used to start a single measurement. Otherwise, the continuous mode is activated for both measurements, which are started immediately after sensor initialization with the configured measurement period.

#### Parameters
* `dev` Device descriptor of VL6180X sensor to be initialized 

* `params` Configuration parameters, see [vl6180x_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t)

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_start_cont`](#group__drivers__vl6180x_1ga36daffc23638118062efda0aacc7564e)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Start measurements in continuous mode.

Range and/or ALS measurements are started in continuous mode with same measurement period as defined in configuration parameter [vl6180x_params_t::period](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1aa3331bdbe9ffead1999020d9fdef4f9a).

Continuous mode cannot be started separately for range and ALS measurements.

* Measurement period [vl6180x_params_t::period](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1aa3331bdbe9ffead1999020d9fdef4f9a) must not be zero.

* Measurements must not yet be started in continuous mode when called.

#### Parameters
* `dev` Device descriptor of VL6180X sensor to be initialized

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_stop_cont`](#group__drivers__vl6180x_1ga4567388bb1fcd88d01314d3a5da41291)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Stop measurements in continuous mode.

Continuous range and ALS measurements are stopped. Once continuous measurements are stopped, vl6180x_rng_start_single or vl6180x_als_start_single can be used to start single-shot measurements separately.

* Measurement period [vl6180x_params_t::period](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1aa3331bdbe9ffead1999020d9fdef4f9a) must not be zero.

* Measurements must be started in continuous mode when called.

#### Parameters
* `dev` Device descriptor of VL6180X sensor to be initialized

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_rng_data_ready`](#group__drivers__vl6180x_1gaec9a64cf95727d24706d55c7977c432c)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Range data ready status function.

The function can be used for polling to know when new ranging data are ready.

This function is only available when module `vl6180x_rng` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor

#### Parameters
* `VL6180X_OK` new ranging data are ready 

* `VL6180X_ERROR_NO_DATA` no new ranging data available 

* `VL6180X_ERROR_*` a negative error code on any other error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_rng_read`](#group__drivers__vl6180x_1ga04d126d28616bb47a0bed098d930c1d7)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint8_t * mm)` 

Read one ranging data sample in mm.

This function returns the ranging data in millimeters. If ranging value is invalid because of a measurement error, [VL6180X_ERROR_RNG](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a7e32432f2b999c80c3683c02afe5d578) is returned. The [vl6180x_rng_status](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga0bf5eaf912925fa7106b693410f150ee) function can then be used to get an error code of type [vl6180x_rng_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e).

* This function is only available when module `vl6180x_rng` is used.

* The function clears the interrupt if ambient light sensing interrupts are used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

* `mm` Ranging data in mm [0...100]

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_RNG` on error during range measurement 

* `VL6180X_ERROR_*` a negative error code on any other error see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public `[`vl6180x_rng_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e)` `[`vl6180x_rng_status`](#group__drivers__vl6180x_1ga0bf5eaf912925fa7106b693410f150ee)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Get status of last range measurement.

This function is only available when module `vl6180x_rng` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

#### Parameters
* `status` of type vl6180x_rng_status_t

#### `public int `[`vl6180x_rng_start_single`](#group__drivers__vl6180x_1gab36ea67b4f669e2e82c4edd510caf6bd)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Start a single-shot range measurement.

Measurements must not be started in continuous mode when called.

This function is only available when module `vl6180x_rng` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_rng_config`](#group__drivers__vl6180x_1gab19e36e6463c24128182f86fe04fdb09)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint8_t period,uint8_t max_time)` 

Reconfigure range measurements at runtime.

This function can be used to overwrite the default configuration of range measurements defined by [vl6180x_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t) at runtime.

For this purpose, the running range measurement is stopped and restarted after the reconfiguration if continuous mode is used (`period` is not 0).

* This function is only available when modules `vl6180x_rng` and `vl6180x_config` are used.

* Since parameter `period` is used for continuous mode, in which measurements are performed in interleaved mode, setting the period with this function also affects the ALS measurements in continuous mode.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

* `period` Period in continuous measurement mode in steps of 10 ms. It controls also the measurement mode enabled after the initialization. If 0, single-shot mode is enabled, otherwise the continuous mode is enabled and measurement are started automatically. 

* `max_time` Maximum convergence time in ms [1...63] given to the sensor to perform range measurements

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_als_data_ready`](#group__drivers__vl6180x_1ga3c97236bab4af4fca7a2e5ba6f8e13d0)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

ALS data ready status function.

This function is only available when module `vl6180x_als` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor

#### Parameters
* `VL6180X_OK` new ALS data are ready 

* `VL6180X_ERROR_NO_DATA` no new ALS data available 

* `VL6180X_ERROR_*` a negative error code on any other error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_als_read`](#group__drivers__vl6180x_1ga794a9ed589a84d731dcba0dfb60f4bfd)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint16_t * raw,uint16_t * lux)` 

Read one ambient light sensing (ALS) data sample.

This function returns one ALS data sample as raw count value and, if required, as illuminance in Lux. The range of the count value depends on

* the ALS analog gain defined by [vl6180x_params_t::als_gain](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1ab306b1a7590e6929a3a78b542d4ff040),

* the integration time defined by [vl6180x_params_t::als_int_time](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1a0aa0035dda5095061a43b31e5f6370f5), and

* the lux resolution defined by vl6180x_params_t::als_res.

The count value is returned in parameter `raw` while the illuminance is returned in parameter `lux`. For either `raw` or `lux` also `NULL` can be passed, if only one value is of interest.

If ALS value is invalid because of a measurement error, [VL6180X_ERROR_ALS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ggaeef583aa05ce818cc70d29a056989b25a6b07aea008982c578ba2b76d5bd5f82a) is returned. The [vl6180x_als_status](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga4406e23b03d53454c097d09a8eb3957a) function can then be used to get an error code of type [vl6180x_als_status_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940).

* This function is only available when module `vl6180x_als` is used.

* The function clears the interrupt if ambient light sensing interrupts are used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

* `raw` Ambient light raw data as count value 

* `lux` Ambient light in Lux

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public `[`vl6180x_als_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940)` `[`vl6180x_als_status`](#group__drivers__vl6180x_1ga4406e23b03d53454c097d09a8eb3957a)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Get status of last ALS measurement.

This function is only available when module `vl6180x_als` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

#### Parameters
* `status` of type vl6180x_als_status_t

#### `public int `[`vl6180x_als_start_single`](#group__drivers__vl6180x_1ga856a14eee3d85833d184d9d1627d82f0)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Start a single-shot ALS measurement.

Measurements must not be started in continuous mode when called.

This function is only available when module `vl6180x_als` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_als_config`](#group__drivers__vl6180x_1gaf8b06aca582804624d3b46d4566e9e9a)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,uint8_t period,uint8_t int_time,`[`vl6180x_als_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaba8bc8b0923dafee52fbe268058ea275)` gain)` 

Reconfigure ambient light sensing (ALS) during runtime.

This function can be used to overwrite the default configuration of ambient light sensing defined by [vl6180x_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t) during runtime.

For this purpose, the running ambient light sensing (ALS) is stopped and restarted after the reconfiguration if continuous mode is used (`period` is not 0).

* This function is only available when modules `vl6180x_als` and `vl6180x_config` are used.

* Since parameter `period` is used for continuous mode, in which measurements are performed in interleaved mode, setting the period with this function also affects the range measurements in continuous mode.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

* `period` Period in continuous measurement mode in steps of 10 ms. It controls also the measurement mode enabled after the initialization. If 0, single-shot mode is enabled, otherwise the continuous mode is enabled and measurement are started automatically. 

* `int_time` ALS integration time in ms [0...511] 

* `gain` ALS analogue gain for light channel

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_power_down`](#group__drivers__vl6180x_1gaf9985c866fb3a2269a892dac0deae36b)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Power down the sensor.

This function requires that a GPIO connected to sensor's GPIO0/CE pin is defined by parameter vl6180x_params_t::pin_shutdown.

This function is only available if the `vl6180x_shutdown` module is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_power_up`](#group__drivers__vl6180x_1ga84fcdfbc772be9c72fa09d0b28aac4f1)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev)` 

Power down the sensor.

This function requires that a GPIO connected to sensor's GPIO0/CE pin is defined by parameter vl6180x_params_t::pin_shutdown.

This function is only available if the `vl6180x_shutdown` module is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_int_wait`](#group__drivers__vl6180x_1ga84c03e22d383cf539eb347b4766fbd12)`(const `[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,`[`vl6180x_int_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t)` * src)` 

Wait for configured interrupts and return the interrupt sources.

To avoid I2C bus access in interrupt context, the driver prevents the direct use of interrupts and application specific ISRs. Rather, this function has to be used to wait for an interrupt. It enables the interrupt signal for the configured MCU GPIO and then blocks the calling thread until an interrupt is triggered.

Once an interrupt is triggered, the driver handles the interrupt with an internal ISR and then returns. When the function returns, the data structure of type [vl6180x_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t) to which the `src` parameter points contains the source of the triggered interrupt. It contains a flag for each possible interrupt source which can be tested for true.

* Configuration parameter [vl6180x_params_t::int_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1ad23f825a687c48778d24133ca817104e) has to be defined.

* [vl6180x_int_config_t::rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) and [vl6180x_int_config_t::als_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) must only define one interrupt mode each.

* If threshold interrupts are enabled, thresholds have to be valid.

This function is only available when module `vl6180x_irq` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

* `src` Interrupt sources, see [vl6180x_int_config_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t)

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_int_enable`](#group__drivers__vl6180x_1ga0d6047d9acfb6a16fd8034b965c859ab)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,`[`vl6180x_int_config_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t)` mode)` 

Enable and disable interrupts.

Configured interrupts can be enabled or disabled with this function.

* Configuration parameter [vl6180x_params_t::int_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t_1ad23f825a687c48778d24133ca817104e) has to be defined

* [vl6180x_int_config_t::rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) and [vl6180x_int_config_t::als_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) must only define one interrupt mode each.

* To disable intertupts, set [vl6180x_int_config_t::rng_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) and [vl6180x_int_config_t::als_int](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) to [VL6180X_INT_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gga874149548c7fa6a80cca96600ddad635aa1da06268b82284f56c46a567b27cf36).

* This function is only available when module `vl6180x_irq` is used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

* `mode` Interrupts to be enabled, must be only one for each measurement type (range and ALS)

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

#### `public int `[`vl6180x_int_config`](#group__drivers__vl6180x_1ga3493c4777cea820dbf64e709265c95fd)`(`[`vl6180x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__t)` * dev,`[`vl6180x_int_thresh_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t)` thresh)` 

Configure thresholds for event interrupts at runtime.

This function is only available when modules `vl6180x_irq` and `vl6180x_config` are used.

#### Parameters
* `dev` Device descriptor of VL6180X sensor 

* `thresh` Threshold configuration for event interrupts, see [vl6180x_int_thresh_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__int__thresh__t)

#### Parameters
* `VL6180X_OK` on success 

* `VL6180X_ERROR_*` a negative error code on error, see [vl6180x_error_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaeef583aa05ce818cc70d29a056989b25)

# struct `vl6180x_int_config_t` 

Interrupt config.

This type defines the interrupt mode for both range measurements and ALS measurements. It is used on the one hand as parameter `mode` in the function [vl6180x_int_enable](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga0d6047d9acfb6a16fd8034b965c859ab) to enable the interrupt for the respective measurement and on the other hand to return the source of an interrupt in function [vl6180x_int_wait](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga84c03e22d383cf539eb347b4766fbd12) when an interrupt was triggered.

The interrupt mode is defined for range and ALS measurements separately.

Interrupts are only supported when module `vl6180x_irq` is used.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`vl6180x_int_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635)` `[`rng_int`](#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) | Interrupt mode for range measurements.
`public `[`vl6180x_int_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635)` `[`als_int`](#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) | Interrupt mode for ALS measurements.

## Members

#### `public `[`vl6180x_int_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635)` `[`rng_int`](#structvl6180x__int__config__t_1a9151b1c64b14667dfd111a399c2b6301) 

Interrupt mode for range measurements.

#### `public `[`vl6180x_int_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga874149548c7fa6a80cca96600ddad635)` `[`als_int`](#structvl6180x__int__config__t_1a76822625931d04b30e8bef40cc942fe4) 

Interrupt mode for ALS measurements.

# struct `vl6180x_int_thresh_t` 

Interrupt threshold configuration.

Threshold configurations are used for event interrupts only. If event interrupts are enabled by the corresponding interrupt mode for range and/or ALS measurements, the lower and/or upper threshold values are used to generate an interrupt if the values of the respective measurement exceed these threshold values.

The unit of threshold values for range measurements is millimeters. The unit of threshold values for ALS measurements is counts.

Interrupts are only supported when module `vl6180x_irq` is used.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`rng_high`](#structvl6180x__int__thresh__t_1a15e187293edc9c1eff0fa9fe08f30157) | upper threshold for range values
`public uint8_t `[`rng_low`](#structvl6180x__int__thresh__t_1a3bc8654b6121521d3953d80f26bc2ab3) | lower threshold for range values
`public uint16_t `[`als_high`](#structvl6180x__int__thresh__t_1aaeb8802b48baf545e12914e0c85996f7) | upper threshold for ALS values
`public uint16_t `[`als_low`](#structvl6180x__int__thresh__t_1af2488e4eaba584b934a6e3d3ccd81afe) | lower threshold for ALS values

## Members

#### `public uint8_t `[`rng_high`](#structvl6180x__int__thresh__t_1a15e187293edc9c1eff0fa9fe08f30157) 

upper threshold for range values

#### `public uint8_t `[`rng_low`](#structvl6180x__int__thresh__t_1a3bc8654b6121521d3953d80f26bc2ab3) 

lower threshold for range values

#### `public uint16_t `[`als_high`](#structvl6180x__int__thresh__t_1aaeb8802b48baf545e12914e0c85996f7) 

upper threshold for ALS values

#### `public uint16_t `[`als_low`](#structvl6180x__int__thresh__t_1af2488e4eaba584b934a6e3d3ccd81afe) 

lower threshold for ALS values

# struct `vl6180x_params_t` 

VL6180X device configuration.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`period`](#structvl6180x__params__t_1aa3331bdbe9ffead1999020d9fdef4f9a) | Measurement period in continuous mode in steps of 10 ms (default 20 = 200 ms).

## Members

#### `public uint8_t `[`period`](#structvl6180x__params__t_1aa3331bdbe9ffead1999020d9fdef4f9a) 

Measurement period in continuous mode in steps of 10 ms (default 20 = 200 ms).

The measurement period also controls the measurement mode used after sensor initialization. If the configured measurement period is 0, the single-shot mode is enabled for both the range and ALS measurements. The functions vl6180x_rng_start_single and vl6180x_als_start_single must then be used to start a single measurement. Otherwise, the continuous mode is activated for both measurements, which are started immediately after sensor initialization with the configured measurement period. This also applies to the initialization after a power-down and power-up cycle.

When ALS and range measurements are used in continuous mode, the so-called interleaved mode is used automatically, where an ALS measurement is immediately followed by a range measurement and repeated with the defined period.

# struct `vl6180x_t` 

VL6180X sensor device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`vl6180x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t)` `[`params`](#structvl6180x__t_1a58a7845d128599c5c1b1a11138f73bf2) | Device initialization parameters.
`public bool `[`cont_meas`](#structvl6180x__t_1a6c08663d42a5a291759e8d7b291f5a17) | Continuous mode running.
`public `[`vl6180x_rng_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e)` `[`rng_status`](#structvl6180x__t_1a2f2953ba65eb9582f55b878c9ee349c5) | Status of last range measurement.
`public `[`vl6180x_als_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940)` `[`als_status`](#structvl6180x__t_1a27928cdf197b38378943f8f98cb0b0ab) | Status of last ALS measurement.

## Members

#### `public `[`vl6180x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_vl6180x.md#structvl6180x__params__t)` `[`params`](#structvl6180x__t_1a58a7845d128599c5c1b1a11138f73bf2) 

Device initialization parameters.

#### `public bool `[`cont_meas`](#structvl6180x__t_1a6c08663d42a5a291759e8d7b291f5a17) 

Continuous mode running.

#### `public `[`vl6180x_rng_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1gaf95787a8409141ccad02463eba94fb8e)` `[`rng_status`](#structvl6180x__t_1a2f2953ba65eb9582f55b878c9ee349c5) 

Status of last range measurement.

#### `public `[`vl6180x_als_status_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__vl6180x_1ga2eadfeaf1f86a23885ef13eaa6885940)` `[`als_status`](#structvl6180x__t_1a27928cdf197b38378943f8f98cb0b0ab) 

Status of last ALS measurement.

