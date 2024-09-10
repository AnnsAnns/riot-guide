---
title: api-lwm2m_objects_temperature.md
description: api-lwm2m_objects_temperature.md
---
# group `lwm2m_objects_temperature` 

Temperature Sensor object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This implements the LwM2M Temperature Sensor object (ID 3303) as specified in the LwM2M registry. This IPSO object should be used with a temperature sensor to report a temperature measurement. It also provides resources for minimum/maximum measured values and the minimum/maximum range that can be measured by the temperature sensor. An example measurement unit is degrees Celsius.

The sensor value can be updated by the application using the [lwm2m_object_temperature_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga8849aa9ea859cf94ff830c3bdcf55b92) function, or polled when required if a callback is registered upon object instantiation via [lwm2m_obj_temperature_args_t::read_cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7).

To use this object add `USEMODULE += wakaama_objects_temperature` to the application Makefile.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3303-1_0.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3303-1_0.xml)

This object is based on the [IPSO Sensor base object](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base), therefore it shares the same resources.

Usage* Initialize the LwM2M object with an initialized client pointer.

```cpp
lwm2m_object_t *obj = [lwm2m_object_temperature_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga2d37c3dac788a2411ccf08627b559ede)(&client_data);
```

* Create a new instance of the object with a given configuration ([lwm2m_obj_temperature_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga3cab55f9ff5b950d9ad234b1a8afa44a)). Here, you can decide the way of updating the sensor values: polling or pushing. In this case, we register a callback function that is called whenever the sensor value is read.

```cpp
// callback function to read the sensor value
int _read_cb(void *arg, int16_t *value)
{
    (void)arg;

    // generate new value
    *value = 100;

    return 0;
}

// initialize an instance of temperature sensor object
const [lwm2m_obj_temperature_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args) temperature_args = {
    .[min_range_value](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) = -20.0,
    .max_range_value = 80.0,
    .units = "C",
    .units_len = sizeof("C") - 1,
    .instance_id = 0,
    .read_cb = _read_cb,
    .read_cb_arg = NULL
};

int32_t res = [lwm2m_object_temperature_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga10e1026a8e8fc459d9ebbc798ff2e7a0)(&temperature_args);

if (res < 0) {
    puts("Could not create temperature object instance");
}
```

* You can now update the sensor values using the [lwm2m_object_temperature_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga8849aa9ea859cf94ff830c3bdcf55b92) function.

```cpp
uint16_t instance_id = (uint16_t)res;
[lwm2m_object_temperature_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga8849aa9ea859cf94ff830c3bdcf55b92)(&client_data, instance_id, new_value);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_TEMPERATURE_OBJECT_ID`](#group__lwm2m__objects__temperature_1gac0a6186111065c691c73a6b148a776f4)            | LwM2M Temperature Sensor object ID.
`public lwm2m_object_t * `[`lwm2m_object_temperature_init`](#group__lwm2m__objects__temperature_1ga2d37c3dac788a2411ccf08627b559ede)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Temperature Sensor object handle.
`public int32_t `[`lwm2m_object_temperature_instance_create`](#group__lwm2m__objects__temperature_1ga10e1026a8e8fc459d9ebbc798ff2e7a0)`(const `[`lwm2m_obj_temperature_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga3cab55f9ff5b950d9ad234b1a8afa44a)` * args)`            | Create a new Temperature Sensor instance.
`public void `[`lwm2m_object_temperature_update_value`](#group__lwm2m__objects__temperature_1ga8849aa9ea859cf94ff830c3bdcf55b92)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)`            | Update the value of the temperature sensor and trigger a notification to the observing servers, if any.

## Members

#### `define `[`LWM2M_TEMPERATURE_OBJECT_ID`](#group__lwm2m__objects__temperature_1gac0a6186111065c691c73a6b148a776f4) 

LwM2M Temperature Sensor object ID.

#### `public lwm2m_object_t * `[`lwm2m_object_temperature_init`](#group__lwm2m__objects__temperature_1ga2d37c3dac788a2411ccf08627b559ede)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Temperature Sensor object handle.

#### Parameters
* `client_data` Pointer to the LwM2M client data.

#### Returns
Pointer to the global handle of the Temperature Sensor object.

#### `public int32_t `[`lwm2m_object_temperature_instance_create`](#group__lwm2m__objects__temperature_1ga10e1026a8e8fc459d9ebbc798ff2e7a0)`(const `[`lwm2m_obj_temperature_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__temperature_1ga3cab55f9ff5b950d9ad234b1a8afa44a)` * args)` 

Create a new Temperature Sensor instance.

#### Parameters
* `args` Initialize structure with the parameter for the instance. Must not be NULL.

#### Returns
> 0 value representing the instance ID if the instance was created successfully. 

#### Returns
<0 otherwise

#### `public void `[`lwm2m_object_temperature_update_value`](#group__lwm2m__objects__temperature_1ga8849aa9ea859cf94ff830c3bdcf55b92)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)` 

Update the value of the temperature sensor and trigger a notification to the observing servers, if any.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `instance_id` ID of the instance to update. 

* `value` New value for the sensor.

