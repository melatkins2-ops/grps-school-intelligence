# GRPS School Intelligence

An iPad-first visit record for schools: one record per school, seen three ways (Building, CSA, Executive), with Apple Pencil or typed notes.

**Live site:** https://melatkins2-ops.github.io/grps-school-intelligence/

## What's here

- `index.html`: the tool (School Home, Building, CSA, Executive views, and New School Visit)
- `manifest.webmanifest`: lets it be added to an iPad home screen
- `apps-script/Code.gs`: Google Sheet connector for visit notes
- `README.txt`: earlier prototype notes
- `index(20260906-174203).html`: an older saved version

## Good to know

- **Saving across devices.** Open School Intelligence from its Google Apps Script web-app link (added to the iPad and iPhone Home Screen) and every visit and school note saves to the private Google Sheet *GRPS School Intelligence — Visit Notes*, so it follows you across iPad, iPhone and MacBook. A green "Saved to Google Sheet" line confirms each save. If the connection drops, notes stay on the device and are sent automatically when it's back.
- Opened directly from GitHub Pages, the site still works but saves only in that browser (local storage).
- `apps-script/Code.gs` is the connector. It lives in the Visit Notes sheet (Extensions > Apps Script) and loads this page from GitHub Pages, so site updates appear in the web app without redeploying.
- Support-team names (FSS and KSSN) follow the **FSS + KSSN Support Tracker**, the source of truth for those assignments. Other building staff come from the 2026–27 building roster and CSA staff assignments.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). It opens the site in a headless browser at desktop (1366px) and phone (390px) widths and fails if the page throws a JavaScript error, a local file or image is missing, or the page scrolls sideways. See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
