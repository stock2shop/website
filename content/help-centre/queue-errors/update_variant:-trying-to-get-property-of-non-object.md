---
title: "update_variant: Trying to get property of non-object"
heading: ""
description: ""
tags: 
  - Shopify
  - Queue Error
  - update_variant
draft: true
menu:
  help_centre:
    parent: Queue Errors
    name: "update_variant: Trying to get property of non-object"
---

## What does the queue error mean

This means that the ID of  the products in the channels have been removed or there is no ID to update the variant. 

## What issue(s) does the queue error cause 

This error is a queue blocking error, until the error is resolved then the queue will remain blocked, no products will be created or updated while the queue is blocked 

## How to confirm the source of the queue error 

To confirm the source of this error:

1. Navigate to Queue -> View
2. On the left, in the listing of failed queue items, click the 3 dots -> View item
3. Under "Instruction" the instruction should be "Update variant"
4. Under "message" the message should be "Trying to get property of non-object"
5. Click "View Product" -> "Channels"
6. Confirm if there are any values entered for Channel product code or Channel variant code.
7. If values are entered, compare to the product and variant codes on the website for a mismatch.

## How to resolve the queue error 

If you have found the issue (If not contact support@stock2shop.com) after following the above steps:

1.  Reset the product in S2S: Products >View > Search > 3 dots > Edit > CHANNELS tab > Click REMOVE ALL on channel that needs resetting > Click Save on GENERAL and VARIANTS tab 

This will prompt S2S to scan the website database for a matching sku to establish new links to update against.

You will need to skip the "Trying to get property of non-object and skip any further updates for this specific product if they were already in the queue (It can be multiple skus depending on the skus connected to the product).

A new "Add" to Shopify queue item will appear at the back of the queue to re add the product to the website.