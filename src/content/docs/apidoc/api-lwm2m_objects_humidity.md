---
title: api-lwm2m_objects_humidity.md
description: api-lwm2m_objects_humidity.md
---
# group `lwm2m_objects_humidity` 

Humidity Sensor object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This implements the LwM2M Humidity Sensor object (ID 3304) as specified in the LwM2M registry. This IPSO object should be used with a humidity sensor to report a humidity measurement. It also provides resources for minimum/maximum measured values and the minimum/maximum range that can be measured by the humidity sensor. An example measurement unit is relative humidity as a percentage.

The sensor value can be updated by the application using the [lwm2m_object_humidity_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1gad8d1fbdab74de8a4d3c79f68432ab8fb) function, or polled when required if a callback is registered upon object instantiation via [lwm2m_obj_humidity_args_t::read_cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7).

To use this object add `USEMODULE += wakaama_objects_humidity` to the application Makefile.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3304-1_0.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3304-1_0.xml)

This object is based on the [IPSO Sensor base object](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base), therefore it shares the same resources.

Usage* Initialize the LwM2M object with an initialized client pointer.

```cpp
lwm2m_object_t *obj = [lwm2m_object_humidity_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1gab7c4cb47ca8eb917bbc7c99cb833bf40)(&client_data);
```

* Create a new instance of the object with a given configuration ([lwm2m_obj_humidity_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1ga147f17a44e21db2d24ed5b5c42e922a7)). Here, you can decide the way of updating the sensor values: polling or pushing. In this case, we register a callback function that is called whenever the sensor value is read.

```cpp
// callback function to read the sensor value
int _read_cb(void *arg, int16_t *value)
{
    (void)arg;

    // generate new value
    *value = 100;

    return 0;
}

// initialize an instance of humidity sensor object
const [lwm2m_obj_humidity_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args) humidity_args = {
    .[min_range_value](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) = 0.0,
    .max_range_value = 100.0,
    .units = "RH",
    .units_len = sizeof("RH") - 1,
    .instance_id = 0,
    .read_cb = _read_cb,
    .read_cb_arg = NULL
};

int32_t res = [lwm2m_object_humidity_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1ga4fab7531413394d2e150ec443da9aefd)(&humidity_args);

if (res < 0) {
    puts("Could not create humidity object instance");
}
```

* You can now update the sensor values using the [lwm2m_object_humidity_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1gad8d1fbdab74de8a4d3c79f68432ab8fb) function.

```cpp
uint16_t instance_id = (uint16_t)res;
[lwm2m_object_humidity_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1gad8d1fbdab74de8a4d3c79f68432ab8fb)(&client_data, instance_id, new_value);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_HUMIDITY_OBJECT_ID`](#group__lwm2m__objects__humidity_1ga562900e4f2c6809c24d4a8f3abeb2c54)            | LwM2M Humidity Sensor object ID.
`public lwm2m_object_t * `[`lwm2m_object_humidity_init`](#group__lwm2m__objects__humidity_1gab7c4cb47ca8eb917bbc7c99cb833bf40)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Humidity Sensor object handle.
`public int32_t `[`lwm2m_object_humidity_instance_create`](#group__lwm2m__objects__humidity_1ga4fab7531413394d2e150ec443da9aefd)`(const `[`lwm2m_obj_humidity_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1ga147f17a44e21db2d24ed5b5c42e922a7)` * args)`            | Create a new Humidity Sensor instance.
`public void `[`lwm2m_object_humidity_update_value`](#group__lwm2m__objects__humidity_1gad8d1fbdab74de8a4d3c79f68432ab8fb)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)`            | Update the value of the humidity sensor and trigger a notification to the observing servers, if any.

## Members

#### `define `[`LWM2M_HUMIDITY_OBJECT_ID`](#group__lwm2m__objects__humidity_1ga562900e4f2c6809c24d4a8f3abeb2c54) 

LwM2M Humidity Sensor object ID.

#### `public lwm2m_object_t * `[`lwm2m_object_humidity_init`](#group__lwm2m__objects__humidity_1gab7c4cb47ca8eb917bbc7c99cb833bf40)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Humidity Sensor object handle.

#### Parameters
* `client_data` Pointer to the LwM2M client data.

#### Returns
Pointer to the global handle of the Humidity Sensor object.

#### `public int32_t `[`lwm2m_object_humidity_instance_create`](#group__lwm2m__objects__humidity_1ga4fab7531413394d2e150ec443da9aefd)`(const `[`lwm2m_obj_humidity_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__humidity_1ga147f17a44e21db2d24ed5b5c42e922a7)` * args)` 

Create a new Humidity Sensor instance.

#### Parameters
* `args` Initialize structure with the parameter for the instance. Must not be NULL.

#### Returns
> 0 value representing the instance ID if the instance was created successfully. 

#### Returns
<0 otherwise

#### `public void `[`lwm2m_object_humidity_update_value`](#group__lwm2m__objects__humidity_1gad8d1fbdab74de8a4d3c79f68432ab8fb)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)` 

Update the value of the humidity sensor and trigger a notification to the observing servers, if any.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `instance_id` ID of the instance to update. 

* `value` New value for the sensor.

