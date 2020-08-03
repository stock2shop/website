# Website

Stock2Shop website, documentation and WIKI built with Hugo.

## Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo server```
- View in your browser with http://localhost:1313/

---

## Site Structure
The following 5 sections contain instructions to create new pages and show differences in layout and page meta data.  

### 1. Articles

##### Create new page
1. Run ```hugo new articles/filename.md```
2. Open newly created file and [description](#key-terms) and summary in Front Matter

##### Front Matter
```
---
title: "product data: what you need to know"
heading: "what you need to know"
description: "Understanding product data is one of the most important elements to a successful e-commerce business. Here's an explanation of what you need to know."
summary: "Understanding product data is essential for a successful e-commerce business. Here’s an overview of the most important elements of product data you need to understand."
lead: "Understanding product data is one of the most important elements to a successful e-commerce business. If you’re just starting your e-commerce website, you may think that you can just move your product data from your accounting system to your website and sell online. Right? Wrong. You need to know as much as you can about your products – and share that information with your customers – to successfully sell online."
date: 2019-07-05
---
```

### 2. Case Studies

##### Create new page
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page

##### Front Matter
```
---
title: "AL & CD Ashley"
description: "Imports and distributes high quality cookware. Success Story featuring Pastel Partner, B2B and B2C stores."
---
```

### 3. Documentation

##### Create new page
1. Navigate to documentation section and add the .md file
2. Copy and update front-matter from another page
3. Update menu weight (order) and parent page

##### Front Matter
```
---
title: "Installing Stock2shop for Sage Business Cloud Accounting (formerly Sage One)"
menu:
  docside:
     parent: Getting Started
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
title: "Shopify"
type: platform
weight: 1
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

## Terms
- title: Page Meta Title important for SEO
- heading: Page title used when different from the SEO title 
- description: Page Meta Description important for SEO
- summary: Page summary displayed in the articles list page
- lead: The lead paragraph with unique styling
- og_image: Image used from social media sharing and for list page
- date: Used for sorting, yyyy-mm-dd format should be used
- weight: Menu item sort order