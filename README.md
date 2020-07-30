# Website
Stock2Shop website, documentation and WIKI built with Hugo.

## Getting Started
- Install GoHugo
- Clone the project
- Navigate to project and run ```hugo server```
- View in your browser with http://localhost:1313/

## How to add pages
##### Article
1. Run ```hugo new articles/filename.md```
2. Open newly created file and update summary in [front-matter](#key-terms)
##### Technical Doc, Integrations Page or Case Study
1. Navigate to the relevant section and add the .md file
2. Copy and update front-matter from another page
   1. Integrations Only - If it's a 'single platform' page, add "type: platform" to the front-matter for it to be added to the integrations list
##### User Doc
1. Navigate to documentation section and add the .md file
2. Copy and update front-matter from another page
3. Update menu weight (order) and parent page

## Key Terms
- Front matter: Page meta data as shown in example below
```
---
title: "What are the requirements for Stock2Shop Software (APIFACT)?"
date: 2020-03-31T14:13:36+02:00
draft: true
menu: "main"
---
```
- Section: A content directory
- Content Type: Defined by section or front matter and used to identify and group layout templates
- Partial: A piece of HTML used in template file
- Shortcode: A piece of HTML used in a markdown file

## Images
To add image in markdown use below syntax and save image in the static directory
```
![Example image](/images/howto_1.png)
```

## Table of contents
While extremely useful, the use of the ```.TableOfContents``` page variable has limited layout options.

## Menus
1. Add menu entry to Front matter
2. Create Nav partial
3. Include partial in where needed

## CLI
```hugo```: build / compile the site  
```server```: run site from memory  
```-D```: include draft pages
- Create new documentation page - CHANGE TO ARTICLE PAGE  
```hugo new documentation/pagename.md```
- hugo server --watch --verbose

## Workarounds to be avoided
- To allow html in md files the following can be added to the config file.
```
[markup.goldmark.renderer]
unsafe= true
```

## Notes
- static/css are cached in the browser
- Title Case currently used for Titles

## Issues
- Use of empty line ```&nbsp;``` in markdown not ideal
- Blockquote not working
- .IsMenuCurrent not working with custom menu item name

## Libraries
- Boostrap 4.5
- jQuery 3.5.1
- Popper

## References and Resources
- https://gohugo.io/
- https://kodify.net/hugo-static-site-tutorials/
- [YouTube](https://www.youtube.com/watch?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3&v=qtIqKaDlqXo)