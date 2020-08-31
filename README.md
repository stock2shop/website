# Website

Stock2Shop website and documentation built with Hugo.

## Contents

1. [Getting Started](#1-getting-started)
2. [Sections](#2-sections)
    1. [Articles](#21-articles)
    2. [Case Studies](#22-case-studies--success-stories)
    3. [Developers](#23-developers)
    4. [Help Centre](#24-help-centre)
    5. [Integrations](#25-integrations)
    6. [User Docs](#26-user-docs)
3. [Appendix](#3-appendix)
    1. [Front Matter Glossary]((#31-front-matter-glossary))

* * *

## 1. Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo server```
- View in your browser with http://localhost:1313/

* * *
 
## 2. Sections

The site consists of six main sections. User Docs, Help Centre and Developers share the same page layout and top menu. The rest have different layouts apart from the general top menu. 

### 2.1. Articles

These posts draw on expertise gained over the years in the field of e-commerce and are promoted in monthly newsletters. 

#### Create a new page

1. Run ```hugo new articles/<filename>.md```
2. Open newly created file and update [Front Matter](#31-front-matter-glossary)

#### [Front Matter](#31-front-matter-glossary)
```
---
title:
heading:
titleList:
description:
summary:
lead:
image:
imageAlt:
date:
author:
---
```

### 2.2. Case Studies / Success Stories

As the heading suggests, this part of the website is dedicated to showcasing some of our most successful stories. Each article starts with a summary of the challenge faced by the client then stipulates the goals to overcome this challange. The bulk of the Case Study focuses on how each goal was achieved through targeted solutions. 

#### Create a new page

1. Run ```hugo new case-studies/<filename>.md```
2. Open newly created file and update [Front Matter](#31-front-matter-glossary)

#### [Front Matter](#31-front-matter-glossary)
```
---
title:
heading:
description:
lead:
summary:
summary2:
image:
imageAlt:
weight:
---
```

### 2.3. Developers

Developers often require information for API authentication and protocol. Here we provide this and other useful technical info in a succinct and precise manner.

#### Create a new page

1. Run ```hugo new developers/<filename>.md```
2. Open newly created file and update [Front Matter](#31-front-matter-glossary)

#### [Front Matter](#31-front-matter-glossary)
```
---
title:
titleList:
description:
lead:
weight:
---
```

### 2.4. Help Centre

Summary to follow

#### Create a new page

Instructions to follow

#### [Front Matter](#31-front-matter-glossary)
```
---
title:
heading:
description:
menu:
  help_centre:
    parent:
    name:
---
```

### 2.5. Integrations

This section gets split into platforms and combinations. Platform pages are listed on the ```/integrations``` page and need to be marked with ```type:platform``` in the Front Matter. The combination pages do not get listed in one place but rather referred to on applicable platform pages.

#### Create a new plaform page

1. Run ```hugo new --kind platforms integrations/platforms/<filename>.md```
2. Open newly created file and update [Front Matter](#31-front-matter-glossary)

#### [Front Matter](#31-front-matter-glossary)
```
---
title:
titleList:
summary:
lead:
type: platform
image:
imageAlt:
weight:
tags:
---
```
#### Create a new combination page

1. Run ```hugo new --kind combinations integrations/combinations/<filename>.md```
2. Open newly created file and update [Front Matter](#31-front-matter-glossary)  

#### [Front Matter](#31-front-matter-glossary)
```
---
title:
lead:
lead2:
description:
---
```

### 2.6. User Docs

The User Docs consist of five subsections:

1. **getting-started**  
  Setup requirements and procedures
2. **configuration**  
  Sync options specific to a source or channel 
3. **key-concepts**  
  An explanation and promotion of concepts and components central to the system  
4. **workflows**  
  Examples of improved workflows between different platforms
5. **product-data**  
  Useful tips and tricks for working with large product data sets 

#### Create a new page

1. Run ```hugo new --kind subsection user-docs/subsection/<filename>.md```
2. Open newly created file and update [Front Matter](#31-front-matter-glossary)

#### [Front Matter](#31-front-matter-glossary)
```
---
title:
heading:
description:
lead:
toc:
menu:
  docside:
    parent:
    name:
---
```
* * *

## 3. Appendix

### 3.1. Front Matter Glossary

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

### 3.2. Useful Concepts

|---|---|
|Archetype||
|||