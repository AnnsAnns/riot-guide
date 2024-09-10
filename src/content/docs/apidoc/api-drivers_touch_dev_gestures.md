---
title: api-drivers_touch_dev_gestures.md
description: api-drivers_touch_dev_gestures.md
---
# group `drivers_touch_dev_gestures` 

Gesture recognition for touch devices.

This driver implements a simple gesture recognition with a maximum of two touches for touch devices that use the generic touch device API.

The application that receives the events from the touch device via the callback function registered with [touch_dev_set_touch_event_callback](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1gadfbc3fc4125810605a6815e9dbd7d653) must first create and initialize a touch device gesture context of type [touch_dev_gesture_ctx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev_gestures.md#structtouch__dev__gesture__ctx__t). For each touch event received from the touch device, it then calls [touch_dev_recognize_gesture](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gae717e0b650109004ab4addfa9f110c7c) function with this context so that the gesture recognition fetches the data from the touch device to detect the gestures, for example:

```cpp
static void _touch_event_cb(void *arg)
{
    // indicate that a touch event occurred
    [mutex_unlock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga05ccabe849d63b032f6317323da60187)(arg);
}

void *_input_task(void *arg)
{
    ...
    [mutex_t](./doc/starlight-docs/src/content/docs/apidoc/api-core_sync_mutex.md#structmutex__t) lock = [MUTEX_INIT_LOCKED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1ga5ca0fa72dfde3f969c5c3eae33fc67cc);

    [touch_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__dev) *dev = [touch_dev_reg_find_screen](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga78fc29097b69a30dfb52f459bea5bea2)(0).[dev](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__dev__reg_1a675c7771fad06ff150f8d27dc268bebb);
    [touch_dev_gesture_ctx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev_gestures.md#structtouch__dev__gesture__ctx__t) ctx;

    // set the event callback function and initialize the touch device gesture context
    [touch_dev_set_touch_event_callback](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1gadfbc3fc4125810605a6815e9dbd7d653)(dev, _touch_event_cb, &lock);
    [touch_dev_init_gesture](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1ga38f53285aadc98324b998e3ebd343c57)(dev, &ctx);

    while (1) {
        // wait for the indication of a touch event
        [mutex_lock](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__core__sync__mutex_1gac50891b4f3d2930d34c173567d739201)(&lock);

        // call the gesture recognition
        [touch_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t) pos;
        [touch_dev_gesture_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1ga0cd480ba712696981a8f6c37f73d81c0) gesture = [touch_dev_recognize_gesture](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gae717e0b650109004ab4addfa9f110c7c)(&ctx, &pos);

        // process recognized gestures
        switch (gesture) {
            case [TOUCH_DEV_GEST_SINGLE_TAP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a7ecd4a70f94def9205166e5148a003d6):
                if ((pos.[x](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t_1a9afda6f65e5bdc177c7684e717845dd9) == 50) && (pos.[y](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t_1a017f96e749b91f80740a35f5da77edeb) == 75)) {
                ...
            case [TOUCH_DEV_GEST_DOUBLE_TAP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a62eb6d0f33ac7e565c35dc216f6c9576):
                ...
            ...
        }
    }
    return NULL;
}
```

To use this event-driven approach the driver for the touch device has to report the following touch events by interrupt:

* a new touch is detected,

* a touch is released, and

* regularly the current touch positions as long as there are touches.

If the event-driven approach cannot be used because either the touch device does not support all these touch events or the application wants to use the touch device in polling mode, the application must call the [touch_dev_recognize_gesture](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gae717e0b650109004ab4addfa9f110c7c) function with the gesture context of the touch device at regular intervals, for example:

```cpp
#ifndef TOUCH_DEV_POLLING_PERIOD
#define TOUCH_DEV_POLLING_PERIOD     50
#endif
...

void *_input_task(void *arg)
{
    ...

    [touch_dev_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__dev) *dev = [touch_dev_reg_find_screen](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga78fc29097b69a30dfb52f459bea5bea2)(0).[dev](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__dev__reg_1a675c7771fad06ff150f8d27dc268bebb);
    [touch_dev_gesture_ctx_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev_gestures.md#structtouch__dev__gesture__ctx__t) ctx;

    // initialize the touch device gesture context
    [touch_dev_init_gesture](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1ga38f53285aadc98324b998e3ebd343c57)(dev, &ctx);

    while (1) {
        // call the gesture recognition
        [touch_t](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t) pos;
        [touch_dev_gesture_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1ga0cd480ba712696981a8f6c37f73d81c0) gesture = [touch_dev_recognize_gesture](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gae717e0b650109004ab4addfa9f110c7c)(&ctx, &pos);

        // process recognized gestures
        switch (gesture) {
            case [TOUCH_DEV_GEST_SINGLE_TAP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a7ecd4a70f94def9205166e5148a003d6):
                if ((pos.[x](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t_1a9afda6f65e5bdc177c7684e717845dd9) == 50) && (pos.[y](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t_1a017f96e749b91f80740a35f5da77edeb) == 75)) {
                ...
            case [TOUCH_DEV_GEST_DOUBLE_TAP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a62eb6d0f33ac7e565c35dc216f6c9576):
                ...
            ...
        }

        // wait the period time for polling
        [ztimer_sleep](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gade98636e198f2d571c8acd861d29d360)([ZTIMER_MSEC](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__sys__ztimer_1gaf89aa36047e5e6859e5b08c9bacd1c3e), TOUCH_DEV_POLLING_PERIOD);
    }
    return NULL;
}
```

The following gestures are supported by the driver:

* [TOUCH_DEV_GEST_SINGLE_TAP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a7ecd4a70f94def9205166e5148a003d6) : a single tap with one touch at the given position

* [TOUCH_DEV_GEST_DOUBLE_TAP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a62eb6d0f33ac7e565c35dc216f6c9576) : a double tap with one touch at the given position

* [TOUCH_DEV_GEST_PRESSED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a3afed4c11908f744bf5c6ce31273ab29) : a long press with one touch at the given position

* [TOUCH_DEV_GEST_RELEASED](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0aeabd7443eec0e663413fe2a708b69a51) : one touch released after a long press at given position

* [TOUCH_DEV_GEST_MOVE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a744dfb1cfaf5ea1c2785d1d8505e4df7) : moving while pressed with current position

* [TOUCH_DEV_GEST_SWIPE_LEFT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0aba74d1d6f99a8f4c90a87adf2b2ea46c) : swiping left with one touch

* [TOUCH_DEV_GEST_SWIPE_RIGHT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a8905ac888cbb807d3bd3000915a494c3) : swiping right with one touch

* [TOUCH_DEV_GEST_SWIPE_UP](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0aa623a374a55de894f77fb379a5d94874) : swiping up with one touch

* [TOUCH_DEV_GEST_SWIPE_DOWN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0ab653d323eacdf0dd3b9d8c09293b568f) : swiping down with one touch

* [TOUCH_DEV_GEST_ZOOM_IN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a8f7eb5473a3919733cc64dd3092caa54) : zooming in (spreading) with two touches

* [TOUCH_DEV_GEST_ZOOM_OUT](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a53655cbaf761aeb34266631c69c00cf6) : zooming out (pinching) with two touches

* For technical reasons, a double-tap event is always preceded by a single-tap event, i.e. for a double-tap, the application always receives a single-tap event first and then a double-tap event if the second tap follows.

* Zooming gestures are only available if the touch device supports two touches.

Gunar Schorcht [gunar@schorcht.net](mailto:gunar@schorcht.net)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`TOUCH_DEV_TOUCHES_MAX_NUMOF`](#group__drivers__touch__dev__gestures_1ga7d640fd74fd4a533132c11e1ccbc1ae4)            | Maximum number of touches supported by gesture recognition.
`define `[`CONFIG_TOUCH_DEV_SWIPE_TRESH`](#group__drivers__touch__dev__gestures_1gae85ef7988cef1b3d3cf7abdbaa47d2c8)            | Minimum distance in one direction to recognize a swipe gesture.
`define `[`CONFIG_TOUCH_DEV_PRESS_TIME_MS`](#group__drivers__touch__dev__gestures_1ga734b710a8341beeec88a320717d8fc35)            | Minimum touch time in milliseconds to detect a long press gesture.
`define `[`CONFIG_TOUCH_DEV_DOUBLE_TIME_MS`](#group__drivers__touch__dev__gestures_1ga28c370a3d1038545653005c0b0447981)            | Maximum time in milliseconds between two taps to detect a double tap.
`enum `[`touch_dev_state_t`](#group__drivers__touch__dev__gestures_1gaf7a09d0067e01cbd766989c43f32c403)            | Touch device states used for gesture recognition.
`enum `[`touch_dev_gesture_t`](#group__drivers__touch__dev__gestures_1ga0cd480ba712696981a8f6c37f73d81c0)            | Touch gesture events.
`public void `[`touch_dev_init_gesture`](#group__drivers__touch__dev__gestures_1ga38f53285aadc98324b998e3ebd343c57)`(`[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev,`[`touch_dev_gesture_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev_gestures.md#structtouch__dev__gesture__ctx__t)` * ctx)`            | Initialize gesture recognition.
`public `[`touch_dev_gesture_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1ga0cd480ba712696981a8f6c37f73d81c0)` `[`touch_dev_recognize_gesture`](#group__drivers__touch__dev__gestures_1gae717e0b650109004ab4addfa9f110c7c)`(`[`touch_dev_gesture_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev_gestures.md#structtouch__dev__gesture__ctx__t)` * ctx,`[`touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t)` * pos)`            | Recognize gestures by handling next touch device event.
`struct `[`touch_dev_gesture_ctx_t`](#structtouch__dev__gesture__ctx__t) | Context information for a touch device needed for gesture recognition.

## Members

#### `define `[`TOUCH_DEV_TOUCHES_MAX_NUMOF`](#group__drivers__touch__dev__gestures_1ga7d640fd74fd4a533132c11e1ccbc1ae4) 

Maximum number of touches supported by gesture recognition.

#### `define `[`CONFIG_TOUCH_DEV_SWIPE_TRESH`](#group__drivers__touch__dev__gestures_1gae85ef7988cef1b3d3cf7abdbaa47d2c8) 

Minimum distance in one direction to recognize a swipe gesture.

#### `define `[`CONFIG_TOUCH_DEV_PRESS_TIME_MS`](#group__drivers__touch__dev__gestures_1ga734b710a8341beeec88a320717d8fc35) 

Minimum touch time in milliseconds to detect a long press gesture.

#### `define `[`CONFIG_TOUCH_DEV_DOUBLE_TIME_MS`](#group__drivers__touch__dev__gestures_1ga28c370a3d1038545653005c0b0447981) 

Maximum time in milliseconds between two taps to detect a double tap.

#### `enum `[`touch_dev_state_t`](#group__drivers__touch__dev__gestures_1gaf7a09d0067e01cbd766989c43f32c403) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TOUCH_DEV_STATE_RELEASED            | no touches detected, default state
TOUCH_DEV_STATE_TAPPED_SINGLE            | a single touch is detected
TOUCH_DEV_STATE_TAPPED_MULTIPLE            | a second touch is detected
TOUCH_DEV_STATE_PRESSED            | a long press is detected
TOUCH_DEV_STATE_WAIT_FOR_RELEASE            | gesture detected, waiting for releasing touches

Touch device states used for gesture recognition.

#### `enum `[`touch_dev_gesture_t`](#group__drivers__touch__dev__gestures_1ga0cd480ba712696981a8f6c37f73d81c0) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TOUCH_DEV_GEST_NONE            | No gesture recognized.
TOUCH_DEV_GEST_SINGLE_TAP            | Single tap recognized at the given position.
TOUCH_DEV_GEST_DOUBLE_TAP            | Double tap recognized at the given position.
TOUCH_DEV_GEST_PRESSED            | Long press recognized at the given position.
TOUCH_DEV_GEST_RELEASED            | Release after a long press at given position.
TOUCH_DEV_GEST_MOVE            | Moving while pressed recognized, current position is given.
TOUCH_DEV_GEST_SWIPE_LEFT            | Swipe left recognized, no position is given.
TOUCH_DEV_GEST_SWIPE_RIGHT            | Swipe right recognized, no position is given.
TOUCH_DEV_GEST_SWIPE_UP            | Swipe up recognized, no position is given.
TOUCH_DEV_GEST_SWIPE_DOWN            | Swipe down recognized, no position is given.
TOUCH_DEV_GEST_ZOOM_IN            | Zoom in (spread) recognized, no position is given.
TOUCH_DEV_GEST_ZOOM_OUT            | Zoom out (pinch) recognized, no position is given.

Touch gesture events.

#### `public void `[`touch_dev_init_gesture`](#group__drivers__touch__dev__gestures_1ga38f53285aadc98324b998e3ebd343c57)`(`[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * dev,`[`touch_dev_gesture_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev_gestures.md#structtouch__dev__gesture__ctx__t)` * ctx)` 

Initialize gesture recognition.

#### Parameters
* `dev` Pointer to the touch device 

* `ctx` Pointer to the context information for the touch device

#### `public `[`touch_dev_gesture_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1ga0cd480ba712696981a8f6c37f73d81c0)` `[`touch_dev_recognize_gesture`](#group__drivers__touch__dev__gestures_1gae717e0b650109004ab4addfa9f110c7c)`(`[`touch_dev_gesture_ctx_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev_gestures.md#structtouch__dev__gesture__ctx__t)` * ctx,`[`touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t)` * pos)` 

Recognize gestures by handling next touch device event.

#### Parameters
* `ctx` Pointer to the context information for the touch device 

* `pos` Position of the gesture if interested in it (can be NULL)

return the gesture of type [touch_dev_gesture_t](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1ga0cd480ba712696981a8f6c37f73d81c0) if one was recognized or [TOUCH_DEV_GEST_NONE](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gga0cd480ba712696981a8f6c37f73d81c0a66586813f5e7e5e39b256c7a1ecc08ef)

# struct `touch_dev_gesture_ctx_t` 

Context information for a touch device needed for gesture recognition.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * `[`dev`](#structtouch__dev__gesture__ctx__t_1a519519efc18c34fadeaa084020ae2e62) | Pointer to the touch device.
`public uint32_t `[`t_changed`](#structtouch__dev__gesture__ctx__t_1ab0680a209b6ffaa2fdc56c8c1be6fb32) | Time of last state change in ms.
`public uint32_t `[`t_prev_tap`](#structtouch__dev__gesture__ctx__t_1a29b86ab418e07ea1b9fcefde0e865208) | Time of previous tap.
`public `[`touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t)` `[`prev`](#structtouch__dev__gesture__ctx__t_1a9432aafa18650a28b56191365c769a0e) | Previous set of touches.
`public uint8_t `[`prev_num`](#structtouch__dev__gesture__ctx__t_1a2426e9c76027e51e84c834d073d136e4) | Previous number of touches.
`public `[`touch_dev_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gaf7a09d0067e01cbd766989c43f32c403)` `[`state`](#structtouch__dev__gesture__ctx__t_1ac9ac928e5d3e237f03650132ea72770f) | State of touch device.

## Members

#### `public `[`touch_dev_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev_1ga717c66ce86128285c1041c72d0861d06)` * `[`dev`](#structtouch__dev__gesture__ctx__t_1a519519efc18c34fadeaa084020ae2e62) 

Pointer to the touch device.

#### `public uint32_t `[`t_changed`](#structtouch__dev__gesture__ctx__t_1ab0680a209b6ffaa2fdc56c8c1be6fb32) 

Time of last state change in ms.

#### `public uint32_t `[`t_prev_tap`](#structtouch__dev__gesture__ctx__t_1a29b86ab418e07ea1b9fcefde0e865208) 

Time of previous tap.

#### `public `[`touch_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_touch_dev.md#structtouch__t)` `[`prev`](#structtouch__dev__gesture__ctx__t_1a9432aafa18650a28b56191365c769a0e) 

Previous set of touches.

#### `public uint8_t `[`prev_num`](#structtouch__dev__gesture__ctx__t_1a2426e9c76027e51e84c834d073d136e4) 

Previous number of touches.

#### `public `[`touch_dev_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__touch__dev__gestures_1gaf7a09d0067e01cbd766989c43f32c403)` `[`state`](#structtouch__dev__gesture__ctx__t_1ac9ac928e5d3e237f03650132ea72770f) 

State of touch device.

