---
title: api-cpu_qn908x_adc.md
description: api-cpu_qn908x_adc.md
---
# group `cpu_qn908x_adc` 

NXP QN908x ADC driver.

This ADC is a differential sigma-delta ADC. There are 9 external signals named ADC0 to ADC7 and ADC_VREFI that can be connected to specific external GPIO pins. There are several combinations of measurements possible with the ADC module using these external signals as well as some internal signals, but not every combination is a possible input pair to the ADC.

The ADC block runs at either 4 MHz or 32 KHz from the high speed or low speed clock sources respective. An additional divisor is available to select some intermediate clock values. However, this is not the sample rate, since a single sample from [adc_sample()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga0ffa20b26f649b1879b487f9aa0aa4b4) requires multiple internal samples which are then filtered and decimated by the hardware, giving about 128 slower sample rate than the selected clock.

Each board-defined ADC line is configured with a single integer value which is the logic or of the following values:

* The differential pair of signals among the options in [qn908x_adc_channel_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1ae4f11c2a2596f24bf17ef128da122b83),

* For those channels that use the "Vinn" signal, a value selecting the Vinn signal in [qn908x_adc_vinn_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1ac72f8dbacd89a0bd6c33654409d938f6),

* The reference voltage "Vref" that the ADC will use for its full range selected with [qn908x_adc_vref_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a3ef56804a626b9072d0578747d941cae),

* The ADC input gain as selected by [qn908x_adc_gain_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1aace28180461989db4b23d823b84db093), which will multiply the differential input by a factor between 0.5 and 2, and

* An optional gain flag [ADC_VREF_GAIN_X15](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1a0eec9ae0c58babedd37c1ea59e8472cc).

* An optional PGA enabled flag [ADC_PGA_ENABLE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1ac478beb12ce9fd2efcefb70c28c08e38).

The hardware resolution of the ADC data is always 23-bits signed, but smaller resolutions can be requested which will result in a smaller output value.

An internal temperature sensor is available and connected to the ADC when selecting [ADC_CHANNEL_TEMP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#qn908x_2include_2periph__cpu_8h_1ae4f11c2a2596f24bf17ef128da122b83a1ed27e96d73bc3032ec54d2738163cf4) as the channel. In this case the returned value is still a number that represents the temperature dependent voltage level of the internal signal which then needs to be converted to a temperature by the application using calibration parameters. When using the internal temperature sensor, the 1.2V bandgap Vref is recommended with a Vinn of 1/2 Vref since the measured voltage is about 800 mV at room temperature.

A special microvolts (ADC_RES_UV) resolution value for [adc_res_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1gae4d48fdca21097fd8b34324f33ae4020) is supported when using the internal 1.2 V bandgap as the reference voltage, in which case [adc_sample](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__adc_1ga0ffa20b26f649b1879b487f9aa0aa4b4) will return the measured value in microvolts as a signed integer, with a max range of +/- 1.8 V when using the x1.5 Vref multiplier. This special resolution mode takes into account the factory calibration of the internal reference voltage for more accurate readings. In any other case, the return value is a signed integer with as many bits as resolution requested not including the sign bit. Note that the return value may be a negative when measuring a negative differential voltage between the plus and minus side of the input.

For example, if 8-bit resolution is requested for an ADC line where the channel connects the - side to Vinn configured as Vss, a maximum value of 255 can be returned when the + side level is as high as the Vref signal. However, a negative value of -255 is also possible if Vinn is configured as Vref and the + side level is as low as Vss.

ADC configuration example (for periph_conf.h)
```cpp
static const adc_conf_t adc_config[] = {
    /* Pin A11 to Vss, 1.8v Vref. */
    ADC_CHANNEL_ADC7_VINN | ADC_VREF_GAIN_X15,
    /* Pin A10 to A11, 1.2V Vref. */
    ADC_CHANNEL_ADC6_ADC7,
    /* Temperature (in V) over to 0.6 V, 1.2 V Vref. */
    ADC_CHANNEL_TEMP | ADC_VINN_VREF_2,
    /* Internal "battery monitor", Vcc/4 to Vss, 1.2V Vref. */
    ADC_CHANNEL_VCC4_VINN | ADC_VINN_AVSS,
};
#define ADC_NUMOF           ARRAY_SIZE(adc_config)

#define QN908X_ADC_CLOCK    ADC_CLOCK_500K
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

