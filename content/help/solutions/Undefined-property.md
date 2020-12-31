---
title: "Undefined property"
type: "solution"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["woocommerce"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-29T09:26:00+02:00
---
<!--Action: update_variant -->
#### Error description
The product on WooCommerce has been configured incorrectly and our system is not able to update the product.

#### Error solution
This directly relates to how a Variable Product is configured In WooCommerce.
https://docs.woocommerce.com/document/variable-product/

When creating a variable product on WooCommerce the variations should be the items that have the SKU's as per your accounting system, the top level inventory tab should either contain a "Grouping code" or remain blank.

If you are creating a variable product because you have a product that is a single SKU but has different  "Custom Options" or "Add-Ons" (ie Adding a number to a sports Jersey) you should still be setting up the product as a simple product (Single SKU) and using a plugin to create Custom options for that product, this way there is no Inventory assigned to the options. The below links are examples of plugins to add custom options to a simple product:

https://woocommerce.com/products/product-add-ons/   
https://wordpress.org/plugins/product-options-for-woocommerce/

Example of an incorrectly configured variable product that can cause this error:
SKU of a variation: LOON002

{{< figure src="/uploads/queue-errors-update_variant-undefined-property-1.png" caption="Top level inventory has variation SKU - This should either be a grouping code (Can be anything - not listed in ERP) or remain blank" >}}

{{< figure src="/uploads/queue-errors-update_variant-undefined-property-2.png" caption="The variation SKU is in fact blank, however, it adopts the top-level inventory SKU because a product should always have a unique identifier, this now causes duplicate SKU's." >}}

##### How to correct the SKU and relink to S2S

The error can be resolved by correcting the SKU's on the product in WooCommerce as per the above and then having S2S relink to the product using the following steps:

1. Correct SKU's on the product in WooCommerce
2. Login to S2S Console and search for said SKU
3. Navigate to the Channels tab of the product
4. Click remove all - this clears the current channel ID's of the product in order to link to the correct product/variation
5. Navigate to General Tab > Click Save
6. Navigate to Variants Tab > Click Save for each variation
7. Return to the queue error > QUEUE > VIEW
8. Skip queue error

Note if there were already further updates in the queue for the product then they must be skipped until the "ADD" instructions is processed to relink the product.



