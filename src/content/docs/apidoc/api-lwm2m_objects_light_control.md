---
title: api-lwm2m_objects_light_control.md
description: api-lwm2m_objects_light_control.md
---
# group `lwm2m_objects_light_control` 

Light Control object implementation for LwM2M client using Wakaama.

**This feature is experimental!**
 This API is considered experimental and may change in future releases without deprecation process.

This implements the LwM2M Light Control object (ID 3311) as specified in the LwM2M registry.

This Object is used to control a light source, such as a LED or other light. It allows a light to be turned on or off and dim it.

To use this object add `USEMODULE += wakaama_objects_light_control` to the application Makefile.

ResourcesFor an XML description of the object see [https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/3311.xml](https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/3311.xml)

Name   |ID   |Mandatory   |Type   |Range   |Units   |Implemented
--------- | --------- | --------- | --------- | --------- | --------- | ---------
On/Off   |5850   |Yes   |Boolean   |-   |-   |Yes[1]
Dimmer   |5851   |No   |Integer   |0 - 100   |/100   |Yes[1]
On time   |5852   |No   |Integer   |-   |s   |Yes
Cumulative active power   |5805   |No   |Float   |-   |Wh   |No
Power factor   |5820   |No   |Float   |-   |-   |No
Colour   |5706   |No   |String   |-   |-   |Yes
Sensor Units   |5701   |No   |String   |-   |-   |No
Application Type   |5750   |No   |String   |-   |-   |Yes

[1]: The handling of these resources are implemented, but its actual impact on the light state depends on the application. 

Usage* Initialize the LwM2M client with [lwm2m_object_light_control_init](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1ga5935b70b3c3166d6ffb94950c515b835), by passing a pointer to the LwM2M client data.

* Now you can create instances of the Light Control object with [lwm2m_object_light_control_instance_create](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1ga7cda995e36961ee59e7fae108a72190c). As part of the arguments, you can pass a callback that will be called when the light resources are updated (i.e. status, dimmer, color, app_type), as well as an user argument.

```cpp
#define LIGHT_COLOR "FFFFFF"
#define LIGHT_APP_TYPE "LED 0"

// ... ///

void _light_cb(lwm2m_object_t *object, uint16_t instance_id, bool status, uint8_t dimmer,
               const char* color, const char* app_type, void *arg)
{
    (void)object;
    (void)instance_id;
    (void)arg;

    printf("%s is now %s, ", app_type, status? "ON":"OFF");
    printf("with color %s and intensity %d%%\n", color, dimmer);
}

// ... ///

lwm2m_object_t *light_control;
lwm2m_client_data_t client_data;

lwm2m_client_init(&client_data);
light_control = lwm2m_object_light_control_init(&client_data);

lwm2m_obj_light_control_args_t args = {
   .cb = _light_cb,
   .cb_arg = NULL,
   .color = LIGHT_COLOR,
   .color_len = sizeof(LIGHT_COLOR) - 1,
   .app_type = LIGHT_APP_TYPE,
   .app_type_len = sizeof(LIGHT_APP_TYPE) - 1
};

int result = lwm2m_object_light_control_instance_create(&args, 0);
```

* You can update the status, dimmer, color and app_type of the light control instance with [lwm2m_object_light_control_update_status](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1gac9321e17bf53a1ec1fef64346315d199), [lwm2m_object_light_control_update_dimmer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1ga18585a0721ae6715baa978ef234e4e4c), [lwm2m_object_light_control_update_color](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1gac5531aa47275c0eeb1f5a6a1cbeab27c) and [lwm2m_object_light_control_update_app_type](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1gaaf6a465c26fb958d8f6fcf976f1afd14) respectively. This will make sure to send notifications to servers that may be observing these resources.

```cpp
lwm2m_object_light_control_update_status(0, true, false);
lwm2m_object_light_control_update_dimmer(0, 50, false);
```

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`LWM2M_LIGHT_CONTROL_OBJECT_ID`](#group__lwm2m__objects__light__control_1gaee797303c68d48792c37067b4a04b49c)            | Light Control object ID.
`public lwm2m_object_t * `[`lwm2m_object_light_control_init`](#group__lwm2m__objects__light__control_1ga5935b70b3c3166d6ffb94950c515b835)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)`            | Initialize the Light Control object.
`public int `[`lwm2m_object_light_control_instance_create`](#group__lwm2m__objects__light__control_1ga7cda995e36961ee59e7fae108a72190c)`(const `[`lwm2m_obj_light_control_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1gadf48165374850b4a2b8af7a94459409e)` * args,int32_t instance_id)`            | Create a new Light Control instance and add it to the `object` list.
`public int `[`lwm2m_object_light_control_update_status`](#group__lwm2m__objects__light__control_1gac9321e17bf53a1ec1fef64346315d199)`(uint16_t instance_id,bool status,bool call_cb)`            | Update the status of a light control instance.
`public int `[`lwm2m_object_light_control_update_dimmer`](#group__lwm2m__objects__light__control_1ga18585a0721ae6715baa978ef234e4e4c)`(uint16_t instance_id,uint8_t dimmer,bool call_cb)`            | Update the dimmer value of a light control instance.
`public int `[`lwm2m_object_light_control_update_color`](#group__lwm2m__objects__light__control_1gac5531aa47275c0eeb1f5a6a1cbeab27c)`(uint16_t instance_id,const char * color,size_t len,bool call_cb)`            | Update the color of a light control instance.
`public int `[`lwm2m_object_light_control_update_app_type`](#group__lwm2m__objects__light__control_1gaaf6a465c26fb958d8f6fcf976f1afd14)`(uint16_t instance_id,const char * app_type,size_t len,bool call_cb)`            | Update the application type of a light control instance.
`struct `[`lwm2m_obj_light_control_args`](#structlwm2m__obj__light__control__args) | Arguments for the creation of a Light Control object instance.

## Members

#### `define `[`LWM2M_LIGHT_CONTROL_OBJECT_ID`](#group__lwm2m__objects__light__control_1gaee797303c68d48792c37067b4a04b49c) 

Light Control object ID.

#### `public lwm2m_object_t * `[`lwm2m_object_light_control_init`](#group__lwm2m__objects__light__control_1ga5935b70b3c3166d6ffb94950c515b835)`(`[`lwm2m_client_data_t`](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_client.md#structlwm2m__client__data__t)` * client_data)` 

Initialize the Light Control object.

#### Parameters
* `client_data` LwM2M client data.

#### Returns
Pointer to the Light Control object on success

#### `public int `[`lwm2m_object_light_control_instance_create`](#group__lwm2m__objects__light__control_1ga7cda995e36961ee59e7fae108a72190c)`(const `[`lwm2m_obj_light_control_args_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1gadf48165374850b4a2b8af7a94459409e)` * args,int32_t instance_id)` 

Create a new Light Control instance and add it to the `object` list.

#### Parameters
* `args` Initialize structure with the parameter for the instance. May not be NULL. 

* `instance_id` ID for the new instance. It must be between 0 and (UINT16_MAX - 1), if -1 the next available ID will be used.

#### Returns
0 on success 

#### Returns
-EINVAL if an invalid `instance_id` is given 

#### Returns
-ENOMEM if no memory is available to create a new instance

#### `public int `[`lwm2m_object_light_control_update_status`](#group__lwm2m__objects__light__control_1gac9321e17bf53a1ec1fef64346315d199)`(uint16_t instance_id,bool status,bool call_cb)` 

Update the status of a light control instance.

#### Parameters
* `instance_id` ID of the instance to update. 

* `status` New status of the light. 

* `call_cb` If true, the callback [lwm2m_obj_light_control_args_t::cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_light_control.md#structlwm2m__obj__light__control__args_1a7dd127c437acb1f5c973e7bccba9ebc1) will be called.

#### Returns
0 on success 

#### Returns
-EINVAL if the instance does not exist

#### `public int `[`lwm2m_object_light_control_update_dimmer`](#group__lwm2m__objects__light__control_1ga18585a0721ae6715baa978ef234e4e4c)`(uint16_t instance_id,uint8_t dimmer,bool call_cb)` 

Update the dimmer value of a light control instance.

#### Parameters
* `instance_id` ID of the instance to update. 

* `dimmer` New dimmer value. 

* `call_cb` If true, the callback [lwm2m_obj_light_control_args_t::cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_light_control.md#structlwm2m__obj__light__control__args_1a7dd127c437acb1f5c973e7bccba9ebc1) will be called.

#### Returns
0 on success 

#### Returns
-EINVAL if the instance does not exist

#### `public int `[`lwm2m_object_light_control_update_color`](#group__lwm2m__objects__light__control_1gac5531aa47275c0eeb1f5a6a1cbeab27c)`(uint16_t instance_id,const char * color,size_t len,bool call_cb)` 

Update the color of a light control instance.

#### Parameters
* `instance_id` ID of the instance to update. 

* `color` New color of the light. 

* `len` Length of the color string. 

* `call_cb` If true, the callback [lwm2m_obj_light_control_args_t::cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_light_control.md#structlwm2m__obj__light__control__args_1a7dd127c437acb1f5c973e7bccba9ebc1) will be called.

#### Returns
0 on success 

#### Returns
-EINVAL if the instance does not exist 

#### Returns
-ENOBUFS if the color string is too long

#### `public int `[`lwm2m_object_light_control_update_app_type`](#group__lwm2m__objects__light__control_1gaaf6a465c26fb958d8f6fcf976f1afd14)`(uint16_t instance_id,const char * app_type,size_t len,bool call_cb)` 

Update the application type of a light control instance.

#### Parameters
* `instance_id` ID of the instance to update. 

* `app_type` New application type of the light. 

* `len` Length of the app_type string. 

* `call_cb` If true, the callback [lwm2m_obj_light_control_args_t::cb](./doc/starlight-docs/src/content/docs/apidoc/api-lwm2m_objects_light_control.md#structlwm2m__obj__light__control__args_1a7dd127c437acb1f5c973e7bccba9ebc1) will be called.

#### Returns
0 on success 

#### Returns
-EINVAL if the instance does not exist 

#### Returns
-ENOBUFS if the app_type string is too long

# struct `lwm2m_obj_light_control_args` 

Arguments for the creation of a Light Control object instance.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`lwm2m_obj_light_control_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1ga995f8e79a83a3ad6dd7583e46667dcdb)` `[`cb`](#structlwm2m__obj__light__control__args_1a7dd127c437acb1f5c973e7bccba9ebc1) | Callback for status and dimmer changes.
`public void * `[`cb_arg`](#structlwm2m__obj__light__control__args_1a5f1ba76e445ac56b823344651203e174) | Argument to call cb with.
`public const char * `[`color`](#structlwm2m__obj__light__control__args_1a3c8a8210ac6b347861ca5149468d577b) | Array of chars with the light color.
`public size_t `[`color_len`](#structlwm2m__obj__light__control__args_1a9952f4225e5ab2c4ef86d9c0d84225a7) | Length of color.
`public const char * `[`app_type`](#structlwm2m__obj__light__control__args_1ae7979c29504beb5e21699ae26e4a0104) | Array of chars with the light app type.
`public size_t `[`app_type_len`](#structlwm2m__obj__light__control__args_1ad549e40d7c06059ab8f1130ad9e45d8d) | Length of app_type.

## Members

#### `public `[`lwm2m_obj_light_control_cb_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__lwm2m__objects__light__control_1ga995f8e79a83a3ad6dd7583e46667dcdb)` `[`cb`](#structlwm2m__obj__light__control__args_1a7dd127c437acb1f5c973e7bccba9ebc1) 

Callback for status and dimmer changes.

May be NULL.

#### `public void * `[`cb_arg`](#structlwm2m__obj__light__control__args_1a5f1ba76e445ac56b823344651203e174) 

Argument to call cb with.

May be NULL.

#### `public const char * `[`color`](#structlwm2m__obj__light__control__args_1a3c8a8210ac6b347861ca5149468d577b) 

Array of chars with the light color.

May be NULL.

#### `public size_t `[`color_len`](#structlwm2m__obj__light__control__args_1a9952f4225e5ab2c4ef86d9c0d84225a7) 

Length of color.

#### `public const char * `[`app_type`](#structlwm2m__obj__light__control__args_1ae7979c29504beb5e21699ae26e4a0104) 

Array of chars with the light app type.

May be NULL.

#### `public size_t `[`app_type_len`](#structlwm2m__obj__light__control__args_1ad549e40d7c06059ab8f1130ad9e45d8d) 

Length of app_type.

