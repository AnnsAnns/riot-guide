---
title: api-lwm2m_objects_voltage.md
description: api-lwm2m_objects_voltage.md
---
# group `lwm2m_objects_voltage` 

Voltmeter object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This implements the LwM2M Voltage Sensor object (ID 3316) as specified in the LwM2M registry. This IPSO object should be used with voltmeter sensor to report measured voltage between two points. It also provides resources for minimum and maximum measured values, as well as the minimum and maximum range that can be measured by the sensor. An example measurement unit is volts.

The sensor value can be updated by the application using the [lwm2m_object_voltage_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1ga20500025fc2b34227733259d31ce0b45) function, or polled when required if a callback is registered upon object instantiation via [lwm2m_obj_voltage_args_t::read_cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7).

To use this object add `USEMODULE += wakaama_objects_voltage` to the application Makefile.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3316-1_0.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3316-1_0.xml)

This object is based on the [IPSO Sensor base object](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base), therefore it shares the same resources. Note that the optional resources "Current Calibration" (ID 5821) and "Application Type" (ID 5750) are not implemented.

Usage* Initialize the LwM2M object with an initialized client pointer.

```cpp
lwm2m_object_t *obj = [lwm2m_object_voltage_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1ga06f591b461031442c484e979d2b70c2f)(&client_data);
```

* Create a new instance of the object with a given configuration ([lwm2m_obj_voltage_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1gab8ca409bd20a3f369ae6299acd4601cd)). Here, you can decide the way of updating the sensor values: polling or pushing. In this case, we register a callback function that is called whenever the sensor value is read.

```cpp
// callback function to read the sensor value
int _read_cb(void *arg, int16_t *value)
{
    (void)arg;

    // generate new value
    *value = 100;

    return 0;
}

// initialize an instance of voltage sensor object
const [lwm2m_obj_voltage_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args) voltage_args = {
    .[min_range_value](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) = -50.0,
    .max_range_value = 200.0,
    .units = "V",
    .units_len = sizeof("V") - 1,
    .instance_id = 0,
    .read_cb = _read_cb,
    .read_cb_arg = NULL
};

int32_t res = [lwm2m_object_voltage_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1gadd660678ee62f81940af55182520173c)(&voltage_args);

if (res < 0) {
    puts("Could not create voltage object instance");
}
```

* You can now update the sensor values using the [lwm2m_object_voltage_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1ga20500025fc2b34227733259d31ce0b45) function.

```cpp
uint16_t instance_id = (uint16_t)res;
[lwm2m_object_voltage_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1ga20500025fc2b34227733259d31ce0b45)(&client_data, instance_id, new_value);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_VOLTAGE_OBJECT_ID`](#group__lwm2m__objects__voltage_1ga413ca76cc1d577d4dd15d989fea6a27b)            | LwM2M Voltage Sensor object ID.
`public lwm2m_object_t * `[`lwm2m_object_voltage_init`](#group__lwm2m__objects__voltage_1ga06f591b461031442c484e979d2b70c2f)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Voltage Sensor object handle.
`public int32_t `[`lwm2m_object_voltage_instance_create`](#group__lwm2m__objects__voltage_1gadd660678ee62f81940af55182520173c)`(const `[`lwm2m_obj_voltage_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1gab8ca409bd20a3f369ae6299acd4601cd)` * args)`            | Create a new Voltage Sensor instance.
`public void `[`lwm2m_object_voltage_update_value`](#group__lwm2m__objects__voltage_1ga20500025fc2b34227733259d31ce0b45)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)`            | Update the value of the voltage sensor and trigger a notification to the observing servers, if any.

## Members

#### `define `[`LWM2M_VOLTAGE_OBJECT_ID`](#group__lwm2m__objects__voltage_1ga413ca76cc1d577d4dd15d989fea6a27b) 

LwM2M Voltage Sensor object ID.

#### `public lwm2m_object_t * `[`lwm2m_object_voltage_init`](#group__lwm2m__objects__voltage_1ga06f591b461031442c484e979d2b70c2f)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Voltage Sensor object handle.

#### Parameters
* `client_data` Pointer to the LwM2M client data.

#### Returns
Pointer to the global handle of the Voltage Sensor object.

#### `public int32_t `[`lwm2m_object_voltage_instance_create`](#group__lwm2m__objects__voltage_1gadd660678ee62f81940af55182520173c)`(const `[`lwm2m_obj_voltage_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__voltage_1gab8ca409bd20a3f369ae6299acd4601cd)` * args)` 

Create a new Voltage Sensor instance.

#### Parameters
* `args` Initialize structure with the parameter for the instance. May not be NULL.

#### Returns
> 0 value representing the instance ID if the instance was created successfully. 

#### Returns
<0 otherwise

#### `public void `[`lwm2m_object_voltage_update_value`](#group__lwm2m__objects__voltage_1ga20500025fc2b34227733259d31ce0b45)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)` 

Update the value of the voltage sensor and trigger a notification to the observing servers, if any.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `instance_id` ID of the instance to update. 

* `value` New value for the sensor.

