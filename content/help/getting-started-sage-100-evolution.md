---
title: "Sage 100 Evolution"
seoTitle: "Sage 100 Evolution Getting Started"
seoDescription: "Integrate your Sage 100 Evolution Store with supported B2B and B2C Systems through Stock2Shop"
seoKeyword: ["Sage 100 Evolution", "Integrations"]
type: help
source: "sage-100-evolution"
tags: ["gettingstarted", "sage-100-evolution"]
---

Sage Evolution is a client-side accounting / ERP system. 
This means the Sage Evolution application is installed on a 
server at your office, on your actual work computer or on a 
server in the cloud. In order for Stock2Shop to provide you 
with the full integration capabilities and link Sage 100 Evolution 
to other sales channels and fulfilment services such as 
Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, 
Parcelninja and Takealot we need to install software on the server or computer where your Sage Evolution is set up. 
This process is done remotely by one of our trained engineers.
Below is all documentation you will need regarding your Sage 100 Evolution integration from start to finish.

## Getting Started (Prerequisites)

In order for Stock2Shop to communicate with Sage 100 Evolution accounting system, 
we require the following information:

- Server Name (The Windows name of the server)
- Database Name (The name of the database (company) we will be connecting to)
- Evolution Version (Found under help > about on the Evolutions main menu)
- Read Only Database User (Provide sql read only username and password for pulling product information
- Read Write Database User (The SDK requires a sql user with readwrite permissions, provide username and password.)

With these credentials, Stock2Shop will be able to integrate with Sage 100 Evolution and perform the following:
1. [Sync products](#sync-products) 
2. [Sync customers](#sync-customers) 
3. [Raise orders](#raise-orders) 

## Syncing Products to Stock2Shop {#sync-products}
Stock2Shop makes use of XML query to sync products from Sage 100 Evolution known as source products into Stock2Shop called system products. 
At this point, once products exist in their correct form on Stock2Shop, we can send these on to a specified channel.
For Stock2Shop to create a minimum viable product to be created or linked to your sales channel(s), we require the following fields:

```
| Sage 100 Evolution         | Stock2Shop                    |  Description                                                                 |
| -------------- | ------------------------------|----------------------------------------------------------------------------- |
| Prod           | source_product_code           | This defines the code for the container product                              |
| SKU            | source_variant_code           | Used in the event that your products have options                            |
| WebName        | title                         | The unique identifier for each variant                                       |
| product_active | product_active                | The instruction for Stock2shop to tell the sales channel to manage inventory |
| qty            | variants.retail_price         | The quantity you have in stock to sell online                                |
| price          | variants.qty                  | The price at which you are wanting to sell the product (incl or excl VAT)    |
| SKU            | variants.sku                  | The web friendly title of the product                                        |
| true           | variants.inventory_management | The instruction for Stock2shop to tell the sales channel to manage inventory |

 ```
  
 ```
 Note: fields to by synced from Sage 100 Evolution to Stock2Shop will vary depending on your sales channel(s). 
 Syncing of products can get far more complex depending on your requirements. 
 The state of your product data in your ERP along with the complexity will impact integration time dramatically.
 ```

## Syncing Customers to Stock2Shop  {#sync-customers}
Stock2Shop supports syncing customers from Sage 100 Evolution to Stock2Shop.
This is particularly useful when integrating into our B2B Trade Store, where your clients (customers)
have access to view and purchase products either based on account or credit card. 
The minimum fields required to sync customers from age 100 Evolution to Stock2Shop are:

```
| Sage 100 Evolution  | Stock2Shop                    |  Description                                                                 |
| ------------------- | ------------------------------|----------------------------------------------------------------------------- |
| oitm.ItemCode       | customer_active               | This field determines whether the customer should be synced to Stock2shop                             |
| oitm.ItemCode       | source_customer_code          | Used in the event that your products have options                            |
| oitm.ItemName       | first_name                    | The unique identifier for each variant                                       |
| oitm.frozenFor      | last_name                     | The instruction for Stock2shop to tell the sales channel to manage inventory |
| itm1.Price          | email                         | The quantity you have in stock to sell online                                |
```

```
Note: Syncing customers is only supported with our B2B Trade store and no other sales channels.
```


## Syncing Orders to Sage 100 Evolution {#raise-orders}
Regardless of the sales channel(s) you have, Stock2shop can automatically raise orders into Sage 100 Evolution.
The order fields are standard and as such we are only able to pass back information that is generated by the sales channel(s) that is relevant to Sage 100 Evolution.
The information we require in order to do so is the following:

##### product information

```
| Sage 100 Evolution  | Stock2Shop           | Description                                                                  |
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

## Features specific to Sage 100 Evolution
To get the most out of your Sage 100 Evolution integration with Stock2shop, head over to our [Sage 100 Evolution features](/features/Sage 100 Evolution/ "Sage 100 Evolution features") documentation.


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

