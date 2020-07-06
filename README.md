# Website
Stock2Shop website, documentation and WIKI built with Hugo.

## Getting Started
- Install GoHugo
- Clone the project
- Navigate to the project parent directory
- Run ```hugo server -D```
- View in your browser with http://localhost:1313/

## Key Terms
- Front matter: Page meta data as shown below
```
title: "What are the requirements for Stock2Shop Software (APIFACT)?"
date: 2020-03-31T14:13:36+02:00
draft: true
menu: "main"
```
- Section:
- Type:
- Identifier:
- Site Variable:
- Page Variable:
- Shortcode: A piece of HTML used in a markdown file
- Draft: Drafts do not get deployed; once you finish a post, update the header of the post to say draft: false

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
```hugo server```  
```hugo``` command build / compile the site  
```server``` command let the site run from memory  
```-D``` flag include draft pages
- Create new documentation page  
```hugo new documentation/pagename.md```
- Watch for changes in /public
```hugo server --watch --verbose```

## Workarounds to be avoided
- Add to config file to allow html in md files.
```
[markup.goldmark.renderer]
unsafe= true
```

## Notes
- static/css are cached in the browser
- Partial vs Shortcode:TODO

## Issues
- Empty line: &nbsp; not ideal

## Content Writer Guide 
TODO
- Using bootstrap classes, alerts, callouts etc
- Blockquote not working
