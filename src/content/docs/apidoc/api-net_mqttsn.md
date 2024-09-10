---
title: api-net_mqttsn.md
description: api-net_mqttsn.md
---
# group `net_mqttsn` 

Shared definitions for MQTT-SN.

**See also**: [http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf](http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`@379`](#group__net__mqttsn_1gae29c89b0f3c72163f95695c230c0740c)            | MQTT-SN flags.
`enum `[`@380`](#group__net__mqttsn_1ga9163f45c8bbcd0e9190aaf395e5017dc)            | MQTT-SN message types.
`enum `[`@381`](#group__net__mqttsn_1ga7469358914812b2591bcc53635071b16)            | MQTT-SN return codes.

## Members

#### `enum `[`@379`](#group__net__mqttsn_1gae29c89b0f3c72163f95695c230c0740c) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MQTTSN_DUP            | duplicate flag
MQTTSN_QOS_MASK            | QoS level mask.
MQTTSN_QOS_2            | QoS level 2.
MQTTSN_QOS_1            | QoS level 1.
MQTTSN_QOS_NEG1            | QoS level -1 (negative 1)
MQTTSN_QOS_0            | QoS level 0.
MQTTSN_RETAIN            | retain flag
MQTTSN_WILL            | will flag, used during CONNECT
MQTTSN_CS            | clean session flag
MQTTSN_TIT_MASK            | topic ID type mask
MQTTSN_TIT_SHORT            | topic ID: short
MQTTSN_TIT_PREDEF            | topic ID: pre-defined
MQTTSN_TIT_NORMAL            | topic ID: normal

MQTT-SN flags.

All MQTT-SN functions only support a sub-set of the available flags. It is up to the user to only supply valid/supported flags to a function.

Refer to the MQTT-SN spec section 5.3.4 for further information.

#### `enum `[`@380`](#group__net__mqttsn_1ga9163f45c8bbcd0e9190aaf395e5017dc) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MQTTSN_ADVERTISE            | advertise message
MQTTSN_SEARCHGW            | search gateway message
MQTTSN_GWINFO            | gateway info message
MQTTSN_CONNECT            | connect message
MQTTSN_CONNACK            | connection acknowledgment message
MQTTSN_WILLTOPICREQ            | will topic request
MQTTSN_WILLTOPIC            | will topic
MQTTSN_WILLMSGREQ            | will message request
MQTTSN_WILLMSG            | will message
MQTTSN_REGISTER            | topic registration request
MQTTSN_REGACK            | topic registration acknowledgment
MQTTSN_PUBLISH            | publish message
MQTTSN_PUBACK            | publish acknowledgment
MQTTSN_PUBCOMP            | publish received (QoS 2)
MQTTSN_PUBREC            | publish complete (QoS 2)
MQTTSN_PUBREL            | publish release (QoS 2)
MQTTSN_SUBSCRIBE            | subscribe message
MQTTSN_SUBACK            | subscription acknowledgment
MQTTSN_UNSUBSCRIBE            | unsubscribe message
MQTTSN_UNSUBACK            | unsubscription acknowledgment
MQTTSN_PINGREQ            | ping request
MQTTSN_PINGRESP            | ping response
MQTTSN_DISCONNECT            | disconnect message
MQTTSN_WILLTOPICUPD            | will topic update request
MQTTSN_WILLTOPICRESP            | will topic update response
MQTTSN_WILLMSGUPD            | will message update request
MQTTSN_WILLMSGRESP            | will topic update response

MQTT-SN message types.

#### `enum `[`@381`](#group__net__mqttsn_1ga7469358914812b2591bcc53635071b16) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MQTTSN_ACCEPTED            | accepted
MQTTSN_REJ_CONGESTION            | rejected: congestion
MQTTSN_REJ_INV_TOPIC_ID            | rejected: invalid topic id
MQTTSN_REJ_NOTSUP            | rejected: not supported

MQTT-SN return codes.

**See also**: MQTT-SN spec v1.2, section 5.3.10, table 5

