---
title: "update_product: No product found to update in channel"
ype: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["shopify", "magento_1"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-28T15:22:59+02:00
---
<!-- Action: update_product -->
#### Error description
When the system is trying to update a product on the website, the product is not found.  Stock2Shop does not have the correct channel links to the product on the website. The system needs a channel product code and a channel variant code to be able to update the product. The product would also need to exist on the website.

![queue errors no product found to update in channel](/uploads/queue-errors-no-product-found-to-update-in-channel-1.png)
![queue errors no product found to update in channel](/uploads/queue-errors-no-product-found-to-update-in-channel-2.png)

Note: This example makes use of two channels, therefore each product and its variants, will have multiple Channel product codes and channel variant codes.

#### Error solution

You will need to resend the product to the website by either creating the product again or auto-linking the product to a product that is already on the website.

##### Removing the product off your website and re-adding it from Stock2Shop



1. Log in to Stock2Shop > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. Get all the SKUs from the variant tab
3. Log in to channel website backend > Products > Search the SKUs or Source Product Code that you just found in Stock2Shop with the error > Delete all those SKUs off the website.
4. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on specific channel links.
5. Save on the General Tab
6. Skip any and all updates (failed) to do with the product that was already in the queue. A new 'ADD' to channel queue item will be added at the back of the queue.

##### You don't want to remove the product from the website but need to relink the product from Stock2Shop

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

##### Magento 1

1. Log in to S2S > Queue > Failed > Click 3 dots on failed item > View product to see which product you need to fix.
2. Copy the source product code from general tab and the SKUs from the variants tab
3. Under Channel settings, check if the parameter "auto_sync" is set to TRUE, if not set it to true
4. Log in to Magento backend > Products > Search the SKUs that you just found in S2S with the error > Make sure the product is set up correctly as a variable/simple product. If the set up is not the same as S2S and your workflow is to create variable products from S2S, then you should rather delete the product and read the steps  above
5. Go into the product in S2S and view channels tab. Queue Error > 3 dots > View Product > Channels > click REMOVE ALL on Magento links.
6. Save on the General Tab and Variant Tab
7. Skip any and all updates (failed) to do with product that was already in the queue. A new 'ADD' to Magento queue item will be added at the back of the queue.
8. Once the queue has completed, open channel settings again, set the "auto_sync" back to what it was (leave as true if thats what was set already).

###### Dealing with queue errors

Once updated and saved the product(s) in question, you will need to skip all the 'update' failed queue errors to do with the product that was fixed, as there could have been old updates already in the queue that will all fail. You will need to skip them if that's the case as a new 'ADD' to channel queue items will be added to the back of the queue which will re-add and link the product with your website.