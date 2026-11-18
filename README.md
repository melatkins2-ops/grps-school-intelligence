# GRPS School Intelligence

An iPad-first visit record for schools: one record per school, seen three ways (Building, CSA, Executive), with Apple Pencil or typed notes.

**Live site:** https://melatkins2-ops.github.io/grps-school-intelligence/

## What's here

- `index.html`: the tool (School Home, Building, CSA, Executive views, and New School Visit)
- `manifest.webmanifest`: lets it be added to an iPad home screen
- `README.txt`: earlier prototype notes
- `index(20260906-174203).html`: an older saved version

## Good to know

- **Visit notes live in Google, on the district account.** *+ Start Visit* opens the **GRPS School Visit** Google Form with the school and today's date filled in. Each submission saves to the private sheet *GRPS School Intelligence — Visit Notes*, so visits are available on iPad, iPhone and MacBook. *Past visits* opens that sheet. (Apps Script is turned off for @students accounts, so the form is the supported route.)
- School notes typed into the app itself (What I am watching, story, CSA and executive notes) are still saved only in the browser on that device; use Export to keep a copy.
- Support-team names (FSS and KSSN) follow the **FSS + KSSN Support Tracker**, the source of truth for those assignments. Other building staff come from the 2026–27 building roster and CSA staff assignments.

## Updating the site

Edit the files on a branch and open a pull request. GitHub Pages publishes `main` automatically, usually within a minute or two of a merge.

## Automated site check

Every pull request and every push to `main` runs **Site check** (`.github/workflows/site-check.yml`). It opens the site in a headless browser at desktop (1366px) and phone (390px) widths and fails if the page throws a JavaScript error, a local file or image is missing, or the page scrolls sideways. See the Actions tab for results.

Maintained by GRPS Community & Student Affairs.
