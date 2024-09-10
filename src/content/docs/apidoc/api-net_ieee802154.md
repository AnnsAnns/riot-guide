---
title: api-net_ieee802154.md
description: api-net_ieee802154.md
---
# group `net_ieee802154` 

IEEE 802.15.4 components.

General introductionThe IEEE 802.15.4 standard describes radio communication for low-rate local wireless networks, operating in different frequency bands, modulations and MACs; all of these have been extended over time in revisions of the standard. It also describes topologies and roles of devices (eg. a PAN coordinator that is a FFD (Full Function Device) and RFDs (Reduced Function Devices) and clusters that use different PAN IDs to keep their traffic apart), without prescribing how they are formed or managed.

Common frequencies used are the 868 MHz band (one channel, in Europe), the 915 MHz band (10 channels, in America) and the 2.4GHz band (16 channels); several more are defined between 169MHz and 9GHz.

The standard describes several MACs that govern when to send and to listen, as well as operation modes building on them; the choice of these involves the trade-offs between power consumption, complexity and latency, as it governs how much time devices can spend with their radios powered down. Some operation modes support channel hopping to avoid frequencies used by others. Common variations are:

* nonbeacon-enabled: devices send whenever they want; beacons are only sent when devices ask for them in order to join the network. Optionally, packets can be held until the device asks for them ("indirect
  transmission").

* beacon-enabled: a coordinator sends beacons regularly, devices can send for some time after the beacon

* TSCH: the network uses frequency and time slots strictly synchronized at the coordinator's beacons

* DSME: the network uses either CSMA-CA or frequency and time slots, synchronized at the coordinator's beacon

A comprehensive introduction to these is available in [Towards the Internet of Relevant Things: The IEEE 802.15.4e Standard](http://www.sigapp.org/sac/sac2016/T7-HandOut.pdf) presented Anastasi et al. at the ACM Symposium on Applied Computing 2016.

Some MACs are established outside of the standard but either relevant for context or because they are used in RIOT:

* contikiMAC: receivers listen in brief time slots and stay listening if they detect a carrier; senders send until they receive an acknowledgement.

* "YOLO mode": receivers are always on; senders just send and hope for the best.

* "submac": A mode between "YOLO" and nonbeacon-enabled mode, in which a consistent set of components common to many specified MACs (CSMA-CA, retransmissions, acknowledgements) is implemented.

It is similar to nonbeacon mode, but lacks that mode's provisions for discovery (in which devices ask for beacons to be sent) and others.

Due to the variation both in the 802.15.4 internal layer and the protocols used on top of it, applications always need to pick their components; that selection is often guided by standards or organizations that pick an interoperable set of components (higher-level protocol, MAC, band and others), like [Thread](https://openthread.io/guides/thread-primer) (6LoWPAN, nonbeacon-enabled, 2.4GHz), WirelessHART (HART, TSCH, 2.4GHz) or 6TiSCH (6LoWPAN, TSCH).

Availability in RIOTOne way of using the 802.15.4 layer in RIOT is by [6LoWPAN](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__sixlowpan), which provides IPv6 connectivity atop of it. In these setups, the GNRC network stack is used, and details like band or short addresses are configured manually at build time ([CONFIG_IEEE802154_DEFAULT_PANID](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__conf_1ga3ce7993741c7ab943712750e050256f6) etc.) or at runtime (eg. through `ifconfig`). Boards using a radio driver that is already ported to [IEEE802.15.4 SubMAC layer](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__net__ieee802154__submac) are used in "submac" mode; all others use whatever their driver provides (varying from "YOLO" to some features of "submac").

Alternatively, the [OpenWSN network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__openwsn) and [OpenThread network stack](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__pkg__openthread) modules provide standalone network stacks that conform to the 6TiSCH and [Thread](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structThread) specifications, respectively.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

