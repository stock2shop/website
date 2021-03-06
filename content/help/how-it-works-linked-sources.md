---
title: "Linked Sources"
seoTitle: "Understanding the concept of Linked sources"
seoDescription: "Understanding the concept of Linked sources"
seoKeyword: ["Linked Sources"]
type: help
source: ""
tags: ["how-it-works", "source"]
draft: true
---

A linked source is an additional source of product and inventory information that can sync to your sales channels (e-commerce websites).
To understand what a linked source is, you must first understand what a [primary source](/help/how-to/sources/primary-sources/) is.

### What Is A Linked Source?
A linked source is a source that can only be used to update product and inventory information to your sales channels. Linked sources do not offer functionality that allow you to raise orders. Orders raised in your sales channels can only be sent to primary sources like an ERP / accounting system such as Sage, SYSPRO, SAP or iSync.

### Linked Source Formats
Linked sources come in a variety of formats. The majority of linked sources that we work with are flat files and XML feeds.

### When To Use A Linked Source
There are two main reasons you would need to use a linked source when setting up your Stock2Shop integration and workflow.

**1. Using a linked source to update product information that is not available from the primary source**
For example, you use Sage Pastel Partner as your primary source of inventory information, which includes product codes, price lists and stock availability. When an order is placed on your WooCommerce website (sales channel), a sales order, invoice or quote (depending on what you have selected) is automatically raised in your Sage Pastel Partner.

However, your primary source (Pastel Partner) does not allow you to manage various additional product information necessary to make a sale. To solve this, you would use a linked source in the format of a Google Sheet. The Google Sheet is linked to your primary source and allows you to update and maintain the additional product information – product titles, categories, images and any other brand specific attributes – you require.

**2. Using a linked source to facilitate a drop shipping e-commerce model.**
For example, you are the owner of an e-commerce website that sells various products from many different suppliers but you do not hold stock. You use a primary source such as Sage Pastel Partner to facilitate transactions and not to manage product and inventory information on your e-commerce website.

You rely on your suppliers to provide product and inventory information. Your suppliers update stock quantities either daily, two to three times per week or weekly by updating their specific supplier Google Sheet (linked source). This Google Sheet is linked to your primary source and your sales channels are then updated with the supplied product information.

