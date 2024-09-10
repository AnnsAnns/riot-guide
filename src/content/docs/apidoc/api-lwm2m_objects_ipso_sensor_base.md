---
title: api-lwm2m_objects_ipso_sensor_base.md
description: api-lwm2m_objects_ipso_sensor_base.md
---
# group `lwm2m_objects_ipso_sensor_base` 

Base IPSO sensor functionality to implement similar IPSO objects.

**This feature is experimental!**
 This module is **not a complete object**, but provides common functionalities shared among different IPSO sensor objects. It should not be used directly, from the application, but rather be used as a dependency for other objects.

To use this module add `USEMODULE += wakaama_objects_ipso_sensor_base` to the dependencies of your own object module.

ResourcesGiven that IPSO sensors share a common set of resources, these are implemented by this module.

Name   |ID   |Mandatory   |Type   |Range   |Units   |Implemented
--------- | --------- | --------- | --------- | --------- | --------- | ---------
Sensor Value   |5700   |Yes   |Float   |-   |See 5701   |Yes
Min. Measured Value   |5601   |No   |Float   |-   |See 5701   |Yes
Max. Measured Value   |5602   |No   |Float   |-   |See 5701   |Yes
Min. Range Value   |5603   |No   |Float   |-   |See 5701   |Yes
Max. Range Value   |5604   |No   |Float   |-   |See 5701   |Yes
Reset Min. and Max. Measured Values   |5605   |No   |-   |-   |-   |Yes
Sensor Units   |5701   |No   |String   |-   |-   |Yes

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int32_t `[`lwm2m_object_ipso_sensor_base_instance_create`](#group__lwm2m__objects__ipso__sensor__base_1ga5baed06f12d87ce6e82995a2c25f4c52)`(`[`lwm2m_obj_ipso_sensor_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga1080d10b31ecd38f0a04f5c3377e6495)` * object,const `[`lwm2m_obj_ipso_base_sensor_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1gaa7308ac56cc712168feff47573d2db39)` * args)`            | Create a new object instance based on the IPSO Sensor Base and add it to the `object` list.
`public int `[`lwm2m_object_ipso_sensor_base_init_derived`](#group__lwm2m__objects__ipso__sensor__base_1ga590d8bc6d88024db0befeb3007b6eb98)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,`[`lwm2m_obj_ipso_sensor_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga1080d10b31ecd38f0a04f5c3377e6495)` * object,uint16_t object_id,`[`lwm2m_obj_ipso_sensor_base_inst_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga49a8236a35896aac8b438bb7ff09176e)` * instances,size_t instance_count)`            | Initialize the a LwM2M object derived from the IPSO Sensor Base object.
`public void `[`lwm2m_object_ipso_sensor_base_update_value`](#group__lwm2m__objects__ipso__sensor__base_1ga360efefa9501a38b3301ae9ae22a6154)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_obj_ipso_sensor_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga1080d10b31ecd38f0a04f5c3377e6495)` * object,uint16_t instance_id,int16_t value)`            | Update the value of the illuminance sensor and trigger a notification to the observing servers, if any.
`struct `[`lwm2m_obj_ipso_sensor_base_args`](#structlwm2m__obj__ipso__sensor__base__args) | Arguments for the creation of an object based on the IPSO Sensor Base object instance.
`struct `[`lwm2m_obj_ipso_sensor_base_inst`](#structlwm2m__obj__ipso__sensor__base__inst) | LwM2M IPSO sensor base instance.
`struct `[`lwm2m_obj_ipso_sensor_base`](#structlwm2m__obj__ipso__sensor__base) | LwM2M IPSO sensor base object.

## Members

#### `public int32_t `[`lwm2m_object_ipso_sensor_base_instance_create`](#group__lwm2m__objects__ipso__sensor__base_1ga5baed06f12d87ce6e82995a2c25f4c52)`(`[`lwm2m_obj_ipso_sensor_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga1080d10b31ecd38f0a04f5c3377e6495)` * object,const `[`lwm2m_obj_ipso_base_sensor_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1gaa7308ac56cc712168feff47573d2db39)` * args)` 

Create a new object instance based on the IPSO Sensor Base and add it to the `object` list.

#### Parameters
* `object` Pointer to the LwM2M IPSO object. 

* `args` Initialize structure with the parameter for the instance. May not be NULL.

#### Parameters
* `instance` ID (>0) on success 

* `<0` otherwise

#### `public int `[`lwm2m_object_ipso_sensor_base_init_derived`](#group__lwm2m__objects__ipso__sensor__base_1ga590d8bc6d88024db0befeb3007b6eb98)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,`[`lwm2m_obj_ipso_sensor_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga1080d10b31ecd38f0a04f5c3377e6495)` * object,uint16_t object_id,`[`lwm2m_obj_ipso_sensor_base_inst_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga49a8236a35896aac8b438bb7ff09176e)` * instances,size_t instance_count)` 

Initialize the a LwM2M object derived from the IPSO Sensor Base object.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `object` Pointer to the LwM2M IPSO object. 

* `object_id` Object ID. 

* `instances` List of allocated instances. 

* `instance_count` Number of allocated instances.

#### Parameters
* `0` on success 

* `<0` otherwise

#### `public void `[`lwm2m_object_ipso_sensor_base_update_value`](#group__lwm2m__objects__ipso__sensor__base_1ga360efefa9501a38b3301ae9ae22a6154)`(const `[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data,const `[`lwm2m_obj_ipso_sensor_base_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga1080d10b31ecd38f0a04f5c3377e6495)` * object,uint16_t instance_id,int16_t value)` 

Update the value of the illuminance sensor and trigger a notification to the observing servers, if any.

#### Parameters
* `client_data` Pointer to the LwM2M client. 

* `object` Pointer to the LwM2M IPSO object. 

* `instance_id` ID of the instance to update. 

* `value` New value for the sensor.

# struct `lwm2m_obj_ipso_sensor_base_args` 

Arguments for the creation of an object based on the IPSO Sensor Base object instance.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public int32_t `[`instance_id`](#structlwm2m__obj__ipso__sensor__base__args_1a05c042c22c4763803b709a68df3ace0e) | ID for the new instance.
`public char * `[`units`](#structlwm2m__obj__ipso__sensor__base__args_1a1f5aeb929a6a811298d0c80ca73e7554) | Null-terminated string of the "Sensor Units" resource.
`public size_t `[`units_len`](#structlwm2m__obj__ipso__sensor__base__args_1ad06e27aa2e5987e568ff7bd934f5b6c4) | Length of units.
`public int16_t `[`min_range_value`](#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) | Minimum value that can be measured by the sensor.
`public int16_t `[`max_range_value`](#structlwm2m__obj__ipso__sensor__base__args_1a6afaf066c6fc2b21ef2fad2ee4046f03) | Maximum value that can be measured by the sensor.
`public void * `[`read_cb_arg`](#structlwm2m__obj__ipso__sensor__base__args_1af0359438f14afd8ddfd1118807a1cb34) | Data to pass to the read callback.
`public `[`lwm2m_obj_ipso_base_sensor_read_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1gaeee846fda530e8573f400186db85e164)` * `[`read_cb`](#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7) | Callback to read the sensor value.

## Members

#### `public int32_t `[`instance_id`](#structlwm2m__obj__ipso__sensor__base__args_1a05c042c22c4763803b709a68df3ace0e) 

ID for the new instance.

It must be between 0 and (UINT16_MAX - 1), if -1 the next available ID will be used.

#### `public char * `[`units`](#structlwm2m__obj__ipso__sensor__base__args_1a1f5aeb929a6a811298d0c80ca73e7554) 

Null-terminated string of the "Sensor Units" resource.

May be NULL.

#### `public size_t `[`units_len`](#structlwm2m__obj__ipso__sensor__base__args_1ad06e27aa2e5987e568ff7bd934f5b6c4) 

Length of units.

#### `public int16_t `[`min_range_value`](#structlwm2m__obj__ipso__sensor__base__args_1ae92955518642dd6f13cd4db97805f2c0) 

Minimum value that can be measured by the sensor.

#### `public int16_t `[`max_range_value`](#structlwm2m__obj__ipso__sensor__base__args_1a6afaf066c6fc2b21ef2fad2ee4046f03) 

Maximum value that can be measured by the sensor.

#### `public void * `[`read_cb_arg`](#structlwm2m__obj__ipso__sensor__base__args_1af0359438f14afd8ddfd1118807a1cb34) 

Data to pass to the read callback.

May be NULL.

#### `public `[`lwm2m_obj_ipso_base_sensor_read_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1gaeee846fda530e8573f400186db85e164)` * `[`read_cb`](#structlwm2m__obj__ipso__sensor__base__args_1a2f28f2cc94171b2cbec8220aae925cf7) 

Callback to read the sensor value.

May be NULL.

# struct `lwm2m_obj_ipso_sensor_base_inst` 

LwM2M IPSO sensor base instance.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public lwm2m_list_t `[`list`](#structlwm2m__obj__ipso__sensor__base__inst_1a6b6242251584f12e25752e7d37e0f9cf) | list handle
`public int16_t `[`sensor_value`](#structlwm2m__obj__ipso__sensor__base__inst_1af7fa1108cdd0f138fbed95687507f1e7) | sensor value
`public int16_t `[`min_sensor_value`](#structlwm2m__obj__ipso__sensor__base__inst_1a2dfc8791b93b1301c96eafd1174ff1af) | minimum sensor value
`public int16_t `[`max_sensor_value`](#structlwm2m__obj__ipso__sensor__base__inst_1adfec7efcfca25e95c09dcd923483be20) | maximum sensor value
`public int16_t `[`min_range_value`](#structlwm2m__obj__ipso__sensor__base__inst_1a8f6601372cde77f77e821397474bbfa4) | minimum range value
`public int16_t `[`max_range_value`](#structlwm2m__obj__ipso__sensor__base__inst_1ae8dcac8cc6bb7005edc2ba204664be9f) | maximum range value
`public char `[`units`](#structlwm2m__obj__ipso__sensor__base__inst_1abf42c90a5d286a0126051a6c6342a956) | units
`public void * `[`read_cb_arg`](#structlwm2m__obj__ipso__sensor__base__inst_1acaa7e8d3c879f19efc6803b46b555e08) | Data to pass to the read callback.
`public `[`lwm2m_obj_ipso_base_sensor_read_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1gaeee846fda530e8573f400186db85e164)` * `[`read_cb`](#structlwm2m__obj__ipso__sensor__base__inst_1a6f93c4da139fd44c996bd20c37b28a63) | Callback to read the sensor value.

## Members

#### `public lwm2m_list_t `[`list`](#structlwm2m__obj__ipso__sensor__base__inst_1a6b6242251584f12e25752e7d37e0f9cf) 

list handle

#### `public int16_t `[`sensor_value`](#structlwm2m__obj__ipso__sensor__base__inst_1af7fa1108cdd0f138fbed95687507f1e7) 

sensor value

#### `public int16_t `[`min_sensor_value`](#structlwm2m__obj__ipso__sensor__base__inst_1a2dfc8791b93b1301c96eafd1174ff1af) 

minimum sensor value

#### `public int16_t `[`max_sensor_value`](#structlwm2m__obj__ipso__sensor__base__inst_1adfec7efcfca25e95c09dcd923483be20) 

maximum sensor value

#### `public int16_t `[`min_range_value`](#structlwm2m__obj__ipso__sensor__base__inst_1a8f6601372cde77f77e821397474bbfa4) 

minimum range value

#### `public int16_t `[`max_range_value`](#structlwm2m__obj__ipso__sensor__base__inst_1ae8dcac8cc6bb7005edc2ba204664be9f) 

maximum range value

#### `public char `[`units`](#structlwm2m__obj__ipso__sensor__base__inst_1abf42c90a5d286a0126051a6c6342a956) 

units

#### `public void * `[`read_cb_arg`](#structlwm2m__obj__ipso__sensor__base__inst_1acaa7e8d3c879f19efc6803b46b555e08) 

Data to pass to the read callback.

May be NULL.

#### `public `[`lwm2m_obj_ipso_base_sensor_read_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1gaeee846fda530e8573f400186db85e164)` * `[`read_cb`](#structlwm2m__obj__ipso__sensor__base__inst_1a6f93c4da139fd44c996bd20c37b28a63) 

Callback to read the sensor value.

May be NULL.

# struct `lwm2m_obj_ipso_sensor_base` 

LwM2M IPSO sensor base object.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public lwm2m_object_t `[`object`](#structlwm2m__obj__ipso__sensor__base_1a7f26150ddddbdfc40b7d7169509049c2) | LwM2M object base.
`public `[`lwm2m_obj_ipso_sensor_base_inst_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga49a8236a35896aac8b438bb7ff09176e)` * `[`free_instances`](#structlwm2m__obj__ipso__sensor__base_1a210e7c576b418cfb27edd00c5081268c) | List of instances.
`public uint16_t `[`object_id`](#structlwm2m__obj__ipso__sensor__base_1abde5d54f2f986be20d398129c84f858d) | Object ID.
`public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structlwm2m__obj__ipso__sensor__base_1aac7a6514a39e842d4b94e03749f2ea64) | [Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for the object.

## Members

#### `public lwm2m_object_t `[`object`](#structlwm2m__obj__ipso__sensor__base_1a7f26150ddddbdfc40b7d7169509049c2) 

LwM2M object base.

#### `public `[`lwm2m_obj_ipso_sensor_base_inst_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__ipso__sensor__base_1ga49a8236a35896aac8b438bb7ff09176e)` * `[`free_instances`](#structlwm2m__obj__ipso__sensor__base_1a210e7c576b418cfb27edd00c5081268c) 

List of instances.

#### `public uint16_t `[`object_id`](#structlwm2m__obj__ipso__sensor__base_1abde5d54f2f986be20d398129c84f858d) 

Object ID.

#### `public `[`mutex_t`](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t)` `[`mutex`](#structlwm2m__obj__ipso__sensor__base_1aac7a6514a39e842d4b94e03749f2ea64) 

[Mutex](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structMutex) for the object.

