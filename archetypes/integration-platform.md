---
{{ $name := replace .Name "-" " " | lower }}
{{ $nameTitleCase := $name | title }}
title: "{{ $nameTitleCase }} Integration"
draft: true
data: "{{ .Date }}"
image: ""
description: ""
headerTitle: ""
integrationImage: ""
name: "{{ $nameTitleCase }}"

type: "integrations"

# taxonomy
categories:
- integrations
integrations:
- {{ .Name }}
tags:
- integration
- {{ $name }}

listingType: "integration-docs"
listingTags:
- {{ $name }}
listingTemplate: ""
---

