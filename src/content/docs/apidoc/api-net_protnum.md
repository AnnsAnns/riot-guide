---
title: api-net_protnum.md
description: api-net_protnum.md
---
# group `net_protnum` 

Defines for the Protocol Numbers as they are used in the IPv4 protocol field and the IPv6 next header field ([ipv6_hdr_t::nh](./doc/starlight-docs/src/content/docs/apidoc/api-net_ipv6_hdr.md#structipv6__hdr__t_1a81a33145874adac54190598e2ad1ec30)).

**See also**: [IANA, Assigned Internet Protocol Numbers ](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

Last Updated: 2015-01-06

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`PROTNUM_IPV6_EXT_HOPOPT`](#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09)            | IPv6 Hop-by-Hop Option.
`define `[`PROTNUM_ICMP`](#group__net__protnum_1ga68c9c707e960a5450bed19f693b0081a)            | Internet Control Message.
`define `[`PROTNUM_IGMP`](#group__net__protnum_1ga5caaabde93fb9a5b98502b80c8d20d1c)            | Internet Group Management.
`define `[`PROTNUM_GGP`](#group__net__protnum_1ga811d54d25fd134aa6981a9ecb5b04212)            | Gateway-to-Gateway.
`define `[`PROTNUM_IPV4`](#group__net__protnum_1ga443bff9c033df23fee83ab399d528d05)            | IPv4 encapsulation.
`define `[`PROTNUM_ST`](#group__net__protnum_1ga08d0f56d911c3b76f4fa31e4b5dd0c20)            | Stream.
`define `[`PROTNUM_TCP`](#group__net__protnum_1gae25eadf44223e2a1ac30b3b6b21b9dd9)            | Transmission Control.
`define `[`PROTNUM_CBT`](#group__net__protnum_1ga51feba0dc4ea5e3cd63984563d9add2a)            | CBT.
`define `[`PROTNUM_EGP`](#group__net__protnum_1ga51f5ab51be6054a98f9570a210e4d655)            | Exterior Gateway Protocol.
`define `[`PROTNUM_IGP`](#group__net__protnum_1ga5b3d8776cc98cc565162dc0a6ae4affb)            | any private interior gateway (Cisco IGRP)
`define `[`PROTNUM_BBN_RCC_MON`](#group__net__protnum_1ga8be43430f233a17db53d67563bd39c3c)            | BBN RCC Monitoring.
`define `[`PROTNUM_NVP_II`](#group__net__protnum_1ga106a69371d3e140fe5eaa9900a303752)            | [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Voice Protocol.
`define `[`PROTNUM_PUP`](#group__net__protnum_1ga93a81ae5f9abdeedaceae9330a043d84)            | PUP.
`define `[`PROTNUM_ARGUS`](#group__net__protnum_1ga7ecdc9805891cc3fb3f0c612fbc555f3)            | ARGUS.
`define `[`PROTNUM_EMCON`](#group__net__protnum_1gac20b9ccf9842bae69ed17af34e7e52d7)            | EMCON.
`define `[`PROTNUM_XNET`](#group__net__protnum_1gac747de5a0f23902b3427846bcc7b8da3)            | Cross Net Debugger.
`define `[`PROTNUM_CHAOS`](#group__net__protnum_1gaa4fe6cb1536950f2dad5dfcd3f74952e)            | Chaos.
`define `[`PROTNUM_UDP`](#group__net__protnum_1gadb98165766bcdd60d0473ceb5ee53752)            | User Datagram.
`define `[`PROTNUM_MUX`](#group__net__protnum_1ga529a41d8c01341d465d800e7bcfefcbf)            | Multiplexing.
`define `[`PROTNUM_DCN_MEAS`](#group__net__protnum_1gadec682ff9cdb89d62cc85b785c86da33)            | DCN Measurement Subsystems.
`define `[`PROTNUM_HMP`](#group__net__protnum_1ga7d2f0130323eee0c357a591e2653bccc)            | Host Monitoring.
`define `[`PROTNUM_PRM`](#group__net__protnum_1gae147224350d9c5b57504251038f4e813)            | Packet Radio Measurement.
`define `[`PROTNUM_XNS_IDP`](#group__net__protnum_1gac7a421ed81fac78b13a4d62f67f7bd09)            | XEROX NS IDP.
`define `[`PROTNUM_TRUNK_1`](#group__net__protnum_1ga6760edd5e920c49bb5d3de733955af1a)            | Trunk-1.
`define `[`PROTNUM_TRUNK_2`](#group__net__protnum_1gaa027e0e3c0586fc630b4f3ba82190622)            | Trunk-2.
`define `[`PROTNUM_LEAF_1`](#group__net__protnum_1ga23a61657ebaa13ddf381189425915a7b)            | Leaf-1.
`define `[`PROTNUM_LEAF_2`](#group__net__protnum_1ga85afe437b0ca7c35ffebc939f9252ffd)            | Leaf-2.
`define `[`PROTNUM_RDP`](#group__net__protnum_1gace25bbcddfa5acc9968137693f620d18)            | Reliable Data Protocol.
`define `[`PROTNUM_IRTP`](#group__net__protnum_1gacea4c5d5fcbb00a6b9e7d5a0ebdbda26)            | Internet Reliable Transaction.
`define `[`PROTNUM_ISO_TP4`](#group__net__protnum_1gaa7a59ec30b9ae80fb070a889c801f987)            | ISO Transport Protocol Class 4.
`define `[`PROTNUM_NETBLT`](#group__net__protnum_1ga81395ea8b95ab95964cf7338500816f3)            | Bulk Data Transfer Protocol.
`define `[`PROTNUM_MFE_NSP`](#group__net__protnum_1gabf47edaf83f8e46fb40137561cba44c7)            | MFE [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Services Protocol.
`define `[`PROTNUM_MERIT_INP`](#group__net__protnum_1ga28782c95e03281353f9597d75b9be74a)            | MERIT Internodal Protocol.
`define `[`PROTNUM_DCCP`](#group__net__protnum_1ga6f866d7da3fc5229425aef0e6c9c1dce)            | Datagram Congestion Control Protocol.
`define `[`PROTNUM_3PC`](#group__net__protnum_1ga6afd17967ad08080b6dd21f872485dcb)            | Third Party Connect Protocol.
`define `[`PROTNUM_IDPR`](#group__net__protnum_1gacb64b6317c4edbc6d9b517c73fabaade)            | Inter-Domain Policy Routing Protocol.
`define `[`PROTNUM_XTP`](#group__net__protnum_1gafd485aa30f0eee6d58682f29f9c8b0bf)            | XTP.
`define `[`PROTNUM_DDP`](#group__net__protnum_1gadad788568d6c30eed822eb8fe0021ac6)            | Datagram Delivery Protocol.
`define `[`PROTNUM_IDPR_CMTP`](#group__net__protnum_1ga4fe27f1df428a7f0032d2550339dc643)            | IDPR Control Message Transport Proto.
`define `[`PROTNUM_TPPLUSPLUS`](#group__net__protnum_1gaee58e918a178449b644d4e8cb5b1f4c7)            | TP++ Transport Protocol.
`define `[`PROTNUM_IL`](#group__net__protnum_1gaa4bca2ff788304a194753c1ddf15d3f5)            | IL Transport Protocol.
`define `[`PROTNUM_IPV6`](#group__net__protnum_1gabeaa5adb248bdb1ad11e6a8272c5c015)            | IPv6 encapsulation.
`define `[`PROTNUM_SDRP`](#group__net__protnum_1gac7fbcc5a81588fa2bd68adfae0a170e2)            | Source Demand Routing Protocol.
`define `[`PROTNUM_IPV6_EXT_RH`](#group__net__protnum_1gaf607586f58617110503d1a711941ca44)            | Routing Header for IPv6.
`define `[`PROTNUM_IPV6_EXT_FRAG`](#group__net__protnum_1ga273a3e8a6908ca424c626abd983b8f03)            | Fragment Header for IPv6.
`define `[`PROTNUM_IDRP`](#group__net__protnum_1gae6062faf012cad2171e19914beae1988)            | Inter-Domain Routing Protocol.
`define `[`PROTNUM_RSVP`](#group__net__protnum_1gad00019dc2abff6b481f806adf6215699)            | Reservation Protocol.
`define `[`PROTNUM_GRE`](#group__net__protnum_1ga4c4dbf0d74664e85fd71014fe4bba755)            | Generic Routing Encapsulation.
`define `[`PROTNUM_DSR`](#group__net__protnum_1ga2abe844a0c3994849cc6752d5f12e262)            | Dynamic Source Routing Protocol.
`define `[`PROTNUM_BNA`](#group__net__protnum_1ga195666330f6e26459fb8254af99ace2a)            | BNA.
`define `[`PROTNUM_IPV6_EXT_ESP`](#group__net__protnum_1ga4f122666fea2f08304b9e6adee2fe327)            | IPv6 Encap Security Payload Extension Header.
`define `[`PROTNUM_IPV6_EXT_AH`](#group__net__protnum_1gade74af94d601518b35d5ffbcf5c5129b)            | IPv6 Authentication Extension Header.
`define `[`PROTNUM_I_NLSP`](#group__net__protnum_1ga6e895c526d2683e8f3744f1a557ca0da)            | Integrated Net Layer Security TUBA.
`define `[`PROTNUM_SWIPE`](#group__net__protnum_1gaeb79da419293c57574fb3d123cd253c9)            | IP with Encryption (deprecated)
`define `[`PROTNUM_NARP`](#group__net__protnum_1ga95584d2c8b53856942580d7dae04d4e6)            | NBMA Address Resolution Protocol.
`define `[`PROTNUM_MOBILE`](#group__net__protnum_1ga6b2a165d96ab4552aa3d4ad16720c048)            | IP Mobility.
`define `[`PROTNUM_TLSP`](#group__net__protnum_1gab1480c58de5ab9d2424dce3d4478b534)            | Transport Layer Security Protocol.
`define `[`PROTNUM_SKIP`](#group__net__protnum_1ga59d0ee7565da575ac64ff8b4daa70c42)            | SKIP.
`define `[`PROTNUM_ICMPV6`](#group__net__protnum_1ga6b7b759ecd9cc9ed3d13378167b1eb0c)            | ICMP for IPv6.
`define `[`PROTNUM_IPV6_NONXT`](#group__net__protnum_1ga5d25ac1451ab7e0d62ecf14fce7fc986)            | No Next Header for IPv6.
`define `[`PROTNUM_IPV6_EXT_DST`](#group__net__protnum_1ga786212723c89cca63161c9d31583619d)            | IPv6 Extension Header: Destination Options.
`define `[`PROTNUM_CFTP`](#group__net__protnum_1ga14f2684802c402931f3a95735bc87498)            | CFTP.
`define `[`PROTNUM_SAT_EXPAK`](#group__net__protnum_1ga73bd1dbea35b831a3309085489556f37)            | SATNET and Backroom EXPAK.
`define `[`PROTNUM_KRYPTOLAN`](#group__net__protnum_1ga60e9e39d64e806749ed8636ce276a9b8)            | Kryptolan.
`define `[`PROTNUM_RVD`](#group__net__protnum_1ga94292301e0d2cc6ab87d093f801b275e)            | MIT Remote Virtual Disk Protocol.
`define `[`PROTNUM_IPPC`](#group__net__protnum_1gadfce76c4204d5006815bc7e439da0cbe)            | Internet Pluribus Packet Core.
`define `[`PROTNUM_SAT_MON`](#group__net__protnum_1ga14be4d7842dcfa8392b2964d6a89cdb2)            | SATNET Monitoring.
`define `[`PROTNUM_VISA`](#group__net__protnum_1ga035beeb87e68647455bc3a4f6a725c38)            | VISA Protocol.
`define `[`PROTNUM_IPCV`](#group__net__protnum_1gafc79ff9d91d99bac681eaaccaad10f7d)            | Internet Packet Core Utility.
`define `[`PROTNUM_CPNX`](#group__net__protnum_1ga6023f951a13c76baf06074a44df83d86)            | Computer Protocol [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Executive.
`define `[`PROTNUM_CPHB`](#group__net__protnum_1gaa2f68efb55a1735f22ae4a5d7d6ab537)            | Computer Protocol Heart Beat.
`define `[`PROTNUM_WSN`](#group__net__protnum_1gae3665d7a68e1754152a33a6c7d2f5372)            | Wang Span [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork).
`define `[`PROTNUM_PVP`](#group__net__protnum_1ga06c572079768b968ac76276bf7868830)            | Packet Video Protocol.
`define `[`PROTNUM_BR_SAT_MON`](#group__net__protnum_1gaafddf4d4bf3cc1348a320a84b015b9f4)            | Backroom SATNET Monitoring.
`define `[`PROTNUM_SUN_ND`](#group__net__protnum_1gae3eadae7c5fad34f4f04ef39865006f0)            | SUN ND PROTOCOL-Temporary.
`define `[`PROTNUM_WB_MON`](#group__net__protnum_1ga4127b946cd08a4a221339eee05389e92)            | WIDEBAND Monitoring.
`define `[`PROTNUM_WB_EXPAK`](#group__net__protnum_1gad8950b24534d0831027b3cffb9ec29d8)            | WIDEBAND EXPAK.
`define `[`PROTNUM_ISO_IP`](#group__net__protnum_1gabc20828b3e5b393d97f67eecd5033e76)            | ISO Internet Protocol.
`define `[`PROTNUM_VMTP`](#group__net__protnum_1ga81017468388e23ca304b7d7767607354)            | VMTP.
`define `[`PROTNUM_SECURE_VMTP`](#group__net__protnum_1gaa22369bbfa04ebcd9c13c6f6836f6709)            | SECURE-VMTP.
`define `[`PROTNUM_VINES`](#group__net__protnum_1gac686530bc8882f96cd93707ad14509be)            | VINES.
`define `[`PROTNUM_TTP`](#group__net__protnum_1gabfb1ebd0eb445d183678d42cf0b677d1)            | Transaction Transport Protocol.
`define `[`PROTNUM_IPTM`](#group__net__protnum_1gacd1fd360d21f693b04bc30d532d56a56)            | Internet Protocol Traffic Manager.
`define `[`PROTNUM_NSFNET_IGP`](#group__net__protnum_1ga9e04effb791788104d4f22b8fd2c3540)            | NSFNET-IGP.
`define `[`PROTNUM_DGP`](#group__net__protnum_1gaa20a2cc2c0a73a6ccd323431d756586b)            | Dissimilar Gateway Protocol.
`define `[`PROTNUM_TCF`](#group__net__protnum_1ga834585cb366c4d16923c91825a13ecbf)            | TCF.
`define `[`PROTNUM_EIGRP`](#group__net__protnum_1ga48dbb59f87a8ac593a543cb28e54a875)            | EIGRP.
`define `[`PROTNUM_OSPFIGP`](#group__net__protnum_1ga341c059d6fc2bd8caf444e17e6e876a3)            | OSPFIGP.
`define `[`PROTNUM_SPRITE_RPC`](#group__net__protnum_1ga4c12bc76bd8d0d9df788d99d4a3927c4)            | Sprite RPC Protocol.
`define `[`PROTNUM_LARP`](#group__net__protnum_1ga3035eadcaa149f9df4fdc52f80d422ca)            | Locus Address Resolution Protocol.
`define `[`PROTNUM_MTP`](#group__net__protnum_1gae13eda42eee1591d78527eb22f7f80d1)            | Multicast Transport Protocol.
`define `[`PROTNUM_AX_25`](#group__net__protnum_1ga522b6e6137c7c7eb8a6e9d051256dce5)            | AX.25 Frames.
`define `[`PROTNUM_IPIP`](#group__net__protnum_1ga5b81c28ae2d2107bcc386605983e4c0a)            | IP-within-IP Encapsulation Protocol.
`define `[`PROTNUM_MICP`](#group__net__protnum_1ga45871db071d11b809d698597fa10af2d)            | Mobile Internetworking Control Pro (deprecated)
`define `[`PROTNUM_SCC_SP`](#group__net__protnum_1ga6751bd507c785253b67b6e89cdcc42cf)            | Semaphore Communications Sec Pro.
`define `[`PROTNUM_ETHERIP`](#group__net__protnum_1gadf142fcf30568894ae17e9d3a7ab8781)            | Ethernet-within-IP Encapsulation.
`define `[`PROTNUM_ENCAP`](#group__net__protnum_1ga9ebeedf2ada1e119b99dbf6274025f07)            | Encapsulation Header.
`define `[`PROTNUM_GMTP`](#group__net__protnum_1ga461a0c53427788dc732f448953f7de78)            | GMTP.
`define `[`PROTNUM_IFMP`](#group__net__protnum_1gadd0d68a78a160bb4b2ce5531e2b908c1)            | Ipsilon Flow Management Protocol.
`define `[`PROTNUM_PNNI`](#group__net__protnum_1gab5c28b55da7489cc864cf17cfacd9345)            | PNNI over IP.
`define `[`PROTNUM_PIM`](#group__net__protnum_1ga245127e39635b583964c97bb598fc91c)            | Protocol Independent Multicast.
`define `[`PROTNUM_ARIS`](#group__net__protnum_1ga9963f6f0a6096a8035091e93d6731c1b)            | ARIS.
`define `[`PROTNUM_SCPS`](#group__net__protnum_1ga21d044d332010feb583781e00d901ea9)            | SCPS.
`define `[`PROTNUM_QNX`](#group__net__protnum_1gaabdec660a6fd6ff6896731752546b104)            | QNX.
`define `[`PROTNUM_A_N`](#group__net__protnum_1gaf13789870cc0d70fc9e66279e03f152e)            | Active Networks.
`define `[`PROTNUM_IPCOMP`](#group__net__protnum_1gaa2d356733744dd16fbcb77812c1f060a)            | IP Payload Compression Protocol.
`define `[`PROTNUM_SNP`](#group__net__protnum_1ga004eb5a4af8f1e18612c14d760bea45d)            | Sitara Networks Protocol.
`define `[`PROTNUM_COMPAQ_PEER`](#group__net__protnum_1ga4e5c7da4ae97b23be34a0e5c9795a013)            | Compaq Peer Protocol.
`define `[`PROTNUM_IPX_IN_IP`](#group__net__protnum_1gaedfb052907a75ad9934feb86c28e556a)            | IPX in IP.
`define `[`PROTNUM_VRRP`](#group__net__protnum_1gaeff32808c72c059bd437364860d059ec)            | Virtual Router Redundancy Protocol.
`define `[`PROTNUM_PGM`](#group__net__protnum_1gaa9d0ed3fd4588abd1918b70d7a6b2c67)            | PGM Reliable Transport Protocol.
`define `[`PROTNUM_L2TP`](#group__net__protnum_1ga1ea04ee1842eb9512aad0095ab219ef9)            | Layer Two Tunneling Protocol.
`define `[`PROTNUM_DDX`](#group__net__protnum_1ga123afdd542b7e056b42fa10798284b27)            | D-II Data Exchange (DDX)
`define `[`PROTNUM_IATP`](#group__net__protnum_1gab4a60ed9eca0b89da83e905dc1ab6ada)            | Interactive Agent Transfer Protocol.
`define `[`PROTNUM_STP`](#group__net__protnum_1gab8ed17eddf7c6462d8a216aca526b7cb)            | Schedule Transfer Protocol.
`define `[`PROTNUM_SRP`](#group__net__protnum_1ga8cb5ed6a72e0336a0837457d83ab1613)            | SpectraLink Radio Protocol.
`define `[`PROTNUM_UTI`](#group__net__protnum_1ga0b0042932a81151b1a97f4e64cb304b7)            | UTI.
`define `[`PROTNUM_SMP`](#group__net__protnum_1ga23342d6cdf62577d44209d0edc07e5a9)            | Simple Message Protocol.
`define `[`PROTNUM_SM`](#group__net__protnum_1ga247d11fa82860246a91f39b52439c268)            | Simple Multicast Protocol.
`define `[`PROTNUM_PTP`](#group__net__protnum_1ga4f5efafd49f48d760c26bd226e6241d8)            | Performance Transparency Protocol.
`define `[`PROTNUM_ISIS_OVER_IPV4`](#group__net__protnum_1ga5c578c3c0abd8374312c867c65406eff)            | ISIS over IPv4.
`define `[`PROTNUM_FIRE`](#group__net__protnum_1ga75f5b13defb221163bc3377cde89f206)            | FIRE.
`define `[`PROTNUM_CRTP`](#group__net__protnum_1ga32a7f4a8fde85abbc32773bed5ba5f1b)            | Combat Radio Transport Protocol.
`define `[`PROTNUM_CRUDP`](#group__net__protnum_1ga199197c684cb2515aeab69a0f8e32905)            | Combat Radio User Datagram.
`define `[`PROTNUM_SSCOPMCE`](#group__net__protnum_1gae4ed03b9f300efca429402b8e7115ebd)            | SSCOPMCE.
`define `[`PROTNUM_IPLT`](#group__net__protnum_1ga4ff97b83647daad259c6e95b515a4b92)            | IPLT.
`define `[`PROTNUM_SPS`](#group__net__protnum_1ga345f37a8ddbc8f740a119716e8315f63)            | Secure Packet Shield.
`define `[`PROTNUM_PIPE`](#group__net__protnum_1ga9edeac6022e30cf7940387c5f3eef6f2)            | Private IP Encapsulation within IP.
`define `[`PROTNUM_SCTP`](#group__net__protnum_1gaf5076e21f34f68f41ed06f0712ef0ffd)            | Stream Control Transmission Protocol.
`define `[`PROTNUM_FC`](#group__net__protnum_1ga62cb3cd56bc166136864bc424074710e)            | Fibre Channel.
`define `[`PROTNUM_RSVP_E2E_IGNORE`](#group__net__protnum_1gaa50c45ef0ac26401719ee8229167a613)            | RSVP-E2E-IGNORE.
`define `[`PROTNUM_IPV6_EXT_MOB`](#group__net__protnum_1ga060dbfddd5d80ad52f4d11cd2230399f)            | IPv6 Mobility Extension Header.
`define `[`PROTNUM_UDPLITE`](#group__net__protnum_1ga45d645b2e6109add740f81471c19e562)            | UDPLite.
`define `[`PROTNUM_MPLS_IN_IP`](#group__net__protnum_1ga251593f7066af982dab89cab4783cea3)            | MPLS-in-IP.
`define `[`PROTNUM_MANET`](#group__net__protnum_1ga2ec807cfba364b9d1d5c7ad246f3f90f)            | MANET Protocols.
`define `[`PROTNUM_HIP`](#group__net__protnum_1ga39c5e939873cc899a29288070132d6a4)            | Host Identity Protocol.
`define `[`PROTNUM_SHIM6`](#group__net__protnum_1ga5ba555a0ebf9c440911fe0cc7fc80b83)            | Shim6 Protocol.
`define `[`PROTNUM_WESP`](#group__net__protnum_1ga0e5916f1766e9ac4f60bc82208f48f3a)            | Wrapped Encapsulating Security Payload.
`define `[`PROTNUM_ROHC`](#group__net__protnum_1gaaeb733b655759eeaad5dbc979ca2df81)            | Robust Header Compression.
`define `[`PROTNUM_RESERVED`](#group__net__protnum_1ga39e5e549b67c499f796d4c90698c007e)            | Reserved.

## Members

#### `define `[`PROTNUM_IPV6_EXT_HOPOPT`](#group__net__protnum_1ga1295a98bde23b10aa54cf2e63b5eaf09) 

IPv6 Hop-by-Hop Option.

#### `define `[`PROTNUM_ICMP`](#group__net__protnum_1ga68c9c707e960a5450bed19f693b0081a) 

Internet Control Message.

#### `define `[`PROTNUM_IGMP`](#group__net__protnum_1ga5caaabde93fb9a5b98502b80c8d20d1c) 

Internet Group Management.

#### `define `[`PROTNUM_GGP`](#group__net__protnum_1ga811d54d25fd134aa6981a9ecb5b04212) 

Gateway-to-Gateway.

#### `define `[`PROTNUM_IPV4`](#group__net__protnum_1ga443bff9c033df23fee83ab399d528d05) 

IPv4 encapsulation.

#### `define `[`PROTNUM_ST`](#group__net__protnum_1ga08d0f56d911c3b76f4fa31e4b5dd0c20) 

Stream.

#### `define `[`PROTNUM_TCP`](#group__net__protnum_1gae25eadf44223e2a1ac30b3b6b21b9dd9) 

Transmission Control.

#### `define `[`PROTNUM_CBT`](#group__net__protnum_1ga51feba0dc4ea5e3cd63984563d9add2a) 

CBT.

#### `define `[`PROTNUM_EGP`](#group__net__protnum_1ga51f5ab51be6054a98f9570a210e4d655) 

Exterior Gateway Protocol.

#### `define `[`PROTNUM_IGP`](#group__net__protnum_1ga5b3d8776cc98cc565162dc0a6ae4affb) 

any private interior gateway (Cisco IGRP)

#### `define `[`PROTNUM_BBN_RCC_MON`](#group__net__protnum_1ga8be43430f233a17db53d67563bd39c3c) 

BBN RCC Monitoring.

#### `define `[`PROTNUM_NVP_II`](#group__net__protnum_1ga106a69371d3e140fe5eaa9900a303752) 

[Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Voice Protocol.

#### `define `[`PROTNUM_PUP`](#group__net__protnum_1ga93a81ae5f9abdeedaceae9330a043d84) 

PUP.

#### `define `[`PROTNUM_ARGUS`](#group__net__protnum_1ga7ecdc9805891cc3fb3f0c612fbc555f3) 

ARGUS.

#### `define `[`PROTNUM_EMCON`](#group__net__protnum_1gac20b9ccf9842bae69ed17af34e7e52d7) 

EMCON.

#### `define `[`PROTNUM_XNET`](#group__net__protnum_1gac747de5a0f23902b3427846bcc7b8da3) 

Cross Net Debugger.

#### `define `[`PROTNUM_CHAOS`](#group__net__protnum_1gaa4fe6cb1536950f2dad5dfcd3f74952e) 

Chaos.

#### `define `[`PROTNUM_UDP`](#group__net__protnum_1gadb98165766bcdd60d0473ceb5ee53752) 

User Datagram.

#### `define `[`PROTNUM_MUX`](#group__net__protnum_1ga529a41d8c01341d465d800e7bcfefcbf) 

Multiplexing.

#### `define `[`PROTNUM_DCN_MEAS`](#group__net__protnum_1gadec682ff9cdb89d62cc85b785c86da33) 

DCN Measurement Subsystems.

#### `define `[`PROTNUM_HMP`](#group__net__protnum_1ga7d2f0130323eee0c357a591e2653bccc) 

Host Monitoring.

#### `define `[`PROTNUM_PRM`](#group__net__protnum_1gae147224350d9c5b57504251038f4e813) 

Packet Radio Measurement.

#### `define `[`PROTNUM_XNS_IDP`](#group__net__protnum_1gac7a421ed81fac78b13a4d62f67f7bd09) 

XEROX NS IDP.

#### `define `[`PROTNUM_TRUNK_1`](#group__net__protnum_1ga6760edd5e920c49bb5d3de733955af1a) 

Trunk-1.

#### `define `[`PROTNUM_TRUNK_2`](#group__net__protnum_1gaa027e0e3c0586fc630b4f3ba82190622) 

Trunk-2.

#### `define `[`PROTNUM_LEAF_1`](#group__net__protnum_1ga23a61657ebaa13ddf381189425915a7b) 

Leaf-1.

#### `define `[`PROTNUM_LEAF_2`](#group__net__protnum_1ga85afe437b0ca7c35ffebc939f9252ffd) 

Leaf-2.

#### `define `[`PROTNUM_RDP`](#group__net__protnum_1gace25bbcddfa5acc9968137693f620d18) 

Reliable Data Protocol.

#### `define `[`PROTNUM_IRTP`](#group__net__protnum_1gacea4c5d5fcbb00a6b9e7d5a0ebdbda26) 

Internet Reliable Transaction.

#### `define `[`PROTNUM_ISO_TP4`](#group__net__protnum_1gaa7a59ec30b9ae80fb070a889c801f987) 

ISO Transport Protocol Class 4.

#### `define `[`PROTNUM_NETBLT`](#group__net__protnum_1ga81395ea8b95ab95964cf7338500816f3) 

Bulk Data Transfer Protocol.

#### `define `[`PROTNUM_MFE_NSP`](#group__net__protnum_1gabf47edaf83f8e46fb40137561cba44c7) 

MFE [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Services Protocol.

#### `define `[`PROTNUM_MERIT_INP`](#group__net__protnum_1ga28782c95e03281353f9597d75b9be74a) 

MERIT Internodal Protocol.

#### `define `[`PROTNUM_DCCP`](#group__net__protnum_1ga6f866d7da3fc5229425aef0e6c9c1dce) 

Datagram Congestion Control Protocol.

#### `define `[`PROTNUM_3PC`](#group__net__protnum_1ga6afd17967ad08080b6dd21f872485dcb) 

Third Party Connect Protocol.

#### `define `[`PROTNUM_IDPR`](#group__net__protnum_1gacb64b6317c4edbc6d9b517c73fabaade) 

Inter-Domain Policy Routing Protocol.

#### `define `[`PROTNUM_XTP`](#group__net__protnum_1gafd485aa30f0eee6d58682f29f9c8b0bf) 

XTP.

#### `define `[`PROTNUM_DDP`](#group__net__protnum_1gadad788568d6c30eed822eb8fe0021ac6) 

Datagram Delivery Protocol.

#### `define `[`PROTNUM_IDPR_CMTP`](#group__net__protnum_1ga4fe27f1df428a7f0032d2550339dc643) 

IDPR Control Message Transport Proto.

#### `define `[`PROTNUM_TPPLUSPLUS`](#group__net__protnum_1gaee58e918a178449b644d4e8cb5b1f4c7) 

TP++ Transport Protocol.

#### `define `[`PROTNUM_IL`](#group__net__protnum_1gaa4bca2ff788304a194753c1ddf15d3f5) 

IL Transport Protocol.

#### `define `[`PROTNUM_IPV6`](#group__net__protnum_1gabeaa5adb248bdb1ad11e6a8272c5c015) 

IPv6 encapsulation.

#### `define `[`PROTNUM_SDRP`](#group__net__protnum_1gac7fbcc5a81588fa2bd68adfae0a170e2) 

Source Demand Routing Protocol.

#### `define `[`PROTNUM_IPV6_EXT_RH`](#group__net__protnum_1gaf607586f58617110503d1a711941ca44) 

Routing Header for IPv6.

#### `define `[`PROTNUM_IPV6_EXT_FRAG`](#group__net__protnum_1ga273a3e8a6908ca424c626abd983b8f03) 

Fragment Header for IPv6.

#### `define `[`PROTNUM_IDRP`](#group__net__protnum_1gae6062faf012cad2171e19914beae1988) 

Inter-Domain Routing Protocol.

#### `define `[`PROTNUM_RSVP`](#group__net__protnum_1gad00019dc2abff6b481f806adf6215699) 

Reservation Protocol.

#### `define `[`PROTNUM_GRE`](#group__net__protnum_1ga4c4dbf0d74664e85fd71014fe4bba755) 

Generic Routing Encapsulation.

#### `define `[`PROTNUM_DSR`](#group__net__protnum_1ga2abe844a0c3994849cc6752d5f12e262) 

Dynamic Source Routing Protocol.

#### `define `[`PROTNUM_BNA`](#group__net__protnum_1ga195666330f6e26459fb8254af99ace2a) 

BNA.

#### `define `[`PROTNUM_IPV6_EXT_ESP`](#group__net__protnum_1ga4f122666fea2f08304b9e6adee2fe327) 

IPv6 Encap Security Payload Extension Header.

#### `define `[`PROTNUM_IPV6_EXT_AH`](#group__net__protnum_1gade74af94d601518b35d5ffbcf5c5129b) 

IPv6 Authentication Extension Header.

#### `define `[`PROTNUM_I_NLSP`](#group__net__protnum_1ga6e895c526d2683e8f3744f1a557ca0da) 

Integrated Net Layer Security TUBA.

#### `define `[`PROTNUM_SWIPE`](#group__net__protnum_1gaeb79da419293c57574fb3d123cd253c9) 

IP with Encryption (deprecated)

#### `define `[`PROTNUM_NARP`](#group__net__protnum_1ga95584d2c8b53856942580d7dae04d4e6) 

NBMA Address Resolution Protocol.

#### `define `[`PROTNUM_MOBILE`](#group__net__protnum_1ga6b2a165d96ab4552aa3d4ad16720c048) 

IP Mobility.

#### `define `[`PROTNUM_TLSP`](#group__net__protnum_1gab1480c58de5ab9d2424dce3d4478b534) 

Transport Layer Security Protocol.

#### `define `[`PROTNUM_SKIP`](#group__net__protnum_1ga59d0ee7565da575ac64ff8b4daa70c42) 

SKIP.

#### `define `[`PROTNUM_ICMPV6`](#group__net__protnum_1ga6b7b759ecd9cc9ed3d13378167b1eb0c) 

ICMP for IPv6.

#### `define `[`PROTNUM_IPV6_NONXT`](#group__net__protnum_1ga5d25ac1451ab7e0d62ecf14fce7fc986) 

No Next Header for IPv6.

#### `define `[`PROTNUM_IPV6_EXT_DST`](#group__net__protnum_1ga786212723c89cca63161c9d31583619d) 

IPv6 Extension Header: Destination Options.

#### `define `[`PROTNUM_CFTP`](#group__net__protnum_1ga14f2684802c402931f3a95735bc87498) 

CFTP.

#### `define `[`PROTNUM_SAT_EXPAK`](#group__net__protnum_1ga73bd1dbea35b831a3309085489556f37) 

SATNET and Backroom EXPAK.

#### `define `[`PROTNUM_KRYPTOLAN`](#group__net__protnum_1ga60e9e39d64e806749ed8636ce276a9b8) 

Kryptolan.

#### `define `[`PROTNUM_RVD`](#group__net__protnum_1ga94292301e0d2cc6ab87d093f801b275e) 

MIT Remote Virtual Disk Protocol.

#### `define `[`PROTNUM_IPPC`](#group__net__protnum_1gadfce76c4204d5006815bc7e439da0cbe) 

Internet Pluribus Packet Core.

#### `define `[`PROTNUM_SAT_MON`](#group__net__protnum_1ga14be4d7842dcfa8392b2964d6a89cdb2) 

SATNET Monitoring.

#### `define `[`PROTNUM_VISA`](#group__net__protnum_1ga035beeb87e68647455bc3a4f6a725c38) 

VISA Protocol.

#### `define `[`PROTNUM_IPCV`](#group__net__protnum_1gafc79ff9d91d99bac681eaaccaad10f7d) 

Internet Packet Core Utility.

#### `define `[`PROTNUM_CPNX`](#group__net__protnum_1ga6023f951a13c76baf06074a44df83d86) 

Computer Protocol [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork) Executive.

#### `define `[`PROTNUM_CPHB`](#group__net__protnum_1gaa2f68efb55a1735f22ae4a5d7d6ab537) 

Computer Protocol Heart Beat.

#### `define `[`PROTNUM_WSN`](#group__net__protnum_1gae3665d7a68e1754152a33a6c7d2f5372) 

Wang Span [Network](./doc/starlight-docs/src/content/docs/apidoc/api-pkg_paho_mqtt.md#structNetwork).

#### `define `[`PROTNUM_PVP`](#group__net__protnum_1ga06c572079768b968ac76276bf7868830) 

Packet Video Protocol.

#### `define `[`PROTNUM_BR_SAT_MON`](#group__net__protnum_1gaafddf4d4bf3cc1348a320a84b015b9f4) 

Backroom SATNET Monitoring.

#### `define `[`PROTNUM_SUN_ND`](#group__net__protnum_1gae3eadae7c5fad34f4f04ef39865006f0) 

SUN ND PROTOCOL-Temporary.

#### `define `[`PROTNUM_WB_MON`](#group__net__protnum_1ga4127b946cd08a4a221339eee05389e92) 

WIDEBAND Monitoring.

#### `define `[`PROTNUM_WB_EXPAK`](#group__net__protnum_1gad8950b24534d0831027b3cffb9ec29d8) 

WIDEBAND EXPAK.

#### `define `[`PROTNUM_ISO_IP`](#group__net__protnum_1gabc20828b3e5b393d97f67eecd5033e76) 

ISO Internet Protocol.

#### `define `[`PROTNUM_VMTP`](#group__net__protnum_1ga81017468388e23ca304b7d7767607354) 

VMTP.

#### `define `[`PROTNUM_SECURE_VMTP`](#group__net__protnum_1gaa22369bbfa04ebcd9c13c6f6836f6709) 

SECURE-VMTP.

#### `define `[`PROTNUM_VINES`](#group__net__protnum_1gac686530bc8882f96cd93707ad14509be) 

VINES.

#### `define `[`PROTNUM_TTP`](#group__net__protnum_1gabfb1ebd0eb445d183678d42cf0b677d1) 

Transaction Transport Protocol.

#### `define `[`PROTNUM_IPTM`](#group__net__protnum_1gacd1fd360d21f693b04bc30d532d56a56) 

Internet Protocol Traffic Manager.

#### `define `[`PROTNUM_NSFNET_IGP`](#group__net__protnum_1ga9e04effb791788104d4f22b8fd2c3540) 

NSFNET-IGP.

#### `define `[`PROTNUM_DGP`](#group__net__protnum_1gaa20a2cc2c0a73a6ccd323431d756586b) 

Dissimilar Gateway Protocol.

#### `define `[`PROTNUM_TCF`](#group__net__protnum_1ga834585cb366c4d16923c91825a13ecbf) 

TCF.

#### `define `[`PROTNUM_EIGRP`](#group__net__protnum_1ga48dbb59f87a8ac593a543cb28e54a875) 

EIGRP.

#### `define `[`PROTNUM_OSPFIGP`](#group__net__protnum_1ga341c059d6fc2bd8caf444e17e6e876a3) 

OSPFIGP.

#### `define `[`PROTNUM_SPRITE_RPC`](#group__net__protnum_1ga4c12bc76bd8d0d9df788d99d4a3927c4) 

Sprite RPC Protocol.

#### `define `[`PROTNUM_LARP`](#group__net__protnum_1ga3035eadcaa149f9df4fdc52f80d422ca) 

Locus Address Resolution Protocol.

#### `define `[`PROTNUM_MTP`](#group__net__protnum_1gae13eda42eee1591d78527eb22f7f80d1) 

Multicast Transport Protocol.

#### `define `[`PROTNUM_AX_25`](#group__net__protnum_1ga522b6e6137c7c7eb8a6e9d051256dce5) 

AX.25 Frames.

#### `define `[`PROTNUM_IPIP`](#group__net__protnum_1ga5b81c28ae2d2107bcc386605983e4c0a) 

IP-within-IP Encapsulation Protocol.

#### `define `[`PROTNUM_MICP`](#group__net__protnum_1ga45871db071d11b809d698597fa10af2d) 

Mobile Internetworking Control Pro (deprecated)

#### `define `[`PROTNUM_SCC_SP`](#group__net__protnum_1ga6751bd507c785253b67b6e89cdcc42cf) 

Semaphore Communications Sec Pro.

#### `define `[`PROTNUM_ETHERIP`](#group__net__protnum_1gadf142fcf30568894ae17e9d3a7ab8781) 

Ethernet-within-IP Encapsulation.

#### `define `[`PROTNUM_ENCAP`](#group__net__protnum_1ga9ebeedf2ada1e119b99dbf6274025f07) 

Encapsulation Header.

#### `define `[`PROTNUM_GMTP`](#group__net__protnum_1ga461a0c53427788dc732f448953f7de78) 

GMTP.

#### `define `[`PROTNUM_IFMP`](#group__net__protnum_1gadd0d68a78a160bb4b2ce5531e2b908c1) 

Ipsilon Flow Management Protocol.

#### `define `[`PROTNUM_PNNI`](#group__net__protnum_1gab5c28b55da7489cc864cf17cfacd9345) 

PNNI over IP.

#### `define `[`PROTNUM_PIM`](#group__net__protnum_1ga245127e39635b583964c97bb598fc91c) 

Protocol Independent Multicast.

#### `define `[`PROTNUM_ARIS`](#group__net__protnum_1ga9963f6f0a6096a8035091e93d6731c1b) 

ARIS.

#### `define `[`PROTNUM_SCPS`](#group__net__protnum_1ga21d044d332010feb583781e00d901ea9) 

SCPS.

#### `define `[`PROTNUM_QNX`](#group__net__protnum_1gaabdec660a6fd6ff6896731752546b104) 

QNX.

#### `define `[`PROTNUM_A_N`](#group__net__protnum_1gaf13789870cc0d70fc9e66279e03f152e) 

Active Networks.

#### `define `[`PROTNUM_IPCOMP`](#group__net__protnum_1gaa2d356733744dd16fbcb77812c1f060a) 

IP Payload Compression Protocol.

#### `define `[`PROTNUM_SNP`](#group__net__protnum_1ga004eb5a4af8f1e18612c14d760bea45d) 

Sitara Networks Protocol.

#### `define `[`PROTNUM_COMPAQ_PEER`](#group__net__protnum_1ga4e5c7da4ae97b23be34a0e5c9795a013) 

Compaq Peer Protocol.

#### `define `[`PROTNUM_IPX_IN_IP`](#group__net__protnum_1gaedfb052907a75ad9934feb86c28e556a) 

IPX in IP.

#### `define `[`PROTNUM_VRRP`](#group__net__protnum_1gaeff32808c72c059bd437364860d059ec) 

Virtual Router Redundancy Protocol.

#### `define `[`PROTNUM_PGM`](#group__net__protnum_1gaa9d0ed3fd4588abd1918b70d7a6b2c67) 

PGM Reliable Transport Protocol.

#### `define `[`PROTNUM_L2TP`](#group__net__protnum_1ga1ea04ee1842eb9512aad0095ab219ef9) 

Layer Two Tunneling Protocol.

#### `define `[`PROTNUM_DDX`](#group__net__protnum_1ga123afdd542b7e056b42fa10798284b27) 

D-II Data Exchange (DDX)

#### `define `[`PROTNUM_IATP`](#group__net__protnum_1gab4a60ed9eca0b89da83e905dc1ab6ada) 

Interactive Agent Transfer Protocol.

#### `define `[`PROTNUM_STP`](#group__net__protnum_1gab8ed17eddf7c6462d8a216aca526b7cb) 

Schedule Transfer Protocol.

#### `define `[`PROTNUM_SRP`](#group__net__protnum_1ga8cb5ed6a72e0336a0837457d83ab1613) 

SpectraLink Radio Protocol.

#### `define `[`PROTNUM_UTI`](#group__net__protnum_1ga0b0042932a81151b1a97f4e64cb304b7) 

UTI.

#### `define `[`PROTNUM_SMP`](#group__net__protnum_1ga23342d6cdf62577d44209d0edc07e5a9) 

Simple Message Protocol.

#### `define `[`PROTNUM_SM`](#group__net__protnum_1ga247d11fa82860246a91f39b52439c268) 

Simple Multicast Protocol.

#### `define `[`PROTNUM_PTP`](#group__net__protnum_1ga4f5efafd49f48d760c26bd226e6241d8) 

Performance Transparency Protocol.

#### `define `[`PROTNUM_ISIS_OVER_IPV4`](#group__net__protnum_1ga5c578c3c0abd8374312c867c65406eff) 

ISIS over IPv4.

#### `define `[`PROTNUM_FIRE`](#group__net__protnum_1ga75f5b13defb221163bc3377cde89f206) 

FIRE.

#### `define `[`PROTNUM_CRTP`](#group__net__protnum_1ga32a7f4a8fde85abbc32773bed5ba5f1b) 

Combat Radio Transport Protocol.

#### `define `[`PROTNUM_CRUDP`](#group__net__protnum_1ga199197c684cb2515aeab69a0f8e32905) 

Combat Radio User Datagram.

#### `define `[`PROTNUM_SSCOPMCE`](#group__net__protnum_1gae4ed03b9f300efca429402b8e7115ebd) 

SSCOPMCE.

#### `define `[`PROTNUM_IPLT`](#group__net__protnum_1ga4ff97b83647daad259c6e95b515a4b92) 

IPLT.

#### `define `[`PROTNUM_SPS`](#group__net__protnum_1ga345f37a8ddbc8f740a119716e8315f63) 

Secure Packet Shield.

#### `define `[`PROTNUM_PIPE`](#group__net__protnum_1ga9edeac6022e30cf7940387c5f3eef6f2) 

Private IP Encapsulation within IP.

#### `define `[`PROTNUM_SCTP`](#group__net__protnum_1gaf5076e21f34f68f41ed06f0712ef0ffd) 

Stream Control Transmission Protocol.

#### `define `[`PROTNUM_FC`](#group__net__protnum_1ga62cb3cd56bc166136864bc424074710e) 

Fibre Channel.

#### `define `[`PROTNUM_RSVP_E2E_IGNORE`](#group__net__protnum_1gaa50c45ef0ac26401719ee8229167a613) 

RSVP-E2E-IGNORE.

#### `define `[`PROTNUM_IPV6_EXT_MOB`](#group__net__protnum_1ga060dbfddd5d80ad52f4d11cd2230399f) 

IPv6 Mobility Extension Header.

#### `define `[`PROTNUM_UDPLITE`](#group__net__protnum_1ga45d645b2e6109add740f81471c19e562) 

UDPLite.

#### `define `[`PROTNUM_MPLS_IN_IP`](#group__net__protnum_1ga251593f7066af982dab89cab4783cea3) 

MPLS-in-IP.

#### `define `[`PROTNUM_MANET`](#group__net__protnum_1ga2ec807cfba364b9d1d5c7ad246f3f90f) 

MANET Protocols.

#### `define `[`PROTNUM_HIP`](#group__net__protnum_1ga39c5e939873cc899a29288070132d6a4) 

Host Identity Protocol.

#### `define `[`PROTNUM_SHIM6`](#group__net__protnum_1ga5ba555a0ebf9c440911fe0cc7fc80b83) 

Shim6 Protocol.

#### `define `[`PROTNUM_WESP`](#group__net__protnum_1ga0e5916f1766e9ac4f60bc82208f48f3a) 

Wrapped Encapsulating Security Payload.

#### `define `[`PROTNUM_ROHC`](#group__net__protnum_1gaaeb733b655759eeaad5dbc979ca2df81) 

Robust Header Compression.

#### `define `[`PROTNUM_RESERVED`](#group__net__protnum_1ga39e5e549b67c499f796d4c90698c007e) 

Reserved.

