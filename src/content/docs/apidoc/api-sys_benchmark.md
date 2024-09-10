---
title: api-sys_benchmark.md
description: api-sys_benchmark.md
---
# group `sys_benchmark` 

Framework for running simple runtime benchmarks.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`BENCHMARK_FUNC`](#group__sys__benchmark_1ga579e2ccace68b26185aa401aaf3c55c2)            | Measure the runtime of a given function call.
`public void `[`benchmark_print_time`](#group__sys__benchmark_1gac1f243ea9c28121882631a1770df3f40)`(uint32_t time,unsigned long runs,const char * name)`            | Output the given time as well as the time per run on STDIO.

## Members

#### `define `[`BENCHMARK_FUNC`](#group__sys__benchmark_1ga579e2ccace68b26185aa401aaf3c55c2) 

Measure the runtime of a given function call.

As we are doing a time sensitive measurement here, there is no way around using a preprocessor function, as going with a function pointer or similar would influence the measured runtime...

#### Parameters
* `name` name for labeling the output 

* `runs` number of times to run `func`

* `func` function call to benchmark

#### `public void `[`benchmark_print_time`](#group__sys__benchmark_1gac1f243ea9c28121882631a1770df3f40)`(uint32_t time,unsigned long runs,const char * name)` 

Output the given time as well as the time per run on STDIO.

#### Parameters
* `time` overall runtime in us 

* `runs` number of runs 

* `name` name to label the output

