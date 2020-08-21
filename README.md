# Website

Stock2Shop website and documentation built with Hugo.

1. [Getting Started](#1 Getting Started)
2. [Site Structure](#2 Site Structure)
    1. [Articles](#2.1 Articles)
    2. [Developers](#2.2 Developers)
    3. [Case Studies](#2.3 Case Studies)
    4. [User docs](#2.4 User docs)
    5. [Integrations](#2.5 Integrations)
    6. [Help Centre](#2.6 Help Centre)
3. [Appendix](#3 Appendix)

## 1. Getting Started

- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo server```
- View in your browser with http://localhost:1313/

---

## 2. Site Structure
The next 6 sections contain instructions to create new pages and show differences in layout and meta data. Titles get converted into Title Case so no need for capitalization. The capitalization in the Front Matter so in cases lik acronyms eg 'B2B' this should be capitalised in the Front Matter.

### 2.1 Articles

#### Create new page
1. Run ```hugo new articles/filename.md```
2. Open newly created file and add [description](#parameters) and summary in Front Matter

#### Front Matter
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
### 2.2 Developers

#### Create new page

#### Front Matter
```
---
title:
description:
---
```

### 2.3 Case Studies / Success Stories

#### Create new page
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page

#### Front Matter
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

### 2.4 User docs

#### Create new page
1. Navigate to the user-docs section and add the .md file
2. Copy and update front-matter from another page
3. Update menu weight, parent and name

#### Front Matter
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

### 2.5 Integrations

#### Create new page
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page
3. If it's a 'single platform' page, add "type: platform" to the front-matter for it to be added to the integrations list

#### Front Matter
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

### 2.6 Help Centre

#### Create new page
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page
#### Front matter
```
---
title:
heading:
description:
image:
---
```

---

## 3. Appendix

### Front Matter Map

- **title**: Page meta title for SEO
- **heading**: Page heading when different from title
- **titleList**: Displayed on list page 
- **linkTitle**: Hardcoded menu item title
- **description**: Page Meta Description for SEO
- **summary**: Page summary displayed in the articles list page
- **summary2**: Additional summary parameter for different styling eg. bold 
- **lead**: Lead paragraph
- **lead2**: Second lead paragraph
- **toc**: Show page table of content
- **image**: Image used from social media sharing and for list page
- **date**: Used for sorting with yyyy-mm-dd format
- **weight**: The default menu item and listing sort order