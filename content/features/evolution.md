---
title: "Sage Evolution"
type: feature
sources: ["evolution"]
---

<!-- ***NOT IN USE***

Apifact:

get_images_limit
get_order
get_product
get_products_limit
param_ignore_shipping_warehouse_code
param_skip_image_hash
param_use_customer_address
param_user_field_customer
queue_fetch_images
tunnel_host
tunnel_password
tunnel_username

---------
Evolution:

param_warehouse_code
param_branch_code
param_default_tax_code
param_default_tax_code_exempt
param_default_tax_code_shipping
param_new_customer_representative_code
param_order_representative_code
param_order_project_code
param_new_customer_area_code
param_new_customer_group_code
param_new_customer_price_list_code
param_process_invoice
param_process_credit_note
param_negative_stock_disabled
param_complete_credit_note
param_complete_invoice
param_use_credit_note_discount
param_external_order_no
param_gl_discount_code
param_gl_shipping_code
param_gl_shipping_discount_code
param_order_document_type
param_due_date
param_delivery_date
param_currency_code
param_use_channel_order_code(duplicate from Apifact)
param_ignore_shipping
param_user_field_order_[x]
param_delivery_method
param_ignore_warehouse_code
create_order
get_order
get_product
get_products
get_products_limit
param_contact_source_customer
param_time_zone
param_use_customer_address
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