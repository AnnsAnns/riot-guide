---
title: api-drivers_dfplayer.md
description: api-drivers_dfplayer.md
---
# group `drivers_dfplayer` 

Driver for the DFPlayer Mini MP3 Player.

The DFPlayer Mini is a super cheap MP3 Player that can be controlled via UART. It can play files from SD card, USB storage devices and NOR flash. It has an integrated 3W amplifier that can be used to build a standalone mono speaker. Alternatively a stereo output can be used that can be directly connected to headphones, but needs a dedicated amplifier for connecting to passive speakers.

File System SetupThe SD card or USB storage devices needs to be formatted as FAT32 and the MP3 files have to be stored using one of the following naming schemes, if selecting the files efficiently is required:

Numbered File Inside Numbered Folder Naming SchemeThe MP3 files have to be named with three leading decimal digits (e.g. `001.mp3` or `042 - foo bar.mp3`) and must be placed in in folders named with two decimal digits (e.g. `01` or `99`). The folder name numbers must be in the range 1-99 and the file name numbers in the range 1-255. Playback of these files can be started using the function [dfplayer_play_file](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gad69cccd95ec43deed058efecba13f602) .

Examples of valid paths:

* `01/001.mp3`

* `19/249 - Nothing Else Matters.mp3`

Examples of ***INVALID*** paths:

* `01 - Yngwie Malmsteen/042 - Leonardo.mp3`

* The folder name must only consist of two digits, additional chars are not allowed in the folder name

* `9/42.mp3`

* Leading zeros must be added, e.g. `09/042.mp3` would be valid

* `99/359.mp3`

* Folder number out of range (1-255 is valid)

Numbered File Inside MP3 Folder Naming SchemeThe MP3 files have to be named with four decimal digits and must be placed in the folder `"MP3"`. Subsequent characters after the four digits are ignored. Valid names are e.g. `MP3/0001.mp3` or `MP3/0042 - My favorite song.mp3`. The file numbers 1-9999 are valid. Playback of these files can be started using the function [dfplayer_play_from_mp3](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga9a6fcfbe8390fe16d51b09e7396e88ed) .

AdvertisementsMP3 files placed in the folder `"ADVERT"` named with four decimal digits (e.g. `"0001.mp3"` or `"1337.mp3"`) can be played as advertisements: The function [dfplayer_play_from_advert](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga554e800f891f48d763fdbff557fa0c86) can be used to start their playback, but only while a non-advertisement is currently playing. After the advertisement the normal playback is resumed. This feature has been implemented in the hope it is used for features like audible user feedback to controls, rather than playing advertisements.

Combining Naming SchemesAll of the above naming schemes can be used on the same storage device. However, you still have to use to the functions intended to be used with the naming scheme of a specific file in order to be able to play it.

Track NumbersTrack numbers are a bogus unit in the DFPlayer

Track numbers in the dfplayer revert to the number of the file in the file system. Without preparing the medium played at a very low level, it will be hard to map track numbers to their corresponding songs. If you started playback using [dfplayer_play_file](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gad69cccd95ec43deed058efecba13f602) or [dfplayer_play_from_mp3](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga9a6fcfbe8390fe16d51b09e7396e88ed), you can use [dfplayer_get_played_file](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gab74718a2cb9f578442e41496f0f4c001) to get the currently played filed according to the used naming scheme (see section above).

Continuous PlaybackThe are two options for achieving continuous playback with the DFPlayer Mini: The first is to use [dfplayer_shuffle_all](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga04d62731219ada06e9d8fe529495ad97) or [dfplayer_repeat_folder](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga4c57b66fbb3b42ee4241fee17e3f93cd) to schedule shuffled playback of all files or repeat playback of a folder, respectively. But keep in mind that any playback command will switch back to normal playback mode.

The second option is to schedule playback of the next file right after the playback of a file has completed. This can be implemented most conveniently by using the callback functions (see [dfplayer_set_callbacks](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gaa3e91624cc53b730896fc0ccc90a53a7)). But beware: The callbacks are called in interrupt context and the API of this driver ***MUST ONLY*** be used in thread context.

Known Hardware BugsDevice Bugs Not Handled by the DriverOn some versions of the DFPlayer, any UART communication with the device during playback results in audible and unpleasant glitches. The only solution is to not communicate with the device during playback, as the DFPlayer seems to pause playback for some milliseconds after receiving a command. If the busy pin of the DFPlayer is connected to your board and configured, the function [dfplayer_get_state](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga4f334fe3f7c231bf22d164fb1abccae5) will read the busy pin to detect if the DFPlayer is currently playing. Onlyif according to the busy pin the device is not currently playing, the UART interface is used to detect whether the playback is paused or stopped. Thus, [dfplayer_get_state](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga4f334fe3f7c231bf22d164fb1abccae5) can be used without fearing to cause audio glitches, provided the busy pin is connected and configured. You can use this to poll the state of the DPlayer and issue the commands once playback has completed, or use the callbacks (see [dfplayer_set_callbacks](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gaa3e91624cc53b730896fc0ccc90a53a7)) to get notified when playback has completed.

When playback of a file from the `"ADVERT"` folder is started while the device not playing, or already playing a file from the `"ADVERT"` folder, the command fails to execute and the DFPlayer stops all playback (if currently playing).

Device Bugs Handled by the Driver(These bugs are transparently handled by the driver, so users of the driver can safely skip reading this section.)

When playing a file from the MP3 folder or from the ADVERT folder, the DFPlayer acknowledges the command before checking if the file actually exists. If the file does not exist, a second message to indicate the failure is send, but no second message is send on success. If the second message is not received, the driver has to figure out by other means if this is a communication error or indicates that the playback has started. If the busy pin of the DFPlayer is connected and configured, it will be used to verify that the command succeeded. Otherwise, the driver will query the status of the device via UART to confirm that playback started, which can cause audible glitches on some revisions. For those revisions, the busy pin should be really used.

When the DFPlayer completes playback of a file, the next command received is not acknowledged, if it is a control command. Query commands are not affected. The driver works around this bug by querying the volume prior to issuing a control command directly after playback completed.

Some versions of the DFPlayer are not able to handle commands send at high frequency. A delay of 100ms is inserted after every communication with the device to counter this.

Some versions of the DFPlayer have a high chance of ignoring commands. The driver tries up to [DFPLAYER_RETRIES](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__constants_8h_1a3ec40121dee25a509e8fcf34dfcf4193) (`5` be default) times the command before giving up. For that reason, non-idempotent commands supported by the DFPlayer (e.g. increase and decrease volume) are not exposed by the driver, as retrying could result in them being executed more than once. There are idempotent commands that can achieve the same (e.g. the set volume command instead of increase or decrease volume commands) for every non-idempotent command, so this doesn't restrict the feature set of the driver.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`DFPLAYER_WAIT_MS`](#group__drivers__dfplayer_1ga87dffa3a73a09ef4834b7f72a7b0b699)            | The number of milliseconds to wait after receiving playback of file has completed before starting playback of the next file.
`public int `[`dfplayer_init`](#group__drivers__dfplayer_1ga996398d9f335622e55bd498c239ac7c2)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,const `[`dfplayer_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structdfplayer__params__t)` * params)`            | Initialize a DFPlayer Mini device descriptor.
`public `[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` `[`dfplayer_get_sources`](#group__drivers__dfplayer_1ga6d1c463734c564b842fecdb30e91720d)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Get the set of available playback sources of the given DFPlayer.
`public int `[`dfplayer_set_callbacks`](#group__drivers__dfplayer_1gaa3e91624cc53b730896fc0ccc90a53a7)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_cb_done_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1aee106f5d736492899b27c06a21ee5c79)` cb_done,`[`dfplayer_cb_src_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1ad10a40a53f88666bde12ff45dc8d47c2)` cb_src)`            | Set/clear the event callbacks of the DFPlayer Mini.
`public inline static int `[`dfplayer_next`](#group__drivers__dfplayer_1ga842a40926474a8d98021a4d6af8deaea)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Start playing the next song in the currently used naming scheme.
`public inline static int `[`dfplayer_prev`](#group__drivers__dfplayer_1gaeeac922246b1e373e736b49b14684304)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Start playing the previous song in the currently used naming scheme.
`public int `[`dfplayer_step`](#group__drivers__dfplayer_1ga3ca71e1427ef41c9dcd455c2ba97206e)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,int step)`            | Step forward/backward following the currently used naming scheme.
`public inline static int `[`dfplayer_set_volume`](#group__drivers__dfplayer_1gafd52e95c1dc5d12de374c39fd3d23ae2)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t volume)`            | Sets the volume to the given value.
`public inline static int `[`dfplayer_set_equalizer`](#group__drivers__dfplayer_1ga84569e72c774f408df7183ad6f7f8dff)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_eq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1ac5fcd5c1a12de93e38e918f9c97bd688)` equalizer)`            | Apply the given equalizer setting.
`public inline static int `[`dfplayer_set_source`](#group__drivers__dfplayer_1gaa1c8af3cba1d7f99c0ef78743381eaac)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)`            | Apply the given source.
`public inline static int `[`dfplayer_enter_standby`](#group__drivers__dfplayer_1ga0bd73f77728bbb24b3685b545755b585)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Enter standby mode.
`public inline static int `[`dfplayer_exit_standby`](#group__drivers__dfplayer_1gad0c7e1ac5544343be724d107b320fc0d)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Exit standby mode.
`public inline static int `[`dfplayer_play`](#group__drivers__dfplayer_1gabf2f035849e8cc1fab0d082588b0a53c)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Start/resume playing.
`public inline static int `[`dfplayer_pause`](#group__drivers__dfplayer_1ga8e575cc5a4aef85fc80e58bdd27b9454)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Pause the playback.
`public int `[`dfplayer_play_file`](#group__drivers__dfplayer_1gad69cccd95ec43deed058efecba13f602)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t folder,uint8_t file)`            | Start playing the specified file in the specified folder.
`public int `[`dfplayer_play_from_mp3`](#group__drivers__dfplayer_1ga9a6fcfbe8390fe16d51b09e7396e88ed)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t number)`            | Start playing the specified number in the MP3 folder.
`public int `[`dfplayer_play_from_advert`](#group__drivers__dfplayer_1ga554e800f891f48d763fdbff557fa0c86)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t number)`            | Start playing the specified number in the ADVERT folder.
`public inline static int `[`dfplayer_stop_advert`](#group__drivers__dfplayer_1ga3a2507adc4c2c0b1944baa345c48e3a3)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Stop playing a file from the ADVERT folder and resume previous playback.
`public inline static int `[`dfplayer_repeat_folder`](#group__drivers__dfplayer_1ga4c57b66fbb3b42ee4241fee17e3f93cd)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t folder)`            | Start playing and repeating the specified folder.
`public inline static int `[`dfplayer_shuffle_all`](#group__drivers__dfplayer_1ga04d62731219ada06e9d8fe529495ad97)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Launch shuffle playback of all files.
`public inline static int `[`dfplayer_repeat`](#group__drivers__dfplayer_1gacfd380e12beeb27e7fe1228b0d5befde)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,bool repeat)`            | Enable or disable repeat playback.
`public int `[`dfplayer_get_state`](#group__drivers__dfplayer_1ga4f334fe3f7c231bf22d164fb1abccae5)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af375b5e10d4062d3724acb1d05243b9d)` * state)`            | Query the state of the DFPlayer Mini.
`public inline static int `[`dfplayer_get_volume`](#group__drivers__dfplayer_1ga5cdf34af22ec3bfd6205e4a8068b9089)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t * volume)`            | Query the current volume of the DFPlayer Mini.
`public inline static int `[`dfplayer_get_equalizer`](#group__drivers__dfplayer_1ga31d8e2692906d4c09834c9eafdb34725)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_eq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1ac5fcd5c1a12de93e38e918f9c97bd688)` * equalizer)`            | Query the current equalizer setting of the DFPlayer Mini.
`public inline static int `[`dfplayer_get_mode`](#group__drivers__dfplayer_1ga417efff86f73c00d47f50d00c84ee875)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a418e583e33fe86ce7d5313542f8ed5b8)` * mode)`            | Query the current playback mode of the DFPlayer Mini.
`public inline static int `[`dfplayer_get_version`](#group__drivers__dfplayer_1ga9a4d81aed60d1cf21ae7d4e6f5ead754)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * version)`            | Query the software version running on the DFPlayer Mini.
`public inline static int `[`dfplayer_files_usb`](#group__drivers__dfplayer_1ga312d1f207135f5421052396a31dea7a6)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * files)`            | Query the number of files on the USB storage device.
`public inline static int `[`dfplayer_files_sdcard`](#group__drivers__dfplayer_1gaf2e655d541a0bbba663ff144c04d5234)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * files)`            | Query the number of files on the SD card.
`public inline static int `[`dfplayer_files_flash`](#group__drivers__dfplayer_1ga1722146af40230534fa42b92c84b10d4)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * files)`            | Query the number of files on the NOR flash.
`public inline static int `[`dfplayer_get_fileno_usb`](#group__drivers__dfplayer_1ga9bc21b0f9b8e047a11f593c3d0eb550b)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * fileno)`            | Query the selected file on the USB storage device.
`public inline static int `[`dfplayer_get_fileno_sdcard`](#group__drivers__dfplayer_1ga4506c772075aa3ecc853ec04fc0e21b5)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * fileno)`            | Query the selected file on the SD card.
`public inline static int `[`dfplayer_get_fileno_flash`](#group__drivers__dfplayer_1gaa6e43104a799d0ef89bed87d996067b4)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * fileno)`            | Query the selected file on the NOR flash.
`public inline static `[`dfplayer_file_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structdfplayer__file__t)` `[`dfplayer_get_played_file`](#group__drivers__dfplayer_1gab74718a2cb9f578442e41496f0f4c001)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)`            | Get the currently played file and the used naming scheme.
`public inline static int `[`dfplayer_source_set_contains`](#group__drivers__dfplayer_1gaf138cf591175e4009c07f724ae92ed57)`(`[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` set,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)`            | Check if the given source set contains the given source.
`public inline static void `[`dfplayer_source_set_add`](#group__drivers__dfplayer_1gafd92283756a329a3541abedc356b9e6e)`(`[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` * set,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)`            | Add the given source to the given source set.
`public inline static void `[`dfplayer_source_set_rm`](#group__drivers__dfplayer_1ga4370a39b42fe7ef432413889631e80d9)`(`[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` * set,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)`            | Remove the given source to the given source set.

## Members

#### `define `[`DFPLAYER_WAIT_MS`](#group__drivers__dfplayer_1ga87dffa3a73a09ef4834b7f72a7b0b699) 

The number of milliseconds to wait after receiving playback of file has completed before starting playback of the next file.

#### `public int `[`dfplayer_init`](#group__drivers__dfplayer_1ga996398d9f335622e55bd498c239ac7c2)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,const `[`dfplayer_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structdfplayer__params__t)` * params)` 

Initialize a DFPlayer Mini device descriptor.

#### Parameters
* `dev` Device descriptor to initialized 

* `params` Connection parameters to initialize with

#### Parameters
* `0` Success 

* `-EINVAL` Invalid parameters 

* `-EIO` Failed to initialize UART interface / GPIO pin 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public `[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` `[`dfplayer_get_sources`](#group__drivers__dfplayer_1ga6d1c463734c564b842fecdb30e91720d)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Get the set of available playback sources of the given DFPlayer.

#### Parameters
* `dev` Device descriptor of the DFPlayer Mini check

#### Returns
The set of playback sources currently available 

#### Parameters
* `0` If `dev` is `NULL` or no source is available

#### `public int `[`dfplayer_set_callbacks`](#group__drivers__dfplayer_1gaa3e91624cc53b730896fc0ccc90a53a7)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_cb_done_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1aee106f5d736492899b27c06a21ee5c79)` cb_done,`[`dfplayer_cb_src_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1ad10a40a53f88666bde12ff45dc8d47c2)` cb_src)` 

Set/clear the event callbacks of the DFPlayer Mini.

#### Parameters
* `dev` Device descriptor of the DFPlayer to update 

* `cb_done` Function to call when playback of a file/track completed 

* `cb_src` Function to call when a source was inserted/ejected

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameter

Calling with `NULL` for `cb_done` and/or for `cb_src` clears the corresponding callback functions.

The callbacks are called from interrupt context

#### `public inline static int `[`dfplayer_next`](#group__drivers__dfplayer_1ga842a40926474a8d98021a4d6af8deaea)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Start playing the next song in the currently used naming scheme.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameter 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ERANGE` The next song is out of range (depending to the currently used naming scheme) 

* `-ENOENT` No such file

If previously [dfplayer_play_file](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gad69cccd95ec43deed058efecba13f602) was used to start playback of file "42/113.mp3", this call will try to start "42/114.mp3". If previously [dfplayer_play_from_mp3](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga9a6fcfbe8390fe16d51b09e7396e88ed) was used to start playback of file "MP3/1337.mp3", this call will try to start "MP3/1338.mp3".

#### `public inline static int `[`dfplayer_prev`](#group__drivers__dfplayer_1gaeeac922246b1e373e736b49b14684304)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Start playing the previous song in the currently used naming scheme.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameter 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ERANGE` The next song is out of range (depending to the currently used naming scheme) 

* `-ENOENT` No such file

If previously [dfplayer_play_file](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gad69cccd95ec43deed058efecba13f602) was used to start playback of file "42/113.mp3", this call will try to start "42/112.mp3". If previously [dfplayer_play_from_mp3](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga9a6fcfbe8390fe16d51b09e7396e88ed) was used to start playback of file "MP3/1337.mp3", this call will try to start "MP3/1336.mp3".

#### `public int `[`dfplayer_step`](#group__drivers__dfplayer_1ga3ca71e1427ef41c9dcd455c2ba97206e)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,int step)` 

Step forward/backward following the currently used naming scheme.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `step` Steps to take (negative for previous files)

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameter 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ERANGE` The next song is out of range (depending to the currently used naming scheme) 

* `-ENOENT` No such file

Calling with a value of `1` for `step` is equivalent to [dfplayer_next](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1ga842a40926474a8d98021a4d6af8deaea), calling with a value of `-1` for `step` is equivalent to [dfplayer_prev](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__dfplayer_1gaeeac922246b1e373e736b49b14684304). A value of `0` will restart the currently played song

#### `public inline static int `[`dfplayer_set_volume`](#group__drivers__dfplayer_1gafd52e95c1dc5d12de374c39fd3d23ae2)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t volume)` 

Sets the volume to the given value.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `volume` Volume to set (max 30)

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

If `volume` is greater than the maximum allowed volume of 30, 30 will be send instead.

#### `public inline static int `[`dfplayer_set_equalizer`](#group__drivers__dfplayer_1ga84569e72c774f408df7183ad6f7f8dff)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_eq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1ac5fcd5c1a12de93e38e918f9c97bd688)` equalizer)` 

Apply the given equalizer setting.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `equalizer` The equalizer setting to apply

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_set_source`](#group__drivers__dfplayer_1gaa1c8af3cba1d7f99c0ef78743381eaac)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)` 

Apply the given source.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `src` The source to use for playback

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_enter_standby`](#group__drivers__dfplayer_1ga0bd73f77728bbb24b3685b545755b585)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Enter standby mode.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_exit_standby`](#group__drivers__dfplayer_1gad0c7e1ac5544343be724d107b320fc0d)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Exit standby mode.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_play`](#group__drivers__dfplayer_1gabf2f035849e8cc1fab0d082588b0a53c)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Start/resume playing.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameter 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_pause`](#group__drivers__dfplayer_1ga8e575cc5a4aef85fc80e58bdd27b9454)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Pause the playback.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameter 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public int `[`dfplayer_play_file`](#group__drivers__dfplayer_1gad69cccd95ec43deed058efecba13f602)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t folder,uint8_t file)` 

Start playing the specified file in the specified folder.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `folder` Number of the folder 

* `file` Number of the file

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters (see precondition) 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ENOENT` Specified file and/or folder does not exist

`0 < folder <= 100` and `file > 0`

E.g. when called with `folder` set to `9` and `file` set to `42`, the file `"09/042.mp3"` is played. Thus, the folder and file names need to follow a specific naming convention in order to be selectable with this function.

#### `public int `[`dfplayer_play_from_mp3`](#group__drivers__dfplayer_1ga9a6fcfbe8390fe16d51b09e7396e88ed)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t number)` 

Start playing the specified number in the MP3 folder.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `number` Number of the file in the folder `"MP3"` to play

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters (see precondition) 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ENOENT` Specified number does not exist

`0 < number <= 9999`

E.g. when called with `number` set to `42`, the file `"MP3/0042.mp3"` is played. Thus, the folder and file names need to follow a specific naming convention in order to be selectable with this function.

#### `public int `[`dfplayer_play_from_advert`](#group__drivers__dfplayer_1ga554e800f891f48d763fdbff557fa0c86)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t number)` 

Start playing the specified number in the ADVERT folder.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `number` Number of the number in the folder `"ADVERT"` to play

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters (see precondition) 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ENOENT` Specified number does not exist

`0 < number <= 9999`

The playback is only started when the DFPlayer is currently playing a non-advert file. The current playback is paused, the advert-file is played, and the previous playback is resumed afterwards 

While this feature was obviously added to allow playing advertisements, this function was provided in the best hope it is not used this way.

E.g. when called with `number` set to `42`, the file `"ADVERT/0042.mp3"` is played. Thus, the folder and file names need to follow a specific naming convention in order to be selectable with this function.

The most obvious use (apart for advertisements `:-/`) is to use it for audible feedback to control commands. E.g. when the user changes the volume, a short "boing" sound could be played. That would allow the user to perceive the configured volume, even if currently played song is silent while configuring the volume.

#### `public inline static int `[`dfplayer_stop_advert`](#group__drivers__dfplayer_1ga3a2507adc4c2c0b1944baa345c48e3a3)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Stop playing a file from the ADVERT folder and resume previous playback.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters (see precondition) 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_repeat_folder`](#group__drivers__dfplayer_1ga4c57b66fbb3b42ee4241fee17e3f93cd)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t folder)` 

Start playing and repeating the specified folder.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `folder` Number of the folder to play and repeat

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters (see precondition) 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ENOENT` Specified file and/or folder does not exist

`0 < folder <= 100` and `file > 0`

#### `public inline static int `[`dfplayer_shuffle_all`](#group__drivers__dfplayer_1ga04d62731219ada06e9d8fe529495ad97)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Launch shuffle playback of all files.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters (see precondition) 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ENOENT` Specified file and/or folder does not exist

Even files in the `"ADVERT"` folder are played

#### `public inline static int `[`dfplayer_repeat`](#group__drivers__dfplayer_1gacfd380e12beeb27e7fe1228b0d5befde)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,bool repeat)` 

Enable or disable repeat playback.

#### Parameters
* `dev` Device descriptor of the DFPlayer to control 

* `repeat` Enable repeat playback?

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters (see precondition) 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out 

* `-ENOENT` Specified file and/or folder does not exist

#### `public int `[`dfplayer_get_state`](#group__drivers__dfplayer_1ga4f334fe3f7c231bf22d164fb1abccae5)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_state_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af375b5e10d4062d3724acb1d05243b9d)` * state)` 

Query the state of the DFPlayer Mini.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `state` The state will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

This function will work best when the busy pin is connected and and configured, as this can avoid UART communication if the device is currently playing. (Remember that UART communication results in audible glitches during playback...)

#### `public inline static int `[`dfplayer_get_volume`](#group__drivers__dfplayer_1ga5cdf34af22ec3bfd6205e4a8068b9089)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint8_t * volume)` 

Query the current volume of the DFPlayer Mini.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `volume` The volume will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_get_equalizer`](#group__drivers__dfplayer_1ga31d8e2692906d4c09834c9eafdb34725)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_eq_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1ac5fcd5c1a12de93e38e918f9c97bd688)` * equalizer)` 

Query the current equalizer setting of the DFPlayer Mini.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `equalizer` The equalizer setting will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_get_mode`](#group__drivers__dfplayer_1ga417efff86f73c00d47f50d00c84ee875)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,`[`dfplayer_mode_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a418e583e33fe86ce7d5313542f8ed5b8)` * mode)` 

Query the current playback mode of the DFPlayer Mini.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `mode` The playback mode will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_get_version`](#group__drivers__dfplayer_1ga9a4d81aed60d1cf21ae7d4e6f5ead754)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * version)` 

Query the software version running on the DFPlayer Mini.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `version` The software version will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_files_usb`](#group__drivers__dfplayer_1ga312d1f207135f5421052396a31dea7a6)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * files)` 

Query the number of files on the USB storage device.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `files` The number of files will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_files_sdcard`](#group__drivers__dfplayer_1gaf2e655d541a0bbba663ff144c04d5234)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * files)` 

Query the number of files on the SD card.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `files` The number of files will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_files_flash`](#group__drivers__dfplayer_1ga1722146af40230534fa42b92c84b10d4)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * files)` 

Query the number of files on the NOR flash.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `files` The number of files will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_get_fileno_usb`](#group__drivers__dfplayer_1ga9bc21b0f9b8e047a11f593c3d0eb550b)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * fileno)` 

Query the selected file on the USB storage device.

The file number refers to the internal file system order

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `fileno` The selected file will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_get_fileno_sdcard`](#group__drivers__dfplayer_1ga4506c772075aa3ecc853ec04fc0e21b5)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * fileno)` 

Query the selected file on the SD card.

The file number refers to the internal file system order

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `fileno` The selected file will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static int `[`dfplayer_get_fileno_flash`](#group__drivers__dfplayer_1gaa6e43104a799d0ef89bed87d996067b4)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev,uint16_t * fileno)` 

Query the selected file on the NOR flash.

The file number refers to the internal file system order

#### Parameters
* `dev` Device descriptor of the DFPlayer to query 

* `fileno` The selected file will be stored here

#### Parameters
* `0` Success 

* `-EINVAL` Called with invalid parameters 

* `-EIO` Communication with the DFPlayer Mini failed 

* `-EAGAIN` DFPlayer responded with error "Device busy" 

* `-ETIMEDOUT` Response of the DFPlayer timed out

#### `public inline static `[`dfplayer_file_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#structdfplayer__file__t)` `[`dfplayer_get_played_file`](#group__drivers__dfplayer_1gab74718a2cb9f578442e41496f0f4c001)`(`[`dfplayer_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1af80bc2d8faaa22691519c8c15a1799cc)` * dev)` 

Get the currently played file and the used naming scheme.

#### Parameters
* `dev` Device descriptor of the DFPlayer to query

#### Returns
The currently played file and the used naming scheme

#### `public inline static int `[`dfplayer_source_set_contains`](#group__drivers__dfplayer_1gaf138cf591175e4009c07f724ae92ed57)`(`[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` set,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)` 

Check if the given source set contains the given source.

#### Parameters
* `set` Set of sources to check 

* `src` Source to check for

#### Parameters
* `0` `src` is ***NOT*** part of `set`

* `1` `src`***IS*** part of `set`

#### `public inline static void `[`dfplayer_source_set_add`](#group__drivers__dfplayer_1gafd92283756a329a3541abedc356b9e6e)`(`[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` * set,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)` 

Add the given source to the given source set.

#### Parameters
* `set` Set of sources to add source to 

* `src` Source to add

This function is idempotent

#### `public inline static void `[`dfplayer_source_set_rm`](#group__drivers__dfplayer_1ga4370a39b42fe7ef432413889631e80d9)`(`[`dfplayer_source_set_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a79cb72c1e7a23d9925e0163b9d39d7f2)` * set,`[`dfplayer_source_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#dfplayer__types_8h_1a698fade6f6f026b56d19917048960521)` src)` 

Remove the given source to the given source set.

#### Parameters
* `set` Set of sources to remove the source from 

* `src` Source to remove

This function is idempotent

