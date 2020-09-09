---
title: "update_product: No product found to update in channel"
heading: ""
description: ""
errorgroup: Shopify
tags: 
  - Shopify
  - Queue Error
  - update_product
draft: true
---

## 1. What does the queue error mean

**Instruction**: "update_product"   
**Message**: No product found to update in channel   
**The Important Bits**: No product found to update  

This means the product is trying to update the website but the product is not found on the website or Stock2Shop does not have the links to the product on the website. The Product would need a channel product code and a channel variant code to be able to update the product. The product would also need to exist on the website.

![queue errors no product found to update in channel](/uploads/queue-errors-no-product-found-to-update-in-channel-1.png)
![queue errors no product found to update in channel](/uploads/queue-errors-no-product-found-to-update-in-channel-2.png)

Note: This example makes use of two channels, therefore each product and its variants, will have multiple Channel product codes and channel variant codes.

## 2. What issue(s) does the queue error cause

This is a blocking queue error meaning, no data will update to the website until the error is resolved.

## 3. How to confirm the source of the queue error

Go to: S2S Console > Queue > View > Find queue error > View Item

## 4. How to resolve it

You will need to resend the product to the website by either creating the product again or auto-linking the product to a product that is already on the website.

### 4.1 Removing the product off your website and re-adding it from Stock2Shop

Specific channel instructions:

**Shopify**

1. Log in to Stock2Shop > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. Get all the SKUs from the variant tab
3. Log in to Shopify backend > Products > Search the SKUs that you just found in Stock2Shop with the error > Delete all those SKUs off Shopify.
4. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on Shopify links.
5. Save on the General Tab
6. Skip any and all updates (failed) to do with the product that was already in the queue. A new 'ADD' to Shopify queue item will be added at the back of the queue.

### 4.2 You don't want to remove the product from the website but need to relink the product from Stock2Shop

Specific channel instructions: 

**Shopify**

1. Log in to Stock2Shop > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. Get all SKUs from the variant tab
3. Log in to Shopify backend > Products > Search the SKUs that you just found in Stock2Shop with the error > Make sure the product is set up correctly as a variable product with the same SKUs connected to the product in Stock2Shop(If you have products with variants/options). If the product is only 1 SKU then make sure it's a simple product on Shopify with the exact same SKU that is in Stock2Shop. IF the Product is set up incorrectly then you should rather delete the product and refer to step 4.1.
4. Login to Stock2Shop > Settings > Manage channels > <Client Name> Shopify > 3 dots  > edit
5. Search for 'auto_sync' under Channel Meta Data. Make sure it is set to true and click save. If you cant find it > "ADD META DATA' Key = auto_sync Value = true and then save.
6. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on Shopify links.
7. Save on the General Tab
8. Skip any and all updates (failed) to do with the product that was already in the queue. A new 'ADD' to Magento queue item will be added at the back of the queue.
9. Login to Stock2Shop > Settings > Manage channels > <Client Name> Magento > 3 dots  > edit > Change auto_sync back to false and save

## 5. Dealing with queue errors

Once updated and saved the product(s) in question, you will need to skip all the 'update' failed queue errors to do with the product that was fixed, as there could have been old updates already in the queue that will all fail. You will need to skip them if that's the case as a new 'ADD' to channel queue items will be added to the back of the queue which will re-add and link the product with your website.