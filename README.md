# Terrabyte 11ty Starter
`Terrabyte Tools`

Boilerplate for Terrabyte 11ty web projects. Built on [Eleventy (11ty)](https://www.11ty.dev/) and the [`@terrabyte/web-ui`](https://github.com/terrabyte-tech/terrabyte-web-ui) shared UI package.

## How to use

1. Create a new repo for your project and clone it locally.
2. Copy the contents of this starter into the new repo. Do **not** copy:
   - `.git` — that's this repo's history; you'll have your own
   - `_site` — the built output; it gets generated on build
   - `node_modules` — install your own with `pnpm install`
3. Update `package.json` with your project's name, description, version, and repository URL.
4. Update `_data/site.json` with your project's metadata (title, URL, description, accent color, etc.). Refer to `_data/site.bak.jsonc` for documentation on each field.
5. Install dependencies: `pnpm install`
6. Start the dev server: `pnpm start`

## Release process

To cut a new version of the starter itself:

```
pnpm run release patch|minor|major
```

This bumps `package.json`, updates `terrabyteStarterVersion` in `_data/site.json`, prepends a new entry to `CHANGELOG.md`, and pushes with a version tag.

## Structure

| Path | Purpose |
|---|---|
| `_data/site.json` | Project metadata (title, URL, theme, schema, etc.) |
| `.eleventy.js` | Standard 11ty config — do not deviate from this pattern |
| `src/_includes/layouts/project-base.njk` | Extends `base.njk` from web-ui; add project CSS/JS here |
| `src/_includes/partials/project-header.njk` | Project-specific site header and nav |
| `src/_includes/partials/project-svgs.njk` | Project-specific SVG symbols |
| `src/css/site-styles.css` | Project-specific styles |
| `src/js/site-scripts.js` | Project-specific scripts |
| `src/sitemap.xml.njk` | Auto-generated sitemap (excludes `noIndex: true` pages) |
| `src/llms.txt.njk` | Auto-generated AI crawler file |
| `src/error.php.njk` | PHP-driven error page (400/401/403/404) |
