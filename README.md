# Website
Stock2Shop website, documentation and WIKI built with Hugo.

## Getting Started
- Install GoHugo
- Clone the project
- Navigate to the project parent directory
- Run ```hugo server```
- View in your browser with http://localhost:1313/

## Key Terms
- Front matter: Page meta data as example shown below
```
---
title: "What are the requirements for Stock2Shop Software (APIFACT)?"
date: 2020-03-31T14:13:36+02:00
draft: true
menu: "main"
---
```
- Section:
- Type:
- Identifier:
- Site Variable:
- Page Variable:
- Partial: A piece of HTML used in template file
- Shortcode: A piece of HTML used in a markdown file

## Images
To add image in markdown use below syntax and save image in the static directory
```
![Example image](/images/howto_1.png)
```

## Table of contents
While extremely useful, the use of the ```.TableOfContents``` page variable as severe limitations.

More to follow - TODO

## Menus
The two methods to add menus:

1. Front Matter
    1. Add menu entry to Front matter
    2. Create Nav partial
    3. Include partial in where needed
    
2. Declare in config.toml. More detail to follow..

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

## Issues
- Use of empty line ```&nbsp;``` in markdown not ideal

## Content Writer's Guide
IN PROGRESS..
- Using bootstrap classes, alerts, callouts etc
- Blockquote not working