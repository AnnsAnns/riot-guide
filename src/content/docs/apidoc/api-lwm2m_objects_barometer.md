---
title: api-lwm2m_objects_barometer.md
description: api-lwm2m_objects_barometer.md
---
# group `lwm2m_objects_barometer` 

Barometer object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This implements the LwM2M Barometer object (ID 3315) as specified in the LwM2M registry. This IPSO object should be used with an air pressure sensor to report a barometer measurement. It also provides resources for minimum/maximum measured values and the minimum/maximum range that can be measured by the barometer sensor. An example measurement unit is pascals.

The sensor value can be updated by the application using the [lwm2m_object_barometer_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1gaf963e4e1edecc4f3b06994306d64ccc3) function, or polled when required if a callback is registered upon object instantiation via [lwm2m_obj_barometer_args_t::read_cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7).

To use this object add `USEMODULE += wakaama_objects_barometer` to the application Makefile.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3315-1_0.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3315-1_0.xml)

This object is based on the [IPSO Sensor base object](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base), therefore it shares the same resources.

Usage* Initialize the LwM2M object with an initialized client pointer.

```cpp
lwm2m_object_t *obj = [lwm2m_object_barometer_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1gacda3f6b42988eb82fc839167509ba725)(&client_data);
```

* Create a new instance of the object with a given configuration ([lwm2m_obj_barometer_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1gaebc53dfbd210236f6dd80aa84e2e0d9f)). Here, you can decide the way of updating the sensor values: polling or pushing. In this case, we register a callback function that is called whenever the sensor value is read.

```cpp
// callback function to read the sensor value
int _read_cb(void *arg, int16_t *value)
{
    (void)arg;

    // generate new value
    *value = 100;

    return 0;
}

// initialize an instance of barometer sensor object
const [lwm2m_obj_barometer_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args) barometer_args = {
    .[min_range_value](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) = 0.0,
    .max_range_value = 2000.0,
    .units = "hPa",
    .units_len = sizeof("hPa") - 1,
    .instance_id = 0,
    .read_cb = _read_cb,
    .read_cb_arg = NULL
};

int32_t res = [lwm2m_object_barometer_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1ga97f50f7e8c1abd5c87e6c4e30521cbc0)(&barometer_args);

if (res < 0) {
    puts("Could not create barometer object instance");
}
```

* You can now update the sensor values using the [lwm2m_object_barometer_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1gaf963e4e1edecc4f3b06994306d64ccc3) function.

```cpp
uint16_t instance_id = (uint16_t)res;
[lwm2m_object_barometer_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1gaf963e4e1edecc4f3b06994306d64ccc3)(&client_data, instance_id, new_value);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_BAROMETER_OBJECT_ID`](#group__lwm2m__objects__barometer_1ga7dfb8a6245d224433309c8b3149c2b4a)            | LwM2M Barometer object ID.
`public lwm2m_object_t * `[`lwm2m_object_barometer_init`](#group__lwm2m__objects__barometer_1gacda3f6b42988eb82fc839167509ba725)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Barometer object handle.
`public int32_t `[`lwm2m_object_barometer_instance_create`](#group__lwm2m__objects__barometer_1ga97f50f7e8c1abd5c87e6c4e30521cbc0)`(const `[`lwm2m_obj_barometer_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1gaebc53dfbd210236f6dd80aa84e2e0d9f)` * args)`            | Create a new Barometer instance.
`public void `[`lwm2m_object_barometer_update_value`](#group__lwm2m__objects__barometer_1gaf963e4e1edecc4f3b06994306d64ccc3)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)`            | Update the value of the barometer sensor and trigger a notification to the observing servers, if any.

## Members

#### `define `[`LWM2M_BAROMETER_OBJECT_ID`](#group__lwm2m__objects__barometer_1ga7dfb8a6245d224433309c8b3149c2b4a) 

LwM2M Barometer object ID.

#### `public lwm2m_object_t * `[`lwm2m_object_barometer_init`](#group__lwm2m__objects__barometer_1gacda3f6b42988eb82fc839167509ba725)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Barometer object handle.

#### Parameters
* `client_data` Pointer to the LwM2M client data.

#### Returns
Pointer to the global handle of the Barometer object.

#### `public int32_t `[`lwm2m_object_barometer_instance_create`](#group__lwm2m__objects__barometer_1ga97f50f7e8c1abd5c87e6c4e30521cbc0)`(const `[`lwm2m_obj_barometer_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__barometer_1gaebc53dfbd210236f6dd80aa84e2e0d9f)` * args)` 

Create a new Barometer instance.

#### Parameters
* `args` Initialize structure with the parameter for the instance. Must not be NULL.

#### Returns
> 0 value representing the instance ID if the instance was created successfully. 

#### Returns
<0 otherwise

#### `public void `[`lwm2m_object_barometer_update_value`](#group__lwm2m__objects__barometer_1gaf963e4e1edecc4f3b06994306d64ccc3)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)` 

Update the value of the barometer sensor and trigger a notification to the observing servers, if any.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `instance_id` ID of the instance to update. 

* `value` New value for the sensor.

