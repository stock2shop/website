---
title: "Trying to get property of non-object"
type: "solution"
seoTitle: "Shopify: Trying to get property of non-object"
seoDescription: "The system can not find the products on Shopify"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["shopify",]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-28T13:50:59+02:00
---

#### Error description
The system can not find the products on Shopify as ID of the products in the channels have been removed or there is no ID to update the variant.

#### Error solution

Confirm the source of this error:

1. Navigate to Queue -> View
2. On the left, in the listing of failed queue items, click the 3 dots -> View item
3. Under "Instruction" the instruction should be "Update variant"
4. Under "message" the message should be "Trying to get property of non-object"
5. Click "View Product" -> "Channels"
6. Confirm if there are any values entered for Channel product code or Channel variant code.
7. If values are entered, compare to the product and variant codes on the website for a mismatch.
6. Once the ID's have been written down, navigate to "Products" > "View"
7. Search for the SKU's on the order one at a time > Once you find a SKU, click on the three dots > click "Edit"
8. Navigate to the "CHANNELS" tab
9. Compare the ID's for the SKU with the ID's stored on the product
10. If the ID's match then move onto the next SKU
11. If the ID's do not match then see below to resolve the error









How to resolve the queue error 



1. Reset the product in S2S: 
    - Products >View > Search > 3 dots > Edit > CHANNELS tab
    - Click REMOVE ALL on channel that needs resetting 
    - Click Save on GENERAL and VARIANTS tab 
2. This will prompt S2S to scan the website database for a matching SKU to establish new links to update against.
3. You will need to skip the "Trying to get property of non-object and skip any further updates for this specific product if they were already in the queue (It can be multiple SKUs depending on the SKUs connected to the product).
4. A new "Add" to Shopify queue item will appear at the back of the queue to re add the product to the website.
