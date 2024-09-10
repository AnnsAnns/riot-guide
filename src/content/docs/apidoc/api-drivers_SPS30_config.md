---
title: api-drivers_SPS30_config.md
description: api-drivers_SPS30_config.md
---
# group `drivers_SPS30_config` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`define `[`CONFIG_SPS30_ERROR_RETRY`](#group__drivers__SPS30__config_1gae13daa49a03ab0760e83d47115b89e41)            | Maximum number of automatic retries on communication errors.

## Members

#### `define `[`CONFIG_SPS30_ERROR_RETRY`](#group__drivers__SPS30__config_1gae13daa49a03ab0760e83d47115b89e41) 

Maximum number of automatic retries on communication errors.

If no delays happen between individual requests to the sensor, it may happen that the sensor is not yet ready to serve data. Handling this within the driver simplifies application code by omitting sleep handling or retries there. This value may be overwritten to 0 if more fine-grained feedback is required or even increased if the device is connected over suboptimal wiring.

