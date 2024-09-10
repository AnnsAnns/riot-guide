---
title: api-cpu_cc2538_uart.md
description: api-cpu_cc2538_uart.md
---
# group `cpu_cc2538_uart` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`UART0_BASEADDR`](#group__cpu__cc2538__uart_1gaf3706b6ee733c0fc247345ccccf95fdc)            | UART0 Instance.
`define `[`UART1_BASEADDR`](#group__cpu__cc2538__uart_1ga9bce660570a90108e61dcba5d50babd7)            | UART1 Instance.
`struct `[`cc2538_uart_t`](#structcc2538__uart__t) | UART component registers.

## Members

#### `define `[`UART0_BASEADDR`](#group__cpu__cc2538__uart_1gaf3706b6ee733c0fc247345ccccf95fdc) 

UART0 Instance.

#### `define `[`UART1_BASEADDR`](#group__cpu__cc2538__uart_1ga9bce660570a90108e61dcba5d50babd7) 

UART1 Instance.

# struct `cc2538_uart_t` 

UART component registers.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DR`](#structcc2538__uart__t_1a35256c199b607ee1b1a5948411603971) | UART Data Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RSR`](#structcc2538__uart__t_1a81b31f346375040719fbcbc0230d478e) | UART receive status and error clear.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ECR`](#structcc2538__uart__t_1a9f78f0408488395f1df7a46a32417a4d) | UART receive status and error clear.
`public union cc2538_uart_t::@57 `[`cc2538_uart_dr`](#structcc2538__uart__t_1a1823d27a603ba62acc99c8ccbc0fbf00) | Status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__uart__t_1a6b581f8424477e44a90d38de65378ec8) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FR`](#structcc2538__uart__t_1aa3c58b4e3c5a04529fb4fce66417522c) | UART Flag Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTS`](#structcc2538__uart__t_1aecceb55beb00f85f0f449ae78d22d998) | Clear to send (UART1 only)
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__uart__t_1a79bc37cad070e46159975d3e3c1c5471) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BUSY`](#structcc2538__uart__t_1ac8afe61f859271e1c0b983b12bef5c14) | UART busy.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXFE`](#structcc2538__uart__t_1a7fb98187980cd7329e28635c2e3fe86f) | UART receive FIFO empty.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXFF`](#structcc2538__uart__t_1aa48e571b9645fc2fc25b26b434ac0f46) | UART transmit FIFO full.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXFF`](#structcc2538__uart__t_1a1832523a38dc6b1496adaf36e45093c0) | UART receive FIFO full.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXFE`](#structcc2538__uart__t_1aa7fb1a3442407f5669faec44380a19c3) | UART transmit FIFO empty.
`public struct cc2538_uart_t::@58::@64 `[`FRbits`](#structcc2538__uart__t_1a6660559af06cc98bb09ea6db788af2a5) | 
`public union cc2538_uart_t::@58 `[`cc2538_uart_fr`](#structcc2538__uart__t_1ae2f31bb01a36352207a0d521a9125fa8) | Flag register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ILPR`](#structcc2538__uart__t_1a5793b1b913d5ad0bc052bec811d14ebd) | UART IrDA Low-Power Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IBRD`](#structcc2538__uart__t_1a24d848ebc095b2d197e3ea2193d0a566) | UART Integer Baud-Rate Divisor.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FBRD`](#structcc2538__uart__t_1ae424e15310e74001f41868db30baad39) | UART Fractional Baud-Rate Divisor.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LCRH`](#structcc2538__uart__t_1a8d001810d35c952598b5a7093176fd65) | UART Line Control Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BRK`](#structcc2538__uart__t_1acff366cc2ebf1e74faf0973f342622aa) | UART send break.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PEN`](#structcc2538__uart__t_1a1f1f7bb9c4b67b40c2ed32e23f51f24f) | UART parity enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`EPS`](#structcc2538__uart__t_1a342b53eb754439cbcfb95a0b22e53f39) | UART even parity select.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`STP2`](#structcc2538__uart__t_1aa21b68a630b47dc0529d29bcfbcaee44) | UART two stop bits select.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FEN`](#structcc2538__uart__t_1ad8763df5df5f7c6e3dffe236d5319d22) | UART enable FIFOs.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`WLEN`](#structcc2538__uart__t_1ad8d7e7e222df88a73a2d0ec1b04fcf0d) | UART word length.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SPS`](#structcc2538__uart__t_1ab8b4cee0de76506ea5325d2bd80398fd) | UART stick parity select.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__uart__t_1a65c2db2127d6bb1721feebd2c08b442a) | Reserved bits.
`public struct cc2538_uart_t::@59::@65 `[`LCRHbits`](#structcc2538__uart__t_1a7a568920273d859cb4da5619925733e1) | 
`public union cc2538_uart_t::@59 `[`cc2538_uart_lcrh`](#structcc2538__uart__t_1ab5ad4c0a8c9fa74f7625f6cdfcb7ddfb) | Line control register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTL`](#structcc2538__uart__t_1a2defa477a27f62af2180537ca660095d) | UART Control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`UARTEN`](#structcc2538__uart__t_1a4936e099ddb1abfcca3e9e382f59ca86) | UART enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SIREN`](#structcc2538__uart__t_1a08305e62dbe9cc994b534189ee4cd66d) | UART SIR enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SIRLP`](#structcc2538__uart__t_1a3e74cfca0ff392a6e6885bc0aea534b4) | UART SIR low-power mode.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED11`](#structcc2538__uart__t_1ab8d0474e15d53357e1e435e0a0d5cb74) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`EOT`](#structcc2538__uart__t_1a07bd83de6604fb007afb6174a64b7b5f) | End of transmission.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`HSE`](#structcc2538__uart__t_1aa44e09c684c0812a5dc8721ce13f6583) | High-speed enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LIN`](#structcc2538__uart__t_1ab6aefe691711954c0aa4067d53d7c052) | LIN mode enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LBE`](#structcc2538__uart__t_1a97c0088d2ebe5150ba6d3d98eaefb7ab) | UART loop back enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXE`](#structcc2538__uart__t_1a26f275d1e9627b1c46de35bb65d0c46f) | UART transmit enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXE`](#structcc2538__uart__t_1a80747bb006541b8f0be508a24d5a8f5c) | UART receive enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED12`](#structcc2538__uart__t_1a90bdd30feab0e663fef8e1100fb4f218) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RTSEN`](#structcc2538__uart__t_1a7272f02977656d574d9bdf47313b452c) | U1RTS Hardware flow control enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTSEN`](#structcc2538__uart__t_1a023aa70e7727d97730971e2dfbb1bc8c) | U1CTS Hardware flow control enable.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED13`](#structcc2538__uart__t_1a87d852537e8fe1724599680d2ff47a77) | Reserved bits.
`public struct cc2538_uart_t::@60::@66 `[`CTLbits`](#structcc2538__uart__t_1a534cb5be0bff5735a85e763865f0c1bf) | 
`public union cc2538_uart_t::@60 `[`cc2538_uart_ctl`](#structcc2538__uart__t_1a6db26b2122db6ae4d8882f070175be89) | Control register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IFLS`](#structcc2538__uart__t_1a70e73b26147b1a886a7ff4371c7305be) | UART interrupt FIFO Level Select.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXIFLSEL`](#structcc2538__uart__t_1ab3ad423e019e1e6c50600df8464e4e15) | UART transmit interrupt FIFO level select.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXIFLSEL`](#structcc2538__uart__t_1ac335b92a85f374604499019843be3121) | UART receive interrupt FIFO level select.
`public struct cc2538_uart_t::@61::@67 `[`IFLSbits`](#structcc2538__uart__t_1afde3253f128b1577f062527a585a7984) | 
`public union cc2538_uart_t::@61 `[`cc2538_uart_ifls`](#structcc2538__uart__t_1abb25d26731e157f8b6dd46b14db333fe) | Interrupt FIFO level select register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IM`](#structcc2538__uart__t_1ab816da4cf438268c4df77b3d184dd7b1) | UART Interrupt Mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__uart__t_1abe539a027e24354ccece50e088894f2a) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXIM`](#structcc2538__uart__t_1a476fbb8bc12bcd7256983656c765862c) | UART receive interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXIM`](#structcc2538__uart__t_1a2a08486318b1244fd41acc061c767371) | UART transmit interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RTIM`](#structcc2538__uart__t_1a843cd4f13254a05554620256effd0746) | UART receive time-out interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FEIM`](#structcc2538__uart__t_1a99fd32c1be901edcec20afaa1d8c1aa6) | UART framing error interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PEIM`](#structcc2538__uart__t_1a28b9460887d3d94d58f3f857597e06e1) | UART parity error interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BEIM`](#structcc2538__uart__t_1a6d15f8e05337b53219d75338c2415954) | UART break error interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OEIM`](#structcc2538__uart__t_1a4d8e4068f2ea152a5c43001fd128b78d) | UART overrun error interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITM`](#structcc2538__uart__t_1a7d17fbc0cc6190f188e203483fd66a8e) | 9-bit mode interrupt mask
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LMSBIM`](#structcc2538__uart__t_1a519ca86fe5deaf095b3b516ace449d69) | LIN mode sync break interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME1IM`](#structcc2538__uart__t_1a5929f38f84623f0841a765648384eff9) | LIN mode edge 1 interrupt mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME5IM`](#structcc2538__uart__t_1a862c03f1ff965091b629c624a2fe1aea) | LIN mode edge 5 interrupt mask.
`public struct cc2538_uart_t::@62::@68 `[`IMbits`](#structcc2538__uart__t_1a13d6899d05018497d52dd6deba8d5739) | 
`public union cc2538_uart_t::@62 `[`cc2538_uart_im`](#structcc2538__uart__t_1aa7e439e07081164af553aa30df741938) | Interrupt mask register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__uart__t_1aa3bad31a166a372531b82e022fc48036) | UART Raw Interrupt Status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__uart__t_1a7b6ea68d21ad1460d60aba0f642bc73c) | UART Masked Interrupt Status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED8`](#structcc2538__uart__t_1a5dc5766da53b41a1cfcc25efbdd6d51a) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXMIS`](#structcc2538__uart__t_1af181fba0b745828796045b15f40546e0) | UART receive masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXMIS`](#structcc2538__uart__t_1af1f2e9cb3ea3bef34671a84fe2507ac5) | UART transmit masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RTMIS`](#structcc2538__uart__t_1a8ac1563c8f39bfb4505fbd174b4fb00e) | UART receive time-out masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FEMIS`](#structcc2538__uart__t_1a63bcfbd894ab25da3b41cebe3921be56) | UART framing error masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PEMIS`](#structcc2538__uart__t_1a2b648d51f91e4d762ba236a6ac551548) | UART parity error masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BEMIS`](#structcc2538__uart__t_1afa12c157887540ec5b3bf92d5dcf8211) | UART break error masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OEMIS`](#structcc2538__uart__t_1ae9b959412c27d72cd6b772d2d2c5fb07) | UART overrun error masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED9`](#structcc2538__uart__t_1a7e150bf6b00f989d7640eee5e5ccf5ab) | Reserved bits.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITMIS`](#structcc2538__uart__t_1ae2ba5b5f87b218b3bba73006b2797b61) | 9-bit mode masked interrupt status
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LMSBMIS`](#structcc2538__uart__t_1a55ca7374f13e3be111bc0ece79ad0f39) | LIN mode sync break masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME1MIS`](#structcc2538__uart__t_1a118dda294c9b8433c0bf188f8d587cd8) | LIN mode edge 1 masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME5MIS`](#structcc2538__uart__t_1a8719c0053f08051e0ce124986ed7c7ac) | LIN mode edge 5 masked interrupt status.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED10`](#structcc2538__uart__t_1ad507451c3628317fc67111da191911ee) | Reserved bits.
`public struct cc2538_uart_t::@63::@69 `[`MISbits`](#structcc2538__uart__t_1addbe952d2ea2c637e8d8d1c8f5e1d704) | 
`public union cc2538_uart_t::@63 `[`cc2538_uart_mis`](#structcc2538__uart__t_1a0fe3c3f536d6d562c1d9e1e2ab5ad91c) | Masked interrupt status register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ICR`](#structcc2538__uart__t_1a5d52bce58e477354b88c272471197976) | UART Interrupt Clear Register.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DMACTL`](#structcc2538__uart__t_1a2b3d2d043dc6456df906ee89b644bd56) | UART DMA Control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LCTL`](#structcc2538__uart__t_1a685425c8e5776f92857b3d0de312cc82) | UART LIN Control.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LSS`](#structcc2538__uart__t_1ae2af887d19b89f7680d39fd0c1484115) | UART LIN Snap Shot.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LTIM`](#structcc2538__uart__t_1aeb5229064027c1a883021349ea6ae84c) | UART LIN [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer).
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__uart__t_1afbbfd2906249a8982712a589c2821857) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITADDR`](#structcc2538__uart__t_1a01ea79c69ebf4d79055545955ecb9387) | UART 9-bit self Address.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITAMASK`](#structcc2538__uart__t_1a334e173275f78e03d05263bad034d191) | UART 9-bit self Address Mask.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__uart__t_1abf214c417a0542cba2055d23639be7c5) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PP`](#structcc2538__uart__t_1abe778c335f2cfcf7a1159b9b7c080425) | UART Peripheral Properties.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__uart__t_1a7abfe91484da48370d84e73d3a01a198) | Reserved addresses.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CC`](#structcc2538__uart__t_1a891532c7f9e1cf36a892e9ee7bbbac6d) | UART Clock Configuration.
`public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED7`](#structcc2538__uart__t_1aecbdae1a5881b22df6c3a185710bde00) | Reserved addresses.

## Members

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DR`](#structcc2538__uart__t_1a35256c199b607ee1b1a5948411603971) 

UART Data Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RSR`](#structcc2538__uart__t_1a81b31f346375040719fbcbc0230d478e) 

UART receive status and error clear.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ECR`](#structcc2538__uart__t_1a9f78f0408488395f1df7a46a32417a4d) 

UART receive status and error clear.

#### `public union cc2538_uart_t::@57 `[`cc2538_uart_dr`](#structcc2538__uart__t_1a1823d27a603ba62acc99c8ccbc0fbf00) 

Status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED1`](#structcc2538__uart__t_1a6b581f8424477e44a90d38de65378ec8) 

Reserved addresses.

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FR`](#structcc2538__uart__t_1aa3c58b4e3c5a04529fb4fce66417522c) 

UART Flag Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTS`](#structcc2538__uart__t_1aecceb55beb00f85f0f449ae78d22d998) 

Clear to send (UART1 only)

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED2`](#structcc2538__uart__t_1a79bc37cad070e46159975d3e3c1c5471) 

Reserved bits.

Reserved byte.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BUSY`](#structcc2538__uart__t_1ac8afe61f859271e1c0b983b12bef5c14) 

UART busy.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXFE`](#structcc2538__uart__t_1a7fb98187980cd7329e28635c2e3fe86f) 

UART receive FIFO empty.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXFF`](#structcc2538__uart__t_1aa48e571b9645fc2fc25b26b434ac0f46) 

UART transmit FIFO full.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXFF`](#structcc2538__uart__t_1a1832523a38dc6b1496adaf36e45093c0) 

UART receive FIFO full.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXFE`](#structcc2538__uart__t_1aa7fb1a3442407f5669faec44380a19c3) 

UART transmit FIFO empty.

#### `public struct cc2538_uart_t::@58::@64 `[`FRbits`](#structcc2538__uart__t_1a6660559af06cc98bb09ea6db788af2a5) 

#### `public union cc2538_uart_t::@58 `[`cc2538_uart_fr`](#structcc2538__uart__t_1ae2f31bb01a36352207a0d521a9125fa8) 

Flag register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ILPR`](#structcc2538__uart__t_1a5793b1b913d5ad0bc052bec811d14ebd) 

UART IrDA Low-Power Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IBRD`](#structcc2538__uart__t_1a24d848ebc095b2d197e3ea2193d0a566) 

UART Integer Baud-Rate Divisor.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FBRD`](#structcc2538__uart__t_1ae424e15310e74001f41868db30baad39) 

UART Fractional Baud-Rate Divisor.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LCRH`](#structcc2538__uart__t_1a8d001810d35c952598b5a7093176fd65) 

UART Line Control Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BRK`](#structcc2538__uart__t_1acff366cc2ebf1e74faf0973f342622aa) 

UART send break.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PEN`](#structcc2538__uart__t_1a1f1f7bb9c4b67b40c2ed32e23f51f24f) 

UART parity enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`EPS`](#structcc2538__uart__t_1a342b53eb754439cbcfb95a0b22e53f39) 

UART even parity select.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`STP2`](#structcc2538__uart__t_1aa21b68a630b47dc0529d29bcfbcaee44) 

UART two stop bits select.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FEN`](#structcc2538__uart__t_1ad8763df5df5f7c6e3dffe236d5319d22) 

UART enable FIFOs.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`WLEN`](#structcc2538__uart__t_1ad8d7e7e222df88a73a2d0ec1b04fcf0d) 

UART word length.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SPS`](#structcc2538__uart__t_1ab8b4cee0de76506ea5325d2bd80398fd) 

UART stick parity select.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED`](#structcc2538__uart__t_1a65c2db2127d6bb1721feebd2c08b442a) 

Reserved bits.

#### `public struct cc2538_uart_t::@59::@65 `[`LCRHbits`](#structcc2538__uart__t_1a7a568920273d859cb4da5619925733e1) 

#### `public union cc2538_uart_t::@59 `[`cc2538_uart_lcrh`](#structcc2538__uart__t_1ab5ad4c0a8c9fa74f7625f6cdfcb7ddfb) 

Line control register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTL`](#structcc2538__uart__t_1a2defa477a27f62af2180537ca660095d) 

UART Control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`UARTEN`](#structcc2538__uart__t_1a4936e099ddb1abfcca3e9e382f59ca86) 

UART enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SIREN`](#structcc2538__uart__t_1a08305e62dbe9cc994b534189ee4cd66d) 

UART SIR enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`SIRLP`](#structcc2538__uart__t_1a3e74cfca0ff392a6e6885bc0aea534b4) 

UART SIR low-power mode.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED11`](#structcc2538__uart__t_1ab8d0474e15d53357e1e435e0a0d5cb74) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`EOT`](#structcc2538__uart__t_1a07bd83de6604fb007afb6174a64b7b5f) 

End of transmission.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`HSE`](#structcc2538__uart__t_1aa44e09c684c0812a5dc8721ce13f6583) 

High-speed enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LIN`](#structcc2538__uart__t_1ab6aefe691711954c0aa4067d53d7c052) 

LIN mode enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LBE`](#structcc2538__uart__t_1a97c0088d2ebe5150ba6d3d98eaefb7ab) 

UART loop back enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXE`](#structcc2538__uart__t_1a26f275d1e9627b1c46de35bb65d0c46f) 

UART transmit enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXE`](#structcc2538__uart__t_1a80747bb006541b8f0be508a24d5a8f5c) 

UART receive enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED12`](#structcc2538__uart__t_1a90bdd30feab0e663fef8e1100fb4f218) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RTSEN`](#structcc2538__uart__t_1a7272f02977656d574d9bdf47313b452c) 

U1RTS Hardware flow control enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CTSEN`](#structcc2538__uart__t_1a023aa70e7727d97730971e2dfbb1bc8c) 

U1CTS Hardware flow control enable.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED13`](#structcc2538__uart__t_1a87d852537e8fe1724599680d2ff47a77) 

Reserved bits.

#### `public struct cc2538_uart_t::@60::@66 `[`CTLbits`](#structcc2538__uart__t_1a534cb5be0bff5735a85e763865f0c1bf) 

#### `public union cc2538_uart_t::@60 `[`cc2538_uart_ctl`](#structcc2538__uart__t_1a6db26b2122db6ae4d8882f070175be89) 

Control register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IFLS`](#structcc2538__uart__t_1a70e73b26147b1a886a7ff4371c7305be) 

UART interrupt FIFO Level Select.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXIFLSEL`](#structcc2538__uart__t_1ab3ad423e019e1e6c50600df8464e4e15) 

UART transmit interrupt FIFO level select.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXIFLSEL`](#structcc2538__uart__t_1ac335b92a85f374604499019843be3121) 

UART receive interrupt FIFO level select.

#### `public struct cc2538_uart_t::@61::@67 `[`IFLSbits`](#structcc2538__uart__t_1afde3253f128b1577f062527a585a7984) 

#### `public union cc2538_uart_t::@61 `[`cc2538_uart_ifls`](#structcc2538__uart__t_1abb25d26731e157f8b6dd46b14db333fe) 

Interrupt FIFO level select register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`IM`](#structcc2538__uart__t_1ab816da4cf438268c4df77b3d184dd7b1) 

UART Interrupt Mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED3`](#structcc2538__uart__t_1abe539a027e24354ccece50e088894f2a) 

Reserved bits.

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXIM`](#structcc2538__uart__t_1a476fbb8bc12bcd7256983656c765862c) 

UART receive interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXIM`](#structcc2538__uart__t_1a2a08486318b1244fd41acc061c767371) 

UART transmit interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RTIM`](#structcc2538__uart__t_1a843cd4f13254a05554620256effd0746) 

UART receive time-out interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FEIM`](#structcc2538__uart__t_1a99fd32c1be901edcec20afaa1d8c1aa6) 

UART framing error interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PEIM`](#structcc2538__uart__t_1a28b9460887d3d94d58f3f857597e06e1) 

UART parity error interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BEIM`](#structcc2538__uart__t_1a6d15f8e05337b53219d75338c2415954) 

UART break error interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OEIM`](#structcc2538__uart__t_1a4d8e4068f2ea152a5c43001fd128b78d) 

UART overrun error interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITM`](#structcc2538__uart__t_1a7d17fbc0cc6190f188e203483fd66a8e) 

9-bit mode interrupt mask

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LMSBIM`](#structcc2538__uart__t_1a519ca86fe5deaf095b3b516ace449d69) 

LIN mode sync break interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME1IM`](#structcc2538__uart__t_1a5929f38f84623f0841a765648384eff9) 

LIN mode edge 1 interrupt mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME5IM`](#structcc2538__uart__t_1a862c03f1ff965091b629c624a2fe1aea) 

LIN mode edge 5 interrupt mask.

#### `public struct cc2538_uart_t::@62::@68 `[`IMbits`](#structcc2538__uart__t_1a13d6899d05018497d52dd6deba8d5739) 

#### `public union cc2538_uart_t::@62 `[`cc2538_uart_im`](#structcc2538__uart__t_1aa7e439e07081164af553aa30df741938) 

Interrupt mask register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RIS`](#structcc2538__uart__t_1aa3bad31a166a372531b82e022fc48036) 

UART Raw Interrupt Status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`MIS`](#structcc2538__uart__t_1a7b6ea68d21ad1460d60aba0f642bc73c) 

UART Masked Interrupt Status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED8`](#structcc2538__uart__t_1a5dc5766da53b41a1cfcc25efbdd6d51a) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RXMIS`](#structcc2538__uart__t_1af181fba0b745828796045b15f40546e0) 

UART receive masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`TXMIS`](#structcc2538__uart__t_1af1f2e9cb3ea3bef34671a84fe2507ac5) 

UART transmit masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RTMIS`](#structcc2538__uart__t_1a8ac1563c8f39bfb4505fbd174b4fb00e) 

UART receive time-out masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`FEMIS`](#structcc2538__uart__t_1a63bcfbd894ab25da3b41cebe3921be56) 

UART framing error masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PEMIS`](#structcc2538__uart__t_1a2b648d51f91e4d762ba236a6ac551548) 

UART parity error masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`BEMIS`](#structcc2538__uart__t_1afa12c157887540ec5b3bf92d5dcf8211) 

UART break error masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`OEMIS`](#structcc2538__uart__t_1ae9b959412c27d72cd6b772d2d2c5fb07) 

UART overrun error masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED9`](#structcc2538__uart__t_1a7e150bf6b00f989d7640eee5e5ccf5ab) 

Reserved bits.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITMIS`](#structcc2538__uart__t_1ae2ba5b5f87b218b3bba73006b2797b61) 

9-bit mode masked interrupt status

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LMSBMIS`](#structcc2538__uart__t_1a55ca7374f13e3be111bc0ece79ad0f39) 

LIN mode sync break masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME1MIS`](#structcc2538__uart__t_1a118dda294c9b8433c0bf188f8d587cd8) 

LIN mode edge 1 masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LME5MIS`](#structcc2538__uart__t_1a8719c0053f08051e0ce124986ed7c7ac) 

LIN mode edge 5 masked interrupt status.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED10`](#structcc2538__uart__t_1ad507451c3628317fc67111da191911ee) 

Reserved bits.

#### `public struct cc2538_uart_t::@63::@69 `[`MISbits`](#structcc2538__uart__t_1addbe952d2ea2c637e8d8d1c8f5e1d704) 

#### `public union cc2538_uart_t::@63 `[`cc2538_uart_mis`](#structcc2538__uart__t_1a0fe3c3f536d6d562c1d9e1e2ab5ad91c) 

Masked interrupt status register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`ICR`](#structcc2538__uart__t_1a5d52bce58e477354b88c272471197976) 

UART Interrupt Clear Register.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`DMACTL`](#structcc2538__uart__t_1a2b3d2d043dc6456df906ee89b644bd56) 

UART DMA Control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LCTL`](#structcc2538__uart__t_1a685425c8e5776f92857b3d0de312cc82) 

UART LIN Control.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LSS`](#structcc2538__uart__t_1ae2af887d19b89f7680d39fd0c1484115) 

UART LIN Snap Shot.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`LTIM`](#structcc2538__uart__t_1aeb5229064027c1a883021349ea6ae84c) 

UART LIN [Timer](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structTimer).

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED4`](#structcc2538__uart__t_1afbbfd2906249a8982712a589c2821857) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITADDR`](#structcc2538__uart__t_1a01ea79c69ebf4d79055545955ecb9387) 

UART 9-bit self Address.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`NINEBITAMASK`](#structcc2538__uart__t_1a334e173275f78e03d05263bad034d191) 

UART 9-bit self Address Mask.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED5`](#structcc2538__uart__t_1abf214c417a0542cba2055d23639be7c5) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`PP`](#structcc2538__uart__t_1abe778c335f2cfcf7a1159b9b7c080425) 

UART Peripheral Properties.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED6`](#structcc2538__uart__t_1a7abfe91484da48370d84e73d3a01a198) 

Reserved addresses.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`CC`](#structcc2538__uart__t_1a891532c7f9e1cf36a892e9ee7bbbac6d) 

UART Clock Configuration.

#### `public `[`cc2538_reg_t`](./doc/starlight-docs/src/content/docs/apidoc/api-undefined.md#cc2538_8h_1a068f22e8748490a08abf861eff38cc84)` `[`RESERVED7`](#structcc2538__uart__t_1aecbdae1a5881b22df6c3a185710bde00) 

Reserved addresses.

