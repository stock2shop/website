## Sources

What do we mean when we say sources? The source of information. Here’s all you need to know about Stock2Shop sources.

* * *

### What is a source?

A Stock2Shop source is where we get product / inventory information from or push sales orders to. There are two different types of sources on Stock2Shop: “primary sources” and “[linked sources](/documentation/key-concepts/linked-sources/)“.

* * *

### What sources are available?

Stock2Shop provides connections to various different sources. Some of these sources allow sales orders to be raised, others do not.

Currently, Stock2Shop supports the following sources:

*   Sage Pastel Partner (allows sales orders)
*   Sage Evolution (allows sales orders)
*   Sage Accounting – formerly Sage One (allows sales orders)
*   Sage Financials – formerly Sage Business Cloud Financials (allows sales orders)
*   iSync (allows sales orders)
*   Any SQL database (allows sales orders)
*   Any flat file format (no sales orders)
*   Google Sheets (no sales orders)

* * *

### Set up and Configuration

You can have multiple different sources or just one source.

For example, you may have multiple different sources if your business has branches or stores each with their own accounting / ERP system. In this case, you may want to have one platform to sell your products off (Stock2Shop) and automatically push sales orders into the appropriate source.

If you have multiple different sources, you need unique product codes (SKUs) per source. Orders can then be pushed into the various sources as they are received.

* * *

### What is a Linked Source?

A linked source is a source that can only be used to update product information (to a primary source).
Sales orders cannot be sent to linked sources, only to primary sources.

For example, you may need to update product inventory information that is not available from the primary source.

In this case, you may use Sage Pastel Partner as a primary source of inventory information, which includes product codes, price lists and stock availability. You push sales orders back to your Sage Pastel Partner primary source.
You may also have a Google Sheet “linked source”, which is linked to your Sage Pastel Partner primary source. On the Google Sheet linked source, you maintain additional product information, such as product titles, categories, images and any other product attribute you require.

----------

## Channels

What do we mean when we say channels? Places to display and sell your goods. Here’s all you need to know about Stock2Shop sales channels.

* * *

### What is a sales channel?

A Stock2Shop sales channel is an application or platform which can display your product and inventory data. Channels usually allow customers to put your products into a basket and checkout with them (order them). The information from the sale is then returned to Stock2Shop as a sales order. Several processes can then be started, depending on your integration requirements and your unique workflow.

* * *

### What channels are available?

Currently, Stock2Shop supports the following sales channels:

*   B2B trade store
*   Magento
*   Shopify
*   WooCommmerce

* * *

### Set up and Configuration

Stock2Shop is a multi-channel platform. This means that you can push your product and inventory information to many different channels, and only have to maintain one source of product information.

Each channel can be configured differently. Configuration on a channel usually refers to things like:

*   Shipping rules
*   Payment gateways
*   Customer accounts
*   Price tiers

Each sales channel has its own set of configuration and requirements.


Channel Rules can determine which items sync to your channel / web store.
* * *

### What are channel rules?
Channel rules give you the ability to determine which products are displayed on a specific sales channel as well as when they should be displayed.

* * *

### Why are channel rules importnant?
This is extremely useful for managing which data will be available to your relevant Site.
For example, we can use a Rule to prevent a product from syncing to the selected channel if it does not contain any images, this prevents items showing up on your Website without an image associated.

To take it a step further, if you had 2 Webstores and only 1 ERP, you could filter which products go to which channel.
If you have a Webstore selling shoes, and another selling bags, you can apply a product type to the
Items on the General Tab of the Products.

* * *

### Set up and Configuration?

In the Channel setup, you would apply a Rule to the Channel selling shoes that filters the ‘Product Type’
This can be done to either exclude an item from syncing, or ONLY sync that specific type of item.

Your channel rule for the Shoe Store would look as follows:
Product Field “product_type” Operator “equals” Value “Shoes”
Once you apply the Rule and re-sync the Channel, only items with the Type: ‘Shoes’ will sync through.
This same logic can be applied to many different fields for a robust integration.

----------

## Flags

Decide which fields to use on sources and channels: all you need to know about Stock2Shop flags.

* * *

### What are Stock2Shop flags?

Stock2Shop flags are linked to product fields in Stock2Shop.
Each product field has a flag which tells us if the field should be used or ignored from the “[source](https://www.stock2shop.com/documentation/key-concepts/sources/)” (for example, the ERP or accounting system) or if it should be omitted when sending data to a “[channel](https://www.stock2shop.com/documentation/key-concepts/channels/)” (for example, the e-commerce website).

* * *

### Flags on sources

Each flag on a source has two options: “system” and “source”. If a flag is set to “system” for a specific field, that field will be excluded when the product is updated. If it is set to “source”, then the field data will be used.

Flags are useful on sources, specifically when dealing with multiple [“linked” sources](https://www.stock2shop.com/documentation/key-concepts/linked-sources/).

For example: you have Sage Accounting as a source. On this source, you set only the SKU, quantity and price fields to be fetched. You then create a Google Sheet as a linked source, which has all the other fields set to be used, except for SKU, quantity and price.

This means you can manage all elements of your product catalog data in a Google Sheet, and leave the accounting system to simply update SKU, quantity and price. Neither source will override each other.

* * *

### Flags on channels

Each flag on a channel has two options: “system” and “channel”. If a flag is set to “channel” for a specific field, that field will be excluded when the product is sent to the channel. This means the channel is in charge of that field.

For example: imagine you have two channels – Magento and our B2B platform. On Magento, you only want to send the quantity and price. You set the flags on this channel for these fields to be “system” and the rest to “channel”. On the B2B platform, you want to send all the product information on Stock2Shop through. You therefore leave all flags at “system”.

* * *

### What product fields do flags work on?

Stock2Shop flags support the following product fields:

*   Title
*   Body HTML (description)
*   Collection
*   Product Type
*   Tags
*   Vendor
*   Options
*   Attributes (any key value attribute)
*   SKU
*   Barcode
*   Quantity (multiple warehouses)
*   Price (multiple pricelists)
*   Grams
*   Inventory Management (tracking inventory)

----------

## Products and Variants

Here’s all you need to know about the relationship between products, options and variants on Stock2Shop.

* * *

### What is a product?

A product contains information such as title, collection, description, vendor, product type and images.  
**Each product must contain at least one or more variants.**  
  
For example, if you sell shoes, your product may have the following properties:

Title: Pegasus 2  
Collection: Sports Shoes  
Vendor: Athletics Co Ltd  
Type: Running Shoe

This product may be available in multiple sizes and may come in several colours.  
Each variant for the above product would have a unique size / colour combination.

* * *

### What are product options?

A product may or may not have options, depending if it requires multiple variants or not.  
In the above shoe example, the product would have two options: size and colour.

* * *

### What is a variant?

A variant contains information about each product option such as SKU, weight, price and availability (stock levels).  
In the above shoe example, you may hold 3 different sizes in 2 colours. The variants would look like this:

SKU: ABC-1

SKU: ABC-2

SKU: ABC-3

QTY: 5

QTY: 0

QTY: 15

Weight: 100g

Weight: 105g

Weight: 110g

Price: 80

Price: 80

Price: 80

Option1: size 8

Option1: size 9

Option1: size 10

Option2: red

Option2: red

Option2: red

SKU: ABC-4

SKU: ABC-5

SKU: ABC-6

QTY: 2

QTY: 6

QTY: 5

Weight: 100g

Weight: 105g

Weight: 110g

Price: 80

Price: 80

Price: 80

Option1: size 8

Option1: size 9

Option1: size 10

Option2: blue

Option2: blue

Option2: blue

  

As you can see in the above example, the red and blue shoes come in 3 different sizes.  
**It is important that each variant has a unique combination of options.**

* * *

### How to handle variation when importing data into Stock2Shop

When importing data into Stock2Shop, we need to be able to define the above “parent/child” relationship in a flat data structure (spreadsheet).  
  
In order to do this, we have some field conventions, namely:  

*   source\_product\_code: This is the unique identifier for each parent product.  
    
*   source\_variant\_code: This is the unique identifier for each child variant.  
    
*   option1_name: Describing the option (e.g. size)  
    
*   option1_value: The value for this variant (e.g. size 8)  
    
*   option2_name: Describing the option (e.g. colour)  
    
*   option2_value: The value for this variant (e.g. red)  
    

**We can have a maximum of 3 options only.**

----------

## Queue

The queue is the backbone of Stock2Shop.

The key function of the queue is to help transfer data between your various applications. It connects your ERP or accounting system (Sage, SYSPRO, iSync or SAP) and your e-commerce platform (Shopify, WooCommerce, Magento or B2B trade store).

* * *

### What is the queue?

The queue is simply a list of instructions for the Stock2Shop system to perform. Each instruction is called a “queue item” and can perform very different tasks, such as:

*   Add an order to the accounting system
*   Send an order to the warehouse
*   Update a product on Magento
*   Send a notification

And so on…

* * *

### Blocking vs Non-Blocking queues

Stock2Shop has two different queue types: “blocking” and “non-blocking”.  
Queue items that may depend on other queue items having successfully run are placed in the “blocking” queue. Queue items that have no dependencies on other queue items will be placed in the “non-blocking” queue.

* * *

### Blocking queue items

The blocking queue follows the principle of “first in first out”. If there is a failure on one of the queue items, the queue will be blocked (stopped). The queue will remain stopped until the issue has been resolved and the queue can be started again.  
  
This process is managed by you, the client. When a blocking queue item fails, you will receive a notification via email. You then need to rectify the issue, whatever that is, and try the queue item again or skip it.  
  
This can all be done on the Stock2Shop web console, which you will have access to.  
  
A list of blocking queue items are:

*   Add, edit or delete a product / image to a sales channel
*   Add, edit or delete a product / image on Stock2Shop
*   Fetch images from a source

* * *

### Non-blocking queue items

The non-blocking queue consists of queue items that will not stop future queue items from running if they fail.  
  
When a non-blocking queue item fails, you will receive a notification via email which will contain information about why the queue item failed. You will then need to resolve the issue, whatever that may be. Once you have resolved the issue, you can login to our web console and try the queue item again or skip it.  
  
A list of non-blocking queue items are:

*   Add an order to the source (accounting / erp)
*   Add a fulfillment to your warehouse
*   Send email notifications
*   Send webhook notifications

  
It is extremely important to pay attention to the notifications you receive for blocked queue items and stay on top of managing your queue.

----------

## Linked Sources

A linked source is an additional source of product and inventory information that can sync to your sales channels (e-commerce websites).

* * *

To understand what a linked source is, you must first understand what a [primary source](documentation/key-concepts/sources/ "Sources") is.

* * *

### What is a linked source?

A linked source is a source that can only be used to update product and inventory information to your [sales channels](https://www.stock2shop.com/documentation/key-concepts/channels/). Linked sources do not offer functionality that allow you to raise orders. Orders raised in your sales channels can only be sent to primary sources like an ERP / accounting system such as Sage, SYSPRO, SAP or iSync.

* * *

### Linked Source Formats

Linked sources come in a variety of formats. The majority of linked sources that we work with are flat files and XML feeds.

* * *

### When to use a linked source

There are two main reasons you would need to use a linked source when setting up your Stock2Shop integration and workflow.  

#### 1\. Using a linked source to update product information that is not available from the primary source

For example, you use Sage Pastel Partner as your primary source of inventory information, which includes product codes, price lists and stock availability. When an order is placed on your WooCommerce website (sales channel), a sales order, invoice or quote (depending on what you have selected) is automatically raised in your Sage Pastel Partner.  
  
However, your primary source (Pastel Partner) does not allow you to manage various additional product information necessary to make a sale. To solve this, you would use a linked source in the format of a Google Sheet. The Google Sheet is linked to your primary source and allows you to update and maintain the additional product information – product titles, categories, images and any other brand specific attributes – you require.  
  

#### 2\. Using a linked source to facilitate a drop shipping e-commerce model.

For example, you are the owner of an e-commerce website that sells various products from many different suppliers but you do not hold stock. You use a primary source such as Sage Pastel Partner to facilitate transactions and not to manage product and inventory information on your e-commerce website.  
  
You rely on your suppliers to provide product and inventory information. Your suppliers update stock quantities either daily, two to three times per week or weekly by updating their specific supplier Google Sheet (linked source). This Google Sheet is linked to your primary source and your sales channels are then updated with the supplied product information.

----------

## Multiple Warehouses

Here’s all you need to know about multiple warehouses on Stock2Shop.

Your ERP or accounting system may have a multiple warehouse function which allows you to keep track of stock that sits in multiple warehouses around the country. It is important to note that not all ERP and accounting systems provide for this functionality.  
  
We calculate stock availability as “stock on hand” less “stock on sales order”. We can then handle the available stock quantity in various forms to meet your business requirement. Here are a few ways to display stock quantities using the multiple warehouse concept.

*   Sum of all warehouses displayed as one stock quantity available.
*   Stock quantity available per warehouse displayed as separate stock quantities.
*   One warehouse per sales channel. For example, your online store only displays stock available in your Joburg warehouse.
*   If you are selling in a business to business capacity and are using the [Stock2Shop B2B Trade Store,](/b2b-shopping-cart/ "B2B Shopping Cart") then you can assign a specific warehouse to a customer. For example, Cape Town customers will only see stock quantity available inside the Cape Town warehouse.

When it comes to dealing with the multiple warehouse concept, it is important to keep your logistics and fulfilment cost structure in mind. If you’ve set up your shipping rules without taking warehouse geography into consideration, you may experience higher delivery costs than anticipated.