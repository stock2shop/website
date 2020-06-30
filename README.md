# Website
Stock2Shop website, documentation and WIKI built with Hugo.

## Getting Started
- Install GoHugo
- Clone the project
- Navigate to the project parent directory
- Run ```hugo server -D```
- View in your browser with http://localhost:1313/

## Key Terms
- Draft: Drafts do not get deployed; once you finish a post, update the header of the post to say draft: false
- Front matter: Page meta data as shown below
```
title: "What are the requirements for Stock2Shop Software (APIFACT)?"
date: 2020-03-31T14:13:36+02:00
draft: true
menu: "main"
```
- Section:
- Type:

## Images
To add image in markdown use below syntax and save image in the static directory
```
![Example image](/images/howto_1.png)
```

## Menus
There are two ways to add menus:
1. Front Matter
    1. Add menu entry to Front matter
    2. Create Nav partial
    3. Include partial in header.html or
    
2. Declare in config.toml. More detail to follow  

## General Commands
- Start Hugo server with drafts enabled:  
```hugo server -D```
- Create new documentation page
```hugo new documentation/pagename.md```
- Build static pages and output to ```./public/```  
```hugo -D```

## Notes
- static/css are cached in the browser

# Themes
## Stock2shop_website theme
This is the theme for the main site.

# Managing Content
## Front matter
### Custom templates
Specify the page type to use a custom theme:

```type: "integrations"```

This locates the template here:
`{theme}/layouts/integrations/...`

this matches the first theme with said specified folder in `layouts` with order priority specified in 'config.toml' as follows:

`theme = ["stock2shop_website", "s2s"]`

### Taxonomies

Taxonomies need to be specified in the 'config.toml' file before being used in the content front matter for example:

```toml
[taxonomies]
  category = "categories"
  integration = "integrations"
  integration doc = "integration docs"
  tag = "tags"
```

- `categories` - The categories which the content belongs
- `tags` - Terms associated with content

Any number of additional custom types can be added. Here we have 2 custom types `integration` and `integration-doc`. An `integration` here would be the `Shopify` or `Magento` page. An `integration-doc` would be the document detailing how to integrate 2(or more) platforms e.g.:`Sage Business Cloud Financials Magento Integration`

In content front-matter:

**magento page:**
```yaml
categories:
- integrations
integrations:
- magento
tags:
- integration
- magento
```
Here we specifing that `magento` is of type `integration`, specifically a `magento` -> `integration`.

**sage one magento page:**
```yaml
categories:
- integration docs
integration-docs:
- sage one magento
tags:
- integration
- magento
- sage one
- sage one magento
```
Similarly here we specifing that `sage one magento` is of type `integration doc`, specifically a `sage one magento` -> `integration doc`.

### Creating Listings From Taxonomies

While the content in Hugo is often organised and classified according to the folder structure, it is possible to organise and classify content according to Taxonomies. This means that the folder structure doesn't necessarily have to relate to the classification of the content.

Why use taxonomies for listings:
- Co-related content. As an example, the `sage one magento` integration doc relates to and is listed on both the `sage one` and `magento` integrations page. Here there need only be one 'integration doc' which both integrations reference.
- Searching content
- Associtaing related content
- Multiple ways to organize the content structure

#### Example:
As an example to get all the `integration-docs` associated with `magento`, we need only find all the `integration-docs` which contain the `mangento` tag.

_*This requires conventions to be outlined and documented for the use of tags_

