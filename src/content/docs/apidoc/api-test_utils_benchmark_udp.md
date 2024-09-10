---
title: api-test_utils_benchmark_udp.md
description: api-test_utils_benchmark_udp.md
---
# group `test_utils_benchmark_udp` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BENCH_PAYLOAD_SIZE_MAX`](#group__test__utils__benchmark__udp_1ga464a24bc61c1765dd51ee623282b6665)            | Maximum size of a benchmark packet.
`define `[`BENCH_SERVER_DEFAULT`](#group__test__utils__benchmark__udp_1gaf0f9b836bd71559844e3481521ca3d2f)            | Default address of the benchmark server.
`define `[`BENCH_PORT_DEFAULT`](#group__test__utils__benchmark__udp_1ga734718f66789e33da68bcf1a2e970122)            | Default port of the benchmark server.
`define `[`BENCH_FLAG_CMD_PKT`](#group__test__utils__benchmark__udp_1gaf889550ad333ce4fe2d37eac58b03750)            | Flag indicating the benchmark packet is a configuration command.
`define `[`BENCH_MASK_COOKIE`](#group__test__utils__benchmark__udp_1ga873e2f01af7118f9acda5c94bef19f2c)            | Configuration Cookie mask.
`public int `[`benchmark_udp_start`](#group__test__utils__benchmark__udp_1gaee00789fb32324a9206ef828b94fc770)`(const char * server,uint16_t port)`            | This will start the benchmark process.
`public bool `[`benchmark_udp_stop`](#group__test__utils__benchmark__udp_1ga21b2f8262cad7ea051a5acc87306a781)`(void)`            | Stop the benchmark process.
`struct `[`benchmark_msg_ping_t`](#structbenchmark__msg__ping__t) | Benchmark message to the server.
`struct `[`benchmark_msg_cmd_t`](#structbenchmark__msg__cmd__t) | Command response from the server.

## Members

#### `define `[`BENCH_PAYLOAD_SIZE_MAX`](#group__test__utils__benchmark__udp_1ga464a24bc61c1765dd51ee623282b6665) 

Maximum size of a benchmark packet.

#### `define `[`BENCH_SERVER_DEFAULT`](#group__test__utils__benchmark__udp_1gaf0f9b836bd71559844e3481521ca3d2f) 

Default address of the benchmark server.

#### `define `[`BENCH_PORT_DEFAULT`](#group__test__utils__benchmark__udp_1ga734718f66789e33da68bcf1a2e970122) 

Default port of the benchmark server.

#### `define `[`BENCH_FLAG_CMD_PKT`](#group__test__utils__benchmark__udp_1gaf889550ad333ce4fe2d37eac58b03750) 

Flag indicating the benchmark packet is a configuration command.

#### `define `[`BENCH_MASK_COOKIE`](#group__test__utils__benchmark__udp_1ga873e2f01af7118f9acda5c94bef19f2c) 

Configuration Cookie mask.

#### `public int `[`benchmark_udp_start`](#group__test__utils__benchmark__udp_1gaee00789fb32324a9206ef828b94fc770)`(const char * server,uint16_t port)` 

This will start the benchmark process.

Two threads will be spawned, one to send packets to the server and one to handle the response.

#### Parameters
* `server` benchmark server (address or hostname) 

* `port` benchmark server port

#### Returns
0 on success error otherwise

#### `public bool `[`benchmark_udp_stop`](#group__test__utils__benchmark__udp_1ga21b2f8262cad7ea051a5acc87306a781)`(void)` 

Stop the benchmark process.

#### Returns
true if the benchmark process was stopped false if no benchmark process was running

# struct `benchmark_msg_ping_t` 

Benchmark message to the server.

Both server and client are assumed to be little endian machines

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`flags`](#structbenchmark__msg__ping__t_1ad878c3fb48e01c55b93d57a7c03efb2f) | must include config cookie
`public uint32_t `[`seq_no`](#structbenchmark__msg__ping__t_1a53480a0d4d429839688124f1f0a0002e) | number of packets sent sind config update
`public uint32_t `[`replies`](#structbenchmark__msg__ping__t_1a12a19733fc37c2bbd28c782bdf861346) | number of replies received from server
`public uint32_t `[`rtt_last`](#structbenchmark__msg__ping__t_1aded4efcd165e205c8cbb0ca28f685f8c) | round trip time of the last packet
`public uint8_t `[`payload`](#structbenchmark__msg__ping__t_1aac66dc601bab8ddf8f63f91da2195082) | variable length payload

## Members

#### `public uint32_t `[`flags`](#structbenchmark__msg__ping__t_1ad878c3fb48e01c55b93d57a7c03efb2f) 

must include config cookie

#### `public uint32_t `[`seq_no`](#structbenchmark__msg__ping__t_1a53480a0d4d429839688124f1f0a0002e) 

number of packets sent sind config update

#### `public uint32_t `[`replies`](#structbenchmark__msg__ping__t_1a12a19733fc37c2bbd28c782bdf861346) 

number of replies received from server

#### `public uint32_t `[`rtt_last`](#structbenchmark__msg__ping__t_1aded4efcd165e205c8cbb0ca28f685f8c) 

round trip time of the last packet

#### `public uint8_t `[`payload`](#structbenchmark__msg__ping__t_1aac66dc601bab8ddf8f63f91da2195082) 

variable length payload

# struct `benchmark_msg_cmd_t` 

Command response from the server.

Both server and client are assumed to be little endian machines

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public uint32_t `[`flags`](#structbenchmark__msg__cmd__t_1a9720c8647563d628431bc21a2963a40f) | contains new config cookie
`public uint32_t `[`delay_us`](#structbenchmark__msg__cmd__t_1a126968b545a00b98a5acb02a263d243c) | delay between benchmark messages in µs
`public uint16_t `[`payload_len`](#structbenchmark__msg__cmd__t_1a1e797d2413a67881c5247a384d824cb4) | payload of benchmark messages

## Members

#### `public uint32_t `[`flags`](#structbenchmark__msg__cmd__t_1a9720c8647563d628431bc21a2963a40f) 

contains new config cookie

#### `public uint32_t `[`delay_us`](#structbenchmark__msg__cmd__t_1a126968b545a00b98a5acb02a263d243c) 

delay between benchmark messages in µs

#### `public uint16_t `[`payload_len`](#structbenchmark__msg__cmd__t_1a1e797d2413a67881c5247a384d824cb4) 

payload of benchmark messages

