---
title: "Invalid Product"
heading: ""
description: ""
tags: ["shopify"]
draft: true
menu:
  help_centre:
    parent: Queue Errors
    name: "Invalid Product"
---

## What does the queue error mean

This queue error occurs on any instruction ie: add_product | add_variant | add_image | update_product | update_variant

What this means is that the product on Shopify is broken and cannot be saved, therefore when S2S tries to run an instruction on the product it blocks the queue with the Invalid Product error.  

## What issue(s) does the queue error cause

This error is a [queue blocking](/documentation/key-concepts/queue/) error, until the error is resolved then the queue will remain blocked, no products will be created or updated while the queue is blocked

## How to confirm the source of the queue error

To confirm if the error is in fact an invalid product error follow the below steps:

1. Click on the three dots of the queue error > view product
2. Copy the sku that is blocking the queue
3. Open your Shopify backend and search for the copied sku
4. Make a small change to the product and click SAVE 

If the product saves then please let S2S support know that this is the case and provide them with logins to the site for them to investigate further.

If the product does not save and displays an error, follow the below to resolve the error.

## How to resolve the queue error

Once you have confirmed that this is in fact an Invalid Product error, follow the below steps:

1. Delete the product from Shopify
2. If your workflow is to first create the product on Shopify then create the product again (If S2S creates the product's for you then skip this step)
3. Open S2S console and click on the three dots of the queue error > view product
4. Open the "CHANNELS" tab of the product
5. Click the "REMOVE ALL" button on the channel affected and confirm on the pop up
6. Open the GENERAL tab and click SAVE 
7. Open the "VARIANTS" tab and click save on each variant
8. Return to the QUEUE and click on the three dots of the queue error > SKIP

The product should now be in the queue to be created/updated, this will however be added to the bottom of the queue, wait until the queue has completed all items and you can then check if the product has been updated on the website.

Note that if there were already updates in the queue for that product they may fail and you should skip those product updates until the new "Add" queue item is issued for the product.