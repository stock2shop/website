---
title: "update_variant: qty field is not an integer"
heading: ""
description: ""
errorgroup: Shopify
tags: 
  - Shopify
  - Queue Error
  - update_variant
draft: true
---

## What does the queue error mean

This queue error occurs when a product is being updated on Shopify, the warehouse/s assigned in the channel settings for Qty does not exist on the product ie sku ABC has warehouse "a", "b" and "c" however the channel settings says qty must come from warehouse "d" thus the system is trying to send a qty of a warehouse that does not exist on the product

## What issue(s) does the queue error cause

This error is a queue blocking error, until the error is resolved then the queue will remain blocked, no products will be created or updated while the queue is blocked 

## How to confirm the source of the queue error

To confirm the source of this error: 

1. Navigate to Queue -> View
2. On the right, the listing of failed queue items, click the 3 dots ->select View item
3. Under "Instruction" the instruction should be "Update variant"
4. Under "message" the message should be "qty field is not an integer "
5. Click "View Product" -> "Variants"
6. Check if warehouse(s) maintained for SKU in the warehouse section of the Channel by clicking "show all warehouses'
7. Check the warehouses sent to the website for SKU: Settings > Channels > Shopify channel settings -> Click on Settings > Warehouse
8. If warehouses are entered, compare it with warehouse under Variants tab of the product

## How to resolve the queue error

If you have found a difference between the product  variant and warehouse setting from Shopify channel then:

Assign all warehouses correctly in ERP / Accounting System or:

1.Navigate to Queue -> View
2.On the right of the, failed queue item(s), click the 3 dots ->select View item
3.Click "View Product" -> "Variants"
4.Click "Show all Warehouses" 
5. Enter missing Warehouses (Enter qty of 0 if you don't sell out that warehouse) for SKU  > Add and SAVE

These steps will add the missing warehouse for the SKU(S). 

If your warehouse(s) should sync from ERP/Accounting System then please contact support@stock2Shop.com to assist in assigning correctly.