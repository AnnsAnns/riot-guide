---
title: api-drivers_pcf857x.md
description: api-drivers_pcf857x.md
---
# group `drivers_pcf857x` 

Device driver for Texas Instruments PCF857X I2C I/O expanders.

driver for Texas Instruments PCF857X I2C I/O expandersOverviewTexas Instruments PCF857X I2C I/O expanders provide general purpose I/O extension via I2C bus. The driver supports the following PCF857X I2C I/O expander variants:

Expander   |Type   |Pseudomodule to be used
--------- | --------- | ---------
PCF8574   |8-bit I2C I/O expander   |`pcf8574`
PCF8574A   |8-bit I2C I/O expander   |`pcf8574a`
PCF8575   |16-bit I2C I/O expander   |`pcf8575`

For each of these PCF857X I2C I/O expanders variants, the driver defines a separate pseudomodule. Multiple PCF857X I2C I/O expanders and different variants can be used at the same time. Either the board definition or the application must specify used PCF857X I/O expander variants by a list of used pseudomodules. For example, to use a PCF8574A and a PCF8575 I/O expander in one application, the make command would be:  USEMODULE="pcf8574a pcf8575" make -C tests/drivers/pcf857x BOARD=...
 At least one PCF857X I2C I/O expander variant has to be specified. The driver module `pcf857x` is then enabled implicitly.

While PCF8575 is working in I2C fast mode with up to 400 kHz clock frequency, PCF8574 and PCF8574A are only specified for I2C normal mode with up to 100 kHz clock frequency. However, they seem also to work at 400 kHz clock frequency.

The driver interface is kept as compatible as possible with the peripheral GPIO interface. The only differences are that

* functions have the prefix `pcf857x_` and

* functions require an additional parameter, the pointer to the expander device of type [pcf857x_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t).

Defined pseudomodulesThe functionality of the driver is controlled by the use of pseudomodules. The following pseudomodules are defined: 
Pseudomoule   |Functionality
--------- | ---------
`pcf8574`|support of PCF8574 enabled
`pcf8574a`|support of PCF8574A enabled
`pcf8575`|support of PCF8575 enabled
`pcf857x_irq`|support of interrupts enabled with medium event priority
`pcf857x_irq_low`|support of interrupts enabled with low event priority
`pcf857x_irq_medium`|support of interrupts enabled with medium event priority
`pcf857x_irq_low`|support of interrupts enabled with high event priority

At least one of the modules `pcf8574`, `pcf8574a` and `pcf8575` has to be used.

Expander GPIOsThe PCF857X expander devices provide a GPIO expansion over the I2C interface with either

* 1 port with 8 quasi-parallel input/output (I/O) pins (PCF8574, PCF8574A) or

* 2 ports with 8 quasi-parallel input/output (I/O) pins each (PCF8575).

Each quasi-bidirectional expander I/O pin can be used as an input or output without the use of a data-direction control signal. Output pins are latched and have high-current drive capability for directly driving LEDs. The quasi-bidirectional expander I/O pins without direction control work as follows:

* INPUT: Writing 1 to an expander pin configures the pin as an input, which is pulled up to HIGH by a very weak 100 μA pull-up. When reading the pin, its value then depends on the actual voltage. This corresponds to the behavior of the [GPIO_IN_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a676755cb9c90de719e9fee3936a3a79c) mode.

* OUTPUT: Writing 0 to an expander pin configures the pin as an output and actively drives the pin to LOW. This corresponds to the behavior of the [GPIO_OD_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a6989d6b30554f7596c282eac49adc05d) mode.

Since the expander I/O pins are quasi-bidirectional without direction control, the only actively driven level is the output LOW. Therefore the driver physically supports only the modes [GPIO_IN_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a676755cb9c90de719e9fee3936a3a79c) and [GPIO_OD_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a6989d6b30554f7596c282eac49adc05d). The other logically identical modes [GPIO_IN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a3343e227f62c4c536efff81438a8e155), [GPIO_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a1b59f059dea546f0248fb26232ee3531) and [GPIO_OD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a4e49b8f9feef3b91e8d2842009151e2b) are emulated. Please keep this in mind when connecting these pins to other open-drain output pins that do not generate active signals. The [GPIO_IN_PD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a8b6588cc82579f6044ec1867b964e11c) mode is not supported.

After the initialization with the [pcf857x_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2898d3ea96ff3310c6e6e41bf9a76dbe) function, all expander I/O pins are in input mode and pulled-up to HIGH.

The expander I/O pins can be addressed as GPIO pins using the following scheme:

PCF857X pin label   |Port   |Pin   |RIOT symbol   |Remark
--------- | --------- | --------- | --------- | ---------
P00   |0   |0   |`[PCF857X_GPIO_PIN(0, 0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877)`|PCF8574, PCF8574A and PCF8575
P01   |0   |1   |`[PCF857X_GPIO_PIN(0, 1)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877)`|PCF8574, PCF8574A and PCF8575
...   |...   |...   |...   |...
P07   |0   |7   |`[PCF857X_GPIO_PIN(0, 7)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877)`|PCF8574, PCF8574A and PCF8575
P10   |0   |8   |`[PCF857X_GPIO_PIN(0, 8)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877)`|PCF8575 only
P11   |0   |9   |`[PCF857X_GPIO_PIN(0, 9)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877)`|PCF8575 only
...   |...   |...   |...   |...
P17   |0   |15   |`[PCF857X_GPIO_PIN(0, 15)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877)`|PCF8575 only

InterruptsPCF857X expanders have an open-drain, low-active interrupt (INT) signal, which generates an interrupt by any rising or falling edge of the expander pins in the input mode. Using this expander interrupt signal, the following features become available:

* An interrupt service function can be attached to an expander input pin with the [pcf857x_gpio_init_int](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1gaac5f8fddf9826f0273b501000bc0af5e) function. This interrupt service function is then called on any rising and/or falling edge of the expander input pin.

* In addition, the driver uses the interrupt on changes of an expander input pin to internally maintain the current state of all expander input pins. Using this internal current state of the expander input pins avoids reading all expander input pins via I2C every time the input value of a single expander GPIO pin is read with [pcf857x_gpio_read](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1gadc4912bb7ef183e6614d0d1f9a6f761d).

Since interrupts are handled in the context of a separate event thread (see section [The Interrupt Context Problem](#pcf857x_interrupt_context_problem)) enabling interrupts requires more RAM. Therefore interrupts have to be explicitly enabled with the module `pcf857x_irq_<priority>`. `priority` can be one of `low`, `medium` or `highest`, which correspond to the priority of the event thread that processes the interrupts. If only the module `pcf857x_irq` is used without specifying the priority, the interrupt handling is enabled with a medium priority of the event thread. For more information on the priorities check the [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event) module.

Furthermore, the MCU GPIO pin to which the PCF857X `INT` signal is connected has to be defined by the default configuration parameter [PCF857X_PARAM_INT_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#pcf857x__params_8h_1a665016c4daba101f837973346ef3ca3e) ([pcf857x_params_t::int_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t_1a43ada2a73a84f200d761575abd92ae34)) either in the configuration parameter file or at the command line, for example:  CFLAGS="-DPCF857X_PARAM_INT_PIN=\(GPIO_PIN\(0,6\)\)" \
 USEMODULE="pcf8575 pcf857x_irq_medium" make -C tests/drivers/pcf857x BOARD=...
If an output of the expander is connected to an input of the same expander, there is no interrupt triggered by the input when the output changes. Therefore, a write operation to an output with [pcf857x_gpio_write](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga51c2774ca360ed0d8f3e278bdf51520f), [pcf857x_gpio_clear](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga8e8c4c82cff49e2e2a668d252e32199f), [pcf857x_gpio_set](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1gad77ce42e4ed11f5a5b34653a990b9b27) or [pcf857x_gpio_toggle](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1gae4c2c39aad7696907b0f7d16a242abe0) leads to an additional read-after-write operation, if interrupts are used.
 The use of interrupts therefore increases the read performance considerably, since I2C read operations are required only when the inputs change. But the write performance is reduced to the half.

The Interrupt Context ProblemHandling an interrupt of a PCF857x expander requires the driver to access the device directly via I2C. However, the mutex-based synchronization of I2C accesses does not work in the interrupt context. Therefore the ISR must not access the PCF857x expander device directly. Rather, the ISR must only indicate the occurrence of the interrupt which has to be handled asynchronously in thread context.

For this purpose an event thread module is used when interrupts are enabled by the module `pcf857x_irq_<priority>`. The driver then handles the interrupts in the context of the event thread with given `priority`. For more information on the priorities check the [Event Queue](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event) module.

SAUL CapabilitiesThe driver provides SAUL capabilities that are compatible to the SAUL capabilities of peripheral GPIOs. Each PCF857X expander I/O pin can be mapped directly to SAUL by defining an according entry in `PCF857X_SAUL_GPIO_PARAMS`. Please refer file `$RIOTBASE/drivers/pcf857x/include/pcf857x_params.h` for an example.

Module `saul_gpio` has to be added to the project to enable SAUL capabilities of the PCF857X driver, e.g.:  USEMODULE="pcf8575 saul_gpio" make -C tests/drivers/saul BOARD=...

Using Multiple DevicesIt is possible to use multiple devices and different variants of PCF857X I/O expanders at the same time. Either the board definition or the application must specify used PCF857X I/O expander variants by a list of used pseudomodules. For example, to use a PCF8574A and a PCF8575 I/O expander in one application, the make command would be:  USEMODULE="pcf8574a pcf8575" make -C tests/drivers/pcf857x BOARD=...
 Furthermore, used devices have to be configured by defining the configuration parameter set `pcf857x_params` of type [pcf857x_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t). The default configuration for one device is defined in `drivers/pcf857x/pcf857x_params.h`. Either the board definition or the application can override it by placing a file `[pcf857x_params.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#pcf857x__params_8h)` in the board definition directory or the application directory `$APPDIR`. For example, the definition of the configuration parameter array for the two devices above could be:  static const pcf857x_params_t pcf857x_params[] = {
     {
         .dev = I2C_DEV(0),
         .addr = 0,
         .exp = PCF857X_EXP_PCF8574A,
         .int_pin = GPIO_PIN(0, 1),
     },
     {
         .dev = I2C_DEV(0),
         .addr = 0,
         .exp = PCF857X_EXP_PCF8575,
         .int_pin = GPIO_PIN(0, 2),
     },
 };

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PCF857X_GPIO_PIN`](#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877)            | conversion of (port x : pin y) to a pin number
`enum `[`pcf857x_error_codes_t`](#group__drivers__pcf857x_1ga934ead4b846c83461bb75b6794b29b06)            | Definition of PCF857X driver error codes.
`enum `[`pcf857x_exp_t`](#group__drivers__pcf857x_1ga3830af41ad87a8d92cd68d0a403eee63)            | Definition of PCF857X expander variants.
`public int `[`pcf857x_init`](#group__drivers__pcf857x_1ga2898d3ea96ff3310c6e6e41bf9a76dbe)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,const `[`pcf857x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t)` * params)`            | Initialize the PCF857X I/O expander.
`public int `[`pcf857x_gpio_init`](#group__drivers__pcf857x_1ga65f9d5963e745bac4b272a65e8ebc6d7)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode)`            | Initialize a PCF857X pin.
`public int `[`pcf857x_gpio_init_int`](#group__drivers__pcf857x_1gaac5f8fddf9826f0273b501000bc0af5e)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode,`[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` flank,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` isr,void * arg)`            | Initialize a PCF857X pin for external interrupt usage.
`public int `[`pcf857x_gpio_read`](#group__drivers__pcf857x_1gadc4912bb7ef183e6614d0d1f9a6f761d)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)`            | Get the value from PCF857X input pin.
`public void `[`pcf857x_gpio_write`](#group__drivers__pcf857x_1ga51c2774ca360ed0d8f3e278bdf51520f)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin,int value)`            | Write the value to PCF857X input pin.
`public void `[`pcf857x_gpio_clear`](#group__drivers__pcf857x_1ga8e8c4c82cff49e2e2a668d252e32199f)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)`            | Clear the PCF857X output pin.
`public void `[`pcf857x_gpio_set`](#group__drivers__pcf857x_1gad77ce42e4ed11f5a5b34653a990b9b27)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)`            | Set the PCF857X output pin.
`public void `[`pcf857x_gpio_toggle`](#group__drivers__pcf857x_1gae4c2c39aad7696907b0f7d16a242abe0)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)`            | Toggle the value of the PCF857X output pin.
`public void `[`pcf857x_gpio_irq_enable`](#group__drivers__pcf857x_1ga8612435574aa19b16b4522bf8f2e6470)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)`            | Enable pin interrupt.
`public void `[`pcf857x_gpio_irq_disable`](#group__drivers__pcf857x_1ga49e1d37904efa5c1d4c3c1e91b040167)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)`            | Disable pin interrupt.
`struct `[`pcf857x_params_t`](#structpcf857x__params__t) | PCF857X device initialization parameters.
`struct `[`pcf857x_irq_event_t`](#structpcf857x__irq__event__t) | IRQ event type.
`struct `[`pcf857x_t`](#structpcf857x__t) | PCF857X device data structure type.
`struct `[`pcf857x_saul_gpio_params_t`](#structpcf857x__saul__gpio__params__t) | PCF857X configuration structure for mapping expander pins to SAUL.

## Members

#### `define `[`PCF857X_GPIO_PIN`](#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) 

conversion of (port x : pin y) to a pin number

#### `enum `[`pcf857x_error_codes_t`](#group__drivers__pcf857x_1ga934ead4b846c83461bb75b6794b29b06) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCF857X_OK            | success
PCF857X_ERROR_I2C            | I2C communication error.
PCF857X_ERROR_INV_EXP            | invalid expander variant
PCF857X_ERROR_INV_MODE            | invalid pin mode
PCF857X_ERROR_INV_FLANK            | invalid interrupt flank
PCF857X_ERROR_INT_PIN            | interrupt pin initialization failed

Definition of PCF857X driver error codes.

> Deprecated: These are aliases for errno error codes now, use them directly

#### `enum `[`pcf857x_exp_t`](#group__drivers__pcf857x_1ga3830af41ad87a8d92cd68d0a403eee63) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
PCF857X_EXP_PCF8574            | PCF8574 8 bit I/O expander used.
PCF857X_EXP_PCF8574A            | PCF8574A 8 bit I/O expander.
PCF857X_EXP_PCF8575            | PCF8575 16 bit I/O expander.
PCF857X_EXP_MAX            | 

Definition of PCF857X expander variants.

It is used in configuration parameters to specify the PCF857X expander used by device.

Expander variants known by the driver depend on enabled pseudomodules `pcf8574`, `pcf8574a` and `pcf8575`.

#### `public int `[`pcf857x_init`](#group__drivers__pcf857x_1ga2898d3ea96ff3310c6e6e41bf9a76dbe)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,const `[`pcf857x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t)` * params)` 

Initialize the PCF857X I/O expander.

All expander pins are set to be input and are pulled up.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `params` configuration parameters, see [pcf857x_params_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t)

If the interrupt handling is enabled by one of the modules `pcf857x_irq*`, the MCU GPIO pin for the interrupt signal has to be defined by the default configuration parameter [PCF857X_PARAM_INT_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#pcf857x__params_8h_1a665016c4daba101f837973346ef3ca3e) ([pcf857x_params_t::int_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t_1a43ada2a73a84f200d761575abd92ae34)).

#### Parameters
* `0` on success 

* `<0` a negative errno error code on error

#### `public int `[`pcf857x_gpio_init`](#group__drivers__pcf857x_1ga65f9d5963e745bac4b272a65e8ebc6d7)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode)` 

Initialize a PCF857X pin.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to initialize, use [PCF857X_GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) to specify 

* `mode` mode of the pin, see [gpio_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)

* Since the expander I/O pins are quasi-bidirectional without direction control, the only actively driven level is the output LOW. Therefore the driver physically supports only the modes [GPIO_IN_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a676755cb9c90de719e9fee3936a3a79c) and [GPIO_OD_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a6989d6b30554f7596c282eac49adc05d). The other logically identical modes [GPIO_IN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a3343e227f62c4c536efff81438a8e155), [GPIO_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a1b59f059dea546f0248fb26232ee3531) and [GPIO_OD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a4e49b8f9feef3b91e8d2842009151e2b) are emulated. For the [GPIO_IN_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a676755cb9c90de719e9fee3936a3a79c) mode the function returns with `-EINVAL`.

* After initialization in [GPIO_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a1b59f059dea546f0248fb26232ee3531) mode the pin is actively driven LOW, after initialization in all other modes the pin is pulled-up to HIGH.

#### Parameters
* `0` on success 

* `<0` a negative errno error code on error

#### `public int `[`pcf857x_gpio_init_int`](#group__drivers__pcf857x_1gaac5f8fddf9826f0273b501000bc0af5e)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin,`[`gpio_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#native_2include_2periph__cpu_8h_1a491a2cbfb4e94f2afcc0d5bdef2dc454)` mode,`[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` flank,`[`gpio_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga06ceaaf4824f1504972babf0775dba92)` isr,void * arg)` 

Initialize a PCF857X pin for external interrupt usage.

The registered callback function will be called in interrupt context every time the defined flank(s) are detected. Therefore, it MUST NOT be blocking or time-consuming.

The interrupt is activated automatically after the initialization.

The MCU GPIO pin for the interrupt signal has to be defined by the default configuration parameter [PCF857X_PARAM_INT_PIN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#pcf857x__params_8h_1a665016c4daba101f837973346ef3ca3e) ([pcf857x_params_t::int_pin](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t_1a43ada2a73a84f200d761575abd92ae34)).

* This function is only available if interrupt handling is enabled by one of the modules `pcf857x_irq*`

* Since the expander I/O pins are quasi-bidirectional without direction control, the only actively driven level is the output LOW. Therefore the driver physically supports only the modes [GPIO_IN_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a676755cb9c90de719e9fee3936a3a79c) and [GPIO_OD_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a6989d6b30554f7596c282eac49adc05d). The other logically identical modes [GPIO_IN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a3343e227f62c4c536efff81438a8e155), [GPIO_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a1b59f059dea546f0248fb26232ee3531) and [GPIO_OD](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a4e49b8f9feef3b91e8d2842009151e2b) are emulated. For the [GPIO_IN_PU](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a676755cb9c90de719e9fee3936a3a79c) mode the function returns with `-EINVAL`.

* After initialization in [GPIO_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gga491a2cbfb4e94f2afcc0d5bdef2dc454a1b59f059dea546f0248fb26232ee3531) mode the pin is actively driven LOW, after initialization in all other modes the pin is pulled-up to HIGH.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to initialize, use [PCF857X_GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) to specify 

* `mode` mode of the pin, see [gpio_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)

* `flank` define the active flanks, see [gpio_flank_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga0e8c3f46deb150e48acaa79fe26b2e86)

* `isr` ISR that is called back from interrupt context 

* `arg` optional argument passed to the callback

#### Parameters
* `0` on success 

* `<0` a negative errno error code on error

#### `public int `[`pcf857x_gpio_read`](#group__drivers__pcf857x_1gadc4912bb7ef183e6614d0d1f9a6f761d)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)` 

Get the value from PCF857X input pin.

If the PCF857X interrupt is used, the read operation does not perform an I2C read operation since the last input pin value is already read.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to read, use [PCF857X_GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) to specify

#### `public void `[`pcf857x_gpio_write`](#group__drivers__pcf857x_1ga51c2774ca360ed0d8f3e278bdf51520f)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin,int value)` 

Write the value to PCF857X input pin.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to write, use [PCF857X_GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) to specify 

* `value` value to write

#### `public void `[`pcf857x_gpio_clear`](#group__drivers__pcf857x_1ga8e8c4c82cff49e2e2a668d252e32199f)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)` 

Clear the PCF857X output pin.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to clear, use [PCF857X_GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) to specify

#### `public void `[`pcf857x_gpio_set`](#group__drivers__pcf857x_1gad77ce42e4ed11f5a5b34653a990b9b27)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)` 

Set the PCF857X output pin.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to set, use [PCF857X_GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) to specify

#### `public void `[`pcf857x_gpio_toggle`](#group__drivers__pcf857x_1gae4c2c39aad7696907b0f7d16a242abe0)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)` 

Toggle the value of the PCF857X output pin.

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to toggle, use [PCF857X_GPIO_PIN(x,y)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga2c6a2ae4d4985f50ce977088d655c877) to specify

#### `public void `[`pcf857x_gpio_irq_enable`](#group__drivers__pcf857x_1ga8612435574aa19b16b4522bf8f2e6470)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)` 

Enable pin interrupt.

This function is only available if interrupt handling is enabled by one of the modules `pcf857x_irq*`

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to enable the interrupt for

#### `public void `[`pcf857x_gpio_irq_disable`](#group__drivers__pcf857x_1ga49e1d37904efa5c1d4c3c1e91b040167)`(`[`pcf857x_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__t)` * dev,uint8_t pin)` 

Disable pin interrupt.

This function is only available if interrupt handling is enabled by one of the modules `pcf857x_irq*`

#### Parameters
* `dev` descriptor of PCF857X I/O expander device 

* `pin` pin to enable the interrupt for

# struct `pcf857x_params_t` 

PCF857X device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structpcf857x__params__t_1a4662d809f2eed34c1a9619c8ef5584f8) | I2C device (default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb))
`public uint16_t `[`addr`](#structpcf857x__params__t_1a55e641a8ee1f79251445d9ceafee3b16) | I2C slave address offset to the PCF7857X base address (default 0)
`public `[`pcf857x_exp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga3830af41ad87a8d92cd68d0a403eee63)` `[`exp`](#structpcf857x__params__t_1a0666869cc3baedbb06db56720859fbec) | PCF857X expander variant used by the device (default depends on used pseudomodules.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structpcf857x__params__t_1a43ada2a73a84f200d761575abd92ae34) | MCU GPIO pin or [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not used (default).

## Members

#### `public `[`i2c_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga53bedf646ffe6ddd17f13b893a17fa74)` `[`dev`](#structpcf857x__params__t_1a4662d809f2eed34c1a9619c8ef5584f8) 

I2C device (default [I2C_DEV(0)](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__i2c_1ga9f14916eda80b19ff41d08e25eee56fb))

#### `public uint16_t `[`addr`](#structpcf857x__params__t_1a55e641a8ee1f79251445d9ceafee3b16) 

I2C slave address offset to the PCF7857X base address (default 0)

#### `public `[`pcf857x_exp_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga3830af41ad87a8d92cd68d0a403eee63)` `[`exp`](#structpcf857x__params__t_1a0666869cc3baedbb06db56720859fbec) 

PCF857X expander variant used by the device (default depends on used pseudomodules.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`int_pin`](#structpcf857x__params__t_1a43ada2a73a84f200d761575abd92ae34) 

MCU GPIO pin or [GPIO_UNDEF](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1ga3969ce1e494a72d3c2925b10ddeb4604) if not used (default).

Using interrupt pin has the advantage that inputs have to be read from expander only if any input value changes. To use interrupts for expander inputs, this pin has to be defined.

# struct `pcf857x_irq_event_t` 

IRQ event type.

Handling an interrupt of a PCF857x expander requires the driver to access the device directly via I2C. However, the mutex-based synchronization of I2C accesses does not work in the interrupt context. Therefore the ISR must not access the PCF857x expander device directly. Rather, the ISR must only indicate the occurrence of the interrupt which has to be handled asynchronously in the thread context.

The type defines the data structure that is part of each device data structure to indicate that an interrupt of the device occurred. Since there is only one interrupt source, only one interrupt can be pending per device. Thus, only one object of this type per device is required.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event`](#structpcf857x__irq__event__t_1a019322ab3991a7c2ae7c5a104a632213) | inherited event data structure
`public void * `[`dev`](#structpcf857x__irq__event__t_1a4285bfe4e6bccba895952d777052d845) | PCF857X device reference.

## Members

#### `public `[`event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__event_1gad0c066ffb009d3286186a124d37a0c2d)` `[`event`](#structpcf857x__irq__event__t_1a019322ab3991a7c2ae7c5a104a632213) 

inherited event data structure

#### `public void * `[`dev`](#structpcf857x__irq__event__t_1a4285bfe4e6bccba895952d777052d845) 

PCF857X device reference.

# struct `pcf857x_t` 

PCF857X device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`pcf857x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t)` `[`params`](#structpcf857x__t_1a0d9d9d84eb190118f4a1ba48b3825445) | device initialization parameters
`public uint8_t `[`pin_num`](#structpcf857x__t_1a3bf2bb747d17922d6f5e58d0f4f35544) | number of I/O pins, depends on used expander variant
`public `[`pcf857x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga4fb98ac27d4530a770ba33243b5ca50a)` `[`modes`](#structpcf857x__t_1a199956642ea7ed731d8176d60d6f3390) | expander pin modes
`public `[`pcf857x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga4fb98ac27d4530a770ba33243b5ca50a)` `[`in`](#structpcf857x__t_1a5b829fc6094447936734302eccf73d0a) | expander input pin values
`public `[`pcf857x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga4fb98ac27d4530a770ba33243b5ca50a)` `[`out`](#structpcf857x__t_1a83ef7ef4a23c588df2329b11e6a2eec8) | expander output pin values
`public `[`gpio_isr_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_gpio.md#structgpio__isr__ctx__t)` `[`isr`](#structpcf857x__t_1a313444ca210d15127b98d8f290b55b98) | ISR with arg for each expander pin.
`public `[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` `[`flank`](#structpcf857x__t_1a4b3b9a57079a13a1f38578f065b40f94) | interrupt flank for each expander pin
`public bool `[`enabled`](#structpcf857x__t_1aaaf6a71845e20f5dbde1b4505aafefe5) | enabled flag for each expander pin
`public `[`pcf857x_irq_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__irq__event__t)` `[`irq_event`](#structpcf857x__t_1a1ecee7bc33e2c2836252e43ad0601e45) | IRQ event object used for the device.

## Members

#### `public `[`pcf857x_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__params__t)` `[`params`](#structpcf857x__t_1a0d9d9d84eb190118f4a1ba48b3825445) 

device initialization parameters

#### `public uint8_t `[`pin_num`](#structpcf857x__t_1a3bf2bb747d17922d6f5e58d0f4f35544) 

number of I/O pins, depends on used expander variant

#### `public `[`pcf857x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga4fb98ac27d4530a770ba33243b5ca50a)` `[`modes`](#structpcf857x__t_1a199956642ea7ed731d8176d60d6f3390) 

expander pin modes

#### `public `[`pcf857x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga4fb98ac27d4530a770ba33243b5ca50a)` `[`in`](#structpcf857x__t_1a5b829fc6094447936734302eccf73d0a) 

expander input pin values

#### `public `[`pcf857x_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__pcf857x_1ga4fb98ac27d4530a770ba33243b5ca50a)` `[`out`](#structpcf857x__t_1a83ef7ef4a23c588df2329b11e6a2eec8) 

expander output pin values

#### `public `[`gpio_isr_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_periph_gpio.md#structgpio__isr__ctx__t)` `[`isr`](#structpcf857x__t_1a313444ca210d15127b98d8f290b55b98) 

ISR with arg for each expander pin.

#### `public `[`gpio_flank_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1a0e8c3f46deb150e48acaa79fe26b2e86)` `[`flank`](#structpcf857x__t_1a4b3b9a57079a13a1f38578f065b40f94) 

interrupt flank for each expander pin

#### `public bool `[`enabled`](#structpcf857x__t_1aaaf6a71845e20f5dbde1b4505aafefe5) 

enabled flag for each expander pin

#### `public `[`pcf857x_irq_event_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_pcf857x.md#structpcf857x__irq__event__t)` `[`irq_event`](#structpcf857x__t_1a1ecee7bc33e2c2836252e43ad0601e45) 

IRQ event object used for the device.

# struct `pcf857x_saul_gpio_params_t` 

PCF857X configuration structure for mapping expander pins to SAUL.

This data structure is an extension of the GPIO configuration structure for mapping GPIOs to SAUL. The only additional information required is a reference to the according PCF857X device.

To use PCF857X with SAUL, module `saul_gpio` has to be added to the project.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public unsigned int `[`dev`](#structpcf857x__saul__gpio__params__t_1a9143b8185b8cbe602bfe06c350f3578b) | PCF857X device index.
`public `[`saul_gpio_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsaul__gpio__params__t)` `[`gpio`](#structpcf857x__saul__gpio__params__t_1ae18b3f297ae93b2958538b609d1e8fb0) | GPIO configuration for mapping to SAUL.

## Members

#### `public unsigned int `[`dev`](#structpcf857x__saul__gpio__params__t_1a9143b8185b8cbe602bfe06c350f3578b) 

PCF857X device index.

#### `public `[`saul_gpio_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structsaul__gpio__params__t)` `[`gpio`](#structpcf857x__saul__gpio__params__t_1ae18b3f297ae93b2958538b609d1e8fb0) 

GPIO configuration for mapping to SAUL.

