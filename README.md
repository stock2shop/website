# Website

Stock2Shop website and api documentation built with Hugo.

## Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo -D server```
- View in your browser with http://localhost:1313/


## themes and content

The site uses two themes (s2s and [docuapi](https://github.com/bep/docuapi/)).
docuapi is used for documenting our api and has it's own config file `config-docuapi.toml`.
The publish and content directory is set to `/api`
To run the api docs use

```shell script
hugo -D --config=config-docuapi.toml server
```
Otherwise
```shell script
hugo -D server
```
s
## Front Matter Glossary

|Term|Description| 
|---|---|
|title|Page meta title for SEO|  
|heading|Page heading when different from title|  
|titleList|Displayed on list page|  
|linkTitle|Hardcoded menu item title|  
|description|Page Meta Description for SEO|  
|summary|Page summary displayed in the articles list page|  
|summary2|Additional summary parameter for different styling eg. bold|   
|lead|Lead paragraph|  
|lead2|Second lead paragraph|  
|toc|Show page table of content|  
|image|Image used from social media sharing and for list page|
|imageAlt|Alt tag assigned to image  
|date|Used for sorting with yyyy-mm-dd format|  
|weight|The default menu item and listing sort order|
|aliases|Old URL to redirect|
|author|Displayed underneath the title on some article pages|
|type|Layout type as per the theme|
|tags|Used for listing eg. footer|
|menu|Name assigned to specific menu|
|parent|Page name used in menu to nest under|
|name|Unique name for menu item when different to title|

## Connector Naming & Tagging Conventions

| Connector Type | Connector Name                 | Tag                            |
| -------------- | ------------------------------ | ------------------------------ |
| Source         | Dolfin                         | dolfin                         |
| Source         | Efinity                        | efinity                        |
| Source         | Flat File                      | flat-file                      |
| Source         | iQ Retail                      | iq-retail                      |
| Source         | iSync                          | isync                          |
| Source         | Microsoft Dynamics NAV         | microsoft-dynamics-nav         |
| Source         | Omni Accounts                  | omni-accounts                  |
| Source         | Sage 50cloud Pastel Partner    | sage-50cloud-pastel-partner    |
| Source         | Sage 50cloud Pastel Xpress     | sage-50cloud-pastel-xpress     |
| Source         | Sage 100 Evolution             | sage-100-evolution             |
| Source         | Sage 200 Evolution             | sage-200-evolution             |
| Source         | Sage 300cloud                  | sage-300cloud                  |
| Source         | Sage X3                        | sage-x3                        |
| Source         | Sage Business Cloud Financials | sage-business-cloud-financials |
| Source         | Sage Business Cloud Accounting | sage-business-cloud-accounting |
| Source         | SAP Business One               | sap-business-one               |
| Source         | Syspro                         | syspro                         |
| Source         | Custom Database                | custom-database                |
| Channel        | Magento 1.x                    | magento-1                      |
| Channel        | Magento 2.x                    | magento-2                      |
| Channel        | B2B Trade Store                | b2b-trade-store                |
| Channel        | Shopify                        | shopify                        |
| Channel        | Takealot                       | takealot                       |
| Channel        | Woocommere                     | woocommere                     |
| Fulfilment     | Parcelninja                    | parcelninja                    |
| Fulfilment     | On The Dot                     | on-the-dot                     |

## How-it-works Naming & Tagging Conventions

| Section         | tag         |
| --------------- | ----------- |
| Console         | console     |
| Sources         | source      |
| Channels        | channel     |
| Products        | product     |
| Customers       | customer    |
| Ordering        | order       |
| Fulfilment      | fulfillment |
| Queue           | queue       |
| Business Models | model       |