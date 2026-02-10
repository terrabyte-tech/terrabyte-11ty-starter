# Terrabyte 11ty Starter/Boilerplate
`Terrabyte Tools`

Boilerplate for Terrabyte 11ty websites. Get a jump on launching a Terrabyte static website.

To best utilize this repo, simply copy/paste the content here into your downstream project. Eventually, this Starter will provide the infrastructure for all web projects, and the [`terrabyte-web-ui`](https://github.com/terrabyte-tech/terrabyte-web-ui) package will provide the building blocks for them. Until contributors have more capacity, the UI repo will be frozen and not published as an node package. Future versions may entail swapping the static GitHub path here with the published package.

## How to use:

1. To best utilize this starter template, begin by creating a new repo for your new project. Checkout to edit as you normally would.
2. Copy and paste the content in this project into the new project. Caveats that _should not_ be copied from this repo include:
    - `.git`: That is _THIS_ project's git history - you'll make your own in your new project.
    - `_site`: Site build of the template (you'll build your own in the new project)
    - `node_modules`: You will install your own packages when building your new project
    - `README.md`: Your new project should have it's own README :)
3. Replace content in the new project's `package.json`:
    - Replace/remove references to GitHub repository
    - Replace project details like title, description, and version
4. Install the dependencies -> `pnpm install`
