# Website

Stock2Shop website, documentation and WIKI built with Hugo.

## Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo server```
- View in your browser with http://localhost:1313/

---

## Site Structure
The next 5 sections contain instructions to create new pages and show differences in layout and page meta data.  

### 1. Articles

##### Create new page
1. Run ```hugo new articles/filename.md```
2. Open newly created file and [description](#key-terms) and summary in Front Matter

##### Front Matter
```
---
title: "how to categorize products: layered navigation"
heading: "layered navigation"
description: "Figuring out how to structure and navigate products can seem like a difficult problem without an easy solution. But there is a solution: layered navigation."
summary: "Categorizing products correctly is a major pain point for many e-commerce websites. Layered navigation is the solution: find out how – and why – to implement it"
lead: "Categorizing products correctly is a major pain point for many e-commerce websites. Figuring out how to structure and navigate products can seem like a difficult problem without an easy solution. But there is a solution: layered navigation. Here’s what you need to know."
image: "/uploads/article_2_layered_navigation.jpg"
imageAlt: "layered navigation"
date: 2019-07-18
---
```

### 2. Case Studies

##### Create new page
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page

##### Front Matter
```
---
title: "omnico"
heading: "Case Study: Omnico"
description: "Omnico had a common challenge: how to integrate SYSPRO into multiple sales channels. Our solution? A Magento B2B and B2C e-commerce website integrated with Stock2Shop. We worked closely with Omnico to create the perfect solution to suit their needs. Read more!"
lead: "Omnico is a major importer of lifestyle, cycle and electronic brands, including GoPro, Canondale, Giro, Stages, Ryder and Red-e."
summary: "Imports leading lifestyle and cycle brands in South Africa. Success Story featuring B2B, SYSPRO and Magento."
image: "/uploads/logo_omnico.png"
imageAlt: "omnico logo"
weight: 1
---
```

### 3. Documentation

##### Create new page
1. Navigate to documentation section and add the .md file
2. Copy and update front-matter from another page
3. Update menu weight, parent and name

##### Front Matter
```
---
title: "sage pastel partner configuration"
description: "Settings for integrating Sage Pastel Partner with multiple sales channels such as Magento, Woocommerce, Shopify and Stock2Shop's B2B ordering platform. Let us work with you to create the perfect workflow for your business."
lead: "Stock2Shop has full support for Sage Pastel Partner. This means that inventory information can be fetched and orders can be raised, simply and easily."
toc: true
menu:
  docside:
    parent: Configuration
    name: Sage Pastel Partner
---
```

### 4. Integrations

##### Create new page
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page
3. If it's a 'single platform' page, add "type: platform" to the front-matter for it to be added to the integrations list

##### Front Matter
```
---
title: "sage business cloud accounting (formerly sage one)"
titleList: sage business cloud accounting
summary: "Formerly Sage One: Simple and secure online accounting software"
type: platform
image: "/uploads/logo-platform-sage-business-cloud-accounting.png"
imageAlt: sage business cloud accounting logo
weight: 5
---
```

### 5. Technical Doc / Wiki

##### Create new page
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page
##### Front matter
```
---
title: Managing Variants

---
```

---

## Params
- title: Page Meta Title for SEO
- heading: Page heading when different from title
- titleList: Displayed on list page 
- description: Page Meta Description for SEO
- summary: Page summary displayed in the articles list page
- lead: The lead paragraph
- toc: Show page table of content
- image: Image used from social media sharing and for list page
- date: Used for sorting with yyyy-mm-dd format
- weight: Menu item and listing sort order