---
title: api-lwm2m_objects_device.md
description: api-lwm2m_objects_device.md
---
# group `lwm2m_objects_device` 

Device object implementation for LwM2M client using Wakaama.

Name   |ID   |Mandatory   |Type   |Range   |Units   |Implemented
--------- | --------- | --------- | --------- | --------- | --------- | ---------
Manufacturer   |0   |No   |String   |-   |-   |Yes
Model Number   |1   |No   |String   |-   |-   |Yes
Serial Number   |2   |No   |String   |-   |-   |Yes
Firmware Version   |3   |No   |String   |-   |-   |Yes
Reboot   |4   |Yes   |-   |-   |-   |Yes
Factory Reset   |5   |No   |-   |-   |-   |No
Available Power Sources   |6   |No   |Integer   |0-7   |-   |No
Power Source Voltage   |7   |No   |Integer   |-   |mV   |No
Power Source Current   |8   |No   |Integer   |-   |mA   |No
Battery Level   |9   |No   |Integer   |0-100   |%   |No
Memory Free   |10   |No   |Integer   |-   |KB   |No
Error Code   |11   |Yes   |Integer   |0-8   |-   |No
Reset Error Code   |12   |No   |-   |-   |-   |No
Current Time   |13   |No   |Time   |-   |-   |No
UTC Offset   |14   |No   |String   |-   |-   |No
Timezone   |15   |No   |String   |-   |-   |No
Supported Binding and Modes   |16   |Yes   |String   |-   |-   |Yes
Device Type   |17   |No   |String   |-   |-   |Yes
Hardware Version   |18   |No   |String   |-   |-   |Yes
Software Version   |19   |No   |String   |-   |-   |Yes
Battery Status   |20   |No   |Integer   |0-6   |-   |No
Memory Total   |21   |No   |Integer   |-   |-   |No
ExtDevInfo   |22   |No   |Objlnk   |-   |-   |No

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_LWM2M_DEVICE_BINDINGS`](#group__lwm2m__objects__device_1ga24b92e708e61008d097f85af659a645e)            | Device binding and queue mode.
`enum `[`lwm2m_device_resources`](#group__lwm2m__objects__device_1ga128286c57e81fc250ee34376b4e9269a)            | Resources of the LwM2M device object instance.
`enum `[`lwm2m_device_error_codes`](#group__lwm2m__objects__device_1ga9c811a2d18974d6c0e48339bfa01392d)            | Error codes for the [Error](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__device_1gga128286c57e81fc250ee34376b4e9269aa4132ea4daee7207099ec7c87d7d175bf) resource in the device object of LwM2M.
`public lwm2m_object_t * `[`lwm2m_object_device_init`](#group__lwm2m__objects__device_1ga7d4be3717c0402ffc5e1931fb287bf35)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Device object.
`public bool `[`lwm2m_device_reboot_requested`](#group__lwm2m__objects__device_1gadf0b393a7c64a061f7c1e9958122ec87)`(void)`            | Determines if a reboot request has been issued to the device by a server.

## Members

#### `define `[`CONFIG_LWM2M_DEVICE_BINDINGS`](#group__lwm2m__objects__device_1ga24b92e708e61008d097f85af659a645e) 

Device binding and queue mode.

Select using CONFIG_LWM2M_DEVICE_BINDING_*

#### `enum `[`lwm2m_device_resources`](#group__lwm2m__objects__device_1ga128286c57e81fc250ee34376b4e9269a) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LWM2M_RES_MANUFACTURER            | Human readable manufacturer name.
LWM2M_RES_MODEL_NO            | Model identifier (manufacturer specified string)
LWM2M_RES_SERIAL            | Serial number.
LWM2M_RES_FW_VER            | Current firmware version of the device.
LWM2M_RES_REBOOT            | Reboot the device.
LWM2M_RES_FRESET            | Perform a factory reset of the device.
LWM2M_RES_POWER_SRC            | Available power sources.
LWM2M_RES_POWER_VOL            | Present voltage for each power source.
LWM2M_RES_POWER_AMP            | Present current for each power source.
LWM2M_RES_BATTERY_LEVEL            | Current battery level as a percentage.
LWM2M_RES_MEM_FREE            | Estimated current available storage (kB)
LWM2M_RES_ERROR_CODE            | Last error code.
LWM2M_RES_ERROR_CODE_RESET            | Delete all error code instances.
LWM2M_RES_TIME            | Current UNIX time of the client.
LWM2M_RES_TIME_OFFSET            | Indicated the UTC offset for the device.
LWM2M_RES_TIME_ZONE            | Indicates the time zone of the device.
LWM2M_RES_BINDINGS            | Indicates supported bindings and modes on the client.
LWM2M_RES_TYPE            | Type of device.
LWM2M_RES_HW_VERSION            | Current hardware version of the device.
LWM2M_RES_SW_VERSION            | Current software version on the device.
LWM2M_RES_BATTERY_STATUS            | Battery status when internal battery is present.
LWM2M_RES_MEM_TOTAL            | Total amount of storage space in the device (kB.
LWM2M_RES_EXT_DEV_INFO            | External device object instance.
LWM2M_DEVICE_RESOURCES            | Number of resources.

Resources of the LwM2M device object instance.

**See also**: [http://www.openmobilealliance.org/tech/profiles/LWM2M_Device-v1_0_3.xml](http://www.openmobilealliance.org/tech/profiles/LWM2M_Device-v1_0_3.xml)

#### `enum `[`lwm2m_device_error_codes`](#group__lwm2m__objects__device_1ga9c811a2d18974d6c0e48339bfa01392d) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LWM2M_DEVICE_ERR_NO_ERR            | No error.
LWM2M_DEVICE_ERR_LOW_BATT            | Low battery power.
LWM2M_DEVICE_ERR_EXT_OFF            | External power supply off.
LWM2M_DEVICE_ERR_GPS_ERR            | GPS module failure.
LWM2M_DEVICE_ERR_LOW_SIGNAL            | Low received signal strength.
LWM2M_DEVICE_ERR_NO_MEM            | Out of memory.
LWM2M_DEVICE_ERR_SMS_ERR            | SMS failure.
LWM2M_DEVICE_ERR_IP_ERR            | IP connectivity failure.
LWM2M_DEVICE_ERR_PERIPH_ERR            | Peripheral malfunction.

Error codes for the [Error](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__device_1gga128286c57e81fc250ee34376b4e9269aa4132ea4daee7207099ec7c87d7d175bf) resource in the device object of LwM2M.

#### `public lwm2m_object_t * `[`lwm2m_object_device_init`](#group__lwm2m__objects__device_1ga7d4be3717c0402ffc5e1931fb287bf35)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Device object.

#### Parameters
* `client_data` LwM2M client data.

#### Returns
Pointer to the Device object on success

#### `public bool `[`lwm2m_device_reboot_requested`](#group__lwm2m__objects__device_1gadf0b393a7c64a061f7c1e9958122ec87)`(void)` 

Determines if a reboot request has been issued to the device by a server.

#### Returns
true reboot has been requested 

#### Returns
false reboot has not been requested

