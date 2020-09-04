---
title: "sync_order: Undefined variable: variant"
heading: ""
description: ""
tags: 
  - WooCommerce
  - Queue Error
  - sync_order
draft: true
menu:
  help_centre:
    parent: Queue Errors
    name: "sync_order: Undefined variable: variant"
---

## What does the queue error mean

This queue error means that there is a sku on the order that does not exist in S2S.

## What issue(s) does the queue error cause

This error is a [non-blocking queue](/documentation/key-concepts/queue/) error which means you could still receive other orders if its only an issue with this particular order. You will will still receive product and customer updates, however, this order will not be raised into the Source until you have fixed the issue.

## How to confirm the source of the queue error

To confirm that the error is as described above, follow the below steps:

1. Login to S2S console
2. Navigate to Queue > View
3. Click on the three dots of the error > Click "View Item"
4. Scroll down in the grey block and look for 

{{< highlight go >}}
"sku": "xyz"
{{< /highlight >}}

5. Search each sku in S2S to find which sku is causing the error, the sku will not be found in S2S.

Note to look through all the sku's on the order to ensure there is not more than one.

## How to resolve the queue error

Once you have found which sku is not syncing to S2S, there would be a couple of ways to resolve the error, first confirm if the sku should be syncing from your ERP/Accounting system

1. Mark the sku as Active to sync using your S2S Active field in the ERP/Accounting System
2. Wait for the product to sync through to S2S and link to the channel
3. Navigate to the queue error and click "Try Again"

Should you want S2S to create the sku from the order, contact support@stock2shop.com to assist.