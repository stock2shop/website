# Technical Notes 

<!-- TOC -->autoauto- [Technical Notes](#technical-notes)auto    - [Essential Hugo Terms](#essential-hugo-terms)auto    - [Table of contents](#table-of-contents)auto    - [Menus](#menus)auto    - [CLI](#cli)auto    - [Workarounds best avoided](#workarounds-best-avoided)auto    - [URL Aliases](#url-aliases)auto    - [Issues](#issues)auto    - [Project specific libraries](#project-specific-libraries)auto    - [References and Resources](#references-and-resources)autoauto<!-- /TOC -->

## Shortcodes
- figure
- thumbnail

## Essential Hugo Terms
- Section: A content directory
- Content Type: Defined by section or front matter and used to identify and group layout templates
- Partial: A piece of HTML used in template file
- Shortcode: A piece of HTML used in a markdown file

## Table of contents
While extremely useful, ```.TableOfContents``` page variable has noteworthy menu layout limitation.

## Menus
1. Add menu entry to Front matter
2. Create partial to range through menu entries
3. Include partial in the applicable template file

## CLI
```hugo```: build / compile the site  
```server```: run site from memory  
```-D```: include draft pages
- Create new article page  
```hugo new articles/pagename.md```

## Workarounds best avoided
- To allow HTML in md files, the following can be added to the config file but should really be the last resort.
```
[markup.goldmark.renderer]
unsafe= true
```

## URL Aliases
- /documentation

## Issues
- Use of empty line ```&nbsp;``` in markdown not ideal
- Blockquote not working

## Project specific libraries
- Boostrap 4.5
- jQuery 3.5.1
- Popper

## Old vs New URLs & Names

| Old | New |
|---|---|
| /sage-one-accounting* | /sage-50cloud-pastel-partner |
| /sage-partner-xpress | /sage-50cloud-pastel-xpress* |

\* Currently in use

## References and Resources
- https://gohugo.io/
- https://kodify.net/hugo-static-site-tutorials/
- [YouTube](https://www.youtube.com/watch?list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3&v=qtIqKaDlqXo)