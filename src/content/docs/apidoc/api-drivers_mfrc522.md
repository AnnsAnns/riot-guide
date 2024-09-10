---
title: api-drivers_mfrc522.md
description: api-drivers_mfrc522.md
---
# group `drivers_mfrc522` 

Device driver for the NXP MFRC522 RFID controller.

With this driver MIFARE and NTAG tags/keys can be read and written contactless.

Supported features:

* Communication (Crypto1) with MIFARE Classic (1k, 4k, Mini)

* Communication (Crypto1) with MIFARE Classic compatible PICCs

* Firmware self check of MFRC522

* Set the UID, write to sector 0, and unbrick Chinese UID changeable MIFARE cards

Partially supported features:

* Communication with MIFARE Ultralight

* Other PICCs (Ntag216)

Data sheet available here: [https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf](https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf)

This driver is a port of a driver originally written for Arduino, you can find the original here: [https://github.com/miguelbalboa/rfid](https://github.com/miguelbalboa/rfid) (currently based on commit 0a568b45baf1852883630e90ea125786e88f5322)

Hendrik van Essen [hendrik.ve@fu-berlin.de](mailto:hendrik.ve@fu-berlin.de)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`MFRC522_UID_MAX_SIZE`](#group__drivers__mfrc522_1ga016ce3c66512405b5b0f3d5039782bcb)            | Maximum size for uid byte array.
`define `[`MFRC522_MF_ACK`](#group__drivers__mfrc522_1gaab71e9ae567b0ce37fc780f28e92a439)            | The MIFARE Classic uses a 4 bit ACK/NAK.
`define `[`MFRC522_MF_KEY_SIZE`](#group__drivers__mfrc522_1ga8435582d23e115b2f9c68f3cbba2880f)            | A Mifare Crypto1 key is 6 bytes.
`enum `[`mfrc522_picc_type_t`](#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4)            | PICC types.
`public void `[`mfrc522_pcd_set_register_bitmask`](#group__drivers__mfrc522_1gae88e704c1baca8b42a37ea5c4da11efd)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_register_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1abf9e5478d91cd52534962e2be981069e)` reg,uint8_t mask)`            | Sets the bits given in mask in register reg.
`public void `[`mfrc522_pcd_clear_register_bitmask`](#group__drivers__mfrc522_1ga82a4ed520523bfab0cbb03093494e9e9)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_register_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1abf9e5478d91cd52534962e2be981069e)` reg,uint8_t mask)`            | Clears the bits given in mask from register reg.
`public int `[`mfrc522_pcd_calculate_crc`](#group__drivers__mfrc522_1gaf4d5f10591dc1cbb6a85dfe3f466b0e1)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * data,uint8_t length,uint8_t * result)`            | Use the CRC coprocessor in the MFRC522 to calculate a CRC_A.
`public int `[`mfrc522_pcd_init`](#group__drivers__mfrc522_1ga2bf3fbf93f06d481c5dc3721d09fc089)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const `[`mfrc522_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__params__t)` * params)`            | Initialization.
`public void `[`mfrc522_pcd_reset`](#group__drivers__mfrc522_1ga6f293c33f06b4c7627c10bda1d25209c)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Performs a soft reset on the MFRC522 chip and waits for it to be ready again.
`public void `[`mfrc522_pcd_antenna_on`](#group__drivers__mfrc522_1gad05b7fab52868dc979048fcd300168ad)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Turns the antenna on by enabling pins TX1 and TX2.
`public void `[`mfrc522_pcd_antenna_off`](#group__drivers__mfrc522_1ga13602aa60c6f6dbf294a4c3ab3cbec23)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Turns the antenna off by disabling pins TX1 and TX2.
`public `[`mfrc522_pcd_rx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1ac90ea4e202c15a1dfc4e53d4409373bb)` `[`mfrc522_pcd_get_antenna_gain`](#group__drivers__mfrc522_1ga51d0152f001dab967c4ea8d176097a13)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Get the current MFRC522 receiver gain.
`public void `[`mfrc522_pcd_set_antenna_gain`](#group__drivers__mfrc522_1gae127381e4436bdd16b54cdf964c51c5a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_rx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1ac90ea4e202c15a1dfc4e53d4409373bb)` rx_gain)`            | Set the MFRC522 receiver gain.
`public void `[`mfrc522_pcd_soft_power_down`](#group__drivers__mfrc522_1ga8952088c0080c4a947853ac29e29cd07)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Set the MFRC522 to soft power-down mode.
`public void `[`mfrc522_pcd_soft_power_up`](#group__drivers__mfrc522_1ga32ee8a9d114cfde21b8252a64a34a1ad)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Set the MFRC522 to leave soft power-down mode.
`public int `[`mfrc522_pcd_transceive_data`](#group__drivers__mfrc522_1ga1dbc1ddda667fe66a59ded1d59410088)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * send_data,uint8_t send_len,uint8_t * back_data,uint8_t * back_len,uint8_t * valid_bits,uint8_t rx_align,bool check_crc)`            | Executes MFRC522_CMD_TRANSCEIVE.
`public int `[`mfrc522_pcd_communicate_with_picc`](#group__drivers__mfrc522_1ga5bcdaf5761f5c237973caddcf2dddc2a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1a2428cbbbebd30305493d387c60e0a58c)` command,uint8_t wait_irq,const uint8_t * send_data,uint8_t send_len,uint8_t * back_data,uint8_t * back_len,uint8_t * valid_bits,uint8_t rx_align,bool check_crc)`            | Transfers data to MFRC522's FIFO, executes a command, waits for completion and transfers data back from the FIFO.
`public int `[`mfrc522_picc_request_a`](#group__drivers__mfrc522_1gae3750565c51431cc2ec898cadc4e7a94)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t * buffer_atqa,uint8_t * buffer_size)`            | Transmits REQA, Type A.
`public int `[`mfrc522_picc_wakeup_a`](#group__drivers__mfrc522_1ga777c18185cf8d679633d7966e8fa7d45)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t * buffer_atqa,uint8_t * buffer_size)`            | Transmits WUPA, Type A.
`public int `[`mfrc522_picc_reqa_or_wupa`](#group__drivers__mfrc522_1ga8610819376a07184ca10ed857271602e)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_picc_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1a38055f6f904b626f6b42b9a65754179c)` command,uint8_t * buffer_atqa,uint8_t * buffer_size)`            | Transmits REQA (Type A) or WUPA (Type A) commands.
`public int `[`mfrc522_picc_select`](#group__drivers__mfrc522_1gae99cef019d906fbdd3f0d5cc36ba8614)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,uint8_t valid_bits)`            | Transmits SELECT/ANTICOLLISION commands to select a single PICC.
`public int `[`mfrc522_picc_halt_a`](#group__drivers__mfrc522_1gaa1d11fe896bd4a2bb54828192cce3d57)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Instructs a PICC in state ACTIVE(*) to go to state HALT.
`public int `[`mfrc522_pcd_authenticate`](#group__drivers__mfrc522_1gaaccc7d2f773269ff1e8a1b8b84c6255e)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_picc_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1a38055f6f904b626f6b42b9a65754179c)` command,uint8_t block_addr,const `[`mfrc522_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__mifare__key__t)` * key,const `[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)`            | Executes the MFRC522 MFAuthent command.
`public void `[`mfrc522_pcd_stop_crypto1`](#group__drivers__mfrc522_1ga91157640715039ff621a2ca45dea634a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Used to exit the PCD from its authenticated state.
`public int `[`mfrc522_mifare_read`](#group__drivers__mfrc522_1ga93eb1ba17298d423c3e3377d3fe5169c)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,uint8_t * buffer,uint8_t * buffer_size)`            | Read 16 bytes (+ 2 bytes CRC_A) from the active PICC.
`public int `[`mfrc522_mifare_write`](#group__drivers__mfrc522_1ga4fc360fdac04ed584ca00bb5f114c905)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,const uint8_t * buffer,uint8_t buffer_size)`            | Write 16 bytes to the active PICC.
`public int `[`mfrc522_mifare_ultralight_write`](#group__drivers__mfrc522_1ga0a9df2c7e7e2cca3509be2115c29a4ca)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t page,const uint8_t * buffer)`            | Write a 4 byte page to the active MIFARE Ultralight PICC.
`public int `[`mfrc522_mifare_decrement`](#group__drivers__mfrc522_1ga9486e7850ac4e55e49ef2b06c61d6d34)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t delta)`            | Subtract the operand from the value of the addressed block, and store the result in the Transfer Buffer.
`public int `[`mfrc522_mifare_increment`](#group__drivers__mfrc522_1ga71b32a01fd06126b4e69eb480105a334)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t delta)`            | Add the operand to the value of the addressed block, and store the result in the Transfer Buffer.
`public int `[`mfrc522_mifare_restore`](#group__drivers__mfrc522_1ga8f068ff4f4a767e27377ea29edb3c51a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr)`            | Copies the value of the addressed block into the Transfer Buffer.
`public int `[`mfrc522_mifare_transfer`](#group__drivers__mfrc522_1ga425fc11f981ad253a0cc2b63fe79e41c)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr)`            | Write the value from the Transfer Buffer into destination block.
`public int `[`mfrc522_mifare_get_value`](#group__drivers__mfrc522_1ga7b613640e59d100c0adce970d719a643)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t * value)`            | Helper routine to read the current value from a Value Block.
`public int `[`mfrc522_mifare_set_value`](#group__drivers__mfrc522_1ga55179c88daf10c79d637f4dcfeb81344)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t value)`            | Helper routine to write a specific value into a Value Block.
`public int `[`mfrc522_pcd_ntag216_auth`](#group__drivers__mfrc522_1gad151ef47d2f2d0a170940c13593c8e56)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * password,uint8_t p_ack)`            | Authenticate with a NTAG216.
`public int `[`mfrc522_pcd_mifare_transceive`](#group__drivers__mfrc522_1ga9543484f6aed8109ba53e88b1881de00)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * send_data,uint8_t send_len,bool accept_timeout)`            | Wrapper for MIFARE protocol communication.
`public `[`mfrc522_picc_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4)` `[`mfrc522_picc_get_type`](#group__drivers__mfrc522_1gac082d5d29416e660ac117bada5311e44)`(uint8_t sak)`            | Translates the SAK (Select Acknowledge) to a PICC type.
`public const char * `[`mfrc522_picc_get_type_string`](#group__drivers__mfrc522_1ga58dfb62498e9d34af12d5c6e0bba5574)`(`[`mfrc522_picc_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4)` picc_type)`            | Returns the name for the PICC type.
`public void `[`mfrc522_mifare_set_access_bits`](#group__drivers__mfrc522_1gabdf548dbc90a211e53364a2d379c5992)`(uint8_t * access_bit_buffer,uint8_t g0,uint8_t g1,uint8_t g2,uint8_t g3)`            | Calculates the bit pattern needed for the specified access bits.
`public int `[`mfrc522_mifare_open_uid_backdoor`](#group__drivers__mfrc522_1ga274d7471dbe8025f1a64fb53c62044d5)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Performs the "magic sequence" needed to get Chinese UID changeable Mifare cards to allow writing to sector 0, where the card UID is stored.
`public int `[`mfrc522_mifare_set_uid`](#group__drivers__mfrc522_1gaa991a89437c7a388a8861638418643d1)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,const uint8_t * new_uid,uint8_t new_uid_size)`            | Read entire block 0, including all manufacturer data, and overwrites that block with the new UID, a freshly calculated BCC, and the original manufacturer data.
`public int `[`mfrc522_mifare_unbrick_uid_sector`](#group__drivers__mfrc522_1ga59dbf1d7261091d042981593988a86db)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Reset entire sector 0 to zeroes, so the card can be read again by readers.
`public bool `[`mfrc522_picc_is_new_card_present`](#group__drivers__mfrc522_1gac7836a121808f62740c12f52bfeb82a8)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Checks whether a new card could be detected.
`public int `[`mfrc522_picc_read_card_serial`](#group__drivers__mfrc522_1ga6d4c760531d7d1eb79974caf74a7da19)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)`            | Simple wrapper around [mfrc522_picc_select()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1gae99cef019d906fbdd3f0d5cc36ba8614)
`public void `[`mfrc522_pcd_dump_version_to_serial`](#group__drivers__mfrc522_1gaa65922fe7dbd5c31b9cb33305b5c93c6)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Dump debug info about the connected PCD to stdout.
`public void `[`mfrc522_picc_dump_to_serial`](#group__drivers__mfrc522_1ga9e7fee0db62c32a0f0c015239206688d)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)`            | Dump debug info about the selected PICC to stdout.
`public void `[`mfrc522_picc_dump_details_to_serial`](#group__drivers__mfrc522_1gad3d17752e4bcf7e6a732df90dc14f659)`(`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)`            | Dump card info (UID, SAK, Type) about the selected PICC to stdout.
`public void `[`mfrc522_picc_dump_mifare_classic_to_serial`](#group__drivers__mfrc522_1ga5138229a9f4723ff4aeb4302611006a5)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,`[`mfrc522_picc_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4)` picc_type,`[`mfrc522_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__mifare__key__t)` * key)`            | Dump memory contents of a MIFARE Classic PICC to stdout.
`public void `[`mfrc522_picc_dump_mifare_classic_sector_to_serial`](#group__drivers__mfrc522_1gac0f64a1b45e018164aab646b9c8be8a9)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,`[`mfrc522_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__mifare__key__t)` * key,uint8_t sector)`            | Dump memory contents of a sector of a MIFARE Classic PICC to stdout.
`public void `[`mfrc522_picc_dump_mifare_ultralight_to_serial`](#group__drivers__mfrc522_1gaa344e4f5db65961677feae076291efc4)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Dump memory contents of a MIFARE Ultralight PICC to stdout.
`public bool `[`mfrc522_pcd_perform_self_test`](#group__drivers__mfrc522_1gab810713a04a1555c1a2b9356bd22377b)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)`            | Perform a self-test of the MFRC522.
`struct `[`mfrc522_params_t`](#structmfrc522__params__t) | MFRC522 device initialization parameters.
`struct `[`mfrc522_t`](#structmfrc522__t) | MFRC522 device data structure type.
`struct `[`mfrc522_uid_t`](#structmfrc522__uid__t) | A struct used for passing the UID of a PICC.
`struct `[`mfrc522_mifare_key_t`](#structmfrc522__mifare__key__t) | A struct used for passing a MIFARE Crypto1 key.

## Members

#### `define `[`MFRC522_UID_MAX_SIZE`](#group__drivers__mfrc522_1ga016ce3c66512405b5b0f3d5039782bcb) 

Maximum size for uid byte array.

#### `define `[`MFRC522_MF_ACK`](#group__drivers__mfrc522_1gaab71e9ae567b0ce37fc780f28e92a439) 

The MIFARE Classic uses a 4 bit ACK/NAK.

Any other value than 0xA is NAK

#### `define `[`MFRC522_MF_KEY_SIZE`](#group__drivers__mfrc522_1ga8435582d23e115b2f9c68f3cbba2880f) 

A Mifare Crypto1 key is 6 bytes.

#### `enum `[`mfrc522_picc_type_t`](#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
MFRC522_PICC_TYPE_ISO_14443_4            | PICC compliant with ISO/IEC 14443-4.
MFRC522_PICC_TYPE_ISO_18092            | PICC compliant with ISO/IEC 18092 (NFC)
MFRC522_PICC_TYPE_MIFARE_MINI            | MIFARE Classic protocol, 320 bytes.
MFRC522_PICC_TYPE_MIFARE_1K            | MIFARE Classic protocol, 1KB.
MFRC522_PICC_TYPE_MIFARE_4K            | MIFARE Classic protocol, 4KB.
MFRC522_PICC_TYPE_MIFARE_UL            | MIFARE Ultralight or Ultralight C.
MFRC522_PICC_TYPE_MIFARE_PLUS            | MIFARE Plus.
MFRC522_PICC_TYPE_MIFARE_DESFIRE            | MIFARE DESFire.
MFRC522_PICC_TYPE_TNP3XXX            | Only mentioned in NXP AN 10833 MIFARE Type Identification Procedure.
MFRC522_PICC_TYPE_NOT_COMPLETE            | SAK indicates UID is not complete.
MFRC522_PICC_TYPE_UNKNOWN            | unknown type

PICC types.

#### `public void `[`mfrc522_pcd_set_register_bitmask`](#group__drivers__mfrc522_1gae88e704c1baca8b42a37ea5c4da11efd)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_register_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1abf9e5478d91cd52534962e2be981069e)` reg,uint8_t mask)` 

Sets the bits given in mask in register reg.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `reg` Register to write to 

* `mask` Bitmask with the bits to set

#### `public void `[`mfrc522_pcd_clear_register_bitmask`](#group__drivers__mfrc522_1ga82a4ed520523bfab0cbb03093494e9e9)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_register_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1abf9e5478d91cd52534962e2be981069e)` reg,uint8_t mask)` 

Clears the bits given in mask from register reg.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `reg` Register to write to 

* `mask` Bitmask with the bits to clear

#### `public int `[`mfrc522_pcd_calculate_crc`](#group__drivers__mfrc522_1gaf4d5f10591dc1cbb6a85dfe3f466b0e1)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * data,uint8_t length,uint8_t * result)` 

Use the CRC coprocessor in the MFRC522 to calculate a CRC_A.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `data` Data to transfer to the FIFO for CRC calculation 

* `length` Number of bytes to transfer 

* `result` Result buffer. Result is written to result[0..1], low byte first.

#### Parameters
* `0` on success 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_pcd_init`](#group__drivers__mfrc522_1ga2bf3fbf93f06d481c5dc3721d09fc089)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const `[`mfrc522_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__params__t)` * params)` 

Initialization.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `params` Parameters for device initialization

#### Parameters
* `0` Success 

* `-EINVAL` Invalid CS pin/line 

* `-ENXIO` Invalid device

#### `public void `[`mfrc522_pcd_reset`](#group__drivers__mfrc522_1ga6f293c33f06b4c7627c10bda1d25209c)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Performs a soft reset on the MFRC522 chip and waits for it to be ready again.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public void `[`mfrc522_pcd_antenna_on`](#group__drivers__mfrc522_1gad05b7fab52868dc979048fcd300168ad)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Turns the antenna on by enabling pins TX1 and TX2.

After a reset these pins are disabled.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public void `[`mfrc522_pcd_antenna_off`](#group__drivers__mfrc522_1ga13602aa60c6f6dbf294a4c3ab3cbec23)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Turns the antenna off by disabling pins TX1 and TX2.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public `[`mfrc522_pcd_rx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1ac90ea4e202c15a1dfc4e53d4409373bb)` `[`mfrc522_pcd_get_antenna_gain`](#group__drivers__mfrc522_1ga51d0152f001dab967c4ea8d176097a13)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Get the current MFRC522 receiver gain.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### Returns
Receiver gain

#### `public void `[`mfrc522_pcd_set_antenna_gain`](#group__drivers__mfrc522_1gae127381e4436bdd16b54cdf964c51c5a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_rx_gain_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1ac90ea4e202c15a1dfc4e53d4409373bb)` rx_gain)` 

Set the MFRC522 receiver gain.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `rx_gain` Antenna gain

#### `public void `[`mfrc522_pcd_soft_power_down`](#group__drivers__mfrc522_1ga8952088c0080c4a947853ac29e29cd07)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Set the MFRC522 to soft power-down mode.

Only soft power down mode is available through software.

Calling any other function that uses MFRC522_REG_COMMAND will disable soft power down mode! For more details about power control, refer to the datasheet - page 33 (8.6)

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public void `[`mfrc522_pcd_soft_power_up`](#group__drivers__mfrc522_1ga32ee8a9d114cfde21b8252a64a34a1ad)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Set the MFRC522 to leave soft power-down mode.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public int `[`mfrc522_pcd_transceive_data`](#group__drivers__mfrc522_1ga1dbc1ddda667fe66a59ded1d59410088)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * send_data,uint8_t send_len,uint8_t * back_data,uint8_t * back_len,uint8_t * valid_bits,uint8_t rx_align,bool check_crc)` 

Executes MFRC522_CMD_TRANSCEIVE.

CRC validation can only be done if back_data and back_len are specified

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `send_data` Data to transfer to the FIFO 

* `send_len` Number of bytes to transfer to the FIFO 

* `back_data` Buffer if data should be read back after executing the command, otherwise NULL 

* `back_len` Max number of bytes to write to *back_data. Returns number of bytes returned. 

* `valid_bits` Number of valid bits in the last byte. 0 for 8 valid bits 

* `rx_align` Defines the bit position in back_data[0] for the first bit received 

* `check_crc` If true, the last two bytes of the response are assumed to be a CRC_A that must be validated

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_pcd_communicate_with_picc`](#group__drivers__mfrc522_1ga5bcdaf5761f5c237973caddcf2dddc2a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_pcd_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1a2428cbbbebd30305493d387c60e0a58c)` command,uint8_t wait_irq,const uint8_t * send_data,uint8_t send_len,uint8_t * back_data,uint8_t * back_len,uint8_t * valid_bits,uint8_t rx_align,bool check_crc)` 

Transfers data to MFRC522's FIFO, executes a command, waits for completion and transfers data back from the FIFO.

CRC validation can only be done if back_data and back_len are specified

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `command` The command to execute 

* `wait_irq` The bits in the ComIrqReg register that signals successful completion of the command 

* `send_data` Data to transfer to the FIFO 

* `send_len` Number of bytes to transfer to the FIFO 

* `back_data` Buffer if data should be read back after executing the command, otherwise NULL 

* `back_len` Max number of bytes to write to *back_data. Returns number of bytes returned. 

* `valid_bits` Number of valid bits in the last byte. 0 for 8 valid bits. 

* `rx_align` Defines the bit position in back_data[0] for the first bit received 

* `check_crc` True => The last two bytes of the response is assumed to be a CRC_A that must be validated

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_picc_request_a`](#group__drivers__mfrc522_1gae3750565c51431cc2ec898cadc4e7a94)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t * buffer_atqa,uint8_t * buffer_size)` 

Transmits REQA, Type A.

Invites PICCs in state IDLE to go to READY and prepare for anti-collision or selection. 7 bit frame.

When two PICCs are in the field at the same time we often get -ETIMEDOUT - probably due do bad antenna design.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `buffer_atqa` Buffer to store the ATQA in 

* `buffer_size` Buffer size, at least two bytes. Also number of bytes returned on success.

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_picc_wakeup_a`](#group__drivers__mfrc522_1ga777c18185cf8d679633d7966e8fa7d45)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t * buffer_atqa,uint8_t * buffer_size)` 

Transmits WUPA, Type A.

Invites PICCs in state IDLE and HALT to go to READY(*) and prepare for anti-collision or selection. 7 bit frame.

When two PICCs are in the field at the same time we often get -ETIMEDOUT - probably due do bad antenna design.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `buffer_atqa` Buffer to store the ATQA in 

* `buffer_size` Buffer size, at least two bytes. Also number of bytes returned on success.

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_picc_reqa_or_wupa`](#group__drivers__mfrc522_1ga8610819376a07184ca10ed857271602e)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_picc_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1a38055f6f904b626f6b42b9a65754179c)` command,uint8_t * buffer_atqa,uint8_t * buffer_size)` 

Transmits REQA (Type A) or WUPA (Type A) commands.

When two PICCs are in the field at the same time we often get -ETIMEDOUT - probably due do bad antenna design.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `command` Command to send - MFRC522_PICC_CMD_ISO_14443_REQA or MFRC522_PICC_CMD_ISO_14443_WUPA 

* `buffer_atqa` Buffer to store the ATQA in 

* `buffer_size` Buffer size, at least two bytes. Also number of bytes returned on success.

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` if command was neither MFRC522_PICC_CMD_ISO_14443_REQA nor MFRC522_PICC_CMD_ISO_14443_WUPA 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_picc_select`](#group__drivers__mfrc522_1gae99cef019d906fbdd3f0d5cc36ba8614)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,uint8_t valid_bits)` 

Transmits SELECT/ANTICOLLISION commands to select a single PICC.

Before calling this function the PICCs must be placed in the READY(*) state by calling [mfrc522_picc_request_a()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1gae3750565c51431cc2ec898cadc4e7a94) or [mfrc522_picc_wakeup_a()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga777c18185cf8d679633d7966e8fa7d45). On success:

* The chosen PICC is in state ACTIVE(*) and all other PICCs have returned to state IDLE/HALT. (Figure 7 of the ISO/IEC 14443-3 draft.)

* The UID size and value of the chosen PICC is returned in *uid along with the SAK.

A PICC UID consists of 4, 7 or 10 bytes. Only 4 bytes can be specified in a SELECT command, so for the longer UIDs two or three iterations are used:

UID size Number of UID bytes Cascade levels Example of PICC ======== =================== ============== =============== single 4 1 MIFARE Classic double 7 2 MIFARE Ultralight triple 10 3 Not currently in use?

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `uid` Normally output, but can also be used to supply a known UID 

* `valid_bits` Number of known UID bits supplied in *uid. Normally 0. If set you must also supply uid->size.

#### Parameters
* `0` on success 

* `-ECANCELED` on internal error 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_picc_halt_a`](#group__drivers__mfrc522_1gaa1d11fe896bd4a2bb54828192cce3d57)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Instructs a PICC in state ACTIVE(*) to go to state HALT.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### Parameters
* `0` on success 

* `-EIO` on communication error 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_pcd_authenticate`](#group__drivers__mfrc522_1gaaccc7d2f773269ff1e8a1b8b84c6255e)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_picc_command_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#mfrc522__regs_8h_1a38055f6f904b626f6b42b9a65754179c)` command,uint8_t block_addr,const `[`mfrc522_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__mifare__key__t)` * key,const `[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)` 

Executes the MFRC522 MFAuthent command.

This command manages MIFARE authentication to enable a secure communication to any MIFARE Mini, MIFARE 1K and MIFARE 4K card. The authentication is described in the MFRC522 datasheet section 10.3.1.9 and [http://www.nxp.com/documents/data_sheet/MF1S503x.pdf](http://www.nxp.com/documents/data_sheet/MF1S503x.pdf) section 10.1. For use with MIFARE Classic PICCs. The PICC must be selected - i.e. in state ACTIVE(*) - before calling this function. Remember to call [mfrc522_pcd_stop_crypto1()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga91157640715039ff621a2ca45dea634a) after communicating with the authenticated PICC - otherwise no new communications can start.

All keys are set to FFFFFFFFFFFFh at chip delivery.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `command` MFRC522_PICC_CMD_MF_AUTH_KEY_A or PICC_CMD_MF_AUTH_KEY_B 

* `block_addr` Block number. See numbering in the comments in the .h file. 

* `key` Crypteo1 key to use (6 bytes) 

* `uid` PICC's UID

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public void `[`mfrc522_pcd_stop_crypto1`](#group__drivers__mfrc522_1ga91157640715039ff621a2ca45dea634a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Used to exit the PCD from its authenticated state.

Remember to call this function after communicating with an authenticated PICC - otherwise no new communications can start.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public int `[`mfrc522_mifare_read`](#group__drivers__mfrc522_1ga93eb1ba17298d423c3e3377d3fe5169c)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,uint8_t * buffer,uint8_t * buffer_size)` 

Read 16 bytes (+ 2 bytes CRC_A) from the active PICC.

For MIFARE Classic the sector containing the block must be authenticated before calling this function.

For MIFARE Ultralight only addresses 00h to 0Fh are decoded. The MF0ICU1 returns a NAK for higher addresses. The MF0ICU1 responds to the READ command by sending 16 bytes starting from the page address defined by the command argument. For example; if block_addr is 03h then pages 03h, 04h, 05h, 06h are returned. A roll-back is implemented: If block_addr is 0Eh, then the contents of pages 0Eh, 0Fh, 00h and 01h are returned.

The buffer must be at least 18 bytes because a CRC_A is also returned. Checks the CRC_A before returning.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` MIFARE Classic: The block (0-0xff) number. MIFARE Ultralight: The first page to return data from. 

* `buffer` Buffer to store the data in 

* `buffer_size` Buffer size, at least 18 bytes. Also number of bytes returned on success.

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_mifare_write`](#group__drivers__mfrc522_1ga4fc360fdac04ed584ca00bb5f114c905)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,const uint8_t * buffer,uint8_t buffer_size)` 

Write 16 bytes to the active PICC.

For MIFARE Classic the sector containing the block must be authenticated before calling this function.

For MIFARE Ultralight the operation is called "COMPATIBILITY WRITE". Even though 16 bytes are transferred to the Ultralight PICC, only the least significant 4 bytes (bytes 0 to 3) are written to the specified address. It is recommended to set the remaining bytes 04h to 0Fh to all logic 0.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` MIFARE Classic: The block (0-0xff) number. MIFARE Ultralight: The page (2-15) to write to. 

* `buffer` The 16 bytes to write to the PICC 

* `buffer_size` Buffer size, must be at least 16 bytes. Exactly 16 bytes are written.

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_mifare_ultralight_write`](#group__drivers__mfrc522_1ga0a9df2c7e7e2cca3509be2115c29a4ca)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t page,const uint8_t * buffer)` 

Write a 4 byte page to the active MIFARE Ultralight PICC.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `page` The page (2-15) to write to 

* `buffer` The 4 bytes to write to the PICC

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_mifare_decrement`](#group__drivers__mfrc522_1ga9486e7850ac4e55e49ef2b06c61d6d34)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t delta)` 

Subtract the operand from the value of the addressed block, and store the result in the Transfer Buffer.

MIFARE Decrement subtracts the delta from the value of the addressed block, and stores the result in a volatile memory. For MIFARE Classic only. The sector containing the block must be authenticated before calling this function. Only for blocks in "value block" mode, ie with access bits [C1 C2 C3] = [110] or [001]. Use MIFARE_Transfer() to store the result in a block.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` Block (0-0xff) number 

* `delta` Number to be subtracted from the value of block block_addr

#### Parameters
* `0` on success 

* `-ECANCELED` on internal error

#### `public int `[`mfrc522_mifare_increment`](#group__drivers__mfrc522_1ga71b32a01fd06126b4e69eb480105a334)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t delta)` 

Add the operand to the value of the addressed block, and store the result in the Transfer Buffer.

MIFARE Increment adds the delta to the value of the addressed block, and stores the result in a volatile memory. For MIFARE Classic only. The sector containing the block must be authenticated before calling this function. Only for blocks in "value block" mode, ie with access bits [C1 C2 C3] = [110] or [001]. Use MIFARE_Transfer() to store the result in a block.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` Block (0-0xff) number 

* `delta` Number to be added to the value of block block_addr

#### Parameters
* `0` on success 

* `-ECANCELED` on internal error

#### `public int `[`mfrc522_mifare_restore`](#group__drivers__mfrc522_1ga8f068ff4f4a767e27377ea29edb3c51a)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr)` 

Copies the value of the addressed block into the Transfer Buffer.

MIFARE Restore copies the value of the addressed block into a volatile memory. For MIFARE Classic only. The sector containing the block must be authenticated before calling this function. Only for blocks in "value block" mode, i.e. with access bits [C1 C2 C3] = [110] or [001]. Use [mfrc522_mifare_transfer()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga425fc11f981ad253a0cc2b63fe79e41c) to store the result in a block.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` Block (0-0xff) number

#### Parameters
* `0` on success 

* `-ECANCELED` on internal error

#### `public int `[`mfrc522_mifare_transfer`](#group__drivers__mfrc522_1ga425fc11f981ad253a0cc2b63fe79e41c)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr)` 

Write the value from the Transfer Buffer into destination block.

MIFARE Transfer writes the value stored in the volatile memory into one MIFARE Classic block. For MIFARE Classic only. The sector containing the block must be authenticated before calling this function. Only for blocks in "value block" mode, ie with access bits [C1 C2 C3] = [110] or [001].

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` Block (0-0xff) number

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_mifare_get_value`](#group__drivers__mfrc522_1ga7b613640e59d100c0adce970d719a643)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t * value)` 

Helper routine to read the current value from a Value Block.

Only for MIFARE Classic and only for blocks in "value block" mode, that is with access bits [C1 C2 C3] = [110] or [001]. The sector containing the block must be authenticated before calling this function.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` Block (0x00-0xff) number 

* `value` Current value of the Value Block

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_mifare_set_value`](#group__drivers__mfrc522_1ga55179c88daf10c79d637f4dcfeb81344)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,uint8_t block_addr,int32_t value)` 

Helper routine to write a specific value into a Value Block.

Only for MIFARE Classic and only for blocks in "value block" mode, that is with access bits [C1 C2 C3] = [110] or [001]. The sector containing the block must be authenticated before calling this function.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `block_addr` Block (0x00-0xff) number 

* `value` New value of the Value Block

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_pcd_ntag216_auth`](#group__drivers__mfrc522_1gad151ef47d2f2d0a170940c13593c8e56)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * password,uint8_t p_ack)` 

Authenticate with a NTAG216.

Only for NTAG216

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `password` Password (must have a size of exactly 4 bytes) 

* `p_ack` result (must have a size of exactly 2 bytes)

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_pcd_mifare_transceive`](#group__drivers__mfrc522_1ga9543484f6aed8109ba53e88b1881de00)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,const uint8_t * send_data,uint8_t send_len,bool accept_timeout)` 

Wrapper for MIFARE protocol communication.

Adds CRC_A, executes the Transceive command and checks that the response is MFRC522_MF_ACK or a timeout.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `send_data` Data to transfer to the FIFO. Do NOT include the CRC_A. 

* `send_len` Number of bytes in send_data 

* `accept_timeout` If true, then a timeout is also a success

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public `[`mfrc522_picc_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4)` `[`mfrc522_picc_get_type`](#group__drivers__mfrc522_1gac082d5d29416e660ac117bada5311e44)`(uint8_t sak)` 

Translates the SAK (Select Acknowledge) to a PICC type.

#### Parameters
* `sak` The SAK byte returned from [mfrc522_picc_select()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1gae99cef019d906fbdd3f0d5cc36ba8614)

#### Returns
PICC type

#### `public const char * `[`mfrc522_picc_get_type_string`](#group__drivers__mfrc522_1ga58dfb62498e9d34af12d5c6e0bba5574)`(`[`mfrc522_picc_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4)` picc_type)` 

Returns the name for the PICC type.

#### Parameters
* `picc_type` PICC type enum

#### Returns
PICC type name

#### `public void `[`mfrc522_mifare_set_access_bits`](#group__drivers__mfrc522_1gabdf548dbc90a211e53364a2d379c5992)`(uint8_t * access_bit_buffer,uint8_t g0,uint8_t g1,uint8_t g2,uint8_t g3)` 

Calculates the bit pattern needed for the specified access bits.

In the [C1 C2 C3] tuples C1 is MSB (=4) and C3 is LSB (=1).

#### Parameters
* `access_bit_buffer` Pointer to byte 6, 7 and 8 in the sector trailer. Bytes [0..2] will be set. 

* `g0` Access bits [C1 C2 C3] for block 0 (for sectors 0-31) or blocks 0-4 (for sectors 32-39) 

* `g1` Access bits [C1 C2 C3] for block 1 (for sectors 0-31) or blocks 5-9 (for sectors 32-39) 

* `g2` Access bits [C1 C2 C3] for block 2 (for sectors 0-31) or blocks 10-14 (for sectors 32-39) 

* `g3` Access bits [C1 C2 C3] for the sector trailer, block 3 (for sectors 0-31) or block 15 (for sectors 32-39)

#### `public int `[`mfrc522_mifare_open_uid_backdoor`](#group__drivers__mfrc522_1ga274d7471dbe8025f1a64fb53c62044d5)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Performs the "magic sequence" needed to get Chinese UID changeable Mifare cards to allow writing to sector 0, where the card UID is stored.

Note that you do not need to have selected the card through REQA or WUPA, this sequence works immediately when the card is in the reader vicinity. This means you can use this method even on "bricked" cards that your reader does not recognise anymore (see mfrc522_mifare_unbrick_uid_sector). Of course with non-bricked devices, you are free to select them before calling this function.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_mifare_set_uid`](#group__drivers__mfrc522_1gaa991a89437c7a388a8861638418643d1)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,const uint8_t * new_uid,uint8_t new_uid_size)` 

Read entire block 0, including all manufacturer data, and overwrites that block with the new UID, a freshly calculated BCC, and the original manufacturer data.

It assumes a default KEY A of 0xFFFFFFFFFFFF. Make sure to have selected the PICC before this function is called and that the UID of the PICC is changeable.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `uid` PICC's UID 

* `new_uid` New UID to set on PICC 

* `new_uid_size` Size of new UID

#### Parameters
* `0` on success 

* `-ECANCELED` on internal error 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public int `[`mfrc522_mifare_unbrick_uid_sector`](#group__drivers__mfrc522_1ga59dbf1d7261091d042981593988a86db)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Reset entire sector 0 to zeroes, so the card can be read again by readers.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### Parameters
* `0` on success 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public bool `[`mfrc522_picc_is_new_card_present`](#group__drivers__mfrc522_1gac7836a121808f62740c12f52bfeb82a8)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Checks whether a new card could be detected.

Only "new" cards in state IDLE are invited. Sleeping cards in state HALT are ignored.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### Returns
true if new card was detected, false otherwise

#### `public int `[`mfrc522_picc_read_card_serial`](#group__drivers__mfrc522_1ga6d4c760531d7d1eb79974caf74a7da19)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)` 

Simple wrapper around [mfrc522_picc_select()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1gae99cef019d906fbdd3f0d5cc36ba8614)

Remember to call [mfrc522_picc_is_new_card_present()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1gac7836a121808f62740c12f52bfeb82a8), [mfrc522_picc_request_a()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1gae3750565c51431cc2ec898cadc4e7a94) or [mfrc522_picc_wakeup_a()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga777c18185cf8d679633d7966e8fa7d45) first.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `uid` PICC's UID

#### Parameters
* `0` on success 

* `-ECANCELED` on internal error 

* `-ECONNABORTED` when a collision occurred 

* `-EINVAL` on invalid argument 

* `-EIO` on communication error 

* `-ENOBUFS` when a buffer is too small to receive data 

* `-ETIMEDOUT` on timeout

#### `public void `[`mfrc522_pcd_dump_version_to_serial`](#group__drivers__mfrc522_1gaa65922fe7dbd5c31b9cb33305b5c93c6)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Dump debug info about the connected PCD to stdout.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public void `[`mfrc522_picc_dump_to_serial`](#group__drivers__mfrc522_1ga9e7fee0db62c32a0f0c015239206688d)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)` 

Dump debug info about the selected PICC to stdout.

On success the PICC is halted after dumping the data. For MIFARE Classic the factory default key of 0xFFFFFFFFFFFF is tried.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `uid` PICC's UID

#### `public void `[`mfrc522_picc_dump_details_to_serial`](#group__drivers__mfrc522_1gad3d17752e4bcf7e6a732df90dc14f659)`(`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid)` 

Dump card info (UID, SAK, Type) about the selected PICC to stdout.

#### Parameters
* `uid` PICC's UID

#### `public void `[`mfrc522_picc_dump_mifare_classic_to_serial`](#group__drivers__mfrc522_1ga5138229a9f4723ff4aeb4302611006a5)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,`[`mfrc522_picc_type_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga33c7a3d97499278cbe30fb9c61a562e4)` picc_type,`[`mfrc522_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__mifare__key__t)` * key)` 

Dump memory contents of a MIFARE Classic PICC to stdout.

On success the PICC is halted after dumping the data.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `uid` PICC's UID 

* `picc_type` PICC type enum 

* `key` Key A used for all sectors.

#### `public void `[`mfrc522_picc_dump_mifare_classic_sector_to_serial`](#group__drivers__mfrc522_1gac0f64a1b45e018164aab646b9c8be8a9)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev,`[`mfrc522_uid_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__uid__t)` * uid,`[`mfrc522_mifare_key_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__mifare__key__t)` * key,uint8_t sector)` 

Dump memory contents of a sector of a MIFARE Classic PICC to stdout.

Uses [mfrc522_pcd_authenticate()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1gaaccc7d2f773269ff1e8a1b8b84c6255e), [mfrc522_mifare_read()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga93eb1ba17298d423c3e3377d3fe5169c) and [mfrc522_pcd_stop_crypto1()](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__mfrc522_1ga91157640715039ff621a2ca45dea634a). Always uses MFRC522_PICC_CMD_MF_AUTH_KEY_A because only Key A can always read the sector trailer access bits.

#### Parameters
* `dev` Device descriptor of the MFRC522 

* `uid` PICC's UID 

* `key` Key A for the sector. 

* `sector` The sector to dump, 0..39

#### `public void `[`mfrc522_picc_dump_mifare_ultralight_to_serial`](#group__drivers__mfrc522_1gaa344e4f5db65961677feae076291efc4)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Dump memory contents of a MIFARE Ultralight PICC to stdout.

#### Parameters
* `dev` Device descriptor of the MFRC522

#### `public bool `[`mfrc522_pcd_perform_self_test`](#group__drivers__mfrc522_1gab810713a04a1555c1a2b9356bd22377b)`(`[`mfrc522_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__t)` * dev)` 

Perform a self-test of the MFRC522.

(See section 16.1.1)

#### Parameters
* `dev` Device descriptor of the MFRC522

#### Returns
true if the test passed, false otherwise and if no firmware reference is available.

# struct `mfrc522_params_t` 

MFRC522 device initialization parameters.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi_dev`](#structmfrc522__params__t_1a1dc98bf0cf10bc628a5e0bbfb7b5a19c) | SPI bus the controller is connected to.
`public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structmfrc522__params__t_1a3d4bdeb02c5d2d1d44fe43f253d5557a) | SPI clock speed.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sck_pin`](#structmfrc522__params__t_1a348a44909b0febecb8328785d9dc10c3) | SCK pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`miso_pin`](#structmfrc522__params__t_1a2f912a9e06aea6d0eb1576b1f3e2a57a) | MISO pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mosi_pin`](#structmfrc522__params__t_1a6c81cfccaa856179017d376f911e9f5e) | MOSI pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structmfrc522__params__t_1ad94e707acad333a80a154debc74bed0b) | Slave select pin.
`public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structmfrc522__params__t_1a82f6e2d447a83c675bfe74b8a585a21d) | Reset pin.

## Members

#### `public `[`spi_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__spi_1ga12004e6f2a2ea6b7c0a96c654a2f3874)` `[`spi_dev`](#structmfrc522__params__t_1a1dc98bf0cf10bc628a5e0bbfb7b5a19c) 

SPI bus the controller is connected to.

#### `public `[`spi_clk_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#atxmega_2include_2periph__cpu_8h_1ae81cec9f03084065c25089e514a57337)` `[`spi_clk`](#structmfrc522__params__t_1a3d4bdeb02c5d2d1d44fe43f253d5557a) 

SPI clock speed.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`sck_pin`](#structmfrc522__params__t_1a348a44909b0febecb8328785d9dc10c3) 

SCK pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`miso_pin`](#structmfrc522__params__t_1a2f912a9e06aea6d0eb1576b1f3e2a57a) 

MISO pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`mosi_pin`](#structmfrc522__params__t_1a6c81cfccaa856179017d376f911e9f5e) 

MOSI pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`cs_pin`](#structmfrc522__params__t_1ad94e707acad333a80a154debc74bed0b) 

Slave select pin.

#### `public `[`gpio_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#group__drivers__periph__gpio_1gadacfc0deb08affff1e88f9549c8e2823)` `[`rst_pin`](#structmfrc522__params__t_1a82f6e2d447a83c675bfe74b8a585a21d) 

Reset pin.

# struct `mfrc522_t` 

MFRC522 device data structure type.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`mfrc522_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__params__t)` `[`params`](#structmfrc522__t_1ac9d4dec08881500087ba1311c16cb176) | Device initialization parameters.

## Members

#### `public `[`mfrc522_params_t`](./doc/starlight-docs/src/content/docs/apidoc/api-drivers_mfrc522.md#structmfrc522__params__t)` `[`params`](#structmfrc522__t_1ac9d4dec08881500087ba1311c16cb176) 

Device initialization parameters.

# struct `mfrc522_uid_t` 

A struct used for passing the UID of a PICC.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`size`](#structmfrc522__uid__t_1acc8faad782a6f12879c41d9d4af20802) | Number of bytes in the UID.
`public uint8_t `[`uid_byte`](#structmfrc522__uid__t_1ad8f0ea9d8336a61bdd584438cc9a0901) | UID.
`public uint8_t `[`sak`](#structmfrc522__uid__t_1a4126a6e2b134f8295c50ebb01ada6061) | The SAK (Select acknowledge) byte returned from the PICC after successful selection.

## Members

#### `public uint8_t `[`size`](#structmfrc522__uid__t_1acc8faad782a6f12879c41d9d4af20802) 

Number of bytes in the UID.

4, 7 or 10

#### `public uint8_t `[`uid_byte`](#structmfrc522__uid__t_1ad8f0ea9d8336a61bdd584438cc9a0901) 

UID.

#### `public uint8_t `[`sak`](#structmfrc522__uid__t_1a4126a6e2b134f8295c50ebb01ada6061) 

The SAK (Select acknowledge) byte returned from the PICC after successful selection.

# struct `mfrc522_mifare_key_t` 

A struct used for passing a MIFARE Crypto1 key.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint8_t `[`key_byte`](#structmfrc522__mifare__key__t_1a5e619186ef0c7e439707a0655e50571b) | Crypto1 key bytes.

## Members

#### `public uint8_t `[`key_byte`](#structmfrc522__mifare__key__t_1a5e619186ef0c7e439707a0655e50571b) 

Crypto1 key bytes.

