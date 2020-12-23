---
title: "Dolfin"
type: feature
sources: ["dolfin"]
---
[//]:<>(<!-- cron_get_products_schedule -->
### Cron Pull Schedule
The Set schedule for when Source Data must be fetched. Basic format is "MM HH * * *" Can run once hourly.
)

[//]:<>(<!-- company_id -->
### Company ID for Integration
The relevant Company to integrate with on your Sage Business Cloud Accounting
https://app.stock2shop.com/sageone/setup/
)

<!-- create_order_enabled -->
### Create orders on Sage Business Cloud Accounting
This allows Stock2Shop to create an order on Sage Business Cloud Accounting when
an order has been received from your sales channel(s).

[//]:<>(<!-- get_images_limit -->
### Fetch Image limit
The number of images to fetch at one time from Sage Business Cloud Accounting)

[//]:<>(<!-- param_get_images_enabled -->
### Allow Stock2Shop to fetch images from Sage Business Cloud Accounting
This will enable the Images on Sage Business Cloud Accounting to sync to Stock2Shop with the Prodcut data.)

[//]:<>(<!-- get_products_limit -->
### Limit of Products to fetch at one time.
We can limit the amount of products that are loaded into Stock2Shop at one time to prevent connectivity issues and delays.)

[//]:<>(<!-- param_get_products_filter -->
### Product Filter
We can filter Products using OData to control what comes into Stock2Shop. 
This could be used to exclude certain types of Products)

<!-- customer_reference_field -->
### Example Heading
Text content

<!-- order_by_sku -->
### Example Heading
Text content

<!-- param_negative_stock_disabled -->
### Example Heading
Text content

<!-- param_due_date_days -->
### Example Heading
Text content

param_create_customer_enabled
param_quote_enabled
param_channel_order_code_enabled
param_default_customer_code
param_default_shipping_code
param_invoice_body
param_invoice_subject
param_sales_rep_id
param_tax_code
param_tax_exempt_code
param_use_customer_address
param_product_field_map
password
queue_fetch_images
username
order_created_date_now
order_map
sync_mode
customer_map

<!-- param_create_customer_enabled -->
### Create a customer in Sage Business Cloud Accounting when order is created
This allows Stock2shop to add new customers to Sage Business Cloud Accounting when no default customer code is given

<!-- param_quote_enabled -->
### Create either Quotes or Invoices when sending Orders back to Sage Business Cloud Accounting
When Orders are passed to your Accounting system, we can either raise those as Invoices or as Quotes. 
This will depend on your internal workflow.

<!-- param_channel_order_code_enabled -->
### Use the same Order number as Invoice number in Sage Business Cloud Accounting
This will let Stock2Shop create Invoices using the same reference number as the Order number on your website.

<!-- param_default_customer_code -->
### Default Customer Account
Raise all orders against a set Customer Account if no customer data is sent with the Order from your website.

<!-- param_send_invoice_enabled -->
### Send Customer Invoice
Allow Stock2Shop to send Customer Invoices straight away once raised into Sage Business Cloud Accounting.

<!--  -->
### Order Creation Date
