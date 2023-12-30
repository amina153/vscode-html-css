# Visual Studio Code CSS Intellisense for HTML

![commit workflow](https://github.com/ecmel/vscode-html-css/actions/workflows/commit.yml/badge.svg)

HTML `id` and `class` attribute completion for Visual Studio Code.

## Features

- HTML `id` and `class` attribute completion.
- Supports specifying remote and local style sheets for completion.
- Supports any language for completion.
- Validates CSS selectors on demand.

## Usage

You can view a list of `id` and `class` attribute suggestions in configured languages.

## Specifying Style Sheets

Stylesheets can be specified in VS Code settings per workspace folder in `.vscode/settings.json` and will suggest for all configured languages within that workspace folder.

### Example

**`.vscode/settings.json`**

```json
{
  "css.styleSheets": [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "src/**/*.scss",
    "src/view/style.ts",
    "dist/style.css"
  ]
}
```

## Supported Languages

Supported languages can be configured with the `css.enabledLanguages` setting. By default `html` is enabled:

```json
{
  "css.enabledLanguages": ["html"]
}
```

Extension can be configured to support any language where it makes sense such as `nunjucks`, `twig`, `mustache`, `typescript` etc. You should also install corresponding language extension which registers the language id in VS Code.

This setting is application scoped and changing the setting requires restarting VS Code.

## Commands

### Validate Attributes

Validates all `id` and `class` attributes in the active editor.

### Clear Cache

Clears stylesheet cache.

## Installation

Extension can be installed from [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css).
