---
title: "SAP Business One"
seoTitle: "SAP Business One Getting Started"
seoDescription: "Integrate your SAP Business One with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["SAP Business One", "Integrations"]
type: help
source: "sap-business-one"
tags: ["gettingstarted", "sap-business-one"]
draft: true
---

SAP Business One is a client-side ERP system. This means the SAP Business One application is installed on a 
server at your office, on your actual work computer or on a server in the cloud. In order for Stock2Shop to 
provide you with the full integration capabilities and link SAP Business One to sales channels such as 
Magento 1.x, Magento 2.x, Shopify, WooCommerce and Stock2Shops B2B Trade Store we need to install 
software on the server or computer where your SAP Business One is set up.
Below is all documentation you will need regarding your SAP Business One integration from start to finish.

## Getting Started (Prerequisites)

In order for Stock2Shop to communicate with SAP Business One, we require the following information:

- Server Name / IP Address
- Database Name
- Database Username (Read-Only)
- Database Password (Read-Only)

With these credentials, Stock2Shop will be able to integrate with Dolfin and perform the following:
1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 


## Syncing Products to Stock2Shop {#sync-products}
Stock2Shop makes use of XML query to sync products from Dolfin known as source products into Stock2Shop called system products. 
At this point, once products exist in their correct form on Stock2Shop, we can send these on to a specified channel.
For Stock2Shop to create a minimum viable product to be created or linked to your sales channel(s), we require the following fields:

```
| SAP Business One            | Stock2Shop                    |  Description                                                                 |
| --------------------------- | ----------------------------- | ---------------------------------------------------------------- |
| oitm.ItemCode               | source_product_code           | This defines the code for the container product                              |
| oitm.ItemCode               | source_variant_code           | Used in the event that your products have options                            |
| oitm.ItemName               | title                         | The unique identifier for each variant                                       |
| oitm.frozenFor              | product_active                | The instruction for Stock2shop to tell the sales channel to manage inventory |
| itm1.Price                  | csv_price_tiers               | The quantity you have in stock to sell online                                |
| oitw.OnHand-oitw.IsCommited | variants.qty                  | The price at which you are wanting to sell the product (incl or excl VAT)    |
| oitm.ItemCode               | variants.sku                  | The web friendly title of the product                                        |
| true                        | variants.inventory_management | The instruction for Stock2shop to tell the sales channel to manage inventory |
```

  
 ```
 Note: fields to by synced from Dolfin to Stock2Shop will vary depending on your sales channel(s). 
 Syncing of products can get far more complex depending on your requirements. 
 The state of your product data in your ERP along with the complexity will impact integration time dramatically.
 ```

## Syncing Customers to Stock2Shop  {#sync-customers}
Stock2Shop supports syncing customers from SAP Business One to Stock2Shop.
This is particularly useful when integrating into our B2B Trade Store, where your clients (customers)
have access to view and purchase products either based on account or credit card. 
The minimum fields required to sync customers from SAP Business One to Stock2Shop are:

```
| SAP Business One    | Stock2Shop                    |  Description                                                                 |
| ------------------- | ------------------------------|----------------------------------------------------------------------------- |
| oitm.ItemCode       | customer_active               | This defines the code for the container product                              |
| oitm.ItemCode       | source_customer_code          | Used in the event that your products have options                            |
| oitm.ItemName       | first_name                    | The unique identifier for each variant                                       |
| oitm.frozenFor      | last_name                     | The instruction for Stock2shop to tell the sales channel to manage inventory |
| itm1.Price          | email                         | The quantity you have in stock to sell online                                |
```

```
Note: Syncing customers is only supported with our B2B Trade store and no other sales channels.
```
## Syncing Orders to SAP Business One {#raise-orders}
Regardless of the sales channel(s) you have, Stock2shop can automatically raise orders into Dolfin.
The order fields are standard and as such we are only able to pass back information that is generated by the sales channel(s) that is relevant to Dolfin.
The information we require in order to do so is the following:

##### product information

```
| Dolfin  | Stock2Shop           | Description                                                                  |
| ------- | -------------------- | ---------------------------------------------------------------------------- |
| Prod    | Description          | This defines the code for the container product                              |
| SKU     | SKU                  | Used in the event that your products have options                            |
| SKU     | QTY                  | The unique identifier for each variant                                       |
| WebName | Line Item Discount   | The web friendly title of the product                                        |
| qty     | Price                | The quantity you have in stock to sell online                                |
| price   | Tax                  | The price at which you are wanting to sell the product (incl or excl VAT)    |
 
 ```

 ##### Customer information
 - First Name
 - Last Name
 - Email
 - Shipping Address details
 - Billing Address details
 
 ##### Other Information
 - Discount by order line item
 - Total order discount
 - Courier Rate
 
```
Note: The information passed back from each sales channel depends on the default JSON payload supplied via the webhook.
If the order information does not exist on the order webhook payload, Stock2Shop will not be able to make use of it.
```

## Features specific to Dolfin
To get the most out of your Dolfin integration with Stock2shop, head over to our [Dolfin features](/features/dolfin/ "dolfin features") documentation.


## Important concepts 
It is important to understand how Stock2Shop interprets data from your source along with our terminology.
Added to that, there are certain concepts that you the client have the ability to manage in your own capacity.
We have prepared documentation that describes all our concepts:
 - [Understanding Products](/help/how-to/products)
 - [Understanding Sources](/help/how-to/sources)
 - [Understanding Channels](/help/how-to/channels)
 
## Support
For more assistance regarding our technical support, please log a ticket
directly from your Stock2Shop console, alternatively send an email to support@stock2shop.com