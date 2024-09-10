---
title: api-cpu_cc2538_rfcore.md
description: api-cpu_cc2538_rfcore.md
---
# group `cpu_cc2538_rfcore` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`RFCORE`](#group__cpu__cc2538__rfcore_1ga0e8ed1b33169165d7a2c71841509f8f5)            | RF Core instance.
`enum `[`@28`](#group__cpu__cc2538__rfcore_1ga5d76b81b0ad4c19007a781d4edb8181f)            | RF Core opcodes.
`struct `[`cc2538_rfcore_t`](#structcc2538__rfcore__t) | RF Core component registers.

## Members

#### `define `[`RFCORE`](#group__cpu__cc2538__rfcore_1ga0e8ed1b33169165d7a2c71841509f8f5) 

RF Core instance.

#### `enum `[`@28`](#group__cpu__cc2538__rfcore_1ga5d76b81b0ad4c19007a781d4edb8181f) 

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
DECZ            | Decrement Z.
DECY            | Decrement Y.
DECX            | Decrement X.
INCZ            | Increment Z.
INCY            | Increment Y.
INCX            | Increment X.
INCMAXY            | Increment Y not greater than M.
RANDXY            | Load random value into X.
INT            | Interrupt.
WAITX            | Wait for X MAC timer overflows.
SETCMP1            | Set the compare value of the MAC timer to the current timer value.
WAIT_W            | Wait for W MAC timer overflows \| W (W = 0-31)
WEVENT1            | Wait until MAC timer event 1.
WEVENT2            | Wait until MAC timer event 2.
LABEL            | Set loop label.
RPT_C            | Conditional repeat \| N \| C (N = 0, 8; C = 0-7)
SKIP_S_C            | Conditional skip instruction \| S \| N \| C.
STOP            | Stop program execution.
SNOP            | No operation.
SRXON            | Enable and calibrate frequency synthesizer for RX.
STXON            | Enable TX after calibration.
STXONCCA            | Enable calibration and TX if CCA indicates a clear channel.
SSAMPLECCA            | Sample the current CCA value to SAMPLED_CCA.
SRFOFF            | Disable RX or TX and frequency synthesizer.
SFLUSHRX            | Flush RX FIFO buffer and reset demodulator.
SFLUSHTX            | Flush TX FIFO buffer.
SACK            | Send acknowledge frame with pending field cleared.
SACKPEND            | Send acknowledge frame with the pending field set.
SNACK            | Abort sending of acknowledge frame.
SRXMASKBITSET            | Set bit in RXENABLE register.
SRXMASKBITCLR            | Clear bit in RXENABLE register.
ISSTOP            | Stop program execution.
ISSTART            | Start program execution.
ISRXON            | Enable and calibrate frequency synthesizer for RX.
ISRXMASKBITSET            | Set bit in RXENABLE.
ISRXMASKBITCLR            | Clear bit in RXENABLE.
ISTXON            | Enable TX after calibration.
ISTXONCCA            | Enable calibration and TX if CCA indicates a clear channel.
ISSAMPLECCA            | Sample the current CCA value to SAMPLED_CCA.
ISRFOFF            | Disable RX or TX, and the frequency synthesizer.
ISFLUSHRX            | Flush RX FIFO buffer and reset demodulator.
ISFLUSHTX            | Flush TX FIFO buffer.
ISACK            | Send acknowledge frame with the pending field cleared.
ISACKPEND            | Send acknowledge frame with the pending field set.
ISNACK            | Abort sending of acknowledge frame.
ISCLEAR            | Clear CSP program memory, reset program counter.

RF Core opcodes.

# struct `cc2538_rfcore_t` 

RF Core component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESMASK0`](#structcc2538__rfcore__t_1a201c0d4b074063635637b050909cc62d) | RF Source address matching result.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESMASK1`](#structcc2538__rfcore__t_1a6824163aeac0ed6ebceee3eddc6fd698) | RF Source address matching result.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESMASK2`](#structcc2538__rfcore__t_1a05a5c1bf15aac975c73420e5294b4fc2) | RF Source address matching result.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESINDEX`](#structcc2538__rfcore__t_1a0ce353ef944c8edf9f9d9cc2510b4fc4) | RF Source address matching result.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCEXTPENDEN0`](#structcc2538__rfcore__t_1a9a4c043387a63b775b487cbda17988d0) | RF Source address matching control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCEXTPENDEN1`](#structcc2538__rfcore__t_1a21cbddd0d7e286a532b44ba61018b7b1) | RF Source address matching control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCEXTPENDEN2`](#structcc2538__rfcore__t_1a4edf787fc377c314471ee3d20c2542c5) | RF Source address matching control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCSHORTPENDEN0`](#structcc2538__rfcore__t_1a278c750c6070c0f71d3658c582f67ec9) | RF Source address matching control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCSHORTPENDEN1`](#structcc2538__rfcore__t_1ad13b3734f204bd73613a8eaef35fba5a) | RF Source address matching control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCSHORTPENDEN2`](#structcc2538__rfcore__t_1ad5c8a1411cc70ae6f73f0ed090d46762) | RF Source address matching control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR0`](#structcc2538__rfcore__t_1a1a1eb46e60c156d889f76664f37a3ec8) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR1`](#structcc2538__rfcore__t_1a4cca3481476187182e2505469ad49012) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR2`](#structcc2538__rfcore__t_1a5592ba2d81a9b78001f7ee07e0d91129) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR3`](#structcc2538__rfcore__t_1ac51c9401bbc7a6d5f29b812ee8efcbb9) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR4`](#structcc2538__rfcore__t_1a9dc3b200223354a5fdbb4de502a9bc26) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR5`](#structcc2538__rfcore__t_1a72663eb6769406161c3d73090ac175cb) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR6`](#structcc2538__rfcore__t_1aabe685089cc4753c97fdee07c174e70d) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR7`](#structcc2538__rfcore__t_1ad07409057938424767d8c9cfdaaf6b0e) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_PAN_ID0`](#structcc2538__rfcore__t_1a0c1aa1242ee96c6d33de1f87975c3c91) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_PAN_ID1`](#structcc2538__rfcore__t_1a871992a28ddc8cb57d6f283fcc6b9a31) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SHORT_ADDR0`](#structcc2538__rfcore__t_1afc76002014c5983d1f05fea1dfca82a7) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SHORT_ADDR1`](#structcc2538__rfcore__t_1ac52f520efe513f93cc7f046a0ef48ec8) | RF Local address information.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__rfcore__t_1ab9343d78587c71bd63cc7fccc6a89ed5) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMFILT0`](#structcc2538__rfcore__t_1a594ce4358ac74ef18811682e98d13225) | RF Frame Filter 0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FRAME_FILTER_EN`](#structcc2538__rfcore__t_1a0703b38c44c871e4637118e71050110e) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PAN_COORDINATOR`](#structcc2538__rfcore__t_1a3f829ecb5f2d6b6c59384d962d907c56) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MAX_FRAME_VERSION`](#structcc2538__rfcore__t_1a0441ca08ea2749c91dc01d0bf79c5000) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__rfcore__t_1acad0fef35724a7ca4172a29adf188801) | Reserved bits.
`public struct cc2538_rfcore_t::@29::@41 `[`XREG_FRMFILT0bits`](#structcc2538__rfcore__t_1a0c8847ea40ba45df7e96f7939df60306) | 
`public union cc2538_rfcore_t::@29 `[`@30`](#structcc2538__rfcore__t_1a7beb9c979d98d95282b9d8246a75e547) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMFILT1`](#structcc2538__rfcore__t_1a18e107125ce3f8995f4ea33f4a129ab1) | RF Frame Filter 1.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCMATCH`](#structcc2538__rfcore__t_1ae12b963b5aafd49a9a95a8db3f2754b8) | RF Source address matching and pending bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCSHORTEN0`](#structcc2538__rfcore__t_1aae57b78aa311abe91420988fc0401569) | RF Short address matching.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCSHORTEN1`](#structcc2538__rfcore__t_1a3bd6e07bc548e3024ad51b6b2b630761) | RF Short address matching.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCSHORTEN2`](#structcc2538__rfcore__t_1ab6ac752ae02930f04d9d946ab6023525) | RF Short address matching.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCEXTEN0`](#structcc2538__rfcore__t_1a93fb06a81d7b895f6697b95062733240) | RF Extended address matching.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCEXTEN1`](#structcc2538__rfcore__t_1a6b5bc7077bd97ddaa9be1c155422546f) | RF Extended address matching.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCEXTEN2`](#structcc2538__rfcore__t_1a55a48ea4671c05e377ac019197a39e74) | RF Extended address matching.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMCTRL0`](#structcc2538__rfcore__t_1a3e85139f96b8198e5f1b7c6195d55f36) | RF Frame handling.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TX_MODE`](#structcc2538__rfcore__t_1abe9efd97235e9fb008482c240ad28b14) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RX_MODE`](#structcc2538__rfcore__t_1a72e3f94160cda6f12ade8ce204fb4f39) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ENERGY_SCAN`](#structcc2538__rfcore__t_1a62eef82e8dbe9d0a3575276c1aaf64e1) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AUTOACK`](#structcc2538__rfcore__t_1ac658d6a0806f17e7fe7450281eabf36c) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AUTOCRC`](#structcc2538__rfcore__t_1a9b2b8e1ac9cc802303e1643374f25243) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`APPEND_DATA_MODE`](#structcc2538__rfcore__t_1ab889b80433816215e7c52798415c8941) | 
`public struct cc2538_rfcore_t::@31::@42 `[`XREG_FRMCTRL0bits`](#structcc2538__rfcore__t_1a24a5c6cf3295bd830847c536cb81e219) | 
`public union cc2538_rfcore_t::@31 `[`@32`](#structcc2538__rfcore__t_1a03eec12ba33782f4e762c7da9a03b526) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMCTRL1`](#structcc2538__rfcore__t_1a64bc7ba0e85b8dfb5f95c6765982dab4) | RF Frame handling.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXENABLE`](#structcc2538__rfcore__t_1a40005dab3e72e26a8370d5d868f67485) | RF RX enabling.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXMASKSET`](#structcc2538__rfcore__t_1a2c6290d2d9a5c6026867faa29393ab05) | RF RX enabling.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXMASKCLR`](#structcc2538__rfcore__t_1a6660e112ed55d3342cdad472ebb04c69) | RF RX disabling.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FREQTUNE`](#structcc2538__rfcore__t_1a5e6b22c5a4c610ba715166be16efafd1) | RF Crystal oscillator frequency tuning.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FREQCTRL`](#structcc2538__rfcore__t_1af0c890d2e62edd0c3b54ae269c772758) | RF Controls the RF frequency.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXPOWER`](#structcc2538__rfcore__t_1a7c508102f0e0eaaabf8175cf68658587) | RF Controls the output power.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXCTRL`](#structcc2538__rfcore__t_1adce4658af64b43886cb93af1778f73f6) | RF Controls the TX settings.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSMSTAT0`](#structcc2538__rfcore__t_1a02e261a47d96785f8fe66b87dc619ad7) | RF Radio status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FSM_FFCTRL_STATE`](#structcc2538__rfcore__t_1aa136e90a0d213a0a8b58cc6276db0d4a) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CAL_RUNNING`](#structcc2538__rfcore__t_1a6125b601292e3887caf0ddaf291d710b) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CAL_DONE`](#structcc2538__rfcore__t_1a93d8d69962ee7a351d0db1197e541b10) | 
`public struct cc2538_rfcore_t::@33::@43 `[`XREG_FSMSTAT0bits`](#structcc2538__rfcore__t_1a7281ce19bd439f95ae461772fd429b4e) | 
`public union cc2538_rfcore_t::@33 `[`@34`](#structcc2538__rfcore__t_1a26dd724df5fa8cbba52c055f57b57418) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSMSTAT1`](#structcc2538__rfcore__t_1a3ff858f731e23f38a279b5e79a200bae) | RF Radio status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RX_ACTIVE`](#structcc2538__rfcore__t_1a4d28af177fd428e8cafe07525bf5a5a5) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TX_ACTIVE`](#structcc2538__rfcore__t_1a7e64fb065fe6553e409e6c5d4cfdc2e4) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LOCK_STATUS`](#structcc2538__rfcore__t_1a3ef810377a410287532d8ccef8ec5e15) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SAMPLED_CCA`](#structcc2538__rfcore__t_1a7767163aeda8de5eb49089379c4aa2f0) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CCA`](#structcc2538__rfcore__t_1a46a12d3f0a0a730e195d5e60d943731f) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFD`](#structcc2538__rfcore__t_1abcc47b095d487a2cafc8afa68fc931a6) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FIFOP`](#structcc2538__rfcore__t_1ac314c049d769b6071471ef2531587642) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FIFO`](#structcc2538__rfcore__t_1a45f6b7c6b54cd218f586ed00c3f46921) | 
`public struct cc2538_rfcore_t::@35::@44 `[`XREG_FSMSTAT1bits`](#structcc2538__rfcore__t_1af4ca435362bb9e96fa5e14acc92b1cfb) | 
`public union cc2538_rfcore_t::@35 `[`@36`](#structcc2538__rfcore__t_1a40098b56b488fad759cea30141f1f5e1) | 
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FIFOPCTRL`](#structcc2538__rfcore__t_1a40af7534ee421596e2c4a674da2dd679) | RF FIFOP threshold.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSMCTRL`](#structcc2538__rfcore__t_1ab5995babc70bc5e90cf3feec900702c9) | RF FSM options.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CCACTRL0`](#structcc2538__rfcore__t_1ac7dd758a00957c9a2bb1204dc2658d82) | RF CCA threshold.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CCACTRL1`](#structcc2538__rfcore__t_1a381325a5ba92e9019d3bce1538ec0971) | RF Other CCA Options.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RSSI`](#structcc2538__rfcore__t_1af6183fad7b166c2cae304f38c4b23044) | RF RSSI status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RSSISTAT`](#structcc2538__rfcore__t_1a56e70907a6a3fdb657e0739c7723dfb9) | RF RSSI valid status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RSSI_VALID`](#structcc2538__rfcore__t_1afe01b9ca4f9eb2c5a5613c09221d3b03) | RSSI value is valid.
`public struct cc2538_rfcore_t::@37::@45 `[`XREG_RSSISTATbits`](#structcc2538__rfcore__t_1adbed15a3b634a1950a394b214b386fe6) | 
`public union cc2538_rfcore_t::@37 `[`@38`](#structcc2538__rfcore__t_1ad08274b876de6b885c4478b28e1d351b) | RSSI status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXFIRST`](#structcc2538__rfcore__t_1a2c7a703416a8d9a8bd557357b15deac8) | RF First byte in RX FIFO.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXFIFOCNT`](#structcc2538__rfcore__t_1aca25ea6ea894562b3d17f08eef4ef5f8) | RF Number of bytes in RX FIFO.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXFIFOCNT`](#structcc2538__rfcore__t_1a5ba9e3de30ff2dc678d4084a9d76f4ea) | RF Number of bytes in TX FIFO.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXFIRST_PTR`](#structcc2538__rfcore__t_1a519ef7f7271e6655c41dbbe7bf7e544e) | RF RX FIFO pointer.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXLAST_PTR`](#structcc2538__rfcore__t_1ab0a99750a29000a59424f24c2f451e17) | RF RX FIFO pointer.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXP1_PTR`](#structcc2538__rfcore__t_1a9b30463a98aca41473923a5a7d90b82d) | RF RX FIFO pointer.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__rfcore__t_1a54de571d36255522e34b5a5bf8d75265) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXFIRST_PTR`](#structcc2538__rfcore__t_1af502628cca8775c901224bbb2a82773a) | RF TX FIFO pointer.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXLAST_PTR`](#structcc2538__rfcore__t_1a61aca1758c45ee1718fe08690b57688c) | RF TX FIFO pointer.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFIRQM0`](#structcc2538__rfcore__t_1a248abf273ee1ff83c47b8fdb4e29cc7e) | RF interrupt masks.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFIRQM1`](#structcc2538__rfcore__t_1a3f3729e2d58baef5820e05ee9beb91be) | RF interrupt masks.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFERRM`](#structcc2538__rfcore__t_1a9f49b0fa97f565d5d4370ef4a7429a5a) | RF error interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__rfcore__t_1aaf3bc690222573333cd033e82b37c8f0) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFRND`](#structcc2538__rfcore__t_1acca28e65586e4300b6d2b08223ef885e) | RF Random data.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IRND`](#structcc2538__rfcore__t_1ad7da7c82305a5c5775c08e327f600393) | Random bit from the I channel of the receiver.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`QRND`](#structcc2538__rfcore__t_1a55418e059e6b250cfa7f97d4f386bb7e) | Random bit from the Q channel of the receiver.
`public struct cc2538_rfcore_t::@39::@46 `[`XREG_RFRNDbits`](#structcc2538__rfcore__t_1a0a91617991a1ae981bb4c729a40d2296) | 
`public union cc2538_rfcore_t::@39 `[`@40`](#structcc2538__rfcore__t_1a85c236280cf2531956d73c6e6386f276) | RF random data register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMCTRL0`](#structcc2538__rfcore__t_1ac8c7472b39b7dd24c0a23f5d2d9bbe88) | RF Controls modem.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMCTRL1`](#structcc2538__rfcore__t_1a835ba15f48117d91f47878efdee8595c) | RF Controls modem.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FREQEST`](#structcc2538__rfcore__t_1a106ec7fd336bd060ca46c0cec3c1db40) | RF Estimated RF frequency offset.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXCTRL`](#structcc2538__rfcore__t_1a2cd3483d43edf8eb8034cc953dfdd60b) | RF Tune receive section.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCTRL`](#structcc2538__rfcore__t_1aa7efa9a59ef4ea0a2a7c83a638ea2200) | RF Tune frequency synthesizer.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL0`](#structcc2538__rfcore__t_1adde711f87dde322a2989056506860faa) | RF Tune frequency calibration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL1`](#structcc2538__rfcore__t_1a497e10eea7481d78ea606ec1897e15b4) | RF Tune frequency calibration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL2`](#structcc2538__rfcore__t_1aa08bc18aad772076e9ac83ab5fd0e034) | RF Tune frequency calibration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL3`](#structcc2538__rfcore__t_1a0d890b04256790009388d08019735d74) | RF Tune frequency calibration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL0`](#structcc2538__rfcore__t_1a991a143efdcf6d09eaf64a48cd113396) | RF AGC dynamic range control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL1`](#structcc2538__rfcore__t_1a0bae16958d481da05cd1995c3d887f71) | RF AGC reference level.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL2`](#structcc2538__rfcore__t_1a8a4881ec27278d3e6bf0e7fe26824984) | RF AGC gain override.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL3`](#structcc2538__rfcore__t_1af88eb7a4653a82915140980e1b8c00d1) | RF AGC control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ADCTEST0`](#structcc2538__rfcore__t_1a9b73d519df02c08cdab22d8d7c183b11) | RF ADC tuning.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ADCTEST1`](#structcc2538__rfcore__t_1ab0c13187ecbef1217c6e48c9680c5d46) | RF ADC tuning.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ADCTEST2`](#structcc2538__rfcore__t_1a942c048bda6a0a481fc308ec3b5a1ea7) | RF ADC tuning.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMTEST0`](#structcc2538__rfcore__t_1aebb9859e1dd2ff07b9c2d6f34178de22) | RF Test register for modem.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMTEST1`](#structcc2538__rfcore__t_1a882bbc1c0c2f760ca6ea843752a0d99c) | RF Test Register for Modem.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_DACTEST0`](#structcc2538__rfcore__t_1ab7eb6663da9165db3ac72cfdbbbbbfcd) | RF DAC override value.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_DACTEST1`](#structcc2538__rfcore__t_1a8d5e0349aef2d234e45ab65692693da0) | RF DAC override value.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_DACTEST2`](#structcc2538__rfcore__t_1aab81790a5d34114a75698fe4b22d5310) | RF DAC test setting.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ATEST`](#structcc2538__rfcore__t_1a21455ee99dbab58f53088007145f9725) | RF Analog test control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_PTEST0`](#structcc2538__rfcore__t_1ae796f11f673f88dca1fefcd0418d5f8e) | RF Override power-down register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_PTEST1`](#structcc2538__rfcore__t_1a80cd8571ee8fef4a2036a222366a5f27) | RF Override power-down register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__rfcore__t_1aa2a4e01d7f144d11ca11e7b70c20de13) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPCTRL`](#structcc2538__rfcore__t_1a1d55957299e546f9396c37f97909979d) | RF CSP control bit.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPSTAT`](#structcc2538__rfcore__t_1aa64ef3020ab6a5d59201b11c2a80c9f8) | RF CSP status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPX`](#structcc2538__rfcore__t_1a7735c11df75e33b3779d32f4b4e548f8) | RF CSP X data register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPY`](#structcc2538__rfcore__t_1a371d2dd1a3e7bf53de1bfe74bbeef146) | RF CSP Y data register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPZ`](#structcc2538__rfcore__t_1a6dadfde77e33b7b90df3d07314637439) | RF CSP Z data register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPT`](#structcc2538__rfcore__t_1a098bc41f5adc911aa6f5fa83a1b2210a) | RF CSP T data register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__rfcore__t_1a0444c176412c95e4afc0ad2251ef0ca1) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFC_OBS_CTRL0`](#structcc2538__rfcore__t_1a9e7bb9c2c9f774b2363b6e05d8162090) | RF observation mux control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFC_OBS_CTRL1`](#structcc2538__rfcore__t_1a1aebfd85eec6b0b5485aa14dbd1fc4cf) | RF observation mux control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFC_OBS_CTRL2`](#structcc2538__rfcore__t_1a48cce935b83339dccf6bedb95e0a011a) | RF observation mux control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__rfcore__t_1a8af8949098b64fa9752901bf6fe2df22) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXFILTCFG`](#structcc2538__rfcore__t_1a811d4dc81cdc4d75565b49db75e98828) | RF TX filter configuration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED7`](#structcc2538__rfcore__t_1a92e26962fe912aa121efb8cad400e9eb) | Reserved bytes.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTCSPCFG`](#structcc2538__rfcore__t_1a7a8317f2ba55fc66b31210bdc0d86220) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) event configuration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTCTRL`](#structcc2538__rfcore__t_1af902685b73a87a3b9efa65e7ffed315e) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) control register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTIRQM`](#structcc2538__rfcore__t_1a3c4b03a0b7cfaab6a060d6eeef22d02b) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTIRQF`](#structcc2538__rfcore__t_1ae8e9ead3cb612cbe9f371bdfe750ef5b) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) interrupt flags.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMSEL`](#structcc2538__rfcore__t_1a05917e63a4a9c8801816786962eef4f6) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplex select.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTM0`](#structcc2538__rfcore__t_1a30fda3863f633ee497bd880d5e08617e) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed register 0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTM1`](#structcc2538__rfcore__t_1a2ad17cfeefce02c6c691338ac623c517) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed register 1.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMOVF2`](#structcc2538__rfcore__t_1afa235e83cbf0dbe1f55d6f09c1f866e7) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed overflow register 2.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMOVF1`](#structcc2538__rfcore__t_1a08157c3b65965cbb42a45514d94a8c8d) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed overflow register 1.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMOVF0`](#structcc2538__rfcore__t_1a03e0d477cd0e333c072cb70716341742) | RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed overflow register 0.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFDATA`](#structcc2538__rfcore__t_1ab33de2a1ed8250df443ec7d66de83fb1) | RF Tx/Rx FIFO.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFERRF`](#structcc2538__rfcore__t_1ad3e957b731fa6e7e41a3bb0852350832) | RF error interrupt flags.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFIRQF1`](#structcc2538__rfcore__t_1ae94eb96f07a2f7b2ebfed6881dec69ef) | RF interrupt flags.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFIRQF0`](#structcc2538__rfcore__t_1af4e210c3b029bea6642cbd61eca52016) | RF interrupt flags.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFST`](#structcc2538__rfcore__t_1ac2087f2fcde3aac46f9e4eb17d2a10b5) | RF CSMA-CA/strobe processor.

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESMASK0`](#structcc2538__rfcore__t_1a201c0d4b074063635637b050909cc62d) 

RF Source address matching result.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESMASK1`](#structcc2538__rfcore__t_1a6824163aeac0ed6ebceee3eddc6fd698) 

RF Source address matching result.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESMASK2`](#structcc2538__rfcore__t_1a05a5c1bf15aac975c73420e5294b4fc2) 

RF Source address matching result.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCRESINDEX`](#structcc2538__rfcore__t_1a0ce353ef944c8edf9f9d9cc2510b4fc4) 

RF Source address matching result.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCEXTPENDEN0`](#structcc2538__rfcore__t_1a9a4c043387a63b775b487cbda17988d0) 

RF Source address matching control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCEXTPENDEN1`](#structcc2538__rfcore__t_1a21cbddd0d7e286a532b44ba61018b7b1) 

RF Source address matching control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCEXTPENDEN2`](#structcc2538__rfcore__t_1a4edf787fc377c314471ee3d20c2542c5) 

RF Source address matching control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCSHORTPENDEN0`](#structcc2538__rfcore__t_1a278c750c6070c0f71d3658c582f67ec9) 

RF Source address matching control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCSHORTPENDEN1`](#structcc2538__rfcore__t_1ad13b3734f204bd73613a8eaef35fba5a) 

RF Source address matching control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SRCSHORTPENDEN2`](#structcc2538__rfcore__t_1ad5c8a1411cc70ae6f73f0ed090d46762) 

RF Source address matching control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR0`](#structcc2538__rfcore__t_1a1a1eb46e60c156d889f76664f37a3ec8) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR1`](#structcc2538__rfcore__t_1a4cca3481476187182e2505469ad49012) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR2`](#structcc2538__rfcore__t_1a5592ba2d81a9b78001f7ee07e0d91129) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR3`](#structcc2538__rfcore__t_1ac51c9401bbc7a6d5f29b812ee8efcbb9) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR4`](#structcc2538__rfcore__t_1a9dc3b200223354a5fdbb4de502a9bc26) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR5`](#structcc2538__rfcore__t_1a72663eb6769406161c3d73090ac175cb) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR6`](#structcc2538__rfcore__t_1aabe685089cc4753c97fdee07c174e70d) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_EXT_ADDR7`](#structcc2538__rfcore__t_1ad07409057938424767d8c9cfdaaf6b0e) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_PAN_ID0`](#structcc2538__rfcore__t_1a0c1aa1242ee96c6d33de1f87975c3c91) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_PAN_ID1`](#structcc2538__rfcore__t_1a871992a28ddc8cb57d6f283fcc6b9a31) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SHORT_ADDR0`](#structcc2538__rfcore__t_1afc76002014c5983d1f05fea1dfca82a7) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FFSM_SHORT_ADDR1`](#structcc2538__rfcore__t_1ac52f520efe513f93cc7f046a0ef48ec8) 

RF Local address information.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__rfcore__t_1ab9343d78587c71bd63cc7fccc6a89ed5) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMFILT0`](#structcc2538__rfcore__t_1a594ce4358ac74ef18811682e98d13225) 

RF Frame Filter 0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FRAME_FILTER_EN`](#structcc2538__rfcore__t_1a0703b38c44c871e4637118e71050110e) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PAN_COORDINATOR`](#structcc2538__rfcore__t_1a3f829ecb5f2d6b6c59384d962d907c56) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MAX_FRAME_VERSION`](#structcc2538__rfcore__t_1a0441ca08ea2749c91dc01d0bf79c5000) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__rfcore__t_1acad0fef35724a7ca4172a29adf188801) 

Reserved bits.

#### `public struct cc2538_rfcore_t::@29::@41 `[`XREG_FRMFILT0bits`](#structcc2538__rfcore__t_1a0c8847ea40ba45df7e96f7939df60306) 

#### `public union cc2538_rfcore_t::@29 `[`@30`](#structcc2538__rfcore__t_1a7beb9c979d98d95282b9d8246a75e547) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMFILT1`](#structcc2538__rfcore__t_1a18e107125ce3f8995f4ea33f4a129ab1) 

RF Frame Filter 1.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCMATCH`](#structcc2538__rfcore__t_1ae12b963b5aafd49a9a95a8db3f2754b8) 

RF Source address matching and pending bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCSHORTEN0`](#structcc2538__rfcore__t_1aae57b78aa311abe91420988fc0401569) 

RF Short address matching.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCSHORTEN1`](#structcc2538__rfcore__t_1a3bd6e07bc548e3024ad51b6b2b630761) 

RF Short address matching.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCSHORTEN2`](#structcc2538__rfcore__t_1ab6ac752ae02930f04d9d946ab6023525) 

RF Short address matching.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCEXTEN0`](#structcc2538__rfcore__t_1a93fb06a81d7b895f6697b95062733240) 

RF Extended address matching.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCEXTEN1`](#structcc2538__rfcore__t_1a6b5bc7077bd97ddaa9be1c155422546f) 

RF Extended address matching.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_SRCEXTEN2`](#structcc2538__rfcore__t_1a55a48ea4671c05e377ac019197a39e74) 

RF Extended address matching.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMCTRL0`](#structcc2538__rfcore__t_1a3e85139f96b8198e5f1b7c6195d55f36) 

RF Frame handling.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TX_MODE`](#structcc2538__rfcore__t_1abe9efd97235e9fb008482c240ad28b14) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RX_MODE`](#structcc2538__rfcore__t_1a72e3f94160cda6f12ade8ce204fb4f39) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ENERGY_SCAN`](#structcc2538__rfcore__t_1a62eef82e8dbe9d0a3575276c1aaf64e1) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AUTOACK`](#structcc2538__rfcore__t_1ac658d6a0806f17e7fe7450281eabf36c) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`AUTOCRC`](#structcc2538__rfcore__t_1a9b2b8e1ac9cc802303e1643374f25243) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`APPEND_DATA_MODE`](#structcc2538__rfcore__t_1ab889b80433816215e7c52798415c8941) 

#### `public struct cc2538_rfcore_t::@31::@42 `[`XREG_FRMCTRL0bits`](#structcc2538__rfcore__t_1a24a5c6cf3295bd830847c536cb81e219) 

#### `public union cc2538_rfcore_t::@31 `[`@32`](#structcc2538__rfcore__t_1a03eec12ba33782f4e762c7da9a03b526) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FRMCTRL1`](#structcc2538__rfcore__t_1a64bc7ba0e85b8dfb5f95c6765982dab4) 

RF Frame handling.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXENABLE`](#structcc2538__rfcore__t_1a40005dab3e72e26a8370d5d868f67485) 

RF RX enabling.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXMASKSET`](#structcc2538__rfcore__t_1a2c6290d2d9a5c6026867faa29393ab05) 

RF RX enabling.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXMASKCLR`](#structcc2538__rfcore__t_1a6660e112ed55d3342cdad472ebb04c69) 

RF RX disabling.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FREQTUNE`](#structcc2538__rfcore__t_1a5e6b22c5a4c610ba715166be16efafd1) 

RF Crystal oscillator frequency tuning.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FREQCTRL`](#structcc2538__rfcore__t_1af0c890d2e62edd0c3b54ae269c772758) 

RF Controls the RF frequency.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXPOWER`](#structcc2538__rfcore__t_1a7c508102f0e0eaaabf8175cf68658587) 

RF Controls the output power.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXCTRL`](#structcc2538__rfcore__t_1adce4658af64b43886cb93af1778f73f6) 

RF Controls the TX settings.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSMSTAT0`](#structcc2538__rfcore__t_1a02e261a47d96785f8fe66b87dc619ad7) 

RF Radio status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FSM_FFCTRL_STATE`](#structcc2538__rfcore__t_1aa136e90a0d213a0a8b58cc6276db0d4a) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CAL_RUNNING`](#structcc2538__rfcore__t_1a6125b601292e3887caf0ddaf291d710b) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CAL_DONE`](#structcc2538__rfcore__t_1a93d8d69962ee7a351d0db1197e541b10) 

#### `public struct cc2538_rfcore_t::@33::@43 `[`XREG_FSMSTAT0bits`](#structcc2538__rfcore__t_1a7281ce19bd439f95ae461772fd429b4e) 

#### `public union cc2538_rfcore_t::@33 `[`@34`](#structcc2538__rfcore__t_1a26dd724df5fa8cbba52c055f57b57418) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSMSTAT1`](#structcc2538__rfcore__t_1a3ff858f731e23f38a279b5e79a200bae) 

RF Radio status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RX_ACTIVE`](#structcc2538__rfcore__t_1a4d28af177fd428e8cafe07525bf5a5a5) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TX_ACTIVE`](#structcc2538__rfcore__t_1a7e64fb065fe6553e409e6c5d4cfdc2e4) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LOCK_STATUS`](#structcc2538__rfcore__t_1a3ef810377a410287532d8ccef8ec5e15) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SAMPLED_CCA`](#structcc2538__rfcore__t_1a7767163aeda8de5eb49089379c4aa2f0) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CCA`](#structcc2538__rfcore__t_1a46a12d3f0a0a730e195d5e60d943731f) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFD`](#structcc2538__rfcore__t_1abcc47b095d487a2cafc8afa68fc931a6) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FIFOP`](#structcc2538__rfcore__t_1ac314c049d769b6071471ef2531587642) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FIFO`](#structcc2538__rfcore__t_1a45f6b7c6b54cd218f586ed00c3f46921) 

#### `public struct cc2538_rfcore_t::@35::@44 `[`XREG_FSMSTAT1bits`](#structcc2538__rfcore__t_1af4ca435362bb9e96fa5e14acc92b1cfb) 

#### `public union cc2538_rfcore_t::@35 `[`@36`](#structcc2538__rfcore__t_1a40098b56b488fad759cea30141f1f5e1) 

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FIFOPCTRL`](#structcc2538__rfcore__t_1a40af7534ee421596e2c4a674da2dd679) 

RF FIFOP threshold.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSMCTRL`](#structcc2538__rfcore__t_1ab5995babc70bc5e90cf3feec900702c9) 

RF FSM options.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CCACTRL0`](#structcc2538__rfcore__t_1ac7dd758a00957c9a2bb1204dc2658d82) 

RF CCA threshold.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CCACTRL1`](#structcc2538__rfcore__t_1a381325a5ba92e9019d3bce1538ec0971) 

RF Other CCA Options.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RSSI`](#structcc2538__rfcore__t_1af6183fad7b166c2cae304f38c4b23044) 

RF RSSI status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RSSISTAT`](#structcc2538__rfcore__t_1a56e70907a6a3fdb657e0739c7723dfb9) 

RF RSSI valid status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RSSI_VALID`](#structcc2538__rfcore__t_1afe01b9ca4f9eb2c5a5613c09221d3b03) 

RSSI value is valid.

#### `public struct cc2538_rfcore_t::@37::@45 `[`XREG_RSSISTATbits`](#structcc2538__rfcore__t_1adbed15a3b634a1950a394b214b386fe6) 

#### `public union cc2538_rfcore_t::@37 `[`@38`](#structcc2538__rfcore__t_1ad08274b876de6b885c4478b28e1d351b) 

RSSI status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXFIRST`](#structcc2538__rfcore__t_1a2c7a703416a8d9a8bd557357b15deac8) 

RF First byte in RX FIFO.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXFIFOCNT`](#structcc2538__rfcore__t_1aca25ea6ea894562b3d17f08eef4ef5f8) 

RF Number of bytes in RX FIFO.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXFIFOCNT`](#structcc2538__rfcore__t_1a5ba9e3de30ff2dc678d4084a9d76f4ea) 

RF Number of bytes in TX FIFO.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXFIRST_PTR`](#structcc2538__rfcore__t_1a519ef7f7271e6655c41dbbe7bf7e544e) 

RF RX FIFO pointer.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXLAST_PTR`](#structcc2538__rfcore__t_1ab0a99750a29000a59424f24c2f451e17) 

RF RX FIFO pointer.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXP1_PTR`](#structcc2538__rfcore__t_1a9b30463a98aca41473923a5a7d90b82d) 

RF RX FIFO pointer.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__rfcore__t_1a54de571d36255522e34b5a5bf8d75265) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXFIRST_PTR`](#structcc2538__rfcore__t_1af502628cca8775c901224bbb2a82773a) 

RF TX FIFO pointer.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXLAST_PTR`](#structcc2538__rfcore__t_1a61aca1758c45ee1718fe08690b57688c) 

RF TX FIFO pointer.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFIRQM0`](#structcc2538__rfcore__t_1a248abf273ee1ff83c47b8fdb4e29cc7e) 

RF interrupt masks.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFIRQM1`](#structcc2538__rfcore__t_1a3f3729e2d58baef5820e05ee9beb91be) 

RF interrupt masks.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFERRM`](#structcc2538__rfcore__t_1a9f49b0fa97f565d5d4370ef4a7429a5a) 

RF error interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__rfcore__t_1aaf3bc690222573333cd033e82b37c8f0) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFRND`](#structcc2538__rfcore__t_1acca28e65586e4300b6d2b08223ef885e) 

RF Random data.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IRND`](#structcc2538__rfcore__t_1ad7da7c82305a5c5775c08e327f600393) 

Random bit from the I channel of the receiver.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`QRND`](#structcc2538__rfcore__t_1a55418e059e6b250cfa7f97d4f386bb7e) 

Random bit from the Q channel of the receiver.

#### `public struct cc2538_rfcore_t::@39::@46 `[`XREG_RFRNDbits`](#structcc2538__rfcore__t_1a0a91617991a1ae981bb4c729a40d2296) 

#### `public union cc2538_rfcore_t::@39 `[`@40`](#structcc2538__rfcore__t_1a85c236280cf2531956d73c6e6386f276) 

RF random data register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMCTRL0`](#structcc2538__rfcore__t_1ac8c7472b39b7dd24c0a23f5d2d9bbe88) 

RF Controls modem.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMCTRL1`](#structcc2538__rfcore__t_1a835ba15f48117d91f47878efdee8595c) 

RF Controls modem.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FREQEST`](#structcc2538__rfcore__t_1a106ec7fd336bd060ca46c0cec3c1db40) 

RF Estimated RF frequency offset.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RXCTRL`](#structcc2538__rfcore__t_1a2cd3483d43edf8eb8034cc953dfdd60b) 

RF Tune receive section.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCTRL`](#structcc2538__rfcore__t_1aa7efa9a59ef4ea0a2a7c83a638ea2200) 

RF Tune frequency synthesizer.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL0`](#structcc2538__rfcore__t_1adde711f87dde322a2989056506860faa) 

RF Tune frequency calibration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL1`](#structcc2538__rfcore__t_1a497e10eea7481d78ea606ec1897e15b4) 

RF Tune frequency calibration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL2`](#structcc2538__rfcore__t_1aa08bc18aad772076e9ac83ab5fd0e034) 

RF Tune frequency calibration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_FSCAL3`](#structcc2538__rfcore__t_1a0d890b04256790009388d08019735d74) 

RF Tune frequency calibration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL0`](#structcc2538__rfcore__t_1a991a143efdcf6d09eaf64a48cd113396) 

RF AGC dynamic range control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL1`](#structcc2538__rfcore__t_1a0bae16958d481da05cd1995c3d887f71) 

RF AGC reference level.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL2`](#structcc2538__rfcore__t_1a8a4881ec27278d3e6bf0e7fe26824984) 

RF AGC gain override.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_AGCCTRL3`](#structcc2538__rfcore__t_1af88eb7a4653a82915140980e1b8c00d1) 

RF AGC control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ADCTEST0`](#structcc2538__rfcore__t_1a9b73d519df02c08cdab22d8d7c183b11) 

RF ADC tuning.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ADCTEST1`](#structcc2538__rfcore__t_1ab0c13187ecbef1217c6e48c9680c5d46) 

RF ADC tuning.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ADCTEST2`](#structcc2538__rfcore__t_1a942c048bda6a0a481fc308ec3b5a1ea7) 

RF ADC tuning.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMTEST0`](#structcc2538__rfcore__t_1aebb9859e1dd2ff07b9c2d6f34178de22) 

RF Test register for modem.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_MDMTEST1`](#structcc2538__rfcore__t_1a882bbc1c0c2f760ca6ea843752a0d99c) 

RF Test Register for Modem.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_DACTEST0`](#structcc2538__rfcore__t_1ab7eb6663da9165db3ac72cfdbbbbbfcd) 

RF DAC override value.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_DACTEST1`](#structcc2538__rfcore__t_1a8d5e0349aef2d234e45ab65692693da0) 

RF DAC override value.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_DACTEST2`](#structcc2538__rfcore__t_1aab81790a5d34114a75698fe4b22d5310) 

RF DAC test setting.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_ATEST`](#structcc2538__rfcore__t_1a21455ee99dbab58f53088007145f9725) 

RF Analog test control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_PTEST0`](#structcc2538__rfcore__t_1ae796f11f673f88dca1fefcd0418d5f8e) 

RF Override power-down register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_PTEST1`](#structcc2538__rfcore__t_1a80cd8571ee8fef4a2036a222366a5f27) 

RF Override power-down register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__rfcore__t_1aa2a4e01d7f144d11ca11e7b70c20de13) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPCTRL`](#structcc2538__rfcore__t_1a1d55957299e546f9396c37f97909979d) 

RF CSP control bit.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPSTAT`](#structcc2538__rfcore__t_1aa64ef3020ab6a5d59201b11c2a80c9f8) 

RF CSP status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPX`](#structcc2538__rfcore__t_1a7735c11df75e33b3779d32f4b4e548f8) 

RF CSP X data register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPY`](#structcc2538__rfcore__t_1a371d2dd1a3e7bf53de1bfe74bbeef146) 

RF CSP Y data register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPZ`](#structcc2538__rfcore__t_1a6dadfde77e33b7b90df3d07314637439) 

RF CSP Z data register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_CSPT`](#structcc2538__rfcore__t_1a098bc41f5adc911aa6f5fa83a1b2210a) 

RF CSP T data register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__rfcore__t_1a0444c176412c95e4afc0ad2251ef0ca1) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFC_OBS_CTRL0`](#structcc2538__rfcore__t_1a9e7bb9c2c9f774b2363b6e05d8162090) 

RF observation mux control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFC_OBS_CTRL1`](#structcc2538__rfcore__t_1a1aebfd85eec6b0b5485aa14dbd1fc4cf) 

RF observation mux control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_RFC_OBS_CTRL2`](#structcc2538__rfcore__t_1a48cce935b83339dccf6bedb95e0a011a) 

RF observation mux control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__rfcore__t_1a8af8949098b64fa9752901bf6fe2df22) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`XREG_TXFILTCFG`](#structcc2538__rfcore__t_1a811d4dc81cdc4d75565b49db75e98828) 

RF TX filter configuration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED7`](#structcc2538__rfcore__t_1a92e26962fe912aa121efb8cad400e9eb) 

Reserved bytes.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTCSPCFG`](#structcc2538__rfcore__t_1a7a8317f2ba55fc66b31210bdc0d86220) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) event configuration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTCTRL`](#structcc2538__rfcore__t_1af902685b73a87a3b9efa65e7ffed315e) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) control register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTIRQM`](#structcc2538__rfcore__t_1a3c4b03a0b7cfaab6a060d6eeef22d02b) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTIRQF`](#structcc2538__rfcore__t_1ae8e9ead3cb612cbe9f371bdfe750ef5b) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) interrupt flags.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMSEL`](#structcc2538__rfcore__t_1a05917e63a4a9c8801816786962eef4f6) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplex select.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTM0`](#structcc2538__rfcore__t_1a30fda3863f633ee497bd880d5e08617e) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed register 0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTM1`](#structcc2538__rfcore__t_1a2ad17cfeefce02c6c691338ac623c517) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed register 1.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMOVF2`](#structcc2538__rfcore__t_1afa235e83cbf0dbe1f55d6f09c1f866e7) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed overflow register 2.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMOVF1`](#structcc2538__rfcore__t_1a08157c3b65965cbb42a45514d94a8c8d) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed overflow register 1.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_MTMOVF0`](#structcc2538__rfcore__t_1a03e0d477cd0e333c072cb70716341742) 

RF MAC [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer) multiplexed overflow register 0.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFDATA`](#structcc2538__rfcore__t_1ab33de2a1ed8250df443ec7d66de83fb1) 

RF Tx/Rx FIFO.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFERRF`](#structcc2538__rfcore__t_1ad3e957b731fa6e7e41a3bb0852350832) 

RF error interrupt flags.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFIRQF1`](#structcc2538__rfcore__t_1ae94eb96f07a2f7b2ebfed6881dec69ef) 

RF interrupt flags.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFIRQF0`](#structcc2538__rfcore__t_1af4e210c3b029bea6642cbd61eca52016) 

RF interrupt flags.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SFR_RFST`](#structcc2538__rfcore__t_1ac2087f2fcde3aac46f9e4eb17d2a10b5) 

RF CSMA-CA/strobe processor.

