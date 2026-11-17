# GRPS School Intelligence

An iPad-first visit record for schools: one record per school, seen three ways (Building, CSA, Executive), with Apple Pencil or typed notes.

**Live site:** https://melatkins2-ops.github.io/grps-school-intelligence/

## What's here

- `index.html`: the tool (School Home, Building, CSA, Executive views, and New School Visit)
- `manifest.webmanifest`: lets it be added to an iPad home screen
- `README.txt`: earlier prototype notes
- `index(20260906-174203).html`: an older saved version

## Good to know

- Prototype. Visit records are stored in the browser on the device (local storage) and do not sync. District production use would need an authenticated shared data store that meets GRPS privacy and security requirements.
- Schools and CSA staff assignments come from the 2026–27 building roster and CSA staff assignments.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). It opens the site in a headless browser at desktop (1366px) and phone (390px) widths and fails if the page throws a JavaScript error, a local file or image is missing, or the page scrolls sideways. See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
