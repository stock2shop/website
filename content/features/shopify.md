---
title: "Shopify"
seoTitle: "Shopify Integration Features"
seoDescription: ""
type: feature
channels: [shopify]
---

<!-- 

api_key
channel_domain
password
block_image_enabled
add_all_orders
hmac_shared_secret
set_param_[x]
group_duplicate_order_items

-->

<!-- inventory_management -->
### Track Stock Levels
Stock2Shop can track stock quantities on Shopify and prevent Overselling of Products. 
Product quantity values will be sent from your ERP to Shopify and quantity deductions will process from your ERP after Orders are raised. 

<!-- queue_fulfill_odder -->
### Fixed Fulfillment Orders
When Orders come from Shopify to Stock2Shop, we can fulfill all orders sent, or certain Orders based on Shipping options selected on Shopify.

<!-- qty_limit_upper -->
### Limit Sellable Quantity
You have the option of limiting the amount of stock that gets sent to your Shopify store which in turn limits the amount that can be Ordered.

<!-- send_customer_email -->
### Send Emails to Customers
When Orders process through our system, we can have your Customers notified of the Order status. 
This is useful if your Shopify Notifications being sent before the Order is raised into your ERP.

<!-- hide_product_enabled -->
### Create unpublished Products
When using Stock2Shop to create Products on your Shopify store, we have the option of making the Products live as they are created by Stock2Shop.
This can be useful if you need to add additional Product data to your Products on Shopify, or as a final measure to make sure the product is ready before going live.

<!-- ignore_category_enabled -->
### Sync to Categories
Stock2Shop can connect to your existing Categories on Shopify, or create new categories from your ERP.

<!-- auto_sync -->
### Link to your existing Products
If you have Products loaded to Shopify already, you can use Stock2Shop to link the Products from your ERP to the Products on Shopify.
Stock2Shop will search Shopify for the SKU codes you have connected from your ERP, and will update those it finds on Shopify, 
while creating new Products for those that are not yet on Shopify.

<!--
order_use_system_price
order_use_system_price_tier
order_use_system_price_tax
-->
### Process Orders using ERP prices
When Orders are sent to Stock2Shop, you can have the option of using the pricing that syncs from your ERP if the pricing differs on your Shopify store.
This can be set to a specific Price Tier if available. 

<!-- order_remove_unlinked_items -->
### Process Stock2Shop linked items only
If orders are sent to Stock2Shop with items that do not appear in Stock2Shop, you have the option of either removing the items
and pushing the Order to your ERP, or be notified that the item was not found in Stock2Shop and the Order will not be sent to your ERP.

<!--
order_fixed_shipping_price
order_fixed_shipping_tax
-->
### Set fixed shipping costs
If you have a simple Shopify store and only offer one shipping option, it is possible to set a fixed amount to be sent to your ERP.
This will ignore any shipping details sent from Shopify with the Orders.

<!--
default_fulfillmentservice_id 
use_location_api
fulfillment_map
-->
### Fulfill Orders automatically
Orders placed on Shopify with Shipping options selected can be sent to supported fulfillment services once the Order has a 'Paid' status.
Using Shopify's Location API, we can also send Fulfillment statuses to your Orders in Shopify from supported Fulfillment services.

<!-- delete_product_enabled -->
### Manage Products from Stock2Shop
When you no longer need to sell a certain item, you can mark it inactive in your ERP and Stock2Shop will remove the item from it's database, and from the Shopify store

<!-- check_order_items_linked -->
### Check Ordered Items are linked
Stock2Shop can compare your Order line items to the inventory synced to our system and ensure that the items contained in Orders, also appear in Stock2Shop.

<!-- compare_at_price -->
### Sync a 'Compare At' price
Using Shopify's Compare At feature, we can sync a secondary price list to Shopify and have to used for comparing prices on the store front. 

<!-- order_code_prefix -->
### Prefix Orders from each channel
Have Orders sent to your ERP with reference to the Webstore they originate from. This is useful for when you have multiple Webstores linked to Stock2Shop.

<!-- line_item_discounts -->
### Discount allocation
When discounts are applied to your Orders, you have a choice of either applying the discount to specific line items, or to the Order total.