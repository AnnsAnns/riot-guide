---
title: api-drivers_l3gxxxx.md
description: api-drivers_l3gxxxx.md
---
# group `drivers_l3gxxxx` 

Device Driver for ST L3Gxxxx 3-axis gyroscope sensor family.

Driver for ST L3Gxxxx 3-axis gyroscope sensor familyTable of contents* [Overview](#l3gxxxx_overview)* [About the sensor](#l3gxxxx_about)

* [Supported features](#l3gxxxx_supported)

* [Measurement Process](#l3gxxxx_measurement_process)* [Sensor modes](#l3gxxxx_sensor_modes)

* [Output Data Rates and Filters](#l3gxxxx_odr_filters)

* [Using the driver (basic functionality)](#l3gxxxx_using_driver)* [Initialization](#l3gxxxx_initialization)

* [Output data format](#l3gxxxx_output_data)

* [Fetching data](#l3gxxxx_fetching_data)

* [Using the FIFO](#l3gxxxx_fifo)* [Configuration of the FIFO](#l3gxxxx_fifo_config)

* [Reading data from the FIFO](#l3gxxxx_fifo_read_data)

* [Using Interrupts](#l3gxxxx_interrupts)* [Data interrupts (data ready and FIFO status) on signal `INT2/DRDY`](#l3gxxxx_data_interrupt)

* [Event interrupts (Axes movement and wake-up) on signal `INT1`](#l3gxxxx_event_interrupt)

* [Interrupt context problem](#l3gxxxx_interrupt_context)

* [Interrupt signal properties](#l3gxxxx_interrupt_signal)

* [Power Saving](#l3gxxxx_power_saving)

* [Low level functions](#l3gxxxx_low_level)

* [Default configuration](#l3gxxxx_default_configuration)

OverviewAbout the sensorST L3Gxxxx sensors are low-power **3-axis angular rate sensors** connected to **I2C** or **SPI** with a full scale of up to **2000 dps**. It supports different measuring rates with a user selectable bandwidth.

**Main features** of the sensor are:

* 3 selectable full scales of ±245, ±500, and ±2000 dps

* 7 measuring rates from 12.5 Hz to 800 Hz with 4 bandwidths

* 16 bit angular rate value data output

* 2 dedicated interrupt signals for data and event interrupts

* integrated high-pass filters with 3 modes and 10 different cutoff frequencies

* embedded temperature sensor with 8 bit data output

* embedded 32 levels of 16 bit data output FIFO

* I2C and SPI digital interface

* embedded power-down and sleep mode with fast power-on and wake-up

[Back to Table of Contents](#l3gxxxx_toc)

Supported FeaturesThe driver supports the following sensors of the L3Gxxxx 3-axis gyro sensor family. Used sensor variant has to be specified by using the respective pseudomodule.

Sensor Variant   |Pseudomodule   |Vendor Status
--------- | --------- | ---------
L3GD20H   |`l3gd20h`|Not recommended for new designs
L3GD20   |`l3gd20`|Obsolete
L3G4200D   |`l3g4200_ng`|Obsolete
A3G4250D   |`a3g4250d`|Active
I3G4250D   |`i3g4250d`|Active

The driver is modular and supports different levels of functionality, which can be enabled using pseudomodules according to the requirements of the application. This ensures that the driver only uses as much ROM and RAM as really needed.

As basic functionality the driver supports

* a static configuration of the sensor by a default configuration parameter set of type [l3gxxxx_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__params__t) as defined in the file [l3gxxxx_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h)

* the polling of raw output data or angular rates in millidegrees per second (mdps)

* the power-down and power-up of the sensor

* the use of the I2C or SPI interface

The following pseudomodules are used to enable additional functionalities: 
Pseudomodule   |Functionality
--------- | ---------
`l3gxxxx_i2c`|I2C interface enabled
`l3gxxxx_spi`|SPI interface enabled
`l3gxxxx_low_odr`|Low output data rates enabled (L3GD20H only)
`l3gxxxx_fifo`|32 level FIFO enabled
`l3gxxxx_irq_data`|Data interrupt (`INT2/DRDY`) handling enabled
`l3gxxxx_irq_event`|Event interrupt (`INT1`) handling enabled
`l3gxxxx_sleep`|Sleep and wake-up functions enabled
`l3gxxxx_config`|Functions for changing configurations at runtime nabled

The following table shows the mapping of which modules have to be used to enable which functions of the L3Gxxxx.

Feature   |Module
--------- | ---------
16 bit angular rate data output (raw and angular rate)   |`l3gxxxx`
Full scales of ±245, ±500, and ±2000 dps   |`l3gxxxx`
Using high-pass filter (HPF) and low-pass filter (LPF1/LPF2)   |`l3gxxxx`
Output data rates (ODR) from 100 Hz to 800 Hz   |`l3gxxxx`
Output data rates (ODR) from 12.5 Hz to 50 Hz (L3GD20H only)   |`l3gxxxx_low_odr`
Polling data   |`l3gxxxx`
SAUL sensor interface   |`l3gxxxx`
Power-down and power-up functionality   |`l3gxxxx`
Sleep and wake-up functionality   |`l3gxxxx_sleep`
32 level FIFO handling   |`l3gxxxx_fifo`
Data interrupt (`INT2/DRDY`) handling (data ready and FIFO)   |`l3gxxxx_irq_data`
Event interrupt (`INT1`) handling (Axes movement and wake-up)   |`l3gxxxx_irq_event`
Configuration of all sensor functions at runtime   |`l3gxxxx_config`
I2C interface   |`l3gxxxx_i2c`
SPI interface (SPI mode 3)   |`l3gxxxx_spi`

* Multiple L3Gxxxx sensors of same type with both SPI and I2C interfaces can be used simultaneously. If neither the I2C nor the SPI interface are enabled by using the modules `l3gxxxx_i2c` or `l3gxxxx_spi`, the I2C interface is used by default.

* In default configuration, the sensor is configured with an output data rate (ODR) of 100 Hz with a LPF2 cutoff frequency of 25 Hz ([L3GXXXX_ODR_100_25](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9ae03e20a2173f4ba08fd0c7f196e72de1)) and a full scale of 245 dps ([L3GXXXX_SCALE_245_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6daa67cf8ad05876b13a3e7b23d159bf25b)). The data are filtered with HPF and LPF2, where the HPF is used in normal mode with reset ([L3GXXXX_HPF_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga5eca69c108dac106b024b151e08ee1c1ae783b63e831898cd8e6b59535da32f04)) and a cutoff frequency of 8 Hz (see [l3gxxxx_config_hpf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaba38aceb2198303af49d01d62825912d)).
 This configuration can either be changed by overriding default parameters [CONFIG_L3GXXXX_ODR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aa6b11546eaed8f1d435aa58daabe7137), [CONFIG_L3GXXXX_SCALE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aa5f07e9863bbce57ba643e699413aa64), [CONFIG_L3GXXXX_FILTER_SEL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a0da4b35a31d33aa1336f95b4af2a4908), [CONFIG_L3GXXXX_HPF_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1abdfc69e4be4f0165f3bc5b0b931e74a0) and [CONFIG_L3GXXXX_HPF_CUTOFF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aac91ea42a51c9f5763004a581a8a2036) or by using functions [l3gxxxx_set_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga04b7e268ab5345335457498c343c3be5), [l3gxxxx_set_scale](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gafaa98a08658ec1a41d9d30cb77fadf30), [l3gxxxx_select_output_filter](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga5ad49b05ea0383384f9c0ed5185baa96), [l3gxxxx_config_hpf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaba38aceb2198303af49d01d62825912d) if module `l3gxxxx_config` is enabled.

* If module 'l3gxxxx_fifo' is used, the FIFO is enabled in mode [L3GXXXX_FIFO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07cade2c4f70a3a298c0988636fe3582a38c) with a watermark level (threshold) of 23, i.e. the interrupt [L3GXXXX_INT_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa8560b8c097e8bacaf89259210a7b236d) is triggered (if enabled) when the 24th sample is stored in the FIFO.
 This configuration can be changed either by overriding the default configuration parameters [CONFIG_L3GXXXX_FIFO_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aee8efcc6e231547d81314d3ceb835f17) and [CONFIG_L3GXXXX_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ac7ef892949722ac7ffd31dd7c65edd88) or by function [l3gxxxx_set_fifo_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gadd07c544d56fdd1793996516e3f93497) if module `l3gxxxx_config` is used.

* If the handling of data interrupts on signal `INT2/DRDY` is enabled by module `l3gxxxx_irq_data`, it depends on whether module `l3gxxxx_fifo` is used, which data interrupts are enabled by default. If `l3gxxxx_fifo` is used, [L3GXXXX_INT_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa8560b8c097e8bacaf89259210a7b236d) and [L3GXXXX_INT_FIFO_OVERRUN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa4162cf1e171a315ae80d37a2a616624d) interrupts are enabled by default. Otherwise only [L3GXXXX_INT_DATA_READY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa83bfcf2780ef249abd2024b66c07aba2) is enabled by default.
 This configuration can be changed using function [l3gxxxx_enable_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga6dea6a88720392288d7c8b6166fbca7c).

* If the handling of event interrupts on signal `INT1` is enabled by module `l3gxxxx_irq_event`, the high event interrupt is enabled by default for all axes. This means that for each individual axis an interrupt is generated when the absolute value of its angular rate exceeds a threshold value of ~30 dps (high event).
 The axis data are filtered with HPF and LPF2. The interrupt signal `INT1` is triggered when the data for one axis becomes greater than the specified threshold (OR condition). The interrupt is latched by default.
 This configuration can be changed either by overriding the default configuration parameters [CONFIG_L3GXXXX_INT1_X_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ae59d9fce5f994b714ab2c8eedb75855e), [CONFIG_L3GXXXX_INT1_Y_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1abeda3eb9fa5f8ed2b7357ff84f5aedf9), [CONFIG_L3GXXXX_INT1_Z_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aaef1428123a8aa6904835bfc85f757f9), [CONFIG_L3GXXXX_INT1_X_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a065d593658c8bcffb8ec1c07833c1994), [CONFIG_L3GXXXX_INT1_X_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1af50de0cefc1026c90289eb05b93959e7), [CONFIG_L3GXXXX_INT1_Y_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ad9f8dd362e9add8aa930a9f00d2210b8), [CONFIG_L3GXXXX_INT1_Y_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1af5765008acfd63553a755692d808e766), [CONFIG_L3GXXXX_INT1_Z_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a46824165e81838be46623e14f80aa1ad), [CONFIG_L3GXXXX_INT1_Z_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a17770672392f06b5261b870dc7ab4f50), [CONFIG_L3GXXXX_INT1_FILTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3e3f9afb9206df5e2d556fc0422bb3b2), [CONFIG_L3GXXXX_INT1_AND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a0411d4c17038e81b0682d5531ce9d163) and [CONFIG_L3GXXXX_INT1_LATCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3ce5f9c4101d8d91abddaf40ea65bec3) or at runtime using function [l3gxxxx_set_int_event_cfg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa58f07f558f106c8da65d7fcbe4a4434) function.
 The `INT1` signal is a HIGH active push/pull output.

[Back to Table of Contents](#l3gxxxx_toc)

Measurement ProcessSensor modesL3Gxxxx sensors provide different operating modes.

* **Power-down mode** is configured automatically after power up boot sequence. In this mode, all gyros are switched off. Therefore, it takes up to 100 ms to switch to another mode. The power consumption in this mode is about 1 uA.

* **Normal mode** is the normal measurement mode. All gyros are switched on and at least one axis is enabled for measurements. Measurements are performed at a defined output data rate (**ODR**). The power consumption in this mode is about 5 mA.

* **Sleep mode** is the normal mode when no axes era enabled for measurement. In this modes, all gyros are kept switched on. Therefore, it only takes 1/ODR to switch to normal mode if low pass filtering is disabled or 6/ODR if low pass filtering is enabled. The power consumption in this mode is about 2.5 mA.

[Back to Table of Contents](#l3gxxxx_toc)

Output Data Rates and FiltersIn normal mode, measurements are performed at a defined output rate (ODR) with a user selectable bandwidth.

Used filter selectionL3Gxxxx sensors integrate a combination of two low pass filters (LPF) and one high pass filter (HPF).

```cpp
                                 +--------------->   L3GXXXX_NO_FILTER
                                 |    +----- +
                    +------------+--->|      |--->   L3GXXXX_LPF2_ONLY
                    |                 | LPF2 |
+-----+   +------+  |   +-----+  +--->|      |--->   L3GXXXX_HPF_AND_LPF2
|     |   |      |  |   |     |  |    +------+
| ADC |-->| LPF1 |--+-->| HPF |--+--------------->   L3GXXXX_HPF_ONLY
|     |   |      |      |     |
+-----+   +------+      +-----+
```

First, raw sensor data are always filtered by LPF1 with a cutoff frequency that is fixed for the selected output data rate (ODR), see [l3gxxxx_odr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9). Resulting data can then optionally be filtered by HPF and/or LPF2. Both filters can be used or bypassed.

The figure above shows possible **filter selections** and the driver symbols defined by [l3gxxxx_filter_sel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206). These can be used to set the filter combination separately for the output data and the data for event interrupt generation.

Driver symbol   |High pass filter (HPF) used   |Low pass filter 2 (LPF2) used
--------- | --------- | ---------
[L3GXXXX_NO_FILTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206a499de55e26ccf2fe81fb0d4714f9d8d6)|-   |-
[L3GXXXX_HPF_ONLY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206ae38f352dad646c7b851ac115b770c1f5)|x   |-
[L3GXXXX_LPF2_ONLY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206af8dfa195c6e8a4d9fe512d63a84ff4ef)|-   |x
[L3GXXXX_HPF_AND_LPF2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206aecd3a2c3d062b3e42adbe2b9a9f36e5b)|x   |x

The default filter selection for the output data is [L3GXXXX_HPF_AND_LPF2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206aecd3a2c3d062b3e42adbe2b9a9f36e5b) and is defined by the default configuration parameter [CONFIG_L3GXXXX_FILTER_SEL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a0da4b35a31d33aa1336f95b4af2a4908). If the module `l3gxxxx_config` is used, it can be changed at runtime using function [l3gxxxx_select_output_filter](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga5ad49b05ea0383384f9c0ed5185baa96).

The default filter selection for event interrupt generation is [L3GXXXX_HPF_AND_LPF2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206aecd3a2c3d062b3e42adbe2b9a9f36e5b) and is defined by default configuration parameter [CONFIG_L3GXXXX_INT1_FILTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3e3f9afb9206df5e2d556fc0422bb3b2). It can be changed at runtime with function [l3gxxxx_set_int_event_cfg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa58f07f558f106c8da65d7fcbe4a4434).

Since same filters are used for the output data as well as the data used for event interrupt generation (selective axes movement / wake-up), the configuration of the filters always affects both data. If the HPF is enabled for filtering the output data, it is also active for filtering the sensor data used for interrupt generation if the LPF2 is enabled for interrupt generation. The other way around, the HPF is also active for filtering the output data when it is enabled for interrupt generation and when the LPF2 is enabled for the output data.

High pass filter modeThe high pass filter (HPF) can be used in different modes.

Driver symbol   |HPF mode
--------- | ---------
[L3GXXXX_HPF_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga5eca69c108dac106b024b151e08ee1c1ae783b63e831898cd8e6b59535da32f04)|Normal mode
[L3GXXXX_HPF_REFERENCE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga5eca69c108dac106b024b151e08ee1c1ab0ad90a05c408f034e8a57a9d62525f6)|Reference mode
[L3GXXXX_HPF_AUTORESET](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga5eca69c108dac106b024b151e08ee1c1a0e444fe224ec516aed0df9966310b050)|Auto-reset on interrupt

In normal mode, the HPF can be reset by reading the REFERENCE register, which instantly deletes the DC component of the angular rate. In reference mode, output data are the difference of raw sensor data and the contents of the REFERENCE register. In autoreset mode, HPF is automatically reset when a configured event interrupt occurs.

The default HPF mode is [L3GXXXX_HPF_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga5eca69c108dac106b024b151e08ee1c1ae783b63e831898cd8e6b59535da32f04) and is defined by the default configuration parameter [CONFIG_L3GXXXX_HPF_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1abdfc69e4be4f0165f3bc5b0b931e74a0). If module `l3gxxxx_config` is used, it can be changed at runtime using function [l3gxxxx_config_hpf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaba38aceb2198303af49d01d62825912d).

Output data rates and filter cutoff frequenciesThe cutoff frequencies of LPF1 and LPF2 are determined by used output data rate [l3gxxxx_odr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9). The following **output data rates (ODR)** and the LPF1/LPF2 cutoff frequencies are defined (Reference: Application Note AN4506):

Mode   |ODR [Hz]   |LPF1 cutoff [Hz]   |LPF2 cutoff [Hz]   |Driver symbol
--------- | --------- | --------- | --------- | ---------
Normal   |100   |32   |12.5   |[L3GXXXX_ODR_100_12](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a81407b65980d7e80ee5659015f863cd6)
Normal   |100   |32   |25   |[L3GXXXX_ODR_100_25](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9ae03e20a2173f4ba08fd0c7f196e72de1)
Normal   |200   |63.3   |12.5   |[L3GXXXX_ODR_200_12](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a43cf13e06892ff1db96c5becc06c0409)
Normal   |200   |63.3   |25   |[L3GXXXX_ODR_200_25](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9ad0194faf8a7bec62bf38dd8e2135ab43)
Normal   |200   |63.3   |50   |[L3GXXXX_ODR_200_50](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9aafe65aa785b57e963c5211d006a9506e)
Normal   |200   |63.3   |70   |[L3GXXXX_ODR_200_70](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a4fb6dfc28072d7b5dc07dad456f759b5)
Normal   |400   |128   |20   |[L3GXXXX_ODR_400_20](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a6c6684cd102f6b963f13d19a2a38b9e0)
Normal   |400   |128   |25   |[L3GXXXX_ODR_400_25](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a58c906c5d12e61db6f59644dd48aecee)
Normal   |400   |128   |50   |[L3GXXXX_ODR_400_50](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9ae03607fe480c5bc52dfccf2ad32de14c)
Normal   |400   |128   |110   |[L3GXXXX_ODR_400_110](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a18e6aef2183bd6d10f9944f9fb724285)
Normal   |800   |211   |30   |[L3GXXXX_ODR_800_30](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a45ad129b1c594a5c731d690013821f70)
Normal   |800   |211   |35   |[L3GXXXX_ODR_800_35](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a16b6ccb447d6376bb42ab6242f6c446f)
Normal   |800   |211   |30   |[L3GXXXX_ODR_800_30](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a45ad129b1c594a5c731d690013821f70)
Normal   |800   |211   |100   |[L3GXXXX_ODR_800_100](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9accd6623c76b794976e7c96b0b8994f4f)
Low ODR   |12.5   |3.9   |-   |[L3GXXXX_ODR_12](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a8437416ff5e9b6327600f8788cb44340)
Low ODR   |25   |7.8   |-   |[L3GXXXX_ODR_25](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9adabeb445ffbad7df85c62faf234ac9b1)
Low ODR   |50   |16   |16.6   |[L3GXXXX_ODR_50](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a3057d80eb715433cd6ea54abaf90d485)

Low ODRs are only available on L3GD20H and if module `l3gxxxx_low_odr` is used.

The default output data rate (ODR) is [L3GXXXX_ODR_100_12](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a81407b65980d7e80ee5659015f863cd6) and defined by the default configuration parameter [CONFIG_L3GXXXX_ODR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aa6b11546eaed8f1d435aa58daabe7137). If module `l3gxxxx_config` is used, it can be changed at runtime using function [l3gxxxx_set_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga04b7e268ab5345335457498c343c3be5), for example:

```cpp
[l3gxxxx_set_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga04b7e268ab5345335457498c343c3be5)(&dev, [L3GXXXX_ODR_400_20](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9a6c6684cd102f6b963f13d19a2a38b9e0), true, true, false);
```

The **cutoff frequencies** of the HPF depend on the selected output data rate (ODR) and are specified by an index from 0 to 9, as shown in the following table. All frequencies are given in Hz.

ODR [Hz]   |12.5   |25   |50   |100   |200   |400   |800
--------- | --------- | --------- | --------- | --------- | --------- | --------- | ---------
0   |1   |2   |4   |8   |15   |30   |56
1   |0.5   |1   |2   |4   |8   |15   |30
2   |0.2   |0.5   |1   |2   |4   |8   |15
3   |0.1   |0.2   |0.5   |1   |2   |4   |8
4   |0.05   |0.1   |0.2   |0.5   |1   |2   |4
5   |0.02   |0.05   |0.1   |0.2   |0.5   |1   |2
6   |0.01   |0.02   |0.05   |0.1   |0.2   |0.5   |1
7   |0.005   |0.01   |0.02   |0.05   |0.1   |0.2   |0.5
8   |0.002   |0.005   |0.01   |0.02   |0.05   |0.1   |0.2
9   |0.001   |0.002   |0.005   |0.01   |0.02   |0.05   |0.1

The default cutoff frequency of HPF is 8 Hz (index 0) and set by the default configuration parameter [CONFIG_L3GXXXX_HPF_CUTOFF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aac91ea42a51c9f5763004a581a8a2036). If module `l3gxxxx_config` is used, it can be changed at runtime using function [l3gxxxx_config_hpf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaba38aceb2198303af49d01d62825912d), for example:

```cpp
[l3gxxxx_config_hpf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaba38aceb2198303af49d01d62825912d)(&dev, [L3GXXXX_HPF_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga5eca69c108dac106b024b151e08ee1c1ae783b63e831898cd8e6b59535da32f04), 0);
```

[Back to Table of Contents](#l3gxxxx_toc)

Using the driverInitializationThe **easiest way to use the driver** is simply to initialize the sensor with function [l3gxxxx_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga9bfae4c56f770fdf3464dd441abb9e9a) using the default configuration parameter set [l3gxxxx_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a17fe2c372c7dbf3c397dfc72c32dab4b) as defined in file [l3gxxxx_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h).

```cpp
static [l3gxxxx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__t) dev;

if ([l3gxxxx_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga9bfae4c56f770fdf3464dd441abb9e9a)(&dev, &[l3gxxxx_params](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a17fe2c372c7dbf3c397dfc72c32dab4b)[0]) != L3DG20H_OK) {
    ... // error handling
}
```

After this initialization, the sensor is fully operational and data can be fetched either by polling or interrupt driven.

Function [l3gxxxx_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga9bfae4c56f770fdf3464dd441abb9e9a) resets the sensor completely. All registers are reset to default values and the embedded FIFO is cleared.

The default configuration parameter set defines

* the communication interface,

* the output data rate (ODR) including LPF1/LPF2 cutoff frequencies,

* the filter combination and HPF cutoff frequency,

* the sensitivity level selected by full scale,

* the FIFO parameters if module `l3gxxxx_fifo` is used,

* the data interrupt (`INT2/DRDY`) pin if module `l3gxxxx_irq_data` is used, and

* the event interrupt (`INT1`) configuration if module `l3gxxxx_irq_event` is used.

Most of these configuration parameters can also be changed at runtime by respective functions if the module `l3gxxxx_config` is used or by overriding default configuration parameters. Detailed information about the default configuration can be found in section [Configuration](#l3gxxxx_default_configuration).

[Back to Table of Contents](#l3gxxxx_toc)

Output data formatIn normal mode, the sensor determines periodically the angular rate for all axes that are enabled for measurement and produces raw output data with the selected output data rate (ODR).

These **raw output data** are 16-bit signed integer values in two’s complement representation. Their range and their resolution depend on the sensitivity of the sensor which is selected by the **full scale** value. L3Gxxxx sensors allow to select the following full scales:

Full Scale   |Sensitivity   |Driver symbol   |Remark
--------- | --------- | --------- | ---------
±245 dps   |8.75 mdps   |[L3GXXXX_SCALE_245_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6daa67cf8ad05876b13a3e7b23d159bf25b)|
±500 dps   |17.50 mdps   |[L3GXXXX_SCALE_500_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6daf4ba0308747e51b2d7b7eed86755c8d8)|not available on A3G4250D
±2000 dps   |70.00 mdps   |[L3GXXXX_SCALE_2000_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6da701209c30f2a02217852be45c33b1675)|not available on A3G4250D

On the A34250D, only 245 dps ([L3GXXXX_SCALE_245_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6daa67cf8ad05876b13a3e7b23d159bf25b)) is available as full scale value.

The default full scale value is ±245 dps which is defined by the default configuration parameter [CONFIG_L3GXXXX_SCALE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aa5f07e9863bbce57ba643e699413aa64). If module `l3gxxxx_config` is used, it can be changed at runtime using function [l3gxxxx_set_scale](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gafaa98a08658ec1a41d9d30cb77fadf30), for example:

```cpp
[l3gxxxx_set_scale](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gafaa98a08658ec1a41d9d30cb77fadf30)(&dev, [L3GXXXX_SCALE_500_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6daf4ba0308747e51b2d7b7eed86755c8d8));
```

[Back to Table of Contents](#l3gxxxx_toc)

Fetching dataTo get the information whether new data are available, the user task can either use

* the function [l3gxxxx_data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga2b48fa387defe9832517734525ae7a28) to check periodically whether new output data are available, or

* the data ready interrupt (`INT2/DRDY`) which is triggered as soon as new output data are available (see below).

Last measurement results can then be fetched either

* as 16 bit raw output data of type [l3gxxxx_raw_data_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__raw__data__t) using function [l3gxxxx_read_raw](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gac965d21908d1567f6ee8c39891548a9b) or

* as 32 bit integer angular rates type [l3gxxxx_data_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__data__t) in millidegrees per second (mdps) using function [l3gxxxx_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga175bd48505b21cdfeb09801d46dc0105).

It is recommended to use function [l3gxxxx_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga175bd48505b21cdfeb09801d46dc0105) since the driver already converts raw output data to angular rates according to the selected full scale value.

```cpp
while (1)
{
    [l3gxxxx_data_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__data__t) data;

    // execute task every 20 ms
    [xtimer_usleep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga01ded1a98b76eea8a1c4c45975781989)(20 * [US_PER_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__time__units_1ga31ae5fdfe8827f4d8def045948d3986e));
    ...
    // test for new data and fetch them if available
    if (([l3gxxxx_data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga2b48fa387defe9832517734525ae7a28)(&dev) > 0) &&
        ([l3gxxxx_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga175bd48505b21cdfeb09801d46dc0105)(&dev, &data) == [L3GXXXX_OK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggae71e7c413bc8f9fbd2ff843f51af8a03adae21973a4661bd59f019a23e6af6e10))) {
        // do something with data
        ...
    }
}
```

The functions [l3gxxxx_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga175bd48505b21cdfeb09801d46dc0105) and [l3gxxxx_read_raw](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gac965d21908d1567f6ee8c39891548a9b) always return the last available results. If these functions are called more often than measurements are performed, some measurement results are retrieved multiple times. If these functions are called too rarely, some measurement results will be lost.

[Back to Table of Contents](#l3gxxxx_toc)

Using the FIFOIn order to limit the rate at which the host processor has to fetch the data, L3Gxxxx sensors embed a FIFO buffer. This is in particular helpful at high output data rates. The FIFO buffer can work in seven different modes and is able to store up to 32 data samples. Please refer the [datasheet](http://www.st.com/resource/en/datasheet/l3gd20.pdf) or [application note](http://www.st.com/resource/en/application_note/dm00119036.pdf) for more details.

Driver symbol   |FIFO mode   |Remark
--------- | --------- | ---------
[L3GXXXX_BYPASS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07caa1adafd93164f24b85666394a4c6d25a)|Bypass mode   |FIFO is not used
[L3GXXXX_FIFO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07cade2c4f70a3a298c0988636fe3582a38c)|FIFO mode   |
[L3GXXXX_STREAM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07ca144e403e984c42f4ff2156deefbcc014)|Stream mode   |
[L3GXXXX_STREAM_TO_FIFO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07ca0cf6cf16fccfd2462fe288f89d7fc01a)|Stream-to-FIFO mode   |L3GD20H and L3GD20 only
[L3GXXXX_BYPASS_TO_STREAM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07cab7160d639a8a61c7f1b32b7eb99ee433)|Bypass-to-Stream mode   |L3GD20H and L3GD20 only
[L3GXXXX_DYNAMIC_STREAM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07ca3c4bd89c0ae12dde5de7810076e04d45)|Dynamic Stream mode   |L3GD20H only
[L3GXXXX_BYPASS_TO_FIFO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07ca8face6fa45242073c7d37ce2a6180544)|Bypass to FIFO mode   |L3GD20H only

A watermark level (threshold) can be set for the FIFO. If the number of data samples in the FIFO exceeds this value, the watermark flag is set and the interrupt [L3GXXXX_INT_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa8560b8c097e8bacaf89259210a7b236d) is triggered, if enabled. This interrupt can be used to gather a minimum number of samples of raw output data before the data are fetched as a single read operation from the sensor.

Configuration of the FIFOThe default FIFO mode is defined by the default configuration parameter [CONFIG_L3GXXXX_FIFO_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aee8efcc6e231547d81314d3ceb835f17). The default watermark level (threshold) of the FIFO is defined by the default configuration parameter [CONFIG_L3GXXXX_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ac7ef892949722ac7ffd31dd7c65edd88).

If module `l3gxxxx_config` is used, both configuration parameters can be changed at runtime with function [l3gxxxx_set_fifo_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gadd07c544d56fdd1793996516e3f93497). This function takes two parameters, the FIFO mode and the watermark level.

```cpp
...
// set the FIFO mode with a watermark level (threshold) of 10, i.e. the
// watermark flag is set or the interrupt is triggered for the 11th sample
l3gxxxx_set_fifo_mode(&dev, [L3GXXXX_STREAM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07ca144e403e984c42f4ff2156deefbcc014), 10);
...
```

To clear the FIFO at any time, set the FIFO mode to [L3GXXXX_BYPASS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07caa1adafd93164f24b85666394a4c6d25a) and back to the desired FIFO mode. 
```cpp
[l3gxxxx_set_fifo_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gadd07c544d56fdd1793996516e3f93497)(&dev, [L3GXXXX_BYPASS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07caa1adafd93164f24b85666394a4c6d25a), 0);
[l3gxxxx_set_fifo_mode](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gadd07c544d56fdd1793996516e3f93497)(&dev, [L3GXXXX_STREAM](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07ca144e403e984c42f4ff2156deefbcc014), 10);
```

Reading data from FIFOTo read data from the FIFO, just use either

* function [l3gxxxx_read_raw_fifo](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga50097074a95b9ed1664bad33a137e559) to get all raw output data stored in the FIFO or

* function [l3gxxxx_read_fifo](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab412a17a1d04cabe6cdb1e1f05549874) to get all data stored in the FIFO and converted to angular rates in mdps (millidegrees per second).

Both functions clear the FIFO and return the number of samples read from the FIFO.

```cpp
[l3gxxxx_data_fifo_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa3a29eb2c6c598845eebdf0bb8832f34)  data;

while (1)
{
    // execute task every 500 ms
    [xtimer_usleep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__xtimer_1ga01ded1a98b76eea8a1c4c45975781989)(500 * [US_PER_MS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__time__units_1ga31ae5fdfe8827f4d8def045948d3986e));
    ...
    // test for new data
    if ([l3gxxxx_data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga2b48fa387defe9832517734525ae7a28)(&dev) > 0) {

        // fetch data from fifo
        int num = [l3gxxxx_read_fifo](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab412a17a1d04cabe6cdb1e1f05549874)(dev, data);

        for (int i = 0; i < num; i++) {
           // do something with data[i] ...
        }
}
```

[Back to Table of Contents](#l3gxxxx_toc)

Using InterruptsL3Gxxxx sensors allow to activate interrupts on two different signals:

* for data (data ready and FIFO status) on signal `INT2/DRDY`, and

* for events (axis movement and wake-up) on signal `INT1`.

[Back to Table of Contents](#l3gxxxx_toc)

Data interrupts (data ready and FIFO status) on signal INT2/DRDYInterrupts on signal `INT2/DRDY` can be generated by the following sources:

Interrupt source   |Driver symbol
--------- | ---------
Output data are ready to be read   |[L3GXXXX_INT_DATA_READY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa83bfcf2780ef249abd2024b66c07aba2)
FIFO content exceeds the watermark level   |[L3GXXXX_INT_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa8560b8c097e8bacaf89259210a7b236d)
FIFO is completely filled   |[L3GXXXX_INT_FIFO_OVERRUN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa4162cf1e171a315ae80d37a2a616624d)
FIFO becomes empty   |[L3GXXXX_INT_FIFO_EMPTY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa6f2874dd0f7d86be3125cecd883a2fba)

[L3GXXXX_INT_DATA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga1dc8dd9c9f4cd216546d1d3c8db3e67d) is the bitwise OR combination of these symbols.

Using data interrupts requires to enable module `l3gxxxx_irq_data`.

Each interrupt source can be enabled or disabled separately with function [l3gxxxx_enable_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga6dea6a88720392288d7c8b6166fbca7c). 
```cpp
[l3gxxxx_enable_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga6dea6a88720392288d7c8b6166fbca7c)(&dev, [L3GXXXX_INT_DATA_READY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa83bfcf2780ef249abd2024b66c07aba2), true);
```
 If `l3gxxxx_fifo` is used, [L3GXXXX_INT_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa8560b8c097e8bacaf89259210a7b236d) and [L3GXXXX_INT_FIFO_OVERRUN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa4162cf1e171a315ae80d37a2a616624d) interrupts are enabled by default. Otherwise only [L3GXXXX_INT_DATA_READY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa83bfcf2780ef249abd2024b66c07aba2) is enabled by default.

The MCU GPIO pin used for the `INT2/DRDY` interrupt signal has to be defined by the hardware configuration parameter [L3GXXXX_INT2_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a149636bcd01fddae4ef7b6cc63f96890).

Once a data interrupt is enabled, function [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91) can be used to wait for an interrupt on signal `INT2/DRDY`. This function returns a structure with the interrupt sources of type [l3gxxxx_int_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t) which contains a flag for each possible data interrupt source in member [l3gxxxx_int_src_t::data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1a3e0d06e2d7252a438111c25e124198be) that can be tested for true.

```cpp
[l3gxxxx_int_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t) int_src = [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91)(&dev);

if (int_src.[data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1a3e0d06e2d7252a438111c25e124198be).[data_ready](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__data__src__t_1ae5465b23a4b9ea52eeae907b3a7fd4dc)) {
    [l3gxxxx_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga175bd48505b21cdfeb09801d46dc0105)(&dev, &data)
    ...
}
```

If module `l3gxxxx_fifo` is used, the corresponding interrupt sources can be tested.

```cpp
[l3gxxxx_int_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t) int_src = [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91)(&dev);

...
if (int_src.[data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1a3e0d06e2d7252a438111c25e124198be).fifo_threshold) {
    [l3gxxxx_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga175bd48505b21cdfeb09801d46dc0105)(&dev, &data);
    ...
}
if (int_src.[data](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1a3e0d06e2d7252a438111c25e124198be).[fifo_overrun](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__data__src__t_1a2e16f9de693dcdb29efaef1c0c6a28e6)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("FIFO overrun");
}
```

[Back to Table of Contents](#l3gxxxx_toc)

Event interrupts (axes movement and wake-up) on signal INT1This interrupt signal allows to recognize independent rotations of the X, Y and Z axes. For this purpose, a separate threshold can be defined for each axis. If activated, the angular rate of each axis is compared with its threshold to check whether it is below or above the threshold. The results of all activated comparisons are combined OR or AND to generate the interrupt signal.

The configuration of the thresholds, the activated comparisons and selected AND/OR combination allows to recognize special situations like selective axis movement (SA) or axes movement wake-up (WU).

* **Selective axis movement recognition (SA)** means that only one axis is rotating. This is the case if the angular rate of selected axis is above its threshold AND angular rates of all other axes are below their thresholds.

* **Axis movement wake-up (WU)** means that the angular rate of any axis is above its threshold (OR).

Using event interrupts requires to enable module `l3gxxxx_irq_event`.

The MCU GPIO pin used for the `INT1` interrupt signal is defined by the hardware configuration parameter [L3GXXXX_INT1_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a23905c042af26a1613f8b9be3a32f469).

The default configuration for event interrupts is defined by [L3GXXXX_INT1_PARAMS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ac423d87812e471549eeaac575dc155d6). This configuration can be changed either by overriding default configuration parameters [CONFIG_L3GXXXX_INT1_X_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ae59d9fce5f994b714ab2c8eedb75855e), [CONFIG_L3GXXXX_INT1_Y_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1abeda3eb9fa5f8ed2b7357ff84f5aedf9), [CONFIG_L3GXXXX_INT1_Z_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aaef1428123a8aa6904835bfc85f757f9), [CONFIG_L3GXXXX_INT1_X_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a065d593658c8bcffb8ec1c07833c1994), [CONFIG_L3GXXXX_INT1_X_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1af50de0cefc1026c90289eb05b93959e7), [CONFIG_L3GXXXX_INT1_Y_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ad9f8dd362e9add8aa930a9f00d2210b8), [CONFIG_L3GXXXX_INT1_Y_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1af5765008acfd63553a755692d808e766), [CONFIG_L3GXXXX_INT1_Z_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a46824165e81838be46623e14f80aa1ad), [CONFIG_L3GXXXX_INT1_Z_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a17770672392f06b5261b870dc7ab4f50), [CONFIG_L3GXXXX_INT1_FILTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3e3f9afb9206df5e2d556fc0422bb3b2), [CONFIG_L3GXXXX_INT1_AND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a0411d4c17038e81b0682d5531ce9d163) and [CONFIG_L3GXXXX_INT1_LATCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3ce5f9c4101d8d91abddaf40ea65bec3) or at runtime using function [l3gxxxx_set_int_event_cfg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa58f07f558f106c8da65d7fcbe4a4434) with a set of parameters of type [l3gxxxx_int_event_cfg_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t) that contains the configuration. For example, selective axis movement recognition (SA) for the z-axis could be configured as following. With this configuration, the event interrupt is only triggered if all conditions are met.

```cpp
[l3gxxxx_int_event_cfg_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t) int_cfg;

// thresholds
int_cfg.[x_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a38e6cdd5085305552b2d1d9654a4a352) = 100;
int_cfg.[y_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1ad38cd1d517332d1459277a5a7617d31c) = 100;
int_cfg.[z_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1aaea8a864d4ffc7fe9885396e80be5f83) = 1000;

// X axis below threshold enabled
int_cfg.[x_low_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1af7fbb538dbfeae503fd0851e646ecfa7)  = true;
int_cfg.[x_high_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a3a13a852a77f10f7ce8d05a987d4874e) = false;

// Y axis below threshold enabled
int_cfg.[y_low_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a09afc2382e727200ea66b1b66f225c33)  = true;
int_cfg.[y_high_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a6d6130f51071055987d600868d60b970) = false;

// Z axis below threshold enabled
int_cfg.[z_low_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1ab8b68e42e7377f4c185b3966e822285f)  = false;
int_cfg.[z_high_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a26209b45cca2157b20f647ab65b2ed50) = true;

// AND combination of all conditions
int_cfg.[and_or](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a9fca28e528cd628c37d81a5f1e5898a4) = true;

// further parameters
int_cfg.[filter](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a457e3e6583b2e9187855e0d0530ccb7a) = [L3GXXXX_HPF_ONLY](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206ae38f352dad646c7b851ac115b770c1f5);
int_cfg.[latch](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a82a1430f1865f7591202f1872b46ee2c) = true;
int_cfg.[duration](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1ae2dd338ae81442496ba3019626bacdf6) = 0;
int_cfg.[wait](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1ab2720166735dea2653bde54f4cc7ef3f) = false;

// set the configuration and enable the interrupt
[l3gxxxx_set_int_event_cfg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa58f07f558f106c8da65d7fcbe4a4434)(&dev, &int_cfg);
[l3gxxxx_enable_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga6dea6a88720392288d7c8b6166fbca7c)(&dev, [L3GXXXX_INT_EVENT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa49c6dfdf7bff674d5ca0153083c0b9f5), true);
```

The data structure [l3gxxxx_int_event_cfg_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t) defines

* whether the interrupt signal should be latched until the interrupt source is read by function [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91),

* which filters are applied to the data used for interrupt generation,

* which time measured in 1/ODR an interrupt condition has to be given before the interrupt is generated, and

* whether this time is also used when interrupt condition is no longer given before interrupt signal is reset.

* If the interrupt is configured to be latched, the interrupt signal is active until the interrupt source is read by function [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91) AND next raw output data are available. Otherwise the interrupt signal is active as long as the interrupt condition is satisfied.

* The driver function [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91) uses the leading flank of the interrupt signal to detect an interrupt and read the interrupt source.

Function [l3gxxxx_enable_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga6dea6a88720392288d7c8b6166fbca7c) is used to enable or disable the event interrupt generation ([L3GXXXX_INT_EVENT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga297590c77314d9369e8e69ad3926160aa49c6dfdf7bff674d5ca0153083c0b9f5)).

As with data interrupts function [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91) can be used to wait for an interrupt on signal `INT1` if event interrupts are enabled. This function returns a structure with the interrupt sources of type [l3gxxxx_int_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t) which contains a flag for each possible event interrupt source in member [l3gxxxx_int_src_t::event](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44) that can be tested for true.

```cpp
[l3gxxxx_int_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t) int_src = [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91)(&dev);

if (int_src.[event](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44).[x_low](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t_1a85a6487d62bf6c627416c971734eafed)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("x below ");
}
if (int_src.[event](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44).[x_high](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t_1ac26ef9cd9587ac350a1abcfd3544a2a6)) {
    [printf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__cpu__avr8__common__stdio__wrapper_1gad2eb277496af160238e7306fff780ad2)("x above ");
}
...
```

Activating all threshold comparisons and using the OR combination is the most flexible way to realize functions like selective axis movement by combining the different interrupt sources as required by the application.

```cpp
[l3gxxxx_int_event_cfg_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t) int_cfg;

// thresholds
int_cfg.[x_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a38e6cdd5085305552b2d1d9654a4a352) = 100;
int_cfg.[y_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1ad38cd1d517332d1459277a5a7617d31c) = 100;
int_cfg.[z_threshold](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1aaea8a864d4ffc7fe9885396e80be5f83) = 100;

// X axis below and above threshold enabled
int_cfg.[x_low_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1af7fbb538dbfeae503fd0851e646ecfa7)  = true;
int_cfg.[x_high_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a3a13a852a77f10f7ce8d05a987d4874e) = true;

// Y axis below and above threshold enabled
int_cfg.[y_low_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a09afc2382e727200ea66b1b66f225c33)  = true;
int_cfg.[y_high_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a6d6130f51071055987d600868d60b970) = true;

// Z axis below and above threshold enabled
int_cfg.[z_low_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1ab8b68e42e7377f4c185b3966e822285f)  = true;
int_cfg.[z_high_enabled](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a26209b45cca2157b20f647ab65b2ed50) = true;

// OR combination of all conditions
int_cfg.[and_or](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t_1a9fca28e528cd628c37d81a5f1e5898a4) = false;
...
// set the configuration and enable the interrupt
l3gxxxx_set_int_event_cfg(&dev, &int_cfg);
[l3gxxxx_enable_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga6dea6a88720392288d7c8b6166fbca7c)(&dev, l3gxxxx_int_event, true);
```

Following example shows the selective axis movement recognition (SA) for the Z-axis.

```cpp
[l3gxxxx_int_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t) int_src = [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91)(&dev);

if (int_src.[event](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44).[y_low](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t_1a352f6f45f512343765a7c83766d97f77) && int_src.[event](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44).[y_low](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t_1a352f6f45f512343765a7c83766d97f77) && int_src.[event](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44).[z_high](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t_1aa60a8a870583b822c9c1c9fe027e1239)) {
    // selective axis movement of Z-axis
    ...
}
```

Interrupt context problemAll functions of the driver require direct access to the sensor via I2C or SPI which does not work in interrupt context.

Therefore, the driver prevents the direct use of the interrupts and application specific ISRs. The only way to use interrupts is to call the function [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91) which enables the interrupt signals for the configured MCU GPIO pins and then blocks the calling thread until an interrupt is triggered.

Once an interrupt is triggered, the driver handles the interrupt with an internal ISR and then returns from the [l3gxxxx_wait_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gab3da0731203789cda307d4ce76d49c91) function. The return value is a structure with the interrupt sources of type [l3gxxxx_int_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__src__t), which contains a flag for each possible interrupt source that can be tested for true.

[Back to Table of Contents](#l3gxxxx_toc)

Interrupt signal propertiesBy default, interrupt signals are high active push/pull outputs.

Power SavingL3Gxxxx sensors offer two modes for power saving:

* **Power-down** mode

* **Sleep** mode

While in power-down mode almost all internal blocks of the device including the gyros are switched off, in sleep mode only the measuring functions for all three axes are deactivated. Therefore, the time to continue measurements after sleep mode is drastically shorter than after power down.

Starting mode   |Target mode   |Turn-on time typical
--------- | --------- | ---------
Power-down   |Normal   |100 ms
Power-down   |Sleep   |100 ms
Sleep   |Normal   |1/ODR when LPF2 disabled <br/> 6/ODR when LPF2 enabled

L3Gxxxx sensors can be powered down when no measurements are required using the function [l3gxxxx_power_down](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gac111e19e427fd74b1691504e7eb5f72c). The power consumption is reduced to some uA in power-down mode. To restart the L3Gxxxx in previous measurement mode, the [l3gxxxx_power_up](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga50d177362d386e016ed2ae0bf5f3a274) function can be used.

If module `l3gxxxx_sleep` is enabled, the sleep mode can be activated with function [l3gxxxx_sleep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa41a01eda454e02134d16418870cc833). The power consumption is then reduced from 4.8 mA to 2.4 mA and thus to half. The [l3gxxxx_wake_up](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaf2125b642b34efdb6af376eefbce76d6) function continues the measurement in previous operation mode.

[Back to Table of Contents](#l3gxxxx_toc)

Low level functionsL3Gxxxx sensors are complex and flexible sensors with a lot of features. It can be used for a big number of different use cases. Since it is impossible to implement a high level interface which is generic enough to cover all the functionality of the sensor for all different use cases, there are two low level interface functions that allow direct read and write access to the registers of the sensor.

```cpp
bool [l3gxxxx_reg_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa0e17c88d3b400d81fad83e486975e1f)(l3gxxxx_sensor_t* dev, uint8_t reg, uint8_t *data, uint16_t len);
bool [l3gxxxx_reg_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga11ebf14ce3b885cf9cbdf62bdd9c5a6b)(l3gxxxx_sensor_t* dev, uint8_t reg, uint8_t *data, uint16_t len);
```

These functions should only be used to do something special that is not covered by the high level interface AND if you exactly know what you do and what it might affect. Please be aware that it might affect the high level interface.

[Back to Table of Contents](#l3gxxxx_toc)

Default configurationDefault sensor hardware configurations are set in file `[l3gxxxx_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h)` using the following defines:

Hardware configuration   |Driver name   |Default Value
--------- | --------- | ---------
I2C device   |[L3GXXXX_I2C_DEV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a784924ac6bb83ab3319ef580c453b300)|[I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb)
I2C address   |[L3GXXXX_I2C_ADDR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a7dac6ad9e4757b297b18ed5e543a3c06)|[L3GXXXX_I2C_ADDR_2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga4c06ca6d718084145f135598158ccf77)
SPI device   |[L3GXXXX_SPI_DEV](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a02b2fe167231703fb1deaddcd420d8d9)|[SPI_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1gafb9420809bc7722e41488a090b53eaf9)
SPI clock frequency   |[L3GXXXX_SPI_CLK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a287c7af07d5e97fc3563168c0cf9d05c)|SPI_CLK_1MHZ
SPI CS signal   |[L3GXXXX_SPI_CS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3de68465804e94469911621aaa79a2d9)|[GPIO_PIN(0, 0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)
`INT1` MCU pin   |[L3GXXXX_INT1_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a23905c042af26a1613f8b9be3a32f469)|[GPIO_PIN(0, 1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)
`INT2/DRDY` MCU pin   |[L3GXXXX_INT2_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a149636bcd01fddae4ef7b6cc63f96890)|[GPIO_PIN(0, 2)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gae29846b3ecd19a0b7c44ff80a37ae7c1)

These hardware configurations can be overridden either by the board definition or by defining them in the `CFLAGS` variable in the make command, for example:

```cpp
DRIVER=l3gd20h USEMODULE='l3gxxxx_irq_data` \
CLFAGS='-DL3GXXXX_INT2_PIN=GPIO_PIN\(0, 5\)' \
BOARD=... make -C tests/drivers/l3gxxxx
```

The default configuration of the sensor is defined in file `[l3gxxxx_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h)` using the following defines:

Configuration parameter   |Driver name   |Default Value
--------- | --------- | ---------
ODR and LPF2 cutoff frequency   |[CONFIG_L3GXXXX_ODR](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aa6b11546eaed8f1d435aa58daabe7137)|[L3GXXXX_ODR_100_25](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9ae03e20a2173f4ba08fd0c7f196e72de1)
Full scale   |[CONFIG_L3GXXXX_SCALE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aa5f07e9863bbce57ba643e699413aa64)|[L3GXXXX_SCALE_245_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6daa67cf8ad05876b13a3e7b23d159bf25b)
Filter selection used for output data   |[CONFIG_L3GXXXX_FILTER_SEL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a0da4b35a31d33aa1336f95b4af2a4908)|[L3GXXXX_HPF_AND_LPF2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206aecd3a2c3d062b3e42adbe2b9a9f36e5b)
HPF mode used for output data   |[CONFIG_L3GXXXX_HPF_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1abdfc69e4be4f0165f3bc5b0b931e74a0)|[L3GXXXX_HPF_NORMAL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga5eca69c108dac106b024b151e08ee1c1ae783b63e831898cd8e6b59535da32f04)
HPF cutoff frequency 8 Hz   |[CONFIG_L3GXXXX_HPF_CUTOFF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aac91ea42a51c9f5763004a581a8a2036)|0
FIFO mode if FIFO is used   |[CONFIG_L3GXXXX_FIFO_MODE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aee8efcc6e231547d81314d3ceb835f17)|[L3GXXXX_FIFO](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaa93693bceb88d24e1a89a15aeb55d07cade2c4f70a3a298c0988636fe3582a38c)
FIFO threshold value if FIFO is used   |[CONFIG_L3GXXXX_FIFO_WATERMARK](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ac7ef892949722ac7ffd31dd7c65edd88)|23
INT1 threshold for X axis (~30 dps)   |[CONFIG_L3GXXXX_INT1_X_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ae59d9fce5f994b714ab2c8eedb75855e)|4012
INT1 threshold for Y axis (~30 dps)   |[CONFIG_L3GXXXX_INT1_Y_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1abeda3eb9fa5f8ed2b7357ff84f5aedf9)|4012
INT1 threshold for Z axis (~30 dps)   |[CONFIG_L3GXXXX_INT1_Z_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aaef1428123a8aa6904835bfc85f757f9)|4012
INT1 interrupt enable for X > X threshold   |[CONFIG_L3GXXXX_INT1_X_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1af50de0cefc1026c90289eb05b93959e7)|true
INT1 interrupt enable for Y > Y threshold   |[CONFIG_L3GXXXX_INT1_Y_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1af5765008acfd63553a755692d808e766)|true
INT1 interrupt enable for Z > Z threshold   |[CONFIG_L3GXXXX_INT1_Z_GT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a17770672392f06b5261b870dc7ab4f50)|true
INT1 interrupt enable for X < X threshold   |[CONFIG_L3GXXXX_INT1_X_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a065d593658c8bcffb8ec1c07833c1994)|false
INT1 interrupt enable for Y < Y threshold   |[CONFIG_L3GXXXX_INT1_Y_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1ad9f8dd362e9add8aa930a9f00d2210b8)|false
INT1 interrupt enable for Z < Z threshold   |[CONFIG_L3GXXXX_INT1_Z_LT_THRESH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a46824165e81838be46623e14f80aa1ad)|false
INT1 filter selection   |[CONFIG_L3GXXXX_INT1_FILTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3e3f9afb9206df5e2d556fc0422bb3b2)|[L3GXXXX_HPF_AND_LPF2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206aecd3a2c3d062b3e42adbe2b9a9f36e5b)
INT1 interrupt combination   |[CONFIG_L3GXXXX_INT1_AND](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a0411d4c17038e81b0682d5531ce9d163)|false
INT1 interrupt latch enabled   |[CONFIG_L3GXXXX_INT1_LATCH](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3ce5f9c4101d8d91abddaf40ea65bec3)|true

Single or all parameters of the default configuration can be overridden either by defining them in the variable `CFLAGS` in the make command line or by placing a modified file `[l3gxxxx_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h)` in the application directory, for example: 
```cpp
DRIVER=l3gd20h USEMODULE='l3gxxxx_low_odr l3gxxxx_irq_data` \
CLFAGS='-DCONFIG_L3GXXXX_ODR=L3GXXXX_ODR_12 -DL3GXXXX_INT2_PIN=GPIO_PIN\(0,5\)' \
BOARD=... make -C tests/drivers/l3gxxxx
```

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`L3GXXXX_INT_DATA`](#group__drivers__l3gxxxx_1ga1dc8dd9c9f4cd216546d1d3c8db3e67d)            | Data interrupts (Data ready and FIFO status)
`enum `[`l3gxxxx_error_codes_t`](#group__drivers__l3gxxxx_1gae71e7c413bc8f9fbd2ff843f51af8a03)            | Definition of error codes.
`enum `[`l3gxxxx_odr_t`](#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9)            | Sensor output data rates (ODR) and LPF2 cutoff frequencies.
`enum `[`l3gxxxx_scale_t`](#group__drivers__l3gxxxx_1ga8e800b74cf431f9e1eb818be5ed93d6d)            | Full scale in degrees per second (dps)
`enum `[`l3gxxxx_fifo_mode_t`](#group__drivers__l3gxxxx_1gaa93693bceb88d24e1a89a15aeb55d07c)            | FIFO mode.
`enum `[`l3gxxxx_filter_sel_t`](#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206)            | High pass filter (HPF) and low pass filter 2 (LPF2) selection.
`enum `[`l3gxxxx_hpf_mode_t`](#group__drivers__l3gxxxx_1ga5eca69c108dac106b024b151e08ee1c1)            | HPF (high pass filter) modes.
`enum `[`l3gxxxx_int_types_t`](#group__drivers__l3gxxxx_1ga297590c77314d9369e8e69ad3926160a)            | Interrupt types.
`enum `[`l3gxxxx_int_pin_level_t`](#group__drivers__l3gxxxx_1ga3b7ec9ce6a1bf37d43caa52a1acb1e7f)            | `INT1`, `INT2/DRDY` sensor signal activity level
`enum `[`l3gxxxx_int_pin_type_t`](#group__drivers__l3gxxxx_1gabf9e704629d5e58e489fa93bc9980a2a)            | `INT1`, `INT2/DRDY` sensor signal type
`enum `[`l3gxxxx_if_t`](#group__drivers__l3gxxxx_1gabc0caccc850170c4dd3d2cac1004d55a)            | L3Gxxxx interface types.
`struct `[`l3gxxxx_int_event_cfg_t`](#structl3gxxxx__int__event__cfg__t) | Event interrupt generator configuration (axis movement and wake-up)
`struct `[`l3gxxxx_int_src_t`](#structl3gxxxx__int__src__t) | Composite type for all possible interrupt sources.
`struct `[`l3gxxxx_raw_data_t`](#structl3gxxxx__raw__data__t) | Raw output data set as two's complements.
`struct `[`l3gxxxx_data_t`](#structl3gxxxx__data__t) | Angular rates in millidegrees per seconds (mdps)
`struct `[`l3gxxxx_i2c_params_t`](#structl3gxxxx__i2c__params__t) | L3Gxxxx I2C interface parameters.
`struct `[`l3gxxxx_spi_params_t`](#structl3gxxxx__spi__params__t) | L3Gxxxx SPI interface parameters.
`struct `[`l3gxxxx_if_params_t`](#structl3gxxxx__if__params__t) | L3Gxxxx Hardware interface parameters union.
`struct `[`l3gxxxx_params_t`](#structl3gxxxx__params__t) | L3Gxxxx device initialization parameters.
`struct `[`l3gxxxx_t`](#structl3gxxxx__t) | L3Gxxxx sensor device data structure type.
`union `[`l3gxxxx_int_event_src_t`](#unionl3gxxxx__int__event__src__t) | Event interrupt sources (axis movement and wake-up)
`union `[`l3gxxxx_int_data_src_t`](#unionl3gxxxx__int__data__src__t) | Data interrupt sources (data ready and FIFO status)

## Members

#### `define `[`L3GXXXX_INT_DATA`](#group__drivers__l3gxxxx_1ga1dc8dd9c9f4cd216546d1d3c8db3e67d) 

Data interrupts (Data ready and FIFO status)

This define combines the data interrupt types of [l3gxxxx_int_types_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga297590c77314d9369e8e69ad3926160a) that use the `INT2/DRDY` signal to an ORed value.

#### `enum `[`l3gxxxx_error_codes_t`](#group__drivers__l3gxxxx_1gae71e7c413bc8f9fbd2ff843f51af8a03) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_OK            | success
L3GXXXX_ERROR_I2C            | I2C communication error.
L3GXXXX_ERROR_SPI            | SPI communication error.
L3GXXXX_ERROR_WRONG_CHIP_ID            | wrong chip id read from WHO_AM_I reg
L3GXXXX_ERROR_INV_DEV            | invalid device type used
L3GXXXX_ERROR_INV_MODE            | sensor mode is invalid or not available
L3GXXXX_ERROR_INV_FIFO_MODE            | FIFO mode is invalid or not available.
L3GXXXX_ERROR_INV_INT_TYPE            | invalid interrupt type used
L3GXXXX_ERROR_NO_NEW_DATA            | no new data are available
L3GXXXX_ERROR_RAW_DATA            | reading raw output data failed
L3GXXXX_ERROR_RAW_DATA_FIFO            | reading raw output data from FIFO failed
L3GXXXX_ERROR_NO_INT1_PIN            | `INT1` signal pin not configured
L3GXXXX_ERROR_NO_INT2_PIN            | `INT2/DRDY` signal pin not configured
L3GXXXX_ERROR_BYPASS_MODE            | sensor is in bypass mode
L3GXXXX_ERROR_FIFO_MODE            | sensor is in FIFO mode

Definition of error codes.

#### `enum `[`l3gxxxx_odr_t`](#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_ODR_100_12            | High ODR 100 Hz, LPF1 cutoff 32 Hz, LPF2 cutoff 12.5 Hz.
L3GXXXX_ODR_100_25            | High ODR 100 Hz, LPF1 cutoff 32 Hz, LPF2 cutoff 25 Hz.
L3GXXXX_ODR_200_12            | High ODR 200 Hz, LPF1 cutoff 63.3 Hz, LPF2 cutoff 12.5 Hz.
L3GXXXX_ODR_200_25            | High ODR 200 Hz, LPF1 cutoff 63.3 Hz, LPF2 cutoff 25 Hz.
L3GXXXX_ODR_200_50            | High ODR 200 Hz, LPF1 cutoff 63.3 Hz, LPF2 cutoff 50 Hz.
L3GXXXX_ODR_200_70            | High ODR 200 Hz, LPF1 cutoff 63.3 Hz, LPF2 cutoff 70 Hz.
L3GXXXX_ODR_400_20            | High ODR 400 Hz, LPF1 cutoff 128 Hz, LPF2 cutoff 20 Hz.
L3GXXXX_ODR_400_25            | High ODR 400 Hz, LPF1 cutoff 128 Hz, LPF2 cutoff 25 Hz.
L3GXXXX_ODR_400_50            | High ODR 400 Hz, LPF1 cutoff 128 Hz, LPF2 cutoff 50 Hz.
L3GXXXX_ODR_400_110            | High ODR 400 Hz, LPF1 cutoff 128 Hz, LPF2 cutoff 110 Hz.
L3GXXXX_ODR_800_30            | High ODR 400 Hz, LPF1 cutoff 211 Hz, LPF2 cutoff 30 Hz.
L3GXXXX_ODR_800_35            | High ODR 400 Hz, LPF1 cutoff 211 Hz, LPF2 cutoff 35 Hz.
L3GXXXX_ODR_800_50            | High ODR 400 Hz, LPF1 cutoff 211 Hz, LPF2 cutoff 50 Hz.
L3GXXXX_ODR_800_100            | High ODR 400 Hz, LPF1 cutoff 211 Hz, LPF2 cutoff 100 Hz.
L3GXXXX_ODR_12            | Low ODR 12.5 Hz, LPF1 cutoff 3.9 Hz, LPF2 not used.
L3GXXXX_ODR_25            | Low ODR 25 Hz, LPF1 cutoff 7.8 Hz, LPF2 not used.
L3GXXXX_ODR_50            | Low ODR 50 Hz, LPF1 cutoff 16 Hz, LPF2 cutoff 16.6 Hz.

Sensor output data rates (ODR) and LPF2 cutoff frequencies.

The following output data rates (ODR) and the LPF1/LPF2 cutoff frequencies are defined (Reference: Application Note AN4506):

Mode   |ODR [Hz]   |LPF1 cutoff [Hz]   |LPF2 cutoff [Hz]
--------- | --------- | --------- | ---------
High ODR   |||
L3GXXXX_ODR_100_12   |100   |32   |12.5
L3GXXXX_ODR_100_25   |100   |32   |25
L3GXXXX_ODR_200_12   |200   |63.3   |12.5
L3GXXXX_ODR_200_25   |200   |63.3   |25
L3GXXXX_ODR_200_50   |200   |63.3   |50
L3GXXXX_ODR_200_70   |200   |63.3   |70
L3GXXXX_ODR_400_20   |400   |128   |20
L3GXXXX_ODR_400_25   |400   |128   |25
L3GXXXX_ODR_400_50   |400   |128   |50
L3GXXXX_ODR_400_110   |400   |128   |110
L3GXXXX_ODR_800_30   |800   |211   |30
L3GXXXX_ODR_800_35   |800   |211   |35
L3GXXXX_ODR_800_50   |800   |211   |50
L3GXXXX_ODR_800_100   |800   |211   |100
|||
Low ODR (L3GD20H only)   |||
L3GXXXX_ODR_12   |12.5   |3.9   |-
L3GXXXX_ODR_25   |25   |7.8   |-
L3GXXXX_ODR_50   |50   |16   |16.6

Detailed information about the filter chain and possible filter combinations can be found in the section [Output data rates and filters](#l3gxxxx_odr_filters).

While LPF1 is always used, LPF2 and HPF have to be explicitly enabled by the configuration parameter [l3gxxxx_params_t::filter_sel](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__params__t_1aae7e7198f50cede7dc52974366e70c3e) or the [l3gxxxx_select_output_filter](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga5ad49b05ea0383384f9c0ed5185baa96) function if module `l3gxxxx_config` is used. [L3GXXXX_ODR_100_25](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ggaf5451bba86f903b374648fcd8e1ac7b9ae03e20a2173f4ba08fd0c7f196e72de1) is used by the default configuration.

Low data rates 12.5 Hz, 25 Hz and 50 Hz are only supported by L3GXXXX.

#### `enum `[`l3gxxxx_scale_t`](#group__drivers__l3gxxxx_1ga8e800b74cf431f9e1eb818be5ed93d6d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_SCALE_245_DPS            | 245 dps (default)
L3GXXXX_SCALE_500_DPS            | 500 dps
L3GXXXX_SCALE_2000_DPS            | 2000 dps

Full scale in degrees per second (dps)

The full scale value determines the sensitivity of the sensor and thus the range and resolution of the sensor's output data. The resolution of the output data is about Full Scale/INT16_MAX.

On the A34250D, only 245 dps ([L3GXXXX_SCALE_245_DPS](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga8e800b74cf431f9e1eb818be5ed93d6daa67cf8ad05876b13a3e7b23d159bf25b)) is available as full scale value.

#### `enum `[`l3gxxxx_fifo_mode_t`](#group__drivers__l3gxxxx_1gaa93693bceb88d24e1a89a15aeb55d07c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_BYPASS            | FIFO is not used (default)
L3GXXXX_FIFO            | Data samples are stored in the FIFO until it is full.
L3GXXXX_STREAM            | FIFO is used as ring buffer and newest data samples are stored continuously.
L3GXXXX_STREAM_TO_FIFO            | FIFO is used in Stream mode until an interrupt, switches then to FIFO mode (L3GD20H and L3GD20 only)
L3GXXXX_BYPASS_TO_STREAM            | FIFO is not used until an interrupt, switches then to Stream mode (L3GD20H and L3GD20 only)
L3GXXXX_DYNAMIC_STREAM            | like Stream mode, but differs in reading the first data sample after emptying (L3GD20H only)
L3GXXXX_BYPASS_TO_FIFO            | FIFO is not used until an interrupt, switches then to FIFO mode (L3GD20H only)

FIFO mode.

The integrated FIFO with up to 32 data samples can be used in different modes. The mode defines the behavior of FIFO when it becomes full.

#### `enum `[`l3gxxxx_filter_sel_t`](#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_NO_FILTER            | HPF not used, LPF2 not used (default)
L3GXXXX_HPF_ONLY            | HPF used, LPF2 not used.
L3GXXXX_LPF2_ONLY            | HPF not used, LPF2 used.
L3GXXXX_HPF_AND_LPF2            | HPF used, LPF2 used.

High pass filter (HPF) and low pass filter 2 (LPF2) selection.

L3Gxxxx sensors integrate a combination of two low pass filters (LPF) and one high pass filter (HPF).

First, raw sensor data are always filtered by LPF1 with a cutoff frequency that is fixed for the selected output data rate (ODR), see [l3gxxxx_odr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9). Resulting data can then optionally be filtered by HPF and/or LPF2. Both filters can be used or bypassed.

```cpp
                                 +--------------->   L3GXXXX_NO_FILTER
                                 |    +----- +
                    +------------+--->|      |--->   L3GXXXX_LPF2_ONLY
                    |                 | LPF2 |
+-----+   +------+  |   +-----+  +--->|      |--->   L3GXXXX_HPF_AND_LPF2
|     |   |      |  |   |     |  |    +------+
| ADC |-->| LPF1 |--+-->| HPF |--+--------------->   L3GXXXX_HPF_ONLY
|     |   |      |      |     |
+-----+   +------+      +-----+
```
[l3gxxxx_filter_sel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206) defines the possible filter combinations that can be used to select the filters for the output data and for the interrupt generation separately.

The default filter selection for the output data is [L3GXXXX_HPF_AND_LPF2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206aecd3a2c3d062b3e42adbe2b9a9f36e5b) and is defined by the default configuration parameter [CONFIG_L3GXXXX_FILTER_SEL](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a0da4b35a31d33aa1336f95b4af2a4908). If the module `l3gxxxx_config` is used, it can be changed at runtime using function [l3gxxxx_select_output_filter](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga5ad49b05ea0383384f9c0ed5185baa96).

The default filter selection for event interrupt generation is [L3GXXXX_HPF_AND_LPF2](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gga7900fb949e8203954135f0eeb2a58206aecd3a2c3d062b3e42adbe2b9a9f36e5b) and is defined by default configuration parameter [CONFIG_L3GXXXX_INT1_FILTER](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1a3e3f9afb9206df5e2d556fc0422bb3b2). It can be changed at runtime with function [l3gxxxx_set_int_event_cfg](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa58f07f558f106c8da65d7fcbe4a4434).

Since same filters are used for the output data as well as the data used for event interrupt generation (selective axes movement / wake-up), the configuration of the filters always affects both data. If the HPF is enabled for filtering the output data, it is also active for filtering the sensor data used for interrupt generation if the LPF2 is enabled for interrupt generation. The other way around, the HPF is also active for filtering the output data when it is enabled for interrupt generation and when the LPF2 is enabled for the output data.

The cutoff frequencies of LPF1 and LPF2 are determined by the used output data rate [l3gxxxx_odr_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9), see section [Output Data Rates and Filters](#l3gxxxx_odr_filters). The default cutoff frequency of HPF is 8 Hz and set by the default configuration parameter [CONFIG_L3GXXXX_HPF_CUTOFF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__params_8h_1aac91ea42a51c9f5763004a581a8a2036). If module `l3gxxxx_config` is used, it can be changed at runtime using function [l3gxxxx_config_hpf](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaba38aceb2198303af49d01d62825912d).

#### `enum `[`l3gxxxx_hpf_mode_t`](#group__drivers__l3gxxxx_1ga5eca69c108dac106b024b151e08ee1c1) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_HPF_NORMAL            | Normal mode, HPF is reset by reading the REFERENCE register.
L3GXXXX_HPF_REFERENCE            | Reference mode, output data are the difference to the REFERENCE register.
L3GXXXX_HPF_AUTORESET            | Autoreset mode, HPF is automatically reset when a configured event interrupt occurs.

HPF (high pass filter) modes.

The high pass filter can be used in different modes.

#### `enum `[`l3gxxxx_int_types_t`](#group__drivers__l3gxxxx_1ga297590c77314d9369e8e69ad3926160a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_INT_DATA_READY            | Data interrupt on signal `INT2/DRDY`: Output data are ready to be read.
L3GXXXX_INT_FIFO_WATERMARK            | Data interrupt on signal `INT2/DRDY`: FIFO filling exceeds the watermark level (threshold)
L3GXXXX_INT_FIFO_OVERRUN            | Data interrupt on signal `INT2/DRDY`: FIFO is completely filled.
L3GXXXX_INT_FIFO_EMPTY            | Data interrupt on signal `INT2/DRDY`: FIFO becomes empty.
L3GXXXX_INT_EVENT            | Event interrupt on signal `INT1`: Angular rate of one or more axes is lower or higher than the configured threshold.

Interrupt types.

L3Gxxxx sensors support different types of interrupts. These are on the one hand the various data interrupts on signal `INT2/DRDY` and on the other hand event interrupts on signal `INT1`.

The enumeration values correspond to the according bits in register CTRL3 ([L3GXXXX_REG_CTRL3](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#l3gxxxx__regs_8h_1a68b00cb8d0bbf4421ddd529e9b13128c)).

[L3GXXXX_INT_DATA](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga1dc8dd9c9f4cd216546d1d3c8db3e67d) combines the various data interrupts to an ORed value.

#### `enum `[`l3gxxxx_int_pin_level_t`](#group__drivers__l3gxxxx_1ga3b7ec9ce6a1bf37d43caa52a1acb1e7f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_HIGH            | INT signals are High active (default)
L3GXXXX_LOW            | INT signals are Low active.

`INT1`, `INT2/DRDY` sensor signal activity level

#### `enum `[`l3gxxxx_int_pin_type_t`](#group__drivers__l3gxxxx_1gabf9e704629d5e58e489fa93bc9980a2a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_PUSH_PULL            | INT pins are push/pull outputs (default)
L3GXXXX_OPEN_DRAIN            | INT pins are open-drain.

`INT1`, `INT2/DRDY` sensor signal type

#### `enum `[`l3gxxxx_if_t`](#group__drivers__l3gxxxx_1gabc0caccc850170c4dd3d2cac1004d55a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GXXXX_I2C            | I2C interface used.
L3GXXXX_SPI            | SPI interface used.

L3Gxxxx interface types.

# struct `l3gxxxx_int_event_cfg_t` 

Event interrupt generator configuration (axis movement and wake-up)

memset to 0 to disable all interrupt conditions (default)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint16_t `[`x_threshold`](#structl3gxxxx__int__event__cfg__t_1a38e6cdd5085305552b2d1d9654a4a352) | X threshold value in full scale / INT16_MAX.
`public uint16_t `[`y_threshold`](#structl3gxxxx__int__event__cfg__t_1ad38cd1d517332d1459277a5a7617d31c) | Y threshold value in full scale / INT16_MAX.
`public uint16_t `[`z_threshold`](#structl3gxxxx__int__event__cfg__t_1aaea8a864d4ffc7fe9885396e80be5f83) | Z threshold value in full scale / INT16_MAX.
`public bool `[`x_low_enabled`](#structl3gxxxx__int__event__cfg__t_1af7fbb538dbfeae503fd0851e646ecfa7) | Interrupt enabled for \|X\| < X threshold (X low event)
`public bool `[`x_high_enabled`](#structl3gxxxx__int__event__cfg__t_1a3a13a852a77f10f7ce8d05a987d4874e) | Interrupt enabled for \|X\| > X threshold (X high event)
`public bool `[`y_low_enabled`](#structl3gxxxx__int__event__cfg__t_1a09afc2382e727200ea66b1b66f225c33) | Interrupt enabled for \|Y\| < Y threshold (Y low event)
`public bool `[`y_high_enabled`](#structl3gxxxx__int__event__cfg__t_1a6d6130f51071055987d600868d60b970) | Interrupt enabled for \|Y\| > Y threshold (Y high event)
`public bool `[`z_low_enabled`](#structl3gxxxx__int__event__cfg__t_1ab8b68e42e7377f4c185b3966e822285f) | Interrupt enabled for \|Z\| < Z threshold (Z low event)
`public bool `[`z_high_enabled`](#structl3gxxxx__int__event__cfg__t_1a26209b45cca2157b20f647ab65b2ed50) | Interrupt enabled for \|Z\| > Z threshold (Y high event)
`public `[`l3gxxxx_filter_sel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206)` `[`filter`](#structl3gxxxx__int__event__cfg__t_1a457e3e6583b2e9187855e0d0530ccb7a) | HPF and LPF2 filter selection used for threshold comparison.
`public bool `[`and_or`](#structl3gxxxx__int__event__cfg__t_1a9fca28e528cd628c37d81a5f1e5898a4) | Combination of interrupt events (true=AND, false=OR):<br/> AND - all enabled axes passed their thresholds<br/> OR - at least one axis passed its threshold.
`public bool `[`latch`](#structl3gxxxx__int__event__cfg__t_1a82a1430f1865f7591202f1872b46ee2c) | Latch the interrupt when true until the interrupt source has been read by function l3gxxxx_wait_int.
`public uint8_t `[`duration`](#structl3gxxxx__int__event__cfg__t_1ae2dd338ae81442496ba3019626bacdf6) | Duration in 1/ODR an interrupt condition has to be given before the interrupt is generated.
`public bool `[`wait`](#structl3gxxxx__int__event__cfg__t_1ab2720166735dea2653bde54f4cc7ef3f) | When true, duration is also used when interrupt condition in no longer given before interrupt signal is reset.
`public bool `[`counter_mode`](#structl3gxxxx__int__event__cfg__t_1a10e5b4d21852222997a5648c82b3adb7) | DCRM is not documented and not used therefore.

## Members

#### `public uint16_t `[`x_threshold`](#structl3gxxxx__int__event__cfg__t_1a38e6cdd5085305552b2d1d9654a4a352) 

X threshold value in full scale / INT16_MAX.

#### `public uint16_t `[`y_threshold`](#structl3gxxxx__int__event__cfg__t_1ad38cd1d517332d1459277a5a7617d31c) 

Y threshold value in full scale / INT16_MAX.

#### `public uint16_t `[`z_threshold`](#structl3gxxxx__int__event__cfg__t_1aaea8a864d4ffc7fe9885396e80be5f83) 

Z threshold value in full scale / INT16_MAX.

#### `public bool `[`x_low_enabled`](#structl3gxxxx__int__event__cfg__t_1af7fbb538dbfeae503fd0851e646ecfa7) 

Interrupt enabled for |X| < X threshold (X low event)

#### `public bool `[`x_high_enabled`](#structl3gxxxx__int__event__cfg__t_1a3a13a852a77f10f7ce8d05a987d4874e) 

Interrupt enabled for |X| > X threshold (X high event)

#### `public bool `[`y_low_enabled`](#structl3gxxxx__int__event__cfg__t_1a09afc2382e727200ea66b1b66f225c33) 

Interrupt enabled for |Y| < Y threshold (Y low event)

#### `public bool `[`y_high_enabled`](#structl3gxxxx__int__event__cfg__t_1a6d6130f51071055987d600868d60b970) 

Interrupt enabled for |Y| > Y threshold (Y high event)

#### `public bool `[`z_low_enabled`](#structl3gxxxx__int__event__cfg__t_1ab8b68e42e7377f4c185b3966e822285f) 

Interrupt enabled for |Z| < Z threshold (Z low event)

#### `public bool `[`z_high_enabled`](#structl3gxxxx__int__event__cfg__t_1a26209b45cca2157b20f647ab65b2ed50) 

Interrupt enabled for |Z| > Z threshold (Y high event)

#### `public `[`l3gxxxx_filter_sel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206)` `[`filter`](#structl3gxxxx__int__event__cfg__t_1a457e3e6583b2e9187855e0d0530ccb7a) 

HPF and LPF2 filter selection used for threshold comparison.

#### `public bool `[`and_or`](#structl3gxxxx__int__event__cfg__t_1a9fca28e528cd628c37d81a5f1e5898a4) 

Combination of interrupt events (true=AND, false=OR):
 AND - all enabled axes passed their thresholds
 OR - at least one axis passed its threshold.

#### `public bool `[`latch`](#structl3gxxxx__int__event__cfg__t_1a82a1430f1865f7591202f1872b46ee2c) 

Latch the interrupt when true until the interrupt source has been read by function l3gxxxx_wait_int.

#### `public uint8_t `[`duration`](#structl3gxxxx__int__event__cfg__t_1ae2dd338ae81442496ba3019626bacdf6) 

Duration in 1/ODR an interrupt condition has to be given before the interrupt is generated.

#### `public bool `[`wait`](#structl3gxxxx__int__event__cfg__t_1ab2720166735dea2653bde54f4cc7ef3f) 

When true, duration is also used when interrupt condition in no longer given before interrupt signal is reset.

#### `public bool `[`counter_mode`](#structl3gxxxx__int__event__cfg__t_1a10e5b4d21852222997a5648c82b3adb7) 

DCRM is not documented and not used therefore.

# struct `l3gxxxx_int_src_t` 

Composite type for all possible interrupt sources.

This type combines the possible interrupt sources for event interrupts on signal `INT1` ([l3gxxxx_int_event_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t)) with those for data interrupts on signal `INT2/DRDY` ([l3gxxxx_int_data_src_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__data__src__t)).

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`l3gxxxx_int_event_src_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t)` `[`event`](#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44) | event interrupt sources
`public `[`l3gxxxx_int_data_src_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__data__src__t)` `[`data`](#structl3gxxxx__int__src__t_1a3e0d06e2d7252a438111c25e124198be) | data interrupt sources

## Members

#### `public `[`l3gxxxx_int_event_src_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__event__src__t)` `[`event`](#structl3gxxxx__int__src__t_1aafe7d67c121a4d9d0c32efdd4cbd5e44) 

event interrupt sources

#### `public `[`l3gxxxx_int_data_src_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#unionl3gxxxx__int__data__src__t)` `[`data`](#structl3gxxxx__int__src__t_1a3e0d06e2d7252a438111c25e124198be) 

data interrupt sources

# struct `l3gxxxx_raw_data_t` 

Raw output data set as two's complements.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int16_t `[`x`](#structl3gxxxx__raw__data__t_1a9f62f17295cd07f12f76b2edf529f719) | X angular rate (roll) as 16 bit two's complements.
`public int16_t `[`y`](#structl3gxxxx__raw__data__t_1ae9b8e625449a31b42003d0f1ccecf607) | Y angular rate (pitch) as 16 bit two's complements.
`public int16_t `[`z`](#structl3gxxxx__raw__data__t_1a7b455db7369792eb36cd295b27dc9848) | Z angular rate (yaw) as 16 bit two's complements.

## Members

#### `public int16_t `[`x`](#structl3gxxxx__raw__data__t_1a9f62f17295cd07f12f76b2edf529f719) 

X angular rate (roll) as 16 bit two's complements.

#### `public int16_t `[`y`](#structl3gxxxx__raw__data__t_1ae9b8e625449a31b42003d0f1ccecf607) 

Y angular rate (pitch) as 16 bit two's complements.

#### `public int16_t `[`z`](#structl3gxxxx__raw__data__t_1a7b455db7369792eb36cd295b27dc9848) 

Z angular rate (yaw) as 16 bit two's complements.

# struct `l3gxxxx_data_t` 

Angular rates in millidegrees per seconds (mdps)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int32_t `[`x`](#structl3gxxxx__data__t_1a9640c46babd3d47f01fd3fcb52d78487) | X angular rate (roll)
`public int32_t `[`y`](#structl3gxxxx__data__t_1a68b62fbb638f282d6e46d3a4de1445d9) | Y angular rate (pitch)
`public int32_t `[`z`](#structl3gxxxx__data__t_1a39564a9a4fe8d0d47cfdf6a99b09127e) | Z angular rate (yaw)

## Members

#### `public int32_t `[`x`](#structl3gxxxx__data__t_1a9640c46babd3d47f01fd3fcb52d78487) 

X angular rate (roll)

#### `public int32_t `[`y`](#structl3gxxxx__data__t_1a68b62fbb638f282d6e46d3a4de1445d9) 

Y angular rate (pitch)

#### `public int32_t `[`z`](#structl3gxxxx__data__t_1a39564a9a4fe8d0d47cfdf6a99b09127e) 

Z angular rate (yaw)

# struct `l3gxxxx_i2c_params_t` 

L3Gxxxx I2C interface parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structl3gxxxx__i2c__params__t_1a0457777259a0077c995c86db6edbc593) | I2C device used.
`public uint8_t `[`addr`](#structl3gxxxx__i2c__params__t_1ad899aa7393ea8f1cc6f15ec2fbc9f011) | I2C slave address.

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structl3gxxxx__i2c__params__t_1a0457777259a0077c995c86db6edbc593) 

I2C device used.

#### `public uint8_t `[`addr`](#structl3gxxxx__i2c__params__t_1ad899aa7393ea8f1cc6f15ec2fbc9f011) 

I2C slave address.

# struct `l3gxxxx_spi_params_t` 

L3Gxxxx SPI interface parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`dev`](#structl3gxxxx__spi__params__t_1a69b408f4a3d9d36a22875b1c34a84334) | SPI device used.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structl3gxxxx__spi__params__t_1a91b7acf4798363348963b04b77e15d0a) | SPI clock speed.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structl3gxxxx__spi__params__t_1acb69ff74b7f70f5d6c0f95b4508472c1) | SPI chip Select pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`dev`](#structl3gxxxx__spi__params__t_1a69b408f4a3d9d36a22875b1c34a84334) 

SPI device used.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`clk`](#structl3gxxxx__spi__params__t_1a91b7acf4798363348963b04b77e15d0a) 

SPI clock speed.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs`](#structl3gxxxx__spi__params__t_1acb69ff74b7f70f5d6c0f95b4508472c1) 

SPI chip Select pin.

# struct `l3gxxxx_if_params_t` 

L3Gxxxx Hardware interface parameters union.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`l3gxxxx_if_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gabc0caccc850170c4dd3d2cac1004d55a)` `[`type`](#structl3gxxxx__if__params__t_1aedf44906f071552d2323c4ebed3cea50) | I2C/SPI interface type selector.
`public `[`l3gxxxx_i2c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__i2c__params__t)` `[`i2c`](#structl3gxxxx__if__params__t_1ac84c538c2c702e8e9f1e00dbdeb48acb) | I2C interface parameters.
`public `[`l3gxxxx_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__spi__params__t)` `[`spi`](#structl3gxxxx__if__params__t_1a7195ea7a7deec3750244798f8c9bb54e) | SPI interface parameters.
`public union l3gxxxx_if_params_t::@201 `[`@202`](#structl3gxxxx__if__params__t_1a8ebbf3a509c57a351a2a5f06a6100e02) | 

## Members

#### `public `[`l3gxxxx_if_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gabc0caccc850170c4dd3d2cac1004d55a)` `[`type`](#structl3gxxxx__if__params__t_1aedf44906f071552d2323c4ebed3cea50) 

I2C/SPI interface type selector.

#### `public `[`l3gxxxx_i2c_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__i2c__params__t)` `[`i2c`](#structl3gxxxx__if__params__t_1ac84c538c2c702e8e9f1e00dbdeb48acb) 

I2C interface parameters.

#### `public `[`l3gxxxx_spi_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__spi__params__t)` `[`spi`](#structl3gxxxx__if__params__t_1a7195ea7a7deec3750244798f8c9bb54e) 

SPI interface parameters.

#### `public union l3gxxxx_if_params_t::@201 `[`@202`](#structl3gxxxx__if__params__t_1a8ebbf3a509c57a351a2a5f06a6100e02) 

# struct `l3gxxxx_params_t` 

L3Gxxxx device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`l3gxxxx_if_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__if__params__t)` `[`if_params`](#structl3gxxxx__params__t_1a98b449cb03111dc6961d5279fb176cf0) | Interface parameters (I2C/SPI)
`public `[`l3gxxxx_odr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9)` `[`odr`](#structl3gxxxx__params__t_1ad8fe9ab81467e2a06c60c4412b02fd9e) | ODR and LPF2 cutoff frequency.
`public `[`l3gxxxx_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga8e800b74cf431f9e1eb818be5ed93d6d)` `[`scale`](#structl3gxxxx__params__t_1a6cbbed5f548d977a4b3d2631f89880cf) | Full scale.
`public `[`l3gxxxx_filter_sel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206)` `[`filter_sel`](#structl3gxxxx__params__t_1aae7e7198f50cede7dc52974366e70c3e) | HPF/LPF2 filter selection.
`public `[`l3gxxxx_hpf_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga5eca69c108dac106b024b151e08ee1c1)` `[`hpf_mode`](#structl3gxxxx__params__t_1af7aec95898bbe1c255cc4758a6a43336) | HPF mode.
`public uint8_t `[`hpf_cutoff`](#structl3gxxxx__params__t_1a0a462d1df09765d71c8d375fbed0812c) | HPF cutoff frequency 0..9, see l3gxxxx_config_hpf for details.
`public `[`l3gxxxx_fifo_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa93693bceb88d24e1a89a15aeb55d07c)` `[`fifo_mode`](#structl3gxxxx__params__t_1a9ea56ee7c9be78a16a6fbedcb8835840) | FIFO operation mode.
`public uint8_t `[`fifo_watermark`](#structl3gxxxx__params__t_1a51e8ac57b0ec42e8a01cf5ca7e58c5e6) | FIFO watermark setting 0..31.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2_pin`](#structl3gxxxx__params__t_1a1acb239c1beae161d23f0633b90d8ae4) | MCU GPIO pin for data interrupts on signal `INT2/DRDY` pin.
`public `[`l3gxxxx_int_event_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t)` `[`int1_cfg`](#structl3gxxxx__params__t_1ad7eafcc8823a7e6b2b2648ed1ed5f42c) | event interrupt parameters
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1_pin`](#structl3gxxxx__params__t_1a088f7d9ec79aaa0d492cf7611ce66d1b) | MCU GPIO pin for event interrupts on signal `INT1`

## Members

#### `public `[`l3gxxxx_if_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__if__params__t)` `[`if_params`](#structl3gxxxx__params__t_1a98b449cb03111dc6961d5279fb176cf0) 

Interface parameters (I2C/SPI)

#### `public `[`l3gxxxx_odr_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaf5451bba86f903b374648fcd8e1ac7b9)` `[`odr`](#structl3gxxxx__params__t_1ad8fe9ab81467e2a06c60c4412b02fd9e) 

ODR and LPF2 cutoff frequency.

#### `public `[`l3gxxxx_scale_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga8e800b74cf431f9e1eb818be5ed93d6d)` `[`scale`](#structl3gxxxx__params__t_1a6cbbed5f548d977a4b3d2631f89880cf) 

Full scale.

#### `public `[`l3gxxxx_filter_sel_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga7900fb949e8203954135f0eeb2a58206)` `[`filter_sel`](#structl3gxxxx__params__t_1aae7e7198f50cede7dc52974366e70c3e) 

HPF/LPF2 filter selection.

#### `public `[`l3gxxxx_hpf_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga5eca69c108dac106b024b151e08ee1c1)` `[`hpf_mode`](#structl3gxxxx__params__t_1af7aec95898bbe1c255cc4758a6a43336) 

HPF mode.

#### `public uint8_t `[`hpf_cutoff`](#structl3gxxxx__params__t_1a0a462d1df09765d71c8d375fbed0812c) 

HPF cutoff frequency 0..9, see l3gxxxx_config_hpf for details.

#### `public `[`l3gxxxx_fifo_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1gaa93693bceb88d24e1a89a15aeb55d07c)` `[`fifo_mode`](#structl3gxxxx__params__t_1a9ea56ee7c9be78a16a6fbedcb8835840) 

FIFO operation mode.

#### `public uint8_t `[`fifo_watermark`](#structl3gxxxx__params__t_1a51e8ac57b0ec42e8a01cf5ca7e58c5e6) 

FIFO watermark setting 0..31.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int2_pin`](#structl3gxxxx__params__t_1a1acb239c1beae161d23f0633b90d8ae4) 

MCU GPIO pin for data interrupts on signal `INT2/DRDY` pin.

#### `public `[`l3gxxxx_int_event_cfg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__int__event__cfg__t)` `[`int1_cfg`](#structl3gxxxx__params__t_1ad7eafcc8823a7e6b2b2648ed1ed5f42c) 

event interrupt parameters

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int1_pin`](#structl3gxxxx__params__t_1a088f7d9ec79aaa0d492cf7611ce66d1b) 

MCU GPIO pin for event interrupts on signal `INT1`

# struct `l3gxxxx_t` 

L3Gxxxx sensor device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`l3gxxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__params__t)` `[`params`](#structl3gxxxx__t_1aa392a2c941e80b4850e6af3cdabd46b6) | Device initialization parameters.
`public `[`l3gxxxx_int_types_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga297590c77314d9369e8e69ad3926160a)` `[`int_type`](#structl3gxxxx__t_1a2bacd8b6ccc9914a4804aa9fb52ae825) | Type of the last interrupt triggered.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`int_lock`](#structl3gxxxx__t_1a02f8104a5feec672eb9615f1b024036b) | Used to lock the calling thread while waiting for an interrupt.
`public enum l3gxxxx_t::@203 `[`sensor`](#structl3gxxxx__t_1aa61619eb63fd6427e53caa3c1b123bfb) | recognized sensor type
`enum `[`@203`](#structl3gxxxx__t_1af2b37e098a06bd477cd31e485caf8ae7) | 

## Members

#### `public `[`l3gxxxx_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_l3gxxxx.md#structl3gxxxx__params__t)` `[`params`](#structl3gxxxx__t_1aa392a2c941e80b4850e6af3cdabd46b6) 

Device initialization parameters.

#### `public `[`l3gxxxx_int_types_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__l3gxxxx_1ga297590c77314d9369e8e69ad3926160a)` `[`int_type`](#structl3gxxxx__t_1a2bacd8b6ccc9914a4804aa9fb52ae825) 

Type of the last interrupt triggered.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`int_lock`](#structl3gxxxx__t_1a02f8104a5feec672eb9615f1b024036b) 

Used to lock the calling thread while waiting for an interrupt.

#### `public enum l3gxxxx_t::@203 `[`sensor`](#structl3gxxxx__t_1aa61619eb63fd6427e53caa3c1b123bfb) 

recognized sensor type

#### `enum `[`@203`](#structl3gxxxx__t_1af2b37e098a06bd477cd31e485caf8ae7) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
L3GD20H            | Sensor detected at runtime.
L3GD20            | L3GD20 detected.
X3G42XXD            | L3G400D, I3G4250D or A3G4250D detected.

