---
title: Terminology
type: how-to
---

## Terminology

Below is a list of terminology commonly used with Stock2Shop Integrations:

---

#### Source
This refers to the source of the information that we are receiving product data from ie: Accounting system; ERP; 
Flat File(CSV); Fulfilment Service(Parcel Ninja). Source Data will populate Stock2Shop and from there Stock2Shop passes
the data on to the Sales Channels as required.

#### Source Code (Orders)
This is the code that S2S receives from the source when raising an order on said source. This normally refers to 
an **#Invoice**, **#Sale Order** or **#Quotation**. Source Codes will be added to your Orders in Stock2Shop once they are 
raised in your ERP/Accounting System.

#### Channel
The platform you sell your Products on Online, also known as sales channel ie: Magento site; Woocommerce site; Shopify 
site; Takealot; B2B Trade store. You can have multiple Channels associated with your Stock2Shop integration and control 
which of your Source Products sync to which Sales Channel.

#### Push Source
Integrations that require updates to be sent to Stock2Shop when changes are detected are know as 'Push' sources. These 
are most common with ERP's/Accounting Systems that are not cloud based and run on an Office Server.

#### Pull Source
Integrations that require Product data to be fetched by Stock2Shop on a schedule are known as 'Pull' sources. 
Product data is fetched hourly to update Stock2Shop.

#### Cron
A cron expression is a string consisting of six or seven subexpressions (fields) that describe individual details of 
the schedule. These fields, separated by white space, can contain any of the allowed values with various combinations 
of the allowed characters for that field. This is used by Stock2Shop to schedule a 'Pull' of product data from a source.

#### Inventory Management
Most websites have functionality to display “In Stock” or “Out of Stock” labels when a product has available qty or not, 
this is called inventory management and is optional when integrating with Stock2Shop.

#### Workflow
The process for creating, enriching, removing products with particular preferences. Workflows can differ drastically 
between different integrations and their specific setup. Workflows are covered by Stock2Shop when your integration 
is being setup.

#### Re-link
When we talk about a product link, it refers to the connect of the product from Stock2Shop and how it links to your 
product on your Sales Channels. When first syncing your Stock2Shop Inventory, our Connector will find existing products
and if not, it will create them (depending on requirements) as new products. When we establish the initial link, Stock2Shop
saves the ID your sales channel assigns to the products in order to update products faster moving forward. When a product
is removed from your Sales Channel without being removed from Stock2Shop, it will break the link. If the product is
re-created on your Sales Channel, it will not have the same ID Stock2Shop has saved. In this case we would need to Re-link
your product

#### Channel ID
When linking products to your Sales Channel, we save the ID assigned by the Sales Channel for quicker reference to the 
product. This ID we call a Channel ID, and is unique to a single product on your Store.

