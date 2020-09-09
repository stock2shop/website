---
title: "The specified resource name cannot be found in the image file"
heading: ""
description: ""
errorgroup: SAP Business One
tags:
  - SAP Business One
  - Queue Error
draft: true
---

## What does the queue error mean

**Instruction**: "Create Order"  
**Message**: The specified resource name cannot be found in the image file.  
**The Important Bits**: Failed to create order at source

This means an order failed to create in SAP One.

## What issue(s) does the queue error cause

This error is a non-blocking queue error which means you could still receive other orders if its only an issue with this particular order. You will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

1. Navigate to: S2S Console > Queue > View > Find queue error > View Item
2. Confirm that the error message matches "The specified resource name cannot be found in the image file."

## How to resolve the queue error

The root cause of this issue is that the SAP license server cannot be reached, either due to a temporary lapse in connectivity or an issue with the SAP One server.

To resolve this issue, simply attempt to reprocess the order in the S2S console.  S2S Console > Queue > View > Find queue error -> Retry.

In the event that this does not resolve the issue, you may need to reach out to your SAP consultant in order to:

1. Start the license server or verify the license server address and TCP IP port. 
2. 1 Disable IPv6.
2. 2 Make sure the SLD Address is correct as per Root Cause 3 above.
2. 3 Flush the DNS with the command ipconfig / flushdns
2. 4 Restart SAP Business One Integration Service.