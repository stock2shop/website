---
title: "update_product: No product found with the ID equal to"
heading: ""
description: ""
tags: ["WooCommerce","update_product", "woocommerce_api_no_product_found"]
draft: true
menu:
  help_centre:
    parent: Queue Errors
    name: "update_product: No product found with the ID equal to"
---

## What does the queue error mean 

This means an update has been sent to WooCommerce for a product (product information found on general tab or attributes tab in S2S) but the product is not found. Products are linked to WooCommerce using the WooComemrce internal id

## What issue(s) does the queue error cause

This error is a [queue blocking](/documentation/key-concepts/queue/) error, until the error is resolved the queue will remain blocked, no products will be created or updated while the queue is blocked.

The product is not linked to the website so no updates will happened on the website, this can occur if the following has happened:

1. When the product initially tried to sync to the website, there was a queue error and the "Add" instruction was skipped without resolving the issue
2. The product has been removed / changed on WooCommerce causing the ids to change after S2S created or already linked to the product

## How to confirm the source of the queue error

Go to: S2S Console > Queue > View > Find queue error (You can use filters) > View Item

## How to resolve the queue error 

You will need to resend the product to the website either by creating the product again or auto linking to a product that is already on the website.

Removing the product off your website and re adding it from S2S:

1. Log in to S2S > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. View the skus on the variant tab
3. Login to WooCommerce backend > Products > Search for the skus that you just found in S2S with the error > delete all those skus off WooCommerce if you find any.
4. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on WooCommerce links.
5. Save on the General Tab 
6. Skip any and all updates (failed) to do with product that was already in the queue. A new 'ADD' to WooCommerce queue item will be added at the back of the queue.

You don't want to remove the product from the website but need to re-link (match WooCommerce ID) the product from S2S

1. Log in to S2S > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. View the skus on the variant tab
3. Log in to WooCommerce backend > Products > Search the skus that you just found in S2S with the error > Make sure the product is set up correctly as a variable/simple product. If the set up is not the same as S2S and your workflow is to create variable products from S2S, then you should rather delete the product and read the steps  above
4. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on WooCommerce links.
5. Save on the General Tab and Variant Tab
6. Skip any and all updates (failed) to do with product that was already in the queue. A new 'ADD' to WooCommerce queue item will be added at the back of the queue.