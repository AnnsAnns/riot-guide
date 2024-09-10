---
title: api-pkg_tinyusb.md
description: api-pkg_tinyusb.md
---
# group `pkg_tinyusb` 

Provides the tinyUSB stack as package.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

**See also**: [https://github.com/hathach/tinyusb](https://github.com/hathach/tinyusb)

TinyUSBtinyUSB is an open-source cross-platform USB Host/Device stack for embedded systems.

This package is distinct from (and incompatible with) the USB stack provided around USBUS in RIOT (see [USB](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__usb)). They differ in the level of abstraction and in the set of supported devices.

UsageAdd the following entries to your application makefile:

* Enable tinyUSB package 
```cpp
USEPKG += tinyusb
```

* Select whether to use the tinyUSB device stack or the tinyUSB host stack or both: 
```cpp
USEMODULE += tinyusb_device
```

* Select the device/host classes to be used, for example: 
```cpp
USEMODULE += tinyusb_class_cdc tinyusb_class_msc
```

Either add `[tinyusb_setup()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tinyusb_8h_1a0c04305ad9d156824dd92035c55102ba)` to your main function to explicitly initialize the tinyUSB stack including the used peripherals and start the tinyUSB thread, or use the `auto_init` module (**default**).

```cpp
int main(void)
{
    ...
    // If auto-initialization is not used (module `auto_init`),
    // initialize the tinyUSB stack including used peripherals and
    // start the tinyUSB thread. Auto-initialization is used by default.
    [tinyusb_setup](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tinyusb_8h_1a0c04305ad9d156824dd92035c55102ba)();

    while (1) {
        ...
    }

    return 0;
}
```

If it is necessary to override the default configuration defined in `[tusb_config.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tusb__config_8h)`, create a file `tinyusb_app_config.h` in your application directory and override the configuration to be changed. 
```cpp
#define CONFIG_TUSBD_CDC_NUMOF   2
```

By default, the number of `CONFIG_TUSBD_*_NUMOF` device class and `CONFIG_TUSBH_*_NUMOF` host class interfaces are defined to 1 if the corresponding `tinyusb_class_*` and `tinyusb_device`/`tinyusb_host` module are enabled, and 0 otherwise. That is, there is one interface of each class.

For example, if the `tinyusb_device` and `tinyusb_class_cdc` modules are enabled, `CONFIG_TUSBD_CDC_NUMOF` is defined to 1 by default. The number of all other `CONFIG_TUSBD_*_NUMOF` device class interfaces are 0.

If you add the `tinyusb_app_config.h` file in your application directory to override the default configuration, add the application path to the include paths at the end of your application's Makefile. This is necessary so that the tinyUSB stack uses the file `tinyusb_app_config.h` from your application directory and thus the file `[tusb_config.h](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#tusb__config_8h)` from the tinyUSB package. 
```cpp
USEPKG += tinyusb
USEMODULE += tinyusb_class_cdc
USEMODULE += tinyusb_class_msc
USEMODULE += tinyusb_device

include $(RIOTBASE)/Makefile.include

INCLUDES += -I$(APPDIR)
```

Implement the callbacks of the enabled classes.

For most common device classes and their configuration, the tinyUSB package automatically generates the required descriptors and descriptor callbacks for any combination of

* up to two interfaces of the class CDC ACM,

* up to two interfaces of the Generic In/Out HID class,

* up to one DFU interface

* up to one MSC device interface and,

* up to one Net device interface with CDC ECM, CDC NCM and RNDIS protocol, and

* up to one interface of the Vendor device class.

Any other combination, either a different number of these device class interfaces or the use of a different device class interface, requires the implementation of custom descriptors and the callbacks.

All symbols of the generated descriptors and their callback functions are defined as weak symbols so that the application can override parts of the descriptors or the callback functions that handle them. For example, the array `tusb_desc_hid_0_report`, which defines the HID report descriptor for HID device 0, making the device a generic in/out HID device

```cpp
__attribute__((weak))
uint8_t const tusb_desc_hid_0_report[] =
{
    TUD_HID_REPORT_DESC_GENERIC_INOUT(CONFIG_TUSBD_HID_EP_SIZE),
};
```

could be overridden by the application with

```cpp
uint8_t const tusb_desc_hid_0_report[] =
{
    TUD_HID_REPORT_DESC_KEYBOARD(HID_REPORT_ID(REPORT_ID_KEYBOARD)),
    TUD_HID_REPORT_DESC_MOUSE(HID_REPORT_ID(REPORT_ID_MOUSE)),
};
```

to make the device to be a composite keyboard/mouse device.

Please refer `$RIOTBASE/tests/pkg/tinyusb_cdc_msc` and the [tinyUSB documentation](https://docs.tinyusb.org/en/latest/reference/getting_started.html) for details.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

