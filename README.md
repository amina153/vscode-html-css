# Visual Studio Code CSS Support for HTML Documents

Missing CSS support for HTML documents.

## Features

- HTML `class` attribute completion.
- HTML `id` attribute completion.
- Supports `<link rel="stylesheet">` and `<style></style>` tags.
- Supports completion from additional style sheets.

## Example

In the following HTML file, completion will suggest for all `id` and `class` attributes:

```html
<!DOCTYPE html>
<html>

<head>
    <!-- 1 -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        rel="stylesheet">

    <!-- 2 -->
    <link href="site.css" rel="stylesheet">

    <!-- 3 -->
    <link href="./site.css" rel="stylesheet">

    <!-- 4 -->
    <link href="/site.css" rel="stylesheet">

    <!-- 5 -->
    <style>
        #content {
            display: block;
        }

        .embedded {
            display: block;
        }
    </style>
</head>

<body>
    <div id="content" class="container site embedded">
        <div class="row">
            <div class="col">1 of 2</div>
            <div class="col">2 of 2</div>
        </div>
    </div>
</body>

</html>
```
(2), (3) and (4) are equivalent and points to the same file in the root of workspace folder.

If it is not possible to specify local or remote styles within HTML file, they can be specified in VS Code settings per workspace folder in `.vscode/settings.json`:

```json
"css.styleSheets": [

  // 1
  "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",

  // 2
  "site.css",

  // 3
  "./site.css",

  // 4
  "/site.css"
]
```

## Supported Languages

Supported languages can be configured with the `css.enabledLanguages` setting. By default 
`html` is enabled:

```json
"css.enabledLanguages": [
  "html"
]
```

Extension can be configured to support any language where it makes sense such as:

`django-html` `laravel-blade` `razor` `vue` `blade` `pug` `jade` `handlebars` `php` `twig` 
`md` `nunjucks` `javascriptreact` `typescriptreact` `erb` `HTML (Eex)` `html-eex` `haml` `svelte`

## Additional Style Sheets

If it is not possible to specify local or remote styles with `<link rel="stylesheet">` tag, they can be specified in VS Code settings:

```json
"css.styleSheets": [
  "css/bootstrap.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
]
```

## Installation

[Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

## Usage

You can view a list of class attributes via `ctrl + space`.
