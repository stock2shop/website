---
title: "Importing and Exporting Product Data with Stock2Shop"
seoTitle: ""
seoDescription: ""
type: "how-to"
sources: ["dolfin", "iq-retail", "isync", "ms-navision", "omni-accounts", "pastel-partner", "sage-50cloud-pastel-xpress", "sage-200-evolution", "sage-300cloud", "sage-business-cloud-financials", "sage-evolution", "sage-one", "sage-pastel-evolution", "sap", "syspro" ]
channels: ["magento_1", "magento_2", "shopify", "woocommerce", "b2b-trade-store", "takealot"]
fulfillments: ["parcel-ninja", "on-the-dot"]
draft: true
date: 2020-12-31T12:16:00+02:00
---

## Overview

S2S console has the ability to export all your product data fields that includes the fields synced from your ERP/Accounting system, make any changes to the fields available and import the data back into the console, the format of the export is CSV.

There would be certain settings applied to ensure that the data that you have imported does not get overwritten on the next sync from your ERP/Accounting system, this setting is called flags, [click here to learn more about flags](/documentation/key-concepts/flags/).

Before doing an import contact Support@stock2shop.com to find out if your flags have been set up according to the fields that you would like to make changes to.

## Exporting

Doing an export from S2S is a straightforward process, follow the steps below to do an export:

1. Log in to the S2S admin console - https://console.stock2shop.com/ 
2. [Click here](https://console.stock2shop.com/console/#/products/export) or Hover over "Products" > Click "Export"
3. Tick the boxes of the fields you wish to include on your export

**See below table for more understanding of the fields**

|Name|Description|Field required for Import|
|---|---|---|
|S2S Product ID|This is the S2S internal id of the product|Field not required for Import or Export|
|Source Product Code|This is the product code of your products/grouping code of your variants|Field will be required when making changes to any field on the "GENERAL" tab , Image tab or Attributes tab|
|Channel Product Code|This can be unticked as it will not populate on the Export|NOT REQUIRED|
|S2S Variant ID|This is the S2S internal id of the variant|Field not required for Import or Export|
|Source Variant Code|This is the variant identifier syncing from your ERP/Accounting system|Field will be required when making changes to any field on the "VARIANTS" tab|
|Product Title|This is the title of your product|source_product_code + title required to make changes to this field|
|Product Description|This is the Long Description of your product, the column name on the export is "body_html"|source_product_code + body_html required to make changes to this field|
|Collection|This is the collection of your product|source_product_code + collection required to make changes to this field. This field can be used for Shopify collections, WooCommerce Categories, and Magento Categories|
|Product Type|This would be the type of your product|source_product_code + product_type required to make changes to this field|
|Tags|This would be the tags of your product|source_product_code + tags required to make changes to this field|
|Vendor (Brand)|This is the brand of the product|source_product_code + vendor required to make changes to this field|
|SKU|This is the unique identifier of the variants, this field should sync from your ERP/Accounting system|source_variant_code + SKU required to make changes to this field|
|Barcode|This is the barcode of your Variant|source_variant_code + barcode required to make changes to this field|
|Default Price|This is the price list that has been set as default|source_variant_code + price required to make changes to this field|
|QTY|This is the qty that has been set as default|source_variant_code + qty required to make changes to this field|
|Weight (Grams)|This is the weight of your variants|source_variant_code + grams required to make changes to this field and can only be stored in grams|
|Inventory Managed|This field is for inventory management, TRUE or FALSE|Source Variant code required to make changes to this field|
|Option Name 1|This is the label of the first option|source_variant_code + option1_name  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Value 1|This is the value of the first option|source_variant_code + option1_value required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Name 2|This is the label of the second option|source_variant_code + option2_name  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Value 2|This is the value of the second option|source_variant_code + option2_value required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Name 3|This is the label of the third option|source_variant_code + option3_name  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Option Value 3|This is the value of the third option|source_variant_code + option3_value  required to make changes to this field (Not recommended to make changes to this field once set up)|
|Variant Image|This is the URL of the image assigned to the variant|Not used on an import|
|All Images|This is the urls for all images on this product (Each image listed in own column)|source_product_code + image1, image2, etc required to make changes to these fields|
|All product attributes|This is all the product attributes (Each listed in own column)|source_product_code + meta_[attribute] required to make changes to these attributes (meta_ tells the Stock2Shop system to create/update a specific attribute after the "meta_")|
|All price tiers|This is all the price lists available on the variants (Each listed in own column)|source_variant_code + price_[price list name] required to make changes to price lists ( price_ tells the Stock2Shop system to create/update a specific price list after the "price_")|
|All qty availability|This is all the warehouses available on the variants (Each listed in own column)|source_variant_code + qty_[warehouse name] required to make changes to these fields (qty_ tells the Stock2Shop system to create/update a specific warehouse after the "qty_")|

&nbsp;&nbsp;

4. Once fields have been chosen, select the main source of data only - do not select channel
![general importing exporting product data](/uploads/general-importing-exporting-product-data-1.png)  

5. Click "EXPORT PRODUCTS" > the console will then start to process the CSV file 
![](/uploads/general-importing-exporting-product-data-2.png)  

6. Once compiled > Click the link "Click here to download export file"
![](/uploads/general-importing-exporting-product-data-3.png)  

Save the export and open it in either Google Sheets or Excel

## Importing

When importing data to S2S console, the key points to remember are:

1. Only import fields required and fields that have updates to them. Eg don't import a product that hasn't changed.
2. Are these fields syncing from my ERP/Accounting system if so why you importing them?
3. Are the flags set up accordingly (Consult support@stock2shop.com to assist) to update specific fields in Stock2Shop that you are trying to import?
4. Is my import file in plain CSV format?

Once you have populated the correct fields per the above; follow the below steps to process your import:

1. Login to the S2S admin console - https://console.stock2shop.com/ 
2. [Click here](https://console.stock2shop.com/console/#/products/import) or Hover over "Products" > Click "Import"
3. Scroll to the bottom of the page > Select your primary source (Main ERP/Accounting system)

![](/uploads/general-importing-exporting-product-data-4.png)  
4. Ensure that both **"Skip adding new products"** and "[Ignore flags](/documentation/key-concepts/flags/)"  are ticked **NB**

![](/uploads/general-importing-exporting-product-data-5.png)  
5. Click "SELECT FILE" and choose the CSV file that you have just created and populated from the popup window

![](/uploads/general-importing-exporting-product-data-6.png)  
6. Click "IMPORT PRODUCTS"

![](/uploads/general-importing-exporting-product-data-7.png)    
7. The import will then be processed, depending on the size of the import it may take some time, a report will then be displayed

![](/uploads/general-importing-exporting-product-data-8.png)  

## Results

Any imports in the S2S console will be queued, hover over queue and click view, you will then see the instruction for "sync_products" instruction, wait for the queue to complete and open one or two products in S2S and confirm that your import has processed your changes accordingly.

Should your changes not reflect or an error occurs, contact Support@stock2shop.com for assistance.

