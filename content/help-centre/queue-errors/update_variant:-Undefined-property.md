---
title: "update_variant: Undefined property"
heading: ""
description: ""
tags: ["Woocommerce"]
draft: true
menu:
  help_centre:
    parent: Queue Errors
    name: "update_variant: Undefined property"
---

## What does the queue error mean

This queue error means that the product on WooCommerce has been configured incorrectly and our system is not able to update the product. This directly relates to how a Variable Product is configured In WooCommerce.
https://docs.woocommerce.com/document/variable-product/

When creating a variable product on WooCommerce the variations should be the items that have the sku's as per your accounting system, the top level inventory tab should either contain a "Grouping code" or remain blank.

If you are creating a variable product because you have a product that is a single sku but has different  "Custom Options" or "Add-Ons" (ie Adding a number to a sports Jersey) you should still be setting up the product as a simple product (Single Sku) and using a plugin to create Custom options for that product, this way there is no Inventory assigned to the options. The below links are examples of plugins to add custom options to a simple product:

https://woocommerce.com/products/product-add-ons/   
https://wordpress.org/plugins/product-options-for-woocommerce/

Example of an incorrectly configured variable product that can cause this error:
Sku of a variation: LOON002

{{< figure src="/uploads/queue-error-update_variant-undefined-property-1.png" caption="Top level inventory has variation sku - This should either be a grouping code (Can be anything - not listed in ERP) or remain blank" >}}

{{< figure src="/uploads/queue-error-update_variant-undefined-property-2.png" caption="The variation sku is in fact blank, however, it adopts the top-level inventory sku because a product should always have a unique identifier, this now causes duplicate sku's." >}}

## What issue(s) does the queue error cause

This error is a [queue blocking](/documentation/key-concepts/queue/) error, until the error is resolved, the queue will remain blocked, no products will be created or updated while the queue is blocked 

## How to confirm the source of the queue error

Go to: S2S Console > Queue > View > Find queue error (You can use filters) > View Item

Go to: Website Admin > WooCommerce > All products > search for sku as per queue error > check variations

## How to resolve the queue error

The error can be resolved by correcting the sku's on the product in WooCommerce as per the above and then having S2S relink to the product using the following steps:

1. Correct sku's on the product in WooCommerce
2. Login to S2S Console and search for said sku
3. Navigate to the Channels tab of the product
4. Click remove all - this clears the current channel ID's of the product in order to link to the correct product/variation
5. Navigate to General Tab > Click Save
6. Navigate to Variants Tab > Click Save for each variation
7. Return to the queue error > QUEUE > VIEW
8. Skip queue error

Note if there were already further updates in the queue for the product then they must be skipped until the "ADD" instructions is processed to relink the product.

The below link is a more detailed example of how to relink products from S2S to WooCommerce should a product change or be deleted:

[How to relink a product to WooCommerce](/#)

If your investigation finds the issue to be different, please advise the support team at support@stock2shop.com


