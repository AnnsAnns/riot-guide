---
title: api-lwm2m_objects_illuminance.md
description: api-lwm2m_objects_illuminance.md
---
# group `lwm2m_objects_illuminance` 

Illuminance Sensor object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This implements the LwM2M Illuminance Sensor object (ID 3301) as specified in the LwM2M registry.

The sensor value can be updated by the application using the [lwm2m_object_illuminance_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1ga9f0c069ebf0507793a9d1c0fd08e2391) function, or polled when required if a callback is registered upon object instantiation via [lwm2m_obj_illuminance_args_t::read_cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7).

To use this object add `USEMODULE += wakaama_objects_illuminance` to the application Makefile.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3301-1_0.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/version_history/3301-1_0.xml)

This object is based on the [IPSO Sensor base object](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base), therefore it shares the same resources.

Usage* Initialize the LwM2M object with an initialized client pointer.

```cpp
lwm2m_object_t *obj = [lwm2m_object_illuminance_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1gae50771602a222986f351c0fb3eab0c85)(&client_data);
```

* Create a new instance of the object with a given configuration ([lwm2m_obj_illuminance_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1gac5174386eee1ba563fa9dfc583e6e5c8)). Here, you can decide the way of updating the sensor values: polling or pushing. In this case, we register a callback function that is called whenever the sensor value is read.

```cpp
// callback function to read the sensor value
int _read_cb(void *arg, int16_t *value)
{
    (void)arg;

    // generate new value
    *value = 100;

    return 0;
}

// initialize an instance of illuminance sensor object
const [lwm2m_obj_illuminance_args_t](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args) illuminance_args = {
    .[min_range_value](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_ipso_sensor_base.md#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) = 0.0,
    .max_range_value = 4000.0,
    .units = "lx",
    .units_len = sizeof("lx") - 1,
    .instance_id = 0,
    .read_cb = _read_cb,
    .read_cb_arg = NULL
};

int32_t res = [lwm2m_object_illuminance_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1ga57c027d4e8a5ea1ca734cf64006eba45)(&illuminance_args);

if (res < 0) {
    puts("Could not create illuminance object instance");
}
```

* You can now update the sensor values using the [lwm2m_object_illuminance_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1ga9f0c069ebf0507793a9d1c0fd08e2391) function.

```cpp
uint16_t instance_id = (uint16_t)res;
[lwm2m_object_illuminance_update_value](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1ga9f0c069ebf0507793a9d1c0fd08e2391)(&client_data, instance_id, new_value);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_ILLUMINANCE_OBJECT_ID`](#group__lwm2m__objects__illuminance_1ga83a500d34bb8020f7583acf49216dc09)            | LwM2M Illuminance Sensor object ID.
`public lwm2m_object_t * `[`lwm2m_object_illuminance_init`](#group__lwm2m__objects__illuminance_1gae50771602a222986f351c0fb3eab0c85)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Illuminance Sensor object handle.
`public int32_t `[`lwm2m_object_illuminance_instance_create`](#group__lwm2m__objects__illuminance_1ga57c027d4e8a5ea1ca734cf64006eba45)`(const `[`lwm2m_obj_illuminance_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1gac5174386eee1ba563fa9dfc583e6e5c8)` * args)`            | Create a new Illuminance Sensor instance.
`public void `[`lwm2m_object_illuminance_update_value`](#group__lwm2m__objects__illuminance_1ga9f0c069ebf0507793a9d1c0fd08e2391)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)`            | Update the value of the illuminance sensor and trigger a notification to the observing servers, if any.

## Members

#### `define `[`LWM2M_ILLUMINANCE_OBJECT_ID`](#group__lwm2m__objects__illuminance_1ga83a500d34bb8020f7583acf49216dc09) 

LwM2M Illuminance Sensor object ID.

#### `public lwm2m_object_t * `[`lwm2m_object_illuminance_init`](#group__lwm2m__objects__illuminance_1gae50771602a222986f351c0fb3eab0c85)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Illuminance Sensor object handle.

#### Parameters
* `client_data` Pointer to the LwM2M client data.

#### Returns
Pointer to the global handle of the Illuminance Sensor object.

#### `public int32_t `[`lwm2m_object_illuminance_instance_create`](#group__lwm2m__objects__illuminance_1ga57c027d4e8a5ea1ca734cf64006eba45)`(const `[`lwm2m_obj_illuminance_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__illuminance_1gac5174386eee1ba563fa9dfc583e6e5c8)` * args)` 

Create a new Illuminance Sensor instance.

#### Parameters
* `args` Initialize structure with the parameter for the instance. Must not be NULL.

#### Returns
> 0 value representing the instance ID if the instance was created successfully. 

#### Returns
<0 otherwise

#### `public void `[`lwm2m_object_illuminance_update_value`](#group__lwm2m__objects__illuminance_1ga9f0c069ebf0507793a9d1c0fd08e2391)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,uint16_t instance_id,int16_t value)` 

Update the value of the illuminance sensor and trigger a notification to the observing servers, if any.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `instance_id` ID of the instance to update. 

* `value` New value for the sensor.

