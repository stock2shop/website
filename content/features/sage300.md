---
title: "Sage 300"
type: feature
sources: ["sage300"]
---

<!-- ***NOT IN USE***

Apifact:

create_order
get_images
get_images_limit
get_order
get_products
get_product
get_products_limit
param_create_customer_enabled
param_default_customer_code
param_ignore_shipping_warehouse_code
param_shipping_code
param_skip_image_hash
param_test
param_use_channel_order_code
param_use_customer_address
param_user_field_customer_
queue_fetch_images
tunnel_host
tunnel_password
tunnel_username

---------
Sage 300:


-->

<!-- create_order -->
### Create orders on Sage Evolution
This allows Stock2Shop to create an order on Sage Evolution when
an order has been received from your sales channel(s).

<!-- get_images -->
### Sync Product Images
When integrating with Sage Evolution, we can pull Images associated with the relevant Products into Stock2shop.
These Images will be applied to the Products and will be added to the Webstore when the Product is synced through.

<!-- get_products -->
### Push Products
We can update your Product data from Sage Evolution in 3 minute intervals. This allows us to have accurate data on your 
Webstore.

<!-- param_create_customer_enabled -->
### Create Customers
When a new customer places an Order, we can add them to your Customers if they do not exist yet.
This is useful for future Orders to be processed into the same account.

<!-- param_default_customer_code -->
### Default Customer Account
When an Order is placed and no Customer is applied, we can raised Orders against a Set Customer in your Sage Evolution.
This can be useful if you have multiple Webstores integrated. 
You can have one Customer Account for Shopify cash sales for example.

<!-- param_shipping_code -->
### Shipping Line Item
We can raise Shipping Line Items against a set SKU in your Sage Evolution for fixed pricing on Shipping and for raising 
Shipping against the relevant Stock code.

<!-- param_use_channel_order_code -->
### Use the same Order number as Invoice number in Sage Evolution
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- END OF APIFACT-->

<!-- meta -->
### Title
Paragraph