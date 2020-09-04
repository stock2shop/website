# Technical Notes

## Contents
[Concepts](#concepts)  
[Table of contents](#table-of-contents)  
[Menus](#menus)  
[CLI](#cli)  
[Shortcodes](#shortcodes)  
[Workarounds best avoided](#workarounds-best-avoided)  
[Issues](#issues)  
[Hugo libraries](#hugo-libraries)  
[Project libraries](#project-libraries)  
[References and Resources](#references-and-resources)

## Concepts
- Section: A content directory
- Content Type: Defined by section or front matter and used to identify and group layout templates
- Partial: A piece of HTML used in template file
- Shortcode: A piece of HTML used in a markdown file
- Page variable:
- Site variable:   

## Table of contents
Hugo can create a Table of Contents from the Markdown headings and store in the page variable `.TableOfContents`

## Menus

**Pros:**
- Custom menu entries
- Prepend or append with ease, useful for adding icon to menus

**Cons:**
- Uppercase, and some special characters like hiphens are not allowed in the menu identifier.
- Can't add other variables to menu

**Steps:**
1. Add menu entry to Front matter
2. Create partial to range through menu entries
3. Include partial in the applicable template file

```
menu:
  docside:
    parent: Getting Started
    name: Shopify
    weight: 10
```

## CLI
```hugo```: build / compile the site  
```server```: run site from memory  
```-D```: include draft pages
- Create new article page  
```hugo new articles/pagename.md```

## Shortcodes
- figure
- thumbnail

## Workarounds best avoided
- To allow HTML in md files, the following can be added to the config file but should really be the last resort.
```
[markup.goldmark.renderer]
unsafe= true
```

## Issues
- Use of empty line ```&nbsp;``` in markdown not ideal
- Blockquote not working

## Hugo libraries
- Goldmark

## Project libraries
- Boostrap 4.5
- jQuery 3.5.1
- Popper

## References and Resources
- https://gohugo.io/
- https://kodify.net/hugo-static-site-tutorials/
- [YouTube](https://www.youtube.com/watch?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3&v=qtIqKaDlqXo)