# Terrabyte 11ty Starter/Boilerplate
`Terrabyte Tools`

Boilerplate for Terrabyte 11ty websites. Get a jump on launching a Terrabyte static website.

To best utilize this repo, simply copy/paste the content here into your downstream project. Eventually, this Starter will provide the infrastructure for all web projects, and the [`terrabyte-web-ui`](https://github.com/terrabyte-tech/terrabyte-web-ui) package will provide the building blocks for them. Until contributors have more capacity, this Starter will serve both purposes (no ability to easily update old components, but also no overhead of managing and supporting design library).

## How to use:

1. To best utilize this starter template, begin by creating a new repo for your new project. Checkout to edit as you normally would.
2. Initialize the project to use node (npm or pnpm) -> `pnpm init`
3. Install 11ty -> `pnpm install @11ty/eleventy`
4. Copy the content in this repo to your new project

Caveats that _should not_ be copied from this repo include:

- `.git`: That is _THIS_ project's git history - you'll make your own in your new project.
- `package.json`: You just created a package file when initializing the project.
- `README.md`: Your new project requires it's own README :)
