# Technical Notes 
- Section: A content directory
- Content Type: Defined by section or front matter and used to identify and group layout templates
- Partial: A piece of HTML used in template file
- Shortcode: A piece of HTML used in a markdown file

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