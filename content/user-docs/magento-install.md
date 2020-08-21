---
title: "magento - getting started"
heading: "installing stock2shop for magento"
description: ""
toc: true
menu:
  docside:
    parent: Getting Started
    name: Magento
    weight: 20
---

### Introduction

The steps below will guide you in confirming the Magento 1.x default REST API has been configured correctly and tested, and lastly that the Magento 1.x orders webhook has been setup. Stock2Shop requires all settings to be configured prior to configuration.

In order for Stock2Shop to communicate with Magento 1.x safely and effectively, we use the standard Magento 1.x REST API. The Magento 1.x API is a service that allows programs such as Stock2Shop to access your website.

  

### Requirements

*   Magento admin user login
*   [REST API module](https://github.com/stock2shop/magento_module_rest "Stock2Shop Magento REST module") – Needed if you plan to sync configurable products to Magento
*   [Webhook module](https://github.com/stock2shop/magento_module_webhook "stock2shop magento webhook module") – Needed if you plan to sync Magento order information to your ERP / accounting system

  

### Create REST API User

In order for Stock2Shop to communicate with Magento, it requires a Magento user with sufficient access. The steps below will assist you in creating such a user.

#### Create the REST Role

In your Magento backend navigate to **System > Web Services** and select **REST – Roles**  
Once in **REST – Roles** click **Add Admin Role** and fill in the **Role Info** followed by **Save Role**

![getting started magento](/uploads/getting-started-magento-1-1.png) 

Next click on **Role API Resources** and set **Resource Access** to **All** followed by **Save Role**

  

#### Create S2S Admin User

In your Magento backend navigate to **System > Permissions** and select **Users**  
Once in **Users** click **Add New User** and fill in the **User Info**

![getting started magento](/uploads/getting-started-magento-1-2.png)

Next go to **User Role** and check the radio button **Administrators** followed by **Save User**

![getting started magento](/uploads/getting-started-magento-1-3.png) 

Finally go to **REST Role** and check the radio button **Admin** followed by **Save User**

![getting started magento](/uploads/getting-started-magento-1-4.png)   

#### Grant access to REST attributes

In your Magento backend navigate to **System > Web Services** and select **REST – Attributes**  
Once in **REST – Attributes** click on the **Admin** line item to edit  
Under **ACL Attribute Rules** set **Resource Access** to **All** followed by **Save**

  

#### Create Consumer Key & Consumer Secret

In your Magento backend navigate to **System > Web Services** and select **REST – OAuth Consumers**  
Once in **REST – OAuth Consumers** click on **Add New**  
Set the **Name** to **Stock2Shop** and leave **Key** and **Secret** as is  
Leave both the **Callback URL** and **Reject Callback** fields blank  
Enter the **Current Admin Password** and click **Save**

![getting started magento](/uploads/getting-started-magento-1-5.png) 

#### Send information to Stock2Shop

Please send the following information to your designated Stock2Shop Technician:

*   Consumer Key
*   Consumer Secret
*   Magento Admin (Backend) URL
*   Admin Username
*   Admin User Password

  
Any questions? Email [support@stock2shop.com](mailto: support@stock2shop.com) and we will happily help.