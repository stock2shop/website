---
title: "magento 2.x Integration - getting started"
heading: "installing Stock2Shop for magento 2.x"
description: "Do you have a Magento 2.x website? Here's how to configure your Magento 2.x website and set up the REST API for Stock2Shop to sync product data and orders."
aliases: "/documentation/getting-started/magento-2-install/"
toc: true
---

## Introduction

In order for Stock2Shop to communicate with Magento safely and effectively, we use the standard Magento API. The Magento API is a service that allows programs such as Stock2Shop to access your website and comes stock standard with Magento.

---

## Requirements for external Magento 2.x integration:

*   Please ensure the REST API is enabled  
    [Read more about the API configuration](https://devdocs.magento.com/guides/v2.0/rest/bk-rest.html "Magento 2.x REST API Module")
*   REST URL Endpoint
*   Magento Admin Username
*   Magento Admin Password
*   [Webhook (used for sending orders back)](https://github.com/stock2shop/magento2_module_webhook "Magento 2.x Webhook Module")
  
---

{{% user-docs-generic %}}