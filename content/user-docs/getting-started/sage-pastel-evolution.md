---
title: "sage evolution - getting started"
heading: "installing Stock2Shop for sage evolution"
description: "Set up instructions for integrating Sage Evolution to multiple systems, such as Magento, Shopify, WooCommerce and your B2B trade store. Step by step instructions from Stock2Shop on how to integrate your applications for maximum efficiency. Find out more!"
aliases: "/documentation/getting-started/sage-pastel-evolution/"
toc: true
menu:
  docside:
    parent: Getting Started
    name: Sage Evolution
    weight: 90
---

## Introduction
Sage Evolution is a client-side accounting / ERP system. This means the Sage Evolution application is installed on a server at your office, on your actual work computer or on a server in the cloud. In order for Stock2Shop to provide you with the full integration capabilities and link Sage Evolution to other sales channels and fulfilment services such as Shopify, Magento 1.x, Magento 2.x, WooCommerce, Stock2Shops B2B Trade store, Parcelninja and Takealot we need to install software on the server or computer where your Sage Evolution is set up. This process is done remotely by one of our trained engineers.

## For accessing your database
In order to communicate with your Sage Evolution database, we require the following information:

- Server Name (The Windows name of the server)
- Database Name (The name of the database (company) we will be connecting to)
- Evolution Version (Found under help > about on the Evolutions main menu)
- Read Only Database User (Provide sql read only username and password for pulling product information
- Read Write Database User (The SDK requires a sql user with readwrite permissions, provide username and password.)

## For accessing your server
In order for Stock2Shop to access the data inside of your Sage Evolution database and integrate this into other applications, our software has to be installed on the server or computer that has direct access to the Sage Evolution database. There are three ways for you to grant us access to install our software on your server:

- Microsoft Remote Desktop [(See here)](https://support.microsoft.com/en-za/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection))
- AnyDesk [(See here)](https://anydesk.com/en/downloads/)
- Teamviewer [(See here)](https://www.teamviewer.com/en/)

{{< class alert alert-primary >}}
The below must be taken into consideration to ensure we can manage information on a continual basis:
{{< /class >}}

- Outgoing port 8080 should be open.
- The server must always be online.
- The user must have full admin rights.

## For raising orders

If you require Stock2Shop to insert sales orders or invoices into your Sage Evolution, then we need you to install the Pastel Evolution SDK (Software Developers’ Kit) client connector. This process needs to be done directly with Sage and is fairly straightforward. They will require a valid Pastel account. The SDK client connector has an annual fee which is paid to Sage directly. The process is:

- Phone Sage Evolution Sales and request the “Pastel Evolution SDK client connector”.
- They will send you an indemnity form. Fill this form out and send it back to them. They will then send you back a registration code.
- Phone up Sage Evolution registrations and ask them to “register” the SDK connector.

Once this is done you should see the module available in your Sage Evolution by viewing “help > about” in Evolution.

## What’s next
Below is an overview outlining the next steps:

1. Data Discussion
    - Discuss product configuration
    - Discuss customer configuration
    - Discuss order configuration
    - Prerequisite for raising orders in Sage Evolution
2. Install Stock2Shop Software
3. Initiate Sync to Stock2Shop
4. Test channel integration (products / orders)

{{< class alert alert-primary >}}
Data Discussion **(Step 1)** will be scheduled by one of our technicians
{{< /class >}}

Any questions? [Contact us](/contact-us) – we’re happy to help.