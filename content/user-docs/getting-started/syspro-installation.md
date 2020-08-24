---
title: "SYSPRO - getting started"
heading: "installing stock2shop for SYSPRO"
description: "Using SYSPRO as your ERP and want to connect it to your e-commerce website? Here are set up instructions for integrating SYSPRO to multiple online sales channels, like Magento, Shopify, WooCommerce and your B2B trade store."
aliases: "/documentation/getting-started/syspro-installation/"
toc: true
menu:
  docside:
    parent: Getting Started
    name: SYSPRO
    weight: 130
---

## Introduction
SYSPRO is a client side ERP system. This means the SYSPRO application is installed on a server at your office, on your actual work computer or on a server in the cloud. In order for Stock2Shop to provide you with the full integration capabilities and link SYSPRO to other sales channels and fulfillments services such as Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, Parcelninja and Takealot, we need to install software on the server or computer where your SYSPRO is set up.

## For accessing your database
In order to communicate with your SYSPRO database, we require the following information:

- Database Name
- Database Username (Read only)
- Database Password (Read only)

## For accessing your server
In order for Stock2Shop to access the data inside of your SYSPRO database and integrate this into other applications, our software has to be installed on the server or computer that has direct access to the SYSPRO database. There are three ways for you to grant us access to install our software on your server:

- Microsoft Remote Desktop [(See here)](https://support.microsoft.com/en-za/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection)
- AnyDesk [(See here)](https://anydesk.com/en/downloads/)
- Teamviewer [(See here)](https://www.teamviewer.com/en/)

{{< class alert alert-primary >}}
The below must be taken into consideration to ensure we can manage information on a continual basis:
{{< /class >}}

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

## For raising orders
If you require Stock2Shop to insert sales orders or invoices into your SYSPRO, then we need you to install the SYSPRO eNet Web Services. If you are not sure how to do this or need help, please contact your SYSPRO representative to guide you through the process.

We require the eNet Web Services to be installed and, at a minimum, the “SORTOI” business object to be enabled for our Operator. The web service should be accessible via a public URL or IP address, e.g.: http://123.123.123.123/sysprowebservices/utilities.asmx Along with the aforementioned we would also require the following details:

- Operator Login
- Operator Password
- Company ID

{{< class alert alert-primary >}}
There are many other settings we can change for each order. For a complete example of the SYSPRO sales order payload and required information, please view this document.
{{< /class >}}

## What’s next
Below is an overview outlining the next steps:

1. Install Stock2Shop Software
2. Interactive session / Data Discussion
    - Discuss product configuration
    - Discuss customer configuration
    - Discuss order configuration
    - Prerequisite for raising orders in SYSPRO
3. Initiate Sync to Stock2Shop
4. Test channel integration (products / orders)

{{< class alert alert-primary >}}
Interactive session / Data Discussion (Step 2) will be scheduled by one of our technicians
{{< /class >}}

Any questions? [Contact us](/contact-us) – we’re happy to help.