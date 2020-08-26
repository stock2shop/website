# Website

Stock2Shop website and documentation built with Hugo.

## Contents

1. [Getting Started](#1-getting-started)
2. [Create a new page](#2-create-a-new-page)
3. [Sections](#3-sections)
    1. [Articles](#31-articles)
    2. [Case Studies](#32-case-studies--success-stories)
    3. [Developers](#33-developers)
    4. [Help Centre](#34-help-centre)
    5. [Integrations](#35-integrations)
    6. [User Docs](#36-user-docs)
4. [Appendix](#4-appendix)
    1. [Front Matter Glossary]((#41-front-matter-glossary))

* * *

## 1. Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo server```
- View in your browser with http://localhost:1313/

* * *

## 2. Create a new page

1. Run ```hugo new <section>/<filename>.md```
2. Open newly created file and update [Front Matter](#41-front-matter-glossary)
 
## 3. Sections

The site consists of [six main sections](#contents), each with its own distinct purpose. User Docs, Help Centre and
Developers share the same page layout and top menu whereas the rest differ in layout but share the default top menu. 

### 3.1. Articles

Summary to follow

#### [Front Matter](#41-front-matter-glossary)
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

### 3.2. Case Studies / Success Stories

Summary to follow

#### [Front Matter](#41-front-matter-glossary)
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

### 3.3. Developers

Summary to follow

#### [Front Matter](#41-front-matter-glossary)
```
---
title:
description:
---
```

### 3.4. Help Centre

Summary to follow

#### [Front Matter](#41-front-matter-glossary)
```
---
title:
heading:
description:
image:
---
```

### 3.5. Integrations

This section gets divided into platforms and combinations. Platform pages gets listed on the ```/integrations``` page and need to be marked with ```type:platform``` in the Front Matter.  

#### [Front Matter](#41-front-matter-glossary)
```
---
title:
titleList:
summary:
type:
image:
imageAlt:
weight:
---
```

### 3.6. User Docs

Summary to follow

#### [Front Matter](#41-front-matter-glossary)
```
---
title:
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

## 4. Appendix

### 4.1. Front Matter Glossary

**title**: Page meta title for SEO  
**heading**: Page heading when different from title  
**titleList**: Displayed on list page  
**linkTitle**: Hardcoded menu item title  
**description**: Page Meta Description for SEO  
**summary**: Page summary displayed in the articles list page  
**summary2**: Additional summary parameter for different styling eg. bold   
**lead**: Lead paragraph  
**lead2**: Second lead paragraph  
**toc**: Show page table of content  
**image**: Image used from social media sharing and for list page  
**date**: Used for sorting with yyyy-mm-dd format  
**weight**: The default menu item and listing sort order 