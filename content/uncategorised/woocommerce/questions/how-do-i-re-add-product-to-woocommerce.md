---
title: "How do I re-add product to WooCommerce"
heading: "How do I re-add/re-link product to WooCommerce?"
description: ""
image: ""
---

## What it means?

S2S creates a "link" between the product in S2S and the product in the sales channel(s) (In this case Woocommerce) in order to update the product information such as qty, pricing, etc

The link is the internal ID of the product from Woocommerce that is pulled into S2S to ensure S2S is updating the correct sku. This can be found in the channel section of the product in S2S

## Why is my sku not linked?
 
When S2S links to a sku on the website , the system fetches the ID from WooCommerce. A sku may be unlinked or incorrectly linked from WooCommerce if the following occurs:

1. The "ADD" instruction to the website had an error and it was skipped, causing the system to think its linked
2. The sku was was manually deleted off the website which means the ID will never exist again
3. There was duplicate skus on the website and the one S2S created was deleted
4. There is a rule in S2S that prevents all products from being created.

## How do I relink the sku?

There may be different ways to relink the product depending on the circumstances:

1. If the add instruction was skipped you can search the sku in S2S> Edit > CHANNEL tab > REMOVE ALL (on specific WooCommerce channel) > Click Save on GENERAL and VARIANT TAB 
2. If the sku was removed off the website you can re add the sku to the website and relink it from S2S or if you dont manually create it on WooCommerce, then S2S will just create it for you with the current information in S2B
3. If there was a duplicate sku on the website you can re-link the sku following step 1
4. If there is a rule preventing the sku from updating  (Ie if you click save nothing goes through the queue) ask S2S support what your rule is or if you know then make sure the sku abides by the rules

## Testing

View the id in the URL of the sku in WooCommerce and compare it to the CHANNEL tab of the sku in S2S to make sure IDS match after relinking

## Screenshot Examples

Below is example of an unlinked product 

![how-do-I-re-add-product-to-woocommerce](/uploads/woocommerce-how-do-I-re-add-product-to-woocommerce-1.png)

Below is example of an linked product

![how-do-I-re-add-product-to-woocommerce](/uploads/woocommerce-how-do-I-re-add-product-to-woocommerce-2.png)