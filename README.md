# terrabyte-11ty-starter
Boilerplate for 11ty Terrabyte websites.

To best utilize this repo, you can create a subtree in your downstream, or simply copy/paste the content here into the downstream project. From there, please utilize the `terrabyte-11ty-template` to include repurposable UI elements and other components.

Caveats that _should not_ be copied include:

- `.git`: This is THIS project's git history - you'll make your own in your new project.
- `.github/workflows/notify-downstream.yml`: This is automation for triggering the update process for projects that use this template. So, let's not create a blackhole by looping through automations that trigger themselves...
- `_site`: This is the web-ready content rendered by the 11ty build process. It will be rendered in your new project as well.
- `node_modules`: This is a folder containing node-specific files. These won't be committed in GitHub nor should they be copied from project to project (use npm for this).
- `package.json` and `package-lock.json`: You just changed the `package.json` file, no need to overwrite it!
- `README.md`: Your new project requires it's own README :)