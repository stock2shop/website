---
title: "400 Bad Request - Incorrect Postal Code"
heading: ""
description: ""
errorgroup: ParcelNinja
tags:
  - ParcelNinja
  - Queue Error
  - fulfill-order  
draft: true
---

## How to confirm the source of the queue error

Go to: S2S Console > Queue > View > Find queue error > View Item

**Instruction**: "fulfill_order" 
**Message**: ParcelNinja Order failed: Incorrect Postal Code - must have an exact length of 4

## What does the queue error mean

This means a postal code field included in the order from the channel has been filled in incorrectly such as the postal code being 5 digits instead of 4. ParcelNinja cannot process this order as it does not recognize that postal code.

## What issue(s) does the queue error cause

This error is a [non-blocking queue](/documentation/key-concepts/queue/) error which means you could still receive other orders if its only an issue with this particular order. You will will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to resolve it

Update the postal code in the fulfillment tab of the order on S2S

1. Go to: S2S Console > Queue > View > Find queue error > View Order
2. Go to: Fulfillment tab > Fulfill 
3. Update the incorrect postal code 
4. Click fulfill order

Go back to the queue and skip the fulfillment queue error as you manually processed the fulfillment