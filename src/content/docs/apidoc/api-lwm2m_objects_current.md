---
title: api-lwm2m_objects_current.md
description: api-lwm2m_objects_current.md
---
# group `lwm2m_objects_current` 

Current Sensor object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This implements the LwM2M Current Sensor object (ID 3301) as specified in the LwM2M registry.

The sensor value can be updated by the application using the [lwm2m_object_current_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1gaa2a5931de0de27c93c902447f1392a0a) function, or polled when required if a callback is registered upon object instantiation via [lwm2m_obj_current_args_t::read_cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7).

To use this object add `USEMODULE += wakaama_objects_current` to the application Makefile.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3317-1_0.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3317-1_0.xml)

This object is based on the [IPSO Sensor base object](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base), therefore it shares the same resources. Note that the optional resources "Current Calibration" (ID 5821) and "Application Type" (ID 5750) are not implemented.

Usage* Initialize the LwM2M object with an initialized client pointer.

```cpp
lwm2m_object_t *obj = [lwm2m_object_current_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1ga62a891480e47d4725e2b527f322f36f6)(&client_data);
```

* Create a new instance of the object with a given configuration ([lwm2m_obj_current_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1ga1c8ba00289c5d776e4910b9d21f9b801)). Here, you can decide the way of updating the sensor values: polling or pushing. In this case, we register a callback function that is called whenever the sensor value is read.

```cpp
// callback function to read the sensor value
int _read_cb(void *arg, int16_t *value)
{
    (void)arg;

    // generate new value
    *value = 100;

    return 0;
}

// initialize an instance of current sensor object
const [lwm2m_obj_current_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args) current_args = {
    .[min_range_value](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) = 0.0,
    .max_range_value = 2000.0,
    .units = "mA",
    .units_len = sizeof("mA") - 1,
    .instance_id = 0,
    .read_cb = _read_cb,
    .read_cb_arg = NULL
};

int32_t res = [lwm2m_object_current_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1gadd49e32cba763b2b08024063ff979a3b)(&current_args);

if (res < 0) {
    puts("Could not create current object instance");
}
```

* You can now update the sensor values using the [lwm2m_object_current_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1gaa2a5931de0de27c93c902447f1392a0a) function.

```cpp
uint16_t instance_id = (uint16_t)res;
[lwm2m_object_current_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1gaa2a5931de0de27c93c902447f1392a0a)(&client_data, instance_id, new_value);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_CURRENT_OBJECT_ID`](#group__lwm2m__objects__current_1gaf513bad03fc431fa53e9c8b33ab58d34)            | LwM2M Current Sensor object ID.
`public lwm2m_object_t * `[`lwm2m_object_current_init`](#group__lwm2m__objects__current_1ga62a891480e47d4725e2b527f322f36f6)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Current Sensor object handle.
`public int32_t `[`lwm2m_object_current_instance_create`](#group__lwm2m__objects__current_1gadd49e32cba763b2b08024063ff979a3b)`(const `[`lwm2m_obj_current_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1ga1c8ba00289c5d776e4910b9d21f9b801)` * args)`            | Create a new Current Sensor instance.
`public void `[`lwm2m_object_current_update_value`](#group__lwm2m__objects__current_1gaa2a5931de0de27c93c902447f1392a0a)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)`            | Update the value of the current sensor and trigger a notification to the observing servers, if any.

## Members

#### `define `[`LWM2M_CURRENT_OBJECT_ID`](#group__lwm2m__objects__current_1gaf513bad03fc431fa53e9c8b33ab58d34) 

LwM2M Current Sensor object ID.

#### `public lwm2m_object_t * `[`lwm2m_object_current_init`](#group__lwm2m__objects__current_1ga62a891480e47d4725e2b527f322f36f6)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Current Sensor object handle.

#### Parameters
* `client_data` Pointer to the LwM2M client data.

#### Returns
Pointer to the global handle of the Current Sensor object.

#### `public int32_t `[`lwm2m_object_current_instance_create`](#group__lwm2m__objects__current_1gadd49e32cba763b2b08024063ff979a3b)`(const `[`lwm2m_obj_current_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__current_1ga1c8ba00289c5d776e4910b9d21f9b801)` * args)` 

Create a new Current Sensor instance.

#### Parameters
* `args` Initialize structure with the parameter for the instance. Must not be NULL.

#### Returns
> 0 value representing the instance ID if the instance was created successfully. 

#### Returns
<0 otherwise

#### `public void `[`lwm2m_object_current_update_value`](#group__lwm2m__objects__current_1gaa2a5931de0de27c93c902447f1392a0a)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)` 

Update the value of the current sensor and trigger a notification to the observing servers, if any.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `instance_id` ID of the instance to update. 

* `value` New value for the sensor.

