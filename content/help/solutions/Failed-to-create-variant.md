---
title: "Failed to create variant"
type: "solution"
seoTitle: "Failed to create variant : WooCommerce"
seoDescription: "A sku within the product is failing to be created on the website, specifically WooCommerce."
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["woocommerce"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-28T16:12:59+02:00
---

#### Error description
A sku within the product is failing to be created on the website, specifically WooCommerce.

#### Error solution
Investigate what could be causing the product to to break when trying to add it to WooCommerce.

##### The following are reasons for this queue error.

1. Product was first created from S2S as as simple product but the product in S2S has been changed to a variable product (product with options) 
2. Your variable options (If you create variable products from S2S) on S2S do not match your website options

You will need to change the WooCommerce product set up:
  - The product was initially created as a simple product but now needs to change to a variable product
  - You need to make sure options match S2S / ERP Accounting system

Alternatively you can remove the product from WooCommerce manually and recreate the whole variable product from S2S.

##### How to change the product in WooCommerce

1. Log in to WooCommerce
2. Click on Products > All Products
3. Search for the sku of the product that has already synced - view all skus on the product in S2S (ie the other variable product that was created as a simple product. If you have a small and a large size sku within one product you may need to search for the small which was loaded first)
4. Click into the product > Scroll to Product data > Change Simple product to Variable Product and click Update.
5. Add variable sku and options: Product data > Variations > Add variation > Go
6. Add in the sku info of the variation. sku, qty, price, &  option (eg blue, eg small ( you should look at the sku in S2S to see what option you have sent S2S))
7. Update the product page if necessary (eg description , title, image)
8. Reset the product in S2S: Products >View > Search > 3 dots > Edit > CHANNELS tab > Click REMOVE ALL on channel that needs resetting > Click Save on GENERAL and VARIANTS tab
9. Skip queue error "Failed to create variant {sku}" and any further "update" queue errors (that was already queued) as a new "ADD" queue item will be added at the back of the queue to relink

##### How to re add the product from S2S

1. Delete the simple sku manually of WooCommerce (make sure to empty trash)
2. Log in to S2S
3. Search for the sku on S2S: Products >View > Search > 3 dots > Edit > CHANNELS tab > Click REMOVE ALL on channel that needs resetting > Click Save on GENERAL and VARIANTS tab
4. Skip queue error "Failed to create variant {sku}" and any further "update" queue errors (that was already queued) as a new "ADD" queue item will be added at the back of the queue to relink

##### Dealing with queue errors

You will need to skip the failed to create variant queue error and skip any further updates for this specific product if they were already in the queue (It can be multiple skus depending on the skus connected to the product).

A new "Add" to WooCommerce queue item will appear at the back of the queue to re add the product to the website.